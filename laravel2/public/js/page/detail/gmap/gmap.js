$(function($, win, doc) {
	var $Gmap = gmap = {
			imgPath:"http://www.quimg.com",
			init:false,
			infoBox:null,
			map:null, //the google map object
			lineMap:{}, //all the lines
			markerMap:{}, //all the markers 
			curMarkerCount:"0",
			changeDay: function(day,from){
				if($Gmap.infoBox){
					$Gmap.infoBox.close();
				}
				if(from=='day') $("#map-poi").hide();
				if($(day).attr("data-on")=="1") return;
				
				//把原线路和marker给重置颜色
				var dayon = $("#map-list").find("li[data-on='1']");
				if(dayon.length>0){
					dayon.children().eq(1).children().each(function(){
						var poiId = $(this).attr("data-poiId"), count = $(this).attr("data-count");
						$Gmap.markerMap[count].setOptions({icon : $Gmap.imgPath +"/googleMap/blue-map-icon/"+count+".png"});
					});
					dayon.attr("data-on","0").removeClass("on");
					for(var a in $Gmap.lineMap){
						$Gmap.lineMap[a].setOptions({strokeColor:"#07A5A6"});
					}
				}
				//把当天的li选中
				$(day).parent().addClass("on").attr("data-on","1");
				//更换marker颜色
				$(day).next().children().each(function(index,elem){
					var poiId = $(this).attr("data-poiId"), count = $(this).attr("data-count");
					$Gmap.markerMap[count].setOptions({icon : $Gmap.imgPath + "/googleMap/"+count+".png"});
					if(index==0) $Gmap.map.setCenter($Gmap.markerMap[count].position);
				});
				//更换线路颜色
				$(day).next().children().each(function(){
					var poiId = $(this).attr("data-poiId"), count = $(this).attr("data-count");
					if($(this).next().length>0){
						$Gmap.lineMap[$(this).attr("data-count")].setOptions({strokeColor:"#F08400"});
					}
					$Gmap.markerMap[count].setOptions({icon : $Gmap.imgPath + "/googleMap/"+count+".png"});
				});
			},
			clickPoi: function(poi){
				$Gmap.changeDay($(poi).parent().prev()[0],"poi");
				//弹出相应的marker
				google.maps.event.trigger($Gmap.markerMap[$(poi).attr("data-count")], 'click');
			},
			initialize: function() {
				//地图参数设置
				var z_room = 6,
					all_locations=[],
					locations = JSON.parse($('#mapLocation').val());
				for(var i=0;i<locations.length;i++){
					var one_day = locations[i];
					for(var j=0;j<one_day.length;j++){
						if(one_day[j]) all_locations.push(one_day[j]);
					}
				}
				var mapOptions = {
					zoom : z_room,
					center : new google.maps.LatLng(all_locations[0].lat, all_locations[0].lon),
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					panControl : true,
					zoomControl : true,
					mapTypeControl : true,
					mapTypeControlOptions : {
						style : google.maps.MapTypeControlStyle.HORIZONTAL_BAR
					},
					scaleControl : true,
					streetViewControl : true,
					overviewMapControl : true
				};
				$Gmap.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				
				
				for(var j=0;j<all_locations.length;j++){
					var loc = all_locations[j];
					var marker = new google.maps.Marker({//标记
						position : new google.maps.LatLng(loc.lat, loc.lon),
						map : $Gmap.map,
						icon : $Gmap.imgPath + "/googleMap/blue-map-icon/"+(j+1)+".png",
						title : loc.nameCn,
						poiId : loc.id,
						count : (j+1) + ""
					});
					$Gmap.markerMap[""+(j+1)] = marker;
					google.maps.event.addListener(marker, 'click', function() {
						$Gmap.changeDay($("li[data-count='"+this.count+"']").parent().prev()[0],"poi");
						if($Gmap.infoBox){
							$Gmap.infoBox.close();
						}
						if($Gmap.curMarkerCount!='0'){
							$Gmap.markerMap[$Gmap.curMarkerCount].setOptions({zIndex:998});
						}
						var _marker = this;
						_marker.setOptions({zIndex:999});
						$Gmap.curMarkerCount = this.count;
						$.get("#/map-poi/" + this.poiId,function(rsp){
							var cthtml = [
											'<div style="left:153px;top:39px;width:432px;border:1px solid #abc;background-color:#fff;padding:10px;">',
											'<img style="width:100%;height:256px;display:block;" src="'+$Gmap.imgPath+'/fixed/img/poi/500x300/'+rsp.data.image+'"/>',
											'<p style="font-family:Microsoft Yahei, 微软雅黑, Verdana, 宋体;font-size:14px;margin-top:5px;height:125px;overflow:auto;">'+rsp.data.intro+'</p>',
											'<div style="cursor:pointer;background:url('+$Gmap.imgPath+'/googleMap/map-close.png) no-repeat;width:49px;height:49px;position:absolute;left:420px;top:-15px;" onclick="$Gmap.infoBox.close();$Gmap.map.setOptions({scrollwheel:true});"></div>',
											'</div>'
											].join("");
							$Gmap.infoBox = new InfoBox({
								content: cthtml,
								disableAutoPan: false,
								pixelOffset: new google.maps.Size(-220, -470),//box margin left|top
								infoBoxClearance: new google.maps.Size(1, 50),//marker margin left|top
								isHidden: false,
								pane: "floatPane",
								enableEventPropagation: true
							});
							$Gmap.infoBox.open($Gmap.map, _marker);
							$Gmap.map.setOptions({scrollwheel:false});
		            	});
		            	return;
			        });
					if(j < all_locations.length-1){
						var polyline = new google.maps.Polyline({
							map : $Gmap.map,
							icons : [{
								icon : {path : google.maps.SymbolPath.FORWARD_OPEN_ARROW},//给直线添加箭头  
								offset : '100%'
							}],
							strokeColor : "#07A5A6",
							strokeOpacity : 1.0,
							strokeWeight : 3
						});
						var pathArr=[];
						pathArr.push(new google.maps.LatLng(loc.lat, loc.lon));
						pathArr.push(new google.maps.LatLng(all_locations[j+1].lat, all_locations[j+1].lon));
						polyline.setPath(pathArr);
						$Gmap.lineMap[j+1] = polyline;
					}
				}
				$Gmap.init = true;
			}
	};
	//page load && execute immediately
	window.$Gmap = $Gmap;
	//google.maps.event.addDomListener(window, 'load', $Gmap.initialize);
}(jQuery, window, document));