function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Re}=Object.prototype,{getPrototypeOf:oe}=Object,ie=(e=>t=>{const n=Re.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>ie(t)===e),V=e=>t=>typeof t===e,{isArray:B}=Array,D=V("undefined");function ze(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&U(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=x("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const We=V("string"),U=V("function"),Te=V("number"),ae=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,M=e=>{if(ie(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=x("Date"),Ke=x("File"),Ge=x("Blob"),Xe=x("FileList"),Qe=e=>ae(e)&&U(e.pipe),Ye=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Re.call(e)===t||U(e.toString)&&e.toString()===t)},Ze=x("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let f;for(r=0;r<i;r++)f=o[r],t.call(null,e[f],f,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xe=e=>!D(e)&&e!==Ne;function ee(){const{caseless:e}=xe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Pe(t,s)||s;M(t[o])&&M(r)?t[o]=ee(t[o],r):M(r)?t[o]=ee({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&U(s)?e[o]=Oe(s,n):e[o]=s},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},st=(e,t,n,r)=>{let s,o,i;const f={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!f[i]&&(t[i]=e[i],f[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},lt=x("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dt=x("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},pt=e=>{Ce(e,(t,n)=>{if(U(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(U(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ht=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Ue={DIGIT:pe,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+pe},Et=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bt(e){return!!(e&&U(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const wt=e=>{const t=new Array(10),n=(r,s)=>{if(ae(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return j(r,(i,f)=>{const p=n(i,s+1);!D(p)&&(o[f]=p)}),t[s]=void 0,o}}return r};return n(e,0)},c={isArray:B,isArrayBuffer:Ae,isBuffer:ze,isFormData:Ye,isArrayBufferView:Je,isString:We,isNumber:Te,isBoolean:Ve,isObject:ae,isPlainObject:M,isUndefined:D,isDate:$e,isFile:Ke,isBlob:Ge,isRegExp:dt,isFunction:U,isStream:Qe,isURLSearchParams:Ze,isTypedArray:at,isFileList:Xe,forEach:j,merge:ee,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:st,kindOf:ie,kindOfTest:x,endsWith:ot,toArray:it,forEachEntry:ct,matchAll:ut,isHTMLForm:lt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Ce,freezeMethods:pt,toObjectSet:ht,toCamelCase:ft,noop:mt,toFiniteNumber:yt,findKey:Pe,global:Ne,isContextDefined:xe,ALPHABET:Ue,generateString:Et,isSpecCompliantForm:bt,toJSONObject:wt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=y.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(y,Fe);Object.defineProperty(Le,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return c.toFlatObject(e,i,function(p){return p!==Error.prototype},f=>f!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const St=null;function te(e){return c.isPlainObject(e)||c.isArray(e)}function ke(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function gt(e){return c.isArray(e)&&!e.some(te)}const Ot=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(l,h){return!c.isUndefined(h[l])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function u(a){if(a===null)return"";if(c.isDate(a))return a.toISOString();if(!p&&c.isBlob(a))throw new y("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(a)||c.isTypedArray(a)?p&&typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function d(a,l,h){let E=a;if(a&&!h&&typeof a=="object"){if(c.endsWith(l,"{}"))l=r?l:l.slice(0,-2),a=JSON.stringify(a);else if(c.isArray(a)&&gt(a)||(c.isFileList(a)||c.endsWith(l,"[]"))&&(E=c.toArray(a)))return l=ke(l),E.forEach(function(R,w){!(c.isUndefined(R)||R===null)&&t.append(i===!0?he([l],w,o):i===null?l:l+"[]",u(R))}),!1}return te(a)?!0:(t.append(he(h,l,o),u(a)),!1)}const m=[],S=Object.assign(Ot,{defaultVisitor:d,convertValue:u,isVisitable:te});function b(a,l){if(!c.isUndefined(a)){if(m.indexOf(a)!==-1)throw Error("Circular reference detected in "+l.join("."));m.push(a),c.forEach(a,function(E,O){(!(c.isUndefined(E)||E===null)&&s.call(t,E,c.isString(O)?O.trim():O,l,S))===!0&&b(E,l?l.concat(O):[O])}),m.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return b(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&$(e,this,t)}const Be=ce.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||Rt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=c.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ye=At,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tt=typeof URLSearchParams<"u"?URLSearchParams:ce,Pt=FormData,Nt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),P={isBrowser:!0,classes:{URLSearchParams:Tt,FormData:Pt,Blob},isStandardBrowserEnv:Nt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Ct(e,t){return $(e,new P.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return P.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function je(e){function t(n,r,s,o){let i=n[o++];const f=Number.isFinite(+i),p=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,p?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!f):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=Lt(s[i])),!f)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}const Ft={"Content-Type":void 0};function kt(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(je(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let f;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ct(t,this.formSerializer).toString();if((f=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return $(f?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),kt(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(f){if(i)throw f.name==="SyntaxError"?y.from(f,y.ERR_BAD_RESPONSE,this,null,this.response):f}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:P.classes.FormData,Blob:P.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){K.headers[t]={}});c.forEach(["post","put","patch"],function(t){K.headers[t]=c.merge(Ft)});const ue=K,Bt=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_t=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Bt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:c.isArray(e)?e.map(q):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function jt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Q(e,t,n,r){if(c.isFunction(r))return r.call(this,t,n);if(c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function It(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(f,p,u){const d=_(p);if(!d)throw new Error("header name must be a non-empty string");const m=c.findKey(s,d);(!m||s[m]===void 0||u===!0||u===void 0&&s[m]!==!1)&&(s[m||p]=q(f))}const i=(f,p)=>c.forEach(f,(u,d)=>o(u,d,p));return c.isPlainObject(t)||t instanceof this.constructor?i(t,n):c.isString(t)&&(t=t.trim())&&!jt(t)?i(_t(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Dt(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_(i),i){const f=c.findKey(r,i);f&&(!n||Q(r,r[f],f,n))&&(delete r[f],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const f=t?vt(o):String(o).trim();f!==o&&delete n[o],n[f]=q(s),r[f]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const f=_(i);r[f]||(It(s,i),r[f]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.freezeMethods(G.prototype);c.freezeMethods(G);const N=G;function Y(e,t){const n=this||ue,r=t||n,s=N.from(r.headers);let o=r.data;return c.forEach(e,function(f){o=f.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(v,y,{__CANCEL__:!0});function Mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qt=P.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,f){const p=[];p.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),c.isString(o)&&p.push("path="+o),c.isString(i)&&p.push("domain="+i),f===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ht(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Ht(t)?zt(e,t):t}const Jt=P.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const f=c.isString(i)?s(i):i;return f.protocol===r.protocol&&f.host===r.host}}():function(){return function(){return!0}}();function Wt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Vt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const u=Date.now(),d=r[o];i||(i=u),n[s]=p,r[s]=u;let m=o,S=0;for(;m!==s;)S+=n[m++],m=m%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const b=d&&u-d;return b?Math.round(S*1e3/b):void 0}}function be(e,t){let n=0;const r=Vt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,f=o-n,p=r(f),u=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:f,rate:p||void 0,estimated:p&&i&&u?(i-o)/p:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const $t=typeof XMLHttpRequest<"u",Kt=$t&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let f;function p(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}c.isFormData(s)&&(P.isStandardBrowserEnv||P.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+a))}const d=Ie(e.baseURL,e.url);u.open(e.method.toUpperCase(),_e(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function m(){if(!u)return;const b=N.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),l={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:b,config:e,request:u};Mt(function(E){n(E),p()},function(E){r(E),p()},l),u=null}if("onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(m)},u.onabort=function(){u&&(r(new y("Request aborted",y.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let a=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const l=e.transitional||De;e.timeoutErrorMessage&&(a=e.timeoutErrorMessage),r(new y(a,l.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,u)),u=null},P.isStandardBrowserEnv){const b=(e.withCredentials||Jt(d))&&e.xsrfCookieName&&qt.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&c.forEach(o.toJSON(),function(a,l){u.setRequestHeader(l,a)}),c.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(f=b=>{u&&(r(!b||b.type?new v(null,e,u):b),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f)));const S=Wt(d);if(S&&P.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}u.send(s||null)})},H={http:St,xhr:Kt};c.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Gt={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=c.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!c.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function we(e){return Z(e),e.headers=N.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gt.getAdapter(e.adapter||ue.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return ve(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof N?e.toJSON():e;function k(e,t){t=t||{};const n={};function r(u,d,m){return c.isPlainObject(u)&&c.isPlainObject(d)?c.merge.call({caseless:m},u,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function s(u,d,m){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u,m)}else return r(u,d,m)}function o(u,d){if(!c.isUndefined(d))return r(void 0,d)}function i(u,d){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function f(u,d,m){if(m in t)return r(u,d);if(m in e)return r(void 0,u)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:f,headers:(u,d)=>s(Se(u),Se(d),!0)};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const m=p[d]||s,S=m(e[d],t[d],d);c.isUndefined(S)&&m!==f||(n[d]=S)}),n}const Me="1.3.2",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Me+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,f)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,f):!0}};function Xt(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const f=e[o],p=f===void 0||i(f,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ne={assertOptions:Xt,validators:le},C=ne.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!==void 0&&ne.assertOptions(s,{encode:C.function,serialize:C.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&c.merge(o.common,o[n.method]),i&&c.forEach(["delete","get","head","post","put","patch","common"],a=>{delete o[a]}),n.headers=N.concat(i,o);const f=[];let p=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(n)===!1||(p=p&&l.synchronous,f.unshift(l.fulfilled,l.rejected))});const u=[];this.interceptors.response.forEach(function(l){u.push(l.fulfilled,l.rejected)});let d,m=0,S;if(!p){const a=[we.bind(this),void 0];for(a.unshift.apply(a,f),a.push.apply(a,u),S=a.length,d=Promise.resolve(n);m<S;)d=d.then(a[m++],a[m++]);return d}S=f.length;let b=n;for(m=0;m<S;){const a=f[m++],l=f[m++];try{b=a(b)}catch(h){l.call(this,h);break}}try{d=we.call(this,b)}catch(a){return Promise.reject(a)}for(m=0,S=u.length;m<S;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=k(this.defaults,t);const n=Ie(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,f){return this.request(k(f||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});const z=J;class fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(f=>{r.subscribe(f),o=f}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,f){r.reason||(r.reason=new v(o,i,f),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new fe(function(s){t=s}),cancel:t}}}const Qt=fe;function Yt(e){return function(n){return e.apply(null,n)}}function Zt(e){return c.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const en=re;function qe(e){const t=new z(e),n=Oe(z.prototype.request,t);return c.extend(n,z.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(k(e,s))},n}const g=qe(ue);g.Axios=z;g.CanceledError=v;g.CancelToken=Qt;g.isCancel=ve;g.VERSION=Me;g.toFormData=$;g.AxiosError=y;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Yt;g.isAxiosError=Zt;g.mergeConfig=k;g.AxiosHeaders=N;g.formToJSON=e=>je(c.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=en;g.default=g;const tn=g;var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se={},rn={get exports(){return se},set exports(e){se=e}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(nn,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(a){var l,h;for(l in a)h=a[l],h!==void 0&&a.hasOwnProperty(l)&&(r[l]=h);return this},n.status=null,n.set=function(a){var l=n.isStarted();a=s(a,r.minimum,1),n.status=a===1?null:a;var h=n.render(!l),E=h.querySelector(r.barSelector),O=r.speed,R=r.easing;return h.offsetWidth,f(function(w){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),p(E,i(a,O,R)),a===1?(p(h,{transition:"none",opacity:1}),h.offsetWidth,setTimeout(function(){p(h,{transition:"all "+O+"ms linear",opacity:0}),setTimeout(function(){n.remove(),w()},O)},O)):setTimeout(w,O)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var a=function(){setTimeout(function(){n.status&&(n.trickle(),a())},r.trickleSpeed)};return r.trickle&&a(),this},n.done=function(a){return!a&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(a){var l=n.status;return l?(typeof a!="number"&&(a=(1-l)*s(Math.random()*l,.1,.95)),l=s(l+a,0,.994),n.set(l)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var a=0,l=0;n.promise=function(h){return!h||h.state()==="resolved"?this:(l===0&&n.start(),a++,l++,h.always(function(){l--,l===0?(a=0,n.done()):n.set((a-l)/a)}),this)}}(),n.render=function(a){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var l=document.createElement("div");l.id="nprogress",l.innerHTML=r.template;var h=l.querySelector(r.barSelector),E=a?"-100":o(n.status||0),O=document.querySelector(r.parent),R;return p(h,{transition:"all 0 linear",transform:"translate3d("+E+"%,0,0)"}),r.showSpinner||(R=l.querySelector(r.spinnerSelector),R&&b(R)),O!=document.body&&d(O,"nprogress-custom-parent"),O.appendChild(l),l},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&b(a)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var a=document.body.style,l="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return l+"Perspective"in a?"translate3d":l+"Transform"in a?"translate":"margin"};function s(a,l,h){return a<l?l:a>h?h:a}function o(a){return(-1+a)*100}function i(a,l,h){var E;return r.positionUsing==="translate3d"?E={transform:"translate3d("+o(a)+"%,0,0)"}:r.positionUsing==="translate"?E={transform:"translate("+o(a)+"%,0)"}:E={"margin-left":o(a)+"%"},E.transition="all "+l+"ms "+h,E}var f=function(){var a=[];function l(){var h=a.shift();h&&h(l)}return function(h){a.push(h),a.length==1&&l()}}(),p=function(){var a=["Webkit","O","Moz","ms"],l={};function h(w){return w.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(A,T){return T.toUpperCase()})}function E(w){var A=document.body.style;if(w in A)return w;for(var T=a.length,F=w.charAt(0).toUpperCase()+w.slice(1),L;T--;)if(L=a[T]+F,L in A)return L;return w}function O(w){return w=h(w),l[w]||(l[w]=E(w))}function R(w,A,T){A=O(A),w.style[A]=T}return function(w,A){var T=arguments,F,L;if(T.length==2)for(F in A)L=A[F],L!==void 0&&A.hasOwnProperty(F)&&R(w,F,L);else R(w,T[1],T[2])}}();function u(a,l){var h=typeof a=="string"?a:S(a);return h.indexOf(" "+l+" ")>=0}function d(a,l){var h=S(a),E=h+l;u(h,l)||(a.className=E.substring(1))}function m(a,l){var h=S(a),E;u(a,l)&&(E=h.replace(" "+l+" "," "),a.className=E.substring(1,E.length-1))}function S(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function b(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return n})})(rn);const W=se;const He="http://192.168.18.81:1337",on=e=>e?e.startsWith("http")?e:He+e:"https://img0.baidu.com/it/u=2200629154,295040774&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",an=e=>sessionStorage.setItem("token",e),sn=()=>sessionStorage.getItem("token"),cn=()=>sessionStorage.removeItem("token"),I=tn.create({baseURL:He,timeout:5e3});I.interceptors.request.use(function(e){return W.start(),e.headers.token=sn(),e},function(e){return W.done(),Promise.reject(e)});I.interceptors.response.use(function(e){return W.done(),e.data},function(e){var t;return((t=e.response)==null?void 0:t.status)==401&&(window.location.href="/#/login"),W.done(),Promise.reject(e)});const un=(e,t)=>I.get(e,{params:t}),ln=(e,t)=>I.post(e,t),fn=(e,t)=>I.put(e,t);export{fn as a,on as d,un as g,ln as p,cn as r,an as s};
