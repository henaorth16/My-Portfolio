import{m as cr,R as At,r as S,j as yt}from"./index-b4dd206d.js";function fr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function dr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var lr=function(){function t(e){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=fr(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),I="-ms-",tt="-moz-",h="-webkit-",Lt="comm",St="rule",Ct="decl",mr="@import",Ft="@keyframes",ur="@layer",pr=Math.abs,rt=String.fromCharCode,hr=Object.assign;function yr(t,r){return R(t,0)^45?(((r<<2^R(t,0))<<2^R(t,1))<<2^R(t,2))<<2^R(t,3):0}function Bt(t){return t.trim()}function gr(t,r){return(t=r.exec(t))?t[0]:t}function y(t,r,e){return t.replace(r,e)}function gt(t,r){return t.indexOf(r)}function R(t,r){return t.charCodeAt(r)|0}function j(t,r,e){return t.slice(r,e)}function P(t){return t.length}function Et(t){return t.length}function q(t,r){return r.push(t),t}function br(t,r){return t.map(r).join("")}var et=1,L=1,jt=0,N=0,$=0,F="";function nt(t,r,e,n,a,s,i){return{value:t,root:r,parent:e,type:n,props:a,children:s,line:et,column:L,length:i,return:""}}function B(t,r){return hr(nt("",null,null,"",null,null,0),t,{length:-t.length},r)}function xr(){return $}function vr(){return $=N>0?R(F,--N):0,L--,$===10&&(L=1,et--),$}function A(){return $=N<jt?R(F,N++):0,L++,$===10&&(L=1,et++),$}function V(){return R(F,N)}function Z(){return N}function G(t,r){return j(F,t,r)}function D(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dt(t){return et=L=1,jt=P(F=t),N=0,[]}function Wt(t){return F="",t}function J(t){return Bt(G(N-1,bt(t===91?t+2:t===40?t+1:t)))}function wr(t){for(;($=V())&&$<33;)A();return D(t)>2||D($)>3?"":" "}function Sr(t,r){for(;--r&&A()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return G(t,Z()+(r<6&&V()==32&&A()==32))}function bt(t){for(;A();)switch($){case t:return N;case 34:case 39:t!==34&&t!==39&&bt($);break;case 40:t===41&&bt(t);break;case 92:A();break}return N}function Cr(t,r){for(;A()&&t+$!==47+10;)if(t+$===42+42&&V()===47)break;return"/*"+G(r,N-1)+"*"+rt(t===47?t:A())}function Er(t){for(;!D(V());)A();return G(t,N)}function $r(t){return Wt(Q("",null,null,null,[""],t=Dt(t),0,[0],t))}function Q(t,r,e,n,a,s,i,c,f){for(var l=0,m=0,u=i,v=0,O=0,b=0,d=1,E=1,x=1,p=0,C="",M=a,T=s,Y=n,w=C;E;)switch(b=p,p=A()){case 40:if(b!=108&&R(w,u-1)==58){gt(w+=y(J(p),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:w+=J(p);break;case 9:case 10:case 13:case 32:w+=wr(b);break;case 92:w+=Sr(Z()-1,7);continue;case 47:switch(V()){case 42:case 47:q(Or(Cr(A(),Z()),r,e),f);break;default:w+="/"}break;case 123*d:c[l++]=P(w)*x;case 125*d:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+m:x==-1&&(w=y(w,/\f/g,"")),O>0&&P(w)-u&&q(O>32?Mt(w+";",n,e,u-1):Mt(y(w," ","")+";",n,e,u-2),f);break;case 59:w+=";";default:if(q(Y=zt(w,r,e,l,m,a,c,C,M=[],T=[],u),s),p===123)if(m===0)Q(w,r,Y,Y,M,s,u,c,T);else switch(v===99&&R(w,3)===110?100:v){case 100:case 108:case 109:case 115:Q(t,Y,Y,n&&q(zt(t,Y,Y,0,0,a,c,C,a,M=[],u),T),a,T,u,c,n?M:T);break;default:Q(w,Y,Y,Y,[""],T,0,c,T)}}l=m=O=0,d=x=1,C=w="",u=i;break;case 58:u=1+P(w),O=b;default:if(d<1){if(p==123)--d;else if(p==125&&d++==0&&vr()==125)continue}switch(w+=rt(p),p*d){case 38:x=m>0?1:(w+="\f",-1);break;case 44:c[l++]=(P(w)-1)*x,x=1;break;case 64:V()===45&&(w+=J(A())),v=V(),m=u=P(C=w+=Er(Z())),p++;break;case 45:b===45&&P(w)==2&&(d=0)}}return s}function zt(t,r,e,n,a,s,i,c,f,l,m){for(var u=a-1,v=a===0?s:[""],O=Et(v),b=0,d=0,E=0;b<n;++b)for(var x=0,p=j(t,u+1,u=pr(d=i[b])),C=t;x<O;++x)(C=Bt(d>0?v[x]+" "+p:y(p,/&\f/g,v[x])))&&(f[E++]=C);return nt(t,r,e,a===0?St:c,f,l,m)}function Or(t,r,e){return nt(t,r,e,Lt,rt(xr()),j(t,2,-2),0)}function Mt(t,r,e,n){return nt(t,r,e,Ct,j(t,0,n),j(t,n+1,-1),n)}function _(t,r){for(var e="",n=Et(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function kr(t,r,e,n){switch(t.type){case ur:if(t.children.length)break;case mr:case Ct:return t.return=t.return||t.value;case Lt:return"";case Ft:return t.return=t.value+"{"+_(t.children,n)+"}";case St:t.value=t.props.join(",")}return P(e=_(t.children,n))?t.return=t.value+"{"+e+"}":""}function Rr(t){var r=Et(t);return function(e,n,a,s){for(var i="",c=0;c<r;c++)i+=t[c](e,n,a,s)||"";return i}}function Ir(t){return function(r){r.root||(r=r.return)&&t(r)}}var Nr=function(r,e,n){for(var a=0,s=0;a=s,s=V(),a===38&&s===12&&(e[n]=1),!D(s);)A();return G(r,N)},Ar=function(r,e){var n=-1,a=44;do switch(D(a)){case 0:a===38&&V()===12&&(e[n]=1),r[n]+=Nr(N-1,e,n);break;case 2:r[n]+=J(a);break;case 4:if(a===44){r[++n]=V()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=rt(a)}while(a=A());return r},zr=function(r,e){return Wt(Ar(Dt(r),e))},Tt=new WeakMap,Mr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Tt.get(n))&&!a){Tt.set(r,!0);for(var s=[],i=zr(e,s),c=n.props,f=0,l=0;f<i.length;f++)for(var m=0;m<c.length;m++,l++)r.props[l]=s[f]?i[f].replace(/&\f/g,c[m]):c[m]+" "+i[f]}}},Tr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ut(t,r){switch(yr(t,r)){case 5103:return h+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return h+t+tt+t+I+t+t;case 6828:case 4268:return h+t+I+t+t;case 6165:return h+t+I+"flex-"+t+t;case 5187:return h+t+y(t,/(\w+).+(:[^]+)/,h+"box-$1$2"+I+"flex-$1$2")+t;case 5443:return h+t+I+"flex-item-"+y(t,/flex-|-self/,"")+t;case 4675:return h+t+I+"flex-line-pack"+y(t,/align-content|flex-|-self/,"")+t;case 5548:return h+t+I+y(t,"shrink","negative")+t;case 5292:return h+t+I+y(t,"basis","preferred-size")+t;case 6060:return h+"box-"+y(t,"-grow","")+h+t+I+y(t,"grow","positive")+t;case 4554:return h+y(t,/([^-])(transform)/g,"$1"+h+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+t+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,h+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(t)-1-r>6)switch(R(t,r+1)){case 109:if(R(t,r+4)!==45)break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+tt+(R(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~gt(t,"stretch")?Ut(y(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(R(t,r+1)!==115)break;case 6444:switch(R(t,P(t)-3-(~gt(t,"!important")&&10))){case 107:return y(t,":",":"+h)+t;case 101:return y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+h+(R(t,14)===45?"inline-":"")+"box$3$1"+h+"$2$3$1"+I+"$2box$3")+t}break;case 5936:switch(R(t,r+11)){case 114:return h+t+I+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return h+t+I+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return h+t+I+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return h+t+I+t+t}return t}var Yr=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case Ct:r.return=Ut(r.value,r.length);break;case Ft:return _([B(r,{value:y(r.value,"@","@"+h)})],a);case St:if(r.length)return br(r.props,function(s){switch(gr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _([B(r,{props:[y(s,/:(read-\w+)/,":"+tt+"$1")]})],a);case"::placeholder":return _([B(r,{props:[y(s,/:(plac\w+)/,":"+h+"input-$1")]}),B(r,{props:[y(s,/:(plac\w+)/,":"+tt+"$1")]}),B(r,{props:[y(s,/:(plac\w+)/,I+"input-$1")]})],a)}return""})}},Pr=[Yr],Xr=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var E=d.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=r.stylisPlugins||Pr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(d){for(var E=d.getAttribute("data-emotion").split(" "),x=1;x<E.length;x++)s[E[x]]=!0;c.push(d)});var f,l=[Mr,Tr];{var m,u=[kr,Ir(function(d){m.insert(d)})],v=Rr(l.concat(a,u)),O=function(E){return _($r(E),v)};f=function(E,x,p,C){m=p,O(E?E+"{"+x.styles+"}":x.styles),C&&(b.inserted[x.name]=!0)}}var b={key:e,sheet:new lr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return b.sheet.hydrate(c),b},Vr=!0;function Gt(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):n+=a+" "}),n}var $t=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||Vr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},qt=function(r,e,n){$t(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function _r(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fr=/[A-Z]|^ms/g,Br=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ht=function(r){return r.charCodeAt(1)===45},Yt=function(r){return r!=null&&typeof r!="boolean"},pt=cr(function(t){return Ht(t)?t:t.replace(Fr,"-$&").toLowerCase()}),Pt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Br,function(n,a,s){return X={name:a,styles:s,next:X},a})}return Lr[r]!==1&&!Ht(r)&&typeof e=="number"&&e!==0?e+"px":e};function W(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return X={name:e.name,styles:e.styles,next:X},e.name;if(e.styles!==void 0){var n=e.next;if(n!==void 0)for(;n!==void 0;)X={name:n.name,styles:n.styles,next:X},n=n.next;var a=e.styles+";";return a}return jr(t,r,e)}case"function":{if(t!==void 0){var s=X,i=e(t);return X=s,W(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function jr(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=W(t,r,e[a])+";";else for(var s in e){var i=e[s];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=s+"{"+r[i]+"}":Yt(i)&&(n+=pt(s)+":"+Pt(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)Yt(i[c])&&(n+=pt(s)+":"+Pt(s,i[c])+";");else{var f=W(t,r,i);switch(s){case"animation":case"animationName":{n+=pt(s)+":"+f+";";break}default:n+=s+"{"+f+"}"}}}return n}var Xt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,X,Ot=function(r,e,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";X=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,s+=W(n,e,i)):s+=i[0];for(var c=1;c<r.length;c++)s+=W(n,e,r[c]),a&&(s+=i[c]);Xt.lastIndex=0;for(var f="",l;(l=Xt.exec(s))!==null;)f+="-"+l[1];var m=_r(s)+f;return{name:m,styles:s,next:X}},Dr=function(r){return r()},Wr=At["useInsertionEffect"]?At["useInsertionEffect"]:!1,Kt=Wr||Dr,kt={}.hasOwnProperty,Zt=S.createContext(typeof HTMLElement<"u"?Xr({key:"css"}):null);Zt.Provider;var Jt=function(r){return S.forwardRef(function(e,n){var a=S.useContext(Zt);return r(e,a,n)})},Qt=S.createContext({}),xt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ur=function(r,e){var n={};for(var a in e)kt.call(e,a)&&(n[a]=e[a]);return n[xt]=r,n},Gr=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return $t(e,n,a),Kt(function(){return qt(e,n,a)}),null},qr=Jt(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[xt],s=[n],i="";typeof t.className=="string"?i=Gt(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=Ot(s,void 0,S.useContext(Qt));i+=r.key+"-"+c.name;var f={};for(var l in t)kt.call(t,l)&&l!=="css"&&l!==xt&&(f[l]=t[l]);return f.ref=e,f.className=i,S.createElement(S.Fragment,null,S.createElement(Gr,{cache:r,serialized:c,isStringTag:typeof a=="string"}),S.createElement(a,f))}),Hr=qr,Kr=yt.Fragment;function k(t,r,e){return kt.call(r,"css")?yt.jsx(Hr,Ur(t,r),e):yt.jsx(t,r,e)}function tr(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return Ot(r)}var o=function(){var r=tr.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Zr=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var s=r[n];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function Jr(t,r,e){var n=[],a=Gt(t,n,e);return n.length<2?e:a+r(n)}var Qr=function(r){var e=r.cache,n=r.serializedArr;return Kt(function(){for(var a=0;a<n.length;a++)qt(e,n[a],!1)}),null},ht=Jt(function(t,r){var e=!1,n=[],a=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];var v=Ot(m,r.registered);return n.push(v),$t(r,v,!1),r.key+"-"+v.name},s=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];return Jr(r.registered,a,Zr(m))},i={css:a,cx:s,theme:S.useContext(Qt)},c=t.children(i);return e=!0,S.createElement(S.Fragment,null,S.createElement(Qr,{cache:r,serializedArr:n}),c)}),te=Object.defineProperty,re=(t,r,e)=>r in t?te(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,H=(t,r,e)=>(re(t,typeof r!="symbol"?r+"":r,e),e),vt=new Map,K=new WeakMap,Vt=0,ee=void 0;function ne(t){return t?(K.has(t)||(Vt+=1,K.set(t,Vt.toString())),K.get(t)):"0"}function ae(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?ne(t.root):t[r]}`).toString()}function se(t){let r=ae(t),e=vt.get(r);if(!e){const n=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&a.some(m=>c.intersectionRatio>=m);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=n.get(c.target))==null||f.forEach(m=>{m(l,c)})})},t);a=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:n},vt.set(r,e)}return e}function rr(t,r,e={},n=ee){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const f=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:a,observer:s,elements:i}=se(e);let c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),s.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),vt.delete(a))}}function oe(t){return typeof t.children!="function"}var _t=class extends S.Component{constructor(t){super(t),H(this,"node",null),H(this,"_unobserveCb",null),H(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),H(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),oe(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:s}=this.props;this._unobserveCb=rr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:O,entry:b}=this.state;return t({inView:O,entry:b,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:s,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:m,fallbackInView:u,...v}=this.props;return S.createElement(r||"div",{ref:this.handleNode,...v},t)}};function er({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var m;const[u,v]=S.useState(null),O=S.useRef(),[b,d]=S.useState({inView:!!c,entry:void 0});O.current=l,S.useEffect(()=>{if(i||!u)return;let C;return C=rr(u,(M,T)=>{d({inView:M,entry:T}),O.current&&O.current(M,T),T.isIntersecting&&s&&C&&(C(),C=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,u,a,n,s,i,e,f,r]);const E=(m=b.entry)==null?void 0:m.target,x=S.useRef();!u&&E&&!s&&!i&&x.current!==E&&(x.current=E,d({inView:!!c,entry:void 0}));const p=[v,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}var nr={exports:{}},g={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt=Symbol.for("react.element"),It=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),ct=Symbol.for("react.context"),ie=Symbol.for("react.server_context"),ft=Symbol.for("react.forward_ref"),dt=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),ar;ar=Symbol.for("react.module.reference");function z(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Rt:switch(t=t.type,t){case at:case ot:case st:case dt:case lt:return t;default:switch(t=t&&t.$$typeof,t){case ie:case ct:case ft:case ut:case mt:case it:return t;default:return r}}case It:return r}}}g.ContextConsumer=ct;g.ContextProvider=it;g.Element=Rt;g.ForwardRef=ft;g.Fragment=at;g.Lazy=ut;g.Memo=mt;g.Portal=It;g.Profiler=ot;g.StrictMode=st;g.Suspense=dt;g.SuspenseList=lt;g.isAsyncMode=function(){return!1};g.isConcurrentMode=function(){return!1};g.isContextConsumer=function(t){return z(t)===ct};g.isContextProvider=function(t){return z(t)===it};g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rt};g.isForwardRef=function(t){return z(t)===ft};g.isFragment=function(t){return z(t)===at};g.isLazy=function(t){return z(t)===ut};g.isMemo=function(t){return z(t)===mt};g.isPortal=function(t){return z(t)===It};g.isProfiler=function(t){return z(t)===ot};g.isStrictMode=function(t){return z(t)===st};g.isSuspense=function(t){return z(t)===dt};g.isSuspenseList=function(t){return z(t)===lt};g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===at||t===ot||t===st||t===dt||t===lt||t===ce||typeof t=="object"&&t!==null&&(t.$$typeof===ut||t.$$typeof===mt||t.$$typeof===it||t.$$typeof===ct||t.$$typeof===ft||t.$$typeof===ar||t.getModuleId!==void 0)};g.typeOf=z;nr.exports=g;var fe=nr.exports;o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const de=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,le=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xe=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ve=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,we=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Se({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=Nt,iterationCount:a=1}){return tr`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Ce(t){return t==null}function Ee(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function sr(t,r){return e=>e?t():r()}function U(t){return sr(t,()=>null)}function wt(t){return U(()=>({opacity:0}))(t)}const or=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:s=0,keyframes:i=Nt,triggerOnce:c=!1,className:f,style:l,childClassName:m,childStyle:u,children:v,onVisibilityChange:O}=t,b=S.useMemo(()=>Se({keyframes:i,duration:a}),[a,i]);return Ce(v)?null:Ee(v)?k(Oe,{...t,animationStyles:b,children:String(v)}):fe.isFragment(v)?k(ir,{...t,animationStyles:b}):k(Kr,{children:S.Children.map(v,(d,E)=>{if(!S.isValidElement(d))return null;const x=n+(r?E*a*e:0);switch(d.type){case"ol":case"ul":return k(ht,{children:({cx:p})=>k(d.type,{...d.props,className:p(f,d.props.className),style:Object.assign({},l,d.props.style),children:k(or,{...t,children:d.props.children})})});case"li":return k(_t,{threshold:s,triggerOnce:c,onChange:O,children:({inView:p,ref:C})=>k(ht,{children:({cx:M})=>k(d.type,{...d.props,ref:C,className:M(m,d.props.className),css:U(()=>b)(p),style:Object.assign({},u,d.props.style,wt(!p),{animationDelay:x+"ms"})})})});default:return k(_t,{threshold:s,triggerOnce:c,onChange:O,children:({inView:p,ref:C})=>k("div",{ref:C,className:f,css:U(()=>b)(p),style:Object.assign({},l,wt(!p),{animationDelay:x+"ms"}),children:k(ht,{children:({cx:M})=>k(d.type,{...d.props,className:M(m,d.props.className),style:Object.assign({},u,d.props.style)})})})})}})})},$e={display:"inline-block",whiteSpace:"pre"},Oe=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:m,onVisibilityChange:u}=t,{ref:v,inView:O}=er({triggerOnce:c,threshold:i,onChange:u});return sr(()=>k("div",{ref:v,className:f,style:Object.assign({},l,$e),children:m.split("").map((b,d)=>k("span",{css:U(()=>r)(O),style:{animationDelay:a+d*s*n+"ms"},children:b},d))}),()=>k(ir,{...t,children:m}))(e)},ir=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=er({triggerOnce:n,threshold:e,onChange:c});return k("div",{ref:f,className:a,css:U(()=>r)(l),style:Object.assign({},s,wt(!l)),children:i})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ke=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Re=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ie=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ne=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ae=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ze=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Me=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Te=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ye=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Pe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Xe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ve=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,_e=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Le(t,r,e){switch(e){case"bottom-left":return r?Re:le;case"bottom-right":return r?Ie:me;case"down":return t?r?Ae:pe:r?Ne:ue;case"left":return t?r?Me:he:r?ze:Nt;case"right":return t?r?Ye:ge:r?Te:ye;case"top-left":return r?Pe:be;case"top-right":return r?Xe:xe;case"up":return t?r?_e:we:r?Ve:ve;default:return r?ke:de}}const Be=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,s=S.useMemo(()=>Le(r,n,e),[r,e,n]);return k(or,{keyframes:s,...a})};o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{Be as F};
