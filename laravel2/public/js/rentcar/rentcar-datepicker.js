(function ($) {
  var DatePicker = function () {
    var ids = {},
      views = {
        years: 'datepickerViewYears',
        moths: 'datepickerViewMonths',
        days:  'datepickerViewDays'
      },
      tpl = {
        wrapper: '<div class="datepicker"><p class="tips_msg">注：租期以天为单位，24小时为一天，不满24小时的按1天计算</p><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
        head: [
          '<td class="datepickerBlock">',
          '<table cellspacing="0" cellpadding="0">',
            '<thead>',
              '<tr>',
                '<th colspan="7"><a class="datepickerGoPrev" href="#"><span><%=prev%></span></a>',
                '<a class="datepickerMonth" href="#"><span></span></a>',
                '<a class="datepickerGoNext" href="#"><span><%=next%></span></a></th>',
              '</tr>',
              '<tr class="datepickerDoW">',
                '<th><span class="red_font"><%=day1%></span></th>',
                '<th><span><%=day2%></span></th>',
                '<th><span><%=day3%></span></th>',
                '<th><span><%=day4%></span></th>',
                '<th><span><%=day5%></span></th>',
                '<th><span><%=day6%></span></th>',
                '<th><span class="red_font"><%=day7%></span></th>',
              '</tr>',
            '</thead>',
          '</table></td>'
        ],
        space : '<td class="datepickerSpace"><div></div></td>',
        days: [
          '<tbody class="datepickerDays">',
            '<tr>',
              '<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>',
              '<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>',
              '<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>',
              '<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>',
              '<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>',
              '<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>',
              '<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>',
              '<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>',
              '<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>',
              '<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>',
              '<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>',
              '<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>',
              '<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>',
              '<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>',
              '<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>',
              '<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>',
              '<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>',
              '<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>',
              '<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>',
              '<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>',
              '<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>',
              '<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>',
              '<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>',
              '<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>',
              '<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>',
              '<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>',
              '<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>',
              '<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>',
              '<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>',
              '<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>',
              '<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>',
              '<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>',
              '<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>',
              '<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>',
              '<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>',
              '<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>',
              '<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>',
            '</tr>',
          '</tbody>'
        ],
        months: [
          '<tbody class="<%=className%>">',
            '<tr>',
              '<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>',
              '<td colspan="1"><a href="#"><span><%=data[3]%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>',
              '<td colspan="1"><a href="#"><span><%=data[7]%></span></a></td>',
            '</tr>',
            '<tr>',
              '<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>',
              '<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>',
              '<td colspan="1"><a href="#"><span><%=data[11]%></span></a></td>',
            '</tr>',
          '</tbody>'
        ]
      },
      defaults = {
        date: null,
        current: null,
        inline: false,
        mode: 'single',
        calendars: 1,
        starts: 0,
        prev: '&lt;',
        next: '&gt;',
        view: 'days',
        position: 'bottom',
        showOn: 'focus',
        onRenderCell: function() { return {} },
        onChange: function() { },
        onBeforeShow: function() { return true },
        onAfterShow: function() { },
        onBeforeHide: function() { return true },
        onAfterHide: function() { },
        locale: {
          daysMin: ["日", "一", "二", "三", "四", "五", "六"],
          months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        extraHeight: false,
        extraWidth: false,
        lastSel: false
      },
      
      fill = function(el) {
        var options = $(el).data('datepicker');
        var cal = $(el);
        var currentCal = Math.floor(options.calendars/2), date, data, dow, month, cnt = 0, days, indic, indic2, html, tblCal;
        
        cal.find('td>table tbody').remove();
        for(var i = 0; i < options.calendars; i++) {
          date = new Date(options.current);
          date.addMonths(-currentCal + i);
          tblCal = cal.find('table').eq(i+1);
          
          if(i == 0) tblCal.addClass('datepickerFirstView');
          if(i == options.calendars - 1) tblCal.addClass('datepickerLastView');
          
          if(tblCal.hasClass('datepickerViewDays')) {
            dow = date.getMonthName(true)+" "+date.getFullYear();
          } else if(tblCal.hasClass('datepickerViewMonths')) {
            dow = date.getFullYear();
          } else if(tblCal.hasClass('datepickerViewYears')) {
            dow = (date.getFullYear()-6) + ' - ' + (date.getFullYear()+5);
          } 
          tblCal.find('thead tr:first th a:eq(1) span').text(dow);
          dow = date.getFullYear()-6;
          data = {
            data: [],
            className: 'datepickerYears'
          }
          for( var j = 0; j < 12; j++) {
            data.data.push(dow + j);
          }
          html = tmpl(tpl.months.join(''), data);
          date.setDate(1);
          data = {weeks:[], test: 10};
          month = date.getMonth();
          var dow = (date.getDay() - options.starts) % 7;
          date.addDays(-(dow + (dow < 0 ? 7 : 0)));
          cnt = 0;
          while(cnt < 42) {
            indic = parseInt(cnt/7,10);
            indic2 = cnt%7;
            if (!data.weeks[indic]) {
              data.weeks[indic] = {
                days: []
              };
            }
            data.weeks[indic].days[indic2] = {
              text: date.getDate(),
              classname: []
            };
            var today = new Date();
            if (today.getDate() == date.getDate() && today.getMonth() == date.getMonth() && today.getYear() == date.getYear()) {
              data.weeks[indic].days[indic2].classname.push('datepickerToday');
            }
            if (date < today) {
              data.weeks[indic].days[indic2].classname.push('datepickerOutdate');
            }
            if (date > today) {
              data.weeks[indic].days[indic2].classname.push('datepickerFuture');
            }
            
            if (month != date.getMonth()) {
              data.weeks[indic].days[indic2].classname.push('datepickerNotInMonth');
              data.weeks[indic].days[indic2].classname.push('datepickerDisabled');
            }
            if (date.getDay() == 0) {
              data.weeks[indic].days[indic2].classname.push('datepickerSunday');
            }
            if (date.getDay() == 6) {
              data.weeks[indic].days[indic2].classname.push('datepickerSaturday');
            }
            var fromUser = options.onRenderCell(el, date);
            var val = date.valueOf();
            if(options.date && (!$.isArray(options.date) || options.date.length > 0)) {
              if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
                data.weeks[indic].days[indic2].classname.push('datepickerSelected');
              }
            }
            if (fromUser.disabled) {
              data.weeks[indic].days[indic2].classname.push('datepickerDisabled');
            }
            if (fromUser.className) {
              data.weeks[indic].days[indic2].classname.push(fromUser.className);
            }
            data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
            cnt++;
            date.addDays(1);
          }
          html = tmpl(tpl.days.join(''), data) + html;
          
          data = {
            data: options.locale.monthsShort,
            className: 'datepickerMonths'
          };
          html = tmpl(tpl.months.join(''), data) + html;
          tblCal.append(html);
        }
      },
      
      extendDate = function(locale) {
        if (Date.prototype.tempDate) {
          return;
        }
        Date.prototype.tempDate = null;
        Date.prototype.months = locale.months;
        Date.prototype.monthsShort = locale.monthsShort;
        Date.prototype.getMonthName = function(fullName) {
          return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
        };
        Date.prototype.addDays = function (n) {
          this.setDate(this.getDate() + n);
          this.tempDate = this.getDate();
        };
        Date.prototype.addMonths = function (n) {
          if (this.tempDate == null) {
            this.tempDate = this.getDate();
          }
          this.setDate(1);
          this.setMonth(this.getMonth() + n);
          this.setDate(Math.min(this.tempDate, this.getMaxDays()));
        };
        Date.prototype.addYears = function (n) {
          if (this.tempDate == null) {
            this.tempDate = this.getDate();
          }
          this.setDate(1);
          this.setFullYear(this.getFullYear() + n);
          this.setDate(Math.min(this.tempDate, this.getMaxDays()));
        };
        Date.prototype.getMaxDays = function() {
          var tmpDate = new Date(Date.parse(this)),
            d = 28, m;
          m = tmpDate.getMonth();
          d = 28;
          while (tmpDate.getMonth() == m) {
            d ++;
            tmpDate.setDate(d);
          }
          return d - 1;
        };
      },
      
      layout = function(el) {
        var options = $(el).data('datepicker');
        var cal = $('#' + options.id);
        if (options.extraHeight === false) {
          var divs = $(el).find('div');
          options.extraHeight = divs.get(0).offsetHeight + divs.get(1).offsetHeight;  // heights from top/bottom borders
          options.extraWidth = divs.get(2).offsetWidth + divs.get(3).offsetWidth;     // widths from left/right borders
        }
        var tbl = cal.find('table:first').get(0);
        var width = tbl.offsetWidth;
        var height = tbl.offsetHeight;
        cal.css({
          width: width + options.extraWidth + 'px',
          height: height + options.extraHeight + 'px'
        }).find('div.datepickerContainer').css({
          width: width + 'px',
          height: height + 'px'
        });
      },
      
      click = function(ev) {
        if ($(ev.target).is('span')) {
          ev.target = ev.target.parentNode;
        }
        var el = $(ev.target);
        if (el.is('a')) {
          ev.target.blur();
          if (el.hasClass('datepickerDisabled')) {
            return false;
          }
          var options = $(this).data('datepicker');
          var parentEl = el.parent();
          var tblEl = parentEl.parent().parent().parent();
          var tblIndex = $('table', this).index(tblEl.get(0)) - 1;
          var tmp = new Date(options.current);
          var changed = false;
          var fillIt = false;
          var currentCal = Math.floor(options.calendars/2);
          
          if (parentEl.is('th')) {
            
            if (el.hasClass('datepickerMonth')) {
              tmp.addMonths(tblIndex - currentCal);
              
              if(options.mode == 'range') {
                options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
                tmp.addDays(tmp.getMaxDays()-1);
                tmp.setHours(23,59,59,0);
                options.date[1] = tmp.valueOf();
                fillIt = true;
                changed = true;
                options.lastSel = false;
              } else if(options.calendars == 1) {
                if(tblEl.eq(0).hasClass('datepickerViewDays')) {
                  tblEl.eq(0).toggleClass('datepickerViewDays datepickerViewMonths');
                  el.find('span').text(tmp.getFullYear());
                } else if(tblEl.eq(0).hasClass('datepickerViewMonths')) {
                  tblEl.eq(0).toggleClass('datepickerViewMonths datepickerViewYears');
                  el.find('span').text((tmp.getFullYear()-6) + ' - ' + (tmp.getFullYear()+5));
                } else if(tblEl.eq(0).hasClass('datepickerViewYears')) {
                  tblEl.eq(0).toggleClass('datepickerViewYears datepickerViewDays');
                  el.find('span').text(tmp.getMonthName(true)+", "+tmp.getFullYear());
                }
              }
            } else if (parentEl.parent().parent().is('thead')) {
              if(tblEl.eq(0).hasClass('datepickerViewDays')) {
                options.current.addMonths(el.hasClass('datepickerGoPrev') ? -1 : 1);
              } else if(tblEl.eq(0).hasClass('datepickerViewMonths')) {
                options.current.addYears(el.hasClass('datepickerGoPrev') ? -1 : 1);
              } else if(tblEl.eq(0).hasClass('datepickerViewYears')) {
                options.current.addYears(el.hasClass('datepickerGoPrev') ? -12 : 12);
              }
              fillIt = true;
            }
            
          } else if (parentEl.is('td') && !parentEl.hasClass('datepickerDisabled') && !parentEl.hasClass('datepickerOutdate')) {
            
            if(tblEl.eq(0).hasClass('datepickerViewMonths')) {
              options.current.setMonth(tblEl.find('tbody.datepickerMonths td').index(parentEl));
              options.current.setFullYear(parseInt(tblEl.find('thead th a.datepickerMonth span').text(), 10));
              options.current.addMonths(currentCal - tblIndex);
              tblEl.eq(0).toggleClass('datepickerViewMonths datepickerViewDays');
            } else if(tblEl.eq(0).hasClass('datepickerViewYears')) {
              options.current.setFullYear(parseInt(el.text(), 10));
              tblEl.eq(0).toggleClass('datepickerViewYears datepickerViewMonths');
            } else {
                var val = parseInt(el.text(), 10);
                tmp.addMonths(tblIndex - currentCal);
                if (parentEl.hasClass('datepickerNotInMonth')) {
                  tmp.addMonths(val > 15 ? -1 : 1);
                }
                tmp.setDate(val);
                switch (options.mode) {
                  case 'multiple':
                    val = (tmp.setHours(0,0,0,0)).valueOf();
                    if ($.inArray(val, options.date) > -1) {
                      $.each(options.date, function(nr, dat){
                        if (dat == val) {
                          options.date.splice(nr,1);
                          return false;
                        }
                      });
                    } else {
                      options.date.push(val);
                    }
                    break;
                  case 'range':
                    if (!options.lastSel) {
                      options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
                    }
                    val = (tmp.setHours(23,59,59,0)).valueOf();
                    
                    if (val < options.date[0]) {
                      options.date[1] = options.date[0] + 86399000;  // starting date + 1 day
                      options.date[0] = val - 86399000;  // minus 1 day
                    } else {
                      options.date[1] = val;
                    }
                    options.lastSel = !options.lastSel;
                    break;
                  default:
                    options.date = tmp.valueOf();
                    break;
                }
              changed = true;
            }
            fillIt = true;
          }
          if(fillIt) {
            fill(this);
          }
          if(changed) {
            options.onChange.apply(this, prepareDate(options));
          }
        }
        return false;
      },
      
      prepareDate = function (options) {
        var dates = null;
        if (options.mode == 'single') {
          if(options.date) dates = new Date(options.date);
        } else {
          dates = new Array();
          $(options.date).each(function(i, val){
            dates.push(new Date(val));
          });
        }
        return [dates, options.el];
      },
      
      getViewport = function () {
        var m = document.compatMode == 'CSS1Compat';
        return {
          l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
          t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
          w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
          h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
        };
      },
      
      isChildOf = function(parentEl, el, container) {
        if(parentEl == el) {
          return true;
        }
        if(parentEl.contains) {
          return parentEl.contains(el);
        }
        if( parentEl.compareDocumentPosition ) {
          return !!(parentEl.compareDocumentPosition(el) & 16);
        }
        var prEl = el.parentNode;
        while(prEl && prEl != container) {
          if(prEl == parentEl)
            return true;
          prEl = prEl.parentNode;
        }
        return false;
      },
      
      show = function (ev) {
        var cal = $('#' + $(this).data('datepickerId'));
        if (!cal.is(':visible')) {
          var calEl = cal.get(0);
          var options = cal.data('datepicker');
          
          var test = options.onBeforeShow.apply(this, [calEl]);
          if(options.onBeforeShow.apply(this, [calEl]) == false) {
            return;
          }
          
          fill(calEl);
          var pos = $(this).offset();
          var viewPort = getViewport();
          var top = pos.top;
          var left = pos.left;
          cal.css({
            visibility: 'hidden',
            display: 'block'
          });
          layout(calEl);
          switch (options.position){
            case 'top':
              top -= calEl.offsetHeight;
              break;
            case 'left':
              left -= calEl.offsetWidth;
              break;
            case 'right':
              left += this.offsetWidth;
              break;
            case 'bottom':
              top += this.offsetHeight;
              break;
          }
          if(top + calEl.offsetHeight > viewPort.t + viewPort.h) {
            top = pos.top  - calEl.offsetHeight;
          }
          if(top < viewPort.t) {
            top = pos.top + this.offsetHeight + calEl.offsetHeight;
          }
          if(left + calEl.offsetWidth > viewPort.l + viewPort.w) {
            left = pos.left - calEl.offsetWidth;
          }
          if(left < viewPort.l) {
            left = pos.left + this.offsetWidth
          }
          cal.css({
            visibility: 'visible',
            display: 'block',
            top: top + 'px',
            left: left + 'px'
          });
          options.onAfterShow.apply(this, [cal.get(0)]);
          $(document).bind('mousedown', {cal: cal, trigger: this}, hide);  // global listener so clicking outside the calendar will close it
        }
        return false;
      },
      
      hide = function (ev) {
        if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
          if (ev.data.cal.data('datepicker').onBeforeHide.apply(this, [ev.data.cal.get(0)]) != false) {
            ev.data.cal.hide();
            ev.data.cal.data('datepicker').onAfterHide.apply(this, [ev.data.cal.get(0)]);
            $(document).unbind('mousedown', hide);  // remove the global listener
          }
        }
      },
      
      normalizeDate = function (mode, date) {
        if(mode != 'single' && !date) date = [];
        
        if(date && (!$.isArray(date) || date.length > 0)) {
            if (mode != 'single') {
              if (!$.isArray(date)) {
                date = [((new Date(date)).setHours(0,0,0,0)).valueOf()];
                if (mode == 'range') {
                  date.push(((new Date(date[0])).setHours(23,59,59,0)).valueOf());
                }
              } else {
                for (var i = 0; i < date.length; i++) {
                  date[i] = ((new Date(date[i])).setHours(0,0,0,0)).valueOf();
                }
                if (mode == 'range') {
                  if(date.length == 1) date.push(new Date(date[0]));
                  date[1] = ((new Date(date[1])).setHours(23,59,59,0)).valueOf();
                }
              }
            } else {
              date = ((new Date(date)).setHours(0,0,0,0)).valueOf();
            }
        }
        return date;
      };
    return {
      init: function(options){
        options = $.extend({}, defaults, options||{});
        extendDate(options.locale);
        options.calendars = Math.max(1, parseInt(options.calendars,10)||1);
        options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
        
        return this.each(function(){
          if (!$(this).data('datepicker')) {
            options.el = this;
            
            options.date = normalizeDate(options.mode, options.date);
            
            if (!options.current) {
              options.current = new Date();
            } else {
              options.current = new Date(options.current);
            } 
            options.current.setDate(1);
            options.current.setHours(0,0,0,0);
            
            var id = 'datepicker_' + parseInt(Math.random() * 1000), cnt;
            options.id = id;
            $(this).data('datepickerId', options.id);
            var cal = $(tpl.wrapper).attr('id', id).bind('click', click).data('datepicker', options);
            if (options.className) {
              cal.addClass(options.className);
            }
            var html = '';
            for (var i = 0; i < options.calendars; i++) {
              cnt = options.starts;
              if (i > 0) {
                html += tpl.space;
              }
              html += tmpl(tpl.head.join(''), {
                prev: options.prev,
                next: options.next,
                day1: options.locale.daysMin[(cnt++)%7],
                day2: options.locale.daysMin[(cnt++)%7],
                day3: options.locale.daysMin[(cnt++)%7],
                day4: options.locale.daysMin[(cnt++)%7],
                day5: options.locale.daysMin[(cnt++)%7],
                day6: options.locale.daysMin[(cnt++)%7],
                day7: options.locale.daysMin[(cnt++)%7]
              });
            }
            cal
              .find('tr:first').append(html)
                .find('table').addClass(views[options.view]);
            fill(cal.get(0));
            if (options.inline) {
              cal.appendTo(this).show().css('position', 'relative');
              layout(cal.get(0));
            } else {
              cal.appendTo(document.body);
              $(this).bind(options.showOn, show);
            }
          }
        });
      },
      
      showPicker: function() {
        return this.each( function() {
          if ($(this).data('datepickerId')) {
            var cal = $('#' + $(this).data('datepickerId'));
            var options = cal.data('datepicker');
            if(!options.inline) {
              show.apply(this);
            }
          }
        });
      },
      
      hidePicker: function() {
        return this.each( function() {
          if ($(this).data('datepickerId')) {
            var cal = $('#' + $(this).data('datepickerId'));
            var options = cal.data('datepicker');
            if(!options.inline) {
              $('#' + $(this).data('datepickerId')).hide();
            }
          }
        });
      },
      
      setDate: function(date, shiftTo){
        return this.each(function(){
          if ($(this).data('datepickerId')) {
            var cal = $('#' + $(this).data('datepickerId'));
            var options = cal.data('datepicker');
            options.date = normalizeDate(options.mode, date);
            
            if (shiftTo) {
              options.current = new Date(options.mode != 'single' ? options.date[0] : options.date);
            }
            fill(cal.get(0));
          }
        });
      },
      
      getDate: function() {
        if (this.size() > 0) {
          return prepareDate($('#' + $(this).data('datepickerId')).data('datepicker'));
        }
      },
      
      clear: function(){
        return this.each(function(){
          if ($(this).data('datepickerId')) {
            var cal = $('#' + $(this).data('datepickerId'));
            var options = cal.data('datepicker');
            if (options.mode == 'single') {
              options.date = null;
            } else {
              options.date = [];
            }
            fill(cal.get(0));
          }
        });
      },
      
      fixLayout: function(){
        return this.each(function(){
          if ($(this).data('datepickerId')) {
            var cal = $('#' + $(this).data('datepickerId'));
            var options = cal.data('datepicker');
            if(options.inline) {
              layout(cal.get(0));
            }
          }
        });
      }
    };
  }();  // DatePicker
  
  $.fn.extend({
    DatePicker: DatePicker.init,
    DatePickerHide: DatePicker.hidePicker,
    DatePickerShow: DatePicker.showPicker,
    DatePickerSetDate: DatePicker.setDate,
    DatePickerGetDate: DatePicker.getDate,
    DatePickerClear: DatePicker.clear,
    DatePickerLayout: DatePicker.fixLayout
  });
})(jQuery);

(function(){
  var cache = {};
  
  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        "with(obj){p.push('" +
       
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    return data ? fn( data ) : fn;
  };
})();