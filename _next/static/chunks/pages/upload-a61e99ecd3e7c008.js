(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1863],
  {
    38944: function (e, t, n) {
      "use strict";
      t.Z = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                else for (n in t) t[n] && (a && (a += " "), (a += n));
              }
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    33675: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/upload",
        function () {
          return n(86587);
        },
      ]);
    },
    37981: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(24246),
        a = n(27378),
        i = n(74418),
        s = n(91125),
        o = n(12565),
        c = n(72906),
        l = n(87173),
        d = n(26172),
        u = n(44893);
      function p(e) {
        let { app: t, editable: n, canEmbed: p, onUpdate: h } = e,
          { user: m } = (0, s.a)(),
          [f, x] = (0, a.useState)(null),
          g = (0, i.n)(m, "developer");
        return (0, r.jsxs)("div", {
          className: "flex w-full",
          children: [
            (0, r.jsx)("div", {
              className: "mr-4",
              children: (0, r.jsx)(d.Z, {
                src: t.iconUrl || "/images/app-cube.png",
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex-1 text-2xs sm:text-xs",
              children: [
                (0, r.jsx)("div", {
                  role: "heading",
                  "aria-level": 4,
                  className: "name text-h4",
                  children:
                    t.appDisplayName || t.name || t.bundle || t.publicKey,
                }),
                (0, r.jsxs)("div", {
                  className: "flex gap-2 mt-2",
                  children: [
                    t.publicKey &&
                      (0, r.jsx)(l.Z, {
                        href: "/app/".concat(t.publicKey),
                        children: (0, r.jsx)("a", {
                          target: "_blank",
                          rel: "noreferrer",
                          className: "dark:text-green",
                          children: "view",
                        }),
                      }),
                    t.publicKey &&
                      p &&
                      (0, r.jsx)(l.Z, {
                        href: "/embed/".concat(t.publicKey),
                        children: (0, r.jsx)("a", {
                          target: "_blank",
                          rel: "noreferrer",
                          className: "dark:text-green",
                          children: "embed",
                        }),
                      }),
                    g &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.Z, {
                            href: "/manage/".concat(t.publicKey),
                            children: (0, r.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              className: "dark:text-green",
                              children: "manage",
                            }),
                          }),
                          (0, r.jsx)(l.Z, {
                            href: "/app/".concat(
                              t.publicKey,
                              "?debug=true&proxy=intercept"
                            ),
                            children: (0, r.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              className: "dark:text-green",
                              children: "debug",
                            }),
                          }),
                        ],
                      }),
                    g &&
                      n &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          t.disabled
                            ? (0, r.jsx)("a", {
                                onClick: () =>
                                  null == h ? void 0 : h({ disabled: !1 }),
                                className: "dark:text-green",
                                children: "enable",
                              })
                            : (0, r.jsx)("a", {
                                onClick: () =>
                                  "disable" !== f ? x("disable") : x(null),
                                className: "dark:text-green",
                                children: "disable",
                              }),
                          (0, r.jsx)("a", {
                            onClick: () =>
                              "delete" !== f ? x("delete") : x(null),
                            className: "dark:text-green",
                            children: "delete",
                          }),
                          t.publicKey &&
                            (0, r.jsx)("a", {
                              onClick: () =>
                                "note" !== f ? x("note") : x(null),
                              className: "dark:text-green",
                              children: t.note ? "edit note" : "add note",
                            }),
                        ],
                      }),
                  ],
                }),
                f &&
                  (0, r.jsxs)("div", {
                    className: "py-4",
                    children: [
                      "disable" === f &&
                        (0, r.jsx)(o.Z, {
                          action: "Disable",
                          confirmWord: "DISABLE",
                          autoFocus: !0,
                          onConfirm: async () => {
                            await (null == h ? void 0 : h({ disabled: !0 })),
                              x(null);
                          },
                          onCancel: () => x(null),
                        }),
                      "delete" === f &&
                        (0, r.jsx)(o.Z, {
                          action: "Delete",
                          confirmWord: "PERMANENT",
                          autoFocus: !0,
                          onConfirm: async () => {
                            await (null == h ? void 0 : h({ deleted: !0 })),
                              x(null);
                          },
                          onCancel: () => x(null),
                        }),
                      "note" === f &&
                        (0, r.jsx)(c.Z, {
                          value: t.note,
                          autoFocus: !0,
                          onConfirm: async (e) => {
                            try {
                              await (null == h ? void 0 : h({ note: e })),
                                x(null);
                            } catch (e) {
                              console.error(e);
                            }
                          },
                          onCancel: () => x(null),
                        }),
                    ],
                  }),
                t.note &&
                  "note" !== f &&
                  (0, r.jsx)("p", {
                    className:
                      "py-2 overflow-hidden whitespace-pre-wrap text-2xs",
                    style: {
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    },
                    children: t.note,
                  }),
                (0, r.jsxs)("span", {
                  children: ["publicKey: ", t.publicKey || "unknown"],
                }),
                " ",
                (0, r.jsx)("br", {}),
                (0, r.jsxs)("span", {
                  children: ["uploaded by: ", t.email || "unknown"],
                }),
                "",
                (0, r.jsx)("br", {}),
                t.bundle &&
                  (0, r.jsxs)("span", {
                    children: [
                      "ios" === t.platform ? "bundle: " : "package: ",
                      t.bundle,
                    ],
                  }),
                " ",
                (0, r.jsxs)("span", {
                  children: ["platform: ", t.platform || "unknown"],
                }),
                " ",
                (0, r.jsx)("br", {}),
                (0, r.jsxs)("span", {
                  children: ["versionName: ", t.appVersionName || "unknown"],
                }),
                " ",
                (0, r.jsxs)("span", {
                  children: ["versionCode: ", t.appVersionCode || "unknown"],
                }),
                " ",
                (0, r.jsx)("br", {}),
                (0, r.jsxs)("span", {
                  children: [
                    "created:",
                    " ",
                    t.created
                      ? (0, r.jsx)(u.Z, {
                          date: new Date(t.created),
                          format: "MMM d, yyyy h:mm a",
                        })
                      : "unknown",
                    " ",
                  ],
                }),
                (0, r.jsxs)("span", {
                  children: [
                    "updated:",
                    " ",
                    t.updated
                      ? (0, r.jsx)(u.Z, {
                          date: new Date(t.updated),
                          format: "MMM d, yyyy h:mm a",
                        })
                      : "unknown",
                    " ",
                  ],
                }),
                (0, r.jsxs)("span", {
                  children: ["update: #", t.versionCode || "unknown"],
                }),
              ],
            }),
          ],
        });
      }
    },
    26172: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(24246),
        a = n(38944);
      function i(e) {
        let { src: t, size: n = "md", className: i, ...s } = e,
          o = Array.isArray(t);
        return (0, r.jsx)("div", {
          ...s,
          className: (0, a.Z)(
            "overflow-hidden",
            o && "border border-black p-2 rounded-lg bg-white",
            "sm" === n && "h-8 w-8 md:h-12 md:w-12",
            "md" === n && "h-10 w-10 md:h-14 md:w-14",
            "lg" === n && "h-16 w-16 md:h-20 md:w-20",
            i
          ),
          children: o
            ? (0, r.jsx)("div", {
                className:
                  "grid grid-cols-2 gap-1 items-center justify-center overflow-hidden",
                children: t
                  .slice(0, 4)
                  .map((e) =>
                    (0, r.jsx)(
                      "img",
                      {
                        src: e,
                        className:
                          "max-w-full align-top rounded object-contain",
                      },
                      e
                    )
                  ),
              })
            : (0, r.jsx)("img", { className: "w-full h-full", src: t }),
        });
      }
    },
    96479: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(24246),
        a = n(38944);
      function i(e) {
        let { size: t = "sm", ...n } = e;
        return (0, r.jsx)("div", {
          ...n,
          className: (0, a.Z)(
            "border rounded-[1.25rem]",
            "bg-gray-50 border-gray-trim",
            "dark:bg-[#1F1F1F] dark:border-gray-dark-trim",
            "sm" === t && "px-3 py-5 md:px-5 md:py-7",
            "md" === t && "px-4 py-6 md:px-6 md:py-8",
            "lg" === t && "px-5 py-7 md:px-8 md:py-10",
            n.className
          ),
        });
      }
    },
    44893: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(24246),
        a = n(57997),
        i = n(27378);
      function s(e) {
        let [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            n(!0);
          }, [e.date]),
          (0, r.jsx)("span", {
            style: { visibility: t ? "visible" : "hidden" },
            suppressHydrationWarning: !0,
            children: (0, r.jsx)("time", {
              dateTime: e.date.toISOString(),
              suppressHydrationWarning: !0,
              children: (0, a.Z)(e.date, e.format),
            }),
          })
        );
      }
    },
    46581: function (e, t, n) {
      "use strict";
      var r = n(24246),
        a = n(27378),
        i = n(75570),
        s = n(62584);
      let o = (0, a.forwardRef)(function (e, t) {
        let { recaptcha: n } = (0, s.ZD)(),
          o = (0, a.useRef)(null);
        function c() {
          setTimeout(() => {
            try {
              var e;
              null === (e = o.current) || void 0 === e || e.reset();
            } catch (e) {
              console.warn(e);
            }
          }, 500);
        }
        return ((0, a.useImperativeHandle)(t, () =>
          o.current
            ? {
                executeAsync: o.current.executeAsync.bind(o.current),
                execute: o.current.execute.bind(o.current),
                reset: c,
              }
            : null
        ),
        n)
          ? (0, r.jsx)("div", {
              id: "recaptcha",
              className: "g-recaptcha",
              children: (0, r.jsx)(i.Z, {
                ref: o,
                size: "invisible",
                ...e,
                sitekey: n.publicSiteKey,
                onExpired: () => {
                  var t;
                  c(), null === (t = e.onExpired) || void 0 === t || t.call(e);
                },
              }),
            })
          : null;
      });
      t.Z = o;
    },
    69267: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(24246),
        a = n(87173);
      function i(e) {
        let { roleRequired: t } = e;
        return (0, r.jsxs)("div", {
          className: "text-center",
          children: [
            (0, r.jsx)("div", {
              className: "h1 inline-block",
              children: "Unauthorized",
            }),
            (0, r.jsxs)("p", {
              children: [
                "You must be an account ",
                t || "admin or developer",
                " to access that page. You are logged in, but do not have the correct role.",
              ],
            }),
            (0, r.jsx)("p", {
              children:
                "You may request developer or admin role from an account admin.",
            }),
            (0, r.jsx)("p", {
              children: (0, r.jsx)(a.Z, {
                href: "/",
                children: (0, r.jsx)("a", { children: "Click to return home" }),
              }),
            }),
            (0, r.jsx)("br", {}),
          ],
        });
      }
    },
    1034: function (e, t, n) {
      "use strict";
      var r = n(27378),
        a = n(64374);
      t.Z = function (e, t) {
        let n = (0, r.useRef)(e);
        (0, a.W)(() => {
          n.current = e;
        }, [e]),
          (0, r.useEffect)(() => {
            if (!t && 0 !== t) return;
            let e = setInterval(() => n.current(), t);
            return () => clearInterval(e);
          }, [t]);
      };
    },
    86587: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n(24246),
        a = n(34090),
        i = n(62584),
        s = n(27378),
        o = n(37981),
        c = n(91125),
        l = n(69267),
        d = n(91173),
        u = n(74418),
        p = n(13551),
        h = n(14877),
        m = n(46581),
        f = n(1034),
        x = n(76131),
        g = n(23037),
        v = n(20464),
        b = n(79894),
        y = n.n(b),
        j = n(78164),
        w = n.n(j);
      function k(e) {
        let { setBackground: t = !1, children: n } = e;
        return (0, r.jsxs)("div", {
          className: "dark",
          children: [
            t &&
              (0, r.jsx)(w(), {
                id: "b52383dc653a946e",
                children: "body{background:var(--color-black-default)}",
              }),
            n,
          ],
        });
      }
      function N(e) {
        return (0, r.jsxs)("svg", {
          ...e,
          viewBox: "0 0 36 36",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("rect", {
              width: "36",
              height: "36",
              rx: "18",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M11.7 24.1746L24.2999 11.7",
              className: "text-black dark:text-white",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M11.7 11.8254L24.2999 24.3",
              className: "text-black dark:text-white",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
            }),
          ],
        });
      }
      var _ = n(96479);
      function E() {
        let { user: e } = (0, c.a)(),
          t = (0, p.ib)(),
          [n, a] = (0, s.useState)(null),
          [i, o] = (0, s.useState)(null);
        async function l(n) {
          o(null);
          try {
            let r = await t("/api/app/create", {
              method: "POST",
              body: {
                ...n.file,
                token: n.token,
                email: n.email,
                sendEmail: !e,
              },
            });
            return a(r), r;
          } catch (e) {
            if ((console.error(e), o(e), e instanceof p.kp && 403 === e.status))
              throw Error(
                "Error uploading app. User specified is a non-developer member of an existing account, or must be logged in to upload apps."
              );
            throw Error("unknown");
          }
        }
        let [d, u] = (0, s.useState)(0),
          m = (0, x.ZP)(
            e && n
              ? "/api/app/".concat(null == n ? void 0 : n.publicKey, "/manage")
              : null
          );
        return (
          (0, f.Z)(() => {
            if (d < 10) {
              var e;
              !n ||
                (null === (e = m.data) || void 0 === e ? void 0 : e.name) ||
                (m.mutate(), u((e) => e + 1));
            }
          }, 1e3),
          (0, s.useEffect)(() => {
            u(0);
          }, [n]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(h.Z, {
                title: "Upload",
                description: (e) => {
                  let { upload: t } = e;
                  return t;
                },
                canonical: "/upload",
              }),
              (0, r.jsxs)("section", {
                children: [
                  e
                    ? (0, r.jsx)(R, {
                        app: m.data,
                        onUpload: (e) => l({ file: e }),
                        onReset: () => {
                          a(null);
                        },
                      })
                    : (0, r.jsx)(C, {
                        app: null != n ? n : m.data,
                        onUpload: (e, t) => {
                          l({
                            file: e,
                            email: null == t ? void 0 : t.email,
                            token: null == t ? void 0 : t.token,
                          });
                        },
                        onReset: () => {
                          a(null);
                        },
                      }),
                  i &&
                    (0, r.jsx)("p", {
                      className: "color-red",
                      style: { marginTop: 10 },
                      children:
                        "unknown" === i.message
                          ? (0, r.jsxs)("span", {
                              children: [
                                "Error creating app. Please try again later, or",
                                " ",
                                (0, r.jsx)("a", {
                                  className: "color-red",
                                  href: "mailto:hello@appetize.io",
                                  children: "email us",
                                }),
                                ".",
                              ],
                            })
                          : i.message,
                    }),
                ],
              }),
            ],
          })
        );
      }
      function R(e) {
        let { app: t, onUpload: n } = e,
          a = (0, c.a)().user;
        return !(0, u.n)(a, "developer") && (0, r.jsx)(l.Z, {})
          ? (0, r.jsx)(l.Z, {})
          : (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", {
                  className: "mt-0 mb-4",
                  children: "Upload an app",
                }),
                (0, r.jsx)(_.Z, {
                  children: (0, r.jsx)(d.Z, {
                    onUpload: n,
                    onError: (e) => {
                      toastr.error(e);
                    },
                    hideUploadButton: !!t,
                  }),
                }),
                t &&
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        className: "my-4 h3",
                        children: "Upload successful",
                      }),
                      (0, r.jsxs)(_.Z, {
                        children: [
                          (0, r.jsx)(o.Z, { app: t, canEmbed: t.isEmbeddable }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("h3", {
                                className: "mt-4 h4",
                                children: "Upload a new app",
                              }),
                              (0, r.jsx)(d._, {
                                allowReupload: !0,
                                onUpload: n,
                                onError: (e) => {
                                  toastr.error(e);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
      }
      function C(e) {
        let { app: t, onUpload: n } = e,
          [i, o] = (0, s.useState)(null),
          c = (0, s.useRef)(null),
          [l, u] = (0, s.useState)(null),
          p = (0, a.TA)({
            initialValues: { email: "" },
            onSubmit: async () => {
              let e;
              if (c.current) {
                var t, r, a;
                try {
                  e =
                    null !==
                      (r = await (null === (t = c.current) || void 0 === t
                        ? void 0
                        : t.executeAsync())) && void 0 !== r
                      ? r
                      : void 0;
                } catch (e) {
                  console.error(e),
                    null === (a = c.current) || void 0 === a || a.reset(),
                    u(
                      "There was an error, please try again or contact hello@appetize.io."
                    );
                }
              }
              i && n(i, { email: p.values.email, token: e });
            },
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("section", {
              children: [
                (0, r.jsx)("div", { className: "h3 mb-4", children: "Step 1" }),
                (0, r.jsx)(_.Z, {
                  size: "lg",
                  children: (0, r.jsx)(d.Z, {
                    onUpload: o,
                    onError: (e) => {
                      toastr.error(e);
                    },
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("section", {
              className: "mt-12",
              children: [
                (0, r.jsx)("div", { className: "h3 mb-4", children: "Step 2" }),
                (0, r.jsx)(_.Z, {
                  size: "lg",
                  children: (0, r.jsxs)("form", {
                    onSubmit: p.handleSubmit,
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsxs)("label", {
                          className: "text-2xs",
                          children: [
                            "Work Email",
                            (0, r.jsx)("input", {
                              type: "email",
                              name: "email",
                              placeholder: "Enter your email",
                              className: "py-3",
                              required: !0,
                              value: p.values.email,
                              onChange: p.handleChange,
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(m.Z, { ref: c, theme: "dark" }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("button", {
                            className:
                              "btn btn-secondary h-12 px-6 overflow-hidden w-full max-w-full sm:w-auto",
                            disabled: !i || p.isSubmitting || !!t,
                            type: "submit",
                            children: t
                              ? "Success, please check your email"
                              : "Generate Links",
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "sm:ml-5 mt-3 text-gray-700 dark:text-white/30 block w-full text-center sm:w-auto sm:inline",
                            children: "We will email you generated links.",
                          }),
                        ],
                      }),
                      l &&
                        (0, r.jsx)("p", {
                          className:
                            "text-red dark:text-red block w-full text-center sm:text-start sm:w-auto",
                          children: l,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      (0, i.G0)(E, function (e) {
        let { children: t } = e,
          { isOnprem: n } = (0, i.ZD)(),
          { user: a } = (0, c.a)(),
          { prevPath: s } = (0, v.Q)();
        return a
          ? (0, r.jsx)(k, {
              setBackground: !0,
              children: (0, r.jsx)(g.Z, { children: t }),
            })
          : (0, r.jsx)(k, {
              setBackground: !0,
              children: (0, r.jsxs)("div", {
                className: "min-h-screen py-8 px-4 container mx-auto max-w-6xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between w-full mb-8",
                    children: [
                      (0, r.jsx)("img", {
                        src: "/images/logos/appetize-light.svg",
                        className: "h-6 md:h-8 mr-4",
                        alt: "Appetize",
                      }),
                      !n &&
                        (0, r.jsxs)(y(), {
                          className:
                            "flex h-10 w-10 items-center justify-center bg-transparent hover:bg-transparent",
                          href: s,
                          children: [
                            (0, r.jsx)("span", {
                              className: "sr-only",
                              children: "Back",
                            }),
                            (0, r.jsx)(N, {
                              className: "h-8 w-8 text-gray dark:text-gray-800",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                    ],
                  }),
                  t,
                ],
              }),
            });
      }),
        (0, i.kK)(E, async (e) => {
          let { guard: t } = e,
            { isOnprem: n } = (0, i.ZD)();
          n && t({ auth: !0 });
        });
    },
    58772: function (e, t, n) {
      "use strict";
      var r = n(90331);
      function a() {}
      function i() {}
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, i, s) {
            if (s !== r) {
              var o = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    23615: function (e, t, n) {
      e.exports = n(58772)();
    },
    90331: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    75570: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r,
        a,
        i = n(27378),
        s = n(23615),
        o = n.n(s);
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var d = (function (e) {
        function t() {
          var t;
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(
              l(t)
            )),
            (t.handleErrored = t.handleErrored.bind(l(t))),
            (t.handleChange = t.handleChange.bind(l(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(l(t))),
            t
          );
        }
        ((n = t).prototype = Object.create(e.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = e);
        var n,
          r = t.prototype;
        return (
          (r.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null;
          }),
          (r.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this._widgetId
              : null;
          }),
          (r.execute = function () {
            var e = this.props.grecaptcha;
            if (e && void 0 !== this._widgetId)
              return e.execute(this._widgetId);
            this._executeRequested = !0;
          }),
          (r.executeAsync = function () {
            var e = this;
            return new Promise(function (t, n) {
              (e.executionResolve = t), (e.executionReject = n), e.execute();
            });
          }),
          (r.reset = function () {
            this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              this.props.grecaptcha.reset(this._widgetId);
          }),
          (r.handleExpired = function () {
            this.props.onExpired
              ? this.props.onExpired()
              : this.handleChange(null);
          }),
          (r.handleErrored = function () {
            this.props.onErrored && this.props.onErrored(),
              this.executionReject &&
                (this.executionReject(),
                delete this.executionResolve,
                delete this.executionReject);
          }),
          (r.handleChange = function (e) {
            this.props.onChange && this.props.onChange(e),
              this.executionResolve &&
                (this.executionResolve(e),
                delete this.executionReject,
                delete this.executionResolve);
          }),
          (r.explicitRender = function () {
            if (
              this.props.grecaptcha &&
              this.props.grecaptcha.render &&
              void 0 === this._widgetId
            ) {
              var e = document.createElement("div");
              (this._widgetId = this.props.grecaptcha.render(e, {
                sitekey: this.props.sitekey,
                callback: this.handleChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                "expired-callback": this.handleExpired,
                "error-callback": this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
              })),
                this.captcha.appendChild(e);
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute());
          }),
          (r.componentDidMount = function () {
            this.explicitRender();
          }),
          (r.componentDidUpdate = function () {
            this.explicitRender();
          }),
          (r.componentWillUnmount = function () {
            void 0 !== this._widgetId &&
              (this.delayOfCaptchaIframeRemoving(), this.reset());
          }),
          (r.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement("div");
            for (
              document.body.appendChild(e), e.style.display = "none";
              this.captcha.firstChild;

            )
              e.appendChild(this.captcha.firstChild);
            setTimeout(function () {
              document.body.removeChild(e);
            }, 5e3);
          }),
          (r.handleRecaptchaRef = function (e) {
            this.captcha = e;
          }),
          (r.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    t.indexOf((n = i[r])) >= 0 || (a[n] = e[n]);
                  return a;
                })(e, [
                  "sitekey",
                  "onChange",
                  "theme",
                  "type",
                  "tabindex",
                  "onExpired",
                  "onErrored",
                  "size",
                  "stoken",
                  "grecaptcha",
                  "badge",
                  "hl",
                ]));
            return i.createElement(
              "div",
              c({}, t, { ref: this.handleRecaptchaRef })
            );
          }),
          t
        );
      })(i.Component);
      (d.displayName = "ReCAPTCHA"),
        (d.propTypes = {
          sitekey: o().string.isRequired,
          onChange: o().func,
          grecaptcha: o().object,
          theme: o().oneOf(["dark", "light"]),
          type: o().oneOf(["image", "audio"]),
          tabindex: o().number,
          onExpired: o().func,
          onErrored: o().func,
          size: o().oneOf(["compact", "normal", "invisible"]),
          stoken: o().string,
          hl: o().string,
          badge: o().oneOf(["bottomright", "bottomleft", "inline"]),
        }),
        (d.defaultProps = {
          onChange: function () {},
          theme: "light",
          type: "image",
          tabindex: 0,
          size: "normal",
          badge: "bottomright",
        });
      var u = n(55839),
        p = n.n(u);
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var m = {},
        f = 0,
        x = "onloadcallback",
        g = ((r = function () {
          return (
            "https://" +
            ((("undefined" != typeof window && window.recaptchaOptions) || {})
              .useRecaptchaNet
              ? "recaptcha.net"
              : "www.google.com") +
            "/recaptcha/api.js?onload=" +
            x +
            "&render=explicit"
          );
        }),
        (a = (a = { callbackName: x, globalName: "grecaptcha" }) || {}),
        function (e) {
          var t = e.displayName || e.name || "Component",
            n = (function (t) {
              function n(e, n) {
                var r;
                return (
                  ((r = t.call(this, e, n) || this).state = {}),
                  (r.__scriptURL = ""),
                  r
                );
              }
              ((s = n).prototype = Object.create(t.prototype)),
                (s.prototype.constructor = s),
                (s.__proto__ = t);
              var s,
                o = n.prototype;
              return (
                (o.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID ||
                      (this.__scriptLoaderID = "async-script-loader-" + f++),
                    this.__scriptLoaderID
                  );
                }),
                (o.setupScriptURL = function () {
                  return (this.__scriptURL = 0 ? r : r()), this.__scriptURL;
                }),
                (o.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this;
                  this.setState(e, function () {
                    return (
                      t.props.asyncScriptOnLoad &&
                      t.props.asyncScriptOnLoad(t.state)
                    );
                  });
                }),
                (o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = m[this.__scriptURL];
                  if (!e || !e.loaded) throw Error("Script is not loaded.");
                  for (var t in e.observers) e.observers[t](e);
                  delete window[a.callbackName];
                }),
                (o.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                    r = a,
                    i = r.globalName,
                    s = r.callbackName,
                    o = r.scriptId;
                  if (
                    (i &&
                      void 0 !== window[i] &&
                      (m[t] = { loaded: !0, observers: {} }),
                    m[t])
                  ) {
                    var c = m[t];
                    if (c && (c.loaded || c.errored)) {
                      this.asyncScriptLoaderHandleLoad(c);
                      return;
                    }
                    c.observers[n] = function (t) {
                      return e.asyncScriptLoaderHandleLoad(t);
                    };
                    return;
                  }
                  var l = {};
                  (l[n] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t);
                  }),
                    (m[t] = { loaded: !1, observers: l });
                  var d = document.createElement("script");
                  for (var u in ((d.src = t), (d.async = !0), a.attributes))
                    d.setAttribute(u, a.attributes[u]);
                  o && (d.id = o);
                  var p = function (e) {
                    if (m[t]) {
                      var n = m[t].observers;
                      for (var r in n) e(n[r]) && delete n[r];
                    }
                  };
                  s &&
                    "undefined" != typeof window &&
                    (window[s] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded();
                    }),
                    (d.onload = function () {
                      var e = m[t];
                      e &&
                        ((e.loaded = !0),
                        p(function (t) {
                          return !s && (t(e), !0);
                        }));
                    }),
                    (d.onerror = function () {
                      var e = m[t];
                      e &&
                        ((e.errored = !0),
                        p(function (t) {
                          return t(e), !0;
                        }));
                    }),
                    document.body.appendChild(d);
                }),
                (o.componentWillUnmount = function () {
                  var e = this.__scriptURL;
                  if (!0 === a.removeOnUnmount)
                    for (
                      var t = document.getElementsByTagName("script"), n = 0;
                      n < t.length;
                      n += 1
                    )
                      t[n].src.indexOf(e) > -1 &&
                        t[n].parentNode &&
                        t[n].parentNode.removeChild(t[n]);
                  var r = m[e];
                  r &&
                    (delete r.observers[
                      this.asyncScriptLoaderGetScriptLoaderID()
                    ],
                    !0 === a.removeOnUnmount && delete m[e]);
                }),
                (o.render = function () {
                  var t = a.globalName,
                    n = this.props,
                    r = (n.asyncScriptOnLoad, n.forwardedRef),
                    s = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        t.indexOf((n = i[r])) >= 0 || (a[n] = e[n]);
                      return a;
                    })(n, ["asyncScriptOnLoad", "forwardedRef"]);
                  return (
                    t &&
                      "undefined" != typeof window &&
                      (s[t] = void 0 !== window[t] ? window[t] : void 0),
                    (s.ref = r),
                    (0, i.createElement)(e, s)
                  );
                }),
                n
              );
            })(i.Component),
            s = (0, i.forwardRef)(function (e, t) {
              return (0, i.createElement)(n, h({}, e, { forwardedRef: t }));
            });
          return (
            (s.displayName = "AsyncScriptLoader(" + t + ")"),
            (s.propTypes = { asyncScriptOnLoad: o().func }),
            p()(s, e)
          );
        })(d);
    },
  },
  function (e) {
    e.O(
      0,
      [9894, 4090, 2278, 9112, 7329, 2097, 2111, 3466, 9774, 2888, 179],
      function () {
        return e((e.s = 33675));
      }
    ),
      (_N_E = e.O());
  },
]);
