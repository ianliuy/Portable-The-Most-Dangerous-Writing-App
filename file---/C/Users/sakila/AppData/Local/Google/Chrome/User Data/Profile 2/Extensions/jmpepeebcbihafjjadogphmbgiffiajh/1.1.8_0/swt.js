! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 16)
}({
    0: function(e, t, n) {
        var r; /*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
        ! function(i) {
            "use strict";
            var o = document,
                a = "getElementsByClassName",
                s = function(e) {
                    return o.querySelectorAll(e)
                },
                u = {
                    type: 0,
                    shade: !0,
                    shadeClose: !0,
                    fixed: !0,
                    anim: "scale"
                },
                c = {
                    extend: function(e) {
                        var t = JSON.parse(JSON.stringify(u));
                        for (var n in e) t[n] = e[n];
                        return t
                    },
                    timer: {},
                    end: {},
                    touch: function(e, t) {
                        e.addEventListener("click", function(e) {
                            t.call(this, e)
                        }, !1)
                    }
                },
                l = 0,
                f = ["layui-m-layer"],
                d = function(e) {
                    this.config = c.extend(e), this.view()
                };
            d.prototype.view = function() {
                var e = this,
                    t = e.config,
                    n = o.createElement("div");
                e.id = n.id = f[0] + l, n.setAttribute("class", f[0] + " " + f[0] + (t.type || 0)), n.setAttribute("index", l);
                var r = function() {
                        var e = "object" == typeof t.title;
                        return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + "</h3>" : ""
                    }(),
                    i = function() {
                        "string" == typeof t.btn && (t.btn = [t.btn]);
                        var e, n = (t.btn || []).length;
                        return 0 !== n && t.btn ? (e = '<span yes type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span no type="0">' + t.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
                    }();
                if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top : 100, t.style = t.style || "", t.style += " top:" + (o.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (t.content || "") + "</p>"), t.skin && (t.anim = "up"), "msg" === t.skin && (t.shade = !1), n.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (t.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (t.skin ? "layui-m-layer-" + t.skin + " " : "") + (t.className ? t.className : "") + " " + (t.anim ? "layui-m-anim-" + t.anim : "") + '" ' + (t.style ? 'style="' + t.style + '"' : "") + ">" + r + '<div class="layui-m-layercont">' + t.content + "</div>" + i + "</div></div></div>", !t.type || 2 === t.type) {
                    var u = o[a](f[0] + t.type);
                    u.length >= 1 && layer.close(u[0].getAttribute("index"))
                }
                document.body.appendChild(n);
                var c = e.elem = s("#" + e.id)[0];
                t.success && t.success(c), e.index = l++, e.action(t, c)
            }, d.prototype.action = function(e, t) {
                var n = this;
                e.time && (c.timer[n.index] = setTimeout(function() {
                    layer.close(n.index)
                }, 1e3 * e.time));
                var r = function() {
                    0 == this.getAttribute("type") ? (e.no && e.no(), layer.close(n.index)) : e.yes ? e.yes(n.index) : layer.close(n.index)
                };
                if (e.btn)
                    for (var i = t[a]("layui-m-layerbtn")[0].children, o = i.length, s = 0; o > s; s++) c.touch(i[s], r);
                if (e.shade && e.shadeClose) {
                    var u = t[a]("layui-m-layershade")[0];
                    c.touch(u, function() {
                        layer.close(n.index, e.end)
                    })
                }
                e.end && (c.end[n.index] = e.end)
            }, i.layer = {
                v: "2.0",
                index: l,
                open: function(e) {
                    return new d(e || {}).index
                },
                close: function(e) {
                    var t = s("#" + f[0] + e)[0];
                    t && (t.innerHTML = "", o.body.removeChild(t), clearTimeout(c.timer[e]), delete c.timer[e], "function" == typeof c.end[e] && c.end[e](), delete c.end[e])
                },
                closeAll: function() {
                    for (var e = o[a](f[0]), t = 0, n = e.length; n > t; t++) layer.close(0 | e[0].getAttribute("index"))
                }
            }, void 0 === (r = function() {
                return layer
            }.call(t, n, t, e)) || (e.exports = r)
        }(window)
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INTERPRETER_API = t.DISTILLER_WHITE_LIST = t.TRS_TOKEN = t.PUBLIC_SENTRY_URL = t.SUB_TYPE_l = t.DEFAULT_SUB_TYPE = t.SUB_TYPE_TGT = t.SUB_TYPE_ORG = t.SUB_TYPE_BIL = t.LANG_L = t.DEFAULT_LANG = t.JA = t.EN = t.ZH = void 0;
        t.INTERPRETER_API = "https://api.interpreter.caiyunai.com/", t.DISTILLER_WHITE_LIST = ["popsci.com", "sciencealert.com", "livescience.com", "sciencedaily.com", "aeon.co", "thoughtco.com", "pixiv", "verywellmind.com", "wired.com", "buzzfeed.com", "brightside.me", "boredpanda.com", "iflscience.com", "archiveofourown.org"], t.TRS_TOKEN = "lqkr1tfixq1wa9kmj9po", t.PUBLIC_SENTRY_URL = "http://c49231b0334e4624b8941767b8f6bfa4@sentry.in.caiyunapp.com/22", t.SUB_TYPE_l = ["bilingual", "original", "target"], t.DEFAULT_SUB_TYPE = "bilingual", t.SUB_TYPE_TGT = "target", t.SUB_TYPE_ORG = "original", t.SUB_TYPE_BIL = "bilingual", t.LANG_L = ["zh", "en", "ja-JP"], t.DEFAULT_LANG = "en", t.JA = "ja-JP", t.EN = "en", t.ZH = "zh"
    },
    16: function(e, t, n) {
        "use strict";
        var r = n(1);
        n(0);
        const i = chrome.i18n.getMessage("networkErr"),
            o = 1024,
            a = Symbol(),
            s = Symbol(),
            u = 800,
            c = 300;
        let l = n(2),
            f = !1,
            d = !1,
            p = !0,
            h = a,
            y = 5;

        function g() {
            l(".cyxy-trs-result").length > 0 && l(".cyxy-trs-result").remove()
        }

        function m(e) {
            if (!e) return !1;
            let t = e.focusNode;
            if ("input" == t.nodeName.toLowerCase() || "textarea" == t.nodeName.toLowerCase()) return !0;
            let n = t.childNodes;
            for (let e in n)
                if (n[e].nodeName && ("input" == n[e].nodeName.toLowerCase() || "textarea" == n[e].nodeName.toLowerCase())) return !0;
            return !1
        }
        window.addEventListener("mouseup", function(e, t) {
            let n = null;
            return function() {
                let e = this,
                    t = arguments;
                n || (n = setTimeout(() => {
                    (function() {
                        setTimeout(function() {
                            let e, t, n, r, i, o = "";
                            try {
                                (t = (e = getSelection()).toString()) && (r = (n = e.getRangeAt(0).getBoundingClientRect()).x + n.width, i = n.y + n.height), e.focusNode && (o = e.focusNode.parentNode.className)
                            } catch (e) {
                                A("init para error: " + e)
                            }
                            if (0 != l(".cyxy-trs-result").length) {
                                if (l("#cyxy-swt-pre").remove(), f) f = !1;
                                else if (l(".cyxy-trs-result").remove(), l("audio.cyxy-audio").remove(), t && -1 == o.indexOf("cyxy-trs-target") && p) try {
                                    m(e) || N(t, r, i)
                                } catch (e) {
                                    A("getTranslatedWordByFetch error: " + e)
                                }
                            } else if (0 != l("#cyxy-swt-pre").length && l("#cyxy-swt-pre").remove(), t && -1 == o.indexOf("cyxy-trs-target") && p) try {
                                m(e) || N(t, r, i)
                            } catch (e) {
                                A("getTranslatedWordByFetch error: " + e)
                            }
                        }, 0)
                    }).apply(e, t), n = null
                }, 0))
            }
        }()), l(".cyxy-personal").on("click", function() {
            f = !0
        }), l(".cyxy-function").on("click", function() {
            f = !0
        }), l(".cyxy-favorite").on("click", function() {
            f = !0
        }), l(".cyxy-video-trans").on("click", function() {
            f = !0
        }), document.addEventListener("error", function(e) {
            let t = e.target;
            "img" == t.tagName.toLowerCase() && "cyxy-wiki" == t.className && (l(".wiki-img").remove(), l(".wiki-data").removeClass("has-pic")), "img" == t.tagName.toLowerCase() && null != t.parentNode && null != t.parentNode.parentNode && "cyxy-personal cyxy-trs-source" == t.parentNode.parentNode.className && (t.src = "https://www.caiyunapp.com/imgs/webtrs/default.png")
        }, !0);
        const v = e => e.replace(/[&<>'"]/g, e => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        })[e] || e);

        function x(e, t, n, r) {
            (function(e, t, n, r) {
                let i = document.documentElement.scrollTop || document.body.scrollTop,
                    o = chrome.extension.getURL("images/logo_128.png");
                l("body").append('<div class="cyxy-trs-result cyxy-trs-target" id="cyxy-swt"></div>'), l(".cyxy-trs-result").append('<div class="trs-header"></div>'), l(".trs-header").append(`<div class="trs-word">${n}</div>`), l(".trs-header").append(`<a href="https://fanyi.caiyunapp.com/#/?utm_source=extension&utm_medium=swt_logo&utm_content=logolink" target="_blank" class="cyxy-link-logo"><img src="${o}" class="cyxy-link-logo"></a>`), l(".cyxy-trs-result").css({
                    left: `${e}px`,
                    top: `${t+i}px`,
                    visibility: "hidden"
                }), r && l(".cyxy-trs-result").append(`<div class="trs-sentence">${r}</div>`), l(".cyxy-trs-result").mousedown(function() {
                    f = !0
                })
            })(e, t, n = v(n), r),
            function(e, t) {
                let n = chrome.extension.getURL("images/logo_64.png"),
                    r = null;
                d || (l("body").append(`<div id="cyxy-swt-pre"><img src="${n}"></div>`), l("#cyxy-swt").hide(), l("#cyxy-swt-pre").on("mouseenter", () => {
                    r = setTimeout(() => {
                        b()
                    }, u)
                }).on("mouseleave", () => {
                    clearTimeout(r)
                }).on("click", () => {
                    clearTimeout(r), b()
                }), function(e, t) {
                    let n = document.documentElement.clientHeight || document.body.clientHeight,
                        r = document.documentElement.clientWidth || document.body.clientWidth,
                        i = window.getSelection().getRangeAt(0).getBoundingClientRect().height,
                        o = document.documentElement.scrollTop || document.body.scrollTop;
                    l("#cyxy-swt-pre").css({
                        left: `${e-5}px`,
                        top: `${t+o-2}px`
                    }), l("#cyxy-swt-pre").offset().left + 20 >= r && l("#cyxy-swt-pre").css({
                        left: `${e-20}px`
                    }), l("#cyxy-swt-pre").offset().top + 20 - o >= n && l("#cyxy-swt-pre").css({
                        top: `${t+o-i-23}px`
                    })
                }(e, t))
            }(e, t), D("showSWTview", document.URL)
        }

        function b() {
            l("#cyxy-swt").slideDown(c), l("#cyxy-swt-pre").fadeOut(c), f = !0, w()
        }

        function w() {
            let e = document.documentElement.scrollTop || document.body.scrollTop,
                t = l(".cyxy-trs-result").offset().top,
                n = l(".cyxy-trs-result").offset().left,
                r = document.documentElement.clientHeight || document.body.clientHeight,
                i = document.documentElement.clientWidth || document.body.clientWidth,
                o = l(".cyxy-trs-result").outerHeight(),
                a = l(".cyxy-trs-result").outerWidth(),
                s = window.getSelection().getRangeAt(0).getBoundingClientRect().height;
            t + o + 20 >= r + e && t > o + s && l(".cyxy-trs-result").css({
                top: `${t-o-s}px`
            }), n + a + 20 >= i && l(".cyxy-trs-result").css({
                left: `${n-a}px`
            }), l(".cyxy-trs-result").css({
                visibility: "visible"
            })
        }
        let T, k;

        function C(e) {
            let t = chrome.extension.getURL("images/no-voice.png");
            l(".trs-header").append(`<img src="${t}" class="sound-play">`),
                function(e) {
                    let t, n, r, i, o, u;
                    "jp" === j(e) ? (o = "&le=jp", u = "jp") : (o = "", u = "en"), t = encodeURI(e), n = '<audio class="cyxy-audio" id="cyxy-trs-audio"></audio>', h === a ? r = `<source src="http://dict.youdao.com/dictvoice?audio=${t}${o}" type="audio/mpeg">` : h === s && (r = `<source src="http://tts.baidu.com/text2audio?lan=${u}&ie=UTF-8&spd=${y}&text=${t}" type="audio/mpeg">`, i = `<embed height="0" width="0" src="http://tts.baidu.com/text2audio?lan=${u}&ie=UTF-8&spd=${y}&text=${t}">`), l("#cyxy-swt").append('<audio class="cyxy-audio" id="cyxy-trs-audio"></audio>'), l("audio.cyxy-audio").append(r), h === s && l("audio.cyxy-audio").append(i)
                }(e), T = document.getElementById("cyxy-trs-audio"),
                function e() {
                    setTimeout(function() {
                        let t = T.duration;
                        isNaN(t) ? e() : (t += .5, l(".sound-play").on("click", function() {
                            clearTimeout(k),
                                function(e) {
                                    let t = chrome.extension.getURL("images/voice.png"),
                                        n = chrome.extension.getURL("images/no-voice.png");
                                    l(".sound-play").attr("src", t), k = setTimeout(() => {
                                        l(".sound-play").attr("src", n)
                                    }, 1e3 * e)
                                }(t), T.play(), D("audio")
                        }))
                    }, 10)
                }()
        }

        function E(e) {
            return 0 === Object.keys(e).length
        }

        function S(e, t, n, o) {
            try {
                g(), x(e, t, n)
            } catch (e) {
                A("showBox error: " + e)
            }
            try {
                ! function(e, t) {
                    let n = {
                        source: `${e}`,
                        trans_type: `${o}`,
                        request_id: "web_fanyi",
                        media: "text",
                        os_type: "web",
                        dict: !0,
                        cached: !0,
                        replaced: !0
                    };
                    chrome.runtime.sendMessage({
                        method: "POST",
                        contentScriptQuery: "fetchUrl",
                        url: "https://api.interpreter.caiyunai.com/v1/dict",
                        headers: {
                            "content-type": "application/json",
                            "x-authorization": `token ${r.TRS_TOKEN}`,
                            Authorization: "Basic caiyun:appleapple"
                        },
                        data: n
                    }, function(t) {
                        "ok" == t.status ? (l(".dict-description").length > 0 && l(".dict-description").remove(), l(".wiki-data").length > 0 && l(".wiki-data").remove(), l(".trs-pron").length > 0 && l(".trs-pron").remove(), l(".wiki-link").length > 0 && l(".wiki-link").remove(), l(".sound-play").length > 0 && l(".sound-play").remove(), l(".wiki-link-wrapper").length > 0 && l(".wiki-link-wrapper").remove(), function(e, t) {
                            let n;
                            try {
                                n = JSON.parse(e.data)
                            } catch (e) {
                                A("getDictByFetch data parse error: " + e)
                            }
                            try {
                                ! function(e) {
                                    let t = e.wiki,
                                        n = e.dictionary,
                                        r = n.explanations,
                                        i = "";
                                    n.prons && (i = n.prons.en || "");
                                    let o = i.replace(/\*/, "");
                                    l(".trs-header").append(`<div class="trs-pron">${o}</div>`), null == r || E(r) || l(".cyxy-trs-result").append('<div class="dict-description"></div>'), l(".dict-description").append('\n        <p class="wiki-hint">释义</p>\n    ');
                                    for (let e in r) l(".dict-description").append(`\n            <p class="trs-explanations">${r[e]}</p>\n        `);
                                    try {
                                        ! function(e) {
                                            if (!e || E(e)) return;
                                            l(".cyxy-trs-result").append('<div class="wiki-data"></div>');
                                            let t = e.item,
                                                n = e.description,
                                                r = e.sitelink,
                                                i = chrome.extension.getURL("images/wiki-link-logo.png"),
                                                o = e.image_url;
                                            o && "http://www.caiyunapp.com/imgs/link_default_img.png" != o && (l(".wiki-data").append(`<div class="wiki-img">                <img class="cyxy-wiki" src="${o}" alt="Sorry,the server error!">                </div>`), l(".wiki-data").addClass("has-pic")), l(".wiki-data").append('\n        <p class="wiki-hint">百科</p>\n        <div class="wiki-item"></div>\n    ');
                                            for (let e in t) l(".wiki-item").append(`<p>${t[e]}</p>`);
                                            l(".wiki-data").append('<div class="wiki-description"></div>');
                                            for (let e in n) n[e] && "null" != n[e] && l(".wiki-description").append(`<p>${n[e]}</p>`);
                                            l(".cyxy-trs-result").append(`<div class="wiki-link-wrapper">\n            <span>\n                <img src="${i}" class="wiki-link-logo">\n                <span class="wiki-link-hint">来源wiki</span>\n            </span>\n            <a href="${r}" target="_blank" class="wiki-link">点击查看 ></a>\n        </div>`), l(".wiki-link-wrapper").on("click", () => {
                                                window.open(r, "_blank")
                                            })
                                        }(t)
                                    } catch (e) {
                                        A("addWikiInfo error: " + e)
                                    }
                                }(n)
                            } catch (e) {
                                A("addDiscriptions error: " + e)
                            }
                            try {
                                C(t)
                            } catch (e) {
                                A("addAudio error: " + e)
                            }
                        }(t, e), w()) : L(i), chrome.runtime.lastError && A(chrome.runtime.lastError.message)
                    })
                }(n)
            } catch (e) {
                A("getDictByFetch error: " + e)
            }
            D("useDictAPI", o)
        }

        function N(e, t, n) {
            if (!(e = e.trim()) || function(e) {
                    return e.length >= o
                }(e) || !chrome.runtime) return;
            let a = function(e, t) {
                try {
                    let n = t;
                    if ("" !== e) {
                        {
                            let t = j(e);
                            n = "en" === t ? "en2zh" : "jp" === t ? "ja2zh" : "zh2en"
                        }
                    }
                    return n
                } catch (e) {
                    A("changeLangType error: " + e)
                }
            }(e, "auto");
            if ("zh2en" == a || "num" == j(e)) return;
            let s = {
                source: `${e}`,
                trans_type: `${a}`,
                request_id: "web_fanyi",
                media: "text",
                os_type: "web",
                dict: !0,
                cached: !0,
                replaced: !0
            };
            chrome.runtime.sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: "https://api.interpreter.caiyunai.com/v1/translator",
                headers: {
                    "content-type": "application/json",
                    "x-authorization": `token ${r.TRS_TOKEN}`,
                    Authorization: "Basic caiyun:appleapple"
                },
                data: s
            }, function(r) {
                if ("ok" == r.status) {
                    let i;
                    try {
                        i = JSON.parse(r.data)
                    } catch (e) {
                        A("getTranslatedWordByFetch data parse error: " + e)
                    }
                    1 == i.isdict ? S(t, n, e, a) : i.target && function(e, t, n, r, i) {
                        try {
                            g(), x(e, t, n, r.target)
                        } catch (e) {
                            A("showBox error: " + e)
                        }
                        try {
                            C(n)
                        } catch (e) {
                            A("addAudio error: " + e)
                        }
                        D("useTranslatorAPI", i), w()
                    }(t, n, e, i, a)
                } else L(i);
                chrome.runtime.lastError && A(chrome.runtime.lastError.message)
            })
        }

        function A(e) {
            chrome.runtime.sendMessage({
                error: e
            })
        }

        function D(e, t) {
            chrome.runtime.sendMessage({
                type: e,
                direction: t
            })
        }

        function j(e) {
            try {
                if ("string" != typeof e) return "num";
                if (null !== /^[\d\.,]*$/.exec(e)) return "num";
                let t = "en",
                    n = (e.match(/[\u4e00-\u9fa5]/g) || []).length / e.length,
                    r = /[\u3020-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31F0-\u31FF]/g;
                return (e.match(r) || []).length / e.length > .03 ? t = "jp" : n > .1 && (t = "zh"), t
            } catch (e) {
                A("detectLang error: " + e)
            }
        }

        function L(e) {
            layer.open({
                content: e,
                skin: "msg",
                time: 5
            })
        }
        chrome.storage.sync.get({
            isDirectTranslate: !1,
            isAutoSWT: !0,
            audioApi: 0,
            audioSpeed: 5
        }, function(e) {
            d = e.isDirectTranslate, p = e.isAutoSWT, h = 1 === e.audioApi ? a : s, y = e.audioSpeed
        }), setInterval(function() {
            chrome.storage.sync.get({
                isDirectTranslate: !1,
                isAutoSWT: !0,
                audioApi: 0,
                audioSpeed: 5
            }, function(e) {
                d = e.isDirectTranslate, p = e.isAutoSWT, h = 1 === e.audioApi ? a : s, y = e.audioSpeed
            })
        }, 2500)
    },
    2: function(e, t, n) {
        var r; /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
        ! function(t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(n, i) {
            "use strict";
            var o = [],
                a = n.document,
                s = Object.getPrototypeOf,
                u = o.slice,
                c = o.concat,
                l = o.push,
                f = o.indexOf,
                d = {},
                p = d.toString,
                h = d.hasOwnProperty,
                y = h.toString,
                g = y.call(Object),
                m = {},
                v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                x = function(e) {
                    return null != e && e === e.window
                },
                b = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var r, i, o = (n = n || a).createElement("script");
                if (o.text = e, t)
                    for (r in b)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
            }
            var k = "3.4.1",
                C = function(e, t) {
                    return new C.fn.init(e, t)
                },
                E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function S(e) {
                var t = !!e && "length" in e && e.length,
                    n = T(e);
                return !v(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: k,
                constructor: C,
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(C.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: o.sort,
                splice: o.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, a[t] = C.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, C.extend({
                expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || y.call(n) !== g))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t) {
                    w(e, {
                        nonce: t && t.nonce
                    })
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (S(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(E, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : f.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (S(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return c.apply([], a)
                },
                guid: 1,
                support: m
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                d["[object " + t + "]"] = t.toLowerCase()
            });
            var N = function(e) {
                var t, n, r, i, o, a, s, u, c, l, f, d, p, h, y, g, m, v, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    k = 0,
                    C = ue(),
                    E = ue(),
                    S = ue(),
                    N = ue(),
                    A = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    D = {}.hasOwnProperty,
                    j = [],
                    L = j.pop,
                    q = j.push,
                    O = j.push,
                    P = j.slice,
                    R = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    _ = "[\\x20\\t\\r\\n\\f]",
                    $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    I = "\\[" + _ + "*(" + $ + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + _ + "*\\]",
                    M = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    B = new RegExp(_ + "+", "g"),
                    W = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                    F = new RegExp("^" + _ + "*," + _ + "*"),
                    U = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
                    z = new RegExp(_ + "|>"),
                    X = new RegExp(M),
                    Y = new RegExp("^" + $ + "$"),
                    G = {
                        ID: new RegExp("^#(" + $ + ")"),
                        CLASS: new RegExp("^\\.(" + $ + ")"),
                        TAG: new RegExp("^(" + $ + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + H + ")$", "i"),
                        needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                    },
                    V = /HTML$/i,
                    J = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
                    ne = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        d()
                    },
                    ae = be(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    O.apply(j = P.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
                } catch (t) {
                    O = {
                        apply: j.length ? function(e, t) {
                            q.apply(e, P.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, i) {
                    var o, s, c, l, f, h, m, v = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, y)) {
                        if (11 !== T && (f = Z.exec(e)))
                            if (o = f[1]) {
                                if (9 === T) {
                                    if (!(c = t.getElementById(o))) return r;
                                    if (c.id === o) return r.push(c), r
                                } else if (v && (c = v.getElementById(o)) && x(t, c) && c.id === o) return r.push(c), r
                            } else {
                                if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !N[e + " "] && (!g || !g.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                            if (m = e, v = t, 1 === T && z.test(e)) {
                                for ((l = t.getAttribute("id")) ? l = l.replace(re, ie) : t.setAttribute("id", l = b), s = (h = a(e)).length; s--;) h[s] = "#" + l + " " + xe(h[s]);
                                m = h.join(","), v = ee.test(e) && me(t.parentNode) || t
                            }
                            try {
                                return O.apply(r, v.querySelectorAll(m)), r
                            } catch (t) {
                                N(e, !0)
                            } finally {
                                l === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(W, "$1"), t, r, i)
                }

                function ue() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function ce(e) {
                    return e[b] = !0, e
                }

                function le(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function de(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ye(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return ce(function(t) {
                        return t = +t, ce(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, o = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !V.test(t || n && n.nodeName || "HTML")
                    }, d = se.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a !== p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, y = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = le(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = le(function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = le(function(e) {
                            return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                        }), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e)
                        }, m = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (le(function(e) {
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + _ + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                        }), le(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
                            n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), m.push("!=", M)
                        }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : l ? R(l, e) - R(l, t) : 0;
                            if (i === o) return de(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? de(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                        }), p
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && d(e), n.matchesSelector && y && !N[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
                            var r = v.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            N(t, !0)
                        }
                        return 0 < se(t, p, null, [e]).length
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && d(e), x(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && d(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
                        return void 0 !== o ? o : n.attributes || !y ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(A), f) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return l = null, e
                    }, i = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && C(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var c, l, f, d, p, h, y = o !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        m = s && t.nodeName.toLowerCase(),
                                        v = !u && !s,
                                        x = !1;
                                    if (g) {
                                        if (o) {
                                            for (; y;) {
                                                for (d = t; d = d[y];)
                                                    if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                                h = y = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                            for (x = (p = (c = (l = (f = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[y] || (x = p = 0) || h.pop();)
                                                if (1 === d.nodeType && ++x && d === t) {
                                                    l[e] = [T, p, x];
                                                    break
                                                }
                                        } else if (v && (x = p = (c = (l = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === x)
                                            for (;
                                                (d = ++p && d && d[y] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (v && ((l = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]), d !== t)););
                                        return (x -= i) === r || x % r == 0 && 0 <= x / r
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[b] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = R(e, o[a])] = !(n[r] = o[a])
                                }) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: ce(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(W, "$1"));
                                return r[b] ? ce(function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: ce(function(e) {
                                return function(t) {
                                    return 0 < se(e, t).length
                                }
                            }),
                            contains: ce(function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return -1 < (t.textContent || i(t)).indexOf(e)
                                    }
                            }),
                            lang: ce(function(e) {
                                return Y.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ye(!1),
                            disabled: ye(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge(function() {
                                return [0]
                            }),
                            last: ge(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ge(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: ge(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: ge(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: ge(function(e, t, n) {
                                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                                return e
                            }),
                            gt: ge(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ve() {}

                function xe(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function be(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = k++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var c, l, f, d = [T, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = l[o]) && c[0] === T && c[1] === s) return d[2] = c[2];
                                        if ((l[o] = d)[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function we(e) {
                    return 1 < e.length ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                    return a
                }

                function ke(e, t, n, r, i, o) {
                    return r && !r[b] && (r = ke(r)), i && !i[b] && (i = ke(i, o)), ce(function(o, a, s, u) {
                        var c, l, f, d = [],
                            p = [],
                            h = a.length,
                            y = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            g = !e || !o && t ? y : Te(y, d, e, s, u),
                            m = n ? i || (o ? e : h || r) ? [] : a : g;
                        if (n && n(g, m, s, u), r)
                            for (c = Te(m, p), r(c, [], s, u), l = c.length; l--;)(f = c[l]) && (m[p[l]] = !(g[p[l]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (c = [], l = m.length; l--;)(f = m[l]) && c.push(g[l] = f);
                                    i(null, m = [], c, u)
                                }
                                for (l = m.length; l--;)(f = m[l]) && -1 < (c = i ? R(o, f) : d[l]) && (o[c] = !(a[c] = f))
                            }
                        } else m = Te(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : O.apply(a, m)
                    })
                }

                function Ce(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = be(function(e) {
                            return e === t
                        }, s, !0), f = be(function(e) {
                            return -1 < R(t, e)
                        }, s, !0), d = [function(e, n, r) {
                            var i = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type]) d = [be(we(d), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                return ke(1 < u && we(d), 1 < u && xe(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && xe(e))
                            }
                            d.push(n)
                        }
                    return we(d)
                }
                return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = se.tokenize = function(e, t) {
                    var n, i, o, a, s, u, c, l = E[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, u = [], c = r.preFilter; s;) {
                        for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
                }, s = se.compile = function(e, t) {
                    var n, i, o, s, u, l, f = [],
                        h = [],
                        g = S[e + " "];
                    if (!g) {
                        for (t || (t = a(e)), n = t.length; n--;)(g = Ce(t[n]))[b] ? f.push(g) : h.push(g);
                        (g = S(e, (i = h, s = 0 < (o = f).length, u = 0 < i.length, l = function(e, t, n, a, l) {
                            var f, h, g, m = 0,
                                v = "0",
                                x = e && [],
                                b = [],
                                w = c,
                                k = e || u && r.find.TAG("*", l),
                                C = T += null == w ? 1 : Math.random() || .1,
                                E = k.length;
                            for (l && (c = t === p || t || l); v !== E && null != (f = k[v]); v++) {
                                if (u && f) {
                                    for (h = 0, t || f.ownerDocument === p || (d(f), n = !y); g = i[h++];)
                                        if (g(f, t || p, n)) {
                                            a.push(f);
                                            break
                                        }
                                    l && (T = C)
                                }
                                s && ((f = !g && f) && m--, e && x.push(f))
                            }
                            if (m += v, s && v !== m) {
                                for (h = 0; g = o[h++];) g(x, b, t, n);
                                if (e) {
                                    if (0 < m)
                                        for (; v--;) x[v] || b[v] || (b[v] = L.call(a));
                                    b = Te(b)
                                }
                                O.apply(a, b), l && !e && 0 < b.length && 1 < m + o.length && se.uniqueSort(a)
                            }
                            return l && (T = C, c = w), x
                        }, s ? ce(l) : l))).selector = e
                    }
                    return g
                }, u = se.select = function(e, t, n, i) {
                    var o, u, c, l, f, d = "function" == typeof e && e,
                        p = !i && a(e = d.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if (2 < (u = p[0] = p[0].slice(0)).length && "ID" === (c = u[0]).type && 9 === t.nodeType && y && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o], !r.relative[l = c.type]);)
                            if ((f = r.find[l]) && (i = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && xe(u))) return O.apply(n, i), n;
                                break
                            }
                    }
                    return (d || s(e, p))(i, t, !y, n, !t || ee.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || fe(H, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), se
            }(n);
            C.find = N, C.expr = N.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = N.uniqueSort, C.text = N.getText, C.isXMLDoc = N.isXML, C.contains = N.contains, C.escapeSelector = N.escape;
            var A = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && C(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                D = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                j = C.expr.match.needsContext;

            function L(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, t, n) {
                return v(t) ? C.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? C.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? C.grep(e, function(e) {
                    return -1 < f.call(t, e) !== n
                }) : C.filter(t, e, n)
            }
            C.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (C.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                    return 1 < r ? C.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(O(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(O(this, e || [], !0))
                },
                is: function(e) {
                    return !!O(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
                }
            });
            var P, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || P, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : R.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), q.test(r[1]) && C.isPlainObject(t))
                            for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
            }).prototype = C.fn, P = C(a);
            var H = /^(?:parents|prev(?:Until|All))/,
                _ = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function $(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && C(e);
                    if (!j.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return A(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return A(e, "parentNode", n)
                },
                next: function(e) {
                    return $(e, "nextSibling")
                },
                prev: function(e) {
                    return $(e, "previousSibling")
                },
                nextAll: function(e) {
                    return A(e, "nextSibling")
                },
                prevAll: function(e) {
                    return A(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return A(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return A(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return D((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return D(e.firstChild)
                },
                contents: function(e) {
                    return void 0 !== e.contentDocument ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                }
            }, function(e, t) {
                C.fn[e] = function(n, r) {
                    var i = C.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), 1 < this.length && (_[e] || C.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var I = /[^\x20\t\r\n\f]+/g;

            function M(e) {
                return e
            }

            function B(e) {
                throw e
            }

            function W(e, t, n, r) {
                var i;
                try {
                    e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            C.Callbacks = function(e) {
                var t, n;
                e = "string" == typeof e ? (t = e, n = {}, C.each(t.match(I) || [], function(e, t) {
                    n[t] = !0
                }), n) : C.extend({}, e);
                var r, i, o, a, s = [],
                    u = [],
                    c = -1,
                    l = function() {
                        for (a = a || e.once, o = r = !0; u.length; c = -1)
                            for (i = u.shift(); ++c < s.length;) !1 === s[c].apply(i[0], i[1]) && e.stopOnFalse && (c = s.length, i = !1);
                        e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
                    },
                    f = {
                        add: function() {
                            return s && (i && !r && (c = s.length - 1, u.push(i)), function t(n) {
                                C.each(n, function(n, r) {
                                    v(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== T(r) && t(r)
                                })
                            }(arguments), i && !r && l()), this
                        },
                        remove: function() {
                            return C.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < C.inArray(e, s) : 0 < s.length
                        },
                        empty: function() {
                            return s && (s = []), this
                        },
                        disable: function() {
                            return a = u = [], s = i = "", this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return a = u = [], i || r || (s = i = ""), this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || l()), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!o
                        }
                    };
                return f
            }, C.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return C.Deferred(function(n) {
                                    C.each(t, function(t, r) {
                                        var i = v(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;

                                function a(e, t, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            c = function() {
                                                var n, c;
                                                if (!(e < o)) {
                                                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, a(o, t, M, i), a(o, t, B, i)) : (o++, c.call(n, a(o, t, M, i), a(o, t, B, i), a(o, t, M, t.notifyWith))) : (r !== M && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                                }
                                            },
                                            l = i ? c : function() {
                                                try {
                                                    c()
                                                } catch (n) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, l.stackTrace), o <= e + 1 && (r !== B && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                }
                                            };
                                        e ? l() : (C.Deferred.getStackHook && (l.stackTrace = C.Deferred.getStackHook()), n.setTimeout(l))
                                    }
                                }
                                return C.Deferred(function(n) {
                                    t[0][3].add(a(0, n, v(i) ? i : M, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : M)), t[2][3].add(a(0, n, v(r) ? r : B))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? C.extend(e, i) : i
                            }
                        },
                        o = {};
                    return C.each(t, function(e, n) {
                        var a = n[2],
                            s = n[5];
                        i[n[1]] = a.add, s && a.add(function() {
                            r = s
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[n[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = u.call(arguments),
                        o = C.Deferred(),
                        a = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = 1 < arguments.length ? u.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (W(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                    for (; n--;) W(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, C.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            };
            var U = C.Deferred();

            function z() {
                a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready()
            }
            C.fn.ready = function(e) {
                return U.then(e).catch(function(e) {
                    C.readyException(e)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || U.resolveWith(a, [C])
                }
            }), C.ready.then = U.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
            var X = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === T(n))
                        for (s in i = !0, n) X(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, v(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                            return c.call(C(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
                },
                Y = /^-ms-/,
                G = /-([a-z])/g;

            function V(e, t) {
                return t.toUpperCase()
            }

            function J(e) {
                return e.replace(Y, "ms-").replace(G, V)
            }
            var Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function K() {
                this.expando = C.expando + K.uid++
            }
            K.uid = 1, K.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[J(t)] = n;
                    else
                        for (r in t) i[J(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [t] : t.match(I) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t)
                }
            };
            var Z = new K,
                ee = new K,
                te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ne = /[A-Z]/g;

            function re(e, t, n) {
                var r, i;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : te.test(i) ? JSON.parse(i) : i)
                        } catch (e) {}
                        ee.set(e, t, n)
                    } else n = void 0;
                return n
            }
            C.extend({
                hasData: function(e) {
                    return ee.hasData(e) || Z.hasData(e)
                },
                data: function(e, t, n) {
                    return ee.access(e, t, n)
                },
                removeData: function(e, t) {
                    ee.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Z.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Z.remove(e, t)
                }
            }), C.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ee.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), re(o, r, i[r]));
                            Z.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        ee.set(this, e)
                    }) : X(this, function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = ee.get(o, e)) ? n : void 0 !== (n = re(o, e)) ? n : void 0;
                        this.each(function() {
                            ee.set(this, e, t)
                        })
                    }, null, t, 1 < arguments.length, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        ee.remove(this, e)
                    })
                }
            }), C.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = C._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        C.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Z.get(e, n) || Z.access(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            Z.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = C.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Z.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                ae = ["Top", "Right", "Bottom", "Left"],
                se = a.documentElement,
                ue = function(e) {
                    return C.contains(e.ownerDocument, e)
                },
                ce = {
                    composed: !0
                };
            se.getRootNode && (ue = function(e) {
                return C.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument
            });
            var le = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ue(e) && "none" === C.css(e, "display")
                },
                fe = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                };

            function de(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return C.css(e, t, "")
                    },
                    u = s(),
                    c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                    l = e.nodeType && (C.cssNumber[t] || "px" !== c && +u) && oe.exec(C.css(e, t));
                if (l && l[3] !== c) {
                    for (u /= 2, c = c || l[3], l = +u || 1; a--;) C.style(e, t, l + c), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), l /= o;
                    l *= 2, C.style(e, t, l + c), n = n || []
                }
                return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
            }
            var pe = {};

            function he(e, t) {
                for (var n, r, i, o, a, s, u, c = [], l = 0, f = e.length; l < f; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (c[l] = Z.get(r, "display") || null, c[l] || (r.style.display = "")), "" === r.style.display && le(r) && (c[l] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = pe[s]) || (o = a.body.appendChild(a.createElement(s)), u = C.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), pe[s] = u)))) : "none" !== n && (c[l] = "none", Z.set(r, "display", n)));
                for (l = 0; l < f; l++) null != c[l] && (e[l].style.display = c[l]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return he(this, !0)
                },
                hide: function() {
                    return he(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        le(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var ye = /^(?:checkbox|radio)$/i,
                ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                me = /^$|^module$|\/(?:java|ecma)script/i,
                ve = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function xe(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], n) : n
            }

            function be(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
            }
            ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
            var we, Te, ke = /<|&#?\w+;/;

            function Ce(e, t, n, r, i) {
                for (var o, a, s, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
                        else if (ke.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (ge.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                    C.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
                for (f.textContent = "", p = 0; o = d[p++];)
                    if (r && -1 < C.inArray(o, r)) i && i.push(o);
                    else if (c = ue(o), a = xe(f.appendChild(o), "script"), c && be(a), n)
                    for (l = 0; o = a[l++];) me.test(o.type || "") && n.push(o);
                return f
            }
            we = a.createDocumentFragment().appendChild(a.createElement("div")), (Te = a.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), m.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
            var Ee = /^key/,
                Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ne = /^([^.]*)(?:\.(.+)|)/;

            function Ae() {
                return !0
            }

            function De() {
                return !1
            }

            function je(e, t) {
                return e === function() {
                    try {
                        return a.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function Le(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = De;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return C().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                    C.event.add(this, t, i, r, n)
                })
            }

            function qe(e, t, n) {
                n ? (Z.set(e, t, !1), C.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, i, o = Z.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (o = u.call(arguments), Z.set(this, t, o), r = n(this, t), this[t](), o !== (i = Z.get(this, t)) || r ? Z.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                        } else o.length && (Z.set(this, t, {
                            value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === Z.get(e, t) && C.event.add(e, t, Ae)
            }
            C.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, d, p, h, y, g = Z.get(e);
                    if (g)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(se, i), n.guid || (n.guid = C.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                                return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                            }), c = (t = (t || "").match(I) || [""]).length; c--;) p = y = (s = Ne.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, l = C.extend({
                            type: p,
                            origType: y,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && C.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), C.event.global[p] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, d, p, h, y, g = Z.hasData(e) && Z.get(e);
                    if (g && (u = g.events)) {
                        for (c = (t = (t || "").match(I) || [""]).length; c--;)
                            if (p = y = (s = Ne.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = C.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) l = d[o], !i && y !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete u[p])
                            } else
                                for (p in u) C.event.remove(e, p + t[c], n, r, !0);
                        C.isEmptyObject(u) && Z.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = C.event.fix(e),
                        u = new Array(arguments.length),
                        c = (Z.get(this, "events") || {})[s.type] || [],
                        l = C.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                        for (a = C.event.handlers.call(this, s, c), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        c = e.target;
                    if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < C(i, this).index(c) : C.find(i, this, null, [c]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                    return c = this, u < t.length && s.push({
                        elem: c,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(C.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return ye.test(t.type) && t.click && L(t, "input") && qe(t, "click", Ae), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return ye.test(t.type) && t.click && L(t, "input") && qe(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return ye.test(t.type) && t.click && L(t, "input") && Z.get(t, "click") || L(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, C.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, C.Event = function(e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: De,
                isPropagationStopped: De,
                isImmediatePropagationStopped: De,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, C.event.addProp), C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                C.event.special[e] = {
                    setup: function() {
                        return qe(this, e, je), !1
                    },
                    trigger: function() {
                        return qe(this, e), !0
                    },
                    delegateType: t
                }
            }), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                C.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), C.fn.extend({
                on: function(e, t, n, r) {
                    return Le(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return Le(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = De), this.each(function() {
                        C.event.remove(this, e, n, t)
                    })
                }
            });
            var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Pe = /<script|<style|<link/i,
                Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
                He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function _e(e, t) {
                return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }

            function $e(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Ie(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Me(e, t) {
                var n, r, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (Z.hasData(e) && (o = Z.access(e), a = Z.set(t, o), c = o.events))
                        for (i in delete a.handle, a.events = {}, c)
                            for (n = 0, r = c[i].length; n < r; n++) C.event.add(t, i, c[i][n]);
                    ee.hasData(e) && (s = ee.access(e), u = C.extend({}, s), ee.set(t, u))
                }
            }

            function Be(e, t, n, r) {
                t = c.apply([], t);
                var i, o, a, s, u, l, f = 0,
                    d = e.length,
                    p = d - 1,
                    h = t[0],
                    y = v(h);
                if (y || 1 < d && "string" == typeof h && !m.checkClone && Re.test(h)) return e.each(function(i) {
                    var o = e.eq(i);
                    y && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r)
                });
                if (d && (o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = C.map(xe(i, "script"), $e)).length; f < d; f++) u = i, f !== p && (u = C.clone(u, !0, !0), s && C.merge(a, xe(u, "script"))), n.call(e[f], u, f);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, C.map(a, Ie), f = 0; f < s; f++) u = a[f], me.test(u.type || "") && !Z.access(u, "globalEval") && C.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : w(u.textContent.replace(He, ""), u, l))
                }
                return e
            }

            function We(e, t, n) {
                for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(xe(r)), r.parentNode && (n && ue(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Oe, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s, u, c, l = e.cloneNode(!0),
                        f = ue(e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (a = xe(l), r = 0, i = (o = xe(e)).length; r < i; r++) s = o[r], "input" === (c = (u = a[r]).nodeName.toLowerCase()) && ye.test(s.type) ? u.checked = s.checked : "input" !== c && "textarea" !== c || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || xe(e), a = a || xe(l), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                        else Me(e, l);
                    return 0 < (a = xe(l, "script")).length && be(a, !f && xe(e, "script")), l
                },
                cleanData: function(e) {
                    for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if (t = n[Z.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[Z.expando] = void 0
                            }
                            n[ee.expando] && (n[ee.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function(e) {
                    return We(this, e, !0)
                },
                remove: function(e) {
                    return We(this, e)
                },
                text: function(e) {
                    return X(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Be(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Be(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = _e(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Be(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Be(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(xe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return X(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Pe.test(e) && !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Be(this, arguments, function(t) {
                        var n = this.parentNode;
                        C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                C.fn[e] = function(e) {
                    for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), l.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                Ue = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                ze = new RegExp(ae.join("|"), "i");

            function Xe(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ue(e) || (a = C.style(e, t)), !m.pixelBoxStyles() && Fe.test(a) && ze.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Ye(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (l) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(l);
                        var e = n.getComputedStyle(l);
                        r = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), se.removeChild(c), l = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, i, o, s, u, c = a.createElement("div"),
                    l = a.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(m, {
                    boxSizingReliable: function() {
                        return e(), i
                    },
                    pixelBoxStyles: function() {
                        return e(), s
                    },
                    pixelPosition: function() {
                        return e(), r
                    },
                    reliableMarginLeft: function() {
                        return e(), u
                    },
                    scrollboxSize: function() {
                        return e(), o
                    }
                }))
            }();
            var Ge = ["Webkit", "Moz", "ms"],
                Ve = a.createElement("div").style,
                Je = {};

            function Qe(e) {
                return C.cssProps[e] || Je[e] || (e in Ve ? e : Je[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                        if ((e = Ge[n] + t) in Ve) return e
                }(e) || e)
            }
            var Ke = /^(none|table(?!-c[ea]).+)/,
                Ze = /^--/,
                et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                tt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function nt(e, t, n) {
                var r = oe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function rt(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + ae[a], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + ae[a], !0, i)), "margin" !== n && (u -= C.css(e, "border" + ae[a] + "Width", !0, i))) : (u += C.css(e, "padding" + ae[a], !0, i), "padding" !== n ? u += C.css(e, "border" + ae[a] + "Width", !0, i) : s += C.css(e, "border" + ae[a] + "Width", !0, i));
                return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
            }

            function it(e, t, n) {
                var r = Ue(e),
                    i = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    o = i,
                    a = Xe(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Fe.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!m.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
            }

            function ot(e, t, n, r, i) {
                return new ot.prototype.init(e, t, n, r, i)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Xe(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = J(t),
                            u = Ze.test(t),
                            c = e.style;
                        if (u || (t = Qe(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                        "string" == (o = typeof n) && (i = oe.exec(n)) && i[1] && (n = de(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = J(t);
                    return Ze.test(t) || (t = Qe(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Xe(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), C.each(["height", "width"], function(e, t) {
                C.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Ke.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : fe(e, et, function() {
                            return it(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, o = Ue(e),
                            a = !m.scrollboxSize() && "absolute" === o.position,
                            s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                            u = r ? rt(e, t, r, s, o) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), u && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), nt(0, n, u)
                    }
                }
            }), C.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - fe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                C.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (C.cssHooks[e + t].set = nt)
            }), C.fn.extend({
                css: function(e, t) {
                    return X(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((C.Tween = ot).prototype = {
                constructor: ot,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ot.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ot.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
                }
            }).init.prototype = ot.prototype, (ot.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = ot.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = ot.prototype.init, C.fx.step = {};
            var at, st, ut, ct, lt = /^(?:toggle|show|hide)$/,
                ft = /queueHooks$/;

            function dt() {
                st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(dt) : n.setTimeout(dt, C.fx.interval), C.fx.tick())
            }

            function pt() {
                return n.setTimeout(function() {
                    at = void 0
                }), at = Date.now()
            }

            function ht(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function yt(e, t, n) {
                for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function gt(e, t, n) {
                var r, i, o = 0,
                    a = gt.prefilters.length,
                    s = C.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = at || pt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                        return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: C.extend({}, t),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: at || pt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    l = c.props;
                for (function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = J(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(l, c.opts.specialEasing); o < a; o++)
                    if (r = gt.prefilters[o].call(c, e, l, c.opts)) return v(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                return C.map(l, yt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            C.Animation = C.extend(gt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return de(n.elem, e, oe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(I);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t,
                        d = this,
                        p = {},
                        h = e.style,
                        y = e.nodeType && le(e),
                        g = Z.get(e, "fxshow");
                    for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, d.always(function() {
                            d.always(function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (i = t[r], lt.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (y ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[r]) continue;
                                y = !0
                            }
                            p[r] = g && g[r] || C.style(e, r)
                        }
                    if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Z.get(e, "display")), "none" === (l = C.css(e, "display")) && (c ? l = c : (he([e], !0), c = e.style.display || c, l = C.css(e, "display"), he([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (d.done(function() {
                                h.display = c
                            }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            })), u = !1, p) u || (g ? "hidden" in g && (y = g.hidden) : g = Z.access(e, "fxshow", {
                            display: c
                        }), o && (g.hidden = !y), y && he([e], !0), d.done(function() {
                            for (r in y || he([e]), Z.remove(e, "fxshow"), p) C.style(e, r, p[r])
                        })), u = yt(y ? g[r] : 0, r, d), r in g || (g[r] = u.start, y && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = C.isEmptyObject(e),
                        o = C.speed(t, n, r),
                        a = function() {
                            var t = gt(this, C.extend({}, e), o);
                            (i || Z.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = C.timers,
                            a = Z.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && ft.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || C.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Z.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = C.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, r, i)
                }
            }), C.each({
                slideDown: ht("show"),
                slideUp: ht("hide"),
                slideToggle: ht("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), at = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                st || (st = !0, dt())
            }, C.fx.stop = function() {
                st = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            }, ut = a.createElement("input"), ct = a.createElement("select").appendChild(a.createElement("option")), ut.type = "checkbox", m.checkOn = "" !== ut.value, m.optSelected = ct.selected, (ut = a.createElement("input")).value = "t", ut.type = "radio", m.radioValue = "t" === ut.value;
            var mt, vt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return X(this, C.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!m.radioValue && "radio" === t && L(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(I);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), mt = {
                set: function(e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = vt[t] || C.find.attr;
                vt[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i
                }
            });
            var xt = /^(?:input|select|textarea|button)$/i,
                bt = /^(?:a|area)$/i;

            function wt(e) {
                return (e.match(I) || []).join(" ")
            }

            function Tt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function kt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return X(this, C.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            }), C.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each(function(t) {
                        C(this).addClass(e.call(this, t, Tt(this)))
                    });
                    if ((t = kt(e)).length)
                        for (; n = this[u++];)
                            if (i = Tt(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = wt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each(function(t) {
                        C(this).removeClass(e.call(this, t, Tt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = kt(e)).length)
                        for (; n = this[u++];)
                            if (i = Tt(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                                i !== (s = wt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                        C(this).toggleClass(e.call(this, n, Tt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, a;
                        if (r)
                            for (i = 0, o = C(this), a = kt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = Tt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && -1 < (" " + wt(Tt(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var Ct = /\r/g;
            C.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = v(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : wt(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                    if (t = C(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                    }
                }, m.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), m.focusin = "onfocusin" in n;
            var Et = /^(?:focusinfocus|focusoutblur)$/,
                St = function(e) {
                    e.stopPropagation()
                };
            C.extend(C.event, {
                trigger: function(e, t, r, i) {
                    var o, s, u, c, l, f, d, p, y = [r || a],
                        g = h.call(e, "type") ? e.type : e,
                        m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = p = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(g + C.event.triggered) && (-1 < g.indexOf(".") && (g = (m = g.split(".")).shift(), m.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[g] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                        if (!i && !d.noBubble && !x(r)) {
                            for (c = d.delegateType || g, Et.test(c + g) || (s = s.parentNode); s; s = s.parentNode) y.push(s), u = s;
                            u === (r.ownerDocument || a) && y.push(u.defaultView || u.parentWindow || n)
                        }
                        for (o = 0;
                            (s = y[o++]) && !e.isPropagationStopped();) p = s, e.type = 1 < o ? c : d.bindType || g, (f = (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) && f.apply(s, t), (f = l && s[l]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = g, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), t) || !Q(r) || l && v(r[g]) && !x(r) && ((u = r[l]) && (r[l] = null), C.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, St), r[g](), e.isPropagationStopped() && p.removeEventListener(g, St), C.event.triggered = void 0, u && (r[l] = u)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(r, null, t)
                }
            }), C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return C.event.trigger(e, t, n, !0)
                }
            }), m.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    C.event.simulate(t, e.target, C.event.fix(e))
                };
                C.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Z.access(r, t);
                        i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Z.access(r, t) - 1;
                        i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
                    }
                }
            });
            var Nt = n.location,
                At = Date.now(),
                Dt = /\?/;
            C.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
            };
            var jt = /\[\]$/,
                Lt = /\r?\n/g,
                qt = /^(?:submit|button|image|reset|file)$/i,
                Ot = /^(?:input|select|textarea|keygen)/i;

            function Pt(e, t, n, r) {
                var i;
                if (Array.isArray(t)) C.each(t, function(t, i) {
                    n || jt.test(e) ? r(e, i) : Pt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== T(t)) r(e, t);
                else
                    for (i in t) Pt(e + "[" + i + "]", t[i], n, r)
            }
            C.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = v(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Pt(n, e[n], t, i);
                return r.join("&")
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !qt.test(e) && (this.checked || !ye.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Lt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Lt, "\r\n")
                        }
                    }).get()
                }
            });
            var Rt = /%20/g,
                Ht = /#.*$/,
                _t = /([?&])_=[^&]*/,
                $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                It = /^(?:GET|HEAD)$/,
                Mt = /^\/\//,
                Bt = {},
                Wt = {},
                Ft = "*/".concat("*"),
                Ut = a.createElement("a");

            function zt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(I) || [];
                    if (v(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Xt(e, t, n, r) {
                var i = {},
                    o = e === Wt;

                function a(s) {
                    var u;
                    return i[s] = !0, C.each(e[s] || [], function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Yt(e, t) {
                var n, r, i = C.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && C.extend(!0, e, r), e
            }
            Ut.href = Nt.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Nt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ft,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Yt(Yt(e, C.ajaxSettings), t) : Yt(C.ajaxSettings, e)
                },
                ajaxPrefilter: zt(Bt),
                ajaxTransport: zt(Wt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, s, u, c, l, f, d, p, h = C.ajaxSetup({}, t),
                        y = h.context || h,
                        g = h.context && (y.nodeType || y.jquery) ? C(y) : C.event,
                        m = C.Deferred(),
                        v = C.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        w = {},
                        T = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s)
                                        for (s = {}; t = $t.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return l ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) k.always(e[k.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return r && r.abort(t), E(0, t), this
                            }
                        };
                    if (m.promise(k), h.url = ((e || h.url || Nt.href) + "").replace(Mt, Nt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                        c = a.createElement("a");
                        try {
                            c.href = h.url, c.href = c.href, h.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Xt(Bt, h, t, k), l) return k;
                    for (d in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), i = h.url.replace(Ht, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Dt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(_t, "$1"), p = (Dt.test(i) ? "&" : "?") + "_=" + At++ + p), h.url = i + p), h.ifModified && (C.lastModified[i] && k.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && k.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(d, h.headers[d]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(y, k, h) || l)) return k.abort();
                    if (T = "abort", v.add(h.complete), k.done(h.success), k.fail(h.error), r = Xt(Wt, h, t, k)) {
                        if (k.readyState = 1, f && g.trigger("ajaxSend", [k, h]), l) return k;
                        h.async && 0 < h.timeout && (u = n.setTimeout(function() {
                            k.abort("timeout")
                        }, h.timeout));
                        try {
                            l = !1, r.send(b, E)
                        } catch (e) {
                            if (l) throw e;
                            E(-1, e)
                        }
                    } else E(-1, "No Transport");

                    function E(e, t, a, s) {
                        var c, d, p, b, w, T = t;
                        l || (l = !0, u && n.clearTimeout(u), r = void 0, o = s || "", k.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, a && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(h, k, a)), b = function(e, t, n, r) {
                            var i, o, a, s, u, c = {},
                                l = e.dataTypes.slice();
                            if (l[1])
                                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                            for (o = l.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = c[u + " " + o] || c["* " + o]))
                                    for (i in c)
                                        if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, b, k, c), c ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = k.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, c = !(p = b.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", c ? m.resolveWith(y, [d, T, k]) : m.rejectWith(y, [k, T, p]), k.statusCode(x), x = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? d : p]), v.fireWith(y, [k, T]), f && (g.trigger("ajaxComplete", [k, h]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function(e, t) {
                C[t] = function(e, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, C.isPlainObject(e) && e))
                }
            }), C._evalUrl = function(e, t) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        C.globalEval(e, t)
                    }
                })
            }, C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return v(e) ? this.each(function(t) {
                        C(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = C(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each(function(n) {
                        C(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }, C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, C.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Gt = {
                    0: 200,
                    1223: 204
                },
                Vt = C.ajaxSettings.xhr();
            m.cors = !!Vt && "withCredentials" in Vt, m.ajax = Vt = !!Vt, C.ajaxTransport(function(e) {
                var t, r;
                if (m.cors || Vt && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (i) {
                            if (t) throw i
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), C.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), C.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, i) {
                        t = C("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), a.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var Jt, Qt = [],
                Kt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Qt.pop() || C.expando + "_" + At++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function(e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || C.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Qt.push(i)), a && v(o) && o(a[0]), a = o = void 0
                }), "script"
            }), m.createHTMLDocument = ((Jt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), C.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = !n && [], (i = q.exec(e)) ? [t.createElement(i[1])] : (i = Ce([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
                var r, i, o
            }, C.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return -1 < s && (r = wt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), C.expr.pseudos.animated = function(e) {
                return C.grep(C.timers, function(t) {
                    return e === t.elem
                }).length
            }, C.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c = C.css(e, "position"),
                        l = C(e),
                        f = {};
                    "static" === c && (e.style.position = "relative"), s = l.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto") ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
                }
            }, C.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        C.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - C.css(r, "marginTop", !0),
                            left: t.left - i.left - C.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || se
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function(r) {
                    return X(this, function(e, r, i) {
                        var o;
                        if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), C.each(["top", "left"], function(e, t) {
                C.cssHooks[t] = Ye(m.pixelPosition, function(e, n) {
                    if (n) return n = Xe(e, t), Fe.test(n) ? C(e).position()[t] + "px" : n
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                C.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    C.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return X(this, function(t, n, i) {
                            var o;
                            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, s) : C.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                C.fn[t] = function(e, n) {
                    return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), C.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), C.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), C.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = u.call(arguments, 2), (i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, i
            }, C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = v, C.isWindow = x, C.camelCase = J, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (r = function() {
                return C
            }.apply(t, [])) || (e.exports = r);
            var Zt = n.jQuery,
                en = n.$;
            return C.noConflict = function(e) {
                return n.$ === C && (n.$ = en), e && n.jQuery === C && (n.jQuery = Zt), C
            }, i || (n.jQuery = n.$ = C), C
        })
    }
});