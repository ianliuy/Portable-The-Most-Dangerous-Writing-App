function fprom_obj_() {
    ($this = this).data = {};
    var l = this.data,
        n = "https://t.firstpromoter.com/track/signup",
        i = "https://t.firstpromoter.com/track/sale",
        o = "https://t.firstpromoter.com/track/new",
        a = "_fprom_track",
        t = "_fprom_subscribe",
        f = "_fprom_code",
        c = "_fprom_signup",
        s = "_fprom_sale",
        d = 86400,
        p = void 0;

    function r(e, n) {
        l.cid = e, l.domain = n, l.tid = O(a), l.subscribed = O(t), l.ref_id = O(f), l.signed_up = O(c), l.referrer = document.referrer, l.url_ref_id = function() {
                var e = function(e) {
                    if (0 <= e.indexOf("#_offer_") || 0 <= e.indexOf("#_r_")) {
                        var n = e.substring(e.indexOf("#_") + 1, e.length);
                        return n
                    }
                    return null
                }(h());
                e || (als = m(h(), "fp_ref"), als || (als = m(h(), "fpr")), als || (als = m(h(), "via")), als || (als = m(h(), "deal")), als || (als = m(h(), "_from")), als || (als = m(h(), "_by")), als || (als = m(h(), "_get")), als || (als = m(h(), "_go")), als && (e = "_r_" + als));
                return e
            }(), l.url_ref_id && l.ref_id == l.url_ref_id && function(e) {
                y(e, "", -1)
            }(c), l.url = h(),
            function() {
                var e = window._fprom || window._fprom || [];
                if (e.loaded) return !1;
                for (var n = 0; n < e.length; n++) l[e[n][0]] = e[n][1];
                return e.loaded = !0, window._fprom = e, !0
            }() && (function() {
                var e = !1;
                l.url_ref_id && l.url_ref_id != l.ref_id && (l.tid = v(), e = !0);
                l.url_tracking && !l.tid && (e = !0);
                "signup" == l.event ? R() : "sale" == l.event ? b() : e && k()
            }(), l._init && "function" == typeof l._init && l._init($this))
    }

    function _(e, n, t, r) {
        var i = function(e, n) {
            var t = new XMLHttpRequest;
            return "withCredentials" in t ? t.open(e, n) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
        }(e, n);
        i ? (i.onload = function(e) {
            r && "function" == typeof r && r(i)
        }, i.onerror = function() {
            console.log("FirstPromoter: Error on CORS ajax request!"), r && "function" == typeof r && r(i)
        }, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(function(e) {
            if ("object" != typeof e && "undefined" != typeof console) return console.log("not a JSON object"), null;
            u = encodeURIComponent;
            for (var n = "", t = Object.keys(e), r = 0; r < t.length; r++) n += u(t[r]) + "=" + u(e[t[r]]), r < t.length - 1 && (n += "&");
            return n
        }(t))) : console.log("CORS not supported")
    }

    function x(e, n) {
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
        return t
    }

    function h() {
        return window.location.href
    }

    function g(e, n) {
        return n = decodeURI(n).split("?"), path = 1 == n.length ? "" : n[1], path = path.replace(new RegExp("&?" + e + "\\[\\d*\\]=[\\w]+", "g"), ""), path = path.replace(new RegExp("&?" + e + "=[\\w]+", "g"), ""), path = path.replace(/^&/, ""), n[0] + (path.length ? "?" + path : "")
    }

    function v() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var n = 16 * Math.random() | 0;
            return ("x" == e ? n : 3 & n | 8).toString(16)
        })
    }

    function m(e, n) {
        n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = e.substr(e.indexOf("?")),
            r = t.indexOf("#"); - 1 < r && (t = t.substr(0, r));
        var i = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(t);
        return null === i ? null : decodeURIComponent(i[1].replace(/\+/g, " "))
    }

    function w(e) {
        var n;
        try {
            n = JSON.parse(e)
        } catch (e) {}
        return n || {}
    }

    function y(e, n, t) {
        var r = "",
            i = "";
        if (t) {
            var o = new Date;
            o.setTime(o.getTime() + 60 * t * 1e3), r = "; expires=" + o.toGMTString()
        }
        l.domain && (i = "; domain=" + l.domain), document.cookie = e + "=" + escape(n) + r + i + "; path=/"
    }

    function O(e) {
        var n, t, r = e + "=",
            i = document.cookie.split(";");
        for (n = 0; n < i.length; n++) {
            for (t = i[n];
                " " === t.charAt(0);) t = t.substring(1, t.length);
            if (0 === t.indexOf(r)) return unescape(t.substring(r.length, t.length))
        }
        return null
    }

    function S(e) {
        var n = {};
        for (var t in e) e.hasOwnProperty(t) && "_" != t.charAt(0) && (n[t] = e[t]);
        return n
    }

    function k(e, t) {
        (l = x(l, e || {})).event = "click", l.url_tracking && !l.tid && (l.tid = v());
        var r = S(l);
        _("POST", o, r, function(e) {
            var n = w(e.responseText);
            200 == e.status && (n.cookie_life && (p = 1440 * n.cookie_life), function(e) {
                y(f, e, p || d)
            }(r.url_ref_id), function(e) {
                y(a, e, p || d)
            }(r.tid), n.clean_url && (0 == window.location.hash.indexOf("#_offer_") || 0 == window.location.hash.indexOf("#_r_") ? history.replaceState(null, null, " ") : 0 <= h().indexOf("fp_ref=") ? history.replaceState(null, null, g("fp_ref", h())) : 0 <= h().indexOf("fpr=") ? history.replaceState(null, null, g("fpr", h())) : 0 <= h().indexOf("via=") ? history.replaceState(null, null, g("via", h())) : 0 <= h().indexOf("_from=") ? history.replaceState(null, null, g("_from", h())) : 0 <= h().indexOf("_by=") ? history.replaceState(null, null, g("_by", h())) : 0 <= h().indexOf("deal=") ? history.replaceState(null, null, g("deal", h())) : 0 <= h().indexOf("_go=") ? history.replaceState(null, null, g("_go", h())) : 0 <= h().indexOf("_get=") && history.replaceState(null, null, g("_get", h())))), t && "function" == typeof t && t(n)
        })
    }

    function b(e, t) {
        if ((l = x(l, e || {})).event = "sale", l.tid) {
            var r = S(l);
            if (!r.amount) return void console.log("Amount is required.");
            if (!r.email && !r.uid) return void console.log("Email or UID is required.");
            if (!r.transaction_id) return void console.log("transaction_id is required.");
            _("POST", i, r, function(e) {
                var n = w(e.responseText);
                200 == e.status && (n.cookie_life && (p = 1440 * n.cookie_life), function(e) {
                    l.sale = !0, y(s, e, p || d)
                }(r.tid)), t && "function" == typeof t && t(n)
            })
        } else t && "function" == typeof t && t()
    }

    function R(e, t) {
        if (console.log(e), l.tid && (l.tid != l.signed_up || e.event_id)) {
            (l = x(l, e || {})).event = "signup";
            var r = S(l);
            if (!r.email && !r.uid) return void console.log("Email or UID is required.");
            _("POST", n, r, function(e) {
                var n = w(e.responseText);
                200 == e.status && n.cookie_life && (p = 1440 * n.cookie_life),
                    function(e) {
                        l.signed_up = !0, y(c, e, p || d)
                    }(r.tid), t && "function" == typeof t && t(n)
            })
        } else t && "function" == typeof t && t()
    }
    this.trackVisitor = function(e, n) {
        k(e, n)
    }, this.trackSignup = function(e, n) {
        R(e, n)
    }, this.trackSale = function(e, n) {
        b(e, n)
    }, this.init = function(e, n) {
        r(e, n)
    }
}
window.$FPROM = new fprom_obj_;