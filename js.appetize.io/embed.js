var ne = (w, m, v) => {
  if (!m.has(w)) throw TypeError("Cannot " + v);
};
var C = (w, m, v) => (
    ne(w, m, "read from private field"), v ? v.call(w) : m.get(w)
  ),
  K = (w, m, v) => {
    if (m.has(w))
      throw TypeError("Cannot add the same private member more than once");
    m instanceof WeakSet ? m.add(w) : m.set(w, v);
  },
  j = (w, m, v, P) => (
    ne(w, m, "write to private field"), P ? P.call(w, v) : m.set(w, v), v
  );
var appetize = (function (w) {
  var L, S;
  ("use strict");
  var m = { exports: {} },
    v = typeof Reflect == "object" ? Reflect : null,
    P =
      v && typeof v.apply == "function"
        ? v.apply
        : function (e, t, i) {
            return Function.prototype.apply.call(e, t, i);
          },
    O;
  v && typeof v.ownKeys == "function"
    ? (O = v.ownKeys)
    : Object.getOwnPropertySymbols
    ? (O = function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      })
    : (O = function (e) {
        return Object.getOwnPropertyNames(e);
      });
  function se(s) {
    console && console.warn && console.warn(s);
  }
  var V =
    Number.isNaN ||
    function (e) {
      return e !== e;
    };
  function d() {
    d.init.call(this);
  }
  (m.exports = d),
    (m.exports.once = ce),
    (d.EventEmitter = d),
    (d.prototype._events = void 0),
    (d.prototype._eventsCount = 0),
    (d.prototype._maxListeners = void 0);
  var q = 10;
  function _(s) {
    if (typeof s != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof s
      );
  }
  Object.defineProperty(d, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return q;
    },
    set: function (s) {
      if (typeof s != "number" || s < 0 || V(s))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            s +
            "."
        );
      q = s;
    },
  }),
    (d.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (d.prototype.setMaxListeners = function (e) {
      if (typeof e != "number" || e < 0 || V(e))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            e +
            "."
        );
      return (this._maxListeners = e), this;
    });
  function H(s) {
    return s._maxListeners === void 0 ? d.defaultMaxListeners : s._maxListeners;
  }
  (d.prototype.getMaxListeners = function () {
    return H(this);
  }),
    (d.prototype.emit = function (e) {
      for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
      var n = e === "error",
        r = this._events;
      if (r !== void 0) n = n && r.error === void 0;
      else if (!n) return !1;
      if (n) {
        var o;
        if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
        var a = new Error(
          "Unhandled error." + (o ? " (" + o.message + ")" : "")
        );
        throw ((a.context = o), a);
      }
      var c = r[e];
      if (c === void 0) return !1;
      if (typeof c == "function") P(c, this, t);
      else
        for (var h = c.length, u = X(c, h), i = 0; i < h; ++i) P(u[i], this, t);
      return !0;
    });
  function B(s, e, t, i) {
    var n, r, o;
    if (
      (_(t),
      (r = s._events),
      r === void 0
        ? ((r = s._events = Object.create(null)), (s._eventsCount = 0))
        : (r.newListener !== void 0 &&
            (s.emit("newListener", e, t.listener ? t.listener : t),
            (r = s._events)),
          (o = r[e])),
      o === void 0)
    )
      (o = r[e] = t), ++s._eventsCount;
    else if (
      (typeof o == "function"
        ? (o = r[e] = i ? [t, o] : [o, t])
        : i
        ? o.unshift(t)
        : o.push(t),
      (n = H(s)),
      n > 0 && o.length > n && !o.warned)
    ) {
      o.warned = !0;
      var a = new Error(
        "Possible EventEmitter memory leak detected. " +
          o.length +
          " " +
          String(e) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (a.name = "MaxListenersExceededWarning"),
        (a.emitter = s),
        (a.type = e),
        (a.count = o.length),
        se(a);
    }
    return s;
  }
  (d.prototype.addListener = function (e, t) {
    return B(this, e, t, !1);
  }),
    (d.prototype.on = d.prototype.addListener),
    (d.prototype.prependListener = function (e, t) {
      return B(this, e, t, !0);
    });
  function re() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function z(s, e, t) {
    var i = { fired: !1, wrapFn: void 0, target: s, type: e, listener: t },
      n = re.bind(i);
    return (n.listener = t), (i.wrapFn = n), n;
  }
  (d.prototype.once = function (e, t) {
    return _(t), this.on(e, z(this, e, t)), this;
  }),
    (d.prototype.prependOnceListener = function (e, t) {
      return _(t), this.prependListener(e, z(this, e, t)), this;
    }),
    (d.prototype.removeListener = function (e, t) {
      var i, n, r, o, a;
      if ((_(t), (n = this._events), n === void 0)) return this;
      if (((i = n[e]), i === void 0)) return this;
      if (i === t || i.listener === t)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete n[e],
            n.removeListener &&
              this.emit("removeListener", e, i.listener || t));
      else if (typeof i != "function") {
        for (r = -1, o = i.length - 1; o >= 0; o--)
          if (i[o] === t || i[o].listener === t) {
            (a = i[o].listener), (r = o);
            break;
          }
        if (r < 0) return this;
        r === 0 ? i.shift() : oe(i, r),
          i.length === 1 && (n[e] = i[0]),
          n.removeListener !== void 0 && this.emit("removeListener", e, a || t);
      }
      return this;
    }),
    (d.prototype.off = d.prototype.removeListener),
    (d.prototype.removeAllListeners = function (e) {
      var t, i, n;
      if (((i = this._events), i === void 0)) return this;
      if (i.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : i[e] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete i[e]),
          this
        );
      if (arguments.length === 0) {
        var r = Object.keys(i),
          o;
        for (n = 0; n < r.length; ++n)
          (o = r[n]), o !== "removeListener" && this.removeAllListeners(o);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((t = i[e]), typeof t == "function")) this.removeListener(e, t);
      else if (t !== void 0)
        for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
      return this;
    });
  function J(s, e, t) {
    var i = s._events;
    if (i === void 0) return [];
    var n = i[e];
    return n === void 0
      ? []
      : typeof n == "function"
      ? t
        ? [n.listener || n]
        : [n]
      : t
      ? ae(n)
      : X(n, n.length);
  }
  (d.prototype.listeners = function (e) {
    return J(this, e, !0);
  }),
    (d.prototype.rawListeners = function (e) {
      return J(this, e, !1);
    }),
    (d.listenerCount = function (s, e) {
      return typeof s.listenerCount == "function"
        ? s.listenerCount(e)
        : Y.call(s, e);
    }),
    (d.prototype.listenerCount = Y);
  function Y(s) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[s];
      if (typeof t == "function") return 1;
      if (t !== void 0) return t.length;
    }
    return 0;
  }
  d.prototype.eventNames = function () {
    return this._eventsCount > 0 ? O(this._events) : [];
  };
  function X(s, e) {
    for (var t = new Array(e), i = 0; i < e; ++i) t[i] = s[i];
    return t;
  }
  function oe(s, e) {
    for (; e + 1 < s.length; e++) s[e] = s[e + 1];
    s.pop();
  }
  function ae(s) {
    for (var e = new Array(s.length), t = 0; t < e.length; ++t)
      e[t] = s[t].listener || s[t];
    return e;
  }
  function ce(s, e) {
    return new Promise(function (t, i) {
      function n(o) {
        s.removeListener(e, r), i(o);
      }
      function r() {
        typeof s.removeListener == "function" && s.removeListener("error", n),
          t([].slice.call(arguments));
      }
      G(s, e, r, { once: !0 }), e !== "error" && he(s, n, { once: !0 });
    });
  }
  function he(s, e, t) {
    typeof s.on == "function" && G(s, "error", e, t);
  }
  function G(s, e, t, i) {
    if (typeof s.on == "function") i.once ? s.once(e, t) : s.on(e, t);
    else if (typeof s.addEventListener == "function")
      s.addEventListener(e, function n(r) {
        i.once && s.removeEventListener(e, n), t(r);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof s
      );
  }
  class D {
    constructor() {
      (this.log = this.createLogFn("log")),
        (this.warn = this.createLogFn("warn")),
        (this.error = this.createLogFn("error")),
        (this.debug = this.createLogFn("log"));
    }
    createLogFn(e) {
      const t = new Set(),
        i = "[Appetize]",
        n = Function.prototype.bind.call(console[e], console, i);
      return (
        (n.once = (r) => {
          if (!t.has(r)) return t.add(r), n.call(console, r);
        }),
        n
      );
    }
  }
  class ue extends m.exports.EventEmitter {
    constructor({ socket: e, logger: t = new D() }) {
      super(),
        (this.logger = t),
        (this.socket = e),
        this.socket.on("*", ({ type: i, value: n }) => {
          const r = le(i, n);
          r !== null &&
            (r
              ? (this.emit(r.type, r.value), this.emit("*", r))
              : (this.emit(i, n), this.emit("*", { type: i, value: n })));
        });
    }
    on(e, t) {
      return super.on(e, t);
    }
    async startSession(e) {
      throw new Error("Not implemented");
    }
    async setConfig(e) {
      throw new Error("Not implemented");
    }
    getConfig() {
      return this._config;
    }
    async waitForSessionStart(e) {
      return new Promise(async (t, i) => {
        const n = () => {
            i(new Error("Session disconnected before it was ready"));
          },
          r = (a) => {
            i(
              new Error(
                `Session failed to start - ${
                  typeof a.message == "object"
                    ? JSON.stringify(a.message)
                    : a.message
                }`
              )
            );
          },
          o = (a) => {
            a.message.match(/Too many requests/) &&
              i(new Error("Session failed to start due to too many requests"));
          };
        try {
          this.on("error", o),
            e.on("disconnect", n),
            e.on("error", r),
            await e.waitUntilReady();
        } finally {
          this.off("error", o), e.off("disconnect", n), e.off("error", r);
        }
        t(e);
      });
    }
  }
  function le(s, e) {
    switch (s) {
      case "concurrentQueue":
        return {
          type: "queue",
          value: { type: "concurrent", name: e.name, position: e.position },
        };
      case "queue":
        return {
          type: "queue",
          value: { type: "session", position: e.position },
        };
      case "userError":
        return { type: "error", value: e };
      case "newSession":
        return null;
    }
  }
  function de() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
      const e = (Math.random() * 16) | 0;
      return (s === "x" ? e : (e & 3) | 8).toString(16);
    });
  }
  function pe(s) {
    return Object.entries(s)
      .map(([e, t]) => `${e}=${encodeURIComponent(t)}`)
      .join("&");
  }
  function fe() {
    let s, e;
    return [
      new Promise((i, n) => {
        (s = i), (e = n);
      }),
      s,
      e,
    ];
  }
  function k(s) {
    return Array.isArray(s)
      ? s.map(k).filter((e) => e != null)
      : typeof s == "object" && s !== null
      ? Object.entries(s).reduce((e, [t, i]) => {
          const n = k(i);
          return n != null && (e[t] = n), e;
        }, {})
      : s;
  }
  function Q(s, e) {
    if ("captureStackTrace" in Error) Error.captureStackTrace(s, e);
    else {
      const t = new Error();
      Object.defineProperty(s, "stack", {
        configurable: !0,
        get() {
          const { stack: i } = t;
          return Object.defineProperty(this, "stack", { value: i }), i;
        },
      });
    }
  }
  async function p(s, e) {
    s instanceof y && Q(s, e);
  }
  class y extends Error {
    constructor(e) {
      super(e),
        (this.name = "Error"),
        (this.isOperational = !0),
        Q(this, this.constructor);
    }
  }
  class we extends y {
    constructor(e) {
      super(`No element found for selector
${JSON.stringify(e, null, 2)}`);
    }
  }
  class me extends y {
    constructor(e) {
      super(`Action requires 1 unique element but the selector returned ${
        e.length
      }. Provide a \`matchIndex\` to pick an element below or add additional attributes to your selector.

${ge(e)}`);
    }
  }
  class ye extends y {
    constructor(e) {
      e.localPosition
        ? super(
            `localPosition (${e.localPosition.x}, ${e.localPosition.y}) for the element evaluates to a coordinate outside of screen bounds.`
          )
        : super("Element is outside of screen bounds.");
    }
  }
  class T extends y {}
  class N extends y {
    constructor(e) {
      super(
        `App Recorder must be enabled to use ${e}. Please set "record" to true in the config.`
      );
    }
  }
  function ge(s) {
    const t = s.slice(0, 5),
      i = s.length > 5;
    return `${t.map(
      (r, o) => `// ${o}
${JSON.stringify(r, null, 2)}`
    ).join(`

`)}${
      i
        ? `

...and ${s.length - 5} more`
        : ""
    }`;
  }
  async function $(s, e = 5e3) {
    const t = Date.now();
    let i = !1;
    for (;;)
      try {
        return await s((r) => {
          if (r) throw ((i = !0), r);
        });
      } catch (n) {
        if (
          (await new Promise((r) => setTimeout(r, 100)),
          i || (e !== null && Date.now() - t > e))
        )
          throw n;
      }
  }
  async function I(s) {
    return new Promise((e) => setTimeout(e, s));
  }
  async function F(s, e, t) {
    const i = typeof t == "function" ? {} : t,
      n = typeof t == "function" ? t : t == null ? void 0 : t.predicate,
      r =
        typeof (i == null ? void 0 : i.timeout) != "undefined"
          ? i.timeout
          : 1e4;
    return new Promise((o, a) => {
      const c = (h) => {
        (!n || n(h)) && (s.off(e, c), o(h));
      };
      s.on(e, c),
        r !== null &&
          setTimeout(() => {
            s.off(e, c),
              a(
                new T(`Timeout ${r}ms exceeded while waiting for event "${e}"`)
              );
          }, r);
    });
  }
  class ve extends ue {
    constructor({ socket: e, window: t, logger: i = new D(), config: n }) {
      super({ socket: e, logger: i }),
        (this.ready = !1),
        (this.window = t),
        n && (this._config = this.mapConfig(n)),
        this.window.on("*", async ({ type: r, value: o }) => {
          if (this.ready)
            switch (r) {
              case "app":
                (this.app = o), this.emit(r, o);
                break;
              case "deviceInfo":
                (this.device = o), this.emit(r, o);
                break;
              case "config":
                this._config = this.mapConfig(o);
                break;
            }
        }),
        this.window.on("reinit", () => {
          (this.ready = !1),
            (this.session = void 0),
            this.init({ isReinit: !0 });
        }),
        this.socket.on("*", async ({ type: r, value: o }) => {
          if (this.ready)
            switch (r) {
              case "newSession":
                try {
                  (this.session = this.createSession(this._config, {
                    path: o.path,
                    token: o.sessionToken,
                  })),
                    await this.waitForSessionStart(this.session),
                    this.emit("session", this.session);
                } catch (a) {
                  (this.session = void 0), this.emit("sessionError", a);
                }
            }
        }),
        this.init();
    }
    async init(e = { isReinit: !1 }) {
      await this.window.waitUntilReady();
      const t = async () => {
          if (e.isReinit) {
            const r = this._config,
              o = await this.setConfig({});
            return this.setConfig({ record: !0, ...r, ...o });
          } else return this.setConfig({ record: !0, ...this._config });
        },
        [i, n] = await Promise.all([
          this.window.postMessage({ type: "getApp" }, !0),
          this.window.postMessage({ type: "getDeviceInfo" }, !0),
          t(),
        ]);
      (this.app = i), (this.device = n), (this.ready = !0);
    }
    async waitUntilReady() {
      if (!this.ready)
        return $(async () => {
          if (!this.ready)
            throw new Error("Timed out waiting for client to be ready");
        }, 3e4);
    }
    async startSession(e) {
      try {
        await this.waitUntilReady();
      } catch (i) {
        const n = i instanceof Error ? i.message : i;
        throw new Error(`Failed to start session. ${n}`);
      }
      this.session && (await this.session.end()),
        await this.setConfig(e != null ? e : {});
      const [t] = await Promise.all([
        new Promise((i, n) => {
          const r = (a) => {
              this.off("session", r), this.off("sessionError", o), i(a);
            },
            o = (a) => {
              this.off("session", r), this.off("sessionError", o), n(a);
            };
          this.on("session", r), this.on("sessionError", o);
        }),
        this.window.postMessage({ type: "requestSession" }, !0),
      ]);
      return t;
    }
    async config(e) {
      return (
        this.logger.warn(
          "client.config() is deprecated and will be removed in a future major release. Use client.setConfig() instead."
        ),
        this.setConfig(e)
      );
    }
    async setConfig({ publicKey: e, ...t }) {
      if (e) {
        const n = await this.window.postMessage(
          { type: "loadApp", value: e },
          !0
        );
        if (n && "error" in n) throw new Error(n.error);
      }
      const i = await this.window
        .postMessage(
          { type: "setConfig", value: this.validateConfig(t != null ? t : {}) },
          !0
        )
        .then(this.mapConfig.bind(this));
      return (this._config = i), i;
    }
    mapConfig(e) {
      return (
        e.autoplay === !0 &&
          this.logger.warn.once(
            "autoplay=true may cause the session to start before the SDK is ready. You should start the session programmatically using client.startSession() instead."
          ),
        { ...k(e), device: e.deviceType || e.device }
      );
    }
    validateConfig(e) {
      return e;
    }
    createSession(e, t) {
      throw new Error("Not implemented");
    }
  }
  function A(s) {
    if (typeof s == "string") {
      if (s.endsWith("%")) return parseInt(s, 10) / 100;
      throw new Error(
        `Invalid position value: ${s}. Must be a number between 0 and 1, or a string ending with %`
      );
    }
    return s;
  }
  class be {
    constructor({ platform: e, screen: t, app: i }) {
      (this.platform = e), (this.screen = t), (this.app = i);
    }
    pixelToDip(e) {
      return e / (this.screen.devicePixelRatio || 1);
    }
    dipToPixel(e) {
      return e * (this.screen.devicePixelRatio || 1);
    }
    getCoordinates(e, t) {
      const i = A(e.x),
        n = A(e.y);
      return { x: i * t.width, y: n * t.height };
    }
    mapHardwareKey(e) {
      switch (e) {
        case "HOME":
          return "home";
        case "VOLUME_UP":
          return "volumeUp";
        case "VOLUME_DOWN":
          return "volumeDown";
      }
      return e;
    }
    mapAction(e) {
      return k(
        (() => {
          e = k(e);
          let i, n, r;
          if (
            ("element" in e && e.element && (i = this.mapElement(e.element)),
            "position" in e && e.position)
          ) {
            const o = A(e.position.x),
              a = A(e.position.y);
            if (!x.isValidNumber(o) || !x.isValidNumber(a))
              throw new y(
                `Invalid position: (${e.position.x}, ${e.position.y}). Values must be a number or a percentage`
              );
            if (!x.isPositionWithinBounds(e.position))
              throw typeof e.position.x == "string"
                ? new Error(
                    `Invalid position: (${e.position.x}, ${e.position.y}) must be within (0%, 0%) and (100%, 100%)`
                  )
                : new Error(
                    `Invalid position: (${e.position.x}, ${e.position.y}) must be within (0, 0) and (1, 1)`
                  );
            this.platform === "android"
              ? (n = this.getCoordinates(e.position, {
                  width: this.dipToPixel(this.screen.width) - 1,
                  height: this.dipToPixel(this.screen.height) - 1,
                }))
              : (n = this.getCoordinates(e.position, {
                  width: this.screen.width - 1,
                  height: this.screen.height - 1,
                }));
          } else if ("coordinates" in e && e.coordinates) {
            if (
              !x.isValidNumber(e.coordinates.x) ||
              !x.isValidNumber(e.coordinates.y)
            )
              throw new y(
                `Invalid coordinates: (${e.coordinates.x}, ${e.coordinates.y}). Values must be a number`
              );
            if (
              !x.isCoordinatesWithinBounds(e.coordinates, {
                width: this.screen.width - 1,
                height: this.screen.height - 1,
              })
            )
              throw new y(
                `Invalid coordinates: (${e.coordinates.x}, ${
                  e.coordinates.y
                }) exceed screen bounds (${this.screen.width - 1}, ${
                  this.screen.height - 1
                })`
              );
            this.platform === "android"
              ? (n = {
                  x: this.dipToPixel(e.coordinates.x),
                  y: this.dipToPixel(e.coordinates.y),
                })
              : (n = e.coordinates);
          }
          if ("localPosition" in e && e.localPosition) {
            const o = A(e.localPosition.x),
              a = A(e.localPosition.y);
            if (!x.isValidNumber(o) || !x.isValidNumber(a))
              throw new y(
                `Invalid localPosition: (${e.localPosition.x}, ${e.localPosition.y}). Values must be a number or a percentage`
              );
            r = { x: o, y: a };
          } else i && (r = { x: 0.5, y: 0.5 });
          if ("duration" in e && e.duration && !x.isValidNumber(e.duration))
            throw new y(
              `Invalid duration: ${e.duration}. Value must be a number`
            );
          switch (e.type) {
            case "tap": {
              const { position: o, ...a } = e;
              return { ...a, element: i, localPosition: r, coordinates: n };
            }
            case "swipe": {
              const { position: o, ...a } = e;
              return {
                ...a,
                element: i,
                localPosition: r,
                coordinates: n,
                moves: e.moves.map((c) => {
                  if (this.platform === "android") {
                    const { x: h, y: u } = this.getCoordinates(c, {
                      width: this.dipToPixel(this.screen.width) - 1,
                      height: this.dipToPixel(this.screen.height) - 1,
                    });
                    return { ...c, x: h, y: u };
                  } else {
                    const { x: h, y: u } = this.getCoordinates(c, {
                      width: this.screen.width - 1,
                      height: this.screen.height - 1,
                    });
                    return { ...c, x: h, y: u };
                  }
                }),
              };
            }
            case "keypress": {
              const o = this.mapHardwareKey(e.key),
                a = this.mapHardwareKey(e.character);
              return {
                ...e,
                key: o,
                character: a,
                shiftKey: this.platform === "ios" ? xe(e.shiftKey) : e.shiftKey,
              };
            }
            case "findElements":
              return { ...e, element: i };
          }
          return e;
        })()
      );
    }
    mapElement(e) {
      const { attributes: t, bounds: i, ...n } = e,
        r = () => {
          if (i) {
            const { x: a, y: c, width: h, height: u } = i;
            return this.platform === "android"
              ? {
                  x: this.dipToPixel(a),
                  y: this.dipToPixel(c),
                  width: this.dipToPixel(h),
                  height: this.dipToPixel(u),
                }
              : { x: W(a), y: W(c), width: W(h), height: W(u) };
          }
        },
        o = () => {
          if (t)
            return Object.keys(t).reduce((a, c) => {
              if (this.platform === "ios")
                switch (c) {
                  case "userInteractionEnabled":
                  case "isHidden":
                    return { ...a, [c]: t[c] ? "1" : "0" };
                }
              else this.platform;
              return { ...a, [c]: t[c] };
            }, {});
        };
      return k({
        ...n,
        bounds: r(),
        attributes: o(),
        accessibilityElements: void 0,
      });
    }
  }
  class Ee {
    constructor({ platform: e, screen: t, app: i }) {
      (this.platform = e), (this.screen = t), (this.app = i);
    }
    pixelToDip(e) {
      return e / (this.screen.devicePixelRatio || 1);
    }
    dipToPixel(e) {
      return e * (this.screen.devicePixelRatio || 1);
    }
    getPosition(e, t) {
      return { x: e.x / t.width, y: e.y / t.height };
    }
    mapHardwareKey(e) {
      switch (e) {
        case "home":
          return "HOME";
        case "volumeUp":
          return "VOLUME_UP";
        case "volumeDown":
          return "VOLUME_DOWN";
      }
      return e;
    }
    mapAction(e) {
      return k(
        (() => {
          let i,
            n,
            r,
            o = "localPosition" in e ? e.localPosition : void 0;
          switch (
            ("coordinates" in e &&
              e.coordinates &&
              ((n = {
                x: this.pixelToDip(e.coordinates.x),
                y: this.pixelToDip(e.coordinates.y),
              }),
              (r = this.getPosition(n, {
                width: this.screen.width - 1,
                height: this.screen.height - 1,
              }))),
            "element" in e &&
              e.element &&
              ((i = this.mapElement(e.element)),
              n &&
                i.bounds &&
                (o = this.getPosition(
                  { x: n.x - i.bounds.x, y: n.y - i.bounds.y },
                  { width: i.bounds.width, height: i.bounds.height }
                ))),
            e.type)
          ) {
            case "tap":
              return { ...e, element: i, position: r, localPosition: o };
            case "swipe":
              return {
                ...e,
                element: i,
                position: r,
                localPosition: o,
                moves: e.moves.map((a) => {
                  const { x: c, y: h } = this.getPosition(
                    { x: this.pixelToDip(a.x), y: this.pixelToDip(a.y) },
                    {
                      width: this.screen.width - 1,
                      height: this.screen.height - 1,
                    }
                  );
                  return { x: c, y: h, t: a.t };
                }),
              };
            case "keypress": {
              const a = this.mapHardwareKey(e.key),
                c = this.mapHardwareKey(e.character);
              return {
                ...e,
                key: a,
                character: c,
                shiftKey:
                  typeof e.shiftKey == "number"
                    ? ke(e.shiftKey)
                    : Boolean(e.shiftKey),
              };
            }
            case "findElements":
              return { ...e, element: i };
          }
          return e;
        })()
      );
    }
    mapUI(e) {
      var o, a;
      const t = (o = e.ui) != null ? o : e.result,
        i = e.springboard,
        n = (c) => {
          var h;
          return {
            ...this.mapElement(c),
            children: (h = c.children) == null ? void 0 : h.map(n),
          };
        },
        r = [];
      return (
        t &&
          (this.platform === "ios"
            ? r.push({
                type: "app",
                appId: (a = this.app) == null ? void 0 : a.bundle,
                children: t.map(n),
              })
            : r.push({ type: "app", children: t.map(n) })),
        i &&
          r.push({
            type: "app",
            appId: "com.apple.springboard",
            children: i.map(n),
          }),
        r
      );
    }
    mapElement(e) {
      const { attributes: t, bounds: i, accessibilityElements: n, ...r } = e,
        o = (h) =>
          this.platform === "android"
            ? {
                x: this.pixelToDip(h.x),
                y: this.pixelToDip(h.y),
                width: this.pixelToDip(h.width),
                height: this.pixelToDip(h.height),
              }
            : { x: U(h.x), y: U(h.y), width: U(h.width), height: U(h.height) },
        a = (h) =>
          Object.keys(h).reduce((u, l) => {
            switch (l) {
              case "userInteractionEnabled":
              case "isHidden":
                return { ...u, [l]: h[l] === "1" };
              default:
                return { ...u, [l]: h[l] };
            }
          }, {}),
        c = (h) =>
          h.map((u) => {
            const { accessibilityFrame: l } = u;
            return { ...a(u), accessibilityFrame: l ? o(l) : void 0 };
          });
      return k({
        ...r,
        bounds: i ? o(i) : void 0,
        attributes: t ? a(t) : void 0,
        accessibilityElements: n ? c(n) : void 0,
      });
    }
    mapAppetizerEvent(e, t) {
      var i, n;
      switch (e) {
        case "debug":
          return { type: "log", value: t };
        case "interceptResponse":
          return { type: "network", value: { type: "response", ...t } };
        case "interceptRequest":
          return { type: "network", value: { type: "request", ...t } };
        case "interceptError":
          return { type: "network", value: { type: "error", ...t } };
        case "userError":
          return { type: "error", value: t };
        case "recordedAction":
          return { type: "action", value: this.mapAction(t) };
        case "playbackFoundAndSent": {
          const r = t;
          return {
            type: "playbackFoundAndSent",
            value: {
              ...r,
              playback: {
                ...r.playback,
                action: r.playback.action
                  ? this.mapAction(r.playback.action)
                  : void 0,
              },
              matchedElements:
                (i = r.matchedElements) == null
                  ? void 0
                  : i.map((o) => {
                      if (o) return this.mapElement(o);
                    }),
            },
          };
        }
        case "playbackError": {
          const r = t;
          return {
            type: "playbackError",
            value: {
              ...r,
              playback: {
                ...r.playback,
                action: r.playback.action
                  ? this.mapAction(r.playback.action)
                  : void 0,
              },
              matchedElements:
                (n = r.matchedElements) == null
                  ? void 0
                  : n.map((o) => {
                      if (o) return this.mapElement(o);
                    }),
            },
          };
        }
        case "uiDump":
          return { type: "uiDump", value: this.mapUI(t) };
        case "userInteractionReceived":
          return { type: "interaction", value: t };
        case "countdownWarning":
          return { type: "inactivityWarning", value: t };
        case "h264Data":
          return { type: "video", value: { ...t, codec: "h264" } };
        case "frameData":
          return { type: "video", value: { ...t, codec: "jpeg" } };
        case "audioData":
          return { type: "audio", value: { ...t, codec: "aac" } };
        case "deleteEvent":
          return null;
      }
    }
  }
  class x {
    static isCoordinatesWithinBounds(e, t) {
      return !(e.x < 0 || e.x > t.width || e.y < 0 || e.y > t.height);
    }
    static isPositionWithinBounds(e) {
      const t = A(e.x),
        i = A(e.y);
      return !(t < 0 || t > 1 || i < 0 || i > 1);
    }
    static isValidNumber(e) {
      return !(typeof e != "number" || isNaN(e));
    }
  }
  function xe(s) {
    return s ? 1 : 0;
  }
  function ke(s) {
    return s === 1;
  }
  function U(s) {
    return typeof s == "number"
      ? s
      : s === "inf"
      ? 1 / 0
      : s === "-inf"
      ? -1 / 0
      : parseFloat(s);
  }
  function W(s) {
    return s === 1 / 0 ? "inf" : s === -1 / 0 ? "-inf" : s;
  }
  function Ae(s) {
    if (typeof s != "object" || Array.isArray(s))
      throw new Error("Element must be an object");
    const e = Object.keys(s),
      i = Le(e, [
        "text",
        "accessibilityIdentifier",
        "accessibilityLabel",
        "resource-id",
        "content-desc",
        "class",
        "baseClass",
      ]);
    if (i.length > 0) {
      const n = i.map((r) => `'${r}'`).join(", ");
      throw new Error(
        `Element has invalid properties: ${n}. Did you mean to put these under 'attributes'?`
      );
    }
    return s;
  }
  function Le(s, e) {
    return s.filter((t) => e.includes(t));
  }
  function Ce(s) {
    const e = s.length;
    let t = "";
    for (let i = 0; i < e; i += 65535) {
      let n = 65535;
      i + 65535 > e && (n = e - i),
        (t += String.fromCharCode.apply(null, s.subarray(i, i + n)));
    }
    return t;
  }
  function Se(s, e) {
    const t = Ce(s),
      i = btoa(t);
    return `data:${e};base64,` + i;
  }
  class Pe {
    constructor({ duration: e }) {
      (this.moves = []), (this.duration = e), (this.moves = [{ x: 0, y: 0 }]);
    }
    to(e, t) {
      if (typeof e != "string" || typeof t != "string")
        throw new y('x and y must be strings and in percentages (e.g. "50%")');
      if (!e.endsWith("%") || !t.endsWith("%"))
        throw new y('x and y must be in percentages (e.g. "50%")');
      return (
        this.moves.push({ x: parseFloat(e) / 100, y: parseFloat(t) / 100 }),
        this
      );
    }
    wait(e) {
      var i;
      const t = this.moves[this.moves.length - 1];
      return t && (t.wait = e + ((i = t.wait) != null ? i : 0)), this;
    }
    build() {
      var a;
      const t =
          (a = this.duration) != null
            ? a
            : Math.max(500, 16 * (this.moves.length - 1)),
        i = Math.floor(t / 16),
        n = [],
        r = Math.floor(i / (this.moves.length - 1));
      let o = 0;
      if (r === 0) {
        const c = (this.moves.length - 1) * 16;
        throw new Error(
          `Duration is too short for ${
            this.moves.length - 1
          } moves, please set duration to at least ${c}ms`
        );
      }
      for (let c = 0; c < this.moves.length - 1; c++) {
        const h = this.moves[c],
          u = this.moves[c + 1],
          l = c === this.moves.length - 2;
        for (let f = 0; f <= r; f++) {
          if (!l && f === r) continue;
          const b = f / r,
            E = h.x + b * (u.x - h.x),
            R = h.y + b * (u.y - h.y),
            g = ((c * r + f) * 16 + o) / 1e3;
          n.push({ x: E, y: R, t: g }),
            f === 0 &&
              h.wait &&
              (n.push({ x: E, y: R, t: g + h.wait / 1e3 }), (o += h.wait));
        }
      }
      return n;
    }
    up(e = "50%") {
      const t = parseFloat(e);
      return this.to("0%", `-${t}%`);
    }
    down(e = "50%") {
      const t = parseFloat(e);
      return this.to("0%", `${t}%`);
    }
    left(e = "50%") {
      const t = parseFloat(e);
      return this.to(`-${t}%`, "0%");
    }
    right(e = "50%") {
      const t = parseFloat(e);
      return this.to(`${t}%`, "0%");
    }
  }
  class Te extends m.exports.EventEmitter {
    constructor({
      socket: t,
      config: i,
      path: n,
      token: r,
      app: o,
      device: a,
      logger: c = new D(),
    }) {
      super();
      K(this, L, void 0);
      K(this, S, void 0);
      (this.isEndingManually = !1),
        (this.countdownWarning = !1),
        (this.ready = !1),
        (this._waitForAnimationsPromises = new Set()),
        (this.actionLogs = []),
        (this.config = i),
        (this.socket = t),
        (this.device = a),
        (this.app = o),
        (this.path = n),
        (this.token = r),
        (this.logger = c);
      const h = ({ type: u, value: l }) => {
        const b = new Ee({
          platform: this.config.platform,
          screen: this.device.screen,
          app: this.app,
        }).mapAppetizerEvent(u, l);
        switch (u) {
          case "ready":
            this.ready = !0;
            break;
          case "adbOverTcp": {
            j(this, L, { ...l, command: Ie(l) });
            break;
          }
          case "networkInspectorUrl":
            j(this, S, l);
            break;
          case "countdownWarning":
            this.countdownWarning = !0;
            break;
          case "timeoutReset":
            this.countdownWarning = !1;
            break;
          case "deviceInfo":
            this.device = l;
            break;
        }
        b
          ? (this.emit(b.type, b.value), this.emit("*", b))
          : b !== null &&
            (this.emit(u, l), this.emit("*", { type: u, value: l }));
      };
      this.socket.on("*", h),
        this.on("disconnect", () => {
          this.socket.off("*", h),
            this.isEndingManually ||
              (this.countdownWarning
                ? this.logger.warn(
                    "Appetize session has ended due to inactivity"
                  )
                : this.logger.warn("Session disconnected"));
        });
    }
    on(t, i) {
      return (
        t === "network" &&
          this.config.proxy !== "intercept" &&
          this.logger.warn(
            'Session must be configured with `proxy: "intercept"` to listen to network events.'
          ),
        t === "log" &&
          this.config.debug !== !0 &&
          this.logger.warn(
            "Session must be configured with `debug: true` to listen to log events."
          ),
        t === "action" &&
          this.config.record !== !0 &&
          this.logger.warn(
            "Session must configured with `record: true` to listen to action events."
          ),
        super.on(t, i)
      );
    }
    async waitUntilReady() {
      let t = !0;
      const i = async (r) =>
          new Promise((o) => {
            const a = setInterval(() => {
              r() && o(void 0);
            }, 10);
            setTimeout(() => {
              clearInterval(a), o(void 0);
            }, 3e3);
          }),
        n = () => {
          t = !1;
        };
      this.socket.once("disconnect", n);
      try {
        await $((r) => {
          if (!this.ready) {
            if (t)
              throw new T(
                "Timed out after 180s waiting for session to be ready"
              );
            r(new Error("Session disconnected"));
          }
        }, 18e4);
      } finally {
        this.socket.off("disconnect", n);
      }
      await Promise.all([
        this.config.proxy === "intercept"
          ? i(() => Boolean(C(this, S)))
          : Promise.resolve(),
        this.config.enableAdb
          ? i(() => Boolean(C(this, L)))
          : Promise.resolve(),
      ]);
    }
    async waitForEvent(t, i) {
      try {
        return await F(this, t, i);
      } catch (n) {
        throw (p(n, this.waitForEvent), n);
      }
    }
    async end() {
      (this.isEndingManually = !0), await this.socket.disconnect();
    }
    get networkInspectorUrl() {
      return (
        this.config.proxy !== "intercept" &&
          this.logger.warn(
            'Session must be configured with `proxy: "intercept"` to use the network inspector'
          ),
        C(this, S)
      );
    }
    get adbConnection() {
      if (
        (this.config.platform &&
          this.config.platform !== "android" &&
          this.logger.warn(
            "Session must be connected to an Android device to use adb"
          ),
        this.config.enableAdb ||
          this.logger.warn(
            "Session must be configured with `enableAdb: true` to use adb"
          ),
        C(this, L))
      )
        return C(this, L);
    }
    async rotate(t) {
      try {
        const [i] = await Promise.all([
          this.waitForEvent("orientationChanged"),
          this.socket.send("userInteraction", {
            type: "keypress",
            key: t === "left" ? "rotateLeft" : "rotateRight",
            timeStamp: Date.now(),
          }),
        ]);
        return i;
      } catch (i) {
        throw (p(i, this.rotate), i);
      }
    }
    async screenshot(t = "buffer") {
      var i;
      try {
        this.socket.send("getScreenshot", {});
        const n = await F(this.socket, "screenshot", { timeout: 6e4 });
        if (!n.success)
          throw new y((i = n.error) != null ? i : "Screenshot failed");
        return {
          data:
            t === "buffer"
              ? ((a) => (typeof window == "undefined" ? Buffer.from(a) : a))(
                  n.data
                )
              : Se(new Uint8Array(n.data), n.mimeType),
          mimeType: n.mimeType,
        };
      } catch (n) {
        throw (p(n, this.screenshot), n);
      }
    }
    async heartbeat() {
      try {
        return await this.socket.send("heartbeat");
      } catch (t) {
        throw (p(t, this.heartbeat), t);
      }
    }
    async type(t) {
      try {
        await I(1e3);
        const i = await this.playAction({ type: "typeText", text: t });
        return await I(500), i;
      } catch (i) {
        throw (p(i, this.type), i);
      }
    }
    async keypress(t, i) {
      try {
        if (t === "ANDROID_KEYCODE_MENU")
          return await this.socket.send("androidKeycodeMenu");
        if ((i == null ? void 0 : i.shift) || t === "HOME") {
          switch (t) {
            case "ArrowUp":
              t = "arrowUp";
              break;
            case "ArrowDown":
              t = "arrowDown";
              break;
            case "ArrowLeft":
              t = "arrowLeft";
              break;
            case "ArrowRight":
              t = "arrowRight";
              break;
            case "Enter":
              t = "\r";
              break;
            case "Tab":
              t = "	";
              break;
            case "Backspace":
              t = "\b";
              break;
          }
          return this.playAction({
            type: "keypress",
            key: t,
            shiftKey: !!(i != null && i.shift),
          });
        } else return this.playAction({ type: "keypress", character: t });
      } catch (n) {
        throw (p(n, this.keypress), n);
      }
    }
    async setLanguage(t) {
      try {
        return (
          (this.config.language = t),
          await this.socket.send("setLanguage", {
            language: t,
            timeStamp: Date.now(),
          })
        );
      } catch (i) {
        throw (p(i, this.setLanguage), i);
      }
    }
    async setLocation(t, i) {
      try {
        if (typeof t != "number" || typeof i != "number")
          throw new y(
            "setLocation requires latitude and longitude to be numbers"
          );
        const n = [t, i];
        return (
          (this.config.location = n),
          await this.socket.send("setLocation", {
            location: n,
            timeStamp: Date.now(),
          })
        );
      } catch (n) {
        throw (p(n, this.setLocation), n);
      }
    }
    async openUrl(t) {
      try {
        return await this.socket.send("openUrl", {
          url: t,
          timeStamp: Date.now(),
        });
      } catch (i) {
        throw (p(i, this.openUrl), i);
      }
    }
    async shake() {
      try {
        return await this.socket.send("shakeDevice");
      } catch (t) {
        throw (p(t, this.swipe), t);
      }
    }
    async toggleSoftKeyboard() {
      try {
        if (this.config.platform !== "ios")
          throw new Error(
            "toggleSoftKeyboard is only available on iOS devices"
          );
        return await this.socket.send("toggleSoftKeyboard");
      } catch (t) {
        throw (p(t, this.toggleSoftKeyboard), t);
      }
    }
    async biometry({ match: t }) {
      try {
        return await this.socket.send(t ? "biometryMatch" : "biometryNoMatch");
      } catch (i) {
        throw (p(i, this.biometry), i);
      }
    }
    async allowInteractions(t) {
      try {
        return await this.socket.send(
          t ? "enableInteractions" : "disableInteractions"
        );
      } catch (i) {
        throw (p(i, this.allowInteractions), i);
      }
    }
    async restartApp() {
      try {
        this.socket.send("restartApp");
        const { platform: t } = this.config;
        t === "ios"
          ? await this.waitForEvent("appLaunch", { timeout: 6e4 })
          : await I(1e3);
      } catch (t) {
        throw (p(t, this.restartApp), t);
      }
    }
    async reinstallApp() {
      try {
        this.socket.send("reinstallApp"),
          await this.waitForEvent("appLaunch", { timeout: 6e4 });
      } catch (t) {
        throw (p(t, this.reinstallApp), t);
      }
    }
    async adbShellCommand(t) {
      if (this.config.platform !== "android")
        throw new Error("adbShellCommand is only available on Android devices");
      try {
        return await this.socket.send("adbShellCommand", {
          command: t,
          timeStamp: Date.now(),
        });
      } catch (i) {
        throw (p(i, this.adbShellCommand), i);
      }
    }
    async playAction(t, i = {}) {
      const { timeout: n = 1e4 } = i;
      try {
        if (!this.config.record) throw new N("playAction()");
        if (isNaN(n)) throw new y(`Invalid timeout value: ${i.timeout}`);
        if (n < 0)
          throw new y(`Timeout value cannot be negative: ${i.timeout}`);
        "element" in t && t.element && Ae(t.element);
        const r = new be({
            platform: this.config.platform,
            screen: this.device.screen,
            app: this.app,
          }),
          o = de(),
          c = i.noMap ? t : r.mapAction(t),
          h = {
            id: o,
            action: c,
            options: { ...i, timeout: Math.round(n / 1e3) },
          },
          [u] = await Promise.all([
            new Promise((l, f) => {
              const b = () => {
                  this.off("playbackFoundAndSent", E),
                    this.off("playbackError", R);
                },
                E = async (g) => {
                  var M;
                  ((M = g.playback) == null ? void 0 : M.id) === o &&
                    (await this.addActionLog({
                      action: t,
                      payload: h,
                      result: g,
                    }),
                    b(),
                    l(g));
                },
                R = async (g) => {
                  var M;
                  if (((M = g.playback) == null ? void 0 : M.id) === o)
                    switch (
                      (await this.addActionLog({
                        action: t,
                        payload: h,
                        error: g,
                      }),
                      b(),
                      g.errorId)
                    ) {
                      case "internalError":
                        f(
                          new y(`An internal error has occurred for the action:
${JSON.stringify(t, null, 2)}`)
                        );
                        break;
                      case "notFound":
                        if (
                          g.playback !== void 0 &&
                          "element" in g.playback.action &&
                          g.playback.action.element !== void 0
                        ) {
                          f(new we(g.playback.action.element));
                          break;
                        }
                      case "ambiguousMatch":
                        if (
                          "matchedElements" in g &&
                          g.matchedElements !== void 0
                        ) {
                          f(new me(g.matchedElements));
                          break;
                        }
                      case "invalidArgument":
                        if (
                          "element" in t &&
                          t.element &&
                          g.message.match("outside the screen bounds")
                        ) {
                          f(new ye(t));
                          break;
                        }
                      default:
                        f(new y(g.message));
                        break;
                    }
                };
              this.once("playbackFoundAndSent", E),
                this.once("playbackError", R);
            }),
            this.socket.send("playAction", h),
          ]);
        return u;
      } catch (r) {
        throw (p(r, this.playAction), r);
      }
    }
    async playActions(t, i = {}) {
      try {
        if (!this.config.record) throw new N("playActions()");
        const n = [];
        for (const r of t) {
          const o = await this.playAction(r, i);
          n.push(o);
          const a = t[t.indexOf(r) + 1];
          (a && a.type === "keypress" && r.type === "keypress") ||
            (await I(1e3));
        }
        return n;
      } catch (n) {
        throw (p(n, this.playActions), n);
      }
    }
    async getUI({ timeout: t = 3e4 } = {}) {
      try {
        return (
          this.socket.send("dumpUi"), await F(this, "uiDump", { timeout: t })
        );
      } catch (i) {
        throw (p(i, this.getUI), i);
      }
    }
    async findElement(t, i) {
      var n;
      try {
        return (n = (
          await this.playAction(
            {
              type: "findElements",
              element: t,
              appId: i == null ? void 0 : i.appId,
            },
            i
          )
        ).matchedElements) == null
          ? void 0
          : n[0];
      } catch (r) {
        throw (p(r, this.findElement), r);
      }
    }
    async findElements(t, i) {
      try {
        return (
          await this.playAction(
            {
              type: "findElements",
              element: t,
              appId: i == null ? void 0 : i.appId,
            },
            i
          )
        ).matchedElements;
      } catch (n) {
        throw (p(n, this.findElements), n);
      }
    }
    async tap(t, i) {
      var n;
      try {
        if (!this.config.record) throw new N("tap()");
        return await this.playAction(
          {
            type: "tap",
            ...t,
            duration: ((n = t.duration) != null ? n : 0) / 1e3,
          },
          i
        );
      } catch (r) {
        throw (p(r, this.tap), r);
      }
    }
    async swipe({ duration: t, gesture: i, ...n }, r) {
      try {
        if (!this.config.record) throw new N("swipe()");
        let o;
        const a = new Pe({ duration: t });
        if (typeof i == "function") i(a);
        else
          switch (i) {
            case "up":
              a.up();
              break;
            case "down":
              a.down();
              break;
            case "left":
              a.left();
              break;
            case "right":
              a.right();
              break;
          }
        if ("element" in n)
          o = {
            type: "swipe",
            element: n.element,
            localPosition: n.localPosition,
            moves: a.build(),
          };
        else if ("position" in n)
          o = { type: "swipe", position: n.position, moves: a.build() };
        else throw new Error("Either element or position must be specified");
        return this.playAction(o, r);
      } catch (o) {
        throw (p(o, this.swipe), o);
      }
    }
    async waitForAnimations(t = {}) {
      try {
        const { imageThreshold: i = 0.001, timeout: n = 1e4 } = t;
        let r = 1e3,
          o = 1;
        t.imageThresholdDuration && (r = t.imageThresholdDuration);
        const [a, c, h] = fe(),
          u = setTimeout(() => {
            h(
              new T(
                `Timed out after ${n}ms waiting for animation to end. Waited for imageThreshold of ${i} but lowest was ${o.toFixed(
                  2
                )}`
              )
            );
          }, n);
        let l;
        const f = ({ percentage: b, timestamp: E }) => {
          b < o && (o = b),
            b <= i ? (l || (l = E), l && E - l >= r && c()) : (l = void 0);
        };
        return (
          this.socket.send("enablePixelChangeDetection"),
          this.socket.on("pixelsChanged", f),
          this._waitForAnimationsPromises.add(a),
          await a.finally(() => {
            clearTimeout(u),
              this.socket.off("pixelsChanged", f),
              this._waitForAnimationsPromises.delete(a),
              this._waitForAnimationsPromises.size === 0 &&
                this.socket.send("disablePixelChangeDetection");
          })
        );
      } catch (i) {
        throw (p(i, this.waitForAnimations), i);
      }
    }
    async addActionLog(t) {
      this.actionLogs.push(t);
    }
    async getAdbInfo() {
      return (
        this.logger.warn(
          "getAdbInfo() is deprecated. Please use the `adbConnection` property instead."
        ),
        Promise.resolve(C(this, L))
      );
    }
    async getNetworkInspectorUrl() {
      return (
        this.logger.warn(
          "getNetworkInspectorUrl() is deprecated. Please use the `networkInspectorUrl` property instead."
        ),
        Promise.resolve(C(this, S))
      );
    }
    async getDeviceInfo() {
      return (
        this.logger.warn(
          "getDeviceInfo() is deprecated. Please use the `device` property instead."
        ),
        Promise.resolve(this.device)
      );
    }
  }
  (L = new WeakMap()), (S = new WeakMap());
  function Ie(s) {
    const e =
      "ssh -fN -o StrictHostKeyChecking=no -oHostKeyAlgorithms=+ssh-rsa -p SERVER_PORT USERNAME@HOSTNAME -L6000:FORWARD_DESTINATION:FORWARD_PORT && adb connect localhost:6000";
    if (!s || !s.forwards[0]) return;
    let t = e;
    return (
      (t = t.replace(/SERVER_PORT/, s.port.toString())),
      (t = t.replace(/USERNAME/, s.user)),
      (t = t.replace(/HOSTNAME/, s.hostname)),
      (t = t.replace(/FORWARD_DESTINATION/, s.forwards[0].destination)),
      (t = t.replace(/FORWARD_PORT/, s.forwards[0].port.toString())),
      t
    );
  }
  function Z({ type: s, value: e }) {
    switch (s) {
      case "deviceInfo":
        return { type: "deviceInfo", value: e };
      case "sessionRequested":
        return { type: "sessionRequested" };
      case "chromeDevToolsUrl":
        return { type: "networkInspectorUrl", value: e };
      case "orientationChanged":
        return { type: "orientationChanged", value: e };
    }
  }
  class ee extends m.exports.EventEmitter {
    constructor({ window: e, type: t }) {
      super(),
        (this.type = t),
        (this.window = e),
        this.window.on("*", ({ type: i, value: n }) => {
          switch (i) {
            case "socketEvent":
              n.socket === this.type &&
                (this.emit(n.type, n.value),
                this.emit("*", { type: n.type, value: n.value }));
              break;
            case "disconnect":
              this.emit("disconnect"), this.emit("*", { type: "disconnect" });
              break;
            case "sessionInfo":
            case "chromeDevToolsUrl":
            case "orientationChanged":
            case "deviceInfo":
              if (this.type === "appetizer") {
                const r = Z({ type: i, value: n });
                r && (this.emit(r.type, r.value), this.emit("*", r));
              }
              break;
            case "sessionRequested":
              if (this.type === "webserver") {
                const r = Z({ type: i, value: n });
                r && (this.emit(r.type, r.value), this.emit("*", r));
              }
              break;
          }
        });
    }
    async send(e, t) {
      var i;
      await this.window.waitUntilReady(),
        await ((i = this.window) == null
          ? void 0
          : i.postMessage({
              type: "emitSocketEvent",
              value: { type: e, value: t, socket: this.type },
            }));
    }
    async disconnect() {
      return this.send("disconnect");
    }
    async waitForEvent(e, t) {
      return F(this, e, t);
    }
  }
  class Re extends Te {
    constructor({ window: e, config: t, ...i }) {
      const n = new ee({ window: e, type: "appetizer" });
      super({ ...i, config: t, socket: n, logger: new D() }), (this.window = e);
    }
    async rotate(e) {
      try {
        const [t] = await Promise.all([
          this.waitForEvent("orientationChanged"),
          this.window.postMessage(e === "left" ? "rotateLeft" : "rotateRight"),
        ]);
        return await I(1e3), t;
      } catch (t) {
        throw (p(t, this.rotate), t);
      }
    }
    async end() {
      (this.isEndingManually = !0), await this.window.postMessage("endSession");
    }
  }
  const te = "1.1.3";
  class Me extends m.exports.EventEmitter {
    constructor({ selector: e, config: t } = {}) {
      super(),
        (this.selector = e),
        (this.initialConfig = t),
        (this.handleWindowMessage = this.handleWindowMessage.bind(this)),
        window.addEventListener("message", this.handleWindowMessage),
        this.on("error", () => {}),
        this.init();
    }
    async init() {
      await new Promise((e, t) => {
        let i;
        const n = () => {
            i == null || i.disconnect(), clearTimeout(r), clearInterval(o);
          },
          r = setTimeout(() => {
            this.selector &&
              (n(),
              t(
                new T(
                  `Timed out after 60000ms waiting for Appetize iframe with selector "${this.selector}"`
                )
              ));
          }, 6e4),
          o = setInterval(() => {
            var h, u, l;
            const a = new MessageChannel();
            this.contentWindow = this.getContentWindow();
            const c = this.getIframe();
            if (this.contentWindow)
              (a.port1.onmessage = () => {
                if (((this.ready = !0), n(), c)) {
                  const f = () => {
                    n(), this.emit("reinit"), (this.ready = !1), this.init();
                  };
                  i = Oe(c, {
                    onSrcChange: () => {
                      this.ready = !1;
                    },
                    onLoad: f,
                    onRemoved: f,
                  });
                }
                e(void 0);
              }),
                (h = this.contentWindow) == null ||
                  h.postMessage(
                    { type: "init", appetizeClient: !0, version: te },
                    "*",
                    [a.port2]
                  );
            else if (c && !c.src) {
              const f =
                (u = c.getAttribute("data-appetize-url")) != null
                  ? u
                  : "https://appetize.io";
              if ((l = this.initialConfig) != null && l.publicKey) {
                const { publicKey: b, ...E } = this.initialConfig;
                c.src = `${f}/embed/${this.initialConfig.publicKey}?${pe(E)}`;
              } else
                throw (
                  (n(), new Error("Missing publicKey in config in getClient()"))
                );
            }
          }, 100);
      });
    }
    async waitUntilReady() {
      return $(async () => {
        if (this.selector && !this.getContentWindow())
          throw new Error(`iframe not found for selector "${this.selector}"`);
        await $(() => {
          if (!this.ready)
            throw new Error("iframe was found but content did not load");
        }, 2e4);
      }, 5e3);
    }
    async postMessage(e, t = !1) {
      var n;
      await this.waitUntilReady();
      const i = new MessageChannel();
      if (
        ((n = this.contentWindow) == null || n.postMessage(e, "*", [i.port2]),
        t)
      )
        return new Promise((r, o) => {
          const a = setTimeout(() => {
            o(
              new T(
                "Timed out after 60000ms while waiting for postMessage response"
              )
            );
          }, 6e4);
          i.port1.onmessage = (c) => {
            clearTimeout(a), r(c.data);
          };
        });
    }
    getContentWindow() {
      var e;
      if (this.selector) {
        const t = this.getIframe();
        if (t != null && t.src)
          return (e = t.contentWindow) != null ? e : void 0;
      } else return window;
    }
    getIframe() {
      if (this.selector) return document.querySelector(this.selector);
    }
    handleWindowMessage(e) {
      var i, n, r;
      const t =
        typeof e.data == "string"
          ? e.data
          : (i = e.data) == null
          ? void 0
          : i.type;
      this.contentWindow &&
        e.source === this.contentWindow &&
        (this.emit(t, (n = e.data) == null ? void 0 : n.value),
        this.emit("*", {
          type: t,
          value: (r = e.data) == null ? void 0 : r.value,
        }));
    }
  }
  function Oe(s, e) {
    const t = s.src,
      i = () => {
        s.src !== t && e.onLoad();
      },
      n = () => {
        s.removeEventListener("load", i), r.disconnect();
      };
    s.addEventListener("load", i);
    const r = new MutationObserver((o) => {
      o.forEach((a) => {
        a.type === "attributes"
          ? a.target === s && a.attributeName === "src" && e.onSrcChange()
          : a.type === "childList" &&
            a.removedNodes.forEach((c) => {
              c === s && e.onRemoved();
            });
      });
    });
    return (
      r.observe(document.body, { childList: !0, subtree: !0, attributes: !0 }),
      { disconnect: n }
    );
  }
  class ie extends ve {
    constructor({ selector: e, config: t } = {}) {
      const i = new Me({ selector: e, config: t });
      super({
        socket: new ee({ window: i, type: "webserver" }),
        config: t,
        window: i,
      }),
        (this.ready = !1);
    }
    createSession(e, t) {
      return (
        (this.session = new Re({
          window: this.window,
          config: e,
          path: t.path,
          token: t.token,
          device: this.device,
          app: this.app,
        })),
        this.session.on("disconnect", () => {
          this.session = void 0;
        }),
        this.session
      );
    }
  }
  async function _e(s, e) {
    if (!s) throw new Error("selector is required");
    const t = new ie({ selector: s, config: e });
    return await t.waitUntilReady(), t;
  }
  function De(s) {
    return new ie({ config: s });
  }
  const Ne = te;
  return (
    (w.getClient = _e),
    (w.getWindowClient = De),
    (w.version = Ne),
    Object.defineProperties(w, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    }),
    w
  );
})({});
//# sourceMappingURL=embed.js.map
