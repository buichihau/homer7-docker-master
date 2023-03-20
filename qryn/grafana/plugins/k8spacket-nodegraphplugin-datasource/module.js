/*! For license information please see module.js.LICENSE.txt */
define(["@grafana/data","react","@grafana/ui","@grafana/runtime"],(function(t,e,n,r){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=51)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(10),o=n(28),i=n(29),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=r},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(4),o=n(3);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(5).Symbol;t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(27))},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(9),o=n(14);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(18),o=n(12),i=n(35),a=n(36),c=Object.prototype,u=c.hasOwnProperty,l=r((function(t,e){t=Object(t);var n=-1,r=e.length,l=r>2?e[2]:void 0;for(l&&i(e[0],e[1],l)&&(r=1);++n<r;)for(var f=e[n],s=a(f),p=-1,y=s.length;++p<y;){var d=s[p],v=t[d];(void 0===v||o(v,c[d])&&!u.call(t,d))&&(t[d]=f[d])}return t}));t.exports=l},function(t,e,n){var r=n(8),o=n(19),i=n(21);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e,n){var r=n(20),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,c=o(i.length-e,0),u=Array(c);++a<c;)u[a]=i[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=i[a];return l[e]=n(u),r(t,this,l)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(22),o=n(34)(r);t.exports=o},function(t,e,n){var r=n(23),o=n(24),i=n(8),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,n){var r=n(25),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(26),o=n(33);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(9),o=n(30),i=n(3),a=n(32),c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,f=u.toString,s=l.hasOwnProperty,p=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:c).test(a(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(10),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(31),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(5)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),i=16-(o-r);if(r=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(12),o=n(13),i=n(15),a=n(3);t.exports=function(t,e,n){if(!a(n))return!1;var c=typeof e;return!!("number"==c?o(n)&&i(e,n.length):"string"==c&&e in n)&&r(n[e],t)}},function(t,e,n){var r=n(37),o=n(48),i=n(13);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(38),o=n(39),i=n(41),a=n(42),c=n(15),u=n(44),l=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),s=!n&&!f&&a(t),p=!n&&!f&&!s&&u(t),y=n||f||s||p,d=y?r(t.length,String):[],v=d.length;for(var b in t)!e&&!l.call(t,b)||y&&("length"==b||s&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||c(b,v))||d.push(b);return d}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(40),o=n(6),i=Object.prototype,a=i.hasOwnProperty,c=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},function(t,e,n){var r=n(4),o=n(6);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(5),o=n(43),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=a&&a.exports===i?r.Buffer:void 0,u=(c?c.isBuffer:void 0)||o;t.exports=u}).call(this,n(16)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(45),o=n(46),i=n(47),a=i&&i.isTypedArray,c=a?o(a):r;t.exports=c},function(t,e,n){var r=n(4),o=n(14),i=n(6),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(11),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=c}).call(this,n(16)(t))},function(t,e,n){var r=n(3),o=n(49),i=n(50),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var c in t)("constructor"!=c||!e&&a.call(t,c))&&n.push(c);return n}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function c(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))}function u(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function l(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var f=n(7),s=function(t){function e(e){var n=t.call(this,e)||this;return n.baseUrl=e.url,n}return i(e,t),e.prototype.doRequest=function(t,e){return c(this,void 0,void 0,(function(){return u(this,(function(n){return t.metricsContext?[2,Object(f.getBackendSrv)().datasourceRequest({method:"GET",url:this.baseUrl+"/apiroute"+Object(f.getTemplateSrv)().replace(t.metricsContext,e)})]:[2,Promise.resolve()]}))}))},e.prototype.query=function(t){return c(this,void 0,Promise,(function(){var e,n=this;return u(this,(function(o){switch(o.label){case 0:return e=t.targets.flatMap((function(e){return n.doRequest(e,t.scopedVars).then((function(t){var e=new r.MutableDataFrame({name:"nodes",meta:{preferredVisualisationType:"nodeGraph"},fields:[{name:"id",type:r.FieldType.string},{name:"title",type:r.FieldType.string},{name:"subTitle",type:r.FieldType.string},{name:"mainStat",type:r.FieldType.string,config:{displayName:null==t?void 0:t.data.config.mainStat.displayName}},{name:"secondaryStat",type:r.FieldType.string,config:{displayName:null==t?void 0:t.data.config.secondaryStat.displayName}},{name:"arc__1",type:r.FieldType.number,config:{displayName:null==t?void 0:t.data.config.arc__1.displayName,color:{mode:r.FieldColorModeId.Fixed,fixedColor:null==t?void 0:t.data.config.arc__1.color}}},{name:"arc__2",type:r.FieldType.number,config:{displayName:null==t?void 0:t.data.config.arc__2.displayName,color:{mode:r.FieldColorModeId.Fixed,fixedColor:null==t?void 0:t.data.config.arc__2.color}}},{name:"arc__3",type:r.FieldType.number,config:{displayName:null==t?void 0:t.data.config.arc__3.displayName,color:{mode:r.FieldColorModeId.Fixed,fixedColor:null==t?void 0:t.data.config.arc__3.color}}}]}),n=new r.MutableDataFrame({name:"edges",meta:{preferredVisualisationType:"nodeGraph"},fields:[{name:"id",type:r.FieldType.string},{name:"source",type:r.FieldType.string},{name:"target",type:r.FieldType.string},{name:"mainStat",type:r.FieldType.string},{name:"secondaryStat",type:r.FieldType.string}]});return t&&(t.data.nodes.forEach((function(t){e.appendRow([t.id,t.title,t.subTitle,t.mainStat,t.secondaryStat,t.arc__1,t.arc__2,t.arc__3])})),t.data.edges.forEach((function(t){n.appendRow([t.id,t.source,t.target,t.mainStat,t.secondaryStat])}))),[e,n]}))})),[4,Promise.all(e).then((function(t){return{data:l(t,1)[0]}}))];case 1:return[2,o.sent()]}}))}))},e.prototype.testDatasource=function(){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,{status:"success",message:"Success"}]}))}))},e}(r.DataSourceApi),p=n(1),y=n.n(p),d=n(2),v=d.LegacyForms.FormField,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onBaseUrlChange=function(t){var n=e.props,r=n.onOptionsChange,o=n.options,i=a(a({},o.jsonData),{baseUrl:t.target.value});r(a(a({},o),{jsonData:i}))},e}return i(e,t),e.prototype.render=function(){var t=this.props.options.jsonData;return y.a.createElement("div",{className:"gf-form-group"},y.a.createElement("div",{className:"gf-form"},y.a.createElement(v,{label:"BaseUrl",labelWidth:6,inputWidth:20,onChange:this.onBaseUrlChange,value:t.baseUrl||"",tooltip:"Base url to metrics service",placeholder:"Base url to metrics service"})))},e}(p.PureComponent),h=n(17),g=n.n(h),m={},x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onMetricsContextChange=function(t){var n=e.props,r=n.onChange,o=n.query,i=n.onRunQuery;r(a(a({},o),{metricsContext:t.target.value})),i()},e}return i(e,t),e.prototype.render=function(){var t=g()(this.props.query,m).metricsContext;return y.a.createElement("div",{style:{width:"100%"}},y.a.createElement(d.InlineFieldRow,null,y.a.createElement(d.Alert,{title:"Check required JSON format on https://github.com/k8spacket/node-graph-plugin",severity:"info"})),y.a.createElement(d.InlineFieldRow,null,y.a.createElement(d.InlineField,{label:"Metrics context",grow:!0},y.a.createElement(d.Input,{type:"text",value:t||"",onChange:this.onMetricsContextChange}))))},e}(p.PureComponent);n.d(e,"plugin",(function(){return j}));var j=new r.DataSourcePlugin(s).setConfigEditor(b).setQueryEditor(x)}])}));
//# sourceMappingURL=module.js.map