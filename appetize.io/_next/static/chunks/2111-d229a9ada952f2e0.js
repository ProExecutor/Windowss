"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2111],
  {
    87173: function (e, t, n) {
      var s = n(24246),
        a = n(79894),
        i = n.n(a);
      n(27378),
        (t.Z = function (e) {
          return (0, s.jsx)(i(), {
            ...e,
            passHref: !0,
            legacyBehavior: !0,
            children: e.children,
          });
        });
    },
    14877: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(24246),
        a = n(88038),
        i = n.n(a),
        r = n(62584);
      function o(e) {
        let {
            title: t,
            description: n = l.home,
            robots: a = "all",
            canonical: o,
          } = e,
          d = (0, r.ZD)(),
          c = "function" == typeof n ? n(l) : n,
          m = d.disableSEO || d.isOnprem;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(i(), {
              children: [
                t &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("title", { children: t }, "title"),
                      (0, s.jsx)(
                        "meta",
                        { name: "og:title", content: t },
                        "og:title"
                      ),
                      (0, s.jsx)(
                        "meta",
                        { name: "twitter:title", content: t },
                        "twitter:title"
                      ),
                    ],
                  }),
                m
                  ? (0, s.jsx)("meta", { name: "robots", content: "none" })
                  : (0, s.jsx)("meta", { name: "robots", content: a }),
                !m &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      c &&
                        (0, s.jsx)(
                          "meta",
                          { name: "description", content: c },
                          "description"
                        ),
                      c &&
                        (0, s.jsx)(
                          "meta",
                          { property: "og:description", content: c },
                          "og:description"
                        ),
                      c &&
                        (0, s.jsx)(
                          "meta",
                          { property: "twitter:description", content: c },
                          "twitter:description"
                        ),
                      o &&
                        (0, s.jsx)("link", {
                          rel: "canonical",
                          href: o.startsWith("http")
                            ? o
                            : "https://appetize.io".concat(o),
                        }),
                    ],
                  }),
              ],
            }),
            (0, s.jsx)("h1", { className: "sr-only", children: c }),
          ],
        });
      }
      let l = {
        home: "Online web based iOS Simulators and Android Emulators. Run iPhone, iPad, Mobile Safari, APK, mobile apps in your browser with HTML5 and Javascript. For mobile app customer support, training, app previews, testing, and much more.",
        upload:
          "Upload an iOS app or Android APK to stream instantly using online web based iOS Simulators and Android Emulators.",
        demo: "Demo Appetize.io's online web based iOS Simulators and Android Emulators directly in your browser.",
        docs: "Easily request an API token to gain programmatic access to Appetize.io online web based iOS Simulators and Android Emulators.",
        moreInfo:
          "Pricing, terms, service level agreement, and other information regarding Appetize.io's online web based iOS Simulators and Android Emulators.",
        login:
          "Sign in to your Appetize.io account to update app settings, upload new builds, setup billing, and more.",
        reset: "Reset your Appetize.io account password.",
        signup:
          "Sign up for your Appetize.io account to update app settings, upload new builds, setup billing, and more.",
        terms:
          "Terms and policies regarding Appetize.ios online web based iOS Simulators and Android Emulators.",
        standalone:
          "Run Appetize.io as a barebones iOS Simulator or Android Emulator",
      };
    },
    23037: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return F;
        },
      });
      var s = n(24246),
        a = n(78164),
        i = n.n(a),
        r = n(83341),
        o = n(2262),
        l = n(94944),
        d = n(73779),
        c = n(85353),
        m = n(97861),
        u = n(80747),
        p = n(56498),
        h = n(50131),
        x = n(70322),
        f = n(32871),
        g = n(81937),
        b = n(36589),
        v = n(22640),
        j = n(6522),
        w = n(60772),
        y = n(32773),
        N = n(38944),
        Z = n(91125),
        k = n(87173),
        S = n(86677),
        A = n(27378),
        z = n(62584),
        E = n(74418);
      function F(e) {
        let { children: t, fullWidth: n, contentClassName: a } = e,
          i = (0, S.useRouter)(),
          { user: y, account: k } = (0, Z.a)(),
          { isOnprem: F } = (0, z.ZD)(),
          P = (function () {
            let [e, t] = (0, A.useState)(!1);
            return (
              (0, A.useEffect)(() => {
                function n() {
                  !e && window.scrollY > 20
                    ? t(!0)
                    : e && window.scrollY <= 20 && t(!1);
                }
                return (
                  window.addEventListener("scroll", n),
                  () => {
                    window.removeEventListener("scroll", n);
                  }
                );
              }, [e]),
              e
            );
          })(),
          [_, C] = (0, A.useState)(!1),
          R = null == k ? void 0 : k.hideSidebarPaths,
          T = i.asPath,
          L = "object" == typeof F && F.hasLaunchPage,
          W =
            "object" == typeof F && F.logo
              ? F.logo
              : "/images/logos/appetize-light.svg",
          D = (0, A.useMemo)(
            () =>
              [
                { hidden: !y, name: "Apps", href: "/apps", icon: l.Z },
                {
                  hidden: !y,
                  name: "App Groups",
                  href: "/app-groups",
                  icon: d.Z,
                },
                { name: "Upload", href: "/upload", icon: c.Z },
                {
                  hidden: !y,
                  name: "Standalone",
                  href: "/standalone",
                  icon: m.Z,
                  current:
                    T.startsWith("/standalone") ||
                    T.startsWith("/app/standalone"),
                },
                {
                  hidden: !L,
                  name: "Launch Page",
                  href: "/launch-page",
                  icon: u.Z,
                  target: "_blank",
                },
                { hidden: !y, name: "Account", href: "/account", icon: p.Z },
                {
                  hidden: !(0, E.n)(y, "admin"),
                  name: "Reporting",
                  href: "/reports",
                  icon: h.Z,
                },
                {
                  hidden:
                    !(0, E.n)(y, "developer") ||
                    !(null == y ? void 0 : y.isSystemAdmin),
                  name: "Prewarm Rules",
                  href: "/admin-prewarm",
                  icon: x.Z,
                },
                {
                  hidden:
                    !(0, E.n)(y, "developer") ||
                    !(null == y ? void 0 : y.isSystemAdmin),
                  name: "System Status",
                  href: "/admin-status",
                  icon: f.Z,
                  target: "_blank",
                },
                {
                  name: "Support Request",
                  href: "https://appetize.io/support-request",
                  target: "_blank",
                  icon: g.Z,
                },
                {
                  name: "Knowledge Base",
                  href: "https://support.appetize.io",
                  icon: b.Z,
                  target: "_blank",
                },
                {
                  name: "Documentation",
                  href: "https://docs.appetize.io",
                  icon: b.Z,
                  target: "_blank",
                },
              ]
                .filter(
                  (e) =>
                    !(
                      e.hidden ||
                      (null == R ? void 0 : R.some((t) => e.href.startsWith(t)))
                    )
                )
                .map((e) => ({
                  ...e,
                  current:
                    void 0 !== e.current ? e.current : T.startsWith(e.href),
                })),
            [L, R, T, y]
          );
        return (
          (0, A.useEffect)(() => {
            C(!1);
          }, [T]),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(r.u.Root, {
                show: _,
                as: A.Fragment,
                children: (0, s.jsxs)(o.V, {
                  as: "div",
                  className: "relative z-sidebar md:hidden",
                  onClose: C,
                  children: [
                    (0, s.jsx)(r.u.Child, {
                      as: A.Fragment,
                      enter: "transition-opacity ease-linear duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "transition-opacity ease-linear duration-300",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, s.jsx)("div", {
                        className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "fixed inset-0 z-40 flex",
                      children: [
                        (0, s.jsx)(r.u.Child, {
                          as: A.Fragment,
                          enter:
                            "transition ease-in-out duration-300 transform",
                          enterFrom: "-translate-x-full",
                          enterTo: "translate-x-0",
                          leave:
                            "transition ease-in-out duration-300 transform",
                          leaveFrom: "translate-x-0",
                          leaveTo: "-translate-x-full",
                          children: (0, s.jsxs)(o.V.Panel, {
                            className:
                              "relative flex w-full max-w-xs flex-1 flex-col",
                            children: [
                              (0, s.jsx)(r.u.Child, {
                                as: A.Fragment,
                                enter: "ease-in-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in-out duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 -mr-12 pt-2",
                                  children: (0, s.jsxs)("button", {
                                    type: "button",
                                    className:
                                      "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                    onClick: () => C(!1),
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "sr-only",
                                        children: "Close sidebar",
                                      }),
                                      (0, s.jsx)(v.Z, {
                                        className: "h-6 w-6 text-white",
                                        "aria-hidden": "true",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "relative h-0 flex-1 overflow-y-auto pt-5 pb-4 bg-black",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex flex-shrink-0 items-center px-4",
                                    children: (0, s.jsx)("a", {
                                      href: "/",
                                      children: (0, s.jsx)("img", {
                                        className: "h-8 w-auto",
                                        src: W,
                                      }),
                                    }),
                                  }),
                                  (0, s.jsxs)("nav", {
                                    className: "mt-5 space-y-1 px-2",
                                    children: [
                                      D.map((e) =>
                                        (0, s.jsx)(
                                          O,
                                          {
                                            name: e.name,
                                            href: e.href,
                                            icon: e.icon,
                                            current: e.current,
                                            target: e.target,
                                          },
                                          e.name
                                        )
                                      ),
                                      (0, s.jsx)("div", {
                                        className: "py-2",
                                        children: (0, s.jsx)("div", {
                                          className:
                                            "border-b border-gray-800 mx-2",
                                        }),
                                      }),
                                      !!y &&
                                        (0, s.jsx)(O, {
                                          href: "/logout",
                                          icon: j.Z,
                                          name: "Logout",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "absolute inset-0 overflow-hidden pointer-events-none",
                                children: [
                                  (0, s.jsx)("img", {
                                    className:
                                      "h-64 absolute left-60 -top-20 rotate-180 pointer-events-none",
                                    "aria-hidden": !0,
                                    src: "/images/bg-arrow.svg",
                                  }),
                                  (0, s.jsx)("img", {
                                    className:
                                      "h-64 absolute -bottom-24 -left-[50%] pointer-events-none",
                                    "aria-hidden": !0,
                                    src: "/images/bg-arrow.svg",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", { className: "w-14 flex-shrink-0" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "z-sidebar hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col dark:border-r-gray-900 dark:border-r-2",
                children: [
                  (0, s.jsx)("div", {
                    className: "flex min-h-0 flex-1 flex-col bg-black relative",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-1 flex-col overflow-y-auto pt-5 pb-4",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex flex-shrink-0 px-4",
                          children: (0, s.jsx)("a", {
                            href: "/",
                            children: (0, s.jsx)("img", {
                              className: "h-6 w-auto",
                              src: W,
                            }),
                          }),
                        }),
                        (0, s.jsxs)("nav", {
                          className: "mt-5 flex-1 space-y-1 px-2",
                          children: [
                            D.map((e) => (0, s.jsx)(O, { ...e }, e.name)),
                            (0, s.jsx)("div", {
                              className: "py-2",
                              children: (0, s.jsx)("div", {
                                className: "border-b border-gray-800 mx-2",
                              }),
                            }),
                            !!y &&
                              (0, s.jsx)(O, {
                                href: "/logout",
                                icon: j.Z,
                                name: "Logout",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "absolute inset-0 overflow-hidden pointer-events-none",
                    children: [
                      (0, s.jsx)("img", {
                        className:
                          "h-64 absolute left-40 -top-24 rotate-180 pointer-events-none",
                        "aria-hidden": !0,
                        src: "/images/bg-arrow.svg",
                      }),
                      (0, s.jsx)("img", {
                        className:
                          "h-64 absolute -bottom-24 -left-[50%] pointer-events-none",
                        "aria-hidden": !0,
                        src: "/images/bg-arrow.svg",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-1 flex-col md:pl-64 min-h-screen",
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, N.Z)(
                      P ? "bg-black" : "bg-transparent",
                      "flex flex-row-reverse items-center sticky top-0 z-sidebar h-12 md:hidden transition-colors overflow-hidden"
                    ),
                    children: [
                      P &&
                        (0, s.jsx)("img", {
                          className:
                            "h-64 absolute right-0 -top-24 rotate-180 pointer-events-none",
                          "aria-hidden": !0,
                          src: "/images/bg-arrow.svg",
                        }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: (0, N.Z)(
                          "text-black inline-flex h-10 w-12 items-center justify-center rounded-md hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset dark:text-white dark:focus-visible:ring-gray-100",
                          P ? "text-white focus-visible:ring-gray-100" : ""
                        ),
                        onClick: () => C(!0),
                        children: [
                          (0, s.jsx)("span", {
                            className: "sr-only",
                            children: "Open sidebar",
                          }),
                          (0, s.jsx)(w.Z, {
                            className: "h-8 w-8",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("main", {
                    className: (0, N.Z)(
                      !n && "w-full max-w-4xl mx-auto",
                      "flex-1 pb-4 px-2 md:pt-4 sm:px-4",
                      a
                    ),
                    children: t,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function O(e) {
        let { icon: t, name: n, current: a, href: r, ...o } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i(), {
              id: "78d0e44968124e13",
              children:
                "a.jsx-78d0e44968124e13:hover,a.jsx-78d0e44968124e13:focus{color:white;text-decoration:none}",
            }),
            (0, s.jsx)(k.Z, {
              href: r,
              passHref: !0,
              children: (0, s.jsxs)("a", {
                ...o,
                className:
                  "jsx-78d0e44968124e13 " +
                  ((0, N.Z)(
                    o.className,
                    a
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white",
                    "text-base group flex items-center pl-2 py-2 font-medium rounded-md whitespace-nowrap"
                  ) || ""),
                children: [
                  (0, s.jsx)(t, {
                    "aria-hidden": "true",
                    className:
                      "jsx-78d0e44968124e13 " +
                      ((0, N.Z)(
                        a
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-4 flex-shrink-0 h-6 w-6"
                      ) || ""),
                  }),
                  n,
                  "_blank" === o.target &&
                    (0, s.jsx)("div", {
                      className:
                        "jsx-78d0e44968124e13 flex items-center justify-end w-full",
                      children: (0, s.jsx)(y.Z, {
                        className: (0, N.Z)(
                          "text-gray-600 mr-4 flex-shrink-0 h-4 w-4"
                        ),
                        "aria-hidden": "true",
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
