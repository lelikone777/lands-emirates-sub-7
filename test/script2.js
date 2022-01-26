(()=>{
        "use strict";
        var e, t, n, r, o, d, a = {
            1226: (e,t,n)=>{
                n.d(t, {
                    t9: ()=>c,
                    u3: ()=>l,
                    g8: ()=>i
                });
                var r = n(3716)
                    , o = n(6926)
                    , d = n(9118);
                let a;
                const u = new Map
                    , s = new Map;
                function i(e, t) {
                    return a || (r.eM && console.log(">>> START LOAD WORKER"),
                        a = new Worker(new URL(n.p + n.u(626),n.b)),
                        function(e) {
                            a.addEventListener("message", (({data: t})=>{
                                    if ("update" === t.type)
                                        e(t.update);
                                    else if ("methodResponse" === t.type) {
                                        const e = u.get(t.messageId);
                                        e && (t.error ? e.reject(t.error) : e.resolve(t.response))
                                    } else if ("methodCallback" === t.type) {
                                        var n, r;
                                        null === (n = u.get(t.messageId)) || void 0 === n || null === (r = n.callback) || void 0 === r || r.call(n, ...t.callbackArgs)
                                    } else if ("unhandledError" === t.type) {
                                        var o;
                                        throw new Error(null === (o = t.error) || void 0 === o ? void 0 : o.message)
                                    }
                                }
                            ))
                        }(e),
                    "iOS" === t.platform && window.addEventListener("focus", (()=>{
                            m(),
                                setTimeout((()=>m()), 1e3)
                        }
                    ))),
                        f({
                            type: "initApi",
                            args: [t]
                        })
                }
                function c(e, ...t) {
                    if (!a)
                        return void (r.eM && console.warn("API is not initialized"));
                    const n = f({
                        type: "callMethod",
                        name: e,
                        args: t
                    });
                    return r.eM && (async()=>{
                            try {
                                await n
                            } catch (e) {}
                        }
                    )(),
                        n
                }
                function l(e) {
                    e.isCanceled = !0;
                    const {messageId: t} = s.get(e) || {};
                    t && a.postMessage({
                        type: "cancelProgress",
                        messageId: t
                    })
                }
                function f(e) {
                    const t = (0,
                        o.Z)(u)
                        , n = {
                        messageId: t,
                        ...e
                    }
                        , r = {
                        messageId: t
                    }
                        , d = new Promise(((e,t)=>{
                            Object.assign(r, {
                                resolve: e,
                                reject: t
                            })
                        }
                    ));
                    if ("args"in n && "function" == typeof n.args[1]) {
                        const e = n.args.pop();
                        r.callback = e,
                            s.set(e, r)
                    }
                    return u.set(t, r),
                        d.catch((()=>{}
                        )).finally((()=>{
                                u.delete(t),
                                r.callback && s.delete(r.callback)
                            }
                        )),
                        a.postMessage(n),
                        d
                }
                const h = Date.now();
                async function m() {
                    try {
                        await Promise.race([f({
                            type: "ping"
                        }), (0,
                            d.wO)(150).then((()=>Promise.reject(new Error("HEALTH_CHECK_TIMEOUT"))))])
                    } catch (e) {
                        console.error(e),
                        Date.now() - h >= 5e3 && window.location.reload()
                    }
                }
            }
            ,
            6137: (e,t,n)=>{
                n.d(t, {
                    Vv: ()=>r.Vv,
                    _f: ()=>r._f,
                    _Q: ()=>r._Q,
                    IU: ()=>o.I
                });
                var r = n(4746)
                    , o = n(9077)
            }
            ,
            9077: (e,t,n)=>{
                let r;
                n.d(t, {
                    I: ()=>r
                }),
                    function(e) {
                        e[e.BlobUrl = 0] = "BlobUrl",
                            e[e.Lottie = 1] = "Lottie",
                            e[e.Progressive = 2] = "Progressive",
                            e[e.Stream = 3] = "Stream"
                    }(r || (r = {}))
            }
            ,
            4746: (e,t,n)=>{
                let r;
                n.d(t, {
                    Vv: ()=>r,
                    _f: ()=>o,
                    _Q: ()=>d
                }),
                    function(e) {
                        e.Bold = "MessageEntityBold",
                            e.Blockquote = "MessageEntityBlockquote",
                            e.BotCommand = "MessageEntityBotCommand",
                            e.Cashtag = "MessageEntityCashtag",
                            e.Code = "MessageEntityCode",
                            e.Email = "MessageEntityEmail",
                            e.Hashtag = "MessageEntityHashtag",
                            e.Italic = "MessageEntityItalic",
                            e.MentionName = "MessageEntityMentionName",
                            e.Mention = "MessageEntityMention",
                            e.Phone = "MessageEntityPhone",
                            e.Pre = "MessageEntityPre",
                            e.Strike = "MessageEntityStrike",
                            e.TextUrl = "MessageEntityTextUrl",
                            e.Url = "MessageEntityUrl",
                            e.Underline = "MessageEntityUnderline",
                            e.Unknown = "MessageEntityUnknown"
                    }(r || (r = {}));
                const o = -1
                    , d = "MESSAGE_DELETED"
            }
            ,
            88: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>h
                });
                var r = n(4050)
                    , o = n(5116);
                const d = 36
                    , a = 2147483647;
                function u(e, t, n) {
                    let r;
                    for (e = n ? Math.floor(e / 700) : e >> 1,
                             e += Math.floor(e / t),
                             r = 0; e > 455; r += d)
                        e = Math.floor(e / 35);
                    return Math.floor(r + 36 * e / (e + 38))
                }
                function s(e, t) {
                    const n = []
                        , r = []
                        , o = e.length;
                    let s, i, c, l, f, h, m, p, g, y, v, b, w;
                    for (s = 128,
                             c = 0,
                             l = 72,
                             f = e.lastIndexOf("-"),
                         f < 0 && (f = 0),
                             h = 0; h < f; ++h) {
                        if (t && (r[n.length] = e.charCodeAt(h) - 65 < 26),
                        e.charCodeAt(h) >= 128)
                            throw new RangeError("Illegal input >= 0x80");
                        n.push(e.charCodeAt(h))
                    }
                    for (m = f > 0 ? f + 1 : 0; m < o; ) {
                        for (p = c,
                                 g = 1,
                                 y = d; ; y += d) {
                            if (m >= o)
                                throw RangeError("punycode_bad_input(1)");
                            if (v = (I = e.charCodeAt(m++)) - 48 < 10 ? I - 22 : I - 65 < 26 ? I - 65 : I - 97 < 26 ? I - 97 : d,
                            v >= d)
                                throw RangeError("punycode_bad_input(2)");
                            if (v > Math.floor((a - c) / g))
                                throw RangeError("punycode_overflow(1)");
                            if (c += v * g,
                                b = y <= l ? 1 : y >= l + 26 ? 26 : y - l,
                            v < b)
                                break;
                            if (g > Math.floor(a / (d - b)))
                                throw RangeError("punycode_overflow(2)");
                            g *= d - b
                        }
                        if (i = n.length + 1,
                            l = u(c - p, i, 0 === p),
                        Math.floor(c / i) > a - s)
                            throw RangeError("punycode_overflow(3)");
                        s += Math.floor(c / i),
                            c %= i,
                        t && r.splice(c, 0, e.charCodeAt(m - 1) - 65 < 26),
                            n.splice(c, 0, s),
                            c++
                    }
                    var I;
                    if (t)
                        for (c = 0,
                                 w = n.length; c < w; c++)
                            r[c] && (n[c] = String.fromCharCode(n[c]).toUpperCase().charCodeAt(0));
                    return (e=>{
                            const t = [];
                            let n = 0;
                            const r = e.length;
                            let o;
                            for (; n < r; ) {
                                if (o = e[n++],
                                55296 == (63488 & o))
                                    throw new RangeError("UTF-16(encode): Illegal UTF-16 value");
                                o > 65535 && (o -= 65536,
                                    t.push(String.fromCharCode(o >>> 10 & 1023 | 55296)),
                                    o = 56320 | 1023 & o),
                                    t.push(String.fromCharCode(o))
                            }
                            return t.join("")
                        }
                    )(n)
                }
                var i = n(3716)
                    , c = n(6752)
                    , l = n(1396);
                function f(e) {
                    if (!e)
                        return;
                    const t = (0,
                        l.X)(e);
                    if (t)
                        try {
                            let e = decodeURI(t);
                            const n = e.match(/^https?:\/\/([^/:?#]+)(?:[/:?#]|$)/i);
                            if (!n)
                                return;
                            const r = n[1];
                            return e = e.replace(r, function(e) {
                                const t = e.split(".")
                                    , n = [];
                                for (let e = 0; e < t.length; ++e) {
                                    const r = t[e];
                                    n.push(r.match(/^xn--/) ? s(r.slice(4)) : r)
                                }
                                return n.join(".")
                            }(r)),
                                e
                        } catch (t) {
                            i.eM && console.error("SafeLink.getDecodedUrl error ", e, t)
                        }
                }
                const h = (0,
                    r.X$)((({url: e, text: t, className: n, children: d, isRtl: a})=>{
                        const {toggleSafeLinkModal: u, openTelegramLink: s} = (0,
                            o.uC)()
                            , h = d || t
                            , m = e !== h
                            , p = (0,
                            r.I4)((t=>t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || !e || !e.match(i.FS) && !e.match(i.g$) ? !m || (u({
                            url: e
                        }),
                            t.preventDefault(),
                            !1) : (t.preventDefault(),
                            s({
                                url: e
                            }),
                            !1)), [m, s, u, e]);
                        if (!e)
                            return;
                        const g = (0,
                            c.Z)(n || "text-entity-link", t.length > 50 && "long-word-break-all");
                        return r.ZP.createElement("a", {
                            href: (0,
                                l.X)(e),
                            title: f(e),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: g,
                            onClick: p,
                            dir: a ? "rtl" : "auto"
                        }, h)
                    }
                ))
            }
            ,
            5376: (e,t,n)=>{
                n.d(t, {
                    yW: ()=>r,
                    K2: ()=>o,
                    mD: ()=>d,
                    Oh: ()=>a,
                    v6: ()=>u
                });
                function r(e) {
                    return e > 536870912 ? `${(e / 1073741824).toFixed(1)} GB` : e > 524288 ? `${(e / 1048576).toFixed(1)} MB` : `${(e / 1024).toFixed(1)} KB`
                }
                function o(e) {
                    const {fileName: t, mimeType: n} = e;
                    return d(t, n)
                }
                function d(e, t) {
                    return e && -1 !== e.indexOf(".") ? e.split(".").pop() : t.split("/").pop()
                }
                function a(e) {
                    switch (e) {
                        case "apk":
                        case "xls":
                        case "xlsx":
                            return "green";
                        case "zip":
                        case "rar":
                        case "7z":
                        case "tar":
                        case "gz":
                        case "ppt":
                        case "pptx":
                            return "orange";
                        case "pdf":
                        case "xps":
                            return "red";
                        default:
                            return "default"
                    }
                }
                function u(e) {
                    return Boolean(e.previewBlobUrl || e.thumbnail)
                }
            }
            ,
            4784: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(3681);
                const o = new RegExp(`^(?:${r.Z.source})+$`,"")
                    , d = e=>{
                    if (e.length > 24)
                        return !1;
                    if (!Boolean(e.match(o)))
                        return !1;
                    let t = 0;
                    for (; r.Z.exec(e); )
                        if (t++,
                        t > 3)
                            return r.Z.lastIndex = 0,
                                !1;
                    return t
                }
            }
            ,
            8005: (e,t,n)=>{
                n.d(t, {
                    D: ()=>p
                });
                var r = n(4050)
                    , o = n(2858)
                    , d = n(8035)
                    , a = n(9937)
                    , u = n(2340)
                    , s = n(6752)
                    , i = n(8033)
                    , c = n(5116);
                const l = ({className: e, sender: t, children: n})=>{
                        const {openUserInfo: o} = (0,
                            c.uC)()
                            , d = (0,
                            r.I4)((()=>{
                                t && o({
                                    id: t.id
                                })
                            }
                        ), [t, o]);
                        return t ? r.ZP.createElement(i.Z, {
                            className: (0,
                                s.Z)("UserLink", e),
                            onClick: d
                        }, n) : n
                    }
                    , f = ({className: e, message: t, children: n})=>{
                        const {focusMessage: o} = (0,
                            c.uC)()
                            , d = (0,
                            r.I4)((()=>{
                                t && o({
                                    chatId: t.chatId,
                                    messageId: t.id
                                })
                            }
                        ), [o, t]);
                        return t ? r.ZP.createElement(i.Z, {
                            className: (0,
                                s.Z)("MessageLink", e),
                            onClick: d
                        }, n) : n
                    }
                    , h = ({className: e, chatId: t, children: n})=>{
                        const {openChat: o} = (0,
                            c.uC)()
                            , d = (0,
                            r.I4)((()=>{
                                t && o({
                                    id: t
                                })
                            }
                        ), [t, o]);
                        return t ? r.ZP.createElement(i.Z, {
                            className: (0,
                                s.Z)("ChatLink", e),
                            onClick: d
                        }, n) : n
                    }
                    , m = ({className: e, groupCall: t, children: n})=>{
                        const {joinGroupCall: o} = (0,
                            c.uC)()
                            , d = (0,
                            r.I4)((()=>{
                                t && o({
                                    id: t.id,
                                    accessHash: t.accessHash
                                })
                            }
                        ), [t, o]);
                        return t ? r.ZP.createElement(i.Z, {
                            className: (0,
                                s.Z)("GroupCallLink", e),
                            onClick: d
                        }, n) : n
                    }
                ;
                function p(e, t, n, s, i, c, l={}) {
                    if (!t.content.action)
                        return [];
                    const {text: p, translationValues: v, amount: b, currency: w, call: I} = t.content.action
                        , C = []
                        , S = {
                        ...l,
                        maxTextLength: 32
                    };
                    let E, P = e("Chat.Service.Group.UpdatedPinnedMessage1" !== p || i ? p : "Message.PinnedGenericMessage", v && v.length ? v : void 0);
                    return P.includes("%payment_amount%") && (E = y(P, "%payment_amount%", (0,
                        a.x)(b, w, e.code)),
                        P = E.pop(),
                        C.push(...E)),
                        E = y(P, "%action_origin%", n ? !l.isEmbedded && function(e, t, n) {
                            return (0,
                                o.YC)(t.id) ? g(t, n) : function(e, t, n) {
                                const a = (0,
                                    d.Z)((0,
                                    o.U)(e, t));
                                return n ? a : r.ZP.createElement(h, {
                                    className: "action-link",
                                    chatId: t.id
                                }, t && (0,
                                    u.Z)(a))
                            }(e, t, n)
                        }(e, n, l.asPlain) || " " : "User"),
                        P = E.pop(),
                        C.push(...E),
                        E = y(P, "%target_user%", s ? s.map((e=>g(e, l.asPlain))).filter(Boolean) : "User"),
                        P = E.pop(),
                        C.push(...E),
                        E = y(P, "%message%", i ? function(e, t, n={}) {
                            const a = (0,
                                o.MK)(e, t)
                                , {photo: s, video: i, document: c, sticker: l} = (0,
                                o.qp)(t)
                                , {maxTextLength: h, isEmbedded: m, asPlain: p} = n
                                , g = m && a && !s && !i && !c && !l;
                            let y = (0,
                                d.Z)(a, h);
                            return m && (s ? y = "a photo" : i ? y = i.isGif ? "a GIF" : "a video" : c ? y = "a document" : l && (y = a)),
                                p ? g ? `«${y}»` : y : g ? r.ZP.createElement("span", null, "«", r.ZP.createElement(f, {
                                    className: "action-link",
                                    message: t
                                }, (0,
                                    u.Z)(y)), "»") : r.ZP.createElement(f, {
                                    className: "action-link",
                                    message: t
                                }, (0,
                                    u.Z)(y))
                        }(e, i, S) : "a message"),
                        P = E.pop(),
                        C.push(...E),
                        E = y(P, "%product%", i ? function(e) {
                            return e.content && e.content.invoice ? e.content.invoice.title : "a product"
                        }(i) : "a product"),
                        P = E.pop(),
                        C.push(...E),
                        E = y(P, "%target_chat%", c ? function(e, t) {
                            const n = "another chat";
                            return t ? n : r.ZP.createElement(h, {
                                className: "action-link",
                                chatId: e
                            }, n)
                        }(c, l.asPlain) : "another chat"),
                        C.push(...E),
                        l.asPlain ? C.join("").trim() : I ? function(e, t) {
                            return r.ZP.createElement(m, {
                                groupCall: e
                            }, t)
                        }(I, C) : C
                }
                function g(e, t) {
                    const n = (0,
                        d.Z)((0,
                        o.Js)(e));
                    return t ? n : r.ZP.createElement(l, {
                        className: "action-link",
                        sender: e
                    }, e && (0,
                        u.Z)(n))
                }
                function y(e, t, n) {
                    const r = e.indexOf(t);
                    if (r < 0 || !n)
                        return [e];
                    const o = [];
                    return o.push(e.substring(0, r)),
                        Array.isArray(n) ? n.forEach(((e,t)=>{
                                o.push(e),
                                t + 1 < n.length && o.push(", ")
                            }
                        )) : o.push(n),
                        o.push(e.substring(r + t.length)),
                        o
                }
            }
            ,
            2340: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>m
                });
                var r = n(4050)
                    , o = n(3681)
                    , d = n(3716)
                    , a = n(7361)
                    , u = n(4284)
                    , s = n(6752)
                    , i = n(782)
                    , c = n(7373)
                    , l = n(88);
                const f = /^[\d\wа-яё]$/i
                    , h = /(\*\*|__).+?\1/g;
                function m(e, t=["emoji"], n) {
                    return "string" != typeof e ? [e] : (0,
                        i.oA)(t.reduce(((e,t)=>{
                            switch (t) {
                                case "escape_html":
                                    return function(e) {
                                        const t = document.createElement("div");
                                        return e.reduce(((e,n)=>"string" != typeof n ? (e.push(n),
                                            e) : (t.innerText = n,
                                            e.push(t.innerHTML),
                                            e)), [])
                                    }(e);
                                case "hq_emoji":
                                    return o.Z.lastIndex = 0,
                                        p(e, "big", "jsx");
                                case "emoji":
                                    return o.Z.lastIndex = 0,
                                        p(e, "small", "jsx");
                                case "emoji_html":
                                    return o.Z.lastIndex = 0,
                                        p(e, "small", "html");
                                case "br":
                                    return g(e, "jsx");
                                case "br_html":
                                    return g(e, "html");
                                case "highlight":
                                    return d = e,
                                        a = n.highlight,
                                        d.reduce(((e,t)=>{
                                                if ("string" != typeof t || !a)
                                                    return e.push(t),
                                                        e;
                                                const n = t.toLowerCase()
                                                    , o = n.indexOf(a.toLowerCase())
                                                    , d = n[o + a.length];
                                                if (o < 0 || d && d.match(f))
                                                    return e.push(t),
                                                        e;
                                                const u = [];
                                                return u.push(t.substring(0, o)),
                                                    u.push(r.ZP.createElement("span", {
                                                        className: "matching-text-highlight"
                                                    }, t.substring(o, o + a.length))),
                                                    u.push(t.substring(o + a.length)),
                                                    [...e, ...u]
                                            }
                                        ), []);
                                case "links":
                                    return function(e) {
                                        return e.reduce(((e,t)=>{
                                                if ("string" != typeof t)
                                                    return e.push(t),
                                                        e;
                                                const n = t.match(y);
                                                if (!n || !n.length)
                                                    return e.push(t),
                                                        e;
                                                const o = [];
                                                let d = n.shift()
                                                    , a = 0;
                                                for (; d; ) {
                                                    const e = t.indexOf(d, a);
                                                    o.push(t.substring(a, e)),
                                                        d.startsWith("@") ? o.push(r.ZP.createElement(c.Z, {
                                                            username: d
                                                        }, d)) : (d.endsWith("?") && (d = d.slice(0, d.length - 1)),
                                                            o.push(r.ZP.createElement(l.Z, {
                                                                text: d,
                                                                url: d
                                                            }))),
                                                        a = e + d.length,
                                                        d = n.shift()
                                                }
                                                return o.push(t.substring(a)),
                                                    [...e, ...o]
                                            }
                                        ), [])
                                    }(e);
                                case "simple_markdown":
                                    return v(e, "jsx");
                                case "simple_markdown_html":
                                    return v(e, "html")
                            }
                            var d, a;
                            return e
                        }
                    ), [e]))
                }
                function p(e, t, n) {
                    return a.op ? e : e.reduce(((e,d)=>{
                            if ("string" != typeof d)
                                return e.push(d),
                                    e;
                            const a = (d = (0,
                                u.g6)(d)).split(o.Z)
                                , i = d.match(o.Z) || [];
                            return e.push(a[0]),
                                i.reduce(((e,d,i)=>{
                                        const c = (0,
                                            u.U_)((0,
                                            o.l)(d));
                                        if (!c)
                                            return e;
                                        const l = (0,
                                            s.Z)("emoji", "small" === t && "emoji-small");
                                        "jsx" === n && e.push(r.ZP.createElement("img", {
                                            className: l,
                                            src: `./img-apple-${"big" === t ? "160" : "64"}/${c}.png`,
                                            alt: d
                                        })),
                                        "html" === n && e.push(`<img draggable="false" class="${l}" src="./img-apple-${"big" === t ? "160" : "64"}/${c}.png" alt="${d}" />`);
                                        const f = 2 * i + 2;
                                        return a[f] && e.push(a[f]),
                                            e
                                    }
                                ), e)
                        }
                    ), [])
                }
                function g(e, t) {
                    return e.reduce(((e,n)=>{
                            if ("string" != typeof n)
                                return e.push(n),
                                    e;
                            const o = n.split(/\r\n|\r|\n/g).reduce(((e,n,o,d)=>{
                                    const a = n.trimLeft()
                                        , u = n.length - a.length;
                                    return e.push(String.fromCharCode(160).repeat(u) + a),
                                    o !== d.length - 1 && e.push("jsx" === t ? r.ZP.createElement("br", null) : "<br />"),
                                        e
                                }
                            ), []);
                            return [...e, ...o]
                        }
                    ), [])
                }
                const y = new RegExp(`${d.FM}|${d.uW}`,"ig");
                function v(e, t) {
                    return e.reduce(((e,n)=>{
                            if ("string" != typeof n)
                                return e.push(n),
                                    e;
                            const o = n.split(h)
                                , d = n.match(h) || [];
                            return e.push(o[0]),
                                d.reduce(((e,n,d)=>{
                                        "jsx" === t ? e.push(n.startsWith("**") ? r.ZP.createElement("b", null, n.replace(/\*\*/g, "")) : r.ZP.createElement("i", null, n.replace(/__/g, ""))) : e.push(n.startsWith("**") ? `<b>${n.replace(/\*\*/g, "")}</b>` : `<i>${n.replace(/__/g, "")}</i>`);
                                        const a = 2 * d + 2;
                                        return o[a] && e.push(o[a]),
                                            e
                                    }
                                ), e)
                        }
                    ), [])
                }
            }
            ,
            386: (e,t,n)=>{
                n.d(t, {
                    q: ()=>d,
                    b: ()=>a
                });
                var r = n(3716)
                    , o = n(7361);
                function d(e, t=!1) {
                    o.cj || !document.activeElement || document.activeElement.id !== r.R2 || !t && e.target !== e.currentTarget || e.preventDefault()
                }
                function a(e) {
                    d(e, !0)
                }
            }
            ,
            7373: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(4050)
                    , o = n(5116)
                    , d = n(1638);
                const a = (0,
                    o.c$)(((e,{userId: t})=>({
                    userOrChat: t ? (0,
                        d.dy)(e, t) : void 0
                })))((({username: e, userOrChat: t, children: n})=>{
                        const {openChat: d, openChatByUsername: a} = (0,
                            o.uC)();
                        return r.ZP.createElement("a", {
                            onClick: ()=>{
                                t ? d({
                                    id: t.id
                                }) : e && a({
                                    username: e.substring(1)
                                })
                            }
                            ,
                            className: "text-entity-link",
                            dir: "auto"
                        }, n)
                    }
                ))
            }
            ,
            231: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>u
                });
                var r = n(4050)
                    , o = n(6752)
                    , d = n(9204)
                    , a = n(8512);
                const u = ({ref: e, type: t="button", onClick: n, onContextMenu: u, onMouseDown: s, onMouseEnter: i, onMouseLeave: c, onFocus: l, children: f, size: h="default", color: m="primary", backgroundImage: p, className: g, round: y, pill: v, fluid: b, isText: w, isLoading: I, ariaLabel: C, href: S, download: E, disabled: P, ripple: M, faded: A, tabIndex: k, isRtl: T, withClickPropagation: N})=>{
                    let L = (0,
                        r.sO)(null);
                    e && (L = e);
                    const [R,D] = (0,
                        r.eJ)(!1)
                        , O = (0,
                        o.Z)("Button", g, h, m, y && "round", v && "pill", b && "fluid", P && "disabled", w && "text", I && "loading", M && "has-ripple", A && "faded", R && "clicked", p && "with-image")
                        , Z = (0,
                        r.I4)((e=>{
                            !P && n && n(e),
                                D(!0),
                                setTimeout((()=>{
                                        D(!1)
                                    }
                                ), 400)
                        }
                    ), [P, n])
                        , _ = (0,
                        r.I4)((e=>{
                            N || e.preventDefault(),
                            !P && s && s(e)
                        }
                    ), [s, P, N]);
                    return S ? r.ZP.createElement("a", {
                        ref: L,
                        className: O,
                        href: S,
                        title: C,
                        download: E,
                        tabIndex: k,
                        dir: T ? "rtl" : void 0
                    }, f, !P && M && r.ZP.createElement(a.Z, null)) : r.ZP.createElement("button", {
                        ref: L,
                        type: t,
                        className: O,
                        onClick: Z,
                        onContextMenu: u,
                        onMouseDown: _,
                        onMouseEnter: i && !P ? i : void 0,
                        onMouseLeave: c && !P ? c : void 0,
                        onFocus: l && !P ? l : void 0,
                        "aria-label": C,
                        title: C,
                        tabIndex: k,
                        dir: T ? "rtl" : void 0,
                        style: p ? `background-image: url(${p})` : void 0
                    }, I ? r.ZP.createElement("div", null, r.ZP.createElement("span", {
                        dir: T ? "auto" : void 0
                    }, "Please wait..."), r.ZP.createElement(d.Z, {
                        color: w ? "blue" : "white"
                    })) : f, !P && M && r.ZP.createElement(a.Z, null))
                }
            }
            ,
            4605: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>s
                });
                var r = n(4050)
                    , o = n(6752)
                    , d = n(9107)
                    , a = n(2340)
                    , u = n(9204);
                const s = (0,
                    r.X$)((({id: e, name: t, value: n, label: s, subLabel: i, checked: c, disabled: l, round: f, blocking: h, isLoading: m, onChange: p, onCheck: g})=>{
                        const y = (0,
                            d.Z)()
                            , v = (0,
                            r.I4)((e=>{
                                p && p(e),
                                g && g(e.currentTarget.checked)
                            }
                        ), [p, g])
                            , b = (0,
                            o.Z)("Checkbox", l && "disabled", f && "round", m && "loading", h && "blocking");
                        return r.ZP.createElement("label", {
                            className: b,
                            dir: y.isRtl ? "rtl" : void 0
                        }, r.ZP.createElement("input", {
                            type: "checkbox",
                            id: e,
                            name: t,
                            value: n,
                            checked: c,
                            disabled: l,
                            onChange: v
                        }), r.ZP.createElement("div", {
                            className: "Checkbox-main"
                        }, r.ZP.createElement("span", {
                            className: "label",
                            dir: "auto"
                        }, (0,
                            a.Z)(s)), i && r.ZP.createElement("span", {
                            className: "subLabel",
                            dir: "auto"
                        }, (0,
                            a.Z)(i))), m && r.ZP.createElement(u.Z, null))
                    }
                ))
            }
            ,
            3106: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(2328);
                const d = ({trigger: e, className: t, children: n, positionX: d="left", positionY: a="top", footer: u, forceOpen: s, onOpen: i, onClose: c})=>{
                    const l = (0,
                        r.sO)(null)
                        , f = (0,
                        r.sO)(null)
                        , [h,m] = (0,
                        r.eJ)(!1);
                    return r.ZP.createElement("div", {
                        ref: f,
                        className: `DropdownMenu ${t || ""}`,
                        onKeyDown: e=>{
                            const t = l.current;
                            if (!h || 40 !== e.keyCode || !t)
                                return;
                            const n = document.activeElement
                                , r = Array.from(t.children);
                            n && -1 !== r.indexOf(n) || r[0].focus()
                        }
                    }, e({
                        onTrigger: ()=>{
                            m(!h),
                                h ? c && c() : i && i()
                        }
                        ,
                        isOpen: h
                    }), r.ZP.createElement(o.Z, {
                        ref: l,
                        containerRef: f,
                        isOpen: h || !!s,
                        className: t || "",
                        positionX: d,
                        positionY: a,
                        footer: u,
                        autoClose: !0,
                        onClose: ()=>{
                            m(!1),
                            c && c()
                        }
                        ,
                        shouldSkipTransition: s
                    }, n))
                }
            }
            ,
            7687: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(4050)
                    , o = n(6752)
                    , d = n(9107);
                const a = (0,
                    r.X$)((({ref: e, id: t, className: n, value: a, label: u, error: s, success: i, disabled: c, readOnly: l, placeholder: f, autoComplete: h, inputMode: m, maxLength: p, onChange: g, onInput: y, onKeyPress: v, onKeyDown: b, onBlur: w, onPaste: I})=>{
                        const C = (0,
                            d.Z)()
                            , S = s || i || u
                            , E = (0,
                            o.Z)("input-group", a && "touched", s ? "error" : i && "success", c && "disabled", l && "disabled", S && "with-label", n);
                        return r.ZP.createElement("div", {
                            className: E,
                            dir: C.isRtl ? "rtl" : void 0
                        }, r.ZP.createElement("input", {
                            ref: e,
                            className: "form-control",
                            type: "text",
                            id: t,
                            dir: "auto",
                            value: a || "",
                            placeholder: f,
                            maxLength: p,
                            autoComplete: h,
                            inputMode: m,
                            disabled: c,
                            readOnly: l,
                            onChange: g,
                            onInput: y,
                            onKeyPress: v,
                            onKeyDown: b,
                            onBlur: w,
                            onPaste: I
                        }), S && r.ZP.createElement("label", {
                            htmlFor: t
                        }, S))
                    }
                ))
            }
            ,
            8033: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(6752);
                const d = ({children: e, className: t, isRtl: n, onClick: d})=>{
                    const a = (0,
                        r.I4)((e=>{
                            e.preventDefault(),
                                d(e)
                        }
                    ), [d]);
                    return r.ZP.createElement("a", {
                        href: "#",
                        className: (0,
                            o.Z)("Link", t),
                        dir: n ? "rtl" : "auto",
                        onClick: d ? a : void 0
                    }, e)
                }
            }
            ,
            4288: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(4050)
                    , o = n(9204)
                    , d = n(6752);
                const a = (0,
                    r.X$)((({color: e="blue", backgroundColor: t, onClick: n})=>r.ZP.createElement("div", {
                    className: (0,
                        d.Z)("Loading", n && "interactive"),
                    onClick: n
                }, r.ZP.createElement(o.Z, {
                    color: e,
                    backgroundColor: t
                }))))
            }
            ,
            2328: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>h
                });
                var r = n(4050)
                    , o = n(1212)
                    , d = n(2313)
                    , a = n(8758)
                    , u = n(274)
                    , s = n(3989)
                    , i = n(6752)
                    , c = n(8674)
                    , l = n(6590)
                    , f = n(386);
                const h = ({ref: e, containerRef: t, isOpen: n, className: h, style: m, bubbleStyle: p, children: g, positionX: y="left", positionY: v="top", autoClose: b=!1, footer: w, noCloseOnBackdrop: I=!1, onCloseAnimationEnd: C, onClose: S, onMouseEnter: E, onMouseLeave: P, shouldSkipTransition: M})=>{
                    let A = (0,
                        r.sO)(null);
                    e && (A = e);
                    const k = t || A
                        , {transitionClassNames: T} = (0,
                        o.Z)(n, C, M, void 0, M);
                    (0,
                        r.d4)((()=>n && S ? (0,
                        s.Z)(S) : void 0), [n, S]),
                        (0,
                            l.ZP)(n, S, void 0, void 0, b),
                        (0,
                            u.Z)((([e])=>{
                                (n || !n && !0 === e) && (0,
                                    c.YW)(200)
                            }
                        ), [n]);
                    const N = (0,
                        d.Z)(A, n, b ? S : void 0, void 0, !0);
                    (0,
                        a.Z)(n, k, I ? void 0 : S);
                    const L = (0,
                        i.Z)("bubble menu-container custom-scroll", v, y, w && "with-footer", T);
                    return r.ZP.createElement("div", {
                        className: (0,
                            i.Z)("Menu no-selection", h),
                        onKeyDown: n ? N : void 0,
                        onMouseEnter: E,
                        onMouseLeave: n ? P : void 0,
                        style: m
                    }, n && r.ZP.createElement("div", {
                        className: "backdrop",
                        onMouseDown: f.b
                    }), r.ZP.createElement("div", {
                        ref: A,
                        className: L,
                        style: `transform-origin: ${v} ${y};${p || ""}`,
                        onClick: b ? S : void 0
                    }, g, w && r.ZP.createElement("div", {
                        className: "footer"
                    }, w)))
                }
            }
            ,
            8964: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(4050)
                    , o = n(6752)
                    , d = n(9107);
                const a = e=>{
                    const {icon: t, className: n, children: a, onClick: u, href: s, download: i, disabled: c, destructive: l, ariaLabel: f} = e
                        , h = (0,
                        d.Z)()
                        , m = (0,
                        r.I4)((e=>{
                            if (c || !u)
                                return e.stopPropagation(),
                                    void e.preventDefault();
                            u(e)
                        }
                    ), [c, u])
                        , p = (0,
                        r.I4)((e=>{
                            if (13 === e.keyCode || 32 === e.keyCode)
                                return c || !u ? (e.stopPropagation(),
                                    void e.preventDefault()) : void u(e)
                        }
                    ), [c, u])
                        , g = (0,
                        o.Z)("MenuItem", n, c && "disabled", l && "destructive")
                        , y = r.ZP.createElement(r.ZP.Fragment, null, t && r.ZP.createElement("i", {
                        className: `icon-${t}`,
                        "data-char": t.startsWith("char-") ? t.replace("char-", "") : void 0
                    }), a);
                    return s ? r.ZP.createElement("a", {
                        tabIndex: 0,
                        className: g,
                        href: s,
                        download: i,
                        "aria-label": f,
                        title: f,
                        target: s.startsWith(window.location.origin) ? "_self" : "_blank",
                        rel: "noopener noreferrer",
                        dir: h.isRtl ? "rtl" : void 0,
                        onClick: u
                    }, y) : r.ZP.createElement("div", {
                        role: "button",
                        tabIndex: 0,
                        className: g,
                        onClick: m,
                        onKeyDown: p,
                        "aria-label": f,
                        title: f,
                        dir: h.isRtl ? "rtl" : void 0
                    }, y)
                }
            }
            ,
            8512: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(9118);
                const d = (0,
                    r.X$)((()=>{
                        const [e,t] = (0,
                            r.eJ)([])
                            , n = (0,
                            r.Ye)((()=>(0,
                            o.Ds)((()=>{
                                t([])
                            }
                        ), 700, !1)), [])
                            , d = (0,
                            r.I4)((r=>{
                                if (0 !== r.button)
                                    return;
                                const o = r.currentTarget
                                    , d = o.getBoundingClientRect()
                                    , a = o.offsetWidth / 2;
                                t([...e, {
                                    x: r.clientX - d.x - a / 2,
                                    y: r.clientY - d.y - a / 2,
                                    size: a
                                }]),
                                    requestAnimationFrame((()=>{
                                            n()
                                        }
                                    ))
                            }
                        ), [e, n]);
                        return r.ZP.createElement("div", {
                            className: "ripple-container",
                            onMouseDown: d
                        }, e.map((({x: e, y: t, size: n})=>r.ZP.createElement("span", {
                            style: `left: ${e}px; top: ${t}px; width: ${n}px; height: ${n}px;`
                        }))))
                    }
                ))
            }
            ,
            9204: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(6752);
                const d = ({color: e="blue", backgroundColor: t})=>r.ZP.createElement("div", {
                    className: (0,
                        o.Z)("Spinner", e, t && "with-background", `bg-${t}`)
                }, r.ZP.createElement("div", null))
            }
            ,
            3716: (e,t,n)=>{
                n.d(t, {
                    Ti: ()=>r,
                    ou: ()=>o,
                    iC: ()=>d,
                    Ji: ()=>a,
                    eM: ()=>u,
                    ZT: ()=>s,
                    Cg: ()=>i,
                    S: ()=>c,
                    b_: ()=>l,
                    Vx: ()=>f,
                    sd: ()=>h,
                    Uh: ()=>m,
                    gJ: ()=>p,
                    lO: ()=>g,
                    Cy: ()=>y,
                    lW: ()=>v,
                    SG: ()=>b,
                    lF: ()=>w,
                    fo: ()=>I,
                    ee: ()=>C,
                    by: ()=>S,
                    lo: ()=>P,
                    hT: ()=>M,
                    YQ: ()=>A,
                    rS: ()=>k,
                    t_: ()=>T,
                    Ov: ()=>N,
                    EN: ()=>L,
                    pn: ()=>R,
                    Hk: ()=>D,
                    Vk: ()=>O,
                    mo: ()=>Z,
                    qU: ()=>_,
                    ul: ()=>x,
                    NM: ()=>F,
                    Qx: ()=>B,
                    mw: ()=>$,
                    oB: ()=>U,
                    zy: ()=>j,
                    CX: ()=>W,
                    xS: ()=>G,
                    b6: ()=>V,
                    AR: ()=>H,
                    r_: ()=>z,
                    o_: ()=>Q,
                    R2: ()=>K,
                    nY: ()=>J,
                    QU: ()=>q,
                    jT: ()=>Y,
                    _m: ()=>X,
                    ks: ()=>ee,
                    l3: ()=>te,
                    u_: ()=>ne,
                    rO: ()=>re,
                    AE: ()=>oe,
                    AJ: ()=>de,
                    fK: ()=>ae,
                    V$: ()=>ue,
                    bK: ()=>se,
                    ck: ()=>ie,
                    xn: ()=>ce,
                    K7: ()=>le,
                    w7: ()=>fe,
                    z7: ()=>he,
                    qp: ()=>me,
                    Q: ()=>pe,
                    Mw: ()=>ge,
                    DC: ()=>ye,
                    Y7: ()=>ve,
                    yK: ()=>be,
                    K2: ()=>we,
                    bM: ()=>Ie,
                    ku: ()=>Ce,
                    zq: ()=>Se,
                    n: ()=>Ee,
                    pR: ()=>Pe,
                    kU: ()=>Me,
                    Y: ()=>Ae,
                    Ng: ()=>ke,
                    oG: ()=>Te,
                    wG: ()=>Ne,
                    dI: ()=>Le,
                    VC: ()=>Re,
                    FM: ()=>De,
                    uW: ()=>Oe,
                    g$: ()=>Ze,
                    FS: ()=>_e,
                    FD: ()=>xe,
                    aw: ()=>Fe,
                    FV: ()=>Be,
                    Nf: ()=>$e,
                    WS: ()=>Ue,
                    DU: ()=>je,
                    EG: ()=>We,
                    t4: ()=>Ge,
                    sR: ()=>Ve,
                    $O: ()=>He,
                    Bg: ()=>ze,
                    vi: ()=>Qe,
                    Db: ()=>Ke,
                    mU: ()=>Je,
                    p3: ()=>qe,
                    It: ()=>Ye,
                    Vv: ()=>Xe,
                    g: ()=>et,
                    Hc: ()=>tt,
                    EH: ()=>nt,
                    Ro: ()=>rt,
                    aC: ()=>ot,
                    LH: ()=>dt
                });
                const r = "Telegram"
                    , o = " [Inactive]"
                    , d = "Telegram WebZ"
                    , a = "1.30.10"
                    , u = !1
                    , s = !1
                    , i = !1
                    , c = "Shoot!\nSomething went wrong, please see the error details in Dev Tools Console."
                    , l = "user_auth"
                    , f = "GramJs:sessionId"
                    , h = !1
                    , m = "tt-global-state"
                    , p = 30
                    , g = 5e3
                    , y = !1
                    , v = "tt-media"
                    , b = "tt-media-avatars"
                    , w = "tt-media-progressive"
                    , I = "tt-custom-bg"
                    , C = "tt-lang-packs-v7"
                    , S = [1, 5, 10, 50, 100, 500]
                    , E = "undefined" != typeof window && window.innerHeight >= 900
                    , P = 1
                    , M = E ? 60 : 40
                    , A = 2 * M
                    , k = 72
                    , T = E ? 30 : 25
                    , N = 100
                    , L = 42
                    , R = 42
                    , D = 20
                    , O = 30
                    , Z = 200
                    , _ = 500
                    , x = 20
                    , F = !1
                    , B = 1
                    , $ = 1
                    , U = 0
                    , j = 2
                    , W = j
                    , G = 16
                    , V = 17
                    , H = 15
                    , z = 1e4
                    , Q = 3e3
                    , K = "editable-message-text"
                    , J = "editable-message-text-modal"
                    , q = 1440
                    , Y = 1150
                    , X = 1275
                    , ee = 925
                    , te = 600
                    , ne = 950
                    , re = 450
                    , oe = 1e9
                    , de = "0"
                    , ae = 100
                    , ue = 1500
                    , se = 250
                    , ie = 600
                    , ce = 500
                    , le = (Math.round((se + ie) / 2),
                    new Set(["newMessage", "newScheduledMessage", "deleteMessages", "deleteScheduledMessages", "deleteHistory"]),
                    13)
                    , fe = 11
                    , he = 160
                    , me = 120
                    , pe = 64
                    , ge = 48
                    , ye = 32
                    , ve = 64
                    , be = 64
                    , we = 160
                    , Ie = 140
                    , Ce = 80
                    , Se = 100
                    , Ee = "MEMOJI_STICKER"
                    , Pe = "en"
                    , Me = 200
                    , Ae = 450
                    , ke = "video/quicktime"
                    , Te = new Set(["image/png", "image/gif", "image/jpeg"])
                    , Ne = new Set(["video/mp4"])
                    , Le = new Set([...Te, ...Ne])
                    , Re = "The message is not supported on this version of Telegram."
                    , De = "((ftp|https?):\\/\\/)?((www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,63})\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)"
                    , Oe = "(@[\\w\\d_-]+)"
                    , Ze = /^tg:(\/\/)?([?=&\d\w_-]+)?/gm
                    , _e = /^(?:https?:\/\/)?(?:t\.me\/)/gm
                    , xe = new Set(["AU", "BD", "CA", "CO", "EG", "HN", "IE", "IN", "JO", "MX", "MY", "NI", "NZ", "PH", "PK", "SA", "SV", "US"])
                    , Fe = "777000"
                    , Be = "1271266957"
                    , $e = 0
                    , Ue = 1
                    , je = 10
                    , We = 5
                    , Ge = 2147483646
                    , Ve = "en"
                    , He = "android"
                    , ze = ["android", "ios", "tdesktop", "macos"]
                    , Qe = "TelegramTips"
                    , Ke = ["ar", "pt-br", "id", "it", "ko", "ms", "pl", "es", "tr"]
                    , Je = "https://bugs.telegram.org/?tag_ids=41&sort=time"
                    , qe = "#A2AF8E"
                    , Ye = "#0F0F0F"
                    , Xe = "#0a0a0a8c"
                    , et = "rgba(90, 110, 70, 0.6)"
                    , tt = 50
                    , nt = 604680
                    , rt = 100
                    , ot = 100 * rt
                    , dt = !1
            }
            ,
            274: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(7204);
                const d = (e,t,n)=>{
                    const d = (0,
                        o.Z)(t);
                    return (0,
                        r.d4)((()=>e(d || [])), t, n)
                }
            }
            ,
            706: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(4050);
                const o = (e=!1)=>{
                    const [t,n] = (0,
                        r.eJ)(e);
                    return [t, (0,
                        r.I4)((()=>{
                            n(!0)
                        }
                    ), []), (0,
                        r.I4)((()=>{
                            n(!1)
                        }
                    ), [])]
                }
            }
            ,
            5326: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(4050);
                const o = ()=>{
                    const [,e] = (0,
                        r.eJ)(!1);
                    return (0,
                        r.I4)((()=>{
                            e((e=>!e))
                        }
                    ), [])
                }
            }
            ,
            8674: (e,t,n)=>{
                n.d(t, {
                    ZP: ()=>s,
                    zG: ()=>i,
                    YW: ()=>c
                });
                var r = n(4050);
                const o = "tt-event-heavy-animation-start"
                    , d = "tt-event-heavy-animation-end";
                let a, u = !1;
                const s = (e,t,n=!1)=>{
                        (0,
                            r.d4)((()=>{
                                if (!n)
                                    return u && e(),
                                        document.addEventListener(o, e),
                                        document.addEventListener(d, t),
                                        ()=>{
                                            document.removeEventListener(d, t),
                                                document.removeEventListener(o, e)
                                        }
                            }
                        ), [n, t, e])
                    }
                ;
                function i() {
                    return u
                }
                function c(e=1e3) {
                    function t() {
                        a && (clearTimeout(a),
                            a = void 0),
                            u = !1,
                            document.dispatchEvent(new Event(d))
                    }
                    return u || (u = !0,
                        document.dispatchEvent(new Event(o))),
                    a && (clearTimeout(a),
                        a = void 0),
                        a = window.setTimeout(t, e),
                        t
                }
            }
            ,
            6590: (e,t,n)=>{
                n.d(t, {
                    Oy: ()=>s,
                    Wv: ()=>l,
                    ZP: ()=>h
                });
                var r = n(4050)
                    , o = n(7361)
                    , d = n(7204)
                    , a = n(5116)
                    , u = n(782);
                const s = window.location.hash
                    , i = `${window.location.pathname}${window.location.search}`
                    , c = {
                        currentIndex: 0,
                        nextStateIndexToReplace: -1,
                        isHistoryAltered: !1,
                        isDisabled: !1,
                        isEdge: !1,
                        currentIndexes: []
                    }
                    , l = ()=>{
                        c.isDisabled = !0
                    }
                    , f = ()=>{
                        c.isEdge && setTimeout((()=>{
                                c.isEdge = !1
                            }
                        ), 350)
                    }
                ;
                function h(e, t, n, o, s=!1, l) {
                    const f = (0,
                        r.sO)(-1)
                        , h = (0,
                        r.sO)(!1)
                        , m = (0,
                        d.Z)(e)
                        , p = (0,
                        r.sO)(!0)
                        , g = (0,
                        r.sO)([])
                        , y = (0,
                        d.Z)(l)
                        , v = (0,
                        r.sO)(!1)
                        , b = (0,
                        r.I4)(((t=!1)=>{
                            if (l) {
                                const e = y || [];
                                if (e.length < l.length)
                                    setTimeout((()=>{
                                            const e = ++c.currentIndex;
                                            c.currentIndexes.push(e),
                                                window.history.pushState({
                                                    index: e,
                                                    state: o
                                                }, "", `#${l[l.length - 1]}`),
                                                g.current.push({
                                                    index: e,
                                                    hash: l[l.length - 1]
                                                })
                                        }
                                    ), 0);
                                else {
                                    const t = e.length - l.length;
                                    if (v.current)
                                        v.current = !1;
                                    else {
                                        if (l.length !== g.current.length && t > 0) {
                                            const e = g.current[g.current.length - t - 1];
                                            let n = t;
                                            if (e) {
                                                const t = c.currentIndexes.findIndex((t=>t === e.index));
                                                n = c.currentIndexes.length - t - 1
                                            }
                                            c.isHistoryAltered = !0,
                                                window.history.go(-n),
                                                g.current.splice(g.current.length - t - 1, t).forEach((({index: e})=>{
                                                        c.currentIndexes.splice(c.currentIndexes.indexOf(e), 1)
                                                    }
                                                ))
                                        }
                                        l.length > 0 && setTimeout((()=>{
                                                const e = ++c.currentIndex;
                                                c.currentIndexes[c.currentIndexes.length - 1] = e,
                                                    window.history.replaceState({
                                                        index: e,
                                                        state: o
                                                    }, "", `${i}#${l[l.length - 1]}`),
                                                    g.current[g.current.length - 1] = {
                                                        index: e,
                                                        hash: l[l.length - 1]
                                                    }
                                            }
                                        ), 0)
                                    }
                                }
                            } else
                                e && !t && (p.current = !1,
                                    h.current ? (h.current = !1,
                                        c.currentIndexes.push(f.current)) : setTimeout((()=>{
                                            const e = ++c.currentIndex;
                                            c.currentIndexes.push(e),
                                                window.history[c.currentIndexes.includes(c.nextStateIndexToReplace - 1) && 0 !== window.history.state.index && c.nextStateIndexToReplace === e && !s ? "replaceState" : "pushState"]({
                                                    index: e,
                                                    state: o
                                                }, ""),
                                                f.current = e,
                                            s && (c.nextStateIndexToReplace = c.currentIndex + 1)
                                        }
                                    ), 0)),
                                !t && e || p.current || (f.current !== c.currentIndex && s || (c.isHistoryAltered = !0,
                                    window.history.back(),
                                    setTimeout((()=>{
                                            c.nextStateIndexToReplace = -1
                                        }
                                    ), 400)),
                                    c.currentIndexes.splice(c.currentIndexes.indexOf(f.current), 1),
                                    p.current = !0)
                        }
                    ), [o, l, e, y, s]);
                    return (0,
                        r.d4)((()=>{
                            const r = e=>{
                                if (c.isHistoryAltered)
                                    return void setTimeout((()=>{
                                            c.isHistoryAltered = !1
                                        }
                                    ), 0);
                                const {index: r} = e.state
                                    , o = r || 0;
                                try {
                                    const r = l ? g.current[g.current.length - 1].index : f.current
                                        , d = c.currentIndexes[c.currentIndexes.indexOf(r) - 1];
                                    if (c.isDisabled)
                                        return;
                                    !p.current && (0 === o || o === d) || l && (0 === o || o === d) ? (l && (v.current = !0,
                                        g.current.pop()),
                                        c.currentIndexes.splice(c.currentIndexes.indexOf(r), 1),
                                    t && (c.isEdge && (0,
                                        a.uC)().disableHistoryAnimations(),
                                        t(!c.isEdge),
                                        p.current = !0)) : o === r && p.current && n && !l && (h.current = !0,
                                    c.isEdge && (0,
                                        a.uC)().disableHistoryAnimations(),
                                        n(e.state.state))
                                } catch (e) {}
                            }
                                , o = l ? !y || !(0,
                                u.et)(y, l) : m !== e;
                            return !c.isDisabled && o && b(),
                                window.addEventListener("popstate", r),
                                ()=>window.removeEventListener("popstate", r)
                        }
                    ), [o, b, l, e, t, n, y, m, s]),
                        {
                            forceClose: ()=>b(!0)
                        }
                }
                o.cj && (window.addEventListener("touchstart", (e=>{
                        const t = e.touches[0].pageX;
                        (t <= 300 || t >= window.innerWidth - 300) && (c.isEdge = !0)
                    }
                )),
                    window.addEventListener("touchend", f),
                    window.addEventListener("popstate", f)),
                    window.history.replaceState({
                        index: c.currentIndex
                    }, "", i)
            }
            ,
            2313: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(4050);
                const o = (e,t,n,o,d)=>{
                    const [a,u] = (0,
                        r.eJ)(-1);
                    return (0,
                        r.d4)((()=>{
                            u(-1);
                            const n = e.current;
                            t && n && !d && (n.tabIndex = -1,
                                n.focus())
                        }
                    ), [e, t, d]),
                        (0,
                            r.I4)((t=>{
                                const r = e.current;
                                if (!r)
                                    return;
                                if (13 === t.keyCode && n)
                                    return void n(a);
                                if (38 !== t.keyCode && 40 !== t.keyCode)
                                    return;
                                const d = document.activeElement
                                    , s = Array.from(o ? r.querySelectorAll(o) : r.children);
                                let i = d && s.indexOf(d) || a;
                                if (38 === t.keyCode && i > 0)
                                    i--;
                                else if (40 === t.keyCode && i < s.length - 1)
                                    i++;
                                else {
                                    if (1 !== s.length)
                                        return;
                                    i = 0
                                }
                                const c = s[i];
                                c && (u(i),
                                    c.focus())
                            }
                        ), [e, n, o, a])
                }
            }
            ,
            9107: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(711)
                    , o = n(5326)
                    , d = n(9290);
                const a = ()=>{
                    const e = (0,
                        o.Z)();
                    return (0,
                        d.Z)((()=>r.ll(e)), [e]),
                        r.i0
                }
            }
            ,
            8778: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>a
                });
                var r = n(4050)
                    , o = n(9203)
                    , d = n(5326);
                const a = (e,t,n=!1,a=!1)=>{
                    const u = (0,
                        o.o5)(e, t)
                        , s = (0,
                        d.Z)();
                    return (0,
                        r.d4)((()=>{
                            if (a)
                                return (0,
                                    o.Qt)(s)
                        }
                    ), [a, s]),
                        (0,
                            r.d4)((()=>{
                                n || u || (0,
                                    o.$y)(e, t).then(s)
                            }
                        ), [e, s, u, t, n]),
                        u
                }
            }
            ,
            9290: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(7204);
                const o = (e,t)=>{
                    const n = (0,
                        r.Z)(t);
                    n && !t.some(((e,t)=>e !== n[t])) || e(n || [])
                }
            }
            ,
            7204: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(4050);
                const o = function(e, t) {
                    const n = (0,
                        r.sO)()
                        , {current: o} = n;
                    return t && void 0 === e || (n.current = e),
                        o
                }
            }
            ,
            1212: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                var r = n(4050)
                    , o = n(6752);
                const d = (e=!1,t,n=!1,d="fast",a=!1)=>{
                    const [u,s] = (0,
                        r.eJ)(!e)
                        , i = (0,
                        r.sO)()
                        , [c,l] = (0,
                        r.eJ)(e && n);
                    if (e)
                        s(!1),
                            l(!0),
                        i.current && (window.clearTimeout(i.current),
                            i.current = void 0);
                    else if (l(!1),
                    !u && !i.current) {
                        const e = ()=>{
                                s(!0),
                                t && t(),
                                    i.current = void 0
                            }
                        ;
                        a ? e() : i.current = window.setTimeout(e, 350)
                    }
                    const f = c && !(a && !e)
                        , h = Boolean(i.current)
                        , m = e || h;
                    return {
                        shouldRender: m,
                        transitionClassNames: (0,
                            o.Z)(d && "opacity-transition", d, f && "open", m && "shown", h && "closing")
                    }
                }
            }
            ,
            8758: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(4050);
                function o(e, t, n) {
                    (0,
                        r.d4)((()=>{
                            const r = e=>{
                                    const r = t.current
                                        , o = e.target;
                                    r && o && (r.contains(e.target) && !o.classList.contains("backdrop") || (e.preventDefault(),
                                        e.stopPropagation(),
                                    n && n()))
                                }
                            ;
                            return e && n && document.addEventListener("mousedown", r),
                                ()=>{
                                    document.removeEventListener("mousedown", r)
                                }
                        }
                    ), [e, t, n])
                }
            }
            ,
            5247: (e,t,n)=>{
                n.d(t, {
                    Oo: ()=>s,
                    xg: ()=>i,
                    lQ: ()=>h
                });
                var r = n(3716);
                const o = new Set(["scroll", "mouseenter", "mouseleave"])
                    , d = {}
                    , a = {}
                    , u = new Map;
                function s(e, t, n, r=!1) {
                    const o = c(t, e);
                    l(o, e, r) ? function(e, t, n) {
                        d[e] || (d[e] = 0,
                            document.addEventListener(e, m)),
                            function(e) {
                                return a[e] || (a[e] = new Map),
                                    a[e]
                            }(e).set(t, n),
                            function(e) {
                                const t = u.get(e);
                                if (t)
                                    return t;
                                const n = new Set;
                                return u.set(e, n),
                                    n
                            }(t).add(e),
                            d[e]++
                    }(o, e, n) : e.addEventListener(o, n, r)
                }
                function i(e, t, n, r=!1) {
                    const o = c(t, e);
                    l(o, e, r) ? f(o, e) : e.removeEventListener(o, n, r)
                }
                function c(e, t) {
                    const n = e.replace(/^on/, "").replace(/Capture$/, "").toLowerCase();
                    return "change" === n && "SELECT" !== t.tagName ? "input" : "doubleclick" === n ? "dblclick" : "focus" === n ? "focusin" : "blur" === n ? "focusout" : n
                }
                function l(e, t, n) {
                    return !n && !o.has(e) && "VIDEO" !== t.tagName && "IFRAME" !== t.tagName
                }
                function f(e, t) {
                    d[e]--,
                    d[e] || document.removeEventListener(e, m),
                        a[e].delete(t),
                        u.get(t).delete(e)
                }
                function h(e) {
                    const t = u.get(e);
                    t && (t.forEach((t=>f(t, e))),
                        u.delete(e))
                }
                function m(e) {
                    const t = a[e.type];
                    if (t) {
                        let n = !1
                            , r = e.target;
                        const o = ()=>{
                            n = !0
                        }
                            , d = ()=>{
                            e.preventDefault()
                        }
                            , a = new Proxy(e,{
                            get: (e,t)=>"currentTarget" === t ? r : "stopPropagation" === t || "stopImmediatePropagation" === t ? o : "preventDefault" === t ? d : Reflect.get(e, t)
                        });
                        for (; r && r !== document.body; ) {
                            const e = t.get(r);
                            if (e && (e(a),
                                n))
                                return;
                            r = r.parentNode
                        }
                    }
                }
                r.eM && document.addEventListener("dblclick", (()=>{
                        const e = Object.keys(d).length
                            , t = Object.values(d).reduce(((e,t)=>e + t), 0)
                            , n = Object.keys(a).length
                            , r = Object.values(a).reduce(((e,t)=>e + t.size), 0)
                            , o = u.size
                            , s = Array.from(u.values()).reduce(((e,t)=>e + t.size), 0);
                        console.warn("DELEGATED EVENTS STATS", {
                            delegatedHandlersCount1: t,
                            delegatedHandlersCount2: r,
                            delegatedEventTypesCount: s,
                            delegationRegistriesCount: n,
                            delegationElementsCount: o,
                            documentListenersCount: e
                        })
                    }
                ))
            }
            ,
            2916: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>y
                });
                var r = n(4050)
                    , o = n(6926)
                    , d = n(3716)
                    , a = n(5247);
                const u = new Set(["key", "ref", "teactFastList", "teactOrderKey"])
                    , s = new Set(["dir", "role"])
                    , i = {
                    autoPlay: "autoplay",
                    autoComplete: "autocomplete"
                }
                    , c = {};
                function l(e, t, n, o, c, {skipComponentUpdate: y=!1, forceIndex: v=!1, fragment: b, moveDirection: w}={}) {
                    if (!y && t && n && (0,
                        r.op)(t) && (0,
                        r.op)(n) && !(0,
                        r.k)(t, n) && (n = function(e, t) {
                        return e.componentInstance.props = t.componentInstance.props,
                            (0,
                                r.SO)(e.componentInstance)
                    }(t, n)),
                    !y && n && (0,
                        r.op)(n) && n.componentInstance.isMounted && h(n, o, c, e),
                    t === n)
                        return n;
                    if (!t && n) {
                        (0,
                            r.op)(n) && (n = f(n, o, c, e));
                        const t = m(n);
                        (0,
                            r.CD)(n, t),
                            v && e.childNodes[c] ? e.insertBefore(t, e.childNodes[c]) : (b || e).appendChild(t)
                    } else if (t && !n)
                        e.removeChild((0,
                            r.U9)(t)),
                            (0,
                                r.Zb)(t);
                    else if (t && n)
                        if ((0,
                            r.k)(t, n)) {
                            (0,
                                r.op)(n) && (n = f(n, o, c, e));
                            const d = m(n);
                            (0,
                                r.CD)(n, d),
                                e.replaceChild(d, (0,
                                    r.U9)(t)),
                                (0,
                                    r.Zb)(t)
                        } else {
                            const o = (0,
                                r.op)(t) && (0,
                                r.op)(n)
                                , f = (0,
                                r.U9)(t);
                            if (o || ((0,
                                r.CD)(n, f),
                                (0,
                                    r.CD)(t, void 0),
                            "props"in t && "props"in n && (n.props.ref = t.props.ref)),
                            (0,
                                r.O_)(t) && (0,
                                r.O_)(n)) {
                                if (w) {
                                    const t = f
                                        , n = e.childNodes["up" === w ? c : c + 1];
                                    n ? e.insertBefore(t, n) : (b || e).appendChild(t)
                                }
                                o || function(e, t, n) {
                                    const r = Object.keys(e.props)
                                        , o = Object.keys(t.props);
                                    r.forEach((r=>{
                                            const o = e.props[r]
                                                , d = t.props[r];
                                            void 0 !== o && (void 0 === d || o !== d && r.startsWith("on")) && function(e, t, n) {
                                                "className" === t ? e.className = "" : "value" === t ? e.value = "" : "style" === t ? e.style.cssText = "" : "dangerouslySetInnerHTML" === t ? e.innerHTML = "" : t.startsWith("on") ? (0,
                                                    a.xg)(e, t, n, t.endsWith("Capture")) : t.startsWith("data-") || t.startsWith("aria-") || s.has(t) ? e.removeAttribute(t) : u.has(t) || delete e[i[t] || t]
                                            }(n, r, o)
                                        }
                                    )),
                                        o.forEach((r=>{
                                                const o = e.props[r]
                                                    , d = t.props[r];
                                                void 0 !== d && d !== o && g(n, r, d)
                                            }
                                        ))
                                }(t, n, f),
                                    n.children = function(e, t, n) {
                                        if (t.props.teactFastList)
                                            return function(e, t, n) {
                                                const o = new Set(t.children.map((e=>{
                                                        const t = "props"in e && e.props.key;
                                                        return d.eM && (0,
                                                            r.O_)(e) && null == t && console.warn("Missing `key` in `teactFastList`"),
                                                            t
                                                    }
                                                )));
                                                let a = 0;
                                                const u = e.children.reduce(((e,r,d)=>{
                                                        let u = "props"in r ? r.props.key : void 0;
                                                        const s = null != u;
                                                        if (s && !o.has(u))
                                                            return l(n, r, void 0, t, -1),
                                                                e;
                                                        if (!s) {
                                                            const o = t.children[d]
                                                                , a = o && "props"in o ? o.props.key : void 0;
                                                            if (!o || a)
                                                                return l(n, r, void 0, t, -1),
                                                                    e;
                                                            u = `__indexKey#${d}`
                                                        }
                                                        return e[u] = {
                                                            $element: r,
                                                            index: a++,
                                                            order: "props"in r ? r.props.teactOrderKey : void 0
                                                        },
                                                            e
                                                    }
                                                ), {});
                                                let s, i, c = [], f = 0;
                                                return t.children.forEach(((e,r)=>{
                                                        const o = "props"in e ? e.props.key : `__indexKey#${r}`
                                                            , d = u[o];
                                                        if (!d)
                                                            return s || (s = [],
                                                                i = r),
                                                                void s.push(e);
                                                        s && (c = c.concat(p(s, i, n, t)),
                                                            i = void 0,
                                                            s = void 0);
                                                        const a = "props"in e ? e.props.teactOrderKey : void 0
                                                            , h = d.index !== f && d.order !== a
                                                            , m = h && f > d.index;
                                                        h && !m || f++,
                                                            c.push(l(n, d.$element, e, t, r, {
                                                                forceIndex: !0,
                                                                ...h && {
                                                                    moveDirection: m ? "down" : "up"
                                                                }
                                                            }))
                                                    }
                                                )),
                                                s && (c = c.concat(p(s, i, n, t))),
                                                    c
                                            }(e, t, n);
                                        const o = Math.max(e.children.length, t.children.length)
                                            , a = []
                                            , u = t.children.length > e.children.length + 1 ? document.createDocumentFragment() : void 0;
                                        for (let r = 0; r < o; r++) {
                                            const o = l(n, e.children[r], t.children[r], t, r, r >= e.children.length ? {
                                                fragment: u
                                            } : void 0);
                                            o && a.push(o)
                                        }
                                        return u && n.appendChild(u),
                                            a
                                    }(t, n, o ? e : f)
                            }
                        }
                    return n
                }
                function f(e, t, n, o) {
                    if (!(0,
                        r.op)(e))
                        return e;
                    const {componentInstance: d} = e;
                    if (!d.isMounted) {
                        h(e = (0,
                            r.Hb)(d), t, n, o);
                        const a = e.children[0];
                        (0,
                            r.op)(a) && (e.children = [f(a, e, 0, o)]),
                            d.isMounted = !0
                    }
                    return e
                }
                function h(e, t, n, r) {
                    const {componentInstance: o} = e;
                    o.onUpdate = ()=>{
                        t.children[n] = l(r, t.children[n], o.$element, t, n, {
                            skipComponentUpdate: !0
                        })
                    }
                }
                function m(e) {
                    if ((0,
                        r.V2)(e))
                        return document.createTextNode("");
                    if ((0,
                        r.iB)(e))
                        return document.createTextNode(e.value);
                    if ((0,
                        r.op)(e))
                        return m(e.children[0]);
                    const {tag: t, props: n, children: o=[]} = e
                        , d = document.createElement(t);
                    return "object" == typeof n.ref && (n.ref.current = d),
                        Object.keys(n).forEach((e=>{
                                void 0 !== n[e] && g(d, e, n[e])
                            }
                        )),
                        e.children = o.map(((t,n)=>l(d, void 0, t, e, n))),
                        d
                }
                function p(e, t, n, r) {
                    if (1 === e.length)
                        return [l(n, void 0, e[0], r, t, {
                            forceIndex: !0
                        })];
                    if (e.length > 1) {
                        const o = document.createDocumentFragment()
                            , d = e.map((e=>l(n, void 0, e, r, t, {
                            fragment: o
                        })));
                        return n.childNodes[t] ? n.insertBefore(o, n.childNodes[t]) : n.appendChild(o),
                            d
                    }
                    throw new Error("Unexpected input")
                }
                function g(e, t, n) {
                    "className" === t ? e.className = n : "value" === t ? e.value = n : "style" === t ? e.style.cssText = n : "dangerouslySetInnerHTML" === t ? e.innerHTML = n.__html : t.startsWith("on") ? (0,
                        a.Oo)(e, t, n, t.endsWith("Capture")) : t.startsWith("data-") || t.startsWith("aria-") || s.has(t) ? e.setAttribute(t, n) : u.has(t) || (e[i[t] || t] = n)
                }
                const y = {
                    render: function(e, t) {
                        if (!t)
                            return;
                        let n = t.getAttribute("data-teact-head-id");
                        n || (n = (0,
                            o.Z)(c),
                            c[n] = {
                                children: []
                            },
                            t.setAttribute("data-teact-head-id", n));
                        const r = c[n];
                        r.children = [l(t, r.children[0], e, r, 0)]
                    }
                }
            }
            ,
            4050: (e,t,n)=>{
                n.d(t, {
                    V2: ()=>h,
                    iB: ()=>m,
                    op: ()=>g,
                    O_: ()=>y,
                    SO: ()=>E,
                    k: ()=>P,
                    Zb: ()=>M,
                    Hb: ()=>A,
                    U9: ()=>N,
                    CD: ()=>L,
                    eJ: ()=>R,
                    d4: ()=>O,
                    bt: ()=>Z,
                    Ye: ()=>_,
                    I4: ()=>x,
                    sO: ()=>F,
                    X$: ()=>B,
                    ZP: ()=>$
                });
                var r = n(3716)
                    , o = n(9118)
                    , d = n(782)
                    , a = n(275)
                    , u = n(3592)
                    , s = n(5247);
                let i;
                !function(e) {
                    e[e.Empty = 0] = "Empty",
                        e[e.Text = 1] = "Text",
                        e[e.Tag = 2] = "Tag",
                        e[e.Component = 3] = "Component"
                }(i || (i = {}));
                const c = Symbol("Fragment")
                    , l = new Set(["TeactMemoWrapper", "TeactNContainer", "Button", "ListItem", "MenuItem"]);
                let f;
                function h(e) {
                    return e.type === i.Empty
                }
                function m(e) {
                    return e.type === i.Text
                }
                function p(e) {
                    return e.type === i.Tag
                }
                function g(e) {
                    return e.type === i.Component
                }
                function y(e) {
                    return p(e) || g(e)
                }
                function v(e, t, ...n) {
                    return t || (t = {}),
                        n = (0,
                            d.xH)(n),
                        e === c ? n : "function" == typeof e ? function(e, t, n) {
                            let r;
                            0 === n.length ? r = void 0 : 1 === n.length ? [r] = n : r = n;
                            const o = {
                                $element: {},
                                Component: e,
                                name: e.name,
                                props: {
                                    ...t,
                                    ...r && {
                                        children: r
                                    }
                                },
                                isMounted: !1,
                                hooks: {
                                    state: {
                                        cursor: 0,
                                        byCursor: []
                                    },
                                    effects: {
                                        cursor: 0,
                                        byCursor: []
                                    },
                                    memos: {
                                        cursor: 0,
                                        byCursor: []
                                    }
                                }
                            };
                            return o.$element = b(o),
                                o.$element
                        }(e, t, n) : function(e, t, n) {
                            return {
                                type: i.Tag,
                                tag: e,
                                props: t,
                                children: w(n).map(C)
                            }
                        }(e, t, n)
                }
                function b(e, t=[]) {
                    const {props: n} = e;
                    return {
                        componentInstance: e,
                        type: i.Component,
                        props: n,
                        children: t
                    }
                }
                function w(e) {
                    let t = e.length - 1;
                    for (; t >= 0 && I(e[t]); t--)
                        ;
                    return t + 1 < e.length ? e.slice(0, t + 1) : e
                }
                function I(e) {
                    return !1 === e || null == e
                }
                function C(e) {
                    return I(e) ? {
                        type: i.Empty
                    } : y(e) ? e : (t = e,
                        {
                            type: i.Text,
                            value: String(t)
                        });
                    var t
                }
                const S = {};
                function E(e) {
                    f = e,
                        e.hooks.state.cursor = 0,
                        e.hooks.effects.cursor = 0,
                        e.hooks.memos.cursor = 0;
                    const {Component: t, props: n} = e;
                    let o;
                    try {
                        let d;
                        if (r.eM) {
                            const t = e.name;
                            S[t] || (S[t] = {
                                componentName: t,
                                renderCount: 0,
                                renderTimes: []
                            }),
                            r.ZT && (l.has(t) || console.log(`[Teact] Render ${t}`)),
                                d = performance.now()
                        }
                        if (o = t(n),
                            r.eM) {
                            const t = performance.now() - d
                                , n = e.name;
                            t > 7 && console.warn(`[Teact] Slow component render: ${n}, ${Math.round(t)} ms`),
                                S[n].renderTimes.push(t),
                                S[n].renderCount++
                        }
                    } catch (t) {
                        (0,
                            u.S)(t),
                            o = e.renderedValue
                    }
                    if (e.isMounted && o === e.renderedValue)
                        return e.$element;
                    e.renderedValue = o;
                    const d = C(o);
                    return e.$element = b(e, [d]),
                        e.$element
                }
                function P(e, t) {
                    return typeof e != typeof t || e.type !== t.type || (m(e) && m(t) ? e.value !== t.value : p(e) && p(t) ? e.tag !== t.tag || e.props.key !== t.props.key : !(!g(e) || !g(t) || e.componentInstance.Component === t.componentInstance.Component && e.props.key === t.props.key))
                }
                function M(e) {
                    if (g(e))
                        (t = e.componentInstance).isMounted && (t.hooks.memos.byCursor.forEach((e=>{
                                e.current = void 0
                            }
                        )),
                            t.hooks.effects.byCursor.forEach((({cleanup: e})=>{
                                    if ("function" == typeof e)
                                        try {
                                            e()
                                        } catch (e) {
                                            (0,
                                                u.S)(e)
                                        }
                                }
                            )),
                            t.isMounted = !1,
                            function(e) {
                                e.hooks.effects.byCursor.forEach((e=>{
                                        e.cleanup = void 0,
                                            e.effect = void 0,
                                            e.dependencies = void 0
                                    }
                                )),
                                    e.hooks.state.byCursor.forEach((e=>{
                                            e.value = void 0,
                                                e.nextValue = void 0,
                                                e.setter = void 0
                                        }
                                    )),
                                    e.hooks.memos.byCursor.forEach((e=>{
                                            e.dependencies = void 0
                                        }
                                    )),
                                    e.hooks = void 0,
                                    e.$element = void 0,
                                    e.renderedValue = void 0,
                                    e.Component = void 0,
                                    e.props = void 0,
                                    e.forceUpdate = void 0,
                                    e.onUpdate = void 0
                            }(t));
                    else if (p(e) && (e.target && (0,
                        s.lQ)(e.target),
                    e.props.ref && (e.props.ref.current = void 0)),
                    e.target && (e.target = void 0),
                        !y(e))
                        return;
                    var t;
                    e.children.forEach(M)
                }
                function A(e) {
                    return E(e),
                        e.isMounted = !0,
                        e.$element
                }
                function k(e) {
                    e.isMounted && (e.hooks.state.byCursor.forEach((e=>{
                            e.value = e.nextValue
                        }
                    )),
                        e.prepareForFrame = (0,
                            o.wT)((()=>k(e))),
                        e.forceUpdate = (0,
                            o.mS)((()=>T(e))))
                }
                function T(e) {
                    if (!e.isMounted || !e.onUpdate)
                        return;
                    const t = e.$element;
                    E(e),
                    e.$element !== t && e.onUpdate()
                }
                function N(e) {
                    return g(e) ? N(e.children[0]) : e.target
                }
                function L(e, t) {
                    g(e) ? L(e.children[0], t) : e.target = t
                }
                function R(e) {
                    const {cursor: t, byCursor: n} = f.hooks.state;
                    var d;
                    return void 0 === n[t] && (n[t] = {
                        value: e,
                        nextValue: e,
                        setter: (d = f,
                                e=>{
                                    n[t].nextValue !== e && (n[t].nextValue = "function" == typeof e ? e(n[t].value) : e,
                                    d.prepareForFrame && d.forceUpdate || (d.prepareForFrame = (0,
                                        o.wT)((()=>k(d))),
                                        d.forceUpdate = (0,
                                            o.mS)((()=>T(d)))),
                                        d.prepareForFrame(),
                                        d.forceUpdate(),
                                    r.ZT && "TeactNContainer" !== d.name && console.log("[Teact.useState]", d.name, d.Component && d.Component.DEBUG_contentComponentName ? `> ${d.Component.DEBUG_contentComponentName}` : "", `Forced update at cursor #${t}, next value: `, n[t].nextValue))
                                }
                        )
                    }),
                        f.hooks.state.cursor++,
                        [n[t].value, n[t].setter]
                }
                function D(e, t, n, o, d) {
                    const {cursor: a, byCursor: s} = f.hooks.effects
                        , i = f;
                    function c() {
                        if (!i.isMounted)
                            return;
                        const {cleanup: e} = s[a];
                        if ("function" == typeof e)
                            try {
                                let t;
                                if (r.eM && (t = performance.now()),
                                    e(),
                                    r.eM) {
                                    const e = performance.now() - t
                                        , n = i.name;
                                    e > 7 && console.warn(`[Teact] Slow cleanup at effect cursor #${a}: ${n}, ${Math.round(e)} ms`)
                                }
                            } catch (e) {
                                (0,
                                    u.S)(e)
                            }
                    }
                    function l() {
                        if (!i.isMounted)
                            return;
                        let e;
                        if (r.eM && (e = performance.now()),
                            s[a].cleanup = n(),
                            r.eM) {
                            const t = performance.now() - e
                                , n = i.name;
                            t > 7 && console.warn(`[Teact] Slow effect at cursor #${a}: ${n}, ${Math.round(t)} ms`)
                        }
                    }
                    if (void 0 !== s[a] && o && s[a].dependencies) {
                        if (o.some(((e,t)=>e !== s[a].dependencies[t]))) {
                            if (d) {
                                const e = o.reduce(((e,t,n)=>{
                                        const r = s[a].dependencies[n];
                                        return t !== r && e.push(`${n}: ${r} => ${t}`),
                                            e
                                    }
                                ), []);
                                console.log(`[Teact] Effect "${d}" caused by dependencies.`, e.join(", "))
                            }
                            t(c),
                                e(l)
                        }
                    } else
                        d && console.log(`[Teact] Effect "${d}" caused by missing dependencies.`),
                            t(c),
                            e(l);
                    s[a] = {
                        effect: n,
                        dependencies: o,
                        cleanup: s[a] ? s[a].cleanup : void 0
                    },
                        f.hooks.effects.cursor++
                }
                function O(e, t, n) {
                    return D(o.T2, o.D0, e, t, n)
                }
                function Z(e, t, n) {
                    return D(o.R3, o.zD, e, t, n)
                }
                function _(e, t, n) {
                    const {cursor: o, byCursor: d} = f.hooks.memos;
                    let {current: u} = d[o] || {};
                    return (void 0 === d[o] || t.some(((e,t)=>e !== d[o].dependencies[t]))) && (r.eM && n && console.log(`[Teact.useMemo] ${f.name} (${n}): Update is caused by:`, d[o] ? (0,
                        a.c)(t, d[o].dependencies).join(", ") : "[first render]"),
                        u = e()),
                        d[o] = {
                            current: u,
                            dependencies: t
                        },
                        f.hooks.memos.cursor++,
                        u
                }
                function x(e, t, n) {
                    return _((()=>e), t, n)
                }
                function F(e) {
                    return _((()=>({
                        current: e
                    })), [])
                }
                function B(e, t=a.Z, n) {
                    return function(o) {
                        const d = F(o)
                            , u = F();
                        return (!u.current || d.current && !t(d.current, o)) && (r.eM && n && console.log(`[Teact.memo] ${e.name} (${n}): Update is caused by:`, (0,
                            a.c)(d.current, o).join(", ")),
                            d.current = o,
                            u.current = v(e, o)),
                            u.current
                    }
                }
                document.addEventListener("dblclick", (()=>{
                        console.warn("COMPONENTS", (0,
                            d.Xo)(Object.values(S), "renderCount", "desc"))
                    }
                ));
                const $ = {
                    createElement: v,
                    Fragment: c
                }
            }
            ,
            5116: (e,t,n)=>{
                n.d(t, {
                    ZP: ()=>h,
                    R3: ()=>I,
                    Rd: ()=>C,
                    uC: ()=>S,
                    Q6: ()=>E,
                    ll: ()=>P,
                    Iq: ()=>M,
                    c$: ()=>A
                });
                var r = n(4050)
                    , o = n(3716)
                    , d = n(5326)
                    , a = n(6926)
                    , u = n(9118)
                    , s = n(275)
                    , i = n(782)
                    , c = n(3592)
                    , l = n(8674);
                function f() {
                    return (f = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    ).apply(this, arguments)
                }
                const h = r.ZP;
                let m = {};
                const p = {}
                    , g = [function() {
                    let e;
                    o.eM && (e = performance.now());
                    for (const e of v.values()) {
                        const {mapStateToProps: t, ownProps: n, mappedProps: r, forceUpdate: d} = e;
                        let a;
                        try {
                            a = t(m, n)
                        } catch (e) {
                            return void (0,
                                c.S)(e)
                        }
                        o.eM && Object.values(a).some(Number.isNaN) && console.warn(`[TeactN] Some of \`${e.DEBUG_componentName}\` mappers contain NaN values. This may cause redundant updates because of incorrect equality check.`),
                        Object.keys(a).length && !(0,
                            s.Z)(r, a) && (o.ZT && console.log("[TeactN] Will update", e.DEBUG_componentName, "caused by", (0,
                            s.c)(r, a).join(", ")),
                            e.mappedProps = a,
                            e.areMappedPropsChanged = !0,
                            e.DEBUG_updates++,
                            d())
                    }
                    if (o.eM) {
                        const t = performance.now() - e;
                        t > 7 && console.warn(`[TeactN] Slow containers update: ${Math.round(t)} ms`)
                    }
                }
                ]
                    , y = {}
                    , v = new Map
                    , b = (0,
                    u.$6)(w);
                function w(e=!1) {
                    e || !(0,
                        l.zG)() ? g.forEach((e=>e(m))) : (0,
                        u.T2)(b)
                }
                function I(e, t) {
                    "object" == typeof e && e !== m && (m = e,
                        null != t && t.forceSyncOnIOs ? w(!0) : b(null == t ? void 0 : t.forceOnHeavyAnimation))
                }
                function C() {
                    return m
                }
                function S() {
                    return y
                }
                function E(e, t) {
                    p[e] || (p[e] = [],
                            y[e] = (t,n)=>{
                                !function(e, t, n) {
                                    p[e] && p[e].forEach((e=>{
                                            const r = e(m, y, t);
                                            r && I(r, n)
                                        }
                                    ))
                                }(e, t, n)
                            }
                    ),
                        p[e].push(t)
                }
                function P(e) {
                    g.push(e)
                }
                function M(e) {
                    const t = g.indexOf(e);
                    -1 !== t && g.splice(t, 1)
                }
                function A(e=(()=>({}))) {
                    return t=>function n(o) {
                        n.DEBUG_contentComponentName = t.name;
                        const [u] = (0,
                            r.eJ)((0,
                            a.Z)(v))
                            , i = (0,
                            d.Z)();
                        (0,
                            r.d4)((()=>()=>{
                                v.delete(u)
                            }
                        ), [u]);
                        let l = v.get(u);
                        if (l || (l = {
                            mapStateToProps: e,
                            ownProps: o,
                            areMappedPropsChanged: !1,
                            forceUpdate: i,
                            DEBUG_updates: 0,
                            DEBUG_componentName: t.name
                        },
                            v.set(u, l)),
                        l.areMappedPropsChanged && (l.areMappedPropsChanged = !1),
                        !l.mappedProps || !(0,
                            s.Z)(l.ownProps, o)) {
                            l.ownProps = o;
                            try {
                                l.mappedProps = e(m, o)
                            } catch (e) {
                                (0,
                                    c.S)(e)
                            }
                        }
                        return r.ZP.createElement(t, f({}, l.mappedProps, o))
                    }
                }
                o.eM && (window.getGlobal = C,
                    document.addEventListener("dblclick", (()=>{
                            console.warn("GLOBAL CONTAINERS", (0,
                                i.Xo)(Array.from(v.values()).map((({DEBUG_componentName: e, DEBUG_updates: t})=>({
                                DEBUG_componentName: e,
                                DEBUG_updates: t
                            }))), "DEBUG_updates", "desc"))
                        }
                    )))
            }
            ,
            3681: (e,t,n)=>{
                n.d(t, {
                    l: ()=>d,
                    Z: ()=>a
                });
                const r = /\uFE0F/g
                    , o = String.fromCharCode(8205);
                function d(e) {
                    return e.indexOf(o) < 0 ? e.replace(r, "") : e
                }
                const a = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
            }
            ,
            1363: (e,t,n)=>{
                var r = n(5116)
                    , o = n(1226)
                    , d = n(3716)
                    , a = n(7361)
                    , u = n(8406)
                    , s = n(9524)
                    , i = n(7358)
                    , c = n(4688)
                    , l = n(1622);
                (0,
                    r.Q6)("initApi", ((e,t)=>{
                        (async()=>{
                                d.Cg || (await (0,
                                    c.Qw)(),
                                    (0,
                                        c.f3)()),
                                    (0,
                                        o.g8)(t.apiUpdate, {
                                        userAgent: navigator.userAgent,
                                        platform: a.Lt,
                                        sessionData: (0,
                                            c.K8)(),
                                        isTest: window.location.search.includes("test"),
                                        isMovSupported: a.pA
                                    })
                            }
                        )()
                    }
                )),
                    (0,
                        r.Q6)("setAuthPhoneNumber", ((e,t,n)=>{
                            const {phoneNumber: r} = n;
                            return (0,
                                o.t9)("provideAuthPhoneNumber", r.replace(/[^\d]/g, "")),
                                {
                                    ...e,
                                    authIsLoading: !0,
                                    authError: void 0
                                }
                        }
                    )),
                    (0,
                        r.Q6)("setAuthCode", ((e,t,n)=>{
                            const {code: r} = n;
                            return (0,
                                o.t9)("provideAuthCode", r),
                                {
                                    ...e,
                                    authIsLoading: !0,
                                    authError: void 0
                                }
                        }
                    )),
                    (0,
                        r.Q6)("setAuthPassword", ((e,t,n)=>{
                            const {password: r} = n;
                            return (0,
                                o.t9)("provideAuthPassword", r),
                                {
                                    ...e,
                                    authIsLoading: !0,
                                    authError: void 0
                                }
                        }
                    )),
                    (0,
                        r.Q6)("uploadProfilePhoto", ((e,t,n)=>{
                            const {file: r} = n;
                            (0,
                                o.t9)("uploadProfilePhoto", r)
                        }
                    )),
                    (0,
                        r.Q6)("signUp", ((e,t,n)=>{
                            const {firstName: r, lastName: d} = n;
                            return (0,
                                o.t9)("provideAuthRegistration", {
                                firstName: r,
                                lastName: d
                            }),
                                {
                                    ...e,
                                    authIsLoading: !0,
                                    authError: void 0
                                }
                        }
                    )),
                    (0,
                        r.Q6)("returnToAuthPhoneNumber", (e=>((0,
                        o.t9)("restartAuth"),
                        {
                            ...e,
                            authError: void 0
                        }))),
                    (0,
                        r.Q6)("goToAuthQrCode", (e=>((0,
                        o.t9)("restartAuthWithQr"),
                        {
                            ...e,
                            authIsLoadingQrCode: !0,
                            authError: void 0
                        }))),
                    (0,
                        r.Q6)("saveSession", ((e,t,n)=>{
                            const {sessionData: r} = n;
                            r ? (0,
                                c.wX)(n.sessionData, e.currentUserId) : (0,
                                c.jv)()
                        }
                    )),
                    (0,
                        r.Q6)("signOut", (()=>{
                            (async()=>{
                                    try {
                                        await (0,
                                            u.r1)(),
                                            await (0,
                                                o.t9)("destroy"),
                                            await (0,
                                                l.IT)(!1)
                                    } catch (e) {}
                                    (0,
                                        r.uC)().reset()
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("reset", (()=>{
                            (0,
                                c.jv)(),
                                s.clear(d.lW),
                                s.clear(d.SG),
                                s.clear(d.lF),
                                s.clear(d.fo);
                            const e = d.ee.replace(/\d+$/, "")
                                , t = (d.ee.match(/\d+$/) || [0])[0];
                            for (let n = 0; n < t; n++)
                                s.clear(`${e}${0 === n ? "" : n}`);
                            (0,
                                c.f3)(),
                                (0,
                                    i.w)(0),
                                (0,
                                    r.uC)().init()
                        }
                    )),
                    (0,
                        r.Q6)("disconnect", (()=>{
                            (async()=>{
                                    await (0,
                                        o.t9)("disconnect")
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadNearestCountry", (e=>{
                            "connectionStateReady" === e.connectionState && (async()=>{
                                    const e = await (0,
                                        o.t9)("fetchNearestCountry");
                                    (0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        authNearestCountry: e
                                    })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("setDeviceToken", ((e,t,n)=>{
                            (0,
                                r.R3)({
                                ...e,
                                push: {
                                    deviceToken: n,
                                    subscribedAt: Date.now()
                                }
                            })
                        }
                    )),
                    (0,
                        r.Q6)("deleteDeviceToken", (e=>{
                            const t = {
                                ...e
                            };
                            delete t.push,
                                (0,
                                    r.R3)(t)
                        }
                    ))
            }
            ,
            9667: (e,t,n)=>{
                var r = n(5116)
                    , o = n(1713)
                    , d = n(3716)
                    , a = n(1226)
                    , u = n(782)
                    , s = n(8406)
                    , i = n(711)
                    , c = n(1638)
                    , l = n(9959)
                    , f = n(2858);
                function h(e, {visibility: t, allowedIds: n, deniedIds: r}) {
                    const {users: {byId: o}, chats: {byId: d}} = e
                        , a = {
                        visibility: t
                    };
                    let u, s;
                    const i = e=>{
                            if (!(0,
                                f.YC)(e))
                                return;
                            const {id: t, accessHash: n} = o[e] || {};
                            return t ? {
                                id: t,
                                accessHash: n
                            } : void 0
                        }
                        , c = e=>{
                            if ((0,
                                f.YC)(e))
                                return;
                            const t = d[e];
                            return t ? {
                                id: t.id
                            } : void 0
                        }
                    ;
                    return "contacts" !== t && "nobody" !== t || (u = n.map(i).filter(Boolean),
                        s = n.map(c).filter(Boolean),
                    u.length > 0 && (a.allowedUsers = u),
                    s.length > 0 && (a.allowedChats = s)),
                    "everybody" !== t && "contacts" !== t || (u = r.map(i).filter(Boolean),
                        s = r.map(c).filter(Boolean),
                    u.length > 0 && (a.blockedUsers = u),
                    s.length > 0 && (a.blockedChats = s)),
                        a
                }
                (0,
                    r.Q6)("updateProfile", ((e,t,n)=>{
                        const {photo: d, firstName: u, lastName: s, bio: i, username: f} = n;
                        (async()=>{
                                const {currentUserId: t} = e;
                                if (t) {
                                    if ((0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        profileEdit: {
                                            progress: o.rN.InProgress
                                        }
                                    }),
                                    d && await (0,
                                        a.t9)("updateProfilePhoto", d),
                                    (u || s || i) && await (0,
                                        a.t9)("updateProfile", {
                                        firstName: u,
                                        lastName: s,
                                        about: i
                                    })) {
                                        e = (0,
                                            r.Rd)();
                                        const n = t && (0,
                                            c.dy)(e, t);
                                        n && (0,
                                            r.R3)((0,
                                            l.Nq)(e, n.id, {
                                            firstName: u,
                                            lastName: s,
                                            fullInfo: {
                                                ...n.fullInfo,
                                                bio: i
                                            }
                                        }))
                                    }
                                    f && await (0,
                                        a.t9)("updateUsername", f) && t && (0,
                                        r.R3)((0,
                                        l.Nq)((0,
                                        r.Rd)(), t, {
                                        username: f
                                    })),
                                        (0,
                                            r.R3)({
                                            ...(0,
                                                r.Rd)(),
                                            profileEdit: {
                                                progress: o.rN.Complete
                                            }
                                        })
                                }
                            }
                        )()
                    }
                )),
                    (0,
                        r.Q6)("checkUsername", ((e,t,n)=>{
                            const {username: d} = n;
                            (async()=>{
                                    if (e.profileEdit && e.profileEdit.progress === o.rN.InProgress)
                                        return;
                                    (0,
                                        r.R3)({
                                        ...e,
                                        profileEdit: {
                                            progress: e.profileEdit ? e.profileEdit.progress : o.rN.Idle,
                                            isUsernameAvailable: void 0
                                        }
                                    });
                                    const t = await (0,
                                        a.t9)("checkUsername", d);
                                    e = (0,
                                        r.Rd)(),
                                        (0,
                                            r.R3)({
                                            ...e,
                                            profileEdit: {
                                                ...e.profileEdit,
                                                isUsernameAvailable: t
                                            }
                                        })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadWallpapers", (()=>{
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchWallpapers");
                                    if (!e)
                                        return;
                                    const t = (0,
                                        r.Rd)();
                                    (0,
                                        r.R3)({
                                        ...t,
                                        settings: {
                                            ...t.settings,
                                            loadedWallpapers: e.wallpapers
                                        }
                                    })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("uploadWallpaper", ((e,t,n)=>{
                            const d = n
                                , u = URL.createObjectURL(d);
                            (0,
                                r.R3)({
                                ...e,
                                settings: {
                                    ...e.settings,
                                    loadedWallpapers: [{
                                        slug: o.mp,
                                        document: {
                                            fileName: "",
                                            size: d.size,
                                            mimeType: d.type,
                                            previewBlobUrl: u
                                        }
                                    }, ...e.settings.loadedWallpapers || []]
                                }
                            }),
                                (async()=>{
                                        const t = await (0,
                                            a.t9)("uploadWallpaper", d);
                                        if (!t)
                                            return;
                                        const {wallpaper: n} = t;
                                        if (!(e = (0,
                                            r.Rd)()).settings.loadedWallpapers)
                                            return;
                                        const s = e.settings.loadedWallpapers[0];
                                        if (!s || s.slug !== o.mp)
                                            return;
                                        const i = {
                                            ...n,
                                            document: {
                                                ...n.document,
                                                previewBlobUrl: u
                                            }
                                        };
                                        (0,
                                            r.R3)({
                                            ...e,
                                            settings: {
                                                ...e.settings,
                                                loadedWallpapers: [i, ...e.settings.loadedWallpapers.slice(1)]
                                            }
                                        })
                                    }
                                )()
                        }
                    )),
                    (0,
                        r.Q6)("loadBlockedContacts", (()=>{
                            (async()=>{
                                    var e, t;
                                    const n = await (0,
                                        a.t9)("fetchBlockedContacts");
                                    if (!n)
                                        return;
                                    let o = (0,
                                        r.Rd)();
                                    null !== (e = n.users) && void 0 !== e && e.length && (o = (0,
                                        l.Sh)(o, (0,
                                        u.ee)(n.users, "id"))),
                                    null !== (t = n.chats) && void 0 !== t && t.length && (o = (0,
                                        l.GL)(o, (0,
                                        u.ee)(n.chats, "id"))),
                                        o = {
                                            ...o,
                                            blocked: {
                                                ...o.blocked,
                                                ids: [...o.blocked.ids || [], ...n.blockedIds],
                                                totalCount: n.totalCount
                                            }
                                        },
                                        (0,
                                            r.R3)(o)
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("blockContact", ((e,t,n)=>{
                            const {contactId: o, accessHash: d} = n;
                            (async()=>{
                                    if (!await (0,
                                        a.t9)("blockContact", o, d))
                                        return;
                                    const e = (0,
                                        r.Rd)();
                                    (0,
                                        r.R3)((0,
                                        l.O4)(e, o))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("unblockContact", ((e,t,n)=>{
                            const {contactId: o} = n;
                            let d;
                            if ((0,
                                f.YC)(o)) {
                                const t = (0,
                                    c.dy)(e, o);
                                if (!t)
                                    return;
                                d = t.accessHash
                            }
                            (async()=>{
                                    if (!await (0,
                                        a.t9)("unblockContact", o, d))
                                        return;
                                    const e = (0,
                                        r.Rd)();
                                    (0,
                                        r.R3)((0,
                                        l.rB)(e, o))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadAuthorizations", (()=>{
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchAuthorizations");
                                    e && (0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        activeSessions: e
                                    })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("terminateAuthorization", ((e,t,n)=>{
                            const {hash: o} = n;
                            (async()=>{
                                    if (!await (0,
                                        a.t9)("terminateAuthorization", o))
                                        return;
                                    const e = (0,
                                        r.Rd)();
                                    (0,
                                        r.R3)({
                                        ...e,
                                        activeSessions: e.activeSessions.filter((e=>e.hash !== o))
                                    })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("terminateAllAuthorizations", (()=>{
                            (async()=>{
                                    if (!await (0,
                                        a.t9)("terminateAllAuthorizations"))
                                        return;
                                    const e = (0,
                                        r.Rd)();
                                    (0,
                                        r.R3)({
                                        ...e,
                                        activeSessions: e.activeSessions.filter((e=>e.isCurrent))
                                    })
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadNotificationExceptions", (e=>{
                            const {serverTimeOffset: t} = e;
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchNotificationExceptions", {
                                        serverTimeOffset: t
                                    });
                                    e && (0,
                                        r.R3)((0,
                                        l.aJ)((0,
                                        r.Rd)(), e))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadNotificationSettings", (e=>{
                            const {serverTimeOffset: t} = e;
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchNotificationSettings", {
                                        serverTimeOffset: t
                                    });
                                    e && (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), e))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("updateNotificationSettings", ((e,t,n)=>{
                            const {peerType: o, isSilent: d, shouldShowPreviews: u} = n;
                            (async()=>{
                                    await (0,
                                        a.t9)("updateNotificationSettings", o, {
                                        isSilent: d,
                                        shouldShowPreviews: u
                                    }) && (0,
                                        r.R3)((0,
                                        l.HN)((0,
                                        r.Rd)(), o, d, u))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("updateWebNotificationSettings", ((e,t,n)=>{
                            (async()=>{
                                    (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), n));
                                    const e = (0,
                                        r.Rd)()
                                        , {hasPushNotifications: t, hasWebNotifications: o} = e.settings.byKey;
                                    o && t ? await (0,
                                        s.Ld)() : await (0,
                                        s.r1)()
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("updateContactSignUpNotification", ((e,t,n)=>{
                            const {isSilent: o} = n;
                            (async()=>{
                                    await (0,
                                        a.t9)("updateContactSignUpNotification", o) && (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), {
                                        hasContactJoinedNotifications: !o
                                    }))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadLanguages", (()=>{
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchLanguages");
                                    e && (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), {
                                        languages: e
                                    }))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadPrivacySettings", (()=>{
                            (async()=>{
                                    const [e,t,n,o,d] = await Promise.all([(0,
                                        a.t9)("fetchPrivacySettings", "phoneNumber"), (0,
                                        a.t9)("fetchPrivacySettings", "lastSeen"), (0,
                                        a.t9)("fetchPrivacySettings", "profilePhoto"), (0,
                                        a.t9)("fetchPrivacySettings", "forwards"), (0,
                                        a.t9)("fetchPrivacySettings", "chatInvite")]);
                                    if (!(e && t && n && o && d))
                                        return;
                                    const u = (0,
                                        r.Rd)();
                                    u.settings.privacy.phoneNumber = e,
                                        u.settings.privacy.lastSeen = t,
                                        u.settings.privacy.profilePhoto = n,
                                        u.settings.privacy.forwards = o,
                                        u.settings.privacy.chatInvite = d,
                                        (0,
                                            r.R3)(u)
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("setPrivacyVisibility", ((e,t,n)=>{
                            const {privacyKey: o, visibility: d} = n
                                , {privacy: {[o]: u}} = e.settings;
                            if (!u)
                                return;
                            const s = h(e, {
                                visibility: d,
                                allowedIds: [...u.allowUserIds, ...u.allowChatIds],
                                deniedIds: [...u.blockUserIds, ...u.blockChatIds]
                            });
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("setPrivacySettings", o, s);
                                    if (e) {
                                        const t = (0,
                                            r.Rd)();
                                        t.settings.privacy[o] = e,
                                            (0,
                                                r.R3)(t)
                                    }
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("setPrivacySettings", ((e,t,n)=>{
                            const {privacyKey: o, isAllowList: d, contactsIds: u} = n
                                , {privacy: {[o]: s}} = e.settings;
                            if (!s)
                                return;
                            const i = h(e, {
                                visibility: s.visibility,
                                allowedIds: d ? u : [...s.allowUserIds, ...s.allowChatIds],
                                deniedIds: d ? [...s.blockUserIds, ...s.blockChatIds] : u
                            });
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("setPrivacySettings", o, i);
                                    if (e) {
                                        const t = (0,
                                            r.Rd)();
                                        t.settings.privacy[o] = e,
                                            (0,
                                                r.R3)(t)
                                    }
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("updateIsOnline", ((e,t,n)=>{
                            (0,
                                a.t9)("updateIsOnline", n)
                        }
                    )),
                    (0,
                        r.Q6)("loadContentSettings", (()=>{
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchContentSettings");
                                    e && (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), e))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("updateContentSettings", ((e,t,n)=>{
                            (async()=>{
                                    (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), {
                                        isSensitiveEnabled: n
                                    })),
                                    await (0,
                                        a.t9)("updateContentSettings", n) || (0,
                                        r.R3)((0,
                                        l.BI)((0,
                                        r.Rd)(), {
                                        isSensitiveEnabled: !n
                                    }))
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadCountryList", ((e,t,n={})=>{
                            let {langCode: o} = n;
                            o || (o = e.settings.byKey.language),
                                (async()=>{
                                        const e = await (0,
                                            a.t9)("fetchCountryList", {
                                            langCode: o
                                        });
                                        e && (0,
                                            r.R3)({
                                            ...(0,
                                                r.Rd)(),
                                            countryList: e
                                        })
                                    }
                                )()
                        }
                    )),
                    (0,
                        r.Q6)("ensureTimeFormat", ((e,t)=>{
                            if (e.authNearestCountry) {
                                const n = d.FD.has(e.authNearestCountry.toUpperCase()) ? "12h" : "24h";
                                t.setSettingOption({
                                    timeFormat: n
                                }),
                                    (0,
                                        i.qf)(n)
                            }
                            (async()=>{
                                    if ((0,
                                        r.Rd)().settings.byKey.wasTimeFormatSetManually)
                                        return;
                                    const e = await (0,
                                        a.t9)("fetchNearestCountry");
                                    if (e) {
                                        const n = d.FD.has(e.toUpperCase()) ? "12h" : "24h";
                                        t.setSettingOption({
                                            timeFormat: n
                                        }),
                                            (0,
                                                i.qf)(n)
                                    }
                                }
                            )()
                        }
                    )),
                    (0,
                        r.Q6)("loadAppConfig", (()=>{
                            (async()=>{
                                    const e = await (0,
                                        a.t9)("fetchAppConfig");
                                    e && (0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        appConfig: e
                                    })
                                }
                            )()
                        }
                    ))
            }
            ,
            4907: (e,t,n)=>{
                var r = n(5116)
                    , o = n(3716)
                    , d = n(8406)
                    , a = n(9959)
                    , u = n(711)
                    , s = n(1638)
                    , i = n(1622)
                    , c = n(1947);
                (0,
                    r.Q6)("apiUpdate", ((e,t,n)=>{
                        switch (o.eM && "updateUserStatus" !== n["@type"] && "updateServerTimeOffset" !== n["@type"] && console.log("[GramJs] UPDATE", n["@type"], {
                            update: n
                        }),
                            n["@type"]) {
                            case "updateApiReady":
                                !function(e) {
                                    const {hasWebNotifications: t, hasPushNotifications: n} = (0,
                                        s.dZ)(e);
                                    t && n && (0,
                                        d.Ld)(),
                                        (0,
                                            u.m0)(e.settings.byKey.language)
                                }(e);
                                break;
                            case "updateAuthorizationState":
                                !function(e) {
                                    let t = (0,
                                        r.Rd)();
                                    const n = "authorizationStateReady" === t.authState
                                        , o = e.authorizationState;
                                    switch ((0,
                                        r.R3)({
                                        ...t,
                                        authState: o,
                                        authIsLoading: !1
                                    }),
                                        t = (0,
                                            r.Rd)(),
                                        o) {
                                        case "authorizationStateLoggingOut":
                                            (0,
                                                i.IT)(!1),
                                                (0,
                                                    r.R3)({
                                                    ...t,
                                                    isLoggingOut: !0
                                                });
                                            break;
                                        case "authorizationStateWaitCode":
                                            (0,
                                                r.R3)({
                                                ...t,
                                                authIsCodeViaApp: e.isCodeViaApp
                                            });
                                            break;
                                        case "authorizationStateWaitPassword":
                                            (0,
                                                r.R3)({
                                                ...t,
                                                authHint: e.hint
                                            });
                                            break;
                                        case "authorizationStateWaitQrCode":
                                            (0,
                                                r.R3)({
                                                ...t,
                                                authIsLoadingQrCode: !1,
                                                authQrCode: e.qrCode
                                            });
                                            break;
                                        case "authorizationStateReady":
                                            if (n)
                                                break;
                                            (0,
                                                i.IT)(!0),
                                                (0,
                                                    r.R3)({
                                                    ...t,
                                                    isLoggingOut: !1,
                                                    lastSyncTime: Date.now()
                                                })
                                    }
                                }(n);
                                break;
                            case "updateAuthorizationError":
                                !function(e) {
                                    (0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        authError: e.message
                                    })
                                }(n);
                                break;
                            case "updateConnectionState":
                                !function(e) {
                                    const {connectionState: t} = e
                                        , n = (0,
                                        r.Rd)();
                                    t !== n.connectionState && ((0,
                                        r.R3)({
                                        ...n,
                                        connectionState: t
                                    }),
                                        "connectionStateReady" === t && "authorizationStateReady" === n.authState ? (0,
                                            r.uC)().sync() : "connectionStateBroken" === t && (0,
                                            r.uC)().signOut())
                                }(n);
                                break;
                            case "updateSession":
                                !function(e) {
                                    const {sessionData: t} = e
                                        , {authRememberMe: n, authState: o} = (0,
                                        r.Rd)()
                                        , d = !t || !t.mainDcId;
                                    n && "authorizationStateReady" === o && !d && (0,
                                        r.uC)().saveSession({
                                        sessionData: t
                                    })
                                }(n);
                                break;
                            case "updateServerTimeOffset":
                                !function(e) {
                                    const t = (0,
                                        r.Rd)();
                                    t.serverTimeOffset !== e.serverTimeOffset && (0,
                                        r.R3)({
                                        ...t,
                                        serverTimeOffset: e.serverTimeOffset
                                    })
                                }(n);
                                break;
                            case "updateCurrentUser":
                                !function(e) {
                                    const {currentUser: t} = e;
                                    (0,
                                        r.R3)({
                                        ...(0,
                                            a.Nq)((0,
                                            r.Rd)(), t.id, t),
                                        currentUserId: t.id
                                    }),
                                        function(e) {
                                            const t = localStorage.getItem(o.b_);
                                            if (!t)
                                                return;
                                            const n = JSON.parse(t);
                                            n.id = e,
                                                localStorage.setItem(o.b_, JSON.stringify(n))
                                        }(t.id)
                                }(n);
                                break;
                            case "error":
                            {
                                "SESSION_REVOKED" === n.error.message && t.signOut();
                                const e = (0,
                                    c.J_)(n.error);
                                e ? t.addPaymentError({
                                    error: e
                                }) : t.showDialog && t.showDialog({
                                    data: n.error
                                });
                                break
                            }
                        }
                    }
                ))
            }
            ,
            7895: (e,t,n)=>{
                var r = n(5116)
                    , o = n(3716)
                    , d = n(7361)
                    , a = n(711)
                    , u = n(6917)
                    , s = n(1638)
                    , i = n(1622)
                    , c = n(7926);
                !function() {
                    function e() {
                        const e = document.documentElement.className.match(/theme-(\w+)/)
                            , t = e ? e[1] : "light"
                            , n = (0,
                            r.Rd)()
                            , d = (0,
                            s.Pu)(n)
                            , {animationLevel: a} = n.settings.byKey;
                        d !== t && ((0,
                            u.Z)(d, a === o.zy),
                            (0,
                                r.R3)({
                                ...n
                            }))
                    }
                    const t = window.matchMedia("(prefers-color-scheme: dark)");
                    "function" == typeof t.addEventListener ? t.addEventListener("change", e) : "function" == typeof t.addListener && t.addListener(e)
                }(),
                    (0,
                        r.Q6)("init", (e=>{
                            const {animationLevel: t, messageTextSize: n, language: r} = e.settings.byKey
                                , l = (0,
                                s.Pu)(e);
                            (0,
                                a.m0)(r, void 0, !0),
                                document.documentElement.style.setProperty("--composer-text-size", `${Math.max(n, d.cj ? 16 : 15)}px`),
                                document.documentElement.style.setProperty("--message-meta-height", `${Math.floor(1.3125 * n)}px`),
                                document.documentElement.style.setProperty("--message-text-size", `${n}px`),
                                document.documentElement.setAttribute("data-message-text-size", n.toString()),
                                document.body.classList.add("initial"),
                                document.body.classList.add(`animation-level-${t}`),
                                document.body.classList.add(d.$b ? "is-touch-env" : "is-pointer-env"),
                                (0,
                                    u.Z)(l, t === o.zy),
                                (0,
                                    c.$)(),
                                (0,
                                    i.px)(),
                                d.cj ? document.body.classList.add("is-ios") : d.wZ ? document.body.classList.add("is-android") : d.jm && document.body.classList.add("is-macos"),
                            d.s$ && document.body.classList.add("is-safari")
                        }
                    )),
                    (0,
                        r.Q6)("setIsUiReady", ((e,t,n)=>{
                            const {uiReadyState: r} = n;
                            return 2 === r && document.body.classList.remove("initial"),
                                {
                                    ...e,
                                    uiReadyState: r
                                }
                        }
                    )),
                    (0,
                        r.Q6)("setAuthPhoneNumber", ((e,t,n)=>{
                            const {phoneNumber: r} = n;
                            return {
                                ...e,
                                authPhoneNumber: r
                            }
                        }
                    )),
                    (0,
                        r.Q6)("setAuthRememberMe", ((e,t,n)=>({
                        ...e,
                        authRememberMe: Boolean(n)
                    }))),
                    (0,
                        r.Q6)("clearAuthError", (e=>({
                        ...e,
                        authError: void 0
                    }))),
                    (0,
                        r.Q6)("disableHistoryAnimations", (()=>{
                            setTimeout((()=>{
                                    (0,
                                        r.R3)({
                                        ...(0,
                                            r.Rd)(),
                                        shouldSkipHistoryAnimations: !1
                                    }),
                                        document.body.classList.remove("no-animate")
                                }
                            ), 450),
                                (0,
                                    r.R3)({
                                    ...(0,
                                        r.Rd)(),
                                    shouldSkipHistoryAnimations: !0
                                }, {
                                    forceSyncOnIOs: !0
                                })
                        }
                    ))
            }
            ,
            3781: (e,t,n)=>{
                var r = n(5116)
                    , o = n(9959);
                (0,
                    r.Q6)("setSettingOption", ((e,t,n)=>(0,
                    o.BI)(e, n))),
                    (0,
                        r.Q6)("setThemeSettings", ((e,t,n)=>{
                            const {theme: r, ...d} = n;
                            return (0,
                                o.lr)(e, r, d)
                        }
                    ))
            }
            ,
            8332: (e,t,n)=>{
                n.d(t, {
                    YC: ()=>c,
                    Bf: ()=>l,
                    G9: ()=>f,
                    ZV: ()=>h,
                    eA: ()=>m,
                    Ru: ()=>p,
                    pK: ()=>g,
                    l6: ()=>y,
                    zX: ()=>v,
                    U: ()=>b,
                    GM: ()=>w,
                    hu: ()=>I,
                    RT: ()=>C,
                    Hp: ()=>S,
                    Nl: ()=>E,
                    VE: ()=>P,
                    Mg: ()=>M,
                    Qm: ()=>A,
                    H5: ()=>k,
                    q8: ()=>T,
                    Hd: ()=>N,
                    OE: ()=>L,
                    pE: ()=>R,
                    i4: ()=>D,
                    Sm: ()=>O,
                    cc: ()=>Z,
                    P4: ()=>_,
                    O: ()=>x,
                    wG: ()=>B,
                    Fu: ()=>$,
                    SB: ()=>U,
                    zF: ()=>j,
                    ih: ()=>W,
                    $l: ()=>G
                });
                var r = n(6137)
                    , o = n(3716)
                    , d = n(782)
                    , a = n(5527)
                    , u = n(790)
                    , s = n(5765);
                const i = Date.now() / 1e3 + 31622400;
                function c(e) {
                    return "number" == typeof e ? e > 0 : !e.startsWith("-")
                }
                function l(e) {
                    return f(e) || h(e)
                }
                function f(e) {
                    return "chatTypeBasicGroup" === e.type
                }
                function h(e) {
                    return "chatTypeSuperGroup" === e.type
                }
                function m(e) {
                    return "chatTypeChannel" === e.type
                }
                function p(e) {
                    return "chatTypePrivate" === e.type || "chatTypeBasicGroup" === e.type
                }
                function g(e) {
                    return e === o.FV
                }
                function y(e) {
                    switch (e.type) {
                        case "chatTypePrivate":
                            return "PrivateChat";
                        case "chatTypeBasicGroup":
                        case "chatTypeSuperGroup":
                            return "AccDescrGroup";
                        case "chatTypeChannel":
                            return "AccDescrChannel";
                        default:
                            return "Chat"
                    }
                }
                function v(e) {
                    if ("chatTypePrivate" === e.type || "chatTypeSecret" === e.type)
                        return e.id
                }
                function b(e, t, n, r=!1) {
                    return r || n && t.id === n.id && n.isSelf ? e("SavedMessages") : t.title || e("HiddenName")
                }
                function w(e) {
                    if (e.fullInfo)
                        return e.fullInfo.about
                }
                function I(e) {
                    const {username: t} = e;
                    if (t)
                        return `https://t.me/${t}`;
                    const {inviteLink: n} = e.fullInfo || {};
                    return n
                }
                function C(e, t="normal") {
                    if (e.avatarHash)
                        switch (t) {
                            case "big":
                                return `profile${e.id}?${e.avatarHash}`;
                            default:
                                return `avatar${e.id}?${e.avatarHash}`
                        }
                }
                function S(e) {
                    return !e.lastMessage
                }
                function E(e) {
                    return Boolean(e.adminRights)
                }
                function P(e, t) {
                    return !!e.adminRights && e.adminRights[t]
                }
                function M(e, t) {
                    var n, r;
                    return Boolean((null === (n = e.currentUserBannedRights) || void 0 === n ? void 0 : n[t]) || (null === (r = e.defaultBannedRights) || void 0 === r ? void 0 : r[t]))
                }
                function A(e, t) {
                    return t !== r._f || !(e.isRestricted || e.migratedTo || e.isNotJoined || g(e.id)) && (!!e.isCreator || !!c(e.id) || (m(e) ? P(e, "postMessages") : E(e) || !M(e, "sendMessages")))
                }
                function k(e, t=!1) {
                    if (!e)
                        return {
                            canAttachMedia: !1,
                            canAttachPolls: !1,
                            canSendStickers: !1,
                            canSendGifs: !1,
                            canAttachEmbedLinks: !1
                        };
                    const n = E(e);
                    return {
                        canAttachMedia: n || !M(e, "sendMedia"),
                        canAttachPolls: (n || !M(e, "sendPolls")) && (!c(e.id) || t),
                        canSendStickers: n || !M(e, "sendStickers"),
                        canSendGifs: n || !M(e, "sendGifs"),
                        canAttachEmbedLinks: n || !M(e, "embedLinks")
                    }
                }
                function T(e, t, n) {
                    if (null != t && t.sendMessages) {
                        const {untilDate: n} = t;
                        return n && n < i ? e("Channel.Persmission.Denied.SendMessages.Until", e("formatDateAtTime", [(0,
                            u.xH)(new Date(1e3 * n), e.code), (0,
                            u.mr)(e, 1e3 * n)])) : e("Channel.Persmission.Denied.SendMessages.Forever")
                    }
                    if (null != n && n.sendMessages)
                        return e("Channel.Persmission.Denied.SendMessages.DefaultRestrictedText")
                }
                function N(e) {
                    if (e && e.fullInfo)
                        return e.fullInfo.slowMode
                }
                function L(e) {
                    var t;
                    return Math.max(e.joinDate || 0, e.draftDate || 0, (null === (t = e.lastMessage) || void 0 === t ? void 0 : t.date) || 0)
                }
                function R(e) {
                    return e.folderId === o.WS
                }
                function D(e, t, n={}) {
                    return n[e.id] && void 0 !== n[e.id].isMuted ? n[e.id].isMuted : e.isMuted || c(e.id) && !t.hasPrivateChatsNotifications || m(e) && !t.hasBroadcastNotifications || l(e) && !t.hasGroupNotifications
                }
                function O(e, t, n={}) {
                    const {hasPrivateChatsMessagePreview: r=!0, hasBroadcastMessagePreview: o=!0, hasGroupMessagePreview: d=!0} = t;
                    return n[e.id] && void 0 !== n[e.id].shouldShowPreviews ? n[e.id].shouldShowPreviews : c(e.id) && r || m(e) && o || l(e) && d
                }
                function Z(e) {
                    return f(e) || (h(e) || m(e)) && e.isCreator
                }
                function _(e, t, n, r, d, a) {
                    const u = r.excludedChatIds ? new Set(r.excludedChatIds) : void 0
                        , s = r.excludedChatIds ? new Set(r.includedChatIds) : void 0
                        , i = r.excludedChatIds ? new Set(r.pinnedChatIds) : void 0;
                    return [[].concat(e.active || [], e.archived || []).filter((e=>{
                            const c = t[e];
                            return c && function(e, t, n, r, d, a, u, s) {
                                if (!e.isListed)
                                    return !1;
                                const {id: i, type: c, unreadMentionsCount: l} = e;
                                if (null != a && a.has(i))
                                    return !1;
                                if (null != u && u.has(i))
                                    return !0;
                                if (null != s && s.has(i))
                                    return !0;
                                if (t.excludeArchived && e.folderId === o.WS)
                                    return !1;
                                if (t.excludeRead && !e.unreadCount && !l && !e.hasUnreadMark)
                                    return !1;
                                if (t.excludeMuted && !l && D(e, r, d))
                                    return !1;
                                if ("chatTypePrivate" === c) {
                                    const e = n[i];
                                    if (e) {
                                        const {type: n, isContact: r} = e;
                                        if ("userTypeBot" === n) {
                                            if (t.bots)
                                                return !0
                                        } else {
                                            if (t.contacts && r)
                                                return !0;
                                            if (t.nonContacts && !r)
                                                return !0
                                        }
                                    }
                                } else {
                                    if ("chatTypeChannel" === c)
                                        return !!t.channels;
                                    if ("chatTypeBasicGroup" === c || "chatTypeSuperGroup" === c)
                                        return !!t.groups
                                }
                                return !1
                            }(c, r, n, d, a, u, s, i)
                        }
                    )), r.pinnedChatIds]
                }
                function x(e, t, n, r="all", o=!1) {
                    const a = new Set(t)
                        , u = n ? new Set(n) : void 0
                        , s = (null == n ? void 0 : n.reduce(((t,n)=>{
                            const o = e[n];
                            return o && a.has(o.id) && F(o, r) && t.push(o),
                                t
                        }
                    ), [])) || []
                        , i = t.reduce(((t,n)=>{
                            const o = e[n];
                            return !o || u && u.has(o.id) || !F(o, r) || t.push(o),
                                t
                        }
                    ), []);
                    return {
                        pinnedChats: s,
                        otherChats: o ? i : (0,
                            d.Xo)(i, L, "desc")
                    }
                }
                function F(e, t) {
                    return e.lastMessage && !e.migratedTo && !e.isRestricted && !e.isNotJoined && !("all" === t && e.folderId === o.WS) && !("archived" === t && e.folderId !== o.WS)
                }
                function B(e, t) {
                    const n = new Set(t);
                    return {
                        pinnedChats: e.pinnedChats.filter((({id: e})=>n.has(e))),
                        otherChats: e.otherChats.filter((({id: e})=>n.has(e)))
                    }
                }
                function $(e, t, n, r, o, d) {
                    const [a] = _(e, t, n, r, o, d);
                    let u = !1;
                    return {
                        unreadDialogsCount: a.reduce(((e,n)=>{
                                const r = t[n];
                                if (null == r || !r.lastMessage || null != r && r.isRestricted || null != r && r.isNotJoined)
                                    return e;
                                const a = r.unreadCount || r.hasUnreadMark;
                                return a && e++,
                                !u && (r.unreadMentionsCount || a && !D(r, o, d)) && (u = !0),
                                    e
                            }
                        ), 0),
                        hasActiveDialogs: u
                    }
                }
                function U(e, t, n, r, o, d, a) {
                    const {id: u, title: s, emoticon: i, description: c, pinnedChatIds: l, excludedChatIds: f, includedChatIds: h, excludeArchived: m, excludeMuted: p, excludeRead: g, ...y} = o;
                    return Object.values(y).filter(Boolean).length > 1 || null != f && f.length || null != h && h.length ? e("Chats", function(e, t, n, r, o, d) {
                        const [a,u] = _(e, t, n, r, o, d)
                            , {pinnedChats: s, otherChats: i} = x(t, a, u, "folder", !0);
                        return s.length + i.length
                    }(t, n, r, o, d, a)) : y.bots ? e("FilterBots") : y.groups ? e("FilterGroups") : y.channels ? e("FilterChannels") : y.contacts ? e("FilterContacts") : y.nonContacts ? e("FilterNonContacts") : void 0
                }
                function j(e, t, n) {
                    if (n && !c(t))
                        return n.isSelf ? e("FromYou") : (0,
                            a.Vl)(n)
                }
                function W(e, t, n=!1, r) {
                    return (0,
                        d.Xo)(e, (e=>{
                            const o = t[e];
                            if (!o)
                                return 0;
                            let d = 0;
                            return o.lastMessage && (d += o.lastMessage.date),
                            n && o.isVerified && (d += 3e9),
                            r && r.includes(e) && (d = Date.now() + 3e8 + (r.length - r.indexOf(e))),
                                d
                        }
                    ), "desc")
                }
                function G(e, t, n, r, o) {
                    if (!r)
                        return t;
                    const d = (0,
                        s.W)(r);
                    return t.filter((t=>{
                            const r = n[t];
                            return !!r && d(b(e, r, void 0, t === o))
                        }
                    ))
                }
            }
            ,
            2858: (e,t,n)=>{
                n.d(t, {
                    JE: ()=>T,
                    uw: ()=>ie,
                    $l: ()=>o.$l,
                    kK: ()=>r.kK,
                    H5: ()=>o.H5,
                    MR: ()=>q,
                    kw: ()=>r.kw,
                    cc: ()=>o.cc,
                    Qm: ()=>o.Qm,
                    RT: ()=>o.RT,
                    GM: ()=>o.GM,
                    hu: ()=>o.hu,
                    N0: ()=>ne,
                    OE: ()=>o.OE,
                    Hd: ()=>o.Hd,
                    U: ()=>o.U,
                    l6: ()=>o.l6,
                    T7: ()=>y,
                    SB: ()=>o.SB,
                    Fu: ()=>o.Fu,
                    VE: ()=>o.VE,
                    XV: ()=>se,
                    Sc: ()=>ae,
                    N5: ()=>_,
                    oP: ()=>x,
                    qp: ()=>L,
                    w6: ()=>k,
                    R5: ()=>ue,
                    $D: ()=>p,
                    aE: ()=>$,
                    ep: ()=>X,
                    c0: ()=>ee,
                    eO: ()=>G,
                    Tp: ()=>c,
                    kG: ()=>Y,
                    Ti: ()=>K,
                    DH: ()=>Q,
                    KK: ()=>f,
                    O$: ()=>D,
                    t9: ()=>W,
                    Y5: ()=>Z,
                    zF: ()=>o.zF,
                    q8: ()=>o.q8,
                    _O: ()=>g,
                    bf: ()=>B,
                    MK: ()=>h,
                    UD: ()=>m,
                    b7: ()=>O,
                    kd: ()=>F,
                    s1: ()=>V,
                    F$: ()=>H,
                    Cg: ()=>z,
                    bV: ()=>re,
                    HV: ()=>oe,
                    zX: ()=>o.zX,
                    OU: ()=>E,
                    RI: ()=>P,
                    Ow: ()=>le,
                    Rs: ()=>r.Rs,
                    Vl: ()=>r.Vl,
                    Js: ()=>r.Js,
                    db: ()=>r.db,
                    Tq: ()=>r.Tq,
                    jC: ()=>de,
                    BM: ()=>te,
                    u8: ()=>R,
                    Lo: ()=>I,
                    Ul: ()=>S,
                    Nl: ()=>o.Nl,
                    pE: ()=>o.pE,
                    G9: ()=>o.G9,
                    eA: ()=>o.eA,
                    Bf: ()=>o.Bf,
                    Hp: ()=>o.Hp,
                    ZV: ()=>o.ZV,
                    pK: ()=>o.pK,
                    Ru: ()=>o.Ru,
                    NB: ()=>r.NB,
                    MF: ()=>w,
                    CD: ()=>A,
                    rl: ()=>U,
                    hC: ()=>j,
                    CI: ()=>M,
                    B4: ()=>v,
                    ss: ()=>b,
                    jM: ()=>C,
                    cS: ()=>r.cS,
                    YC: ()=>o.YC,
                    kM: ()=>r.kM,
                    Mg: ()=>o.Mg,
                    Ak: ()=>l,
                    O: ()=>o.O,
                    P4: ()=>o.P4,
                    wG: ()=>o.wG,
                    i4: ()=>o.i4,
                    Sm: ()=>o.Sm,
                    ih: ()=>o.ih,
                    Z0: ()=>r.Z0
                });
                var r = n(5527)
                    , o = n(8332)
                    , d = n(6137)
                    , a = n(3716)
                    , u = n(7361)
                    , s = n(4784);
                const i = new RegExp(a.FM,"i");
                function c(e) {
                    const {chatId: t, id: n} = e;
                    return function(e, t) {
                        return `msg${e}-${t}`
                    }(t, n)
                }
                function l(e) {
                    const t = e.match(/^msg(-?\d+)-(\d+)/);
                    return {
                        chatId: t[1],
                        messageId: Number(t[2])
                    }
                }
                function f(e) {
                    return e.previousLocalId || e.id
                }
                function h(e, t, n=!1) {
                    const {text: r, photo: o, video: d, audio: u, voice: s, document: i, sticker: c, contact: l, poll: f, invoice: h} = t.content
                        , m = r && r.text.substr(0, 80);
                    return t.groupedId ? `${n ? "" : "🖼 "}${m || e("lng_in_dlg_album")}` : o ? `${n ? "" : "🖼 "}${m || e("AttachPhoto")}` : d ? `${n ? "" : "📹 "}${m || e(d.isGif ? "AttachGif" : "AttachVideo")}` : c ? `${c.emoji || ""} ${e("AttachSticker")}`.trim() : u ? `${n ? "" : "🎧 "}${function(e) {
                        const {audio: t, text: n} = e.content;
                        return t && [t.title, t.performer].filter(Boolean).join(" — ") || (null == n ? void 0 : n.text)
                    }(t) || e("AttachMusic")}` : s ? `${n ? "" : "🎤 "}${m || e("AttachAudio")}` : i ? `${n ? "" : "📎 "}${m || i.fileName}` : l ? e("AttachContact") : f ? `${n ? "" : "📊 "}${f.summary.question}` : h ? "Invoice" : r ? m : a.VC
                }
                function m(e) {
                    const {text: t, sticker: n, photo: r, video: o, audio: d, voice: u, document: s, poll: i, webPage: c, contact: l, invoice: f} = e.content;
                    return t ? t.text : n || r || o || d || u || s || l || i || c || f ? void 0 : a.VC
                }
                function p(e) {
                    const {text: t, sticker: n, photo: r, video: o, audio: d, voice: a, document: u, poll: i, webPage: c, contact: l} = e.content;
                    return !!(n || null != o && o.isRound) || !(!t || r || o || d || a || u || i || c || l) && ((0,
                        s.Z)(t.text) || !1)
                }
                function g(e) {
                    const {text: t} = e.content;
                    if (t && t.text.length <= 6 && 1 === p(e))
                        return t.text
                }
                function y(e) {
                    const {text: t} = e.content;
                    let n;
                    if (null != t && t.entities) {
                        let e = t.entities.find((e=>e.type === d.Vv.TextUrl));
                        if (e && (n = e.url.match(i)),
                        !n && (e = t.entities.find((e=>e.type === d.Vv.Url)),
                            e)) {
                            const {offset: r, length: o} = e;
                            n = t.text.substring(r, r + o).match(i)
                        }
                    }
                    if (!n && t && (n = t.text.match(i)),
                        n)
                        return {
                            url: n[0],
                            domain: n[3]
                        }
                }
                function v(e) {
                    return e.isOutgoing
                }
                function b(e) {
                    return Boolean(e.replyToMessageId)
                }
                function w(e) {
                    return Boolean(e.forwardInfo)
                }
                function I(e) {
                    return !!e.content.action
                }
                function C(e) {
                    return e.chatId === a.aw && Math.round(e.id) !== e.id
                }
                function S(e) {
                    return Boolean(e.senderId) && !(0,
                        o.YC)(e.senderId) && v(e)
                }
                function E(e, t) {
                    return (0,
                        o.YC)(t.id) ? (0,
                        r.Js)(t) : (0,
                        o.U)(e, t)
                }
                function P(e) {
                    return e.sendingState ? "messageSendingStateFailed" === e.sendingState ? "failed" : "pending" : "succeeded"
                }
                function M(e) {
                    return e.id >= a.AE
                }
                function A(e) {
                    return e.content.action && "historyClear" === e.content.action.type
                }
                function k(e) {
                    const {content: t} = e
                        , n = t.webPage ? t.webPage.video : t.video
                        , r = t.webPage ? t.webPage.photo : t.photo
                        , o = t.webPage ? t.webPage.document : t.document;
                    if (o)
                        return o.fileName;
                    if (n)
                        return n.fileName;
                    if (t.sticker) {
                        const e = t.sticker.isAnimated ? "tgs" : (0,
                            u.on)() ? "webp" : "png";
                        return `${t.sticker.id}.${e}`
                    }
                    if (t.audio)
                        return t.audio.fileName;
                    const d = c(e);
                    return r ? `${d}.jpg` : t.voice ? u.m5 ? `${d}.ogg` : `${d}.wav` : d
                }
                function T(e) {
                    return !e.results.some((e=>e.count > 0))
                }
                var N = n(5376);
                function L(e) {
                    return e.content
                }
                function R(e) {
                    return Boolean(D(e) || O(e) || $(e) || B(e) || function(e) {
                        return e.content.contact
                    }(e) || W(e) || _(e) || x(e) || F(e))
                }
                function D(e) {
                    return e.content.photo
                }
                function O(e) {
                    return e.content.video
                }
                function Z(e) {
                    const {video: t} = e.content;
                    return null != t && t.isRound ? t : void 0
                }
                function _(e) {
                    return e.content.action
                }
                function x(e) {
                    return e.content.audio
                }
                function F(e) {
                    return e.content.voice
                }
                function B(e) {
                    return e.content.sticker
                }
                function $(e) {
                    return e.content.document
                }
                function U(e) {
                    const t = $(e);
                    return t ? "photo" === t.mediaType : void 0
                }
                function j(e) {
                    const t = $(e);
                    return t ? "video" === t.mediaType : void 0
                }
                function W(e) {
                    return e.content.poll
                }
                function G(e) {
                    return e.content.invoice
                }
                function V(e) {
                    return e.content.webPage
                }
                function H(e) {
                    var t;
                    return null === (t = V(e)) || void 0 === t ? void 0 : t.photo
                }
                function z(e) {
                    var t;
                    return null === (t = V(e)) || void 0 === t ? void 0 : t.video
                }
                function Q(e) {
                    var t;
                    return null === (t = function(e) {
                        const t = D(e) || O(e) || $(e) || B(e) || H(e) || z(e);
                        if (t)
                            return t.thumbnail
                    }(e)) || void 0 === t ? void 0 : t.dataUri
                }
                function K(e, t) {
                    const {photo: n, video: r, sticker: o, audio: d, voice: a, document: u} = e.content
                        , s = H(e)
                        , i = z(e)
                        , l = r || i
                        , f = n || s;
                    if (!(f || l || o || d || a || u))
                        return;
                    const h = (f || l || o || d || a || u).id
                        , m = `${c(e)}${h ? `:${h}` : ""}`;
                    if (l)
                        switch (t) {
                            case "micro":
                            case "pictogram":
                                return `${m}?size=m`;
                            case "inline":
                                return te(e) ? void 0 : J(l, m);
                            case "viewerPreview":
                                return `${m}?size=m`;
                            case "viewerFull":
                                return J(l, m);
                            case "download":
                                return `${m}?download`
                        }
                    if (f)
                        switch (t) {
                            case "micro":
                            case "pictogram":
                                return `${m}?size=m`;
                            case "inline":
                                return te(e) ? void 0 : `${m}?size=x`;
                            case "viewerPreview":
                                return `${m}?size=x`;
                            case "viewerFull":
                            case "download":
                                return `${m}?size=z`
                        }
                    if (u)
                        switch (t) {
                            case "micro":
                            case "pictogram":
                            case "inline":
                            case "viewerPreview":
                                if (!(0,
                                    N.v6)(u) || te(e))
                                    return;
                                return `${m}?size=m`;
                            case "viewerFull":
                            case "download":
                                return m
                        }
                    if (o)
                        switch (t) {
                            case "micro":
                                return;
                            case "pictogram":
                                return `${m}?size=m`;
                            case "inline":
                                return m;
                            case "download":
                                return `${m}?download`
                        }
                    if (d)
                        switch (t) {
                            case "micro":
                            case "pictogram":
                                return q(d) ? `${m}?size=m` : void 0;
                            case "inline":
                                return J(d, m);
                            case "download":
                                return `${m}?download`
                        }
                    if (a)
                        switch (t) {
                            case "micro":
                            case "pictogram":
                                return;
                            case "inline":
                                return m;
                            case "download":
                                return `${m}?download`
                        }
                }
                function J(e, t) {
                    return u.I_ && u.s$ ? `${t}?fileSize=${e.size}&mimeType=${e.mimeType}` : t
                }
                function q(e) {
                    return e.thumbnailSizes && e.thumbnailSizes.length > 0
                }
                function Y(e, t) {
                    const {sticker: n, video: r, audio: o, voice: a} = e.content
                        , s = r || z(e);
                    return n && "inline" === t && n.isAnimated ? d.IU.Lottie : s && u.I_ && ("viewerFull" === t || "inline" === t) ? d.IU.Progressive : o || a ? a && !u.m5 ? d.IU.BlobUrl : d.IU.Progressive : d.IU.BlobUrl
                }
                function X(e) {
                    const {photo: t, video: n, document: r} = e.content
                        , o = H(e)
                        , d = z(e);
                    if (t || o)
                        return `photo${e.date}.jpeg`;
                    const {fileName: a} = n || d || r || {};
                    return a
                }
                function ee(e) {
                    const {video: t, document: n} = e.content
                        , r = z(e)
                        , {size: o} = t || r || n || {};
                    return o
                }
                function te(e) {
                    const {photo: t, video: n, document: r} = e.content;
                    return (null == t ? void 0 : t.blobUrl) || (null == n ? void 0 : n.blobUrl) || (null == r ? void 0 : r.previewBlobUrl)
                }
                function ne(e, t, n=!1) {
                    const r = ue(e, t, n ? "media" : "inlineMedia");
                    return n ? r.reverse() : r
                }
                function re(e) {
                    return e.sizes.find((e=>"z" === e.type)) || e.sizes.find((e=>"y" === e.type)) || oe(e)
                }
                function oe(e) {
                    return e.sizes.find((e=>"x" === e.type)) || e.sizes.find((e=>"m" === e.type)) || e.sizes.find((e=>"s" === e.type)) || e.thumbnail
                }
                function de(e) {
                    if (e.width && e.height)
                        return e
                }
                function ae(e, t, n=!1) {
                    const r = M(e);
                    return {
                        isUploading: r,
                        isTransferring: r || n,
                        transferProgress: Number(t)
                    }
                }
                function ue(e, t, n) {
                    let r;
                    switch (n) {
                        case "media":
                            r = e=>{
                                const t = O(e);
                                return D(e) || t && !t.isRound && !t.isGif
                            }
                            ;
                            break;
                        case "documents":
                            r = $;
                            break;
                        case "links":
                            r = e=>V(e) || function(e) {
                                const {text: t} = e.content
                                    , n = t && t.text.match(i);
                                if (n)
                                    return {
                                        url: n[0],
                                        domain: n[3]
                                    }
                            }(e);
                            break;
                        case "audio":
                            r = x;
                            break;
                        case "voice":
                            r = e=>{
                                const t = O(e);
                                return F(e) || t && t.isRound
                            }
                            ;
                            break;
                        case "inlineMedia":
                            r = e=>{
                                const t = O(e);
                                return D(e) || t && !t.isRound && !t.isGif || U(e) || j(e)
                            }
                            ;
                            break;
                        default:
                            return []
                    }
                    return t.reduce(((t,n)=>(e[n] && r(e[n]) && t.push(n),
                        t)), [])
                }
                function se(e) {
                    const {audio: t, voice: n, video: r} = L(e)
                        , o = t || n || r || z(e);
                    if (o)
                        return o.duration
                }
                function ie(e, t) {
                    return `${e}_${t}`
                }
                const ce = {
                    missing_payment_information: {
                        field: "cardNumber",
                        message: "Incorrect card number"
                    },
                    invalid_number: {
                        field: "cardNumber",
                        message: "Incorrect card number"
                    },
                    number: {
                        field: "cardNumber",
                        message: "Incorrect card number"
                    },
                    exp_year: {
                        field: "expiry",
                        message: "Incorrect year"
                    },
                    exp_month: {
                        field: "expiry",
                        message: "Incorrect month"
                    },
                    invalid_expiry_year: {
                        field: "expiry",
                        message: "Incorrect year"
                    },
                    invalid_expiry_month: {
                        field: "expiry",
                        message: "Incorrect month"
                    },
                    cvc: {
                        field: "cvv",
                        message: "Incorrect CVV"
                    },
                    invalid_cvc: {
                        field: "cvv",
                        message: "Incorrect CVV"
                    }
                };
                function le(e) {
                    const {message: t, code: n, param: r} = e
                        , {field: o, message: d} = r ? ce[r] : ce[n];
                    return {
                        field: o,
                        message: d,
                        description: t
                    }
                }
            }
            ,
            5527: (e,t,n)=>{
                n.d(t, {
                    Vl: ()=>i,
                    Js: ()=>c,
                    Tq: ()=>l,
                    kM: ()=>f,
                    NB: ()=>h,
                    cS: ()=>m,
                    kw: ()=>p,
                    Z0: ()=>g,
                    kK: ()=>y,
                    db: ()=>v,
                    Rs: ()=>b
                });
                var r = n(3716)
                    , o = n(790)
                    , d = n(782)
                    , a = n(2267)
                    , u = n(5765);
                const s = [1, 8, 5, 2, 7, 4, 6];
                function i(e) {
                    if (e)
                        switch (e.type) {
                            case "userTypeBot":
                            case "userTypeRegular":
                                return e.firstName || e.lastName;
                            case "userTypeDeleted":
                            case "userTypeUnknown":
                                return "Deleted";
                            default:
                                return
                        }
                }
                function c(e) {
                    if (e) {
                        if (h(e))
                            return "Deleted account";
                        switch (e.type) {
                            case "userTypeBot":
                            case "userTypeRegular":
                                if (e.firstName && e.lastName)
                                    return `${e.firstName} ${e.lastName}`;
                                if (e.firstName)
                                    return e.firstName;
                                if (e.lastName)
                                    return e.lastName;
                                break;
                            case "userTypeDeleted":
                            case "userTypeUnknown":
                                return "Deleted account"
                        }
                    }
                }
                function l(e, t, n, d) {
                    if (t.id === r.aw)
                        return e("ServiceNotifications").toLowerCase();
                    if (t.type && "userTypeBot" === t.type)
                        return e("Bot");
                    if (!n)
                        return "";
                    switch (n.type) {
                        case "userStatusEmpty":
                            return e("ALongTimeAgo");
                        case "userStatusLastMonth":
                            return e("WithinAMonth");
                        case "userStatusLastWeek":
                            return e("WithinAWeek");
                        case "userStatusOffline":
                        {
                            const {wasOnline: t} = n;
                            if (!t)
                                return e("LastSeen.Offline");
                            const r = new Date((new Date).getTime() + 1e3 * d)
                                , a = new Date(1e3 * t);
                            if (a >= r)
                                return e("LastSeen.JustNow");
                            const u = new Date(r.getTime() - a.getTime());
                            if (u.getTime() / 1e3 < 60)
                                return e("LastSeen.JustNow");
                            if (u.getTime() / 1e3 < 3600)
                                return e("LastSeen.MinutesAgo", Math.floor(u.getTime() / 1e3 / 60));
                            const s = new Date;
                            if (s.setHours(0, 0, 0, 0),
                            a > new Date(s.getTime() + 1e3 * d))
                                return u.getTime() / 1e3 < 21600 ? e("LastSeen.HoursAgo", Math.floor(u.getTime() / 1e3 / 60 / 60)) : e("LastSeen.TodayAt", (0,
                                    o.mr)(e, a));
                            const i = new Date;
                            return i.setDate(r.getDate() - 1),
                                i.setHours(0, 0, 0, 0),
                                a > new Date(i.getTime() + 1e3 * d) ? e("LastSeen.YesterdayAt", (0,
                                    o.mr)(e, a)) : e("LastSeen.AtDate", (0,
                                    o.Tu)(e, a))
                        }
                        case "userStatusOnline":
                            return e("Online");
                        case "userStatusRecently":
                            return e("Lately");
                        default:
                            return
                    }
                }
                function f(e, t) {
                    const {id: n, type: o} = e;
                    return !!t && n !== r.aw && "userStatusOnline" === t.type && "userTypeBot" !== o
                }
                function h(e) {
                    return !e.noStatus && "userTypeBot" !== e.type && e.id !== r.aw && ("userTypeDeleted" === e.type || "userTypeUnknown" === e.type)
                }
                function m(e) {
                    return "userTypeBot" === e.type
                }
                function p(e) {
                    return !e.isContact && !m(e)
                }
                function g(e, t, n, r, o=0) {
                    return (0,
                        d.Xo)(e, (e=>{
                            const d = (0,
                                a.b)(o);
                            if (r && r.includes(e))
                                return d + 172800 - (r.length - r.indexOf(e));
                            const u = t[e]
                                , s = n[e];
                            if (!u || !s)
                                return 0;
                            if ("userStatusOnline" === s.type)
                                return s.expires;
                            if ("userStatusOffline" === s.type && s.wasOnline)
                                return s.wasOnline;
                            switch (s.type) {
                                case "userStatusRecently":
                                    return d - 86400;
                                case "userStatusLastWeek":
                                    return d - 604800;
                                case "userStatusLastMonth":
                                    return d - 18144e3;
                                default:
                                    return 0
                            }
                        }
                    ), "desc")
                }
                function y(e, t, n, r, o) {
                    if (!n)
                        return e;
                    const d = (0,
                        u.W)(n);
                    return e.filter((e=>{
                            const n = t[e];
                            if (!n)
                                return !1;
                            const a = e === r ? o : c(n);
                            return a && d(a) || d(n.username)
                        }
                    ))
                }
                function v(e) {
                    return "number" == typeof e ? Math.abs(e) : Math.abs(Number(e))
                }
                function b(e) {
                    const t = e ? v(e.id) % 7 : 0;
                    return s[t]
                }
            }
            ,
            6788: (e,t,n)=>{
                n.d(t, {
                    Mg: ()=>a,
                    B1: ()=>u,
                    SL: ()=>s,
                    a4: ()=>i,
                    GL: ()=>c,
                    fZ: ()=>l,
                    Pi: ()=>h,
                    vv: ()=>m,
                    Dd: ()=>p
                });
                var r = n(3716)
                    , o = n(782)
                    , d = n(1638);
                function a(e, t, n) {
                    return {
                        ...e,
                        chats: {
                            ...e.chats,
                            listIds: {
                                ...e.chats.listIds,
                                [t]: n
                            }
                        }
                    }
                }
                function u(e, t, n) {
                    const {[t]: r} = e.chats.listIds
                        , o = null != r && r.length ? n.filter((e=>!r.includes(e))) : n;
                    return r && !o.length ? e : a(e, t, [...r || [], ...o])
                }
                function s(e, t) {
                    return {
                        ...e,
                        chats: {
                            ...e.chats,
                            byId: t
                        }
                    }
                }
                function i(e, t, n, r) {
                    const {byId: o} = e.chats
                        , d = f(e, t, n, r);
                    return d ? s(e, {
                        ...o,
                        [t]: d
                    }) : e
                }
                function c(e, t) {
                    const n = Object.keys(t).reduce(((n,r)=>{
                            const o = f(e, r, t[r]);
                            return o && (n[r] = o),
                                n
                        }
                    ), {});
                    return e = s(e, {
                        ...e.chats.byId,
                        ...n
                    })
                }
                function l(e, t) {
                    const {byId: n} = e.chats;
                    let r = !1;
                    const o = Object.keys(t).reduce(((o,d)=>{
                            if (!n[d] || n[d].isMin && !t[d].isMin) {
                                const n = f(e, d, t[d]);
                                n && (o[d] = n,
                                r || (r = !0))
                            }
                            return o
                        }
                    ), {});
                    return r ? e = s(e, {
                        ...n,
                        ...o
                    }) : e
                }
                function f(e, t, n, r) {
                    const {byId: d} = e.chats
                        , a = d[t]
                        , u = n.isMin && a && !a.isMin
                        , s = {
                        ...a,
                        ...u ? (0,
                            o.CE)(n, ["isMin", "accessHash"]) : n,
                        ...r && {
                            photos: [r, ...a.photos || []]
                        }
                    };
                    if (s.id && s.type)
                        return s
                }
                function h(e, t, n) {
                    const o = n === r.WS ? "archived" : "active";
                    let d = e.chats.listIds;
                    return Object.keys(d).forEach((e=>{
                            const n = d[e] || [];
                            e !== o || n.includes(t) ? e !== o && n.includes(t) && (d = {
                                ...d,
                                [e]: n.filter((e=>e !== t))
                            }) : d = {
                                ...d,
                                [e]: [...n, t]
                            }
                        }
                    )),
                        i(e = {
                            ...e,
                            chats: {
                                ...e.chats,
                                listIds: d
                            }
                        }, t, {
                            folderId: n || void 0
                        })
                }
                function m(e, t, n) {
                    const r = "active" === t ? "all" : "archived";
                    return {
                        ...e,
                        chats: {
                            ...e.chats,
                            ...n.orderedPinnedIds && {
                                orderedPinnedIds: {
                                    ...e.chats.orderedPinnedIds,
                                    [t]: n.orderedPinnedIds
                                }
                            },
                            totalCount: {
                                ...e.chats.totalCount,
                                [r]: n.totalChatCount
                            },
                            isFullyLoaded: {
                                ...e.chats.isFullyLoaded,
                                [t]: !1
                            }
                        }
                    }
                }
                function p(e, t) {
                    const n = (0,
                        d.Ek)(e, t);
                    if (!n)
                        return e;
                    const {[n]: r} = e.chats.listIds;
                    return r && (e = a(e, n, r.filter((e=>e !== t)))),
                        i(e, t, {
                            isNotJoined: !0
                        })
                }
            }
            ,
            9959: (e,t,n)=>{
                n.d(t, {
                    O4: ()=>Q,
                    c_: ()=>o.c_,
                    fZ: ()=>r.fZ,
                    m6: ()=>o.m6,
                    aK: ()=>H,
                    aJ: ()=>V,
                    zn: ()=>M,
                    Sh: ()=>v,
                    $S: ()=>o.$S,
                    bp: ()=>oe,
                    WY: ()=>de,
                    K4: ()=>o.K4,
                    bV: ()=>o.bV,
                    GK: ()=>I,
                    M6: ()=>o.M6,
                    i9: ()=>o.i9,
                    Dd: ()=>r.Dd,
                    vy: ()=>f,
                    rB: ()=>K,
                    g_: ()=>c,
                    Mg: ()=>r.Mg,
                    SL: ()=>r.SL,
                    Pb: ()=>Z,
                    w3: ()=>o.w3,
                    BI: ()=>W,
                    lr: ()=>G,
                    pf: ()=>o.pf,
                    ps: ()=>P,
                    s5: ()=>m,
                    y9: ()=>o.y9,
                    nA: ()=>ee,
                    _7: ()=>ne,
                    Q$: ()=>X,
                    Dq: ()=>re,
                    vT: ()=>Y,
                    QH: ()=>te,
                    Ob: ()=>o.Ob,
                    a4: ()=>r.a4,
                    B1: ()=>r.B1,
                    vv: ()=>r.vv,
                    Pi: ()=>r.Pi,
                    cY: ()=>o.cY,
                    GL: ()=>r.GL,
                    Wy: ()=>o.Wy,
                    wV: ()=>o.wV,
                    cq: ()=>o.cq,
                    rq: ()=>i,
                    No: ()=>k,
                    Og: ()=>T,
                    xv: ()=>L,
                    px: ()=>N,
                    xj: ()=>o.xj,
                    c1: ()=>B,
                    z5: ()=>F,
                    qr: ()=>O,
                    dx: ()=>_,
                    fw: ()=>j,
                    H9: ()=>U,
                    HN: ()=>z,
                    ff: ()=>o.ff,
                    P4: ()=>o.P4,
                    x1: ()=>w,
                    TM: ()=>q,
                    Fn: ()=>o.Fn,
                    Rg: ()=>s,
                    z3: ()=>u,
                    IM: ()=>l,
                    Xg: ()=>o.Xg,
                    j6: ()=>o.j6,
                    lG: ()=>o.lG,
                    IE: ()=>J,
                    Nq: ()=>g,
                    Lm: ()=>C,
                    Q3: ()=>S,
                    eD: ()=>y
                });
                var r = n(6788)
                    , o = n(3495)
                    , d = n(782)
                    , a = n(1638);
                function u(e, t, n, r, o) {
                    const a = r.map((t=>{
                            const n = e.stickers.setsById[t.id];
                            return n ? {
                                ...n,
                                ...t
                            } : t
                        }
                    ));
                    return {
                        ...e,
                        stickers: {
                            ...e.stickers,
                            setsById: {
                                ...e.stickers.setsById,
                                ...(0,
                                    d.ee)(a, "id")
                            },
                            [t]: {
                                ...e.stickers[t],
                                hash: n,
                                ..."search" === t ? {
                                    resultIds: o
                                } : {
                                    setIds: r.map((({id: e})=>e))
                                }
                            }
                        }
                    }
                }
                function s(e, t, n) {
                    const r = e.stickers.setsById[t] || {};
                    return {
                        ...e,
                        stickers: {
                            ...e.stickers,
                            setsById: {
                                ...e.stickers.setsById,
                                [t]: {
                                    ...r,
                                    ...n
                                }
                            }
                        }
                    }
                }
                function i(e, t, n, r) {
                    const {results: o} = e.gifs.search;
                    let d;
                    if (t || !o)
                        d = n;
                    else {
                        const e = new Set(o.map((e=>e.id)));
                        d = [...o, ...n.filter((t=>!e.has(t.id)))]
                    }
                    return {
                        ...e,
                        gifs: {
                            ...e.gifs,
                            search: {
                                ...e.gifs.search,
                                offset: r,
                                results: d
                            }
                        }
                    }
                }
                function c(e, t) {
                    return {
                        ...e,
                        animatedEmojis: t
                    }
                }
                function l(e, t, n, r) {
                    const o = [...(0,
                        a.Pk)(e, t), ...n || []]
                        , u = (0,
                        d.Tw)(o.map((({id: e})=>e)))
                        , s = (0,
                        d.ee)(o, "id")
                        , i = u.map((e=>s[e]));
                    return {
                        ...e,
                        stickers: {
                            ...e.stickers,
                            forEmoji: {
                                emoji: t,
                                stickers: i,
                                hash: r
                            }
                        }
                    }
                }
                function f(e) {
                    const {emoji: t, stickers: n, hash: r} = e.stickers.forEmoji || {};
                    return t ? l(e, t, n, r) : e
                }
                var h = n(735);
                function m(e, t) {
                    return {
                        ...e,
                        users: {
                            ...e.users,
                            byId: t
                        }
                    }
                }
                function p(e, t) {
                    const {userIds: n} = e.contactList || {};
                    if (!n)
                        return e;
                    const r = t.filter((e=>(null == e ? void 0 : e.isContact) && !n.includes(e.id))).map((e=>e.id));
                    return 0 === r.length ? e : {
                        ...e,
                        contactList: {
                            userIds: [...r, ...n]
                        }
                    }
                }
                function g(e, t, n) {
                    const {byId: r} = e.users
                        , o = b(e, t, n);
                    return o ? m(e = p(e, [o]), {
                        ...r,
                        [t]: o
                    }) : e
                }
                function y(e, t) {
                    const n = Object.keys(t).reduce(((n,r)=>{
                            const o = b(e, r, t[r]);
                            return o && (n[r] = o),
                                n
                        }
                    ), {});
                    return e = p(e = m(e, {
                        ...e.users.byId,
                        ...n
                    }), Object.values(n))
                }
                function v(e, t) {
                    const {byId: n} = e.users;
                    let r = !1;
                    const o = Object.keys(t).reduce(((o,d)=>{
                            if (!n[d] || n[d].isMin && !t[d].isMin) {
                                const n = b(e, d, t[d]);
                                n && (o[d] = n,
                                r || (r = !0))
                            }
                            return o
                        }
                    ), {});
                    return r ? e = p(e = m(e, {
                        ...n,
                        ...o
                    }), Object.values(o)) : e
                }
                function b(e, t, n) {
                    const {byId: r} = e.users
                        , o = r[t]
                        , a = n.isMin && o && !o.isMin
                        , u = {
                        ...o,
                        ...a ? (0,
                            d.CE)(n, ["isMin", "accessHash"]) : n
                    };
                    if (u.id && u.type)
                        return u
                }
                function w(e, t) {
                    return e.users.selectedId === t ? e : {
                        ...e,
                        users: {
                            ...e.users,
                            selectedId: t
                        }
                    }
                }
                function I(e, t) {
                    const {byId: n} = e.users
                        , {userIds: r} = e.contactList || {};
                    return m(e = {
                        ...e,
                        contactList: {
                            userIds: r ? r.filter((e=>e !== t)) : h.D
                        }
                    }, {
                        ...n,
                        [t]: {
                            ...n[t],
                            isContact: void 0
                        }
                    })
                }
                function C(e, t) {
                    return {
                        ...e,
                        userSearch: {
                            ...e.userSearch,
                            ...t
                        }
                    }
                }
                function S(e, t) {
                    return C(e, {
                        fetchingStatus: t
                    })
                }
                function E(e, t, n) {
                    const {byId: r} = e.users
                        , o = r[t];
                    return o && o.fullInfo ? g(e, t, {
                        ...o,
                        fullInfo: {
                            ...o.fullInfo,
                            isBlocked: n
                        }
                    }) : e
                }
                function P(e, t) {
                    return {
                        ...e,
                        users: {
                            ...e.users,
                            statusesById: t
                        }
                    }
                }
                function M(e, t) {
                    const {statusesById: n} = e.users
                        , r = Object.keys(t).filter((e=>!n[e]));
                    return r.length ? e = P(e, {
                        ...n,
                        ...(0,
                            d.ei)(t, r)
                    }) : e
                }
                const A = e=>`${e.chatId}_${e.id}`;
                function k(e, t) {
                    return {
                        ...e,
                        globalSearch: {
                            ...e.globalSearch,
                            ...t
                        }
                    }
                }
                function T(e, t) {
                    return k(e, {
                        currentContent: t
                    })
                }
                function N(e, t, n, r, o) {
                    var a;
                    const {resultsByType: u} = e.globalSearch || {}
                        , s = t.reduce(((e,t)=>(e[A(t)] = t,
                        e)), {})
                        , i = null == u || null === (a = u[r]) || void 0 === a ? void 0 : a.foundIds;
                    if (void 0 !== i && Object.keys(s).every((e=>i.includes(A(s[e])))))
                        return L(e, {
                            messages: !1
                        });
                    const c = i || []
                        , l = t.map((e=>A(e)))
                        , f = Array.prototype.concat(c, l)
                        , h = (0,
                        d.et)(c, f) ? c : f;
                    return k(e = L(e, {
                        messages: !1
                    }), {
                        resultsByType: {
                            ...(e.globalSearch || {}).resultsByType,
                            [r]: {
                                totalCount: n,
                                nextOffsetId: o,
                                foundIds: h
                            }
                        }
                    })
                }
                function L(e, t) {
                    return k(e, {
                        fetchingStatus: {
                            ...e.globalSearch.fetchingStatus,
                            ...t
                        }
                    })
                }
                var R = n(2858);
                function D(e, t, n) {
                    return {
                        ...e,
                        localTextSearch: {
                            byChatThreadKey: {
                                ...e.localTextSearch.byChatThreadKey,
                                [t]: n
                            }
                        }
                    }
                }
                function O(e, t, n, r, o) {
                    const d = (0,
                        R.uw)(t, n);
                    return D(e, d, {
                        ...e.localTextSearch.byChatThreadKey[d],
                        isActive: r,
                        query: o
                    })
                }
                function Z(e, t, n, r, o, d) {
                    const a = (0,
                        R.uw)(t, n);
                    return D(e, a, {
                        ...e.localTextSearch.byChatThreadKey[a],
                        results: {
                            foundIds: r,
                            totalCount: o,
                            nextOffsetId: d
                        }
                    })
                }
                function _(e, t, n, r, o, a) {
                    const u = (0,
                        R.uw)(t, n)
                        , {results: s} = e.localTextSearch.byChatThreadKey[u] || {}
                        , i = (null == s ? void 0 : s.foundIds) || []
                        , c = $((0,
                        d.Tw)(Array.prototype.concat(i, r)));
                    return Z(e, t, n, (0,
                        d.et)(i, c) ? i : c, o, a)
                }
                function x(e, t, n) {
                    return {
                        ...e,
                        localMediaSearch: {
                            byChatId: {
                                ...e.localMediaSearch.byChatId,
                                [t]: n
                            }
                        }
                    }
                }
                function F(e, t, n) {
                    return x(e, t, {
                        ...e.localMediaSearch.byChatId[t],
                        currentType: n
                    })
                }
                function B(e, t, n, r, o, a) {
                    const {resultsByType: u} = e.localMediaSearch.byChatId[t] || {}
                        , s = null != u && u[n] ? u[n].foundIds : []
                        , i = $((0,
                        d.Tw)(Array.prototype.concat(s, r)));
                    return function(e, t, n, r, o, d) {
                        return x(e, t, {
                            ...e.localMediaSearch.byChatId[t],
                            resultsByType: {
                                ...(e.localMediaSearch.byChatId[t] || {}).resultsByType,
                                [n]: {
                                    foundIds: r,
                                    totalCount: o,
                                    nextOffsetId: d
                                }
                            }
                        })
                    }(e, t, n, (0,
                        d.et)(s, i) ? s : i, o, a)
                }
                function $(e) {
                    return e.sort(((e,t)=>e - t))
                }
                function U(e, t) {
                    return {
                        ...e,
                        management: {
                            ...e.management,
                            progress: t
                        }
                    }
                }
                function j(e, t, n) {
                    return {
                        ...e,
                        management: {
                            ...e.management,
                            byChatId: {
                                ...e.management.byChatId,
                                [t]: {
                                    ...e.management.byChatId[t] || {},
                                    ...n
                                }
                            }
                        }
                    }
                }
                function W(e, t) {
                    return {
                        ...e,
                        settings: {
                            ...e.settings,
                            byKey: {
                                ...e.settings.byKey,
                                ...t
                            }
                        }
                    }
                }
                function G(e, t, n) {
                    return {
                        ...e,
                        settings: {
                            ...e.settings,
                            themes: {
                                ...e.settings.themes,
                                [t]: {
                                    ...e.settings.themes[t] || {},
                                    ...n
                                }
                            }
                        }
                    }
                }
                function V(e, t) {
                    return t.forEach((t=>{
                            const {chatId: n, ...r} = t;
                            e = H(e, n, r)
                        }
                    )),
                        e
                }
                function H(e, t, n) {
                    return {
                        ...e,
                        settings: {
                            ...e.settings,
                            notifyExceptions: {
                                ...e.settings.notifyExceptions,
                                [t]: n
                            }
                        }
                    }
                }
                function z(e, t, n, r) {
                    switch (t) {
                        case "contact":
                            return W(e, {
                                ...void 0 !== n && {
                                    hasPrivateChatsNotifications: !n
                                },
                                ...void 0 !== r && {
                                    hasPrivateChatsMessagePreview: r
                                }
                            });
                        case "group":
                            return W(e, {
                                ...void 0 !== n && {
                                    hasGroupNotifications: !n
                                },
                                ...void 0 !== r && {
                                    hasGroupMessagePreview: r
                                }
                            });
                        case "broadcast":
                            return W(e, {
                                ...void 0 !== n && {
                                    hasBroadcastNotifications: !n
                                },
                                ...void 0 !== r && {
                                    hasBroadcastMessagePreview: r
                                }
                            });
                        default:
                            return
                    }
                }
                function Q(e, t) {
                    return e = E(e, t, !0),
                        {
                            ...e,
                            blocked: {
                                ...e.blocked,
                                ids: [t, ...e.blocked.ids],
                                totalCount: e.blocked.totalCount + 1
                            }
                        }
                }
                function K(e, t) {
                    return e = E(e, t, !1),
                        {
                            ...e,
                            blocked: {
                                ...e.blocked,
                                ids: e.blocked.ids.filter((e=>e !== t)),
                                totalCount: e.blocked.totalCount - 1
                            }
                        }
                }
                function J(e, t) {
                    return {
                        ...e,
                        twoFaSettings: {
                            ...e.twoFaSettings,
                            ...t
                        }
                    }
                }
                function q(e, t) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            shippingOptions: t
                        }
                    }
                }
                function Y(e, t) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            requestId: t
                        }
                    }
                }
                function X(e, t) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            step: t
                        }
                    }
                }
                function ee(e, t) {
                    if (!t.content || !t.content.invoice)
                        return e;
                    const {title: n, text: r, amount: o, currency: d, isTest: a, photoUrl: u} = t.content.invoice;
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            invoiceContent: {
                                title: n,
                                text: r,
                                photoUrl: u,
                                amount: o,
                                currency: d,
                                isTest: a
                            }
                        }
                    }
                }
                function te(e, t) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            stripeCredentials: {
                                ...t
                            }
                        }
                    }
                }
                function ne(e, t) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            ...t
                        }
                    }
                }
                function re(e, t, n) {
                    if (!t || !n)
                        return {
                            ...e,
                            payment: {
                                ...e.payment,
                                receipt: void 0
                            }
                        };
                    const {invoice: r} = n.content
                        , {photoUrl: o, text: d, title: a} = r || {};
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            receipt: {
                                ...t,
                                photoUrl: o,
                                text: d,
                                title: a
                            }
                        }
                    }
                }
                function oe(e) {
                    return {
                        ...e,
                        payment: {}
                    }
                }
                function de(e) {
                    return {
                        ...e,
                        payment: {
                            ...e.payment,
                            isPaymentModalOpen: !1
                        }
                    }
                }
            }
            ,
            3495: (e,t,n)=>{
                n.d(t, {
                    Wy: ()=>u,
                    pf: ()=>c,
                    m6: ()=>l,
                    c_: ()=>f,
                    cY: ()=>h,
                    P4: ()=>m,
                    K4: ()=>p,
                    bV: ()=>g,
                    xj: ()=>y,
                    ff: ()=>v,
                    $S: ()=>w,
                    y9: ()=>I,
                    Xg: ()=>C,
                    j6: ()=>S,
                    w3: ()=>E,
                    cq: ()=>P,
                    Fn: ()=>M,
                    wV: ()=>A,
                    M6: ()=>k,
                    Ob: ()=>T,
                    i9: ()=>N,
                    lG: ()=>L
                });
                var r = n(6137)
                    , o = n(3716)
                    , d = n(1638)
                    , a = n(782);
                function u(e, t, n=r._f, d="thread", a) {
                    const {messageLists: u} = e.messages;
                    let s = u;
                    if (a || o.Cg)
                        s = t ? [{
                            chatId: t,
                            threadId: n,
                            type: d
                        }] : [];
                    else if (t) {
                        const e = u[u.length - 1];
                        e && e.chatId === t && e.threadId === n && e.type === d || (s = e && e.chatId === o.AJ ? [...u.slice(0, -1), {
                            chatId: t,
                            threadId: n,
                            type: d
                        }] : [...u, {
                            chatId: t,
                            threadId: n,
                            type: d
                        }])
                    } else
                        s = u.slice(0, -1);
                    return {
                        ...e,
                        messages: {
                            ...e.messages,
                            messageLists: s
                        }
                    }
                }
                function s(e, t, n) {
                    return i(e, t, {
                        byId: n
                    })
                }
                function i(e, t, n) {
                    const r = e.messages.byChatId[t] || {
                        byId: {},
                        threadsById: {}
                    };
                    return {
                        ...e,
                        messages: {
                            ...e.messages,
                            byChatId: {
                                ...e.messages.byChatId,
                                [t]: {
                                    ...r,
                                    ...n
                                }
                            }
                        }
                    }
                }
                function c(e, t, n, r, o) {
                    return function(e, t, n, r) {
                        const o = e.messages.byChatId[t];
                        return i(e, t, {
                            threadsById: {
                                ...null == o ? void 0 : o.threadsById,
                                [n]: {
                                    ...null == o ? void 0 : o.threadsById[n],
                                    ...r
                                }
                            }
                        })
                    }(e, t, n, {
                        [r]: o
                    })
                }
                function l(e, t) {
                    const n = t.reduce(((e,t)=>(e[t.chatId] || (e[t.chatId] = {}),
                        e[t.chatId][t.id] = t,
                        e)), {});
                    return Object.keys(n).forEach((t=>{
                            e = f(e, t, n[t])
                        }
                    )),
                        e
                }
                function f(e, t, n) {
                    const r = (0,
                        d.Zw)(e, t);
                    return r && Object.keys(n).every((e=>Boolean(r[Number(e)]))) ? e : s(e, t, {
                        ...n,
                        ...r
                    })
                }
                function h(e, t, n, r) {
                    const o = (0,
                        d.Zw)(e, t) || {}
                        , a = {
                        ...o[n],
                        ...r
                    };
                    return a.id ? s(e, t, {
                        ...o,
                        [n]: a
                    }) : e
                }
                function m(e, t, n, r) {
                    const o = (0,
                        d.Fn)(e, t) || {}
                        , a = {
                        ...o[n],
                        ...r
                    };
                    return a.id ? E(e, t, {
                        ...o,
                        [n]: a
                    }) : e
                }
                function p(e, t, n) {
                    const r = (0,
                        d.Zw)(e, t);
                    if (!r)
                        return e;
                    const o = (0,
                        a.CE)(r, n)
                        , i = Object.values((0,
                        a.q0)(r, n)).filter((({forwardInfo: e})=>null == e ? void 0 : e.isLinkedChannelPost));
                    if (Object.keys(e.messages.byChatId[t].threadsById).map(Number).forEach((r=>{
                            const o = (0,
                                d.tZ)(e, t, r);
                            let a = (0,
                                d.gb)(e, t, r)
                                , u = (0,
                                d.qC)(e, t, r)
                                , s = (0,
                                d.Cb)(e, t, r)
                                , i = (0,
                                d.KB)(e, t)
                                , l = null == o ? void 0 : o.messagesCount;
                            n.forEach((e=>{
                                    a && a.includes(e) && (a = a.filter((t=>t !== e)),
                                    void 0 !== l && (l -= 1)),
                                    u && u.includes(e) && (u = u.filter((t=>t !== e))),
                                    s && s.includes(e) && (s = s.filter((t=>t !== e))),
                                    i && i.includes(e) && (i = i.filter((t=>t !== e)))
                                }
                            )),
                                e = c(e, t, r, "listedIds", a),
                                e = c(e, t, r, "outlyingIds", u),
                                e = c(e, t, r, "viewportIds", s),
                                e = c(e, t, r, "pinnedIds", i),
                            o && void 0 !== l && (e = c(e, t, r, "threadInfo", {
                                ...o,
                                messagesCount: l
                            }))
                        }
                    )),
                        i.length) {
                        const n = (0,
                            d.Bt)(e)
                            , r = n && n.chatId === t && "thread" === n.type
                            , o = null == n ? void 0 : n.threadId;
                        i.forEach((n=>{
                                const {fromChatId: a, fromMessageId: s} = n.forwardInfo
                                    , i = (0,
                                    d.hj)(e, a, s);
                                r && o === s && (e = u(e, t)),
                                i && (e = h(e, a, s, {
                                    threadInfo: void 0
                                }))
                            }
                        ))
                    }
                    return e = s(e, t, o)
                }
                function g(e, t, n) {
                    const o = (0,
                        d.Fn)(e, t);
                    if (!o)
                        return e;
                    const u = (0,
                        a.CE)(o, n);
                    let s = (0,
                        d.qy)(e, t);
                    return s && (n.forEach((e=>{
                            s.includes(e) && (s = s.filter((t=>t !== e)))
                        }
                    )),
                        e = c(e, t, r._f, "scheduledIds", s)),
                        E(e, t, u)
                }
                function y(e, t, n, r) {
                    const o = (0,
                        d.gb)(e, t, n)
                        , a = null != o && o.length ? r.filter((e=>!o.includes(e))) : r;
                    return o && !a.length ? e : c(e, t, n, "listedIds", b([...o || [], ...a]))
                }
                function v(e, t, n, r) {
                    const o = (0,
                        d.qC)(e, t, n)
                        , a = null != o && o.length ? r.filter((e=>!o.includes(e))) : r;
                    return o && !a.length ? e : c(e, t, n, "outlyingIds", b([...o || [], ...a]))
                }
                function b(e) {
                    return e.sort(((e,t)=>e - t))
                }
                function w(e, t, n, r) {
                    const a = (0,
                        d.Cb)(e, t, n) || [];
                    return a.includes(r) ? e : c(e, t, n, "viewportIds", b([...a.length < o.YQ ? a : a.slice(-o.hT / 2), r]))
                }
                function I(e, t, n, r) {
                    const o = (0,
                        d.Cb)(e, t, n) || []
                        , u = b(r);
                    return c(e, t, n, "viewportIds", (0,
                        a.et)(o, u) ? o : u)
                }
                function C(e, t, n, r) {
                    const o = {
                        ...(0,
                            d.tZ)(e, t, n),
                        ...r
                    };
                    return o.threadId ? c(e, t, n, "threadInfo", o) : e
                }
                function S(e, t, n) {
                    return n.forEach((t=>{
                            e = C(e, t.chatId, t.threadId, t)
                        }
                    )),
                        e
                }
                function E(e, t, n) {
                    return function(e, t, n) {
                        const r = e.scheduledMessages.byChatId[t] || {
                            byId: {},
                            hash: 0
                        };
                        return {
                            ...e,
                            scheduledMessages: {
                                byChatId: {
                                    ...e.scheduledMessages.byChatId,
                                    [t]: {
                                        ...r,
                                        ...n
                                    }
                                }
                            }
                        }
                    }(e, t, {
                        byId: n
                    })
                }
                function P(e, t, n, r=!1, o=!1) {
                    return {
                        ...e,
                        focusedMessage: {
                            ...e.focusedMessage,
                            chatId: t,
                            messageId: n,
                            noHighlight: r,
                            isResizingContainer: o
                        }
                    }
                }
                function M(e, t, n) {
                    return {
                        ...e,
                        messages: {
                            ...e.messages,
                            sponsoredByChatId: {
                                ...e.messages.sponsoredByChatId,
                                [t]: n
                            }
                        }
                    }
                }
                function A(e, t) {
                    return {
                        ...e,
                        focusedMessage: {
                            ...e.focusedMessage,
                            direction: t
                        }
                    }
                }
                function k(e, t, n) {
                    return {
                        ...e,
                        selectedMessages: {
                            chatId: t,
                            messageIds: n ? Array.prototype.concat([], n) : []
                        }
                    }
                }
                function T(e, t, n, r, o, u, s, i=!1) {
                    const {selectedMessages: c} = e;
                    u && (s = (0,
                        d.xH)(e, t, u));
                    const l = s || [o];
                    if (!c)
                        return k(e, t, l);
                    const {messageIds: f} = c;
                    let h;
                    const m = l.filter((e=>!f.includes(e)));
                    if (m && !m.length)
                        h = f.filter((e=>!l.includes(e)));
                    else if (i && f.length) {
                        const u = (0,
                            d.$W)(e, t, n, r)
                            , s = u.indexOf(f[f.length - 1])
                            , i = u.indexOf(o)
                            , c = Math.min(s, i)
                            , l = Math.max(s, i)
                            , m = u.slice(c, l + 1);
                        h = (0,
                            a.Tw)([...f, ...m])
                    } else
                        h = [...f, ...m];
                    return h.length ? {
                        ...e,
                        selectedMessages: {
                            ...c,
                            messageIds: h
                        }
                    } : N(e)
                }
                function N(e) {
                    return {
                        ...e,
                        selectedMessages: void 0
                    }
                }
                function L(e, t, n, r, o) {
                    const {channelPostId: a, fromChatId: u} = t.forwardInfo || {};
                    if (a && u) {
                        const t = (0,
                            d.tZ)(e, n, a);
                        t && (e = c(e, n, a, "threadInfo", {
                            ...t,
                            lastMessageId: r,
                            messagesCount: t.messagesCount + (o ? -1 : 1)
                        }))
                    }
                    return e
                }
            }
            ,
            8857: (e,t,n)=>{
                n.d(t, {
                    Z1: ()=>s,
                    Dg: ()=>i,
                    FM: ()=>c,
                    xo: ()=>l,
                    P_: ()=>f,
                    YK: ()=>h,
                    IK: ()=>m,
                    pk: ()=>p,
                    g4: ()=>g,
                    N: ()=>y,
                    Ek: ()=>v,
                    Mw: ()=>b,
                    ep: ()=>w,
                    DI: ()=>I,
                    A1: ()=>C,
                    UW: ()=>S,
                    _5: ()=>E
                });
                var r = n(6137)
                    , o = n(2858)
                    , d = n(6376)
                    , a = n(3716)
                    , u = n(2913);
                function s(e, t) {
                    return e.chats.byId[t]
                }
                function i(e, t) {
                    const n = (0,
                        o.zX)(t);
                    return !!n && (0,
                        d.dy)(e, n)
                }
                function c(e, t) {
                    return t === e.currentUserId
                }
                function l(e, t) {
                    const n = i(e, t);
                    return n && (0,
                        o.cS)(n)
                }
                function f(e) {
                    return Object.values(e.chats.byId).find((({isSupport: e})=>e))
                }
                function h(e, t) {
                    if (!(0,
                        o.YC)(t.id) && !(0,
                        o.eA)(t) && t.fullInfo)
                        return t.fullInfo.members && t.fullInfo.members.length !== a.mo ? t.fullInfo.members.reduce(((t,{userId: n})=>n !== e.currentUserId && e.users.byId[n] && (0,
                            o.kM)(e.users.byId[n], e.users.statusesById[n]) ? t + 1 : t), 0) : t.fullInfo.onlineCount
                }
                function m(e, t) {
                    const n = s(e, t)
                        , r = n && (0,
                        o.zX)(n)
                        , a = r && (0,
                        d.dy)(e, r);
                    if (a && (0,
                        o.cS)(a))
                        return a
                }
                function p(e, t) {
                    const n = s(e, t)
                        , d = m(e, t);
                    if (!n || !d)
                        return !1;
                    if (n.lastMessage && (0,
                        o.CD)(n.lastMessage))
                        return !0;
                    const a = e.messages.byChatId[t];
                    if (!a)
                        return !1;
                    const {listedIds: u} = a.threadsById[r._f] || {};
                    return u && !u.length
                }
                function g(e) {
                    return Boolean(e.chats.listIds.active)
                }
                function y(e, t, n) {
                    const {listIds: r} = e.chats;
                    if (n) {
                        const e = r[n];
                        return Boolean(e && e.includes(t))
                    }
                    return Object.values(r).some((e=>e && e.includes(t)))
                }
                function v(e, t) {
                    const n = s(e, t);
                    if (n && y(e, t))
                        return n.folderId === a.WS ? "archived" : "active"
                }
                function b(e, t) {
                    return e.chatFolders.byId[t]
                }
                function w(e, t, n=a.Nf) {
                    const {active: r, archived: o} = e.chats.orderedPinnedIds;
                    if (n === a.Nf)
                        return !!r && r.includes(t);
                    if (n === a.WS)
                        return !!o && o.includes(t);
                    const {byId: d} = e.chatFolders
                        , {pinnedChatIds: u} = d[n] || {};
                    return !!u && u.includes(t)
                }
                function I(e, t) {
                    const n = t.toLowerCase();
                    return Object.values(e.chats.byId).find((e=>e.username && e.username.toLowerCase() === n))
                }
                function C(e) {
                    const t = e.chats.listIds.active;
                    if (!t)
                        return 0;
                    const n = e.chats.byId
                        , r = (0,
                        u.d)(e)
                        , d = (0,
                        u.N)(e);
                    return t.reduce(((e,t)=>{
                            const a = n[t];
                            return !(a && a.unreadCount && a.isListed) || a.isNotJoined || a.isRestricted || !a.unreadMentionsCount && (0,
                                o.i4)(a, r, d) ? e : e + a.unreadCount
                        }
                    ), 0)
                }
                function S(e) {
                    return Boolean(s(e, a.aw))
                }
                function E(e, t) {
                    var n;
                    const r = s(e, t);
                    if (!r)
                        return;
                    const o = null == r || null === (n = r.fullInfo) || void 0 === n ? void 0 : n.sendAsId;
                    return o ? (0,
                        d.dy)(e, o) || s(e, o) : void 0
                }
            }
            ,
            1638: (e,t,n)=>{
                n.d(t, {
                    hg: ()=>Q,
                    xs: ()=>ce,
                    _k: ()=>de,
                    zB: ()=>y,
                    tH: ()=>v,
                    Oh: ()=>b,
                    g4: ()=>u.g4,
                    bH: ()=>Se,
                    __: ()=>Pe,
                    xl: ()=>ae,
                    Nu: ()=>se,
                    nB: ()=>ue,
                    Z1: ()=>u.Z1,
                    IK: ()=>u.IK,
                    DI: ()=>u.DI,
                    Mw: ()=>u.Mw,
                    Ek: ()=>u.Ek,
                    hj: ()=>J,
                    ZB: ()=>X,
                    Zw: ()=>A,
                    YK: ()=>u.YK,
                    Dg: ()=>u.Dg,
                    X5: ()=>pe,
                    A1: ()=>u.A1,
                    jr: ()=>M,
                    yN: ()=>f,
                    JX: ()=>Ue,
                    pP: ()=>_e,
                    we: ()=>Oe,
                    og: ()=>De,
                    $W: ()=>R,
                    Bt: ()=>P,
                    y5: ()=>l,
                    n5: ()=>Re,
                    q6: ()=>Le,
                    Ms: ()=>$,
                    _$: ()=>F,
                    kK: ()=>Y,
                    wU: ()=>B,
                    yZ: ()=>W,
                    It: ()=>he,
                    G$: ()=>ee,
                    y8: ()=>ve,
                    cv: ()=>oe,
                    ku: ()=>Te,
                    pk: ()=>u.pk,
                    N: ()=>u.N,
                    ep: ()=>u.ep,
                    xo: ()=>u.xo,
                    FM: ()=>u.FM,
                    a6: ()=>we,
                    te: ()=>ie,
                    Ev: ()=>me,
                    CA: ()=>ge,
                    zQ: ()=>xe,
                    _X: ()=>te,
                    EV: ()=>ke,
                    vk: ()=>ye,
                    Jf: ()=>Be,
                    UW: ()=>u.UW,
                    s4: ()=>s.s4,
                    b9: ()=>K,
                    VF: ()=>Ae,
                    gb: ()=>N,
                    CP: ()=>w,
                    cu: ()=>I,
                    ji: ()=>C,
                    aW: ()=>Ze,
                    xH: ()=>be,
                    FT: ()=>Ce,
                    tV: ()=>U,
                    NJ: ()=>Qe.N,
                    dZ: ()=>Qe.d,
                    dT: ()=>ne,
                    qC: ()=>L,
                    gx: ()=>je,
                    eh: ()=>Ge,
                    Mz: ()=>We,
                    sp: ()=>Ve,
                    KB: ()=>O,
                    $$: ()=>He,
                    rd: ()=>fe,
                    p9: ()=>G,
                    Yy: ()=>x,
                    Wq: ()=>Fe,
                    qy: ()=>Z,
                    Tm: ()=>q,
                    Fn: ()=>k,
                    Vt: ()=>_,
                    D7: ()=>Ie,
                    _5: ()=>u._5,
                    Ur: ()=>re,
                    yB: ()=>Me,
                    fS: ()=>Ne,
                    Ny: ()=>h,
                    E_: ()=>m,
                    Pk: ()=>p,
                    i3: ()=>ze,
                    P_: ()=>u.P_,
                    Pu: ()=>$e,
                    Db: ()=>z,
                    tZ: ()=>j,
                    Cm: ()=>V,
                    qS: ()=>H,
                    uZ: ()=>le,
                    dy: ()=>s.dy,
                    ss: ()=>s.ss,
                    Cb: ()=>D
                });
                var r = n(1713)
                    , o = n(7361)
                    , d = n(6137)
                    , a = n(3716)
                    , u = n(8857)
                    , s = n(6376)
                    , i = n(2858)
                    , c = n(782);
                function l(e) {
                    return e.stickers.search
                }
                function f(e) {
                    return e.gifs.search
                }
                function h(e, t) {
                    return e.stickers.setsById[t]
                }
                function m(e, t) {
                    return Object.values(e.stickers.setsById).find((e=>e.shortName.toLowerCase() === t.toLowerCase()))
                }
                function p(e, t) {
                    const n = Object.values(e.stickers.setsById);
                    let r = [];
                    return e.stickers.favorite.stickers.forEach((e=>{
                            e.emoji === t && r.push(e)
                        }
                    )),
                        n.forEach((({packs: e})=>{
                                if (!e)
                                    return;
                                const n = e[t];
                                n && (r = r.concat(n))
                            }
                        )),
                        r
                }
                function g(e) {
                    return e.replace("️", "")
                }
                function y(e, t) {
                    const {animatedEmojis: n} = e;
                    if (!n || !n.stickers)
                        return;
                    const r = g(t);
                    return n.stickers.find((e=>e.emoji === t || e.emoji === r))
                }
                function v(e, t) {
                    const {animatedEmojiEffects: n} = e;
                    if (!n || !n.stickers)
                        return;
                    const r = g(t);
                    return n.stickers.find((e=>e.emoji === t || e.emoji === r))
                }
                function b(e, t) {
                    var n;
                    return null == e || null === (n = e.appConfig) || void 0 === n ? void 0 : n.emojiSounds[g(t)]
                }
                function w(e, t) {
                    const n = g(t);
                    return "🍑" === n ? "Peach" : "🍆" === n ? "Eggplant" : void 0
                }
                function I(e) {
                    return "Eggplant" === e ? "Cumshot" : void 0
                }
                function C(e) {
                    return "Cumshot" === e ? "🍆" : void 0
                }
                var S = n(2267)
                    , E = n(735);
                function P(e) {
                    const {messageLists: t} = e.messages;
                    if (t.length)
                        return t[t.length - 1]
                }
                function M(e) {
                    const {chatId: t} = P(e) || {};
                    return t ? (0,
                        u.Z1)(e, t) : void 0
                }
                function A(e, t) {
                    var n;
                    return null === (n = e.messages.byChatId[t]) || void 0 === n ? void 0 : n.byId
                }
                function k(e, t) {
                    var n;
                    return null === (n = e.scheduledMessages.byChatId[t]) || void 0 === n ? void 0 : n.byId
                }
                function T(e, t, n, r) {
                    const o = e.messages.byChatId[t];
                    if (!o)
                        return;
                    const d = o.threadsById[n];
                    return d ? d[r] : void 0
                }
                function N(e, t, n) {
                    return T(e, t, n, "listedIds")
                }
                function L(e, t, n) {
                    return T(e, t, n, "outlyingIds")
                }
                function R(e, t, n, r) {
                    switch (r) {
                        case "thread":
                            return D(e, t, n);
                        case "pinned":
                            return O(e, t);
                        case "scheduled":
                            return Z(e, t)
                    }
                }
                function D(e, t, n) {
                    return T(e, t, n, "viewportIds")
                }
                function O(e, t) {
                    return T(e, t, d._f, "pinnedIds")
                }
                function Z(e, t) {
                    return T(e, t, d._f, "scheduledIds")
                }
                function _(e, t, n) {
                    return T(e, t, n, "scrollOffset")
                }
                function x(e, t, n) {
                    return T(e, t, n, "replyingToId")
                }
                function F(e, t, n) {
                    return T(e, t, n, "editingId")
                }
                function B(e, t) {
                    return T(e, t, d._f, "editingScheduledId")
                }
                function $(e, t, n) {
                    return T(e, t, n, "draft")
                }
                function U(e, t, n) {
                    return T(e, t, n, "noWebPage")
                }
                function j(e, t, n) {
                    return T(e, t, n, "threadInfo")
                }
                function W(e, t, n) {
                    return T(e, t, n, "firstMessageId")
                }
                function G(e, t, n) {
                    return T(e, t, n, "replyStack")
                }
                function V(e, t, n) {
                    if (n === d._f)
                        return (0,
                            u.Z1)(e, t);
                    const r = j(e, t, n);
                    return r ? (0,
                        u.Z1)(e, r.originChannelId || t) : void 0
                }
                function H(e, t, n) {
                    if (n === d._f)
                        return;
                    const r = j(e, t, n);
                    return r ? r.topMessageId : void 0
                }
                function z(e, t, n) {
                    const r = e.messages.byChatId[t];
                    if (!r)
                        return;
                    const {replyToMessageId: o, replyToTopMessageId: d} = n;
                    return o || d ? Object.values(r.threadsById).find((e=>e.threadInfo && (o && o === e.threadInfo.topMessageId || d && d === e.threadInfo.topMessageId))) : void 0
                }
                function Q(e, t, n) {
                    const r = P(e);
                    if (!r)
                        return !1;
                    const {threadInfo: o} = z(e, t, n) || {};
                    return t === r.chatId && (r.threadId === d._f || o && r.threadId === o.threadId)
                }
                function K(e, t, n) {
                    const r = D(e, t, n);
                    if (!r || !r.length)
                        return !0;
                    let o;
                    if (n === d._f) {
                        const n = (0,
                            u.Z1)(e, t);
                        if (!n || !n.lastMessage)
                            return !0;
                        o = n.lastMessage.id
                    } else {
                        const r = j(e, t, n);
                        if (!r || !r.lastMessageId)
                            return;
                        o = r.lastMessageId
                    }
                    return o >= a.AE && !J(e, t, o) || r[r.length - 1] >= o
                }
                function J(e, t, n) {
                    const r = A(e, t);
                    return r ? r[n] : void 0
                }
                function q(e, t, n) {
                    const r = k(e, t);
                    return r ? r[n] : void 0
                }
                function Y(e, t, n, r) {
                    if ("scheduled" === r) {
                        const n = B(e, t);
                        return n ? q(e, t, n) : void 0
                    }
                    {
                        const r = F(e, t, n);
                        return r ? J(e, t, r) : void 0
                    }
                }
                function X(e, t) {
                    let n;
                    for (const r of Object.values(e.messages.byChatId)) {
                        const {byId: e} = r;
                        if (n = Object.values(e).find((e=>e.content.poll && e.content.poll.id === t)),
                            n)
                            break
                    }
                    return n
                }
                function ee(e, t) {
                    const {chatId: n, messageId: r} = e.focusedMessage || {};
                    return n === t ? r : void 0
                }
                function te(e, t) {
                    const n = ee(e, t.chatId);
                    return !!n && (n === t.id || n === t.previousLocalId)
                }
                function ne(e, t, n=!1) {
                    return function(e, t) {
                        const {lastReadOutboxMessageId: n} = (0,
                            u.Z1)(e, t.chatId) || {};
                        return (0,
                            i.CI)(t) || !n || n < t.id
                    }(e, t) || n ? (0,
                        i.RI)(t) : "read"
                }
                function re(e, t) {
                    const {senderId: n} = t;
                    if (n)
                        return (0,
                            i.YC)(n) ? (0,
                            s.dy)(e, n) : (0,
                            u.Z1)(e, n)
                }
                function oe(e, t) {
                    const {forwardInfo: n} = t;
                    if (n)
                        return n.isChannelPost && n.fromChatId ? (0,
                            u.Z1)(e, n.fromChatId) : n.senderUserId ? (0,
                            s.dy)(e, n.senderUserId) || (0,
                            u.Z1)(e, n.senderUserId) : void 0
                }
                function de(e, t, n) {
                    var r, o, d, a;
                    const s = (0,
                        u.Z1)(e, t.chatId);
                    if (!s || s.isRestricted)
                        return {};
                    const c = (0,
                        i.YC)(s.id)
                        , l = (0,
                        u.FM)(e, t.chatId)
                        , f = (0,
                        i.G9)(s)
                        , h = (0,
                        i.ZV)(s)
                        , m = (0,
                        i.eA)(s)
                        , p = (0,
                        i.CI)(t)
                        , g = (0,
                        i.jM)(t)
                        , y = (0,
                        i.B4)(t)
                        , v = (0,
                        i.Lo)(t)
                        , {content: b} = t
                        , w = (l || h && (0,
                        i.VE)(s, "pinMessages") || m && (0,
                        i.VE)(s, "editMessages") || (0,
                        S.b)(e.serverTimeOffset) - t.date < 172800) && !(b.sticker || b.contact || b.poll || b.action || b.audio || null !== (r = b.video) && void 0 !== r && r.isRound) && !(0,
                        i.MF)(t) && !t.viaBotId
                        , I = !p && !g && (0,
                        i.Qm)(s, n)
                        , C = c || s.isCreator || !m && !(0,
                        i.Mg)(s, "pinMessages") || (0,
                        i.VE)(s, "pinMessages");
                    let E = !p && !g && !v && C
                        , P = !1;
                    const M = O(e, s.id);
                    E && (P = Boolean(M && M.includes(t.id)),
                        E = !P);
                    const A = !p && !g && (c || y || f || s.isCreator || (0,
                        i.VE)(s, "deleteMessages"))
                        , k = !c && !y
                        , T = A && (c && !l || f && (y || (0,
                        i.VE)(s, "deleteMessages") || s.isCreator))
                        , N = !p && !v && w && (y || m && (s.isCreator || (0,
                        i.VE)(s, "editMessages")))
                        , L = !p && !v
                        , R = Boolean(t.content.sticker)
                        , D = R && function(e, t) {
                        const {stickers: n} = e.stickers.favorite;
                        return n && n.some((({id: e})=>e === t.id))
                    }(e, t.content.sticker)
                        , Z = !v && R && !D
                        , _ = !v && D
                        , x = !v
                        , F = !v && (m || h)
                        , B = !v
                        , $ = Boolean((null === (o = b.webPage) || void 0 === o ? void 0 : o.document) || (null === (d = b.webPage) || void 0 === d ? void 0 : d.video) || (null === (a = b.webPage) || void 0 === a ? void 0 : a.photo) || b.audio || b.voice || b.photo || b.video || b.document || b.sticker);
                    return {
                        noOptions: [I, N, E, P, k, A, T, L, Z, _, x, F, B, $].every((e=>!e)),
                        canReply: I,
                        canEdit: N,
                        canPin: E,
                        canUnpin: P,
                        canReport: k,
                        canDelete: A,
                        canDeleteForAll: T,
                        canForward: L,
                        canFaveSticker: Z,
                        canUnfaveSticker: _,
                        canCopy: x,
                        canCopyLink: F,
                        canSelect: B,
                        canDownload: $
                    }
                }
                function ae(e) {
                    const {messageIds: t} = e.selectedMessages || {}
                        , {chatId: n, threadId: r} = P(e) || {}
                        , o = n && A(e, n);
                    if (!o || !t || !r)
                        return {};
                    const d = t.map((t=>o[t] && de(e, o[t], r))).filter(Boolean);
                    return {
                        canDelete: d.every((e=>e.canDelete)),
                        canDeleteForAll: d.every((e=>e.canDeleteForAll))
                    }
                }
                function ue(e) {
                    const {messageIds: t} = e.selectedMessages || {}
                        , {chatId: n, threadId: r} = P(e) || {}
                        , o = n && A(e, n);
                    return !!(o && t && r) && t.map((t=>o[t] && de(e, o[t], r))).filter(Boolean).every((e=>e.canReport))
                }
                function se(e) {
                    const {messageIds: t} = e.selectedMessages || {}
                        , {chatId: n, threadId: r} = P(e) || {}
                        , o = n && A(e, n);
                    return !!(o && t && r) && t.map((t=>o[t] && de(e, o[t], r))).filter(Boolean).some((e=>e.canDownload))
                }
                function ie(e, t) {
                    const n = e.activeDownloads.byChatId[t.chatId];
                    return !!n && n.includes(t.id)
                }
                function ce(e, t) {
                    return e.activeDownloads.byChatId[t] || E.D
                }
                function le(e, t) {
                    var n;
                    return null === (n = e.fileUploads.byMessageLocalId[t.previousLocalId || t.id]) || void 0 === n ? void 0 : n.progress
                }
                function fe(e, t, n) {
                    if (n === d._f) {
                        const n = (0,
                            u.Z1)(e, t);
                        if (!n)
                            return;
                        if (!n.lastReadInboxMessageId)
                            return;
                        return n.lastMessage ? (0,
                            i.CI)(n.lastMessage) ? n.lastMessage.id : Math.min(n.lastMessage.id, n.lastReadInboxMessageId) : n.lastReadInboxMessageId
                    }
                    {
                        const r = j(e, t, n);
                        if (!r)
                            return;
                        return r.lastReadInboxMessageId ? Math.min(r.lastReadInboxMessageId, r.lastMessageId || 1 / 0) : r.topMessageId
                    }
                }
                function he(e, t, n) {
                    const r = (0,
                        u.Z1)(e, t);
                    if (n === d._f) {
                        if (!r)
                            return
                    } else {
                        const r = j(e, t, n);
                        if (!r || void 0 !== r.lastMessageId && r.lastMessageId === r.lastReadInboxMessageId)
                            return
                    }
                    const o = L(e, t, n)
                        , s = N(e, t, n)
                        , i = A(e, t);
                    if (!i || !o && !s)
                        return;
                    const c = fe(e, t, n);
                    if (!c && r && r.isNotJoined)
                        return;
                    const l = t === a.aw ? e.serviceNotifications.reduce(((e,t)=>!t.isUnread && t.id > e ? t.id : e), -1) : -1;
                    function f(e) {
                        return e.find((e=>(!c || e > c) && i[e] && (!i[e].isOutgoing || i[e].isFromScheduled) && e > l))
                    }
                    if (o) {
                        const e = f(o);
                        if (e)
                            return e
                    }
                    if (s) {
                        const e = f(s);
                        if (e)
                            return e
                    }
                }
                function me(e) {
                    const {forwardMessages: t} = e;
                    return Boolean(t.isModalShown)
                }
                function pe(e, t) {
                    const n = Object.values(e.chats.byId).find((e=>(0,
                        i.Ru)(e) && e.lastMessage && e.lastMessage.id === t));
                    if (n)
                        return n.id;
                    const {byChatId: r} = e.messages;
                    return Object.keys(r).find((n=>{
                            const o = (0,
                                u.Z1)(e, n);
                            return o && (0,
                                i.Ru)(o) && r[o.id].byId[t]
                        }
                    ))
                }
                function ge(e) {
                    const {selectedMessages: t} = e;
                    return Boolean(t)
                }
                function ye(e, t) {
                    const {messageIds: n} = e.selectedMessages || {};
                    return !!n && n.includes(t)
                }
                function ve(e, t, n) {
                    const r = A(e, t);
                    if (r)
                        return Object.values(r).filter((e=>e.groupedId === n && e.forwardInfo)).map((({forwardInfo: e})=>e.fromMessageId))
                }
                function be(e, t, n) {
                    const r = A(e, t);
                    if (r)
                        return Object.keys(r).map(Number).filter((e=>r[e].groupedId === n))
                }
                function we(e, t, n) {
                    const {messageIds: r} = e.selectedMessages || {};
                    if (!r)
                        return !1;
                    const o = be(e, t, n);
                    return o && o.every((e=>r.includes(e)))
                }
                function Ie(e) {
                    const {messageIds: t} = e.selectedMessages || {};
                    return t ? t.length : 0
                }
                function Ce(e, t) {
                    const n = (0,
                        u.Z1)(e, t);
                    if (!n)
                        return;
                    if (!(0,
                        u.xo)(e, n))
                        return;
                    const r = A(e, t)
                        , o = D(e, t, d._f);
                    if (!r || !o)
                        return;
                    const a = (0,
                        c.dF)(o, (e=>!r[e].isOutgoing && Boolean(r[e].keyboardButtons)))
                        , s = (0,
                        c.dF)(o, (e=>Boolean(r[e].shouldHideKeyboardButtons)));
                    return a && s && s > a ? void 0 : a ? r[a] : void 0
                }
                function Se(e, t) {
                    const n = (0,
                        u.Z1)(e, t.chatId);
                    if (!n)
                        return;
                    const r = re(e, t)
                        , o = Boolean((0,
                        i.O$)(t) || (0,
                        i.F$)(t))
                        , d = Boolean((0,
                        i.b7)(t) || (0,
                        i.Cg)(t))
                        , a = Boolean((0,
                        i.oP)(t) || (0,
                        i.kd)(t) || (0,
                        i.aE)(t))
                        , {canAutoLoadPhotoFromContacts: s, canAutoLoadPhotoInPrivateChats: c, canAutoLoadPhotoInGroups: l, canAutoLoadPhotoInChannels: f, canAutoLoadVideoFromContacts: h, canAutoLoadVideoInPrivateChats: m, canAutoLoadVideoInGroups: p, canAutoLoadVideoInChannels: g, canAutoLoadFileFromContacts: y, canAutoLoadFileInPrivateChats: v, canAutoLoadFileInGroups: b, canAutoLoadFileInChannels: w} = e.settings.byKey;
                    return o ? Ee({
                        global: e,
                        chat: n,
                        sender: r,
                        canAutoLoadMediaFromContacts: s,
                        canAutoLoadMediaInPrivateChats: c,
                        canAutoLoadMediaInGroups: l,
                        canAutoLoadMediaInChannels: f
                    }) : d ? Ee({
                        global: e,
                        chat: n,
                        sender: r,
                        canAutoLoadMediaFromContacts: h,
                        canAutoLoadMediaInPrivateChats: m,
                        canAutoLoadMediaInGroups: p,
                        canAutoLoadMediaInChannels: g
                    }) : !a || Ee({
                        global: e,
                        chat: n,
                        sender: r,
                        canAutoLoadMediaFromContacts: y,
                        canAutoLoadMediaInPrivateChats: v,
                        canAutoLoadMediaInGroups: b,
                        canAutoLoadMediaInChannels: w
                    })
                }
                function Ee({global: e, chat: t, sender: n, canAutoLoadMediaFromContacts: r, canAutoLoadMediaInPrivateChats: o, canAutoLoadMediaInGroups: d, canAutoLoadMediaInChannels: a}) {
                    const u = Boolean(n && (n.id === e.currentUserId || (0,
                        s.nM)(e, n)));
                    return Boolean(u && r || !u && o && (0,
                        i.YC)(t.id) || d && (0,
                        i.Bf)(t) || a && (0,
                        i.eA)(t))
                }
                function Pe(e, t) {
                    const n = (0,
                        i.b7)(t) || (0,
                        i.Cg)(t);
                    if (!n)
                        return;
                    const {canAutoPlayVideos: r, canAutoPlayGifs: o} = e.settings.byKey
                        , d = n.isGif || n.isRound;
                    return r && !d || o && d
                }
                function Me(e) {
                    return e.settings.byKey.shouldLoopStickers
                }
                function Ae(e) {
                    const {serviceNotifications: t} = e
                        , n = Math.max(...t.map((({id: e})=>e)));
                    return t.find((({id: e})=>e === n))
                }
                function ke(e, t) {
                    var n;
                    return !!t && (t.isProtected || (null === (n = (0,
                        u.Z1)(e, t.chatId)) || void 0 === n ? void 0 : n.isProtected))
                }
                function Te(e, t, n) {
                    var r;
                    if (null !== (r = (0,
                        u.Z1)(e, t)) && void 0 !== r && r.isProtected)
                        return !0;
                    if (!n)
                        return !1;
                    const o = A(e, t);
                    return n.some((e=>{
                            var t;
                            return null === (t = o[e]) || void 0 === t ? void 0 : t.isProtected
                        }
                    ))
                }
                function Ne(e, t) {
                    const n = (0,
                        u.Z1)(e, t)
                        , r = n && (0,
                        i.eA)(n) ? e.messages.sponsoredByChatId[t] : void 0;
                    return r && r.expiresAt >= Math.round(Date.now() / 1e3) ? r : void 0
                }
                function Le(e, t) {
                    var n, r, o;
                    if (t === a.aw)
                        return;
                    const d = (0,
                        i.YC)(t)
                        , s = null === (n = e.appConfig) || void 0 === n ? void 0 : n.defaultReaction
                        , {availableReactions: c} = e;
                    if (!s || null == c || !c.some((e=>e.reaction === s && !e.isInactive)))
                        return;
                    if (d)
                        return s;
                    const l = null === (r = (0,
                        u.Z1)(e, t)) || void 0 === r || null === (o = r.fullInfo) || void 0 === o ? void 0 : o.enabledReactions;
                    return null != l && l.includes(s) ? s : void 0
                }
                function Re(e) {
                    const {chatId: t, threadId: n} = P(e) || {};
                    if (!t || !n)
                        return;
                    const r = (0,
                        i.uw)(t, n)
                        , o = e.localTextSearch.byChatThreadKey[r];
                    return o && o.isActive ? o : void 0
                }
                function De(e) {
                    const {byChatId: t} = e.localMediaSearch
                        , {chatId: n} = P(e) || {}
                        , r = e.users.selectedId;
                    return r && t[r] ? r : n
                }
                function Oe(e) {
                    const t = De(e);
                    if (t)
                        return e.localMediaSearch.byChatId[t]
                }
                function Ze(e, t) {
                    return e.management.byChatId[t]
                }
                function _e(e) {
                    const {chatId: t, threadId: n} = P(e) || {};
                    if (!t || !n)
                        return;
                    if ((0,
                        i.YC)(t))
                        return "user";
                    const r = (0,
                        u.Z1)(e, t);
                    return r ? (0,
                        i.Bf)(r) ? "group" : "channel" : void 0
                }
                function xe(e) {
                    const {mediaViewer: t} = e;
                    return Boolean(t.messageId || t.avatarOwnerId)
                }
                function Fe(e) {
                    const {users: t, isChatInfoShown: n, newChatMembersProgress: d} = e
                        , a = d !== r.WB.Closed
                        , s = function(e) {
                        const {pollResults: t} = e;
                        return Boolean(t.messageId)
                    }(e)
                        , i = Boolean(!o.wB && Re(e))
                        , c = function(e) {
                        const {chatId: t, threadId: n} = P(e) || {};
                        if (!t || !n)
                            return;
                        const r = e.management.byChatId[t];
                        return r && r.isActive ? r : void 0
                    }(e)
                        , h = void 0 !== l(e).query
                        , m = void 0 !== f(e).query
                        , {chatId: p} = P(e) || {}
                        , g = t.selectedId
                        , y = (0,
                        u.g4)(e)
                        , v = Boolean(g && y)
                        , b = Boolean(p && y) && n;
                    return s ? r.qt.PollResults : i ? r.qt.Search : c ? r.qt.Management : h ? r.qt.StickerSearch : m ? r.qt.GifSearch : a ? r.qt.AddingMembers : v ? r.qt.UserInfo : b ? r.qt.ChatInfo : void 0
                }
                function Be(e) {
                    return void 0 !== Fe(e)
                }
                function $e(e) {
                    const {theme: t, shouldUseSystemTheme: n} = e.settings.byKey;
                    return n ? (0,
                        o.vn)() : t
                }
                function Ue(e) {
                    return e.globalSearch.query
                }
                function je(e) {
                    return e.payment.chatId
                }
                function We(e) {
                    return e.payment.messageId
                }
                function Ge(e) {
                    return e.payment.formId
                }
                function Ve(e) {
                    return e.payment.requestId
                }
                function He(e) {
                    return e.payment.nativeParams ? e.payment.nativeParams.publishableKey : void 0
                }
                function ze(e) {
                    return e.payment.stripeCredentials
                }
                var Qe = n(2913)
            }
            ,
            2913: (e,t,n)=>{
                function r(e) {
                    return e.settings.byKey
                }
                function o(e) {
                    return e.settings.notifyExceptions
                }
                n.d(t, {
                    d: ()=>r,
                    N: ()=>o
                })
            }
            ,
            6376: (e,t,n)=>{
                function r(e, t) {
                    return e.users.byId[t]
                }
                function o(e, t) {
                    return e.users.statusesById[t]
                }
                function d(e, t) {
                    var n;
                    const o = r(e, t);
                    return null == o || null === (n = o.fullInfo) || void 0 === n ? void 0 : n.isBlocked
                }
                function a(e, t) {
                    return e.contactList && e.contactList.userIds.includes(t.id)
                }
                n.d(t, {
                    dy: ()=>r,
                    ss: ()=>o,
                    s4: ()=>d,
                    nM: ()=>a
                })
            }
            ,
            1713: (e,t,n)=>{
                let r, o, d, a, u, s, i, c, l, f, h, m, p, g;
                n.d(t, {
                    Uq: ()=>r,
                    fo: ()=>o,
                    MT: ()=>d,
                    du: ()=>a,
                    nJ: ()=>u,
                    qt: ()=>s,
                    bZ: ()=>i,
                    Cr: ()=>c,
                    Nh: ()=>l,
                    rN: ()=>f,
                    wv: ()=>h,
                    WB: ()=>m,
                    vi: ()=>p,
                    KB: ()=>g,
                    mp: ()=>y,
                    u1: ()=>v
                }),
                    function(e) {
                        e[e.Backwards = 0] = "Backwards",
                            e[e.Forwards = 1] = "Forwards",
                            e[e.Around = 2] = "Around"
                    }(r || (r = {})),
                    function(e) {
                        e[e.Up = 0] = "Up",
                            e[e.Down = 1] = "Down",
                            e[e.Static = 2] = "Static"
                    }(o || (o = {})),
                    function(e) {
                        e[e.Main = 0] = "Main",
                            e[e.EditProfile = 1] = "EditProfile",
                            e[e.Notifications = 2] = "Notifications",
                            e[e.DataStorage = 3] = "DataStorage",
                            e[e.Language = 4] = "Language",
                            e[e.General = 5] = "General",
                            e[e.GeneralChatBackground = 6] = "GeneralChatBackground",
                            e[e.GeneralChatBackgroundColor = 7] = "GeneralChatBackgroundColor",
                            e[e.Privacy = 8] = "Privacy",
                            e[e.PrivacyPhoneNumber = 9] = "PrivacyPhoneNumber",
                            e[e.PrivacyLastSeen = 10] = "PrivacyLastSeen",
                            e[e.PrivacyProfilePhoto = 11] = "PrivacyProfilePhoto",
                            e[e.PrivacyForwarding = 12] = "PrivacyForwarding",
                            e[e.PrivacyGroupChats = 13] = "PrivacyGroupChats",
                            e[e.PrivacyPhoneNumberAllowedContacts = 14] = "PrivacyPhoneNumberAllowedContacts",
                            e[e.PrivacyPhoneNumberDeniedContacts = 15] = "PrivacyPhoneNumberDeniedContacts",
                            e[e.PrivacyLastSeenAllowedContacts = 16] = "PrivacyLastSeenAllowedContacts",
                            e[e.PrivacyLastSeenDeniedContacts = 17] = "PrivacyLastSeenDeniedContacts",
                            e[e.PrivacyProfilePhotoAllowedContacts = 18] = "PrivacyProfilePhotoAllowedContacts",
                            e[e.PrivacyProfilePhotoDeniedContacts = 19] = "PrivacyProfilePhotoDeniedContacts",
                            e[e.PrivacyForwardingAllowedContacts = 20] = "PrivacyForwardingAllowedContacts",
                            e[e.PrivacyForwardingDeniedContacts = 21] = "PrivacyForwardingDeniedContacts",
                            e[e.PrivacyGroupChatsAllowedContacts = 22] = "PrivacyGroupChatsAllowedContacts",
                            e[e.PrivacyGroupChatsDeniedContacts = 23] = "PrivacyGroupChatsDeniedContacts",
                            e[e.PrivacyActiveSessions = 24] = "PrivacyActiveSessions",
                            e[e.PrivacyBlockedUsers = 25] = "PrivacyBlockedUsers",
                            e[e.Folders = 26] = "Folders",
                            e[e.FoldersCreateFolder = 27] = "FoldersCreateFolder",
                            e[e.FoldersEditFolder = 28] = "FoldersEditFolder",
                            e[e.FoldersEditFolderFromChatList = 29] = "FoldersEditFolderFromChatList",
                            e[e.FoldersIncludedChats = 30] = "FoldersIncludedChats",
                            e[e.FoldersIncludedChatsFromChatList = 31] = "FoldersIncludedChatsFromChatList",
                            e[e.FoldersExcludedChats = 32] = "FoldersExcludedChats",
                            e[e.FoldersExcludedChatsFromChatList = 33] = "FoldersExcludedChatsFromChatList",
                            e[e.TwoFaDisabled = 34] = "TwoFaDisabled",
                            e[e.TwoFaNewPassword = 35] = "TwoFaNewPassword",
                            e[e.TwoFaNewPasswordConfirm = 36] = "TwoFaNewPasswordConfirm",
                            e[e.TwoFaNewPasswordHint = 37] = "TwoFaNewPasswordHint",
                            e[e.TwoFaNewPasswordEmail = 38] = "TwoFaNewPasswordEmail",
                            e[e.TwoFaNewPasswordEmailCode = 39] = "TwoFaNewPasswordEmailCode",
                            e[e.TwoFaEnabled = 40] = "TwoFaEnabled",
                            e[e.TwoFaChangePasswordCurrent = 41] = "TwoFaChangePasswordCurrent",
                            e[e.TwoFaChangePasswordNew = 42] = "TwoFaChangePasswordNew",
                            e[e.TwoFaChangePasswordConfirm = 43] = "TwoFaChangePasswordConfirm",
                            e[e.TwoFaChangePasswordHint = 44] = "TwoFaChangePasswordHint",
                            e[e.TwoFaTurnOff = 45] = "TwoFaTurnOff",
                            e[e.TwoFaRecoveryEmailCurrentPassword = 46] = "TwoFaRecoveryEmailCurrentPassword",
                            e[e.TwoFaRecoveryEmail = 47] = "TwoFaRecoveryEmail",
                            e[e.TwoFaRecoveryEmailCode = 48] = "TwoFaRecoveryEmailCode",
                            e[e.TwoFaCongratulations = 49] = "TwoFaCongratulations",
                            e[e.QuickReaction = 50] = "QuickReaction"
                    }(d || (d = {})),
                    function(e) {
                        e[e.ChatList = 0] = "ChatList",
                            e[e.GlobalSearch = 1] = "GlobalSearch",
                            e[e.Settings = 2] = "Settings",
                            e[e.Contacts = 3] = "Contacts",
                            e[e.Archived = 4] = "Archived",
                            e[e.NewChannelStep1 = 5] = "NewChannelStep1",
                            e[e.NewChannelStep2 = 6] = "NewChannelStep2",
                            e[e.NewGroupStep1 = 7] = "NewGroupStep1",
                            e[e.NewGroupStep2 = 8] = "NewGroupStep2"
                    }(a || (a = {})),
                    function(e) {
                        e[e.ChatList = 0] = "ChatList",
                            e[e.Media = 1] = "Media",
                            e[e.Links = 2] = "Links",
                            e[e.Files = 3] = "Files",
                            e[e.Music = 4] = "Music",
                            e[e.Voice = 5] = "Voice"
                    }(u || (u = {})),
                    function(e) {
                        e[e.ChatInfo = 0] = "ChatInfo",
                            e[e.UserInfo = 1] = "UserInfo",
                            e[e.Search = 2] = "Search",
                            e[e.Management = 3] = "Management",
                            e[e.StickerSearch = 4] = "StickerSearch",
                            e[e.GifSearch = 5] = "GifSearch",
                            e[e.PollResults = 6] = "PollResults",
                            e[e.AddingMembers = 7] = "AddingMembers"
                    }(s || (s = {})),
                    function(e) {
                        e[e.Inline = 0] = "Inline",
                            e[e.ScheduledInline = 1] = "ScheduledInline",
                            e[e.SharedMedia = 2] = "SharedMedia",
                            e[e.ProfileAvatar = 3] = "ProfileAvatar",
                            e[e.SettingsAvatar = 4] = "SettingsAvatar",
                            e[e.MiddleHeaderAvatar = 5] = "MiddleHeaderAvatar",
                            e[e.Album = 6] = "Album",
                            e[e.ScheduledAlbum = 7] = "ScheduledAlbum",
                            e[e.SearchResult = 8] = "SearchResult"
                    }(i || (i = {})),
                    function(e) {
                        e[e.Inline = 0] = "Inline",
                            e[e.SharedMedia = 1] = "SharedMedia",
                            e[e.Search = 2] = "Search"
                    }(c || (c = {})),
                    function(e) {
                        e[e.Idle = 0] = "Idle",
                            e[e.InProgress = 1] = "InProgress",
                            e[e.Complete = 2] = "Complete",
                            e[e.Error = 3] = "Error"
                    }(l || (l = {})),
                    function(e) {
                        e[e.Idle = 0] = "Idle",
                            e[e.InProgress = 1] = "InProgress",
                            e[e.Complete = 2] = "Complete",
                            e[e.Error = 3] = "Error"
                    }(f || (f = {})),
                    function(e) {
                        e[e.Idle = 0] = "Idle",
                            e[e.InProgress = 1] = "InProgress",
                            e[e.Complete = 2] = "Complete",
                            e[e.Error = 3] = "Error"
                    }(h || (h = {})),
                    function(e) {
                        e[e.Closed = 0] = "Closed",
                            e[e.InProgress = 1] = "InProgress",
                            e[e.Loading = 2] = "Loading"
                    }(m || (m = {})),
                    function(e) {
                        e[e.Profile = 0] = "Profile",
                            e[e.SharedMedia = 1] = "SharedMedia",
                            e[e.MemberList = 2] = "MemberList"
                    }(p || (p = {})),
                    function(e) {
                        e[e.ShippingInfo = 0] = "ShippingInfo",
                            e[e.Shipping = 1] = "Shipping",
                            e[e.PaymentInfo = 2] = "PaymentInfo",
                            e[e.Checkout = 3] = "Checkout"
                    }(g || (g = {}));
                const y = "UPLOADING_WALLPAPER_SLUG";
                let v;
                !function(e) {
                    e[e.Initial = 0] = "Initial",
                        e[e.ChatPrivacyType = 1] = "ChatPrivacyType",
                        e[e.Discussion = 2] = "Discussion",
                        e[e.ChannelSubscribers = 3] = "ChannelSubscribers",
                        e[e.GroupType = 4] = "GroupType",
                        e[e.GroupPermissions = 5] = "GroupPermissions",
                        e[e.GroupRemovedUsers = 6] = "GroupRemovedUsers",
                        e[e.GroupUserPermissionsCreate = 7] = "GroupUserPermissionsCreate",
                        e[e.GroupUserPermissions = 8] = "GroupUserPermissions",
                        e[e.ChatAdministrators = 9] = "ChatAdministrators",
                        e[e.GroupRecentActions = 10] = "GroupRecentActions",
                        e[e.ChatAdminRights = 11] = "ChatAdminRights",
                        e[e.ChatNewAdminRights = 12] = "ChatNewAdminRights",
                        e[e.GroupMembers = 13] = "GroupMembers",
                        e[e.GroupAddAdmins = 14] = "GroupAddAdmins",
                        e[e.Invites = 15] = "Invites",
                        e[e.EditInvite = 16] = "EditInvite",
                        e[e.Reactions = 17] = "Reactions"
                }(v || (v = {}))
            }
            ,
            9933: (e,t,n)=>{
                n.d(t, {
                    cK: ()=>d,
                    jt: ()=>a,
                    M8: ()=>u,
                    vr: ()=>s
                });
                var r = n(9118);
                let o;
                function d(e, t) {
                    t || (o && !o.isCancelled && (o.isCancelled = !0),
                        o = t = {
                            isCancelled: !1
                        }),
                    !t.isCancelled && e() && (0,
                        r.T2)((()=>{
                            d(e, t)
                        }
                    ))
                }
                function a(e) {
                    e() && (0,
                        r.T2)((()=>{
                            a(e)
                        }
                    ))
                }
                const u = {
                    linear: e=>e,
                    easeIn: e=>e ** 1.675,
                    easeOut: e=>1 - (1 - e ** 1.675),
                    easeInOut: e=>.5 * (Math.sin((e - .5) * Math.PI) + 1),
                    easeInQuad: e=>e * e,
                    easeOutQuad: e=>e * (2 - e),
                    easeInOutQuad: e=>e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e=>e * e * e,
                    easeOutCubic: e=>--e * e * e + 1,
                    easeInOutCubic: e=>e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e=>e * e * e * e,
                    easeOutQuart: e=>1 - --e * e * e * e,
                    easeInOutQuart: e=>e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e=>e * e * e * e * e,
                    easeOutQuint: e=>1 + --e * e * e * e * e,
                    easeInOutQuint: e=>e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                };
                function s({timing: e=u.linear, onUpdate: t, duration: n, onEnd: r, from: o, to: d}) {
                    const s = Date.now();
                    let i = !1;
                    return a((()=>{
                            if (i)
                                return !1;
                            let a = (Date.now() - s) / n;
                            a > 1 && (a = 1);
                            const u = e(a);
                            if ("number" == typeof o && "number" == typeof d)
                                t(o + (d - o) * u);
                            else if (Array.isArray(o) && Array.isArray(d)) {
                                const e = o.map(((e,t)=>e + (d[t] - e) * u));
                                t(e)
                            }
                            return 1 === a && r && r(),
                            a < 1
                        }
                    )),
                        ()=>{
                            i = !0,
                            r && r()
                        }
                }
            }
            ,
            7358: (e,t,n)=>{
                n.d(t, {
                    w: ()=>o
                });
                var r = n(3716);
                function o(e) {
                    "function" == typeof window.navigator.setAppBadge && window.navigator.setAppBadge(e).catch((e=>{
                            r.eM && console.error(e)
                        }
                    ))
                }
            }
            ,
            275: (e,t,n)=>{
                function r(e, t) {
                    if (e === t)
                        return !0;
                    const n = Object.keys(e)
                        , r = n.length;
                    if (r !== Object.keys(t).length)
                        return !1;
                    if (0 === r)
                        return !0;
                    for (let o = 0; o < r; o++) {
                        const r = n[o];
                        if (e[r] !== t[r])
                            return !1
                    }
                    return !0
                }
                function o(e, t) {
                    const n = Object.keys(e);
                    return n.length !== Object.keys(t).length ? ["%LENGTH%"] : n.reduce(((n,r)=>(e[r] !== t[r] && n.push(`${r}: ${e[r]} => ${t[r]}`),
                        n)), [])
                }
                n.d(t, {
                    Z: ()=>r,
                    c: ()=>o
                })
            }
            ,
            6752: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>r
                });
                const r = (...e)=>e.filter(Boolean).join(" ")
            }
            ,
            9524: (e,t,n)=>{
                n.d(t, {
                    Type: ()=>o,
                    fetch: ()=>d,
                    save: ()=>a,
                    clear: ()=>u
                });
                const r = self.caches;
                let o;
                async function d(e, t, n, d=!1) {
                    if (r)
                        try {
                            const a = new Request(t.replace(/:/g, "_"))
                                , u = await r.open(e)
                                , s = await u.match(a);
                            if (!s)
                                return;
                            const i = s.headers.get("Content-Type");
                            switch (n) {
                                case o.Text:
                                    return await s.text();
                                case o.Blob:
                                {
                                    if (t.startsWith("avatar") && i && i.startsWith("text"))
                                        return;
                                    const e = await s.blob()
                                        , n = !e.type || !d && e.type.includes("html");
                                    let r = e.type || i;
                                    return n && r ? (d || (r = r.replace(/html/gi, "")),
                                        new Blob([e],{
                                            type: r
                                        })) : e
                                }
                                case o.Json:
                                    return await s.json();
                                default:
                                    return
                            }
                        } catch (e) {
                            return void console.warn(e)
                        }
                }
                async function a(e, t, n) {
                    if (r)
                        try {
                            const o = "string" == typeof n || n instanceof Blob ? n : JSON.stringify(n)
                                , d = new Request(t.replace(/:/g, "_"))
                                , a = new Response(o)
                                , u = await r.open(e);
                            return await u.put(d, a)
                        } catch (e) {
                            return void console.warn(e)
                        }
                }
                async function u(e) {
                    try {
                        if (!r)
                            return;
                        return await r.delete(e)
                    } catch (e) {
                        return void console.warn(e)
                    }
                }
                !function(e) {
                    e[e.Text = 0] = "Text",
                        e[e.Blob = 1] = "Blob",
                        e[e.Json = 2] = "Json"
                }(o || (o = {}))
            }
            ,
            6063: (e,t,n)=>{
                function r() {
                    const e = [];
                    function t(t) {
                        const n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                    return {
                        runCallbacks: function(...t) {
                            e.forEach((e=>{
                                    e(...t)
                                }
                            ))
                        },
                        addCallback: function(n) {
                            return e.push(n),
                                ()=>{
                                    t(n)
                                }
                        },
                        removeCallback: t
                    }
                }
                n.d(t, {
                    _: ()=>r
                })
            }
            ,
            3989: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>o
                });
                var r = n(517);
                function o(e) {
                    return (0,
                        r.Z)({
                        onEsc: e
                    })
                }
            }
            ,
            517: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>d
                });
                const r = {
                    Enter: "onEnter",
                    Backspace: "onBackspace",
                    Delete: "onDelete",
                    Esc: "onEsc",
                    Escape: "onEsc",
                    ArrowUp: "onUp",
                    ArrowDown: "onDown",
                    ArrowLeft: "onLeft",
                    ArrowRight: "onRight",
                    Tab: "onTab"
                }
                    , o = {
                    onEnter: [],
                    onDelete: [],
                    onBackspace: [],
                    onEsc: [],
                    onUp: [],
                    onDown: [],
                    onLeft: [],
                    onRight: [],
                    onTab: []
                };
                function d(e) {
                    return a() || document.addEventListener("keydown", u, !0),
                        Object.keys(e).forEach((t=>{
                                const n = e[t];
                                if (!n)
                                    return;
                                const r = o[t];
                                r && r.push(n)
                            }
                        )),
                        ()=>{
                            !function(e) {
                                Object.keys(e).forEach((t=>{
                                        const n = e[t]
                                            , r = o[t];
                                        if (r) {
                                            const e = r.findIndex((e=>e === n));
                                            -1 !== e && r.splice(e, 1)
                                        }
                                    }
                                )),
                                a() || document.removeEventListener("keydown", u, !1)
                            }(e)
                        }
                }
                function a() {
                    return Object.values(o).some((e=>Boolean(e.length)))
                }
                function u(e) {
                    const t = r[e.key];
                    if (!t)
                        return;
                    const {length: n} = o[t];
                    n && (e.stopPropagation(),
                        (0,
                            o[t][n - 1])(e))
                }
            }
            ,
            790: (e,t,n)=>{
                n.d(t, {
                    xR: ()=>a,
                    $Y: ()=>u,
                    _F: ()=>s,
                    kj: ()=>i,
                    mr: ()=>l,
                    VX: ()=>f,
                    Tu: ()=>h,
                    np: ()=>m,
                    D: ()=>p,
                    j1: ()=>g,
                    ZK: ()=>v,
                    k9: ()=>b,
                    rM: ()=>w,
                    xH: ()=>I,
                    SA: ()=>C,
                    xk: ()=>E,
                    IS: ()=>P
                });
                const r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    , o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    , d = o.map((e=>e.toLowerCase()))
                    , a = 864e5;
                function u(e) {
                    const t = new Date(e);
                    return t.setHours(0, 0, 0, 0),
                        t
                }
                function s(e) {
                    return u(e).getTime()
                }
                function i(e) {
                    const t = new Date(1e3 * e);
                    return `${t.getFullYear()}-${t.getMonth()}`
                }
                function c(e) {
                    return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
                }
                function l(e, t) {
                    const n = "number" == typeof t ? new Date(t) : t
                        , r = e.timeFormat || "24h";
                    let o = n.getHours()
                        , d = "";
                    return "12h" === r && (d = o >= 12 ? " PM" : " AM",
                        o = o > 12 ? o % 12 : o),
                        `${String(o).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}${d}`
                }
                function f(e, t) {
                    const n = "number" == typeof t ? new Date(t) : t
                        , o = u(new Date);
                    if (n >= o)
                        return l(e, n);
                    const d = new Date(o);
                    if (d.setDate(o.getDate() - 7),
                    n >= d)
                        return e(`Weekday.Short${r[n.getDay()]}`);
                    const a = n.getFullYear() !== o.getFullYear()
                        , s = e(a ? "formatDateScheduleYear" : "formatDateSchedule") || (a ? "d MMM yyyy" : "d MMM");
                    return y(e, n, s)
                }
                function h(e, t) {
                    const n = "number" == typeof t ? new Date(t) : t
                        , r = e("formatterYearMax") || "dd.MM.yyyy";
                    return y(e, n, r)
                }
                function m(e, t, n=!1) {
                    const r = e(n ? "formatterMonthYear2" : "formatterMonthYear") || "MMM yyyy";
                    return y(e, t, r)
                }
                function p(e, t) {
                    const n = Math.floor(t / a);
                    return t < 0 ? 0 : n < 1 ? b(t / 1e3) : n < 7 ? e("Days", n) : n < 30 ? e("Weeks", Math.floor(n / 7)) : n < 365 ? e("Months", Math.floor(n / 30)) : e("Years", Math.floor(n / 365))
                }
                function g(e, t, n=!1, o=!1, d) {
                    const a = "number" == typeof t ? new Date(t) : t
                        , s = u(new Date);
                    if (!o) {
                        if (c(a) === c(s))
                            return (d || !n ? A : M)(e("Weekday.Today"));
                        const t = new Date(s);
                        if (t.setDate(s.getDate() - 1),
                        c(a) === c(t))
                            return (d || !n ? A : M)(e("Weekday.Yesterday"));
                        const o = new Date(s)
                            , u = new Date(s);
                        if (o.setDate(s.getDate() - 7),
                            u.setDate(s.getDate() + 7),
                        a >= o && a <= u) {
                            const t = r[a.getDay()];
                            return (d || !n ? A : M)(e(n ? `Weekday.Short${t}` : `Weekday.${t}`))
                        }
                    }
                    const i = a.getFullYear() !== s.getFullYear()
                        , l = e(n ? i ? "formatDateScheduleYear" : "formatDateSchedule" : i ? "chatFullDate" : "chatDate") || "d MMMM yyyy";
                    return (d || !n ? A : M)(y(e, a, l))
                }
                function y(e, t, n) {
                    const r = t.getDate()
                        , d = t.getMonth();
                    return n.replace("LLLL", e(o[d])).replace("MMMM", e(`Month.Gen${o[d]}`)).replace("MMM", e(`Month.Short${o[d]}`)).replace("MM", String(d + 1).padStart(2, "0")).replace("dd", String(r).padStart(2, "0")).replace("d", String(r)).replace("yyyy", String(t.getFullYear())).replace(/'de'/g, "de")
                }
                function v(e, t, n) {
                    const r = "number" == typeof t ? new Date(t) : t;
                    return `${g(e, r, !0, void 0, n)}, ${l(e, r)}`
                }
                function b(e, t) {
                    const n = Math.floor(e / 3600)
                        , r = Math.floor(e % 3600 / 60)
                        , o = Math.floor(e % 3600 % 60)
                        , d = t ? Math.floor(t / 3600) : 0
                        , a = t ? Math.floor(t % 3600 / 60) : 0;
                    let u = "";
                    return n > 0 || d > 0 ? (u += `${String(n).padStart(2, "0")}:`,
                        u += `${String(r).padStart(2, "0")}:`) : u += a >= 10 ? `${String(r).padStart(2, "0")}:` : `${String(r)}:`,
                        u += String(o).padStart(2, "0"),
                        u
                }
                function w(e) {
                    const t = [];
                    let n = e % 1e3;
                    e -= n,
                        n = Math.floor(n / 10);
                    const r = (e = Math.floor(e / 1e3)) % 60;
                    e -= r;
                    const o = (e = Math.floor(e / 60)) % 60;
                    e -= o;
                    const d = (e = Math.floor(e / 60)) % 60;
                    return d > 0 && t.push(String(d).padStart(2, "0")),
                        t.push(String(o).padStart(d > 0 ? 2 : 1, "0")),
                        t.push(String(r).padStart(2, "0")),
                        `${t.join(":")},${String(n).padStart(2, "0")}`
                }
                function I(e, t="en-US") {
                    return ("number" == typeof e ? new Date(e) : e).toLocaleString(t, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })
                }
                function C(e, t="en-US") {
                    return ("number" == typeof e ? new Date(e) : e).toLocaleString(t, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })
                }
                function S(e, t, n=2021) {
                    if (t > 11 || e > 31)
                        return !1;
                    const r = new Date(n,t,e);
                    return !Number.isNaN(r.getTime()) && r.getDate() === e
                }
                function E(e="") {
                    const t = e.match(/\d{1,2}\s[a-zA-Z]{3,}/)
                        , n = e.match(/[a-zA-Z]{3,}\s\d{1,2}/)
                        , r = e.match(/\d{1,2}[./-]\d{1,2}([./-]\d{2,4})?/);
                    if (!t && !r && !n)
                        return;
                    if (r) {
                        const [t,n,r] = e.split(/[./-]/).map(Number);
                        return r && r < 2015 || !S(t, n - 1, r || void 0) ? void 0 : `${r ? `${r}-` : ""}${String(n).padStart(2, "0")}-${String(t).padStart(2, "0")}`
                    }
                    const o = e.split(" ")
                        , a = t ? o[0] : o[1]
                        , u = (t ? o[1] : o[0]).toLowerCase()
                        , s = d.findIndex((e=>e.startsWith(u)));
                    return -1 !== s && S(Number(a), s) ? `${String(s + 1).padStart(2, "0")}-${String(a).padStart(2, "0")}` : void 0
                }
                function P(e) {
                    return e + a / 1e3
                }
                function M(e) {
                    return `${e[0].toLowerCase()}${e.slice(1)}`
                }
                function A(e) {
                    return `${e[0].toUpperCase()}${e.slice(1)}`
                }
            }
            ,
            4284: (e,t,n)=>{
                n.d(t, {
                    g6: ()=>u,
                    U_: ()=>s,
                    NM: ()=>i,
                    Wg: ()=>c
                });
                var r = n(3681);
                const o = ["female_sign", "male_sign", "medical_symbol"]
                    , d = [[/\u{1f3f3}\u200d\u{1f308}/gu, "🏳️‍🌈"], [/\u{1f3f3}\u200d\u26a7\ufe0f/gu, "🏳️‍⚧️"], [/\u{1f937}\u200d\u2642[^\ufe0f]/gu, "🤷‍♂️"]];
                function a(e) {
                    const t = e.split("-").map((e=>parseInt(e, 16)));
                    return String.fromCodePoint(...t)
                }
                function u(e) {
                    if (!e.match(r.Z))
                        return e;
                    for (const [t,n] of d)
                        e = e.replace(t, n);
                    return e
                }
                function s(e) {
                    let t;
                    if (1 === e.length)
                        t = e.charCodeAt(0).toString(16).padStart(4, "0");
                    else {
                        const n = [];
                        for (let t = 0; t < e.length; t++)
                            e.charCodeAt(t) >= 55296 && e.charCodeAt(t) <= 56319 ? e.charCodeAt(t + 1) >= 56320 && e.charCodeAt(t + 1) <= 57343 && n.push(1024 * (e.charCodeAt(t) - 55296) + (e.charCodeAt(t + 1) - 56320) + 65536) : (e.charCodeAt(t) < 55296 || e.charCodeAt(t) > 57343) && n.push(e.charCodeAt(t));
                        t = n.map((e=>e.toString(16).padStart(4, "0"))).join("-")
                    }
                    return t
                }
                function i(e) {
                    const t = {
                        categories: [],
                        emojis: {}
                    };
                    for (let n = 0; n < e.length; n += 2) {
                        const r = {
                            id: e[n][0],
                            name: e[n][1],
                            emojis: []
                        };
                        for (let d = 0; d < e[n + 1].length; d++) {
                            const u = e[n + 1][d];
                            o.includes(u[1][0]) || (r.emojis.push(u[1][0]),
                                t.emojis[u[1][0]] = {
                                    id: u[1][0],
                                    names: u[1],
                                    native: a(u[0]),
                                    image: u[0].toLowerCase()
                                })
                        }
                        t.categories.push(r)
                    }
                    return t
                }
                function c(e) {
                    const t = e.toUpperCase();
                    if (!/^[A-Z]{2}$/.test(t))
                        return e;
                    const n = [...t].map((e=>e.codePointAt(0) + 127397));
                    return String.fromCodePoint(...n)
                }
            }
            ,
            1396: (e,t,n)=>{
                function r(e) {
                    if (e)
                        return e.includes("://") ? e : `http://${e}`
                }
                n.d(t, {
                    X: ()=>r
                })
            }
            ,
            7361: (e,t,n)=>{
                n.d(t, {
                    Bi: ()=>k,
                    cL: ()=>R,
                    wZ: ()=>p,
                    vX: ()=>M,
                    op: ()=>C,
                    cj: ()=>m,
                    jm: ()=>h,
                    pA: ()=>L,
                    m5: ()=>P,
                    I_: ()=>E,
                    fl: ()=>y,
                    t0: ()=>A,
                    s$: ()=>g,
                    i4: ()=>O,
                    Mc: ()=>S,
                    wB: ()=>b,
                    p7: ()=>w,
                    $b: ()=>v,
                    mh: ()=>I,
                    s0: ()=>T,
                    aZ: ()=>D,
                    gZ: ()=>Z,
                    Lt: ()=>f,
                    vn: ()=>i,
                    on: ()=>d
                });
                var r = n(3716);
                let o;
                function d() {
                    return Boolean(o)
                }
                var a, u;
                new Promise((e=>{
                        const t = new Image;
                        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
                        const n = ()=>{
                                e(2 === t.height)
                            }
                        ;
                        t.onload = n,
                            t.onerror = n
                    }
                )).then((e=>{
                        o = e
                    }
                ));
                let s = null !== (a = (u = window).matchMedia) && void 0 !== a && a.call(u, "(prefers-color-scheme: dark)").matches ? "dark" : "light";
                function i() {
                    return s
                }
                function c(e) {
                    s = e.matches ? "dark" : "light"
                }
                const l = window.matchMedia("(prefers-color-scheme: dark)");
                "function" == typeof l.addEventListener ? l.addEventListener("change", c) : "function" == typeof l.addListener && l.addListener(c);
                const f = function() {
                    const {userAgent: e, platform: t} = window.navigator;
                    let n;
                    return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? n = "macOS" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? n = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? n = "Windows" : /Android/.test(e) ? n = "Android" : /Linux/.test(t) && (n = "Linux"),
                        n
                }()
                    , h = "macOS" === f
                    , m = "iOS" === f
                    , p = "Android" === f
                    , g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                    , y = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone || document.referrer.includes("android-app://")
                    , v = window.matchMedia("(pointer: coarse)").matches
                    , b = window.innerWidth <= r.l3 || window.innerWidth <= r.u_ && window.innerHeight <= r.rO
                    , w = !b && window.innerWidth <= r.ks
                    , I = Boolean(navigator.mediaDevices && "getUserMedia"in navigator.mediaDevices && (window.AudioContext || window.webkitAudioContext))
                    , C = (document.documentElement.style,
                f && (h || m))
                    , S = "serviceWorker"in navigator
                    , E = S
                    , P = (window,
                    Boolean((new Audio).canPlayType("audio/ogg; codecs=opus")))
                    , M = !r.Cg && "filter"in (document.createElement("canvas").getContext("2d") || {})
                    , A = "requestFullscreen"in document.createElement("div")
                    , k = !navigator.userAgent.includes("Firefox")
                    , T = p ? "slide-fade" : m ? "slide-layers" : "push-slide"
                    , N = document.createElement("video")
                    , L = Boolean(N.canPlayType(r.Ng).replace("no", "") || m);
                L && r.wG.add(r.Ng);
                const R = window.devicePixelRatio || 1
                    , D = !0
                    , O = !h && !m && !p
                    , Z = O ? 300 : 750
            }
            ,
            1394: (e,t,n)=>{
                n.d(t, {
                    A9: ()=>d,
                    YJ: ()=>a,
                    hl: ()=>u,
                    pt: ()=>s,
                    jj: ()=>i,
                    ud: ()=>c,
                    gm: ()=>l,
                    dc: ()=>f,
                    ao: ()=>h
                });
                var r = n(9118);
                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                        e
                }
                function d(e) {
                    const t = e.split(",")
                        , n = t[0].match(/:(.*?);/)[1]
                        , r = atob(t[1]);
                    let o = r.length;
                    const d = new Uint8Array(o);
                    for (; o--; )
                        d[o] = r.charCodeAt(o);
                    return new Blob([d],{
                        type: n
                    })
                }
                function a(e) {
                    return new Promise(((t,n)=>{
                            const r = new FileReader;
                            r.onload = e=>{
                                const {result: r} = e.target || {};
                                "string" == typeof r && t(r),
                                    n(new Error("Failed to read blob"))
                            }
                                ,
                                r.onerror = n,
                                r.readAsDataURL(e)
                        }
                    ))
                }
                function u(e, t) {
                    return new File([e],t,{
                        lastModified: Date.now(),
                        type: e.type
                    })
                }
                function s(e) {
                    return new Promise(((t,n)=>{
                            const r = new Image;
                            r.onload = ()=>t(r),
                                r.onerror = n,
                                r.src = e
                        }
                    ))
                }
                function i(e) {
                    return new Promise(((t,n)=>{
                            const r = document.createElement("video");
                            r.volume = 0,
                                r.onloadedmetadata = ()=>t(r),
                                r.onerror = n,
                                r.src = e
                        }
                    ))
                }
                async function c(e) {
                    const t = await i(e);
                    return Promise.race([(0,
                        r.wO)(2e3), new Promise(((e,n)=>{
                            t.onseeked = ()=>{
                                t.videoWidth && t.videoHeight || e(void 0);
                                const n = document.createElement("canvas");
                                n.width = t.videoWidth,
                                    n.height = t.videoHeight,
                                    n.getContext("2d").drawImage(t, 0, 0),
                                    e(n.toDataURL("image/jpeg"))
                            }
                                ,
                                t.onerror = n,
                                t.currentTime = Math.min(t.duration, 1)
                        }
                    ))])
                }
                async function l(e) {
                    return (await fetch(e)).blob()
                }
                async function f(e, t) {
                    return u(await l(e), t)
                }
                function h(e) {
                    const t = document.createElement("canvas");
                    return t.width = e.width,
                        t.height = e.height,
                        t.getContext("2d").drawImage(e, 0, 0),
                        t
                }
                "undefined" == typeof File && (self.File = class extends Blob {
                        constructor(e, t, n) {
                            if (n) {
                                const {type: t, ...r} = n;
                                super(e, {
                                    type: t
                                }),
                                    o(this, "name", void 0),
                                    Object.assign(this, r)
                            } else
                                super(e),
                                    o(this, "name", void 0);
                            this.name = t
                        }
                    }
                )
            }
            ,
            9937: (e,t,n)=>{
                function r(e, t, n="en") {
                    return new Intl.NumberFormat(n,{
                        style: "currency",
                        currency: t
                    }).format("JPY" === t ? e : e / 100)
                }
                n.d(t, {
                    x: ()=>r
                })
            }
            ,
            6926: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>r
                });
                const r = e=>{
                    let t;
                    do {
                        t = String(Math.random()).replace("0.", "id")
                    } while (e.hasOwnProperty(t));
                    return t
                }
            }
            ,
            1947: (e,t,n)=>{
                n.d(t, {
                    ZP: ()=>d,
                    J_: ()=>a
                });
                const r = {
                    CHAT_RESTRICTED: "You can't send messages in this chat, you were restricted",
                    CHAT_WRITE_FORBIDDEN: "You can't write in this chat",
                    CHAT_SEND_POLL_FORBIDDEN: "You can't create polls in this chat",
                    CHAT_SEND_STICKERS_FORBIDDEN: "You can't send stickers in this chat",
                    CHAT_SEND_GIFS_FORBIDDEN: "You can't send gifs in this chat",
                    CHAT_SEND_MEDIA_FORBIDDEN: "You can't send media in this chat",
                    CHAT_LINK_EXISTS: "The chat is public, you can't hide the history to new users",
                    SLOWMODE_WAIT_X: "Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat.",
                    USER_BANNED_IN_CHANNEL: "You're banned from sending messages in supergroups / channels",
                    USER_IS_BLOCKED: "You were blocked by this user",
                    YOU_BLOCKED_USER: "You blocked this user",
                    IMAGE_PROCESS_FAILED: "Failure while processing image",
                    MEDIA_EMPTY: "The provided media object is invalid",
                    MEDIA_INVALID: "Media invalid",
                    PHOTO_EXT_INVALID: "The extension of the photo is invalid",
                    PHOTO_INVALID_DIMENSIONS: "The photo dimensions are invalid",
                    PHOTO_SAVE_FILE_INVALID: "Internal issues, try again later",
                    MESSAGE_DELETE_FORBIDDEN: "You can't delete one of the messages you tried to delete, most likely because it is a service message.",
                    MESSAGE_POLL_CLOSED: "Poll closed",
                    MESSAGE_EDIT_TIME_EXPIRED: "You can't edit this message anymore.",
                    CHAT_ADMIN_REQUIRED: "You must be an admin in this chat to do this",
                    PINNED_DIALOGS_TOO_MUCH: "Sorry, you can only pin 5 chats to the top",
                    DIALOG_FILTERS_TOO_MUCH: "Sorry, you can't have more than 10 folders",
                    CHANNEL_PRIVATE: "This channel is private",
                    MEDIA_CAPTION_TOO_LONG: "The provided caption is too long",
                    ADDRESS_STREET_LINE1_INVALID: "The address you provided is not valid",
                    ADDRESS_STREET_LINE2_INVALID: "The address you provided is not valid",
                    ADDRESS_CITY_INVALID: "The city you provided is not valid",
                    ADDRESS_COUNTRY_INVALID: "The country you provided is not valid",
                    ADDRESS_POSTCODE_INVALID: "The postcode you provided is not valid",
                    ADDRESS_STATE_INVALID: "The state you provided is not valid",
                    REQ_INFO_NAME_INVALID: "The name you provided is not valid",
                    REQ_INFO_PHONE_INVALID: "The phone you provided is not valid",
                    REQ_INFO_EMAIL_INVALID: "The email you provided is not valid",
                    LINK_NOT_MODIFIED: "This discussion is already linked to the channel",
                    MESSAGE_TOO_LONG: "Message is too long",
                    SERVICE_WORKER_DISABLED: "Service Worker is disabled. Please reload the page without holding <Shift> key.",
                    MESSAGE_TOO_LONG_PLEASE_REMOVE_CHARACTERS: "The provided message is too long. Please remove {EXTRA_CHARS_COUNT} character{PLURAL_S}.",
                    FRESH_RESET_AUTHORISATION_FORBIDDEN: "You can’t logout other sessions if less than 24 hours have passed since you logged on the current session",
                    BOTS_TOO_MUCH: "There are too many bots in this chat/channel",
                    BOT_GROUPS_BLOCKED: "This bot can't be added to groups",
                    USERS_TOO_MUCH: "The maximum number of users has been exceeded",
                    USER_CHANNELS_TOO_MUCH: "One of the users you tried to add is already in too many channels/supergroups",
                    USER_KICKED: "This user was kicked from this supergroup/channel",
                    USER_NOT_MUTUAL_CONTACT: "The provided user is not a mutual contact",
                    USER_PRIVACY_RESTRICTED: "The user's privacy settings do not allow you to do this",
                    INVITE_HASH_EMPTY: "The invite hash is empty",
                    INVITE_HASH_EXPIRED: "The invite link has expired",
                    INVITE_HASH_INVALID: "The invite hash is invalid",
                    CHANNELS_TOO_MUCH: "You have joined too many channels/supergroups",
                    USER_ALREADY_PARTICIPANT: "You already in the group",
                    SCHEDULE_DATE_INVALID: "Invalid schedule date provided",
                    WALLPAPER_DIMENSIONS_INVALID: "The wallpaper dimensions are invalid, please select another file",
                    ADMINS_TOO_MUCH: "There are too many admins",
                    ADMIN_RANK_EMOJI_NOT_ALLOWED: "An admin rank cannot contain emojis",
                    ADMIN_RANK_INVALID: "The specified admin rank is invalid",
                    FRESH_CHANGE_ADMINS_FORBIDDEN: "You were just elected admin, you can't add or modify other admins yet",
                    INPUT_USER_DEACTIVATED: "The specified user was deleted"
                }
                    , o = {
                    ADDRESS_STREET_LINE1_INVALID: {
                        field: "streetLine1",
                        message: "Incorrect street address"
                    },
                    ADDRESS_STREET_LINE2_INVALID: {
                        field: "streetLine2",
                        message: "Incorrect street address"
                    },
                    ADDRESS_CITY_INVALID: {
                        field: "city",
                        message: "Incorrect city"
                    },
                    ADDRESS_COUNTRY_INVALID: {
                        field: "countryIso2",
                        message: "Incorrect country"
                    },
                    ADDRESS_POSTCODE_INVALID: {
                        field: "postCode",
                        message: "Incorrect post code"
                    },
                    ADDRESS_STATE_INVALID: {
                        field: "state",
                        message: "Incorrect state"
                    },
                    REQ_INFO_NAME_INVALID: {
                        field: "fullName",
                        message: "Incorrect name"
                    },
                    REQ_INFO_PHONE_INVALID: {
                        field: "phone",
                        message: "Incorrect phone"
                    },
                    REQ_INFO_EMAIL_INVALID: {
                        field: "email",
                        message: "Incorrect email"
                    }
                };
                function d(e) {
                    const {message: t, isSlowMode: n, textParams: o} = e;
                    if (n) {
                        const e = t.indexOf(" (caused by");
                        return e > 0 ? t.substring(0, e) : t
                    }
                    let d = r[t];
                    return d && o && (d = Object.keys(o).reduce(((e,t)=>e.replace(t, o[t])), d)),
                        d
                }
                function a(e) {
                    return o[e.message]
                }
            }
            ,
            3592: (e,t,n)=>{
                n.d(t, {
                    S: ()=>d
                }),
                    n(3716);
                var r = n(9118);
                function o(e) {
                    e.preventDefault(),
                        d(e instanceof ErrorEvent ? e.error : e.reason)
                }
                function d(e) {
                    console.error(e)
                }
                window.addEventListener("error", o),
                    window.addEventListener("unhandledrejection", o),
                    (0,
                        r.P2)(window.alert, 1e3)
            }
            ,
            782: (e,t,n)=>{
                function r(e, t) {
                    return e.reduce(((e,n)=>(e[n[t]] = n,
                        e)), {})
                }
                function o(e, t) {
                    return Object.keys(e).reduce(((n,r,o)=>(n[r] = t(e[r], r, o, e),
                        n)), {})
                }
                function d(e, t) {
                    return t.reduce(((t,n)=>(t[n] = e[n],
                        t)), {})
                }
                function a(e, t) {
                    return t.reduce(((t,n)=>(e[n] && (t[n] = e[n]),
                        t)), {})
                }
                function u(e, t) {
                    const n = new Set(t.map(String));
                    return d(e, Object.keys(e).filter((e=>!n.has(e))))
                }
                function s(e, t, n="asc") {
                    function r(e, t, n, r) {
                        const o = ("function" == typeof n ? n(e) : e[n]) || 0
                            , d = ("function" == typeof n ? n(t) : t[n]) || 0;
                        return r ? o - d : d - o
                    }
                    if (Array.isArray(t)) {
                        const [o,d] = Array.isArray(n) ? n : [n, n]
                            , [a,u] = t
                            , s = "asc" === o
                            , i = "asc" === d;
                        return e.sort(((e,t)=>r(e, t, a, s) || r(e, t, u, i)))
                    }
                    const o = "asc" === n;
                    return e.sort(((e,n)=>r(e, n, t, o)))
                }
                function i(e) {
                    return e.reduce(((e,t)=>Array.isArray(t) ? e.concat(t) : (e.push(t),
                        e)), [])
                }
                function c(e) {
                    return Array.from(new Set(e))
                }
                function l(e) {
                    return e.filter(Boolean)
                }
                function f(e, t) {
                    return e.length === t.length && e.every(((e,n)=>e === t[n]))
                }
                function h(e, t) {
                    return e[0] <= t[t.length - 1] && e[e.length - 1] >= t[0]
                }
                function m(e, t) {
                    return e.filter((e=>t.has(e)))
                }
                function p(e, t) {
                    const n = [];
                    for (let r = 0; r < e.length; r += t)
                        n.push(e.slice(r, r + t));
                    return n
                }
                function g(e) {
                    return "object" != typeof e ? e : Array.isArray(e) ? e.map(g) : Object.keys(e).reduce(((t,n)=>(t[n] = g(e[n]),
                        t)), {})
                }
                function y(e, t) {
                    let n = e.length;
                    for (; n--; )
                        if (t(e[n], n, e))
                            return e[n]
                }
                n.d(t, {
                    ee: ()=>r,
                    Q8: ()=>o,
                    ei: ()=>d,
                    q0: ()=>a,
                    CE: ()=>u,
                    Xo: ()=>s,
                    xH: ()=>i,
                    Tw: ()=>c,
                    oA: ()=>l,
                    et: ()=>f,
                    YE: ()=>h,
                    eL: ()=>m,
                    Vl: ()=>p,
                    Xh: ()=>g,
                    dF: ()=>y
                })
            }
            ,
            711: (e,t,n)=>{
                n.d(t, {
                    ll: ()=>p,
                    i0: ()=>w,
                    Pn: ()=>I,
                    m0: ()=>C,
                    qf: ()=>S
                });
                var r = n(5116)
                    , o = n(3716)
                    , d = n(9524)
                    , a = n(1226)
                    , u = n(6063)
                    , s = n(2155);
                const i = /%\d?\$?[sdf@]/g
                    , c = ["value", "zeroValue", "oneValue", "twoValue", "fewValue", "manyValue", "otherValue"]
                    , l = {
                    en: e=>1 !== e ? 6 : 2,
                    ar: e=>0 === e ? 1 : 1 === e ? 2 : 2 === e ? 3 : e % 100 >= 3 && e % 100 <= 10 ? 4 : e % 100 >= 11 ? 5 : 6,
                    ca: e=>1 !== e ? 6 : 2,
                    de: e=>1 !== e ? 6 : 2,
                    es: e=>1 !== e ? 6 : 2,
                    fa: e=>e > 1 ? 6 : 2,
                    fr: e=>e > 1 ? 6 : 2,
                    id: ()=>0,
                    it: e=>1 !== e ? 6 : 2,
                    ko: ()=>0,
                    ms: ()=>0,
                    nl: e=>1 !== e ? 6 : 2,
                    pl: e=>1 === e ? 2 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 4 : 5,
                    pt_BR: e=>e > 1 ? 6 : 2,
                    ru: e=>e % 10 == 1 && e % 100 != 11 ? 2 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 4 : 5,
                    tr: e=>e > 1 ? 6 : 2,
                    uk: e=>e % 10 == 1 && e % 100 != 11 ? 2 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 4 : 5,
                    uz: e=>e > 1 ? 6 : 2
                }
                    , f = new Map;
                let h, m;
                const {addCallback: p, removeCallback: g, runCallbacks: y} = (0,
                    u._)();
                let v, b;
                const w = (e,t,n)=>{
                        var r, o;
                        if (void 0 !== t) {
                            const r = Array.isArray(t) ? JSON.stringify(t) : t
                                , o = f.get(`${e}_${r}_${n}`);
                            if (o)
                                return o
                        }
                        if (!h && !m)
                            return e;
                        const d = (null === (r = h) || void 0 === r ? void 0 : r[e]) || (null === (o = m) || void 0 === o ? void 0 : o[e]);
                        return d ? P(d, e, t, n) : (m || E(),
                            e)
                    }
                ;
                async function I(e, t) {
                    let n = await d.fetch(o.ee, `${o.$O}_${e}_${t}`, d.Type.Json);
                    return n || (n = await async function(e, t, n) {
                        const r = await (0,
                            a.t9)("fetchLangStrings", {
                            langPack: e,
                            langCode: t,
                            keys: [n]
                        });
                        if (null != r && r.length)
                            return await d.save(o.ee, `${e}_${t}_${n}`, r[0]),
                                r[0]
                    }(o.$O, e, t)),
                        P(n, t)
                }
                async function C(e, t, n=!1) {
                    if (h && e === v)
                        return void (t && t());
                    let u = await d.fetch(o.ee, e, d.Type.Json);
                    if (!u && (n && await E(),
                        u = await async function(e) {
                            const t = await (0,
                                a.t9)("fetchLangPack", {
                                sourceLangPacks: o.Bg,
                                langCode: e
                            });
                            if (t)
                                return await d.save(o.ee, e, t.langPack),
                                    t.langPack
                        }(e),
                        !u))
                        return;
                    f.clear(),
                        v = e,
                        h = u,
                        document.documentElement.lang = e;
                    const {languages: s, timeFormat: i} = (0,
                        r.Rd)().settings.byKey
                        , c = null == s ? void 0 : s.find((t=>t.langCode === e));
                    w.isRtl = Boolean(null == c ? void 0 : c.rtl),
                        w.code = e,
                        w.timeFormat = i,
                    t && t(),
                        y()
                }
                function S(e) {
                    e && e === b || (b = e,
                        w.timeFormat = e,
                        y())
                }
                async function E() {
                    m || (m = (await n.e(915).then(n.bind(n, 1915))).default,
                        y())
                }
                function P(e, t, n, r) {
                    const d = e ? e["number" == typeof n ? function(e) {
                        const t = v || o.sR
                            , n = l[t] ? l[t](e) : 0;
                        return c[n]
                    }(n) : "value"] : void 0;
                    if (!d || !d.trim()) {
                        const e = t.split(".");
                        return e[e.length - 1]
                    }
                    if (void 0 !== n) {
                        const e = function(e, t) {
                            t = Array.isArray(t) ? t : [t];
                            const n = e.split(i)
                                , r = n.shift();
                            return n.reduce(((e,n,r)=>`${e}${String(t[r] || "")}${n}`), r || "")
                        }(d, "i" === r ? (0,
                            s.kh)(n) : n)
                            , o = Array.isArray(n) ? JSON.stringify(n) : n;
                        return f.set(`${t}_${o}_${r}`, e),
                            e
                    }
                    return d
                }
            }
            ,
            647: (e,t,n)=>{
                n.d(t, {
                    cC: ()=>b,
                    he: ()=>y,
                    UV: ()=>v,
                    Iq: ()=>w
                });
                var r = n(6137)
                    , o = n(3716)
                    , d = n(1226)
                    , a = n(9524)
                    , u = n(1394)
                    , s = n(7361);
                const i = 48e3;
                async function c(e) {
                    const t = await new Response(e).arrayBuffer();
                    return new Promise((e=>{
                            const r = new Uint8Array(t);
                            let o = new Worker(new URL(n.p + n.u(745),n.b))
                                , d = new Worker(new URL(n.p + n.u(993),n.b));
                            o.onmessage = e=>{
                                null === e.data ? d.postMessage({
                                    command: "done"
                                }) : d.postMessage({
                                    command: "encode",
                                    buffers: e.data
                                }, e.data.map((({buffer: e})=>e)))
                            }
                                ,
                                d.onmessage = t=>{
                                    "page" === t.data.message && (e(new Blob([t.data.page],{
                                        type: "audio/wav"
                                    })),
                                        o.terminate(),
                                        o = void 0,
                                        d.terminate(),
                                        d = void 0)
                                }
                                ,
                                d.postMessage({
                                    command: "init",
                                    wavBitDepth: 16,
                                    wavSampleRate: i
                                }),
                                o.postMessage({
                                    command: "init",
                                    decoderSampleRate: i,
                                    outputBufferSampleRate: i
                                }),
                                o.postMessage({
                                    command: "decode",
                                    pages: r
                                }, [r.buffer])
                        }
                    ))
                }
                var l = n(862);
                const f = {
                    [r.IU.BlobUrl]: a.Type.Blob,
                    [r.IU.Lottie]: a.Type.Blob,
                    [r.IU.Progressive]: void 0,
                    [r.IU.Stream]: void 0
                }
                    , h = new Map
                    , m = new Map
                    , p = new Map
                    , g = new Map;
                function y(e, t, n=!1, i, v) {
                    if (t === r.IU.Progressive)
                        return s.I_ ? function(e) {
                            const t = `./progressive/${e}`;
                            return h.set(e, t),
                                Promise.resolve(t)
                        }(e) : y(e, r.IU.BlobUrl, n, i, v);
                    if (!m.has(e)) {
                        const i = async function(e, t, n) {
                            if (!o.Cy) {
                                const r = e.startsWith("avatar") ? o.SG : o.lW
                                    , d = await a.fetch(r, e, f[t], n);
                                if (d) {
                                    let t = d;
                                    if ("audio/ogg" !== d.type || s.m5 || (t = await c(t)),
                                    "image/webp" === d.type && !(0,
                                        s.on)() && t) {
                                        const n = await (0,
                                            l._y)(e, t);
                                        n && (t = n)
                                    }
                                    const n = C(t);
                                    return h.set(e, n),
                                        n
                                }
                            }
                            if (t === r.IU.Stream) {
                                const n = new MediaSource
                                    , r = URL.createObjectURL(n);
                                let o = !1;
                                return n.addEventListener("sourceopen", (()=>{
                                        if (o)
                                            return;
                                        o = !0;
                                        const r = n.addSourceBuffer("audio/mpeg")
                                            , a = I(e, n, r);
                                        g.set(e, a),
                                            (0,
                                                d.t9)("downloadMedia", {
                                                url: e,
                                                mediaFormat: t
                                            }, a)
                                    }
                                )),
                                    h.set(e, r),
                                    r
                            }
                            const i = I(e);
                            g.set(e, i);
                            const m = await (0,
                                d.t9)("downloadMedia", {
                                url: e,
                                mediaFormat: t,
                                isHtmlAllowed: n
                            }, i);
                            if (!m)
                                throw new Error(`Failed to fetch media ${e}`);
                            let {prepared: p, mimeType: y} = m;
                            if ("audio/ogg" === y && !s.m5) {
                                const e = await (0,
                                    u.gm)(p);
                                URL.revokeObjectURL(p);
                                const t = await c(e);
                                p = C(t),
                                    y = t.type
                            }
                            if ("image/webp" === y && !(0,
                                s.on)()) {
                                const t = await (0,
                                    u.gm)(p);
                                URL.revokeObjectURL(p);
                                const n = await (0,
                                    l._y)(e, t);
                                n && (p = C(n))
                            }
                            return h.set(e, p),
                                p
                        }(e, t, n).catch((e=>{
                                o.eM && console.warn(e)
                            }
                        )).finally((()=>{
                                m.delete(e),
                                    p.delete(e),
                                    g.delete(e)
                            }
                        ));
                        m.set(e, i)
                    }
                    if (i && v) {
                        let t = p.get(e);
                        t || (t = new Map,
                            p.set(e, t)),
                            t.set(v, i)
                    }
                    return m.get(e)
                }
                function v(e) {
                    return h.get(e)
                }
                function b(e) {
                    p.forEach(((t,n)=>{
                            t.forEach((t=>{
                                    if (t === e) {
                                        const e = g.get(n);
                                        if (!e)
                                            return;
                                        (0,
                                            d.u3)(e),
                                            g.delete(n),
                                            p.delete(n)
                                    }
                                }
                            ))
                        }
                    ))
                }
                function w(e, t) {
                    const n = p.get(e);
                    n && n.delete(t)
                }
                function I(e, t, n) {
                    const r = (o,d)=>{
                            var a;
                            null === (a = p.get(e)) || void 0 === a || a.forEach((e=>{
                                    e(o),
                                    e.isCanceled && (r.isCanceled = !0)
                                }
                            )),
                            1 === o && (null == t || t.endOfStream()),
                            d && (null == n || n.appendBuffer(d))
                        }
                    ;
                    return r
                }
                function C(e) {
                    return e instanceof Blob ? URL.createObjectURL(e) : e
                }
                s.I_ && navigator.serviceWorker.addEventListener("message", (async e=>{
                        const {type: t, messageId: n, params: o} = e.data;
                        if ("requestPart" !== t)
                            return;
                        const a = await (0,
                            d.t9)("downloadMedia", {
                            mediaFormat: r.IU.Progressive,
                            ...o
                        });
                        if (!a)
                            return;
                        const {arrayBuffer: u, mimeType: s, fullSize: i} = a;
                        navigator.serviceWorker.controller.postMessage({
                            type: "partResponse",
                            messageId: n,
                            result: {
                                arrayBuffer: u,
                                mimeType: s,
                                fullSize: i
                            }
                        }, [u])
                    }
                ))
            }
            ,
            735: (e,t,n)=>{
                n.d(t, {
                    D: ()=>r
                });
                const r = []
            }
            ,
            9203: (e,t,n)=>{
                n.d(t, {
                    gl: ()=>d,
                    $y: ()=>c,
                    o5: ()=>l,
                    Qt: ()=>f
                });
                var r = n(3716)
                    , o = n(6063);
                let d;
                !function(e) {
                    e[e.Auth = 0] = "Auth",
                        e[e.Main = 1] = "Main",
                        e[e.Extra = 2] = "Extra",
                        e[e.Calls = 3] = "Calls"
                }(d || (d = {}));
                const a = {}
                    , u = {}
                    , {addCallback: s, runCallbacks: i} = (0,
                    o._)();
                async function c(e, t) {
                    if (!a[e]) {
                        switch (e) {
                            case d.Auth:
                                a[d.Auth] = n.e(133).then(n.bind(n, 1133));
                                break;
                            case d.Main:
                                r.eM && console.log(">>> START LOAD MAIN BUNDLE"),
                                    a[d.Main] = Promise.all([n.e(830), n.e(417), n.e(884), n.e(791)]).then(n.bind(n, 9791));
                                break;
                            case d.Extra:
                                a[d.Extra] = Promise.all([n.e(830), n.e(417), n.e(13)]).then(n.bind(n, 4013));
                                break;
                            case d.Calls:
                                a[d.Calls] = Promise.all([n.e(830), n.e(884), n.e(532)]).then(n.bind(n, 7936))
                        }
                        a[e].then(i)
                    }
                    const o = await a[e];
                    return u[e] || (u[e] = o),
                        l(e, t)
                }
                function l(e, t) {
                    const n = u[e];
                    if (n)
                        return n[t]
                }
                const f = s
            }
            ,
            8406: (e,t,n)=>{
                n.d(t, {
                    q3: ()=>v,
                    Nz: ()=>b,
                    r1: ()=>C,
                    Ld: ()=>E,
                    zP: ()=>P,
                    Vr: ()=>M,
                    KC: ()=>A
                });
                var r = n(1226)
                    , o = n(6137)
                    , d = n(8005)
                    , a = n(3716)
                    , u = n(5116)
                    , s = n(2858)
                    , i = n(711)
                    , c = n(9959)
                    , l = n(1638)
                    , f = n(7361)
                    , h = n(647)
                    , m = n(9118);
                function p(e) {
                    const t = e.toJSON();
                    return JSON.stringify({
                        endpoint: t.endpoint,
                        keys: t.keys
                    })
                }
                function g() {
                    return !!f.Mc && ("showNotification"in ServiceWorkerRegistration.prototype ? "denied" === Notification.permission ? (a.eM && console.warn("[PUSH] The user has blocked push notifications."),
                        !1) : "PushManager"in window || (a.eM && console.warn("[PUSH] Push messaging isn't supported."),
                        !1) : (a.eM && console.warn("[PUSH] Push notifications aren't supported."),
                        !1))
                }
                const y = new Set;
                async function v(e, t) {
                    if (void 0 !== e && y.has(e))
                        return;
                    const {notificationSoundVolume: n} = (0,
                        l.dZ)((0,
                        u.Rd)())
                        , r = t ? t / 10 : n / 10;
                    if (0 === r)
                        return;
                    const o = new Audio("./notification.mp3");
                    o.volume = r,
                        o.setAttribute("mozaudiochannel", "notification"),
                    void 0 !== e && (o.addEventListener("ended", (()=>{
                            y.add(e)
                        }
                    ), {
                        once: !0
                    }),
                        setTimeout((()=>{
                                y.delete(e)
                            }
                        ), 3e3));
                    try {
                        await o.play()
                    } catch (e) {
                        a.eM && console.warn("[PUSH] Unable to play notification sound")
                    }
                }
                const b = (0,
                    m.Ds)(v, 1e3, !0, !1);
                async function w() {
                    "Notification"in window && (["granted", "denied"].includes(Notification.permission) || await Notification.requestPermission())
                }
                async function I(e) {
                    const t = (0,
                        u.Rd)()
                        , n = (0,
                        u.uC)();
                    if (e)
                        try {
                            const t = p(e);
                            return await (0,
                                r.t9)("unregisterDevice", t),
                                await e.unsubscribe(),
                                void n.deleteDeviceToken()
                        } catch (e) {
                            a.eM && console.log("[PUSH] Unable to unsubscribe from push.", e)
                        }
                    t.push && (await (0,
                        r.t9)("unregisterDevice", t.push.deviceToken),
                        n.deleteDeviceToken())
                }
                async function C() {
                    if (!g())
                        return;
                    const e = await navigator.serviceWorker.ready
                        , t = await e.pushManager.getSubscription();
                    await I(t)
                }
                let S = !1;
                async function E() {
                    if (!g())
                        return void await w();
                    const e = await navigator.serviceWorker.ready;
                    let t = await e.pushManager.getSubscription();
                    if (function(e) {
                        const t = (0,
                            u.Rd)();
                        return !t.push || !e || p(e) !== t.push.deviceToken || Date.now() - t.push.subscribedAt > 432e5
                    }(t)) {
                        await I(t);
                        try {
                            t = await e.pushManager.subscribe({
                                userVisibleOnly: !0
                            });
                            const n = p(t);
                            a.eM && console.log("[PUSH] Received push subscription: ", n),
                                await (0,
                                    r.t9)("registerDevice", n),
                                (0,
                                    u.uC)().setDeviceToken(n)
                        } catch (e) {
                            "denied" === Notification.permission ? a.eM && console.warn("[PUSH] The user has blocked push notifications.") : a.eM && (console.log("[PUSH] Unable to subscribe to push.", e),
                            e.code === DOMException.ABORT_ERR && await w())
                        }
                    }
                }
                async function P({chat: e, message: t}) {
                    const {hasWebNotifications: n} = await async function() {
                        if (S)
                            return (0,
                                l.dZ)((0,
                                u.Rd)());
                        const [e,t] = await Promise.all([(0,
                            r.t9)("fetchNotificationSettings", {
                            serverTimeOffset: (0,
                                u.Rd)().serverTimeOffset
                        }), (0,
                            r.t9)("fetchNotificationExceptions", {
                            serverTimeOffset: (0,
                                u.Rd)().serverTimeOffset
                        })]);
                        if (!e)
                            return (0,
                                l.dZ)((0,
                                u.Rd)());
                        let n = (0,
                            c.BI)((0,
                            u.Rd)(), e);
                        return t && (n = (0,
                            c.aJ)(n, t)),
                            (0,
                                u.R3)(n),
                            S = !0,
                            (0,
                                l.dZ)(n)
                    }();
                    if (!function(e) {
                        if (!S)
                            return !1;
                        const t = (0,
                            u.Rd)();
                        return !((0,
                            s.i4)(e, (0,
                            l.dZ)(t), (0,
                            l.NJ)(t)) || e.isNotJoined || !e.isListed || document.hasFocus())
                    }(e))
                        return;
                    const f = "Notification"in window ? "denied" !== Notification.permission || (a.eM && console.warn("[PUSH] The user has blocked push notifications."),
                        !1) : (a.eM && console.warn("[PUSH] This browser does not support desktop notification"),
                        !1);
                    if (!n || !f)
                        return void b(String(t.id) || e.id);
                    if (!f)
                        return;
                    if (!t.id)
                        return;
                    const {title: m, body: p} = function(e, t) {
                        const n = (0,
                            u.Rd)()
                            , {senderId: r, replyToMessageId: o} = t
                            , a = r ? (0,
                            l.dy)(n, r) : void 0
                            , c = (0,
                            s.N5)(t)
                            , f = c && o ? (0,
                            l.hj)(n, e.id, o) : void 0
                            , {targetUserIds: h, targetChatId: m} = c || {}
                            , p = h ? h.map((e=>(0,
                            l.dy)(n, e))).filter(Boolean) : void 0
                            , g = (0,
                            s.zX)(e)
                            , y = g ? (0,
                            l.dy)(n, g) : void 0;
                        let v;
                        if ((0,
                            s.Sm)(e, (0,
                            l.dZ)(n), (0,
                            l.NJ)(n)))
                            if ((0,
                                s.Lo)(t)) {
                                const n = e && ((0,
                                    s.eA)(e) || t.senderId === t.chatId) ? e : a;
                                v = (0,
                                    d.D)(i.i0, t, n, p, f, m, {
                                    asPlain: !0
                                })
                            } else {
                                const n = (0,
                                    s.zF)(i.i0, e.id, a)
                                    , r = (0,
                                    s.MK)(i.i0, t);
                                v = n ? `${n}: ${r}` : r
                            }
                        else
                            v = "New message";
                        return {
                            title: (0,
                                s.U)(i.i0, e, y),
                            body: v
                        }
                    }(e, t)
                        , y = await async function(e) {
                        const t = (0,
                            s.RT)(e);
                        if (!t)
                            return;
                        let n = h.UV(t);
                        return n || (await h.he(t, o.IU.BlobUrl),
                            n = h.UV(t)),
                            n
                    }(e);
                    if (g()) {
                        var v;
                        null !== (v = navigator.serviceWorker) && void 0 !== v && v.controller && navigator.serviceWorker.controller.postMessage({
                            type: "newMessageNotification",
                            payload: {
                                title: m,
                                body: p,
                                icon: y,
                                chatId: e.id,
                                messageId: t.id
                            }
                        })
                    } else {
                        const n = (0,
                            u.uC)()
                            , r = {
                            body: p,
                            icon: y,
                            badge: y,
                            tag: String(t.id)
                        };
                        "vibrate"in navigator && (r.vibrate = [200, 100, 200]);
                        const o = new Notification(m,r);
                        o.onclick = ()=>{
                            o.close(),
                                n.focusMessage({
                                    chatId: e.id,
                                    messageId: t.id
                                }),
                            window.focus && window.focus()
                        }
                            ,
                            o.onshow = ()=>{
                                b(String(t.id) || e.id)
                            }
                    }
                }
                function M(e) {
                    var t;
                    !a.Cg && null !== (t = navigator.serviceWorker) && void 0 !== t && t.controller && navigator.serviceWorker.controller.postMessage({
                        type: "closeMessageNotifications",
                        payload: e
                    })
                }
                function A() {
                    var e;
                    null !== (e = navigator.serviceWorker) && void 0 !== e && e.controller && navigator.serviceWorker.controller.postMessage({
                        type: "clientReady"
                    })
                }
            }
            ,
            7926: (e,t,n)=>{
                n.d(t, {
                    L: ()=>d,
                    $: ()=>a
                });
                const r = "kz_version"
                    , o = ["Z", "K"];
                function d(e) {
                    localStorage.setItem(r, JSON.stringify(e))
                }
                function a() {
                    (function() {
                            const e = localStorage.getItem(r);
                            if (!e)
                                return !1;
                            try {
                                const t = JSON.parse(e);
                                return o.includes(t)
                            } catch (e) {
                                return !1
                            }
                        }
                    )() || d("Z")
                }
            }
            ,
            6272: (e,t,n)=>{
                n.d(t, {
                    U9: ()=>a,
                    g3: ()=>u,
                    un: ()=>s,
                    WZ: ()=>i
                });
                var r = n(782);
                const o = "X"
                    , d = "XXX XXX XXX XXX";
                function a(e, t) {
                    return e.filter((e=>e.iso2 === t))
                }
                function u(e, t="") {
                    var n;
                    let o = t.replace(/[^\d+]+/g, "");
                    o.startsWith("+") && (o = o.substr(1));
                    const d = e.filter((e=>o.startsWith(e.countryCode)))
                        , a = (0,
                        r.xH)(d.map((e=>(e.prefixes || [""]).map((t=>({
                        code: `${e.countryCode}${t}`,
                        country: e
                    })))))).filter((({code: e})=>o.startsWith(e))).sort(((e,t)=>e.code.length - t.code.length));
                    return null === (n = a[a.length - 1]) || void 0 === n ? void 0 : n.country
                }
                function s(e, t) {
                    let n = e.replace(/[^\d]+/g, "");
                    if (t)
                        n = n.substr(t.countryCode.length);
                    else if (e.startsWith("+"))
                        return e;
                    const r = function(e, t) {
                        if (!t || 0 === t.length)
                            return d;
                        if (1 === t.length)
                            return t[0];
                        const n = t.find((e=>e.startsWith(o))) || d
                            , r = t.filter((t=>{
                                const n = t.replace(/[^\dX]+/g, "");
                                if (n.startsWith(o))
                                    return !1;
                                for (let t = 0; t < e.length; t++)
                                    if (t > n.length - 1 || n[t] !== o && n[t] !== e[t])
                                        return !1;
                                return !0
                            }
                        ));
                        return 1 === r.length ? r[0] : n
                    }(n, null == t ? void 0 : t.patterns)
                        , a = [];
                    let u = 0;
                    for (let e = 0; e < n.length; e++) {
                        for (; r[u] !== o && u < r.length && (a.push(r[u]),
                        r[u] !== n[e] || (e++,
                        e !== n.length)); )
                            u++;
                        a.push(n[e]),
                            u++
                    }
                    return a.join("")
                }
                function i(e, t) {
                    const n = t.startsWith("+") ? t : `+${t}`
                        , r = u(e, n);
                    return r ? `+${r.countryCode} ${s(n, r)}` : n
                }
            }
            ,
            5780: (e,t,n)=>{
                n.d(t, {
                    q: ()=>o,
                    V: ()=>d
                });
                var r = n(6137);
                const o = e=>e.chatId.toString() + ("thread" !== e.type ? `_${e.type}` : -1 !== e.threadId ? `_${e.threadId}` : "")
                    , d = e=>{
                    if (!e)
                        return;
                    const [t,n] = e.replace(/^#/, "").split("_");
                    if (!t)
                        return;
                    const o = ["thread", "pinned", "scheduled"].includes(n);
                    return {
                        chatId: t,
                        type: n && o ? n : "thread",
                        threadId: n && !o ? Number(n) : r._f
                    }
                }
            }
            ,
            9118: (e,t,n)=>{
                function r(e, t, n=!0, r=!0) {
                    let o;
                    return (...d)=>{
                        o ? (clearTimeout(o),
                            o = void 0) : n && e(...d),
                            o = self.setTimeout((()=>{
                                    r && e(...d),
                                        o = void 0
                                }
                            ), t)
                    }
                }
                function o(e, t, n=!0) {
                    let r, o, d;
                    return (...a)=>{
                        o = !0,
                            d = a,
                        r || (n && (o = !1,
                            e(...d)),
                            r = self.setInterval((()=>{
                                    if (!o)
                                        return self.clearInterval(r),
                                            void (r = void 0);
                                    o = !1,
                                        e(...d)
                                }
                            ), t))
                    }
                }
                function d(e) {
                    return s(y, e)
                }
                function a(e) {
                    return s(v, e)
                }
                function u(e) {
                    return s(b, e)
                }
                function s(e, t) {
                    let n, r = !1;
                    return (...o)=>{
                        n = o,
                        r || (r = !0,
                            e((()=>{
                                    r = !1,
                                        t(...n)
                                }
                            )))
                    }
                }
                function i(e, t) {
                    self.requestIdleCallback ? self.requestIdleCallback(e, {
                        timeout: t
                    }) : b(e)
                }
                n.d(t, {
                    Ds: ()=>r,
                    P2: ()=>o,
                    mS: ()=>d,
                    wT: ()=>a,
                    $6: ()=>u,
                    Q8: ()=>i,
                    wO: ()=>c,
                    Pn: ()=>l,
                    T2: ()=>y,
                    D0: ()=>v,
                    R3: ()=>b,
                    zD: ()=>w,
                    Gq: ()=>I
                });
                const c = e=>new Promise((t=>{
                        setTimeout((()=>t()), e)
                    }
                ));
                function l() {
                    return new Promise((e=>{
                            y(e)
                        }
                    ))
                }
                let f, h, m, p, g;
                function y(e, t=!1) {
                    f ? t ? h.push(e) : f.push(e) : (f = t ? [] : [e],
                        h = t ? [e] : [],
                        requestAnimationFrame((()=>{
                                const e = f
                                    , t = h;
                                f = void 0,
                                    h = void 0,
                                    t.forEach((e=>e())),
                                    e.forEach((e=>e()))
                            }
                        )))
                }
                function v(e) {
                    y(e, !0)
                }
                function b(e, t=!1) {
                    m ? t ? p.push(e) : m.push(e) : (m = t ? [] : [e],
                        p = t ? [e] : [],
                        Promise.resolve().then((()=>{
                                const e = m
                                    , t = p;
                                m = void 0,
                                    p = void 0,
                                    t.forEach((e=>e())),
                                    e.forEach((e=>e()))
                            }
                        )))
                }
                function w(e) {
                    b(e, !0)
                }
                function I(e, t=!1) {
                    return g || (g = [],
                        self.addEventListener("beforeunload", (()=>{
                                g.forEach((e=>e()))
                            }
                        ))),
                        t ? g.push(e) : g.unshift(e),
                        ()=>{
                            g = g.filter((t=>t !== e))
                        }
                }
            }
            ,
            5765: (e,t,n)=>{
                let r;
                n.d(t, {
                    Z: ()=>o,
                    W: ()=>d
                });
                try {
                    r = new RegExp("[^\\p{L}\\p{M}]+","ui")
                } catch (e) {
                    r = new RegExp("[^\\wа-яё]+","i")
                }
                function o(e, t) {
                    if (!e || !t)
                        return !1;
                    const n = "string" == typeof t ? t.toLowerCase().split(r) : t
                        , o = e.toLowerCase();
                    if (1 === n.length && !o.includes(n[0]))
                        return !1;
                    let d;
                    return n.every((e=>!!o.includes(e) && (d || (d = o.split(r)),
                        d.some((t=>t.startsWith(e))))))
                }
                function d(e) {
                    const t = e.toLowerCase().split(r);
                    return e=>o(e, t)
                }
            }
            ,
            2267: (e,t,n)=>{
                n.d(t, {
                    b: ()=>r
                });
                const r = e=>Math.floor(Date.now() / 1e3) + e
            }
            ,
            4688: (e,t,n)=>{
                n.d(t, {
                    f3: ()=>m,
                    jv: ()=>l,
                    ti: ()=>i,
                    Qw: ()=>h,
                    K8: ()=>f,
                    wX: ()=>c
                });
                function r(e) {
                    return new Promise(((t,n)=>{
                            e.oncomplete = e.onsuccess = ()=>t(e.result),
                                e.onabort = e.onerror = ()=>n(e.error)
                        }
                    ))
                }
                let o;
                function d() {
                    return o || (o = function(e, t) {
                        const n = function() {
                            if (navigator.userAgentData || !/Safari\//.test(navigator.userAgent) || /Chrom(e|ium)\//.test(navigator.userAgent) || !indexedDB.databases)
                                return Promise.resolve();
                            let e;
                            return new Promise((t=>{
                                    const n = ()=>indexedDB.databases().finally(t);
                                    e = setInterval(n, 100),
                                        n()
                                }
                            )).finally((()=>clearInterval(e)))
                        }().then((()=>{
                                const e = indexedDB.open("keyval-store");
                                return e.onupgradeneeded = ()=>e.result.createObjectStore(t),
                                    r(e)
                            }
                        ));
                        return (e,r)=>n.then((n=>r(n.transaction(t, e).objectStore(t))))
                    }(0, "keyval")),
                        o
                }
                var a = n(3716)
                    , u = n(9524);
                const s = [1, 2, 3, 4, 5];
                function i(e=!1) {
                    if (e && localStorage.getItem(a.Vx))
                        return !0;
                    const t = localStorage.getItem(a.b_);
                    if (!t)
                        return !1;
                    try {
                        const e = JSON.parse(t);
                        return Boolean(e && e.id && e.dcID)
                    } catch (e) {
                        return !1
                    }
                }
                function c(e, t) {
                    const {mainDcId: n, keys: r, hashes: o} = e;
                    localStorage.setItem(a.b_, JSON.stringify({
                        dcID: n,
                        id: t
                    })),
                        localStorage.setItem("dc", String(n)),
                        Object.keys(r).map(Number).forEach((e=>{
                                localStorage.setItem(`dc${e}_auth_key`, JSON.stringify(r[e]))
                            }
                        )),
                    o && Object.keys(o).map(Number).forEach((e=>{
                            localStorage.setItem(`dc${e}_hash`, JSON.stringify(o[e]))
                        }
                    ))
                }
                function l() {
                    [a.b_, "dc", ...s.map((e=>`dc${e}_auth_key`)), ...s.map((e=>`dc${e}_hash`))].forEach((e=>{
                            localStorage.removeItem(e)
                        }
                    ))
                }
                function f() {
                    if (!i())
                        return;
                    const e = JSON.parse(localStorage.getItem(a.b_))
                        , t = Number(e.dcID)
                        , n = {}
                        , r = {};
                    return s.forEach((e=>{
                            try {
                                const t = localStorage.getItem(`dc${e}_auth_key`);
                                t && (n[e] = JSON.parse(t));
                                const o = localStorage.getItem(`dc${e}_hash`);
                                o && (r[e] = JSON.parse(o))
                            } catch (e) {
                                a.eM && console.warn("Failed to load stored session", e)
                            }
                        }
                    )),
                        Object.keys(n).length ? {
                            mainDcId: t,
                            keys: n,
                            hashes: r
                        } : void 0
                }
                async function h() {
                    const e = localStorage.getItem(a.Vx);
                    if (!e)
                        return;
                    const t = await function(e, t=d()) {
                        return t("readonly", (t=>r(t.get(e))))
                    }(`GramJs:${e}`);
                    try {
                        c(JSON.parse(t))
                    } catch (e) {
                        a.eM && console.warn("Failed to load legacy session", e)
                    }
                }
                async function m() {
                    localStorage.removeItem(a.Vx);
                    const e = await function(e=d()) {
                        const t = [];
                        return function(e, t) {
                            return e("readonly", (e=>(e.openCursor().onsuccess = function() {
                                this.result && (t(this.result),
                                    this.result.continue())
                            }
                                ,
                                r(e.transaction))))
                        }(e, (e=>t.push(e.key))).then((()=>t))
                    }();
                    await Promise.all([u.clear("GramJs"), ...e.filter((e=>"string" == typeof e && e.startsWith("GramJs:GramJs-session-"))).map((e=>function(e, t=d()) {
                        return t("readwrite", (t=>(t.delete(e),
                            r(t.transaction))))
                    }(e)))])
                }
            }
            ,
            6917: (e,t,n)=>{
                n.d(t, {
                    Z: ()=>l
                });
                var r = n(9933)
                    , o = n(9118);
                const d = JSON.parse('{"--color-primary":["#3390EC","#8774E1"],"--color-primary-opacity":["#50A2E980","#8378DB80"],"--color-primary-shade":["#4a95d6","#7b71c6"],"--color-background":["#FFFFFF","#212121"],"--color-background-secondary":["#f4f4f5","#0F0F0F"],"--color-background-secondary-accent":["#E4E4E5","#100f10"],"--color-background-own":["#EEFFDE","#8774E1"],"--color-background-own-apple":["#DCF8C5","#8774E1"],"--color-background-selected":["#F4F4F5","#2C2C2C"],"--color-background-own-selected":["#d0ffac","#6549d4"],"--color-chat-hover":["#F4F4F5","#2C2C2C"],"--color-chat-active":["#3390EC","#8774E1"],"--color-item-active":["#ededed","#292929"],"--color-text":["#000000","#FFFFFF"],"--color-text-secondary":["#707579","#AAAAAA"],"--color-text-secondary-apple":["#8E8E92","#AAAAAA"],"--color-borders":["#DADCE0","#303030"],"--color-borders-input":["#DADCE0","#5B5B5A"],"--color-dividers":["#C8C6CC","#404040"],"--color-links":["#3390EC","#8774E1"],"--color-gray":["#C4C9CC","#717579"],"--color-pinned":["#C4C9CC","#707579"],"--color-default-shadow":["#72727240","#1010109c"],"--color-light-shadow":["#7272722B","#00000040"],"--color-green":["#00C73E","#8774E1"],"--color-text-meta-colored":["#4DCD5E","#8378DB"],"--color-reply-hover":["#F4F4F4","#272727"],"--color-reply-active":["#E8E9E9","#2E2F2F"],"--color-reply-own-hover":["#D9F5CE","#7d6bca"],"--color-reply-own-hover-apple":["#cbefb7","#7d6bca"],"--color-reply-own-active":["#C5ECBE","#7264b6"],"--color-reply-own-active-apple":["#bae6a8","#7264b6"],"--color-accent-own":["#45AF54","#FFFFFF"],"--color-message-meta-own":["#4FAE4EFF","#FFFFFF88"],"--color-own-links":["#3390EC","#FFFFFF"],"--color-code":["#4a729a","#8774E1"],"--color-code-own":["#3c7940","#FFFFFF"],"--color-code-bg":["#70757914","#ffffff26"],"--color-code-own-bg":["#70757914","#ffffff26"],"--color-composer-button":["#707579CC","#AAAAAACC"],"--color-message-reaction":["#ebf3fd","#2b2a35"],"--color-message-reaction-hover":["#c5def9","#343147"],"--color-message-reaction-own":["#cef0ba","#7a68ca"],"--color-message-reaction-hover-own":["#b5e0a4","#7567bc"]}');
                let a = !1;
                const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
                    , s = new Set(["--color-primary-shade", "--color-text-secondary"])
                    , i = (e,t,n)=>(1 - n) * e + n * t
                    , c = Object.keys(d).map((e=>({
                        property: e,
                        colors: [f(d[e][0]), f(d[e][1])]
                    })))
                    , l = (e,t)=>{
                        const n = "dark" === e
                            , d = a && t
                            , u = n ? 0 : 1
                            , s = n ? 1 : 0
                            , i = Date.now()
                            , c = document.querySelector('meta[name="theme-color"]');
                        document.documentElement.classList.remove("theme-" + (n ? "light" : "dark")),
                        a && document.documentElement.classList.add("no-animations"),
                            document.documentElement.classList.add(`theme-${e}`),
                        c && c.setAttribute("content", n ? "#212121" : "#fff"),
                            setTimeout((()=>{
                                    document.documentElement.classList.remove("no-animations")
                                }
                            ), 500),
                            a = !0,
                            d ? (0,
                                o.T2)((()=>{
                                    (0,
                                        r.cK)((()=>{
                                            const e = Math.min((Date.now() - i) / 200, 1);
                                            return h(u, s, function(e) {
                                                return 1 - (1 - e) ** 3.5
                                            }(e)),
                                            e < 1
                                        }
                                    ))
                                }
                            )) : h(u, s)
                    }
                ;
                function f(e) {
                    const t = u.exec(e);
                    return {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16),
                        a: void 0 !== t[4] ? parseInt(t[4], 16) : void 0
                    }
                }
                function h(e, t, n=1) {
                    c.forEach((({property: r, colors: o})=>{
                            const d = Math.round(i(o[e].r, o[t].r, n))
                                , a = Math.round(i(o[e].g, o[t].g, n))
                                , u = Math.round(i(o[e].b, o[t].b, n))
                                , c = void 0 !== o[e].a ? Math.round(i(o[e].a, o[t].a, n)) : void 0;
                            document.documentElement.style.setProperty(r, void 0 !== c ? `rgba(${d},${a},${u},${c / 255})` : `rgb(${d},${a},${u})`),
                            s.has(r) && document.documentElement.style.setProperty(`${r}-rgb`, `${d},${a},${u}`)
                        }
                    ))
                }
            }
            ,
            2155: (e,t,n)=>{
                n.d(t, {
                    kh: ()=>d,
                    bi: ()=>u,
                    Xv: ()=>s
                });
                var r = n(3681)
                    , o = n(4284);
                function d(e) {
                    return String(e).replace(/\d(?=(\d{3})+$)/g, "$& ")
                }
                function a(e) {
                    return ".0" === String(e.toFixed(1)).substr(-2) ? Math.round(e) : e.toFixed(1).replace(".", ",")
                }
                function u(e) {
                    return e < 1e3 ? e : e < 1e6 ? `${a(e / 1e3)}K` : `${a(e / 1e6)}M`
                }
                function s(e, t=2) {
                    return e.replace(/[.,!@#$%^&*()_+=\-`~[\]/\\{}:"|<>?]+/gi, "").trim().split(/\s+/).slice(0, t).map((e=>{
                            if (!e.length)
                                return "";
                            const t = (e = (0,
                                o.g6)(e)).match(r.Z);
                            return t && e.startsWith(t[0]) ? t[0] : e.match(/./u)[0].toUpperCase()
                        }
                    )).join("")
                }
            }
            ,
            8035: (e,t,n)=>{
                function r(e, t=30) {
                    return !e || e.length <= t ? e : `${e.substr(0, t)}...`
                }
                n.d(t, {
                    Z: ()=>r
                })
            }
            ,
            862: (e,t,n)=>{
                n.d(t, {
                    Hu: ()=>s,
                    _y: ()=>i,
                    p6: ()=>c
                });
                var r = n(7361)
                    , o = n(1394)
                    , d = n(9118);
                let a, u;
                const s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
                async function i(e, t) {
                    for (l(); !u.wasmReady; )
                        await (0,
                            d.wO)(2e3);
                    const {result: n, width: r, height: o} = await function(e, t) {
                        return new Promise((n=>{
                                u.requests || (u.requests = new Map),
                                    u.requests.set(e, n),
                                    u.postMessage({
                                        id: e,
                                        blob: t
                                    })
                            }
                        ))
                    }(e, t);
                    if (r && o)
                        return function({result: e, width: t, height: n}) {
                            return a || (a = document.createElement("canvas")),
                                new Promise((r=>{
                                        const o = new ImageData(e,t,n);
                                        a.width = t,
                                            a.height = n,
                                            a.getContext("2d").putImageData(o, 0, 0),
                                            a.toBlob((e=>{
                                                    r(null != e ? e : void 0)
                                                }
                                            ), "image/png", 1)
                                    }
                                ))
                        }({
                            result: n,
                            width: r,
                            height: o
                        })
                }
                async function c(e, t) {
                    if ((0,
                        r.on)() || "data:image/webp" !== t.substr(0, 15))
                        return t;
                    l();
                    const n = await i(e, (0,
                        o.A9)(t));
                    if (!n)
                        throw new Error(`Can't convert webp to png. Url: ${t}`);
                    return (0,
                        o.YJ)(n)
                }
                function l() {
                    u || (u = new Worker(new URL(n.p + n.u(536),n.b)),
                        u.wasmReady = !1,
                        u.onmessage = f)
                }
                function f(e) {
                    const {id: t} = e.data;
                    switch (e.data.type) {
                        case "initialized":
                            u.wasmReady = !0;
                            break;
                        case "result":
                            if (u.requests.has(t)) {
                                const n = u.requests.get(t);
                                u.requests.delete(t),
                                    n(e.data)
                            }
                    }
                }
            }
            ,
            1622: (e,t,n)=>{
                n.d(t, {
                    IT: ()=>l,
                    px: ()=>f,
                    W8: ()=>h
                });
                var r = n(3716)
                    , o = n(5116)
                    , d = n(4688);
                const a = ["t.me", "telegram.me"].map((e=>`//${e}/_websync_?`))
                    , u = `${r.Ji} Z`
                    , s = "tgme_sync"
                    , i = ()=>Math.floor(Number(new Date) / 1e3);
                let c;
                const l = e=>{
                        const t = i()
                            , {canRedirect: n, ts: r} = JSON.parse(localStorage.getItem(s) || "{}");
                        return n !== e || r + 86400 <= t ? Promise.all(a.map((t=>new Promise(((n,r)=>{
                                const o = document.createElement("script")
                                    , d = ()=>!!document.body.removeChild(o);
                                o.src = t + new URLSearchParams({
                                    authed: Number(e).toString(),
                                    version: u
                                }),
                                    document.body.appendChild(o),
                                    o.onload = ()=>{
                                        (e=>{
                                                const t = i();
                                                localStorage.setItem(s, JSON.stringify({
                                                    canRedirect: e,
                                                    ts: t
                                                }))
                                            }
                                        )(e),
                                            d(),
                                        c && (clearTimeout(c),
                                            c = void 0),
                                            f(),
                                            n()
                                    }
                                    ,
                                    o.onerror = ()=>{
                                        d(),
                                            r()
                                    }
                            }
                        ))))) : Promise.resolve()
                    }
                ;
                function f() {
                    if (r.eM)
                        return;
                    if (void 0 !== c)
                        return;
                    const e = i()
                        , {ts: t} = JSON.parse(localStorage.getItem(s) || "{}")
                        , n = 86400 - (e - t);
                    c = setTimeout((()=>{
                            const {authState: e} = (0,
                                o.Rd)()
                                , t = "authorizationStateReady" === e || (0,
                                d.ti)(!0);
                            l(t)
                        }
                    ), Math.max(0, 1e3 * n))
                }
                function h() {
                    localStorage.removeItem(s)
                }
            }
            ,
            3858: (e,t,n)=>{
                n.d(t, {
                    z: ()=>l,
                    Z: ()=>h
                });
                var r = n(9118)
                    , o = n(3716)
                    , d = n(7361);
                const a = d.wB && f()
                    , u = window.innerHeight;
                let s = l()
                    , i = !1;
                const c = (0,
                    r.P2)((()=>{
                        s = l(),
                        !i && ((s.width <= o.l3 || s.width <= o.u_ && s.height <= o.rO) !== d.wB || d.wB && a !== f()) && window.location.reload()
                    }
                ), 250, !0);
                function l() {
                    let e;
                    e = d.cj ? window.visualViewport.height + window.visualViewport.pageTop : window.innerHeight;
                    const t = .01 * e;
                    return document.documentElement.style.setProperty("--vh", `${t}px`),
                        {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                }
                function f() {
                    return d.cj ? window.matchMedia("(orientation: landscape)").matches : window.matchMedia("screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape)").matches
                }
                window.addEventListener("orientationchange", c),
                    d.cj ? window.visualViewport.addEventListener("resize", c) : window.addEventListener("resize", c);
                const h = {
                    get: ()=>s,
                    getIsKeyboardVisible: ()=>u > s.height,
                    disableRefresh: function() {
                        i = !0
                    },
                    enableRefresh: function() {
                        i = !1
                    }
                }
            }
            ,
            5359: (e,t,n)=>{
                e.exports = n.p + "app-inactive.bc7953c2dfebcabce2c4..png"
            }
            ,
            2162: (e,t,n)=>{
                e.exports = n.p + "monkey.a3d5fcdc50b18dc55695..svg"
            }
            ,
            4128: (e,t,n)=>{
                e.exports = n.p + "telegram-logo.1b2bb5b107f046ea9325..svg"
            }
        }, u = {};
        function s(e) {
            var t = u[e];
            if (void 0 !== t)
                return t.exports;
            var n = u[e] = {
                exports: {}
            };
            return a[e].call(n.exports, n, n.exports, s),
                n.exports
        }
        s.m = a,
            s.n = e=>{
                var t = e && e.__esModule ? ()=>e.default : ()=>e;
                return s.d(t, {
                    a: t
                }),
                    t
            }
            ,
            t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
            s.t = function(n, r) {
                if (1 & r && (n = this(n)),
                8 & r)
                    return n;
                if ("object" == typeof n && n) {
                    if (4 & r && n.__esModule)
                        return n;
                    if (16 & r && "function" == typeof n.then)
                        return n
                }
                var o = Object.create(null);
                s.r(o);
                var d = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
                    Object.getOwnPropertyNames(a).forEach((e=>d[e] = ()=>n[e]));
                return d.default = ()=>n,
                    s.d(o, d),
                    o
            }
            ,
            s.d = (e,t)=>{
                for (var n in t)
                    s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }
            ,
            s.f = {},
            s.e = e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e, t),
                t)), [])),
            s.u = e=>e + "." + {
                13: "99afeb8b51ec6a494da3",
                99: "f03a947e6e336feffec8",
                133: "9dfaaf583ccedfce4e17",
                161: "286d0207d962142ad548",
                354: "bc8fd226ee8387b250bd",
                417: "d6702f08815b24c9bd7d",
                472: "21e5264f606f2b525030",
                501: "72ce4b6e27f459e194cd",
                524: "fe6233d30bad4eb20dc0",
                532: "a137aefcf87d9a57c87e",
                536: "55dc7dd4ab42a2c9f037",
                626: "9cb6cf645b93bb9e0df9",
                745: "9316c5c2b711c39a20a5",
                791: "3afcff552a6178cbcb09",
                830: "73181e239801042afb0c",
                884: "c8f1b9920de862fb45af",
                915: "0588cdc78683d0e9bbbc",
                941: "af78f3bce54c121af22b",
                993: "f0aad9f6787f211b4e51"
            }[e] + ".js",
            s.miniCssF = e=>e + "." + {
                13: "99afeb8b51ec6a494da3",
                133: "9dfaaf583ccedfce4e17",
                417: "d6702f08815b24c9bd7d",
                472: "21e5264f606f2b525030",
                532: "a137aefcf87d9a57c87e",
                791: "3afcff552a6178cbcb09"
            }[e] + ".css",
            s.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            s.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
            n = {},
            r = "telegram-t:",
            s.l = (e,t,o,d)=>{
                if (n[e])
                    n[e].push(t);
                else {
                    var a, u;
                    if (void 0 !== o)
                        for (var i = document.getElementsByTagName("script"), c = 0; c < i.length; c++) {
                            var l = i[c];
                            if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + o) {
                                a = l;
                                break
                            }
                        }
                    a || (u = !0,
                        (a = document.createElement("script")).charset = "utf-8",
                        a.timeout = 120,
                    s.nc && a.setAttribute("nonce", s.nc),
                        a.setAttribute("data-webpack", r + o),
                        a.src = e),
                        n[e] = [t];
                    var f = (t,r)=>{
                        a.onerror = a.onload = null,
                            clearTimeout(h);
                        var o = n[e];
                        if (delete n[e],
                        a.parentNode && a.parentNode.removeChild(a),
                        o && o.forEach((e=>e(r))),
                            t)
                            return t(r)
                    }
                        , h = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                    a.onerror = f.bind(null, a.onerror),
                        a.onload = f.bind(null, a.onload),
                    u && document.head.appendChild(a)
                }
            }
            ,
            s.r = e=>{
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            (()=>{
                    var e;
                    s.g.importScripts && (e = s.g.location + "");
                    var t = s.g.document;
                    if (!e && t && (t.currentScript && (e = t.currentScript.src),
                        !e)) {
                        var n = t.getElementsByTagName("script");
                        n.length && (e = n[n.length - 1].src)
                    }
                    if (!e)
                        throw new Error("Automatic publicPath is not supported in this browser");
                    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                        s.p = e
                }
            )(),
            o = e=>new Promise(((t,n)=>{
                    var r = s.miniCssF(e)
                        , o = s.p + r;
                    if (((e,t)=>{
                            for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                                var o = (a = n[r]).getAttribute("data-href") || a.getAttribute("href");
                                if ("stylesheet" === a.rel && (o === e || o === t))
                                    return a
                            }
                            var d = document.getElementsByTagName("style");
                            for (r = 0; r < d.length; r++) {
                                var a;
                                if ((o = (a = d[r]).getAttribute("data-href")) === e || o === t)
                                    return a
                            }
                        }
                    )(r, o))
                        return t();
                    ((e,t,n,r)=>{
                            var o = document.createElement("link");
                            o.rel = "stylesheet",
                                o.type = "text/css",
                                o.onerror = o.onload = d=>{
                                    if (o.onerror = o.onload = null,
                                    "load" === d.type)
                                        n();
                                    else {
                                        var a = d && ("load" === d.type ? "missing" : d.type)
                                            , u = d && d.target && d.target.href || t
                                            , s = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                                        s.code = "CSS_CHUNK_LOAD_FAILED",
                                            s.type = a,
                                            s.request = u,
                                            o.parentNode.removeChild(o),
                                            r(s)
                                    }
                                }
                                ,
                                o.href = t,
                                document.head.appendChild(o)
                        }
                    )(e, o, t, n)
                }
            )),
            d = {
                179: 0
            },
            s.f.miniCss = (e,t)=>{
                d[e] ? t.push(d[e]) : 0 !== d[e] && {
                    13: 1,
                    133: 1,
                    417: 1,
                    472: 1,
                    532: 1,
                    791: 1
                }[e] && t.push(d[e] = o(e).then((()=>{
                        d[e] = 0
                    }
                ), (t=>{
                        throw delete d[e],
                            t
                    }
                )))
            }
            ,
            (()=>{
                    s.b = document.baseURI || self.location.href;
                    var e = {
                        179: 0
                    };
                    s.f.j = (t,n)=>{
                        var r = s.o(e, t) ? e[t] : void 0;
                        if (0 !== r)
                            if (r)
                                n.push(r[2]);
                            else {
                                var o = new Promise(((n,o)=>r = e[t] = [n, o]));
                                n.push(r[2] = o);
                                var d = s.p + s.u(t)
                                    , a = new Error;
                                s.l(d, (n=>{
                                        if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                                            r)) {
                                            var o = n && ("load" === n.type ? "missing" : n.type)
                                                , d = n && n.target && n.target.src;
                                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")",
                                                a.name = "ChunkLoadError",
                                                a.type = o,
                                                a.request = d,
                                                r[1](a)
                                        }
                                    }
                                ), "chunk-" + t, t)
                            }
                    }
                    ;
                    var t = (t,n)=>{
                        var r, o, [d,a,u] = n, i = 0;
                        if (d.some((t=>0 !== e[t]))) {
                            for (r in a)
                                s.o(a, r) && (s.m[r] = a[r]);
                            u && u(s)
                        }
                        for (t && t(n); i < d.length; i++)
                            o = d[i],
                            s.o(e, o) && e[o] && e[o][0](),
                                e[d[i]] = 0
                    }
                        , n = self.webpackChunktelegram_t = self.webpackChunktelegram_t || [];
                    n.forEach(t.bind(null, 0)),
                        n.push = t.bind(null, n.push.bind(n))
                }
            )(),
            (()=>{
                    s(3592);
                    var e = s(3716)
                        , t = s(5116)
                        , n = s(7361)
                        , r = s(8406);
                    function o(n) {
                        const o = n.data;
                        if (e.ZT && console.log("[SW] Message from worker", o),
                            !o.type)
                            return;
                        const d = (0,
                            t.uC)();
                        switch (o.type) {
                            case "focusMessage":
                                d.focusMessage && d.focusMessage(o.payload);
                                break;
                            case "playNotificationSound":
                                (0,
                                    r.Nz)(o.payload.id)
                        }
                    }
                    function d() {
                        navigator.serviceWorker.removeEventListener("message", o),
                            navigator.serviceWorker.addEventListener("message", o),
                            (0,
                                r.KC)()
                    }
                    n.Mc && (window.addEventListener("load", (async()=>{
                            try {
                                await navigator.serviceWorker.register(new URL(s.p + s.u(524),s.b)),
                                e.eM && console.log("[SW] ServiceWorker registered"),
                                    await navigator.serviceWorker.ready,
                                    navigator.serviceWorker.controller ? (e.eM && console.log("[SW] ServiceWorker ready"),
                                        d()) : (e.eM && console.error("[SW] ServiceWorker not available"),
                                    n.cj || n.wZ || (0,
                                        t.uC)().showDialog({
                                        data: {
                                            message: "SERVICE_WORKER_DISABLED",
                                            hasErrorKey: !0
                                        }
                                    }))
                            } catch (t) {
                                e.eM && console.error("[SW] ServiceWorker registration failed: ", t)
                            }
                        }
                    )),
                        window.addEventListener("focus", (async()=>{
                                await navigator.serviceWorker.ready,
                                    d()
                            }
                        )));
                    var a = s(2916);
                    const u = {
                        isLeftColumnShown: !0,
                        isChatInfoShown: !1,
                        newChatMembersProgress: s(1713).WB.Closed,
                        uiReadyState: 0,
                        serverTimeOffset: 0,
                        authRememberMe: !0,
                        countryList: {
                            phoneCodes: [],
                            general: []
                        },
                        blocked: {
                            ids: [],
                            totalCount: 0
                        },
                        users: {
                            byId: {},
                            statusesById: {}
                        },
                        chats: {
                            listIds: {},
                            isFullyLoaded: {},
                            orderedPinnedIds: {},
                            totalCount: {},
                            byId: {}
                        },
                        messages: {
                            byChatId: {},
                            messageLists: [],
                            sponsoredByChatId: {}
                        },
                        groupCalls: {
                            byId: {}
                        },
                        scheduledMessages: {
                            byChatId: {}
                        },
                        chatFolders: {
                            byId: {},
                            activeChatFolder: 0
                        },
                        fileUploads: {
                            byMessageLocalId: {}
                        },
                        recentEmojis: ["grinning", "kissing_heart", "christmas_tree", "brain", "trophy"],
                        stickers: {
                            setsById: {},
                            added: {},
                            recent: {
                                stickers: []
                            },
                            favorite: {
                                stickers: []
                            },
                            greeting: {
                                stickers: []
                            },
                            featured: {
                                setIds: []
                            },
                            search: {},
                            forEmoji: {}
                        },
                        emojiKeywords: {},
                        gifs: {
                            saved: {},
                            search: {}
                        },
                        inlineBots: {
                            isLoading: !1,
                            byUsername: {}
                        },
                        globalSearch: {},
                        userSearch: {},
                        localTextSearch: {
                            byChatThreadKey: {}
                        },
                        localMediaSearch: {
                            byChatId: {}
                        },
                        management: {
                            byChatId: {}
                        },
                        topPeers: {},
                        topInlineBots: {},
                        mediaViewer: {},
                        audioPlayer: {
                            volume: e.Qx,
                            playbackRate: e.mw,
                            isMuted: !1
                        },
                        forwardMessages: {},
                        pollResults: {},
                        payment: {},
                        notifications: [],
                        dialogs: [],
                        activeSessions: [],
                        settings: {
                            byKey: {
                                theme: "light",
                                shouldUseSystemTheme: !0,
                                messageTextSize: n.cj ? e.b6 : n.jm ? e.AR : e.xS,
                                animationLevel: e.CX,
                                messageSendKeyCombo: "enter",
                                canAutoLoadPhotoFromContacts: !0,
                                canAutoLoadPhotoInPrivateChats: !0,
                                canAutoLoadPhotoInGroups: !0,
                                canAutoLoadPhotoInChannels: !0,
                                canAutoLoadVideoFromContacts: !0,
                                canAutoLoadVideoInPrivateChats: !0,
                                canAutoLoadVideoInGroups: !0,
                                canAutoLoadVideoInChannels: !0,
                                canAutoLoadFileFromContacts: !1,
                                canAutoLoadFileInPrivateChats: !1,
                                canAutoLoadFileInGroups: !1,
                                canAutoLoadFileInChannels: !1,
                                autoLoadFileMaxSizeMb: 10,
                                hasWebNotifications: !0,
                                hasPushNotifications: !0,
                                notificationSoundVolume: 5,
                                canAutoPlayGifs: !0,
                                canAutoPlayVideos: !0,
                                shouldSuggestStickers: !0,
                                shouldLoopStickers: !0,
                                language: "en",
                                timeFormat: "24h",
                                wasTimeFormatSetManually: !1,
                                isConnectionStatusMinimized: !1
                            },
                            themes: {
                                light: {
                                    isBlurred: !0,
                                    patternColor: e.g
                                },
                                dark: {
                                    isBlurred: !0,
                                    patternColor: e.Vv
                                }
                            },
                            privacy: {},
                            notifyExceptions: {}
                        },
                        twoFaSettings: {},
                        activeReactions: {},
                        shouldShowContextMenuHint: !0,
                        activeDownloads: {
                            byChatId: {}
                        },
                        serviceNotifications: []
                    };
                    var i = s(6137)
                        , c = s(9118)
                        , l = s(8674)
                        , f = s(782)
                        , h = s(1638)
                        , m = s(4688)
                        , p = s(5780)
                        , g = s(6590)
                        , y = s(2858);
                    const v = (0,
                        c.P2)((()=>(0,
                        c.Q8)(S)), 5e3, !1);
                    let b, w = !1;
                    function I() {
                        w = !0,
                            b = (0,
                                c.Gq)(S, !0),
                            window.addEventListener("blur", S),
                            (0,
                                t.ll)(v)
                    }
                    function C() {
                        w = !1,
                            (0,
                                t.Iq)(v),
                            window.removeEventListener("blur", S),
                        b && b()
                    }
                    function S() {
                        if (!w || (0,
                            l.zG)())
                            return;
                        const n = (0,
                            t.Rd)();
                        if (n.isLoggingOut)
                            return;
                        const r = {
                            ...u,
                            ...(0,
                                f.ei)(n, ["authState", "authPhoneNumber", "authRememberMe", "authNearestCountry", "currentUserId", "contactList", "topPeers", "topInlineBots", "recentEmojis", "push", "shouldShowContextMenuHint", "leftColumnWidth", "serviceNotifications"]),
                            audioPlayer: {
                                volume: n.audioPlayer.volume,
                                playbackRate: n.audioPlayer.playbackRate,
                                isMuted: n.audioPlayer.isMuted
                            },
                            isChatInfoShown: E(n),
                            users: P(n),
                            chats: M(n),
                            messages: A(n),
                            globalSearch: {
                                recentlyFoundChatIds: n.globalSearch.recentlyFoundChatIds
                            },
                            settings: k(n),
                            chatFolders: T(n),
                            groupCalls: N(n),
                            availableReactions: L(n)
                        }
                            , o = JSON.stringify(r);
                        localStorage.setItem(e.Uh, o)
                    }
                    function E(t) {
                        return window.innerWidth > e._m && t.isChatInfoShown
                    }
                    function P(t) {
                        const {users: {byId: n, statusesById: r, selectedId: o}} = t
                            , d = (t.chats.listIds.active || []).slice(0, e.gJ).filter(y.YC)
                            , a = Object.keys(n)
                            , u = d.concat(a).slice(0, e.lO);
                        return {
                            byId: (0,
                                f.ei)(n, u),
                            statusesById: (0,
                                f.ei)(r, u),
                            selectedId: window.innerWidth > e._m ? o : void 0
                        }
                    }
                    function M(t) {
                        const n = (t.chats.listIds.active || []).slice(0, e.gJ)
                            , {chatId: r} = (0,
                            h.Bt)(t) || {}
                            , o = n.concat(r ? [r] : []);
                        return {
                            ...t.chats,
                            byId: (0,
                                f.ei)(t.chats.byId, o),
                            listIds: {
                                active: n
                            },
                            isFullyLoaded: {},
                            orderedPinnedIds: {
                                active: t.chats.orderedPinnedIds.active
                            }
                        }
                    }
                    function A(t) {
                        const n = {}
                            , {chatId: r} = (0,
                            h.Bt)(t) || {};
                        return (t.chats.listIds.active || []).slice(0, e.gJ).concat(r ? [r] : []).forEach((e=>{
                                const r = t.messages.byChatId[e];
                                if (!r)
                                    return;
                                const o = r.threadsById[i._f];
                                o && o.viewportIds && (n[e] = {
                                    byId: (0,
                                        f.ei)(r.byId, o.viewportIds),
                                    threadsById: {
                                        [i._f]: o
                                    }
                                })
                            }
                        )),
                            {
                                byChatId: n,
                                messageLists: [],
                                sponsoredByChatId: {}
                            }
                    }
                    function k(e) {
                        const {byKey: t, themes: n} = e.settings;
                        return {
                            byKey: t,
                            themes: n,
                            privacy: {},
                            notifyExceptions: {}
                        }
                    }
                    function T(e) {
                        return {
                            ...e.chatFolders,
                            activeChatFolder: 0
                        }
                    }
                    function N(e) {
                        return {
                            ...e.groupCalls,
                            byId: {},
                            activeGroupCallId: void 0,
                            isGroupCallPanelHidden: void 0,
                            isFallbackConfirmOpen: void 0
                        }
                    }
                    function L(e) {
                        var t;
                        return null === (t = e.availableReactions) || void 0 === t ? void 0 : t.map((e=>(0,
                            f.ei)(e, ["reaction", "staticIcon", "title", "isInactive"])))
                    }
                    e.sd || ((0,
                        t.Q6)("saveSession", (()=>{
                            w || I()
                        }
                    )),
                        (0,
                            t.Q6)("reset", (()=>{
                                localStorage.removeItem(e.Uh),
                                w && C()
                            }
                        ))),
                        (0,
                            t.Q6)("init", (()=>{
                                const t = (0,
                                    f.Xh)(u);
                                return function(t) {
                                    if (!e.sd)
                                        return (0,
                                            m.ti)(!0) ? (I(),
                                            function(t) {
                                                e.eM && console.time("global-state-cache-read");
                                                const r = localStorage.getItem(e.Uh)
                                                    , o = r ? JSON.parse(r) : void 0;
                                                e.eM && console.timeEnd("global-state-cache-read"),
                                                o && function(t, n) {
                                                    if ("shouldAutoDownloadMediaFromContacts"in t.settings.byKey) {
                                                        const {shouldAutoDownloadMediaFromContacts: e, shouldAutoDownloadMediaInPrivateChats: n, shouldAutoDownloadMediaInGroups: r, shouldAutoDownloadMediaInChannels: o, shouldAutoPlayVideos: d, shouldAutoPlayGifs: a, ...u} = t.settings.byKey;
                                                        t.settings.byKey = {
                                                            ...u,
                                                            canAutoLoadPhotoFromContacts: e,
                                                            canAutoLoadVideoFromContacts: e,
                                                            canAutoLoadPhotoInPrivateChats: n,
                                                            canAutoLoadVideoInPrivateChats: n,
                                                            canAutoLoadPhotoInGroups: r,
                                                            canAutoLoadVideoInGroups: r,
                                                            canAutoLoadPhotoInChannels: o,
                                                            canAutoLoadVideoInChannels: o,
                                                            canAutoPlayVideos: d,
                                                            canAutoPlayGifs: a
                                                        }
                                                    }
                                                    t.settings.byKey = {
                                                        ...n.settings.byKey,
                                                        ...t.settings.byKey
                                                    },
                                                        t.settings.themes = {
                                                            ...n.settings.themes,
                                                            ...t.settings.themes
                                                        },
                                                        t.chatFolders = {
                                                            ...n.chatFolders,
                                                            ...t.chatFolders
                                                        },
                                                    t.stickers.greeting || (t.stickers.greeting = n.stickers.greeting),
                                                    t.activeDownloads || (t.activeDownloads = {
                                                        byChatId: {}
                                                    }),
                                                    t.serviceNotifications || (t.serviceNotifications = []),
                                                    void 0 === t.audioPlayer.volume && (t.audioPlayer.volume = e.Qx),
                                                    void 0 === t.audioPlayer.playbackRate && (t.audioPlayer.playbackRate = e.mw),
                                                    t.groupCalls || (t.groupCalls = n.groupCalls),
                                                    t.users.statusesById || (t.users.statusesById = {}),
                                                    t.messages.sponsoredByChatId || (t.messages.sponsoredByChatId = {}),
                                                    t.activeReactions || (t.activeReactions = {})
                                                }(o, t);
                                                const d = {
                                                    ...t,
                                                    ...o
                                                }
                                                    , a = n.wB ? void 0 : (0,
                                                    p.V)(g.Oy);
                                                return {
                                                    ...d,
                                                    messages: {
                                                        ...d.messages,
                                                        messageLists: a ? [a] : []
                                                    }
                                                }
                                            }(t)) : void C()
                                }(t) || t
                            }
                        ));
                    var R = s(4050)
                        , D = s(3858);
                    const O = "tt-active-tab"
                        , Z = String(Date.now() + Math.random());
                    let _;
                    localStorage.setItem(O, Z);
                    const x = window.setInterval((()=>{
                            _ && localStorage.getItem(O) !== Z && (_(),
                                clearInterval(x))
                        }
                    ), 2e3);
                    var F = s(706)
                        , B = (s(7895),
                        s(3781),
                        s(1363),
                        s(9667),
                        s(4907),
                        s(8332))
                        , $ = s(1212)
                        , U = s(1394);
                    const j = ["400 1em Roboto", "500 1em Roboto"];
                    function W() {
                        if ("fonts"in document)
                            return Promise.all(j.map((e=>document.fonts.load(e))))
                    }
                    var G = s(647)
                        , V = s(9203)
                        , H = s(6752)
                        , z = s(4128)
                        , Q = s(2162);
                    function K() {
                        const {listIds: e, byId: n} = (0,
                            t.Rd)().chats;
                        if (e.active)
                            return Promise.all(e.active.slice(0, 10).map((e=>{
                                    const t = n[e];
                                    if (!t)
                                        return;
                                    const r = (0,
                                        B.RT)(t);
                                    return r ? G.he(r, i.IU.BlobUrl) : void 0
                                }
                            )))
                    }
                    const J = {
                        main: ()=>Promise.all([(0,
                            V.$y)(V.gl.Main, "Main").then(W), K()]),
                        authPhoneNumber: ()=>Promise.all([W(), (0,
                            U.pt)(z)]),
                        authCode: ()=>(0,
                            U.pt)(Q),
                        authPassword: ()=>(0,
                            U.pt)(Q),
                        authQrCode: W
                    }
                        , q = (0,
                        t.c$)((e=>{
                            const t = (0,
                                h.Pu)(e)
                                , {background: n, backgroundColor: r} = e.settings.themes[t] || {};
                            return {
                                shouldSkipHistoryAnimations: e.shouldSkipHistoryAnimations,
                                uiReadyState: e.uiReadyState,
                                hasCustomBackground: Boolean(n),
                                hasCustomBackgroundColor: Boolean(r),
                                isRightColumnShown: (0,
                                    h.Jf)(e),
                                leftColumnWidth: e.leftColumnWidth
                            }
                        }
                    ))((({page: e, children: n, hasCustomBackground: r, hasCustomBackgroundColor: o, isRightColumnShown: d, shouldSkipHistoryAnimations: a, leftColumnWidth: u})=>{
                            const {setIsUiReady: s} = (0,
                                t.uC)()
                                , [i,l] = (0,
                                F.Z)()
                                , {shouldRender: f, transitionClassNames: h} = (0,
                                $.Z)(!i, void 0, !0);
                            return (0,
                                R.d4)((()=>{
                                    let t;
                                    return Promise.race([(0,
                                        c.wO)(700), (async()=>{
                                            try {
                                                await J[e]()
                                            } catch (e) {}
                                        }
                                    )()]).then((()=>{
                                            l(),
                                                s({
                                                    uiReadyState: 1
                                                }),
                                                t = window.setTimeout((()=>{
                                                        s({
                                                            uiReadyState: 2
                                                        })
                                                    }
                                                ), 1e3)
                                        }
                                    )),
                                        ()=>{
                                            t && (clearTimeout(t),
                                                t = void 0),
                                                s({
                                                    uiReadyState: 0
                                                })
                                        }
                                }
                            ), []),
                                R.ZP.createElement("div", {
                                    id: "UiLoader"
                                }, n, f && !a && R.ZP.createElement("div", {
                                    className: (0,
                                        H.Z)("mask", h)
                                }, "main" === e ? R.ZP.createElement(R.ZP.Fragment, null, R.ZP.createElement("div", {
                                    className: "left",
                                    style: u ? `width: ${u}px` : void 0
                                }), R.ZP.createElement("div", {
                                    className: (0,
                                        H.Z)("middle", r && "custom-bg-image", o && "custom-bg-color", d && "with-right-column")
                                }), d && R.ZP.createElement("div", {
                                    className: "right"
                                })) : R.ZP.createElement("div", {
                                    className: "blank"
                                })))
                        }
                    ));
                    var Y = s(6272)
                        , X = s(711)
                        , ee = s(9107);
                    const te = (e,t)=>{
                            const [n,r] = (0,
                                R.eJ)();
                            return e && X.Pn(e, t).then(r),
                                n
                        }
                    ;
                    function ne() {
                        let e = navigator.language;
                        return e && "pt-br" !== e && (e = e.substr(0, 2)),
                            e
                    }
                    var re = s(231)
                        , oe = s(4605)
                        , de = s(7687)
                        , ae = s(4288)
                        , ue = s(5765)
                        , se = s(2340)
                        , ie = s(4284)
                        , ce = s(9290)
                        , le = s(3106)
                        , fe = s(8964)
                        , he = s(9204);
                    const me = 200 + e.fK
                        , pe = (0,
                        R.X$)((0,
                        t.c$)((e=>{
                            const {countryList: {phoneCodes: t}} = e;
                            return {
                                phoneCodeList: t
                            }
                        }
                    ))((({id: e, value: t, isLoading: n, onChange: r, phoneCodeList: o})=>{
                            const d = (0,
                                ee.Z)()
                                , a = (0,
                                R.sO)(null)
                                , [u,s] = (0,
                                R.eJ)()
                                , [i,c] = (0,
                                R.eJ)([])
                                , l = (0,
                                R.I4)((e=>{
                                    s(e),
                                        c(function(e, t="") {
                                            if (!t.length)
                                                return e;
                                            const n = (0,
                                                ue.W)(t);
                                            return e.filter((e=>n(e.defaultName) || e.name && n(e.name)))
                                        }(o, e))
                                }
                            ), [o]);
                            (0,
                                ce.Z)((([e])=>{
                                    0 === (null == e ? void 0 : e.length) && o.length > 0 && l(u)
                                }
                            ), [o, l]);
                            const f = (0,
                                R.I4)((e=>{
                                    r(e),
                                        setTimeout((()=>l(void 0)), me)
                                }
                            ), [r, l])
                                , h = (0,
                                R.I4)((e=>{
                                    l(e.currentTarget.value)
                                }
                            ), [l])
                                , m = (0,
                                R.I4)((e=>{
                                    if (8 !== e.keyCode)
                                        return;
                                    const n = e.currentTarget;
                                    t && void 0 === u && (n.value = ""),
                                        l(n.value)
                                }
                            ), [u, l, t]);
                            return R.ZP.createElement(le.Z, {
                                className: "CountryCodeInput",
                                trigger: ({onTrigger: r, isOpen: o})=>{
                                    const s = ()=>{
                                        if (o)
                                            return;
                                        setTimeout((()=>{
                                                a.current.select()
                                            }
                                        ), 50),
                                            r();
                                        const e = document.getElementById("auth-phone-number-form");
                                        e.scrollTo({
                                            top: e.scrollHeight,
                                            behavior: "smooth"
                                        })
                                    }
                                        , i = null != u ? u : (null == t ? void 0 : t.name) || (null == t ? void 0 : t.defaultName) || "";
                                    return R.ZP.createElement("div", {
                                        className: (0,
                                            H.Z)("input-group", t && "touched")
                                    }, R.ZP.createElement("input", {
                                        ref: a,
                                        className: (0,
                                            H.Z)("form-control", o && "focus"),
                                        type: "text",
                                        id: e,
                                        value: i,
                                        autoComplete: "off",
                                        onClick: s,
                                        onFocus: s,
                                        onInput: e=>{
                                            h(e),
                                                s()
                                        }
                                        ,
                                        onKeyDown: m
                                    }), R.ZP.createElement("label", null, d("Login.SelectCountry.Title")), n ? R.ZP.createElement(he.Z, {
                                        color: "black"
                                    }) : R.ZP.createElement("i", {
                                        onClick: s,
                                        className: (0,
                                            H.Z)("css-icon-down", o && "open")
                                    }))
                                }
                            }, i.map((e=>R.ZP.createElement(fe.Z, {
                                key: e.iso2,
                                className: t && e.iso2 === t.iso2 ? "selected" : "",
                                onClick: ()=>f(e)
                            }, R.ZP.createElement("span", {
                                className: "country-flag"
                            }, (0,
                                se.Z)((0,
                                ie.Wg)(e.iso2), ["hq_emoji"])), R.ZP.createElement("span", {
                                className: "country-name"
                            }, e.name || e.defaultName), R.ZP.createElement("span", {
                                className: "country-code"
                            }, e.countryCode)))), !i.length && R.ZP.createElement(fe.Z, {
                                key: "no-results",
                                className: "no-results",
                                disabled: !0
                            }, R.ZP.createElement("span", null, d("lng_country_none"))))
                        }
                    )));
                    let ge = !1;
                    const ye = (0,
                        R.X$)((0,
                        t.c$)((e=>{
                            const {settings: {byKey: {language: t}}, countryList: {phoneCodes: n}} = e;
                            return {
                                ...(0,
                                    f.ei)(e, ["connectionState", "authState", "authPhoneNumber", "authIsLoading", "authIsLoadingQrCode", "authError", "authRememberMe", "authNearestCountry"]),
                                language: t,
                                phoneCodeList: n
                            }
                        }
                    ))((({connectionState: e, authState: r, authPhoneNumber: o, authIsLoading: d, authIsLoadingQrCode: a, authError: u, authRememberMe: s, authNearestCountry: i, phoneCodeList: c, language: l})=>{
                            const {setAuthPhoneNumber: f, setAuthRememberMe: h, loadNearestCountry: m, loadCountryList: p, clearAuthError: g, goToAuthQrCode: y, setSettingOption: v} = (0,
                                t.uC)()
                                , b = (0,
                                ee.Z)()
                                , w = (0,
                                R.sO)(null)
                                , I = ne()
                                , C = te(I, "ContinueOnThisLanguage")
                                , [S,E] = (0,
                                R.eJ)()
                                , [P,M] = (0,
                                R.eJ)()
                                , [A,k] = (0,
                                R.eJ)(!1)
                                , [T,N] = (0,
                                R.eJ)()
                                , [L,D,O] = (0,
                                F.Z)()
                                , Z = S ? `+${S.countryCode} ${P || ""}` : P
                                , _ = Z && Z.replace(/[^\d]+/g, "").length >= 7;
                            (0,
                                R.d4)((()=>{
                                    n.$b || w.current.focus()
                                }
                            ), [S]),
                                (0,
                                    R.d4)((()=>{
                                        "connectionStateReady" !== e || i || m()
                                    }
                                ), [e, i, m]),
                                (0,
                                    R.d4)((()=>{
                                        "connectionStateReady" === e && p({
                                            langCode: l
                                        })
                                    }
                                ), [e, l, p]),
                                (0,
                                    R.d4)((()=>{
                                        i && c && !S && !A && E((0,
                                            Y.U9)(c, i)[0])
                                    }
                                ), [S, i, A, c]);
                            const x = (0,
                                R.I4)((e=>{
                                    e.length || M("");
                                    const t = c && (0,
                                        Y.g3)(c, e)
                                        , n = !S || t && t.iso2 !== S.iso2 || !t && e.length ? t : S;
                                    (!S || !n || n && n.iso2 !== S.iso2) && E(n),
                                        M((0,
                                            Y.un)(e, n))
                                }
                            ), [c, S])
                                , B = (0,
                                R.I4)((()=>{
                                    D(),
                                        (0,
                                            X.m0)(I, (()=>{
                                                O(),
                                                    v({
                                                        language: I
                                                    })
                                            }
                                        ))
                                }
                            ), [D, v, I, O]);
                            (0,
                                R.d4)((()=>{
                                    void 0 === P && o && x(o)
                                }
                            ), [o, P, x]),
                                (0,
                                    R.bt)((()=>{
                                        w.current && T && w.current.setSelectionRange(...T)
                                    }
                                ), [T]);
                            const $ = (0,
                                R.sO)(!1)
                                , j = (0,
                                R.I4)((()=>{
                                    $.current = !0,
                                        requestAnimationFrame((()=>{
                                                $.current = !1
                                            }
                                        ))
                                }
                            ), [])
                                , G = (0,
                                R.I4)((e=>{
                                    E(e),
                                        M("")
                                }
                            ), [])
                                , V = (0,
                                R.I4)((e=>{
                                    u && g(),
                                    ge || (ge = !0,
                                        W(),
                                        (0,
                                            U.pt)(Q));
                                    const {value: t, selectionStart: r, selectionEnd: o} = e.target;
                                    N(r && o && o < t.length ? [r, o] : void 0),
                                        k(!0);
                                    const d = n.s$ && S && void 0 !== Z && t.length - Z.length > 1 && !$.current;
                                    x(d ? `${S.countryCode} ${t}` : t)
                                }
                            ), [u, g, S, Z, x])
                                , H = (0,
                                R.I4)((e=>{
                                    h(e.target.checked)
                                }
                            ), [h])
                                , z = "authorizationStateWaitPhoneNumber" === r;
                            return R.ZP.createElement("div", {
                                id: "auth-phone-number-form",
                                className: "custom-scroll"
                            }, R.ZP.createElement("div", {
                                className: "auth-form"
                            }, R.ZP.createElement("div", {
                                id: "logo"
                            }), R.ZP.createElement("h2", null, "Telegram"), R.ZP.createElement("p", {
                                className: "note"
                            }, b("StartText")), R.ZP.createElement("form", {
                                action: "",
                                onSubmit: function(e) {
                                    e.preventDefault(),
                                    d || _ && f({
                                        phoneNumber: Z
                                    })
                                }
                            }, R.ZP.createElement(pe, {
                                id: "sign-in-phone-code",
                                value: S,
                                isLoading: !i && !S,
                                onChange: G
                            }), R.ZP.createElement(de.Z, {
                                ref: w,
                                id: "sign-in-phone-number",
                                label: b("Login.PhonePlaceholder"),
                                value: Z,
                                error: u && b(u),
                                inputMode: "tel",
                                onChange: V,
                                onPaste: n.s$ ? j : void 0
                            }), R.ZP.createElement(oe.Z, {
                                id: "sign-in-keep-session",
                                label: "Keep me signed in",
                                checked: Boolean(s),
                                onChange: H
                            }), _ && (z ? R.ZP.createElement(re.Z, {
                                type: "submit",
                                ripple: !0,
                                isLoading: d
                            }, b("Login.Next")) : R.ZP.createElement(ae.Z, null)), z && R.ZP.createElement(re.Z, {
                                isText: !0,
                                ripple: !0,
                                isLoading: a,
                                onClick: y
                            }, b("Login.QR.Login")), I && I !== l && C && R.ZP.createElement(re.Z, {
                                isText: !0,
                                isLoading: L,
                                onClick: B
                            }, C))))
                        }
                    )));
                    var ve = s(8778);
                    const be = (0,
                        R.X$)((()=>{
                            const e = (0,
                                ve.Z)(V.gl.Auth, "AuthCode");
                            return e ? R.ZP.createElement(e, null) : R.ZP.createElement(ae.Z, null)
                        }
                    ))
                        , we = (0,
                        R.X$)((()=>{
                            const e = (0,
                                ve.Z)(V.gl.Auth, "AuthPassword");
                            return e ? R.ZP.createElement(e, null) : R.ZP.createElement(ae.Z, null)
                        }
                    ))
                        , Ie = (0,
                        R.X$)((()=>{
                            const e = (0,
                                ve.Z)(V.gl.Auth, "AuthRegister");
                            return e ? R.ZP.createElement(e, null) : R.ZP.createElement(ae.Z, null)
                        }
                    ));
                    let Ce = null;
                    class Se {
                    }
                    Se.render = function(e, t) {
                        Ce(e, t)
                    }
                        ,
                        self.QrCreator = Se,
                        function(e) {
                            function t(t, n, r, o) {
                                var d = {}
                                    , a = e(r, n);
                                a.u(t),
                                    a.J(),
                                    o = o || 0;
                                var u = a.h()
                                    , s = a.h() + 2 * o;
                                return d.text = t,
                                    d.level = n,
                                    d.version = r,
                                    d.O = s,
                                    d.a = function(e, t) {
                                        return t -= o,
                                        !(0 > (e -= o) || e >= u || 0 > t || t >= u) && a.a(e, t)
                                    }
                                    ,
                                    d
                            }
                            function n(e, t, n, r, o, d, a, u, s, i) {
                                function c(t, n, r, o, a, u, s) {
                                    t ? (e.lineTo(n + u, r + s),
                                        e.arcTo(n, r, o, a, d)) : e.lineTo(n, r)
                                }
                                a ? e.moveTo(t + d, n) : e.moveTo(t, n),
                                    c(u, r, n, r, o, -d, 0),
                                    c(s, r, o, t, o, 0, -d),
                                    c(i, t, o, t, n, d, 0),
                                    c(a, t, n, r, n, 0, d)
                            }
                            function r(e, t, n, r, o, d, a, u, s, i) {
                                function c(t, n, r, o) {
                                    e.moveTo(t + r, n),
                                        e.lineTo(t, n),
                                        e.lineTo(t, n + o),
                                        e.arcTo(t, n, t + r, n, d)
                                }
                                a && c(t, n, d, d),
                                u && c(r, n, -d, d),
                                s && c(r, o, -d, -d),
                                i && c(t, o, d, -d)
                            }
                            function o(e, o) {
                                e: {
                                    var d = o.text
                                        , a = o.v
                                        , u = o.N
                                        , s = o.K
                                        , i = o.P;
                                    for (u = Math.max(1, u || 1),
                                             s = Math.min(40, s || 40); u <= s; u += 1)
                                        try {
                                            var c = t(d, a, u, i);
                                            break e
                                        } catch (e) {}
                                    c = void 0
                                }
                                if (!c)
                                    return null;
                                for (d = e.getContext("2d"),
                                     o.background && (d.fillStyle = o.background,
                                         d.fillRect(o.left, o.top, o.size, o.size)),
                                         a = c.O,
                                         s = o.size / a,
                                         d.beginPath(),
                                         i = 0; i < a; i += 1)
                                    for (u = 0; u < a; u += 1) {
                                        var l = d
                                            , f = o.left + u * s
                                            , h = o.top + i * s
                                            , m = i
                                            , p = u
                                            , g = c.a
                                            , y = f + s
                                            , v = h + s
                                            , b = m - 1
                                            , w = m + 1
                                            , I = p - 1
                                            , C = p + 1
                                            , S = Math.floor(Math.min(.5, Math.max(0, o.R)) * s)
                                            , E = g(m, p)
                                            , P = g(b, I)
                                            , M = g(b, p);
                                        b = g(b, C);
                                        var A = g(m, C);
                                        C = g(w, C),
                                            p = g(w, p),
                                            w = g(w, I),
                                            m = g(m, I),
                                            f = Math.round(f),
                                            h = Math.round(h),
                                            y = Math.round(y),
                                            v = Math.round(v),
                                            E ? n(l, f, h, y, v, S, !M && !m, !M && !A, !p && !A, !p && !m) : r(l, f, h, y, v, S, M && m && P, M && A && b, p && A && C, p && m && w)
                                    }
                                return function(e, t) {
                                    var n = t.fill;
                                    if ("string" == typeof n)
                                        e.fillStyle = n;
                                    else {
                                        var r = n.type
                                            , o = n.colorStops;
                                        if (n = n.position.map((e=>Math.round(e * t.size))),
                                        "linear-gradient" === r)
                                            var d = e.createLinearGradient.apply(e, n);
                                        else {
                                            if ("radial-gradient" !== r)
                                                throw Error("Unsupported fill");
                                            d = e.createRadialGradient.apply(e, n)
                                        }
                                        o.forEach((([e,t])=>{
                                                d.addColorStop(e, t)
                                            }
                                        )),
                                            e.fillStyle = d
                                    }
                                }(d, o),
                                    d.fill(),
                                    e
                            }
                            var d = {
                                minVersion: 1,
                                maxVersion: 40,
                                ecLevel: "L",
                                left: 0,
                                top: 0,
                                size: 200,
                                fill: "#000",
                                background: null,
                                text: "no text",
                                radius: .5,
                                quiet: 0
                            };
                            Ce = function(e, t) {
                                var n = {};
                                Object.assign(n, d, e),
                                    n.N = n.minVersion,
                                    n.K = n.maxVersion,
                                    n.v = n.ecLevel,
                                    n.left = n.left,
                                    n.top = n.top,
                                    n.size = n.size,
                                    n.fill = n.fill,
                                    n.background = n.background,
                                    n.text = n.text,
                                    n.R = n.radius,
                                    n.P = n.quiet,
                                    t instanceof HTMLCanvasElement ? (t.width === n.size && t.height === n.size || (t.width = n.size,
                                        t.height = n.size),
                                        t.getContext("2d").clearRect(0, 0, t.width, t.height),
                                        o(t, n)) : ((e = document.createElement("canvas")).width = n.size,
                                        e.height = n.size,
                                        n = o(e, n),
                                        t.appendChild(n))
                            }
                        }(function() {
                            function e(o, a) {
                                function u(e, t) {
                                    for (var n = -1; 7 >= n; n += 1)
                                        if (!(-1 >= e + n || l <= e + n))
                                            for (var r = -1; 7 >= r; r += 1)
                                                -1 >= t + r || l <= t + r || (c[e + n][t + r] = 0 <= n && 6 >= n && (0 == r || 6 == r) || 0 <= r && 6 >= r && (0 == n || 6 == n) || 2 <= n && 4 >= n && 2 <= r && 4 >= r)
                                }
                                function s(e, n) {
                                    for (var a = l = 4 * o + 17, s = Array(a), m = 0; m < a; m += 1) {
                                        s[m] = Array(a);
                                        for (var p = 0; p < a; p += 1)
                                            s[m][p] = null
                                    }
                                    for (c = s,
                                             u(0, 0),
                                             u(l - 7, 0),
                                             u(0, l - 7),
                                             a = r.G(o),
                                             s = 0; s < a.length; s += 1)
                                        for (m = 0; m < a.length; m += 1) {
                                            p = a[s];
                                            var g = a[m];
                                            if (null == c[p][g])
                                                for (var y = -2; 2 >= y; y += 1)
                                                    for (var v = -2; 2 >= v; v += 1)
                                                        c[p + y][g + v] = -2 == y || 2 == y || -2 == v || 2 == v || 0 == y && 0 == v
                                        }
                                    for (a = 8; a < l - 8; a += 1)
                                        null == c[a][6] && (c[a][6] = 0 == a % 2);
                                    for (a = 8; a < l - 8; a += 1)
                                        null == c[6][a] && (c[6][a] = 0 == a % 2);
                                    for (a = r.w(i << 3 | n),
                                             s = 0; 15 > s; s += 1)
                                        m = !e && 1 == (a >> s & 1),
                                            c[6 > s ? s : 8 > s ? s + 1 : l - 15 + s][8] = m,
                                            c[8][8 > s ? l - s - 1 : 9 > s ? 15 - s : 14 - s] = m;
                                    if (c[l - 8][8] = !e,
                                    7 <= o) {
                                        for (a = r.A(o),
                                                 s = 0; 18 > s; s += 1)
                                            m = !e && 1 == (a >> s & 1),
                                                c[Math.floor(s / 3)][s % 3 + l - 8 - 3] = m;
                                        for (s = 0; 18 > s; s += 1)
                                            m = !e && 1 == (a >> s & 1),
                                                c[s % 3 + l - 8 - 3][Math.floor(s / 3)] = m
                                    }
                                    if (null == f) {
                                        for (e = d.I(o, i),
                                                 a = function() {
                                                     var e = []
                                                         , t = 0
                                                         , n = {
                                                         B: function() {
                                                             return e
                                                         },
                                                         c: function(t) {
                                                             return 1 == (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                                                         },
                                                         put: function(e, t) {
                                                             for (var r = 0; r < t; r += 1)
                                                                 n.m(1 == (e >>> t - r - 1 & 1))
                                                         },
                                                         f: function() {
                                                             return t
                                                         },
                                                         m: function(n) {
                                                             var r = Math.floor(t / 8);
                                                             e.length <= r && e.push(0),
                                                             n && (e[r] |= 128 >>> t % 8),
                                                                 t += 1
                                                         }
                                                     };
                                                     return n
                                                 }(),
                                                 s = 0; s < h.length; s += 1)
                                            m = h[s],
                                                a.put(4, 4),
                                                a.put(m.b(), r.f(4, o)),
                                                m.write(a);
                                        for (s = m = 0; s < e.length; s += 1)
                                            m += e[s].j;
                                        if (a.f() > 8 * m)
                                            throw Error("code length overflow. (" + a.f() + ">" + 8 * m + ")");
                                        for (a.f() + 4 <= 8 * m && a.put(0, 4); 0 != a.f() % 8; )
                                            a.m(!1);
                                        for (; !(a.f() >= 8 * m || (a.put(236, 8),
                                        a.f() >= 8 * m)); )
                                            a.put(17, 8);
                                        var b = 0;
                                        for (m = s = 0,
                                                 p = Array(e.length),
                                                 g = Array(e.length),
                                                 y = 0; y < e.length; y += 1) {
                                            var w = e[y].j
                                                , I = e[y].o - w;
                                            for (s = Math.max(s, w),
                                                     m = Math.max(m, I),
                                                     p[y] = Array(w),
                                                     v = 0; v < p[y].length; v += 1)
                                                p[y][v] = 255 & a.B()[v + b];
                                            for (b += w,
                                                     v = r.C(I),
                                                     w = t(p[y], v.b() - 1).l(v),
                                                     g[y] = Array(v.b() - 1),
                                                     v = 0; v < g[y].length; v += 1)
                                                I = v + w.b() - g[y].length,
                                                    g[y][v] = 0 <= I ? w.c(I) : 0
                                        }
                                        for (v = a = 0; v < e.length; v += 1)
                                            a += e[v].o;
                                        for (a = Array(a),
                                                 v = b = 0; v < s; v += 1)
                                            for (y = 0; y < e.length; y += 1)
                                                v < p[y].length && (a[b] = p[y][v],
                                                    b += 1);
                                        for (v = 0; v < m; v += 1)
                                            for (y = 0; y < e.length; y += 1)
                                                v < g[y].length && (a[b] = g[y][v],
                                                    b += 1);
                                        f = a
                                    }
                                    for (e = f,
                                             a = -1,
                                             s = l - 1,
                                             m = 7,
                                             p = 0,
                                             n = r.F(n),
                                             g = l - 1; 0 < g; g -= 2)
                                        for (6 == g && --g; ; ) {
                                            for (y = 0; 2 > y; y += 1)
                                                null == c[s][g - y] && (v = !1,
                                                p < e.length && (v = 1 == (e[p] >>> m & 1)),
                                                n(s, g - y) && (v = !v),
                                                    c[s][g - y] = v,
                                                -1 == --m && (p += 1,
                                                    m = 7));
                                            if (0 > (s += a) || l <= s) {
                                                s -= a,
                                                    a = -a;
                                                break
                                            }
                                        }
                                }
                                var i = n[a]
                                    , c = null
                                    , l = 0
                                    , f = null
                                    , h = []
                                    , m = {
                                    u: function(t) {
                                        t = function(t) {
                                            var n = e.s(t);
                                            return {
                                                S: function() {
                                                    return 4
                                                },
                                                b: function() {
                                                    return n.length
                                                },
                                                write: function(e) {
                                                    for (var t = 0; t < n.length; t += 1)
                                                        e.put(n[t], 8)
                                                }
                                            }
                                        }(t),
                                            h.push(t),
                                            f = null
                                    },
                                    a: function(e, t) {
                                        if (0 > e || l <= e || 0 > t || l <= t)
                                            throw Error(e + "," + t);
                                        return c[e][t]
                                    },
                                    h: function() {
                                        return l
                                    },
                                    J: function() {
                                        for (var e = 0, t = 0, n = 0; 8 > n; n += 1) {
                                            s(!0, n);
                                            var o = r.D(m);
                                            (0 == n || e > o) && (e = o,
                                                t = n)
                                        }
                                        s(!1, t)
                                    }
                                };
                                return m
                            }
                            function t(e, n) {
                                if (void 0 === e.length)
                                    throw Error(e.length + "/" + n);
                                var r = function() {
                                    for (var t = 0; t < e.length && 0 == e[t]; )
                                        t += 1;
                                    for (var r = Array(e.length - t + n), o = 0; o < e.length - t; o += 1)
                                        r[o] = e[o + t];
                                    return r
                                }()
                                    , d = {
                                    c: function(e) {
                                        return r[e]
                                    },
                                    b: function() {
                                        return r.length
                                    },
                                    multiply: function(e) {
                                        for (var n = Array(d.b() + e.b() - 1), r = 0; r < d.b(); r += 1)
                                            for (var a = 0; a < e.b(); a += 1)
                                                n[r + a] ^= o.i(o.g(d.c(r)) + o.g(e.c(a)));
                                        return t(n, 0)
                                    },
                                    l: function(e) {
                                        if (0 > d.b() - e.b())
                                            return d;
                                        for (var n = o.g(d.c(0)) - o.g(e.c(0)), r = Array(d.b()), a = 0; a < d.b(); a += 1)
                                            r[a] = d.c(a);
                                        for (a = 0; a < e.b(); a += 1)
                                            r[a] ^= o.i(o.g(e.c(a)) + n);
                                        return t(r, 0).l(e)
                                    }
                                };
                                return d
                            }
                            e.s = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e.charCodeAt(n);
                                    128 > r ? t.push(r) : 2048 > r ? t.push(192 | r >> 6, 128 | 63 & r) : 55296 > r || 57344 <= r ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++,
                                        r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)),
                                        t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                                }
                                return t
                            }
                            ;
                            var n = {
                                L: 1,
                                M: 0,
                                Q: 3,
                                H: 2
                            }
                                , r = function() {
                                function e(e) {
                                    for (var t = 0; 0 != e; )
                                        t += 1,
                                            e >>>= 1;
                                    return t
                                }
                                var n = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
                                return {
                                    w: function(t) {
                                        for (var n = t << 10; 0 <= e(n) - e(1335); )
                                            n ^= 1335 << e(n) - e(1335);
                                        return 21522 ^ (t << 10 | n)
                                    },
                                    A: function(t) {
                                        for (var n = t << 12; 0 <= e(n) - e(7973); )
                                            n ^= 7973 << e(n) - e(7973);
                                        return t << 12 | n
                                    },
                                    G: function(e) {
                                        return n[e - 1]
                                    },
                                    F: function(e) {
                                        switch (e) {
                                            case 0:
                                                return function(e, t) {
                                                    return 0 == (e + t) % 2
                                                }
                                                    ;
                                            case 1:
                                                return function(e) {
                                                    return 0 == e % 2
                                                }
                                                    ;
                                            case 2:
                                                return function(e, t) {
                                                    return 0 == t % 3
                                                }
                                                    ;
                                            case 3:
                                                return function(e, t) {
                                                    return 0 == (e + t) % 3
                                                }
                                                    ;
                                            case 4:
                                                return function(e, t) {
                                                    return 0 == (Math.floor(e / 2) + Math.floor(t / 3)) % 2
                                                }
                                                    ;
                                            case 5:
                                                return function(e, t) {
                                                    return 0 == e * t % 2 + e * t % 3
                                                }
                                                    ;
                                            case 6:
                                                return function(e, t) {
                                                    return 0 == (e * t % 2 + e * t % 3) % 2
                                                }
                                                    ;
                                            case 7:
                                                return function(e, t) {
                                                    return 0 == (e * t % 3 + (e + t) % 2) % 2
                                                }
                                                    ;
                                            default:
                                                throw Error("bad maskPattern:" + e)
                                        }
                                    },
                                    C: function(e) {
                                        for (var n = t([1], 0), r = 0; r < e; r += 1)
                                            n = n.multiply(t([1, o.i(r)], 0));
                                        return n
                                    },
                                    f: function(e, t) {
                                        if (4 != e || 1 > t || 40 < t)
                                            throw Error("mode: " + e + "; type: " + t);
                                        return 10 > t ? 8 : 16
                                    },
                                    D: function(e) {
                                        for (var t = e.h(), n = 0, r = 0; r < t; r += 1)
                                            for (var o = 0; o < t; o += 1) {
                                                for (var d = 0, a = e.a(r, o), u = -1; 1 >= u; u += 1)
                                                    if (!(0 > r + u || t <= r + u))
                                                        for (var s = -1; 1 >= s; s += 1)
                                                            0 > o + s || t <= o + s || (0 != u || 0 != s) && a == e.a(r + u, o + s) && (d += 1);
                                                5 < d && (n += 3 + d - 5)
                                            }
                                        for (r = 0; r < t - 1; r += 1)
                                            for (o = 0; o < t - 1; o += 1)
                                                d = 0,
                                                e.a(r, o) && (d += 1),
                                                e.a(r + 1, o) && (d += 1),
                                                e.a(r, o + 1) && (d += 1),
                                                e.a(r + 1, o + 1) && (d += 1),
                                                (0 == d || 4 == d) && (n += 3);
                                        for (r = 0; r < t; r += 1)
                                            for (o = 0; o < t - 6; o += 1)
                                                e.a(r, o) && !e.a(r, o + 1) && e.a(r, o + 2) && e.a(r, o + 3) && e.a(r, o + 4) && !e.a(r, o + 5) && e.a(r, o + 6) && (n += 40);
                                        for (o = 0; o < t; o += 1)
                                            for (r = 0; r < t - 6; r += 1)
                                                e.a(r, o) && !e.a(r + 1, o) && e.a(r + 2, o) && e.a(r + 3, o) && e.a(r + 4, o) && !e.a(r + 5, o) && e.a(r + 6, o) && (n += 40);
                                        for (o = d = 0; o < t; o += 1)
                                            for (r = 0; r < t; r += 1)
                                                e.a(r, o) && (d += 1);
                                        return n + Math.abs(100 * d / t / t - 50) / 5 * 10
                                    }
                                }
                            }()
                                , o = function() {
                                for (var e = Array(256), t = Array(256), n = 0; 8 > n; n += 1)
                                    e[n] = 1 << n;
                                for (n = 8; 256 > n; n += 1)
                                    e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
                                for (n = 0; 255 > n; n += 1)
                                    t[e[n]] = n;
                                return {
                                    g: function(e) {
                                        if (1 > e)
                                            throw Error("glog(" + e + ")");
                                        return t[e]
                                    },
                                    i: function(t) {
                                        for (; 0 > t; )
                                            t += 255;
                                        for (; 256 <= t; )
                                            t -= 255;
                                        return e[t]
                                    }
                                }
                            }()
                                , d = function() {
                                function e(e, r) {
                                    switch (r) {
                                        case n.L:
                                            return t[4 * (e - 1)];
                                        case n.M:
                                            return t[4 * (e - 1) + 1];
                                        case n.Q:
                                            return t[4 * (e - 1) + 2];
                                        case n.H:
                                            return t[4 * (e - 1) + 3]
                                    }
                                }
                                var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
                                return {
                                    I: function(t, n) {
                                        var r = e(t, n);
                                        if (void 0 === r)
                                            throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + n);
                                        t = r.length / 3,
                                            n = [];
                                        for (var o = 0; o < t; o += 1)
                                            for (var d = r[3 * o], a = r[3 * o + 1], u = r[3 * o + 2], s = 0; s < d; s += 1) {
                                                var i = u
                                                    , c = {};
                                                c.o = a,
                                                    c.j = i,
                                                    n.push(c)
                                            }
                                        return n
                                    }
                                }
                            }();
                            return e
                        }());
                    const Ee = QrCreator
                        , Pe = (0,
                        R.X$)((0,
                        t.c$)((e=>{
                            const {connectionState: t, authState: n, authQrCode: r, settings: {byKey: {language: o}}} = e;
                            return {
                                connectionState: t,
                                authState: n,
                                authQrCode: r,
                                language: o
                            }
                        }
                    ))((({connectionState: n, authState: r, authQrCode: o, language: d})=>{
                            const {returnToAuthPhoneNumber: a, setSettingOption: u} = (0,
                                t.uC)()
                                , s = ne()
                                , i = (0,
                                ee.Z)()
                                , c = (0,
                                R.sO)(null)
                                , l = te(s, "ContinueOnThisLanguage")
                                , [f,h,m] = (0,
                                F.Z)();
                            (0,
                                R.d4)((()=>{
                                    if (!o || "connectionStateReady" !== n)
                                        return;
                                    const e = c.current;
                                    e.innerHTML = "",
                                        e.classList.remove("pre-animate"),
                                        Ee.render({
                                            text: `tg://login?token=${o.token}`,
                                            radius: .5,
                                            ecLevel: "M",
                                            fill: "#4E96D4",
                                            size: 280
                                        }, e)
                                }
                            ), [n, o]),
                                (0,
                                    R.d4)((()=>{
                                        "connectionStateReady" === n && (0,
                                            X.m0)(e.sR)
                                    }
                                ), [n]);
                            const p = (0,
                                R.I4)((()=>{
                                    h(),
                                        (0,
                                            X.m0)(s, (()=>{
                                                m(),
                                                    u({
                                                        language: s
                                                    })
                                            }
                                        ))
                                }
                            ), [h, u, s, m])
                                , g = "authorizationStateWaitQrCode" === r;
                            return R.ZP.createElement("div", {
                                id: "auth-qr-form",
                                className: "custom-scroll"
                            }, R.ZP.createElement("div", {
                                className: "auth-form qr"
                            }, o ? R.ZP.createElement("div", {
                                key: "qr-container",
                                className: "qr-container pre-animate",
                                ref: c
                            }) : R.ZP.createElement("div", {
                                key: "qr-loading",
                                className: "qr-loading"
                            }, R.ZP.createElement(ae.Z, null)), R.ZP.createElement("h3", null, i("Login.QR.Title")), R.ZP.createElement("ol", null, R.ZP.createElement("li", null, R.ZP.createElement("span", null, i("Login.QR.Help1"))), R.ZP.createElement("li", null, R.ZP.createElement("span", null, (0,
                                se.Z)(i("Login.QR.Help2"), ["simple_markdown"]))), R.ZP.createElement("li", null, R.ZP.createElement("span", null, i("Login.QR.Help3")))), g && R.ZP.createElement(re.Z, {
                                isText: !0,
                                onClick: a
                            }, i("Login.QR.Cancel")), s && s !== d && l && R.ZP.createElement(re.Z, {
                                isText: !0,
                                isLoading: f,
                                onClick: p
                            }, l)))
                        }
                    )))
                        , Me = (0,
                        R.X$)((0,
                        t.c$)((e=>(0,
                        f.ei)(e, ["authState"])))((({authState: e})=>{
                            const {reset: r, initApi: o, returnToAuthPhoneNumber: d, goToAuthQrCode: a} = (0,
                                t.uC)();
                            (0,
                                R.d4)((()=>{
                                    r(),
                                        o()
                                }
                            ), [r, o]);
                            const u = "iOS" === n.Lt || "Android" === n.Lt;
                            switch ((0,
                                g.ZP)(!u && "authorizationStateWaitPhoneNumber" === e || u && "authorizationStateWaitQrCode" === e, (()=>{
                                    u ? d() : a()
                                }
                            )),
                                (0,
                                    R.d4)((()=>(D.Z.disableRefresh(),
                                        ()=>{
                                            D.Z.enableRefresh()
                                        }
                                )), []),
                                e) {
                                case "authorizationStateWaitCode":
                                    return R.ZP.createElement(q, {
                                        page: "authCode",
                                        key: "authCode"
                                    }, R.ZP.createElement(be, null));
                                case "authorizationStateWaitPassword":
                                    return R.ZP.createElement(q, {
                                        page: "authPassword",
                                        key: "authPassword"
                                    }, R.ZP.createElement(we, null));
                                case "authorizationStateWaitRegistration":
                                    return R.ZP.createElement(Ie, null);
                                case "authorizationStateWaitPhoneNumber":
                                    return R.ZP.createElement(q, {
                                        page: "authPhoneNumber",
                                        key: "authPhoneNumber"
                                    }, R.ZP.createElement(ye, null));
                                case "authorizationStateWaitQrCode":
                                    return R.ZP.createElement(q, {
                                        page: "authQrCode",
                                        key: "authQrCode"
                                    }, R.ZP.createElement(Pe, null));
                                default:
                                    return u ? R.ZP.createElement(q, {
                                        page: "authPhoneNumber",
                                        key: "authPhoneNumber"
                                    }, R.ZP.createElement(ye, null)) : R.ZP.createElement(q, {
                                        page: "authQrCode",
                                        key: "authQrCode"
                                    }, R.ZP.createElement(Pe, null))
                            }
                        }
                    )))
                        , Ae = (0,
                        R.X$)((()=>{
                            const e = (0,
                                ve.Z)(V.gl.Main, "Main");
                            return e ? R.ZP.createElement(e, null) : void 0
                        }
                    ));
                    var ke = s(5359);
                    const Te = ()=>R.ZP.createElement("div", {
                        id: "AppInactive"
                    }, R.ZP.createElement("div", {
                        className: "content"
                    }, R.ZP.createElement("img", {
                        src: ke,
                        alt: ""
                    }), R.ZP.createElement("h3", {
                        className: "title"
                    }, "Such error, many tabs"), R.ZP.createElement("div", {
                        className: "description"
                    }, "Telegram supports only one active tab with the app.", R.ZP.createElement("br", null), "Please reload this page to continue using this tab or close it."), R.ZP.createElement("div", {
                        className: "actions"
                    }, R.ZP.createElement(re.Z, {
                        isText: !0,
                        ripple: !0,
                        onClick: ()=>{
                            window.location.reload()
                        }
                    }, "Reload app"))));
                    function Ne() {
                        return t.ZP.createElement(q, {
                            page: "main",
                            key: "main"
                        }, t.ZP.createElement(Ae, null))
                    }
                    const Le = (0,
                        t.c$)((e=>(0,
                        f.ei)(e, ["authState"])))((({authState: n})=>{
                            const {disconnect: r} = (0,
                                t.uC)()
                                , [o,d] = (0,
                                F.Z)(!1);
                            if ((0,
                                R.d4)((()=>{
                                    (0,
                                        D.z)(),
                                        _ = ()=>{
                                            r(),
                                                document.title = `${e.Ti}${e.ou}`,
                                                d()
                                        }
                                }
                            ), [r, d]),
                                o)
                                return t.ZP.createElement(Te, null);
                            if (n)
                                switch (n) {
                                    case "authorizationStateWaitPhoneNumber":
                                    case "authorizationStateWaitCode":
                                    case "authorizationStateWaitPassword":
                                    case "authorizationStateWaitRegistration":
                                    case "authorizationStateWaitQrCode":
                                        return t.ZP.createElement(Me, null);
                                    case "authorizationStateClosed":
                                    case "authorizationStateClosing":
                                    case "authorizationStateLoggingOut":
                                    case "authorizationStateReady":
                                        return Ne()
                                }
                            return (0,
                                m.ti)(!0) ? Ne() : t.ZP.createElement(Me, null)
                        }
                    ));
                    e.eM && console.log(">>> INIT"),
                        (0,
                            t.uC)().init(),
                    e.eM && console.log(">>> START INITIAL RENDER"),
                        a.Z.render(t.ZP.createElement(Le, null), document.getElementById("root")),
                    e.eM && console.log(">>> FINISH INITIAL RENDER"),
                        document.addEventListener("dblclick", (()=>{
                                console.warn("GLOBAL STATE", (0,
                                    t.Rd)())
                            }
                        ))
                }
            )()
    }
)();
//# sourceMappingURL=main.1828dfbf070eb333c379.js.map
