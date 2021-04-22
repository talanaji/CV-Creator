/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}for(var o,s,a,l,c,h,f,u,d,p,g,m,_,v,E,y,b,T,C,w,I,A,D,S,O,N,k,L,P,x,R,j,H,M,W,U,F,B,K,V,Q,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ft,ut,dt,pt,gt=function(t){var e=!1;function n(e){var n=this,r=!1;return t(this).one(i.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],s=e[r],a=s&&i.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(s="alert",l="."+(a="bs.alert"),c=(o=e).fn[s],h={CLOSE:"close"+l,CLOSED:"closed"+l,CLICK_DATA_API:"click"+l+".data-api"},f="alert",u="fade",d="show",p=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,a),this._element=null},e._getRootElement=function(t){var e=gt.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(h.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(d),gt.supportsTransitionEnd()&&o(t).hasClass(u)?o(t).one(gt.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(h.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(a);i||(i=new t(this),n.data(a,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),o.fn[s]=p._jQueryInterface,o.fn[s].Constructor=p,o.fn[s].noConflict=function(){return o.fn[s]=c,p._jQueryInterface},p),_t=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",C="focus",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',A="input",D=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:"focus"+v+E+" blur"+v+E},N=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(A)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(D)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},e.dispose=function(){g.removeData(this._element,_),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(_);n||(n=new t(this),g(this).data(_,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),vt=(L="carousel",x="."+(P="bs.carousel"),R=".data-api",j=(k=e).fn[L],H={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",U="prev",F="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+R,CLICK_DATA_API:"click"+x+R},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},Z=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=k(t)[0],this._indicatorsElement=k(this._element).find(J.INDICATORS)[0],this._transitionDuration=this._getTransitionDuration(),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(W)},e.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(U)},e.pause=function(t){t||(this._isPaused=!0),k(this._element).find(J.NEXT_PREV)[0]&&gt.supportsTransitionEnd()&&(gt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=k(this._element).find(J.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)k(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=t>n?W:U;this._slide(i,this._items[t])}},e.dispose=function(){k(this._element).off(x),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},H,t),gt.typeCheckConfig(L,t,M),t},e._getTransitionDuration=function(){var t=k(this._element).find(J.ITEM).css("transition-duration");return t?(t=t.split(",")[0]).indexOf("ms")>-1?parseFloat(t):1e3*parseFloat(t):0},e._addEventListeners=function(){var t=this;this._config.keyboard&&k(this._element).on(K.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(k(this._element).on(K.MOUSEENTER,function(e){return t.pause(e)}).on(K.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&k(this._element).on(K.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=k.makeArray(k(t).parent().find(J.ITEM)),this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===W,i=t===U,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===U?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),r=k.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return k(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&k(e).addClass(Q)}},e._slide=function(t,e){var n,i,r,o=this,s=k(this._element).find(J.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===W?(n=q,i=z,r=F):(n=G,i=X,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var f=k.Event(K.SLID,{relatedTarget:l,direction:r,from:a,to:c});gt.supportsTransitionEnd()&&k(this._element).hasClass(Y)?(k(l).addClass(i),gt.reflow(l),k(s).addClass(n),k(l).addClass(n),k(s).one(gt.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(f)},0)}).emulateTransitionEnd(this._transitionDuration)):(k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(f)),h&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=k(this).data(P),i=r({},H,k(this).data());"object"==typeof e&&(i=r({},i,e));var o="string"==typeof e?e:i.slide;if(n||(n=new t(this,i),k(this).data(P,n)),"number"==typeof e)n.to(e);else if("string"==typeof o){if("undefined"==typeof n[o])throw new TypeError('No method named "'+o+'"');n[o]()}else i.interval&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=gt.getSelectorFromElement(this);if(n){var i=k(n)[0];if(i&&k(i).hasClass(V)){var o=r({},k(i).data(),k(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),t._jQueryInterface.call(k(i),o),s&&k(i).data(P).to(s),e.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return H}}]),t}(),k(document).on(K.CLICK_DATA_API,J.DATA_SLIDE,Z._dataApiClickHandler),k(window).on(K.LOAD_DATA_API,function(){k(J.DATA_RIDE).each(function(){var t=k(this);Z._jQueryInterface.call(t,t.data())})}),k.fn[L]=Z._jQueryInterface,k.fn[L].Constructor=Z,k.fn[L].noConflict=function(){return k.fn[L]=j,Z._jQueryInterface},Z),Et=(tt="collapse",nt="."+(et="bs.collapse"),it=($=e).fn[tt],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},st={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},at="show",lt="collapse",ct="collapsing",ht="collapsed",ft="width",ut="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},pt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=$(dt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=gt.getSelectorFromElement(r);null!==o&&$(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){$(this._element).hasClass(at)?this.hide():this.show()},e.show=function(){var e,n,i=this;if(!this._isTransitioning&&!$(this._element).hasClass(at)&&(this._parent&&0===(e=$.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(n=$(e).not(this._selector).data(et))&&n._isTransitioning))){var r=$.Event(st.SHOW);if($(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call($(e).not(this._selector),"hide"),n||$(e).data(et,null));var o=this._getDimension();$(this._element).removeClass(lt).addClass(ct),this._element.style[o]=0,this._triggerArray.length>0&&$(this._triggerArray).removeClass(ht).attr("aria-expanded",!0),this.setTransitioning(!0);var s=function(){$(i._element).removeClass(ct).addClass(lt).addClass(at),i._element.style[o]="",i.setTransitioning(!1),$(i._element).trigger(st.SHOWN)};if(gt.supportsTransitionEnd()){var a="scroll"+(o[0].toUpperCase()+o.slice(1));$(this._element).one(gt.TRANSITION_END,s).emulateTransitionEnd(600),this._element.style[o]=this._element[a]+"px"}else s()}}},e.hide=function(){var t=this;if(!this._isTransitioning&&$(this._element).hasClass(at)){var e=$.Event(st.HIDE);if($(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",gt.reflow(this._element),$(this._element).addClass(ct).removeClass(lt).removeClass(at),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=gt.getSelectorFromElement(r);if(null!==o)$(o).hasClass(at)||$(r).addClass(ht).attr("aria-expanded",!1)}this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),$(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)};this._element.style[n]="",gt.supportsTransitionEnd()?$(this._element).one(gt.TRANSITION_END,s).emulateTransitionEnd(600):s()}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){$.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},rt,t)).toggle=Boolean(t.toggle),gt.typeCheckConfig(tt,t,ot),t},e._getDimension=function(){return $(this._element).hasClass(ft)?ft:ut},e._getParent=function(){var e=this,n=null;gt.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=$(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return $(n).find(i).each(function(n,i){e._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}),n},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=$(t).hasClass(at);e.length>0&&$(e).toggleClass(ht,!n).attr("aria-expanded",n)}},t._getTargetFromElement=function(t){var e=gt.getSelectorFromElement(t);return e?$(e)[0]:null},t._jQueryInterface=function(e){return this.each(function(){var n=$(this),i=n.data(et),o=r({},rt,n.data(),"object"==typeof e&&e);if(!i&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),i||(i=new t(this,o),n.data(et,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return rt}}]),t}(),$(document).on(st.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=$(this),n=gt.getSelectorFromElement(this);$(n).each(function(){var t=$(this),n=t.data(et)?"toggle":e.data();pt._jQueryInterface.call(t,n)})}),$.fn[tt]=pt._jQueryInterface,$.fn[tt].Constructor=pt,$.fn[tt].noConflict=function(){return $.fn[tt]=it,pt._jQueryInterface},pt),yt="undefined"!=typeof window&&"undefined"!=typeof document,bt=["Edge","Trident","Firefox"],Tt=0,Ct=0;Ct<bt.length;Ct+=1)if(yt&&navigator.userAgent.indexOf(bt[Ct])>=0){Tt=1;break}var wt=yt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Tt))}};function It(t){return t&&"[object Function]"==={}.toString.call(t)}function At(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function Dt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function St(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=At(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll)/.test(n+r+i)?t:St(Dt(t))}function Ot(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===At(e,"position")?Ot(e):e:t?t.ownerDocument.documentElement:document.documentElement}function Nt(t){return null!==t.parentNode?Nt(t.parentNode):t}function kt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Ot(s.firstElementChild)!==s?Ot(l):l;var c=Nt(t);return c.host?kt(c.host,e):kt(t,Nt(e).host)}function Lt(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function Pt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}var xt=void 0,Rt=function(){return void 0===xt&&(xt=-1!==navigator.appVersion.indexOf("MSIE 10")),xt};function jt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Rt()?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Ht(){var t=document.body,e=document.documentElement,n=Rt()&&getComputedStyle(e);return{height:jt("Height",t,e,n),width:jt("Width",t,e,n)}}var Mt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Wt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ut=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Bt(t){return Ft({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Kt(t){var e={};if(Rt())try{e=t.getBoundingClientRect();var n=Lt(t,"top"),i=Lt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}catch(t){}else e=t.getBoundingClientRect();var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Ht():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=At(t);l-=Pt(h,"x"),c-=Pt(h,"y"),r.width-=l,r.height-=c}return Bt(r)}function Vt(t,e){var n=Rt(),i="HTML"===e.nodeName,r=Kt(t),o=Kt(e),s=St(t),a=At(e),l=parseFloat(a.borderTopWidth,10),c=parseFloat(a.borderLeftWidth,10),h=Bt({top:r.top-o.top-l,left:r.left-o.left-c,width:r.width,height:r.height});if(h.marginTop=0,h.marginLeft=0,!n&&i){var f=parseFloat(a.marginTop,10),u=parseFloat(a.marginLeft,10);h.top-=l-f,h.bottom-=l-f,h.left-=c-u,h.right-=c-u,h.marginTop=f,h.marginLeft=u}return(n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Lt(e,"top"),r=Lt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function Qt(t,e,n,i){var r,o,s,a,l,c,h,f={top:0,left:0},u=kt(t,e);if("viewport"===i)o=(r=u).ownerDocument.documentElement,s=Vt(r,o),a=Math.max(o.clientWidth,window.innerWidth||0),l=Math.max(o.clientHeight,window.innerHeight||0),c=Lt(o),h=Lt(o,"left"),f=Bt({top:c-s.top+s.marginTop,left:h-s.left+s.marginLeft,width:a,height:l});else{var d=void 0;"scrollParent"===i?"BODY"===(d=St(Dt(e))).nodeName&&(d=t.ownerDocument.documentElement):d="window"===i?t.ownerDocument.documentElement:i;var p=Vt(d,u);if("HTML"!==d.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===At(e,"position")||t(Dt(e)))}(u))f=p;else{var g=Ht(),m=g.height,_=g.width;f.top+=p.top-p.marginTop,f.bottom=m+p.top,f.left+=p.left-p.marginLeft,f.right=_+p.left}}return f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function Yt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Qt(n,i,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Ft({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,f=t.split("-")[1];return h+(f?"-"+f:"")}function Gt(t,e,n){return Vt(n,kt(e,n))}function qt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function zt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Xt(t,e,n){n=n.split("-")[0];var i=qt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[zt(a)],r}function Jt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Zt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=Jt(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&It(n)&&(e.offsets.popper=Bt(e.offsets.popper),e.offsets.reference=Bt(e.offsets.reference),e=n(e,t))}),e}function $t(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function te(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length-1;i++){var r=e[i],o=r?""+r+n:t;if("undefined"!=typeof document.body.style[o])return o}return null}function ee(t){var e=t.ownerDocument;return e?e.defaultView:window}function ne(t,e,n,i){n.updateBound=i,ee(t).addEventListener("resize",n.updateBound,{passive:!0});var r=St(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(St(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function ie(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ee(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function re(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function oe(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&re(e[n])&&(i="px"),t.style[n]=e[n]+i})}function se(t,e,n){var i=Jt(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var ae=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],le=ae.slice(3);function ce(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=le.indexOf(t),i=le.slice(n+1).concat(le.slice(0,n));return e?i.reverse():i}var he={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function fe(t,e,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(Jt(s,function(t){return-1!==t.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(c=c.map(function(t,i){var r=(1===i?!o:o)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Bt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,r,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){re(n)&&(r[e]+=n*("-"===t[i-1]?-1:1))})}),r}var ue={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ut({},l,o[l]),end:Ut({},l,o[l]+o[c]-s[c])};t.offsets.popper=Ft({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=re(+n)?[+n,0]:fe(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||Ot(t.instance.popper);t.instance.reference===n&&(n=Ot(n));var i=Qt(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=i;var r=e.priority,o=t.offsets.popper,s={primary:function(t){var n=o[t];return o[t]<i[t]&&!e.escapeWithReference&&(n=Math.max(o[t],i[t])),Ut({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=o[n];return o[t]>i[t]&&!e.escapeWithReference&&(r=Math.min(o[n],i[t]-("right"===t?o.width:o.height))),Ut({},n,r)}};return r.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=Ft({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!se(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",h=l?"Top":"Left",f=h.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=qt(i)[c];a[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(t.offsets.popper[f]+=a[f]+p-s[d]),t.offsets.popper=Bt(t.offsets.popper);var g=a[f]+a[c]/2-p/2,m=At(t.instance.popper),_=parseFloat(m["margin"+h],10),v=parseFloat(m["border"+h+"Width"],10),E=g-t.offsets.popper[f]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Ut(n={},f,Math.round(E)),Ut(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if($t(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=Qt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),i=t.placement.split("-")[0],r=zt(i),o=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case he.FLIP:s=[i,r];break;case he.CLOCKWISE:s=ce(i);break;case he.COUNTERCLOCKWISE:s=ce(i,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0],r=zt(i);var c,h=t.offsets.popper,f=t.offsets.reference,u=Math.floor,d="left"===i&&u(h.right)>u(f.left)||"right"===i&&u(h.left)<u(f.right)||"top"===i&&u(h.bottom)>u(f.top)||"bottom"===i&&u(h.top)<u(f.bottom),p=u(h.left)<u(n.left),g=u(h.right)>u(n.right),m=u(h.top)<u(n.top),_=u(h.bottom)>u(n.bottom),v="left"===i&&p||"right"===i&&g||"top"===i&&m||"bottom"===i&&_,E=-1!==["top","bottom"].indexOf(i),y=!!e.flipVariations&&(E&&"start"===o&&p||E&&"end"===o&&g||!E&&"start"===o&&m||!E&&"end"===o&&_);(d||v||y)&&(t.flipped=!0,(d||v)&&(i=s[l+1]),y&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=i+(o?"-"+o:""),t.offsets.popper=Ft({},t.offsets.popper,Xt(t.instance.popper,t.offsets.reference,t.placement)),t=Zt(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=zt(e),t.offsets.popper=Bt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!se(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Jt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=Jt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=Kt(Ot(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",u=te("transform"),d=void 0,p=void 0;if(p="bottom"===h?-a.height+c.bottom:c.top,d="right"===f?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[h]=0,l[f]=0,l.willChange="transform";else{var g="bottom"===h?-1:1,m="right"===f?-1:1;l[h]=p*g,l[f]=d*m,l.willChange=h+", "+f}var _={"x-placement":t.placement};return t.attributes=Ft({},_,t.attributes),t.styles=Ft({},l,t.styles),t.arrowStyles=Ft({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return oe(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&oe(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=Gt(0,e,t),s=Yt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),oe(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},de=function(){function t(e,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Mt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=wt(this.update.bind(this)),this.options=Ft({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(Ft({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=Ft({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Ft({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&It(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return Wt(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Gt(this.state,this.popper,this.reference),t.placement=Yt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=Xt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=Zt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,$t(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[te("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ne(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ie.call(this)}}]),t}();de.Utils=("undefined"!=typeof window?window:global).PopperUtils,de.placements=ae,de.Defaults=ue;var pe,ge,me,_e,ve,Ee,ye,be,Te,Ce,we,Ie,Ae,De,Se,Oe,Ne,ke,Le,Pe,xe,Re,je,He,Me,We,Ue,Fe,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,hn,fn,un,dn,pn,gn,mn,_n,vn,En,yn,bn,Tn,Cn,wn,In,An,Dn,Sn,On,Nn,kn,Ln,Pn,xn,Rn,jn,Hn,Mn,Wn,Un,Fn,Bn,Kn,Vn,Qn,Yn,Gn,qn,zn,Xn,Jn,Zn,$n,ti,ei,ni,ii,ri,oi,si,ai,li,ci,hi,fi,ui,di,pi,gi,mi,_i,vi,Ei,yi=(ge="dropdown",_e="."+(me="bs.dropdown"),ve=".data-api",Ee=(pe=e).fn[ge],ye=new RegExp("38|40|27"),be={HIDE:"hide"+_e,HIDDEN:"hidden"+_e,SHOW:"show"+_e,SHOWN:"shown"+_e,CLICK:"click"+_e,CLICK_DATA_API:"click"+_e+ve,KEYDOWN_DATA_API:"keydown"+_e+ve,KEYUP_DATA_API:"keyup"+_e+ve},Te="disabled",Ce="show",we="dropup",Ie="dropright",Ae="dropleft",De="dropdown-menu-right",Se="position-static",Oe='[data-toggle="dropdown"]',Ne=".dropdown form",ke=".dropdown-menu",Le=".navbar-nav",Pe=".dropdown-menu .dropdown-item:not(.disabled)",xe="top-start",Re="top-end",je="bottom-start",He="bottom-end",Me="right-start",We="left-start",Ue={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Fe={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Be=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!pe(this._element).hasClass(Te)){var e=t._getParentFromElement(this._element),n=pe(this._menu).hasClass(Ce);if(t._clearMenus(),!n){var i={relatedTarget:this._element},r=pe.Event(be.SHOW,i);if(pe(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof de)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=e:gt.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&pe(e).addClass(Se),this._popper=new de(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===pe(e).closest(Le).length&&pe(document.body).children().on("mouseover",null,pe.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),pe(this._menu).toggleClass(Ce),pe(e).toggleClass(Ce).trigger(pe.Event(be.SHOWN,i))}}}},e.dispose=function(){pe.removeData(this._element,me),pe(this._element).off(_e),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;pe(this._element).on(be.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=r({},this.constructor.Default,pe(this._element).data(),t),gt.typeCheckConfig(ge,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);this._menu=pe(e).find(ke)[0]}return this._menu},e._getPlacement=function(){var t=pe(this._element).parent(),e=je;return t.hasClass(we)?(e=xe,pe(this._menu).hasClass(De)&&(e=Re)):t.hasClass(Ie)?e=Me:t.hasClass(Ae)?e=We:pe(this._menu).hasClass(De)&&(e=He),e},e._detectNavbar=function(){return pe(this._element).closest(".navbar").length>0},e._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},t._jQueryInterface=function(e){return this.each(function(){var n=pe(this).data(me);if(n||(n=new t(this,"object"==typeof e?e:null),pe(this).data(me,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=pe.makeArray(pe(Oe)),i=0;i<n.length;i++){var r=t._getParentFromElement(n[i]),o=pe(n[i]).data(me),s={relatedTarget:n[i]};if(o){var a=o._menu;if(pe(r).hasClass(Ce)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&pe.contains(r,e.target))){var l=pe.Event(be.HIDE,s);pe(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),n[i].setAttribute("aria-expanded","false"),pe(a).removeClass(Ce),pe(r).removeClass(Ce).trigger(pe.Event(be.HIDDEN,s)))}}}},t._getParentFromElement=function(t){var e,n=gt.getSelectorFromElement(t);return n&&(e=pe(n)[0]),e||t.parentNode},t._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||pe(e.target).closest(ke).length)):ye.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!pe(this).hasClass(Te))){var n=t._getParentFromElement(this),i=pe(n).hasClass(Ce);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var r=pe(n).find(Pe).get();if(0!==r.length){var o=r.indexOf(e.target);38===e.which&&o>0&&o--,40===e.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===e.which){var s=pe(n).find(Oe)[0];pe(s).trigger("focus")}pe(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Ue}},{key:"DefaultType",get:function(){return Fe}}]),t}(),pe(document).on(be.KEYDOWN_DATA_API,Oe,Be._dataApiKeydownHandler).on(be.KEYDOWN_DATA_API,ke,Be._dataApiKeydownHandler).on(be.CLICK_DATA_API+" "+be.KEYUP_DATA_API,Be._clearMenus).on(be.CLICK_DATA_API,Oe,function(t){t.preventDefault(),t.stopPropagation(),Be._jQueryInterface.call(pe(this),"toggle")}).on(be.CLICK_DATA_API,Ne,function(t){t.stopPropagation()}),pe.fn[ge]=Be._jQueryInterface,pe.fn[ge].Constructor=Be,pe.fn[ge].noConflict=function(){return pe.fn[ge]=Ee,Be._jQueryInterface},Be),bi=(Ve="modal",Ye="."+(Qe="bs.modal"),Ge=(Ke=e).fn[Ve],qe={backdrop:!0,keyboard:!0,focus:!0,show:!0},ze={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Xe={HIDE:"hide"+Ye,HIDDEN:"hidden"+Ye,SHOW:"show"+Ye,SHOWN:"shown"+Ye,FOCUSIN:"focusin"+Ye,RESIZE:"resize"+Ye,CLICK_DISMISS:"click.dismiss"+Ye,KEYDOWN_DISMISS:"keydown.dismiss"+Ye,MOUSEUP_DISMISS:"mouseup.dismiss"+Ye,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Ye,CLICK_DATA_API:"click"+Ye+".data-api"},Je="modal-scrollbar-measure",Ze="modal-backdrop",$e="modal-open",tn="fade",en="show",nn={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},rn=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Ke(t).find(nn.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){gt.supportsTransitionEnd()&&Ke(this._element).hasClass(tn)&&(this._isTransitioning=!0);var n=Ke.Event(Xe.SHOW,{relatedTarget:t});Ke(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Ke(document.body).addClass($e),this._setEscapeEvent(),this._setResizeEvent(),Ke(this._element).on(Xe.CLICK_DISMISS,nn.DATA_DISMISS,function(t){return e.hide(t)}),Ke(this._dialog).on(Xe.MOUSEDOWN_DISMISS,function(){Ke(e._element).one(Xe.MOUSEUP_DISMISS,function(t){Ke(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Ke.Event(Xe.HIDE);if(Ke(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=gt.supportsTransitionEnd()&&Ke(this._element).hasClass(tn);i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Ke(document).off(Xe.FOCUSIN),Ke(this._element).removeClass(en),Ke(this._element).off(Xe.CLICK_DISMISS),Ke(this._dialog).off(Xe.MOUSEDOWN_DISMISS),i?Ke(this._element).one(gt.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},e.dispose=function(){Ke.removeData(this._element,Qe),Ke(window,document,this._element,this._backdrop).off(Ye),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},qe,t),gt.typeCheckConfig(Ve,t,ze),t},e._showElement=function(t){var e=this,n=gt.supportsTransitionEnd()&&Ke(this._element).hasClass(tn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&gt.reflow(this._element),Ke(this._element).addClass(en),this._config.focus&&this._enforceFocus();var i=Ke.Event(Xe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Ke(e._element).trigger(i)};n?Ke(this._dialog).one(gt.TRANSITION_END,r).emulateTransitionEnd(300):r()},e._enforceFocus=function(){var t=this;Ke(document).off(Xe.FOCUSIN).on(Xe.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===Ke(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?Ke(this._element).on(Xe.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||Ke(this._element).off(Xe.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?Ke(window).on(Xe.RESIZE,function(e){return t.handleUpdate(e)}):Ke(window).off(Xe.RESIZE)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Ke(document.body).removeClass($e),t._resetAdjustments(),t._resetScrollbar(),Ke(t._element).trigger(Xe.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(Ke(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=Ke(this._element).hasClass(tn)?tn:"";if(this._isShown&&this._config.backdrop){var i=gt.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=Ze,n&&Ke(this._backdrop).addClass(n),Ke(this._backdrop).appendTo(document.body),Ke(this._element).on(Xe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),i&&gt.reflow(this._backdrop),Ke(this._backdrop).addClass(en),!t)return;if(!i)return void t();Ke(this._backdrop).one(gt.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){Ke(this._backdrop).removeClass(en);var r=function(){e._removeBackdrop(),t&&t()};gt.supportsTransitionEnd()&&Ke(this._element).hasClass(tn)?Ke(this._backdrop).one(gt.TRANSITION_END,r).emulateTransitionEnd(150):r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){Ke(nn.FIXED_CONTENT).each(function(e,n){var i=Ke(n)[0].style.paddingRight,r=Ke(n).css("padding-right");Ke(n).data("padding-right",i).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),Ke(nn.STICKY_CONTENT).each(function(e,n){var i=Ke(n)[0].style.marginRight,r=Ke(n).css("margin-right");Ke(n).data("margin-right",i).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),Ke(nn.NAVBAR_TOGGLER).each(function(e,n){var i=Ke(n)[0].style.marginRight,r=Ke(n).css("margin-right");Ke(n).data("margin-right",i).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var e=document.body.style.paddingRight,n=Ke(document.body).css("padding-right");Ke(document.body).data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){Ke(nn.FIXED_CONTENT).each(function(t,e){var n=Ke(e).data("padding-right");"undefined"!=typeof n&&Ke(e).css("padding-right",n).removeData("padding-right")}),Ke(nn.STICKY_CONTENT+", "+nn.NAVBAR_TOGGLER).each(function(t,e){var n=Ke(e).data("margin-right");"undefined"!=typeof n&&Ke(e).css("margin-right",n).removeData("margin-right")});var t=Ke(document.body).data("padding-right");"undefined"!=typeof t&&Ke(document.body).css("padding-right",t).removeData("padding-right")},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Je,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var i=Ke(this).data(Qe),o=r({},t.Default,Ke(this).data(),"object"==typeof e&&e);if(i||(i=new t(this,o),Ke(this).data(Qe,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else o.show&&i.show(n)})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return qe}}]),t}(),Ke(document).on(Xe.CLICK_DATA_API,nn.DATA_TOGGLE,function(t){var e,n=this,i=gt.getSelectorFromElement(this);i&&(e=Ke(i)[0]);var o=Ke(e).data(Qe)?"toggle":r({},Ke(e).data(),Ke(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Ke(e).one(Xe.SHOW,function(t){t.isDefaultPrevented()||s.one(Xe.HIDDEN,function(){Ke(n).is(":visible")&&n.focus()})});rn._jQueryInterface.call(Ke(e),o,this)}),Ke.fn[Ve]=rn._jQueryInterface,Ke.fn[Ve].Constructor=rn,Ke.fn[Ve].noConflict=function(){return Ke.fn[Ve]=Ge,rn._jQueryInterface},rn),Ti=(sn="tooltip",ln="."+(an="bs.tooltip"),cn=(on=e).fn[sn],hn="bs-tooltip",fn=new RegExp("(^|\\s)"+hn+"\\S+","g"),un={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},dn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},pn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},gn="show",mn="out",_n={HIDE:"hide"+ln,HIDDEN:"hidden"+ln,SHOW:"show"+ln,SHOWN:"shown"+ln,INSERTED:"inserted"+ln,CLICK:"click"+ln,FOCUSIN:"focusin"+ln,FOCUSOUT:"focusout"+ln,MOUSEENTER:"mouseenter"+ln,MOUSELEAVE:"mouseleave"+ln},vn="fade",En="show",yn=".tooltip-inner",bn=".arrow",Tn="hover",Cn="focus",wn="click",In="manual",An=function(){function t(t,e){if("undefined"==typeof de)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=on(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),on(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(on(this.getTipElement()).hasClass(En))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),on.removeData(this.element,this.constructor.DATA_KEY),on(this.element).off(this.constructor.EVENT_KEY),on(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&on(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var e=this;if("none"===on(this.element).css("display"))throw new Error("Please use show on visible elements");var n=on.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){on(this.element).trigger(n);var i=on.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var r=this.getTipElement(),o=gt.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&on(r).addClass(vn);var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=!1===this.config.container?document.body:on(this.config.container);on(r).data(this.constructor.DATA_KEY,this),on.contains(this.element.ownerDocument.documentElement,this.tip)||on(r).appendTo(l),on(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new de(this.element,r,{placement:a,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:bn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),on(r).addClass(En),"ontouchstart"in document.documentElement&&on(document.body).children().on("mouseover",null,on.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,on(e.element).trigger(e.constructor.Event.SHOWN),t===mn&&e._leave(null,e)};gt.supportsTransitionEnd()&&on(this.tip).hasClass(vn)?on(this.tip).one(gt.TRANSITION_END,c).emulateTransitionEnd(t._TRANSITION_DURATION):c()}},e.hide=function(t){var e=this,n=this.getTipElement(),i=on.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==gn&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),on(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};on(this.element).trigger(i),i.isDefaultPrevented()||(on(n).removeClass(En),"ontouchstart"in document.documentElement&&on(document.body).children().off("mouseover",null,on.noop),this._activeTrigger[wn]=!1,this._activeTrigger[Cn]=!1,this._activeTrigger[Tn]=!1,gt.supportsTransitionEnd()&&on(this.tip).hasClass(vn)?on(n).one(gt.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){on(this.getTipElement()).addClass(hn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||on(this.config.template)[0],this.tip},e.setContent=function(){var t=on(this.getTipElement());this.setElementContent(t.find(yn),this.getTitle()),t.removeClass(vn+" "+En)},e.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?on(e).parent().is(t)||t.empty().append(e):t.text(on(e).text()):t[n?"html":"text"](e)},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getAttachment=function(t){return dn[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)on(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==In){var n=e===Tn?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=e===Tn?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;on(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}on(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||on(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),on(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Cn:Tn]=!0),on(e.getTipElement()).hasClass(En)||e._hoverState===gn?e._hoverState=gn:(clearTimeout(e._timeout),e._hoverState=gn,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===gn&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||on(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),on(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Cn:Tn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=mn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===mn&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){return"number"==typeof(t=r({},this.constructor.Default,on(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),gt.typeCheckConfig(sn,t,this.constructor.DefaultType),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=on(this.getTipElement()),e=t.attr("class").match(fn);null!==e&&e.length>0&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(on(t).removeClass(vn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=on(this).data(an),i="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new t(this,i),on(this).data(an,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return pn}},{key:"NAME",get:function(){return sn}},{key:"DATA_KEY",get:function(){return an}},{key:"Event",get:function(){return _n}},{key:"EVENT_KEY",get:function(){return ln}},{key:"DefaultType",get:function(){return un}}]),t}(),on.fn[sn]=An._jQueryInterface,on.fn[sn].Constructor=An,on.fn[sn].noConflict=function(){return on.fn[sn]=cn,An._jQueryInterface},An),Ci=(Sn="popover",Nn="."+(On="bs.popover"),kn=(Dn=e).fn[Sn],Ln="bs-popover",Pn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=r({},Ti.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Rn=r({},Ti.DefaultType,{content:"(string|element|function)"}),jn="fade",Hn="show",Mn=".popover-header",Wn=".popover-body",Un={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,INSERTED:"inserted"+Nn,CLICK:"click"+Nn,FOCUSIN:"focusin"+Nn,FOCUSOUT:"focusout"+Nn,MOUSEENTER:"mouseenter"+Nn,MOUSELEAVE:"mouseleave"+Nn},Fn=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){Dn(this.getTipElement()).addClass(Ln+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||Dn(this.config.template)[0],this.tip},o.setContent=function(){var t=Dn(this.getTipElement());this.setElementContent(t.find(Mn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Wn),e),t.removeClass(jn+" "+Hn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=Dn(this.getTipElement()),e=t.attr("class").match(Pn);null!==e&&e.length>0&&t.removeClass(e.join(""))},r._jQueryInterface=function(t){return this.each(function(){var e=Dn(this).data(On),n="object"==typeof t?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new r(this,n),Dn(this).data(On,e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return xn}},{key:"NAME",get:function(){return Sn}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Un}},{key:"EVENT_KEY",get:function(){return Nn}},{key:"DefaultType",get:function(){return Rn}}]),r}(Ti),Dn.fn[Sn]=Fn._jQueryInterface,Dn.fn[Sn].Constructor=Fn,Dn.fn[Sn].noConflict=function(){return Dn.fn[Sn]=kn,Fn._jQueryInterface},Fn),wi=(Kn="scrollspy",Qn="."+(Vn="bs.scrollspy"),Yn=(Bn=e).fn[Kn],Gn={offset:10,method:"auto",target:""},qn={offset:"number",method:"string",target:"(string|element)"},zn={ACTIVATE:"activate"+Qn,SCROLL:"scroll"+Qn,LOAD_DATA_API:"load"+Qn+".data-api"},Xn="dropdown-item",Jn="active",Zn={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},$n="offset",ti="position",ei=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Zn.NAV_LINKS+","+this._config.target+" "+Zn.LIST_ITEMS+","+this._config.target+" "+Zn.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Bn(this._scrollElement).on(zn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?$n:ti,n="auto"===this._config.method?e:this._config.method,i=n===ti?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Bn.makeArray(Bn(this._selector)).map(function(t){var e,r=gt.getSelectorFromElement(t);if(r&&(e=Bn(r)[0]),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[Bn(e)[n]().top+i,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){Bn.removeData(this._element,Vn),Bn(this._scrollElement).off(Qn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},Gn,t)).target){var e=Bn(t.target).attr("id");e||(e=gt.getUID(Kn),Bn(t.target).attr("id",e)),t.target="#"+e}return gt.typeCheckConfig(Kn,t,qn),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=Bn(e.join(","));n.hasClass(Xn)?(n.closest(Zn.DROPDOWN).find(Zn.DROPDOWN_TOGGLE).addClass(Jn),n.addClass(Jn)):(n.addClass(Jn),n.parents(Zn.NAV_LIST_GROUP).prev(Zn.NAV_LINKS+", "+Zn.LIST_ITEMS).addClass(Jn),n.parents(Zn.NAV_LIST_GROUP).prev(Zn.NAV_ITEMS).children(Zn.NAV_LINKS).addClass(Jn)),Bn(this._scrollElement).trigger(zn.ACTIVATE,{relatedTarget:t})},e._clear=function(){Bn(this._selector).filter(Zn.ACTIVE).removeClass(Jn)},t._jQueryInterface=function(e){return this.each(function(){var n=Bn(this).data(Vn);if(n||(n=new t(this,"object"==typeof e&&e),Bn(this).data(Vn,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Gn}}]),t}(),Bn(window).on(zn.LOAD_DATA_API,function(){for(var t=Bn.makeArray(Bn(Zn.DATA_SPY)),e=t.length;e--;){var n=Bn(t[e]);ei._jQueryInterface.call(n,n.data())}}),Bn.fn[Kn]=ei._jQueryInterface,Bn.fn[Kn].Constructor=ei,Bn.fn[Kn].noConflict=function(){return Bn.fn[Kn]=Yn,ei._jQueryInterface},ei),Ii=(ri="."+(ii="bs.tab"),oi=(ni=e).fn.tab,si={HIDE:"hide"+ri,HIDDEN:"hidden"+ri,SHOW:"show"+ri,SHOWN:"shown"+ri,CLICK_DATA_API:"click"+ri+".data-api"},ai="dropdown-menu",li="active",ci="disabled",hi="fade",fi="show",ui=".dropdown",di=".nav, .list-group",pi=".active",gi="> li > .active",mi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',_i=".dropdown-toggle",vi="> .dropdown-menu .active",Ei=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ni(this._element).hasClass(li)||ni(this._element).hasClass(ci))){var e,n,i=ni(this._element).closest(di)[0],r=gt.getSelectorFromElement(this._element);if(i){var o="UL"===i.nodeName?gi:pi;n=(n=ni.makeArray(ni(i).find(o)))[n.length-1]}var s=ni.Event(si.HIDE,{relatedTarget:this._element}),a=ni.Event(si.SHOW,{relatedTarget:n});if(n&&ni(n).trigger(s),ni(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=ni(r)[0]),this._activate(this._element,i);var l=function(){var e=ni.Event(si.HIDDEN,{relatedTarget:t._element}),i=ni.Event(si.SHOWN,{relatedTarget:n});ni(n).trigger(e),ni(t._element).trigger(i)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){ni.removeData(this._element,ii),this._element=null},e._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?ni(e).find(gi):ni(e).children(pi))[0],o=n&&gt.supportsTransitionEnd()&&r&&ni(r).hasClass(hi),s=function(){return i._transitionComplete(t,r,n)};r&&o?ni(r).one(gt.TRANSITION_END,s).emulateTransitionEnd(150):s()},e._transitionComplete=function(t,e,n){if(e){ni(e).removeClass(fi+" "+li);var i=ni(e.parentNode).find(vi)[0];i&&ni(i).removeClass(li),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(ni(t).addClass(li),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),gt.reflow(t),ni(t).addClass(fi),t.parentNode&&ni(t.parentNode).hasClass(ai)){var r=ni(t).closest(ui)[0];r&&ni(r).find(_i).addClass(li),t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=ni(this),i=n.data(ii);if(i||(i=new t(this),n.data(ii,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),ni(document).on(si.CLICK_DATA_API,mi,function(t){t.preventDefault(),Ei._jQueryInterface.call(ni(this),"show")}),ni.fn.tab=Ei._jQueryInterface,ni.fn.tab.Constructor=Ei,ni.fn.tab.noConflict=function(){return ni.fn.tab=oi,Ei._jQueryInterface},Ei);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=gt,t.Alert=mt,t.Button=_t,t.Carousel=vt,t.Collapse=Et,t.Dropdown=yi,t.Modal=bi,t.Popover=Ci,t.Scrollspy=wi,t.Tab=Ii,t.Tooltip=Ti,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count, nesting;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;
		nesting     = search.options.nesting;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(getattr(data, fields[0], nesting), token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(getattr(data, fields[i], nesting), token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return getattr(self.items[result.id], name, options.nesting);
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */
	var getattr = function(obj, name, nesting) {
		if (!obj || !name) return;
		if (!nesting) return obj[name];
		var names = name.split(".");
		while(names.length && (obj = obj[names.shift()]));
		return obj;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
		'b': '[b␢βΒB฿𐌁ᛒ]',
		'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
		'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
		'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
		'f': '[fƑƒḞḟ]',
		'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
		'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
		'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
		'j': '[jȷĴĵɈɉʝɟʲ]',
		'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
		'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
		'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
		'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
		'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
		'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
		'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
		's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
		't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
		'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
		'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
		'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
		'x': '[xẌẍẊẋχ]',
		'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
		'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.12.4)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;

		var highlight = function(node) {
			var skip = 0;
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};

		return $element.each(function() {
			highlight(this);
		});
	};

	/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with() and pass js strict mode
	 */
	$.fn.removeHighlight = function() {
		return this.find("span.highlight").each(function() {
			this.parentNode.firstChild.nodeName;
			var parent = this.parentNode;
			parent.replaceChild(this.firstChild, this);
			parent.normalize();
		}).end();
	};


	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];

			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};

	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};

	var IS_MAC        = /Mac/.test(navigator.userAgent);

	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;

	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;

	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;


	var isset = function(object) {
		return typeof object !== 'undefined';
	};

	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};

	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};

	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};

	var hook = {};

	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};

	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};

	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};

	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};

	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};

		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};

		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;

		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};

	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};

	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};

	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};

	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}

		var $test = $('<test>').css({
			position: 'absolute',
			top: -99999,
			left: -99999,
			width: 'auto',
			padding: 0,
			whiteSpace: 'pre'
		}).text(str).appendTo('body');

		transferStyles($parent, $test, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);

		var width = $test.width();
		$test.remove();

		return width;
	};

	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;

		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};

			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;

			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 97 && keyCode <= 122) || // a-z
					(keyCode >= 65 && keyCode <= 90)  || // A-Z
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					keyCode === 32 // space
				);

				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}

			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}

			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};

		$input.on('keydown keyup update blur', update);
		update();
	};

	var domToString = function(d) {
		var tmp = document.createElement('div');

		tmp.appendChild(d.cloneNode(true));

		return tmp.innerHTML;
	};

	var logError = function(message, options){
		if(!options) options = {};
		var component = "Selectize";

		console.error(component + ": " + message)

		if(options.explanation){
			// console.group is undefined in <IE11
			if(console.group) console.group();
			console.error(options.explanation);
			if(console.group) console.groupEnd();
		}
	}


	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;

		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';

		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),

			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},

			$activeOption    : null,
			$activeItems     : [],

			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});

		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});

		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}

		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}

		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}

		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};

	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	MicroEvent.mixin(Selectize);

	if(typeof MicroPlugin !== "undefined"){
		MicroPlugin.mixin(Selectize);
	}else{
		logError("Dependency MicroPlugin is missing",
			{explanation:
			"Make sure you either: (1) are using the \"standalone\" "+
			"version of Selectize, or (2) require MicroPlugin before you "+
			"load Selectize."}
		);
	}


	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	$.extend(Selectize.prototype, {

		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;

			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;
			var inputId;

			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';

			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);

			if(inputId = $input.attr('id')) {
				$control_input.attr('id', inputId + '-selectized');
				$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
			}

			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}

			$wrapper.css({
				width: $input[0].style.width
			});

			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}

			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}

			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}

			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}

			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}

			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}

			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;

			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);

			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});

			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});

			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});

			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});

			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});

			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});

			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};

			$input.attr('tabindex', -1).hide().after(self.$wrapper);

			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}

			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}

			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;

			if ($input.is(':disabled')) {
				self.disable();
			}

			self.on('change', this.onChange);

			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');

			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}

		},

		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;

			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};

			self.settings.render = $.extend({}, templates, self.settings.render);
		},

		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};

			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},

		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;

			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
			if (!self.isFocused) {
				self.focus();
				e.preventDefault();
			}
		},

		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);

			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},

		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},

		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;

			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
				return;
			}

			// If a regex or string is included, this will split the pasted
			// input and create Items for each separate value
			if (self.settings.splitOn) {

				// Wait for pasted text to be recognized in value
				setTimeout(function() {
					var pastedText = self.$control_input.val();
					if(!pastedText.match(self.settings.splitOn)){ return }

					var splitInput = $.trim(pastedText).split(self.settings.splitOn);
					for (var i = 0, n = splitInput.length; i < n; i++) {
						self.createItem(splitInput[i]);
					}
				}, 0);
			}
		},

		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},

		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;

			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}

			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});

						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}

			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},

		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;

			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},

		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadThrottle` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},

		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;

			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}

			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');

			if (!wasFocused) self.trigger('focus');

			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}

			self.refreshState();
		},

		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;

			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}

			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();

				// IE11 bug: element still marked as active
				dest && dest.focus && dest.focus();

				self.ignoreFocus = false;
				self.trigger('blur');
			};

			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},

		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},

		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;

			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}

			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},

		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;

			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},

		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);

			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},

		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},

		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},

		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];

			debounce_events(this, events, function() {
				this.clear(silent);
				this.addItems(value, silent);
			});
		},

		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;

			if (self.settings.mode === 'single') return;
			$item = $($item);

			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}

			// modify selection
			eventName = e && e.type.toLowerCase();

			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}

			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},

		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;

			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;

			$option = $($option);
			if (!$option.length) return;

			self.$activeOption = $option.addClass('active');

			if (scroll || !isset(scroll)) {

				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;

				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}

			}
		},

		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;

			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},

		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;

			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},

		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},

		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;

			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},

		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},

		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},

		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}

			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort
			};
		},

		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();

			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}

			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}

			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}

			return result;
		},

		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;

			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}

			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));

			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}

			// render and group available options individually
			groups = {};
			groups_order = [];

			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];

				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = document.createDocumentFragment();
						groups_order.push(optgroup);
					}
					groups[optgroup].appendChild(option_html);
				}
			}

			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}

			// render optgroup headers & join groups
			html = document.createDocumentFragment();
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = document.createDocumentFragment();
					html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
					html_children.appendChild(groups[optgroup]);

					html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: domToString(html_children),
						dom:  html_children
					})));
				} else {
					html.appendChild(groups[optgroup]);
				}
			}

			$dropdown_content.html(html);

			// highlight matching terms inline
			if (self.settings.highlight && results.query.length && results.tokens.length) {
				$dropdown_content.removeHighlight();
				for (i = 0, n = results.tokens.length; i < n; i++) {
					highlight($dropdown_content, results.tokens[i].regex);
				}
			}

			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}

			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}

			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},

		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;

			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}

			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},

		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},

		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;

			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},

		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},

		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},

		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},

		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;

			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);

			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');

			order_old = self.options[value].$order;

			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;

			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];

			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}

			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}

			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;

			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},

		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);

			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];

			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},

		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;

			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			self.options = self.sifter.items = {};
			self.lastQuery = null;
			self.trigger('option_clear');
			self.clear();
		},

		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},

		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;

			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},

		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);

			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}

			return $();
		},

		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},

		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
		},

		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];

			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);

				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}

				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear(silent);
				if (inputMode === 'multi' && self.isFull()) return;

				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}

				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');

					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}

					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else {
						self.positionDropdown();
					}

					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
					self.updateOriginalInput({silent: silent});
				}
			});
		},

		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;

			$item = (value instanceof $) ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);

			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}

				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}

				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}

				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},

		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');

			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};

			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}

			if (!self.canCreate(input)) {
				callback();
				return false;
			}

			self.lock();

			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};

			var create = once(function(data) {
				self.unlock();

				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();

				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});

			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}

			return true;
		},

		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;

			if (this.isSetup) {
				this.addItem(this.items);
			}

			this.refreshState();
			this.updateOriginalInput();
		},

		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			this.refreshValidityState();
			this.refreshClasses();
		},

		/**
		 * Update the `required` attribute of both input and control input.
		 *
		 * The `required` property needs to be activated on the control input
		 * for the error to be displayed at the right place. `required` also
		 * needs to be temporarily deactivated on the input since the input is
		 * hidden and can't show errors.
		 */
		refreshValidityState: function() {
			if (!this.isRequired) return false;

			var invalid = !this.items.length;

			this.isInvalid = invalid;
			this.$control_input.prop('required', invalid);
			this.$input.prop('required', !invalid);
		},

		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;

			self.$wrapper
				.toggleClass('rtl', self.rtl);

			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);

			self.$control_input.data('grow', !isFull && !isLocked);
		},

		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},

		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};

			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}

			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},

		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;

			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},

		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;

			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},

		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;

			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
				self.$control_input.blur(); // close keyboard on iOS
			}

			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();

			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},

		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);

			this.$dropdown.css({
				width : $control.outerWidth(),
				top   : offset.top,
				left  : offset.left
			});
		},

		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;

			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},

		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			if (caret === 0) {
				this.$control.prepend($el);
			} else {
				$(this.$control[0].childNodes[caret]).before($el);
			}
			this.setCaret(caret + 1);
		},

		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;

			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);

			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}

			// determine items that will be removed
			values = [];

			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }

				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}

			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}

			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}

			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);

			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}

			return true;
		},

		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;

			if (direction === 0) return;
			if (self.rtl) direction *= -1;

			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);

			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;

				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},

		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;

			if (direction === 0) return;

			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},

		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;

			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}

			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}

			self.caretPos = i;
		},

		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},

		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},

		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},

		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},

		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;

			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();

			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();

			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');

			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);

			delete self.$input[0].selectize;
		},

		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;

			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}

			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}

			// render markup
			html = $(self.settings.render[templateName].apply(this, [data, escape_html]));

			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				html.attr('data-selectable', '');
			}
			else if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html.attr('data-group', id);
			}
			if (templateName === 'option' || templateName === 'item') {
				html.attr('data-value', value || '');
			}

			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html[0];
			}

			return html[0];
		},

		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},

		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}

	});


	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],

		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,

		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',

		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,

		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',

		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',

		dropdownParent: null,

		copyClassesToDropdown: true,

		/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/

		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};


	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;

		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;

			var data_raw = $input.attr(attr_data);

			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};

		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
			var optionsMap = {};

			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};

			var addOption = function($option, group) {
				$option = $($option);

				var value = hash_key($option.val());
				if (!value && !settings.allowEmptyOption) return;

				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}

				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_optgroup] = option[field_optgroup] || group;

				optionsMap[value] = option;
				options.push(option);

				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};

			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;

				$optgroup = $($optgroup);
				id = $optgroup.attr('label');

				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					settings_element.optgroups.push(optgroup);
				}

				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};

			settings_element.maxItems = $input.attr('multiple') ? null : 1;

			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};

		return this.each(function() {
			if (this.selectize) return;

			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}

			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};

			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}

			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};

	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};


	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;

		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();

		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();

		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);

				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();

	});

	Selectize.define('dropdown_header', function(options) {
		var self = this;

		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',

			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
					'<div class="' + data.titleRowClass + '">' +
					'<span class="' + data.labelClass + '">' + data.title + '</span>' +
					'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
					'</div>' +
					'</div>'
				);
			}
		}, options);

		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();

	});

	Selectize.define('optgroup_columns', function(options) {
		var self = this;

		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);

		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;

			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};

		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;

				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);

					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}

					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}

				return original.apply(this, arguments);
			};
		})();

		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;

			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};

		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;

			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;

			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}

			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};

		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}


	});

	Selectize.define('remove_button', function(options) {
		options = $.extend({
			label     : '&times;',
			title     : 'Remove',
			className : 'remove',
			append    : true
		}, options);

		var singleClose = function(thisRef, options) {

			options.className = 'remove-single';

			var self = thisRef;
			var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

			/**
			 * Appends an element as a child (with raw HTML).
			 *
			 * @param {string} html_container
			 * @param {string} html_element
			 * @return {string}
			 */
			var append = function(html_container, html_element) {
				return html_container + html_element;
			};

			thisRef.setup = (function() {
				var original = self.setup;
				return function() {
					// override the item rendering method to add the button to each
					if (options.append) {
						var id = $(self.$input.context).attr('id');
						var selectizer = $('#'+id);

						var render_item = self.settings.render.item;
						self.settings.render.item = function(data) {
							return append(render_item.apply(thisRef, arguments), html);
						};
					}

					original.apply(thisRef, arguments);

					// add event listener
					thisRef.$control.on('click', '.' + options.className, function(e) {
						e.preventDefault();
						if (self.isLocked) return;

						self.clear();
					});

				};
			})();
		};

		var multiClose = function(thisRef, options) {

			var self = thisRef;
			var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

			/**
			 * Appends an element as a child (with raw HTML).
			 *
			 * @param {string} html_container
			 * @param {string} html_element
			 * @return {string}
			 */
			var append = function(html_container, html_element) {
				var pos = html_container.search(/(<\/[^>]+>\s*)$/);
				return html_container.substring(0, pos) + html_element + html_container.substring(pos);
			};

			thisRef.setup = (function() {
				var original = self.setup;
				return function() {
					// override the item rendering method to add the button to each
					if (options.append) {
						var render_item = self.settings.render.item;
						self.settings.render.item = function(data) {
							return append(render_item.apply(thisRef, arguments), html);
						};
					}

					original.apply(thisRef, arguments);

					// add event listener
					thisRef.$control.on('click', '.' + options.className, function(e) {
						e.preventDefault();
						if (self.isLocked) return;

						var $item = $(e.currentTarget).parent();
						self.setActiveItem($item);
						if (self.deleteSelection()) {
							self.setCaret(self.items.length);
						}
					});

				};
			})();
		};

		if (this.settings.mode === 'single') {
			singleClose(this, options);
			return;
		} else {
			multiClose(this, options);
		}
	});


	Selectize.define('restore_on_backspace', function(options) {
		var self = this;

		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};

		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});


	return Selectize;
}));
/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.flatpickr = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ru = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Russian = {
      weekdays: {
          shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: [
              "Воскресенье",
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота",
          ]
      },
      months: {
          shorthand: [
              "Янв",
              "Фев",
              "Март",
              "Апр",
              "Май",
              "Июнь",
              "Июль",
              "Авг",
              "Сен",
              "Окт",
              "Ноя",
              "Дек",
          ],
          longhand: [
              "Январь",
              "Февраль",
              "Март",
              "Апрель",
              "Май",
              "Июнь",
              "Июль",
              "Август",
              "Сентябрь",
              "Октябрь",
              "Ноябрь",
              "Декабрь",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " — ",
      weekAbbreviation: "Нед.",
      scrollTitle: "Прокрутите для увеличения",
      toggleTitle: "Нажмите для переключения",
      amPM: ["ДП", "ПП"],
      yearAriaLabel: "Год",
      time_24hr: true
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;

  exports.Russian = Russian;
  exports.default = ru;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.pt = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Portuguese = {
      weekdays: {
          shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          longhand: [
              "Domingo",
              "Segunda-feira",
              "Terça-feira",
              "Quarta-feira",
              "Quinta-feira",
              "Sexta-feira",
              "Sábado",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
          ],
          longhand: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
          ]
      },
      rangeSeparator: " até ",
      time_24hr: true
  };
  fp.l10ns.pt = Portuguese;
  var pt = fp.l10ns;

  exports.Portuguese = Portuguese;
  exports.default = pt;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.tr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Turkish = {
      weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          longhand: [
              "Pazar",
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
          ]
      },
      months: {
          shorthand: [
              "Oca",
              "Şub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "Ağu",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
          ],
          longhand: [
              "Ocak",
              "Şubat",
              "Mart",
              "Nisan",
              "Mayıs",
              "Haziran",
              "Temmuz",
              "Ağustos",
              "Eylül",
              "Ekim",
              "Kasım",
              "Aralık",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Artırmak için kaydırın",
      toggleTitle: "Aç/Kapa",
      amPM: ["ÖÖ", "ÖS"],
      time_24hr: true
  };
  fp.l10ns.tr = Turkish;
  var tr = fp.l10ns;

  exports.Turkish = Turkish;
  exports.default = tr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/*! grapesjs - 0.15.9 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.grapesjs=e():t.grapesjs=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=90)}([function(t,e,n){(function(t,n){var r;!function(){var i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t||this||{},o=i._,a=Array.prototype,s=Object.prototype,l="undefined"!=typeof Symbol?Symbol.prototype:null,c=a.push,u=a.slice,h=s.toString,d=s.hasOwnProperty,f=Array.isArray,p=Object.keys,g=Object.create,v=function(){},m=function(t){return t instanceof m?t:this instanceof m?void(this._wrapped=t):new m(t)};e.nodeType?i._=m:(!n.nodeType&&n.exports&&(e=n.exports=m),e._=m),m.VERSION="1.9.1";var y,b=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return function(){return t.apply(e,arguments)}},w=function(t,e,n){return m.iteratee!==y?m.iteratee(t,e):null==t?m.identity:m.isFunction(t)?b(t,e,n):m.isObject(t)&&!m.isArray(t)?m.matcher(t):m.property(t)};m.iteratee=y=function(t,e){return w(t,e,1/0)};var x=function(t,e){return e=null==e?t.length-1:+e,function(){for(var n=Math.max(arguments.length-e,0),r=Array(n),i=0;i<n;i++)r[i]=arguments[i+e];switch(e){case 0:return t.call(this,r);case 1:return t.call(this,arguments[0],r);case 2:return t.call(this,arguments[0],arguments[1],r)}var o=Array(e+1);for(i=0;i<e;i++)o[i]=arguments[i];return o[e]=r,t.apply(this,o)}},C=function(t){if(!m.isObject(t))return{};if(g)return g(t);v.prototype=t;var e=new v;return v.prototype=null,e},O=function(t){return function(e){return null==e?void 0:e[t]}},k=function(t,e){return null!=t&&d.call(t,e)},S=function(t,e){for(var n=e.length,r=0;r<n;r++){if(null==t)return;t=t[e[r]]}return n?t:void 0},T=Math.pow(2,53)-1,P=O("length"),j=function(t){var e=P(t);return"number"==typeof e&&e>=0&&e<=T};m.each=m.forEach=function(t,e,n){var r,i;if(e=b(e,n),j(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=m.keys(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t},m.map=m.collect=function(t,e,n){e=w(e,n);for(var r=!j(t)&&m.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var s=r?r[a]:a;o[a]=e(t[s],s,t)}return o};var E=function(t){var e=function(e,n,r,i){var o=!j(e)&&m.keys(e),a=(o||e).length,s=t>0?0:a-1;for(i||(r=e[o?o[s]:s],s+=t);s>=0&&s<a;s+=t){var l=o?o[s]:s;r=n(r,e[l],l,e)}return r};return function(t,n,r,i){var o=arguments.length>=3;return e(t,b(n,i,4),r,o)}};m.reduce=m.foldl=m.inject=E(1),m.reduceRight=m.foldr=E(-1),m.find=m.detect=function(t,e,n){var r=(j(t)?m.findIndex:m.findKey)(t,e,n);if(void 0!==r&&-1!==r)return t[r]},m.filter=m.select=function(t,e,n){var r=[];return e=w(e,n),m.each(t,(function(t,n,i){e(t,n,i)&&r.push(t)})),r},m.reject=function(t,e,n){return m.filter(t,m.negate(w(e)),n)},m.every=m.all=function(t,e,n){e=w(e,n);for(var r=!j(t)&&m.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},m.some=m.any=function(t,e,n){e=w(e,n);for(var r=!j(t)&&m.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},m.contains=m.includes=m.include=function(t,e,n,r){return j(t)||(t=m.values(t)),("number"!=typeof n||r)&&(n=0),m.indexOf(t,e,n)>=0},m.invoke=x((function(t,e,n){var r,i;return m.isFunction(e)?i=e:m.isArray(e)&&(r=e.slice(0,-1),e=e[e.length-1]),m.map(t,(function(t){var o=i;if(!o){if(r&&r.length&&(t=S(t,r)),null==t)return;o=t[e]}return null==o?o:o.apply(t,n)}))})),m.pluck=function(t,e){return m.map(t,m.property(e))},m.where=function(t,e){return m.filter(t,m.matcher(e))},m.findWhere=function(t,e){return m.find(t,m.matcher(e))},m.max=function(t,e,n){var r,i,o=-1/0,a=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof t[0]&&null!=t)for(var s=0,l=(t=j(t)?t:m.values(t)).length;s<l;s++)null!=(r=t[s])&&r>o&&(o=r);else e=w(e,n),m.each(t,(function(t,n,r){((i=e(t,n,r))>a||i===-1/0&&o===-1/0)&&(o=t,a=i)}));return o},m.min=function(t,e,n){var r,i,o=1/0,a=1/0;if(null==e||"number"==typeof e&&"object"!=typeof t[0]&&null!=t)for(var s=0,l=(t=j(t)?t:m.values(t)).length;s<l;s++)null!=(r=t[s])&&r<o&&(o=r);else e=w(e,n),m.each(t,(function(t,n,r){((i=e(t,n,r))<a||i===1/0&&o===1/0)&&(o=t,a=i)}));return o},m.shuffle=function(t){return m.sample(t,1/0)},m.sample=function(t,e,n){if(null==e||n)return j(t)||(t=m.values(t)),t[m.random(t.length-1)];var r=j(t)?m.clone(t):m.values(t),i=P(r);e=Math.max(Math.min(e,i),0);for(var o=i-1,a=0;a<e;a++){var s=m.random(a,o),l=r[a];r[a]=r[s],r[s]=l}return r.slice(0,e)},m.sortBy=function(t,e,n){var r=0;return e=w(e,n),m.pluck(m.map(t,(function(t,n,i){return{value:t,index:r++,criteria:e(t,n,i)}})).sort((function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index})),"value")};var M=function(t,e){return function(n,r,i){var o=e?[[],[]]:{};return r=w(r,i),m.each(n,(function(e,i){var a=r(e,i,n);t(o,e,a)})),o}};m.groupBy=M((function(t,e,n){k(t,n)?t[n].push(e):t[n]=[e]})),m.indexBy=M((function(t,e,n){t[n]=e})),m.countBy=M((function(t,e,n){k(t,n)?t[n]++:t[n]=1}));var D=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;m.toArray=function(t){return t?m.isArray(t)?u.call(t):m.isString(t)?t.match(D):j(t)?m.map(t,m.identity):m.values(t):[]},m.size=function(t){return null==t?0:j(t)?t.length:m.keys(t).length},m.partition=M((function(t,e,n){t[n?0:1].push(e)}),!0),m.first=m.head=m.take=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[0]:m.initial(t,t.length-e)},m.initial=function(t,e,n){return u.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},m.last=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[t.length-1]:m.rest(t,Math.max(0,t.length-e))},m.rest=m.tail=m.drop=function(t,e,n){return u.call(t,null==e||n?1:e)},m.compact=function(t){return m.filter(t,Boolean)};var A=function(t,e,n,r){for(var i=(r=r||[]).length,o=0,a=P(t);o<a;o++){var s=t[o];if(j(s)&&(m.isArray(s)||m.isArguments(s)))if(e)for(var l=0,c=s.length;l<c;)r[i++]=s[l++];else A(s,e,n,r),i=r.length;else n||(r[i++]=s)}return r};m.flatten=function(t,e){return A(t,e,!1)},m.without=x((function(t,e){return m.difference(t,e)})),m.uniq=m.unique=function(t,e,n,r){m.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=w(n,r));for(var i=[],o=[],a=0,s=P(t);a<s;a++){var l=t[a],c=n?n(l,a,t):l;e&&!n?(a&&o===c||i.push(l),o=c):n?m.contains(o,c)||(o.push(c),i.push(l)):m.contains(i,l)||i.push(l)}return i},m.union=x((function(t){return m.uniq(A(t,!0,!0))})),m.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=P(t);r<i;r++){var o=t[r];if(!m.contains(e,o)){var a;for(a=1;a<n&&m.contains(arguments[a],o);a++);a===n&&e.push(o)}}return e},m.difference=x((function(t,e){return e=A(e,!0,!0),m.filter(t,(function(t){return!m.contains(e,t)}))})),m.unzip=function(t){for(var e=t&&m.max(t,P).length||0,n=Array(e),r=0;r<e;r++)n[r]=m.pluck(t,r);return n},m.zip=x(m.unzip),m.object=function(t,e){for(var n={},r=0,i=P(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n};var L=function(t){return function(e,n,r){n=w(n,r);for(var i=P(e),o=t>0?0:i-1;o>=0&&o<i;o+=t)if(n(e[o],o,e))return o;return-1}};m.findIndex=L(1),m.findLastIndex=L(-1),m.sortedIndex=function(t,e,n,r){for(var i=(n=w(n,r,1))(e),o=0,a=P(t);o<a;){var s=Math.floor((o+a)/2);n(t[s])<i?o=s+1:a=s}return o};var N=function(t,e,n){return function(r,i,o){var a=0,s=P(r);if("number"==typeof o)t>0?a=o>=0?o:Math.max(o+s,a):s=o>=0?Math.min(o+1,s):o+s+1;else if(n&&o&&s)return r[o=n(r,i)]===i?o:-1;if(i!=i)return(o=e(u.call(r,a,s),m.isNaN))>=0?o+a:-1;for(o=t>0?a:s-1;o>=0&&o<s;o+=t)if(r[o]===i)return o;return-1}};m.indexOf=N(1,m.findIndex,m.sortedIndex),m.lastIndexOf=N(-1,m.findLastIndex),m.range=function(t,e,n){null==e&&(e=t||0,t=0),n||(n=e<t?-1:1);for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i},m.chunk=function(t,e){if(null==e||e<1)return[];for(var n=[],r=0,i=t.length;r<i;)n.push(u.call(t,r,r+=e));return n};var I=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=C(t.prototype),a=t.apply(o,i);return m.isObject(a)?a:o};m.bind=x((function(t,e,n){if(!m.isFunction(t))throw new TypeError("Bind must be called on a function");var r=x((function(i){return I(t,r,e,this,n.concat(i))}));return r})),m.partial=x((function(t,e){var n=m.partial.placeholder,r=function(){for(var i=0,o=e.length,a=Array(o),s=0;s<o;s++)a[s]=e[s]===n?arguments[i++]:e[s];for(;i<arguments.length;)a.push(arguments[i++]);return I(t,r,this,this,a)};return r})),m.partial.placeholder=m,m.bindAll=x((function(t,e){var n=(e=A(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=e[n];t[r]=m.bind(t[r],t)}})),m.memoize=function(t,e){var n=function(r){var i=n.cache,o=""+(e?e.apply(this,arguments):r);return k(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return n.cache={},n},m.delay=x((function(t,e,n){return setTimeout((function(){return t.apply(null,n)}),e)})),m.defer=m.partial(m.delay,m,1),m.throttle=function(t,e,n){var r,i,o,a,s=0;n||(n={});var l=function(){s=!1===n.leading?0:m.now(),r=null,a=t.apply(i,o),r||(i=o=null)},c=function(){var c=m.now();s||!1!==n.leading||(s=c);var u=e-(c-s);return i=this,o=arguments,u<=0||u>e?(r&&(clearTimeout(r),r=null),s=c,a=t.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(l,u)),a};return c.cancel=function(){clearTimeout(r),s=0,r=i=o=null},c},m.debounce=function(t,e,n){var r,i,o=function(e,n){r=null,n&&(i=t.apply(e,n))},a=x((function(a){if(r&&clearTimeout(r),n){var s=!r;r=setTimeout(o,e),s&&(i=t.apply(this,a))}else r=m.delay(o,e,this,a);return i}));return a.cancel=function(){clearTimeout(r),r=null},a},m.wrap=function(t,e){return m.partial(e,t)},m.negate=function(t){return function(){return!t.apply(this,arguments)}},m.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},m.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},m.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},m.once=m.partial(m.before,2),m.restArguments=x;var F=!{toString:null}.propertyIsEnumerable("toString"),R=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],_=function(t,e){var n=R.length,r=t.constructor,i=m.isFunction(r)&&r.prototype||s,o="constructor";for(k(t,o)&&!m.contains(e,o)&&e.push(o);n--;)(o=R[n])in t&&t[o]!==i[o]&&!m.contains(e,o)&&e.push(o)};m.keys=function(t){if(!m.isObject(t))return[];if(p)return p(t);var e=[];for(var n in t)k(t,n)&&e.push(n);return F&&_(t,e),e},m.allKeys=function(t){if(!m.isObject(t))return[];var e=[];for(var n in t)e.push(n);return F&&_(t,e),e},m.values=function(t){for(var e=m.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},m.mapObject=function(t,e,n){e=w(e,n);for(var r=m.keys(t),i=r.length,o={},a=0;a<i;a++){var s=r[a];o[s]=e(t[s],s,t)}return o},m.pairs=function(t){for(var e=m.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},m.invert=function(t){for(var e={},n=m.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},m.functions=m.methods=function(t){var e=[];for(var n in t)m.isFunction(t[n])&&e.push(n);return e.sort()};var V=function(t,e){return function(n){var r=arguments.length;if(e&&(n=Object(n)),r<2||null==n)return n;for(var i=1;i<r;i++)for(var o=arguments[i],a=t(o),s=a.length,l=0;l<s;l++){var c=a[l];e&&void 0!==n[c]||(n[c]=o[c])}return n}};m.extend=V(m.allKeys),m.extendOwn=m.assign=V(m.keys),m.findKey=function(t,e,n){e=w(e,n);for(var r,i=m.keys(t),o=0,a=i.length;o<a;o++)if(e(t[r=i[o]],r,t))return r};var z,H,$=function(t,e,n){return e in n};m.pick=x((function(t,e){var n={},r=e[0];if(null==t)return n;m.isFunction(r)?(e.length>1&&(r=b(r,e[1])),e=m.allKeys(t)):(r=$,e=A(e,!1,!1),t=Object(t));for(var i=0,o=e.length;i<o;i++){var a=e[i],s=t[a];r(s,a,t)&&(n[a]=s)}return n})),m.omit=x((function(t,e){var n,r=e[0];return m.isFunction(r)?(r=m.negate(r),e.length>1&&(n=e[1])):(e=m.map(A(e,!1,!1),String),r=function(t,n){return!m.contains(e,n)}),m.pick(t,r,n)})),m.defaults=V(m.allKeys,!0),m.create=function(t,e){var n=C(t);return e&&m.extendOwn(n,e),n},m.clone=function(t){return m.isObject(t)?m.isArray(t)?t.slice():m.extend({},t):t},m.tap=function(t,e){return e(t),t},m.isMatch=function(t,e){var n=m.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0},z=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var i=typeof t;return("function"===i||"object"===i||"object"==typeof e)&&H(t,e,n,r)},H=function(t,e,n,r){t instanceof m&&(t=t._wrapped),e instanceof m&&(e=e._wrapped);var i=h.call(t);if(i!==h.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return l.valueOf.call(t)===l.valueOf.call(e)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var a=t.constructor,s=e.constructor;if(a!==s&&!(m.isFunction(a)&&a instanceof a&&m.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in e)return!1}r=r||[];for(var c=(n=n||[]).length;c--;)if(n[c]===t)return r[c]===e;if(n.push(t),r.push(e),o){if((c=t.length)!==e.length)return!1;for(;c--;)if(!z(t[c],e[c],n,r))return!1}else{var u,d=m.keys(t);if(c=d.length,m.keys(e).length!==c)return!1;for(;c--;)if(u=d[c],!k(e,u)||!z(t[u],e[u],n,r))return!1}return n.pop(),r.pop(),!0},m.isEqual=function(t,e){return z(t,e)},m.isEmpty=function(t){return null==t||(j(t)&&(m.isArray(t)||m.isString(t)||m.isArguments(t))?0===t.length:0===m.keys(t).length)},m.isElement=function(t){return!(!t||1!==t.nodeType)},m.isArray=f||function(t){return"[object Array]"===h.call(t)},m.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},m.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],(function(t){m["is"+t]=function(e){return h.call(e)==="[object "+t+"]"}})),m.isArguments(arguments)||(m.isArguments=function(t){return k(t,"callee")});var W=i.document&&i.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof W&&(m.isFunction=function(t){return"function"==typeof t||!1}),m.isFinite=function(t){return!m.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},m.isNaN=function(t){return m.isNumber(t)&&isNaN(t)},m.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===h.call(t)},m.isNull=function(t){return null===t},m.isUndefined=function(t){return void 0===t},m.has=function(t,e){if(!m.isArray(e))return k(t,e);for(var n=e.length,r=0;r<n;r++){var i=e[r];if(null==t||!d.call(t,i))return!1;t=t[i]}return!!n},m.noConflict=function(){return i._=o,this},m.identity=function(t){return t},m.constant=function(t){return function(){return t}},m.noop=function(){},m.property=function(t){return m.isArray(t)?function(e){return S(e,t)}:O(t)},m.propertyOf=function(t){return null==t?function(){}:function(e){return m.isArray(e)?S(t,e):t[e]}},m.matcher=m.matches=function(t){return t=m.extendOwn({},t),function(e){return m.isMatch(e,t)}},m.times=function(t,e,n){var r=Array(Math.max(0,t));e=b(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},m.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},U=m.invert(B),q=function(t){var e=function(e){return t[e]},n="(?:"+m.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};m.escape=q(B),m.unescape=q(U),m.result=function(t,e,n){m.isArray(e)||(e=[e]);var r=e.length;if(!r)return m.isFunction(n)?n.call(t):n;for(var i=0;i<r;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=n,i=r),t=m.isFunction(o)?o.call(t):o}return t};var G=0;m.uniqueId=function(t){var e=++G+"";return t?t+e:e},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,Y={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},X=/\\|'|\r|\n|\u2028|\u2029/g,J=function(t){return"\\"+Y[t]};m.template=function(t,e,n){!e&&n&&(e=n),e=m.defaults({},e,m.templateSettings);var r,i=RegExp([(e.escape||K).source,(e.interpolate||K).source,(e.evaluate||K).source].join("|")+"|$","g"),o=0,a="__p+='";t.replace(i,(function(e,n,r,i,s){return a+=t.slice(o,s).replace(X,J),o=s+e.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),e})),a+="';\n",e.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(e.variable||"obj","_",a)}catch(t){throw t.source=a,t}var s=function(t){return r.call(this,t,m)},l=e.variable||"obj";return s.source="function("+l+"){\n"+a+"}",s},m.chain=function(t){var e=m(t);return e._chain=!0,e};var Z=function(t,e){return t._chain?m(e).chain():e};m.mixin=function(t){return m.each(m.functions(t),(function(e){var n=m[e]=t[e];m.prototype[e]=function(){var t=[this._wrapped];return c.apply(t,arguments),Z(this,n.apply(m,t))}})),m},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],(function(t){var e=a[t];m.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],Z(this,n)}})),m.each(["concat","join","slice"],(function(t){var e=a[t];m.prototype[t]=function(){return Z(this,e.apply(this._wrapped,arguments))}})),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return m}.apply(e,[]))||(n.exports=r)}()}).call(this,n(23),n(67)(t))},function(t,e,n){(function(r){var i,o,a;a="object"==typeof self&&self.self===self&&self||"object"==typeof r&&r.global===r&&r,i=[n(0),n(21),e],void 0===(o=function(t,e,n){a.Backbone=function(t,e,n,r){var i=t.Backbone,o=Array.prototype.slice;e.VERSION="1.3.3",e.$=r,e.noConflict=function(){return t.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var a=function(t,e,r){n.each(e,(function(e,i){n[i]&&(t.prototype[i]=function(t,e,r){switch(t){case 1:return function(){return n[e](this[r])};case 2:return function(t){return n[e](this[r],t)};case 3:return function(t,i){return n[e](this[r],s(t,this),i)};case 4:return function(t,i,o){return n[e](this[r],s(t,this),i,o)};default:return function(){var t=o.call(arguments);return t.unshift(this[r]),n[e].apply(n,t)}}}(e,i,r))}))},s=function(t,e){return n.isFunction(t)?t:n.isObject(t)&&!e._isModel(t)?l(t):n.isString(t)?function(e){return e.get(t)}:t},l=function(t){var e=n.matches(t);return function(t){return e(t.attributes)}},c=e.Events={},u=/\s+/,h=function(t,e,r,i,o){var a,s=0;if(r&&"object"==typeof r){void 0!==i&&"context"in o&&void 0===o.context&&(o.context=i);for(a=n.keys(r);s<a.length;s++)e=h(t,e,a[s],r[a[s]],o)}else if(r&&u.test(r))for(a=r.split(u);s<a.length;s++)e=t(e,a[s],i,o);else e=t(e,r,i,o);return e};c.on=function(t,e,n){return d(this,t,e,n)};var d=function(t,e,n,r,i){return t._events=h(f,t._events||{},e,n,{context:r,ctx:t,listening:i}),i&&((t._listeners||(t._listeners={}))[i.id]=i),t};c.listenTo=function(t,e,r){if(!t)return this;var i=t._listenId||(t._listenId=n.uniqueId("l")),o=this._listeningTo||(this._listeningTo={}),a=o[i];if(!a){var s=this._listenId||(this._listenId=n.uniqueId("l"));a=o[i]={obj:t,objId:i,id:s,listeningTo:o,count:0}}return d(t,e,r,this,a),this};var f=function(t,e,n,r){if(n){var i=t[e]||(t[e]=[]),o=r.context,a=r.ctx,s=r.listening;s&&s.count++,i.push({callback:n,context:o,ctx:o||a,listening:s})}return t};c.off=function(t,e,n){return this._events?(this._events=h(p,this._events,t,e,{context:n,listeners:this._listeners}),this):this},c.stopListening=function(t,e,r){var i=this._listeningTo;if(!i)return this;for(var o=t?[t._listenId]:n.keys(i),a=0;a<o.length;a++){var s=i[o[a]];if(!s)break;s.obj.off(e,r,this)}return this};var p=function(t,e,r,i){if(t){var o,a=0,s=i.context,l=i.listeners;if(e||r||s){for(var c=e?[e]:n.keys(t);a<c.length;a++){var u=t[e=c[a]];if(!u)break;for(var h=[],d=0;d<u.length;d++){var f=u[d];r&&r!==f.callback&&r!==f.callback._callback||s&&s!==f.context?h.push(f):(o=f.listening)&&0==--o.count&&(delete l[o.id],delete o.listeningTo[o.objId])}h.length?t[e]=h:delete t[e]}return t}for(var p=n.keys(l);a<p.length;a++)delete l[(o=l[p[a]]).id],delete o.listeningTo[o.objId]}};c.once=function(t,e,r){var i=h(g,{},t,e,n.bind(this.off,this));return"string"==typeof t&&null==r&&(e=void 0),this.on(i,e,r)},c.listenToOnce=function(t,e,r){var i=h(g,{},e,r,n.bind(this.stopListening,this,t));return this.listenTo(t,i)};var g=function(t,e,r,i){if(r){var o=t[e]=n.once((function(){i(e,o),r.apply(this,arguments)}));o._callback=r}return t};c.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),n=Array(e),r=0;r<e;r++)n[r]=arguments[r+1];return h(v,this._events,t,void 0,n),this};var v=function(t,e,n,r){if(t){var i=t[e],o=t.all;i&&o&&(o=o.slice()),i&&m(i,r),o&&m(o,[e].concat(r))}return t},m=function(t,e){var n,r=-1,i=t.length,o=e[0],a=e[1],s=e[2];switch(e.length){case 0:for(;++r<i;)(n=t[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o,a);return;case 3:for(;++r<i;)(n=t[r]).callback.call(n.ctx,o,a,s);return;default:for(;++r<i;)(n=t[r]).callback.apply(n.ctx,e);return}};c.bind=c.on,c.unbind=c.off,n.extend(e,c);var y=e.Model=function(t,e){var r=t||{};e||(e={}),this.cid=n.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{});var i=n.result(this,"defaults");r=n.defaults(n.extend({},i,r),i),this.set(r,e),this.changed={},this.initialize.apply(this,arguments)};n.extend(y.prototype,c,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!n.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(null==t)return this;var i;if("object"==typeof t?(i=t,r=e):(i={})[t]=e,r||(r={}),!this._validate(i,r))return!1;var o=r.unset,a=r.silent,s=[],l=this._changing;this._changing=!0,l||(this._previousAttributes=n.clone(this.attributes),this.changed={});var c=this.attributes,u=this.changed,h=this._previousAttributes;for(var d in i)e=i[d],n.isEqual(c[d],e)||s.push(d),n.isEqual(h[d],e)?delete u[d]:u[d]=e,o?delete c[d]:c[d]=e;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!a){s.length&&(this._pending=r);for(var f=0;f<s.length;f++)this.trigger("change:"+s[f],this,c[s[f]],r)}if(l)return this;if(!a)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&n.clone(this.changed);var e=this._changing?this._previousAttributes:this.attributes,r={};for(var i in t){var o=t[i];n.isEqual(e[i],o)||(r[i]=o)}return!!n.size(r)&&r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){t=n.extend({parse:!0},t);var e=this,r=t.success;return t.success=function(n){var i=t.parse?e.parse(n,t):n;if(!e.set(i,t))return!1;r&&r.call(t.context,e,n,t),e.trigger("sync",e,n,t)},R(this,t),this.sync("read",this,t)},save:function(t,e,r){var i;null==t||"object"==typeof t?(i=t,r=e):(i={})[t]=e;var o=(r=n.extend({validate:!0,parse:!0},r)).wait;if(i&&!o){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;var a=this,s=r.success,l=this.attributes;r.success=function(t){a.attributes=l;var e=r.parse?a.parse(t,r):t;if(o&&(e=n.extend({},i,e)),e&&!a.set(e,r))return!1;s&&s.call(r.context,a,t,r),a.trigger("sync",a,t,r)},R(this,r),i&&o&&(this.attributes=n.extend({},l,i));var c=this.isNew()?"create":r.patch?"patch":"update";"patch"!==c||r.attrs||(r.attrs=i);var u=this.sync(c,this,r);return this.attributes=l,u},destroy:function(t){t=t?n.clone(t):{};var e=this,r=t.success,i=t.wait,o=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(n){i&&o(),r&&r.call(t.context,e,n,t),e.isNew()||e.trigger("sync",e,n,t)};var a=!1;return this.isNew()?n.defer(t.success):(R(this,t),a=this.sync("delete",this,t)),i||o(),a},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return!r||(this.trigger("invalid",this,r,n.extend(e,{validationError:r})),!1)}}),a(y,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes");var b=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,n.extend({silent:!0},e))},w={add:!0,remove:!0,merge:!0},x={add:!0,remove:!1},C=function(t,e,n){n=Math.min(Math.max(n,0),t.length);var r,i=Array(t.length-n),o=e.length;for(r=0;r<i.length;r++)i[r]=t[r+n];for(r=0;r<o;r++)t[r+n]=e[r];for(r=0;r<i.length;r++)t[r+o+n]=i[r]};n.extend(b.prototype,c,{model:y,initialize:function(){},toJSON:function(t){return this.map((function(e){return e.toJSON(t)}))},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,x))},remove:function(t,e){e=n.extend({},e);var r=!n.isArray(t);t=r?[t]:t.slice();var i=this._removeModels(t,e);return!e.silent&&i.length&&(e.changes={added:[],merged:[],removed:i},this.trigger("update",this,e)),r?i[0]:i},set:function(t,e){if(null!=t){(e=n.extend({},w,e)).parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var r=!n.isArray(t);t=r?[t]:t.slice();var i=e.at;null!=i&&(i=+i),i>this.length&&(i=this.length),i<0&&(i+=this.length+1);var o,a,s=[],l=[],c=[],u=[],h={},d=e.add,f=e.merge,p=e.remove,g=!1,v=this.comparator&&null==i&&!1!==e.sort,m=n.isString(this.comparator)?this.comparator:null;for(a=0;a<t.length;a++){o=t[a];var y=this.get(o);if(y){if(f&&o!==y){var b=this._isModel(o)?o.attributes:o;e.parse&&(b=y.parse(b,e)),y.set(b,e),c.push(y),v&&!g&&(g=y.hasChanged(m))}h[y.cid]||(h[y.cid]=!0,s.push(y)),t[a]=y}else d&&(o=t[a]=this._prepareModel(o,e))&&(l.push(o),this._addReference(o,e),h[o.cid]=!0,s.push(o))}if(p){for(a=0;a<this.length;a++)h[(o=this.models[a]).cid]||u.push(o);u.length&&this._removeModels(u,e)}var x=!1,O=!v&&d&&p;if(s.length&&O?(x=this.length!==s.length||n.some(this.models,(function(t,e){return t!==s[e]})),this.models.length=0,C(this.models,s,0),this.length=this.models.length):l.length&&(v&&(g=!0),C(this.models,l,null==i?this.length:i),this.length=this.models.length),g&&this.sort({silent:!0}),!e.silent){for(a=0;a<l.length;a++)null!=i&&(e.index=i+a),(o=l[a]).trigger("add",o,this,e);(g||x)&&this.trigger("sort",this,e),(l.length||u.length||c.length)&&(e.changes={added:l,removed:u,merged:c},this.trigger("update",this,e))}return r?t[0]:t}},reset:function(t,e){e=e?n.clone(e):{};for(var r=0;r<this.models.length;r++)this._removeReference(this.models[r],e);return e.previousModels=this.models,this._reset(),t=this.add(t,n.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;return n.isFunction(e)&&(e=n.bind(e,this)),1===r||n.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(t){var e=(t=n.extend({parse:!0},t)).success,r=this;return t.success=function(n){var i=t.reset?"reset":"set";r[i](n,t),e&&e.call(t.context,r,n,t),r.trigger("sync",r,n,t)},R(this,t),this.sync("read",this,t)},create:function(t,e){var r=(e=e?n.clone(e):{}).wait;if(!(t=this._prepareModel(t,e)))return!1;r||this.add(t,e);var i=this,o=e.success;return e.success=function(t,e,n){r&&i.add(t,n),o&&o.call(n.context,t,e,n)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;(e=e?n.clone(e):{}).collection=this;var r=new this.model(t,e);return r.validationError?(this.trigger("invalid",this,r.validationError,e),!1):r},_removeModels:function(t,e){for(var n=[],r=0;r<t.length;r++){var i=this.get(t[r]);if(i){var o=this.indexOf(i);this.models.splice(o,1),this.length--,delete this._byId[i.cid];var a=this.modelId(i.attributes);null!=a&&delete this._byId[a],e.silent||(e.index=o,i.trigger("remove",i,this,e)),n.push(i),this._removeReference(i,e)}}return n},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var n=this.modelId(t.attributes);null!=n&&(this._byId[n]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var n=this.modelId(t.attributes);null!=n&&delete this._byId[n],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,r){if(e){if(("add"===t||"remove"===t)&&n!==this)return;if("destroy"===t&&this.remove(e,r),"change"===t){var i=this.modelId(e.previousAttributes()),o=this.modelId(e.attributes);i!==o&&(null!=i&&delete this._byId[i],null!=o&&(this._byId[o]=e))}}this.trigger.apply(this,arguments)}}),a(b,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models");var O=e.View=function(t){this.cid=n.uniqueId("view"),n.extend(this,n.pick(t,S)),this._ensureElement(),this.initialize.apply(this,arguments)},k=/^(\S+)\s*(.*)$/,S=["model","collection","el","id","attributes","className","tagName","events"];n.extend(O.prototype,c,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=n.result(this,"events")),!t)return this;for(var e in this.undelegateEvents(),t){var r=t[e];if(n.isFunction(r)||(r=this[r]),r){var i=e.match(k);this.delegate(i[1],i[2],n.bind(r,this))}}return this},delegate:function(t,e,n){return this.$el.on(t+".delegateEvents"+this.cid,e,n),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,n){return this.$el.off(t+".delegateEvents"+this.cid,e,n),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"));else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id")),this.className&&(t.class=n.result(this,"className")),this.setElement(this._createElement(n.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}}),e.sync=function(t,r,i){var o=T[t];n.defaults(i||(i={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:o,dataType:"json"};if(i.url||(a.url=n.result(r,"url")||F()),null!=i.data||!r||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),i.emulateHTTP&&("PUT"===o||"DELETE"===o||"PATCH"===o)){a.type="POST",i.emulateJSON&&(a.data._method=o);var s=i.beforeSend;i.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",o),s)return s.apply(this,arguments)}}"GET"===a.type||i.emulateJSON||(a.processData=!1);var l=i.error;i.error=function(t,e,n){i.textStatus=e,i.errorThrown=n,l&&l.call(i.context,t,e,n)};var c=i.xhr=e.ajax(n.extend(a,i));return r.trigger("request",r,c,i),c};var T={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var P=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},j=/\((.*?)\)/g,E=/(\(\?)?:\w+/g,M=/\*\w+/g,D=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(P.prototype,c,{initialize:function(){},route:function(t,r,i){n.isRegExp(t)||(t=this._routeToRegExp(t)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var o=this;return e.history.route(t,(function(n){var a=o._extractParameters(t,n);!1!==o.execute(i,a,r)&&(o.trigger.apply(o,["route:"+r].concat(a)),o.trigger("route",r,a),e.history.trigger("route",o,r,a))})),this},execute:function(t,e,n){t&&t.apply(this,e)},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(D,"\\$&").replace(j,"(?:$1)?").replace(E,(function(t,e){return e?t:"([^/?]+)"})).replace(M,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return n.map(r,(function(t,e){return e===r.length-1?t||null:t?decodeURIComponent(t):null}))}});var A=e.History=function(){this.handlers=[],this.checkUrl=n.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},L=/^[#\/]|\s+$/g,N=/^\/+|\/+$/g,I=/#.*$/;A.started=!1,n.extend(A.prototype,c,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(L,"")},start:function(t){if(A.started)throw new Error("Backbone.history has already been started");if(A.started=!0,this.options=n.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(N,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var r=document.body,i=r.insertBefore(this.iframe,r.firstChild).contentWindow;i.document.open(),i.document.close(),i.location.hash="#"+this.fragment}var o=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?o("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?o("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),A.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),n.some(this.handlers,(function(e){if(e.route.test(t))return e.callback(t),!0})))},navigate:function(t,e){if(!A.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var n=this.root;""!==t&&"?"!==t.charAt(0)||(n=n.slice(0,-1)||"/");var r=n+t;if(t=this.decodeFragment(t.replace(I,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,r);else{if(!this._wantsHashChange)return this.location.assign(r);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var i=this.iframe.contentWindow;e.replace||(i.document.open(),i.document.close()),this._updateHash(i.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}),e.history=new A,y.extend=b.extend=P.extend=O.extend=A.extend=function(t,e){var r,i=this;return r=t&&n.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},n.extend(r,i,e),r.prototype=n.create(i.prototype,t),r.prototype.constructor=r,r.__super__=i.prototype,r};var F=function(){throw new Error('A "url" property or function must be specified')},R=function(t,e){var n=e.error;e.error=function(r){n&&n.call(e.context,t,r,e),t.trigger("error",t,r,e)}};return e}(a,n,t,e)}.apply(e,i))||(t.exports=o)}).call(this,n(23))},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";n.d(e,"l",(function(){return b})),n.d(e,"q",(function(){return u})),n.d(e,"p",(function(){return h})),n.d(e,"j",(function(){return v})),n.d(e,"n",(function(){return s})),n.d(e,"g",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"b",(function(){return p})),n.d(e,"m",(function(){return y})),n.d(e,"f",(function(){return k})),n.d(e,"k",(function(){return S})),n.d(e,"e",(function(){return m})),n.d(e,"r",(function(){return c})),n.d(e,"o",(function(){return g})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return T})),n.d(e,"a",(function(){return l}));var r=n(8),i=n.n(r),o=n(0),a=window.Element.prototype,s=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector,l=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(o.isArray)(e)?i()(e):[e];if(r.length){var a=r.shift();if(!n.unique||!document.querySelector('link[href="'.concat(a,'"]'))){var s=document,l=s.head,c=document.createElement("link");c.href=a,c.rel="stylesheet",n.prepand?l.insertBefore(c,l.firstChild):l.appendChild(c)}t(r)}},c=function(t,e){var n={},r=Object(o.keys)(e);for(var i in t)if(t.hasOwnProperty(i)){var a=t[i],s=e[i];r.indexOf(i)>=0?a!==s&&(n[i]=s):n[i]=null}for(var l in e)e.hasOwnProperty(l)&&Object(o.isUndefined)(t[l])&&(n[l]=e[l]);return n},u=function(t,e,n){e=e.split(/\s+/),t=t instanceof Array?t:[t];for(var r=function(r){t.forEach((function(t){return t.addEventListener(e[r],n)}))},i=0;i<e.length;++i)r(i)},h=function(t,e,n){e=e.split(/\s+/),t=t instanceof Array?t:[t];for(var r=function(r){t.forEach((function(t){return t.removeEventListener(e[r],n)}))},i=0;i<e.length;++i)r(i)},d=function(t){return t.replace(parseFloat(t),"")},f=function(t){return t[0].toUpperCase()+t.toLowerCase().slice(1)},p=function(t){var e=t.split("-").filter(String);return e[0].toLowerCase()+e.slice(1).map(f)},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(isNaN(t))return n;if(t=parseFloat(t),Math.floor(t)!==t){var i=e.toString().split(".")[1];r=i?i.length:0}return r?parseFloat(t.toFixed(r)):t},v=function(t){return"draggable"in document.createElement("i")&&(t?t.get("Config").nativeDnD:1)},m=function(t){return Object(o.isElement)(t)||y(t)?t:t&&t.getEl?t.getEl():void 0},y=function(t){return t&&3===t.nodeType},b=function(t){return t&&!y(t)&&!function(t){return t&&8===t.nodeType}(t)},w=function(t,e){var n=t;return Object(o.isElement)(t)&&(n=e(t).data("model")),n},x=function(t){var e,n={top:0,left:0,width:0,height:0};if(!t)return n;if(y(t)){var r=document.createRange();r.selectNode(t),e=r.getBoundingClientRect(),r.detach()}return e||(t.getBoundingClientRect?t.getBoundingClientRect():n)},C=function(t){return t.touches&&t.touches[0]?t.touches[0]:t},O=function(t){return t.which||t.keyCode},k=function(t){return String.fromCharCode(O(t))},S=function(t){return 27===O(t)},T=function(t){return t.charAt(0).toUpperCase()+t.substring(1)}},function(t,e,n){"use strict";n.r(e);var r=n(6),i=n.n(r),o=n(2),a=n.n(o),s=n(0),l=n(3),c=n(20),u=n(1),h=n.n(u),d=n(18),f=n(7),p=n(9);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=h.a.Model.extend({defaults:{type:"text",label:"",name:"",min:"",max:"",unit:"",step:1,value:"",target:"",default:"",placeholder:"",changeProp:0,options:[]},initialize:function(){var t=this.get("target"),e=this.get("name"),n=this.get("changeProp");if(t){this.target=t,this.unset("target");var r=n?"change:".concat(e):"change:attributes:".concat(e);this.listenTo(t,r,this.targetUpdated)}},props:function(){return this.attributes},targetUpdated:function(){var t=this.getTargetValue();this.set({value:t},{fromTarget:1})},getTargetValue:function(){var t,e=this.get("name"),n=this.target;return t=this.get("changeProp")?n.get(e):n.getAttributes()[e],Object(s.isUndefined)(t)?"":t},setTargetValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.target,r=this.get("name");if(!Object(s.isUndefined)(t)){var i=t;if("false"===t?i=!1:"true"===t&&(i=!0),this.get("changeProp"))n.set(r,i,e);else{var o=v({},n.get("attributes"));o[r]=i,n.set("attributes",o,e)}}},setValueFromInput:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={value:t};this.set(r,v({},n,{avoidStore:1})),e&&(this.set("value","",n),this.set(r,n))},getInitValue:function(){var t,e=this.target,n=this.get("name");if(e){var r=e.get("attributes");t=this.get("changeProp")?e.get(n):r[n]}return t||this.get("value")||this.get("default")}}),y=h.a.Collection.extend({model:m,initialize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.em=e.em||"",this.listenTo(this,"add",this.handleAdd),this.listenTo(this,"reset",this.handleReset)},handleReset:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.previousModels,r=void 0===n?[]:n;r.forEach((function(t){return t.trigger("remove")}))},handleAdd:function(t){var e=this.target;e&&(t.target=e)},setTarget:function(t){this.target=t},add:function(t,e){var n=this.em;if(Object(s.isString)(t)||Object(s.isArray)(t)){var r=n&&n.get&&n.get("TraitManager"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{build:function(e){var n=[];"string"==typeof e&&(e=[e]);for(var r=0;r<e.length;r++){var i={},o=e[r];switch(i.name=o,o){case"target":i.type="select"}switch(o){case"target":i.options=t.optionsTarget}n.push(i)}return n}}}(r&&r.getConfig());Object(s.isString)(t)&&(t=[t]);for(var o=0,a=t.length;o<a;o++){var l=t[o],c=Object(s.isString)(l)?i.build(l)[0]:l;c.target=this.target,t[o]=c}}return h.a.Collection.prototype.add.apply(this,[t,e])}});function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x=function(t){return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},C=h.a.Model.extend(c.a).extend({defaults:{tagName:"div",type:"",name:"",removable:!0,draggable:!0,droppable:!0,badgable:!0,stylable:!0,"stylable-require":"","style-signature":"",unstylable:"",highlightable:!0,copyable:!0,resizable:!1,editable:!1,layerable:!0,selectable:!0,hoverable:!0,void:!1,state:"",status:"",content:"",icon:"",style:"",classes:"",script:"","script-export":"",attributes:"",traits:["id","title"],propagate:"",dmode:"",toolbar:null},init:function(){},updated:function(t,e,n){},removed:function(){},initialize:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.em,i=this.parent(),o=i&&i.attributes;if(o&&o.propagate){var a={},l=o.propagate;l.forEach((function(t){return a[t]=i.get(t)})),a.propagate=l,a=w({},a,{},e),this.set(a)}var c=this.get("propagate");c&&this.set("propagate",Object(s.isArray)(c)?c:[c]),n&&n.config&&n.config.voidElements.indexOf(this.get("tagName"))>=0&&this.set("void",!0),n.em=r,this.opt=n,this.em=r,this.config=n.config||{},this.set("attributes",w({},this.defaults.attributes||{},{},this.get("attributes")||{})),this.ccid=C.createId(this),this.initClasses(),this.initTraits(),this.initComponents(),this.initToolbar(),this.listenTo(this,"change:script",this.scriptUpdated),this.listenTo(this,"change:tagName",this.tagUpdated),this.listenTo(this,"change:attributes",this.attrUpdated),this.listenTo(this,"change:attributes:id",this._idUpdated),this.set("status",""),["classes","traits","components"].forEach((function(e){var n="add remove ".concat("components"!==e?"change":"");t.listenTo(t.get(e),n.trim(),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.emitUpdate.apply(t,[e].concat(r))}))})),n.temporary||(this.init(),r&&r.trigger("component:create",this))},is:function(t){return!(this.get("type")!=t)},props:function(){return this.attributes},index:function(){var t=this.collection;return t&&t.indexOf(this)},setDragMode:function(t){return this.set("dmode",t)},find:function(t){var e=[];return this.view.$el.find(t).each((function(t,n,r){var i=r.eq(n).data("model");i&&e.push(i)})),e},findType:function(t){var e=[];return function n(r){return r.forEach((function(r){r.is(t)&&e.push(r),n(r.components())}))}(this.components()),e},closest:function(t){var e=this.view.$el.closest(t);return e.length&&e.data("model")},tagUpdated:function(){var t=this.collection,e=t.indexOf(this);t.remove(this),t.add(this,{at:e})},replaceWith:function(t){var e=this.collection,n=e.indexOf(this);return e.remove(this),e.add(t,{at:n})},attrUpdated:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.get("attributes"),o=i.class;o&&this.setClass(o),delete i.class;var a=i.style;a&&this.setStyle(a),delete i.style;var c=w({},this.previous("attributes")),u=Object(l.r)(c,this.get("attributes"));Object(s.keys)(u).forEach((function(t){return n.trigger("change:attributes:".concat(t),n,u[t],r)}))},setAttributes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.set("attributes",w({},t),e),this},addAttributes:function(t){var e=w({},this.getAttributes(),{},t);return this.setAttributes(e),this},getStyle:function(){var t=this.em;if(t&&t.getConfig("avoidInlineStyle")){var e=this.get("state"),n=t.get("CssComposer").getIdRule(this.getId(),{state:e});if(this.rule=n,n)return n.getStyle()}return c.a.getStyle.call(this)},setStyle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.em,i=this.opt;if(r&&r.getConfig("avoidInlineStyle")&&!i.temporary){var o=this.get("style")||{};e=w({},e=Object(s.isString)(e)?this.parseStyle(e):e,{},o);var a=this.get("state"),u=r.get("CssComposer"),h=this.getStyle();this.rule=u.setIdRule(this.getId(),e,w({},n,{state:a}));var d=Object(l.r)(h,e);this.set("style",{},{silent:1}),Object(s.keys)(d).forEach((function(e){return t.trigger("change:style:".concat(e))}))}else e=c.a.setStyle.apply(this,arguments);return e},getAttributes:function(){var t,e=this.em,n=[],r=w({},this.get("attributes")),i=e&&e.get("SelectorManager"),o=this.getId();(this.get("classes").forEach((function(t){return n.push(Object(s.isString)(t)?t:t.get("name"))})),n.length&&(r.class=n.join(" ")),Object(s.has)(r,"id"))||(!function(t){return t&&t.getConfig("avoidInlineStyle")}(e)?Object(s.isEmpty)(this.getStyle())||(t=1):t=i&&i.get(o,i.Selector.TYPE_ID),t&&(r.id=this.getId()));return r},addClass:function(t){var e=this.em.get("SelectorManager").addClass(t);return this.get("classes").add(e)},setClass:function(t){return this.get("classes").reset(),this.addClass(t)},removeClass:function(t){var e=[];t=Object(s.isArray)(t)?t:[t];var n=this.get("classes"),r=f.a.TYPE_CLASS;return t.forEach((function(t){t.split(" ").forEach((function(t){var i=n.where({name:t,type:r})[0];i&&e.push(n.remove(i))}))})),e},getClasses:function(){var t=this.getAttributes().class;return t?t.split(" "):[]},initClasses:function(){var t=[this,"change:classes",this.initClasses],e=this.get("classes")||[],n=Object(s.isString)(e)?e.split(" "):e;this.stopListening.apply(this,t);var r=this.normalizeClasses(n),i=new p.a([]);return this.set("classes",i),i.add(r),this.listenTo.apply(this,t),this},initComponents:function(){var t=[this,"change:components",this.initComponents];this.stopListening.apply(this,t);var e=new d.a(null,this.opt);e.parent=this;var n=this.get("components"),r=!this.opt.avoidChildren;return this.set("components",e),r&&e.add(Object(s.isFunction)(n)?n(this):n),this.listenTo.apply(this,t),this},initTraits:function(t){var e=this.em,n=[this,"change:traits",this.initTraits];this.stopListening.apply(this,n),this.loadTraits();var r=w({},this.get("attributes")),i=this.get("traits");return i.each((function(t){if(!t.get("changeProp")){var e=t.get("name"),n=t.getInitValue();e&&n&&(r[e]=n)}})),i.length&&this.set("attributes",r),this.listenTo.apply(this,n),t&&e&&e.trigger("component:toggled"),this},append:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.components().add(t,e);return Object(s.isArray)(n)?n:[n]},components:function(t){var e=this.get("components");return Object(s.isUndefined)(t)?e:(e.reset(),t&&this.append(t))},parent:function(){var t=this.collection;return t&&t.parent},scriptUpdated:function(){this.set("scriptUpdated",1)},initToolbar:function(){var t=this.em,e=t&&t.getConfig("stylePrefix")||"";if(!this.get("toolbar")){var n=[];this.collection&&n.push({attributes:{class:"fa fa-arrow-up"},command:function(t){return t.runCommand("core:component-exit",{force:1})}}),this.get("draggable")&&n.push({attributes:{class:"fa fa-arrows ".concat(e,"no-touch-actions"),draggable:!0},command:"tlb-move"}),this.get("copyable")&&n.push({attributes:{class:"fa fa-clone"},command:"tlb-clone"}),this.get("removable")&&n.push({attributes:{class:"fa fa-trash-o"},command:"tlb-delete"}),this.set("toolbar",n)}},loadTraits:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=t||this.get("traits"),!((t=Object(s.isFunction)(t)?t(this):t)instanceof y)){var n=new y([],this.opt);n.setTarget(this),t.length&&(t.forEach((function(t){return t.attributes&&delete t.attributes.value})),n.add(t)),this.set("traits",n,e)}return this},getTrait:function(t){return this.get("traits").filter((function(e){return e.get("id")===t||e.get("name")===t}))[0]},updateTrait:function(t,e){var n=this.em,r=this.getTrait(t);return r&&r.set(e),n&&n.trigger("component:toggled"),this},getTraitIndex:function(t){var e=this.getTrait(t);return e?this.get("traits").indexOf(e):e},removeTrait:function(t){var e=this,n=this.em,r=(Object(s.isArray)(t)?t:[t]).map((function(t){return e.getTrait(t)})),i=this.get("traits").remove(r);return n&&n.trigger("component:toggled"),i},addTrait:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.em,r=this.get("traits").add(t,e);return n&&n.trigger("component:toggled"),r},normalizeClasses:function(t){var e=[],n=this.em;if(n){var r=n.get("SelectorManager");if(r)return t.forEach((function(t){var n="";n="string"==typeof t?t:t.name;var i=r.add(n);e.push(i)})),e}},clone:function(){var t=this.em,e=this.getStyle(),n=w({},this.attributes),r=w({},this.opt);n.attributes=w({},n.attributes),delete n.attributes.id,n.components=[],n.classes=[],n.traits=[],this.get("components").each((function(t,e){n.components[e]=t.clone()})),this.get("traits").each((function(t,e){n.traits[e]=t.clone()})),this.get("classes").each((function(t,e){n.classes[e]=t.get("name")})),n.status="",n.view="",r.collection=null,t&&t.getConfig("avoidInlineStyle")&&!Object(s.isEmpty)(e)&&(n.style=e);var i=new this.constructor(n,r);return t&&t.trigger("component:clone",i),this.trigger("component:clone",i),i},getName:function(){var t=this.em,e=this.attributes,n=e.type,r=e.tagName,i=this.get("name")||this.get("custom-name"),o=r;o="div"==o?"box":o;var a=n||o;a=a.charAt(0).toUpperCase()+a.slice(1);return t&&(t.t("".concat("domComponents.names.").concat(n))||t.t("".concat("domComponents.names.").concat(r)))||i||a},getIcon:function(){var t=this.get("icon");return t?t+" ":""},toHTML:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this,n=[],r=e.get("tagName"),i=e.get("void"),o=t.attributes,a=this.getAttrToHTML();for(var l in o&&(Object(s.isFunction)(o)?a=o(e,a)||{}:Object(s.isObject)(o)&&(a=o)),a){var c=a[l],u=Object(s.isString)(c)?c.replace(/"/g,"&quot;"):c;Object(s.isUndefined)(u)||(Object(s.isBoolean)(u)?u&&n.push(l):n.push("".concat(l,'="').concat(u,'"')))}var h=n.length?" ".concat(n.join(" ")):"",d="<".concat(r).concat(h).concat(i?"/":"",">").concat(e.get("content"));return e.get("components").each((function(e){return d+=e.toHTML(t)})),!i&&(d+="</".concat(r,">")),d},getAttrToHTML:function(){var t=this.getAttributes();return delete t.style,t},toJSON:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=h.a.Model.prototype.toJSON.apply(this,e);if(r.attributes=this.getAttributes(),delete r.attributes.class,delete r.toolbar,delete r.traits,this.em.getConfig("avoidDefaults")){var i=Object(s.result)(this,"defaults");Object(s.forEach)(i,(function(t,e){-1===["type","content"].indexOf(e)&&r[e]===t&&delete r[e]})),Object(s.isEmpty)(r.type)&&delete r.type,Object(s.forEach)(["attributes","style"],(function(t){Object(s.isEmpty)(i[t])&&Object(s.isEmpty)(r[t])&&delete r[t]})),Object(s.forEach)(["classes","components"],(function(t){Object(s.isEmpty)(i[t])&&!r[t].length&&delete r[t]}))}return r},getId:function(){return(this.get("attributes")||{}).id||this.ccid||this.cid},setId:function(t,e){var n=w({},this.get("attributes"));return n.id=t,this.set("attributes",n,e),this},getEl:function(){return this.view&&this.view.el},getView:function(){return this.view},getScriptString:function(t){var e=this,n=t||this.get("script");if(!n)return n;if("function"==typeof n){var r=n.toString().trim();n=(r=r.replace(/^function[\s\w]*\(\)\s?\{/,"").replace(/\}$/,"")).trim()}var o=this.em.getConfig(),a=x(o.tagVarStart||"{[ "),l=x(o.tagVarEnd||" ]}"),c=new RegExp("".concat(a,"([\\w\\d-]*)").concat(l),"g");return n=n.replace(c,(function(t,n){e.scriptUpdated();var r=e.attributes[n]||"";return Object(s.isArray)(r)||"object"==i()(r)?JSON.stringify(r):r}))},emitUpdate:function(t){for(var e=this.em,n="component:update"+(t?":".concat(t):""),r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];t&&this.updated.apply(this,[t,t&&this.get(t),t&&this.previous(t)].concat(i)),this.trigger.apply(this,[n].concat(i)),e&&e.trigger.apply(e,[n,this].concat(i))},onAll:function(t){return Object(s.isFunction)(t)&&(t(this),this.components().forEach((function(e){return e.onAll(t)}))),this},remove:function(){var t=this.collection;return t&&t.remove(this)},resetId:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this.em,e=this.getId();if(e){var n=C.createId(this);this.setId(n);var r=t&&t.get("CssComposer").getIdRule(e),i=r&&r.get("selectors").at(0);return i&&i.set("name",n),this}},_getStyleRule:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=this.em,r=e||this.getId();return n&&n.get("CssComposer").getIdRule(r)},_getStyleSelector:function(t){var e=this._getStyleRule(t);return e&&e.get("selectors").at(0)},_idUpdated:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.idUpdate){var r=this.ccid,i=this.get("attributes")||{},o=i.id,a=(this.previous("attributes")||{}).id||r,s=C.getList(this);if(s[o])return this.setId(a,{idUpdate:1});delete s[a],s[o]=this,this.ccid=o;var l=this._getStyleSelector({id:a});l&&l.set({name:o,label:o})}}},{isComponent:function(t){return{tagName:t.tagName?t.tagName.toLowerCase():""}},createId:function(t){var e,n=C.getList(t),r=t.get("attributes").id;return r?(e=C.getIncrementId(r,n),t.setId(e)):e=C.getNewId(n),n[e]=t,e},getNewId:function(t){for(var e=Object.keys(t).length.toString().length+2,n=(Math.random()+1.1).toString(36).slice(-e),r="i".concat(n);t[r];)r=C.getNewId(t);return r},getIncrementId:function(t,e){for(var n=1,r=t;e[r];)n++,r="".concat(t,"-").concat(n);return r},getList:function(t){var e=t.opt&&t.opt.domc;return e?e.componentsById:{}},checkId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(s.isArray)(t)?t:[t];r.forEach((function(t){var r=t.attributes,i=void 0===r?{}:r,o=t.components,a=i.id;if(a&&n[a]){var l=C.getIncrementId(a,n);i.id=l,Object(s.isArray)(e)&&e.forEach((function(t){var e=t.selectors;e.forEach((function(t,n){t==="#".concat(a)&&(e[n]="#".concat(l))}))}))}o&&C.checkId(o,e,n)}))}});e.default=C},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(1),a=n.n(o),s=n(0),l=n(18),c=n(30),u=n(9),h=n(11);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=a.a.View.extend({className:function(){return this.getClasses()},tagName:function(){return this.model.get("tagName")},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.model,n=t.config||{},r=n.em,i=e.opt||{},o=this.$el,a=n.draggableComponents;this.opts=t,this.modelOpt=i,this.config=n,this.em=r||"",this.pfx=n.stylePrefix||"",this.ppfx=n.pStylePrefix||"",this.attr=e.get("attributes"),this.classe=this.attr.class||[],this.listenTo(e,"change:style",this.updateStyle),this.listenTo(e,"change:attributes",this.renderAttributes),this.listenTo(e,"change:highlightable",this.updateHighlight),this.listenTo(e,"change:status",this.updateStatus),this.listenTo(e,"change:state",this.updateState),this.listenTo(e,"change:script",this.reset),this.listenTo(e,"change:content",this.updateContent),this.listenTo(e,"change",this.handleChange),this.listenTo(e,"active",this.onActive),o.data("model",e),e.view=this,this.initClasses(),this.initComponents({avoidRender:1}),this.events=f({},this.events,{},a&&{dragstart:"handleDragStart"}),this.delegateEvents(),!i.temporary&&this.init(this._clbObj())},_clbObj:function(){var t=this.em,e=this.model,n=this.el;return{editor:t&&t.getEditor(),model:e,el:n}},init:function(){},removed:function(){},onActive:function(){},remove:function(){return a.a.View.prototype.remove.apply(this,arguments),this.removed(this._clbObj()),this},handleDragStart:function(t){t.preventDefault(),t.stopPropagation(),this.em.get("Commands").run("tlb-move",{target:this.model,event:t})},initClasses:function(){var t=this.model,e=t.get("classes");e instanceof u.a&&(this.stopListening(t,"change:classes",this.initClasses),this.listenTo(t,"change:classes",this.initClasses),this.listenTo(e,"add remove change",this.updateClasses),e.length&&this.importClasses())},initComponents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.model,n=this.$el,r=this.childrenView,i="change:components",o=e.get("components"),a=[e,i,this.initComponents];o instanceof l.a&&(n.data("collection",o),r&&r.remove(),this.stopListening.apply(this,a),!t.avoidRender&&this.renderChildren(),this.listenTo.apply(this,a))},handleChange:function(){var t=this.model;for(var e in t.emitUpdate(),t.changed)t.emitUpdate(e)},importClasses:function(){var t=this.config.em.get("SelectorManager");t&&this.model.get("classes").each((function(e){t.add(e.get("name"))}))},updateState:function(t){var e="hc-state";this.model.get("state")?this.$el.addClass(e):this.$el.removeClass(e)},updateStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(this.em,this.el),n=this.model.get("status"),r=this.pfx,i=this.ppfx,o="".concat(r,"selected"),a="".concat(o,"-parent"),s="".concat(i,"freezed"),l="".concat(i,"hovered"),c=[o,a,s,l];this.$el.removeClass(c.join(" "));var u=e.getAttribute("class")||"",h="";switch(n){case"selected":h="".concat(u," ").concat(o);break;case"selected-parent":h="".concat(u," ").concat(a);break;case"freezed":h="".concat(u," ").concat(s);break;case"freezed-selected":h="".concat(u," ").concat(s," ").concat(o);break;case"hovered":h=t.avoidHover?"":"".concat(u," ").concat(l)}(h=h.trim())&&e.setAttribute("class",h)},updateHighlight:function(){var t=this.model.get("highlightable");this.setAttribute("data-highlightable",t?1:"")},updateStyle:function(){var t=this.em,e=this.model;if(t&&t.get("avoidInlineStyle")){this.el.id=e.getId();var n=e.getStyle();!Object(s.isEmpty)(n)&&e.setStyle(n)}else this.setAttribute("style",e.styleToString())},updateClasses:function(){var t=this.model.get("classes").pluck("name").join(" ");this.setAttribute("class",t),this.updateStatus()},setAttribute:function(t,e){var n=this.$el;e?n.attr(t,e):n.removeAttr(t)},getClasses:function(){return this.model.getClasses().join(" ")},updateAttributes:function(){var t=[],e=this.model,n=this.$el,r=this.el,i=this.config,o=e.attributes,a=o.highlightable,l=o.textable,c=f({"data-gjs-type":o.type||"default"},i.draggableComponents?{draggable:!0}:{},{},a?{"data-highlightable":1}:{},{},l?{contenteditable:"false","data-gjs-textable":"true"}:{});Object(s.each)(r.attributes,(function(e){return t.push(e.nodeName)})),t.forEach((function(t){return n.removeAttr(t)}));var u=f({},c,{},e.getAttributes());Object(s.keys)(u).forEach((function(t){return!1===u[t]&&delete u[t]})),n.attr(u),this.updateStyle()},updateContent:function(){this.getChildrenContainer().innerHTML=this.model.get("content")},prevDef:function(t){t.preventDefault()},updateScript:function(){var t=this.model,e=this.em;t.get("script")&&e&&e.get("Canvas").getCanvasView().updateScript(this)},getChildrenContainer:function(){var t=this.el;return"function"==typeof this.getChildrenSelector?t=this.el.querySelector(this.getChildrenSelector()):this.getTemplate,t},reset:function(){var t=this.el,e=this.model,n=e.components();this.el="",this._ensureElement(),this.$el.data({model:e,collection:n}),Object(h.d)(t,this.el),this.render()},renderChildren:function(){this.updateContent();var t=this.getChildrenContainer(),e=new c.a({collection:this.model.get("components"),config:this.config,componentTypes:this.opts.componentTypes});e.render(t),this.childrenView=e;for(var n=Array.prototype.slice.call(e.el.childNodes),r=0,i=n.length;r<i;r++)t.appendChild(n.shift())},renderAttributes:function(){this.updateAttributes(),this.updateClasses()},render:function(){return this.renderAttributes(),this.modelOpt.temporary?this:(this.renderChildren(),this.updateScript(),this.postRender(),this)},postRender:function(){var t=this.em,e=this.model;this.modelOpt.temporary||(this.onRender(this._clbObj()),t&&t.trigger("component:mount",e))},onRender:function(){}})},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){"use strict";var r=n(1),i=n.n(r).a.Model.extend({idAttribute:"name",defaults:{name:"",label:"",type:1,active:!0,private:!1,protected:!1},initialize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.config,r=void 0===n?{}:n,o=this.get("name"),a=this.get("label");o?a||this.set("label",o):this.set("name",a);var s=this.get("name"),l=r.escapeName,c=l?l(s):i.escapeName(s);this.set("name",c)},getFullName:function(){var t="";switch(this.get("type")){case 1:t=".";break;case 2:t="#"}return t+this.get("name")}},{TYPE_CLASS:1,TYPE_ID:2,escapeName:function(t){return"".concat(t).trim().replace(/([^a-z0-9\w-\:]+)/gi,"-")}});e.a=i},function(t,e,n){var r=n(68),i=n(69),o=n(70);t.exports=function(t){return r(t)||i(t)||o()}},function(t,e,n){"use strict";var r=n(0),i=n(1),o=n.n(i),a=n(7);e.a=o.a.Collection.extend({model:a.a,modelId:function(t){return"".concat(t.name,"_").concat(t.type||a.a.TYPE_CLASS)},getStyleable:function(){return Object(r.filter)(this.models,(function(t){return t.get("active")&&!t.get("private")}))},getValid:function(){return Object(r.filter)(this.models,(function(t){return!t.get("private")}))},getFullString:function(t){var e=[];return(t||this).forEach((function(t){return e.push(t.getFullName())})),e.join("").trim()}})},function(t,e,n){t.exports=function(){"use strict";var t=navigator.userAgent,e=navigator.platform,n=/gecko\/\d/i.test(t),r=/MSIE \d/.test(t),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t),o=/Edge\/(\d+)/.exec(t),a=r||i||o,s=a&&(r?document.documentMode||6:+(o||i)[1]),l=!o&&/WebKit\//.test(t),c=l&&/Qt\/\d+\.\d+/.test(t),u=!o&&/Chrome\//.test(t),h=/Opera\//.test(t),d=/Apple Computer/.test(navigator.vendor),f=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t),p=/PhantomJS/.test(t),g=!o&&/AppleWebKit/.test(t)&&/Mobile\/\w+/.test(t),v=/Android/.test(t),m=g||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t),y=g||/Mac/.test(e),b=/\bCrOS\b/.test(t),w=/win/i.test(e),x=h&&t.match(/Version\/(\d*\.\d*)/);x&&(x=Number(x[1])),x&&x>=15&&(h=!1,l=!0);var C=y&&(c||h&&(null==x||x<12.11)),O=n||a&&s>=9;function k(t){return new RegExp("(^|\\s)"+t+"(?:$|\\s)\\s*")}var S,T=function(t,e){var n=t.className,r=k(e).exec(n);if(r){var i=n.slice(r.index+r[0].length);t.className=n.slice(0,r.index)+(i?r[1]+i:"")}};function P(t){for(var e=t.childNodes.length;e>0;--e)t.removeChild(t.firstChild);return t}function j(t,e){return P(t).appendChild(e)}function E(t,e,n,r){var i=document.createElement(t);if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof e)i.appendChild(document.createTextNode(e));else if(e)for(var o=0;o<e.length;++o)i.appendChild(e[o]);return i}function M(t,e,n,r){var i=E(t,e,n,r);return i.setAttribute("role","presentation"),i}function D(t,e){if(3==e.nodeType&&(e=e.parentNode),t.contains)return t.contains(e);do{if(11==e.nodeType&&(e=e.host),e==t)return!0}while(e=e.parentNode)}function A(){var t;try{t=document.activeElement}catch(e){t=document.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function L(t,e){var n=t.className;k(e).test(n)||(t.className+=(n?" ":"")+e)}function N(t,e){for(var n=t.split(" "),r=0;r<n.length;r++)n[r]&&!k(n[r]).test(e)&&(e+=" "+n[r]);return e}S=document.createRange?function(t,e,n,r){var i=document.createRange();return i.setEnd(r||t,n),i.setStart(t,e),i}:function(t,e,n){var r=document.body.createTextRange();try{r.moveToElementText(t.parentNode)}catch(t){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",e),r};var I=function(t){t.select()};function F(t){var e=Array.prototype.slice.call(arguments,1);return function(){return t.apply(null,e)}}function R(t,e,n){for(var r in e||(e={}),t)!t.hasOwnProperty(r)||!1===n&&e.hasOwnProperty(r)||(e[r]=t[r]);return e}function _(t,e,n,r,i){null==e&&-1==(e=t.search(/[^\s\u00a0]/))&&(e=t.length);for(var o=r||0,a=i||0;;){var s=t.indexOf("\t",o);if(s<0||s>=e)return a+(e-o);a+=s-o,a+=n-a%n,o=s+1}}g?I=function(t){t.selectionStart=0,t.selectionEnd=t.value.length}:a&&(I=function(t){try{t.select()}catch(t){}});var V=function(){this.id=null,this.f=null,this.time=0,this.handler=F(this.onTimeout,this)};function z(t,e){for(var n=0;n<t.length;++n)if(t[n]==e)return n;return-1}V.prototype.onTimeout=function(t){t.id=0,t.time<=+new Date?t.f():setTimeout(t.handler,t.time-+new Date)},V.prototype.set=function(t,e){this.f=e;var n=+new Date+t;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,t),this.time=n)};var H=30,$={toString:function(){return"CodeMirror.Pass"}},W={scroll:!1},B={origin:"*mouse"},U={origin:"+move"};function q(t,e,n){for(var r=0,i=0;;){var o=t.indexOf("\t",r);-1==o&&(o=t.length);var a=o-r;if(o==t.length||i+a>=e)return r+Math.min(a,e-i);if(i+=o-r,r=o+1,(i+=n-i%n)>=e)return r}}var G=[""];function K(t){for(;G.length<=t;)G.push(Y(G)+" ");return G[t]}function Y(t){return t[t.length-1]}function X(t,e){for(var n=[],r=0;r<t.length;r++)n[r]=e(t[r],r);return n}function J(){}function Z(t,e){var n;return Object.create?n=Object.create(t):(J.prototype=t,n=new J),e&&R(e,n),n}var Q=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function tt(t){return/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||Q.test(t))}function et(t,e){return e?!!(e.source.indexOf("\\w")>-1&&tt(t))||e.test(t):tt(t)}function nt(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e])return!1;return!0}var rt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function it(t){return t.charCodeAt(0)>=768&&rt.test(t)}function ot(t,e,n){for(;(n<0?e>0:e<t.length)&&it(t.charAt(e));)e+=n;return e}function at(t,e,n){for(var r=e>n?-1:1;;){if(e==n)return e;var i=(e+n)/2,o=r<0?Math.ceil(i):Math.floor(i);if(o==e)return t(o)?e:n;t(o)?n=o:e=o+r}}var st=null;function lt(t,e,n){var r;st=null;for(var i=0;i<t.length;++i){var o=t[i];if(o.from<e&&o.to>e)return i;o.to==e&&(o.from!=o.to&&"before"==n?r=i:st=i),o.from==e&&(o.from!=o.to&&"before"!=n?r=i:st=i)}return null!=r?r:st}var ct=function(){var t="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",e="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",n=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,r=/[stwN]/,i=/[LRr]/,o=/[Lb1n]/,a=/[1n]/;function s(t,e,n){this.level=t,this.from=e,this.to=n}return function(l,c){var u="ltr"==c?"L":"R";if(0==l.length||"ltr"==c&&!n.test(l))return!1;for(var h,d=l.length,f=[],p=0;p<d;++p)f.push((h=l.charCodeAt(p))<=247?t.charAt(h):1424<=h&&h<=1524?"R":1536<=h&&h<=1785?e.charAt(h-1536):1774<=h&&h<=2220?"r":8192<=h&&h<=8203?"w":8204==h?"b":"L");for(var g=0,v=u;g<d;++g){var m=f[g];"m"==m?f[g]=v:v=m}for(var y=0,b=u;y<d;++y){var w=f[y];"1"==w&&"r"==b?f[y]="n":i.test(w)&&(b=w,"r"==w&&(f[y]="R"))}for(var x=1,C=f[0];x<d-1;++x){var O=f[x];"+"==O&&"1"==C&&"1"==f[x+1]?f[x]="1":","!=O||C!=f[x+1]||"1"!=C&&"n"!=C||(f[x]=C),C=O}for(var k=0;k<d;++k){var S=f[k];if(","==S)f[k]="N";else if("%"==S){var T=void 0;for(T=k+1;T<d&&"%"==f[T];++T);for(var P=k&&"!"==f[k-1]||T<d&&"1"==f[T]?"1":"N",j=k;j<T;++j)f[j]=P;k=T-1}}for(var E=0,M=u;E<d;++E){var D=f[E];"L"==M&&"1"==D?f[E]="L":i.test(D)&&(M=D)}for(var A=0;A<d;++A)if(r.test(f[A])){var L=void 0;for(L=A+1;L<d&&r.test(f[L]);++L);for(var N="L"==(A?f[A-1]:u),I=N==("L"==(L<d?f[L]:u))?N?"L":"R":u,F=A;F<L;++F)f[F]=I;A=L-1}for(var R,_=[],V=0;V<d;)if(o.test(f[V])){var z=V;for(++V;V<d&&o.test(f[V]);++V);_.push(new s(0,z,V))}else{var H=V,$=_.length;for(++V;V<d&&"L"!=f[V];++V);for(var W=H;W<V;)if(a.test(f[W])){H<W&&_.splice($,0,new s(1,H,W));var B=W;for(++W;W<V&&a.test(f[W]);++W);_.splice($,0,new s(2,B,W)),H=W}else++W;H<V&&_.splice($,0,new s(1,H,V))}return"ltr"==c&&(1==_[0].level&&(R=l.match(/^\s+/))&&(_[0].from=R[0].length,_.unshift(new s(0,0,R[0].length))),1==Y(_).level&&(R=l.match(/\s+$/))&&(Y(_).to-=R[0].length,_.push(new s(0,d-R[0].length,d)))),"rtl"==c?_.reverse():_}}();function ut(t,e){var n=t.order;return null==n&&(n=t.order=ct(t.text,e)),n}var ht=[],dt=function(t,e,n){if(t.addEventListener)t.addEventListener(e,n,!1);else if(t.attachEvent)t.attachEvent("on"+e,n);else{var r=t._handlers||(t._handlers={});r[e]=(r[e]||ht).concat(n)}};function ft(t,e){return t._handlers&&t._handlers[e]||ht}function pt(t,e,n){if(t.removeEventListener)t.removeEventListener(e,n,!1);else if(t.detachEvent)t.detachEvent("on"+e,n);else{var r=t._handlers,i=r&&r[e];if(i){var o=z(i,n);o>-1&&(r[e]=i.slice(0,o).concat(i.slice(o+1)))}}}function gt(t,e){var n=ft(t,e);if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function vt(t,e,n){return"string"==typeof e&&(e={type:e,preventDefault:function(){this.defaultPrevented=!0}}),gt(t,n||e.type,t,e),Ct(e)||e.codemirrorIgnore}function mt(t){var e=t._handlers&&t._handlers.cursorActivity;if(e)for(var n=t.curOp.cursorActivityHandlers||(t.curOp.cursorActivityHandlers=[]),r=0;r<e.length;++r)-1==z(n,e[r])&&n.push(e[r])}function yt(t,e){return ft(t,e).length>0}function bt(t){t.prototype.on=function(t,e){dt(this,t,e)},t.prototype.off=function(t,e){pt(this,t,e)}}function wt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function xt(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function Ct(t){return null!=t.defaultPrevented?t.defaultPrevented:0==t.returnValue}function Ot(t){wt(t),xt(t)}function kt(t){return t.target||t.srcElement}function St(t){var e=t.which;return null==e&&(1&t.button?e=1:2&t.button?e=3:4&t.button&&(e=2)),y&&t.ctrlKey&&1==e&&(e=3),e}var Tt,Pt,jt=function(){if(a&&s<9)return!1;var t=E("div");return"draggable"in t||"dragDrop"in t}();function Et(t){if(null==Tt){var e=E("span","​");j(t,E("span",[e,document.createTextNode("x")])),0!=t.firstChild.offsetHeight&&(Tt=e.offsetWidth<=1&&e.offsetHeight>2&&!(a&&s<8))}var n=Tt?E("span","​"):E("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return n.setAttribute("cm-text",""),n}function Mt(t){if(null!=Pt)return Pt;var e=j(t,document.createTextNode("AخA")),n=S(e,0,1).getBoundingClientRect(),r=S(e,1,2).getBoundingClientRect();return P(t),!(!n||n.left==n.right)&&(Pt=r.right-n.right<3)}var Dt,At=3!="\n\nb".split(/\n/).length?function(t){for(var e=0,n=[],r=t.length;e<=r;){var i=t.indexOf("\n",e);-1==i&&(i=t.length);var o=t.slice(e,"\r"==t.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),e+=a+1):(n.push(o),e=i+1)}return n}:function(t){return t.split(/\r\n?|\n/)},Lt=window.getSelection?function(t){try{return t.selectionStart!=t.selectionEnd}catch(t){return!1}}:function(t){var e;try{e=t.ownerDocument.selection.createRange()}catch(t){}return!(!e||e.parentElement()!=t)&&0!=e.compareEndPoints("StartToEnd",e)},Nt="oncopy"in(Dt=E("div"))||(Dt.setAttribute("oncopy","return;"),"function"==typeof Dt.oncopy),It=null,Ft={},Rt={};function _t(t,e){arguments.length>2&&(e.dependencies=Array.prototype.slice.call(arguments,2)),Ft[t]=e}function Vt(t){if("string"==typeof t&&Rt.hasOwnProperty(t))t=Rt[t];else if(t&&"string"==typeof t.name&&Rt.hasOwnProperty(t.name)){var e=Rt[t.name];"string"==typeof e&&(e={name:e}),(t=Z(e,t)).name=e.name}else{if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return Vt("application/xml");if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+json$/.test(t))return Vt("application/json")}return"string"==typeof t?{name:t}:t||{name:"null"}}function zt(t,e){e=Vt(e);var n=Ft[e.name];if(!n)return zt(t,"text/plain");var r=n(t,e);if(Ht.hasOwnProperty(e.name)){var i=Ht[e.name];for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=e.name,e.helperType&&(r.helperType=e.helperType),e.modeProps)for(var a in e.modeProps)r[a]=e.modeProps[a];return r}var Ht={};function $t(t,e){R(e,Ht.hasOwnProperty(t)?Ht[t]:Ht[t]={})}function Wt(t,e){if(!0===e)return e;if(t.copyState)return t.copyState(e);var n={};for(var r in e){var i=e[r];i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function Bt(t,e){for(var n;t.innerMode&&(n=t.innerMode(e))&&n.mode!=t;)e=n.state,t=n.mode;return n||{mode:t,state:e}}function Ut(t,e,n){return!t.startState||t.startState(e,n)}var qt=function(t,e,n){this.pos=this.start=0,this.string=t,this.tabSize=e||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n};function Gt(t,e){if((e-=t.first)<0||e>=t.size)throw new Error("There is no line "+(e+t.first)+" in the document.");for(var n=t;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize();if(e<o){n=i;break}e-=o}return n.lines[e]}function Kt(t,e,n){var r=[],i=e.line;return t.iter(e.line,n.line+1,(function(t){var o=t.text;i==n.line&&(o=o.slice(0,n.ch)),i==e.line&&(o=o.slice(e.ch)),r.push(o),++i})),r}function Yt(t,e,n){var r=[];return t.iter(e,n,(function(t){r.push(t.text)})),r}function Xt(t,e){var n=e-t.height;if(n)for(var r=t;r;r=r.parent)r.height+=n}function Jt(t){if(null==t.parent)return null;for(var e=t.parent,n=z(e.lines,t),r=e.parent;r;e=r,r=r.parent)for(var i=0;r.children[i]!=e;++i)n+=r.children[i].chunkSize();return n+e.first}function Zt(t,e){var n=t.first;t:do{for(var r=0;r<t.children.length;++r){var i=t.children[r],o=i.height;if(e<o){t=i;continue t}e-=o,n+=i.chunkSize()}return n}while(!t.lines);for(var a=0;a<t.lines.length;++a){var s=t.lines[a].height;if(e<s)break;e-=s}return n+a}function Qt(t,e){return e>=t.first&&e<t.first+t.size}function te(t,e){return String(t.lineNumberFormatter(e+t.firstLineNumber))}function ee(t,e,n){if(void 0===n&&(n=null),!(this instanceof ee))return new ee(t,e,n);this.line=t,this.ch=e,this.sticky=n}function ne(t,e){return t.line-e.line||t.ch-e.ch}function re(t,e){return t.sticky==e.sticky&&0==ne(t,e)}function ie(t){return ee(t.line,t.ch)}function oe(t,e){return ne(t,e)<0?e:t}function ae(t,e){return ne(t,e)<0?t:e}function se(t,e){return Math.max(t.first,Math.min(e,t.first+t.size-1))}function le(t,e){if(e.line<t.first)return ee(t.first,0);var n=t.first+t.size-1;return e.line>n?ee(n,Gt(t,n).text.length):function(t,e){var n=t.ch;return null==n||n>e?ee(t.line,e):n<0?ee(t.line,0):t}(e,Gt(t,e.line).text.length)}function ce(t,e){for(var n=[],r=0;r<e.length;r++)n[r]=le(t,e[r]);return n}qt.prototype.eol=function(){return this.pos>=this.string.length},qt.prototype.sol=function(){return this.pos==this.lineStart},qt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},qt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},qt.prototype.eat=function(t){var e=this.string.charAt(this.pos);if("string"==typeof t?e==t:e&&(t.test?t.test(e):t(e)))return++this.pos,e},qt.prototype.eatWhile=function(t){for(var e=this.pos;this.eat(t););return this.pos>e},qt.prototype.eatSpace=function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t},qt.prototype.skipToEnd=function(){this.pos=this.string.length},qt.prototype.skipTo=function(t){var e=this.string.indexOf(t,this.pos);if(e>-1)return this.pos=e,!0},qt.prototype.backUp=function(t){this.pos-=t},qt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=_(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?_(this.string,this.lineStart,this.tabSize):0)},qt.prototype.indentation=function(){return _(this.string,null,this.tabSize)-(this.lineStart?_(this.string,this.lineStart,this.tabSize):0)},qt.prototype.match=function(t,e,n){if("string"!=typeof t){var r=this.string.slice(this.pos).match(t);return r&&r.index>0?null:(r&&!1!==e&&(this.pos+=r[0].length),r)}var i=function(t){return n?t.toLowerCase():t};if(i(this.string.substr(this.pos,t.length))==i(t))return!1!==e&&(this.pos+=t.length),!0},qt.prototype.current=function(){return this.string.slice(this.start,this.pos)},qt.prototype.hideFirstChars=function(t,e){this.lineStart+=t;try{return e()}finally{this.lineStart-=t}},qt.prototype.lookAhead=function(t){var e=this.lineOracle;return e&&e.lookAhead(t)},qt.prototype.baseToken=function(){var t=this.lineOracle;return t&&t.baseToken(this.pos)};var ue=function(t,e){this.state=t,this.lookAhead=e},he=function(t,e,n,r){this.state=e,this.doc=t,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1};function de(t,e,n,r){var i=[t.state.modeGen],o={};xe(t,e.text,t.doc.mode,n,(function(t,e){return i.push(t,e)}),o,r);for(var a=n.state,s=function(r){n.baseTokens=i;var s=t.state.overlays[r],l=1,c=0;n.state=!0,xe(t,e.text,s.mode,n,(function(t,e){for(var n=l;c<t;){var r=i[l];r>t&&i.splice(l,1,t,i[l+1],r),l+=2,c=Math.min(t,r)}if(e)if(s.opaque)i.splice(n,l-n,t,"overlay "+e),l=n+2;else for(;n<l;n+=2){var o=i[n+1];i[n+1]=(o?o+" ":"")+"overlay "+e}}),o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},l=0;l<t.state.overlays.length;++l)s(l);return{styles:i,classes:o.bgClass||o.textClass?o:null}}function fe(t,e,n){if(!e.styles||e.styles[0]!=t.state.modeGen){var r=pe(t,Jt(e)),i=e.text.length>t.options.maxHighlightLength&&Wt(t.doc.mode,r.state),o=de(t,e,r);i&&(r.state=i),e.stateAfter=r.save(!i),e.styles=o.styles,o.classes?e.styleClasses=o.classes:e.styleClasses&&(e.styleClasses=null),n===t.doc.highlightFrontier&&(t.doc.modeFrontier=Math.max(t.doc.modeFrontier,++t.doc.highlightFrontier))}return e.styles}function pe(t,e,n){var r=t.doc,i=t.display;if(!r.mode.startState)return new he(r,!0,e);var o=function(t,e,n){for(var r,i,o=t.doc,a=n?-1:e-(t.doc.mode.innerMode?1e3:100),s=e;s>a;--s){if(s<=o.first)return o.first;var l=Gt(o,s-1),c=l.stateAfter;if(c&&(!n||s+(c instanceof ue?c.lookAhead:0)<=o.modeFrontier))return s;var u=_(l.text,null,t.options.tabSize);(null==i||r>u)&&(i=s-1,r=u)}return i}(t,e,n),a=o>r.first&&Gt(r,o-1).stateAfter,s=a?he.fromSaved(r,a,o):new he(r,Ut(r.mode),o);return r.iter(o,e,(function(n){ge(t,n.text,s);var r=s.line;n.stateAfter=r==e-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()})),n&&(r.modeFrontier=s.line),s}function ge(t,e,n,r){var i=t.doc.mode,o=new qt(e,t.options.tabSize,n);for(o.start=o.pos=r||0,""==e&&ve(i,n.state);!o.eol();)me(i,o,n.state),o.start=o.pos}function ve(t,e){if(t.blankLine)return t.blankLine(e);if(t.innerMode){var n=Bt(t,e);return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function me(t,e,n,r){for(var i=0;i<10;i++){r&&(r[0]=Bt(t,n).mode);var o=t.token(e,n);if(e.pos>e.start)return o}throw new Error("Mode "+t.name+" failed to advance stream.")}he.prototype.lookAhead=function(t){var e=this.doc.getLine(this.line+t);return null!=e&&t>this.maxLookAhead&&(this.maxLookAhead=t),e},he.prototype.baseToken=function(t){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=t;)this.baseTokenPos+=2;var e=this.baseTokens[this.baseTokenPos+1];return{type:e&&e.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-t}},he.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},he.fromSaved=function(t,e,n){return e instanceof ue?new he(t,Wt(t.mode,e.state),n,e.lookAhead):new he(t,Wt(t.mode,e),n)},he.prototype.save=function(t){var e=!1!==t?Wt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new ue(e,this.maxLookAhead):e};var ye=function(t,e,n){this.start=t.start,this.end=t.pos,this.string=t.current(),this.type=e||null,this.state=n};function be(t,e,n,r){var i,o,a=t.doc,s=a.mode,l=Gt(a,(e=le(a,e)).line),c=pe(t,e.line,n),u=new qt(l.text,t.options.tabSize,c);for(r&&(o=[]);(r||u.pos<e.ch)&&!u.eol();)u.start=u.pos,i=me(s,u,c.state),r&&o.push(new ye(u,i,Wt(a.mode,c.state)));return r?o:new ye(u,i,c.state)}function we(t,e){if(t)for(;;){var n=t.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!n)break;t=t.slice(0,n.index)+t.slice(n.index+n[0].length);var r=n[1]?"bgClass":"textClass";null==e[r]?e[r]=n[2]:new RegExp("(?:^|s)"+n[2]+"(?:$|s)").test(e[r])||(e[r]+=" "+n[2])}return t}function xe(t,e,n,r,i,o,a){var s=n.flattenSpans;null==s&&(s=t.options.flattenSpans);var l,c=0,u=null,h=new qt(e,t.options.tabSize,r),d=t.options.addModeClass&&[null];for(""==e&&we(ve(n,r.state),o);!h.eol();){if(h.pos>t.options.maxHighlightLength?(s=!1,a&&ge(t,e,r,h.pos),h.pos=e.length,l=null):l=we(me(n,h,r.state,d),o),d){var f=d[0].name;f&&(l="m-"+(l?f+" "+l:f))}if(!s||u!=l){for(;c<h.start;)i(c=Math.min(h.start,c+5e3),u);u=l}h.start=h.pos}for(;c<h.pos;){var p=Math.min(h.pos,c+5e3);i(p,u),c=p}}var Ce=!1,Oe=!1;function ke(t,e,n){this.marker=t,this.from=e,this.to=n}function Se(t,e){if(t)for(var n=0;n<t.length;++n){var r=t[n];if(r.marker==e)return r}}function Te(t,e){for(var n,r=0;r<t.length;++r)t[r]!=e&&(n||(n=[])).push(t[r]);return n}function Pe(t,e){if(e.full)return null;var n=Qt(t,e.from.line)&&Gt(t,e.from.line).markedSpans,r=Qt(t,e.to.line)&&Gt(t,e.to.line).markedSpans;if(!n&&!r)return null;var i=e.from.ch,o=e.to.ch,a=0==ne(e.from,e.to),s=function(t,e,n){var r;if(t)for(var i=0;i<t.length;++i){var o=t[i],a=o.marker;if(null==o.from||(a.inclusiveLeft?o.from<=e:o.from<e)||o.from==e&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=e:o.to>e);(r||(r=[])).push(new ke(a,o.from,s?null:o.to))}}return r}(n,i,a),l=function(t,e,n){var r;if(t)for(var i=0;i<t.length;++i){var o=t[i],a=o.marker;if(null==o.to||(a.inclusiveRight?o.to>=e:o.to>e)||o.from==e&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=e:o.from<e);(r||(r=[])).push(new ke(a,s?null:o.from-e,null==o.to?null:o.to-e))}}return r}(r,o,a),c=1==e.text.length,u=Y(e.text).length+(c?i:0);if(s)for(var h=0;h<s.length;++h){var d=s[h];if(null==d.to){var f=Se(l,d.marker);f?c&&(d.to=null==f.to?null:f.to+u):d.to=i}}if(l)for(var p=0;p<l.length;++p){var g=l[p];null!=g.to&&(g.to+=u),null==g.from?Se(s,g.marker)||(g.from=u,c&&(s||(s=[])).push(g)):(g.from+=u,c&&(s||(s=[])).push(g))}s&&(s=je(s)),l&&l!=s&&(l=je(l));var v=[s];if(!c){var m,y=e.text.length-2;if(y>0&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(m||(m=[])).push(new ke(s[b].marker,null,null));for(var w=0;w<y;++w)v.push(m);v.push(l)}return v}function je(t){for(var e=0;e<t.length;++e){var n=t[e];null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&t.splice(e--,1)}return t.length?t:null}function Ee(t){var e=t.markedSpans;if(e){for(var n=0;n<e.length;++n)e[n].marker.detachLine(t);t.markedSpans=null}}function Me(t,e){if(e){for(var n=0;n<e.length;++n)e[n].marker.attachLine(t);t.markedSpans=e}}function De(t){return t.inclusiveLeft?-1:0}function Ae(t){return t.inclusiveRight?1:0}function Le(t,e){var n=t.lines.length-e.lines.length;if(0!=n)return n;var r=t.find(),i=e.find(),o=ne(r.from,i.from)||De(t)-De(e);if(o)return-o;var a=ne(r.to,i.to)||Ae(t)-Ae(e);return a||e.id-t.id}function Ne(t,e){var n,r=Oe&&t.markedSpans;if(r)for(var i=void 0,o=0;o<r.length;++o)(i=r[o]).marker.collapsed&&null==(e?i.from:i.to)&&(!n||Le(n,i.marker)<0)&&(n=i.marker);return n}function Ie(t){return Ne(t,!0)}function Fe(t){return Ne(t,!1)}function Re(t,e){var n,r=Oe&&t.markedSpans;if(r)for(var i=0;i<r.length;++i){var o=r[i];o.marker.collapsed&&(null==o.from||o.from<e)&&(null==o.to||o.to>e)&&(!n||Le(n,o.marker)<0)&&(n=o.marker)}return n}function _e(t,e,n,r,i){var o=Gt(t,e),a=Oe&&o.markedSpans;if(a)for(var s=0;s<a.length;++s){var l=a[s];if(l.marker.collapsed){var c=l.marker.find(0),u=ne(c.from,n)||De(l.marker)-De(i),h=ne(c.to,r)||Ae(l.marker)-Ae(i);if(!(u>=0&&h<=0||u<=0&&h>=0)&&(u<=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?ne(c.to,n)>=0:ne(c.to,n)>0)||u>=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?ne(c.from,r)<=0:ne(c.from,r)<0)))return!0}}}function Ve(t){for(var e;e=Ie(t);)t=e.find(-1,!0).line;return t}function ze(t,e){var n=Gt(t,e),r=Ve(n);return n==r?e:Jt(r)}function He(t,e){if(e>t.lastLine())return e;var n,r=Gt(t,e);if(!$e(t,r))return e;for(;n=Fe(r);)r=n.find(1,!0).line;return Jt(r)+1}function $e(t,e){var n=Oe&&e.markedSpans;if(n)for(var r=void 0,i=0;i<n.length;++i)if((r=n[i]).marker.collapsed){if(null==r.from)return!0;if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&We(t,e,r))return!0}}function We(t,e,n){if(null==n.to){var r=n.marker.find(1,!0);return We(t,r.line,Se(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==e.text.length)return!0;for(var i=void 0,o=0;o<e.markedSpans.length;++o)if((i=e.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&We(t,e,i))return!0}function Be(t){for(var e=0,n=(t=Ve(t)).parent,r=0;r<n.lines.length;++r){var i=n.lines[r];if(i==t)break;e+=i.height}for(var o=n.parent;o;o=(n=o).parent)for(var a=0;a<o.children.length;++a){var s=o.children[a];if(s==n)break;e+=s.height}return e}function Ue(t){if(0==t.height)return 0;for(var e,n=t.text.length,r=t;e=Ie(r);){var i=e.find(0,!0);r=i.from.line,n+=i.from.ch-i.to.ch}for(r=t;e=Fe(r);){var o=e.find(0,!0);n-=r.text.length-o.from.ch,n+=(r=o.to.line).text.length-o.to.ch}return n}function qe(t){var e=t.display,n=t.doc;e.maxLine=Gt(n,n.first),e.maxLineLength=Ue(e.maxLine),e.maxLineChanged=!0,n.iter((function(t){var n=Ue(t);n>e.maxLineLength&&(e.maxLineLength=n,e.maxLine=t)}))}var Ge=function(t,e,n){this.text=t,Me(this,e),this.height=n?n(this):1};function Ke(t){t.parent=null,Ee(t)}Ge.prototype.lineNo=function(){return Jt(this)},bt(Ge);var Ye={},Xe={};function Je(t,e){if(!t||/^\s*$/.test(t))return null;var n=e.addModeClass?Xe:Ye;return n[t]||(n[t]=t.replace(/\S+/g,"cm-$&"))}function Ze(t,e){var n=M("span",null,null,l?"padding-right: .1px":null),r={pre:M("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:t,trailingSpace:!1,splitSpaces:t.getOption("lineWrapping")};e.measure={};for(var i=0;i<=(e.rest?e.rest.length:0);i++){var o=i?e.rest[i-1]:e.line,a=void 0;r.pos=0,r.addToken=tn,Mt(t.display.measure)&&(a=ut(o,t.doc.direction))&&(r.addToken=en(r.addToken,a)),r.map=[],rn(o,r,fe(t,o,e!=t.display.externalMeasured&&Jt(o))),o.styleClasses&&(o.styleClasses.bgClass&&(r.bgClass=N(o.styleClasses.bgClass,r.bgClass||"")),o.styleClasses.textClass&&(r.textClass=N(o.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Et(t.display.measure))),0==i?(e.measure.map=r.map,e.measure.cache={}):((e.measure.maps||(e.measure.maps=[])).push(r.map),(e.measure.caches||(e.measure.caches=[])).push({}))}if(l){var s=r.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return gt(t,"renderLine",t,e.line,r.pre),r.pre.className&&(r.textClass=N(r.pre.className,r.textClass||"")),r}function Qe(t){var e=E("span","•","cm-invalidchar");return e.title="\\u"+t.charCodeAt(0).toString(16),e.setAttribute("aria-label",e.title),e}function tn(t,e,n,r,i,o,l){if(e){var c,u=t.splitSpaces?function(t,e){if(t.length>1&&!/  /.test(t))return t;for(var n=e,r="",i=0;i<t.length;i++){var o=t.charAt(i);" "!=o||!n||i!=t.length-1&&32!=t.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}(e,t.trailingSpace):e,h=t.cm.state.specialChars,d=!1;if(h.test(e)){c=document.createDocumentFragment();for(var f=0;;){h.lastIndex=f;var p=h.exec(e),g=p?p.index-f:e.length-f;if(g){var v=document.createTextNode(u.slice(f,f+g));a&&s<9?c.appendChild(E("span",[v])):c.appendChild(v),t.map.push(t.pos,t.pos+g,v),t.col+=g,t.pos+=g}if(!p)break;f+=g+1;var m=void 0;if("\t"==p[0]){var y=t.cm.options.tabSize,b=y-t.col%y;(m=c.appendChild(E("span",K(b),"cm-tab"))).setAttribute("role","presentation"),m.setAttribute("cm-text","\t"),t.col+=b}else"\r"==p[0]||"\n"==p[0]?((m=c.appendChild(E("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),t.col+=1):((m=t.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),a&&s<9?c.appendChild(E("span",[m])):c.appendChild(m),t.col+=1);t.map.push(t.pos,t.pos+1,m),t.pos++}}else t.col+=e.length,c=document.createTextNode(u),t.map.push(t.pos,t.pos+e.length,c),a&&s<9&&(d=!0),t.pos+=e.length;if(t.trailingSpace=32==u.charCodeAt(e.length-1),n||r||i||d||o){var w=n||"";r&&(w+=r),i&&(w+=i);var x=E("span",[c],w,o);if(l)for(var C in l)l.hasOwnProperty(C)&&"style"!=C&&"class"!=C&&x.setAttribute(C,l[C]);return t.content.appendChild(x)}t.content.appendChild(c)}}function en(t,e){return function(n,r,i,o,a,s,l){i=i?i+" cm-force-border":"cm-force-border";for(var c=n.pos,u=c+r.length;;){for(var h=void 0,d=0;d<e.length&&!((h=e[d]).to>c&&h.from<=c);d++);if(h.to>=u)return t(n,r,i,o,a,s,l);t(n,r.slice(0,h.to-c),i,o,null,s,l),o=null,r=r.slice(h.to-c),c=h.to}}}function nn(t,e,n,r){var i=!r&&n.widgetNode;i&&t.map.push(t.pos,t.pos+e,i),!r&&t.cm.display.input.needsContentAttribute&&(i||(i=t.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(t.cm.display.input.setUneditable(i),t.content.appendChild(i)),t.pos+=e,t.trailingSpace=!1}function rn(t,e,n){var r=t.markedSpans,i=t.text,o=0;if(r)for(var a,s,l,c,u,h,d,f=i.length,p=0,g=1,v="",m=0;;){if(m==p){l=c=u=s="",d=null,h=null,m=1/0;for(var y=[],b=void 0,w=0;w<r.length;++w){var x=r[w],C=x.marker;if("bookmark"==C.type&&x.from==p&&C.widgetNode)y.push(C);else if(x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,c=""),C.className&&(l+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(u+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&((d||(d={})).title=C.title),C.attributes)for(var O in C.attributes)(d||(d={}))[O]=C.attributes[O];C.collapsed&&(!h||Le(h.marker,C)<0)&&(h=x)}else x.from>p&&m>x.from&&(m=x.from)}if(b)for(var k=0;k<b.length;k+=2)b[k+1]==m&&(c+=" "+b[k]);if(!h||h.from==p)for(var S=0;S<y.length;++S)nn(e,0,y[S]);if(h&&(h.from||0)==p){if(nn(e,(null==h.to?f+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(p>=f)break;for(var T=Math.min(f,m);;){if(v){var P=p+v.length;if(!h){var j=P>T?v.slice(0,T-p):v;e.addToken(e,j,a?a+l:l,u,p+j.length==m?c:"",s,d)}if(P>=T){v=v.slice(T-p),p=T;break}p=P,u=""}v=i.slice(o,o=n[g++]),a=Je(n[g++],e.cm.options)}}else for(var E=1;E<n.length;E+=2)e.addToken(e,i.slice(o,o=n[E]),Je(n[E+1],e.cm.options))}function on(t,e,n){this.line=e,this.rest=function(t){for(var e,n;e=Fe(t);)t=e.find(1,!0).line,(n||(n=[])).push(t);return n}(e),this.size=this.rest?Jt(Y(this.rest))-n+1:1,this.node=this.text=null,this.hidden=$e(t,e)}function an(t,e,n){for(var r,i=[],o=e;o<n;o=r){var a=new on(t.doc,Gt(t.doc,o),o);r=o+a.size,i.push(a)}return i}var sn=null,ln=null;function cn(t,e){var n=ft(t,e);if(n.length){var r,i=Array.prototype.slice.call(arguments,2);sn?r=sn.delayedCallbacks:ln?r=ln:(r=ln=[],setTimeout(un,0));for(var o=function(t){r.push((function(){return n[t].apply(null,i)}))},a=0;a<n.length;++a)o(a)}}function un(){var t=ln;ln=null;for(var e=0;e<t.length;++e)t[e]()}function hn(t,e,n,r){for(var i=0;i<e.changes.length;i++){var o=e.changes[i];"text"==o?pn(t,e):"gutter"==o?vn(t,e,n,r):"class"==o?gn(t,e):"widget"==o&&mn(t,e,r)}e.changes=null}function dn(t){return t.node==t.text&&(t.node=E("div",null,null,"position: relative"),t.text.parentNode&&t.text.parentNode.replaceChild(t.node,t.text),t.node.appendChild(t.text),a&&s<8&&(t.node.style.zIndex=2)),t.node}function fn(t,e){var n=t.display.externalMeasured;return n&&n.line==e.line?(t.display.externalMeasured=null,e.measure=n.measure,n.built):Ze(t,e)}function pn(t,e){var n=e.text.className,r=fn(t,e);e.text==e.node&&(e.node=r.pre),e.text.parentNode.replaceChild(r.pre,e.text),e.text=r.pre,r.bgClass!=e.bgClass||r.textClass!=e.textClass?(e.bgClass=r.bgClass,e.textClass=r.textClass,gn(t,e)):n&&(e.text.className=n)}function gn(t,e){!function(t,e){var n=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass;if(n&&(n+=" CodeMirror-linebackground"),e.background)n?e.background.className=n:(e.background.parentNode.removeChild(e.background),e.background=null);else if(n){var r=dn(e);e.background=r.insertBefore(E("div",null,n),r.firstChild),t.display.input.setUneditable(e.background)}}(t,e),e.line.wrapClass?dn(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="");var n=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass;e.text.className=n||""}function vn(t,e,n,r){if(e.gutter&&(e.node.removeChild(e.gutter),e.gutter=null),e.gutterBackground&&(e.node.removeChild(e.gutterBackground),e.gutterBackground=null),e.line.gutterClass){var i=dn(e);e.gutterBackground=E("div",null,"CodeMirror-gutter-background "+e.line.gutterClass,"left: "+(t.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),t.display.input.setUneditable(e.gutterBackground),i.insertBefore(e.gutterBackground,e.text)}var o=e.line.gutterMarkers;if(t.options.lineNumbers||o){var a=dn(e),s=e.gutter=E("div",null,"CodeMirror-gutter-wrapper","left: "+(t.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px");if(t.display.input.setUneditable(s),a.insertBefore(s,e.text),e.line.gutterClass&&(s.className+=" "+e.line.gutterClass),!t.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(e.lineNumber=s.appendChild(E("div",te(t.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+t.display.lineNumInnerWidth+"px"))),o)for(var l=0;l<t.display.gutterSpecs.length;++l){var c=t.display.gutterSpecs[l].className,u=o.hasOwnProperty(c)&&o[c];u&&s.appendChild(E("div",[u],"CodeMirror-gutter-elt","left: "+r.gutterLeft[c]+"px; width: "+r.gutterWidth[c]+"px"))}}}function mn(t,e,n){e.alignable&&(e.alignable=null);for(var r=e.node.firstChild,i=void 0;r;r=i)i=r.nextSibling,"CodeMirror-linewidget"==r.className&&e.node.removeChild(r);bn(t,e,n)}function yn(t,e,n,r){var i=fn(t,e);return e.text=e.node=i.pre,i.bgClass&&(e.bgClass=i.bgClass),i.textClass&&(e.textClass=i.textClass),gn(t,e),vn(t,e,n,r),bn(t,e,r),e.node}function bn(t,e,n){if(wn(t,e.line,e,n,!0),e.rest)for(var r=0;r<e.rest.length;r++)wn(t,e.rest[r],e,n,!1)}function wn(t,e,n,r,i){if(e.widgets)for(var o=dn(n),a=0,s=e.widgets;a<s.length;++a){var l=s[a],c=E("div",[l.node],"CodeMirror-linewidget");l.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),xn(l,c,n,r),t.display.input.setUneditable(c),i&&l.above?o.insertBefore(c,n.gutter||n.text):o.appendChild(c),cn(l,"redraw")}}function xn(t,e,n,r){if(t.noHScroll){(n.alignable||(n.alignable=[])).push(e);var i=r.wrapperWidth;e.style.left=r.fixedPos+"px",t.coverGutter||(i-=r.gutterTotalWidth,e.style.paddingLeft=r.gutterTotalWidth+"px"),e.style.width=i+"px"}t.coverGutter&&(e.style.zIndex=5,e.style.position="relative",t.noHScroll||(e.style.marginLeft=-r.gutterTotalWidth+"px"))}function Cn(t){if(null!=t.height)return t.height;var e=t.doc.cm;if(!e)return 0;if(!D(document.body,t.node)){var n="position: relative;";t.coverGutter&&(n+="margin-left: -"+e.display.gutters.offsetWidth+"px;"),t.noHScroll&&(n+="width: "+e.display.wrapper.clientWidth+"px;"),j(e.display.measure,E("div",[t.node],null,n))}return t.height=t.node.parentNode.offsetHeight}function On(t,e){for(var n=kt(e);n!=t.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==t.sizer&&n!=t.mover)return!0}function kn(t){return t.lineSpace.offsetTop}function Sn(t){return t.mover.offsetHeight-t.lineSpace.offsetHeight}function Tn(t){if(t.cachedPaddingH)return t.cachedPaddingH;var e=j(t.measure,E("pre","x","CodeMirror-line-like")),n=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)};return isNaN(r.left)||isNaN(r.right)||(t.cachedPaddingH=r),r}function Pn(t){return H-t.display.nativeBarWidth}function jn(t){return t.display.scroller.clientWidth-Pn(t)-t.display.barWidth}function En(t){return t.display.scroller.clientHeight-Pn(t)-t.display.barHeight}function Mn(t,e,n){if(t.line==e)return{map:t.measure.map,cache:t.measure.cache};for(var r=0;r<t.rest.length;r++)if(t.rest[r]==e)return{map:t.measure.maps[r],cache:t.measure.caches[r]};for(var i=0;i<t.rest.length;i++)if(Jt(t.rest[i])>n)return{map:t.measure.maps[i],cache:t.measure.caches[i],before:!0}}function Dn(t,e,n,r){return Nn(t,Ln(t,e),n,r)}function An(t,e){if(e>=t.display.viewFrom&&e<t.display.viewTo)return t.display.view[hr(t,e)];var n=t.display.externalMeasured;return n&&e>=n.lineN&&e<n.lineN+n.size?n:void 0}function Ln(t,e){var n=Jt(e),r=An(t,n);r&&!r.text?r=null:r&&r.changes&&(hn(t,r,n,ar(t)),t.curOp.forceUpdate=!0),r||(r=function(t,e){var n=Jt(e=Ve(e)),r=t.display.externalMeasured=new on(t.doc,e,n);r.lineN=n;var i=r.built=Ze(t,r);return r.text=i.pre,j(t.display.lineMeasure,i.pre),r}(t,e));var i=Mn(r,e,n);return{line:e,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Nn(t,e,n,r,i){e.before&&(n=-1);var o,l=n+(r||"");return e.cache.hasOwnProperty(l)?o=e.cache[l]:(e.rect||(e.rect=e.view.text.getBoundingClientRect()),e.hasHeights||(function(t,e,n){var r=t.options.lineWrapping,i=r&&jn(t);if(!e.measure.heights||r&&e.measure.width!=i){var o=e.measure.heights=[];if(r){e.measure.width=i;for(var a=e.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var l=a[s],c=a[s+1];Math.abs(l.bottom-c.bottom)>2&&o.push((l.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}(t,e.view,e.rect),e.hasHeights=!0),(o=function(t,e,n,r){var i,o=Rn(e.map,n,r),l=o.node,c=o.start,u=o.end,h=o.collapse;if(3==l.nodeType){for(var d=0;d<4;d++){for(;c&&it(e.line.text.charAt(o.coverStart+c));)--c;for(;o.coverStart+u<o.coverEnd&&it(e.line.text.charAt(o.coverStart+u));)++u;if((i=a&&s<9&&0==c&&u==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():_n(S(l,c,u).getClientRects(),r)).left||i.right||0==c)break;u=c,c-=1,h="right"}a&&s<11&&(i=function(t,e){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(t){if(null!=It)return It;var e=j(t,E("span","x")),n=e.getBoundingClientRect(),r=S(e,0,1).getBoundingClientRect();return It=Math.abs(n.left-r.left)>1}(t))return e;var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI;return{left:e.left*n,right:e.right*n,top:e.top*r,bottom:e.bottom*r}}(t.display.measure,i))}else{var f;c>0&&(h=r="right"),i=t.options.lineWrapping&&(f=l.getClientRects()).length>1?f["right"==r?f.length-1:0]:l.getBoundingClientRect()}if(a&&s<9&&!c&&(!i||!i.left&&!i.right)){var p=l.parentNode.getClientRects()[0];i=p?{left:p.left,right:p.left+or(t.display),top:p.top,bottom:p.bottom}:Fn}for(var g=i.top-e.rect.top,v=i.bottom-e.rect.top,m=(g+v)/2,y=e.view.measure.heights,b=0;b<y.length-1&&!(m<y[b]);b++);var w=b?y[b-1]:0,x=y[b],C={left:("right"==h?i.right:i.left)-e.rect.left,right:("left"==h?i.left:i.right)-e.rect.left,top:w,bottom:x};return i.left||i.right||(C.bogus=!0),t.options.singleCursorHeightPerLine||(C.rtop=g,C.rbottom=v),C}(t,e,n,r)).bogus||(e.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var In,Fn={left:0,right:0,top:0,bottom:0};function Rn(t,e,n){for(var r,i,o,a,s,l,c=0;c<t.length;c+=3)if(s=t[c],l=t[c+1],e<s?(i=0,o=1,a="left"):e<l?o=1+(i=e-s):(c==t.length-3||e==l&&t[c+3]>e)&&(i=(o=l-s)-1,e>=l&&(a="right")),null!=i){if(r=t[c+2],s==l&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;c&&t[c-2]==t[c-3]&&t[c-1].insertLeft;)r=t[2+(c-=3)],a="left";if("right"==n&&i==l-s)for(;c<t.length-3&&t[c+3]==t[c+4]&&!t[c+5].insertLeft;)r=t[(c+=3)+2],a="right";break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:l}}function _n(t,e){var n=Fn;if("left"==e)for(var r=0;r<t.length&&(n=t[r]).left==n.right;r++);else for(var i=t.length-1;i>=0&&(n=t[i]).left==n.right;i--);return n}function Vn(t){if(t.measure&&(t.measure.cache={},t.measure.heights=null,t.rest))for(var e=0;e<t.rest.length;e++)t.measure.caches[e]={}}function zn(t){t.display.externalMeasure=null,P(t.display.lineMeasure);for(var e=0;e<t.display.view.length;e++)Vn(t.display.view[e])}function Hn(t){zn(t),t.display.cachedCharWidth=t.display.cachedTextHeight=t.display.cachedPaddingH=null,t.options.lineWrapping||(t.display.maxLineChanged=!0),t.display.lineNumChars=null}function $n(){return u&&v?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Wn(){return u&&v?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Bn(t){var e=0;if(t.widgets)for(var n=0;n<t.widgets.length;++n)t.widgets[n].above&&(e+=Cn(t.widgets[n]));return e}function Un(t,e,n,r,i){if(!i){var o=Bn(e);n.top+=o,n.bottom+=o}if("line"==r)return n;r||(r="local");var a=Be(e);if("local"==r?a+=kn(t.display):a-=t.display.viewOffset,"page"==r||"window"==r){var s=t.display.lineSpace.getBoundingClientRect();a+=s.top+("window"==r?0:Wn());var l=s.left+("window"==r?0:$n());n.left+=l,n.right+=l}return n.top+=a,n.bottom+=a,n}function qn(t,e,n){if("div"==n)return e;var r=e.left,i=e.top;if("page"==n)r-=$n(),i-=Wn();else if("local"==n||!n){var o=t.display.sizer.getBoundingClientRect();r+=o.left,i+=o.top}var a=t.display.lineSpace.getBoundingClientRect();return{left:r-a.left,top:i-a.top}}function Gn(t,e,n,r,i){return r||(r=Gt(t.doc,e.line)),Un(t,r,Dn(t,r,e.ch,i),n)}function Kn(t,e,n,r,i,o){function a(e,a){var s=Nn(t,i,e,a?"right":"left",o);return a?s.left=s.right:s.right=s.left,Un(t,r,s,n)}r=r||Gt(t.doc,e.line),i||(i=Ln(t,r));var s=ut(r,t.doc.direction),l=e.ch,c=e.sticky;if(l>=r.text.length?(l=r.text.length,c="before"):l<=0&&(l=0,c="after"),!s)return a("before"==c?l-1:l,"before"==c);function u(t,e,n){return a(n?t-1:t,1==s[e].level!=n)}var h=lt(s,l,c),d=st,f=u(l,h,"before"==c);return null!=d&&(f.other=u(l,d,"before"!=c)),f}function Yn(t,e){var n=0;e=le(t.doc,e),t.options.lineWrapping||(n=or(t.display)*e.ch);var r=Gt(t.doc,e.line),i=Be(r)+kn(t.display);return{left:n,right:n,top:i,bottom:i+r.height}}function Xn(t,e,n,r,i){var o=ee(t,e,n);return o.xRel=i,r&&(o.outside=r),o}function Jn(t,e,n){var r=t.doc;if((n+=t.display.viewOffset)<0)return Xn(r.first,0,null,-1,-1);var i=Zt(r,n),o=r.first+r.size-1;if(i>o)return Xn(r.first+r.size-1,Gt(r,o).text.length,null,1,1);e<0&&(e=0);for(var a=Gt(r,i);;){var s=er(t,a,i,e,n),l=Re(a,s.ch+(s.xRel>0||s.outside>0?1:0));if(!l)return s;var c=l.find(1);if(c.line==i)return c;a=Gt(r,i=c.line)}}function Zn(t,e,n,r){r-=Bn(e);var i=e.text.length,o=at((function(e){return Nn(t,n,e-1).bottom<=r}),i,0);return{begin:o,end:i=at((function(e){return Nn(t,n,e).top>r}),o,i)}}function Qn(t,e,n,r){return n||(n=Ln(t,e)),Zn(t,e,n,Un(t,e,Nn(t,n,r),"line").top)}function tr(t,e,n,r){return!(t.bottom<=n)&&(t.top>n||(r?t.left:t.right)>e)}function er(t,e,n,r,i){i-=Be(e);var o=Ln(t,e),a=Bn(e),s=0,l=e.text.length,c=!0,u=ut(e,t.doc.direction);if(u){var h=(t.options.lineWrapping?rr:nr)(t,e,n,o,u,r,i);s=(c=1!=h.level)?h.from:h.to-1,l=c?h.to:h.from-1}var d,f,p=null,g=null,v=at((function(e){var n=Nn(t,o,e);return n.top+=a,n.bottom+=a,!!tr(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(p=e,g=n),!0)}),s,l),m=!1;if(g){var y=r-g.left<g.right-r,b=y==c;v=p+(b?0:1),f=b?"after":"before",d=y?g.left:g.right}else{c||v!=l&&v!=s||v++,f=0==v?"after":v==e.text.length?"before":Nn(t,o,v-(c?1:0)).bottom+a<=i==c?"after":"before";var w=Kn(t,ee(n,v,f),"line",e,o);d=w.left,m=i<w.top?-1:i>=w.bottom?1:0}return Xn(n,v=ot(e.text,v,1),f,m,r-d)}function nr(t,e,n,r,i,o,a){var s=at((function(s){var l=i[s],c=1!=l.level;return tr(Kn(t,ee(n,c?l.to:l.from,c?"before":"after"),"line",e,r),o,a,!0)}),0,i.length-1),l=i[s];if(s>0){var c=1!=l.level,u=Kn(t,ee(n,c?l.from:l.to,c?"after":"before"),"line",e,r);tr(u,o,a,!0)&&u.top>a&&(l=i[s-1])}return l}function rr(t,e,n,r,i,o,a){var s=Zn(t,e,r,a),l=s.begin,c=s.end;/\s/.test(e.text.charAt(c-1))&&c--;for(var u=null,h=null,d=0;d<i.length;d++){var f=i[d];if(!(f.from>=c||f.to<=l)){var p=Nn(t,r,1!=f.level?Math.min(c,f.to)-1:Math.max(l,f.from)).right,g=p<o?o-p+1e9:p-o;(!u||h>g)&&(u=f,h=g)}}return u||(u=i[i.length-1]),u.from<l&&(u={from:l,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function ir(t){if(null!=t.cachedTextHeight)return t.cachedTextHeight;if(null==In){In=E("pre",null,"CodeMirror-line-like");for(var e=0;e<49;++e)In.appendChild(document.createTextNode("x")),In.appendChild(E("br"));In.appendChild(document.createTextNode("x"))}j(t.measure,In);var n=In.offsetHeight/50;return n>3&&(t.cachedTextHeight=n),P(t.measure),n||1}function or(t){if(null!=t.cachedCharWidth)return t.cachedCharWidth;var e=E("span","xxxxxxxxxx"),n=E("pre",[e],"CodeMirror-line-like");j(t.measure,n);var r=e.getBoundingClientRect(),i=(r.right-r.left)/10;return i>2&&(t.cachedCharWidth=i),i||10}function ar(t){for(var e=t.display,n={},r={},i=e.gutters.clientLeft,o=e.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var s=t.display.gutterSpecs[a].className;n[s]=o.offsetLeft+o.clientLeft+i,r[s]=o.clientWidth}return{fixedPos:sr(e),gutterTotalWidth:e.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:e.wrapper.clientWidth}}function sr(t){return t.scroller.getBoundingClientRect().left-t.sizer.getBoundingClientRect().left}function lr(t){var e=ir(t.display),n=t.options.lineWrapping,r=n&&Math.max(5,t.display.scroller.clientWidth/or(t.display)-3);return function(i){if($e(t.doc,i))return 0;var o=0;if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height);return n?o+(Math.ceil(i.text.length/r)||1)*e:o+e}}function cr(t){var e=t.doc,n=lr(t);e.iter((function(t){var e=n(t);e!=t.height&&Xt(t,e)}))}function ur(t,e,n,r){var i=t.display;if(!n&&"true"==kt(e).getAttribute("cm-not-content"))return null;var o,a,s=i.lineSpace.getBoundingClientRect();try{o=e.clientX-s.left,a=e.clientY-s.top}catch(e){return null}var l,c=Jn(t,o,a);if(r&&1==c.xRel&&(l=Gt(t.doc,c.line).text).length==c.ch){var u=_(l,l.length,t.options.tabSize)-l.length;c=ee(c.line,Math.max(0,Math.round((o-Tn(t.display).left)/or(t.display))-u))}return c}function hr(t,e){if(e>=t.display.viewTo)return null;if((e-=t.display.viewFrom)<0)return null;for(var n=t.display.view,r=0;r<n.length;r++)if((e-=n[r].size)<0)return r}function dr(t,e,n,r){null==e&&(e=t.doc.first),null==n&&(n=t.doc.first+t.doc.size),r||(r=0);var i=t.display;if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>e)&&(i.updateLineNumbers=e),t.curOp.viewChanged=!0,e>=i.viewTo)Oe&&ze(t.doc,e)<i.viewTo&&pr(t);else if(n<=i.viewFrom)Oe&&He(t.doc,n+r)>i.viewFrom?pr(t):(i.viewFrom+=r,i.viewTo+=r);else if(e<=i.viewFrom&&n>=i.viewTo)pr(t);else if(e<=i.viewFrom){var o=gr(t,n,n+r,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):pr(t)}else if(n>=i.viewTo){var a=gr(t,e,e,-1);a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):pr(t)}else{var s=gr(t,e,e,-1),l=gr(t,n,n+r,1);s&&l?(i.view=i.view.slice(0,s.index).concat(an(t,s.lineN,l.lineN)).concat(i.view.slice(l.index)),i.viewTo+=r):pr(t)}var c=i.externalMeasured;c&&(n<c.lineN?c.lineN+=r:e<c.lineN+c.size&&(i.externalMeasured=null))}function fr(t,e,n){t.curOp.viewChanged=!0;var r=t.display,i=t.display.externalMeasured;if(i&&e>=i.lineN&&e<i.lineN+i.size&&(r.externalMeasured=null),!(e<r.viewFrom||e>=r.viewTo)){var o=r.view[hr(t,e)];if(null!=o.node){var a=o.changes||(o.changes=[]);-1==z(a,n)&&a.push(n)}}}function pr(t){t.display.viewFrom=t.display.viewTo=t.doc.first,t.display.view=[],t.display.viewOffset=0}function gr(t,e,n,r){var i,o=hr(t,e),a=t.display.view;if(!Oe||n==t.doc.first+t.doc.size)return{index:o,lineN:n};for(var s=t.display.viewFrom,l=0;l<o;l++)s+=a[l].size;if(s!=e){if(r>0){if(o==a.length-1)return null;i=s+a[o].size-e,o++}else i=s-e;e+=i,n+=i}for(;ze(t.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null;n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function vr(t){for(var e=t.display.view,n=0,r=0;r<e.length;r++){var i=e[r];i.hidden||i.node&&!i.changes||++n}return n}function mr(t){t.display.input.showSelection(t.display.input.prepareSelection())}function yr(t,e){void 0===e&&(e=!0);for(var n=t.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(e||a!=n.sel.primIndex){var s=n.sel.ranges[a];if(!(s.from().line>=t.display.viewTo||s.to().line<t.display.viewFrom)){var l=s.empty();(l||t.options.showCursorWhenSelecting)&&br(t,s.head,i),l||xr(t,s,o)}}return r}function br(t,e,n){var r=Kn(t,e,"div",null,null,!t.options.singleCursorHeightPerLine),i=n.appendChild(E("div"," ","CodeMirror-cursor"));if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*t.options.cursorHeight+"px",r.other){var o=n.appendChild(E("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function wr(t,e){return t.top-e.top||t.left-e.left}function xr(t,e,n){var r=t.display,i=t.doc,o=document.createDocumentFragment(),a=Tn(t.display),s=a.left,l=Math.max(r.sizerWidth,jn(t)-r.sizer.offsetLeft)-a.right,c="ltr"==i.direction;function u(t,e,n,r){e<0&&(e=0),e=Math.round(e),r=Math.round(r),o.appendChild(E("div",null,"CodeMirror-selected","position: absolute; left: "+t+"px;\n                             top: "+e+"px; width: "+(null==n?l-t:n)+"px;\n                             height: "+(r-e)+"px"))}function h(e,n,r){var o,a,h=Gt(i,e),d=h.text.length;function f(n,r){return Gn(t,ee(e,n),"div",h,r)}function p(e,n,r){var i=Qn(t,h,null,e),o="ltr"==n==("after"==r)?"left":"right";return f("after"==r?i.begin:i.end-(/\s/.test(h.text.charAt(i.end-1))?2:1),o)[o]}var g=ut(h,i.direction);return function(t,e,n,r){if(!t)return r(e,n,"ltr",0);for(var i=!1,o=0;o<t.length;++o){var a=t[o];(a.from<n&&a.to>e||e==n&&a.to==e)&&(r(Math.max(a.from,e),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(e,n,"ltr")}(g,n||0,null==r?d:r,(function(t,e,i,h){var v="ltr"==i,m=f(t,v?"left":"right"),y=f(e-1,v?"right":"left"),b=null==n&&0==t,w=null==r&&e==d,x=0==h,C=!g||h==g.length-1;if(y.top-m.top<=3){var O=(c?w:b)&&C,k=(c?b:w)&&x?s:(v?m:y).left,S=O?l:(v?y:m).right;u(k,m.top,S-k,m.bottom)}else{var T,P,j,E;v?(T=c&&b&&x?s:m.left,P=c?l:p(t,i,"before"),j=c?s:p(e,i,"after"),E=c&&w&&C?l:y.right):(T=c?p(t,i,"before"):s,P=!c&&b&&x?l:m.right,j=!c&&w&&C?s:y.left,E=c?p(e,i,"after"):l),u(T,m.top,P-T,m.bottom),m.bottom<y.top&&u(s,m.bottom,null,y.top),u(j,y.top,E-j,y.bottom)}(!o||wr(m,o)<0)&&(o=m),wr(y,o)<0&&(o=y),(!a||wr(m,a)<0)&&(a=m),wr(y,a)<0&&(a=y)})),{start:o,end:a}}var d=e.from(),f=e.to();if(d.line==f.line)h(d.line,d.ch,f.ch);else{var p=Gt(i,d.line),g=Gt(i,f.line),v=Ve(p)==Ve(g),m=h(d.line,d.ch,v?p.text.length+1:null).end,y=h(f.line,v?0:null,f.ch).start;v&&(m.top<y.top-2?(u(m.right,m.top,null,m.bottom),u(s,y.top,y.left,y.bottom)):u(m.right,m.top,y.left-m.right,m.bottom)),m.bottom<y.top&&u(s,m.bottom,null,y.top)}n.appendChild(o)}function Cr(t){if(t.state.focused){var e=t.display;clearInterval(e.blinker);var n=!0;e.cursorDiv.style.visibility="",t.options.cursorBlinkRate>0?e.blinker=setInterval((function(){return e.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),t.options.cursorBlinkRate):t.options.cursorBlinkRate<0&&(e.cursorDiv.style.visibility="hidden")}}function Or(t){t.state.focused||(t.display.input.focus(),Sr(t))}function kr(t){t.state.delayingBlurEvent=!0,setTimeout((function(){t.state.delayingBlurEvent&&(t.state.delayingBlurEvent=!1,Tr(t))}),100)}function Sr(t,e){t.state.delayingBlurEvent&&(t.state.delayingBlurEvent=!1),"nocursor"!=t.options.readOnly&&(t.state.focused||(gt(t,"focus",t,e),t.state.focused=!0,L(t.display.wrapper,"CodeMirror-focused"),t.curOp||t.display.selForContextMenu==t.doc.sel||(t.display.input.reset(),l&&setTimeout((function(){return t.display.input.reset(!0)}),20)),t.display.input.receivedFocus()),Cr(t))}function Tr(t,e){t.state.delayingBlurEvent||(t.state.focused&&(gt(t,"blur",t,e),t.state.focused=!1,T(t.display.wrapper,"CodeMirror-focused")),clearInterval(t.display.blinker),setTimeout((function(){t.state.focused||(t.display.shift=!1)}),150))}function Pr(t){for(var e=t.display,n=e.lineDiv.offsetTop,r=0;r<e.view.length;r++){var i=e.view[r],o=t.options.lineWrapping,l=void 0,c=0;if(!i.hidden){if(a&&s<8){var u=i.node.offsetTop+i.node.offsetHeight;l=u-n,n=u}else{var h=i.node.getBoundingClientRect();l=h.bottom-h.top,!o&&i.text.firstChild&&(c=i.text.firstChild.getBoundingClientRect().right-h.left-1)}var d=i.line.height-l;if((d>.005||d<-.005)&&(Xt(i.line,l),jr(i.line),i.rest))for(var f=0;f<i.rest.length;f++)jr(i.rest[f]);if(c>t.display.sizerWidth){var p=Math.ceil(c/or(t.display));p>t.display.maxLineLength&&(t.display.maxLineLength=p,t.display.maxLine=i.line,t.display.maxLineChanged=!0)}}}}function jr(t){if(t.widgets)for(var e=0;e<t.widgets.length;++e){var n=t.widgets[e],r=n.node.parentNode;r&&(n.height=r.offsetHeight)}}function Er(t,e,n){var r=n&&null!=n.top?Math.max(0,n.top):t.scroller.scrollTop;r=Math.floor(r-kn(t));var i=n&&null!=n.bottom?n.bottom:r+t.wrapper.clientHeight,o=Zt(e,r),a=Zt(e,i);if(n&&n.ensure){var s=n.ensure.from.line,l=n.ensure.to.line;s<o?(o=s,a=Zt(e,Be(Gt(e,s))+t.wrapper.clientHeight)):Math.min(l,e.lastLine())>=a&&(o=Zt(e,Be(Gt(e,l))-t.wrapper.clientHeight),a=l)}return{from:o,to:Math.max(a,o+1)}}function Mr(t,e){var n=t.display,r=ir(t.display);e.top<0&&(e.top=0);var i=t.curOp&&null!=t.curOp.scrollTop?t.curOp.scrollTop:n.scroller.scrollTop,o=En(t),a={};e.bottom-e.top>o&&(e.bottom=e.top+o);var s=t.doc.height+Sn(n),l=e.top<r,c=e.bottom>s-r;if(e.top<i)a.scrollTop=l?0:e.top;else if(e.bottom>i+o){var u=Math.min(e.top,(c?s:e.bottom)-o);u!=i&&(a.scrollTop=u)}var h=t.curOp&&null!=t.curOp.scrollLeft?t.curOp.scrollLeft:n.scroller.scrollLeft,d=jn(t)-(t.options.fixedGutter?n.gutters.offsetWidth:0),f=e.right-e.left>d;return f&&(e.right=e.left+d),e.left<10?a.scrollLeft=0:e.left<h?a.scrollLeft=Math.max(0,e.left-(f?0:10)):e.right>d+h-3&&(a.scrollLeft=e.right+(f?0:10)-d),a}function Dr(t,e){null!=e&&(Nr(t),t.curOp.scrollTop=(null==t.curOp.scrollTop?t.doc.scrollTop:t.curOp.scrollTop)+e)}function Ar(t){Nr(t);var e=t.getCursor();t.curOp.scrollToPos={from:e,to:e,margin:t.options.cursorScrollMargin}}function Lr(t,e,n){null==e&&null==n||Nr(t),null!=e&&(t.curOp.scrollLeft=e),null!=n&&(t.curOp.scrollTop=n)}function Nr(t){var e=t.curOp.scrollToPos;e&&(t.curOp.scrollToPos=null,Ir(t,Yn(t,e.from),Yn(t,e.to),e.margin))}function Ir(t,e,n,r){var i=Mr(t,{left:Math.min(e.left,n.left),top:Math.min(e.top,n.top)-r,right:Math.max(e.right,n.right),bottom:Math.max(e.bottom,n.bottom)+r});Lr(t,i.scrollLeft,i.scrollTop)}function Fr(t,e){Math.abs(t.doc.scrollTop-e)<2||(n||li(t,{top:e}),Rr(t,e,!0),n&&li(t),ri(t,100))}function Rr(t,e,n){e=Math.min(t.display.scroller.scrollHeight-t.display.scroller.clientHeight,e),(t.display.scroller.scrollTop!=e||n)&&(t.doc.scrollTop=e,t.display.scrollbars.setScrollTop(e),t.display.scroller.scrollTop!=e&&(t.display.scroller.scrollTop=e))}function _r(t,e,n,r){e=Math.min(e,t.display.scroller.scrollWidth-t.display.scroller.clientWidth),(n?e==t.doc.scrollLeft:Math.abs(t.doc.scrollLeft-e)<2)&&!r||(t.doc.scrollLeft=e,hi(t),t.display.scroller.scrollLeft!=e&&(t.display.scroller.scrollLeft=e),t.display.scrollbars.setScrollLeft(e))}function Vr(t){var e=t.display,n=e.gutters.offsetWidth,r=Math.round(t.doc.height+Sn(t.display));return{clientHeight:e.scroller.clientHeight,viewHeight:e.wrapper.clientHeight,scrollWidth:e.scroller.scrollWidth,clientWidth:e.scroller.clientWidth,viewWidth:e.wrapper.clientWidth,barLeft:t.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Pn(t)+e.barHeight,nativeBarWidth:e.nativeBarWidth,gutterWidth:n}}var zr=function(t,e,n){this.cm=n;var r=this.vert=E("div",[E("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=E("div",[E("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");r.tabIndex=i.tabIndex=-1,t(r),t(i),dt(r,"scroll",(function(){r.clientHeight&&e(r.scrollTop,"vertical")})),dt(i,"scroll",(function(){i.clientWidth&&e(i.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,a&&s<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};zr.prototype.update=function(t){var e=t.scrollWidth>t.clientWidth+1,n=t.scrollHeight>t.clientHeight+1,r=t.nativeBarWidth;if(n){this.vert.style.display="block",this.vert.style.bottom=e?r+"px":"0";var i=t.viewHeight-(e?r:0);this.vert.firstChild.style.height=Math.max(0,t.scrollHeight-t.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(e){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=t.barLeft+"px";var o=t.viewWidth-t.barLeft-(n?r:0);this.horiz.firstChild.style.width=Math.max(0,t.scrollWidth-t.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&t.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:e?r:0}},zr.prototype.setScrollLeft=function(t){this.horiz.scrollLeft!=t&&(this.horiz.scrollLeft=t),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},zr.prototype.setScrollTop=function(t){this.vert.scrollTop!=t&&(this.vert.scrollTop=t),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},zr.prototype.zeroWidthHack=function(){var t=y&&!f?"12px":"18px";this.horiz.style.height=this.vert.style.width=t,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new V,this.disableVert=new V},zr.prototype.enableZeroWidthBar=function(t,e,n){t.style.pointerEvents="auto",e.set(1e3,(function r(){var i=t.getBoundingClientRect();("vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=t?t.style.pointerEvents="none":e.set(1e3,r)}))},zr.prototype.clear=function(){var t=this.horiz.parentNode;t.removeChild(this.horiz),t.removeChild(this.vert)};var Hr=function(){};function $r(t,e){e||(e=Vr(t));var n=t.display.barWidth,r=t.display.barHeight;Wr(t,e);for(var i=0;i<4&&n!=t.display.barWidth||r!=t.display.barHeight;i++)n!=t.display.barWidth&&t.options.lineWrapping&&Pr(t),Wr(t,Vr(t)),n=t.display.barWidth,r=t.display.barHeight}function Wr(t,e){var n=t.display,r=n.scrollbars.update(e);n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&t.options.coverGutterNextToScrollbar&&t.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=e.gutterWidth+"px"):n.gutterFiller.style.display=""}Hr.prototype.update=function(){return{bottom:0,right:0}},Hr.prototype.setScrollLeft=function(){},Hr.prototype.setScrollTop=function(){},Hr.prototype.clear=function(){};var Br={native:zr,null:Hr};function Ur(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&T(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new Br[t.options.scrollbarStyle]((function(e){t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),dt(e,"mousedown",(function(){t.state.focused&&setTimeout((function(){return t.display.input.focus()}),0)})),e.setAttribute("cm-not-content","true")}),(function(e,n){"horizontal"==n?_r(t,e):Fr(t,e)}),t),t.display.scrollbars.addClass&&L(t.display.wrapper,t.display.scrollbars.addClass)}var qr=0;function Gr(t){var e;t.curOp={cm:t,viewChanged:!1,startHeight:t.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++qr},e=t.curOp,sn?sn.ops.push(e):e.ownsGroup=sn={ops:[e],delayedCallbacks:[]}}function Kr(t){var e=t.curOp;e&&function(t,e){var n=t.ownsGroup;if(n)try{!function(t){var e=t.delayedCallbacks,n=0;do{for(;n<e.length;n++)e[n].call(null);for(var r=0;r<t.ops.length;r++){var i=t.ops[r];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<e.length)}(n)}finally{sn=null,e(n)}}(e,(function(t){for(var e=0;e<t.ops.length;e++)t.ops[e].cm.curOp=null;!function(t){for(var e=t.ops,n=0;n<e.length;n++)Yr(e[n]);for(var r=0;r<e.length;r++)(i=e[r]).updatedDisplay=i.mustUpdate&&ai(i.cm,i.update);for(var i,o=0;o<e.length;o++)Xr(e[o]);for(var a=0;a<e.length;a++)Jr(e[a]);for(var s=0;s<e.length;s++)Zr(e[s])}(t)}))}function Yr(t){var e=t.cm,n=e.display;!function(t){var e=t.display;!e.scrollbarsClipped&&e.scroller.offsetWidth&&(e.nativeBarWidth=e.scroller.offsetWidth-e.scroller.clientWidth,e.heightForcer.style.height=Pn(t)+"px",e.sizer.style.marginBottom=-e.nativeBarWidth+"px",e.sizer.style.borderRightWidth=Pn(t)+"px",e.scrollbarsClipped=!0)}(e),t.updateMaxLine&&qe(e),t.mustUpdate=t.viewChanged||t.forceUpdate||null!=t.scrollTop||t.scrollToPos&&(t.scrollToPos.from.line<n.viewFrom||t.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&e.options.lineWrapping,t.update=t.mustUpdate&&new oi(e,t.mustUpdate&&{top:t.scrollTop,ensure:t.scrollToPos},t.forceUpdate)}function Xr(t){var e=t.cm,n=e.display;t.updatedDisplay&&Pr(e),t.barMeasure=Vr(e),n.maxLineChanged&&!e.options.lineWrapping&&(t.adjustWidthTo=Dn(e,n.maxLine,n.maxLine.text.length).left+3,e.display.sizerWidth=t.adjustWidthTo,t.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+t.adjustWidthTo+Pn(e)+e.display.barWidth),t.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+t.adjustWidthTo-jn(e))),(t.updatedDisplay||t.selectionChanged)&&(t.preparedSelection=n.input.prepareSelection())}function Jr(t){var e=t.cm;null!=t.adjustWidthTo&&(e.display.sizer.style.minWidth=t.adjustWidthTo+"px",t.maxScrollLeft<e.doc.scrollLeft&&_r(e,Math.min(e.display.scroller.scrollLeft,t.maxScrollLeft),!0),e.display.maxLineChanged=!1);var n=t.focus&&t.focus==A();t.preparedSelection&&e.display.input.showSelection(t.preparedSelection,n),(t.updatedDisplay||t.startHeight!=e.doc.height)&&$r(e,t.barMeasure),t.updatedDisplay&&ui(e,t.barMeasure),t.selectionChanged&&Cr(e),e.state.focused&&t.updateInput&&e.display.input.reset(t.typing),n&&Or(t.cm)}function Zr(t){var e=t.cm,n=e.display,r=e.doc;t.updatedDisplay&&si(e,t.update),null==n.wheelStartX||null==t.scrollTop&&null==t.scrollLeft&&!t.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=t.scrollTop&&Rr(e,t.scrollTop,t.forceScroll),null!=t.scrollLeft&&_r(e,t.scrollLeft,!0,!0),t.scrollToPos&&function(t,e){if(!vt(t,"scrollCursorIntoView")){var n=t.display,r=n.sizer.getBoundingClientRect(),i=null;if(e.top+r.top<0?i=!0:e.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!p){var o=E("div","​",null,"position: absolute;\n                         top: "+(e.top-n.viewOffset-kn(t.display))+"px;\n                         height: "+(e.bottom-e.top+Pn(t)+n.barHeight)+"px;\n                         left: "+e.left+"px; width: "+Math.max(2,e.right-e.left)+"px;");t.display.lineSpace.appendChild(o),o.scrollIntoView(i),t.display.lineSpace.removeChild(o)}}}(e,function(t,e,n,r){var i;null==r&&(r=0),t.options.lineWrapping||e!=n||(n="before"==(e=e.ch?ee(e.line,"before"==e.sticky?e.ch-1:e.ch,"after"):e).sticky?ee(e.line,e.ch+1,"before"):e);for(var o=0;o<5;o++){var a=!1,s=Kn(t,e),l=n&&n!=e?Kn(t,n):s,c=Mr(t,i={left:Math.min(s.left,l.left),top:Math.min(s.top,l.top)-r,right:Math.max(s.left,l.left),bottom:Math.max(s.bottom,l.bottom)+r}),u=t.doc.scrollTop,h=t.doc.scrollLeft;if(null!=c.scrollTop&&(Fr(t,c.scrollTop),Math.abs(t.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(_r(t,c.scrollLeft),Math.abs(t.doc.scrollLeft-h)>1&&(a=!0)),!a)break}return i}(e,le(r,t.scrollToPos.from),le(r,t.scrollToPos.to),t.scrollToPos.margin));var i=t.maybeHiddenMarkers,o=t.maybeUnhiddenMarkers;if(i)for(var a=0;a<i.length;++a)i[a].lines.length||gt(i[a],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&gt(o[s],"unhide");n.wrapper.offsetHeight&&(r.scrollTop=e.display.scroller.scrollTop),t.changeObjs&&gt(e,"changes",e,t.changeObjs),t.update&&t.update.finish()}function Qr(t,e){if(t.curOp)return e();Gr(t);try{return e()}finally{Kr(t)}}function ti(t,e){return function(){if(t.curOp)return e.apply(t,arguments);Gr(t);try{return e.apply(t,arguments)}finally{Kr(t)}}}function ei(t){return function(){if(this.curOp)return t.apply(this,arguments);Gr(this);try{return t.apply(this,arguments)}finally{Kr(this)}}}function ni(t){return function(){var e=this.cm;if(!e||e.curOp)return t.apply(this,arguments);Gr(e);try{return t.apply(this,arguments)}finally{Kr(e)}}}function ri(t,e){t.doc.highlightFrontier<t.display.viewTo&&t.state.highlight.set(e,F(ii,t))}function ii(t){var e=t.doc;if(!(e.highlightFrontier>=t.display.viewTo)){var n=+new Date+t.options.workTime,r=pe(t,e.highlightFrontier),i=[];e.iter(r.line,Math.min(e.first+e.size,t.display.viewTo+500),(function(o){if(r.line>=t.display.viewFrom){var a=o.styles,s=o.text.length>t.options.maxHighlightLength?Wt(e.mode,r.state):null,l=de(t,o,r,!0);s&&(r.state=s),o.styles=l.styles;var c=o.styleClasses,u=l.classes;u?o.styleClasses=u:c&&(o.styleClasses=null);for(var h=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),d=0;!h&&d<a.length;++d)h=a[d]!=o.styles[d];h&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=t.options.maxHighlightLength&&ge(t,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine();if(+new Date>n)return ri(t,t.options.workDelay),!0})),e.highlightFrontier=r.line,e.modeFrontier=Math.max(e.modeFrontier,r.line),i.length&&Qr(t,(function(){for(var e=0;e<i.length;e++)fr(t,i[e],"text")}))}}var oi=function(t,e,n){var r=t.display;this.viewport=e,this.visible=Er(r,t.doc,e),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=jn(t),this.force=n,this.dims=ar(t),this.events=[]};function ai(t,e){var n=t.display,r=t.doc;if(e.editorIsHidden)return pr(t),!1;if(!e.force&&e.visible.from>=n.viewFrom&&e.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==vr(t))return!1;di(t)&&(pr(t),e.dims=ar(t));var i=r.first+r.size,o=Math.max(e.visible.from-t.options.viewportMargin,r.first),a=Math.min(i,e.visible.to+t.options.viewportMargin);n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(i,n.viewTo)),Oe&&(o=ze(t.doc,o),a=He(t.doc,a));var s=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=e.wrapperHeight||n.lastWrapWidth!=e.wrapperWidth;!function(t,e,n){var r=t.display;0==r.view.length||e>=r.viewTo||n<=r.viewFrom?(r.view=an(t,e,n),r.viewFrom=e):(r.viewFrom>e?r.view=an(t,e,r.viewFrom).concat(r.view):r.viewFrom<e&&(r.view=r.view.slice(hr(t,e))),r.viewFrom=e,r.viewTo<n?r.view=r.view.concat(an(t,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,hr(t,n)))),r.viewTo=n}(t,o,a),n.viewOffset=Be(Gt(t.doc,n.viewFrom)),t.display.mover.style.top=n.viewOffset+"px";var c=vr(t);if(!s&&0==c&&!e.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1;var u=function(t){if(t.hasFocus())return null;var e=A();if(!e||!D(t.display.lineDiv,e))return null;var n={activeElt:e};if(window.getSelection){var r=window.getSelection();r.anchorNode&&r.extend&&D(t.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}(t);return c>4&&(n.lineDiv.style.display="none"),function(t,e,n){var r=t.display,i=t.options.lineNumbers,o=r.lineDiv,a=o.firstChild;function s(e){var n=e.nextSibling;return l&&y&&t.display.currentWheelTarget==e?e.style.display="none":e.parentNode.removeChild(e),n}for(var c=r.view,u=r.viewFrom,h=0;h<c.length;h++){var d=c[h];if(d.hidden);else if(d.node&&d.node.parentNode==o){for(;a!=d.node;)a=s(a);var f=i&&null!=e&&e<=u&&d.lineNumber;d.changes&&(z(d.changes,"gutter")>-1&&(f=!1),hn(t,d,u,n)),f&&(P(d.lineNumber),d.lineNumber.appendChild(document.createTextNode(te(t.options,u)))),a=d.node.nextSibling}else{var p=yn(t,d,u,n);o.insertBefore(p,a)}u+=d.size}for(;a;)a=s(a)}(t,n.updateLineNumbers,e.dims),c>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,function(t){if(t&&t.activeElt&&t.activeElt!=A()&&(t.activeElt.focus(),t.anchorNode&&D(document.body,t.anchorNode)&&D(document.body,t.focusNode))){var e=window.getSelection(),n=document.createRange();n.setEnd(t.anchorNode,t.anchorOffset),n.collapse(!1),e.removeAllRanges(),e.addRange(n),e.extend(t.focusNode,t.focusOffset)}}(u),P(n.cursorDiv),P(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,s&&(n.lastWrapHeight=e.wrapperHeight,n.lastWrapWidth=e.wrapperWidth,ri(t,400)),n.updateLineNumbers=null,!0}function si(t,e){for(var n=e.viewport,r=!0;(r&&t.options.lineWrapping&&e.oldDisplayWidth!=jn(t)||(n&&null!=n.top&&(n={top:Math.min(t.doc.height+Sn(t.display)-En(t),n.top)}),e.visible=Er(t.display,t.doc,n),!(e.visible.from>=t.display.viewFrom&&e.visible.to<=t.display.viewTo)))&&ai(t,e);r=!1){Pr(t);var i=Vr(t);mr(t),$r(t,i),ui(t,i),e.force=!1}e.signal(t,"update",t),t.display.viewFrom==t.display.reportedViewFrom&&t.display.viewTo==t.display.reportedViewTo||(e.signal(t,"viewportChange",t,t.display.viewFrom,t.display.viewTo),t.display.reportedViewFrom=t.display.viewFrom,t.display.reportedViewTo=t.display.viewTo)}function li(t,e){var n=new oi(t,e);if(ai(t,n)){Pr(t),si(t,n);var r=Vr(t);mr(t),$r(t,r),ui(t,r),n.finish()}}function ci(t){var e=t.gutters.offsetWidth;t.sizer.style.marginLeft=e+"px"}function ui(t,e){t.display.sizer.style.minHeight=e.docHeight+"px",t.display.heightForcer.style.top=e.docHeight+"px",t.display.gutters.style.height=e.docHeight+t.display.barHeight+Pn(t)+"px"}function hi(t){var e=t.display,n=e.view;if(e.alignWidgets||e.gutters.firstChild&&t.options.fixedGutter){for(var r=sr(e)-e.scroller.scrollLeft+t.doc.scrollLeft,i=e.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){t.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o));var s=n[a].alignable;if(s)for(var l=0;l<s.length;l++)s[l].style.left=o}t.options.fixedGutter&&(e.gutters.style.left=r+i+"px")}}function di(t){if(!t.options.lineNumbers)return!1;var e=t.doc,n=te(t.options,e.first+e.size-1),r=t.display;if(n.length!=r.lineNumChars){var i=r.measure.appendChild(E("div",[E("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o;return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-a)+1,r.lineNumWidth=r.lineNumInnerWidth+a,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",ci(t.display),!0}return!1}function fi(t,e){for(var n=[],r=!1,i=0;i<t.length;i++){var o=t[i],a=null;if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!e)continue;r=!0}n.push({className:o,style:a})}return e&&!r&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function pi(t){var e=t.gutters,n=t.gutterSpecs;P(e),t.lineGutter=null;for(var r=0;r<n.length;++r){var i=n[r],o=i.className,a=i.style,s=e.appendChild(E("div",null,"CodeMirror-gutter "+o));a&&(s.style.cssText=a),"CodeMirror-linenumbers"==o&&(t.lineGutter=s,s.style.width=(t.lineNumWidth||1)+"px")}e.style.display=n.length?"":"none",ci(t)}function gi(t){pi(t.display),dr(t),hi(t)}function vi(t,e,r,i){var o=this;this.input=r,o.scrollbarFiller=E("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=E("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=M("div",null,"CodeMirror-code"),o.selectionDiv=E("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=E("div",null,"CodeMirror-cursors"),o.measure=E("div",null,"CodeMirror-measure"),o.lineMeasure=E("div",null,"CodeMirror-measure"),o.lineSpace=M("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var c=M("div",[o.lineSpace],"CodeMirror-lines");o.mover=E("div",[c],null,"position: relative"),o.sizer=E("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=E("div",null,null,"position: absolute; height: "+H+"px; width: 1px;"),o.gutters=E("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=E("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=E("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),a&&s<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),l||n&&m||(o.scroller.draggable=!0),t&&(t.appendChild?t.appendChild(o.wrapper):t(o.wrapper)),o.viewFrom=o.viewTo=e.first,o.reportedViewFrom=o.reportedViewTo=e.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=fi(i.gutters,i.lineNumbers),pi(o),r.init(o)}oi.prototype.signal=function(t,e){yt(t,e)&&this.events.push(arguments)},oi.prototype.finish=function(){for(var t=0;t<this.events.length;t++)gt.apply(null,this.events[t])};var mi=0,yi=null;function bi(t){var e=t.wheelDeltaX,n=t.wheelDeltaY;return null==e&&t.detail&&t.axis==t.HORIZONTAL_AXIS&&(e=t.detail),null==n&&t.detail&&t.axis==t.VERTICAL_AXIS?n=t.detail:null==n&&(n=t.wheelDelta),{x:e,y:n}}function wi(t){var e=bi(t);return e.x*=yi,e.y*=yi,e}function xi(t,e){var r=bi(e),i=r.x,o=r.y,a=t.display,s=a.scroller,c=s.scrollWidth>s.clientWidth,u=s.scrollHeight>s.clientHeight;if(i&&c||o&&u){if(o&&y&&l)t:for(var d=e.target,f=a.view;d!=s;d=d.parentNode)for(var p=0;p<f.length;p++)if(f[p].node==d){t.display.currentWheelTarget=d;break t}if(i&&!n&&!h&&null!=yi)return o&&u&&Fr(t,Math.max(0,s.scrollTop+o*yi)),_r(t,Math.max(0,s.scrollLeft+i*yi)),(!o||o&&u)&&wt(e),void(a.wheelStartX=null);if(o&&null!=yi){var g=o*yi,v=t.doc.scrollTop,m=v+a.wrapper.clientHeight;g<0?v=Math.max(0,v+g-50):m=Math.min(t.doc.height,m+g+50),li(t,{top:v,bottom:m})}mi<20&&(null==a.wheelStartX?(a.wheelStartX=s.scrollLeft,a.wheelStartY=s.scrollTop,a.wheelDX=i,a.wheelDY=o,setTimeout((function(){if(null!=a.wheelStartX){var t=s.scrollLeft-a.wheelStartX,e=s.scrollTop-a.wheelStartY,n=e&&a.wheelDY&&e/a.wheelDY||t&&a.wheelDX&&t/a.wheelDX;a.wheelStartX=a.wheelStartY=null,n&&(yi=(yi*mi+n)/(mi+1),++mi)}}),200)):(a.wheelDX+=i,a.wheelDY+=o))}}a?yi=-.53:n?yi=15:u?yi=-.7:d&&(yi=-1/3);var Ci=function(t,e){this.ranges=t,this.primIndex=e};Ci.prototype.primary=function(){return this.ranges[this.primIndex]},Ci.prototype.equals=function(t){if(t==this)return!0;if(t.primIndex!=this.primIndex||t.ranges.length!=this.ranges.length)return!1;for(var e=0;e<this.ranges.length;e++){var n=this.ranges[e],r=t.ranges[e];if(!re(n.anchor,r.anchor)||!re(n.head,r.head))return!1}return!0},Ci.prototype.deepCopy=function(){for(var t=[],e=0;e<this.ranges.length;e++)t[e]=new Oi(ie(this.ranges[e].anchor),ie(this.ranges[e].head));return new Ci(t,this.primIndex)},Ci.prototype.somethingSelected=function(){for(var t=0;t<this.ranges.length;t++)if(!this.ranges[t].empty())return!0;return!1},Ci.prototype.contains=function(t,e){e||(e=t);for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n];if(ne(e,r.from())>=0&&ne(t,r.to())<=0)return n}return-1};var Oi=function(t,e){this.anchor=t,this.head=e};function ki(t,e,n){var r=t&&t.options.selectionsMayTouch,i=e[n];e.sort((function(t,e){return ne(t.from(),e.from())})),n=z(e,i);for(var o=1;o<e.length;o++){var a=e[o],s=e[o-1],l=ne(s.to(),a.from());if(r&&!a.empty()?l>0:l>=0){var c=ae(s.from(),a.from()),u=oe(s.to(),a.to()),h=s.empty()?a.from()==a.head:s.from()==s.head;o<=n&&--n,e.splice(--o,2,new Oi(h?u:c,h?c:u))}}return new Ci(e,n)}function Si(t,e){return new Ci([new Oi(t,e||t)],0)}function Ti(t){return t.text?ee(t.from.line+t.text.length-1,Y(t.text).length+(1==t.text.length?t.from.ch:0)):t.to}function Pi(t,e){if(ne(t,e.from)<0)return t;if(ne(t,e.to)<=0)return Ti(e);var n=t.line+e.text.length-(e.to.line-e.from.line)-1,r=t.ch;return t.line==e.to.line&&(r+=Ti(e).ch-e.to.ch),ee(n,r)}function ji(t,e){for(var n=[],r=0;r<t.sel.ranges.length;r++){var i=t.sel.ranges[r];n.push(new Oi(Pi(i.anchor,e),Pi(i.head,e)))}return ki(t.cm,n,t.sel.primIndex)}function Ei(t,e,n){return t.line==e.line?ee(n.line,t.ch-e.ch+n.ch):ee(n.line+(t.line-e.line),t.ch)}function Mi(t){t.doc.mode=zt(t.options,t.doc.modeOption),Di(t)}function Di(t){t.doc.iter((function(t){t.stateAfter&&(t.stateAfter=null),t.styles&&(t.styles=null)})),t.doc.modeFrontier=t.doc.highlightFrontier=t.doc.first,ri(t,100),t.state.modeGen++,t.curOp&&dr(t)}function Ai(t,e){return 0==e.from.ch&&0==e.to.ch&&""==Y(e.text)&&(!t.cm||t.cm.options.wholeLineUpdateBefore)}function Li(t,e,n,r){function i(t){return n?n[t]:null}function o(t,n,i){!function(t,e,n,r){t.text=e,t.stateAfter&&(t.stateAfter=null),t.styles&&(t.styles=null),null!=t.order&&(t.order=null),Ee(t),Me(t,n);var i=r?r(t):1;i!=t.height&&Xt(t,i)}(t,n,i,r),cn(t,"change",t,e)}function a(t,e){for(var n=[],o=t;o<e;++o)n.push(new Ge(c[o],i(o),r));return n}var s=e.from,l=e.to,c=e.text,u=Gt(t,s.line),h=Gt(t,l.line),d=Y(c),f=i(c.length-1),p=l.line-s.line;if(e.full)t.insert(0,a(0,c.length)),t.remove(c.length,t.size-c.length);else if(Ai(t,e)){var g=a(0,c.length-1);o(h,h.text,f),p&&t.remove(s.line,p),g.length&&t.insert(s.line,g)}else if(u==h)if(1==c.length)o(u,u.text.slice(0,s.ch)+d+u.text.slice(l.ch),f);else{var v=a(1,c.length-1);v.push(new Ge(d+u.text.slice(l.ch),f,r)),o(u,u.text.slice(0,s.ch)+c[0],i(0)),t.insert(s.line+1,v)}else if(1==c.length)o(u,u.text.slice(0,s.ch)+c[0]+h.text.slice(l.ch),i(0)),t.remove(s.line+1,p);else{o(u,u.text.slice(0,s.ch)+c[0],i(0)),o(h,d+h.text.slice(l.ch),f);var m=a(1,c.length-1);p>1&&t.remove(s.line+1,p-1),t.insert(s.line+1,m)}cn(t,"change",t,e)}function Ni(t,e,n){!function t(r,i,o){if(r.linked)for(var a=0;a<r.linked.length;++a){var s=r.linked[a];if(s.doc!=i){var l=o&&s.sharedHist;n&&!l||(e(s.doc,l),t(s.doc,r,l))}}}(t,null,!0)}function Ii(t,e){if(e.cm)throw new Error("This document is already in use.");t.doc=e,e.cm=t,cr(t),Mi(t),Fi(t),t.options.lineWrapping||qe(t),t.options.mode=e.modeOption,dr(t)}function Fi(t){("rtl"==t.doc.direction?L:T)(t.display.lineDiv,"CodeMirror-rtl")}function Ri(t){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=t||1}function _i(t,e){var n={from:ie(e.from),to:Ti(e),text:Kt(t,e.from,e.to)};return Wi(t,n,e.from.line,e.to.line+1),Ni(t,(function(t){return Wi(t,n,e.from.line,e.to.line+1)}),!0),n}function Vi(t){for(;t.length&&Y(t).ranges;)t.pop()}function zi(t,e,n,r){var i=t.history;i.undone.length=0;var o,a,s=+new Date;if((i.lastOp==r||i.lastOrigin==e.origin&&e.origin&&("+"==e.origin.charAt(0)&&i.lastModTime>s-(t.cm?t.cm.options.historyEventDelay:500)||"*"==e.origin.charAt(0)))&&(o=function(t,e){return e?(Vi(t.done),Y(t.done)):t.done.length&&!Y(t.done).ranges?Y(t.done):t.done.length>1&&!t.done[t.done.length-2].ranges?(t.done.pop(),Y(t.done)):void 0}(i,i.lastOp==r)))a=Y(o.changes),0==ne(e.from,e.to)&&0==ne(e.from,a.to)?a.to=Ti(e):o.changes.push(_i(t,e));else{var l=Y(i.done);for(l&&l.ranges||$i(t.sel,i.done),o={changes:[_i(t,e)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=e.origin,a||gt(t,"historyAdded")}function Hi(t,e,n,r){var i=t.history,o=r&&r.origin;n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(t,e,n,r){var i=e.charAt(0);return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-t.history.lastSelTime<=(t.cm?t.cm.options.historyEventDelay:500)}(t,o,Y(i.done),e))?i.done[i.done.length-1]=e:$i(e,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&!1!==r.clearRedo&&Vi(i.undone)}function $i(t,e){var n=Y(e);n&&n.ranges&&n.equals(t)||e.push(t)}function Wi(t,e,n,r){var i=e["spans_"+t.id],o=0;t.iter(Math.max(t.first,n),Math.min(t.first+t.size,r),(function(n){n.markedSpans&&((i||(i=e["spans_"+t.id]={}))[o]=n.markedSpans),++o}))}function Bi(t){if(!t)return null;for(var e,n=0;n<t.length;++n)t[n].marker.explicitlyCleared?e||(e=t.slice(0,n)):e&&e.push(t[n]);return e?e.length?e:null:t}function Ui(t,e){var n=function(t,e){var n=e["spans_"+t.id];if(!n)return null;for(var r=[],i=0;i<e.text.length;++i)r.push(Bi(n[i]));return r}(t,e),r=Pe(t,e);if(!n)return r;if(!r)return n;for(var i=0;i<n.length;++i){var o=n[i],a=r[i];if(o&&a)t:for(var s=0;s<a.length;++s){for(var l=a[s],c=0;c<o.length;++c)if(o[c].marker==l.marker)continue t;o.push(l)}else a&&(n[i]=a)}return n}function qi(t,e,n){for(var r=[],i=0;i<t.length;++i){var o=t[i];if(o.ranges)r.push(n?Ci.prototype.deepCopy.call(o):o);else{var a=o.changes,s=[];r.push({changes:s});for(var l=0;l<a.length;++l){var c=a[l],u=void 0;if(s.push({from:c.from,to:c.to,text:c.text}),e)for(var h in c)(u=h.match(/^spans_(\d+)$/))&&z(e,Number(u[1]))>-1&&(Y(s)[h]=c[h],delete c[h])}}}return r}function Gi(t,e,n,r){if(r){var i=t.anchor;if(n){var o=ne(e,i)<0;o!=ne(n,i)<0?(i=e,e=n):o!=ne(e,n)<0&&(e=n)}return new Oi(i,e)}return new Oi(n||e,e)}function Ki(t,e,n,r,i){null==i&&(i=t.cm&&(t.cm.display.shift||t.extend)),Qi(t,new Ci([Gi(t.sel.primary(),e,n,i)],0),r)}function Yi(t,e,n){for(var r=[],i=t.cm&&(t.cm.display.shift||t.extend),o=0;o<t.sel.ranges.length;o++)r[o]=Gi(t.sel.ranges[o],e[o],null,i);Qi(t,ki(t.cm,r,t.sel.primIndex),n)}function Xi(t,e,n,r){var i=t.sel.ranges.slice(0);i[e]=n,Qi(t,ki(t.cm,i,t.sel.primIndex),r)}function Ji(t,e,n,r){Qi(t,Si(e,n),r)}function Zi(t,e,n){var r=t.history.done,i=Y(r);i&&i.ranges?(r[r.length-1]=e,to(t,e,n)):Qi(t,e,n)}function Qi(t,e,n){to(t,e,n),Hi(t,t.sel,t.cm?t.cm.curOp.id:NaN,n)}function to(t,e,n){(yt(t,"beforeSelectionChange")||t.cm&&yt(t.cm,"beforeSelectionChange"))&&(e=function(t,e,n){var r={ranges:e.ranges,update:function(e){this.ranges=[];for(var n=0;n<e.length;n++)this.ranges[n]=new Oi(le(t,e[n].anchor),le(t,e[n].head))},origin:n&&n.origin};return gt(t,"beforeSelectionChange",t,r),t.cm&&gt(t.cm,"beforeSelectionChange",t.cm,r),r.ranges!=e.ranges?ki(t.cm,r.ranges,r.ranges.length-1):e}(t,e,n));var r=n&&n.bias||(ne(e.primary().head,t.sel.primary().head)<0?-1:1);eo(t,ro(t,e,r,!0)),n&&!1===n.scroll||!t.cm||Ar(t.cm)}function eo(t,e){e.equals(t.sel)||(t.sel=e,t.cm&&(t.cm.curOp.updateInput=1,t.cm.curOp.selectionChanged=!0,mt(t.cm)),cn(t,"cursorActivity",t))}function no(t){eo(t,ro(t,t.sel,null,!1))}function ro(t,e,n,r){for(var i,o=0;o<e.ranges.length;o++){var a=e.ranges[o],s=e.ranges.length==t.sel.ranges.length&&t.sel.ranges[o],l=oo(t,a.anchor,s&&s.anchor,n,r),c=oo(t,a.head,s&&s.head,n,r);(i||l!=a.anchor||c!=a.head)&&(i||(i=e.ranges.slice(0,o)),i[o]=new Oi(l,c))}return i?ki(t.cm,i,e.primIndex):e}function io(t,e,n,r,i){var o=Gt(t,e.line);if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],l=s.marker,c="selectLeft"in l?!l.selectLeft:l.inclusiveLeft,u="selectRight"in l?!l.selectRight:l.inclusiveRight;if((null==s.from||(c?s.from<=e.ch:s.from<e.ch))&&(null==s.to||(u?s.to>=e.ch:s.to>e.ch))){if(i&&(gt(l,"beforeCursorEnter"),l.explicitlyCleared)){if(o.markedSpans){--a;continue}break}if(!l.atomic)continue;if(n){var h=l.find(r<0?1:-1),d=void 0;if((r<0?u:c)&&(h=ao(t,h,-r,h&&h.line==e.line?o:null)),h&&h.line==e.line&&(d=ne(h,n))&&(r<0?d<0:d>0))return io(t,h,e,r,i)}var f=l.find(r<0?-1:1);return(r<0?c:u)&&(f=ao(t,f,r,f.line==e.line?o:null)),f?io(t,f,e,r,i):null}}return e}function oo(t,e,n,r,i){var o=r||1,a=io(t,e,n,o,i)||!i&&io(t,e,n,o,!0)||io(t,e,n,-o,i)||!i&&io(t,e,n,-o,!0);return a||(t.cantEdit=!0,ee(t.first,0))}function ao(t,e,n,r){return n<0&&0==e.ch?e.line>t.first?le(t,ee(e.line-1)):null:n>0&&e.ch==(r||Gt(t,e.line)).text.length?e.line<t.first+t.size-1?ee(e.line+1,0):null:new ee(e.line,e.ch+n)}function so(t){t.setSelection(ee(t.firstLine(),0),ee(t.lastLine()),W)}function lo(t,e,n){var r={canceled:!1,from:e.from,to:e.to,text:e.text,origin:e.origin,cancel:function(){return r.canceled=!0}};return n&&(r.update=function(e,n,i,o){e&&(r.from=le(t,e)),n&&(r.to=le(t,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),gt(t,"beforeChange",t,r),t.cm&&gt(t.cm,"beforeChange",t.cm,r),r.canceled?(t.cm&&(t.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function co(t,e,n){if(t.cm){if(!t.cm.curOp)return ti(t.cm,co)(t,e,n);if(t.cm.state.suppressEdits)return}if(!(yt(t,"beforeChange")||t.cm&&yt(t.cm,"beforeChange"))||(e=lo(t,e,!0))){var r=Ce&&!n&&function(t,e,n){var r=null;if(t.iter(e.line,n.line+1,(function(t){if(t.markedSpans)for(var e=0;e<t.markedSpans.length;++e){var n=t.markedSpans[e].marker;!n.readOnly||r&&-1!=z(r,n)||(r||(r=[])).push(n)}})),!r)return null;for(var i=[{from:e,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),l=0;l<i.length;++l){var c=i[l];if(!(ne(c.to,s.from)<0||ne(c.from,s.to)>0)){var u=[l,1],h=ne(c.from,s.from),d=ne(c.to,s.to);(h<0||!a.inclusiveLeft&&!h)&&u.push({from:c.from,to:s.from}),(d>0||!a.inclusiveRight&&!d)&&u.push({from:s.to,to:c.to}),i.splice.apply(i,u),l+=u.length-3}}return i}(t,e.from,e.to);if(r)for(var i=r.length-1;i>=0;--i)uo(t,{from:r[i].from,to:r[i].to,text:i?[""]:e.text,origin:e.origin});else uo(t,e)}}function uo(t,e){if(1!=e.text.length||""!=e.text[0]||0!=ne(e.from,e.to)){var n=ji(t,e);zi(t,e,n,t.cm?t.cm.curOp.id:NaN),po(t,e,n,Pe(t,e));var r=[];Ni(t,(function(t,n){n||-1!=z(r,t.history)||(yo(t.history,e),r.push(t.history)),po(t,e,null,Pe(t,e))}))}}function ho(t,e,n){var r=t.cm&&t.cm.state.suppressEdits;if(!r||n){for(var i,o=t.history,a=t.sel,s="undo"==e?o.done:o.undone,l="undo"==e?o.undone:o.done,c=0;c<s.length&&(i=s[c],n?!i.ranges||i.equals(t.sel):i.ranges);c++);if(c!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=s.pop()).ranges){if(r)return void s.push(i);break}if($i(i,l),n&&!i.equals(t.sel))return void Qi(t,i,{clearRedo:!1});a=i}var u=[];$i(a,l),l.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration;for(var h=yt(t,"beforeChange")||t.cm&&yt(t.cm,"beforeChange"),d=function(n){var r=i.changes[n];if(r.origin=e,h&&!lo(t,r,!1))return s.length=0,{};u.push(_i(t,r));var o=n?ji(t,r):Y(s);po(t,r,o,Ui(t,r)),!n&&t.cm&&t.cm.scrollIntoView({from:r.from,to:Ti(r)});var a=[];Ni(t,(function(t,e){e||-1!=z(a,t.history)||(yo(t.history,r),a.push(t.history)),po(t,r,null,Ui(t,r))}))},f=i.changes.length-1;f>=0;--f){var p=d(f);if(p)return p.v}}}}function fo(t,e){if(0!=e&&(t.first+=e,t.sel=new Ci(X(t.sel.ranges,(function(t){return new Oi(ee(t.anchor.line+e,t.anchor.ch),ee(t.head.line+e,t.head.ch))})),t.sel.primIndex),t.cm)){dr(t.cm,t.first,t.first-e,e);for(var n=t.cm.display,r=n.viewFrom;r<n.viewTo;r++)fr(t.cm,r,"gutter")}}function po(t,e,n,r){if(t.cm&&!t.cm.curOp)return ti(t.cm,po)(t,e,n,r);if(e.to.line<t.first)fo(t,e.text.length-1-(e.to.line-e.from.line));else if(!(e.from.line>t.lastLine())){if(e.from.line<t.first){var i=e.text.length-1-(t.first-e.from.line);fo(t,i),e={from:ee(t.first,0),to:ee(e.to.line+i,e.to.ch),text:[Y(e.text)],origin:e.origin}}var o=t.lastLine();e.to.line>o&&(e={from:e.from,to:ee(o,Gt(t,o).text.length),text:[e.text[0]],origin:e.origin}),e.removed=Kt(t,e.from,e.to),n||(n=ji(t,e)),t.cm?function(t,e,n){var r=t.doc,i=t.display,o=e.from,a=e.to,s=!1,l=o.line;t.options.lineWrapping||(l=Jt(Ve(Gt(r,o.line))),r.iter(l,a.line+1,(function(t){if(t==i.maxLine)return s=!0,!0}))),r.sel.contains(e.from,e.to)>-1&&mt(t),Li(r,e,n,lr(t)),t.options.lineWrapping||(r.iter(l,o.line+e.text.length,(function(t){var e=Ue(t);e>i.maxLineLength&&(i.maxLine=t,i.maxLineLength=e,i.maxLineChanged=!0,s=!1)})),s&&(t.curOp.updateMaxLine=!0)),function(t,e){if(t.modeFrontier=Math.min(t.modeFrontier,e),!(t.highlightFrontier<e-10)){for(var n=t.first,r=e-1;r>n;r--){var i=Gt(t,r).stateAfter;if(i&&(!(i instanceof ue)||r+i.lookAhead<e)){n=r+1;break}}t.highlightFrontier=Math.min(t.highlightFrontier,n)}}(r,o.line),ri(t,400);var c=e.text.length-(a.line-o.line)-1;e.full?dr(t):o.line!=a.line||1!=e.text.length||Ai(t.doc,e)?dr(t,o.line,a.line+1,c):fr(t,o.line,"text");var u=yt(t,"changes"),h=yt(t,"change");if(h||u){var d={from:o,to:a,text:e.text,removed:e.removed,origin:e.origin};h&&cn(t,"change",t,d),u&&(t.curOp.changeObjs||(t.curOp.changeObjs=[])).push(d)}t.display.selForContextMenu=null}(t.cm,e,r):Li(t,e,r),to(t,n,W),t.cantEdit&&oo(t,ee(t.firstLine(),0))&&(t.cantEdit=!1)}}function go(t,e,n,r,i){var o;r||(r=n),ne(r,n)<0&&(n=(o=[r,n])[0],r=o[1]),"string"==typeof e&&(e=t.splitLines(e)),co(t,{from:n,to:r,text:e,origin:i})}function vo(t,e,n,r){n<t.line?t.line+=r:e<t.line&&(t.line=e,t.ch=0)}function mo(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i],a=!0;if(o.ranges){o.copied||((o=t[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)vo(o.ranges[s].anchor,e,n,r),vo(o.ranges[s].head,e,n,r)}else{for(var l=0;l<o.changes.length;++l){var c=o.changes[l];if(n<c.from.line)c.from=ee(c.from.line+r,c.from.ch),c.to=ee(c.to.line+r,c.to.ch);else if(e<=c.to.line){a=!1;break}}a||(t.splice(0,i+1),i=0)}}}function yo(t,e){var n=e.from.line,r=e.to.line,i=e.text.length-(r-n)-1;mo(t.done,n,r,i),mo(t.undone,n,r,i)}function bo(t,e,n,r){var i=e,o=e;return"number"==typeof e?o=Gt(t,se(t,e)):i=Jt(e),null==i?null:(r(o,i)&&t.cm&&fr(t.cm,i,n),o)}function wo(t){this.lines=t,this.parent=null;for(var e=0,n=0;n<t.length;++n)t[n].parent=this,e+=t[n].height;this.height=e}function xo(t){this.children=t;for(var e=0,n=0,r=0;r<t.length;++r){var i=t[r];e+=i.chunkSize(),n+=i.height,i.parent=this}this.size=e,this.height=n,this.parent=null}Oi.prototype.from=function(){return ae(this.anchor,this.head)},Oi.prototype.to=function(){return oe(this.anchor,this.head)},Oi.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},wo.prototype={chunkSize:function(){return this.lines.length},removeInner:function(t,e){for(var n=t,r=t+e;n<r;++n){var i=this.lines[n];this.height-=i.height,Ke(i),cn(i,"delete")}this.lines.splice(t,e)},collapse:function(t){t.push.apply(t,this.lines)},insertInner:function(t,e,n){this.height+=n,this.lines=this.lines.slice(0,t).concat(e).concat(this.lines.slice(t));for(var r=0;r<e.length;++r)e[r].parent=this},iterN:function(t,e,n){for(var r=t+e;t<r;++t)if(n(this.lines[t]))return!0}},xo.prototype={chunkSize:function(){return this.size},removeInner:function(t,e){this.size-=e;for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize();if(t<i){var o=Math.min(e,i-t),a=r.height;if(r.removeInner(t,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(e-=o))break;t=0}else t-=i}if(this.size-e<25&&(this.children.length>1||!(this.children[0]instanceof wo))){var s=[];this.collapse(s),this.children=[new wo(s)],this.children[0].parent=this}},collapse:function(t){for(var e=0;e<this.children.length;++e)this.children[e].collapse(t)},insertInner:function(t,e,n){this.size+=e.length,this.height+=n;for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(t<=o){if(i.insertInner(t,e,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,s=a;s<i.lines.length;){var l=new wo(i.lines.slice(s,s+=25));i.height-=l.height,this.children.splice(++r,0,l),l.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}t-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var t=this;do{var e=new xo(t.children.splice(t.children.length-5,5));if(t.parent){t.size-=e.size,t.height-=e.height;var n=z(t.parent.children,t);t.parent.children.splice(n+1,0,e)}else{var r=new xo(t.children);r.parent=t,t.children=[r,e],t=r}e.parent=t.parent}while(t.children.length>10);t.parent.maybeSpill()}},iterN:function(t,e,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(t<o){var a=Math.min(e,o-t);if(i.iterN(t,a,n))return!0;if(0==(e-=a))break;t=0}else t-=o}}};var Co=function(t,e,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r]);this.doc=t,this.node=e};function Oo(t,e,n){Be(e)<(t.curOp&&t.curOp.scrollTop||t.doc.scrollTop)&&Dr(t,n)}Co.prototype.clear=function(){var t=this.doc.cm,e=this.line.widgets,n=this.line,r=Jt(n);if(null!=r&&e){for(var i=0;i<e.length;++i)e[i]==this&&e.splice(i--,1);e.length||(n.widgets=null);var o=Cn(this);Xt(n,Math.max(0,n.height-o)),t&&(Qr(t,(function(){Oo(t,n,-o),fr(t,r,"widget")})),cn(t,"lineWidgetCleared",t,this,r))}},Co.prototype.changed=function(){var t=this,e=this.height,n=this.doc.cm,r=this.line;this.height=null;var i=Cn(this)-e;i&&($e(this.doc,r)||Xt(r,r.height+i),n&&Qr(n,(function(){n.curOp.forceUpdate=!0,Oo(n,r,i),cn(n,"lineWidgetChanged",n,t,Jt(r))})))},bt(Co);var ko=0,So=function(t,e){this.lines=[],this.type=e,this.doc=t,this.id=++ko};function To(t,e,n,r,i){if(r&&r.shared)return function(t,e,n,r,i){(r=R(r)).shared=!1;var o=[To(t,e,n,r,i)],a=o[0],s=r.widgetNode;return Ni(t,(function(t){s&&(r.widgetNode=s.cloneNode(!0)),o.push(To(t,le(t,e),le(t,n),r,i));for(var l=0;l<t.linked.length;++l)if(t.linked[l].isParent)return;a=Y(o)})),new Po(o,a)}(t,e,n,r,i);if(t.cm&&!t.cm.curOp)return ti(t.cm,To)(t,e,n,r,i);var o=new So(t,i),a=ne(e,n);if(r&&R(r,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=M("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(_e(t,e.line,e,n,o)||e.line!=n.line&&_e(t,n.line,e,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");Oe=!0}o.addToHistory&&zi(t,{from:e,to:n,origin:"markText"},t.sel,NaN);var s,l=e.line,c=t.cm;if(t.iter(l,n.line+1,(function(t){c&&o.collapsed&&!c.options.lineWrapping&&Ve(t)==c.display.maxLine&&(s=!0),o.collapsed&&l!=e.line&&Xt(t,0),function(t,e){t.markedSpans=t.markedSpans?t.markedSpans.concat([e]):[e],e.marker.attachLine(t)}(t,new ke(o,l==e.line?e.ch:null,l==n.line?n.ch:null)),++l})),o.collapsed&&t.iter(e.line,n.line+1,(function(e){$e(t,e)&&Xt(e,0)})),o.clearOnEnter&&dt(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(Ce=!0,(t.history.done.length||t.history.undone.length)&&t.clearHistory()),o.collapsed&&(o.id=++ko,o.atomic=!0),c){if(s&&(c.curOp.updateMaxLine=!0),o.collapsed)dr(c,e.line,n.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var u=e.line;u<=n.line;u++)fr(c,u,"text");o.atomic&&no(c.doc),cn(c,"markerAdded",c,o)}return o}So.prototype.clear=function(){if(!this.explicitlyCleared){var t=this.doc.cm,e=t&&!t.curOp;if(e&&Gr(t),yt(this,"clear")){var n=this.find();n&&cn(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],s=Se(a.markedSpans,this);t&&!this.collapsed?fr(t,Jt(a),"text"):t&&(null!=s.to&&(i=Jt(a)),null!=s.from&&(r=Jt(a))),a.markedSpans=Te(a.markedSpans,s),null==s.from&&this.collapsed&&!$e(this.doc,a)&&t&&Xt(a,ir(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var l=0;l<this.lines.length;++l){var c=Ve(this.lines[l]),u=Ue(c);u>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=u,t.display.maxLineChanged=!0)}null!=r&&t&&this.collapsed&&dr(t,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&no(t.doc)),t&&cn(t,"markerCleared",t,this,r,i),e&&Kr(t),this.parent&&this.parent.clear()}},So.prototype.find=function(t,e){var n,r;null==t&&"bookmark"==this.type&&(t=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=Se(o.markedSpans,this);if(null!=a.from&&(n=ee(e?o:Jt(o),a.from),-1==t))return n;if(null!=a.to&&(r=ee(e?o:Jt(o),a.to),1==t))return r}return n&&{from:n,to:r}},So.prototype.changed=function(){var t=this,e=this.find(-1,!0),n=this,r=this.doc.cm;e&&r&&Qr(r,(function(){var i=e.line,o=Jt(e.line),a=An(r,o);if(a&&(Vn(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!$e(n.doc,i)&&null!=n.height){var s=n.height;n.height=null;var l=Cn(n)-s;l&&Xt(i,i.height+l)}cn(r,"markerChanged",r,t)}))},So.prototype.attachLine=function(t){if(!this.lines.length&&this.doc.cm){var e=this.doc.cm.curOp;e.maybeHiddenMarkers&&-1!=z(e.maybeHiddenMarkers,this)||(e.maybeUnhiddenMarkers||(e.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(t)},So.prototype.detachLine=function(t){if(this.lines.splice(z(this.lines,t),1),!this.lines.length&&this.doc.cm){var e=this.doc.cm.curOp;(e.maybeHiddenMarkers||(e.maybeHiddenMarkers=[])).push(this)}},bt(So);var Po=function(t,e){this.markers=t,this.primary=e;for(var n=0;n<t.length;++n)t[n].parent=this};function jo(t){return t.findMarks(ee(t.first,0),t.clipPos(ee(t.lastLine())),(function(t){return t.parent}))}function Eo(t){for(var e=function(e){var n=t[e],r=[n.primary.doc];Ni(n.primary.doc,(function(t){return r.push(t)}));for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==z(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<t.length;n++)e(n)}Po.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var t=0;t<this.markers.length;++t)this.markers[t].clear();cn(this,"clear")}},Po.prototype.find=function(t,e){return this.primary.find(t,e)},bt(Po);var Mo=0,Do=function(t,e,n,r,i){if(!(this instanceof Do))return new Do(t,e,n,r,i);null==n&&(n=0),xo.call(this,[new wo([new Ge("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n;var o=ee(n,0);this.sel=Si(o),this.history=new Ri(null),this.id=++Mo,this.modeOption=e,this.lineSep=r,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof t&&(t=this.splitLines(t)),Li(this,{from:o,to:o,text:t}),Qi(this,Si(o),W)};Do.prototype=Z(xo.prototype,{constructor:Do,iter:function(t,e,n){n?this.iterN(t-this.first,e-t,n):this.iterN(this.first,this.first+this.size,t)},insert:function(t,e){for(var n=0,r=0;r<e.length;++r)n+=e[r].height;this.insertInner(t-this.first,e,n)},remove:function(t,e){this.removeInner(t-this.first,e)},getValue:function(t){var e=Yt(this,this.first,this.first+this.size);return!1===t?e:e.join(t||this.lineSeparator())},setValue:ni((function(t){var e=ee(this.first,0),n=this.first+this.size-1;co(this,{from:e,to:ee(n,Gt(this,n).text.length),text:this.splitLines(t),origin:"setValue",full:!0},!0),this.cm&&Lr(this.cm,0,0),Qi(this,Si(e),W)})),replaceRange:function(t,e,n,r){go(this,t,e=le(this,e),n=n?le(this,n):e,r)},getRange:function(t,e,n){var r=Kt(this,le(this,t),le(this,e));return!1===n?r:r.join(n||this.lineSeparator())},getLine:function(t){var e=this.getLineHandle(t);return e&&e.text},getLineHandle:function(t){if(Qt(this,t))return Gt(this,t)},getLineNumber:function(t){return Jt(t)},getLineHandleVisualStart:function(t){return"number"==typeof t&&(t=Gt(this,t)),Ve(t)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(t){return le(this,t)},getCursor:function(t){var e=this.sel.primary();return null==t||"head"==t?e.head:"anchor"==t?e.anchor:"end"==t||"to"==t||!1===t?e.to():e.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ni((function(t,e,n){Ji(this,le(this,"number"==typeof t?ee(t,e||0):t),null,n)})),setSelection:ni((function(t,e,n){Ji(this,le(this,t),le(this,e||t),n)})),extendSelection:ni((function(t,e,n){Ki(this,le(this,t),e&&le(this,e),n)})),extendSelections:ni((function(t,e){Yi(this,ce(this,t),e)})),extendSelectionsBy:ni((function(t,e){Yi(this,ce(this,X(this.sel.ranges,t)),e)})),setSelections:ni((function(t,e,n){if(t.length){for(var r=[],i=0;i<t.length;i++)r[i]=new Oi(le(this,t[i].anchor),le(this,t[i].head));null==e&&(e=Math.min(t.length-1,this.sel.primIndex)),Qi(this,ki(this.cm,r,e),n)}})),addSelection:ni((function(t,e,n){var r=this.sel.ranges.slice(0);r.push(new Oi(le(this,t),le(this,e||t))),Qi(this,ki(this.cm,r,r.length-1),n)})),getSelection:function(t){for(var e,n=this.sel.ranges,r=0;r<n.length;r++){var i=Kt(this,n[r].from(),n[r].to());e=e?e.concat(i):i}return!1===t?e:e.join(t||this.lineSeparator())},getSelections:function(t){for(var e=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=Kt(this,n[r].from(),n[r].to());!1!==t&&(i=i.join(t||this.lineSeparator())),e[r]=i}return e},replaceSelection:function(t,e,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=t;this.replaceSelections(r,e,n||"+input")},replaceSelections:ni((function(t,e,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o];r[o]={from:a.from(),to:a.to(),text:this.splitLines(t[o]),origin:n}}for(var s=e&&"end"!=e&&function(t,e,n){for(var r=[],i=ee(t.first,0),o=i,a=0;a<e.length;a++){var s=e[a],l=Ei(s.from,i,o),c=Ei(Ti(s),i,o);if(i=s.to,o=c,"around"==n){var u=t.sel.ranges[a],h=ne(u.head,u.anchor)<0;r[a]=new Oi(h?c:l,h?l:c)}else r[a]=new Oi(l,l)}return new Ci(r,t.sel.primIndex)}(this,r,e),l=r.length-1;l>=0;l--)co(this,r[l]);s?Zi(this,s):this.cm&&Ar(this.cm)})),undo:ni((function(){ho(this,"undo")})),redo:ni((function(){ho(this,"redo")})),undoSelection:ni((function(){ho(this,"undo",!0)})),redoSelection:ni((function(){ho(this,"redo",!0)})),setExtending:function(t){this.extend=t},getExtending:function(){return this.extend},historySize:function(){for(var t=this.history,e=0,n=0,r=0;r<t.done.length;r++)t.done[r].ranges||++e;for(var i=0;i<t.undone.length;i++)t.undone[i].ranges||++n;return{undo:e,redo:n}},clearHistory:function(){this.history=new Ri(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(t){return t&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(t){return this.history.generation==(t||this.cleanGeneration)},getHistory:function(){return{done:qi(this.history.done),undone:qi(this.history.undone)}},setHistory:function(t){var e=this.history=new Ri(this.history.maxGeneration);e.done=qi(t.done.slice(0),null,!0),e.undone=qi(t.undone.slice(0),null,!0)},setGutterMarker:ni((function(t,e,n){return bo(this,t,"gutter",(function(t){var r=t.gutterMarkers||(t.gutterMarkers={});return r[e]=n,!n&&nt(r)&&(t.gutterMarkers=null),!0}))})),clearGutter:ni((function(t){var e=this;this.iter((function(n){n.gutterMarkers&&n.gutterMarkers[t]&&bo(e,n,"gutter",(function(){return n.gutterMarkers[t]=null,nt(n.gutterMarkers)&&(n.gutterMarkers=null),!0}))}))})),lineInfo:function(t){var e;if("number"==typeof t){if(!Qt(this,t))return null;if(e=t,!(t=Gt(this,t)))return null}else if(null==(e=Jt(t)))return null;return{line:e,handle:t,text:t.text,gutterMarkers:t.gutterMarkers,textClass:t.textClass,bgClass:t.bgClass,wrapClass:t.wrapClass,widgets:t.widgets}},addLineClass:ni((function(t,e,n){return bo(this,t,"gutter"==e?"gutter":"class",(function(t){var r="text"==e?"textClass":"background"==e?"bgClass":"gutter"==e?"gutterClass":"wrapClass";if(t[r]){if(k(n).test(t[r]))return!1;t[r]+=" "+n}else t[r]=n;return!0}))})),removeLineClass:ni((function(t,e,n){return bo(this,t,"gutter"==e?"gutter":"class",(function(t){var r="text"==e?"textClass":"background"==e?"bgClass":"gutter"==e?"gutterClass":"wrapClass",i=t[r];if(!i)return!1;if(null==n)t[r]=null;else{var o=i.match(k(n));if(!o)return!1;var a=o.index+o[0].length;t[r]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0}))})),addLineWidget:ni((function(t,e,n){return function(t,e,n,r){var i=new Co(t,n,r),o=t.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),bo(t,e,"widget",(function(e){var n=e.widgets||(e.widgets=[]);if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=e,o&&!$e(t,e)){var r=Be(e)<t.scrollTop;Xt(e,e.height+Cn(i)),r&&Dr(o,i.height),o.curOp.forceUpdate=!0}return!0})),o&&cn(o,"lineWidgetAdded",o,i,"number"==typeof e?e:Jt(e)),i}(this,t,e,n)})),removeLineWidget:function(t){t.clear()},markText:function(t,e,n){return To(this,le(this,t),le(this,e),n,n&&n.type||"range")},setBookmark:function(t,e){var n={replacedWith:e&&(null==e.nodeType?e.widget:e),insertLeft:e&&e.insertLeft,clearWhenEmpty:!1,shared:e&&e.shared,handleMouseEvents:e&&e.handleMouseEvents};return To(this,t=le(this,t),t,n,"bookmark")},findMarksAt:function(t){var e=[],n=Gt(this,(t=le(this,t)).line).markedSpans;if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=t.ch)&&(null==i.to||i.to>=t.ch)&&e.push(i.marker.parent||i.marker)}return e},findMarks:function(t,e,n){t=le(this,t),e=le(this,e);var r=[],i=t.line;return this.iter(t.line,e.line+1,(function(o){var a=o.markedSpans;if(a)for(var s=0;s<a.length;s++){var l=a[s];null!=l.to&&i==t.line&&t.ch>=l.to||null==l.from&&i!=t.line||null!=l.from&&i==e.line&&l.from>=e.ch||n&&!n(l.marker)||r.push(l.marker.parent||l.marker)}++i})),r},getAllMarks:function(){var t=[];return this.iter((function(e){var n=e.markedSpans;if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&t.push(n[r].marker)})),t},posFromIndex:function(t){var e,n=this.first,r=this.lineSeparator().length;return this.iter((function(i){var o=i.text.length+r;if(o>t)return e=t,!0;t-=o,++n})),le(this,ee(n,e))},indexFromPos:function(t){var e=(t=le(this,t)).ch;if(t.line<this.first||t.ch<0)return 0;var n=this.lineSeparator().length;return this.iter(this.first,t.line,(function(t){e+=t.text.length+n})),e},copy:function(t){var e=new Do(Yt(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return e.scrollTop=this.scrollTop,e.scrollLeft=this.scrollLeft,e.sel=this.sel,e.extend=!1,t&&(e.history.undoDepth=this.history.undoDepth,e.setHistory(this.getHistory())),e},linkedDoc:function(t){t||(t={});var e=this.first,n=this.first+this.size;null!=t.from&&t.from>e&&(e=t.from),null!=t.to&&t.to<n&&(n=t.to);var r=new Do(Yt(this,e,n),t.mode||this.modeOption,e,this.lineSep,this.direction);return t.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:t.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:t.sharedHist}],function(t,e){for(var n=0;n<e.length;n++){var r=e[n],i=r.find(),o=t.clipPos(i.from),a=t.clipPos(i.to);if(ne(o,a)){var s=To(t,o,a,r.primary,r.primary.type);r.markers.push(s),s.parent=r}}}(r,jo(this)),r},unlinkDoc:function(t){if(t instanceof Pa&&(t=t.doc),this.linked)for(var e=0;e<this.linked.length;++e)if(this.linked[e].doc==t){this.linked.splice(e,1),t.unlinkDoc(this),Eo(jo(this));break}if(t.history==this.history){var n=[t.id];Ni(t,(function(t){return n.push(t.id)}),!0),t.history=new Ri(null),t.history.done=qi(this.history.done,n),t.history.undone=qi(this.history.undone,n)}},iterLinkedDocs:function(t){Ni(this,t)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(t){return this.lineSep?t.split(this.lineSep):At(t)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ni((function(t){var e;"rtl"!=t&&(t="ltr"),t!=this.direction&&(this.direction=t,this.iter((function(t){return t.order=null})),this.cm&&Qr(e=this.cm,(function(){Fi(e),dr(e)})))}))}),Do.prototype.eachLine=Do.prototype.iter;var Ao=0;function Lo(t){var e=this;if(No(e),!vt(e,t)&&!On(e.display,t)){wt(t),a&&(Ao=+new Date);var n=ur(e,t,!0),r=t.dataTransfer.files;if(n&&!e.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),s=0,l=function(t,r){if(!e.options.allowDropFileTypes||-1!=z(e.options.allowDropFileTypes,t.type)){var a=new FileReader;a.onload=ti(e,(function(){var t=a.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(t)&&(t=""),o[r]=t,++s==i){var l={from:n=le(e.doc,n),to:n,text:e.doc.splitLines(o.join(e.doc.lineSeparator())),origin:"paste"};co(e.doc,l),Zi(e.doc,Si(n,Ti(l)))}})),a.readAsText(t)}},c=0;c<i;++c)l(r[c],c);else{if(e.state.draggingText&&e.doc.sel.contains(n)>-1)return e.state.draggingText(t),void setTimeout((function(){return e.display.input.focus()}),20);try{var u=t.dataTransfer.getData("Text");if(u){var h;if(e.state.draggingText&&!e.state.draggingText.copy&&(h=e.listSelections()),to(e.doc,Si(n,n)),h)for(var d=0;d<h.length;++d)go(e.doc,"",h[d].anchor,h[d].head,"drag");e.replaceSelection(u,"around","paste"),e.display.input.focus()}}catch(t){}}}}function No(t){t.display.dragCursor&&(t.display.lineSpace.removeChild(t.display.dragCursor),t.display.dragCursor=null)}function Io(t){if(document.getElementsByClassName){for(var e=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<e.length;r++){var i=e[r].CodeMirror;i&&n.push(i)}n.length&&n[0].operation((function(){for(var e=0;e<n.length;e++)t(n[e])}))}}var Fo=!1;function Ro(){var t;Fo||(dt(window,"resize",(function(){null==t&&(t=setTimeout((function(){t=null,Io(_o)}),100))})),dt(window,"blur",(function(){return Io(Tr)})),Fo=!0)}function _o(t){var e=t.display;e.cachedCharWidth=e.cachedTextHeight=e.cachedPaddingH=null,e.scrollbarsClipped=!1,t.setSize()}for(var Vo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},zo=0;zo<10;zo++)Vo[zo+48]=Vo[zo+96]=String(zo);for(var Ho=65;Ho<=90;Ho++)Vo[Ho]=String.fromCharCode(Ho);for(var $o=1;$o<=12;$o++)Vo[$o+111]=Vo[$o+63235]="F"+$o;var Wo={};function Bo(t){var e,n,r,i,o=t.split(/-(?!$)/);t=o[o.length-1];for(var a=0;a<o.length-1;a++){var s=o[a];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))e=!0;else if(/^(c|ctrl|control)$/i.test(s))n=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);r=!0}}return e&&(t="Alt-"+t),n&&(t="Ctrl-"+t),i&&(t="Cmd-"+t),r&&(t="Shift-"+t),t}function Uo(t){var e={};for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue;if("..."==r){delete t[n];continue}for(var i=X(n.split(" "),Bo),o=0;o<i.length;o++){var a=void 0,s=void 0;o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...");var l=e[s];if(l){if(l!=a)throw new Error("Inconsistent bindings for "+s)}else e[s]=a}delete t[n]}for(var c in e)t[c]=e[c];return t}function qo(t,e,n,r){var i=(e=Xo(e)).call?e.call(t,r):e[t];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&n(i))return"handled";if(e.fallthrough){if("[object Array]"!=Object.prototype.toString.call(e.fallthrough))return qo(t,e.fallthrough,n,r);for(var o=0;o<e.fallthrough.length;o++){var a=qo(t,e.fallthrough[o],n,r);if(a)return a}}}function Go(t){var e="string"==typeof t?t:Vo[t.keyCode];return"Ctrl"==e||"Alt"==e||"Shift"==e||"Mod"==e}function Ko(t,e,n){var r=t;return e.altKey&&"Alt"!=r&&(t="Alt-"+t),(C?e.metaKey:e.ctrlKey)&&"Ctrl"!=r&&(t="Ctrl-"+t),(C?e.ctrlKey:e.metaKey)&&"Cmd"!=r&&(t="Cmd-"+t),!n&&e.shiftKey&&"Shift"!=r&&(t="Shift-"+t),t}function Yo(t,e){if(h&&34==t.keyCode&&t.char)return!1;var n=Vo[t.keyCode];return null!=n&&!t.altGraphKey&&(3==t.keyCode&&t.code&&(n=t.code),Ko(n,t,e))}function Xo(t){return"string"==typeof t?Wo[t]:t}function Jo(t,e){for(var n=t.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=e(n[i]);r.length&&ne(o.from,Y(r).to)<=0;){var a=r.pop();if(ne(a.from,o.from)<0){o.from=a.from;break}}r.push(o)}Qr(t,(function(){for(var e=r.length-1;e>=0;e--)go(t.doc,"",r[e].from,r[e].to,"+delete");Ar(t)}))}function Zo(t,e,n){var r=ot(t.text,e+n,n);return r<0||r>t.text.length?null:r}function Qo(t,e,n){var r=Zo(t,e.ch,n);return null==r?null:new ee(e.line,r,n<0?"after":"before")}function ta(t,e,n,r,i){if(t){var o=ut(n,e.doc.direction);if(o){var a,s=i<0?Y(o):o[0],l=i<0==(1==s.level)?"after":"before";if(s.level>0||"rtl"==e.doc.direction){var c=Ln(e,n);a=i<0?n.text.length-1:0;var u=Nn(e,c,a).top;a=at((function(t){return Nn(e,c,t).top==u}),i<0==(1==s.level)?s.from:s.to-1,a),"before"==l&&(a=Zo(n,a,1))}else a=i<0?s.to:s.from;return new ee(r,a,l)}}return new ee(r,i<0?n.text.length:0,i<0?"before":"after")}Wo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Wo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Wo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Wo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Wo.default=y?Wo.macDefault:Wo.pcDefault;var ea={selectAll:so,singleSelection:function(t){return t.setSelection(t.getCursor("anchor"),t.getCursor("head"),W)},killLine:function(t){return Jo(t,(function(e){if(e.empty()){var n=Gt(t.doc,e.head.line).text.length;return e.head.ch==n&&e.head.line<t.lastLine()?{from:e.head,to:ee(e.head.line+1,0)}:{from:e.head,to:ee(e.head.line,n)}}return{from:e.from(),to:e.to()}}))},deleteLine:function(t){return Jo(t,(function(e){return{from:ee(e.from().line,0),to:le(t.doc,ee(e.to().line+1,0))}}))},delLineLeft:function(t){return Jo(t,(function(t){return{from:ee(t.from().line,0),to:t.from()}}))},delWrappedLineLeft:function(t){return Jo(t,(function(e){var n=t.charCoords(e.head,"div").top+5;return{from:t.coordsChar({left:0,top:n},"div"),to:e.from()}}))},delWrappedLineRight:function(t){return Jo(t,(function(e){var n=t.charCoords(e.head,"div").top+5,r=t.coordsChar({left:t.display.lineDiv.offsetWidth+100,top:n},"div");return{from:e.from(),to:r}}))},undo:function(t){return t.undo()},redo:function(t){return t.redo()},undoSelection:function(t){return t.undoSelection()},redoSelection:function(t){return t.redoSelection()},goDocStart:function(t){return t.extendSelection(ee(t.firstLine(),0))},goDocEnd:function(t){return t.extendSelection(ee(t.lastLine()))},goLineStart:function(t){return t.extendSelectionsBy((function(e){return na(t,e.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(t){return t.extendSelectionsBy((function(e){return ra(t,e.head)}),{origin:"+move",bias:1})},goLineEnd:function(t){return t.extendSelectionsBy((function(e){return function(t,e){var n=Gt(t.doc,e),r=function(t){for(var e;e=Fe(t);)t=e.find(1,!0).line;return t}(n);return r!=n&&(e=Jt(r)),ta(!0,t,n,e,-1)}(t,e.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(t){return t.extendSelectionsBy((function(e){var n=t.cursorCoords(e.head,"div").top+5;return t.coordsChar({left:t.display.lineDiv.offsetWidth+100,top:n},"div")}),U)},goLineLeft:function(t){return t.extendSelectionsBy((function(e){var n=t.cursorCoords(e.head,"div").top+5;return t.coordsChar({left:0,top:n},"div")}),U)},goLineLeftSmart:function(t){return t.extendSelectionsBy((function(e){var n=t.cursorCoords(e.head,"div").top+5,r=t.coordsChar({left:0,top:n},"div");return r.ch<t.getLine(r.line).search(/\S/)?ra(t,e.head):r}),U)},goLineUp:function(t){return t.moveV(-1,"line")},goLineDown:function(t){return t.moveV(1,"line")},goPageUp:function(t){return t.moveV(-1,"page")},goPageDown:function(t){return t.moveV(1,"page")},goCharLeft:function(t){return t.moveH(-1,"char")},goCharRight:function(t){return t.moveH(1,"char")},goColumnLeft:function(t){return t.moveH(-1,"column")},goColumnRight:function(t){return t.moveH(1,"column")},goWordLeft:function(t){return t.moveH(-1,"word")},goGroupRight:function(t){return t.moveH(1,"group")},goGroupLeft:function(t){return t.moveH(-1,"group")},goWordRight:function(t){return t.moveH(1,"word")},delCharBefore:function(t){return t.deleteH(-1,"char")},delCharAfter:function(t){return t.deleteH(1,"char")},delWordBefore:function(t){return t.deleteH(-1,"word")},delWordAfter:function(t){return t.deleteH(1,"word")},delGroupBefore:function(t){return t.deleteH(-1,"group")},delGroupAfter:function(t){return t.deleteH(1,"group")},indentAuto:function(t){return t.indentSelection("smart")},indentMore:function(t){return t.indentSelection("add")},indentLess:function(t){return t.indentSelection("subtract")},insertTab:function(t){return t.replaceSelection("\t")},insertSoftTab:function(t){for(var e=[],n=t.listSelections(),r=t.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=_(t.getLine(o.line),o.ch,r);e.push(K(r-a%r))}t.replaceSelections(e)},defaultTab:function(t){t.somethingSelected()?t.indentSelection("add"):t.execCommand("insertTab")},transposeChars:function(t){return Qr(t,(function(){for(var e=t.listSelections(),n=[],r=0;r<e.length;r++)if(e[r].empty()){var i=e[r].head,o=Gt(t.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new ee(i.line,i.ch-1)),i.ch>0)i=new ee(i.line,i.ch+1),t.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),ee(i.line,i.ch-2),i,"+transpose");else if(i.line>t.doc.first){var a=Gt(t.doc,i.line-1).text;a&&(i=new ee(i.line,1),t.replaceRange(o.charAt(0)+t.doc.lineSeparator()+a.charAt(a.length-1),ee(i.line-1,a.length-1),i,"+transpose"))}n.push(new Oi(i,i))}t.setSelections(n)}))},newlineAndIndent:function(t){return Qr(t,(function(){for(var e=t.listSelections(),n=e.length-1;n>=0;n--)t.replaceRange(t.doc.lineSeparator(),e[n].anchor,e[n].head,"+input");e=t.listSelections();for(var r=0;r<e.length;r++)t.indentLine(e[r].from().line,null,!0);Ar(t)}))},openLine:function(t){return t.replaceSelection("\n","start")},toggleOverwrite:function(t){return t.toggleOverwrite()}};function na(t,e){var n=Gt(t.doc,e),r=Ve(n);return r!=n&&(e=Jt(r)),ta(!0,t,r,e,1)}function ra(t,e){var n=na(t,e.line),r=Gt(t.doc,n.line),i=ut(r,t.doc.direction);if(!i||0==i[0].level){var o=Math.max(0,r.text.search(/\S/)),a=e.line==n.line&&e.ch<=o&&e.ch;return ee(n.line,a?0:o,n.sticky)}return n}function ia(t,e,n){if("string"==typeof e&&!(e=ea[e]))return!1;t.display.input.ensurePolled();var r=t.display.shift,i=!1;try{t.isReadOnly()&&(t.state.suppressEdits=!0),n&&(t.display.shift=!1),i=e(t)!=$}finally{t.display.shift=r,t.state.suppressEdits=!1}return i}var oa=new V;function aa(t,e,n,r){var i=t.state.keySeq;if(i){if(Go(e))return"handled";if(/\'$/.test(e)?t.state.keySeq=null:oa.set(50,(function(){t.state.keySeq==i&&(t.state.keySeq=null,t.display.input.reset())})),sa(t,i+" "+e,n,r))return!0}return sa(t,e,n,r)}function sa(t,e,n,r){var i=function(t,e,n){for(var r=0;r<t.state.keyMaps.length;r++){var i=qo(e,t.state.keyMaps[r],n,t);if(i)return i}return t.options.extraKeys&&qo(e,t.options.extraKeys,n,t)||qo(e,t.options.keyMap,n,t)}(t,e,r);return"multi"==i&&(t.state.keySeq=e),"handled"==i&&cn(t,"keyHandled",t,e,n),"handled"!=i&&"multi"!=i||(wt(n),Cr(t)),!!i}function la(t,e){var n=Yo(e,!0);return!!n&&(e.shiftKey&&!t.state.keySeq?aa(t,"Shift-"+n,e,(function(e){return ia(t,e,!0)}))||aa(t,n,e,(function(e){if("string"==typeof e?/^go[A-Z]/.test(e):e.motion)return ia(t,e)})):aa(t,n,e,(function(e){return ia(t,e)})))}var ca=null;function ua(t){var e=this;if(e.curOp.focus=A(),!vt(e,t)){a&&s<11&&27==t.keyCode&&(t.returnValue=!1);var n=t.keyCode;e.display.shift=16==n||t.shiftKey;var r=la(e,t);h&&(ca=r?n:null,!r&&88==n&&!Nt&&(y?t.metaKey:t.ctrlKey)&&e.replaceSelection("",null,"cut")),18!=n||/\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className)||function(t){var e=t.display.lineDiv;function n(t){18!=t.keyCode&&t.altKey||(T(e,"CodeMirror-crosshair"),pt(document,"keyup",n),pt(document,"mouseover",n))}L(e,"CodeMirror-crosshair"),dt(document,"keyup",n),dt(document,"mouseover",n)}(e)}}function ha(t){16==t.keyCode&&(this.doc.sel.shift=!1),vt(this,t)}function da(t){var e=this;if(!(On(e.display,t)||vt(e,t)||t.ctrlKey&&!t.altKey||y&&t.metaKey)){var n=t.keyCode,r=t.charCode;if(h&&n==ca)return ca=null,void wt(t);if(!h||t.which&&!(t.which<10)||!la(e,t)){var i=String.fromCharCode(null==r?n:r);"\b"!=i&&(function(t,e,n){return aa(t,"'"+n+"'",e,(function(e){return ia(t,e,!0)}))}(e,t,i)||e.display.input.onKeyPress(t))}}}var fa,pa,ga=function(t,e,n){this.time=t,this.pos=e,this.button=n};function va(t){var e=this,n=e.display;if(!(vt(e,t)||n.activeTouch&&n.input.supportsTouch()))if(n.input.ensurePolled(),n.shift=t.shiftKey,On(n,t))l||(n.scroller.draggable=!1,setTimeout((function(){return n.scroller.draggable=!0}),100));else if(!ba(e,t)){var r=ur(e,t),i=St(t),o=r?function(t,e){var n=+new Date;return pa&&pa.compare(n,t,e)?(fa=pa=null,"triple"):fa&&fa.compare(n,t,e)?(pa=new ga(n,t,e),fa=null,"double"):(fa=new ga(n,t,e),pa=null,"single")}(r,i):"single";window.focus(),1==i&&e.state.selectingText&&e.state.selectingText(t),r&&function(t,e,n,r,i){var o="Click";return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),aa(t,Ko(o=(1==e?"Left":2==e?"Middle":"Right")+o,i),i,(function(e){if("string"==typeof e&&(e=ea[e]),!e)return!1;var r=!1;try{t.isReadOnly()&&(t.state.suppressEdits=!0),r=e(t,n)!=$}finally{t.state.suppressEdits=!1}return r}))}(e,i,r,o,t)||(1==i?r?function(t,e,n,r){a?setTimeout(F(Or,t),0):t.curOp.focus=A();var i,o=function(t,e,n){var r=t.getOption("configureMouse"),i=r?r(t,e,n):{};if(null==i.unit){var o=b?n.shiftKey&&n.metaKey:n.altKey;i.unit=o?"rectangle":"single"==e?"char":"double"==e?"word":"line"}return(null==i.extend||t.doc.extend)&&(i.extend=t.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=y?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(y?n.altKey:n.ctrlKey)),i}(t,n,r),c=t.doc.sel;t.options.dragDrop&&jt&&!t.isReadOnly()&&"single"==n&&(i=c.contains(e))>-1&&(ne((i=c.ranges[i]).from(),e)<0||e.xRel>0)&&(ne(i.to(),e)>0||e.xRel<0)?function(t,e,n,r){var i=t.display,o=!1,c=ti(t,(function(e){l&&(i.scroller.draggable=!1),t.state.draggingText=!1,pt(i.wrapper.ownerDocument,"mouseup",c),pt(i.wrapper.ownerDocument,"mousemove",u),pt(i.scroller,"dragstart",h),pt(i.scroller,"drop",c),o||(wt(e),r.addNew||Ki(t.doc,n,null,null,r.extend),l||a&&9==s?setTimeout((function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()}),20):i.input.focus())})),u=function(t){o=o||Math.abs(e.clientX-t.clientX)+Math.abs(e.clientY-t.clientY)>=10},h=function(){return o=!0};l&&(i.scroller.draggable=!0),t.state.draggingText=c,c.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),dt(i.wrapper.ownerDocument,"mouseup",c),dt(i.wrapper.ownerDocument,"mousemove",u),dt(i.scroller,"dragstart",h),dt(i.scroller,"drop",c),kr(t),setTimeout((function(){return i.input.focus()}),20)}(t,r,e,o):function(t,e,n,r){var i=t.display,o=t.doc;wt(e);var a,s,l=o.sel,c=l.ranges;if(r.addNew&&!r.extend?(s=o.sel.contains(n),a=s>-1?c[s]:new Oi(n,n)):(a=o.sel.primary(),s=o.sel.primIndex),"rectangle"==r.unit)r.addNew||(a=new Oi(n,n)),n=ur(t,e,!0,!0),s=-1;else{var u=ma(t,n,r.unit);a=r.extend?Gi(a,u.anchor,u.head,r.extend):u}r.addNew?-1==s?(s=c.length,Qi(o,ki(t,c.concat([a]),s),{scroll:!1,origin:"*mouse"})):c.length>1&&c[s].empty()&&"char"==r.unit&&!r.extend?(Qi(o,ki(t,c.slice(0,s).concat(c.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),l=o.sel):Xi(o,s,a,B):(s=0,Qi(o,new Ci([a],0),B),l=o.sel);var h=n;function d(e){if(0!=ne(h,e))if(h=e,"rectangle"==r.unit){for(var i=[],c=t.options.tabSize,u=_(Gt(o,n.line).text,n.ch,c),d=_(Gt(o,e.line).text,e.ch,c),f=Math.min(u,d),p=Math.max(u,d),g=Math.min(n.line,e.line),v=Math.min(t.lastLine(),Math.max(n.line,e.line));g<=v;g++){var m=Gt(o,g).text,y=q(m,f,c);f==p?i.push(new Oi(ee(g,y),ee(g,y))):m.length>y&&i.push(new Oi(ee(g,y),ee(g,q(m,p,c))))}i.length||i.push(new Oi(n,n)),Qi(o,ki(t,l.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),t.scrollIntoView(e)}else{var b,w=a,x=ma(t,e,r.unit),C=w.anchor;ne(x.anchor,C)>0?(b=x.head,C=ae(w.from(),x.anchor)):(b=x.anchor,C=oe(w.to(),x.head));var O=l.ranges.slice(0);O[s]=function(t,e){var n=e.anchor,r=e.head,i=Gt(t.doc,n.line);if(0==ne(n,r)&&n.sticky==r.sticky)return e;var o=ut(i);if(!o)return e;var a=lt(o,n.ch,n.sticky),s=o[a];if(s.from!=n.ch&&s.to!=n.ch)return e;var l,c=a+(s.from==n.ch==(1!=s.level)?0:1);if(0==c||c==o.length)return e;if(r.line!=n.line)l=(r.line-n.line)*("ltr"==t.doc.direction?1:-1)>0;else{var u=lt(o,r.ch,r.sticky),h=u-a||(r.ch-n.ch)*(1==s.level?-1:1);l=u==c-1||u==c?h<0:h>0}var d=o[c+(l?-1:0)],f=l==(1==d.level),p=f?d.from:d.to,g=f?"after":"before";return n.ch==p&&n.sticky==g?e:new Oi(new ee(n.line,p,g),r)}(t,new Oi(le(o,C),b)),Qi(o,ki(t,O,s),B)}}var f=i.wrapper.getBoundingClientRect(),p=0;function g(e){t.state.selectingText=!1,p=1/0,e&&(wt(e),i.input.focus()),pt(i.wrapper.ownerDocument,"mousemove",v),pt(i.wrapper.ownerDocument,"mouseup",m),o.history.lastSelOrigin=null}var v=ti(t,(function(e){0!==e.buttons&&St(e)?function e(n){var a=++p,s=ur(t,n,!0,"rectangle"==r.unit);if(s)if(0!=ne(s,h)){t.curOp.focus=A(),d(s);var l=Er(i,o);(s.line>=l.to||s.line<l.from)&&setTimeout(ti(t,(function(){p==a&&e(n)})),150)}else{var c=n.clientY<f.top?-20:n.clientY>f.bottom?20:0;c&&setTimeout(ti(t,(function(){p==a&&(i.scroller.scrollTop+=c,e(n))})),50)}}(e):g(e)})),m=ti(t,g);t.state.selectingText=m,dt(i.wrapper.ownerDocument,"mousemove",v),dt(i.wrapper.ownerDocument,"mouseup",m)}(t,r,e,o)}(e,r,o,t):kt(t)==n.scroller&&wt(t):2==i?(r&&Ki(e.doc,r),setTimeout((function(){return n.input.focus()}),20)):3==i&&(O?e.display.input.onContextMenu(t):kr(e)))}}function ma(t,e,n){if("char"==n)return new Oi(e,e);if("word"==n)return t.findWordAt(e);if("line"==n)return new Oi(ee(e.line,0),le(t.doc,ee(e.line+1,0)));var r=n(t,e);return new Oi(r.from,r.to)}function ya(t,e,n,r){var i,o;if(e.touches)i=e.touches[0].clientX,o=e.touches[0].clientY;else try{i=e.clientX,o=e.clientY}catch(e){return!1}if(i>=Math.floor(t.display.gutters.getBoundingClientRect().right))return!1;r&&wt(e);var a=t.display,s=a.lineDiv.getBoundingClientRect();if(o>s.bottom||!yt(t,n))return Ct(e);o-=s.top-a.viewOffset;for(var l=0;l<t.display.gutterSpecs.length;++l){var c=a.gutters.childNodes[l];if(c&&c.getBoundingClientRect().right>=i)return gt(t,n,t,Zt(t.doc,o),t.display.gutterSpecs[l].className,e),Ct(e)}}function ba(t,e){return ya(t,e,"gutterClick",!0)}function wa(t,e){On(t.display,e)||function(t,e){return!!yt(t,"gutterContextMenu")&&ya(t,e,"gutterContextMenu",!1)}(t,e)||vt(t,e,"contextmenu")||O||t.display.input.onContextMenu(e)}function xa(t){t.display.wrapper.className=t.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+t.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Hn(t)}ga.prototype.compare=function(t,e,n){return this.time+400>t&&0==ne(e,this.pos)&&n==this.button};var Ca={toString:function(){return"CodeMirror.Init"}},Oa={},ka={};function Sa(t,e,n){if(!e!=!(n&&n!=Ca)){var r=t.display.dragFunctions,i=e?dt:pt;i(t.display.scroller,"dragstart",r.start),i(t.display.scroller,"dragenter",r.enter),i(t.display.scroller,"dragover",r.over),i(t.display.scroller,"dragleave",r.leave),i(t.display.scroller,"drop",r.drop)}}function Ta(t){t.options.lineWrapping?(L(t.display.wrapper,"CodeMirror-wrap"),t.display.sizer.style.minWidth="",t.display.sizerWidth=null):(T(t.display.wrapper,"CodeMirror-wrap"),qe(t)),cr(t),dr(t),Hn(t),setTimeout((function(){return $r(t)}),100)}function Pa(t,e){var n=this;if(!(this instanceof Pa))return new Pa(t,e);this.options=e=e?R(e):{},R(Oa,e,!1);var r=e.value;"string"==typeof r?r=new Do(r,e.mode,null,e.lineSeparator,e.direction):e.mode&&(r.modeOption=e.mode),this.doc=r;var i=new Pa.inputStyles[e.inputStyle](this),o=this.display=new vi(t,r,i,e);for(var c in o.wrapper.CodeMirror=this,xa(this),e.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Ur(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new V,keySeq:null,specialChars:null},e.autofocus&&!m&&o.input.focus(),a&&s<11&&setTimeout((function(){return n.display.input.reset(!0)}),20),function(t){var e=t.display;dt(e.scroller,"mousedown",ti(t,va)),dt(e.scroller,"dblclick",a&&s<11?ti(t,(function(e){if(!vt(t,e)){var n=ur(t,e);if(n&&!ba(t,e)&&!On(t.display,e)){wt(e);var r=t.findWordAt(n);Ki(t.doc,r.anchor,r.head)}}})):function(e){return vt(t,e)||wt(e)}),dt(e.scroller,"contextmenu",(function(e){return wa(t,e)}));var n,r={end:0};function i(){e.activeTouch&&(n=setTimeout((function(){return e.activeTouch=null}),1e3),(r=e.activeTouch).end=+new Date)}function o(t,e){if(null==e.left)return!0;var n=e.left-t.left,r=e.top-t.top;return n*n+r*r>400}dt(e.scroller,"touchstart",(function(i){if(!vt(t,i)&&!function(t){if(1!=t.touches.length)return!1;var e=t.touches[0];return e.radiusX<=1&&e.radiusY<=1}(i)&&!ba(t,i)){e.input.ensurePolled(),clearTimeout(n);var o=+new Date;e.activeTouch={start:o,moved:!1,prev:o-r.end<=300?r:null},1==i.touches.length&&(e.activeTouch.left=i.touches[0].pageX,e.activeTouch.top=i.touches[0].pageY)}})),dt(e.scroller,"touchmove",(function(){e.activeTouch&&(e.activeTouch.moved=!0)})),dt(e.scroller,"touchend",(function(n){var r=e.activeTouch;if(r&&!On(e,n)&&null!=r.left&&!r.moved&&new Date-r.start<300){var a,s=t.coordsChar(e.activeTouch,"page");a=!r.prev||o(r,r.prev)?new Oi(s,s):!r.prev.prev||o(r,r.prev.prev)?t.findWordAt(s):new Oi(ee(s.line,0),le(t.doc,ee(s.line+1,0))),t.setSelection(a.anchor,a.head),t.focus(),wt(n)}i()})),dt(e.scroller,"touchcancel",i),dt(e.scroller,"scroll",(function(){e.scroller.clientHeight&&(Fr(t,e.scroller.scrollTop),_r(t,e.scroller.scrollLeft,!0),gt(t,"scroll",t))})),dt(e.scroller,"mousewheel",(function(e){return xi(t,e)})),dt(e.scroller,"DOMMouseScroll",(function(e){return xi(t,e)})),dt(e.wrapper,"scroll",(function(){return e.wrapper.scrollTop=e.wrapper.scrollLeft=0})),e.dragFunctions={enter:function(e){vt(t,e)||Ot(e)},over:function(e){vt(t,e)||(function(t,e){var n=ur(t,e);if(n){var r=document.createDocumentFragment();br(t,n,r),t.display.dragCursor||(t.display.dragCursor=E("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),t.display.lineSpace.insertBefore(t.display.dragCursor,t.display.cursorDiv)),j(t.display.dragCursor,r)}}(t,e),Ot(e))},start:function(e){return function(t,e){if(a&&(!t.state.draggingText||+new Date-Ao<100))Ot(e);else if(!vt(t,e)&&!On(t.display,e)&&(e.dataTransfer.setData("Text",t.getSelection()),e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setDragImage&&!d)){var n=E("img",null,null,"position: fixed; left: 0; top: 0;");n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",h&&(n.width=n.height=1,t.display.wrapper.appendChild(n),n._top=n.offsetTop),e.dataTransfer.setDragImage(n,0,0),h&&n.parentNode.removeChild(n)}}(t,e)},drop:ti(t,Lo),leave:function(e){vt(t,e)||No(t)}};var l=e.input.getField();dt(l,"keyup",(function(e){return ha.call(t,e)})),dt(l,"keydown",ti(t,ua)),dt(l,"keypress",ti(t,da)),dt(l,"focus",(function(e){return Sr(t,e)})),dt(l,"blur",(function(e){return Tr(t,e)}))}(this),Ro(),Gr(this),this.curOp.forceUpdate=!0,Ii(this,r),e.autofocus&&!m||this.hasFocus()?setTimeout(F(Sr,this),20):Tr(this),ka)ka.hasOwnProperty(c)&&ka[c](n,e[c],Ca);di(this),e.finishInit&&e.finishInit(this);for(var u=0;u<ja.length;++u)ja[u](n);Kr(this),l&&e.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Pa.defaults=Oa,Pa.optionHandlers=ka;var ja=[];function Ea(t,e,n,r){var i,o=t.doc;null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=pe(t,e).state:n="prev");var a=t.options.tabSize,s=Gt(o,e),l=_(s.text,null,a);s.stateAfter&&(s.stateAfter=null);var c,u=s.text.match(/^\s*/)[0];if(r||/\S/.test(s.text)){if("smart"==n&&((c=o.mode.indent(i,s.text.slice(u.length),s.text))==$||c>150)){if(!r)return;n="prev"}}else c=0,n="not";"prev"==n?c=e>o.first?_(Gt(o,e-1).text,null,a):0:"add"==n?c=l+t.options.indentUnit:"subtract"==n?c=l-t.options.indentUnit:"number"==typeof n&&(c=l+n),c=Math.max(0,c);var h="",d=0;if(t.options.indentWithTabs)for(var f=Math.floor(c/a);f;--f)d+=a,h+="\t";if(d<c&&(h+=K(c-d)),h!=u)return go(o,h,ee(e,0),ee(e,u.length),"+input"),s.stateAfter=null,!0;for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p];if(g.head.line==e&&g.head.ch<u.length){var v=ee(e,u.length);Xi(o,p,new Oi(v,v));break}}}Pa.defineInitHook=function(t){return ja.push(t)};var Ma=null;function Da(t){Ma=t}function Aa(t,e,n,r,i){var o=t.doc;t.display.shift=!1,r||(r=o.sel);var a=+new Date-200,s="paste"==i||t.state.pasteIncoming>a,l=At(e),c=null;if(s&&r.ranges.length>1)if(Ma&&Ma.text.join("\n")==e){if(r.ranges.length%Ma.text.length==0){c=[];for(var u=0;u<Ma.text.length;u++)c.push(o.splitLines(Ma.text[u]))}}else l.length==r.ranges.length&&t.options.pasteLinesPerSelection&&(c=X(l,(function(t){return[t]})));for(var h=t.curOp.updateInput,d=r.ranges.length-1;d>=0;d--){var f=r.ranges[d],p=f.from(),g=f.to();f.empty()&&(n&&n>0?p=ee(p.line,p.ch-n):t.state.overwrite&&!s?g=ee(g.line,Math.min(Gt(o,g.line).text.length,g.ch+Y(l).length)):s&&Ma&&Ma.lineWise&&Ma.text.join("\n")==e&&(p=g=ee(p.line,0)));var v={from:p,to:g,text:c?c[d%c.length]:l,origin:i||(s?"paste":t.state.cutIncoming>a?"cut":"+input")};co(t.doc,v),cn(t,"inputRead",t,v)}e&&!s&&Na(t,e),Ar(t),t.curOp.updateInput<2&&(t.curOp.updateInput=h),t.curOp.typing=!0,t.state.pasteIncoming=t.state.cutIncoming=-1}function La(t,e){var n=t.clipboardData&&t.clipboardData.getData("Text");if(n)return t.preventDefault(),e.isReadOnly()||e.options.disableInput||Qr(e,(function(){return Aa(e,n,0,null,"paste")})),!0}function Na(t,e){if(t.options.electricChars&&t.options.smartIndent)for(var n=t.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r];if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=t.getModeAt(i.head),a=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(e.indexOf(o.electricChars.charAt(s))>-1){a=Ea(t,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(Gt(t.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Ea(t,i.head.line,"smart"));a&&cn(t,"electricInput",t,i.head.line)}}}function Ia(t){for(var e=[],n=[],r=0;r<t.doc.sel.ranges.length;r++){var i=t.doc.sel.ranges[r].head.line,o={anchor:ee(i,0),head:ee(i+1,0)};n.push(o),e.push(t.getRange(o.anchor,o.head))}return{text:e,ranges:n}}function Fa(t,e,n,r){t.setAttribute("autocorrect",n?"":"off"),t.setAttribute("autocapitalize",r?"":"off"),t.setAttribute("spellcheck",!!e)}function Ra(){var t=E("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),e=E("div",[t],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return l?t.style.width="1000px":t.setAttribute("wrap","off"),g&&(t.style.border="1px solid black"),Fa(t),e}function _a(t,e,n,r,i){var o=e,a=n,s=Gt(t,e.line);function l(r){var o,a;if(null==(o=i?function(t,e,n,r){var i=ut(e,t.doc.direction);if(!i)return Qo(e,n,r);n.ch>=e.text.length?(n.ch=e.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after");var o=lt(i,n.ch,n.sticky),a=i[o];if("ltr"==t.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return Qo(e,n,r);var s,l=function(t,n){return Zo(e,t instanceof ee?t.ch:t,n)},c=function(n){return t.options.lineWrapping?(s=s||Ln(t,e),Qn(t,e,s,n)):{begin:0,end:e.text.length}},u=c("before"==n.sticky?l(n,-1):n.ch);if("rtl"==t.doc.direction||1==a.level){var h=1==a.level==r<0,d=l(n,h?1:-1);if(null!=d&&(h?d<=a.to&&d<=u.end:d>=a.from&&d>=u.begin)){var f=h?"before":"after";return new ee(n.line,d,f)}}var p=function(t,e,r){for(var o=function(t,e){return e?new ee(n.line,l(t,1),"before"):new ee(n.line,t,"after")};t>=0&&t<i.length;t+=e){var a=i[t],s=e>0==(1!=a.level),c=s?r.begin:l(r.end,-1);if(a.from<=c&&c<a.to)return o(c,s);if(c=s?a.from:l(a.to,-1),r.begin<=c&&c<r.end)return o(c,s)}},g=p(o+r,r,u);if(g)return g;var v=r>0?u.end:l(u.begin,-1);return null==v||r>0&&v==e.text.length||!(g=p(r>0?0:i.length-1,r,c(v)))?null:g}(t.cm,s,e,n):Qo(s,e,n))){if(r||(a=e.line+n)<t.first||a>=t.first+t.size||(e=new ee(a,e.ch,e.sticky),!(s=Gt(t,a))))return!1;e=ta(i,t.cm,s,e.line,n)}else e=o;return!0}if("char"==r)l();else if("column"==r)l(!0);else if("word"==r||"group"==r)for(var c=null,u="group"==r,h=t.cm&&t.cm.getHelper(e,"wordChars"),d=!0;!(n<0)||l(!d);d=!1){var f=s.text.charAt(e.ch)||"\n",p=et(f,h)?"w":u&&"\n"==f?"n":!u||/\s/.test(f)?null:"p";if(!u||d||p||(p="s"),c&&c!=p){n<0&&(n=1,l(),e.sticky="after");break}if(p&&(c=p),n>0&&!l(!d))break}var g=oo(t,e,o,a,!0);return re(o,g)&&(g.hitSide=!0),g}function Va(t,e,n,r){var i,o,a=t.doc,s=e.left;if("page"==r){var l=Math.min(t.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),c=Math.max(l-.5*ir(t.display),3);i=(n>0?e.bottom:e.top)+n*c}else"line"==r&&(i=n>0?e.bottom+3:e.top-3);for(;(o=Jn(t,s,i)).outside;){if(n<0?i<=0:i>=a.height){o.hitSide=!0;break}i+=5*n}return o}var za=function(t){this.cm=t,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new V,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};function Ha(t,e){var n=An(t,e.line);if(!n||n.hidden)return null;var r=Gt(t.doc,e.line),i=Mn(n,r,e.line),o=ut(r,t.doc.direction),a="left";o&&(a=lt(o,e.ch)%2?"right":"left");var s=Rn(i.map,e.ch,a);return s.offset="right"==s.collapse?s.end:s.start,s}function $a(t,e){return e&&(t.bad=!0),t}function Wa(t,e,n){var r;if(e==t.display.lineDiv){if(!(r=t.display.lineDiv.childNodes[n]))return $a(t.clipPos(ee(t.display.viewTo-1)),!0);e=null,n=0}else for(r=e;;r=r.parentNode){if(!r||r==t.display.lineDiv)return null;if(r.parentNode&&r.parentNode==t.display.lineDiv)break}for(var i=0;i<t.display.view.length;i++){var o=t.display.view[i];if(o.node==r)return Ba(o,e,n)}}function Ba(t,e,n){var r=t.text.firstChild,i=!1;if(!e||!D(r,e))return $a(ee(Jt(t.line),0),!0);if(e==r&&(i=!0,e=r.childNodes[n],n=0,!e)){var o=t.rest?Y(t.rest):t.line;return $a(ee(Jt(o),o.text.length),i)}var a=3==e.nodeType?e:null,s=e;for(a||1!=e.childNodes.length||3!=e.firstChild.nodeType||(a=e.firstChild,n&&(n=a.nodeValue.length));s.parentNode!=r;)s=s.parentNode;var l=t.measure,c=l.maps;function u(e,n,r){for(var i=-1;i<(c?c.length:0);i++)for(var o=i<0?l.map:c[i],a=0;a<o.length;a+=3){var s=o[a+2];if(s==e||s==n){var u=Jt(i<0?t.line:t.rest[i]),h=o[a]+r;return(r<0||s!=e)&&(h=o[a+(r?1:0)]),ee(u,h)}}}var h=u(a,s,n);if(h)return $a(h,i);for(var d=s.nextSibling,f=a?a.nodeValue.length-n:0;d;d=d.nextSibling){if(h=u(d,d.firstChild,0))return $a(ee(h.line,h.ch-f),i);f+=d.textContent.length}for(var p=s.previousSibling,g=n;p;p=p.previousSibling){if(h=u(p,p.firstChild,-1))return $a(ee(h.line,h.ch+g),i);g+=p.textContent.length}}za.prototype.init=function(t){var e=this,n=this,r=n.cm,i=n.div=t.lineDiv;function o(t){if(!vt(r,t)){if(r.somethingSelected())Da({lineWise:!1,text:r.getSelections()}),"cut"==t.type&&r.replaceSelection("",null,"cut");else{if(!r.options.lineWiseCopyCut)return;var e=Ia(r);Da({lineWise:!0,text:e.text}),"cut"==t.type&&r.operation((function(){r.setSelections(e.ranges,0,W),r.replaceSelection("",null,"cut")}))}if(t.clipboardData){t.clipboardData.clearData();var o=Ma.text.join("\n");if(t.clipboardData.setData("Text",o),t.clipboardData.getData("Text")==o)return void t.preventDefault()}var a=Ra(),s=a.firstChild;r.display.lineSpace.insertBefore(a,r.display.lineSpace.firstChild),s.value=Ma.text.join("\n");var l=document.activeElement;I(s),setTimeout((function(){r.display.lineSpace.removeChild(a),l.focus(),l==i&&n.showPrimarySelection()}),50)}}Fa(i,r.options.spellcheck,r.options.autocorrect,r.options.autocapitalize),dt(i,"paste",(function(t){vt(r,t)||La(t,r)||s<=11&&setTimeout(ti(r,(function(){return e.updateFromDOM()})),20)})),dt(i,"compositionstart",(function(t){e.composing={data:t.data,done:!1}})),dt(i,"compositionupdate",(function(t){e.composing||(e.composing={data:t.data,done:!1})})),dt(i,"compositionend",(function(t){e.composing&&(t.data!=e.composing.data&&e.readFromDOMSoon(),e.composing.done=!0)})),dt(i,"touchstart",(function(){return n.forceCompositionEnd()})),dt(i,"input",(function(){e.composing||e.readFromDOMSoon()})),dt(i,"copy",o),dt(i,"cut",o)},za.prototype.prepareSelection=function(){var t=yr(this.cm,!1);return t.focus=this.cm.state.focused,t},za.prototype.showSelection=function(t,e){t&&this.cm.display.view.length&&((t.focus||e)&&this.showPrimarySelection(),this.showMultipleSelections(t))},za.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},za.prototype.showPrimarySelection=function(){var t=this.getSelection(),e=this.cm,r=e.doc.sel.primary(),i=r.from(),o=r.to();if(e.display.viewTo==e.display.viewFrom||i.line>=e.display.viewTo||o.line<e.display.viewFrom)t.removeAllRanges();else{var a=Wa(e,t.anchorNode,t.anchorOffset),s=Wa(e,t.focusNode,t.focusOffset);if(!a||a.bad||!s||s.bad||0!=ne(ae(a,s),i)||0!=ne(oe(a,s),o)){var l=e.display.view,c=i.line>=e.display.viewFrom&&Ha(e,i)||{node:l[0].measure.map[2],offset:0},u=o.line<e.display.viewTo&&Ha(e,o);if(!u){var h=l[l.length-1].measure,d=h.maps?h.maps[h.maps.length-1]:h.map;u={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(c&&u){var f,p=t.rangeCount&&t.getRangeAt(0);try{f=S(c.node,c.offset,u.offset,u.node)}catch(t){}f&&(!n&&e.state.focused?(t.collapse(c.node,c.offset),f.collapsed||(t.removeAllRanges(),t.addRange(f))):(t.removeAllRanges(),t.addRange(f)),p&&null==t.anchorNode?t.addRange(p):n&&this.startGracePeriod()),this.rememberSelection()}else t.removeAllRanges()}}},za.prototype.startGracePeriod=function(){var t=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){t.gracePeriod=!1,t.selectionChanged()&&t.cm.operation((function(){return t.cm.curOp.selectionChanged=!0}))}),20)},za.prototype.showMultipleSelections=function(t){j(this.cm.display.cursorDiv,t.cursors),j(this.cm.display.selectionDiv,t.selection)},za.prototype.rememberSelection=function(){var t=this.getSelection();this.lastAnchorNode=t.anchorNode,this.lastAnchorOffset=t.anchorOffset,this.lastFocusNode=t.focusNode,this.lastFocusOffset=t.focusOffset},za.prototype.selectionInEditor=function(){var t=this.getSelection();if(!t.rangeCount)return!1;var e=t.getRangeAt(0).commonAncestorContainer;return D(this.div,e)},za.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},za.prototype.blur=function(){this.div.blur()},za.prototype.getField=function(){return this.div},za.prototype.supportsTouch=function(){return!0},za.prototype.receivedFocus=function(){var t=this;this.selectionInEditor()?this.pollSelection():Qr(this.cm,(function(){return t.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}))},za.prototype.selectionChanged=function(){var t=this.getSelection();return t.anchorNode!=this.lastAnchorNode||t.anchorOffset!=this.lastAnchorOffset||t.focusNode!=this.lastFocusNode||t.focusOffset!=this.lastFocusOffset},za.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var t=this.getSelection(),e=this.cm;if(v&&u&&this.cm.display.gutterSpecs.length&&function(t){for(var e=t;e;e=e.parentNode)if(/CodeMirror-gutter-wrapper/.test(e.className))return!0;return!1}(t.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var n=Wa(e,t.anchorNode,t.anchorOffset),r=Wa(e,t.focusNode,t.focusOffset);n&&r&&Qr(e,(function(){Qi(e.doc,Si(n,r),W),(n.bad||r.bad)&&(e.curOp.selectionChanged=!0)}))}}},za.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var t,e,n,r=this.cm,i=r.display,o=r.doc.sel.primary(),a=o.from(),s=o.to();if(0==a.ch&&a.line>r.firstLine()&&(a=ee(a.line-1,Gt(r.doc,a.line-1).length)),s.ch==Gt(r.doc,s.line).text.length&&s.line<r.lastLine()&&(s=ee(s.line+1,0)),a.line<i.viewFrom||s.line>i.viewTo-1)return!1;a.line==i.viewFrom||0==(t=hr(r,a.line))?(e=Jt(i.view[0].line),n=i.view[0].node):(e=Jt(i.view[t].line),n=i.view[t-1].node.nextSibling);var l,c,u=hr(r,s.line);if(u==i.view.length-1?(l=i.viewTo-1,c=i.lineDiv.lastChild):(l=Jt(i.view[u+1].line)-1,c=i.view[u+1].node.previousSibling),!n)return!1;for(var h=r.doc.splitLines(function(t,e,n,r,i){var o="",a=!1,s=t.doc.lineSeparator(),l=!1;function c(){a&&(o+=s,l&&(o+=s),a=l=!1)}function u(t){t&&(c(),o+=t)}function h(e){if(1==e.nodeType){var n=e.getAttribute("cm-text");if(n)return void u(n);var o,d=e.getAttribute("cm-marker");if(d){var f=t.findMarks(ee(r,0),ee(i+1,0),(v=+d,function(t){return t.id==v}));return void(f.length&&(o=f[0].find(0))&&u(Kt(t.doc,o.from,o.to).join(s)))}if("false"==e.getAttribute("contenteditable"))return;var p=/^(pre|div|p|li|table|br)$/i.test(e.nodeName);if(!/^br$/i.test(e.nodeName)&&0==e.textContent.length)return;p&&c();for(var g=0;g<e.childNodes.length;g++)h(e.childNodes[g]);/^(pre|p)$/i.test(e.nodeName)&&(l=!0),p&&(a=!0)}else 3==e.nodeType&&u(e.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var v}for(;h(e),e!=n;)e=e.nextSibling,l=!1;return o}(r,n,c,e,l)),d=Kt(r.doc,ee(e,0),ee(l,Gt(r.doc,l).text.length));h.length>1&&d.length>1;)if(Y(h)==Y(d))h.pop(),d.pop(),l--;else{if(h[0]!=d[0])break;h.shift(),d.shift(),e++}for(var f=0,p=0,g=h[0],v=d[0],m=Math.min(g.length,v.length);f<m&&g.charCodeAt(f)==v.charCodeAt(f);)++f;for(var y=Y(h),b=Y(d),w=Math.min(y.length-(1==h.length?f:0),b.length-(1==d.length?f:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==h.length&&1==d.length&&e==a.line)for(;f&&f>a.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)f--,p++;h[h.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),h[0]=h[0].slice(f).replace(/\u200b+$/,"");var x=ee(e,f),C=ee(l,d.length?Y(d).length-p:0);return h.length>1||h[0]||ne(x,C)?(go(r.doc,h,x,C,"+input"),!0):void 0},za.prototype.ensurePolled=function(){this.forceCompositionEnd()},za.prototype.reset=function(){this.forceCompositionEnd()},za.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},za.prototype.readFromDOMSoon=function(){var t=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(t.readDOMTimeout=null,t.composing){if(!t.composing.done)return;t.composing=null}t.updateFromDOM()}),80))},za.prototype.updateFromDOM=function(){var t=this;!this.cm.isReadOnly()&&this.pollContent()||Qr(this.cm,(function(){return dr(t.cm)}))},za.prototype.setUneditable=function(t){t.contentEditable="false"},za.prototype.onKeyPress=function(t){0==t.charCode||this.composing||(t.preventDefault(),this.cm.isReadOnly()||ti(this.cm,Aa)(this.cm,String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),0))},za.prototype.readOnlyChanged=function(t){this.div.contentEditable=String("nocursor"!=t)},za.prototype.onContextMenu=function(){},za.prototype.resetPosition=function(){},za.prototype.needsContentAttribute=!0;var Ua=function(t){this.cm=t,this.prevInput="",this.pollingFast=!1,this.polling=new V,this.hasSelection=!1,this.composing=null};Ua.prototype.init=function(t){var e=this,n=this,r=this.cm;this.createField(t);var i=this.textarea;function o(t){if(!vt(r,t)){if(r.somethingSelected())Da({lineWise:!1,text:r.getSelections()});else{if(!r.options.lineWiseCopyCut)return;var e=Ia(r);Da({lineWise:!0,text:e.text}),"cut"==t.type?r.setSelections(e.ranges,null,W):(n.prevInput="",i.value=e.text.join("\n"),I(i))}"cut"==t.type&&(r.state.cutIncoming=+new Date)}}t.wrapper.insertBefore(this.wrapper,t.wrapper.firstChild),g&&(i.style.width="0px"),dt(i,"input",(function(){a&&s>=9&&e.hasSelection&&(e.hasSelection=null),n.poll()})),dt(i,"paste",(function(t){vt(r,t)||La(t,r)||(r.state.pasteIncoming=+new Date,n.fastPoll())})),dt(i,"cut",o),dt(i,"copy",o),dt(t.scroller,"paste",(function(e){if(!On(t,e)&&!vt(r,e)){if(!i.dispatchEvent)return r.state.pasteIncoming=+new Date,void n.focus();var o=new Event("paste");o.clipboardData=e.clipboardData,i.dispatchEvent(o)}})),dt(t.lineSpace,"selectstart",(function(e){On(t,e)||wt(e)})),dt(i,"compositionstart",(function(){var t=r.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:t,range:r.markText(t,r.getCursor("to"),{className:"CodeMirror-composing"})}})),dt(i,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},Ua.prototype.createField=function(t){this.wrapper=Ra(),this.textarea=this.wrapper.firstChild},Ua.prototype.prepareSelection=function(){var t=this.cm,e=t.display,n=t.doc,r=yr(t);if(t.options.moveInputWithCursor){var i=Kn(t,n.sel.primary().head,"div"),o=e.wrapper.getBoundingClientRect(),a=e.lineDiv.getBoundingClientRect();r.teTop=Math.max(0,Math.min(e.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(e.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},Ua.prototype.showSelection=function(t){var e=this.cm.display;j(e.cursorDiv,t.cursors),j(e.selectionDiv,t.selection),null!=t.teTop&&(this.wrapper.style.top=t.teTop+"px",this.wrapper.style.left=t.teLeft+"px")},Ua.prototype.reset=function(t){if(!this.contextMenuPending&&!this.composing){var e=this.cm;if(e.somethingSelected()){this.prevInput="";var n=e.getSelection();this.textarea.value=n,e.state.focused&&I(this.textarea),a&&s>=9&&(this.hasSelection=n)}else t||(this.prevInput=this.textarea.value="",a&&s>=9&&(this.hasSelection=null))}},Ua.prototype.getField=function(){return this.textarea},Ua.prototype.supportsTouch=function(){return!1},Ua.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!m||A()!=this.textarea))try{this.textarea.focus()}catch(t){}},Ua.prototype.blur=function(){this.textarea.blur()},Ua.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Ua.prototype.receivedFocus=function(){this.slowPoll()},Ua.prototype.slowPoll=function(){var t=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){t.poll(),t.cm.state.focused&&t.slowPoll()}))},Ua.prototype.fastPoll=function(){var t=!1,e=this;e.pollingFast=!0,e.polling.set(20,(function n(){e.poll()||t?(e.pollingFast=!1,e.slowPoll()):(t=!0,e.polling.set(60,n))}))},Ua.prototype.poll=function(){var t=this,e=this.cm,n=this.textarea,r=this.prevInput;if(this.contextMenuPending||!e.state.focused||Lt(n)&&!r&&!this.composing||e.isReadOnly()||e.options.disableInput||e.state.keySeq)return!1;var i=n.value;if(i==r&&!e.somethingSelected())return!1;if(a&&s>=9&&this.hasSelection===i||y&&/[\uf700-\uf7ff]/.test(i))return e.display.input.reset(),!1;if(e.doc.sel==e.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,c=Math.min(r.length,i.length);l<c&&r.charCodeAt(l)==i.charCodeAt(l);)++l;return Qr(e,(function(){Aa(e,i.slice(l),r.length-l,null,t.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=t.prevInput="":t.prevInput=i,t.composing&&(t.composing.range.clear(),t.composing.range=e.markText(t.composing.start,e.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},Ua.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Ua.prototype.onKeyPress=function(){a&&s>=9&&(this.hasSelection=null),this.fastPoll()},Ua.prototype.onContextMenu=function(t){var e=this,n=e.cm,r=n.display,i=e.textarea;e.contextMenuPending&&e.contextMenuPending();var o=ur(n,t),c=r.scroller.scrollTop;if(o&&!h){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(o)&&ti(n,Qi)(n.doc,Si(o),W);var u,d=i.style.cssText,f=e.wrapper.style.cssText,p=e.wrapper.offsetParent.getBoundingClientRect();if(e.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(t.clientY-p.top-5)+"px; left: "+(t.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",l&&(u=window.scrollY),r.input.focus(),l&&window.scrollTo(null,u),r.input.reset(),n.somethingSelected()||(i.value=e.prevInput=" "),e.contextMenuPending=m,r.selForContextMenu=n.doc.sel,clearTimeout(r.detectingSelectAll),a&&s>=9&&v(),O){Ot(t);var g=function(){pt(window,"mouseup",g),setTimeout(m,20)};dt(window,"mouseup",g)}else setTimeout(m,50)}function v(){if(null!=i.selectionStart){var t=n.somethingSelected(),o="​"+(t?i.value:"");i.value="⇚",i.value=o,e.prevInput=t?"":"​",i.selectionStart=1,i.selectionEnd=o.length,r.selForContextMenu=n.doc.sel}}function m(){if(e.contextMenuPending==m&&(e.contextMenuPending=!1,e.wrapper.style.cssText=f,i.style.cssText=d,a&&s<9&&r.scrollbars.setScrollTop(r.scroller.scrollTop=c),null!=i.selectionStart)){(!a||a&&s<9)&&v();var t=0,o=function(){r.selForContextMenu==n.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==e.prevInput?ti(n,so)(n):t++<10?r.detectingSelectAll=setTimeout(o,500):(r.selForContextMenu=null,r.input.reset())};r.detectingSelectAll=setTimeout(o,200)}}},Ua.prototype.readOnlyChanged=function(t){t||this.reset(),this.textarea.disabled="nocursor"==t},Ua.prototype.setUneditable=function(){},Ua.prototype.needsContentAttribute=!1,function(t){var e=t.optionHandlers;function n(n,r,i,o){t.defaults[n]=r,i&&(e[n]=o?function(t,e,n){n!=Ca&&i(t,e,n)}:i)}t.defineOption=n,t.Init=Ca,n("value","",(function(t,e){return t.setValue(e)}),!0),n("mode",null,(function(t,e){t.doc.modeOption=e,Mi(t)}),!0),n("indentUnit",2,Mi,!0),n("indentWithTabs",!1),n("smartIndent",!0),n("tabSize",4,(function(t){Di(t),Hn(t),dr(t)}),!0),n("lineSeparator",null,(function(t,e){if(t.doc.lineSep=e,e){var n=[],r=t.doc.first;t.doc.iter((function(t){for(var i=0;;){var o=t.text.indexOf(e,i);if(-1==o)break;i=o+e.length,n.push(ee(r,o))}r++}));for(var i=n.length-1;i>=0;i--)go(t.doc,e,n[i],ee(n[i].line,n[i].ch+e.length))}})),n("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,(function(t,e,n){t.state.specialChars=new RegExp(e.source+(e.test("\t")?"":"|\t"),"g"),n!=Ca&&t.refresh()})),n("specialCharPlaceholder",Qe,(function(t){return t.refresh()}),!0),n("electricChars",!0),n("inputStyle",m?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),n("spellcheck",!1,(function(t,e){return t.getInputField().spellcheck=e}),!0),n("autocorrect",!1,(function(t,e){return t.getInputField().autocorrect=e}),!0),n("autocapitalize",!1,(function(t,e){return t.getInputField().autocapitalize=e}),!0),n("rtlMoveVisually",!w),n("wholeLineUpdateBefore",!0),n("theme","default",(function(t){xa(t),gi(t)}),!0),n("keyMap","default",(function(t,e,n){var r=Xo(e),i=n!=Ca&&Xo(n);i&&i.detach&&i.detach(t,r),r.attach&&r.attach(t,i||null)})),n("extraKeys",null),n("configureMouse",null),n("lineWrapping",!1,Ta,!0),n("gutters",[],(function(t,e){t.display.gutterSpecs=fi(e,t.options.lineNumbers),gi(t)}),!0),n("fixedGutter",!0,(function(t,e){t.display.gutters.style.left=e?sr(t.display)+"px":"0",t.refresh()}),!0),n("coverGutterNextToScrollbar",!1,(function(t){return $r(t)}),!0),n("scrollbarStyle","native",(function(t){Ur(t),$r(t),t.display.scrollbars.setScrollTop(t.doc.scrollTop),t.display.scrollbars.setScrollLeft(t.doc.scrollLeft)}),!0),n("lineNumbers",!1,(function(t,e){t.display.gutterSpecs=fi(t.options.gutters,e),gi(t)}),!0),n("firstLineNumber",1,gi,!0),n("lineNumberFormatter",(function(t){return t}),gi,!0),n("showCursorWhenSelecting",!1,mr,!0),n("resetSelectionOnContextMenu",!0),n("lineWiseCopyCut",!0),n("pasteLinesPerSelection",!0),n("selectionsMayTouch",!1),n("readOnly",!1,(function(t,e){"nocursor"==e&&(Tr(t),t.display.input.blur()),t.display.input.readOnlyChanged(e)})),n("disableInput",!1,(function(t,e){e||t.display.input.reset()}),!0),n("dragDrop",!0,Sa),n("allowDropFileTypes",null),n("cursorBlinkRate",530),n("cursorScrollMargin",0),n("cursorHeight",1,mr,!0),n("singleCursorHeightPerLine",!0,mr,!0),n("workTime",100),n("workDelay",100),n("flattenSpans",!0,Di,!0),n("addModeClass",!1,Di,!0),n("pollInterval",100),n("undoDepth",200,(function(t,e){return t.doc.history.undoDepth=e})),n("historyEventDelay",1250),n("viewportMargin",10,(function(t){return t.refresh()}),!0),n("maxHighlightLength",1e4,Di,!0),n("moveInputWithCursor",!0,(function(t,e){e||t.display.input.resetPosition()})),n("tabindex",null,(function(t,e){return t.display.input.getField().tabIndex=e||""})),n("autofocus",null),n("direction","ltr",(function(t,e){return t.doc.setDirection(e)}),!0),n("phrases",null)}(Pa),function(t){var e=t.optionHandlers,n=t.helpers={};t.prototype={constructor:t,focus:function(){window.focus(),this.display.input.focus()},setOption:function(t,n){var r=this.options,i=r[t];r[t]==n&&"mode"!=t||(r[t]=n,e.hasOwnProperty(t)&&ti(this,e[t])(this,n,i),gt(this,"optionChange",this,t))},getOption:function(t){return this.options[t]},getDoc:function(){return this.doc},addKeyMap:function(t,e){this.state.keyMaps[e?"push":"unshift"](Xo(t))},removeKeyMap:function(t){for(var e=this.state.keyMaps,n=0;n<e.length;++n)if(e[n]==t||e[n].name==t)return e.splice(n,1),!0},addOverlay:ei((function(e,n){var r=e.token?e:t.getMode(this.options,e);if(r.startState)throw new Error("Overlays may not be stateful.");!function(t,e,n){for(var r=0,i=n(e);r<t.length&&n(t[r])<=i;)r++;t.splice(r,0,e)}(this.state.overlays,{mode:r,modeSpec:e,opaque:n&&n.opaque,priority:n&&n.priority||0},(function(t){return t.priority})),this.state.modeGen++,dr(this)})),removeOverlay:ei((function(t){for(var e=this.state.overlays,n=0;n<e.length;++n){var r=e[n].modeSpec;if(r==t||"string"==typeof t&&r.name==t)return e.splice(n,1),this.state.modeGen++,void dr(this)}})),indentLine:ei((function(t,e,n){"string"!=typeof e&&"number"!=typeof e&&(e=null==e?this.options.smartIndent?"smart":"prev":e?"add":"subtract"),Qt(this.doc,t)&&Ea(this,t,e,n)})),indentSelection:ei((function(t){for(var e=this.doc.sel.ranges,n=-1,r=0;r<e.length;r++){var i=e[r];if(i.empty())i.head.line>n&&(Ea(this,i.head.line,t,!0),n=i.head.line,r==this.doc.sel.primIndex&&Ar(this));else{var o=i.from(),a=i.to(),s=Math.max(n,o.line);n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1;for(var l=s;l<n;++l)Ea(this,l,t);var c=this.doc.sel.ranges;0==o.ch&&e.length==c.length&&c[r].from().ch>0&&Xi(this.doc,r,new Oi(o,c[r].to()),W)}}})),getTokenAt:function(t,e){return be(this,t,e)},getLineTokens:function(t,e){return be(this,ee(t),e,!0)},getTokenTypeAt:function(t){t=le(this.doc,t);var e,n=fe(this,Gt(this.doc,t.line)),r=0,i=(n.length-1)/2,o=t.ch;if(0==o)e=n[2];else for(;;){var a=r+i>>1;if((a?n[2*a-1]:0)>=o)i=a;else{if(!(n[2*a+1]<o)){e=n[2*a+2];break}r=a+1}}var s=e?e.indexOf("overlay "):-1;return s<0?e:0==s?null:e.slice(0,s-1)},getModeAt:function(e){var n=this.doc.mode;return n.innerMode?t.innerMode(n,this.getTokenAt(e).state).mode:n},getHelper:function(t,e){return this.getHelpers(t,e)[0]},getHelpers:function(t,e){var r=[];if(!n.hasOwnProperty(e))return r;var i=n[e],o=this.getModeAt(t);if("string"==typeof o[e])i[o[e]]&&r.push(i[o[e]]);else if(o[e])for(var a=0;a<o[e].length;a++){var s=i[o[e][a]];s&&r.push(s)}else o.helperType&&i[o.helperType]?r.push(i[o.helperType]):i[o.name]&&r.push(i[o.name]);for(var l=0;l<i._global.length;l++){var c=i._global[l];c.pred(o,this)&&-1==z(r,c.val)&&r.push(c.val)}return r},getStateAfter:function(t,e){var n=this.doc;return pe(this,(t=se(n,null==t?n.first+n.size-1:t))+1,e).state},cursorCoords:function(t,e){var n=this.doc.sel.primary();return Kn(this,null==t?n.head:"object"==typeof t?le(this.doc,t):t?n.from():n.to(),e||"page")},charCoords:function(t,e){return Gn(this,le(this.doc,t),e||"page")},coordsChar:function(t,e){return Jn(this,(t=qn(this,t,e||"page")).left,t.top)},lineAtHeight:function(t,e){return t=qn(this,{top:t,left:0},e||"page").top,Zt(this.doc,t+this.display.viewOffset)},heightAtLine:function(t,e,n){var r,i=!1;if("number"==typeof t){var o=this.doc.first+this.doc.size-1;t<this.doc.first?t=this.doc.first:t>o&&(t=o,i=!0),r=Gt(this.doc,t)}else r=t;return Un(this,r,{top:0,left:0},e||"page",n||i).top+(i?this.doc.height-Be(r):0)},defaultTextHeight:function(){return ir(this.display)},defaultCharWidth:function(){return or(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(t,e,n,r,i){var o,a,s,l=this.display,c=(t=Kn(this,le(this.doc,t))).bottom,u=t.left;if(e.style.position="absolute",e.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(e),l.sizer.appendChild(e),"over"==r)c=t.top;else if("above"==r||"near"==r){var h=Math.max(l.wrapper.clientHeight,this.doc.height),d=Math.max(l.sizer.clientWidth,l.lineSpace.clientWidth);("above"==r||t.bottom+e.offsetHeight>h)&&t.top>e.offsetHeight?c=t.top-e.offsetHeight:t.bottom+e.offsetHeight<=h&&(c=t.bottom),u+e.offsetWidth>d&&(u=d-e.offsetWidth)}e.style.top=c+"px",e.style.left=e.style.right="","right"==i?(u=l.sizer.clientWidth-e.offsetWidth,e.style.right="0px"):("left"==i?u=0:"middle"==i&&(u=(l.sizer.clientWidth-e.offsetWidth)/2),e.style.left=u+"px"),n&&(o=this,a={left:u,top:c,right:u+e.offsetWidth,bottom:c+e.offsetHeight},null!=(s=Mr(o,a)).scrollTop&&Fr(o,s.scrollTop),null!=s.scrollLeft&&_r(o,s.scrollLeft))},triggerOnKeyDown:ei(ua),triggerOnKeyPress:ei(da),triggerOnKeyUp:ha,triggerOnMouseDown:ei(va),execCommand:function(t){if(ea.hasOwnProperty(t))return ea[t].call(null,this)},triggerElectric:ei((function(t){Na(this,t)})),findPosH:function(t,e,n,r){var i=1;e<0&&(i=-1,e=-e);for(var o=le(this.doc,t),a=0;a<e&&!(o=_a(this.doc,o,i,n,r)).hitSide;++a);return o},moveH:ei((function(t,e){var n=this;this.extendSelectionsBy((function(r){return n.display.shift||n.doc.extend||r.empty()?_a(n.doc,r.head,t,e,n.options.rtlMoveVisually):t<0?r.from():r.to()}),U)})),deleteH:ei((function(t,e){var n=this.doc.sel,r=this.doc;n.somethingSelected()?r.replaceSelection("",null,"+delete"):Jo(this,(function(n){var i=_a(r,n.head,t,e,!1);return t<0?{from:i,to:n.head}:{from:n.head,to:i}}))})),findPosV:function(t,e,n,r){var i=1,o=r;e<0&&(i=-1,e=-e);for(var a=le(this.doc,t),s=0;s<e;++s){var l=Kn(this,a,"div");if(null==o?o=l.left:l.left=o,(a=Va(this,l,i,n)).hitSide)break}return a},moveV:ei((function(t,e){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected();if(r.extendSelectionsBy((function(a){if(o)return t<0?a.from():a.to();var s=Kn(n,a.head,"div");null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left);var l=Va(n,s,t,e);return"page"==e&&a==r.sel.primary()&&Dr(n,Gn(n,l,"div").top-s.top),l}),U),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]})),findWordAt:function(t){var e=Gt(this.doc,t.line).text,n=t.ch,r=t.ch;if(e){var i=this.getHelper(t,"wordChars");"before"!=t.sticky&&r!=e.length||!n?++r:--n;for(var o=e.charAt(n),a=et(o,i)?function(t){return et(t,i)}:/\s/.test(o)?function(t){return/\s/.test(t)}:function(t){return!/\s/.test(t)&&!et(t)};n>0&&a(e.charAt(n-1));)--n;for(;r<e.length&&a(e.charAt(r));)++r}return new Oi(ee(t.line,n),ee(t.line,r))},toggleOverwrite:function(t){null!=t&&t==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?L(this.display.cursorDiv,"CodeMirror-overwrite"):T(this.display.cursorDiv,"CodeMirror-overwrite"),gt(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==A()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ei((function(t,e){Lr(this,t,e)})),getScrollInfo:function(){var t=this.display.scroller;return{left:t.scrollLeft,top:t.scrollTop,height:t.scrollHeight-Pn(this)-this.display.barHeight,width:t.scrollWidth-Pn(this)-this.display.barWidth,clientHeight:En(this),clientWidth:jn(this)}},scrollIntoView:ei((function(t,e){null==t?(t={from:this.doc.sel.primary().head,to:null},null==e&&(e=this.options.cursorScrollMargin)):"number"==typeof t?t={from:ee(t,0),to:null}:null==t.from&&(t={from:t,to:null}),t.to||(t.to=t.from),t.margin=e||0,null!=t.from.line?function(t,e){Nr(t),t.curOp.scrollToPos=e}(this,t):Ir(this,t.from,t.to,t.margin)})),setSize:ei((function(t,e){var n=this,r=function(t){return"number"==typeof t||/^\d+$/.test(String(t))?t+"px":t};null!=t&&(this.display.wrapper.style.width=r(t)),null!=e&&(this.display.wrapper.style.height=r(e)),this.options.lineWrapping&&zn(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,(function(t){if(t.widgets)for(var e=0;e<t.widgets.length;e++)if(t.widgets[e].noHScroll){fr(n,i,"widget");break}++i})),this.curOp.forceUpdate=!0,gt(this,"refresh",this)})),operation:function(t){return Qr(this,t)},startOperation:function(){return Gr(this)},endOperation:function(){return Kr(this)},refresh:ei((function(){var t=this.display.cachedTextHeight;dr(this),this.curOp.forceUpdate=!0,Hn(this),Lr(this,this.doc.scrollLeft,this.doc.scrollTop),ci(this.display),(null==t||Math.abs(t-ir(this.display))>.5)&&cr(this),gt(this,"refresh",this)})),swapDoc:ei((function(t){var e=this.doc;return e.cm=null,this.state.selectingText&&this.state.selectingText(),Ii(this,t),Hn(this),this.display.input.reset(),Lr(this,t.scrollLeft,t.scrollTop),this.curOp.forceScroll=!0,cn(this,"swapDoc",this,e),e})),phrase:function(t){var e=this.options.phrases;return e&&Object.prototype.hasOwnProperty.call(e,t)?e[t]:t},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},bt(t),t.registerHelper=function(e,r,i){n.hasOwnProperty(e)||(n[e]=t[e]={_global:[]}),n[e][r]=i},t.registerGlobalHelper=function(e,r,i,o){t.registerHelper(e,r,o),n[e]._global.push({pred:i,val:o})}}(Pa);var qa="iter insert remove copy getEditor constructor".split(" ");for(var Ga in Do.prototype)Do.prototype.hasOwnProperty(Ga)&&z(qa,Ga)<0&&(Pa.prototype[Ga]=function(t){return function(){return t.apply(this.doc,arguments)}}(Do.prototype[Ga]));return bt(Do),Pa.inputStyles={textarea:Ua,contenteditable:za},Pa.defineMode=function(t){Pa.defaults.mode||"null"==t||(Pa.defaults.mode=t),_t.apply(this,arguments)},Pa.defineMIME=function(t,e){Rt[t]=e},Pa.defineMode("null",(function(){return{token:function(t){return t.skipToEnd()}}})),Pa.defineMIME("text/plain","null"),Pa.defineExtension=function(t,e){Pa.prototype[t]=e},Pa.defineDocExtension=function(t,e){Do.prototype[t]=e},Pa.fromTextArea=function(t,e){if((e=e?R(e):{}).value=t.value,!e.tabindex&&t.tabIndex&&(e.tabindex=t.tabIndex),!e.placeholder&&t.placeholder&&(e.placeholder=t.placeholder),null==e.autofocus){var n=A();e.autofocus=n==t||null!=t.getAttribute("autofocus")&&n==document.body}function r(){t.value=s.getValue()}var i;if(t.form&&(dt(t.form,"submit",r),!e.leaveSubmitMethodAlone)){var o=t.form;i=o.submit;try{var a=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=a}}catch(t){}}e.finishInit=function(n){n.save=r,n.getTextArea=function(){return t},n.toTextArea=function(){n.toTextArea=isNaN,r(),t.parentNode.removeChild(n.getWrapperElement()),t.style.display="",t.form&&(pt(t.form,"submit",r),e.leaveSubmitMethodAlone||"function"!=typeof t.form.submit||(t.form.submit=i))}},t.style.display="none";var s=Pa((function(e){return t.parentNode.insertBefore(e,t.nextSibling)}),e);return s},function(t){t.off=pt,t.on=dt,t.wheelEventPixels=wi,t.Doc=Do,t.splitLines=At,t.countColumn=_,t.findColumn=q,t.isWordChar=tt,t.Pass=$,t.signal=gt,t.Line=Ge,t.changeEnd=Ti,t.scrollbarModel=Br,t.Pos=ee,t.cmpPos=ne,t.modes=Ft,t.mimeModes=Rt,t.resolveMode=Vt,t.getMode=zt,t.modeExtensions=Ht,t.extendMode=$t,t.copyState=Wt,t.startState=Ut,t.innerMode=Bt,t.commands=ea,t.keyMap=Wo,t.keyName=Yo,t.isModifierKey=Go,t.lookupKey=qo,t.normalizeKeyMap=Uo,t.StringStream=qt,t.SharedTextMarker=Po,t.TextMarker=So,t.LineWidget=Co,t.e_preventDefault=wt,t.e_stopPropagation=xt,t.e_stop=Ot,t.addClass=L,t.contains=D,t.rmClass=T,t.keyNames=Vo}(Pa),Pa.version="5.49.2",Pa}()},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(0),i=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},o=function(t,e){t.parentNode.replaceChild(e,t)},a=function(t,e,n){var i=t.childNodes,o=i.length,a=Object(r.isUndefined)(n)?o:n;a>=o?t.appendChild(e):t.insertBefore(e,i[a])},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Array.isArray(e)?e:[e];n.forEach((function(e){var n=e.tag||"div",i=e.attributes||{},o=document.createElement(n);Object(r.each)(i,(function(t,e){o.setAttribute(e,t)})),t.appendChild(o)}))}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(6),a=n.n(o),s=n(1),l=n.n(s),c=n(0),u=n(3),h=n(29),d=l.a.View.extend({events:function(){return this.model.get("events")||{mousedown:"handleClick"}},attributes:function(){return this.model.get("attributes")},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.config,n=void 0===e?{}:e;this.em=n.em,this.editor=n.editor},handleClick:function(t){t.preventDefault(),t.stopPropagation(),this.em.trigger("toolbar:run:before"),this.execCommand(t)},execCommand:function(t){var e={event:t},n=this.model.get("command"),r=this.editor;"function"==typeof n&&n(r,null,e),"string"==typeof n&&r.runCommand(n,e)},render:function(){var t=this.editor,e=this.$el,n=this.model,r=n.get("id"),i=n.get("label"),o=t.getConfig("stylePrefix");return e.addClass("".concat(o,"toolbar-item")),r&&e.addClass("".concat(o,"toolbar-item__").concat(r)),i&&e.append(i),this}}),f=h.a.extend({itemView:d,initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config={editor:t.editor||"",em:t.em},this.listenTo(this.collection,"reset",this.render)}}),p=l.a.Model.extend({defaults:{command:"",attributes:{}}}),g=l.a.Collection.extend({model:p});function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var m,y=l.a.$;e.default={init:function(t){Object(c.bindAll)(this,"onHover","onOut","onClick","onFrameScroll")},enable:function(){this.frameOff=this.canvasOff=this.adjScroll=null,this.startSelectComponent();var t=this.config.em;m=1,t.on("component:update",this.updateAttached,this),t.on("change:canvasOffset",this.updateAttached,this)},startSelectComponent:function(){this.toggleSelectComponent(1)},stopSelectComponent:function(){this.toggleSelectComponent()},toggleSelectComponent:function(t){var e=this.em,n=t?"on":"off",r={on:u.q,off:u.p},i=this.getCanvasBody(),o=this.getContentWindow();r[n](i,"mouseover",this.onHover),r[n](i,"mouseout",this.onOut),r[n](i,"click touchend",this.onClick),r[n](o,"scroll resize",this.onFrameScroll),e[n]("component:toggled",this.onSelect,this),e[n]("change:componentHovered",this.onHovered,this)},onHover:function(t){t.stopPropagation();var e=t.target,n=y(e),r=n.data("model");if(!r)for(var i=n.parent();!r&&i.length>0;)r=i.data("model"),i=i.parent();if(this.adjScroll||(this.adjScroll=1,this.updateAttached()),r&&!r.get("hoverable")){for(var o=r&&r.parent();o&&!o.get("hoverable");)o=o.parent();r=o}this.em.setHovered(r,{forceChange:1})},onHovered:function(t,e){var n=e&&e.getEl();if(n){var r=this.getElementPos(n);this.updateBadge(n,r),this.updateHighlighter(n,r),this.showElementOffset(n,r)}},onOut:function(t){t&&t.stopPropagation(),this.hideBadge(),this.hideHighlighter(),this.hideElementOffset()},showElementOffset:function(t,e){var n=y(t).data("model");n&&"selected"==n.get("status")||!m||this.editor.runCommand("show-offset",{el:t,elPos:e,force:1})},hideElementOffset:function(t,e){var n=this.editor;n&&n.stopCommand("show-offset")},showFixedElementOffset:function(t,e){this.editor.runCommand("show-offset",{el:t,elPos:e,state:"Fixed"})},hideFixedElementOffset:function(t,e){this.editor&&this.editor.stopCommand("show-offset",{state:"Fixed"})},hideHighlighter:function(){this.canvas.getHighlighter().style.display="none"},onClick:function(t){var e=this.em;if(t.stopPropagation(),t.preventDefault(),e.get("_cmpDrag"))return e.set("_cmpDrag");var n=y(t.target),r=n.data("model");if(!r)for(var i=n.parent();!r&&i.length>0;)r=i.data("model"),i=i.parent();if(r)if(r.get("selectable"))this.select(r,t);else{for(var o=r.parent();o&&!o.get("selectable");)o=o.parent();this.select(o,t)}},select:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){var n=e.ctrlKey||e.metaKey,r=e.shiftKey,i=this.editor,o=i.getConfig("multipleSelection"),a=this.em;if(n&&o)i.selectToggle(t);else if(r&&o){a.clearSelection(i.Canvas.getWindow());var s,l,u=t.collection,h=u.indexOf(t);i.getSelectedAll();if(i.getSelectedAll().forEach((function(t){var e=t.collection,n=e.indexOf(t);e===u&&(n<h?s=Object(c.isUndefined)(s)?n:Math.max(s,n):n>h&&(l=Object(c.isUndefined)(l)?n:Math.min(l,n)))})),!Object(c.isUndefined)(s))for(;s!==h;)i.selectAdd(u.at(s)),s++;if(!Object(c.isUndefined)(l))for(;l!==h;)i.selectAdd(u.at(l)),l--;i.selectAdd(t)}else i.select(t);this.initResize(t)}},updateBadge:function(t,e){var n=y(t),r=this.canvas.getConfig(),i=r.pStylePrefix||"",o=r.customBadgeLabel;this.cacheEl=t;var a=n.data("model");if(a&&a.get("badgable")){var s=this.getBadge(),l=a.getIcon(),c="".concat(i,"badge"),u="".concat(l?'<div class="'.concat(c,'__icon">').concat(l,"</div>"):"",'\n      <div class="').concat(c,'__name">').concat(a.getName(),"</div>");u=o?o(a):u,s.innerHTML=u;var h=s.style;h.display="block";var d=this.getCanvasPosition();if(d){var f=d.top,p=d.left,g=e.top-(s?s.offsetHeight:0),v=s?s.offsetWidth:0,m=g<f?f:g,b=e.left+v<p?p:e.left;h.top=m+"px",h.left=b+"px"}}},updateHighlighter:function(t,e){var n=y(t).data("model");if(n&&n.get("hoverable")&&"selected"!=n.get("status")){var r=this.canvas.getHighlighter().style;r.left=e.left+"px",r.top=e.top+"px",r.height=e.height+"px",r.width=e.width+"px",r.display="block"}},onSelect:function(){var t=this.em.getSelected(),e=t&&t.view;if(this.updateToolbar(t),e){var n=e.el;this.showFixedElementOffset(n),this.hideElementOffset(),this.hideHighlighter(),this.initResize(n)}else this.editor.stopCommand("resize")},initResize:function(t){var e,n=this.em,r=this.canvas,o=n?n.get("Editor"):"",s=(n?n.get("Config"):"").stylePrefix||"",l="".concat(s,"resizing"),h=!Object(c.isElement)(t)&&Object(u.l)(t)?t:n.getSelected(),d=h.get("resizable"),f=Object(c.isElement)(t)?t:h.getEl(),p={},g=function(t,e,n){var r=n.docs;r&&r.forEach((function(e){var n=e.body,r=n.className||"";n.className=("add"==t?"".concat(r," ").concat(l):r.replace(l,"")).trim()}))};o&&d?(p={onStart:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.el,o=r.config,a=r.resizer,s=o.keyHeight,l=o.keyWidth,c=o.currentUnit,d=o.keepAutoHeight,f=o.keepAutoWidth;g("add",0,r),e=n.get("StyleManager").getModelToStyle(h);var p=getComputedStyle(i),v=e.getStyle(),y=v[l];o.autoWidth=f&&"auto"===y,isNaN(parseFloat(y))&&(y=p[l]);var b=v[s];o.autoHeight=d&&"auto"===b,isNaN(parseFloat(b))&&(b=p[s]),a.startDim.w=parseFloat(y),a.startDim.h=parseFloat(b),m=0,c&&(o.unitHeight=Object(u.i)(b),o.unitWidth=Object(u.i)(y))},onMove:function(){o.trigger("change:canvasOffset")},onEnd:function(t,e){g("remove",0,e),o.trigger("change:canvasOffset"),m=1},updateTarget:function(t,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e){var a=o.store,s=o.selectedHandler,l=o.config,c=l.keyHeight,u=l.keyWidth,h=l.autoHeight,d=l.autoWidth,f=l.unitWidth,p=l.unitHeight,g=["tc","bc"].indexOf(s)>=0,v=["cl","cr"].indexOf(s)>=0,m=e.getStyle();if(!g){var y=r.getBody().offsetWidth,b=i.w<y?i.w:y;m[u]=d?"auto":"".concat(b).concat(f)}v||(m[c]=h?"auto":"".concat(i.h).concat(p)),e.setStyle(m,{avoidStore:1});var w="update:component:style";n&&n.trigger("".concat(w,":").concat(c," ").concat(w,":").concat(u)),a&&e.trigger("change:style",e,m,{})}}},"object"==a()(d)&&(p=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},p,{},d)),this.resizer=o.runCommand("resize",{el:f,options:p,force:1})):(o.stopCommand("resize"),this.resizer=null)},updateToolbar:function(t){var e=this,n=this.config.em,r=t==n?n.getSelected():t,i=this.canvas.getToolbarEl(),o=i.style;if(r){var a=r.get("toolbar");this.ppfx;if(n.get("Config").showToolbar&&a&&a.length){if(o.opacity="",o.display="",!this.toolbar){i.innerHTML="",this.toolbar=new g(a);var s=new f({collection:this.toolbar,editor:this.editor,em:n});i.appendChild(s.render().el)}this.toolbar.reset(a);var l=r.view;o.top="-100px",o.left=0,setTimeout((function(){return l&&e.updateToolbarPos(l.el)}),0)}else o.display="none"}else o.opacity=0},updateToolbarPos:function(t,e){var n=this.canvas,r=n.getToolbarEl(),i=r.style;i.opacity=0;var o=n.getTargetToElementDim(r,t,{elPos:e,event:"toolbarPosUpdate"});if(o){var a=n.getCanvasView().getFrameOffset();o.top<=o.canvasTop&&!(o.elementHeight+o.targetHeight>=a.height)&&(o.top=o.elementTop+o.elementHeight);var s=o.elementLeft+o.elementWidth,l=s-o.targetWidth;s>o.canvasWidth&&(l-=s-o.canvasWidth),l=l<0?0:l,i.top="".concat(o.top).concat("px"),i.left="".concat(l).concat("px"),i.opacity=""}},getCanvasPosition:function(){return this.canvas.getCanvasView().getPosition()},clean:function(){this.selEl&&this.selEl.removeClass(this.hoverClass)},getBadge:function(){return this.canvas.getBadgeEl()},onFrameScroll:function(){var t=this.cacheEl;if(t){var e=this.getElementPos(t);this.updateBadge(t,e);var n=this.em.getSelected(),r=n&&n.getEl();r&&this.updateToolbarPos(r)}},updateAttached:function(){var t=this.resizer,e=this.em.getSelected(),n=e&&e.view;if(n){var r=n.el;this.updateToolbarPos(r),this.showFixedElementOffset(r),t&&t.updateContainer()}},getElementPos:function(t,e){return this.canvas.getCanvasView().getElementPos(t)},hideBadge:function(){this.getBadge().style.display="none"},cleanPrevious:function(t){t&&t.set({status:"",state:""})},getContentWindow:function(){return this.frameEl.contentWindow},run:function(t){this.editor=t&&t.get("Editor"),this.enable(),this.onSelect()},stop:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.em,i=this.editor;this.stopSelectComponent(),!n.preserveSelected&&r.setSelected(null),this.clean(),this.onOut(),this.hideFixedElementOffset(),this.canvas.getToolbarEl().style.display="none",i&&i.stopCommand("resize"),r.off("component:update",this.updateAttached,this),r.off("change:canvasOffset",this.updateAttached,this)}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";var r=n(1),i=n.n(r),o=i.a.$;e.a=i.a.View.extend({events:{change:"handleChange"},template:function(){return'<span class="'.concat(this.holderClass(),'"></span>')},inputClass:function(){return"".concat(this.ppfx,"field")},holderClass:function(){return"".concat(this.ppfx,"input-holder")},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ppfx||"";this.opts=t,this.ppfx=e,this.em=t.target||{},this.listenTo(this.model,"change:value",this.handleModelChange)},elementUpdated:function(){this.model.trigger("el:change")},setValue:function(t){var e=this.model,n=t||e.get("defaults"),r=this.getInputEl();r&&(r.value=n)},handleModelChange:function(t,e,n){this.setValue(e,n)},handleChange:function(t){t.stopPropagation();var e=this.getInputEl().value;this.model.set({value:e},{fromInput:1}),this.elementUpdated()},getInputEl:function(){if(!this.inputEl){var t=this.model,e=t.get("placeholder")||t.get("defaults")||"";this.inputEl=o('<input type="text" placeholder="'.concat(e,'">'))}return this.inputEl.get(0)},render:function(){this.inputEl=null;var t=this.$el;return t.addClass(this.inputClass()),t.html(this.template()),t.find(".".concat(this.holderClass())).append(this.getInputEl()),this}})},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(11);e.default=i.a.View.extend({initialize:function(t){this.config=t.config||{},this.pfx=this.config.stylePrefix||"",this.target=t.target||{},this.propTarget=t.propTarget||{},this.onChange=t.onChange,this.onInputRender=t.onInputRender||{},this.customValue=t.customValue||{},this.properties=[];var e=this.collection;this.listenTo(e,"add",this.addTo),this.listenTo(e,"reset",this.render)},addTo:function(t,e,n){this.add(t,null,n)},add:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e||this.el,i=new t.typeView({model:t,name:t.get("name"),id:this.pfx+t.get("property"),target:this.target,propTarget:this.propTarget,onChange:this.onChange,onInputRender:this.onInputRender,config:this.config});"composite"!=t.get("type")&&(i.customValue=this.customValue),i.render();var a=i.el;this.properties.push(i),Object(o.a)(r,a,n.at)},render:function(){var t=this;this.properties=[];var e=document.createDocumentFragment();return this.collection.each((function(n){return t.add(n,e)})),this.$el.append(e),this.$el.attr("class","".concat(this.pfx,"properties")),this}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(2),i=n.n(r),o=n(13),a=n.n(o),s=n(14),l=n.n(s),c=n(0),u=n(3);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(){return{x:0,y:0}},p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a()(this,t),this.opts={container:null,onStart:null,onDrag:null,onEnd:null,setPosition:null,getPosition:null,guidesStatic:null,guidesTarget:null,snapOffset:5,doc:0,scale:1},Object(c.bindAll)(this,"drag","stop","keyHandle","handleScroll"),this.setOptions(e),this.delta=f(),this}return l()(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=d({},this.opts,{},t)}},{key:"toggleDrag",value:function(t){var e=this.getDocumentEl(),n=this.getContainerEl(),r=this.getWindowEl(),i=t?"on":"off",o={on:u.q,off:u.p};o[i](n,"mousemove dragover",this.drag),o[i](e,"mouseup dragend touchend",this.stop),o[i](e,"keydown",this.keyHandle),o[i](r,"scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var t=this.lastScroll,e=this.delta,n=this.getScrollInfo(),r={x:n.x-t.x,y:n.y-t.y};this.move(e.x+r.x,e.y+r.y),this.lastScrollDiff=r}},{key:"start",value:function(t){var e=this.opts,n=e.onStart;this.toggleDrag(1),this.startPointer=this.getPointerPos(t),this.guidesStatic=Object(c.result)(e,"guidesStatic")||[],this.guidesTarget=Object(c.result)(e,"guidesTarget")||[],Object(c.isFunction)(n)&&n(t,this),this.startPosition=this.getStartPosition(),this.lastScrollDiff=f(),this.globScrollDiff=f(),this.drag(t)}},{key:"drag",value:function(t){var e=this,n=this.opts,r=this.lastScrollDiff,i=this.globScrollDiff,o=n.onDrag,a=this.startPointer,s=this.getPointerPos(t),l={x:i.x+r.x,y:i.y+r.y};this.globScrollDiff=l;var u={x:s.x-a.x+l.x,y:s.y-a.y+l.y};this.lastScrollDiff=f();var h=this.lockedAxis;"x"===(h=t.shiftKey?!h&&this.detectAxisLock(u.x,u.y):null)?u.x=a.x:"y"===h&&(u.y=a.y);var p=function(r){["x","y"].forEach((function(t){return r[t]=r[t]*Object(c.result)(n,"scale")})),e.delta=r,e.move(r.x,r.y),Object(c.isFunction)(o)&&o(t,e)},g=d({},u);if(this.currentPointer=s,this.lockedAxis=h,this.lastScroll=this.getScrollInfo(),p(u),this.guidesTarget.length){var v=this.snapGuides(g),m=v.newDelta,y=v.trgX,b=v.trgY;(y||b)&&p(m)}0===t.which&&this.stop(t)}},{key:"snapGuides",value:function(t){var e=this,n=t,r=this.trgX,i=this.trgY;return this.guidesTarget.forEach((function(n){n.x&&e.trgX||n.y&&e.trgY||(n.active=0,e.guidesStatic.forEach((function(o){if(!(n.y&&o.x||n.x&&o.y)){var a=n.y&&o.y,s=a?"y":"x",l=n[s],u=o[s],h=t[s],d=a?i:r;if(e.isPointIn(l,u)&&Object(c.isUndefined)(d)){var f=h-(l-u);e.setGuideLock(n,f)}}})))})),r=this.trgX,i=this.trgY,["x","y"].forEach((function(r){var i=r.toUpperCase(),o=e["trg".concat(i)];o&&!e.isPointIn(t[r],o.lock)&&(e.setGuideLock(o,null),o=null),o&&!Object(c.isUndefined)(o.lock)&&(n[r]=o.lock)})),{newDelta:n,trgX:this.trgX,trgY:this.trgY}}},{key:"isPointIn",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.offset,i=r||this.opts.snapOffset;return t>=e&&t<=e+i||t<=e&&t>=e-i}},{key:"setGuideLock",value:function(t,e){var n=Object(c.isUndefined)(t.x)?"Y":"X",r="trg".concat(n);return null!==e?(t.active=1,t.lock=e,this[r]=t):(delete t.active,delete t.lock,delete this[r]),t}},{key:"stop",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.delta,r=e.cancel,i=r?0:n.x,o=r?0:n.y;this.toggleDrag(),this.lockedAxis=null,this.move(i,o,1);var a=this.opts.onEnd;Object(c.isFunction)(a)&&a(t,this,{cancelled:r})}},{key:"keyHandle",value:function(t){Object(u.k)(t)&&this.stop(t,{cancel:1})}},{key:"move",value:function(t,e,n){var r=this.el,i=this.opts,o=this.startPosition;if(o){var a=i.setPosition,s=o.x+t,l=o.y+e;this.position={x:s,y:l,end:n},Object(c.isFunction)(a)&&a(this.position),r&&(r.style.left="".concat(s,"px"),r.style.top="".concat(l,"px"))}}},{key:"getContainerEl",value:function(){var t=this.opts.container;return t?[t]:this.getDocumentEl()}},{key:"getWindowEl",value:function(){return this.getContainerEl().map((function(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow}))}},{key:"getDocumentEl",value:function(t){var e=this.opts.doc;if(t=t||this.el,!this.docs){var n=[document];t&&n.push(t.ownerDocument),e&&n.push(e),this.docs=n}return this.docs}},{key:"getPointerPos",value:function(t){var e=this.opts.getPointerPosition,n=Object(u.h)(t);return e?e(t):{x:n.clientX,y:n.clientY}}},{key:"getStartPosition",value:function(){var t=this.el,e=this.opts.getPosition,n=f();return Object(c.isFunction)(e)?n=e():t&&(n={x:parseFloat(t.style.left),y:parseFloat(t.style.top)}),n}},{key:"getScrollInfo",value:function(){var t=this.opts.doc,e=t&&t.body;return{y:e?e.scrollTop:0,x:e?e.scrollLeft:0}}},{key:"detectAxisLock",value:function(t,e){var n=t,r=e,i=Math.abs(n),o=Math.abs(r);return r>=i||r<=-i?"x":n>o||n<-o?"y":void 0}}]),t}()},function(t,e,n){"use strict";var r,i=n(6),o=n.n(i),a=n(2),s=n.n(a),l=n(1),c=n.n(l),u=n(0);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=c.a.Collection.extend({initialize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.opt=e,this.listenTo(this,"add",this.onAdd),this.config=e.config,this.em=e.em;var n=this.em;this.model=function(t,r){var i,o=e.componentTypes;r.em=e.em,r.config=e.config,r.componentTypes=o,r.domc=e.domc;for(var a=0;a<o.length;a++){if(o[a].id==t.type){i=o[a].model;break}}return i||(i=o[o.length-1].model,n&&t.type&&n.logWarning("Component type '".concat(t.type,"' not found"),{attrs:t,options:r})),new i(t,r)}},parseString:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.em,o=i.get("CssComposer"),a=i.get("Parser").parseHtml(t);return r||(r=n(4).default),r.checkId(a.html,a.css,this.opt.domc.componentsById),a.css&&o&&!e.temporary&&o.addCollection(a.css,d({},e,{extend:1})),a.html},add:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(u.isString)(t)?t=this.parseString(t,n):Object(u.isArray)(t)&&t.forEach((function(r,i){Object(u.isString)(r)&&(t[i]=e.parseString(r,n))}));var r=Object(u.isArray)(t);return t=(r?t:[t]).filter((function(t){return t})).map((function(t){return e.processDef(t)})),t=r?t:t[0],c.a.Collection.prototype.add.apply(this,[t,n])},processDef:function(t){if(t.cid&&t.ccid)return t;var e=this.em,n=this.config,r=(void 0===n?{}:n).processor,i=t;if(r){var a=r(i=d({},i));a&&(Object(u.each)(i,(function(t,e){return delete i[e]})),Object(u.extend)(i,a))}if(i.$$typeof&&"object"==o()(i.props)){(i=d({},i)).props=d({},i.props);var s=e.get("DomComponents"),l=e.get("Parser").parserHtml;Object(u.each)(i,(function(t,e){Object(u.includes)(["props","type"],e)||delete i[e]}));var c=i.props,h=c.children;delete c.children,delete i.props;var f=l.splitPropsFromAttr(c);i.attributes=f.attrs,h&&(i.components=h),i.type?s.getType(i.type)||(i.tagName=i.type,delete i.type):i.type="textnode",Object(u.extend)(i,f.props)}return i},onAdd:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.em,i=t.getStyle(),o=r&&r.getConfig("avoidInlineStyle");if(!Object(u.isEmpty)(i)&&!o&&r&&r.get&&r.getConfig("forceClass")&&!n.temporary){var a=t.cid;r.get("CssComposer").setClassRule(a,i);t.setStyle({}),t.addClass(a)}}})},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=i.a.$;e.default=i.a.View.extend({initialize:function(t){this.config=t||{},this.editorModel=this.em=this.config.em||{},this.pfx=this.config.stylePrefix,this.ppfx=this.config.pStylePrefix,this.hoverClass=this.pfx+"hover",this.badgeClass=this.pfx+"badge",this.plhClass=this.pfx+"placeholder",this.freezClass=this.ppfx+"freezed",this.canvas=this.em.get&&this.em.get("Canvas"),this.em.get&&this.setElement(this.getCanvas()),this.canvas&&(this.$canvas=this.$el,this.$wrapper=o(this.getCanvasWrapper()),this.frameEl=this.canvas.getFrameEl(),this.canvasTool=this.getCanvasTools(),this.bodyEl=this.getCanvasBody()),this.init(this.config)},onFrameScroll:function(t){},getCanvas:function(){return this.canvas.getElement()},getCanvasBody:function(){return this.canvas.getBody()},getCanvasWrapper:function(){return this.canvas.getWrapperEl()},getCanvasTools:function(){return this.canvas.getToolsEl()},offset:function(t){var e=t.getBoundingClientRect();return{top:e.top+t.ownerDocument.body.scrollTop,left:e.left+t.ownerDocument.body.scrollLeft}},init:function(t){},callRun:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.id;if(t.trigger("run:".concat(n,":before"),e),!e||!e.abort){var r=e.sender||t,i=this.run(t,r,e);return t.trigger("run:".concat(n),i,e),t.trigger("run",n,i,e),i}t.trigger("abort:".concat(n),e)},callStop:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.id,r=e.sender||t;t.trigger("stop:".concat(n,":before"),e);var i=this.stop(t,r,e);return t.trigger("stop:".concat(n),i,e),t.trigger("stop",n,i,e),i},stopCommand:function(){this.em.get("Commands").stop(this.id)},run:function(t,e){},stop:function(t,e){}})},function(t,e,n){"use strict";var r=n(2),i=n.n(r),o=n(0),a=n(3),s=n(26);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=Object(s.a)().parseStyle;e.a={parseStyle:u,extendStyle:function(t){return c({},this.getStyle(),{},t)},getStyle:function(){return c({},this.get("style")||{})},setStyle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.isString)(e)&&(e=u(e));var r=this.getStyle(),i=c({},e);this.set("style",i,n);var s=Object(a.r)(r,i);return Object(o.keys)(s).forEach((function(e){var n=t.em;t.trigger("change:style:".concat(e)),n&&(n.trigger("styleable:change",t,e),n.trigger("styleable:change:".concat(e),t,e))})),i},addStyle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"string"==typeof t?t={prop:e}:n=e||{},t=this.extendStyle(t),this.setStyle(t,n)},removeStyle:function(t){var e=this.getStyle();delete e[t],this.setStyle(e)},styleToString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[],n=this.getStyle();for(var r in n){var i=t.important,a=Object(o.isArray)(i)?i.indexOf(r)>=0:i,s="".concat(n[r]).concat(a?" !important":"");s&&e.push("".concat(r,":").concat(s,";"))}return e.join("")},getSelectors:function(){return this.get("selectors")||this.get("classes")}}},function(t,e,n){"use strict";var r,i;
/*! cash-dom 1.3.7, https://github.com/kenwheeler/cash @license MIT */void 0===(i="function"==typeof(r=function(){var t,e=document,n=window,r=Array.prototype,i=r.slice,o=r.filter,a=r.push,s=function(){},l=function(t){return"function"==typeof t&&t.call},c=function(t){return"string"==typeof t},u=/^#[\w-]*$/,h=/^\.[\w-]*$/,d=/<.+>/,f=/^\w+$/;function p(t,n){return n=n||e,h.test(t)?n.getElementsByClassName(t.slice(1)):f.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t)}function g(n){if(!t){var r=(t=e.implementation.createHTMLDocument(null)).createElement("base");r.href=e.location.href,t.head.appendChild(r)}return t.body.innerHTML=n,t.body.childNodes}function v(t){"loading"!==e.readyState?setTimeout(t):e.addEventListener("DOMContentLoaded",t)}function m(t,r){if(!t)return this;if(t.cash&&t!==n)return t;var i,o=t,a=0;if(c(t))o=u.test(t)?e.getElementById(t.slice(1)):d.test(t)?g(t):p(t,r);else if(l(t))return v(t),this;if(!o)return this;if(o.nodeType||o===n)this[0]=o,this.length=1;else for(i=this.length=o.length;a<i;a++)this[a]=o[a];return this}function y(t,e){return new m(t,e)}var b=y.fn=y.prototype=m.prototype={cash:!0,length:0,push:a,splice:r.splice,map:r.map,init:m};function w(t,e){for(var n=t.length,r=0;r<n&&!1!==e.call(t[r],t[r],r,t);r++);}function x(t,e){var n=t&&(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector);return!!n&&n.call(t,e)}function C(t){return c(t)?x:t.cash?function(e){return t.is(e)}:function(t,e){return t===e}}function O(t){return y(i.call(t).filter((function(t,e,n){return n.indexOf(t)===e})))}Object.defineProperty(b,"constructor",{value:y}),y.parseHTML=g,y.noop=s,y.isFunction=l,y.isString=c,y.extend=b.extend=function(t){t=t||{};var e=i.call(arguments),n=e.length,r=1;for(1===e.length&&(t=this,r=0);r<n;r++)if(e[r])for(var o in e[r])e[r].hasOwnProperty(o)&&(t[o]=e[r][o]);return t},y.extend({merge:function(t,e){for(var n=+e.length,r=t.length,i=0;i<n;r++,i++)t[r]=e[i];return t.length=r,t},each:w,matches:x,unique:O,isArray:Array.isArray,isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}});var k=y.uid="_cash"+Date.now();function S(t){return t[k]=t[k]||{}}function T(t,e,n){return S(t)[e]=n}function P(t,e){var n=S(t);return void 0===n[e]&&(n[e]=t.dataset?t.dataset[e]:y(t).attr("data-"+e)),n[e]}b.extend({data:function(t,e){if(c(t))return void 0===e?P(this[0],t):this.each((function(n){return T(n,t,e)}));for(var n in t)this.data(n,t[n]);return this},removeData:function(t){return this.each((function(e){return function(t,e){var n=S(t);n?delete n[e]:t.dataset?delete t.dataset[e]:y(t).removeAttr("data-"+name)}(e,t)}))}});var j=/\S+/g;function E(t){return c(t)&&t.match(j)}function M(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}function D(t,e){t.classList?t.classList.add(e):M(t,e)||(t.className+=" "+e)}function A(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}b.extend({addClass:function(t){var e=E(t);return e?this.each((function(t){w(e,(function(e){D(t,e)}))})):this},attr:function(t,e){if(t){if(c(t))return void 0===e?this[0]?this[0].getAttribute?this[0].getAttribute(t):this[0][t]:void 0:this.each((function(n){n.setAttribute?n.setAttribute(t,e):n[t]=e}));for(var n in t)this.attr(n,t[n]);return this}},hasClass:function(t){var e=!1,n=E(t);return n&&n.length&&this.each((function(t){return!(e=M(t,n[0]))})),e},prop:function(t,e){if(c(t))return void 0===e?this[0][t]:this.each((function(n){n[t]=e}));for(var n in t)this.prop(n,t[n]);return this},removeAttr:function(t){return this.each((function(e){e.removeAttribute?e.removeAttribute(t):delete e[t]}))},removeClass:function(t){if(!arguments.length)return this.attr("class","");var e=E(t);return e?this.each((function(t){w(e,(function(e){A(t,e)}))})):this},removeProp:function(t){return this.each((function(e){delete e[t]}))},toggleClass:function(t,e){if(void 0!==e)return this[e?"addClass":"removeClass"](t);var n=E(t);return n?this.each((function(t){w(n,(function(e){M(t,e)?A(t,e):D(t,e)}))})):this}}),b.extend({add:function(t,e){return O(y.merge(this,y(t,e)))},each:function(t){return w(this,t),this},eq:function(t){return y(this.get(t))},filter:function(t){if(!t)return this;var e=l(t)?t:C(t);return y(o.call(this,(function(n){return e(n,t)})))},first:function(){return this.eq(0)},get:function(t){return void 0===t?i.call(this):t<0?this[t+this.length]:this[t]},index:function(t){var e=t?y(t)[0]:this[0],n=t?this:y(e).parent().children();return i.call(n).indexOf(e)},last:function(){return this.eq(-1)}});var L,N,I,F,R=(I=/(?:^\w|[A-Z]|\b\w)/g,F=/[\s-_]+/g,function(t){return t.replace(I,(function(t,e){return t[0===e?"toLowerCase":"toUpperCase"]()})).replace(F,"")}),_=(L={},N=document.createElement("div").style,function(t){if(t=R(t),L[t])return L[t];var e=t.charAt(0).toUpperCase()+t.slice(1);return w((t+" "+["webkit","moz","ms","o"].join(e+" ")+e).split(" "),(function(e){if(e in N)return L[e]=t=L[t]=e,!1})),L[t]});function V(t,e){return parseInt(n.getComputedStyle(t[0],null)[e],10)||0}function z(t,e,n){var r,i=P(t,"_cashEvents"),o=i&&i[e];o&&(n?(t.removeEventListener(e,n),(r=o.indexOf(n))>=0&&o.splice(r,1)):(w(o,(function(n){t.removeEventListener(e,n)})),o=[]))}function H(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e).replace(/%20/g,"+")}function $(t){var e=t.type;if(!e)return null;switch(e.toLowerCase()){case"select-one":return function(t){var e=t.selectedIndex;return e>=0?t.options[e].value:null}(t);case"select-multiple":return function(t){var e=[];return w(t.options,(function(t){t.selected&&e.push(t.value)})),e.length?e:null}(t);case"radio":case"checkbox":return t.checked?t.value:null;default:return t.value?t.value:null}}function W(t,e,n){var r=c(e);r||!e.length?w(t,r?function(t){return t.insertAdjacentHTML(n?"afterbegin":"beforeend",e)}:function(t,r){return function(t,e,n){if(n){var r=t.childNodes[0];t.insertBefore(e,r)}else t.appendChild(e)}(t,0===r?e:e.cloneNode(!0),n)}):w(e,(function(e){return W(t,e,n)}))}y.prefixedProp=_,y.camelCase=R,b.extend({css:function(t,e){if(c(t))return t=_(t),arguments.length>1?this.each((function(n){return n.style[t]=e})):n.getComputedStyle(this[0])[t];for(var r in t)this.css(r,t[r]);return this}}),w(["Width","Height"],(function(t){var e=t.toLowerCase();b[e]=function(){return this[0].getBoundingClientRect()[e]},b["inner"+t]=function(){return this[0]["client"+t]},b["outer"+t]=function(e){return this[0]["offset"+t]+(e?V(this,"margin"+("Width"===t?"Left":"Top"))+V(this,"margin"+("Width"===t?"Right":"Bottom")):0)}})),b.extend({off:function(t,e){return this.each((function(n){return z(n,t,e)}))},on:function(t,e,n,r){var i;if(!c(t)){for(var o in t)this.on(o,e,t[o]);return this}return l(e)&&(n=e,e=null),"ready"===t?(v(n),this):(e&&(i=n,n=function(t){for(var n=t.target;!x(n,e);){if(n===this)return!1;n=n.parentNode}n&&i.call(n,t)}),this.each((function(e){var i=n;r&&(i=function(){n.apply(this,arguments),z(e,t,i)}),function(t,e,n){var r=P(t,"_cashEvents")||T(t,"_cashEvents",{});r[e]=r[e]||[],r[e].push(n),t.addEventListener(e,n)}(e,t,i)})))},one:function(t,e,n){return this.on(t,e,n,!0)},ready:v,trigger:function(t,n){var r=e.createEvent("HTMLEvents");return r.data=n,r.initEvent(t,!0,!1),this.each((function(t){return t.dispatchEvent(r)}))}}),b.extend({serialize:function(){var t="";return w(this[0].elements||this,(function(e){if(!e.disabled&&"FIELDSET"!==e.tagName){var n=e.name;switch(e.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var r=$(e);null!==r&&w(r,(function(e){t+=H(n,e)}));break;default:var i=$(e);null!==i&&(t+=H(n,i))}}})),t.substr(1)},val:function(t){return void 0===t?$(this[0]):this.each((function(e){return e.value=t}))}}),b.extend({after:function(t){return y(t).insertAfter(this),this},append:function(t){return W(this,t),this},appendTo:function(t){return W(y(t),this),this},before:function(t){return y(t).insertBefore(this),this},clone:function(){return y(this.map((function(t){return t.cloneNode(!0)})))},empty:function(){return this.html(""),this},html:function(t){if(void 0===t)return this[0].innerHTML;var e=t.nodeType?t[0].outerHTML:t;return this.each((function(t){return t.innerHTML=e}))},insertAfter:function(t){var e=this;return y(t).each((function(t,n){var r=t.parentNode,i=t.nextSibling;e.each((function(t){r.insertBefore(0===n?t:t.cloneNode(!0),i)}))})),this},insertBefore:function(t){var e=this;return y(t).each((function(t,n){var r=t.parentNode;e.each((function(e){r.insertBefore(0===n?e:e.cloneNode(!0),t)}))})),this},prepend:function(t){return W(this,t,!0),this},prependTo:function(t){return W(y(t),this,!0),this},remove:function(){return this.each((function(t){return t.parentNode.removeChild(t)}))},text:function(t){return void 0===t?this[0].textContent:this.each((function(e){return e.textContent=t}))}});var B=e.documentElement;return b.extend({position:function(){var t=this[0];return{left:t.offsetLeft,top:t.offsetTop}},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+n.pageYOffset-B.clientTop,left:t.left+n.pageXOffset-B.clientLeft}},offsetParent:function(){return y(this[0].offsetParent)}}),b.extend({children:function(t){var e=[];return this.each((function(t){a.apply(e,t.children)})),e=O(e),t?e.filter((function(e){return x(e,t)})):e},closest:function(t){return!t||this.length<1?y():this.is(t)?this.filter(t):this.parent().closest(t)},is:function(t){if(!t)return!1;var e=!1,n=C(t);return this.each((function(r){return!(e=n(r,t))})),e},find:function(t){if(!t||t.nodeType)return y(t&&this.has(t).length?t:null);var e=[];return this.each((function(n){a.apply(e,p(t,n))})),O(e)},has:function(t){var e=c(t)?function(e){return 0!==p(t,e).length}:function(e){return e.contains(t)};return this.filter(e)},next:function(){return y(this[0].nextElementSibling)},not:function(t){if(!t)return this;var e=C(t);return this.filter((function(n){return!e(n,t)}))},parent:function(){var t=[];return this.each((function(e){e&&e.parentNode&&t.push(e.parentNode)})),O(t)},parents:function(t){var n,r=[];return this.each((function(i){for(n=i;n&&n.parentNode&&n!==e.body.parentNode;)n=n.parentNode,(!t||t&&x(n,t))&&r.push(n)})),O(r)},prev:function(){return y(this[0].previousElementSibling)},siblings:function(){var t=this.parent().children(),e=this[0];return t.filter((function(t){return t!==e}))}}),y})?r.call(e,n,e,t):r)||(t.exports=i)},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(1),a=n.n(o),s=n(27),l=n(0),c=n(3);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=a.a.Model.extend({defaults:{name:"",property:"",type:"",defaults:"",info:"",value:"",icon:"",functionName:"",status:"",visible:!0,fixedValues:["initial","inherit"],full:0,important:0,toRequire:0,requires:null,requiresParent:null},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.get("id")||"",r=this.get("name")||"";!this.get("property")&&this.set("property",(r||n).replace(/ /g,"-"));var i=this.get("property");!this.get("id")&&this.set("id",i),!r&&this.set("name",Object(c.c)(i).replace(/-/g," ")),d.callInit(this,t,e)},init:function(){},clearValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.set({value:void 0},t),this},setValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.parseValue(t);this.set(r,h({},n,{avoidStore:1})),e&&(this.set("value","",n),this.set(r,n))},setValueFromInput:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.setValue(t,e,h({},n,{fromInput:1}))},parseValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={value:t},r="!important";if(Object(l.isString)(t)&&-1!==t.indexOf(r)&&(n.value=t.replace(r,"").trim(),n.important=1),!this.get("functionName")&&!e.complete)return n;var i=[],o="".concat(n.value),a=o.indexOf("(")+1,s=o.lastIndexOf(")"),c=o.substring(0,a-1);if(c&&(n.functionName=c),i.push(a),s>=0&&i.push(s),n.value=String.prototype.substring.apply(o,i),e.numeric){var u=parseFloat(n.value);n.unit=n.value.replace(u,""),n.value=u}return n},getDefaultValue:function(){return this.get("defaults")},getFullValue:function(t){var e=this.get("functionName"),n=Object(l.isUndefined)(t)?this.get("value"):t,r=!Object(l.isUndefined)(n);return e&&r&&(n="".concat(e,"(").concat(n,")")),r&&this.get("important")&&(n="".concat(n," !important")),n||""}},{callParentInit:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.prototype.initialize.apply(e,[n,h({},r,{skipInit:1})])},callInit:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!n.skipInit&&t.init(e,n)}}),f=d;function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var g=f.extend({defaults:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},f.prototype.defaults,{detached:0,properties:[],separator:" "}),initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f.callParentInit(f,this,t,e);var r=this.get("properties")||[],i=n(22).default;this.set("properties",new i(r)),this.listenTo(this,"change:value",this.updateValues),f.callInit(this,t,e)},clearValue:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.get("properties").each((function(t){return t.clearValue()})),f.prototype.clearValue.apply(this,arguments)},updateValues:function(){var t=this.getFullValue().split(this.getSplitSeparator());this.get("properties").each((function(e,n){var r=t.length;t[n]||t[n%r+(1!=r&&r%2?1:0)]}))},getSplitSeparator:function(){return new RegExp("".concat(this.get("separator"),"(?![^\\(]*\\))"))},getDefaultValue:function(t){var e=this.get("defaults");return e&&!t?e:(e="",this.get("properties").each((function(t,n){return e+="".concat(t.getDefaultValue()," ")})),e.trim())},getFullValue:function(){return this.get("detached")?"":this.get("properties").getFullValue()},getPropertyAt:function(t){return this.get("properties").at(t)}}),v=a.a.Model.extend({defaults:{index:"",value:"",values:{},active:!1,preview:!1,properties:[]},initialize:function(){var t=this,e=this.get("properties"),n=this.get("value");if(this.set("properties",e instanceof Q?e:new Q(e)),this.get("properties").forEach((function(e){var n=t.collection;e.parent=n&&n.property})),!n){var r="",i=this.get("values");for(var o in i)r+=" "+i[o];this.set("value",r.trim())}},getPropertyAt:function(t){return this.get("properties").at(t)},getPropertyValue:function(t){var e="";return this.get("properties").each((function(n){n.get("property")==t&&(e=n.getFullValue())})),e},getFullValue:function(){var t=[];return this.get("properties").each((function(e){return t.push(e.getFullValue())})),t.join(" ")}});function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=a.a.Collection.extend({model:v,initialize:function(){this.idx=1,this.on("add",this.onAdd),this.on("reset",this.onReset)},onAdd:function(t,e,n){n.noIncrement||t.set("index",this.idx++)},onReset:function(){this.idx=1},getSeparator:function(){var t=this.property;return t?t.get("layerSeparator"):", "},getLayersFromValue:function(t){var e=this,n=[];return t.replace(/\(([\w\s,.]*)\)/g,(function(e){var n=e.replace(/,\s*/g,",");t=t.replace(e,n)})),(t?t.split(this.getSeparator()):[]).forEach((function(t){n.push({properties:e.properties.parseValue(t)})})),n},getLayersFromStyle:function(t){var e=[],n=this.properties;n.pluck("property");return n.each((function(n){var r=t[n.get("property")];(r?r.split(", "):[]).forEach((function(t,r){t=n.parseValue(t.trim()).value;var i=e[r],o=y({},n.attributes,{},{value:t});i?i.properties.push(o):e[r]={properties:[o]}}))})),e.forEach((function(t){var e=t.properties.map((function(t){return t.property}));n.each((function(n){var r=n.get("property");e.indexOf(r)<0&&t.properties.push(y({},n.attributes))}))})),e},active:function(t){this.each((function(t){return t.set("active",0)}));var e=this.at(t);e&&e.set("active",1)},getFullValue:function(){var t=[];return this.each((function(e){return t.push(e.getFullValue())})),t.join(this.getSeparator())},getPropertyValues:function(t){var e=[];return this.each((function(n){var r=n.getPropertyValue(t);r&&e.push(r)})),e.join(", ")}});function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var x=g.extend({defaults:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},g.prototype.defaults,{layers:[],layerSeparator:", ",preview:0}),initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.callParentInit(g,this,t,e);var n=this.get("layers"),r=new b(n);r.property=this,r.properties=this.get("properties"),this.set("layers",r),g.callInit(this,t,e)},getLayers:function(){return this.get("layers")},getCurrentLayer:function(){return this.getLayers().filter((function(t){return t.get("active")}))[0]},getFullValue:function(){return this.get("detached")?"":this.get("layers").getFullValue()},getLayersFromTarget:function(t){}}),C=a.a.View.extend({template:function(t){var e=this.pfx;return'\n      <div class="'.concat(e,'label">\n        ').concat(this.templateLabel(t),'\n      </div>\n      <div class="').concat(this.ppfx,'fields">\n        ').concat(this.templateInput(t),"\n      </div>\n    ")},templateLabel:function(t){var e=this.pfx,n=this.em,r=t.parent,i=t.attributes,o=i.icon,a=void 0===o?"":o,s=i.info,l=void 0===s?"":s,c=i.id,u=i.name,h=n&&n.t("styleManager.properties.".concat(c))||u;return'\n      <span class="'.concat(e,"icon ").concat(a,'" title="').concat(l,'">\n        ').concat(h,"\n      </span>\n      ").concat(r?"":'<b class="'.concat(e,'clear" ').concat("data-clear-style",">&Cross;</b>"),"\n    ")},templateInput:function(t){return'\n      <div class="'.concat(this.ppfx,'field">\n        <input placeholder="').concat(t.getDefaultValue(),'"/>\n      </div>\n    ')},events:i()({change:"inputValueChanged"},"click [".concat("data-clear-style","]"),"clear"),initialize:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(l.bindAll)(this,"targetUpdated"),this.config=e.config||{};var n=this.config.em;this.em=n,this.pfx=this.config.stylePrefix||"",this.ppfx=this.config.pStylePrefix||"",this.target=e.target||{},this.propTarget=e.propTarget||{},this.onChange=e.onChange,this.onInputRender=e.onInputRender||{},this.customValue=e.customValue||{};var r=this.model;this.property=r.get("property"),this.input=null;var i=this.pfx;this.inputHolderId="#"+i+"input-holder",this.sector=r.collection&&r.collection.sector,r.view=this,r.get("value")||r.set("value",r.getDefaultValue()),n&&n.on("update:component:style:".concat(this.property),this.targetUpdated);var o=r.get("requires");o&&Object.keys(o).forEach((function(e){n&&n.on("component:styleUpdate:".concat(e),t.targetUpdated)})),this.listenTo(this.propTarget,"update styleManager:update",this.targetUpdated),this.listenTo(r,"destroy remove",this.remove),this.listenTo(r,"change:value",this.modelValueChanged),this.listenTo(r,"targetUpdated",this.targetUpdated),this.listenTo(r,"change:visible",this.updateVisibility),this.listenTo(r,"change:status",this.updateStatus);var a=this.init&&this.init.bind(this);a&&a()},updateStatus:function(){var t=this.model,e=t.get("status"),n=t.parent,r=this.pfx,i=this.ppfx,o=this.config,a="".concat(i,"four-color"),s="".concat(i,"color-warn"),l=this.$el.children(".".concat(r,"label")),c=this.getClearEl(),u=c?c.style:{};switch(l.removeClass("".concat(a," ").concat(s)),u.display="none",e){case"updated":!n&&l.addClass(a),o.clearProperties&&(u.display="inline");break;case"computed":l.addClass(s)}},clear:function(t){var e=this;t&&t.stopPropagation(),this.model.clearValue(),setTimeout((function(){return e.targetUpdated()}))},getClearEl:function(){return this.clearEl||(this.clearEl=this.el.querySelector("[".concat("data-clear-style","]"))),this.clearEl},getTarget:function(){return this.getTargetModel()},getTargetModel:function(){return this.propTarget&&this.propTarget.model},getHelperModel:function(){return this.propTarget&&this.propTarget.helper},inputValueChanged:function(t){t&&t.stopPropagation(),this.model.setValue(this.getInputValue(),1,{fromInput:1}),this.elementUpdated()},elementUpdated:function(){this.setStatus("updated")},setStatus:function(t){this.model.set("status",t);var e=this.model.parent;e&&t&&e.set("status",t)},emitUpdateTarget:Object(l.debounce)((function(){var t=this.config.em;t&&t.trigger("styleManager:update:target",this.getTarget())})),targetUpdated:function(){if(this.emitUpdateTarget(),this.checkVisibility()){var t=this.config,e=t.em,n=this.model,r=n.get("property"),i="",o="",a=this.getTargetValue({ignoreDefault:1}),s=n.getDefaultValue(),l=this.getComputedValue();a?(i=a,t.highlightChanged&&(o="updated")):l&&t.showComputed&&l!=s?(i=l,t.highlightComputed&&(o="computed")):(i=s,o=""),n.setValue(i,0,{fromTarget:1}),this.setStatus(o),e&&(e.trigger("styleManager:change",this,r,i),e.trigger("styleManager:change:".concat(r),this,i))}},checkVisibility:function(){var t=1;return this.config.hideNotStylable&&(this.isTargetStylable()&&this.isComponentStylable()?this.show():(this.hide(),t=0),this.sector&&this.sector.trigger("updateVisibility")),t},getTargetValue:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.model,r=this.getTargetModel(),i=this.customValue;if(!r)return t;if((t=r.getStyle()[n.get("property")])||e.ignoreDefault||(t=n.getDefaultValue()),"function"==typeof i&&!e.ignoreCustomValue){var o=n.collection.indexOf(n),a=i(this,o);a&&(t=a)}return t},getComputedValue:function(){var t=this.propTarget,e=t.computed||{},n=t.computedDefault||{},r=this.config.avoidComputed||[],i=this.model.get("property"),o=r.indexOf(i)<0,a=e[i],s=n[Object(c.b)(i)];return e&&o&&s!==a&&a},getInputValue:function(){var t=this.getInputEl();return t?t.value:""},modelValueChanged:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.config.em,i=this.model,o=i.getFullValue(),a=this.getTarget(),s=i.get("property"),l=this.onChange;if(n.fromInput||this.setValue(o),a&&this.isTargetStylable()&&this.isComponentStylable()){n.fromTarget||(l&&!n.fromParent?l(a,this,n):this.updateTargetStyle(o,null,n));var c=r&&r.getSelected();r&&c&&(r.trigger("component:update",c),r.trigger("component:styleUpdate",c,s),r.trigger("component:styleUpdate:".concat(s),c))}},updateTargetStyle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e||this.model.get("property"),i=this.getTarget(),o=i.getStyle();t?o[r]=t:delete o[r],i.setStyle(o,n);var a=this.getHelperModel();a&&a.setStyle(o,n)},isTargetStylable:function(t){var e=t||this.getTarget(),n=this.model,r=n.get("id"),i=n.get("property"),o=n.get("toRequire"),a=e.get("unstylable"),s=e.get("stylable-require"),c=n.get("requires"),u=n.get("requiresParent"),h=this.sector?this.sector.collection:null,d=this.em?this.em.getSelected():null,f=e.get("stylable");if(Object(l.isArray)(f)&&(f=f.indexOf(i)>=0),Object(l.isArray)(a)&&(f=a.indexOf(i)<0),o&&(f=!t||s&&(s.indexOf(r)>=0||s.indexOf(i)>=0)),h&&c){var p=Object.keys(c);h.each((function(t){t.get("properties").each((function(t){if(Object(l.includes)(p,t.id)){var e=c[t.id];f=f&&Object(l.includes)(e,t.get("value"))}}))}))}if(u){var g=d&&d.parent(),v=g&&g.getEl();if(v){var m=window.getComputedStyle(v);Object(l.each)(u,(function(t,e){f=f&&m[e]&&Object(l.includes)(t,m[e])}))}else f=!1}return f},isComponentStylable:function(){var t=this.em,e=t&&t.getSelected();return!e||this.isTargetStylable(e)},setRawValue:function(t){this.setValue(this.model.parseValue(t))},setValue:function(t){var e=this.model,n=Object(l.isUndefined)(t)?e.getDefaultValue():t,r=this.getInputEl();r&&(r.value=n)},getInputEl:function(){return this.input||(this.input=this.el.querySelector("input")),this.input},updateVisibility:function(){this.el.style.display=this.model.get("visible")?"block":"none"},show:function(){this.model.set("visible",1)},hide:function(){this.model.set("visible",0)},cleanValue:function(){this.setValue("")},clearCached:function(){this.clearEl=null,this.input=null,this.$input=null},render:function(){this.clearCached();var t=this.pfx,e=this.model,n=this.el,r=e.get("property"),i=e.get("full"),o="".concat(t,"property");n.innerHTML=this.template(e),n.className="".concat(o," ").concat(t).concat(e.get("type")," ").concat(o,"__").concat(r),n.className+=i?" ".concat(o,"--full"):"",this.updateStatus();var a=this.onRender&&this.onRender.bind(this);a&&a(),this.setValue(e.get("value"),{targetUpdate:1})}}),O=a.a.$,k=C.extend({templateInput:function(){var t=this.pfx;return'\n      <div class="'.concat(t,"field ").concat(t,'composite">\n        <span id="').concat(t,'input-holder"></span>\n      </div>\n    ')},inputValueChanged:function(){if(!this.model.get("detached")){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];C.prototype.inputValueChanged.apply(this,e)}},clear:function(t){var e=this.properties;e&&e.forEach((function(t){return t.clear()})),C.prototype.clear.apply(this,arguments)},onRender:function(){var t=this.model,e=t.get("properties")||[];if(this.properties=[],e.length&&(this.$input||(this.$input=O('<input type="hidden" value="0">'),this.input=this.$input.get(0)),this.props||(this.props=t.get("properties")),!this.$props)){this.props.each((function(e,n){e&&"composite"==e.get("type")&&(this.props.remove(e),console.warn("Nested composite types not yet allowed.")),e.parent=t}),this);var r=new(0,n(16).default)(this.getPropsConfig());this.$props=r.render().$el,this.properties=r.properties,this.$el.find("#".concat(this.pfx,"input-holder")).append(this.$props)}},getPropsConfig:function(t){var e=this,n=this.model,r={config:this.config,collection:this.props,target:this.target,propTarget:this.propTarget,onChange:function(t,e,r){n.set("value",n.getFullValue(),r)},customValue:function(t,n){return e.valueOnIndex(n,t)}};return n.get("detached")&&delete r.onChange,r},valueOnIndex:function(t,e){var n,r=this.getTargetValue({ignoreDefault:1});r?n=r.split(this.model.getSplitSeparator())[t]:n=e&&e.getTargetValue({ignoreCustomValue:1,ignoreDefault:1});return n},clearCached:function(){C.prototype.clearCached.apply(this,arguments),this.$input=null,this.props=null,this.$props=null}}),S=n(16),T=a.a.View.extend({events:{click:"active","click [data-close-layer]":"remove","mousedown [data-move-layer]":"initSorter","touchstart [data-move-layer]":"initSorter"},template:function(t){var e=this.pfx,n=this.ppfx,r=this.em,i="".concat(r&&r.t("styleManager.layer")," ").concat(t.get("index"));return'\n      <div id="'.concat(e,'move" class="').concat(n,'no-touch-actions" data-move-layer>\n        <i class="fa fa-arrows"></i>\n      </div>\n      <div id="').concat(e,'label">').concat(i,'</div>\n      <div id="').concat(e,'preview-box">\n      \t<div id="').concat(e,'preview" data-preview></div>\n      </div>\n      <div id="').concat(e,'close-layer" class="').concat(e,'btn-close" data-close-layer>\n        &Cross;\n      </div>\n      <div id="').concat(e,'inputs" data-properties></div>\n      <div style="clear:both"></div>\n    ')},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.model;this.stackModel=t.stackModel||{},this.config=t.config||{},this.em=this.config.em,this.pfx=this.config.stylePrefix||"",this.ppfx=this.config.pStylePrefix||"",this.sorter=t.sorter||null,this.propsConfig=t.propsConfig||{},this.customPreview=t.onPreview,this.listenTo(e,"destroy remove",this.remove),this.listenTo(e,"change:active",this.updateVisibility),this.listenTo(e.get("properties"),"change",this.updatePreview),e.view=this,e.set({droppable:0,draggable:1}),this.$el.data("model",e)},initSorter:function(t){this.sorter&&this.sorter.startSort(this.el)},remove:function(t){t&&t.stopPropagation&&t.stopPropagation();var e=this.model,n=e.collection,r=this.stackModel;a.a.View.prototype.remove.apply(this,arguments),n.contains(e)&&n.remove(e),r&&r.set&&(r.set({stackIndex:null},{silent:!0}),r.trigger("updateValue"))},onPreview:function(t){var e=t.split(" "),n=[];return this.model.get("properties").each((function(t,r){var i=e[r]||"";if(i&&"integer"==t.get("type")){var o=parseInt(i,10),a=i.replace(o,"");i=(o=(o=(o=isNaN(o)?0:o)>3?3:o)<-3?-3:o)+a}n.push(i)})),n.join(" ")},updatePreview:function(){var t=this.stackModel,e=this.customPreview,n=this.getPreviewEl(),r=this.model.getFullValue(),i=e?e(r):this.onPreview(r);i&&t&&n&&(n.style[t.get("property")]=i)},getPropertiesWrapper:function(){return this.propsWrapEl||(this.propsWrapEl=this.el.querySelector("[data-properties]")),this.propsWrapEl},getPreviewEl:function(){return this.previewEl||(this.previewEl=this.el.querySelector("[data-preview]")),this.previewEl},active:function(){var t=this.model,e=t.collection;e.active(e.indexOf(t))},updateVisibility:function(){var t=this.pfx,e=this.getPropertiesWrapper(),n=this.model.get("active");e.style.display=n?"":"none",this.$el[n?"addClass":"removeClass"]("".concat(t,"active"))},render:function(){var t=this.propsConfig,e=this.model,n=this.el,r=this.pfx,i=e.get("preview"),o=new S.default({collection:e.get("properties"),config:this.config,target:t.target,customValue:t.customValue,propTarget:t.propTarget,onChange:t.onChange}).render().el;return n.innerHTML=this.template(e),n.className="".concat(r,"layer").concat(i?"":" ".concat(r,"no-preview")),this.getPropertiesWrapper().appendChild(o),this.updateVisibility(),this.updatePreview(),this}}),P=a.a.View.extend({initialize:function(t){this.config=t.config||{},this.stackModel=t.stackModel,this.preview=t.preview,this.pfx=this.config.stylePrefix||"",this.ppfx=this.config.pStylePrefix||"",this.propsConfig=t.propsConfig;var e=this.pfx,n=this.ppfx,r=this.collection;this.className="".concat(e,"layers ").concat(n,"field"),this.listenTo(r,"add",this.addTo),this.listenTo(r,"deselectAll",this.deselectAll),this.listenTo(r,"reset",this.render);var i=this.config.em||"",o=i?i.get("Utils"):"";this.sorter=o?new o.Sorter({container:this.el,ignoreViewChildren:1,containerSel:".".concat(e,"layers"),itemSel:".".concat(e,"layer"),pfx:this.config.pStylePrefix}):"",r.view=this,this.$el.data("model",r),this.$el.data("collection",r)},addTo:function(t){var e=this.collection.indexOf(t);this.addToCollection(t,null,e)},addToCollection:function(t,e,n){var r=e||null,i=this.stackModel,o=this.config,a=this.sorter,s=this.propsConfig;void 0!==this.preview&&t.set("preview",this.preview);var l=new T({model:t,config:o,sorter:a,stackModel:i,propsConfig:s}).render().el;if(r)r.appendChild(l);else if(void 0!==n){var c="before";this.$el.children().length==n&&(n--,c="after"),n<0?this.$el.append(l):this.$el.children().eq(n)[c](l)}else this.$el.append(l);return l},deselectAll:function(){this.$el.find("."+this.pfx+"layer").removeClass(this.pfx+"active")},render:function(){var t=document.createDocumentFragment();return this.$el.empty(),this.collection.each((function(e){this.addToCollection(e,t)}),this),this.$el.append(t),this.$el.attr("class",this.className),this.sorter&&(this.sorter.plh=null),this}}),j=k.extend({templateInput:function(){var t=this.pfx;this.ppfx;return'\n      <div class="'.concat(t,"field ").concat(t,'stack">\n        <button type="button" id="').concat(t,'add" data-add-layer>+</button>\n        <div data-layers-wrapper></div>\n      </div>\n    ')},init:function(){var t=this.model;this.pfx;t.set("stackIndex",null),this.events["click [data-add-layer]"]="addLayer",this.listenTo(t,"change:stackIndex",this.indexChanged),this.listenTo(t,"updateValue",this.inputValueChanged),this.delegateEvents()},clear:function(t){t&&t.stopPropagation(),this.model.get("layers").reset(),this.model.clearValue(),this.targetUpdated()},targetUpdated:function(){if(this.model.get("detached"))this.checkVisibility();else{for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];k.prototype.targetUpdated.apply(this,e)}this.refreshLayers()},getLayers:function(){return this.model.get("layers")},indexChanged:function(t){var e=this.model;this.getLayers().active(e.get("stackIndex"))},addLayer:function(){var t=this.model,e=this.getLayers(),n=t.get("properties").deepClone();n.each((function(t){return t.set("value","")}));var r=e.add({properties:n});this.inputValueChanged(),t.set("stackIndex",e.indexOf(r))},inputValueChanged:function(){var t=this.model;this.elementUpdated(),t.get("detached")?t.get("properties").each((function(t){return t.trigger("change:value")})):t.set("value",this.getLayerValues())},setValue:function(){},getLayerValues:function(){return this.getLayers().getFullValue()},refreshLayers:function(){var t=[],e=this.model,n=this.getLayers(),r=e.get("detached"),i=this.getTarget();if(r){var o=i?i.getStyle():{};t=n.getLayersFromStyle(o)}else{var a=this.getTargetValue();a=a==e.getDefaultValue()?"":a,t=n.getLayersFromValue(a)}var s=e.getLayersFromTarget(i)||t;n.reset(),n.add(s),e.set({stackIndex:null},{silent:!0})},onRender:function(){var t=this,e=this.model,r=this.el.querySelector("[data-layers-wrapper]"),i=n(16).default,o={target:this.target,propTarget:this.propTarget,onChange:function(n,r,i){var o=r.model;if(e.get("detached")){var a=o.get("property"),s=t.getLayers().getPropertyValues(a);r.updateTargetStyle(s,null,i)}else e.set("value",e.getFullValue(),i)}},a=new P({collection:this.getLayers(),stackModel:e,preview:e.get("preview"),config:this.config,propsConfig:o}).render().el;new i({target:this.target,collection:this.model.get("properties"),stackModel:e,config:this.config,onChange:o.onChange,propTarget:o.propTarget,customValue:o.customValue}).render(),r.appendChild(a)}}),E=a.a.$,M=C.extend({templateInput:function(){var t=this.pfx,e=this.em;return'\n    <div class="'.concat(t,"field ").concat(t,"file\">\n      <div id='").concat(t,"input-holder'>\n        <div class=\"").concat(t,'btn-c">\n          <button class="').concat(t,'btn" id="').concat(t,'images" type="button">\n            ').concat(e.t("styleManager.fileButton"),'\n          </button>\n        </div>\n        <div style="clear:both;"></div>\n      </div>\n      <div id="').concat(t,'preview-box">\n        <div id="').concat(t,'preview-file"></div>\n        <div id="').concat(t,'close">&Cross;</div>\n      </div>\n    </div>\n    ')},init:function(){var t=this.em;this.modal=t.get("Modal"),this.am=t.get("AssetManager"),this.events["click #"+this.pfx+"close"]="removeFile",this.events["click #"+this.pfx+"images"]="openAssetManager",this.delegateEvents()},onRender:function(){if(!this.$input){var t=this.model.getDefaultValue();this.$input=E('<input placeholder="'.concat(t,'">'))}this.$preview||(this.$preview=this.$el.find("#"+this.pfx+"preview-file")),this.$previewBox||(this.$previewBox=this.$el.find("#"+this.pfx+"preview-box")),this.setValue(this.componentValue,0)},clearCached:function(){C.prototype.clearCached.apply(this,arguments),this.$preview=null,this.$previewBox=null},setValue:function(t,e){C.prototype.setValue.apply(this,arguments),this.setPreviewView(t&&t!=this.model.getDefaultValue()),this.setPreview(t)},setPreviewView:function(t){var e=this.$previewBox;e&&e[t?"addClass":"removeClass"]("".concat(this.pfx,"show"))},spreadUrl:function(t){this.model.set("value",t),this.setPreviewView(1)},setPreview:function(t){var e=this.$preview;t=t&&t.indexOf("url(")<0?"url(".concat(t,")"):t,e&&e.css("background-image",t)},cleanValue:function(){this.setPreviewView(0),this.model.set({value:""},{silent:!0})},removeFile:function(){this.model.set("value",this.model.getDefaultValue());for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];C.prototype.cleanValue.apply(this,e),this.setPreviewView(0)},openAssetManager:function(t){var e=this,n=this.em,r=this.modal,i=n?n.get("Editor"):"";i&&i.runCommand("open-assets",{types:["image"],accept:"image/*",target:this.getTargetModel(),onClick:function(){},onDblClick:function(){},onSelect:function(t){r.close();var n=Object(l.isString)(t)?t:t.get("src");e.spreadUrl(n)}})}}),D=a.a.$,A=C.extend({templateInput:function(){return""},init:function(){var t=this.model;this.listenTo(t,"change:unit",this.modelValueChanged),this.listenTo(t,"el:change",this.elementUpdated),this.listenTo(t,"change:units",this.render)},setValue:function(t){var e=this.model.parseValue(t);t="".concat(e.value).concat(e.unit),this.inputInst.setValue(t,{silent:1})},onRender:function(){var t=this.ppfx;if(!this.input){var e=this.model.input;e.ppfx=t,e.render(),this.el.querySelector(".".concat(t,"fields")).appendChild(e.el),this.$input=e.inputEl,this.unit=e.unitEl,this.$unit=D(this.unit),this.input=this.$input.get(0),this.inputInst=e}},clearCached:function(){C.prototype.clearCached.apply(this,arguments),this.unit=null,this.$unit=null}}),L=n(32);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F=A.extend({setValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=I({},e,{silent:1}),this.inputInst.setValue(t,e)},onRender:function(){if(!this.input){var t=this.ppfx,e=new L.a({target:this.target,model:this.model,ppfx:t}).render();this.el.querySelector(".".concat(t,"fields")).appendChild(e.el),this.$input=e.inputEl,this.$color=e.colorEl,this.input=this.$input.get(0),this.inputInst=e}}}),R=n(8),_=n.n(R);function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var z=f.extend({defaults:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},f.prototype.defaults,{options:[],full:1})},initialize:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];f.prototype.initialize.apply(this,e),this.listenTo(this,"change:options",this.onOptionChange)},onOptionChange:function(){this.set("list",this.get("options"))},getOptions:function(){var t=this.attributes,e=t.options,n=t.list;return e&&e.length?e:n},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.set("options",t),this},addOption:function(t){if(t){var e=this.getOptions();this.setOptions([].concat(_()(e),[t]))}return this}});function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var $=z.extend({defaults:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},z.prototype.defaults,{full:0})}}),W=(a.a.$,C.extend({templateInput:function(){var t=this.pfx,e=this.ppfx;return'\n      <div class="'.concat(e,"field ").concat(e,'select">\n        <span id="').concat(t,'input-holder"></span>\n        <div class="').concat(e,'sel-arrow">\n          <div class="').concat(e,'d-s-arrow"></div>\n        </div>\n      </div>\n    ')},initialize:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];C.prototype.initialize.apply(this,e),this.listenTo(this.model,"change:options",this.updateOptions)},updateOptions:function(){this.input=null,this.onRender()},onRender:function(){var t=this.pfx,e=this.model.getOptions();if(!this.input){var n="";e.forEach((function(t){var e=t.name||t.value,r=t.style?t.style.replace(/"/g,"&quot;"):"",i=r?'style="'.concat(r,'"'):"",o=t.value.replace(/"/g,"&quot;");n+='<option value="'.concat(o,'" ').concat(i,">").concat(e,"</option>")}));var r=this.el.querySelector("#".concat(t,"input-holder"));r.innerHTML="<select>".concat(n,"</select>"),this.input=r.firstChild}}})),B=C.extend({templateInput:function(){this.pfx;var t=this.ppfx;return'\n      <div class="'.concat(t,"field ").concat(t,'field-radio">\n      </div>\n    ')},onRender:function(){var t=this.pfx,e=this.ppfx,n="".concat(e,"radio-item-label"),r=this.model,i=r.get("property"),o=r.get("list")||r.get("options")||[];if(!this.input&&o&&o.length){var a="";o.forEach((function(r){var o=r.className?"".concat(r.className," ").concat(t,"icon ").concat(n):"",s="".concat(i,"-").concat(r.value),l=r.name||r.value,c=r.title?'title="'.concat(r.title,'"'):"";a+='\n            <div class="'.concat(e,'radio-item">\n              <input type="radio" class="').concat(t,'radio" id="').concat(s,'" name="').concat(i,'" value="').concat(r.value,'"/>\n              <label class="').concat(o||n,'" ').concat(c,' for="').concat(s,'">').concat(o?"":l,"</label>\n            </div>\n          ")}));var s=this.el.querySelector(".".concat(e,"field"));s.innerHTML='<div class="'.concat(e,'radio-items">').concat(a,"</div>"),this.input=s.firstChild}},getInputValue:function(){var t=this.getCheckedEl();return t?t.value:""},getCheckedEl:function(){var t=this.getInputEl();return t?t.querySelector("input:checked"):""},setValue:function(t){var e=this.model,n=t||e.get("value")||e.getDefaultValue(),r=this.getInputEl(),i=r?r.querySelector('[value="'.concat(n,'"]')):"";if(i)i.checked=!0;else{var o=this.getCheckedEl();o&&(o.checked=!1)}}}),U=n(28);function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var G=f.extend({defaults:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},f.prototype.defaults,{units:[],unit:"",step:1,min:"",max:""}),initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f.callParentInit(f,this,t,e);var n=this.get("unit"),r=this.get("units");this.input=new U.a({model:this}),r.length&&!n&&this.set("unit",r[0]),f.callInit(this,t,e)},clearValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.set({value:void 0,unit:void 0},t),this},parseValue:function(t){var e=f.prototype.parseValue.apply(this,arguments),n=this.input.validateInputValue(e.value,{deepCheck:1}),r=n.value,i=n.unit;return e.value=r,e.unit=i,e},getFullValue:function(){var t=this.get("value"),e=this.get("unit");return t=Object(l.isUndefined)(t)?"":t,e=!Object(l.isUndefined)(e)&&t?e:"",t="".concat(t).concat(e),f.prototype.getFullValue.apply(this,[t])}});function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var Y=G.extend({defaults:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},G.prototype.defaults,{showInput:1})});function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var J=A.extend({events:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},A.prototype.events,{"change [type=range]":"inputValueChanged","input [type=range]":"inputValueChangedSoft",change:""})},templateInput:function(t){var e=this.ppfx;return'\n      <div class="'.concat(e,"field ").concat(e,'field-range">\n        <input type="range"\n          min="').concat(t.get("min"),'"\n          max="').concat(t.get("max"),'"\n          step="').concat(t.get("step"),'"/>\n      </div>\n    ')},getSliderEl:function(){return this.slider||(this.slider=this.el.querySelector("input[type=range]")),this.slider},inputValueChanged:function(){var t=this.model,e=t.get("step");this.getInputEl().value=this.getSliderEl().value;var n=this.getInputValue()-e;t.set("value",n,{avoidStore:1}).set("value",n+e),this.elementUpdated()},inputValueChangedSoft:function(){this.getInputEl().value=this.getSliderEl().value,this.model.set("value",this.getInputValue(),{avoidStore:1}),this.elementUpdated()},setValue:function(t){var e=this.model.parseValue(t);this.getSliderEl().value=parseFloat(e.value),A.prototype.setValue.apply(this,arguments)},onRender:function(){A.prototype.onRender.apply(this,arguments),this.model.get("showInput")||(this.inputInst.el.style.display="none")},clearCached:function(){A.prototype.clearCached.apply(this,arguments),this.slider=null}});function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var Q=e.default=a.a.Collection.extend(s.a).extend({types:[{id:"stack",model:x,view:j,isType:function(t){if(t&&"stack"==t.type)return t}},{id:"composite",model:g,view:k,isType:function(t){if(t&&"composite"==t.type)return t}},{id:"file",model:f,view:M,isType:function(t){if(t&&"file"==t.type)return t}},{id:"color",model:f,view:F,isType:function(t){if(t&&"color"==t.type)return t}},{id:"select",model:$,view:W,isType:function(t){if(t&&"select"==t.type)return t}},{id:"radio",model:z,view:B,isType:function(t){if(t&&"radio"==t.type)return t}},{id:"slider",model:Y,view:J,isType:function(t){if(t&&"slider"==t.type)return t}},{id:"integer",model:G,view:A,isType:function(t){if(t&&"integer"==t.type)return t}},{id:"base",model:f,view:C,isType:function(t){return t.type="base",t}}],deepClone:function(){var t=this.clone();return t.reset(t.map((function(t){var e=t.clone();return e.typeView=t.typeView,e}))),t},parseValue:function(t){var e=this,n=[];return t.split(" ").forEach((function(t,r){var o=e.at(r);o&&n.push(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},o.attributes,{},{value:t}))})),n},getFullValue:function(){var t="";return this.each((function(e){return t+="".concat(e.getFullValue()," ")})),t.trim()}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r).a.$;e.default={startSelectPosition:function(t,e){var n=this;this.isPointed=!1;var r=this.editorModel.get("Utils");r&&!this.sorter&&(this.sorter=new r.Sorter({container:this.getCanvasBody(),placer:this.canvas.getPlacerEl(),containerSel:"*",itemSel:"*",pfx:this.ppfx,direction:"a",document:e,wmargin:1,nested:1,em:this.editorModel,canvasRelative:1,scale:function(){return n.em.getZoomDecimal()}})),t&&this.sorter.startSort(t)},getOffsetDim:function(){var t=this.offset(this.canvas.getFrameEl()),e=this.offset(this.canvas.getElement());return{top:t.top-e.top,left:t.left-e.left}},stopSelectPosition:function(){this.posTargetCollection=null,this.posIndex="after"==this.posMethod&&0!==this.cDim.length?this.posIndex+1:this.posIndex,this.sorter&&(this.sorter.moved=0,this.sorter.endMove()),this.cDim&&(this.posIsLastEl=0!==this.cDim.length&&"after"==this.posMethod&&this.posIndex==this.cDim.length,this.posTargetEl=0===this.cDim.length?i(this.outsideElem):!this.posIsLastEl&&this.cDim[this.posIndex]?i(this.cDim[this.posIndex][5]).parent():i(this.outsideElem),this.posTargetModel=this.posTargetEl.data("model"),this.posTargetCollection=this.posTargetEl.data("model-comp"))},enable:function(){this.startSelectPosition()},nearFloat:function(t,e,n){var r=t||0,i=e||"before",o=n.length,a=0!==o&&"after"==i&&r==o;return 0!==o&&(!a&&!n[r][4]||n[r-1]&&!n[r-1][4]||a&&!n[r-1][4])?1:0},run:function(){this.enable()},stop:function(){this.stopSelectPosition(),this.$wrapper.css("cursor",""),this.$wrapper.unbind()}}},function(t,e,n){"use strict";var r=n(34);window.Promise=window.Promise||r.a,e.a="function"==typeof fetch?fetch.bind():function(t,e){return new r.a((function(n,i){var o=new XMLHttpRequest;for(var a in o.open(e.method||"get",t),o.withCredentials="include"==e.credentials,e.headers||{})o.setRequestHeader(a,e.headers[a]);o.onload=function(t){return n({status:o.status,statusText:o.statusText,text:function(){return r.a.resolve(o.responseText)}})},o.onerror=i,o.upload&&e.onProgress&&(o.upload.onprogress=e.onProgress),e.body?o.send(e.body):o.send()}))}},function(t,e,n){"use strict";var r=n(6),i=n.n(r),o=n(0);e.a=function(t){var e=t;return{compTypes:"",modelAttrStart:"data-gjs-",splitPropsFromAttr:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={},r={};return Object(o.each)(e,(function(e,i){if(0===i.indexOf(t.modelAttrStart)){var a=i.replace("data-gjs-",""),s=e.length,l=e&&Object(o.isString)(e),c=l&&e.substr(0,1),u=l&&e.substr(s-1);e="false"!==(e="true"===e||e)&&e;try{e="{"==c&&"}"==u||"["==c&&"]"==u?JSON.parse(e):e}catch(t){}n[a]=e}else r[i]=e})),{props:n,attrs:r}},parseStyle:function(t){for(var e={},n=t.split(";"),r=0,i=n.length;r<i;r++){var o=n[r].trim();if(o){var a=o.split(":");e[a[0].trim()]=a.slice(1).join(":").trim()}}return e},parseClass:function(t){for(var e=[],n=t.split(" "),r=0,i=n.length;r<i;r++){var o=n[r].trim();o&&e.push(o)}return e},parseNode:function(n){for(var r=[],o=n.childNodes,a=0,s=o.length;a<s;a++){var l=o[a],c=l.attributes||[],u=c.length,h=r[r.length-1],d=l.childNodes.length,f=this.compTypes,p={};if(f){var g="",v=l.getAttribute&&l.getAttribute("".concat("data-gjs-","type"));if(v)p={type:v};else{for(var m=0;m<f.length;m++){var y=f[m];if(g=y.model.isComponent(l)){"object"!==i()(g)&&(g={type:y.id});break}}p=g}}p.tagName||(p.tagName=l.tagName?l.tagName.toLowerCase():""),u&&(p.attributes={});for(var b=0;b<u;b++){var w=c[b].nodeName,x=c[b].nodeValue;if("style"==w)p.style=this.parseStyle(x);else if("class"==w)p.classes=this.parseClass(x);else{if("contenteditable"==w)continue;if(0===w.indexOf("data-gjs-")){var C=w.replace("data-gjs-",""),O=x.length,k=x&&x.substr(0,1),S=x&&x.substr(O-1);x="false"!==(x="true"===x||x)&&x;try{x="{"==k&&"}"==S||"["==k&&"]"==S?JSON.parse(x):x}catch(t){}p[C]=x}else p.attributes[w]=x}}if(d&&!p.components){var T=l.childNodes[0];1===d&&3===T.nodeType?(!p.type&&(p.type="text"),p.content=T.nodeValue):p.components=this.parseNode(l)}if("textnode"==p.type){if(h&&"textnode"==h.type){h.content+=p.content;continue}if(!t.keepEmptyTextNodes){var P=l.nodeValue;if(" "!=P&&!P.trim())continue}}var j=p.components;if(!p.type&&j){for(var E=1,M=0,D=0;D<j.length;D++){var A=j[D],L=A.type;if(["text","textnode"].indexOf(L)<0&&e.textTags.indexOf(A.tagName)<0){E=0;break}"textnode"==L&&(M=1)}E&&M&&(p.type="text")}(p.tagName||"textnode"==p.type)&&r.push(p)}return r},parse:function(t,n){var r=e.em&&e.em.get("Config")||{},i={html:"",css:""},o=document.createElement("div");o.innerHTML=t;var a=o.querySelectorAll("script"),s=a.length;if(!r.allowScripts)for(;s--;)a[s].parentNode.removeChild(a[s]);if(n){for(var l="",c=o.querySelectorAll("style"),u=c.length;u--;)l=c[u].innerHTML+l,c[u].parentNode.removeChild(c[u]);l&&(i.css=n.parse(l))}var h=this.parseNode(o);return 1==h.length&&(h=h[0]),i.html=h,i}}}},function(t,e,n){"use strict";var r=n(0),i=n(1),o=n.n(i),a=o.a.Model,s=o.a.View;e.a={types:[],initialize:function(t,e){var n=this;this.model=function(){var t,e,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i&&i.type){var a=n.getBaseType();t=(r=n.getType(i.type))?r.model:a.model,e=r?r.view:a.view}else{var s=n.recognizeType(i);t=(r=s.type).model,e=r.view,i=s.attributes}var l=new t(i,o);return l.typeView=e,l};var r=this.init&&this.init.bind(this);r&&r()},recognizeType:function(t){for(var e=this.getTypes(),n=0;n<e.length;n++){var r=e[n],i=r.isType(t);if(i="boolean"==typeof i&&i?{type:r.id}:i)return{type:r,attributes:i}}return{type:this.getBaseType(),attributes:t}},getBaseType:function(){var t=this.getTypes();return t[t.length-1]},getTypes:function(){return this.types},getType:function(t){for(var e=this.getTypes(),n=0;n<e.length;n++){var r=e[n];if(r.id===t)return r}},addType:function(t,e){var n=this.getType(t),i=this.getBaseType(),o=n?n.model:i.model,l=n?n.view:i.view,c=e.model,u=e.view,h=e.isType;c=c instanceof a||Object(r.isFunction)(c)?c:o.extend(c||{}),u=u instanceof s||Object(r.isFunction)(u)?u:l.extend(u||{}),n?(n.model=c,n.view=u,n.isType=h||n.isType):(e.id=t,e.model=c,e.view=u,e.isType=h||function(e){if(e&&e.type==t)return!0},this.getTypes().unshift(e))}}},function(t,e,n){"use strict";var r=n(1),i=n.n(r),o=n(0),a=n(3),s=n(15);i.a.$;e.a=s.a.extend({events:{"change input":"handleChange","change select":"handleUnitChange","click [data-arrow-up]":"upArrowClick","click [data-arrow-down]":"downArrowClick","mousedown [data-arrows]":"downIncrement"},template:function(){var t=this.ppfx;return'\n      <span class="'.concat(t,'input-holder"></span>\n      <span class="').concat(t,'field-units"></span>\n      <div class="').concat(t,'field-arrows" data-arrows>\n        <div class="').concat(t,'field-arrow-u" data-arrow-up></div>\n        <div class="').concat(t,'field-arrow-d" data-arrow-down></div>\n      </div>\n    ')},inputClass:function(){var t=this.ppfx;return this.opts.contClass||"".concat(t,"field ").concat(t,"field-integer")},initialize:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];s.a.prototype.initialize.apply(this,arguments),Object(o.bindAll)(this,"moveIncrement","upIncrement"),this.doc=document,this.listenTo(this.model,"change:unit",this.handleModelChange)},setValue:function(t,e){var n=e||{},r=this.validateInputValue(t,{deepCheck:1}),i={value:r.value};(r.unit||r.force)&&(i.unit=r.unit),this.model.set(i,n),n.silent&&this.handleModelChange()},handleChange:function(t){t.stopPropagation(),this.setValue(this.getInputEl().value),this.elementUpdated()},handleUnitChange:function(t){t.stopPropagation();var e=this.getUnitEl().value;this.model.set("unit",e),this.elementUpdated()},elementUpdated:function(){this.model.trigger("el:change")},handleModelChange:function(){var t=this.model;this.getInputEl().value=t.get("value");var e=this.getUnitEl();e&&(e.value=t.get("unit")||"")},getUnitEl:function(){if(!this.unitEl){var t=this.model,e=t.get("units")||[];if(e.length){var n=[];e.forEach((function(e){var r=e==t.get("unit")?"selected":"";n.push("<option ".concat(r,">").concat(e,"</option>"))}));var r=document.createElement("div");r.innerHTML='<select class="'.concat(this.ppfx,'input-unit">').concat(n.join(""),"</select>"),this.unitEl=r.firstChild}}return this.unitEl},upArrowClick:function(){var t=this.model,e=t.get("step"),n=parseInt(t.get("value"),10);n=this.normalizeValue(n+e);var r=this.validateInputValue(n);t.set("value",r.value),this.elementUpdated()},downArrowClick:function(){var t=this.model,e=t.get("step"),n=parseInt(t.get("value"),10),r=this.normalizeValue(n-e),i=this.validateInputValue(r);t.set("value",i.value),this.elementUpdated()},downIncrement:function(t){t.preventDefault(),this.moved=0;var e=this.model.get("value");e=this.normalizeValue(e),this.current={y:t.pageY,val:e},Object(a.q)(this.doc,"mousemove",this.moveIncrement),Object(a.q)(this.doc,"mouseup",this.upIncrement)},moveIncrement:function(t){this.moved=1;var e=this.model,n=e.get("step"),r=this.current,i=this.normalizeValue(r.val+(r.y-t.pageY)*n);return this.prValue=this.validateInputValue(i).value,e.set("value",this.prValue,{avoidStore:1}),!1},upIncrement:function(){var t=this.model,e=t.get("step");if(Object(a.p)(this.doc,"mouseup",this.upIncrement),Object(a.p)(this.doc,"mousemove",this.moveIncrement),this.prValue&&this.moved){var n=this.prValue-e;t.set("value",n,{avoidStore:1}).set("value",n+e),this.elementUpdated()}},normalizeValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.model,r=n.get("step"),i=0;if(isNaN(t))return e;if(t=parseFloat(t),Math.floor(t)!==t){var o=r.toString().split(".")[1];i=o?o.length:0}return i?parseFloat(t.toFixed(i)):t},validateInputValue:function(t,e){var n=0,r=e||{},i=this.model,a=Object(o.isUndefined)(t)?"":t,s=i.get("units")||[],l=i.get("unit")||s.length&&s[0]||"",c=i.get("max"),u=i.get("min");if(r.deepCheck){var h=i.get("fixedValues")||[];if(a){var d=new RegExp("^"+h.join("|"),"g");if(h.length&&d.test(a))a=a.match(d)[0],l="",n=1;else{var f=a+"";a+="",a=parseFloat(a.replace(",",".")),a=isNaN(a)?"":a;var p=f.replace(a,"");Object(o.indexOf)(s,p)>=0&&(l=p)}}}return Object(o.isUndefined)(c)||""===c||(a=a>c?c:a),Object(o.isUndefined)(u)||""===u||(a=a<u?u:a),{force:n,value:a,unit:l}},render:function(){s.a.prototype.render.call(this),this.unitEl=null;var t=this.getUnitEl();return t&&this.$el.find(".".concat(this.ppfx,"field-units")).get(0).appendChild(t),this}})},function(t,e,n){"use strict";var r=n(1),i=n.n(r);e.a=i.a.View.extend({itemView:"",itemsView:"",itemType:"type",initialize:function(t,e){this.config=e||{}},addTo:function(t){this.add(t)},itemViewNotFound:function(t){var e=this.config,n=this.ns,r=e.em,i="".concat(n?"[".concat(n,"]: "):"","'").concat(t,"' type not found");r&&r.logWarning(i)},add:function(t,e){var n=this.config,r=this.reuseView,i=this.itemsView,o=void 0===i?{}:i,a=e||null,s=this.itemView,l=t.get(this.itemType);o[l]?s=o[l]:l&&!o[l]&&this.itemViewNotFound(l);var c=(t.view&&r?t.view:new s({model:t,config:n},n)).render().el;a?a.appendChild(c):this.$el.append(c)},render:function(){var t=document.createDocumentFragment();return this.$el.empty(),this.collection.length&&this.collection.each((function(e){this.add(e,t)}),this),this.$el.append(t),this}})},function(t,e,n){"use strict";var r=n(1),i=n.n(r),o=n(0);e.a=i.a.View.extend({initialize:function(t){this.opts=t||{},this.config=t.config||{};var e=this.collection;this.listenTo(e,"add",this.addTo),this.listenTo(e,"reset",this.resetChildren),this.listenTo(e,"remove",this.removeChildren)},removeChildren:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.config.em,o=t.view,a=t.opt.temporary,s=r.temporary;if(o){o.remove.apply(o);var l=o.childrenView,c=o.scriptContainer;if(l&&l.stopListening(),c&&c.remove(),t.components().forEach((function(t){return n.removeChildren(t,e,r)})),i&&!s){var u=t.getId(),h=i.get("DomComponents");delete h.componentsById[u];var d=i.get("CssComposer").getAll();if(d.remove(d.filter((function(t){return t.getSelectors().getFullString()==="#".concat(u)}))),!a){var f=i.get("Commands"),p=t.get("style-signature"),g={target:t};p&&f.run("core:component-style-clear",g),t.removed(),i.trigger("component:remove",t)}}}},addTo:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.config.em,r=this.collection.indexOf(t);if(this.addToCollection(t,null,r),n&&!e.temporary){var i=function t(e){n.trigger("component:add",e),e.components().forEach((function(e){return t(e)}))};i(t)}},addToCollection:function(t,e,r){this.compView||(this.compView=n(5).default);for(var i=this.config,a=e||null,s=this.opts.componentTypes,l=t.get("type"),c=this.compView,u=0;u<s.length;u++)if(s[u].id==l){c=s[u].view;break}var h=new c({model:t,config:i,componentTypes:s}).render().el;if(a)a.appendChild(h);else{var d=this.parentEl,f=d.childNodes;if(Object(o.isUndefined)(r))d.appendChild(h);else{var p=f.length==r;p&&r--,p||!f.length?d.appendChild(h):d.insertBefore(h,f[r])}}return h},resetChildren:function(){var t=this;this.parentEl.innerHTML="",this.collection.each((function(e){return t.addToCollection(e)}))},render:function(t){var e=this,n=this.el,r=document.createDocumentFragment();return this.parentEl=t||this.el,this.collection.each((function(t){return e.addToCollection(t,r)})),n.innerHTML="",n.appendChild(r),this}})},function(t,e,n){"use strict";var r,i=n(0),o=n(3),a=n(1),s=n.n(a),l=n(5),c=s.a.$;e.a=s.a.View.extend({events:{"mousedown [data-toggle-move]":"startSort","touchstart [data-toggle-move]":"startSort","click [data-toggle-visible]":"toggleVisibility","click [data-toggle-select]":"handleSelect","mouseover [data-toggle-select]":"handleHover","click [data-toggle-open]":"toggleOpening","dblclick [data-name]":"handleEdit","focusout [data-name]":"handleEditEnd"},template:function(t){var e=this.pfx,n=this.ppfx,r=this.config,i=this.clsNoEdit,o=r.hidable,a=this.countChildren(t),s=a?"":this.clsNoChild,l="".concat(this.clsTitle," ").concat(s),c="".concat(this.clsTitleC," ").concat(n,"one-bg"),u="".concat(this.clsCaret," fa fa-chevron-right"),h="".concat(this.inputNameCls," ").concat(i," ").concat(n,"no-app"),d=this.level+1,f="".concat(30+10*d,"px"),p=t.getName(),g=t.getIcon(),v="".concat(e,"layer");return"\n      ".concat(o?'<i class="'.concat(e,"layer-vis fa fa-eye ").concat(this.isVisible()?"":"fa-eye-slash",'" data-toggle-visible></i>'):"",'\n      <div class="').concat(c,'">\n        <div class="').concat(l,'" style="padding-left: ').concat(f,'" data-toggle-select>\n          <div class="').concat(e,'layer-title-inn">\n            <i class="').concat(u,'" data-toggle-open></i>\n            ').concat(g?'<span class="'.concat(v,'__icon">').concat(g,"</span>"):"",'\n            <span class="').concat(h,'" data-name>').concat(p,'</span>\n          </div>\n        </div>\n      </div>\n      <div class="').concat(this.clsCount,'" data-count>').concat(a||"",'</div>\n      <div class="').concat(this.clsMove,'" data-toggle-move>\n        <i class="fa fa-arrows"></i>\n      </div>\n      <div class="').concat(this.clsChildren,'"></div>')},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opt=t,this.level=t.level,this.config=t.config,this.em=t.config.em,this.ppfx=this.em.get("Config").stylePrefix,this.sorter=t.sorter||"",this.pfx=this.config.stylePrefix;var e=this.pfx,n=this.ppfx,r=this.model,i=r.get("components"),o=r.get("type")||"default";r.set("open",!1),this.listenTo(i,"remove add reset",this.checkChildren),this.listenTo(r,"change:status",this.updateStatus),this.listenTo(r,"change:open",this.updateOpening),this.listenTo(r,"change:style:display",this.updateVisibility),this.className="".concat(e,"layer ").concat(e,"layer__t-").concat(o," no-select ").concat(n,"two-color"),this.inputNameCls="".concat(n,"layer-name"),this.clsTitleC="".concat(e,"layer-title-c"),this.clsTitle="".concat(e,"layer-title"),this.clsCaret="".concat(e,"layer-caret"),this.clsCount="".concat(e,"layer-count"),this.clsMove="".concat(e,"layer-move"),this.clsChildren="".concat(e,"layer-children"),this.clsNoChild="".concat(e,"layer-no-chld"),this.clsEdit="".concat(this.inputNameCls,"--edit"),this.clsNoEdit="".concat(this.inputNameCls,"--no-edit"),this.$el.data("model",r),this.$el.data("collection",i),r.viewLayer=this},getVisibilityEl:function(){return this.eyeEl||(this.eyeEl=this.$el.children(".".concat(this.pfx,"layer-vis"))),this.eyeEl},updateVisibility:function(){var t=this.pfx,e=this.model,n="".concat(t,"layer-hidden"),r="none"==e.getStyle().display?"addClass":"removeClass";this.$el[r](n),this.getVisibilityEl()[r]("fa-eye-slash")},toggleVisibility:function(t){t&&t.stopPropagation();var e=this.model,n=e.getStyle();"none"==n.display?delete n.display:n.display="none",e.setStyle(n)},handleEdit:function(t){t&&t.stopPropagation();var e=this.em,n=this.$el,r=this.clsNoEdit,i=this.clsEdit,o=this.getInputName();o.contentEditable=!0,o.focus(),e&&e.setEditing(1),n.find(".".concat(this.inputNameCls)).removeClass(r).addClass(i)},handleEditEnd:function(t){t&&t.stopPropagation();var e=this.em,n=this.$el,r=this.clsNoEdit,i=this.clsEdit,o=this.getInputName(),a=o.textContent;o.scrollLeft=0,o.contentEditable=!1,this.model.set({name:a}),e&&e.setEditing(0),n.find(".".concat(this.inputNameCls)).addClass(r).removeClass(i)},getInputName:function(){return this.inputName||(this.inputName=this.el.querySelector(".".concat(this.inputNameCls))),this.inputName},updateOpening:function(){var t=this.opt.opened||{},e=this.model;e.get("open")?(this.$el.addClass("open"),this.getCaret().addClass("fa-chevron-down"),t[e.cid]=e):(this.$el.removeClass("open"),this.getCaret().removeClass("fa-chevron-down"),delete t[e.cid])},toggleOpening:function(t){t.stopPropagation(),this.model.get("components").length&&this.model.set("open",!this.model.get("open"))},handleSelect:function(t){t.stopPropagation();var e=this.em,n=this.config;if(e){var r=this.model;e.setSelected(r,{fromLayers:1});var i=n.scrollCanvas;i&&e.get("Canvas").scrollTo(r,i)}},handleHover:function(t){t.stopPropagation();var e=this.em,n=this.config,r=this.model;e&&n.showHover&&e.setHovered(r,{fromLayers:1})},startSort:function(t){t.stopPropagation();var e=this.sorter;t.button&&0!==t.button||e&&e.startSort(t.target)},freeze:function(){this.$el.addClass(this.pfx+"opac50"),this.model.set("open",0)},unfreeze:function(){this.$el.removeClass(this.pfx+"opac50")},updateStatus:function(t){l.default.prototype.updateStatus.apply(this,[{avoidHover:!this.config.highlightHover}])},isVisible:function(){var t=this.model.get("style").display;if(!t||"none"!=t)return 1},checkChildren:function(){var t=this.model,e=this.clsNoChild,n=this.countChildren(t),r=this.$el.children(".".concat(this.clsTitleC)).children(".".concat(this.clsTitle)),i=this.cnt;i||(i=this.$el.children("[data-count]").get(0),this.cnt=i),r[n?"removeClass":"addClass"](e),i&&(i.innerHTML=n||""),!n&&t.set("open",0)},countChildren:function(t){var e=0;return t.get("components").each((function(t){var n=this.opt.isCountable,r=this.config.hideTextnode;n&&!n(t,r)||e++}),this),e},getCaret:function(){if(!this.caret||!this.caret.length){this.pfx;this.caret=this.$el.children(".".concat(this.clsTitleC)).find(".".concat(this.clsCaret))}return this.caret},setRoot:function(t){t=Object(i.isString)(t)?this.em.getWrapper().find(t)[0]:t;var e=Object(o.g)(t,c);e&&(this.stopListening(),this.model=e,this.initialize(this.opt),this.render())},render:function(){var t=this.model,e=this.config,o=this.pfx,a=this.ppfx,s=this.opt.isCountable,l=s&&!s(t,e.hideTextnode),c=this.isVisible(),u=this.$el.empty(),h=this.level+1;Object(i.isUndefined)(r)&&(r=n(84).default);var d=new r({collection:t.get("components"),config:this.config,sorter:this.sorter,opened:this.opt.opened,parent:t,level:h}).render().$el;return this.config.showWrapper||1!==h?(u.html(this.template(t)),u.find(".".concat(this.clsChildren)).append(d)):u.append(d),t.get("draggable")&&this.config.sortable||u.children(".".concat(this.clsMove)).remove(),!c&&(this.className+=" ".concat(o,"hide")),l&&(this.className+=" ".concat(a,"hidden")),u.attr("class",this.className),this.updateOpening(),this.updateStatus(),this.updateVisibility(),this}})},function(t,e,n){"use strict";var r=n(2),i=n.n(r),o=n(1),a=n.n(o),s=n(0),l=n(6),c=n.n(l),u=n(15);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var d=a.a.$;!function(t,e){var n={beforeShow:h,move:h,change:h,show:h,hide:h,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},r=[],i=!!/msie/i.exec(window.navigator.userAgent),o=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div").style;return e.cssText="background-color:rgba(0,0,0,.5)",t(e.backgroundColor,"rgba")||t(e.backgroundColor,"hsla")}(),a=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),s=function(){var t="";if(i)for(var e=1;e<=6;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();function l(e,n,r,i){for(var a=[],s=0;s<e.length;s++){var l=e[s];if(l){var c=S(l),u=c.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";u+=S.equals(n,l)?" sp-thumb-active":"";var h=c.toString(i.preferredFormat||"rgb"),d=o?"background-color:"+c.toRgbString():"filter:"+c.toFilter();a.push('<span title="'+h+'" data-color="'+c.toRgbString()+'" class="'+u+'"><span class="sp-thumb-inner" style="'+d+';"></span></span>')}else{a.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title",i.noColorSelectedText)).html())}}return"<div class='sp-cf "+r+"'>"+a.join("")+"</div>"}function u(c,u){var h,v,m,y,b=function(e,r){var i=t.extend({},n,e);return i.callbacks={move:f(i.move,r),change:f(i.change,r),show:f(i.show,r),hide:f(i.hide,r),beforeShow:f(i.beforeShow,r)},i}(u,c),w=b.flat,x=b.showSelectionPalette,C=b.localStorageKey,O=b.theme,k=b.callbacks,T=(h=Bt,v=10,function(){var t=this,e=arguments,n=function(){y=null,h.apply(t,e)};m&&clearTimeout(y),!m&&y||(y=setTimeout(n,v))}),P=!1,j=!1,E=0,M=0,D=0,A=0,L=0,N=0,I=0,F=0,R=0,_=0,V=1,z=[],H=[],$={},W=b.selectionPalette.slice(0),B=b.maxSelectionSize,U="sp-dragging",q=null,G=c.ownerDocument,K=(G.body,t(c)),Y=!1,X=t(s,G).addClass(O),J=X.find(".sp-picker-container"),Z=X.find(".sp-color"),Q=X.find(".sp-dragger"),tt=X.find(".sp-hue"),et=X.find(".sp-slider"),nt=X.find(".sp-alpha-inner"),rt=X.find(".sp-alpha"),it=X.find(".sp-alpha-handle"),ot=X.find(".sp-input"),at=X.find(".sp-palette"),st=X.find(".sp-initial"),lt=X.find(".sp-cancel"),ct=X.find(".sp-clear"),ut=X.find(".sp-choose"),ht=X.find(".sp-palette-toggle"),dt=K.is("input"),ft=dt&&"color"===K.attr("type")&&g(),pt=dt&&!w,gt=pt?t(a).addClass(O).addClass(b.className).addClass(b.replacerClassName):t([]),vt=pt?gt:K,mt=gt.find(".sp-preview-inner"),yt=b.color||dt&&K.val(),bt=!1,wt=b.preferredFormat,xt=!b.showButtons||b.clickoutFiresChange,Ct=!yt,Ot=b.allowEmpty&&!ft;function kt(){if(b.showPaletteOnly&&(b.showPalette=!0),ht.text(b.showPaletteOnly?b.togglePaletteMoreText:b.togglePaletteLessText),b.palette){z=b.palette.slice(0),H=t.isArray(z[0])?z:[z],$={};for(var e=0;e<H.length;e++)for(var n=0;n<H[e].length;n++){var r=S(H[e][n]).toRgbString();$[r]=!0}}X.toggleClass("sp-flat",w),X.toggleClass("sp-input-disabled",!b.showInput),X.toggleClass("sp-alpha-enabled",b.showAlpha),X.toggleClass("sp-clear-enabled",Ot),X.toggleClass("sp-buttons-disabled",!b.showButtons),X.toggleClass("sp-palette-buttons-disabled",!b.togglePaletteOnly),X.toggleClass("sp-palette-disabled",!b.showPalette),X.toggleClass("sp-palette-only",b.showPaletteOnly),X.toggleClass("sp-initial-disabled",!b.showInitial),X.addClass(b.className).addClass(b.containerClassName),Bt()}function St(){if(C&&window.localStorage){try{var e=window.localStorage[C].split(",#");e.length>1&&(delete window.localStorage[C],t.each(e,(function(t,e){Tt(e)})))}catch(t){}try{W=window.localStorage[C].split(";")}catch(t){}}}function Tt(e){if(x){var n=S(e).toRgbString();if(!$[n]&&-1===t.inArray(n,W))for(W.push(n);W.length>B;)W.shift();if(C&&window.localStorage)try{window.localStorage[C]=W.join(";")}catch(t){}}}function Pt(){var e=Vt(),n=t.map(H,(function(t,n){return l(t,e,"sp-palette-row sp-palette-row-"+n,b)}));St(),W&&n.push(l(function(){var t=[];if(b.showPalette)for(var e=0;e<W.length;e++){var n=S(W[e]).toRgbString();$[n]||t.push(W[e])}return t.reverse().slice(0,b.maxSelectionSize)}(),e,"sp-palette-row sp-palette-row-selection",b)),at.html(n.join(""))}function jt(){if(b.showInitial){var t=bt,e=Vt();st.html(l([t,e],e,"sp-palette-row-initial",b))}}function Et(){(M<=0||E<=0||A<=0)&&Bt(),j=!0,X.addClass(U),q=null,K.trigger("dragstart.spectrum",[Vt()])}function Mt(){j=!1,X.removeClass(U),K.trigger("dragstop.spectrum",[Vt()])}function Dt(){var t=ot.val();if(null!==t&&""!==t||!Ot){var e=S(t);e.isValid()?(_t(e),Wt(!0)):ot.addClass("sp-validation-error")}else _t(null),Wt(!0)}function At(){P?Ft():Lt()}function Lt(){var e=t.Event("beforeShow.spectrum");if(P)Bt();else if(K.trigger(e,[Vt()]),!1!==k.beforeShow(Vt())&&!e.isDefaultPrevented()){!function(){for(var t=0;t<r.length;t++)r[t]&&r[t].hide()}(),P=!0;var n=t(G);n.bind("keydown.spectrum",Nt),n.bind("click.spectrum",It),t(window).bind("resize.spectrum",T),gt.addClass("sp-active"),X.removeClass("sp-hidden"),Bt(),Ht(),bt=Vt(),jt(),k.show(bt),K.trigger("show.spectrum",[bt])}}function Nt(t){27===t.keyCode&&Ft()}function It(t){2!=t.button&&(j||(xt?Wt(!0):Rt(),Ft()))}function Ft(){P&&!w&&(P=!1,t(G).unbind("keydown.spectrum",Nt),t(G).unbind("click.spectrum",It),t(window).unbind("resize.spectrum",T),gt.removeClass("sp-active"),X.addClass("sp-hidden"),k.hide(Vt()),K.trigger("hide.spectrum",[Vt()]))}function Rt(){_t(bt,!0)}function _t(t,e){var n,r;S.equals(t,Vt())?Ht():(!t&&Ot?Ct=!0:(Ct=!1,r=(n=S(t)).toHsv(),F=r.h%360/360,R=r.s,_=r.v,V=r.a),Ht(),n&&n.isValid()&&!e&&(wt=b.preferredFormat||n.getFormat()))}function Vt(t){return t=t||{},Ot&&Ct?null:S.fromRatio({h:F,s:R,v:_,a:Math.round(100*V)/100},{format:t.format||wt})}function zt(){Ht(),k.move(Vt()),K.trigger("move.spectrum",[Vt()])}function Ht(){ot.removeClass("sp-validation-error"),$t();var t=S.fromRatio({h:F,s:1,v:1});Z.css("background-color",t.toHexString());var e=wt;V<1&&(0!==V||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var n=Vt({format:e}),r="";if(mt.removeClass("sp-clear-display"),mt.css("background-color","transparent"),!n&&Ot)mt.addClass("sp-clear-display");else{var a=n.toHexString(),s=n.toRgbString();if(o||1===n.alpha?mt.css("background-color",s):(mt.css("background-color","transparent"),mt.css("filter",n.toFilter())),b.showAlpha){var l=n.toRgb();l.a=0;var c=S(l).toRgbString(),u="linear-gradient(left, "+c+", "+a+")";i?nt.css("filter",S(c).toFilter({gradientType:1},a)):(nt.css("background","-webkit-"+u),nt.css("background","-moz-"+u),nt.css("background","-ms-"+u),nt.css("background","linear-gradient(to right, "+c+", "+a+")"))}r=n.toString(e)}b.showInput&&ot.val(r),b.showPalette&&Pt(),jt()}function $t(){var t=R,e=_;if(Ot&&Ct)it.hide(),et.hide(),Q.hide();else{it.show(),et.show(),Q.show();var n=t*E,r=M-e*M;n=Math.max(-D,Math.min(E-D,n-D)),r=Math.max(-D,Math.min(M-D,r-D)),Q.css({top:r+"px",left:n+"px"});var i=V*L;it.css({left:i-N/2+"px"});var o=F*A;et.css({top:o-I+"px"})}}function Wt(t){var e=Vt(),n="",r=!S.equals(e,bt);e&&(n=e.toString(wt),Tt(e)),dt&&K.val(n),t&&r&&(k.change(e),K.trigger("change",[e]))}function Bt(){P&&(E=Z.width(),M=Z.height(),D=Q.height(),tt.width(),A=tt.height(),I=et.height(),L=rt.width(),N=it.width(),w||(X.css("position","absolute"),b.offset?X.offset(b.offset):X.offset(function(e,n){var r=e.outerWidth(),i=e.outerHeight(),o=n.outerHeight(),a=e[0].ownerDocument,s=a.documentElement,l=s.clientWidth,c=s.clientHeight,u=t(a).scrollLeft(),h=t(a).scrollTop(),d=l+u,f=c+h,p=n.offset();return p.top+=o,p.left-=Math.min(p.left,p.left+r>d&&d>r?Math.abs(p.left+r-d):0),p.top-=Math.min(p.top,p.top+i>f&&f>i?Math.abs(i+o-0):0),p}(X,vt))),$t(),b.showPalette&&Pt(),K.trigger("reflow.spectrum"))}function Ut(){Ft(),Y=!0,K.attr("disabled",!0),vt.addClass("sp-disabled")}!function(){if(i&&X.find("*:not(input)").attr("unselectable","on"),kt(),pt&&K.after(gt).hide(),Ot||ct.hide(),w)K.after(X).hide();else{var e="parent"===b.appendTo?K.parent():t(b.appendTo);1!==e.length&&(e=t("body")),e.append(X)}function n(e){return e.data&&e.data.ignore?(_t(t(e.target).closest(".sp-thumb-el").data("color")),zt()):(_t(t(e.target).closest(".sp-thumb-el").data("color")),zt(),Wt(!0),b.hideAfterPaletteSelect&&Ft()),!1}St(),vt.bind("click.spectrum touchstart.spectrum",(function(e){Y||At(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()})),(K.is(":disabled")||!0===b.disabled)&&Ut(),X.click(d),ot.change(Dt),ot.bind("paste",(function(){setTimeout(Dt,1)})),ot.keydown((function(t){13==t.keyCode&&Dt()})),lt.text(b.cancelText),lt.bind("click.spectrum",(function(t){t.stopPropagation(),t.preventDefault(),Rt(),Ft()})),ct.attr("title",b.clearText),ct.bind("click.spectrum",(function(t){t.stopPropagation(),t.preventDefault(),Ct=!0,zt(),w&&Wt(!0)})),ut.text(b.chooseText),ut.bind("click.spectrum",(function(t){t.stopPropagation(),t.preventDefault(),i&&ot.is(":focus")&&ot.trigger("change"),ot.hasClass("sp-validation-error")||(Wt(!0),Ft())})),ht.text(b.showPaletteOnly?b.togglePaletteMoreText:b.togglePaletteLessText),ht.bind("click.spectrum",(function(t){t.stopPropagation(),t.preventDefault(),b.showPaletteOnly=!b.showPaletteOnly,b.showPaletteOnly||w||X.css("left","-="+(J.outerWidth(!0)+5)),kt()})),p(rt,(function(t,e,n){V=t/L,Ct=!1,n.shiftKey&&(V=Math.round(10*V)/10),zt()}),Et,Mt),p(tt,(function(t,e){F=parseFloat(e/A),Ct=!1,b.showAlpha||(V=1),zt()}),Et,Mt),p(Z,(function(t,e,n){if(n.shiftKey){if(!q){var r=R*E,i=M-_*M,o=Math.abs(t-r)>Math.abs(e-i);q=o?"x":"y"}}else q=null;var a=!q||"y"===q;(!q||"x"===q)&&(R=parseFloat(t/E)),a&&(_=parseFloat((M-e)/M)),Ct=!1,b.showAlpha||(V=1),zt()}),Et,Mt),yt?(_t(yt),Ht(),wt=b.preferredFormat||S(yt).format,Tt(yt)):Ht(),w&&Lt();var r=i?"mousedown.spectrum":"click.spectrum touchstart.spectrum";at.delegate(".sp-thumb-el",r,n),st.delegate(".sp-thumb-el:nth-child(1)",r,{ignore:!0},n)}();var qt={show:Lt,hide:Ft,toggle:At,reflow:Bt,option:function(n,r){return n===e?t.extend({},b):r===e?b[n]:(b[n]=r,"preferredFormat"===n&&(wt=b.preferredFormat),void kt())},enable:function(){Y=!1,K.attr("disabled",!1),vt.removeClass("sp-disabled")},disable:Ut,offset:function(t){b.offset=t,Bt()},set:function(t){_t(t),Wt()},get:Vt,destroy:function(){K.show(),vt.unbind("click.spectrum touchstart.spectrum"),X.remove(),gt.remove(),r[qt.id]=null},container:X};return qt.id=r.push(qt)-1,qt}function h(){}function d(t){t.stopPropagation()}function f(t,e){var n=Array.prototype.slice,r=n.call(arguments,2);return function(){return t.apply(e,r.concat(n.call(arguments)))}}function p(e,n,r,o){n=n||function(){},r=r||function(){},o=o||function(){};var a=document,s=!1,l={},c=0,u=0,h="ontouchstart"in window,d={};function f(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function p(t){if(s){if(i&&a.documentMode<9&&!t.button)return g();var r=t&&t.touches&&t.touches[0],o=r&&r.pageX||t.pageX,d=r&&r.pageY||t.pageY,p=Math.max(0,Math.min(o-l.left,u)),v=Math.max(0,Math.min(d-l.top,c));h&&f(t),n.apply(e,[p,v,t])}}function g(){s&&(t(a).unbind(d),t(a.body).removeClass("sp-dragging"),setTimeout((function(){o.apply(e,arguments)}),0)),s=!1}d.selectstart=f,d.dragstart=f,d["touchmove mousemove"]=p,d["touchend mouseup"]=g,t(e).bind("touchstart mousedown",(function(n){(n.which?3==n.which:2==n.button)||s||!1!==r.apply(e,arguments)&&(s=!0,c=t(e).height(),u=t(e).width(),l=t(e).offset(),t(a).bind(d),t(a.body).addClass("sp-dragging"),p(n),f(n))}))}function g(){return t.fn.spectrum.inputTypeColorSupport()}var v="spectrum.id";t.fn.spectrum=function(e,n){if("string"==typeof e){var i=this,o=Array.prototype.slice.call(arguments,1);return this.each((function(){var n=r[t(this).data(v)];if(n){var a=n[e];if(!a)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?i=n.get():"container"==e?i=n.container:"option"==e?i=n.option.apply(n,o):"destroy"==e?(n.destroy(),t(this).removeData(v)):a.apply(n,o)}})),i}return this.spectrum("destroy").each((function(){var n=u(this,t.extend({},e,t(this).data()));t(this).data(v,n.id)}))},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=p,t.fn.spectrum.defaults=n,t.fn.spectrum.inputTypeColorSupport=function e(){if(void 0===e._cachedResult){var n=t("<input type='color'/>")[0];e._cachedResult="color"===n.type&&""!==n.value}return e._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!g()&&e.spectrum({preferredFormat:"hex6"})};var m=/^[\s,#]+/,y=/\s+$/,b=0,w=Math,x=w.round,C=w.min,O=w.max,k=w.random,S=function t(e,n){if(n=n||{},(e=e||"")instanceof t)return e;if(!(this instanceof t))return new t(e,n);var r=function(t){var e={r:0,g:0,b:0},n=1,r=!1,i=!1;"string"==typeof t&&(t=function(t){t=t.replace(m,"").replace(y,"").toLowerCase();var e,n=!1;if(W[t])t=W[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=tt.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=tt.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=tt.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=tt.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=tt.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=tt.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=tt.hex8.exec(t))return{a:(r=e[1],K(r)/255),r:K(e[2]),g:K(e[3]),b:K(e[4]),format:n?"name":"hex8"};var r;if(e=tt.hex6.exec(t))return{r:K(e[1]),g:K(e[2]),b:K(e[3]),format:n?"name":"hex"};if(e=tt.hex3.exec(t))return{r:K(e[1]+""+e[1]),g:K(e[2]+""+e[2]),b:K(e[3]+""+e[3]),format:n?"name":"hex"};return!1}(t));"object"==c()(t)&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(o=t.r,a=t.g,s=t.b,e={r:255*q(o,255),g:255*q(a,255),b:255*q(s,255)},r=!0,i="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=X(t.s),t.v=X(t.v),e=function(t,e,n){t=6*q(t,360),e=q(e,100),n=q(n,100);var r=w.floor(t),i=t-r,o=n*(1-e),a=n*(1-i*e),s=n*(1-(1-i)*e),l=r%6;return{r:255*[n,a,o,o,s,n][l],g:255*[s,n,n,a,o,o][l],b:255*[o,o,s,n,n,a][l]}}(t.h,t.s,t.v),r=!0,i="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=X(t.s),t.l=X(t.l),e=function(t,e,n){var r,i,o;function a(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(t=q(t,360),e=q(e,100),n=q(n,100),0===e)r=i=o=n;else{var s=n<.5?n*(1+e):n+e-n*e,l=2*n-s;r=a(l,s,t+1/3),i=a(l,s,t),o=a(l,s,t-1/3)}return{r:255*r,g:255*i,b:255*o}}(t.h,t.s,t.l),r=!0,i="hsl"),t.hasOwnProperty("a")&&(n=t.a));var o,a,s;return n=U(n),{ok:r,format:t.format||i,r:C(255,O(e.r,0)),g:C(255,O(e.g,0)),b:C(255,O(e.b,0)),a:n}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=x(100*this._a)/100,this._format=n.format||r.format,this._gradientType=n.gradientType,this._r<1&&(this._r=x(this._r)),this._g<1&&(this._g=x(this._g)),this._b<1&&(this._b=x(this._b)),this._ok=r.ok,this._tc_id=b++};function T(t,e,n){t=q(t,255),e=q(e,255),n=q(n,255);var r,i,o=O(t,e,n),a=C(t,e,n),s=(o+a)/2;if(o==a)r=i=0;else{var l=o-a;switch(i=s>.5?l/(2-o-a):l/(o+a),o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,l:s}}function P(t,e,n){t=q(t,255),e=q(e,255),n=q(n,255);var r,i,o=O(t,e,n),a=C(t,e,n),s=o,l=o-a;if(i=0===o?0:l/o,o==a)r=0;else{switch(o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,v:s}}function j(t,e,n,r){var i=[Y(x(t).toString(16)),Y(x(e).toString(16)),Y(x(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function E(t,e,n,r){var i;return[Y((i=r,Math.round(255*parseFloat(i)).toString(16))),Y(x(t).toString(16)),Y(x(e).toString(16)),Y(x(n).toString(16))].join("")}function M(t,e){e=0===e?0:e||10;var n=S(t).toHsl();return n.s-=e/100,n.s=G(n.s),S(n)}function D(t,e){e=0===e?0:e||10;var n=S(t).toHsl();return n.s+=e/100,n.s=G(n.s),S(n)}function A(t){return S(t).desaturate(100)}function L(t,e){e=0===e?0:e||10;var n=S(t).toHsl();return n.l+=e/100,n.l=G(n.l),S(n)}function N(t,e){e=0===e?0:e||10;var n=S(t).toRgb();return n.r=O(0,C(255,n.r-x(-e/100*255))),n.g=O(0,C(255,n.g-x(-e/100*255))),n.b=O(0,C(255,n.b-x(-e/100*255))),S(n)}function I(t,e){e=0===e?0:e||10;var n=S(t).toHsl();return n.l-=e/100,n.l=G(n.l),S(n)}function F(t,e){var n=S(t).toHsl(),r=(x(n.h)+e)%360;return n.h=r<0?360+r:r,S(n)}function R(t){var e=S(t).toHsl();return e.h=(e.h+180)%360,S(e)}function _(t){var e=S(t).toHsl(),n=e.h;return[S(t),S({h:(n+120)%360,s:e.s,l:e.l}),S({h:(n+240)%360,s:e.s,l:e.l})]}function V(t){var e=S(t).toHsl(),n=e.h;return[S(t),S({h:(n+90)%360,s:e.s,l:e.l}),S({h:(n+180)%360,s:e.s,l:e.l}),S({h:(n+270)%360,s:e.s,l:e.l})]}function z(t){var e=S(t).toHsl(),n=e.h;return[S(t),S({h:(n+72)%360,s:e.s,l:e.l}),S({h:(n+216)%360,s:e.s,l:e.l})]}function H(t,e,n){e=e||6,n=n||30;var r=S(t).toHsl(),i=360/n,o=[S(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(S(r));return o}function $(t,e){e=e||6;for(var n=S(t).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/e;e--;)a.push(S({h:r,s:i,v:o})),o=(o+s)%1;return a}S.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=U(t),this._roundA=x(100*this._a)/100,this},toHsv:function(){var t=P(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=P(this._r,this._g,this._b),e=x(360*t.h),n=x(100*t.s),r=x(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=T(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=T(this._r,this._g,this._b),e=x(360*t.h),n=x(100*t.s),r=x(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return j(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return E(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:x(this._r),g:x(this._g),b:x(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+x(this._r)+", "+x(this._g)+", "+x(this._b)+")":"rgba("+x(this._r)+", "+x(this._g)+", "+x(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:x(100*q(this._r,255))+"%",g:x(100*q(this._g,255))+"%",b:x(100*q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+x(100*q(this._r,255))+"%, "+x(100*q(this._g,255))+"%, "+x(100*q(this._b,255))+"%)":"rgba("+x(100*q(this._r,255))+"%, "+x(100*q(this._g,255))+"%, "+x(100*q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(B[j(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+E(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";t&&(n=S(t).toHex8String());return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(L,arguments)},brighten:function(){return this._applyModification(N,arguments)},darken:function(){return this._applyModification(I,arguments)},desaturate:function(){return this._applyModification(M,arguments)},saturate:function(){return this._applyModification(D,arguments)},greyscale:function(){return this._applyModification(A,arguments)},spin:function(){return this._applyModification(F,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(H,arguments)},complement:function(){return this._applyCombination(R,arguments)},monochromatic:function(){return this._applyCombination($,arguments)},splitcomplement:function(){return this._applyCombination(z,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(V,arguments)}},S.fromRatio=function(t,e){if("object"==c()(t)){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]="a"===r?t[r]:X(t[r]));t=n}return S(t,e)},S.equals=function(t,e){return!(!t||!e)&&S(t).toRgbString()==S(e).toRgbString()},S.random=function(){return S.fromRatio({r:k(),g:k(),b:k()})},S.mix=function(t,e,n){n=0===n?0:n||50;var r,i=S(t).toRgb(),o=S(e).toRgb(),a=n/100,s=2*a-1,l=o.a-i.a,c=1-(r=((r=s*l==-1?s:(s+l)/(1+s*l))+1)/2),u={r:o.r*r+i.r*c,g:o.g*r+i.g*c,b:o.b*r+i.b*c,a:o.a*a+i.a*(1-a)};return S(u)},S.readability=function(t,e){var n=S(t),r=S(e),i=n.toRgb(),o=r.toRgb(),a=n.getBrightness(),s=r.getBrightness(),l=Math.max(i.r,o.r)-Math.min(i.r,o.r)+Math.max(i.g,o.g)-Math.min(i.g,o.g)+Math.max(i.b,o.b)-Math.min(i.b,o.b);return{brightness:Math.abs(a-s),color:l}},S.isReadable=function(t,e){var n=S.readability(t,e);return n.brightness>125&&n.color>500},S.mostReadable=function(t,e){for(var n=null,r=0,i=!1,o=0;o<e.length;o++){var a=S.readability(t,e[o]),s=a.brightness>125&&a.color>500,l=a.brightness/125*3+a.color/500;(s&&!i||s&&i&&l>r||!s&&!i&&l>r)&&(i=s,r=l,n=S(e[o]))}return n};var W=S.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B=S.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(W);function U(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function q(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=C(e,O(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),w.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function G(t){return C(1,O(0,t))}function K(t){return parseInt(t,16)}function Y(t){return 1==t.length?"0"+t:""+t}function X(t){return t<=1&&(t=100*t+"%"),t}var J,Z,Q,tt=(Z="[\\s|\\(]+("+(J="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+J+")[,|\\s]+("+J+")\\s*\\)?",Q="[\\s|\\(]+("+J+")[,|\\s]+("+J+")[,|\\s]+("+J+")[,|\\s]+("+J+")\\s*\\)?",{rgb:new RegExp("rgb"+Z),rgba:new RegExp("rgba"+Q),hsl:new RegExp("hsl"+Z),hsla:new RegExp("hsla"+Q),hsv:new RegExp("hsv"+Z),hsva:new RegExp("hsva"+Q),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});window.tinycolor=S,t((function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()}))}(d);e.a=u.a.extend({template:function(){var t=this.ppfx;return'\n      <div class="'.concat(this.holderClass(),'"></div>\n      <div class="').concat(t,'field-colorp">\n        <div class="').concat(t,'field-colorp-c" data-colorp-c>\n          <div class="').concat(t,'checker-bg"></div>\n        </div>\n      </div>\n    ')},inputClass:function(){var t=this.ppfx;return"".concat(t,"field ").concat(t,"field-color")},holderClass:function(){return"".concat(this.ppfx,"input-holder")},setValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.model,r=n.get("defaults"),i=Object(s.isUndefined)(t)?Object(s.isUndefined)(r)?"":r:t,o=this.getInputEl(),a=this.getColorEl(),l="none"!=i?i:"";o.value=i,a.get(0).style.backgroundColor=l,e.fromTarget&&(a.spectrum("set",l),this.noneColor="none"==i)},getColorEl:function(){if(!this.colorEl){var t,e=this,n=this.ppfx,r=this.model,o=d('<div class="'.concat(this.ppfx,'field-color-picker"></div>')),a=o.get(0).style,s=this.em&&this.em.config?this.em.config.el:"",l=this.em&&this.em.getConfig&&this.em.getConfig("colorPicker")||{},c=function(t){return(1==t.getAlpha()?t.toHexString():t.toRgbString()).replace(/ /g,"")},u=0;this.$el.find("[data-colorp-c]").append(o),o.spectrum(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({containerClassName:"".concat(n,"one-bg ").concat(n,"two-color"),appendTo:s||"body",maxSelectionSize:8,showPalette:!0,showAlpha:!0,chooseText:"Ok",cancelText:"⨯",palette:[]},l,{move:function(t){var e=c(t);a.backgroundColor=e,r.setValueFromInput(e,0)},change:function(t){u=1;var n=c(t);a.backgroundColor=n,r.setValueFromInput(n),e.noneColor=0},show:function(e){u=0,t=c(e)},hide:function(n){!u&&t&&(e.noneColor&&(t=""),a.backgroundColor=t,o.spectrum("set",t),r.setValueFromInput(t,0))}})),this.colorEl=o}return this.colorEl},render:function(){return u.a.prototype.render.call(this),this.getColorEl(),this}})},function(t,e,n){!function(e){var n,r={},i={16:!1,18:!1,17:!1,91:!1},o="all",a={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},s={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},l=function(t){return s[t]||t.toUpperCase().charCodeAt(0)},c=[];for(n=1;n<20;n++)s["f"+n]=111+n;function u(t,e){for(var n=t.length;n--;)if(t[n]===e)return n;return-1}function h(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var d={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function f(t){for(n in i)i[n]=t[d[n]]}function p(t,e,n){var i,o;i=v(t),void 0===n&&(n=e,e="all");for(var a=0;a<i.length;a++)o=[],(t=i[a].split("+")).length>1&&(o=m(t),t=[t[t.length-1]]),t=t[0],(t=l(t))in r||(r[t]=[]),r[t].push({shortcut:i[a],scope:e,method:n,key:i[a],mods:o})}for(n in a)p[n]=!1;function g(){return o||"all"}function v(t){var e;return""==(e=(t=t.replace(/\s/g,"")).split(","))[e.length-1]&&(e[e.length-2]+=","),e}function m(t){for(var e=t.slice(0,t.length-1),n=0;n<e.length;n++)e[n]=a[e[n]];return e}function y(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,(function(){n(window.event)}))}y(document,"keydown",(function(t){!function(t){var e,n,o,s,l,h;if(e=t.keyCode,-1==u(c,e)&&c.push(e),93!=e&&224!=e||(e=91),e in i)for(o in i[e]=!0,a)a[o]==e&&(p[o]=!0);else if(f(t),p.filter.call(this,t)&&e in r)for(h=g(),s=0;s<r[e].length;s++)if((n=r[e][s]).scope==h||"all"==n.scope){for(o in l=n.mods.length>0,i)(!i[o]&&u(n.mods,+o)>-1||i[o]&&-1==u(n.mods,+o))&&(l=!1);(0!=n.mods.length||i[16]||i[18]||i[17]||i[91])&&!l||!1===n.method(t,n)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}(t)})),y(document,"keyup",(function(t){var e,n=t.keyCode,r=u(c,n);if(r>=0&&c.splice(r,1),93!=n&&224!=n||(n=91),n in i)for(e in i[n]=!1,a)a[e]==n&&(p[e]=!1)})),y(window,"focus",(function(){for(n in i)i[n]=!1;for(n in a)p[n]=!1}));var b=e.key;e.key=p,e.key.setScope=function(t){o=t||"all"},e.key.getScope=g,e.key.deleteScope=function(t){var e,n,i;for(e in r)for(n=r[e],i=0;i<n.length;)n[i].scope===t?n.splice(i,1):i++},e.key.filter=function(t){var e=(t.target||t.srcElement).tagName;return!("INPUT"==e||"SELECT"==e||"TEXTAREA"==e)},e.key.isPressed=function(t){return"string"==typeof t&&(t=l(t)),-1!=u(c,t)},e.key.getPressedKeyCodes=function(){return c.slice(0)},e.key.noConflict=function(){var t=e.key;return e.key=b,t},e.key.unbind=function(t,e){var n,i,o,a,s,c=[];for(n=v(t),a=0;a<n.length;a++){if((i=n[a].split("+")).length>1&&(c=m(i),t=i[i.length-1]),t=l(t),void 0===e&&(e=g()),!r[t])return;for(o=0;o<r[t].length;o++)(s=r[t][o]).scope===e&&h(s.mods,c)&&(r[t][o]={})}},t.exports=p}(this)},function(t,e,n){"use strict";(function(t){var r=n(64),i=setTimeout;function o(t){return Boolean(t&&void 0!==t.length)}function a(){}function s(t){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function l(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,s._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void u(e.promise,t)}c(e.promise,r)}else(1===t._state?c:u)(e.promise,t._value)}))):t._deferreds.push(e)}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof s)return t._state=3,t._value=e,void h(t);if("function"==typeof n)return void f((r=n,i=e,function(){r.apply(i,arguments)}),t)}t._state=1,t._value=e,h(t)}catch(e){u(t,e)}var r,i}function u(t,e){t._state=2,t._value=e,h(t)}function h(t){2===t._state&&0===t._deferreds.length&&s._immediateFn((function(){t._handled||s._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)l(t,t._deferreds[e]);t._deferreds=null}function d(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t((function(t){n||(n=!0,c(e,t))}),(function(t){n||(n=!0,u(e,t))}))}catch(t){if(n)return;n=!0,u(e,t)}}s.prototype.catch=function(t){return this.then(null,t)},s.prototype.then=function(t,e){var n=new this.constructor(a);return l(this,new d(t,e,n)),n},s.prototype.finally=r.a,s.all=function(t){return new s((function(e,n){if(!o(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var i=r.length;function a(t,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,(function(e){a(t,e)}),n)}r[t]=o,0==--i&&e(r)}catch(t){n(t)}}for(var s=0;s<r.length;s++)a(s,r[s])}))},s.resolve=function(t){return t&&"object"==typeof t&&t.constructor===s?t:new s((function(e){e(t)}))},s.reject=function(t){return new s((function(e,n){n(t)}))},s.race=function(t){return new s((function(e,n){if(!o(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,i=t.length;r<i;r++)s.resolve(t[r]).then(e,n)}))},s._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){i(t,0)},s._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=s}).call(this,n(73).setImmediate)},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=i.a.Model.extend({defaults:{id:"",label:"",tagName:"span",className:"",command:"",context:"",buttons:[],attributes:{},options:{},active:!1,dragDrop:!1,togglable:!0,runDefaultCommand:!0,stopDefaultCommand:!1,disable:!1},initialize:function(t){if(this.get("buttons").length){var e=n(35).default;this.set("buttons",new e(this.get("buttons")))}}});e.default=i.a.Collection.extend({model:o,deactivateAllExceptOne:function(t,e){this.forEach((function(n,r){n!==t&&(n.set("active",!1),e&&n.get("buttons").length&&n.get("buttons").deactivateAllExceptOne(t,e))}))},deactivateAll:function(t,e){var n=t||"";this.forEach((function(t){t.get("context")==n&&t!==e&&(t.set("active",!1,{silent:1}),t.trigger("updateActive",{fromCollection:1}))}))},disableAllButtons:function(t){var e=t||"";this.forEach((function(t,n){t.get("context")==e&&t.set("disable",!0)}))},disableAllButtonsExceptOne:function(t,e){this.forEach((function(n,r){n!==t&&(n.set("disable",!0),e&&n.get("buttons").length&&n.get("buttons").disableAllButtonsExceptOne(t,e))}))}})},function(t,e,n){!function(t){"use strict";function e(t){for(var e={},n=0;n<t.length;++n)e[t[n].toLowerCase()]=!0;return e}t.defineMode("css",(function(e,n){var r=n.inline;n.propertyKeywords||(n=t.resolveMode("text/css"));var i,o,a=e.indentUnit,s=n.tokenHooks,l=n.documentTypes||{},c=n.mediaTypes||{},u=n.mediaFeatures||{},h=n.mediaValueKeywords||{},d=n.propertyKeywords||{},f=n.nonStandardPropertyKeywords||{},p=n.fontProperties||{},g=n.counterDescriptors||{},v=n.colorKeywords||{},m=n.valueKeywords||{},y=n.allowNested,b=n.lineComment,w=!0===n.supportsAtComponent;function x(t,e){return i=e,t}function C(t,e){var n=t.next();if(s[n]){var r=s[n](t,e);if(!1!==r)return r}return"@"==n?(t.eatWhile(/[\w\\\-]/),x("def",t.current())):"="==n||("~"==n||"|"==n)&&t.eat("=")?x(null,"compare"):'"'==n||"'"==n?(e.tokenize=O(n),e.tokenize(t,e)):"#"==n?(t.eatWhile(/[\w\\\-]/),x("atom","hash")):"!"==n?(t.match(/^\s*\w*/),x("keyword","important")):/\d/.test(n)||"."==n&&t.eat(/\d/)?(t.eatWhile(/[\w.%]/),x("number","unit")):"-"!==n?/[,+>*\/]/.test(n)?x(null,"select-op"):"."==n&&t.match(/^-?[_a-z][_a-z0-9-]*/i)?x("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(n)?x(null,n):t.match(/[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/.test(t.current().toLowerCase())&&(e.tokenize=k),x("variable callee","variable")):/[\w\\\-]/.test(n)?(t.eatWhile(/[\w\\\-]/),x("property","word")):x(null,null):/[\d.]/.test(t.peek())?(t.eatWhile(/[\w.%]/),x("number","unit")):t.match(/^-[\w\\\-]*/)?(t.eatWhile(/[\w\\\-]/),t.match(/^\s*:/,!1)?x("variable-2","variable-definition"):x("variable-2","variable")):t.match(/^\w+-/)?x("meta","meta"):void 0}function O(t){return function(e,n){for(var r,i=!1;null!=(r=e.next());){if(r==t&&!i){")"==t&&e.backUp(1);break}i=!i&&"\\"==r}return(r==t||!i&&")"!=t)&&(n.tokenize=null),x("string","string")}}function k(t,e){return t.next(),t.match(/\s*[\"\')]/,!1)?e.tokenize=null:e.tokenize=O(")"),x(null,"(")}function S(t,e,n){this.type=t,this.indent=e,this.prev=n}function T(t,e,n,r){return t.context=new S(n,e.indentation()+(!1===r?0:a),t.context),n}function P(t){return t.context.prev&&(t.context=t.context.prev),t.context.type}function j(t,e,n){return D[n.context.type](t,e,n)}function E(t,e,n,r){for(var i=r||1;i>0;i--)n.context=n.context.prev;return j(t,e,n)}function M(t){var e=t.current().toLowerCase();o=m.hasOwnProperty(e)?"atom":v.hasOwnProperty(e)?"keyword":"variable"}var D={top:function(t,e,n){if("{"==t)return T(n,e,"block");if("}"==t&&n.context.prev)return P(n);if(w&&/@component/i.test(t))return T(n,e,"atComponentBlock");if(/^@(-moz-)?document$/i.test(t))return T(n,e,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(t))return T(n,e,"atBlock");if(/^@(font-face|counter-style)/i.test(t))return n.stateArg=t,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(t))return"keyframes";if(t&&"@"==t.charAt(0))return T(n,e,"at");if("hash"==t)o="builtin";else if("word"==t)o="tag";else{if("variable-definition"==t)return"maybeprop";if("interpolation"==t)return T(n,e,"interpolation");if(":"==t)return"pseudo";if(y&&"("==t)return T(n,e,"parens")}return n.context.type},block:function(t,e,n){if("word"==t){var r=e.current().toLowerCase();return d.hasOwnProperty(r)?(o="property","maybeprop"):f.hasOwnProperty(r)?(o="string-2","maybeprop"):y?(o=e.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(o+=" error","maybeprop")}return"meta"==t?"block":y||"hash"!=t&&"qualifier"!=t?D.top(t,e,n):(o="error","block")},maybeprop:function(t,e,n){return":"==t?T(n,e,"prop"):j(t,e,n)},prop:function(t,e,n){if(";"==t)return P(n);if("{"==t&&y)return T(n,e,"propBlock");if("}"==t||"{"==t)return E(t,e,n);if("("==t)return T(n,e,"parens");if("hash"!=t||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(e.current())){if("word"==t)M(e);else if("interpolation"==t)return T(n,e,"interpolation")}else o+=" error";return"prop"},propBlock:function(t,e,n){return"}"==t?P(n):"word"==t?(o="property","maybeprop"):n.context.type},parens:function(t,e,n){return"{"==t||"}"==t?E(t,e,n):")"==t?P(n):"("==t?T(n,e,"parens"):"interpolation"==t?T(n,e,"interpolation"):("word"==t&&M(e),"parens")},pseudo:function(t,e,n){return"meta"==t?"pseudo":"word"==t?(o="variable-3",n.context.type):j(t,e,n)},documentTypes:function(t,e,n){return"word"==t&&l.hasOwnProperty(e.current())?(o="tag",n.context.type):D.atBlock(t,e,n)},atBlock:function(t,e,n){if("("==t)return T(n,e,"atBlock_parens");if("}"==t||";"==t)return E(t,e,n);if("{"==t)return P(n)&&T(n,e,y?"block":"top");if("interpolation"==t)return T(n,e,"interpolation");if("word"==t){var r=e.current().toLowerCase();o="only"==r||"not"==r||"and"==r||"or"==r?"keyword":c.hasOwnProperty(r)?"attribute":u.hasOwnProperty(r)?"property":h.hasOwnProperty(r)?"keyword":d.hasOwnProperty(r)?"property":f.hasOwnProperty(r)?"string-2":m.hasOwnProperty(r)?"atom":v.hasOwnProperty(r)?"keyword":"error"}return n.context.type},atComponentBlock:function(t,e,n){return"}"==t?E(t,e,n):"{"==t?P(n)&&T(n,e,y?"block":"top",!1):("word"==t&&(o="error"),n.context.type)},atBlock_parens:function(t,e,n){return")"==t?P(n):"{"==t||"}"==t?E(t,e,n,2):D.atBlock(t,e,n)},restricted_atBlock_before:function(t,e,n){return"{"==t?T(n,e,"restricted_atBlock"):"word"==t&&"@counter-style"==n.stateArg?(o="variable","restricted_atBlock_before"):j(t,e,n)},restricted_atBlock:function(t,e,n){return"}"==t?(n.stateArg=null,P(n)):"word"==t?(o="@font-face"==n.stateArg&&!p.hasOwnProperty(e.current().toLowerCase())||"@counter-style"==n.stateArg&&!g.hasOwnProperty(e.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(t,e,n){return"word"==t?(o="variable","keyframes"):"{"==t?T(n,e,"top"):j(t,e,n)},at:function(t,e,n){return";"==t?P(n):"{"==t||"}"==t?E(t,e,n):("word"==t?o="tag":"hash"==t&&(o="builtin"),"at")},interpolation:function(t,e,n){return"}"==t?P(n):"{"==t||";"==t?E(t,e,n):("word"==t?o="variable":"variable"!=t&&"("!=t&&")"!=t&&(o="error"),"interpolation")}};return{startState:function(t){return{tokenize:null,state:r?"block":"top",stateArg:null,context:new S(r?"block":"top",t||0,null)}},token:function(t,e){if(!e.tokenize&&t.eatSpace())return null;var n=(e.tokenize||C)(t,e);return n&&"object"==typeof n&&(i=n[1],n=n[0]),o=n,"comment"!=i&&(e.state=D[e.state](i,t,e)),o},indent:function(t,e){var n=t.context,r=e&&e.charAt(0),i=n.indent;return"prop"!=n.type||"}"!=r&&")"!=r||(n=n.prev),n.prev&&("}"!=r||"block"!=n.type&&"top"!=n.type&&"interpolation"!=n.type&&"restricted_atBlock"!=n.type?(")"!=r||"parens"!=n.type&&"atBlock_parens"!=n.type)&&("{"!=r||"at"!=n.type&&"atBlock"!=n.type)||(i=Math.max(0,n.indent-a)):i=(n=n.prev).indent),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:b,fold:"brace"}}));var n=["domain","regexp","url","url-prefix"],r=e(n),i=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],o=e(i),a=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],s=e(a),l=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],c=e(l),u=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],h=e(u),d=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],f=e(d),p=e(["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),g=e(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),v=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],m=e(v),y=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],b=e(y),w=n.concat(i).concat(a).concat(l).concat(u).concat(d).concat(v).concat(y);function x(t,e){for(var n,r=!1;null!=(n=t.next());){if(r&&"/"==n){e.tokenize=null;break}r="*"==n}return["comment","comment"]}t.registerHelper("hintWords","css",w),t.defineMIME("text/css",{documentTypes:r,mediaTypes:o,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:h,nonStandardPropertyKeywords:f,fontProperties:p,counterDescriptors:g,colorKeywords:m,valueKeywords:b,tokenHooks:{"/":function(t,e){return!!t.eat("*")&&(e.tokenize=x,x(t,e))}},name:"css"}),t.defineMIME("text/x-scss",{mediaTypes:o,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:h,nonStandardPropertyKeywords:f,colorKeywords:m,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(t,e){return t.eat("/")?(t.skipToEnd(),["comment","comment"]):t.eat("*")?(e.tokenize=x,x(t,e)):["operator","operator"]},":":function(t){return!!t.match(/\s*\{/,!1)&&[null,null]},$:function(t){return t.match(/^[\w-]+/),t.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(t){return!!t.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),t.defineMIME("text/x-less",{mediaTypes:o,mediaFeatures:s,mediaValueKeywords:c,propertyKeywords:h,nonStandardPropertyKeywords:f,colorKeywords:m,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(t,e){return t.eat("/")?(t.skipToEnd(),["comment","comment"]):t.eat("*")?(e.tokenize=x,x(t,e)):["operator","operator"]},"@":function(t){return t.eat("{")?[null,"interpolation"]:!t.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(t.eatWhile(/[\w\\\-]/),t.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),t.defineMIME("text/x-gss",{documentTypes:r,mediaTypes:o,mediaFeatures:s,propertyKeywords:h,nonStandardPropertyKeywords:f,fontProperties:p,counterDescriptors:g,colorKeywords:m,valueKeywords:b,supportsAtComponent:!0,tokenHooks:{"/":function(t,e){return!!t.eat("*")&&(e.tokenize=x,x(t,e))}},name:"css",helperType:"gss"})}(n(10))},function(t,e,n){"use strict";n.r(e),e.default={run:function(t){t.DomComponents.clear(),t.CssComposer.clear()}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(3),o=n(17);e.default={run:function(t){Object(r.bindAll)(this,"onKeyUp","enableDragger","disableDragger"),this.editor=t,this.canvasModel=this.canvas.getCanvasView().model,this.toggleMove(1)},stop:function(t){this.toggleMove(),this.disableDragger()},onKeyUp:function(t){" "===Object(i.f)(t)&&this.editor.stopCommand(this.id)},enableDragger:function(t){this.toggleDragger(1,t)},disableDragger:function(t){this.toggleDragger(0,t)},toggleDragger:function(t,e){var n=this.canvasModel,r=this.em,i=this.dragger,a=t?"add":"remove";this.getCanvas().classList[a]("".concat(this.ppfx,"is__grabbing")),i||(i=new o.a({getPosition:function(){return{x:n.get("x"),y:n.get("y")}},setPosition:function(t){var e=t.x,r=t.y;n.set({x:e,y:r})},onStart:function(t,e){r.trigger("canvas:move:start",e)},onDrag:function(t,e){r.trigger("canvas:move",e)},onEnd:function(t,e){r.trigger("canvas:move:end",e)}}),this.dragger=i),t?i.start(e):i.stop()},toggleMove:function(t){var e=this.ppfx,n=t?"add":"remove",r=t?"on":"off",o={on:i.q,off:i.p},a=this.getCanvas(),s=["".concat(e,"is__grab")];!t&&s.push("".concat(e,"is__grabbing")),s.forEach((function(t){return a.classList[n](t)})),o[r](document,"keyup",this.onKeyUp),o[r](a,"mousedown",this.enableDragger),o[r](document,"mouseup",this.disableDragger)}}},function(t,e,n){"use strict";n.r(e);var r=n(8),i=n.n(r),o=n(0);e.default={run:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.component||t.getSelectedAll();return r=Object(o.isArray)(r)?i()(r):[r],t.select(null),r.forEach((function(t){if(t&&t.get("removable")){if(t){var e=t.collection;t.trigger("component:destroy"),e&&e.remove(t)}}else console.warn("The element is not removable",t)})),r}}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(0),a=n(17);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default={run:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(o.bindAll)(this,"setPosition","onStart","onDrag","onEnd","getPosition","getGuidesStatic","renderGuide","getGuidesTarget");var i=r.target,s=r.event,c=r.mode,u=r.dragger,h=void 0===u?{}:u,d=i.getEl(),f=l({doc:d.ownerDocument,onStart:this.onStart,onEnd:this.onEnd,onDrag:this.onDrag,getPosition:this.getPosition,setPosition:this.setPosition,guidesStatic:function(){return n.guidesStatic},guidesTarget:function(){return n.guidesTarget}},h);this.setupGuides(),this.opts=r,this.editor=t,this.em=t.getModel(),this.target=i,this.isTran="translate"==c,this.guidesContainer=this.getGuidesContainer(),this.guidesTarget=this.getGuidesTarget(),this.guidesStatic=this.getGuidesStatic(),window.guidesTarget=this.guidesTarget;var p=this.dragger;return p?p.setOptions(f):(p=new a.a(f),this.dragger=p),s&&p.start(s),this.toggleDrag(1),p},stop:function(){this.toggleDrag()},setupGuides:function(){(this.guides||[]).forEach((function(t){var e=t.guide;e&&e.parentNode.removeChild(e)})),this.guides=[]},getGuidesContainer:function(){var t=this,e=this.guidesEl;if(!e){var n=this.editor,r=this.em,i=this.opts,o=n.getConfig("stylePrefix"),a=document.createElement("div"),s=document.createElement("div"),l='<div class="'.concat(o,"guide-info__line ").concat(o,'danger-bg">\n        <div class="').concat(o,"guide-info__content ").concat(o,'danger-color"></div>\n      </div>');(e=document.createElement("div")).className="".concat(o,"guides"),a.className="".concat(o,"guide-info ").concat(o,"guide-info__x"),s.className="".concat(o,"guide-info ").concat(o,"guide-info__y"),a.innerHTML=l,s.innerHTML=l,e.appendChild(a),e.appendChild(s),n.Canvas.getToolsEl().appendChild(e),this.guidesEl=e,this.elGuideInfoX=a,this.elGuideInfoY=s,this.elGuideInfoContentX=a.querySelector(".".concat(o,"guide-info__content")),this.elGuideInfoContentY=s.querySelector(".".concat(o,"guide-info__content")),r.on("canvas:update",(function(){t.updateGuides(),i.debug&&t.guides.forEach((function(e){return t.renderGuide(e)}))}))}return e},getGuidesStatic:function(){var t=this,e=[],n=this.target.getEl(),r=n.parentNode,i=void 0===r?{}:r;return Object(o.each)(i.children,(function(r){return e=e.concat(n!==r?t.getElementGuides(r):[])})),e.concat(this.getElementGuides(i))},getGuidesTarget:function(){return this.getElementGuides(this.target.getEl())},updateGuides:function(t){var e=this.editor;(t||this.guides).forEach((function(t){var n=t.origin,r=e.Canvas.getElementPos(n),i=r.top,o=r.height,a=r.left,s=r.width;switch(t.type){case"t":return t.y=i;case"b":return t.y=i+o;case"l":return t.x=a;case"r":return t.x=a+s;case"x":return t.x=a+s/2;case"y":return t.y=i+o/2}}))},getGuidePosUpdate:function(t,e){var n={},r=e.top,i=e.height,o=e.left,a=e.width;switch(t.type){case"t":n.y=r;break;case"b":n.y=r+i;break;case"l":n.x=o;break;case"r":n.x=o+a;break;case"x":n.x=o+a/2;break;case"y":n.y=r+i/2}return n},renderGuide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.guide||document.createElement("div"),n=this.editor.Canvas,r=n.getRect(),i=r.topScroll,o=r.top,a=n.getCanvasView().getFrameOffset().top,s="px",l=t.active?2:1,c=e.children[0];return e.style="position: absolute; background-color: ".concat(t.active?"green":"red",";"),e.children.length||((c=document.createElement("div")).style="position: absolute; color: red; padding: 5px; top: 0; left: 0;",e.appendChild(c)),t.y?(e.style.width="100%",e.style.height="".concat(l).concat(s),e.style.top="".concat(t.y).concat(s),e.style.left=0):(e.style.width="".concat(l).concat(s),e.style.height="100%",e.style.left="".concat(t.x).concat(s),e.style.top="".concat(i-a+o).concat(s)),!t.guide&&this.guidesContainer.appendChild(e),e},getElementGuides:function(t){var e=this,n=this.editor,r=this.opts,i=n.Canvas.getElementPos(t),o=i.top,a=i.height,s=i.left,c=i.width,u=[{type:"t",y:o},{type:"b",y:o+a},{type:"l",x:s},{type:"r",x:s+c},{type:"x",x:s+c/2},{type:"y",y:o+a/2}].map((function(i){return l({},i,{origin:t,originRect:n.Canvas.getElementPos(t),guide:r.debug&&e.renderGuide(i)})}));return u.forEach((function(t){return e.guides.push(t)})),u},getTranslate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",n=0;return(t||"").split(" ").forEach((function(t){var r=t.trim(),i="translate".concat(e.toUpperCase(),"(");0===r.indexOf(i)&&(n=parseFloat(r.replace(i,"")))})),n},setTranslate:function(t,e,n){var r="translate".concat(e.toUpperCase(),"("),i="".concat(r).concat(n,")"),o=(t||"").split(" ").map((function(t){return 0===t.trim().indexOf(r)&&(t=i),t})).join(" ");return o.indexOf(r)<0&&(o+=" ".concat(i)),o},getPosition:function(){var t=this.target,e=this.isTran,n=t.getStyle(),r=n.left,i=n.top,o=n.transform,a=0,s=0;return e?(a=this.getTranslate(o),s=this.getTranslate(o,"y")):(a=parseFloat(r),s=parseFloat(i)),{x:a,y:s}},setPosition:function(t){var e=t.x,n=t.y,r=t.end,i=t.position,a=t.width,s=t.height,l=this.target,c=this.isTran,u=r?"":1,h="".concat(e).concat("px"),d="".concat(n).concat("px");if(c){var f=l.getStyle().transform||"";return f=this.setTranslate(f,"x",h),f=this.setTranslate(f,"y",d),l.addStyle({transform:f,en:u},{avoidStore:!r})}var p={position:i,width:a,height:s},g={left:h,top:d,en:u};Object(o.keys)(p).forEach((function(t){var e=p[t];e&&(g[t]=e)})),l.addStyle(g,{avoidStore:!r})},onStart:function(){var t=this.target,e=this.editor,n=this.isTran,r=this.opts.center,i=e.Canvas,o=t.getStyle();if(!n&&"absolute"!==o.position){var a=i.offset(t.getEl()),s=a.left,l=a.top,c=a.width,u=a.height;if(r){var h=i.getMouseRelativeCanvas(event);s=h.x,l=h.y}this.setPosition({x:s,y:l,width:"".concat(c,"px"),height:"".concat(u,"px"),position:"absolute"})}},onDrag:function(){var t=this,e=this.guidesTarget,n=this.opts,r=n.onDrag;this.updateGuides(e),n.debug&&e.forEach((function(e){return t.renderGuide(e)})),n.guidesInfo&&this.renderGuideInfo(e.filter((function(t){return t.active}))),r&&r.apply(void 0,arguments)},onEnd:function(){var t=this.editor,e=this.opts,n=this.id,r=e.onEnd;r&&r.apply(void 0,arguments),t.stopCommand(n),this.hideGuidesInfo()},hideGuidesInfo:function(){var t=this;["X","Y"].forEach((function(e){var n=t["elGuideInfo".concat(e)];n&&(n.style.display="none")}))},renderGuideInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.guidesStatic,r=this.editor;this.hideGuidesInfo(),e.forEach((function(e){var i=e.origin,a=e.x,s=r.Canvas.getElementPos(i),l=Object(o.isUndefined)(a)?"y":"x",c="y"===l,u=s[c?"left":"top"],h=s.rect[c?"left":"top"],d=c?u+s.width:u+s.height,f=c?h+s.rect.width:h+s.rect.height,p=t["elGuideInfo".concat(l.toUpperCase())],g=t["elGuideInfoContent".concat(l.toUpperCase())],v=p.style,m=n.filter((function(t){return t[l]===e[l]})).map((function(t){var e=t.originRect,n=e.left,r=e.width,i=e.top,o=e.height,a=c?n+r:i+o;return{gap:a<u?u-a:(c?n:i)-d,guide:t}})).filter((function(t){return t.gap>0})).sort((function(t,e){return t.gap-e.gap})).map((function(t){return t.guide}))[0];if(m){var y=m.originRect,b=y.left,w=y.width,x=y.top,C=y.height,O=y.rect,k=c?b<s.left:x<s.top,S=c?b:x,T=c?O.left:O.top,P=c?b+w:x+C,j=c?O.left+O.width:O.top+O.height,E="".concat(c?e.y:e.x,"px"),M=k?u-P:S-d,D=k?h-j:T-f;v.display="",v[c?"top":"left"]=E,v[c?"left":"top"]="".concat(k?P:d,"px"),v[c?"width":"height"]="".concat(M,"px"),g.innerHTML="".concat(Math.round(D),"px")}}))},toggleDrag:function(t){var e=this.ppfx,n=this.editor,r=t?"add":"remove",i=["".concat(e,"is__grabbing")],o=n.Canvas,a=o.getBody();i.forEach((function(t){return a.classList[r](t)})),o[t?"startAutoscroll":"stopAutoscroll"]()}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t){if(t.Canvas.hasFocus()){var e=[];t.getSelectedAll().forEach((function(t){var n=t.components(),r=n&&n.at(0);r&&e.push(r)})),e.length&&t.select(e)}}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t.Canvas.hasFocus()||n.force){var r=[];t.getSelectedAll().forEach((function(t){for(var e=t.parent();e&&!e.get("selectable");)e=e.parent();e&&r.push(e)})),r.length&&t.select(r)}}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t){if(t.Canvas.hasFocus()){var e=[];t.getSelectedAll().forEach((function(t){var n=t.collection,r=n.indexOf(t),i=n.at(r+1);e.push(i||t)})),e.length&&t.select(e)}}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t){if(t.Canvas.hasFocus()){var e=[];t.getSelectedAll().forEach((function(t){var n=t.collection,r=n.indexOf(t),i=n.at(r-1);e.push(i&&r-1>=0?i:t)})),e.length&&t.select(e)}}}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default={run:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.target,o=t.DomComponents,a=i.get("type"),s=o.getWrapper().find('[data-gjs-type="'.concat(a,'"]')).length,l=[];if(!s){var c=t.CssComposer.getAll(),u=i.get("style-signature");u=Object(r.isArray)(u)?u:[u],c.forEach((function(t){var e=t.selectorsToString();u.forEach((function(n){n&&e.indexOf(n)>=0&&l.push(t)}))})),c.remove(l)}return l}}},function(t,e,n){"use strict";n.r(e);var r=n(8),i=n.n(r);e.default={run:function(t){var e=t.getModel(),n=i()(t.getSelectedAll());n.length&&e.set("clipboard",n)}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),o=n.n(i),a=n(12),s=o.a.$;e.default=Object(r.extend)({},a.default,{init:function(t){Object(r.bindAll)(this,"startDelete","stopDelete","onDelete"),this.hoverClass=this.pfx+"hover-delete",this.badgeClass=this.pfx+"badge-red"},enable:function(){this.$el.find("*").mouseover(this.startDelete).mouseout(this.stopDelete).click(this.onDelete)},startDelete:function(t){t.stopPropagation();var e=s(t.target);e.data("model").get("removable")&&(e.addClass(this.hoverClass),this.attachBadge(e.get(0)))},stopDelete:function(t){t.stopPropagation(),s(t.target).removeClass(this.hoverClass),this.badge&&this.badge.css({left:-1e3,top:-1e3})},onDelete:function(t){t.stopPropagation();var e=s(t.target);e.data("model").get("removable")&&(e.data("model").destroy(),this.removeBadge(),this.clean())},updateBadgeLabel:function(t){this.badge.html("Remove "+t.getName())}})},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r).a.$;e.default={run:function(t,e){var n=this;arguments.length>2&&void 0!==arguments[2]&&arguments[2];e&&e.set&&e.set("active",0);var r=t.getConfig(),o=t.Modal,a=r.stylePrefix;if(this.cm=t.CodeManager||null,!this.$editors){var s=this.buildEditor("htmlmixed","hopscotch","HTML"),l=this.buildEditor("css","hopscotch","CSS");this.htmlEditor=s.el,this.cssEditor=l.el;var c=i('<div class="'.concat(a,'export-dl"></div>'));c.append(s.$el).append(l.$el),this.$editors=c}o.open({title:r.textViewCode,content:this.$editors}).getModel().once("change:open",(function(){return t.stopCommand(n.id)})),this.htmlEditor.setContent(t.getHtml()),this.cssEditor.setContent(t.getCss())},stop:function(t){var e=t.Modal;e&&e.close()},buildEditor:function(t,e,n){var r=document.createElement("textarea");!this.codeMirror&&(this.codeMirror=this.cm.getViewer("CodeMirror"));var i=this.codeMirror.clone().set({label:n,codeName:t,theme:e,input:r}),o=new this.cm.EditorView({model:i,config:this.cm.getConfig()}).render().$el;return i.init(r),{el:i,$el:o}}}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default={isEnabled:function(){var t=document;return t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement?1:0},enable:function(t){var e="";return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?(e="webkit",t.webkitRequestFullscreen()):t.mozRequestFullScreen?(e="moz",t.mozRequestFullScreen()):t.msRequestFullscreen?t.msRequestFullscreen():console.warn("Fullscreen not supported"),e},disable:function(){var t=document;this.isEnabled()&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},fsChanged:function(t,e){var n=(t||"")+"fullscreenchange";this.isEnabled()||(this.stop(null,this.sender),document.removeEventListener(n,this.fsChanged))},run:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.sender=e;var i=n.target,o=Object(r.isElement)(i)?i:document.querySelector(i),a=this.enable(o||t.getContainer());this.fsChanged=this.fsChanged.bind(this,a),document.addEventListener(a+"fullscreenchange",this.fsChanged),t.trigger("change:canvasOffset")},stop:function(t,e){e&&e.set&&e.set("active",!1),this.disable(),t&&t.trigger("change:canvasOffset")}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),o=n.n(i),a=n(3),s=n(12),l=n(24),c=o.a.$;e.default=Object(r.extend)({},l.default,s.default,{init:function(t){s.default.init.apply(this,arguments),Object(r.bindAll)(this,"initSorter","rollback","onEndMove"),this.opt=t,this.hoverClass=this.ppfx+"highlighter-warning",this.badgeClass=this.ppfx+"badge-warning",this.noSelClass=this.ppfx+"no-select"},enable:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];s.default.enable.apply(this,e),this.getBadgeEl().addClass(this.badgeClass),this.getHighlighterEl().addClass(this.hoverClass);var r=this.$wrapper;r.css("cursor","move"),r.on("mousedown",this.initSorter),r.addClass(this.noSelClass)},toggleClipboard:function(){},initSorter:function(t){var e=c(t.target).data("model").get("draggable");e&&(this.cacheEl=null,this.startSelectPosition(t.target,this.frameEl.contentDocument),this.sorter.draggable=e,this.sorter.onEndMove=this.onEndMove.bind(this),this.stopSelectComponent(),this.$wrapper.off("mousedown",this.initSorter),Object(a.q)(this.getContentWindow(),"keydown",this.rollback))},initSorterFromModel:function(t){var e=t.get("draggable");if(e){this.cacheEl=null;var n=t.view.el;this.startSelectPosition(n,this.frameEl.contentDocument),this.sorter.draggable=e,this.sorter.onEndMove=this.onEndMoveFromModel.bind(this),this.stopSelectComponent(),Object(a.q)(this.getContentWindow(),"keydown",this.rollback)}},initSorterFromModels:function(t){this.cacheEl=null;var e=t[t.length-1],n=this.frameEl.contentDocument;this.startSelectPosition(e.view.el,n),this.sorter.draggable=e.get("draggable"),this.sorter.toMove=t,this.sorter.onEndMove=this.onEndMoveFromModel.bind(this),this.stopSelectComponent(),Object(a.q)(this.getContentWindow(),"keydown",this.rollback)},onEndMoveFromModel:function(){Object(a.p)(this.getContentWindow(),"keydown",this.rollback)},onEndMove:function(){this.enable(),Object(a.p)(this.getContentWindow(),"keydown",this.rollback)},onSelect:function(t,e){},rollback:function(t,e){(27==(t.which||t.keyCode)||e)&&(this.sorter.moved=!1,this.sorter.endMove())},getBadgeEl:function(){return this.$badge||(this.$badge=c(this.getBadge())),this.$badge},getHighlighterEl:function(){return this.$hl||(this.$hl=c(this.canvas.getHighlighter())),this.$hl},stop:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];s.default.stop.apply(this,e),this.getBadgeEl().removeClass(this.badgeClass),this.getHighlighterEl().removeClass(this.hoverClass);var r=this.$wrapper;r.css("cursor","").unbind().removeClass(this.noSelClass)}})},function(t,e,n){"use strict";n.r(e),e.default={run:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.Modal,o=t.AssetManager,a=o.getConfig(),s=o.getContainer(),l=r.modalTitle||t.t("assetManager.modalTitle")||"",c=r.types,u=r.accept;if(o.setTarget(r.target),o.onClick(r.onClick),o.onDblClick(r.onDblClick),o.onSelect(r.onSelect),!this.rendered||c){var h=o.getAll().filter((function(t){return 1}));c&&c.length&&(h=h.filter((function(t){return-1!==c.indexOf(t.get("type"))}))),o.render(h),this.rendered=1}if(u){var d=s.querySelector("input#".concat(a.stylePrefix,"uploadFile"));d&&d.setAttribute("accept",u)}return i.open({title:l,content:s}).getModel().once("change:open",(function(){return t.stopCommand(n.id)})),this},stop:function(t){return t.Modal.close(),this}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t,e){var n=t.BlockManager,r=t.Panels;if(!this.blocks){n.render();var i="views-container",o=document.createElement("div"),a=r.getPanel(i)||r.addPanel({id:i});o.appendChild(n.getContainer()),a.set("appendContent",o).trigger("change:appendContent"),this.blocks=o}this.blocks.style.display="block"},stop:function(){var t=this.blocks;t&&(t.style.display="none")}}},function(t,e,n){"use strict";n.r(e);var r=n(1);n.n(r).a.$;e.default={run:function(t){var e=t.LayerManager,n=t.Panels;if(!this.layers){var r="views-container",i=document.createElement("div"),o=n.getPanel(r)||n.addPanel({id:r});i.appendChild(e.render()),o.set("appendContent",i).trigger("change:appendContent"),this.layers=i}this.layers.style.display="block"},stop:function(){var t=this.layers;t&&(t.style.display="none")}}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r).a.$;e.default={run:function(t,e){if(this.sender=e,!this.$cn){var n=t.getConfig(),r=t.Panels;this.$cn=i("<div></div>"),this.$cn2=i("<div></div>"),this.$cn.append(this.$cn2);var o=t.DeviceManager;if(o&&n.showDevices)r.addPanel({id:"devices-c"}).set("appendContent",o.render()).trigger("change:appendContent");var a=t.SelectorManager;a&&this.$cn2.append(a.render([])),this.$cn2.append(t.StyleManager.render());var s=t.StyleManager.getConfig().stylePrefix;this.$header=i('<div class="'.concat(s,'header">').concat(t.t("styleManager.empty"),"</div>")),this.$cn.append(this.$header),r.getPanel("views-container")?this.panel=r.getPanel("views-container"):this.panel=r.addPanel({id:"views-container"}),this.panel.set("appendContent",this.$cn).trigger("change:appendContent"),this.target=t.editor,this.listenTo(this.target,"component:toggled",this.toggleSm)}this.toggleSm()},toggleSm:function(){var t=this.target,e=this.sender;e&&e.get&&!e.get("active")||(1===t.getSelectedAll().length?(this.$cn2.show(),this.$header.hide()):(this.$cn2.hide(),this.$header.show()))},stop:function(){this.$cn2&&this.$cn2.hide(),this.$header&&this.$header.hide()}}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r).a.$;e.default={run:function(t,e){this.sender=e;var n=t.getModel(),r=t.Config.stylePrefix,o=t.TraitManager;if(!this.$cn){var a=o.getTraitsViewer(),s=o.getConfig();this.$cn=i("<div></div>"),this.$cn2=i("<div></div>"),this.$cn.append(this.$cn2),this.$header=i("<div>").append('<div class="'.concat(s.stylePrefix,'header">').concat(n.t("traitManager.empty"),"</div>")),this.$cn.append(this.$header),this.$cn2.append('<div class="'.concat(r,'traits-label">').concat(n.t("traitManager.label"),"</div>")),this.$cn2.append(a.render().el);var l=t.Panels;(l.getPanel("views-container")?l.getPanel("views-container"):l.addPanel({id:"views-container"})).set("appendContent",this.$cn.get(0)).trigger("change:appendContent"),this.target=t.getModel(),this.listenTo(this.target,"component:toggled",this.toggleTm)}this.toggleTm()},toggleTm:function(){var t=this.sender;t&&t.get&&!t.get("active")||(1===this.target.getSelectedAll().length?(this.$cn2.show(),this.$header.hide()):(this.$cn2.hide(),this.$header.show()))},stop:function(){this.$cn2&&this.$cn2.hide(),this.$header&&this.$header.hide()}}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default={run:function(t){var e=t.getModel().get("clipboard"),n=t.getSelected();e&&n&&(t.getSelectedAll().forEach((function(n){if(n){var i,o=n.collection,a=o.indexOf(n)+1,s=e.filter((function(t){return t.get("copyable")}));i=Object(r.contains)(e,n)&&n.get("copyable")?o.add(n.clone(),{at:a}):o.add(s.map((function(t){return t.clone()})),{at:a}),(i=Object(r.isArray)(i)?i:[i]).forEach((function(e){return t.trigger("component:paste",e)}))}})),n.emitUpdate())}}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default={getPanels:function(t){return this.panels||(this.panels=t.Panels.getPanelsEl()),this.panels},tglPointers:function(t,e){var n=t.Canvas.getBody().querySelectorAll(".".concat(this.ppfx,"no-pointer"));Object(r.each)(n,(function(t){return t.style.pointerEvents=e?"":"all"}))},run:function(t,e){var n=this;this.sender=e,t.stopCommand("sw-visibility"),t.getModel().stopDefault();var r=this.getPanels(t),i=t.Canvas.getElement(),o=t.getEl(),a=t.Config.stylePrefix;if(!this.helper){var s=document.createElement("span");s.className="".concat(a,"off-prv fa fa-eye-slash"),o.appendChild(s),s.onclick=function(){return n.stopCommand()},this.helper=s}this.helper.style.display="inline-block",this.tglPointers(t),r.style.display="none";var l=i.style;l.width="100%",l.height="100%",l.top="0",l.left="0",l.padding="0",l.margin="0",t.refresh()},stop:function(t){var e=this.sender,n=void 0===e?{}:e;n.set&&n.set("active",0);var r=this.getPanels(t);t.runCommand("sw-visibility"),t.getModel().runDefault(),r.style.display="",t.Canvas.getElement().setAttribute("style",""),this.helper&&(this.helper.style.display="none"),t.refresh(),this.tglPointers(t,1)}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t,e,n){var r=n||{},i=r.el||"",o=t.Canvas,a=this.canvasResizer,s=r.options||{},l=o.getCanvasView();return s.appendTo=o.getResizerEl(),s.prefix=t.getConfig().stylePrefix,s.posFetcher=l.getElementPos.bind(l),s.mousePosFetcher=o.getMouseRelativePos,a&&!r.forceNew||(this.canvasResizer=t.Utils.Resizer.init(s),a=this.canvasResizer),a.setOptions(s),a.blur(),a.focus(i),a},stop:function(){var t=this.canvasResizer;t&&t.blur()}}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(3),a=i.a.$;e.default={getOffsetMethod:function(t){return"get"+(t||"")+"OffsetViewerEl"},run:function(t,e,n){var r=n||{},i=r.state||"",s=t.getConfig(),l=this.em.getZoomDecimal(),c=r.el||"";if(!s.showOffsets||Object(o.m)(c)||!s.showOffsetsSelected&&"Fixed"==i)t.stopCommand(this.id,n);else{var u=t.Canvas,h=r.elPos||u.getElementPos(c),d=window.getComputedStyle(c),f=this.ppfx,p=i+"State",g=u[this.getOffsetMethod(i)]();g.style.display="block";var v=this["marginT"+i],m=this["marginB"+i],y=this["marginL"+i],b=this["marginR"+i],w=this["padT"+i],x=this["padB"+i],C=this["padL"+i],O=this["padR"+i];if(!this[p]){var k=i.toLowerCase(),S=k+"margin-v",T=k+"padding-v",P=a('<div class="'.concat(f,'marginName">')).get(0),j=a('<div class="'.concat(f,'paddingName">')).get(0),E=f+T+"-el",M="".concat(f+S+"-el"," ").concat(f+S),D="".concat(E," ").concat(f+T);v=a('<div class="'.concat(M,'-top"></div>')).get(0),m=a('<div class="'.concat(M,'-bottom"></div>')).get(0),y=a('<div class="'.concat(M,'-left"></div>')).get(0),b=a('<div class="'.concat(M,'-right"></div>')).get(0),w=a('<div class="'.concat(D,'-top"></div>')).get(0),x=a('<div class="'.concat(D,'-bottom"></div>')).get(0),C=a('<div class="'.concat(D,'-left"></div>')).get(0),O=a('<div class="'.concat(D,'-right"></div>')).get(0),this["marginT"+i]=v,this["marginB"+i]=m,this["marginL"+i]=y,this["marginR"+i]=b,this["padT"+i]=w,this["padB"+i]=x,this["padL"+i]=C,this["padR"+i]=O,P.appendChild(v),P.appendChild(m),P.appendChild(y),P.appendChild(b),j.appendChild(w),j.appendChild(x),j.appendChild(C),j.appendChild(O),g.appendChild(P),g.appendChild(j),this[p]="1"}var A=parseFloat(d.marginLeft.replace("px",""))*l,L=parseFloat(d.marginRight.replace("px",""))*l,N=parseFloat(d.marginTop.replace("px",""))*l,I=parseFloat(d.marginBottom.replace("px",""))*l,F=v.style,R=m.style,_=y.style,V=b.style,z=w.style,H=x.style,$=C.style,W=O.style,B=parseFloat(h.left),U=parseFloat(d.width)*l+"px";F.height=N+"px",F.width=U,F.top=h.top-N+"px",F.left=B+"px",R.height=I+"px",R.width=U,R.top=h.top+h.height+"px",R.left=B+"px";var q=h.height+N+I+"px",G=h.top-N+"px";_.height=q,_.width=A+"px",_.top=G,_.left=B-A+"px",V.height=q,V.width=L+"px",V.top=G,V.left=B+h.width+"px";var K=parseFloat(d.paddingTop)*l;z.height=K+"px",z.width=U,z.top=h.top+"px",z.left=B+"px";var Y=parseFloat(d.paddingBottom)*l;H.height=Y+"px",H.width=U,H.top=h.top+h.height-Y+"px",H.left=B+"px";var X=h.height-Y-K+"px",J=h.top+K+"px";$.height=X,$.width=parseFloat(d.paddingLeft)*l+"px",$.top=J,$.left=h.left+"px";var Z=parseFloat(d.paddingRight)*l;W.height=X,W.width=Z+"px",W.top=J,W.left=h.left+h.width-Z+"px"}},stop:function(t,e,n){var r=(n||{}).state||"",i=this.getOffsetMethod(r);t.Canvas[i]().style.display="none"}}},function(t,e,n){"use strict";n.r(e),e.default={run:function(t){t.Canvas.getBody().className=this.ppfx+"dashed"},stop:function(t){t.Canvas.getBody().className=""}}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(0),a={stylePrefix:"sm-",sectors:[],appendTo:"",hideNotStylable:!0,highlightChanged:!0,highlightComputed:!0,showComputed:!0,clearProperties:0,avoidComputed:["width","height"]},s=n(1),l=n.n(s),c=n(22),u=function(){return{build:function(t){var e=[];"string"==typeof t&&(t=[t]);for(var n=0,r=t.length;n<r;n++){var i={},o=t[n];switch(i.property=o,o){case"border-radius-c":i.property="border-radius"}switch(o){case"top":case"right":case"bottom":case"left":case"margin-top":case"margin-right":case"margin-bottom":case"margin-left":case"padding-top":case"padding-right":case"padding-bottom":case"padding-left":case"width":case"max-width":case"min-width":case"height":case"max-height":case"min-height":case"flex-basis":i.fixedValues=["initial","inherit","auto"];break;case"font-size":i.fixedValues=["medium","xx-small","x-small","small","large","x-large","xx-large","smaller","larger","length","initial","inherit"];break;case"letter-spacing":case"line-height":i.fixedValues=["normal","initial","inherit"]}switch(o){case"float":case"position":case"text-align":i.type="radio";break;case"display":case"flex-direction":case"flex-wrap":case"justify-content":case"align-items":case"align-content":case"align-self":case"font-family":case"font-weight":case"border-style":case"box-shadow-type":case"background-repeat":case"background-position":case"background-attachment":case"background-size":case"transition-property":case"transition-timing-function":case"cursor":case"overflow":case"overflow-x":case"overflow-y":i.type="select";break;case"top":case"right":case"bottom":case"left":case"margin-top":case"margin-right":case"margin-bottom":case"margin-left":case"padding-top":case"padding-right":case"padding-bottom":case"padding-left":case"min-height":case"min-width":case"max-height":case"max-width":case"width":case"height":case"font-size":case"letter-spacing":case"line-height":case"text-shadow-h":case"text-shadow-v":case"text-shadow-blur":case"border-radius-c":case"border-top-left-radius":case"border-top-right-radius":case"border-bottom-left-radius":case"border-bottom-right-radius":case"border-width":case"box-shadow-h":case"box-shadow-v":case"box-shadow-blur":case"box-shadow-spread":case"transition-duration":case"perspective":case"transform-rotate-x":case"transform-rotate-y":case"transform-rotate-z":case"transform-scale-x":case"transform-scale-y":case"transform-scale-z":case"order":case"flex-grow":case"flex-shrink":case"flex-basis":i.type="integer";break;case"margin":case"padding":case"border-radius":case"border":case"transform":i.type="composite";break;case"color":case"text-shadow-color":case"background-color":case"border-color":case"box-shadow-color":i.type="color";break;case"text-shadow":case"box-shadow":case"background":case"transition":i.type="stack";break;case"background-image":i.type="file"}switch(o){case"float":case"background-color":case"background-image":case"text-shadow":i.defaults="none";break;case"display":i.defaults="block";break;case"flex-direction":i.defaults="row";break;case"flex-wrap":i.defaults="nowrap";break;case"justify-content":i.defaults="flex-start";break;case"align-items":case"align-content":i.defaults="stretch";break;case"align-self":i.defaults="auto";break;case"position":i.defaults="static";break;case"margin-top":case"margin-right":case"margin-bottom":case"margin-left":case"padding-top":case"padding-right":case"padding-bottom":case"padding-left":case"text-shadow-h":case"text-shadow-v":case"text-shadow-blur":case"border-radius-c":case"box-shadow-h":case"box-shadow-v":case"box-shadow-spread":case"perspective":case"transform-rotate-x":case"transform-rotate-y":case"transform-rotate-z":case"order":case"flex-grow":i.defaults=0;break;case"border-top-left-radius":case"border-top-right-radius":case"border-bottom-left-radius":case"border-bottom-right-radius":i.defaults="0px";break;case"transform-scale-x":case"transform-scale-y":case"transform-scale-z":case"flex-shrink":i.defaults=1;break;case"box-shadow-blur":i.defaults="5px";break;case"top":case"right":case"bottom":case"left":case"min-height":case"min-width":case"max-height":case"max-width":case"width":case"height":case"background-size":case"cursor":case"flex-basis":i.defaults="auto";break;case"font-family":i.defaults="Arial, Helvetica, sans-serif";break;case"font-size":case"border-width":i.defaults="medium";break;case"font-weight":i.defaults="400";break;case"letter-spacing":case"line-height":i.defaults="normal";break;case"color":case"text-shadow-color":case"border-color":case"box-shadow-color":i.defaults="black";break;case"text-align":i.defaults="left";break;case"border-style":i.defaults="solid";break;case"box-shadow-type":i.defaults="";break;case"background-repeat":i.defaults="repeat";break;case"background-position":i.defaults="left top";break;case"background-attachment":i.defaults="scroll";break;case"transition-property":i.defaults="width";break;case"transition-duration":i.defaults="2";break;case"transition-timing-function":i.defaults="ease";break;case"overflow":case"overflow-x":case"overflow-y":i.defaults="visible"}switch(o){case"flex-direction":case"flex-wrap":case"justify-content":case"align-items":case"align-content":i.requires={display:["flex"]};break;case"order":case"flex-basis":case"flex-grow":case"flex-shrink":case"align-self":i.requiresParent={display:["flex"]}}switch(o){case"top":case"bottom":case"margin-top":case"margin-bottom":case"padding-top":case"padding-bottom":case"min-height":case"max-height":case"height":i.units=["px","%","vh"];break;case"right":case"left":case"margin-right":case"margin-left":case"padding-right":case"padding-left":case"min-width":case"max-width":case"width":i.units=["px","%","vw"];break;case"flex-basis":i.units=["px","%","vw","vh"];break;case"text-shadow-v":case"text-shadow-h":case"text-shadow-blur":case"border-radius-c":case"border-top-left-radius":case"border-top-right-radius":case"border-bottom-left-radius":case"border-bottom-right-radius":case"box-shadow-h":case"box-shadow-v":i.units=["px","%"];break;case"font-size":case"letter-spacing":case"line-height":i.units=["px","em","rem","%"];break;case"border-width":i.units=["px","em"];break;case"box-shadow-blur":case"box-shadow-spread":case"perspective":i.units=["px"];break;case"transition-duration":i.units=["s"];break;case"transform-rotate-x":case"transform-rotate-y":case"transform-rotate-z":i.units=["deg"]}switch(o){case"padding-top":case"padding-right":case"padding-bottom":case"padding-left":case"min-height":case"min-width":case"max-height":case"max-width":case"width":case"height":case"font-size":case"text-shadow-blur":case"border-radius-c":case"border-top-left-radius":case"border-top-right-radius":case"border-bottom-left-radius":case"border-bottom-right-radius":case"border-width":case"box-shadow-blur":case"transition-duration":case"perspective":case"flex-basis":i.min=0}switch(o){case"text-shadow":case"box-shadow":case"background":i.preview=!0}switch(o){case"background":i.detached=!0}switch(o){case"transform-rotate-x":i.functionName="rotateX";break;case"transform-rotate-y":i.functionName="rotateY";break;case"transform-rotate-z":i.functionName="rotateZ";break;case"transform-scale-x":i.functionName="scaleX";break;case"transform-scale-y":i.functionName="scaleY";break;case"transform-scale-z":i.functionName="scaleZ";break;case"background-image":i.functionName="url"}switch(o){case"float":i.list=[{value:"none"},{value:"left"},{value:"right"}];break;case"display":i.list=[{value:"block"},{value:"inline"},{value:"inline-block"},{value:"flex"},{value:"none"}];break;case"flex-direction":i.list=[{value:"row"},{value:"row-reverse"},{value:"column"},{value:"column-reverse"}];break;case"flex-wrap":i.list=[{value:"nowrap"},{value:"wrap"},{value:"wrap-reverse"}];break;case"justify-content":i.list=[{value:"flex-start"},{value:"flex-end"},{value:"center"},{value:"space-between"},{value:"space-around"},{value:"space-evenly"}];break;case"align-items":i.list=[{value:"flex-start"},{value:"flex-end"},{value:"center"},{value:"baseline"},{value:"stretch"}];break;case"align-content":i.list=[{value:"flex-start"},{value:"flex-end"},{value:"center"},{value:"space-between"},{value:"space-around"},{value:"stretch"}];break;case"align-self":i.list=[{value:"auto"},{value:"flex-start"},{value:"flex-end"},{value:"center"},{value:"baseline"},{value:"stretch"}];break;case"position":i.list=[{value:"static"},{value:"relative"},{value:"absolute"},{value:"fixed"}];break;case"font-family":var a=", sans-serif",s=["Arial, Helvetica"+a,"Arial Black, Gadget"+a,"Brush Script MT"+a,"Comic Sans MS, cursive"+a,"Courier New, Courier, monospace","Georgia, serif","Helvetica, serif","Impact, Charcoal"+a,"Lucida Sans Unicode, Lucida Grande"+a,"Tahoma, Geneva"+a,"Times New Roman, Times, serif","Trebuchet MS, Helvetica"+a,"Verdana, Geneva"+a];i.list=[];for(var l=0,c=s.length;l<c;l++){var u={};u.value=s[l],u.name=s[l].split(",")[0],i.list.push(u)}break;case"font-weight":i.list=[{value:"100",name:"Thin"},{value:"200",name:"Extra-Light"},{value:"300",name:"Light"},{value:"400",name:"Normal"},{value:"500",name:"Medium"},{value:"600",name:"Semi-Bold"},{value:"700",name:"Bold"},{value:"800",name:"Extra-Bold"},{value:"900",name:"Ultra-Bold"}];break;case"text-align":i.list=[{value:"left"},{value:"center"},{value:"right"},{value:"justify"}];break;case"border-style":i.list=[{value:"none"},{value:"solid"},{value:"dotted"},{value:"dashed"},{value:"double"},{value:"groove"},{value:"ridge"},{value:"inset"},{value:"outset"}];break;case"box-shadow-type":i.list=[{value:"",name:"Outside"},{value:"inset",name:"Inside"}];break;case"background-repeat":i.list=[{value:"repeat"},{value:"repeat-x"},{value:"repeat-y"},{value:"no-repeat"}];break;case"background-position":i.list=[{value:"left top"},{value:"left center"},{value:"left bottom"},{value:"right top"},{value:"right center"},{value:"right bottom"},{value:"center top"},{value:"center center"},{value:"center bottom"}];break;case"background-attachment":i.list=[{value:"scroll"},{value:"fixed"},{value:"local"}];break;case"background-size":i.list=[{value:"auto"},{value:"cover"},{value:"contain"}];break;case"transition-property":i.list=[{value:"all"},{value:"width"},{value:"height"},{value:"background-color"},{value:"transform"},{value:"box-shadow"},{value:"opacity"}];break;case"transition-timing-function":i.list=[{value:"linear"},{value:"ease"},{value:"ease-in"},{value:"ease-out"},{value:"ease-in-out"}];break;case"cursor":i.list=[{value:"auto"},{value:"pointer"},{value:"copy"},{value:"crosshair"},{value:"grab"},{value:"grabbing"},{value:"help"},{value:"move"},{value:"text"}];break;case"overflow":case"overflow-x":case"overflow-y":i.list=[{value:"visible"},{value:"hidden"},{value:"scroll"},{value:"auto"}]}switch(o){case"margin":i.properties=this.build(["margin-top","margin-right","margin-bottom","margin-left"]);break;case"padding":i.properties=this.build(["padding-top","padding-right","padding-bottom","padding-left"]);break;case"text-shadow":i.properties=this.build(["text-shadow-h","text-shadow-v","text-shadow-blur","text-shadow-color"]);break;case"border":i.properties=this.build(["border-width","border-style","border-color"]);break;case"border-radius":i.properties=this.build(["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"]);break;case"box-shadow":i.properties=this.build(["box-shadow-h","box-shadow-v","box-shadow-blur","box-shadow-spread","box-shadow-color","box-shadow-type"]);break;case"background":i.properties=this.build(["background-image","background-repeat","background-position","background-attachment","background-size"]);break;case"transition":i.properties=this.build(["transition-property","transition-duration","transition-timing-function"]);break;case"transform":i.properties=this.build(["transform-rotate-x","transform-rotate-y","transform-rotate-z","transform-scale-x","transform-scale-y","transform-scale-z"])}e.push(i)}return e}}},h=l.a.Model.extend({defaults:{id:"",name:"",open:!0,buildProps:"",extendBuilded:1,properties:[]},initialize:function(t){var e=t||{},n=this.buildProperties(e.buildProps),r=this.get("name")||"",i=[];!this.get("id")&&this.set("id",r.replace(/ /g,"_").toLowerCase()),i=n?this.extendProperties(n):this.get("properties");var o=new c.default(i);o.sector=this,this.set("properties",o)},extendProperties:function(t,e,n){for(var r=t.length,i=e||this.get("properties"),a=this.get("extendBuilded"),s=[],l=0,c=i.length;l<c;l++){for(var u=i[l],h=0,d=0;d<r;d++){var f=t[d];if(u.property!=f.property&&u.id!=f.property);else{var p=u.properties;p&&p.length&&(u.properties=this.extendProperties(f.properties||[],p,1)),t[d]=a?Object(o.extend)(f,u):u,s[d]=t[d],h=1}}h||(t.push(u),s.push(u))}return n?s.filter((function(t){return t})):t},buildProperties:function(t){var e=t||[];if(e.length)return this.propFactory||(this.propFactory=new u),this.propFactory.build(e)}}),d=l.a.Collection.extend({model:h}),f=n(3),p=n(11),g=n(16),v=l.a.View.extend({template:Object(o.template)('\n  <div class="<%= pfx %>title" data-sector-title>\n    <i id="<%= pfx %>caret" class="fa"></i>\n    <%= label %>\n  </div>'),events:{"click [data-sector-title]":"toggle"},initialize:function(t){this.config=t.config||{},this.em=this.config.em,this.pfx=this.config.stylePrefix||"",this.target=t.target||{},this.propTarget=t.propTarget||{},this.caretR="fa-caret-right",this.caretD="fa-caret-down";var e=this.model;this.listenTo(e,"change:open",this.updateOpen),this.listenTo(e,"updateVisibility",this.updateVisibility),this.listenTo(e,"destroy remove",this.remove)},updateVisibility:function(){var t;this.model.get("properties").each((function(e){e.get("visible")&&(t=1)})),this.el.style.display=t?"block":"none"},updateOpen:function(){this.model.get("open")?this.show():this.hide()},show:function(){this.$el.addClass(this.pfx+"open"),this.getPropertiesEl().style.display="",this.$caret.removeClass(this.caretR).addClass(this.caretD)},hide:function(){this.$el.removeClass(this.pfx+"open"),this.getPropertiesEl().style.display="none",this.$caret.removeClass(this.caretD).addClass(this.caretR)},getPropertiesEl:function(){return this.$el.find(".".concat(this.pfx,"properties")).get(0)},toggle:function(t){var e=this.model.get("open")?0:1;this.model.set("open",e)},render:function(){var t=this.pfx,e=this.model,n=this.em,r=this.$el,i=e.attributes,o=i.id,a=i.name,s=n&&n.t("styleManager.sectors.".concat(o))||a;return r.html(this.template({pfx:t,label:s})),this.$caret=r.find("#".concat(t,"caret")),this.renderProperties(),r.attr("class","".concat(t,"sector ").concat(t,"sector__").concat(o," no-select")),this.updateOpen(),this},renderProperties:function(){var t=this.model.get("properties");if(t){var e=new g.default({collection:t,target:this.target,propTarget:this.propTarget,config:this.config});this.$el.append(e.render().el)}}});function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=l.a.View.extend({initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.config||{};this.pfx=e.stylePrefix||"",this.ppfx=e.pStylePrefix||"",this.target=t.target||{},this.config=e;var n={};Object(o.extend)(n,l.a.Events);var r=document.body,i=document.createElement("el-".concat((new Date).getTime()));r.appendChild(i),n.computedDefault=y({},window.getComputedStyle(i)),r.removeChild(i),this.propTarget=n;var a=this.collection,s="component:toggled component:update:classes component:update:state change:device";this.listenTo(a,"add",this.addTo),this.listenTo(a,"reset",this.render),this.listenTo(this.target,s,this.targetUpdated)},addTo:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.addToCollection(t,null,n)},targetUpdated:function(){var t=this.target,e=this.propTarget,n=t.getSelected();if(n){var r=t.get("Config").devicePreviewMode?"":n.get("state"),i=n.getEl();if(e.helper=null,i&&Object(f.l)(i)){var o=r?":".concat(r):null;e.computed=window.getComputedStyle(i,o)}n=t.get("StyleManager").getModelToStyle(n),r&&function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.get("CssComposer"),i="hc-state",o=r.getAll(),a=r.getClassRule(i);a?(o.remove(a),o.add(a)):a=r.setClassRule(i),a.set("important",1),a.setStyle(n),e.helper=a}(n.getStyle()),e.model=n,e.trigger("update")}},setTarget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.target,r=n.get("Config"),i=e.targetIsClass,a=e.stylable,s=t;if(Object(o.isString)(t)){var l,c=n.get("CssComposer").getAll();i&&(l=c.filter((function(e){return e.get("selectors").getFullString()===t}))[0]),l||(l=c.filter((function(e){return e.get("selectorsAdd")===t}))[0]),l||(l=c.add({selectors:[],selectorsAdd:t})),a&&l.set({stylable:a}),s=l}r.devicePreviewMode||s.get("state");var u=this.propTarget;return u.model=s,u.trigger("styleManager:update",s),s},addToCollection:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.pfx,i=this.target,o=this.propTarget,a=this.config,s=this.el,l=e||s,c=new v({model:t,id:"".concat(r).concat(t.get("id")),name:t.get("name"),properties:t.get("properties"),target:i,propTarget:o,config:a}).render().el;return Object(p.a)(l,c,n.at),c},render:function(){var t=this,e=document.createDocumentFragment(),n=this.$el,r=this.pfx,i=this.ppfx;return n.empty(),this.collection.each((function(n){return t.addToCollection(n,e)})),n.append(e),n.addClass("".concat(r,"sectors ").concat(i,"one-bg ").concat(i,"two-color")),this}});function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(){var t,e,n,r={};return{name:"StyleManager",getConfig:function(){return r},init:function(i){var o=(r=x({},a,{},i)).pStylePrefix;return this.em=r.em,o&&(r.stylePrefix=o+r.stylePrefix),t=new c.default,e=new d([],r),n=new b({collection:e,target:r.em,config:r}),this},onLoad:function(){e.add(r.sectors)},postRender:function(){var t=this.getConfig().appendTo;t&&(Object(o.isElement)(t)?t:document.querySelector(t)).appendChild(this.render())},addSector:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.getSector(t);return i||(n.id=t,i=e.add(n,r)),i},getSector:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.where({id:t})[0];return!r&&n.warn&&this._logNoSector(t),r},removeSector:function(t){return this.getSectors().remove(this.getSector(t,{warn:1}))},getSectors:function(){return e},addProperty:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.getSector(t,{warn:1}),i=null;return r&&(i=r.get("properties").add(e,n)),i},getProperty:function(t,e){var n=this.getSector(t,{warn:1}),r=null;return n&&(r=1==(r=n.get("properties").where({property:e})).length?r[0]:r),r},removeProperty:function(t,e){var n=this.getProperties(t);return n&&n.remove(this.getProperty(t,e))},getProperties:function(t){var e=null,n=this.getSector(t,{warn:1});return n&&(e=n.get("properties")),e},getModelToStyle:function(t){var e=r.em,n=t.get("classes"),i=t.getId();if(e){var o,a=e.getConfig(),s=e.get("UndoManager"),l=e.get("CssComposer"),c=a.devicePreviewMode?"":t.get("state"),u=n.getStyleable(),h=u.length,d={state:c};if(s.stop(),h){var f=e.getCurrentMedia();(o=l.get(u,c,f))||(o=l.add(u,c,f))}else a.avoidInlineStyle&&(!(o=l.getIdRule(i,d))&&(o=l.setIdRule(i,{},d)),t.is("wrapper")&&o.set("wrapper",1));o&&(t=o),s.start()}return t},addType:function(e,n){t.addType(e,n)},getType:function(e){return t.getType(e)},getTypes:function(){return t.getTypes()},createType:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.model,i=void 0===n?{}:n,o=e.view,a=void 0===o?{}:o,s=this.getType(t);if(s)return new s.view(x({model:new s.model(i),config:r},a))},setTarget:function(t,e){return n.setTarget(t,e)},getEmitter:function(){return n.propTarget},render:function(){return n.render().el},_logNoSector:function(t){var e=this.em;e&&e.logWarning("'".concat(t,"' sector not found"))}}}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o={stylePrefix:"",appendTo:"",sortable:1,hidable:1,hideTextnode:1,root:"",showWrapper:1,showHover:1,scrollCanvas:{behavior:"smooth",block:"nearest"},scrollLayers:{behavior:"auto",block:"nearest"},highlightHover:1},a=n(31),s=n(0);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(){var t,e,n={};return{name:"LayerManager",init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(n=c({},o,{},e)).stylePrefix=e.pStylePrefix,t=n.em,this},getConfig:function(){return n},onLoad:function(){e=new a.a({level:0,config:n,opened:n.opened||{},model:t.get("DomComponents").getWrapper()}),t&&t.on("component:selected",this.componentChanged),this.componentChanged()},postRender:function(){var t=n.appendTo,e=n.root;(e&&this.setRoot(e),t)&&(Object(s.isElement)(t)?t:document.querySelector(t)).appendChild(this.render())},setRoot:function(t){return e.setRoot(t),this},getRoot:function(){return e.model},getAll:function(){return e},componentChanged:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!r.fromLayers){var i=t.get("opened"),o=t.getSelected(),a=n.scrollLayers,s=o&&o.collection?o.collection.parent:null;for(var l in i)i[l].set("open",0);for(;s;)s.set("open",1),i[s.cid]=s,s=s.collection?s.collection.parent:null;if(o&&a){var c=o.viewLayer&&o.viewLayer.el;c&&c.scrollIntoView(a)}}},render:function(){return e.render().el}}}},function(t,e,n){var r,i,o;
/*!
 * Backbone.Undo.js v0.2
 * 
 * Copyright (c)2013 Oliver Sartun
 * Released under the MIT License
 *
 * Documentation and full license available at
 * https://github.com/osartun/Backbone.Undo.js
//# sourceMappingURL=grapes.min.js.map
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function f(e){return Object.keys(e).map(function(t){return e[t]})}function m(t){return Array.prototype.slice.call(t)}function h(t){console.error("".concat(N," ").concat(t))}function g(t,e){!function(t){-1===U.indexOf(t)&&(U.push(t),D(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function v(t){return t&&Promise.resolve(t)===t}function b(t){return t instanceof Element||function(t){return"object"===r(t)&&t.jquery}(t)}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function y(){return document.body.querySelector(".".concat(z.container))}function w(t){var e=y();return e?e.querySelector(t):null}function e(t){return w(".".concat(t))}function C(){return e(z.popup)}function n(){var t=C();return m(t.querySelectorAll(".".concat(z.icon)))}function k(){var t=n().filter(function(t){return dt(t)});return t.length?t[0]:null}function x(){return e(z.title)}function A(){return e(z.content)}function P(){return e(z.image)}function B(){return e(z["progress-steps"])}function E(){return e(z["validation-message"])}function S(){return w(".".concat(z.actions," .").concat(z.confirm))}function T(){return w(".".concat(z.actions," .").concat(z.cancel))}function L(){return e(z.actions)}function O(){return e(z.header)}function M(){return e(z.footer)}function H(){return e(z["timer-progress-bar"])}function j(){return e(z.close)}function V(){var t=m(C().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=m(C().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return dt(t)})}function I(){return!K()&&!document.body.classList.contains(z["no-backdrop"])}function q(t,e){if(!e)return!1;for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return!1;return!0}function R(t,e,n){if(!function(e,n){m(e.classList).forEach(function(t){-1===f(z).indexOf(t)&&-1===f(W).indexOf(t)&&-1===f(n.showClass).indexOf(t)&&e.classList.remove(t)})}(t,e),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return D("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));st(t,e.customClass[n])}}var N="SweetAlert2:",D=function(t){console.warn("".concat(N," ").concat(t))},U=[],F=function(t){return"function"==typeof t?t():t},_=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),z=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),W=t(["success","warning","info","question","error"]),K=function(){return document.body.classList.contains(z["toast-shown"])},Y={previousBodyPadding:null};function Z(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return lt(t,z[e]);case"checkbox":return t.querySelector(".".concat(z.checkbox," input"));case"radio":return t.querySelector(".".concat(z.radio," input:checked"))||t.querySelector(".".concat(z.radio," input:first-child"));case"range":return t.querySelector(".".concat(z.range," input"));default:return lt(t,z.input)}}function Q(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function $(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function J(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function X(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function G(t){t.style.opacity="",t.style.display="none"}function tt(t,e,n){e?X(t,n):G(t)}function et(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function nt(t,e){var n=1<arguments.length&&void 0!==e&&e,o=H();dt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ot(){return"undefined"==typeof window||"undefined"==typeof document}function it(t){Je.isVisible()&&ct!==t.target.value&&Je.resetValidationMessage(),ct=t.target.value}function rt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?mt(e,t):t&&(e.innerHTML=t)}function at(t,e){var n=L(),o=S(),i=T();e.showConfirmButton||e.showCancelButton||G(n),R(n,e,"actions"),gt(o,"confirm",e),gt(i,"cancel",e),e.buttonsStyling?function(t,e,n){st([t,e],z.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(ut([o,i],z.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ct,st=function(t,e){$(t,e,!0)},ut=function(t,e){$(t,e,!1)},lt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(q(t.childNodes[n],e))return t.childNodes[n]},dt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},pt='\n <div aria-labelledby="'.concat(z.title,'" aria-describedby="').concat(z.content,'" class="').concat(z.popup,'" tabindex="-1">\n   <div class="').concat(z.header,'">\n     <ul class="').concat(z["progress-steps"],'"></ul>\n     <div class="').concat(z.icon," ").concat(W.error,'"></div>\n     <div class="').concat(z.icon," ").concat(W.question,'"></div>\n     <div class="').concat(z.icon," ").concat(W.warning,'"></div>\n     <div class="').concat(z.icon," ").concat(W.info,'"></div>\n     <div class="').concat(z.icon," ").concat(W.success,'"></div>\n     <img class="').concat(z.image,'" />\n     <h2 class="').concat(z.title,'" id="').concat(z.title,'"></h2>\n     <button type="button" class="').concat(z.close,'"></button>\n   </div>\n   <div class="').concat(z.content,'">\n     <div id="').concat(z.content,'" class="').concat(z["html-container"],'"></div>\n     <input class="').concat(z.input,'" />\n     <input type="file" class="').concat(z.file,'" />\n     <div class="').concat(z.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(z.select,'"></select>\n     <div class="').concat(z.radio,'"></div>\n     <label for="').concat(z.checkbox,'" class="').concat(z.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(z.label,'"></span>\n     </label>\n     <textarea class="').concat(z.textarea,'"></textarea>\n     <div class="').concat(z["validation-message"],'" id="').concat(z["validation-message"],'"></div>\n   </div>\n   <div class="').concat(z.actions,'">\n     <button type="button" class="').concat(z.confirm,'">OK</button>\n     <button type="button" class="').concat(z.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(z.footer,'"></div>\n   <div class="').concat(z["timer-progress-bar"],'"></div>\n </div>\n').replace(/(^|\n)\s*/g,""),ft=function(t){if(!function(){var t=y();t&&(t.parentNode.removeChild(t),ut([document.documentElement,document.body],[z["no-backdrop"],z["toast-shown"],z["has-column"]]))}(),ot())h("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=z.container,e.innerHTML=pt;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=C();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&st(y(),z.rtl)}(n),function(){var t=A(),e=lt(t,z.input),n=lt(t,z.file),o=t.querySelector(".".concat(z.range," input")),i=t.querySelector(".".concat(z.range," output")),r=lt(t,z.select),a=t.querySelector(".".concat(z.checkbox," input")),c=lt(t,z.textarea);e.oninput=it,n.onchange=it,r.onchange=it,a.onchange=it,c.oninput=it,o.oninput=function(t){it(t),i.value=o.value},o.onchange=function(t){it(t),o.nextSibling.value=o.value}}()}},mt=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ht=function(){if(ot())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function gt(t,e,n){tt(t,n["show".concat(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),"Button")],"inline-block"),t.innerHTML=n["".concat(e,"ButtonText")],t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=z[e],R(t,n,"".concat(e,"Button")),st(t,n["".concat(e,"ButtonClass")])}function vt(t,e){var n=y();if(n){!function(t,e){"string"==typeof e?t.style.background=e:e||st([document.documentElement,document.body],z["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&D('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in z?st(t,z[e]):(D('The "position" parameter is not valid, defaulting to "center"'),st(t,z.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-".concat(e);n in z&&st(t,z[n])}}(n,e.grow),R(n,e,"container");var o=document.body.getAttribute("data-swal2-queue-step");o&&(n.setAttribute("data-queue-step",o),document.body.removeAttribute("data-swal2-queue-step"))}}function bt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var yt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},wt=["input","file","range","select","radio","checkbox","textarea"],Ct=function(t){if(!Pt[t.input])return h('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=At(t.input),n=Pt[t.input](e,t);X(n),setTimeout(function(){Q(n)})},kt=function(t,e){var n=Z(A(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},xt=function(t){var e=At(t.input);t.customClass&&st(e,t.customClass.input)},At=function(t){var e=z[t]?z[t]:z.input;return lt(A(),e)},Pt={};Pt.text=Pt.email=Pt.password=Pt.number=Pt.tel=Pt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:v(e.inputValue)||D('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),bt(t,e),t.type=e.input,t},Pt.file=function(t,e){return bt(t,e),t},Pt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},Pt.select=function(t,e){if(t.innerHTML="",e.inputPlaceholder){var n=document.createElement("option");n.innerHTML=e.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return t},Pt.radio=function(t){return t.innerHTML="",t},Pt.checkbox=function(t,e){var n=Z(A(),"checkbox");return n.value=1,n.id=z.checkbox,n.checked=Boolean(e.inputValue),t.querySelector("span").innerHTML=e.inputPlaceholder,t},Pt.textarea=function(e,t){if(e.value=t.inputValue,bt(e,t),"MutationObserver"in window){var n=parseInt(window.getComputedStyle(C()).width),o=parseInt(window.getComputedStyle(C()).paddingLeft)+parseInt(window.getComputedStyle(C()).paddingRight);new MutationObserver(function(){var t=e.offsetWidth+o;C().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})}return e};function Bt(t,e){var n=A().querySelector("#".concat(z.content));e.html?(rt(e.html,n),X(n,"block")):e.text?(n.textContent=e.text,X(n,"block")):G(n),function(t,o){var i=A(),e=yt.innerParams.get(t),r=!e||o.input!==e.input;wt.forEach(function(t){var e=z[t],n=lt(i,e);kt(t,o.inputAttributes),n.className=e,r&&G(n)}),o.input&&(r&&Ct(o),xt(o))}(t,e),R(A(),e,"content")}function Et(){return y().getAttribute("data-queue-step")}function St(t,i){var r=B();if(!i.progressSteps||0===i.progressSteps.length)return G(r);X(r),r.innerHTML="";var a=parseInt(void 0===i.currentProgressStep?Et():i.currentProgressStep);a>=i.progressSteps.length&&D("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(t,e){var n=function(t){var e=document.createElement("li");return st(e,z["progress-step"]),e.innerHTML=t,e}(t);if(r.appendChild(n),e===a&&st(n,z["active-progress-step"]),e!==i.progressSteps.length-1){var o=function(t){var e=document.createElement("li");return st(e,z["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);r.appendChild(o)}})}function Tt(t,e){var n=O();R(n,e,"header"),St(0,e),function(t,e){var n=yt.innerParams.get(t);if(n&&e.icon===n.icon&&k())R(k(),e,"icon");else if(Mt(),e.icon)if(-1!==Object.keys(W).indexOf(e.icon)){var o=w(".".concat(z.icon,".").concat(W[e.icon]));X(o),jt(o,e),Ht(),R(o,e,"icon"),st(o,e.showClass.icon)}else h('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"'))}(t,e),function(t,e){var n=P();if(!e.imageUrl)return G(n);X(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),J(n,"width",e.imageWidth),J(n,"height",e.imageHeight),n.className=z.image,R(n,e,"image")}(0,e),function(t,e){var n=x();tt(n,e.title||e.titleText),e.title&&rt(e.title,n),e.titleText&&(n.innerText=e.titleText),R(n,e,"title")}(0,e),function(t,e){var n=j();n.innerHTML=e.closeButtonHtml,R(n,e,"closeButton"),tt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}function Lt(t,e){!function(t,e){var n=C();J(n,"width",e.width),J(n,"padding",e.padding),e.background&&(n.style.background=e.background),qt(n,e)}(0,e),vt(0,e),Tt(t,e),Bt(t,e),at(0,e),function(t,e){var n=M();tt(n,e.footer),e.footer&&rt(e.footer,n),R(n,e,"footer")}(0,e),"function"==typeof e.onRender&&e.onRender(C())}function Ot(){return S()&&S().click()}var Mt=function(){for(var t=n(),e=0;e<t.length;e++)G(t[e])},Ht=function(){for(var t=C(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},jt=function(t,e){if(t.innerHTML="",e.iconHtml)t.innerHTML=Vt(e.iconHtml);else if("success"===e.icon)t.innerHTML='\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ';else if("error"===e.icon)t.innerHTML='\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ';else{t.innerHTML=Vt({question:"?",warning:"!",info:"i"}[e.icon])}},Vt=function(t){return'<div class="'.concat(z["icon-content"],'">').concat(t,"</div>")},It=[],qt=function(t,e){t.className="".concat(z.popup," ").concat(dt(t)?e.showClass.popup:""),e.toast?(st([document.documentElement,document.body],z["toast-shown"]),st(t,z.toast)):st(t,z.modal),R(t,e,"popup"),"string"==typeof e.customClass&&st(t,e.customClass),e.icon&&st(t,z["icon-".concat(e.icon)])};function Rt(){var t=C();t||Je.fire(),t=C();var e=L(),n=S();X(e),X(n,"inline-block"),st([t,e],z.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Nt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;zt.restoreFocusTimeout=setTimeout(function(){zt.previousActiveElement&&zt.previousActiveElement.focus?(zt.previousActiveElement.focus(),zt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Dt(){if(zt.timeout)return function(){var t=H(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),zt.timeout.stop()}function Ut(){if(zt.timeout){var t=zt.timeout.start();return nt(t),t}}function Ft(t){return Object.prototype.hasOwnProperty.call(Wt,t)}function _t(t){return Yt[t]}var zt={},Wt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,scrollbarPadding:!0},Kt=["title","titleText","text","html","icon","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeight","imageAlt","progressSteps","currentProgressStep"],Yt={animation:'showClass" and "hideClass'},Zt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Qt=Object.freeze({isValidParameter:Ft,isUpdatableParameter:function(t){return-1!==Kt.indexOf(t)},isDeprecatedParameter:_t,argsToParams:function(o){var i={};return"object"!==r(o[0])||b(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||b(n)?i[t]=n:void 0!==n&&h("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):c(i,o[0]),i},isVisible:function(){return dt(C())},clickConfirm:Ot,clickCancel:function(){return T()&&T().click()},getContainer:y,getPopup:C,getTitle:x,getContent:A,getHtmlContainer:function(){return e(z["html-container"])},getImage:P,getIcon:k,getIcons:n,getCloseButton:j,getActions:L,getConfirmButton:S,getCancelButton:T,getHeader:O,getFooter:M,getFocusableElements:V,getValidationMessage:E,isLoading:function(){return C().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return l(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),d(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),a(e,[{key:"_main",value:function(t){return p(s(e.prototype),"_main",this).call(this,c({},n,t))}}]),e}(this)},queue:function(t){var r=this;It=t;function a(t,e){It=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<It.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(It[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:Et,insertQueueStep:function(t,e){return e&&e<It.length?It.splice(e,0,t):It.push(t)},deleteQueueStep:function(t){void 0!==It[t]&&It.splice(t,1)},showLoading:Rt,enableLoading:Rt,getTimerLeft:function(){return zt.timeout&&zt.timeout.getTimerLeft()},stopTimer:Dt,resumeTimer:Ut,toggleTimer:function(){var t=zt.timeout;return t&&(t.running?Dt():Ut())},increaseTimer:function(t){if(zt.timeout){var e=zt.timeout.increase(t);return nt(e,!0),e}},isTimerRunning:function(){return zt.timeout&&zt.timeout.isRunning()}});function $t(){var t=yt.innerParams.get(this);if(t){var e=yt.domCache.get(this);t.showConfirmButton||(G(e.confirmButton),t.showCancelButton||G(e.actions)),ut([e.popup,e.actions],z.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}}function Jt(){null===Y.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(Y.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Y.previousBodyPadding+function(){var t=document.createElement("div");t.className=z["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function Xt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Gt(){var t=y(),e=C();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var te=function(){var e,n=y();n.ontouchstart=function(t){e=t.target===n||!function(t){return!!(t.scrollHeight>t.clientHeight)}(n)&&"INPUT"!==t.target.tagName},n.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},ee={swalPromiseResolve:new WeakMap};function ne(t,e,n,o){n?ae(t,o):(Nt().then(function(){return ae(t,o)}),zt.keydownTarget.removeEventListener("keydown",zt.keydownHandler,{capture:zt.keydownListenerCapture}),zt.keydownHandlerAdded=!1),e.parentNode&&e.parentNode.removeChild(e),I()&&(null!==Y.previousBodyPadding&&(document.body.style.paddingRight="".concat(Y.previousBodyPadding,"px"),Y.previousBodyPadding=null),function(){if(q(document.body,z.iosfix)){var t=parseInt(document.body.style.top,10);ut(document.body,z.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),"undefined"!=typeof window&&Xt()&&window.removeEventListener("resize",Gt),m(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ut([document.documentElement,document.body],[z.shown,z["height-auto"],z["no-backdrop"],z["toast-shown"],z["toast-column"]])}function oe(t){var e=C();if(e){var n=yt.innerParams.get(this);if(n&&!q(e,n.hideClass.popup)){var o=ee.swalPromiseResolve.get(this);ut(e,n.showClass.popup),st(e,n.hideClass.popup);var i=y();ut(i,n.showClass.backdrop),st(i,n.hideClass.backdrop),function(t,e,n){var o=y(),i=ht&&et(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){re(t,e,o,a)}else{ne(t,o,K(),a)}}(this,e,n),o(t||{})}}}function ie(t){for(var e in t)t[e]=new WeakMap}var re=function(t,e,n,o){zt.swalCloseEventFinishedCallback=ne.bind(null,t,n,K(),o),e.addEventListener(ht,function(t){t.target===e&&(zt.swalCloseEventFinishedCallback(),delete zt.swalCloseEventFinishedCallback)})},ae=function(t,e){setTimeout(function(){null!==e&&"function"==typeof e&&e(),C()||function(t){delete t.params,delete zt.keydownHandler,delete zt.keydownTarget,ie(yt),ie(ee)}(t)})};function ce(t,e,n){var o=yt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function se(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var ue=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return a(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),le={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function de(t){!function(e){e.inputValidator||Object.keys(le).forEach(function(t){e.input===t&&(e.inputValidator=le[t])})}(t),t.showLoaderOnConfirm&&!t.preConfirm&&D("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=F(t.animation),function(t){t.target&&("string"!=typeof t.target||document.querySelector(t.target))&&("string"==typeof t.target||t.target.appendChild)||(D('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),ft(t)}function pe(t,e){t.removeEventListener(ht,pe),e.style.overflowY="auto"}function fe(t){var e=y(),n=C();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),xe(e,n,t),Ce(e,n),I()&&ke(e,t.scrollbarPadding),K()||zt.previousActiveElement||(zt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)})}function me(t,e){"select"===e.input||"radio"===e.input?Ee(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&v(e.inputValue)&&Se(t,e)}function he(t,e){t.disableButtons(),e.input?Oe(t,e):Me(t,e,!0)}function ge(t,e){t.disableButtons(),e(_.cancel)}function ve(t,e){t.closePopup({value:e})}function be(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return Ve(e,t,n,o)},t.keydownTarget=n.keydownListenerCapture?window:C(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function ye(t,e,n){for(var o=V(),i=0;i<o.length;i++)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();C().focus()}function we(t,e,n){e.toast?De(t,e,n):(Fe(t),_e(t),ze(t,e,n))}var Ce=function(e,n){ht&&et(n)?(e.style.overflowY="hidden",n.addEventListener(ht,function(t){t.target===n&&pe.bind(null,n,e)})):e.style.overflowY="auto"},ke=function(t,e){!function(){if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!q(document.body,z.iosfix)){var t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),st(document.body,z.iosfix),te()}}(),"undefined"!=typeof window&&Xt()&&(Gt(),window.addEventListener("resize",Gt)),m(document.body.children).forEach(function(t){t===y()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,y())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),e&&Jt(),setTimeout(function(){t.scrollTop=0})},xe=function(t,e,n){st(t,n.showClass.backdrop),X(e),st(e,n.showClass.popup),st([document.documentElement,document.body],z.shown),n.heightAuto&&n.backdrop&&!n.toast&&st([document.documentElement,document.body],z["height-auto"])},Ae=function(t){return t.checked?1:0},Pe=function(t){return t.checked?t.value:null},Be=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Ee=function(e,n){function o(t){return Te[n.input](i,Le(t),n)}var i=A();v(n.inputOptions)?(Rt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):h("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Se=function(e,n){var o=e.getInput();G(o),n.inputValue.then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),X(o),o.focus(),e.hideLoading()}).catch(function(t){h("Error in inputValue promise: ".concat(t)),o.value="",X(o),o.focus(),e.hideLoading()})},Te={select:function(t,e,i){var r=lt(t,z.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var c=lt(t,z.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=z.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=z.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},Le=function(e){var n=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n},Oe=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Ae(n);case"radio":return Pe(n);case"file":return Be(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return n.inputValidator(o,n.validationMessage)}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Me(e,n,o)})):e.getInput().checkValidity()?Me(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Me=function(e,t,n){(t.showLoaderOnConfirm&&Rt(),t.preConfirm)?(e.resetValidationMessage(),Promise.resolve().then(function(){return t.preConfirm(n,t.validationMessage)}).then(function(t){dt(E())||!1===t?e.hideLoading():ve(e,void 0===t?n:t)})):ve(e,n)},He=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],je=["Escape","Esc"],Ve=function(t,e,n,o){n.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?Ie(t,e,n):"Tab"===e.key?qe(e,n):-1!==He.indexOf(e.key)?Re():-1!==je.indexOf(e.key)&&Ne(e,n,o)},Ie=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ot(),e.preventDefault()}},qe=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?ye(0,o,-1):ye(0,o,1),t.stopPropagation(),t.preventDefault()},Re=function(){var t=S(),e=T();document.activeElement===t&&dt(e)?e.focus():document.activeElement===e&&dt(t)&&t.focus()},Ne=function(t,e,n){F(e.allowEscapeKey)&&(t.preventDefault(),n(_.esc))},De=function(t,e,n){t.popup.onclick=function(){e.showConfirmButton||e.showCancelButton||e.showCloseButton||e.input||n(_.close)}},Ue=!1,Fe=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Ue=!0)}}},_e=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||(Ue=!0)}}},ze=function(e,n,o){e.container.onclick=function(t){Ue?Ue=!1:t.target===e.container&&F(n.allowOutsideClick)&&o(_.backdrop)}};var We=function(t,e,n){var o=H();G(o),e.timer&&(t.timeout=new ue(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(X(o),setTimeout(function(){nt(e.timer)})))},Ke=function(t,e){if(!e.toast)return F(e.allowEnterKey)?e.focusCancel&&dt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&dt(t.confirmButton)?t.confirmButton.focus():void ye(0,-1,1):Ye()},Ye=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var Ze,Qe=Object.freeze({hideLoading:$t,disableLoading:$t,getInput:function(t){var e=yt.innerParams.get(t||this),n=yt.domCache.get(t||this);return n?Z(n.content,e.input):null},close:oe,closePopup:oe,closeModal:oe,closeToast:oe,enableButtons:function(){ce(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ce(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return se(this.getInput(),!1)},disableInput:function(){return se(this.getInput(),!0)},showValidationMessage:function(t){var e=yt.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),X(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",z["validation-message"]),Q(o),st(o,z.inputerror))},resetValidationMessage:function(){var t=yt.domCache.get(this);t.validationMessage&&G(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ut(e,z.inputerror))},getProgressSteps:function(){return yt.domCache.get(this).progressSteps},_main:function(t){!function(t){for(var e in t)Ft(i=e)||D('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==Zt.indexOf(o)&&D('The parameter "'.concat(o,'" is incompatible with toasts'))),_t(n=e)&&g(n,_t(n));var n,o,i}(t),C()&&zt.swalCloseEventFinishedCallback&&(zt.swalCloseEventFinishedCallback(),delete zt.swalCloseEventFinishedCallback),zt.deferDisposalTimer&&(clearTimeout(zt.deferDisposalTimer),delete zt.deferDisposalTimer);var e=function(t){var e=c({},Wt.showClass,t.showClass),n=c({},Wt.hideClass,t.hideClass),o=c({},Wt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"",backdrop:"swal2-backdrop-show swal2-noanimation"};o.hideClass={}}return o}(t);de(e),Object.freeze(e),zt.timeout&&(zt.timeout.stop(),delete zt.timeout),clearTimeout(zt.restoreFocusTimeout);var n=function(t){var e={popup:C(),container:y(),content:A(),actions:L(),confirmButton:S(),cancelButton:T(),closeButton:j(),validationMessage:E(),progressSteps:B()};return yt.domCache.set(t,e),e}(this);return Lt(this,e),yt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};ee.swalPromiseResolve.set(n,t);We(zt,i,e);o.confirmButton.onclick=function(){return he(n,i)};o.cancelButton.onclick=function(){return ge(n,e)};o.closeButton.onclick=function(){return e(_.close)};we(o,i,e);be(n,zt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){st(document.body,z["toast-column"])}else{ut(document.body,z["toast-column"])}me(n,i);fe(i);Ke(o,i);o.container.scrollTop=0})}(this,n,e)},update:function(e){var t=C(),n=yt.innerParams.get(this);if(!t||q(t,n.hideClass.popup))return D("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){Je.isUpdatableParameter(t)?o[t]=e[t]:D('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=c({},n,o);Lt(this,i),yt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:c({},this.params,e),writable:!1,enumerable:!0}})}});function $e(){if("undefined"!=typeof window){"undefined"==typeof Promise&&h("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ze=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);yt.promise.set(this,i)}}$e.prototype.then=function(t){return yt.promise.get(this).then(t)},$e.prototype.finally=function(t){return yt.promise.get(this).finally(t)},c($e.prototype,Qe),c($e,Qt),Object.keys(Qe).forEach(function(e){$e[e]=function(){var t;if(Ze)return(t=Ze)[e].apply(t,arguments)}}),$e.DismissReason=_,$e.version="9.5.3";var Je=$e;return Je.default=Je}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");