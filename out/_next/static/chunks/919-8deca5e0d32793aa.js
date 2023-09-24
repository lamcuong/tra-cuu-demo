"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[919],{1704:function(e,t,n){let r,o;n.d(t,{x8:function(){return e5},VY:function(){return e4},dk:function(){return e8},aV:function(){return e2},h_:function(){return e1},fC:function(){return eQ},Dx:function(){return e6},xz:function(){return e0}});var u,a,i,l,c,s,d=n(13428),f=n(2265),p=n.t(f,2);function v(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}var m=n(42210);let h=(null==globalThis?void 0:globalThis.document)?f.useLayoutEffect:()=>{},g=p["useId".toString()]||(()=>void 0),E=0;function y(e){let[t,n]=f.useState(g());return h(()=>{e||n(e=>null!=e?e:String(E++))},[e]),e||(t?`radix-${t}`:"")}function b(e){let t=(0,f.useRef)(e);return(0,f.useEffect)(()=>{t.current=e}),(0,f.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var w=n(54887),C=n(67256);let N=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,f.forwardRef)((e,n)=>{let{asChild:r,...o}=e,u=r?C.g7:t;return(0,f.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,f.createElement)(u,(0,d.Z)({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),O="dismissableLayer.update",D=(0,f.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),T=(0,f.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:u,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...s}=e,p=(0,f.useContext)(D),[h,g]=(0,f.useState)(null),E=null!==(n=null==h?void 0:h.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,y]=(0,f.useState)({}),w=(0,m.e)(t,e=>g(e)),C=Array.from(p.layers),[T]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(T),k=h?C.indexOf(h):-1,L=p.layersWithOutsidePointerEventsDisabled.size>0,A=k>=P,M=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,f.useRef)(!1),o=(0,f.useRef)(()=>{});return(0,f.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function u(){S("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));!A||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},E),_=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,f.useRef)(!1);return(0,f.useEffect)(()=>{let e=e=>{e.target&&!r.current&&S("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));n||(null==i||i(e),null==l||l(e),e.defaultPrevented||null==c||c())},E);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e);(0,f.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=k===p.layers.size-1;t&&(null==u||u(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},E),(0,f.useEffect)(()=>{if(h)return o&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(h)),p.layers.add(h),R(),()=>{o&&1===p.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[h,E,o,p]),(0,f.useEffect)(()=>()=>{h&&(p.layers.delete(h),p.layersWithOutsidePointerEventsDisabled.delete(h),R())},[h,p]),(0,f.useEffect)(()=>{let e=()=>y({});return document.addEventListener(O,e),()=>document.removeEventListener(O,e)},[]),(0,f.createElement)(N.div,(0,d.Z)({},s,{ref:w,style:{pointerEvents:L?A?"auto":"none":void 0,...e.style},onFocusCapture:v(e.onFocusCapture,_.onFocusCapture),onBlurCapture:v(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:v(e.onPointerDownCapture,M.onPointerDownCapture)}))});function R(){let e=new CustomEvent(O);document.dispatchEvent(e)}function S(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,w.flushSync)(()=>o.dispatchEvent(u)):o.dispatchEvent(u)}let P="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",L={bubbles:!1,cancelable:!0},A=(0,f.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[i,l]=(0,f.useState)(null),c=b(o),s=b(u),p=(0,f.useRef)(null),v=(0,m.e)(t,e=>l(e)),h=(0,f.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,f.useEffect)(()=>{if(r){function e(e){if(h.paused||!i)return;let t=e.target;i.contains(t)?p.current=t:x(p.current,{select:!0})}function t(e){if(h.paused||!i)return;let t=e.relatedTarget;null===t||i.contains(t)||x(p.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=i&&i.contains(t))&&x(i)});return i&&n.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,i,h.paused]),(0,f.useEffect)(()=>{if(i){I.add(h);let e=document.activeElement,t=i.contains(e);if(!t){let t=new CustomEvent(P,L);i.addEventListener(P,c),i.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(x(r,{select:t}),document.activeElement!==n)return}(M(i).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&x(i))}return()=>{i.removeEventListener(P,c),setTimeout(()=>{let t=new CustomEvent(k,L);i.addEventListener(k,s),i.dispatchEvent(t),t.defaultPrevented||x(null!=e?e:document.body,{select:!0}),i.removeEventListener(k,s),I.remove(h)},0)}}},[i,c,s,h]);let g=(0,f.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=M(e),n=_(t,e),r=_(t.reverse(),e);return[n,r]}(t),a=r&&u;a?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&x(u,{select:!0})):(e.preventDefault(),n&&x(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,f.createElement)(N.div,(0,d.Z)({tabIndex:-1},a,{ref:v,onKeyDown:g}))});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function _(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function x(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let I=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=F(o,e)).unshift(e)},remove(e){var t;null===(t=(o=F(o,e))[0])||void 0===t||t.resume()}});function F(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let W=(0,f.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?w.createPortal((0,f.createElement)(N.div,(0,d.Z)({},o,{ref:t})),r):null}),Z=e=>{let{present:t,children:n}=e,r=function(e){var t;let[n,r]=(0,f.useState)(),o=(0,f.useRef)({}),u=(0,f.useRef)(e),a=(0,f.useRef)("none"),i=e?"mounted":"unmounted",[l,c]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,f.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},i));return(0,f.useEffect)(()=>{let e=U(o.current);a.current="mounted"===l?e:"none"},[l]),h(()=>{let t=o.current,n=u.current,r=n!==e;if(r){let r=a.current,o=U(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),u.current=e}},[e,c]),h(()=>{if(n){let e=e=>{let t=U(o.current),r=t.includes(e.animationName);e.target===n&&r&&(0,w.flushSync)(()=>c("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=U(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:(0,f.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):f.Children.only(n),u=(0,m.e)(r.ref,o.ref),a="function"==typeof n;return a||r.isPresent?(0,f.cloneElement)(o,{ref:u}):null};function U(e){return(null==e?void 0:e.animationName)||"none"}Z.displayName="Presence";let B=0;function j(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var $=function(){return($=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function K(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var z="right-scroll-bar-position",X="width-before-scroll-bar",Y=(void 0===u&&(u={}),void 0===a&&(a=function(e){return e}),i=[],l=!1,(c={read:function(){if(l)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,l);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(l=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){l=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=$({async:!0,ssr:!1},u),c),H=function(){},q=f.forwardRef(function(e,t){var n,r,o,u=f.useRef(null),a=f.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),i=a[0],l=a[1],c=e.forwardProps,s=e.children,d=e.className,p=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,g=e.noIsolation,E=e.inert,y=e.allowPinchZoom,b=e.as,w=void 0===b?"div":b,C=K(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),N=(n=[u,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),O=$($({},C),i);return f.createElement(f.Fragment,null,v&&f.createElement(h,{sideCar:Y,removeScrollBar:p,shards:m,noIsolation:g,inert:E,setCallbacks:l,allowPinchZoom:!!y,lockRef:u}),c?f.cloneElement(f.Children.only(s),$($({},O),{ref:N})):f.createElement(w,$({},O,{className:d,ref:N}),s))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:X,zeroRight:z};var V=function(e){var t=e.sideCar,n=K(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,$({},n))};V.isSideCarExport=!0;var G=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},J=function(){var e=G();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Q=function(){var e=J();return function(t){return e(t.styles,t.dynamic),null}},ee={left:0,top:0,right:0,gap:0},et=function(e){return parseInt(e||"",10)||0},en=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[et(n),et(r),et(o)]},er=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ee;var t=en(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eo=Q(),eu=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(z," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(X," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(z," .").concat(z," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(X," .").concat(X," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},ea=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,u=f.useMemo(function(){return er(o)},[o]);return f.createElement(eo,{styles:eu(u,!t,o,n?"":"!important")})},ei=!1;if("undefined"!=typeof window)try{var el=Object.defineProperty({},"passive",{get:function(){return ei=!0,!0}});window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch(e){ei=!1}var ec=!!ei&&{passive:!1},es=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ed=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ef(e,n)){var r=ep(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ef=function(e,t){return"v"===e?es(t,"overflowY"):es(t,"overflowX")},ep=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ev=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,l=n.target,c=t.contains(l),s=!1,d=i>0,f=0,p=0;do{var v=ep(e,l),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&ef(e,l)&&(f+=h,p+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&i>f)?s=!0:!d&&(o&&0===p||!o&&-i>p)&&(s=!0),s},em=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eh=function(e){return[e.deltaX,e.deltaY]},eg=function(e){return e&&"current"in e?e.current:e},eE=0,ey=[],eb=(Y.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(eE++)[0],u=f.useState(function(){return Q()})[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eg),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,u=em(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-u[0],c="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ed(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ed(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return ev(p,t,e,"h"===p?l:c,!0)},[]),l=f.useCallback(function(e){if(ey.length&&ey[ey.length-1]===u){var n="deltaY"in e?eh(e):em(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eg).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=em(e),r.current=void 0},[]),d=f.useCallback(function(t){c(t.type,eh(t),t.target,i(t,e.lockRef.current))},[]),p=f.useCallback(function(t){c(t.type,em(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return ey.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ec),document.addEventListener("touchmove",l,ec),document.addEventListener("touchstart",s,ec),function(){ey=ey.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,ec),document.removeEventListener("touchmove",l,ec),document.removeEventListener("touchstart",s,ec)}},[]);var v=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(ea,{gapMode:"margin"}):null)}),V),ew=f.forwardRef(function(e,t){return f.createElement(q,$({},e,{ref:t,sideCar:eb}))});ew.classNames=q.classNames;var eC=new WeakMap,eN=new WeakMap,eO={},eD=0,eT=function(e){return e&&(e.host||eT(e.parentNode))},eR=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eT(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eO[n]||(eO[n]=new WeakMap);var u=eO[n],a=[],i=new Set,l=new Set(o),c=function(e){!e||i.has(e)||(i.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(i.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eC.get(e)||0)+1,c=(u.get(e)||0)+1;eC.set(e,l),u.set(e,c),a.push(e),1===l&&o&&eN.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return s(t),i.clear(),eD++,function(){a.forEach(function(e){var t=eC.get(e)-1,o=u.get(e)-1;eC.set(e,t),u.set(e,o),t||(eN.has(e)||e.removeAttribute(r),eN.delete(e)),o||e.removeAttribute(n)}),--eD||(eC=new WeakMap,eC=new WeakMap,eN=new WeakMap,eO={})}},eS=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eR(r,o,n,"aria-hidden")):function(){return null}};let eP="Dialog",[ek,eL]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,f.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,f.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,f.createContext)(r),u=n.length;function a(t){let{scope:n,children:r,...a}=t,i=(null==n?void 0:n[e][u])||o,l=(0,f.useMemo)(()=>a,Object.values(a));return(0,f.createElement)(i.Provider,{value:l},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let i=(null==a?void 0:a[e][u])||o,l=(0,f.useContext)(i);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,f.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eP),[eA,eM]=ek(eP),e_=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eM("DialogTrigger",n),u=(0,m.e)(t,o.triggerRef);return(0,f.createElement)(N.button,(0,d.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eV(o.open)},r,{ref:u,onClick:v(e.onClick,o.onOpenToggle)}))}),ex="DialogPortal",[eI,eF]=ek(ex,{forceMount:void 0}),eW="DialogOverlay",eZ=(0,f.forwardRef)((e,t)=>{let n=eF(eW,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eM(eW,e.__scopeDialog);return u.modal?(0,f.createElement)(Z,{present:r||u.open},(0,f.createElement)(eU,(0,d.Z)({},o,{ref:t}))):null}),eU=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eM(eW,n);return(0,f.createElement)(ew,{as:C.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,f.createElement)(N.div,(0,d.Z)({"data-state":eV(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eB="DialogContent",ej=(0,f.forwardRef)((e,t)=>{let n=eF(eB,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=eM(eB,e.__scopeDialog);return(0,f.createElement)(Z,{present:r||u.open},u.modal?(0,f.createElement)(e$,(0,d.Z)({},o,{ref:t})):(0,f.createElement)(eK,(0,d.Z)({},o,{ref:t})))}),e$=(0,f.forwardRef)((e,t)=>{let n=eM(eB,e.__scopeDialog),r=(0,f.useRef)(null),o=(0,m.e)(t,n.contentRef,r);return(0,f.useEffect)(()=>{let e=r.current;if(e)return eS(e)},[]),(0,f.createElement)(ez,(0,d.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:v(e.onFocusOutside,e=>e.preventDefault())}))}),eK=(0,f.forwardRef)((e,t)=>{let n=eM(eB,e.__scopeDialog),r=(0,f.useRef)(!1),o=(0,f.useRef)(!1);return(0,f.createElement)(ez,(0,d.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var u,a;null===(u=e.onCloseAutoFocus)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var u,a;null===(u=e.onInteractOutside)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target,l=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(i);l&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),ez=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,i=eM(eB,n),l=(0,f.useRef)(null),c=(0,m.e)(t,l);return(0,f.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:j()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:j()),B++,()=>{1===B&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),B--}},[]),(0,f.createElement)(f.Fragment,null,(0,f.createElement)(A,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,f.createElement)(T,(0,d.Z)({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":eV(i.open)},a,{ref:c,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),eX="DialogTitle",eY=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eM(eX,n);return(0,f.createElement)(N.h2,(0,d.Z)({id:o.titleId},r,{ref:t}))}),eH=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eM("DialogDescription",n);return(0,f.createElement)(N.p,(0,d.Z)({id:o.descriptionId},r,{ref:t}))}),eq=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eM("DialogClose",n);return(0,f.createElement)(N.button,(0,d.Z)({type:"button"},r,{ref:t,onClick:v(e.onClick,()=>o.onOpenChange(!1))}))});function eV(e){return e?"open":"closed"}let[eG,eJ]=function(e,t){let n=(0,f.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,f.useMemo)(()=>r,Object.values(r));return(0,f.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,f.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:eB,titleName:eX,docsSlug:"dialog"}),eQ=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:a=!0}=e,i=(0,f.useRef)(null),l=(0,f.useRef)(null),[c=!1,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,f.useState)(e),[r]=n,o=(0,f.useRef)(r),u=b(t);return(0,f.useEffect)(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:r,i=b(n),l=(0,f.useCallback)(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&i(n)}else o(t)},[u,e,o,i]);return[a,l]}({prop:r,defaultProp:o,onChange:u});return(0,f.createElement)(eA,{scope:t,triggerRef:i,contentRef:l,contentId:y(),titleId:y(),descriptionId:y(),open:c,onOpenChange:s,onOpenToggle:(0,f.useCallback)(()=>s(e=>!e),[s]),modal:a},n)},e0=e_,e1=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=eM(ex,t);return(0,f.createElement)(eI,{scope:t,forceMount:n},f.Children.map(r,e=>(0,f.createElement)(Z,{present:n||u.open},(0,f.createElement)(W,{asChild:!0,container:o},e))))},e2=eZ,e4=ej,e6=eY,e8=eH,e5=eq},40754:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=((e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,children:c,...s},d)=>(0,r.createElement)("svg",{ref:d,...o,width:a,height:a,stroke:n,strokeWidth:l?24*Number(i)/Number(a):i,className:`lucide lucide-${u(e)}`,...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n})("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}}]);