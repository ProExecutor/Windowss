(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2880],
  {
    99907: function (e, t, n) {
      "use strict";
      function r(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    32655: function (e, t, n) {
      "use strict";
      n.d(t, {
        qY: function () {
          return h;
        },
      });
      var r = n(27061),
        i = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        o = function (e, t, n) {
          (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.type = "browser");
        },
        a = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = r.platform);
        },
        s = function (e, t, n, r) {
          (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.bot = r),
            (this.type = "bot-device");
        },
        u = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        c =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        f = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        d = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function h(e) {
        return e
          ? p(e)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new l()
          : "undefined" != typeof navigator
          ? p(navigator.userAgent)
          : void 0 !== r && r.version
          ? new a(r.version.slice(1))
          : null;
      }
      function p(e) {
        var t =
          "" !== e &&
          f.reduce(function (t, n) {
            var r = n[0],
              i = n[1];
            if (t) return t;
            var o = i.exec(e);
            return !!o && [r, o];
          }, !1);
        if (!t) return null;
        var n = t[0],
          r = t[1];
        if ("searchbot" === n) return new u();
        var a = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
        a
          ? a.length < 3 &&
            (a = i(
              i([], a, !0),
              (function (e) {
                for (var t = [], n = 0; n < e; n++) t.push("0");
                return t;
              })(3 - a.length),
              !0
            ))
          : (a = []);
        var l = a.join("."),
          h = (function (e) {
            for (var t = 0, n = d.length; t < n; t++) {
              var r = d[t],
                i = r[0];
              if (r[1].exec(e)) return i;
            }
            return null;
          })(e),
          p = c.exec(e);
        return p && p[1] ? new s(n, l, h, p[1]) : new o(n, l, h);
      }
    },
    50343: function (e) {
      function t() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function n(e) {
        return "function" == typeof e;
      }
      function r(e) {
        return "object" == typeof e && null !== e;
      }
      (e.exports = t),
        (t.EventEmitter = t),
        (t.prototype._events = void 0),
        (t.prototype._maxListeners = void 0),
        (t.defaultMaxListeners = 10),
        (t.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
          return (this._maxListeners = e), this;
        }),
        (t.prototype.emit = function (e) {
          if (
            (this._events || (this._events = {}),
            "error" === e &&
              (!this._events.error ||
                (r(this._events.error) && !this._events.error.length)))
          ) {
            if (((t = arguments[1]), t instanceof Error)) throw t;
            var t,
              i,
              o,
              a,
              s,
              u,
              l,
              c = Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw ((c.context = t), c);
          }
          if (void 0 === (i = this._events[e])) return !1;
          if (n(i))
            switch (arguments.length) {
              case 1:
                i.call(this);
                break;
              case 2:
                i.call(this, arguments[1]);
                break;
              case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
              default:
                (a = Array.prototype.slice.call(arguments, 1)),
                  i.apply(this, a);
            }
          else if (r(i))
            for (
              s = 0,
                a = Array.prototype.slice.call(arguments, 1),
                o = (u = i.slice()).length;
              s < o;
              s++
            )
              u[s].apply(this, a);
          return !0;
        }),
        (t.prototype.addListener = function (e, i) {
          var o, a;
          if (!n(i)) throw TypeError("listener must be a function");
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit("newListener", e, n(i.listener) ? i.listener : i),
            this._events[e]
              ? r(this._events[e])
                ? this._events[e].push(i)
                : (this._events[e] = [this._events[e], i])
              : (this._events[e] = i),
            r(this._events[e]) &&
              !this._events[e].warned &&
              (o =
                void 0 === this._maxListeners
                  ? t.defaultMaxListeners
                  : this._maxListeners) &&
              o > 0 &&
              this._events[e].length > o &&
              ((this._events[e].warned = !0),
              console.error(
                "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                this._events[e].length
              ),
              "function" == typeof console.trace && console.trace()),
            this
          );
        }),
        (t.prototype.on = t.prototype.addListener),
        (t.prototype.once = function (e, t) {
          if (!n(t)) throw TypeError("listener must be a function");
          var r = !1;
          function i() {
            this.removeListener(e, i),
              r || ((r = !0), t.apply(this, arguments));
          }
          return (i.listener = t), this.on(e, i), this;
        }),
        (t.prototype.removeListener = function (e, t) {
          var i, o, a, s;
          if (!n(t)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[e]) return this;
          if (
            ((a = (i = this._events[e]).length),
            (o = -1),
            i === t || (n(i.listener) && i.listener === t))
          )
            delete this._events[e],
              this._events.removeListener && this.emit("removeListener", e, t);
          else if (r(i)) {
            for (s = a; s-- > 0; )
              if (i[s] === t || (i[s].listener && i[s].listener === t)) {
                o = s;
                break;
              }
            if (o < 0) return this;
            1 === i.length
              ? ((i.length = 0), delete this._events[e])
              : i.splice(o, 1),
              this._events.removeListener && this.emit("removeListener", e, t);
          }
          return this;
        }),
        (t.prototype.removeAllListeners = function (e) {
          var t, r;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 == arguments.length
                ? (this._events = {})
                : this._events[e] && delete this._events[e],
              this
            );
          if (0 == arguments.length) {
            for (t in this._events)
              "removeListener" !== t && this.removeAllListeners(t);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = {}),
              this
            );
          }
          if (n((r = this._events[e]))) this.removeListener(e, r);
          else if (r)
            for (; r.length; ) this.removeListener(e, r[r.length - 1]);
          return delete this._events[e], this;
        }),
        (t.prototype.listeners = function (e) {
          return this._events && this._events[e]
            ? n(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : [];
        }),
        (t.prototype.listenerCount = function (e) {
          if (this._events) {
            var t = this._events[e];
            if (n(t)) return 1;
            if (t) return t.length;
          }
          return 0;
        }),
        (t.listenerCount = function (e, t) {
          return e.listenerCount(t);
        });
    },
    2926: function (e, t, n) {
      var r, i;
      void 0 !==
        (r =
          "function" ==
          typeof (i = function () {
            "use strict";
            function t(e, t, n) {
              var r = new XMLHttpRequest();
              r.open("GET", e),
                (r.responseType = "blob"),
                (r.onload = function () {
                  s(r.response, t, n);
                }),
                (r.onerror = function () {
                  console.error("could not download file");
                }),
                r.send();
            }
            function r(e) {
              var t = new XMLHttpRequest();
              t.open("HEAD", e, !1);
              try {
                t.send();
              } catch (e) {}
              return 200 <= t.status && 299 >= t.status;
            }
            function i(e) {
              try {
                e.dispatchEvent(new MouseEvent("click"));
              } catch (n) {
                var t = document.createEvent("MouseEvents");
                t.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  window,
                  0,
                  0,
                  0,
                  80,
                  20,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                  e.dispatchEvent(t);
              }
            }
            var o =
                "object" == typeof window && window.window === window
                  ? window
                  : "object" == typeof self && self.self === self
                  ? self
                  : "object" == typeof n.g && n.g.global === n.g
                  ? n.g
                  : void 0,
              a =
                o.navigator &&
                /Macintosh/.test(navigator.userAgent) &&
                /AppleWebKit/.test(navigator.userAgent) &&
                !/Safari/.test(navigator.userAgent),
              s =
                o.saveAs ||
                ("object" != typeof window || window !== o
                  ? function () {}
                  : "download" in HTMLAnchorElement.prototype && !a
                  ? function (e, n, a) {
                      var s = o.URL || o.webkitURL,
                        u = document.createElement("a");
                      (n = n || e.name || "download"),
                        (u.download = n),
                        (u.rel = "noopener"),
                        "string" == typeof e
                          ? ((u.href = e),
                            u.origin === location.origin
                              ? i(u)
                              : r(u.href)
                              ? t(e, n, a)
                              : i(u, (u.target = "_blank")))
                          : ((u.href = s.createObjectURL(e)),
                            setTimeout(function () {
                              s.revokeObjectURL(u.href);
                            }, 4e4),
                            setTimeout(function () {
                              i(u);
                            }, 0));
                    }
                  : "msSaveOrOpenBlob" in navigator
                  ? function (e, n, o) {
                      if (
                        ((n = n || e.name || "download"), "string" != typeof e)
                      ) {
                        var a;
                        navigator.msSaveOrOpenBlob(
                          (void 0 === (a = o)
                            ? (a = { autoBom: !1 })
                            : "object" != typeof a &&
                              (console.warn(
                                "Deprecated: Expected third argument to be a object"
                              ),
                              (a = { autoBom: !a })),
                          a.autoBom &&
                          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                            e.type
                          )
                            ? new Blob(["\uFEFF", e], { type: e.type })
                            : e),
                          n
                        );
                      } else if (r(e)) t(e, n, o);
                      else {
                        var s = document.createElement("a");
                        (s.href = e),
                          (s.target = "_blank"),
                          setTimeout(function () {
                            i(s);
                          });
                      }
                    }
                  : function (e, n, r, i) {
                      if (
                        ((i = i || open("", "_blank")) &&
                          (i.document.title = i.document.body.innerText =
                            "downloading..."),
                        "string" == typeof e)
                      )
                        return t(e, n, r);
                      var s = "application/octet-stream" === e.type,
                        u = /constructor/i.test(o.HTMLElement) || o.safari,
                        l = /CriOS\/[\d]+/.test(navigator.userAgent);
                      if (
                        (l || (s && u) || a) &&
                        "undefined" != typeof FileReader
                      ) {
                        var c = new FileReader();
                        (c.onloadend = function () {
                          var e = c.result;
                          (e = l
                            ? e
                            : e.replace(
                                /^data:[^;]*;/,
                                "data:attachment/file;"
                              )),
                            i ? (i.location.href = e) : (location = e),
                            (i = null);
                        }),
                          c.readAsDataURL(e);
                      } else {
                        var f = o.URL || o.webkitURL,
                          d = f.createObjectURL(e);
                        i ? (i.location = d) : (location.href = d),
                          (i = null),
                          setTimeout(function () {
                            f.revokeObjectURL(d);
                          }, 4e4);
                      }
                    });
            (o.saveAs = s.saveAs = s), (e.exports = s);
          })
            ? i.apply(t, [])
            : i) && (e.exports = r);
    },
    55278: function (e, t, n) {
      "use strict";
      var r = n(72922),
        i = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        a = function (e, t, n) {
          for (var r = 0, i = e.length; r < i; r++)
            o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
        },
        s = function (e, t, n) {
          for (var r = 0, i = e.length; r < i; r++)
            null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
        },
        u = function (e, t, n) {
          for (var r in e)
            o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
        };
      e.exports = function (e, t, n) {
        var o;
        if (!r(t)) throw TypeError("iterator must be a function");
        arguments.length >= 3 && (o = n),
          "[object Array]" === i.call(e)
            ? a(e, t, o)
            : "string" == typeof e
            ? s(e, t, o)
            : u(e, t, o);
      };
    },
    10698: function (e, t, n) {
      "use strict";
      var r = n(8186);
      e.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
    70087: function (e) {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var n = function () {};
              (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.prototype.constructor = e);
            }
          });
    },
    47740: function (e, t, n) {
      "use strict";
      var r = n(10698)(),
        i = n(12737)("Object.prototype.toString"),
        o = function (e) {
          return (
            (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) &&
            "[object Arguments]" === i(e)
          );
        },
        a = function (e) {
          return (
            !!o(e) ||
            (null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Array]" !== i(e) &&
              "[object Function]" === i(e.callee))
          );
        },
        s = (function () {
          return o(arguments);
        })();
      (o.isLegacyArguments = a), (e.exports = s ? o : a);
    },
    72922: function (e) {
      "use strict";
      var t,
        n,
        r = Function.prototype.toString,
        i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof i && "function" == typeof Object.defineProperty)
        try {
          (t = Object.defineProperty({}, "length", {
            get: function () {
              throw n;
            },
          })),
            (n = {}),
            i(
              function () {
                throw 42;
              },
              null,
              t
            );
        } catch (e) {
          e !== n && (i = null);
        }
      else i = null;
      var o = /^\s*class\b/,
        a = function (e) {
          try {
            var t = r.call(e);
            return o.test(t);
          } catch (e) {
            return !1;
          }
        },
        s = function (e) {
          try {
            if (a(e)) return !1;
            return r.call(e), !0;
          } catch (e) {
            return !1;
          }
        },
        u = Object.prototype.toString,
        l = "function" == typeof Symbol && !!Symbol.toStringTag,
        c = !(0 in [,]),
        f = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var d = document.all;
        u.call(d) === u.call(document.all) &&
          (f = function (e) {
            if ((c || !e) && (void 0 === e || "object" == typeof e))
              try {
                var t = u.call(e);
                return (
                  ("[object HTMLAllCollection]" === t ||
                    "[object HTML document.all class]" === t ||
                    "[object HTMLCollection]" === t ||
                    "[object Object]" === t) &&
                  null == e("")
                );
              } catch (e) {}
            return !1;
          });
      }
      e.exports = i
        ? function (e) {
            if (f(e)) return !0;
            if (!e || ("function" != typeof e && "object" != typeof e))
              return !1;
            try {
              i(e, null, t);
            } catch (e) {
              if (e !== n) return !1;
            }
            return !a(e) && s(e);
          }
        : function (e) {
            if (f(e)) return !0;
            if (!e || ("function" != typeof e && "object" != typeof e))
              return !1;
            if (l) return s(e);
            if (a(e)) return !1;
            var t = u.call(e);
            return (
              !!(
                "[object Function]" === t ||
                "[object GeneratorFunction]" === t ||
                /^\[object HTML/.test(t)
              ) && s(e)
            );
          };
    },
    18265: function (e, t, n) {
      "use strict";
      var r,
        i = Object.prototype.toString,
        o = Function.prototype.toString,
        a = /^\s*(?:function)?\*/,
        s = n(10698)(),
        u = Object.getPrototypeOf,
        l = function () {
          if (!s) return !1;
          try {
            return Function("return function*() {}")();
          } catch (e) {}
        };
      e.exports = function (e) {
        if ("function" != typeof e) return !1;
        if (a.test(o.call(e))) return !0;
        if (!s) return "[object GeneratorFunction]" === i.call(e);
        if (!u) return !1;
        if (void 0 === r) {
          var t = l();
          r = !!t && u(t);
        }
        return u(e) === r;
      };
    },
    50387: function (e, t, n) {
      "use strict";
      var r = n(52505);
      e.exports = function (e) {
        return !!r(e);
      };
    },
    83926: function (e, t, n) {
      var r = n(27061);
      e.exports = (function (e) {
        "use strict";
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function n(e, t) {
          if (!(e instanceof t))
            throw TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function o(e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        }
        function a(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function s(e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        }
        function u(e) {
          return (u = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function l(e, t) {
          return (l =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function c(e) {
          if (void 0 === e)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function f(e) {
          var t = (function () {
            if (
              "undefined" == typeof Reflect ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = u(e);
            if (t) {
              var i = u(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" == typeof t || "function" == typeof t))
                return t;
              if (void 0 !== t)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return c(e);
            })(this, n);
          };
        }
        function d(e, t) {
          if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? h(e, t)
                : void 0
            );
          }
        }
        function h(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function p(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = d(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i,
              };
            }
            throw TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            a = !0,
            s = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (a = e.done), e;
            },
            e: function (e) {
              (s = !0), (o = e);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            },
          };
        }
        function y(e) {
          if (b) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            b.apply(void 0, [e].concat(n));
          }
        }
        function v(e) {
          if (g) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            g.apply(void 0, [e].concat(n));
          }
        }
        var b,
          g,
          m = (function () {
            function e(t) {
              n(this, e),
                (this.payload = t),
                (this.nri = (96 & this.payload[0]) >> 5),
                (this.ntype = 31 & this.payload[0]),
                (this.isvcl = 1 == this.ntype || 5 == this.ntype),
                (this.stype = ""),
                (this.isfmb = !1);
            }
            return (
              o(
                e,
                [
                  {
                    key: "toString",
                    value: function () {
                      return ""
                        .concat(e.type(this), ": NRI: ")
                        .concat(this.getNri());
                    },
                  },
                  {
                    key: "getNri",
                    value: function () {
                      return this.nri;
                    },
                  },
                  {
                    key: "type",
                    value: function () {
                      return this.ntype;
                    },
                  },
                  {
                    key: "isKeyframe",
                    value: function () {
                      return this.ntype === e.IDR;
                    },
                  },
                  {
                    key: "getPayload",
                    value: function () {
                      return this.payload;
                    },
                  },
                  {
                    key: "getPayloadSize",
                    value: function () {
                      return this.payload.byteLength;
                    },
                  },
                  {
                    key: "getSize",
                    value: function () {
                      return 4 + this.getPayloadSize();
                    },
                  },
                  {
                    key: "getData",
                    value: function () {
                      var e = new Uint8Array(this.getSize());
                      return (
                        new DataView(e.buffer).setUint32(0, this.getSize() - 4),
                        e.set(this.getPayload(), 4),
                        e
                      );
                    },
                  },
                ],
                [
                  {
                    key: "NDR",
                    get: function () {
                      return 1;
                    },
                  },
                  {
                    key: "IDR",
                    get: function () {
                      return 5;
                    },
                  },
                  {
                    key: "SEI",
                    get: function () {
                      return 6;
                    },
                  },
                  {
                    key: "SPS",
                    get: function () {
                      return 7;
                    },
                  },
                  {
                    key: "PPS",
                    get: function () {
                      return 8;
                    },
                  },
                  {
                    key: "AUD",
                    get: function () {
                      return 9;
                    },
                  },
                  {
                    key: "TYPES",
                    get: function () {
                      var t;
                      return (
                        a((t = {}), e.IDR, "IDR"),
                        a(t, e.SEI, "SEI"),
                        a(t, e.SPS, "SPS"),
                        a(t, e.PPS, "PPS"),
                        a(t, e.NDR, "NDR"),
                        a(t, e.AUD, "AUD"),
                        t
                      );
                    },
                  },
                  {
                    key: "type",
                    value: function (t) {
                      return t.ntype in e.TYPES ? e.TYPES[t.ntype] : "UNKNOWN";
                    },
                  },
                ]
              ),
              e
            );
          })();
        function w(e, t) {
          var n = new Uint8Array((0 | e.byteLength) + (0 | t.byteLength));
          return n.set(e, 0), n.set(t, 0 | e.byteLength), n;
        }
        var k = (function () {
            function e(t) {
              n(this, e),
                (this.data = t),
                (this.index = 0),
                (this.bitLength = 8 * t.byteLength);
            }
            return (
              o(e, [
                {
                  key: "setData",
                  value: function (e) {
                    (this.data = e),
                      (this.index = 0),
                      (this.bitLength = 8 * e.byteLength);
                  },
                },
                {
                  key: "bitsAvailable",
                  get: function () {
                    return this.bitLength - this.index;
                  },
                },
                {
                  key: "skipBits",
                  value: function (e) {
                    if (this.bitsAvailable < e) return !1;
                    this.index += e;
                  },
                },
                {
                  key: "readBits",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    return this.getBits(e, this.index, t);
                  },
                },
                {
                  key: "getBits",
                  value: function (e, t) {
                    var n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                    if (this.bitsAvailable < e) return 0;
                    var r = t % 8,
                      i = this.data[(t / 8) | 0] & (255 >>> r),
                      o = 8 - r;
                    if (o >= e) return n && (this.index += e), i >> (o - e);
                    n && (this.index += o);
                    var a = e - o;
                    return (i << a) | this.getBits(a, t + o, n);
                  },
                },
                {
                  key: "skipLZ",
                  value: function () {
                    var e;
                    for (e = 0; e < this.bitLength - this.index; ++e)
                      if (0 !== this.getBits(1, this.index + e, !1))
                        return (this.index += e), e;
                    return e;
                  },
                },
                {
                  key: "skipUEG",
                  value: function () {
                    this.skipBits(1 + this.skipLZ());
                  },
                },
                {
                  key: "skipEG",
                  value: function () {
                    this.skipBits(1 + this.skipLZ());
                  },
                },
                {
                  key: "readUEG",
                  value: function () {
                    var e = this.skipLZ();
                    return this.readBits(e + 1) - 1;
                  },
                },
                {
                  key: "readEG",
                  value: function () {
                    var e = this.readUEG();
                    return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
                  },
                },
                {
                  key: "readBoolean",
                  value: function () {
                    return 1 === this.readBits(1);
                  },
                },
                {
                  key: "readUByte",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1;
                    return this.readBits(8 * e);
                  },
                },
                {
                  key: "readUShort",
                  value: function () {
                    return this.readBits(16);
                  },
                },
                {
                  key: "readUInt",
                  value: function () {
                    return this.readBits(32);
                  },
                },
              ]),
              e
            );
          })(),
          S = (function () {
            function e(t) {
              n(this, e), (this.remuxer = t), (this.track = t.mp4track);
            }
            return (
              o(
                e,
                [
                  {
                    key: "parseSPS",
                    value: function (t) {
                      var n = e.readSPS(new Uint8Array(t));
                      (this.track.fps = n.fps),
                        (this.track.width = n.width),
                        (this.track.height = n.height),
                        (this.track.sps = [new Uint8Array(t)]),
                        (this.track.codec = "avc1.");
                      for (
                        var r = new DataView(t.buffer, t.byteOffset + 1, 4),
                          i = 0;
                        i < 3;
                        ++i
                      ) {
                        var o = r.getUint8(i).toString(16);
                        o.length < 2 && (o = "0" + o), (this.track.codec += o);
                      }
                    },
                  },
                  {
                    key: "parsePPS",
                    value: function (e) {
                      this.track.pps = [new Uint8Array(e)];
                    },
                  },
                  {
                    key: "parseNAL",
                    value: function (e) {
                      if (!e) return !1;
                      var t = !1;
                      switch (e.type()) {
                        case m.IDR:
                        case m.NDR:
                          t = !0;
                          break;
                        case m.PPS:
                          this.track.pps ||
                            (this.parsePPS(e.getPayload()),
                            !this.remuxer.readyToDecode &&
                              this.track.pps &&
                              this.track.sps &&
                              (this.remuxer.readyToDecode = !0)),
                            (t = !0);
                          break;
                        case m.SPS:
                          this.track.sps ||
                            (this.parseSPS(e.getPayload()),
                            !this.remuxer.readyToDecode &&
                              this.track.pps &&
                              this.track.sps &&
                              (this.remuxer.readyToDecode = !0)),
                            (t = !0);
                          break;
                        case m.AUD:
                          y("AUD - ignoing");
                          break;
                        case m.SEI:
                          y("SEI - ignoing");
                      }
                      return t;
                    },
                  },
                ],
                [
                  {
                    key: "extractNALu",
                    value: function (e) {
                      for (
                        var t, n, r = 0, i = e.byteLength, o = 0, a = [], s = 0;
                        r < i;

                      )
                        switch (((t = e[r++]), o)) {
                          case 0:
                            0 === t && (o = 1);
                            break;
                          case 1:
                            o = 0 === t ? 2 : 0;
                            break;
                          case 2:
                          case 3:
                            0 === t
                              ? (o = 3)
                              : (1 === t &&
                                  r < i &&
                                  (s != r - o - 1 &&
                                    a.push(e.subarray(s, r - o - 1)),
                                  (s = r)),
                                (o = 0));
                        }
                      return s < i && (n = e.subarray(s, i)), [a, n];
                    },
                  },
                  {
                    key: "skipScalingList",
                    value: function (e, t) {
                      for (var n = 8, r = 8, i = 0; i < t; i++)
                        0 !== r && (r = (n + e.readEG() + 256) % 256),
                          (n = 0 === r ? n : r);
                    },
                  },
                  {
                    key: "readSPS",
                    value: function (t) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = new k(t),
                        c = 0,
                        f = 0,
                        d = 0,
                        h = 0,
                        p = 1,
                        y = 0;
                      l.readUByte();
                      for (var v = [], b = t.byteLength, g = 1; g < b; g++)
                        g + 2 < b && 3 === l.readBits(24, !1)
                          ? (v.push(l.readBits(8)),
                            v.push(l.readBits(8)),
                            (g += 2),
                            l.readBits(8))
                          : v.push(l.readBits(8));
                      if (
                        (l.setData(new Uint8Array(v)),
                        (r = l.readUByte()),
                        l.readBits(5),
                        l.skipBits(3),
                        l.readUByte(),
                        l.skipUEG(),
                        100 === r ||
                          110 === r ||
                          122 === r ||
                          244 === r ||
                          44 === r ||
                          83 === r ||
                          86 === r ||
                          118 === r ||
                          128 === r)
                      ) {
                        var m = l.readUEG();
                        if (
                          (3 === m && l.skipBits(1),
                          l.skipUEG(),
                          l.skipUEG(),
                          l.skipBits(1),
                          l.readBoolean())
                        ) {
                          u = 3 !== m ? 8 : 12;
                          for (var w = 0; w < u; ++w)
                            l.readBoolean() &&
                              (w < 6
                                ? e.skipScalingList(l, 16)
                                : e.skipScalingList(l, 64));
                        }
                      }
                      l.skipUEG();
                      var S = l.readUEG();
                      if (0 === S) l.readUEG();
                      else if (1 === S) {
                        l.skipBits(1),
                          l.skipEG(),
                          l.skipEG(),
                          (i = l.readUEG());
                        for (var _ = 0; _ < i; ++_) l.skipEG();
                      }
                      if (
                        (l.skipUEG(),
                        l.skipBits(1),
                        (o = l.readUEG()),
                        (a = l.readUEG()),
                        0 === (s = l.readBits(1)) && l.skipBits(1),
                        l.skipBits(1),
                        l.readBoolean() &&
                          ((c = l.readUEG()),
                          (f = l.readUEG()),
                          (d = l.readUEG()),
                          (h = l.readUEG())),
                        l.readBoolean())
                      ) {
                        if (l.readBoolean()) {
                          switch (l.readUByte()) {
                            case 1:
                              n = [1, 1];
                              break;
                            case 2:
                              n = [12, 11];
                              break;
                            case 3:
                              n = [10, 11];
                              break;
                            case 4:
                              n = [16, 11];
                              break;
                            case 5:
                              n = [40, 33];
                              break;
                            case 6:
                              n = [24, 11];
                              break;
                            case 7:
                              n = [20, 11];
                              break;
                            case 8:
                              n = [32, 11];
                              break;
                            case 9:
                              n = [80, 33];
                              break;
                            case 10:
                              n = [18, 11];
                              break;
                            case 11:
                              n = [15, 11];
                              break;
                            case 12:
                              n = [64, 33];
                              break;
                            case 13:
                              n = [160, 99];
                              break;
                            case 14:
                              n = [4, 3];
                              break;
                            case 15:
                              n = [3, 2];
                              break;
                            case 16:
                              n = [2, 1];
                              break;
                            case 255:
                              n = [
                                (l.readUByte() << 8) | l.readUByte(),
                                (l.readUByte() << 8) | l.readUByte(),
                              ];
                          }
                          n && n[0] > 0 && n[1] > 0 && (p = n[0] / n[1]);
                        }
                        if (
                          (l.readBoolean() && l.skipBits(1),
                          l.readBoolean() &&
                            (l.skipBits(4), l.readBoolean() && l.skipBits(24)),
                          l.readBoolean() && (l.skipUEG(), l.skipUEG()),
                          l.readBoolean())
                        ) {
                          var E = l.readUInt(),
                            x = l.readUInt();
                          l.readBoolean() && (y = x / (2 * E));
                        }
                      }
                      return {
                        fps: y > 0 ? y : void 0,
                        width: Math.ceil((16 * (o + 1) - 2 * c - 2 * f) * p),
                        height: (2 - s) * (a + 1) * 16 - (s ? 2 : 4) * (d + h),
                      };
                    },
                  },
                  {
                    key: "parseHeader",
                    value: function (e) {
                      var t = new k(e.getPayload());
                      t.readUByte(),
                        (e.isfmb = 0 === t.readUEG()),
                        (e.stype = t.readUEG());
                    },
                  },
                ]
              ),
              e
            );
          })(),
          _ = (function () {
            function e(t) {
              n(this, e), (this.remuxer = t), (this.track = t.mp4track);
            }
            return (
              o(
                e,
                [
                  {
                    key: "extractAAC",
                    value: function (t) {
                      var n,
                        r,
                        i = 0,
                        o = t.byteLength,
                        a = [];
                      if (!e.isAACPattern(t))
                        return v("Invalid ADTS audio format"), a;
                      for (
                        n = e.getHeaderLength(t),
                          this.aacHeader || (this.aacHeader = t.subarray(0, n));
                        i < o;

                      )
                        (r = e.getFrameLength(t)),
                          a.push(t.subarray(n, r)),
                          (t = t.slice(r)),
                          (i += r);
                      return a;
                    },
                  },
                  {
                    key: "setAACConfig",
                    value: function () {
                      var e,
                        t,
                        n,
                        r = new Uint8Array(2),
                        i = this.aacHeader;
                      i &&
                        ((e = 1 + ((192 & i[2]) >>> 6)),
                        (t = (60 & i[2]) >>> 2),
                        (n = ((1 & i[2]) << 2) | ((192 & i[3]) >>> 6)),
                        (r[0] = e << 3),
                        (r[0] |= (14 & t) >> 1),
                        (r[1] |= (1 & t) << 7),
                        (r[1] |= n << 3),
                        (this.track.codec = "mp4a.40." + e),
                        (this.track.channelCount = n),
                        (this.track.config = r),
                        (this.remuxer.readyToDecode = !0));
                    },
                  },
                ],
                [
                  {
                    key: "samplingRateMap",
                    get: function () {
                      return [
                        96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3,
                        12e3, 11025, 8e3, 7350,
                      ];
                    },
                  },
                  {
                    key: "getHeaderLength",
                    value: function (e) {
                      return 1 & e[1] ? 7 : 9;
                    },
                  },
                  {
                    key: "getFrameLength",
                    value: function (e) {
                      return (
                        ((3 & e[3]) << 11) | (e[4] << 3) | ((224 & e[5]) >>> 5)
                      );
                    },
                  },
                  {
                    key: "isAACPattern",
                    value: function (e) {
                      return (
                        255 === e[0] && 240 == (240 & e[1]) && 0 == (6 & e[1])
                      );
                    },
                  },
                ]
              ),
              e
            );
          })(),
          E = (function () {
            function e(t) {
              n(this, e), (this.listener = {}), (this.type = "" | t);
            }
            return (
              o(e, [
                {
                  key: "on",
                  value: function (e, t) {
                    return (
                      this.listener[e] || (this.listener[e] = []),
                      this.listener[e].push(t),
                      !0
                    );
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    if (this.listener[e]) {
                      var n = this.listener[e].indexOf(t);
                      return n > -1 && this.listener[e].splice(n, 1), !0;
                    }
                    return !1;
                  },
                },
                {
                  key: "offAll",
                  value: function () {
                    this.listener = {};
                  },
                },
                {
                  key: "dispatch",
                  value: function (e, t) {
                    return (
                      !!this.listener[e] &&
                      (this.listener[e].map(function (e) {
                        e.apply(null, [t]);
                      }),
                      !0)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          x = (function () {
            function e() {
              n(this, e);
            }
            return (
              o(e, null, [
                {
                  key: "init",
                  value: function () {
                    for (t in ((e.types = {
                      avc1: [],
                      avcC: [],
                      btrt: [],
                      dinf: [],
                      dref: [],
                      esds: [],
                      ftyp: [],
                      hdlr: [],
                      mdat: [],
                      mdhd: [],
                      mdia: [],
                      mfhd: [],
                      minf: [],
                      moof: [],
                      moov: [],
                      mp4a: [],
                      mvex: [],
                      mvhd: [],
                      sdtp: [],
                      stbl: [],
                      stco: [],
                      stsc: [],
                      stsd: [],
                      stsz: [],
                      stts: [],
                      tfdt: [],
                      tfhd: [],
                      traf: [],
                      trak: [],
                      trun: [],
                      trex: [],
                      tkhd: [],
                      vmhd: [],
                      smhd: [],
                    }),
                    e.types))
                      e.types.hasOwnProperty(t) &&
                        (e.types[t] = [
                          t.charCodeAt(0),
                          t.charCodeAt(1),
                          t.charCodeAt(2),
                          t.charCodeAt(3),
                        ]);
                    var t,
                      n = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97,
                        110, 100, 108, 101, 114, 0,
                      ]),
                      r = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97,
                        110, 100, 108, 101, 114, 0,
                      ]);
                    e.HDLR_TYPES = { video: n, audio: r };
                    var i = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32,
                        0, 0, 0, 1,
                      ]),
                      o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    (e.STTS = e.STSC = e.STCO = o),
                      (e.STSZ = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      ])),
                      (e.VMHD = new Uint8Array([
                        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                      ])),
                      (e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                      (e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
                    var a = new Uint8Array([105, 115, 111, 109]),
                      s = new Uint8Array([97, 118, 99, 49]),
                      u = new Uint8Array([0, 0, 0, 1]);
                    (e.FTYP = e.box(e.types.ftyp, a, u, a, s)),
                      (e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i)));
                  },
                },
                {
                  key: "box",
                  value: function (e) {
                    for (
                      var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    for (var i, o = 8, a = n.length, s = a; a--; )
                      o += n[a].byteLength;
                    for (
                      (i = new Uint8Array(o))[0] = (o >> 24) & 255,
                        i[1] = (o >> 16) & 255,
                        i[2] = (o >> 8) & 255,
                        i[3] = 255 & o,
                        i.set(e, 4),
                        a = 0,
                        o = 8;
                      a < s;
                      ++a
                    )
                      i.set(n[a], o), (o += n[a].byteLength);
                    return i;
                  },
                },
                {
                  key: "hdlr",
                  value: function (t) {
                    return e.box(e.types.hdlr, e.HDLR_TYPES[t]);
                  },
                },
                {
                  key: "mdat",
                  value: function (t) {
                    return e.box(e.types.mdat, t);
                  },
                },
                {
                  key: "mdhd",
                  value: function (t, n) {
                    return e.box(
                      e.types.mdhd,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        3,
                        (t >> 24) & 255,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        255 & t,
                        n >> 24,
                        (n >> 16) & 255,
                        (n >> 8) & 255,
                        255 & n,
                        85,
                        196,
                        0,
                        0,
                      ])
                    );
                  },
                },
                {
                  key: "mdia",
                  value: function (t) {
                    return e.box(
                      e.types.mdia,
                      e.mdhd(t.timescale, t.duration),
                      e.hdlr(t.type),
                      e.minf(t)
                    );
                  },
                },
                {
                  key: "mfhd",
                  value: function (t) {
                    return e.box(
                      e.types.mfhd,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        t >> 24,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        255 & t,
                      ])
                    );
                  },
                },
                {
                  key: "minf",
                  value: function (t) {
                    return "audio" === t.type
                      ? e.box(
                          e.types.minf,
                          e.box(e.types.smhd, e.SMHD),
                          e.DINF,
                          e.stbl(t)
                        )
                      : e.box(
                          e.types.minf,
                          e.box(e.types.vmhd, e.VMHD),
                          e.DINF,
                          e.stbl(t)
                        );
                  },
                },
                {
                  key: "moof",
                  value: function (t, n, r) {
                    return e.box(e.types.moof, e.mfhd(t), e.traf(r, n));
                  },
                },
                {
                  key: "moov",
                  value: function (t, n, r) {
                    for (var i = t.length, o = []; i--; ) o[i] = e.trak(t[i]);
                    return e.box.apply(
                      null,
                      [e.types.moov, e.mvhd(r, n)].concat(o).concat(e.mvex(t))
                    );
                  },
                },
                {
                  key: "mvex",
                  value: function (t) {
                    for (var n = t.length, r = []; n--; ) r[n] = e.trex(t[n]);
                    return e.box.apply(null, [e.types.mvex].concat(r));
                  },
                },
                {
                  key: "mvhd",
                  value: function (t, n) {
                    var r = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      2,
                      (t >> 24) & 255,
                      (t >> 16) & 255,
                      (t >> 8) & 255,
                      255 & t,
                      (n >> 24) & 255,
                      (n >> 16) & 255,
                      (n >> 8) & 255,
                      255 & n,
                      0,
                      1,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      255,
                      255,
                      255,
                      255,
                    ]);
                    return e.box(e.types.mvhd, r);
                  },
                },
                {
                  key: "sdtp",
                  value: function (t) {
                    var n,
                      r,
                      i = t.samples || [],
                      o = new Uint8Array(4 + i.length);
                    for (r = 0; r < i.length; r++)
                      (n = i[r].flags),
                        (o[r + 4] =
                          (n.dependsOn << 4) |
                          (n.isDependedOn << 2) |
                          n.hasRedundancy);
                    return e.box(e.types.sdtp, o);
                  },
                },
                {
                  key: "stbl",
                  value: function (t) {
                    return e.box(
                      e.types.stbl,
                      e.stsd(t),
                      e.box(e.types.stts, e.STTS),
                      e.box(e.types.stsc, e.STSC),
                      e.box(e.types.stsz, e.STSZ),
                      e.box(e.types.stco, e.STCO)
                    );
                  },
                },
                {
                  key: "avc1",
                  value: function (t) {
                    var n,
                      r,
                      i,
                      o = [],
                      a = [];
                    for (n = 0; n < t.sps.length; n++)
                      (i = (r = t.sps[n]).byteLength),
                        o.push((i >>> 8) & 255),
                        o.push(255 & i),
                        (o = o.concat(Array.prototype.slice.call(r)));
                    for (n = 0; n < t.pps.length; n++)
                      (i = (r = t.pps[n]).byteLength),
                        a.push((i >>> 8) & 255),
                        a.push(255 & i),
                        (a = a.concat(Array.prototype.slice.call(r)));
                    var s = e.box(
                        e.types.avcC,
                        new Uint8Array(
                          [1, o[3], o[4], o[5], 255, 224 | t.sps.length]
                            .concat(o)
                            .concat([t.pps.length])
                            .concat(a)
                        )
                      ),
                      u = t.width,
                      l = t.height;
                    return e.box(
                      e.types.avc1,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        (u >> 8) & 255,
                        255 & u,
                        (l >> 8) & 255,
                        255 & l,
                        0,
                        72,
                        0,
                        0,
                        0,
                        72,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        18,
                        98,
                        105,
                        110,
                        101,
                        108,
                        112,
                        114,
                        111,
                        46,
                        114,
                        117,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        24,
                        17,
                        17,
                      ]),
                      s,
                      e.box(
                        e.types.btrt,
                        new Uint8Array([
                          0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                        ])
                      )
                    );
                  },
                },
                {
                  key: "esds",
                  value: function (e) {
                    var t = e.config.byteLength,
                      n = new Uint8Array(26 + t + 3);
                    return (
                      n.set([
                        0,
                        0,
                        0,
                        0,
                        3,
                        23 + t,
                        0,
                        1,
                        0,
                        4,
                        15 + t,
                        64,
                        21,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        5,
                        t,
                      ]),
                      n.set(e.config, 26),
                      n.set([6, 1, 2], 26 + t),
                      n
                    );
                  },
                },
                {
                  key: "mp4a",
                  value: function (t) {
                    var n = t.audiosamplerate;
                    return e.box(
                      e.types.mp4a,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        t.channelCount,
                        0,
                        16,
                        0,
                        0,
                        0,
                        0,
                        (n >> 8) & 255,
                        255 & n,
                        0,
                        0,
                      ]),
                      e.box(e.types.esds, e.esds(t))
                    );
                  },
                },
                {
                  key: "stsd",
                  value: function (t) {
                    return "audio" === t.type
                      ? e.box(e.types.stsd, e.STSD, e.mp4a(t))
                      : e.box(e.types.stsd, e.STSD, e.avc1(t));
                  },
                },
                {
                  key: "tkhd",
                  value: function (t) {
                    var n = t.id,
                      r = t.duration,
                      i = t.width,
                      o = t.height,
                      a = t.volume;
                    return e.box(
                      e.types.tkhd,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        (n >> 24) & 255,
                        (n >> 16) & 255,
                        (n >> 8) & 255,
                        255 & n,
                        0,
                        0,
                        0,
                        0,
                        r >> 24,
                        (r >> 16) & 255,
                        (r >> 8) & 255,
                        255 & r,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        (a >> 0) & 255,
                        (((a % 1) * 10) >> 0) & 255,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        64,
                        0,
                        0,
                        0,
                        (i >> 8) & 255,
                        255 & i,
                        0,
                        0,
                        (o >> 8) & 255,
                        255 & o,
                        0,
                        0,
                      ])
                    );
                  },
                },
                {
                  key: "traf",
                  value: function (t, n) {
                    var r = e.sdtp(t),
                      i = t.id;
                    return e.box(
                      e.types.traf,
                      e.box(
                        e.types.tfhd,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          i >> 24,
                          (i >> 16) & 255,
                          (i >> 8) & 255,
                          255 & i,
                        ])
                      ),
                      e.box(
                        e.types.tfdt,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          n >> 24,
                          (n >> 16) & 255,
                          (n >> 8) & 255,
                          255 & n,
                        ])
                      ),
                      e.trun(t, r.length + 16 + 16 + 8 + 16 + 8 + 8),
                      r
                    );
                  },
                },
                {
                  key: "trak",
                  value: function (t) {
                    return (
                      (t.duration = t.duration || 4294967295),
                      e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                    );
                  },
                },
                {
                  key: "trex",
                  value: function (t) {
                    var n = t.id;
                    return e.box(
                      e.types.trex,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        n >> 24,
                        (n >> 16) & 255,
                        (n >> 8) & 255,
                        255 & n,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        1,
                      ])
                    );
                  },
                },
                {
                  key: "trun",
                  value: function (t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = t.samples || [],
                      c = l.length,
                      f = 12 + 16 * c,
                      d = new Uint8Array(f);
                    for (
                      n += 8 + f,
                        d.set(
                          [
                            0,
                            0,
                            15,
                            1,
                            (c >>> 24) & 255,
                            (c >>> 16) & 255,
                            (c >>> 8) & 255,
                            255 & c,
                            (n >>> 24) & 255,
                            (n >>> 16) & 255,
                            (n >>> 8) & 255,
                            255 & n,
                          ],
                          0
                        ),
                        r = 0;
                      r < c;
                      r++
                    )
                      (o = (i = l[r]).duration),
                        (a = i.size),
                        (s = i.flags),
                        (u = i.cts),
                        d.set(
                          [
                            (o >>> 24) & 255,
                            (o >>> 16) & 255,
                            (o >>> 8) & 255,
                            255 & o,
                            (a >>> 24) & 255,
                            (a >>> 16) & 255,
                            (a >>> 8) & 255,
                            255 & a,
                            (s.isLeading << 2) | s.dependsOn,
                            (s.isDependedOn << 6) |
                              (s.hasRedundancy << 4) |
                              (s.paddingValue << 1) |
                              s.isNonSync,
                            61440 & s.degradPrio,
                            15 & s.degradPrio,
                            (u >>> 24) & 255,
                            (u >>> 16) & 255,
                            (u >>> 8) & 255,
                            255 & u,
                          ],
                          12 + 16 * r
                        );
                    return e.box(e.types.trun, d);
                  },
                },
                {
                  key: "initSegment",
                  value: function (t, n, r) {
                    e.types || e.init();
                    var i,
                      o = e.moov(t, n, r);
                    return (
                      (i = new Uint8Array(
                        e.FTYP.byteLength + o.byteLength
                      )).set(e.FTYP),
                      i.set(o, e.FTYP.byteLength),
                      i
                    );
                  },
                },
              ]),
              e
            );
          })(),
          O = 1,
          A = (function () {
            function e() {
              n(this, e);
            }
            return (
              o(
                e,
                [
                  {
                    key: "flush",
                    value: function () {
                      (this.mp4track.len = 0), (this.mp4track.samples = []);
                    },
                  },
                  {
                    key: "isReady",
                    value: function () {
                      return (
                        !(!this.readyToDecode || !this.samples.length) || null
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getTrackID",
                    value: function () {
                      return O++;
                    },
                  },
                ]
              ),
              e
            );
          })(),
          R = (function (e) {
            s(r, e);
            var t = f(r);
            function r(e) {
              var i;
              return (
                n(this, r),
                ((i = t.call(this)).readyToDecode = !1),
                (i.nextDts = 0),
                (i.dts = 0),
                (i.mp4track = {
                  id: A.getTrackID(),
                  type: "audio",
                  channelCount: 0,
                  len: 0,
                  fragmented: !0,
                  timescale: e,
                  duration: e,
                  samples: [],
                  config: "",
                  codec: "",
                }),
                (i.samples = []),
                (i.aac = new _(c(i))),
                i
              );
            }
            return (
              o(r, [
                {
                  key: "resetTrack",
                  value: function () {
                    (this.readyToDecode = !1),
                      (this.mp4track.codec = ""),
                      (this.mp4track.channelCount = ""),
                      (this.mp4track.config = ""),
                      (this.mp4track.timescale = this.timescale),
                      (this.nextDts = 0),
                      (this.dts = 0);
                  },
                },
                {
                  key: "remux",
                  value: function (e) {
                    if (e.length > 0)
                      for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                          r = n.units,
                          i = r.byteLength;
                        this.samples.push({
                          units: r,
                          size: i,
                          duration: n.duration,
                        }),
                          (this.mp4track.len += i),
                          this.readyToDecode || this.aac.setAACConfig();
                      }
                  },
                },
                {
                  key: "getPayload",
                  value: function () {
                    if (!this.isReady()) return null;
                    var e,
                      t,
                      n = new Uint8Array(this.mp4track.len),
                      r = 0,
                      i = this.mp4track.samples;
                    for (this.dts = this.nextDts; this.samples.length; ) {
                      var o = this.samples.shift();
                      o.units,
                        (t = o.duration) <= 0
                          ? (y(
                              "remuxer: invalid sample duration at DTS: "
                                .concat(this.nextDts, " :")
                                .concat(t)
                            ),
                            (this.mp4track.len -= o.size))
                          : ((this.nextDts += t),
                            (e = {
                              size: o.size,
                              duration: t,
                              cts: 0,
                              flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1,
                              },
                            }),
                            n.set(o.units, r),
                            (r += o.size),
                            i.push(e));
                    }
                    return i.length
                      ? new Uint8Array(n.buffer, 0, this.mp4track.len)
                      : null;
                  },
                },
                {
                  key: "getAacParser",
                  value: function () {
                    return this.aac;
                  },
                },
              ]),
              r
            );
          })(A),
          T = (function (e) {
            s(r, e);
            var t = f(r);
            function r(e) {
              var i;
              return (
                n(this, r),
                ((i = t.call(this)).readyToDecode = !1),
                (i.nextDts = 0),
                (i.dts = 0),
                (i.mp4track = {
                  id: A.getTrackID(),
                  type: "video",
                  len: 0,
                  fragmented: !0,
                  sps: "",
                  pps: "",
                  fps: 30,
                  width: 0,
                  height: 0,
                  timescale: e,
                  duration: e,
                  samples: [],
                }),
                (i.samples = []),
                (i.h264 = new S(c(i))),
                i
              );
            }
            return (
              o(r, [
                {
                  key: "resetTrack",
                  value: function () {
                    (this.readyToDecode = !1),
                      (this.mp4track.sps = ""),
                      (this.mp4track.pps = ""),
                      (this.nextDts = 0),
                      (this.dts = 0);
                  },
                },
                {
                  key: "remux",
                  value: function (e) {
                    var t,
                      n = p(e);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r,
                          i = t.value,
                          o = [],
                          a = 0,
                          s = p(i.units);
                        try {
                          for (s.s(); !(r = s.n()).done; ) {
                            var u = r.value;
                            this.h264.parseNAL(u) &&
                              (o.push(u), (a += u.getSize()));
                          }
                        } catch (e) {
                          s.e(e);
                        } finally {
                          s.f();
                        }
                        o.length > 0 &&
                          this.readyToDecode &&
                          ((this.mp4track.len += a),
                          this.samples.push({
                            units: o,
                            size: a,
                            keyFrame: i.keyFrame,
                            duration: i.duration,
                            compositionTimeOffset: i.compositionTimeOffset,
                          }));
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                  },
                },
                {
                  key: "getPayload",
                  value: function () {
                    if (!this.isReady()) return null;
                    var e,
                      t,
                      n = new Uint8Array(this.mp4track.len),
                      r = 0,
                      i = this.mp4track.samples;
                    for (this.dts = this.nextDts; this.samples.length; ) {
                      var o = this.samples.shift(),
                        a = o.units;
                      if ((t = o.duration) <= 0)
                        y(
                          "remuxer: invalid sample duration at DTS: "
                            .concat(this.nextDts, " :")
                            .concat(t)
                        ),
                          (this.mp4track.len -= o.size);
                      else {
                        (this.nextDts += t),
                          (e = {
                            size: o.size,
                            duration: t,
                            cts: o.compositionTimeOffset || 0,
                            flags: {
                              isLeading: 0,
                              isDependedOn: 0,
                              hasRedundancy: 0,
                              degradPrio: 0,
                              isNonSync: o.keyFrame ? 0 : 1,
                              dependsOn: o.keyFrame ? 2 : 1,
                            },
                          });
                        var s,
                          u = p(a);
                        try {
                          for (u.s(); !(s = u.n()).done; ) {
                            var l = s.value;
                            n.set(l.getData(), r), (r += l.getSize());
                          }
                        } catch (e) {
                          u.e(e);
                        } finally {
                          u.f();
                        }
                        i.push(e);
                      }
                    }
                    return i.length
                      ? new Uint8Array(n.buffer, 0, this.mp4track.len)
                      : null;
                  },
                },
              ]),
              r
            );
          })(A),
          j = (function (e) {
            s(r, e);
            var t = f(r);
            function r(e) {
              var i;
              return (
                n(this, r),
                ((i = t.call(this, "remuxer")).initialized = !1),
                (i.trackTypes = []),
                (i.tracks = {}),
                (i.seq = 1),
                (i.env = e),
                (i.timescale = 1e3),
                (i.mediaDuration = 0),
                (i.aacParser = null),
                i
              );
            }
            return (
              o(r, [
                {
                  key: "addTrack",
                  value: function (e) {
                    if (
                      (("video" !== e && "both" !== e) ||
                        ((this.tracks.video = new T(this.timescale)),
                        this.trackTypes.push("video")),
                      "audio" === e || "both" === e)
                    ) {
                      var t = new R(this.timescale);
                      (this.aacParser = t.getAacParser()),
                        (this.tracks.audio = t),
                        this.trackTypes.push("audio");
                    }
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var e,
                      t = p(this.trackTypes);
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value;
                        this.tracks[n].resetTrack();
                      }
                    } catch (e) {
                      t.e(e);
                    } finally {
                      t.f();
                    }
                    this.initialized = !1;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.tracks = {}), this.offAll();
                  },
                },
                {
                  key: "flush",
                  value: function () {
                    if (this.initialized) {
                      var e,
                        t,
                        n,
                        r,
                        i,
                        o,
                        a = p(this.trackTypes);
                      try {
                        for (a.s(); !(o = a.n()).done; ) {
                          var s = o.value,
                            u = this.tracks[s],
                            l = u.getPayload();
                          if (l && l.byteLength) {
                            var c = {
                              type: s,
                              payload: w(
                                x.moof(this.seq, u.dts, u.mp4track),
                                x.mdat(l)
                              ),
                              dts: u.dts,
                            };
                            "video" === s && (c.fps = u.mp4track.fps),
                              this.dispatch("buffer", c);
                            var f =
                              ((e = u.dts / this.timescale),
                              (t = void 0),
                              (n = void 0),
                              (r = void 0),
                              (i = void 0),
                              (i = ""),
                              (t = Math.floor(e)),
                              (n = parseInt(t / 3600, 10) % 24) > 0 &&
                                (i += (n < 10 ? "0" + n : n) + ":"),
                              (i +=
                                ((r = parseInt(t / 60, 10) % 60) < 10
                                  ? "0" + r
                                  : r) +
                                ":" +
                                ((t = t < 0 ? 0 : t % 60) < 10 ? "0" + t : t)));
                            y(
                              "put segment ("
                                .concat(s, "): dts: ")
                                .concat(u.dts, " frames: ")
                                .concat(u.mp4track.samples.length, " second: ")
                                .concat(f)
                            ),
                              u.flush(),
                              this.seq++;
                          }
                        }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                    } else
                      this.isReady() &&
                        (this.dispatch("ready"),
                        this.initSegment(),
                        (this.initialized = !0),
                        this.flush());
                  },
                },
                {
                  key: "initSegment",
                  value: function () {
                    var e,
                      t = [],
                      n = p(this.trackTypes);
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value,
                          i = this.tracks[r];
                        if ("browser" == this.env) {
                          var o = {
                            type: r,
                            payload: x.initSegment(
                              [i.mp4track],
                              this.mediaDuration,
                              this.timescale
                            ),
                          };
                          this.dispatch("buffer", o);
                        } else t.push(i.mp4track);
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                    if ("node" == this.env) {
                      var a = {
                        type: "all",
                        payload: x.initSegment(
                          t,
                          this.mediaDuration,
                          this.timescale
                        ),
                      };
                      this.dispatch("buffer", a);
                    }
                    y("Initial segment generated.");
                  },
                },
                {
                  key: "isReady",
                  value: function () {
                    var e,
                      t = p(this.trackTypes);
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value;
                        if (
                          !this.tracks[n].readyToDecode ||
                          !this.tracks[n].samples.length
                        )
                          return !1;
                      }
                    } catch (e) {
                      t.e(e);
                    } finally {
                      t.f();
                    }
                    return !0;
                  },
                },
                {
                  key: "remux",
                  value: function (e) {
                    var t,
                      n = p(this.trackTypes);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value,
                          i = e[r];
                        ("audio" === r &&
                          this.tracks.video &&
                          !this.tracks.video.readyToDecode) ||
                          (i.length > 0 && this.tracks[r].remux(i));
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                    this.flush();
                  },
                },
              ]),
              r
            );
          })(E),
          C = (function (e) {
            s(r, e);
            var t = f(r);
            function r(e, i) {
              var o;
              return (
                n(this, r),
                ((o = t.call(this, "buffer")).type = i),
                (o.queue = new Uint8Array()),
                (o.cleaning = !1),
                (o.pendingCleaning = 0),
                (o.cleanOffset = 30),
                (o.cleanRanges = []),
                (o.sourceBuffer = e),
                o.sourceBuffer.addEventListener("updateend", function () {
                  o.pendingCleaning > 0 &&
                    (o.initCleanup(o.pendingCleaning), (o.pendingCleaning = 0)),
                    (o.cleaning = !1),
                    o.cleanRanges.length && o.doCleanup();
                }),
                o.sourceBuffer.addEventListener("error", function () {
                  o.dispatch("error", {
                    type: o.type,
                    name: "buffer",
                    error: "buffer error",
                  });
                }),
                o
              );
            }
            return (
              o(r, [
                {
                  key: "destroy",
                  value: function () {
                    (this.queue = null),
                      (this.sourceBuffer = null),
                      this.offAll();
                  },
                },
                {
                  key: "doCleanup",
                  value: function () {
                    if (this.cleanRanges.length) {
                      var e = this.cleanRanges.shift();
                      y(
                        ""
                          .concat(this.type, " remove range [")
                          .concat(e[0], " - ")
                          .concat(e[1], ")")
                      ),
                        (this.cleaning = !0),
                        this.sourceBuffer.remove(e[0], e[1]);
                    } else this.cleaning = !1;
                  },
                },
                {
                  key: "initCleanup",
                  value: function (e) {
                    try {
                      if (this.sourceBuffer.updating)
                        return void (this.pendingCleaning = e);
                      if (
                        this.sourceBuffer.buffered &&
                        this.sourceBuffer.buffered.length &&
                        !this.cleaning
                      ) {
                        for (
                          var t = 0;
                          t < this.sourceBuffer.buffered.length;
                          ++t
                        ) {
                          var n = this.sourceBuffer.buffered.start(t),
                            r = this.sourceBuffer.buffered.end(t);
                          e - n > this.cleanOffset &&
                            n < (r = e - this.cleanOffset) &&
                            this.cleanRanges.push([n, r]);
                        }
                        this.doCleanup();
                      }
                    } catch (e) {
                      v(
                        "Error occured while cleaning "
                          .concat(this.type, " buffer - ")
                          .concat(e.name, ": ")
                          .concat(e.message)
                      );
                    }
                  },
                },
                {
                  key: "doAppend",
                  value: function () {
                    if (
                      this.queue.length &&
                      this.sourceBuffer &&
                      !this.sourceBuffer.updating
                    )
                      try {
                        this.sourceBuffer.appendBuffer(this.queue),
                          (this.queue = new Uint8Array());
                      } catch (t) {
                        var e = "unexpectedError";
                        "QuotaExceededError" === t.name
                          ? (y("".concat(this.type, " buffer quota full")),
                            (e = "QuotaExceeded"))
                          : (v(
                              "Error occured while appending "
                                .concat(this.type, " buffer - ")
                                .concat(t.name, ": ")
                                .concat(t.message)
                            ),
                            (e = "InvalidStateError")),
                          this.dispatch("error", {
                            type: this.type,
                            name: e,
                            error: "buffer error",
                          });
                      }
                  },
                },
                {
                  key: "feed",
                  value: function (e) {
                    this.queue = w(this.queue, e);
                  },
                },
              ]),
              r
            );
          })(E);
        return (function (i) {
          s(u, i);
          var a = f(u);
          function u(e) {
            var i;
            return (
              n(this, u),
              ((i = a.call(this, "jmuxer")).isReset = !1),
              (i.options = Object.assign(
                {},
                {
                  node: "",
                  mode: "both",
                  flushingTime: 500,
                  maxDelay: 500,
                  clearBuffer: !0,
                  fps: 30,
                  readFpsFromTrack: !1,
                  debug: !1,
                  onReady: function () {},
                  onError: function () {},
                  onMissingVideoFrames: function () {},
                  onMissingAudioFrames: function () {},
                },
                e
              )),
              (i.env =
                "object" === (void 0 === r ? "undefined" : t(r)) &&
                "undefined" == typeof window
                  ? "node"
                  : "browser"),
              i.options.debug && ((b = console.log), (g = console.error)),
              i.options.fps || (i.options.fps = 30),
              (i.frameDuration = (1e3 / i.options.fps) | 0),
              (i.remuxController = new j(i.env)),
              i.remuxController.addTrack(i.options.mode),
              i.initData(),
              i.remuxController.on("buffer", i.onBuffer.bind(c(i))),
              "browser" == i.env &&
                (i.remuxController.on("ready", i.createBuffer.bind(c(i))),
                i.initBrowser()),
              i
            );
          }
          return (
            o(
              u,
              [
                {
                  key: "initData",
                  value: function () {
                    (this.lastCleaningTime = Date.now()),
                      (this.kfPosition = []),
                      (this.kfCounter = 0),
                      (this.pendingUnits = {}),
                      (this.remainingData = new Uint8Array()),
                      this.startInterval();
                  },
                },
                {
                  key: "initBrowser",
                  value: function () {
                    "string" == typeof this.options.node &&
                      "" == this.options.node &&
                      v(
                        "no video element were found to render, provide a valid video element"
                      ),
                      (this.node =
                        "string" == typeof this.options.node
                          ? document.getElementById(this.options.node)
                          : this.options.node),
                      (this.mseReady = !1),
                      this.setupMSE();
                  },
                },
                {
                  key: "createStream",
                  value: function () {
                    var t = this.feed.bind(this),
                      n = this.destroy.bind(this);
                    return (
                      (this.stream = new e.Duplex({
                        writableObjectMode: !0,
                        read: function (e) {},
                        write: function (e, n, r) {
                          t(e), r();
                        },
                        final: function (e) {
                          n(), e();
                        },
                      })),
                      this.stream
                    );
                  },
                },
                {
                  key: "setupMSE",
                  value: function () {
                    if (
                      ((window.MediaSource =
                        window.MediaSource || window.WebKitMediaSource),
                      !window.MediaSource)
                    )
                      throw "Oops! Browser does not support media source extension.";
                    (this.isMSESupported = !!window.MediaSource),
                      (this.mediaSource = new MediaSource()),
                      (this.url = URL.createObjectURL(this.mediaSource)),
                      (this.node.src = this.url),
                      (this.mseEnded = !1),
                      this.mediaSource.addEventListener(
                        "sourceopen",
                        this.onMSEOpen.bind(this)
                      ),
                      this.mediaSource.addEventListener(
                        "sourceclose",
                        this.onMSEClose.bind(this)
                      ),
                      this.mediaSource.addEventListener(
                        "webkitsourceopen",
                        this.onMSEOpen.bind(this)
                      ),
                      this.mediaSource.addEventListener(
                        "webkitsourceclose",
                        this.onMSEClose.bind(this)
                      );
                  },
                },
                {
                  key: "endMSE",
                  value: function () {
                    if (!this.mseEnded)
                      try {
                        (this.mseEnded = !0), this.mediaSource.endOfStream();
                      } catch (e) {
                        v("mediasource is not available to end");
                      }
                  },
                },
                {
                  key: "feed",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      i = !1,
                      o = { video: [], audio: [] };
                    if (e && this.remuxController) {
                      if (
                        ((r = e.duration ? parseInt(e.duration) : 0), e.video)
                      ) {
                        e.video = w(this.remainingData, e.video);
                        var a,
                          s =
                            (function (e) {
                              if (Array.isArray(e)) return e;
                            })((a = S.extractNALu(e.video))) ||
                            (function (e, t) {
                              var n =
                                null == e
                                  ? null
                                  : ("undefined" != typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                    e["@@iterator"];
                              if (null != n) {
                                var r,
                                  i,
                                  o = [],
                                  a = !0,
                                  s = !1;
                                try {
                                  for (
                                    n = n.call(e);
                                    !(a = (r = n.next()).done) &&
                                    (o.push(r.value), !t || o.length !== t);
                                    a = !0
                                  );
                                } catch (e) {
                                  (s = !0), (i = e);
                                } finally {
                                  try {
                                    a || null == n.return || n.return();
                                  } finally {
                                    if (s) throw i;
                                  }
                                }
                                return o;
                              }
                            })(a, 2) ||
                            d(a, 2) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                              );
                            })();
                        if (
                          ((t = s[0]),
                          (n = s[1]),
                          (this.remainingData = n || new Uint8Array()),
                          !(t.length > 0))
                        )
                          return (
                            v(
                              "Failed to extract any NAL units from video data:",
                              n
                            ),
                            void (
                              "function" ==
                                typeof this.options.onMissingVideoFrames &&
                              this.options.onMissingVideoFrames.call(null, e)
                            )
                          );
                        (o.video = this.getVideoFrames(
                          t,
                          r,
                          e.compositionTimeOffset
                        )),
                          (i = !0);
                      }
                      if (e.audio) {
                        if (
                          !(
                            (t = this.remuxController.aacParser.extractAAC(
                              e.audio
                            )).length > 0
                          )
                        )
                          return (
                            v("Failed to extract audio data from:", e.audio),
                            void (
                              "function" ==
                                typeof this.options.onMissingAudioFrames &&
                              this.options.onMissingAudioFrames.call(null, e)
                            )
                          );
                        (o.audio = this.getAudioFrames(t, r)), (i = !0);
                      }
                      i
                        ? this.remuxController.remux(o)
                        : v(
                            "Input object must have video and/or audio property. Make sure it is a valid typed array"
                          );
                    }
                  },
                },
                {
                  key: "getVideoFrames",
                  value: function (e, t, n) {
                    var r,
                      i = this,
                      o = [],
                      a = [],
                      s = 0,
                      u = !1,
                      l = !1;
                    this.pendingUnits.units &&
                      ((o = this.pendingUnits.units),
                      (l = this.pendingUnits.vcl),
                      (u = this.pendingUnits.keyFrame),
                      (this.pendingUnits = {}));
                    var c,
                      f = p(e);
                    try {
                      for (f.s(); !(c = f.n()).done; ) {
                        var d = c.value,
                          h = new m(d);
                        (h.type() !== m.IDR && h.type() !== m.NDR) ||
                          S.parseHeader(h),
                          o.length &&
                            l &&
                            (h.isfmb || !h.isvcl) &&
                            (a.push({ units: o, keyFrame: u }),
                            (o = []),
                            (u = !1),
                            (l = !1)),
                          o.push(h),
                          (u = u || h.isKeyframe()),
                          (l = l || h.isvcl);
                      }
                    } catch (e) {
                      f.e(e);
                    } finally {
                      f.f();
                    }
                    if (o.length) {
                      if (t) {
                        if (l) a.push({ units: o, keyFrame: u });
                        else {
                          var v = a.length - 1;
                          v >= 0 && (a[v].units = a[v].units.concat(o));
                        }
                      } else
                        this.pendingUnits = { units: o, keyFrame: u, vcl: l };
                    }
                    return (
                      (r = t ? (t / a.length) | 0 : this.frameDuration),
                      (s = t ? t - r * a.length : 0),
                      a.map(function (e) {
                        (e.duration = r),
                          (e.compositionTimeOffset = n),
                          s > 0 && (e.duration++, s--),
                          i.kfCounter++,
                          e.keyFrame &&
                            i.options.clearBuffer &&
                            i.kfPosition.push((i.kfCounter * r) / 1e3);
                      }),
                      y(
                        "jmuxer: No. of frames of the last chunk: ".concat(
                          a.length
                        )
                      ),
                      a
                    );
                  },
                },
                {
                  key: "getAudioFrames",
                  value: function (e, t) {
                    var n,
                      r,
                      i = [],
                      o = 0,
                      a = p(e);
                    try {
                      for (a.s(); !(r = a.n()).done; ) {
                        var s = r.value;
                        i.push({ units: s });
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                    return (
                      (n = t ? (t / i.length) | 0 : this.frameDuration),
                      (o = t ? t - n * i.length : 0),
                      i.map(function (e) {
                        (e.duration = n), o > 0 && (e.duration++, o--);
                      }),
                      i
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    if (
                      (this.stopInterval(),
                      this.stream &&
                        (this.remuxController.flush(),
                        this.stream.push(null),
                        (this.stream = null)),
                      this.remuxController &&
                        (this.remuxController.destroy(),
                        (this.remuxController = null)),
                      this.bufferControllers)
                    ) {
                      for (var e in this.bufferControllers)
                        this.bufferControllers[e].destroy();
                      (this.bufferControllers = null), this.endMSE();
                    }
                    (this.node = !1),
                      (this.mseReady = !1),
                      (this.videoStarted = !1),
                      (this.mediaSource = null);
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    if (
                      (this.stopInterval(),
                      (this.isReset = !0),
                      this.node.pause(),
                      this.remuxController && this.remuxController.reset(),
                      this.bufferControllers)
                    ) {
                      for (var e in this.bufferControllers)
                        this.bufferControllers[e].destroy();
                      (this.bufferControllers = null), this.endMSE();
                    }
                    this.initData(),
                      "browser" == this.env && this.initBrowser(),
                      y("JMuxer was reset");
                  },
                },
                {
                  key: "createBuffer",
                  value: function () {
                    if (
                      this.mseReady &&
                      this.remuxController &&
                      this.remuxController.isReady() &&
                      !this.bufferControllers
                    )
                      for (var e in ((this.bufferControllers = {}),
                      this.remuxController.tracks)) {
                        var t = this.remuxController.tracks[e];
                        if (
                          !u.isSupported(
                            ""
                              .concat(e, '/mp4; codecs="')
                              .concat(t.mp4track.codec, '"')
                          )
                        )
                          return v("Browser does not support codec"), !1;
                        var n = this.mediaSource.addSourceBuffer(
                          ""
                            .concat(e, '/mp4; codecs="')
                            .concat(t.mp4track.codec, '"')
                        );
                        (this.bufferControllers[e] = new C(n, e)),
                          this.bufferControllers[e].on(
                            "error",
                            this.onBufferError.bind(this)
                          );
                      }
                  },
                },
                {
                  key: "startInterval",
                  value: function () {
                    var e = this;
                    this.interval = setInterval(function () {
                      e.options.flushingTime
                        ? e.applyAndClearBuffer()
                        : e.bufferControllers && e.cancelDelay();
                    }, this.options.flushingTime || 1e3);
                  },
                },
                {
                  key: "stopInterval",
                  value: function () {
                    this.interval && clearInterval(this.interval);
                  },
                },
                {
                  key: "cancelDelay",
                  value: function () {
                    if (
                      this.node.buffered &&
                      this.node.buffered.length > 0 &&
                      !this.node.seeking
                    ) {
                      var e = this.node.buffered.end(0);
                      e - this.node.currentTime > this.options.maxDelay / 1e3 &&
                        (console.log("delay"),
                        (this.node.currentTime = e - 0.001));
                    }
                  },
                },
                {
                  key: "releaseBuffer",
                  value: function () {
                    for (var e in this.bufferControllers)
                      this.bufferControllers[e].doAppend();
                  },
                },
                {
                  key: "applyAndClearBuffer",
                  value: function () {
                    this.bufferControllers &&
                      (this.releaseBuffer(), this.clearBuffer());
                  },
                },
                {
                  key: "getSafeClearOffsetOfBuffer",
                  value: function (e) {
                    for (
                      var t,
                        n = ("audio" === this.options.mode && e) || 0,
                        r = 0;
                      r < this.kfPosition.length && !(this.kfPosition[r] >= e);
                      r++
                    )
                      t = this.kfPosition[r];
                    return (
                      t &&
                        (this.kfPosition = this.kfPosition.filter(function (e) {
                          return e < t && (n = e), e >= t;
                        })),
                      n
                    );
                  },
                },
                {
                  key: "clearBuffer",
                  value: function () {
                    if (
                      this.options.clearBuffer &&
                      Date.now() - this.lastCleaningTime > 1e4
                    ) {
                      for (var e in this.bufferControllers) {
                        var t = this.getSafeClearOffsetOfBuffer(
                          this.node.currentTime
                        );
                        this.bufferControllers[e].initCleanup(t);
                      }
                      this.lastCleaningTime = Date.now();
                    }
                  },
                },
                {
                  key: "onBuffer",
                  value: function (e) {
                    this.options.readFpsFromTrack &&
                      void 0 !== e.fps &&
                      this.options.fps != e.fps &&
                      ((this.options.fps = e.fps),
                      (this.frameDuration = Math.ceil(1e3 / e.fps)),
                      y(
                        "JMuxer changed FPS to ".concat(
                          e.fps,
                          " from track data"
                        )
                      )),
                      "browser" == this.env
                        ? this.bufferControllers &&
                          this.bufferControllers[e.type] &&
                          this.bufferControllers[e.type].feed(e.payload)
                        : this.stream && this.stream.push(e.payload),
                      0 === this.options.flushingTime &&
                        this.applyAndClearBuffer();
                  },
                },
                {
                  key: "onMSEOpen",
                  value: function () {
                    (this.mseReady = !0),
                      URL.revokeObjectURL(this.url),
                      "function" == typeof this.options.onReady &&
                        this.options.onReady.call(null, this.isReset);
                  },
                },
                {
                  key: "onMSEClose",
                  value: function () {
                    (this.mseReady = !1), (this.videoStarted = !1);
                  },
                },
                {
                  key: "onBufferError",
                  value: function (e) {
                    if ("QuotaExceeded" == e.name)
                      return (
                        y(
                          "JMuxer cleaning ".concat(
                            e.type,
                            " buffer due to QuotaExceeded error"
                          )
                        ),
                        void this.bufferControllers[e.type].initCleanup(
                          this.node.currentTime
                        )
                      );
                    "InvalidStateError" == e.name
                      ? (y("JMuxer is reseting due to InvalidStateError"),
                        this.reset())
                      : this.endMSE(),
                      "function" == typeof this.options.onError &&
                        this.options.onError.call(null, e);
                  },
                },
              ],
              [
                {
                  key: "isSupported",
                  value: function (e) {
                    return (
                      window.MediaSource &&
                      window.MediaSource.isTypeSupported(e)
                    );
                  },
                },
              ]
            ),
            u
          );
        })(E);
      })(n(4957));
    },
    52033: function (e, t, n) {
      var r = n(26194),
        i = n(26789)(r);
      e.exports = i;
    },
    10228: function (e, t, n) {
      var r = n(79867),
        i = n(78859),
        o = n(76747);
      e.exports = function (e, t, n) {
        for (var a = -1, s = t.length, u = {}; ++a < s; ) {
          var l = t[a],
            c = r(e, l);
          n(c, l) && i(u, o(l, e), c);
        }
        return u;
      };
    },
    19356: function (e) {
      e.exports = function (e, t, n, r, i) {
        return (
          i(e, function (e, i, o) {
            n = r ? ((r = !1), e) : t(n, e, i, o);
          }),
          n
        );
      };
    },
    78859: function (e, t, n) {
      var r = n(71928),
        i = n(76747),
        o = n(42383),
        a = n(11611),
        s = n(37948);
      e.exports = function (e, t, n, u) {
        if (!a(e)) return e;
        t = i(t, e);
        for (
          var l = -1, c = t.length, f = c - 1, d = e;
          null != d && ++l < c;

        ) {
          var h = s(t[l]),
            p = n;
          if ("__proto__" === h || "constructor" === h || "prototype" === h)
            break;
          if (l != f) {
            var y = d[h];
            void 0 === (p = u ? u(y, h, d) : void 0) &&
              (p = a(y) ? y : o(t[l + 1]) ? [] : {});
          }
          r(d, h, p), (d = d[h]);
        }
        return e;
      };
    },
    26789: function (e, t, n) {
      var r = n(80068);
      e.exports = function (e, t) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return e(n, i);
          for (
            var o = n.length, a = t ? o : -1, s = Object(n);
            (t ? a-- : ++a < o) && !1 !== i(s[a], a, s);

          );
          return n;
        };
      };
    },
    39759: function (e, t, n) {
      var r = n(11324),
        i = n(30791),
        o = n(53893);
      e.exports = function (e) {
        return r(e, o, i);
      };
    },
    30791: function (e, t, n) {
      var r = n(97141),
        i = n(2173),
        o = n(83080),
        a = n(15937),
        s = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) r(t, o(e)), (e = i(e));
              return t;
            }
          : a;
      e.exports = s;
    },
    92465: function (e) {
      e.exports = function (e) {
        return void 0 === e;
      };
    },
    9799: function (e) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError("Expected a function");
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      };
    },
    15539: function (e, t, n) {
      var r = n(89278),
        i = n(9799),
        o = n(71975);
      e.exports = function (e, t) {
        return o(e, i(r(t)));
      };
    },
    71975: function (e, t, n) {
      var r = n(66070),
        i = n(89278),
        o = n(10228),
        a = n(39759);
      e.exports = function (e, t) {
        if (null == e) return {};
        var n = r(a(e), function (e) {
          return [e];
        });
        return (
          (t = i(t)),
          o(e, n, function (e, n) {
            return t(e, n[0]);
          })
        );
      };
    },
    34172: function (e, t, n) {
      var r = n(6446),
        i = n(52033),
        o = n(89278),
        a = n(19356),
        s = n(19785);
      e.exports = function (e, t, n) {
        var u = s(e) ? r : a,
          l = arguments.length < 3;
        return u(e, o(t, 4), n, l, i);
      };
    },
    37131: function (e, t, n) {
      !(function () {
        var t = {
            452: function (e) {
              "use strict";
              e.exports = n(64927);
            },
          },
          r = {};
        function i(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, i), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        i.ab = "//";
        var o = {};
        !(function () {
          var e,
            t = o,
            n =
              (e = i(452)) && "object" == typeof e && "default" in e
                ? e.default
                : e,
            r = /https?|ftp|gopher|file/;
          function a(e) {
            "string" == typeof e && (e = g(e));
            var t,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              d =
                ((i = (t = e).auth),
                (o = t.hostname),
                (a = t.protocol || ""),
                (s = t.pathname || ""),
                (u = t.hash || ""),
                (l = t.query || ""),
                (c = !1),
                (i = i ? encodeURIComponent(i).replace(/%3A/i, ":") + "@" : ""),
                t.host
                  ? (c = i + t.host)
                  : o &&
                    ((c = i + (~o.indexOf(":") ? "[" + o + "]" : o)),
                    t.port && (c += ":" + t.port)),
                l && "object" == typeof l && (l = n.encode(l)),
                (f = t.search || (l && "?" + l) || ""),
                a && ":" !== a.substr(-1) && (a += ":"),
                t.slashes || ((!a || r.test(a)) && !1 !== c)
                  ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
                  : c || (c = ""),
                u && "#" !== u[0] && (u = "#" + u),
                f && "?" !== f[0] && (f = "?" + f),
                {
                  protocol: a,
                  host: c,
                  pathname: (s = s.replace(/[?#]/g, encodeURIComponent)),
                  search: (f = f.replace("#", "%23")),
                  hash: u,
                });
            return "" + d.protocol + d.host + d.pathname + d.search + d.hash;
          }
          var s = "http://",
            u = s + "w.w",
            l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            c = /https?|ftp|gopher|file/;
          function f(e, t) {
            var n = "string" == typeof e ? g(e) : e;
            e = "object" == typeof e ? a(e) : e;
            var r = g(t),
              i = "";
            n.protocol &&
              !n.slashes &&
              ((i = n.protocol),
              (e = e.replace(n.protocol, "")),
              (i += "/" === t[0] || "/" === e[0] ? "/" : "")),
              i &&
                r.protocol &&
                ((i = ""),
                r.slashes ||
                  ((i = r.protocol), (t = t.replace(r.protocol, ""))));
            var o = e.match(l);
            o &&
              !r.protocol &&
              ((e = e.substr((i = o[1] + (o[2] || "")).length)),
              /^\/\/[^/]/.test(t) && (i = i.slice(0, -1)));
            var f = new URL(e, u + "/"),
              d = new URL(t, f).toString().replace(u, ""),
              h = r.protocol || n.protocol;
            return (
              (h += n.slashes || r.slashes ? "//" : ""),
              !i && h ? (d = d.replace(s, h)) : i && (d = d.replace(s, "")),
              c.test(d) ||
                ~t.indexOf(".") ||
                "/" === e.slice(-1) ||
                "/" === t.slice(-1) ||
                "/" !== d.slice(-1) ||
                (d = d.slice(0, -1)),
              i && (d = i + ("/" === d[0] ? d.substr(1) : d)),
              d
            );
          }
          function d() {}
          (d.prototype.parse = g),
            (d.prototype.format = a),
            (d.prototype.resolve = f),
            (d.prototype.resolveObject = f);
          var h = /^https?|ftp|gopher|file/,
            p = /^(.*?)([#?].*)/,
            y = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            v = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function g(e, t, r) {
            if (
              (void 0 === t && (t = !1),
              void 0 === r && (r = !1),
              e && "object" == typeof e && e instanceof d)
            )
              return e;
            var i = (e = e.trim()).match(p);
            (e = i ? i[1].replace(/\\/g, "/") + i[2] : e.replace(/\\/g, "/")),
              b.test(e) && "/" !== e.slice(-1) && (e += "/");
            var o = !/(^javascript)/.test(e) && e.match(y),
              s = v.test(e),
              l = "";
            o &&
              (h.test(o[1]) ||
                ((l = o[1].toLowerCase()), (e = "" + o[2] + o[3])),
              o[2] ||
                ((s = !1),
                h.test(o[1])
                  ? ((l = o[1]), (e = "" + o[3]))
                  : (e = "//" + o[3])),
              (3 !== o[2].length && 1 !== o[2].length) ||
                ((l = o[1]), (e = "/" + o[3])));
            var c,
              f = (i ? i[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
              g = f && f[1],
              m = new d(),
              w = "",
              k = "";
            try {
              c = new URL(e);
            } catch (t) {
              (w = t),
                l ||
                  r ||
                  !/^\/\//.test(e) ||
                  /^\/\/.+[@.]/.test(e) ||
                  ((k = "/"), (e = e.substr(1)));
              try {
                c = new URL(e, u);
              } catch (e) {
                return (m.protocol = l), (m.href = l), m;
              }
            }
            (m.slashes = s && !k),
              (m.host = "w.w" === c.host ? "" : c.host),
              (m.hostname =
                "w.w" === c.hostname ? "" : c.hostname.replace(/(\[|\])/g, "")),
              (m.protocol = w ? l || null : c.protocol),
              (m.search = c.search.replace(/\\/g, "%5C")),
              (m.hash = c.hash.replace(/\\/g, "%5C"));
            var S = e.split("#");
            !m.search && ~S[0].indexOf("?") && (m.search = "?"),
              m.hash || "" !== S[1] || (m.hash = "#"),
              (m.query = t ? n.decode(c.search.substr(1)) : m.search.substr(1)),
              (m.pathname =
                k +
                (o
                  ? c.pathname
                      .replace(/['^|`]/g, function (e) {
                        return "%" + e.charCodeAt().toString(16).toUpperCase();
                      })
                      .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                        try {
                          return decodeURIComponent(t)
                            .split("")
                            .map(function (e) {
                              var t = e.charCodeAt();
                              return t > 256 || /^[a-z0-9]$/i.test(e)
                                ? e
                                : "%" + t.toString(16).toUpperCase();
                            })
                            .join("");
                        } catch (e) {
                          return t;
                        }
                      })
                  : c.pathname)),
              "about:" === m.protocol &&
                "blank" === m.pathname &&
                ((m.protocol = ""), (m.pathname = "")),
              w && "/" !== e[0] && (m.pathname = m.pathname.substr(1)),
              l &&
                !h.test(l) &&
                "/" !== e.slice(-1) &&
                "/" === m.pathname &&
                (m.pathname = ""),
              (m.path = m.pathname + m.search),
              (m.auth = [c.username, c.password]
                .map(decodeURIComponent)
                .filter(Boolean)
                .join(":")),
              (m.port = c.port),
              g &&
                !m.host.endsWith(g) &&
                ((m.host += g), (m.port = g.slice(1))),
              (m.href = k ? "" + m.pathname + m.search + m.hash : a(m));
            var _ = /^(file)/.test(m.href) ? ["host", "hostname"] : [];
            return (
              Object.keys(m).forEach(function (e) {
                ~_.indexOf(e) || (m[e] = m[e] || null);
              }),
              m
            );
          }
          (t.parse = g),
            (t.format = a),
            (t.resolve = f),
            (t.resolveObject = function (e, t) {
              return g(f(e, t));
            }),
            (t.Url = d);
        })(),
          (e.exports = o);
      })();
    },
    64927: function (e) {
      !(function () {
        "use strict";
        var t,
          n = {
            815: function (e) {
              e.exports = function (e, n, r, i) {
                (n = n || "&"), (r = r || "=");
                var o = {};
                if ("string" != typeof e || 0 === e.length) return o;
                var a = /\+/g;
                e = e.split(n);
                var s = 1e3;
                i && "number" == typeof i.maxKeys && (s = i.maxKeys);
                var u = e.length;
                s > 0 && u > s && (u = s);
                for (var l = 0; l < u; ++l) {
                  var c,
                    f,
                    d,
                    h,
                    p = e[l].replace(a, "%20"),
                    y = p.indexOf(r);
                  (y >= 0
                    ? ((c = p.substr(0, y)), (f = p.substr(y + 1)))
                    : ((c = p), (f = "")),
                  (d = decodeURIComponent(c)),
                  (h = decodeURIComponent(f)),
                  Object.prototype.hasOwnProperty.call(o, d))
                    ? t(o[d])
                      ? o[d].push(h)
                      : (o[d] = [o[d], h])
                    : (o[d] = h);
                }
                return o;
              };
              var t =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
            },
            577: function (e) {
              var t = function (e) {
                switch (typeof e) {
                  case "string":
                    return e;
                  case "boolean":
                    return e ? "true" : "false";
                  case "number":
                    return isFinite(e) ? e : "";
                  default:
                    return "";
                }
              };
              e.exports = function (e, o, a, s) {
                return ((o = o || "&"),
                (a = a || "="),
                null === e && (e = void 0),
                "object" == typeof e)
                  ? r(i(e), function (i) {
                      var s = encodeURIComponent(t(i)) + a;
                      return n(e[i])
                        ? r(e[i], function (e) {
                            return s + encodeURIComponent(t(e));
                          }).join(o)
                        : s + encodeURIComponent(t(e[i]));
                    }).join(o)
                  : s
                  ? encodeURIComponent(t(s)) + a + encodeURIComponent(t(e))
                  : "";
              };
              var n =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
              function r(e, t) {
                if (e.map) return e.map(t);
                for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n;
              }
              var i =
                Object.keys ||
                function (e) {
                  var t = [];
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                  return t;
                };
            },
          },
          r = {};
        function i(e) {
          var t = r[e];
          if (void 0 !== t) return t.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            n[e](o, o.exports, i), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        i.ab = "//";
        var o = {};
        ((t = o).decode = t.parse = i(815)),
          (t.encode = t.stringify = i(577)),
          (e.exports = o);
      })();
    },
    4957: function (e, t, n) {
      var r = n(27061);
      !(function () {
        var t = {
            782: function (e) {
              "function" == typeof Object.create
                ? (e.exports = function (e, t) {
                    t &&
                      ((e.super_ = t),
                      (e.prototype = Object.create(t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })));
                  })
                : (e.exports = function (e, t) {
                    if (t) {
                      e.super_ = t;
                      var n = function () {};
                      (n.prototype = t.prototype),
                        (e.prototype = new n()),
                        (e.prototype.constructor = e);
                    }
                  });
            },
            646: function (e) {
              "use strict";
              let t = {};
              function n(e, n, r) {
                r || (r = Error);
                class i extends r {
                  constructor(e, t, r) {
                    super("string" == typeof n ? n : n(e, t, r));
                  }
                }
                (i.prototype.name = r.name), (i.prototype.code = e), (t[e] = i);
              }
              function r(e, t) {
                if (!Array.isArray(e)) return `of ${t} ${String(e)}`;
                {
                  let n = e.length;
                  return ((e = e.map((e) => String(e))), n > 2)
                    ? `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ` +
                        e[n - 1]
                    : 2 === n
                    ? `one of ${t} ${e[0]} or ${e[1]}`
                    : `of ${t} ${e[0]}`;
                }
              }
              n(
                "ERR_INVALID_OPT_VALUE",
                function (e, t) {
                  return (
                    'The value "' + t + '" is invalid for option "' + e + '"'
                  );
                },
                TypeError
              ),
                n(
                  "ERR_INVALID_ARG_TYPE",
                  function (e, t, n) {
                    var i, o, a, s, u;
                    let l, c;
                    if (
                      ("string" == typeof t &&
                      ((i = "not "),
                      t.substr(!o || o < 0 ? 0 : +o, i.length) === i)
                        ? ((l = "must not be"), (t = t.replace(/^not /, "")))
                        : (l = "must be"),
                      (a = " argument"),
                      (void 0 === s || s > e.length) && (s = e.length),
                      e.substring(s - a.length, s) === a)
                    )
                      c = `The ${e} ${l} ${r(t, "type")}`;
                    else {
                      let n = ("number" != typeof u && (u = 0),
                      u + 1 > e.length || -1 === e.indexOf(".", u))
                        ? "argument"
                        : "property";
                      c = `The "${e}" ${n} ${l} ${r(t, "type")}`;
                    }
                    return c + `. Received type ${typeof n}`;
                  },
                  TypeError
                ),
                n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
                n("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
                  return "The " + e + " method is not implemented";
                }),
                n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
                n("ERR_STREAM_DESTROYED", function (e) {
                  return "Cannot call " + e + " after a stream was destroyed";
                }),
                n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
                n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
                n("ERR_STREAM_WRITE_AFTER_END", "write after end"),
                n(
                  "ERR_STREAM_NULL_VALUES",
                  "May not write null values to stream",
                  TypeError
                ),
                n(
                  "ERR_UNKNOWN_ENCODING",
                  function (e) {
                    return "Unknown encoding: " + e;
                  },
                  TypeError
                ),
                n(
                  "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
                  "stream.unshift() after end event"
                ),
                (e.exports.q = t);
            },
            403: function (e, t, n) {
              "use strict";
              var i =
                Object.keys ||
                function (e) {
                  var t = [];
                  for (var n in e) t.push(n);
                  return t;
                };
              e.exports = c;
              var o = n(709),
                a = n(337);
              n(782)(c, o);
              for (var s = i(a.prototype), u = 0; u < s.length; u++) {
                var l = s[u];
                c.prototype[l] || (c.prototype[l] = a.prototype[l]);
              }
              function c(e) {
                if (!(this instanceof c)) return new c(e);
                o.call(this, e),
                  a.call(this, e),
                  (this.allowHalfOpen = !0),
                  e &&
                    (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen &&
                      ((this.allowHalfOpen = !1), this.once("end", f)));
              }
              function f() {
                this._writableState.ended || r.nextTick(d, this);
              }
              function d(e) {
                e.end();
              }
              Object.defineProperty(c.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function () {
                  return this._writableState.highWaterMark;
                },
              }),
                Object.defineProperty(c.prototype, "writableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(c.prototype, "writableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(c.prototype, "destroyed", {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      this._readableState.destroyed &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (e) {
                    void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      ((this._readableState.destroyed = e),
                      (this._writableState.destroyed = e));
                  },
                });
            },
            889: function (e, t, n) {
              "use strict";
              e.exports = i;
              var r = n(170);
              function i(e) {
                if (!(this instanceof i)) return new i(e);
                r.call(this, e);
              }
              n(782)(i, r),
                (i.prototype._transform = function (e, t, n) {
                  n(null, e);
                });
            },
            709: function (e, t, i) {
              "use strict";
              (e.exports = O), (O.ReadableState = x), i(361).EventEmitter;
              var o,
                a,
                s,
                u,
                l,
                c = function (e, t) {
                  return e.listeners(t).length;
                },
                f = i(678),
                d = i(300).Buffer,
                h = n.g.Uint8Array || function () {},
                p = i(837);
              a = p && p.debuglog ? p.debuglog("stream") : function () {};
              var y = i(379),
                v = i(25),
                b = i(776).getHighWaterMark,
                g = i(646).q,
                m = g.ERR_INVALID_ARG_TYPE,
                w = g.ERR_STREAM_PUSH_AFTER_EOF,
                k = g.ERR_METHOD_NOT_IMPLEMENTED,
                S = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
              i(782)(O, f);
              var _ = v.errorOrDestroy,
                E = ["error", "close", "destroy", "pause", "resume"];
              function x(e, t, n) {
                (o = o || i(403)),
                  (e = e || {}),
                  "boolean" != typeof n && (n = t instanceof o),
                  (this.objectMode = !!e.objectMode),
                  n &&
                    (this.objectMode =
                      this.objectMode || !!e.readableObjectMode),
                  (this.highWaterMark = b(this, e, "readableHighWaterMark", n)),
                  (this.buffer = new y()),
                  (this.length = 0),
                  (this.pipes = null),
                  (this.pipesCount = 0),
                  (this.flowing = null),
                  (this.ended = !1),
                  (this.endEmitted = !1),
                  (this.reading = !1),
                  (this.sync = !0),
                  (this.needReadable = !1),
                  (this.emittedReadable = !1),
                  (this.readableListening = !1),
                  (this.resumeScheduled = !1),
                  (this.paused = !0),
                  (this.emitClose = !1 !== e.emitClose),
                  (this.autoDestroy = !!e.autoDestroy),
                  (this.destroyed = !1),
                  (this.defaultEncoding = e.defaultEncoding || "utf8"),
                  (this.awaitDrain = 0),
                  (this.readingMore = !1),
                  (this.decoder = null),
                  (this.encoding = null),
                  e.encoding &&
                    (s || (s = i(704).s),
                    (this.decoder = new s(e.encoding)),
                    (this.encoding = e.encoding));
              }
              function O(e) {
                if (((o = o || i(403)), !(this instanceof O))) return new O(e);
                var t = this instanceof o;
                (this._readableState = new x(e, this, t)),
                  (this.readable = !0),
                  e &&
                    ("function" == typeof e.read && (this._read = e.read),
                    "function" == typeof e.destroy &&
                      (this._destroy = e.destroy)),
                  f.call(this);
              }
              function A(e, t, n, r, i) {
                a("readableAddChunk", t);
                var o,
                  s,
                  u,
                  l,
                  c,
                  f = e._readableState;
                if (null === t)
                  (f.reading = !1),
                    (function (e, t) {
                      if ((a("onEofChunk"), !t.ended)) {
                        if (t.decoder) {
                          var n = t.decoder.end();
                          n &&
                            n.length &&
                            (t.buffer.push(n),
                            (t.length += t.objectMode ? 1 : n.length));
                        }
                        (t.ended = !0),
                          t.sync
                            ? j(e)
                            : ((t.needReadable = !1),
                              t.emittedReadable ||
                                ((t.emittedReadable = !0), C(e)));
                      }
                    })(e, f);
                else {
                  if (
                    (i ||
                      ((o = f),
                      (s = t),
                      d.isBuffer(s) ||
                        s instanceof h ||
                        "string" == typeof s ||
                        void 0 === s ||
                        o.objectMode ||
                        (u = new m(
                          "chunk",
                          ["string", "Buffer", "Uint8Array"],
                          s
                        )),
                      (c = u)),
                    c)
                  )
                    _(e, c);
                  else if (f.objectMode || (t && t.length > 0)) {
                    if (
                      ("string" == typeof t ||
                        f.objectMode ||
                        Object.getPrototypeOf(t) === d.prototype ||
                        ((l = t), (t = d.from(l))),
                      r)
                    )
                      f.endEmitted ? _(e, new S()) : R(e, f, t, !0);
                    else if (f.ended) _(e, new w());
                    else {
                      if (f.destroyed) return !1;
                      (f.reading = !1),
                        f.decoder && !n
                          ? ((t = f.decoder.write(t)),
                            f.objectMode || 0 !== t.length
                              ? R(e, f, t, !1)
                              : P(e, f))
                          : R(e, f, t, !1);
                    }
                  } else r || ((f.reading = !1), P(e, f));
                }
                return (
                  !f.ended && (f.length < f.highWaterMark || 0 === f.length)
                );
              }
              function R(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync
                  ? ((t.awaitDrain = 0), e.emit("data", n))
                  : ((t.length += t.objectMode ? 1 : n.length),
                    r ? t.buffer.unshift(n) : t.buffer.push(n),
                    t.needReadable && j(e)),
                  P(e, t);
              }
              function T(e, t) {
                if (e <= 0 || (0 === t.length && t.ended)) return 0;
                if (t.objectMode) return 1;
                if (e != e)
                  return t.flowing && t.length
                    ? t.buffer.head.data.length
                    : t.length;
                if (e > t.highWaterMark) {
                  var n;
                  t.highWaterMark =
                    ((n = e) >= 1073741824
                      ? (n = 1073741824)
                      : (n--,
                        (n |= n >>> 1),
                        (n |= n >>> 2),
                        (n |= n >>> 4),
                        (n |= n >>> 8),
                        (n |= n >>> 16),
                        n++),
                    n);
                }
                return e <= t.length
                  ? e
                  : t.ended
                  ? t.length
                  : ((t.needReadable = !0), 0);
              }
              function j(e) {
                var t = e._readableState;
                a("emitReadable", t.needReadable, t.emittedReadable),
                  (t.needReadable = !1),
                  t.emittedReadable ||
                    (a("emitReadable", t.flowing),
                    (t.emittedReadable = !0),
                    r.nextTick(C, e));
              }
              function C(e) {
                var t = e._readableState;
                a("emitReadable_", t.destroyed, t.length, t.ended),
                  !t.destroyed &&
                    (t.length || t.ended) &&
                    (e.emit("readable"), (t.emittedReadable = !1)),
                  (t.needReadable =
                    !t.flowing && !t.ended && t.length <= t.highWaterMark),
                  B(e);
              }
              function P(e, t) {
                t.readingMore || ((t.readingMore = !0), r.nextTick(M, e, t));
              }
              function M(e, t) {
                for (
                  ;
                  !t.reading &&
                  !t.ended &&
                  (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

                ) {
                  var n = t.length;
                  if ((a("maybeReadMore read 0"), e.read(0), n === t.length))
                    break;
                }
                t.readingMore = !1;
              }
              function L(e) {
                var t = e._readableState;
                (t.readableListening = e.listenerCount("readable") > 0),
                  t.resumeScheduled && !t.paused
                    ? (t.flowing = !0)
                    : e.listenerCount("data") > 0 && e.resume();
              }
              function U(e) {
                a("readable nexttick read 0"), e.read(0);
              }
              function D(e, t) {
                a("resume", t.reading),
                  t.reading || e.read(0),
                  (t.resumeScheduled = !1),
                  e.emit("resume"),
                  B(e),
                  t.flowing && !t.reading && e.read(0);
              }
              function B(e) {
                var t = e._readableState;
                for (a("flow", t.flowing); t.flowing && null !== e.read(); );
              }
              function N(e, t) {
                var n;
                return 0 === t.length
                  ? null
                  : (t.objectMode
                      ? (n = t.buffer.shift())
                      : !e || e >= t.length
                      ? ((n = t.decoder
                          ? t.buffer.join("")
                          : 1 === t.buffer.length
                          ? t.buffer.first()
                          : t.buffer.concat(t.length)),
                        t.buffer.clear())
                      : (n = t.buffer.consume(e, t.decoder)),
                    n);
              }
              function I(e) {
                var t = e._readableState;
                a("endReadable", t.endEmitted),
                  t.endEmitted || ((t.ended = !0), r.nextTick(F, t, e));
              }
              function F(e, t) {
                if (
                  (a("endReadableNT", e.endEmitted, e.length),
                  !e.endEmitted &&
                    0 === e.length &&
                    ((e.endEmitted = !0),
                    (t.readable = !1),
                    t.emit("end"),
                    e.autoDestroy))
                ) {
                  var n = t._writableState;
                  (!n || (n.autoDestroy && n.finished)) && t.destroy();
                }
              }
              function W(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              }
              Object.defineProperty(O.prototype, "destroyed", {
                enumerable: !1,
                get: function () {
                  return (
                    void 0 !== this._readableState &&
                    this._readableState.destroyed
                  );
                },
                set: function (e) {
                  this._readableState && (this._readableState.destroyed = e);
                },
              }),
                (O.prototype.destroy = v.destroy),
                (O.prototype._undestroy = v.undestroy),
                (O.prototype._destroy = function (e, t) {
                  t(e);
                }),
                (O.prototype.push = function (e, t) {
                  var n,
                    r = this._readableState;
                  return (
                    r.objectMode
                      ? (n = !0)
                      : "string" == typeof e &&
                        ((t = t || r.defaultEncoding) !== r.encoding &&
                          ((e = d.from(e, t)), (t = "")),
                        (n = !0)),
                    A(this, e, t, !1, n)
                  );
                }),
                (O.prototype.unshift = function (e) {
                  return A(this, e, null, !0, !1);
                }),
                (O.prototype.isPaused = function () {
                  return !1 === this._readableState.flowing;
                }),
                (O.prototype.setEncoding = function (e) {
                  s || (s = i(704).s);
                  var t = new s(e);
                  (this._readableState.decoder = t),
                    (this._readableState.encoding =
                      this._readableState.decoder.encoding);
                  for (
                    var n = this._readableState.buffer.head, r = "";
                    null !== n;

                  )
                    (r += t.write(n.data)), (n = n.next);
                  return (
                    this._readableState.buffer.clear(),
                    "" !== r && this._readableState.buffer.push(r),
                    (this._readableState.length = r.length),
                    this
                  );
                }),
                (O.prototype.read = function (e) {
                  a("read", e), (e = parseInt(e, 10));
                  var t,
                    n = this._readableState,
                    r = e;
                  if (
                    (0 !== e && (n.emittedReadable = !1),
                    0 === e &&
                      n.needReadable &&
                      ((0 !== n.highWaterMark
                        ? n.length >= n.highWaterMark
                        : n.length > 0) ||
                        n.ended))
                  )
                    return (
                      a("read: emitReadable", n.length, n.ended),
                      0 === n.length && n.ended ? I(this) : j(this),
                      null
                    );
                  if (0 === (e = T(e, n)) && n.ended)
                    return 0 === n.length && I(this), null;
                  var i = n.needReadable;
                  return (
                    a("need readable", i),
                    (0 === n.length || n.length - e < n.highWaterMark) &&
                      a("length less than watermark", (i = !0)),
                    n.ended || n.reading
                      ? a("reading or ended", (i = !1))
                      : i &&
                        (a("do read"),
                        (n.reading = !0),
                        (n.sync = !0),
                        0 === n.length && (n.needReadable = !0),
                        this._read(n.highWaterMark),
                        (n.sync = !1),
                        n.reading || (e = T(r, n))),
                    null === (t = e > 0 ? N(e, n) : null)
                      ? ((n.needReadable = n.length <= n.highWaterMark),
                        (e = 0))
                      : ((n.length -= e), (n.awaitDrain = 0)),
                    0 === n.length &&
                      (n.ended || (n.needReadable = !0),
                      r !== e && n.ended && I(this)),
                    null !== t && this.emit("data", t),
                    t
                  );
                }),
                (O.prototype._read = function (e) {
                  _(this, new k("_read()"));
                }),
                (O.prototype.pipe = function (e, t) {
                  var n = this,
                    i = this._readableState;
                  switch (i.pipesCount) {
                    case 0:
                      i.pipes = e;
                      break;
                    case 1:
                      i.pipes = [i.pipes, e];
                      break;
                    default:
                      i.pipes.push(e);
                  }
                  (i.pipesCount += 1),
                    a("pipe count=%d opts=%j", i.pipesCount, t);
                  var o =
                    (t && !1 === t.end) || e === r.stdout || e === r.stderr
                      ? y
                      : s;
                  function s() {
                    a("onend"), e.end();
                  }
                  i.endEmitted ? r.nextTick(o) : n.once("end", o),
                    e.on("unpipe", function t(r, o) {
                      a("onunpipe"),
                        r === n &&
                          o &&
                          !1 === o.hasUnpiped &&
                          ((o.hasUnpiped = !0),
                          a("cleanup"),
                          e.removeListener("close", h),
                          e.removeListener("finish", p),
                          e.removeListener("drain", u),
                          e.removeListener("error", d),
                          e.removeListener("unpipe", t),
                          n.removeListener("end", s),
                          n.removeListener("end", y),
                          n.removeListener("data", f),
                          (l = !0),
                          i.awaitDrain &&
                            (!e._writableState || e._writableState.needDrain) &&
                            u());
                    });
                  var u = function () {
                    var e = n._readableState;
                    a("pipeOnDrain", e.awaitDrain),
                      e.awaitDrain && e.awaitDrain--,
                      0 === e.awaitDrain &&
                        c(n, "data") &&
                        ((e.flowing = !0), B(n));
                  };
                  e.on("drain", u);
                  var l = !1;
                  function f(t) {
                    a("ondata");
                    var r = e.write(t);
                    a("dest.write", r),
                      !1 === r &&
                        (((1 === i.pipesCount && i.pipes === e) ||
                          (i.pipesCount > 1 && -1 !== W(i.pipes, e))) &&
                          !l &&
                          (a("false write response, pause", i.awaitDrain),
                          i.awaitDrain++),
                        n.pause());
                  }
                  function d(t) {
                    a("onerror", t),
                      y(),
                      e.removeListener("error", d),
                      0 === c(e, "error") && _(e, t);
                  }
                  function h() {
                    e.removeListener("finish", p), y();
                  }
                  function p() {
                    a("onfinish"), e.removeListener("close", h), y();
                  }
                  function y() {
                    a("unpipe"), n.unpipe(e);
                  }
                  return (
                    n.on("data", f),
                    (function (e, t, n) {
                      if ("function" == typeof e.prependListener)
                        return e.prependListener(t, n);
                      e._events && e._events[t]
                        ? Array.isArray(e._events[t])
                          ? e._events[t].unshift(n)
                          : (e._events[t] = [n, e._events[t]])
                        : e.on(t, n);
                    })(e, "error", d),
                    e.once("close", h),
                    e.once("finish", p),
                    e.emit("pipe", n),
                    i.flowing || (a("pipe resume"), n.resume()),
                    e
                  );
                }),
                (O.prototype.unpipe = function (e) {
                  var t = this._readableState,
                    n = { hasUnpiped: !1 };
                  if (0 === t.pipesCount) return this;
                  if (1 === t.pipesCount)
                    return (
                      (e && e !== t.pipes) ||
                        (e || (e = t.pipes),
                        (t.pipes = null),
                        (t.pipesCount = 0),
                        (t.flowing = !1),
                        e && e.emit("unpipe", this, n)),
                      this
                    );
                  if (!e) {
                    var r = t.pipes,
                      i = t.pipesCount;
                    (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                    for (var o = 0; o < i; o++)
                      r[o].emit("unpipe", this, { hasUnpiped: !1 });
                    return this;
                  }
                  var a = W(t.pipes, e);
                  return (
                    -1 === a ||
                      (t.pipes.splice(a, 1),
                      (t.pipesCount -= 1),
                      1 === t.pipesCount && (t.pipes = t.pipes[0]),
                      e.emit("unpipe", this, n)),
                    this
                  );
                }),
                (O.prototype.on = function (e, t) {
                  var n = f.prototype.on.call(this, e, t),
                    i = this._readableState;
                  return (
                    "data" === e
                      ? ((i.readableListening =
                          this.listenerCount("readable") > 0),
                        !1 !== i.flowing && this.resume())
                      : "readable" !== e ||
                        i.endEmitted ||
                        i.readableListening ||
                        ((i.readableListening = i.needReadable = !0),
                        (i.flowing = !1),
                        (i.emittedReadable = !1),
                        a("on readable", i.length, i.reading),
                        i.length ? j(this) : i.reading || r.nextTick(U, this)),
                    n
                  );
                }),
                (O.prototype.addListener = O.prototype.on),
                (O.prototype.removeListener = function (e, t) {
                  var n = f.prototype.removeListener.call(this, e, t);
                  return "readable" === e && r.nextTick(L, this), n;
                }),
                (O.prototype.removeAllListeners = function (e) {
                  var t = f.prototype.removeAllListeners.apply(this, arguments);
                  return (
                    ("readable" === e || void 0 === e) && r.nextTick(L, this), t
                  );
                }),
                (O.prototype.resume = function () {
                  var e,
                    t = this._readableState;
                  return (
                    t.flowing ||
                      (a("resume"),
                      (t.flowing = !t.readableListening),
                      (e = t).resumeScheduled ||
                        ((e.resumeScheduled = !0), r.nextTick(D, this, e))),
                    (t.paused = !1),
                    this
                  );
                }),
                (O.prototype.pause = function () {
                  return (
                    a("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing &&
                      (a("pause"),
                      (this._readableState.flowing = !1),
                      this.emit("pause")),
                    (this._readableState.paused = !0),
                    this
                  );
                }),
                (O.prototype.wrap = function (e) {
                  var t = this,
                    n = this._readableState,
                    r = !1;
                  for (var i in (e.on("end", function () {
                    if ((a("wrapped end"), n.decoder && !n.ended)) {
                      var e = n.decoder.end();
                      e && e.length && t.push(e);
                    }
                    t.push(null);
                  }),
                  e.on("data", function (i) {
                    a("wrapped data"),
                      n.decoder && (i = n.decoder.write(i)),
                      (!n.objectMode || null != i) &&
                        (n.objectMode || (i && i.length)) &&
                        (t.push(i) || ((r = !0), e.pause()));
                  }),
                  e))
                    void 0 === this[i] &&
                      "function" == typeof e[i] &&
                      (this[i] = (function (t) {
                        return function () {
                          return e[t].apply(e, arguments);
                        };
                      })(i));
                  for (var o = 0; o < E.length; o++)
                    e.on(E[o], this.emit.bind(this, E[o]));
                  return (
                    (this._read = function (t) {
                      a("wrapped _read", t), r && ((r = !1), e.resume());
                    }),
                    this
                  );
                }),
                "function" == typeof Symbol &&
                  (O.prototype[Symbol.asyncIterator] = function () {
                    return void 0 === u && (u = i(871)), u(this);
                  }),
                Object.defineProperty(O.prototype, "readableHighWaterMark", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.highWaterMark;
                  },
                }),
                Object.defineProperty(O.prototype, "readableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState && this._readableState.buffer;
                  },
                }),
                Object.defineProperty(O.prototype, "readableFlowing", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.flowing;
                  },
                  set: function (e) {
                    this._readableState && (this._readableState.flowing = e);
                  },
                }),
                (O._fromList = N),
                Object.defineProperty(O.prototype, "readableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.length;
                  },
                }),
                "function" == typeof Symbol &&
                  (O.from = function (e, t) {
                    return void 0 === l && (l = i(727)), l(O, e, t);
                  });
            },
            170: function (e, t, n) {
              "use strict";
              e.exports = c;
              var r = n(646).q,
                i = r.ERR_METHOD_NOT_IMPLEMENTED,
                o = r.ERR_MULTIPLE_CALLBACK,
                a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                s = r.ERR_TRANSFORM_WITH_LENGTH_0,
                u = n(403);
              function l(e, t) {
                var n = this._transformState;
                n.transforming = !1;
                var r = n.writecb;
                if (null === r) return this.emit("error", new o());
                (n.writechunk = null),
                  (n.writecb = null),
                  null != t && this.push(t),
                  r(e);
                var i = this._readableState;
                (i.reading = !1),
                  (i.needReadable || i.length < i.highWaterMark) &&
                    this._read(i.highWaterMark);
              }
              function c(e) {
                if (!(this instanceof c)) return new c(e);
                u.call(this, e),
                  (this._transformState = {
                    afterTransform: l.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null,
                  }),
                  (this._readableState.needReadable = !0),
                  (this._readableState.sync = !1),
                  e &&
                    ("function" == typeof e.transform &&
                      (this._transform = e.transform),
                    "function" == typeof e.flush && (this._flush = e.flush)),
                  this.on("prefinish", f);
              }
              function f() {
                var e = this;
                "function" != typeof this._flush ||
                this._readableState.destroyed
                  ? d(this, null, null)
                  : this._flush(function (t, n) {
                      d(e, t, n);
                    });
              }
              function d(e, t, n) {
                if (t) return e.emit("error", t);
                if ((null != n && e.push(n), e._writableState.length))
                  throw new s();
                if (e._transformState.transforming) throw new a();
                return e.push(null);
              }
              n(782)(c, u),
                (c.prototype.push = function (e, t) {
                  return (
                    (this._transformState.needTransform = !1),
                    u.prototype.push.call(this, e, t)
                  );
                }),
                (c.prototype._transform = function (e, t, n) {
                  n(new i("_transform()"));
                }),
                (c.prototype._write = function (e, t, n) {
                  var r = this._transformState;
                  if (
                    ((r.writecb = n),
                    (r.writechunk = e),
                    (r.writeencoding = t),
                    !r.transforming)
                  ) {
                    var i = this._readableState;
                    (r.needTransform ||
                      i.needReadable ||
                      i.length < i.highWaterMark) &&
                      this._read(i.highWaterMark);
                  }
                }),
                (c.prototype._read = function (e) {
                  var t = this._transformState;
                  null === t.writechunk || t.transforming
                    ? (t.needTransform = !0)
                    : ((t.transforming = !0),
                      this._transform(
                        t.writechunk,
                        t.writeencoding,
                        t.afterTransform
                      ));
                }),
                (c.prototype._destroy = function (e, t) {
                  u.prototype._destroy.call(this, e, function (e) {
                    t(e);
                  });
                });
            },
            337: function (e, t, i) {
              "use strict";
              function o(e) {
                var t = this;
                (this.next = null),
                  (this.entry = null),
                  (this.finish = function () {
                    (function (e, t, n) {
                      var r = e.entry;
                      for (e.entry = null; r; ) {
                        var i = r.callback;
                        t.pendingcb--, i(void 0), (r = r.next);
                      }
                      t.corkedRequestsFree.next = e;
                    })(t, e);
                  });
              }
              (e.exports = O), (O.WritableState = x);
              var a,
                s,
                u = { deprecate: i(769) },
                l = i(678),
                c = i(300).Buffer,
                f = n.g.Uint8Array || function () {},
                d = i(25),
                h = i(776).getHighWaterMark,
                p = i(646).q,
                y = p.ERR_INVALID_ARG_TYPE,
                v = p.ERR_METHOD_NOT_IMPLEMENTED,
                b = p.ERR_MULTIPLE_CALLBACK,
                g = p.ERR_STREAM_CANNOT_PIPE,
                m = p.ERR_STREAM_DESTROYED,
                w = p.ERR_STREAM_NULL_VALUES,
                k = p.ERR_STREAM_WRITE_AFTER_END,
                S = p.ERR_UNKNOWN_ENCODING,
                _ = d.errorOrDestroy;
              function E() {}
              function x(e, t, n) {
                (a = a || i(403)),
                  (e = e || {}),
                  "boolean" != typeof n && (n = t instanceof a),
                  (this.objectMode = !!e.objectMode),
                  n &&
                    (this.objectMode =
                      this.objectMode || !!e.writableObjectMode),
                  (this.highWaterMark = h(this, e, "writableHighWaterMark", n)),
                  (this.finalCalled = !1),
                  (this.needDrain = !1),
                  (this.ending = !1),
                  (this.ended = !1),
                  (this.finished = !1),
                  (this.destroyed = !1);
                var s = !1 === e.decodeStrings;
                (this.decodeStrings = !s),
                  (this.defaultEncoding = e.defaultEncoding || "utf8"),
                  (this.length = 0),
                  (this.writing = !1),
                  (this.corked = 0),
                  (this.sync = !0),
                  (this.bufferProcessing = !1),
                  (this.onwrite = function (e) {
                    (function (e, t) {
                      var n,
                        i,
                        o = e._writableState,
                        a = o.sync,
                        s = o.writecb;
                      if ("function" != typeof s) throw new b();
                      if (
                        (((n = o).writing = !1),
                        (n.writecb = null),
                        (n.length -= n.writelen),
                        (n.writelen = 0),
                        t)
                      )
                        (i = e),
                          --o.pendingcb,
                          a
                            ? (r.nextTick(s, t),
                              r.nextTick(P, i, o),
                              (i._writableState.errorEmitted = !0),
                              _(i, t))
                            : (s(t),
                              (i._writableState.errorEmitted = !0),
                              _(i, t),
                              P(i, o));
                      else {
                        var u = j(o) || e.destroyed;
                        u ||
                          o.corked ||
                          o.bufferProcessing ||
                          !o.bufferedRequest ||
                          T(e, o),
                          a ? r.nextTick(R, e, o, u, s) : R(e, o, u, s);
                      }
                    })(t, e);
                  }),
                  (this.writecb = null),
                  (this.writelen = 0),
                  (this.bufferedRequest = null),
                  (this.lastBufferedRequest = null),
                  (this.pendingcb = 0),
                  (this.prefinished = !1),
                  (this.errorEmitted = !1),
                  (this.emitClose = !1 !== e.emitClose),
                  (this.autoDestroy = !!e.autoDestroy),
                  (this.bufferedRequestCount = 0),
                  (this.corkedRequestsFree = new o(this));
              }
              function O(e) {
                var t = this instanceof (a = a || i(403));
                if (!t && !s.call(O, this)) return new O(e);
                (this._writableState = new x(e, this, t)),
                  (this.writable = !0),
                  e &&
                    ("function" == typeof e.write && (this._write = e.write),
                    "function" == typeof e.writev && (this._writev = e.writev),
                    "function" == typeof e.destroy &&
                      (this._destroy = e.destroy),
                    "function" == typeof e.final && (this._final = e.final)),
                  l.call(this);
              }
              function A(e, t, n, r, i, o, a) {
                (t.writelen = r),
                  (t.writecb = a),
                  (t.writing = !0),
                  (t.sync = !0),
                  t.destroyed
                    ? t.onwrite(new m("write"))
                    : n
                    ? e._writev(i, t.onwrite)
                    : e._write(i, o, t.onwrite),
                  (t.sync = !1);
              }
              function R(e, t, n, r) {
                var i;
                n ||
                  (0 === (i = t).length &&
                    i.needDrain &&
                    ((i.needDrain = !1), e.emit("drain"))),
                  t.pendingcb--,
                  r(),
                  P(e, t);
              }
              function T(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                  var r = Array(t.bufferedRequestCount),
                    i = t.corkedRequestsFree;
                  i.entry = n;
                  for (var a = 0, s = !0; n; )
                    (r[a] = n), n.isBuf || (s = !1), (n = n.next), (a += 1);
                  (r.allBuffers = s),
                    A(e, t, !0, t.length, r, "", i.finish),
                    t.pendingcb++,
                    (t.lastBufferedRequest = null),
                    i.next
                      ? ((t.corkedRequestsFree = i.next), (i.next = null))
                      : (t.corkedRequestsFree = new o(t)),
                    (t.bufferedRequestCount = 0);
                } else {
                  for (; n; ) {
                    var u = n.chunk,
                      l = n.encoding,
                      c = n.callback,
                      f = t.objectMode ? 1 : u.length;
                    if (
                      (A(e, t, !1, f, u, l, c),
                      (n = n.next),
                      t.bufferedRequestCount--,
                      t.writing)
                    )
                      break;
                  }
                  null === n && (t.lastBufferedRequest = null);
                }
                (t.bufferedRequest = n), (t.bufferProcessing = !1);
              }
              function j(e) {
                return (
                  e.ending &&
                  0 === e.length &&
                  null === e.bufferedRequest &&
                  !e.finished &&
                  !e.writing
                );
              }
              function C(e, t) {
                e._final(function (n) {
                  t.pendingcb--,
                    n && _(e, n),
                    (t.prefinished = !0),
                    e.emit("prefinish"),
                    P(e, t);
                });
              }
              function P(e, t) {
                var n,
                  i = j(t);
                if (
                  i &&
                  ((n = t).prefinished ||
                    n.finalCalled ||
                    ("function" != typeof e._final || n.destroyed
                      ? ((n.prefinished = !0), e.emit("prefinish"))
                      : (n.pendingcb++,
                        (n.finalCalled = !0),
                        r.nextTick(C, e, n))),
                  0 === t.pendingcb &&
                    ((t.finished = !0), e.emit("finish"), t.autoDestroy))
                ) {
                  var o = e._readableState;
                  (!o || (o.autoDestroy && o.endEmitted)) && e.destroy();
                }
                return i;
              }
              i(782)(O, l),
                (x.prototype.getBuffer = function () {
                  for (var e = this.bufferedRequest, t = []; e; )
                    t.push(e), (e = e.next);
                  return t;
                }),
                (function () {
                  try {
                    Object.defineProperty(x.prototype, "buffer", {
                      get: u.deprecate(
                        function () {
                          return this.getBuffer();
                        },
                        "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                        "DEP0003"
                      ),
                    });
                  } catch (e) {}
                })(),
                "function" == typeof Symbol &&
                Symbol.hasInstance &&
                "function" == typeof Function.prototype[Symbol.hasInstance]
                  ? ((s = Function.prototype[Symbol.hasInstance]),
                    Object.defineProperty(O, Symbol.hasInstance, {
                      value: function (e) {
                        return (
                          !!s.call(this, e) ||
                          (this === O && e && e._writableState instanceof x)
                        );
                      },
                    }))
                  : (s = function (e) {
                      return e instanceof this;
                    }),
                (O.prototype.pipe = function () {
                  _(this, new g());
                }),
                (O.prototype.write = function (e, t, n) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    d,
                    h = this._writableState,
                    p = !1,
                    v =
                      !h.objectMode &&
                      ((i = e), c.isBuffer(i) || i instanceof f);
                  return (
                    v && !c.isBuffer(e) && ((o = e), (e = c.from(o))),
                    ("function" == typeof t && ((n = t), (t = null)),
                    v ? (t = "buffer") : t || (t = h.defaultEncoding),
                    "function" != typeof n && (n = E),
                    h.ending)
                      ? ((a = n), _(this, (s = new k())), r.nextTick(a, s))
                      : (v ||
                          ((u = e),
                          (l = n),
                          null === u
                            ? (d = new w())
                            : "string" == typeof u ||
                              h.objectMode ||
                              (d = new y("chunk", ["string", "Buffer"], u)),
                          !d || (_(this, d), r.nextTick(l, d), 0))) &&
                        (h.pendingcb++,
                        (p = (function (e, t, n, r, i, o) {
                          if (!n) {
                            var a,
                              s,
                              u =
                                ((a = r),
                                (s = i),
                                t.objectMode ||
                                  !1 === t.decodeStrings ||
                                  "string" != typeof a ||
                                  (a = c.from(a, s)),
                                a);
                            r !== u && ((n = !0), (i = "buffer"), (r = u));
                          }
                          var l = t.objectMode ? 1 : r.length;
                          t.length += l;
                          var f = t.length < t.highWaterMark;
                          if (
                            (f || (t.needDrain = !0), t.writing || t.corked)
                          ) {
                            var d = t.lastBufferedRequest;
                            (t.lastBufferedRequest = {
                              chunk: r,
                              encoding: i,
                              isBuf: n,
                              callback: o,
                              next: null,
                            }),
                              d
                                ? (d.next = t.lastBufferedRequest)
                                : (t.bufferedRequest = t.lastBufferedRequest),
                              (t.bufferedRequestCount += 1);
                          } else A(e, t, !1, l, r, i, o);
                          return f;
                        })(this, h, v, e, t, n))),
                    p
                  );
                }),
                (O.prototype.cork = function () {
                  this._writableState.corked++;
                }),
                (O.prototype.uncork = function () {
                  var e = this._writableState;
                  !e.corked ||
                    (e.corked--,
                    e.writing ||
                      e.corked ||
                      e.bufferProcessing ||
                      !e.bufferedRequest ||
                      T(this, e));
                }),
                (O.prototype.setDefaultEncoding = function (e) {
                  if (
                    ("string" == typeof e && (e = e.toLowerCase()),
                    !(
                      [
                        "hex",
                        "utf8",
                        "utf-8",
                        "ascii",
                        "binary",
                        "base64",
                        "ucs2",
                        "ucs-2",
                        "utf16le",
                        "utf-16le",
                        "raw",
                      ].indexOf((e + "").toLowerCase()) > -1
                    ))
                  )
                    throw new S(e);
                  return (this._writableState.defaultEncoding = e), this;
                }),
                Object.defineProperty(O.prototype, "writableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(O.prototype, "writableHighWaterMark", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.highWaterMark;
                  },
                }),
                (O.prototype._write = function (e, t, n) {
                  n(new v("_write()"));
                }),
                (O.prototype._writev = null),
                (O.prototype.end = function (e, t, n) {
                  var i,
                    o,
                    a,
                    s = this._writableState;
                  return (
                    "function" == typeof e
                      ? ((n = e), (e = null), (t = null))
                      : "function" == typeof t && ((n = t), (t = null)),
                    null != e && this.write(e, t),
                    s.corked && ((s.corked = 1), this.uncork()),
                    s.ending ||
                      ((i = this),
                      (o = s),
                      (a = n),
                      (o.ending = !0),
                      P(i, o),
                      a && (o.finished ? r.nextTick(a) : i.once("finish", a)),
                      (o.ended = !0),
                      (i.writable = !1)),
                    this
                  );
                }),
                Object.defineProperty(O.prototype, "writableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(O.prototype, "destroyed", {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._writableState &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (e) {
                    this._writableState && (this._writableState.destroyed = e);
                  },
                }),
                (O.prototype.destroy = d.destroy),
                (O.prototype._undestroy = d.undestroy),
                (O.prototype._destroy = function (e, t) {
                  t(e);
                });
            },
            871: function (e, t, n) {
              "use strict";
              function i(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              }
              var o,
                a = n(698),
                s = Symbol("lastResolve"),
                u = Symbol("lastReject"),
                l = Symbol("error"),
                c = Symbol("ended"),
                f = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                h = Symbol("stream");
              function p(e, t) {
                return { value: e, done: t };
              }
              function y(e) {
                var t = e[s];
                if (null !== t) {
                  var n = e[h].read();
                  null !== n &&
                    ((e[f] = null), (e[s] = null), (e[u] = null), t(p(n, !1)));
                }
              }
              function v(e) {
                r.nextTick(y, e);
              }
              var b = Object.getPrototypeOf(function () {}),
                g = Object.setPrototypeOf(
                  (i(
                    (o = {
                      get stream() {
                        return this[h];
                      },
                      next: function () {
                        var e,
                          t,
                          n = this,
                          i = this[l];
                        if (null !== i) return Promise.reject(i);
                        if (this[c]) return Promise.resolve(p(void 0, !0));
                        if (this[h].destroyed)
                          return new Promise(function (e, t) {
                            r.nextTick(function () {
                              n[l] ? t(n[l]) : e(p(void 0, !0));
                            });
                          });
                        var o = this[f];
                        if (o)
                          t = new Promise(
                            ((e = this),
                            function (t, n) {
                              o.then(function () {
                                if (e[c]) {
                                  t(p(void 0, !0));
                                  return;
                                }
                                e[d](t, n);
                              }, n);
                            })
                          );
                        else {
                          var a = this[h].read();
                          if (null !== a) return Promise.resolve(p(a, !1));
                          t = new Promise(this[d]);
                        }
                        return (this[f] = t), t;
                      },
                    }),
                    Symbol.asyncIterator,
                    function () {
                      return this;
                    }
                  ),
                  i(o, "return", function () {
                    var e = this;
                    return new Promise(function (t, n) {
                      e[h].destroy(null, function (e) {
                        if (e) {
                          n(e);
                          return;
                        }
                        t(p(void 0, !0));
                      });
                    });
                  }),
                  o),
                  b
                );
              e.exports = function (e) {
                var t,
                  n = Object.create(
                    g,
                    (i((t = {}), h, { value: e, writable: !0 }),
                    i(t, s, { value: null, writable: !0 }),
                    i(t, u, { value: null, writable: !0 }),
                    i(t, l, { value: null, writable: !0 }),
                    i(t, c, {
                      value: e._readableState.endEmitted,
                      writable: !0,
                    }),
                    i(t, d, {
                      value: function (e, t) {
                        var r = n[h].read();
                        r
                          ? ((n[f] = null),
                            (n[s] = null),
                            (n[u] = null),
                            e(p(r, !1)))
                          : ((n[s] = e), (n[u] = t));
                      },
                      writable: !0,
                    }),
                    t)
                  );
                return (
                  (n[f] = null),
                  a(e, function (e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                      var t = n[u];
                      null !== t &&
                        ((n[f] = null), (n[s] = null), (n[u] = null), t(e)),
                        (n[l] = e);
                      return;
                    }
                    var r = n[s];
                    null !== r &&
                      ((n[f] = null),
                      (n[s] = null),
                      (n[u] = null),
                      r(p(void 0, !0))),
                      (n[c] = !0);
                  }),
                  e.on("readable", v.bind(null, n)),
                  n
                );
              };
            },
            379: function (e, t, n) {
              "use strict";
              function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              }
              function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var o = n(300).Buffer,
                a = n(837).inspect,
                s = (a && a.custom) || "inspect";
              e.exports = (function () {
                var e, t;
                function n() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, n),
                    (this.head = null),
                    (this.tail = null),
                    (this.length = 0);
                }
                return (
                  (e = [
                    {
                      key: "push",
                      value: function (e) {
                        var t = { data: e, next: null };
                        this.length > 0
                          ? (this.tail.next = t)
                          : (this.head = t),
                          (this.tail = t),
                          ++this.length;
                      },
                    },
                    {
                      key: "unshift",
                      value: function (e) {
                        var t = { data: e, next: this.head };
                        0 === this.length && (this.tail = t),
                          (this.head = t),
                          ++this.length;
                      },
                    },
                    {
                      key: "shift",
                      value: function () {
                        if (0 !== this.length) {
                          var e = this.head.data;
                          return (
                            1 === this.length
                              ? (this.head = this.tail = null)
                              : (this.head = this.head.next),
                            --this.length,
                            e
                          );
                        }
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        (this.head = this.tail = null), (this.length = 0);
                      },
                    },
                    {
                      key: "join",
                      value: function (e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, n = "" + t.data; (t = t.next); )
                          n += e + t.data;
                        return n;
                      },
                    },
                    {
                      key: "concat",
                      value: function (e) {
                        if (0 === this.length) return o.alloc(0);
                        for (
                          var t,
                            n,
                            r = o.allocUnsafe(e >>> 0),
                            i = this.head,
                            a = 0;
                          i;

                        )
                          (t = i.data),
                            (n = a),
                            o.prototype.copy.call(t, r, n),
                            (a += i.data.length),
                            (i = i.next);
                        return r;
                      },
                    },
                    {
                      key: "consume",
                      value: function (e, t) {
                        var n;
                        return (
                          e < this.head.data.length
                            ? ((n = this.head.data.slice(0, e)),
                              (this.head.data = this.head.data.slice(e)))
                            : (n =
                                e === this.head.data.length
                                  ? this.shift()
                                  : t
                                  ? this._getString(e)
                                  : this._getBuffer(e)),
                          n
                        );
                      },
                    },
                    {
                      key: "first",
                      value: function () {
                        return this.head.data;
                      },
                    },
                    {
                      key: "_getString",
                      value: function (e) {
                        var t = this.head,
                          n = 1,
                          r = t.data;
                        for (e -= r.length; (t = t.next); ) {
                          var i = t.data,
                            o = e > i.length ? i.length : e;
                          if (
                            (o === i.length ? (r += i) : (r += i.slice(0, e)),
                            0 == (e -= o))
                          ) {
                            o === i.length
                              ? (++n,
                                t.next
                                  ? (this.head = t.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = t), (t.data = i.slice(o)));
                            break;
                          }
                          ++n;
                        }
                        return (this.length -= n), r;
                      },
                    },
                    {
                      key: "_getBuffer",
                      value: function (e) {
                        var t = o.allocUnsafe(e),
                          n = this.head,
                          r = 1;
                        for (
                          n.data.copy(t), e -= n.data.length;
                          (n = n.next);

                        ) {
                          var i = n.data,
                            a = e > i.length ? i.length : e;
                          if ((i.copy(t, t.length - e, 0, a), 0 == (e -= a))) {
                            a === i.length
                              ? (++r,
                                n.next
                                  ? (this.head = n.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = n), (n.data = i.slice(a)));
                            break;
                          }
                          ++r;
                        }
                        return (this.length -= r), t;
                      },
                    },
                    {
                      key: s,
                      value: function (e, t) {
                        return a(
                          this,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? r(Object(n), !0).forEach(function (t) {
                                    var r, i;
                                    (r = e),
                                      (i = n[t]),
                                      t in r
                                        ? Object.defineProperty(r, t, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                          })
                                        : (r[t] = i);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                  )
                                : r(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t)
                                    );
                                  });
                            }
                            return e;
                          })({}, t, { depth: 0, customInspect: !1 })
                        );
                      },
                    },
                  ]),
                  i(n.prototype, e),
                  t && i(n, t),
                  n
                );
              })();
            },
            25: function (e) {
              "use strict";
              function t(e, t) {
                i(e, t), n(e);
              }
              function n(e) {
                (!e._writableState || e._writableState.emitClose) &&
                  (!e._readableState || e._readableState.emitClose) &&
                  e.emit("close");
              }
              function i(e, t) {
                e.emit("error", t);
              }
              e.exports = {
                destroy: function (e, o) {
                  var a = this,
                    s = this._readableState && this._readableState.destroyed,
                    u = this._writableState && this._writableState.destroyed;
                  return s || u
                    ? (o
                        ? o(e)
                        : e &&
                          (this._writableState
                            ? this._writableState.errorEmitted ||
                              ((this._writableState.errorEmitted = !0),
                              r.nextTick(i, this, e))
                            : r.nextTick(i, this, e)),
                      this)
                    : (this._readableState &&
                        (this._readableState.destroyed = !0),
                      this._writableState &&
                        (this._writableState.destroyed = !0),
                      this._destroy(e || null, function (e) {
                        !o && e
                          ? a._writableState
                            ? a._writableState.errorEmitted
                              ? r.nextTick(n, a)
                              : ((a._writableState.errorEmitted = !0),
                                r.nextTick(t, a, e))
                            : r.nextTick(t, a, e)
                          : o
                          ? (r.nextTick(n, a), o(e))
                          : r.nextTick(n, a);
                      }),
                      this);
                },
                undestroy: function () {
                  this._readableState &&
                    ((this._readableState.destroyed = !1),
                    (this._readableState.reading = !1),
                    (this._readableState.ended = !1),
                    (this._readableState.endEmitted = !1)),
                    this._writableState &&
                      ((this._writableState.destroyed = !1),
                      (this._writableState.ended = !1),
                      (this._writableState.ending = !1),
                      (this._writableState.finalCalled = !1),
                      (this._writableState.prefinished = !1),
                      (this._writableState.finished = !1),
                      (this._writableState.errorEmitted = !1));
                },
                errorOrDestroy: function (e, t) {
                  var n = e._readableState,
                    r = e._writableState;
                  (n && n.autoDestroy) || (r && r.autoDestroy)
                    ? e.destroy(t)
                    : e.emit("error", t);
                },
              };
            },
            698: function (e, t, n) {
              "use strict";
              var r = n(646).q.ERR_STREAM_PREMATURE_CLOSE;
              function i() {}
              e.exports = function e(t, n, o) {
                if ("function" == typeof n) return e(t, null, n);
                n || (n = {}),
                  (a = o || i),
                  (s = !1),
                  (o = function () {
                    if (!s) {
                      s = !0;
                      for (
                        var e = arguments.length, t = Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      a.apply(this, t);
                    }
                  });
                var a,
                  s,
                  u = n.readable || (!1 !== n.readable && t.readable),
                  l = n.writable || (!1 !== n.writable && t.writable),
                  c = function () {
                    t.writable || d();
                  },
                  f = t._writableState && t._writableState.finished,
                  d = function () {
                    (l = !1), (f = !0), u || o.call(t);
                  },
                  h = t._readableState && t._readableState.endEmitted,
                  p = function () {
                    (u = !1), (h = !0), l || o.call(t);
                  },
                  y = function (e) {
                    o.call(t, e);
                  },
                  v = function () {
                    var e;
                    return u && !h
                      ? ((t._readableState && t._readableState.ended) ||
                          (e = new r()),
                        o.call(t, e))
                      : l && !f
                      ? ((t._writableState && t._writableState.ended) ||
                          (e = new r()),
                        o.call(t, e))
                      : void 0;
                  },
                  b = function () {
                    t.req.on("finish", d);
                  };
                return (
                  t.setHeader && "function" == typeof t.abort
                    ? (t.on("complete", d),
                      t.on("abort", v),
                      t.req ? b() : t.on("request", b))
                    : l &&
                      !t._writableState &&
                      (t.on("end", c), t.on("close", c)),
                  t.on("end", p),
                  t.on("finish", d),
                  !1 !== n.error && t.on("error", y),
                  t.on("close", v),
                  function () {
                    t.removeListener("complete", d),
                      t.removeListener("abort", v),
                      t.removeListener("request", b),
                      t.req && t.req.removeListener("finish", d),
                      t.removeListener("end", c),
                      t.removeListener("close", c),
                      t.removeListener("finish", d),
                      t.removeListener("end", p),
                      t.removeListener("error", y),
                      t.removeListener("close", v);
                  }
                );
              };
            },
            727: function (e, t, n) {
              "use strict";
              function r(e, t, n, r, i, o, a) {
                try {
                  var s = e[o](a),
                    u = s.value;
                } catch (e) {
                  n(e);
                  return;
                }
                s.done ? t(u) : Promise.resolve(u).then(r, i);
              }
              function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              }
              var o = n(646).q.ERR_INVALID_ARG_TYPE;
              e.exports = function (e, t, n) {
                if (t && "function" == typeof t.next) a = t;
                else if (t && t[Symbol.asyncIterator])
                  a = t[Symbol.asyncIterator]();
                else if (t && t[Symbol.iterator]) a = t[Symbol.iterator]();
                else throw new o("iterable", ["Iterable"], t);
                var a,
                  s = new e(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? i(Object(n), !0).forEach(function (t) {
                              var r, i;
                              (r = e),
                                (i = n[t]),
                                t in r
                                  ? Object.defineProperty(r, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (r[t] = i);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : i(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({ objectMode: !0 }, n)
                  ),
                  u = !1;
                function l() {
                  return c.apply(this, arguments);
                }
                function c() {
                  var e;
                  return (
                    (e = function* () {
                      try {
                        var e = yield a.next(),
                          t = e.value;
                        e.done
                          ? s.push(null)
                          : s.push(yield t)
                          ? l()
                          : (u = !1);
                      } catch (e) {
                        s.destroy(e);
                      }
                    }),
                    (c = function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (i, o) {
                        var a = e.apply(t, n);
                        function s(e) {
                          r(a, i, o, s, u, "next", e);
                        }
                        function u(e) {
                          r(a, i, o, s, u, "throw", e);
                        }
                        s(void 0);
                      });
                    }).apply(this, arguments)
                  );
                }
                return (
                  (s._read = function () {
                    u || ((u = !0), l());
                  }),
                  s
                );
              };
            },
            442: function (e, t, n) {
              "use strict";
              var r,
                i = n(646).q,
                o = i.ERR_MISSING_ARGS,
                a = i.ERR_STREAM_DESTROYED;
              function s(e) {
                if (e) throw e;
              }
              function u(e) {
                e();
              }
              function l(e, t) {
                return e.pipe(t);
              }
              e.exports = function () {
                for (
                  var e, t, i = arguments.length, c = Array(i), f = 0;
                  f < i;
                  f++
                )
                  c[f] = arguments[f];
                var d =
                  (e = c).length && "function" == typeof e[e.length - 1]
                    ? e.pop()
                    : s;
                if ((Array.isArray(c[0]) && (c = c[0]), c.length < 2))
                  throw new o("streams");
                var h = c.map(function (e, i) {
                  var o,
                    s,
                    l,
                    f,
                    p,
                    y = i < c.length - 1;
                  return (
                    (s = o =
                      function (e) {
                        t || (t = e),
                          e && h.forEach(u),
                          y || (h.forEach(u), d(t));
                      }),
                    (l = !1),
                    (o = function () {
                      l || ((l = !0), s.apply(void 0, arguments));
                    }),
                    (f = !1),
                    e.on("close", function () {
                      f = !0;
                    }),
                    void 0 === r && (r = n(698)),
                    r(e, { readable: y, writable: i > 0 }, function (e) {
                      if (e) return o(e);
                      (f = !0), o();
                    }),
                    (p = !1),
                    function (t) {
                      if (!f && !p) {
                        if (
                          ((p = !0),
                          e.setHeader && "function" == typeof e.abort)
                        )
                          return e.abort();
                        if ("function" == typeof e.destroy) return e.destroy();
                        o(t || new a("pipe"));
                      }
                    }
                  );
                });
                return c.reduce(l);
              };
            },
            776: function (e, t, n) {
              "use strict";
              var r = n(646).q.ERR_INVALID_OPT_VALUE;
              e.exports = {
                getHighWaterMark: function (e, t, n, i) {
                  var o =
                    null != t.highWaterMark ? t.highWaterMark : i ? t[n] : null;
                  if (null != o) {
                    if (!(isFinite(o) && Math.floor(o) === o) || o < 0)
                      throw new r(i ? n : "highWaterMark", o);
                    return Math.floor(o);
                  }
                  return e.objectMode ? 16 : 16384;
                },
              };
            },
            678: function (e, t, n) {
              e.exports = n(781);
            },
            55: function (e, t, n) {
              var r = n(300),
                i = r.Buffer;
              function o(e, t) {
                for (var n in e) t[n] = e[n];
              }
              function a(e, t, n) {
                return i(e, t, n);
              }
              i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
                ? (e.exports = r)
                : (o(r, t), (t.Buffer = a)),
                (a.prototype = Object.create(i.prototype)),
                o(i, a),
                (a.from = function (e, t, n) {
                  if ("number" == typeof e)
                    throw TypeError("Argument must not be a number");
                  return i(e, t, n);
                }),
                (a.alloc = function (e, t, n) {
                  if ("number" != typeof e)
                    throw TypeError("Argument must be a number");
                  var r = i(e);
                  return (
                    void 0 !== t
                      ? "string" == typeof n
                        ? r.fill(t, n)
                        : r.fill(t)
                      : r.fill(0),
                    r
                  );
                }),
                (a.allocUnsafe = function (e) {
                  if ("number" != typeof e)
                    throw TypeError("Argument must be a number");
                  return i(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                  if ("number" != typeof e)
                    throw TypeError("Argument must be a number");
                  return r.SlowBuffer(e);
                });
            },
            173: function (e, t, n) {
              e.exports = i;
              var r = n(361).EventEmitter;
              function i() {
                r.call(this);
              }
              n(782)(i, r),
                (i.Readable = n(709)),
                (i.Writable = n(337)),
                (i.Duplex = n(403)),
                (i.Transform = n(170)),
                (i.PassThrough = n(889)),
                (i.finished = n(698)),
                (i.pipeline = n(442)),
                (i.Stream = i),
                (i.prototype.pipe = function (e, t) {
                  var n = this;
                  function i(t) {
                    e.writable && !1 === e.write(t) && n.pause && n.pause();
                  }
                  function o() {
                    n.readable && n.resume && n.resume();
                  }
                  n.on("data", i),
                    e.on("drain", o),
                    e._isStdio ||
                      (t && !1 === t.end) ||
                      (n.on("end", s), n.on("close", u));
                  var a = !1;
                  function s() {
                    a || ((a = !0), e.end());
                  }
                  function u() {
                    a ||
                      ((a = !0), "function" == typeof e.destroy && e.destroy());
                  }
                  function l(e) {
                    if ((c(), 0 === r.listenerCount(this, "error"))) throw e;
                  }
                  function c() {
                    n.removeListener("data", i),
                      e.removeListener("drain", o),
                      n.removeListener("end", s),
                      n.removeListener("close", u),
                      n.removeListener("error", l),
                      e.removeListener("error", l),
                      n.removeListener("end", c),
                      n.removeListener("close", c),
                      e.removeListener("close", c);
                  }
                  return (
                    n.on("error", l),
                    e.on("error", l),
                    n.on("end", c),
                    n.on("close", c),
                    e.on("close", c),
                    e.emit("pipe", n),
                    e
                  );
                });
            },
            704: function (e, t, n) {
              "use strict";
              var r = n(55).Buffer,
                i =
                  r.isEncoding ||
                  function (e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "binary":
                      case "base64":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                      case "raw":
                        return !0;
                      default:
                        return !1;
                    }
                  };
              function o(e) {
                var t;
                switch (
                  ((this.encoding = (function (e) {
                    var t = (function (e) {
                      var t;
                      if (!e) return "utf8";
                      for (;;)
                        switch (e) {
                          case "utf8":
                          case "utf-8":
                            return "utf8";
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return "utf16le";
                          case "latin1":
                          case "binary":
                            return "latin1";
                          case "base64":
                          case "ascii":
                          case "hex":
                            return e;
                          default:
                            if (t) return;
                            (e = ("" + e).toLowerCase()), (t = !0);
                        }
                    })(e);
                    if ("string" != typeof t && (r.isEncoding === i || !i(e)))
                      throw Error("Unknown encoding: " + e);
                    return t || e;
                  })(e)),
                  this.encoding)
                ) {
                  case "utf16le":
                    (this.text = u), (this.end = l), (t = 4);
                    break;
                  case "utf8":
                    (this.fillLast = s), (t = 4);
                    break;
                  case "base64":
                    (this.text = c), (this.end = f), (t = 3);
                    break;
                  default:
                    (this.write = d), (this.end = h);
                    return;
                }
                (this.lastNeed = 0),
                  (this.lastTotal = 0),
                  (this.lastChar = r.allocUnsafe(t));
              }
              function a(e) {
                return e <= 127
                  ? 0
                  : e >> 5 == 6
                  ? 2
                  : e >> 4 == 14
                  ? 3
                  : e >> 3 == 30
                  ? 4
                  : e >> 6 == 2
                  ? -1
                  : -2;
              }
              function s(e) {
                var t = this.lastTotal - this.lastNeed,
                  n = (function (e, t, n) {
                    if ((192 & t[0]) != 128) return (e.lastNeed = 0), "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                      if ((192 & t[1]) != 128) return (e.lastNeed = 1), "�";
                      if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128)
                        return (e.lastNeed = 2), "�";
                    }
                  })(this, e, 0);
                return void 0 !== n
                  ? n
                  : this.lastNeed <= e.length
                  ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal))
                  : void (e.copy(this.lastChar, t, 0, e.length),
                    (this.lastNeed -= e.length));
              }
              function u(e, t) {
                if ((e.length - t) % 2 == 0) {
                  var n = e.toString("utf16le", t);
                  if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319)
                      return (
                        (this.lastNeed = 2),
                        (this.lastTotal = 4),
                        (this.lastChar[0] = e[e.length - 2]),
                        (this.lastChar[1] = e[e.length - 1]),
                        n.slice(0, -1)
                      );
                  }
                  return n;
                }
                return (
                  (this.lastNeed = 1),
                  (this.lastTotal = 2),
                  (this.lastChar[0] = e[e.length - 1]),
                  e.toString("utf16le", t, e.length - 1)
                );
              }
              function l(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                  var n = this.lastTotal - this.lastNeed;
                  return t + this.lastChar.toString("utf16le", 0, n);
                }
                return t;
              }
              function c(e, t) {
                var n = (e.length - t) % 3;
                return 0 === n
                  ? e.toString("base64", t)
                  : ((this.lastNeed = 3 - n),
                    (this.lastTotal = 3),
                    1 === n
                      ? (this.lastChar[0] = e[e.length - 1])
                      : ((this.lastChar[0] = e[e.length - 2]),
                        (this.lastChar[1] = e[e.length - 1])),
                    e.toString("base64", t, e.length - n));
              }
              function f(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed
                  ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
                  : t;
              }
              function d(e) {
                return e.toString(this.encoding);
              }
              function h(e) {
                return e && e.length ? this.write(e) : "";
              }
              (t.s = o),
                (o.prototype.write = function (e) {
                  var t, n;
                  if (0 === e.length) return "";
                  if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    (n = this.lastNeed), (this.lastNeed = 0);
                  } else n = 0;
                  return n < e.length
                    ? t
                      ? t + this.text(e, n)
                      : this.text(e, n)
                    : t || "";
                }),
                (o.prototype.end = function (e) {
                  var t = e && e.length ? this.write(e) : "";
                  return this.lastNeed ? t + "�" : t;
                }),
                (o.prototype.text = function (e, t) {
                  var n = (function (e, t, n) {
                    var r = t.length - 1;
                    if (r < n) return 0;
                    var i = a(t[r]);
                    return i >= 0
                      ? (i > 0 && (e.lastNeed = i - 1), i)
                      : --r < n || -2 === i
                      ? 0
                      : (i = a(t[r])) >= 0
                      ? (i > 0 && (e.lastNeed = i - 2), i)
                      : --r < n || -2 === i
                      ? 0
                      : (i = a(t[r])) >= 0
                      ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                      : 0;
                  })(this, e, t);
                  if (!this.lastNeed) return e.toString("utf8", t);
                  this.lastTotal = n;
                  var r = e.length - (n - this.lastNeed);
                  return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
                }),
                (o.prototype.fillLast = function (e) {
                  if (this.lastNeed <= e.length)
                    return (
                      e.copy(
                        this.lastChar,
                        this.lastTotal - this.lastNeed,
                        0,
                        this.lastNeed
                      ),
                      this.lastChar.toString(this.encoding, 0, this.lastTotal)
                    );
                  e.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    e.length
                  ),
                    (this.lastNeed -= e.length);
                });
            },
            769: function (e) {
              e.exports = function (e, n) {
                if (t("noDeprecation")) return e;
                var r = !1;
                return function () {
                  if (!r) {
                    if (t("throwDeprecation")) throw Error(n);
                    t("traceDeprecation") ? console.trace(n) : console.warn(n),
                      (r = !0);
                  }
                  return e.apply(this, arguments);
                };
              };
              function t(e) {
                try {
                  if (!n.g.localStorage) return !1;
                } catch (e) {
                  return !1;
                }
                var t = n.g.localStorage[e];
                return null != t && "true" === String(t).toLowerCase();
              }
            },
            300: function (e) {
              "use strict";
              e.exports = n(30816);
            },
            361: function (e) {
              "use strict";
              e.exports = n(50343);
            },
            781: function (e) {
              "use strict";
              e.exports = n(50343).EventEmitter;
            },
            837: function (e) {
              "use strict";
              e.exports = n(71323);
            },
          },
          i = {};
        function o(e) {
          var n = i[e];
          if (void 0 !== n) return n.exports;
          var r = (i[e] = { exports: {} }),
            a = !0;
          try {
            t[e](r, r.exports, o), (a = !1);
          } finally {
            a && delete i[e];
          }
          return r.exports;
        }
        o.ab = "//";
        var a = o(173);
        e.exports = a;
      })();
    },
    39350: function (e) {
      "use strict";
      e.exports = function (e, t, n, r) {
        (t = t || "&"), (n = n || "=");
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var o = /\+/g;
        e = e.split(t);
        var a = 1e3;
        r && "number" == typeof r.maxKeys && (a = r.maxKeys);
        var s = e.length;
        a > 0 && s > a && (s = a);
        for (var u = 0; u < s; ++u) {
          var l,
            c,
            f,
            d,
            h = e[u].replace(o, "%20"),
            p = h.indexOf(n);
          (p >= 0
            ? ((l = h.substr(0, p)), (c = h.substr(p + 1)))
            : ((l = h), (c = "")),
          (f = decodeURIComponent(l)),
          (d = decodeURIComponent(c)),
          Object.prototype.hasOwnProperty.call(i, f))
            ? Array.isArray(i[f])
              ? i[f].push(d)
              : (i[f] = [i[f], d])
            : (i[f] = d);
        }
        return i;
      };
    },
    94104: function (e) {
      "use strict";
      var t = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, n, r, i) {
        return ((n = n || "&"),
        (r = r || "="),
        null === e && (e = void 0),
        "object" == typeof e)
          ? Object.keys(e)
              .map(function (i) {
                var o = encodeURIComponent(t(i)) + r;
                return Array.isArray(e[i])
                  ? e[i]
                      .map(function (e) {
                        return o + encodeURIComponent(t(e));
                      })
                      .join(n)
                  : o + encodeURIComponent(t(e[i]));
              })
              .join(n)
          : i
          ? encodeURIComponent(t(i)) + r + encodeURIComponent(t(e))
          : "";
      };
    },
    48966: function (e, t, n) {
      "use strict";
      (t.decode = t.parse = n(39350)), (t.encode = t.stringify = n(94104));
    },
    29721: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(31542),
        i = n(27378),
        o = n(23615),
        a = n.n(o),
        s = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        l = (function (e) {
          function t() {
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            u(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.defaultNode &&
                    document.body.removeChild(this.defaultNode),
                    (this.defaultNode = null);
                },
              },
              {
                key: "render",
                value: function () {
                  return s
                    ? (this.props.node ||
                        this.defaultNode ||
                        ((this.defaultNode = document.createElement("div")),
                        document.body.appendChild(this.defaultNode)),
                      r.createPortal(
                        this.props.children,
                        this.props.node || this.defaultNode
                      ))
                    : null;
                },
              },
            ]),
            t
          );
        })(i.Component);
      l.propTypes = { children: a().node.isRequired, node: a().any };
      var c = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        f = (function (e) {
          function t() {
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            c(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.renderPortal();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.renderPortal();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  r.unmountComponentAtNode(this.defaultNode || this.props.node),
                    this.defaultNode &&
                      document.body.removeChild(this.defaultNode),
                    (this.defaultNode = null),
                    (this.portal = null);
                },
              },
              {
                key: "renderPortal",
                value: function (e) {
                  this.props.node ||
                    this.defaultNode ||
                    ((this.defaultNode = document.createElement("div")),
                    document.body.appendChild(this.defaultNode));
                  var t = this.props.children;
                  "function" == typeof this.props.children.type &&
                    (t = i.cloneElement(this.props.children)),
                    (this.portal = r.unstable_renderSubtreeIntoContainer(
                      this,
                      t,
                      this.props.node || this.defaultNode
                    ));
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            t
          );
        })(i.Component);
      f.propTypes = { children: a().node.isRequired, node: a().any };
      var d = r.createPortal ? l : f;
    },
    55693: function (e, t, n) {
      "use strict";
      n.d(t, {
        Sz: function () {
          return f;
        },
        kr: function () {
          return c;
        },
      });
      var r = n(27378),
        i = n(91102),
        o = n(31542);
      n(27061);
      let a = Symbol(),
        s = Symbol(),
        u =
          "undefined" == typeof window ||
          /ServerSideRendering/.test(
            window.navigator && window.navigator.userAgent
          )
            ? r.useEffect
            : r.useLayoutEffect,
        l = i.unstable_runWithPriority
          ? (e) => (0, i.unstable_runWithPriority)(i.unstable_NormalPriority, e)
          : (e) => e();
      function c(e) {
        var t;
        let n = (0, r.createContext)({
          [a]: {
            v: { current: e },
            n: { current: -1 },
            l: new Set(),
            u: (e) => e(),
          },
        });
        return (
          (n[s] = n.Provider),
          (n.Provider =
            ((t = n.Provider),
            ({ value: e, children: n }) => {
              let i = (0, r.useRef)(e),
                s = (0, r.useRef)(0),
                [c, f] = (0, r.useState)(null);
              c && (c(e), f(null));
              let d = (0, r.useRef)();
              if (!d.current) {
                let e = new Set(),
                  t = (t, n) => {
                    (0, o.unstable_batchedUpdates)(() => {
                      s.current += 1;
                      let r = { n: s.current };
                      null != n &&
                        n.suspense &&
                        ((r.n *= -1),
                        (r.p = new Promise((e) => {
                          f(() => (t) => {
                            (r.v = t), delete r.p, e(t);
                          });
                        }))),
                        e.forEach((e) => e(r)),
                        t();
                    });
                  };
                d.current = { [a]: { v: i, n: s, l: e, u: t } };
              }
              return (
                u(() => {
                  (i.current = e),
                    (s.current += 1),
                    l(() => {
                      d.current[a].l.forEach((t) => {
                        t({ n: s.current, v: e });
                      });
                    });
                }, [e]),
                (0, r.createElement)(t, { value: d.current }, n)
              );
            })),
          delete n.Consumer,
          n
        );
      }
      function f(e, t) {
        let n = (0, r.useContext)(e)[a],
          {
            v: { current: i },
            n: { current: o },
            l: s,
          } = n,
          l = t(i),
          [c, f] = (0, r.useReducer)(
            (e, n) => {
              if (!n) return [i, l];
              if ("p" in n) throw n.p;
              if (n.n === o) return Object.is(e[1], l) ? e : [i, l];
              try {
                if ("v" in n) {
                  if (Object.is(e[0], n.v)) return e;
                  let r = t(n.v);
                  return Object.is(e[1], r) ? e : [n.v, r];
                }
              } catch (e) {}
              return [...e];
            },
            [i, l]
          );
        return (
          Object.is(c[1], l) || f(),
          u(
            () => (
              s.add(f),
              () => {
                s.delete(f);
              }
            ),
            [s]
          ),
          c[1]
        );
      }
    },
    56579: function (e) {
      e.exports = function (e) {
        return (
          e &&
          "object" == typeof e &&
          "function" == typeof e.copy &&
          "function" == typeof e.fill &&
          "function" == typeof e.readUInt8
        );
      };
    },
    7673: function (e, t, n) {
      "use strict";
      var r = n(47740),
        i = n(18265),
        o = n(52505),
        a = n(50387);
      function s(e) {
        return e.call.bind(e);
      }
      var u = "undefined" != typeof BigInt,
        l = "undefined" != typeof Symbol,
        c = s(Object.prototype.toString),
        f = s(Number.prototype.valueOf),
        d = s(String.prototype.valueOf),
        h = s(Boolean.prototype.valueOf);
      if (u) var p = s(BigInt.prototype.valueOf);
      if (l) var y = s(Symbol.prototype.valueOf);
      function v(e, t) {
        if ("object" != typeof e) return !1;
        try {
          return t(e), !0;
        } catch (e) {
          return !1;
        }
      }
      function b(e) {
        return "[object Map]" === c(e);
      }
      function g(e) {
        return "[object Set]" === c(e);
      }
      function m(e) {
        return "[object WeakMap]" === c(e);
      }
      function w(e) {
        return "[object WeakSet]" === c(e);
      }
      function k(e) {
        return "[object ArrayBuffer]" === c(e);
      }
      function S(e) {
        return (
          "undefined" != typeof ArrayBuffer &&
          (k.working ? k(e) : e instanceof ArrayBuffer)
        );
      }
      function _(e) {
        return "[object DataView]" === c(e);
      }
      function E(e) {
        return (
          "undefined" != typeof DataView &&
          (_.working ? _(e) : e instanceof DataView)
        );
      }
      (t.isArgumentsObject = r),
        (t.isGeneratorFunction = i),
        (t.isTypedArray = a),
        (t.isPromise = function (e) {
          return (
            ("undefined" != typeof Promise && e instanceof Promise) ||
            (null !== e &&
              "object" == typeof e &&
              "function" == typeof e.then &&
              "function" == typeof e.catch)
          );
        }),
        (t.isArrayBufferView = function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : a(e) || E(e);
        }),
        (t.isUint8Array = function (e) {
          return "Uint8Array" === o(e);
        }),
        (t.isUint8ClampedArray = function (e) {
          return "Uint8ClampedArray" === o(e);
        }),
        (t.isUint16Array = function (e) {
          return "Uint16Array" === o(e);
        }),
        (t.isUint32Array = function (e) {
          return "Uint32Array" === o(e);
        }),
        (t.isInt8Array = function (e) {
          return "Int8Array" === o(e);
        }),
        (t.isInt16Array = function (e) {
          return "Int16Array" === o(e);
        }),
        (t.isInt32Array = function (e) {
          return "Int32Array" === o(e);
        }),
        (t.isFloat32Array = function (e) {
          return "Float32Array" === o(e);
        }),
        (t.isFloat64Array = function (e) {
          return "Float64Array" === o(e);
        }),
        (t.isBigInt64Array = function (e) {
          return "BigInt64Array" === o(e);
        }),
        (t.isBigUint64Array = function (e) {
          return "BigUint64Array" === o(e);
        }),
        (b.working = "undefined" != typeof Map && b(new Map())),
        (t.isMap = function (e) {
          return (
            "undefined" != typeof Map && (b.working ? b(e) : e instanceof Map)
          );
        }),
        (g.working = "undefined" != typeof Set && g(new Set())),
        (t.isSet = function (e) {
          return (
            "undefined" != typeof Set && (g.working ? g(e) : e instanceof Set)
          );
        }),
        (m.working = "undefined" != typeof WeakMap && m(new WeakMap())),
        (t.isWeakMap = function (e) {
          return (
            "undefined" != typeof WeakMap &&
            (m.working ? m(e) : e instanceof WeakMap)
          );
        }),
        (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
        (t.isWeakSet = function (e) {
          return w(e);
        }),
        (k.working = "undefined" != typeof ArrayBuffer && k(new ArrayBuffer())),
        (t.isArrayBuffer = S),
        (_.working =
          "undefined" != typeof ArrayBuffer &&
          "undefined" != typeof DataView &&
          _(new DataView(new ArrayBuffer(1), 0, 1))),
        (t.isDataView = E);
      var x =
        "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function O(e) {
        return "[object SharedArrayBuffer]" === c(e);
      }
      function A(e) {
        return (
          void 0 !== x &&
          (void 0 === O.working && (O.working = O(new x())),
          O.working ? O(e) : e instanceof x)
        );
      }
      function R(e) {
        return v(e, f);
      }
      function T(e) {
        return v(e, d);
      }
      function j(e) {
        return v(e, h);
      }
      function C(e) {
        return u && v(e, p);
      }
      function P(e) {
        return l && v(e, y);
      }
      (t.isSharedArrayBuffer = A),
        (t.isAsyncFunction = function (e) {
          return "[object AsyncFunction]" === c(e);
        }),
        (t.isMapIterator = function (e) {
          return "[object Map Iterator]" === c(e);
        }),
        (t.isSetIterator = function (e) {
          return "[object Set Iterator]" === c(e);
        }),
        (t.isGeneratorObject = function (e) {
          return "[object Generator]" === c(e);
        }),
        (t.isWebAssemblyCompiledModule = function (e) {
          return "[object WebAssembly.Module]" === c(e);
        }),
        (t.isNumberObject = R),
        (t.isStringObject = T),
        (t.isBooleanObject = j),
        (t.isBigIntObject = C),
        (t.isSymbolObject = P),
        (t.isBoxedPrimitive = function (e) {
          return R(e) || T(e) || j(e) || C(e) || P(e);
        }),
        (t.isAnyArrayBuffer = function (e) {
          return "undefined" != typeof Uint8Array && (S(e) || A(e));
        }),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
          e
        ) {
          Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
              throw Error(e + " is not supported in userland");
            },
          });
        });
    },
    71323: function (e, t, n) {
      var r = n(27061),
        i =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
              n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
          },
        o = /%[sdj%]/g;
      (t.format = function (e) {
        if (!m(e)) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(l(arguments[n]));
          return t.join(" ");
        }
        for (
          var n = 1,
            r = arguments,
            i = r.length,
            a = String(e).replace(o, function (e) {
              if ("%%" === e) return "%";
              if (n >= i) return e;
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            s = r[n];
          n < i;
          s = r[++n]
        )
          b(s) || !S(s) ? (a += " " + s) : (a += " " + l(s));
        return a;
      }),
        (t.deprecate = function (e, n) {
          if (void 0 !== r && !0 === r.noDeprecation) return e;
          if (void 0 === r)
            return function () {
              return t.deprecate(e, n).apply(this, arguments);
            };
          var i = !1;
          return function () {
            if (!i) {
              if (r.throwDeprecation) throw Error(n);
              r.traceDeprecation ? console.trace(n) : console.error(n),
                (i = !0);
            }
            return e.apply(this, arguments);
          };
        });
      var a = {},
        s = /^$/;
      if (r.env.NODE_DEBUG) {
        var u = r.env.NODE_DEBUG;
        s = RegExp(
          "^" +
            (u = u
              .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
              .replace(/\*/g, ".*")
              .replace(/,/g, "$|^")
              .toUpperCase()) +
            "$",
          "i"
        );
      }
      function l(e, n) {
        var r = { seen: [], stylize: f };
        return (
          arguments.length >= 3 && (r.depth = arguments[2]),
          arguments.length >= 4 && (r.colors = arguments[3]),
          v(n) ? (r.showHidden = n) : n && t._extend(r, n),
          w(r.showHidden) && (r.showHidden = !1),
          w(r.depth) && (r.depth = 2),
          w(r.colors) && (r.colors = !1),
          w(r.customInspect) && (r.customInspect = !0),
          r.colors && (r.stylize = c),
          d(r, e, r.depth)
        );
      }
      function c(e, t) {
        var n = l.styles[t];
        return n
          ? "\x1b[" + l.colors[n][0] + "m" + e + "\x1b[" + l.colors[n][1] + "m"
          : e;
      }
      function f(e, t) {
        return e;
      }
      function d(e, n, r) {
        if (
          e.customInspect &&
          n &&
          x(n.inspect) &&
          n.inspect !== t.inspect &&
          !(n.constructor && n.constructor.prototype === n)
        ) {
          var i,
            o,
            a,
            s,
            u,
            l = n.inspect(r, e);
          return m(l) || (l = d(e, l, r)), l;
        }
        var c = (function (e, t) {
          if (w(t)) return e.stylize("undefined", "undefined");
          if (m(t)) {
            var n =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(n, "string");
          }
          return g(t)
            ? e.stylize("" + t, "number")
            : v(t)
            ? e.stylize("" + t, "boolean")
            : b(t)
            ? e.stylize("null", "null")
            : void 0;
        })(e, n);
        if (c) return c;
        var f = Object.keys(n),
          S =
            ((s = {}),
            f.forEach(function (e, t) {
              s[e] = !0;
            }),
            s);
        if (
          (e.showHidden && (f = Object.getOwnPropertyNames(n)),
          E(n) && (f.indexOf("message") >= 0 || f.indexOf("description") >= 0))
        )
          return h(n);
        if (0 === f.length) {
          if (x(n)) {
            var O = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + O + "]", "special");
          }
          if (k(n))
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (_(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (E(n)) return h(n);
        }
        var A = "",
          R = !1,
          j = ["{", "}"];
        return (y(n) && ((R = !0), (j = ["[", "]"])),
        x(n) && (A = " [Function" + (n.name ? ": " + n.name : "") + "]"),
        k(n) && (A = " " + RegExp.prototype.toString.call(n)),
        _(n) && (A = " " + Date.prototype.toUTCString.call(n)),
        E(n) && (A = " " + h(n)),
        0 !== f.length || (R && 0 != n.length))
          ? r < 0
            ? k(n)
              ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
              : e.stylize("[Object]", "special")
            : (e.seen.push(n),
              (u = R
                ? (function (e, t, n, r, i) {
                    for (var o = [], a = 0, s = t.length; a < s; ++a)
                      T(t, String(a))
                        ? o.push(p(e, t, n, r, String(a), !0))
                        : o.push("");
                    return (
                      i.forEach(function (i) {
                        i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0));
                      }),
                      o
                    );
                  })(e, n, r, S, f)
                : f.map(function (t) {
                    return p(e, n, r, S, t, R);
                  })),
              e.seen.pop(),
              (i = A),
              (o = j),
              (a = 0),
              u.reduce(function (e, t) {
                return (
                  a++,
                  t.indexOf("\n") >= 0 && a++,
                  e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                );
              }, 0) > 60
                ? o[0] +
                  ("" === i ? "" : i + "\n ") +
                  " " +
                  u.join(",\n  ") +
                  " " +
                  o[1]
                : o[0] + i + " " + u.join(", ") + " " + o[1])
          : j[0] + A + j[1];
      }
      function h(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function p(e, t, n, r, i, o) {
        var a, s, u;
        if (
          ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
            ? (s = u.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : u.set && (s = e.stylize("[Setter]", "special")),
          T(r, i) || (a = "[" + i + "]"),
          !s &&
            (0 > e.seen.indexOf(u.value)
              ? (s = b(n) ? d(e, u.value, null) : d(e, u.value, n - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .slice(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (s = e.stylize("[Circular]", "special"))),
          w(a))
        ) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.slice(1, -1)), (a = e.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = e.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function y(e) {
        return Array.isArray(e);
      }
      function v(e) {
        return "boolean" == typeof e;
      }
      function b(e) {
        return null === e;
      }
      function g(e) {
        return "number" == typeof e;
      }
      function m(e) {
        return "string" == typeof e;
      }
      function w(e) {
        return void 0 === e;
      }
      function k(e) {
        return S(e) && "[object RegExp]" === O(e);
      }
      function S(e) {
        return "object" == typeof e && null !== e;
      }
      function _(e) {
        return S(e) && "[object Date]" === O(e);
      }
      function E(e) {
        return S(e) && ("[object Error]" === O(e) || e instanceof Error);
      }
      function x(e) {
        return "function" == typeof e;
      }
      function O(e) {
        return Object.prototype.toString.call(e);
      }
      function A(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (e) {
        if (!a[(e = e.toUpperCase())]) {
          if (s.test(e)) {
            var n = r.pid;
            a[e] = function () {
              var r = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, n, r);
            };
          } else a[e] = function () {};
        }
        return a[e];
      }),
        (t.inspect = l),
        (l.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (l.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.types = n(7673)),
        (t.isArray = y),
        (t.isBoolean = v),
        (t.isNull = b),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = g),
        (t.isString = m),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = w),
        (t.isRegExp = k),
        (t.types.isRegExp = k),
        (t.isObject = S),
        (t.isDate = _),
        (t.types.isDate = _),
        (t.isError = E),
        (t.types.isNativeError = E),
        (t.isFunction = x),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = n(56579));
      var R = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function T(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        var e, n;
        console.log(
          "%s - %s",
          ((n = [
            A((e = new Date()).getHours()),
            A(e.getMinutes()),
            A(e.getSeconds()),
          ].join(":")),
          [e.getDate(), R[e.getMonth()], n].join(" ")),
          t.format.apply(t, arguments)
        );
      }),
        (t.inherits = n(70087)),
        (t._extend = function (e, t) {
          if (!t || !S(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
          return e;
        });
      var j =
        "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      function C(e, t) {
        if (!e) {
          var n = Error("Promise was rejected with a falsy value");
          (n.reason = e), (e = n);
        }
        return t(e);
      }
      (t.promisify = function (e) {
        if ("function" != typeof e)
          throw TypeError('The "original" argument must be of type Function');
        if (j && e[j]) {
          var t = e[j];
          if ("function" != typeof t)
            throw TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, j, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        function t() {
          for (
            var t,
              n,
              r = new Promise(function (e, r) {
                (t = e), (n = r);
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o]);
          i.push(function (e, r) {
            e ? n(e) : t(r);
          });
          try {
            e.apply(this, i);
          } catch (e) {
            n(e);
          }
          return r;
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          j &&
            Object.defineProperty(t, j, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, i(e))
        );
      }),
        (t.promisify.custom = j),
        (t.callbackify = function (e) {
          if ("function" != typeof e)
            throw TypeError('The "original" argument must be of type Function');
          function t() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t.push(arguments[n]);
            var i = t.pop();
            if ("function" != typeof i)
              throw TypeError("The last argument must be of type Function");
            var o = this,
              a = function () {
                return i.apply(o, arguments);
              };
            e.apply(this, t).then(
              function (e) {
                r.nextTick(a.bind(null, null, e));
              },
              function (e) {
                r.nextTick(C.bind(null, e, a));
              }
            );
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            Object.defineProperties(t, i(e)),
            t
          );
        });
    },
    52505: function (e, t, n) {
      "use strict";
      var r = n(55278),
        i = n(40973),
        o = n(34573),
        a = n(12737),
        s = n(77502),
        u = a("Object.prototype.toString"),
        l = n(10698)(),
        c = "undefined" == typeof globalThis ? n.g : globalThis,
        f = i(),
        d = a("String.prototype.slice"),
        h = Object.getPrototypeOf,
        p =
          a("Array.prototype.indexOf", !0) ||
          function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
          },
        y = { __proto__: null };
      l && s && h
        ? r(f, function (e) {
            var t = new c[e]();
            if (Symbol.toStringTag in t) {
              var n = h(t),
                r = s(n, Symbol.toStringTag);
              r || (r = s(h(n), Symbol.toStringTag)), (y["$" + e] = o(r.get));
            }
          })
        : r(f, function (e) {
            var t = new c[e](),
              n = t.slice || t.set;
            n && (y["$" + e] = o(n));
          });
      var v = function (e) {
          var t = !1;
          return (
            r(y, function (n, r) {
              if (!t)
                try {
                  "$" + n(e) === r && (t = d(r, 1));
                } catch (e) {}
            }),
            t
          );
        },
        b = function (e) {
          var t = !1;
          return (
            r(y, function (n, r) {
              if (!t)
                try {
                  n(e), (t = d(r, 1));
                } catch (e) {}
            }),
            t
          );
        };
      e.exports = function (e) {
        if (!e || "object" != typeof e) return !1;
        if (!l) {
          var t = d(u(e), 8, -1);
          return p(f, t) > -1 ? t : "Object" === t && b(e);
        }
        return s ? v(e) : null;
      };
    },
    40973: function (e, t, n) {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        i = "undefined" == typeof globalThis ? n.g : globalThis;
      e.exports = function () {
        for (var e = [], t = 0; t < r.length; t++)
          "function" == typeof i[r[t]] && (e[e.length] = r[t]);
        return e;
      };
    },
  },
]);
