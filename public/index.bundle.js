!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./public/",t(t.s=14)}([function(e,n,t){"use strict";(function(e,r){var o,i=t(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);n.a=a}).call(this,t(12),t(13)(e))},function(e,n,t){"use strict";function r(e){var n,t=e.Symbol;return"function"==typeof t?t.observable?n=t.observable:(n=t("observable"),t.observable=n):n="@@observable",n}t.d(n,"a",(function(){return r}))},function(e,n,t){var r=t(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(4)(!1);var r=t(5),o=r(t(6)),i=r(t(7)),a=r(t(8)),c=r(t(9)),u=r(t(10));n.push([e.i,'@font-face{font-family:"robotoregular";src:url('+o+') format("woff2"),url('+i+') format("woff");font-weight:normal;font-style:normal}body{margin:0;padding:0;background-color:#e5e5e5;display:flex;align-items:center;height:100vh;font-family:"robotoregular"}.wrapper{width:600px;margin:0 auto}.wrapper .heading{padding:0.5rem;background-color:#fcdd6f;display:flex;flex-direction:column;justify-content:center;border-top:3px solid;align-items:center}.wrapper .heading .heading__text{margin:0}.wrapper .users{display:flex;flex-wrap:wrap;min-height:19.5rem;background-color:#ffffff}.wrapper .user{display:flex;justify-content:center;align-items:center;flex-basis:100%;min-height:6.5rem}.wrapper .user .photo{flex-basis:10%}.wrapper .user .user-info{flex-basis:60%;margin:0 0.5rem}.wrapper .user .user-info .username{font-size:1.5rem}.wrapper .user .user-info .user-location,.wrapper .user .user-info .user-login{font-size:0.9rem}.wrapper .user .user-info .user-location::before{content:"";width:1rem;height:1rem;background-image:url('+a+");display:block}.wrapper .user .user-info .user-location{display:flex}.wrapper .user .user-info .user-login{color:#c7c7c7;text-decoration:underline}.wrapper .user .arrow-block{flex-basis:6%;display:flex;flex-wrap:wrap;align-items:center;height:4rem}.wrapper .user .arrow-block .arrow-sign{width:1.6rem;margin:0}.wrapper .user .arrow-block .arrow-sign::before,.wrapper .user .arrow-block .arrow-sign::after{display:block;width:100%;height:1px;content:'';background-color:#000000;transform:rotate(45deg);position:relative;top:-0.5rem}.wrapper .user .arrow-block .arrow-sign::after{transform:rotate(-45deg);top:0.5rem}.wrapper .user .photo__frame{width:4.5rem;height:4.5rem;border-radius:50%;background-size:cover}.wrapper .refresh-block{background-color:#fcdd6f;display:flex;justify-content:center;padding:0.2rem 0;height:2rem}.wrapper .refresh-block .refresh-button{background-color:#fcdd6f;border:none;font-size:1.1rem;text-transform:uppercase;display:flex;cursor:pointer;line-height:1rem}.wrapper .refresh-block .refresh-button::before{content:'';display:block;width:1.1rem;height:1.1rem;background-image:url("+c+");margin-right:0.1rem}.wrapper .trashbin{background-color:#e37171;width:0;height:6.5rem;background-image:url("+u+");background-repeat:no-repeat;background-position:center;transition:width 0.5s linear}.wrapper .show{width:6.5rem}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){e.exports=t.p+"font/roboto-regular-webfont.woff2"},function(e,n,t){e.exports=t.p+"font/roboto-regular-webfont.woff"},function(e,n,t){e.exports=t.p+"images/mapmarker.png"},function(e,n,t){e.exports=t.p+"images/refresh.png"},function(e,n,t){e.exports=t.p+"images/trashbin.png"},function(e,n,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],n))}else{for(var c=[];a<r.parts.length;a++)c.push(g(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:c}}}}function f(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(e,n){var t,r,o;if(n.singleton){var i=v++;t=h||(h=f(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=f(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e,n);return u(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var a=t[i],f=o[a.id];f&&(f.refs--,r.push(f))}e&&u(c(e,n),n);for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n,t){"use strict";t.r(n);t(2);var r=t(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function c(e,n){var t=n&&n.type;return"Given "+(t&&'action "'+String(t)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){var t=Object.keys(e);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(e)),n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(t,!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return 0===n.length?function(e){return e}:1===n.length?n[0]:n.reduce((function(e,n){return function(){return e(n.apply(void 0,arguments))}}))}let d={users:[],usersRendered:[]};const p=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};var h=function(e=d,n){let t=e.users.length;switch(n.type){case"REFRESH_USERS":let r={...e};return r.usersRendered=e.usersRendered.map(n=>({...e.users[p(0,t)]})),r;case"DELETE_USER":return{...e,usersRendered:e.usersRendered.map(r=>n.id===r.id?{...e.users[p(0,t)]}:r)};case"TOGGLE_TRASHBIN":return{...e,usersRendered:e.usersRendered.map(e=>n.id===e.id?(e.trashbinIsShown=!e.trashbinIsShown,e):e)};case"SET_USERS_TO_RENDER":let o={...e};o.users=n.data;for(let e=0;e<3;e++){let e=p(0,o.users.length);o.usersRendered.push({...o.users[e]})}return o;default:return e}},v=function(e){return"@@redux-saga/"+e},g=v("CANCEL_PROMISE"),y=v("CHANNEL_END"),b=v("IO"),m=v("MATCH"),w=v("MULTICAST"),E=v("SAGA_ACTION"),x=v("SELF_CANCELLATION"),S=v("TASK"),O=v("TASK_CANCEL"),j=v("TERMINATE"),k=v("LOCATION");function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var R=function(e){return null==e},A=function(e){return null!=e},N=function(e){return"function"==typeof e},C=function(e){return"string"==typeof e},I=Array.isArray,P=function(e){return e&&N(e.then)},_=function(e){return e&&N(e.next)&&N(e.throw)},M=function e(n){return n&&(C(n)||D(n)||N(n)||I(n)&&n.every(e))},L=function(e){return e&&N(e.take)&&N(e.close)},U=function(e){return N(e)&&e.hasOwnProperty("toString")},D=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},q=function(e){return L(e)&&e[w]};var B=function(e){return function(){return e}}(!0),H=function(){};var z=function(e){return e};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var F=function(e,n){T(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach((function(t){e[t]=n[t]}))},K=function(e,n){var t;return(t=[]).concat.apply(t,n.map(e))};function G(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function J(e){var n=!1;return function(){n||(n=!0,e())}}var W=function(e){throw e},Y=function(e){return{value:e,done:!0}};function X(e,n,t){void 0===n&&(n=W),void 0===t&&(t="iterator");var r={meta:{name:t},next:e,throw:n,return:Y,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function Q(e,n){var t=n.sagaStack;console.error(e),console.error(t)}var $=function(e){return Array.apply(null,new Array(e))},V=function(e){return function(n){return e(Object.defineProperty(n,E,{value:!0}))}},Z=function(e){return e===j},ee=function(e){return e===O},ne=function(e){return Z(e)||ee(e)};function te(e,n){var t=Object.keys(e),r=t.length;var o,i=0,a=I(e)?$(r):{},c={};return t.forEach((function(e){var t=function(t,c){o||(c||ne(t)?(n.cancel(),n(t,c)):(a[e]=t,++i===r&&(o=!0,n(a))))};t.cancel=H,c[e]=t})),n.cancel=function(){o||(o=!0,t.forEach((function(e){return c[e].cancel()})))},c}function re(e){return{name:e.name||"anonymous",location:oe(e)}}function oe(e){return e[k]}var ie="Channel's Buffer overflow!",ae=1,ce=3,ue=4;function fe(e,n){void 0===e&&(e=10);var t=new Array(e),r=0,o=0,i=0,a=function(n){t[o]=n,o=(o+1)%e,r++},c=function(){if(0!=r){var n=t[i];return t[i]=null,r--,i=(i+1)%e,n}},u=function(){for(var e=[];r;)e.push(c());return e};return{isEmpty:function(){return 0==r},put:function(c){var f;if(r<e)a(c);else switch(n){case ae:throw new Error(ie);case ce:t[o]=c,i=o=(o+1)%e;break;case ue:f=2*e,t=u(),r=t.length,o=t.length,i=0,t.length=f,e=f,a(c)}},take:c,flush:u}}var se=function(e){return fe(e,ue)},le="TAKE",de="PUT",pe="ALL",he="RACE",ve="CALL",ge="CPS",ye="FORK",be="JOIN",me="CANCEL",we="SELECT",Ee="ACTION_CHANNEL",xe="CANCELLED",Se="FLUSH",Oe="GET_CONTEXT",je="SET_CONTEXT",ke=function(e,n){var t;return(t={})[b]=!0,t.combinator=!1,t.type=e,t.payload=n,t};function Te(e,n){return void 0===e&&(e="*"),M(e)?ke(le,{pattern:e}):q(e)&&A(n)&&M(n)?ke(le,{channel:e,pattern:n}):L(e)?ke(le,{channel:e}):void 0}function Re(e,n){return R(n)&&(n=e,e=void 0),ke(de,{channel:e,action:n})}function Ae(e,n){var t,r=null;return N(e)?t=e:(I(e)?(r=e[0],t=e[1]):(r=e.context,t=e.fn),r&&C(t)&&N(r[t])&&(t=r[t])),{context:r,fn:t,args:n}}function Ne(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return ke(ye,Ae(e,t))}function Ce(){var e={};return e.promise=new Promise((function(n,t){e.resolve=n,e.reject=t})),e}var Ie=Ce,Pe=[],_e=0;function Me(e){try{De(),e()}finally{qe()}}function Le(e){Pe.push(e),_e||(De(),Be())}function Ue(e){try{return De(),e()}finally{Be()}}function De(){_e++}function qe(){_e--}function Be(){var e;for(qe();!_e&&void 0!==(e=Pe.shift());)Me(e)}var He=function(e){return function(n){return e.some((function(e){return Je(e)(n)}))}},ze=function(e){return function(n){return e(n)}},Fe=function(e){return function(n){return n.type===String(e)}},Ke=function(e){return function(n){return n.type===e}},Ge=function(){return B};function Je(e){var n="*"===e?Ge:C(e)?Fe:I(e)?He:U(e)?Fe:N(e)?ze:D(e)?Ke:null;if(null===n)throw new Error("invalid pattern: "+e);return n(e)}var We={type:y},Ye=function(e){return e&&e.type===y};function Xe(e){void 0===e&&(e=se());var n=!1,t=[];return{take:function(r){n&&e.isEmpty()?r(We):e.isEmpty()?(t.push(r),r.cancel=function(){G(t,r)}):r(e.take())},put:function(r){if(!n){if(0===t.length)return e.put(r);t.shift()(r)}},flush:function(t){n&&e.isEmpty()?t(We):t(e.flush())},close:function(){if(!n){n=!0;var e=t;t=[];for(var r=0,o=e.length;r<o;r++){(0,e[r])(We)}}}}}function Qe(){var e,n,t,r,o,i,a=(n=!1,r=t=[],o=function(){r===t&&(r=t.slice())},i=function(){n=!0;var e=t=r;r=[],e.forEach((function(e){e(We)}))},(e={})[w]=!0,e.put=function(e){if(!n)if(Ye(e))i();else for(var o=t=r,a=0,c=o.length;a<c;a++){var u=o[a];u[m](e)&&(u.cancel(),u(e))}},e.take=function(e,t){void 0===t&&(t=Ge),n?e(We):(e[m]=t,o(),r.push(e),e.cancel=J((function(){o(),G(r,e)})))},e.close=i,e),c=a.put;return a.put=function(e){e[E]?c(e):Le((function(){c(e)}))},a}var $e=0,Ve=1,Ze=2,en=3;function nn(e,n){var t=e[g];N(t)&&(n.cancel=t),e.then(n,(function(e){n(e,!0)}))}var tn,rn=0,on=function(){return++rn};function an(e){e.isRunning()&&e.cancel()}var cn=((tn={})[le]=function(e,n,t){var r=n.channel,o=void 0===r?e.channel:r,i=n.pattern,a=n.maybe,c=function(e){e instanceof Error?t(e,!0):!Ye(e)||a?t(e):t(j)};try{o.take(c,A(i)?Je(i):null)}catch(e){return void t(e,!0)}t.cancel=c.cancel},tn[de]=function(e,n,t){var r=n.channel,o=n.action,i=n.resolve;Le((function(){var n;try{n=(r?r.put:e.dispatch)(o)}catch(e){return void t(e,!0)}i&&P(n)?nn(n,t):t(n)}))},tn[pe]=function(e,n,t,r){var o=r.digestEffect,i=rn,a=Object.keys(n);if(0!==a.length){var c=te(n,t);a.forEach((function(e){o(n[e],i,c[e],e)}))}else t(I(n)?[]:{})},tn[he]=function(e,n,t,r){var o=r.digestEffect,i=rn,a=Object.keys(n),c=I(n)?$(a.length):{},u={},f=!1;a.forEach((function(e){var n=function(n,r){f||(r||ne(n)?(t.cancel(),t(n,r)):(t.cancel(),f=!0,c[e]=n,t(c)))};n.cancel=H,u[e]=n})),t.cancel=function(){f||(f=!0,a.forEach((function(e){return u[e].cancel()})))},a.forEach((function(e){f||o(n[e],i,u[e],e)}))},tn[ve]=function(e,n,t,r){var o=n.context,i=n.fn,a=n.args,c=r.task;try{var u=i.apply(o,a);if(P(u))return void nn(u,t);if(_(u))return void yn(e,u,c.context,rn,re(i),!1,t);t(u)}catch(e){t(e,!0)}},tn[ge]=function(e,n,t){var r=n.context,o=n.fn,i=n.args;try{var a=function(e,n){R(e)?t(n):t(e,!0)};o.apply(r,i.concat(a)),a.cancel&&(t.cancel=a.cancel)}catch(e){t(e,!0)}},tn[ye]=function(e,n,t,r){var o=n.context,i=n.fn,a=n.args,c=n.detached,u=r.task,f=function(e){var n=e.context,t=e.fn,r=e.args;try{var o=t.apply(n,r);if(_(o))return o;var i=!1;return X((function(e){return i?{value:e,done:!0}:(i=!0,{value:o,done:!P(o)})}))}catch(e){return X((function(){throw e}))}}({context:o,fn:i,args:a}),s=function(e,n){return e.isSagaIterator?{name:e.meta.name}:re(n)}(f,i);Ue((function(){var n=yn(e,f,u.context,rn,s,c,void 0);c?t(n):n.isRunning()?(u.queue.addTask(n),t(n)):n.isAborted()?u.queue.abort(n.error()):t(n)}))},tn[be]=function(e,n,t,r){var o=r.task,i=function(e,n){if(e.isRunning()){var t={task:o,cb:n};n.cancel=function(){e.isRunning()&&G(e.joiners,t)},e.joiners.push(t)}else e.isAborted()?n(e.error(),!0):n(e.result())};if(I(n)){if(0===n.length)return void t([]);var a=te(n,t);n.forEach((function(e,n){i(e,a[n])}))}else i(n,t)},tn[me]=function(e,n,t,r){var o=r.task;n===x?an(o):I(n)?n.forEach(an):an(n),t()},tn[we]=function(e,n,t){var r=n.selector,o=n.args;try{t(r.apply(void 0,[e.getState()].concat(o)))}catch(e){t(e,!0)}},tn[Ee]=function(e,n,t){var r=n.pattern,o=Xe(n.buffer),i=Je(r),a=function n(t){Ye(t)||e.channel.take(n,i),o.put(t)},c=o.close;o.close=function(){a.cancel(),c()},e.channel.take(a,i),t(o)},tn[xe]=function(e,n,t,r){t(r.task.isCancelled())},tn[Se]=function(e,n,t){n.flush(t)},tn[Oe]=function(e,n,t,r){t(r.task.context[n])},tn[je]=function(e,n,t,r){var o=r.task;F(o.context,n),t()},tn);function un(e,n){return e+"?"+n}function fn(e){var n=e.name,t=e.location;return t?n+"  "+un(t.fileName,t.lineNumber):n}var sn=null,ln=[],dn=function(e){e.crashedEffect=sn,ln.push(e)},pn=function(){sn=null,ln.length=0},hn=function(e){sn=e},vn=function(){var e,n,t,r,o=ln[0],i=ln.slice(1),a=o.crashedEffect?(e=o.crashedEffect,(n=oe(e))?n.code+"  "+un(n.fileName,n.lineNumber):""):null;return["The above error occurred in task "+fn(o.meta)+(a?" \n when executing effect "+a:"")].concat(i.map((function(e){return"    created by "+fn(e.meta)})),[(t=ln,r=K((function(e){return e.cancelledTasks}),t),r.length?["Tasks cancelled due to error:"].concat(r).join("\n"):"")]).join("\n")};function gn(e,n,t,r,o,i,a){var c;void 0===a&&(a=H);var u,f,s=$e,l=null,d=[],p=Object.create(t),h=function(e,n,t){var r,o=[],i=!1;function a(e){n(),u(),t(e,!0)}function c(n){o.push(n),n.cont=function(c,u){i||(G(o,n),n.cont=H,u?a(c):(n===e&&(r=c),o.length||(i=!0,t(r))))}}function u(){i||(i=!0,o.forEach((function(e){e.cont=H,e.cancel()})),o=[])}return c(e),{addTask:c,cancelAll:u,abort:a,getTasks:function(){return o}}}(n,(function(){d.push.apply(d,h.getTasks().map((function(e){return e.meta.name})))}),v);function v(n,t){if(t){if(s=Ze,dn({meta:o,cancelledTasks:d}),g.isRoot){var r=vn();pn(),e.onError(n,{sagaStack:r})}f=n,l&&l.reject(n)}else n===O?s=Ve:s!==Ve&&(s=en),u=n,l&&l.resolve(n);g.cont(n,t),g.joiners.forEach((function(e){e.cb(n,t)})),g.joiners=null}var g=((c={})[S]=!0,c.id=r,c.meta=o,c.isRoot=i,c.context=p,c.joiners=[],c.queue=h,c.cancel=function(){s===$e&&(s=Ve,h.cancelAll(),v(O,!1))},c.cont=a,c.end=v,c.setContext=function(e){F(p,e)},c.toPromise=function(){return l?l.promise:(l=Ie(),s===Ze?l.reject(f):s!==$e&&l.resolve(u),l.promise)},c.isRunning=function(){return s===$e},c.isCancelled=function(){return s===Ve||s===$e&&n.status===Ve},c.isAborted=function(){return s===Ze},c.result=function(){return u},c.error=function(){return f},c);return g}function yn(e,n,t,r,o,i,a){var c=e.finalizeRunEffect((function(n,t,r){if(P(n))nn(n,r);else if(_(n))yn(e,n,f.context,t,o,!1,r);else if(n&&n[b]){(0,cn[n.type])(e,n.payload,r,s)}else r(n)}));l.cancel=H;var u={meta:o,cancel:function(){u.status===$e&&(u.status=Ve,l(O))},status:$e},f=gn(e,u,t,r,o,i,a),s={task:f,digestEffect:d};return a&&(a.cancel=f.cancel),l(),f;function l(e,t){try{var o;t?(o=n.throw(e),pn()):ee(e)?(u.status=Ve,l.cancel(),o=N(n.return)?n.return(O):{done:!0,value:O}):o=Z(e)?N(n.return)?n.return():{done:!0}:n.next(e),o.done?(u.status!==Ve&&(u.status=en),u.cont(o.value)):d(o.value,r,l)}catch(e){if(u.status===Ve)throw e;u.status=Ze,u.cont(e,!0)}}function d(n,t,r,o){void 0===o&&(o="");var i,a=on();function u(t,o){i||(i=!0,r.cancel=H,e.sagaMonitor&&(o?e.sagaMonitor.effectRejected(a,t):e.sagaMonitor.effectResolved(a,t)),o&&hn(n),r(t,o))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:a,parentEffectId:t,label:o,effect:n}),u.cancel=H,r.cancel=function(){i||(i=!0,u.cancel(),u.cancel=H,e.sagaMonitor&&e.sagaMonitor.effectCancelled(a))},c(n,a,u)}}function bn(e,n){var t=e.channel,r=void 0===t?Qe():t,o=e.dispatch,i=e.getState,a=e.context,c=void 0===a?{}:a,u=e.sagaMonitor,f=e.effectMiddlewares,s=e.onError,d=void 0===s?Q:s;for(var p=arguments.length,h=new Array(p>2?p-2:0),v=2;v<p;v++)h[v-2]=arguments[v];var g=n.apply(void 0,h);var y,b=on();if(u&&(u.rootSagaStarted=u.rootSagaStarted||H,u.effectTriggered=u.effectTriggered||H,u.effectResolved=u.effectResolved||H,u.effectRejected=u.effectRejected||H,u.effectCancelled=u.effectCancelled||H,u.actionDispatched=u.actionDispatched||H,u.rootSagaStarted({effectId:b,saga:n,args:h})),f){var m=l.apply(void 0,f);y=function(e){return function(n,t,r){return m((function(n){return e(n,t,r)}))(n)}}}else y=z;var w={channel:r,dispatch:V(o),getState:i,sagaMonitor:u,onError:d,finalizeRunEffect:y};return Ue((function(){var e=yn(w,g,c,b,re(n),!0,void 0);return u&&u.effectResolved(b,e),e}))}var mn=function(e){return{done:!0,value:e}},wn={};function En(e){return L(e)?"channel":U(e)?String(e):N(e)?e.name:String(e)}function xn(e,n,t){var r,o,i,a=n;function c(n,t){if(a===wn)return mn(n);if(t&&!o)throw a=wn,t;r&&r(n);var c=t?e[o](t):e[a]();return a=c.nextState,i=c.effect,r=c.stateUpdater,o=c.errorState,a===wn?mn(n):i}return X(c,(function(e){return c(null,e)}),t)}function Sn(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];var i,a={done:!1,value:Te(e)},c=function(e){return i=e};return xn({q1:function(){return{nextState:"q2",effect:a,stateUpdater:c}},q2:function(){return{nextState:"q1",effect:(e=i,{done:!1,value:Ne.apply(void 0,[n].concat(r,[e]))})};var e}},"q1","takeEvery("+En(e)+", "+n.name+")")}const On=function*(){const e=yield async function(){let e=await fetch("https://api.github.com/users"),n=(await e.json()).map(e=>fetch(e.url)),t=await Promise.all(n);return(await Promise.all(t.map(e=>e.json()))).map(({id:e,name:n,location:t,login:r,avatar_url:o})=>({id:e,name:n,location:t,login:r,avatar_url:o,trashbinIsShown:!1}))}();yield Re({type:"SET_USERS_TO_RENDER",data:e})};var jn=function*(){yield function(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Ne.apply(void 0,[Sn,e,n].concat(r))}("USERS_REQUESTED",On)};const kn=function(e){var n,t=void 0===e?{}:e,r=t.context,o=void 0===r?{}:r,i=t.channel,a=void 0===i?Qe():i,c=t.sagaMonitor,u=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(t,["context","channel","sagaMonitor"]);function f(e){var t=e.getState,r=e.dispatch;return n=bn.bind(null,T({},u,{context:o,channel:a,dispatch:r,getState:t,sagaMonitor:c})),function(e){return function(n){c&&c.actionDispatched&&c.actionDispatched(n);var t=e(n);return a.put(n),t}}}return f.run=function(){return n.apply(void 0,arguments)},f.setContext=function(e){F(o,e)},f}(),Tn=function e(n,t,o){var c;if("function"==typeof t&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===o&&(o=t,t=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(n,t)}if("function"!=typeof n)throw new Error("Expected the reducer to be a function.");var u=n,f=t,s=[],l=s,d=!1;function p(){l===s&&(l=s.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var n=!0;return p(),l.push(e),function(){if(n){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");n=!1,p();var t=l.indexOf(e);l.splice(t,1)}}}function g(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=u(f,e)}finally{d=!1}for(var n=s=l,t=0;t<n.length;t++){(0,n[t])()}return e}return g({type:i.INIT}),(c={dispatch:g,subscribe:v,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,g({type:i.REPLACE})}})[r.a]=function(){var e,n=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:n(t)}}})[r.a]=function(){return this},e},c}(function(e){for(var n=Object.keys(e),t={},r=0;r<n.length;r++){var o=n[r];0,"function"==typeof e[o]&&(t[o]=e[o])}var a,u=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(n){var t=e[n];if(void 0===t(void 0,{type:i.INIT}))throw new Error('Reducer "'+n+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+n+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(t)}catch(e){a=e}return function(e,n){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var f=u[i],s=t[f],l=e[f],d=s(l,n);if(void 0===d){var p=c(f,n);throw new Error(p)}o[f]=d,r=r||d!==l}return r?o:e}}({users:h}),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return function(){var t=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:t.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=n.map((function(e){return e(o)}));return s({},t,{dispatch:r=l.apply(void 0,i)(t.dispatch)})}}}(kn));kn.run(jn);var Rn=Tn;let An=new usersApp(Rn);Rn.subscribe(An.render.bind(An))}]);