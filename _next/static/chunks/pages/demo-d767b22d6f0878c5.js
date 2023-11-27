(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9656],
  {
    15443: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/demo",
        function () {
          return n(82564);
        },
      ]);
    },
    14877: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(24246),
        o = n(88038),
        r = n.n(o),
        a = n(62584);
      function s(e) {
        let {
            title: t,
            description: n = l.home,
            robots: o = "all",
            canonical: s,
          } = e,
          d = (0, a.ZD)(),
          p = "function" == typeof n ? n(l) : n,
          u = d.disableSEO || d.isOnprem;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r(), {
              children: [
                t &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("title", { children: t }, "title"),
                      (0, i.jsx)(
                        "meta",
                        { name: "og:title", content: t },
                        "og:title"
                      ),
                      (0, i.jsx)(
                        "meta",
                        { name: "twitter:title", content: t },
                        "twitter:title"
                      ),
                    ],
                  }),
                u
                  ? (0, i.jsx)("meta", { name: "robots", content: "none" })
                  : (0, i.jsx)("meta", { name: "robots", content: o }),
                !u &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      p &&
                        (0, i.jsx)(
                          "meta",
                          { name: "description", content: p },
                          "description"
                        ),
                      p &&
                        (0, i.jsx)(
                          "meta",
                          { property: "og:description", content: p },
                          "og:description"
                        ),
                      p &&
                        (0, i.jsx)(
                          "meta",
                          { property: "twitter:description", content: p },
                          "twitter:description"
                        ),
                      s &&
                        (0, i.jsx)("link", {
                          rel: "canonical",
                          href: s.startsWith("http")
                            ? s
                            : "https://appetize.io".concat(s),
                        }),
                    ],
                  }),
              ],
            }),
            (0, i.jsx)("h1", { className: "sr-only", children: p }),
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
    82564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n(24246),
        o = n(8183),
        r = n(80673),
        a = n(62584),
        s = n(66049),
        l = n(14877),
        d = n(54962),
        p = n(79894),
        u = n.n(p),
        c = n(27378);
      function m(e) {
        let [t, n] = (0, c.useState)(e.app);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(l.Z, {
              title: "Demo",
              description: (e) => {
                let { demo: t } = e;
                return t;
              },
              canonical: "/demo",
            }),
            (0, i.jsx)(d.Z, {
              children: (0, i.jsx)(u(), {
                href: "/upload",
                className:
                  "btn btn-primary px-4 py-2 text-[.9375rem] hover:no-underline",
                style: { lineHeight: 1.5 },
                children: "Upload your app",
              }),
            }),
            (0, i.jsx)("div", {
              className: "p-4 max-w-7xl mx-auto",
              children: (0, i.jsx)(s.Z, {
                app: t,
                parseConfigFromUrl: !0,
                isCrossPlatform: !0,
                config: { record: !0 },
                onConfig: (e) => {
                  let { platform: i, osVersion: r } = e;
                  if (i !== t.platform) {
                    let e = (0, o.C)(i, r);
                    e
                      ? n(e)
                      : console.error("No demo app configured for ".concat(i));
                  }
                },
              }),
            }),
          ],
        });
      }
      (0, a.kK)(m, async (e) => {
        let { isOnprem: t } = (0, a.ZD)(),
          { guard: n } = e,
          i = (0, o.C)((0, r.Xf)(e.query.device), e.query.osVersion);
        if (t)
          return (
            n({ auth: !0 }),
            { app: null != i ? i : { publicKey: "standalone" } }
          );
        if (!i) throw Error("No demo app configured");
        return { app: i };
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        8033, 9894, 8559, 2278, 9376, 8177, 4433, 7329, 4293, 5409, 2880, 2097,
        7895, 978, 6211, 209, 7351, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 15443));
      }
    ),
      (_N_E = e.O());
  },
]);
