"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2278],
  {
    27940: function (e, t, n) {
      n.d(t, {
        d: function () {
          return d;
        },
        f: function () {
          return c;
        },
      });
      var r = n(27378),
        o = n(22652),
        l = n(36616),
        i = n(85804),
        u = n(92296),
        a = n(11981);
      let s = (0, r.createContext)(null);
      function c() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, a.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(s.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let d = Object.assign(
        (0, l.yV)(function (e, t) {
          let n = (0, o.M)(),
            { id: a = `headlessui-description-${n}`, ...c } = e,
            d = (function e() {
              let t = (0, r.useContext)(s);
              if (null === t) {
                let t = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            f = (0, u.T)(t);
          (0, i.e)(() => d.register(a), [a, d.register]);
          let p = { ref: f, ...d.props, id: a };
          return (0,
          l.sY)({ ourProps: p, theirProps: c, slot: d.slot || {}, defaultTag: "p", name: d.name || "Description" });
        }),
        {}
      );
    },
    2262: function (e, t, n) {
      let r, o;
      n.d(t, {
        V: function () {
          return eg;
        },
      });
      var l,
        i,
        u,
        a,
        s,
        c,
        d = n(27378),
        f = n.t(d, 2),
        p = n(57953),
        m = n(36616),
        v = n(92296),
        h = n(7723),
        g = n(54518),
        E = n(22652),
        b = n(1074),
        w = n(14784),
        y = n(4818),
        T = n(11981),
        S = n(73777),
        C =
          (((l = C || {})[(l.Forwards = 0)] = "Forwards"),
          (l[(l.Backwards = 1)] = "Backwards"),
          l),
        O = n(66412),
        P = n(37957),
        L = n(37349);
      function F(e, t, n, r) {
        let o = (0, L.E)(n);
        (0, d.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      var A = n(96661);
      function M(e, t) {
        let n = (0, d.useRef)([]),
          r = (0, T.z)(e);
        (0, d.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      var N = n(84625);
      function R(e) {
        let t = (0, T.z)(e),
          n = (0, d.useRef)(!1);
        (0, d.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, A.Y)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
      function k(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current)
          n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      var x =
        (((i = x || {})[(i.None = 1)] = "None"),
        (i[(i.InitialFocus = 2)] = "InitialFocus"),
        (i[(i.TabLock = 4)] = "TabLock"),
        (i[(i.FocusLock = 8)] = "FocusLock"),
        (i[(i.RestoreFocus = 16)] = "RestoreFocus"),
        (i[(i.All = 30)] = "All"),
        i);
      let D = Object.assign(
          (0, m.yV)(function (e, t) {
            let n,
              r = (0, d.useRef)(null),
              o = (0, v.T)(r, t),
              { initialFocus: l, containers: i, features: u = 30, ...a } = e;
            (0, b.H)() || (u = 1);
            let s = (0, P.i)(r);
            !(function ({ ownerDocument: e }, t) {
              let n = (function (e = !0) {
                let t = (0, d.useRef)(H.slice());
                return (
                  M(
                    ([e], [n]) => {
                      !0 === n &&
                        !1 === e &&
                        (0, A.Y)(() => {
                          t.current.splice(0);
                        }),
                        !1 === n && !0 === e && (t.current = H.slice());
                    },
                    [e, H, t]
                  ),
                  (0, T.z)(() => {
                    var e;
                    return null !=
                      (e = t.current.find((e) => null != e && e.isConnected))
                      ? e
                      : null;
                  })
                );
              })(t);
              M(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) &&
                    (0, y.C5)(n()));
              }, [t]),
                R(() => {
                  t && (0, y.C5)(n());
                });
            })({ ownerDocument: s }, Boolean(16 & u));
            let c = (function (
              { ownerDocument: e, container: t, initialFocus: n },
              r
            ) {
              let o = (0, d.useRef)(null),
                l = (0, O.t)();
              return (
                M(() => {
                  if (!r) return;
                  let i = t.current;
                  i &&
                    (0, A.Y)(() => {
                      if (!l.current) return;
                      let t = null == e ? void 0 : e.activeElement;
                      if (null != n && n.current) {
                        if ((null == n ? void 0 : n.current) === t) {
                          o.current = t;
                          return;
                        }
                      } else if (i.contains(t)) {
                        o.current = t;
                        return;
                      }
                      null != n && n.current
                        ? (0, y.C5)(n.current)
                        : (0, y.jA)(i, y.TO.First) === y.fE.Error &&
                          console.warn(
                            "There are no focusable elements inside the <FocusTrap />"
                          ),
                        (o.current = null == e ? void 0 : e.activeElement);
                    });
                }, [r]),
                o
              );
            })(
              { ownerDocument: s, container: r, initialFocus: l },
              Boolean(2 & u)
            );
            !(function (
              {
                ownerDocument: e,
                container: t,
                containers: n,
                previousActiveElement: r,
              },
              o
            ) {
              let l = (0, O.t)();
              F(
                null == e ? void 0 : e.defaultView,
                "focus",
                (e) => {
                  if (!o || !l.current) return;
                  let i = k(n);
                  t.current instanceof HTMLElement && i.add(t.current);
                  let u = r.current;
                  if (!u) return;
                  let a = e.target;
                  a && a instanceof HTMLElement
                    ? j(i, a)
                      ? ((r.current = a), (0, y.C5)(a))
                      : (e.preventDefault(), e.stopPropagation(), (0, y.C5)(u))
                    : (0, y.C5)(r.current);
                },
                !0
              );
            })(
              {
                ownerDocument: s,
                container: r,
                containers: i,
                previousActiveElement: c,
              },
              Boolean(8 & u)
            );
            let f =
                ((n = (0, d.useRef)(0)),
                (0, S.s)(
                  "keydown",
                  (e) => {
                    "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0);
                  },
                  !0
                ),
                n),
              h = (0, T.z)((e) => {
                let t = r.current;
                t &&
                  (0, p.E)(f.current, {
                    [C.Forwards]: () => {
                      (0, y.jA)(t, y.TO.First, {
                        skipElements: [e.relatedTarget],
                      });
                    },
                    [C.Backwards]: () => {
                      (0, y.jA)(t, y.TO.Last, {
                        skipElements: [e.relatedTarget],
                      });
                    },
                  });
              }),
              g = (0, N.G)(),
              E = (0, d.useRef)(!1);
            return d.createElement(
              d.Fragment,
              null,
              Boolean(4 & u) &&
                d.createElement(w._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: h,
                  features: w.A.Focusable,
                }),
              (0, m.sY)({
                ourProps: {
                  ref: o,
                  onKeyDown(e) {
                    "Tab" == e.key &&
                      ((E.current = !0),
                      g.requestAnimationFrame(() => {
                        E.current = !1;
                      }));
                  },
                  onBlur(e) {
                    let t = k(i);
                    r.current instanceof HTMLElement && t.add(r.current);
                    let n = e.relatedTarget;
                    n instanceof HTMLElement &&
                      "true" !== n.dataset.headlessuiFocusGuard &&
                      (j(t, n) ||
                        (E.current
                          ? (0, y.jA)(
                              r.current,
                              (0, p.E)(f.current, {
                                [C.Forwards]: () => y.TO.Next,
                                [C.Backwards]: () => y.TO.Previous,
                              }) | y.TO.WrapAround,
                              { relativeTo: e.target }
                            )
                          : e.target instanceof HTMLElement &&
                            (0, y.C5)(e.target)));
                  },
                },
                theirProps: a,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              Boolean(4 & u) &&
                d.createElement(w._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: h,
                  features: w.A.Focusable,
                })
            );
          }),
          { features: x }
        ),
        H = [];
      function j(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            H[0] !== e.target &&
            (H.unshift(e.target),
            (H = H.filter((e) => null != e && e.isConnected)).splice(10));
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var I = n(31542),
        V = n(85804);
      let z = (0, d.createContext)(!1);
      function Y(e) {
        return d.createElement(z.Provider, { value: e.force }, e.children);
      }
      var B = n(68366);
      let _ = d.Fragment,
        U = d.Fragment,
        $ = (0, d.createContext)(null),
        W = (0, d.createContext)(null),
        q = Object.assign(
          (0, m.yV)(function (e, t) {
            let n = (0, d.useRef)(null),
              r = (0, v.T)(
                (0, v.h)((e) => {
                  n.current = e;
                }),
                t
              ),
              o = (0, P.i)(n),
              l = (function (e) {
                let t = (0, d.useContext)(z),
                  n = (0, d.useContext)($),
                  r = (0, P.i)(e),
                  [o, l] = (0, d.useState)(() => {
                    if ((!t && null !== n) || B.O.isServer) return null;
                    let e =
                      null == r
                        ? void 0
                        : r.getElementById("headlessui-portal-root");
                    if (e) return e;
                    if (null === r) return null;
                    let o = r.createElement("div");
                    return (
                      o.setAttribute("id", "headlessui-portal-root"),
                      r.body.appendChild(o)
                    );
                  });
                return (
                  (0, d.useEffect)(() => {
                    null !== o &&
                      ((null != r && r.body.contains(o)) ||
                        null == r ||
                        r.body.appendChild(o));
                  }, [o, r]),
                  (0, d.useEffect)(() => {
                    t || (null !== n && l(n.current));
                  }, [n, l, t]),
                  o
                );
              })(n),
              [i] = (0, d.useState)(() => {
                var e;
                return B.O.isServer
                  ? null
                  : null != (e = null == o ? void 0 : o.createElement("div"))
                  ? e
                  : null;
              }),
              u = (0, d.useContext)(W),
              a = (0, b.H)();
            return (
              (0, V.e)(() => {
                !l ||
                  !i ||
                  l.contains(i) ||
                  (i.setAttribute("data-headlessui-portal", ""),
                  l.appendChild(i));
              }, [l, i]),
              (0, V.e)(() => {
                if (i && u) return u.register(i);
              }, [u, i]),
              R(() => {
                var e;
                l &&
                  i &&
                  (i instanceof Node && l.contains(i) && l.removeChild(i),
                  l.childNodes.length <= 0 &&
                    (null == (e = l.parentElement) || e.removeChild(l)));
              }),
              a && l && i
                ? (0, I.createPortal)(
                    (0, m.sY)({
                      ourProps: { ref: r },
                      theirProps: e,
                      defaultTag: _,
                      name: "Portal",
                    }),
                    i
                  )
                : null
            );
          }),
          {
            Group: (0, m.yV)(function (e, t) {
              let { target: n, ...r } = e,
                o = { ref: (0, v.T)(t) };
              return d.createElement(
                $.Provider,
                { value: n },
                (0, m.sY)({
                  ourProps: o,
                  theirProps: r,
                  defaultTag: U,
                  name: "Popover.Group",
                })
              );
            }),
          }
        );
      var Z = n(27940),
        G = n(1635);
      let K = (0, d.createContext)(() => {});
      K.displayName = "StackContext";
      var J =
        (((u = J || {})[(u.Add = 0)] = "Add"),
        (u[(u.Remove = 1)] = "Remove"),
        u);
      function X({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: o,
      }) {
        let l = (0, d.useContext)(K),
          i = (0, T.z)((...e) => {
            null == t || t(...e), l(...e);
          });
        return (
          (0, V.e)(() => {
            let e = void 0 === o || !0 === o;
            return (
              e && i(0, n, r),
              () => {
                e && i(1, n, r);
              }
            );
          }, [i, n, r, o]),
          d.createElement(K.Provider, { value: i }, e)
        );
      }
      var Q = n(16490);
      let {
        useState: ee,
        useEffect: et,
        useLayoutEffect: en,
        useDebugValue: er,
      } = f;
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement;
      let eo = f.useSyncExternalStore;
      var el = n(71907);
      let ei =
        ((a = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : { doc: e, count: 0, d: (0, el.k)(), meta: new Set() };
            return r.count++, r.meta.add(t), this.set(e, r), this;
          },
          POP(e, t) {
            let n = this.get(e);
            return n && (n.count--, n.meta.delete(t)), this;
          },
          SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
            let r, o;
            let l = {
                doc: e,
                d: t,
                meta: (function (e) {
                  let t = {};
                  for (let n of e) Object.assign(t, n(t));
                  return t;
                })(n),
              },
              i = [
                /iPhone/gi.test(window.navigator.platform) ||
                (/Mac/gi.test(window.navigator.platform) &&
                  window.navigator.maxTouchPoints > 0)
                  ? {
                      before() {
                        r = window.pageYOffset;
                      },
                      after({ doc: e, d: t, meta: n }) {
                        function o(e) {
                          return n.containers
                            .flatMap((e) => e())
                            .some((t) => t.contains(e));
                        }
                        t.microTask(() => {
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let n = (0, el.k)();
                            n.style(
                              e.documentElement,
                              "scroll-behavior",
                              "auto"
                            ),
                              t.add(() => t.microTask(() => n.dispose()));
                          }
                          t.style(e.body, "marginTop", `-${r}px`),
                            window.scrollTo(0, 0);
                          let n = null;
                          t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (t.target instanceof HTMLElement)
                                try {
                                  let r = t.target.closest("a");
                                  if (!r) return;
                                  let { hash: l } = new URL(r.href),
                                    i = e.querySelector(l);
                                  i && !o(i) && (n = i);
                                } catch {}
                            },
                            !0
                          ),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                e.target instanceof HTMLElement &&
                                  !o(e.target) &&
                                  e.preventDefault();
                              },
                              { passive: !1 }
                            ),
                            t.add(() => {
                              window.scrollTo(0, window.pageYOffset + r),
                                n &&
                                  n.isConnected &&
                                  (n.scrollIntoView({ block: "nearest" }),
                                  (n = null));
                            });
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: e }) {
                    var t;
                    let n = e.documentElement;
                    o =
                      (null != (t = e.defaultView) ? t : window).innerWidth -
                      n.clientWidth;
                  },
                  after({ doc: e, d: t }) {
                    let n = e.documentElement,
                      r = o - (n.clientWidth - n.offsetWidth);
                    t.style(n, "paddingRight", `${r}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            i.forEach(({ before: e }) => (null == e ? void 0 : e(l))),
              i.forEach(({ after: e }) => (null == e ? void 0 : e(l)));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (r = new Map()),
        (o = new Set()),
        {
          getSnapshot: () => r,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e, ...t) {
            let n = a[e].call(r, ...t);
            n && ((r = n), o.forEach((e) => e()));
          },
        });
      ei.subscribe(() => {
        let e = ei.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            ei.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && ei.dispatch("TEARDOWN", n);
        }
      });
      let eu = new Map(),
        ea = new Map();
      function es(e, t = !0) {
        (0, V.e)(() => {
          var n;
          if (!t) return;
          let r = "function" == typeof e ? e() : e.current;
          if (!r) return;
          let o = null != (n = ea.get(r)) ? n : 0;
          return (
            ea.set(r, o + 1),
            0 !== o ||
              (eu.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert,
              }),
              r.setAttribute("aria-hidden", "true"),
              (r.inert = !0)),
            function () {
              var e;
              if (!r) return;
              let t = null != (e = ea.get(r)) ? e : 1;
              if ((1 === t ? ea.delete(r) : ea.set(r, t - 1), 1 !== t)) return;
              let n = eu.get(r);
              n &&
                (null === n["aria-hidden"]
                  ? r.removeAttribute("aria-hidden")
                  : r.setAttribute("aria-hidden", n["aria-hidden"]),
                (r.inert = n.inert),
                eu.delete(r));
            }
          );
        }, [e, t]);
      }
      var ec =
          (((s = ec || {})[(s.Open = 0)] = "Open"),
          (s[(s.Closed = 1)] = "Closed"),
          s),
        ed = (((c = ed || {})[(c.SetTitleId = 0)] = "SetTitleId"), c);
      let ef = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        ep = (0, d.createContext)(null);
      function em(e) {
        let t = (0, d.useContext)(ep);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, em), t);
        }
        return t;
      }
      function ev(e, t) {
        return (0, p.E)(t.type, ef, e, t);
      }
      ep.displayName = "DialogContext";
      let eh = m.AN.RenderStrategy | m.AN.Static,
        eg = Object.assign(
          (0, m.yV)(function (e, t) {
            var n;
            let r, o, l, i, u;
            let a = (0, E.M)(),
              {
                id: s = `headlessui-dialog-${a}`,
                open: c,
                onClose: f,
                initialFocus: g,
                __demoMode: y = !1,
                ...S
              } = e,
              [C, O] = (0, d.useState)(0),
              L = (0, G.oJ)();
            void 0 === c && null !== L && (c = (L & G.ZM.Open) === G.ZM.Open);
            let A = (0, d.useRef)(null),
              M = (0, v.T)(A, t),
              N = (0, P.i)(A),
              R = e.hasOwnProperty("open") || null !== L,
              k = e.hasOwnProperty("onClose");
            if (!R && !k)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!R)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!k)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if ("boolean" != typeof c)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`
              );
            if ("function" != typeof f)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${f}`
              );
            let x = c ? 0 : 1,
              [H, j] = (0, d.useReducer)(ev, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, d.createRef)(),
              }),
              I = (0, T.z)(() => f(!1)),
              z = (0, T.z)((e) => j({ type: 0, id: e })),
              B = !!(0, b.H)() && !y && 0 === x,
              _ = C > 1,
              U = null !== (0, d.useContext)(ep),
              [$, K] =
                ((r = (0, d.useContext)(W)),
                (o = (0, d.useRef)([])),
                (l = (0, T.z)(
                  (e) => (o.current.push(e), r && r.register(e), () => i(e))
                )),
                (i = (0, T.z)((e) => {
                  let t = o.current.indexOf(e);
                  -1 !== t && o.current.splice(t, 1), r && r.unregister(e);
                })),
                (u = (0, d.useMemo)(
                  () => ({ register: l, unregister: i, portals: o }),
                  [l, i, o]
                )),
                [
                  o,
                  (0, d.useMemo)(
                    () =>
                      function ({ children: e }) {
                        return d.createElement(W.Provider, { value: u }, e);
                      },
                    [u]
                  ),
                ]),
              {
                resolveContainers: ee,
                mainTreeNodeRef: et,
                MainTreeNode: en,
              } = (function ({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: n,
              } = {}) {
                var r;
                let o = (0, d.useRef)(
                    null != (r = null == n ? void 0 : n.current) ? r : null
                  ),
                  l = (0, P.i)(o),
                  i = (0, T.z)(() => {
                    var n;
                    let r = [];
                    for (let t of e)
                      null !== t &&
                        (t instanceof HTMLElement
                          ? r.push(t)
                          : "current" in t &&
                            t.current instanceof HTMLElement &&
                            r.push(t.current));
                    if (null != t && t.current)
                      for (let e of t.current) r.push(e);
                    for (let e of null !=
                    (n =
                      null == l
                        ? void 0
                        : l.querySelectorAll("html > *, body > *"))
                      ? n
                      : [])
                      e !== document.body &&
                        e !== document.head &&
                        e instanceof HTMLElement &&
                        "headlessui-portal-root" !== e.id &&
                        (e.contains(o.current) ||
                          r.some((t) => e.contains(t)) ||
                          r.push(e));
                    return r;
                  });
                return {
                  resolveContainers: i,
                  contains: (0, T.z)((e) => i().some((t) => t.contains(e))),
                  mainTreeNodeRef: o,
                  MainTreeNode: (0, d.useMemo)(
                    () =>
                      function () {
                        return null != n
                          ? null
                          : d.createElement(w._, {
                              features: w.A.Hidden,
                              ref: o,
                            });
                      },
                    [o, n]
                  ),
                };
              })({
                portals: $,
                defaultContainers: [
                  null != (n = H.panelRef.current) ? n : A.current,
                ],
              }),
              er = null !== L && (L & G.ZM.Closing) === G.ZM.Closing;
            es(
              (0, d.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e = null == N ? void 0 : N.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).find(
                    (e) =>
                      "headlessui-portal-root" !== e.id &&
                      e.contains(et.current) &&
                      e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [et]),
              !U && !er && B
            ),
              es(
                (0, d.useCallback)(() => {
                  var e, t;
                  return null !=
                    (t = Array.from(
                      null !=
                        (e =
                          null == N
                            ? void 0
                            : N.querySelectorAll("[data-headlessui-portal]"))
                        ? e
                        : []
                    ).find(
                      (e) => e.contains(et.current) && e instanceof HTMLElement
                    ))
                    ? t
                    : null;
                }, [et]),
                !!_ || B
              ),
              (0, Q.O)(ee, I, !(!B || _));
            let el = !(_ || 0 !== x);
            F(null == N ? void 0 : N.defaultView, "keydown", (e) => {
              el &&
                (e.defaultPrevented ||
                  (e.key === h.R.Escape &&
                    (e.preventDefault(), e.stopPropagation(), I())));
            }),
              (function (e, t, n = () => [document.body]) {
                var r;
                let o, l;
                (r = (e) => {
                  var t;
                  return {
                    containers: [...(null != (t = e.containers) ? t : []), n],
                  };
                }),
                  (o = eo(ei.subscribe, ei.getSnapshot, ei.getSnapshot)),
                  (l = e ? o.get(e) : void 0) && l.count,
                  (0, V.e)(() => {
                    if (!(!e || !t))
                      return (
                        ei.dispatch("PUSH", e, r),
                        () => ei.dispatch("POP", e, r)
                      );
                  }, [t, e]);
              })(N, !(er || 0 !== x || U), ee),
              (0, d.useEffect)(() => {
                if (0 !== x || !A.current) return;
                let e = new ResizeObserver((e) => {
                  for (let t of e) {
                    let e = t.target.getBoundingClientRect();
                    0 === e.x &&
                      0 === e.y &&
                      0 === e.width &&
                      0 === e.height &&
                      I();
                  }
                });
                return e.observe(A.current), () => e.disconnect();
              }, [x, A, I]);
            let [eu, ea] = (0, Z.f)(),
              ec = (0, d.useMemo)(
                () => [{ dialogState: x, close: I, setTitleId: z }, H],
                [x, H, I, z]
              ),
              ed = (0, d.useMemo)(() => ({ open: 0 === x }), [x]),
              ef = {
                ref: M,
                id: s,
                role: "dialog",
                "aria-modal": 0 === x || void 0,
                "aria-labelledby": H.titleId,
                "aria-describedby": eu,
              };
            return d.createElement(
              X,
              {
                type: "Dialog",
                enabled: 0 === x,
                element: A,
                onUpdate: (0, T.z)((e, t) => {
                  "Dialog" === t &&
                    (0, p.E)(e, {
                      [J.Add]: () => O((e) => e + 1),
                      [J.Remove]: () => O((e) => e - 1),
                    });
                }),
              },
              d.createElement(
                Y,
                { force: !0 },
                d.createElement(
                  q,
                  null,
                  d.createElement(
                    ep.Provider,
                    { value: ec },
                    d.createElement(
                      q.Group,
                      { target: A },
                      d.createElement(
                        Y,
                        { force: !1 },
                        d.createElement(
                          ea,
                          { slot: ed, name: "Dialog.Description" },
                          d.createElement(
                            D,
                            {
                              initialFocus: g,
                              containers: ee,
                              features: B
                                ? (0, p.E)(_ ? "parent" : "leaf", {
                                    parent: D.features.RestoreFocus,
                                    leaf:
                                      D.features.All & ~D.features.FocusLock,
                                  })
                                : D.features.None,
                            },
                            d.createElement(
                              K,
                              null,
                              (0, m.sY)({
                                ourProps: ef,
                                theirProps: S,
                                slot: ed,
                                defaultTag: "div",
                                features: eh,
                                visible: 0 === x,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              d.createElement(en, null)
            );
          }),
          {
            Backdrop: (0, m.yV)(function (e, t) {
              let n = (0, E.M)(),
                { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
                [{ dialogState: l }, i] = em("Dialog.Backdrop"),
                u = (0, v.T)(t);
              (0, d.useEffect)(() => {
                if (null === i.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                  );
              }, [i.panelRef]);
              let a = (0, d.useMemo)(() => ({ open: 0 === l }), [l]);
              return d.createElement(
                Y,
                { force: !0 },
                d.createElement(
                  q,
                  null,
                  (0, m.sY)({
                    ourProps: { ref: u, id: r, "aria-hidden": !0 },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  })
                )
              );
            }),
            Panel: (0, m.yV)(function (e, t) {
              let n = (0, E.M)(),
                { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
                [{ dialogState: l }, i] = em("Dialog.Panel"),
                u = (0, v.T)(t, i.panelRef),
                a = (0, d.useMemo)(() => ({ open: 0 === l }), [l]),
                s = (0, T.z)((e) => {
                  e.stopPropagation();
                });
              return (0,
              m.sY)({ ourProps: { ref: u, id: r, onClick: s }, theirProps: o, slot: a, defaultTag: "div", name: "Dialog.Panel" });
            }),
            Overlay: (0, m.yV)(function (e, t) {
              let n = (0, E.M)(),
                { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
                [{ dialogState: l, close: i }] = em("Dialog.Overlay"),
                u = (0, v.T)(t),
                a = (0, T.z)((e) => {
                  if (e.target === e.currentTarget) {
                    if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), i();
                  }
                }),
                s = (0, d.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              m.sY)({ ourProps: { ref: u, id: r, "aria-hidden": !0, onClick: a }, theirProps: o, slot: s, defaultTag: "div", name: "Dialog.Overlay" });
            }),
            Title: (0, m.yV)(function (e, t) {
              let n = (0, E.M)(),
                { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
                [{ dialogState: l, setTitleId: i }] = em("Dialog.Title"),
                u = (0, v.T)(t);
              (0, d.useEffect)(() => (i(r), () => i(null)), [r, i]);
              let a = (0, d.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              m.sY)({ ourProps: { ref: u, id: r }, theirProps: o, slot: a, defaultTag: "h2", name: "Dialog.Title" });
            }),
            Description: Z.d,
          }
        );
    },
    7723: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    83341: function (e, t, n) {
      n.d(t, {
        u: function () {
          return k;
        },
      });
      var r,
        o = n(27378),
        l = n(36616),
        i = n(1635),
        u = n(57953),
        a = n(66412),
        s = n(85804),
        c = n(37349),
        d = n(1074),
        f = n(92296),
        p = n(71907);
      function m(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function v(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var h = n(84625),
        g = n(11981),
        E = n(82622),
        b = n(21743);
      function w(e = "") {
        return e.split(" ").filter((e) => e.trim().length > 1);
      }
      let y = (0, o.createContext)(null);
      y.displayName = "TransitionContext";
      var T = (((r = T || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let S = (0, o.createContext)(null);
      function C(e) {
        return "children" in e
          ? C(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function O(e, t) {
        let n = (0, c.E)(e),
          r = (0, o.useRef)([]),
          i = (0, a.t)(),
          s = (0, h.G)(),
          d = (0, g.z)((e, t = l.l4.Hidden) => {
            let o = r.current.findIndex(({ el: t }) => t === e);
            -1 !== o &&
              ((0, u.E)(t, {
                [l.l4.Unmount]() {
                  r.current.splice(o, 1);
                },
                [l.l4.Hidden]() {
                  r.current[o].state = "hidden";
                },
              }),
              s.microTask(() => {
                var e;
                !C(r) && i.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, g.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => d(e, l.l4.Unmount)
            );
          }),
          p = (0, o.useRef)([]),
          m = (0, o.useRef)(Promise.resolve()),
          v = (0, o.useRef)({ enter: [], leave: [], idle: [] }),
          E = (0, g.z)((e, n, r) => {
            p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(v.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (m.current = m.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          b = (0, g.z)((e, t, n) => {
            Promise.all(v.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: E,
            onStop: b,
            wait: m,
            chains: v,
          }),
          [f, d, r, E, b, v, m]
        );
      }
      function P() {}
      S.displayName = "NestingContext";
      let L = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function F(e) {
        var t;
        let n = {};
        for (let r of L) n[r] = null != (t = e[r]) ? t : P;
        return n;
      }
      let A = l.AN.RenderStrategy,
        M = (0, l.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: u = !0, ...a } = e,
            c = (0, o.useRef)(null),
            p = (0, f.T)(c, t);
          (0, d.H)();
          let m = (0, i.oJ)();
          if (
            (void 0 === n && null !== m && (n = (m & i.ZM.Open) === i.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [v, h] = (0, o.useState)(n ? "visible" : "hidden"),
            E = O(() => {
              h("hidden");
            }),
            [b, w] = (0, o.useState)(!0),
            T = (0, o.useRef)([n]);
          (0, s.e)(() => {
            !1 !== b &&
              T.current[T.current.length - 1] !== n &&
              (T.current.push(n), w(!1));
          }, [T, n]);
          let P = (0, o.useMemo)(
            () => ({ show: n, appear: r, initial: b }),
            [n, r, b]
          );
          (0, o.useEffect)(() => {
            if (n) h("visible");
            else if (C(E)) {
              let e = c.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                h("hidden");
            } else h("hidden");
          }, [n, E]);
          let L = { unmount: u },
            F = (0, g.z)(() => {
              var t;
              b && w(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            M = (0, g.z)(() => {
              var t;
              b && w(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return o.createElement(
            S.Provider,
            { value: E },
            o.createElement(
              y.Provider,
              { value: P },
              (0, l.sY)({
                ourProps: {
                  ...L,
                  as: o.Fragment,
                  children: o.createElement(N, {
                    ref: p,
                    ...L,
                    ...a,
                    beforeEnter: F,
                    beforeLeave: M,
                  }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: A,
                visible: "visible" === v,
                name: "Transition",
              })
            )
          );
        }),
        N = (0, l.yV)(function (e, t) {
          var n, r, T;
          let P;
          let {
              beforeEnter: L,
              afterEnter: M,
              beforeLeave: N,
              afterLeave: R,
              enter: k,
              enterFrom: x,
              enterTo: D,
              entered: H,
              leave: j,
              leaveFrom: I,
              leaveTo: V,
              ...z
            } = e,
            Y = (0, o.useRef)(null),
            B = (0, f.T)(Y, t),
            _ = null == (n = z.unmount) || n ? l.l4.Unmount : l.l4.Hidden,
            {
              show: U,
              appear: $,
              initial: W,
            } = (function () {
              let e = (0, o.useContext)(y);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [q, Z] = (0, o.useState)(U ? "visible" : "hidden"),
            G = (function () {
              let e = (0, o.useContext)(S);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: K, unregister: J } = G;
          (0, o.useEffect)(() => K(Y), [K, Y]),
            (0, o.useEffect)(() => {
              if (_ === l.l4.Hidden && Y.current) {
                if (U && "visible" !== q) {
                  Z("visible");
                  return;
                }
                return (0, u.E)(q, { hidden: () => J(Y), visible: () => K(Y) });
              }
            }, [q, Y, K, J, U, _]);
          let X = (0, c.E)({
              base: w(z.className),
              enter: w(k),
              enterFrom: w(x),
              enterTo: w(D),
              entered: w(H),
              leave: w(j),
              leaveFrom: w(I),
              leaveTo: w(V),
            }),
            Q =
              ((T = {
                beforeEnter: L,
                afterEnter: M,
                beforeLeave: N,
                afterLeave: R,
              }),
              (P = (0, o.useRef)(F(T))),
              (0, o.useEffect)(() => {
                P.current = F(T);
              }, [T]),
              P),
            ee = (0, d.H)();
          (0, o.useEffect)(() => {
            if (ee && "visible" === q && null === Y.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [Y, q, ee]);
          let et = $ && U && W,
            en = (0, b.V)(0),
            er = (0, g.z)((e) =>
              (0, u.E)(e, {
                enter: () => {
                  en.addFlag(i.ZM.Opening), Q.current.beforeEnter();
                },
                leave: () => {
                  en.addFlag(i.ZM.Closing), Q.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            eo = (0, g.z)((e) =>
              (0, u.E)(e, {
                enter: () => {
                  en.removeFlag(i.ZM.Opening), Q.current.afterEnter();
                },
                leave: () => {
                  en.removeFlag(i.ZM.Closing), Q.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            el = O(() => {
              Z("hidden"), J(Y);
            }, G);
          !(function ({
            immediate: e,
            container: t,
            direction: n,
            classes: r,
            onStart: o,
            onStop: l,
          }) {
            let i = (0, a.t)(),
              d = (0, h.G)(),
              f = (0, c.E)(n);
            (0, s.e)(() => {
              e && (f.current = "enter");
            }, [e]),
              (0, s.e)(() => {
                let e = (0, p.k)();
                d.add(e.dispose);
                let n = t.current;
                if (n && "idle" !== f.current && i.current) {
                  var a, s, c, h;
                  let t, i, d, g, E, b, w;
                  return (
                    e.dispose(),
                    o.current(f.current),
                    e.add(
                      ((a = n),
                      (s = r.current),
                      (c = "enter" === f.current),
                      (h = () => {
                        e.dispose(), l.current(f.current);
                      }),
                      (i = c ? "enter" : "leave"),
                      (d = (0, p.k)()),
                      (g =
                        void 0 !== h
                          ? ((t = { called: !1 }),
                            (...e) => {
                              if (!t.called) return (t.called = !0), h(...e);
                            })
                          : () => {}),
                      "enter" === i &&
                        (a.removeAttribute("hidden"), (a.style.display = "")),
                      (E = (0, u.E)(i, {
                        enter: () => s.enter,
                        leave: () => s.leave,
                      })),
                      (b = (0, u.E)(i, {
                        enter: () => s.enterTo,
                        leave: () => s.leaveTo,
                      })),
                      (w = (0, u.E)(i, {
                        enter: () => s.enterFrom,
                        leave: () => s.leaveFrom,
                      })),
                      v(
                        a,
                        ...s.base,
                        ...s.enter,
                        ...s.enterTo,
                        ...s.enterFrom,
                        ...s.leave,
                        ...s.leaveFrom,
                        ...s.leaveTo,
                        ...s.entered
                      ),
                      m(a, ...s.base, ...E, ...w),
                      d.nextFrame(() => {
                        v(a, ...s.base, ...E, ...w),
                          m(a, ...s.base, ...E, ...b),
                          (function (e, t) {
                            let n = (0, p.k)();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: o } =
                                getComputedStyle(e),
                              [l, i] = [r, o].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              u = l + i;
                            if (0 !== u) {
                              n.group((n) => {
                                n.setTimeout(() => {
                                  t(), n.dispose();
                                }, u),
                                  n.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        n.dispose();
                                    }
                                  );
                              });
                              let r = n.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), r());
                                }
                              );
                            } else t();
                            n.add(() => t()), n.dispose;
                          })(
                            a,
                            () => (
                              v(a, ...s.base, ...E),
                              m(a, ...s.base, ...s.entered),
                              g()
                            )
                          );
                      }),
                      d.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [n]);
          })({
            immediate: et,
            container: Y,
            classes: X,
            direction: ee && (!W || $) ? (U ? "enter" : "leave") : "idle",
            onStart: (0, c.E)((e) => {
              el.onStart(Y, e, er);
            }),
            onStop: (0, c.E)((e) => {
              el.onStop(Y, e, eo),
                "leave" !== e || C(el) || (Z("hidden"), J(Y));
            }),
          });
          let ei = z;
          return (
            et
              ? (ei = {
                  ...ei,
                  className: (0, E.A)(
                    z.className,
                    ...X.current.enter,
                    ...X.current.enterFrom
                  ),
                })
              : ((ei.className = (0, E.A)(
                  z.className,
                  null == (r = Y.current) ? void 0 : r.className
                )),
                "" === ei.className && delete ei.className),
            o.createElement(
              S.Provider,
              { value: el },
              o.createElement(
                i.up,
                {
                  value:
                    (0, u.E)(q, { visible: i.ZM.Open, hidden: i.ZM.Closed }) |
                    en.flags,
                },
                (0, l.sY)({
                  ourProps: { ref: B },
                  theirProps: ei,
                  defaultTag: "div",
                  features: A,
                  visible: "visible" === q,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        R = (0, l.yV)(function (e, t) {
          let n = null !== (0, o.useContext)(y),
            r = null !== (0, i.oJ)();
          return o.createElement(
            o.Fragment,
            null,
            !n && r
              ? o.createElement(M, { ref: t, ...e })
              : o.createElement(N, { ref: t, ...e })
          );
        }),
        k = Object.assign(M, { Child: R, Root: M });
    },
    84625: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(71907);
      function l() {
        let [e] = (0, r.useState)(o.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    11981: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(37349);
      let l = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    21743: function (e, t, n) {
      n.d(t, {
        V: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(66412);
      function l(e = 0) {
        let [t, n] = (0, r.useState)(e),
          l = (0, o.t)(),
          i = (0, r.useCallback)(
            (e) => {
              l.current && n((t) => t | e);
            },
            [t, l]
          ),
          u = (0, r.useCallback)((e) => Boolean(t & e), [t]);
        return {
          flags: t,
          addFlag: i,
          hasFlag: u,
          removeFlag: (0, r.useCallback)(
            (e) => {
              l.current && n((t) => t & ~e);
            },
            [n, l]
          ),
          toggleFlag: (0, r.useCallback)(
            (e) => {
              l.current && n((t) => t ^ e);
            },
            [n]
          ),
        };
      }
    },
    22652: function (e, t, n) {
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        o = n(27378),
        l = n(85804),
        i = n(1074),
        u = n(68366);
      let a =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, i.H)(),
                [t, n] = o.useState(e ? () => u.O.nextId() : null);
              return (
                (0, l.e)(() => {
                  null === t && n(u.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    66412: function (e, t, n) {
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(85804);
      function l() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    85804: function (e, t, n) {
      n.d(t, {
        e: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(68366);
      let l = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    37349: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(85804);
      function l(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    16490: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = n(27378),
        o = n(4818),
        l = n(37349);
      function i(e, t, n) {
        let o = (0, l.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            o.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var u = n(73777);
      function a(e, t, n = !0) {
        let l = (0, r.useRef)(!1);
        function a(n, r) {
          if (!l.current || n.defaultPrevented) return;
          let i = r(n);
          if (null !== i && i.getRootNode().contains(i) && i.isConnected) {
            for (let t of (function e(t) {
              return "function" == typeof t
                ? e(t())
                : Array.isArray(t) || t instanceof Set
                ? t
                : [t];
            })(e)) {
              if (null === t) continue;
              let e = t instanceof HTMLElement ? t : t.current;
              if (
                (null != e && e.contains(i)) ||
                (n.composed && n.composedPath().includes(e))
              )
                return;
            }
            return (
              (0, o.sP)(i, o.tJ.Loose) ||
                -1 === i.tabIndex ||
                n.preventDefault(),
              t(n, i)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            l.current = n;
          });
        }, [n]);
        let s = (0, r.useRef)(null);
        i(
          "pointerdown",
          (e) => {
            var t, n;
            l.current &&
              (s.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          i(
            "mousedown",
            (e) => {
              var t, n;
              l.current &&
                (s.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          i(
            "click",
            (e) => {
              s.current && (a(e, () => s.current), (s.current = null));
            },
            !0
          ),
          i(
            "touchend",
            (e) =>
              a(e, () => (e.target instanceof HTMLElement ? e.target : null)),
            !0
          ),
          (0, u.s)(
            "blur",
            (e) =>
              a(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    37957: function (e, t, n) {
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(70458);
      function l(...e) {
        return (0, r.useMemo)(() => (0, o.r)(...e), [...e]);
      }
    },
    1074: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r,
        o = n(27378),
        l = n(68366);
      function i() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [i, u] = o.useState(l.O.isHandoffComplete);
        return (
          i && !1 === l.O.isHandoffComplete && u(!1),
          o.useEffect(() => {
            !0 !== i && u(!0);
          }, [i]),
          o.useEffect(() => l.O.handoff(), []),
          !t && i
        );
      }
    },
    92296: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
        h: function () {
          return i;
        },
      });
      var r = n(27378),
        o = n(11981);
      let l = Symbol();
      function i(e, t = !0) {
        return Object.assign(e, { [l]: t });
      }
      function u(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[l]))
          ? void 0
          : n;
      }
    },
    73777: function (e, t, n) {
      n.d(t, {
        s: function () {
          return l;
        },
      });
      var r = n(27378),
        o = n(37349);
      function l(e, t, n) {
        let l = (0, o.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            l.current(e);
          }
          return (
            window.addEventListener(e, t, n),
            () => window.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
    },
    14784: function (e, t, n) {
      n.d(t, {
        A: function () {
          return l;
        },
        _: function () {
          return i;
        },
      });
      var r,
        o = n(36616),
        l =
          (((r = l || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let i = (0, o.yV)(function (e, t) {
        let { features: n = 1, ...r } = e,
          l = {
            ref: t,
            "aria-hidden": (2 & n) == 2 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & n) == 4 && (2 & n) != 2 && { display: "none" }),
            },
          };
        return (0,
        o.sY)({ ourProps: l, theirProps: r, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
    1635: function (e, t, n) {
      n.d(t, {
        ZM: function () {
          return i;
        },
        oJ: function () {
          return u;
        },
        up: function () {
          return a;
        },
      });
      var r,
        o = n(27378);
      let l = (0, o.createContext)(null);
      l.displayName = "OpenClosedContext";
      var i =
        (((r = i || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function u() {
        return (0, o.useContext)(l);
      }
      function a({ value: e, children: t }) {
        return o.createElement(l.Provider, { value: e }, t);
      }
    },
    54518: function (e, t, n) {
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    82622: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    71907: function (e, t, n) {
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, o) => (
                  e.addEventListener(t, r, o),
                  n.add(() => e.removeEventListener(t, r, o))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return n.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return n.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  let t = { current: !0 };
                  return (
                    (0, r.Y)(() => {
                      t.current && e[0]();
                    }),
                    n.add(() => {
                      t.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
      var r = n(96661);
    },
    68366: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      let i = new (class {
        constructor() {
          l(this, "current", this.detect()),
            l(this, "handoffState", "pending"),
            l(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })();
    },
    4818: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return w;
        },
        EO: function () {
          return T;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return p;
        },
        jA: function () {
          return S;
        },
        sP: function () {
          return g;
        },
        tJ: function () {
          return h;
        },
        wI: function () {
          return E;
        },
        z2: function () {
          return y;
        },
      });
      var r,
        o,
        l,
        i,
        u,
        a = n(71907),
        s = n(57953),
        c = n(70458);
      let d = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        p =
          (((o = p || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        m =
          (((l = m || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l);
      function v(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(d)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var h =
        (((i = h || {})[(i.Strict = 0)] = "Strict"),
        (i[(i.Loose = 1)] = "Loose"),
        i);
      function g(e, t = 0) {
        var n;
        return (
          e !== (null == (n = (0, c.r)(e)) ? void 0 : n.body) &&
          (0, s.E)(t, {
            0: () => e.matches(d),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(d)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function E(e) {
        let t = (0, c.r)(e);
        (0, a.k)().nextFrame(() => {
          t && !g(t.activeElement, 0) && w(e);
        });
      }
      var b =
        (((u = b || {})[(u.Keyboard = 0)] = "Keyboard"),
        (u[(u.Mouse = 1)] = "Mouse"),
        u);
      function w(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function y(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let l = r.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function T(e, t) {
        return S(v(), t, { relativeTo: e });
      }
      function S(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
      ) {
        var l, i, u;
        let a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e) ? (n ? y(e) : e) : v(e);
        o.length > 0 && s.length > 1 && (s = s.filter((e) => !o.includes(e))),
          (r = null != r ? r : a.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = s.length,
          h;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (h = s[e]) || h.focus(f), (p += c);
        } while (h !== a.activeElement);
        return (
          6 & t &&
            null !=
              (u =
                null == (i = null == (l = h) ? void 0 : l.matches)
                  ? void 0
                  : i.call(l, "textarea,input")) &&
            u &&
            h.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    57953: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
    },
    96661: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
    },
    70458: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(68366);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    36616: function (e, t, n) {
      n.d(t, {
        AN: function () {
          return a;
        },
        l4: function () {
          return s;
        },
        oA: function () {
          return m;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return p;
        },
      });
      var r,
        o,
        l = n(27378),
        i = n(82622),
        u = n(57953),
        a =
          (((r = a || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: l = !0,
        name: i,
      }) {
        let a = f(t, e);
        if (l) return d(a, n, r, i);
        let s = null != o ? o : 0;
        if (2 & s) {
          let { static: e = !1, ...t } = a;
          if (e) return d(t, n, r, i);
        }
        if (1 & s) {
          let { unmount: e = !0, ...t } = a;
          return (0, u.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, i),
          });
        }
        return d(a, n, r, i);
      }
      function d(e, t = {}, n, r) {
        let {
            as: o = n,
            children: u,
            refName: a = "ref",
            ...s
          } = v(e, ["unmount", "static"]),
          c = void 0 !== e.ref ? { [a]: e.ref } : {},
          d = "function" == typeof u ? u(t) : u;
        "className" in s &&
          s.className &&
          "function" == typeof s.className &&
          (s.className = s.className(t));
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (p["data-headlessui-state"] = n.join(" "));
        }
        if (o === l.Fragment && Object.keys(m(s)).length > 0) {
          if (!(0, l.isValidElement)(d) || (Array.isArray(d) && d.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(s).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = d.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, i.A)(
                      null == e ? void 0 : e.className(...t),
                      s.className
                    )
                : (0, i.A)(null == e ? void 0 : e.className, s.className);
          return (0, l.cloneElement)(
            d,
            Object.assign(
              {},
              f(d.props, m(v(s, ["ref"]))),
              p,
              c,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(d.ref, c.ref),
              t ? { className: t } : {}
            )
          );
        }
        return (0, l.createElement)(
          o,
          Object.assign(
            {},
            v(s, ["ref"]),
            o !== l.Fragment && c,
            o !== l.Fragment && p
          ),
          d
        );
      }
      function f(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, l.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function v(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
]);
