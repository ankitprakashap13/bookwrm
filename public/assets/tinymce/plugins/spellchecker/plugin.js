!function(e,t){"use strict";function n(e,t){for(var n,r=[],o=0;o<e.length;++o){if(n=c[e[o]]||i(e[o]),!n)throw"module definition dependecy not found: "+e[o];r.push(n)}t.apply(null,r)}function r(e,r,o){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(o===t)throw"invalid module definition, definition function must be specified";n(r,function(){c[e]=o.apply(null,arguments)})}function o(e){return!!c[e]}function i(t){for(var n=e,r=t.split(/[.\/]/),o=0;o<r.length;++o){if(!n[r[o]])return;n=n[r[o]]}return n}function a(n){for(var r=0;r<n.length;r++){for(var o=e,i=n[r],a=i.split(/[.\/]/),l=0;l<a.length-1;++l)o[a[l]]===t&&(o[a[l]]={}),o=o[a[l]];o[a[a.length-1]]=c[i]}}var c={},l="tinymce/spellcheckerplugin/DomTextMatcher",s="tinymce/spellcheckerplugin/Plugin",d="tinymce/PluginManager",u="tinymce/util/Tools",f="tinymce/ui/Menu",h="tinymce/dom/DOMUtils",g="tinymce/util/XHR",m="tinymce/util/URI",p="tinymce/util/JSON";r(l,[],function(){return function(e,t){function n(e,t){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function r(e){var t;if(3===e.nodeType)return e.data;if(T[e.nodeName]&&!S[e.nodeName])return"";if(t="",(S[e.nodeName]||B[e.nodeName])&&(t+="\n"),e=e.firstChild)do t+=r(e);while(e=e.nextSibling);return t}function o(e,t,n){var r,o,i,a,c=[],l=0,s=e,d,u=0;t=t.slice(0),t.sort(function(e,t){return e.start-t.start}),d=t.shift();e:for(;;){if((S[s.nodeName]||B[s.nodeName])&&l++,3===s.nodeType&&(!o&&s.length+l>=d.end?(o=s,a=d.end-l):r&&c.push(s),!r&&s.length+l>d.start&&(r=s,i=d.start-l),l+=s.length),r&&o){if(s=n({startNode:r,startNodeIndex:i,endNode:o,endNodeIndex:a,innerNodes:c,match:d.text,matchIndex:u}),l-=o.length-a,r=null,o=null,c=[],d=t.shift(),u++,!d)break}else{if((!T[s.nodeName]||S[s.nodeName])&&s.firstChild){s=s.firstChild;continue}if(s.nextSibling){s=s.nextSibling;continue}}for(;;){if(s.nextSibling){s=s.nextSibling;break}if(s.parentNode===e)break e;s=s.parentNode}}}function i(e){function t(t,n){var r=w[n];r.stencil||(r.stencil=e(r));var o=r.stencil.cloneNode(!1);return o.setAttribute("data-mce-index",n),t&&o.appendChild(b.doc.createTextNode(t)),o}return function(e){var n,r,o,i=e.startNode,a=e.endNode,c=e.matchIndex,l=b.doc;if(i===a){var s=i;o=s.parentNode,e.startNodeIndex>0&&(n=l.createTextNode(s.data.substring(0,e.startNodeIndex)),o.insertBefore(n,s));var d=t(e.match,c);return o.insertBefore(d,s),e.endNodeIndex<s.length&&(r=l.createTextNode(s.data.substring(e.endNodeIndex)),o.insertBefore(r,s)),s.parentNode.removeChild(s),d}n=l.createTextNode(i.data.substring(0,e.startNodeIndex)),r=l.createTextNode(a.data.substring(e.endNodeIndex));for(var u=t(i.data.substring(e.startNodeIndex),c),f=[],h=0,g=e.innerNodes.length;g>h;++h){var m=e.innerNodes[h],p=t(m.data,c);m.parentNode.replaceChild(p,m),f.push(p)}var v=t(a.data.substring(0,e.endNodeIndex),c);return o=i.parentNode,o.insertBefore(n,i),o.insertBefore(u,i),o.removeChild(i),o=a.parentNode,o.insertBefore(v,a),o.insertBefore(r,a),o.removeChild(a),v}}function a(e){var t=e.parentNode;t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function c(t){var n=e.getElementsByTagName("*"),r=[];t="number"==typeof t?""+t:null;for(var o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-mce-index");null!==a&&a.length&&(a===t||null===t)&&r.push(i)}return r}function l(e){for(var t=w.length;t--;)if(w[t]===e)return t;return-1}function s(e){var t=[];return d(function(n,r){e(n,r)&&t.push(n)}),w=t,this}function d(e){for(var t=0,n=w.length;n>t&&e(w[t],t)!==!1;t++);return this}function u(t){return w.length&&o(e,w,i(t)),this}function f(e,t){if(y&&e.global)for(;k=e.exec(y);)w.push(n(k,t));return this}function h(e){var t,n=c(e?l(e):null);for(t=n.length;t--;)a(n[t]);return this}function g(e){return w[e.getAttribute("data-mce-index")]}function m(e){return c(l(e))[0]}function p(e,t,n){return w.push({start:e,end:e+t,text:y.substr(e,t),data:n}),this}function v(e){var n=c(l(e)),r=t.dom.createRng();return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),r}function x(e,n){var r=v(e);return r.deleteContents(),n.length>0&&r.insertNode(t.dom.doc.createTextNode(n)),r}function N(){return w.splice(0,w.length),h(),this}var k,w=[],y,b=t.dom,S,T,B;return S=t.schema.getBlockElements(),T=t.schema.getWhiteSpaceElements(),B=t.schema.getShortEndedElements(),y=r(e),{text:y,matches:w,each:d,filter:s,reset:N,matchFromElement:g,elementFromMatch:m,find:f,add:p,wrap:u,unwrap:h,replace:x,rangeFromMatch:v,indexOf:l}}}),r(s,[l,d,u,f,h,g,m,p],function(e,t,n,r,o,i,a,c){t.add("spellchecker",function(t,l){function s(){return T.textMatcher||(T.textMatcher=new e(t.getBody(),t)),T.textMatcher}function d(e,t){var r=[];return n.each(t,function(e){r.push({selectable:!0,text:e.name,data:e.value})}),r}function u(e){for(var t in e)return!1;return!0}function f(e,i){var a=[],c=B[e];n.each(c,function(e){a.push({text:e,onclick:function(){t.insertContent(t.dom.encode(e)),t.dom.remove(i),v()}})}),a.push({text:"-"}),E&&a.push({text:"Add to Dictionary",onclick:function(){x(e,i)}}),a.push.apply(a,[{text:"Ignore",onclick:function(){N(e,i)}},{text:"Ignore all",onclick:function(){N(e,i,!0)}},{text:"Finish",onclick:k}]),I=new r({items:a,context:"contextmenu",onautohide:function(e){-1!=e.target.className.indexOf("spellchecker")&&e.preventDefault()},onhide:function(){I.remove(),I=null}}),I.renderTo(document.body);var l=o.DOM.getPos(t.getContentAreaContainer()),s=t.dom.getPos(i[0]),d=t.dom.getRoot();"BODY"==d.nodeName?(s.x-=d.ownerDocument.documentElement.scrollLeft||d.scrollLeft,s.y-=d.ownerDocument.documentElement.scrollTop||d.scrollTop):(s.x-=d.scrollLeft,s.y-=d.scrollTop),l.x+=s.x,l.y+=s.y,I.moveTo(l.x,l.y+i[0].offsetHeight)}function h(){return t.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e]+',"g")}function g(e,t,r,o){var s={method:e},d="";"spellcheck"==e&&(s.text=t,s.lang=M.spellchecker_language),"addToDictionary"==e&&(s.word=t),n.each(s,function(e,t){d&&(d+="&"),d+=t+"="+encodeURIComponent(e)}),i.send({url:new a(l).toAbsolute(M.spellchecker_rpc_url),type:"post",content_type:"application/x-www-form-urlencoded",data:d,success:function(e){e=c.parse(e),e?e.error?o(e.error):r(e):o("Sever response wasn't proper JSON.")},error:function(e,t){o("Spellchecker request error: "+t.status)}})}function m(e,t,n,r){var o=M.spellchecker_callback||g;o.call(T,e,t,n,r)}function p(){function e(e){var n;return e.words?(E=!!e.dictionary,n=e.words):n=e,t.setProgressState(!1),u(n)?(t.windowManager.alert("No misspellings found"),void(C=!1)):(B=n,s().find(h()).filter(function(e){return!!n[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":e.text})}),void t.fire("SpellcheckStart"))}function n(e){t.windowManager.alert(e),t.setProgressState(!1),k()}return C?void k():(k(),C=!0,t.setProgressState(!0),m("spellcheck",s().text,e,n),void t.focus())}function v(){t.dom.select("span.mce-spellchecker-word").length||k()}function x(e,n){t.setProgressState(!0),m("addToDictionary",e,function(){t.setProgressState(!1),t.dom.remove(n,!0),v()},function(e){t.windowManager.alert(e),t.setProgressState(!1)})}function N(e,r,o){t.selection.collapse(),o?n.each(t.dom.select("span.mce-spellchecker-word"),function(n){n.getAttribute("data-mce-word")==e&&t.dom.remove(n,!0)}):t.dom.remove(r,!0),v()}function k(){s().reset(),T.textMatcher=null,C&&(C=!1,t.fire("SpellcheckEnd"))}function w(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t}function y(e){var r,o=[];if(r=n.toArray(t.getBody().getElementsByTagName("span")),r.length)for(var i=0;i<r.length;i++){var a=w(r[i]);null!==a&&a.length&&a===e.toString()&&o.push(r[i])}return o}function b(e){var t=M.spellchecker_language;e.control.items().each(function(e){e.active(e.settings.data===t)})}var S,T=this,B,C,I,M=t.settings,E,P=M.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";S=d("Language",n.map(P.split(","),function(e){var t=e.split("=");return{name:t[0],value:t[1]}})),t.on("click",function(e){var n=e.target;if("mce-spellchecker-word"==n.className){e.preventDefault();var r=y(w(n));if(r.length>0){var o=t.dom.createRng();o.setStartBefore(r[0]),o.setEndAfter(r[r.length-1]),t.selection.setRng(o),f(n.getAttribute("data-mce-word"),r)}}}),t.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:p,selectable:!0,onPostRender:function(){var e=this;t.on("SpellcheckStart SpellcheckEnd",function(){e.active(C)})}});var _={tooltip:"Spellcheck",onclick:p,onPostRender:function(){var e=this;t.on("SpellcheckStart SpellcheckEnd",function(){e.active(C)})}};S.length>1&&(_.type="splitbutton",_.menu=S,_.onshow=b,_.onselect=function(e){M.spellchecker_language=e.control.settings.data}),t.addButton("spellchecker",_),t.addCommand("mceSpellCheck",p),t.on("remove",function(){I&&(I.remove(),I=null)}),t.on("change",v),this.getTextMatcher=s,this.getWordCharPattern=h,this.getLanguage=function(){return M.spellchecker_language},M.spellchecker_language=M.spellchecker_language||M.language||"en"})}),a([l,s])}(this);