(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9894],
  {
    86331: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    78385: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(41470).Z,
        r = o(19868).Z,
        l = n(o(27378)),
        u = o(21981),
        a = o(37493),
        f = o(72432),
        c = o(57320),
        i = o(22985),
        s = o(61936),
        d = o(11296),
        p = o(48545),
        h = o(86331),
        v = o(12995);
      let y = new Set();
      function b(e, t, o, n, r) {
        if (r || a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let r =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + o + "%" + r;
            if (y.has(l)) return;
            y.add(l);
          }
          Promise.resolve(e.prefetch(t, o, n)).catch((e) => {});
        }
      }
      function g(e) {
        return "string" == typeof e ? e : f.formatUrl(e);
      }
      let _ = l.default.forwardRef(function (e, t) {
        let o, n;
        let {
            href: f,
            as: y,
            children: _,
            prefetch: C,
            passHref: m,
            replace: M,
            shallow: k,
            scroll: j,
            locale: E,
            onClick: O,
            onMouseEnter: P,
            onTouchStart: x,
            legacyBehavior: L = !1,
          } = e,
          w = r(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = _),
          L &&
            ("string" == typeof o || "number" == typeof o) &&
            (o = l.default.createElement("a", null, o));
        let R = !1 !== C,
          I = l.default.useContext(s.RouterContext),
          S = l.default.useContext(d.AppRouterContext),
          T = null != I ? I : S,
          U = !I,
          { href: A, as: D } = l.default.useMemo(() => {
            if (!I) {
              let e = g(f);
              return { href: e, as: y ? g(y) : e };
            }
            let [e, t] = u.resolveHref(I, f, !0);
            return { href: e, as: y ? u.resolveHref(I, y) : t || e };
          }, [I, f, y]),
          K = l.default.useRef(A),
          N = l.default.useRef(D);
        L && (n = l.default.Children.only(o));
        let H = L ? n && "object" == typeof n && n.ref : t,
          [B, Z, q] = p.useIntersection({ rootMargin: "200px" }),
          z = l.default.useCallback(
            (e) => {
              (N.current !== D || K.current !== A) &&
                (q(), (N.current = D), (K.current = A)),
                B(e),
                H &&
                  ("function" == typeof H
                    ? H(e)
                    : "object" == typeof H && (H.current = e));
            },
            [D, H, A, q, B]
          );
        l.default.useEffect(() => {
          T && Z && R && b(T, A, D, { locale: E }, U);
        }, [D, A, Z, E, R, null == I ? void 0 : I.locale, T, U]);
        let F = {
          ref: z,
          onClick(e) {
            L || "function" != typeof O || O(e),
              L &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, o, n, r, u, f, c, i, s) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let t = e.currentTarget,
                        o = t.getAttribute("target");
                      return (
                        (o && "_self" !== o) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!i && !a.isLocalURL(o)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[r ? "replace" : "push"](o, n, {
                          shallow: u,
                          locale: c,
                          scroll: f,
                        })
                      : t[r ? "replace" : "push"](n || o, {
                          forceOptimisticNavigation: !s,
                        });
                  };
                  i ? l.default.startTransition(h) : h();
                })(e, T, A, D, M, k, j, E, U, R);
          },
          onMouseEnter(e) {
            L || "function" != typeof P || P(e),
              L &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              T &&
                (R || !U) &&
                b(
                  T,
                  A,
                  D,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  U
                );
          },
          onTouchStart(e) {
            L || "function" != typeof x || x(e),
              L &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              T &&
                (R || !U) &&
                b(
                  T,
                  A,
                  D,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  U
                );
          },
        };
        if (c.isAbsoluteUrl(D)) F.href = D;
        else if (!L || m || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== E ? E : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              h.getDomainLocale(
                D,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales
              );
          F.href =
            t ||
            v.addBasePath(
              i.addLocale(D, e, null == I ? void 0 : I.defaultLocale)
            );
        }
        return L
          ? l.default.cloneElement(n, F)
          : l.default.createElement("a", Object.assign({}, w, F), o);
      });
      (t.default = _),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    48545: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: o, disabled: f } = e,
            c = f || !l,
            [i, s] = n.useState(!1),
            d = n.useRef(null),
            p = n.useCallback((e) => {
              d.current = e;
            }, []);
          n.useEffect(() => {
            if (l) {
              if (c || i) return;
              let e = d.current;
              if (e && e.tagName) {
                let n = (function (e, t, o) {
                  let {
                    id: n,
                    observer: r,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let o = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === o.root && e.margin === o.margin
                      );
                    if (n && (t = u.get(n))) return t;
                    let r = new Map(),
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = r.get(e.target),
                            o = e.isIntersecting || e.intersectionRatio > 0;
                          t && o && t(o);
                        });
                      }, e);
                    return (
                      (t = { id: o, observer: l, elements: r }),
                      a.push(o),
                      u.set(o, t),
                      t
                    );
                  })(o);
                  return (
                    l.set(e, t),
                    r.observe(e),
                    function () {
                      if ((l.delete(e), r.unobserve(e), 0 === l.size)) {
                        r.disconnect(), u.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: o,
                });
                return n;
              }
            } else if (!i) {
              let e = r.requestIdleCallback(() => s(!0));
              return () => r.cancelIdleCallback(e);
            }
          }, [c, o, t, i, d.current]);
          let h = n.useCallback(() => {
            s(!1);
          }, []);
          return [p, i, h];
        });
      var n = o(27378),
        r = o(62555);
      let l = "function" == typeof IntersectionObserver,
        u = new Map(),
        a = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    79894: function (e, t, o) {
      e.exports = o(78385);
    },
  },
]);
