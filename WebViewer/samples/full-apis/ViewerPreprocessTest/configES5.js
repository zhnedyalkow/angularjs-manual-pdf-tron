function _asyncToGenerator(t){return function(){var c=t.apply(this,arguments);return new Promise(function(a,i){return function e(t,r){try{var n=c[t](r),o=n.value}catch(t){return void i(t)}if(!n.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});a(o)}("next")})}}!function(t){"use strict";var l,u=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag",n="object"==typeof module,a=t.regeneratorRuntime;if(a)n&&(module.exports=a);else{(a=t.regeneratorRuntime=n?module.exports:{}).wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",m={},i=g.prototype=s.prototype;d.prototype=i.constructor=g,g.constructor=d,g[r]=d.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(i),t},a.awrap=function(t){return new w(t)},x(b.prototype),a.async=function(t,e,r,n){var o=new b(c(t,e,r,n));return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(i),i[o]=function(){return this},i[r]="Generator",i.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=F,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=l)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?this.next=o.finallyLoc:this.complete(a),m},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},m}}}function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(i,c,u){var s=f;return function(t,e){if(s===h)throw new Error("Generator is already running");if(s===y){if("throw"===t)throw e;return N()}for(;;){var r=u.delegate;if(r){if("return"===t||"throw"===t&&r.iterator[t]===l){u.delegate=null;var n=r.iterator.return;if(n)if("throw"===(o=v(n,r.iterator,e)).type){t="throw",e=o.arg;continue}if("return"===t)continue}var o;if("throw"===(o=v(r.iterator[t],r.iterator,e)).type){u.delegate=null,t="throw",e=o.arg;continue}if(t="next",e=l,!(a=o.arg).done)return s=p,a;u[r.resultName]=a.value,u.next=r.nextLoc,u.delegate=null}if("next"===t)u.sent=u._sent=e;else if("throw"===t){if(s===f)throw s=y,e;u.dispatchException(e)&&(t="next",e=l)}else"return"===t&&u.abrupt("return",e);if(s=h,"normal"===(o=v(i,c,u)).type){s=u.done?y:p;var a={value:o.arg,done:u.done};if(o.arg!==m)return a;u.delegate&&"next"===t&&(e=l)}else"throw"===o.type&&(s=y,t="throw",e=o.arg)}}}(t,r,i),a}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function s(){}function d(){}function g(){}function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function w(t){this.arg=t}function b(c){function u(t,e,r,n){var o=v(c[t],c,e);if("throw"!==o.type){var a=o.arg,i=a.value;return i instanceof w?Promise.resolve(i.arg).then(function(t){u("next",t,r,n)},function(t){u("throw",t,r,n)}):Promise.resolve(i).then(function(t){a.value=t,r(a)},n)}n(o.arg)}var e;"object"==typeof process&&process.domain&&(u=process.domain.bind(u)),this._invoke=function(r,n){function t(){return new Promise(function(t,e){u(r,n,t,e)})}return e=e?e.then(t,t):t()}}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function F(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=l,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:l,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(){$(document).on("viewerLoaded",function(){var e;PDFNet.initialize().then(function(){return t()}).then((e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:readerControl.loadDocument(e),console.log("finished script");case 2:case"end":return t.stop()}},t,void 0)})),function(t){return e.apply(this,arguments)}))});var t=function(){var e,t,n=(e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var r,n,o,a,i,c,u,s,l,f,p,h,y,m,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="../../../samples/full-apis/TestFiles/grayscale.tif",t.next=3,PDFNet.startDeallocateStack();case 3:return console.log("Traversing all annotations in the document..."),t.next=6,PDFNet.ElementWriter.create();case 6:return n=t.sent,t.next=9,PDFNet.ElementBuilder.create();case 9:return o=t.sent,t.next=12,PDFNet.Image.createFromURL(e,r);case 12:return a=t.sent,t.next=15,e.getPageIterator(1);case 15:i=t.sent,c=0;case 18:return t.next=20,i.hasNext();case 20:if(t.sent)return t.next=23,i.current();t.next=81;break;case 23:return u=t.sent,t.next=26,u.getNumAnnots();case 26:s=t.sent,l=0;case 28:if(l<s)return t.next=31,u.getAnnot(l);t.next=77;break;case 31:return f=t.sent,t.next=34,f.isValid();case 34:if(t.sent){t.next=36;break}return t.abrupt("continue",74);case 36:return t.next=38,f.getType();case 38:p=t.sent,t.t0=p,t.next=t.t0===PDFNet.Annot.Type.e_Stamp?42:73;break;case 42:return n.begin(e),t.next=45,a.getImageWidth();case 45:return h=t.sent,t.next=48,a.getImageHeight();case 48:return y=t.sent,t.next=51,o.createImageScaled(a,0,0,h,y);case 51:return m=t.sent,n.writePlacedElement(m),t.next=55,n.end();case 55:return(v=t.sent).putRect("BBox",0,0,h,y),v.putName("Subtype","Form"),v.putName("Type","XObject"),t.next=61,o.createFormFromStream(v);case 61:return m=t.sent,n.writePlacedElement(m),t.next=65,n.end();case 65:return(v=t.sent).putRect("BBox",0,0,h,y),v.putName("Subtype","Form"),v.putName("Type","XObject"),t.next=71,f.setAppearance(v);case 71:return c+=1,t.abrupt("break",74);case 73:return t.abrupt("break",74);case 74:++l,t.next=28;break;case 77:return t.next=79,i.next();case 79:t.next=18;break;case 81:return console.log("number of annotation modifications: "+c),t.next=84,PDFNet.endDeallocateStack();case 84:case"end":return t.stop()}},t,void 0)})),function(t){return e.apply(this,arguments)}),r=(t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.prev=1,"../../../samples/full-apis/TestFiles/","fish_stamped.pdf",r="../../../samples/full-apis/TestFiles/fish_stamped.pdf",console.log("loading document from url: "+r),t.next=8,PDFNet.PDFDoc.createFromURL(r);case 8:return(e=t.sent).initSecurityHandler(),e.lock(),console.log("loaded document from url: "+r),t.next=14,n(e);case 14:return e.flattenAnnotations(),console.log("flattened document from url: "+r),t.abrupt("return",e);case 19:t.prev=19,t.t0=t.catch(1),console.log(t.t0.stack);case 22:return t.prev=22,e&&e.unlock(),t.finish(22);case 25:case"end":return t.stop()}},t,void 0,[[1,19,22,25]])})),function(){return t.apply(this,arguments)});return PDFNet.runWithoutCleanup(r)}}();