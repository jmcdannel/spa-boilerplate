/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

var Handlebars=function(){var e=function(){function t(e){this.string=e}var e;return t.prototype.toString=function(){return""+this.string},e=t,e}(),t=function(e){function o(e){return r[e]||"&amp;"}function u(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}function c(e){return e instanceof n?e.toString():!e&&e!==0?"":(e=""+e,s.test(e)?e.replace(i,o):e)}function h(e){return!e&&e!==0?!0:l(e)&&e.length===0?!0:!1}var t={},n=e,r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e=="function"};f(/x/)&&(f=function(e){return typeof e=="function"&&a.call(e)==="[object Function]"});var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e=="object"?a.call(e)==="[object Array]":!1};return t.isArray=l,t.escapeExpression=c,t.isEmpty=h,t}(e),n=function(){function n(e,n){var r;n&&n.firstLine&&(r=n.firstLine,e+=" - "+r+":"+n.firstColumn);var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++)this[t[s]]=i[t[s]];r&&(this.lineNumber=r,this.column=n.firstColumn)}var e,t=["description","fileName","lineNumber","message","name","number","stack"];return n.prototype=new Error,e=n,e}(),r=function(e,t){function h(e,t){this.helpers=e||{},this.partials=t||{},p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2)return undefined;throw new i("Missing helper: '"+e+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;return f(t)&&(t=t.call(this)),t===!0?i(this):t===!1||t==null?r(this):a(t)?t.length>0?e.helpers.each(t,n):r(this):i(t)}),e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse,i=0,s="",o;f(e)&&(e=e.call(this)),t.data&&(o=m(t.data));if(e&&typeof e=="object")if(a(e))for(var u=e.length;i<u;i++)o&&(o.index=i,o.first=i===0,o.last=i===e.length-1),s+=n(e[i],{data:o});else for(var l in e)e.hasOwnProperty(l)&&(o&&(o.key=l,o.index=i,o.first=i===0),s+=n(e[l],{data:o}),i++);return i===0&&(s=r(this)),s}),e.registerHelper("if",function(e,t){return f(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){f(e)&&(e=e.call(this));if(!r.isEmpty(e))return t.fn(e)}),e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={},r=e,i=t,s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h,h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t)throw new i("Arg not supported with multiple helpers");r.extend(this.helpers,e)}else n&&(t.not=n),this.helpers[e]=t},registerPartial:function(e,t){l.call(e)===c?r.extend(this.partials,e):this.partials[e]=t}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];typeof console!="undefined"&&console[n]&&console[n].call(console,t)}}};n.logger=d,n.log=v;var m=function(e){var t={};return r.extend(t,e),t};return n.createFrame=m,n}(t,n),i=function(e,t,n){function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function f(e,t){if(!t)throw new s("No environment passed to template");var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null)return a;if(t.compile){var f={helpers:i,partials:o,data:u};return o[n]=t.compile(e,{data:u!==undefined},t),o[n](r,f)}throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")},r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];return n?r=c(e,t,n):r||(r=this.programs[e]=c(e,t)),r},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n={},i.extend(n,t),i.extend(n,e)),n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;i.partial||(o=i.helpers,u=i.partials);var a=e.call(r,s,n,o,u,i.data);return i.partial||t.VM.checkRevision(r.compilerInfo),a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3),i=function(e,i){return i=i||{},t.apply(this,[e,i.data||n].concat(r))};return i.program=e,i.depth=r.length,i}function c(e,t,n){var r=function(e,r){return r=r||{},t(e,r.data||n)};return r.program=e,r.depth=0,r}function h(e,t,n,r,i,o){var u={partial:!0,helpers:r,partials:i,data:o};if(e===undefined)throw new s("The partial "+t+" could not be found");if(e instanceof Function)return e(n,u)}function p(){return""}var r={},i=e,s=t,o=n.COMPILER_REVISION,u=n.REVISION_CHANGES;return r.checkRevision=a,r.template=f,r.programWithDepth=l,r.program=c,r.invokePartial=h,r.noop=p,r}(t,n,r),s=function(e,t,n,r,i){var s,o=e,u=t,a=n,f=r,l=i,c=function(){var e=new o.HandlebarsEnvironment;return f.extend(e,o),e.SafeString=u,e.Exception=a,e.Utils=f,e.VM=l,e.template=function(t){return l.template(t,e)},e},h=c();return h.create=c,s=h,s}(r,e,n,t,i);return s}();