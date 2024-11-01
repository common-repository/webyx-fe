/*! Webyx FE - https://webyx.it/wfe-guide */!function i(r, o, n) {
  function a(e, t) {
    if (!o[e]) {
      if (!r[e]) {
        var s = "function" == typeof require && require;
        if (!t && s) return s(e, !0);
        if (h) return h(e, !0);
        throw (s = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", 
        s;
      }
      s = o[e] = {
        exports: {}
      }, r[e][0].call(s.exports, function(t) {
        return a(r[e][1][t] || t);
      }, s, s.exports, i, r, o, n);
    }
    return o[e].exports;
  }
  for (var h = "function" == typeof require && require, t = 0; t < n.length; t++) a(n[t]);
  return a;
}({
  1: [ function(t, e, s) {
    "use strict";
    var i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function n(t) {
      if (1 !== arguments.length || "object" === (void 0 === t ? "undefined" : o(t))) {
        var h;
        if (this.dfts = {
          ars: !0,
          ilsctmen: !1,
          ilsctm: 1,
          ilscsi: !1,
          vmsob: 400,
          vmeob: "easeout",
          sdwub: 600,
          sdhub: 700,
          av: !0,
          avf: !0,
          avvd: !0,
          iwhf: !1,
          nvvw: !0,
          kn: !0,
          dv: !1,
          dvp: "right",
          dh: !1,
          dhp: "bottom",
          dhs: !1,
          dtv: !0,
          dth: !0,
          dtvcp: !1,
          dthcp: !1,
          fsb: !1,
          fsp: "right"
        }, this._o = {}, void 0 !== t ? (this._o = JSON.stringify(this.dfts) + JSON.stringify(t), 
        this._o = this._o.replace(/\}\{/, ","), this._o = JSON.parse(this._o)) : this._o = this.dfts, 
        this.iP = !1, this.wp = !0, this.wpplty = "wfe", this.ilsctmen = this._o.ilsctmen, 
        this.ilsctm = this._o.ilsctm, this.ilscsi = this._o.ilscsi, this.CNMaVi = "webyx-webyx", 
        this.maVi = document.getElementsByClassName(this.CNMaVi)[0], this.weWr = document.getElementsByClassName("webyx-webyx-wrp")[0], 
        this.weWrEl = document.getElementsByClassName("webyx-stripe")[0].parentElement, 
        this.stLiLX = [], this.fdskm = !1 === this._o.fdskm ? "" : "desktop", this.mobileCheck = function() {
          var t, e = !1;
          return t = navigator.userAgent || navigator.vendor || window.opera, e = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? !0 : e;
        }, this.mode = this.fdskm || (this.mobileCheck() && ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || 0 < navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints) ? "mobile" : "desktop"), 
        this.trEv = function() {
          var t, e = document.createElement("div"), s = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
          for (t in s) if (void 0 !== e.style[t]) return s[t];
        }(), this.ars = this._o.ars, this.pv = this.trEv && this._o.pv, this.ph = this.trEv && this._o.ph, 
        this.pvo = this.pv && this._o.pvo, this.pho = this.ph && this._o.pho, this.anIP = !1, 
        this.CNSt = "webyx-stripe", this.CNSP = "webyx-side-page", this.stDaAt = "stripe", 
        this.sPDaAt = "side-page", this.CNTrVi = "desktop" === this.mode ? "webyx-slide-viewport-dsk" : "webyx-slide-viewport-mobile", 
        this.env = {
          prd: !0,
          rootLP: ""
        }, this.peViSi = 100, this.umPx = "px", this.umVw = "vw", this.umVh = "vh", this.umWh = "desktop" === this.mode ? this.umVw : this.umPx, 
        this.umHt = "desktop" === this.mode ? this.umVh : this.umPx, this.whVi = window.innerWidth, 
        this.htVi = window.innerHeight, this.raVi = parseFloat((this.htVi / this.whVi).toFixed(2)), 
        this.getTrgStrFromCurIAndDir = function(t, e) {
          var s = null, i = this.strs.length;
          switch (e) {
           case "top":
            s = t < 2 ? this.strs[i - 2] : this.strs[t - 1];
            break;

           case "bottom":
            s = i - 3 < t ? this.strs[1] : this.strs[t + 1];
          }
          return {
            stripe: s,
            stripeCloned: null
          };
        }, this.getTrgStrFromITrg = function(t) {
          this.strs.length;
          return {
            stripe: this.strs[t],
            stripeCloned: null
          };
        }, this.getScreenOrn = function() {
          return 1 < this.raVi ? "portrait" : this.raVi < 1 ? "landscape" : 1 === this.raVi ? "square" : void 0;
        }, this.screenOrn = (e = this).getScreenOrn(e.raVi), this.regnScreenOrnMob = function() {
          var t = this.strs, e = t.length;
          this.weWr.style.height = this.htVi + this.umPx, this.weWr.style.top = -(this.htVi * this.iCurStr) + this.umPx;
          for (var s = 0; s < e; s++) {
            for (var i = t[s].childElementCount, r = t[s].getElementsByClassName(this.CNSP), o = 0; o < i; o++) r[o].style.left = o * this.whVi + this.umPx, 
            t[s].style.left = -(this.iCurSP * this.whVi) + this.umPx;
            t[s].style.top = this.htVi * s + this.umPx, 0 !== s && s !== e - 1 || (t[s].style.left = 0 + this.umPx);
          }
        }, this.getDimByMode = function(t) {
          switch (t) {
           case "h":
            return "desktop" === this.mode ? this.peViSi : this.htVi;

           case "w":
            return "desktop" === this.mode ? this.peViSi : this.whVi;
          }
        }, this.rsplscreen = function() {
          var t = document.getElementsByClassName("webyx-splash")[0];
          t && this.maVi.removeChild(t);
        }, this.init = function() {
          var e, s, i;
          this.trEv && ("function" == typeof window.CustomEvent ? (e = new CustomEvent("transition-start", {
            bubbles: !0,
            cancelable: !0
          }), s = new CustomEvent("transition-end", {
            bubbles: !0,
            cancelable: !0
          })) : (e = document.createEvent("CustomEvent"), s = document.createEvent("CustomEvent"), 
          e.initCustomEvent("transition-start", !0, !0, void 0), s.initCustomEvent("transition-end", !0, !0, void 0)), 
          (i = this).maVi.addEventListener(i.trEv, function(t) {
            "opacity" === t.propertyName && 0 !== t.elapsedTime && t.target.classList.contains(i.CNMaVi) ? (i.anIP || (i.anIP = !0), 
            t.target.dispatchEvent(e)) : 0 !== t.elapsedTime && t.target.classList.contains(i.CNTrVi) && t.target.dispatchEvent(s);
          }));
          var t = document.getElementsByClassName(this.CNSt), r = t.length, o = 0;
          if (!t.length) return null;
          for (;o < r; o++) {
            var n = t[o].childElementCount, a = t[o].getElementsByClassName(this.CNSP);
            t[o].style.left = -this.getDimByMode("w") + this.umWh, t[o].style.zIndex = 0 === o ? 9990 : o + 1;
            for (var h, l, d, c, u = 0; u < n; u++) a[u].style.left = this.getDimByMode("w") * (u + 1) + this.umWh;
            1 === n ? (d = (l = a[0]).cloneNode(!0), c = l.cloneNode(!0), d.style.left = 0 + this.umWh, 
            c.style.left = 2 * this.getDimByMode("w") + this.umWh, d.innerHTML = "", c.innerHTML = "", 
            t[o].insertBefore(d, l), t[o].appendChild(c)) : (h = a[0], l = a[n - 1], d = h.cloneNode(!0), 
            c = l.cloneNode(!0), d.innerHTML = "", c.innerHTML = "", c.style.left = 0 + this.umWh, 
            d.style.left = (n + 1) * this.getDimByMode("w") + this.umWh, t[o].insertBefore(c, h), 
            t[o].appendChild(d));
            for (var m = 1; m < t[o].childElementCount - 1; m++) t[o].children[m].classList.add("webyx-no-cloned");
          }
          for (var p = t[0], w = t[r - 1].cloneNode(!0), v = w.childElementCount; 0 < v; v--) 2 !== v && w.removeChild(w.children[v - 1]);
          w.style.left = 0 + this.umWh, w.style.top = 0 + this.umHt, w.style.zIndex = 0, w.children[0].style.left = 0 + this.umWh;
          for (var C = p.cloneNode(!0), v = C.childElementCount; 0 < v; v--) 2 !== v && C.removeChild(C.children[v - 1]);
          C.style.left = 0 + this.umWh, C.style.top = (r + 1) * this.getDimByMode("h") + this.umHt, 
          C.style.zIndex = r + 1, C.children[0].style.left = 0 + this.umWh, C.innerHTML = "", 
          w.innerHTML = "", "wfg" === this.wpplty ? (this.weWr.insertBefore(w, p), this.weWr.appendChild(C)) : "wfe" === this.wpplty ? (this.weWrEl.insertBefore(w, p), 
          this.weWrEl.appendChild(C)) : "wui" === this.wpplty && (this.maVi.insertBefore(w, p), 
          this.maVi.appendChild(C));
          var S, p = document.getElementsByClassName(this.CNSt);
          this.rAF(), this.ilsctmen ? this.ilscsi || (S = this, b = Number(1e3 * S.ilsctm), 
          setTimeout(function() {
            S.rsplscreen();
          }, b)) : this.rsplscreen();
          var b = document.querySelector("html");
          return b.className += b.className ? " webyx-html" : "webyx-html", p;
        }, this.rAF = function() {
          !function(r, t, e) {
            for (var o = 0, s = [ "ms", "moz", "webkit", "o" ], i = 0; i < s.length && !r[t]; ++i) r[t] = r[s[i] + "RequestAnimationFrame"], 
            r[e] = r[s[i] + "CancelAnimationFrame"] || r[s[i] + "CancelRequestAnimationFrame"];
            r[t] || (r[t] = function(t) {
              var e = new Date().getTime(), s = Math.max(0, 16 - (e - o)), i = r.setTimeout(function() {
                t(e + s);
              }, s);
              return o = e + s, i;
            }), r[e] || (r[e] = function(t) {
              r.clearTimeout(t);
            });
          }(window, "requestAnimationFrame", "cancelAnimationFrame");
        }, this.refreshVarsOnResz = function() {
          this.iPost && this.iPost(), this.whVi = window.innerWidth, this.htVi = window.innerHeight, 
          this.raVi = parseFloat((this.htVi / this.whVi).toFixed(2)), this.screenOrn = this.getScreenOrn(), 
          this.MM_DYN_RWS = "landscape" === this.screenOrn && "mobile" === this.mode && this.htVi < this.sdhub ? this.mmrlp : this.mmr, 
          this.isPh = this.detectMobDevType();
        }, this.reszCatcherDsk = function() {
          this.refreshVarsOnResz();
        }, this.reszCatcherMob = function() {
          var t = this.screenOrn;
          this.refreshVarsOnResz(), t !== this.screenOrn ? this.regnScreenOrnMob() : ((t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && this.regnScreenOrnMob(), 
          t || this.regnScreenOrnMob());
        }, this.iPost = function() {
          if (!this.iP) {
            this.weWr.style.position = "absolute", this.weWr.style.height = this.getDimByMode("h") + this.umHt, 
            this.weWr.style.top = -this.getDimByMode("h") + this.umHt;
            for (var t = document.getElementsByClassName(this.CNSt), e = t.length, s = 1; s < e - 1; s++) t[s].style.top = s * this.getDimByMode("h") + this.umHt, 
            1 === s && (t[s].style.zIndex = 1);
            this.iP = !0;
          }
        }, this.strs = this.init(), this.strs) switch (this.getItemLiNas = function() {
          for (var t = [], e = 1; e < this.strs.length - 1; e++) {
            var s = this.strs[e].getAttribute("data-" + this.stDaAt);
            t.push(s);
          }
          return t;
        }, this.ordItemLiNas = this.getItemLiNas(), this.fsb = this._o.fsb, this.fsp = this._o.fsp, 
        this.fScreenBtn = null, this.vmsob = parseInt(this._o.vmsob), this.vmeob = this._o.vmeob, 
        this.sdwub = this._o.sdwub, this.sdhub = this._o.sdhub, this.noClStrsLng = this.strs.length - 2, 
        this.arKPr = !1, this.buildFScreenBtn = function() {
          var t = window.document.documentElement;
          if (t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen) {
            var e = document.createElement("div"), s = 5 + this.umPx;
            e.className = "webyx-full-screen-button-wrapper webyx-full-screen-button-wrapper-background-color webyx-full-screen-button-wrapper-" + this.fsp, 
            e.style.width = 26 + this.umPx, e.style.height = 26 + this.umPx;
            for (var i = [ "-top-left", "-top-right", "-bottom-right", "-bottom-left" ], r = "webyx-full-screen-button-part", o = {}, n = 0; n < i.length; n++) {
              o[r + i[n]] = document.createElement("div");
              var a = o[r + i[n]];
              switch (a.style.width = s, a.style.height = s, a.style.position = "absolute", a.className = r + " " + r + i[n] + "-outer", 
              i[n]) {
               case i[0]:
                a.style.top = 0 + this.umPx, a.style.left = 0 + this.umPx;
                break;

               case i[1]:
                a.style.top = 0 + this.umPx, a.style.right = 0 + this.umPx;
                break;

               case i[2]:
                a.style.bottom = 0 + this.umPx, a.style.right = 0 + this.umPx;
                break;

               case i[3]:
                a.style.bottom = 0 + this.umPx, a.style.left = 0 + this.umPx;
              }
              e.appendChild(a);
            }
            return this.maVi.appendChild(e), e;
          }
          return null;
        }, this.fScreenBtn = this.fsb && this.buildFScreenBtn(), this.detectMobDevType = function() {
          var t = this.whVi, e = this.htVi;
          return t < this.sdwub || t > this.sdwub && e < this.sdhub;
        }, this.isPh = this.detectMobDevType(), this.getSPLiNas = function() {
          for (var t = this.strs, e = t.length, s = [], i = 1; i < e - 1; i++) {
            for (var r, o = t[i].childElementCount, n = t[i].getElementsByClassName(this.CNSP), a = [], h = 1; h < o - 1; h++) r = n[h].getAttribute("data-" + this.sPDaAt), 
            a.push(r);
            s.push(a);
          }
          return s;
        }, this.ordSPsLiNas = this.getSPLiNas(), this.easing = function(t, e) {
          switch (e) {
           case "arc":
            return 1 - Math.sin(Math.acos(t));

           case "easeout":
            return (1 - Math.cos(t * Math.PI)) / 2;

           case "back":
            return Math.pow(t, 2) * (2 * t - 1);

           case "quad":
            return Math.pow(t, 2);

           case "cube":
            return Math.pow(t, 3);

           default:
            return t;
          }
        }, this.rafAn = function(r, o, t, n, a) {
          var h, l, d, e = t(this), t = ("now" in window.performance == 1 ? performance : Date).now();
          h = this, l = t, d = e, requestAnimationFrame(function t(e) {
            var e = (e - l) / r, s = h.easing(e = 1 < e ? 1 : e, o);
            if ("[object Array]" === Object.prototype.toString.call(n)) for (var i = 0; i < n.length; i++) n[i](h, s, d); else n(h, s, d);
            e < 1 ? requestAnimationFrame(t) : a(h);
          });
        }, this.togFScreen = function() {
          var t = window.document, e = t.documentElement, s = e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen, i = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen, r = document.getElementsByClassName("webyx-full-screen-button-part");
          if (t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement) {
            i.call(t);
            for (n = 0; n < r.length; n++) (o = r[n]).className = o.className.replace("-inner", "-outer");
          } else {
            s.call(e);
            for (var o, n = 0; n < r.length; n++) (o = r[n]).className = o.className.replace("-outer", "-inner");
            this.dh && "mobile" === this.mode && (document.getElementsByClassName("webyx-nav-hz-mob")[0].style = {});
          }
        }, this.iCurStr = 1, this.iCurSP = 1, this.getStr = function(t) {
          return this.strs[t];
        }, this.getLxPosOfCurStr = function(t) {
          return parseInt(t.style.left.replace(this.umWh, ""));
        }, this.togAnCN = function(t, e, s) {
          if (t) if ("[object Array]" === Object.prototype.toString.call(e)) for (var i = 0; i < e.length; i++) switch (s) {
           case "remove":
            t.classList.contains(e[i]) && t.classList.remove(e[i]);
            break;

           case "add":
            t.classList.contains(e[i]) || t.classList.add(e[i]);
          } else switch (s) {
           case "remove":
            t.classList.contains(e) && t.classList.remove(e);
            break;

           case "add":
            t.classList.contains(e) || t.classList.add(e);
          }
        }, this.resetStrPos = function(t) {
          this.strs[t].style.left = -this.getDimByMode("w") + this.umWh, this.iCurSP = 1;
        }, this.resetScrollTop = function() {
          for (var t = document.querySelectorAll("[data-scroll]"), e = 0; e < t.length; e++) t[e].scrollTop = 0;
        }, this.goToStr = function(t, e) {
          var s = this.ordItemLiNas.indexOf(t) + 1, i = this.iCurStr, r = (this.umHt, this.strs);
          this.mmaf && this.shiftMMItemFocus(t), i !== s && (this.resetStrPos(i), this.ars && this.resetScrollTop(), 
          this.weWr.style.top = -(s * this.getDimByMode("h")) + this.umHt, this.iCurStr = s), 
          "desktop" === this.mode && (3 < (r = r[s].childElementCount) ? this.vwArwsTogDotOffset(this.dhp, "add") : 3 === r && this.vwArwsTogDotOffset(this.dhp, "remove"), 
          this.togDisplayVwArws("block")), this.DOTS_ENABLED && this.refreshCurDotNav(s, null);
        }, this.goToSP = function(t, e) {
          var s, i, r = this.ordSPsLiNas[this.iCurStr - 1].indexOf(t) + 1, o = this.iCurSP;
          r !== o && (s = this.getStr(this.iCurStr), i = "data-" + this.stDaAt, s.getAttribute(i), 
          this.umWh, s.style.left = -r * this.getDimByMode("w") + this.umWh, this.iCurSP = r, 
          "desktop" === this.mode && this.togDisplayVwArws("block"), this.DOTS_ENABLED && this.refreshCurDotNav(null, r));
        }, this.av = this._o.av, this.dv = this._o.dv, this.dvp = this._o.dvp, this.dh = this._o.dh, 
        this.dhp = this._o.dhp, this.dhs = this._o.dhs, this.DOTS_ENABLED = this.dv || this.dh, 
        this.dtv = this._o.dtv, this.dth = this._o.dth, this.dtvcp = this._o.dtvcp, this.dthcp = this._o.dthcp, 
        this.sufMd = "desktop" === this.mode ? "-dsk" : "-mob", this.OFFSET_NAV_HZ_POSITION = 30, 
        this.CLASS_NAME_CURRENT_DOT_VT = "webyx-dot-current-vt" + this.sufMd, this.CLASS_NAME_DOT_TOOLTIP_VT_CURRENT_PERS = "webyx-dot-current-vt-persistent" + this.sufMd, 
        this.CLASS_NAME_CURRENT_DOT_HZ = "webyx-dot-current-hz" + this.sufMd, this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS = "webyx-dot-current-hz-persistent" + this.sufMd, 
        this.CLASS_NAME_WRAPPER_DOT_HZ_HIDDEN = "webyx-dots-wrapper-hz-hidden", this.refreshCurDotNav = function(t, e) {
          if (t) {
            for (var s = 0; s < this.navDotsCollVt.length; s++) this.dtv && this.dtvcp && (this.navDotsCollVt[s].nextSibling.classList.contains(this.CLASS_NAME_DOT_TOOLTIP_VT_CURRENT_PERS) && this.navDotsCollVt[s].nextSibling.classList.remove(this.CLASS_NAME_DOT_TOOLTIP_VT_CURRENT_PERS), 
            this.navDotsCollVt[t - 1].nextSibling.classList.add(this.CLASS_NAME_DOT_TOOLTIP_VT_CURRENT_PERS)), 
            this.navDotsCollVt[s].classList.contains(this.CLASS_NAME_CURRENT_DOT_VT) && this.navDotsCollVt[s].classList.remove(this.CLASS_NAME_CURRENT_DOT_VT), 
            this.navDotsCollVt[t - 1].classList.add(this.CLASS_NAME_CURRENT_DOT_VT);
            if (this.dh) {
              for (s = 0; s < this.navDotsCollHz.length; s++) for (var i = 0; i < this.navDotsCollHz[s].length; i++) 0 === i ? (this.navDotsCollHz[s][i].classList.add(this.CLASS_NAME_CURRENT_DOT_HZ), 
              this.dth && this.dthcp && (1 < this.navDotsCollHz[s].length || this.dhs) && this.navDotsCollHz[s][i].nextSibling.classList.add(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS)) : (this.navDotsCollHz[s][i].classList.contains(this.CLASS_NAME_CURRENT_DOT_HZ) && this.navDotsCollHz[s][i].classList.remove(this.CLASS_NAME_CURRENT_DOT_HZ), 
              this.dth && this.dthcp && (1 < this.navDotsCollHz[s].length || this.dhs) && this.navDotsCollHz[s][i].nextSibling.classList.contains(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS) && this.navDotsCollHz[s][i].nextSibling.classList.remove(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS));
              for (s = 0; s < this.navDotsWrHz.length; s++) this.navDotsWrHz[s].classList.contains(this.CLASS_NAME_WRAPPER_DOT_HZ_HIDDEN) || this.navDotsWrHz[s].classList.add(this.CLASS_NAME_WRAPPER_DOT_HZ_HIDDEN), 
              this.navDotsWrHz[t - 1].classList.remove(this.CLASS_NAME_WRAPPER_DOT_HZ_HIDDEN);
            }
          }
          if (e && this.dh) for (s = 0; s < this.navDotsCollHz[this.iCurStr - 1].length; s++) this.navDotsCollHz[this.iCurStr - 1][s].classList.contains(this.CLASS_NAME_CURRENT_DOT_HZ) && this.navDotsCollHz[this.iCurStr - 1][s].classList.remove(this.CLASS_NAME_CURRENT_DOT_HZ), 
          this.navDotsCollHz[this.iCurStr - 1][e - 1].classList.add(this.CLASS_NAME_CURRENT_DOT_HZ), 
          this.dth && this.dthcp && (this.navDotsCollHz[this.iCurStr - 1][s].nextSibling.classList.contains(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS) && this.navDotsCollHz[this.iCurStr - 1][s].nextSibling.classList.remove(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS), 
          (1 < this.navDotsCollHz[this.iCurStr - 1].length || this.dhs) && this.navDotsCollHz[this.iCurStr - 1][e - 1].nextSibling.classList.add(this.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS));
        }, this.DOTS_ENABLED && (this.navDotsCollHz = [], this.navDotsCollVt = [], this.navDotsWrHz = [], 
        this.createNavDotsCollection = function(t) {
          var e = document.createElement("div"), s = document.createElement("div");
          e.classList.add("webyx-nav-vt" + ("desktop" === t.mode ? "-dsk" : "-mob")), e.classList.add("webyx-nav-vt" + ("desktop" === t.mode ? "-dsk-" : "-mob-") + t.dvp), 
          s.classList.add("webyx-nav-hz" + ("desktop" === t.mode ? "-dsk" : "-mob")), s.classList.add("webyx-nav-hz" + ("desktop" === t.mode ? "-dsk-" : "-mob-") + t.dhp), 
          t.dv || e.classList.add("webyx-dot-wrapper-vt-hidden");
          var i = document.createElement("div"), r = document.createElement("div");
          i.classList.add("webyx-nav-wrapper-vt" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
          r.classList.add("webyx-dots-wrapper-vt" + ("desktop" === t.mode ? "-dsk" : "-mob"));
          i = -20 * t.noClStrsLng / 2 + "px";
          r.style.marginTop = i;
          for (var o = 1; o < t.strs.length - 1; o++) {
            var n, a = document.createElement("div"), h = document.createElement("div"), l = t.strs[o].getAttribute("data-" + t.stDaAt);
            if ((v = document.createAttribute("data-" + t.stDaAt)).value = l, h.setAttributeNode(v), 
            a.classList.add("webyx-dot-wrapper-vt" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
            h.classList.add("webyx-dot-vt" + ("desktop" === t.mode ? "-dsk" : "-mob")), r.classList.add("webyx-dots-wrapper-bkg-color"), 
            a.appendChild(h), t.dtv && ((n = document.createElement("div")).classList.add("webyx-dot-tt-vt" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
            n.classList.add("webyx-dot-tt-vt" + ("desktop" === t.mode ? "-dsk-" : "-mob-") + t.dvp), 
            n.innerText = l, a.appendChild(n)), 1 === o && (t.dtv && t.dtvcp && h.nextSibling.classList.add(t.CLASS_NAME_DOT_TOOLTIP_VT_CURRENT_PERS), 
            h.classList.add("webyx-dot-current-vt" + ("desktop" === t.mode ? "-dsk" : "-mob"))), 
            r.appendChild(a), t.navDotsCollVt.push(h), t.dh) {
              var h = document.createElement("div"), d = document.createElement("div"), c = [];
              h.classList.add("webyx-nav-wrapper-hz" + ("desktop" === t.mode ? "-dsk" : "-mob"));
              for (var u = t.strs[o].childElementCount, m = 1; m < u - 1; m++) {
                var p = document.createElement("div"), w = document.createElement("div");
                p.classList.add("webyx-dot-wrapper-hz" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
                d.classList.add("webyx-dots-wrapper-hz" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
                w.classList.add("webyx-dot-hz" + ("desktop" === t.mode ? "-dsk" : "-mob")), d.classList.add("webyx-dots-wrapper-bkg-color"), 
                t.dhs || 3 !== u || d.classList.add("webyx-dot-hidden");
                var v, C, S = t.strs[o].children[m].getAttribute("data-" + t.sPDaAt);
                (v = document.createAttribute("data-" + t.sPDaAt)).value = S, w.setAttributeNode(v), 
                p.appendChild(w), t.dth && ((C = document.createElement("div")).classList.add("webyx-dot-tt-hz" + ("desktop" === t.mode ? "-dsk" : "-mob")), 
                C.classList.add("webyx-dot-tt-hz" + ("desktop" === t.mode ? "-dsk-" : "-mob-") + t.dhp), 
                C.innerText = S, p.appendChild(C)), 1 === m && (t.dth && t.dthcp && w.nextSibling.classList.add(t.CLASS_NAME_DOT_TOOLTIP_HZ_CURRENT_PERS), 
                w.classList.add("webyx-dot-current-hz" + ("desktop" === t.mode ? "-dsk" : "-mob"))), 
                d.style.marginLeft = -20 * (u - 2) / 2 + "px", c.push(w), d.appendChild(p);
              }
              t.navDotsWrHz.push(d), 1 !== o && d.classList.add("webyx-dots-wrapper-hz-hidden"), 
              s.appendChild(d), t.navDotsCollHz.push(c);
            }
          }
          e.appendChild(r), t.maVi.appendChild(e), t.dh && t.maVi.appendChild(s);
        }(this)), this.mode) {
         case "desktop":
          this.idVWArws = [ "top", "right", "bottom", "left" ], this.avf = this._o.avf, this.avvd = this._o.avvd, 
          this.iwhf = this._o.iwhf, this.kn = this._o.kn, this.nvvw = this._o.nvvw, this.vWArws = function(t) {
            for (var e = [], s = 0; s < t.idVWArws.length; s++) {
              var i = document.createElement("div"), r = t.idVWArws[s];
              i.id = "webyx-" + r, i.classList.add("webyx-arrow-viewport"), i.classList.add("webyx-arrow-viewport-bkg-area-colour"), 
              t.av ? (("top" === r && 1 < t.noClStrsLng || ("top" === r || "bottom" === r) && 1 === t.noClStrsLng) && (i.style.display = "none"), 
              n = t.strs[1].childElementCount, ("left" === r && 3 < n || ("left" === r || "right" === r) && 3 === n) && (i.style.display = "none")) : i.style.display = "none";
              var o = document.createElement("div");
              o.classList.add("webyx-arrow-icon"), o.classList.add("webyx-arrow-viewport-icon"), 
              o.classList.add("webyx-arrow-viewport-icon-borders"), t.avf ? o.classList.add("webyx-arrow-viewport-icon-borders-fixed") : (o.classList.add("webyx-arrow-viewport-icon-borders-animation"), 
              i.classList.add("webyx-arrow-viewport-wrapper-animation")), o.classList.add("webyx-arrow-viewport-icon-" + r), 
              i.classList.add("webyx-arrow-viewport-" + r);
              var n = i.id.replace("webyx-", "");
              t.dv && t.dvp === n && i.classList.add("webyx-arrow-viewport-" + n + "-offset"), 
              t.dh && t.dhp === n && (r = t.strs[1].childElementCount, (t.dhs || 3 < r) && i.classList.add("webyx-arrow-viewport-" + n + "-offset")), 
              i.appendChild(o), t.maVi.appendChild(i), e.push(i);
            }
            return e;
          }(this), this.togDisplayVwArws = function(t) {
            if (this.av) for (var e = 0; e < this.vWArws.length; e++) {
              var s, i = this.vWArws[e].id.replace("webyx-", "");
              !this.nvvw || !this.avvd || "top" !== i && "bottom" !== i ? this.iCurStr === this.strs.length - 2 && "bottom" === i || 1 === this.iCurStr && "top" === i ? this.vWArws[e].style.display = "none" : (s = this.strs[this.iCurStr].childElementCount - 2, 
              1 === this.iCurSP && "left" === i || this.iCurSP === s && "right" === i ? this.vWArws[e].style.display = "none" : this.vWArws[e].style.display = t) : this.vWArws[e].style.display = "none";
            }
          }, this.vwArwsTogDotOffset = function(t, e) {
            var s = this.vWArws[this.idVWArws.indexOf(t)], t = s.id.replace("webyx-", "");
            this.dh && !this.dhs && s.classList[e]("webyx-arrow-viewport-" + t + "-offset");
          }, this.dirVw = null, this.wheelDeY = null, this.createScrollIcn = function() {
            var t = document.createElement("div"), e = document.createElement("div"), s = document.createElement("div");
            return t.className = "webyx-icon-scroll-wrapper", e.className = "webyx-icon-scroll-mouse", 
            s.className = "webyx-icon-scroll-wheel", e.appendChild(s), t.appendChild(e), this.maVi.appendChild(t), 
            t;
          }, this.av && this.avvd && this.nvvw && (this.icnScroll = this.createScrollIcn()), 
          this.startMaVwSlide = function(t) {
            switch (t.anIP = !0, t.dirVw) {
             case "top":
              var e = t.weWr.style;
              break;

             case "right":
              var s = t.getStr(t.iCurStr), i = t.getLxPosOfCurStr(s), e = s.style;
              break;

             case "bottom":
              e = t.weWr.style;
              break;

             case "left":
              s = t.getStr(t.iCurStr), i = t.getLxPosOfCurStr(s), e = s.style;
            }
            return t.togDisplayVwArws("none"), {
              leftPositionOfCurrentStripe: i,
              elementStyle: e
            };
          }, this.maVwSlide = function(t, e, s) {
            switch (t.dirVw) {
             case "top":
              s.elementStyle.top = -(t.iCurStr * t.peViSi) + t.peViSi * e + t.umHt;
              break;

             case "right":
              s.elementStyle.left = s.leftPositionOfCurrentStripe - t.peViSi * e + t.umWh;
              break;

             case "bottom":
              s.elementStyle.top = -(t.iCurStr * t.peViSi) - t.peViSi * e + t.umHt;
              break;

             case "left":
              s.elementStyle.left = s.leftPositionOfCurrentStripe + t.peViSi * e + t.umWh;
            }
          }, this.endMaVwSlide = function(t) {
            switch (t.dirVw) {
             case "top":
              t.resetStrPos(t.iCurStr), 1 === t.iCurStr ? (t.weWr.style.top = -(t.noClStrsLng * ("desktop" === t.mode ? t.peViSi : t.whVi)) + t.umHt, 
              t.iCurStr = t.noClStrsLng) : --t.iCurStr;
              break;

             case "right":
              (e = t.strs[t.iCurStr]).childElementCount;
              t.iCurSP === e.childElementCount - 2 ? (e.style.left = -("desktop" === t.mode ? t.peViSi : t.whVi) + t.umWh, 
              t.iCurSP = 1) : ++t.iCurSP;
              break;

             case "bottom":
              t.resetStrPos(t.iCurStr), t.iCurStr === t.noClStrsLng ? (t.weWr.style.top = -("desktop" === t.mode ? t.peViSi : t.whVi) + t.umHt, 
              t.iCurStr = 1) : ++t.iCurStr;
              break;

             case "left":
              var e;
              (e = t.strs[t.iCurStr]).childElementCount;
              1 === t.iCurSP ? (e.style.left = -(("desktop" === t.mode ? t.peViSi : t.whVi) * (e.childElementCount - 2)) + t.umWh, 
              t.iCurSP = e.childElementCount - 2) : --t.iCurSP;
            }
            var s = t.strs[t.iCurStr].childElementCount;
            3 < s ? t.vwArwsTogDotOffset(t.dhp, "add") : 3 === s && t.vwArwsTogDotOffset(t.dhp, "remove"), 
            t.togDisplayVwArws("block"), t.DOTS_ENABLED && t.refreshCurDotNav(t.iCurStr, t.iCurSP), 
            t.anIP = !1, t.arKPr = !1, t.ars && t.resetScrollTop();
          }, this.moveVwTransless = function() {
            this.rafAn(this.vmsob, this.vmeob, this.startMaVwSlide, this.maVwSlide, this.endMaVwSlide);
          }, this.moveVw = function() {
            var t = this.getStr(this.iCurStr), e = this.getLxPosOfCurStr(t), s = this.dirVw, i = this.maVi, r = this.umWh;
            switch (this.togDisplayVwArws("none"), this.togAnCN(i, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
            s) {
             case "top":
              this.togAnCN(this.weWr, this.CNTrVi, "add"), this.weWr.style.top = -((this.iCurStr - 1) * this.getDimByMode("h")) + this.umHt;
              break;

             case "right":
              this.togAnCN(t, this.CNTrVi, "add"), t.style.left = e - this.getDimByMode("w") + r;
              break;

             case "bottom":
              this.togAnCN(this.weWr, this.CNTrVi, "add"), this.weWr.style.top = -((this.iCurStr + 1) * this.getDimByMode("h")) + this.umHt;
              break;

             case "left":
              this.togAnCN(t, this.CNTrVi, "add"), t.style.left = e + this.getDimByMode("w") + r;
            }
          }, function(o) {
            o.maVi.addEventListener("transition-start", function(t) {
              o.anIP = !0, "top" === o.dirVw || o.dirVw, "left" === o.dirVw || o.dirVw;
            }), o.maVi.addEventListener("transition-end", function(t) {
              if (t.target.classList.contains(o.CNTrVi)) {
                var e = o.getStr(o.iCurStr), s = e.childElementCount, t = o.maVi;
                switch (o.togAnCN(t, [ "webyx-tran-fake", "webyx-ch-opacity" ], "remove"), o.dirVw) {
                 case "top":
                  o.resetStrPos(o.iCurStr), 1 === o.iCurStr ? (o.iCurStr = o.strs.length - 2, o.weWr.style.top = -(o.iCurStr * ("desktop" === o.mode ? o.peViSi : o.whVi)) + o.umHt) : --o.iCurStr, 
                  o.togAnCN(o.weWr, o.CNTrVi, "remove");
                  break;

                 case "right":
                  o.togAnCN(e, o.CNTrVi, "remove"), o.iCurSP === s - 2 ? (e.style.left = -("desktop" === o.mode ? o.peViSi : o.whVi) + o.umWh, 
                  o.iCurSP = 1) : o.iCurSP += 1;
                  break;

                 case "bottom":
                  o.resetStrPos(o.iCurStr), o.iCurStr === o.strs.length - 2 ? (o.weWr.style.top = -("desktop" === o.mode ? o.peViSi : o.whVi) + o.umHt, 
                  o.iCurStr = 1) : o.iCurStr += 1, o.togAnCN(o.weWr, o.CNTrVi, "remove");
                  break;

                 case "left":
                  o.togAnCN(e, o.CNTrVi, "remove"), 1 === o.iCurSP ? (e.style.left = -((s - 2) * ("desktop" === o.mode ? o.peViSi : o.whVi)) + o.umWh, 
                  o.iCurSP = s - 2) : --o.iCurSP;
                }
                t = o.strs[o.iCurStr].childElementCount;
                3 < t ? o.vwArwsTogDotOffset(o.dhp, "add") : 3 === t && o.vwArwsTogDotOffset(o.dhp, "remove"), 
                o.togDisplayVwArws("block"), o.DOTS_ENABLED && o.refreshCurDotNav(o.iCurStr, o.iCurSP), 
                o.ars && o.resetScrollTop(), o.anIP = !1, o.arKPr = !1;
              }
            }), o.isScrolling = void 0, o.nvvw && o.maVi.addEventListener("onwheel" in document ? "wheel" : "mousewheel", function(s) {
              o.iPost && o.iPost(), window.clearTimeout(o.isScrolling), s.stopPropagation(), o.isScrolling = setTimeout(function() {
                var t, e;
                o.anIP || (e = null !== (t = o.getStr(o.iCurStr).children[o.iCurSP]).getAttribute("data-scroll"), 
                o.getStr(o.iCurStr).childElementCount, o.iCurSP, o.iCurSP, void 0 === s.deltaY ? s.wheelDelta ? o.wheelDeY = s.wheelDelta : o.wheelDeY = -1 * s.wheelDelta : s.deltaY && (o.wheelDeY = -1 * parseInt(s.deltaY)), 
                e ? o.wheelDeY < 0 ? Math.ceil(t.scrollTop) + o.htVi >= t.scrollHeight && (o.dirVw = "bottom", 
                o.iCurStr !== o.noClStrsLng && (o.anIP = !0, void 0 === o.trEv ? o.moveVwTransless() : o.moveVw())) : t.scrollTop <= 0 && (o.dirVw = "top", 
                1 === o.iCurStr && "left" !== o.dirVw || (o.anIP = !0, void 0 === o.trEv ? o.moveVwTransless() : o.moveVw())) : o.wheelDeY < 0 ? (o.dirVw = "bottom", 
                (o.iCurStr !== o.noClStrsLng || o.iCurStr === o.noClStrsLng && "right" === o.dirVw) && (o.anIP = !0, 
                void 0 === o.trEv ? o.moveVwTransless() : o.moveVw())) : (o.dirVw = "top", (1 !== o.iCurStr || "left" === o.dirVw || 1 === o.iCurStr && "left" === o.dirVw && 1 !== o.iCurSP) && (o.anIP = !0, 
                void 0 === o.trEv ? o.moveVwTransless() : o.moveVw())), o.icnScroll && !o.iwhf && (o.icnScroll.style.display = "none"));
              }, 66);
            }, {
              passive: !0
            });
            for (var t = 0; t < o.vWArws.length; t++) o.vWArws[t].addEventListener("mouseup", function(t) {
              t.stopPropagation(), o.dirVw = this.id.replace("webyx-", ""), o.mmacav && o.isVsbMM && o.togOrSlideAnMM(), 
              void 0 === o.trEv ? o.moveVwTransless() : o.moveVw();
            }), o.vWArws[t].addEventListener("mouseover", function() {
              o.avf ? this.children[0].classList.add("webyx-arrow-viewport-icon-borders-visible") : (this.children[0].classList.add("webyx-arrow-viewport-icon-borders-animation-hover"), 
              this.classList.add("webyx-arrow-viewport-wrapper-animation-hover"));
            }), o.vWArws[t].addEventListener("mouseleave", function() {
              o.avf ? this.children[0].classList.remove("webyx-arrow-viewport-icon-borders-visible") : (this.children[0].classList.remove("webyx-arrow-viewport-icon-borders-animation-hover"), 
              this.classList.remove("webyx-arrow-viewport-wrapper-animation-hover"));
            });
            if (o.DOTS_ENABLED) {
              for (var e = 0; e < o.navDotsCollVt.length; e++) !function(s) {
                o.navDotsCollVt[s].addEventListener("mouseup", function(t) {
                  var e;
                  t.stopPropagation(), o.anIP || (e = "data-" + o.stDaAt, t = this.getAttribute(e), 
                  e = o.ordSPsLiNas[s][0], o.goToStr(t, !0), o.goToSP(e, !0));
                });
              }(e);
              for (var s = 0; s < o.navDotsCollHz.length; s++) for (e = 0; e < o.navDotsCollHz[s].length; e++) !function(t, e) {
                var s = o.strs[t + 1].getAttribute("data-" + o.stDaAt);
                o.navDotsCollHz[t][e].addEventListener("mouseup", function(t) {
                  t.stopPropagation(), o.anIP || (t = "data-" + o.sPDaAt, t = this.getAttribute(t), 
                  o.goToStr(s, !0), o.goToSP(t, !0));
                });
              }(s, e);
            }
            window.addEventListener("resize", function(t) {
              o.reszCatcherDsk(), o.numMMItemsVsb = o.mmr * o.mMItemBoxCols, o.numMMItemsNVsb = o.noClStrsLng - o.numMMItemsVsb;
            }), o.fScreenBtn && (o.fScreenBtn.addEventListener("mouseup", function(t) {
              t.stopPropagation(), o.togFScreen();
            }), window.addEventListener("resize", function(t) {
              var e = window.document, s = document.getElementsByClassName("webyx-full-screen-button-part");
              if (screen.height >= window.outerHeight && !e.fullscreenElement && !e.mozFullScreenElement && !e.webkitFullscreenElement && !e.msFullscreenElement) for (var i = 0; i < s.length; i++) {
                var r = s[i];
                r.className = r.className.replace("webyx-inner", "webyx-outer");
              }
              o.whVi = window.innerWidth, o.htVi = window.innerHeight, o.raVi = parseFloat((o.htVi / o.whVi).toFixed(2));
            }), document.addEventListener("keydown", function(t) {
              122 === (t.keyCode || t.which) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
            })), o.kn && (document.addEventListener("keydown", function(t) {
              o.iPost && o.iPost();
            }), document.addEventListener("keyup", function(t) {
              var e = t.keyCode || t.which;
              if (-1 !== [ 37, 38, 39, 40 ].indexOf(e) && "BODY" == t.target.nodeName && !o.anIP && !o.arKPr) switch (o.arKPr = !0, 
              e) {
               case 37:
                1 !== o.iCurSP ? i(4 === o.vWArws.length ? o.vWArws[3] : o.vWArws[1], "mouseup") : o.arKPr = !1;
                break;

               case 38:
                1 !== o.iCurStr ? i(o.vWArws[0], "mouseup") : o.arKPr = !1;
                break;

               case 39:
                var s = o.strs[o.iCurStr].childElementCount - 2;
                o.iCurSP !== s ? i(4 === o.vWArws.length ? o.vWArws[1] : o.vWArws[0], "mouseup") : o.arKPr = !1;
                break;

               case 40:
                o.iCurStr !== o.noClStrsLng ? i(o.vWArws[2], "mouseup") : o.arKPr = !1;
              }
              function i(t, e) {
                var s;
                "function" == typeof window.CustomEvent ? s = new CustomEvent(e, {
                  bubbles: !0,
                  cancelable: !0
                }) : (s = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, void 0), 
                t.dispatchEvent(s);
              }
            })), o.iPostOnClient = function() {
              o.iPost && o.iPost(), document.querySelector("body").removeEventListener("mouseenter", o.iPostOnClient);
            }, document.querySelector("body").addEventListener("mouseenter", o.iPostOnClient);
          }(this);
          break;

         case "mobile":
          this.mmam = this._o.mmam, this.startTouchPt = {}, this.thrX = 25, this.thrY = 50, 
          this.axis = null, this.fluidFric = 1, this.deX = 0, this.deY = 0, this.startTime = null, 
          this.endTime = null, this.LxPosCurStr = null, this.hasMoved = !1, this.timer = null, 
          this.isScrollMM = !1, this.timerMove = null, this.resetTouchPnt = function() {
            this.startTouchPt = {}, this.axis = null, this.deX = 0, this.deY = 0;
          }, this.smoothResetVt = function(t) {
            var e = parseInt(this.strs[this.iCurStr + 1].style.top.replace(this.umHt, ""));
            switch (t) {
             case "bottom":
              0 !== this.iCurStr && (this.strs[this.iCurStr].style.top = 0 + this.umHt);
              break;

             case "top":
              e !== this.getDimByMode("h") && (this.strs[this.iCurStr + 1].style.top = this.getDimByMode("h") + this.umHt);
            }
          }, this.startVtSnapMovMM = function(t) {
            return {
              el: Math.floor(t.wrUL.scrollTop / t.mMItemHt) + 1,
              scrollTopStart: t.wrUL.scrollTop
            };
          }, this.vtSnapMovMM = function(t, e, s) {
            t.deY <= 0 ? t.wrUL.scrollTop = s.scrollTopStart + (s.el * t.mMItemHt - s.scrollTopStart) * e : t.wrUL.scrollTop = s.scrollTopStart - (s.scrollTopStart - (s.el - 1) * t.mMItemHt) * e;
          }, this.endVtSnapMovMM = function(t) {
            t.mmam && t.isVsbMM && t.refreshMMArws();
          }, this.refreshMMArws = function() {
            if (this.mMArws.length) {
              var t = this.wrUL.scrollTop, e = "portrait" === this.screenOrn ? this.mMItemHt * this.mmr : this.mMItemHt * this.mmrlp;
              switch (t) {
               default:
                this.mMArws[0].style.display = "block", this.mMArws[1].style.display = "block", 
                e <= t && (this.mMArws[0].style.display = "block", this.mMArws[1].style.display = "none");
                break;

               case 0:
                this.mMArws[0].style.display = "none", this.mMArws[1].style.display = "block";
                break;

               case this.wrUL.clientHeight:
                this.mMArws[0].style.display = "block", this.mMArws[1].style.display = "none";
              }
            }
          }, this.parallaxCalc = function(t, e, s) {
            return t * (100 - s) / 100 * e / t;
          }, h = this, window.addEventListener("resize", function() {
            h.reszCatcherMob();
          }), h.maVi.addEventListener("touchstart", function(t) {
            var e;
            h.iPost && h.iPost(), h.anIP || 1 !== t.touches.length || h.isVsbMM || (e = h.getStr(h.iCurStr), 
            h.resetTouchPnt(), h.LxPosCurStr = h.getLxPosOfCurStr(e), e = t.touches[0].clientX, 
            t = t.touches[0].clientY, e = parseInt(e * ("desktop" === h.mode ? h.peViSi : h.whVi) / h.whVi), 
            t = parseInt(t * ("desktop" === h.mode ? h.peViSi : h.htVi) / h.htVi), h.startTouchPt.x = e, 
            h.startTouchPt.y = t);
          }, {
            passive: !0
          }), h.maVi.addEventListener("touchmove", function(t) {
            if (t.stopPropagation(), !h.anIP && t.touches.length < 2 && !h.isVsbMM) {
              h.anIP = !1;
              var e = h.getStr(h.iCurStr), s = e.children[h.iCurSP], i = null !== s.getAttribute("data-scroll"), r = t.touches[0].clientX, t = t.touches[0].clientY, r = parseInt(r * ("desktop" === h.mode ? h.peViSi : h.whVi) / h.whVi), t = parseInt(t * ("desktop" === h.mode ? h.peViSi : h.htVi) / h.htVi);
              h.deX = (r - h.startTouchPt.x) * h.fluidFric, h.deY = (t - h.startTouchPt.y) * h.fluidFric;
              r = Math.abs(h.deX) > Math.abs(h.deY * h.raVi) ? "X" : "Y", t = Math.ceil(s.scrollTop);
              if (!i || "Y" != r || !(0 < t || h.deY <= 0) || t + h.htVi >= s.scrollHeight && h.deY <= 0) switch (h.axis || (h.axis = r), 
              h.axis) {
               case "X":
                var o, n = Math.abs(h.deX);
                h.stLiLX[h.iCurStr - 1] ? h.deX <= 0 ? e.style.left = h.LxPosCurStr - n + h.umWh : e.style.left = h.LxPosCurStr + n + h.umWh : h.deX <= 0 ? (o = h.strs[h.iCurStr].childElementCount - 2, 
                h.iCurSP !== o && (e.style.left = h.LxPosCurStr - n + h.umWh)) : 1 !== h.iCurSP && (e.style.left = h.LxPosCurStr + n + h.umWh);
                break;

               case "Y":
                var a, n = Math.abs(h.deY);
                h.deY <= 0 ? h.iCurStr !== h.noClStrsLng && (a = ("desktop" === h.mode ? h.peViSi : h.htVi) * h.iCurStr, 
                h.weWr.style.top = -(a + n) + h.umHt) : 1 !== h.iCurStr && (a = ("desktop" === h.mode ? h.peViSi : h.htVi) * h.iCurStr, 
                h.weWr.style.top = -(a - n) + h.umHt);
              }
            }
          }, {
            passive: !0
          }), h.maVi.addEventListener("touchend", function(t) {
            if (!h.anIP && h.axis && t.touches.length < 1 && !h.isVsbMM) {
              var e = h.getStr(h.iCurStr), s = h.maVi, i = h.umWh, r = h.umHt;
              switch (h.axis) {
               case "X":
                var o = Math.abs(h.deX);
                h.stLiLX[h.iCurStr - 1] ? (h.deX < 0 && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
                h.togAnCN(e, h.CNTrVi, "add"), o > h.thrX ? e.style.left = -(h.iCurSP + 1) * ("desktop" === h.mode ? h.peViSi : h.whVi) + i : e.style.left = -h.iCurSP * ("desktop" === h.mode ? h.peViSi : h.whVi) + i), 
                0 < h.deX && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), h.togAnCN(e, h.CNTrVi, "add"), 
                o > h.thrX ? e.style.left = -(h.iCurSP - 1) * ("desktop" === h.mode ? h.peViSi : h.whVi) + i : e.style.left = -h.iCurSP * ("desktop" === h.mode ? h.peViSi : h.whVi) + i)) : (h.deX < 0 && (n = h.strs[h.iCurStr].childElementCount - 2, 
                h.iCurSP !== n && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
                h.togAnCN(e, h.CNTrVi, "add"), o > h.thrX ? e.style.left = -(h.iCurSP + 1) * ("desktop" === h.mode ? h.peViSi : h.whVi) + i : e.style.left = -h.iCurSP * ("desktop" === h.mode ? h.peViSi : h.whVi) + i)), 
                0 < h.deX && 1 !== h.iCurSP && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
                h.togAnCN(e, h.CNTrVi, "add"), o > h.thrX ? e.style.left = -(h.iCurSP - 1) * ("desktop" === h.mode ? h.peViSi : h.whVi) + i : e.style.left = -h.iCurSP * ("desktop" === h.mode ? h.peViSi : h.whVi) + i));
                break;

               case "Y":
                var n = Math.abs(h.deY), e = h.getStr(h.iCurStr), o = h.iCurStr + 1, o = (h.getStr(o), 
                h.weWr);
                h.deY < 0 && h.iCurStr !== h.noClStrsLng && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
                h.togAnCN(o, h.CNTrVi, "add"), n > h.thrY ? h.weWr.style.top = -(h.htVi * (h.iCurStr + 1)) + r : h.weWr.style.top = -(h.htVi * h.iCurStr) + r), 
                0 < h.deY && 1 !== h.iCurStr && (h.togAnCN(s, [ "webyx-tran-fake", "webyx-ch-opacity" ], "add"), 
                h.togAnCN(o, h.CNTrVi, "add"), n > h.thrY ? h.weWr.style.top = -(h.htVi * (h.iCurStr + -1)) + r : h.weWr.style.top = -(h.htVi * h.iCurStr) + r);
              }
            }
          }), h.maVi.addEventListener("transition-end", function(t) {
            if (t.target.classList.contains(h.CNTrVi)) {
              var e = h.getStr(h.iCurStr), s = e.childElementCount, i = h.maVi, t = h.weWr, r = h.umWh, o = h.umHt;
              h.togAnCN(i, [ "webyx-tran-fake", "webyx-ch-opacity" ], "remove"), t.classList.contains(h.CNTrVi) && t.classList.remove(h.CNTrVi);
              for (var n = 0; n < h.strs.length; n++) h.strs[n].classList.contains(h.CNTrVi) && h.strs[n].classList.remove(h.CNTrVi);
              switch (h.axis) {
               case "X":
                var a = Math.abs(h.deX);
                h.deX < 0 && a > h.thrX && (h.iCurSP === s - 2 ? (e.style.left = -("desktop" === h.mode ? h.peViSi : h.whVi) + r, 
                h.iCurSP = 1) : h.iCurSP += 1, h.DOTS_ENABLED && h.refreshCurDotNav(h.iCurStr, h.iCurSP), 
                h.ars && h.resetScrollTop()), 0 < h.deX && a > h.thrX && (1 === h.iCurSP ? (e.style.left = -((s - 2) * ("desktop" === h.mode ? h.peViSi : h.whVi)) + r, 
                h.iCurSP = s - 2) : --h.iCurSP, h.DOTS_ENABLED && h.refreshCurDotNav(h.iCurStr, h.iCurSP), 
                h.ars && h.resetScrollTop());
                break;

               case "Y":
                a = Math.abs(h.deY);
                h.deY < 0 && a > h.thrY && (h.resetStrPos(h.iCurStr), h.iCurStr === h.strs.length - 2 ? (h.weWr.style.top = -h.htVi + o, 
                h.iCurStr = 1) : h.iCurStr += 1, h.DOTS_ENABLED && h.refreshCurDotNav(h.iCurStr, h.iCurSP), 
                h.ars && h.resetScrollTop()), 0 < h.deY && a > h.thrY && (h.resetStrPos(h.iCurStr), 
                1 === h.iCurStr ? (h.weWr.style.top = -(h.htVi * (h.strs.length - 2)) + o, h.iCurStr = h.strs.length - 2, 
                e = h.getStr(1)) : --h.iCurStr, h.DOTS_ENABLED && h.refreshCurDotNav(h.iCurStr, h.iCurSP), 
                h.ars && h.resetScrollTop());
              }
              h.anIP = !1, h.resetTouchPnt();
            }
          }), h.fScreenBtn && (h.fScreenBtn.addEventListener("touchend", function(t) {
            t.stopPropagation(), h.hasMoved || h.togFScreen(), h.hasMoved = !1;
          }), h.fScreenBtn.addEventListener("touchmove", function(t) {
            t.stopPropagation(), h.hasMoved = !0;
          }, {
            passive: !0
          }));
        } else this.maVi.removeChild(document.getElementsByClassName("webyx-splash")[0]);
      } else {
        var e = new Error("incorrect parameter: must be literal object");
        console.error(e.message);
      }
    }
    i = document.getElementsByClassName("webyx-stripe"), r = wbySet, i.length && void 0 !== r ? window._webyx = new n(r) : (i = document.getElementsByClassName("webyx-webyx")[0], 
    r = document.getElementsByClassName("webyx-splash")[0], i.removeChild(r), i.innerHTML = '<div data-stripe="Section" class="wp-block-webyx-fgp-webyx-slide webyx-main-page webyx-side-page"><div class="wp-block-webyx-fgp-webyx-slide webyx-main-page" data-side-page="slide-1"><div class="webyx-box"><div class="webyx-box-message"><div class="webyx-box-message-alert-icon"><div class="webyx-alert-symbol">!</div></div><div class="webyx-box-message-text">You must have at least a FRONT Section!</div></div></div></div></div>');
  }, {} ]
}, {}, [ 1 ]);