"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3466],
  {
    63369: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(24246),
        a = r(27378),
        s = r(38944),
        o = r(6725),
        i = r(15596);
      function l(e) {
        let {
            className: t = "",
            keepCopyVisible: r,
            children: s,
            language: o,
          } = e,
          [i, l] = (0, a.useState)(!1);
        return (0, n.jsxs)("span", {
          className:
            "relative rounded-md block min-w-0 bg-gray border-gray-trim border dark:bg-gray-800 dark:border-gray-dark-trim ".concat(
              t
            ),
          onMouseEnter: () => {
            l(!0);
          },
          onMouseLeave: () => {
            l(!1);
          },
          children: [
            (0, n.jsx)("code", {
              className: "",
              children: (0, n.jsx)(d, {
                className:
                  "text-xs overflow-x-auto block p-4 max-w-full text-black dark:text-gray-100",
                language: null != o ? o : "",
                code: s,
              }),
            }),
            (i || r) &&
              (0, n.jsx)("button", {
                className:
                  "absolute top-1.5 right-2 p-1 rounded-md opacity-80 bg-gray-600 dark:bg-gray-700 hover:opacity-100",
                onClick: () => {
                  navigator.clipboard.writeText(s),
                    toastr.success("Copied to clipboard", void 0, {
                      timeOut: 1500,
                    });
                },
                children: (0, n.jsx)(c, {
                  className: "h-5 w-5 text-white dark:text-gray-100",
                }),
              }),
          ],
        });
      }
      function c(e) {
        return (0, n.jsxs)("svg", {
          ...e,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          children: [
            (0, n.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z",
            }),
            (0, n.jsx)("title", { children: "Copy Code" }),
          ],
        });
      }
      function d(e) {
        return (0, n.jsx)(o.ZP, {
          ...o.lG,
          theme: i.Z,
          ...e,
          language: e.language,
          children: (t) => {
            let {
              className: r,
              style: a,
              tokens: o,
              getLineProps: i,
              getTokenProps: l,
            } = t;
            return (0, n.jsx)("pre", {
              className: (0, s.Z)(
                "rounded text-xs p-2 w-full h-full whitespace-pre-wrap bg-gray-800",
                r,
                e.className
              ),
              style: { ...a, backgroundColor: void 0 },
              children: o.map((e, t) =>
                (0, n.jsx)(
                  "div",
                  {
                    ...i({ line: e, key: t }),
                    children: e.map((e, t) =>
                      (0, n.jsx)("span", { ...l({ token: e, key: t }) }, t)
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
    12565: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(24246),
        a = r(34090);
      function s(e) {
        let {
            action: t,
            autoFocus: r,
            confirmWord: s,
            onConfirm: o,
            onCancel: i,
          } = e,
          {
            isSubmitting: l,
            values: c,
            handleSubmit: d,
            handleChange: u,
          } = (0, a.TA)({
            initialValues: { confirmation: "" },
            onSubmit: async () => o(),
          });
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("form", {
            onSubmit: d,
            className: "flex gap-2",
            children: [
              (0, n.jsx)("input", {
                name: "confirmation",
                type: "text",
                placeholder: "Type ".concat(s, " to confirm"),
                autoFocus: r,
                value: c.confirmation,
                onChange: u,
              }),
              (0, n.jsx)("button", {
                disabled: s !== c.confirmation || l,
                type: "submit",
                className: "btn btn-danger",
                onClick: () => d(),
                children: t,
              }),
              (0, n.jsx)("button", {
                className: "btn btn-secondary btn-sm",
                onClick: i,
                type: "button",
                children: "Cancel",
              }),
            ],
          }),
        });
      }
    },
    72906: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(24246),
        a = r(34090);
      function s(e) {
        let { value: t, onConfirm: r, onCancel: s, autoFocus: o } = e;
        return (0, n.jsx)(a.J9, {
          initialValues: { note: t },
          onSubmit: async (e) => {
            await r(e.note);
          },
          children: (e) => {
            let { isSubmitting: t, dirty: r } = e;
            return (0, n.jsx)("div", {
              className: "root",
              children: (0, n.jsxs)(a.l0, {
                children: [
                  (0, n.jsx)(a.gN, {
                    className: "w-full min-h-[80px]",
                    name: "note",
                    component: "textarea",
                    placeholder: "Add note...",
                    autoFocus: o,
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex gap-2 pt-2",
                    children: [
                      (0, n.jsx)("button", {
                        disabled: !r || t,
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Update",
                      }),
                      (0, n.jsx)("button", {
                        className: "btn btn-secondary btn-sm",
                        onClick: s,
                        type: "button",
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
        });
      }
    },
    42351: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(24246),
        a = r(78164),
        s = r.n(a),
        o = r(38944);
      function i(e) {
        let {
          value: t,
          color: r = "#355067",
          backgroundColor: a = "#c2c7cc",
          height: i = "4px",
          duration: l = 0.3,
          ...c
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s(), {
              id: "777c503210e3bd9a",
              dynamic: [i, a, 100 * t, r, l],
              children:
                ".root.__jsx-style-dynamic-selector{position:relative;width:100%}.bar.__jsx-style-dynamic-selector{overflow:hidden;height:"
                  .concat(i, ";background-color:")
                  .concat(
                    a,
                    "}.progress.__jsx-style-dynamic-selector{height:100%;width:"
                  )
                  .concat(100 * t, "%;background-color:")
                  .concat(r, ";-webkit-transition:width ")
                  .concat(l, "s linear;-moz-transition:width ")
                  .concat(l, "s linear;-o-transition:width ")
                  .concat(l, "s linear;transition:width ")
                  .concat(l, "s linear}"),
            }),
            (0, n.jsx)("div", {
              ...c,
              className:
                s().dynamic([["777c503210e3bd9a", [i, a, 100 * t, r, l]]]) +
                " " +
                ((0, o.Z)("root", c.className) || ""),
              children: (0, n.jsx)("div", {
                className:
                  s().dynamic([["777c503210e3bd9a", [i, a, 100 * t, r, l]]]) +
                  " bar",
                children: (0, n.jsx)("div", {
                  className:
                    s().dynamic([["777c503210e3bd9a", [i, a, 100 * t, r, l]]]) +
                    " progress",
                }),
              }),
            }),
          ],
        });
      }
    },
    91173: function (e, t, r) {
      r.d(t, {
        _: function () {
          return b;
        },
        Z: function () {
          return g;
        },
      });
      var n = r(24246),
        a = r(34090),
        s = r(27378),
        o = r(42351),
        i = r(77866),
        l = r(37116),
        c = r(91125),
        d = r(12625),
        u = r(38944),
        p = r(63369),
        m = r(91418);
      let f = "border-[#E1E1E1] dark:border-[#4E4E4E]";
      function x(e) {
        let { tabs: t } = e,
          [r, a] = (0, m.h)(),
          [o, i] = (0, m.h)();
        return (0, n.jsxs)(d.O.Group, {
          children: [
            (0, n.jsx)(d.O.List, {
              className:
                "flex max-w-full overflow-x-auto mb-[-1px] w-fit border-x border-t ".concat(
                  f,
                  " rounded-tr-md rounded-tl-md"
                ),
              ref: r,
              children: t.map((e, r) =>
                (0, n.jsx)(
                  d.O,
                  {
                    as: s.Fragment,
                    children: (a) => {
                      let { selected: s } = a;
                      return (0, n.jsx)("div", {
                        className: (0, u.Z)(
                          "focus-visible:outline-none",
                          f,
                          s &&
                            "bg-gray dark:bg-gray-800 border-x first:border-l-0 last:border-r-0",
                          !s &&
                            "bg-white dark:bg-gray-800/30 text-black/70 dark:text-white/50 hover:bg-gray-50 hover:dark:bg-gray-100/5"
                        ),
                        children: (0, n.jsx)("button", {
                          className: (0, u.Z)(
                            "p-2 px-4 relative z-[2] border-gray dark:border-b-gray-800",
                            s && "border-b",
                            !s && "border-x border-x-transparent",
                            0 === r && "border-l-0",
                            r === t.length - 1 && "border-r-0"
                          ),
                          children: e.title,
                        }),
                      });
                    },
                  },
                  "".concat(r).concat(e.title)
                )
              ),
            }),
            (0, n.jsx)(d.O.Panels, {
              children: t.map((e, t) =>
                (0, n.jsx)(
                  d.O.Panel,
                  {
                    children: (0, n.jsx)("div", {
                      ref: o,
                      children: (0, n.jsx)(p.Z, {
                        className: (0, u.Z)(
                          "rounded-tl-none",
                          a.width >= i.width && "rounded-tr-none",
                          f
                        ),
                        language: e.language,
                        children: e.body,
                      }),
                    }),
                  },
                  "".concat(t).concat(e.title)
                )
              ),
            }),
          ],
        });
      }
      function h(e) {
        let {
            name: t,
            accept: r,
            onFileChanged: a,
            disabled: o = !1,
            disabledText: i = "",
            required: l = !1,
          } = e,
          [c, d] = (0, s.useState)(!1),
          u = (0, s.useRef)(null),
          [p, m] = (0, s.useState)(null),
          f = (e) => {
            var t;
            m(
              null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                ? t
                : null
            ),
              a && a(e);
          },
          x = (e) => {
            var t, r;
            f(
              null !==
                (r =
                  null === (t = e.target.files) || void 0 === t
                    ? void 0
                    : t.item(0)) && void 0 !== r
                ? r
                : null
            );
          },
          h = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              "dragenter" === e.type || "dragover" === e.type
                ? d(!0)
                : "dragleave" === e.type && d(!1);
          },
          g = (e) => {
            var t, r, n, a;
            e.preventDefault(),
              e.stopPropagation(),
              d(!1),
              f(
                null !==
                  (n =
                    null === (t = e.dataTransfer) || void 0 === t
                      ? void 0
                      : null === (r = t.files) || void 0 === r
                      ? void 0
                      : r.item(0)) && void 0 !== n
                  ? n
                  : null
              ),
              u.current &&
                (u.current.files =
                  null === (a = e.dataTransfer) || void 0 === a
                    ? void 0
                    : a.files);
          };
        return (0, n.jsxs)("div", {
          onDragEnter: h,
          className: "relative flex flex-col w-full",
          children: [
            (0, n.jsxs)("label", {
              htmlFor: t,
              className:
                "rounded-md border-dashed border-2 flex flex-col items-center justify-center p-4 border-gray-300 dark:border-gray-100/40 ".concat(
                  c || null !== p
                    ? "bg-gray dark:bg-gray-800 border-gray-trim dark:border-gray-dark-trim"
                    : "bg-gray-50 dark:bg-gray-800/30"
                ),
              onClick: (e) => {
                var t;
                null === (t = u.current) || void 0 === t || t.click(),
                  e.preventDefault();
              },
              children: [
                (0, n.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-10 h-10 text-gray-500 dark:text-gray-100/60",
                  children: (0, n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
                  }),
                }),
                null !== p &&
                  (0, n.jsx)("p", {
                    className:
                      "normal-case font-semibold text-sm md:text-base truncate max-w-full text-gray-500 dark:text-gray-100/60",
                    children: p,
                  }),
                null === p &&
                  (0, n.jsxs)("p", {
                    className:
                      "text-center normal-case text-gray-500 dark:text-gray-100/60",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "font-semibold text-sm md:text-base text-gray-500 dark:text-gray-100/60",
                        children: o ? i : "Drag & Drop File",
                      }),
                      !o &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [" ", (0, n.jsx)("br", {}), " or"],
                        }),
                    ],
                  }),
                (0, n.jsx)("button", {
                  className:
                    "btn btn-md btn-primary dark:btn-secondary whitespace-pre-line max-w-full",
                  disabled: o,
                  children: o
                    ? null != i
                      ? i
                      : "File Selected"
                    : "Select a File",
                }),
              ],
            }),
            (0, n.jsx)("input", {
              type: "file",
              id: t,
              name: t,
              className: "opacity-0 h-[1px] p-0 m-0 border-0",
              ref: u,
              onChange: x,
              accept: r,
              required: l,
              tabIndex: -1,
              disabled: o,
            }),
            c &&
              (0, n.jsx)("div", {
                className: "absolute top-0 bottom-0 right-0 left-0",
                onDragEnter: h,
                onDragLeave: h,
                onDragOver: h,
                onDrop: g,
              }),
          ],
        });
      }
      function g(e) {
        let {
            allowReupload: t = !1,
            onUpload: r,
            onError: a,
            hideUploadButton: o = !1,
          } = e,
          [i, l] = (0, s.useState)(!1),
          [c, d] = (0, s.useState)(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("p", {
                  children: [
                    "For",
                    " ",
                    (0, n.jsx)("span", {
                      className: "dark:text-pink font-semibold",
                      children: "iOS",
                    }),
                    ", upload a ",
                    (0, n.jsx)("code", {
                      className: "dark:text-green",
                      children: ".zip",
                    }),
                    " or",
                    " ",
                    (0, n.jsx)("code", {
                      className: "dark:text-green",
                      children: ".tar.gz",
                    }),
                    " file containing your compressed",
                    " ",
                    (0, n.jsx)("code", {
                      className: "dark:text-green",
                      children: ".app",
                    }),
                    " bundle.",
                  ],
                }),
                (0, n.jsx)("p", {
                  children: (0, n.jsxs)("a", {
                    onClick: () => l((e) => !e),
                    className: "select-none",
                    children: [
                      i ? "Hide" : "Show",
                      " detailed iOS instructions",
                    ],
                  }),
                }),
                (0, n.jsxs)("span", {
                  className: i ? "" : "sr-only",
                  children: [
                    (0, n.jsxs)("p", {
                      children: [
                        "Your .app bundle must represent a simulator build of your app. After running the iOS simulator in Xcode, you can find your .app bundle by navigating to",
                        " ",
                        (0, n.jsx)("span", {
                          className: "text-[#e16f62] dark:text-yellow",
                          children:
                            "Product → Show Build Folder in Finder → Products/Debug-iphonesimulator",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Alternatively, you can run the following command in your project directory:",
                    }),
                    (0, n.jsx)("div", {
                      className: "my-2",
                      children: (0, n.jsx)(x, {
                        tabs: [
                          {
                            title: "Using .xcodeproj",
                            language: "bash",
                            body: "xcodebuild -project '<project_name>.xcodeproj' \\\n	-scheme '<scheme_name>' \\\n	-sdk iphonesimulator \\\n	-configuration Debug",
                          },
                          {
                            title: "Using .xcworkspace",
                            language: "bash",
                            body: "xcodebuild -workspace '<your_workspace_name>.xcworkspace' \\\n	-scheme '<scheme_name>' \\ \n	-sdk iphonesimulator \\\n	-configuration Debug",
                          },
                        ],
                      }),
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "You can then zip the .app bundle found in",
                        " ",
                        (0, n.jsxs)("code", {
                          children: [
                            "build/",
                            (0, n.jsx)("wbr", {}),
                            "Debug-iphonesimulator/",
                          ],
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "For",
                    " ",
                    (0, n.jsx)("span", {
                      className: "dark:text-pink font-semibold",
                      children: "Android",
                    }),
                    ", upload the ",
                    (0, n.jsx)("code", {
                      className: "dark:text-green",
                      children: ".apk",
                    }),
                    " ",
                    "containing your app.",
                  ],
                }),
                (0, n.jsx)("p", {
                  children: (0, n.jsxs)("a", {
                    onClick: () => d((e) => !e),
                    className: "select-none",
                    children: [
                      c ? "Hide" : "Show",
                      " detailed Android instructions",
                    ],
                  }),
                }),
                (0, n.jsxs)("span", {
                  className: c ? "" : "sr-only",
                  children: [
                    (0, n.jsx)("p", {
                      children:
                        "You can build your app via Android Studio, or by running the following command in your project directory:",
                    }),
                    (0, n.jsx)(p.Z, {
                      className: "my-2",
                      language: "bash",
                      children: "./gradlew <assembleDebug | assembleRelease>",
                    }),
                    " ",
                    (0, n.jsxs)("p", {
                      children: [
                        "You can then find the .apk file in",
                        " ",
                        (0, n.jsxs)("code", {
                          children: [
                            "<project-name>/",
                            (0, n.jsx)("wbr", {}),
                            "<module-name>/",
                            (0, n.jsx)("wbr", {}),
                            "build/",
                            (0, n.jsx)("wbr", {}),
                            "outputs/",
                            (0, n.jsx)("wbr", {}),
                            "apk/",
                          ],
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "For more information, please see our",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://docs.appetize.io/core-features/uploading-apps",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "dark:text-white underline underline-offset-4",
                      children: "docs",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            !o && (0, n.jsx)(b, { allowReupload: t, onUpload: r, onError: a }),
          ],
        });
      }
      function b(e) {
        let { allowReupload: t, onUpload: r, onError: s } = e,
          { user: d } = (0, c.a)(),
          [u, { progress: p, error: m, isSuccess: f }] = (0, i.F)(
            "/api/files/signedUpload",
            {
              sizeLimit: "1gb",
              s3Data: {
                acl: "authenticated-read",
                "x-amz-server-side-encryption": "AES256",
              },
              validateFile: (e) => {
                if (
                  !e.name.endsWith(".zip") &&
                  !e.name.endsWith(".tar.gz") &&
                  !e.name.endsWith(".apk")
                )
                  throw Error(
                    "Please upload a .zip or .tar.gz for iOS, or .apk for Android"
                  );
              },
            }
          ),
          x = (0, a.TA)({
            initialValues: {},
            onSubmit: async (e) => {
              let t,
                n,
                { file: a } = e;
              if (a) {
                a.name.endsWith(".zip")
                  ? ((t = "zip"), (n = "ios"))
                  : a.name.endsWith(".tar.gz")
                  ? ((t = "tar.gz"), (n = "ios"))
                  : a.name.endsWith(".apk") && ((t = "apk"), (n = "android"));
                try {
                  let { result: e } = await u(a);
                  null == r ||
                    r({
                      location: decodeURIComponent(e.PostResponse.Location),
                      fileType: t,
                      fileSize: a.size,
                      platform: n,
                    });
                } catch (e) {
                  l.Z.track("upload_error", { platform: n, fileType: t }, d),
                    e instanceof Error
                      ? null == s || s(e.message)
                      : null == s || s("Unknown error");
                }
              }
            },
          });
        async function g(e) {
          e && (x.setFieldValue("file", e), x.submitForm());
        }
        let b = !!f && !t,
          y = x.isSubmitting || b;
        return (0, n.jsxs)("form", {
          className: "my-4",
          onSubmit: x.handleSubmit,
          children: [
            (0, n.jsx)(h, {
              name: "app-file-upload",
              accept: ".zip,.apk,.gz,.tgz",
              onFileChanged: g,
              disabled: y,
              disabledText: b ? "App Uploaded" : "Uploading",
            }),
            p > 0 && (0, n.jsx)(o.Z, { value: p, className: "mt-[10px]" }),
            m &&
              (0, n.jsx)("p", {
                className:
                  "text-red dark:text-red block w-full text-center sm:text-start sm:w-auto",
                children: m.message,
              }),
          ],
        });
      }
    },
    91418: function (e, t, r) {
      r.d(t, {
        h: function () {
          return s;
        },
      });
      var n = r(97329),
        a = r(27378);
      function s() {
        let [e, t] = (0, a.useState)({ x: 0, y: 0, width: 0, height: 0 }),
          r = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (!(null == r ? void 0 : r.current)) return;
            let e = new n.Z(() => {
              (null == r ? void 0 : r.current) &&
                t(r.current.getBoundingClientRect());
            });
            return (
              e.observe(null == r ? void 0 : r.current),
              () => {
                e.disconnect();
              }
            );
          }, []),
          [r, e]
        );
      }
    },
    77866: function (e, t, r) {
      r.d(t, {
        F: function () {
          return o;
        },
      });
      var n = r(27378);
      let a = new (function (e) {
        void 0 === (e = e || {}).escapeMode && (e.escapeMode = !0),
          (e.attributePrefix = e.attributePrefix || "_"),
          (e.arrayAccessForm = e.arrayAccessForm || "none"),
          (e.emptyNodeForm = e.emptyNodeForm || "text"),
          void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0),
          (e.arrayAccessFormPaths = e.arrayAccessFormPaths || []),
          void 0 === e.skipEmptyTextNodesForObj &&
            (e.skipEmptyTextNodesForObj = !0),
          void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0),
          (e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || []),
          (function () {
            function e(e) {
              var t = String(e);
              return 1 === t.length && (t = "0" + t), t;
            }
            "function" != typeof String.prototype.trim &&
              (String.prototype.trim = function () {
                return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "");
              }),
              "function" != typeof Date.prototype.toISOString &&
                (Date.prototype.toISOString = function () {
                  return (
                    this.getUTCFullYear() +
                    "-" +
                    e(this.getUTCMonth() + 1) +
                    "-" +
                    e(this.getUTCDate()) +
                    "T" +
                    e(this.getUTCHours()) +
                    ":" +
                    e(this.getUTCMinutes()) +
                    ":" +
                    e(this.getUTCSeconds()) +
                    "." +
                    String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(
                      2,
                      5
                    ) +
                    "Z"
                  );
                });
          })();
        var t = {
          ELEMENT_NODE: 1,
          TEXT_NODE: 3,
          CDATA_SECTION_NODE: 4,
          COMMENT_NODE: 8,
          DOCUMENT_NODE: 9,
        };
        function r(e) {
          var t = e.localName;
          return (
            null == t && (t = e.baseName),
            (null == t || "" == t) && (t = e.nodeName),
            t
          );
        }
        function n(e) {
          return "string" == typeof e
            ? e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
                .replace(/\//g, "&#x2F;")
            : e;
        }
        function a(t, r, n) {
          if (
            ("property" === e.arrayAccessForm &&
              (t[r] instanceof Array
                ? (t[r + "_asArray"] = t[r])
                : (t[r + "_asArray"] = [t[r]])),
            !(t[r] instanceof Array) && e.arrayAccessFormPaths.length > 0)
          ) {
            for (var a = 0; a < e.arrayAccessFormPaths.length; a++) {
              var s = e.arrayAccessFormPaths[a];
              if ("string" == typeof s) {
                if (s == n) break;
              } else if (s instanceof RegExp) {
                if (s.test(n)) break;
              } else if ("function" == typeof s && s(t, r, n)) break;
            }
            a != e.arrayAccessFormPaths.length && (t[r] = [t[r]]);
          }
        }
        function s(e) {
          var t = e.split(/[-T:+Z]/g),
            r = new Date(t[0], t[1] - 1, t[2]),
            n = t[5].split(".");
          if (
            (r.setHours(t[3], t[4], n[0]),
            n.length > 1 && r.setMilliseconds(n[1]),
            t[6] && t[7])
          ) {
            var a = 60 * t[6] + Number(t[7]);
            (a =
              0 +
              ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * a : a)),
              r.setMinutes(r.getMinutes() - a - r.getTimezoneOffset());
          } else
            -1 !== e.indexOf("Z", e.length - 1) &&
              (r = new Date(
                Date.UTC(
                  r.getFullYear(),
                  r.getMonth(),
                  r.getDate(),
                  r.getHours(),
                  r.getMinutes(),
                  r.getSeconds(),
                  r.getMilliseconds()
                )
              ));
          return r;
        }
        function o(t, r, a, s) {
          var o =
            "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + r;
          if (null != a)
            for (var i = 0; i < a.length; i++) {
              var l = a[i],
                c = t[l];
              e.escapeMode && (c = n(c)),
                (o +=
                  " " + l.substr(e.attributePrefix.length) + "='" + c + "'");
            }
          return s ? (o += "/>") : (o += ">"), o;
        }
        function i(e, t) {
          return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">";
        }
        function l(t, r) {
          var n, a;
          return (
            ("property" == e.arrayAccessForm &&
              ((n = r.toString()),
              (a = "_asArray"),
              -1 !== n.indexOf(a, n.length - a.length))) ||
            0 == r.toString().indexOf(e.attributePrefix) ||
            0 == r.toString().indexOf("__") ||
            t[r] instanceof Function
          );
        }
        function c(e) {
          var t = 0;
          if (e instanceof Object) for (var r in e) !l(e, r) && t++;
          return t;
        }
        function d(t) {
          var r = [];
          if (t instanceof Object)
            for (var n in t)
              -1 == n.toString().indexOf("__") &&
                0 == n.toString().indexOf(e.attributePrefix) &&
                r.push(n);
          return r;
        }
        function u(t) {
          var r,
            a = "";
          return (
            t instanceof Object
              ? (a +=
                  ((r = ""),
                  null != t.__cdata && (r += "<![CDATA[" + t.__cdata + "]]>"),
                  null != t.__text &&
                    (e.escapeMode ? (r += n(t.__text)) : (r += t.__text)),
                  r))
              : null != t && (e.escapeMode ? (a += n(t)) : (a += t)),
            a
          );
        }
        (this.parseXmlString = function (e) {
          var t,
            r = window.ActiveXObject || "ActiveXObject" in window;
          if (void 0 === e) return null;
          if (window.DOMParser) {
            var n = new window.DOMParser(),
              a = null;
            if (!r)
              try {
                a = n.parseFromString("INVALID", "text/xml").childNodes[0]
                  .namespaceURI;
              } catch (e) {
                a = null;
              }
            try {
              (t = n.parseFromString(e, "text/xml")),
                null != a &&
                  t.getElementsByTagNameNS(a, "parsererror").length > 0 &&
                  (t = null);
            } catch (e) {
              t = null;
            }
          } else
            0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)),
              ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              t.loadXML(e);
          return t;
        }),
          (this.asArray = function (e) {
            return e instanceof Array ? e : [e];
          }),
          (this.toXmlDateTime = function (e) {
            return e instanceof Date
              ? e.toISOString()
              : "number" == typeof e
              ? new Date(e).toISOString()
              : null;
          }),
          (this.asDateTime = function (e) {
            return "string" == typeof e ? s(e) : e;
          }),
          (this.xml2json = function (n) {
            return (function n(o, i) {
              if (o.nodeType == t.DOCUMENT_NODE) {
                for (var l = {}, c = o.childNodes, d = 0; d < c.length; d++) {
                  var u = c.item(d);
                  if (u.nodeType == t.ELEMENT_NODE) {
                    var p = r(u);
                    l[p] = n(u, p);
                  }
                }
                return l;
              }
              if (o.nodeType == t.ELEMENT_NODE) {
                var l = {};
                l.__cnt = 0;
                for (var c = o.childNodes, d = 0; d < c.length; d++) {
                  var u = c.item(d),
                    p = r(u);
                  u.nodeType != t.COMMENT_NODE &&
                    (l.__cnt++,
                    null == l[p]
                      ? ((l[p] = n(u, i + "." + p)), a(l, p, i + "." + p))
                      : (null == l[p] ||
                          l[p] instanceof Array ||
                          ((l[p] = [l[p]]), a(l, p, i + "." + p)),
                        (l[p][l[p].length] = n(u, i + "." + p))));
                }
                for (var m = 0; m < o.attributes.length; m++) {
                  var f = o.attributes.item(m);
                  l.__cnt++, (l[e.attributePrefix + f.name] = f.value);
                }
                var x = o.prefix;
                return (
                  null != x && "" != x && (l.__cnt++, (l.__prefix = x)),
                  null != l["#text"] &&
                    ((l.__text = l["#text"]),
                    l.__text instanceof Array &&
                      (l.__text = l.__text.join("\n")),
                    e.escapeMode &&
                      (l.__text = l.__text
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, '"')
                        .replace(/&#x27;/g, "'")
                        .replace(/&#x2F;/g, "/")),
                    e.stripWhitespaces && (l.__text = l.__text.trim()),
                    delete l["#text"],
                    "property" == e.arrayAccessForm &&
                      delete l["#text_asArray"],
                    (l.__text = (function (t, r, n) {
                      if (!(e.datetimeAccessFormPaths.length > 0)) return t;
                      for (
                        var a = n.split(".#")[0], o = 0;
                        o < e.datetimeAccessFormPaths.length;
                        o++
                      ) {
                        var i = e.datetimeAccessFormPaths[o];
                        if ("string" == typeof i) {
                          if (i == a) break;
                        } else if (i instanceof RegExp) {
                          if (i.test(a)) break;
                        } else if ("function" == typeof i && i(obj, r, a))
                          break;
                      }
                      return o != e.datetimeAccessFormPaths.length ? s(t) : t;
                    })(l.__text, p, i + "." + p))),
                  null != l["#cdata-section"] &&
                    ((l.__cdata = l["#cdata-section"]),
                    delete l["#cdata-section"],
                    "property" == e.arrayAccessForm &&
                      delete l["#cdata-section_asArray"]),
                  1 == l.__cnt && null != l.__text
                    ? (l = l.__text)
                    : 0 == l.__cnt && "text" == e.emptyNodeForm
                    ? (l = "")
                    : l.__cnt > 1 &&
                      null != l.__text &&
                      e.skipEmptyTextNodesForObj &&
                      ((e.stripWhitespaces && "" == l.__text) ||
                        "" == l.__text.trim()) &&
                      delete l.__text,
                  delete l.__cnt,
                  e.enableToStringFunc &&
                    (null != l.__text || null != l.__cdata) &&
                    (l.toString = function () {
                      return (
                        (null != this.__text ? this.__text : "") +
                        (null != this.__cdata ? this.__cdata : "")
                      );
                    }),
                  l
                );
              }
              if (
                o.nodeType == t.TEXT_NODE ||
                o.nodeType == t.CDATA_SECTION_NODE
              )
                return o.nodeValue;
            })(n);
          }),
          (this.xml_str2json = function (e) {
            var t = this.parseXmlString(e);
            return null != t ? this.xml2json(t) : null;
          }),
          (this.json2xml_str = function (e) {
            return (function e(t) {
              var r = "";
              if (c(t) > 0) {
                for (var n in t)
                  if (!l(t, n)) {
                    var a = t[n],
                      s = d(a);
                    null == a || void 0 == a
                      ? (r += o(a, n, s, !0))
                      : a instanceof Object
                      ? a instanceof Array
                        ? (r += (function (t, r, n) {
                            var a = "";
                            if (0 == t.length) a += o(t, r, n, !0);
                            else
                              for (var s = 0; s < t.length; s++)
                                a +=
                                  o(t[s], r, d(t[s]), !1) +
                                  e(t[s]) +
                                  i(t[s], r);
                            return a;
                          })(a, n, s))
                        : a instanceof Date
                        ? (r += o(a, n, s, !1) + a.toISOString() + i(a, n))
                        : c(a) > 0 || null != a.__text || null != a.__cdata
                        ? (r += o(a, n, s, !1) + e(a) + i(a, n))
                        : (r += o(a, n, s, !0))
                      : (r += o(a, n, s, !1) + u(a) + i(a, n));
                  }
              }
              return r + u(t);
            })(e);
          }),
          (this.json2xml = function (e) {
            var t = this.json2xml_str(e);
            return this.parseXmlString(t);
          }),
          (this.getVersion = function () {
            return "1.1.5";
          });
      })();
      var s = r(13551);
      function o(e, t) {
        let { sizeLimit: r, s3Data: o, validateFile: i } = t,
          l = (0, s.ib)(),
          [c, d] = (0, n.useState)(0),
          [u, p] = (0, n.useState)(!1),
          [m, f] = (0, n.useState)(!1),
          [x, h] = (0, n.useState)(null),
          g = (0, n.useCallback)(() => {
            d(0), p(!1), f(!1), h(null);
          }, []),
          b = (0, n.useCallback)(
            async function (t) {
              null == i || i(t), g();
              let n = await l(e).catch((e) => {
                var t;
                throw Error(
                  null !== (t = e.message) && void 0 !== t
                    ? t
                    : "Error uploading file. Please try again."
                );
              });
              if (
                t.size >
                (function (e) {
                  let t = e.toUpperCase().replace(/[^A-Z]/g, ""),
                    r = parseFloat(e.replace(/[^0-9.]/g, "")),
                    n = t.replace(/[0-9.]/g, ""),
                    a = [
                      "Bytes",
                      "KB",
                      "MB",
                      "GB",
                      "TB",
                      "PB",
                      "EB",
                      "ZB",
                      "YB",
                    ].indexOf(n);
                  return r * Math.pow(1024, a);
                })(r)
              )
                throw Error(
                  "Your proposed upload exceeds the maximum allowed size of ".concat(
                    r
                  )
                );
              let c = (0, s.ws)(n.url, {
                data:
                  "s3" === n.storageType
                    ? {
                        key: n.key,
                        AWSAccessKeyId: n.AWSAccessKeyId,
                        success_action_status: "201",
                        Policy: n.s3Policy,
                        Signature: n.s3Signature,
                        ...("function" == typeof o ? o(n) : o),
                        file: t,
                      }
                    : t,
                onProgress: (e) => d(e),
              });
              return new Promise((e, s) => {
                c.then(function (r) {
                  if (201 === r.status) {
                    let s;
                    "s3" === n.storageType
                      ? (s = a.xml_str2json(r.responseText))
                      : "local" === n.storageType &&
                        (s = JSON.parse(r.responseText)),
                      d(0),
                      f(!0),
                      e({ file: t, result: s });
                  }
                }).catch((e) => {
                  if ((d(0), e instanceof XMLHttpRequest)) {
                    if (0 === e.status) return s(Error("Connection error"));
                    if (415 === e.status) return s(Error("Invalid file type"));
                    if (413 === e.status) return s(Error("File is too large"));
                    try {
                      let t = a.xml_str2json(e.response);
                      if ("EntityTooLarge" === t.Error.Code)
                        return s(
                          Error(
                            "Your proposed upload exceeds the maximum allowed size of ".concat(
                              (function (e) {
                                let t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 2;
                                if (0 === e) return "0 Bytes";
                                let r = Math.floor(
                                  Math.log(e) / Math.log(1024)
                                );
                                return (
                                  parseFloat(
                                    (e / Math.pow(1024, r)).toFixed(
                                      t < 0 ? 0 : t
                                    )
                                  ) +
                                  " " +
                                  [
                                    "Bytes",
                                    "KB",
                                    "MB",
                                    "GB",
                                    "TB",
                                    "PB",
                                    "EB",
                                    "ZB",
                                    "YB",
                                  ][r]
                                );
                              })(r)
                            )
                          )
                        );
                    } catch (e) {}
                  }
                  console.error(e);
                  let t = Error("Upload failed with status ".concat(e.status));
                  throw (h(t), t);
                });
              });
            },
            [e, l, g, o, r, i]
          );
        return (0, n.useMemo)(
          () => [
            b,
            { progress: c, isLoading: u, isSuccess: m, reset: g, error: x },
          ],
          [x, u, m, c, g, b]
        );
      }
    },
  },
]);
