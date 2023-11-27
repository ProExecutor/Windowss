"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7351],
  {
    54962: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(24246),
        r = n(78164),
        l = n.n(r);
      function i(e) {
        let { children: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l(), {
              id: "4abdc4a5eaa21025",
              children:
                ".header.jsx-4abdc4a5eaa21025{height:3.625rem}@media screen and (max-height:500px)and (min-width:1024px){.header.jsx-4abdc4a5eaa21025{height:3.55rem}}@media screen and (min-height:501px)and (min-width:1024px){.header.jsx-4abdc4a5eaa21025{height:5.525rem}}",
            }),
            (0, s.jsx)("div", {
              className: "jsx-4abdc4a5eaa21025 bg-white px-4 lg:px-10 pb-4",
              children: (0, s.jsxs)("div", {
                className:
                  "jsx-4abdc4a5eaa21025 header py-3 lg:py-2 flex flex-grow justify-between items-center border-b-2 border-b-black",
                children: [
                  (0, s.jsx)("a", {
                    href: "/",
                    className: "jsx-4abdc4a5eaa21025",
                    children: (0, s.jsx)("img", {
                      src: "/images/logos/appetize-dark.svg",
                      alt: "Appetize",
                      className:
                        "jsx-4abdc4a5eaa21025 w-[176px] lg:w-[194px] h-auto",
                    }),
                  }),
                  t,
                ],
              }),
            }),
          ],
        });
      }
    },
    63369: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(24246),
        r = n(27378),
        l = n(38944),
        i = n(6725),
        a = n(15596);
      function o(e) {
        let {
            className: t = "",
            keepCopyVisible: n,
            children: l,
            language: i,
          } = e,
          [a, o] = (0, r.useState)(!1);
        return (0, s.jsxs)("span", {
          className:
            "relative rounded-md block min-w-0 bg-gray border-gray-trim border dark:bg-gray-800 dark:border-gray-dark-trim ".concat(
              t
            ),
          onMouseEnter: () => {
            o(!0);
          },
          onMouseLeave: () => {
            o(!1);
          },
          children: [
            (0, s.jsx)("code", {
              className: "",
              children: (0, s.jsx)(d, {
                className:
                  "text-xs overflow-x-auto block p-4 max-w-full text-black dark:text-gray-100",
                language: null != i ? i : "",
                code: l,
              }),
            }),
            (a || n) &&
              (0, s.jsx)("button", {
                className:
                  "absolute top-1.5 right-2 p-1 rounded-md opacity-80 bg-gray-600 dark:bg-gray-700 hover:opacity-100",
                onClick: () => {
                  navigator.clipboard.writeText(l),
                    toastr.success("Copied to clipboard", void 0, {
                      timeOut: 1500,
                    });
                },
                children: (0, s.jsx)(c, {
                  className: "h-5 w-5 text-white dark:text-gray-100",
                }),
              }),
          ],
        });
      }
      function c(e) {
        return (0, s.jsxs)("svg", {
          ...e,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          children: [
            (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z",
            }),
            (0, s.jsx)("title", { children: "Copy Code" }),
          ],
        });
      }
      function d(e) {
        return (0, s.jsx)(i.ZP, {
          ...i.lG,
          theme: a.Z,
          ...e,
          language: e.language,
          children: (t) => {
            let {
              className: n,
              style: r,
              tokens: i,
              getLineProps: a,
              getTokenProps: o,
            } = t;
            return (0, s.jsx)("pre", {
              className: (0, l.Z)(
                "rounded text-xs p-2 w-full h-full whitespace-pre-wrap bg-gray-800",
                n,
                e.className
              ),
              style: { ...r, backgroundColor: void 0 },
              children: i.map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    ...a({ line: e, key: t }),
                    children: e.map((e, t) =>
                      (0, s.jsx)("span", { ...o({ token: e, key: t }) }, t)
                    ),
                  },
                  t
                )
              ),
            });
          },
        });
      }
    },
    93093: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(24246),
        r = n(27378);
      function l(e) {
        let { className: t, children: n, ...l } = e,
          i = (0, r.useRef)(null);
        return (0, s.jsxs)("button", {
          className: t,
          disabled: l.disabled,
          onClick: (e) => {
            var t;
            e.preventDefault(),
              null === (t = i.current) || void 0 === t || t.click();
          },
          children: [
            n,
            (0, s.jsx)("input", {
              ref: i,
              type: "file",
              className: "!hidden",
              "aria-hidden": !0,
              onClick: (e) => e.stopPropagation(),
              ...l,
            }),
          ],
        });
      }
    },
    666: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(24246);
      n(27378);
      var r = n(16964),
        l = n(2262),
        i = n(38944),
        a = n(17594);
      function o(e) {
        let { open: t, children: n, className: o, ...c } = e,
          { closeModal: d } = (0, r.o)();
        return (0, s.jsx)(l.V, {
          open: t,
          as: a.E.div,
          className:
            "z-dialog fixed inset-0 flex justify-center items-center pointer-events-none mx-auto max-w-4xl px-4",
          ...c,
          onClose: (e) => {
            var t;
            d(), null === (t = c.onClose) || void 0 === t || t.call(c, e);
          },
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: (0, s.jsx)("div", {
            className: (0, i.Z)(
              "z-dialog-content pointer-events-auto flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden",
              o
            ),
            children: n,
          }),
        });
      }
      (o.Header = function (e) {
        let { title: t, description: n, ...r } = e;
        return (0, s.jsxs)("div", {
          ...r,
          className: (0, i.Z)(
            "px-3 py-2 border-b border-b-gray-200",
            r.className
          ),
          children: [
            (0, s.jsx)(l.V.Title, {
              className: "mx-0 my-2 text-3xl font-medium",
              children: t,
            }),
            n &&
              (0, s.jsx)(l.V.Description, {
                className: "m-0 text-xs opacity-75",
                children: n,
              }),
          ],
        });
      }),
        (o.Content = function (e) {
          return (0, s.jsx)("div", {
            ...e,
            className: (0, i.Z)("flex-grow px-3 py-2", e.className),
          });
        }),
        (o.Footer = function (e) {
          return (0, s.jsx)("div", {
            ...e,
            className: (0, i.Z)("px-3 py-1", e.className),
          });
        }),
        (o.ActionsFooter = function (e) {
          return (0, s.jsx)("div", {
            ...e,
            className: (0, i.Z)(
              "px-3 py-2 flex justify-end gap-3",
              e.className
            ),
          });
        });
    },
    19612: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(24246),
        r = n(78164),
        l = n.n(r),
        i = n(38944);
      function a(e) {
        let { variant: t = "light", ...n } = e,
          r = "light" === t ? "%23000000" : "%23ffffff";
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l(), {
              id: "4ab2899368614773",
              dynamic: [r],
              children:
                "select.__jsx-style-dynamic-selector{background-image:url(\"data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='".concat(
                  r,
                  "' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>\");background-repeat:no-repeat;background-position:-webkit-calc(100% - .75rem)center!important;background-position:-moz-calc(100% - .75rem)center!important;background-position:calc(100% - .75rem)center!important}"
                ),
            }),
            (0, s.jsx)("select", {
              ...n,
              className:
                l().dynamic([["4ab2899368614773", [r]]]) +
                " " +
                ((0, i.Z)(
                  "text-h6 h-8 m-0 px-4 font-bold",
                  {
                    "bg-white text-black fill-black": "light" === t,
                    "bg-black text-white fill-white": "dark" === t,
                    "cursor-pointer": !n.disabled,
                  },
                  n.className
                ) || ""),
            }),
          ],
        });
      }
    },
    3042: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(24246),
        r = n(21),
        l = n(17594),
        i = n(27378),
        a = n(37869);
      function o(e) {
        var t;
        let {
            text: n,
            render: o,
            children: c,
            placement: d = "top",
            modifiers: u,
            strategy: p,
            onFirstUpdate: h,
          } = e,
          [f, x] = (0, i.useState)(!1),
          [m, g] = (0, i.useState)(null),
          [v, b] = (0, i.useState)(null),
          { styles: y, attributes: j } = (0, a.D)(
            m,
            v,
            (0, i.useMemo)(
              () => ({
                placement: d,
                modifiers: u,
                strategy: p,
                onFirstUpdate: h,
              }),
              [u, h, d, p]
            )
          ),
          w = i.cloneElement(i.Children.only(c), {
            ref: g,
            onFocus: () => x(!0),
            onBlur: () => x(!1),
            onMouseEnter: () => x(!0),
            onMouseLeave: () => x(!1),
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            w,
            (0, s.jsx)(r.M, {
              children:
                n &&
                f &&
                (0, s.jsx)(l.E.div, {
                  className: "p-[8px]",
                  ref: b,
                  style: { ...y.popper, zIndex: 99999999 },
                  ...j.popper,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  children: (0, s.jsx)("div", {
                    className:
                      "font-medium p-[8px] text-white rounded-[5px] bg-gray-700",
                    children:
                      null !== (t = null != n ? n : null == o ? void 0 : o()) &&
                      void 0 !== t
                        ? t
                        : null,
                  }),
                }),
            }),
          ],
        });
      }
    },
    66049: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eq;
        },
      });
      var s = n(24246),
        r = n(12625),
        l = n(38944),
        i = n(68764),
        a = n(80673),
        o = n(62584),
        c = n(86665),
        d = n(15014),
        u = n(14704),
        p = n(27305),
        h = n(42270),
        f = n(62668),
        x = n(70575),
        m = n(13715),
        g = n(72968),
        v = n(27378),
        b = n(89428),
        y = n(83341),
        j = n(31446);
      function w(e) {
        let {
          children: t,
          className: n,
          anchor: r = "top-right",
          items: i,
          disabled: a,
        } = e;
        return (0, s.jsxs)(b.v, {
          as: "div",
          className: "relative inline-block text-left",
          children: [
            (0, s.jsx)("div", {
              children: (0, s.jsxs)(b.v.Button, {
                className: n,
                disabled: a,
                children: [
                  t,
                  " ",
                  (0, s.jsx)(j.Z, {
                    className: "-mr-1 mt-1 h-5 w-5",
                    "aria-hidden": "true",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(y.u, {
              as: v.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, s.jsx)(b.v.Items, {
                className: (0, l.Z)(
                  "absolute z-100 my-2 w-56 rounded-md bg-white ring-2 ring-black focus:outline-none",
                  "top-left" === r && "origin-top-left top-full left-0",
                  "top-right" === r && "origin-top-right top-full right-0",
                  "bottom-left" === r &&
                    "origin-bottom-left left-0 bottom-full",
                  "bottom-right" === r &&
                    "origin-bottom-right right-0 bottom-full"
                ),
                children: (0, s.jsx)("div", { className: "py-1", children: i }),
              }),
            }),
          ],
        });
      }
      function N(e) {
        let {
          children: t,
          onClick: n,
          closeOnClick: r = !0,
          disabled: i = !1,
        } = e;
        return (0, s.jsx)(b.v.Item, {
          disabled: i,
          children: (e) => {
            let { active: i, close: a, disabled: o } = e;
            return (0, s.jsx)("button", {
              className: (0, l.Z)(
                "btn hover:bg-gray-100 w-full justify-start p-2 font-normal rounded-none",
                i && "bg-gray-100"
              ),
              disabled: o,
              onClick: (e) => {
                null == n || n(e), r && a();
              },
              children: t,
            });
          },
        });
      }
      var k = n(17594),
        C = n(85073),
        E = n(2128),
        T = n(64374);
      let S = [
        "accessibilityLabel",
        "accessibilityIdentifier",
        "text",
        "placeholder",
        "resource-id",
        "content-desc",
        "title",
      ];
      function Z(e) {
        let t = O(e);
        return "Unknown" !== t
          ? {
              name: O(e),
              description: (function (e) {
                var t, n, s;
                let r = "element" in e ? e.element : null,
                  l = (null == r ? void 0 : r.attributes) || {},
                  i =
                    r &&
                    null !==
                      (t = (function (e) {
                        if (!("element" in e) || !e.element) return;
                        if (e.element.attributes) {
                          let t = z(e.element.attributes);
                          if (t) return t;
                        }
                        let { accessibilityElements: t } = e.element;
                        if (t) return A(t, e.coordinates);
                      })(e)) &&
                    void 0 !== t
                      ? t
                      : "";
                if (!i && (null == r ? void 0 : r.source) === "webview")
                  return l.class
                    ? "HTML element <"
                        .concat(null == r ? void 0 : r.type, '> with class "')
                        .concat(M(l.class, 100), '"')
                    : "HTML element <".concat(null == r ? void 0 : r.type, ">");
                switch (e.type) {
                  case "tap":
                  case "swipe": {
                    if (i) return '"'.concat(M(i, 200), '"');
                    let t = "("
                      .concat(Math.round(100 * e.position.x), "%, ")
                      .concat(Math.round(100 * e.position.y), "%)");
                    if (r) return "element at ".concat(t);
                    return "at ".concat(t);
                  }
                  case "keypress": {
                    let t =
                      null !==
                        (s =
                          null !== (n = e.character) && void 0 !== n
                            ? n
                            : e.key) && void 0 !== s
                        ? s
                        : "";
                    if (F(t)) return "";
                    if (L(t)) return "".concat(t);
                    return '"'.concat(t, '"');
                  }
                  case "typeText":
                    return '"'.concat(e.text, '"');
                }
              })(e),
              onElement: Boolean("element" in e && e.element),
            }
          : { name: t, description: "", onElement: !1 };
      }
      function M(e, t) {
        return e.length <= t ? e : e.slice(0, t) + "...";
      }
      function O(e) {
        switch (e.type) {
          case "tap":
            return "Tap";
          case "swipe":
            return "Swipe ".concat(
              (() => {
                let t = e.moves[1]
                    ? e.moves[0]
                    : { x: e.position.x, y: e.position.y },
                  n = e.moves[1] ? e.moves[1] : e.moves[0],
                  s = n.x - t.x,
                  r = n.y - t.y;
                return Math.abs(s) > Math.abs(r)
                  ? s > 0
                    ? "right"
                    : "left"
                  : r > 0
                  ? "down"
                  : "up";
              })()
            );
          case "keypress":
            if (F(e.key)) return "Rotate device";
            return "Press";
          case "typeText":
            return "Type";
          default:
            return "Unknown";
        }
      }
      function A(e, t) {
        if (t) {
          let n = (function (e, t) {
            for (let n of t) {
              let t = n.accessibilityFrame;
              if (
                t &&
                e.x >= t.x &&
                e.x <= t.x + t.width &&
                e.y >= t.y &&
                e.y <= t.y + t.height
              )
                return n;
            }
          })(t, e);
          if (n) return z(n);
        }
        let n = e.map((e) => z(e)).filter(Boolean);
        if (1 === n.length) return n[0];
      }
      function z(e) {
        for (let t of S) {
          let n = e[t];
          if (n) return n;
        }
      }
      function R(e, t) {
        let n = (0, v.useRef)(0);
        (0, T.W)(() => {
          let t = e.current;
          if (!t) return;
          let s = Math.ceil(t.scrollTop + t.clientHeight) >= n.current - 1;
          s && (t.scrollTop = t.scrollHeight - t.clientHeight),
            (n.current = t.scrollHeight);
        }, t);
      }
      let L = (e) => ["Enter", "Tab", "Backspace", "Escape"].includes(e),
        F = (e) => ["rotateLeft", "rotateRight"].includes(e);
      var D = n(16964),
        P = n(63369),
        B = n(666),
        V = n(36782),
        q = {
          ".github": {
            workflows: {
              "tests.yml":
                "name: Appetize Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - uses: actions/setup-node@v3\n        with:\n        node-version: 18\n    - name: Install dependencies\n        run: npm ci\n    - name: Install Playwright Browsers\n        run: npx playwright install --with-deps\n    - name: Run Playwright tests\n        run: npx playwright test\n    - uses: actions/upload-artifact@v3\n        if: always()\n        with:\n        name: playwright-report\n        path: playwright-report/\n        retention-days: 30",
            },
          },
          tests: {
            "test.spec.ts":
              "import { test } from '@appetize/playwright';\n\n<%= TEST_USE %>\n\n<%= TEST_CODE %>",
          },
          "package.json":
            '{\n    "name": "appetize-tests",\n    "private": true,\n    "scripts": {\n        "test": "playwright test --headed"       \n    },\n    "devDependencies": {\n        "@playwright/test": "^1.39.0",\n        "@types/node": "^20.8.8",\n        "@appetize/playwright": "latest"\n    }\n}\n',
          "playwright.config.ts":
            "import { defineConfig } from '@playwright/test';\nimport { AppetizeTestOptions } from '@appetize/playwright';\n\n/**\n * Read environment variables from file.\n * https://github.com/motdotla/dotenv\n */\n// require('dotenv').config();\n\n/**\n * See https://playwright.dev/docs/test-configuration.\n */\nexport default defineConfig<AppetizeTestOptions>({\n    testDir: './tests',\n    outputDir: 'test-results/',\n    timeout: 120 * 1000,\n    expect: {\n        // recommended ratio for screenshot testing\n        toMatchSnapshot: {\n            maxDiffPixelRatio: 0.05,\n        },\n    },\n    forbidOnly: !!process.env.CI,\n    retries: process.env.CI ? 3 : 0,\n    reporter: 'line',\n\n    // correlates to number of concurrent Appetize sessions at a time\n    workers: 1,\n    fullyParallel: false,\n\n    use: {\n        trace: 'retain-on-failure',\n        baseURL: 'https://appetize.io',\n\n        // Appetize session configuration\n        // can be overridden per test suite with test.use({ config: { ... } })\n        config: <%= CONFIG %>,\n    },\n});\n",
          "README.md":
            "# Appetize Playwright Tests\n\nThis project was generated and exported by [Appetize](https://appetize.io).\n\n## Running your Tests\n\nMake sure you have [Node.js](https://nodejs.org/en) 18 or later installed. Then, in this directory, run:\n\n```bash\nnpm install             # install dependencies\nnpx playwright install  # setup Playwright browsers\nnpm run test            # run your tests!\n```\n\nView the [Appetize documentation](https://docs.appetize.io/javascript-sdk/playwright) for more information.\n\n## Configuration\n\nYou'll find the configuration for your Appetize tests in `playwright.config.ts`. This file contains configuration for both\nPlaywright and your Appetize sessions.\n\nThese will apply for all tests in your project, but you can override them in your test files with:\n\n```ts\nimport { test } from '@appetize/playwright';\n\ntest.use({\n    config: {\n        /* some config */\n    },\n});\n```\n\n## Writing more tests\n\nYou can record more tests with AppRecorder on [appetize.io](https://appetize.io) and copy them here, or you can write\ntests [manually](https://docs.appetize.io/javascript-sdk/automation).\n\nHere's an example of automating a login flow for an Android app:\n\n```ts\nimport { test } from '@appetize/playwright';\n\ntest('shows greeting when user logs in', async ({ session }) => {\n    // type username\n    await session.tap({\n        element: {\n            attributes: {\n                'resource-id': 'username_field',\n            },\n        },\n    });\n    await session.type('jordan_doe');\n\n    // type password\n    await session.tap({\n        element: {\n            attributes: {\n                'resource-id': 'password_field',\n            },\n        },\n    });\n    await session.type('securepassword');\n\n    // tap login button\n    await session.tap({\n        element: {\n            attributes: {\n                text: 'Login',\n            },\n        },\n    });\n\n    // expect to see the user's name on the screen\n    await expect(session).toHaveElement({\n        attributes: {\n            text: 'Welcome, Jordan Doe',\n        },\n    });\n});\n```\n",
        },
        H = n(98784);
      let I = " ".repeat(4);
      function J(e) {
        let { actions: t, config: n, open: r, onClose: l } = e,
          i = (0, v.useMemo)(() => {
            let e = _(t, n);
            return e.tests["test.spec.ts"];
          }, [t, n]);
        return (0, s.jsxs)(B.Z, {
          open: r,
          onClose: l,
          className: "w-full lg:w-[50vw]",
          children: [
            (0, s.jsx)(B.Z.Header, { title: "Export to Playwright Test" }),
            (0, s.jsxs)(B.Z.Content, {
              className: "w-full flex flex-col gap-2",
              children: [
                (0, s.jsx)("p", {
                  children:
                    "Copy the following text snippet into an existing Appetize Playwright project, or download a preconfigured project below.",
                }),
                (0, s.jsx)(P.Z, {
                  language: "javascript",
                  className: "w-full h-full max-h-[50vh] overflow-scroll",
                  children: i,
                }),
                (0, s.jsx)("p", {
                  className: "text-xs",
                  children: (0, s.jsx)("a", {
                    href: "https://docs.appetize.io/javascript-sdk/playwright",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "View documentation",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)(B.Z.ActionsFooter, {
              children: [
                (0, s.jsx)("button", {
                  className: "btn btn-outline",
                  onClick: function (e) {
                    e.preventDefault();
                    let s = (0, V.Xo)(
                        (function e(t) {
                          return Object.entries(t).reduce((t, n) => {
                            let [s, r] = n;
                            return (
                              "string" == typeof r
                                ? (t[s] = (0, V.TD)(r))
                                : "object" == typeof r
                                ? (t[s] = e(r))
                                : (t[s] = r),
                              t
                            );
                          }, {});
                        })(_(t, n, { commentOutTestUse: !0 }))
                      ),
                      r = new Blob([s], { type: "application/zip" });
                    saveAs(r, "playwright-project.zip");
                  },
                  children: "Download",
                }),
                (0, s.jsx)("button", {
                  className: "btn btn-primary",
                  onClick: l,
                  children: "Close",
                }),
              ],
            }),
          ],
        });
      }
      function _(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = (0, H.template)(q.tests["test.spec.ts"]),
          r = (0, H.template)(q["playwright.config.ts"]),
          l = {
            publicKey: t.publicKey,
            device: t.device,
            osVersion: t.osVersion,
            proxy: t.proxy,
            debug: t.debug,
          },
          i = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              s = I.repeat(t),
              r = JSON.stringify(e, null, I)
                .split("\n")
                .map((e) => "".concat(s).concat(e));
            return n && (r[0] = r[0].slice(s.length)), r.join("\n");
          },
          a = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return i(e, t, n)
              .replace(/"([^"]+)":/g, "$1:")
              .replace(/"/g, "'");
          },
          o = "test.use({\n    config: ".concat(a(l, 1, !0), "\n})");
        n.commentOutTestUse &&
          (o =
            "// uncomment this to override Appetize config for this test (default config is in playwright.config.ts)\n/*\n".concat(
              o,
              "\n*/"
            ));
        let c =
          "test('my recording', async ({ session }) => {\n    await session.playActions([\n        ".concat(
            (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return e
                .map((e) => {
                  "element" in e &&
                    e.element &&
                    delete e.element.accessibilityElements;
                  let n = Z(e),
                    s = "// "
                      .concat(n.name)
                      .concat(n.onElement ? " on" : "", " ")
                      .concat(n.description);
                  return "".concat(s, "\n").concat(i(e, t));
                })
                .join(",\n" + I.repeat(t));
            })(2),
            "\n    ])\n})"
          );
        return {
          ...q,
          "package.json": q["package.json"],
          "playwright.config.ts": r({ CONFIG: a(l, 2, !0) }),
          tests: { "test.spec.ts": s({ TEST_USE: o, TEST_CODE: c }) },
        };
      }
      function W(e) {
        let { actions: t, open: n, onClose: r } = e,
          l = (0, v.useMemo)(() => JSON.stringify(t, null, 2), [t]);
        return (0, s.jsxs)(B.Z, {
          open: n,
          onClose: r,
          className: "w-full lg:w-[50vw]",
          children: [
            (0, s.jsx)(B.Z.Header, { title: "Export to JSON" }),
            (0, s.jsx)(B.Z.Content, {
              className: "w-full",
              children: (0, s.jsx)(P.Z, {
                language: "javascript",
                className: "w-full h-full max-h-[50vh] overflow-scroll",
                children: l,
              }),
            }),
            (0, s.jsxs)(B.Z.ActionsFooter, {
              children: [
                (0, s.jsx)("button", {
                  className: "btn btn-outline",
                  onClick: (e) => {
                    e.preventDefault();
                    let t = new Blob([l], { type: "text/plain" });
                    saveAs(t, "actions.json");
                  },
                  children: "Download",
                }),
                (0, s.jsx)("button", {
                  className: "btn btn-primary",
                  onClick: r,
                  children: "Close",
                }),
              ],
            }),
          ],
        });
      }
      var U = n(93093),
        X = n(68715);
      function Y() {
        let {
            client: e,
            session: t,
            isInspecting: n,
            toggleInspector: r,
          } = eF(),
          { openModal: i, closeModal: a, stack: o } = (0, D.o)(),
          [c, d] = (0, v.useState)(null == t ? void 0 : t.config),
          [f, x] = (0, v.useState)([]),
          m = (0, v.useRef)(null),
          g = (0, v.useRef)([]),
          [b, y] = (0, v.useState)(!1),
          [j, k] = (0, v.useState)(!1),
          [T, S] = (0, v.useState)(new WeakMap()),
          [Z, M] = (0, v.useState)(null);
        (0, v.useEffect)(() => {
          if (null == t ? void 0 : t.config.record) {
            let e = (e) => {
              b ||
                (x((t) =>
                  (function (e, t) {
                    let n = e[e.length - 1];
                    return (
                      n && "keypress" === t.type && t.character
                        ? (null == n ? void 0 : n.type) !== "keypress" ||
                          Q(t.character) ||
                          !n.character ||
                          Q(n.character)
                          ? (null == n ? void 0 : n.type) !== "typeText" ||
                            Q(t.character)
                            ? e.push(t)
                            : (e.pop(),
                              e.push({
                                type: "typeText",
                                text: n.text + t.character,
                              }))
                          : (e.pop(),
                            e.push({
                              type: "typeText",
                              text: n.character + t.character,
                            }))
                        : e.push(t),
                      e
                    );
                  })(t.slice(), e)
                ),
                "position" in e &&
                  (e.position.x < 0 ||
                    e.position.x > 1 ||
                    e.position.y < 0 ||
                    e.position.y > 1) &&
                  E.TF.withScope((n) => {
                    n.setExtra("action", JSON.stringify(e, null, 2)),
                      n.setTag("demo", !0),
                      n.setExtra("device", JSON.stringify(t.device, null, 2)),
                      E.TF.captureMessage(
                        "Recorded action outside of screen bounds"
                      ),
                      console.warn("Recorded action outside of screen bounds", {
                        action: e,
                        device: t.device,
                      });
                  }),
                "swipe" !== e.type ||
                  (delete e.element, delete e.localPosition));
            };
            return (
              t.on("action", e),
              () => {
                t.off("action", e);
              }
            );
          }
        }, [b, t]),
          (0, v.useEffect)(() => {
            let t = () => {
              x([]), S(new WeakMap()), r(!1);
            };
            if (e)
              return (
                e.on("sessionRequested", t),
                e.on("queue", t),
                () => {
                  e.off("sessionRequested", t), e.off("queue", t);
                }
              );
          }, [e]),
          (0, v.useEffect)(() => {
            t || (r(!1), y(!1), k(!1));
          }, [t]),
          (0, v.useEffect)(() => {
            var e;
            null === (e = m.current) ||
              void 0 === e ||
              e.scrollTo({
                left: 0,
                top: m.current.scrollHeight,
                behavior: "smooth",
              });
          }, [f]),
          (0, v.useEffect)(() => {
            if (Z && g.current.length && m.current) {
              let e = f.indexOf(Z),
                t = g.current[e];
              if (t) {
                let e = m.current.getBoundingClientRect();
                m.current.scrollTo({
                  left: 0,
                  top: t.offsetTop - e.height / 2,
                  behavior: "smooth",
                });
              }
            }
          }, [f, Z]),
          (0, v.useEffect)(() => {
            if (t) {
              var e;
              d({
                publicKey:
                  null === (e = t.app) || void 0 === e ? void 0 : e.publicKey,
                ...t.config,
              });
            }
          }, [t]);
        let O = (0, v.useCallback)(async () => {
            if (t) {
              k(!0);
              let e = async () => {
                (null == t ? void 0 : t.config.platform) === "ios"
                  ? await t
                      .findElement(
                        { attributes: { text: "Today" } },
                        { timeout: 2e3 }
                      )
                      .catch(console.warn)
                  : await (null == t
                      ? void 0
                      : t
                          .findElement(
                            { attributes: { text: "On this day" } },
                            { timeout: 2e3 }
                          )
                          .catch(console.warn));
              };
              try {
                await t.reinstallApp(), await e();
              } finally {
                k(!1);
              }
            } else k(!1);
          }, [t]),
          A = (0, v.useCallback)(async () => {
            if (
              (y(!0),
              r(!1),
              S(new WeakMap()),
              M(f[0]),
              t ? await O() : await (null == e ? void 0 : e.startSession()),
              S(new WeakMap()),
              t)
            )
              for (let e of f) {
                M(e),
                  C.k.debug("playing", e),
                  await new Promise((e) => {
                    setTimeout(e, 1e3);
                  });
                try {
                  await t.playAction(e, { timeout: 1e4 }),
                    S((t) => t.set(e, { success: !0 })),
                    "swipe" === e.type &&
                      (await new Promise((e) => {
                        setTimeout(e, 2e3);
                      }));
                } catch (n) {
                  console.error(n),
                    E.TF.withScope((s) => {
                      s.setExtra("failed action", JSON.stringify(e, null, 2)),
                        s.setExtra(
                          "actions",
                          JSON.stringify(f.slice(0, f.indexOf(e) + 1), null, 2)
                        ),
                        s.setExtra("platform", t.config.platform),
                        s.setExtra("device", JSON.stringify(t.device, null, 2)),
                        s.setExtra("osVersion", t.config.osVersion),
                        s.setExtra("config", JSON.stringify(t.config, null, 2)),
                        s.setTag("demo", !0),
                        E.TF.captureMessage(n instanceof Error ? n.message : n);
                    }),
                    S((t) =>
                      t.set(
                        e,
                        n instanceof Error
                          ? { error: n.message }
                          : { error: "Unknown error" }
                      )
                    ),
                    y(!1),
                    M(null);
                  return;
                }
              }
            y(!1), M(null);
          }, [f, e, O, t, r]);
        async function z() {
          (!t ||
            confirm(
              "This will restart the app and replay the recorded actions"
            )) &&
            (await A());
        }
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className:
              "h-full flex flex-col overflow-hidden divide-y divide-gray-200",
            children: [
              (0, s.jsx)("div", {
                className: "flex items-center justify-between",
                children: (0, s.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between gap-2 h-16 p-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex gap-2",
                      children: (0, s.jsxs)("button", {
                        className: (0, l.Z)(
                          "flex items-center gap-2 btn btn-outline",
                          n ? "!bg-black !text-white !fill-white" : ""
                        ),
                        onClick: () => r(),
                        disabled: !t,
                        children: [
                          (0, s.jsx)(u.b, {
                            weight: n ? "fill" : "regular",
                            className: (0, l.Z)(
                              "w-6 h-6 flex-shrink-0 fill-inherit"
                            ),
                          }),
                          (0, s.jsx)("span", {
                            className: "hidden sm:inline",
                            children: "Inspect",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex gap-2 items-center",
                      children: [
                        (0, s.jsxs)("button", {
                          className:
                            "flex items-center gap-2 btn btn-secondary",
                          disabled: !t || j || b,
                          onClick: () =>
                            void (
                              confirm("Clear recording and start over?") &&
                              (x([]), S(new WeakMap()), O())
                            ),
                          children: [
                            (0, s.jsx)(p.t, {
                              className: (0, l.Z)(
                                "sm:w-5 sm:h-5 w-6 h-6 flex-shrink-0",
                                j && !b && "animate-spin"
                              ),
                            }),
                            (0, s.jsx)("span", {
                              className: "hidden md:inline",
                              children: j && !b ? "Restarting" : "Start Over",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("button", {
                          className: "flex items-center gap-2 btn btn-green",
                          disabled: !t || b || 0 === f.length,
                          onClick: z,
                          children: [
                            (0, s.jsx)(h.s, {
                              weight: "fill",
                              className: (0, l.Z)("w-5 h-5 flex-shrink-0"),
                            }),
                            (0, s.jsx)("span", {
                              children: b ? "Playing" : "Replay",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                ref: m,
                className: "h-full w-full flex-1 overflow-auto",
                children: [
                  !f.length &&
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center h-full text-gray-500",
                      children: [
                        (0, s.jsx)("div", {
                          children:
                            "Interactions with the device will appear here",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("div", { children: "or" }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(U.Z, {
                          className: "btn btn-green",
                          accept: ".json",
                          onChange: async (e) => {
                            var t;
                            let n =
                              null === (t = e.target.files) || void 0 === t
                                ? void 0
                                : t[0];
                            try {
                              let e = new FileReader(),
                                t = await new Promise((t, s) => {
                                  (e.onload = (e) => {
                                    try {
                                      var n;
                                      let s = JSON.parse(
                                        null === (n = e.target) || void 0 === n
                                          ? void 0
                                          : n.result
                                      );
                                      if (Array.isArray(s)) t(s);
                                      else throw Error("Invalid actions file");
                                    } catch (e) {
                                      s(e);
                                    }
                                  }),
                                    (e.onerror = (e) => {
                                      s(e);
                                    }),
                                    e.readAsText(n);
                                });
                              x(t), S(new WeakMap());
                            } catch (e) {
                              console.error(e),
                                toastr.error("Error parsing JSON file");
                            }
                          },
                          children: "Import JSON",
                        }),
                      ],
                    }),
                  f.map((e, t) => {
                    let n = T.get(e),
                      r = n && "error" in n ? n.error : "";
                    return (0, s.jsx)(
                      "div",
                      {
                        ref: (e) => (g.current[t] = e),
                        children: (0, s.jsx)(X.ErrorBoundary, {
                          fallbackRender: (t) =>
                            (0, s.jsxs)("div", {
                              className: (0, l.Z)(
                                "p-4 bg-red-100 text-red-700"
                              ),
                              children: [
                                (0, s.jsx)("div", {
                                  className: "font-bold",
                                  children:
                                    'Error processing action of type "'.concat(
                                      e.type,
                                      '"'
                                    ),
                                }),
                                (0, s.jsx)("pre", {
                                  className: "whitespace-pre-wrap text-2xs",
                                  children: t.error.message,
                                }),
                              ],
                            }),
                          onError: (e) => {
                            console.error(
                              "Error rendering action ".concat(t),
                              e
                            );
                          },
                          children: (0, s.jsx)(G, {
                            action: e,
                            isPlaying: Z === e,
                            isSuccess: n && "success" in n,
                            error: r,
                            drawLine: t !== f.length - 1,
                          }),
                        }),
                      },
                      t
                    );
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "p-4 h-16 flex justify-between gap-2",
                children: [
                  (0, s.jsx)("button", {
                    className: "btn btn-secondary",
                    disabled: !t,
                    onClick: () => {
                      confirm("Clear all recorded actions?") &&
                        (x([]), S(new WeakMap()));
                    },
                    children: "Clear",
                  }),
                  (0, s.jsx)(w, {
                    className: "btn btn-primary",
                    anchor: "bottom-right",
                    disabled: !t,
                    items: (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(N, {
                          onClick: () => {
                            0 === o.length &&
                              i(W, {
                                actions: f,
                                onClose: () => {
                                  a();
                                },
                              });
                          },
                          children: "Export to JSON",
                        }),
                        (0, s.jsx)(N, {
                          onClick: () => {
                            0 === o.length &&
                              i(J, {
                                actions: f,
                                config: c,
                                onClose: () => {
                                  a();
                                },
                              });
                          },
                          children: "Export to Playwright Test",
                        }),
                      ],
                    }),
                    children: "Export",
                  }),
                ],
              }),
              " ",
            ],
          }),
        });
      }
      function G(e) {
        let {
            action: t,
            isPlaying: n,
            error: r,
            isSuccess: i,
            drawLine: a,
          } = e,
          o = "element" in t ? t.element : null,
          [u, p] = (0, v.useState)(!1),
          h = (0, v.useMemo)(
            () => "position" in t || "coordinates" in t || !!o,
            [t, o]
          ),
          b = (0, v.useMemo)(() => {
            switch (t.type) {
              case "tap":
              default:
                return f.S;
              case "swipe":
                return x.Y;
              case "keypress":
                if (ee(t.key)) return m._;
                return g.H;
              case "typeText":
                return g.H;
            }
          }, [t]),
          y = (0, v.useMemo)(() => Z(t), [t]);
        return (0, s.jsxs)(k.E.div, {
          className: (0, l.Z)(
            "relative flex items-center justify-between w-full pb-2 pt-1"
          ),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          children: [
            a &&
              (0, s.jsx)("div", {
                className:
                  "absolute top-3 -bottom-3 left-8 border-l border-l-gray-500",
              }),
            (0, s.jsxs)("div", {
              className: "overflow-auto w-full",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-start justify-between px-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-1 items-start gap-2 ",
                      children: [
                        (0, s.jsx)("div", {
                          className: (0, l.Z)(
                            "flex-shrink-0 rounded-full border p-1 z-10 w-8 h-8 flex items-center justify-center my-1.5",
                            "focus:outline-none focus-visible:ring",
                            "bg-white border-gray-500 text-gray-700"
                          ),
                          children: (0, s.jsx)(b, {}),
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, l.Z)(
                            "text-lg sm:text-xl p-2 w-full text-left rounded-lg"
                          ),
                          children: [
                            (0, s.jsx)("span", {
                              className: "",
                              children: y.name,
                            }),
                            " ",
                            y.onElement &&
                              (0, s.jsx)("span", { children: "on " }),
                            y.description &&
                              (0, s.jsx)("span", {
                                className: "",
                                children: y.description,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-start justify-center mr-4 w-32",
                      children:
                        h &&
                        (0, s.jsx)("button", {
                          className: (0, l.Z)(
                            "text-right p-2 mt-0.5 text-xs text-gray-700",
                            "hover:underline"
                          ),
                          disabled: !h,
                          onClick: () => {
                            p(!u);
                          },
                          children: u ? "Hide Details" : "Show Details",
                        }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-start justify-center w-8 h-8 mt-1 ",
                      children: [
                        n &&
                          (0, s.jsx)($, {
                            className: "bg-white text-gray-700",
                          }),
                        i &&
                          (0, s.jsx)(c.Z, {
                            className: "text-green w-full h-full",
                          }),
                        Boolean(r) &&
                          (0, s.jsx)("button", {
                            className: "w-full h-full",
                            onClick: () => {
                              p(!0);
                            },
                            children: (0, s.jsx)(d.Z, {
                              className: "text-red w-full h-full",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                u &&
                  (0, s.jsxs)("div", {
                    className: "mx-16",
                    children: [
                      (0, s.jsx)(K, { action: t }),
                      r &&
                        (0, s.jsxs)("div", {
                          className:
                            "mt-2 rounded-md bg-red/40 text-xs py-3 px-4",
                          children: [
                            (0, s.jsx)("div", {
                              className: "font-bold",
                              children: "Playback Error",
                            }),
                            (0, s.jsx)("pre", {
                              className: "whitespace-pre-wrap text-2xs",
                              children: r,
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
      function K(e) {
        let { action: t } = e,
          n = "element" in t ? t.element : null,
          r = "moves" in t ? t.moves : null,
          l = "position" in t ? t.position : null,
          i = (e) => {
            var t;
            let n =
              null !== (t = JSON.stringify(e, null, 2)) && void 0 !== t
                ? t
                : "";
            return (
              n.startsWith("{") ||
                n.startsWith("[") ||
                n.startsWith('"') ||
                "true" === n ||
                "false" === n ||
                (n = '"'.concat(n, '"')),
              n
            );
          };
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col gap-2 bg-gray-100 py-3 px-4 rounded-md text-xs max-h-64 overflow-auto",
          children: [
            n &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", {
                    className: "font-bold",
                    children: "Element",
                  }),
                  (0, s.jsx)("ul", {
                    className: "ml-4 space-y-0.5  whitespace-pre",
                    children: Object.entries({
                      ...n.attributes,
                      path: n.path,
                      accessibilityElements: n.accessibilityElements,
                    })
                      .filter((e) => {
                        let [, t] = e;
                        return null != t;
                      })
                      .map((e) => {
                        let [t, n] = e;
                        return Array.isArray(n)
                          ? (0, s.jsxs)(
                              "li",
                              {
                                children: [
                                  t,
                                  ":",
                                  " [",
                                  (0, s.jsx)("ul", {
                                    className: "ml-4 space-y-0.5",
                                    children: n.map((e, t) =>
                                      (0, s.jsxs)(
                                        "li",
                                        { children: [i(e), ","] },
                                        t
                                      )
                                    ),
                                  }),
                                  "]",
                                ],
                              },
                              t
                            )
                          : (0, s.jsxs)("li", { children: [t, ": ", i(n)] }, t);
                      }),
                  }),
                ],
              }),
            l &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", {
                    className: "font-bold",
                    children: "Position",
                  }),
                  (0, s.jsx)("ul", {
                    className: "ml-4 space-y-0.5",
                    children: (0, s.jsxs)("li", {
                      children: [
                        "number" == typeof l.x ? Math.round(100 * l.x) : l.x,
                        "%,",
                        " ",
                        "number" == typeof l.y ? Math.round(100 * l.y) : l.y,
                        "%",
                      ],
                    }),
                  }),
                ],
              }),
            r &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("span", {
                    className: "font-bold",
                    children: "Path",
                  }),
                  (0, s.jsx)("ul", {
                    className: "ml-4 space-y-0.5",
                    children: r.map((e, t) =>
                      (0, s.jsxs)(
                        "li",
                        {
                          children: [
                            "(",
                            Math.round(100 * e.x),
                            "%,",
                            " ",
                            Math.round(100 * e.y),
                            "%)",
                            t < r.length - 1 ? "," : "",
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
          ],
        });
      }
      function $(e) {
        return (0, s.jsx)("svg", {
          ...e,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsxs)("g", {
            children: [
              (0, s.jsx)("circle", {
                cx: "12",
                cy: "2.5",
                r: "1.5",
                opacity: ".14",
              }),
              (0, s.jsx)("circle", {
                cx: "16.75",
                cy: "3.77",
                r: "1.5",
                opacity: ".29",
              }),
              (0, s.jsx)("circle", {
                cx: "20.23",
                cy: "7.25",
                r: "1.5",
                opacity: ".43",
              }),
              (0, s.jsx)("circle", {
                cx: "21.50",
                cy: "12.00",
                r: "1.5",
                opacity: ".57",
              }),
              (0, s.jsx)("circle", {
                cx: "20.23",
                cy: "16.75",
                r: "1.5",
                opacity: ".71",
              }),
              (0, s.jsx)("circle", {
                cx: "16.75",
                cy: "20.23",
                r: "1.5",
                opacity: ".86",
              }),
              (0, s.jsx)("circle", { cx: "12", cy: "21.5", r: "1.5" }),
              (0, s.jsx)("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                calcMode: "discrete",
                dur: "0.75s",
                values:
                  "0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12",
                repeatCount: "indefinite",
              }),
            ],
          }),
        });
      }
      let Q = (e) => ["Enter", "Tab", "Backspace", "Escape"].includes(e),
        ee = (e) => ["rotateLeft", "rotateRight"].includes(e);
      var et = n(40105);
      function en(e) {
        let { className: t, onSearch: n } = e,
          [, r] = (0, v.useTransition)(),
          i = (e) => {
            r(() => {
              n(e.target.value);
            });
          };
        return (0, s.jsx)("div", {
          className: "flex items-center h-8 w-full",
          children: (0, s.jsx)("input", {
            className: (0, l.Z)(
              "w-full h-full border-gray-200 bg-gray-100 text-xs placeholder:text-gray-300",
              t
            ),
            placeholder: "Filter",
            onChange: i,
          }),
        });
      }
      function es() {
        let { config: e, sockets: t, isPlaying: n } = (0, i.Fy)(),
          r = (0, v.useRef)(null),
          [l, a] = (0, v.useState)([]),
          [o, c] = (0, v.useState)(""),
          d = (0, v.useMemo)(
            () => l.filter((e) => e.toLowerCase().includes(o.toLowerCase())),
            [o, l]
          );
        return (
          (0, v.useEffect)(() => {
            if (e.debug && t.appetizer) {
              let e = (e) => {
                a((t) => [...t, e.message]);
              };
              return (
                t.appetizer.on("debug", e),
                () => {
                  var n;
                  null === (n = t.appetizer) ||
                    void 0 === n ||
                    n.off("debug", e);
                }
              );
            }
          }, [e.debug, t.appetizer]),
          R(r, [d]),
          (0, v.useEffect)(() => {
            n && a([]);
          }, [n]),
          (0, s.jsxs)("div", {
            className: "flex flex-col w-full h-full",
            children: [
              0 === l.length &&
                (0, s.jsx)("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: "Log messages from the device will appear here",
                }),
              l.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "p-4 h-16 flex items-center gap-2 bg-white border-b border-b-gray-200",
                      children: [
                        (0, s.jsx)(en, { onSearch: c }),
                        (0, s.jsx)("div", {
                          children: (0, s.jsx)("button", {
                            className: "btn btn-outline w-40",
                            onClick: function () {
                              let e = new Blob([l.join("\n")], {
                                type: "application/text",
                              });
                              saveAs(e, (0, et.L0)() + " debug log.txt");
                            },
                            children: "Download Logs",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      ref: r,
                      className: "h-full w-full overflow-y-auto p-2 text-2xs",
                      children: (0, s.jsx)("pre", {
                        className: "whitespace-pre-wrap",
                        children: (0, s.jsx)("code", {
                          className: "text-gray-700",
                          children: d.slice(-5e3),
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var er = n(68786),
        el = n(51147),
        ei = n(3042),
        ea = n(32655);
      function eo() {
        let {
            config: e,
            sockets: t,
            isPlaying: n,
            devToolsConnection: r,
          } = (0, i.Fy)(),
          a = (0, v.useRef)(null),
          [o, c] = (0, v.useState)(""),
          [d, u] = (0, v.useState)([]);
        R(a, [d]);
        let p = (0, v.useMemo)(() => {
            let e = (0, ea.qY)();
            return (null == e ? void 0 : e.name) === "chrome";
          }, []),
          h = (0, v.useMemo)(
            () =>
              d.filter((e) => {
                var t, n, s, r;
                let l = [
                  null === (t = e.request) || void 0 === t ? void 0 : t.method,
                  null === (n = e.response) || void 0 === n ? void 0 : n.status,
                  null === (s = e.request) || void 0 === s ? void 0 : s.url,
                  null === (r = e.response) || void 0 === r
                    ? void 0
                    : r.content.mimeType,
                ].join(" ");
                return l.toLowerCase().includes(o.toLowerCase());
              }),
            [o, d]
          );
        return (
          (0, v.useEffect)(() => {
            if ("intercept" === e.proxy && t.appetizer) {
              let e = (e) => {
                u((t) => {
                  let n = t.find((t) => t.requestId === e.requestId);
                  return n
                    ? t.map((t) => (t.requestId === e.requestId ? e : t))
                    : [...t, e];
                });
              };
              return (
                t.appetizer.on("interceptRequest", e),
                t.appetizer.on("interceptResponse", e),
                () => {
                  var n, s;
                  null === (n = t.appetizer) ||
                    void 0 === n ||
                    n.off("interceptRequest", e),
                    null === (s = t.appetizer) ||
                      void 0 === s ||
                      s.off("interceptResponse", e);
                }
              );
            }
          }, [e.proxy, t.appetizer]),
          (0, v.useEffect)(() => {
            n && u([]);
          }, [n]),
          (0, s.jsxs)("div", {
            className: "flex flex-col w-full h-full",
            children: [
              0 === d.length &&
                (0, s.jsx)("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: "Network logs from the device will appear here",
                }),
              d.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "p-4 flex flex-col items-stretch lg:flex-row lg:items-center gap-2",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex-grow",
                          children: (0, s.jsx)(en, { onSearch: c }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-stretch sm:flex-row sm:items-center gap-2",
                          children: [
                            (0, s.jsx)("div", {
                              children: (0, s.jsx)("button", {
                                className:
                                  "btn btn-outline lg:btn-md  w-full sm:w-auto",
                                onClick: function () {
                                  let e = {
                                      log: {
                                        version: "1.2",
                                        creator: {
                                          name: "Appetize.io Interceptor Proxy",
                                          version: "1.0",
                                        },
                                        entries: d.filter((e) => !!e.response),
                                      },
                                    },
                                    t = new Blob([JSON.stringify(e, null, 2)], {
                                      type: "application/text",
                                    });
                                  saveAs(t, (0, et.L0)() + " network log.har");
                                },
                                children: "Download HAR",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              children: (0, s.jsx)(ei.Z, {
                                text: p ? "" : "Only works in Google Chrome",
                                children: (0, s.jsx)("a", {
                                  href: r,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: (0, l.Z)("!no-underline"),
                                  "aria-label":
                                    "Open network logs in Chrome DevTools",
                                  children: (0, s.jsxs)("button", {
                                    tabIndex: -1,
                                    className:
                                      "flex gap-2 btn btn-outline lg:btn-md w-full sm:w-auto",
                                    disabled: !r,
                                    children: [
                                      (0, s.jsx)(er.Z, {
                                        className: "-ml-1 w-5 h-5",
                                      }),
                                      "Chrome DevTools",
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      ref: a,
                      className: "w-full h-full overflow-auto",
                      children: (0, s.jsxs)("table", {
                        className: "w-full table-fixed",
                        children: [
                          (0, s.jsx)("thead", {
                            className: (0, l.Z)(
                              "sticky top-0 bg-white z-10",
                              "shadow-[inset_0_-1px_0_theme(colors.gray.200)]"
                            ),
                            children: (0, s.jsxs)("tr", {
                              className: (0, l.Z)(
                                "text-left h-12 font-bold uppercase text-2xs text-gray-600",
                                "[&>th]:font-semibold"
                              ),
                              children: [
                                (0, s.jsx)("th", { className: "w-5" }),
                                (0, s.jsx)("th", {
                                  className: "w-16 px-2",
                                  children: "Method",
                                }),
                                (0, s.jsx)("th", {
                                  className: "w-16 px-2",
                                  children: "Status",
                                }),
                                (0, s.jsx)("th", {
                                  className: "w-[32rem] px-2",
                                  children: "URL",
                                }),
                                (0, s.jsx)("th", {
                                  className: "w-32 px-2",
                                  children: "Type",
                                }),
                                (0, s.jsx)("th", {
                                  className: "w-16 px-2",
                                  children: "Size",
                                }),
                                (0, s.jsx)("th", {
                                  className: "w-16 px-2",
                                  children: "Time",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("tbody", {
                            className: "text-xs align-top",
                            children: h.map((e) =>
                              (0, s.jsx)(ec, { log: e }, e.requestId)
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function ec(e) {
        var t, n, r, i, a, o;
        let { log: c } = e,
          [d, u] = (0, v.useState)(!1),
          p = c.response && (c.response.bodySize / 1024).toFixed(1),
          h = c.response ? c.response.content.mimeType.split(";").shift() : "";
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("tr", {
              className: (0, l.Z)(
                "cursor-pointer select-none h-8",
                "[&>td]:py-3 [&>td]:px-2"
              ),
              onClick: (e) => {
                e.preventDefault(), u(!d);
              },
              children: [
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, s.jsx)("button", {
                      children: (0, s.jsx)(el.Z, {
                        className: (0, l.Z)(
                          "w-5 h-5 mt-0.5 text-gray-400",
                          d && "rotate-180"
                        ),
                      }),
                    }),
                  }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    className: "font-semibold",
                    children:
                      null === (t = c.request) || void 0 === t
                        ? void 0
                        : t.method,
                  }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    className: "w-12 overflow-hidden",
                    children: (0, s.jsx)(ed, { log: c }),
                  }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    className:
                      "w-full overflow-hidden whitespace-nowrap overflow-ellipsis",
                    children:
                      null === (n = c.request) || void 0 === n
                        ? void 0
                        : n.url.split("?")[0],
                  }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", { children: h }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    children: p ? "".concat(p, "kb") : "",
                  }),
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)("div", {
                    children: c.time ? "".concat(c.time, "ms") : "",
                  }),
                }),
              ],
            }),
            d &&
              (0, s.jsx)("tr", {
                className: (0, l.Z)(!d && "hidden"),
                children: (0, s.jsx)("td", {
                  colSpan: 7,
                  className: (0, l.Z)("overflow-hidden bg-gray-50 p-0"),
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex flex-col h-full gap-4 px-2 py-2 ml-7 text-2xs ",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-bold",
                            children: "URL",
                          }),
                          (0, s.jsx)("a", {
                            href: c.request.url,
                            target: "_blank",
                            rel: "noreferrer",
                            children: c.request.url,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-bold",
                            children: "Request Headers",
                          }),
                          Object.entries(
                            null !==
                              (i =
                                null === (r = c.request) || void 0 === r
                                  ? void 0
                                  : r.headers) && void 0 !== i
                              ? i
                              : {}
                          ).map((e, t) => {
                            let [, n] = e;
                            return (0, s.jsxs)(
                              "span",
                              {
                                children: [
                                  n.name,
                                  ":",
                                  " ",
                                  (0, s.jsx)("code", {
                                    className: "text-red-dark text-[0.7rem]",
                                    children: n.value,
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        ],
                      }),
                      c.response &&
                        (0, s.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, s.jsx)("span", {
                              className: "text-2xs font-bold",
                              children: "Response Headers",
                            }),
                            Object.entries(
                              null !== (a = c.response.headers) && void 0 !== a
                                ? a
                                : {}
                            ).map((e, t) => {
                              let [, n] = e;
                              return (0, s.jsxs)(
                                "span",
                                {
                                  children: [
                                    n.name,
                                    ":",
                                    " ",
                                    (0, s.jsx)("code", {
                                      className: "text-red-dark text-[0.7rem]",
                                      children: n.value,
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          ],
                        }),
                      c.response &&
                        (0, s.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, s.jsx)("span", {
                              className: "font-bold",
                              children: "Content",
                            }),
                            (0, s.jsx)("code", {
                              className: " text-red-dark text-[0.7rem]",
                              children:
                                null !== (o = c.response.content.text) &&
                                void 0 !== o
                                  ? o
                                  : "not available",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      function ed(e) {
        var t;
        let { log: n } = e,
          r = null === (t = n.response) || void 0 === t ? void 0 : t.status,
          i = r
            ? r >= 200 && r < 300
              ? "bg-green/50 text-green-dark"
              : r >= 300 && r < 400
              ? "bg-yellow/50 text-yellow-dark"
              : r >= 400 && r < 500
              ? "bg-red/50 text-red-dark"
              : "bg-gray-100 text-gray-800"
            : n.error
            ? "text-red-dark"
            : "text-gray-600 font-normal text-[0.7rem]",
          a = "";
        return (
          r
            ? (a = r.toString())
            : n.error
            ? (a = "(failed)")
            : n.response || (a = "(pending)"),
          (0, s.jsx)("div", {
            className: (0, l.Z)(
              "flex items-center justify-center rounded p-0.5 px-2 font-bold text-2xs",
              i
            ),
            children: a,
          })
        );
      }
      var eu = n(19612),
        ep = n(84714);
      function eh(e) {
        let { value: t, options: n } = e,
          r = (0, v.useRef)([]);
        function i(s, l) {
          var i, a, o;
          let c = 1 - l;
          2 === n.length &&
            (null === (i = n[l]) || void 0 === i ? void 0 : i.value) === t &&
            (s.preventDefault(),
            null === (a = e.onChange) || void 0 === a || a.call(e, n[c].value),
            null === (o = r.current[c]) || void 0 === o || o.focus());
        }
        return (0, s.jsx)(ep.E, {
          ...e,
          name: e.name,
          className: (0, l.Z)(
            "relative flex items-center justify-between bg-white rounded-full cursor-pointer w-full",
            e.disabled && "opacity-50 pointer-events-none"
          ),
          value: t,
          onChange: (t) => {
            var n;
            null === (n = e.onChange) || void 0 === n || n.call(e, t);
          },
          children: n.map((e, t) =>
            (0, s.jsx)(
              ep.E.Option,
              {
                ref: (e) => {
                  r.current[t] = e;
                },
                "data-testid": "toggle-button-".concat(e.value),
                value: e.value,
                onClick: (e) => {
                  i(e, t);
                },
                onKeyDown: (e) => {
                  " " === e.key && i(e, t);
                },
                children: (t) => {
                  let { checked: n } = t;
                  return (0, s.jsxs)("div", {
                    className: "relative h-8 flex items-center",
                    children: [
                      n &&
                        (0, s.jsx)("div", {
                          className:
                            "absolute inset-0 bg-black w-full h-full rounded-full",
                        }),
                      (0, s.jsx)("span", {
                        className: (0, l.Z)(
                          "relative block btn text-h6 transition-none",
                          n ? "text-white" : "text-black"
                        ),
                        children: e.label,
                      }),
                    ],
                  });
                },
              },
              e.value
            )
          ),
        });
      }
      var ef = n(86677),
        ex = n(3793),
        em = n(78164),
        eg = n.n(em),
        ev = n(38988),
        eb = n(20071),
        ey = n(29721);
      function ej() {
        let e = (function () {
            let { session: e, isInspecting: t } = eF(),
              [n, s] = (0, v.useState)([]),
              [r, l] = (0, v.useState)(),
              [i, a] = (0, v.useState)(),
              [o] = (0, eb.f)(
                () => {
                  r
                    ? a(() => o)
                    : l(
                        null == e
                          ? void 0
                          : e
                              .getUI({ timeout: 5e3 })
                              .then((e) => {
                                s(e);
                              })
                              .catch(console.warn)
                              .finally(() => l(void 0))
                      );
                },
                2e3,
                !0
              );
            return (
              (0, v.useEffect)(() => {
                !r && i && (i(), a(void 0));
              }, [r, i]),
              (0, v.useEffect)(() => {
                if (e) {
                  if (t) {
                    o();
                    let t = () => {
                      o();
                    };
                    return (
                      e.on("video", t),
                      () => {
                        e.off("video", t);
                      }
                    );
                  }
                } else s([]), l(void 0), a(void 0);
              }, [e, t, o]),
              (0, v.useMemo)(() => {
                let t = [
                    "accessibilityLabel",
                    "accessibilityIdentifier",
                    "accessibilityValue",
                    "text",
                    "resource-id",
                    "content-desc",
                  ],
                  s = [
                    { class: "SBMainSwitcherWindow" },
                    { class: "SBFluidSwitcherContentView" },
                    { class: "SBReusableSnapshotItemContainer" },
                    { class: "SBHomeGrabberView" },
                  ],
                  r = [];
                for (let t of n) {
                  let n = (function e(t) {
                    return t.reduce(
                      (t, n) => ({ ...t, [n.path]: n, ...e(n.children) }),
                      {}
                    );
                  })(t.children);
                  (null == e ? void 0 : e.config.platform) === "ios"
                    ? Object.entries(n).forEach((e) => {
                        let [t, n] = e;
                        r.push(n);
                      })
                    : r.push(...Object.values(n));
                }
                return r.filter((e) => {
                  var n;
                  let r =
                      (null === (n = e.accessibilityElements) || void 0 === n
                        ? void 0
                        : n.length) || t.some((t) => e.attributes[t]),
                    l = s.some((t) => {
                      var n;
                      return (
                        (n = e.attributes),
                        Object.entries(t).every((e) => {
                          let [t, s] = e;
                          return n[t] === s;
                        })
                      );
                    }),
                    i = 0 === e.bounds.height || 0 === e.bounds.width;
                  return r && !l && !i;
                });
              }, [null == e ? void 0 : e.config.platform, n])
            );
          })(),
          t = (function (e) {
            let t = (e) => window.matchMedia(e).matches,
              [n, s] = (0, v.useState)(t(e));
            function r() {
              s(t(e));
            }
            return (
              (0, v.useEffect)(() => {
                let t = window.matchMedia(e);
                return (
                  r(),
                  t.addListener
                    ? t.addListener(r)
                    : t.addEventListener("change", r),
                  () => {
                    t.removeListener
                      ? t.removeListener(r)
                      : t.removeEventListener("change", r);
                  }
                );
              }, [e]),
              n
            );
          })(
            "(hover: none) and (pointer: coarse), (hover: none) and (pointer: fine)"
          ),
          n = (0, v.useRef)(null),
          [r, l] = (0, v.useState)(void 0);
        return (0, s.jsxs)(ev.a, {
          screen: !0,
          className:
            e.length && t ? "pointer-events-auto" : "pointer-events-none",
          children: [
            (0, s.jsx)(ew, { ref: n, ui: e, selected: r }),
            (0, s.jsx)(eN, {
              containerRef: n,
              ui: e,
              selected: r,
              onSelect: l,
            }),
          ],
        });
      }
      let ew = v.forwardRef(function (e, t) {
        let { ui: n, selected: r } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, l.Z)("absolute top-0 left-0 right-0 bottom-0"),
          children: n.map((e) => {
            var t;
            let n =
              r && r.path === e.path && JSON.stringify(r) === JSON.stringify(e);
            return (0, s.jsxs)(
              "div",
              {
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute border-2 border-red border-dotted border-collapse box-content",
                    style: {
                      top: e.bounds.y,
                      left: e.bounds.x,
                      width: e.bounds.width,
                      height: e.bounds.height,
                      background: n ? "rgba(255,0,0,0.2)" : "",
                    },
                  }),
                  null === (t = e.accessibilityElements) || void 0 === t
                    ? void 0
                    : t.map((e, t) => {
                        let { accessibilityFrame: n } = e;
                        return n
                          ? (0, s.jsx)(
                              "div",
                              {
                                className:
                                  "absolute border-2 border-blue-500 border-dotted border-collapse box-content",
                                style: {
                                  top: n.y,
                                  left: n.x,
                                  width: n.width,
                                  height: n.height,
                                },
                              },
                              t
                            )
                          : null;
                      }),
                ],
              },
              e.path
            );
          }),
        });
      });
      function eN(e) {
        let { containerRef: t, ui: n, selected: r, onSelect: l } = e,
          {
            config: { scale: a },
          } = (0, i.Fy)(),
          [, o] = (0, v.useTransition)(),
          [c, d] = (0, v.useState)(!1),
          u = (function () {
            let { onChange: e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              [t, n] = (0, v.useState)();
            return (
              (0, v.useEffect)(() => {
                let t = (t) => {
                  n({ x: t.clientX, y: t.clientY }),
                    null == e || e({ x: t.clientX, y: t.clientY });
                };
                return (
                  window.addEventListener("pointerdown", t),
                  window.addEventListener("pointermove", t),
                  () => {
                    window.removeEventListener("pointermove", t),
                      window.removeEventListener("pointerdown", t);
                  }
                );
              }, [e]),
              t
            );
          })({
            onChange: (e) => {
              var s;
              let { x: r, y: i } = e,
                o =
                  null === (s = t.current) || void 0 === s
                    ? void 0
                    : s.getBoundingClientRect();
              if (
                o &&
                r >= o.left &&
                r <= o.right &&
                i >= o.top &&
                i <= o.bottom
              ) {
                d(!0);
                let e = (r - o.left) * (100 / a),
                  t = (i - o.top) * (100 / a),
                  [s] = n
                    .filter(
                      (n) =>
                        n.bounds.x <= e &&
                        n.bounds.x + n.bounds.width >= e &&
                        n.bounds.y <= t &&
                        n.bounds.y + n.bounds.height >= t
                    )
                    .sort(
                      (e, t) =>
                        e.bounds.width * e.bounds.height -
                        t.bounds.width * t.bounds.height
                    );
                l(s);
              } else l(void 0), d(!1);
            },
          });
        return (
          (0, v.useEffect)(() => {
            r &&
              n &&
              o(() => {
                let e = n.find((e) => e.path === r.path);
                (e && JSON.stringify(e) === JSON.stringify(r)) || l(void 0);
              });
          }, [n, r, l]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(eg(), {
                id: "3a0b85e6ddbe8052",
                dynamic: [c && "cursor: crosshair"],
                children: "*{".concat(
                  c && "cursor: crosshair",
                  "\n                }"
                ),
              }),
              (0, s.jsx)(ey.Z, {
                children: r
                  ? (0, s.jsx)(ek, {
                      element: r,
                      containerRef: t,
                      pointerPosition: u,
                      scale: a,
                    })
                  : (0, s.jsx)("div", {
                      className: eg().dynamic([
                        ["3a0b85e6ddbe8052", [c && "cursor: crosshair"]],
                      ]),
                    }),
              }),
            ],
          })
        );
      }
      function ek(e) {
        let { element: t, pointerPosition: n, containerRef: r, scale: l } = e,
          i = (0, v.useMemo)(() => {
            var e;
            let s =
              null === (e = r.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            if (n && s) {
              let e = {
                x: (n.x - s.left) * (100 / l),
                y: (n.y - s.top) * (100 / l),
              };
              return (function (e, t) {
                if (e.attributes) {
                  let t = z(e.attributes);
                  if (t) return t;
                }
                let { accessibilityElements: n } = e;
                if (n) return A(n, t);
              })(t, e);
            }
          }, [r, t, n, l]),
          a = (e) => {
            let { name: t, value: n } = e;
            return (0, s.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, s.jsx)("span", {
                  className: "text-green-light text-[0.65rem]",
                  children: t,
                }),
                (0, s.jsx)("span", { children: n }),
              ],
            });
          };
        return n
          ? (0, s.jsx)("div", {
              className: "fixed pointer-events-none z-dialog ",
              style: { top: n.y + 10, left: n.x + 10 },
              children: (0, s.jsxs)("div", {
                className:
                  "bg-black text-gray-100 p-2 rounded shadow text-[0.8rem] flex flex-col gap-1 max-w-sm",
                children: [
                  i && (0, s.jsxs)("div", { children: ['"', M(i, 100), '"'] }),
                  (0, s.jsxs)("div", {
                    className: "text-[0.75rem] flex flex-col gap-1 mt-2",
                    children: [
                      Object.entries({ ...t.attributes })
                        .sort((e, t) => {
                          let [n] = e,
                            [s] = t,
                            r = [
                              "accessibilityIdentifier",
                              "resource-id",
                              "accessibilityLabel",
                              "content-desc",
                              "text",
                              "accessibilityHint",
                              "accessibilityValue",
                            ];
                          return r.indexOf(s) - r.indexOf(n);
                        })
                        .map((e) => {
                          let [t, n] = e;
                          return (0, s.jsx)(
                            a,
                            { name: t, value: M("".concat(n), 100) },
                            t
                          );
                        }),
                      (0, s.jsx)(a, { name: "path", value: t.path }),
                    ],
                  }),
                ],
              }),
            })
          : (0, s.jsx)("div", {});
      }
      var eC = n(19552);
      function eE() {
        let { adbConnectionInfo: e } = (0, eC.F)(),
          t = null == e ? void 0 : e.command;
        return t
          ? (0, s.jsx)("div", {
              className: "flex flex-col w-full h-full",
              children: (0, s.jsxs)("div", {
                className: "px-4 py-2",
                children: [
                  (0, s.jsxs)("p", {
                    children: [
                      "Paste this command into shell and then run",
                      " ",
                      (0, s.jsx)("code", {
                        className: "bg-gray-100 p-1 rounded text-xs",
                        children: "adb devices",
                      }),
                    ],
                  }),
                  (0, s.jsx)(P.Z, {
                    keepCopyVisible: !0,
                    language: "bash",
                    children: t,
                  }),
                ],
              }),
            })
          : (0, s.jsx)("div", {
              className: "flex flex-col w-full h-full",
              children: (0, s.jsx)("div", {
                className:
                  "flex items-center justify-center h-full text-gray-500",
                children:
                  "Shell command will appear here once ADB tunnel is ready",
              }),
            });
      }
      var eT = n(5949),
        eS = n(5469);
      function eZ(e) {
        let { value: t, onChange: n } = e,
          [r, l] = (0, v.useState)(t);
        return (
          (0, v.useEffect)(() => {
            0 !== t && l(t);
          }, [t]),
          (0, s.jsxs)("div", {
            className: "flex items-center select-none",
            children: [
              (0, s.jsx)("div", {
                className: "leading-none cursor-pointer text-gray-700 pr-3",
                children:
                  Number(t) > 0
                    ? (0, s.jsx)(eT.Z, {
                        onClick: () => n(0),
                        className: "w-6",
                      })
                    : (0, s.jsx)(eS.Z, {
                        className: "w-6",
                        onClick: () => n(null != r ? r : 0.5),
                      }),
              }),
              (0, s.jsx)("div", {
                className: "leading-none",
                children: (0, s.jsx)("input", {
                  className: "max-width-[150px] p-0 cursor-pointer",
                  type: "range",
                  min: "0",
                  max: "1",
                  step: ".01",
                  value: t,
                  onChange: (e) => n(e.target.valueAsNumber),
                }),
              }),
            ],
          })
        );
      }
      var eM = n(53041),
        eO = n(2926),
        eA = n.n(eO),
        ez = n(13551),
        eR = n(91418);
      let eL = v.createContext({});
      function eF() {
        return (0, v.useContext)(eL);
      }
      function eD(e) {
        let { isCrossPlatform: t } = e,
          {
            app: n,
            config: r,
            isPlaying: c,
            isStreaming: d,
            isRotating: u,
            rotate: p,
            screenshot: h,
            session: f,
          } = (0, i.Fy)(),
          { devices: x } = (0, o.ZD)(),
          m = eV(),
          [g, b] = (0, v.useState)(!1),
          y = (0, v.useMemo)(() => {
            let { availableDevices: e, compatibleDevices: t } = x,
              n = !e.ios[r.deviceType] && !!t.ios[r.deviceType],
              s = !e.android[r.deviceType] && !!t.android[r.deviceType];
            return n || s;
          }, [r.deviceType, x]),
          j = (0, v.useMemo)(() => {
            var e, t;
            let { compatibleDevices: n } = x;
            if (y) return !0;
            let s = (0, a.Xf)(r.deviceType);
            return !!(null === (e = n[s]) || void 0 === e
              ? void 0
              : null === (t = e[r.deviceType]) || void 0 === t
              ? void 0
              : t.includes(r.osVersion));
          }, [r.deviceType, r.osVersion, x, y]),
          w = (0, v.useMemo)(() => {
            let e = Object.keys(x.availableDevices.ios);
            return (
              y &&
                "ios" === (0, a.Xf)(r.deviceType) &&
                !e.includes(r.deviceType) &&
                e.unshift(r.deviceType),
              e
            );
          }, [r.deviceType, x.availableDevices.ios, y]),
          N = (0, v.useMemo)(() => {
            let e = Object.keys(x.availableDevices.android);
            return (
              y &&
                "android" === (0, a.Xf)(r.deviceType) &&
                !e.includes(r.deviceType) &&
                e.unshift(r.deviceType),
              e
            );
          }, [r.deviceType, x.availableDevices.android, y]),
          k = (0, v.useMemo)(() => {
            let e = (0, a.tn)(x, r.deviceType).slice().reverse();
            return j && !e.includes(r.osVersion) && e.unshift(r.osVersion), e;
          }, [r.deviceType, r.osVersion, x, j]),
          C = (0, v.useCallback)(function (e) {
            let { className: t, label: n, children: r } = e;
            return (0,
            s.jsxs)("div", { className: t, children: [(0, s.jsx)("label", { className: "block mb-2 text-h5 font-bold normal-case", children: n }), r] });
          }, []),
          E = (0, v.useCallback)(function (e) {
            let { children: t, className: n } = e;
            return (0,
            s.jsx)("div", { className: (0, l.Z)("flex gap-2 flex-wrap w-full justify-between", "lg:gap-4 lg:flex-col lg:flex-nowrap lg:justify-center lg:items-start", n), children: t });
          }, []);
        async function T() {
          try {
            let e = await h();
            if (e) {
              let t = "Screenshot.".concat(e.mimeType.split("/").pop()),
                n = (0, et.L0)();
              eA().saveAs(
                new Blob([e.data], { type: e.mimeType }),
                ""
                  .concat(n, " ")
                  .concat(e.highRes ? "High Res" : "", " ")
                  .concat(t)
              );
            } else toastr.error("Screenshot error");
          } catch (e) {
            e instanceof Error && e.message
              ? toastr.error(e.message)
              : toastr.error("Screenshot error");
          }
        }
        async function S(e) {
          b(!0);
          try {
            if (e.size > 52428800)
              throw Error(
                "Your proposed upload exceeds the maximum allowed size of 50MB"
              );
            await (0, ez.ws)(
              ""
                .concat(f.path, "/session/")
                .concat(f.sessionToken, "/addMedia"),
              {
                data: e,
                headers: {
                  "X-Appetize-File-Name": e.name,
                  "Content-Type": e.type,
                },
              }
            ),
              toastr.remove(),
              toastr.info("Media sent to device! Check Photo Library!");
          } catch (e) {
            toastr.remove(),
              e instanceof Error
                ? toastr.error(e.message)
                : toastr.error(
                    "Error adding media. Please try again or email support."
                  );
          } finally {
            b(!1);
          }
        }
        let Z = t || (null == n ? void 0 : n.platform) === "ios",
          M = t || (null == n ? void 0 : n.platform) === "android",
          O = (0, a.Xf)(r.deviceType);
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: (0, l.Z)("flex flex-col max-w-lg mx-auto"),
            children: [
              (0, s.jsxs)("div", {
                className: (0, l.Z)(
                  "flex flex-col items-center gap-2 lg:gap-4 p-6 rounded-xl bg-gray"
                ),
                children: [
                  (0, s.jsxs)(E, {
                    children: [
                      (0, s.jsx)(C, {
                        label: "Device",
                        className: "w-[50%] lg:w-full",
                        children: (0, s.jsxs)(eu.Z, {
                          variant: "dark",
                          "data-testid": "device-select",
                          value: r.deviceType,
                          onChange: (e) =>
                            m({ deviceType: e.currentTarget.value }),
                          children: [
                            Z &&
                              (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("option", {
                                    disabled: !0,
                                    children: "iOS",
                                  }),
                                  w.map((e) =>
                                    (0, s.jsx)(
                                      "option",
                                      {
                                        value: e,
                                        children: ex.Z.devices[e].label,
                                      },
                                      e
                                    )
                                  ),
                                ],
                              }),
                            M &&
                              (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("option", {
                                    disabled: !0,
                                    children: "Android",
                                  }),
                                  N.map((e) =>
                                    (0, s.jsx)(
                                      "option",
                                      {
                                        value: e,
                                        children: ex.Z.devices[e].label,
                                      },
                                      e
                                    )
                                  ),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(C, {
                        label: "OS",
                        className: "w-[45%] lg:w-full",
                        children: (0, s.jsx)(eu.Z, {
                          variant: "dark",
                          "data-testid": "os-select",
                          value: r.osVersion,
                          onChange: (e) =>
                            m({ osVersion: e.currentTarget.value }),
                          children: k.map((e) =>
                            (0, s.jsxs)(
                              "option",
                              {
                                value: e,
                                children: [
                                  "ios" === (0, a.Xf)(r.deviceType)
                                    ? "iOS"
                                    : "Android",
                                  " ",
                                  e,
                                ],
                              },
                              e
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(E, {
                    children: (0, s.jsx)(C, {
                      label: "Orientation",
                      className: "w-full lg:w-auto",
                      children: (0, s.jsx)("div", {
                        className: "max-w-[12.5rem] lg:max-w-none",
                        children: (0, s.jsx)(eh, {
                          "data-testid": "orientation-toggle",
                          options: [
                            { label: "Portrait", value: "portrait" },
                            { label: "Landscape", value: "landscape" },
                          ],
                          value: r.orientation,
                          onChange: (e) => {
                            c
                              ? u || p("landscape" === e ? "left" : "right")
                              : m({ rotation: "landscape" === e ? 270 : 0 });
                          },
                        }),
                      }),
                    }),
                  }),
                  (0, s.jsxs)(E, {
                    children: [
                      (0, s.jsx)(C, {
                        label: "AppRecorder",
                        children: (0, s.jsx)(eh, {
                          "data-testid": "automation-toggle",
                          disabled: !eB(r.platform, r.osVersion),
                          options: [
                            { label: "Off", value: "off" },
                            { label: "On", value: "on" },
                          ],
                          value: r.record ? "on" : "off",
                          onChange: (e) => {
                            m({ record: "on" === e });
                          },
                        }),
                      }),
                      (0, s.jsx)(C, {
                        label: "Network Logs",
                        children: (0, s.jsx)(eh, {
                          "data-testid": "network-logs-toggle",
                          options: [
                            { label: "Off", value: "off" },
                            { label: "On", value: "on" },
                          ],
                          value: "intercept" === r.proxy ? "on" : "off",
                          onChange: (e) => {
                            m({ proxy: "on" === e ? "intercept" : void 0 });
                          },
                        }),
                      }),
                      (0, s.jsx)(C, {
                        label: "Debug Logs",
                        children: (0, s.jsx)(eh, {
                          "data-testid": "debug-logs-toggle",
                          options: [
                            { label: "Off", value: "off" },
                            { label: "On", value: "on" },
                          ],
                          value: r.debug ? "on" : "off",
                          onChange: (e) => {
                            m({ debug: "on" === e });
                          },
                        }),
                      }),
                      "android" === O &&
                        (0, s.jsx)(C, {
                          label: "ADB Tunnel",
                          children: (0, s.jsx)(eh, {
                            "data-testid": "adb-toggle",
                            options: [
                              { label: "Off", value: "off" },
                              { label: "On", value: "on" },
                            ],
                            value: r.enableAdb ? "on" : "off",
                            onChange: (e) => {
                              m({ enableAdb: "on" === e });
                            },
                          }),
                        }),
                      r.audio &&
                        c &&
                        (0, s.jsx)(C, {
                          label: "Volume",
                          children: (0, s.jsx)(eZ, {
                            value: r.volume,
                            onChange: (e) => m({ volume: e }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              d &&
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4 py-4",
                  children: [
                    (0, s.jsx)("button", {
                      className: "btn btn-primary w-full",
                      onClick: T,
                      children: "Save Screenshot",
                    }),
                    (0, s.jsx)(U.Z, {
                      className: "btn btn-primary w-full",
                      accept: "image/*",
                      disabled: g,
                      onChange: (e) => {
                        var t;
                        let n =
                          null === (t = e.target.files) || void 0 === t
                            ? void 0
                            : t[0];
                        n && S(n), (e.currentTarget.value = "");
                      },
                      children: "Add Media",
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function eP() {
        let { session: e } = eF(),
          t = eV(),
          { config: n } = (0, i.Fy)(),
          [o, c] = (0, eR.h)(),
          [d, u] = (0, eR.h)();
        (0, v.useEffect)(() => {
          window.session = e;
        }, [e]);
        let p = eB(n.platform, n.osVersion),
          h = (0, a.Xf)(n.deviceType),
          f = [
            {
              label: "AppRecorder",
              component: Y,
              disabled: !n.record,
              disabledMessage: p
                ? "Enable AppRecorder to record and playback actions on any device"
                : "App Recorder is not supported on Android 6 or lower",
              onEnable: p
                ? () => {
                    t({ record: !0 });
                  }
                : void 0,
            },
            {
              label: "Network Logs",
              component: eo,
              disabled: "intercept" !== n.proxy,
              disabledMessage:
                "Enable Network Logs to view and inspect HTTP requests",
              onEnable: () => {
                t({ proxy: "intercept" });
              },
            },
            {
              label: "Debug Logs",
              component: es,
              disabled: !n.debug,
              disabledMessage:
                "Enable Debug Logs to view and inspect device logs",
              onEnable: () => {
                t({ debug: !0 });
              },
            },
            "android" === h && {
              label: "ADB Tunnel",
              component: eE,
              disabled: !n.enableAdb,
              disabledMessage: "Enable ADB to open a tunnel to the device",
              onEnable: () => {
                t({ enableAdb: !0 });
              },
            },
          ].filter(Boolean);
        return (0, s.jsx)("div", {
          className: "w-full h-[32rem] flex flex-col items-start rounded-xl",
          children: (0, s.jsxs)(r.O.Group, {
            children: [
              (0, s.jsx)("div", {
                ref: o,
                className:
                  "max-w-full bg-gray-100 rounded-tr-xl rounded-tl-xl border-t-2 border-x-2 border-black",
                children: (0, s.jsx)(r.O.List, {
                  className: "flex overflow-x-auto overflow-y-hidden -mb-0.5",
                  children: f.map((e, t) =>
                    (0, s.jsx)(
                      r.O,
                      {
                        className: (0, l.Z)(
                          "p-2 -mb-0.5 z-10 border-b-2 border-x-2 border-b-black border-x-transparent",
                          "first:rounded-tl-xl last:rounded-tr-xl",
                          "ui-selected:border-b-white ui-selected:bg-white ui-selected:font-bold ui-selected:border-x-black ui-selected:first:border-l-transparent ui-selected:last:border-r-transparent"
                        ),
                        onClick: () => {
                          requestAnimationFrame(() => {
                            document.activeElement instanceof HTMLElement &&
                              document.activeElement.blur();
                          });
                        },
                        children: e.label,
                      },
                      t
                    )
                  ),
                }),
              }),
              (0, s.jsx)(r.O.Panels, {
                ref: d,
                className: (0, l.Z)(
                  "relative flex bg-white h-full w-full overflow-hidden border-2 border-black rounded-xl rounded-tl-none",
                  Math.round(u.width) <= Math.round(c.width) &&
                    "rounded-tr-none"
                ),
                children: f.map((e, t) => {
                  let n = e.component;
                  return (0, s.jsxs)(
                    r.O.Panel,
                    {
                      className: "flex-1 w-full h-full",
                      unmount: !1,
                      children: [
                        e.disabled &&
                          (0, s.jsx)("div", {
                            className:
                              "absolute inset-0 bg-white flex items-center justify-center",
                            children: (0, s.jsxs)("div", {
                              className: "text-center p-8",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-2xl font-bold",
                                  children: e.disabledMessage,
                                }),
                                e.onEnable &&
                                  (0, s.jsxs)("button", {
                                    className: "mt-4 btn btn-green btn-lg",
                                    onClick: e.onEnable,
                                    children: ["Enable ", e.label],
                                  }),
                              ],
                            }),
                          }),
                        !e.disabled &&
                          (0, s.jsx)(X.ErrorBoundary, {
                            fallbackRender: () =>
                              (0, s.jsx)("div", {
                                className:
                                  "text-2xl font-bold mt-4 p-4 text-red-light flex items-center h-full justify-center",
                                children:
                                  "Oops! Something went wrong. Our team has been notified.",
                              }),
                            onError: (e) => E.TF.captureException(e),
                            children: (0, s.jsx)(n, {}),
                          }),
                      ],
                    },
                    t
                  );
                }),
              }),
            ],
          }),
        });
      }
      function eB(e, t) {
        return !("android" === e && 7 > parseInt(t));
      }
      function eV() {
        let e = (0, eM.q)(),
          {
            setConfig: t,
            config: n,
            endSession: s,
            isPlaying: r,
          } = (0, i.Fy)();
        return (l) => {
          if (
            (!0 === n.enableAdb && !0 === l.record) ||
            (!0 === n.record && !0 === l.enableAdb) ||
            (!0 === l.record && !0 === l.enableAdb)
          ) {
            e.remove(),
              e.warning(
                "AppRecorder and ADB Tunnel cannot be enabled together"
              );
            return;
          }
          if (
            r &&
            [
              "record",
              "proxy",
              "debug",
              "deviceType",
              "osVersion",
              "enableAdb",
            ].some((e) => n[e] !== l[e])
          ) {
            if (!confirm("This will end your current session. Are you sure?"))
              return;
            s();
          }
          t(l);
        };
      }
      var eq = function (e) {
        let [t, n] = (0, v.useState)(e.app),
          [r, o] = (0, v.useState)(!1),
          [c, d] = (0, v.useState)(void 0),
          u = (0, ef.useRouter)(),
          p = (0, v.useCallback)((e) => {
            o((t) => (null != e ? e : !t));
          }, []),
          h = (0, v.useMemo)(() => {
            {
              var t, n;
              let s = "record" in u.query ? "true" === u.query.record : void 0,
                r =
                  void 0 !== s &&
                  s !==
                    (null === (t = e.config) || void 0 === t
                      ? void 0
                      : t.record)
                    ? s
                    : null === (n = e.config) || void 0 === n
                    ? void 0
                    : n.record;
              return window.appetize.getWindowClient({ record: r });
            }
          }, []);
        if (
          ((0, v.useEffect)(
            () => (
              h &&
                h.on("session", (e) => {
                  d(e),
                    e.on("disconnect", () => {
                      d(void 0);
                    });
                }),
              () => {
                d(void 0);
              }
            ),
            [h]
          ),
          (0, v.useEffect)(() => {
            n(e.app);
          }, [e.app]),
          !t)
        )
          throw Error("Missing props.app in StandardDeviceView component");
        return (0, s.jsx)(eL.Provider, {
          value: { client: h, session: c, isInspecting: r, toggleInspector: p },
          children: (0, s.jsx)(i.Yk, {
            app: t,
            parseConfigFromUrl: e.parseConfigFromUrl,
            autoScale: !0,
            isCrossPlatform: e.isCrossPlatform,
            config: {
              ...e.config,
              deviceColor: "white",
              showRotateButtons: !0,
            },
            onConfig: e.onConfig,
            children: (t) => {
              let { config: n } = t;
              return (0, s.jsxs)("div", {
                className: "flex flex-col gap-8 pb-2",
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, l.Z)(
                      "flex flex-col items-stretch justify-around gap-8",
                      "lg:flex-row lg:justify-center"
                    ),
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex-shrink",
                        children: (0, s.jsx)(eD, {
                          isCrossPlatform: e.isCrossPlatform,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: (0, l.Z)(
                          "w-full overflow-hidden lg:flex-1",
                          "landscape" === n.orientation && "my-4",
                          ...((0, a.Em)(n.deviceType)
                            ? [
                                "portrait" === n.orientation &&
                                  "h-[45rem] lg:h-[46rem]",
                                "landscape" === n.orientation &&
                                  "h-[35rem] lg:h-[40rem]",
                              ]
                            : [
                                "portrait" === n.orientation &&
                                  "h-[40rem] lg:h-[42rem]",
                                "landscape" === n.orientation &&
                                  "h-[25rem] lg:h-[30rem]",
                              ])
                        ),
                        children: (0, s.jsx)(i.ZP, {
                          center: !0,
                          children:
                            r &&
                            (0, s.jsx)(X.ErrorBoundary, {
                              fallbackRender: () => null,
                              onError: (e) => {
                                E.TF.captureException(e);
                              },
                              children: (0, s.jsx)(ej, {}),
                            }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex",
                    children: (0, s.jsx)(eP, {}),
                  }),
                ],
              });
            },
          }),
        });
      };
    },
    91418: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var s = n(97329),
        r = n(27378);
      function l() {
        let [e, t] = (0, r.useState)({ x: 0, y: 0, width: 0, height: 0 }),
          n = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (!(null == n ? void 0 : n.current)) return;
            let e = new s.Z(() => {
              (null == n ? void 0 : n.current) &&
                t(n.current.getBoundingClientRect());
            });
            return (
              e.observe(null == n ? void 0 : n.current),
              () => {
                e.disconnect();
              }
            );
          }, []),
          [n, e]
        );
      }
    },
  },
]);
