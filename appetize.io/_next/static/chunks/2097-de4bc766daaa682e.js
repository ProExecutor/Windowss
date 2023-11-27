"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2097],
  {
    6725: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return G;
        },
        lG: function () {
          return O;
        },
      });
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ var a,
        r,
        s,
        i,
        o,
        l,
        u,
        c,
        p,
        d,
        g,
        f,
        b,
        m,
        h,
        y,
        E,
        k,
        S,
        v,
        w,
        A,
        T,
        x,
        _ = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            a = {
              util: {
                encode: function e(t) {
                  return t instanceof r
                    ? new r(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var r, s;
                  switch (((n = n || {}), a.util.type(t))) {
                    case "Object":
                      if (n[(s = a.util.objId(t))]) return n[s];
                      for (var i in ((r = {}), (n[s] = r), t))
                        t.hasOwnProperty(i) && (r[i] = e(t[i], n));
                      return r;
                    case "Array":
                      if (n[(s = a.util.objId(t))]) return n[s];
                      return (
                        (r = []),
                        (n[s] = r),
                        t.forEach(function (t, a) {
                          r[a] = e(t, n);
                        }),
                        r
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    var n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, "gi"), "")),
                    t.classList.add("language-" + n);
                },
                isActive: function (e, t, n) {
                  for (var a = "no-" + t; e; ) {
                    var r = e.classList;
                    if (r.contains(t)) return !0;
                    if (r.contains(a)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  var n = a.util.clone(a.languages[e]);
                  for (var r in t) n[r] = t[r];
                  return n;
                },
                insertBefore: function (e, t, n, r) {
                  var s = (r = r || a.languages)[e],
                    i = {};
                  for (var o in s)
                    if (s.hasOwnProperty(o)) {
                      if (o == t)
                        for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]);
                      n.hasOwnProperty(o) || (i[o] = s[o]);
                    }
                  var u = r[e];
                  return (
                    (r[e] = i),
                    a.languages.DFS(a.languages, function (t, n) {
                      n === u && t != e && (this[t] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, n, r, s) {
                  s = s || {};
                  var i = a.util.objId;
                  for (var o in t)
                    if (t.hasOwnProperty(o)) {
                      n.call(t, o, t[o], r || o);
                      var l = t[o],
                        u = a.util.type(l);
                      "Object" !== u || s[i(l)]
                        ? "Array" !== u ||
                          s[i(l)] ||
                          ((s[i(l)] = !0), e(l, n, o, s))
                        : ((s[i(l)] = !0), e(l, n, null, s));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                var s = { code: e, grammar: t, language: n };
                return (
                  a.hooks.run("before-tokenize", s),
                  (s.tokens = a.tokenize(s.code, s.grammar)),
                  a.hooks.run("after-tokenize", s),
                  r.stringify(a.util.encode(s.tokens), s.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var l in n) t[l] = n[l];
                  delete t.rest;
                }
                var u = new i();
                return (
                  o(u, u.head, e),
                  (function e(t, n, i, l, u, c) {
                    for (var p in i)
                      if (i.hasOwnProperty(p) && i[p]) {
                        var d = i[p];
                        d = Array.isArray(d) ? d : [d];
                        for (var g = 0; g < d.length; ++g) {
                          if (c && c.cause == p + "," + g) return;
                          var f = d[g],
                            b = f.inside,
                            m = !!f.lookbehind,
                            h = !!f.greedy,
                            y = f.alias;
                          if (h && !f.pattern.global) {
                            var E = f.pattern.toString().match(/[imsuy]*$/)[0];
                            f.pattern = RegExp(f.pattern.source, E + "g");
                          }
                          for (
                            var k = f.pattern || f, S = l.next, v = u;
                            S !== n.tail && (!c || !(v >= c.reach));
                            v += S.value.length, S = S.next
                          ) {
                            var w,
                              A = S.value;
                            if (n.length > t.length) return;
                            if (!(A instanceof r)) {
                              var T = 1;
                              if (h) {
                                if (!(w = s(k, v, t, m)) || w.index >= t.length)
                                  break;
                                var x = w.index,
                                  _ = w.index + w[0].length,
                                  I = v;
                                for (I += S.value.length; x >= I; )
                                  I += (S = S.next).value.length;
                                if (
                                  ((I -= S.value.length),
                                  (v = I),
                                  S.value instanceof r)
                                )
                                  continue;
                                for (
                                  var R = S;
                                  R !== n.tail &&
                                  (I < _ || "string" == typeof R.value);
                                  R = R.next
                                )
                                  T++, (I += R.value.length);
                                T--, (A = t.slice(v, I)), (w.index -= v);
                              } else if (!(w = s(k, 0, A, m))) continue;
                              var x = w.index,
                                O = w[0],
                                F = A.slice(0, x),
                                L = A.slice(x + O.length),
                                N = v + A.length;
                              c && N > c.reach && (c.reach = N);
                              var D = S.prev;
                              F && ((D = o(n, D, F)), (v += F.length)),
                                (function (e, t, n) {
                                  for (
                                    var a = t.next, r = 0;
                                    r < n && a !== e.tail;
                                    r++
                                  )
                                    a = a.next;
                                  (t.next = a), (a.prev = t), (e.length -= r);
                                })(n, D, T);
                              var P = new r(p, b ? a.tokenize(O, b) : O, y, O);
                              if (((S = o(n, D, P)), L && o(n, S, L), T > 1)) {
                                var B = { cause: p + "," + g, reach: N };
                                e(t, n, i, S.prev, v, B),
                                  c && B.reach > c.reach && (c.reach = B.reach);
                              }
                            }
                          }
                        }
                      }
                  })(e, u, t, u.head, 0),
                  (function (e) {
                    for (var t = [], n = e.head.next; n !== e.tail; )
                      t.push(n.value), (n = n.next);
                    return t;
                  })(u)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = a.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = a.hooks.all[e];
                  if (n && n.length) for (var r, s = 0; (r = n[s++]); ) r(t);
                },
              },
              Token: r,
            };
          function r(e, t, n, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (a || "").length);
          }
          function s(e, t, n, a) {
            e.lastIndex = t;
            var r = e.exec(n);
            if (r && a && r[1]) {
              var s = r[1].length;
              (r.index += s), (r[0] = r[0].slice(s));
            }
            return r;
          }
          function i() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function o(e, t, n) {
            var a = t.next,
              r = { value: n, prev: t, next: a };
            return (t.next = r), (a.prev = r), e.length++, r;
          }
          return (
            (r.stringify = function e(t, n) {
              if ("string" == typeof t) return t;
              if (Array.isArray(t)) {
                var r = "";
                return (
                  t.forEach(function (t) {
                    r += e(t, n);
                  }),
                  r
                );
              }
              var s = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                },
                i = t.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(s.classes, i)
                  : s.classes.push(i)),
                a.hooks.run("wrap", s);
              var o = "";
              for (var l in s.attributes)
                o +=
                  " " +
                  l +
                  '="' +
                  (s.attributes[l] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                s.tag +
                ' class="' +
                s.classes.join(" ") +
                '"' +
                o +
                ">" +
                s.content +
                "</" +
                s.tag +
                ">"
              );
            }),
            a
          );
        })(),
        I = _;
      (_.default = _),
        (I.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (I.languages.markup.tag.inside["attr-value"].inside.entity =
          I.languages.markup.entity),
        (I.languages.markup.doctype.inside["internal-subset"].inside =
          I.languages.markup),
        I.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(I.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: I.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var a = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a["language-" + t] = { pattern: /[\s\S]+/, inside: I.languages[t] };
            var r = {};
            (r[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              I.languages.insertBefore("markup", "cdata", r);
          },
        }),
        Object.defineProperty(I.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            I.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: I.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (I.languages.html = I.languages.markup),
        (I.languages.mathml = I.languages.markup),
        (I.languages.svg = I.languages.markup),
        (I.languages.xml = I.languages.extend("markup", {})),
        (I.languages.ssml = I.languages.xml),
        (I.languages.atom = I.languages.xml),
        (I.languages.rss = I.languages.xml),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            a = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: a.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: a.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var r = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              s = a.variable[1].inside,
              i = 0;
            i < r.length;
            i++
          )
            s[r[i]] = e.languages.bash[r[i]];
          e.languages.shell = e.languages.bash;
        })(I),
        (I.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (I.languages.c = I.languages.extend("clike", {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        I.languages.insertBefore("c", "string", {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        I.languages.insertBefore("c", "string", {
          macro: {
            pattern:
              /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                I.languages.c.string,
              ],
              char: I.languages.c.char,
              comment: I.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: I.languages.c },
            },
          },
        }),
        I.languages.insertBefore("c", "function", {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete I.languages.c.boolean,
        (a = I),
        (r =
          /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
        (s = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
          /<keyword>/g,
          function () {
            return r.source;
          }
        )),
        (a.languages.cpp = a.languages.extend("c", {
          "class-name": [
            {
              pattern: RegExp(
                /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                  /<keyword>/g,
                  function () {
                    return r.source;
                  }
                )
              ),
              lookbehind: !0,
            },
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
          ],
          keyword: r,
          number: {
            pattern:
              /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0,
          },
          operator:
            />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:false|true)\b/,
        })),
        a.languages.insertBefore("cpp", "string", {
          module: {
            pattern: RegExp(
              /(\b(?:import|module)\s+)/.source +
                "(?:" +
                /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                "|" +
                /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                  /<mod-name>/g,
                  function () {
                    return s;
                  }
                ) +
                ")"
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              string: /^[<"][\s\S]+/,
              operator: /:/,
              punctuation: /\./,
            },
          },
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0,
          },
        }),
        a.languages.insertBefore("cpp", "keyword", {
          "generic-function": {
            pattern:
              /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
              function: /^\w+/,
              generic: {
                pattern: /<[\s\S]+/,
                alias: "class-name",
                inside: a.languages.cpp,
              },
            },
          },
        }),
        a.languages.insertBefore("cpp", "operator", {
          "double-colon": { pattern: /::/, alias: "punctuation" },
        }),
        a.languages.insertBefore("cpp", "class-name", {
          "base-clause": {
            pattern:
              /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: a.languages.extend("cpp", {}),
          },
        }),
        a.languages.insertBefore(
          "inside",
          "double-colon",
          { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
          a.languages.cpp["base-clause"]
        ),
        (o =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
        ((i = I).languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: "selector",
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0,
              },
            },
          },
          url: {
            pattern: RegExp(
              "\\burl\\((?:" +
                o.source +
                "|" +
                /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                ")\\)",
              "i"
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp("^" + o.source + "$"), alias: "url" },
            },
          },
          selector: {
            pattern: RegExp(
              "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                o.source +
                ")*(?=\\s*\\{)"
            ),
            lookbehind: !0,
          },
          string: { pattern: o, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
          },
          punctuation: /[(){};:,]/,
        }),
        (i.languages.css.atrule.inside.rest = i.languages.css),
        (l = i.languages.markup) &&
          (l.tag.addInlined("style", "css"),
          l.tag.addAttribute("style", "css")),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var a = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            r = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: a,
                  number: r,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: a,
            number: r,
          });
        })(I),
        (I.languages.javascript = I.languages.extend("clike", {
          "class-name": [
            I.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|") +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (I.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        I.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: I.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: I.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: I.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: I.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: I.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        I.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: I.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        I.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        I.languages.markup &&
          (I.languages.markup.tag.addInlined("script", "javascript"),
          I.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (I.languages.js = I.languages.javascript),
        (c = /#(?!\{).+/),
        (p = { pattern: /#\{[^}]+\}/, alias: "variable" }),
        ((u = I).languages.coffeescript = u.languages.extend("javascript", {
          comment: c,
          string: [
            { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
            {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              inside: { interpolation: p },
            },
          ],
          keyword:
            /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
          "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
        })),
        u.languages.insertBefore("coffeescript", "comment", {
          "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
          "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: { comment: c, interpolation: p },
          },
        }),
        u.languages.insertBefore("coffeescript", "string", {
          "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
              delimiter: { pattern: /^`|`$/, alias: "punctuation" },
              script: {
                pattern: /[\s\S]+/,
                alias: "language-javascript",
                inside: u.languages.javascript,
              },
            },
          },
          "multiline-string": [
            { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
            {
              pattern: /"""[\s\S]*?"""/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: p },
            },
          ],
        }),
        u.languages.insertBefore("coffeescript", "keyword", {
          property: /(?!\d)\w+(?=\s*:(?!:))/,
        }),
        delete u.languages.coffeescript["template-string"],
        (u.languages.coffee = u.languages.coffeescript),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            a =
              "(?:" +
              n.source +
              "(?:[ 	]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ 	]+" +
              n.source +
              ")?)",
            r =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            return (
              (t = (t || "").replace(/m/g, "") + "m"),
              RegExp(
                /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                  .replace(/<<prop>>/g, function () {
                    return a;
                  })
                  .replace(/<<value>>/g, function () {
                    return e;
                  }),
                t
              )
            );
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return a;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return a;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + r + "|" + s + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: i(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: i(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: i(s), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(I),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return a;
              }
            ),
            s =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + r + s + "(?:" + r + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + r + s + ")(?:" + r + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(a),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + r + ")" + s + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + r + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(a),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" === e.language || "md" === e.language) &&
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, a = t.length; n < a; n++) {
                      var r = t[n];
                      if ("code" !== r.type) {
                        e(r.content);
                        continue;
                      }
                      var s = r.content[1],
                        i = r.content[3];
                      if (
                        s &&
                        i &&
                        "code-language" === s.type &&
                        "code-block" === i.type &&
                        "string" == typeof s.content
                      ) {
                        var o = s.content
                            .replace(/\b#/g, "sharp")
                            .replace(/\b\+\+/g, "pp"),
                          l =
                            "language-" +
                            (o = (/[a-z][\w-]*/i.exec(o) || [
                              "",
                            ])[0].toLowerCase());
                        i.alias
                          ? "string" == typeof i.alias
                            ? (i.alias = [i.alias, l])
                            : i.alias.push(l)
                          : (i.alias = [l]);
                      }
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n, a = "", r = 0, s = t.classes.length; r < s; r++) {
                  var u = t.classes[r],
                    c = /language-(.+)/.exec(u);
                  if (c) {
                    a = c[1];
                    break;
                  }
                }
                var p = e.languages[a];
                if (p)
                  t.content = e.highlight(
                    t.content
                      .replace(i, "")
                      .replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (e, t) {
                          return "#" === (t = t.toLowerCase())[0]
                            ? l(
                                "x" === t[1]
                                  ? parseInt(t.slice(2), 16)
                                  : Number(t.slice(1))
                              )
                            : o[t] || e;
                        }
                      ),
                    p,
                    a
                  );
                else if (a && "none" !== a && e.plugins.autoloader) {
                  var d =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = d),
                    e.plugins.autoloader.loadLanguages(a, function () {
                      var t = document.getElementById(d);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[a],
                          a
                        ));
                    });
                }
              }
            });
          var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            o = { amp: "&", lt: "<", gt: ">", quot: '"' },
            l = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(I),
        (I.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: I.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        I.hooks.add("after-tokenize", function (e) {
          if ("graphql" === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return (
                    "string" != typeof e &&
                    "comment" !== e.type &&
                    "scalar" !== e.type
                  );
                }),
                n = 0;
              n < t.length;

            ) {
              var a = t[n++];
              if ("keyword" === a.type && "mutation" === a.content) {
                var r = [];
                if (
                  c(["definition-mutation", "punctuation"]) &&
                  "(" === t[n + 1].content
                ) {
                  n += 2;
                  var s = p(/^\($/, /^\)$/);
                  if (-1 === s) continue;
                  for (; n < s; n++) {
                    var i = t[n + 0];
                    "variable" === i.type &&
                      (d(i, "variable-input"), r.push(i.content));
                  }
                  n = s + 1;
                }
                if (
                  c(["punctuation", "property-query"]) &&
                  "{" === t[n + 0].content &&
                  (d(t[++n + 0], "property-mutation"), r.length > 0)
                ) {
                  var o = p(/^\{$/, /^\}$/);
                  if (-1 === o) continue;
                  for (var l = n; l < o; l++) {
                    var u = t[l];
                    "variable" === u.type &&
                      r.indexOf(u.content) >= 0 &&
                      d(u, "variable-input");
                  }
                }
              }
            }
          function c(e, a) {
            a = a || 0;
            for (var r = 0; r < e.length; r++) {
              var s = t[n + (r + a)];
              if (!s || s.type !== e[r]) return !1;
            }
            return !0;
          }
          function p(e, a) {
            for (var r = 1, s = n; s < t.length; s++) {
              var i = t[s],
                o = i.content;
              if ("punctuation" === i.type && "string" == typeof o) {
                if (e.test(o)) r++;
                else if (a.test(o) && 0 == --r) return s;
              }
            }
            return -1;
          }
          function d(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []),
              n.push(t);
          }
        }),
        (I.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            a = t.inside.interpolation,
            r = a.inside["interpolation-punctuation"],
            s = a.pattern.source;
          function i(t, a) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + a + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function o(t, n, a) {
            var r = { code: t, grammar: n, language: a };
            return (
              e.hooks.run("before-tokenize", r),
              (r.tokens = e.tokenize(r.code, r.grammar)),
              e.hooks.run("after-tokenize", r),
              r.tokens
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:markdown|md)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          var l = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          e.hooks.add("after-tokenize", function (t) {
            t.language in l &&
              (function t(n) {
                for (var i = 0, l = n.length; i < l; i++) {
                  var u = n[i];
                  if ("string" != typeof u) {
                    var c = u.content;
                    if (!Array.isArray(c)) {
                      "string" != typeof c && t([c]);
                      continue;
                    }
                    if ("template-string" === u.type) {
                      var p = c[1];
                      if (
                        3 === c.length &&
                        "string" != typeof p &&
                        "embedded-code" === p.type
                      ) {
                        var d = (function e(t) {
                            return "string" == typeof t
                              ? t
                              : Array.isArray(t)
                              ? t.map(e).join("")
                              : e(t.content);
                          })(p),
                          g = p.alias,
                          f = Array.isArray(g) ? g[0] : g,
                          b = e.languages[f];
                        if (!b) continue;
                        c[1] = (function (t, n, i) {
                          var l = e.tokenize(t, {
                              interpolation: {
                                pattern: RegExp(s),
                                lookbehind: !0,
                              },
                            }),
                            u = 0,
                            c = {},
                            p = o(
                              l
                                .map(function (e) {
                                  if ("string" == typeof e) return e;
                                  for (
                                    var n, a, r = e.content;
                                    -1 !==
                                    t.indexOf(
                                      ((n = u++),
                                      (a =
                                        "___" +
                                        i.toUpperCase() +
                                        "_" +
                                        n +
                                        "___"))
                                    );

                                  );
                                  return (c[a] = r), a;
                                })
                                .join(""),
                              n,
                              i
                            ),
                            d = Object.keys(c);
                          return (
                            (u = 0),
                            (function t(n) {
                              for (var s = 0; s < n.length; s++) {
                                if (u >= d.length) return;
                                var i = n[s];
                                if (
                                  "string" == typeof i ||
                                  "string" == typeof i.content
                                ) {
                                  var l = d[u],
                                    p = "string" == typeof i ? i : i.content,
                                    g = p.indexOf(l);
                                  if (-1 !== g) {
                                    ++u;
                                    var f = p.substring(0, g),
                                      b = (function (t) {
                                        var n = {};
                                        n["interpolation-punctuation"] = r;
                                        var s = e.tokenize(t, n);
                                        if (3 === s.length) {
                                          var i = [1, 1];
                                          i.push.apply(
                                            i,
                                            o(
                                              s[1],
                                              e.languages.javascript,
                                              "javascript"
                                            )
                                          ),
                                            s.splice.apply(s, i);
                                        }
                                        return new e.Token(
                                          "interpolation",
                                          s,
                                          a.alias,
                                          t
                                        );
                                      })(c[l]),
                                      m = p.substring(g + l.length),
                                      h = [];
                                    if ((f && h.push(f), h.push(b), m)) {
                                      var y = [m];
                                      t(y), h.push.apply(h, y);
                                    }
                                    "string" == typeof i
                                      ? (n.splice.apply(n, [s, 1].concat(h)),
                                        (s += h.length - 1))
                                      : (i.content = h);
                                  }
                                } else {
                                  var E = i.content;
                                  Array.isArray(E) ? t(E) : t([E]);
                                }
                              }
                            })(p),
                            new e.Token(i, p, "language-" + i, t)
                          );
                        })(d, b, f);
                      }
                    } else t(c);
                  }
                }
              })(t.tokens);
          });
        })(I),
        ((d = I).languages.typescript = d.languages.extend("javascript", {
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          builtin:
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
        })),
        d.languages.typescript.keyword.push(
          /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
          /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
          /\btype\b(?=\s*(?:[\{*]|$))/
        ),
        delete d.languages.typescript.parameter,
        delete d.languages.typescript["literal-property"],
        delete (g = d.languages.extend("typescript", {}))["class-name"],
        (d.languages.typescript["class-name"].inside = g),
        d.languages.insertBefore("typescript", "function", {
          decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
              at: { pattern: /^@/, alias: "operator" },
              function: /^[\s\S]+/,
            },
          },
          "generic-function": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
              function:
                /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
              generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: g },
            },
          },
        }),
        (d.languages.ts = d.languages.typescript),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var n = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              a = 0;
            a < n.length;
            a++
          ) {
            var r = n[a],
              s = e.languages.javascript[r];
            "RegExp" === e.util.type(s) &&
              (s = e.languages.javascript[r] = { pattern: s });
            var i = s.inside || {};
            (s.inside = i), (i["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(I),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function s(e, t) {
            return RegExp(
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return a;
                })
                .replace(/<SPREAD>/g, function () {
                  return r;
                })),
              t
            );
          }
          (r = s(r).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = s(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: s(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: s(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var i = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(i).join("")
                : "";
            },
            o = function (t) {
              for (var n = [], a = 0; a < t.length; a++) {
                var r = t[a],
                  s = !1;
                if (
                  ("string" != typeof r &&
                    ("tag" === r.type &&
                    r.content[0] &&
                    "tag" === r.content[0].type
                      ? "</" === r.content[0].content[0].content
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            i(r.content[0].content[1]) &&
                          n.pop()
                        : "/>" === r.content[r.content.length - 1].content ||
                          n.push({
                            tagName: i(r.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        "punctuation" === r.type &&
                        "{" === r.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        "punctuation" === r.type &&
                        "}" === r.content
                      ? n[n.length - 1].openedBraces--
                      : (s = !0)),
                  (s || "string" == typeof r) &&
                    n.length > 0 &&
                    0 === n[n.length - 1].openedBraces)
                ) {
                  var l = i(r);
                  a < t.length - 1 &&
                    ("string" == typeof t[a + 1] ||
                      "plain-text" === t[a + 1].type) &&
                    ((l += i(t[a + 1])), t.splice(a + 1, 1)),
                    a > 0 &&
                      ("string" == typeof t[a - 1] ||
                        "plain-text" === t[a - 1].type) &&
                      ((l = i(t[a - 1]) + l), t.splice(a - 1, 1), a--),
                    (t[a] = new e.Token("plain-text", l, null, l));
                }
                r.content && "string" != typeof r.content && o(r.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" === e.language || "tsx" === e.language) && o(e.tokens);
          });
        })(I),
        ((f = I).languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
        }),
        Object.keys(
          (b = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          })
        ).forEach(function (e) {
          var t = b[e],
            n = [];
          /^\w+$/.test(e) || n.push(/\w+/.exec(e)[0]),
            "diff" === e && n.push("bold"),
            (f.languages.diff[e] = {
              pattern: RegExp(
                "^(?:[" + t + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                "m"
              ),
              alias: n,
              inside: {
                line: {
                  pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                  lookbehind: !0,
                },
                prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(e)[0] },
              },
            });
        }),
        Object.defineProperty(f.languages.diff, "PREFIXES", { value: b }),
        (I.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (I.languages.go = I.languages.extend("clike", {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        I.languages.insertBefore("go", "string", {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete I.languages.go["class-name"],
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, a, r, s) {
                if (n.language === a) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(r, function (e) {
                    if ("function" == typeof s && !s(e)) return e;
                    for (
                      var r, o = i.length;
                      -1 !== n.code.indexOf((r = t(a, o)));

                    )
                      ++o;
                    return (i[o] = e), r;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, a) {
                if (n.language === a && n.tokenStack) {
                  n.grammar = e.languages[a];
                  var r = 0,
                    s = Object.keys(n.tokenStack);
                  !(function i(o) {
                    for (var l = 0; l < o.length && !(r >= s.length); l++) {
                      var u = o[l];
                      if (
                        "string" == typeof u ||
                        (u.content && "string" == typeof u.content)
                      ) {
                        var c = s[r],
                          p = n.tokenStack[c],
                          d = "string" == typeof u ? u : u.content,
                          g = t(a, c),
                          f = d.indexOf(g);
                        if (f > -1) {
                          ++r;
                          var b = d.substring(0, f),
                            m = new e.Token(
                              a,
                              e.tokenize(p, n.grammar),
                              "language-" + a,
                              p
                            ),
                            h = d.substring(f + g.length),
                            y = [];
                          b && y.push.apply(y, i([b])),
                            y.push(m),
                            h && y.push.apply(y, i([h])),
                            "string" == typeof u
                              ? o.splice.apply(o, [l, 1].concat(y))
                              : (u.content = y);
                        }
                      } else u.content && i(u.content);
                    }
                    return o;
                  })(n.tokens);
                }
              },
            },
          });
        })(I),
        ((m = I).languages.handlebars = {
          comment: /\{\{![\s\S]*?\}\}/,
          delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
          string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          number:
            /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          boolean: /\b(?:false|true)\b/,
          block: {
            pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
            lookbehind: !0,
            alias: "keyword",
          },
          brackets: {
            pattern: /\[[^\]]+\]/,
            inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
          },
          punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
          variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
        }),
        m.hooks.add("before-tokenize", function (e) {
          m.languages["markup-templating"].buildPlaceholders(
            e,
            "handlebars",
            /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
          );
        }),
        m.hooks.add("after-tokenize", function (e) {
          m.languages["markup-templating"].tokenizePlaceholders(
            e,
            "handlebars"
          );
        }),
        (m.languages.hbs = m.languages.handlebars),
        (I.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (I.languages.webmanifest = I.languages.json),
        (I.languages.less = I.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        I.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (I.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (I.languages.objectivec = I.languages.extend("c", {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete I.languages.objectivec["class-name"],
        (I.languages.objc = I.languages.objectivec),
        (I.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: "property" },
          label: { pattern: /\B~\w+/, alias: "property" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "symbol" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          "operator-like-punctuation": {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: "punctuation",
          },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (I.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (I.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = I.languages.python),
        (I.languages.py = I.languages.python),
        (I.languages.reason = I.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        I.languages.insertBefore("reason", "class-name", {
          char: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete I.languages.reason.function,
        ((h = I).languages.sass = h.languages.extend("css", {
          comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: !0,
            greedy: !0,
          },
        })),
        h.languages.insertBefore("sass", "atrule", {
          "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: !0,
            inside: { atrule: /(?:@[\w-]+|[+=])/ },
          },
        }),
        delete h.languages.sass.atrule,
        (y = /\$[-\w]+|#\{\$[-\w]+\}/),
        (E = [
          /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
          { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
        ]),
        h.languages.insertBefore("sass", "property", {
          "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: !0,
            inside: { punctuation: /:/, variable: y, operator: E },
          },
          "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: !0,
            inside: {
              property: [
                /[^:\s]+(?=\s*:)/,
                { pattern: /(:)[^:\s]+/, lookbehind: !0 },
              ],
              punctuation: /:/,
              variable: y,
              operator: E,
              important: h.languages.sass.important,
            },
          },
        }),
        delete h.languages.sass.property,
        delete h.languages.sass.important,
        h.languages.insertBefore("sass", "punctuation", {
          selector: {
            pattern:
              /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: !0,
            greedy: !0,
          },
        }),
        (I.languages.scss = I.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        I.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        I.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        I.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (I.languages.scss.atrule.inside.rest = I.languages.scss),
        (k = I),
        ((w = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
          string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: !0,
          },
          interpolation: null,
          func: null,
          important: /\B!(?:important|optional)\b/i,
          keyword: {
            pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
            lookbehind: !0,
          },
          hexcode: /#[\da-f]{3,6}/i,
          color: [
            /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
            {
              pattern:
                /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
              inside: {
                unit: (S = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 }),
                number: (v = {
                  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                  lookbehind: !0,
                }),
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/,
              },
            },
          ],
          entity: /\\[\da-f]{1,8}/i,
          unit: S,
          boolean: /\b(?:false|true)\b/,
          operator: [
            /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
          ],
          number: v,
          punctuation: /[{}()\[\];:,]/,
        }).interpolation = {
          pattern: /\{[^\r\n}:]+\}/,
          alias: "variable",
          inside: {
            delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
            rest: w,
          },
        }),
        (w.func = {
          pattern: /[\w-]+\([^)]*\).*/,
          inside: { function: /^[^(]+/, rest: w },
        }),
        (k.languages.stylus = {
          "atrule-declaration": {
            pattern: /(^[ \t]*)@.+/m,
            lookbehind: !0,
            inside: { atrule: /^@[\w-]+/, rest: w },
          },
          "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
            lookbehind: !0,
            inside: { variable: /^\S+/, rest: w },
          },
          statement: {
            pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
            lookbehind: !0,
            inside: { keyword: /^\S+/, rest: w },
          },
          "property-declaration": {
            pattern:
              /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
            lookbehind: !0,
            inside: {
              property: {
                pattern: /^[^\s:]+/,
                inside: { interpolation: w.interpolation },
              },
              rest: w,
            },
          },
          selector: {
            pattern:
              /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
            lookbehind: !0,
            inside: {
              interpolation: w.interpolation,
              comment: w.comment,
              punctuation: /[{},]/,
            },
          },
          func: w.func,
          string: w.string,
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
            greedy: !0,
          },
          interpolation: w.interpolation,
          punctuation: /[{}()\[\];:.]/,
        }),
        (T = (A = I).util.clone(A.languages.typescript)),
        (A.languages.tsx = A.languages.extend("jsx", T)),
        delete A.languages.tsx.parameter,
        delete A.languages.tsx["literal-property"],
        ((x = A.languages.tsx.tag).pattern = RegExp(
          /(^|[^\w$]|(?=<\/))/.source + "(?:" + x.pattern.source + ")",
          x.pattern.flags
        )),
        (x.lookbehind = !0),
        (I.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        });
      var R = n(27378),
        O = {
          Prism: I,
          theme: {
            plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
            styles: [
              {
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: { color: "#6c6783" },
              },
              { types: ["namespace"], style: { opacity: 0.7 } },
              {
                types: ["tag", "operator", "number"],
                style: { color: "#e09142" },
              },
              { types: ["property", "function"], style: { color: "#9a86fd" } },
              {
                types: ["tag-id", "selector", "atrule-id"],
                style: { color: "#eeebff" },
              },
              { types: ["attr-name"], style: { color: "#c4b9fe" } },
              {
                types: [
                  "boolean",
                  "string",
                  "entity",
                  "url",
                  "attr-value",
                  "keyword",
                  "control",
                  "directive",
                  "unit",
                  "statement",
                  "regex",
                  "atrule",
                  "placeholder",
                  "variable",
                ],
                style: { color: "#ffcc99" },
              },
              {
                types: ["deleted"],
                style: { textDecorationLine: "line-through" },
              },
              {
                types: ["inserted"],
                style: { textDecorationLine: "underline" },
              },
              { types: ["italic"], style: { fontStyle: "italic" } },
              { types: ["important", "bold"], style: { fontWeight: "bold" } },
              { types: ["important"], style: { color: "#c4b9fe" } },
            ],
          },
        };
      function F(e, t, n) {
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
      function L() {
        return (L =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var N = /\r\n|\r|\n/,
        D = function (e) {
          0 === e.length
            ? e.push({ types: ["plain"], content: "\n", empty: !0 })
            : 1 === e.length &&
              "" === e[0].content &&
              ((e[0].content = "\n"), (e[0].empty = !0));
        },
        P = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        B = function (e) {
          for (
            var t = [[]],
              n = [e],
              a = [0],
              r = [e.length],
              s = 0,
              i = 0,
              o = [],
              l = [o];
            i > -1;

          ) {
            for (; (s = a[i]++) < r[i]; ) {
              var u = void 0,
                c = t[i],
                p = n[i][s];
              if (
                ("string" == typeof p
                  ? ((c = i > 0 ? c : ["plain"]), (u = p))
                  : ((c = P(c, p.type)),
                    p.alias && (c = P(c, p.alias)),
                    (u = p.content)),
                "string" != typeof u)
              ) {
                i++, t.push(c), n.push(u), a.push(0), r.push(u.length);
                continue;
              }
              var d = u.split(N),
                g = d.length;
              o.push({ types: c, content: d[0] });
              for (var f = 1; f < g; f++)
                D(o), l.push((o = [])), o.push({ types: c, content: d[f] });
            }
            i--, t.pop(), n.pop(), a.pop(), r.pop();
          }
          return D(o), l;
        },
        C = function (e, t) {
          var n = e.plain,
            a = Object.create(null),
            r = e.styles.reduce(function (e, n) {
              var a = n.languages,
                r = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = L({}, e[t], r);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (
            (r.root = n), (r.plain = L({}, n, { backgroundColor: null })), r
          );
        };
      function $(e, t) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            -1 === t.indexOf(a) &&
            (n[a] = e[a]);
        return n;
      }
      var G = (function (e) {
        function t() {
          for (var t = this, n = [], a = arguments.length; a--; )
            n[a] = arguments[a];
          e.apply(this, n),
            F(this, "getThemeDict", function (e) {
              if (
                void 0 !== t.themeDict &&
                e.theme === t.prevTheme &&
                e.language === t.prevLanguage
              )
                return t.themeDict;
              (t.prevTheme = e.theme), (t.prevLanguage = e.language);
              var n = e.theme ? C(e.theme, e.language) : void 0;
              return (t.themeDict = n);
            }),
            F(this, "getLineProps", function (e) {
              var n = e.key,
                a = e.className,
                r = e.style,
                s = L({}, $(e, ["key", "className", "style", "line"]), {
                  className: "token-line",
                  style: void 0,
                  key: void 0,
                }),
                i = t.getThemeDict(t.props);
              return (
                void 0 !== i && (s.style = i.plain),
                void 0 !== r &&
                  (s.style = void 0 !== s.style ? L({}, s.style, r) : r),
                void 0 !== n && (s.key = n),
                a && (s.className += " " + a),
                s
              );
            }),
            F(this, "getStyleForToken", function (e) {
              var n = e.types,
                a = e.empty,
                r = n.length,
                s = t.getThemeDict(t.props);
              if (void 0 !== s) {
                if (1 === r && "plain" === n[0])
                  return a ? { display: "inline-block" } : void 0;
                if (1 === r && !a) return s[n[0]];
                var i = n.map(function (e) {
                  return s[e];
                });
                return Object.assign.apply(
                  Object,
                  [a ? { display: "inline-block" } : {}].concat(i)
                );
              }
            }),
            F(this, "getTokenProps", function (e) {
              var n = e.key,
                a = e.className,
                r = e.style,
                s = e.token,
                i = L({}, $(e, ["key", "className", "style", "token"]), {
                  className: "token " + s.types.join(" "),
                  children: s.content,
                  style: t.getStyleForToken(s),
                  key: void 0,
                });
              return (
                void 0 !== r &&
                  (i.style = void 0 !== i.style ? L({}, i.style, r) : r),
                void 0 !== n && (i.key = n),
                a && (i.className += " " + a),
                i
              );
            }),
            F(this, "tokenize", function (e, t, n, a) {
              var r = { code: t, grammar: n, language: a, tokens: [] };
              e.hooks.run("before-tokenize", r);
              var s = (r.tokens = e.tokenize(r.code, r.grammar, r.language));
              return e.hooks.run("after-tokenize", r), s;
            });
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.Prism,
              n = e.language,
              a = e.code,
              r = e.children,
              s = this.getThemeDict(this.props),
              i = t.languages[n];
            return r({
              tokens: B(void 0 !== i ? this.tokenize(t, a, i, n) : [a]),
              className: "prism-code language-" + n,
              style: void 0 !== s ? s.root : {},
              getLineProps: this.getLineProps,
              getTokenProps: this.getTokenProps,
            });
          }),
          t
        );
      })(R.Component);
    },
    15596: function (e, t) {
      t.Z = {
        plain: { color: "#9CDCFE", backgroundColor: "#1E1E1E" },
        styles: [
          { types: ["prolog"], style: { color: "rgb(0, 0, 128)" } },
          { types: ["comment"], style: { color: "rgb(106, 153, 85)" } },
          {
            types: [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation",
            ],
            style: { color: "rgb(86, 156, 214)" },
          },
          {
            types: ["number", "inserted"],
            style: { color: "rgb(181, 206, 168)" },
          },
          { types: ["constant"], style: { color: "rgb(100, 102, 149)" } },
          {
            types: ["attr-name", "variable"],
            style: { color: "rgb(156, 220, 254)" },
          },
          {
            types: ["deleted", "string", "attr-value", "template-punctuation"],
            style: { color: "rgb(206, 145, 120)" },
          },
          { types: ["selector"], style: { color: "rgb(215, 186, 125)" } },
          { types: ["tag"], style: { color: "rgb(78, 201, 176)" } },
          {
            types: ["tag"],
            languages: ["markup"],
            style: { color: "rgb(86, 156, 214)" },
          },
          {
            types: ["punctuation", "operator"],
            style: { color: "rgb(212, 212, 212)" },
          },
          {
            types: ["punctuation"],
            languages: ["markup"],
            style: { color: "#808080" },
          },
          { types: ["function"], style: { color: "rgb(220, 220, 170)" } },
          { types: ["class-name"], style: { color: "rgb(78, 201, 176)" } },
          { types: ["char"], style: { color: "rgb(209, 105, 105)" } },
        ],
      };
    },
    12625: function (e, t, n) {
      n.d(t, {
        O: function () {
          return B;
        },
      });
      var a,
        r,
        s,
        i = n(27378),
        o = n(36616),
        l = n(22652),
        u = n(57953),
        c = n(7723),
        p = n(4818),
        d = n(85804),
        g = n(92296),
        f = n(62722),
        b = n(37349),
        m = n(66412),
        h = n(14784);
      function y({ onFocus: e }) {
        let [t, n] = (0, i.useState)(!0),
          a = (0, m.t)();
        return t
          ? i.createElement(h._, {
              as: "button",
              type: "button",
              features: h.A.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let r,
                  s = 50;
                r = requestAnimationFrame(function t() {
                  if (s-- <= 0) {
                    r && cancelAnimationFrame(r);
                    return;
                  }
                  if (e()) {
                    if ((cancelAnimationFrame(r), !a.current)) return;
                    n(!1);
                    return;
                  }
                  r = requestAnimationFrame(t);
                });
              },
            })
          : null;
      }
      var E = n(11981),
        k = n(96661),
        S = n(70458);
      let v = i.createContext(null);
      function w({ children: e }) {
        let t = i.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let a = this.groups.get(e);
            a || ((a = new Map()), this.groups.set(e, a));
            let r = null != (n = a.get(t)) ? n : 0;
            return (
              a.set(t, r + 1),
              [
                Array.from(a.keys()).indexOf(t),
                function () {
                  let e = a.get(t);
                  e > 1 ? a.set(t, e - 1) : a.delete(t);
                },
              ]
            );
          },
        });
        return i.createElement(v.Provider, { value: t }, e);
      }
      function A(e) {
        let t = i.useContext(v);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = (function () {
            var e, t, n;
            let a =
              null !=
              (n =
                null ==
                (t =
                  null ==
                  (e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!a) return Symbol();
            let r = [],
              s = a;
            for (; s; ) r.push(s.index), (s = s.return);
            return "$." + r.join(".");
          })(),
          [a, r] = t.current.get(e, n);
        return i.useEffect(() => r, []), a;
      }
      var T =
          (((a = T || {})[(a.Forwards = 0)] = "Forwards"),
          (a[(a.Backwards = 1)] = "Backwards"),
          a),
        x =
          (((r = x || {})[(r.Less = -1)] = "Less"),
          (r[(r.Equal = 0)] = "Equal"),
          (r[(r.Greater = 1)] = "Greater"),
          r),
        _ =
          (((s = _ || {})[(s.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (s[(s.RegisterTab = 1)] = "RegisterTab"),
          (s[(s.UnregisterTab = 2)] = "UnregisterTab"),
          (s[(s.RegisterPanel = 3)] = "RegisterPanel"),
          (s[(s.UnregisterPanel = 4)] = "UnregisterPanel"),
          s);
      let I = {
          0(e, t) {
            var n;
            let a = (0, p.z2)(e.tabs, (e) => e.current),
              r = (0, p.z2)(e.panels, (e) => e.current),
              s = a.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              i = { ...e, tabs: a, panels: r };
            if (t.index < 0 || t.index > a.length - 1) {
              let n = (0, u.E)(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  (0, u.E)(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === s.length) return i;
              let r = (0, u.E)(n, {
                0: () => a.indexOf(s[0]),
                1: () => a.indexOf(s[s.length - 1]),
              });
              return { ...i, selectedIndex: -1 === r ? e.selectedIndex : r };
            }
            let o = a.slice(0, t.index),
              l = [...a.slice(t.index), ...o].find((e) => s.includes(e));
            if (!l) return i;
            let c = null != (n = a.indexOf(l)) ? n : e.selectedIndex;
            return (
              -1 === c && (c = e.selectedIndex), { ...i, selectedIndex: c }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let a = e.tabs[e.selectedIndex],
              r = (0, p.z2)([...e.tabs, t.tab], (e) => e.current),
              s = null != (n = r.indexOf(a)) ? n : e.selectedIndex;
            return (
              -1 === s && (s = e.selectedIndex),
              { ...e, tabs: r, selectedIndex: s }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, p.z2)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        R = (0, i.createContext)(null);
      function O(e) {
        let t = (0, i.useContext)(R);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, O), t);
        }
        return t;
      }
      R.displayName = "TabsDataContext";
      let F = (0, i.createContext)(null);
      function L(e) {
        let t = (0, i.useContext)(F);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, L), t);
        }
        return t;
      }
      function N(e, t) {
        return (0, u.E)(t.type, I, e, t);
      }
      F.displayName = "TabsActionsContext";
      let D = i.Fragment,
        P = o.AN.RenderStrategy | o.AN.Static,
        B = Object.assign(
          (0, o.yV)(function (e, t) {
            var n, a;
            let r = (0, l.M)(),
              { id: s = `headlessui-tabs-tab-${r}`, ...b } = e,
              {
                orientation: m,
                activation: h,
                selectedIndex: y,
                tabs: v,
                panels: w,
              } = O("Tab"),
              T = L("Tab"),
              x = O("Tab"),
              _ = (0, i.useRef)(null),
              I = (0, g.T)(_, t);
            (0, d.e)(() => T.registerTab(_), [T, _]);
            let R = A("tabs"),
              F = v.indexOf(_);
            -1 === F && (F = R);
            let N = F === y,
              D = (0, E.z)((e) => {
                var t;
                let n = e();
                if (n === p.fE.Success && "auto" === h) {
                  let e = null == (t = (0, S.r)(_)) ? void 0 : t.activeElement,
                    n = x.tabs.findIndex((t) => t.current === e);
                  -1 !== n && T.change(n);
                }
                return n;
              }),
              P = (0, E.z)((e) => {
                let t = v.map((e) => e.current).filter(Boolean);
                if (e.key === c.R.Space || e.key === c.R.Enter) {
                  e.preventDefault(), e.stopPropagation(), T.change(F);
                  return;
                }
                switch (e.key) {
                  case c.R.Home:
                  case c.R.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      D(() => (0, p.jA)(t, p.TO.First))
                    );
                  case c.R.End:
                  case c.R.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      D(() => (0, p.jA)(t, p.TO.Last))
                    );
                }
                if (
                  D(() =>
                    (0, u.E)(m, {
                      vertical: () =>
                        e.key === c.R.ArrowUp
                          ? (0, p.jA)(t, p.TO.Previous | p.TO.WrapAround)
                          : e.key === c.R.ArrowDown
                          ? (0, p.jA)(t, p.TO.Next | p.TO.WrapAround)
                          : p.fE.Error,
                      horizontal: () =>
                        e.key === c.R.ArrowLeft
                          ? (0, p.jA)(t, p.TO.Previous | p.TO.WrapAround)
                          : e.key === c.R.ArrowRight
                          ? (0, p.jA)(t, p.TO.Next | p.TO.WrapAround)
                          : p.fE.Error,
                    })
                  ) === p.fE.Success
                )
                  return e.preventDefault();
              }),
              B = (0, i.useRef)(!1),
              C = (0, E.z)(() => {
                var e;
                B.current ||
                  ((B.current = !0),
                  null == (e = _.current) || e.focus({ preventScroll: !0 }),
                  T.change(F),
                  (0, k.Y)(() => {
                    B.current = !1;
                  }));
              }),
              $ = (0, E.z)((e) => {
                e.preventDefault();
              }),
              G = (0, i.useMemo)(() => ({ selected: N }), [N]),
              M = {
                ref: I,
                onKeyDown: P,
                onMouseDown: $,
                onClick: C,
                id: s,
                role: "tab",
                type: (0, f.f)(e, _),
                "aria-controls":
                  null == (a = null == (n = w[F]) ? void 0 : n.current)
                    ? void 0
                    : a.id,
                "aria-selected": N,
                tabIndex: N ? 0 : -1,
              };
            return (0,
            o.sY)({ ourProps: M, theirProps: b, slot: G, defaultTag: "button", name: "Tabs.Tab" });
          }),
          {
            Group: (0, o.yV)(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: a = !1,
                  manual: r = !1,
                  onChange: s,
                  selectedIndex: l = null,
                  ...u
                } = e,
                c = a ? "vertical" : "horizontal",
                f = r ? "manual" : "auto",
                m = null !== l,
                h = (0, g.T)(t),
                [k, S] = (0, i.useReducer)(N, {
                  selectedIndex: null != l ? l : n,
                  tabs: [],
                  panels: [],
                }),
                v = (0, i.useMemo)(
                  () => ({ selectedIndex: k.selectedIndex }),
                  [k.selectedIndex]
                ),
                A = (0, b.E)(s || (() => {})),
                T = (0, b.E)(k.tabs),
                x = (0, i.useMemo)(
                  () => ({ orientation: c, activation: f, ...k }),
                  [c, f, k]
                ),
                _ = (0, E.z)(
                  (e) => (S({ type: 1, tab: e }), () => S({ type: 2, tab: e }))
                ),
                I = (0, E.z)(
                  (e) => (
                    S({ type: 3, panel: e }), () => S({ type: 4, panel: e })
                  )
                ),
                O = (0, E.z)((e) => {
                  L.current !== e && A.current(e),
                    m || S({ type: 0, index: e });
                }),
                L = (0, b.E)(m ? e.selectedIndex : k.selectedIndex),
                P = (0, i.useMemo)(
                  () => ({ registerTab: _, registerPanel: I, change: O }),
                  []
                );
              return (
                (0, d.e)(() => {
                  S({ type: 0, index: null != l ? l : n });
                }, [l]),
                (0, d.e)(() => {
                  if (void 0 === L.current || k.tabs.length <= 0) return;
                  let e = (0, p.z2)(k.tabs, (e) => e.current);
                  e.some((e, t) => k.tabs[t] !== e) &&
                    O(e.indexOf(k.tabs[L.current]));
                }),
                i.createElement(
                  w,
                  null,
                  i.createElement(
                    F.Provider,
                    { value: P },
                    i.createElement(
                      R.Provider,
                      { value: x },
                      x.tabs.length <= 0 &&
                        i.createElement(y, {
                          onFocus: () => {
                            var e, t;
                            for (let n of T.current)
                              if (
                                (null == (e = n.current)
                                  ? void 0
                                  : e.tabIndex) === 0
                              )
                                return null == (t = n.current) || t.focus(), !0;
                            return !1;
                          },
                        }),
                      (0, o.sY)({
                        ourProps: { ref: h },
                        theirProps: u,
                        slot: v,
                        defaultTag: D,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: (0, o.yV)(function (e, t) {
              let { orientation: n, selectedIndex: a } = O("Tab.List"),
                r = (0, g.T)(t);
              return (0,
              o.sY)({ ourProps: { ref: r, role: "tablist", "aria-orientation": n }, theirProps: e, slot: { selectedIndex: a }, defaultTag: "div", name: "Tabs.List" });
            }),
            Panels: (0, o.yV)(function (e, t) {
              let { selectedIndex: n } = O("Tab.Panels"),
                a = (0, g.T)(t),
                r = (0, i.useMemo)(() => ({ selectedIndex: n }), [n]);
              return (0,
              o.sY)({ ourProps: { ref: a }, theirProps: e, slot: r, defaultTag: "div", name: "Tabs.Panels" });
            }),
            Panel: (0, o.yV)(function (e, t) {
              var n, a, r, s;
              let u = (0, l.M)(),
                {
                  id: c = `headlessui-tabs-panel-${u}`,
                  tabIndex: p = 0,
                  ...f
                } = e,
                { selectedIndex: b, tabs: m, panels: y } = O("Tab.Panel"),
                E = L("Tab.Panel"),
                k = (0, i.useRef)(null),
                S = (0, g.T)(k, t);
              (0, d.e)(() => E.registerPanel(k), [E, k]);
              let v = A("panels"),
                w = y.indexOf(k);
              -1 === w && (w = v);
              let T = w === b,
                x = (0, i.useMemo)(() => ({ selected: T }), [T]),
                _ = {
                  ref: S,
                  id: c,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (a = null == (n = m[w]) ? void 0 : n.current)
                      ? void 0
                      : a.id,
                  tabIndex: T ? p : -1,
                };
              return T ||
                (null != (r = f.unmount) && !r) ||
                (null != (s = f.static) && s)
                ? (0, o.sY)({
                    ourProps: _,
                    theirProps: f,
                    slot: x,
                    defaultTag: "div",
                    features: P,
                    visible: T,
                    name: "Tabs.Panel",
                  })
                : i.createElement(h._, { as: "span", ..._ });
            }),
          }
        );
    },
    62722: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var a = n(27378),
        r = n(85804);
      function s(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function i(e, t) {
        let [n, i] = (0, a.useState)(() => s(e));
        return (
          (0, r.e)(() => {
            i(s(e));
          }, [e.type, e.as]),
          (0, r.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                i("button"));
          }, [n, t]),
          n
        );
      }
    },
  },
]);
