webpackJsonp([0], [function(module, exports, __webpack_require__) {
    function setHtml(e, t) {
        var i, n = 0,
            r = [];
        if (t) for (; n < e.length; n++) new RegExp(t).test(e[n].theme) && r.push(e[n]);
        else r = e;
        i = temFn(r),
            $(".list").html($(i)).find(".explain").on("click",
                function(e) {
                    e.preventDefault(),
                        e.stopPropagation();
                    var t = $(this).attr("data-link");
                    window.open(t)
                }).end().find(".lazy").lazyload()
    }
    function map(e, t) {
        for (var i = e.split("、").concat(t.split("、")), n = {
                "私家团": "homestyle",
                "亲子": "family",
                "自驾": "drive",
                "游学": "yoosure",
                "当季特色": "feature",
                "北美": "northamerica",
                "欧洲": "europe",
                "澳新": "oceania",
                "亚洲": "asia"
            },
                 r = [], o = 0; o < i.length; o++) r.push(n[i[o]] ? n[i[o]] : i[o]);
        return r.join(",")
    }
    var $ = __webpack_require__(1),
        lazyLoad = __webpack_require__(2),
        wqCommon = __webpack_require__(3);
    wqCommon.wqCommon();
    var temFn = __webpack_require__(7),
        consultTemFn = __webpack_require__(8),
        Data = null,
        o = {
            Req_Header: {
                appid: "WOQUWAP001",
                app_version: "1.2",
                cmd: "config_query"
            },
            Req_Body: {
                code: "home_youxuan"
            }
        };
    if (window.XDomainRequest) {
        var xdr;
        xdr = new XDomainRequest,
            xdr ? (xdr.onprogress = function() {},
                xdr.onload = function() {
                    var data = eval("(" + xdr.responseText + ")");
                    if (data.rs) {
                        for (var arr = data.data,
                                 arr2 = [], o, i = 0; i < arr.length; i++) o = JSON.parse(arr[i].data),
                            o.theme = map(o.theme, o.destination),
                            arr2.push(o);
                        setHtml(arr2),
                            Data = arr2
                    } else alert("1" + data.msg);
                    $(".loader").hide()
                },
                xdr.ontimeout = function() {
                    alert("网络异常，请稍后再试")
                },
                xdr.onerror = function() {
                    alert("网络异常，请稍后再试")
                },
                xdr.timeout = 1e4, xdr.open("POST", "json/mobile.php"), xdr.send(JSON.stringify(o))) : alert("new xdr fail")
    } else $.ajax({
        url: "json/mobile.php",
        type: "post",
        data: JSON.stringify(o),
        crossDomain: !0,
        dataType: "text",
        success: function(e) {
            if (e = JSON.parse(e), e.rs) {
                for (var t, i = e.data, n = [], r = 0; r < i.length; r++)
                    t = JSON.parse(i[r].data),
                    t.theme = map(t.theme, t.destination),
                    n.push(t);
                setHtml(n),
                    Data = n;

            } else {

                alert("11" + e.msg);}
            $(".loader").hide()
        },
        error: function(e) {
            console.log("error")
        }
    });

    $(".tab").find("li").on("click",
        function() {
            if (!$(this).hasClass("current")) {
                var e = $(this).data("type");
                $(".tab").find("li").removeClass("current"),
                    $(this).addClass("current"),
                    setHtml(Data, e)
            }
        }),
        $.ajax({
            url: "#/kefu-list",
            type: "post",
            dataType: "JSON",
            success: function(e) {
                var t = "";
                1 == e.rs && (t = consultTemFn(e.data)),
                    $("#wq_consultants").html(t)
            }
        });
    var wqCountJS = __webpack_require__(9);
    wqCountJS.wqCount()
},
    ,
    function(e, t, i) {
        var n, r, o;
        /*!
         /*!
         * Lazy Load - jQuery plugin for lazy loading images
         *
         * Copyright (c) 2007-2013 Mika Tuupola
         *
         * Licensed under the MIT license:
         *   http://www.opensource.org/licenses/mit-license.php
         *
         * Project home:
         *   http://www.appelsiini.net/projects/lazyload
         *
         * Version:  1.9.3
         *
         */
        !
            function(a) {
                r = [i(1)],
                    n = a,
                    o = "function" == typeof n ? n.apply(t, r) : n,
                    !(void 0 !== o && (e.exports = o))
            } (function(e) {
                var t = e(window);
                e.fn.lazyload = function(i) {
                    function n() {
                        var t = 0;
                        o.each(function() {
                            var i = e(this);
                            if (!a.skip_invisible || i.is(":visible")) if (e.abovethetop(this, a) || e.leftofbegin(this, a));
                            else if (e.belowthefold(this, a) || e.rightoffold(this, a)) {
                                if (++t > a.failure_limit) return ! 1
                            } else i.trigger("appear"),
                                t = 0
                        })
                    }
                    var r, o = this,
                        a = {
                            threshold: 0,
                            failure_limit: 0,
                            event: "scroll",
                            effect: "show",
                            container: window,
                            data_attribute: "original",
                            skip_invisible: !0,
                            appear: null,
                            load: null,
                            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                        };
                    return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(a, i)),
                        r = void 0 === a.container || a.container === window ? t: e(a.container),
                    0 === a.event.indexOf("scroll") && r.bind(a.event,
                        function() {
                            return n()
                        }),
                        this.each(function() {
                            var t = this,
                                i = e(t);
                            t.loaded = !1,
                            void 0 !== i.attr("src") && i.attr("src") !== !1 || i.is("img") && i.attr("src", a.placeholder),
                                i.one("appear",
                                    function() {
                                        if (!this.loaded) {
                                            if (a.appear) {
                                                var n = o.length;
                                                a.appear.call(t, n, a)
                                            }
                                            e("<img />").bind("load",
                                                function() {
                                                    var n = i.attr("data-" + a.data_attribute);
                                                    i.hide(),
                                                        i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"),
                                                        i[a.effect](a.effect_speed),
                                                        t.loaded = !0;
                                                    var r = e.grep(o,
                                                        function(e) {
                                                            return ! e.loaded
                                                        });
                                                    if (o = e(r), a.load) {
                                                        var s = o.length;
                                                        a.load.call(t, s, a)
                                                    }
                                                }).attr("src", i.attr("data-" + a.data_attribute))
                                        }
                                    }),
                            0 !== a.event.indexOf("scroll") && i.bind(a.event,
                                function() {
                                    t.loaded || i.trigger("appear")
                                })
                        }),
                        t.bind("resize",
                            function() {
                                n()
                            }),
                    /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && t.bind("pageshow",
                        function(t) {
                            t.originalEvent && t.originalEvent.persisted && o.each(function() {
                                e(this).trigger("appear")
                            })
                        }),
                        e(document).ready(function() {
                            n()
                        }),
                        this
                },
                    e.belowthefold = function(i, n) {
                        var r;
                        return r = void 0 === n.container || n.container === window ? (window.innerHeight ? window.innerHeight: t.height()) + t.scrollTop() : e(n.container).offset().top + e(n.container).height(),
                        r <= e(i).offset().top - n.threshold
                    },
                    e.rightoffold = function(i, n) {
                        var r;
                        return r = void 0 === n.container || n.container === window ? t.width() + t.scrollLeft() : e(n.container).offset().left + e(n.container).width(),
                        r <= e(i).offset().left - n.threshold
                    },
                    e.abovethetop = function(i, n) {
                        var r;
                        return r = void 0 === n.container || n.container === window ? t.scrollTop() : e(n.container).offset().top,
                        r >= e(i).offset().top + n.threshold + e(i).height()
                    },
                    e.leftofbegin = function(i, n) {
                        var r;
                        return r = void 0 === n.container || n.container === window ? t.scrollLeft() : e(n.container).offset().left,
                        r >= e(i).offset().left + n.threshold + e(i).width()
                    },
                    e.inviewport = function(t, i) {
                        return ! (e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
                    },
                    e.extend(e.expr[":"], {
                        "below-the-fold": function(t) {
                            return e.belowthefold(t, {
                                threshold: 0
                            })
                        },
                        "above-the-top": function(t) {
                            return ! e.belowthefold(t, {
                                threshold: 0
                            })
                        },
                        "right-of-screen": function(t) {
                            return e.rightoffold(t, {
                                threshold: 0
                            })
                        },
                        "left-of-screen": function(t) {
                            return ! e.rightoffold(t, {
                                threshold: 0
                            })
                        },
                        "in-viewport": function(t) {
                            return e.inviewport(t, {
                                threshold: 0
                            })
                        },
                        "above-the-fold": function(t) {
                            return ! e.belowthefold(t, {
                                threshold: 0
                            })
                        },
                        "right-of-fold": function(t) {
                            return e.rightoffold(t, {
                                threshold: 0
                            })
                        },
                        "left-of-fold": function(t) {
                            return ! e.rightoffold(t, {
                                threshold: 0
                            })
                        }
                    })
            })
    },
    , , , ,
    function(e, t) {
        e.exports = function(e) {
            var t = "";
            if (0 === e.length && (t += ' <p class="empty-tips">该类别暂无产品！</p>'), 0 !== e.length) {
                t += " ";
                var i = e;
                if (i) for (var n, r = -1,
                                o = i.length - 1; o > r;) n = i[r += 1],
                    t += " <li ",
                r % 2 !== 0 && (t += 'class="nomr"'),
                    t += '> <a href="',
                    t += "0" == n.soudout ? "javascript:void(0);": "" + n.detailUrl,
                    t += '" target="_blank"> <div class="imgbox"> <img class="lazy" src="img/common/blank-img5x3.jpg" data-original="' + n.imageSrc + '" alt="" width="550" height="330"> <span>' + n.tag + '</span> </div> <div class="tit"> <h3>' + n.title + "</h3> <p>" + n.tourDay + "<span>" + n.currency + "<i>" + n.price + '</i>人起</span></p> </div> <div class="text"> <p>' + n.lightSpot.replace(/&lt;br&gt;/g, "</br>") + '</p></div> <div class="bottom ',
                "0" == n.soudout && (t += "soudout"),
                    t += '"> <span class="btn">马上预订</span> ',
                n.wechatUrl && (t += ' <span class="explain" data-link="' + n.wechatUrl + '">行程说明</span> '),
                    t += " </div> </a> </li> "
            }
            return t
        }
    },
    function(e, t) {
        e.exports = function(e) {
            var t = "<h3>我趣私家旅行顾问</h3><ul>",
                i = e.kefus;
            if (i) for (var n, r = -1,
                            o = i.length - 1; o > r;) n = i[r += 1],
            4 > r && (t += '<li class="a' + r + '"><span class="img"><img src="' + n.wechatAndQQ.photoImg + '" width="77" height="70"></span><p><span>' + n.continentName + "</span>旅行顾问</p><p>" + n.wechatAndQQ.wcNichName + '</p><img src="' + n.wechatAndQQ.wcQRCode + '" alt="" width="100" height="100"><p class="last">加我微信，沟通更快</p></li>');
            t += '</ul><div class="qqgroup"><p class="first"><em></em>QQ群：</p><p>';
            var a = e.qqGroups;
            if (a) for (var n, r = -1,
                            s = a.length - 1; s > r;) n = a[r += 1],
                t += "<span>" + n.continentName + "群<i>" + n.qqGroupNo + "</i>（暗号：" + n.qqTip + "）</span>",
            1 == r && (t += "</p><p>");
            return t += "</p></div>"
        }
    },
    function(e, t, i) {
        /*!
         /*!
         *
         * wq 统计代码
         * 包含：
         * ga
         * baidu
         * woqu
         *
         */
        var n = i(1);
        t.wqCount = function() { !
            function(e, t, i, n, r, o, a) {
                e.GoogleAnalyticsObject = r,
                    e[r] = e[r] ||
                    function() { (e[r].q = e[r].q || []).push(arguments)
                    },
                    e[r].l = 1 * new Date,
                    o = t.createElement(i),
                    a = t.getElementsByTagName(i)[0],
                    o.async = 1,
                    o.src = n,
                    a.parentNode.insertBefore(o, a)
            } (window, document, "script", "analytics.js", "ga"),
            ga("create", "UA-48465131-1", "auto"),
            ga("send", "pageview"); !
            function() {
                if ("https:" != location.protocol) {
                    var e = document.createElement("script");
                    e.src = "//hm.baidu.com/hm.js?526799ce499fd4724a6483fd5b33fdce";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }
            } (),
            n(function() {
                function e(e) {
                    for (var t = e + "=",
                             i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                        for (var r = i[n];
                             " " == r.charAt(0);) r = r.substring(1, r.length);
                        if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
                    }
                    return null
                }
                var t = function(t) {
                        function i() {
                            var e = function() {
                                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                            };
                            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                        }
                        function r(e, t, i) {
                            if (i) {
                                var n = new Date;
                                n.setTime(n.getTime() + 60 * i * 1e3);
                                var r = "; expires=" + n.toGMTString()
                            } else var r = "";
                            document.cookie = e + "=" + t + r + "; path=/; domain=" + a
                        }
                        var o = "//beacon.woqu.com/track/beacon.gif",
                            a = "woqu.com",
                            s = function(t) {
                                this.setUserId(t),
                                    r("_woqu_guid", e("_woqu_guid") || i(), 1051200),
                                    this.guid = e("_woqu_guid");
                                var o = e("_woqu_session");
                                o || (o = n.now ? n.now() : (new Date).getTime()),
                                    r("_woqu_session", o, 30),
                                    this.session = e("_woqu_session"),
                                    this.referr = location.href
                            };
                        s.prototype.setUserId = function(e) {
                            this.user_id = void 0 == e ? 0 : e
                        },
                            s.prototype.visit = function(e) {
                                return this._send(n.extend({
                                        _type: "visit"
                                    },
                                    e || {}))
                            },
                            s.prototype._send = function(t) {
                                if (void 0 == t || void 0 == t._type) return ! 1;
                                if ("" != document.referrer && "undefined" != typeof document.referrer) var i = document.referrer;
                                else var i = "";
                                var r = {
                                    type: t._type,
                                    url: location.href,
                                    referer: i,
                                    guid: this.guid,
                                    user_ac: this.user_id,
                                    token: e("tk"),
                                    session: this.session,
                                    timestamp: n.now ? n.now() : (new Date).getTime()
                                };
                                delete t._type,
                                    delete t._url,
                                    r.others = n.param(t);
                                var a = new Image;
                                return a.src = o + "?" + decodeURIComponent(n.param(r)),
                                    !0
                            },
                            this.beacon = new s(t),
                            this.beacon.visit()
                    },
                    i = e("ac");
                new t(i)
            }),
            window._py = [];
            var e = null,
                t = location.href;
            if (t.indexOf("sim") > -1 ? e = "7": t.indexOf("insurance") > -1 ? e = "6": t.indexOf("visa") > -1 ? e = "5": t.indexOf("hotel") > -1 ? e = "4": t.indexOf("ticket") > -1 ? e = "3": t.indexOf("mustactive") > -1 ? e = "2": t.indexOf("pack") > -1 ? e = "1": t.indexOf("localjoin") > -1 && (e = "0"), null !== e) if (t.indexOf("detail") > -1) {
                var i, r, o = {
                    id: n("#businessID").val(),
                    soldOut: "0",
                    category: "",
                    categoryId: e,
                    name: "",
                    price: "",
                    imgUrl: "",
                    productUrl: location.href,
                    domain: "",
                    brand: "",
                    promotion: "",
                    discount: "",
                    origPrice: "",
                    currency: n("#currencySwitch").find(".active_currency").data("symbol") || "CNY"
                };
                t.indexOf("hotel") > -1 ? (o.name = n("#productTitle").val(), o.imgUrl = "http:" + n(".hotel_main_img").find("img").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n(".submit"), i = n(".unitcost").eq(0).val()) : t.indexOf("localjoin") > -1 ? (o.name = n("#titleCn").val(), o.imgUrl = "http:" + n(".viewer-big-img").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#bookNow"), i = n(".price-area").find(".price").text()) : t.indexOf("pack") > -1 ? (o.name = n("#lineName").val(), o.imgUrl = "http:" + n(".photo-list").find("img").eq(0).attr("src"), o.category = "自由行", r = n(".btn_book_now"), i = n(".unit_price_total").text() + "/人起") : t.indexOf("sim") > -1 ? (o.name = n("#titleCn").text(), o.imgUrl = "http:" + n("#imageShow").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#wq_car_book"), i = n("#startPrice").find("span").text()) : t.indexOf("ticket") > -1 ? (o.name = n("#titleCn").text().replace(/\s+/g, ""), o.imgUrl = "http:" + n("#mainImage").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#book-btn"), i = n("#start-price").text()) : t.indexOf("insurance") > -1 ? (o.name = n("#titleCn").text(), o.imgUrl = "http:" + n("#mainImage").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#insuranceBook"), i = n("#startPrice").find("span").text()) : t.indexOf("mustactive") > -1 ? (o.name = n("#titleCn").text().replace(/\s+/g, ""), o.imgUrl = "http:" + n("#mainImage").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#book-btn"), i = n("#start-price").text()) : t.indexOf("visa") > -1 && (o.name = n("#titleCn").text(), o.imgUrl = "http:" + n("#mainImage").attr("src"), o.category = n(".wq_bread_crumb").text().replace(/\s+/g, "").split(">").join("-"), r = n("#wq_car_book"), i = n("#startPrice").text()),
                    o.price = i,
                    _py.push(["a", "yQ..FXlAOlyvmSPMNg0c9OwhN_"]),
                    _py.push(["domain", "stats.ipinyou.com"]),
                    _py.push(["pi", o]),
                    _py.push(["pv", e]),
                    _py.push(["e", ""]),
                    -
                        function(e) {
                            var t = e.createElement("script"),
                                i = e.body.getElementsByTagName("script")[0];
                            f = "https:" == location.protocol,
                                i.parentNode.insertBefore(t, i),
                                t.src = (f ? "https": "http") + "://" + (f ? "fm.ipinyou.com": "fm.p0y.cn") + "/j/adv.js"
                        } (document),
                    r.on("click",
                        function() {
                            "0" == e && "0000.00" == n(".tolprice").text() || !
                                function(e, t) {
                                    var i, n = window,
                                        r = document,
                                        o = encodeURIComponent,
                                        a = location.href,
                                        s = r.referrer,
                                        c = r.cookie,
                                        l = c.match(/(^|;)\s*ipycookie=([^;]*)/),
                                        d = c.match(/(^|;)\s*ipysession=([^;]*)/);
                                    n.parent != n && (i = a, a = s, s = i),
                                        u = "//stats.ipinyou.com/cvt?a=" + o("yQ.Rvs.asrbtzDxGV1Eli77GTW7XX") + "&c=" + o(l ? l[2] : "") + "&s=" + o(d ? d[2].match(/jump\%3D(\d+)/)[1] : "") + "&u=" + o(a) + "&r=" + o(s) + "&rd=" + (new Date).getTime() + "&Money=" + o(e) + "&ProductList=" + o(t) + "&e=",
                                        (new Image).src = u
                                } (i, n("#businessID").val() + ",1;")
                        })
            } else _py.push(["a", "yQ..FXlAOlyvmSPMNg0c9OwhN_"]),
                _py.push(["domain", "stats.ipinyou.com"]),
                _py.push(["e", ""]),
                _py.push(["pv", e]),
                -
                    function(e) {
                        var t = e.createElement("script"),
                            i = e.body.getElementsByTagName("script")[0],
                            n = "https:" == location.protocol;
                        i.parentNode.insertBefore(t, i),
                            t.src = (n ? "https": "http") + "://" + (n ? "fm.ipinyou.com": "fm.p0y.cn") + "/j/adv.js"
                    } (document)
        }
    }]);