// ==UserScript==
// @name         爱问答助手
// @namespace    aiask/askHelper
// @version      2.6.3
// @author       aiask
// @description  全平台网课答题助手，一键解析当前页面试题并获取答案，支持作业 / 考试 / 章节测验的自动收录与答题。已适配【超星学习通、知到智慧树、中国大学MOOC、职教云·智慧职教、云班课、国家开放大学、广东开放大学、上海开放大学、江苏开放大学、云南开放大学、四川开放大学、云上河开、安徽继续教育、河南继续教育、武汉理工继续教育、东北财经大学成教、芯位教育、青书学堂、优课在线UOOC、西财在线、华医网、麦能网、良师在线、川农在线、成教云、电大中专、京人平台、北京联大学堂、绎通继教云、继教云、继教在线、学起Plus、日照专业技术人员继续教育、亿学宝、文顶在线、柠檬文才、春风雨、出头系统、云幕学苑、21tb、168网校、learnin、广西自考助学】等 40+ 平台，更多平台持续适配中...
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAHVQTFRFR3BMgICBQD8/QUVHQ0ZIRUhKX2FiQD8/Tk1NP0VJPzs7Pz8/QD4+UE9QQD8/PVlnQD8/M6vj////n5+fN5C60NDQSl9qOXWSZL/qTFNXzOr4QWl8yMjItLS02traOIOnNZzN6OfnlJeZ9/f3PYGgpdrzmdXxgSBJqQAAABB0Uk5TAP5E6vys+7/Q0RhsfPFV/OwFarYAAAEESURBVHjapdHrboMgGIBhUHBaD/sAlTE8VOt2/5c4GlBMRZOl7w8j+kQQ0FaVwbG48IDq+piMPcgkO1bD/8DXvhD4/fb9ePDuGiqa2krV7pO1AxSLYIl2ABoeTLSvYMBi4N0sphOAlVaqg1aTPggmZYYaFvNMBYGQz6G6m2vbhEBvF81MxALFTDpbQQd3ZhvBgxqiFfBEO/CJ7ZxkNPcUbWBwn5DJw4KSsJHcHPCTLLDuQxpLkiMLbAIWJs1wBRVkyAFXT7Sa+AYQjTywNfOD74DNA18I9Ifjpg7Es/3Jj5eKyIEcBgNwhk5L8XMPonMQQcfNhBfRpIfbFbiRskCX5enFyz/07TSN9vGxKwAAAABJRU5ErkJggg==
// @match        *://*.chaoxing.com/*
// @match        *://*.hlju.edu.cn/*
// @match        *://*.ecust.edu.cn/*
// @match        *://lms.ouchn.cn/*
// @match        *://*.ouchn.cn/*
// @match        *://xczxzdbf.moodle.qwbx.ouchn.cn/*
// @match        *://study.ouchn.cn/*
// @match        *://moodle.syxy.ouchn.cn/*
// @match        *://moodle.qwbx.ouchn.cn/*
// @match        *://*.tongyi.com/*
// @match        *://chat.deepseek.com/*
// @match        *://*.zhihuishu.com/*
// @match        *://course.ougd.cn/*
// @match        *://elearning.bjou.edu.cn/*
// @match        *://whkpc.hnqtyq.cn:5678/*
// @match        *://www.51xinwei.com/*
// @match        *://*.w-ling.cn/*
// @match        *://*.edu-edu.com/*
// @match        *://xuexi.jsou.cn/*
// @match        *://*.icve.com.cn/*
// @match        *://zice.cnzx.info/*
// @match        *://any.cnzx.info:81/*
// @match        *://www.icourse163.org/*
// @match        *://*.shou.org.cn/*
// @match        *://*.ahjxjy.cn/*
// @match        *://*.chinaedu.net/*
// @match        *://*.qingshuxuetang.com/*
// @match        *://cce.org.uooconline.com/*
// @match        *://*.courshare.cn/*
// @match        *://*.cep.webtrn.cn/*
// @match        *://*.webtrn.cn/*
// @match        *://*.cj-edu.com/*
// @match        *://*.ytccr.com/*
// @match        *://*.exam-cloud.cn/*
// @match        *://gdrtvu.exam-cloud.cn/*
// @match        *://*.open.ha.cn/*
// @match        *://lhycjy.cloudwis.tech/*
// @match        *://*.sclecb.cn/*
// @match        *://*.web2.superchutou.com/*
// @match        *://*.ls365.net/*
// @match        *://*.jijiaox.com/*
// @match        *://*.wencaischool.net/*
// @match        *://sdrz.gxk.yxlearning.com/*
// @match        *://*.crjxjy.net/*
// @match        *://*.cjnep.net/*
// @match        *://*.91huayi.com/*
// @match        *://teach.ynou.edu.cn/*
// @match        *://*.edu-edu.com.cn/*
// @match        *://*.21tb.com/*
// @match        *://*.168wangxiao.com/*
// @match        *://*.mynep.com/*
// @match        *://www.mosoteach.cn/*
// @match        *://*.aufe.edu.cn/*
// @match        *://*.learnin.com.cn/*
// @match        *://*.ouchn.edu.cn/*
// @match        *://*.swufe-online.com/*
// @match        *://ks.cqsdx.cn/*
// @match        *://*.qau.edu.cn/*
// @match        *://*.gdufemooc.cn/*
// @match        *://*.telfri-edu.com/*
// @match        *://www.beeline-ai.com/*
// @match        *://*.wxic.edu.cn/*
// @match        *://*.yxbyun.com/*
// @match        *://*.wdjycj.com/*
// @match        *://*.hbcjpt.com/*
// @match        *://*.csmu.edu.cn/*
// @match        *://*.ketangx.net/*
// @match        *://*.cnzx.info/*
// @match        *://www.asklib.com/*
// @match        *://*.xust.edu.cn/*
// @match        *://*.whut.edu.cn/*
// @match        *://*.lut.edu.cn/*
// @match        *://*.wwwwsoft.com/*
// @match        *://*.dufe.edu.cn/*
// @match        *://*.lygtc.edu.cn/*
// @match        *://*.cfyedu.com/*
// @match        *://*.iwdjy.com/*
// @match        *://*.jijiaool.com/*
// @match        *://lms.cjzx.hblll.com/*
// @match        *://*.ouc-online.com.cn/*
// @match        *://*.lsedu.vip/*
// @match        *://*.jxjypt.cn/*
// @match        *://*.jsnu.edu.cn/*
// @match        *://*.geovisearth.com/*
// @match        *://*.bgzk-edu.cn/*
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/vue/3.4.27/vue.global.min.js
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/vue-demi/0.14.6/index.iife.js
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3B
// @require      https://fastly.jsdelivr.net/npm/@iconify/vue@5.0.0/dist/iconify.js
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/dompurify/3.1.6/purify.min.js
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/crypto-js/4.2.0/crypto-js.min.js
// @require      https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/pinia/2.2.4/pinia.iife.prod.js
// @connect      127.0.0.1
// @connect      icodef.com
// @connect      muketool.com
// @connect      wk66.top
// @connect      zhihuishu.com
// @connect      greasyfork.org
// @connect      chaoxing.com
// @connect      shou.org.cn
// @connect      jsdelivr.net
// @connect      jsdmirror.cn
// @connect      gitee.com
// @connect      vxo.im
// @connect      zeroai.chat
// @connect      forestpolice.org
// @connect      scriptcat.org
// @connect      api.github.com
// @connect      aiask.site
// @connect      api.deepseek.com
// @connect      dashscope.aliyuncs.com
// @connect      open.bigmodel.cn
// @connect      qianfan.baidubce.com
// @connect      ark.cn-beijing.volces.com
// @connect      api.hunyuan.cloud.tencent.com
// @connect      api.longcat.chat
// @connect      api.moonshot.ai
// @connect      api.siliconflow.cn
// @connect      api.openai.com
// @connect      api.anthropic.com
// @connect      generativelanguage.googleapis.com
// @connect      openrouter.ai
// @connect      api.groq.com
// @connect      api.together.ai
// @connect      api.mistral.ai
// @connect      hlju.edu.cn
// @connect      ecust.edu.cn
// @connect      lms.ouchn.cn
// @connect      ouchn.cn
// @connect      xczxzdbf.moodle.qwbx.ouchn.cn
// @connect      study.ouchn.cn
// @connect      moodle.syxy.ouchn.cn
// @connect      moodle.qwbx.ouchn.cn
// @connect      tongyi.com
// @connect      chat.deepseek.com
// @connect      course.ougd.cn
// @connect      elearning.bjou.edu.cn
// @connect      whkpc.hnqtyq.cn
// @connect      www.51xinwei.com
// @connect      w-ling.cn
// @connect      edu-edu.com
// @connect      xuexi.jsou.cn
// @connect      icve.com.cn
// @connect      zice.cnzx.info
// @connect      any.cnzx.info
// @connect      www.icourse163.org
// @connect      ahjxjy.cn
// @connect      chinaedu.net
// @connect      qingshuxuetang.com
// @connect      cce.org.uooconline.com
// @connect      courshare.cn
// @connect      cep.webtrn.cn
// @connect      webtrn.cn
// @connect      cj-edu.com
// @connect      ytccr.com
// @connect      exam-cloud.cn
// @connect      gdrtvu.exam-cloud.cn
// @connect      open.ha.cn
// @connect      lhycjy.cloudwis.tech
// @connect      sclecb.cn
// @connect      web2.superchutou.com
// @connect      ls365.net
// @connect      jijiaox.com
// @connect      wencaischool.net
// @connect      sdrz.gxk.yxlearning.com
// @connect      crjxjy.net
// @connect      cjnep.net
// @connect      91huayi.com
// @connect      teach.ynou.edu.cn
// @connect      edu-edu.com.cn
// @connect      21tb.com
// @connect      168wangxiao.com
// @connect      mynep.com
// @connect      www.mosoteach.cn
// @connect      aufe.edu.cn
// @connect      learnin.com.cn
// @connect      ouchn.edu.cn
// @connect      swufe-online.com
// @connect      ks.cqsdx.cn
// @connect      qau.edu.cn
// @connect      gdufemooc.cn
// @connect      telfri-edu.com
// @connect      www.beeline-ai.com
// @connect      wxic.edu.cn
// @connect      yxbyun.com
// @connect      wdjycj.com
// @connect      hbcjpt.com
// @connect      csmu.edu.cn
// @connect      ketangx.net
// @connect      cnzx.info
// @connect      www.asklib.com
// @connect      xust.edu.cn
// @connect      whut.edu.cn
// @connect      lut.edu.cn
// @connect      wwwwsoft.com
// @connect      dufe.edu.cn
// @connect      lygtc.edu.cn
// @connect      cfyedu.com
// @connect      iwdjy.com
// @connect      jijiaool.com
// @connect      lms.cjzx.hblll.com
// @connect      ouc-online.com.cn
// @connect      lsedu.vip
// @connect      jxjypt.cn
// @connect      jsnu.edu.cn
// @connect      geovisearth.com
// @connect      bgzk-edu.cn
// @grant        GM.xmlHttpRequest
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
// hello

(function (vue, vue$1, z, pinia, F, D) {
  'use strict';

  var e = Object.defineProperty, __publicField = (t, a, n) => ((t, a, n) => a in t ? e(t, a, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[a] = n)(t, "symbol" != typeof a ? a + "" : a, n);

  var N = (() => "undefined" != typeof GM_deleteValue ? GM_deleteValue : void 0)(), R = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), B = (() => "undefined" != typeof GM_info ? GM_info : void 0)(), G = (() => "undefined" != typeof GM_listValues ? GM_listValues : void 0)(), V = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)(), K = (() => "undefined" != typeof GM_xmlhttpRequest ? GM_xmlhttpRequest : void 0)(), W = (() => "undefined" != typeof unsafeWindow ? unsafeWindow : void 0)();

  const Q = "AiAsk_";

  class Cache {
    static set(e, t, a = 0) {
      e = Q + e;
      const n = {
        value: t,
        expire: a > 0 ? Date.now() + 1e3 * a : 0
      };
      return V(e, n), R(e);
    }
    static get(e, t = null) {
      const a = R(e = Q + e);
      return a && a.expire && a.expire < Date.now() ? (N(e), t) : a ? a.value : t;
    }
    static match(e) {
      return e = Q + e, G().filter((t => t.startsWith(e)));
    }
    static matchGet(e) {
      const t = Q + e;
      let a = G().filter((e => e.startsWith(t))).map((e => function(e, t, a) {
        if (t && t.expire && t.expire < Date.now()) return a(e), null;
        const n = t ? t.value : null;
        return n && (n.key = e.replace("AiAsk_", "")), n;
      }(e, R(e, {
        value: null,
        expire: 0
      }), N))).filter((e => null !== e));
      return a.sort(((e, t) => (t.createTime || 0) - (e.createTime || 0))), a;
    }
    static remove(e) {
      N(Q + e);
    }
    static clear() {
      G().filter((e => e.startsWith(Q))).forEach(N);
    }
    static matchRemove(e) {
      e = Q + e, G().filter((t => t.startsWith(e))).forEach(N);
    }
  }

  let J = null;

  function log$1(...e) {}

  const addLog = (e, t = "info") => {
    try {
      const a = null == J ? void 0 : J(), n = (new Date).toLocaleString();
      null == a || a.addLog({
        time: n,
        type: t,
        content: e
      }), a || console.log(e);
    } catch (a) {
      console.log(e);
    }
  }, X = "aah-notice-global-style", Y = `\n#${X} {}\n#aah-notice-container {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  z-index: 2147483647;\n  pointer-events: none;\n  width: min(390px, calc(100vw - 32px));\n}\n.aah-notice {\n  display: grid;\n  grid-template-columns: 7px 40px minmax(0, 1fr);\n  align-items: start;\n  width: 100%;\n  min-height: 74px;\n  border: 1px solid rgba(15, 23, 42, 0.1);\n  border-radius: 10px;\n  background: #ffffff;\n  box-shadow: 0 22px 54px rgba(15, 23, 42, 0.22), 0 4px 14px rgba(15, 23, 42, 0.1);\n  color: #111827;\n  font-size: 13px;\n  line-height: 1.5;\n  pointer-events: auto;\n  transform: translateX(0);\n  opacity: 1;\n  animation: aah-notice-enter 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  overflow: hidden;\n}\n.aah-notice-bar {\n  width: 100%;\n  height: 100%;\n  background: var(--aah-notice-accent);\n}\n.aah-notice-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  margin: 14px 0 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--aah-notice-soft);\n  color: var(--aah-notice-accent-dark);\n  font-weight: 900;\n  font-size: 15px;\n  line-height: 1;\n}\n.aah-notice-body {\n  min-width: 0;\n  padding: 12px 14px 13px 5px;\n}\n.aah-notice-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 800;\n  line-height: 1.3;\n}\n.aah-notice-type {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 2px 7px;\n  background: var(--aah-notice-soft);\n  color: var(--aah-notice-accent-dark);\n  font-size: 11px;\n  font-weight: 800;\n}\n.aah-notice-content {\n  min-width: 0;\n  color: #475569;\n  overflow-wrap: anywhere;\n}\n.aah-notice-content p {\n  margin: 0 0 6px;\n}\n.aah-notice-content p:last-child {\n  margin-bottom: 0;\n}\n.aah-notice-content strong {\n  color: #0f172a;\n}\n.aah-notice-content a {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 8px;\n  border-radius: 7px;\n  padding: 6px 9px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 800;\n  text-decoration: none;\n}\n.aah-notice-content a:hover {\n  text-decoration: underline;\n}\n.aah-notice-success {\n  --aah-notice-accent: #16a34a;\n  --aah-notice-accent-dark: #15803d;\n  --aah-notice-soft: #dcfce7;\n}\n.aah-notice-error {\n  --aah-notice-accent: #dc2626;\n  --aah-notice-accent-dark: #b91c1c;\n  --aah-notice-soft: #fee2e2;\n}\n.aah-notice-warning {\n  --aah-notice-accent: #f97316;\n  --aah-notice-accent-dark: #c2410c;\n  --aah-notice-soft: #ffedd5;\n}\n.aah-notice-info {\n  --aah-notice-accent: #2563eb;\n  --aah-notice-accent-dark: #1d4ed8;\n  --aah-notice-soft: #dbeafe;\n}\n.aah-notice.hide {\n  opacity: 0;\n  transform: translateX(18px);\n}\n@keyframes aah-notice-enter {\n  from {\n    opacity: 0;\n    transform: translateX(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}`, Z = {
    success: "\u2713",
    error: "!",
    warning: "!",
    info: "i"
  }, ee = {
    success: "\u64cd\u4f5c\u6210\u529f",
    error: "\u64cd\u4f5c\u5931\u8d25",
    warning: "\u8bf7\u6ce8\u610f",
    info: "\u63d0\u793a"
  }, te = {
    success: "\u6210\u529f",
    error: "\u9519\u8bef",
    warning: "\u8b66\u544a",
    info: "\u4fe1\u606f"
  };

  function msg(e, t = "info") {
    try {
      if (!document.getElementById(X)) {
        const e = document.createElement("style");
        e.id = X, e.textContent = Y, document.head.appendChild(e);
      }
      const a = "aah-notice-container";
      let n = document.getElementById(a);
      n || (n = document.createElement("div"), n.id = a, document.body.appendChild(n));
      const r = document.createElement("div");
      r.className = `aah-notice aah-notice-${t}`;
      const s = document.createElement("span");
      s.className = "aah-notice-bar";
      const i = document.createElement("span");
      i.className = "aah-notice-icon", i.textContent = Z[t] || Z.info;
      const o = document.createElement("div");
      o.className = "aah-notice-body";
      const l = document.createElement("div");
      l.className = "aah-notice-title", l.appendChild(document.createTextNode(ee[t] || ee.info));
      const c = document.createElement("span");
      c.className = "aah-notice-type", c.textContent = te[t] || te.info, l.appendChild(c);
      const p = document.createElement("div");
      p.className = "aah-notice-content", p.innerHTML = z.sanitize(e), o.appendChild(l), 
      o.appendChild(p), r.appendChild(s), r.appendChild(i), r.appendChild(o), n.appendChild(r), 
      setTimeout((() => {
        r.classList.add("hide"), setTimeout((() => r.remove()), 220);
      }), 2800), addLog(e, t);
    } catch (a) {
      addLog(`\u6d88\u606f\u901a\u77e5\u5931\u8d25\u3010${e}\u3011`, "error");
    }
  }

  async function encrypt(e = "", t = "asdgdfghfghfghfg", a = "1234567890123456") {
    try {
      if (!e) return "";
      if (t = t.substring(0, 16), a = a.substring(0, 16), !window.crypto || !window.crypto.subtle) {
        const n = F.enc.Utf8.parse(t), r = F.enc.Utf8.parse(a);
        return F.AES.encrypt(e, n, {
          iv: r,
          mode: F.mode.CBC,
          padding: F.pad.Pkcs7
        }).toString();
      }
      const r = new TextEncoder, s = r.encode(e), i = r.encode(t), o = r.encode(a), l = await crypto.subtle.importKey("raw", i, {
        name: "AES-CBC"
      }, !1, [ "encrypt" ]), c = await crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: o
      }, l, s), p = new Uint8Array(c), u = 1024;
      let d, m = "";
      for (let e = 0; e < p.length; e += u) {
        const t = p.slice(e, Math.min(e + u, p.length));
        m += String.fromCharCode.apply(null, Array.from(t));
      }
      try {
        d = btoa(m);
      } catch (n) {
        d = m.split("").map((e => ("0" + e.charCodeAt(0).toString(16)).slice(-2))).join("");
      }
      return d;
    } catch (r) {
      return addLog(`\u52a0\u5bc6\u5f02\u5e38: ${r instanceof Error ? r.message : "\u672a\u77e5\u9519\u8bef"}`, "error"), 
      "";
    }
  }

  async function decrypt(e = "", t = "asdgdfghfghfghfg", a = "1234567890123456") {
    try {
      if (!e) return "";
      if (t = t.substring(0, 16), a = a.substring(0, 16), !window.crypto || !window.crypto.subtle) {
        const n = F.enc.Utf8.parse(t), r = F.enc.Utf8.parse(a);
        return F.AES.decrypt(e, n, {
          iv: r,
          mode: F.mode.CBC,
          padding: F.pad.Pkcs7
        }).toString(F.enc.Utf8);
      }
      /^[A-Za-z0-9+/]*={0,2}$/.test(e);
      const r = new TextEncoder, s = r.encode(t), i = r.encode(a);
      let o;
      try {
        o = atob(e);
      } catch (n) {
        throw new Error("Base64 \u89e3\u7801\u5931\u8d25\uff0c\u6570\u636e\u683c\u5f0f\u4e0d\u6b63\u786e");
      }
      const l = new Uint8Array(o.length);
      for (let e = 0; e < o.length; e++) l[e] = o.charCodeAt(e);
      if (l.length % 16 != 0) throw new Error("\u52a0\u5bc6\u6570\u636e\u957f\u5ea6\u4e0d\u6b63\u786e\uff0c\u4e0d\u662f16\u7684\u500d\u6570");
      const c = await crypto.subtle.importKey("raw", s, {
        name: "AES-CBC"
      }, !1, [ "decrypt" ]), p = await crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: i
      }, c, l);
      return new TextDecoder("utf-8", {
        fatal: !0
      }).decode(p);
    } catch (r) {
      return addLog(`\u89e3\u5bc6\u5f02\u5e38: ${r instanceof Error ? r.message : "\u672a\u77e5\u9519\u8bef"}`, "error"), 
      "";
    }
  }

  function md5(e) {
    return F.MD5(e).toString();
  }

  function somd5(e) {
    return md5(e);
  }

  const isPlainObject$1 = e => "object" == typeof e && null !== e && !Array.isArray(e), flattenForSignature = (e, t = "") => {
    const a = [];
    return Object.keys(e).sort().forEach((n => {
      if (!t && "html" === n) return;
      const r = t ? `${t}.${n}` : n, s = e[n];
      (e => null == e || !(!Array.isArray(e) || 0 !== e.length) || !(!isPlainObject$1(e) || 0 !== Object.keys(e).length))(s) || (Array.isArray(s) ? a.push(`${r}=${(e => e.every((e => "object" != typeof e)) ? [ ...e ].sort().join(",") : JSON.stringify(e))(s)}`) : isPlainObject$1(s) ? a.push(...flattenForSignature(s, r)) : a.push(`${r}=${String(s)}`));
    })), a;
  };

  function get_t(e = {}) {
    return md5(flattenForSignature(e).join("&"));
  }

  function randomString(e) {
    let t = "";
    for (;t.length < e; t += Math.random().toString(36).substring(2)) ;
    return t.substring(0, e);
  }

  const ae = {
    "\u5355\u9009\u9898": "0",
    "\u591a\u9009\u9898": "1",
    "\u586b\u7a7a\u9898": "2",
    "\u5224\u65ad\u9898": "3",
    "\u7b80\u7b54\u9898": "4",
    "\u95ee\u7b54\u9898": "4",
    "\u540d\u8bcd\u89e3\u91ca": "5",
    "\u8bba\u8ff0\u9898": "6",
    "\u8ba1\u7b97\u9898": "7",
    "\u5206\u5f55\u9898": "9",
    "\u8d44\u6599\u9898": "10",
    "\u8fde\u7ebf\u9898": "11",
    "\u5339\u914d\u9898": "11",
    "\u6392\u5e8f\u9898": "13",
    "\u5b8c\u578b\u586b\u7a7a": "14",
    "\u5b8c\u5f62\u586b\u7a7a\u9898": "14",
    "\u9605\u8bfb\u7406\u89e3": "15",
    "\u7a0b\u5e8f\u9898": "17",
    "\u53e3\u8bed\u9898": "18",
    "\u542c\u529b\u9898": "19",
    "\u5171\u7528\u9009\u9879\u9898": "20",
    "\u6d4b\u8bc4\u9898": "21",
    "\u949f\u8868\u9898": "23",
    "\u9009\u8bcd\u586b\u7a7a": "24",
    "\u9009\u505a\u9898": "25",
    "\u5176\u5b83": "8"
  }, ne = randomString(9) + "_", re = B;

  W.ksv = md5(re.script.author + re.script.name.replace(/server:/, "").trim());

  const se = {
    home: {
      page: "overview",
      subPage: ""
    },
    Base: {
      page: "system",
      subPage: "settings"
    },
    question: {
      page: "library",
      subPage: "manage"
    },
    preview: {
      page: "library",
      subPage: "preview"
    },
    questionTool: {
      page: "library",
      subPage: "tool"
    },
    log: {
      page: "system",
      subPage: "logs"
    },
    user: {
      page: "system",
      subPage: "account"
    }
  };

  function resolveNextPage(e, t) {
    return void 0 !== se[e] ? se[e] : {
      page: e,
      subPage: t ?? ""
    };
  }

  function normalizeDialogWidth(e) {
    const t = "number" == typeof e ? e : Number(e);
    return Number.isFinite(t) ? Math.max(480, Math.min(1200, Math.round(t))) : 480;
  }

  const ie = {
    debug: true,
    searchApi: [],
    defaultShowFloat: false,
    showFloat: false,
    showBoard: true,
    checkUpdate: true,
    hideFloat: false,
    alert: "\u70b9\u6211\u6709\u60ca\u559c",
    alertBubble: true,
    iframe: false,
    key: "",
    gpt: [],
    gptIndex: 0,
    askGpt: false,
    hotkey: "Ctrl+Shift+H",
    hotkeyEnabled: true,
    theme: "auto",
    page: "overview",
    subPage: "",
    dialogWidth: 480
  };

  const oe = function() {
    const e = Cache.get("app") || {}, t = {
      ...ie
    };
    for (const [a, n] of Object.entries(e)) "gpt" !== a && "alert" !== a && void 0 !== n && (t[a] = n);
    if (e.gpt) {
      const a = new Map;
      e.gpt.forEach((e => {
        a.set(e.name, e.key);
      })), t.gpt = ie.gpt.map((e => ({
        ...e,
        key: a.get(e.name) || ""
      })));
    }
    return t.alert = ie.alert, t.gptIndex >= t.gpt.length && (t.gptIndex = 0), t.dialogWidth = normalizeDialogWidth(t.dialogWidth), 
    t;
  }();

  function getApp() {
    return Cache.get("app") || ie;
  }

  !function(e) {
    const t = {
      ...Cache.get("app"),
      ...e
    };
    Cache.set("app", t);
  }(oe);

  const le = {
    display: [ {
      type: "switch",
      label: "\u9ed8\u8ba4\u663e\u793a\u60ac\u6d6e",
      name: "defaultShowFloat",
      value: oe.defaultShowFloat,
      desc: "\u6253\u5f00\u9875\u9762\u65f6\u662f\u5426\u663e\u793a\u60ac\u6d6e\u7a97",
      options: []
    }, {
      type: "switch",
      label: "\u5f3a\u5236\u9690\u85cf",
      name: "hideFloat",
      value: oe.hideFloat,
      desc: "\u4ec5\u70ed\u952e\u6216\u70b9\u51fb\u53f3\u4e0b\u89d2\u56fe\u7247\u624d\u663e\u793a\u60ac\u6d6e\u7a97",
      options: []
    }, {
      type: "switch",
      label: "\u6c14\u6ce1\u63d0\u793a",
      name: "alertBubble",
      value: oe.alertBubble,
      desc: "\u53f3\u4e0b\u89d2\u6c14\u6ce1\u63d0\u793a\u662f\u5426\u5f00\u542f",
      options: []
    } ],
    system: [ {
      type: "switch",
      label: "\u68c0\u6d4b\u66f4\u65b0",
      name: "checkUpdate",
      value: oe.checkUpdate,
      desc: "\u6253\u5f00\u9875\u9762\u65f6\u662f\u5426\u68c0\u6d4b\u66f4\u65b0",
      options: []
    }, {
      type: "switch",
      label: "iframe\u4f18\u5316(\u6d4b\u8bd5)",
      name: "iframe",
      value: oe.iframe,
      desc: "\u9488\u5bf9\u6df1\u5ea6\u5d4c\u5957\u7f51\u9875\u7684\u4f18\u5316\uff0c\u9002\u5408\u5355\u4efb\u52a1\u9875\u4f7f\u7528\uff0c\u591a\u4efb\u52a1\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5f39\u7a97\u8fc7\u591a\u3002\n \u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u4e3a\u6d4b\u8bd5\u529f\u80fd\uff0c\u53ef\u80fd\u5b58\u5728\u672a\u77e5\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528",
      options: []
    } ],
    ai: [],
    hotkey: [ {
      type: "switch",
      label: "\u542f\u7528\u5feb\u6377\u952e",
      name: "hotkeyEnabled",
      value: oe.hotkeyEnabled,
      desc: "\u662f\u5426\u542f\u7528\u5feb\u6377\u952e\u663e\u9690\u60ac\u6d6e\u7a97",
      options: []
    }, {
      type: "hotkey",
      label: "\u5feb\u6377\u952e\u8bbe\u7f6e",
      name: "hotkey",
      value: oe.hotkey,
      desc: "\u70b9\u51fb\u8f93\u5165\u6846\u540e\u6309\u4e0b\u60f3\u8981\u8bbe\u7f6e\u7684\u5feb\u6377\u952e\u7ec4\u5408\uff08\u652f\u6301Ctrl\u3001Shift\u3001Alt\u7ec4\u5408\u952e\uff09",
      options: []
    } ]
  }, ce = pinia.defineStore("app", {
    state: () => {
      const e = resolveNextPage(oe.page, oe.subPage);
      return {
        app: oe,
        script: re.script,
        page: e.page,
        subPage: e.subPage,
        ConfigInput: le,
        activeSettingSection: "",
        logs: [ {
          time: (new Date).toLocaleString(),
          type: "success",
          content: "\u521d\u59cb\u5316\u65e5\u5fd7\u6210\u529f"
        } ]
      };
    },
    actions: {
      setConfig(e) {
        const t = {
          ...this.app,
          ...e
        };
        "dialogWidth" in e && (t.dialogWidth = normalizeDialogWidth(e.dialogWidth)), this.app = t, 
        Cache.set("app", this.app);
      },
      setPage(e, t) {
        const a = resolveNextPage(e, t);
        this.page = a.page, this.subPage = a.subPage, this.app = {
          ...this.app,
          page: a.page,
          subPage: a.subPage
        }, Cache.set("app", this.app);
      },
      setActiveSettingSection(e) {
        this.activeSettingSection = e;
      },
      setDialogWidth(e) {
        const t = normalizeDialogWidth(e);
        this.app.dialogWidth = t, Cache.set("app", this.app);
      },
      addLog(e) {
        this.logs.length > 100 && this.logs.shift(), this.logs.push(e);
      }
    }
  }), pe = Cache.get("apiList", []), ue = [ {
    name: "\u4e00\u4e4b\u9898\u5e93",
    url: "http://cx.icodef.com/wyn-nb?v=4",
    method: "POST",
    type: "json",
    headers: {},
    params: [],
    data: {
      question: "$question",
      options: "$options",
      type: "$type"
    },
    response: {
      type: "field",
      value: "data"
    },
    weight: 0
  } ], de = pinia.defineStore("api", {
    state: () => ({
      apiList: pe,
      defApiList: ue
    }),
    actions: {},
    getters: {
      getApiList() {
        return this.apiList.forEach(((e, t) => {
          e.name === this.defApiList[t].name && (this.defApiList[t] = e);
        })), this.apiList.concat(this.defApiList);
      }
    }
  }), getImageSrc = e => {
    const t = String(e).match(/(?:^|\s)src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    return t && (t[1] || t[2] || t[3]) || "";
  }, stripImageSrcQuery = e => e.replace(/[?#].*$/, ""), cleanQuestionText = e => String(e ?? "").replace(/<img\b([^>]*)>/gi, ((e, t) => getImageSrc(t))).replace(/<br\s*\/?>/gi, "\n").replace(/<(\/)?(p|div).*?>/gi, "\n").replace(/<[^>]+>/g, "").replace(/[\t\r\xa0]/g, " ").replace(/[\u2000-\u200a]/g, " ").replace(/ {2,}/g, " ").replace(/\n{2,}/g, "\n").trim(), cleanQuestionTextWithImageHtml = e => {
    const t = [];
    return String(e ?? "").replace(/<img\b([^>]*)>/gi, ((e, a) => {
      const n = getImageSrc(a);
      if (!n) return "";
      const r = `\0AAH_IMAGE_PLACEHOLDER_${t.length}\0`;
      return t.push(`<img src="${(e => e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))(n)}">`), 
      r;
    })).replace(/<br\s*\/?>/gi, "\n").replace(/<(\/)?(p|div).*?>/gi, "\n").replace(/<[^>]+>/g, "").replace(/\u0000AAH_IMAGE_PLACEHOLDER_(\d+)\u0000/g, ((e, a) => t[Number(a)] || "")).replace(/[\t\r\xa0]/g, " ").replace(/[\u2000-\u200a]/g, " ").replace(/ {2,}/g, " ").replace(/\n{2,}/g, "\n").trim();
  }, cleanQuestionTitle = e => e.replace(/^[.*?]\s*/, "").replace(/^\u3010.*?\u3011\s*/, "").replace(/\s*[\uff08(]\s*\d+(?:\.\d+)?\s*\u5206?\s*[\uff09)]\s*$/, "").replace(/^\d+\./, "").trim().replace(/^\d+\uff0e/, "").trim(), normalizeComparableText = e => (e => {
    if (/^[+-]?\d+(\.\d+)?$/.test(e)) return e;
    const t = e.replace(/\s+/g, "");
    return t.replace(new RegExp("\\p{P}", "gu"), "") || t;
  })((e => String(e ?? "").replace(/<img\b([^>]*)>/gi, ((e, t) => stripImageSrcQuery(getImageSrc(t)))).replace(/<[^>]*>/g, ""))(e)).trim(), removeOptionPrefixes = (e, {removeBareLetter: t = false} = {}) => e.map(((e, a) => {
    const n = String.fromCharCode(65 + a), r = t ? `^${n}(?:\\s*[.\u3001\uff0e)\uff09:\uff1a]\\s*|\\s+)?` : `^${n}\\s*[.\u3001\uff0e)\uff09:\uff1a]\\s*`;
    return e.replace(new RegExp(r), "").trim();
  })), normalizeHashText = e => String(e ?? "").replace(/<img\b([^>]*)>/gi, ((e, t) => {
    const a = getImageSrc(t);
    return a ? `<img src="${stripImageSrcQuery(a)}">` : "";
  })), questionHash = (e, t, a, n = true) => {
    if (("15" === e || 15 === e) && Array.isArray(a) && a.length > 0 && "object" == typeof a[0]) {
      const r = a.map((e => {
        if (e.question && e.options) {
          const t = Array.from(e.options).map(normalizeHashText);
          n && t.sort();
          const a = t.join("");
          return `${e.type || "0"}${normalizeHashText(e.question)}${a}`;
        }
        return "";
      })).filter(Boolean);
      let s = `${e}${normalizeHashText(t)}${r.join("")}`;
      return s = s.replace(/\s/g, ""), md5(s);
    }
    const r = Array.from(a).map(normalizeHashText);
    n && r.sort();
    const s = r.join("");
    let i = `${e}${normalizeHashText(t)}${s}`;
    return i = i.replace(/\s/g, ""), md5(i);
  }, sanitizeHtml = (e, t, a) => {
    const n = z.sanitize;
    return "function" == typeof n ? n(e, {
      ALLOWED_TAGS: t,
      ALLOWED_ATTR: a,
      ALLOW_DATA_ATTR: false,
      KEEP_CONTENT: true
    }) : ((e, t, a) => {
      const n = new Set(t), r = new Set(a);
      return e.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/\son\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi, "").replace(/<([/]?)([a-z][\w:-]*)([^>]*)>/gi, ((e, t, a, s) => {
        const i = String(a).toLowerCase();
        if (!n.has(i)) return "";
        if (t) return `</${i}>`;
        const o = [];
        return String(s).replace(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g, ((e, t, a, n, s) => {
          const i = String(t).toLowerCase(), l = String(a ?? n ?? s ?? "");
          return r.has(i) && ("href" !== i && "src" !== i || (c = l.trim(), /^(https?:|mailto:|tel:|data:image\/|\/|\.\/|\.\.\/|#)/i.test(c))) ? (o.push(`${i}="${l.replace(/"/g, "&quot;")}"`), 
          "") : "";
          var c;
        })), `<${i}${o.length ? ` ${o.join(" ")}` : ""}>`;
      }));
    })(e, t, a);
  };

  function removeHtml(e, t = true) {
    if (e = (e = (e = (e = (e => {
      if ("undefined" != typeof document) {
        const t = document.createElement("textarea");
        return t.innerHTML = e, t.value;
      }
      const t = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        nbsp: " "
      };
      return e.replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, ((e, a) => {
        const n = String(a).toLowerCase();
        return n.startsWith("#x") ? String.fromCharCode(parseInt(n.slice(2), 16)) : n.startsWith("#") ? String.fromCharCode(parseInt(n.slice(1), 10)) : t[n] ?? e;
      }));
    })(e)).replace(/[\t\r\xa0]/g, " ")).replace(/[\u2000-\u200a]/g, " ")).replace(/<br\s*\/?>/g, "\n"), 
    t && (e = e.replace(/<(\/)?(p|div).*?>/g, "\n")), e = (e = (e = (e = e.replace(/ {2,}/g, " ")).replace(/\n{2,}/g, "\n")).replace(/<xmp.*?>/g, "<pre>")).replace(/<\/xmp>/g, "</pre>"), 
    e = sanitizeHtml(e, [ "img", "br", "sub", "sup" ], [ "src", "href" ]), "undefined" != typeof document && "undefined" != typeof location) {
      const t = /<img.*?src="(.*?)".*?>/g, a = e.match(t);
      a && a.forEach((t => {
        const a = t.match(/src="(.*?)"/);
        if (a && -1 === a[1].indexOf("http") && !a[1].includes("data:image")) if (a[1].startsWith("/")) e = e.replace(a[1], location.origin + a[1]); else {
          const t = new URL(a[1], document.baseURI).href;
          e = e.replace(a[1], t);
        }
      }));
    }
    return e.trim();
  }

  const escapeHtml = e => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

  function createSafeMarkdownHtml(e) {
    if (!e) return "";
    let t = e;
    const a = [], n = `AAHMDPLACEHOLDER${"undefined" != typeof crypto && "randomUUID" in crypto ? crypto.randomUUID().replace(/[^a-z0-9]/gi, "") : `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`.replace(/[^a-z0-9]/gi, "")}`, protect = e => {
      const t = `${n}X${a.length}Z`;
      return a.push(e), t;
    };
    return t = t.replace(/```(\w*)\n([\s\S]*?)```/g, ((e, t, a) => protect(`<pre><code class="hljs">${escapeHtml(String(a).trim())}</code></pre>`))), 
    t = t.replace(/`([^`]+)`/g, ((e, t) => protect(`<code>${escapeHtml(String(t))}</code>`))), 
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((e, t, a) => {
      const n = String(a).trim();
      return /^https?:\/\//i.test(n) ? protect(`<a href="${escapeHtml(n)}" target="_blank" rel="noopener noreferrer">${t}</a>`) : t;
    })), t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__(.+?)__/g, "<strong>$1</strong>"), 
    t = t.replace(/\*(.+?)\*/g, "<em>$1</em>"), t = t.replace(/_(.+?)_/g, "<em>$1</em>"), 
    t = t.replace(/^### (.+)$/gm, "<h3>$1</h3>"), t = t.replace(/^## (.+)$/gm, "<h2>$1</h2>"), 
    t = t.replace(/^# (.+)$/gm, "<h1>$1</h1>"), t = t.replace(/^\- (.+)$/gm, "<li>$1</li>"), 
    t = t.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>"), t = t.replace(/^\d+\. (.+)$/gm, "<li>$1</li>"), 
    t = t.replace(/\n/g, "<br>"), t = t.replace(/<br><(pre|h1|h2|h3|ul|ol)/g, "<$1"), 
    t = t.replace(/<\/(pre|h1|h2|h3|ul|ol)><br>/g, "</$1>"), (e => sanitizeHtml(e, [ "a", "br", "code", "em", "h1", "h2", "h3", "img", "li", "ol", "pre", "strong", "sub", "sup", "ul" ], [ "class", "href", "rel", "src", "target" ]))(t.replace(new RegExp(`${(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))(n)}X(\\d+)Z`, "g"), ((e, t) => a[Number(t)] || "")));
  }

  function titleClean(e) {
    return cleanQuestionTitle(e);
  }

  function isFalse(e) {
    return "string" == typeof e && /(\u4e0d\u6b63\u786e|\u9519\u8bef|\u5426|\u9519|\xd7|F|wr|false)/i.test(e);
  }

  function isTrue(e) {
    return "string" == typeof e && (!isFalse(e) && /(\u6b63\u786e|\u662f|\u5bf9|\u221a|T|ri|true)/i.test(e));
  }

  function judgeAnswer(e) {
    return isTrue(e) ? [ "\u6b63\u786e" ] : isFalse(e) ? [ "\u9519\u8bef" ] : [];
  }

  function removeStartChar(e) {
    return removeOptionPrefixes(e, {
      removeBareLetter: true
    });
  }

  function removeKnownOptionPrefix(e, t) {
    const a = String(e ?? "").trim(), n = String(t ?? "").trim();
    return "" === n ? a : a.replace(new RegExp(`^${r = n, r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`), "").trim();
    var r;
  }

  function removeOptionsStartChar(e) {
    for (let t = 0; t < e.length; t += 1) {
      const a = String.fromCharCode(65 + t) + ".", n = String.fromCharCode(65 + t) + "\u3001", r = String.fromCharCode(65 + t) + "\uff0e", s = String.fromCharCode(65 + t), i = new RegExp(`^${a}|^${n}|^${r}|^${s}`);
      if (!e[t].match(i)) return false;
      e[t] = e[t].replace(i, "").trim();
    }
    return e;
  }

  const me = {
    "\u5355\u9009\u9898": "0",
    "\u591a\u9009\u9898": "1",
    "\u586b\u7a7a\u9898": "2",
    "\u5224\u65ad\u9898": "3",
    "\u7b80\u7b54\u9898": "4",
    "\u95ee\u7b54\u9898": "4",
    "\u540d\u8bcd\u89e3\u91ca": "5",
    "\u8bba\u8ff0\u9898": "6",
    "\u8ba1\u7b97\u9898": "7",
    "\u5206\u5f55\u9898": "9",
    "\u8d44\u6599\u9898": "10",
    "\u8fde\u7ebf\u9898": "11",
    "\u5339\u914d\u9898": "11",
    "\u6392\u5e8f\u9898": "13",
    "\u5b8c\u578b\u586b\u7a7a": "14",
    "\u5b8c\u5f62\u586b\u7a7a\u9898": "14",
    "\u9605\u8bfb\u7406\u89e3": "15",
    "\u7a0b\u5e8f\u9898": "17",
    "\u53e3\u8bed\u9898": "18",
    "\u542c\u529b\u9898": "19",
    "\u5171\u7528\u9009\u9879\u9898": "20",
    "\u6d4b\u8bc4\u9898": "21",
    "\u949f\u8868\u9898": "23",
    "\u9009\u8bcd\u586b\u7a7a": "24",
    "\u9009\u505a\u9898": "25",
    "\u5176\u5b83": "8"
  };

  function typeConvert(e, t = true) {
    return t ? me[e] || "8" : Object.keys(me).find((t => me[t] === e)) || "\u5176\u5b83";
  }

  function typeMatch(e) {
    const t = {
      0: [ "\u5355\u9009", "\u5355\u9879\u9009\u62e9", "\u8bcd\u6c47\u4e0e\u7ed3\u6784", "A2", "A1" ],
      1: [ "\u591a\u9009", "\u591a\u9879\u9009\u62e9" ],
      2: [ "\u586b\u7a7a" ],
      3: [ "\u5224\u65ad" ],
      4: [ "\u7b80\u7b54", "\u95ee\u7b54", "\u7efc\u5408\u9898" ],
      5: [ "\u540d\u8bcd\u89e3\u91ca" ],
      6: [ "\u8bba\u8ff0", "\u4e3b\u89c2" ],
      7: [ "\u8ba1\u7b97" ],
      9: [ "\u5206\u5f55" ],
      14: [ "\u5b8c\u5f62\u586b\u7a7a" ],
      15: [ "\u9605\u8bfb\u7406\u89e3" ],
      24: [ "\u9009\u8bcd\u586b\u7a7a" ]
    };
    return Object.keys(t).find((a => t[a].some((t => e.includes(t))))) || "8";
  }

  function sleep(e) {
    return new Promise((t => setTimeout(t, e)));
  }

  const waitUntil = (e, t) => {
    const a = void 0 === t || "number" == typeof t, n = "number" == typeof t ? {
      interval: t
    } : t ?? {}, r = n.interval ?? 100, s = !a && Object.prototype.hasOwnProperty.call(n, "timeout") && "number" == typeof n.timeout, i = n.timeout, o = n.timeoutMessage ?? "\u7b49\u5f85\u9875\u9762\u6761\u4ef6\u8d85\u65f6", l = Date.now();
    return new Promise(((t, n) => {
      const c = setInterval((() => {
        try {
          if (e()) return clearInterval(c), void t();
        } catch (r) {
          if (a) return;
          return clearInterval(c), void n(r);
        }
        s && Date.now() - l >= i && (clearInterval(c), n(new Error(o)));
      }), r);
    }));
  };

  function isExist(e) {
    return D(e).length > 0;
  }

  function getUrl() {
    return location.href;
  }

  const he = [ "AI_CONFIG_MISSING", "AI_PROVIDER_DISABLED", "AI_CREDENTIAL_MISSING", "AI_AUTH_FAILED", "AI_REQUEST_TIMEOUT", "AI_NETWORK_FAILED", "AI_RESPONSE_PARSE_FAILED", "AI_SSE_PARSE_FAILED", "AI_OUTPUT_SCHEMA_INVALID", "AI_ANSWER_NOT_MATCHED", "AI_QUESTION_TYPE_UNSUPPORTED", "AI_IMAGE_UNSUPPORTED", "AI_PROXY_UNAVAILABLE", "AI_PROXY_RATE_LIMITED", "AI_PROXY_LOGIN_REQUIRED", "AI_CHANNEL_UNKNOWN", "AI_MODEL_REJECTED", "AI_DIRECT_BLOCKED" ], fe = {
    AI_CONFIG_MISSING: "AI \u914d\u7f6e\u4e0d\u5b58\u5728\uff0c\u8bf7\u5148\u5b8c\u6210\u914d\u7f6e",
    AI_PROVIDER_DISABLED: "AI \u5e73\u53f0\u5df2\u505c\u7528\uff0c\u8bf7\u542f\u7528\u540e\u91cd\u8bd5",
    AI_CREDENTIAL_MISSING: "AI \u51ed\u8bc1\u7f3a\u5931\uff0c\u8bf7\u586b\u5199 API Key \u6216\u6388\u6743\u4fe1\u606f",
    AI_AUTH_FAILED: "AI \u9274\u6743\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u51ed\u8bc1\u662f\u5426\u6709\u6548",
    AI_REQUEST_TIMEOUT: "AI \u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
    AI_NETWORK_FAILED: "AI \u8bf7\u6c42\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5",
    AI_RESPONSE_PARSE_FAILED: "AI \u54cd\u5e94\u89e3\u6790\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
    AI_SSE_PARSE_FAILED: "AI \u6d41\u5f0f\u54cd\u5e94\u89e3\u6790\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
    AI_OUTPUT_SCHEMA_INVALID: "AI \u8f93\u51fa\u683c\u5f0f\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u8bd5",
    AI_ANSWER_NOT_MATCHED: "AI \u7b54\u6848\u672a\u80fd\u5339\u914d\u5f53\u524d\u9898\u76ee",
    AI_QUESTION_TYPE_UNSUPPORTED: "AI \u6682\u4e0d\u652f\u6301\u5f53\u524d\u9898\u578b",
    AI_IMAGE_UNSUPPORTED: "AI \u6682\u4e0d\u652f\u6301\u56fe\u7247\u9898\u76ee",
    AI_PROXY_UNAVAILABLE: "AI \u4ee3\u7406\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u6b63\u5728\u5c1d\u8bd5\u76f4\u8fde",
    AI_PROXY_RATE_LIMITED: "AI \u4ee3\u7406\u989d\u5ea6\u5df2\u7528\u5b8c\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
    AI_PROXY_LOGIN_REQUIRED: "\u4f7f\u7528 AI \u4ee3\u7406\u9700\u8981\u5148\u767b\u5f55\uff0c\u672a\u767b\u5f55\u53ef\u9009\u62e9\u652f\u6301\u76f4\u8fde\u7684\u6e20\u9053",
    AI_CHANNEL_UNKNOWN: "\u8be5 AI \u6e20\u9053\u5df2\u4e0b\u7ebf\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",
    AI_MODEL_REJECTED: "\u6240\u9009\u6a21\u578b\u4e0d\u53ef\u7528\uff0c\u8bf7\u5728\u8bbe\u7f6e\u4e2d\u91cd\u9009",
    AI_DIRECT_BLOCKED: "\u8be5\u6e20\u9053\u65e0\u6cd5\u76f4\u8fde\u4e14\u4ee3\u7406\u6682\u4e0d\u53ef\u7528\uff1b\u6d77\u5916\u6e20\u9053\u9700\u81ea\u5907\u4ee3\u7406"
  };

  function createAiError(e, t = {}) {
    const a = t.userMessage || fe[e], n = new Error(`[${e}] ${a}`, void 0 === t.cause ? void 0 : {
      cause: t.cause
    });
    return n.name = "AiError", n.code = e, n.userMessage = a, void 0 !== t.detail && (n.detail = t.detail), 
    n;
  }

  const isAiError = e => "object" == typeof e && null !== e && "AiError" === e.name && "string" == typeof e.code && he.includes(e.code) && "string" == typeof e.message && "string" == typeof e.userMessage, getAiErrorMessage = e => isAiError(e) ? e.userMessage : e instanceof Error && e.message ? e.message : "AI \u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5", parseSsePackets = e => {
    const t = [];
    for (const n of e.split(/\r?\n/)) {
      const e = n.trim();
      if (!e.startsWith("data:")) continue;
      const r = e.slice(5).trim();
      if (r && "[DONE]" !== r) try {
        t.push(JSON.parse(r));
      } catch (a) {
        throw createAiError("AI_SSE_PARSE_FAILED", {
          detail: {
            payload: r
          },
          cause: a
        });
      }
    }
    return t;
  }, createSsePacketParser = () => {
    let e = "";
    return {
      push: t => (e += t, (() => {
        const t = [], a = e.split(/\r?\n\r?\n/);
        e = a.pop() || "";
        for (const e of a) t.push(...parseSsePackets(e));
        return t;
      })()),
      flush: () => {
        if (!e.trim()) return e = "", [];
        const t = e;
        return e = "", parseSsePackets(t);
      }
    };
  }, getRuntime = () => globalThis, getRuntimeGmXmlhttpRequest = () => {
    var e;
    const t = "function" == typeof GM_xmlhttpRequest ? GM_xmlhttpRequest : "undefined" != typeof GM && "function" == typeof GM.xmlHttpRequest ? GM.xmlHttpRequest : void 0;
    if (t) return t;
    const a = getRuntime();
    return a.GM_xmlhttpRequest || (null == (e = a.GM) ? void 0 : e.xmlHttpRequest);
  }, isHttpErrorStatus = e => !e || e < 200 || e >= 300, readStream = async (e, t) => {
    if (!e || "function" != typeof e.getReader) return;
    const a = e.getReader(), n = new TextDecoder;
    for (;;) {
      const {done: e, value: r} = await a.read();
      if (e) break;
      r && t(n.decode(r, {
        stream: true
      }));
    }
    const r = n.decode();
    r && t(r);
  }, truncate = e => e.length > 200 ? `${e.slice(0, 200)}\u2026` : e, createHttpStatusError = e => {
    const t = {
      status: e.status,
      statusText: e.statusText,
      responseText: e.responseText
    };
    if (401 === e.status || 403 === e.status) return createAiError("AI_AUTH_FAILED", {
      detail: t
    });
    if (isHttpErrorStatus(e.status)) {
      const a = (e => {
        if (!e) return "";
        try {
          const t = JSON.parse(e), a = "object" == typeof t && null !== t ? t.error : void 0;
          if ("object" == typeof a && null !== a) {
            const e = a.message;
            if ("string" == typeof e && e.trim()) return truncate(e.trim());
          }
          const n = "object" == typeof t && null !== t ? t.message : void 0;
          if ("string" == typeof n && n.trim()) return truncate(n.trim());
        } catch {
          return truncate(e.trim());
        }
        return "";
      })(e.responseText), n = `AI \u63a5\u53e3\u8fd4\u56de ${e.status} ${e.statusText || ""}`.trim();
      return createAiError("AI_NETWORK_FAILED", {
        detail: t,
        userMessage: a ? `${n}\uff1a${a}` : `${n}\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5`
      });
    }
  }, stringifyHeaders = e => {
    const t = [];
    return e.forEach(((e, a) => t.push(`${a}: ${e}`))), t.join("\r\n");
  }, createAiTransportRequest = e => {
    var t;
    const a = (null == (t = e.resolveGmXmlhttpRequest) ? void 0 : t.call(e)) || getRuntimeGmXmlhttpRequest();
    if (!a) {
      const t = (() => {
        const e = getRuntime();
        if ("function" == typeof e.fetch) return e.fetch.bind(e);
      })();
      return t ? ((e, t) => {
        const a = "function" == typeof AbortController ? new AbortController : void 0;
        let r, s, rejectTransport = () => {};
        const createBaseResponse = (t, a, n = "") => ({
          finalUrl: t.url || e.url,
          response: a,
          responseHeaders: stringifyHeaders(t.headers),
          responseText: n,
          status: t.status,
          statusText: t.statusText
        });
        return {
          promise: new Promise(((i, o) => {
            rejectTransport = o, e.timeout && a && (s = setTimeout((() => {
              r = "timeout", a.abort();
            }), e.timeout)), (async () => {
              try {
                const r = await t(e.url, {
                  method: e.method,
                  headers: e.headers,
                  body: e.data ?? void 0,
                  signal: null == a ? void 0 : a.signal
                });
                if (isHttpErrorStatus(r.status)) {
                  const e = await r.text().catch((() => "")), t = createHttpStatusError(createBaseResponse(r, void 0, e));
                  if (t) return void o(t);
                }
                if ("stream" === e.responseType && e.onStreamChunk) {
                  try {
                    await readStream(r.body, e.onStreamChunk);
                  } catch (n) {
                    return void o(createAiError("AI_NETWORK_FAILED", {
                      userMessage: "AI \u6d41\u5f0f\u54cd\u5e94\u8bfb\u53d6\u5931\u8d25",
                      cause: n
                    }));
                  }
                  return void i(createBaseResponse(r, r.body));
                }
                if ("arraybuffer" === e.responseType) {
                  const e = await r.arrayBuffer();
                  return void i(createBaseResponse(r, e));
                }
                const s = await r.text();
                i(createBaseResponse(r, s, s));
              } catch (n) {
                if ("timeout" === r) return void o(createAiError("AI_REQUEST_TIMEOUT"));
                if ("manual" === r) return void o(createAiError("AI_NETWORK_FAILED", {
                  userMessage: "AI \u8bf7\u6c42\u5df2\u53d6\u6d88"
                }));
                o(createAiError("AI_NETWORK_FAILED", {
                  cause: n
                }));
              } finally {
                s && clearTimeout(s);
              }
            })();
          })),
          abort: () => {
            r = "manual", null == a || a.abort(), rejectTransport(createAiError("AI_NETWORK_FAILED", {
              userMessage: "AI \u8bf7\u6c42\u5df2\u53d6\u6d88"
            }));
          }
        };
      })(e, t) : (n = createAiError("AI_NETWORK_FAILED", {
        userMessage: "\u5f53\u524d\u8fd0\u884c\u73af\u5883\u4e0d\u652f\u6301 GM_xmlhttpRequest"
      }), {
        promise: Promise.reject(n),
        abort: () => {}
      });
    }
    var n;
    let r, s, i, rejectTransport = () => {}, o = false, l = false, c = false, p = "";
    const u = new Promise(((t, n) => {
      const rejectOnce = e => {
        o || (o = true, n(e));
      };
      rejectTransport = rejectOnce;
      const beginStreamRead = t => s || (s = readStream(t.response, (t => {
        var a;
        p.length < 8192 && (p += t), null == (a = e.onStreamChunk) || a.call(e, t);
      })).then((() => {
        l = true;
      })).catch((e => {
        l = true, c = true, i = e;
      })), s), rejectWithStatusError = e => {
        (s ? Promise.race([ s.then((() => p)), new Promise((e => setTimeout((() => e(p)), 500))) ]) : Promise.resolve("")).then((t => {
          const a = createHttpStatusError({
            ...e,
            responseText: e.responseText || t
          });
          rejectOnce(a || createAiError("AI_NETWORK_FAILED"));
        }));
      }, resolveOnce = e => {
        o || (isHttpErrorStatus(e.status) ? rejectWithStatusError(e) : (o = true, t(e)));
      };
      r = a({
        method: e.method,
        url: e.url,
        headers: e.headers,
        data: e.data,
        timeout: e.timeout,
        responseType: e.responseType,
        onloadstart: t => {
          "stream" === e.responseType && beginStreamRead(t);
        },
        onload: t => {
          if (isHttpErrorStatus(t.status)) return void rejectWithStatusError(t);
          if ("stream" !== e.responseType || !e.onStreamChunk) return void resolveOnce(t);
          const a = beginStreamRead(t);
          if (l) return c ? void rejectOnce(createAiError("AI_NETWORK_FAILED", {
            userMessage: "AI \u6d41\u5f0f\u54cd\u5e94\u8bfb\u53d6\u5931\u8d25",
            cause: i
          })) : void resolveOnce(t);
          a.then((() => {
            c ? rejectOnce(createAiError("AI_NETWORK_FAILED", {
              userMessage: "AI \u6d41\u5f0f\u54cd\u5e94\u8bfb\u53d6\u5931\u8d25",
              cause: i
            })) : resolveOnce(t);
          }));
        },
        onabort: () => rejectOnce(createAiError("AI_NETWORK_FAILED", {
          userMessage: "AI \u8bf7\u6c42\u5df2\u53d6\u6d88"
        })),
        ontimeout: () => rejectOnce(createAiError("AI_REQUEST_TIMEOUT")),
        onerror: e => rejectOnce(createAiError("AI_NETWORK_FAILED", {
          cause: e
        }))
      });
    }));
    return {
      promise: u,
      abort: () => {
        null == r || r.abort(), rejectTransport(createAiError("AI_NETWORK_FAILED", {
          userMessage: "AI \u8bf7\u6c42\u5df2\u53d6\u6d88"
        }));
      }
    };
  }, trimTrailingSlash = e => e.replace(/\/+$/, ""), contentToText = e => "string" == typeof e ? e : e.filter((e => "text" === e.type)).map((e => e.text)).join("\n"), assertConfigAvailable = e => {
    var t;
    if (!e.enabled) throw createAiError("AI_PROVIDER_DISABLED");
    if (!(null == (t = e.credential) ? void 0 : t.value.trim())) throw createAiError("AI_CREDENTIAL_MISSING");
  }, parseJsonResponse = e => {
    try {
      if ("string" == typeof e.response) {
        if (!e.response) return;
        return JSON.parse(e.response);
      }
      return void 0 !== e.response && null !== e.response ? e.response : e.responseText ? JSON.parse(e.responseText) : void 0;
    } catch (t) {
      throw createAiError("AI_RESPONSE_PARSE_FAILED", {
        cause: t
      });
    }
  }, bindAbortSignal = (e, t) => {
    if (!e) return;
    const abortRequest = () => t();
    if (!e.aborted) return e.addEventListener("abort", abortRequest, {
      once: true
    }), () => e.removeEventListener("abort", abortRequest);
    abortRequest();
  }, createAnthropicBody = e => {
    const t = e.messages.filter((e => "system" === e.role)).map((e => contentToText(e.content))).join("\n"), a = {
      model: e.config.model,
      messages: e.messages.filter((e => "system" !== e.role)).map((e => ({
        role: e.role,
        content: contentToText(e.content)
      }))),
      stream: false
    };
    return t && (a.system = t), void 0 !== e.config.temperature && (a.temperature = e.config.temperature), 
    a.max_tokens = e.config.maxTokens ?? 1024, a;
  }, isMultimodalContent = e => Array.isArray(e), hasMultimodalMessage = e => e.some((e => isMultimodalContent(e.content))), isLongCatConfig = e => "longcat" === e.providerId, toDataImageUrl = e => "url" === e.source ? e.data : `data:${e.mimeType || "image/png"};base64,${e.data}`, serializeMultimodalContent = (e, t) => e.map((e => isLongCatConfig(t) ? (e => "text" === e.type ? {
    type: "text",
    text: e.text
  } : {
    type: "input_image",
    input_image: {
      type: e.source,
      data: [ e.data ]
    }
  })(e) : (e => "text" === e.type ? {
    type: "text",
    text: e.text
  } : {
    type: "image_url",
    image_url: {
      url: toDataImageUrl(e)
    }
  })(e))), serializeOpenAiMessages = (e, t) => {
    if (isLongCatConfig(t) && hasMultimodalMessage(e)) {
      const a = e.filter((e => "system" === e.role)).map((e => contentToText(e.content))).filter(Boolean).join("\n"), n = [];
      for (const t of e.filter((e => "system" !== e.role))) "string" == typeof t.content ? n.push({
        type: "text",
        text: t.content
      }) : n.push(...t.content.map((e => ({
        ...e
      }))));
      if (a) {
        const e = n.find((e => "text" === e.type));
        e ? e.text = `${a}\n\n${e.text}` : n.unshift({
          type: "text",
          text: a
        });
      }
      return [ {
        role: "user",
        content: serializeMultimodalContent(n, t)
      } ];
    }
    return e.map((e => ({
      role: e.role,
      content: isMultimodalContent(e.content) ? serializeMultimodalContent(e.content, t) : e.content
    })));
  }, createOpenAiBody = (e, t = true) => {
    const a = {
      ...t ? e.config.disableThinkingParams : void 0,
      model: e.config.model,
      messages: serializeOpenAiMessages(e.messages, e.config),
      stream: e.stream
    };
    return isLongCatConfig(e.config) && hasMultimodalMessage(e.messages) && (a.output_modalities = [ "text" ]), 
    void 0 !== e.config.temperature && (a.temperature = e.config.temperature), void 0 !== e.config.maxTokens && (a.max_tokens = e.config.maxTokens), 
    a;
  }, ge = [ 400, 422 ], normalizeOpenAiChunk = e => {
    const t = null == e ? void 0 : e.choices;
    return Array.isArray(t) ? t.map((e => {
      var t;
      return null == (t = e.delta) ? void 0 : t.content;
    })).filter((e => "string" == typeof e)).join("") : "";
  }, ve = ((e = {}) => {
    const t = e.transport || createAiTransportRequest;
    return {
      id: e.id || "openai-compatible",
      chat: async e => {
        var a;
        assertConfigAvailable(e.config);
        const n = Date.now(), r = e.endpoint ?? {
          url: `${trimTrailingSlash(e.config.baseUrl)}/chat/completions`,
          headers: {
            Authorization: `Bearer ${(null == (a = e.config.credential) ? void 0 : a.value) || ""}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          timeout: e.config.timeout
        };
        let s = false;
        const attempt = async a => {
          let i = "";
          const o = createSsePacketParser(), emit = t => {
            var a;
            i += t, s = true, null == (a = e.onToken) || a.call(e, t);
          }, l = t({
            method: "POST",
            url: r.url,
            headers: r.headers,
            data: JSON.stringify(createOpenAiBody(e, a)),
            timeout: r.timeout,
            responseType: e.stream ? "stream" : "json",
            onStreamChunk: e.stream ? e => {
              const t = o;
              for (const a of t.push(e)) {
                const e = normalizeOpenAiChunk(a);
                e && emit(e);
              }
            } : void 0
          }), c = bindAbortSignal(e.signal, l.abort);
          try {
            const t = await l.promise;
            if (e.stream) {
              for (const e of o.flush()) {
                const t = normalizeOpenAiChunk(e);
                t && emit(t);
              }
              if (!i) throw createAiError("AI_RESPONSE_PARSE_FAILED");
            } else i = (e => {
              var t, a, n;
              const r = null == (n = null == (a = null == (t = null == e ? void 0 : e.choices) ? void 0 : t[0]) ? void 0 : a.message) ? void 0 : n.content;
              if ("string" != typeof r || !r) throw createAiError("AI_RESPONSE_PARSE_FAILED");
              return r;
            })(parseJsonResponse(t));
            return {
              text: i,
              raw: t.response,
              duration: Date.now() - n
            };
          } finally {
            null == c || c();
          }
        };
        try {
          return await attempt(!0);
        } catch (i) {
          if (!((e, t, a) => {
            var n;
            if (a) return false;
            if (!t.config.disableThinkingParams) return false;
            if (!isAiError(e)) return false;
            const r = null == (n = e.detail) ? void 0 : n.status;
            return "number" == typeof r && ge.includes(r);
          })(i, e, s)) throw i;
          return attempt(false);
        }
      }
    };
  })(), ye = ((e = {}) => {
    const t = e.transport || createAiTransportRequest;
    return {
      id: "anthropic-messages",
      chat: async e => {
        var a;
        assertConfigAvailable(e.config);
        const n = Date.now(), r = e.endpoint ?? {
          url: `${trimTrailingSlash(e.config.baseUrl)}/messages`,
          headers: {
            "x-api-key": (null == (a = e.config.credential) ? void 0 : a.value) || "",
            "anthropic-version": "2023-06-01",
            "Content-Type": "application/json"
          },
          timeout: e.config.timeout
        }, s = t({
          method: "POST",
          url: r.url,
          headers: r.headers,
          data: JSON.stringify(createAnthropicBody(e)),
          timeout: r.timeout,
          responseType: "json"
        }), i = bindAbortSignal(e.signal, s.abort);
        try {
          const e = await s.promise, t = (e => {
            const t = null == e ? void 0 : e.content;
            if (!Array.isArray(t)) throw createAiError("AI_RESPONSE_PARSE_FAILED");
            const a = t.map((e => e.text)).filter((e => "string" == typeof e)).join("");
            if (!a) throw createAiError("AI_RESPONSE_PARSE_FAILED");
            return a;
          })(parseJsonResponse(e));
          return {
            text: t,
            raw: e.response,
            duration: Date.now() - n
          };
        } finally {
          null == i || i();
        }
      }
    };
  })(), be = {
    0: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u5355\u9009\u9898\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":["\u9009\u9879\u5b57\u6bcd"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u9009\u9879\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\uff0c\u6570\u7ec4\u4e2d\u53ea\u80fd\u6709 1 \u4e2a\u5143\u7d20\u3002\n2. \u4e0d\u591f\u786e\u5b9a\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4\uff1a{"answer":[]}\n3. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002',
    1: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u591a\u9009\u9898\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":["\u9009\u9879\u5b57\u6bcd"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u9009\u9879\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\uff0c\u5e76\u6309\u5b57\u6bcd\u5347\u5e8f\u6392\u5e8f\u3002\n2. \u81f3\u5c11\u4e24\u4e2a\u9009\u9879\u624d\u7b97\u6709\u6548\uff0c\u4e0d\u786e\u5b9a\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4\uff1a{"answer":[]}\n3. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002',
    2: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u586b\u7a7a\u9898\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":["\u7b54\u68481","\u7b54\u68482"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u7b54\u6848\u6570\u91cf\u5fc5\u987b\u5339\u914d\u9898\u76ee\u7a7a\u683c\u6570\uff0c\u4e0d\u5f97\u7f3a\u5931\u6216\u591a\u586b\u3002\n2. \u4e0d\u591f\u786e\u5b9a\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4\uff1a{"answer":[]}\n3. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002',
    3: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u5224\u65ad\u9898\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":"\u6b63\u786e"}\n\u6216\n{"answer":"\u9519\u8bef"}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. answer \u53ea\u80fd\u662f\u201c\u6b63\u786e\u201d\u6216\u201c\u9519\u8bef\u201d\uff0c\u4e0d\u786e\u5b9a\u65f6\u8f93\u51fa\u7a7a\u5b57\u7b26\u4e32\uff1a{"answer":""}\n2. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002',
    4: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u7b80\u7b54\u9898\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":"\u7cbe\u7b80\u7684\u7b54\u6848"}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u76f4\u63a5\u7ed9\u51fa\u7cbe\u7b80\u7b54\u6848\uff0c\u4e0d\u8981\u8d58\u8ff0\u3002\n2. \u4e0d\u591f\u786e\u5b9a\u65f6\u8f93\u51fa\u7a7a\u5b57\u7b26\u4e32\uff1a{"answer":""}\n3. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002',
    15: '\u4f60\u53ea\u4f5c\u4e3a\u201cJSON \u8f93\u51fa\u673a\u5668\u201d\u5de5\u4f5c\uff0c\u56de\u7b54\u65f6\u4ec5\u8f93\u51fa\u4e00\u884c JSON\uff0c\u7981\u6b62\u51fa\u73b0\u9664 JSON \u4ee5\u5916\u7684\u4efb\u4f55\u7b26\u53f7\u3001\u8bf4\u660e\u6216\u7a7a\u884c\u3002\n\n\u3010\u9898\u578b\u3011\u9605\u8bfb\u7406\u89e3\n\n\u3010\u552f\u4e00\u5141\u8bb8\u7684\u8f93\u51fa\u683c\u5f0f\u3011\n{"answer":[["A"],["B"]]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. answer \u5fc5\u987b\u662f\u4e8c\u7ef4\u6570\u7ec4\uff0c\u5916\u5c42\u6570\u7ec4\u6570\u91cf\u5fc5\u987b\u7b49\u4e8e\u5b50\u9898\u6570\u91cf\u3002\n2. \u5355\u9009\u9898\u5b50\u9898\u586b\u5199 1 \u4e2a\u9009\u9879\u5b57\u6bcd\uff0c\u591a\u9009\u9898\u5b50\u9898\u53ef\u586b\u5199\u591a\u4e2a\u9009\u9879\u5b57\u6bcd\u3002\n3. \u5224\u65ad\u9898\u5b50\u9898\u586b\u5199\u201c\u6b63\u786e\u201d\u6216\u201c\u9519\u8bef\u201d\uff0c\u4e0d\u8981\u586b\u5199\u9009\u9879\u5b57\u6bcd\u3002\n4. \u9009\u9879\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\uff0c\u591a\u9009\u9898\u6309\u5b57\u6bcd\u5347\u5e8f\u6392\u5e8f\u3002\n5. \u67d0\u4e2a\u5b50\u9898\u4e0d\u786e\u5b9a\u65f6\uff0c\u8be5\u5b50\u9898\u8fd4\u56de\u7a7a\u6570\u7ec4\uff0c\u4f8b\u5982 {"answer":[[],["B"]]}\u3002\n6. \u8f93\u51fa\u4f1a\u88ab JSON.parse \u76f4\u63a5\u89e3\u6790\uff0c\u51fa\u73b0\u4efb\u4f55\u975e JSON \u5185\u5bb9\u89c6\u4e3a\u5931\u8d25\u3002'
  }, we = [ "api.deepseek.com", "dashscope.aliyuncs.com", "open.bigmodel.cn", "qianfan.baidubce.com", "ark.cn-beijing.volces.com", "api.hunyuan.cloud.tencent.com", "api.longcat.chat", "api.moonshot.ai", "api.siliconflow.cn", "api.openai.com", "api.anthropic.com", "generativelanguage.googleapis.com", "openrouter.ai", "api.groq.com", "api.together.ai", "api.mistral.ai" ], canDirectConnect = e => {
    if (!e.directConnect) return false;
    let t;
    try {
      t = new URL(e.baseUrl).hostname;
    } catch {
      return false;
    }
    return we.some((e => t === e || t.endsWith(`.${e}`)));
  }, toThrownError = e => {
    const t = (e => e && he.includes(e) ? e : "AI_NETWORK_FAILED")(e.code);
    return isAiError(e.error) && e.error.code === t ? e.error : createAiError(t);
  }, xe = "https://www.aiask.site", trimSlash = e => e.replace(/\/+$/, ""), ke = {
    "anthropic-messages": e => ({
      "x-api-key": e,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json"
    }),
    "openai-compatible": e => ({
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }, codeFor = (e, t) => "upstream" === e ? 401 === t || 403 === t ? "AI_AUTH_FAILED" : "AI_NETWORK_FAILED" : 401 === t ? "AI_PROXY_LOGIN_REQUIRED" : 429 === t ? "AI_PROXY_RATE_LIMITED" : "AI_PROXY_UNAVAILABLE", runAiScene = async (e, t, a, n = {}) => {
    var r;
    if (!t) return (() => {
      const e = createAiError("AI_CONFIG_MISSING", {
        userMessage: "AI \u914d\u7f6e\u7f3a\u5931\uff0c\u8bf7\u5148\u5b8c\u6210\u914d\u7f6e"
      });
      return {
        success: false,
        text: "",
        duration: 0,
        error: e,
        displayMessage: getAiErrorMessage(e)
      };
    })();
    try {
      const s = n.provider || (null == (r = n.resolveProvider) ? void 0 : r.call(n, t)) || (e => {
        switch (e) {
         case "openai-compatible":
          return ve;

         case "anthropic-messages":
          return ye;
        }
      })(t.providerKind), i = ((e, t, a = "4") => [ {
        role: "system",
        content: "ask" === e ? be[a] || be[4] : "repair" === e ? "\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u7b54\u9898\u52a9\u624b\uff0c\u8bf7\u4fee\u590d\u7b54\u6848\u4e2d\u7f3a\u5931\u3001\u683c\u5f0f\u9519\u8bef\u6216\u8868\u8ff0\u4e0d\u6e05\u7684\u5185\u5bb9\u3002\u8f93\u51fa\u5e94\u4ee5\u4fee\u590d\u7b54\u6848\u4e3a\u4e3b\uff0c\u4fdd\u6301\u51c6\u786e\u3001\u7b80\u6d01\uff0c\u5e76\u907f\u514d\u65e0\u5173\u89e3\u91ca\u3002" : "\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u7b54\u9898\u52a9\u624b\uff0c\u8bf7\u6839\u636e\u7528\u6237\u63d0\u4f9b\u7684\u9898\u76ee\u8fdb\u884c\u89e3\u7b54\u3002\u56de\u7b54\u5e94\u51c6\u786e\u3001\u7b80\u6d01\uff0c\u5fc5\u8981\u65f6\u7ed9\u51fa\u7b80\u8981\u7406\u7531\u3002"
      }, {
        role: "user",
        content: t
      } ])(e, a, n.questionType), o = n.stream ?? t.stream;
      if (!n.route) {
        const e = await s.chat({
          config: t,
          messages: i,
          stream: o,
          onToken: n.onToken,
          signal: n.signal
        });
        return {
          success: !0,
          text: e.text,
          duration: e.duration
        };
      }
      const l = Date.now(), c = await (async e => {
        const t = canDirectConnect(e.channel), runDirect = async t => {
          const a = await e.callDirect(e.channel, (t => {
            var a;
            return null == (a = e.onToken) ? void 0 : a.call(e, t);
          }));
          if (!a.ok) throw toThrownError(a);
          return {
            servedBy: "direct",
            fallbackUsed: t,
            text: a.text || ""
          };
        };
        if (!e.loggedIn || "auto" !== e.transport) {
          if (!t) throw createAiError("AI_DIRECT_BLOCKED");
          return runDirect(!1);
        }
        let a = !1;
        const n = await e.callProxy(e.channel, (t => {
          var n;
          a = !0, null == (n = e.onToken) || n.call(e, t);
        }));
        if (n.ok) return {
          servedBy: "proxy",
          fallbackUsed: !1,
          text: n.text || ""
        };
        if ("upstream" === n.stage) throw toThrownError(n);
        if (a) throw toThrownError(n);
        if (!t) throw createAiError("AI_DIRECT_BLOCKED");
        return runDirect(!0);
      })({
        channel: n.route.channel,
        loggedIn: Boolean(n.route.apiKey),
        transport: n.route.transport,
        onToken: n.onToken,
        callProxy: async (e, a) => {
          var r;
          const l = ((e, t, a) => ({
            url: `${xe}/ai/chat`,
            headers: {
              Authorization: `Bearer ${a.apiKey}`,
              "X-Ai-Channel": e.id,
              "X-Ai-Model": a.modelId || e.defaultModelId,
              "X-Ai-Credential": t,
              "X-Ai-Timestamp": String(a.now()),
              "X-Ai-Nonce": a.randomNonce(),
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            timeout: e.timeout
          }))(e, (null == (r = t.credential) ? void 0 : r.value) || "", {
            apiKey: n.route.apiKey,
            now: n.route.now ?? (() => Date.now()),
            randomNonce: n.route.randomNonce ?? (() => randomString(24)),
            modelId: n.route.modelId
          });
          try {
            return {
              ok: !0,
              stage: "upstream",
              text: (await s.chat({
                config: t,
                messages: i,
                stream: o,
                onToken: a,
                signal: n.signal,
                endpoint: l
              })).text
            };
          } catch (c) {
            return ((e, t) => {
              const a = (e => {
                if (e) for (const t of e.split(/\r?\n/)) {
                  const e = t.indexOf(":");
                  if (e < 0) continue;
                  if ("x-ai-stage" !== t.slice(0, e).trim().toLowerCase()) continue;
                  const a = t.slice(e + 1).trim().toLowerCase();
                  return "proxy" === a || "upstream" === a ? a : void 0;
                }
              })(null == t ? void 0 : t.responseHeaders) ?? "proxy";
              return {
                ok: !1,
                stage: a,
                code: codeFor(a, (null == t ? void 0 : t.status) ?? 0),
                error: e
              };
            })(c, null == c ? void 0 : c.detail);
          }
        },
        callDirect: async (e, a) => {
          var r;
          const l = ((e, t) => ({
            url: "anthropic-messages" === e.providerKind ? `${trimSlash(e.baseUrl)}/messages` : `${trimSlash(e.baseUrl)}/chat/completions`,
            headers: ke[e.providerKind](t),
            timeout: e.timeout
          }))(e, (null == (r = t.credential) ? void 0 : r.value) || "");
          try {
            return {
              ok: !0,
              text: (await s.chat({
                config: t,
                messages: i,
                stream: o,
                onToken: a,
                signal: n.signal,
                endpoint: l
              })).text
            };
          } catch (c) {
            return {
              ok: !1,
              code: isAiError(c) ? c.code : void 0,
              error: c
            };
          }
        }
      });
      return {
        success: !0,
        text: c.text,
        duration: Date.now() - l,
        servedBy: c.servedBy,
        fallbackUsed: c.fallbackUsed
      };
    } catch (s) {
      const e = isAiError(s) ? s : createAiError("AI_NETWORK_FAILED", {
        cause: s
      });
      return {
        success: false,
        text: "",
        duration: 0,
        error: e,
        displayMessage: getAiErrorMessage(e)
      };
    }
  }, qe = new Set([ "\u6682\u65e0KEY", "\u65e0KEY", "\u6682\u65e0APIKEY", "\u65e0APIKEY", "\u672a\u914d\u7f6eKEY", "\u672a\u914d\u7f6eAPIKEY", "\u672a\u586b\u5199KEY", "\u672a\u586b\u5199APIKEY", "APIKEY\u7f3a\u5931", "\u8bf7\u586b\u5199KEY", "\u8bf7\u586b\u5199APIKEY", "\u8bf7\u914d\u7f6eKEY", "\u8bf7\u914d\u7f6eAPIKEY", "\u6682\u65e0\u7b54\u6848", "\u6682\u65e0\u7b54\u6848\u4fe1\u606f", "\u65e0\u7b54\u6848", "\u6ca1\u6709\u7b54\u6848", "\u672a\u627e\u5230\u7b54\u6848", "\u672a\u67e5\u8be2\u5230\u7b54\u6848", "\u672a\u68c0\u7d22\u5230\u7b54\u6848", "\u67e5\u8be2\u4e0d\u5230\u7b54\u6848", "\u8bf7\u767b\u5f55", "\u8bf7\u5148\u767b\u5f55", "\u672a\u767b\u5f55", "\u9274\u6743\u5931\u8d25", "\u672a\u6388\u6743", "\u65e0\u6743\u9650", "\u8bf7\u6c42\u5931\u8d25", "\u7f51\u7edc\u5f02\u5e38", "\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25", "\u54cd\u5e94\u89e3\u6790\u5931\u8d25", "\u63a5\u53e3\u5f02\u5e38", "\u63a5\u53e3\u8bf7\u6c42\u5931\u8d25", "\u63a5\u53e3\u8bf7\u6c42\u8d85\u65f6", "\u8bf7\u6c42\u8d85\u65f6", "\u6b21\u6570\u4e0d\u8db3", "\u4f59\u989d\u4e0d\u8db3", "\u989d\u5ea6\u4e0d\u8db3" ]), _e = [ /^\u6682\u672a(\u6536\u5f55|\u627e\u5230|\u67e5\u8be2\u5230|\u68c0\u7d22\u5230)(\u53c2\u8003)?\u7b54\u6848(\u4fe1\u606f)?$/, /^\u672a(\u627e\u5230|\u67e5\u8be2\u5230|\u68c0\u7d22\u5230)(\u53c2\u8003)?\u7b54\u6848(\u4fe1\u606f)?$/, /^\u6ca1\u6709(\u627e\u5230|\u67e5\u8be2\u5230|\u68c0\u7d22\u5230)?(\u53c2\u8003)?\u7b54\u6848(\u4fe1\u606f)?$/, /^\u8bf7(\u5148)?\u767b\u5f55\u540e(\u518d)?(\u67e5\u770b|\u4f7f\u7528|\u641c\u7d22|\u67e5\u8be2).*$/, /^\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u4f7f\u7528.*$/, /^AI(\u51ed\u8bc1|\u914d\u7f6e|\u54cd\u5e94|\u8bf7\u6c42).*(\u7f3a\u5931|\u5f02\u5e38|\u5931\u8d25|\u9519\u8bef).*$/, /^API\s*KEY\s*(\u7f3a\u5931|\u672a\u586b\u5199|\u672a\u914d\u7f6e|\u65e0\u6548).*$/i, /^(\u8bf7\u6c42|\u63a5\u53e3|\u7f51\u7edc).*(\u5931\u8d25|\u5f02\u5e38|\u8d85\u65f6).*$/, /^(\u6b21\u6570|\u4f59\u989d|\u989d\u5ea6).*(\u4e0d\u8db3|\u5df2\u7528\u5b8c).*$/ ], isNonAnswerText = e => {
    if ("string" != typeof e) return false;
    const t = e.trim();
    return !!t && (!!qe.has((e => e.trim().replace(/\s+/g, "").toUpperCase())(t)) || _e.some((e => e.test(t))));
  }, findNonAnswerText = e => {
    if ("string" == typeof e && isNonAnswerText(e)) return e.trim();
    if (Array.isArray(e)) for (const t of e) {
      const e = findNonAnswerText(t);
      if (e) return e;
    }
  }, Ae = new Set([ "\u5bf9", "\u6b63\u786e", "true", "t", "\u221a", "\u2713", "1", "\u662f", "yes", "y", "right", "correct", "ri" ]), Te = new Set([ "\u9519", "\u9519\u8bef", "\u4e0d\u6b63\u786e", "false", "f", "\xd7", "\u2715", "x", "0", "\u5426", "no", "n", "wrong", "incorrect", "wr" ]), splitAnswerText = (e, t) => e.split(t).map((e => e.trim())).filter(Boolean), normalizeJudgeAnswer = e => {
    const t = normalizeComparableText(e).toLowerCase();
    return Ae.has(t) ? "\u6b63\u786e" : Te.has(t) ? "\u9519\u8bef" : null;
  }, flattenAnswerTexts = e => null == e ? [] : Array.isArray(e) ? e.flatMap(flattenAnswerTexts) : "object" == typeof e ? Object.values(e).flatMap(flattenAnswerTexts) : [ String(e) ], mapChoiceValueToOption = (e, t) => {
    var a;
    const n = ((e, t) => {
      var a;
      const n = e.trim().toUpperCase();
      if (/^[A-Z]$/.test(n)) return (null == (a = t[n.charCodeAt(0) - 65]) ? void 0 : a.trim()) || void 0;
    })(e, t);
    if (n) return n;
    const r = e.trim();
    return null == (a = t.find((e => e.trim() === r))) ? void 0 : a.trim();
  }, Ce = new Set([ "4", "5", "6", "7" ]), invalid = (e, t, a) => ({
    valid: false,
    answer: [],
    raw: t,
    error: createAiError(e, {
      detail: a
    })
  }), extractCodeBlockJson = e => {
    var t;
    const a = e.match(/```(?:json)?\s*([\s\S]*?)```/i);
    return null == (t = null == a ? void 0 : a[1]) ? void 0 : t.trim();
  }, findJsonObjectText = e => {
    const t = e.indexOf("{");
    if (t < 0) return;
    let a = 0, n = false, r = false;
    for (let s = t; s < e.length; s++) {
      const i = e[s];
      if (r) r = false; else if ("\\" !== i) if ('"' !== i) {
        if (!n && ("{" === i && a++, "}" === i && a--, 0 === a)) return e.slice(t, s + 1);
      } else n = !n; else r = true;
    }
    return e.slice(t);
  }, normalizeTextAnswer = e => {
    if ("string" != typeof e) return;
    return e.trim() || void 0;
  }, normalizeTextArray = e => {
    if (!Array.isArray(e)) return;
    const t = e.map((e => "string" == typeof e ? e.trim() : "")).filter(Boolean);
    return t.length === e.length ? t : void 0;
  }, getChoiceOptions = e => e.filter((e => "string" == typeof e)), parseSingleChoice = (e, t, a) => {
    const n = Array.isArray(e) ? normalizeTextArray(e) : [ normalizeTextAnswer(e) ].filter((e => Boolean(e)));
    if (!n || 1 !== n.length) return invalid("AI_OUTPUT_SCHEMA_INVALID", t);
    const r = mapChoiceValueToOption(n[0], getChoiceOptions(a.options));
    return r ? {
      valid: true,
      answer: [ r ],
      raw: t
    } : invalid("AI_ANSWER_NOT_MATCHED", t, {
      answer: n[0]
    });
  }, parseMultipleChoice = (e, t, a) => {
    const n = normalizeTextArray(e) || (e => {
      const t = normalizeTextAnswer(e);
      if (!t) return;
      const a = splitAnswerText(t, /[\n,\uff0c\u3001;\uff1b]+/);
      return a.length > 1 ? a : void 0;
    })(e);
    if (!n || n.length < 2) return invalid("AI_OUTPUT_SCHEMA_INVALID", t);
    if (new Set(n.map((e => e.trim().toUpperCase()))).size !== n.length) return invalid("AI_ANSWER_NOT_MATCHED", t, {
      answer: n
    });
    const r = n.map((e => mapChoiceValueToOption(e, getChoiceOptions(a.options))));
    return r.some((e => !e)) ? invalid("AI_ANSWER_NOT_MATCHED", t, {
      answer: n
    }) : {
      valid: true,
      answer: r,
      raw: t
    };
  }, parseBlank = (e, t, a) => {
    const n = normalizeTextArray(e);
    return n ? a.blankCount > 0 && n.length !== a.blankCount || 0 === a.blankCount && 0 === n.length || n.some(isNonAnswerText) ? invalid("AI_OUTPUT_SCHEMA_INVALID", t) : {
      valid: true,
      answer: n,
      raw: t
    } : invalid("AI_OUTPUT_SCHEMA_INVALID", t);
  }, parseJudgement = (e, t) => {
    const a = normalizeTextAnswer(e);
    return "\u6b63\u786e" !== a && "\u9519\u8bef" !== a ? invalid("AI_OUTPUT_SCHEMA_INVALID", t) : {
      valid: true,
      answer: [ a ],
      raw: t
    };
  }, parseSubjective = (e, t) => {
    const a = normalizeTextAnswer(e);
    return a ? isNonAnswerText(a) ? invalid("AI_OUTPUT_SCHEMA_INVALID", t) : {
      valid: true,
      answer: [ a ],
      raw: t
    } : invalid("AI_OUTPUT_SCHEMA_INVALID", t);
  }, isSubQuestionMeta = e => "object" == typeof e && null !== e && Array.isArray(e.options), parseReadingChoice = (e, t, a) => {
    if (Array.isArray(e) && 0 === e.length) return {
      valid: true,
      answer: [],
      raw: t
    };
    const n = {
      type: a.type || "0",
      options: a.options || [],
      blankCount: 0
    };
    if ("1" === n.type) return parseMultipleChoice(e, t, n);
    if ("3" === n.type) {
      const [a] = normalizeTextArray(e) || [];
      return parseJudgement(a, t);
    }
    if ("2" === n.type) return parseBlank(e, t, n);
    if (Ce.has(n.type)) {
      const [a] = normalizeTextArray(e) || [];
      return parseSubjective(a, t);
    }
    return parseSingleChoice(e, t, n);
  }, parseAiAnswer = (e, t) => {
    const a = (e => {
      const t = [ e.trim(), extractCodeBlockJson(e), findJsonObjectText(e) ].filter((e => Boolean(e)));
      for (const n of t) try {
        return {
          ok: !0,
          value: JSON.parse(n)
        };
      } catch (a) {
        if (n === t[t.length - 1]) return {
          ok: false,
          cause: a
        };
      }
      return {
        ok: false
      };
    })(e);
    if (!a.ok) return {
      valid: false,
      answer: [],
      error: createAiError("AI_RESPONSE_PARSE_FAILED", {
        cause: a.cause
      })
    };
    const n = a.value, r = (e => {
      if ("object" == typeof e && null !== e && "answer" in e) return e.answer;
    })(n);
    return void 0 === r ? invalid("AI_OUTPUT_SCHEMA_INVALID", n) : "0" === t.type ? parseSingleChoice(r, n, t) : "1" === t.type ? parseMultipleChoice(r, n, t) : "2" === t.type ? parseBlank(r, n, t) : "3" === t.type ? parseJudgement(r, n) : Ce.has(t.type) ? parseSubjective(r, n) : "15" === t.type ? ((e, t, a) => {
      const n = a.options.filter(isSubQuestionMeta);
      if (!Array.isArray(e) || 0 === n.length || e.length !== n.length) return invalid("AI_OUTPUT_SCHEMA_INVALID", t);
      const r = [];
      for (let s = 0; s < n.length; s++) {
        const a = parseReadingChoice(e[s], t, n[s]);
        if (!a.valid) return a;
        if (a.answer.some(Array.isArray)) return invalid("AI_OUTPUT_SCHEMA_INVALID", t);
        r.push(a.answer);
      }
      return {
        valid: true,
        answer: r,
        raw: t
      };
    })(r, n, t) : invalid("AI_QUESTION_TYPE_UNSUPPORTED", n, {
      type: t.type
    });
  }, hasUnsupportedMedia = e => {
    const t = (e => e.replace(/<[^>]*>/g, " "))(e);
    return /<\s*img\b/i.test(e) || /<\s*(?:svg|image)\b/i.test(e) || /<\s*math\b/i.test(e) || /<\s*script\b[^>]*type\s*=\s*["']?math\/tex/i.test(e) || hasUnsupportedMathClass(e) || /!\[[^\]]*]\([^)]*\)/.test(t) || /\$\$/.test(t) || /(^|[^\w\d])\$[^\s$][^$\n]*\$(?!\d)/.test(t) || /\\\(/.test(t) || /\\\[/.test(t);
  }, hasUnsupportedMathClass = e => {
    for (const t of e.matchAll(/class\s*=\s*["']([^"']*)["']/g)) {
      if (t[1].split(/\s+/).filter(Boolean).some((e => "MathJax" === e || e.startsWith("MathJax_") || "katex" === e || e.startsWith("katex-") || e.startsWith("mjx-")))) return true;
    }
    return false;
  }, Se = /^([A-Ha-h\uff21-\uff28\uff41-\uff48])(?:\s*[.\uff0e\u3002\u3001)\uff09]\s*|\s+)(.+)$/, Ie = /^(\u7b54\u6848|\u89e3\u6790|\u63d0\u793a)\s*[:\uff1a]/, Ee = /^((\d+|[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07]+)[\s.\uff0e\u3002\u3001)\uff09]+)+/, cleanQuestionPrefix = e => e.replace(Ee, "").trim(), normalizeOption = e => e.replace(/\s+/g, ""), detectAiQuestionType = (e, t) => {
    const a = e.replace(/\s/g, "");
    return (e => {
      if (2 !== e.length) return false;
      const t = e.map(normalizeOption), a = new Set(t);
      return 2 === a.size && (a.has("\u6b63\u786e") && a.has("\u9519\u8bef") || a.has("\u5bf9") && a.has("\u9519"));
    })(t) ? "3" : /\u591a\u9009|\u591a\u9879|\u4e0d\u5b9a\u9879|\u9009\u62e9[\u4e24\u4e8c2]\u9879|\u9009\u62e9[\u4e24\u4e8c2]\u4e2a/.test(a) ? "1" : t.length > 0 ? "0" : (e => /(^|[\uff0c\u3002\uff1b;\uff01\uff1f?])\u5224\u65ad($|[\s\u3000\uff1a:\u9898]|\u4e0b\u5217|\u4ee5\u4e0b)/.test(e) || /\u8bf7\u5224\u65ad|\u6b63\u8bef|\u5bf9\u9519|\u662f\u975e/.test(e.replace(/\s/g, "")))(e) ? "3" : /\u586b\u7a7a|\u7a7a\u683c|\u586b\u8865|\u62ec\u53f7\u7a7a/.test(a) || /\uff08\s*\uff09|\(\s*\)/.test(e) ? "2" : /\u7b80\u7b54|\u7b80\u8ff0|\u8bba\u8ff0|\u8bf4\u660e|\u5206\u6790|\u4e3a\u4f55|\u4e3a\u4ec0\u4e48/.test(a) ? "4" : "8";
  }, Ue = {
    thinking: {
      type: "disabled"
    }
  }, withKeyHelp = e => ({
    ...e,
    keyHelp: e.keyHelp || `\u767b\u5f55 ${e.name} \u63a7\u5236\u53f0\uff0c\u5728 API Key \u9875\u9762\u521b\u5efa\u6216\u590d\u5236 API Key\u3002`
  }), Pe = [ withKeyHelp({
    id: "deepseek",
    name: "DeepSeek",
    providerKind: "openai-compatible",
    baseUrl: "https://api.deepseek.com",
    defaultModel: "deepseek-v4-flash",
    models: [ "deepseek-v4-flash", "deepseek-v4-pro" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://api-docs.deepseek.com/quick_start/pricing",
    keyUrl: "https://platform.deepseek.com/api_keys",
    region: "domestic"
  }), withKeyHelp({
    id: "qwen-dashscope",
    name: "\u901a\u4e49\u5343\u95ee / \u767e\u70bc",
    providerKind: "openai-compatible",
    baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    defaultModel: "qwen3.7-plus",
    models: [ "qwen3.7-plus", "qwen3.7-flash", "qwen3.8-max", "qwen3.5-omni-plus" ],
    modelCapabilities: {
      "qwen3.7-plus": {
        text: true,
        image: true
      },
      "qwen3.7-flash": {
        text: true,
        image: true
      },
      "qwen3.8-max": {
        text: true,
        image: true
      },
      "qwen3.5-omni-plus": {
        text: true,
        image: true
      }
    },
    stream: true,
    credentialType: "api-key",
    docUrl: "https://help.aliyun.com/zh/model-studio/models",
    keyUrl: "https://help.aliyun.com/zh/model-studio/get-api-key",
    region: "domestic"
  }), withKeyHelp({
    id: "zhipu-glm",
    name: "\u667a\u8c31 GLM",
    providerKind: "openai-compatible",
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    defaultModel: "glm-4.7",
    models: [ "glm-4.7", "glm-4.7-flash", "glm-4.7-flashx", "glm-5", "glm-5-turbo", "glm-4.6", "glm-4.5-flash", "glm-4v-flash" ],
    modelCapabilities: {
      "glm-4v-flash": {
        text: true,
        image: true
      }
    },
    stream: true,
    credentialType: "api-key",
    docUrl: "https://docs.bigmodel.cn/api-reference",
    keyUrl: "https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys",
    region: "domestic",
    disableThinkingParams: Ue
  }), withKeyHelp({
    id: "baidu-qianfan",
    name: "\u767e\u5ea6\u5343\u5e06",
    providerKind: "openai-compatible",
    baseUrl: "https://qianfan.baidubce.com/v2",
    defaultModel: "ernie-5.0",
    models: [ "ernie-5.0", "ernie-5.1", "ernie-5.0-thinking-latest", "ernie-x1.1", "ernie-4.5-turbo-128k", "deepseek-v3.2", "ernie-4.5-turbo-vl-32k" ],
    modelCapabilities: {
      "ernie-5.0": {
        text: true,
        image: true
      },
      "ernie-4.5-turbo-vl-32k": {
        text: true,
        image: true
      }
    },
    timeout: 6e4,
    stream: true,
    credentialType: "api-key",
    docUrl: "https://cloud.baidu.com/doc/qianfan-docs/s/7m95lyy43",
    keyUrl: "https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application",
    region: "domestic",
    disableThinkingParams: Ue
  }), withKeyHelp({
    id: "volc-ark",
    name: "\u706b\u5c71\u65b9\u821f / \u8c46\u5305",
    providerKind: "openai-compatible",
    baseUrl: "https://ark.cn-beijing.volces.com/api/v3",
    defaultModel: "doubao-seed-2-0-pro-260215",
    models: [ "doubao-seed-2-0-pro-260215", "doubao-seed-2-0-mini-260428", "doubao-seed-2-0-lite-260428" ],
    modelCapabilities: {
      "doubao-seed-2-0-pro-260215": {
        text: true,
        image: true
      },
      "doubao-seed-2-0-mini-260428": {
        text: true,
        image: true
      },
      "doubao-seed-2-0-lite-260428": {
        text: true,
        image: true
      }
    },
    timeout: 6e4,
    stream: true,
    credentialType: "api-key",
    docUrl: "https://www.volcengine.com/docs/82379/1330310",
    keyUrl: "https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey",
    keyHelp: "\u767b\u5f55\u706b\u5c71\u65b9\u821f\u63a7\u5236\u53f0\u521b\u5efa API Key\u3002\u82e5\u8c03\u7528\u62a5\u6a21\u578b\u4e0d\u5b58\u5728\uff0c\u9700\u5148\u5728\u300c\u5728\u7ebf\u63a8\u7406\u300d\u521b\u5efa\u63a8\u7406\u63a5\u5165\u70b9\uff0c\u5e76\u628a\u6a21\u578b\u540d\u6362\u6210\u63a5\u5165\u70b9 ID\uff08ep- \u5f00\u5934\uff09\u3002",
    region: "domestic",
    disableThinkingParams: Ue
  }), withKeyHelp({
    id: "tencent-hunyuan",
    name: "\u817e\u8baf\u6df7\u5143",
    providerKind: "openai-compatible",
    baseUrl: "https://api.hunyuan.cloud.tencent.com/v1",
    defaultModel: "hunyuan-turbos-latest",
    models: [ "hunyuan-turbos-latest", "hunyuan-a13b", "hunyuan-t1-latest", "hunyuan-translation" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://cloud.tencent.com/document/product/1729/111007",
    keyUrl: "https://console.cloud.tencent.com/hunyuan/api-key",
    region: "domestic"
  }), withKeyHelp({
    id: "longcat",
    name: "LongCat",
    providerKind: "openai-compatible",
    baseUrl: "https://api.longcat.chat/openai/v1",
    defaultModel: "LongCat-2.0",
    models: [ "LongCat-2.0" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://longcat.chat/platform/docs/zh/",
    keyUrl: "https://longcat.chat/platform/api_keys",
    keyHelp: "\u767b\u5f55 LongCat API \u5f00\u653e\u5e73\u53f0\uff0c\u5728 API Keys \u9875\u9762\u70b9\u51fb\u201c\u521b\u5efa API Key\u201d\u751f\u6210\u5bc6\u94a5\u3002",
    region: "domestic"
  }), withKeyHelp({
    id: "kimi",
    name: "Kimi / Moonshot",
    providerKind: "openai-compatible",
    baseUrl: "https://api.moonshot.ai/v1",
    defaultModel: "kimi-k3",
    models: [ "kimi-k3", "kimi-k2.7-code", "kimi-k2.6", "kimi-k2.5", "moonshot-v1-128k" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://platform.kimi.ai/docs/api/chat",
    keyUrl: "https://platform.kimi.ai/console/api-keys",
    keyHelp: "\u767b\u5f55 platform.kimi.ai \u521b\u5efa API Key\u3002\u6ce8\u610f\uff1a\u56fd\u5185\u7ad9 platform.moonshot.cn \u7684 Key \u5728 api.moonshot.ai \u4e0a\u4e0d\u53ef\u7528\uff0c\u4e24\u8fb9\u8d26\u53f7\u72ec\u7acb\u3002",
    region: "domestic"
  }), withKeyHelp({
    id: "siliconflow",
    name: "SiliconFlow",
    providerKind: "openai-compatible",
    baseUrl: "https://api.siliconflow.cn/v1",
    defaultModel: "deepseek-ai/DeepSeek-V3.2",
    models: [ "deepseek-ai/DeepSeek-V3.2", "Pro/deepseek-ai/DeepSeek-V3.2", "zai-org/GLM-5.2", "Pro/zai-org/GLM-5.1", "Qwen/Qwen3.5-397B-A17B", "Qwen/Qwen3.5-35B-A3B", "zai-org/GLM-4.5V" ],
    modelCapabilities: {
      "Qwen/Qwen3.5-397B-A17B": {
        text: true,
        image: true
      },
      "Qwen/Qwen3.5-35B-A3B": {
        text: true,
        image: true
      },
      "zai-org/GLM-4.5V": {
        text: true,
        image: true
      }
    },
    stream: true,
    credentialType: "api-key",
    docUrl: "https://docs.siliconflow.cn/cn/api-reference/chat-completions/chat-completions",
    keyUrl: "https://cloud.siliconflow.cn/account/ak",
    region: "domestic"
  }), withKeyHelp({
    id: "openai",
    name: "OpenAI",
    providerKind: "openai-compatible",
    baseUrl: "https://api.openai.com/v1",
    defaultModel: "gpt-5.6",
    models: [ "gpt-5.6", "gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://developers.openai.com/api/docs/models",
    keyUrl: "https://platform.openai.com/api-keys",
    region: "global"
  }), withKeyHelp({
    id: "anthropic",
    name: "Anthropic Claude",
    providerKind: "anthropic-messages",
    baseUrl: "https://api.anthropic.com/v1",
    defaultModel: "claude-sonnet-5",
    models: [ "claude-sonnet-5", "claude-opus-5", "claude-haiku-4-5-20251001", "claude-fable-5" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://platform.claude.com/docs/en/about-claude/models/overview",
    keyUrl: "https://console.anthropic.com/settings/keys",
    region: "global"
  }), withKeyHelp({
    id: "gemini",
    name: "Google Gemini",
    providerKind: "openai-compatible",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
    defaultModel: "gemini-3.7-flash",
    models: [ "gemini-3.7-flash", "gemini-3.6-flash", "gemini-3.1-pro-preview", "gemini-2.5-flash", "gemini-2.5-pro" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://ai.google.dev/gemini-api/docs/models",
    keyUrl: "https://aistudio.google.com/app/apikey",
    region: "global"
  }), withKeyHelp({
    id: "openrouter",
    name: "OpenRouter",
    providerKind: "openai-compatible",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "openai/gpt-5.6-luna",
    models: [ "openai/gpt-5.6-luna", "openai/gpt-5.6-terra", "anthropic/claude-sonnet-5", "google/gemini-3.7-flash", "deepseek/deepseek-v4-flash-0731", "moonshotai/kimi-k3" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://openrouter.ai/docs/api-reference/chat-completion",
    keyUrl: "https://openrouter.ai/settings/keys",
    region: "global"
  }), withKeyHelp({
    id: "groq",
    name: "Groq",
    providerKind: "openai-compatible",
    baseUrl: "https://api.groq.com/openai/v1",
    defaultModel: "openai/gpt-oss-120b",
    models: [ "openai/gpt-oss-120b", "openai/gpt-oss-20b", "llama-3.3-70b-versatile", "llama-3.1-8b-instant" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://console.groq.com/docs/models",
    keyUrl: "https://console.groq.com/keys",
    region: "global"
  }), withKeyHelp({
    id: "together",
    name: "Together AI",
    providerKind: "openai-compatible",
    baseUrl: "https://api.together.ai/v1",
    defaultModel: "moonshotai/Kimi-K3",
    models: [ "moonshotai/Kimi-K3", "zai-org/GLM-5.2", "openai/gpt-oss-120b", "deepseek-ai/DeepSeek-V4-Flash-0731", "Qwen/Qwen3.7-Plus" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://docs.together.ai/docs/serverless-models",
    keyUrl: "https://api.together.ai/settings/api-keys",
    region: "global"
  }), withKeyHelp({
    id: "mistral",
    name: "Mistral AI",
    providerKind: "openai-compatible",
    baseUrl: "https://api.mistral.ai/v1",
    defaultModel: "mistral-medium-3-5-26-04",
    models: [ "mistral-medium-3-5-26-04", "mistral-large-3-25-12", "mistral-small-4-0-26-03", "ministral-3-8b-25-12" ],
    stream: true,
    credentialType: "api-key",
    docUrl: "https://docs.mistral.ai/models/overview",
    keyUrl: "https://console.mistral.ai/api-keys/",
    region: "global"
  }) ], getAiProviderPreset = e => Pe.find((t => t.id === e)), He = Pe.map(((e, t) => ({
    id: e.id,
    name: e.name,
    providerKind: e.providerKind,
    baseUrl: e.baseUrl,
    models: e.models.map((t => {
      var a;
      return {
        id: t,
        capabilities: (null == (a = e.modelCapabilities) ? void 0 : a[t]) ?? {
          text: true,
          image: false
        }
      };
    })),
    defaultModelId: e.defaultModel,
    stream: e.stream,
    timeout: e.timeout ?? 3e4,
    disableThinkingParams: e.disableThinkingParams,
    region: e.region,
    order: 10 * t,
    recommended: false,
    signupUrl: e.keyUrl,
    docUrl: e.docUrl,
    keyHelp: e.keyHelp,
    status: "active",
    directConnect: true
  }))), Le = [ "openai-compatible", "anthropic-messages" ], isRecord$2 = e => "object" == typeof e && null !== e, str = e => "string" == typeof e ? e : "", normalizeModel = e => {
    if (!isRecord$2(e) || !str(e.id)) return null;
    const t = isRecord$2(e.capabilities) ? e.capabilities : {};
    return {
      id: str(e.id),
      label: str(e.label) || void 0,
      capabilities: {
        text: "boolean" != typeof t.text || t.text,
        image: "boolean" == typeof t.image && t.image
      }
    };
  }, je = [ "model", "messages", "stream" ], normalizeRequestParams = e => {
    if (!isRecord$2(e) || Array.isArray(e)) return;
    const t = Object.entries(e).filter((([e]) => !je.includes(e)));
    return t.length ? Object.fromEntries(t) : void 0;
  }, normalizeChannel = e => {
    if (!isRecord$2(e)) return null;
    const t = str(e.id), a = str(e.baseUrl), n = Le.includes(e.providerKind) ? e.providerKind : null, r = Array.isArray(e.models) ? e.models.map(normalizeModel).filter((e => null !== e)) : [], s = str(e.defaultModelId);
    if (!(t && a && n && r.length)) return null;
    if (!r.some((e => e.id === s))) return null;
    const i = "deprecated" === e.status || "hidden" === e.status ? e.status : "active";
    return {
      id: t,
      name: str(e.name) || t,
      providerKind: n,
      baseUrl: a,
      models: r,
      defaultModelId: s,
      stream: "boolean" != typeof e.stream || e.stream,
      timeout: "number" == typeof e.timeout && e.timeout > 0 ? e.timeout : 3e4,
      region: "global" === e.region ? "global" : "domestic",
      order: "number" == typeof e.order ? e.order : 0,
      recommended: true === e.recommended,
      promoText: str(e.promoText) || void 0,
      signupUrl: str(e.signupUrl),
      docUrl: str(e.docUrl),
      keyHelp: str(e.keyHelp),
      status: i,
      directConnect: true === e.directConnect,
      disableThinkingParams: normalizeRequestParams(e.disableThinkingParams)
    };
  }, $e = "ai_channel_catalog", ze = "ai_channel_catalog_last_good", readState = e => {
    if (!isRecord$2(e) || !Array.isArray(e.channels)) return null;
    const t = e.channels.map(normalizeChannel).filter((e => null !== e));
    return t.length ? {
      seq: "number" == typeof e.seq ? e.seq : 0,
      fetchedAt: "number" == typeof e.fetchedAt ? e.fetchedAt : 0,
      channels: t
    } : null;
  }, fetchCatalog = async e => {
    const t = readState(e.cacheGet($e));
    if (t && e.now() - t.fetchedAt < 216e5) return t;
    try {
      const t = await e.request(), a = isRecord$2(t) ? readState({
        ...t,
        fetchedAt: e.now()
      }) : null;
      if (a) return e.cacheSet($e, a), e.cacheSet(ze, a), a;
    } catch {}
    return readState(e.cacheGet(ze)) || t || {
      seq: 0,
      fetchedAt: 0,
      channels: He
    };
  }, resolveChannel = (e, t, a) => e.channels.find((e => e.id === a)) || He.find((e => e.id === a)) || t.find((e => e.id === a)), Me = {
    text: true,
    image: false
  }, Oe = [ "openai-compatible", "anthropic-messages" ], Fe = [ "direct", "conservative", "preview" ], isRecord$1 = e => "object" == typeof e && null !== e, normalizeCapabilities = (e, t, a) => {
    const n = ((e, t) => {
      const a = e.toLowerCase(), n = t.toLowerCase();
      return "longcat" === a && n.includes("omni") || n.includes("vision") || n.includes("vl");
    })(t, a);
    return isRecord$1(e) ? {
      text: "boolean" != typeof e.text || e.text,
      image: "boolean" == typeof e.image ? e.image : n
    } : {
      text: true,
      image: n
    };
  }, isRemovedCookieProviderValue = e => "glm-cookie" === e || "spark-cookie" === e || "cookie-glm" === e || "cookie-spark" === e || "legacy-glm" === e || "legacy-spark" === e, isAdoptionStrategy = e => "string" == typeof e && Fe.includes(e), normalizeCredentialValue = e => {
    if ("string" != typeof e) return;
    const t = e.trim();
    return t && !isNonAnswerText(t) ? t : void 0;
  }, normalizeCredential$1 = e => {
    if (!isRecord$1(e)) return;
    const t = normalizeCredentialValue(e.value);
    return t ? {
      type: "api-key",
      value: t,
      updatedAt: "number" == typeof e.updatedAt ? e.updatedAt : void 0
    } : void 0;
  }, normalizeAiConfig = e => {
    if (!isRecord$1(e) || "string" != typeof e.id || !e.id) return null;
    if (isRemovedCookieProviderValue(e.id) || isRemovedCookieProviderValue(e.providerId) || isRemovedCookieProviderValue(e.providerKind)) return null;
    const t = "string" == typeof e.providerId ? getAiProviderPreset(e.providerId) : getAiProviderPreset(e.id), a = (e => "string" == typeof e && Oe.includes(e))(e.providerKind) ? e.providerKind : (null == t ? void 0 : t.providerKind) || "openai-compatible", n = (null == t ? void 0 : t.id) || "string" == typeof e.providerId && e.providerId || e.id, r = "string" == typeof e.model && e.model ? e.model : (null == t ? void 0 : t.defaultModel) || "", s = "number" == typeof e.timeout && Number.isFinite(e.timeout) && e.timeout > 0 ? e.timeout : 3e4;
    return {
      id: e.id,
      name: "string" == typeof e.name && e.name ? e.name : (null == t ? void 0 : t.name) || e.id,
      providerId: n,
      providerKind: a,
      baseUrl: "string" == typeof e.baseUrl && e.baseUrl ? e.baseUrl : (null == t ? void 0 : t.baseUrl) || "",
      model: r,
      enabled: "boolean" != typeof e.enabled || e.enabled,
      stream: "boolean" == typeof e.stream ? e.stream : (null == t ? void 0 : t.stream) ?? true,
      capabilities: normalizeCapabilities(e.capabilities, n, r),
      credential: normalizeCredential$1(e.credential),
      timeout: s,
      temperature: "number" == typeof e.temperature ? e.temperature : void 0,
      maxTokens: "number" == typeof e.maxTokens ? e.maxTokens : void 0
    };
  }, normalizeLegacyBaseUrl = e => e.trim().split(/[?#]/)[0].replace(/\/+$/, "").replace(/\/chat\/completions$/, "").replace(/\/+$/, ""), migrateLegacyAiSettings = e => {
    var t, a;
    const n = {
      configs: [],
      defaultConfigId: "",
      defaultVisionConfigId: "",
      enabledForAsk: false,
      adoptionStrategy: "conservative",
      sceneOverrides: {
        enabled: false
      }
    };
    if (!(null == (t = e.gpt) ? void 0 : t.length)) return n;
    const r = {}, s = e.gpt.map(((e, t) => ({
      item: e,
      index: t
    }))).filter((({item: e}) => !(e => /glm|spark|\u661f\u706b/i.test(e.name))(e)));
    if (!s.length) return {
      ...n,
      enabledForAsk: false
    };
    const i = s.map((({item: e, index: t}) => {
      var a;
      const n = "deepseek", s = ((e, t) => {
        const a = t[e] || 0;
        return t[e] = a + 1, 0 === a ? e : `${e}-${a}`;
      })(((e, t) => `legacy-ai-${t}`)(0, t), r), i = normalizeCredentialValue(e.key);
      return ((e, t = {}) => {
        var a;
        const n = getAiProviderPreset(e);
        if (!n) throw new Error(`\u672a\u77e5 AI \u5e73\u53f0\u9884\u8bbe: ${e}`);
        return {
          id: t.id || n.id,
          name: t.name || n.name,
          providerId: n.id,
          providerKind: n.providerKind,
          baseUrl: t.baseUrl || n.baseUrl,
          model: t.model || n.defaultModel,
          enabled: t.enabled ?? true,
          stream: t.stream ?? n.stream,
          capabilities: (r = t.capabilities || (null == (a = n.modelCapabilities) ? void 0 : a[t.model || n.defaultModel]) || Me, 
          {
            text: r.text,
            image: r.image
          }),
          credential: t.credential,
          timeout: t.timeout || 3e4,
          temperature: t.temperature,
          maxTokens: t.maxTokens
        };
        var r;
      })(n, {
        id: s,
        name: e.desc || e.name,
        baseUrl: normalizeLegacyBaseUrl(e.api) || (null == (a = getAiProviderPreset(n)) ? void 0 : a.baseUrl),
        model: e.model,
        enabled: true,
        credential: i ? {
          type: "api-key",
          value: i
        } : void 0
      });
    })), o = i[Math.min(Math.max(e.gptIndex || 0, 0), i.length - 1)];
    return {
      configs: i,
      defaultConfigId: (null == o ? void 0 : o.id) || n.defaultConfigId,
      defaultVisionConfigId: "",
      enabledForAsk: !!e.askGpt && !!(null == (a = null == o ? void 0 : o.credential) ? void 0 : a.value),
      adoptionStrategy: "conservative",
      sceneOverrides: {
        enabled: false
      }
    };
  }, matchChannel = (e, t) => {
    const a = normalizeLegacyBaseUrl(e.baseUrl || "");
    return a ? t.find((e => normalizeLegacyBaseUrl(e.baseUrl) === a)) : t.find((t => t.id === e.providerId || t.id === e.id));
  }, toCustomChannel = (e, t = "") => ({
    id: `custom-${e.id}`,
    name: e.name,
    baseUrl: e.baseUrl || t,
    providerKind: e.providerKind,
    model: e.model
  }), De = "ai_settings", Ne = "ai_settings_backup_v1", isRecord = e => "object" == typeof e && null !== e, normalizeCredential = e => {
    if (!isRecord(e)) return;
    const t = "string" == typeof e.value ? e.value.trim() : "";
    return t ? {
      type: "api-key",
      value: t,
      updatedAt: "number" == typeof e.updatedAt ? e.updatedAt : void 0
    } : void 0;
  }, normalizeInstance = e => isRecord(e) && "string" == typeof e.channelId && e.channelId ? {
    channelId: e.channelId,
    credential: normalizeCredential(e.credential),
    enabled: false !== e.enabled,
    modelId: "string" == typeof e.modelId && e.modelId ? e.modelId : void 0
  } : null, normalizeCustomChannel = e => isRecord(e) && "string" == typeof e.id && e.id && "string" == typeof e.baseUrl && e.baseUrl ? {
    id: e.id,
    name: "string" == typeof e.name ? e.name : e.id,
    baseUrl: e.baseUrl,
    providerKind: "anthropic-messages" === e.providerKind ? "anthropic-messages" : "openai-compatible",
    model: "string" == typeof e.model ? e.model : ""
  } : null, normalizeAiSettingsV2 = e => {
    if (!isRecord(e) || 2 !== e.version) return null;
    const t = Array.isArray(e.instances) ? e.instances.map(normalizeInstance).filter((e => null !== e)) : [], a = Array.isArray(e.customChannels) ? e.customChannels.map(normalizeCustomChannel).filter((e => null !== e)) : [], n = isRecord(e.sceneOverrides) ? e.sceneOverrides : {};
    return {
      version: 2,
      instances: t,
      customChannels: a,
      defaultChannelId: "string" == typeof e.defaultChannelId ? e.defaultChannelId : "",
      defaultVisionChannelId: "string" == typeof e.defaultVisionChannelId ? e.defaultVisionChannelId : "",
      enabledForAsk: true === e.enabledForAsk,
      adoptionStrategy: "direct" === e.adoptionStrategy || "preview" === e.adoptionStrategy ? e.adoptionStrategy : "conservative",
      sceneOverrides: {
        enabled: true === n.enabled,
        search: "string" == typeof n.search ? n.search : void 0,
        ask: "string" == typeof n.ask ? n.ask : void 0,
        repair: "string" == typeof n.repair ? n.repair : void 0
      },
      transport: "direct" === e.transport ? "direct" : "auto"
    };
  }, loadAiSettingsFrom = (e, t, a) => {
    const n = e.get(De), r = normalizeAiSettingsV2(n);
    if (r) return r;
    n && !e.get(Ne) && e.set(Ne, n);
    const s = (e => {
      var t, a;
      if (!isRecord$1(e) || !Array.isArray(e.configs)) return null;
      const n = e.configs.map(normalizeAiConfig).filter((e => null !== e)), r = "string" == typeof e.defaultConfigId && n.some((t => t.id === e.defaultConfigId)) ? e.defaultConfigId : (null == (t = n.find((e => e.enabled))) ? void 0 : t.id) || (null == (a = n[0]) ? void 0 : a.id) || "", s = "string" == typeof e.defaultVisionConfigId && n.some((t => {
        var a;
        return t.id === e.defaultVisionConfigId && (null == (a = t.capabilities) ? void 0 : a.image);
      })) ? e.defaultVisionConfigId : "", i = isRecord$1(e.sceneOverrides) ? e.sceneOverrides : {};
      return {
        configs: n,
        defaultConfigId: r,
        defaultVisionConfigId: s,
        enabledForAsk: n.length > 0 && "boolean" == typeof e.enabledForAsk && e.enabledForAsk,
        adoptionStrategy: isAdoptionStrategy(e.adoptionStrategy) ? e.adoptionStrategy : "conservative",
        sceneOverrides: {
          enabled: "boolean" == typeof i.enabled && i.enabled,
          search: "string" == typeof i.search ? i.search : void 0,
          ask: "string" == typeof i.ask ? i.ask : void 0,
          repair: "string" == typeof i.repair ? i.repair : void 0
        }
      };
    })(n) ?? (() => {
      try {
        return migrateLegacyAiSettings(a());
      } catch {
        return null;
      }
    })(), i = s ? ((e, t) => {
      var a, n, r, s, i, o, l;
      if ("object" == typeof (l = e) && null !== l && 2 === l.version) return e;
      const c = [], p = [], u = new Map, adoptCustom = (e, t) => {
        c.push({
          channelId: e.id,
          credential: t.credential,
          enabled: t.enabled
        });
      };
      for (const d of e.configs) {
        const e = matchChannel(d, t);
        if (!e) {
          if (null == (a = d.credential) ? void 0 : a.value) {
            const e = toCustomChannel(d);
            p.push(e), adoptCustom(e, d), u.set(d.id, e.id);
          }
          continue;
        }
        const o = e.models.some((e => e.id === d.model)) ? d.model : void 0, l = c.find((t => t.channelId === e.id));
        if (l) if ((null == (n = l.credential) ? void 0 : n.value) || !(null == (r = d.credential) ? void 0 : r.value)) {
          if ((null == (s = l.credential) ? void 0 : s.value) && (null == (i = d.credential) ? void 0 : i.value) && l.credential.value !== d.credential.value) {
            const t = toCustomChannel(d, e.baseUrl);
            p.push(t), adoptCustom(t, d), u.set(d.id, t.id);
          }
        } else u.set(d.id, e.id), l.credential = d.credential, l.enabled = d.enabled, l.modelId = o; else u.set(d.id, e.id), 
        c.push({
          channelId: e.id,
          credential: d.credential,
          enabled: d.enabled,
          modelId: o
        });
      }
      return {
        version: 2,
        instances: c,
        customChannels: p,
        defaultChannelId: u.get(e.defaultConfigId) || (null == (o = c[0]) ? void 0 : o.channelId) || "",
        defaultVisionChannelId: u.get(e.defaultVisionConfigId) || "",
        enabledForAsk: e.enabledForAsk,
        adoptionStrategy: e.adoptionStrategy,
        sceneOverrides: e.sceneOverrides,
        transport: "auto"
      };
    })(s, t) : {
      version: 2,
      instances: [],
      customChannels: [],
      defaultChannelId: "",
      defaultVisionChannelId: "",
      enabledForAsk: false,
      adoptionStrategy: "conservative",
      sceneOverrides: {
        enabled: false
      },
      transport: "auto"
    };
    return e.set(De, i), i;
  }, asChannel = e => (e => !("models" in e))(e) ? {
    id: e.id,
    name: e.name,
    providerKind: e.providerKind,
    baseUrl: e.baseUrl,
    models: [ {
      id: e.model,
      capabilities: {
        text: true,
        image: false
      }
    } ],
    defaultModelId: e.model,
    stream: true,
    timeout: 3e4,
    region: "domestic",
    order: 0,
    recommended: false,
    signupUrl: "",
    docUrl: "",
    keyHelp: "",
    status: "active",
    directConnect: true
  } : e, resolveModel = (e, t) => e.models.find((e => e.id === t.modelId)) ?? e.models.find((t => t.id === e.defaultModelId)) ?? e.models[0], synthesizeAiConfig = (e, t) => {
    const a = resolveModel(e, t);
    return {
      id: e.id,
      name: e.name,
      providerId: e.id,
      providerKind: e.providerKind,
      baseUrl: e.baseUrl,
      model: (null == a ? void 0 : a.id) ?? e.defaultModelId,
      enabled: t.enabled,
      stream: e.stream,
      capabilities: (null == a ? void 0 : a.capabilities) ?? {
        text: true,
        image: false
      },
      credential: t.credential,
      timeout: e.timeout,
      disableThinkingParams: e.disableThinkingParams
    };
  }, resolveAiTarget = (e, t, a, n = "text") => {
    var r;
    const build = a => {
      var r;
      if (!a.enabled || !(null == (r = a.credential) ? void 0 : r.value)) return;
      const s = resolveChannel(t, e.customChannels, a.channelId);
      if (!s) return;
      const i = asChannel(s);
      return ((e, t) => e.models.some((e => e.capabilities[t])))(i, n) ? {
        channel: i,
        instance: a,
        config: synthesizeAiConfig(i, a)
      } : void 0;
    }, pick = t => {
      const a = e.instances.find((e => e.channelId === t));
      return a ? build(a) : void 0;
    }, s = (null == (r = e.sceneOverrides) ? void 0 : r.enabled) ? e.sceneOverrides[a] : void 0;
    if ("image" === n) {
      const t = e.defaultVisionChannelId && pick(e.defaultVisionChannelId);
      if (t) return t;
    }
    const i = s && pick(s);
    if (i) return i;
    const o = pick(e.defaultChannelId);
    if (o) return o;
    for (const l of e.instances) {
      const e = build(l);
      if (e) return e;
    }
  }, channelTags = e => {
    const t = [];
    return e.recommended && t.push({
      label: "\u63a8\u8350",
      cls: "aah-tag-primary"
    }), e.promoText && t.push({
      label: "\u6709\u514d\u8d39\u989d\u5ea6",
      cls: "aah-tag-success"
    }), "global" === e.region ? t.push({
      label: "\u9700\u81ea\u5907\u4ee3\u7406",
      cls: "aah-tag-warning"
    }) : canDirectConnect(e) ? t.push({
      label: "\u56fd\u5185\u76f4\u8fde",
      cls: ""
    }) : t.push({
      label: "\u9700\u767b\u5f55\u4e2d\u8f6c",
      cls: "aah-tag-warning"
    }), hasVisionModel(e) && t.push({
      label: "\u53ef\u9009\u89c6\u89c9\u6a21\u578b",
      cls: ""
    }), t;
  }, hasVisionModel = e => e.models.some((e => e.capabilities.image)), imageReadiness = (e, t) => {
    const a = resolveModel(e, t), n = (null == a ? void 0 : a.id) ?? e.defaultModelId;
    if (null == a ? void 0 : a.capabilities.image) return {
      state: "ready",
      modelId: n
    };
    const r = e.models.find((e => e.capabilities.image));
    return r ? {
      state: "switchable",
      modelId: n,
      suggestModelId: r.id
    } : {
      state: "unsupported",
      modelId: n
    };
  }, Re = /<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi, Be = /(?:spacer|blank|transparent)\.(?:gif|png|webp)(?:[?#].*)?$/i, Ge = [ "data-src", "data-original", "data-lazy-src", "data-echo" ], resolveImageSrc = (e, t) => {
    if (!e) return "";
    const a = e.trim().replace(/&amp;/g, "&");
    if (/^(?:data:|blob:)/i.test(a)) return a;
    const n = (e => {
      var t;
      return e || (null == (t = globalThis.location) ? void 0 : t.href) || "";
    })(t);
    if (!n) return a;
    try {
      return new URL(a, n).href;
    } catch {
      return a;
    }
  }, shouldUseImageSrc = e => !!e && (!Be.test(e) && (!!/^(?:https?:|blob:)/i.test(e) || (/^data:/i.test(e) ? /^data:image\//i.test(e) : !/^[a-z][a-z0-9+.-]*:/i.test(e)))), getAttr = (e, t) => {
    const a = "function" == typeof (null == e ? void 0 : e.getAttribute) ? e.getAttribute(t) : null;
    return "string" == typeof a ? a : "";
  }, pickElementSrc = e => {
    const t = (null == e ? void 0 : e.currentSrc) || (null == e ? void 0 : e.src) || getAttr(e, "src");
    if (Number(null == e ? void 0 : e.naturalWidth) > 0) return t;
    for (const r of Ge) {
      const t = getAttr(e, r);
      if (t) return t;
    }
    return (a = getAttr(e, "srcset")) && (null == (n = a.split(",").map((e => e.trim())).filter(Boolean).map((e => {
      const [t, a = ""] = e.split(/\s+/);
      return {
        url: t,
        weight: Number(a.replace(/[wx]$/i, "")) || 0
      };
    })).sort(((e, t) => t.weight - e.weight))[0]) ? void 0 : n.url) || "" || t;
    var a, n;
  }, extractRefsFromString = (e, t) => {
    const a = [];
    for (const n of e.matchAll(Re)) {
      const e = resolveImageSrc(n[1], t);
      shouldUseImageSrc(e) && a.push({
        src: e
      });
    }
    return a;
  }, collectRefs = (e, t) => {
    return e ? "string" == typeof e ? extractRefsFromString(e, t) : (a = e) && "object" == typeof a && "function" == typeof a.querySelectorAll ? Array.from(e.querySelectorAll("img") || []).filter((e => !(e => {
      const t = Number(null == e ? void 0 : e.naturalWidth), a = Number(null == e ? void 0 : e.naturalHeight);
      return t > 0 && a > 0 && t < 32 && a < 32;
    })(e))).map((e => ({
      src: resolveImageSrc(pickElementSrc(e), t),
      el: e
    }))).filter((e => shouldUseImageSrc(e.src))) : "string" == typeof e.outerHTML ? extractRefsFromString(e.outerHTML, t) : "string" == typeof e.innerHTML ? extractRefsFromString(e.innerHTML, t) : [] : [];
    var a;
  }, uniqueRefs = e => {
    const t = new Map;
    for (const a of e) {
      const e = t.get(a.src);
      (!e || !e.el && a.el) && t.set(a.src, a);
    }
    return Array.from(t.values());
  }, extractQuestionImageRefs = (e, t = {}) => uniqueRefs([ ...collectRefs(e.question, t.baseUrl), ...collectRefs(e.html, t.baseUrl), ...Array.isArray(e.options) ? e.options.flatMap((e => collectRefs(e, t.baseUrl))) : [] ]), hasQuestionImages = (e, t = "") => {
    return (e => extractQuestionImageRefs(e).map((e => e.src)))(e).length > 0 || (a = t, 
    uniqueRefs(collectRefs(a)).map((e => e.src))).length > 0;
    var a;
  }, toBytes = e => e instanceof ArrayBuffer ? new Uint8Array(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : void 0, bytesToBase64 = e => {
    const t = toBytes(e);
    if (!t) throw createAiError("AI_RESPONSE_PARSE_FAILED");
    if ("undefined" != typeof Buffer) return Buffer.from(t).toString("base64");
    let a = "";
    for (let n = 0; n < t.length; n += 8192) a += String.fromCharCode(...t.subarray(n, n + 8192));
    return btoa(a);
  }, buildImagePart = (e, t, a, n = {}) => {
    const r = toBytes(t);
    if (!r || 0 === r.byteLength) throw new Error("\u56fe\u7247\u54cd\u5e94\u4f53\u4e3a\u7a7a");
    const s = n.maxBytes || 4194304;
    if (r.byteLength > s) throw new Error(`\u56fe\u7247\u8fc7\u5927\uff08${Math.round(r.byteLength / 1024)}KB\uff0c\u4e0a\u9650 ${Math.round(s / 1024)}KB\uff09`);
    const i = (a || "").split(";")[0].trim().toLowerCase();
    if (i && !i.startsWith("image/")) throw new Error(`\u54cd\u5e94\u4e0d\u662f\u56fe\u7247\uff08${i}\uff09\uff0c\u53ef\u80fd\u662f\u767b\u5f55\u6001\u5931\u6548\u8df3\u8f6c\u4e86\u767b\u5f55\u9875`);
    return {
      type: "image",
      source: "base64",
      data: bytesToBase64(r),
      mimeType: i || "image/png",
      url: e
    };
  }, decodeDataUrl = e => {
    const t = e.match(/^data:([^;,]+);base64,(.+)$/i);
    if (!t) throw createAiError("AI_RESPONSE_PARSE_FAILED");
    return {
      type: "image",
      source: "base64",
      data: t[2],
      mimeType: t[1],
      url: e
    };
  }, defaultCreateCanvas = () => {
    if ("undefined" == typeof document) throw new Error("\u5f53\u524d\u73af\u5883\u6ca1\u6709 document\uff0c\u65e0\u6cd5\u4f7f\u7528\u753b\u5e03");
    return document.createElement("canvas");
  }, loadImagePartFromElement = async (e, t = {}) => {
    const a = e.el, n = Number(null == a ? void 0 : a.naturalWidth) || 0, r = Number(null == a ? void 0 : a.naturalHeight) || 0;
    if (!(n > 0 && r > 0)) throw new Error("\u56fe\u7247\u5c1a\u672a\u52a0\u8f7d\u5b8c\u6210");
    const s = ((e, t, a = 1568) => {
      const n = Math.max(e, t);
      if (!(n > a)) return {
        width: e,
        height: t
      };
      const r = a / n;
      return {
        width: Math.max(1, Math.round(e * r)),
        height: Math.max(1, Math.round(t * r))
      };
    })(n, r, t.maxEdge || 1568), i = (t.createCanvas || defaultCreateCanvas)();
    i.width = s.width, i.height = s.height;
    const o = i.getContext("2d");
    if (!o) throw new Error("\u753b\u5e03\u4e0a\u4e0b\u6587\u4e0d\u53ef\u7528");
    o.fillStyle = "#ffffff", o.fillRect(0, 0, s.width, s.height), o.drawImage(a, 0, 0, s.width, s.height);
    const l = i.toDataURL(t.mimeType || "image/jpeg", t.quality ?? .85);
    if (!/^data:image\//i.test(l)) throw new Error("\u753b\u5e03\u5bfc\u51fa\u5931\u8d25");
    return {
      ...decodeDataUrl(l),
      url: e.src
    };
  }, loadImagePartFromFetch = async (e, t = {}) => {
    const a = t.fetchImpl || ("function" == typeof fetch ? fetch : void 0);
    if (!a) throw new Error("\u5f53\u524d\u73af\u5883\u4e0d\u652f\u6301 fetch");
    return (async (e, t) => {
      const a = "function" == typeof AbortController ? new AbortController : void 0;
      let n;
      const r = new Promise(((e, r) => {
        n = setTimeout((() => {
          null == a || a.abort(), r(new Error(`\u53d6\u56fe\u8d85\u65f6\uff08${t}ms\uff09`));
        }), t);
      }));
      try {
        return await Promise.race([ e(null == a ? void 0 : a.signal), r ]);
      } finally {
        clearTimeout(n);
      }
    })((async n => {
      var r, s;
      const i = await a(e, {
        credentials: "same-origin",
        signal: n
      });
      if (!(null == i ? void 0 : i.ok)) throw new Error(`\u56fe\u7247\u8bf7\u6c42\u5931\u8d25 HTTP ${(null == i ? void 0 : i.status) ?? "\u672a\u77e5"}`);
      const o = await i.arrayBuffer();
      return buildImagePart(e, o, (null == (s = null == (r = i.headers) ? void 0 : r.get) ? void 0 : s.call(r, "content-type")) || "", {
        maxBytes: t.maxBytes
      });
    }), t.timeout || 2e4);
  }, loadQuestionImagePart = async (e, t = {}) => {
    if (/^data:/i.test(e.src)) return decodeDataUrl(e.src);
    const a = t.fromElement || (e => loadImagePartFromElement(e, t)), n = t.fromFetch || (e => loadImagePartFromFetch(e, t)), r = t.fromGm || (e => (async (e, t = {}) => {
      const a = t.transport || createAiTransportRequest, n = await a({
        method: "GET",
        url: e,
        responseType: "arraybuffer",
        timeout: t.timeout || 2e4
      }).promise;
      return buildImagePart(e, n.response, (e => {
        var t;
        const a = null == e ? void 0 : e.match(/content-type:\s*([^;\r\n]+)/i);
        return null == (t = null == a ? void 0 : a[1]) ? void 0 : t.trim();
      })(n.responseHeaders), {
        maxBytes: t.maxBytes
      });
    })(e, t)), s = [];
    e.el && s.push([ "canvas", () => a(e) ]), s.push([ "\u540c\u6e90\u8bf7\u6c42", () => n(e.src) ]), 
    s.push([ "GM \u8bf7\u6c42", () => r(e.src) ]);
    const i = [];
    for (const [l, c] of s) try {
      return await c();
    } catch (o) {
      i.push(`${l}\uff1a${(null == o ? void 0 : o.message) || o}`);
    }
    throw new Error(i.length ? i.join("\uff1b") : "\u6ca1\u6709\u53ef\u7528\u7684\u53d6\u56fe\u901a\u9053");
  }, base64Bytes = e => {
    const t = e.endsWith("==") ? 2 : e.endsWith("=") ? 1 : 0;
    return Math.max(0, 3 * Math.floor(e.length / 4) - t);
  }, resolveQuestionImages = async (e, t = {}) => {
    const a = extractQuestionImageRefs(e, t);
    if (!a.length) return {
      parts: [],
      failures: []
    };
    const n = t.maxImages || 6, r = a.slice(0, n), s = a.slice(n).map((e => ({
      src: e.src,
      reason: `\u8d85\u51fa\u5355\u9898\u56fe\u7247\u4e0a\u9650\uff08${n} \u5f20\uff09`
    }))), i = t.loadPart || (e => loadQuestionImagePart(e, t)), o = await (async (e, t, a) => {
      const n = new Array(e.length);
      let r = 0;
      const s = Array.from({
        length: Math.max(1, Math.min(t, e.length))
      }, (async () => {
        for (;r < e.length; ) {
          const t = r;
          r += 1, n[t] = await a(e[t]);
        }
      }));
      return await Promise.all(s), n;
    })(r, t.concurrency || 2, (async e => {
      try {
        return {
          ref: e,
          part: await i(e)
        };
      } catch (t) {
        return {
          ref: e,
          reason: (null == t ? void 0 : t.message) || "\u53d6\u56fe\u5931\u8d25"
        };
      }
    })), l = [], c = t.maxTotalBytes || 12582912;
    let p = 0;
    for (const u of o) {
      if (!u.part) {
        s.push({
          src: u.ref.src,
          reason: u.reason || "\u53d6\u56fe\u5931\u8d25"
        });
        continue;
      }
      const e = base64Bytes(u.part.data);
      p + e > c ? s.push({
        src: u.ref.src,
        reason: `\u8d85\u51fa\u5355\u9898\u56fe\u7247\u603b\u91cf\u4e0a\u9650\uff08${Math.round(c / 1024)}KB\uff09`
      }) : (p += e, l.push(u.part));
    }
    return {
      parts: l,
      failures: s
    };
  };

  function getAppStore() {
    return W[ne + "app"];
  }

  function getAskStore() {
    return W[ne + "ask"];
  }

  function isParentChecked(e) {
    return e.parent().parent().hasClass("is-checked");
  }

  function qc(e) {
    D(e).find(".answerBg, .textDIV, .eidtDiv").each((function() {
      (D(this).find(".check_answer").length || D(this).find(".check_answer_dx").length) && D(this).click();
    })), D(e).find(".answerBg, .textDIV, .eidtDiv").find("textarea").each((function() {
      W.UE.getEditor(D(this).attr("name")).ready((function() {
        this.setContent("");
      }));
    })), D(e).find(":radio, :checkbox").prop("checked", false), D(e).find("textarea").each((function() {
      W.UE.getEditor(D(this).attr("name")).ready((function() {
        this.setContent("");
      }));
    }));
  }

  function qc1(e) {
    D(e).find(".before-after,.before-after-checkbox, .textDIV, .eidtDiv").each((function() {
      (D(this).find(".check_answer").length || D(this).find(".check_answer_dx").length) && D(this).click();
    })), D(e).find(".before-after, .textDIV, .eidtDiv").find("textarea").each((function() {
      W.UE.getEditor(D(this).attr("name")).ready((function() {
        this.setContent("");
      }));
    })), D(e).find(":radio, :checkbox").prop("checked", false), D(e).find("textarea").each((function() {
      W.UE.getEditor(D(this).attr("name")).ready((function() {
        this.setContent("");
      }));
    }));
  }

  J = getAppStore;

  const Ve = [ {
    type: "hook",
    name: "\u4e91\u5e55\u5b66\u82d1hook",
    match: location.host.includes("w-ling.cn"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.path), {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 !== D(".selectDan").length;
          }));
        }
      });
    }
  }, {
    type: "save",
    name: "\u4e91\u5e55\u5b66\u82d1\u6536\u5f55",
    match: () => location.host.includes("w-ling.cn") && location.href.includes("practiceRecord"),
    question: {
      html: ".selectDan >div >div",
      question: ".title",
      options: ".selectItem label .tagbq",
      type: ".question-box .tag",
      workType: "yunmuxueyuan",
      pageType: "yunmuxueyuan"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".selectDan >div >div");
      }));
    },
    answerHook: e => {
      const t = D(e.html).parent().find("h3").text().split("\u3001")[1];
      e.question = e.question.replace(/^\d+\u3001/, ""), e.question = e.question.replace(/\(\d+\u5206\)$/, "");
      let a = D(e.html).find(".anaylize > span:eq(0)").text().replace("\u4f5c\u7b54\u6b63\u786e\uff1a", "");
      switch ("" === a && (a = D(e.html).find(".falsanaly > span:eq(1)").text().replace("\u6b63\u786e\u7b54\u6848\uff1a", "")), 
      t) {
       case "\u5355\u9009\u9898":
       case "\u591a\u9009\u9898":
        let t = a.split("");
        if (e.answer = t.map((t => e.options[t.charCodeAt(0) - 65])), 0 === e.answer.length) return;
        e.answer.length > 1 ? e.type = "1" : e.type = "0";
        break;

       case "\u5224\u65ad\u9898":
        e.type = "3", "T" == a && (e.answer = [ "\u6b63\u786e" ]), "F" == a && (e.answer = [ "\u9519\u8bef" ]);
        break;

       case "\u586b\u7a7a\u9898":
        e.answer = D(e.html).find(".riganswer > span").first().nextAll("span").map(((e, t) => removeHtml(D(t).text()))).get(), 
        e.type = "2";
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u4e91\u5e55\u5b66\u82d1",
    tips: "",
    match: () => location.host.includes("w-ling.cn") && (location.href.includes("practicePaper") || location.href.includes("examIndex")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".selectDan >div >div",
      question: ".title",
      options: ".selectItem label .tagbq",
      type: ".question-box .tag",
      workType: "yunmuxueyuan",
      pageType: "yunmuxueyuan"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".selectDan >div >div").length;
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      e.question = e.question.replace(/^\d+\u3001/, ""), e.question = e.question.replace(/\(\d+\u5206\)$/, "");
      switch (D(e.html).parent().find("h4").text().split("\u3001")[1]) {
       case "\u5355\u9009\u9898":
        e.type = "0";
        break;

       case "\u591a\u9009\u9898":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
        e.type = "3", e.$options = D(e.html).find(".selectItem label"), e.options = e.$options.map(((e, t) => removeHtml(D(t).text()))).get(), 
        e.$options;
        break;

       case "\u586b\u7a7a\u9898":
        e.type = "2";
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "3":
        break;

       case "2":
        return D(e.html).find(".tiankong input").each(((t, a) => {
          let n = D(a).parent()[0].__vue__;
          D(a).val(e.answer[t]);
          const r = new Event("input");
          a.dispatchEvent(r), n.$emit("change", e.answer[t]);
        })), false;
      }
      return true;
    }
  } ], Ke = "\u7b54\u9898\u5df2\u53d6\u6d88", assertFillShouldContinue = e => {
    if ((null == e ? void 0 : e.shouldContinue) && !e.shouldContinue()) throw new Error(Ke);
  }, fillPlanToLegacyAnswerData = e => "choice" === e.kind ? [ "xx", e.indexes ] : "judge" === e.kind ? [ "pd", e.value ] : "blank" === e.kind ? [ "jd", e.values ] : "link" === e.kind ? [ "lx", e.value ] : "reading" === e.kind ? [ "ydlj", e.subPlans.map((e => "choice" === e.kind ? e.indexes : "judge" === e.kind ? [ e.value ] : "blank" === e.kind ? e.values : [])) ] : [ "", [] ], rawFormForLegacyMatch = e => {
    if (!e || "object" != typeof e) return {};
    const t = {
      ...e
    };
    var a;
    return !("match" in t) || (a = t.match, Array.isArray(a) && a.every((e => "number" == typeof e || Array.isArray(e)))) || delete t.match, 
    t;
  }, createLegacyMatchResult = e => {
    if (!e.haveAnswer || !e.source || !e.fillPlan) return {
      res: e.displayAnswers.map((e => e.raw || e)),
      haveAnswer: false
    };
    const [, t] = fillPlanToLegacyAnswerData(e.fillPlan);
    return {
      res: e.displayAnswers.map((e => e.raw || e)),
      form: {
        ...rawFormForLegacyMatch(e.source.raw),
        form: e.source.source,
        answer: e.source.answer,
        ...void 0 !== e.source.duration ? {
          duration: e.source.duration
        } : {},
        ...void 0 !== e.source.msg ? {
          msg: e.source.msg
        } : {},
        ...void 0 !== e.source.needLogin ? {
          needLogin: e.source.needLogin
        } : {},
        ...(a = e.fillPlan, "choice" === a.kind || "reading" === a.kind ? {
          match: t
        } : {})
      },
      haveAnswer: true
    };
    var a;
  }, applyFillPlan = async (e, t, a, n, r) => {
    const [s, i] = fillPlanToLegacyAnswerData(e);
    if (!s) return {
      success: false,
      reason: "unsupported" === e.kind ? e.reason : "\u5f53\u524d\u9898\u578b\u6682\u4e0d\u652f\u6301\u586b\u5145"
    };
    const o = (null == r ? void 0 : r.shouldContinue) ? {
      shouldContinue: () => (assertFillShouldContinue(r), true)
    } : void 0;
    try {
      return assertFillShouldContinue(r), await n(s, i, t, a, o), assertFillShouldContinue(r), 
      {
        success: !0
      };
    } catch (l) {
      if ((e => e instanceof Error && e.message === Ke)(l)) return {
        success: false,
        reason: Ke
      };
      throw l;
    }
  }, isLoggedInUserCache = e => Boolean(e && e.user && e.api_key), isPlainObject = e => "object" == typeof e && null !== e && !Array.isArray(e), cloneValue = e => {
    if (Array.isArray(e)) return e.map((e => cloneValue(e)));
    if (!isPlainObject(e)) return e;
    const t = {};
    return Object.entries(e).forEach((([e, a]) => {
      t[e] = cloneValue(a);
    })), t;
  }, cloneWithLegacySignatureArraySort = (e, t = true, a = true) => {
    if (Array.isArray(e)) return t && e.every((e => "object" != typeof e)) ? [ ...e ].sort() : e.map((e => cloneValue(e)));
    if (!isPlainObject(e)) return e;
    const n = {};
    return Object.entries(e).forEach((([e, r]) => {
      n[e] = cloneWithLegacySignatureArraySort(r, t && !(a && "html" === e), false);
    })), n;
  };

  class AnonymousIdentityOptimized {
    static generateShortId() {
      return Date.now().toString(36).padStart(8, "0").slice(-8) + Array.from({
        length: 8
      }, (() => "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(62 * Math.random())])).join("");
    }
    static validateId(e) {
      return /^[0-9A-Za-z]{16}$/.test(e);
    }
    static getAnonymousId() {
      if (this.cachedAnonymousId) return this.cachedAnonymousId;
      let e = R(this.STORAGE_KEY);
      return e && this.validateId(e) || (e = this.generateShortId(), V(this.STORAGE_KEY, e)), 
      this.cachedAnonymousId = e, e;
    }
    static getStableCanvasFingerprint() {
      try {
        const e = document.createElement("canvas");
        e.width = 220, e.height = 30;
        const t = e.getContext("2d", {
          willReadFrequently: !0
        });
        if (!t) return "";
        t.textBaseline = "alphabetic", t.fillStyle = "#000", t.font = "16px Arial", t.fillText("AiAsk,\ud83c\udf10.\ud83d\ude00", 2, 20);
        const a = t.getImageData(0, 0, 220, 30).data;
        let n = 0;
        for (let r = 0; r < a.length; r += 40) n = (n << 5) - n + a[r], n |= 0;
        return n.toString(36);
      } catch (e) {
        return "";
      }
    }
    static getWebGLFingerprint() {
      try {
        const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
        if (!t) return "";
        const a = t.getExtension("WEBGL_debug_renderer_info");
        if (!a) return t.getParameter(t.VERSION) + "|" + t.getParameter(t.VENDOR);
        const n = t.getParameter(a.UNMASKED_VENDOR_WEBGL);
        return n + "|" + t.getParameter(a.UNMASKED_RENDERER_WEBGL);
      } catch (e) {
        return "";
      }
    }
    static getDeviceFingerprint() {
      if (this.cachedFingerprint) return this.cachedFingerprint;
      const e = R(this.FINGERPRINT_KEY);
      if (e && e.version === this.FP_VERSION && e.value) return this.cachedFingerprint = e.value, 
      e.value, e.value;
      const t = [ this.normalizeUserAgent(navigator.userAgent), navigator.language, navigator.platform, screen.colorDepth, screen.pixelDepth || screen.colorDepth, (new Date).getTimezoneOffset(), navigator.hardwareConcurrency || 0, navigator.maxTouchPoints || 0, navigator.deviceMemory || 0, this.getWebGLFingerprint(), this.getStableCanvasFingerprint() ], a = md5(t.filter(Boolean).join("|")).substring(0, 12);
      return V(this.FINGERPRINT_KEY, {
        value: a,
        version: this.FP_VERSION,
        createdAt: Date.now()
      }), this.cachedFingerprint = a, a;
    }
    static normalizeUserAgent(e) {
      return e.includes("Chrome") ? "Chrome" : e.includes("Firefox") ? "Firefox" : e.includes("Safari") ? "Safari" : e.includes("Edge") ? "Edge" : e.includes("Opera") ? "Opera" : "Unknown";
    }
    static getIdentity() {
      return {
        anonymous_id: this.getAnonymousId(),
        device_fingerprint: this.getDeviceFingerprint()
      };
    }
    static clear() {
      V(this.STORAGE_KEY, null), V(this.FINGERPRINT_KEY, null), this.cachedAnonymousId = null, 
      this.cachedFingerprint = null;
    }
    static regenerateFingerprint() {
      return V(this.FINGERPRINT_KEY, null), this.cachedFingerprint = null, this.getDeviceFingerprint();
    }
    static getDebugInfo() {
      return {
        anonymous_id: this.getAnonymousId(),
        device_fingerprint: this.getDeviceFingerprint(),
        fingerprint_components: {
          browser: this.normalizeUserAgent(navigator.userAgent),
          language: navigator.language,
          platform: navigator.platform,
          screen_color: screen.colorDepth,
          timezone: (new Date).getTimezoneOffset(),
          hardware: navigator.hardwareConcurrency,
          webgl: this.getWebGLFingerprint()
        },
        storage: {
          fp_stored: R(this.FINGERPRINT_KEY),
          id_stored: R(this.STORAGE_KEY)
        }
      };
    }
    static async testStability(e = 10) {
      const t = [];
      for (let n = 0; n < e; n++) {
        this.cachedFingerprint = null;
        const e = this.getDeviceFingerprint();
        t.push(e), await new Promise((e => setTimeout(e, 100)));
      }
      const a = new Set(t);
      a.size, a.size, Array.from(a), a.size, 1 === a.size ? t[0] : a.size;
    }
  }

  __publicField(AnonymousIdentityOptimized, "STORAGE_KEY", "anonymous_id"), __publicField(AnonymousIdentityOptimized, "FINGERPRINT_KEY", "device_fingerprint"), 
  __publicField(AnonymousIdentityOptimized, "FP_VERSION", "v2"), __publicField(AnonymousIdentityOptimized, "cachedAnonymousId", null), 
  __publicField(AnonymousIdentityOptimized, "cachedFingerprint", null);

  const We = new Set([ "authorization", "api_key", "x-anonymous-id", "x-device-fp", "anonymous_id", "device_fingerprint", "x-ai-credential" ]), redactValue = (e, t) => We.has(e.toLowerCase()) ? "***" : "string" == typeof t && /bearer\s+/i.test(t) ? "Bearer ***" : t, redactRequestLog = e => {
    if (Array.isArray(e)) return e.map((e => redactRequestLog(e)));
    if (!e || "object" != typeof e) return e;
    const t = {};
    return Object.entries(e).forEach((([e, a]) => {
      if ("string" == typeof a && (a.trim().startsWith("{") || a.trim().startsWith("["))) try {
        return void (t[e] = JSON.stringify(redactRequestLog(JSON.parse(a))));
      } catch {
        return void (t[e] = redactValue(e, a));
      }
      t[e] = redactValue(e, redactRequestLog(a));
    })), t;
  };

  function requestApi(e, t, a = void 0, n = void 0, r = 5e3) {
    return "GET" === t && a && (e += `?${new URLSearchParams(a).toString()}`), new Promise((async (s, i) => {
      try {
        const o = Cache.get("user", {}), l = isLoggedInUserCache(o), c = AnonymousIdentityOptimized.getIdentity(), p = "POST" !== t || l ? a : {
          ...a,
          anonymous_id: c.anonymous_id,
          device_fingerprint: c.device_fingerprint
        }, u = await (async (e, t, a) => {
          if ("POST" === e) {
            const e = get_t(t), n = cloneWithLegacySignatureArraySort(t);
            return {
              aka: e,
              body: {
                data: await a(JSON.stringify(n), e)
              }
            };
          }
          return {
            aka: get_t({})
          };
        })(t, p, encrypt), d = (e => {
          const t = {
            "User-Agent": e.userAgent,
            "Content-Type": "application/json",
            referer: e.referer,
            v: e.version,
            ...e.headers,
            aka: e.aka
          };
          return isLoggedInUserCache(e.userCache) ? t.Authorization = `Bearer ${e.userCache.api_key}` : (t["X-Anonymous-ID"] = e.identity.anonymous_id, 
          t["X-Device-FP"] = e.identity.device_fingerprint), t;
        })({
          headers: n,
          userAgent: W.navigator.userAgent,
          referer: location.href,
          version: re.script.version,
          aka: u.aka,
          userCache: o,
          identity: c
        }), m = Date.now();
        redactRequestLog({
          url: e,
          method: t,
          data: JSON.stringify(p),
          headers: d
        }), K({
          method: t,
          url: e,
          headers: d,
          data: "GET" !== t ? JSON.stringify(u.body) : void 0,
          timeout: r,
          onload: async function(e) {
            const t = Date.now() - m;
            try {
              const a = await (async (e, t) => {
                let a;
                try {
                  a = JSON.parse(e.responseText);
                } catch {
                  throw new Error("\u63a5\u53e3\u54cd\u5e94\u4e0d\u662f\u6709\u6548 JSON");
                }
                if (!(null == a ? void 0 : a.encrypted)) return e;
                const n = await t(String(a.data ?? ""));
                if (!n) throw new Error("\u63a5\u53e3\u54cd\u5e94\u89e3\u5bc6\u5931\u8d25");
                return {
                  ...e,
                  responseText: n
                };
              })(e, decrypt);
              JSON.parse(a.responseText), s([ a, t ]);
            } catch (a) {
              String(a), i(a);
            }
          },
          ontimeout: () => i(new Error("\u63a5\u53e3\u8bf7\u6c42\u8d85\u65f6")),
          onerror: e => {
            i(e);
          }
        });
      } catch (o) {
        i(o);
      }
    }));
  }

  const apiUrl = e => `https://www.aiask.site/v1/${e}`;

  function request(e, t, a = void 0, n = void 0, r = 5e3) {
    "GET" === t && a && (e += `?${new URLSearchParams(a).toString()}`), "POST" === t && (n = {
      ...n
    });
    const s = {
      "User-Agent": W.navigator.userAgent,
      "Content-Type": "application/json",
      referer: location.href,
      ...n
    };
    return new Promise(((n, i) => {
      const o = Date.now();
      K({
        method: t,
        url: e,
        headers: s,
        data: "GET" !== t ? JSON.stringify(a) : void 0,
        timeout: r,
        onload: function(e) {
          const t = Date.now();
          n([ e, t - o ]);
        },
        ontimeout: () => i(new Error("\u63a5\u53e3\u8bf7\u6c42\u8d85\u65f6")),
        onerror: e => {
          i(e);
        }
      });
    }));
  }

  const getNonAnswerMessage = e => {
    const t = findNonAnswerText(e);
    return t ? `\u63a5\u53e3\u8fd4\u56de\u975e\u7b54\u6848\u6587\u6848\uff1a${t}` : "";
  };

  class Answer {
    constructor() {}
    static score(e, t) {
      let a = Cache.get("api_" + e, {
        score: 0
      });
      a.score += t, Cache.set("api_" + e, a, 600);
    }
    static async getAllAnswers(e) {
      const t = [ this.getAnswer1(e) ];
      return Promise.all(t);
    }
    static async getAnswersFree(e) {
      const t = [ this.getMainAnswer(e), this.getAnswer1(e) ];
      return Promise.all(t);
    }
    static async getAnswer1(e) {
      let t = function() {
        let e = Array.from({
          length: 4
        }, (() => Math.floor(255 * Math.random()))).join(".");
        return {
          "X-Forwarded-For": e,
          "X-Real-IP": e
        };
      }();
      return new Promise((a => {
        request("http://cx.icodef.com/wyn-nb?v=4", "POST", {
          question: e.question
        }, t).then((e => {
          let t = e[1];
          try {
            e = JSON.parse(e[0].responseText);
          } catch (s) {
            a({
              form: "\u4e00\u4e4b\u9898\u5e93",
              answer: null,
              error: s,
              duration: t
            });
          }
          let n = "";
          if (1 === e.code) {
            let t = e.data.replace(/javascript:void\(0\);/g, "").trim().replace(/\n/g, "");
            [ "\u53db\u9006", "\u516c\u4f17\u53f7", "\u674e\u6052\u96c5", "\u4e00\u4e4b" ].every((e => !t.includes(e))) && (n = t.split("#"));
          }
          const r = getNonAnswerMessage(n);
          a({
            form: "\u4e00\u4e4b\u9898\u5e93",
            answer: r ? "" : n,
            duration: t,
            ...r ? {
              msg: r
            } : {}
          });
        })).catch((e => {
          "timeout" === e && this.score("icodef", -1), a({
            form: "\u4e00\u4e4b\u9898\u5e93",
            answer: "",
            msg: e,
            duration: 5e3
          });
        }));
      }));
    }
    static async getAnswer2(e) {
      return new Promise((t => {
        [ 0, 1, 2 ].includes(parseInt(e.type)) ? request("https://api.muketool.com/cx/v2/query", "POST", {
          question: e.question,
          type: parseInt(e.type)
        }, {}).then((e => {
          let a = e[1];
          const n = 1 === (e = JSON.parse(e[0].responseText)).code ? e.data.split("#") : "", r = getNonAnswerMessage(n);
          t({
            form: "muketool",
            answer: r ? "" : n,
            duration: a,
            ...r ? {
              msg: r
            } : {}
          });
        })).catch((e => {
          "timeout" === e && this.score("muketool", -1), t({
            form: "muketool",
            answer: ""
          });
        })) : t({
          form: "muketool",
          answer: "",
          duration: "\u4e0d\u652f\u6301\u7684\u9898\u578b"
        });
      }));
    }
    static getTimestamp() {
      return Math.floor((new Date).getTime() / 1e3);
    }
    static cacheAnswer(e) {
      const t = {
        type: e.type,
        question: e.question,
        options: e.options,
        answer: e.answer
      }, a = findNonAnswerText(t.answer);
      if (a) return;
      const n = questionHash(t.type, t.question, t.options);
      t.createTime = this.getTimestamp(), Cache.set("ques1_" + n, t);
    }
    static async getCacheAnswer(e) {
      const t = questionHash(e.type, e.question, e.options);
      e.type, e.question, e.options;
      let a = Cache.get("ques1_" + t);
      return a ? {
        form: "\u672c\u5730\u7f13\u5b58",
        answer: a.answer,
        duration: 10
      } : {
        form: "\u672c\u5730\u7f13\u5b58",
        answer: "",
        duration: 10,
        msg: "\u672a\u627e\u5230\u7f13\u5b58"
      };
    }
    static getMainAnswer(e) {
      const t = (a = e.question, n = isLoggedInUserCache(Cache.get("user", {})), "string" != typeof a || "" === a.trim() ? {
        answer: "",
        duration: 0,
        msg: "\u9898\u5e72\u4e3a\u7a7a\uff0c\u672a\u67e5\u8be2\u9898\u5e93"
      } : n ? null : {
        answer: "",
        duration: 0,
        msg: "\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u9898\u5e93\u641c\u9898\uff0c\u8bf7\u5148\u767b\u5f55",
        needLogin: true
      });
      var a, n;
      if (t) return t.msg, Promise.resolve({
        form: "\u7231\u95ee\u7b54\u9898\u5e93",
        ...t
      });
      const r = {
        type: e.type,
        question: e.question,
        options: e.options.map((e => e)),
        workType: e.workType,
        pageType: e.pageType
      }, s = apiUrl("question/search");
      return new Promise((e => {
        requestApi(s, "POST", r, {}, 6e3).then((t => {
          var a;
          let n = t[1];
          t = JSON.parse(t[0].responseText);
          const r = getNonAnswerMessage(null == (a = t.data) ? void 0 : a.answer);
          200 === t.code && t.data.answer && !r ? e({
            form: "\u7231\u95ee\u7b54\u9898\u5e93",
            answer: t.data.answer,
            duration: n,
            msg: t.message
          }) : r ? e({
            form: "\u7231\u95ee\u7b54\u9898\u5e93",
            answer: "",
            duration: n,
            msg: r
          }) : 401 === t.code ? e({
            form: "\u7231\u95ee\u7b54\u9898\u5e93",
            answer: "",
            duration: n,
            msg: t.message,
            needLogin: true
          }) : e({
            form: "\u7231\u95ee\u7b54\u9898\u5e93",
            answer: "",
            duration: n,
            msg: t.message
          });
        })).catch((t => {
          e({
            form: "\u7231\u95ee\u7b54\u9898\u5e93",
            answer: "",
            error: t,
            duration: 10,
            msg: "\u8bf7\u6c42\u5931\u8d25"
          });
        }));
      }));
    }
    static async syncQuestionList(e) {
      return new Promise((t => {
        requestApi(apiUrl("question/sync"), "POST", e, {}).then((e => {
          e[0].responseText, t(e[0].responseText);
        })).catch((e => {
          t(e);
        }));
      }));
    }
    static async syncPaper(e) {
      return new Promise(((t, a) => {
        requestApi(apiUrl("question/courseSync"), "POST", e, {}).then((e => {
          try {
            const a = e[0].responseText, n = JSON.parse(a);
            n && (200 === n.code || 0 === n.code || n.success), t(n);
          } catch (a) {
            t({
              code: -1,
              error: a,
              msg: "\u54cd\u5e94\u89e3\u6790\u5931\u8d25"
            });
          }
        })).catch((e => {
          t({
            code: -1,
            error: e,
            msg: "\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25"
          });
        }));
      }));
    }
  }

  const defaultSetAnswer = async (e, t, a, n, r) => {
    var s;
    switch (assertFillShouldContinue(r), e) {
     case "xx":
      {
        const optionClickDelay = () => n.optionDelay ? Math.floor(n.optionDelay + 500 * Math.random()) : Math.floor(300 * Math.random() + 200);
        let e = false;
        for (let s = 0; s < a.$options.length; s++) {
          assertFillShouldContinue(r);
          const i = !(!n.ischecked || !n.ischecked(a.$options.eq(s)));
          t.includes(s) !== i && (e && (await sleep(optionClickDelay()), assertFillShouldContinue(r)), 
          a.$options.eq(s).click(), e = true);
        }
        break;
      }

     case "pd":
      let e = t;
      0 == a.options.length ? a.$options.each(((t, a) => {
        assertFillShouldContinue(r), isTrue(e) && isTrue(removeHtml(D(a).html())) && D(a).click(), 
        isFalse(e) && isFalse(removeHtml(D(a).html())) && D(a).click();
      })) : a.$options.each(((t, n) => {
        assertFillShouldContinue(r), isTrue(e) && isTrue(a.options[t]) && D(n).click(), 
        isFalse(e) && isFalse(a.options[t]) && D(n).click();
      }));
      break;

     case "jd":
      D(a.html).find("textarea").each((function(e) {
        assertFillShouldContinue(r), W.UE.getEditor(D(this).attr("name")).ready((function() {
          this.setContent(t[e].replace(/\u7b2c.\u7a7a:/g, ""));
        }));
      })), null == (s = D(a.html).find(".savebtndiv>a")) || s.click();
      break;

     case "ydlj":
      if (Array.isArray(t) && a.options) for (let s = 0; s < t.length && s < a.options.length; s++) {
        assertFillShouldContinue(r);
        let e = t[s], i = a.options[s];
        if (Array.isArray(e) && e.length > 0 && i.$options) for (let t = 0; t < i.$options.length; t++) if (assertFillShouldContinue(r), 
        e.includes(t)) {
          if (n.ischecked && n.ischecked(i.$options.eq(t))) continue;
          i.$options.eq(t).click(), await sleep(Math.floor(300 * Math.random() + 200));
        } else n.ischecked && n.ischecked(i.$options.eq(t)) && (i.$options.eq(t).click(), 
        await sleep(Math.floor(300 * Math.random() + 200)));
      }
    }
  }, applyAnswerResult = async (e, t, a, n, r) => {
    let s = true;
    assertFillShouldContinue(r), n.setAnswerHook && "function" == typeof n.setAnswerHook && await n.setAnswerHook({
      type: a.type,
      answer: t,
      html: a.html,
      ques: a
    }), assertFillShouldContinue(r), n.setAnswer && "function" == typeof n.setAnswer && (s = await n.setAnswer({
      type: a.type,
      answer: t,
      html: a.html,
      ques: a,
      rule: n
    })), assertFillShouldContinue(r), s && await defaultSetAnswer(e, t, a, n, r);
  }, Qe = class _Paper {
    static getPaper(e) {
      return Cache.get(`${_Paper.prefix}_${e}`);
    }
    static getLastSyncedHashes(e) {
      const t = Cache.get(`${_Paper.lastSyncedPrefix}_${e}`, {
        questions: [],
        chapters: []
      });
      return {
        questions: new Set(t.questions || []),
        chapters: new Set(t.chapters || [])
      };
    }
    static setLastSyncedHashes(e, t, a) {
      Cache.set(`${_Paper.lastSyncedPrefix}_${e}`, {
        questions: t,
        chapters: a
      });
    }
    static compareAndGetNewData(e, t) {
      const a = _Paper.getLastSyncedHashes(t), n = new Set, r = new Set, s = new Map, i = new Map;
      e.chapter && Array.isArray(e.chapter) && e.chapter.forEach((e => {
        const t = e.hash;
        r.add(t);
        const a = new Map;
        e.question && Array.isArray(e.question) && e.question.forEach((e => {
          const t = e.hash;
          n.add(t), s.set(t, e), a.set(t, e);
        })), i.set(t, {
          chapter: e,
          questions: a
        });
      }));
      const o = [], l = [];
      n.forEach((e => {
        a.questions.has(e) || o.push(e);
      })), r.forEach((e => {
        a.chapters.has(e) || l.push(e);
      }));
      const c = {
        hash: e.hash,
        name: e.name,
        platform: e.platform,
        info: e.info,
        chapter: []
      };
      return i.forEach(((e, t) => {
        if (l.includes(t)) c.chapter.push({
          hash: e.chapter.hash,
          name: e.chapter.name,
          question: Array.from(e.questions.values())
        }); else {
          const t = [];
          e.questions.forEach(((e, a) => {
            o.includes(a) && t.push(e);
          })), t.length > 0 && c.chapter.push({
            hash: e.chapter.hash,
            name: e.chapter.name,
            question: t
          });
        }
      })), {
        newData: c,
        newQuestionHashes: o,
        newChapterHashes: l
      };
    }
    static async setPaper(e, t, a = {}) {
      if (!e || !t) return;
      const n = _Paper.getPaper(e) || {
        chapter: []
      };
      t.chapter && t.chapter.forEach((e => {
        const t = n.chapter.find((t => t.hash === e.hash));
        t ? (a.replaceQuestions ? t.question = e.question || [] : e.question.forEach((e => {
          const a = t.question.findIndex((t => t.hash === e.hash));
          -1 !== a ? t.question[a] = e : t.question.push(e);
        })), Object.keys(e).forEach((a => {
          "question" !== a && (t[a] = e[a]);
        }))) : n.chapter.push(e);
      })), Object.keys(t).forEach((e => {
        "chapter" !== e && (n[e] = t[e]);
      })), Cache.set(`${_Paper.prefix}_${e}`, n);
      const {newData: r, newQuestionHashes: s, newChapterHashes: i} = _Paper.compareAndGetNewData(n, e);
      if (s.length > 0 || i.length > 0) {
        if (0 === r.chapter.length) return;
        s.length, i.length;
        try {
          const t = await Answer.syncPaper(r);
          let a;
          if ("string" == typeof t) try {
            a = JSON.parse(t);
          } catch (o) {
            return;
          } else a = t;
          if (!a || 200 !== a.code && 0 !== a.code && !0 !== a.success) JSON.stringify(a); else {
            const t = _Paper.getLastSyncedHashes(e), a = Array.from(new Set([ ...t.questions, ...s ])), n = Array.from(new Set([ ...t.chapters, ...i ]));
            _Paper.setLastSyncedHashes(e, a, n), s.length, i.length;
          }
        } catch (l) {}
      }
    }
    static hasChapter(e, t) {
      const a = _Paper.getPaper(e);
      return !(!a || !a.chapter) && a.chapter.some((e => e.hash === t));
    }
    static getAllPapers() {
      return Cache.matchGet(`${_Paper.prefix}_`);
    }
  };

  __publicField(Qe, "prefix", "paper_"), __publicField(Qe, "lastSyncedPrefix", "paper_last_synced_");

  let Je = Qe;

  function getDefaultExportFromCjs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }

  var Xe, Ye;

  var Ze = function() {
    if (Ye) return Xe;
    Ye = 1;
    var e = {
      parse: function(t) {
        var a = e._bin, n = new Uint8Array(t), r = 0;
        a.readFixed(n, r), r += 4;
        var s = a.readUshort(n, r);
        r += 2, a.readUshort(n, r), r += 2, a.readUshort(n, r), r += 2, a.readUshort(n, r), 
        r += 2;
        for (var i = [ "cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG " ], o = {
          _data: n
        }, l = {}, c = 0; c < s; c++) {
          var p = a.readASCII(n, r, 4);
          r += 4, a.readUint(n, r), r += 4;
          var u = a.readUint(n, r);
          r += 4;
          var d = a.readUint(n, r);
          r += 4, l[p] = {
            offset: u,
            length: d
          };
        }
        for (c = 0; c < i.length; c++) {
          var m = i[c];
          l[m] && (o[m.trim()] = e[m.trim()].parse(n, l[m].offset, l[m].length, o));
        }
        return o;
      },
      _tabOffset: function(t, a) {
        for (var n = e._bin, r = n.readUshort(t, 4), s = 12, i = 0; i < r; i++) {
          var o = n.readASCII(t, s, 4);
          s += 4, n.readUint(t, s), s += 4;
          var l = n.readUint(t, s);
          if (s += 4, n.readUint(t, s), s += 4, o == a) return l;
        }
        return 0;
      }
    };
    return e._bin = {
      readFixed: function(e, t) {
        return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 8 | e[t + 3]) / 65540;
      },
      readF2dot14: function(t, a) {
        return e._bin.readShort(t, a) / 16384;
      },
      readInt: function(t, a) {
        var n = e._bin.t.uint8;
        return n[0] = t[a + 3], n[1] = t[a + 2], n[2] = t[a + 1], n[3] = t[a], e._bin.t.int32[0];
      },
      readInt8: function(t, a) {
        return e._bin.t.uint8[0] = t[a], e._bin.t.int8[0];
      },
      readShort: function(t, a) {
        var n = e._bin.t.uint8;
        return n[1] = t[a], n[0] = t[a + 1], e._bin.t.int16[0];
      },
      readUshort: function(e, t) {
        return e[t] << 8 | e[t + 1];
      },
      readUshorts: function(t, a, n) {
        for (var r = [], s = 0; s < n; s++) r.push(e._bin.readUshort(t, a + 2 * s));
        return r;
      },
      readUint: function(t, a) {
        var n = e._bin.t.uint8;
        return n[3] = t[a], n[2] = t[a + 1], n[1] = t[a + 2], n[0] = t[a + 3], e._bin.t.uint32[0];
      },
      readUint64: function(t, a) {
        return 4294967296 * e._bin.readUint(t, a) + e._bin.readUint(t, a + 4);
      },
      readASCII: function(e, t, a) {
        for (var n = "", r = 0; r < a; r++) n += String.fromCharCode(e[t + r]);
        return n;
      },
      readUnicode: function(e, t, a) {
        for (var n = "", r = 0; r < a; r++) {
          var s = e[t++] << 8 | e[t++];
          n += String.fromCharCode(s);
        }
        return n;
      },
      _tdec: window.TextDecoder ? new window.TextDecoder : null,
      readUTF8: function(t, a, n) {
        var r = e._bin._tdec;
        return r && 0 == a && n == t.length ? r.decode(t) : e._bin.readASCII(t, a, n);
      },
      readBytes: function(e, t, a) {
        for (var n = [], r = 0; r < a; r++) n.push(e[t + r]);
        return n;
      },
      readASCIIArray: function(e, t, a) {
        for (var n = [], r = 0; r < a; r++) n.push(String.fromCharCode(e[t + r]));
        return n;
      }
    }, e._bin.t = {
      buff: new ArrayBuffer(8)
    }, e._bin.t.int8 = new Int8Array(e._bin.t.buff), e._bin.t.uint8 = new Uint8Array(e._bin.t.buff), 
    e._bin.t.int16 = new Int16Array(e._bin.t.buff), e._bin.t.uint16 = new Uint16Array(e._bin.t.buff), 
    e._bin.t.int32 = new Int32Array(e._bin.t.buff), e._bin.t.uint32 = new Uint32Array(e._bin.t.buff), 
    e._lctf = {}, e._lctf.parse = function(t, a, n, r, s) {
      var i = e._bin, o = {}, l = a;
      i.readFixed(t, a), a += 4;
      var c = i.readUshort(t, a);
      a += 2;
      var p = i.readUshort(t, a);
      a += 2;
      var u = i.readUshort(t, a);
      return a += 2, o.scriptList = e._lctf.readScriptList(t, l + c), o.featureList = e._lctf.readFeatureList(t, l + p), 
      o.lookupList = e._lctf.readLookupList(t, l + u, s), o;
    }, e._lctf.readLookupList = function(t, a, n) {
      var r = e._bin, s = a, i = [], o = r.readUshort(t, a);
      a += 2;
      for (var l = 0; l < o; l++) {
        var c = r.readUshort(t, a);
        a += 2;
        var p = e._lctf.readLookupTable(t, s + c, n);
        i.push(p);
      }
      return i;
    }, e._lctf.readLookupTable = function(t, a, n) {
      var r = e._bin, s = a, i = {
        tabs: []
      };
      i.ltype = r.readUshort(t, a), a += 2, i.flag = r.readUshort(t, a), a += 2;
      var o = r.readUshort(t, a);
      a += 2;
      for (var l = 0; l < o; l++) {
        var c = r.readUshort(t, a);
        a += 2;
        var p = n(t, i.ltype, s + c);
        i.tabs.push(p);
      }
      return i;
    }, e._lctf.numOfOnes = function(e) {
      for (var t = 0, a = 0; a < 32; a++) e >>> a & 1 && t++;
      return t;
    }, e._lctf.readClassDef = function(t, a) {
      var n = e._bin, r = [], s = n.readUshort(t, a);
      if (a += 2, 1 == s) {
        var i = n.readUshort(t, a);
        a += 2;
        var o = n.readUshort(t, a);
        a += 2;
        for (var l = 0; l < o; l++) r.push(i + l), r.push(i + l), r.push(n.readUshort(t, a)), 
        a += 2;
      }
      if (2 == s) {
        var c = n.readUshort(t, a);
        a += 2;
        for (l = 0; l < c; l++) r.push(n.readUshort(t, a)), a += 2, r.push(n.readUshort(t, a)), 
        a += 2, r.push(n.readUshort(t, a)), a += 2;
      }
      return r;
    }, e._lctf.getInterval = function(e, t) {
      for (var a = 0; a < e.length; a += 3) {
        var n = e[a], r = e[a + 1];
        if (e[a + 2], n <= t && t <= r) return a;
      }
      return -1;
    }, e._lctf.readValueRecord = function(t, a, n) {
      var r = e._bin, s = [];
      return s.push(1 & n ? r.readShort(t, a) : 0), a += 1 & n ? 2 : 0, s.push(2 & n ? r.readShort(t, a) : 0), 
      a += 2 & n ? 2 : 0, s.push(4 & n ? r.readShort(t, a) : 0), a += 4 & n ? 2 : 0, s.push(8 & n ? r.readShort(t, a) : 0), 
      a += 8 & n ? 2 : 0, s;
    }, e._lctf.readCoverage = function(t, a) {
      var n = e._bin, r = {};
      r.fmt = n.readUshort(t, a), a += 2;
      var s = n.readUshort(t, a);
      return a += 2, 1 == r.fmt && (r.tab = n.readUshorts(t, a, s)), 2 == r.fmt && (r.tab = n.readUshorts(t, a, 3 * s)), 
      r;
    }, e._lctf.coverageIndex = function(t, a) {
      var n = t.tab;
      if (1 == t.fmt) return n.indexOf(a);
      if (2 == t.fmt) {
        var r = e._lctf.getInterval(n, a);
        if (-1 != r) return n[r + 2] + (a - n[r]);
      }
      return -1;
    }, e._lctf.readFeatureList = function(t, a) {
      var n = e._bin, r = a, s = [], i = n.readUshort(t, a);
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = n.readASCII(t, a, 4);
        a += 4;
        var c = n.readUshort(t, a);
        a += 2, s.push({
          tag: l.trim(),
          tab: e._lctf.readFeatureTable(t, r + c)
        });
      }
      return s;
    }, e._lctf.readFeatureTable = function(t, a) {
      var n = e._bin;
      n.readUshort(t, a), a += 2;
      var r = n.readUshort(t, a);
      a += 2;
      for (var s = [], i = 0; i < r; i++) s.push(n.readUshort(t, a + 2 * i));
      return s;
    }, e._lctf.readScriptList = function(t, a) {
      var n = e._bin, r = a, s = {}, i = n.readUshort(t, a);
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = n.readASCII(t, a, 4);
        a += 4;
        var c = n.readUshort(t, a);
        a += 2, s[l.trim()] = e._lctf.readScriptTable(t, r + c);
      }
      return s;
    }, e._lctf.readScriptTable = function(t, a) {
      var n = e._bin, r = a, s = {}, i = n.readUshort(t, a);
      a += 2, s.default = e._lctf.readLangSysTable(t, r + i);
      var o = n.readUshort(t, a);
      a += 2;
      for (var l = 0; l < o; l++) {
        var c = n.readASCII(t, a, 4);
        a += 4;
        var p = n.readUshort(t, a);
        a += 2, s[c.trim()] = e._lctf.readLangSysTable(t, r + p);
      }
      return s;
    }, e._lctf.readLangSysTable = function(t, a) {
      var n = e._bin, r = {};
      n.readUshort(t, a), a += 2, r.reqFeature = n.readUshort(t, a), a += 2;
      var s = n.readUshort(t, a);
      return a += 2, r.features = n.readUshorts(t, a, s), r;
    }, e.CFF = {}, e.CFF.parse = function(t, a, n) {
      var r = e._bin;
      (t = new Uint8Array(t.buffer, a, n))[a = 0], t[++a], t[++a], t[++a], a++;
      var s = [];
      a = e.CFF.readIndex(t, a, s);
      for (var i = [], o = 0; o < s.length - 1; o++) i.push(r.readASCII(t, a + s[o], s[o + 1] - s[o]));
      a += s[s.length - 1];
      var l = [];
      a = e.CFF.readIndex(t, a, l);
      var c = [];
      for (o = 0; o < l.length - 1; o++) c.push(e.CFF.readDict(t, a + l[o], a + l[o + 1]));
      a += l[l.length - 1];
      var p = c[0], u = [];
      a = e.CFF.readIndex(t, a, u);
      var d = [];
      for (o = 0; o < u.length - 1; o++) d.push(r.readASCII(t, a + u[o], u[o + 1] - u[o]));
      if (a += u[u.length - 1], e.CFF.readSubrs(t, a, p), p.CharStrings) {
        a = p.CharStrings;
        u = [];
        a = e.CFF.readIndex(t, a, u);
        var m = [];
        for (o = 0; o < u.length - 1; o++) m.push(r.readBytes(t, a + u[o], u[o + 1] - u[o]));
        p.CharStrings = m;
      }
      p.Encoding && (p.Encoding = e.CFF.readEncoding(t, p.Encoding, p.CharStrings.length)), 
      p.charset && (p.charset = e.CFF.readCharset(t, p.charset, p.CharStrings.length)), 
      p.Private && (a = p.Private[1], p.Private = e.CFF.readDict(t, a, a + p.Private[0]), 
      p.Private.Subrs && e.CFF.readSubrs(t, a + p.Private.Subrs, p.Private));
      var h = {};
      for (var f in p) -1 != [ "FamilyName", "FullName", "Notice", "version", "Copyright" ].indexOf(f) ? h[f] = d[p[f] - 426 + 35] : h[f] = p[f];
      return h;
    }, e.CFF.readSubrs = function(t, a, n) {
      var r = e._bin, s = [];
      a = e.CFF.readIndex(t, a, s);
      var i, o = s.length;
      i = o < 1240 ? 107 : o < 33900 ? 1131 : 32768, n.Bias = i, n.Subrs = [];
      for (var l = 0; l < s.length - 1; l++) n.Subrs.push(r.readBytes(t, a + s[l], s[l + 1] - s[l]));
    }, e.CFF.tableSE = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0 ], 
    e.CFF.glyphByUnicode = function(e, t) {
      for (var a = 0; a < e.charset.length; a++) if (e.charset[a] == t) return a;
      return -1;
    }, e.CFF.glyphBySE = function(t, a) {
      return a < 0 || a > 255 ? -1 : e.CFF.glyphByUnicode(t, e.CFF.tableSE[a]);
    }, e.CFF.readEncoding = function(t, a, n) {
      e._bin;
      var r = [ ".notdef" ], s = t[a];
      if (a++, 0 != s) throw "error: unknown encoding format: " + s;
      var i = t[a];
      a++;
      for (var o = 0; o < i; o++) r.push(t[a + o]);
      return r;
    }, e.CFF.readCharset = function(t, a, n) {
      var r = e._bin, s = [ ".notdef" ], i = t[a];
      if (a++, 0 == i) for (var o = 0; o < n; o++) {
        var l = r.readUshort(t, a);
        a += 2, s.push(l);
      } else {
        if (1 != i && 2 != i) throw "error: format: " + i;
        for (;s.length < n; ) {
          l = r.readUshort(t, a);
          a += 2;
          var c = 0;
          1 == i ? (c = t[a], a++) : (c = r.readUshort(t, a), a += 2);
          for (o = 0; o <= c; o++) s.push(l), l++;
        }
      }
      return s;
    }, e.CFF.readIndex = function(t, a, n) {
      var r = e._bin, s = r.readUshort(t, a), i = t[a += 2];
      if (a++, 1 == i) for (var o = 0; o < s + 1; o++) n.push(t[a + o]); else if (2 == i) for (o = 0; o < s + 1; o++) n.push(r.readUshort(t, a + 2 * o)); else if (3 == i) for (o = 0; o < s + 1; o++) n.push(16777215 & r.readUint(t, a + 3 * o - 1)); else if (0 != s) throw "unsupported offset size: " + i + ", count: " + s;
      return (a += (s + 1) * i) - 1;
    }, e.CFF.getCharString = function(t, a, n) {
      var r = e._bin, s = t[a], i = t[a + 1];
      t[a + 2], t[a + 3], t[a + 4];
      var o = 1, l = null, c = null;
      s <= 20 && (l = s, o = 1), 12 == s && (l = 100 * s + i, o = 2), 21 <= s && s <= 27 && (l = s, 
      o = 1), 28 == s && (c = r.readShort(t, a + 1), o = 3), 29 <= s && s <= 31 && (l = s, 
      o = 1), 32 <= s && s <= 246 && (c = s - 139, o = 1), 247 <= s && s <= 250 && (c = 256 * (s - 247) + i + 108, 
      o = 2), 251 <= s && s <= 254 && (c = 256 * -(s - 251) - i - 108, o = 2), 255 == s && (c = r.readInt(t, a + 1) / 65535, 
      o = 5), n.val = null != c ? c : "o" + l, n.size = o;
    }, e.CFF.readCharString = function(t, a, n) {
      for (var r = a + n, s = e._bin, i = []; a < r; ) {
        var o = t[a], l = t[a + 1];
        t[a + 2], t[a + 3], t[a + 4];
        var c = 1, p = null, u = null;
        o <= 20 && (p = o, c = 1), 12 == o && (p = 100 * o + l, c = 2), 19 != o && 20 != o || (p = o, 
        c = 2), 21 <= o && o <= 27 && (p = o, c = 1), 28 == o && (u = s.readShort(t, a + 1), 
        c = 3), 29 <= o && o <= 31 && (p = o, c = 1), 32 <= o && o <= 246 && (u = o - 139, 
        c = 1), 247 <= o && o <= 250 && (u = 256 * (o - 247) + l + 108, c = 2), 251 <= o && o <= 254 && (u = 256 * -(o - 251) - l - 108, 
        c = 2), 255 == o && (u = s.readInt(t, a + 1) / 65535, c = 5), i.push(null != u ? u : "o" + p), 
        a += c;
      }
      return i;
    }, e.CFF.readDict = function(t, a, n) {
      for (var r = e._bin, s = {}, i = []; a < n; ) {
        var o = t[a], l = t[a + 1];
        t[a + 2], t[a + 3], t[a + 4];
        var c = 1, p = null, u = null;
        if (28 == o && (u = r.readShort(t, a + 1), c = 3), 29 == o && (u = r.readInt(t, a + 1), 
        c = 5), 32 <= o && o <= 246 && (u = o - 139, c = 1), 247 <= o && o <= 250 && (u = 256 * (o - 247) + l + 108, 
        c = 2), 251 <= o && o <= 254 && (u = 256 * -(o - 251) - l - 108, c = 2), 255 == o) throw u = r.readInt(t, a + 1) / 65535, 
        c = 5, "unknown number";
        if (30 == o) {
          var d = [];
          for (c = 1; ;) {
            var m = t[a + c];
            c++;
            var h = m >> 4, f = 15 & m;
            if (15 != h && d.push(h), 15 != f && d.push(f), 15 == f) break;
          }
          for (var g = "", v = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber" ], y = 0; y < d.length; y++) g += v[d[y]];
          u = parseFloat(g);
        }
        if (o <= 21) if (p = [ "version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX" ][o], 
        c = 1, 12 == o) p = [ "Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName" ][l], 
        c = 2;
        null != p ? (s[p] = 1 == i.length ? i[0] : i, i = []) : i.push(u), a += c;
      }
      return s;
    }, e.cmap = {}, e.cmap.parse = function(t, a, n) {
      t = new Uint8Array(t.buffer, a, n), a = 0;
      var r = e._bin, s = {};
      r.readUshort(t, a), a += 2;
      var i = r.readUshort(t, a);
      a += 2;
      var o = [];
      s.tables = [];
      for (var l = 0; l < i; l++) {
        var c = r.readUshort(t, a);
        a += 2;
        var p = r.readUshort(t, a);
        a += 2;
        var u = r.readUint(t, a);
        a += 4;
        var d = "p" + c + "e" + p, m = o.indexOf(u);
        if (-1 == m) {
          var h;
          m = s.tables.length, o.push(u);
          var f = r.readUshort(t, u);
          0 == f ? h = e.cmap.parse0(t, u) : 4 == f ? h = e.cmap.parse4(t, u) : 6 == f ? h = e.cmap.parse6(t, u) : 12 == f ? h = e.cmap.parse12(t, u) : console.log("unknown format: " + f, c, p, u), 
          s.tables.push(h);
        }
        if (null != s[d]) throw "multiple tables for one platform+encoding";
        s[d] = m;
      }
      return s;
    }, e.cmap.parse0 = function(t, a) {
      var n = e._bin, r = {};
      r.format = n.readUshort(t, a), a += 2;
      var s = n.readUshort(t, a);
      a += 2, n.readUshort(t, a), a += 2, r.map = [];
      for (var i = 0; i < s - 6; i++) r.map.push(t[a + i]);
      return r;
    }, e.cmap.parse4 = function(t, a) {
      var n = e._bin, r = a, s = {};
      s.format = n.readUshort(t, a), a += 2;
      var i = n.readUshort(t, a);
      a += 2, n.readUshort(t, a), a += 2;
      var o = n.readUshort(t, a);
      a += 2;
      var l = o / 2;
      s.searchRange = n.readUshort(t, a), a += 2, s.entrySelector = n.readUshort(t, a), 
      a += 2, s.rangeShift = n.readUshort(t, a), a += 2, s.endCount = n.readUshorts(t, a, l), 
      a += 2 * l, a += 2, s.startCount = n.readUshorts(t, a, l), a += 2 * l, s.idDelta = [];
      for (var c = 0; c < l; c++) s.idDelta.push(n.readShort(t, a)), a += 2;
      for (s.idRangeOffset = n.readUshorts(t, a, l), a += 2 * l, s.glyphIdArray = []; a < r + i; ) s.glyphIdArray.push(n.readUshort(t, a)), 
      a += 2;
      return s;
    }, e.cmap.parse6 = function(t, a) {
      var n = e._bin, r = {};
      r.format = n.readUshort(t, a), a += 2, n.readUshort(t, a), a += 2, n.readUshort(t, a), 
      a += 2, r.firstCode = n.readUshort(t, a), a += 2;
      var s = n.readUshort(t, a);
      a += 2, r.glyphIdArray = [];
      for (var i = 0; i < s; i++) r.glyphIdArray.push(n.readUshort(t, a)), a += 2;
      return r;
    }, e.cmap.parse12 = function(t, a) {
      var n = e._bin, r = {};
      r.format = n.readUshort(t, a), a += 2, a += 2, n.readUint(t, a), a += 4, n.readUint(t, a), 
      a += 4;
      var s = n.readUint(t, a);
      a += 4, r.groups = [];
      for (var i = 0; i < s; i++) {
        var o = a + 12 * i, l = n.readUint(t, o + 0), c = n.readUint(t, o + 4), p = n.readUint(t, o + 8);
        r.groups.push([ l, c, p ]);
      }
      return r;
    }, e.glyf = {}, e.glyf.parse = function(e, t, a, n) {
      for (var r = [], s = 0; s < n.maxp.numGlyphs; s++) r.push(null);
      return r;
    }, e.glyf._parseGlyf = function(t, a) {
      var n = e._bin, r = t._data, s = e._tabOffset(r, "glyf") + t.loca[a];
      if (t.loca[a] == t.loca[a + 1]) return null;
      var i = {};
      if (i.noc = n.readShort(r, s), s += 2, i.xMin = n.readShort(r, s), s += 2, i.yMin = n.readShort(r, s), 
      s += 2, i.xMax = n.readShort(r, s), s += 2, i.yMax = n.readShort(r, s), s += 2, 
      i.xMin >= i.xMax || i.yMin >= i.yMax) return null;
      if (i.noc > 0) {
        i.endPts = [];
        for (var o = 0; o < i.noc; o++) i.endPts.push(n.readUshort(r, s)), s += 2;
        var l = n.readUshort(r, s);
        if (s += 2, r.length - s < l) return null;
        i.instructions = n.readBytes(r, s, l), s += l;
        var c = i.endPts[i.noc - 1] + 1;
        i.flags = [];
        for (o = 0; o < c; o++) {
          var p = r[s];
          if (s++, i.flags.push(p), 8 & p) {
            var u = r[s];
            s++;
            for (var d = 0; d < u; d++) i.flags.push(p), o++;
          }
        }
        i.xs = [];
        for (o = 0; o < c; o++) {
          var m = !!(2 & i.flags[o]), h = !!(16 & i.flags[o]);
          m ? (i.xs.push(h ? r[s] : -r[s]), s++) : h ? i.xs.push(0) : (i.xs.push(n.readShort(r, s)), 
          s += 2);
        }
        i.ys = [];
        for (o = 0; o < c; o++) {
          m = !!(4 & i.flags[o]), h = !!(32 & i.flags[o]);
          m ? (i.ys.push(h ? r[s] : -r[s]), s++) : h ? i.ys.push(0) : (i.ys.push(n.readShort(r, s)), 
          s += 2);
        }
        var f = 0, g = 0;
        for (o = 0; o < c; o++) f += i.xs[o], g += i.ys[o], i.xs[o] = f, i.ys[o] = g;
      } else {
        var v;
        i.parts = [];
        do {
          v = n.readUshort(r, s), s += 2;
          var y = {
            m: {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              tx: 0,
              ty: 0
            },
            p1: -1,
            p2: -1
          };
          if (i.parts.push(y), y.glyphIndex = n.readUshort(r, s), s += 2, 1 & v) {
            var b = n.readShort(r, s);
            s += 2;
            var w = n.readShort(r, s);
            s += 2;
          } else {
            b = n.readInt8(r, s);
            s++;
            w = n.readInt8(r, s);
            s++;
          }
          2 & v ? (y.m.tx = b, y.m.ty = w) : (y.p1 = b, y.p2 = w), 8 & v ? (y.m.a = y.m.d = n.readF2dot14(r, s), 
          s += 2) : 64 & v ? (y.m.a = n.readF2dot14(r, s), s += 2, y.m.d = n.readF2dot14(r, s), 
          s += 2) : 128 & v && (y.m.a = n.readF2dot14(r, s), s += 2, y.m.b = n.readF2dot14(r, s), 
          s += 2, y.m.c = n.readF2dot14(r, s), s += 2, y.m.d = n.readF2dot14(r, s), s += 2);
        } while (32 & v);
        if (256 & v) {
          var x = n.readUshort(r, s);
          s += 2, i.instr = [];
          for (o = 0; o < x; o++) i.instr.push(r[s]), s++;
        }
      }
      return i;
    }, e.GPOS = {}, e.GPOS.parse = function(t, a, n, r) {
      return e._lctf.parse(t, a, n, r, e.GPOS.subt);
    }, e.GPOS.subt = function(t, a, n) {
      if (2 != a) return null;
      var r = e._bin, s = n, i = {};
      i.format = r.readUshort(t, n), n += 2;
      var o = r.readUshort(t, n);
      n += 2, i.coverage = e._lctf.readCoverage(t, o + s), i.valFmt1 = r.readUshort(t, n), 
      n += 2, i.valFmt2 = r.readUshort(t, n), n += 2;
      var l = e._lctf.numOfOnes(i.valFmt1), c = e._lctf.numOfOnes(i.valFmt2);
      if (1 == i.format) {
        i.pairsets = [];
        var p = r.readUshort(t, n);
        n += 2;
        for (var u = 0; u < p; u++) {
          var d = r.readUshort(t, n);
          n += 2, d += s;
          var m = r.readUshort(t, d);
          d += 2;
          for (var h = [], f = 0; f < m; f++) {
            var g = r.readUshort(t, d);
            d += 2, 0 != i.valFmt1 && (k = e._lctf.readValueRecord(t, d, i.valFmt1), d += 2 * l), 
            0 != i.valFmt2 && (q = e._lctf.readValueRecord(t, d, i.valFmt2), d += 2 * c), h.push({
              gid2: g,
              val1: k,
              val2: q
            });
          }
          i.pairsets.push(h);
        }
      }
      if (2 == i.format) {
        var v = r.readUshort(t, n);
        n += 2;
        var y = r.readUshort(t, n);
        n += 2;
        var b = r.readUshort(t, n);
        n += 2;
        var w = r.readUshort(t, n);
        n += 2, i.classDef1 = e._lctf.readClassDef(t, s + v), i.classDef2 = e._lctf.readClassDef(t, s + y), 
        i.matrix = [];
        for (u = 0; u < b; u++) {
          var x = [];
          for (f = 0; f < w; f++) {
            var k = null, q = null;
            0 != i.valFmt1 && (k = e._lctf.readValueRecord(t, n, i.valFmt1), n += 2 * l), 0 != i.valFmt2 && (q = e._lctf.readValueRecord(t, n, i.valFmt2), 
            n += 2 * c), x.push({
              val1: k,
              val2: q
            });
          }
          i.matrix.push(x);
        }
      }
      return i;
    }, e.GSUB = {}, e.GSUB.parse = function(t, a, n, r) {
      return e._lctf.parse(t, a, n, r, e.GSUB.subt);
    }, e.GSUB.subt = function(t, a, n) {
      var r = e._bin, s = n, i = {};
      if (1 != a && 4 != a && 5 != a) return null;
      i.fmt = r.readUshort(t, n), n += 2;
      var o = r.readUshort(t, n);
      if (n += 2, i.coverage = e._lctf.readCoverage(t, o + s), 1 == a) {
        if (1 == i.fmt) i.delta = r.readShort(t, n), n += 2; else if (2 == i.fmt) {
          var l = r.readUshort(t, n);
          n += 2, i.newg = r.readUshorts(t, n, l), n += 2 * i.newg.length;
        }
      } else if (4 == a) {
        i.vals = [];
        l = r.readUshort(t, n);
        n += 2;
        for (var c = 0; c < l; c++) {
          var p = r.readUshort(t, n);
          n += 2, i.vals.push(e.GSUB.readLigatureSet(t, s + p));
        }
      } else if (5 == a) if (2 == i.fmt) {
        var u = r.readUshort(t, n);
        n += 2, i.cDef = e._lctf.readClassDef(t, s + u), i.scset = [];
        var d = r.readUshort(t, n);
        n += 2;
        for (c = 0; c < d; c++) {
          var m = r.readUshort(t, n);
          n += 2, i.scset.push(0 == m ? null : e.GSUB.readSubClassSet(t, s + m));
        }
      } else console.log("unknown table format", i.fmt);
      return i;
    }, e.GSUB.readSubClassSet = function(t, a) {
      var n = e._bin.readUshort, r = a, s = [], i = n(t, a);
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = n(t, a);
        a += 2, s.push(e.GSUB.readSubClassRule(t, r + l));
      }
      return s;
    }, e.GSUB.readSubClassRule = function(t, a) {
      var n = e._bin.readUshort, r = {}, s = n(t, a), i = n(t, a += 2);
      a += 2, r.input = [];
      for (var o = 0; o < s - 1; o++) r.input.push(n(t, a)), a += 2;
      return r.substLookupRecords = e.GSUB.readSubstLookupRecords(t, a, i), r;
    }, e.GSUB.readSubstLookupRecords = function(t, a, n) {
      for (var r = e._bin.readUshort, s = [], i = 0; i < n; i++) s.push(r(t, a), r(t, a + 2)), 
      a += 4;
      return s;
    }, e.GSUB.readChainSubClassSet = function(t, a) {
      var n = e._bin, r = a, s = [], i = n.readUshort(t, a);
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = n.readUshort(t, a);
        a += 2, s.push(e.GSUB.readChainSubClassRule(t, r + l));
      }
      return s;
    }, e.GSUB.readChainSubClassRule = function(t, a) {
      for (var n = e._bin, r = {}, s = [ "backtrack", "input", "lookahead" ], i = 0; i < s.length; i++) {
        var o = n.readUshort(t, a);
        a += 2, 1 == i && o--, r[s[i]] = n.readUshorts(t, a, o), a += 2 * r[s[i]].length;
      }
      o = n.readUshort(t, a);
      return a += 2, r.subst = n.readUshorts(t, a, 2 * o), a += 2 * r.subst.length, r;
    }, e.GSUB.readLigatureSet = function(t, a) {
      var n = e._bin, r = a, s = [], i = n.readUshort(t, a);
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = n.readUshort(t, a);
        a += 2, s.push(e.GSUB.readLigature(t, r + l));
      }
      return s;
    }, e.GSUB.readLigature = function(t, a) {
      var n = e._bin, r = {
        chain: []
      };
      r.nglyph = n.readUshort(t, a), a += 2;
      var s = n.readUshort(t, a);
      a += 2;
      for (var i = 0; i < s - 1; i++) r.chain.push(n.readUshort(t, a)), a += 2;
      return r;
    }, e.head = {}, e.head.parse = function(t, a, n) {
      var r = e._bin, s = {};
      return r.readFixed(t, a), a += 4, s.fontRevision = r.readFixed(t, a), a += 4, r.readUint(t, a), 
      a += 4, r.readUint(t, a), a += 4, s.flags = r.readUshort(t, a), a += 2, s.unitsPerEm = r.readUshort(t, a), 
      a += 2, s.created = r.readUint64(t, a), a += 8, s.modified = r.readUint64(t, a), 
      a += 8, s.xMin = r.readShort(t, a), a += 2, s.yMin = r.readShort(t, a), a += 2, 
      s.xMax = r.readShort(t, a), a += 2, s.yMax = r.readShort(t, a), a += 2, s.macStyle = r.readUshort(t, a), 
      a += 2, s.lowestRecPPEM = r.readUshort(t, a), a += 2, s.fontDirectionHint = r.readShort(t, a), 
      a += 2, s.indexToLocFormat = r.readShort(t, a), a += 2, s.glyphDataFormat = r.readShort(t, a), 
      a += 2, s;
    }, e.hhea = {}, e.hhea.parse = function(t, a, n) {
      var r = e._bin, s = {};
      return r.readFixed(t, a), a += 4, s.ascender = r.readShort(t, a), a += 2, s.descender = r.readShort(t, a), 
      a += 2, s.lineGap = r.readShort(t, a), a += 2, s.advanceWidthMax = r.readUshort(t, a), 
      a += 2, s.minLeftSideBearing = r.readShort(t, a), a += 2, s.minRightSideBearing = r.readShort(t, a), 
      a += 2, s.xMaxExtent = r.readShort(t, a), a += 2, s.caretSlopeRise = r.readShort(t, a), 
      a += 2, s.caretSlopeRun = r.readShort(t, a), a += 2, s.caretOffset = r.readShort(t, a), 
      a += 2, a += 8, s.metricDataFormat = r.readShort(t, a), a += 2, s.numberOfHMetrics = r.readUshort(t, a), 
      a += 2, s;
    }, e.hmtx = {}, e.hmtx.parse = function(t, a, n, r) {
      for (var s = e._bin, i = {
        aWidth: [],
        lsBearing: []
      }, o = 0, l = 0, c = 0; c < r.maxp.numGlyphs; c++) c < r.hhea.numberOfHMetrics && (o = s.readUshort(t, a), 
      a += 2, l = s.readShort(t, a), a += 2), i.aWidth.push(o), i.lsBearing.push(l);
      return i;
    }, e.kern = {}, e.kern.parse = function(t, a, n, r) {
      var s = e._bin, i = s.readUshort(t, a);
      if (a += 2, 1 == i) return e.kern.parseV1(t, a - 2, n, r);
      var o = s.readUshort(t, a);
      a += 2;
      for (var l = {
        glyph1: [],
        rval: []
      }, c = 0; c < o; c++) {
        a += 2;
        n = s.readUshort(t, a);
        a += 2;
        var p = s.readUshort(t, a);
        a += 2;
        var u = p >>> 8;
        if (0 != (u &= 15)) throw "unknown kern table format: " + u;
        a = e.kern.readFormat0(t, a, l);
      }
      return l;
    }, e.kern.parseV1 = function(t, a, n, r) {
      var s = e._bin;
      s.readFixed(t, a), a += 4;
      var i = s.readUint(t, a);
      a += 4;
      for (var o = {
        glyph1: [],
        rval: []
      }, l = 0; l < i; l++) {
        s.readUint(t, a), a += 4;
        var c = s.readUshort(t, a);
        a += 2, s.readUshort(t, a), a += 2;
        var p = c >>> 8;
        if (0 != (p &= 15)) throw "unknown kern table format: " + p;
        a = e.kern.readFormat0(t, a, o);
      }
      return o;
    }, e.kern.readFormat0 = function(t, a, n) {
      var r = e._bin, s = -1, i = r.readUshort(t, a);
      a += 2, r.readUshort(t, a), a += 2, r.readUshort(t, a), a += 2, r.readUshort(t, a), 
      a += 2;
      for (var o = 0; o < i; o++) {
        var l = r.readUshort(t, a);
        a += 2;
        var c = r.readUshort(t, a);
        a += 2;
        var p = r.readShort(t, a);
        a += 2, l != s && (n.glyph1.push(l), n.rval.push({
          glyph2: [],
          vals: []
        }));
        var u = n.rval[n.rval.length - 1];
        u.glyph2.push(c), u.vals.push(p), s = l;
      }
      return a;
    }, e.loca = {}, e.loca.parse = function(t, a, n, r) {
      var s = e._bin, i = [], o = r.head.indexToLocFormat, l = r.maxp.numGlyphs + 1;
      if (0 == o) for (var c = 0; c < l; c++) i.push(s.readUshort(t, a + (c << 1)) << 1);
      if (1 == o) for (c = 0; c < l; c++) i.push(s.readUint(t, a + (c << 2)));
      return i;
    }, e.maxp = {}, e.maxp.parse = function(t, a, n) {
      var r = e._bin, s = {}, i = r.readUint(t, a);
      return a += 4, s.numGlyphs = r.readUshort(t, a), a += 2, 65536 == i && (s.maxPoints = r.readUshort(t, a), 
      a += 2, s.maxContours = r.readUshort(t, a), a += 2, s.maxCompositePoints = r.readUshort(t, a), 
      a += 2, s.maxCompositeContours = r.readUshort(t, a), a += 2, s.maxZones = r.readUshort(t, a), 
      a += 2, s.maxTwilightPoints = r.readUshort(t, a), a += 2, s.maxStorage = r.readUshort(t, a), 
      a += 2, s.maxFunctionDefs = r.readUshort(t, a), a += 2, s.maxInstructionDefs = r.readUshort(t, a), 
      a += 2, s.maxStackElements = r.readUshort(t, a), a += 2, s.maxSizeOfInstructions = r.readUshort(t, a), 
      a += 2, s.maxComponentElements = r.readUshort(t, a), a += 2, s.maxComponentDepth = r.readUshort(t, a), 
      a += 2), s;
    }, e.name = {}, e.name.parse = function(t, a, n) {
      var r = e._bin, s = {};
      r.readUshort(t, a), a += 2;
      var i = r.readUshort(t, a);
      a += 2, r.readUshort(t, a);
      for (var o, l = a += 2, c = 0; c < i; c++) {
        var p = r.readUshort(t, a);
        a += 2;
        var u = r.readUshort(t, a);
        a += 2;
        var d = r.readUshort(t, a);
        a += 2;
        var m = r.readUshort(t, a);
        a += 2;
        n = r.readUshort(t, a);
        a += 2;
        var h = r.readUshort(t, a);
        a += 2;
        var f = "p" + p;
        null == s[f] && (s[f] = {});
        var g, v = [ "copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette" ][m], y = l + 12 * i + h;
        if (0 == p) g = r.readUnicode(t, y, n / 2); else if (3 == p && 0 == u) g = r.readUnicode(t, y, n / 2); else if (0 == u) g = r.readASCII(t, y, n); else if (1 == u) g = r.readUnicode(t, y, n / 2); else if (3 == u) g = r.readUnicode(t, y, n / 2); else {
          if (1 != p) throw "unknown encoding " + u + ", platformID: " + p;
          g = r.readASCII(t, y, n), console.log("reading unknown MAC encoding " + u + " as ASCII");
        }
        s[f][v] = g, s[f]._lang = d;
      }
      for (var b in s) if (null != s[b].postScriptName && 1033 == s[b]._lang) return s[b];
      for (var b in s) if (null != s[b].postScriptName && 3084 == s[b]._lang) return s[b];
      for (var b in s) if (null != s[b].postScriptName) return s[b];
      for (var b in s) {
        o = b;
        break;
      }
      return console.log("returning name table with languageID " + s[o]._lang), s[o];
    }, e["OS/2"] = {}, e["OS/2"].parse = function(t, a, n) {
      var r = e._bin.readUshort(t, a);
      a += 2;
      var s = {};
      if (0 == r) e["OS/2"].version0(t, a, s); else if (1 == r) e["OS/2"].version1(t, a, s); else if (2 == r || 3 == r || 4 == r) e["OS/2"].version2(t, a, s); else {
        if (5 != r) throw "unknown OS/2 table version: " + r;
        e["OS/2"].version5(t, a, s);
      }
      return s;
    }, e["OS/2"].version0 = function(t, a, n) {
      var r = e._bin;
      return n.xAvgCharWidth = r.readShort(t, a), a += 2, n.usWeightClass = r.readUshort(t, a), 
      a += 2, n.usWidthClass = r.readUshort(t, a), a += 2, n.fsType = r.readUshort(t, a), 
      a += 2, n.ySubscriptXSize = r.readShort(t, a), a += 2, n.ySubscriptYSize = r.readShort(t, a), 
      a += 2, n.ySubscriptXOffset = r.readShort(t, a), a += 2, n.ySubscriptYOffset = r.readShort(t, a), 
      a += 2, n.ySuperscriptXSize = r.readShort(t, a), a += 2, n.ySuperscriptYSize = r.readShort(t, a), 
      a += 2, n.ySuperscriptXOffset = r.readShort(t, a), a += 2, n.ySuperscriptYOffset = r.readShort(t, a), 
      a += 2, n.yStrikeoutSize = r.readShort(t, a), a += 2, n.yStrikeoutPosition = r.readShort(t, a), 
      a += 2, n.sFamilyClass = r.readShort(t, a), a += 2, n.panose = r.readBytes(t, a, 10), 
      a += 10, n.ulUnicodeRange1 = r.readUint(t, a), a += 4, n.ulUnicodeRange2 = r.readUint(t, a), 
      a += 4, n.ulUnicodeRange3 = r.readUint(t, a), a += 4, n.ulUnicodeRange4 = r.readUint(t, a), 
      a += 4, n.achVendID = [ r.readInt8(t, a), r.readInt8(t, a + 1), r.readInt8(t, a + 2), r.readInt8(t, a + 3) ], 
      a += 4, n.fsSelection = r.readUshort(t, a), a += 2, n.usFirstCharIndex = r.readUshort(t, a), 
      a += 2, n.usLastCharIndex = r.readUshort(t, a), a += 2, n.sTypoAscender = r.readShort(t, a), 
      a += 2, n.sTypoDescender = r.readShort(t, a), a += 2, n.sTypoLineGap = r.readShort(t, a), 
      a += 2, n.usWinAscent = r.readUshort(t, a), a += 2, n.usWinDescent = r.readUshort(t, a), 
      a += 2;
    }, e["OS/2"].version1 = function(t, a, n) {
      var r = e._bin;
      return a = e["OS/2"].version0(t, a, n), n.ulCodePageRange1 = r.readUint(t, a), a += 4, 
      n.ulCodePageRange2 = r.readUint(t, a), a += 4;
    }, e["OS/2"].version2 = function(t, a, n) {
      var r = e._bin;
      return a = e["OS/2"].version1(t, a, n), n.sxHeight = r.readShort(t, a), a += 2, 
      n.sCapHeight = r.readShort(t, a), a += 2, n.usDefault = r.readUshort(t, a), a += 2, 
      n.usBreak = r.readUshort(t, a), a += 2, n.usMaxContext = r.readUshort(t, a), a += 2;
    }, e["OS/2"].version5 = function(t, a, n) {
      var r = e._bin;
      return a = e["OS/2"].version2(t, a, n), n.usLowerOpticalPointSize = r.readUshort(t, a), 
      a += 2, n.usUpperOpticalPointSize = r.readUshort(t, a), a += 2;
    }, e.post = {}, e.post.parse = function(t, a, n) {
      var r = e._bin, s = {};
      return s.version = r.readFixed(t, a), a += 4, s.italicAngle = r.readFixed(t, a), 
      a += 4, s.underlinePosition = r.readShort(t, a), a += 2, s.underlineThickness = r.readShort(t, a), 
      a += 2, s;
    }, e.SVG = {}, e.SVG.parse = function(t, a, n) {
      var r = e._bin, s = {
        entries: []
      }, i = a;
      r.readUshort(t, a), a += 2;
      var o = r.readUint(t, a);
      a += 4, r.readUint(t, a), a += 4, a = o + i;
      var l = r.readUshort(t, a);
      a += 2;
      for (var c = 0; c < l; c++) {
        var p = r.readUshort(t, a);
        a += 2;
        var u = r.readUshort(t, a);
        a += 2;
        var d = r.readUint(t, a);
        a += 4;
        var m = r.readUint(t, a);
        a += 4;
        for (var h = new Uint8Array(t.buffer, i + d + o, m), f = r.readUTF8(h, 0, h.length), g = p; g <= u; g++) s.entries[g] = f;
      }
      return s;
    }, e.SVG.toPath = function(t) {
      var a = {
        cmds: [],
        crds: []
      };
      if (null == t) return a;
      for (var n = (new DOMParser).parseFromString(t, "image/svg+xml").firstChild; "svg" != n.tagName; ) n = n.nextSibling;
      var r = n.getAttribute("viewBox");
      r = r ? r.trim().split(" ").map(parseFloat) : [ 0, 0, 1e3, 1e3 ], e.SVG._toPath(n.children, a);
      for (var s = 0; s < a.crds.length; s += 2) {
        var i = a.crds[s], o = a.crds[s + 1];
        i -= r[0], o = -(o -= r[1]), a.crds[s] = i, a.crds[s + 1] = o;
      }
      return a;
    }, e.SVG._toPath = function(t, a, n) {
      for (var r = 0; r < t.length; r++) {
        var s = t[r], i = s.tagName, o = s.getAttribute("fill");
        if (null == o && (o = n), "g" == i) e.SVG._toPath(s.children, a, o); else if ("path" == i) {
          a.cmds.push(o || "#000000");
          var l = s.getAttribute("d"), c = e.SVG._tokens(l);
          e.SVG._toksToPath(c, a), a.cmds.push("X");
        } else "defs" == i || console.log(i, s);
      }
    }, e.SVG._tokens = function(e) {
      for (var t = [], a = 0, n = false, r = ""; a < e.length; ) {
        var s = e.charCodeAt(a), i = e.charAt(a);
        a++;
        var o = 48 <= s && s <= 57 || "." == i || "-" == i;
        n ? "-" == i ? (t.push(parseFloat(r)), r = i) : o ? r += i : (t.push(parseFloat(r)), 
        "," != i && " " != i && t.push(i), n = false) : o ? (r = i, n = true) : "," != i && " " != i && t.push(i);
      }
      return n && t.push(parseFloat(r)), t;
    }, e.SVG._toksToPath = function(t, a) {
      for (var n = 0, r = 0, s = 0, i = 0, o = 0, l = {
        M: 2,
        L: 2,
        H: 1,
        V: 1,
        S: 4,
        C: 6
      }, c = a.cmds, p = a.crds; n < t.length; ) {
        var u = t[n];
        if (n++, "z" == u) c.push("Z"), r = i, s = o; else for (var d = u.toUpperCase(), m = l[d], h = e.SVG._reps(t, n, m), f = 0; f < h; f++) {
          var g = 0, v = 0;
          if (u != d && (g = r, v = s), "M" == d) r = g + t[n++], s = v + t[n++], c.push("M"), 
          p.push(r, s), i = r, o = s; else if ("L" == d) r = g + t[n++], s = v + t[n++], c.push("L"), 
          p.push(r, s); else if ("H" == d) r = g + t[n++], c.push("L"), p.push(r, s); else if ("V" == d) s = v + t[n++], 
          c.push("L"), p.push(r, s); else if ("C" == d) {
            var y = g + t[n++], b = v + t[n++], w = g + t[n++], x = v + t[n++], k = g + t[n++], q = v + t[n++];
            c.push("C"), p.push(y, b, w, x, k, q), r = k, s = q;
          } else if ("S" == d) {
            var _ = Math.max(p.length - 4, 0);
            y = r + r - p[_], b = s + s - p[_ + 1], w = g + t[n++], x = v + t[n++], k = g + t[n++], 
            q = v + t[n++];
            c.push("C"), p.push(y, b, w, x, k, q), r = k, s = q;
          } else console.log("Unknown SVG command " + u);
        }
      }
    }, e.SVG._reps = function(e, t, a) {
      for (var n = t; n < e.length && "string" != typeof e[n]; ) n += a;
      return (n - t) / a;
    }, null == e && (e = {}), null == e.U && (e.U = {}), e.U.codeToGlyph = function(e, t) {
      var a = e.cmap, n = -1;
      if (null != a.p0e4 ? n = a.p0e4 : null != a.p3e1 ? n = a.p3e1 : null != a.p1e0 && (n = a.p1e0), 
      -1 == n) throw "no familiar platform and encoding!";
      var r = a.tables[n];
      if (0 == r.format) return t >= r.map.length ? 0 : r.map[t];
      if (4 == r.format) {
        for (var s = -1, i = 0; i < r.endCount.length; i++) if (t <= r.endCount[i]) {
          s = i;
          break;
        }
        if (-1 == s) return 0;
        if (r.startCount[s] > t) return 0;
        return 65535 & (0 != r.idRangeOffset[s] ? r.glyphIdArray[t - r.startCount[s] + (r.idRangeOffset[s] >> 1) - (r.idRangeOffset.length - s)] : t + r.idDelta[s]);
      }
      if (12 == r.format) {
        if (t > r.groups[r.groups.length - 1][1]) return 0;
        for (i = 0; i < r.groups.length; i++) {
          var o = r.groups[i];
          if (o[0] <= t && t <= o[1]) return o[2] + (t - o[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + r.format;
    }, e.U.glyphToPath = function(t, a) {
      var n = {
        cmds: [],
        crds: []
      };
      if (t.SVG && t.SVG.entries[a]) {
        var r = t.SVG.entries[a];
        return null == r ? n : ("string" == typeof r && (r = e.SVG.toPath(r), t.SVG.entries[a] = r), 
        r);
      }
      if (t.CFF) {
        var s = {
          x: 0,
          y: 0,
          stack: [],
          nStems: 0,
          haveWidth: false,
          width: t.CFF.Private ? t.CFF.Private.defaultWidthX : 0,
          open: false
        };
        e.U._drawCFF(t.CFF.CharStrings[a], s, t.CFF, n);
      } else t.glyf && e.U._drawGlyf(a, t, n);
      return n;
    }, e.U._drawGlyf = function(t, a, n) {
      var r = a.glyf[t];
      null == r && (r = a.glyf[t] = e.glyf._parseGlyf(a, t)), null != r && (r.noc > -1 ? e.U._simpleGlyph(r, n) : e.U._compoGlyph(r, a, n));
    }, e.U._simpleGlyph = function(t, a) {
      for (var n = 0; n < t.noc; n++) {
        for (var r = 0 == n ? 0 : t.endPts[n - 1] + 1, s = t.endPts[n], i = r; i <= s; i++) {
          var o = i == r ? s : i - 1, l = i == s ? r : i + 1, c = 1 & t.flags[i], p = 1 & t.flags[o], u = 1 & t.flags[l], d = t.xs[i], m = t.ys[i];
          if (i == r) if (c) {
            if (!p) {
              e.U.P.moveTo(a, d, m);
              continue;
            }
            e.U.P.moveTo(a, t.xs[o], t.ys[o]);
          } else p ? e.U.P.moveTo(a, t.xs[o], t.ys[o]) : e.U.P.moveTo(a, (t.xs[o] + d) / 2, (t.ys[o] + m) / 2);
          c ? p && e.U.P.lineTo(a, d, m) : u ? e.U.P.qcurveTo(a, d, m, t.xs[l], t.ys[l]) : e.U.P.qcurveTo(a, d, m, (d + t.xs[l]) / 2, (m + t.ys[l]) / 2);
        }
        e.U.P.closePath(a);
      }
    }, e.U._compoGlyph = function(t, a, n) {
      for (var r = 0; r < t.parts.length; r++) {
        var s = {
          cmds: [],
          crds: []
        }, i = t.parts[r];
        e.U._drawGlyf(i.glyphIndex, a, s);
        for (var o = i.m, l = 0; l < s.crds.length; l += 2) {
          var c = s.crds[l], p = s.crds[l + 1];
          n.crds.push(c * o.a + p * o.b + o.tx), n.crds.push(c * o.c + p * o.d + o.ty);
        }
        for (l = 0; l < s.cmds.length; l++) n.cmds.push(s.cmds[l]);
      }
    }, e.U._getGlyphClass = function(t, a) {
      var n = e._lctf.getInterval(a, t);
      return -1 == n ? 0 : a[n + 2];
    }, e.U.getPairAdjustment = function(t, a, n) {
      if (t.GPOS) {
        for (var r = null, s = 0; s < t.GPOS.featureList.length; s++) {
          var i = t.GPOS.featureList[s];
          if ("kern" == i.tag) for (var o = 0; o < i.tab.length; o++) 2 == t.GPOS.lookupList[i.tab[o]].ltype && (r = t.GPOS.lookupList[i.tab[o]]);
        }
        if (r) for (s = 0; s < r.tabs.length; s++) {
          var l = r.tabs[s], c = e._lctf.coverageIndex(l.coverage, a);
          if (-1 != c) {
            if (1 == l.format) {
              var p = l.pairsets[c];
              for (o = 0; o < p.length; o++) p[o].gid2 == n && (m = p[o]);
              if (null == m) continue;
            } else if (2 == l.format) var u = e.U._getGlyphClass(a, l.classDef1), d = e.U._getGlyphClass(n, l.classDef2), m = l.matrix[u][d];
            return m.val1[2];
          }
        }
      }
      if (t.kern) {
        var h = t.kern.glyph1.indexOf(a);
        if (-1 != h) {
          var f = t.kern.rval[h].glyph2.indexOf(n);
          if (-1 != f) return t.kern.rval[h].vals[f];
        }
      }
      return 0;
    }, e.U.stringToGlyphs = function(t, a) {
      for (var n = [], r = 0; r < a.length; r++) {
        var s = a.codePointAt(r);
        s > 65535 && r++, n.push(e.U.codeToGlyph(t, s));
      }
      var i = t.GSUB;
      if (null == i) return n;
      for (var o = i.lookupList, l = i.featureList, c = '\n\t" ,.:;!?()  \u060c', p = "\u0622\u0623\u0624\u0625\u0627\u0629\u062f\u0630\u0631\u0632\u0648\u0671\u0672\u0673\u0675\u0676\u0677\u0688\u0689\u068a\u068b\u068c\u068d\u068e\u068f\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u06c0\u06c3\u06c4\u06c5\u06c6\u06c7\u06c8\u06c9\u06ca\u06cb\u06cd\u06cf\u06d2\u06d3\u06d5\u06ee\u06ef\u0710\u0715\u0716\u0717\u0718\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759\u075a\u075b\u076b\u076c\u0771\u0773\u0774\u0778\u0779\u0840\u0846\u0847\u0849\u0854\u0867\u0869\u086a\u08aa\u08ab\u08ac\u08ae\u08b1\u08b2\u08b9\u0ac5\u0ac7\u0ac9\u0aca\u0ace\u0acf\u0ad0\u0ad1\u0ad2\u0add\u0ae1\u0ae4\u0aef\u0b81\u0b83\u0b84\u0b85\u0b89\u0b8c\u0b8e\u0b8f\u0b91\u0ba9\u0baa\u0bab\u0bac", u = 0; u < n.length; u++) {
        var d = n[u], m = 0 == u || -1 != c.indexOf(a[u - 1]), h = u == n.length - 1 || -1 != c.indexOf(a[u + 1]);
        m || -1 == p.indexOf(a[u - 1]) || (m = true), h || -1 == p.indexOf(a[u]) || (h = true), 
        h || -1 == "\ua872\u0acd\u0ad7".indexOf(a[u + 1]) || (h = true), m || -1 == "\ua872\u0acd\u0ad7".indexOf(a[u]) || (m = true);
        var f = null;
        f = m ? h ? "isol" : "init" : h ? "fina" : "medi";
        for (var g = 0; g < l.length; g++) if (l[g].tag == f) for (var v = 0; v < l[g].tab.length; v++) {
          1 == (x = o[l[g].tab[v]]).ltype && e.U._applyType1(n, u, x);
        }
      }
      var y = [ "rlig", "liga", "mset" ];
      for (u = 0; u < n.length; u++) {
        d = n[u];
        var b = Math.min(3, n.length - u - 1);
        for (g = 0; g < l.length; g++) {
          var w = l[g];
          if (-1 != y.indexOf(w.tag)) for (v = 0; v < w.tab.length; v++) for (var x = o[w.tab[v]], k = 0; k < x.tabs.length; k++) if (null != x.tabs[k]) {
            var q = e._lctf.coverageIndex(x.tabs[k].coverage, d);
            if (-1 != q) if (4 == x.ltype) for (var _ = x.tabs[k].vals[q], A = 0; A < _.length; A++) {
              var T = _[A], C = T.chain.length;
              if (!(C > b)) {
                for (var S = true, I = 0; I < C; I++) T.chain[I] != n[u + (1 + I)] && (S = false);
                if (S) {
                  n[u] = T.nglyph;
                  for (I = 0; I < C; I++) n[u + I + 1] = -1;
                }
              }
            } else if (5 == x.ltype) {
              var E = x.tabs[k];
              if (2 != E.fmt) continue;
              var U = e._lctf.getInterval(E.cDef, d), P = E.cDef[U + 2], H = E.scset[P];
              for (r = 0; r < H.length; r++) {
                var L = H[r], j = L.input;
                if (!(j.length > b)) {
                  for (S = true, I = 0; I < j.length; I++) {
                    var $ = e._lctf.getInterval(E.cDef, n[u + 1 + I]);
                    if (-1 == U && E.cDef[$ + 2] != j[I]) {
                      S = false;
                      break;
                    }
                  }
                  if (S) {
                    var z = L.substLookupRecords;
                    for (A = 0; A < z.length; A += 2) z[A], z[A + 1];
                  }
                }
              }
            }
          }
        }
      }
      return n;
    }, e.U._applyType1 = function(t, a, n) {
      for (var r = t[a], s = 0; s < n.tabs.length; s++) {
        var i = n.tabs[s], o = e._lctf.coverageIndex(i.coverage, r);
        -1 != o && (1 == i.fmt ? t[a] = t[a] + i.delta : t[a] = i.newg[o]);
      }
    }, e.U.glyphsToPath = function(t, a, n) {
      for (var r = {
        cmds: [],
        crds: []
      }, s = 0, i = 0; i < a.length; i++) {
        var o = a[i];
        if (-1 != o) {
          for (var l = i < a.length - 1 && -1 != a[i + 1] ? a[i + 1] : 0, c = e.U.glyphToPath(t, o), p = 0; p < c.crds.length; p += 2) r.crds.push(c.crds[p] + s), 
          r.crds.push(c.crds[p + 1]);
          n && r.cmds.push(n);
          for (p = 0; p < c.cmds.length; p++) r.cmds.push(c.cmds[p]);
          n && r.cmds.push("X"), s += t.hmtx.aWidth[o], i < a.length - 1 && (s += e.U.getPairAdjustment(t, o, l));
        }
      }
      return r;
    }, e.U.pathToSVG = function(e, t) {
      null == t && (t = 5);
      for (var a = [], n = 0, r = {
        M: 2,
        L: 2,
        Q: 4,
        C: 6
      }, s = 0; s < e.cmds.length; s++) {
        var i = e.cmds[s], o = n + (r[i] ? r[i] : 0);
        for (a.push(i); n < o; ) {
          var l = e.crds[n++];
          a.push(parseFloat(l.toFixed(t)) + (n == o ? "" : " "));
        }
      }
      return a.join("");
    }, e.U.pathToContext = function(e, t) {
      for (var a = 0, n = e.crds, r = 0; r < e.cmds.length; r++) {
        var s = e.cmds[r];
        "M" == s ? (t.moveTo(n[a], n[a + 1]), a += 2) : "L" == s ? (t.lineTo(n[a], n[a + 1]), 
        a += 2) : "C" == s ? (t.bezierCurveTo(n[a], n[a + 1], n[a + 2], n[a + 3], n[a + 4], n[a + 5]), 
        a += 6) : "Q" == s ? (t.quadraticCurveTo(n[a], n[a + 1], n[a + 2], n[a + 3]), a += 4) : "#" == s.charAt(0) ? (t.beginPath(), 
        t.fillStyle = s) : "Z" == s ? t.closePath() : "X" == s && t.fill();
      }
    }, e.U.P = {}, e.U.P.moveTo = function(e, t, a) {
      e.cmds.push("M"), e.crds.push(t, a);
    }, e.U.P.lineTo = function(e, t, a) {
      e.cmds.push("L"), e.crds.push(t, a);
    }, e.U.P.curveTo = function(e, t, a, n, r, s, i) {
      e.cmds.push("C"), e.crds.push(t, a, n, r, s, i);
    }, e.U.P.qcurveTo = function(e, t, a, n, r) {
      e.cmds.push("Q"), e.crds.push(t, a, n, r);
    }, e.U.P.closePath = function(e) {
      e.cmds.push("Z");
    }, e.U._drawCFF = function(t, a, n, r) {
      for (var s = a.stack, i = a.nStems, o = a.haveWidth, l = a.width, c = a.open, p = 0, u = a.x, d = a.y, m = 0, h = 0, f = 0, g = 0, v = 0, y = 0, b = 0, w = 0, x = 0, k = 0, q = {
        val: 0,
        size: 0
      }; p < t.length; ) {
        e.CFF.getCharString(t, p, q);
        var _ = q.val;
        if (p += q.size, "o1" == _ || "o18" == _) s.length % 2 != 0 && !o && (l = s.shift() + n.Private.nominalWidthX), 
        i += s.length >> 1, s.length = 0, o = true; else if ("o3" == _ || "o23" == _) {
          s.length % 2 != 0 && !o && (l = s.shift() + n.Private.nominalWidthX), i += s.length >> 1, 
          s.length = 0, o = true;
        } else if ("o4" == _) s.length > 1 && !o && (l = s.shift() + n.Private.nominalWidthX, 
        o = true), c && e.U.P.closePath(r), d += s.pop(), e.U.P.moveTo(r, u, d), c = true; else if ("o5" == _) for (;s.length > 0; ) u += s.shift(), 
        d += s.shift(), e.U.P.lineTo(r, u, d); else if ("o6" == _ || "o7" == _) for (var A = s.length, T = "o6" == _, C = 0; C < A; C++) {
          var S = s.shift();
          T ? u += S : d += S, T = !T, e.U.P.lineTo(r, u, d);
        } else if ("o8" == _ || "o24" == _) {
          A = s.length;
          for (var I = 0; I + 6 <= A; ) m = u + s.shift(), h = d + s.shift(), f = m + s.shift(), 
          g = h + s.shift(), u = f + s.shift(), d = g + s.shift(), e.U.P.curveTo(r, m, h, f, g, u, d), 
          I += 6;
          "o24" == _ && (u += s.shift(), d += s.shift(), e.U.P.lineTo(r, u, d));
        } else {
          if ("o11" == _) break;
          if ("o1234" == _ || "o1235" == _ || "o1236" == _ || "o1237" == _) "o1234" == _ && (h = d, 
          f = (m = u + s.shift()) + s.shift(), k = g = h + s.shift(), y = g, w = d, u = (b = (v = (x = f + s.shift()) + s.shift()) + s.shift()) + s.shift(), 
          e.U.P.curveTo(r, m, h, f, g, x, k), e.U.P.curveTo(r, v, y, b, w, u, d)), "o1235" == _ && (m = u + s.shift(), 
          h = d + s.shift(), f = m + s.shift(), g = h + s.shift(), x = f + s.shift(), k = g + s.shift(), 
          v = x + s.shift(), y = k + s.shift(), b = v + s.shift(), w = y + s.shift(), u = b + s.shift(), 
          d = w + s.shift(), s.shift(), e.U.P.curveTo(r, m, h, f, g, x, k), e.U.P.curveTo(r, v, y, b, w, u, d)), 
          "o1236" == _ && (m = u + s.shift(), h = d + s.shift(), f = m + s.shift(), k = g = h + s.shift(), 
          y = g, b = (v = (x = f + s.shift()) + s.shift()) + s.shift(), w = y + s.shift(), 
          u = b + s.shift(), e.U.P.curveTo(r, m, h, f, g, x, k), e.U.P.curveTo(r, v, y, b, w, u, d)), 
          "o1237" == _ && (m = u + s.shift(), h = d + s.shift(), f = m + s.shift(), g = h + s.shift(), 
          x = f + s.shift(), k = g + s.shift(), v = x + s.shift(), y = k + s.shift(), b = v + s.shift(), 
          w = y + s.shift(), Math.abs(b - u) > Math.abs(w - d) ? u = b + s.shift() : d = w + s.shift(), 
          e.U.P.curveTo(r, m, h, f, g, x, k), e.U.P.curveTo(r, v, y, b, w, u, d)); else if ("o14" == _) {
            if (s.length > 0 && !o && (l = s.shift() + n.nominalWidthX, o = true), 4 == s.length) {
              var E = s.shift(), U = s.shift(), P = s.shift(), H = s.shift(), L = e.CFF.glyphBySE(n, P), j = e.CFF.glyphBySE(n, H);
              e.U._drawCFF(n.CharStrings[L], a, n, r), a.x = E, a.y = U, e.U._drawCFF(n.CharStrings[j], a, n, r);
            }
            c && (e.U.P.closePath(r), c = false);
          } else if ("o19" == _ || "o20" == _) {
            s.length % 2 != 0 && !o && (l = s.shift() + n.Private.nominalWidthX), i += s.length >> 1, 
            s.length = 0, o = true, p += i + 7 >> 3;
          } else if ("o21" == _) s.length > 2 && !o && (l = s.shift() + n.Private.nominalWidthX, 
          o = true), d += s.pop(), u += s.pop(), c && e.U.P.closePath(r), e.U.P.moveTo(r, u, d), 
          c = true; else if ("o22" == _) s.length > 1 && !o && (l = s.shift() + n.Private.nominalWidthX, 
          o = true), u += s.pop(), c && e.U.P.closePath(r), e.U.P.moveTo(r, u, d), c = true; else if ("o25" == _) {
            for (;s.length > 6; ) u += s.shift(), d += s.shift(), e.U.P.lineTo(r, u, d);
            m = u + s.shift(), h = d + s.shift(), f = m + s.shift(), g = h + s.shift(), u = f + s.shift(), 
            d = g + s.shift(), e.U.P.curveTo(r, m, h, f, g, u, d);
          } else if ("o26" == _) for (s.length % 2 && (u += s.shift()); s.length > 0; ) m = u, 
          h = d + s.shift(), u = f = m + s.shift(), d = (g = h + s.shift()) + s.shift(), e.U.P.curveTo(r, m, h, f, g, u, d); else if ("o27" == _) for (s.length % 2 && (d += s.shift()); s.length > 0; ) h = d, 
          f = (m = u + s.shift()) + s.shift(), g = h + s.shift(), u = f + s.shift(), d = g, 
          e.U.P.curveTo(r, m, h, f, g, u, d); else if ("o10" == _ || "o29" == _) {
            var $ = "o10" == _ ? n.Private : n;
            if (0 == s.length) console.log("error: empty stack"); else {
              var z = s.pop(), M = $.Subrs[z + $.Bias];
              a.x = u, a.y = d, a.nStems = i, a.haveWidth = o, a.width = l, a.open = c, e.U._drawCFF(M, a, n, r), 
              u = a.x, d = a.y, i = a.nStems, o = a.haveWidth, l = a.width, c = a.open;
            }
          } else if ("o30" == _ || "o31" == _) {
            var O = s.length, F = (I = 0, "o31" == _);
            for (I += O - (A = -3 & O); I < A; ) F ? (h = d, f = (m = u + s.shift()) + s.shift(), 
            d = (g = h + s.shift()) + s.shift(), A - I == 5 ? (u = f + s.shift(), I++) : u = f, 
            F = false) : (m = u, h = d + s.shift(), f = m + s.shift(), g = h + s.shift(), u = f + s.shift(), 
            A - I == 5 ? (d = g + s.shift(), I++) : d = g, F = true), e.U.P.curveTo(r, m, h, f, g, u, d), 
            I += 4;
          } else {
            if ("o" == (_ + "").charAt(0)) throw console.log("Unknown operation: " + _, t), 
            _;
            s.push(_);
          }
        }
      }
      a.x = u, a.y = d, a.nStems = i, a.haveWidth = o, a.width = l, a.open = c;
    }, Xe = e;
  }();

  const et = getDefaultExportFromCjs(Ze), decode = async () => {
    var e;
    const t = W.document.querySelectorAll("style");
    let a = null;
    if (t.forEach((e => {
      var t;
      -1 !== (null == (t = e.textContent) ? void 0 : t.indexOf("font-cxsecret")) && (a = e);
    })), !a) return true;
    const n = null == (e = a.textContent) ? void 0 : e.match(/base64,([\w\W]+?)'/);
    if (!n) return;
    const r = base64ToUint8Array(n[1]), s = et.parse(r);
    let i = await ttfDownloadJson("https://www.forestpolice.org/ttf/2.0/table.json") || await ttfDownloadJson("https://jsd.vxo.im/gh/chengbianruan/staticfile/c.json") || await ttfDownloadJson("https://cdn.jsdelivr.net/gh/chengbianruan/staticfile/c.json");
    if (!i) return false;
    let o = {};
    for (let l = 19968; l < 40870; l++) {
      let e = et.U.codeToGlyph(s, l);
      e && (e = et.U.glyphToPath(s, e), e = somd5(JSON.stringify(e)).slice(24), o[l] = i[e]);
    }
    return W.document.querySelectorAll(".font-cxsecret").forEach((e => {
      let t = e.innerHTML;
      Object.keys(o).forEach((e => {
        const a = new RegExp(String.fromCharCode(e), "g");
        t = t.replace(a, String.fromCharCode(o[e]));
      })), e.innerHTML = t, e.classList.remove("font-cxsecret");
    })), true;
  }, base64ToUint8Array = e => {
    const t = atob(e), a = new Uint8Array(t.length);
    for (let n = 0; n < t.length; n++) a[n] = t.charCodeAt(n);
    return a;
  }, cleanChaoxingQuestionLiTitle = (e, t, a) => {
    const n = e || "", r = t || "";
    return a(r && n.includes(r) ? n.split(r).slice(1).join(r).trim() : n).trim();
  }, getChaoxingAnswerIndex = e => {
    const t = (e || "").trim().toUpperCase();
    if (/^[A-Z]$/.test(t)) return t.charCodeAt(0) - 65;
    if (/^\d+$/.test(t)) {
      const e = Number.parseInt(t, 10) - 1;
      return e >= 0 ? e : null;
    }
    return null;
  }, mapChaoxingChoiceLettersToOptions = (e, t) => (e || "").trim().toUpperCase().split("").map((e => {
    const a = getChaoxingAnswerIndex(e);
    return null == a ? void 0 : t[a];
  })).filter((e => void 0 !== e && "" !== e)), normalizeChaoxingSubjectiveAnswer = (e, t = 10) => {
    const a = (e || "").replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim();
    return a.length < t ? null : [ a ];
  }, getChaoxingExamOutLinkTarget = e => {
    let t;
    try {
      t = new URL(e);
    } catch {
      return "";
    }
    if ("i.mooc.chaoxing.com" !== t.hostname) return "";
    if (!t.pathname.includes("/space/out_link.shtml")) return "";
    const a = t.searchParams.get("burl");
    if (!a) return "";
    try {
      const e = new URL(a), t = "chaoxing.com" === e.hostname || e.hostname.endsWith(".chaoxing.com"), n = e.pathname.includes("/exam-ans/exam/test/");
      return t && n ? e.href : "";
    } catch {
      return "";
    }
  }, redirectCurrentChaoxingExamOutLink = () => {
    ((e, t) => {
      const a = getChaoxingExamOutLinkTarget(e);
      !!a && t(a);
    })(location.href, (e => {
      W.location.href = e;
    }));
  }, tt = [ {
    type: "hook",
    name: "\u5b66\u4e60\u901a\u8003\u8bd5\u5916\u94fe\u8df3\u8f6c",
    match: () => "" !== getChaoxingExamOutLinkTarget(location.href),
    hook: redirectCurrentChaoxingExamOutLink,
    main: redirectCurrentChaoxingExamOutLink
  }, {
    type: "ask",
    name: "\u5b66\u4e60\u901a\u968f\u5802\u7ec3\u4e60",
    match: () => location.href.includes("/page/quiz/stu/answerQuestion2"),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
    minDelay: 100,
    answerDelay: 1e3,
    question: {
      html: ".left-question-list>.question-item",
      question: ".html-content-box",
      options: "ul.option-list>li",
      type: ".grey-text",
      workType: "stlx",
      pageType: "cx"
    },
    init: async () => {},
    ischecked: isParentChecked,
    questionHook: e => (e.options = removeStartChar(e.options), e.type = typeMatch(D(e.html).find(".grey-text").text()), 
    e)
  }, {
    type: "save",
    name: "\u5b66\u4e60\u901a\u8003\u8bd5\u65b0\u7248\u6536\u5f55",
    match: () => location.href.includes("work/view") || location.href.includes("test/reVersionPaperMarkContentNew"),
    question: {
      html: ".questionLi",
      question: "h3.mark_name",
      options: "ul.mark_letter.colorDeep > li",
      type: ".colorShallow",
      workType: "zj",
      pageType: "cx"
    },
    answerHook: e => {
      let t = removeHtml(D(e.html).find('span[class="colorShallow"]').html());
      if ("" === t) return null;
      let a = t.match(/^\((.+?)\)/);
      if (null === a) return null;
      e.type = a[1].split(",")[0], e.question = titleClean(e.question.split(t)[1].trim()).trim(), 
      e.options = removeStartChar(e.options);
      const n = D(e.html).find(".mark_score>.totalScore>i").text(), r = t.match(/(\d+(\.\d+)?)/);
      let s, i = D(e.html).find(".marking_dui").length > 0 || Number(n) == ((null == r ? void 0 : r[0]) || 0) && 0 != Number(n), o = typeMatch(t);
      if (!i) switch (o) {
       case "0":
       case "1":
       case "3":
        0 != Number(n) && (i = true);
      }
      switch (o) {
       case "0":
       case "1":
        e.type = o, e.answer = mapChaoxingChoiceLettersToOptions(D(e.html).find(".mark_answer>div>span.colorGreen:eq(0)").text().replace("\u6b63\u786e\u7b54\u6848:", ""), e.options), 
        0 === e.answer.length && i && (e.answer = mapChaoxingChoiceLettersToOptions(D(e.html).find(".mark_answer>div>span.colorDeep:eq(0)").text().replace("\u6211\u7684\u7b54\u6848:", ""), e.options));
        break;

       case "3":
        if (e.type = "3", e.options = [], e.answer = judgeAnswer(D(e.html).find(".mark_answer>div>span.colorGreen:eq(0)").text().replace("\u6b63\u786e\u7b54\u6848", "")), 
        e.answer, 0 === e.answer.length) {
          if (s = removeHtml(D(e.html).find(".mark_answer>div>span.colorDeep:eq(0)").html()), 
          e.answer = judgeAnswer(s), 0 === e.answer.length) return null;
          if (0 == Number(n) && !i && "3" == o) return null;
          i || (e.answer = "\u6b63\u786e" === e.answer[0] ? [ "\u9519\u8bef" ] : [ "\u6b63\u786e" ]);
        }
        break;

       case "4":
        if (e.type = "4", e.answer = normalizeChaoxingSubjectiveAnswer(removeHtml(D(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html())), 
        null == e.answer) return null;
        break;

       case "5":
        if (e.type = "5", e.answer = normalizeChaoxingSubjectiveAnswer(removeHtml(D(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html())), 
        null == e.answer) return null;
        break;

       case "7":
        if (e.type = "7", e.answer = normalizeChaoxingSubjectiveAnswer(removeHtml(D(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html())), 
        null == e.answer) return null;
        break;

       case "6":
        if (e.type = "6", e.answer = normalizeChaoxingSubjectiveAnswer(removeHtml(D(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html())), 
        null == e.answer) return null;
        break;

       case "2":
        if (e.type = "2", e.answer = D(e.html).find(".mark_answer>div>.colorGreen:eq(0)>dd").map(((e, t) => removeHtml(D(t).html()).replace(`(${e + 1})`, "").trim())).get(), 
        0 == e.answer.length) {
          const t = D(e.html).find(".mark_answer>div>.colorDeep:eq(0)>dd").map(((e, t) => removeHtml(D(t).html()).replace(`(${e + 1})`, "").trim())).get();
          D(e.html).find(".mark_answer>div>.colorDeep:eq(0)>dd>.marking_dui").length == t.length && (e.answer = t);
        }
        break;

       default:
        return null;
      }
      return e;
    },
    paper: async e => {
      const t = {
        platform: "cx"
      }, a = D("#courseId").val(), n = (W.document.body.innerHTML.match(/(?:examId|relationId)=(\d+)/) || [])[1] || "", r = `https://mobilelearn.chaoxing.com/v2/apis/class/getClassDetail?courseId=${a}&classId=${D("#classId").val()}`;
      await request(r, "GET").then((e => {
        const a = JSON.parse(e[0].responseText).data.course.data[0];
        t.name = a.name, t.info = {}, t.info.imageurl = a.imageurl;
      })), t.hash = a, t.info = {}, t.chapter = [ {
        hash: `${n}`,
        name: D(".mark_title").text().trim(),
        question: e
      } ], Je.setPaper(t.hash, t);
    }
  }, {
    type: "hook",
    name: "hook",
    match: location.href.includes("work/selectWorkQuestionYiPiYue") && location.href.includes("mooc2=0"),
    main: e => {
      location.href.includes("mooc2=0") ? W.location.href = location.href.replace("mooc2=0", "mooc2=1") : W.location.href = location.href + "&mooc2=1";
    }
  }, {
    type: "save",
    name: "\u5b66\u4e60\u901a\u4f5c\u4e1a\u6536\u5f55\u65b0",
    match: () => location.href.includes("work/selectWorkQuestionYiPiYue") && location.href.includes("mooc2=1"),
    question: {
      html: ".TiMu",
      question: ".Zy_TItle .clearfix",
      options: "ul.Zy_ulTop li",
      type: ".newZy_TItle",
      workType: "zj",
      pageType: "cx"
    },
    answerHook: e => {
      e.type = D(e.html).find(".newZy_TItle").text().replace(/\u3010|\u3011/g, "").trim();
      let t, a = D(e.html).find(".marking_dui").length > 0;
      switch (removeHtml(D(e.html).find(".Py_addpy:eq(0)").html()), e.question = titleClean(e.question).trim(), 
      e.type) {
       case "\u5355\u9009\u9898":
       case "\u591a\u9009\u9898":
        e.type = "\u5355\u9009\u9898" === e.type ? "0" : "1", e.options = D(e.html).find("ul.Zy_ulTop li").map(((e, t) => {
          let a = D(t).find("i.fl").text().trim(), n = removeHtml(D(t).html());
          return "" === a ? n.trim() : removeKnownOptionPrefix(n, a);
        })).get(), e.answer = mapChaoxingChoiceLettersToOptions(D(e.html).find(".correctAnswer >.fl.answerCon").text(), e.options), 
        0 === e.answer.length && a && (e.answer = mapChaoxingChoiceLettersToOptions(D(e.html).find(".myAnswer > .fl.answerCon").text(), e.options));
        break;

       case "\u5224\u65ad\u9898":
        if (e.type = "3", e.answer = D(e.html).find(".correctAnswer > .fl.answerCon").text().trim().split("").map((e => e.includes("\u6b63\u786e") || e.includes("\u5bf9") || e.includes("\u221a") ? "\u6b63\u786e" : e.includes("\u9519\u8bef") || e.includes("\u9519") || e.includes("\xd7") ? "\u9519\u8bef" : null)).filter((e => null !== e)), 
        0 === e.answer.length) {
          t = removeHtml(D(e.html).find(".fl.answerCon").html());
          let [a, n] = [ ".marking_dui", ".marking_cuo" ].map((t => D(e.html).find(t).length));
          if (a + n === 0) return null;
          if (t.includes("\u6b63\u786e") || t.includes("\u5bf9") || t.includes("\u221a")) e.answer = [ "\u6b63\u786e" ]; else {
            if (!(t.includes("\u9519\u8bef") || t.includes("\u9519") || t.includes("\xd7"))) return null;
            e.answer = [ "\u9519\u8bef" ];
          }
          0 === a && 0 !== n && (e.answer = "\u6b63\u786e" === e.answer[0] ? "\u9519\u8bef" : "\u6b63\u786e");
        }
        break;

       case "\u586b\u7a7a\u9898":
        e.type = "2", e.answer = D(e.html).find(".correctAnswerBx>.correctAnswer>p:not(.clear)").map(((e, t) => removeHtml(D(t).html()).replace(`(${e + 1})`, "").trim())).get().filter((e => "" !== e)), 
        0 == e.answer.length && (e.answer = D(e.html).find(".myAllAnswerBx>.myAnswerBx>.myAnswer").map(((e, t) => removeHtml(D(t).html()).replace(/\u7b2c[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\u7a7a\uff1a/, "").trim())).get(), 
        e.answer.length !== D(e.html).find(".marking_dui").length && (e.answer = []));
        break;

       case "\u5206\u5f55\u9898":
        if (e.type = "9", e.answer = D(e.html).find(".correctAnswerBx>.correctAnswer>p:not(.clear)").map(((e, t) => removeHtml(D(t).html()))).get().filter((e => "" !== e)), 
        e.answer.length != D(e.html).find(".CorrectOrNot").length) {
          if (D(e.html).find(".marking_cuo").length > 0) return null;
          if (e.answer = D(e.html).find(".myAnswerBx>.myAnswer>p:not(.clear)").map(((e, t) => removeHtml(D(t).html()))).get().filter((e => "" !== e)), 
          e.answer.length != D(e.html).find(".CorrectOrNot").length) return null;
        }
        e.answer;
        break;

       case "\u8fde\u7ebf\u9898":
        e.type = "11";
        let n = D(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get(), r = D(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get();
        t = D(e.html).find(".correctAnswer >.fl.answerCon >.collectAnswer").map(((e, t) => removeHtml(D(t).text()))).get(), 
        e.options = [ n, r ];
        let s = {};
        t.forEach((e => {
          let [t, a] = e.split("-");
          const i = getChaoxingAnswerIndex(t), o = getChaoxingAnswerIndex(a);
          null != i && null != o && null != n[i] && null != r[o] && (s[n[i]] = r[o]);
        })), e.answer = s, e.answer;
        break;

       case "\u9009\u62e9\u9898":
        {
          const t = D(e.html).find("ul.Zy_ulTop > li");
          if (0 === t.length) return null;
          const a = D(e.html).find(".correctAnswerBx .correctAnswer .answerCon").text(), n = {};
          for (const e of a.matchAll(/\((\d+)\)\s*([A-Z]+)/g)) n[parseInt(e[1], 10)] = e[2];
          const r = [];
          let s = false;
          if (t.each(((e, t) => {
            if (s) return;
            const a = D(t).find("label.selectLabel span.selectItem > p").map(((e, t) => removeHtml(D(t).html()))).get(), i = n[e + 1], o = a.length && i ? mapChaoxingChoiceLettersToOptions(i, a) : [];
            0 !== o.length ? r.push({
              type: "0",
              question: `\u7b2c${e + 1}\u7a7a`,
              options: a,
              answer: o
            }) : s = true;
          })), s || 0 === r.length) return null;
          e.answer = r.map((e => e.answer)), e.options = r.map((({answer: e, ...t}) => t)), 
          e.type = "15", e.answer;
          break;
        }

       case "\u9605\u8bfb\u7406\u89e3":
        const i = D(e.html).find(".readCompreHensionItem").map(((e, t) => {
          let a = typeMatch(D(t).find("i.index").text()), n = removeHtml(D(t).find(".clearfix").html()), r = D(t).find("ul.Zy_ulTop>li").map(((e, t) => removeHtml(D(t).html()))).get();
          r = removeOptionsStartChar(r);
          let s = removeHtml(D(t).find(".correctAnswerBx>.correctAnswer>.answerCon").text()), i = [];
          switch (a) {
           case "0":
           case "1":
            i = mapChaoxingChoiceLettersToOptions(s, r);
            break;

           default:
            return null;
          }
          return 0 === i.length ? null : {
            type: a,
            question: n,
            options: r,
            answer: i
          };
        })).get();
        if (null == i || 0 == i.length) return null;
        e.answer = i.map((e => e.answer)), e.options = i.map((e => (delete e.answer, e))), 
        e.type = "15";
        break;

       default:
        return e.type, null;
      }
      return e;
    },
    paper: async e => {
      const t = {
        platform: "cx"
      }, a = W.courseId, n = W.jobid, r = `https://mobilelearn.chaoxing.com/v2/apis/class/getClassDetail?courseId=${a}&classId=${W.classId}`;
      await request(r, "GET").then((e => {
        const a = JSON.parse(e[0].responseText).data.course.data[0];
        t.name = a.name, t.info = {}, t.info.imageurl = a.imageurl;
      })), t.hash = a, t.info = {}, t.chapter = [ {
        hash: `${n}`,
        name: D(".ceyan_name>h3").text().trim(),
        question: e
      } ], Je.setPaper(t.hash, t);
    }
  }, {
    type: "ask",
    name: "\u5b66\u4e60\u901a\u65b0\u7248\u4f5c\u4e1a",
    match: () => /\/mooc2\/work\/dowork/i.test(location.pathname),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
    question: {
      html: ".questionLi",
      question: "h3",
      options: "ul:eq(0) li .after, .answer_p",
      type: "input[name^=answertype]:eq(0)",
      workType: "zy",
      pageType: "cx"
    },
    questionHook: e => {
      const t = removeHtml(D(e.html).find(".colorShallow").html());
      return e.question = cleanChaoxingQuestionLiTitle(e.question, t, titleClean), e.$options = D(e.html).find(".answerBg"), 
      e;
    },
    setAnswerHook: e => {
      qc(e.html), qc1(e.html);
    }
  }, {
    type: "ask",
    name: "\u5b66\u4e60\u901a\u65b0\u7248\u8003\u8bd5",
    match: () => /exam\/preview/i.test(location.pathname) || /exam\/test\/reVersionTestStartNew/i.test(location.pathname),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
    question: {
      html: ".questionLi",
      question: "h3",
      options: "ul:eq(0) li .after, .answer_p",
      type: "input[name^=type]:not([name=type])",
      workType: "ks",
      pageType: "cx"
    },
    questionHook: e => {
      const t = removeHtml(D(e.html).find(".colorShallow").html());
      if (e.question = cleanChaoxingQuestionLiTitle(e.question, t, titleClean), e.$options = D(e.html).find(".answerBg"), 
      "3" === e.type) e.options = [];
      return e;
    },
    setAnswerHook: e => {
      qc(e.html), qc1(e.html);
    },
    next: () => {
      D('.nextDiv .jb_btn:contains("\u4e0b\u4e00\u9898")').click();
    }
  }, {
    type: "ask",
    name: "\u5b66\u4e60\u901a\u65e7\u7248\u4f5c\u4e1a",
    match: () => /work\/doHomeWorkNew/i.test(location.pathname) && 0 == location.href.includes("mooc2=1"),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
    init: async () => {
      if (!(await decode())) return msg("\u9875\u9762\u89e3\u5bc6\u5931\u8d25\uff0c\u65e0\u6cd5\u7b54\u9898\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u53cd\u9988\u7ed9\u4f5c\u8005\u5427", "error"), 
      false;
    },
    question: {
      html: ".TiMu",
      question: ".clearfix.fontLabel",
      options: "ul:eq(0) li .after",
      type: "input[name^=answertype]:eq(0), .answer_p",
      workType: "zy",
      pageType: "cx"
    },
    questionHook: e => {
      switch (e.question = titleClean(e.question).trim(), e.$options = D(e.html).find(".fl.before"), 
      e.type) {
       case "3":
        e.options = D(e.html).find("ul:eq(0) li").map(((e, t) => D(t).find(".ri").length > 0 ? "\u6b63\u786e" : D(t).find(".wr").length > 0 ? "\u9519\u8bef" : isTrue(D(t).attr("aria-label") || "") ? "\u6b63\u786e" : isFalse(D(t).attr("aria-label") || "") ? "\u9519\u8bef" : void 0)).get(), 
        e.$options = D(e.html).find("ul>li");
        break;

       case "11":
        let t = D(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get(), a = D(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get();
        e.options = [ t, a ], e.$options = D(e.html).find("ul.thirdUlList>li:not(.groupTitile)");
      }
      return e;
    },
    setAnswerHook: e => {
      qc(e.html), qc1(e.html);
    },
    setAnswer: e => {
      switch (e.type) {
       case "11":
        return e.ques.$options.each(((t, a) => {
          var n, r, s;
          const i = null == (n = e.ques.options) ? void 0 : n[0], o = null == (r = e.ques.options) ? void 0 : r[1], l = null == (s = e.answer) ? void 0 : s[null == i ? void 0 : i[t]], c = Array.isArray(o) ? o.indexOf(l) : -1;
          if (c < 0) return void (null == i || i[t]);
          const p = String.fromCharCode(c + 65), u = D(a).find("select");
          u.find("option").each(((e, t) => {
            D(t).prop("selected", D(t).val() == p);
          })), u.val(p).trigger("change");
        })), e.answer, false;

       case "3":
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && (isTrue(removeHtml(D(a).html())) || D(a).find(".ri").length > 0) && D(a).find("input").click(), 
          isFalse(t) && (isFalse(removeHtml(D(a).html())) || D(a).find(".wr").length > 0) && D(a).find("input").click();
        })), false;

       default:
        return true;
      }
    }
  }, {
    type: "ask",
    name: "\u5b66\u4e60\u901a\u65b0\u7248\u7ae0\u8282",
    match: () => /work\/doHomeWorkNew/i.test(location.pathname) && location.href.includes("mooc2=1"),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
    init: async () => {
      if (!(await decode())) return msg("\u9875\u9762\u89e3\u5bc6\u5931\u8d25\uff0c\u65e0\u6cd5\u7b54\u9898\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u53cd\u9988\u7ed9\u4f5c\u8005\u5427", "error"), 
      false;
    },
    question: {
      html: ".TiMu",
      question: ".clearfix.fontLabel",
      options: "ul:eq(0) li .after, .answer_p",
      type: "input[name^=answertype]:eq(0)",
      workType: "zj",
      pageType: "cx"
    },
    questionHook: e => {
      switch (e.question = titleClean(e.question).trim(), e.type) {
       case "3":
        e.options = D(e.html).find("ul:eq(0) li").map(((e, t) => "true" === D(t).find(".num_option").attr("data") ? "\u6b63\u786e" : "false" === D(t).find(".num_option").attr("data") ? "\u9519\u8bef" : void 0)).get(), 
        e.options = [];
        break;

       case "11":
        let t = D(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get(), a = D(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
          let a = D(t).clone();
          return a.find(".fl").remove(), removeHtml(a.html());
        })).get();
        e.options = [ t, a ], e.$options = D(e.html).find("ul.thirdUlList>li:not(.groupTitile)");
        break;

       case "15":
        const n = D(e.html).find(".readCompreHensionItem").map(((e, t) => {
          let a = typeMatch(D(t).find("i.index").text()), n = removeHtml(D(t).find(".clearfix").html()), r = D(t).find("ul.Zy_ulTop>li").map(((e, t) => removeHtml(D(t).html()))).get();
          return r = removeOptionsStartChar(r), {
            type: a,
            question: n,
            options: r,
            $options: D(t).find("ul.Zy_ulTop>li")
          };
        })).get();
        if (null == n || 0 == n.length) return null;
        e.options = n, e.$options = null;
        break;

       case "14":
        const r = D(e.html).find("ul.Zy_ulTop").map(((e, t) => {
          const a = D(t).children("li");
          return {
            type: "0",
            question: `\u7b2c${e + 1}\u7a7a`,
            options: a.map(((e, t) => {
              const a = D(t).find(".after").html();
              return removeHtml(null != a ? a : D(t).html());
            })).get(),
            $options: a
          };
        })).get();
        if (null == r || 0 === r.length) return null;
        e.options = r, e.$options = null, e.type = "15";
        break;

       default:
        e.type;
      }
      return e;
    },
    setAnswerHook: e => {
      qc(e.html), qc1(e.html);
    },
    setAnswer: e => (e.ques.options, "11" !== e.type || (e.ques.$options.each(((t, a) => {
      var n, r, s;
      const i = null == (n = e.ques.options) ? void 0 : n[0], o = null == (r = e.ques.options) ? void 0 : r[1], l = null == (s = e.answer) ? void 0 : s[null == i ? void 0 : i[t]], c = Array.isArray(o) ? o.indexOf(l) : -1;
      if (c < 0) return void (null == i || i[t]);
      const p = String.fromCharCode(c + 65);
      let u = W.$(a).find(".dept_select");
      u.val(p).trigger("change"), u.chosen().val(p).trigger("chosen:updated");
    })), e.answer, false))
  } ], extractZhihuishuExamQuestions = e => (e => {
    var t, a, n;
    return (null == (a = null == (t = null == e ? void 0 : e.rt) ? void 0 : t.examBase) ? void 0 : a.workExamParts) || (null == (n = null == e ? void 0 : e.examBase) ? void 0 : n.workExamParts) || (null == e ? void 0 : e.workExamParts) || [];
  })(e).flatMap((e => e.questionDtos || [])).filter((e => Boolean(e))), at = [ {
    type: "ask",
    name: "\u667a\u6167\u6811\u7ae0\u8282",
    tips: "\u667a\u6167\u6811\u5fc5\u987b\u5f00\u81ea\u52a8\u8df3\u8f6c\uff0c\u5426\u5219\u7b54\u6848\u53ef\u80fd\u65e0\u6cd5\u4fdd\u5b58\u5bfc\u81f4\u4f4e\u5206\uff01",
    match: () => location.href.includes("zhihuishu.com") && !location.href.includes("checkHomework") && location.host.includes("zhihuishu") && ("/stuExamWeb.html" === location.pathname || location.href.includes("/webExamList/dohomework/") || location.href.includes("/webExamList/doexamination/")),
    types: [ "0", "1", "2", "3" ],
    question: {
      html: ".examPaper_box > div:eq(1) >div:not(.examPaper_partTit)",
      question: ".subject_describe.dynamic-fonts:eq(0) div:eq(0)",
      options: ".subject_node .nodeLab .label.clearfix .node_detail",
      type: ".subject_type span:first-child",
      workType: "zhs",
      pageType: "zhs"
    },
    init: async () => {
      await waitUntil((function() {
        return !D(".yidun_popup").hasClass("yidun_popup--light") && extractZhihuishuExamQuestions(W.zhsques).length > 0;
      }));
    },
    next: () => {
      D(".switch-btn-box button:eq(1)").click();
    },
    questionHook: (e, t) => {
      const a = extractZhihuishuExamQuestions(W.zhsques)[t];
      if (!a) return e;
      const n = (e => {
        var t;
        const a = typeConvert((null == (t = e.questionType) ? void 0 : t.name) || e.questionTypeName || e.typeName || ""), n = e.questionOptions || e.options || [], r = "3" === a ? [] : removeStartChar(n.map((e => removeHtml(e.content || ""))));
        return {
          question: removeHtml(e.name || e.questionStem || e.questionName || ""),
          type: a,
          options: r
        };
      })(a);
      return e.type = n.type, e.question = n.question, e.options = n.options, e;
    }
  }, {
    type: "save",
    name: "\u667a\u6167\u6811\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.href.includes("zhihuishu.com") && location.href.includes("checkHomework") && location.host.includes("zhihuishu") && ("/stuExamWeb.html" === location.pathname || location.href.includes("/webExamList/checkHomework/")),
    question: {
      html: ".questionType",
      question: ".subject_describe",
      options: ".examquestions-answer",
      type: ".newZy_TItle",
      workType: "zhs",
      pageType: "zhs"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".questionType").length > 0 && D(".questionType:eq(0)")[0].__vue__.answerImgMap;
      }));
    },
    answerHook: e => {
      const t = D(e.html)[0].__vue__, a = t.answerData[t.data.id], n = "1" === a.isCurrent ? a.answer.split(",") : [], r = t.data, s = t.answerImgMap[t.data.id] || "";
      t.answerImgMap, t.data.id, somd5(s), e.type = typeMatch(r.questionType.name);
      const i = [];
      if (e.options = r.questionOptions.map((e => (n.includes(String(e.id)) && i.push(removeHtml(e.content)), 
      removeHtml(e.content)))), e.answer = i, "3" === e.type) {
        e.options = [];
        const t = e.answer[0];
        e.answer = isTrue(t) ? [ "\u6b63\u786e" ] : isFalse(t) ? [ "\u9519\u8bef" ] : [];
      }
      return e;
    }
  }, {
    type: "save",
    name: "\u667a\u6167\u6811\u8003\u8bd5\u6536\u5f55",
    match: () => location.href.includes("zhihuishu.com") && location.href.includes("/atHomeworkExam/stu/examQ/doExamnew"),
    question: {
      html: ".subjecttype-div.clearfloat",
      question: ".subjectTitle-p",
      options: ".TitleOptions-div label",
      type: ".subjecttopic-div",
      workType: "zhs",
      pageType: "zhs"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".subjecttype-div.clearfloat").length > 0;
      }));
    },
    answerHook: e => {
      const t = D(e.html).find(".Referenceanswer-div.clearFloat>.Referenceanswer-r.fl").text();
      return e.question = removeHtml(e.question), e.options = removeStartChar(e.options), 
      e.type = typeMatch(D(e.html).find(".subjecttopic-div").text()), e.answer = t.split("").map((t => e.options[t.charCodeAt(0) - 65])), 
      "3" == e.type && (e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : []), 
      e;
    }
  } ], nt = [ {
    type: "hook",
    name: "\u82af\u4f4d\u6559\u80b2hook",
    match: "www.beeline-ai.com" === location.host,
    main: async e => {
      const getPageIdentifier = () => D(".el-main > div:eq(0)").attr("class");
      W.mainClass = getPageIdentifier();
      const t = new MutationObserver((async e => {
        const a = getPageIdentifier();
        W.mainClass !== a && (W.mainClass = a, "homework-detail-container" === a && await waitUntil((() => 0 === D(".el-loading-mask").length)), 
        vuePageChange(), t.disconnect());
        for (const n of e) if ("attributes" === n.type && "class" === n.attributeName) {
          const e = n.target.textContent;
          if (e && (e.includes("\u4e0b\u4e00\u9898") || e.includes("\u4e0a\u4e00\u9898"))) {
            vuePageChange(), t.disconnect();
            break;
          }
        }
      }));
      D("body").length >= 1 && t.observe(D("body")[0], {
        subtree: true,
        attributes: true,
        childList: true
      });
    }
  }, {
    type: "ask",
    name: "\u82af\u4f4d\u6559\u80b2\u4f5c\u4e1a",
    tips: "\u82af\u4f4d\u6559\u80b2\u4ec5\u652f\u6301\u9009\u62e9\u5224\u65ad\uff0c\u5176\u4ed6\u9898\u578b\u5f85\u9002\u914d",
    match: () => "www.beeline-ai.com" === location.host && (/student\/#\/courseInfo\/[A-Za-z0-9]+\/homework/i.test(location.href) || /student\/#\/courseInfo\/[A-Za-z0-9]+\/exam/i.test(location.href)),
    types: [ "0", "1", "3" ],
    question: {
      html: ".content-area > div.content",
      question: ".content",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "xinwei",
      pageType: "xinwei"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".question-box").length;
      }));
    },
    next: () => {
      D('.toggle-box > button:contains("\u4e0b\u4e00\u9898")').click();
    },
    ischecked: isParentChecked,
    questionHook: e => (e.type = typeMatch(D(e.html).find(".question-box>.tag").text()), 
    e)
  }, {
    type: "save",
    name: "\u82af\u4f4d\u6559\u80b2\u6536\u5f55",
    match: () => "www.beeline-ai.com" === location.host && location.href.includes("/homeworkDetailPage"),
    question: {
      html: ".question-content-body",
      question: ".topic-title",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "xinwei",
      pageType: "xinwei"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".question-content-body").length;
      }));
    },
    answerHook: e => {
      e.type = typeMatch(D(e.html).find(".question-box>.tag").text());
      let t = D(e.html).find(".answer-area > span:eq(1)").text();
      switch (e.type) {
       case "0":
       case "1":
        let a = t.split(",");
        if (e.answer = a.map((t => e.options[t.charCodeAt(0) - 65])), 0 === e.answer.length) return;
        break;

       case "3":
        "T" == t && (e.answer = [ "\u6b63\u786e" ]), "F" == t && (e.answer = [ "\u9519\u8bef" ]);
      }
      return e;
    }
  } ], mergeMoodleReviewQuestionContext = (e, t) => {
    const a = e.trim(), n = t.trim();
    return a && /^[\uff08(]\d+(?:\.\d+)*[)\uff09]/.test(n) ? `${a}\n${n}` : n;
  }, rt = {
    single_selection: "\u5355\u9009\u9898",
    multiple_selection: "\u591a\u9009\u9898",
    true_or_false: "\u5224\u65ad\u9898",
    fill_in_blank: "\u586b\u7a7a\u9898",
    short_answer: "\u7b80\u7b54\u9898",
    text: "\u6587\u672c",
    analysis: "\u7efc\u5408\u9898",
    matching: "\u5339\u914d\u9898",
    random: "\u968f\u673a\u9898",
    cloze: "\u5b8c\u5f62\u586b\u7a7a\u9898"
  }, buildAnalysisSubQuestion = e => {
    if (!e || "text" === e.type || "analysis" === e.type) return null;
    const t = parseFloat(e.point), a = parseFloat(e.score), n = 0 !== t && t === a;
    let r = false, s = [];
    if (e.correctOptions && e.correctOptions.length > 0 && (s = e.correctOptions.map((e => removeHtml(e.content))), 
    r = true), e.correct_answers && e.correct_answers.length > 0 && (s = e.correct_answers.map((e => e.content)), 
    r = true), !r && !n) return null;
    if (!r) if ("single_selection" === e.type || "multiple_selection" === e.type || "true_or_false" === e.type) {
      if (s = (e.options || []).filter((e => e.isChosen)).map((e => removeHtml(e.content))), 
      0 === s.length) return null;
    } else {
      if ("fill_in_blank" !== e.type) return null;
      if (s = (e.answers || []).map((e => e.content)), 0 === s.length) return null;
    }
    const i = D(`<div>${e.description || ""}</div>`).clone();
    i.find("span.__blank__").remove();
    const o = removeHtml(i.html());
    let l = (e.options || []).map((e => removeHtml(e.content)));
    const c = typeConvert(rt[e.type]);
    return "true_or_false" === e.type && (s = judgeAnswer(s[0]), l = [], 0 === s.length) ? null : {
      type: c,
      question: o,
      options: l,
      answer: s
    };
  }, st = [ {
    type: "hook",
    name: "\u56fd\u5f00hook",
    match: location.host.includes("ouchn.cn"),
    main: e => {
      observeVuePageChange(D("body")[0], getUrl, {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 !== D(".selectDan").length;
          }));
        }
      });
    }
  }, {
    type: "save",
    name: "\u56fd\u5f00\u7b54\u6848\u6536\u5f55\u65e7",
    match: () => /\/exam\/([0-9]+)\/subjects#\/submission\/([0-9]+)/i.test(location.href),
    question: {
      html: "li.subject",
      question: ".summary-title .subject-description",
      options: ".subject-options li .option-content",
      type: ".subject-point > span:eq(0)",
      workType: "guokai",
      pageType: "guokai"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".loading-gif").hasClass("ng-hide");
      }));
    },
    answerHook: e => {
      const t = W.angular.element(e.html).scope().subject;
      if ("text" === t.type) return;
      if ("analysis" === t.type) {
        const a = (t.sub_subjects || []).map(buildAnalysisSubQuestion).filter(Boolean);
        if (0 === a.length) return;
        const n = D(`<div>${t.description || ""}</div>`).clone();
        return n.find("span.__blank__").remove(), e.question = removeHtml(n.html()), e.type = "15", 
        e.options = a.map((e => ({
          type: e.type,
          question: e.question,
          options: e.options
        }))), e.answer = a.map((e => e.answer)), e;
      }
      let a = false;
      const n = parseFloat(t.point), r = parseFloat(t.score), s = 0 !== n && n === r;
      let i = D(`<div>${t.description}</div>`).clone();
      if (i.find("span.__blank__").remove(), e.question = removeHtml(i.html()), e.options = t.options.map((e => removeHtml(e.content))), 
      e.type = typeConvert(rt[t.type]), t.correctOptions && t.correctOptions.length > 0 && (e.answer = t.correctOptions.map((e => removeHtml(e.content))), 
      a = true), t.correct_answers && t.correct_answers.length > 0 && (e.answer = t.correct_answers.map((e => e.content)), 
      a = true), a || s) {
        switch (t.type) {
         case "single_selection":
         case "multiple_selection":
         case "true_or_false":
          if (a) "true_or_false" === t.type && (e.answer = judgeAnswer(e.answer[0]), e.options = []); else {
            if (t.options, e.answer = t.options.filter((e => e.isChosen)).map((e => removeHtml(e.content))), 
            0 === e.answer.length) return;
            "true_or_false" === t.type && (e.answer = judgeAnswer(e.answer[0]), e.options = []);
          }
          break;

         case "analysis":
          break;

         case "cloze":
          t.sub_subjects, e.options = t.sub_subjects.map((e => e.options.map((e => removeHtml(e.content)))));
          break;

         case "fill_in_blank":
          a || (e.answer = t.answers.map((e => e.content)));
        }
        return e;
      }
    },
    paper: e => {
      const t = W.globalData.course, a = W.angular.element(D("body")).scope(), n = W.angular.element(D(".hd")).scope().exam, r = a.submissionData.id;
      if (!a.examSubmissions.find((e => (e.id, String(e.id) === String(r))))) return;
      const s = {
        platform: "guokai"
      };
      s.hash = t.id, s.name = t.name, s.info = {}, s.info.school = t.orgName, s.chapter = [ {
        hash: `${n.id}`,
        name: n.title,
        question: e
      } ], Je.setPaper(s.hash, s);
    }
  }, {
    type: "save",
    name: "\u5e7f\u5f00\u7b54\u6848\u6536\u5f55",
    match: () => /mod\/quiz\/review\.php/i.test(location.pathname),
    question: {
      html: ".que",
      question: ".qtext",
      options: ".answer > div",
      type: "",
      answer: ".rightanswer",
      workType: "ougd",
      pageType: "ougd"
    },
    init: async () => {
      D(".specificfeedback").remove();
    },
    next: async () => {
      !D(".qn_buttons > a").last().hasClass("thispage") && D(".arrow_text").click();
    },
    answerHook: e => {
      e.preserveImageHtml = true;
      const t = D(e.html).find(".info .state").text();
      e.type = (D(e.html).attr("class") || "").split(" ")[1], D(e.html).find(".qtext .accesshide").remove(), 
      e.question = removeHtml(D(e.html).find(".qtext").html());
      const a = removeHtml(D(e.html).prevAll(".que.description").first().find(".qtext").html() || "");
      if (e.question = mergeMoodleReviewQuestionContext(a, e.question), e.question.includes("egg")) {
        let t = D(e.html).clone();
        t.find("img").each((function() {
          var e;
          (null == (e = D(this).attr("src")) ? void 0 : e.includes("egg")) && D(this).remove();
        })), e.question = removeHtml(t.find(".qtext").html()), e.question = mergeMoodleReviewQuestionContext(a, e.question);
      }
      switch (e.type, e.type) {
       case "truefalse":
        e.type = "3", e.$options = D(e.html).find("input[type=radio]"), e.options = D(e.html).find(".answer > div").map(((e, t) => removeHtml(D(t).html()).trim())).get(), 
        e.answer = [], e.answer = D(e.html).find(".answer > div").map(((t, a) => e.$options.eq(t).prop("checked") ? e.options[t] : "")).get(), 
        e.answer = e.answer.filter((e => "" !== e)), 0 === e.answer.length ? (e.temp = removeHtml(D(e.html).find(".rightanswer").html()).replace("\u6b63\u786e\u7b54\u6848\u662f", "").trim(), 
        e.answer = [ e.temp ]) : t.includes("\u6b63\u786e") || (e.answer = e.options.filter((t => !t.includes(e.answer[0])))), 
        isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [], 
        e.options = [];
        break;

       case "multichoice":
       case "multichoiceset":
        if (e.type = "1", e.$options = D(e.html).find("input[type=checkbox]"), 0 === e.$options.length && (e.type = "0", 
        e.$options = D(e.html).find("input[type=radio]")), e.options = D(e.html).find(".answer > div").map(((e, t) => {
          let a = D(t).find(".answernumber").text().trim(), n = removeHtml(D(t).html());
          return "" === a ? n.trim() : removeKnownOptionPrefix(n, a);
        })).get(), t.includes("\u6b63\u786e") && !t.includes("\u90e8\u5206\u6b63\u786e")) e.answer = [], 
        e.answer = D(e.html).find(".answer > div").map(((t, a) => {
          let n = D(a).find(".answernumber").text().trim(), r = removeHtml(D(a).html());
          return e.$options.eq(t).prop("checked") && D(a).find(".text-success").length > 0 ? "" === n ? r.trim() : removeKnownOptionPrefix(r, n) : "";
        })).get(), e.answer = e.answer.filter((e => "" !== e)); else {
          e.temp = removeHtml(D(e.html).find(".rightanswer").html(), false).replace("\u6b63\u786e\u7b54\u6848\u662f\uff1a", "").trim();
          const t = e.options.slice(0);
          t.sort(((e, t) => t.length - e.length)), e.answer = t.map((t => e.temp.includes(t) ? (e.temp = e.temp.replace(t, ""), 
          t) : "")), e.answer = e.answer.filter((e => "" !== e)), e.answer.length;
        }
        break;

       case "shortanswer":
        e.type = "4", e.$options = D(e.html).find("input[type=text]"), e.answer = removeHtml(D(e.html).find(".rightanswer").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim();
        break;

       case "match":
        e.type = "24", e.match = D(".answer tr td.text").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.$options = D(".answer tr td.control select"), e.selects = D(".answer tr td.control select").map(((e, t) => [ D(t).find("option").map(((e, t) => ({
          value: D(t).val(),
          text: D(t).text()
        }))).get() ])).get();
        break;

       case "multianswer":
        e.type = "14";
        let a = D(e.html).find(".formulation").clone();
        a.find(".subquestion").remove(), a.find(".accesshide").remove(), e.question = removeHtml(a.html());
        let n = [], r = [];
        D(e.html).find(".subquestion").map(((e, t) => {
          let a = D(t).find("select>option").map(((e, t) => removeHtml(D(t).html()))).get();
          a = a.filter((e => "" !== e)), n.push(a);
          let s = D(t).find("select>option:selected").map(((e, t) => removeHtml(D(t).html()))).get();
          r.push(s[0]);
        })), e.options = n;
        D(e.html).find(".text-success").length == e.options.length && (e.answer = r);
        break;

       case "description":
        return;
      }
      return e;
    },
    paper: async e => {
      var t;
      const a = {
        platform: "ougd"
      }, n = W.document.body.outerHTML, r = ((e, t = {}) => {
        const a = String(t.courseId ?? t.courseid ?? "").trim();
        return (/^\d+$/.test(a) ? a : "") || (e.match(new RegExp("(?:[\"']courseId[\"']|(?<![A-Za-z_])courseId)\\s*:\\s*[\"']?(\\d+)", "i")) || [])[1] || (e.match(/\bdata-courseid\s*=\s*["']?(\d+)/i) || [])[1] || (e.match(/[?&]courseid=(\d+)/i) || [])[1] || (e.match(/\/course\/view\.php\?id=(\d+)/i) || [])[1] || "";
      })(n, (null == (t = W.M) ? void 0 : t.cfg) || {}), s = ((e, t) => {
        try {
          const e = new URL(t).searchParams.get("cmid");
          if (e) return e;
        } catch (a) {}
        return (e.match(/[?&]cmid=(\d+)/i) || [])[1] || (e.match(/\/mod\/quiz\/view\.php\?id=(\d+)/i) || [])[1] || "";
      })(n, W.location.href);
      a.hash = r.trim(), "" !== a.hash && "" !== s && (a.info = {}, a.name = ((e, t) => {
        if (!t) return "";
        const a = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), n = new RegExp(`<a\\b[^>]*href=["'][^"']*/course/view\\.php\\?id=${a}(?:[&#][^"']*)?["'][^>]*>([\\s\\S]*?)</a>`, "i");
        return (e => e.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim())((e.match(n) || [])[1] || "");
      })(n, r) || D("h1").text().trim() || W.document.title.trim(), a.chapter = [ {
        hash: `${s}`,
        name: W.document.title.trim(),
        question: e
      } ], Je.setPaper(a.hash, a, {
        replaceQuestions: true
      }));
    }
  }, {
    type: "ask",
    name: "\u5e7f\u5f00\u5f62\u8003",
    tips: "\u5e7f\u5f00\u4ec5\u652f\u6301\u57fa\u7840\u9898\u578b\uff0c\u7279\u6b8a\u9898\u578b\u8bf7\u624b\u52a8\u5b8c\u6210",
    match: () => /mod\/quiz\/attempt\.php/i.test(location.pathname),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9", "14", "24" ],
    question: {
      html: ".que",
      question: ".qtext",
      options: ".answer > div",
      type: "",
      workType: "ougd",
      pageType: "ougd"
    },
    ischecked: e => Boolean(e.prop("checked")),
    questionHook: e => {
      e.preserveImageHtml = true, e.type = (D(e.html).attr("class") || "").split(" ")[1], 
      D(e.html).find(".qtext .accesshide").remove(), e.question = removeHtml(D(e.html).find(".qtext").html());
      const t = removeHtml(D(e.html).prevAll(".que.description").first().find(".qtext").html() || "");
      if (e.question = mergeMoodleReviewQuestionContext(t, e.question), e.question.includes("egg")) {
        let a = D(e.html).clone();
        a.find("img").each((function() {
          var e;
          (null == (e = D(this).attr("src")) ? void 0 : e.includes("egg")) && D(this).remove();
        })), e.question = removeHtml(a.find(".qtext").html()), e.question = mergeMoodleReviewQuestionContext(t, e.question);
      }
      switch (e.type) {
       case "truefalse":
        e.type = "3", e.$options = D(e.html).find("input[type=radio]"), e.options = [];
        break;

       case "multichoice":
       case "multichoiceset":
        e.type = "1", e.$options = D(e.html).find("input[type=checkbox]"), 0 === e.$options.length && (e.type = "0", 
        e.$options = D(e.html).find("input[type=radio]")), e.options = D(e.html).find(".answer > div").map(((e, t) => {
          let a = D(t).find(".answernumber").text().trim(), n = removeHtml(D(t).html());
          return "" === a ? n.trim() : removeKnownOptionPrefix(n, a);
        })).get();
        break;

       case "shortanswer":
        e.type = "4", e.$options = D(e.html).find("input[type=text]");
        break;

       case "match":
        e.type = "24", e.match = D(".answer tr td.text").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.$options = D(".answer tr td.control select"), e.selects = D(".answer tr td.control select").map(((e, t) => [ D(t).find("option").map(((e, t) => ({
          value: D(t).val(),
          text: D(t).text()
        }))).get() ])).get();

       case "essay":
        e.type = "4", e.$options = D(e.html).find("iframe");
        break;

       case "multianswer":
        e.type = "14";
        let t = D(e.html).find(".formulation").clone();
        t.find(".subquestion").remove(), t.find(".accesshide").remove(), e.question = removeHtml(t.html());
        let a = [];
        D(e.html).find(".subquestion").map(((e, t) => {
          let n = D(t).find("select>option").map(((e, t) => removeHtml(D(t).html()))).get();
          n = n.filter((e => "" !== e)), a.push(n), D(t).find("select>option:selected").map(((e, t) => removeHtml(D(t).html()))).get();
        })), e.$options = D(e.html).find("select"), e.options = a;
        break;

       case "description":
        return;
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "4":
        return D(e.html).find("input.form-control").each((function(t, a) {
          D(a).val(e.answer[t]);
        })), D(e.html).find("iframe:eq(0)").contents().find("body").html(e.answer[0]), false;

       case "3":
        e.ques.$options.each(((t, a) => {
          const n = D(a).parent().find("label").text();
          return "object" == typeof e.answer && (e.answer = e.answer[0]), isTrue(e.answer) && isTrue(n) ? (D(a).click(), 
          false) : !isFalse(e.answer) || !isFalse(n) || (D(a).click(), false);
        }));

       case "14":
        return D(e.html).find("select").each(((t, a) => {
          const n = e.answer[t];
          D(a).find(`option:contains("${n}")`).prop("selected", true);
        })), false;

       default:
        return true;
      }
    },
    finish: e => {
      D(".submitbtns .btn-primary").click();
    }
  }, {
    type: "ask",
    name: "\u56fd\u5f00\u4e13\u9898\u6d4b\u9a8c",
    match: () => /\/exam\/([0-9]+)\/subjects/i.test(location.pathname) && !/\/exam\/([0-9]+)\/subjects#\/submission\/([0-9]+)/i.test(location.href),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9", "14", "15", "24" ],
    question: {
      html: "li.subject",
      question: ".summary-title .subject-description",
      options: ".subject-options li .option-content",
      type: ".summary-sub-title span:eq(0)",
      workType: "guokai",
      pageType: "guokai"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".loading-gif").hasClass("ng-hide") && "" === D(".hd .examinee .submit-label").eq(0).text();
      })), await waitUntil((function() {
        return 0 !== D("li.subject").length;
      }));
    },
    ischecked: e => Boolean(e.parent().find("input").eq(-1).prop("checked")),
    questionHook: e => {
      const t = W.angular.element(e.html).scope(), a = t.subject;
      if ("text" === a.type) return;
      if ("analysis" === a.type) {
        const n = D(`<div>${a.description || ""}</div>`).clone();
        return n.find("span.__blank__").remove(), e.question = removeHtml(n.html()), e.type = "15", 
        e.options = (a.sub_subjects || []).map((e => {
          const t = typeConvert(rt[e.type]), a = (e.options || []).map((e => removeHtml(e.content))), n = D(`<div>${e.description || ""}</div>`).clone();
          return n.find("span.__blank__").remove(), {
            type: t,
            question: removeHtml(n.html()),
            options: "true_or_false" === e.type ? [] : a
          };
        })), e.$options = null, e.subject = a, e.scope = t, e;
      }
      e.type = typeConvert(rt[a.type]);
      let n = D(`<div>${a.description}</div>`).clone();
      switch (n.find("span.__blank__").remove(), e.question = removeHtml(n.html()), a.options = a.options.sort(((e, t) => e.sort - t.sort)), 
      e.options = a.options.map((e => removeHtml(e.content))), e.type, a.type, a.type) {
       case "cloze":
        e.options = a.sub_subjects.map((e => e.options.map((e => removeHtml(e.content))))), 
        e.$options = D(e.html).find("select");

       case "true_or_false":
        e.options = [];
      }
      return e.subject = a, e.scope = t, e;
    },
    setAnswer: e => {
      switch (e.ques, e.type) {
       case "2":
        return D(e.html).find(".___answer"), D(e.html).find(".___answer").each(((t, a) => {
          D(a).html(e.answer[t]), e.ques.scope.subject.answers[t].content = e.answer[t], e.ques.scope.onChangeSubmission(e.ques.subject);
        })), false;

       case "4":
        return D(e.html).find(".simditor-body.needsclick>p").each((function(t, a) {
          D(a).html(e.answer[t]), e.ques.subject.answered_content = e.answer[t];
        })), e.ques.scope.onChangeSubmission(e.ques.subject), false;

       case "14":
        return e.ques.subject.sub_subjects.forEach(((t, a) => {
          let n = e.answer[a];
          t.options.forEach(((r, s) => {
            r.content === n && (t.answeredOption = String(r.id), e.ques.scope.onChangeSubmission(t), 
            D(e.html).find(`input[value="${r.id}"]`).click(), D(e.html).find(`button:eq(${a})>span:eq(1)`).text(n));
          }));
        })), false;

       case "15":
        return e.ques.subject.sub_subjects.forEach(((t, a) => {
          const n = e.answer[a];
          if (!n || 0 === n.length) return;
          const r = n[0], s = (t.options || []).find(((e, a) => {
            const n = removeHtml(e.content);
            return "number" == typeof r ? a === r : "true_or_false" === t.type ? isTrue(r) && isTrue(n) || isFalse(r) && isFalse(n) : n === r;
          }));
          s && (t.answeredOption = String(s.id), e.ques.scope.onChangeSubmission(t), D(e.html).find(`input[value="${s.id}"]`).click());
        })), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u4e0a\u6d77\u5f00\u653e\u6536\u5f55",
    match: () => "l.shou.org.cn" === location.host && location.href.includes("assignment/history.aspx?homeWorkId"),
    question: {
      html: ".e-q-body",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "shou",
      pageType: "shou"
    },
    init: async () => {},
    answerHook: e => {
      e.$options = D(e.html).find("ul>li");
      let t = D(e.html).find("ul>li.checked").map(((e, t) => removeHtml(D(t).find(".ErichText").html() || D(t).html()))).get();
      const a = D(e.html).find(".e-q-right").length > 0;
      e.answer = t.filter((e => "" !== e));
      let n = D(e.html).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(D(t).html()))).get().map((t => {
        let a = t.charCodeAt() - 65;
        return e.options[a];
      })).filter((e => "" !== e && void 0 !== e));
      switch (e.options = removeStartChar(e.options), D(e.html).attr("data-questiontype")) {
       case "2":
        e.type = "1";
        break;

       case "1":
        e.type = "0";
        break;

       case "3":
        e.type = "3", e.answer = D(e.html).find("ul>li.checked").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.options = [], isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [];
        break;

       case "8":
        e.type = "15";
        const t = D(e.html).find(".e-q-quest form").map(((e, t) => {
          let a = removeHtml(D(t).find(".e-q-q .ErichText").html()), n = D(t).find("ul>li").map(((e, t) => removeHtml(D(t).find(".ErichText").html() || D(t).html()))).get(), r = "0";
          n = removeStartChar(n);
          const s = D(t).find(".e-a-right").length > 0, i = D(t).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(D(t).html()))).get();
          let o = i.map((e => {
            let t = e.charCodeAt() - 65;
            return n[t];
          })).filter((e => "" !== e && void 0 !== e));
          if (2 === n.length && 1 === i.length) {
            let e = judgeAnswer(i[0]);
            e.length > 0 && (o = e, n = [], r = "3");
          }
          return o.length > 1 && (r = "1"), {
            question: a,
            options: n,
            answer: o,
            isT: s,
            type: r
          };
        })).get();
        if (t.some((e => !e.isT))) return;
        n = t.map((e => e.answer)).flat(), e.options = t.map((e => ({
          question: e.question,
          options: e.options,
          type: e.type
        })));
        break;

       case "11":
        e.type = "19";
        const a = D(e.html).find("form").map(((e, t) => ({
          type: "0",
          question: removeHtml(D(t).find(".e-q-q .ErichText").html()),
          options: D(t).find("ul li .ErichText").map(((e, t) => removeHtml(D(t).html()))).get()
        }))).get();
        n = n.length > 0 ? judgeAnswer(n[0]) : [], e.options = a;
        break;

       default:
        return void D(e.html).attr("data-questiontype");
      }
      return n.length > 0 ? (e.answer = n, e) : !a && "3" === e.type && e.answer.length > 0 || !a ? void 0 : e;
    },
    paper: async e => {
      const t = {
        platform: "shou"
      }, a = D("input[name=CourseOpenId]").val(), n = D("input[name=WorkId]").val();
      await request("https://l.shou.org.cn/student/CourseScoreNew-inside.aspx", "GET").then((e => {
        const n = D(e[0].responseText);
        t.name = n.find(`#courseSelect>option[data-xid="${a}"]`).text().trim(), t.info = {};
      })), t.hash = a, t.info = {}, t.chapter = [ {
        hash: `${n}`,
        name: D(".mark_title").text().trim(),
        question: e
      } ], Je.setPaper(t.hash, t);
    }
  }, {
    type: "ask",
    name: "\u4e0a\u6d77\u5f00\u653e\u4f5c\u4e1a",
    tips: "",
    match: () => "l.shou.org.cn" === location.host && (location.href.includes("assignment/preview.aspx?homeWorkId") || location.href.includes("study/assignment/continuation.aspx")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".e-q-body",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "shou",
      pageType: "shou"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".e-q-body").length;
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      switch (D(e.html).attr("data-questiontype")) {
       case "2":
        e.type = "1";
        break;

       case "1":
        e.type = "0";
        break;

       case "3":
        e.type = "3", e.$options = D(e.html).find("ul>li");
        break;

       case "8":
        e.type = "15", e.quesList = D(e.html).find("form").map(((e, t) => ({
          type: "0",
          question: removeHtml(D(t).find(".e-q-q .ErichText").html()),
          options: D(t).find("ul li .ErichText").map(((e, t) => removeHtml(D(t).html()))).get()
        }))).get();
        break;

       default:
        return void D(e.html).attr("data-questiontype");
      }
      return e;
    }
  } ], it = [ {
    type: "ask",
    name: "\u6210\u6559\u4e91\u8003\u8bd5",
    tips: "",
    match: () => location.href.includes("student/exam/resource/paper_card"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".ui-question",
      question: ".ui-question-content-wrapper",
      options: ".ui-question-options li .ui-question-content-wrapper",
      type: ".ui-question-group-title",
      workType: "chengjiaoyun",
      pageType: "chengjiaoyun"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".ui-question");
      })), !W.top.location.href.includes("student/exam2/doexam")) return false;
    },
    toquestion: async e => {
      D(W.top.document).find(".ui-card-questions ul li:eq(" + e + ")").click();
    },
    next: async () => {
      D("#next-btn").click();
    },
    ischecked: e => e.hasClass("ui-option-selected"),
    questionHook: e => {
      if (e.type = typeMatch(D(e.html).parent().find(".ui-question-group-title").text()), 
      e.$options = D(e.html).find(".ui-question-options li>span"), "3" === e.type) e.options = [];
      return e;
    },
    setAnswer: e => {
      if ("3" === e.type) {
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).parent().html())) && D(a).click(), isFalse(t) && isFalse(removeHtml(D(a).parent().html())) && D(a).click();
        })), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u6210\u6559\u4e91\u6536\u5f55",
    match: () => location.href.includes("student/exam/resource/paper_card"),
    question: {
      html: ".ui-question",
      question: ".ui-question-content-wrapper",
      options: ".ui-question-options li .ui-question-content-wrapper",
      type: ".ui-question-group-title",
      workType: "chengjiaoyun",
      pageType: "chengjiaoyun"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".ui-question");
      })), W.top.location.href.includes("student/exam2/doexam")) return false;
    },
    answerHook: e => {
      if (e.type = typeMatch(D(e.html).parent().find(".ui-question-group-title").text()), 
      e.$options = D(e.html).find(".ui-question-options li>span"), e.answer = D(e.html).find(".ui-question-options li.ui-correct-answer .ui-question-content-wrapper").map(((e, t) => removeHtml(D(t).html()))).get(), 
      "3" === e.type) e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : [];
      return e;
    }
  } ];

  const ot = [ {
    type: "hook",
    name: "hook",
    match: () => "xuexi.jsou.cn" === location.host && location.href.includes("newHomework/showHomeworkByStatus") && location.href.includes("checked=true"),
    main: e => {
      W.mainClass = D("#homeworkHistory").find(".active").attr("id");
      let t = new MutationObserver((async e => {
        W.mainClass !== D("#homeworkHistory").find(".active").attr("id") && (W.mainClass = D("#homeworkHistory").find(".active").attr("id"), 
        await waitUntil((function() {
          return 0 === D(".layui-layer-shade").length;
        })), vuePageChange(), t.disconnect());
        for (let a of e) "attributes" === a.type && "class" === a.attributeName && a.target.textContent && (a.target.textContent.includes("\u4e0b\u4e00\u9898") || a.target.textContent.includes("\u4e0a\u4e00\u9898")) && (t.disconnect(), 
        vuePageChange());
      }));
      D("body").length >= 1 && t.observe(D("body")[0], {
        subtree: true,
        attributes: true,
        childList: true
      });
    }
  }, {
    type: "ask",
    name: "\u6c5f\u82cf\u5f00\u653e\u5927\u5b66\u7b54\u9898",
    tips: "",
    match: () => "xuexi.jsou.cn" === location.host && location.href.includes("/showHomeworkByStatus") && location.href.includes("checked=false"),
    types: [ "0", "1", "2", "3" ],
    question: {
      html: ".insert",
      question: ".window-title",
      options: ".questionId-option li > div:not(.numberCover)",
      type: ".questionDiv >div:eq(0)",
      workType: "jsou",
      pageType: "jsou"
    },
    init: async () => {
      document.addEventListener("copy", (function(e) {
        e.stopImmediatePropagation(), layer.msg("\u590d\u5236\u6210\u529f", {
          icon: 4
        }), e.clipboardData.setData("text/plain", window.getSelection().toString());
      })), document.addEventListener("paste", (() => {
        event.stopImmediatePropagation();
        let e = (event.clipboardData || window.clipboardData).getData("text");
        layer.msg("\u7c98\u8d34\u6210\u529f", {
          icon: 4
        }), document.execCommand("insertText", false, e);
      }));
    },
    ischecked: function(e) {
      if (!e) return false;
      const hasSelectedClass = e => !(!(null == e ? void 0 : e.length) || "function" != typeof e.hasClass || !e.hasClass("is-checked") && !e.hasClass("answer-title"));
      if (hasSelectedClass(e)) return true;
      if (hasSelectedClass("function" == typeof e.closest ? e.closest(".default-option, li") : null)) return true;
      const t = "function" == typeof e.parent ? e.parent() : null;
      return !!hasSelectedClass(t) || hasSelectedClass("function" == typeof (null == t ? void 0 : t.parent) ? t.parent() : null);
    },
    questionHook: e => (e.type = D(e.html).find(".questionDiv >div:eq(1)").text().trim(), 
    e.type = typeConvert(e.type), e.$options = D(e.html).find(".questionId-option li .numberCover"), 
    "3" == e.type && (e.options = []), e),
    setAnswer: e => {
      switch (e.type) {
       case "2":
        if (e.$options = D(e.html).find(".questionTitle input"), e.$options.length == e.answer.length) return e.$options.each(((t, a) => {
          D(a).val(e.answer[t]);
        })), false;
        break;

       case "3":
        let t = e.answer;
        return D(e.html).find(".questionId-option>.default-option").each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).find(".option-title>div:eq(1)").html())) && D(a).find("div.numberCover").click(), 
          isFalse(t) && isFalse(removeHtml(D(a).find(".option-title>div:eq(1)").html())) && D(a).find("div.numberCover").click();
        })), false;

       case "4":
        const a = D(e.html).find(".jianda-answer>div").attr("id");
        return W.UE.getEditor(`${a}`).setContent(e.answer), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u6c5f\u82cf\u5f00\u653e\u5927\u5b66\u6536\u5f55",
    match: () => "xuexi.jsou.cn" === location.host && location.href.includes("newHomework/showHomeworkByStatus") && location.href.includes("checked=true"),
    question: {
      html: ".insert",
      question: ".window-title",
      options: "#questionId-option li > div:not(.numberCover)",
      type: ".questionDiv >div:eq(0)",
      workType: "jsou",
      pageType: "jsou"
    },
    init: async () => {},
    answerHook: e => {
      const t = D(e.html).find(".questionDiv >div").text(), a = t.match(/\u5206\u503c(\d+)\u5206/), n = t.match(/\u5f97\u5206\uff1a(\d+)/);
      if (!a || !n) return null;
      e.type = typeConvert(D(e.html).find(".questionDiv >div:eq(1)").text());
      if (!(a[1] === n[1] && "0" !== n[1]) && "3" !== e.type) return null;
      switch (e.type) {
       case "0":
       case "1":
       case "3":
        if (e.answer = D(e.html).find(".answer .correctAnswer").text().trim().split("\uff1b").map((t => e.options[t.charCodeAt(0) - 65])), 
        e.answer = e.answer.filter((e => e)), 0 == e.answer.length && (e.answer = D(e.html).find(".answer .studentAnswer").text().trim().split("\uff1b").map((t => e.options[t.charCodeAt(0) - 65]))), 
        e.answer = e.answer.filter((e => e)), 3 == e.type) {
          e.options = [];
          let t = e.answer[0];
          if (isFalse(t)) e.answer = "\u9519\u8bef"; else {
            if (!isTrue(t)) return;
            e.answer = "\u6b63\u786e";
          }
        }
        break;

       case "2":
        e.options = [], e.answer = D(e.html).find(".answer .correctAnswer").text().trim().split("\uff1b"), 
        e.answer = e.answer.filter((e => e)), 0 == e.answer.length && (e.answer = D(e.html).find(".answer .studentAnswer").text().trim().split("\uff1b")), 
        e.answer = e.answer.filter((e => e));
        break;

       default:
        return;
      }
      return e;
    },
    paper: e => {
      const t = W.homework, a = {
        platform: "jsou"
      };
      a.hash = t.courseId, a.name = t.courseName, a.info = {}, a.chapter = [ {
        hash: `${t.homeworkId}`,
        name: t.title,
        question: e
      } ], Je.setPaper(a.hash, a);
    }
  } ], lt = [ {
    type: "hook",
    name: "hook",
    match: "spoc-exam.icve.com.cn" === location.host || location.host.includes("exam.courshare.cn") || location.host.includes("webtrn.cn"),
    main: e => {
      W.mainClass = D(".q_content").first().attr("id");
      let t = new MutationObserver((async e => {
        W.mainClass !== D(".q_content").first().attr("id") && (W.mainClass = D(".q_content").first().attr("id"), 
        "homework-detail-container" === W.mainClass && await waitUntil((function() {
          return 0 !== D(".q_content").length;
        })), vuePageChange(), t.disconnect());
        for (let a of e) "attributes" === a.type && "class" === a.attributeName && a.target.textContent && (a.target.textContent.includes("\u4e0b\u4e00\u9898") || a.target.textContent.includes("\u4e0a\u4e00\u9898")) && (t.disconnect(), 
        vuePageChange());
      }));
      D("#examPage").length >= 1 && t.observe(D("#examPage")[0], {
        subtree: true,
        attributes: true,
        childList: true
      });
    }
  }, {
    type: "hook",
    name: "hook",
    match: "zjy2.icve.com.cn" === location.host || "zyk.icve.com.cn" === location.host || "ai.icve.com.cn" === location.host,
    main: e => {
      D(".minimized-dialog img").css({
        "z-index": "999999"
      });
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.name), {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 !== D(".q_content").length;
          }));
        }
      });
    }
  }, {
    type: "ask",
    name: "\u804c\u6559\u4e91\u4f5c\u4e1a",
    tips: "",
    match: () => location.href.includes("examflow_index.action"),
    types: [ "0", "2", "1", "3", "4" ],
    question: {
      html: ".q_content",
      question: ".divQuestionTitle",
      options: ".questionOptions > div",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".q_content").length;
      }));
    },
    finish: e => {
      D('.paging_next:contains("\u4e0b\u4e00\u9875")').click();
    },
    ischecked: e => 0 !== e.parent().find(".checkbox_on").length,
    questionHook: e => {
      var t, a;
      e.question = removeHtml(D(e.html).find(".divQuestionTitle").html());
      let n = D(e.html).find("[name='quesId']").attr("id"), r = null == (a = null == (t = document.getElementById(`questionId[${n}]`)) ? void 0 : t.getAttribute("answertype")) ? void 0 : a.trim(), s = D(e.html).find("span[name^='questionIndex']").text().trim() + "\u3001", i = D(e.html).find(".q_score").text().trim();
      var o;
      switch (e.question = (o = e.question.replace(s, "").replace(i, "").trim(), titleClean(String(o ?? "").replace(/\s*\u2691?\s*(?:\u6807\u8bb0\u5b58\u7591|\u53d6\u6d88\u5b58\u7591)\s*$/, "").replace(/\s*\uff08\d+(?:\.\d+)?\s*\u5206\uff09$/, "").trim())), 
      e.options = D(e.html).find(".questionOptions>div").map(((e, t) => {
        let a = D(t).find(".option_index").text().trim();
        return removeHtml(D(t).html()).replace(a, "").trim();
      })).get(), e.$options = D(e.html).find(".questionOptions>div input"), r) {
       case "\u5355\u9879\u9009\u62e9\u9898":
       case "\u5355\u9009\u9898":
       case "singlechoice":
        e.type = "0";
        break;

       case "\u591a\u9879\u9009\u62e9\u9898":
       case "\u591a\u9009\u9898":
       case "multichoice":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
       case "bijudgement":
        e.type = "3", e.options = [];
        break;

       case "fillblank":
        e.type = "2", e.question = removeHtml(D(e.html).find("[name='fillblankTitle']").html());
        break;

       case "cloze":
        e.type = "14", e.options = D(e.html).find(".questionOptions>.exam_cloze_choice").map(((e, t) => [ D(t).find(".optionContent").map(((e, t) => removeHtml(D(t).html()))).get() ])).get();
        break;

       case "textarea":
        e.type = "4", e.options = [];
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "2":
        return D(e.html).find(".fillblank_input > input").each(((t, a) => {
          D(a).val(e.answer[t]);
        })), false;

       case "3":
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).parent().html())) && D(a).click(), isFalse(t) && isFalse(removeHtml(D(a).parent().html())) && D(a).click();
        })), false;

       case "4":
        let a = D(e.html).find("[name='quesId']").attr("id");
        return W.UE.getEditor(`_baidu_editor_${a}`).setContent(`<p>${e.answer}</p>`), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u804c\u6559\u4e91\u6536\u5f55",
    match: () => location.href.includes("examrecord_recordDetail.action"),
    question: {
      html: ".q_content",
      question: ".divQuestionTitle",
      options: ".questionOptions>div.q_option_readonly",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".q_content").length;
      }));
    },
    answerHook: e => {
      const t = D(e.html).find(".exam.icon_examright").length, a = D(e.html).find("input[name='quesId']:not([id='']").attr("id"), n = D(`input#qId${a}`).attr("qtype"), r = D(e.html).find("span[name^='questionIndex']").text().trim() + "\u3001", s = D(e.html).find(".q_score").text().trim();
      switch (e.question = e.question.replace(r, "").replace(s, "").trim(), e.options = D(e.html).find(".questionOptions>div.q_option_readonly").map(((e, t) => {
        let a = D(t).find("span[name='optionIndexName']").text().trim();
        return removeHtml(D(t).html()).replace(a, "").trim();
      })).get(), n) {
       case "\u5355\u9879\u9009\u62e9\u9898":
       case "\u5355\u9009\u9898":
       case "singlechoice":
        e.type = "0";
        break;

       case "\u591a\u9879\u9009\u62e9\u9898":
       case "\u591a\u9009\u9898":
       case "multichoice":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
       case "bijudgement":
        e.type = "3";
        break;

       case "fillblank":
       case "\u586b\u7a7a\u9898":
        e.type = "2";
        const t = D(e.html).find(".answerOption>span:eq(0)").clone();
        t.find(".exam_answers").remove(), e.question = titleClean(removeHtml(t.html())).replace(/\uff08.*?\u5206\uff09/g, "").trim();
        break;

       case "cloze":
       case "\u5b8c\u5f62\u586b\u7a7a":
        e.type = "14", e.options = D(e.html).find(".questionOptions>.exam_cloze_choice").map(((e, t) => [ D(t).find(".optionContent").map(((e, t) => removeHtml(D(t).html()))).get() ])).get(), 
        e.answer = D(e.html).find(".exam_rightAnswer .answer_table .one_answer>span").map(((t, a) => {
          const n = D(a).text().trim();
          return e.options[t][n.charCodeAt(0) - 65];
        })).get();
        break;

       case "textarea":
        e.type = "4", e.options = [], e.answer = removeHtml(D(e.html).find(".exam_rightAnswer .has_standard_answer").html());
      }
      switch (e.type) {
       case "0":
       case "1":
        if (e.answer = D(e.html).find('.exam_rightAnswer .exam_answers_tit>span[name="rightAnswer"]').text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65])), 
        e.answer, 0 == e.answer.length) {
          if (0 == t) return;
          e.answer = D(e.html).find('.exam_stu_answer span[name="stuAnswer"]').text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65]));
        }
        break;

       case "2":
        e.answer = 0 == t ? D(e.html).find(".exam_rightAnswer span.fillblank_answer").map(((e, t) => removeHtml(D(t).html()))).get() : D(e.html).find(".exam_stu_answer span.fillblank_answer").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.answer;
        break;

       case "3":
        e.options = [];
        let a = D(e.html).find('.exam_stu_answer span[name="stuAnswer"]').text().trim();
        [ "\u6b63\u786e", "\u9519\u8bef" ].includes(a) && t && (e.answer = [ a ]);
      }
      return e;
    }
  }, {
    type: "save",
    name: "\u667a\u6167\u804c\u6559\u6536\u5f55",
    match: () => "zjy2.icve.com.cn" === location.host && (location.href.includes("/spocviewsJob") || location.href.includes("/viewExam")),
    question: {
      html: ".subjectDet",
      question: ".seeTitle .htmlP.ql-editor",
      options: ".optionList .htmlP.ql-editor",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".subjectDet").length;
      }));
    },
    answerHook: e => {
      const t = D(e.html).find(".xvhao").text().trim();
      e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898"));
      let a = D(e.html).find(".answer").text().trim();
      switch (e.answer = a.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.type) {
       case "2":
        e.options = [], e.answer = D(e.html).find(".answer>span").map(((e, t) => removeHtml(D(t).html()))).get();
        break;

       case "3":
        e.options = D(e.html).find(".optionList>div").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.answer = a.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.answer = judgeAnswer(e.answer[0]), 
        e.options = [];
        break;

       case "11":
        const t = D(e.html).find(".optionList .matching>.htmlP.ql-editor").map(((e, t) => removeHtml(D(t).html()))).get(), n = D(e.html).find(".optionList>.text .htmlP.ql-editor").map(((e, t) => removeHtml(D(t).html()))).get();
        e.options = [ t, n ];
        let r = {};
        a = D(e.html).find(".answer>span").map(((e, a) => {
          let [s, i] = D(a).text().trim().split(".");
          s.charCodeAt(0) >= 65 ? s = (s.charCodeAt(0) - 65).toString() : /^\d+$/.test(s) && (s = (parseInt(s) - 1).toString()), 
          i.charCodeAt(0) >= 65 ? i = (i.charCodeAt(0) - 65).toString() : /^\d+$/.test(i) && (i = (parseInt(i) - 1).toString()), 
          r[t[s]] = n[i];
        })), e.answer = r;
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u667a\u6167\u804c\u6559+\u7b54\u9898",
    tips: "\u8be5\u5e73\u53f0\u95ee\u9898\u8f83\u591a\uff0c\u9047\u5230\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
    match: () => location.href.includes("coursePreview/jobTest") || location.href.includes("spockeepTest") || location.href.includes("spocjobTest"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".subjectDet",
      question: ".ql-editor",
      options: ".optionList .ql-editor",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".subjectDet").length;
      }));
    },
    ischecked: e => e.parent().parent().parent().hasClass("is-checked"),
    questionHook: e => {
      const t = D(e.html).find(".title.titleTwo").text().trim();
      if (e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898")), 
      "3" === e.type) e.options = [], e.$options = D(e.html).find(".optionList>div label");
      return e;
    }
  }, {
    type: "save",
    name: "\u667a\u6167\u804c\u6559+\u6536\u5f55",
    match: () => "zyk.icve.com.cn" === location.host && (location.href.includes("/coursePreview/viewJob1") || location.href.includes("/viewExam")),
    question: {
      html: ".subjectDet",
      question: ".seeTitle>span:eq(1)",
      options: ".optionList>div",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".subjectDet").length;
      }));
    },
    answerHook: e => {
      e.options = removeStartChar(e.options);
      const t = D(e.html).find(".xvhao").text().trim();
      e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898"));
      let a = D(e.html).find(".answer").text().trim();
      switch (e.answer = a.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.type) {
       case "2":
        e.options = [], e.answer = D(e.html).find(".answer>span").map(((e, t) => removeHtml(D(t).html()))).get();
        break;

       case "3":
        e.options = D(e.html).find(".optionList>div").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.answer = a.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.answer = judgeAnswer(e.answer[0]), 
        e.options = [];
      }
      return e;
    }
  }, {
    type: "save",
    name: "ai\u4f18\u8bfe\u6536\u5f55\u65b0",
    match: () => "ai.icve.com.cn" === location.host && location.href.includes("/review-exam/"),
    question: {
      html: () => {
        let e = D(".examination-paper")[0].__vue__.sjAllInfo.questions, t = [];
        return e.sort(((e, t) => e.txdm - t.txdm)), e.forEach((e => {
          t.push(e);
        })), t;
      },
      question: ".seeTitle>span:eq(1)",
      options: ".optionList>div",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".examination-paper")[0].__vue__.sjAllInfo.questions.length;
      }));
      let e = D(".examination-paper")[0].__vue__.sjAllInfo.questions, t = [];
      e.sort(((e, t) => e.txdm - t.txdm)), e.forEach((e => {
        t.push(e);
      })), W.quesList = t;
    },
    answerHook: (e, t) => {
      const a = e.html;
      e.type = typeMatch(a.type), e.question = titleClean(a.tmmc);
      let n = [];
      switch (e.type) {
       case "3":
        "1" == a.answer && (e.answer = [ "\u6b63\u786e" ]), "0" == a.answer && (e.answer = [ "\u9519\u8bef" ]);
        break;

       case "2":
        e.answer = a.answer.split(",");
        break;

       case "4":
        e.answer = a.answer;
        break;

       case "0":
       case "1":
        e.options = a.sjtmxxlist.map((e => ("1" == e.sfzqda && n.push(removeHtml(e.xxnr)), 
        removeHtml(e.xxnr)))), e.answer = n;
      }
      return e;
    },
    paper: async e => {}
  }, {
    type: "ask",
    name: "ai\u4f18\u8bfe\u7b54\u9898",
    tips: "",
    match: () => "ai.icve.com.cn" === location.host && location.href.includes("/preview-exam/"),
    types: [ "0", "1" ],
    question: {
      html: () => {
        let e = D(".examination-paper")[0].__vue__.tmActivelist, t = [];
        return e.sort(((e, t) => e.px - t.px)), e.forEach((e => {
          t.push(e);
        })), t;
      },
      question: ".seeTitle>span:eq(1)",
      options: "label",
      type: ".question-box .tag",
      workType: "zhijiaoyun",
      pageType: "zhijiaoyun"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".examination-paper")[0].__vue__.tmActivelist.length;
      }));
    },
    toquestion: e => {
      D(".topic-zpx-list .topic-zpx-main span:eq(" + e + ")").click();
    },
    ischecked: e => e.hasClass("wrongXz"),
    questionHook: e => {
      var t;
      const a = e.html, n = D(".examination-paper")[0].__vue__.topList, r = [];
      Object.keys(n).forEach((e => {
        n[e].forEach((t => {
          r.push({
            id: t.id,
            type: t.txdmmc || e
          });
        }));
      }));
      const s = (null == (t = r.find((e => e.id === a.id))) ? void 0 : t.type) || "\u5176\u4ed6";
      e.type = typeMatch(s), e.question = titleClean(a.title);
      const i = a.dataArr.map((e => removeHtml(e.Content)));
      return e.options = i, e.answer = [], e.html = D(".content-center"), e.$options = () => D("label"), 
      e;
    }
  }, {
    type: "ask",
    name: "\u7f51\u68af\u81ea\u6d4b\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("coursewareTest_intoTestPage.action"),
    types: [ "0", "1", "3", "2" ],
    question: {
      html: ".test_item",
      question: ".test_item_tit",
      options: ".test_item_theme li",
      type: ".test_item_type",
      workType: "webtrn",
      pageType: "webtrn"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".test_item").length;
      }));
    },
    ischecked: e => e.is(":checked"),
    questionHook: e => {
      const t = D(e.html), a = t.find(".test_item_tit").clone();
      a.find(".tipNodo").remove();
      let n = removeHtml(a.html() || "").replace(/^\s*\d+\s*[\.\u3001\uff0e]\s*/, "").replace(/\uff08\s*[\d.]+\s*\u5206\s*\uff09\s*$/, "").trim();
      e.question = titleClean(n);
      let r = t.prevAll(".test_item_type").first().text().trim();
      switch (r || (r = t.parent().prevAll(".test_item_type").first().text().trim()), 
      r.includes("\u591a\u9009") ? e.type = "1" : r.includes("\u5224\u65ad") ? e.type = "3" : r.includes("\u586b\u7a7a") ? e.type = "2" : r.includes("\u7b80\u7b54") || r.includes("\u95ee\u7b54") || r.includes("\u8bba\u8ff0") ? e.type = "4" : e.type = "0", 
      e.type) {
       case "3":
        e.options = [], e.$options = t.find(".test_item_theme input");
        break;

       case "2":
        e.options = [], e.$options = t.find('input[type="text"], textarea');
        break;

       case "4":
        e.options = [], e.$options = t.find("textarea");
        break;

       default:
        e.options = t.find(".test_item_theme li").map(((e, t) => {
          const a = D(t), n = a.find(".zdh_op_con");
          return (n.length ? removeHtml(n.html() || "") : removeHtml(a.html() || "").replace(/^[A-Z][\uff0e\.\u3001]?\s*/, "")).trim();
        })).get(), e.$options = t.find(".test_item_theme li input");
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "3":
        {
          const t = e.answer;
          return e.ques.$options.each(((e, a) => {
            const n = (D(a).attr("value") || "").toUpperCase(), r = D(a).parent().text();
            (isTrue(t) && ("T" === n || /\u5bf9|\u6b63\u786e/.test(r)) || isFalse(t) && ("F" === n || /\u9519|\u9519\u8bef/.test(r))) && !a.checked && D(a).click();
          })), false;
        }

       case "2":
        return e.ques.$options.each(((t, a) => {
          D(a).val(e.answer[t]).trigger("change");
        })), false;

       case "4":
        return e.ques.$options.first().val(e.answer).trigger("change"), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u7f51\u68af\u81ea\u6d4b\u6536\u5f55",
    match: () => location.href.includes("coursewareTest_intoTestAnswerPage.action"),
    question: {
      html: ".test_item",
      question: ".test_item_tit",
      options: ".test_item_theme li",
      type: ".test_item_type",
      workType: "webtrn",
      pageType: "webtrn"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".test_item").length;
      }));
    },
    answerHook: e => {
      const t = D(e.html), a = t.find(".test_item_tit").clone();
      a.find(".zdh_t_f, .test_item_key").remove();
      let n = removeHtml(a.html() || "").replace(/^\s*\d+\s*[\.\u3001\uff0e]\s*/, "").replace(/\uff08\s*[\d.]+\s*\u5206\s*\uff09\s*$/, "").trim();
      e.question = titleClean(n);
      let r = t.prevAll(".test_item_type").first().text().trim();
      r || (r = t.parent().prevAll(".test_item_type").first().text().trim()), r.includes("\u591a\u9009") ? e.type = "1" : r.includes("\u5224\u65ad") ? e.type = "3" : r.includes("\u586b\u7a7a") ? e.type = "2" : r.includes("\u7b80\u7b54") || r.includes("\u95ee\u7b54") || r.includes("\u8bba\u8ff0") ? e.type = "4" : e.type = "0";
      const s = t.find(".test_item_key_tit").text().replace(/^.*?[\uff1a:]\s*/, "").trim();
      switch (e.type) {
       case "0":
       case "1":
        e.options = t.find(".test_item_theme ul li").map(((e, t) => {
          const a = D(t).find(".zdh_op_con");
          return (a.length ? removeHtml(a.html() || "") : removeHtml(D(t).html() || "").replace(/^[A-Z][\uff0e\.\u3001]?\s*/, "")).trim();
        })).get(), e.answer = s.split("").filter((e => /[A-Z]/.test(e))).map((t => e.options[t.charCodeAt(0) - 65])).filter((e => void 0 !== e));
        break;

       case "3":
        e.options = [], e.answer = judgeAnswer(s);
        break;

       case "2":
        e.options = [], e.answer = s.split(/[,\uff0c;\uff1b\s]+/).filter(Boolean);
        break;

       case "4":
        e.options = [], e.answer = s;
      }
      return e;
    }
  } ], ct = [ {
    type: "ask",
    name: "\u5ddd\u519c\u5728\u7ebf\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("cnzx.info") && location.href.includes("KaoShi/ShiTiYe.aspx"),
    types: [ "0", "1", "3" ],
    question: {
      html: "li.question",
      question: ".wenti >p.stem",
      options: ".wenti > ol > li",
      type: ".question_head > span:eq(0)",
      workType: "cnzx",
      pageType: "cnzx"
    },
    init: async () => {},
    ischecked: e => e.find("input").prop("checked"),
    questionHook: e => (e.$options = D(e.html).find(".wenti > ol > li input"), 0 !== e.options.length && (e.type = "radio" === e.$options.eq(0).attr("type") ? "0" : "1", 
    2 === e.options.length && e.options.includes("\u6b63\u786e") && e.options.includes("\u9519\u8bef") && (e.type = "3", 
    e.options = [])), e),
    setAnswer: e => "3" !== e.type || (D(e.html).find(".wenti > ol > li").each(((t, a) => {
      isTrue(e.answer) && isTrue(removeHtml(D(a).html())) && e.ques.$options.eq(t).click(), 
      isFalse(e.answer) && isFalse(removeHtml(D(a).html())) && e.ques.$options.eq(t).click();
    })), false),
    finish: e => {
      D("li.paginationjs-next.J-paginationjs-next").click();
    }
  }, {
    type: "save",
    name: "\u5ddd\u519c\u5728\u7ebf\u6536\u5f55",
    match: () => location.host.includes("cnzx.info") && location.href.includes("ZaiXianLianXi.aspx"),
    question: {
      html: ".ShiTi>.ShiTiMiaoShu",
      question: ".ShiTiMiaoShu",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "cnzx",
      pageType: "cnzx"
    },
    init: async () => {},
    answerHook: e => {
      D(e.html).text(), e.question = removeHtml(titleClean(removeHtml(D(e.html).html())));
      let t = D("ul.TiXing>li.DangQianTiXing:eq(0)>a").text(), a = [], n = D(e.html).next();
      switch (e.options = removeStartChar(n.find("ul li").map(((e, t) => (D(t).hasClass("DaAn1") && a.push(e), 
      titleClean(removeHtml(D(t).html()))))).get()), e.answer = a.map((t => e.options[t])), 
      t) {
       case "\u5355\u9009\u9898":
       case "\u8bcd\u6c47\u4e0e\u7ed3\u6784":
       case "\u4ea4\u9645\u7528\u8bed":
        e.type = "0";
        break;

       case "\u591a\u9009\u9898":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
        e.type = "3", e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : [];
      }
      return e;
    }
  } ], pt = [ {
    type: "ask",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u65e7\u7248)",
    tips: "",
    match: () => location.href.includes("study/html/content/studying/?courseOpenId=") || location.href.includes("study/html/content/sxsk/?courseOpenId=") || location.href.includes("study/html/content/tkOnline/?courseOpenId=") || location.href.includes("study/html/content/bkExam/?courseOpenId="),
    types: [ "0", "1", "3" ],
    question: {
      html: ".e-q-body>.e-q",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".e-q-body>.e-q") && isExist(".e-item");
      })), !isExist(".photo-time") && !isExist(".btn_save")) return false;
    },
    ischecked: e => e.parent().hasClass("checked"),
    questionHook: e => {
      var t;
      const a = D(e.html).parent().parent();
      switch (e.type = a ? null == (t = a.attr("id")) ? void 0 : t.trim() : "", e.type) {
       case "2":
        e.type = "1";
        break;

       case "1":
        e.type = "0";
        break;

       case "3":
        e.type = "3", e.$options = D(e.html).find("ul>li");
        break;

       case "4":
        e.type = "2";
        break;

       case "5":
        e.type = "4";
        break;

       default:
        e.type, e.type = "8";
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "4":
       case "2":
        return D(e.html).find("textarea.answer-input").focus(), D(e.html).find(" textarea.answer-input"), 
        D(e.html).find(".answer-input.edui-default").each(((t, a) => {
          let n = D(a).attr("id"), r = W.UE.getEditor(n);
          r.ready((function() {
            r.setContent(`<p>${e.answer[t]}</p>`);
          }));
        })), D(e.html).find(".answer-input").blur(), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u65e7\u7248)",
    tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
    match: () => location.href.includes("study/html/content/studying/?courseOpenId=") || location.href.includes("study/html/content/sxsk/?courseOpenId=") || location.href.includes("study/html/content/tkOnline/?courseOpenId=") || location.href.includes("study/html/content/bkExam/?courseOpenId="),
    question: {
      html: ".e-q-body>.e-q",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".e-save"), isExist(".e-q-body>.e-q") && isExist(".w_e-q-panel");
      })), !isExist(".e-quest-review")) return false;
    },
    answerHook: e => {
      var t;
      const a = D(e.html).parent().parent();
      e.type = a ? null == (t = a.attr("id")) ? void 0 : t.trim() : "", e.$options = D(e.html).find("ul>li");
      let n = D(e.html).find("ul>li.checked").map(((e, t) => removeHtml(D(t).find(".ErichText").html()))).get();
      const r = D(e.html).find(".e-q-right").length > 0;
      e.answer = n.filter((e => "" !== e));
      let s = D(e.html).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(D(t).html()))).get();
      1 === s.length && s[0].length > 1 && (s = s[0].split("\u3001"));
      let i = s.map((t => {
        let a = t.charCodeAt() - 65;
        return e.options[a];
      })).filter((e => "" !== e && void 0 !== e));
      switch (e.type) {
       case "2":
        e.type = "1";
        break;

       case "1":
        e.type = "0";
        break;

       case "3":
        e.type = "3", e.answer = D(e.html).find("ul>li.checked").map(((e, t) => removeHtml(D(t).html()))).get(), 
        e.options = [], isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [];
        break;

       case "4":
        e.type = "2", e.options = [];
        break;

       case "5":
        e.type = "4", i = [ removeHtml(D(e.html).find(".e-ans-ref>.e-ans-r").html()) ], 
        e.options = [];
        break;

       case "11":
        e.type = "19";
        const t = D(e.html).find("form").map(((e, t) => ({
          type: "0",
          question: removeHtml(D(t).find(".e-q-q .ErichText").html()),
          options: D(t).find("ul li .ErichText").map(((e, t) => removeHtml(D(t).html()))).get()
        }))).get();
        i = i.length > 0 ? judgeAnswer(i[0]) : [], e.options = t;

       default:
        return void e.type;
      }
      if (i.length > 0) return e.answer = i, e;
      if (!r && "3" === e.type && e.answer.length > 0) {
        if (e.answer = isTrue((o = e.answer)[0]) || isFalse(o[0]) ? isTrue(o[0]) ? [ "\u9519\u8bef" ] : [ "\u6b63\u786e" ] : [], 
        0 === e.answer.length) return;
      } else if (!r) return;
      var o;
      return e;
    },
    paper: e => {
      const t = W.online, a = {
        platform: "ahjxjy"
      };
      a.hash = t.courseOpenId, a.name = W.localStorage.courseNmae, a.info = {}, a.chapter = [ {
        hash: `${t.cell.id}`,
        name: t.cell.title,
        question: e
      } ], Je.setPaper(a.hash, a);
    }
  }, {
    type: "save",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u65b0\u7248)",
    tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
    match: () => location.href.includes("/myHomework/answerRecord") || location.href.includes("/myHomework/assignment") || location.href.includes("/myExam/examDetails") || location.href.includes("/myExam/examHistory"),
    question: {
      html: ".option>div[id='answer-card-area']",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      var e;
      await waitUntil((function() {
        return isExist(".option>div[id='answer-card-area']");
      }));
      const t = null == (e = D("micro-app-body>#app>div")[0]) ? void 0 : e.__vue__;
      if (!(t && t.hierarchyList || []).some((e => (e.CourseQuestionOptionList || []).some((e => e.IsAnswer))))) return false;
    },
    answerHook: (e, t) => {
      const a = D("micro-app-body>#app>div")[0].__vue__.hierarchyList[t];
      e.type = typeMatch(a.name), e.question = titleClean(removeHtml(a.Content));
      const {options: n, answer: r} = a.CourseQuestionOptionList.reduce(((e, t) => {
        const a = removeHtml(t.Content);
        return t.IsAnswer && e.answer.push(a), e.options.push(a), e;
      }), {
        options: [],
        answer: []
      });
      return e.options = n, e.answer = "3" === e.type ? [ judgeAnswer(r[0]) ] : r, "3" === e.type && (e.options = []), 
      e;
    }
  }, {
    type: "ask",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u65b0\u7248)",
    tips: "\u5355\u9898\u95f4\u9694\u5fc5\u987b\u5927\u4e8e 3 \u79d2\uff01\uff01\u591a\u9009\u9898\u6bcf\u9009\u4e00\u9879\u90fd\u4f1a\u8bf7\u6c42\u63a5\u53e3\uff0c\u5df2\u81ea\u52a8\u653e\u6162\u9010\u9879\u70b9\u51fb\u901f\u5ea6\uff0c\u5426\u5219\u5bb9\u6613\u5f02\u5e38(403)\uff01\uff01",
    match: () => location.href.includes("/myHomework/assignment") || location.href.includes("/myExam/examDetails"),
    types: [ "0", "1", "3" ],
    minDelay: 3e3,
    answerDelay: 1e3,
    optionDelay: 2e3,
    question: {
      html: ".option>div[id='answer-card-area']",
      question: ".ErichText",
      options: "ul.answer-list>li",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".option>div[id='answer-card-area']");
      })), !D(".submit-area").text().includes("\u63d0\u4ea4")) return false;
      const e = D("micro-app-body>#app>div")[0].__vue__, t = e.hierarchyList[0];
      e.goAnchor(t.Id);
    },
    toquestion: e => {
      const t = D("micro-app-body>#app>div")[0].__vue__, a = t.hierarchyList[e];
      (null == a ? void 0 : a.Id) && t.goAnchor(a.Id);
    },
    ischecked: e => e.hasClass("on"),
    questionHook: (e, t) => {
      const a = D("micro-app-body>#app>div")[0].__vue__.hierarchyList[t];
      e.type = typeMatch(a.name), e.question = titleClean(removeHtml(a.Content));
      let n = [];
      return a.CourseQuestionOptionList.forEach((e => {
        const t = removeHtml(e.Content);
        e.IsAnswer, n.push(t);
      })), e.options = n, e.html = "body", e.$options = () => D("ul.answer-list>li"), 
      e;
    }
  }, {
    type: "ask",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u81ea\u8003)",
    tips: "",
    match: () => location.href.includes("/userinfo/testPaper"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".item-card-area",
      question: ".desc",
      options: "ul>li",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".exam-paper-wrap");
      })), isExist(".exam-process-area")) return false;
      const e = D(".exam-paper-wrap")[0].__vue__.topicList.map((e => e.getPaperList)).flat();
      window.Zques = e;
    },
    ischecked: e => e.parent().hasClass("checked"),
    questionHook: (e, t) => {
      const a = Zques[t];
      e.type = typeMatch(a.questionTypeName), e.question = titleClean(removeHtml(a.content));
      const {options: n, answer: r} = a.courseQuestionOptionList.reduce(((e, t) => {
        const a = removeHtml(t.content);
        return t.isAnswer && e.answer.push(a), e.options.push(a), e;
      }), {
        options: [],
        answer: []
      });
      return e.options = n, e.answer = "3" === e.type ? [ judgeAnswer(r[0]) ] : r, "3" === e.type && (e.options = []), 
      e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "4":
       case "2":
        return D(e.html).find("textarea.answer-input").focus(), D(e.html).find(" textarea.answer-input"), 
        D(e.html).find(".answer-input.edui-default").each(((t, a) => {
          let n = D(a).attr("id"), r = W.UE.getEditor(n);
          r.ready((function() {
            r.setContent(`<p>${e.answer[t]}</p>`);
          }));
        })), D(e.html).find(".answer-input").blur(), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u81ea\u8003)",
    tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
    match: () => location.href.includes("/userinfo/testPaper"),
    question: {
      html: ".item-card-area",
      question: ".ErichText",
      options: "ul>li>.ErichText",
      type: ".question-box .tag",
      workType: "ahjxjy",
      pageType: "ahjxjy"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".exam-paper-wrap");
      })), !isExist(".score-describe")) return false;
      const e = D(".exam-paper-wrap")[0].__vue__.topicList.map((e => e.getPaperList)).flat();
      window.Zques = e;
    },
    answerHook: (e, t) => {
      const a = Zques[t];
      e.type = typeMatch(a.questionTypeName), e.question = titleClean(removeHtml(a.content));
      const {options: n, answer: r} = a.courseQuestionOptionList.reduce(((e, t) => {
        const a = removeHtml(t.content);
        return t.isAnswer && e.answer.push(a), e.options.push(a), e;
      }), {
        options: [],
        answer: []
      });
      return e.options = n, e.answer = "3" === e.type ? [ judgeAnswer(r[0]) ] : r, "3" === e.type && (e.options = []), 
      e;
    }
  } ], lettersToOptions = (e, t) => e ? e.split("").map((e => t[e.charCodeAt(0) - 65])).filter((e => null != e)) : [], buildQingshuAnswer = (e, t, a) => {
    if ("15" === e) {
      const e = [], a = [];
      return (t.subQuestions ?? []).forEach((t => {
        const n = (t.options ?? []).map((e => removeHtml(e.description ?? "")));
        a.push(lettersToOptions(t.solution, n)), e.push(n);
      })), {
        options: e,
        answer: a
      };
    }
    if ("3" === e) {
      const [e] = lettersToOptions(t.solution, a);
      return {
        options: [],
        answer: [ isTrue(e ?? "") ? "\u6b63\u786e" : isFalse(e ?? "") ? "\u9519\u8bef" : "" ]
      };
    }
    if ("0" === e || "1" === e) return {
      options: a,
      answer: lettersToOptions(t.solution, a)
    };
    const n = removeHtml(t.solution ?? "").trim();
    return {
      options: a,
      answer: n ? [ n ] : []
    };
  }, ut = [ {
    type: "save",
    name: "\u9752\u4e66\u4f5c\u4e1a\u7b54\u9898\u6536\u5f55",
    match: () => location.host.includes("qingshuxuetang.com") && (location.href.includes("Student/ExercisePaper?courseId=") || location.href.includes("Student/ViewQuiz?quizId=") || location.href.includes("Student/SimulationExercise/Detail?id=") || location.href.includes("Student/Quiz/Detail?id=")),
    question: {
      html: ".paper-container > .question-detail-container",
      question: ".question-detail-description",
      options: ".question-detail-options .question-detail-option .option-description-preview",
      type: ".question-detail-type-desc",
      workType: "qingshu",
      pageType: "qingshu"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".question-detail-container") && W.qsques;
      }));
    },
    answerHook: (e, t) => {
      const a = W.qsques[t];
      e.question = removeHtml(a.description);
      const n = a.options ? a.options.map((e => removeHtml(e.description))) : [];
      e.type = typeConvert(a.typeDesc);
      const r = buildQingshuAnswer(e.type, a, n);
      return e.options = r.options, e.answer = r.answer, e;
    }
  }, {
    type: "ask",
    name: "\u9752\u4e66\u5b66\u5802\u4f5c\u4e1a\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("qingshuxuetang.com") && (location.href.includes("/Student/ExercisePaper") || location.href.includes("Student/ExamPaper") || location.href.includes("Student/ViewQuiz") || location.href.includes("Student/SimulationExercise/Detail") || location.href.includes("Student/Quiz/Detail")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".paper-container > .question-detail-container",
      question: ".question-detail-description",
      options: ".question-detail-options .question-detail-option .option-description",
      type: ".question-detail-type-desc",
      workType: "qingshu",
      pageType: "qingshu"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".question-detail-container") && W.qsques;
      }));
    },
    ischecked: e => e.parent().find("input").prop("checked"),
    toquestion: e => {
      D(`.group_item:eq(${e})`), D(`.group_item:eq(${e})`).click();
    },
    questionHook: (e, t) => {
      const a = W.qsques[t];
      if (e.question = removeHtml(a.description), e.options = a.options ? a.options.map((e => removeHtml(e.description))) : [], 
      e.type = typeConvert(a.typeDesc), "3" === e.type) e.options = [];
      return e;
    }
  } ], dt = [ {
    type: "save",
    name: "\u4f18\u8bfe\u5728\u7ebf\u6536\u5f55",
    match: () => "cce.org.uooconline.com" === location.host && (location.href.includes("/exam/paper") || location.href.includes("/exam/")),
    question: {
      html: ".queContainer",
      question: ".topic-title",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "uooc",
      pageType: "uooc"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".queContainer").length;
      }));
    },
    answerHook: e => {
      const t = W.angular.element(e.html).scope().question;
      if (e.type = typeConvert(t.type_text), e.question = t.question, e.options = t.options_app.map((e => e.value)), 
      e.answer = t.answer.map((e => t.options[e])), "3" === e.type) e.options = [], e.answer = judgeAnswer(e.answer[0]);
      return e;
    }
  } ], mt = [ {
    type: "ask",
    name: "\u4eac\u4eba\u5e73\u53f0\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("cj-edu.com") && (location.href.includes("/Examination") || location.href.includes("/ExamInfo")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".el-main>.all_subject>div.el-row",
      question: "div.stem",
      options: "ul li > label > span.el-radio__label > div:nth-child(2),ul li > label > span.el-checkbox__label > div:nth-child(2)",
      type: ".question-box .tag",
      workType: "cjedu",
      pageType: "cjedu"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".el-main>.all_subject>div.el-row").length;
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      switch (D(e.html).prevAll("h1").first().text().trim()) {
       case "\u5355\u9009\u9898":
        e.type = "0";
        break;

       case "\u591a\u9009\u9898":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
        e.$options = D(e.html).find("ul li>label"), e.options = [], e.type = "3";
      }
      return e;
    }
  }, {
    type: "save",
    name: "\u4eac\u4eba\u5e73\u53f0\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.host.includes("cj-edu.com") && location.href.includes("/ViewAnswerSheet"),
    question: {
      html: ".el-main>.all_subject>div.el-row",
      question: "p.stem",
      options: "ul li > label > span.el-radio__label > div:nth-child(2),ul li > label > span.el-checkbox__label > div:nth-child(2)",
      type: ".question-box .tag",
      workType: "cjedu",
      pageType: "cjedu"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".el-main>.all_subject>div.el-row").length;
      }));
    },
    answerHook: e => {
      let t = D(e.html).find(".seeStudentAnswer>p.answer").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim(), a = D(e.html).prevAll("h1").first().text().trim();
      switch (e.options.length > 0 && (e.answer = t.split(",").map((t => e.options[t.charCodeAt(0) - 65]))), 
      a) {
       case "\u5355\u9009\u9898":
        e.type = "0";
        break;

       case "\u591a\u9009\u9898":
        e.type = "1";
        break;

       case "\u5224\u65ad\u9898":
        e.options = [], e.answer = judgeAnswer(t), e.type = "3";
      }
      return e;
    }
  } ], ht = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("ytccr.com"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "\u7ece\u901a\u7ee7\u6559\u4e91\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("ytccr.com") && location.href.includes("learning-work") && location.href.includes("type=3"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".border-item",
      question: ".title.qa-title",
      options: ".opts-list .opt-title-cnt",
      type: ".question-box .tag",
      workType: "ytccr",
      pageType: "ytccr"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".border-item").length;
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      if (e.type = typeConvert(D(e.html).find(".qtype").text().trim()), "3" === e.type) e.options = [];
      return e;
    }
  }, {
    type: "save",
    name: "\u7ece\u901a\u7ee7\u6559\u4e91\u6536\u5f55",
    match: () => location.host.includes("ytccr.com") && location.href.includes("learning-work") && location.href.includes("type=5"),
    question: {
      html: ".border-item",
      question: ".title.qa-title",
      options: ".opts-list .opt-title-cnt",
      type: ".question-box .tag",
      workType: "ytccr",
      pageType: "ytccr"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".border-item").length;
      }));
    },
    answerHook: e => {
      e.type = typeConvert(D(e.html).find(".qtype").text().trim());
      let t = D(e.html).find(".u-text-success,.u-text-danger").text().split("\uff0c")[0].trim();
      if (t = t.match(/[A-Z]+$/)[0].trim(), e.answer = t.split("").map((t => e.options[t.charCodeAt(0) - 65])), 
      0 === e.answer.length) return e;
      if ("3" === e.type) e.options = [], e.answer = judgeAnswer(e.answer[0]);
      return e;
    }
  } ], ft = [ {
    type: "ask",
    name: "\u5b66\u8d77\u8003\u8bd5",
    tips: "",
    match: () => location.href.includes("oxer/page/ots/examIndex.html"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".queItemClass",
      question: "dt > div.din:eq(1)",
      options: "dd > div",
      type: ".question-box .tag",
      workType: "xueqi",
      pageType: "xueqi"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".queItemClass");
      })), W.document.onkeydown = null, W.oncontextmenu = null;
    },
    ischecked: e => e.parent().hasClass("cur"),
    questionHook: e => {
      let t = D(e.html).parent().find("div .fb:eq(0)").text().split("\u3001")[1];
      if (t.includes("\u5224\u65ad") && (t = "\u5224\u65ad\u9898"), e.type = typeMatch(t), 
      "3" === e.type) e.options = [], e.$options = D(e.html).find("input");
      return e;
    },
    setAnswer: e => {
      if ("3" === e.type) {
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).val())) && D(a).click(), isFalse(t) && isFalse(removeHtml(D(a).val())) && D(a).click();
        })), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u5b66\u671f\u8003\u8bd5\u6536\u5f55",
    match: () => location.href.includes("OTS-UniverDetail.html"),
    question: {
      html: ".dl_list",
      question: "dt > div.fl:eq(1)",
      options: "dd > var",
      type: ".question-box .tag",
      workType: "xueqi",
      pageType: "xueqi"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".dl_list");
      }));
    },
    answerHook: e => {
      var t, a, n;
      const r = D(e.html).attr("queid"), s = e.html._ms_context_.el.questions.find((e => e.id === r));
      s.questionTypeName.includes("\u5224\u65ad") && (s.questionTypeName = "\u5224\u65ad\u9898"), 
      e.type = typeMatch(s.questionTypeName), e.question = removeHtml(s.stem);
      const i = ((null == (t = s.answerArea) ? void 0 : t.optionList) || []).slice().sort(((e, t) => e.sequence - t.sequence));
      e.options = i.map((e => removeHtml(e.content)));
      if (!!!((null == (a = s.answer) ? void 0 : a.ans) || Array.isArray(null == (n = s.answer) ? void 0 : n.ansL) && s.answer.ansL.length) && 0 === s.answerScore) return;
      const o = i.filter((e => e.isTrue)).map((e => removeHtml(e.content))), l = ((e, t, a, n) => {
        const r = t || {}, s = r.ans || (Array.isArray(r.ansL) ? r.ansL.join("") : "");
        if ("3" === e) return {
          answer: judgeAnswer(String(s)),
          options: []
        };
        if ("0" === e || "1" === e) {
          if (s) {
            const e = String(s).split("").map((e => a[e.charCodeAt(0) - 65])).filter((e => void 0 !== e));
            if (e.length > 0) return {
              answer: e,
              options: a
            };
          }
          return {
            answer: n,
            options: a
          };
        }
        return {
          answer: (Array.isArray(r.ansL) && r.ansL.length > 0 ? r.ansL : r.ans ? [ r.ans ] : []).map((e => removeHtml(String(e)))).filter(Boolean),
          options: a
        };
      })(e.type, s.answer, e.options, o);
      return e.answer = l.answer, e.options = l.options, e;
    },
    paper: e => {
      const t = D(".dl_list:eq(0)")[0]._ms_context_.loop.category, a = D(".dl_list:eq(0)")[0]._ms_context_.oAnswerDetailInfo, n = {
        platform: "xueqi"
      };
      n.hash = t.code, n.name = t.value, n.info = {}, n.chapter = [ {
        hash: `${a.arrangementid}`,
        name: a.arrangementname,
        question: e
      } ], Je.setPaper(n.hash, n);
    }
  } ], gt = [ {
    type: "hook",
    name: "hook",
    match: "gdrtvu.exam-cloud.cn" === location.host,
    main: e => {
      observeVuePageChange(D("#app")[0], getUrl);
    }
  }, {
    type: "ask",
    name: "\u7b54\u9898",
    tips: "\u516c\u544a",
    match: () => location.host.includes("exam-cloud.cn") && location.href.includes("oe-web/online-exam/exam"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".question-container",
      question: ".question-body:first",
      options: ".option .question-options",
      type: ".question-header .container",
      workType: "guangkai",
      pageType: "guangkai"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".question-container");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      let t = D(".list .current-question").parent().parent().find(".title").text();
      if (console.log(t), t = t.split("\u3001")[1], t = t.replace(/\(.*\)/, "").trim(), 
      console.log(t), e.type = typeConvert(t), "8" == e.type ? e.type = typeMatch(t) : e.type, 
      "3" === e.type) e.options = [];
      return e;
    },
    finish: e => {
      D(".next .qm-primary-button").length && D(".next .qm-primary-button")[0].click();
    }
  } ], vt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("open.ha.cn"),
    main: e => {
      const getHash = () => D(".stuHomeworkVersionId.active").attr("id");
      W.mainClass = getHash();
      let t = new MutationObserver((async e => {
        getHash(), W.mainClass !== getHash() && (W.mainClass = getHash(), vuePageChange(), 
        t.disconnect());
      }));
      D(".homeworkBody").length >= 1 && t.observe(D(".homeworkBody")[0], {
        subtree: true,
        attributes: true,
        childList: true
      });
    }
  }, {
    type: "ask",
    name: "\u4e91\u4e0a\u6cb3\u5f00\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("open.ha.cn") && location.href.includes("/homework/showHomeworkByStatus") && location.href.includes("checked=false"),
    types: [ "0", "1" ],
    question: {
      html: ".layui-colla-content > .insert",
      question: ".window-title",
      options: ".option-title",
      type: ".question-box .tag",
      workType: "openha",
      pageType: "openha"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".layui-colla-content > .insert");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => (e.options = e.$options.map(((t, a) => {
      let n = D(a).find(".numberCover").text().trim();
      return removeHtml(e.$options.eq(t).html()).replace(n, "").trim();
    })).get(), e.type = typeConvert(D(e.html).find(".questionDiv>.float-l:eq(1)").text().trim()), 
    e.$options = D(e.html).find(".option-title .numberCover"), e)
  }, {
    type: "save",
    name: "\u4e91\u4e0a\u6cb3\u5f00\u6536\u5f55",
    match: () => location.host.includes("open.ha.cn") && location.href.includes("/homework/showHomeworkByStatus") && location.href.includes("checked=true"),
    question: {
      html: ".layui-colla-content > .insert",
      question: ".window-title",
      options: ".option-title",
      type: ".question-box .tag",
      workType: "openha",
      pageType: "openha"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".layui-colla-content > .insert");
      }));
    },
    answerHook: e => {
      let t = [];
      const a = 0 == D(e.html).find(".option-title.error2").length;
      if (e.options = e.$options.map(((a, n) => {
        let r = D(n).find(".numberCover").text().trim(), s = removeHtml(e.$options.eq(a).html()).replace(r, "").trim();
        return D(n).hasClass("answer-title") && t.push(s), s;
      })).get(), e.type = typeConvert(D(e.html).find(".questionDiv>.float-l:eq(1)").text().trim()), 
      a) return e.answer = t, D(e.html).find(".option-title.error2"), e;
    },
    paper: e => {
      const t = W.homework, a = {
        platform: "openha"
      };
      a.hash = t.courseId, a.name = t.courseName, a.info = {}, a.chapter = [ {
        hash: `${t.homeworkId}`,
        name: t.title,
        question: e
      } ], Je.setPaper(a.hash, a);
    }
  } ], yt = [ {
    type: "ask",
    name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("uc/task/startTask"),
    types: [ "0", "1" ],
    answerDelay: 1e3,
    minDelay: 1e3,
    question: {
      html: ".carousel-inner>.item.changeless-box",
      question: ".exam-tg-txt__wrap.e-tg-box",
      options: ".ic-options-list address",
      type: ".question-box .tag",
      workType: "cloudwis",
      pageType: "cloudwis"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".carousel-inner>.item.changeless-box");
      })), !isExist("#finish")) return false;
      await waitUntil((function() {
        let e = D(".carousel-inner>article").filter(((e, t) => D(t).hasClass("temporary-box"))).eq(0).index();
        return e > 0 ? (D(".slide-tihao:eq(" + e + ")")[0].click(), !1) : (D(".slide-tihao:eq(0)")[0].click(), 
        !0);
      }));
    },
    toquestion: e => {
      D(".slide-tihao:eq(" + e + ")")[0].click();
    },
    ischecked: e => e.find(".checked").length > 0,
    questionHook: e => (e.type = typeConvert(D(e.html).attr("data-name") || ""), e.$options = D(e.html).find(".ic-options__wrap label"), 
    e.question = e.question.replace(/^\(\d+\)/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
    e)
  }, {
    type: "ask",
    name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u8003\u8bd5\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("uc/exam/record/startExamination"),
    types: [ "0", "1" ],
    question: {
      html: ".trunk-box",
      question: ".exam-tg-txt__wrap.e-tg-box",
      options: ".ic-options-list address",
      type: ".question-box .tag",
      workType: "cloudwis",
      pageType: "cloudwis"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".trunk-box") && isExist(".ic-ac-checkbox-ol");
      })), await waitUntil((function() {
        return window.scrollTo(0, document.body.scrollHeight), D(".ic-ac-checkbox-ol li").length == D(".trunk-box").length;
      })), !isExist("#submit-btn")) return false;
    },
    next: () => {
      D("#carousel-professional").carousel("next");
    },
    ischecked: e => e.find(".checked").length > 0,
    questionHook: e => {
      const t = D(e.html).attr("data-type");
      switch (console.log(t), t) {
       case "1":
        e.type = "0";
        break;

       case "2":
        e.type = "1";
        break;

       case "3":
        e.type = "3", e.options = [];
      }
      return e.question = e.question.replace(/^\d+\u3001/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
      e.question = e.question.replace(/\[\S+\]$/, "").trim(), e.$options = D(e.html).find(".ic-options__wrap label"), 
      e;
    }
  }, {
    type: "save",
    name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u6536\u5f55",
    match: () => location.href.includes("uc/task/startTask"),
    question: {
      html: ".carousel-inner>.item.changeless-box",
      question: ".exam-tg-txt__wrap.e-tg-box",
      options: ".ic-options-list address",
      type: ".question-box .tag",
      workType: "cloudwis",
      pageType: "cloudwis"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".carousel-inner>.item.changeless-box") && isExist(".slide-tihao");
      })), isExist("#finish")) return false;
      await waitUntil((function() {
        let e = D(".carousel-inner>article").filter(((e, t) => D(t).hasClass("temporary-box"))).eq(0).index();
        return e > 0 ? (D(".slide-tihao:eq(" + e + ")")[0].click(), !1) : (D(".slide-tihao:eq(0)")[0].click(), 
        !0);
      }));
    },
    answerHook: e => {
      const t = D(e.html).find(".analysis-box .fs20.c-primary.vam").text().trim().split("");
      return e.type = typeConvert(D(e.html).attr("data-name") || ""), e.answer = t.map((t => e.options[t.charCodeAt(0) - 65])), 
      e.question = e.question.replace(/^\(\d+\)/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
      e;
    }
  }, {
    type: "save",
    name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u8003\u8bd5\u6536\u5f55",
    match: () => location.href.includes("uc/exam/record/startExamination"),
    question: {
      html: ".trunk-box.answer-question",
      question: ".exam-tg-txt__wrap.e-tg-box",
      options: ".ic-options-list address",
      type: ".question-box .tag",
      workType: "cloudwis",
      pageType: "cloudwis"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".trunk-box") && isExist(".ic-ac-correct");
      })), await waitUntil((function() {
        return window.scrollTo(0, document.body.scrollHeight), D(".ic-ac-correct,.ic-ac-error").length == D(".trunk-box").length;
      })), isExist("#submit-btn")) return false;
    },
    next: () => {
      D(".next-slide").click();
    },
    answerHook: e => {
      const t = D(e.html).attr("data-type");
      console.log(t);
      const a = D(e.html).find(".ic-options__wrap label").filter(((e, t) => D(t).find(".checked").length > 0)).map(((e, t) => removeHtml(D(t).html()))).get();
      switch (e.answer = a.map((t => e.options[t.charCodeAt(0) - 65])), e.question = e.question.replace(/^\d+\u3001/, "").trim(), 
      e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), e.question = e.question.replace(/\[\S+\]$/, "").trim(), 
      t) {
       case "1":
        e.type = "0";
        break;

       case "2":
        e.type = "1";
        break;

       case "3":
        e.type = "3", e.options = [], e.answer = judgeAnswer(e.answer[0]);
      }
      return e;
    }
  } ], bt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("sclecb.cn"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u7b54\u9898",
    tips: "",
    match: () => "study.sclecb.cn" === location.host && /\/[0-9]+\/show/i.test(location.href),
    types: [ "0", "1", "3" ],
    question: {
      html: ".testpaper-question.js-testpaper-question",
      question: ".testpaper-question-stem",
      options: ".testpaper-question-choices li",
      type: ".question-box .tag",
      workType: "sclecb",
      pageType: "sclecb"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".testpaper-question.js-testpaper-question");
      }));
    },
    ischecked: e => e.hasClass("checked"),
    questionHook: e => {
      switch (e.options = removeStartChar(e.options), e.$options = D(e.html).find(".testpaper-question-choice-inputs > label > input"), 
      e.type = typeConvert(D(e.html).parent().parent().find(".panel-heading>strong").text().trim()), 
      e.type, e.type) {
       case "0":
       case "1":
        break;

       case "3":
        e.$options = D(e.html).find(".radio-inline");
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u7b54\u9898\u65e7",
    tips: "",
    match: () => location.host.includes("sclecb.cn") && /student\/course\/study\/[0-9a-zA-Z]+\/test\/redo/i.test(location.href),
    types: [ "0", "1" ],
    question: {
      html: ".questiono-item",
      question: ".clearfix.questiono-header h6",
      options: ".common_test_option .processing_img",
      type: ".question-box .tag",
      workType: "sclecb",
      pageType: "sclecb"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".questiono-item");
      }));
    },
    ischecked: e => e.hasClass("checked"),
    questionHook: e => {
      const t = D(e.html).parent().parent().find("div:eq(0)").text().trim();
      switch (true) {
       case t.includes("\u5355\u9009\u9898"):
        e.type = "0";
        break;

       case t.includes("\u591a\u9009\u9898"):
        e.type = "1";
        break;

       case t.includes("\u5224\u65ad\u9898"):
        e.type = "3", e.options = [], e.$options = D(e.html).find(".common_test_option > label");
        break;

       default:
        return;
      }
      return e;
    }
  }, {
    type: "save",
    name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u6536\u5f55",
    match: () => "study.sclecb.cn" === location.host && (/task\/[0-9]+\/activity_show/i.test(location.href) || /result\/[0-9]+\/show/i.test(location.href)),
    question: {
      html: ".testpaper-question.js-testpaper-question",
      question: ".testpaper-question-stem",
      options: ".testpaper-question-choices li",
      type: ".question-box .tag",
      workType: "sclecb",
      pageType: "sclecb"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".testpaper-question.js-testpaper-question");
      }));
    },
    answerHook: (e, t) => {
      let a = [];
      e.options = e.$options.map(((e, t) => {
        const n = removeHtml(D(t).clone().find(".testpaper-question-choice-index").remove().end().html());
        return D(t).hasClass("testpaper-question-choice-right") && a.push(n), n;
      })).get(), e.answer = a, e.type = typeConvert(D(".js-panel-card>span").eq(t).prevAll("p").first().text().trim());
      const n = D(".js-panel-card>span").eq(t).hasClass("bg-success");
      switch (e.type) {
       case "0":
       case "1":
        break;

       case "3":
        let t = "";
        t = D(e.html).find(".testpaper-question-result").text().replace("\u4f60\u7684\u7b54\u6848\u662f", "").trim(), 
        e.answer = judgeAnswer(t);
      }
      if ((n || !(e.answer.length > 0) || "3" != e.type) && n) return e;
    }
  } ], wt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("superchutou.com"),
    main: e => {
      observeVuePageChange(D("#root")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "\u51fa\u5934\u7cfb\u7edf\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("superchutou.com") && location.href.includes("onlineclass/exam/"),
    types: [ "0", "1" ],
    question: {
      html: "[class^='single_excer_item']",
      question: "[class^='title_content'] > [class^='title_content_text']:eq(1)",
      options: "[class^='options_content'] label",
      type: ".question-box .tag",
      workType: "chutou",
      pageType: "chutou"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("[class^='single_excer_item']");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      let t = D(e.html).find("[class^='title_content'] > span:eq(1)").text();
      if (t = t.replace(/\u3010|\u3011/g, "").trim(), e.type = typeConvert(t), e.options = removeStartChar(e.options), 
      "3" === e.type) e.options = [];
      return e;
    }
  }, {
    type: "save",
    name: "\u51fa\u5934\u6536\u5f55",
    match: () => location.host.includes("superchutou.com") && location.href.includes("/onlineclass/analysis/"),
    question: {
      html: "[class^='single_excer_item']",
      question: "[class^='title_content'] > [class^='title_content_text']:eq(1)",
      options: "[class^='options_content'] label",
      type: ".question-box .tag",
      workType: "chutou",
      pageType: "chutou"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("dl>dd>span");
      }));
    },
    answerHook: e => {
      let t = D(e.html).find("[class^='title_content'] > span:eq(1)").text();
      t = t.replace(/\u3010|\u3011/g, "").trim(), e.type = typeConvert(t), e.options = removeStartChar(e.options);
      const a = D(e.html).find(".ant-collapse-header>div.ant-row>div.ant-col.ant-col-18>div:eq(1)").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim();
      switch (e.type) {
       case "0":
       case "1":
        e.answer = a.split("").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case "3":
        e.options = [], e.answer = judgeAnswer(a);
      }
      return e;
    }
  } ], xt = [ {
    type: "ask",
    name: "\u826f\u5e08\u5728\u7ebf\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("ls365.net") && (location.href.includes("student/examing.aspx") || location.href.includes("Student/myhomework.aspx")),
    types: [ "0", "1" ],
    question: {
      html: ".exam_question",
      question: ".exam_question_title",
      options: ".question_select .select_detail",
      type: ".exam_question_title strong",
      workType: "ls365",
      pageType: "ls365"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".exam_question");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      let t = D(e.html).find(".exam_question_title").clone();
      t.find(".question_number").remove(), t.find("strong").remove(), t.find(".exam_feed_back").remove(), 
      e.question = removeHtml(t.html());
      let a = D(e.html).find(".exam_question_title strong").text();
      return a = a.replace(/\[|\]/g, "").trim(), e.type = typeConvert(a), e;
    }
  }, {
    type: "save",
    name: "\u826f\u5e08\u5728\u7ebf\u8003\u8bd5\u6536\u5f55",
    match: () => location.host.includes("ls365.net") && location.href.includes("User/Student/ViewPaper.aspx"),
    question: {
      html: "[name^='anchor_']",
      question: ".title-img-ctr",
      options: ".pold .phtml",
      type: ".QuestionsType",
      workType: "ls365",
      pageType: "ls365"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("[name^='anchor_']");
      }));
    },
    answerHook: e => {
      let t = D(e.html).find(".QuestionsType").text();
      t = t.replace(/\[|\]/g, "").trim(), e.type = typeConvert(t);
      let a = D(e.html).find(".my-work-answer>p").filter(((e, t) => t.innerText.includes("\u53c2\u8003\u7b54\u6848"))).map(((e, t) => D(t).find(".two").text())).get();
      if (0 !== a.length) return e.answer = a[0].split("").map((t => e.options[t.charCodeAt(0) - 65])), 
      e;
    }
  }, {
    type: "save",
    name: "\u826f\u5e08\u5728\u7ebf\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.host.includes("ls365.net") && location.href.includes("Student/myhomework_after.aspx"),
    question: {
      html: "[name^='anchor_']",
      question: ".my-work-nav>.col-md-10",
      options: ".pold .phtml",
      type: ".QuestionsType",
      workType: "ls365",
      pageType: "ls365"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("[name^='anchor_']");
      }));
    },
    answerHook: e => {
      let t = D(e.html).find(".my-work-nav>div:eq(0)>span:eq(0)").text();
      t = t.replace(/\[|\]/g, "").trim(), e.type = typeConvert(t);
      let a = D(e.html).find(".my-work-answer>p").filter(((e, t) => t.innerText.includes("\u53c2\u8003\u7b54\u6848"))).map(((e, t) => D(t).find(".two").text())).get();
      if (0 !== a.length) return e.answer = a[0].split("").map((t => e.options[t.charCodeAt(0) - 65])), 
      e;
    }
  }, {
    type: "hook",
    name: "hook",
    match: "hbnun.lsedu.vip" === location.host,
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "\u826f\u5e08\u5728\u7ebf\u4f5c\u4e1a\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("/#/homework/") && !location.href.includes("scene=history"),
    types: [ "0", "1" ],
    question: {
      html: "[id^='question-']",
      question: ".question-content",
      options: "button .flex-1.text-left",
      type: ".self-start.text-3.self-end",
      workType: "ls365",
      pageType: "ls365"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("[id^='question-']");
      }));
    },
    ischecked: e => D(e).closest("button").hasClass("is-checked") || D(e).closest("button").hasClass("el-button--primary"),
    questionHook: e => {
      let t = D(e.html).find(".self-start.text-3.self-end").text();
      return t && (t = t.replace(/\[|\]/g, "").trim(), e.type = typeMatch(t)), e;
    }
  }, {
    type: "save",
    name: "\u826f\u5e08\u5728\u7ebf\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.href.includes("/#/homework/") && location.href.includes("scene=history"),
    question: {
      html: "[id^='question-']",
      question: ".question-content",
      options: ".flex.flex-col.space-y-2 .f-c-c.space-x-3 .flex-1",
      type: ".self-start.text-3.self-end",
      workType: "ls365",
      pageType: "ls365"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("[id^='question-']");
      }));
    },
    answerHook: e => {
      let t = D(e.html).find(".self-start.text-3.self-end").text();
      t && (t = t.replace(/\[|\]/g, "").trim(), e.type = typeMatch(t));
      let a = "";
      if (D(e.html).find("div").each(((e, t) => {
        const n = D(t);
        if ((n.find("span").filter(((e, t) => D(t).text().trim().includes("\u6807\u51c6\u7b54\u6848\uff1a"))).length > 0 || n.text().trim().includes("\u6807\u51c6\u7b54\u6848\uff1a")) && (a = n.find(".question-content").text().trim(), 
        a)) return false;
      })), a) return e.answer = a.split("").map((t => {
        const a = t.charCodeAt(0) - 65;
        return e.options && e.options[a] ? e.options[a] : null;
      })).filter((e => null !== e)), e;
    }
  } ], kt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("jijiaox.com"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.path));
    }
  }, {
    type: "ask",
    name: "\u7ee7\u6559\u4e91\u8003\u8bd5\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("jijiaox.com") && (location.href.includes("/mg/studentindexexam/") || !location.href.includes("examrec")),
    types: [ "0", "1", "3", "4" ],
    question: {
      html: ".question>div",
      question: ".topic-title",
      options: ".ml_2 label",
      type: ".question-box .tag",
      workType: "jijiaox",
      pageType: "jijiaox"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".question>div");
      }));
    },
    ischecked: e => e.hasClass("is-checked"),
    questionHook: (e, t) => {
      const a = D(".page")[0].__vue__.$data.testInfo.studentPraxisList[t];
      switch (e.options = a.options ? a.options : [], "string" == typeof e.options && (e.options = []), 
      e.question = removeHtml(a.title), a.type) {
       case "single":
        e.type = "0";
        break;

       case "muti":
        e.type = "1";
        break;

       case "charge":
        e.type = "3";
        break;

       case "text":
        e.type = "4";
        break;

       default:
        console.log(a.type, "\u672a\u77e5\u7c7b\u578b");
      }
      return e;
    },
    setAnswer: e => "4" !== e.type || (D(e.html).find(".editor")[0].__vue__.editor.txt.html(e.answer[0]), 
    false)
  }, {
    type: "save",
    name: "\u7ee7\u6559\u4e91\u8003\u8bd5\u6536\u5f55",
    match: () => location.host.includes("jijiaox.com") && location.href.includes("/mg/studentindexexam/examrec/"),
    question: {
      html: ".question>div",
      question: ".topic-title",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "jijiaox",
      pageType: "jijiaox"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".question>div");
      }));
    },
    answerHook: (e, t) => {
      const a = D(".page")[0].__vue__.$data.testInfo.studentPraxisList[t], n = a.answer;
      switch (e.options = a.options ? a.options : [], "string" == typeof e.options && (e.options = []), 
      e.question = removeHtml(a.title), a.type) {
       case "single":
        e.type = "0";
        break;

       case "muti":
        e.type = "1";
        break;

       case "charge":
        e.type = "3", e.answer = "1" == n ? [ "\u6b63\u786e" ] : "-1" == n ? [ "\u9519\u8bef" ] : [];
        break;

       case "text":
        e.type = "4", e.answer = [ removeHtml(n) ];
        break;

       default:
        console.log(a.type, "\u672a\u77e5\u7c7b\u578b");
      }
      switch (e.type) {
       case "0":
       case "1":
        console.log("________", n), e.answer = "string" == typeof n ? n.split("").map((t => e.options[t.charCodeAt(0) - 65])) : n.map((t => (console.log(t), 
        e.options[t.charCodeAt(0) - 65])));
      }
      return console.log(e), e;
    }
  } ], isJudgeOptions$1 = e => Array.isArray(e) && 2 === e.length && e.every((e => isTrue(e) || isFalse(e))), qt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("wencaischool.net") && D("#app").length,
    main: e => {
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.path));
      const t = document.createElement("style");
      t.type = "text/css", t.innerHTML = "* {\n              font-size: 13px !important;\n            }", 
      document.head.appendChild(t);
    }
  }, {
    type: "save",
    name: "\u67e0\u6aac\u6587\u624d\u8003\u8bd5\u6536\u5f55",
    match: () => location.host.includes("wencaischool.net") && location.href.includes("/separation/exam/index.html"),
    question: {
      html: ".tmList",
      question: ".tmTitleTxt",
      options: ".perRad .opCont",
      type: ".question-box .tag",
      workType: "wencai",
      pageType: "wencai"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".tmList") && D("#onlineExamArea")[0].__vue__._data.itemsList.length > 0;
      }));
      return !(true !== D("#onlineExamArea")[0].__vue__._data.ifShowResult);
    },
    answerHook: (e, t) => {
      const a = D("#onlineExamArea")[0].__vue__._data.itemsList[t];
      e.question = removeHtml(a.itemName), e.options = a.optionNodes.map((e => removeHtml(e.optionContent)));
      e.type = typeConvert({
        1: "\u586b\u7a7a\u9898",
        2: "\u7b80\u7b54\u9898",
        3: "\u5355\u9009\u9898",
        4: "\u591a\u9009\u9898",
        5: "\u9605\u8bfb\u7406\u89e3",
        12: "\u5b8c\u5f62\u586b\u7a7a"
      }[a.itemType]);
      let n = a.itemAnswer[0].optionContent;
      if ("0" === e.type && isJudgeOptions$1(e.options)) {
        const t = e.options[n.charCodeAt(0) - 65];
        return e.type = "3", e.answer = judgeAnswer(t), e.options = [], e;
      }
      switch (e.type) {
       case "0":
       case "1":
        e.answer = n.split("").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case "4":
        e.answer = removeHtml(n);
        break;

       case "2":
        e.answer = a.itemAnswer.map((e => removeHtml(e.optionContent)));
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u67e0\u6aac\u6587\u624d\u8003\u8bd5\u7b54\u9898",
    tips: "\u6b64\u5e73\u53f0\u7b54\u9898\u95f4\u9694\u5c3d\u91cf3s\u5de6\u53f3\uff0c\u5426\u5219\u53ef\u80fd\u9009\u4e0d\u4e0a\u7b54\u6848",
    match: () => location.host.includes("wencaischool.net") && location.href.includes("/separation/exam/index.html"),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7", "14" ],
    minDelay: 4e3,
    answerDelay: 1e3,
    question: {
      html: ".tmList",
      question: ".tmTitleTxt",
      options: ".perRad .opCont",
      type: ".question-box .tag",
      workType: "wencai",
      pageType: "wencai"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".tmList") && D("#onlineExamArea")[0].__vue__._data.itemsList.length > 0;
      }));
    },
    ischecked: e => e[0].checked,
    questionHook: e => {
      let t = D(e.html).find(".tmc.tm").attr("ttype");
      return e.type = typeConvert({
        1: "\u586b\u7a7a\u9898",
        2: "\u7b80\u7b54\u9898",
        3: "\u5355\u9009\u9898",
        4: "\u591a\u9009\u9898",
        5: "\u9605\u8bfb\u7406\u89e3",
        12: "\u5b8c\u5f62\u586b\u7a7a"
      }[t]), e.$options = D(e.html).find(".perRad input"), "0" === e.type && isJudgeOptions$1(e.options) && (e.type = "3", 
      e.options = []), e;
    },
    setAnswer: async e => {
      const fillInput = (e, t) => {
        const a = null == t ? "" : String(t), n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value");
        e.focus(), n && n.set ? n.set.call(e, a) : e.value = a, e.dispatchEvent(new Event("input", {
          bubbles: true
        })), e.dispatchEvent(new Event("change", {
          bubbles: true
        })), e.blur();
      };
      switch (e.type) {
       case "4":
        {
          const t = D(e.html).find("textarea")[0];
          return t && fillInput(t, e.answer[0]), false;
        }

       case "2":
        {
          const t = D(e.html).find(".ansbox.inputAnswer input").toArray(), a = Array.isArray(e.answer) ? e.answer : [ e.answer ];
          for (let e = 0; e < t.length; e++) {
            const n = a[e];
            null != n && (fillInput(t[e], n), await sleep(300));
          }
          return false;
        }

       case "3":
        {
          const t = Array.isArray(e.answer) ? e.answer[0] : e.answer;
          return D(e.html).find(".perRad").each(((e, a) => {
            const n = removeHtml(D(a).find(".opCont").html()), r = D(a).find("input")[0];
            r && (isTrue(t) && isTrue(n) || isFalse(t) && isFalse(n)) && r.click();
          })), false;
        }
      }
      return true;
    }
  }, {
    type: "ask",
    name: "\u67e0\u6aac\u6587\u624d\u4f5c\u4e1a\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("wencaischool.net") && location.href.includes("/exam/portal/exam.jsp"),
    types: [ "0", "1", "2", "3" ],
    question: {
      html: "table[id^='tblItem_'][islabel='0']",
      question: "table>tbody>tr:eq(0)>td:eq(0)",
      options: "table>tbody>tr:eq(1)>td:eq(0) table>tbody>tr>td>label",
      type: ".question-box .tag",
      workType: "wencai",
      pageType: "wencai"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist("table[id^='tblItem_'][islabel=0]");
      })), D(".aah_wrapper>div").css("z-index", 9999);
    },
    ischecked: e => e[0].checked,
    questionHook: e => {
      let t = removeHtml(D(e.html).parent().parent().prevAll("tr").filter((function() {
        return D(this).find("table[islabel='1']").length > 0;
      })).first().html());
      if (e.type = typeMatch(t), "8" == e.type && t.includes("\u9009\u62e9\u9898") && (e.type = "0"), 
      "3" === e.type) e.options = [];
      return e;
    },
    setAnswer: e => {
      if ("2" === e.type) {
        const t = D(e.html).find("table>tbody>tr:eq(0)>td:eq(0)>input");
        t.length == e.answer.length && t.each((async (t, a) => {
          a.value = "", a.focus(), document.execCommand("selectAll");
          let n = e.answer[t];
          document.execCommand("insertText", false, n), await sleep(1e3);
        }));
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u67e0\u6aac\u6587\u624d\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.host.includes("wencaischool.net") && location.href.includes("/exam/portal/view_answer.jsp"),
    question: {
      html: "tr[id^='trScore_']",
      question: "table>tbody>tr:eq(0)>td:eq(0)",
      options: "table>tbody>tr:eq(1)>td:eq(0) table>tbody>tr>td>label",
      type: ".question-box .tag",
      workType: "wencai",
      pageType: "wencai"
    },
    init: async () => {},
    answerHook: (e, t) => {
      const a = removeHtml(D(e.html).prevAll("tr:not([id])").first().html());
      switch (e.type = typeMatch(a), "8" == e.type && a.includes("\u9009\u62e9\u9898") && (e.type = "0"), 
      e.type) {
       case "0":
       case "1":
       case "3":
        const t = D(e.html).find("table>tbody>tr:eq(1)>td:eq(0)>div[style='color:darkred;font-size:10pt']").text().split("\u7b54\u6848\uff1a")[1].split("]")[0];
        e.answer = t.split("").map((t => e.options[t.charCodeAt(0) - 65])), "3" == e.type && (e.options = [], 
        e.answer = judgeAnswer(e.answer[0]));
        break;

       case "2":
        const a = D(e.html).find("table>tbody>tr:eq(0)>td:eq(0)").clone();
        a.find("input").remove(), e.answer = a.find("nobr").map(((e, t) => {
          const a = removeHtml(D(t).html());
          return /\[\u53c2\u8003\u7b54\u6848\uff1a(.+?)\]/.exec(a)[1];
        })).get(), a.find("nobr").remove(), a.find("font").remove(), e.question = removeHtml(a.html());
      }
      return e;
    }
  } ], _t = [ {
    type: "save",
    name: "yxlearning\u6536\u5f55",
    match: () => location.host.includes("yxlearning.com") && location.href.includes("exam/start?myExamRecordId"),
    question: {
      html: ".subject>.mb20.sub",
      question: ".ls1.lh30.text-f666",
      options: "ul.options>li.cursor-p",
      type: ".question-box .tag",
      workType: "yxlearning",
      pageType: "yxlearning"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".mb20.sub");
      })), !W.yxques) return false;
    },
    answerHook: (e, t) => {
      const a = [];
      W.yxques.questionStemRPS.forEach(((e, t) => {
        e.listPaperQuestionRP.forEach(((e, t) => {
          a.push(e);
        }));
      }));
      const n = a[t];
      e.question = titleClean(removeHtml(n.questionName));
      const r = n.type, s = [];
      switch (e.options = removeStartChar(n.paperOptionRPS.map((e => removeHtml(e.context)))), 
      n.paperOptionRPS.forEach(((t, a) => {
        1 == t.standardAnswer && s.push(e.options[a]);
      })), e.answer = s, r) {
       case 1:
        e.type = "3", e.options = [], e.answer = judgeAnswer(e.answer[0]);
        break;

       case 2:
        e.type = "0";
        break;

       case 3:
        e.type = "1";
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u65e5\u7167\u4e13\u4e1a\u6280\u672f\u4eba\u5458\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("yxlearning.com") && location.href.includes("exam/start?myExamRecordId"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".mb20.sub",
      question: ".ls1.lh30.text-f666",
      options: ".cursor-p",
      type: ".question-box .tag",
      workType: "yxlearning",
      pageType: "yxlearning"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".mb20.sub");
      }));
    },
    ischecked: e => e.hasClass("active"),
    questionHook: e => {
      if (e.options = removeStartChar(D(e.html).find("ul>li").map(((e, t) => removeHtml(D(t).html()))).get()), 
      e.$options = D(e.html).find("ul>li"), e.type = typeConvert(D(e.html).parent().prevAll(".title").first().find("[du-html='questionStemName']").text().trim()), 
      "3" === e.type) e.options = [], e.$options = D(e.html).find("ul>li");
      return e;
    }
  } ], At = [ {
    type: "ask",
    name: "\u9ea6\u80fd\u7f51\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("lms/web/onlineexam/exambegin"),
    types: [ "0", "1", "3" ],
    question: {
      html: "#exam_form>.sdiv",
      question: ".eptimu_name",
      options: ".ansdiv > .optiondiv",
      type: ".eptimu_title",
      workType: "cjnep",
      pageType: "cjnep"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".sdiv");
      }));
    },
    toquestion: e => {
      D(`.controldiv > a:eq(${e})`), D(`.epcl_circle:eq(${e})`)[0].click();
    },
    ischecked: isParentChecked,
    questionHook: e => {
      if (e.question = e.question.replace(/^[0-9]+\u3001/, "").trim(), e.question = titleClean(e.question), 
      e.options = removeStartChar(e.options), e.type = typeMatch(D(e.html).find(".eptimu_title").text().trim()), 
      e.$options = D(e.html).find(".ansdiv input"), "3" === e.type) e.options = [];
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "3":
        let t = e.answer;
        return D(e.html).find(".ansdiv input").each(((e, a) => {
          isTrue(t) && "1" == D(a).val() && D(a).click(), isFalse(t) && "0" == D(a).val() && D(a).click();
        })), false;

       case "2":
       case "4":
       case "5":
       case "6":
        const a = D(e.html).find(".ansdiv textarea"), n = e.answer.join(";");
        a.val(n), a.trigger("input"), a.trigger("keydown"), a.trigger("change"), a.trigger("blur"), 
        a.trigger("focus");
        const r = a[0];
        if (r) {
          [ "input", "change", "blur", "focus" ].forEach((e => {
            const t = new Event(e, {
              bubbles: true
            });
            r.dispatchEvent(t);
          }));
        }
        return false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u9ea6\u80fd\u7f51\u7b54\u9898\u6536\u5f55",
    match: () => location.href.includes("lms/web/exam/examshow"),
    question: {
      html: "#exam_form>.sdiv",
      question: ".eptimu_name",
      options: ".ansdiv > .optiondiv",
      type: ".eptimu_title",
      workType: "cjnep",
      pageType: "cjnep"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".sdiv");
      }));
    },
    answerHook: e => {
      switch (e.type = typeMatch(D(e.html).find(".eptimu_title").text().trim()), e.question = e.question.replace(/^[0-9]+\u3001/, "").trim(), 
      e.question = titleClean(e.question), e.options = removeStartChar(e.$options.map(((e, t) => {
        let a = D(t).clone();
        return D(a).find("img").remove(), removeHtml(D(a).html()).trim();
      })).get()), e.type) {
       case "0":
       case "1":
        e.answer = e.$options.map(((t, a) => {
          var n;
          return (null == (n = D(a).find("img").attr("src")) ? void 0 : n.includes("exam-yes")) && e.options[t];
        })).get().filter((e => void 0 !== e));
        break;

       case "3":
        e.answer = e.$options.map(((t, a) => {
          var n;
          return (null == (n = D(a).find("img").attr("src")) ? void 0 : n.includes("exam-yes")) && e.options[t];
        })).get().filter((e => void 0 !== e)), e.answer = judgeAnswer(e.answer), e.options = [];
        break;

       case "4":
        e.options = [];
        let t = removeHtml(D(e.html).find(".eptimu_answer.ansdiv").html()).trim();
        t.includes("\u6b63\u786e\u7b54\u6848\uff1a") ? e.answer = t.split("\u6b63\u786e\u7b54\u6848\uff1a")[1].trim() : e.answer = [];
      }
      return e;
    }
  } ], Tt = [ {
    type: "ask",
    name: "\u9ea6\u80fd\u7f51\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("mynep.com") && location.href.includes("my-exam/exambegin"),
    types: [ "0", "1" ],
    question: {
      html: ".et_test",
      question: ".et_title",
      options: "ul>.et_answer>label",
      type: ".question-box .tag",
      workType: "mynep",
      pageType: "mynep"
    },
    init: async () => {},
    toquestion: e => {
      W.select_num(e + 1);
    },
    ischecked: e => e.parent().find("input").prop("checked"),
    questionHook: e => {
      e.question = e.question.replace(/\u7b2c\d+\u9898\uff1a/, ""), e.options = removeStartChar(e.options);
      const t = D(e.html).find('input[id^="question-num-isdone"]').attr("question_num_type_id");
      switch (t) {
       case "1":
        e.type = "0";
        break;

       case "2":
        e.type = "1";
      }
      return e;
    }
  }, {
    type: "save",
    name: "\u9ea6\u80fd\u7f51\u6536\u5f55",
    match: () => location.host.includes("mynep.com") && location.href.includes("web/my-exam/examshow"),
    question: {
      html: ".et_test",
      question: ".et_title",
      options: "ul>.et_answer>label",
      type: ".question-box .tag",
      workType: "mynep",
      pageType: "mynep"
    },
    init: async () => {},
    answerHook: e => {
      const t = D(e.html).find(".et_title").clone();
      t.find(".exam-btn").remove(), t.find("div").remove(), e.question = removeHtml(t.html()).replace(/\u7b2c\d+\u9898\uff1a/, "").trim(), 
      e.options = [];
      const a = [];
      D(e.html).find(".et_answer>.et_answer>.et_answer>label").map(((t, n) => {
        e.options.push(removeHtml(D(n).html()).trim()), D(n).parent().find("input").prop("checked") && a.push(t);
      })).get(), e.options = removeStartChar(e.options), e.answer = a.map((t => e.options[t]));
      const n = D(e.html).find('input[id^="question-num-isdone"]').attr("question_num_type_id");
      switch (n) {
       case "1":
        e.type = "0";
        break;

       case "2":
        e.type = "1";
        break;

       default:
        return false;
      }
      return e;
    }
  } ], Ct = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("91huayi.com"),
    main: e => {
      observeVuePageChange(D(".box")[0], (() => D(".dd_01").attr("questionid")), {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 === D(".el-loading-mask").length;
          }));
        }
      });
    }
  }, {
    type: "ask",
    name: "\u534e\u533b\u7f51\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("91huayi.com") && location.href.includes("/ExamInterface/ComputerExamIndex"),
    types: [ "0", "1" ],
    question: {
      html: "#exampage",
      question: ".dd_01",
      options: ".dd_02",
      type: ".big_type",
      workType: "huayi",
      pageType: "huayi"
    },
    init: async () => {},
    next: () => {
      var e;
      null == (e = D("#btnNext")) || e.click();
    },
    ischecked: e => e.prop("checked"),
    questionHook: e => {
      const t = D(e.html).find(".dd_01").clone();
      return t.find(".dd_01_red").remove(), e.question = removeHtml(t.html()), e.options = removeStartChar(e.options), 
      e.type = typeMatch(D(e.html).find(".big_type").text()), e.$options = D(e.html).find("dd.q-content input"), 
      e;
    },
    setAnswer: e => {
      switch (console.log(e), e.type) {
       case "0":
       case "1":
        return e.ques.$options.each(((t, a) => {
          if (e.answer.includes(t)) {
            if (e.rule.ischecked && e.rule.ischecked(D(a))) return;
            a.click();
          } else e.rule.ischecked && e.rule.ischecked(D(a)) && a.click();
        })), false;
      }
      return true;
    }
  }, {
    type: "ask",
    name: "\u534e\u533b\u7f51\u8003\u8bd5",
    tips: "",
    match: () => location.host.includes("91huayi.com") && location.href.includes("/pages/exam.aspx?cwid="),
    types: [ "0" ],
    question: {
      html: ".test>table",
      question: "thead",
      options: "tbody>tr>td>label",
      type: ".big_type",
      workType: "huayi",
      pageType: "huayi"
    },
    init: async () => {},
    next: () => {
      var e;
      null == (e = D("#btnNext")) || e.click();
    },
    ischecked: e => e.prop("checked"),
    questionHook: e => (e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\u3001/, ""), 
    e.options = removeStartChar(e.options), 0 !== e.options.length && (e.type = "0"), 
    e)
  } ], St = [ {
    type: "ask",
    name: "\u4e91\u5357\u5f00\u653e\u5927\u5b66\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("hw/student/studentStartHomework.action") && location.host.includes("teach.ynou.edu.cn"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".e_juan02biaoti",
      question: ".qcontent > p:first",
      options: ".signDefault>.label",
      type: ".question-box .tag",
      workType: "ynou",
      pageType: "ynou"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".e_juan02biaoti").length;
      })), D("body").css("text-align", "left");
    },
    ischecked: e => (e.find("input").is(":checked"), e.find("input").is(":checked")),
    questionHook: e => {
      e.options = [];
      const t = D(e.html).find(".e_juan02daan").clone();
      t.find(".clear").nextAll().remove();
      const a = removeHtml(t.html()), n = a.split(/[A][\u3001\.\uff0e]/)[0].trim();
      null !== n && (e.question = n), e.question = n, e.question = n;
      const r = a.match(/(?:[A-G](?:[\u3001.]|\s)?\s?.*?)(?=\s*[A-G](?:[\u3001.]|\s)?|\s*$)/gs);
      if (null !== r) {
        const t = removeOptionsStartChar(r.map((e => e.trim())));
        false !== t && (e.options = t);
      }
      const s = D(e.html).find(".signDefault").attr("answer_control");
      return "radio" === s && e.options.length > 1 && (e.type = "0"), "checkbox" === s && e.options.length > 1 && (e.type = "1"), 
      "radio" === s && 0 === e.options.length && (e.type = "3"), e;
    },
    setAnswer: e => {
      if (console.log(e), "3" === e.type) {
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).html())) && D(a).click(), isFalse(t) && isFalse(removeHtml(D(a).html())) && D(a).click();
        })), false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u6536\u5f55",
    match: () => location.href.includes("/hw/student/studentViewHomework.action") && location.host.includes("teach.ynou.edu.cn"),
    question: {
      html: ".e_juan02biaoti",
      question: ".qcontent > p:first",
      options: ".signDefault>.label",
      type: ".question-box .tag",
      workType: "ynou",
      pageType: "ynou"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".e_juan02biaoti").length;
      })), D("body").css("text-align", "left");
    },
    answerHook: e => {
      e.options = [];
      const t = D(e.html).find(".e_juan02daan").clone();
      t.find(".clear").nextAll().remove();
      const a = removeHtml(t.html()), n = a.split(/[A][\u3001\.\uff0e]/)[0].trim();
      if (null === n) return null;
      e.question = n;
      const r = a.match(/(?:[A-G](?:[\u3001.]|\s)?\s?.*?)(?=\s*[A-G](?:[\u3001.]|\s)?|\s*$)/gs);
      if (null !== r) {
        const t = removeOptionsStartChar(r.map((e => e.trim())));
        if (0 == t) return null;
        e.options = t;
      }
      const s = D(e.html).find(".signDefault").attr("answer_control");
      "radio" === s && e.options.length > 1 && (e.type = "0"), "checkbox" === s && e.options.length > 1 && (e.type = "1"), 
      "radio" === s && 0 === e.options.length && (e.type = "3");
      const i = D(e.html).find(".right_answer>font").text();
      switch (e.type) {
       case "0":
       case "1":
        e.answer = i.split("").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case "3":
        e.answer = isTrue(i) ? "\u6b63\u786e" : isFalse(i) ? "\u9519\u8bef" : "";
      }
      return e;
    }
  } ], It = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("21tb.com"),
    main: e => {
      observeVuePageChange(D("#examIngEmsRightPanel")[0], (() => D("#examIngEmsRightPanel").attr("class")));
    }
  }, {
    type: "ask",
    name: "21tb\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("21tb.com") && location.href.includes("exercise/newExercise.fullExerciseTemp.do"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".paper-content > .question-panel-middle",
      question: ".question-stem>.name",
      options: "ul.question-options>li>label",
      type: ".question-box .tag",
      workType: "21tb",
      pageType: "21tb"
    },
    init: async () => {
      if (D(".view-paper-content").length > 0) return false;
    },
    ischecked: e => e.parent().find("input").prop("checked"),
    questionHook: e => {
      e.question = titleClean(e.question), e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), 
      e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), e.options = removeStartChar(e.options);
      const t = D(e.html).attr("class") || "";
      switch (console.log(t), true) {
       case t.includes("SINGLE"):
        e.type = "0";
        break;

       case t.includes("MULTIPLE"):
        e.type = "1";
        break;

       case t.includes("JUDGMENT"):
        e.type = "3", e.options = [];
      }
      return e;
    }
  }, {
    type: "save",
    name: "21tb\u6536\u5f55",
    match: () => location.host.includes("21tb.com") && location.href.includes("exercise/newExercise.fullExerciseTemp.do"),
    question: {
      html: "form > .question-panel-middle",
      question: ".question-stem>.name",
      options: "ul.question-options>li>label",
      type: ".question-box .tag",
      workType: "21tb",
      pageType: "21tb"
    },
    init: async () => {
      if (console.log(D(".view-paper-content").length), 0 == D(".view-paper-content").length) return false;
    },
    answerHook: e => {
      e.question = titleClean(e.question), e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), 
      e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), e.options = removeStartChar(e.options);
      const t = D(e.html).attr("questtype") || "", a = D(e.html).find(".true-answer").text().split("\uff1a")[1].trim();
      switch (true) {
       case t.includes("SINGLE"):
        e.type = "0", e.answer = a.split(", ").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case t.includes("MULTIPLE"):
        e.type = "1", e.answer = a.split(", ").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case t.includes("JUDGMENT"):
        e.type = "3", e.options = [], e.answer = judgeAnswer(a);
      }
      return console.log(e), e;
    }
  }, {
    type: "ask",
    name: "21tb\u8003\u8bd5\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("21tb.com") && location.href.includes("ems/html/examCenter/fullExamTemp.do"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".paper-content > .question-panel-middle",
      question: ".question-stem",
      options: "ul.question-options>li>label",
      type: ".question-box .tag",
      workType: "21tb",
      pageType: "21tb"
    },
    init: async () => {
      if (D(".view-paper-content").length > 0) return false;
    },
    ischecked: e => e.parent().find("input").prop("checked"),
    questionHook: e => {
      const t = D(e.html).find(".question-stem").clone();
      t.find(".num").remove(), e.question = titleClean(removeHtml(t.html())).replace(/^\./, ""), 
      e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), 
      e.options = removeStartChar(e.options);
      const a = D(e.html).attr("class") || "";
      switch (console.log(a), true) {
       case a.includes("SINGLE"):
        e.type = "0";
        break;

       case a.includes("MULTIPLE"):
        e.type = "1";
        break;

       case a.includes("JUDGMENT"):
        e.type = "3", e.options = [];
      }
      return e;
    }
  } ], setEditorText = (e, t) => {
    var a, n;
    const r = null == e ? void 0 : e.ownerDocument;
    if (null == r ? void 0 : r.createElement) {
      const a = r.createElement("p");
      a.textContent = t, e.innerHTML = "", e.appendChild(a);
    } else e.textContent = t;
    null == (n = null == (a = null == e ? void 0 : e.classList) ? void 0 : a.remove) || n.call(a, "ql-blank"), 
    ((e, t) => {
      var a, n, r, s;
      const i = null == (n = null == (a = null == e ? void 0 : e.ownerDocument) ? void 0 : a.defaultView) ? void 0 : n.InputEvent, o = i ? new i("input", {
        bubbles: true,
        inputType: "insertText",
        data: t
      }) : new Event("input", {
        bubbles: true
      });
      null == (r = null == e ? void 0 : e.dispatchEvent) || r.call(e, o), null == (s = null == e ? void 0 : e.dispatchEvent) || s.call(e, new Event("change", {
        bubbles: true
      }));
    })(e, t);
  }, fill168WxRichTextAnswer = (e, t) => {
    var a;
    const n = (e => Array.isArray(e) ? String(e[0] ?? "") : String(e ?? ""))(t).trim();
    if (!n) return false;
    const r = Array.from((null == (a = null == e ? void 0 : e.querySelectorAll) ? void 0 : a.call(e, ".quill-editor")) || []);
    return !r.length || (r.forEach(((e, a) => {
      var r, s;
      const i = String((null == t ? void 0 : t[a]) ?? n), o = null == (r = null == e ? void 0 : e.__vue__) ? void 0 : r.quill;
      if (null == o ? void 0 : o.setText) return void o.setText(i, "user");
      const l = null == (s = null == e ? void 0 : e.querySelector) ? void 0 : s.call(e, ".ql-editor");
      l && setEditorText(l, i);
    })), false);
  }, Et = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("168wangxiao.com"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => (D(".question-submit-btn").text(), D(".question-submit-btn").text() || D(".listTit>span").text())), {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 === D(".el-loading-mask").length;
          }));
        }
      }), D("#app").length >= 1 && D("#app")[0];
    }
  }, {
    type: "ask",
    name: "168\u7f51\u6821\u7b54\u9898",
    tips: "168\u7f51\u6821\u76ee\u524d\u652f\u6301\u9009\u62e9\u3001\u5224\u65ad\u3001\u586b\u7a7a\u3001\u7b80\u7b54\uff0c\u5176\u4ed6\u9898\u578b\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
    match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/learningCenter/details/"),
    types: [ "0", "1", "2", "3", "4" ],
    question: {
      html: ".question-item-container",
      question: ".title-content",
      options: ".options .opt-content",
      type: ".type",
      workType: "168wx",
      pageType: "168wx"
    },
    init: async () => (await waitUntil((function() {
      return 0 !== D(".question-item-container").length;
    })), !D(".question-submit-btn").text().includes("\u91cd\u65b0\u7b54\u9898")),
    ischecked: isParentChecked,
    questionHook: e => {
      const t = D(e.html).find(".type").text();
      return e.type = typeMatch(t), e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "2":
        return fill168WxRichTextAnswer(e.html, e.answer);

       case "4":
        return D(e.html).find(".ql-editor"), D(e.html).find(".ql-editor")[0].innerHTML = e.answer[0], 
        false;
      }
      return true;
    }
  }, {
    type: "save",
    name: "168\u7f51\u6821\u7b54\u9898",
    match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/learningCenter/details/"),
    question: {
      html: ".question-item-container",
      question: ".title-content",
      options: ".options .opt-content",
      type: ".type",
      workType: "168wx",
      pageType: "168wx"
    },
    init: async () => (await waitUntil((function() {
      return 0 !== D(".question-item-container").length;
    })), D(".question-submit-btn").text().includes("\u91cd\u65b0\u7b54\u9898")),
    answerHook: e => {
      const t = D(e.html).find(".type").text();
      switch (e.type = typeMatch(t), e.answer = D(e.html).find(".options .opt-content.is-correct-answer").map(((e, t) => removeHtml(D(t).html()))).get(), 
      e.type) {
       case "2":
        e.options = [], e.answer = D(e.html).find(".analyze-container>.answer>.text-container>p").map(((e, t) => removeHtml(D(t).html()))).get();
        break;

       case "3":
        e.options = [], e.answer = [ judgeAnswer(e.answer[0]) ];
        break;

       case "4":
        e.options = [], e.answer = D(e.html).find(".analyze-container>.answer>.text-container").map(((e, t) => removeHtml(D(t).html()))).get();
      }
      return e;
    }
  }, {
    type: "ask",
    name: "168\u7f51\u6821\u8003\u8bd5",
    tips: "",
    match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/examination/answer"),
    types: [ "0", "1", "2", "3", "4" ],
    question: {
      html: ".Answer-area",
      question: ".listTit>span",
      options: ".el-checkbox-group>label",
      type: ".type",
      workType: "168wx",
      pageType: "168wx"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".Answer-area").length;
      }));
    },
    next: () => {
      D('button:contains("\u4e0b\u4e00\u9898")').click();
    },
    ischecked: isParentChecked,
    questionHook: e => (e.options = removeOptionsStartChar(e.options), e.type = typeMatch(D(".tit-type").text()), 
    e),
    setAnswer: e => {
      switch (e.type) {
       case "2":
        return fill168WxRichTextAnswer(e.html, e.answer);

       case "4":
        return D(e.html).find(".ql-editor"), D(e.html).find(".ql-editor")[0].innerHTML = e.answer[0], 
        false;
      }
      return true;
    }
  } ], Ut = /^\/web\/cc-detail\/([^/]+)\/act\/quiz-answer\/([^/?#]+)/, Pt = /^\/web(?:-old)?\/index\.php$/, Ht = {
    SINGLE: "0",
    MULTI: "1",
    TF: "3"
  }, getMosoteachQuizIds = (e = location.href) => {
    try {
      const t = new URL(e);
      if ("www.mosoteach.cn" !== t.hostname) return null;
      const a = t.pathname.match(Ut);
      return a ? {
        ccId: a[1],
        quizId: a[2]
      } : null;
    } catch {
      return null;
    }
  }, isMosoteachQuizAnswerUrl = (e = location.href) => null !== getMosoteachQuizIds(e), isMosoteachLegacyQuizReplyUrl = (e = location.href) => {
    try {
      const t = new URL(e);
      return "www.mosoteach.cn" === t.hostname && (!!Pt.test(t.pathname) && ("interaction_quiz" === t.searchParams.get("c") && "reply" === t.searchParams.get("m")));
    } catch {
      return false;
    }
  }, isMosoteachAskUrl = (e = location.href) => isMosoteachQuizAnswerUrl(e) || isMosoteachLegacyQuizReplyUrl(e), getOptionNo = e => e.itemNo ?? e.item_no ?? 0, getSortedOptions = e => [ ...e.options || [] ].sort(((e, t) => getOptionNo(e) - getOptionNo(t))), getMosoteachTopicOptions = (e, t) => t(getSortedOptions(e).map((e => e.content || ""))), Lt = ".topic-answer-align,.t-option.t-item label,.t-judge.t-item label", jt = ".v-chip__content,.t-type", $t = "__aiAskMosoteachRouteHook", zt = "__aiAskMosoteachHref", Mt = "__aiAskMosoteachRouteTimer";

  let Ot = [];

  const Ft = {
    cleanText: (e = "") => titleClean(removeHtml(e)),
    cleanOptions: e => removeStartChar(e.map((e => removeHtml(e)))),
    judgeAnswer: judgeAnswer
  }, getMosoteachQuestionType = (e = "", t = []) => ((e = "", t = []) => {
    const a = Ht[e.trim()];
    return "0" === a && (e => 2 === e.length && e.every((e => /^(\u6b63\u786e|\u9519\u8bef|\u5bf9|\u9519|\u662f|\u5426|T|F|true|false)$/i.test(e.trim()))))(t) ? "3" : a || "";
  })(e, t) || typeMatch(e), getMosoteachQuestionElements = () => isMosoteachLegacyQuizReplyUrl() ? D(".topic-item") : D(".pt-10.d-flex.list-item:has(.topic-subject):has(.topic-answer-align)"), getMosoteachLegacyTopics = () => {
    var e, t;
    const a = D("#app")[0], n = null == (t = null == (e = null == a ? void 0 : a.__vue__) ? void 0 : e.$data) ? void 0 : t.topics;
    return Array.isArray(n) ? n : [];
  }, cacheMosoteachAnswer = e => {
    const t = ((e, t, a, n) => {
      const r = n.cleanText(e), s = ((e, t) => t(e).sort().join("\n"))(t, n.cleanOptions);
      return a.find((e => {
        const t = getMosoteachTopicOptions(e, n.cleanOptions).sort().join("\n");
        return n.cleanText(e.subject || "") === r && t === s;
      }));
    })(e.question, e.options, Ot, Ft);
    if (!t) return;
    const a = ((e, t) => {
      const a = t.cleanOptions(getSortedOptions(e).map((e => e.content || "")));
      return Array.isArray(e.answers) && e.answers.length > 0 ? e.answers.map((e => a[e] || "")).filter(Boolean) : "TF" === e.type ? t.judgeAnswer(e.tfAnswer || "") : [];
    })(t, Ft);
    if (!a.length) return;
    const n = {
      type: e.type,
      question: e.question,
      options: "3" === e.type ? [] : e.options,
      answer: a
    };
    Answer.cacheAnswer(n);
  }, parseMosoteachDomQuestion = e => {
    const t = D(e.html), a = t.find(".topic-subject").first().text(), n = t.find(".topic-answer-align");
    if (!a || !n.length) return e;
    e.question = Ft.cleanText(a);
    const r = n.map(((e, t) => D(t).find(".topic-answer").first().text() || D(t).text())).get();
    return e.options = Ft.cleanOptions(r), e.$options = (e => D(e.map(((e, t) => D(t).closest("label,.d-flex.align-start")[0] || t)).get()))(n), 
    e.type = getMosoteachQuestionType(t.find(".v-chip__content").first().text(), e.options), 
    cacheMosoteachAnswer(e), e;
  }, parseMosoteachLegacyQuestion = (e, t) => {
    const a = D(e.html), n = getMosoteachLegacyTopics()[t], r = a.find(Lt), s = r.map(((e, t) => D(t).text())).get();
    if (n) e.question = Ft.cleanText(n.subject || ""), e.options = ((e, t, a) => {
      const n = a(t);
      return n.length ? n : getMosoteachTopicOptions(e || {}, a);
    })(n, s, Ft.cleanOptions), e.type = getMosoteachQuestionType(n.type, e.options); else {
      const t = a.find(".t-subject").first().text();
      e.question = Ft.cleanText(t || e.question), e.options = Ft.cleanOptions(s.length ? s : e.options), 
      e.type = getMosoteachQuestionType(a.find(jt).first().text() || e.type, e.options);
    }
    return r.length && (e.$options = r), cacheMosoteachAnswer(e), e;
  }, watchMosoteachRouteChange = () => {
    const e = W;
    if (e[$t]) return;
    e[$t] = true, e[zt] = location.href;
    const checkRouteChange = () => {
      e[zt] !== location.href && (e[zt] = location.href, clearTimeout(e[Mt]), e[Mt] = setTimeout((() => vuePageChange()), 100));
    }, bindHistoryChange = e => {
      const t = history[e];
      history[e] = function(...e) {
        const a = t.apply(this, e);
        return setTimeout(checkRouteChange, 0), a;
      };
    };
    bindHistoryChange("pushState"), bindHistoryChange("replaceState"), window.addEventListener("popstate", (() => setTimeout(checkRouteChange, 0)));
  }, Dt = [ {
    type: "hook",
    name: "\u4e91\u73ed\u8bfe\u8def\u7531\u76d1\u542c",
    match: () => "www.mosoteach.cn" === location.host,
    main: () => {
      watchMosoteachRouteChange();
    }
  }, {
    type: "ask",
    name: "\u4e91\u73ed\u8bfe\u7b54\u9898",
    tips: "",
    match: () => "www.mosoteach.cn" === location.host && isMosoteachAskUrl(),
    types: [ "0", "1", "3" ],
    question: {
      html: getMosoteachQuestionElements,
      question: ".topic-subject,.t-subject",
      options: Lt,
      type: jt,
      workType: "mosoteach",
      pageType: "mosoteach"
    },
    init: async () => {
      if (await sleep(500), !isMosoteachAskUrl()) return Ot = [], false;
      return !!(await (async () => {
        for (let e = 0; e < 30; e++) {
          if (getMosoteachQuestionElements().length > 0) return true;
          await sleep(200);
        }
        return false;
      })()) && (Ot = isMosoteachQuizAnswerUrl() ? await (async () => {
        const e = getMosoteachQuizIds(), t = localStorage.getItem("teach_token") || "";
        if (!e || !t) return [];
        try {
          const a = await fetch(`https://coreapi.mosoteach.cn/ccs/${e.ccId}/quizzes/${e.quizId}/topics?_ts=${Date.now()}`, {
            headers: {
              accept: "application/json, text/plain, */*",
              "x-client-app-id": "MTWEB",
              "x-client-version": "6.0.0",
              "x-security-type": "SECURITY_TYPE_TOKEN",
              "x-token": t
            },
            credentials: "omit"
          });
          if (!a.ok) return [];
          const n = await a.json();
          return Array.isArray(null == n ? void 0 : n.topics) ? n.topics : [];
        } catch (a) {
          return [];
        }
      })() : getMosoteachLegacyTopics(), true);
    },
    ischecked: e => {
      const t = e.find("input").add(e.closest("label,.d-flex.align-start").find("input")).first();
      return e.hasClass("is-checked") || e.hasClass("v-item--active") || t.prop("checked") || "true" === t.attr("aria-checked");
    },
    questionHook: (e, t) => isMosoteachLegacyQuizReplyUrl() ? parseMosoteachLegacyQuestion(e, t) : parseMosoteachDomQuestion(e)
  } ], Nt = [ {
    type: "hook",
    name: "hook",
    match: "www.learnin.com.cn" === location.host,
    main: e => {
      observeVuePageChange(D("#app")[0], (() => {
        try {
          return D(".page-student-course-topic-do-container")[0].__vue__.$data.topic.studentTopic.id;
        } catch (e) {
          return "";
        }
      }));
    }
  }, {
    type: "save",
    name: "learnin\u6536\u5f55",
    match: () => "www.learnin.com.cn" === location.host && location.href.includes("/user/#/user/student/course/") && 0 == D("button:contains('\u63d0\u4ea4\u4f5c\u4e1a')").length,
    question: {
      html: ".store-question-item-container",
      question: ".question-title",
      options: ".question-info>.question-option-list>.option-item",
      type: ".item-question-header>.header-left",
      workType: "learnin",
      pageType: "learnin"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".store-question-item-container");
      }));
    },
    answerHook: (e, t) => {
      const a = D(".store-question-item-container").eq(t)[0].__vue__.question;
      switch (a.questionTypeCode) {
       case "judgment":
        e.type = "3";
        break;

       case "single":
        e.type = "0";
        break;

       case "multiple":
        e.type = "1";
        break;

       default:
        return e;
      }
      e.question = titleClean(removeHtml(a.questionTitle));
      let n = [], r = [];
      return a.optionList.forEach((e => {
        const t = removeHtml(e.content);
        e.isAnswer && r.push(t), n.push(t);
      })), e.options = n, e.answer = r, "3" == e.type && (e.options = [], e.answer = judgeAnswer(r[0])), 
      e;
    }
  }, {
    type: "ask",
    name: "learnin\u7b54\u9898",
    tips: "",
    match: () => "www.learnin.com.cn" === location.host && location.href.includes("/user/#/user/student/course/") && 1 == D("button:contains('\u63d0\u4ea4\u4f5c\u4e1a')").length,
    types: [ "0", "1", "3" ],
    question: {
      html: ".store-question-item-container",
      question: ".question-title",
      options: ".question-info>.question-option-list>.option-item>.option-index",
      type: ".item-question-header>.header-left",
      workType: "learnin",
      pageType: "learnin"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".store-question-item-container");
      }));
    },
    ischecked: e => e.hasClass("active"),
    questionHook: (e, t) => {
      const a = D(e.html)[0].__vue__.question;
      switch (a.questionTypeCode) {
       case "judgment":
        e.type = "3";
        break;

       case "single":
        e.type = "0";
        break;

       case "multiple":
        e.type = "1";
        break;

       default:
        return e;
      }
      e.question = titleClean(removeHtml(a.questionTitle));
      let n = [];
      return a.optionList.forEach((e => {
        const t = removeHtml(e.content);
        n.push(t);
      })), e.options = n, "3" == e.type && (e.options = []), e;
    }
  } ], Rt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("ouchn.edu.cn"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "\u7535\u5927\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("ouchn.edu.cn") && location.href.includes("learningPlatform/#/myExamDetails/examQuestion"),
    types: [ "0" ],
    question: {
      html: ".everyQuest",
      question: ".topicTitle",
      options: ".optionList .topicTitle",
      type: ".question-box .tag",
      workType: "ouchn",
      pageType: "ouchn"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".everyQuest");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => (e.type = "0", e)
  }, {
    type: "save",
    name: "\u7535\u5927\u6536\u5f55",
    match: () => location.host.includes("ouchn.edu.cn") && location.href.includes("learningPlatform/#/myExamDetails/testPaper"),
    question: {
      html: ".everyQuest",
      question: ".topicTitle",
      options: ".optionList .topicTitle",
      type: ".question-box .tag",
      workType: "ouchn",
      pageType: "ouchn"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".everyQuest");
      }));
    },
    answerHook: e => {
      const t = D(e.html).find('.rightAndWrong>span:contains("\u6b63\u786e\u7b54\u6848")').text().replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), a = e.options;
      let n = [];
      return t.split("").forEach((e => {
        n.push(a[e.charCodeAt(0) - 65]);
      })), 1 == n.length ? e.type = "0" : e.type = "1", e.answer = n, e;
    }
  } ], Bt = [ {
    type: "hook",
    name: "mooc",
    match: "www.icourse163.org" === location.host,
    main: e => {
      observeVuePageChange(D("#courseLearn-inner-box")[0], (() => D("#courseLearn-inner-box > div:eq(0)").attr("class")), {
        beforeChange: async e => {
          "homework-detail-container" === e && await waitUntil((function() {
            return 0 === D(".el-loading-mask").length;
          }));
        }
      });
    }
  }, {
    type: "ask",
    name: "mooc\u7b54\u9898",
    tips: "\u4e2d\u56fd\u5927\u5b66MOOC\u9650\u5236\u7b54\u9898\u901f\u5ea6\uff0c\u8bf7\u4e0d\u8981\u8fc7\u5feb",
    match: () => "www.icourse163.org" === location.host && location.href.includes("#/learn/quiz?id="),
    types: [ "0", "1", "2", "3" ],
    question: {
      html: ".u-questionItem",
      question: ".f-richEditorText",
      options: "ul.choices>li>input",
      type: ".qaCate.j-qacate.f-fl",
      workType: "mooc",
      pageType: "mooc"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".u-questionItem").length, 0 !== D(".u-questionItem").length;
      }));
    },
    ischecked: isParentChecked,
    questionHook: (e, t) => {
      D(e.html).find(".qaCate.j-qacate.f-fl > span:eq(0)").attr("class");
      const a = W.learnUtilQuestionList[t];
      switch (e.question = removeHtml(a.title), e.options = a.options.map((e => removeHtml(e.content))), 
      a.type) {
       case 1:
        e.type = "0";
        break;

       case 2:
        e.type = "1";
        break;

       case 3:
        e.type = "2";
        break;

       case 4:
        e.type = "3", e.options = [];
        break;

       default:
        a.type, e.type = "8";
      }
      return e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "2":
        return D(e.html).find(".u-baseinputui>textarea").each(((t, a) => {
          D(a).val(e.answer[t]), D(a).focus(), D(a).blur();
        })), false;

       case "3":
        let t = e.answer;
        D(e.html).find("ul.choices>li").each(((e, a) => {
          isTrue(t) && D(a).find(".u-icon-correct").length > 0 && D(a).find("input").click(), 
          isFalse(t) && D(a).find(".u-icon-wrong").length > 0 && D(a).find("input").click();
        }));
      }
      return true;
    }
  }, {
    type: "save",
    name: "\u4e2d\u56fd\u5927\u5b66mooc\u6536\u5f55",
    match: () => "www.icourse163.org" === location.host && location.href.includes("#/learn/quizscore?id="),
    question: {
      html: ".u-questionItem",
      question: ".f-richEditorText",
      options: "ul.choices li>input",
      type: ".qaCate.j-qacate.f-fl",
      workType: "mooc",
      pageType: "mooc"
    },
    init: async () => {
      await waitUntil((function() {
        return D(".u-questionItem").length, 0 !== D(".u-questionItem").length;
      }));
    },
    answerHook: (e, t) => {
      const a = W.learnUtilQuestionList[t];
      e.question = removeHtml(a.title);
      let n = [], r = [];
      switch (a.options.forEach((e => {
        n.push(removeHtml(e.content)), e.answer && r.push(removeHtml(e.content));
      })), e.options = n, e.answer = r, a.type) {
       case 1:
        e.type = "0";
        break;

       case 2:
        e.type = "1";
        break;

       case 3:
        e.type = "2", e.answer = [ a.stdAnswer ];
        break;

       case 4:
        e.type = "3", e.options = [];
        break;

       default:
        a.type;
      }
      return e;
    }
  } ], Gt = [ {
    host: "swufe-online.com",
    display: "\u897f\u8d22\u5728\u7ebf",
    key: "swufe"
  }, {
    host: "jsnu.edu.cn",
    display: "\u6c5f\u82cf\u5e08\u5927",
    key: "jsnu"
  } ], matchSite = () => Gt.find((e => location.host.includes(e.host))), siteDisplay = () => {
    var e;
    return (null == (e = matchSite()) ? void 0 : e.display) ?? "learnspace";
  }, siteKey = () => {
    var e;
    return (null == (e = matchSite()) ? void 0 : e.key) ?? "learnspace";
  }, Vt = [ "learnspace/course/test/coursewareTest_intoRedoTestPage.action", "learnspace/learn/learn/templateeight/index.action", "learnspace/course/test/coursewareTest_intoTestPage.action" ], Kt = [ "learnspace/course/test/coursewareTest_intoTestAnswerPage.action", "learnspace/learn/learn/templateeight/index.action" ], pathHit = e => e.some((e => location.href.includes(e))), titleCleanup = e => e.replace(/^[.*?]\s*/, "").replace(/^\u3010.*?\u3011\s*/, "").replace(/\s*\uff08\d+\.\d+\u5206\uff09$/, "").replace(/^\d+\./, "").trim().replace(/^\d+\uff0e/, "").trim().replace(/^\d+ ./, "").trim(), Wt = [ {
    type: "ask",
    get name() {
      return `${siteDisplay()}\u7b54\u9898`;
    },
    tips: "",
    match: () => Boolean(matchSite()) && pathHit(Vt),
    types: [ "0", "1", "3" ],
    question: {
      html: ".bank_test > .test_item",
      question: ".test_item_tit",
      options: ".test_item_theme>ul>li>label, .test_item_theme>label",
      type: ".question-box .tag",
      get workType() {
        return siteKey();
      },
      get pageType() {
        return siteKey();
      }
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".bank_test > .test_item");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      const t = D(e.html).find(".test_item_tit").clone();
      if (t.find(".tipNodo").remove(), e.question = removeHtml(t.html()), e.question = titleClean(e.question), 
      e.type = typeMatch(D(e.html).prevAll(".test_item_type").first().text()), e.question = titleCleanup(e.question), 
      e.options = removeStartChar(e.options), "3" === e.type) e.options = [];
      return e;
    }
  }, {
    type: "save",
    get name() {
      return `${siteDisplay()}\u9636\u6bb5\u6d4b\u9a8c\u6536\u5f55`;
    },
    match: () => Boolean(matchSite()) && pathHit(Kt),
    question: {
      html: ".bank_test > .test_item",
      question: ".test_item_tit",
      options: ".test_item_theme>ul>li>.zdh_op_con",
      type: ".question-box .tag",
      get workType() {
        return siteKey();
      },
      get pageType() {
        return siteKey();
      }
    },
    init: async () => {},
    answerHook: e => {
      e.type = typeMatch(D(e.html).prevAll(".test_item_type").first().text()), e.question = titleCleanup(e.question), 
      e.options = removeStartChar(e.options);
      const t = D(e.html).find(".test_item_key_tit").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim();
      switch (e.type) {
       case "0":
       case "1":
        e.answer = t.split("").map((t => {
          let a = t.charCodeAt() - 65;
          return e.options[a];
        }));
        break;

       case "3":
        e.answer = judgeAnswer(t), e.options = [];
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u897f\u8d22\u5728\u7ebf\u7efc\u5408\u7ec3\u4e60\u7b54\u9898",
    tips: "\u897f\u8d22\u5728\u7ebf\u6536\u5f55\u8bf7\u91cd\u65b0\u70b9\u51fb\u9898\u578b\u5207\u6362\u89e6\u53d1",
    match: () => location.host.includes("swufe-online.com") && location.href.includes("/learnspace/userDefine/t_test.jsp?courseId="),
    types: [ "0", "1", "3" ],
    question: {
      html: ".timu_title",
      question: ".timu_title",
      options: ".test_item_theme>ul>li",
      type: ".question-box .tag",
      workType: "swufe",
      pageType: "swufe"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".timu_title");
      })), !document.body.innerHTML.includes("\u63d0\u4ea4\u7b54\u9898\u540e\u663e\u793a")) return false;
      D(".layui-tab-title>li").on("click", (function() {
        vuePageChange();
      }));
    },
    ischecked: isParentChecked,
    questionHook: (e, t) => {
      const a = D(e.html).attr("id");
      return e.type = typeMatch(D(".layui-this").text()), e.question = removeHtml(D(e.html).html()), 
      e.options = D(`#${a}`).map((function() {
        let t = [], a = D(this).next(), n = [];
        for (;a.length && a.hasClass("question-item-opt"); ) n.push(removeHtml(a[0].outerHTML)), 
        t.push(a), a = a.next();
        return e.$options = D(t.map((e => e[0]))).find("label"), n;
      })).get(), e.options = removeStartChar(e.options), e;
    }
  }, {
    type: "save",
    name: "\u897f\u8d22\u5728\u7ebf\u7efc\u5408\u4f5c\u4e1a\u6536\u5f55",
    match: () => location.host.includes("swufe-online.com") && location.href.includes("/learnspace/userDefine/t_test.jsp?courseId="),
    question: {
      html: ".timu_title",
      question: ".timu_title",
      options: ".test_item_theme>ul>li",
      type: ".question-box .tag",
      workType: "swufe",
      pageType: "swufe"
    },
    init: async () => {
      if (await waitUntil((function() {
        return isExist(".timu_title");
      })), document.body.innerHTML.includes("\u63d0\u4ea4\u7b54\u9898\u540e\u663e\u793a")) return false;
      D(".layui-tab-title>li").on("click", (function() {
        vuePageChange();
      }));
    },
    answerHook: e => {
      const t = D(e.html).attr("id");
      switch (e.type = typeMatch(D(".layui-this").text()), e.question = removeHtml(D(e.html).html()), 
      e.options = D(`#${t}`).map((function() {
        let t = [], a = D(this).next(), n = [];
        for (;a.length && a.hasClass("question-item-opt"); ) n.push(removeHtml(a[0].outerHTML)), 
        t.push(a), a = a.next();
        return e.$options = D(t.map((e => e[0]))).find("label"), n;
      })).get(), e.options = removeStartChar(e.options), e.type) {
       case "0":
       case "1":
        const a = D(`#${t}`).nextAll(".ans").first().find("span:eq(0)").text();
        e.answer = a.trim().split("").map((t => {
          let a = t.charCodeAt() - 65;
          return e.options[a];
        }));
        break;

       case "3":
        e.answer = judgeAnswer(D(`#${t}`).nextAll(".ans").first().find("span:eq(0)").text().trim()), 
        e.options = [];
        break;

       case "7":
       case "4":
        e.answer = removeHtml(D(`#${t}`).nextAll(".ans").first().html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
        e.options = [];
        break;

       default:
        e.type;
      }
      return e;
    }
  } ], Qt = [ {
    type: "ask",
    name: "\u91cd\u5e86\u6cd5\u6cbb\u8003\u8bd5\u7b54\u9898",
    tips: "\u672c\u5e73\u53f0\u65e0\u7b54\u6848\u6536\u5f55\uff0c\u9700\u8981\u81ea\u884c\u8865\u5145\u9898\u5e93\uff0c\u5efa\u8bae\u4f7f\u7528\u9898\u5e93\u5bfc\u5165\u529f\u80fd",
    match: () => "ks.cqsdx.cn" === location.host && location.pathname.includes("/exam/user/bind"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".qlist",
      question: "span:eq(1)",
      options: "label",
      type: ".badge.badge-danger",
      workType: "cqsdx",
      pageType: "cqsdx"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".qlist");
      }));
    },
    toquestion: e => {
      D(`#question_card button:eq(${e})`).click();
    },
    ischecked: e => e.find("div").hasClass("checked"),
    questionHook: e => {
      const t = D(e.html).find(".badge.badge-danger").text();
      if (e.type = typeMatch(t), e.question = e.question.replace(/\u206B/g, "").trim(), 
      e.options = e.options.map((e => e.replace(/\u206B/g, "").trim())), "3" === e.type) e.options = [];
      return e;
    }
  } ], Jt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("telfri-edu.com"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "ask",
    name: "olearn\u7b54\u9898",
    tips: "",
    match: () => location.host.includes("telfri-edu.com") && location.href.includes("/learn/homework/do/"),
    types: [ "0", "1", "3" ],
    question: {
      html: ".topic-group>.topic-container",
      question: ".topic-title",
      options: ".topic-answer .radio-wrap .radio-text",
      type: ".question-box .tag",
      workType: "olearn",
      pageType: "olearn"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".topic-group>.topic-container");
      }));
    },
    ischecked: e => e.hasClass("is-active"),
    questionHook: e => {
      let t = D(e.html).prevAll(".topic-title").first().find(".title-bold").text().trim();
      return e.$options = D(e.html).find(".topic-answer .radio-wrap>label"), e.type = typeMatch(t), 
      e;
    }
  }, {
    type: "save",
    name: "olearn\u6536\u5f55",
    match: () => location.host.includes("telfri-edu.com") && location.href.includes("/learn/homework/show/"),
    question: {
      html: ".topic-group>.topic-container",
      question: ".topic-title",
      options: ".topic-answer .radio-wrap .radio-text",
      type: ".question-box .tag",
      workType: "olearn",
      pageType: "olearn"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".topic-group>.topic-container");
      }));
    },
    answerHook: e => {
      let t = D(e.html).prevAll(".topic-title").first().find(".title-bold").text().trim();
      e.type = typeMatch(t);
      const a = D(e.html).find(".standard-answer>.analysis-text").text().trim();
      switch (e.type) {
       case "0":
       case "1":
        e.answer = a.split("").map((t => e.options[t.charCodeAt(0) - 65]));
        break;

       case "3":
        e.options = [], e.answer = judgeAnswer(a);
      }
      return e;
    }
  } ], Xt = [ {
    type: "hook",
    name: "hook",
    match: () => location.host.includes("yxbyun.com") && !location.host.includes("yxb4student"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.path));
    }
  }, {
    type: "hook",
    name: "\u4ebf\u5b66\u5b9d\u65b0\u7248hook",
    match: () => location.host.includes("yxb4student.yxbyun.com"),
    main: e => {
      D("#app")[0] && observeVuePageChange(D("#app")[0], (() => D(".danxuan .tm").map(((e, t) => t.id)).get().join(",")));
    }
  }, {
    type: "save",
    name: "\u4ebf\u5b66\u5b9d\u6536\u5f55",
    match: () => location.host.includes("yxbyun.com") && (location.href.includes("yxbstudent/#/testPaper") || location.href.includes("yxbstudent/#/finalExam")),
    question: {
      html: ".test_wrap",
      question: ".content",
      options: ".el-radio-group input",
      type: ".question-box .tag",
      workType: "yxbyun",
      pageType: "yxbyun"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".test_wrap");
      }));
    },
    answerHook: e => {
      var t;
      const a = D(e.html).find("div:eq(0)")[0].__vue__, n = (null == (t = a.pagerData) ? void 0 : t.question) || a.smallPaper.questionTopic;
      return e.type = typeMatch(a.queTypeName), e.question = titleClean(removeHtml(n.questionTitle)), 
      e.options = (n.optionList || n.questionOptionList).map((e => removeHtml(e.questionContent))), 
      [ "0", "1", "3" ].includes(e.type) && (e.answer = n.questionAnswer.split(",").map((t => e.options[t.charCodeAt(0) - 65]))), 
      "3" === e.type && (e.options = [], e.answer = judgeAnswer(e.answer)), e;
    }
  }, {
    type: "save",
    name: "\u4ebf\u5b66\u5b9d\u8003\u8bd5\u6536\u5f55",
    match: () => location.host.includes("yxb4student.yxbyun.com") && location.pathname.includes("/kaoshicenter"),
    question: {
      html: ".danxuan",
      question: ".tm",
      options: ".xxbh",
      type: ".tx",
      workType: "yxbyun",
      pageType: "yxbyun"
    },
    init: async () => {
      if (!isExist(".danxuan")) return false;
      try {
        return await waitUntil((() => isExist(".danxuan .yuejuanqu")), {
          timeout: 8e3
        }), !0;
      } catch {
        return false;
      }
    },
    answerHook: e => {
      const t = D(e.html);
      e.type = typeMatch(t.find(".tx").text()), e.question = titleClean(removeHtml(t.find(".tm").html())), 
      e.options = e.$options.map(((e, t) => removeHtml(D(t).siblings(".xxnr").html()))).get();
      let a = "";
      t.find(".yuejuanqu > div").each(((e, t) => {
        const n = removeHtml(D(t).html());
        n.startsWith("\u7b54\u6848\uff1a") && (a = n.replace("\u7b54\u6848\uff1a", "").trim());
      }));
      const lettersToOptions2 = () => (a.match(/[A-Za-z]/g) || []).map((t => e.options[t.toUpperCase().charCodeAt(0) - 65])).filter((e => null != e && "" !== e));
      switch (e.type) {
       case "0":
       case "1":
        e.answer = lettersToOptions2();
        break;

       case "3":
        {
          const t = lettersToOptions2();
          e.answer = judgeAnswer(t[0] || a), e.options = [];
          break;
        }

       default:
        e.answer = a ? [ a ] : [];
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u4ebf\u5b66\u5b9d\u7b54\u9898",
    match: () => location.host.includes("yxbyun.com") && (location.href.includes("yxbstudent/#/testPaper") || location.href.includes("yxbstudent/#/finalExam")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".test_wrap",
      question: ".content",
      options: ".answer>.daan,.el-radio-group>label",
      type: ".question-box .tag",
      workType: "yxbyun",
      pageType: "yxbyun"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".test_wrap");
      }));
    },
    ischecked: e => e.hasClass("active"),
    questionHook: e => {
      var t;
      const a = D(e.html).find("div:eq(0)")[0].__vue__, n = (null == (t = a.pagerData) ? void 0 : t.question) || a.smallPaper.questionTopic;
      if (e.type = typeMatch(a.queTypeName), e.question = titleClean(removeHtml(n.questionTitle)), 
      e.options = (n.optionList || n.questionOptionList).map((e => removeHtml(e.questionContent))), 
      "3" === e.type) e.options = [];
      return e;
    },
    setAnswer: e => {
      if ("3" === e.type) {
        let t = e.answer;
        return e.ques.$options.each(((e, a) => {
          isTrue(t) && isTrue(removeHtml(D(a).parent().html())) && D(a).click(), isFalse(t) && isFalse(removeHtml(D(a).parent().html())) && D(a).click(), 
          removeHtml(D(a).parent().html());
        })), false;
      }
      return true;
    }
  }, {
    type: "ask",
    name: "\u4ebf\u5b66\u5b9d\u4f5c\u4e1a/\u8003\u8bd5\u7b54\u9898",
    match: () => location.host.includes("yxb4student.yxbyun.com") && (location.pathname.includes("/zuoye") || location.pathname.includes("/exam")),
    types: [ "0", "1", "3" ],
    question: {
      html: ".danxuan",
      question: ".tm",
      options: ".xxbh",
      type: ".tx",
      workType: "yxbyun",
      pageType: "yxbyun"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".danxuan .xuanxiang");
      }));
    },
    ischecked: e => e.hasClass("active"),
    questionHook: e => (e.type = typeMatch(D(e.html).find(".tx").text()), e.options = e.$options.map(((e, t) => removeHtml(D(t).siblings(".xxnr").html()))).get(), 
    "3" === e.type && (e.options = []), e),
    setAnswer: e => {
      if ("3" === e.type) {
        const t = e.answer;
        return e.ques.$options.each(((e, a) => {
          const n = removeHtml(D(a).siblings(".xxnr").html());
          isTrue(t) && isTrue(n) && D(a).click(), isFalse(t) && isFalse(n) && D(a).click();
        })), false;
      }
      return true;
    }
  } ], Yt = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("wdjycj.com") || location.host.includes("iwdjy.com"),
    main: e => {
      observeVuePageChange(D("#app")[0], (() => getUrl()));
    }
  }, {
    type: "save",
    name: "\u6587\u9876\u5728\u7ebf\u6536\u5f55",
    match: () => location.href.includes("/testpaper-test-result?resultId=") || location.href.includes("/testpaper-test?id"),
    question: {
      html: ".st-item",
      question: ".st-title",
      options: ".st-main>p",
      type: ".question-box .tag",
      workType: "wdzx",
      pageType: "wdzx"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".st-item");
      }));
      let e = [];
      try {
        D(".exam-html")[0].__vue__.test.lists.forEach(((t, a) => {
          t.question_lists.forEach(((t, a) => {
            e.push(t);
          }));
        }));
      } catch (t) {}
      unsafeWindow.ques = e;
    },
    answerHook: (e, t) => {
      var a;
      const n = unsafeWindow.ques[t], r = [];
      switch (e.question = titleClean(removeHtml(n.content)), e.options = (null == (a = n.appanswer) ? void 0 : a.map((e => {
        const t = removeHtml(e.text);
        return e.right && r.push(t), removeHtml(t);
      }))) || [], n.tm_type) {
       case 4:
        e.type = "3", e.answer = judgeAnswer("1" == n.answer ? "\u6b63\u786e" : "0" == n.answer ? "\u9519\u8bef" : "");
        break;

       case 5:
        e.type = "2", e.question = e.question.replace(/{#answer}/g, "_____"), e.answer = n.answer.split("|").map((e => e.includes("\u203b") ? e.split("\u203b")[0] : e));
        break;

       case 2:
        e.type = "0", e.answer = r;
        break;

       case 3:
        e.type = "1", e.answer = r;
        break;

       case 1:
        e.type = "4", e.answer = removeHtml(n.answer);
        break;

       default:
        n.tm_type;
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u6587\u9876\u5728\u7ebf\u7b54\u9898",
    tips: "",
    match: () => location.href.includes("/testpaper-test?id=") || location.href.includes("/final-exam"),
    types: [ "0", "1", "2", "3" ],
    question: {
      html: ".st-item",
      question: ".st-title",
      options: ".st-main>p",
      type: ".question-box .tag",
      workType: "wdzx",
      pageType: "wdzx"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".st-item");
      }));
    },
    toquestion: e => {
      D(`.card-box .bj:eq(${e})`).click();
    },
    ischecked: e => D(e).find("input").prop("checked"),
    questionHook: (e, t) => {
      e.options = removeOptionsStartChar(e.options);
      const a = D(e.html).find(".st-title").clone();
      D(a).find("strong").remove(), e.question = removeHtml(D(a).html());
      let n = D(e.html).prevAll(".title").first().text().trim();
      return e.type = typeMatch(n), e.$options = D(e.html).find(".answer-box>.answer>label"), 
      e;
    },
    setAnswer: e => {
      switch (e.type) {
       case "4":
       case "5":
       case "6":
       case "7":
        return D(e.html).find(".answer-text>div")[0].__vue__.msg.yourAnswer = e.answer[0], 
        D(e.html).find(".quill-editor").map(((t, a) => {
          a.__vue__.value = e.answer[t];
        })), false;

       case "2":
        let setYourAnswerById = function(e, t, a) {
          for (let n of e) if (Array.isArray(n.itemlists)) for (let e of n.itemlists) if (e.id === t) return e.yourAnswer = a, 
          true;
          return false;
        };
        const t = D(e.html).find("span.bj input").attr("name");
        return setYourAnswerById(D(".exam-html")[0].__vue__.answerCard, Number(t), e.answer), 
        e.answer, false;
      }
      return true;
    }
  } ], cleanOptionText = e => e.replace(/&nbsp;/g, " ").replace(/\uff08\u60a8\u7684\u9009\u62e9\uff09/g, "").replace(/\uff08\u6b63\u786e\u7b54\u6848\uff09/g, "").replace(/^\s*[A-Z]\s*[\.\u3001\uff0e]\s*/, "").replace(/\s+/g, " ").trim(), getSectionType = e => {
    const t = D(e)[0];
    if (!t) return typeMatch("");
    const a = (t.closest(".exam-section") || document).querySelectorAll(".section-title, .exam-title");
    let n = "";
    for (let r = 0; r < a.length; r++) {
      const e = a[r];
      if (!(e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING)) break;
      n = e.textContent || "";
    }
    return typeMatch(n);
  }, Zt = [ {
    type: "ask",
    name: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u7b54\u9898",
    tips: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u4ec5\u652f\u6301\u9009\u62e9\u3001\u5224\u65ad\u9898\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301\uff0c\u82e5\u6709\u9700\u8981\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
    match: () => location.href.includes("/student/study/examPage") && !location.href.includes("/student/study/examPageShow"),
    question: {
      html: ".question-item",
      question: ".question-content",
      options: ".answer-option .el-radio, .answer-option .el-checkbox",
      type: "",
      workType: "whut",
      pageType: "whut"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".question-item").length;
      }));
    },
    ischecked: e => e.find("input").is(":checked"),
    questionHook: e => {
      e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\s*[\u3001.\uff09)]/, "").trim();
      const t = [];
      return e.$options.each(((e, a) => {
        const n = D(a).clone();
        n.find(".el-radio__input, .el-checkbox__input, input").remove(), t.push(cleanOptionText(n.text()));
      })), e.options = t, e.type = getSectionType(e.html), e.type, e;
    }
  }, {
    type: "save",
    name: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u6536\u5f55",
    match: () => location.href.includes("/student/study/examPageShow"),
    question: {
      html: ".question-item",
      question: ".question-content",
      options: ".option-item",
      type: "",
      workType: "whut",
      pageType: "whut"
    },
    init: async () => {
      await waitUntil((function() {
        return 0 !== D(".question-item").length && 0 !== D(".question-item .correct-answer, .question-item .option-item.correct").length;
      }));
    },
    answerHook: e => {
      e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\s*[\u3001.\uff09)]/, "").trim();
      const t = [];
      e.$options.each(((e, a) => {
        const n = D(a).clone();
        n.find(".option-label, .user-choice, .correct-answer").remove(), t.push(cleanOptionText(n.text()));
      })), e.options = t, e.type = getSectionType(e.html);
      const a = [];
      return e.$options.each(((t, n) => {
        (D(n).hasClass("correct") || D(n).find(".correct-answer").length > 0) && a.push(e.options[t]);
      })), "3" === e.type ? (e.answer = a.length ? a[0] : "", e.options = []) : e.answer = a, 
      e;
    }
  } ], ea = [ {
    type: "save",
    name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u6536\u5f55",
    match: () => location.host.includes("dufe.edu.cn") && (location.href.includes("/HomeWorkPaper") || location.href.includes("/HomeWorkHistoryPaper") || location.href.includes("/ExercisesPaper")),
    question: {
      html: ".QuestTrunk,.HistoryQuestTrunk",
      question: ".CBTPaperMain-divInline",
      options: ".CBTPaperMain-options li",
      type: ".question-box .tag",
      workType: "dufe",
      pageType: "dufe"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".QuestTrunk,.HistoryQuestTrunk");
      }));
    },
    answerHook: e => {
      const t = e.html.vtree[0].vmodel._trunks[0], a = e.html.vtree[0].vmodel._type;
      let n = [], r = [];
      const getOption = () => {
        t.QUESTION_OPTIONS.forEach((e => {
          const t = removeHtml(e.OPTION_CONTENT);
          "1" === e.ISTRUE && n.push(t), r.push(t);
        }));
      };
      switch (a) {
       case "001":
        e.type = "0", getOption();
        break;

       case "002":
        e.type = "1", getOption();
        break;

       case "004":
        e.type = "3", e.options = [], n = "1" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u6b63\u786e" ] : "0" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u9519\u8bef" ] : [];
        break;

       case "005":
        e.type = "4", n = [ removeHtml(t.QUESTION_OPTIONS[0].OPTION_CONTENT) ];
      }
      return e.question = titleClean(t.QUESTION_TITLE), e.options = r, e.answer = n, e;
    }
  }, {
    type: "ask",
    name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u7b54\u9898",
    match: () => location.host.includes("dufe.edu.cn") && (location.href.includes("/HomeWorkPaper") || location.href.includes("/ExercisesPaper")),
    types: [ "0", "1", "3", "4" ],
    question: {
      html: ".QuestTrunk",
      question: ".CBTPaperMain-divInline",
      options: ".CBTPaperMain-options li>label",
      type: ".question-box .tag",
      workType: "dufe",
      pageType: "dufe"
    },
    init: async () => {},
    ischecked: e => e.parent().find("input").prop("checked"),
    questionHook: e => {
      const t = e.html.vtree[0].vmodel._trunks[0], a = e.html.vtree[0].vmodel._type;
      let n = [], r = [];
      const getOption = () => {
        t.QUESTION_OPTIONS.forEach((e => {
          const t = removeHtml(e.OPTION_CONTENT);
          "1" === e.ISTRUE && n.push(t), r.push(t);
        }));
      };
      switch (a) {
       case "001":
        e.type = "0", getOption();
        break;

       case "002":
        e.type = "1", getOption();
        break;

       case "004":
        e.type = "3", e.options = [], n = "1" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u6b63\u786e" ] : "0" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u9519\u8bef" ] : [];
        break;

       case "005":
        e.type = "4", n = [ removeHtml(t.QUESTION_OPTIONS[0].OPTION_CONTENT) ];
      }
      return e.question = titleClean(t.QUESTION_TITLE), e.options = r, e.answer = n, e;
    },
    setAnswer: e => {
      if ("4" === e.type) {
        const t = D(e.html).find("textarea")[0];
        return t._ms_context_._answer = e.answer[0], t._ms_context_._save(), false;
      }
      return true;
    }
  }, {
    type: "ask",
    name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u7b54\u9898(\u7efc\u5408)",
    match: () => location.host.includes("dufe.edu.cn") && location.href.includes("/CompHomeworkPaper"),
    types: [ "0", "1", "3", "4" ],
    question: {
      html: ".Question",
      question: ".CBTPaperMain-trunkTitle",
      options: "ul.Question-options>li",
      type: ".question-box .tag",
      workType: "dufe",
      pageType: "dufe"
    },
    init: async () => {},
    ischecked: e => e.parent().find("input").prop("checked"),
    questionHook: e => {
      const t = (e => {
        var t;
        if (e) {
          const a = Object.keys(e).find((e => e.startsWith("__reactEventHandlers")));
          if (a) {
            const t = e[a];
            return console.log("React \u4e8b\u4ef6\u5904\u7406\u5bf9\u8c61:", t), t;
          }
          if (!a) {
            const a = Object.keys(e).find((e => e.startsWith("__reactInternalInstance$") || e.startsWith("__reactFiber$")));
            if (a && (null == (t = e[a]) ? void 0 : t.memoizedProps)) return console.log("React \u5185\u90e8\u6570\u636e:", e[a].memoizedProps), 
            e[a].memoizedProps;
          }
        } else console.error("\u672a\u627e\u5230 .Question \u5143\u7d20");
      })(e.html).children[0]._owner.memoizedProps;
      return e.type = {
        SingleChoice: "0",
        MultipleChoice: "1"
      }[t.type], e.options = removeStartChar(e.options), e;
    },
    setAnswer: e => {
      if ("4" === e.type) {
        const t = D(e.html).find("textarea")[0];
        return t._ms_context_._answer = e.answer[0], t._ms_context_._save(), false;
      }
      return true;
    }
  } ], ta = {
    single: "0",
    multiple: "1",
    judge: "3"
  }, parseCfyOptions = e => JSON.parse(e).map((e => removeHtml(e.content))), aa = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("lygtc.edu.cn") || location.host.includes("cfyedu.com"),
    main: () => {
      observeVuePageChange(D("#app")[0], (() => D("#app")[0].__vue__.$route.path));
    }
  }, {
    type: "save",
    name: "\u6625\u98ce\u96e8\u6536\u5f55",
    match: () => location.host.includes("lygtc.edu.cn") && (location.href.includes("/student/#/my-study/homework/records/detail") || location.href.includes("/student/#/my-study/homework")),
    question: {
      html: ".questions>div>div[id],.question>div>div[id]",
      question: ".topic-title",
      options: ".el-radio-group label .label,.el-checkbox-group label .label",
      type: ".question-box .tag",
      workType: "cfy",
      pageType: "cfy"
    },
    init: async () => {
      await waitUntil((() => 0 !== D(".questions>div>div[id],.question>div>div[id]").length));
    },
    answerHook: e => {
      const t = D(e.html).find(">div")[0].__vue__.question;
      return e.question = titleClean(removeHtml(t.title)), e.options = parseCfyOptions(t.options), 
      e.answer = t.answer.split("").map((t => e.options[t.charCodeAt(0) - 65])).filter(Boolean), 
      e.type = ta[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
      t.type, e;
    }
  }, {
    type: "ask",
    name: "\u6625\u98ce\u96e8\u7b54\u9898",
    tips: "\u516c\u544a",
    match: () => location.host.includes("lygtc.edu.cn") && location.href.includes("/student/#/my-study/homework"),
    types: Object.values(ta),
    question: {
      html: ".question>div>div[id]",
      question: ".question-title>.title",
      options: ".radio-option",
      type: ".question-box .tag",
      workType: "cfy",
      pageType: "cfy"
    },
    init: async () => {
      await waitUntil((() => 0 !== D(".question>div>div[id]").length));
    },
    ischecked: e => e.find(".el-radio__input.is-checked").length > 0,
    questionHook: e => {
      const t = D(e.html).find(">div")[0].__vue__.question;
      return e.question = titleClean(removeHtml(t.title)), e.options = parseCfyOptions(t.options), 
      e.type = ta[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
      e;
    }
  }, {
    type: "save",
    name: "\u6625\u98ce\u96e8\u6d4b\u9a8c\u6536\u5f55",
    match: () => location.host.includes("cfyedu.com") && location.href.includes("/student/#/my-exam/detail"),
    question: {
      html: ".questions>div>div[id]",
      question: ".question-title>.title",
      options: ".radio-option,.checkbox-option",
      type: ".question-box .tag",
      workType: "cfy",
      pageType: "cfy"
    },
    init: async () => {
      await waitUntil((() => 0 !== D(".questions>div>div[id]").length));
    },
    answerHook: e => {
      const t = D(e.html).find(">div")[0].__vue__.question;
      return e.question = titleClean(removeHtml(t.title)), e.options = parseCfyOptions(t.options), 
      e.answer = t.answer.split("").map((t => e.options[t.charCodeAt(0) - 65])).filter(Boolean), 
      e.type = ta[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
      t.type, e;
    }
  }, {
    type: "ask",
    name: "\u6625\u98ce\u96e8\u6d4b\u9a8c\u7b54\u9898",
    tips: "\u516c\u544a",
    match: () => location.host.includes("cfyedu.com") && location.href.includes("/student/#/my-test/do-test"),
    types: Object.values(ta),
    question: {
      html: ".answer div[id]",
      question: ".question-title>.title",
      options: ".radio-option,.checkbox-option",
      type: ".question-box .tag",
      workType: "cfy",
      pageType: "cfy"
    },
    init: async () => {
      await waitUntil((() => 0 !== D(".answer div[id]").length));
    },
    ischecked: e => e.find(".el-radio__input.is-checked,.el-checkbox__input.is-checked").length > 0,
    questionHook: e => {
      const t = D(e.html).find(">div")[0].__vue__.question;
      return e.question = titleClean(removeHtml(t.title)), e.options = parseCfyOptions(t.options), 
      e.type = ta[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
      e;
    }
  } ], na = [ {
    type: "hook",
    name: "hook",
    match: location.host.includes("jijiaool.com"),
    main: e => {
      observeVuePageChange(D(".contentIframe")[0], (() => D(".contentIframe").attr("src")));
    }
  }, {
    type: "ask",
    name: "\u7ee7\u6559\u5728\u7ebf\u7b54\u9898",
    match: () => location.href.includes("jijiaool.com") && location.href.includes("/Learning/CourseOnlineExamination"),
    types: [ "0", "1" ],
    question: {
      html: ".bank_test>.test_item",
      question: ".test_item_tit",
      options: ".test_item_theme>ul>li>label",
      type: ".question-box .tag",
      workType: "jijiaool",
      pageType: "jijiaool"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".bank_test>.test_item");
      }));
    },
    ischecked: isParentChecked,
    questionHook: e => {
      const t = D(e.html).find(".test_item_tit").clone();
      t.find(".tipNodo").remove(), e.question = titleClean(removeHtml(t.html()));
      const a = removeOptionsStartChar(e.options);
      a && (e.options = a);
      const n = D(e.html).prevAll(".test_item_type").first().text().trim();
      return e.type = typeMatch(n), e;
    }
  }, {
    type: "save",
    name: "\u7ee7\u6559\u5728\u7ebf\u6536\u5f55",
    match: () => location.href.includes("jijiaool.com") && location.href.includes("/Learning/CourseExamWorkPageDetail"),
    question: {
      html: ".bank_test>.test_item",
      question: ".test_item_tit",
      options: ".test_item_theme>ul>li>label",
      type: ".question-box .tag",
      workType: "jijiaool",
      pageType: "jijiaool"
    },
    init: async () => {
      await waitUntil((function() {
        return isExist(".bank_test>.test_item");
      }));
    },
    answerHook: e => {
      const t = D(e.html).find(".test_item_tit").clone();
      t.find(".tipNodo").remove(), e.question = titleClean(removeHtml(t.html()));
      const a = removeOptionsStartChar(e.options);
      a && (e.options = a);
      const n = D(e.html).prevAll(".test_item_type").first().text().trim();
      e.type = typeMatch(n);
      const r = D(e.html).find(".test_item_tit:eq(1)"), s = r.length ? removeHtml(r.html()).replace(/\u6b63\u786e\u7b54\u6848\uff1a/g, "").trim() : "";
      if (s) switch (e.type) {
       case "0":
       case "1":
        e.answer = s.split("").map((t => e.options[t.charCodeAt(0) - 65])).filter(Boolean);
        break;

       case "3":
        e.answer = judgeAnswer(s), e.options = [];
      } else switch (e.type) {
       case "0":
       case "1":
        {
          const t = [];
          D(e.html).find(".test_item_theme>ul>li").each(((e, a) => {
            D(a).find("input:checked").length && t.push(e);
          })), e.answer = t.map((t => e.options[t])).filter(Boolean);
          break;
        }

       case "3":
        e.answer = judgeAnswer(D(e.html).find(".test_item_theme input:checked").attr("value") || ""), 
        e.options = [];
      }
      return e.answer, e;
    }
  } ], ra = [ {
    type: "save",
    name: "\u5317\u4eac\u8054\u5927\u5b66\u5802\u6536\u5f55",
    match: () => location.host.includes("jxjypt.cn") && location.href.includes("/paper/start?pid="),
    question: {
      html: "#questionModule>ul>li",
      question: ".sub-dotitle>pre",
      options: "dl.sub-answer>dd",
      type: ".sub-dotitle>i",
      workType: "jhjypt",
      pageType: "jhjypt"
    },
    init: async () => {},
    answerHook: e => {
      let t = removeHtml(D(e.html).find(".refer-answer>span>em.right ,.solution .so-timu .wenzi:eq(0)").html());
      if (void 0 === t || "undefined" == t) return null;
      switch (e.options = removeStartChar(e.options), e.type = typeMatch(removeHtml(D(e.html).find(".sub-dotitle>i").text().replace("\n", "").replace(" ", ""))), 
      e.type) {
       case "0":
       case "1":
        e.answer = [], t.split("").forEach((t => {
          e.answer.push(e.options[t.charCodeAt() - 65]);
        }));
        break;

       case "2":
       case "4":
       case "5":
       case "6":
       case "7":
        e.answer = t;
      }
      return e;
    }
  }, {
    type: "ask",
    name: "\u5317\u4eac\u8054\u5927\u5b66\u5802\u7b54\u9898",
    tips: "\u516c\u544a",
    match: () => location.host.includes("jxjypt.cn") && location.href.includes("/paper/start?pid="),
    types: [ "0", "1", "2", "3", "4", "5", "6", "7" ],
    minDelay: 1e3,
    answerDelay: 1e3,
    question: {
      html: "#questionModule>ul>li",
      question: ".sub-dotitle>pre",
      options: "dl.sub-answer>dd",
      type: ".sub-dotitle>i",
      workType: "jhjypt",
      pageType: "jhjypt"
    },
    init: async () => {
      if (await waitUntil((function() {
        return 0 !== D("#questionModule>ul>li").length;
      })), !isExist("#btn_submit")) return false;
      try {
        const e = W.addEventListener;
        W.addEventListener = function(t, a, n) {
          if ("visibilitychange" !== t) return e.call(this, t, a, n);
        }, W.paper && void 0 !== W.paper.isCut && (W.paper.isCut = 0), Object.defineProperty(W.document, "visibilityState", {
          get: function() {
            return "visible";
          },
          configurable: !0
        }), Object.defineProperty(W.document, "hidden", {
          get: function() {
            return !1;
          },
          configurable: !0
        });
      } catch (e) {}
    },
    ischecked: e => e.hasClass("cho-this"),
    questionHook: e => (e.options = removeStartChar(e.options), e.type = typeMatch(removeHtml(D(e.html).find(".sub-dotitle>i").text().replace("\n", "").replace(" ", ""))), 
    e),
    setAnswer: e => {
      switch (e.type) {
       case "2":
       case "4":
       case "5":
       case "6":
       case "7":
        const t = D(e.html).find(".e__textarea");
        if (t.length > 0) {
          const a = t[0];
          a.value = e.answer, t.focus();
          [ "input", "change", "keyup", "keydown", "blur", "paste" ].forEach((e => {
            const t = new Event(e, {
              bubbles: true,
              cancelable: true
            });
            a.dispatchEvent(t);
          })), t.trigger("input").trigger("change").trigger("keyup").trigger("blur"), setTimeout((() => {
            t.trigger("change");
          }), 100), e.answer;
        }
        return false;
      }
      return true;
    }
  } ], cloneOptions = e => Array.isArray(e) ? e.map((e => e && "object" == typeof e ? {
    ...e
  } : e)) : [], normalizeFlatOptions = (e, t = true) => {
    const a = t ? cleanQuestionTextWithImageHtml : cleanQuestionText, n = e.map((e => a(e)));
    return removeOptionPrefixes(n).map((e => e.trim())).filter(Boolean);
  }, normalizeBaseQuestion = e => {
    const t = false !== e.preserveImageHtml, a = t ? cleanQuestionTextWithImageHtml : cleanQuestionText, n = {
      ...e,
      question: cleanQuestionTitle(a(e.question)),
      options: cloneOptions(e.options)
    };
    return "15" == n.type ? (n.options = ((e, t = true) => {
      const a = t ? cleanQuestionTextWithImageHtml : cleanQuestionText;
      return e.map((e => e && "object" == typeof e ? {
        ...e,
        question: cleanQuestionTitle(a(e.question)),
        options: normalizeFlatOptions(cloneOptions(e.options), t)
      } : e));
    })(n.options, t), n) : "11" == n.type ? (n.options = (r = e.options, Array.isArray(r) ? r.map((e => Array.isArray(e) ? e.slice() : e)) : r), 
    n) : (n.options = normalizeFlatOptions(n.options, t), n);
    var r;
  }, normalizeQuestionForAsk = e => {
    const t = normalizeBaseQuestion(e);
    return "3" == t.type && (t.options = []), t;
  }, normalizeQuestionForSave = e => {
    const t = normalizeBaseQuestion(e);
    return "11" != t.type && "15" != t.type && ((e, t) => {
      if (!Array.isArray(e.options) || 0 === e.options.length) return;
      if (!Array.isArray(t.options) || t.options.some((e => "string" != typeof e))) return;
      const a = false !== e.preserveImageHtml ? cleanQuestionTextWithImageHtml : cleanQuestionText, n = e.options.map((e => a(e))), r = removeOptionPrefixes(n).map((e => e.trim())), s = new Map;
      n.forEach(((e, t) => {
        const a = normalizeComparableText(e);
        a && r[t] && !s.has(a) && s.set(a, r[t]);
      }));
      const remap = e => "string" != typeof e ? e : s.get(normalizeComparableText(e)) ?? e;
      "string" == typeof t.answer ? t.answer = remap(t.answer) : Array.isArray(t.answer) && (t.answer = t.answer.map(remap));
    })(e, t), null !== t.answer && void 0 !== t.answer && "object" != typeof t.answer && (t.answer = [ String(t.answer) ]), 
    t;
  }, parseAntaiQuestion = e => {
    const t = "string" == typeof e.options ? e.options : "", a = [];
    t.split(/[;\uff1b]/).map((e => e.trim())).filter(Boolean).forEach((e => {
      const t = e.match(/^([A-Za-z])\s*[:\uff1a]\s*([\s\S]*)$/);
      a.push(removeHtml(t ? t[2] : e).trim());
    }));
    const n = (("string" == typeof e.answer ? e.answer : "").toUpperCase().match(/[A-Z]/g) || []).map((e => e.charCodeAt(0) - 65)).filter((e => e >= 0 && e < a.length)), r = n.map((e => a[e]));
    let s;
    1 === e.type ? s = "0" : 2 === e.type ? s = "3" : (s = r.length > 1 ? "1" : "0", 
    e.type);
    const i = {
      question: titleClean(removeHtml(e.content || "")),
      options: a,
      answer: r,
      answerIndexes: n,
      type: s
    };
    return "3" === s && (i.options = [], i.answer = judgeAnswer(r[0] || ""), i.answerIndexes = []), 
    i;
  }, isAntai = () => "antai.geovisearth.com" === location.host, sa = [ {
    type: "save",
    name: "\u5b89\u6cf0\u5b89\u57f9\u6536\u5f55",
    match: () => isAntai() && !!W.antaiques,
    question: {
      html: () => W.antaiques || [],
      question: "",
      options: "",
      type: "",
      workType: "antai",
      pageType: "antai"
    },
    init: async () => {
      await waitUntil((() => !!W.antaiques));
    },
    answerHook: e => {
      const t = e.html;
      if (!t || "object" != typeof t) return null;
      const a = parseAntaiQuestion(t);
      return e.question = a.question, e.options = a.options, e.answer = a.answer, e.type = a.type, 
      e;
    }
  }, {
    type: "ask",
    name: "\u5b89\u6cf0\u5b89\u57f9\u7b54\u9898",
    tips: "",
    match: () => isAntai() && !!W.antaiques && D(".n-card.n-modal .el-carousel__item").length > 0,
    types: [ "0", "1", "3" ],
    question: {
      html: ".n-card.n-modal .el-carousel__item",
      question: ".el-tag",
      options: ".el-radio",
      type: ".el-tag__content",
      workType: "antai",
      pageType: "antai"
    },
    init: async () => {
      await waitUntil((() => D(".n-card.n-modal .el-carousel__item").length > 0 && !!W.antaiques));
    },
    ischecked: e => e.hasClass("is-checked"),
    toquestion: e => {
      const t = String(e + 1);
      D(".n-card.n-modal button").filter((function() {
        return D(this).text().trim() === t;
      })).first().click();
    },
    questionHook: (e, t) => {
      const a = (W.antaiques || [])[t];
      if (!a) return null;
      const n = parseAntaiQuestion(a);
      e.question = n.question, e.options = n.options, e.type = n.type, e.$options = D(e.html).find(".el-radio"), 
      "3" === n.type && (e.options = []);
      const r = normalizeQuestionForAsk({
        type: n.type,
        question: titleClean(n.question),
        options: "3" === n.type ? [] : n.options
      }), s = "3" === n.type ? n.answer : n.answerIndexes.map((e => r.options[e])).filter((e => null != e && "" !== e));
      return s.length > 0 && Answer.cacheAnswer({
        type: r.type,
        question: r.question,
        options: r.options,
        answer: s
      }), e;
    }
  } ], ia = {
    1: "0",
    2: "1",
    3: "4",
    4: "15",
    5: "2",
    6: "3",
    7: "5",
    8: "4",
    9: "7",
    11: "6",
    14: "14"
  }, parseBgzkQuestion = e => {
    const t = (e => ia[Number(e.questionType)] || "8")(e), a = e.options ?? [], n = a.map((e => (null == e ? void 0 : e.description) ?? "")), r = ((e, t) => {
      const a = [];
      return e.forEach(((e, n) => {
        const r = String((null == e ? void 0 : e.label) ?? "").trim().toUpperCase(), s = /^[A-Z]$/.test(r) ? r.charCodeAt(0) - 65 : n;
        a[s] = t[n];
      })), a;
    })(a, n), s = buildQingshuAnswer(t, e, r), i = "0" === t || "1" === t ? (o = e.solution, 
    o ? o.split("").filter((e => /^[A-Za-z]$/.test(e))) : []).map((e => a.findIndex((t => String((null == t ? void 0 : t.label) ?? "").trim().toUpperCase() === e.toUpperCase())))).filter((e => e >= 0)) : [];
    var o;
    return {
      question: e.description ?? "",
      options: "3" === t ? [] : n,
      answer: s.answer,
      answerIndexes: i,
      type: t
    };
  }, hasBgzkSolution = e => !!(null == e ? void 0 : e.solution) || ((null == e ? void 0 : e.subQuestions) ?? []).some((e => !!(null == e ? void 0 : e.solution))), oa = [ 2, 3, 4 ], la = [ -1, 0, 1 ], ca = [ /\/Student\/Course\/Quiz\/Detail/i, /\/Student\/course\/resource\/quizDetail/i, /\/Student\/exam\/quiz/i ], pa = ".question-quiz > .question-detail-container", isQuizPage = () => location.host.endsWith("bgzk-edu.cn") && ca.some((e => e.test(location.pathname))), getQuestions = () => W.bgzkques || [], hasSolutions = () => getQuestions().some(hasBgzkSolution), isAnalysisMode = () => (e => {
    if (!e) return false;
    const t = Number(e.answerStatus);
    return !!oa.includes(t) || 2 === Number(e.quizStatus) && la.includes(t);
  })(W.bgzkquiz || null), questionsLoaded = () => getQuestions().length > 0, containersReady = () => isExist(pa) && questionsLoaded(), waitOrSkip = async e => {
    try {
      return await waitUntil(e, {
        timeout: 3e4
      }), !0;
    } catch {
      return false;
    }
  };

  let ua = false;

  const da = [ {
    type: "hook",
    name: "\u5e7f\u897f\u81ea\u8003\u52a9\u5b66hook",
    match: () => isQuizPage(),
    main: () => {
      if (ua) return;
      ua = true;
      const getHash = () => `${getQuestions().map((e => (null == e ? void 0 : e.questionId) ?? "")).join(",")}|${hasSolutions()}|${isAnalysisMode()}`;
      waitUntil(questionsLoaded, {
        timeout: 6e4
      }).then((() => {
        const e = D("#app")[0];
        e ? observeVuePageChange(e, getHash, {
          beforeChange: () => {
            ua = false;
          }
        }) : ua = false;
      })).catch((() => {
        ua = false;
      }));
    }
  }, {
    type: "save",
    name: "\u5e7f\u897f\u81ea\u8003\u52a9\u5b66\u6536\u5f55",
    match: () => isQuizPage(),
    question: {
      html: () => getQuestions(),
      question: "",
      options: "",
      type: "",
      workType: "bgzk",
      pageType: "bgzk"
    },
    init: async () => !!(await waitOrSkip(questionsLoaded)) && hasSolutions(),
    answerHook: e => {
      const t = e.html;
      if (!t || "object" != typeof t) return null;
      const a = parseBgzkQuestion(t);
      return e.question = a.question, e.options = a.options, e.answer = a.answer, e.type = a.type, 
      e;
    }
  }, {
    type: "ask",
    name: "\u5e7f\u897f\u81ea\u8003\u52a9\u5b66\u7b54\u9898",
    tips: "",
    match: () => isQuizPage(),
    types: [ "0", "1", "3" ],
    question: {
      html: pa,
      question: ".question-detail-description",
      options: ".question-detail-options .question-detail-option > label, .question-detail-judgment .el-radio",
      type: ".question-detail-type-desc",
      workType: "bgzk",
      pageType: "bgzk"
    },
    init: async () => !!(await waitOrSkip(questionsLoaded)) && (!isAnalysisMode() && await waitOrSkip(containersReady)),
    ischecked: e => e.hasClass("choice-active") || e.hasClass("is-checked"),
    toquestion: e => {
      D(".question-card .question-item").eq(e).click();
    },
    questionHook: (e, t) => {
      const a = getQuestions()[t];
      if (!a) return null;
      const n = parseBgzkQuestion(a);
      return e.question = n.question, e.options = n.options, e.type = n.type, e;
    }
  } ], ma = Object.freeze(Object.defineProperty({
    __proto__: null,
    a21tb: It,
    ahjxjy: pt,
    antai: sa,
    bgzk: da,
    cfy: aa,
    chaoxing: tt,
    chengjiaoyun: it,
    chutou: wt,
    cjedu: mt,
    cjnep: At,
    cloudwis: yt,
    cnzx: ct,
    cqsdx: Qt,
    dufe: ea,
    gkks: gt,
    guokai: st,
    huayi: Ct,
    jhjypt: ra,
    jijiaool: na,
    jijiaox: kt,
    jsou: ot,
    learnin: Nt,
    learnspace: Wt,
    ls365: xt,
    mooc: Bt,
    mosoteach: Dt,
    mynep: Tt,
    olearn: Jt,
    openha: vt,
    ouchn: Rt,
    qingshu: ut,
    sclecb: bt,
    uooc: dt,
    wdjycj: Yt,
    wencai: qt,
    whut: Zt,
    wx168: Et,
    xinwei: nt,
    xueqi: ft,
    ynou: St,
    ytccr: ht,
    yunmuxueyuan: Ve,
    yxbyun: Xt,
    yxlearning: _t,
    zhihuishu: at,
    zhijiaoyun: lt
  }, Symbol.toStringTag, {
    value: "Module"
  })), resolveRuleHtml = e => "function" == typeof e ? e() : e;

  const createQuestionData = (e, t) => {
    const a = D(t), n = removeHtml(a.find(e.question).html()), r = a.find(e.options).map(((e, t) => removeHtml(D(t).html()))).get();
    return {
      question: titleClean(n ?? ""),
      options: r,
      $options: a.find(e.options),
      type: a.find(e.type).val(),
      html: a[0],
      workType: e.workType,
      pageType: e.pageType
    };
  }, ha = [];

  for (const ih in ma) ha.push(...ma[ih]);

  const isRuleMatched = e => "function" == typeof e.match ? e.match() : Boolean(e.match), parseRule = async e => {
    await waitUntil((() => void 0 !== W[ne + "app"]));
    const t = e.filter(isRuleMatched), a = getAppStore(), n = {
      app: a,
      ask: getAskStore(),
      ai: W[ne + "ai"]
    };
    if (!t.length) return a.app.alert = "\u5f53\u524d\u6ca1\u6709\u4efb\u52a1", console.log("\u6ca1\u6709\u5339\u914d\u5230\u89c4\u5219", "error"), 
    void addLog("\u6ca1\u6709\u5339\u914d\u5230\u89c4\u5219", "error");
    for (const r of t) {
      if (console.log(`\u5339\u914d\u5230\u89c4\u5219\uff1a${r.name}`, "success"), addLog(`\u5339\u914d\u5230\u89c4\u5219\uff1a${r.name}`, "success"), 
      r.init) {
        let e = await r.init();
        if ("boolean" == typeof e && false === e) continue;
      }
      a.alert = `\u5f53\u524d\u4efb\u52a1:${r.name}`, "hook" === r.type && r.main(n), 
      "ask" === r.type && askParser(r, n), "save" === r.type && await saveParser(r, n);
    }
  }, saveParser = async (e, t) => {
    const a = t.app, n = t.ask;
    n.rule = e, e.tips && (n.tips = e.tips);
    const r = questionSaveParser(e.question, e.answerHook || null).filter((e => {
      return !(null == e || (t = e.answer, !flattenAnswerTexts(t).some((e => "" !== e.trim()))) || "8" == e.type);
      var t;
    })).map((e => (e.question = titleClean(e.question), e)));
    n.saveQuestionData = r, r.forEach((e => {
      Answer.cacheAnswer(e);
    })), await async function({questionList: e, pageType: t, paper: a, onPaperError: n, beforeSync: r, syncQuestionList: s}) {
      if (a) try {
        await a(e);
      } catch (o) {
        null == n || n(o);
      }
      const i = {
        questionList: e,
        pageType: t
      };
      return null == r || r(i), e.length && await s(i), i;
    }({
      questionList: r,
      pageType: e.question.pageType,
      paper: e.paper && "function" == typeof e.paper ? e.paper : void 0,
      onPaperError: () => addLog("\u6574\u5377\u7f13\u5b58\u5f02\u5e38", "error"),
      beforeSync: () => a.setPage("library", "manage"),
      syncQuestionList: e => Answer.syncQuestionList(e)
    }), a.app.alert = `\u9898\u5e93\u6536\u5f55\u5b8c\u6210\uff0c\u5171\u7f13\u5b58${r.length}\u9053\u9898\u76ee`, 
    msg(`\u9898\u5e93\u6536\u5f55\u5b8c\u6210\uff0c\u5171\u7f13\u5b58${r.length}\u9053\u9898\u76ee`, "success"), 
    e.next && e.next();
  }, askParser = (e, t) => {
    const a = t.app, n = t.ask;
    n.rule = e, e.minDelay && (n.minDelay = e.minDelay, n.delay < n.minDelay && (n.delay = n.minDelay)), 
    e.optionDelay && (n.optionMinDelay = e.optionDelay, n.optionDelay < n.optionMinDelay && (n.optionDelay = n.optionMinDelay), 
    e.optionDelay = n.optionDelay), e.tips && (n.tips = e.tips), a.app.showFloat = !a.app.hideFloat, 
    a.setPage("ask"), n.clearQuestion();
    var r, s;
    (r = questionParser(e.question, e.questionHook || null), s = titleClean, r.filter((e => null != e)).map((e => (e.question = s(e.question), 
    "3" == e.type && (e.options = []), e)))).map((e => normalizeQuestionForAsk(e))).forEach((e => {
      n.addQuestion(e);
    })), n.autoAnswer && n.toggleStart();
  }, questionSaveParser = (e, t) => {
    const a = resolveRuleHtml(e.html);
    return D(a).map(((a, n) => {
      let r = {
        ...createQuestionData(e, n),
        $answer: D(n).find(e.answer),
        answer: []
      };
      try {
        t && (r = t(r, a));
      } catch (i) {
        console.log("\u6536\u5f55hook\u62a5\u9519", i);
      }
      if (null == r || null == r) return null;
      const s = normalizeQuestionForSave(r);
      return {
        question: s.question,
        options: s.options,
        answer: s.answer,
        type: s.type,
        hash: questionHash(s.type, s.question, s.options)
      };
    })).get();
  }, questionParser = (e, t) => {
    const a = resolveRuleHtml(e.html), n = D(a).map(((a, n) => ((e, t, a, n = () => {}) => {
      if (!t) return e;
      try {
        return t(e, a) || null;
      } catch (r) {
        return n(r), null;
      }
    })(createQuestionData(e, n), t, a, (e => {
      console.log("\u7b54\u9898hook\u62a5\u9519", e);
    }))));
    return n.get();
  }, vuePageChange = async () => {
    if (W.vuePageChangeLock) return;
    W.vuePageChangeLock = true;
    const e = getAppStore(), t = getAskStore();
    t.questionInx = 0, e.app.showFloat = false, e.setPage("overview"), t.clearQuestion(), 
    await parseRule(ha), W.vuePageChangeLock = false;
  }, observeVuePageChange = (e, t, a = {}) => {
    if (W.mainClass = t(), !e) return;
    const n = new MutationObserver((async () => {
      const e = t();
      W.mainClass !== e && (W.mainClass = e, a.beforeChange && await a.beforeChange(e), 
      await vuePageChange(), n.disconnect());
    }));
    n.observe(e, {
      subtree: true,
      attributes: true,
      childList: true
    });
  }, formatUpdateDate = e => new Date(e).toISOString().replace("T", " ").substring(0, 19), normalizeVersionParts = e => {
    var t;
    return ((null == (t = e.trim().replace(/^v/i, "").match(/\d+(?:\.\d+)*/)) ? void 0 : t[0]) || "0").split(".").map((e => Number(e) || 0));
  }, compareVersionOrder = (e, t) => {
    const a = normalizeVersionParts(e), n = normalizeVersionParts(t), r = Math.max(a.length, n.length);
    for (let s = 0; s < r; s++) {
      const e = a[s] || 0, t = n[s] || 0;
      if (e > t) return 1;
      if (e < t) return -1;
    }
    return 0;
  }, compareVersions = (e, t) => compareVersionOrder(e, t) < 0, fa = 864e5, formatDate = e => formatUpdateDate(e), ga = [ {
    id: "492563",
    name: "GreasyFork",
    home: "https://greasyfork.org/zh-CN/scripts/492563-%E7%88%B1%E9%97%AE%E7%AD%94%E5%8A%A9%E6%89%8B",
    updateurl: "https://greasyfork.org/zh-CN/scripts/492563.json",
    getdata: e => {
      const t = JSON.parse(e[0].responseText);
      return {
        version: t.version,
        code_updated_at: formatDate(t.code_updated_at)
      };
    }
  }, {
    id: "2384",
    name: "\u811a\u672c\u732b",
    home: "https://scriptcat.org/zh-CN/script-show-page/2384",
    updateurl: "https://scriptcat.org/api/v2/scripts/2384",
    getdata: e => {
      const t = JSON.parse(e[0].responseText);
      return {
        version: t.data.script.version,
        code_updated_at: formatDate(new Date(1e3 * t.data.updatetime).toISOString())
      };
    }
  }, {
    id: "ai-ask-helper-dist",
    name: "GitHub Releases",
    home: "https://github.com/aiaskhelper/ai-ask-helper-dist/releases",
    updateurl: "https://api.github.com/repos/aiaskhelper/ai-ask-helper-dist/releases/latest",
    getdata: e => (e => {
      const t = JSON.parse(e);
      return {
        version: t.tag_name || t.name || "",
        code_updated_at: formatUpdateDate(t.published_at || t.created_at)
      };
    })(e[0].responseText)
  } ], updateFn = async (e = true) => {
    const t = Cache.get("app", {});
    if (e && !t.checkUpdate) return;
    const a = Cache.get("lastCheckTime");
    if (e && a && Date.now() - a < fa) {
      new Date(a + fa).toLocaleString();
    } else try {
      const t = await Promise.allSettled(ga.map((async e => {
        try {
          e.name, e.updateurl, addLog(`[${e.name}] \u5f00\u59cb\u68c0\u6d4b\u66f4\u65b0`, "info");
          const t = await request(e.updateurl, "GET", {}, {}), a = e.getdata(t);
          return e.name, {
            script: e,
            updateInfo: a
          };
        } catch (t) {
          throw e.name, String(t), addLog(`[${e.name}] \u66f4\u65b0\u68c0\u6d4b\u5931\u8d25: ${String(t)}`, "error"), 
          t;
        }
      })));
      Cache.set("lastCheckTime", Date.now());
      const a = t.filter((e => "fulfilled" === e.status));
      if (0 === a.length) return void (e || msg("\u6240\u6709\u66f4\u65b0\u6e90\u68c0\u6d4b\u5931\u8d25\uff0c\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005\u3002", "error"));
      const n = ((e, t) => {
        const a = [ ...t ].sort(((e, t) => compareVersionOrder(t.updateInfo.version, e.updateInfo.version))), n = a[0];
        if (!n) return {
          hasUpdate: !1,
          latestVersion: e,
          latestUpdatedAt: "",
          sourceNames: [],
          home: "",
          checkedCount: 0
        };
        const r = n.updateInfo.version, s = a.filter((e => 0 === compareVersionOrder(e.updateInfo.version, r)));
        return {
          hasUpdate: compareVersions(e, r),
          latestVersion: r,
          latestUpdatedAt: n.updateInfo.code_updated_at,
          sourceNames: s.map((e => e.script.name)),
          home: n.script.home,
          checkedCount: t.length
        };
      })(re.script.version, a.map((e => e.value)));
      if (n.hasUpdate) {
        return msg(`\n        <div style="line-height: 1.5; font-size: 14px;">\n          <p>\u68c0\u6d4b\u5230\u65b0\u7248\u672c\uff1a<span style="color: red; font-weight: bold;">${n.latestVersion}</span></p>\n          <p>\u5f53\u524d\u7248\u672c\uff1a<span style="color: #555;">${re.script.version}</span></p>\n          <p>\u53ef\u7528\u6765\u6e90\uff1a<strong>${n.sourceNames.join("\u3001")}</strong></p>\n          <p>\u66f4\u65b0\u65f6\u95f4\uff1a<span style="color: #555;">${n.latestUpdatedAt}</span></p>\n          <p><a target="_blank" href="${n.home}" style="color: #007bff; text-decoration: underline;">>> \u70b9\u6211\u5feb\u6377\u8df3\u8f6c\u66f4\u65b0 <<</a></p>\n        </div>`, "warning"), 
        void addLog(`[\u66f4\u65b0\u68c0\u6d4b] \u68c0\u6d4b\u5230\u65b0\u7248\u672c\uff1a${n.latestVersion}\uff0c\u6765\u6e90\uff1a${n.sourceNames.join("\u3001")}`, "warning");
      }
      n.latestVersion, n.checkedCount, addLog(`[\u66f4\u65b0\u68c0\u6d4b] \u5df2\u662f\u6700\u65b0\u7248\uff1a${n.latestVersion}`, "info"), 
      e || msg("\u5f53\u524d\u5df2\u662f\u6700\u65b0\u7248", "success");
    } catch (n) {
      console.error("\u66f4\u65b0\u68c0\u6d4b\u6d41\u7a0b\u5f02\u5e38", n), addLog(`\u66f4\u65b0\u68c0\u6d4b\u5931\u8d25: ${String(n)}`, "error"), e || msg("\u6240\u6709\u66f4\u65b0\u6e90\u5747\u68c0\u6d4b\u5931\u8d25\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u8005\u53cd\u9988\u7ed9\u4f5c\u8005", "error");
    }
  }, ttfDownloadJson = async e => new Promise((t => {
    K({
      method: "GET",
      url: e,
      onload: function(e) {
        try {
          const a = e.responseText, n = JSON.parse(a);
          t(n);
        } catch (a) {
          msg("\u5b57\u4f53\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25", "error"), t(null);
        }
      },
      onerror: function(e) {
        msg("\u5b57\u4f53\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25", "error"), t(null);
      }
    });
  })), randomIndex = (e, t) => Math.floor(t() * e), defaultResolveOptions = e => {
    const resolveTarget = e => {
      (null == e ? void 0 : e.$options) && "function" == typeof e.$options && (e.$options = e.$options());
    };
    return resolveTarget(e), Array.isArray(null == e ? void 0 : e.options) && e.options.forEach((e => {
      e && "object" == typeof e && resolveTarget(e);
    })), e;
  };

  function getPreviewResumeAction(e, t) {
    const a = Math.max(t - 1, 0);
    return e >= a ? {
      shouldFinish: true,
      nextIndex: a
    } : {
      shouldFinish: false,
      nextIndex: e + 1
    };
  }

  function createNextRunToken(e) {
    return e.runToken = (e.runToken || 0) + 1, e.runToken;
  }

  function isRunTokenCurrent(e, t) {
    return e.runToken === t;
  }

  const va = new Set([ "2", "4", "5", "6", "7", "9", "14" ]), answerAsArray = e => Array.isArray(e) ? e : "string" == typeof e && e.trim() ? [ e.trim() ] : [], answerAsTextArray = e => answerAsArray(e).map((e => "string" == typeof e ? e.trim() : String(e ?? "").trim())).filter(Boolean), getLength = e => {
    if ("function" == typeof e) try {
      return getLength(e());
    } catch {
      return 0;
    }
    if (Array.isArray(e)) return e.length;
    if (e && "object" == typeof e && "length" in e) {
      const t = e.length;
      return "number" == typeof t ? t : 0;
    }
    return 0;
  }, getBlankCount$1 = e => {
    var t;
    const a = getLength(e.$options);
    if (a > 0) return a;
    if (Array.isArray(e.options) && e.options.length > 0) return e.options.every((e => "string" == typeof e)) ? e.options.length : 0;
    const n = e.html;
    return n && "object" == typeof n && "function" == typeof n.querySelectorAll ? n.querySelectorAll("textarea").length : "string" == typeof n && (null == (t = n.match(/<textarea\b/gi)) ? void 0 : t.length) || 0;
  }, matchChoiceCandidate = (e, t) => {
    const a = answerAsTextArray(e.answer);
    if (0 === a.length || !Array.isArray(t.options)) return;
    if (!t.options.every((e => "string" == typeof e))) return;
    const n = ((e, t) => {
      const a = e.map(normalizeComparableText);
      if (0 === a.length || a.some((e => "" === e))) return [];
      const n = t.map(normalizeComparableText), findIndexFor = e => {
        const t = n.findIndex((t => t === e));
        if (-1 !== t) return t;
        const a = n.reduce(((t, a, n) => (a.includes(e) && t.push(n), t)), []);
        return 1 === a.length ? a[0] : -1;
      }, r = a.map(((t, a) => {
        const n = findIndexFor(t);
        if (-1 !== n) return n;
        const r = e[a].replace(/^\s*[A-Z]\s*[.\u3001\uff0e)\uff09:\uff1a]\s*/, "");
        if (r === e[a]) return -1;
        const s = normalizeComparableText(r);
        return s ? findIndexFor(s) : -1;
      }));
      return r.includes(-1) ? [] : r;
    })(a, t.options);
    return 0 !== n.length ? {
      kind: "choice",
      indexes: n
    } : void 0;
  }, matchJudgeCandidate = e => {
    const [t] = answerAsArray(e.answer);
    return (e => "\u6b63\u786e" === normalizeJudgeAnswer(e))(t) ? {
      kind: "judge",
      value: "\u6b63\u786e"
    } : (e => "\u9519\u8bef" === normalizeJudgeAnswer(e))(t) ? {
      kind: "judge",
      value: "\u9519\u8bef"
    } : void 0;
  }, matchBlankCandidate = (e, t) => {
    const a = answerAsTextArray(e.answer);
    if (0 === a.length) return;
    const n = getBlankCount$1(t);
    return n > 0 && a.length !== n ? void 0 : {
      kind: "blank",
      values: a
    };
  }, findPlan = (e, t) => {
    if (e.valid) return "0" === t.type || "1" === t.type ? matchChoiceCandidate(e, t) : "3" === t.type ? matchJudgeCandidate(e) : va.has(t.type) || "8" === t.type && getBlankCount$1(t) > 0 ? matchBlankCandidate(e, t) : "11" === t.type ? (e => {
      if (e.answer && "object" == typeof e.answer && !Array.isArray(e.answer)) return {
        kind: "link",
        value: e.answer
      };
    })(e) : "15" === t.type ? ((e, t) => {
      if (!Array.isArray(e.answer) || !Array.isArray(t.options)) return;
      if (0 === t.options.length || e.answer.length !== t.options.length) return;
      const a = [];
      let n = 0;
      for (let r = 0; r < t.options.length; r++) {
        const s = t.options[r];
        if (!s || "object" != typeof s || !("options" in s)) {
          a.push({
            kind: "unsupported",
            reason: "\u5b50\u9898\u65e0\u6cd5\u5339\u914d"
          });
          continue;
        }
        const i = {
          ...e,
          answer: e.answer[r]
        }, o = "3" === s.type ? matchJudgeCandidate(i) : va.has(s.type) ? matchBlankCandidate(i, s) : matchChoiceCandidate(i, s);
        o ? (n++, a.push(o)) : a.push({
          kind: "unsupported",
          reason: "\u5b50\u9898\u65e0\u7b54\u6848"
        });
      }
      return n > 0 ? {
        kind: "reading",
        subPlans: a
      } : void 0;
    })(e, t) : void 0;
  }, matchAnswerCandidates = (e, t) => {
    for (const a of e) {
      const n = findPlan(a, t);
      if (n) return {
        haveAnswer: true,
        source: a,
        fillPlan: n,
        displayAnswers: e
      };
    }
    return ((e, t = "\u7b54\u6848\u6570\u91cf\u6216\u5185\u5bb9\u65e0\u6cd5\u5339\u914d\u5f53\u524d\u9898\u76ee") => ({
      haveAnswer: false,
      displayAnswers: e,
      reason: t
    }))(e);
  }, isBlankAnswer = e => null == e || ("string" == typeof e ? "" === e.trim() : !!Array.isArray(e) && (0 === e.length || e.every(isBlankAnswer))), normalizeAnswerArray = e => e.map((e => Array.isArray(e) ? normalizeAnswerArray(e) : "string" == typeof e ? e.trim() : e)).filter((e => !isBlankAnswer(e))), normalizeAnswerCandidates = e => e.map(((e, t) => {
    const a = findNonAnswerText(null == e ? void 0 : e.answer), n = a ? [] : (e => {
      if (null == e) return [];
      if ("string" == typeof e) {
        return e.trim() || [];
      }
      return Array.isArray(e) ? e.map((e => Array.isArray(e) ? normalizeAnswerArray(e) : "string" == typeof e ? e.trim() : e)).filter((e => Array.isArray(e) || !isBlankAnswer(e))) : e;
    })(null == e ? void 0 : e.answer);
    return {
      source: (null == e ? void 0 : e.form) || (null == e ? void 0 : e.source) || "\u672a\u77e5\u6765\u6e90",
      answer: n,
      valid: !a && !isBlankAnswer(n),
      duration: null == e ? void 0 : e.duration,
      msg: a ? (null == e ? void 0 : e.msg) || `\u63a5\u53e3\u8fd4\u56de\u975e\u7b54\u6848\u6587\u6848\uff1a${a}` : null == e ? void 0 : e.msg,
      needLogin: null == e ? void 0 : e.needLogin,
      raw: (null == e ? void 0 : e.raw) ?? e,
      priority: "number" == typeof (null == e ? void 0 : e.priority) ? e.priority : t
    };
  })), createManualAiDisplayMessage = (e, t, a) => e && t.trim() ? t : a, appendOptionLines = e => e.map(((e, t) => `${String.fromCharCode(65 + t)}\u3001${String(e)}`)).join("\n"), noAnswerMatch = e => ({
    res: [ e ],
    haveAnswer: false
  }), createFallbackResult = (e, t, a = 0, n = "") => {
    const r = {
      action: "mark-no-answer",
      answer: []
    }, s = {
      form: e,
      answer: [],
      msg: t,
      duration: a,
      aiStatus: r.action,
      rawText: n
    };
    return {
      res: s,
      matchResult: noAnswerMatch(s),
      action: r
    };
  }, getBlankCount = e => {
    var t, a;
    const n = e.$options, r = "function" == typeof n ? n() : n;
    return Array.isArray(r) ? r.length : (null == (t = e.html) ? void 0 : t.querySelectorAll) ? e.html.querySelectorAll("textarea").length : "string" == typeof e.html && (null == (a = e.html.match(/<textarea\b/gi)) ? void 0 : a.length) || 0;
  }, getQuestionHtmlText = e => e.html ? "string" == typeof e.html ? e.html : "string" == typeof e.html.outerHTML ? e.html.outerHTML : "string" == typeof e.html.innerHTML ? e.html.innerHTML : "" : "", stripImageTags = e => e.replace(/<\s*img\b[^>]*>/gi, ""), describeImageFailures = e => e.map((e => e.src ? `${e.src}\uff08${e.reason}\uff09` : e.reason)).join("\uff1b"), isTextAnswerUnknownQuestion = e => {
    var t, a;
    if ("8" !== e.type) return false;
    const n = getQuestionHtmlText(e);
    return /<textarea\b/i.test(n) || /ueditor/i.test(n) || Boolean(null == (a = null == (t = e.html) ? void 0 : t.querySelector) ? void 0 : a.call(t, 'textarea, iframe[id^="ueditor_"], iframe[name^="ueditor_"]'));
  }, ya = /<\s*img\b[^>]*>/gi, ba = /\bsrc\s*=\s*["']([^"']+)["']/i, runAskAiFallback = async ({route: e, text: t, type: a, question: n, config: r, adoptionStrategy: s, usePureMatcher: i = false, runScene: o = runAiScene, matchAnswer: l, resolveImages: c = resolveQuestionImages}) => {
    const p = (null == r ? void 0 : r.name) || "AI", u = ((e, t) => hasQuestionImages(t, e))(t, n);
    if (u && !((e, t) => !!(null == e ? void 0 : e.enabled) && true === (e.capabilities || Me)[t])(r, "image")) return createFallbackResult(p, "\u5f53\u524d AI \u914d\u7f6e\u4e0d\u652f\u6301\u56fe\u7247\u9898\u76ee\uff0c\u8bf7\u5728 AI \u8bbe\u7f6e\u4e2d\u9009\u62e9\u56fe\u7247\u9898\u6a21\u578b");
    if (hasUnsupportedMedia(stripImageTags(t)) || hasUnsupportedMedia(stripImageTags(getQuestionHtmlText(n)))) return createFallbackResult(p, getAiErrorMessage(createAiError("AI_IMAGE_UNSUPPORTED")));
    let d = [], m = [];
    if (u) {
      try {
        const e = await c({
          ...n,
          question: `${n.question}\n${t}`
        });
        d = (null == e ? void 0 : e.parts) || [], m = (null == e ? void 0 : e.failures) || [];
      } catch (k) {
        m = [ {
          src: "",
          reason: (null == k ? void 0 : k.message) || "\u56fe\u7247\u83b7\u53d6\u5931\u8d25"
        } ];
      }
      if (!d.length && !(e => stripImageTags(e).replace(/<[^>]*>/g, " ").replace(/\[[^\]]*\]/g, " ").replace(/\s+/g, "").length > 0)(t)) return createFallbackResult(p, `\u9898\u76ee\u56fe\u7247\u83b7\u53d6\u5931\u8d25\uff1a${describeImageFailures(m)}`);
    }
    const h = m.length ? `\u90e8\u5206\u9898\u76ee\u56fe\u7247\u672a\u53d6\u5230\uff1a${describeImageFailures(m)}` : "", f = u ? ((e, t) => {
      const a = t.parts || [], n = t.failures || [];
      if (!a.length && !n.length) return {
        text: e.replace(ya, ""),
        parts: [],
        markers: new Map
      };
      const r = new Set(n.map((e => resolveImageSrc(e.src)))), s = new Map;
      a.forEach((e => {
        e.url && s.set(resolveImageSrc(e.url), e);
      }));
      const i = [], o = new Map, l = e.replace(ya, (e => {
        var t;
        const a = resolveImageSrc((null == (t = e.match(ba)) ? void 0 : t[1]) || "");
        if (!a) return "";
        if (o.has(a)) return `[\u56fe${o.get(a)}]`;
        const n = s.get(a);
        return n ? (s.delete(a), i.push(n), o.set(a, i.length), `[\u56fe${i.length}]`) : r.has(a) ? "[\u56fe\u7247\u83b7\u53d6\u5931\u8d25]" : "";
      })), c = a.filter((e => !i.includes(e)));
      if (!c.length) return {
        text: l,
        parts: i,
        markers: o
      };
      const p = c.map(((e, t) => `[\u56fe${i.length + t + 1}]`)).join("");
      return i.push(...c), {
        text: `${l}\n\uff08\u53e6\u9644\u672a\u5b9a\u4f4d\u7684\u9898\u76ee\u56fe\u7247\uff1a${p}\uff09`,
        parts: i,
        markers: o
      };
    })(t, {
      parts: d,
      failures: m
    }) : {
      text: t,
      parts: d,
      markers: new Map
    }, g = u ? ((e, t) => {
      if (Array.isArray(e) && e.every((e => "string" == typeof e))) return e.map((e => e.replace(ya, (e => {
        var a;
        const n = resolveImageSrc((null == (a = e.match(ba)) ? void 0 : a[1]) || ""), r = t.get(n);
        return r ? `[\u56fe${r}]` : "";
      }))));
    })(n.options, f.markers) : void 0, v = ((e, t) => "8" === e && isTextAnswerUnknownQuestion(t) ? "4" : e)(a, n), y = await o("ask", r, ((e, t) => t.length ? [ {
      type: "text",
      text: e
    }, ...t ] : e)(f.text, f.parts), {
      questionType: v,
      stream: false,
      route: e
    });
    if (!y.success) {
      const e = [ y.displayMessage || "AI \u672a\u8fd4\u56de\u53ef\u7528\u7b54\u6848", h ].filter(Boolean).join("\uff1b");
      return createFallbackResult(p, e, y.duration, y.text);
    }
    const b = ((e, t, a) => t && Array.isArray(a) && Array.isArray(e.answer) ? {
      ...e,
      answer: e.answer.map((e => {
        if ("string" != typeof e) return e;
        const n = t.indexOf(e);
        return n >= 0 ? a[n] : e;
      }))
    } : e)(parseAiAnswer(y.text, {
      type: v,
      options: g || n.options || [],
      blankCount: getBlankCount(n)
    }), g, n.options), w = ((e, t) => "preview" === e ? t.valid ? {
      action: "preview",
      answer: t.answer
    } : {
      action: "mark-no-answer",
      answer: []
    } : "conservative" === e ? t.valid ? {
      action: "fill",
      answer: t.answer
    } : {
      action: "mark-no-answer",
      answer: []
    } : t.answer.length > 0 ? {
      action: "fill",
      answer: t.answer
    } : {
      action: "mark-no-answer",
      answer: []
    })(s, b), x = {
      form: p,
      answer: b.answer,
      msg: [ b.error ? getAiErrorMessage(b.error) : "", h ].filter(Boolean).join("\uff1b"),
      duration: y.duration,
      aiStatus: w.action,
      rawText: y.text
    };
    if ("fill" !== w.action) return {
      res: x,
      matchResult: noAnswerMatch(x),
      action: w
    };
    try {
      return {
        res: x,
        matchResult: i || !l ? matchAnswerCandidates(normalizeAnswerCandidates([ x ]), {
          ...n,
          type: v
        }) : await l([ x ], n, !1),
        action: w
      };
    } catch (k) {
      return createFallbackResult(p, "AI \u7b54\u6848\u586b\u5145\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u6838\u5bf9\u540e\u91cd\u8bd5", y.duration, y.text);
    }
  }, getErrorMessage = (e, t) => e instanceof Error && e.message ? `${t}\uff1a${e.message}` : "string" == typeof e && e ? `${t}\uff1a${e}` : t, runQuestionPipelineFromSources = async ({task: e, question: t, runToken: a, isCurrentRun: n, askAiEnabled: r, randomAnswerEnabled: s, sources: i}) => {
    if ("confirm-ai-preview" === e.kind) return ((e, t) => {
      var a, n;
      const r = {
        form: "AI \u9884\u89c8",
        answer: (null == (a = e.preview) ? void 0 : a.answer) || [],
        duration: 0,
        msg: "",
        aiStatus: "confirmed",
        rawText: (null == (n = e.preview) ? void 0 : n.rawText) || ""
      }, s = normalizeAnswerCandidates([ r ]), i = matchAnswerCandidates(s, t);
      return i.haveAnswer && i.source && i.fillPlan ? {
        status: "answered",
        displayAnswers: s,
        adoptedSource: i.source,
        fillPlan: i.fillPlan
      } : {
        status: "failed",
        displayAnswers: s,
        failureReason: "AI \u5efa\u8bae\u65e0\u6cd5\u5339\u914d\u5f53\u524d\u9898\u76ee"
      };
    })(e, t);
    const o = "manual-ai" === e.kind, l = "random" === e.kind;
    return (async ({question: e, runToken: t, isCurrentRun: a, askAiEnabled: n, randomAnswerEnabled: r, getCacheAnswer: s, getRemoteAnswers: i, getAiAnswer: o, getRandomFillPlan: l}) => {
      var c, p, u, d;
      let m = "", h = "", f = [];
      try {
        const n = await s(e);
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        f = normalizeAnswerCandidates([ n ]);
        const r = matchAnswerCandidates(f, e);
        if (r.haveAnswer && r.source && r.fillPlan) return {
          status: "answered",
          displayAnswers: f,
          adoptedSource: r.source,
          fillPlan: r.fillPlan
        };
      } catch (b) {
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        m = getErrorMessage(b, "\u7f13\u5b58\u7b54\u6848\u8bfb\u53d6\u5931\u8d25");
      }
      let g = [];
      try {
        const n = await i(e);
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        g = normalizeAnswerCandidates(n);
        const r = matchAnswerCandidates(g, e);
        if (r.haveAnswer && r.source && r.fillPlan) return {
          status: "answered",
          displayAnswers: g,
          adoptedSource: r.source,
          fillPlan: r.fillPlan
        };
        h = (null == (c = g.find((e => e.msg))) ? void 0 : c.msg) || h;
      } catch (b) {
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        m = getErrorMessage(b, "\u8fdc\u7aef\u9898\u5e93\u8bf7\u6c42\u5931\u8d25");
      }
      let v = g.length ? g : f;
      if (n && o) try {
        const n = await o(e);
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        if ((e => {
          var t;
          return !!e && "object" == typeof e && "preview" === (null == (t = e.action) ? void 0 : t.action);
        })(n)) return {
          status: "preview",
          displayAnswers: v,
          preview: {
            answer: (null == (p = n.res) ? void 0 : p.answer) || [],
            rawText: (null == (u = n.res) ? void 0 : u.rawText) || "",
            reason: "\u7b49\u5f85\u7528\u6237\u786e\u8ba4 AI \u5efa\u8bae"
          }
        };
        const r = normalizeAnswerCandidates([ (y = n, y && "object" == typeof y && "res" in y ? y.res : y) ]);
        v = [ ...v, ...r ];
        const s = matchAnswerCandidates(r, e);
        if (s.haveAnswer && s.source && s.fillPlan) return {
          status: "answered",
          displayAnswers: v,
          adoptedSource: s.source,
          fillPlan: s.fillPlan
        };
        h = (null == (d = r.find((e => e.msg))) ? void 0 : d.msg) || h;
      } catch (b) {
        if (!a(t)) return {
          status: "stale",
          displayAnswers: []
        };
        m = getErrorMessage(b, "AI \u7b54\u6848\u83b7\u53d6\u5931\u8d25");
      }
      var y;
      if (r && l) {
        const t = l(e);
        if (t) return {
          status: "no-answer",
          displayAnswers: v,
          adoptedSource: {
            source: "\u968f\u673a\u7b54\u9898",
            answer: [],
            valid: true,
            priority: 999
          },
          fillPlan: t,
          failureReason: "\u968f\u673a\u7b54\u9898\uff0c\u4e0d\u4ee3\u8868\u6b63\u786e\u7b54\u6848"
        };
      }
      return {
        status: m && !h ? "failed" : "no-answer",
        displayAnswers: v,
        failureReason: h || m || "\u672a\u627e\u5230\u53ef\u5339\u914d\u7b54\u6848"
      };
    })({
      question: t,
      runToken: a,
      isCurrentRun: n,
      askAiEnabled: !!o || r,
      randomAnswerEnabled: !!l || s,
      getCacheAnswer: o || l ? async () => ({
        form: "\u672c\u5730\u7f13\u5b58",
        answer: "",
        duration: 0,
        msg: "\u624b\u52a8\u4efb\u52a1\u8df3\u8fc7\u7f13\u5b58"
      }) : i.getCacheAnswer,
      getRemoteAnswers: o || l ? async () => [] : i.getRemoteAnswers,
      getAiAnswer: l ? void 0 : i.getAiAnswer,
      getRandomFillPlan: i.getRandomFillPlan
    });
  };

  let wa = 0;

  const createQuestionTaskId = (e, t, a, n) => `${e}:${t}:${a}:${n}`, createQuestionTask = ({kind: e, index: t, runToken: a, preview: n, now: r = Date.now, nextSeq: s = () => ++wa}) => {
    const i = s();
    return {
      id: createQuestionTaskId(e, t, a, i),
      kind: e,
      index: t,
      runToken: a,
      createdAt: r(),
      preview: n
    };
  }, phaseToLegacyStatus = e => "done" === e ? 1 : "no-answer" === e || "failed" === e ? 2 : 0, finishWithPhase = (e, t, a, n) => (e.setPhase(t.index, a, t, n), 
  {
    phase: a,
    reason: n
  }), runQuestionTask = async (e, t) => {
    if (!t.isCurrentRun(e.runToken)) return {
      phase: "cancelled",
      reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
    };
    const a = t.getQuestion(e.index);
    if (!a) return finishWithPhase(t, e, "failed", "\u9898\u76ee\u4e0d\u5b58\u5728");
    if (t.setPhase(e.index, "preparing", e), t.setLoadingText("\u52a0\u8f7d\u4e2d...."), 
    !t.isCurrentRun(e.runToken)) return {
      phase: "cancelled",
      reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
    };
    t.setPhase(e.index, "searching", e);
    const n = await t.runPipeline(e, a);
    if ("stale" === n.status || !t.isCurrentRun(e.runToken)) return {
      phase: "cancelled",
      reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
    };
    const r = (e => e.displayAnswers.map((e => e.raw || e)))(n);
    if ("preview" === n.status && n.preview) return t.publishQuestion(e.index, {
      answer: r,
      phase: "preview",
      status: 0,
      taskId: e.id
    }), t.publishPreview(e.index, n.preview), t.setPhase(e.index, "preview", e), t.stopAutoRun(), 
    {
      phase: "preview",
      reason: n.preview.reason
    };
    const s = n.adoptedSource && n.fillPlan ? createLegacyMatchResult({
      haveAnswer: true,
      source: n.adoptedSource,
      fillPlan: n.fillPlan,
      displayAnswers: n.displayAnswers
    }) : createLegacyMatchResult({
      haveAnswer: false,
      displayAnswers: n.displayAnswers
    });
    if (n.fillPlan && t.setPhase(e.index, "matched", e), t.publishQuestion(e.index, {
      answer: r,
      form: s.form,
      error: n.failureReason || "",
      phase: "published",
      status: 0,
      taskId: e.id
    }), t.setPhase(e.index, "published", e), await t.waitForRender(), !t.isCurrentRun(e.runToken)) return {
      phase: "cancelled",
      reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
    };
    if (t.setPhase(e.index, "rendering", e), n.fillPlan) {
      t.setPhase(e.index, "filling", e);
      const r = await t.fillAnswer(n.fillPlan, a);
      if (!t.isCurrentRun(e.runToken)) return {
        phase: "cancelled",
        reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
      };
      if (!r.success) return finishWithPhase(t, e, "failed", r.reason || "\u7b54\u6848\u586b\u5145\u5931\u8d25");
    }
    return "answered" === n.status ? finishWithPhase(t, e, "done") : "failed" === n.status ? finishWithPhase(t, e, "failed", n.failureReason || "\u7b54\u6848\u83b7\u53d6\u5931\u8d25") : finishWithPhase(t, e, "no-answer", n.failureReason || "\u672a\u627e\u5230\u53ef\u5339\u914d\u7b54\u6848");
  };

  function getCachedNoticeResult(e, t = Date.now(), a = {}) {
    return function(e, t = Date.now(), a = {}) {
      if (a.force) return true;
      if (!e.noticeLoaded) return true;
      const n = a.cacheTtl ?? 3e5;
      return t - e.noticeFetchedAt >= n;
    }(e, t, a) ? null : {
      success: true,
      notice: e.notice
    };
  }

  const xa = Cache.get("user", {}), ka = pinia.defineStore("user", {
    state: () => ({
      user: xa.user || null,
      notice: "",
      noticeLoaded: false,
      noticeFetchedAt: 0,
      apiKey: xa.api_key || "",
      stats: {
        course_count: 0,
        chapter_count: 0,
        question_count: 0
      },
      afdianUrl: xa.afdian_url || "",
      isLoggedIn: !!xa.user,
      loginTime: xa.login_time || 0
    }),
    getters: {
      username: e => {
        var t;
        return (null == (t = e.user) ? void 0 : t.username) || "\u672a\u767b\u5f55";
      },
      nickname: e => {
        var t;
        return (null == (t = e.user) ? void 0 : t.nickname) || "\u6e38\u5ba2";
      },
      avatar: () => "",
      score: e => {
        var t;
        return (null == (t = e.user) ? void 0 : t.score) || 0;
      },
      level: e => {
        var t;
        return (null == (t = e.user) ? void 0 : t.level) || 0;
      },
      isVip: e => {
        var t;
        return ((null == (t = e.user) ? void 0 : t.level) || 0) > 0;
      }
    },
    actions: {
      async loginByPassword(e, t) {
        try {
          const a = apiUrl("user/login"), [n] = await requestApi(a, "POST", {
            username: e,
            password: t,
            login_type: "password"
          }), r = JSON.parse(n.responseText);
          return 200 === r.code ? (this.user = r.data.user, this.apiKey = r.data.api_key, 
          this.afdianUrl = r.data.afdian_url || "", this.isLoggedIn = !0, this.loginTime = Date.now(), 
          this.saveToCache(), await this.fetchUserInfo(), r.data, {
            success: !0,
            message: "\u767b\u5f55\u6210\u529f"
          }) : {
            success: !1,
            message: r.message || "\u767b\u5f55\u5931\u8d25"
          };
        } catch (a) {
          return {
            success: false,
            message: a.message || "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
          };
        }
      },
      async loginByApiKey(e) {
        try {
          const t = apiUrl("user/login"), [a] = await requestApi(t, "POST", {
            api_key: e,
            login_type: "apikey"
          }), n = JSON.parse(a.responseText);
          return 200 === n.code ? (this.user = n.data.user, this.apiKey = n.data.api_key, 
          this.afdianUrl = n.data.afdian_url || "", this.isLoggedIn = !0, this.loginTime = Date.now(), 
          this.saveToCache(), await this.fetchUserInfo(), n.data, {
            success: !0,
            message: "\u767b\u5f55\u6210\u529f"
          }) : {
            success: !1,
            message: n.message || "API Key \u767b\u5f55\u5931\u8d25"
          };
        } catch (t) {
          return {
            success: false,
            message: t.message || "API Key \u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
          };
        }
      },
      async register(e) {
        try {
          const t = apiUrl("user/register"), [a] = await requestApi(t, "POST", e), n = JSON.parse(a.responseText);
          return 200 === n.code ? (this.user = n.data.user, this.apiKey = n.data.api_key, 
          this.afdianUrl = n.data.afdian_url || "", this.isLoggedIn = !0, this.loginTime = Date.now(), 
          this.saveToCache(), n.data, {
            success: !0,
            message: "\u6ce8\u518c\u6210\u529f"
          }) : {
            success: !1,
            message: n.message || "\u6ce8\u518c\u5931\u8d25"
          };
        } catch (t) {
          return {
            success: false,
            message: t.message || "\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
          };
        }
      },
      async fetchUserInfo() {
        if (this.isLoggedIn) try {
          const e = apiUrl("user/info"), [t] = await requestApi(e, "GET", void 0, {
            Authorization: `Bearer ${this.apiKey}`
          }), a = JSON.parse(t.responseText);
          200 === a.code && (this.user = a.data.user, this.stats = a.data.stats, this.afdianUrl = a.data.afdian_url || "", 
          this.saveToCache(), a.data);
        } catch (e) {}
      },
      async logout() {
        try {
          if (this.apiKey) {
            const e = apiUrl("user/logout");
            await requestApi(e, "POST", void 0, {
              Authorization: `Bearer ${this.apiKey}`
            });
          }
        } catch (e) {} finally {
          this.user = null, this.apiKey = "", this.stats = {
            course_count: 0,
            chapter_count: 0,
            question_count: 0
          }, this.afdianUrl = "", this.isLoggedIn = false, this.loginTime = 0, Cache.remove("user");
        }
      },
      async refreshApiKey() {
        try {
          const e = apiUrl("user/refresh-apikey"), [t] = await requestApi(e, "POST", void 0, {
            Authorization: `Bearer ${this.apiKey}`
          }), a = JSON.parse(t.responseText);
          return 200 === a.code ? (this.apiKey = a.data.api_key, this.saveToCache(), a.data.api_key, 
          {
            success: !0,
            message: "API Key \u5237\u65b0\u6210\u529f",
            api_key: a.data.api_key
          }) : {
            success: !1,
            message: a.message || "API Key \u5237\u65b0\u5931\u8d25"
          };
        } catch (e) {
          return {
            success: false,
            message: e.message || "API Key \u5237\u65b0\u5931\u8d25"
          };
        }
      },
      async updateUserInfo(e) {
        try {
          const t = apiUrl("user/update"), [a] = await requestApi(t, "POST", e, {
            Authorization: `Bearer ${this.apiKey}`
          }), n = JSON.parse(a.responseText);
          return 200 === n.code ? (this.user && (this.user = {
            ...this.user,
            ...n.data.user
          }), this.saveToCache(), n.data, {
            success: !0,
            message: "\u66f4\u65b0\u6210\u529f"
          }) : {
            success: !1,
            message: n.message || "\u66f4\u65b0\u5931\u8d25"
          };
        } catch (t) {
          return {
            success: false,
            message: t.message || "\u66f4\u65b0\u5931\u8d25"
          };
        }
      },
      async changePassword(e, t) {
        try {
          const a = apiUrl("user/change-password"), [n] = await requestApi(a, "POST", {
            old_password: e,
            new_password: t
          }, {
            Authorization: `Bearer ${this.apiKey}`
          }), r = JSON.parse(n.responseText);
          return 200 === r.code ? {
            success: !0,
            message: "\u5bc6\u7801\u4fee\u6539\u6210\u529f"
          } : {
            success: !1,
            message: r.message || "\u5bc6\u7801\u4fee\u6539\u5931\u8d25"
          };
        } catch (a) {
          return {
            success: false,
            message: a.message || "\u5bc6\u7801\u4fee\u6539\u5931\u8d25"
          };
        }
      },
      async fuzzySearchQuestion(e) {
        var t;
        try {
          const t = apiUrl("question/fuzzy"), a = {
            question: e.question,
            type: e.type ?? 8,
            options: e.options ?? []
          }, [n] = await requestApi(t, "POST", a), r = JSON.parse(n.responseText), s = 401 === r.code || 401 === n.status;
          return 200 === r.code ? {
            success: !0,
            message: r.message || "success",
            data: r.data || []
          } : s ? {
            success: !1,
            message: r.message || "\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u5b98\u65b9\u9898\u5e93\uff0c\u8bf7\u5148\u767b\u5f55",
            data: [],
            needLogin: !0
          } : {
            success: !1,
            message: r.message || "\u5b98\u65b9\u9898\u5e93\u641c\u7d22\u5931\u8d25",
            data: []
          };
        } catch (a) {
          const e = 401 === (null == a ? void 0 : a.status) || 401 === (null == (t = null == a ? void 0 : a.response) ? void 0 : t.status);
          return {
            success: false,
            message: e ? "\u767b\u5f55\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u5b98\u65b9\u9898\u5e93\uff0c\u8bf7\u5148\u767b\u5f55" : (null == a ? void 0 : a.message) || "\u5b98\u65b9\u9898\u5e93\u641c\u7d22\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            data: [],
            needLogin: e
          };
        }
      },
      async fetchNotice(e = {}) {
        var t;
        const a = getCachedNoticeResult(this, Date.now(), e);
        if (a) return a;
        try {
          const [e] = await requestApi(apiUrl("aiAskNotice"), "GET"), a = JSON.parse(e.responseText), n = (null == (t = null == a ? void 0 : a.data) ? void 0 : t.notice) ?? (null == a ? void 0 : a.data);
          return 200 === a.code ? (this.notice = n || "", {
            success: !0,
            notice: this.notice,
            message: a.message
          }) : {
            success: !1,
            message: a.message || "\u516c\u544a\u83b7\u53d6\u5931\u8d25"
          };
        } catch (n) {
          return this.notice ? {
            success: true,
            notice: this.notice
          } : {
            success: false,
            message: (null == n ? void 0 : n.message) || "\u516c\u544a\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"
          };
        } finally {
          this.noticeLoaded = true, this.noticeFetchedAt = Date.now();
        }
      },
      saveToCache() {
        const e = {
          user: this.user || void 0,
          api_key: this.apiKey || void 0,
          login_time: this.loginTime || void 0,
          afdian_url: this.afdianUrl || void 0
        };
        Cache.set("user", e);
      },
      loadFromCache() {
        const e = Cache.get("user", {});
        e.user && (this.user = e.user, this.apiKey = e.api_key || "", this.loginTime = e.login_time || 0, 
        this.afdianUrl = e.afdian_url || "", this.isLoggedIn = true);
      }
    }
  }), qa = {
    get: e => Cache.get(e),
    set: (e, t) => Cache.set(e, t)
  };

  const _a = pinia.defineStore("ai", {
    state: () => ({
      aiMsg: "",
      aiLoading: false,
      settings: loadAiSettingsFrom(qa, He, getApp),
      catalog: {
        seq: 0,
        fetchedAt: 0,
        channels: He
      },
      catalogLoading: false,
      connectionTestingId: "",
      connectionMessage: "",
      connectionTestingIds: {},
      connectionMessages: {},
      connectionRequestTokens: {},
      latestConnectionRequestToken: ""
    }),
    actions: {
      selectTargetById(e) {
        if (this.settings.instances.find((t => t.channelId === e))) return resolveAiTarget({
          ...this.settings,
          defaultChannelId: e,
          sceneOverrides: {
            enabled: false
          }
        }, this.catalog, "search", "text");
      },
      currentAiMd() {
        return createSafeMarkdownHtml(this.aiMsg);
      },
      resetAi() {
        this.aiMsg = "", this.aiLoading = false;
      },
      saveSettings() {
        this.settings = ((e, t) => {
          const a = normalizeAiSettingsV2(t) ?? t;
          return e.set(De, a), a;
        })(qa, this.settings);
      },
      async loadCatalog() {
        if (!this.catalogLoading) {
          this.catalogLoading = true;
          try {
            this.catalog = await fetchCatalog({
              cacheGet: e => Cache.get(e),
              cacheSet: (e, t) => Cache.set(e, t),
              now: () => Date.now(),
              request: async () => {
                const e = await createAiTransportRequest({
                  method: "GET",
                  url: `${xe}/ai/channels`,
                  headers: {
                    Accept: "application/json"
                  },
                  timeout: 15e3,
                  responseType: "json"
                }).promise;
                return "string" == typeof e.response ? JSON.parse(e.response) : e.response ?? JSON.parse(e.responseText || "{}");
              }
            });
          } finally {
            this.catalogLoading = false;
          }
        }
      },
      selectTarget(e, t = "text") {
        return resolveAiTarget(this.settings, this.catalog, e, t);
      },
      routeContextFor(e) {
        if (!this.settings.customChannels.some((t => t.id === e.channel.id))) return {
          channel: e.channel,
          apiKey: ka().apiKey || "",
          transport: this.settings.transport,
          modelId: e.instance.modelId
        };
      },
      catalogForDisplay() {
        return this.catalog.channels.filter((e => "active" === e.status)).sort(((e, t) => e.recommended !== t.recommended ? e.recommended ? -1 : 1 : e.order - t.order));
      },
      updateCredential(e, t) {
        const a = this.settings.instances.find((t => t.channelId === e));
        a ? a.credential = {
          ...t,
          updatedAt: Date.now()
        } : this.settings.instances.push({
          channelId: e,
          credential: {
            ...t,
            updatedAt: Date.now()
          },
          enabled: true
        }), this.saveSettings();
      },
      addChannel(e) {
        this.settings.instances.some((t => t.channelId === e)) || (this.settings.instances.push({
          channelId: e,
          enabled: true
        }), this.settings.defaultChannelId || (this.settings.defaultChannelId = e), this.saveSettings());
      },
      removeInstance(e) {
        var t;
        this.settings.instances = this.settings.instances.filter((t => t.channelId !== e)), 
        this.settings.customChannels = this.settings.customChannels.filter((t => t.id !== e)), 
        this.settings.defaultChannelId === e && (this.settings.defaultChannelId = (null == (t = this.settings.instances[0]) ? void 0 : t.channelId) || ""), 
        this.settings.defaultVisionChannelId === e && (this.settings.defaultVisionChannelId = ""), 
        delete this.connectionTestingIds[e], delete this.connectionMessages[e], delete this.connectionRequestTokens[e], 
        this.connectionTestingId === e && (this.connectionTestingId = ""), this.saveSettings();
      },
      async testConfig(e) {
        var t;
        const a = null == (t = this.selectTargetById(e)) ? void 0 : t.config, n = `${Date.now()}-${Math.random()}`;
        this.connectionTestingId = e, this.connectionMessage = "", this.connectionTestingIds[e] = true, 
        this.connectionMessages[e] = "", this.connectionRequestTokens[e] = n, this.latestConnectionRequestToken = n;
        const updateConnectionMessage = t => {
          const a = t.success ? `\u8fde\u63a5\u6210\u529f\uff0c\u8017\u65f6 ${t.duration}ms` : t.displayMessage || "\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u914d\u7f6e";
          this.connectionRequestTokens[e] === n && (this.connectionMessages[e] = a), this.latestConnectionRequestToken === n && (this.connectionMessage = a);
        };
        try {
          const e = await (async e => runAiScene("search", e, "\u8bf7\u53ea\u56de\u590d\u201c\u8fde\u63a5\u6210\u529f\u201d", {
            stream: !1
          }))(a);
          return updateConnectionMessage(e), e;
        } catch (r) {
          const e = {
            success: false,
            text: "",
            duration: 0,
            displayMessage: "\u8fde\u63a5\u6d4b\u8bd5\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"
          };
          return updateConnectionMessage(e), e;
        } finally {
          this.connectionRequestTokens[e] === n && (delete this.connectionTestingIds[e], delete this.connectionRequestTokens[e]), 
          this.latestConnectionRequestToken === n && (this.connectionTestingId = "", this.latestConnectionRequestToken = "");
        }
      }
    }
  }), waitForAnswerRender = async () => {
    await vue.nextTick(), await function(e = {}, t = 120) {
      var a;
      const n = e.requestAnimationFrame ?? (null == (a = globalThis.requestAnimationFrame) ? void 0 : a.bind(globalThis)), r = e.setTimeout ?? globalThis.setTimeout.bind(globalThis), s = e.clearTimeout ?? globalThis.clearTimeout.bind(globalThis);
      return new Promise((e => {
        let a, i = false;
        const finish = () => {
          i || (i = true, e());
        };
        a = r(finish, t), n && n((() => {
          void 0 !== a && s(a), finish();
        }));
      }));
    }();
  }, Aa = pinia.defineStore("ask", {
    state: () => ({
      questionList: [],
      questionInx: 0,
      inx: 0,
      Interval: 0,
      start: false,
      skipFinish: Cache.get("skipFinish", false),
      autoNext: Cache.get("autoNext", false),
      autoAnswer: Cache.get("autoAnswer", true),
      freeFirst: true,
      randomAnswer: Cache.get("randomAnswer", false),
      lock: false,
      runToken: 0,
      formMap: {},
      type: "cx",
      loading: false,
      loadingText: "\u52a0\u8f7d\u4e2d....",
      loadingRunToken: 0,
      aiLoadingIndex: -1,
      aiPreview: null,
      aiFailureMap: {},
      restartPending: false,
      tips: "\u672c\u811a\u672c\u4ec5\u4f9b\u5b66\u4e60\u7814\u7a76\uff0c\u8bf7\u52ff\u7528\u4e8e\u975e\u6cd5\u7528\u9014",
      delay: Cache.get("delay", 1e3),
      minDelay: Cache.get("minDelay", 0),
      optionDelay: Cache.get("optionDelay", 0),
      optionMinDelay: 0,
      saveQuestionData: []
    }),
    actions: {
      addQuestion(e) {
        this.questionList.push({
          ...e,
          answer: [],
          status: 0,
          phase: "idle",
          error: "",
          taskId: "",
          aiMsg: ""
        });
      },
      clearQuestion() {
        this.questionList = [];
      },
      getQuestion() {
        return this.questionList[this.questionInx];
      },
      nextQuestion() {
        if (this.questionInx === this.questionList.length - 1) return clearInterval(this.Interval), 
        void (this.start = false);
        this.questionInx++;
      },
      prevQuestion() {
        0 !== this.questionInx && this.questionInx--;
      },
      toQuestion(e) {
        this.questionInx = e;
        let t = this.questionList[e];
        this.rule.toquestion && this.rule.toquestion(e);
        try {
          if (t.html.scrollIntoView({
            block: "center"
          }), W.self !== W.top) {
            let a = document.querySelector(".el-dialog");
            if (a) {
              a.style.transform = "none";
              let n = t.html.getBoundingClientRect();
              a.style.top = n.top - 700 + "px", 0 === e && (a.style.top = "0px"), e === this.questionList.length - 1 && document.documentElement.scrollHeight > 2e3 && (a.style.top = n.top - 900 + "px");
            }
          }
          t.html.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.15)", setTimeout((() => {
            t.html.style.boxShadow = "";
          }), 500);
        } catch (a) {}
      },
      setQuestionStatus(e, t) {
        this.questionList[e] && null != this.questionList[e].status && (this.questionList[e].status = t);
      },
      async toggleStart() {
        const e = getAppStore();
        let t = 0;
        try {
          const a = await async function(e, t) {
            const a = function(e) {
              return e.lock ? "noop" : e.start ? "stop" : "start";
            }(e);
            if ("noop" === a) return a;
            if ("stop" === a) return e.start = !1, a;
            e.start = !0, e.lock = !0;
            try {
              return await t(), e.start ? a : "stop";
            } finally {
              e.start = !1, e.lock = !1;
            }
          }(this, (async () => {
            var a;
            const n = createNextRunToken(this);
            t = n;
            for (let t = this.questionInx; t < this.questionList.length && this.start; t++) {
              if (this.skipFinish && 1 === this.questionList[t].status) continue;
              this.questionInx = t;
              let r = this.questionList[t];
              if ("8" !== r.type || isTextAnswerUnknownQuestion(r)) {
                if ((null == (a = this.rule) ? void 0 : a.answerDelay) && (await sleep(this.rule.answerDelay), 
                !isRunTokenCurrent(this, n))) {
                  this.start = !1;
                  break;
                }
                if (await this.reAnswer(t, n), !isRunTokenCurrent(this, n)) {
                  this.start = !1;
                  break;
                }
                if (!this.start) break;
                if (e.app.alert = `\u5f53\u524d\u8fdb\u5ea6:${t + 1}/${this.questionList.length}`, 
                await sleep(this.delay + 1e3 * Math.random()), !isRunTokenCurrent(this, n)) {
                  this.start = !1;
                  break;
                }
                this.rule.toquestion && this.rule.toquestion(this.questionInx + 1), this.autoNext && this.rule.next && this.rule.next();
              } else this.setQuestionStatus(t, 2);
            }
          }));
          if (this.restartPending && "noop" !== a) return this.restartPending = !1, this.loadingRunToken === t && (this.loading = !1), 
          void (await this.toggleStart());
          if ("start" !== a) return;
          this.finishRun(e);
        } catch (a) {
          e.app.alert = "\u7b54\u9898\u4e2d\u65ad\uff0c\u8bf7\u91cd\u8bd5";
        } finally {
          if (this.restartPending && !this.lock) return this.restartPending = false, this.loadingRunToken === t && (this.loading = false), 
          void (await this.toggleStart());
          this.lock || this.start || this.loadingRunToken !== t || (this.loading = false);
        }
      },
      finishRun(e = getAppStore()) {
        this.autoNext && this.rule.finish && this.rule.finish({
          question: this.questionList
        }), this.formMap = {}, this.questionList.forEach((t => {
          var a;
          if (null == (a = t.form) ? void 0 : a.form) {
            let e = t.form.form;
            e && (this.formMap[e] = this.formMap[e] ? this.formMap[e] + 1 : 1);
          } else this.formMap["\u65e0\u7b54\u6848"] = this.formMap["\u65e0\u7b54\u6848"] ? this.formMap["\u65e0\u7b54\u6848"] + 1 : 1;
          e.app.alert = "\u7b54\u9898\u5b8c\u6210~";
        }));
      },
      setQuestionPhase(e, t, a, n = "") {
        const r = this.questionList[e];
        r && (r.phase = t, r.status = phaseToLegacyStatus(t), r.error = n, a && (r.taskId = a.id), 
        n ? this.aiFailureMap[e] = n : "failed" !== t && "no-answer" !== t && delete this.aiFailureMap[e]);
      },
      publishQuestionTaskResult(e, t) {
        const a = this.questionList[e];
        a && (t.answer && (a.answer = t.answer), "form" in t && (a.form = t.form), t.phase && (a.phase = t.phase), 
        void 0 !== t.status && (a.status = t.status), t.taskId && (a.taskId = t.taskId), 
        a.error = t.error || "", t.error && (this.aiFailureMap[e] = t.error));
      },
      publishQuestionTaskPreview(e, t) {
        this.aiPreview = t ? {
          index: e,
          answer: t.answer,
          rawText: t.rawText,
          reason: t.reason
        } : null;
      },
      createQuestionRunnerDeps(e) {
        return getAppStore(), {
          getQuestion: e => this.questionList[e],
          isCurrentRun: e => isRunTokenCurrent(this, e),
          runPipeline: (t, a) => runQuestionPipelineFromSources({
            task: t,
            question: a,
            runToken: e,
            isCurrentRun: e => isRunTokenCurrent(this, e),
            askAiEnabled: _a().settings.enabledForAsk,
            randomAnswerEnabled: this.randomAnswer,
            sources: {
              getCacheAnswer: e => Answer.getCacheAnswer(e),
              getRemoteAnswers: e => (this.loadingText = "\u6b63\u5728\u4ece\u63a5\u53e3\u4e2d\u83b7\u53d6\u7b54\u6848", 
              Answer.getAnswersFree(e)),
              getAiAnswer: async e => {
                this.loadingText = "\u6b63\u5728\u4eceAI\u4e2d\u83b7\u53d6\u7b54\u6848";
                const t = this.buildAIQuestionText(e);
                return this.fetchAIAnswer(t, a);
              },
              getRandomFillPlan: e => ((e, t = Math.random) => {
                switch (e.type) {
                 case "0":
                 case "1":
                  if (!Array.isArray(e.options) || 0 === e.options.length) return;
                  return {
                    kind: "choice",
                    indexes: [ randomIndex(e.options.length, t) ]
                  };

                 case "3":
                  return {
                    kind: "judge",
                    value: t() > .5 ? "\u6b63\u786e" : "\u9519\u8bef"
                  };

                 case "15":
                  if (!Array.isArray(e.options) || 0 === e.options.length) return;
                  const a = e.options.map((e => Array.isArray(null == e ? void 0 : e.options) && 0 !== e.options.length ? {
                    kind: "choice",
                    indexes: [ randomIndex(e.options.length, t) ]
                  } : {
                    kind: "unsupported",
                    reason: "\u5b50\u9898\u9009\u9879\u4e3a\u7a7a\uff0c\u65e0\u6cd5\u968f\u673a\u7b54\u9898"
                  }));
                  return a.some((e => "choice" === e.kind)) ? {
                    kind: "reading",
                    subPlans: a
                  } : void 0;

                 default:
                  return;
                }
              })(e)
            }
          }),
          fillAnswer: (t, a) => (async (e, t, a, n) => {
            try {
              return assertFillShouldContinue(n), (n.resolveOptions || defaultResolveOptions)(t), 
              assertFillShouldContinue(n), await applyFillPlan(e, t, a, n.applyLegacyAnswer, {
                shouldContinue: n.shouldContinue
              });
            } catch (r) {
              if (r instanceof Error && "\u7b54\u9898\u5df2\u53d6\u6d88" === r.message) return {
                success: false,
                reason: "\u7b54\u9898\u5df2\u53d6\u6d88"
              };
              throw r;
            }
          })(t, a, this.rule, {
            applyLegacyAnswer: applyAnswerResult,
            shouldContinue: () => isRunTokenCurrent(this, e)
          }),
          publishQuestion: (e, t) => this.publishQuestionTaskResult(e, t),
          publishPreview: (e, t) => this.publishQuestionTaskPreview(e, t),
          setPhase: (e, t, a, n) => this.setQuestionPhase(e, t, a, n),
          setLoadingText: e => {
            this.loadingText = e;
          },
          stopAutoRun: () => {
            this.start = false;
          },
          waitForRender: waitForAnswerRender,
          log: log$1
        };
      },
      async reAnswer(e, t) {
        var a;
        const n = t ?? createNextRunToken(this), r = createQuestionTask({
          kind: void 0 === t ? "retry" : "auto",
          index: e,
          runToken: n
        }), s = this.questionList[e];
        if (s) {
          delete this.aiFailureMap[e], (null == (a = this.aiPreview) ? void 0 : a.index) === e && (this.aiPreview = null), 
          this.loading = true, this.loadingRunToken = n;
          try {
            await runQuestionTask(r, this.createQuestionRunnerDeps(n));
          } finally {
            this.loadingRunToken === n && (this.loading = false);
          }
        }
      },
      buildAIQuestionText: e => (e => {
        var t;
        let a = `[${typeConvert(e.type, false)}]${e.question}\n`;
        if ("15" === e.type && Array.isArray(e.options)) return e.options.forEach(((e, t) => {
          e && "object" == typeof e && (a += `\n\u5b50\u9898${t + 1}[${typeConvert(e.type, false)}]${e.question || ""}\n`, 
          Array.isArray(e.options) && e.options.length > 0 ? a += `${appendOptionLines(e.options)}\n` : "3" === e.type && (a += "\u8bf7\u56de\u7b54\uff1a\u6b63\u786e \u6216 \u9519\u8bef\n"));
        })), a;
        if (Array.isArray(e.options)) {
          const t = e.options.filter((e => "object" != typeof e));
          t.length > 0 && (a += `${appendOptionLines(t)}\n`);
        }
        return "24" === e.type && (e.match.forEach((e => {
          a += `\u7b2c\u4e00\u5217${e}\n`;
        })), null == (t = e.selects[0]) || t.forEach((e => {
          a += `\u7b2c\u4e8c\u5217${e.text}\n`;
        }))), a;
      })(e),
      async fetchAIAnswer(e, t) {
        const a = _a(), n = hasQuestionImages(t, e) ? "image" : "text", r = a.selectTarget("ask", n), s = await runAskAiFallback({
          text: e,
          type: t.type,
          question: t,
          config: null == r ? void 0 : r.config,
          route: r ? a.routeContextFor(r) : void 0,
          adoptionStrategy: a.settings.adoptionStrategy,
          usePureMatcher: true
        });
        return s;
      },
      async confirmAiPreview() {
        if (!this.aiPreview) return;
        const e = this.aiPreview;
        if (!this.questionList[e.index]) return void (this.aiPreview = null);
        const t = createNextRunToken(this), a = createQuestionTask({
          kind: "confirm-ai-preview",
          index: e.index,
          runToken: t,
          preview: {
            answer: e.answer,
            rawText: e.rawText,
            reason: e.reason
          }
        });
        this.loading = true, this.loadingRunToken = t, this.aiPreview = null;
        try {
          await runQuestionTask(a, this.createQuestionRunnerDeps(t));
        } finally {
          this.loadingRunToken === t && (this.loading = false);
        }
        const n = getPreviewResumeAction(e.index, this.questionList.length);
        this.questionInx = n.nextIndex, n.shouldFinish ? this.finishRun() : this.toggleStart();
      },
      skipAiPreview() {
        if (!this.aiPreview) return;
        const e = this.aiPreview, t = this.questionList[e.index];
        t && (t.phase = "no-answer", t.status = phaseToLegacyStatus("no-answer"), t.error = "\u7528\u6237\u8df3\u8fc7 AI \u5efa\u8bae", 
        this.aiFailureMap[e.index] = "\u7528\u6237\u8df3\u8fc7 AI \u5efa\u8bae"), this.aiPreview = null;
        const a = getPreviewResumeAction(e.index, this.questionList.length);
        this.questionInx = a.nextIndex, a.shouldFinish ? this.finishRun() : this.toggleStart();
      },
      async aiAnswer(e) {
        var t, a;
        const n = createNextRunToken(this), r = createQuestionTask({
          kind: "manual-ai",
          index: e,
          runToken: n
        }), s = this.questionList[e];
        if (s) {
          this.loadingText = "AI\u601d\u8003\u4e2d.....", this.loading = true, this.loadingRunToken = n, 
          this.aiLoadingIndex = e, s.aiMsg = "";
          try {
            const i = await runQuestionTask(r, this.createQuestionRunnerDeps(n));
            if ("preview" === i.phase && (null == (t = this.aiPreview) ? void 0 : t.index) === e) return void (s.aiMsg = this.aiPreview.rawText || i.reason || "");
            if (i.reason) s.aiMsg = createManualAiDisplayMessage(!1, "", i.reason); else if (null == (a = s.answer) ? void 0 : a.length) {
              const e = s.answer[s.answer.length - 1], t = (null == e ? void 0 : e.rawText) || (Array.isArray(null == e ? void 0 : e.answer) ? e.answer.join("\u3001") : "");
              s.aiMsg = createManualAiDisplayMessage("done" === i.phase, t, "AI \u672a\u91c7\u7eb3\u8be5\u7b54\u6848");
            }
          } catch {
            const t = "AI\u54cd\u5e94\u5f02\u5e38\uff0c\u8bf7\u5148\u5728 AI \u8bbe\u7f6e\u4e2d\u586b\u5199 API Key\u3001\u6a21\u578b\u548c Base URL";
            s.aiMsg = t, this.aiFailureMap[e] = t, this.setQuestionPhase(e, "failed", r, t);
          } finally {
            this.loadingRunToken === n && (this.loading = false), this.aiLoadingIndex = -1;
          }
        }
      },
      pause() {
        this.start = false, createNextRunToken(this);
      },
      restart() {
        const e = {
          questionInx: 0,
          start: false
        };
        this.questionInx = e.questionInx, this.start = e.start, this.aiPreview = null, createNextRunToken(this), 
        this.lock ? this.restartPending = true : this.toggleStart();
      }
    },
    getters: {
      current() {
        return this.questionList[this.questionInx];
      },
      currentAiMd() {
        return createSafeMarkdownHtml(this.questionList[this.questionInx].aiMsg);
      },
      tipsMd() {
        const e = this.rule;
        if (!e) return '<span style="color:red">\u8be5\u9875\u9762\u6682\u65e0\u89c4\u5219</span>';
        const t = [];
        return t.push(`<span style="color:blue">${e.name}</span><span style="color:red">${e.tips || "\u6709\u95ee\u9898\u53ef\u4ee5\u53cd\u9988\u7ed9\u4f5c\u8005"}</span>`), 
        t.join("<br />");
      },
      typesMd() {
        const e = this.rule;
        if (!e || !e.types) return '<span style="color:red">\u8be5\u9875\u9762\u6682\u65e0\u89c4\u5219</span>';
        const t = e.types, a = [];
        for (const n in t) {
          const e = t[n];
          a.push(`<span style="color:blue">${typeConvert(e, false)}&nbsp;\u2705</span>`);
        }
        return a.push('<span style="color:red">\u4e0d\u652f\u6301\u7684\u9898\u578b\u53ef\u4ee5\u53cd\u9988\u7ed9\u4f5c\u8005\u517c\u5bb9</span>'), 
        a.join("<br />");
      }
    }
  }), Ta = [ "tabindex", "disabled" ], Ca = {
    class: "stat-label"
  }, Sa = {
    class: "stat-value"
  }, Ia = {
    key: 0,
    class: "stat-meta"
  }, Ea = {
    key: 1,
    class: "stat-progress"
  }, Ua = vue.defineComponent({
    __name: "StatCard",
    props: {
      label: {},
      iconColor: {},
      value: {},
      meta: {},
      progress: {},
      clickable: {
        type: Boolean
      }
    },
    emits: [ "click" ],
    setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("button", {
      type: "button",
      class: vue.normalizeClass([ "stat-card", {
        "stat-card-clickable": e.clickable
      } ]),
      tabindex: e.clickable ? 0 : -1,
      disabled: !e.clickable,
      onClick: t[0] || (t[0] = t => e.$emit("click"))
    }, [ vue.createElementVNode("div", Ca, [ vue.createElementVNode("span", {
      class: "stat-icon",
      style: vue.normalizeStyle({
        background: e.iconColor || "var(--c-primary)"
      })
    }, null, 4), vue.createElementVNode("span", null, vue.toDisplayString(e.label), 1) ]), vue.createElementVNode("div", Sa, vue.toDisplayString(e.value), 1), e.meta ? (vue.openBlock(), 
    vue.createElementBlock("div", Ia, vue.toDisplayString(e.meta), 1)) : vue.createCommentVNode("", true), "number" == typeof e.progress ? (vue.openBlock(), vue.createElementBlock("div", Ea, [ vue.createElementVNode("i", {
      style: vue.normalizeStyle({
        width: e.progress + "%"
      })
    }, null, 4) ])) : vue.createCommentVNode("", true) ], 10, Ta))
  }), Pa = {
    class: "overview-page"
  }, Ha = {
    class: "aah-card overview-user"
  }, La = {
    class: "ov-avatar"
  }, ja = [ "src" ], $a = {
    class: "ov-user-meta"
  }, za = {
    key: 0,
    class: "ov-tags"
  }, Ma = {
    class: "aah-tag aah-tag-success"
  }, Oa = {
    key: 0,
    class: "aah-tag aah-tag-warning"
  }, Fa = {
    key: 1,
    class: "ov-muted"
  }, Da = {
    key: 0,
    class: "aah-card overview-notice"
  }, Na = [ "innerHTML" ], Ra = {
    class: "overview-stats"
  }, Ba = {
    class: "overview-actions"
  }, Ga = {
    class: "overview-version"
  }, Va = {
    class: "ov-version-text"
  }, Ka = vue.defineComponent({
    __name: "Overview",
    setup(e) {
      const t = ce(), a = ka(), o = Aa(), g = _a(), v = vue.ref("");
      vue.onMounted((async () => {
        const e = await a.fetchNotice();
        e.success && e.notice ? v.value = z.sanitize(e.notice) : e.message && msg(e.message, "warning");
      }));
      const y = vue.computed((() => {
        var e;
        const t = (null == (e = o.questionList) ? void 0 : e.length) ?? 0, a = o.questionInx ?? 0;
        return {
          total: t,
          done: a,
          percent: t ? Math.round(a / t * 100) : 0
        };
      })), b = vue.computed((() => {
        const {total: e, done: t} = y.value;
        return e ? `${t} / ${e}` : "\u7a7a\u95f2";
      })), w = vue.computed((() => Cache.match("ques1_").length)), x = vue.computed((() => {
        const e = g.selectTarget("search");
        return {
          ready: !!e,
          model: ((null == e ? void 0 : e.config.model) ?? "") || "\u672a\u914d\u7f6e"
        };
      }));
      return (e, o) => (vue.openBlock(), vue.createElementBlock("div", Pa, [ vue.createElementVNode("div", Ha, [ vue.createElementVNode("div", La, [ vue.unref(a).avatar ? (vue.openBlock(), 
      vue.createElementBlock("img", {
        key: 0,
        src: vue.unref(a).avatar,
        alt: "avatar"
      }, null, 8, ja)) : (vue.openBlock(), vue.createBlock(vue.unref(vue$1.Icon), {
        key: 1,
        icon: "mdi:account"
      })) ]), vue.createElementVNode("div", $a, [ vue.createElementVNode("h3", null, vue.toDisplayString(vue.unref(a).nickname || "\u6e38\u5ba2"), 1), vue.unref(a).isLoggedIn ? (vue.openBlock(), 
      vue.createElementBlock("p", za, [ vue.createElementVNode("span", Ma, "\u79ef\u5206 " + vue.toDisplayString(vue.unref(a).score), 1), vue.unref(a).isVip ? (vue.openBlock(), 
      vue.createElementBlock("span", Oa, "VIP Lv." + vue.toDisplayString(vue.unref(a).level), 1)) : vue.createCommentVNode("", true) ])) : (vue.openBlock(), vue.createElementBlock("p", Fa, "\u672a\u767b\u5f55\uff0c\u767b\u5f55\u540e\u53ef\u4eab\u53d7\u66f4\u591a\u529f\u80fd")) ]), vue.createElementVNode("button", {
        class: vue.normalizeClass([ "aah-btn", vue.unref(a).isLoggedIn ? "" : "aah-btn-primary" ]),
        onClick: o[0] || (o[0] = e => vue.unref(t).setPage("system", "account"))
      }, vue.toDisplayString(vue.unref(a).isLoggedIn ? "\u4e2a\u4eba\u4e2d\u5fc3" : "\u767b\u5f55 / \u6ce8\u518c"), 3) ]), v.value ? (vue.openBlock(), 
      vue.createElementBlock("div", Da, [ vue.createElementVNode("div", {
        class: "ov-notice-content",
        innerHTML: v.value
      }, null, 8, Na) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Ra, [ vue.createVNode(Ua, {
        label: "\u7b54\u9898",
        "icon-color": y.value.total ? "var(--c-success)" : "var(--c-text-muted)",
        value: b.value,
        progress: y.value.total ? y.value.percent : void 0,
        meta: y.value.total ? "" : "\u6682\u672a\u5f00\u59cb",
        clickable: "",
        onClick: o[1] || (o[1] = e => vue.unref(t).setPage("ask"))
      }, null, 8, [ "icon-color", "value", "progress", "meta" ]), vue.createVNode(Ua, {
        label: "\u9898\u5e93",
        "icon-color": "var(--c-primary)",
        value: w.value.toLocaleString(),
        meta: "\u5df2\u6536\u5f55\u9898\u76ee",
        clickable: "",
        onClick: o[2] || (o[2] = e => vue.unref(t).setPage("library", "manage"))
      }, null, 8, [ "value" ]), vue.createVNode(Ua, {
        label: "AI",
        "icon-color": x.value.ready ? "var(--c-warning)" : "var(--c-text-muted)",
        value: x.value.model,
        meta: x.value.ready ? "\u5df2\u5c31\u7eea" : "\u672a\u914d\u7f6e",
        clickable: "",
        onClick: o[3] || (o[3] = e => vue.unref(t).setPage("ai"))
      }, null, 8, [ "icon-color", "value", "meta" ]) ]), vue.createElementVNode("div", Ba, [ vue.createElementVNode("button", {
        class: "aah-btn aah-btn-primary",
        onClick: o[4] || (o[4] = e => vue.unref(t).setPage("ask"))
      }, "\u5f00\u59cb\u7b54\u9898"), vue.createElementVNode("button", {
        class: "aah-btn",
        onClick: o[5] || (o[5] = e => vue.unref(t).setPage("ai"))
      }, "AI \u641c\u9898"), vue.createElementVNode("button", {
        class: "aah-btn",
        onClick: o[6] || (o[6] = e => vue.unref(t).setPage("library", "tool"))
      }, "\u9898\u5e93\u5bfc\u5165") ]), vue.createElementVNode("div", Ga, [ vue.createElementVNode("span", Va, "v" + vue.toDisplayString(vue.unref(re).script.version), 1), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-small",
        onClick: o[7] || (o[7] = e => vue.unref(updateFn)(false))
      }, "\u68c0\u67e5\u66f4\u65b0") ]) ]));
    }
  }), Wa = {
    key: 0,
    class: "page-loader"
  }, Qa = vue.createElementVNode("div", {
    class: "spinner"
  }, null, -1), Ja = [ Qa ], Xa = {
    key: 0,
    class: "aah-page-footer"
  }, Ya = vue.defineComponent({
    __name: "PageContainer",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      noPadding: {
        type: Boolean,
        default: false
      }
    },
    setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass([ "aah-page", {
        "is-loading": e.loading
      } ])
    }, [ vue.createElementVNode("main", {
      class: vue.normalizeClass([ "aah-page-content", {
        "no-padding": e.noPadding
      } ])
    }, [ vue.renderSlot(e.$slots, "default"), e.loading ? (vue.openBlock(), vue.createElementBlock("div", Wa, Ja)) : vue.createCommentVNode("", true) ], 2), e.$slots.footer ? (vue.openBlock(), 
    vue.createElementBlock("footer", Xa, [ vue.renderSlot(e.$slots, "footer") ])) : vue.createCommentVNode("", true) ], 2))
  }), Za = {
    class: "segmented",
    role: "tablist"
  }, en = [ "aria-selected", "onClick" ], tn = vue.defineComponent({
    __name: "SegmentedControl",
    props: {
      segments: {},
      modelValue: {}
    },
    emits: [ "update:modelValue" ],
    setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("div", Za, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.segments, (t => (vue.openBlock(), 
    vue.createElementBlock("button", {
      key: t.key,
      type: "button",
      role: "tab",
      "aria-selected": e.modelValue === t.key,
      class: vue.normalizeClass([ "segment-item", {
        active: e.modelValue === t.key
      } ]),
      onClick: a => e.$emit("update:modelValue", t.key)
    }, vue.toDisplayString(t.label), 11, en)))), 128)) ]))
  }), an = [ "checked", "disabled" ], nn = vue.createElementVNode("span", {
    class: "switch-slider",
    "aria-hidden": "true"
  }, null, -1), rn = vue.defineComponent({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      }
    },
    emits: [ "update:modelValue" ],
    setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass([ "switch", {
        disabled: e.disabled
      } ])
    }, [ vue.createElementVNode("input", {
      type: "checkbox",
      checked: e.modelValue,
      disabled: e.disabled,
      onChange: t[0] || (t[0] = t => e.$emit("update:modelValue", t.target.checked))
    }, null, 40, an), nn ], 2))
  }), sn = {
    class: "config-item"
  }, on = {
    class: "config-item-content"
  }, ln = {
    class: "config-label"
  }, cn = {
    class: "label-wrapper"
  }, pn = {
    class: "label-text"
  }, un = {
    key: 0,
    class: "label-desc"
  }, dn = {
    class: "config-control"
  }, mn = [ "value" ], hn = {
    key: 4,
    class: "hotkey-input-wrapper"
  }, fn = [ "value", "placeholder" ], gn = {
    key: 0,
    class: "hotkey-hint danger"
  }, vn = {
    key: 1,
    class: "hotkey-hint"
  }, yn = {
    key: 5,
    class: "checkbox-group"
  }, bn = [ "value" ], wn = {
    key: 6,
    class: "radio-group"
  }, xn = [ "value" ], kn = [ "min", "max", "step" ], qn = vue.defineComponent({
    __name: "ConfigItem",
    props: {
      item: {},
      recordingHotkey: {}
    },
    emits: [ "start-recording", "hotkey-keydown" ],
    setup(e, {emit: t}) {
      const a = e, o = t, p = vue.computed((() => a.item.kind ?? a.item.type)), handleStartRecording = () => {
        "hotkey" === p.value && o("start-recording", a.item.name);
      }, handleHotkeyKeydown = e => {
        o("hotkey-keydown", e, a.item);
      };
      return (e, t) => (vue.openBlock(), vue.createElementBlock("div", sn, [ vue.createElementVNode("div", on, [ vue.createElementVNode("div", ln, [ vue.createElementVNode("div", cn, [ vue.createElementVNode("span", pn, vue.toDisplayString(e.item.label), 1), e.item.desc ? (vue.openBlock(), 
      vue.createElementBlock("span", un, vue.toDisplayString(e.item.desc), 1)) : vue.createCommentVNode("", true) ]) ]), vue.createElementVNode("div", dn, [ "switch" === p.value ? (vue.openBlock(), 
      vue.createBlock(rn, {
        key: 0,
        modelValue: e.item.value,
        "onUpdate:modelValue": t[0] || (t[0] = t => e.item.value = t)
      }, null, 8, [ "modelValue" ])) : "input" === p.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": t[1] || (t[1] = t => e.item.value = t),
        class: "aah-input",
        type: "text"
      }, null, 512)), [ [ vue.vModelText, e.item.value ] ]) : "number" === p.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 2,
        "onUpdate:modelValue": t[2] || (t[2] = t => e.item.value = t),
        class: "aah-input",
        type: "number"
      }, null, 512)), [ [ vue.vModelText, e.item.value, void 0, {
        number: true
      } ] ]) : "select" === p.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("select", {
        key: 3,
        "onUpdate:modelValue": t[3] || (t[3] = t => e.item.value = t),
        class: "aah-select"
      }, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.item.options, (e => (vue.openBlock(), vue.createElementBlock("option", {
        key: e.value,
        value: e.value
      }, vue.toDisplayString(e.label), 9, mn)))), 128)) ], 512)), [ [ vue.vModelSelect, e.item.value ] ]) : "hotkey" === p.value ? (vue.openBlock(), 
      vue.createElementBlock("div", hn, [ vue.createElementVNode("input", {
        class: vue.normalizeClass([ "aah-input", {
          recording: e.recordingHotkey === e.item.name
        } ]),
        value: e.item.value,
        placeholder: e.recordingHotkey === e.item.name ? "\u8bf7\u6309\u4e0b\u5feb\u6377\u952e..." : "\u70b9\u51fb\u540e\u6309\u4e0b\u5feb\u6377\u952e\u7ec4\u5408",
        readonly: "",
        onFocus: handleStartRecording,
        onKeydown: handleHotkeyKeydown
      }, null, 42, fn), e.recordingHotkey === e.item.name ? (vue.openBlock(), vue.createElementBlock("span", gn, "\u5f55\u5236\u4e2d...")) : (vue.openBlock(), 
      vue.createElementBlock("span", vn, "\u70b9\u51fb\u5f55\u5236")) ])) : "checkbox" === p.value ? (vue.openBlock(), 
      vue.createElementBlock("div", yn, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.item.options, (a => (vue.openBlock(), vue.createElementBlock("label", {
        key: a.value,
        class: "checkbox-item"
      }, [ vue.withDirectives(vue.createElementVNode("input", {
        type: "checkbox",
        value: a.value,
        "onUpdate:modelValue": t[4] || (t[4] = t => e.item.value = t)
      }, null, 8, bn), [ [ vue.vModelCheckbox, e.item.value ] ]), vue.createElementVNode("span", null, vue.toDisplayString(a.label), 1) ])))), 128)) ])) : "radio" === p.value ? (vue.openBlock(), 
      vue.createElementBlock("div", wn, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.item.options, (a => (vue.openBlock(), vue.createElementBlock("label", {
        key: a.value,
        class: "radio-item"
      }, [ vue.withDirectives(vue.createElementVNode("input", {
        type: "radio",
        value: a.value,
        "onUpdate:modelValue": t[5] || (t[5] = t => e.item.value = t)
      }, null, 8, xn), [ [ vue.vModelRadio, e.item.value ] ]), vue.createElementVNode("span", null, vue.toDisplayString(a.label), 1) ])))), 128)) ])) : "segment" === p.value ? (vue.openBlock(), 
      vue.createBlock(tn, {
        key: 7,
        modelValue: e.item.value,
        "onUpdate:modelValue": t[6] || (t[6] = t => e.item.value = t),
        segments: (e.item.options ?? []).map((e => ({
          key: String(e.value),
          label: e.label
        })))
      }, null, 8, [ "modelValue", "segments" ])) : "slider" === p.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 8,
        type: "range",
        "onUpdate:modelValue": t[7] || (t[7] = t => e.item.value = t),
        min: e.item.min ?? 0,
        max: e.item.max ?? 100,
        step: e.item.step ?? 1,
        class: "aah-slider"
      }, null, 8, kn)), [ [ vue.vModelText, e.item.value, void 0, {
        number: true
      } ] ]) : vue.createCommentVNode("", true) ]) ]) ]));
    }
  }), _n = {
    class: "ai-config-panel"
  }, An = {
    key: 0,
    class: "aah-card ai-wizard"
  }, Tn = {
    class: "ai-wizard-head"
  }, Cn = vue.createElementVNode("div", null, [ vue.createElementVNode("h4", null, "\u5f00\u59cb\u4f7f\u7528 AI"), vue.createElementVNode("p", null, "\u4e09\u6b65\u914d\u597d\uff0c\u4e4b\u540e\u968f\u65f6\u80fd\u6539") ], -1), Sn = {
    class: "ai-wizard-count"
  }, In = {
    class: "ai-wizard-steps",
    "aria-label": "\u914d\u7f6e\u8fdb\u5ea6"
  }, En = vue.createElementVNode("span", {
    class: "ai-wizard-dot",
    "aria-hidden": "true"
  }, null, -1), Un = {
    key: 0,
    class: "ai-wizard-body"
  }, Pn = vue.createElementVNode("p", {
    class: "ai-config-field-help"
  }, " \u4efb\u9009\u4e00\u5bb6\uff0c\u7528\u5b83\u81ea\u5df1\u7684 API Key\u3002\u5e26\u300c\u6709\u514d\u8d39\u989d\u5ea6\u300d\u7684\u6ce8\u518c\u540e\u5373\u53ef\u9886\u53d6\uff0c\u4e0d\u7528\u5145\u503c\u3002 ", -1), Hn = {
    class: "ai-config-channel-grid"
  }, Ln = [ "onClick" ], jn = {
    class: "ai-config-card-head"
  }, $n = {
    class: "ai-config-card-tags"
  }, zn = {
    key: 0,
    class: "ai-config-card-promo"
  }, Mn = {
    class: "ai-wizard-actions"
  }, On = {
    key: 1,
    class: "ai-wizard-body"
  }, Fn = {
    class: "ai-wizard-subject"
  }, Dn = {
    class: "ai-config-field-help"
  }, Nn = {
    key: 0,
    class: "ai-config-card-promo"
  }, Rn = [ "href" ], Bn = {
    class: "ai-wizard-actions"
  }, Gn = {
    key: 2,
    class: "ai-wizard-body"
  }, Vn = {
    class: "ai-wizard-subject"
  }, Kn = {
    class: "ai-config-field"
  }, Wn = vue.createElementVNode("span", null, "\u628a API Key \u7c98\u5230\u8fd9\u91cc", -1), Qn = [ "value" ], Jn = {
    class: "ai-wizard-actions"
  }, Xn = [ "disabled" ], Yn = [ "disabled" ], Zn = {
    key: 0,
    class: "aah-alert aah-alert-info"
  }, er = {
    key: 1,
    class: "ai-config-manager"
  }, tr = {
    class: "ai-config-side"
  }, ar = {
    class: "aah-card ai-config-list-panel"
  }, nr = vue.createElementVNode("header", {
    class: "ai-config-section-head"
  }, [ vue.createElementVNode("h4", null, "\u6211\u7684\u6e20\u9053") ], -1), rr = {
    key: 0,
    class: "ai-config-channel-list"
  }, sr = [ "onClick" ], ir = {
    class: "ai-config-channel-text"
  }, or = {
    key: 0
  }, lr = {
    key: 1
  }, cr = {
    key: 2
  }, pr = {
    key: 3
  }, ur = {
    key: 0,
    class: "aah-tag aah-tag-primary"
  }, dr = {
    key: 1,
    class: "ai-config-field-help"
  }, mr = {
    class: "ai-config-side-actions"
  }, hr = {
    class: "aah-card ai-config-global"
  }, fr = [ "aria-expanded" ], gr = vue.createElementVNode("span", null, "\u5168\u5c40\u8bbe\u7f6e", -1), vr = {
    key: 0,
    class: "ai-config-global-body"
  }, yr = {
    class: "native-checkbox"
  }, br = vue.createElementVNode("span", null, [ vue.createTextVNode("\u542f\u7528 AI \u8f85\u52a9\u7b54\u9898 "), vue.createElementVNode("small", null, "\uff08AI \u6b63\u786e\u7387\u4e0d\u4fdd\u8bc1\uff09") ], -1), wr = {
    class: "ai-config-field"
  }, xr = vue.createElementVNode("span", null, "AI \u91c7\u7eb3\u7b56\u7565", -1), kr = vue.createElementVNode("option", {
    value: "conservative"
  }, "\u4fdd\u5b88\u586b", -1), qr = vue.createElementVNode("option", {
    value: "direct"
  }, "\u76f4\u63a5\u586b", -1), _r = vue.createElementVNode("option", {
    value: "preview"
  }, "\u9884\u89c8\u786e\u8ba4", -1), Ar = [ kr, qr, _r ], Tr = {
    class: "ai-config-field"
  }, Cr = vue.createElementVNode("span", null, "\u56fe\u7247\u9898\u6e20\u9053", -1), Sr = vue.createElementVNode("option", {
    value: ""
  }, "\u81ea\u52a8\u9009\u62e9", -1), Ir = [ "value" ], Er = {
    key: 0,
    class: "ai-config-field-help"
  }, Ur = {
    class: "ai-config-field"
  }, Pr = vue.createElementVNode("span", null, "\u8c03\u7528\u65b9\u5f0f", -1), Hr = vue.createElementVNode("option", {
    value: "auto"
  }, "\u81ea\u52a8\uff08\u4f18\u5148\u7ecf\u7231\u95ee\u7b54\u4e2d\u8f6c\uff0c\u5931\u8d25\u56de\u843d\u76f4\u8fde\uff09", -1), Lr = vue.createElementVNode("option", {
    value: "direct"
  }, "\u4ec5\u76f4\u8fde\uff08\u4e0d\u7ecf\u7231\u95ee\u7b54\u670d\u52a1\u5668\uff09", -1), jr = [ Hr, Lr ], $r = vue.createElementVNode("p", {
    class: "ai-config-field-help"
  }, " \u9009\u300c\u81ea\u52a8\u300d\u65f6\uff0c\u4f60\u7684 API Key \u4f1a\u7ecf\u7231\u95ee\u7b54\u670d\u52a1\u5668\u8f6c\u53d1\u7ed9\u5382\u5546\uff1b\u6211\u4eec\u4e0d\u4fdd\u5b58\u5b83\u3002 \u4ecb\u610f\u7684\u8bdd\u9009\u300c\u4ec5\u76f4\u8fde\u300d\u3002 ", -1), zr = {
    key: 0,
    class: "aah-card ai-config-detail"
  }, Mr = {
    class: "ai-config-section-head"
  }, Or = {
    class: "ai-config-card-tags"
  }, Fr = {
    key: 0,
    class: "aah-tag aah-tag-success"
  }, Dr = {
    key: 1,
    class: "aah-tag"
  }, Nr = {
    class: "ai-config-field"
  }, Rr = vue.createElementVNode("span", null, "API Key", -1), Br = [ "value" ], Gr = {
    class: "ai-config-field-help"
  }, Vr = [ "href" ], Kr = {
    class: "ai-config-field"
  }, Wr = vue.createElementVNode("span", null, "\u6a21\u578b", -1), Qr = [ "value" ], Jr = [ "value" ], Xr = {
    key: 0,
    class: "ai-config-field-help"
  }, Yr = {
    key: 1,
    class: "ai-config-field-help"
  }, Zr = {
    class: "native-checkbox"
  }, es = [ "checked" ], ts = vue.createElementVNode("span", null, "\u542f\u7528\u8be5\u6e20\u9053", -1), as = {
    key: 0,
    class: "ai-config-field-help"
  }, ns = {
    key: 1,
    class: "ai-config-field-help"
  }, rs = {
    class: "ai-config-instance-actions"
  }, ss = [ "disabled" ], is = {
    key: 2,
    class: "aah-alert aah-alert-info"
  }, os = {
    key: 1,
    class: "aah-card ai-config-detail ai-config-detail-empty"
  }, ls = {
    class: "ai-config-field-help"
  }, cs = {
    class: "modal-panel ai-config-add-modal"
  }, ps = {
    class: "modal-header"
  }, us = vue.createElementVNode("h3", {
    id: "ai-add-channel-title"
  }, "\u6dfb\u52a0\u6e20\u9053", -1), ds = {
    class: "modal-body"
  }, ms = {
    class: "ai-config-channel-grid"
  }, hs = {
    class: "ai-config-card-head"
  }, fs = {
    class: "ai-config-card-tags"
  }, gs = {
    key: 0,
    class: "ai-config-card-promo"
  }, vs = {
    class: "ai-config-card-actions"
  }, ys = [ "href" ], bs = [ "onClick" ], ws = {
    key: 0,
    class: "ai-config-field-help"
  }, xs = {
    class: "modal-footer"
  }, ks = [ "disabled" ], qs = {
    class: "modal-panel ai-config-delete-modal"
  }, _s = {
    class: "modal-header"
  }, As = vue.createElementVNode("h3", {
    id: "ai-channel-delete-title"
  }, "\u786e\u8ba4\u79fb\u9664", -1), Ts = {
    class: "modal-body"
  }, Cs = {
    class: "ai-config-delete-text"
  }, Ss = {
    class: "modal-footer"
  }, Is = vue.defineComponent({
    __name: "AiConfigPanel",
    setup(e) {
      const t = _a(), a = vue.ref(!t.settings.instances.some((e => {
        var t;
        return null == (t = e.credential) ? void 0 : t.value;
      })));
      const o = t.settings.instances[0], h = vue.ref(o ? 2 : 1), g = vue.ref((null == o ? void 0 : o.channelId) ?? ""), w = vue.ref(false), q = vue.ref(t.settings.defaultChannelId || (null == o ? void 0 : o.channelId) || ""), T = vue.ref(false), C = vue.ref(false), S = vue.ref(null), channelOf = e => {
        const a = resolveChannel(t.catalog, t.settings.customChannels, e);
        return a ? asChannel(a) : void 0;
      }, I = vue.computed((() => t.catalogForDisplay().filter((e => !t.settings.instances.some((t => t.channelId === e.id)))))), E = vue.computed((() => w.value ? I.value : I.value.slice(0, 6))), U = vue.computed((() => t.settings.instances.map((e => ({
        instance: e,
        channel: channelOf(e.channelId)
      }))))), P = vue.computed((() => t.settings.instances.find((e => e.channelId === q.value)))), H = vue.computed((() => channelOf(q.value))), L = vue.computed((() => channelOf(g.value))), j = vue.computed((() => t.settings.instances.find((e => e.channelId === g.value)))), z = vue.computed((() => {
        var e, t;
        return Boolean(null == (t = null == (e = j.value) ? void 0 : e.credential) ? void 0 : t.value);
      })), M = vue.computed((() => U.value.filter((e => e.channel && hasVisionModel(e.channel))).map((e => ({
        ...e,
        readiness: imageReadiness(e.channel, e.instance)
      }))))), O = vue.computed((() => H.value && P.value ? imageReadiness(H.value, P.value) : void 0)), useSuggestedVisionModel = () => {
        const e = P.value, t = O.value;
        e && "switchable" === (null == t ? void 0 : t.state) && (e.modelId = t.suggestModelId, 
        save(), msg(`\u5df2\u5207\u6362\u5230 ${t.suggestModelId}`, "success"));
      }, testingFor = e => Boolean(t.connectionTestingIds[e]), messageFor = e => t.connectionMessages[e] || "", save = () => t.saveSettings(), setCredential = (e, a) => {
        e && t.updateCredential(e, {
          type: "api-key",
          value: a
        });
      }, backToPick = () => {
        var e;
        const a = j.value;
        a && !(null == (e = a.credential) ? void 0 : e.value) && t.removeInstance(a.channelId), 
        g.value = "", h.value = 1;
      }, finishWizard = () => {
        g.value && (t.settings.defaultChannelId = g.value, q.value = g.value, save()), a.value = false;
      }, skipWizard = () => {
        a.value = false;
      }, restartWizard = () => {
        g.value = "", h.value = 1, w.value = false, a.value = true;
      }, updateModel = e => {
        const t = P.value;
        t && (t.modelId = e.target.value, save());
      }, toggleEnabled = e => {
        const t = P.value;
        t && (t.enabled = e.target.checked, save());
      }, setDefault = () => {
        q.value && (t.settings.defaultChannelId = q.value, save(), msg("\u5df2\u8bbe\u4e3a\u9ed8\u8ba4\u6e20\u9053", "success"));
      }, confirmDelete = () => {
        var e;
        const a = S.value;
        a && (t.removeInstance(a.id), q.value === a.id && (q.value = (null == (e = t.settings.instances[0]) ? void 0 : e.channelId) || ""), 
        S.value = null, msg("\u6e20\u9053\u5df2\u79fb\u9664", "success"));
      };
      return vue.onMounted((() => {
        t.loadCatalog();
      })), (e, o) => {
        var p, u, d, F, D, N, R, B, G;
        return vue.openBlock(), vue.createElementBlock("div", _n, [ a.value ? (vue.openBlock(), vue.createElementBlock("section", An, [ vue.createElementVNode("header", Tn, [ Cn, vue.createElementVNode("span", Sn, vue.toDisplayString(h.value) + " / 3", 1) ]), vue.createElementVNode("ol", In, [ (vue.openBlock(), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList([ "\u9009\u5e73\u53f0", "\u9886 Key", "\u7c98\u56de\u6765" ], ((e, t) => vue.createElementVNode("li", {
          key: e,
          class: vue.normalizeClass({
            done: h.value > t + 1,
            current: h.value === t + 1
          })
        }, [ En, vue.createElementVNode("span", null, vue.toDisplayString(e), 1) ], 2))), 64)) ]), 1 === h.value ? (vue.openBlock(), vue.createElementBlock("div", Un, [ Pn, vue.createElementVNode("div", Hn, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(E.value, (e => (vue.openBlock(), vue.createElementBlock("button", {
          key: e.id,
          type: "button",
          class: vue.normalizeClass([ "ai-config-card ai-config-card-pick", {
            recommended: e.recommended
          } ]),
          onClick: a => {
            return n = e.id, t.addChannel(n), g.value = n, q.value = n, void (h.value = 2);
            var n;
          }
        }, [ vue.createElementVNode("span", jn, [ vue.createElementVNode("strong", null, vue.toDisplayString(e.name), 1) ]), vue.createElementVNode("span", $n, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(channelTags)(e), (e => (vue.openBlock(), vue.createElementBlock("span", {
          key: e.label,
          class: vue.normalizeClass([ "aah-tag", e.cls ])
        }, vue.toDisplayString(e.label), 3)))), 128)) ]), e.promoText ? (vue.openBlock(), vue.createElementBlock("span", zn, vue.toDisplayString(e.promoText), 1)) : vue.createCommentVNode("", true) ], 10, Ln)))), 128)) ]), vue.createElementVNode("div", Mn, [ !w.value && I.value.length > E.value.length ? (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: 0,
          class: "aah-btn aah-btn-plain",
          type: "button",
          onClick: o[0] || (o[0] = e => w.value = true)
        }, " \u5c55\u5f00\u5168\u90e8 " + vue.toDisplayString(I.value.length) + " \u5bb6 ", 1)) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain aah-btn-small",
          type: "button",
          onClick: skipWizard
        }, " \u8df3\u8fc7\uff0c\u76f4\u63a5\u8fdb\u8bbe\u7f6e ") ]) ])) : 2 === h.value && L.value ? (vue.openBlock(), 
        vue.createElementBlock("div", On, [ vue.createElementVNode("h5", Fn, vue.toDisplayString(L.value.name), 1), vue.createElementVNode("p", Dn, vue.toDisplayString(L.value.keyHelp), 1), L.value.promoText ? (vue.openBlock(), 
        vue.createElementBlock("p", Nn, vue.toDisplayString(L.value.promoText), 1)) : vue.createCommentVNode("", true), L.value.signupUrl ? (vue.openBlock(), vue.createElementBlock("a", {
          key: 1,
          class: "aah-btn aah-btn-primary",
          href: L.value.signupUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:open-in-new",
          class: "icon-inline"
        }), vue.createTextVNode("\u53bb " + vue.toDisplayString(L.value.name) + " \u9886\u53d6 API Key ", 1) ], 8, Rn)) : vue.createCommentVNode("", true), vue.createElementVNode("div", Bn, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain",
          type: "button",
          onClick: backToPick
        }, "\u6362\u4e00\u5bb6"), vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          onClick: o[1] || (o[1] = e => h.value = 3)
        }, "\u6211\u5df2\u7ecf\u6709 Key \u4e86") ]) ])) : 3 === h.value && L.value ? (vue.openBlock(), 
        vue.createElementBlock("div", Gn, [ vue.createElementVNode("h5", Vn, vue.toDisplayString(L.value.name), 1), vue.createElementVNode("label", Kn, [ Wn, vue.createElementVNode("input", {
          value: (null == (u = null == (p = j.value) ? void 0 : p.credential) ? void 0 : u.value) || "",
          class: "aah-input",
          type: "password",
          autocomplete: "off",
          placeholder: "\u7c98\u8d34\u540e\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u672c\u5730",
          onInput: o[2] || (o[2] = e => setCredential(g.value, e.target.value))
        }, null, 40, Qn) ]), vue.createElementVNode("div", Jn, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain",
          type: "button",
          onClick: o[3] || (o[3] = e => h.value = 2)
        }, "\u4e0a\u4e00\u6b65"), vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          disabled: !z.value || testingFor(g.value),
          onClick: o[4] || (o[4] = e => vue.unref(t).testConfig(g.value))
        }, vue.toDisplayString(testingFor(g.value) ? "\u6d4b\u8bd5\u4e2d..." : "\u6d4b\u8bd5\u8fde\u63a5"), 9, Xn), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary",
          type: "button",
          disabled: !z.value,
          onClick: finishWizard
        }, " \u5b8c\u6210 ", 8, Yn) ]), messageFor(g.value) ? (vue.openBlock(), vue.createElementBlock("div", Zn, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:information-outline",
          class: "alert-icon"
        }), vue.createElementVNode("span", null, vue.toDisplayString(messageFor(g.value)), 1) ])) : vue.createCommentVNode("", true) ])) : vue.createCommentVNode("", true) ])) : (vue.openBlock(), 
        vue.createElementBlock("div", er, [ vue.createElementVNode("aside", tr, [ vue.createElementVNode("section", ar, [ nr, U.value.length ? (vue.openBlock(), vue.createElementBlock("div", rr, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(U.value, (e => {
          var a, o;
          return vue.openBlock(), vue.createElementBlock("button", {
            key: e.instance.channelId,
            type: "button",
            class: vue.normalizeClass([ "ai-config-channel-item", {
              active: e.instance.channelId === q.value,
              orphan: !e.channel
            } ]),
            onClick: t => q.value = e.instance.channelId
          }, [ vue.createVNode(vue.unref(vue$1.Icon), {
            icon: "mdi:robot",
            class: "icon-inline"
          }), vue.createElementVNode("span", ir, [ vue.createElementVNode("strong", null, vue.toDisplayString((null == (a = e.channel) ? void 0 : a.name) ?? e.instance.channelId), 1), e.channel ? (null == (o = e.instance.credential) ? void 0 : o.value) ? e.instance.enabled ? (vue.openBlock(), 
          vue.createElementBlock("small", pr, vue.toDisplayString(e.instance.modelId || e.channel.defaultModelId), 1)) : (vue.openBlock(), vue.createElementBlock("small", cr, "\u5df2\u505c\u7528")) : (vue.openBlock(), 
          vue.createElementBlock("small", lr, "\u5f85\u586b API Key")) : (vue.openBlock(), vue.createElementBlock("small", or, "\u6e20\u9053\u5df2\u4e0b\u7ebf\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9")) ]), e.instance.channelId === vue.unref(t).settings.defaultChannelId ? (vue.openBlock(), 
          vue.createElementBlock("span", ur, "\u9ed8\u8ba4")) : vue.createCommentVNode("", true) ], 10, sr);
        })), 128)) ])) : (vue.openBlock(), vue.createElementBlock("p", dr, "\u8fd8\u6ca1\u6709\u4efb\u4f55\u6e20\u9053\u3002")), vue.createElementVNode("div", mr, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary aah-btn-small",
          type: "button",
          onClick: o[5] || (o[5] = e => T.value = true)
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:plus",
          class: "icon-inline"
        }), vue.createTextVNode("\u6dfb\u52a0\u6e20\u9053 ") ]), U.value.length ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "aah-btn aah-btn-plain aah-btn-small",
          type: "button",
          onClick: restartWizard
        }, " \u8ddf\u7740\u5f15\u5bfc\u8d70 ")) ]) ]), vue.createElementVNode("section", hr, [ vue.createElementVNode("button", {
          type: "button",
          class: "ai-config-collapse",
          "aria-expanded": C.value,
          onClick: o[6] || (o[6] = e => C.value = !C.value)
        }, [ gr, vue.createVNode(vue.unref(vue$1.Icon), {
          icon: C.value ? "mdi:chevron-up" : "mdi:chevron-down",
          class: "icon-inline"
        }, null, 8, [ "icon" ]) ], 8, fr), C.value ? (vue.openBlock(), vue.createElementBlock("div", vr, [ vue.createElementVNode("label", yr, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[7] || (o[7] = e => vue.unref(t).settings.enabledForAsk = e),
          onChange: save
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(t).settings.enabledForAsk ] ]), br ]), vue.createElementVNode("label", wr, [ xr, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": o[8] || (o[8] = e => vue.unref(t).settings.adoptionStrategy = e),
          class: "aah-select",
          onChange: save
        }, Ar, 544), [ [ vue.vModelSelect, vue.unref(t).settings.adoptionStrategy ] ]) ]), vue.createElementVNode("label", Tr, [ Cr, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": o[9] || (o[9] = e => vue.unref(t).settings.defaultVisionChannelId = e),
          class: "aah-select",
          onChange: save
        }, [ Sr, (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(M.value, (e => {
          var t;
          return vue.openBlock(), vue.createElementBlock("option", {
            key: e.instance.channelId,
            value: e.instance.channelId
          }, vue.toDisplayString(null == (t = e.channel) ? void 0 : t.name) + vue.toDisplayString("switchable" === e.readiness.state ? "\uff08\u5f53\u524d\u6a21\u578b\u4e0d\u652f\u6301\u56fe\u7247\uff09" : ""), 9, Ir);
        })), 128)) ], 544), [ [ vue.vModelSelect, vue.unref(t).settings.defaultVisionChannelId ] ]), M.value.length ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("p", Er, " \u5df2\u6dfb\u52a0\u7684\u6e20\u9053\u90fd\u6ca1\u6709\u89c6\u89c9\u6a21\u578b\uff0c\u56fe\u7247\u9898\u4f1a\u9000\u56de\u7eaf\u6587\u672c\u3002 ")) ]), vue.createElementVNode("label", Ur, [ Pr, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": o[10] || (o[10] = e => vue.unref(t).settings.transport = e),
          class: "aah-select",
          onChange: save
        }, jr, 544), [ [ vue.vModelSelect, vue.unref(t).settings.transport ] ]), $r ]) ])) : vue.createCommentVNode("", true) ]) ]), H.value && P.value ? (vue.openBlock(), 
        vue.createElementBlock("section", zr, [ vue.createElementVNode("header", Mr, [ vue.createElementVNode("div", null, [ vue.createElementVNode("h4", null, vue.toDisplayString(H.value.name), 1), vue.createElementVNode("p", null, vue.toDisplayString(H.value.providerKind) + " \xb7 " + vue.toDisplayString(H.value.baseUrl), 1) ]), vue.createElementVNode("span", {
          class: vue.normalizeClass([ "aah-tag", (null == (d = P.value.credential) ? void 0 : d.value) ? "aah-tag-success" : "aah-tag-warning" ])
        }, vue.toDisplayString((null == (F = P.value.credential) ? void 0 : F.value) ? "\u53ef\u7528" : "\u5f85\u586b API Key"), 3) ]), vue.createElementVNode("div", Or, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(channelTags)(H.value), (e => (vue.openBlock(), vue.createElementBlock("span", {
          key: e.label,
          class: vue.normalizeClass([ "aah-tag", e.cls ])
        }, vue.toDisplayString(e.label), 3)))), 128)), "ready" === (null == (D = O.value) ? void 0 : D.state) ? (vue.openBlock(), 
        vue.createElementBlock("span", Fr, " \u5f53\u524d\u6a21\u578b\u53ef\u505a\u56fe\u7247\u9898 ")) : vue.createCommentVNode("", true), (G = H.value.id, 
        t.settings.customChannels.some((e => e.id === G)) ? (vue.openBlock(), vue.createElementBlock("span", Dr, "\u81ea\u5efa\u63a5\u53e3")) : vue.createCommentVNode("", true)) ]), vue.createElementVNode("label", Nr, [ Rr, vue.createElementVNode("input", {
          value: (null == (N = P.value.credential) ? void 0 : N.value) || "",
          class: "aah-input",
          type: "password",
          autocomplete: "off",
          onInput: o[11] || (o[11] = e => setCredential(q.value, e.target.value))
        }, null, 40, Br), vue.createElementVNode("p", Gr, [ vue.createTextVNode(vue.toDisplayString(H.value.keyHelp) + " ", 1), H.value.signupUrl ? (vue.openBlock(), 
        vue.createElementBlock("a", {
          key: 0,
          href: H.value.signupUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, " \u53bb\u83b7\u53d6 API Key ", 8, Vr)) : vue.createCommentVNode("", true) ]) ]), vue.createElementVNode("label", Kr, [ Wr, vue.createElementVNode("select", {
          class: "aah-select",
          value: P.value.modelId || H.value.defaultModelId,
          onChange: updateModel
        }, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(H.value.models, (e => (vue.openBlock(), vue.createElementBlock("option", {
          key: e.id,
          value: e.id
        }, vue.toDisplayString(e.label || e.id) + vue.toDisplayString(e.capabilities.image ? "\uff08\u652f\u6301\u56fe\u7247\uff09" : ""), 9, Jr)))), 128)) ], 40, Qr), "switchable" === (null == (R = O.value) ? void 0 : R.state) ? (vue.openBlock(), 
        vue.createElementBlock("p", Xr, [ vue.createTextVNode(" \u5f53\u524d\u6a21\u578b\u4e0d\u652f\u6301\u56fe\u7247\u9898\u3002 "), vue.createElementVNode("button", {
          type: "button",
          class: "ai-config-inline-action",
          onClick: useSuggestedVisionModel
        }, " \u5207\u6362\u5230 " + vue.toDisplayString(O.value.suggestModelId), 1) ])) : "unsupported" === (null == (B = O.value) ? void 0 : B.state) ? (vue.openBlock(), 
        vue.createElementBlock("p", Yr, " \u8be5\u6e20\u9053\u6ca1\u6709\u89c6\u89c9\u6a21\u578b\uff0c\u56fe\u7247\u9898\u9700\u53e6\u52a0\u4e00\u4e2a\u5e26\u300c\u53ef\u9009\u89c6\u89c9\u6a21\u578b\u300d\u7684\u6e20\u9053\u3002 ")) : vue.createCommentVNode("", true) ]), vue.createElementVNode("label", Zr, [ vue.createElementVNode("input", {
          type: "checkbox",
          checked: P.value.enabled,
          onChange: toggleEnabled
        }, null, 40, es), ts ]), "global" === H.value.region ? (vue.openBlock(), vue.createElementBlock("p", as, " \u8be5\u5e73\u53f0\u670d\u52a1\u5668\u5728\u5883\u5916\uff0c\u56fd\u5185\u7f51\u7edc\u901a\u5e38\u65e0\u6cd5\u76f4\u8fde\uff0c\u9700\u81ea\u5907\u4ee3\u7406\u540e\u518d\u4f7f\u7528\u3002 ")) : vue.unref(canDirectConnect)(H.value) ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("p", ns, " \u8be5\u6e20\u9053\u4e0d\u5728\u672c\u7248\u672c\u7684\u76f4\u8fde\u767d\u540d\u5355\u91cc\uff0c\u53ea\u80fd\u7ecf\u7231\u95ee\u7b54\u4e2d\u8f6c\u2014\u2014\u9700\u8981\u5148\u767b\u5f55\u3002 ")), vue.createElementVNode("div", rs, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain",
          type: "button",
          onClick: setDefault
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:star-outline",
          class: "icon-inline"
        }), vue.createTextVNode("\u8bbe\u4e3a\u9ed8\u8ba4 ") ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary",
          type: "button",
          disabled: testingFor(q.value),
          onClick: o[12] || (o[12] = e => vue.unref(t).testConfig(q.value))
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:connection",
          class: "icon-inline"
        }), vue.createTextVNode(vue.toDisplayString(testingFor(q.value) ? "\u6d4b\u8bd5\u4e2d..." : "\u6d4b\u8bd5\u8fde\u63a5"), 1) ], 8, ss) ]), messageFor(q.value) ? (vue.openBlock(), 
        vue.createElementBlock("div", is, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:information-outline",
          class: "alert-icon"
        }), vue.createElementVNode("span", null, vue.toDisplayString(messageFor(q.value)), 1) ])) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-danger aah-btn-small ai-config-instance-remove",
          type: "button",
          onClick: o[13] || (o[13] = e => S.value = {
            id: H.value.id,
            name: H.value.name
          })
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:delete-outline",
          class: "icon-inline"
        }), vue.createTextVNode("\u79fb\u9664\u8be5\u6e20\u9053 ") ]) ])) : (vue.openBlock(), vue.createElementBlock("section", os, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:robot-outline",
          class: "ai-config-empty-icon"
        }), vue.createElementVNode("p", ls, vue.toDisplayString(U.value.length ? "\u5728\u5de6\u4fa7\u9009\u4e00\u4e2a\u6e20\u9053\u8fdb\u884c\u914d\u7f6e" : "\u8fd8\u6ca1\u6709\u6e20\u9053\uff0c\u5148\u6dfb\u52a0\u4e00\u4e2a"), 1) ])) ])), T.value ? (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: 2,
          class: "modal-mask",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "ai-add-channel-title",
          onClick: o[17] || (o[17] = vue.withModifiers((e => T.value = false), [ "self" ]))
        }, [ vue.createElementVNode("div", cs, [ vue.createElementVNode("div", ps, [ us, vue.createElementVNode("button", {
          class: "modal-close",
          type: "button",
          "aria-label": "\u5173\u95ed",
          onClick: o[14] || (o[14] = e => T.value = false)
        }, "\xd7") ]), vue.createElementVNode("div", ds, [ vue.createElementVNode("div", ms, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(I.value, (e => (vue.openBlock(), 
        vue.createElementBlock("article", {
          key: e.id,
          class: vue.normalizeClass([ "ai-config-card", {
            recommended: e.recommended
          } ])
        }, [ vue.createElementVNode("div", hs, [ vue.createElementVNode("strong", null, vue.toDisplayString(e.name), 1) ]), vue.createElementVNode("div", fs, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(channelTags)(e), (e => (vue.openBlock(), 
        vue.createElementBlock("span", {
          key: e.label,
          class: vue.normalizeClass([ "aah-tag", e.cls ])
        }, vue.toDisplayString(e.label), 3)))), 128)) ]), e.promoText ? (vue.openBlock(), vue.createElementBlock("p", gs, vue.toDisplayString(e.promoText), 1)) : vue.createCommentVNode("", true), vue.createElementVNode("div", vs, [ e.signupUrl ? (vue.openBlock(), 
        vue.createElementBlock("a", {
          key: 0,
          class: "aah-btn aah-btn-small",
          href: e.signupUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, "\u53bb\u9886\u53d6", 8, ys)) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary aah-btn-small",
          type: "button",
          onClick: a => (e => {
            t.addChannel(e), q.value = e, T.value = false;
          })(e.id)
        }, "\u6dfb\u52a0", 8, bs) ]) ], 2)))), 128)) ]), I.value.length ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("p", ws, "\u5168\u90e8\u6e20\u9053\u90fd\u5df2\u6dfb\u52a0\u3002")) ]), vue.createElementVNode("div", xs, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain aah-btn-small",
          type: "button",
          disabled: vue.unref(t).catalogLoading,
          onClick: o[15] || (o[15] = e => vue.unref(t).loadCatalog())
        }, vue.toDisplayString(vue.unref(t).catalogLoading ? "\u5237\u65b0\u4e2d..." : "\u5237\u65b0\u5217\u8868"), 9, ks), vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          onClick: o[16] || (o[16] = e => T.value = false)
        }, "\u5173\u95ed") ]) ]) ])) : vue.createCommentVNode("", true), S.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 3,
          class: "modal-mask",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "ai-channel-delete-title",
          onClick: o[20] || (o[20] = vue.withModifiers((e => S.value = null), [ "self" ]))
        }, [ vue.createElementVNode("div", qs, [ vue.createElementVNode("div", _s, [ As, vue.createElementVNode("button", {
          class: "modal-close",
          type: "button",
          "aria-label": "\u5173\u95ed",
          onClick: o[18] || (o[18] = e => S.value = null)
        }, "\xd7") ]), vue.createElementVNode("div", Ts, [ vue.createElementVNode("p", Cs, " \u786e\u5b9a\u8981\u79fb\u9664\u6e20\u9053\u300c" + vue.toDisplayString(S.value.name) + "\u300d\u5417\uff1f\u4fdd\u5b58\u5728\u672c\u5730\u7684 API Key \u4f1a\u4e00\u5e76\u5220\u9664\u3002 ", 1) ]), vue.createElementVNode("div", Ss, [ vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          onClick: o[19] || (o[19] = e => S.value = null)
        }, "\u53d6\u6d88"), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-danger",
          type: "button",
          onClick: confirmDelete
        }, "\u79fb\u9664") ]) ]) ])) : vue.createCommentVNode("", true) ]);
      };
    }
  }), Es = {
    class: "settings-sidebar"
  }, Us = {
    class: "sidebar-header"
  }, Ps = {
    class: "settings-search-input-wrapper"
  }, Hs = {
    class: "sidebar-nav custom-scroll",
    role: "tablist",
    "aria-orientation": "vertical"
  }, Ls = [ "onClick", "aria-selected" ], js = {
    class: "sidebar-footer"
  }, $s = {
    class: "aah-alert aah-alert-info"
  }, zs = vue.createElementVNode("span", null, "\u914d\u7f6e\u81ea\u52a8\u4fdd\u5b58", -1), Ms = {
    class: "settings-content custom-scroll",
    role: "tabpanel"
  }, Os = {
    class: "settings-content-header"
  }, Fs = vue.createElementVNode("span", {
    class: "aah-tag aah-tag-success"
  }, "\u81ea\u52a8\u4fdd\u5b58", -1), Ds = {
    key: 0,
    class: "group-header"
  }, Ns = {
    class: "group-title"
  }, Rs = {
    key: 2,
    class: "aah-card settings-section settings-config-section"
  }, Bs = {
    key: 0,
    class: "empty-search"
  }, Gs = {
    class: "settings-empty-text"
  }, Vs = "ai ai\u8bbe\u7f6e \u6a21\u578b \u5e73\u53f0 api key base url \u51ed\u8bc1 \u8f85\u52a9\u7b54\u9898 \u91c7\u7eb3\u7b56\u7565 \u6d4b\u8bd5\u8fde\u63a5", Ks = vue.defineComponent({
    __name: "Base",
    setup(e) {
      const t = ce(), a = [ {
        id: "display",
        label: "\u663e\u793a\u8bbe\u7f6e",
        icon: "mdi:palette"
      }, {
        id: "system",
        label: "\u7cfb\u7edf\u8bbe\u7f6e",
        icon: "mdi:cog"
      }, {
        id: "ai",
        label: "AI\u8bbe\u7f6e",
        icon: "mdi:robot"
      }, {
        id: "hotkey",
        label: "\u5feb\u6377\u952e",
        icon: "mdi:keyboard"
      } ], o = vue.ref("display"), g = vue.ref(""), x = vue.computed((() => g.value.trim().length > 0)), normalizeSearchText = e => e.toLowerCase().replace(/\s+/g, ""), k = vue.ref(null), handleHotkeyKeydown = (e, t) => {
        if (e.preventDefault(), e.stopPropagation(), [ "Control", "Shift", "Alt", "Meta" ].includes(e.key)) return;
        const a = [];
        e.ctrlKey && a.push("Ctrl"), e.shiftKey && a.push("Shift"), e.altKey && a.push("Alt");
        let n = e.key;
        n = " " === n ? "Space" : e.code.startsWith("Key") ? e.code.replace("Key", "") : e.code.startsWith("Digit") ? e.code.replace("Digit", "") : e.code.startsWith("Arrow") ? e.code : e.key.toUpperCase(), 
        a.push(n);
        const r = a.join("+");
        t.value = r, k.value = null, msg(`\u5feb\u6377\u952e\u5df2\u8bbe\u7f6e\u4e3a: ${r}`, "success");
      }, startRecording = e => {
        k.value = e;
      }, q = vue.computed((() => {
        const e = g.value.trim().toLowerCase(), n = t.ConfigInput;
        if (x.value) return a.map((t => {
          if ("ai" === t.id) {
            const a = normalizeSearchText(e), n = normalizeSearchText(Vs), r = Vs.toLowerCase().includes(e) || n.includes(a) ? [ {
              type: "switch",
              label: "AI\u8bbe\u7f6e",
              name: "aiSettingsSearch",
              value: false,
              desc: Vs,
              options: []
            } ] : [];
            return {
              ...t,
              items: r
            };
          }
          const a = (n[t.id] || []).filter((t => t.label.toLowerCase().includes(e) || t.desc && t.desc.toLowerCase().includes(e)));
          return {
            ...t,
            items: a
          };
        })).filter((e => e.items.length > 0));
        const r = a.find((e => e.id === o.value));
        return r ? [ {
          ...r,
          items: n[r.id] || []
        } ] : [];
      })), A = vue.computed((() => a.find((e => e.id === o.value)) || a[0]));
      return vue.watch(t.app, (e => {
        t.setConfig(e);
      })), vue.watch(t.ConfigInput, (e => {
        for (let a in e) for (let n in e[a]) {
          let r = e[a][n];
          t.app[r.name] = r.value;
        }
        msg("\u914d\u7f6e\u4fee\u6539\u6210\u529f", "success"), t.app, t.setConfig(t.app);
      })), vue.onMounted((() => {
        t.activeSettingSection && (o.value = t.activeSettingSection, t.setActiveSettingSection(""));
      })), (e, t) => (vue.openBlock(), vue.createBlock(Ya, {
        class: "settings-page"
      }, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", {
          class: vue.normalizeClass([ "settings-layout", {
            "settings-layout-ai": !x.value && "ai" === o.value
          } ])
        }, [ vue.createElementVNode("aside", Es, [ vue.createElementVNode("div", Us, [ vue.createElementVNode("div", Ps, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:magnify",
          class: "search-icon"
        }), vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": t[0] || (t[0] = e => g.value = e),
          placeholder: "\u641c\u7d22\u8bbe\u7f6e...",
          class: "aah-input settings-search-input",
          "aria-label": "\u641c\u7d22\u8bbe\u7f6e"
        }, null, 512), [ [ vue.vModelText, g.value ] ]) ]) ]), vue.withDirectives(vue.createElementVNode("nav", Hs, [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(a, (e => vue.createElementVNode("button", {
          key: e.id,
          type: "button",
          class: vue.normalizeClass([ "nav-item", {
            active: o.value === e.id
          } ]),
          onClick: t => o.value = e.id,
          role: "tab",
          "aria-selected": o.value === e.id
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: e.icon,
          class: "nav-icon"
        }, null, 8, [ "icon" ]), vue.createElementVNode("span", null, vue.toDisplayString(e.label), 1) ], 10, Ls))), 64)) ], 512), [ [ vue.vShow, !x.value ] ]), vue.createElementVNode("div", js, [ vue.createElementVNode("div", $s, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:information",
          class: "alert-icon"
        }), zs ]) ]) ]), vue.createElementVNode("main", Ms, [ vue.createElementVNode("header", Os, [ vue.createElementVNode("div", null, [ vue.createElementVNode("h2", null, vue.toDisplayString(x.value ? "\u641c\u7d22\u8bbe\u7f6e" : A.value.label), 1), vue.createElementVNode("p", null, vue.toDisplayString(x.value ? `\u6b63\u5728\u641c\u7d22\u201c${g.value}\u201d` : "\u4fee\u6539\u540e\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u672c\u5730\u7f13\u5b58"), 1) ]), Fs ]), (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(q.value, (e => (vue.openBlock(), vue.createElementBlock("div", {
          key: e.id,
          class: "setting-group"
        }, [ x.value ? (vue.openBlock(), vue.createElementBlock("div", Ds, [ vue.createElementVNode("h3", Ns, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: e.icon,
          class: "icon-inline"
        }, null, 8, [ "icon" ]), vue.createTextVNode(" " + vue.toDisplayString(e.label), 1) ]) ])) : vue.createCommentVNode("", true), "ai" === e.id ? (vue.openBlock(), 
        vue.createBlock(Is, {
          key: 1
        })) : (vue.openBlock(), vue.createElementBlock("div", Rs, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.items, ((e, t) => (vue.openBlock(), vue.createBlock(qn, {
          key: t,
          item: e,
          "recording-hotkey": k.value,
          onStartRecording: startRecording,
          onHotkeyKeydown: handleHotkeyKeydown
        }, null, 8, [ "item", "recording-hotkey" ])))), 128)) ])) ])))), 128)), x.value && 0 === q.value.length ? (vue.openBlock(), 
        vue.createElementBlock("div", Bs, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:magnify-close",
          class: "settings-empty-icon"
        }), vue.createElementVNode("p", Gs, '\u672a\u627e\u5230\u4e0e "' + vue.toDisplayString(g.value) + '" \u76f8\u5173\u7684\u8bbe\u7f6e', 1) ])) : vue.createCommentVNode("", true) ]) ], 2) ])),
        _: 1
      }));
    }
  }), Ws = {
    class: "ask-page"
  }, Qs = {
    key: 0,
    class: "ask-toolbar"
  }, Js = {
    class: "ask-toolbar__primary"
  }, Xs = {
    class: "ask-toolbar__progress"
  }, Ys = {
    class: "ask-progress-text"
  }, Zs = {
    class: "ask-progress-bar"
  }, ei = {
    class: "ask-toolbar__actions"
  }, ti = {
    key: 1,
    class: "ask-nav",
    open: ""
  }, ai = vue.createElementVNode("summary", null, "\u9898\u76ee\u5bfc\u822a", -1), ni = vue.createElementVNode("div", {
    class: "ask-nav-legend"
  }, [ vue.createElementVNode("span", {
    class: "legend-item legend-current"
  }, [ vue.createElementVNode("i"), vue.createTextVNode("\u5f53\u524d") ]), vue.createElementVNode("span", {
    class: "legend-item legend-done"
  }, [ vue.createElementVNode("i"), vue.createTextVNode("\u5df2\u7b54") ]), vue.createElementVNode("span", {
    class: "legend-item legend-error"
  }, [ vue.createElementVNode("i"), vue.createTextVNode("\u65e0\u7b54\u6848") ]), vue.createElementVNode("span", {
    class: "legend-item legend-unanswered"
  }, [ vue.createElementVNode("i"), vue.createTextVNode("\u672a\u7b54") ]) ], -1), ri = {
    class: "ask-nav-grid"
  }, si = [ "onClick" ], ii = {
    key: 2,
    class: "ask-card"
  }, oi = {
    class: "ask-card__header"
  }, li = vue.createElementVNode("h3", {
    class: "ask-card__title"
  }, "\u5f53\u524d\u9898\u76ee", -1), ci = {
    class: "ask-card__actions"
  }, pi = {
    class: "ask-card__body"
  }, ui = [ "innerHTML" ], di = [ "innerHTML" ], mi = {
    class: "reading-questions"
  }, hi = [ "innerHTML" ], fi = [ "innerHTML" ], gi = [ "innerHTML" ], vi = [ "innerHTML" ], yi = {
    key: 0
  }, bi = {
    class: "ask-match-table"
  }, wi = [ "innerHTML" ], xi = [ "value" ], ki = {
    key: 2,
    class: "ask-form-note ask-form-note--success"
  }, qi = {
    key: 3,
    class: "ask-form-note ask-form-note--danger"
  }, _i = {
    key: 3,
    class: "ask-card"
  }, Ai = {
    class: "ask-loading"
  }, Ti = {
    key: 4,
    class: "ask-card"
  }, Ci = vue.createElementVNode("header", {
    class: "ask-card__header"
  }, [ vue.createElementVNode("h3", {
    class: "ask-card__title"
  }, "\u7b54\u6848 / AI") ], -1), Si = {
    class: "ask-card__body"
  }, Ii = {
    class: "answer-header"
  }, Ei = {
    class: "aah-tag aah-tag-primary"
  }, Ui = {
    key: 0,
    class: "answer-meta"
  }, Pi = {
    key: 0
  }, Hi = [ "innerHTML" ], Li = {
    key: 1
  }, ji = {
    key: 0
  }, $i = [ "innerHTML" ], zi = [ "innerHTML" ], Mi = {
    key: 1,
    class: "answer-block ai-preview-block"
  }, Oi = {
    class: "answer-header"
  }, Fi = vue.createElementVNode("span", {
    class: "aah-tag aah-tag-warning"
  }, "AI \u5efa\u8bae", -1), Di = {
    class: "answer-meta"
  }, Ni = {
    class: "ask-preview-actions"
  }, Ri = {
    key: 2,
    class: "aah-alert aah-alert-warning"
  }, Bi = {
    key: 3,
    class: "answer-block ai-answer-block"
  }, Gi = {
    class: "ai-answer-divider"
  }, Vi = {
    class: "ai-answer-title"
  }, Ki = {
    key: 0,
    class: "ai-streaming-tag"
  }, Wi = vue.createElementVNode("span", {
    class: "ai-dot"
  }, null, -1), Qi = vue.createElementVNode("span", {
    class: "ai-dot"
  }, null, -1), Ji = vue.createElementVNode("span", {
    class: "ai-dot"
  }, null, -1), Xi = [ "innerHTML" ], Yi = {
    key: 1,
    class: "ai-stream-placeholder"
  }, Zi = {
    key: 5,
    class: "ask-empty"
  }, eo = vue.createElementVNode("p", null, "\u6682\u65e0\u9898\u76ee\u6570\u636e", -1), to = {
    class: "modal-panel"
  }, ao = {
    class: "modal-header"
  }, no = vue.createElementVNode("h3", {
    id: "settings-title",
    class: "modal-title"
  }, "\u7b54\u9898\u8bbe\u7f6e", -1), ro = {
    class: "modal-body"
  }, so = {
    class: "ask-settings"
  }, io = {
    class: "native-checkbox"
  }, oo = vue.createElementVNode("span", null, "\u8df3\u8fc7\u5df2\u4f5c\u7b54", -1), lo = {
    class: "native-checkbox"
  }, co = vue.createElementVNode("span", null, "\u81ea\u52a8\u7b54\u9898", -1), po = {
    class: "native-checkbox"
  }, uo = vue.createElementVNode("span", null, "\u81ea\u52a8\u8df3\u8f6c", -1), mo = {
    class: "native-checkbox"
  }, ho = vue.createElementVNode("span", null, "\u65e0\u7b54\u6848\u968f\u673a\u7b54\u9898", -1), fo = {
    class: "native-checkbox"
  }, go = vue.createElementVNode("span", null, [ vue.createTextVNode("\u4f7f\u7528AI\u8f85\u52a9\u7b54\u9898 "), vue.createElementVNode("small", null, "(AI\u6b63\u786e\u7387\u4e0d\u4fdd\u8bc1)") ], -1), vo = {
    key: 0,
    class: "aah-alert aah-alert-warning"
  }, yo = {
    class: "range-row"
  }, bo = [ "min" ], wo = {
    class: "aah-alert aah-alert-warning"
  }, xo = {
    class: "range-row"
  }, ko = [ "min" ], qo = {
    key: 0,
    class: "ask-tags"
  }, _o = {
    class: "modal-panel"
  }, Ao = {
    class: "modal-header"
  }, To = vue.createElementVNode("h3", {
    id: "tips-title",
    class: "modal-title"
  }, "\u4f7f\u7528\u63d0\u793a", -1), Co = {
    class: "modal-body"
  }, So = {
    class: "info-banner ask-info"
  }, Io = [ "innerHTML" ], Eo = {
    class: "ask-types"
  }, Uo = vue.createElementVNode("summary", null, "\u67e5\u770b\u652f\u6301\u9898\u578b", -1), Po = [ "innerHTML" ], Ho = vue.defineComponent({
    __name: "Ask",
    setup(e) {
      const t = Aa(), a = ce(), u = _a(), g = vue.ref(false), x = vue.ref(false), handleKeydown = e => {
        "Escape" === e.key && (g.value && (g.value = false), x.value && (x.value = false));
      };
      vue.watch([ g, x ], (([e, t]) => {
        e || t ? document.addEventListener("keydown", handleKeydown) : document.removeEventListener("keydown", handleKeydown);
      }));
      const q = vue.computed((() => t.aiLoadingIndex === t.questionInx)), S = vue.computed((() => Boolean(t.current && (t.current.aiMsg || q.value)))), getOptionIndex = e => String.fromCharCode(65 + e);
      vue.watch(a.app, (e => {
        a.setConfig(e);
      }));
      const watchAutoNext = () => {
        Cache.set("autoNext", t.autoNext);
      }, watchSkipFinish = () => {
        Cache.set("skipFinish", t.skipFinish);
      }, watchAutoAnswer = () => {
        Cache.set("autoAnswer", t.autoAnswer);
      }, watchRandomAnswer = () => {
        Cache.set("randomAnswer", t.randomAnswer);
      }, watchAskGpt = () => {
        msg("\u8bf7\u5148\u53bbAI\u641c\u9898\u9875\u9762\u6d4b\u8bd5AI\u662f\u5426\u53ef\u7528\uff0c\u518d\u542f\u7528\u7b54\u9898\uff0c\u7b54\u9898\u6b63\u786e\u7387\u65e0\u6cd5\u4fdd\u8bc1"), 
        u.settings.enabledForAsk = a.app.askGpt, u.saveSettings(), Cache.set("askGpt", a.app.askGpt);
      }, watchDelay = () => {
        Cache.set("delay", t.delay);
      }, watchOptionDelay = () => {
        t.optionDelay < t.optionMinDelay && (t.optionDelay = t.optionMinDelay), Cache.set("optionDelay", t.optionDelay);
        const e = t.rule;
        e && (e.optionDelay = t.optionDelay);
      };
      return (e, p) => (vue.openBlock(), vue.createBlock(Ya, null, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", Ws, [ vue.unref(t).current ? (vue.openBlock(), vue.createElementBlock("div", Qs, [ vue.createElementVNode("div", Js, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary",
          type: "button",
          onClick: p[0] || (p[0] = e => vue.unref(t).start ? vue.unref(t).pause() : vue.unref(t).toggleStart())
        }, vue.toDisplayString(vue.unref(t).start ? "\u6682\u505c\u7b54\u9898" : "\u5f00\u59cb\u7b54\u9898"), 1), vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          onClick: p[1] || (p[1] = e => vue.unref(t).restart())
        }, "\u91cd\u65b0\u7b54\u9898") ]), vue.createElementVNode("div", Xs, [ vue.createElementVNode("span", Ys, vue.toDisplayString(vue.unref(t).questionInx + 1) + " / " + vue.toDisplayString(vue.unref(t).questionList.length), 1), vue.createElementVNode("div", Zs, [ vue.createElementVNode("i", {
          style: vue.normalizeStyle({
            width: vue.unref(t).questionList.length ? (vue.unref(t).questionInx + 1) / vue.unref(t).questionList.length * 100 + "%" : "0%"
          })
        }, null, 4) ]) ]), vue.createElementVNode("div", ei, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: p[2] || (p[2] = e => x.value = true),
          "aria-label": "\u4f7f\u7528\u63d0\u793a"
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:information-outline"
        }) ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: p[3] || (p[3] = e => g.value = true),
          "aria-label": "\u7b54\u9898\u8bbe\u7f6e"
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:cog-outline"
        }) ]) ]) ])) : vue.createCommentVNode("", true), vue.unref(t).current ? (vue.openBlock(), vue.createElementBlock("details", ti, [ ai, ni, vue.createElementVNode("div", ri, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).questionList, ((e, a) => (vue.openBlock(), vue.createElementBlock("button", {
          key: a,
          type: "button",
          class: vue.normalizeClass([ "ask-nav-cell", [ a === vue.unref(t).questionInx ? "is-current" : "", 1 === e.status ? "is-done" : 2 === e.status ? "is-error" : "" ] ]),
          onClick: e => vue.unref(t).toQuestion(a)
        }, vue.toDisplayString(a + 1), 11, si)))), 128)) ]) ])) : vue.createCommentVNode("", true), vue.unref(t).current ? (vue.openBlock(), vue.createElementBlock("section", ii, [ vue.createElementVNode("header", oi, [ li, vue.createElementVNode("div", ci, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: p[4] || (p[4] = e => vue.unref(t).reAnswer(vue.unref(t).questionInx))
        }, "\u91cd\u7b54"), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: p[5] || (p[5] = e => vue.unref(t).aiAnswer(vue.unref(t).questionInx))
        }, "AI \u7b54\u9898") ]) ]), vue.createElementVNode("div", pi, [ "15" == vue.unref(t).current.type ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: 0
        }, [ vue.createElementVNode("div", {
          class: "aah_title",
          innerHTML: "[" + vue.unref(typeConvert)(vue.unref(t).current.type ?? "", false) + "]\u9605\u8bfb\u7406\u89e3"
        }, null, 8, ui), vue.createElementVNode("div", {
          class: "reading-passage",
          innerHTML: vue.unref(t).current.question
        }, null, 8, di), vue.createElementVNode("div", mi, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.options, ((e, a) => (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: a,
          class: "reading-sub-question"
        }, [ vue.createElementVNode("div", {
          class: "sub-question-title",
          innerHTML: a + 1 + ". " + e.question
        }, null, 8, hi), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((e, i) => (vue.openBlock(), vue.createElementBlock("p", {
          class: vue.normalizeClass([ "aah_options", {
            active: vue.unref(t).current.form && vue.unref(t).current.form.match && vue.unref(t).current.form.match[a] && vue.unref(t).current.form.match[a].includes(i)
          } ]),
          key: i,
          innerHTML: getOptionIndex(i) + ". " + e
        }, null, 10, fi)))), 128)) ])))), 128)) ]) ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: 1
        }, [ vue.createElementVNode("div", {
          class: "aah_title",
          innerHTML: "[" + vue.unref(typeConvert)(vue.unref(t).current.type ?? "", false) + "]" + vue.unref(t).current.question
        }, null, 8, gi), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.options, ((e, a) => (vue.openBlock(), vue.createElementBlock("p", {
          class: vue.normalizeClass([ "aah_options", {
            active: vue.unref(t).current.form && vue.unref(t).current.form.match && vue.unref(t).current.form.match.includes(a)
          } ]),
          key: a,
          innerHTML: getOptionIndex(a) + ". " + e
        }, null, 10, vi)))), 128)), "24" == vue.unref(t).current.type ? (vue.openBlock(), vue.createElementBlock("div", yi, [ vue.createElementVNode("table", bi, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.match, ((e, a) => (vue.openBlock(), vue.createElementBlock("tr", {
          key: a
        }, [ vue.createElementVNode("td", {
          innerHTML: e
        }, null, 8, wi), vue.createElementVNode("td", null, [ vue.createElementVNode("select", null, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.selects[a], (e => (vue.openBlock(), 
        vue.createElementBlock("option", {
          key: e.value,
          value: e.value
        }, vue.toDisplayString(e.text), 9, xi)))), 128)) ]) ]) ])))), 128)) ]) ])) : vue.createCommentVNode("", true) ], 64)), vue.unref(t).current.form ? (vue.openBlock(), 
        vue.createElementBlock("p", ki, " \u91c7\u7528\u3010" + vue.toDisplayString(vue.unref(t).current.form.form) + "\u3011\u7684\u7b54\u6848 ", 1)) : vue.createCommentVNode("", true), "8" != vue.unref(t).current.type && vue.unref(t).current.type ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("p", qi, " \u5f53\u524d\u9898\u578b\u6682\u4e0d\u652f\u6301\uff0c\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005\u5427 ")) ]) ])) : vue.createCommentVNode("", true), vue.unref(t).loading ? (vue.openBlock(), 
        vue.createElementBlock("section", _i, [ vue.createElementVNode("div", Ai, vue.toDisplayString(vue.unref(t).loadingText), 1) ])) : vue.createCommentVNode("", true), vue.unref(t).current ? (vue.openBlock(), 
        vue.createElementBlock("section", Ti, [ Ci, vue.createElementVNode("div", Si, [ vue.unref(t).current.answer ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, {
          key: 0
        }, vue.renderList(vue.unref(t).current.answer, ((e, t) => (vue.openBlock(), vue.createElementBlock("div", {
          key: t,
          class: "answer-block"
        }, [ vue.createElementVNode("div", Ii, [ vue.createElementVNode("span", Ei, vue.toDisplayString(e.form), 1), e.duration ? (vue.openBlock(), vue.createElementBlock("span", Ui, vue.toDisplayString(e.duration) + "ms", 1)) : vue.createCommentVNode("", true) ]), "object" == typeof e.answer && e.answer ? (vue.openBlock(), 
        vue.createElementBlock("div", Pi, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: t,
            class: "answer-field-html",
            innerHTML: (a = "string" == typeof e ? e : String(e), createSafeMarkdownHtml(a ?? ""))
          }, null, 8, Hi);
          var a;
        })), 128)) ])) : (vue.openBlock(), vue.createElementBlock("div", Li, [ e.needLogin ? (vue.openBlock(), vue.createElementBlock("div", ji, [ vue.createElementVNode("span", {
          innerHTML: e.msg
        }, null, 8, $i), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small aah-btn-primary",
          type: "button",
          onClick: p[6] || (p[6] = e => vue.unref(a).setPage("system", "account"))
        }, "\u70b9\u51fb\u767b\u5f55") ])) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          innerHTML: e.answer ? e.answer : e.msg ?? "\u6682\u65e0\u7b54\u6848"
        }, null, 8, zi)) ])) ])))), 128)) : vue.createCommentVNode("", true), vue.unref(t).aiPreview && vue.unref(t).aiPreview.index === vue.unref(t).questionInx ? (vue.openBlock(), 
        vue.createElementBlock("div", Mi, [ vue.createElementVNode("div", Oi, [ Fi, vue.createElementVNode("span", Di, vue.toDisplayString(vue.unref(t).aiPreview.reason), 1) ]), (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).aiPreview.answer, ((e, t) => (vue.openBlock(), vue.createElementBlock("div", {
          class: "answer-field-html",
          key: t
        }, vue.toDisplayString(e), 1)))), 128)), vue.createElementVNode("div", Ni, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary aah-btn-small",
          type: "button",
          onClick: p[7] || (p[7] = e => vue.unref(t).confirmAiPreview())
        }, "\u786e\u8ba4\u586b\u5165"), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: p[8] || (p[8] = e => vue.unref(t).skipAiPreview())
        }, "\u8df3\u8fc7") ]) ])) : vue.createCommentVNode("", true), vue.unref(t).aiFailureMap[vue.unref(t).questionInx] ? (vue.openBlock(), 
        vue.createElementBlock("div", Ri, vue.toDisplayString(vue.unref(t).aiFailureMap[vue.unref(t).questionInx]), 1)) : vue.createCommentVNode("", true), S.value ? (vue.openBlock(), 
        vue.createElementBlock("div", Bi, [ vue.createElementVNode("div", Gi, [ vue.createElementVNode("span", Vi, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:sparkles",
          class: "ai-icon"
        }), vue.createTextVNode(" AI \u6df1\u5ea6\u89e3\u6790 ") ]), q.value ? (vue.openBlock(), vue.createElementBlock("span", Ki, [ Wi, Qi, Ji, vue.createTextVNode(" \u6b63\u5728\u751f\u6210... ") ])) : vue.createCommentVNode("", true) ]), vue.unref(t).current.aiMsg ? (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: 0,
          innerHTML: vue.unref(t).currentAiMd,
          class: "ai-answer-markdown"
        }, null, 8, Xi)) : (vue.openBlock(), vue.createElementBlock("div", Yi, " AI \u6b63\u5728\u601d\u8003\uff0c\u6d41\u5f0f\u5185\u5bb9\u4f1a\u5b9e\u65f6\u586b\u5145\uff0c\u8bf7\u7a0d\u5019... ")) ])) : vue.createCommentVNode("", true) ]) ])) : vue.createCommentVNode("", true), vue.unref(t).current ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("div", Zi, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:file-edit",
          class: "ask-empty__icon"
        }), eo ])) ]), g.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "modal-mask",
          onClick: p[17] || (p[17] = vue.withModifiers((e => g.value = false), [ "self" ])),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "settings-title"
        }, [ vue.createElementVNode("div", to, [ vue.createElementVNode("div", ao, [ no, vue.createElementVNode("button", {
          class: "modal-close",
          onClick: p[9] || (p[9] = e => g.value = false),
          "aria-label": "\u5173\u95ed\u8bbe\u7f6e"
        }, "\xd7") ]), vue.createElementVNode("div", ro, [ vue.createElementVNode("div", so, [ vue.createElementVNode("label", io, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[10] || (p[10] = e => vue.unref(t).skipFinish = e),
          onChange: watchSkipFinish
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(t).skipFinish ] ]), oo ]), vue.createElementVNode("label", lo, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[11] || (p[11] = e => vue.unref(t).autoAnswer = e),
          onChange: watchAutoAnswer
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(t).autoAnswer ] ]), co ]), vue.createElementVNode("label", po, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[12] || (p[12] = e => vue.unref(t).autoNext = e),
          onChange: watchAutoNext
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(t).autoNext ] ]), uo ]), vue.createElementVNode("label", mo, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[13] || (p[13] = e => vue.unref(t).randomAnswer = e),
          onChange: watchRandomAnswer
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(t).randomAnswer ] ]), ho ]), vue.createElementVNode("label", fo, [ vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[14] || (p[14] = e => vue.unref(a).app.askGpt = e),
          onChange: watchAskGpt
        }, null, 544), [ [ vue.vModelCheckbox, vue.unref(a).app.askGpt ] ]), go ]), vue.unref(t).minDelay > 0 ? (vue.openBlock(), vue.createElementBlock("div", vo, " \u7531\u4e8e\u89c4\u5219\u9650\u5236\uff0c\u5f53\u524d\u5e73\u53f0\u7b54\u9898\u95f4\u9694\u6700\u5c0f\u4e3a " + vue.toDisplayString(vue.unref(t).minDelay) + "ms ", 1)) : vue.createCommentVNode("", true), vue.createElementVNode("div", yo, [ vue.createElementVNode("label", null, "\u95f4\u9694\uff08" + vue.toDisplayString(vue.unref(t).delay) + "ms\uff09", 1), vue.withDirectives(vue.createElementVNode("input", {
          type: "range",
          min: vue.unref(t).minDelay,
          max: 5e3,
          step: "100",
          "onUpdate:modelValue": p[15] || (p[15] = e => vue.unref(t).delay = e),
          onInput: watchDelay
        }, null, 40, bo), [ [ vue.vModelText, vue.unref(t).delay, void 0, {
          number: true
        } ] ]) ]), vue.unref(t).optionMinDelay > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: 1
        }, [ vue.createElementVNode("div", wo, " \u5f53\u524d\u5e73\u53f0\u591a\u9009\u9898\u6bcf\u9009\u4e00\u9879\u90fd\u4f1a\u8bf7\u6c42\u63a5\u53e3\uff0c\u9010\u9879\u70b9\u51fb\u95f4\u9694\u6700\u5c0f\u4e3a " + vue.toDisplayString(vue.unref(t).optionMinDelay) + "ms\uff0c\u8fc7\u5feb\u6613\u89e6\u53d1 403 ", 1), vue.createElementVNode("div", xo, [ vue.createElementVNode("label", null, "\u591a\u9009\u9010\u9879\u95f4\u9694\uff08" + vue.toDisplayString(vue.unref(t).optionDelay) + "ms\uff09", 1), vue.withDirectives(vue.createElementVNode("input", {
          type: "range",
          min: vue.unref(t).optionMinDelay,
          max: 8e3,
          step: "500",
          "onUpdate:modelValue": p[16] || (p[16] = e => vue.unref(t).optionDelay = e),
          onInput: watchOptionDelay
        }, null, 40, ko), [ [ vue.vModelText, vue.unref(t).optionDelay, void 0, {
          number: true
        } ] ]) ]) ], 64)) : vue.createCommentVNode("", true) ]), vue.unref(t).formMap ? (vue.openBlock(), vue.createElementBlock("div", qo, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).formMap, ((e, t) => (vue.openBlock(), 
        vue.createElementBlock("span", {
          class: "aah-tag",
          key: t
        }, vue.toDisplayString(t) + ":" + vue.toDisplayString(e) + " \u6b21", 1)))), 128)) ])) : vue.createCommentVNode("", true) ]) ]) ])) : vue.createCommentVNode("", true), x.value ? (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: 1,
          class: "modal-mask",
          onClick: p[19] || (p[19] = vue.withModifiers((e => x.value = false), [ "self" ])),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "tips-title"
        }, [ vue.createElementVNode("div", _o, [ vue.createElementVNode("div", Ao, [ To, vue.createElementVNode("button", {
          class: "modal-close",
          onClick: p[18] || (p[18] = e => x.value = false),
          "aria-label": "\u5173\u95ed\u63d0\u793a"
        }, "\xd7") ]), vue.createElementVNode("div", Co, [ vue.createElementVNode("div", So, [ vue.createElementVNode("div", {
          class: "info-body",
          innerHTML: vue.unref(t).tipsMd
        }, null, 8, Io), vue.createElementVNode("details", Eo, [ Uo, vue.createElementVNode("div", {
          innerHTML: vue.unref(t).typesMd
        }, null, 8, Po) ]) ]) ]) ]) ])) : vue.createCommentVNode("", true) ])),
        _: 1
      }));
    }
  }), Lo = {
    class: "modal-panel"
  }, jo = {
    class: "modal-header"
  }, $o = {
    class: "modal-body"
  }, zo = {
    class: "form-row"
  }, Mo = vue.createElementVNode("label", null, "\u9898\u578b", -1), Oo = [ "value" ], Fo = {
    class: "form-row"
  }, Do = vue.createElementVNode("label", null, "\u9898\u5e72", -1), No = {
    key: 0,
    class: "form-row"
  }, Ro = vue.createElementVNode("label", null, "\u9009\u9879", -1), Bo = {
    class: "option-list"
  }, Go = [ "onClick" ], Vo = [ "onUpdate:modelValue" ], Ko = [ "onClick" ], Wo = {
    key: 1,
    class: "form-row"
  }, Qo = vue.createElementVNode("label", null, "\u7b54\u6848", -1), Jo = {
    class: "option-list"
  }, Xo = [ "onUpdate:modelValue" ], Yo = [ "onClick" ], Zo = vue.defineComponent({
    __name: "QuestionEdit",
    props: {
      ques: {},
      visible: {
        type: Boolean
      }
    },
    emits: [ "handleClose" ],
    setup(e, {emit: t}) {
      const a = e, o = vue.ref(a.visible);
      vue.watch((() => a.visible), (e => {
        o.value = e;
      }));
      const u = t, closeDialog = () => {
        o.value = false, u("handleClose");
      }, handleCancel = () => {
        closeDialog();
      }, handleSave = () => {
        Answer.cacheAnswer(a.ques), Cache.matchRemove(a.ques.key), msg("\u9898\u76ee\u4fee\u6539\u6210\u529f", "success"), 
        closeDialog();
      }, handleDelete = e => {
        a.ques.options.splice(e, 1), a.ques.answer.includes(a.ques.options[e]) && (a.ques.answer = a.ques.answer.filter((t => t !== a.ques.options[e])));
      }, handleAdd = () => {
        a.ques.options.push("");
      };
      return (e, t) => {
        var p;
        return o.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "modal-mask",
          onClick: vue.withModifiers(handleCancel, [ "self" ])
        }, [ vue.createElementVNode("div", Lo, [ vue.createElementVNode("div", jo, [ vue.createElementVNode("h3", null, "\u9898\u76ee\u7f16\u8f91 [" + vue.toDisplayString(null == (p = e.ques) ? void 0 : p.type) + "]", 1), vue.createElementVNode("button", {
          class: "modal-close",
          type: "button",
          onClick: handleCancel
        }, "\xd7") ]), vue.createElementVNode("div", $o, [ vue.createElementVNode("div", zo, [ Mo, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": t[0] || (t[0] = t => e.ques.type = t),
          class: "base-select"
        }, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(ae), ((e, t) => (vue.openBlock(), vue.createElementBlock("option", {
          key: e,
          value: e
        }, vue.toDisplayString(t), 9, Oo)))), 128)) ], 512), [ [ vue.vModelSelect, e.ques.type ] ]) ]), vue.createElementVNode("div", Fo, [ Do, vue.withDirectives(vue.createElementVNode("textarea", {
          "onUpdate:modelValue": t[1] || (t[1] = t => e.ques.question = t),
          class: "base-input",
          rows: "5"
        }, null, 512), [ [ vue.vModelText, e.ques.question ] ]) ]), e.ques.options && Array.isArray(e.ques.options) && e.ques.options.length > 0 ? (vue.openBlock(), 
        vue.createElementBlock("div", No, [ Ro, vue.createElementVNode("div", Bo, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.ques.options, ((t, o) => (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: o,
          class: "option-row"
        }, [ vue.createElementVNode("button", {
          type: "button",
          class: vue.normalizeClass([ "option-selector", {
            active: e.ques.answer.includes(t)
          } ]),
          onClick: e => (e => {
            a.ques.answer = a.ques.answer.includes(e) ? a.ques.answer.filter((t => t !== e)) : [ ...a.ques.answer, e ], 
            a.ques.answer.sort(((e, t) => a.ques.options.indexOf(e) - a.ques.options.indexOf(t)));
          })(t)
        }, vue.toDisplayString(String.fromCharCode(65 + o)), 11, Go), vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": t => e.ques.options[o] = t,
          class: "base-input flex-grow"
        }, null, 8, Vo), [ [ vue.vModelText, e.ques.options[o] ] ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: e => 0 !== o ? handleDelete(o) : handleAdd()
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: 0 !== o ? "mdi:minus" : "mdi:plus"
        }, null, 8, [ "icon" ]) ], 8, Ko) ])))), 128)) ]) ])) : Array.isArray(e.ques.answer) && 0 === e.ques.options.length ? (vue.openBlock(), 
        vue.createElementBlock("div", Wo, [ Qo, vue.createElementVNode("div", Jo, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.ques.answer, ((t, a) => (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: a,
          class: "option-row"
        }, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": t => e.ques.answer[a] = t,
          class: "base-input flex-grow"
        }, null, 8, Xo), [ [ vue.vModelText, e.ques.answer[a] ] ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: e => 0 !== a ? handleDelete(a) : handleAdd()
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: 0 !== a ? "mdi:minus" : "mdi:plus"
        }, null, 8, [ "icon" ]) ], 8, Yo) ])))), 128)) ]) ])) : vue.createCommentVNode("", true) ]), vue.createElementVNode("div", {
          class: "modal-footer"
        }, [ vue.createElementVNode("button", {
          class: "aah-btn",
          type: "button",
          onClick: handleCancel
        }, "\u53d6\u6d88"), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary",
          type: "button",
          onClick: handleSave
        }, "\u4fdd\u5b58") ]) ]) ])) : vue.createCommentVNode("", true);
      };
    }
  }), el = {
    class: "modal-panel modal-panel-large"
  }, tl = vue.createElementVNode("h3", null, "\u9605\u8bfb\u7406\u89e3\u9898\u76ee\u7f16\u8f91", -1), al = {
    class: "modal-body"
  }, nl = {
    class: "reading-form-section"
  }, rl = {
    class: "reading-section-header"
  }, sl = vue.createElementVNode("h4", null, "\u9605\u8bfb\u6750\u6599", -1), il = {
    class: "form-row"
  }, ol = vue.createElementVNode("label", null, "\u9898\u5e72\u5185\u5bb9", -1), ll = {
    class: "reading-form-section"
  }, cl = {
    class: "reading-section-header"
  }, pl = vue.createElementVNode("h4", null, "\u5b50\u9898\u76ee\u5217\u8868", -1), ul = {
    class: "reading-sub-questions-editor"
  }, dl = {
    class: "reading-sub-question-header"
  }, ml = {
    class: "reading-sub-question-number"
  }, hl = [ "onUpdate:modelValue" ], fl = [ "value" ], gl = [ "onClick", "disabled" ], vl = {
    class: "form-row"
  }, yl = vue.createElementVNode("label", null, "\u9898\u76ee\u5185\u5bb9", -1), bl = [ "onUpdate:modelValue", "placeholder" ], wl = {
    key: 0,
    class: "form-row"
  }, xl = vue.createElementVNode("label", null, "\u9009\u9879\u8bbe\u7f6e", -1), kl = {
    class: "option-list"
  }, ql = [ "onClick" ], _l = [ "onUpdate:modelValue", "placeholder" ], Al = [ "onClick" ], Tl = {
    key: 1,
    class: "form-row"
  }, Cl = vue.createElementVNode("label", null, "\u53c2\u8003\u7b54\u6848", -1), Sl = {
    class: "reading-answer-list"
  }, Il = [ "onUpdate:modelValue", "placeholder" ], El = [ "onClick" ], Ul = vue.defineComponent({
    __name: "ReadingComprehensionEdit",
    props: {
      ques: {},
      visible: {
        type: Boolean
      }
    },
    emits: [ "handleClose" ],
    setup(e, {emit: t}) {
      const a = e, o = t, u = vue.ref(a.visible), d = vue.ref(JSON.parse(JSON.stringify(a.ques || {})));
      vue.watch((() => a.visible), (e => {
        u.value = e, e && a.ques && (d.value = JSON.parse(JSON.stringify(a.ques)), d.value.options || (d.value.options = []), 
        d.value.options.forEach((e => {
          e.answer || (e.answer = []), e.options || (e.options = []), e.type || (e.type = "0");
        })));
      }));
      const closeDialog = () => {
        u.value = false, o("handleClose");
      }, handleCancel = () => {
        closeDialog();
      }, handleSave = () => {
        if (d.value.question.trim()) if (0 !== d.value.options.length) {
          for (let e = 0; e < d.value.options.length; e++) {
            const t = d.value.options[e];
            if (!t.question.trim()) return void msg(`\u7b2c ${e + 1} \u9898\u7684\u9898\u76ee\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a`, "error");
            if ([ "0", "1" ].includes(t.type) && t.options.length < 2) return void msg(`\u7b2c ${e + 1} \u9898\u81f3\u5c11\u9700\u89812\u4e2a\u9009\u9879`, "error");
            if (0 === t.answer.length) return void msg(`\u7b2c ${e + 1} \u9898\u5fc5\u987b\u8bbe\u7f6e\u7b54\u6848`, "error");
          }
          Object.assign(a.ques, d.value), Answer.cacheAnswer(a.ques), Cache.matchRemove(a.ques.key), 
          msg("\u9605\u8bfb\u7406\u89e3\u9898\u76ee\u4fee\u6539\u6210\u529f", "success"), 
          closeDialog();
        } else msg("\u81f3\u5c11\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5b50\u9898\u76ee", "error"); else msg("\u8bf7\u586b\u5199\u9605\u8bfb\u6750\u6599\u5185\u5bb9", "error");
      }, addSubQuestion = () => {
        d.value.options.push({
          type: "0",
          question: "",
          options: [ "", "" ],
          answer: []
        });
      };
      return (e, t) => u.value ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "modal-mask",
        onClick: vue.withModifiers(handleCancel, [ "self" ])
      }, [ vue.createElementVNode("div", el, [ vue.createElementVNode("div", {
        class: "modal-header"
      }, [ tl, vue.createElementVNode("button", {
        class: "modal-close",
        type: "button",
        onClick: handleCancel
      }, "\xd7") ]), vue.createElementVNode("div", al, [ vue.createElementVNode("div", nl, [ vue.createElementVNode("div", rl, [ vue.createVNode(vue.unref(vue$1.Icon), {
        icon: "mdi:book-open-variant",
        class: "reading-section-icon"
      }), sl ]), vue.createElementVNode("div", il, [ ol, vue.withDirectives(vue.createElementVNode("textarea", {
        "onUpdate:modelValue": t[0] || (t[0] = e => d.value.question = e),
        class: "base-input",
        rows: "8",
        placeholder: "\u8bf7\u8f93\u5165\u9605\u8bfb\u7406\u89e3\u7684\u4e3b\u8981\u6750\u6599\u5185\u5bb9..."
      }, "\n            ", 512), [ [ vue.vModelText, d.value.question ] ]) ]) ]), vue.createElementVNode("div", ll, [ vue.createElementVNode("div", cl, [ vue.createVNode(vue.unref(vue$1.Icon), {
        icon: "mdi:help-circle",
        class: "reading-section-icon"
      }), pl, vue.createElementVNode("button", {
        class: "aah-btn aah-btn-primary aah-btn-small",
        type: "button",
        onClick: addSubQuestion
      }, [ vue.createVNode(vue.unref(vue$1.Icon), {
        icon: "mdi:plus"
      }), vue.createTextVNode(" \u6dfb\u52a0\u9898\u76ee ") ]) ]), vue.createElementVNode("div", ul, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(d.value.options, ((e, t) => (vue.openBlock(), 
      vue.createElementBlock("div", {
        key: t,
        class: "reading-sub-question-editor"
      }, [ vue.createElementVNode("div", dl, [ vue.createElementVNode("span", ml, vue.toDisplayString(t + 1), 1), vue.withDirectives(vue.createElementVNode("select", {
        "onUpdate:modelValue": t => e.type = t,
        class: "base-select reading-base-select-small"
      }, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(ae), ((e, t) => (vue.openBlock(), vue.createElementBlock("option", {
        key: e,
        value: e
      }, vue.toDisplayString(t), 9, fl)))), 128)) ], 8, hl), [ [ vue.vModelSelect, e.type ] ]), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-danger aah-btn-small",
        type: "button",
        onClick: e => (e => {
          d.value.options.length > 1 && d.value.options.splice(e, 1);
        })(t),
        disabled: d.value.options.length <= 1
      }, " \u5220\u9664 ", 8, gl) ]), vue.createElementVNode("div", vl, [ yl, vue.withDirectives(vue.createElementVNode("textarea", {
        "onUpdate:modelValue": t => e.question = t,
        class: "base-input",
        rows: "3",
        placeholder: `\u8bf7\u8f93\u5165\u7b2c ${t + 1} \u9898\u7684\u9898\u76ee\u5185\u5bb9...`
      }, "\n                ", 8, bl), [ [ vue.vModelText, e.question ] ]) ]), [ "0", "1" ].includes(e.type) ? (vue.openBlock(), 
      vue.createElementBlock("div", wl, [ xl, vue.createElementVNode("div", kl, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((a, o) => (vue.openBlock(), 
      vue.createElementBlock("div", {
        key: o,
        class: "option-row"
      }, [ vue.createElementVNode("button", {
        type: "button",
        class: vue.normalizeClass([ "option-selector", {
          active: e.answer.includes(a)
        } ]),
        onClick: e => ((e, t) => {
          const a = d.value.options[e], n = a.answer.indexOf(t);
          n > -1 ? a.answer.splice(n, 1) : "0" === a.type ? a.answer = [ t ] : (a.answer.push(t), 
          a.answer.sort(((e, t) => a.options.indexOf(e) - a.options.indexOf(t))));
        })(t, a)
      }, vue.toDisplayString(String.fromCharCode(65 + o)), 11, ql), vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": t => e.options[o] = t,
        class: "base-input flex-grow",
        placeholder: `\u9009\u9879 ${String.fromCharCode(65 + o)}`
      }, null, 8, _l), [ [ vue.vModelText, e.options[o] ] ]), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-small",
        type: "button",
        onClick: e => {
          return 0 === o ? (a = t, void d.value.options[a].options.push("")) : ((e, t) => {
            const a = d.value.options[e], n = a.options[t];
            a.options.splice(t, 1);
            const r = a.answer.indexOf(n);
            r > -1 && a.answer.splice(r, 1);
          })(t, o);
          var a;
        }
      }, [ vue.createVNode(vue.unref(vue$1.Icon), {
        icon: 0 === o ? "mdi:plus" : "mdi:minus"
      }, null, 8, [ "icon" ]) ], 8, Al) ])))), 128)) ]) ])) : (vue.openBlock(), vue.createElementBlock("div", Tl, [ Cl, vue.createElementVNode("div", Sl, [ (vue.openBlock(true), 
      vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((a, s) => (vue.openBlock(), vue.createElementBlock("div", {
        key: s,
        class: "reading-answer-row"
      }, [ vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": t => e.answer[s] = t,
        class: "base-input flex-grow",
        placeholder: `\u7b54\u6848 ${s + 1}`
      }, null, 8, Il), [ [ vue.vModelText, e.answer[s] ] ]), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-small",
        type: "button",
        onClick: e => {
          return 0 === s ? (a = t, void d.value.options[a].answer.push("")) : ((e, t) => {
            d.value.options[e].answer.length > 1 && d.value.options[e].answer.splice(t, 1);
          })(t, s);
          var a;
        }
      }, [ vue.createVNode(vue.unref(vue$1.Icon), {
        icon: 0 === s ? "mdi:plus" : "mdi:minus"
      }, null, 8, [ "icon" ]) ], 8, El) ])))), 128)) ]) ])) ])))), 128)) ]) ]) ]), vue.createElementVNode("div", {
        class: "modal-footer"
      }, [ vue.createElementVNode("button", {
        class: "aah-btn",
        type: "button",
        onClick: handleCancel
      }, "\u53d6\u6d88"), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-primary",
        type: "button",
        onClick: handleSave
      }, "\u4fdd\u5b58\u4fee\u6539") ]) ]) ])) : vue.createCommentVNode("", true);
    }
  });

  const Pl = {
    class: "question-page"
  }, Hl = vue.createElementVNode("div", {
    class: "watermark-bg"
  }, [ vue.createElementVNode("span", null, "AiAskHelper"), vue.createElementVNode("span", null, "\u7231\u95ee\u7b54\u52a9\u624b") ], -1), Ll = {
    class: "qc-toolbar"
  }, jl = {
    class: "qc-toolbar-info"
  }, $l = {
    class: "qc-toolbar-count"
  }, zl = {
    key: 0,
    class: "qc-toolbar-count qc-toolbar-count-filter"
  }, Ml = {
    key: 1,
    class: "qc-toolbar-count qc-toolbar-count-uploading"
  }, Ol = {
    class: "qc-toolbar-actions"
  }, Fl = [ "disabled" ], Dl = vue.createElementVNode("span", null, "\u5bfc\u5165\u5907\u4efd", -1), Nl = vue.createElementVNode("span", null, "\u5bfc\u51fa\u5907\u4efd", -1), Rl = vue.createElementVNode("span", null, "\u6e05\u9664\u7f13\u5b58", -1), Bl = vue.createElementVNode("span", null, "\u8bf4\u660e", -1), Gl = {
    key: 0,
    class: "qc-info-collapse"
  }, Vl = vue.createElementVNode("div", {
    class: "info-body"
  }, [ vue.createTextVNode(" \u672c\u811a\u672c\u652f\u6301\u5c06\u5b58\u5728\u7b54\u6848\u7684\u9898\u76ee\u6536\u5f55\u5230\u672c\u5730\uff0c\u4ee5\u4f9b\u540e\u7eed\u7b54\u9898\u68c0\u7d22\uff0c\u53ef\u51cf\u5c11\u63a5\u53e3\u8bf7\u6c42\u6b21\u6570\uff0c\u63d0\u9ad8\u7b54\u6848\u6b63\u786e\u7387\u3002"), vue.createElementVNode("br"), vue.createTextVNode(" \u5728\u652f\u6301\u91cd\u590d\u7b54\u9898\u4e14\u7b54\u5b8c\u9898\u663e\u793a\u7b54\u6848\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u65e0\u9700\u4f7f\u7528\u63a5\u53e3\u641c\u7d22\u7b54\u6848\u3002"), vue.createElementVNode("br"), vue.createElementVNode("span", {
    class: "warn-text"
  }, "\u5e76\u975e\u6240\u6709\u7f51\u7ad9\u90fd\u652f\u6301\uff0c\u9700\u8981\u4f5c\u8005\u9002\u914d\uff0c\u5982\u9047\u4e0d\u652f\u6301\u7684\u5e73\u53f0\u8bf7\u53cd\u9988\u3002"), vue.createElementVNode("br"), vue.createTextVNode(" \u63d0\u793a\uff1a\u53ef\u76f4\u63a5\u5c06 .bak \u5907\u4efd\u6587\u4ef6\u62d6\u5230\u672c\u9875\u9762\u4efb\u610f\u4f4d\u7f6e\u4ee5\u5bfc\u5165\u3002 ") ], -1), Kl = [ Vl ], Wl = {
    class: "search-filter-row"
  }, Ql = {
    class: "question-search-box"
  }, Jl = {
    key: 1,
    class: "filter-chips"
  }, Xl = [ "onClick" ], Yl = {
    class: "question-table-wrapper"
  }, Zl = {
    key: 0,
    class: "table-empty"
  }, ec = {
    class: "table-empty-text"
  }, tc = {
    key: 1,
    class: "qc-cards"
  }, ac = {
    class: "qc-row qc-row-meta"
  }, nc = {
    class: "aah-tag aah-tag-primary"
  }, rc = {
    class: "qc-num"
  }, sc = [ "onClick" ], ic = vue.createElementVNode("span", null, "\u7f16\u8f91", -1), oc = [ "innerHTML" ], lc = {
    key: 0,
    class: "qc-sub-questions"
  }, cc = {
    class: "qc-sub-question-title"
  }, pc = [ "innerHTML" ], uc = {
    key: 0,
    class: "qc-sub-question-options"
  }, dc = {
    class: "qc-option-letter"
  }, mc = [ "innerHTML" ], hc = {
    key: 1,
    class: "qc-sub-question-answer"
  }, fc = {
    key: 1,
    class: "qc-options-list"
  }, gc = {
    class: "qc-option-letter"
  }, vc = [ "innerHTML" ], yc = {
    class: "qc-answer"
  }, bc = vue.createElementVNode("span", {
    class: "qc-answer-label"
  }, "\u7b54\u6848", -1), wc = [ "innerHTML" ], xc = {
    key: 2,
    class: "question-pagination-wrapper"
  }, kc = {
    class: "question-pagination"
  }, _c = [ "disabled" ], Ac = {
    class: "page-numbers"
  }, Tc = [ "onClick" ], Cc = {
    key: 0,
    class: "page-ellipsis"
  }, Sc = [ "disabled" ], Ic = {
    class: "page-size-selector"
  }, Ec = vue.createElementVNode("label", null, "\u6bcf\u9875\u663e\u793a\uff1a", -1), Uc = vue.createElementVNode("option", {
    value: 10
  }, "10 \u6761", -1), Pc = vue.createElementVNode("option", {
    value: 20
  }, "20 \u6761", -1), Hc = vue.createElementVNode("option", {
    value: 50
  }, "50 \u6761", -1), Lc = vue.createElementVNode("option", {
    value: 100
  }, "100 \u6761", -1), jc = [ Uc, Pc, Hc, Lc ], $c = {
    key: 0,
    class: "qc-drop-overlay"
  }, zc = {
    class: "qc-drop-overlay-card"
  }, Mc = vue.createElementVNode("div", {
    class: "qc-drop-overlay-text"
  }, "\u677e\u5f00\u4ee5\u5bfc\u5165 .bak \u5907\u4efd\u6587\u4ef6", -1), Oc = vue.defineComponent({
    __name: "Question",
    setup(e) {
      const t = vue.ref(null), a = vue.ref(false), o = vue.ref(false), handleEditClose = () => {
        a.value = false;
      }, handleReadingEditClose = () => {
        o.value = false;
      }, g = vue.ref(0), k = vue.ref(null), q = vue.ref(false), A = vue.ref(1), T = vue.ref(20), S = vue.ref(""), U = vue.ref(""), P = vue.ref(false), H = vue.ref(false);
      let L, j = 0;
      window.addEventListener("keydown", (e => {
        "`" === e.key && g.value++;
      }));
      try {
        L = re.script.updateURL.match(/scripts\/(\d+)/)[1];
      } catch (G) {
        L = "492563";
      }
      const z = `https://greasyfork.org/zh-CN/scripts/${L}`, M = Aa(), exportHtml = async e => {
        const t = e.map(((e, t) => `\n        <p><a href="${z}">\u7231\u95ee\u7b54\u52a9\u624b</a></p>\n        <p>${t + 1}\u3001[${typeConvert(e.type, false)}]${e.question}</p>\n        <p>${formatOptionsForExport(e.options)}</p>\n        <p style="color:green;">\u7b54\u6848\uff1a${formatAnswerForExport(e.answer)}</p>\n\n        `)).join("<br/>"), a = new Blob([ `<HtML> <head> <meta charset="utf-8"> <title>\u7231\u95ee\u7b54\u52a9\u624b\u7b54\u6848\u5bfc\u51fa</title> </head> <body> ${t} </body> </HtML>` ], {
          type: "text/html"
        }), n = document.createElement("a");
        n.href = URL.createObjectURL(a), n.download = "\u7231\u95ee\u7b54\u52a9\u624b.html", 
        n.click();
      }, exportData = async () => {
        try {
          const e = Cache.matchGet("ques1_") || [];
          if (0 === e.length) return void msg("\u6682\u65e0\u9898\u76ee\u53ef\u5bfc\u51fa", "warning");
          msg(`\u6b63\u5728\u6253\u5305${e.length}\u9898\uff0c\u8bf7\u7a0d\u540e...`, "info");
          const t = await encrypt(JSON.stringify(e));
          if (!t) return void msg("\u52a0\u5bc6\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u6216\u8054\u7cfb\u5f00\u53d1\u8005", "error");
          const a = new Blob([ t ], {
            type: "application/text"
          });
          msg(`\u6253\u5305\u5b8c\u6210\uff0c\u5171\u8ba1${e.length}\u9898\uff0c\u51c6\u5907\u4e0b\u8f7d`, "success");
          const n = document.createElement("a");
          n.href = URL.createObjectURL(a);
          const r = (new Date).toLocaleDateString().replace(/\//g, "-");
          n.download = `\u7231\u95ee\u7b54\u52a9\u624b\u5907\u4efd-${r}.bak`, n.click(), setTimeout((() => URL.revokeObjectURL(n.href)), 100);
        } catch (e) {
          msg(`\u5bfc\u51fa\u5931\u8d25\uff1a${e}`, "error");
        }
      }, exportDocx = async () => {
        exportHtml(M.saveQuestionData);
      }, exportDocx1 = async () => {
        const e = Cache.matchGet("ques1_") || [];
        exportHtml(e);
      }, O = [ "\u5bf9", "\u9519" ], normalizeAnswer2 = e => null == e ? [] : Array.isArray(e) ? e.length > 0 && Array.isArray(e[0]) ? [] : e.map((e => String(e))) : [ String(e) ], visibleOptions = e => "3" === e.type ? Array.isArray(e.options) && 2 === e.options.length && "string" == typeof e.options[0] ? e.options : O : "2" === e.type ? [] : Array.isArray(e.options) && e.options.length > 0 && "string" == typeof e.options[0] ? e.options : [], isCorrectOption = (e, t, a) => {
        const n = normalizeAnswer2(e.answer);
        if (0 === n.length) return false;
        if (n.includes(String(t))) return true;
        if (n.includes(a)) return true;
        const r = String.fromCharCode(65 + t);
        return !!n.includes(r);
      }, isCorrectSubOption = (e, t, a) => {
        if (!e) return false;
        const n = normalizeAnswer2(e.answer);
        if (0 === n.length) return false;
        if (n.includes(String(t))) return true;
        if (n.includes(a)) return true;
        const r = String.fromCharCode(65 + t);
        return !!n.includes(r);
      }, formatAnswerWithText = e => {
        if (!e || null == e.answer) return "";
        if (Array.isArray(e.answer) && e.answer.length > 0 && Array.isArray(e.answer[0])) return e.answer.map(((e, t) => `<div class="sub-answer-item">\n                <span class="sub-answer-num">${t + 1}.</span>\n                <span class="sub-answer-text">${Array.isArray(e) ? e.join(", ") : String(e)}</span>\n            </div>`)).join("");
        if ("2" === e.type) return Array.isArray(e.answer) ? e.answer.join("<br/>") : String(e.answer);
        const t = visibleOptions(e), a = normalizeAnswer2(e.answer);
        if (t.length > 0 && a.length > 0) {
          const e = [];
          return a.forEach((a => {
            const n = Number(a);
            if (!Number.isNaN(n) && n >= 0 && n < t.length) return void e.push(`${String.fromCharCode(65 + n)}. ${t[n]}`);
            if (/^[A-Z]$/.test(a)) {
              const n = a.charCodeAt(0) - 65;
              if (n >= 0 && n < t.length) return void e.push(`${a}. ${t[n]}`);
            }
            const r = t.indexOf(a);
            r >= 0 ? e.push(`${String.fromCharCode(65 + r)}. ${a}`) : e.push(a);
          })), e.join(" / ");
        }
        return Array.isArray(e.answer) ? e.answer.join("<br/>") : "object" == typeof e.answer ? JSON.stringify(e.answer) : String(e.answer);
      }, formatOptionsForExport = e => e ? Array.isArray(e) && e.length > 0 && "string" == typeof e[0] ? function(e) {
        return Array.isArray(e) ? e.map(((e, t) => String.fromCharCode(65 + t) + "." + String(e))).join("<br>") : "";
      }(e) : Array.isArray(e) && e.length > 0 && "object" == typeof e[0] ? e.map(((e, t) => {
        let a = `<p><strong>${t + 1}. ${e.question || ""}</strong></p>`;
        return e.options && Array.isArray(e.options) && e.options.forEach(((e, t) => {
          const n = String.fromCharCode(65 + t);
          a += `<p>${n}. ${e}</p>`;
        })), e.answer && Array.isArray(e.answer) && (a += `<p style="color:green;"><strong>\u7b54\u6848: ${e.answer.join(", ")}</strong></p>`), 
        a;
      })).join("<br>") : Array.isArray(e) ? e.join("<br>") : String(e) : "", formatAnswerForExport = e => e ? Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) ? e.map(((e, t) => `<strong>${t + 1}.</strong> ${Array.isArray(e) ? e.join(", ") : String(e)}`)).join("<br>") : Array.isArray(e) ? e.join("<br>") : String(e) : "", beforeUpload = e => {
        if (!e) return false;
        q.value = true;
        const t = new FileReader;
        return t.onload = async e => {
          var t;
          const a = null == (t = e.target) ? void 0 : t.result;
          try {
            const e = JSON.parse(await decrypt(a));
            e.forEach((e => {
              Answer.cacheAnswer(e);
            })), msg(`\u9898\u5e93\u5bfc\u5165\u6210\u529f\uff0c\u5171\u8ba1${e.length}\u9898\n            \u8fc7\u591a\u9898\u76ee\u5bfc\u5165\u540e\u9875\u9762\u4f1a\u5361\u4e3b\u8bf7\u76f4\u63a5\u5173\u95ed\u9875\u9762\u91cd\u65b0\u6253\u5f00`, "success");
          } catch (n) {
            msg("\u6587\u4ef6\u683c\u5f0f\u9519\u8bef", "error");
          }
          q.value = false;
        }, t.onerror = () => {
          msg("\u8bfb\u53d6\u6587\u4ef6\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5", "error"), q.value = false;
        }, t.readAsText(e), false;
      }, handleFileChange = e => {
        var t;
        const a = null == (t = e.target.files) ? void 0 : t[0];
        a && beforeUpload(a), k.value && (k.value.value = "");
      }, onDragEnter = e => {
        var t, a;
        (null == (a = null == (t = e.dataTransfer) ? void 0 : t.types) ? void 0 : a.includes("Files")) && (j++, 
        H.value = true);
      }, onDragLeave = e => {
        j = Math.max(0, j - 1), 0 === j && (H.value = false);
      }, onDragOver = e => {
        H.value && e.preventDefault();
      }, onDrop = e => {
        var t, a;
        if (!H.value) return;
        e.preventDefault(), j = 0, H.value = false;
        const n = null == (a = null == (t = e.dataTransfer) ? void 0 : t.files) ? void 0 : a[0];
        n && beforeUpload(n);
      };
      vue.onMounted((() => {
        window.addEventListener("dragenter", onDragEnter), window.addEventListener("dragleave", onDragLeave), 
        window.addEventListener("dragover", onDragOver), window.addEventListener("drop", onDrop);
      })), vue.onBeforeUnmount((() => {
        window.removeEventListener("dragenter", onDragEnter), window.removeEventListener("dragleave", onDragLeave), 
        window.removeEventListener("dragover", onDragOver), window.removeEventListener("drop", onDrop);
      }));
      const F = vue.computed((() => {
        let e = M.saveQuestionData;
        if (S.value) {
          const t = S.value.toLowerCase();
          e = e.filter((e => {
            var a;
            return (null == (a = e.question) ? void 0 : a.toLowerCase().includes(t)) || !!Array.isArray(e.options) && e.options.some((e => "string" == typeof e ? e.toLowerCase().includes(t) : JSON.stringify(e).toLowerCase().includes(t))) || !!Array.isArray(e.answer) && e.answer.some((e => "string" == typeof e ? e.toLowerCase().includes(t) : JSON.stringify(e).toLowerCase().includes(t)));
          }));
        }
        return U.value && (e = e.filter((e => e.type === U.value))), e;
      })), D = vue.computed((() => {
        const e = (A.value - 1) * T.value, t = e + T.value;
        return F.value.slice(e, t);
      })), N = vue.computed((() => Math.ceil(F.value.length / T.value))), R = [ {
        value: "0",
        label: "\u5355\u9009"
      }, {
        value: "1",
        label: "\u591a\u9009"
      }, {
        value: "3",
        label: "\u5224\u65ad"
      }, {
        value: "2",
        label: "\u586b\u7a7a"
      } ], resetSearch = () => {
        S.value = "", U.value = "", A.value = 1;
      }, handlePageChange = e => {
        A.value = e;
      }, B = vue.computed((() => !!S.value || !!U.value));
      return (e, p) => (vue.openBlock(), vue.createBlock(Ya, null, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", Pl, [ Hl, vue.createElementVNode("div", Ll, [ vue.createElementVNode("div", jl, [ vue.createElementVNode("span", $l, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:database-outline"
        }), vue.createTextVNode(" \u5df2\u7f13\u5b58 "), vue.createElementVNode("strong", null, vue.toDisplayString(vue.unref(M).saveQuestionData.length), 1), vue.createTextVNode(" \u9898 ") ]), B.value ? (vue.openBlock(), 
        vue.createElementBlock("span", zl, [ vue.createTextVNode(" \uff08\u7b5b\u9009\u540e "), vue.createElementVNode("strong", null, vue.toDisplayString(F.value.length), 1), vue.createTextVNode(" \u9898\uff09 ") ])) : vue.createCommentVNode("", true), q.value ? (vue.openBlock(), 
        vue.createElementBlock("span", Ml, "\u5bfc\u5165\u4e2d\u2026")) : vue.createCommentVNode("", true) ]), vue.createElementVNode("div", Ol, [ vue.createElementVNode("input", {
          ref_key: "uploadInput",
          ref: k,
          type: "file",
          accept: ".bak",
          class: "upload-input",
          onChange: handleFileChange
        }, null, 544), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          type: "button",
          disabled: q.value,
          onClick: p[0] || (p[0] = e => {
            var t;
            return null == (t = k.value) ? void 0 : t.click();
          })
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:upload-outline"
        }), Dl ], 8, Fl), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small aah-btn-primary",
          type: "button",
          onClick: exportData
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:download-outline"
        }), Nl ]), g.value > 10 ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: exportDocx
        }, "\u5bfc\u51fa\u5f53\u524d")) : vue.createCommentVNode("", true), g.value > 10 ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "aah-btn aah-btn-small",
          type: "button",
          onClick: exportDocx1
        }, "\u5bfc\u51fa\u6240\u6709")) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small aah-btn-danger",
          type: "button",
          onClick: p[1] || (p[1] = e => window.confirm("\u786e\u5b9a\u8981\u6e05\u7a7a\u672c\u5730\u7f13\u5b58\u5417\uff1f") && (Cache.matchRemove("ques1_"), 
          void msg("\u6e05\u9664\u6210\u529f", "success")))
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:trash-can-outline"
        }), Rl ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small aah-btn-plain",
          type: "button",
          onClick: p[2] || (p[2] = e => P.value = !P.value)
        }, [ Bl, vue.createVNode(vue.unref(vue$1.Icon), {
          icon: P.value ? "mdi:chevron-up" : "mdi:chevron-down"
        }, null, 8, [ "icon" ]) ]) ]) ]), P.value ? (vue.openBlock(), vue.createElementBlock("div", Gl, Kl)) : vue.createCommentVNode("", true), vue.createElementVNode("div", Wl, [ vue.createElementVNode("div", Ql, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": p[3] || (p[3] = e => S.value = e),
          type: "text",
          placeholder: "\u641c\u7d22\u9898\u76ee\u3001\u9009\u9879\u6216\u7b54\u6848...",
          class: "question-search-input"
        }, null, 512), [ [ vue.vModelText, S.value ] ]), S.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          onClick: p[4] || (p[4] = e => S.value = ""),
          class: "search-clear"
        }, "\xd7")) : vue.createCommentVNode("", true) ]), vue.createElementVNode("button", {
          onClick: resetSearch,
          class: "aah-btn aah-btn-plain aah-btn-small"
        }, "\u91cd\u7f6e") ]), R.length ? (vue.openBlock(), vue.createElementBlock("div", Jl, [ vue.createElementVNode("button", {
          type: "button",
          class: vue.normalizeClass([ "aah-tag", U.value ? "" : "aah-tag-primary" ]),
          onClick: p[5] || (p[5] = e => U.value = "")
        }, "\u5168\u90e8", 2), (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(R, (e => vue.createElementVNode("button", {
          key: e.value,
          type: "button",
          class: vue.normalizeClass([ "aah-tag", U.value === e.value ? "aah-tag-primary" : "" ]),
          onClick: t => U.value = e.value
        }, vue.toDisplayString(e.label), 11, Xl))), 64)) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Yl, [ 0 === D.value.length ? (vue.openBlock(), 
        vue.createElementBlock("div", Zl, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:file-edit",
          class: "table-empty-icon"
        }), vue.createElementVNode("div", ec, vue.toDisplayString(B.value ? "\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u9898\u76ee" : "\u5f53\u524d\u9875\u6682\u65e0\u6570\u636e"), 1), B.value ? (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: 0,
          onClick: resetSearch,
          class: "aah-btn aah-btn-primary aah-btn-small"
        }, "\u6e05\u9664\u7b5b\u9009")) : vue.createCommentVNode("", true) ])) : (vue.openBlock(), vue.createElementBlock("div", tc, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(D.value, ((e, p) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: p,
            class: "aah-card aah-card-compact qc-card"
          }, [ vue.createElementVNode("div", ac, [ vue.createElementVNode("span", nc, vue.toDisplayString((u = e, typeConvert(u.type, false))), 1), vue.createElementVNode("span", rc, "# " + vue.toDisplayString((A.value - 1) * T.value + p + 1), 1), vue.createElementVNode("button", {
            class: "aah-btn aah-btn-small qc-edit-btn",
            onClick: n => (e => {
              t.value = e, "15" === e.type ? o.value = true : a.value = true;
            })(e),
            type: "button"
          }, [ vue.createVNode(vue.unref(vue$1.Icon), {
            icon: "mdi:pencil-outline"
          }), ic ], 8, sc) ]), vue.createElementVNode("div", {
            class: "qc-question",
            innerHTML: e.question
          }, null, 8, oc), "15" === e.type && Array.isArray(e.options) && e.options.length && "object" == typeof e.options[0] ? (vue.openBlock(), 
          vue.createElementBlock("div", lc, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((e, t) => (vue.openBlock(), vue.createElementBlock("div", {
            key: t,
            class: "qc-sub-question"
          }, [ vue.createElementVNode("div", cc, [ vue.createTextVNode(vue.toDisplayString(t + 1) + ". ", 1), vue.createElementVNode("span", {
            innerHTML: e.question || ""
          }, null, 8, pc) ]), Array.isArray(e.options) && e.options.length ? (vue.openBlock(), vue.createElementBlock("div", uc, [ (vue.openBlock(true), 
          vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((t, a) => (vue.openBlock(), vue.createElementBlock("div", {
            key: a,
            class: vue.normalizeClass([ "sub-option", isCorrectSubOption(e, a, String(t)) ? "sub-option-correct" : "" ])
          }, [ isCorrectSubOption(e, a, String(t)) ? (vue.openBlock(), vue.createBlock(vue.unref(vue$1.Icon), {
            key: 0,
            icon: "mdi:check-circle",
            class: "qc-option-icon"
          })) : vue.createCommentVNode("", true), vue.createElementVNode("span", dc, vue.toDisplayString(String.fromCharCode(65 + a)) + ".", 1), vue.createElementVNode("span", {
            class: "qc-option-text",
            innerHTML: t
          }, null, 8, mc) ], 2)))), 128)) ])) : vue.createCommentVNode("", true), Array.isArray(e.answer) && e.answer.length ? (vue.openBlock(), 
          vue.createElementBlock("div", hc, " \u7b54\u6848\uff1a" + vue.toDisplayString(e.answer.join(", ")), 1)) : vue.createCommentVNode("", true) ])))), 128)) ])) : visibleOptions(e).length ? (vue.openBlock(), 
          vue.createElementBlock("div", fc, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(visibleOptions(e), ((t, a) => (vue.openBlock(), vue.createElementBlock("div", {
            key: a,
            class: vue.normalizeClass([ "qc-option", isCorrectOption(e, a, t) ? "qc-option-correct" : "" ])
          }, [ isCorrectOption(e, a, t) ? (vue.openBlock(), vue.createBlock(vue.unref(vue$1.Icon), {
            key: 0,
            icon: "mdi:check-circle",
            class: "qc-option-icon"
          })) : vue.createCommentVNode("", true), vue.createElementVNode("span", gc, vue.toDisplayString(String.fromCharCode(65 + a)) + ".", 1), vue.createElementVNode("span", {
            class: "qc-option-text",
            innerHTML: t
          }, null, 8, vc) ], 2)))), 128)) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", yc, [ bc, vue.createElementVNode("span", {
            class: "qc-answer-value",
            innerHTML: formatAnswerWithText(e)
          }, null, 8, wc) ]) ]);
          var u;
        })), 128)) ])) ]), N.value > 1 ? (vue.openBlock(), vue.createElementBlock("div", xc, [ vue.createElementVNode("div", kc, [ vue.createElementVNode("button", {
          onClick: p[6] || (p[6] = e => handlePageChange(A.value - 1)),
          disabled: A.value <= 1,
          class: "question-page-btn page-prev"
        }, " \u2039 \u4e0a\u4e00\u9875 ", 8, _c), vue.createElementVNode("div", Ac, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Math.min(N.value, 7), (e => (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: e,
          onClick: t => handlePageChange(e),
          class: vue.normalizeClass([ "page-number", {
            active: e === A.value
          } ])
        }, vue.toDisplayString(e), 11, Tc)))), 128)), N.value > 7 ? (vue.openBlock(), vue.createElementBlock("span", Cc, "...")) : vue.createCommentVNode("", true), N.value > 7 ? (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: 1,
          onClick: p[7] || (p[7] = e => handlePageChange(N.value)),
          class: vue.normalizeClass([ "page-number", {
            active: N.value === A.value
          } ])
        }, vue.toDisplayString(N.value), 3)) : vue.createCommentVNode("", true) ]), vue.createElementVNode("button", {
          onClick: p[8] || (p[8] = e => handlePageChange(A.value + 1)),
          disabled: A.value >= N.value,
          class: "question-page-btn page-next"
        }, " \u4e0b\u4e00\u9875 \u203a ", 8, Sc) ]), vue.createElementVNode("div", Ic, [ Ec, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": p[9] || (p[9] = e => T.value = e),
          onChange: p[10] || (p[10] = e => A.value = 1)
        }, jc, 544), [ [ vue.vModelSelect, T.value ] ]) ]) ])) : vue.createCommentVNode("", true), (vue.openBlock(), vue.createBlock(vue.Teleport, {
          to: "body"
        }, [ H.value ? (vue.openBlock(), vue.createElementBlock("div", $c, [ vue.createElementVNode("div", zc, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:cloud-upload-outline",
          class: "qc-drop-overlay-icon"
        }), Mc ]) ])) : vue.createCommentVNode("", true) ])) ]), vue.createVNode(Zo, {
          visible: a.value,
          ques: t.value,
          onHandleClose: handleEditClose
        }, null, 8, [ "visible", "ques" ]), vue.createVNode(Ul, {
          visible: o.value,
          ques: t.value,
          onHandleClose: handleReadingEditClose
        }, null, 8, [ "visible", "ques" ]) ])),
        _: 1
      }));
    }
  }), Fc = {
    class: "preview-container"
  }, Dc = {
    class: "toolbar"
  }, Nc = {
    class: "toolbar-left"
  }, Rc = {
    class: "page-title"
  }, Bc = {
    class: "toolbar-right"
  }, Gc = {
    class: "preview-search-box"
  }, Vc = vue.createElementVNode("option", {
    value: 5
  }, "5\u9898/\u9875", -1), Kc = vue.createElementVNode("option", {
    value: 10
  }, "10\u9898/\u9875", -1), Wc = vue.createElementVNode("option", {
    value: 20
  }, "20\u9898/\u9875", -1), Qc = [ Vc, Kc, Wc ], Jc = {
    key: 0,
    class: "search-info"
  }, Xc = {
    class: "preview-questions-container"
  }, Yc = {
    key: 0,
    class: "loading"
  }, Zc = vue.createElementVNode("div", {
    class: "preview-spinner"
  }, null, -1), ep = vue.createElementVNode("span", null, "\u641c\u7d22\u4e2d...", -1), tp = [ Zc, ep ], ap = {
    key: 1,
    class: "empty"
  }, np = {
    key: 2,
    class: "questions-list"
  }, rp = {
    class: "question-header"
  }, sp = {
    class: "question-info"
  }, ip = {
    class: "question-num"
  }, op = {
    class: "question-type"
  }, lp = {
    class: "question-actions"
  }, cp = [ "onClick" ], pp = [ "onClick" ], up = {
    class: "preview-question-content"
  }, dp = [ "innerHTML" ], mp = {
    key: 0,
    class: "options"
  }, hp = {
    key: 0,
    class: "reading-type"
  }, fp = {
    class: "reading-title"
  }, gp = {
    class: "preview-sub-questions"
  }, vp = {
    class: "sub-num"
  }, yp = {
    class: "sub-type"
  }, bp = [ "innerHTML" ], wp = {
    key: 0,
    class: "more-subs"
  }, xp = {
    key: 1,
    class: "complex-type"
  }, kp = {
    key: 2,
    class: "normal-options"
  }, qp = {
    class: "option-label"
  }, _p = [ "innerHTML" ], Ap = {
    key: 0,
    class: "correct-mark"
  }, Tp = {
    class: "answer"
  }, Cp = vue.createElementVNode("span", {
    class: "preview-answer-label"
  }, "\u7b54\u6848\uff1a", -1), Sp = {
    key: 0,
    class: "preview-answer-list"
  }, Ip = [ "innerHTML" ], Ep = {
    key: 2,
    class: "no-answer"
  }, Up = {
    key: 1,
    class: "preview-pagination"
  }, Pp = [ "disabled" ], Hp = {
    class: "page-info"
  }, Lp = [ "max" ], jp = [ "disabled" ], $p = {
    class: "total-info"
  }, zp = vue.defineComponent({
    __name: "Preview",
    setup(e) {
      const t = vue.ref(Cache.matchGet("ques1_") || []), a = vue.ref(false), o = vue.ref(""), g = vue.ref(1), k = vue.ref(10), q = function(e) {
        const t = new Blob([ `(${e.toString()})()` ], {
          type: "application/javascript"
        }), a = URL.createObjectURL(t);
        return new Worker(a);
      }((() => {
        self.importScripts("https://cdn.bootcdn.net/ajax/libs/fuse.js/7.1.0/fuse.min.js"), 
        self.onmessage = function(e) {
          const {data: t, options: a} = e.data, n = new Fuse(t, a).search(e.data.keyword).map((e => e.item));
          n.forEach((t => {
            t.question1 = t.question, e.data.keyword.split("").forEach((e => {
              /[\u4e00-\u9fa5a-zA-Z0-9]/.test(e) && (t.question1 = t.question1.replace(new RegExp(e, "g"), `<span class="highlight">${e}</span>`));
            }));
          })), self.postMessage(n);
        };
      })), A = vue.computed((() => t.value.length)), T = vue.computed((() => 0 === A.value ? 0 : Math.ceil(A.value / k.value))), S = vue.computed((() => {
        const e = (g.value - 1) * k.value, a = e + k.value;
        return t.value.slice(e, a);
      })), cl_img_format = e => {
        if (!e.trim()) return e;
        return e.replace(/<img\b(?!.*?\breferrerPolicy\b)[^>]*>/gi, (e => e.replace(/\/?>$/, ' referrerPolicy="no-referrer">')));
      }, getOptionIndex = e => String.fromCharCode(65 + e), handlePageChange = e => {
        if (0 === T.value) return;
        const t = Math.min(Math.max(1, e), T.value);
        g.value = t;
      }, goPrev = () => handlePageChange(g.value - 1), goNext = () => handlePageChange(g.value + 1), onKeydown = e => {
        const t = e.target;
        t && [ "INPUT", "TEXTAREA", "SELECT" ].includes(t.tagName) || e.metaKey || e.ctrlKey || e.altKey || ("ArrowLeft" === e.key ? goPrev() : "ArrowRight" === e.key && goNext());
      };
      vue.onMounted((() => window.addEventListener("keydown", onKeydown))), vue.onUnmounted((() => window.removeEventListener("keydown", onKeydown)));
      const search = () => {
        const e = {
          keys: [ "question" ],
          threshold: .3
        }, n = o.value.trim();
        a.value = true, n ? (q.onmessage = e => {
          const n = e.data;
          t.value = n, a.value = false, g.value = 1;
        }, q.postMessage({
          data: Cache.matchGet("ques1_"),
          options: e,
          keyword: n
        })) : (t.value = Cache.matchGet("ques1_") || [], a.value = false, g.value = 1);
      }, I = vue.ref(null), E = vue.ref(false), P = vue.ref(false), handleClose = () => {
        E.value = false;
      }, handleReadingClose = () => {
        P.value = false;
      };
      return (e, p) => (vue.openBlock(), vue.createBlock(Ya, null, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", Fc, [ vue.createVNode(Zo, {
          visible: E.value,
          ques: I.value,
          onHandleClose: handleClose
        }, null, 8, [ "visible", "ques" ]), vue.createVNode(Ul, {
          visible: P.value,
          ques: I.value,
          onHandleClose: handleReadingClose
        }, null, 8, [ "visible", "ques" ]), vue.createElementVNode("div", Dc, [ vue.createElementVNode("div", Nc, [ vue.createElementVNode("h3", Rc, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:book-open-page-variant",
          class: "icon-inline"
        }), vue.createTextVNode(" \u9898\u5e93\u9884\u89c8 (" + vue.toDisplayString(A.value) + " \u9898)", 1) ]) ]), vue.createElementVNode("div", Bc, [ vue.createElementVNode("div", Gc, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": p[0] || (p[0] = e => o.value = e),
          class: "preview-search-input",
          type: "text",
          placeholder: "\u641c\u7d22\u9898\u76ee...",
          onInput: search
        }, null, 544), [ [ vue.vModelText, o.value ] ]), o.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "clear-btn",
          onClick: p[1] || (p[1] = e => {
            o.value = "", search();
          })
        }, "\xd7")) : vue.createCommentVNode("", true) ]), vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": p[2] || (p[2] = e => k.value = e),
          onChange: p[3] || (p[3] = e => g.value = 1),
          class: "page-size"
        }, Qc, 544), [ [ vue.vModelSelect, k.value ] ]) ]) ]), o.value ? (vue.openBlock(), vue.createElementBlock("div", Jc, [ vue.createTextVNode(" \u627e\u5230 "), vue.createElementVNode("strong", null, vue.toDisplayString(t.value.length), 1), vue.createTextVNode(" \u9053\u76f8\u5173\u9898\u76ee ") ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Xc, [ a.value ? (vue.openBlock(), 
        vue.createElementBlock("div", Yc, tp)) : 0 === S.value.length ? (vue.openBlock(), vue.createElementBlock("div", ap, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:file-edit",
          class: "preview-empty-icon"
        }), vue.createElementVNode("p", null, vue.toDisplayString(o.value ? "\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u9898\u76ee" : "\u6682\u65e0\u9898\u76ee\u6570\u636e"), 1), o.value ? (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: 0,
          class: "btn-clear",
          onClick: p[4] || (p[4] = e => {
            o.value = "", search();
          })
        }, "\u6e05\u9664\u641c\u7d22")) : vue.createCommentVNode("", true) ])) : (vue.openBlock(), vue.createElementBlock("div", np, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(S.value, ((e, a) => (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: e.key || a,
          class: "question-item"
        }, [ vue.createElementVNode("div", rp, [ vue.createElementVNode("div", sp, [ vue.createElementVNode("span", ip, vue.toDisplayString((g.value - 1) * k.value + a + 1), 1), vue.createElementVNode("span", op, vue.toDisplayString(vue.unref(typeConvert)(e.type ?? "", false)), 1) ]), vue.createElementVNode("div", lp, [ vue.createElementVNode("button", {
          class: "btn-edit",
          onClick: t => (e => {
            I.value = e, "15" === e.type ? P.value = true : E.value = true;
          })(e),
          title: "\u7f16\u8f91"
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:pencil"
        }) ], 8, cp), vue.createElementVNode("button", {
          class: "btn-delete",
          onClick: a => (e => {
            t.value = t.value.filter((t => t.key !== e.key)), Cache.matchRemove(e.key);
          })(e),
          title: "\u5220\u9664"
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:delete"
        }) ], 8, pp) ]) ]), vue.createElementVNode("div", up, [ vue.createElementVNode("div", {
          class: "preview-question-text",
          innerHTML: cl_img_format(e.question1 || e.question)
        }, null, 8, dp), e.options && e.options.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", mp, [ "15" === e.type && "object" == typeof e.options[0] ? (vue.openBlock(), 
        vue.createElementBlock("div", hp, [ vue.createElementVNode("div", fp, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:book-open-variant",
          class: "icon-inline"
        }), vue.createTextVNode(" \u9605\u8bfb\u7406\u89e3 (" + vue.toDisplayString(e.options.length) + " \u9898)", 1) ]), vue.createElementVNode("div", gp, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options.slice(0, 3), ((e, t) => (vue.openBlock(), vue.createElementBlock("div", {
          key: t,
          class: "preview-sub-question"
        }, [ vue.createElementVNode("span", vp, vue.toDisplayString(t + 1) + ".", 1), vue.createElementVNode("span", yp, "[" + vue.toDisplayString(vue.unref(typeConvert)(e.type ?? "", false)) + "]", 1), vue.createElementVNode("div", {
          class: "sub-text",
          innerHTML: cl_img_format(e.question)
        }, null, 8, bp) ])))), 128)), e.options.length > 3 ? (vue.openBlock(), vue.createElementBlock("div", wp, " \u8fd8\u6709 " + vue.toDisplayString(e.options.length - 3) + " \u4e2a\u5b50\u9898\u76ee... ", 1)) : vue.createCommentVNode("", true) ]) ])) : "object" == typeof e.options[0] ? (vue.openBlock(), 
        vue.createElementBlock("div", xp, " \u26a0\ufe0f \u590d\u5408\u9898\u578b\uff0c\u70b9\u51fb\u7f16\u8f91\u67e5\u770b\u8be6\u60c5 ")) : (vue.openBlock(), 
        vue.createElementBlock("div", kp, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((t, a) => (vue.openBlock(), vue.createElementBlock("div", {
          key: a,
          class: vue.normalizeClass([ "option", {
            correct: e.answer && e.answer.includes(t)
          } ])
        }, [ vue.createElementVNode("span", qp, vue.toDisplayString(getOptionIndex(a)) + ".", 1), vue.createElementVNode("span", {
          class: "option-text",
          innerHTML: cl_img_format(t)
        }, null, 8, _p), e.answer && e.answer.includes(t) ? (vue.openBlock(), vue.createElementBlock("span", Ap, "\u2713")) : vue.createCommentVNode("", true) ], 2)))), 128)) ])) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Tp, [ Cp, Array.isArray(e.answer) ? (vue.openBlock(), 
        vue.createElementBlock("div", Sp, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => (vue.openBlock(), vue.createElementBlock("span", {
          key: t,
          class: "preview-answer-item"
        }, vue.toDisplayString(e), 1)))), 128)) ])) : e.answer ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "preview-answer-text",
          innerHTML: cl_img_format(e.answer)
        }, null, 8, Ip)) : (vue.openBlock(), vue.createElementBlock("span", Ep, "\u6682\u65e0\u7b54\u6848")) ]) ]) ])))), 128)) ])) ]), A.value > 0 ? (vue.openBlock(), 
        vue.createElementBlock("div", Up, [ vue.createElementVNode("button", {
          class: "preview-page-btn",
          disabled: g.value <= 1,
          onClick: goPrev
        }, "\u4e0a\u4e00\u9875", 8, Pp), vue.createElementVNode("span", Hp, [ vue.createTextVNode(" \u7b2c "), vue.withDirectives(vue.createElementVNode("input", {
          type: "number",
          class: "page-input",
          min: 1,
          max: T.value || 1,
          "onUpdate:modelValue": p[5] || (p[5] = e => g.value = e),
          onChange: p[6] || (p[6] = e => handlePageChange(g.value))
        }, null, 40, Lp), [ [ vue.vModelText, g.value, void 0, {
          number: true
        } ] ]), vue.createTextVNode(" / " + vue.toDisplayString(T.value || 1) + " \u9875 ", 1) ]), vue.createElementVNode("button", {
          class: "preview-page-btn",
          disabled: g.value >= (T.value || 1),
          onClick: goNext
        }, "\u4e0b\u4e00\u9875", 8, jp), vue.createElementVNode("span", $p, "\u5171 " + vue.toDisplayString(A.value) + " \u9898", 1) ])) : vue.createCommentVNode("", true) ]) ])),
        _: 1
      }));
    }
  }), Mp = {
    class: "log-page"
  }, Op = {
    class: "log-header"
  }, Fp = vue.createElementVNode("h2", null, "\u8fd0\u884c\u65e5\u5fd7", -1), Dp = {
    class: "log-actions"
  }, Np = {
    class: "log-toolbar"
  }, Rp = {
    class: "log-filter"
  }, Bp = [ "onClick" ], Gp = {
    key: 0,
    class: "log-list custom-scroll"
  }, Vp = {
    class: "log-time"
  }, Kp = {
    class: "log-msg"
  }, Wp = {
    key: 1,
    class: "log-empty"
  }, Qp = [ vue.createElementVNode("span", {
    class: "log-empty-icon"
  }, "i", -1), vue.createElementVNode("p", null, "\u5f53\u524d\u6ca1\u6709\u65e5\u5fd7\u8bb0\u5f55", -1) ], Jp = vue.defineComponent({
    __name: "Log",
    setup(e) {
      const t = ce(), a = [ {
        key: "all",
        label: "\u5168\u90e8",
        tone: "primary"
      }, {
        key: "success",
        label: "\u4fe1\u606f",
        tone: "success"
      }, {
        key: "warning",
        label: "\u8b66\u544a",
        tone: "warning"
      }, {
        key: "error",
        label: "\u9519\u8bef",
        tone: "danger"
      } ], o = vue.ref("all"), c = vue.computed((() => "all" === o.value ? t.logs : t.logs.filter((e => e.type === o.value)))), u = vue.computed((() => {
        var e;
        return (null == (e = a.find((e => e.key === o.value))) ? void 0 : e.label) || "\u5168\u90e8";
      })), f = vue.computed((() => t.logs.length)), exportLogs = () => {
        const e = new Blob([ JSON.stringify(t.logs, null, 2) ], {
          type: "application/json"
        }), a = URL.createObjectURL(e), n = document.createElement("a");
        n.href = a, n.download = `aiask-logs-${Date.now()}.json`, n.click(), URL.revokeObjectURL(a);
      };
      return (e, p) => (vue.openBlock(), vue.createBlock(Ya, {
        "no-padding": true
      }, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", Mp, [ vue.createElementVNode("header", Op, [ vue.createElementVNode("div", null, [ Fp, vue.createElementVNode("p", null, "\u5171 " + vue.toDisplayString(f.value) + " \u6761\u8bb0\u5f55\uff0c\u5f53\u524d\u7b5b\u9009\uff1a" + vue.toDisplayString(u.value), 1) ]), vue.createElementVNode("div", Dp, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          onClick: p[0] || (p[0] = e => vue.unref(t).logs = [])
        }, "\u6e05\u7a7a"), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-small",
          onClick: exportLogs
        }, "\u5bfc\u51fa") ]) ]), vue.createElementVNode("div", Np, [ vue.createElementVNode("div", Rp, [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(a, (e => vue.createElementVNode("button", {
          key: e.key,
          class: vue.normalizeClass([ "aah-tag", o.value === e.key ? `aah-tag-${e.tone}` : "" ]),
          type: "button",
          onClick: t => o.value = e.key
        }, vue.toDisplayString(e.label), 11, Bp))), 64)) ]) ]), c.value.length ? (vue.openBlock(), vue.createElementBlock("ul", Gp, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(c.value, ((e, t) => (vue.openBlock(), vue.createElementBlock("li", {
          key: t,
          class: vue.normalizeClass([ "log-row", `log-row-${e.type}` ])
        }, [ vue.createElementVNode("span", Vp, vue.toDisplayString(e.time), 1), vue.createElementVNode("span", {
          class: vue.normalizeClass([ "aah-tag", "aah-tag-" + ("error" === e.type ? "danger" : "warning" === e.type ? "warning" : "success") ])
        }, vue.toDisplayString(e.type), 3), vue.createElementVNode("span", Kp, vue.toDisplayString(e.content), 1) ], 2)))), 128)) ])) : (vue.openBlock(), vue.createElementBlock("div", Wp, Qp)) ]) ])),
        _: 1
      }));
    }
  }), Xp = {
    class: "ai-workbench"
  }, Yp = {
    class: "ai-status-panel"
  }, Zp = {
    class: "ai-status-main"
  }, eu = {
    class: "aah-card ai-input-panel"
  }, tu = {
    class: "ai-section-heading"
  }, au = vue.createElementVNode("div", null, [ vue.createElementVNode("h3", null, "\u9898\u76ee\u8f93\u5165"), vue.createElementVNode("p", null, "\u7c98\u8d34\u9898\u5e72\u3001\u9009\u9879\u6216\u5b8c\u6574\u9898\u76ee\u5185\u5bb9") ], -1), nu = {
    class: "ai-mode-switch"
  }, ru = [ "onClick" ], su = {
    key: 0,
    class: "ai-question-type-row"
  }, iu = {
    class: "ai-config-field"
  }, ou = vue.createElementVNode("span", null, "\u9898\u578b\u9009\u62e9", -1), lu = [ "value" ], cu = vue.createElementVNode("p", {
    class: "ai-helper-text"
  }, "\u7c98\u8d34\u9898\u5e72\u53ca\u9009\u9879\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u89e3\u6790\u5e76\u641c\u7d22\u5b98\u65b9\u9898\u5e93", -1), pu = {
    class: "ai-command-row"
  }, uu = [ "disabled" ], du = {
    class: "aah-card ai-result-panel"
  }, mu = {
    class: "ai-section-heading"
  }, hu = {
    class: "ai-result-actions"
  }, fu = {
    key: 1,
    class: "aah-tag aah-tag-success"
  }, gu = {
    key: 0,
    class: "ai-loading-text"
  }, vu = [ "innerHTML" ], yu = {
    key: 2,
    class: "ai-empty"
  }, bu = vue.createElementVNode("p", {
    class: "ai-empty-text"
  }, "\u8f93\u5165\u9898\u76ee\u540e\u5f00\u59cb\u641c\u7d22\uff0cAI \u89e3\u7b54\u4f1a\u663e\u793a\u5728\u8fd9\u91cc", -1), wu = {
    key: 0,
    class: "ai-loading-text"
  }, xu = {
    key: 1,
    class: "aah-alert aah-alert-warning"
  }, ku = [ "innerHTML" ], qu = {
    key: 2,
    class: "official-meta"
  }, _u = {
    class: "official-meta-row"
  }, Au = vue.createElementVNode("div", {
    class: "official-meta-label"
  }, "\u89e3\u6790\u9898\u5e72", -1), Tu = [ "innerHTML" ], Cu = {
    key: 0,
    class: "official-meta-row"
  }, Su = vue.createElementVNode("div", {
    class: "official-meta-label"
  }, "\u89e3\u6790\u9009\u9879", -1), Iu = {
    class: "official-meta-options"
  }, Eu = {
    class: "official-option-label"
  }, Uu = [ "innerHTML" ], Pu = {
    key: 3,
    class: "official-result-list"
  }, Hu = {
    class: "official-result-header"
  }, Lu = {
    class: "official-result-title"
  }, ju = vue.createElementVNode("span", {
    class: "official-result-subtitle"
  }, "\u6839\u636e\u9898\u5e72\u76f8\u4f3c\u5ea6\u6392\u5e8f", -1), $u = {
    class: "aah-tag aah-tag-primary"
  }, zu = {
    class: "official-section"
  }, Mu = vue.createElementVNode("div", {
    class: "official-section-label"
  }, "\u9898\u5e72", -1), Ou = [ "innerHTML" ], Fu = {
    key: 0,
    class: "official-section"
  }, Du = vue.createElementVNode("div", {
    class: "official-section-label"
  }, "\u9009\u9879", -1), Nu = {
    class: "official-options"
  }, Ru = {
    class: "official-option-label"
  }, Bu = [ "innerHTML" ], Gu = {
    class: "official-section"
  }, Vu = vue.createElementVNode("div", {
    class: "official-section-label"
  }, "\u53c2\u8003\u7b54\u6848", -1), Ku = {
    class: "official-answer-chips"
  }, Wu = {
    key: 0,
    class: "official-answer-empty"
  }, Qu = {
    key: 4,
    class: "ai-empty"
  }, Ju = vue.createElementVNode("p", {
    class: "ai-empty-text"
  }, "\u672a\u5339\u914d\u5230\u7ed3\u679c\uff0c\u8bd5\u8bd5\u4f18\u5316\u9898\u5e72\u6216\u8c03\u6574\u9898\u578b", -1), Xu = {
    key: 5,
    class: "ai-empty"
  }, Yu = vue.createElementVNode("p", {
    class: "ai-empty-text"
  }, "\u8f93\u5165\u9898\u5e72\u5e76\u70b9\u51fb\u641c\u7d22\uff0c\u5373\u53ef\u5339\u914d\u5b98\u65b9\u9898\u5e93", -1), Zu = {
    key: 0,
    class: "ai-service-details"
  }, ed = vue.createElementVNode("summary", null, "\u670d\u52a1\u8bf4\u660e", -1), td = [ "innerHTML" ], ad = vue.defineComponent({
    __name: "Ai",
    setup(e) {
      const t = _a(), a = ce(), o = ka(), u = vue.ref(""), g = vue.ref("1"), k = vue.ref(""), q = [ {
        label: "\u5355\u9009\u9898",
        value: "0"
      }, {
        label: "\u591a\u9009\u9898",
        value: "1"
      }, {
        label: "\u586b\u7a7a\u9898",
        value: "2"
      }, {
        label: "\u5224\u65ad\u9898",
        value: "3"
      }, {
        label: "\u7b80\u7b54\u9898",
        value: "4"
      }, {
        label: "\u5176\u5b83/\u81ea\u52a8",
        value: "8"
      } ], A = vue.ref(q[0].value), S = vue.ref(false), I = vue.ref([]), E = vue.ref(false), U = vue.ref(""), P = vue.ref(false), H = vue.ref({
        question: "",
        options: []
      }), L = vue.ref(false), j = vue.computed((() => "1" === g.value)), z = vue.computed((() => j.value ? t.aiLoading : E.value)), M = vue.computed((() => z.value ? "\u641c\u7d22\u4e2d..." : "\u5f00\u59cb\u641c\u7d22")), O = vue.computed((() => t.selectTarget("search"))), F = vue.computed((() => {
        var e;
        return null == (e = O.value) ? void 0 : e.config;
      })), D = vue.computed((() => {
        const e = O.value;
        if (!e) {
          const e = t.settings.instances.length > 0;
          return {
            tone: "warning",
            title: e ? "\u5df2\u9009\u6e20\u9053\u5c1a\u672a\u586b\u5199 API Key" : "\u672a\u914d\u7f6e AI \u641c\u9898",
            desc: e ? "\u8fdb\u5165 AI \u8bbe\u7f6e\uff0c\u628a\u6e20\u9053\u7684 API Key \u586b\u4e0a\u5373\u53ef\u4f7f\u7528\u3002" : "\u8fdb\u5165 AI \u8bbe\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u6e20\u9053\uff0c\u9886\u53d6 API Key \u540e\u5373\u53ef\u4f7f\u7528 AI \u68c0\u7d22\u3002",
            model: "\u672a\u914d\u7f6e"
          };
        }
        return {
          tone: "success",
          title: "AI \u641c\u9898\u5df2\u5c31\u7eea",
          desc: `${e.channel.name} \xb7 ${e.channel.baseUrl}`,
          model: e.config.model
        };
      })), N = vue.computed((() => Boolean(t.aiMsg || t.aiLoading))), R = vue.computed((() => E.value || U.value || H.value.question || I.value.length || P.value)), B = vue.computed((() => {
        const e = O.value;
        if (!e) return "\u5f53\u524d\u6ca1\u6709\u53ef\u7528\u7684 AI \u641c\u9898\u6e20\u9053\uff0c\u8bf7\u5148\u8fdb\u5165 AI \u8bbe\u7f6e\u6dfb\u52a0\u5e76\u586b\u5199 API Key\u3002";
        const t = e.channel.docUrl || e.channel.baseUrl;
        return `\u5f53\u524d\u91c7\u7528\u7684\u662f **${e.channel.name}**\uff08${e.config.model}\uff09\u670d\u52a1\uff0c\u4ec5\u4f9b\u6d4b\u8bd5\u4f7f\u7528\uff0c\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027\u3002\n\n\u5982\u6709\u4fb5\u6743\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u5220\u9664\u3002\n\n\u5e73\u53f0\u6587\u6863\uff1a[${t}](${t})`;
      })), G = q.reduce(((e, t) => (e[t.value] = t.label.replace("/\u81ea\u52a8", ""), 
      e)), {}), formatAnswerValue = e => {
        const t = "string" == typeof e ? e.trim() : String(e).trim();
        return t && !isNonAnswerText(t) ? t : "";
      }, formatAnswer = e => {
        if (Array.isArray(e)) return e.map(formatAnswerValue).filter(Boolean);
        if ("object" == typeof e && null !== e) return Object.values(e).map(formatAnswerValue).filter(Boolean);
        if ("string" == typeof e) {
          const t = e.replace(/[\r\n]+/g, " ").trim();
          return !t || isNonAnswerText(t) ? [] : /[,\uff0c\u3001/;\uff1b\s]/.test(t) ? t.split(/[,\uff0c\u3001/;\uff1b\s]+/).map(formatAnswerValue).filter(Boolean) : [ t ];
        }
        return [];
      };
      vue.watch(g, (e => {
        "1" === e ? (I.value = [], U.value = "", P.value = false, H.value = {
          question: "",
          options: []
        }, E.value = false, S.value = false, A.value = q[0].value, L.value = false) : (k.value = `${Date.now()}-${Math.random()}`, 
        t.resetAi());
      }));
      const clearAiResult = () => {
        k.value = `${Date.now()}-${Math.random()}`, t.resetAi();
      }, openAiSettings = () => {
        a.setActiveSettingSection("ai"), a.setPage("system", "settings");
      }, handleAiSearch = async e => {
        const a = `${Date.now()}-${Math.random()}`;
        k.value = a, t.resetAi(), t.aiLoading = true;
        try {
          const n = O.value, r = await (async ({query: e, config: t, route: a, onToken: n, runScene: r = runAiScene}) => {
            let s = "";
            const i = await r("search", t, e, {
              route: a,
              stream: (null == t ? void 0 : t.stream) ?? !0,
              onToken: e => {
                s += e, null == n || n(e);
              }
            });
            return i.success ? (!s && i.text && (s = i.text, null == n || n(i.text)), {
              ...i,
              text: s || i.text
            }) : {
              ...i,
              displayMessage: i.displayMessage || "AI \u641c\u9898\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"
            };
          })({
            query: e,
            config: F.value,
            route: n ? t.routeContextFor(n) : void 0,
            onToken: e => {
              k.value === a && (t.aiLoading = !1, t.aiMsg += e);
            }
          });
          if (k.value !== a) return;
          r.success ? t.aiMsg || (t.aiMsg = r.text) : t.aiMsg = r.displayMessage || "AI \u641c\u9898\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
        } catch (n) {
          if (k.value !== a) return;
          t.aiMsg = "AI \u641c\u9898\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
        } finally {
          k.value === a && (t.aiLoading = false);
        }
      }, handleOfficialSearch = async e => {
        const t = (e => {
          const t = e.replace(/\r\n?/g, "\n").split("\n").map((e => e.trim())).filter(Boolean), a = [], n = [];
          let r = false, s = false;
          return t.forEach((e => {
            if (s) return;
            if (r && Ie.test(e)) return void (s = true);
            const t = e.match(Se);
            if (t) return r = true, void n.push(t[2].trim());
            r && n.length ? n[n.length - 1] = `${n[n.length - 1]} ${e}`.trim() : a.push(e);
          })), {
            question: cleanQuestionPrefix(a.join(" ")),
            options: n.filter(Boolean)
          };
        })(e);
        if (t.question) {
          var a, n;
          a = t.question, n = t.options, S.value || (A.value = detectAiQuestionType(a, n)), 
          H.value = t, P.value = true, E.value = true, U.value = "", L.value = false, I.value = [];
          try {
            const {success: e, message: a, data: n, needLogin: r} = await o.fuzzySearchQuestion({
              question: t.question,
              type: Number(A.value),
              options: t.options
            });
            e ? (I.value = n, n.length || (U.value = "\u5b98\u65b9\u9898\u5e93\u6682\u672a\u6536\u5f55\u8be5\u9898\uff0c\u53ef\u5c1d\u8bd5\u8865\u5145\u9898\u5e72\u6216\u8c03\u6574\u9898\u578b"), 
            L.value = !1) : (U.value = a, L.value = !!r || /\u767b\u5f55/.test(a), msg(a, "warning"));
          } catch (r) {
            const e = (null == r ? void 0 : r.message) || "\u5b98\u65b9\u9898\u5e93\u641c\u7d22\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
            U.value = e, L.value = /\u767b\u5f55/.test(e), msg(e, "error");
          } finally {
            E.value = false;
          }
        } else msg("\u8bf7\u5148\u8f93\u5165\u5b8c\u6574\u7684\u9898\u5e72\u5185\u5bb9", "warning");
      }, search = async () => {
        const e = u.value.trim();
        e ? j.value ? await handleAiSearch(e) : await handleOfficialSearch(e) : msg("\u8bf7\u8f93\u5165\u9898\u76ee\u6216\u95ee\u9898\u5185\u5bb9", "warning");
      }, onQuestionTypeChange = () => {
        S.value = true;
      }, copyAiResult = () => {
        t.aiMsg && (!function(e) {
          const t = document.createElement("input");
          t.value = e, document.body.appendChild(t), t.select(), document.execCommand("Copy"), 
          document.body.removeChild(t);
        }(t.aiMsg), msg("AI \u7ed3\u679c\u5df2\u590d\u5236", "success"));
      }, V = [ {
        label: "AI\u68c0\u7d22",
        value: "1",
        key: "ai"
      }, {
        label: "\u7231\u95ee\u7b54\u9898\u5e93",
        value: "2",
        key: "ask"
      } ];
      return (e, o) => (vue.openBlock(), vue.createBlock(Ya, null, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", Xp, [ vue.createElementVNode("section", Yp, [ vue.createElementVNode("div", Zp, [ vue.createElementVNode("span", {
          class: vue.normalizeClass([ "aah-tag", "success" === D.value.tone ? "aah-tag-success" : "aah-tag-warning" ])
        }, vue.toDisplayString(D.value.title), 3), vue.createElementVNode("strong", null, vue.toDisplayString(D.value.model), 1), vue.createElementVNode("p", null, vue.toDisplayString(D.value.desc), 1) ]), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-plain aah-btn-small",
          type: "button",
          onClick: openAiSettings
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:cog-outline",
          class: "icon-inline"
        }), vue.createTextVNode(" AI \u8bbe\u7f6e ") ]) ]), vue.createElementVNode("section", eu, [ vue.createElementVNode("div", tu, [ au, vue.createElementVNode("div", nu, [ (vue.openBlock(), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(V, (e => vue.createElementVNode("button", {
          key: e.value,
          type: "button",
          class: vue.normalizeClass([ "ai-mode-btn", {
            active: g.value === e.value
          } ]),
          onClick: t => g.value = e.value
        }, vue.toDisplayString(e.label), 11, ru))), 64)) ]) ]), vue.withDirectives(vue.createElementVNode("textarea", {
          "onUpdate:modelValue": o[0] || (o[0] = e => u.value = e),
          class: "ai-textarea",
          placeholder: "\u8bf7\u8f93\u5165\u9898\u76ee\u6216\u95ee\u9898\uff0cAI \u5c06\u4e3a\u60a8\u63d0\u4f9b\u8be6\u7ec6\u89e3\u7b54...",
          rows: "7"
        }, null, 512), [ [ vue.vModelText, u.value ] ]), "2" === g.value ? (vue.openBlock(), vue.createElementBlock("div", su, [ vue.createElementVNode("label", iu, [ ou, vue.withDirectives(vue.createElementVNode("select", {
          "onUpdate:modelValue": o[1] || (o[1] = e => A.value = e),
          class: "aah-select",
          onChange: onQuestionTypeChange
        }, [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(q, (e => vue.createElementVNode("option", {
          key: e.value,
          value: e.value
        }, vue.toDisplayString(e.label), 9, lu))), 64)) ], 544), [ [ vue.vModelSelect, A.value ] ]) ]), cu ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", pu, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary",
          type: "button",
          onClick: search,
          disabled: z.value
        }, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:magnify",
          class: "icon-inline"
        }), vue.createElementVNode("span", null, vue.toDisplayString(M.value), 1) ], 8, uu), "1" === g.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "aah-btn aah-btn-plain",
          type: "button",
          onClick: clearAiResult
        }, "\u6e05\u7a7a\u7ed3\u679c")) : vue.createCommentVNode("", true) ]) ]), vue.createElementVNode("section", du, [ vue.createElementVNode("div", mu, [ vue.createElementVNode("div", null, [ vue.createElementVNode("h3", null, vue.toDisplayString("1" === g.value ? "AI \u89e3\u7b54" : "\u7231\u95ee\u7b54\u9898\u5e93"), 1), vue.createElementVNode("p", null, vue.toDisplayString("1" === g.value ? "\u7ed3\u679c\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u7ed3\u5408\u9898\u76ee\u81ea\u884c\u6838\u5bf9" : "\u6839\u636e\u9898\u5e72\u76f8\u4f3c\u5ea6\u8fd4\u56de\u5b98\u65b9\u9898\u5e93\u5339\u914d\u7ed3\u679c"), 1) ]), vue.createElementVNode("div", hu, [ "1" === g.value && vue.unref(t).aiMsg ? (vue.openBlock(), 
        vue.createElementBlock("button", {
          key: 0,
          class: "aah-btn aah-btn-plain aah-btn-small",
          type: "button",
          onClick: copyAiResult
        }, "\u590d\u5236\u7ed3\u679c")) : vue.createCommentVNode("", true), "1" === g.value && vue.unref(t).aiMsg && !vue.unref(t).aiLoading ? (vue.openBlock(), 
        vue.createElementBlock("span", fu, "\u89e3\u7b54\u5b8c\u6210")) : vue.createCommentVNode("", true), "2" === g.value ? (vue.openBlock(), 
        vue.createElementBlock("span", {
          key: 2,
          class: vue.normalizeClass([ "aah-tag", I.value.length ? "aah-tag-success" : "aah-tag-primary" ])
        }, vue.toDisplayString(I.value.length ? "\u5339\u914d\u5b8c\u6210" : "\u7b49\u5f85\u641c\u7d22"), 3)) : vue.createCommentVNode("", true) ]) ]), "1" === g.value ? (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass([ "ai-result-content", {
            "ai-result-content-active": N.value
          } ])
        }, [ vue.unref(t).aiLoading ? (vue.openBlock(), vue.createElementBlock("div", gu, "AI \u6b63\u5728\u751f\u6210...")) : vue.unref(t).aiMsg ? (vue.openBlock(), 
        vue.createElementBlock("div", {
          key: 1,
          innerHTML: vue.unref(t).currentAiMd(),
          class: "markdown-body"
        }, null, 8, vu)) : (vue.openBlock(), vue.createElementBlock("div", yu, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:robot-outline",
          class: "ai-empty-icon"
        }), bu ])) ], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass([ "ai-result-content", {
            "ai-result-content-active": R.value
          } ])
        }, [ E.value ? (vue.openBlock(), vue.createElementBlock("div", wu, "\u641c\u7d22\u4e2d...")) : vue.createCommentVNode("", true), U.value ? (vue.openBlock(), 
        vue.createElementBlock("div", xu, [ vue.createElementVNode("span", {
          innerHTML: U.value
        }, null, 8, ku), L.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "ai-link-btn",
          type: "button",
          onClick: o[2] || (o[2] = e => vue.unref(a).setPage("system", "account"))
        }, " \u70b9\u51fb\u767b\u5f55 ")) : vue.createCommentVNode("", true) ])) : vue.createCommentVNode("", true), H.value.question ? (vue.openBlock(), 
        vue.createElementBlock("div", qu, [ vue.createElementVNode("div", _u, [ Au, vue.createElementVNode("div", {
          class: "official-meta-value",
          innerHTML: H.value.question
        }, null, 8, Tu) ]), H.value.options.length ? (vue.openBlock(), vue.createElementBlock("div", Cu, [ Su, vue.createElementVNode("div", Iu, [ (vue.openBlock(true), 
        vue.createElementBlock(vue.Fragment, null, vue.renderList(H.value.options, ((e, t) => (vue.openBlock(), vue.createElementBlock("div", {
          key: `parsed-${t}`,
          class: "official-meta-option"
        }, [ vue.createElementVNode("span", Eu, vue.toDisplayString(String.fromCharCode(65 + t)) + ".", 1), vue.createElementVNode("span", {
          class: "official-option-text",
          innerHTML: e
        }, null, 8, Uu) ])))), 128)) ]) ])) : vue.createCommentVNode("", true) ])) : vue.createCommentVNode("", true), I.value.length ? (vue.openBlock(), 
        vue.createElementBlock("div", Pu, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(I.value, ((e, t) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: `official-${t}`,
            class: "official-result-item"
          }, [ vue.createElementVNode("div", Hu, [ vue.createElementVNode("div", null, [ vue.createElementVNode("span", Lu, "\u5339\u914d\u9898\u76ee " + vue.toDisplayString(t + 1), 1), ju ]), vue.createElementVNode("span", $u, vue.toDisplayString((a = e.type, 
          G[String(a)] || "\u5176\u5b83\u9898\u578b")), 1) ]), vue.createElementVNode("div", zu, [ Mu, vue.createElementVNode("div", {
            class: "official-question",
            innerHTML: e.question
          }, null, 8, Ou) ]), e.options && e.options.length ? (vue.openBlock(), vue.createElementBlock("div", Fu, [ Du, vue.createElementVNode("ul", Nu, [ (vue.openBlock(true), 
          vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((e, a) => (vue.openBlock(), vue.createElementBlock("li", {
            key: `opt-${t}-${a}`
          }, [ vue.createElementVNode("span", Ru, vue.toDisplayString(String.fromCharCode(65 + a)) + ".", 1), vue.createElementVNode("span", {
            class: "official-option-text",
            innerHTML: e
          }, null, 8, Bu) ])))), 128)) ]) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Gu, [ Vu, vue.createElementVNode("div", Ku, [ (vue.openBlock(true), 
          vue.createElementBlock(vue.Fragment, null, vue.renderList(formatAnswer(e.answer), ((e, a) => (vue.openBlock(), vue.createElementBlock("span", {
            key: `answer-${t}-${a}`,
            class: "aah-tag aah-tag-success"
          }, vue.toDisplayString(e), 1)))), 128)), formatAnswer(e.answer).length ? vue.createCommentVNode("", true) : (vue.openBlock(), vue.createElementBlock("span", Wu, "\u6682\u65e0\u7b54\u6848\u4fe1\u606f")) ]) ]) ]);
          var a;
        })), 128)) ])) : !P.value || U.value || E.value ? U.value || E.value ? vue.createCommentVNode("", true) : (vue.openBlock(), 
        vue.createElementBlock("div", Xu, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:file-document-outline",
          class: "ai-empty-icon"
        }), Yu ])) : (vue.openBlock(), vue.createElementBlock("div", Qu, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:magnify",
          class: "ai-empty-icon"
        }), Ju ])) ], 2)) ]), "1" === g.value ? (vue.openBlock(), vue.createElementBlock("details", Zu, [ ed, vue.createElementVNode("div", {
          class: "copyright-content",
          innerHTML: vue.unref(createSafeMarkdownHtml)(B.value)
        }, null, 8, td) ])) : vue.createCommentVNode("", true) ]) ])),
        _: 1
      }));
    }
  }), nd = {
    class: "user-page"
  }, rd = {
    key: 0,
    class: "user-page__login-section"
  }, sd = {
    class: "user-page__login-box"
  }, id = {
    class: "user-page__login-header"
  }, od = vue.createElementVNode("span", {
    class: "aah-tag aah-tag-primary"
  }, "\u7528\u6237\u4e2d\u5fc3", -1), ld = vue.createElementVNode("h2", null, "\u767b\u5f55\u7231\u95ee\u7b54\u8d26\u53f7", -1), cd = vue.createElementVNode("p", null, "\u767b\u5f55\u540e\u53ef\u4f7f\u7528\u4e91\u540c\u6b65\u3001\u79ef\u5206\u548c\u4f1a\u5458\u6743\u76ca", -1), pd = {
    class: "user-page__login-switch"
  }, ud = {
    key: 0
  }, dd = {
    class: "form-item"
  }, md = {
    class: "form-item"
  }, hd = {
    key: 1
  }, fd = {
    class: "form-item"
  }, gd = vue.createElementVNode("p", {
    class: "user-page__helper"
  }, "\u5bc6\u7801\u767b\u5f55\u540e\u53ef\u5728\u672c\u9875\u300c\u5237\u65b0 API Key\u300d\u53d6\u5f97\uff0c\u6362\u8bbe\u5907\u65f6\u7c98\u8d34\u4f7f\u7528", -1), vd = [ "disabled" ], yd = {
    key: 1,
    class: "user-page__dashboard"
  }, bd = {
    class: "user-page__top-row"
  }, wd = {
    class: "user-page__header-card"
  }, xd = {
    class: "user-page__profile-main"
  }, kd = {
    class: "user-page__avatar"
  }, qd = [ "src" ], _d = {
    class: "user-page__info-text"
  }, Ad = {
    class: "user-page__username"
  }, Td = {
    key: 0,
    class: "aah-tag aah-tag-warning"
  }, Cd = {
    key: 1,
    class: "aah-tag"
  }, Sd = {
    class: "user-page__stats-grid"
  }, Id = {
    class: "user-page__stat-card"
  }, Ed = {
    class: "user-page__stat-icon user-page__stat-icon--coin"
  }, Ud = {
    class: "user-page__stat-content"
  }, Pd = vue.createElementVNode("p", {
    class: "user-page__stat-label"
  }, "\u79ef\u5206", -1), Hd = {
    class: "user-page__stat-value"
  }, Ld = {
    class: "user-page__stat-card"
  }, jd = {
    class: "user-page__stat-icon user-page__stat-icon--course"
  }, $d = {
    class: "user-page__stat-content"
  }, zd = vue.createElementVNode("p", {
    class: "user-page__stat-label"
  }, "\u8d21\u732e\u8bfe\u7a0b", -1), Md = {
    class: "user-page__stat-value"
  }, Od = {
    class: "user-page__stat-card"
  }, Fd = {
    class: "user-page__stat-icon user-page__stat-icon--question"
  }, Dd = {
    class: "user-page__stat-content"
  }, Nd = vue.createElementVNode("p", {
    class: "user-page__stat-label"
  }, "\u8d21\u732e\u9898\u76ee", -1), Rd = {
    class: "user-page__stat-value"
  }, Bd = {
    class: "user-page__apikey-section"
  }, Gd = vue.createElementVNode("div", {
    class: "user-page__section-header"
  }, [ vue.createElementVNode("div", null, [ vue.createElementVNode("h3", null, "API Key"), vue.createElementVNode("p", null, "\u7528\u4e8e API Key \u767b\u5f55\u548c\u5b98\u65b9\u9898\u5e93\u8bf7\u6c42\u9274\u6743\uff0c\u8bf7\u52ff\u6cc4\u9732\u7ed9\u4ed6\u4eba") ]) ], -1), Vd = {
    class: "user-page__apikey-display"
  }, Kd = {
    class: "user-page__apikey-value"
  }, Wd = {
    class: "user-page__apikey-actions"
  }, Qd = [ "disabled" ], Jd = {
    key: 0,
    class: "user-page__support-card"
  }, Xd = {
    class: "user-page__support-icon"
  }, Yd = vue.createElementVNode("div", {
    class: "user-page__support-content"
  }, [ vue.createElementVNode("p", {
    class: "user-page__support-title"
  }, "\u7231\u53d1\u7535\u8ba2\u9605"), vue.createElementVNode("p", {
    class: "user-page__support-desc"
  }, "\u652f\u6301\u9879\u76ee\u6301\u7eed\u8fed\u4ee3\uff0c\u89e3\u9501\u66f4\u591a\u4f1a\u5458\u6743\u76ca") ], -1), Zd = [ "href" ], em = vue.createElementVNode("div", {
    class: "user-page__tips"
  }, [ vue.createElementVNode("p", null, "\u5f53\u524d\u7528\u6237\u4f53\u7cfb\u4ec5\u7528\u4e8e\u9898\u5e93\u7f13\u5b58\u4e91\u540c\u6b65\uff0c\u66f4\u591a\u529f\u80fd\u5f00\u53d1\u4e2d") ], -1), tm = vue.defineComponent({
    __name: "User",
    setup(e) {
      const t = ka(), a = vue.ref("password"), o = vue.ref({
        username: "",
        password: ""
      }), g = vue.ref(""), v = vue.ref(false), y = vue.ref(false), x = vue.computed((() => t.isLoggedIn)), k = vue.computed((() => {
        const e = t.apiKey || "";
        return e ? e.length <= 12 ? e : `${e.slice(0, 6)}...${e.slice(-6)}` : "\u672a\u83b7\u53d6";
      })), handleLogin = async () => {
        v.value = true;
        try {
          if ("password" === a.value) {
            if (!o.value.username || !o.value.password) return void msg("\u8bf7\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801", "warning");
            const e = await t.loginByPassword(o.value.username, o.value.password);
            e.success ? (msg(e.message, "success"), o.value = {
              username: "",
              password: ""
            }) : msg(e.message, "error");
          } else {
            if (!g.value) return void msg("\u8bf7\u8f93\u5165 API Key", "warning");
            const e = await t.loginByApiKey(g.value.trim());
            e.success ? (msg(e.message, "success"), g.value = "") : msg(e.message, "error");
          }
        } finally {
          v.value = false;
        }
      }, handleLogout = async () => {
        window.confirm("\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f") && (await t.logout(), 
        msg("\u5df2\u9000\u51fa\u767b\u5f55", "success"));
      }, handleRefreshApiKey = async () => {
        if (window.confirm("\u786e\u5b9a\u8981\u5237\u65b0 API Key \u5417\uff1f\u65e7 Key \u5c06\u5931\u6548\u3002")) {
          y.value = true;
          try {
            const e = await t.refreshApiKey();
            msg(e.message, e.success ? "success" : "error");
          } finally {
            y.value = false;
          }
        }
      }, goToRegister = () => {
        window.open("https://www.aiask.site/account.html#register", "_blank");
      }, goToPasswordReset = () => {
        window.open("https://www.aiask.site/reset.html", "_blank");
      }, switchMethod = e => {
        a.value = e;
      };
      return vue.onMounted((() => {
        x.value && t.fetchUserInfo();
      })), (e, p) => (vue.openBlock(), vue.createBlock(Ya, null, {
        default: vue.withCtx((() => [ vue.createElementVNode("div", nd, [ x.value ? (vue.openBlock(), vue.createElementBlock("div", yd, [ vue.createElementVNode("div", bd, [ vue.createElementVNode("div", wd, [ vue.createElementVNode("div", xd, [ vue.createElementVNode("div", kd, [ vue.unref(t).avatar ? (vue.openBlock(), 
        vue.createElementBlock("img", {
          key: 0,
          src: vue.unref(t).avatar,
          alt: "avatar"
        }, null, 8, qd)) : (vue.openBlock(), vue.createBlock(vue.unref(vue$1.Icon), {
          key: 1,
          icon: "mdi:account",
          class: "user-page__avatar-icon"
        })) ]), vue.createElementVNode("div", _d, [ vue.createElementVNode("h2", null, vue.toDisplayString(vue.unref(t).nickname), 1), vue.createElementVNode("p", Ad, "@" + vue.toDisplayString(vue.unref(t).username), 1), vue.unref(t).isVip ? (vue.openBlock(), 
        vue.createElementBlock("span", Td, " VIP Lv." + vue.toDisplayString(vue.unref(t).level), 1)) : (vue.openBlock(), vue.createElementBlock("span", Cd, "\u666e\u901a\u7528\u6237")) ]) ]), vue.createElementVNode("div", {
          class: "user-page__actions"
        }, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-danger aah-btn-small",
          type: "button",
          onClick: handleLogout
        }, "\u9000\u51fa\u767b\u5f55") ]) ]), vue.createElementVNode("div", Sd, [ vue.createElementVNode("div", Id, [ vue.createElementVNode("div", Ed, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:star"
        }) ]), vue.createElementVNode("div", Ud, [ Pd, vue.createElementVNode("p", Hd, vue.toDisplayString(vue.unref(t).score), 1) ]) ]), vue.createElementVNode("div", Ld, [ vue.createElementVNode("div", jd, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:book-open-page-variant"
        }) ]), vue.createElementVNode("div", $d, [ zd, vue.createElementVNode("p", Md, vue.toDisplayString(vue.unref(t).stats.course_count), 1) ]) ]), vue.createElementVNode("div", Od, [ vue.createElementVNode("div", Fd, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:file-edit"
        }) ]), vue.createElementVNode("div", Dd, [ Nd, vue.createElementVNode("p", Rd, vue.toDisplayString(vue.unref(t).stats.question_count), 1) ]) ]) ]) ]), vue.createElementVNode("div", Bd, [ Gd, vue.createElementVNode("div", Vd, [ vue.createElementVNode("div", Kd, vue.toDisplayString(k.value), 1), vue.createElementVNode("div", Wd, [ vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary aah-btn-small",
          type: "button",
          disabled: y.value,
          onClick: handleRefreshApiKey
        }, vue.toDisplayString(y.value ? "\u5237\u65b0\u4e2d..." : "\u5237\u65b0 API Key"), 9, Qd) ]) ]) ]), vue.unref(t).afdianUrl ? (vue.openBlock(), 
        vue.createElementBlock("div", Jd, [ vue.createElementVNode("div", Xd, [ vue.createVNode(vue.unref(vue$1.Icon), {
          icon: "mdi:gift-outline"
        }) ]), Yd, vue.createElementVNode("a", {
          class: "aah-btn aah-btn-primary aah-btn-small user-page__support-btn",
          href: vue.unref(t).afdianUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, " \u524d\u5f80\u67e5\u770b ", 8, Zd) ])) : vue.createCommentVNode("", true) ])) : (vue.openBlock(), vue.createElementBlock("div", rd, [ vue.createElementVNode("div", sd, [ vue.createElementVNode("div", id, [ od, ld, cd, vue.createElementVNode("div", pd, [ vue.createElementVNode("button", {
          type: "button",
          class: vue.normalizeClass([ "aah-btn aah-btn-plain aah-btn-small", {
            "is-active": "password" === a.value
          } ]),
          onClick: p[0] || (p[0] = e => switchMethod("password"))
        }, " \u8d26\u53f7\u767b\u5f55 ", 2), vue.createElementVNode("button", {
          type: "button",
          class: vue.normalizeClass([ "aah-btn aah-btn-plain aah-btn-small", {
            "is-active": "apikey" === a.value
          } ]),
          onClick: p[1] || (p[1] = e => switchMethod("apikey"))
        }, " API Key \u767b\u5f55 ", 2) ]) ]), vue.createElementVNode("form", {
          class: "user-page__login-form",
          onSubmit: vue.withModifiers(handleLogin, [ "prevent" ])
        }, [ "password" === a.value ? (vue.openBlock(), vue.createElementBlock("div", ud, [ vue.createElementVNode("div", dd, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": p[2] || (p[2] = e => o.value.username = e),
          class: "aah-input",
          type: "text",
          placeholder: "\u8bf7\u8f93\u5165\u7528\u6237\u540d"
        }, null, 512), [ [ vue.vModelText, o.value.username ] ]) ]), vue.createElementVNode("div", md, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": p[3] || (p[3] = e => o.value.password = e),
          class: "aah-input",
          type: "password",
          placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
          onKeyup: vue.withKeys(handleLogin, [ "enter" ])
        }, null, 544), [ [ vue.vModelText, o.value.password ] ]) ]) ])) : (vue.openBlock(), vue.createElementBlock("div", hd, [ vue.createElementVNode("div", fd, [ vue.withDirectives(vue.createElementVNode("input", {
          "onUpdate:modelValue": p[4] || (p[4] = e => g.value = e),
          class: "aah-input",
          type: "text",
          placeholder: "\u8bf7\u8f93\u5165 API Key"
        }, null, 512), [ [ vue.vModelText, g.value ] ]), gd ]) ])), vue.createElementVNode("button", {
          class: "aah-btn aah-btn-primary user-page__login-btn",
          type: "submit",
          disabled: v.value
        }, vue.toDisplayString(v.value ? "\u767b\u5f55\u4e2d..." : "\u7acb\u5373\u767b\u5f55"), 9, vd) ], 32), vue.createElementVNode("div", {
          class: "user-page__register-tip"
        }, [ vue.createTextVNode(" \u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f "), vue.createElementVNode("button", {
          class: "user-page__link-btn",
          type: "button",
          onClick: goToRegister
        }, "\u524d\u5f80\u5b98\u7f51\u6ce8\u518c"), vue.createElementVNode("p", {
          class: "user-page__helper"
        }, [ vue.createTextVNode(" \u5fd8\u8bb0\u5bc6\u7801\uff1f"), vue.createElementVNode("button", {
          class: "user-page__link-btn",
          type: "button",
          onClick: goToPasswordReset
        }, "\u5728\u5b98\u7f51\u627e\u56de"), vue.createTextVNode("\uff1b\u4e5f\u53ef\u4f7f\u7528 API Key \u5feb\u901f\u767b\u5f55 ") ]) ]) ]) ])), em ]) ])),
        _: 1
      }));
    }
  }), am = {
    0: "\u5355\u9009\u9898",
    1: "\u591a\u9009\u9898",
    2: "\u586b\u7a7a\u9898",
    3: "\u5224\u65ad\u9898",
    4: "\u7b80\u7b54\u9898",
    8: "\u5176\u5b83"
  }, nm = /^\s*(?:(\d+)[.\u3001\uff0e)]|[\uff08(](\d+)[\uff09)])\s*(.*)$/, rm = /^(?:[\[\u3010]\s*)?(?:\u53c2\u8003\u7b54\u6848|\u6807\u51c6\u7b54\u6848|\u6b63\u786e\u7b54\u6848|\u7b54\u6848)(?:\s*[\]\u3011])?\s*[\uff1a:]\s*(.*)$/, sm = /^\s*([\[\u3010]\s*([^\]\u3011]+?)\s*[\]\u3011])\s*/, im = /^\s*(\u5355\u9009\u9898|\u5355\u9879\u9009\u62e9\u9898|\u591a\u9009\u9898|\u591a\u9879\u9009\u62e9\u9898|\u5224\u65ad\u9898|\u586b\u7a7a\u9898|\u7b80\u7b54\u9898|\u7b80\u7b54|\u95ee\u7b54\u9898|\u95ee\u7b54|\u5176\u5b83|\u5176\u4ed6)\s*[\uff1a:]\s*/, om = /([A-Za-z])\s*[.\u3001\uff0e)\uff09]\s*/g, splitQuestionBlocks = e => {
    var t;
    const a = [];
    let n = null;
    const pushCurrent = () => {
      if (!n) return;
      const e = n.lines.map((e => e.trim())).filter(Boolean);
      e.length > 0 && a.push({
        titleNo: n.titleNo,
        lines: e
      }), n = null;
    };
    for (const r of e.replace(/\r\n?/g, "\n").split("\n")) {
      const e = r.trim();
      if (!e) {
        (null == n ? void 0 : n.lines.some((e => rm.test(e)))) && pushCurrent();
        continue;
      }
      const a = e.match(nm);
      a ? (pushCurrent(), n = {
        titleNo: a[1] || a[2] || "",
        lines: [ (null == (t = a[3]) ? void 0 : t.trim()) || "" ]
      }) : (n ? n.lines.some((e => rm.test(e))) && (pushCurrent(), n = {
        titleNo: "",
        lines: []
      }) : n = {
        titleNo: "",
        lines: []
      }, n.lines.push(e));
    }
    return pushCurrent(), a;
  }, parseQuestionBlock = (e, t) => {
    const a = [], n = [], r = [];
    let s = "", i = {
      type: null,
      label: ""
    };
    e.lines.forEach(((e, t) => {
      var a;
      const o = e.match(rm);
      if (o) return void (s = (null == (a = o[1]) ? void 0 : a.trim()) || "");
      let l = e;
      if (0 === t) {
        const e = extractTypeLabel(l);
        i = e.typeInfo, l = e.content;
      }
      !i.type || isChoiceType$1(i.type) ? appendQuestionAndOptions(l, r, n) : r.push(l);
    }));
    const o = normalizeSpaces(r.join(" ")), l = i.type || inferQuestionType(o, n, s), c = normalizeAnswer(l, s, n, a);
    return validateParsedQuestion(o, l, n, c, a), s || a.push("\u7f3a\u5c11\u7b54\u6848"), 
    {
      id: `question-import-${t + 1}`,
      sourceIndex: t,
      titleNo: e.titleNo,
      type: l,
      typeLabel: i.label || am[l],
      question: o,
      options: n,
      answer: c,
      rawAnswer: s,
      errors: a
    };
  }, validateParsedQuestion = (e, t, a, n, r) => {
    if (e || r.push("\u7f3a\u5c11\u9898\u5e72"), ("0" === t || "1" === t) && a.length < 2 && r.push("\u9009\u62e9\u9898\u9009\u9879\u5c11\u4e8e 2 \u4e2a"), 
    "8" === t && r.push("\u6682\u4e0d\u652f\u6301\u8be5\u9898\u578b"), "2" === t) {
      const t = countBlankPlaceholders(e);
      t > 0 && n.length !== t && r.push("\u586b\u7a7a\u7b54\u6848\u6570\u91cf\u4e0e\u7a7a\u6570\u91cf\u4e0d\u4e00\u81f4");
    }
  }, extractTypeLabel = e => {
    let t = e.trim();
    const a = [];
    for (;t; ) {
      const e = t.match(sm);
      if (e) {
        const n = (e[2] || "").trim(), r = typeFromLabel(n);
        if (t = t.slice(e[0].length).trim(), r) return {
          content: joinQuestionParts(a, t),
          typeInfo: {
            type: r,
            label: n
          }
        };
        a.push((e[1] || "").trim());
        continue;
      }
      const n = t.match(im);
      if (n) {
        const e = (n[1] || "").trim(), r = typeFromLabel(e);
        if (t = t.slice(n[0].length).trim(), r) return {
          content: joinQuestionParts(a, t),
          typeInfo: {
            type: r,
            label: e
          }
        };
      }
      break;
    }
    return {
      content: e.trim(),
      typeInfo: {
        type: null,
        label: ""
      }
    };
  }, joinQuestionParts = (e, t) => [ ...e, t ].filter(Boolean).join(" ").trim(), typeFromLabel = e => /\u591a\u9009|\u591a\u9879/.test(e) ? "1" : /\u5355\u9009|\u5355\u9879/.test(e) ? "0" : /\u586b\u7a7a/.test(e) ? "2" : /\u5224\u65ad/.test(e) ? "3" : /\u7b80\u7b54|\u95ee\u7b54/.test(e) ? "4" : /\u5176\u5b83|\u5176\u4ed6/.test(e) ? "8" : null, isChoiceType$1 = e => "0" === e || "1" === e, appendQuestionAndOptions = (e, t, a) => {
    const n = parseOptionsFromLine(e);
    if (0 === n.length) return void t.push(e);
    const r = n[0], s = e.slice(0, r.start).trim();
    s && t.push(s), n.forEach((e => {
      e.value && a.push({
        label: e.label,
        value: e.value
      });
    }));
  }, parseOptionsFromLine = e => {
    const t = Array.from(e.matchAll(om)).filter((t => {
      const a = t.index || 0;
      return 0 === a || !/[A-Za-z0-9]/.test(e[a - 1] || "");
    }));
    return 0 === t.length ? [] : t.map(((a, n) => {
      const r = a.index || 0, s = (a.index || 0) + a[0].length, i = n + 1 < t.length && t[n + 1].index || e.length;
      return {
        label: (a[1] || "").toUpperCase(),
        value: e.slice(s, i).trim(),
        start: r
      };
    }));
  }, inferQuestionType = (e, t, a) => t.length > 0 ? countChoiceAnswers(a, t) > 1 ? "1" : "0" : normalizeJudgeAnswer(a) ? "3" : hasBlankPlaceholder(e) || a.includes("|") ? "2" : "4", normalizeAnswer = (e, t, a, n) => {
    const r = t.trim();
    if (!r) return [];
    if ("3" === e) {
      const e = normalizeJudgeAnswer(r);
      return e ? [ e ] : (n.push("\u5224\u65ad\u9898\u7b54\u6848\u4e0d\u6b63\u786e"), 
      []);
    }
    if ("0" === e || "1" === e) {
      const t = normalizeChoiceAnswer(r, a, n);
      return "0" === e && t.length > 1 && n.push("\u5355\u9009\u9898\u7b54\u6848\u53ea\u80fd\u6709\u4e00\u4e2a"), 
      t;
    }
    return "2" === e ? splitAnswerText(r, /\|/) : [ r ];
  }, normalizeChoiceAnswer = (e, t, a) => {
    const n = matchChoiceAnswerTexts(e, t);
    if (n.length > 0) return n;
    const r = parseChoiceAnswerLabels(e), s = [];
    return r.length > 0 ? (r.forEach((e => {
      const n = t.find((t => t.label === e));
      n ? s.push(n.value) : a.push(`\u7b54\u6848\u4e0d\u5728\u9009\u9879\u4e2d\uff1a${e}`);
    })), s) : (splitAnswerText(e, /[|,\uff0c\u3001;\uff1b]/).forEach((e => {
      const n = t.find((t => t.value === e));
      n ? s.push(n.value) : a.push(`\u7b54\u6848\u4e0d\u5728\u9009\u9879\u4e2d\uff1a${e}`);
    })), s);
  }, countChoiceAnswers = (e, t) => {
    const a = matchChoiceAnswerTexts(e, t);
    if (a.length > 0) return a.length;
    const n = parseChoiceAnswerLabels(e);
    return n.length > 0 ? n.length : splitAnswerText(e, /[|,\uff0c\u3001;\uff1b]/).filter((e => t.some((t => t.value === e)))).length;
  }, matchChoiceAnswerTexts = (e, t) => {
    const a = e.trim(), n = t.find((e => e.value === a));
    if (n) return [ n.value ];
    const r = splitAnswerText(e, /[|,\uff0c\u3001;\uff1b]/);
    if (0 === r.length) return [];
    const s = [];
    for (const i of r) {
      const e = t.find((e => e.value === i));
      if (!e) return [];
      s.push(e.value);
    }
    return s;
  }, parseChoiceAnswerLabels = e => {
    const t = e.trim().toUpperCase();
    if (!t) return [];
    if (/^[A-Z]+$/.test(t)) return Array.from(t);
    const a = t.split(/[\s|,\uff0c\u3001;\uff1b]+/).map((e => e.trim())).filter(Boolean);
    return a.every((e => /^[A-Z]$/.test(e))) ? a : [];
  }, hasBlankPlaceholder = e => countBlankPlaceholders(e) > 0, countBlankPlaceholders = e => Array.from(e.matchAll(/\uff08\s*\uff09|\(\s*\)|_{2,}|-{2,}|\[\s*\]/g)).length, normalizeSpaces = e => e.replace(/\s+/g, " ").trim(), isChoiceType = e => "0" === e || "1" === e, normalizeImportText = e => e.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim(), lm = "ques1_", cm = "AiAsk_ques1_", buildQuestionImportPlan = (e, t, a) => {
    const n = new Set(t.map(getHashFromCacheKey).filter(Boolean)), r = {
      total: e.length,
      valid: 0,
      error: 0,
      create: 0,
      overwrite: 0,
      skip: 0
    }, s = e.map((e => {
      const t = (e => {
        if (e.errors.length > 0) return null;
        const t = normalizeImportText(e.question), a = isChoiceType(e.type) ? e.options.map((e => normalizeImportText(e.value))).filter(Boolean) : [], n = e.answer.map((e => normalizeImportText(e))).filter(Boolean);
        return t && 0 !== n.length ? {
          type: e.type,
          question: t,
          options: a,
          answer: n
        } : null;
      })(e);
      if (!t) return r.error += 1, {
        parsed: e,
        question: t,
        cacheKey: "",
        status: "error",
        errors: e.errors.length > 0 ? e.errors : [ "\u9898\u5e72\u6216\u7b54\u6848\u4e3a\u7a7a" ]
      };
      r.valid += 1;
      const s = (e => {
        const t = Array.from(e.options);
        return t.sort(), md5(`${e.type}${e.question}${t.join("")}`.replace(/\s/g, ""));
      })(t), i = `${lm}${s}`, o = n.has(s) ? a : "create";
      return r[o] += 1, n.add(s), {
        parsed: e,
        question: t,
        cacheKey: i,
        status: o,
        errors: []
      };
    }));
    return {
      strategy: a,
      items: s,
      stats: r
    };
  }, getHashFromCacheKey = e => e.startsWith(cm) ? e.slice(12) : e.startsWith(lm) ? e.slice(6) : "", pm = {
    class: "question-tool"
  }, um = vue.createElementVNode("div", {
    class: "info-banner"
  }, [ vue.createElementVNode("div", {
    class: "info-title"
  }, "\u9898\u5e93\u5bfc\u5165\u8bf4\u660e"), vue.createElementVNode("div", {
    class: "info-body"
  }, " \u9898\u5e93\u5bfc\u5165\u540e\u53ef\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u5339\u914d\u641c\u7d22\uff0c\u8bf7\u786e\u4fdd\u9898\u5e93\u4e0e\u7b54\u9898\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6cd5\u5339\u914d\u3002 ") ], -1), dm = {
    class: "qt-toolbar"
  }, mm = {
    class: "qt-strategy"
  }, hm = vue.createElementVNode("span", {
    class: "qt-strategy-label"
  }, "\u91cd\u590d\u9898", -1), fm = {
    class: "qt-radio"
  }, gm = {
    class: "qt-radio"
  }, vm = [ "disabled" ], ym = [ "disabled" ], bm = {
    class: "qt-stats"
  }, wm = {
    class: "qt-stat"
  }, xm = {
    class: "qt-stat success"
  }, km = {
    class: "qt-stat danger"
  }, qm = {
    class: "qt-stat"
  }, _m = {
    class: "qt-stat warning"
  }, Am = {
    class: "qt-stat muted"
  }, Tm = {
    class: "qt-grid"
  }, Cm = {
    class: "qt-editor"
  }, Sm = {
    class: "qt-preview"
  }, Im = {
    class: "import_question"
  }, Em = {
    key: 0,
    class: "qt-empty"
  }, Um = {
    class: "qt-card-head"
  }, Pm = {
    class: "qt-title-no"
  }, Hm = {
    class: "qt-tag danger"
  }, Lm = {
    class: "qt-question"
  }, jm = vue.createElementVNode("span", {
    class: "label"
  }, "\u9898\u76ee:", -1), $m = {
    key: 0,
    class: "qt-options"
  }, zm = {
    key: 1,
    class: "qt-answer"
  }, Mm = vue.createElementVNode("span", {
    class: "label"
  }, "\u7b54\u6848:", -1), Om = {
    key: 2,
    class: "qt-error"
  }, Fm = vue.defineComponent({
    __name: "QuestionTool",
    setup(e) {
      const t = vue.ref(""), a = _a(), o = vue.ref(false), u = vue.ref("overwrite"), m = vue.ref(Cache.match("ques1_")), h = vue.computed((() => (e => splitQuestionBlocks(e).map(((e, t) => parseQuestionBlock(e, t))))(t.value))), f = vue.computed((() => buildQuestionImportPlan(h.value, m.value, u.value))), g = vue.computed((() => f.value.items.filter((e => e.question && "skip" !== e.status)))), x = {
        create: "\u5c06\u65b0\u589e",
        overwrite: "\u5c06\u8986\u76d6",
        skip: "\u5c06\u8df3\u8fc7",
        error: "\u9519\u8bef"
      }, statusClass = e => ({
        "qt-card-error": "error" === e.status,
        "qt-card-warning": "overwrite" === e.status || "skip" === e.status
      }), formatOptions = e => e.parsed.options.map((t => ({
        label: `${t.label}. ${t.value}`,
        isTrue: e.parsed.answer.includes(t.value)
      }))), repairQuestionText = async () => {
        var e;
        const n = t.value.trim();
        if (n) {
          o.value = true;
          try {
            const r = await (async ({text: e, config: t, runScene: a = runAiScene}) => {
              const n = e.trim();
              if (!n) return {
                success: !1,
                text: e,
                message: "\u8bf7\u5148\u8f93\u5165\u9700\u8981\u6574\u7406\u7684\u9898\u5e93\u6587\u672c",
                duration: 0
              };
              const r = await a("repair", t, (e => `\u8bf7\u5c06\u4e0b\u9762\u7684\u539f\u59cb\u9898\u5e93\u6587\u672c\u6574\u7406\u4e3a\u201c\u9898\u5e93\u5bfc\u5165\u683c\u5f0f\u201d\uff0c\u53ea\u8f93\u51fa\u6574\u7406\u540e\u7684\u9898\u5e93\u6587\u672c\uff0c\u4e0d\u8981\u89e3\u91ca\u3002\n\n\u9898\u5e93\u5bfc\u5165\u683c\u5f0f\u8981\u6c42\uff1a\n1. \u6bcf\u9898\u72ec\u7acb\u7f16\u53f7\uff0c\u4f8b\u5982\uff1a1. [\u5355\u9009\u9898] \u9898\u5e72\n2. \u652f\u6301\u9898\u578b\uff1a\u5355\u9009\u9898\u3001\u591a\u9009\u9898\u3001\u5224\u65ad\u9898\u3001\u586b\u7a7a\u9898\u3001\u7b80\u7b54\u9898\n3. \u9009\u62e9\u9898\u9009\u9879\u4f7f\u7528 A. B. C. D. \u683c\u5f0f\uff0c\u6bcf\u4e2a\u9009\u9879\u72ec\u5360\u4e00\u884c\n4. \u7b54\u6848\u884c\u652f\u6301\u56fa\u5b9a\u5199\u6cd5\uff1a\u7b54\u6848:A \u6216 \u7b54\u6848:A|C \u6216 \u7b54\u6848:\u6b63\u786e\n5. \u586b\u7a7a\u9898\u591a\u4e2a\u7b54\u6848\u7528 | \u5206\u9694\n6. \u65e0\u6cd5\u786e\u5b9a\u7b54\u6848\u65f6\u4fdd\u7559\u9898\u5e72\u548c\u9009\u9879\uff0c\u5e76\u5199\uff1a\u7b54\u6848:\n7. \u5224\u65ad\u9898\u4e0d\u8981\u4fdd\u7559 A/B \u9009\u9879\uff0c\u5373\u4f7f\u539f\u6587\u5305\u542b A. \u5bf9 B. \u9519\u3001A. \u9519 B. \u5bf9\u3001A. \u6b63\u786e B. \u9519\u8bef\n8. \u5224\u65ad\u9898\u7b54\u6848\u53ea\u80fd\u5199\u4e3a\uff1a\u7b54\u6848:\u6b63\u786e \u6216 \u7b54\u6848:\u9519\u8bef\n9. \u5224\u65ad\u9898\u539f\u6587\u7b54\u6848\u662f\u201c\u5bf9\u3001\u6b63\u786e\u3001\u662f\u3001\u221a\u3001T\u3001true\u201d\u65f6\u8f93\u51fa \u7b54\u6848:\u6b63\u786e\uff1b\u539f\u6587\u7b54\u6848\u662f\u201c\u9519\u3001\u9519\u8bef\u3001\u5426\u3001\xd7\u3001F\u3001false\u201d\u65f6\u8f93\u51fa \u7b54\u6848:\u9519\u8bef\n10. \u5224\u65ad\u9898\u539f\u6587\u7b54\u6848\u662f\u9009\u9879\u5b57\u6bcd\u65f6\uff0c\u5148\u6309\u539f\u6587 A/B \u9009\u9879\u6620\u5c04\u5230\u201c\u5bf9/\u9519/\u6b63\u786e/\u9519\u8bef\u201d\uff0c\u518d\u8f93\u51fa \u7b54\u6848:\u6b63\u786e \u6216 \u7b54\u6848:\u9519\u8bef\n11. \u539f\u6587\u4f7f\u7528 #9\u3001#10 \u8fd9\u7c7b\u7f16\u53f7\u65f6\uff0c\u6574\u7406\u4e3a 9.\u300110.\n12. \u9898\u5e72\u524d\u7684\u201c\u9898\u76ee:\u201d\u53ea\u4f5c\u4e3a\u5b57\u6bb5\u6807\u8bb0\uff0c\u8f93\u51fa\u65f6\u5220\u9664\n13. \u4e0d\u8981\u8f93\u51fa Markdown \u4ee3\u7801\u5757\uff0c\u4e0d\u8981\u8f93\u51fa\u8bf4\u660e\u6587\u5b57\n\n\u5224\u65ad\u9898\u6574\u7406\u793a\u4f8b\uff1a\n\u539f\u6587\uff1a\n#9\n\u5224\u65ad\u9898\n\u9519\u8bef\n\u9898\u76ee:\u7ecf\u7eb1\u6307\u7684\u662f\u7ec7\u7269\u7684\u5e03\u8fb9\u5230\u53e6\u4e00\u4e2a\u5e03\u8fb9\u7684\u7eb1\u7ebf\uff0c\u662f\u673a\u7ec7\u7269\u7684\u6a2a\u5411\u7eb1\u7ebf\uff0c\u4e5f\u4fd7\u79f0\u4e3a\u6a2a\u7eb1\u3002 A. \u5bf9 B. \u9519\n\n\u8f93\u51fa\uff1a\n9. [\u5224\u65ad\u9898] \u7ecf\u7eb1\u6307\u7684\u662f\u7ec7\u7269\u7684\u5e03\u8fb9\u5230\u53e6\u4e00\u4e2a\u5e03\u8fb9\u7684\u7eb1\u7ebf\uff0c\u662f\u673a\u7ec7\u7269\u7684\u6a2a\u5411\u7eb1\u7ebf\uff0c\u4e5f\u4fd7\u79f0\u4e3a\u6a2a\u7eb1\u3002\n\u7b54\u6848:\u9519\u8bef\n\n\u539f\u6587\uff1a\n#10\n\u5224\u65ad\u9898\n\u9519\u8bef\n\u9898\u76ee:\u7acb\u4f53\u88c1\u526a\u64cd\u4f5c\u6b65\u9aa4\uff1a\u6b3e\u5f0f\u5206\u6790\u2014\u80da\u5e03\u6574\u7406\u2014\u522b\u6837\u2014\u70b9\u5f71\u2014\u4fee\u7248\u2014\u7ec4\u88c5\u8bd5\u7a7f\u2014\u62d3\u677f\u3002 A. \u9519 B. \u5bf9\n\n\u8f93\u51fa\uff1a\n10. [\u5224\u65ad\u9898] \u7acb\u4f53\u88c1\u526a\u64cd\u4f5c\u6b65\u9aa4\uff1a\u6b3e\u5f0f\u5206\u6790\u2014\u80da\u5e03\u6574\u7406\u2014\u522b\u6837\u2014\u70b9\u5f71\u2014\u4fee\u7248\u2014\u7ec4\u88c5\u8bd5\u7a7f\u2014\u62d3\u677f\u3002\n\u7b54\u6848:\u9519\u8bef\n\n\u539f\u59cb\u9898\u5e93\u6587\u672c\uff1a\n${e.trim()}`)(n), {
                stream: !1
              });
              if (!r.success) return {
                success: !1,
                text: e,
                message: r.displayMessage || "AI \u6574\u7406\u9898\u5e93\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
                duration: r.duration
              };
              const s = (e => {
                const t = e.trim(), a = t.match(/^```(?:\w+)?\s*([\s\S]*?)\s*```$/);
                return ((null == a ? void 0 : a[1]) || t).trim();
              })(r.text);
              return s ? {
                success: !0,
                text: s,
                message: "",
                duration: r.duration
              } : {
                success: !1,
                text: e,
                message: "AI \u672a\u8fd4\u56de\u53ef\u7528\u9898\u5e93\u6587\u672c",
                duration: r.duration
              };
            })({
              text: n,
              config: null == (e = a.selectTarget("repair")) ? void 0 : e.config
            });
            if (!r.success) return void msg(r.message || "AI \u6574\u7406\u9898\u5e93\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5", "warning");
            t.value = r.text, msg(`AI \u6574\u7406\u5b8c\u6210\uff0c\u8017\u65f6 ${r.duration}ms\uff0c\u8bf7\u6838\u5bf9\u9884\u89c8\u540e\u518d\u5bfc\u5165`, "success");
          } catch (r) {
            msg((null == r ? void 0 : r.message) || "AI \u6574\u7406\u9898\u5e93\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5", "error");
          } finally {
            o.value = false;
          }
        } else msg("\u8bf7\u5148\u8f93\u5165\u9700\u8981\u6574\u7406\u7684\u9898\u5e93\u6587\u672c", "warning");
      }, importQuestion = () => {
        const e = f.value, t = e.items.filter((e => e.question && "skip" !== e.status));
        if (0 === t.length) return void msg("\u6682\u65e0\u53ef\u5bfc\u5165\u9898\u76ee\uff0c\u8bf7\u5148\u4fee\u6b63\u9519\u8bef\u9898\u6216\u8c03\u6574\u91cd\u590d\u9898\u7b56\u7565", "warning");
        t.forEach((e => {
          e.question && Answer.cacheAnswer(e.question);
        })), m.value = Cache.match("ques1_");
        const a = e.stats;
        msg(`\u5bfc\u5165\u5b8c\u6210\uff1a\u65b0\u589e ${a.create} \u9898\uff0c\u8986\u76d6 ${a.overwrite} \u9898\uff0c\u8df3\u8fc7 ${a.skip} \u9898\uff0c\u9519\u8bef ${a.error} \u9898`, "success");
      };
      return (e, a) => (vue.openBlock(), vue.createElementBlock("div", pm, [ um, vue.createElementVNode("div", dm, [ vue.createElementVNode("div", mm, [ hm, vue.createElementVNode("label", fm, [ vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": a[0] || (a[0] = e => u.value = e),
        type: "radio",
        value: "overwrite"
      }, null, 512), [ [ vue.vModelRadio, u.value ] ]), vue.createTextVNode(" \u8986\u76d6 ") ]), vue.createElementVNode("label", gm, [ vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": a[1] || (a[1] = e => u.value = e),
        type: "radio",
        value: "skip"
      }, null, 512), [ [ vue.vModelRadio, u.value ] ]), vue.createTextVNode(" \u8df3\u8fc7 ") ]) ]), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-plain",
        type: "button",
        disabled: o.value || !t.value.trim(),
        onClick: repairQuestionText
      }, vue.toDisplayString(o.value ? "AI \u6574\u7406\u4e2d..." : "AI \u6574\u7406\u9898\u5e93"), 9, vm), vue.createElementVNode("button", {
        class: "aah-btn aah-btn-primary",
        type: "button",
        disabled: 0 === g.value.length,
        onClick: importQuestion
      }, "\u5bfc\u5165\u6709\u6548\u9898", 8, ym) ]), vue.createElementVNode("div", bm, [ vue.createElementVNode("span", wm, "\u5171 " + vue.toDisplayString(f.value.stats.total) + " \u9898", 1), vue.createElementVNode("span", xm, "\u6709\u6548 " + vue.toDisplayString(f.value.stats.valid) + " \u9898", 1), vue.createElementVNode("span", km, "\u9519\u8bef " + vue.toDisplayString(f.value.stats.error) + " \u9898", 1), vue.createElementVNode("span", qm, "\u65b0\u589e " + vue.toDisplayString(f.value.stats.create) + " \u9898", 1), vue.createElementVNode("span", _m, "\u8986\u76d6 " + vue.toDisplayString(f.value.stats.overwrite) + " \u9898", 1), vue.createElementVNode("span", Am, "\u8df3\u8fc7 " + vue.toDisplayString(f.value.stats.skip) + " \u9898", 1) ]), vue.createElementVNode("div", Tm, [ vue.createElementVNode("div", Cm, [ vue.withDirectives(vue.createElementVNode("textarea", {
        "onUpdate:modelValue": a[2] || (a[2] = e => t.value = e),
        class: "qt-textarea",
        placeholder: "\u652f\u6301\u9898\u578b\uff1a\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u3001\u586b\u7a7a\u3001\u7b80\u7b54\n\n\u57fa\u7840\u89c4\u5219\uff1a\n1. \u63a8\u8350\u4f7f\u7528\u9898\u53f7\uff0c\u5982 1. 1\u30011\uff0e\uff081\uff09\u6216 (1)\n2. \u65e0\u9898\u53f7\u65f6\uff0c\u7cfb\u7edf\u4f1a\u6309\u7a7a\u884c\u548c\u7b54\u6848\u884c\u63a8\u65ad\u9898\u5757\n3. \u7b54\u6848\u884c\u652f\u6301\uff1a\u7b54\u6848\uff1a\u53c2\u8003\u7b54\u6848\uff1a\u6b63\u786e\u7b54\u6848\uff1a\u6807\u51c6\u7b54\u6848\uff1a\n4. \u9009\u9879\u652f\u6301\uff1aA. A\u3001A\uff0eA) A\uff09\n5. \u652f\u6301\u884c\u5185\u9009\u9879\uff1aA.\u7532 B.\u4e59 C.\u4e19 D.\u4e01\n6. \u586b\u7a7a\u9898\u591a\u4e2a\u7b54\u6848\u7528 | \u5206\u9694\n7. \u5224\u65ad\u9898\u652f\u6301\uff1a\u6b63\u786e\u3001\u9519\u8bef\u3001\u5bf9\u3001\u9519\u3001\u662f\u3001\u5426\u3001\u221a\u3001\xd7\u3001T\u3001F\n\n\u793a\u4f8b\uff1a\n1. [\u5355\u9009\u9898] \u9a7e\u9a76\u4eba\u6709\u4e0b\u5217\u54ea\u79cd\u8fdd\u6cd5\u884c\u4e3a\u4e00\u6b21\u8bb06\u5206\uff1f\nA\u3001\u4f7f\u7528\u5176\u4ed6\u8f66\u8f86\u884c\u9a76\u8bc1\nB\u3001\u996e\u9152\u540e\u9a7e\u9a76\u673a\u52a8\u8f66\nC\u3001\u8f66\u901f\u8d85\u8fc7\u89c4\u5b9a\u65f6\u901f50%\u4ee5\u4e0a\nD\u3001\u8fdd\u6cd5\u5360\u7528\u5e94\u6025\u8f66\u9053\u884c\u9a76\n\u7b54\u6848:D\n\n2\u3001\u3010\u591a\u9009\u9898\u3011 \u4e0b\u5217\u5c5e\u4e8e\u6625\u5b63\u7684\u6708\u4efd\u662f\uff1f\nA.\u4e00\u6708 B.\u4e09\u6708 C.\u56db\u6708 D.\u5341\u4e8c\u6708\n\u53c2\u8003\u7b54\u6848\uff1aBC\n\n3\uff0e\u56fd\u9645\u8c61\u68cb\u8d77\u6e90\u4e8e\u82f1\u56fd\u5417\uff1f\n\u7b54\u6848: \u5bf9\n\n\uff084\uff09\u6211\u56fd\u53e4\u5178\u56db\u5927\u540d\u8457\u662f\uff08\uff09\uff08\uff09\uff08\uff09\uff08\uff09\n\u7b54\u6848: \u7ea2\u697c\u68a6|\u6c34\u6d52\u4f20|\u4e09\u56fd\u6f14\u4e49|\u897f\u6e38\u8bb0\n\n(5) \u5982\u4f55\u4fdd\u6301\u8eab\u4f53\u5065\u5eb7\uff1f\n\u6807\u51c6\u7b54\u6848: \u89c4\u5f8b\u996e\u98df\u3001\u575a\u6301\u953b\u70bc\uff0c\u65e9\u7761\u65e9\u8d77\uff0c\u5b9a\u671f\u4f53\u68c0\u3002",
        rows: "24"
      }, null, 512), [ [ vue.vModelText, t.value ] ]) ]), vue.createElementVNode("div", Sm, [ vue.createElementVNode("div", Im, [ 0 === f.value.items.length ? (vue.openBlock(), 
      vue.createElementBlock("div", Em, "\u8f93\u5165\u9898\u76ee\u540e\u5c06\u81ea\u52a8\u89e3\u6790\u5e76\u9884\u89c8")) : vue.createCommentVNode("", true), (vue.openBlock(true), 
      vue.createElementBlock(vue.Fragment, null, vue.renderList(f.value.items, (e => (vue.openBlock(), vue.createElementBlock("div", {
        key: e.parsed.id,
        class: vue.normalizeClass([ "qt-card", statusClass(e) ])
      }, [ vue.createElementVNode("div", Um, [ vue.createElementVNode("span", Pm, "#" + vue.toDisplayString(e.parsed.titleNo || e.parsed.sourceIndex + 1), 1), vue.createElementVNode("span", Hm, vue.toDisplayString(e.parsed.typeLabel), 1), vue.createElementVNode("span", {
        class: vue.normalizeClass([ "qt-tag", e.status ])
      }, vue.toDisplayString(x[e.status]), 3) ]), vue.createElementVNode("p", Lm, [ jm, vue.createTextVNode(vue.toDisplayString(e.parsed.question), 1) ]), e.parsed.options.length ? (vue.openBlock(), 
      vue.createElementBlock("div", $m, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(formatOptions(e), (e => (vue.openBlock(), vue.createElementBlock("span", {
        key: e.label,
        class: vue.normalizeClass([ "qt-tag", {
          success: e.isTrue
        } ])
      }, vue.toDisplayString(e.label), 3)))), 128)) ])) : vue.createCommentVNode("", true), e.parsed.answer.length ? (vue.openBlock(), vue.createElementBlock("p", zm, [ Mm, vue.createTextVNode(vue.toDisplayString(e.parsed.answer.join(" | ")), 1) ])) : vue.createCommentVNode("", true), e.errors.length ? (vue.openBlock(), 
      vue.createElementBlock("div", Om, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.errors, (e => (vue.openBlock(), vue.createElementBlock("p", {
        key: e
      }, vue.toDisplayString(e), 1)))), 128)) ])) : vue.createCommentVNode("", true) ], 2)))), 128)) ]) ]) ]) ]));
    }
  }), Dm = {
    class: "tabs-bar",
    role: "tablist"
  }, Nm = [ "aria-selected", "onClick" ], Rm = vue.defineComponent({
    __name: "TabsBar",
    props: {
      tabs: {},
      modelValue: {}
    },
    emits: [ "update:modelValue" ],
    setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("div", Dm, [ (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.tabs, (t => (vue.openBlock(), 
    vue.createElementBlock("button", {
      key: t.key,
      type: "button",
      role: "tab",
      "aria-selected": e.modelValue === t.key,
      class: vue.normalizeClass([ "tab-item", {
        active: e.modelValue === t.key
      } ]),
      onClick: a => e.$emit("update:modelValue", t.key)
    }, vue.toDisplayString(t.label), 11, Nm)))), 128)) ]))
  }), Bm = vue.defineComponent({
    __name: "ThemeSwitcher",
    props: {
      compact: {
        type: Boolean,
        default: false
      }
    },
    setup(e) {
      const t = e, a = ce(), i = [ {
        key: "light",
        label: "\u6d45\u8272"
      }, {
        key: "dark",
        label: "\u6df1\u8272"
      }, {
        key: "auto",
        label: "\u8ddf\u968f\u7cfb\u7edf"
      } ], o = [ {
        key: "light",
        label: "\u6d45"
      }, {
        key: "dark",
        label: "\u6df1"
      }, {
        key: "auto",
        label: "\u7cfb\u7edf"
      } ], l = vue.computed((() => t.compact ? o : i)), c = vue.computed({
        get: () => a.app.theme,
        set: e => a.setConfig({
          theme: e
        })
      });
      return (e, t) => (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([ "theme-switcher", {
          "theme-switcher-compact": e.compact
        } ])
      }, [ vue.createVNode(tn, {
        modelValue: c.value,
        "onUpdate:modelValue": t[0] || (t[0] = e => c.value = e),
        segments: l.value
      }, null, 8, [ "modelValue", "segments" ]) ], 2));
    }
  });

  function useTheme(e) {
    const t = ce(), a = function() {
      const e = vue.ref(false);
      if ("undefined" == typeof window || !window.matchMedia) return {
        isDark: e,
        attach: () => {},
        detach: () => {}
      };
      const t = window.matchMedia("(prefers-color-scheme: dark)");
      e.value = t.matches;
      const onChange = t => {
        e.value = t.matches;
      };
      return {
        isDark: e,
        attach: () => t.addEventListener("change", onChange),
        detach: () => t.removeEventListener("change", onChange)
      };
    }();
    vue.onMounted((() => {
      a.attach(), vue.watchEffect((() => {
        const n = e.value;
        if (!n) return;
        const r = (s = t.app.theme, i = a.isDark.value, "light" === s || "dark" === s ? s : i ? "dark" : "light");
        var s, i;
        n.setAttribute("data-theme", r), n.style.visibility = "visible";
      }));
    })), vue.onBeforeUnmount((() => {
      a.detach();
    }));
  }

  const Gm = {
    class: "el_wrapper",
    style: {
      "z-index": "9999999 !important"
    }
  }, Vm = {
    class: "floating-title"
  }, Km = [ "src" ], Wm = {
    class: "floating-name"
  }, Qm = {
    class: "floating-version"
  }, Jm = {
    class: "floating-actions"
  }, Xm = {
    key: 0,
    class: "sub-segmented-row"
  }, Ym = {
    class: "floating-body"
  }, Zm = {
    class: "floating-scroll custom-scroll"
  }, eh = {
    class: "mini-tooltip-wrapper"
  }, th = [ "src" ], ah = {
    key: 0,
    class: "mini-tooltip"
  }, nh = vue.defineComponent({
    __name: "App",
    setup(e) {
      const t = ce(), a = Aa(), s = de(), u = ka(), g = _a();
      g.loadCatalog(), t.app.showFloat = t.app.defaultShowFloat;
      const y = vue.ref(null), w = vue.ref(null);
      useTheme(w);
      const x = [ {
        key: "overview",
        label: "\u6982\u89c8"
      }, {
        key: "ask",
        label: "\u7b54\u9898"
      }, {
        key: "library",
        label: "\u9898\u5e93"
      }, {
        key: "ai",
        label: "AI"
      }, {
        key: "system",
        label: "\u7cfb\u7edf"
      } ], k = [ {
        key: "manage",
        label: "\u7ba1\u7406"
      }, {
        key: "preview",
        label: "\u9884\u89c8"
      }, {
        key: "tool",
        label: "\u9898\u76ee\u5de5\u5177"
      } ], q = [ {
        key: "settings",
        label: "\u8bbe\u7f6e"
      }, {
        key: "logs",
        label: "\u65e5\u5fd7"
      }, {
        key: "account",
        label: "\u7528\u6237"
      } ], _ = vue.computed({
        get: () => t.page,
        set: e => {
          t.setPage(e, {
            library: "manage",
            system: "settings"
          }[e] ?? "");
        }
      }), A = vue.computed({
        get: () => t.subPage,
        set: e => t.setPage(t.page, e)
      }), C = vue.reactive({
        dragging: false,
        offsetX: 0,
        offsetY: 0
      }), E = vue.reactive({
        top: "15vh",
        left: "50%",
        useTransform: true
      });
      W[ne + "app"] = t, W[ne + "ask"] = a, W[ne + "api"] = s, W[ne + "user"] = u, W[ne + "ai"] = g;
      const showOrHide = () => {
        t.app.showFloat = !t.app.showFloat;
      };
      document.onkeydown = function(e) {
        if (!t.app.hotkeyEnabled) return;
        const a = (e => {
          const t = e.split("+");
          return {
            ctrl: t.includes("Ctrl"),
            shift: t.includes("Shift"),
            alt: t.includes("Alt"),
            key: t[t.length - 1]
          };
        })(t.app.hotkey), n = "ArrowUp" === (r = a.key) ? "ArrowUp" : 1 === r.length ? "Key" + r.toUpperCase() : r;
        var r;
        e.ctrlKey === a.ctrl && e.shiftKey === a.shift && e.altKey === a.alt && e.code === n && (e.preventDefault(), 
        t.app.showFloat = !t.app.showFloat);
      }, "c0400763e1c557daa3e02d0bcb13ae6a" !== ksv && (() => {
        const e = document.createElement("a");
        e.href = location.href, e.style.display = "none", document.body.appendChild(e), 
        e.click();
      })();
      const U = vue.computed((() => ({
        width: `min(${t.app.dialogWidth}px, calc(100vw - 32px))`,
        maxHeight: "calc(100vh - 80px)",
        top: E.top,
        left: E.left,
        transform: E.useTransform ? "translateX(-50%)" : "none"
      }))), P = vue.reactive({
        resizing: false,
        startX: 0,
        startWidth: 0
      }), handleResizeMove = e => {
        if (!P.resizing) return;
        const a = e.clientX - P.startX;
        t.setDialogWidth(P.startWidth + a);
      }, stopResize = () => {
        P.resizing && (P.resizing = false, window.removeEventListener("pointermove", handleResizeMove), 
        window.removeEventListener("pointerup", stopResize));
      }, startResize = e => {
        e.preventDefault(), e.stopPropagation(), P.resizing = true, P.startX = e.clientX, 
        P.startWidth = t.app.dialogWidth, window.addEventListener("pointermove", handleResizeMove), 
        window.addEventListener("pointerup", stopResize);
      }, handleDragMove = e => {
        if (!C.dragging || !y.value) return;
        const t = y.value, {clientX: a, clientY: n} = e, r = t.offsetWidth, s = t.offsetHeight, i = window.innerWidth - r, o = window.innerHeight - s;
        let l = a - C.offsetX, c = n - C.offsetY;
        l = Math.min(Math.max(0, l), Math.max(0, i)), c = Math.min(Math.max(0, c), Math.max(0, o)), 
        E.left = `${l}px`, E.top = `${c}px`, E.useTransform = false;
      }, stopDrag = () => {
        C.dragging && (C.dragging = false, window.removeEventListener("pointermove", handleDragMove), 
        window.removeEventListener("pointerup", stopDrag));
      }, startDrag = e => {
        if ((e => {
          if (!(e instanceof HTMLElement)) return false;
          const t = e.tagName;
          return [ "BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "OPTION" ].includes(t) || !!e.closest(".floating-btn");
        })(e.target)) return;
        if (!y.value) return;
        e.preventDefault();
        const t = y.value.getBoundingClientRect();
        E.useTransform && (E.left = `${t.left}px`, E.top = `${t.top}px`), C.dragging = true, 
        C.offsetX = e.clientX - t.left, C.offsetY = e.clientY - t.top, E.useTransform = false, 
        window.addEventListener("pointermove", handleDragMove), window.addEventListener("pointerup", stopDrag);
      };
      return vue.watch((() => t.app.showFloat), (e => {
        e ? (E.top = "15vh", E.left = "50%", E.useTransform = true) : stopDrag();
      })), vue.onBeforeUnmount((() => {
        window.removeEventListener("pointermove", handleDragMove), window.removeEventListener("pointerup", stopDrag), 
        window.removeEventListener("pointermove", handleResizeMove), window.removeEventListener("pointerup", stopResize);
      })), updateFn(), (e, a) => (vue.openBlock(), vue.createElementBlock("div", Gm, [ vue.withDirectives(vue.createElementVNode("div", {
        ref_key: "wrapperRef",
        ref: w,
        class: "floating-wrapper"
      }, [ vue.createElementVNode("div", {
        class: "floating-dialog",
        style: vue.normalizeStyle(U.value),
        ref_key: "floatRef",
        ref: y
      }, [ vue.createElementVNode("div", {
        class: "floating-header",
        onPointerdown: startDrag
      }, [ vue.createElementVNode("div", Vm, [ vue.createElementVNode("img", {
        src: vue.unref(re).script.icon,
        alt: "icon"
      }, null, 8, Km), vue.createElementVNode("span", Wm, vue.toDisplayString(vue.unref(re).script.name), 1), vue.createElementVNode("span", Qm, "v" + vue.toDisplayString(vue.unref(re).script.version), 1) ]), vue.createElementVNode("div", Jm, [ vue.createVNode(Bm, {
        compact: ""
      }), vue.createElementVNode("button", {
        class: "floating-close",
        "aria-label": "\u5173\u95ed",
        onClick: a[0] || (a[0] = e => vue.unref(t).app.showFloat = false),
        type: "button"
      }, "\xd7") ]) ], 32), vue.createVNode(Rm, {
        modelValue: _.value,
        "onUpdate:modelValue": a[1] || (a[1] = e => _.value = e),
        tabs: x
      }, null, 8, [ "modelValue" ]), "library" === vue.unref(t).page || "system" === vue.unref(t).page ? (vue.openBlock(), 
      vue.createElementBlock("div", Xm, [ "library" === vue.unref(t).page ? (vue.openBlock(), vue.createBlock(tn, {
        key: 0,
        modelValue: A.value,
        "onUpdate:modelValue": a[2] || (a[2] = e => A.value = e),
        segments: k
      }, null, 8, [ "modelValue" ])) : (vue.openBlock(), vue.createBlock(tn, {
        key: 1,
        modelValue: A.value,
        "onUpdate:modelValue": a[3] || (a[3] = e => A.value = e),
        segments: q
      }, null, 8, [ "modelValue" ])) ])) : vue.createCommentVNode("", true), vue.createElementVNode("div", Ym, [ vue.createElementVNode("div", Zm, [ "overview" === vue.unref(t).page ? (vue.openBlock(), 
      vue.createBlock(Ka, {
        key: 0
      })) : "ask" === vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Ho, {
        key: 1
      })) : "library" === vue.unref(t).page ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 2
      }, [ "manage" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(Oc, {
        key: 0
      })) : "preview" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(zp, {
        key: 1
      })) : "tool" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(Fm, {
        key: 2
      })) : vue.createCommentVNode("", true) ], 64)) : "ai" === vue.unref(t).page ? (vue.openBlock(), vue.createBlock(ad, {
        key: 3
      })) : "system" === vue.unref(t).page ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 4
      }, [ "settings" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(Ks, {
        key: 0
      })) : "logs" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(Jp, {
        key: 1
      })) : "account" === vue.unref(t).subPage ? (vue.openBlock(), vue.createBlock(tm, {
        key: 2
      })) : vue.createCommentVNode("", true) ], 64)) : vue.createCommentVNode("", true) ]) ]), vue.createElementVNode("div", {
        class: "floating-resize-handle",
        onPointerdown: startResize,
        "aria-label": "\u62d6\u52a8\u4ee5\u8c03\u6574\u9762\u677f\u5bbd\u5ea6",
        role: "separator"
      }, null, 32) ], 4) ], 512), [ [ vue.vShow, vue.unref(t).app.showFloat ] ]), vue.withDirectives(vue.createElementVNode("div", {
        class: "minimized-dialog",
        onClick: showOrHide
      }, [ vue.createElementVNode("div", {
        onClick: showOrHide
      }, [ vue.createElementVNode("div", eh, [ vue.createElementVNode("img", {
        src: vue.unref("data:image/svg+xml,%3csvg%20class='icon'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3e%3cpath%20d='m253.36%201024-115.278-58.836v-53.206c-64.889-68.266-62.918-94.729%2014.075-153.424-23.506-17.594-63.762%202.675-77.275-36.315%2047.435-42.93%2070.378-101.063%2087.973-162.01a326.695%20326.695%200%200%201%20208.037-226.617c4.645-89.38%2086.847-143.43%20178.479-112.605l-35.612%2090.365c105.145%207.32%20192.414%2045.042%20256.317%20123.303%2040.538%2015.483%2038.849-34.767%2069.252-40.82l11.964%2058.273%2050.391-27.306c28.151%2018.72-5.208%2031.951-10.416%2052.22%2014.78%2020.128%2028.996%2040.538%2044.479%2060.244a142.867%20142.867%200%200%201%2028.996%20114.153c-12.528%2077.838-30.263%20154.831-41.101%20233.092A1276.939%201276.939%200%200%200%20918.433%201024H897.32l-89.24-70.378%209.994-10.416-17.735%2036.878-68.408-20.128-39.411%2023.788-42.227-21.114c-28.151%2014.076-52.502%2036.034-86.565%2027.307l-9.009-37.863H332.747L306.144%201024zm-9.993-380.041-.844.985%20126.68%2019.706%2010.838%2010.979c-29.277%2032.374-19.846%2074.178-29.7%20110.493l34.064%2030.263-35.19%2094.87a412.274%20412.274%200%200%200%20233.515%202.11l9.712-26.602%2012.809%2015.905-11.824%2050.672%205.35%204.645c16.749-11.682%2033.218-24.21%2050.812-34.626a84.454%2084.454%200%200%201%2026.04-5.348l7.46%2033.922%2048.842-23.788%2052.925%2014.076c-1.83-43.212-2.956-80.935-5.912-118.517%200-4.926-9.853-9.29-15.061-14.075l-5.63-23.225%2014.075-100.922h18.72l3.238-1.267c-11.964%20106.412%208.023%20202.266%2087.128%20281.512%208.727-48.842%2016.61-93.321%2024.632-137.66%207.46-40.96%2015.061-81.92%2022.521-122.88%2010.557-48.42%2025.477-97.262-10.979-140.755l-30.825%2038.004c0-16.469%201.126-33.078%201.126-49.546%200-70.378-53.206-104.723-115.983-76.29a232.951%20232.951%200%200%201-32.937%209.43c16.046-32.373-3.519-52.924-25.477-70.377a292.21%20292.21%200%200%200-209.304-70.378c-11.401.703-22.802%200-40.256%200l45.183-104.582c-40.397%2010.979-74.038%2014.78-94.73%2045.464s14.92%2045.886%2020.833%2069.674c-110.212%204.364-202.69%2080.513-236.611%20193.117l-70.378%20172.708%2049.124%203.519%205.63%2054.191c32.514-26.04%2026.04-61.088%2030.262-92.899h17.876v58.414l30.967%206.334c1.407-6.616%202.393-11.683%203.66-16.469%209.148-34.626-19.706-59.117-22.38-91.491zm-37.863%20178.9-6.475%2020.833-25.336%2084.453c1.548%208.868%200%2023.225%205.067%2025.477%2032.374%2016.046%2065.733%2029.277%20104.16%2045.746%2021.113-65.452%2063.621-114.435%2069.533-180.872-37.3-16.187-70.941-31.53-104.722-44.338-17.032-6.756-36.315-10.979-35.049%2019.002zm121.754-38.848%2010.556-90.225-48.138-6.193v78.964zm-168.907%2096.98%2023.084-73.474c-28.152-10.416-47.576-9.29-56.303%2015.483s2.674%2042.79%2032.937%2057.992z'%20fill='%23353947'/%3e%3cpath%20d='M198.607%20548.948c33.922-112.604%20126.68-188.472%20235.907-192.272-5.912-23.788-41.1-39.553-20.832-69.674s54.332-34.486%2094.729-45.465L463.228%20346.12h40.256a292.21%20292.21%200%200%201%20209.304%2070.378c21.958%2017.735%2042.227%2038.286%2025.477%2070.378l.986-.985c-30.967%2026.743-32.797%2059.399-19.847%2095.15L744.599%20622l-40.819-6.192-103.174-14.076-62.214-93.04-31.67%2050.672c-19.425-5.63-26.603.845-20.691%2020.692l-21.536-.845a165.67%20165.67%200%200%200-100.078-17.172l-10.416-86.565-37.44%2031.248-44.339%2042.226zm255.19-62.917-10.556-10.557c-17.173-17.032-35.049-15.061-47.294%203.378s-4.786%2036.737%2012.105%2050.25c20.128%2016.046%2034.907%209.712%2045.745-11.542%2014.217-10.838%2015.202-21.395%200-31.811z'%20fill='%23F5F5F6'%20data-spm-anchor-id='a313x.search_index.0.i5.dc0f3a810XA6r8'%20class='selected'/%3e%3cpath%20d='m592.442%20886.763-9.712%2026.603a412.274%20412.274%200%200%201-233.514-2.112l35.189-94.87-34.063-30.543c9.853-36.315%200-78.12%2029.7-110.494a198.184%20198.184%200%200%200%20105.425-94.87c16.328%202.394%2026.04-1.688%2020.692-20.69l31.67-4.927%2063.058%2078.542c0%207.882-1.97%2018.017%201.971%2023.084%2030.966%2038.708%2023.788%2080.935%2014.076%20123.865-8.587%2036.034-16.469%2071.364-24.492%20106.412zm-149.624-223.24c0%2014.076-2.815%2023.648%200%2026.885%2020.27%2020.691%2020.832%2045.605%2019.566%2071.927a96.84%2096.84%200%200%200%203.237%2031.107c5.912%2020.41%2012.668%2041.382%2038.426%2044.056a48.56%2048.56%200%200%200%2053.347-35.189%20696.602%20696.602%200%200%200%2018.58-80.371c6.052-6.475%2035.47-2.534%2018.157-36.597z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M600.606%20602.013%20703.78%20616.09l40.82%205.349c37.863%209.993%2022.943%2041.241%2026.461%2065.17L756.986%20787.53l-49.828%2078.12-21.395%2031.529-10.134%2021.395a84.454%2084.454%200%200%200-26.04%205.348c-17.594%2010.416-34.063%2022.944-50.813%2034.626v-5.208h-5.067l11.823-50.672c16.047-61.932%2032.937-123.724%2047.717-185.938%205.348-22.662-25.477-68.267-51.94-82.624zM927.3%20706.736c-7.46%2040.96-15.061%2081.92-22.521%20122.88-8.023%2044.338-15.906%2088.817-24.633%20137.66-79.105-79.387-98.529-175.242-87.128-281.513z'%20fill='%23B3DCF8'/%3e%3cpath%20d='m199.029%20843.692%206.475-20.832h45.605c2.111-39.271-20.973-30.263-38.427-30.122-1.548-29.981%2018.017-25.758%2035.049-18.58%2034.063%2013.231%2067.422%2028.151%20104.722%2044.479-5.912%2066.437-48.42%20115.42-69.533%20180.871-38.427-16.186-71.927-29.418-104.16-45.182-4.786-2.252-3.519-16.61-5.067-25.477h33.5l26.321-70.378z'%20fill='%2387BC85'/%3e%3cpath%20d='M738.265%20486.03a232.951%20232.951%200%200%200%2032.937-9.43c62.777-28.151%20116.405%206.615%20115.983%2076.29%200%2016.468-.704%2033.077-1.126%2049.546l1.126-.986-12.105-2.674-21.536%2016.75-29.98%208.305a86.565%2086.565%200%200%201-91.633-59.259c2.393-26.462%204.645-52.924%207.038-79.527zm113.731%2061.792-61.37-52.502c-3.94%2035.752-6.615%2059.822-10.275%2093.18z'%20fill='%23F5F5F6'%20data-spm-anchor-id='a313x.search_index.0.i3.dc0f3a810XA6r8'/%3e%3cpath%20d='M198.607%20548.948h73.615c-28.151%2042.227-74.178%2076.853-59.117%20137.66-4.223%2031.81%202.252%2066.859-30.263%2092.899l-6.052-54.473-49.124-3.519z'%20fill='%23AED4EF'/%3e%3cpath%20d='m927.3%20706.736-134.28-21.113-3.238%201.266%206.897-37.863%2027.025-7.742%2031.248-8.867%2029.84-20.691%202.393-10.276-.422.986%2030.262-36.738c35.752%2043.776%2020.832%2092.618%2010.276%20141.038zm-557.675-42.79-126.68-19.706a171.3%20171.3%200%200%201%2016.75-41.1c21.817-29.278%2046.168-56.303%2069.533-84.454%203.238%209.15%206.757%2018.157%209.572%2027.307q15.624%2049.123%2030.966%2098.529z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M763.18%20810.473c5.207%204.645%2014.075%209.009%2015.06%2014.076%202.956%2037.582%204.082%2075.304%205.912%20118.516l-52.925-14.075-47.997%2023.787-7.601-34.766c14.075-1.97%2020.55-7.883%2010.979-21.817%2021.395%2011.682%2023.788-9.994%2033.359-19.003z'%20fill='%23AED4EF'/%3e%3cpath%20d='M601.169%20634.106c26.462%2014.075%2057.288%2059.962%2051.939%2082.624-14.076%2062.214-31.67%20124.006-47.716%20185.938l-12.95-15.905c8.023-35.33%2015.905-70.378%2024.35-105.99%2010.135-42.93%2017.314-85.157-14.075-123.865-3.519-4.785-.985-14.92-1.548-22.802zM328.806%20518.404c-23.365%2028.152-47.716%2055.458-69.533%2084.454a171.3%20171.3%200%200%200-16.75%2041.1l.844-.985-12.386%2043.072h-17.876c-15.061-60.385%2030.403-94.87%2059.117-137.097l44.338-42.226z'%20fill='%23484F5E'/%3e%3cpath%20d='m327.258%20784.011-37.582-17.454v-78.964l48.138%206.193z'%20fill='%23D55375'/%3e%3cpath%20d='m823.704%20641.284-27.025%207.742-6.897%2037.863h-18.72c-3.52-23.928%2011.4-55.176-26.463-65.17l-25.195-40.96%2012.527-16.187a86.565%2086.565%200%200%200%2091.35%2059.259zm-454.079%2022.662V644.1l12.246-12.95c8.445%201.267%2020.41%206.897%2024.773%203.237%2020.55-17.031%2038.99-36.455%2058.132-55.176l20.973%201.548a198.184%20198.184%200%200%201-105.708%2094.87z'%20fill='%23484F5E'/%3e%3cpath%20d='m199.029%20843.692%2034.485%2014.075-26.321%2070.378h-33.5z'%20fill='%23CAE7AF'/%3e%3cpath%20d='m230.98%20686.326%2012.387-43.071c2.675%2031.67%2031.53%2056.302%2022.24%2091.35-1.267%204.786-2.252%209.854-3.66%2016.47l-30.966-6.335z'%20fill='%23F5F5F6'/%3e%3cpath%20d='m763.18%20810.473-44.058%2067.704-11.964-12.528%2050.39-78.4z'%20fill='%23484F5E'/%3e%3cpath%20d='M212.682%20792.738c17.454%200%2040.538-9.15%2038.427%2030.122h-45.605z'%20fill='%23CDEAB1'/%3e%3cpath%20d='m598.917%20957.985-5.349-4.645h5.067z'%20fill='%23484F5E'/%3e%3cpath%20d='M464.495%20579.211c-19.143%2018.72-37.582%2038.145-58.132%2055.176-4.364%203.66-16.328-1.97-24.773-3.237l-17.173-69.111a165.67%20165.67%200%200%201%20100.078%2017.172z'%20fill='%23AED4EF'/%3e%3cpath%20d='m364.417%20562.039%2017.173%2069.111-12.246%2012.95Q354%20594.976%20338.377%20545.57c-2.815-9.149-6.334-18.157-9.571-27.306l-12.246-11.542%2037.441-30.967z'%20fill='%23353947'/%3e%3cpath%20d='M600.606%20602.013v31.67l-62.214-79.245-31.67%204.926%2031.388-50.39z'%20fill='%23484F5E'/%3e%3cpath%20d='M453.797%20517.278c-10.838%2021.255-25.617%2028.152-45.745%2011.542-16.891-14.075-24.633-31.529-12.105-50.25s30.121-20.41%2047.294-3.378c-23.507.986-34.767%2011.542-29.137%2039.412l39.693%203.097z'%20fill='%23AED4EF'/%3e%3cpath%20d='m731.931%20564.572-12.809%2015.624c-12.95-35.752-11.12-68.407%2019.847-95.15-2.111%2026.602-4.363%2053.064-7.038%2079.526z'%20fill='%23353947'/%3e%3cpath%20d='M506.722%20559.787c5.348%2019.002-4.364%2023.084-20.691%2020.69-6.194-19.846.985-26.32%2020.69-20.69z'%20fill='%23484F5E'/%3e%3cpath%20d='M453.797%20485.749c15.202%2010.416%2014.076%2020.973%200%2031.53v-31.812zm-10.556-10.557%2010.556%2010.557-10.556-10.557z'%20fill='%23AED4EF'/%3e%3cpath%20d='m442.818%20663.524%20151.313%2022.099c17.313%2034.062-12.105%2030.121-18.157%2036.596a696.602%20696.602%200%200%201-18.58%2080.09%2048.56%2048.56%200%200%201-52.784%2034.908c-25.758-2.675-32.514-23.647-38.426-44.057a96.84%2096.84%200%200%201-3.237-31.107c1.266-26.321%200-51.235-19.566-71.926-3.378-2.956-.563-12.387-.563-26.603zm66.297%20153.987c41.523-26.462%2042.226-60.384%2034.766-98.53l-55.317-10.274c-.422%2038.707-15.202%2075.163%2020.55%20108.804zm198.043%2048.138%2011.964%2012.528c-9.57%209.008-11.964%2030.685-33.359%2019.002z'%20fill='%23353947'/%3e%3cpath%20d='M686.186%20896.757c9.571%2014.075%202.955%2019.846-10.98%2021.817zm165.81-348.935-71.645%2040.679c3.66-33.36%206.334-57.429%2010.276-93.18z'%20fill='%23353947'/%3e%3cpath%20d='m884.792%20611.726-29.84%2020.69-1.408-16.89%2021.536-16.75z'%20fill='%23484F5E'%20data-spm-anchor-id='a313x.search_index.0.i4.dc0f3a810XA6r8'%20class='selected'/%3e%3cpath%20d='m853.544%20615.526%201.408%2016.89-31.248%208.868v-17.453zm31.248-3.8-9.712-12.95%2012.105%202.674z'%20fill='%23353947'/%3e%3cpath%20d='m443.522%20474.91%2010.557%2010.557v31.952l-39.693-3.097c-6.194-27.87%205.63-38.426%2029.136-39.411z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M509.115%20817.51c-35.753-33.64-20.973-70.377-20.55-108.803l55.316%2010.275c7.883%2038.145%206.757%2072.067-34.766%2098.529z'%20fill='%23E25679'/%3e%3c/svg%3e"),
        onClick: showOrHide
      }, null, 8, th), !vue.unref(t).app.showFloat && vue.unref(t).app.alertBubble ? (vue.openBlock(), vue.createElementBlock("div", ah, vue.toDisplayString(vue.unref(t).app.alert), 1)) : vue.createCommentVNode("", true) ]) ]) ], 512), [ [ vue.vShow, !vue.unref(t).app.showFloat ] ]) ]));
    }
  }), rh = [ '.floating-wrapper{--c-primary: #0071e3;--c-primary-hover: #0077ed;--c-primary-active: #0062cc;--c-primary-soft: rgba(0, 113, 227, .1);--c-primary-ring: rgba(0, 113, 227, .18);--c-success: #34c759;--c-success-soft: rgba(52, 199, 89, .12);--c-warning: #ff9f0a;--c-warning-soft: rgba(255, 159, 10, .12);--c-danger: #ff3b30;--c-danger-soft: rgba(255, 59, 48, .1);--c-info: #5ac8fa;--c-info-soft: rgba(90, 200, 250, .12);--c-bg-base: #f5f5f7;--c-bg-surface: #ffffff;--c-bg-subtle: #fbfbfd;--c-bg-hover: #f0f0f3;--c-text-primary: #1d1d1f;--c-text-secondary: #424245;--c-text-muted: #86868b;--c-text-disabled: #c7c7cc;--c-border-subtle: rgba(0, 0, 0, .06);--c-border-base: rgba(0, 0, 0, .1);--c-border-strong: rgba(0, 0, 0, .16);--s-1: 4px;--s-2: 8px;--s-3: 10px;--s-4: 12px;--s-5: 16px;--s-6: 20px;--s-8: 24px;--s-10: 32px;--r-xs: 4px;--r-sm: 8px;--r-md: 12px;--r-lg: 16px;--r-full: 9999px;--shadow-1: 0 1px 2px rgba(0, 0, 0, .04);--shadow-2: 0 2px 8px rgba(0, 0, 0, .06);--shadow-3: 0 4px 16px rgba(0, 0, 0, .1);--shadow-4: 0 12px 32px rgba(0, 0, 0, .16);--font-xs: 11px;--font-sm: 12px;--font-base: 13px;--font-md: 14px;--font-lg: 16px;--font-xl: 19px;--fw-regular: 400;--fw-medium: 500;--fw-semibold: 600;--font-numeric: tabular-nums;--ease-out: cubic-bezier(.33, 1, .68, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1);--dur-fast: .15s;--dur-base: .2s;--dur-slow: .28s;--z-base: 1;--z-sticky: 10;--z-overlay: 20;--z-modal: 30;--z-toast: 40;--z-tooltip: 50;color:var(--c-text-primary);color-scheme:light;font-size:var(--font-base);line-height:1.5;text-align:left}.floating-wrapper[data-theme=dark]{color-scheme:dark;--c-primary: #0a84ff;--c-primary-hover: #409cff;--c-primary-active: #0a6acf;--c-primary-soft: rgba(10, 132, 255, .18);--c-primary-ring: rgba(10, 132, 255, .28);--c-success: #30d158;--c-success-soft: rgba(48, 209, 88, .18);--c-warning: #ffd60a;--c-warning-soft: rgba(255, 214, 10, .18);--c-danger: #ff453a;--c-danger-soft: rgba(255, 69, 58, .18);--c-info: #64d2ff;--c-info-soft: rgba(100, 210, 255, .18);--c-bg-base: #1c1c1e;--c-bg-surface: #2c2c2e;--c-bg-subtle: #232325;--c-bg-hover: #3a3a3c;--c-text-primary: #f5f5f7;--c-text-secondary: #d1d1d6;--c-text-muted: #98989d;--c-text-disabled: #48484a;--c-border-subtle: rgba(255, 255, 255, .08);--c-border-base: rgba(255, 255, 255, .14);--c-border-strong: rgba(255, 255, 255, .22);--shadow-1: 0 1px 2px rgba(0, 0, 0, .4), inset 0 0 0 1px rgba(255, 255, 255, .04);--shadow-2: 0 2px 8px rgba(0, 0, 0, .5), inset 0 0 0 1px rgba(255, 255, 255, .06);--shadow-3: 0 4px 16px rgba(0, 0, 0, .6), inset 0 0 0 1px rgba(255, 255, 255, .06);--shadow-4: 0 12px 32px rgba(0, 0, 0, .7),inset 0 0 0 1px rgba(255, 255, 255, .08)}.floating-wrapper:not([data-theme]){visibility:hidden}.floating-wrapper,.floating-wrapper *{box-sizing:border-box}.floating-wrapper button,.floating-wrapper input,.floating-wrapper select,.floating-wrapper textarea{font:inherit}.custom-scroll{scrollbar-width:thin;scrollbar-color:var(--c-border-strong) transparent}.custom-scroll::-webkit-scrollbar-thumb{background:var(--c-border-strong)}.custom-scroll::-webkit-scrollbar-thumb:hover{background:var(--c-text-muted)}*{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@keyframes fadeIn{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.fade-in{animation:fadeIn .3s cubic-bezier(.25,.1,.25,1)}.fade-slide-enter-active,.fade-slide-leave-active{transition:all .25s ease}.fade-slide-enter-from,.fade-slide-leave-to{opacity:0;transform:translateY(6px)}@keyframes pulse{0%,to{box-shadow:0 0 #cc33334d}50%{box-shadow:0 0 0 6px #c330}}@keyframes ai-bounce{0%,80%,to{transform:scale(.8);opacity:.6}40%{transform:scale(1.15);opacity:1}}.mb-10{margin-bottom:10px!important}.mt-10{margin-top:10px!important}.mt-20{margin-top:20px!important}.small{font-size:13px}.muted-text{color:#6b7280;font-size:13px}.green{color:#059669}.red{color:#dc2626}.flex-grow{flex:1}.ghost{box-shadow:none}.aah_breadcrumb{margin-bottom:24px;padding:0;background:transparent;border:none;border-radius:0}.breadcrumb{display:inline-flex;align-items:center;gap:8px;font-size:14px;white-space:nowrap;line-height:1.2}.breadcrumb-link{color:#0071e3;cursor:pointer;display:inline-flex;align-items:center;gap:4px;text-decoration:none;white-space:nowrap}.breadcrumb-link:hover{color:#0077ed;text-decoration:underline}.breadcrumb-sep,.breadcrumb-text{color:#86868b}.aah_title{font-size:var(--font-md);font-weight:var(--fw-medium);line-height:1.6;color:var(--c-text-primary);margin-bottom:var(--s-3);padding:var(--s-3);background:var(--c-bg-subtle);border-radius:var(--r-sm);border:1px solid var(--c-border-subtle);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.aah_title img{max-width:100%;height:auto;overflow:hidden;border-radius:var(--r-sm);margin:var(--s-3) 0}.aah_options{transition:background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);cursor:pointer;color:var(--c-text-primary)}.aah_options:hover{border-color:var(--c-primary-ring);background:var(--c-bg-hover)}.aah_options[style*="color:green"]{background:var(--c-success-soft)!important;border-color:var(--c-success)!important;font-weight:var(--fw-medium);color:var(--c-success)!important}.aah_active{box-shadow:0 0 0 2px var(--c-primary)}.aah_bomHet50{padding:13px 0 13px 10px}.aah_bomHet50 span{display:inline-block;line-height:24px;padding-left:14px;color:#86868b;font-size:13px}.aah_bomHet50 span i{display:inline-block;width:10px;height:10px;border:1px solid #d2d2d7;border-radius:2px;vertical-align:middle;margin-right:4px;margin-top:-2px}.aah_bomHet50 .dq i{background-color:#0071e31a;box-shadow:0 0 0 2px #0071e34d;border-color:#0071e3}.aah_bomHet50 .yp i{background-color:#00cc331a;border-color:#0c3}.aah_bomHet50 .wp i{background-color:#cc33331a;border-color:#c33}.is-error{box-shadow:0 0 0 2px #cc33334d inset!important}.error-message{color:#c33;margin-top:8px;font-size:13px;font-weight:400}.icon-inline{display:inline-block;width:1em;height:1em;margin-right:6px;vertical-align:middle;position:relative;top:-.05em}.home-avatar-icon{width:48px;height:48px;color:#9ca3af}.home-page-icon{width:24px;height:24px;flex-shrink:0}.aah-card{background:var(--c-bg-surface);border-radius:var(--r-md);border:1px solid var(--c-border-subtle);box-shadow:var(--shadow-1);padding:var(--s-3);transition:box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out)}.aah-card:hover{box-shadow:var(--shadow-2);border-color:var(--c-border-base)}.aah-card-compact{padding:var(--s-2) var(--s-3)}.aah-card-spacious{padding:var(--s-4) var(--s-5)}.aah-btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--s-2);padding:var(--s-2) var(--s-3);border-radius:var(--r-md);border:1px solid var(--c-border-base);background:var(--c-bg-base);color:var(--c-text-primary);font-size:var(--font-base);font-weight:var(--fw-medium);cursor:pointer;transition:all var(--dur-base) var(--ease-out)}.aah-btn:hover:enabled{box-shadow:var(--shadow-2)}.aah-btn:disabled{opacity:.6;cursor:not-allowed}.aah-btn-primary{background:linear-gradient(135deg,#6fb1fc,#4364f7);color:#fff;border-color:transparent}.aah-btn-primary:hover:enabled{filter:brightness(.95);box-shadow:var(--shadow-4)}.aah-btn-plain{background:var(--c-bg-surface)}.aah-btn-small{padding:var(--s-2) var(--s-3);font-size:var(--font-sm);border-radius:var(--r-sm)}.aah-btn-danger{background:var(--c-danger-soft);color:var(--c-danger);border-color:var(--c-border-base)}.aah-tag{display:inline-flex;align-items:center;gap:var(--s-2);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);font-size:var(--font-sm);font-weight:var(--fw-semibold);border:1px solid transparent}.aah-tag-primary{background:#0071e31a;color:var(--c-primary);border-color:#0071e329}.aah-tag-success{background:#34c7591f;color:var(--c-success);border-color:#34c75933}.aah-tag-warning{background:#ff9f0a1f;color:var(--c-warning);border-color:#ff9f0a33}.aah-input{width:100%;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);border:1px solid var(--c-border-base);background:var(--c-bg-subtle);color:var(--c-text-primary);font-size:var(--font-base);transition:all var(--dur-base) var(--ease-out)}.aah-input:focus{outline:none;border-color:var(--c-primary);box-shadow:0 0 0 3px #0071e31a}.aah-input:disabled{opacity:.6;cursor:not-allowed;background:var(--c-bg-base)}.aah-input.recording{border-color:var(--c-primary);box-shadow:0 0 0 3px #0071e326}.aah-select{width:100%;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);border:1px solid var(--c-border-base);background:var(--c-bg-subtle);color:var(--c-text-primary);font-size:var(--font-base);cursor:pointer;transition:all var(--dur-base) var(--ease-out)}.aah-select:focus{outline:none;border-color:var(--c-primary);box-shadow:0 0 0 3px #0071e31a}.aah-select:disabled{opacity:.6;cursor:not-allowed;background:var(--c-bg-base)}.aah-alert{display:flex;align-items:flex-start;gap:var(--s-3);padding:var(--s-3);border-radius:var(--r-md);font-size:var(--font-base);line-height:1.6;border:1px solid transparent}.aah-alert-info{background:#3b82f61a;color:#1d4ed8;border-color:#3b82f633}.aah-alert-success{background:#34c7591a;color:#0f5132;border-color:#34c75933}.aah-alert-warning{background:#ff9f0a1a;color:#92400e;border-color:#ff9f0a33}.aah-alert-danger{background:#ef44441a;color:#b91c1c;border-color:#ef444433}.aah-page{display:flex;flex-direction:column;height:100%;overflow:hidden}.page-title{margin:0;font-size:var(--font-lg);font-weight:var(--fw-semibold);color:var(--c-text-primary);letter-spacing:-.022em}.aah-page-content{flex:1;overflow-y:auto;overflow-x:hidden;padding:var(--s-3)}.aah-page-content.no-padding{padding:0}.aah-page-footer{padding:var(--s-3) var(--s-4);border-top:1px solid var(--c-border-subtle);background:var(--c-bg-surface);flex-shrink:0}.aah-page.is-loading .aah-page-content{position:relative;pointer-events:none;opacity:.6}.page-loader{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;background:#fffc;z-index:100}.spinner{width:32px;height:32px;border:3px solid var(--c-border-subtle);border-top-color:var(--c-primary);border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.aah-slider{width:100%;accent-color:var(--c-primary)}.radio-group{display:flex;gap:var(--s-3)}.radio-item{display:inline-flex;align-items:center;gap:var(--s-1);cursor:pointer}', ".floating-wrapper{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:999999}.el_wrapper>.floating-wrapper{pointer-events:none!important}.el_wrapper>div{pointer-events:none;z-index:999999!important}.el_wrapper>div>div{pointer-events:none;z-index:999999!important}.el_wrapper>.minimized-dialog{pointer-events:auto!important}.minimized-dialog{position:fixed;bottom:20px;right:20px;z-index:9999999}.floating-dialog{position:fixed;display:flex;flex-direction:column;pointer-events:auto;border-radius:var(--r-md);overflow:hidden;box-shadow:var(--shadow-3);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);max-width:calc(100vw - 32px);max-height:calc(100vh - 80px);z-index:999999}.floating-dialog:has(.ai-config-panel){width:min(960px,calc(100vw - 32px))!important}.el_wrapper>.floating-wrapper>.floating-dialog{pointer-events:auto!important}.floating-header{display:flex;align-items:center;justify-content:space-between;background:var(--c-bg-subtle);color:var(--c-text-primary);padding:var(--s-2) var(--s-3);border-bottom:1px solid var(--c-border-subtle);cursor:move;-webkit-user-select:none;user-select:none;gap:var(--s-2)}.floating-title{display:flex;align-items:center;gap:var(--s-2);min-width:0;font-size:var(--font-base);font-weight:var(--fw-semibold);color:var(--c-text-primary);letter-spacing:-.022em}.floating-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.floating-title img{width:16px;height:16px;vertical-align:middle;border-radius:4px}.floating-version{margin-left:var(--s-2);background:transparent;border:none;color:var(--c-text-muted);padding:0;font-size:var(--font-xs);font-weight:var(--fw-regular);font-variant-numeric:var(--font-numeric)}.floating-actions{display:flex;align-items:center;gap:var(--s-1);flex-shrink:0}.floating-actions .theme-switcher{display:inline-flex}.floating-actions .segmented{background:var(--c-bg-surface)}.floating-actions .segment-item{padding:2px 6px;font-size:var(--font-xs);line-height:1.4}.floating-close{width:28px;height:28px;border:none;border-radius:50%;background:var(--c-bg-hover);color:var(--c-text-secondary);font-size:var(--font-lg);line-height:1;cursor:pointer;transition:background-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)}.floating-close:hover{background:var(--c-border-base);color:var(--c-text-primary)}.floating-body{flex:1 1 auto;min-height:0;overflow:hidden;background:var(--c-bg-base)}.floating-resize-handle{position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:ew-resize;-webkit-user-select:none;user-select:none;background-image:linear-gradient(135deg,transparent 50%,var(--c-text-muted) 50%,var(--c-text-muted) 60%,transparent 60%);background-size:6px 6px;background-position:bottom right;background-repeat:no-repeat;opacity:.45;transition:opacity var(--dur-fast) var(--ease-out)}.floating-resize-handle:hover{opacity:.9}.floating-scroll{min-height:0;background:var(--c-bg-base);padding:0;max-height:50vh;overflow:auto}@media(max-width:600px){.floating-scroll{max-height:45vh}}@media(min-width:601px){.floating-scroll{max-height:62vh}}.minimized-dialog img{pointer-events:auto;width:56px!important;height:56px!important;z-index:9999999!important;display:block;cursor:pointer}.mini-tooltip-wrapper{position:relative;display:inline-block}.mini-tooltip{position:absolute;bottom:calc(100% + 10px);right:0;background:var(--c-text-primary);color:var(--c-bg-surface);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);font-size:var(--font-sm);box-shadow:var(--shadow-2);white-space:nowrap}", ".modal-mask{position:fixed;top:0;right:0;bottom:0;left:0;background:#0006;display:grid;place-items:center;z-index:var(--z-modal, 1000000);padding:var(--s-4)}.modal-panel{background:var(--c-bg-surface);border-radius:var(--r-md);width:min(600px,100%);max-height:80vh;display:flex;flex-direction:column;box-shadow:var(--shadow-4);border:1px solid var(--c-border-subtle)}.modal-header{display:flex;align-items:center;justify-content:space-between;padding:var(--s-2) var(--s-3);border-bottom:1px solid var(--c-border-subtle)}.modal-header h3{margin:0;color:var(--c-text-primary);font-size:var(--font-lg);font-weight:var(--fw-semibold)}.modal-close{border:none;background:transparent;font-size:var(--font-xl);cursor:pointer;color:var(--c-text-muted);transition:color var(--dur-fast) var(--ease-out)}.modal-close:hover{color:var(--c-text-primary)}.modal-body{padding:var(--s-3);overflow-y:auto;display:flex;flex-direction:column;gap:var(--s-3)}.modal-footer{padding:var(--s-2) var(--s-3);border-top:1px solid var(--c-border-subtle);display:flex;justify-content:flex-end;gap:var(--s-2)}.modal-panel-large{width:min(1000px,90vw);max-height:90vh}.form-row{display:flex;flex-direction:column;gap:var(--s-1)}.form-row label{color:var(--c-text-secondary);font-size:var(--font-sm);font-weight:var(--fw-medium)}.option-list{display:flex;flex-direction:column;gap:var(--s-2)}.option-row{display:flex;gap:var(--s-2);align-items:center}.option-selector{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:50%;border:1px solid var(--c-border-base);background:var(--c-bg-base);color:var(--c-text-muted);font-weight:var(--fw-semibold);cursor:pointer;transition:background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)}.option-selector:hover{border-color:var(--c-primary);color:var(--c-primary)}.option-selector.active{background:var(--c-primary);color:#fff;border-color:var(--c-primary)}.reading-form-section{padding:var(--s-3);background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:var(--r-md)}.reading-section-header{display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3);padding-bottom:var(--s-3);border-bottom:1px solid var(--c-border-subtle)}.reading-section-icon{font-size:var(--font-xl);color:var(--c-primary)}.reading-section-header h4{margin:0;color:var(--c-text-primary);font-size:var(--font-md);font-weight:var(--fw-semibold)}.reading-sub-questions-editor{display:flex;flex-direction:column;gap:var(--s-3)}.reading-sub-question-editor{padding:var(--s-3);background:var(--c-bg-surface);border:1px solid var(--c-border-base);border-radius:var(--r-md)}.reading-sub-question-header{display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3);padding-bottom:var(--s-3);border-bottom:1px solid var(--c-border-subtle)}.reading-sub-question-number{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;flex-shrink:0;background:var(--c-primary);color:#fff;border-radius:var(--r-full);font-size:var(--font-sm);font-weight:var(--fw-semibold);font-variant-numeric:var(--font-numeric)}.reading-base-select-small{min-width:120px;padding:6px var(--s-2);font-size:var(--font-sm)}.reading-answer-list{display:flex;flex-direction:column;gap:var(--s-2)}.reading-answer-row{display:flex;align-items:center;gap:var(--s-2)}", ".hljs{display:block;overflow-x:auto;padding:var(--s-3);border-radius:var(--r-sm);font-family:ui-monospace,SF Mono,Consolas,monospace;font-size:var(--font-sm);line-height:1.5}.floating-wrapper:not([data-theme=dark]) .hljs{background:#f6f8fa;color:#24292f;box-shadow:var(--shadow-1)}.floating-wrapper:not([data-theme=dark]) .hljs-keyword,.floating-wrapper:not([data-theme=dark]) .hljs-selector-tag,.floating-wrapper:not([data-theme=dark]) .hljs-built_in{color:#cf222e}.floating-wrapper:not([data-theme=dark]) .hljs-string,.floating-wrapper:not([data-theme=dark]) .hljs-attr{color:#0a3069}.floating-wrapper:not([data-theme=dark]) .hljs-number,.floating-wrapper:not([data-theme=dark]) .hljs-literal{color:#0550ae}.floating-wrapper:not([data-theme=dark]) .hljs-comment{color:#6e7781;font-style:italic}.floating-wrapper:not([data-theme=dark]) .hljs-title,.floating-wrapper:not([data-theme=dark]) .hljs-name{color:#8250df}.floating-wrapper[data-theme=dark] .hljs{background:#1f1f23;color:#f0f6fc;box-shadow:var(--shadow-1)}.floating-wrapper[data-theme=dark] .hljs-keyword,.floating-wrapper[data-theme=dark] .hljs-selector-tag,.floating-wrapper[data-theme=dark] .hljs-built_in{color:#ff7b72}.floating-wrapper[data-theme=dark] .hljs-string,.floating-wrapper[data-theme=dark] .hljs-attr{color:#a5d6ff}.floating-wrapper[data-theme=dark] .hljs-number,.floating-wrapper[data-theme=dark] .hljs-literal{color:#79c0ff}.floating-wrapper[data-theme=dark] .hljs-comment{color:#8b949e;font-style:italic}.floating-wrapper[data-theme=dark] .hljs-title,.floating-wrapper[data-theme=dark] .hljs-name{color:#d2a8ff}", ".tabs-bar{display:flex;gap:3px;padding:5px 8px;border-bottom:1px solid var(--c-border-subtle);background:var(--c-bg-subtle);overflow-x:auto}.tabs-bar::-webkit-scrollbar{display:none}.tab-item{flex-shrink:0;padding:4px 8px;border:1px solid transparent;border-radius:6px;background:transparent;color:var(--c-text-muted);font-size:var(--font-sm);font-weight:var(--fw-medium);cursor:pointer;transition:color var(--dur-fast) var(--ease-out),background-color var(--dur-fast) var(--ease-out)}.tab-item:hover:not(.active){color:var(--c-text-secondary)}.tab-item.active{background:var(--c-bg-surface);color:var(--c-primary);border-color:var(--c-primary-soft);box-shadow:var(--shadow-1)}.tab-item:focus-visible{outline:2px solid var(--c-primary-ring);outline-offset:2px}.sub-segmented-row{padding:6px var(--s-2) 0}", ".segmented{display:inline-flex;padding:2px;gap:2px;background:var(--c-bg-base);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm)}.segment-item{padding:var(--s-1) var(--s-3);border:none;border-radius:calc(var(--r-sm) - 2px);background:transparent;color:var(--c-text-muted);font-size:var(--font-sm);font-weight:var(--fw-medium);cursor:pointer;transition:background-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)}.segment-item.active{background:var(--c-bg-surface);color:var(--c-primary);box-shadow:var(--shadow-1)}.segment-item:focus-visible{outline:2px solid var(--c-primary-ring);outline-offset:2px}", ".stat-card{text-align:left;padding:10px 12px;background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:10px;cursor:default;box-shadow:var(--shadow-1);transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)}.stat-card-clickable{cursor:pointer}.stat-card-clickable:hover{transform:translateY(-1px);box-shadow:var(--shadow-2)}.stat-card-clickable:focus-visible{outline:2px solid var(--c-primary-ring);outline-offset:2px}.stat-label{display:flex;align-items:center;gap:var(--s-1);font-size:var(--font-xs);color:var(--c-text-muted)}.stat-icon{width:12px;height:12px;border-radius:3px;flex-shrink:0}.stat-value{font-size:18px;font-weight:var(--fw-semibold);margin-top:var(--s-1);font-variant-numeric:var(--font-numeric);line-height:1.3}.stat-meta{font-size:var(--font-xs);color:var(--c-text-muted);margin-top:2px}.stat-progress{height:4px;border-radius:2px;background:var(--c-bg-hover);overflow:hidden;margin-top:var(--s-2)}.stat-progress>i{display:block;height:100%;background:var(--c-primary);transition:width var(--dur-base) var(--ease-out)}", '.switch{position:relative;display:inline-block;width:44px;height:26px;cursor:pointer}.switch.disabled{cursor:not-allowed;opacity:.6}.switch input{opacity:0;width:0;height:0}.switch-slider{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--c-bg-hover);border-radius:var(--r-full);transition:background-color var(--dur-base) var(--ease-out)}.switch-slider:before{content:"";position:absolute;top:2px;left:2px;width:22px;height:22px;background:#fff;border-radius:50%;box-shadow:var(--shadow-1);transition:transform var(--dur-base) var(--ease-spring)}.switch input:checked+.switch-slider{background:var(--c-primary)}.switch input:checked+.switch-slider:before{transform:translate(18px)}.switch input:focus-visible+.switch-slider{box-shadow:0 0 0 3px var(--c-primary-ring)}', '.overview-page{display:flex;flex-direction:column;gap:var(--s-3);padding:var(--s-3)}.overview-user{display:flex;align-items:center;gap:var(--s-3)}.ov-avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--c-primary-soft),var(--c-bg-subtle));border:1px solid var(--c-border-subtle);display:grid;place-items:center;color:var(--c-primary);overflow:hidden;font-weight:var(--fw-semibold);flex-shrink:0}.ov-avatar img{width:100%;height:100%;object-fit:cover}.ov-user-meta{flex:1;min-width:0}.ov-user-meta h3{margin:0;font-size:var(--font-lg);font-weight:var(--fw-semibold);color:var(--c-text-primary)}.ov-user-meta p{margin:var(--s-1) 0 0;font-size:var(--font-sm);color:var(--c-text-muted)}.ov-tags{display:flex;gap:var(--s-1);flex-wrap:wrap}.ov-muted{color:var(--c-text-muted)}.overview-notice{background:var(--c-primary-soft);border:1px solid var(--c-primary-ring);padding:10px 12px}.ov-notice-content{font-size:var(--font-sm);color:var(--c-text-secondary);line-height:1.5}.ov-notice-content a{color:var(--c-primary)}.ov-notice-content:before{content:"\ud83d\udce3 "}.overview-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-2)}.overview-actions{display:flex;flex-wrap:wrap;gap:var(--s-2)}.overview-actions .aah-btn{flex:1;min-width:96px}.overview-version{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:10px}.ov-version-text{font-size:var(--font-sm);color:var(--c-text-muted);font-variant-numeric:var(--font-numeric)}@media(max-width:480px){.overview-stats{grid-template-columns:1fr}.overview-actions .aah-btn{flex:1 0 100%}}', ".settings-layout{display:grid;grid-template-columns:minmax(112px,124px) minmax(0,1fr);flex:1;min-height:0;gap:1px;background:var(--c-border-subtle);border:1px solid var(--c-border-subtle);border-radius:var(--r-lg);overflow:hidden}.settings-page .aah-page-content{overflow-x:auto}.settings-sidebar{display:flex;flex-direction:column;background:var(--c-bg-surface);height:100%;min-width:0;overflow-y:auto}.sidebar-header{padding:var(--s-2);border-bottom:1px solid var(--c-border-subtle);flex-shrink:0}.settings-search-input-wrapper{position:relative;display:flex;align-items:center}.search-icon{position:absolute;left:var(--s-2);color:var(--c-text-muted);font-size:16px;pointer-events:none}.settings-search-input{padding-left:28px!important;width:100%}.sidebar-nav{flex:1;padding:var(--s-1);overflow-y:auto}.sidebar-nav .nav-item{display:flex;align-items:center;gap:var(--s-1);padding:var(--s-2);border-radius:var(--r-md);color:var(--c-text-primary);font-size:var(--font-base);font-weight:var(--fw-medium);cursor:pointer;transition:all var(--dur-base) var(--ease-out);text-decoration:none;margin-bottom:var(--s-1);width:100%;text-align:left;border:none;background:transparent}.sidebar-nav .nav-item:hover{background:var(--c-bg-hover)}.sidebar-nav .nav-item.active{background:var(--c-primary-soft);color:var(--c-primary);font-weight:var(--fw-semibold)}.nav-icon{font-size:20px;flex-shrink:0}.sidebar-footer{padding:var(--s-3);border-top:1px solid var(--c-border-subtle);flex-shrink:0}.sidebar-footer .aah-alert{font-size:var(--font-sm);padding:var(--s-2) var(--s-3)}.settings-content{background:var(--c-bg-surface);height:100%;min-width:0;overflow-y:auto;padding:var(--s-4)}.settings-content-header{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-3);margin-bottom:var(--s-3);padding-bottom:var(--s-3);border-bottom:1px solid var(--c-border-subtle)}.settings-content-header h2{margin:0;color:var(--c-text-primary);font-size:var(--font-xl);font-weight:var(--fw-semibold)}.settings-content-header p{margin:var(--s-1) 0 0;color:var(--c-text-muted);font-size:var(--font-sm)}.settings-section.settings-config-section{gap:var(--s-3)}.setting-group{margin-bottom:var(--s-4)}.group-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-3);padding-bottom:var(--s-2);border-bottom:1px solid var(--c-border-subtle)}.group-title{display:flex;align-items:center;gap:var(--s-2);margin:0;font-size:var(--font-lg);font-weight:var(--fw-semibold);color:var(--c-text-primary);letter-spacing:-.022em}.group-items{display:flex;flex-direction:column;gap:var(--s-2)}.empty-search{text-align:center;padding:var(--s-6) var(--s-3);color:var(--c-text-muted)}.settings-empty-icon{font-size:48px;margin-bottom:var(--s-3);opacity:.5}.settings-empty-text{margin:0;font-size:var(--font-base)}.config-item{padding:10px;background:var(--c-bg-surface);border-radius:10px;transition:all .3s cubic-bezier(.25,.1,.25,1);border:1px solid var(--c-border-subtle)}.config-item:hover{background:var(--c-bg-subtle);box-shadow:0 2px 8px var(--c-border-subtle);border-color:var(--c-border-base)}.config-item-content{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}.config-label{display:flex;align-items:flex-start;gap:8px;flex:1;min-width:180px}.label-wrapper{display:flex;flex-direction:column;gap:4px}.label-text{font-size:15px;font-weight:500;color:var(--c-text-primary)}.label-desc{font-size:13px;font-weight:400;color:var(--c-text-muted);line-height:1.5}.info-icon{color:var(--c-text-muted);cursor:help;font-size:16px;transition:color .2s ease}.info-icon:hover{color:var(--c-primary)}.config-control{display:flex;align-items:center;flex-shrink:0;gap:10px;flex-wrap:wrap;justify-content:flex-end}.checkbox-group{display:flex;flex-wrap:wrap;gap:10px}.base-alert{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;border:1px solid var(--c-border-subtle);background:var(--c-bg-subtle);color:var(--c-text-primary);font-size:14px}.base-alert-info{background:var(--c-primary-soft);border-color:var(--c-primary-ring)}.alert-icon{font-size:16px}.base-tag{display:inline-flex;align-items:center;padding:4px 8px;border-radius:8px;font-size:12px;font-weight:600;border:1px solid transparent}.base-tag-success{background:var(--c-success-soft);color:var(--c-success);border-color:var(--c-success-soft)}.base-input,.base-select{min-width:180px;padding:8px 10px;border:1px solid var(--c-border-base);border-radius:8px;background:var(--c-bg-surface);color:var(--c-text-primary);font-size:14px;transition:border-color .2s ease,box-shadow .2s ease}.base-input:focus,.base-select:focus{outline:none;border-color:var(--c-primary);box-shadow:0 0 0 3px var(--c-primary-ring)}.base-select{min-width:160px}.checkbox-item{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:8px;background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle)}.hotkey-input-wrapper{position:relative;display:inline-flex;align-items:center;gap:8px}.hotkey-input-wrapper .hotkey-hint{font-size:12px;color:var(--c-text-muted);background:var(--c-bg-subtle);padding:4px 8px;border-radius:8px}.hotkey-input-wrapper .hotkey-hint.danger{color:var(--c-danger);background:var(--c-danger-soft)}.hotkey-input-wrapper .base-input.recording{border-color:var(--c-danger);box-shadow:0 0 0 3px var(--c-danger-soft)}.hotkey-input-wrapper .base-input{cursor:pointer}.ai-config-panel{container-type:inline-size;container-name:aipanel;display:flex;flex-direction:column;gap:var(--s-3)}.ai-config-section-head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-2);flex-wrap:wrap}.ai-config-section-head h4{margin:0;color:var(--c-text-primary)}.ai-config-section-head p{margin:2px 0 0;color:var(--c-text-muted);font-size:var(--font-xs)}.ai-wizard{display:flex;flex-direction:column;gap:var(--s-3);padding:var(--s-3)}.ai-wizard-head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-2)}.ai-wizard-head h4{margin:0;color:var(--c-text-primary)}.ai-wizard-head p{margin:2px 0 0;color:var(--c-text-muted);font-size:var(--font-xs)}.ai-wizard-count{color:var(--c-text-muted);font-size:var(--font-xs);font-variant-numeric:tabular-nums}.ai-wizard-steps{display:flex;align-items:center;gap:var(--s-3);margin:0;padding:0;list-style:none;color:var(--c-text-muted);font-size:var(--font-xs)}.ai-wizard-steps li{display:flex;align-items:center;gap:6px}.ai-wizard-dot{width:8px;height:8px;border-radius:var(--r-full);background:var(--c-border-subtle)}.ai-wizard-steps li.done .ai-wizard-dot{background:var(--c-success)}.ai-wizard-steps li.current{color:var(--c-text-primary);font-weight:var(--fw-semibold)}.ai-wizard-steps li.current .ai-wizard-dot{background:var(--c-primary)}.ai-wizard-body{display:flex;flex-direction:column;gap:var(--s-3)}.ai-wizard-subject{margin:0;color:var(--c-text-primary)}.ai-wizard-actions{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.ai-config-card-pick{text-align:left;cursor:pointer;font:inherit;color:inherit}.ai-config-card-pick:hover{border-color:var(--c-primary)}.ai-config-card-tags{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.ai-config-channel-list{display:flex;flex-direction:column;gap:var(--s-2)}.ai-config-channel-item{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--s-2);padding:var(--s-2);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);background:var(--c-bg-surface);color:var(--c-text-secondary);text-align:left;cursor:pointer}.ai-config-channel-item.active{border-color:var(--c-primary);background:var(--c-primary-soft);color:var(--c-text-primary)}.ai-config-channel-item.orphan{opacity:.6}.ai-config-channel-text{min-width:0;display:flex;flex-direction:column;gap:2px}.ai-config-channel-text strong,.ai-config-channel-text small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ai-config-channel-text small{color:var(--c-text-muted)}.ai-config-channel-grid{display:flex;flex-direction:column;gap:var(--s-2)}.ai-config-card{display:flex;flex-direction:column;gap:var(--s-2);padding:var(--s-2);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);background:var(--c-bg-surface)}.ai-config-card.recommended{border-color:var(--c-primary)}.ai-config-card-head{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.ai-config-card-promo{margin:0;color:var(--c-text-muted);font-size:var(--font-xs)}.ai-config-card-actions,.ai-config-instance-actions{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.ai-config-instance-remove{align-self:flex-start}@container aipanel (min-width: 560px){.ai-config-channel-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@container aipanel (min-width: 820px){.ai-config-channel-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}.ai-config-manager{display:flex;flex-direction:column;gap:var(--s-3)}.ai-config-side{min-width:0;display:flex;flex-direction:column;gap:var(--s-3)}.ai-config-list-panel,.ai-config-global,.ai-config-detail{min-width:0;display:flex;flex-direction:column;gap:var(--s-3);padding:var(--s-3)}.ai-config-side-actions{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.ai-config-inline-action{padding:0;border:none;background:none;color:var(--c-primary);font:inherit;font-weight:var(--fw-medium);cursor:pointer;text-decoration:underline}.ai-config-collapse{width:100%;display:flex;align-items:center;justify-content:space-between;gap:var(--s-2);padding:0;border:none;background:none;color:var(--c-text-primary);font:inherit;font-weight:var(--fw-semibold);cursor:pointer}.ai-config-global-body{display:flex;flex-direction:column;gap:var(--s-3)}.ai-config-detail-empty{min-height:200px;align-items:center;justify-content:center;text-align:center}.ai-config-empty-icon{font-size:36px;color:var(--c-primary)}.ai-config-add-modal{width:min(760px,100%)}@container aipanel (min-width: 720px){.ai-config-manager{display:grid;grid-template-columns:minmax(220px,280px) minmax(0,1fr);align-items:start}}.ai-config-delete-modal{width:min(420px,100%)}.ai-config-delete-text{margin:0;color:var(--c-text-secondary);line-height:1.6}.ai-config-field{min-width:0;display:flex;flex-direction:column;gap:6px}.ai-config-field span{color:var(--c-text-secondary);font-size:var(--font-xs);font-weight:var(--fw-medium)}.ai-config-field-help{margin:0;color:var(--c-text-muted);font-size:var(--font-xs);line-height:1.5}.ai-config-field-help a{margin-left:var(--s-1);color:var(--c-primary);font-weight:var(--fw-medium);text-decoration:none}.ai-config-field-help a:hover{text-decoration:underline}@media(max-width:768px){.settings-layout{display:flex;flex-direction:column;height:auto;min-width:0;border:none;background:transparent}.settings-sidebar{position:sticky;top:0;z-index:10;height:auto;border-bottom:1px solid var(--c-border-subtle);border-radius:var(--r-lg) var(--r-lg) 0 0}.sidebar-footer{display:none}.sidebar-nav{flex-direction:row;overflow-x:auto;padding:0 var(--s-4);gap:var(--s-4)}.sidebar-nav .nav-item{white-space:nowrap;border-radius:0;border-bottom:2px solid transparent;padding:var(--s-4) var(--s-2);margin-bottom:0}.sidebar-nav .nav-item.active{background:transparent;border-bottom-color:var(--c-primary);color:var(--c-primary)}.settings-content{padding:var(--s-4)}.settings-content-header,.config-item-content{flex-direction:column;align-items:flex-start}.config-control{width:100%;justify-content:flex-start}}.settings-section{display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-3)}", ".user-page{display:flex;flex-direction:column;gap:var(--s-4);padding:0;max-width:100%}.user-page__login-section{display:flex;justify-content:center;padding:var(--s-4) 0;background:transparent}.user-page__login-box,.user-page__header-card,.user-page__apikey-section,.user-page__support-card,.user-page__tips{border:1px solid var(--c-border-subtle);border-radius:var(--r-md);background:var(--c-bg-surface);box-shadow:var(--shadow-1)}.user-page__login-box{width:min(100%,460px);padding:var(--s-4)}.user-page__login-header{display:flex;flex-direction:column;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3);text-align:center}.user-page__login-header h2{margin:var(--s-1) 0 0;color:var(--c-text-primary);font-size:var(--font-xl);font-weight:600}.user-page__login-header p{margin:0;color:var(--c-text-muted);font-size:var(--font-sm)}.user-page__login-switch{display:inline-flex;flex-wrap:wrap;justify-content:center;gap:var(--s-2);margin-top:var(--s-2)}.user-page__login-switch .aah-btn{min-width:92px}.user-page__login-switch .aah-btn.is-active{color:var(--c-primary);border-color:var(--c-primary-ring);background:var(--c-primary-soft)}.user-page__login-form,.user-page__login-form .form-item{margin-bottom:var(--s-3)}.user-page__login-btn{width:100%;min-height:38px}.user-page__register-tip{color:var(--c-text-muted);font-size:var(--font-sm);text-align:center}.user-page__link-btn{margin-left:var(--s-1);padding:0;border:0;background:transparent;color:var(--c-primary);font:inherit;cursor:pointer}.user-page__link-btn:hover{color:var(--c-primary-hover)}.user-page__helper{margin:var(--s-2) 0 0;color:var(--c-text-muted);font-size:var(--font-xs);line-height:1.5}.user-page__dashboard{display:flex;flex-direction:column;gap:var(--s-3);padding:0;max-width:100%}.user-page__top-row{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(168px,.8fr);gap:var(--s-3);align-items:stretch}.user-page__header-card{display:flex;flex-direction:column;justify-content:space-between;gap:var(--s-3);padding:var(--s-3)}.user-page__profile-main{display:flex;align-items:center;gap:var(--s-3);min-width:0}.user-page__avatar{display:grid;flex-shrink:0;width:56px;height:56px;place-items:center;overflow:hidden;border:1px solid var(--c-border-subtle);border-radius:50%;background:var(--c-bg-subtle);color:var(--c-text-muted)}.user-page__avatar img{width:100%;height:100%;object-fit:cover}.user-page__avatar-icon{width:28px;height:28px}.user-page__info-text{display:flex;flex:1;min-width:0;flex-direction:column;align-items:flex-start;gap:var(--s-1)}.user-page__info-text h2{margin:0;color:var(--c-text-primary);font-size:var(--font-lg);font-weight:600}.user-page__username{margin:0;color:var(--c-text-muted);font-size:var(--font-sm)}.user-page__actions{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--s-2);padding-top:var(--s-2);border-top:1px solid var(--c-border-subtle)}.user-page__stats-grid{display:grid;grid-template-columns:1fr;gap:var(--s-2)}.user-page__stat-card{display:flex;align-items:center;gap:var(--s-2);min-width:0;min-height:0;padding:var(--s-2);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);background:var(--c-bg-surface);box-shadow:var(--shadow-1)}.user-page__stat-icon{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--r-sm);font-size:16px}.user-page__stat-icon--coin{background:var(--c-warning-soft);color:var(--c-warning)}.user-page__stat-icon--course{background:var(--c-danger-soft);color:var(--c-danger)}.user-page__stat-icon--question{background:var(--c-success-soft);color:var(--c-success)}.user-page__stat-content{flex:1;min-width:0}.user-page__stat-label{margin:0;color:var(--c-text-muted);font-size:var(--font-xs)}.user-page__stat-value{margin:0;color:var(--c-text-primary);font-size:var(--font-md);font-weight:600;font-variant-numeric:var(--font-numeric)}.user-page__apikey-section{display:flex;flex-direction:column;gap:var(--s-3);padding:var(--s-3)}.user-page__section-header{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-3)}.user-page__section-header h3{margin:0;color:var(--c-text-primary);font-size:var(--font-base);font-weight:600}.user-page__section-header p{margin:var(--s-1) 0 0;color:var(--c-text-muted);font-size:var(--font-xs);line-height:1.5}.user-page__apikey-display{display:flex;align-items:center;gap:var(--s-3)}.user-page__apikey-value{flex:1;min-width:0;padding:var(--s-3);border:1px solid var(--c-border-base);border-radius:var(--r-sm);background:var(--c-bg-subtle);color:var(--c-text-primary);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,monospace;font-size:var(--font-sm);line-height:1.4;overflow-wrap:anywhere}.user-page__apikey-actions{display:flex;flex-shrink:0;justify-content:flex-end}.user-page__support-card{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-3)}.user-page__support-icon{display:flex;flex-shrink:0;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--r-sm);background:var(--c-primary-soft);color:var(--c-primary);font-size:18px}.user-page__support-content{flex:1;min-width:0}.user-page__support-title{margin:0 0 var(--s-1);color:var(--c-text-primary);font-size:var(--font-sm);font-weight:600}.user-page__support-desc{margin:0;color:var(--c-text-muted);font-size:var(--font-xs);line-height:1.5}.user-page__support-btn{flex-shrink:0;white-space:nowrap}.user-page__tips{padding:var(--s-3);color:var(--c-text-muted);font-size:var(--font-xs)}.user-page__tips p{margin:0}@media(max-width:640px){.user-page__login-section{padding:var(--s-3) 0}.user-page__login-box{padding:var(--s-4)}.user-page__top-row{grid-template-columns:1fr}.user-page__profile-main{align-items:flex-start}.user-page__actions{justify-content:stretch}.user-page__actions .aah-btn{flex:1 1 140px}.user-page__stats-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.user-page__stat-card{align-items:flex-start;flex-direction:column}.user-page__support-card{align-items:flex-start;flex-wrap:wrap}.user-page__apikey-display{align-items:stretch;flex-direction:column}.user-page__apikey-actions{justify-content:stretch}.user-page__apikey-actions .aah-btn,.user-page__support-btn{width:100%}}", ".ai-workbench{display:flex;flex-direction:column;gap:var(--s-4)}.ai-status-panel{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);padding:var(--s-3);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);background:var(--c-bg-surface)}.ai-status-main{min-width:0;display:flex;flex-direction:column;gap:4px}.ai-status-main strong{color:var(--c-text-primary);font-size:var(--font-md)}.ai-status-main p{margin:0;color:var(--c-text-muted);font-size:var(--font-xs);overflow-wrap:anywhere}.ai-input-panel,.ai-result-panel{display:flex;flex-direction:column;gap:var(--s-3)}.ai-section-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-3)}.ai-section-heading h3{margin:0;color:var(--c-text-primary);font-size:var(--font-lg)}.ai-section-heading p,.ai-helper-text{margin:4px 0 0;color:var(--c-text-muted);font-size:var(--font-xs)}.ai-mode-switch,.ai-command-row,.ai-result-actions{display:flex;align-items:center;flex-wrap:wrap;gap:var(--s-2)}.ai-mode-btn{border:1px solid var(--c-border-base);background:var(--c-bg-surface);color:var(--c-text-secondary);padding:7px 10px;border-radius:var(--r-full);font-size:var(--font-xs);cursor:pointer;transition:border-color .2s ease,background-color .2s ease,color .2s ease}.ai-mode-btn.active{background:var(--c-primary);border-color:var(--c-primary);color:#fff}.ai-question-type-row{display:grid;grid-template-columns:minmax(180px,240px) 1fr;align-items:end;gap:var(--s-3)}.ai-textarea{width:100%;min-height:160px;border:1px solid var(--c-border-base);border-radius:var(--r-md);padding:var(--s-3);background:var(--c-bg-surface);color:var(--c-text-primary);font-size:var(--font-base);line-height:1.6;resize:vertical;outline:none}.ai-textarea:focus{border-color:var(--c-primary-ring);box-shadow:0 0 0 3px var(--c-primary-soft)}.ai-result-content{min-height:140px;padding:var(--s-3);background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:var(--r-md)}.ai-result-content-active{border-color:var(--c-border-base)}.ai-loading-text{text-align:center;padding:var(--s-4) var(--s-2);color:var(--c-text-muted)}.ai-empty{text-align:center;padding:var(--s-8) var(--s-4);color:var(--c-text-muted)}.ai-empty-icon{font-size:48px;margin-bottom:var(--s-2);opacity:.5}.ai-empty-text{margin:0;font-size:var(--font-base)}.ai-link-btn{background:transparent;border:none;cursor:pointer;margin-left:8px;color:var(--c-primary)}.ai-service-details{border:1px solid var(--c-border-subtle);border-radius:var(--r-md);background:var(--c-bg-surface);padding:var(--s-3)}.ai-service-details summary{cursor:pointer;color:var(--c-text-secondary);font-weight:var(--fw-semibold)}.ai-service-details .copyright-content{margin-top:var(--s-3);color:var(--c-text-secondary);line-height:1.7}.official-meta{border:1px solid var(--c-border-subtle);border-radius:10px;overflow:hidden;margin-bottom:12px}.official-meta-row{display:grid;grid-template-columns:120px 1fr;border-bottom:1px solid var(--c-border-subtle)}.official-meta-row:last-child{border-bottom:none}.official-meta-label{background:var(--c-bg-base);padding:10px 12px;font-weight:700;color:var(--c-text-primary)}.official-meta-value{padding:10px 12px;color:var(--c-text-primary);line-height:1.6}.official-meta-options{padding:10px 12px;display:flex;flex-direction:column;gap:8px}.official-meta-option{display:flex;gap:8px;align-items:flex-start}.official-meta-option .official-option-label{font-weight:700;color:var(--c-text-muted)}.official-meta-option .official-option-text{flex:1;color:var(--c-text-primary);line-height:1.6}.official-result-list{display:flex;flex-direction:column;gap:12px}.official-result-item{border:1px solid var(--c-border-subtle);border-radius:10px;padding:12px;background:var(--c-bg-surface);box-shadow:var(--shadow-1)}.official-result-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.official-result-title{font-weight:700;color:var(--c-text-primary)}.official-result-subtitle{color:var(--c-text-muted);margin-left:10px;font-size:12px}.official-section{margin-top:10px}.official-section-label{font-weight:700;color:var(--c-text-secondary);margin-bottom:6px}.official-question{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:6px;padding:8px;line-height:1.6;color:var(--c-text-primary)}.official-options{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}.official-options li{display:flex;gap:8px;align-items:flex-start;background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:6px;padding:8px}.official-options .official-option-label{font-weight:700;color:var(--c-text-muted)}.official-options .official-option-text{color:var(--c-text-primary);line-height:1.5}.official-answer-chips{display:flex;flex-wrap:wrap;gap:8px}.official-answer-empty{color:var(--c-text-muted)}@media(max-width:680px){.ai-status-panel,.ai-section-heading,.ai-question-type-row{display:flex;flex-direction:column;align-items:stretch}.ai-status-panel .aah-btn{align-self:flex-start}.ai-command-row .aah-btn{flex:1 1 auto;justify-content:center}}", ".ask-page{display:flex;flex-direction:column;gap:var(--s-3);padding:0}.ask-toolbar{position:sticky;top:0;z-index:var(--z-sticky);display:flex;align-items:center;gap:var(--s-3);padding:var(--s-2) var(--s-3);background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-1);flex-wrap:wrap}.ask-toolbar__primary{display:flex;gap:var(--s-2)}.ask-toolbar__progress{flex:1;display:flex;align-items:center;gap:var(--s-2);font-size:var(--font-sm);color:var(--c-text-muted);min-width:140px}.ask-progress-text{font-variant-numeric:var(--font-numeric);white-space:nowrap}.ask-progress-bar{flex:1;height:4px;border-radius:2px;background:var(--c-bg-hover);overflow:hidden}.ask-progress-bar>i{display:block;height:100%;background:var(--c-primary);transition:width var(--dur-base) var(--ease-out)}.ask-toolbar__actions{display:flex;gap:var(--s-1)}.ask-toolbar__actions .aah-btn{display:inline-flex;align-items:center;gap:4px}.ask-nav{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);padding:var(--s-2) var(--s-3)}.ask-nav summary{cursor:pointer;font-size:var(--font-sm);color:var(--c-text-secondary);font-weight:var(--fw-medium)}.ask-nav-legend{display:flex;gap:var(--s-3);flex-wrap:wrap;margin:var(--s-2) 0;font-size:var(--font-xs);color:var(--c-text-muted)}.legend-item{display:inline-flex;align-items:center;gap:4px}.legend-item i{width:8px;height:8px;border-radius:2px;display:inline-block}.legend-current i{background:var(--c-primary)}.legend-done i{background:var(--c-success)}.legend-error i{background:var(--c-danger)}.legend-unanswered i{background:var(--c-bg-hover);border:1px solid var(--c-border-base)}.ask-nav-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(32px,1fr));gap:var(--s-1)}.ask-nav-cell{height:28px;border-radius:var(--r-xs);background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);color:var(--c-text-muted);font-size:var(--font-xs);font-variant-numeric:var(--font-numeric);cursor:pointer;transition:background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)}.ask-nav-cell:hover{border-color:var(--c-border-base)}.ask-nav-cell.is-done{background:var(--c-success-soft);color:var(--c-success);border-color:var(--c-success)}.ask-nav-cell.is-error{background:var(--c-danger-soft);color:var(--c-danger);border-color:var(--c-danger)}.ask-nav-cell.is-current{box-shadow:0 0 0 2px var(--c-primary-ring)}.ask-card{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-1)}.ask-card__header{display:flex;align-items:center;justify-content:space-between;padding:var(--s-2) var(--s-3);border-bottom:1px solid var(--c-border-subtle)}.ask-card__title{margin:0;font-size:var(--font-md);font-weight:var(--fw-semibold);color:var(--c-text-primary)}.ask-card__actions{display:flex;gap:var(--s-1)}.ask-card__body{padding:var(--s-3)}.ask-card__body .aah_title{font-size:var(--font-base);line-height:1.6;color:var(--c-text-primary);margin-bottom:var(--s-2)}.ask-card__body .aah_options{margin:var(--s-1) 0;padding:var(--s-2) var(--s-3);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);background:var(--c-bg-subtle);cursor:pointer;transition:background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)}.ask-card__body .aah_options:hover{border-color:var(--c-border-base)}.ask-card__body .aah_options.active{background:var(--c-primary-soft);border-color:var(--c-primary);color:var(--c-primary)}.reading-passage{padding:var(--s-2) var(--s-3);background:var(--c-bg-subtle);border-radius:var(--r-sm);font-size:var(--font-sm);line-height:1.6;color:var(--c-text-secondary);margin-bottom:var(--s-3);white-space:pre-wrap}.reading-questions{display:flex;flex-direction:column;gap:var(--s-3);margin-top:var(--s-3)}.reading-sub-question{margin-top:var(--s-3)}.sub-question-title{font-size:var(--font-sm);font-weight:var(--fw-medium);color:var(--c-text-primary);margin-bottom:var(--s-1)}.ask-match-table{width:100%;border-collapse:separate;border-spacing:var(--s-1);margin-top:var(--s-2)}.ask-match-table td{padding:var(--s-2);background:var(--c-bg-subtle);border-radius:var(--r-sm);font-size:var(--font-sm)}.ask-form-note{margin:var(--s-2) 0 0;font-size:var(--font-sm)}.ask-form-note--success{color:var(--c-success)}.ask-form-note--danger{color:var(--c-danger)}.ask-loading{padding:var(--s-3);text-align:center;color:var(--c-text-muted);font-size:var(--font-sm)}.answer-block{padding:var(--s-2) var(--s-3);background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);margin-bottom:var(--s-2)}.answer-block:last-child{margin-bottom:0}.answer-header{display:flex;align-items:center;justify-content:space-between;gap:var(--s-2);margin-bottom:var(--s-1)}.answer-meta{font-size:var(--font-xs);color:var(--c-text-muted);font-variant-numeric:var(--font-numeric)}.answer-field-html{font-size:var(--font-sm);color:var(--c-text-primary);line-height:1.6}.answer-field-html img{max-width:100%;height:auto;border-radius:var(--r-sm);margin:var(--s-1) 0}.answer-field-html table{width:100%;overflow-x:auto;display:block;border-collapse:collapse}.answer-field-html p{margin:var(--s-1) 0}.ai-preview-block{border-color:var(--c-warning);background:var(--c-warning-soft)}.ai-answer-block{background:var(--c-bg-subtle)}.ask-preview-actions{display:flex;gap:var(--s-1);margin-top:var(--s-2);flex-wrap:wrap}.ai-answer-divider{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--s-2)}.ai-answer-title{display:inline-flex;align-items:center;gap:var(--s-1);font-size:var(--font-sm);font-weight:var(--fw-semibold);color:var(--c-primary)}.ai-icon{font-size:16px}.ai-streaming-tag{display:inline-flex;align-items:center;gap:4px;font-size:var(--font-xs);color:var(--c-text-muted)}.ai-dot{width:4px;height:4px;border-radius:50%;background:var(--c-primary);display:inline-block;animation:ai-bounce 1s infinite}.ai-dot:nth-child(2){animation-delay:.15s}.ai-dot:nth-child(3){animation-delay:.3s}@keyframes ai-bounce{0%,80%,to{transform:translateY(0);opacity:.6}40%{transform:translateY(-3px);opacity:1}}.ai-stream-placeholder{font-size:var(--font-sm);color:var(--c-text-muted);padding:var(--s-2) 0}.ai-answer-markdown{font-size:var(--font-sm);color:var(--c-text-primary);line-height:1.6}.ask-empty{padding:var(--s-8) var(--s-3);text-align:center;color:var(--c-text-muted)}.ask-empty__icon{font-size:48px;width:48px;height:48px;margin:0 auto var(--s-2);display:block}.modal-title{margin:0;font-size:var(--font-md);font-weight:var(--fw-semibold);color:var(--c-text-primary)}.ask-settings{display:flex;flex-wrap:wrap;gap:var(--s-2);padding:var(--s-3);background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);align-items:center}.native-checkbox{display:inline-flex;align-items:center;gap:var(--s-1);font-size:var(--font-sm);color:var(--c-text-primary);cursor:pointer}.native-checkbox input{width:16px;height:16px;accent-color:var(--c-primary)}.range-row{display:flex;flex-direction:column;gap:var(--s-1);flex:1;min-width:200px;font-size:var(--font-sm);color:var(--c-text-secondary)}.range-row input[type=range]{width:100%;accent-color:var(--c-primary)}.ask-tags{display:flex;flex-wrap:wrap;gap:var(--s-1);margin-top:var(--s-2)}.ask-info{display:flex;flex-direction:column;gap:var(--s-2);font-size:var(--font-sm);color:var(--c-text-secondary);line-height:1.6}.ask-info .info-body{color:var(--c-text-primary)}.ask-types{margin-top:var(--s-2)}.ask-types summary{cursor:pointer;font-size:var(--font-sm);font-weight:var(--fw-semibold);color:var(--c-primary)}.ask-types summary:hover{color:var(--c-primary-hover)}@media(max-width:480px){.ask-settings{flex-direction:column;align-items:flex-start}}", ".question-page{position:relative;padding:0}.question-page .watermark-bg{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;display:grid;place-items:center;gap:6px;font-size:18px;color:#0000000d;text-transform:uppercase;z-index:0}.question-page>*:not(.watermark-bg){position:relative;z-index:1}.qc-toolbar{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);flex-wrap:wrap;background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-1);padding:var(--s-2) var(--s-3);margin-bottom:var(--s-3)}.qc-toolbar-info{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.qc-toolbar-count{display:inline-flex;align-items:center;gap:6px;font-size:var(--font-md);color:var(--c-text-primary);font-variant-numeric:var(--font-numeric)}.qc-toolbar-count strong{font-size:18px;font-weight:800;color:var(--c-primary);letter-spacing:-.02em}.qc-toolbar-count-filter{font-size:var(--font-sm);color:var(--c-text-muted)}.qc-toolbar-count-filter strong{font-size:var(--font-md);color:var(--c-text-secondary)}.qc-toolbar-count-uploading{padding:2px 8px;border-radius:999px;background:var(--c-primary-soft);color:var(--c-primary);font-size:var(--font-sm)}.qc-toolbar-actions{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.qc-toolbar-actions .aah-btn{display:inline-flex;align-items:center;gap:4px}.upload-input{display:none}.qc-info-collapse{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3);animation:fadeIn .2s ease-out}.info-body{font-size:var(--font-base);color:var(--c-text-secondary);line-height:1.6}.warn-text{color:var(--c-danger);font-weight:600}.search-filter-row{display:flex;gap:var(--s-3);align-items:center;margin-bottom:var(--s-2);flex-wrap:wrap}.question-search-box{position:relative;flex:1;min-width:200px}.question-search-input{width:100%;padding:var(--s-2) 36px var(--s-2) var(--s-3);border:1px solid var(--c-border-base);border-radius:var(--r-sm);background:var(--c-bg-surface);font-size:var(--font-md);color:var(--c-text-primary);transition:all .2s ease}.question-search-input:focus{outline:none;border-color:var(--c-primary);box-shadow:0 0 0 3px var(--c-primary-ring)}.question-search-input::placeholder{color:var(--c-text-muted)}.search-clear{position:absolute;right:var(--s-3);top:50%;transform:translateY(-50%);background:none;border:none;font-size:18px;color:var(--c-text-muted);cursor:pointer;width:var(--s-5);height:var(--s-5);display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .2s ease}.search-clear:hover{background:var(--c-bg-hover);color:var(--c-text-primary)}.filter-chips{display:flex;flex-wrap:wrap;gap:var(--s-1);margin:0 0 var(--s-3)}.filter-chips .aah-tag{cursor:pointer;border:1px solid var(--c-border-subtle);-webkit-user-select:none;user-select:none;transition:background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)}.filter-chips .aah-tag:hover{border-color:var(--c-border-base)}.question-table-wrapper{margin-bottom:var(--s-4)}.qc-cards{display:flex;flex-direction:column;gap:var(--s-3)}.qc-card{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-1);padding:var(--s-3);display:flex;flex-direction:column;gap:var(--s-2);transition:all .2s ease;animation:fadeIn .3s ease-out}.qc-card:hover{box-shadow:var(--shadow-3);border-color:var(--c-border-base)}.qc-row-meta{display:flex;align-items:center;gap:var(--s-2)}.qc-row-meta .aah-tag{flex-shrink:0}.qc-num{font-size:var(--font-xs);color:var(--c-text-muted);font-variant-numeric:var(--font-numeric)}.qc-edit-btn{margin-left:auto;display:inline-flex;align-items:center;gap:4px}.qc-question{font-size:var(--font-base);color:var(--c-text-primary);line-height:1.6;word-break:break-word}.qc-question img{max-width:100%;height:auto}.qc-options-list{display:flex;flex-direction:column;gap:4px;padding:var(--s-2) 0;border-top:1px dashed var(--c-border-subtle)}.qc-option{display:flex;align-items:flex-start;gap:6px;padding:6px 10px;border-radius:var(--r-sm);font-size:var(--font-base);color:var(--c-text-secondary);line-height:1.5;word-break:break-word}.qc-option-correct{background:var(--c-success-soft);color:var(--c-success);font-weight:600}.qc-option-icon{font-size:var(--font-md);color:var(--c-success);flex-shrink:0;margin-top:2px}.qc-option-letter{flex-shrink:0;font-weight:600;font-variant-numeric:var(--font-numeric)}.qc-option-text{flex:1;min-width:0}.qc-option-text img{max-width:100%;height:auto}.qc-answer{display:flex;align-items:baseline;gap:var(--s-2);padding-top:var(--s-2);border-top:1px dashed var(--c-border-subtle);font-size:var(--font-md);color:var(--c-success);line-height:1.5;word-break:break-word}.qc-answer-label{flex-shrink:0;font-size:var(--font-xs);color:var(--c-text-muted);font-weight:600}.qc-answer-value{flex:1;font-weight:600}.qc-sub-questions{display:flex;flex-direction:column;gap:var(--s-2)}.qc-sub-question{padding:var(--s-3);background:var(--c-bg-subtle);border-radius:var(--r-sm);border:1px solid var(--c-border-subtle)}.qc-sub-question-title{font-size:var(--font-md);font-weight:600;color:var(--c-text-primary);margin-bottom:var(--s-2);line-height:1.5}.qc-sub-question-options{display:flex;flex-direction:column;gap:4px;margin-bottom:var(--s-2)}.sub-option{display:flex;align-items:flex-start;gap:6px;padding:4px 8px;border-radius:var(--r-sm);font-size:var(--font-base);color:var(--c-text-secondary);line-height:1.5}.sub-option-correct{background:var(--c-success-soft);color:var(--c-success);font-weight:600}.qc-sub-question-answer{padding:var(--s-2) var(--s-3);background:var(--c-success-soft);border-radius:6px;border-left:3px solid var(--c-success);font-size:var(--font-base);font-weight:600;color:var(--c-success)}.sub-answer-item{display:flex;align-items:flex-start;gap:var(--s-2);padding:4px 0}.sub-answer-num{display:inline-flex;align-items:center;justify-content:center;min-width:var(--s-6);height:var(--s-6);background:var(--c-success);color:var(--c-bg-surface);border-radius:50%;font-size:var(--font-sm);font-weight:700;flex-shrink:0;font-variant-numeric:var(--font-numeric)}.sub-answer-text{flex:1;font-size:var(--font-md);font-weight:600;color:var(--c-success);line-height:1.5;padding-top:2px}.table-empty{padding:var(--s-5);text-align:center;color:var(--c-text-muted);background:var(--c-bg-surface);border:1px dashed var(--c-border-subtle);border-radius:var(--r-md)}.table-empty-icon{font-size:40px;margin-bottom:8px;opacity:.5}.table-empty-text{margin:0 0 8px;color:var(--c-text-muted);font-size:var(--font-sm)}.question-pagination-wrapper{display:flex;align-items:center;justify-content:space-between;gap:var(--s-4);flex-wrap:wrap;margin-top:var(--s-4)}.question-pagination{display:flex;align-items:center;gap:var(--s-2)}.question-page-btn{display:inline-flex;align-items:center;padding:var(--s-2) var(--s-3);border:1px solid var(--c-border-base);border-radius:var(--r-sm);background:var(--c-bg-surface);color:var(--c-text-secondary);font-size:var(--font-md);cursor:pointer;transition:all .2s ease}.question-page-btn:hover:not(:disabled){background:var(--c-bg-hover);border-color:var(--c-border-strong)}.question-page-btn:disabled{opacity:.5;cursor:not-allowed}.page-numbers{display:flex;align-items:center;gap:var(--s-1)}.page-number{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:1px solid var(--c-border-base);border-radius:var(--r-sm);background:var(--c-bg-surface);color:var(--c-text-secondary);font-size:var(--font-md);cursor:pointer;transition:all .2s ease;font-variant-numeric:var(--font-numeric)}.page-number:hover{background:var(--c-bg-hover);border-color:var(--c-border-strong)}.page-number.active{background:var(--c-primary);border-color:var(--c-primary);color:var(--c-bg-surface)}.page-ellipsis{padding:0 var(--s-2);color:var(--c-text-muted)}.page-size-selector{display:flex;align-items:center;gap:var(--s-2);font-size:var(--font-md);color:var(--c-text-secondary)}.page-size-selector select{padding:6px 10px;border:1px solid var(--c-border-base);border-radius:6px;background:var(--c-bg-surface);font-size:var(--font-base);cursor:pointer;color:var(--c-text-primary)}.qc-drop-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;background:#00000073;display:flex;align-items:center;justify-content:center;pointer-events:none;animation:fadeIn .15s ease-out}.qc-drop-overlay-card{background:var(--c-bg-surface);border:2px dashed var(--c-primary);border-radius:var(--r-lg, 12px);padding:var(--s-5);display:flex;flex-direction:column;align-items:center;gap:var(--s-2);box-shadow:var(--shadow-3)}.qc-drop-overlay-icon{font-size:56px;color:var(--c-primary)}.qc-drop-overlay-text{font-size:var(--font-lg, 16px);font-weight:600;color:var(--c-text-primary)}@media(max-width:768px){.qc-toolbar{flex-direction:column;align-items:stretch}.qc-toolbar-actions{justify-content:flex-start}.search-filter-row{flex-direction:column;align-items:stretch}.question-search-box{min-width:0}.question-pagination-wrapper{flex-direction:column;gap:var(--s-4)}.question-pagination{flex-wrap:wrap;justify-content:center}.qc-sub-question{padding:var(--s-3)}.qc-sub-question-title{font-size:var(--font-base)}.sub-option,.qc-option{font-size:var(--font-sm)}}.qc-cards>*{content-visibility:auto;contain-intrinsic-size:180px}", ".question-tool{padding:0}.qt-actions{margin:var(--s-3) 0}.qt-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);align-items:start}.qt-editor,.qt-preview{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-1);padding:var(--s-3)}.qt-textarea{width:100%;min-height:480px;border:1px solid var(--c-border-base);border-radius:var(--r-sm);padding:var(--s-3);font-size:var(--font-md);line-height:1.6;resize:vertical;outline:none;background:var(--c-bg-surface);color:var(--c-text-primary)}.qt-textarea:focus{border-color:var(--c-primary);box-shadow:0 0 0 3px var(--c-primary-ring)}.qt-preview{max-height:640px;overflow:auto}.qt-empty{text-align:center;color:var(--c-text-muted);padding:var(--s-6) var(--s-3)}.qt-card{border:1px solid var(--c-border-subtle);border-radius:var(--r-sm);padding:var(--s-3);margin-bottom:var(--s-3);background:var(--c-bg-subtle)}.qt-card-error{border-color:var(--c-danger);background:var(--c-danger-soft)}.qt-card-head{display:flex;align-items:center;gap:10px;margin-bottom:var(--s-2)}.qt-title-no{font-weight:700;color:var(--c-text-primary)}.qt-tag{display:inline-flex;align-items:center;padding:var(--s-1) 10px;border-radius:var(--r-full);font-size:var(--font-sm);background:var(--c-bg-hover);color:var(--c-text-primary)}.qt-tag.danger{background:var(--c-danger-soft);color:var(--c-danger)}.qt-tag.success{background:var(--c-success-soft);color:var(--c-success)}.qt-question,.qt-answer{margin:6px 0;font-size:var(--font-md);color:var(--c-text-primary);line-height:1.6}.qt-options{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.qt-error{margin-top:var(--s-2);padding:10px;border-radius:var(--r-sm);background:var(--c-danger-soft);color:var(--c-danger);font-size:var(--font-base)}.label{color:var(--c-text-muted);margin-right:var(--s-1)}.qt-toolbar{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);margin:var(--s-3) 0}.qt-strategy{display:inline-flex;align-items:center;gap:var(--s-2);color:var(--c-text-secondary);font-size:var(--font-base)}.qt-strategy-label{color:var(--c-text-muted)}.qt-radio{display:inline-flex;align-items:center;gap:4px;cursor:pointer}.qt-stats{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:var(--s-3)}.qt-stat{display:inline-flex;align-items:center;border-radius:var(--r-full);padding:var(--s-1) 10px;background:var(--c-bg-hover);color:var(--c-text-primary);font-size:var(--font-sm);font-variant-numeric:tabular-nums}.qt-stat.success,.qt-tag.create{background:var(--c-success-soft);color:var(--c-success)}.qt-stat.danger,.qt-tag.error{background:var(--c-danger-soft);color:var(--c-danger)}.qt-stat.warning,.qt-tag.overwrite,.qt-tag.skip{background:var(--c-warning-soft);color:var(--c-warning)}.qt-stat.muted{color:var(--c-text-muted)}.qt-card-warning{border-color:var(--c-warning);background:var(--c-warning-soft)}.question-tool .aah-btn:disabled{cursor:not-allowed;opacity:.55}@media(max-width:960px){.qt-grid{grid-template-columns:1fr}.qt-textarea{min-height:360px}}", ".preview-container{padding:0;background:var(--c-bg-base);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:var(--font-md);line-height:1.5}.toolbar{display:flex;justify-content:space-between;align-items:center;background:var(--c-bg-surface);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);box-shadow:var(--shadow-2);margin-bottom:var(--s-3);gap:var(--s-3)}.toolbar-left .page-title{margin:0;font-size:var(--font-lg);font-weight:600;color:var(--c-text-primary)}.toolbar-right{display:flex;align-items:center;gap:var(--s-3)}.preview-search-box{position:relative;display:flex;align-items:center}.preview-search-input{width:200px;padding:6px var(--s-3);border:1px solid var(--c-border-base);border-radius:var(--r-xs);font-size:var(--font-base);outline:none;background:var(--c-bg-surface);color:var(--c-text-primary)}.preview-search-input:focus{border-color:var(--c-primary)}.clear-btn{position:absolute;right:var(--s-1);width:var(--s-5);height:var(--s-5);border:none;background:var(--c-danger);color:var(--c-bg-surface);border-radius:50%;cursor:pointer;font-size:var(--font-sm);display:flex;align-items:center;justify-content:center}.page-size{padding:var(--s-1) var(--s-2);border:1px solid var(--c-border-base);border-radius:var(--r-xs);font-size:var(--font-sm);background:var(--c-bg-surface);color:var(--c-text-primary)}.search-info{background:var(--c-info-soft);color:var(--c-info);padding:var(--s-2) var(--s-3);border-radius:var(--r-xs);margin-bottom:var(--s-3);font-size:var(--font-base)}.preview-questions-container{background:var(--c-bg-surface);border-radius:var(--r-sm);box-shadow:var(--shadow-2);overflow:hidden}.loading{display:flex;align-items:center;justify-content:center;padding:var(--s-10);gap:var(--s-3);color:var(--c-text-muted)}.preview-spinner{width:var(--s-5);height:var(--s-5);border:2px solid var(--c-border-subtle);border-top:2px solid var(--c-primary);border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.empty{text-align:center;padding:var(--s-10) var(--s-5);color:var(--c-text-muted)}.preview-empty-icon{font-size:48px;margin-bottom:var(--s-3)}.empty p{margin:0 0 var(--s-4) 0}.btn-clear{background:var(--c-primary);color:var(--c-bg-surface);border:none;padding:var(--s-2) var(--s-4);border-radius:var(--r-xs);cursor:pointer;font-size:var(--font-base)}.btn-clear:hover{background:var(--c-primary-hover)}.questions-list{display:flex;flex-direction:column}.question-item{border-bottom:1px solid var(--c-border-subtle);padding:var(--s-3)}.question-item:last-child{border-bottom:none}.question-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--s-3)}.question-info{display:flex;align-items:center;gap:var(--s-2)}.question-num{background:var(--c-primary);color:var(--c-bg-surface);padding:2px var(--s-2);border-radius:var(--r-md);font-size:var(--font-sm);font-weight:500;min-width:var(--s-6);text-align:center;font-variant-numeric:var(--font-numeric)}.question-type{background:var(--c-bg-subtle);color:var(--c-text-secondary);padding:2px var(--s-2);border-radius:var(--r-md);font-size:var(--font-xs);border:1px solid var(--c-border-subtle)}.question-actions{display:flex;gap:var(--s-1)}.btn-edit,.btn-delete{width:28px;height:28px;border:none;border-radius:var(--r-xs);cursor:pointer;font-size:var(--font-md);display:flex;align-items:center;justify-content:center}.btn-edit{background:var(--c-info-soft);color:var(--c-info)}.btn-edit:hover{background:var(--c-primary-soft)}.btn-delete{background:var(--c-danger-soft);color:var(--c-danger)}.btn-delete:hover{background:var(--c-danger-soft);filter:brightness(.95)}.preview-question-content{line-height:1.6}.preview-question-text{margin-bottom:var(--s-3);color:var(--c-text-primary)}.preview-question-text img{max-width:100%;height:auto;border-radius:var(--r-sm);margin:var(--s-2) 0;background:var(--c-bg-subtle)}.options{margin-bottom:var(--s-3)}.reading-type{background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);border-radius:6px;padding:var(--s-3)}.reading-title{font-weight:600;color:var(--c-text-secondary);margin-bottom:var(--s-2);font-size:var(--font-base)}.preview-sub-questions{display:flex;flex-direction:column;gap:var(--s-2)}.preview-sub-question{background:var(--c-bg-surface);padding:var(--s-2);border-radius:var(--r-xs);border:1px solid var(--c-border-subtle);font-size:var(--font-base)}.sub-num{color:var(--c-primary);font-weight:600;margin-right:var(--s-1);font-variant-numeric:var(--font-numeric)}.sub-type{color:var(--c-text-muted);font-size:var(--font-xs);margin-right:var(--s-2)}.sub-text{color:var(--c-text-secondary);margin-top:var(--s-1);display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.sub-text img{background:var(--c-bg-subtle);border-radius:var(--r-sm)}.more-subs{text-align:center;color:var(--c-text-muted);font-size:var(--font-sm);font-style:italic;padding:var(--s-1)}.complex-type{background:var(--c-warning-soft);color:var(--c-warning);padding:var(--s-2) var(--s-3);border-radius:var(--r-xs);font-size:var(--font-base);border:1px solid var(--c-warning-soft)}.normal-options{display:flex;flex-direction:column;gap:6px}.option{display:flex;align-items:flex-start;gap:var(--s-2);padding:6px var(--s-2);border-radius:var(--r-xs);background:var(--c-bg-subtle);position:relative}.option.correct{background:var(--c-success-soft);border:1px solid var(--c-success-soft)}.option-label{color:var(--c-text-secondary);font-weight:500;min-width:var(--s-5)}.option-text{flex:1;color:var(--c-text-primary)}.option-text img{background:var(--c-bg-subtle);border-radius:var(--r-sm)}.correct-mark{color:var(--c-success);font-weight:700;font-size:var(--font-lg)}.answer{background:var(--c-success-soft);border:1px solid var(--c-success-soft);border-radius:var(--r-xs);padding:var(--s-2) var(--s-3);margin-top:var(--s-2)}.preview-answer-label{color:var(--c-success);font-weight:600;margin-right:var(--s-2)}.preview-answer-list{display:inline-flex;flex-wrap:wrap;gap:var(--s-1)}.preview-answer-item{background:var(--c-success);color:var(--c-bg-surface);padding:2px var(--s-2);border-radius:var(--r-md);font-size:var(--font-sm)}.preview-answer-text{color:var(--c-success);display:inline}.preview-answer-text img{background:var(--c-bg-subtle);border-radius:var(--r-sm)}.no-answer{color:var(--c-text-muted);font-style:italic}.preview-pagination{display:flex;justify-content:center;align-items:center;gap:var(--s-3);padding:var(--s-3);background:var(--c-bg-surface);border-top:1px solid var(--c-border-subtle);margin-top:var(--s-3);border-radius:var(--r-sm);box-shadow:var(--shadow-2);font-variant-numeric:var(--font-numeric)}.preview-page-btn{background:var(--c-bg-subtle);border:1px solid var(--c-border-subtle);color:var(--c-text-secondary);padding:6px var(--s-3);border-radius:var(--r-xs);cursor:pointer;font-size:var(--font-base)}.preview-page-btn:hover:not(:disabled){background:var(--c-bg-hover)}.preview-page-btn:disabled{opacity:.5;cursor:not-allowed}.page-info{display:flex;align-items:center;gap:var(--s-1);color:var(--c-text-secondary);font-size:var(--font-base);font-variant-numeric:var(--font-numeric)}.page-input{width:var(--s-10);text-align:center;border:1px solid var(--c-border-subtle);border-radius:var(--r-xs);padding:2px var(--s-1);font-size:var(--font-base);background:var(--c-bg-surface);color:var(--c-text-primary);font-variant-numeric:var(--font-numeric)}.total-info{color:var(--c-text-muted);font-size:var(--font-sm);font-variant-numeric:var(--font-numeric)}.highlight{background:var(--c-warning-soft);color:var(--c-warning);padding:1px 2px;border-radius:2px}@media(max-width:600px){.toolbar{flex-direction:column;align-items:stretch;gap:var(--s-3)}.toolbar-right{justify-content:space-between}.preview-search-input{width:150px}.question-header{flex-direction:column;align-items:flex-start;gap:var(--s-2)}.preview-pagination{flex-wrap:wrap;gap:var(--s-2)}}", ".log-page{display:flex;flex-direction:column;gap:var(--s-3);padding:var(--s-4)}.log-header,.log-toolbar{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);flex-wrap:wrap}.log-header h2{margin:0;color:var(--c-text-primary);font-size:var(--font-xl)}.log-header p{margin:4px 0 0;color:var(--c-text-muted);font-size:var(--font-xs)}.log-actions,.log-filter{display:flex;align-items:center;gap:var(--s-2);flex-wrap:wrap}.log-list{display:flex;flex-direction:column;gap:var(--s-2);max-height:420px;margin:0;padding:0;list-style:none;overflow:auto}.log-row{display:grid;grid-template-columns:88px auto minmax(0,1fr);align-items:start;gap:var(--s-2);padding:var(--s-2) var(--s-3);border:1px solid var(--c-border-subtle);border-left-width:4px;border-radius:var(--r-sm);background:var(--c-bg-surface)}.log-row-success{border-left-color:var(--c-success)}.log-row-warning{border-left-color:var(--c-warning)}.log-row-error{border-left-color:var(--c-danger)}.log-time{color:var(--c-text-muted);font-size:var(--font-xs);font-variant-numeric:tabular-nums}.log-msg{min-width:0;color:var(--c-text-primary);line-height:1.5;overflow-wrap:anywhere}.log-empty{min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--s-2);border:1px solid var(--c-border-subtle);border-radius:var(--r-md);background:var(--c-bg-surface);color:var(--c-text-muted)}.log-empty-icon{width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--r-full);background:var(--c-primary-soft);color:var(--c-primary);font-weight:var(--fw-semibold)}", ".paper-library-container{padding:0;display:flex;flex-direction:column;gap:var(--s-3)}.search-card{display:flex;flex-direction:column;gap:10px}.search-header{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.input-wrap{flex:1;display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--c-bg-base);border-radius:10px;border:1px solid transparent;transition:border-color .2s ease,box-shadow .2s ease}.input-wrap:focus-within{border-color:var(--c-primary-ring);box-shadow:var(--shadow-1)}.input-prefix{font-size:16px}.input-field{flex:1;border:none;background:transparent;font-size:14px;outline:none;color:var(--c-text-primary)}.search-stats{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.param-table-card{background:var(--c-bg-surface);border:1px solid var(--c-border-subtle);border-radius:10px;padding:10px;display:flex;flex-direction:column;gap:8px}.param-table-header,.param-table-row{display:grid;grid-template-columns:180px 1fr 90px;gap:10px;align-items:center}.param-table-header{font-weight:600;color:var(--c-text-secondary);font-size:13px}.param-table-row{padding:6px 0;border-bottom:1px solid var(--c-border-subtle)}.param-table-row:last-child{border-bottom:none}.param-value-group{display:flex;gap:8px;flex-wrap:wrap}.param-type{width:120px}.param-value{flex:1;min-width:160px}.param-code-wrapper{flex:1;min-width:200px;display:flex;flex-direction:column;gap:6px}.param-code{width:100%;min-height:80px}.param-error{color:var(--c-danger);font-size:12px}.papers-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:var(--s-3);margin-bottom:8px}.papers-grid .pl-loading{grid-column:1 / -1;padding:24px 0;text-align:center;color:var(--c-text-muted)}.pl-loading{text-align:center;padding:var(--s-4) var(--s-2);color:var(--c-text-muted)}.pl-empty{grid-column:1 / -1;text-align:center;padding:var(--s-8) var(--s-4);background:var(--c-bg-surface);border-radius:var(--r-lg);border:1px dashed var(--c-border-base)}.pl-empty-icon{font-size:40px;margin-bottom:var(--s-2);opacity:.5}.pl-empty-text{margin:0;color:var(--c-text-muted);font-size:var(--font-base)}.pl-info-card{display:flex;gap:var(--s-3);align-items:flex-start}.pl-info-icon{font-size:18px;opacity:.7;flex-shrink:0}.pl-info-text{font-size:var(--font-base);color:var(--c-text-secondary);line-height:1.6}.pl-info-highlight{color:var(--c-warning);margin-left:4px;font-weight:600}.paper-card{cursor:pointer;transition:all .2s cubic-bezier(.25,.1,.25,1);height:100%;display:flex;flex-direction:column}.paper-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-3);border-color:var(--c-border-base)}.paper-header{display:flex;align-items:flex-start;gap:var(--s-3);margin-bottom:var(--s-3)}.paper-icon{flex-shrink:0;width:44px;height:44px;display:grid;place-items:center;background:var(--c-primary-soft);border-radius:10px;font-size:20px}.paper-info{flex:1;min-width:0}.paper-title{margin:0 0 8px;font-size:16px;font-weight:600;color:var(--c-text-primary);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;line-height:1.4}.paper-meta{display:flex;gap:6px;flex-wrap:wrap}.paper-footer{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:var(--s-3);border-top:1px solid var(--c-border-subtle)}.paper-actions{display:flex;align-items:center;gap:8px}.chevron{color:var(--c-text-muted);font-size:18px;transition:transform .2s ease,color .2s ease}.paper-card:hover .chevron{transform:translate(2px);color:var(--c-primary)}.header-card{display:flex;flex-direction:column;gap:var(--s-3)}.pl-header-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:space-between;align-items:center;padding-bottom:10px;border-bottom:1px solid var(--c-border-subtle)}.header-action-group{display:flex;gap:8px;flex-wrap:wrap}.course-info h2,.chapter-info-header h2{margin:0;font-size:22px;font-weight:700;color:var(--c-text-primary);letter-spacing:-.02em}.course-stats,.chapter-info-header{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px}.chapters-list{display:flex;flex-direction:column;gap:var(--s-3)}.chapter-card{cursor:pointer;transition:all .3s cubic-bezier(.25,.1,.25,1)}.chapter-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-3);border-color:var(--c-border-base)}.chapter-header{display:flex;align-items:center;gap:14px}.chapter-number{width:36px;height:36px;border-radius:10px;background:var(--c-primary);color:#fff;display:grid;place-items:center;font-size:15px;font-weight:700;flex-shrink:0;box-shadow:var(--shadow-2)}.chapter-info{flex:1;min-width:0}.chapter-title{margin:0;font-size:17px;font-weight:600;color:var(--c-text-primary);line-height:1.4;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.chapter-meta{margin-top:6px}.chapter-actions{display:flex;align-items:center;gap:10px;margin-left:auto;flex-shrink:0}.pl-questions-container{display:flex;flex-direction:column;gap:var(--s-3)}.pl-question-card{transition:all .2s cubic-bezier(.25,.1,.25,1)}.pl-question-card:hover{transform:translateY(-1px);box-shadow:var(--shadow-3);border-color:var(--c-border-base)}.question-number{display:inline-block;padding:4px 12px;background:var(--c-primary);color:#fff;border-radius:6px;font-size:12px;font-weight:700;margin-bottom:12px;box-shadow:var(--shadow-1)}.question-title{font-size:15px;line-height:1.6;color:var(--c-text-primary);margin-bottom:var(--s-3);word-break:break-word;padding:var(--s-3);background:var(--c-bg-base);border-radius:10px}.question-title img{max-width:100%;height:auto;border-radius:8px;margin:12px 0}.question-options{margin-bottom:16px}.option-item{display:flex;align-items:flex-start;padding:var(--s-2) var(--s-3);margin-bottom:8px;background:var(--c-bg-base);border-radius:10px;transition:all .2s ease;border:1px solid transparent}.option-item:last-child{margin-bottom:0}.option-item:hover{background:var(--c-bg-hover);transform:translate(2px);border-color:var(--c-primary-ring)}.option-item.is-answer{background:var(--c-success-soft);border:1px solid rgba(16,185,129,.35);color:var(--c-text-primary);font-weight:500}.option-item .option-label{flex-shrink:0;font-weight:700;margin-right:10px;min-width:24px;color:var(--c-text-muted)}.option-item.is-answer .option-label{color:var(--c-success)}.option-content{flex:1;line-height:1.6;word-break:break-word}.option-content img{max-width:100%;height:auto;border-radius:6px;margin:8px 0}.question-answer{margin-top:14px;padding-top:12px;border-top:1px solid var(--c-border-subtle)}.answer-divider{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:8px;background:var(--c-success-soft);color:var(--c-success);font-weight:700;font-size:13px}.answer-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.pl-answer-content{padding:12px;background:var(--c-success-soft);border-radius:10px;color:var(--c-text-primary);line-height:1.6;word-break:break-word;border:1px solid rgba(16,185,129,.2);margin-top:10px}.pl-answer-content img{max-width:100%;height:auto;border-radius:6px;margin:8px 0}@media(max-width:768px){.pl-header-actions{flex-direction:column;align-items:flex-start}.papers-grid{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.paper-footer{flex-direction:column;align-items:flex-start;gap:10px}.chapter-header{align-items:flex-start}}" ].join("\n"), sh = "__aiAskHookedXHRSend", installXHRHook = (e, t) => {
    const a = Object.getOwnPropertyDescriptor(e.prototype, "send"), n = (null == a ? void 0 : a.value) ?? e.prototype.send;
    if ("function" == typeof (r = n) && true === r[sh]) return false;
    var r;
    if ("function" != typeof n) return false;
    if (false === (null == a ? void 0 : a.configurable) && false === a.writable) return false;
    const s = n, hookedSend = function(e) {
      return this.addEventListener("readystatechange", (function() {
        t.call(this, this);
      })), s.call(this, e);
    };
    return Object.defineProperty(hookedSend, sh, {
      value: true
    }), Object.defineProperty(e.prototype, "send", {
      configurable: false,
      writable: false,
      value: hookedSend
    }), true;
  }, get_href = () => location.href, hookXHR = () => {
    installXHRHook(XMLHttpRequest, (function() {
      var e;
      switch (true) {
       case /geovisearth\.com/i.test(location.host):
        if (4 === this.readyState && this.responseURL && this.responseURL.includes("/education/exam/startExam")) try {
          const e = "string" == typeof this.response ? this.response : this.responseText, t = JSON.parse(e), a = t && t.data ? Object.values(t.data) : [];
          a.length > 0 && (W.antaiques = a, a.length, waitUntil((() => D(".n-card.n-modal .el-carousel__item").length > 0), {
            timeout: 15e3
          }).then((() => vuePageChange())).catch((() => {})));
        } catch (t) {}
        break;

       case /onlineexamh5new.zhihuishu.com/i.test(get_href()):
        if (4 === this.readyState && this.responseURL && /\/student\/(doHomework|doExam)/i.test(this.responseURL)) try {
          const e = "string" == typeof this.response ? this.response : this.responseText;
          if (!e || !e.includes("workExamParts")) break;
          const t = JSON.parse(e), a = t.rt || t, n = extractZhihuishuExamQuestions(a).length;
          n > 0 && (W.zhsques = a);
        } catch (t) {}
        break;

       case /icve.com.cn/i.test(location.host):
        4 === this.readyState && this.responseURL && (this.responseURL.includes("examRecordPaperList") || this.responseURL.includes("queryXsDtjgSjInfo")) && JSON.parse(this.response);
        break;

       case /qingshuxuetang.com/i.test(get_href()):
        if (4 === this.readyState && (this.responseURL.includes("Student/DetailData") || this.responseURL.includes("Student/SimulationExercise/DetailData") || this.responseURL.includes("Student/Quiz/DetailData"))) {
          const e = JSON.parse(this.response);
          W.qsques = e.data.paperDetail.questions, e.data.paperDetail.questions;
        }
        break;

       case /bgzk-edu\.cn/i.test(location.host):
        if (4 === this.readyState && this.responseURL && this.responseURL.includes("/student/course/quiz/detail")) try {
          const t = "string" == typeof this.response ? this.response : this.responseText, a = JSON.parse(t), n = null == (e = null == a ? void 0 : a.data) ? void 0 : e.studentQuestions;
          Array.isArray(n) && n.length > 0 && (W.bgzkquiz = a.data, W.bgzkques = n, n.length);
        } catch (t) {}
        break;

       case /cce.org.uooconline.com/i.test(get_href()):
        if (4 === this.readyState && this.responseURL.includes("/exam/view?cid=")) {
          const e = JSON.parse(this.response);
          W.cceques = e.data.questions, e.data.questions;
        }
        break;

       case /cj-edu.com/i.test(get_href()):
        if (4 === this.readyState && this.responseURL.includes("api/student/getHomeworkStudentInfo.do")) {
          const e = JSON.parse(this.response);
          W.cjques = e.data, e.data;
        }
        break;

       case /gxk.yxlearning.com/i.test(get_href()):
        if (4 === this.readyState && this.responseURL.includes("cms/paper/start-do-paper-or-test.gson")) {
          const e = JSON.parse(this.response);
          W.yxques = e.attribute.data, e.data;
        }
      }
    }));
  };

  (e => {
    if ("function" != typeof e) return;
    const t = e, a = getRuntime();
    "function" != typeof a.GM_xmlhttpRequest && (a.GM_xmlhttpRequest = t), a.GM || (a.GM = {}), 
    "function" != typeof a.GM.xmlHttpRequest && (a.GM.xmlHttpRequest = t);
  })(K);

  const run = async () => {
    var e;
    (e = document.createElement("iframe")).style.display = "none", document.body.appendChild(e), 
    window.console = e.contentWindow.console;
    (W === W.top || [ /\/work\/doHomeWorkNew/i, /selectWorkQuestionYiPiYue/i, /page\/quiz\/stu\/answerQuestion2/i, /page\/active\/stuActiveList/i, /uooconline.com/i, /edu-edu.com/i, /hblearning\/exam\/portal\/exam.jsp/i ].some((e => e.test(location.href))) || ha.some((e => "hook" !== e.type && isRuleMatched(e)))) && ((() => {
      var e;
      const t = pinia.createPinia(), a = vue.createApp(nh);
      a.use(t);
      const n = document.createElement("div"), r = document.createElement("div");
      r.id = "AiAskApp", (e => {
        var t, a;
        if (!oe.iframe || e.self === e.top) return false;
        try {
          return (null == (a = null == (t = e.top) ? void 0 : t.location) ? void 0 : a.origin) === e.location.origin;
        } catch {
          return false;
        }
      })(window) ? (r.id = "AiAskAppTop", null == (e = window.top) || e.document.body.appendChild(n)) : document.body.append(n);
      const s = n.attachShadow({
        mode: "closed"
      });
      s.appendChild(r);
      try {
        const e = document.createElement("style");
        e.textContent = rh, s.appendChild(e);
      } catch (i) {
        console.error("\u5e94\u7528\u6837\u5f0f\u8868\u65f6\u51fa\u9519:", i);
      }
      a.mount(r);
    })(), parseRule(ha));
  };

  (() => {
    if (hookXHR(), /onlineexamh5new.zhihuishu.com/i.test(get_href())) {
      const e = W.yxyz;
      W.yxyz = function(t, a) {
        !W.yxyzpush && (W.yxyzpush = []);
        let n = e(t, a);
        return W.yxyzpush.push({
          ...t,
          data: n
        }), n;
      };
    }
    if (/icve.com.cn/i.test(get_href()) || /courshare.cn/i.test(get_href()) || /webtrn.cn/i.test(get_href())) {
      const e = W.open;
      W.open = function() {
        return arguments[2] = "", e.apply(this, arguments);
      };
    }
    if (/ytccr.com/i.test(get_href())) {
      const e = localStorage.getItem;
      localStorage.getItem = function(t) {
        if ("_debugger" === t) return true;
        return e.apply(this, arguments);
      };
    }
    if (/91huayi.com/i.test(get_href())) {
      const e = W.$.cookie;
      W.$.cookie = function(t, a, n) {
        return console.log("Cookie\u64cd\u4f5c:", t, a, n), t.startsWith("switchTime") && void 0 !== a ? (a = void 0, 
        e.apply(this, [ t, a, n ])) : e.apply(this, arguments);
      };
    }
  })(), ha.filter((e => isRuleMatched(e) && e.hook)).forEach((e => {
    e.hook();
  })), "complete" === document.readyState ? run() : window.addEventListener("load", run);

})(Vue, Icon, DOMPurify, Pinia, CryptoJS, $);