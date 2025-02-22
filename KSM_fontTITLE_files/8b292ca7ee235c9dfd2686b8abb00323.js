(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self;function ba(a){return a};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var r=class{constructor(a){this.g=a}toString(){return this.g}},ca=new r("about:invalid#zClosurez");class da{constructor(a){this.ga=a}}function t(a){return new da(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const ea=new da(a=>/^[^:]*([/?#]|$)/.test(a));var fa=t("http"),ha=t("https"),ia=t("ftp"),ka=t("mailto"),ma=t("intent"),na=t("market"),oa=t("itms"),pa=t("itms-appss");const qa=[t("data"),fa,ha,ka,ia,ea];function ra(a,b=qa){if(a instanceof r)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof da&&d.ga(a))return new r(a)}}function sa(a,b=qa){return ra(a,b)||ca}var ta=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function ua(a,b){if(b instanceof r)if(b instanceof r)b=b.g;else throw Error("");else b=ta.test(b)?b:void 0;b!==void 0&&(a.href=b)};function va(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]};function wa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ya(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)ya(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}function za(a,b,c,d){const e=c.length;for(;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}var Aa=/#|$/;
function Ba(a,b){const c=a.search(Aa);let d=za(a,0,b,c);if(d<0)return null;let e=a.indexOf("&",d);if(e<0||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,e!==-1?e:0).replace(/\+/g," "))}var Ca=/[?&]($|#)/;const Da=(new Date("2024-01-01T00:00:00Z")).getTime();function Ea(a,...b){b=b.filter(d=>d).join("&");if(!b)return a;const c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}function Fa(a,b){switch(a){case 0:return b?"ri=1":"";case 1:return b?"ri=24":"ri=27";case 2:return b?"ri=25":"ri=26";default:return""}}
function Ga(a){a=a.A;if(!a)return"";let b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(c=>encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)).join("|")));typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}function Ha(a,b){return a.m?typeof a.i!=="string"||a.i.length===0?null:{version:3,C:a.i,u:Ea(a.g,"act=1",Fa(b,!0),Ga(a))}:a.o?{version:4,C:Ea(a.g,"dct=1","suid="+a.l,Fa(b,!1)),u:Ea(a.g,"act=1",Fa(b,!0),"suid="+a.l)}:null}function Ia(a,b){return b===2?Ea(a.g,"ri=2"):b===0?Ea(a.g,"ri=16"):a.g}
var Ja=class{constructor({url:a,Z:b}){this.g=a;this.A=b;b=/[?&]dsh=1(&|$)/.test(a);this.m=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);this.h=/[?&]adurl=([^&]*)/.exec(a);this.B=!b&&/[?&]aspm=1(&|$)/.test(a);if(this.h&&this.h[1]){let c;try{c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.l=(new Date).getTime()-Da}};function Ka(a){m.setTimeout(()=>{throw a;},0)};var La,Ma;a:{for(var Na=["CLOSURE_FLAGS"],Oa=m,Pa=0;Pa<Na.length;Pa++)if(Oa=Oa[Na[Pa]],Oa==null){Ma=null;break a}Ma=Oa}var Qa=Ma&&Ma[610401301];La=Qa!=null?Qa:!1;var Ra;const Sa=m.navigator;Ra=Sa?Sa.userAgentData||null:null;function Ta(a){return La?Ra?Ra.brands.some(({brand:b})=>b&&b.indexOf(a)!=-1):!1:!1}function v(a){var b;a:{if(b=m.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1};function w(){return La?!!Ra&&Ra.brands.length>0:!1}function Ua(){return w()?Ta("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")};function Va(){return v("iPhone")&&!v("iPod")&&!v("iPad")};function Wa(a){Wa[" "](a);return a}Wa[" "]=function(){};var Xa=Va(),Ya=v("iPad");var Za=Va()||v("iPod"),$a=v("iPad");!v("Android")||Ua();Ua();v("Safari")&&(Ua()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?Ta("Microsoft Edge"):v("Edg/"))||w()&&Ta("Opera"));var ab={},bb=null;let cb=void 0;function db(a){a=Error(a);wa(a,"warning");return a}function eb(a){if(a!=null){var b;var c=(b=cb)!=null?b:cb={};b=c[a]||0;b>=5||(c[a]=b+1,a=Error(),wa(a,"incident"),Ka(a))}};var fb=new Set;function gb(a,b=!1,c=!1){a=c&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol();b&&fb.add(a);return a}var ib=gb(),jb=gb(void 0,!0),kb=gb(),lb=gb();const x=gb("jas",!0,!0);function nb(a){a[x]|=34;return a}function ob(a,b){b[x]=(a|0)&-30975}function pb(a,b){b[x]=(a|34)&-30941};function y(a){return Array.prototype.slice.call(a)};var qb={};function rb(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}var sb;const ub=[];ub[x]=55;sb=Object.freeze(ub);function vb(a){if(a&2)throw Error();}class wb{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new wb(this.g,this.h,this.l)}}
function xb(a,b){const c=ba(jb);(b=c?b[c]:void 0)&&(a[jb]=y(b))}var yb=Object.freeze({});var zb=typeof m.BigInt==="function"&&typeof m.BigInt(0)==="bigint";const Ab=Number.MIN_SAFE_INTEGER.toString(),Bb=zb?BigInt(Number.MIN_SAFE_INTEGER):void 0,Cb=Number.MAX_SAFE_INTEGER.toString(),Db=zb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Eb(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}};const Fb=Number.isFinite;function Gb(a){if(a!=null&&typeof a!=="boolean"){var b=typeof a;throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);}return a}function Hb(a){if(!Fb(a))throw db("enum");return a|0}function Ib(a){return a==null?a:Fb(a)?a|0:void 0}function Jb(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Fb(a)?a|0:void 0}function B(a){return a==null||typeof a==="string"?a:void 0}
function Kb(a,b,c,d){if(a!=null&&typeof a==="object"&&a.H===qb)return a;if(!Array.isArray(a))return c?d&2?((a=b[ib])||(a=new b,nb(a.j),a=b[ib]=a),b=a):b=new b:b=void 0,b;let e=c=a[x]|0;e===0&&(e|=d&32);e|=d&2;e!==c&&(a[x]=e);return new b(a)}function Lb(a,b,c){if(b){if(typeof a!=="string")throw Error();return a}let d;return(d=B(a))!=null?d:c?"":void 0};function Mb(a){return a};const Nb={},Ob=(()=>class extends Map{constructor(){super()}})();function Pb(a){return a}function Qb(a){if(a.s&2)throw Error("Cannot mutate an immutable Map");}
var C=class extends Ob{constructor(a,b,c=Pb,d=Pb){super();let e=a[x]|0;e|=64;this.s=a[x]=e;this.F=b;this.v=c;this.L=this.F?Rb:d;for(let f=0;f<a.length;f++){const h=a[f],g=c(h[0],!1,!0);let k=h[1];b?k===void 0&&(k=null):k=d(h[1],!1,!0,void 0,void 0,e);super.set(g,k)}}ia(){var a=Sb;if(this.size!==0)return this.I(a)}I(a=Tb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){Qb(this);super.clear()}delete(a){Qb(this);return super.delete(this.v(a,
!0,!1))}entries(){var a=this.X();return new wb(a,Ub,this)}keys(){return this.ha()}values(){var a=this.X();return new wb(a,C.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){Qb(this);a=this.v(a,!0,!1);return a==null?this:b==null?(super.delete(a),this):super.set(a,this.L(b,!0,!0,this.F,!1,this.s))}has(a){return super.has(this.v(a,!1,!1))}get(a){a=this.v(a,!1,!1);const b=super.get(a);if(b!==void 0){var c=this.F;return c?(c=this.L(b,!1,!0,c,this.fa,this.s),
c!==b&&super.set(a,c),c):b}}X(){return Array.from(super.keys())}ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};C.prototype.toJSON=void 0;function Rb(a,b,c,d,e,f){a=Kb(a,d,c,f);e&&(a=Vb(a));return a}function Tb(a){return a}function Ub(a){return[a,this.get(a)]}let Wb;function Xb(){return Wb||(Wb=new C(nb([]),void 0,void 0,void 0,Nb))};function Yb(a,b,c){const d=y(a);var e=d.length;const f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(const h in f)b[h]=c(f[h])}xb(d,a);return d}function Zb(a,b,c,d,e){if(a!=null){if(Array.isArray(a)){const f=a[x]|0;return a.length===0&&f&1?void 0:e&&f&2?a:$b(a,b,c,d!==void 0,e)}return b(a,d)}}
function $b(a,b,c,d,e){const f=d||c?a[x]|0:0;d=d?!!(f&32):void 0;const h=y(a);let g=0;const k=h.length;for(let u=0;u<k;u++){var l=h[u];if(u===k-1&&rb(l)){var n=b,p=c,q=d,z=e;let A=void 0;for(let T in l){const L=Zb(l[T],n,p,q,z);if(L!=null){let la;((la=A)!=null?la:A={})[T]=L}}l=A}else l=Zb(h[u],b,c,d,e);h[u]=l;l!=null&&(g=u+1)}g<k&&(h.length=g);c&&(xb(h,a),c(f,h));return h}function Sb(a){return Zb(a,ac,void 0,void 0,!1)}
function ac(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return(zb?a>=Bb&&a<=Db:a[0]==="-"?Eb(a,Ab):Eb(a,Cb))?Number(a):""+a;case "boolean":return a?1:0;case "object":if(a!=null&&a instanceof Uint8Array){a!=null&&a instanceof Uint8Array&&eb(lb);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a.H===qb)return bc(a);if(a instanceof C)return a.ia();
return}return a}let cc;function E(a){try{return bc(a)}finally{cc=void 0}}
function bc(a){var b=a.j;a=$b(b,ac,void 0,void 0,!1);var c=b[x]|0;if((b=a.length)&&!(c&512)){var d=a[b-1],e=!1;rb(d)?(b--,e=!0):d=void 0;var f,h=(f=cc)!=null?f:Mb;f=c&512?0:-1;c=b-f;h=h(c,f,a,d);d&&(a[b]=void 0);if(c<h&&d){c=!0;for(var g in d){const k=+g;if(k<=h)e=k+f,a[e]=d[g],b=Math.max(e+1,b),e=!1,delete d[g];else{c=!1;break}}c&&(d=void 0)}for(c=b-1;b>0;c=b-1)if(g=a[c],g==null)b--,e=!0;else if(c-=f,c>=h){let k;((k=d)!=null?k:d={})[c]=g;b--;e=!0}else break;e&&(a.length=b);d&&a.push(d)}return a}
;function dc(){eb(kb)};function ec(a,b,c=pb){if(a!=null){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[x]|0;if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(a[x]=d|34,d&4&&Object.freeze(a),a):$b(a,ec,d&4?pb:c,!0,!0)}a.H===qb?(c=a.j,d=c[x]|0,a=d&2?a:new a.constructor(fc(c,d,!0))):a instanceof C&&!(a.s&2)&&(c=nb(a.I(ec)),a=new C(c,a.F,a.v,a.L));return a}}function gc(a){const b=a.j;return new a.constructor(fc(b,b[x]|0,!1))}
function fc(a,b,c){const d=c||b&2?pb:ob,e=!!(b&32);a=Yb(a,b,f=>ec(f,e,d));a[x]=a[x]|32|(c?2:0);return a}function Vb(a){const b=a.j,c=b[x]|0;return c&2?new a.constructor(fc(b,c,!1)):a};function F(a,b){a=a.j;return hc(a,a[x]|0,b)}function hc(a,b,c){if(c===-1)return null;const d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)return a[e][c];if(d<=e)return a[d]}function G(a,b,c){const d=a.j;let e=d[x]|0;vb(e);H(d,e,b,c);return a}function H(a,b,c,d){const e=b&512?0:-1,f=c+e;var h=a.length-1;if(f>=h&&b&256)return a[h][c]=d,b;if(f<=h)return a[f]=d,b;d!==void 0&&(h=b>>15&1023||536870912,c>=h?d!=null&&(a[h+e]={[c]:d},b|=256,a[x]=b):a[f]=d);return b}
function I(a,b,c){return ic(a,b,c)!==void 0}
function jc(a,b,c,d,e){const f=a.j;a=f[x]|0;const h=2&a?1:d;e=!!e;d=kc(f,a,b);let g=d[x]|0;if(!(4&g)){4&g&&(d=y(d),g=J(g,a),a=H(f,a,b,d));let k=0,l=0;for(;k<d.length;k++){const n=c(d[k]);n!=null&&(d[l++]=n)}l<k&&(d.length=l);g=lc(g,a);c=(g|20)&-4097;g=c&=-8193;d[x]=g;2&g&&Object.freeze(d)}h===1||h===4&&32&g?K(g)||(e=g,g|=2,g!==e&&(d[x]=g),Object.freeze(d)):(h===2&&K(g)&&(d=y(d),g=J(g,a),g=mc(g,a,e),d[x]=g,a=H(f,a,b,d)),K(g)||(b=g,g=mc(g,a,e),g!==b&&(d[x]=g)));return d}
function kc(a,b,c){a=hc(a,b,c);return Array.isArray(a)?a:sb}function lc(a,b){a===0&&(a=J(a,b));return a|1}function K(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function nc(a,b,c,d,e,f){const h=b&2;a:{var g=c,k=b&2;c=!1;if(g==null){if(k){a=Xb();break a}g=[]}else if(g.constructor===C){if((g.s&2)==0||k){a=g;break a}g=g.I()}else Array.isArray(g)?c=!!((g[x]|0)&2):g=[];if(k){if(!g.length){a=Xb();break a}c||(c=!0,nb(g))}else if(c){c=!1;k=y(g);for(g=0;g<k.length;g++){const l=k[g]=y(k[g]);Array.isArray(l[1])&&(l[1]=nb(l[1]))}g=k}c||((g[x]|0)&64?g[x]&=-33:32&b&&(g[x]|=32));f=new C(g,e,Lb,f);H(a,b,d,f);a=f}!h&&e&&(a.fa=!0);return a}
function oc(a,b){a=a.j;const c=a[x]|0;return nc(a,c,hc(a,c,b),b,void 0,Lb)}function pc(a){a=a.j;const b=a[x]|0;return nc(a,b,hc(a,b,1),1,qc)}function ic(a,b,c){a=a.j;let d=a[x]|0;const e=hc(a,d,c);b=Kb(e,b,!1,d);b!==e&&b!=null&&H(a,d,c,b);return b}function M(a,b,c){b=ic(a,b,c);if(b==null)return b;a=a.j;let d=a[x]|0;if(!(d&2)){const e=Vb(b);e!==b&&(b=e,H(a,d,c,b))}return b}function J(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}function mc(a,b,c){32&b&&c||(a&=-33);return a}
function N(a,b){a=F(a,b);a=a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0;return a!=null?a:!1}function rc(a,b){let c;return(c=Jb(F(a,b)))!=null?c:0}function P(a,b){let c;return(c=B(F(a,b)))!=null?c:""}function R(a,b,c=0){let d;return(d=Ib(F(a,b)))!=null?d:c}function sc(a,b,c){if(c!=null){if(typeof c!=="number")throw db("int32");if(!Fb(c))throw db("int32");c|=0}G(a,b,c)}function S(a,b,c){if(c!=null&&typeof c!=="string")throw Error();return G(a,b,c)}
function tc(a,b,c){G(a,b,c==null?c:Hb(c))};var U=class{constructor(a){a:{if(a==null){var b=96;a=[]}else{if(!Array.isArray(a))throw Error("narr");b=a[x]|0;16384&b||!(64&b)||2&b||dc();if(b&2048)throw Error("farr");if(b&64){var c=a;break a}var d=a;b|=64;var e=d.length;if(e){var f=e-1;e=d[f];if(rb(e)){b|=256;const h=b&512?0:-1;f-=h;if(f>=1024)throw Error("pvtlmt");for(c in e){const g=+c;if(g<f)d[g+h]=e[c],delete e[c];else break}b=b&-33521665|(f&1023)<<15}}}a[x]=b;c=a}this.j=c}toJSON(){return E(this)}};U.prototype.H=qb;U.prototype.toString=function(){return this.j.toString()};var uc=class extends U{};var vc=class extends U{};var wc=class extends U{};var xc=class extends U{};var yc=class extends U{};var zc=class extends U{D(){return P(this,3)}Y(a){G(this,5,Gb(a))}};var V=class extends U{D(){return P(this,1)}Y(a){G(this,2,Gb(a))}};var Ac=class extends U{};var Bc=class extends U{};function Cc(a){var b=a.j[x]|0,c=b,d=!(2&b);b=void 0===yb?2:4;a=a.j;var e=!!(2&c);const f=e?1:b;d&&(d=!e);b=kc(a,c,7);var h=b[x]|0;e=!!(4&h);if(!e){h=lc(h,c);var g=b,k=c,l=!!(2&h);l&&(k|=2);let n=!l,p=!0,q=0,z=0;for(;q<g.length;q++){const u=Kb(g[q],zc,!1,k);if(u instanceof zc){if(!l){const A=!!((u.j[x]|0)&2);n&&(n=!A);p&&(p=A)}g[z++]=u}}z<q&&(g.length=z);h|=4;h=p?h|16:h&-17;h=n?h|8:h&-9;g[x]=h;l&&Object.freeze(g)}if(d&&!(8&h||!b.length&&(f===1||f===4&&32&h))){K(h)&&(b=y(b),h=J(h,c),c=H(a,c,7,b));d=
b;g=h;for(h=0;h<d.length;h++)k=d[h],l=Vb(k),k!==l&&(d[h]=l);g|=8;g=d.length?g&-17:g|16;h=d[x]=g}f===1||f===4&&32&h?K(h)||(c=h,h|=!b.length||16&h&&(!e||32&h)?2:2048,h!==c&&(b[x]=h),Object.freeze(b)):(f===2&&K(h)&&(b=y(b),h=J(h,c),h=mc(h,c,!1),b[x]=h,c=H(a,c,7,b)),K(h)||(a=h,h=mc(h,c,!1),h!==a&&(b[x]=h)));return b}var qc=class extends U{};var Dc=class extends U{};var Ec=class extends U{};function Fc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Gc={capture:!0},Hc={passive:!0},Ic=Fc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Jc(a){return a?a.passive&&Ic()?a:a.capture||!1:!1}function W(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Jc(d))};function Nc(a){let b=0;for(const c in a)b++};function Oc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var Pc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let Qc=[];const Rc=()=>{const a=Qc;Qc=[];for(const b of a)try{b()}catch(c){}};
var Sc=a=>{Qc.push(a);Qc.length==1&&(window.Promise?Promise.resolve().then(Rc):window.setImmediate?setImmediate(Rc):setTimeout(Rc,0))},Tc=a=>{var b=X;b.readyState==="complete"||b.readyState==="interactive"?Sc(a):b.addEventListener("DOMContentLoaded",a)},Uc=a=>{var b=window;b.document.readyState==="complete"?Sc(a):b.addEventListener("load",a)};function Vc(a=document){return a.createElement("img")};function Wc(a,b,c=null,d=!1){Xc(a,b,c,d)}function Xc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Vc(a.document);if(c||d){const f=h=>{c&&c(h);if(d){h=a.google_image_requests;const g=Array.prototype.indexOf.call(h,e,void 0);g>=0&&Array.prototype.splice.call(h,g,1)}e.removeEventListener&&e.removeEventListener("load",f,Jc());e.removeEventListener&&e.removeEventListener("error",f,Jc())};W(e,"load",f);W(e,"error",f)}e.src=b;a.google_image_requests.push(e)};let Yc=0;function Zc(){const a=$c(Yc,document.currentScript);a&&(a.dataset.initialized="true")}function ad(a){return(a=$c(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function $c(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function bd(a){if(!(Math.random()>.01)){var b=$c(a,document.currentScript);a=`https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${ad(a)}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Wc(b,a,void 0,!1)}};var X=document,cd=window;var dd=a=>{var b=X;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};var ed=class{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};function fd(a){let b=a.toString();a.name&&b.indexOf(a.name)==-1&&(b+=": "+a.name);a.message&&b.indexOf(a.message)==-1&&(b+=": "+a.message);if(a.stack)a:{a=a.stack;var c=b;try{a.indexOf(c)==-1&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n");break a}catch(d){b=c;break a}b=void 0}return b};const gd=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var hd=class{constructor(a,b){this.g=a;this.h=b}},id=class{constructor(a,b){this.url=a;this.W=!!b;this.depth=null}};let jd=null;function kd(){const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ld(){const a=m.performance;return a&&a.now?a.now():null};var md=class{constructor(a,b){var c=ld()||kd();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const Y=m.performance,nd=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),od=Fc(()=>{var a;if(a=nd){var b;a=window;if(jd===null){jd="";try{let c="";try{c=a.top.location.hash}catch(d){c=a.location.hash}c&&(jd=(b=c.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=jd;a=!!b.indexOf&&b.indexOf("1337")>=0}return a});function pd(a){a&&Y&&od()&&(Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))};function qd(a,b){const c={};c[a]=b;return[c]}function rd(a,b,c,d,e){const f=[];Oc(a,(h,g)=>{(h=sd(h,b,c,d,e))&&f.push(`${g}=${h}`)});return f.join(b)}
function sd(a,b,c,d,e){if(a==null)return"";b=b||"&";c=c||",$";typeof c==="string"&&(c=c.split(""));if(a instanceof Array){if(d||(d=0),d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(sd(a[h],b,c,d+1,e));return f.join(c[d])}}else if(typeof a==="object")return e||(e=0),e<2?encodeURIComponent(rd(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function td(a){let b=1;for(const c in a.h)c.length>b&&(b=c.length);return 3997-b-a.i.length-1}
function ud(a,b){let c="https://pagead2.googlesyndication.com"+b,d=td(a)-b.length;if(d<0)return"";a.g.sort((f,h)=>f-h);b=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],g=a.h[h];for(let k=0;k<g.length;k++){if(!d){b=b==null?h:b;break}let l=rd(g[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=b==null?h:b}}}a="";b!=null&&(a=`${e}${"trn"}=${b}`);return c+a}var vd=class{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function wd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{pd(e),c=a.m(b,new ed(f,{message:fd(f)}),void 0,void 0)}catch(h){a.l(217,h)}if(c){let h,g;(h=window.console)==null||(g=h.error)==null||g.call(h,f)}else throw f;}return d}function xd(a,b){var c=yd;return(...d)=>wd(c,a,()=>b.apply(void 0,d))}
var Bd=class{constructor(a=null){this.pinger=zd;this.g=a;this.h=null;this.i=!1;this.m=this.l}l(a,b,c,d,e){e=e||"jserror";let f=void 0;try{const O=new vd;var h=O;h.g.push(1);h.h[1]=qd("context",a);b.error&&b.meta&&b.id||(b=new ed(b,{message:fd(b)}));h=b;if(h.msg){b=O;var g=h.msg.substring(0,512);b.g.push(2);b.h[2]=qd("msg",g)}var k=h.meta||{};g=k;if(this.h)try{this.h(g)}catch(D){}if(d)try{d(g)}catch(D){}d=O;k=[k];d.g.push(3);d.h[3]=k;d=m;k=[];let Q;g=null;do{var l=d;try{var n;if(n=!!l&&l.location.href!=
null)b:{try{Wa(l.foo);n=!0;break b}catch(D){}n=!1}var p=n}catch(D){p=!1}p?(Q=l.location.href,g=l.document&&l.document.referrer||null):(Q=g,g=null);k.push(new id(Q||""));try{d=l.parent}catch(D){d=null}}while(d&&l!=d);for(let D=0,Kc=k.length-1;D<=Kc;++D)k[D].depth=Kc-D;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(p=1;p<k.length;++p){var q=k[p];q.url||(q.url=l.location.ancestorOrigins[p-1]||"",q.W=!0)}var z=k;let aa=new id(m.location.href,!1);l=null;
const tb=z.length-1;for(q=tb;q>=0;--q){var u=z[q];!l&&gd.test(u.url)&&(l=u);if(u.url&&!u.W){aa=u;break}}u=null;const $d=z.length&&z[tb].url;aa.depth!=0&&$d&&(u=z[tb]);f=new hd(aa,u);if(f.h){z=O;var A=f.h.url||"";z.g.push(4);z.h[4]=qd("top",A)}var T={url:f.g.url||""};if(f.g.url){const D=f.g.url.match(xa);var L=D[1],la=D[3],Lc=D[4];A="";L&&(A+=L+":");la&&(A+="//",A+=la,Lc&&(A+=":"+Lc));var Mc=A}else Mc="";L=O;T=[T,{url:Mc}];L.g.push(5);L.h[5]=T;Ad(this.pinger,e,O,this.i,c)}catch(O){try{let Q,aa;Ad(this.pinger,
e,{context:"ecmserr",rctx:a,msg:fd(O),url:(aa=(Q=f)==null?void 0:Q.g.url)!=null?aa:""},this.i,c)}catch(Q){}}return!0}};class Cd{};function Ad(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof vd?f=c:(f=new vd,Oc(c,(g,k)=>{var l=f;const n=l.l++;g=qd(k,g);l.g.push(n);l.h[n]=g}));const h=ud(f,"/pagead/gen_204?id="+b+"&");h&&Wc(m,h)}catch(f){}}function Dd(){var a=zd,b=window.google_srt;b>=0&&b<=1&&(a.g=b)}class Ed{constructor(){this.g=Math.random()}};const Fd=[fa,ha,ka,ia,ea,na,oa,ma,pa];function Gd(a,b){if(a instanceof r)return a;const c=sa(a,Fd);c===ca&&b(a);return c}
function Hd(a){var b=`${cd.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)ya(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");c<0&&(c=b.length);d=b.indexOf("?");let f;d<0||d>c?(d=c,f=""):f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};let zd,yd;
const Z=new class{constructor(a,b){this.h=[];this.i=b||m;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.h=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.g=od()||(c!=null?c:Math.random()<a)}start(a,b){if(!this.g)return null;a=new md(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Y&&od()&&Y.mark(b);return a}end(a){if(this.g&&typeof a.value==="number"){a.duration=(ld()||kd())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Y&&od()&&Y.mark(b);!this.g||
this.h.length>2048||this.h.push(a)}}}(1,window);var Id=()=>{window.google_measure_js_timing||(Z.g=!1,Z.h!==Z.i.google_js_reporting_queue&&(od()&&Array.prototype.forEach.call(Z.h,pd,void 0),Z.h.length=0))};(a=>{zd=a!=null?a:new Ed;typeof window.google_srt!=="number"&&(window.google_srt=Math.random());Dd();yd=new Bd(Z);yd.h=b=>{const c=Yc;c!==0&&(b.jc=String(c),b.shv=ad(c))};yd.i=!0;window.document.readyState=="complete"?Id():Z.g&&W(window,"load",()=>{Id()})})();
var Jd=(a,b)=>xd(a,b),Kd=(a,b)=>{var c=Cd;var d="V";c.V&&c.hasOwnProperty(d)||(d=new c,c.V=d);c=[];!b.eid&&c.length&&(b.eid=c.toString());Ad(zd,a,b,!0)};function Ld(a=window){return a};Nc({ua:0,ta:1,qa:2,la:3,ra:4,ma:5,sa:6,oa:7,pa:8,ka:9,na:10,va:11});Nc({xa:0,ya:1,wa:2});function Md(a){var b=new Nd;vb(b.j[x]|0);b=jc(b,1,Ib,2,!0);if(Array.isArray(a)){var c=a.length;for(let d=0;d<c;d++)b.push(Hb(a[d]))}else for(c of a)b.push(Hb(c))}var Nd=class extends U{};[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);Md([1,8,9,10,11,12,2,3,4,5,15,16,19,20,21,23]);Md([1,6,7,9,10,11,12,2,3,4,5,13,14,18,19,20,21,23]);Md([1,6,7,9,10,11,12,22,2,3,4,5,13,14,17,18,19,20,21,23]);new Nd;var Od=(a,b)=>{b=P(a,2)||b;if(!b)return"";if(N(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];oc(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Pd=(a,b=[])=>{b=b.length>0?b:dd("data-asoch-targets");a=pc(a);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=E(gc(f));h=E(h);const k=Math.max(f.length,h.length);for(let l=0;l<k;++l)f[l]==null&&(f[l]=h[l]);f=new qc(f)}e=oc(f,4);Ib(F(f,5))!=null&&e.set("nb",R(f,5).toString());c.push({element:b[g],data:f})}else Kd("gdn-asoch",{type:1,data:d})}return c},Sd=(a,b,c,d)=>{c=Od(b,c);if(c.length!==0){var e=d===609;if(Ba(c,"ase")==="2"&&d!==1087){var f;const h=!((f=X.featurePolicy)==null||!f.allowedFeatures().includes("attribution-reporting"));f=e?4:h?6:5;let g="";const k=
Ha(new Ja({url:c}),0);e||h&&(!k||k.version!==3)?(c=Qd(c,"nis",f.toString()),a.setAttribute("attributionsrc",g)):h&&k&&k.version===3&&(g=Qd(k.u,"nis",f.toString()),a.setAttribute("attributionsrc",g))}e&&I(b,uc,24)&&(e=M(b,uc,24),a.setAttribute("attributionDestination",P(e,2)),a.setAttribute("attributionSourceNonce",P(e,1)));(e=(e=$c(35))&&e.dataset.expanded?e.dataset.expanded:null)&&d===557&&(c=Rd(c,"expanded",e));ua(a,Gd(c,Hd(d)));a.target||(a.target=B(F(b,11))!=null?P(b,11):"_top")}},Td=a=>{for(const b of a)if(a=
b.data,b.element.tagName=="A"&&!N(a,1)){const c=b.element;Sd(c,a,c.href,609)}},Rd=(a,b,c)=>{b=encodeURIComponent(b);const d=encodeURIComponent(c);c=new RegExp("[?&]"+b+"=([^&]+)");const e=c.exec(a);b=b+"="+d;return e?a.replace(c,e[0].charAt(0)+b):a.replace("?","?"+b+"&")},Ud=a=>{const b=m.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&I(a,Ac,8)){const d=P(M(a,Ac,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,P(M(a,Ac,8),6));break}}},Vd=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&I(a,
V,12)&&(d.push(M(a,V,12)),c.push(M(a,V,12).D()));e=(f,h)=>{if(h)for(const g of d)h[g.D()]&&g.Y(!0)};a=m.oneAfmaInstance;for(const f of c){let h;(h=a)==null||h.canOpenAndroidApp(f,e,()=>{},b)}},Xd=(a,b,c,d)=>{if(!b||!I(b,Ac,8))return!1;const e=M(b,Ac,8);let f=P(e,2);oc(b,10).forEach((g,k)=>{f=Rd(f,k,g)});Wd(b)&&N(b,15)&&!/[?&]label=/.test(c)&&(c=Qd(c,"label","deep_link_fallback"));const h=g=>d.openStoreOverlay(g,void 0,P(e,6));return d.redirectForStoreU2({clickUrl:c,trackingUrl:P(e,3),finalUrl:f,pingFunc:N(b,
13)?d.httpTrack:d.click,openFunc:(a==null?0:N(a,1))?h:d.openIntentOrNativeApp,isExternalClickUrl:N(b,13)})},Yd=(a,b,c,d)=>{c&&c.startsWith("intent:")?d.openIntentOrNativeApp(c):a?b?d.openBrowser(c):d.openChromeCustomTab(c):d.openSystemBrowser(c,{useFirstPackage:!0,useRunningProcess:!0})},ae=(a,b,c,d,e,f,h,g=!1,k=!1)=>{const l=N(e,15);if(!k&&l&&B(F(e,22))!=null)Yd(c,d,P(e,22),h);else{var n=Ha(new Ja({url:f}),0);k=l&&(n&&n.version===3||k);if(a&&b&&!k&&(f=Zd(f,h.click,!0),g&&(e==null?0:N(e,21))))return;
Yd(c,d,f,h)}},Zd=(a,b=null,c=!1)=>{if(b===null){({Z:b}={});var d=new Ja({url:a,Z:b});d.B?(b=Ha(d,1))?(fetch(b.u,{method:"GET",keepalive:!0,mode:"no-cors",redirect:"follow"}),b=b.C):b=a:b=(b=Ha(d,0))?navigator.sendBeacon?navigator.sendBeacon(b.u,"")?b.C:Ia(d,2):Ia(d,0):a;return b}d=Ha(new Ja({url:a}),0);if(!d)return a;a=d.u;if(d.version===4&&c){var e=encodeURIComponent("ase");c=encodeURIComponent("3");e=new RegExp("[?&]"+e+"=([^&]+)","g");let f=0;const h=[];for(let g=e.exec(a);g!==null;){if(g[1]==
c){let k=g[0].charAt(0)=="?"?1:0;h.push(a.slice(f,g.index+k));f=g.index+g[0].length+k}g=e.exec(a)}h.push(a.slice(f));a=h.join("")}b(a);return d.C},be=(a,b=!0)=>{b&&cd.fetch?cd.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Wc(cd,a)}):Wc(cd,a)},Qd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Wd=a=>{for(const b of Cc(a))if(R(b,1)===3&&P(b,2))return!0;return!1};var ce=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&a.length==2?a[1]:"";var de=class extends U{};function ee(a,b){return S(a,2,b)}function fe(a,b){return S(a,3,b)}function ge(a,b){return S(a,4,b)}function he(a,b){return S(a,5,b)}function ie(a,b){return S(a,9,b)}function je(a,b){{const l=a.j;let n=l[x]|0;vb(n);if(b==null)H(l,n,10);else{var c=b[x]|0,d=c,e=K(c),f=e||Object.isFrozen(b),h=!0,g=!0;for(let p=0;p<b.length;p++){var k=b[p];e||(k=!!((k.j[x]|0)&2),h&&(h=!k),g&&(g=k))}e||(c=h?13:5,c=g?c|16:c&-17);f&&c===d||(b=y(b),d=0,c=J(c,n),c=mc(c,n,!0));c!==d&&(b[x]=c);H(l,n,10,b)}}return a}
function ke(a,b){return G(a,11,Gb(b))}function le(a,b){return S(a,1,b)}function me(a,b){return G(a,7,Gb(b))}var ne=class extends U{};const oe="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function pe(a){let b;return(b=a.google_tag_data)!=null?b:a.google_tag_data={}}function qe(a){let b,c;return typeof((b=a.navigator)==null?void 0:(c=b.userAgentData)==null?void 0:c.getHighEntropyValues)==="function"}
function re(){var a=window;if(!qe(a))return null;const b=pe(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(oe).then(c=>{b.uach!=null||(b.uach=c);return c});return b.uach_promise=a}
function se(a){let b;return ke(je(he(ee(le(ge(me(ie(fe(new ne,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),((b=a.fullVersionList)==null?void 0:b.map(c=>{var d=new de;d=S(d,1,c.brand);return S(d,2,c.version)}))||[]),a.wow64||!1)}function te(){let a,b;return(b=(a=re())==null?void 0:a.then(c=>se(c)))!=null?b:null};function ue(a){for(const b of a)if(b.element.tagName=="A"){a=b.element;const c=b.data;B(F(c,2))==null&&S(c,2,a.href)}}function ve(a,b){return va(a,c=>c.element===b)}function we(a){Tc(Jd(556,()=>{new xe(a||{})}))}
function ye(a,b){if(!b.defaultPrevented||a.J===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||e.tagName!="A"||(d=e);var f=e.hasAttribute("data-asoch-targets"),h=e.hasAttribute("data-asoch-fixed-value");if(!c)if(h)c=new qc(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if(e.tagName=="A"||f)if(f=f&&e.getAttribute("data-asoch-is-dynamic")==="true"?Pd(a.h,[e]):a.g,f=ve(f,e))c=f.data;e=e.parentElement}e=c&&!N(c,1);if(a.G&&a.l&&b.defaultPrevented)ze(a,b,d,e?c:a.l);else{if(e){if(!a.G&&b.defaultPrevented){ze(a,
b,d,c);return}f=c;for(var g of jc(f,6,B,void 0===yb?2:4))be(g)}a.M&&e&&N(c,21)&&(Pc(b),(g=c)&&P(g,2)&&(f=Rd(P(g,2),"ae","1"),S(g,2,f)));if(d&&e){c=e?c:null;(g=ve(a.g,d))?g=g.data:(g=new qc,S(g,2,d.href),S(g,11,d.target||"_top"),a.g.push({element:d,data:g}));Sd(d,c||g,P(g,2),557);Ae(a,b,d,c);for(var k of jc(a.h,17,B,void 0===yb?2:4))g=X.body,e={},typeof window.CustomEvent==="function"?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),
g.dispatchEvent(f);var l;if(c==null?0:(l=M(c,Bc,26))==null?0:B(F(l,1))!=null){l=new vc;Ib(F(c,5))!=null?(k=l,g=R(c,5),tc(k,1,g)):(k=ce(d.href,"nb"),k!=""&&tc(l,1,+k));k=ce(d.href,"nx");k!=""&&sc(l,2,+k);k=ce(d.href,"ny");k!=""&&sc(l,3,+k);k=ce(d.href,"bg");k!=""&&S(l,4,k);k=ce(d.href,"nm");k!=""&&sc(l,5,+k);k=ce(d.href,"mb");k!=""&&sc(l,6,+k);k=d.href;g=k.search(Aa);e=0;for(h=[];(f=za(k,e,"bg",g))>=0;)h.push(k.substring(e,f)),e=Math.min(k.indexOf("&",f)+1||g,g);h.push(k.slice(e));k=h.join("").replace(Ca,
"$1");ua(d,Gd(k,Hd(1211)));f=P(M(c,Bc,26),1);k=P(M(c,Bc,26),2);g=Jb(F(c,20))!=null?rc(c,20):null;h=JSON.stringify(E(l));l=a.o;e=Ld(m);var n=new Ec;f=S(n,1,f);f=S(f,4,h);f=S(f,10,Date.now().toString());g!==null&&sc(f,2,g);l!==null&&S(f,3,l);tc(f,9,7);var p;e==null||(p=e.fence)==null||p.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation_start",eventData:JSON.stringify(f),destination:["buyer"],once:!0});var q;e==null||(q=e.fence)==null||q.reportEvent({eventType:"click",eventData:k,
destination:["component-seller"]})}N(a.h,16)||a.P?Be(a,b,d,c):(p="",(q=m.oneAfmaInstance)&&(p=q.appendClickSignals(d.href)),Ce(a,b,d,c,p))}}}}
function ze(a,b,c,d){if(a.J===b&&a.K){const f=new xc(a.K),h=P(d,9);var e="";switch(R(f,4,1)){case 2:if(rc(f,2))e="blocked_fast_click";else if(P(f,1)||P(f,7))e="blocked_border_click";break;case 3:e=X;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const g=window;if(typeof g.copfcChm==="function"&&e){d=gc(d);tc(d,5,12);oc(d,4).set("nb",(12).toString());const k=ve(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.U&&c&&(Ae(a,b,c,d),S(d,2,c.href));g.copfcChm(b,Od(d,e.href),null,I(f,
wc,10)?JSON.stringify(E(M(f,wc,10))):null);a.U&&Ae(a,b,e,d)}e="onepointfiveclick_first_click"}h&&e&&(c=h+"&label="+e,e==="onepointfiveclick_first_click"&&(c+="&ccx="+b.clientX+"&ccy="+b.clientY),be(c,!1));bd(a.R)}}
function Ae(a,b,c,d){if(!N(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(ua(c,Gd(e[0],Hd(557)));!c.id;)if(f="asoch-id-"+(Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),!X.getElementById(f)){c.id=f;break}f=c.id;typeof window.xy==="function"&&window.xy(b,c,X.body);typeof window.mb==="function"&&window.mb(c);typeof window.bgz==="function"&&window.bgz(f);typeof window.ja===
"function"&&window.ja(f,d?R(d,5):0);typeof window.vti==="function"&&window.vti(c);a.i&&typeof window.ss==="function"&&(a.T?window.ss(f,1,a.i):window.ss(a.i,1));if(e.length>0){let h;b=a.o.length>0&&(d==null||(h=M(d,Bc,26))==null||B(F(h,1))==null)?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1];ua(c,Gd(b,Hd(557)))}}}
async function Be(a,b,c,d){let e="";var f=m.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.P)){if(a.ba)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Qd(e,"nas",f.encodedNas)}}Ce(a,b,c,d,e)}
function Ce(a,b,c,d,e){a.O++;a.A<0&&(a.A=Date.now());const f=N(a.h,2),h=f&&Date.now()-a.S>300,g=m.oneAfmaInstance;g?(Pc(b),(()=>{let k=N(d,13)?e:g.logScionEventAndAddParam(e);if(!a.B&&d&&I(d,V,12)){var l=M(d,V,12).D();if(Cc(d).length>0)for(const n of Cc(d));N(M(d,V,12),2)?(g.click(k),g.openAndroidApp(l),l=!0):l=!1}else l=!1;l||Xd(a.m,d,k,g)||ae(f,h,a.da,a.B,d,k,g,a.M,a.ca)})()):(b=window,a.aa&&b.pawsig&&typeof b.pawsig.clk==="function"?(Kd("paw_sigs",{msg:"click",count:a.O.toString(),elapsed:(Date.now()-
a.A).toString()}),b.pawsig.clk(c)):h&&(b=c.getAttribute("attributionsrc")!=null&&Ba(c.getAttribute("attributionsrc"),"nis")==="6"?Zd(c.href,()=>{}):Zd(c.href),b!==c.href&&ua(c,Gd(b,Hd(599)))));h&&(a.S=Date.now());bd(a.R)}
var xe=class{constructor(a){this.B=Za||Xa||$a||Ya;var b=dd("data-asoch-meta");if(b.length!==1)Kd("gdn-asoch",{type:2,data:b.length});else{this.R=70;this.h=new Dc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.N=a["extra-meta"]?new Dc(JSON.parse(a["extra-meta"])):null;this.P=a["is-fsn"]==="true";this.ba=a["is-tap-disabled-for-fsn"]==="true";this.m=a["ios-store-overlay-config"]?new yc(JSON.parse(a["ios-store-overlay-config"])):null;this.da=a["use-cct-over-browser"]==="true";this.U=a["correct-redirect-url-for-och-15-click"]===
"true";this.ca=a["spitzer-use-click-url-for-fallback"]==="true";this.G=a["default-msg-in-och"]==="true";this.aa=a["enable-paw"]==="true";this.M=a["allow-redirection-muted-in-och"]==="true";this.o="";b=te();b!=null&&b.then(d=>{var e=JSON.stringify(E(d));d=[];var f=0;for(var h=0;h<e.length;h++){var g=e.charCodeAt(h);g>255&&(d[f++]=g&255,g>>=8);d[f++]=g}e=3;e===void 0&&(e=0);if(!bb)for(bb={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],
g=0;g<5;g++){var k=f.concat(h[g].split(""));ab[g]=k;for(var l=0;l<k.length;l++){var n=k[l];bb[n]===void 0&&(bb[n]=l)}}e=ab[e];f=Array(Math.floor(d.length/3));h=e[64]||"";for(g=k=0;k<d.length-2;k+=3){var p=d[k],q=d[k+1];n=d[k+2];l=e[p>>2];p=e[(p&3)<<4|q>>4];q=e[(q&15)<<2|n>>6];n=e[n&63];f[g++]=l+p+q+n}l=0;n=h;switch(d.length-k){case 2:l=d[k+1],n=e[(l&15)<<2]||h;case 1:d=d[k],f[g]=e[d>>2]+e[(d&3)<<4|l>>4]+n+h}this.o=f.join("")});this.g=Pd(this.h);this.G&&(this.l=null,pc(this.h).forEach(d=>{this.l!=
null||B(F(d,2))==null||B(F(d,9))==null||N(d,13)||(this.l=d)}));this.ea=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.S=-Infinity;this.A=this.O=0;this.i=P(this.h,5)||"";this.T=N(this.h,11);this.N&&(this.T=N(this.N,11));this.K=this.J=null;N(this.h,3)||(Td(this.g),G(this.h,3,Gb(!0)));ue(this.g);a=m.oneAfmaInstance;!this.B&&a&&Vd(this.g,this.ea);var c;if(a&&((c=this.m)==null?0:N(c,2)))switch(c=()=>{const d=rc(this.m,4);d>0?m.setTimeout(()=>{Ud(this.g)},d):Ud(this.g)},R(this.m,3)){case 1:a.runOnOnShowEvent(c);
break;case 2:Uc(c);break;default:Ud(this.g)}W(X,"click",Jd(557,d=>{ye(this,d)}),Gc);W(X,"auxclick",Jd(557,d=>{d.button===1&&ye(this,d)}),Gc);this.i&&typeof window.ss==="function"&&W(X.body,"mouseover",Jd(626,()=>{window.ss(this.i,0)}),Hc);typeof window.ivti==="function"&&window.ivti(X.body);c=window;c.googqscp&&typeof c.googqscp.registerCallback==="function"&&c.googqscp.registerCallback((d,e)=>{this.J=d;this.K=e});Zc()}}};var De=Jd(555,a=>we(a));Yc=70;const Ee=$c(70,document.currentScript);if(Ee==null)throw Error("JSC not found 70");const Fe={},Ge=Ee.attributes;for(let a=Ge.length-1;a>=0;a--){const b=Ge[a].name;b.indexOf("data-jcp-")===0&&(Fe[b.substring(9)]=Ge[a].value)}De(Fe);}).call(this);
