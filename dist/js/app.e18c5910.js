(function(t){function e(e){for(var a,r,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({completed:"completed",current:"current",home:"home",topic:"topic",vote:"vote"}[t]||t)+"."+{completed:"896012e1",current:"5e2171e9",home:"f9b271ea",topic:"1b908189",vote:"ea0d19cd"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={completed:1,current:1,home:1,topic:1,vote:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({completed:"completed",current:"current",home:"home",topic:"topic",vote:"vote"}[t]||t)+"."+{completed:"87d24d40",current:"5487e870",home:"e6f67693",topic:"92aa8e4e",vote:"4cda8ebd"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("figure",[n("img",{attrs:{src:t.image,alt:""}})]),n("div",{staticClass:"vote-diagram"},[n("h4",[t._v(t._s(t.obj.vote_title))]),n("vote-diagram",{attrs:{up:Math.ceil(t.upBalance)||Math.ceil(t.obj.vote_up_bal),down:Math.ceil(t.downBalance)||Math.ceil(t.obj.vote_down_bal)}}),"home"!=t.$route.name&&"current"!=t.$route.name?n("div",{staticClass:"button-group"},[n("button",{staticClass:"button button__success",on:{click:function(e){return t.voteUp(t.obj.vote_up_addr)}}},[t._v(" Yes ")]),n("button",{staticClass:"button button__error",on:{click:function(e){return t.voteDown(t.obj.vote_down_addr)}}},[t._v(" No ")])]):t._e(),"vote"!=t.$route.name?n("gradient-button",{attrs:{text:"Vote now",url:"vote/"+t.obj.vote_id}}):t._e()],1)])},r=[],o=(n("7db0"),n("a9e3"),n("56d7")),s={props:{id:{type:Number,default:null},obj:{type:Object,default:function(){return[]}}},data:function(){return{image:this.obj.image,balToggle:!1,upBal:{},downBal:{}}},computed:{upBalance:function(){return"undefined"!==typeof this.upBal.data?this.upBal.data.B.find((function(t){return"VOTE-692M"==t.a})).f:null},downBalance:function(){return"undefined"!==typeof this.downBal.data?this.downBal.data.B.find((function(t){return"VOTE-692M"==t.a})).f:null}},methods:{voteUp:function(t){o["bus"].$emit("setModal",{token:t,method:"voteUp"})},voteDown:function(t){o["bus"].$emit("setModal",{token:t,method:"voteDown"})}},created:function(){var t=this;try{var e=new WebSocket("wss://dex.binance.org/api/ws");e.onopen=function(){e.send(JSON.stringify({method:"subscribe",topic:"accounts",address:t.obj.vote_up_addr}))},e.onmessage=function(e){var n=e.data;t.upBal=JSON.parse(n)};var n=new WebSocket("wss://dex.binance.org/api/ws");n.onopen=function(){n.send(JSON.stringify({method:"subscribe",topic:"accounts",address:t.obj.vote_down_addr}))},n.onmessage=function(e){var n=e.data;t.downBal=JSON.parse(n)}}catch(a){console.log(a)}}},i=s,u=(n("a2a4"),n("2877")),c=Object(u["a"])(i,a,r,!1,null,"e875b9ae",null);e["default"]=c.exports},"0158":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("nav-brand"),n("svg",{staticClass:"nav-menu",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"31",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","aria-pressed":t.toggle?"true":"false"},on:{click:function(e){t.toggle=!t.toggle}}},[n("line",{attrs:{x1:"3",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"21",y2:"18"}})]),n("ul",{staticClass:"nav-items",class:{active:t.toggle}},[n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/current"}},[t._v("Current voting")])],1),n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/completed"}},[t._v("Completed voting")])],1),n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/topic"}},[t._v("Suggest topic")])],1),n("ul",{staticClass:"nav-items__item"},[n("li",{staticClass:"nav-items__item-locale"},[n("span",{staticClass:"nav-items__item-link",attrs:{"aria-pressed":t.active?"true":"false"},on:{click:function(e){t.active=!t.active}}},[t._v("En")])]),t.active?n("ul",{staticClass:"nav-items__item-sub"},[n("li",{staticClass:"nav-items__item-sub-link"},[t._v("Ru")]),n("li",{staticClass:"nav-items__item-sub-link"},[t._v("Zh")])]):t._e()])])],1)},r=[],o={data:function(){return{active:!1,toggle:!1}}},s=o,i=(n("ee42"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"07f29a3a",null);e["default"]=u.exports},"0679":function(t){t.exports=JSON.parse('{"data":""}')},"07b4":function(t,e,n){},"0920":function(t,e,n){"use strict";var a=n("4900"),r=n.n(a);r.a},"0a50":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Votes "),n("ul",{staticClass:"diagram",style:t.gridStyle},[n("li",{staticClass:"diagram__up"}),n("li",{staticClass:"diagram__down"})]),n("ul",{staticClass:"diagram__items"},[n("li",{staticClass:"diagram__up-item"},[n("span",[t._v("Yes "+t._s(t.percentage(t.up).toFixed(0))+" %")]),t._v(" "+t._s(t.up)+" VOTE(BEP8) ")]),n("li",{staticClass:"diagram__down-item"},[n("span",[t._v("No "+t._s(t.percentage(t.down).toFixed(0))+"%")]),t._v(" "+t._s(t.down)+" VOTE(BEP8) ")])])])},r=[],o=(n("99af"),n("a9e3"),{props:{up:Number,down:Number},computed:{gridStyle:function(){return{gridTemplateColumns:"".concat(this.up||1,"fr ").concat(this.down||1,"fr")}}},methods:{percentage:function(t){return t/(this.up+this.down)*100||0}}}),s=o,i=(n("0920"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"7f398379",null);e["default"]=u.exports},"0ade":function(t){t.exports=JSON.parse('{"data":""}')},"0eb7":function(t,e,n){},"19eb":function(t,e,n){},"236e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",{staticClass:"nav-items"},[n("span",[t._v("Follow Us")]),n("nav-social",{staticClass:"nav-items__item"}),n("li",{staticClass:"nav-items__item-copyright"},[t._v(" © 2018-2020 TBCC Inc. All rights reserved ")])],1)])},r=[],o={},s=o,i=(n("536c"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"ff30682a",null);e["default"]=u.exports},"279f":function(t,e,n){"use strict";var a=n("8a52"),r=n.n(a);r.a},"2fc2":function(t,e,n){"use strict";var a=n("0eb7"),r=n.n(a);r.a},"30a4":function(t,e,n){"use strict";var a=n("deb3"),r=n("bc3a"),o=n.n(r);o.a.defaults.baseURL="https://tbccvote.com/api",e["a"]={init:function(){var t=o.a.defaults.headers.common;t["Content-Type"]="application/json; charset=utf-8",t["Authorization"]="".concat(a["a"].get("session_data").user.token)},close:function(){return o.a.defaults.headers.common={},a["a"].remove("session_data")},get:function(t){return o.a.get(t)},post:function(t,e){return o.a.post(t,e)},put:function(t,e){return o.a.put(t,e)},delete:function(t,e){return o.a.delete(t,e)}}},"3b35":function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),r=n("deb3"),o=n("30a4"),s=n("a18c"),i={data:r["a"].get("session_data"),status:""},u={responseData:function(t){return t.data?t.data:null},responseStatus:function(t){return!!t.status&&t.status}},c={signin:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,o["a"].post("auth/login",e).then((function(t){a("responseData",t.data),a("responseStatus",t.data,{root:!0}),o["a"].init()})).catch((function(t){a("responseStatus",t.response.data,{root:!0})}));case 3:case"end":return n.stop()}}),n)})))()},signout:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,o["a"].init(),e.next=4,o["a"].post("auth/logout").then((function(t){n("responseStatus",t.data,{root:!0})})).catch((function(t){n("responseStatus",t.response.data,{root:!0})}));case 4:i.data=null,o["a"].close(),s["a"].push("/");case 7:case"end":return e.stop()}}),e)})))()}},l={responseData:function(t,e){r["a"].set("session_data",{user:{status:e.status,message:e.message,token:e.Authorization}}),t.data=r["a"].get("session_data")},responseStatus:function(t,e){t.status=e,setTimeout((function(){t.status=""}),3e3)}};e["default"]={namespaced:!0,state:i,getters:u,actions:c,mutations:l}},"3c28":function(t,e,n){var a={"./en.json":"0679","./ru.json":"0ade","./zh.json":"e086"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="3c28"},"3d72":function(t,e,n){},"3e99":function(t,e,n){"use strict";var a=n("19eb"),r=n.n(a);r.a},4057:function(t,e,n){t.exports=n.p+"img/device_votes.50589efa.png"},"437c":function(t,e,n){},4900:function(t,e,n){},"4f8a":function(t,e,n){},"517a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[t._m(0),n("p",{staticClass:"hero__body"},[t._v(" Help us to make the right decisions that will fit you. ")]),n("gradient-button",{attrs:{text:"Give your vote",url:"current"}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"hero__title"},[t._v(" Participate in voting with"),n("br"),t._v(" Vote (BEP8) ")])}],o={},s=o,i=(n("da38"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"3c7df4d6",null);e["default"]=u.exports},"536c":function(t,e,n){"use strict";var a=n("dae5"),r=n.n(a);r.a},"544d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slogan"},[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("p",{staticClass:"slogan__body"},[t._v(" "+t._s(t.text)+" ")]),t.buttonText?n("gradient-button",{attrs:{text:t.buttonText,url:t.url}}):t._e()],1)},r=[],o={props:{title:{type:String},text:{type:String,default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam provident commodi repellendus deleniti nemo. Natus quam optio, accusamus est, voluptate impedit minus a iure repellendus debitis sed asperiores exercitationem?"},buttonText:{type:String,default:""},url:{type:String,default:null}}},s=o,i=(n("fca4"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"db248c78",null);e["default"]=u.exports},5573:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",[n("router-link",{attrs:{tag:"svg",to:"/",fill:"none",width:"70",viewBox:"0 0 36 30"}},[n("defs"),n("path",{attrs:{fill:"url(#paint0_linear)",d:"M18.0116 30L0 19.7332V0l9.27238 5.28201v9.16919l8.73922 4.9848 8.716-4.9619V5.30488L36 .0228659V19.7561L18.0116 30z"}}),n("path",{attrs:{fill:"url(#paint1_linear)",d:"M11.7296 5.92227v7.13413l6.2588 3.5671 6.282-3.5671V5.92227l-6.282-3.56708-6.2588 3.56708z"}}),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"35.9305",x2:".233165",y1:"-.00000202",y2:"20.0792",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#00C6FF"}}),n("stop",{attrs:{offset:"1","stop-color":"#0072FF"}})],1),n("linearGradient",{attrs:{id:"paint1_linear",x1:"35.9305",x2:".233165",y1:"-.00000202",y2:"20.0792",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#00C6FF"}}),n("stop",{attrs:{offset:"1","stop-color":"#0072FF"}})],1)],1)]),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figcaption",[t._v("TBCC Vote "),n("span",[t._v("VOTE (Bep8)")])])}],o=(n("2fc2"),n("2877")),s={},i=Object(o["a"])(s,a,r,!1,null,"00a63bd1",null);e["default"]=i.exports},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return j}));n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("da2f"),n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var a=n("2b0e"),r=n("c63d");r.keys().forEach((function(t){var e=r(t),n=t.replace(/-(.)/g,(function(t,e){return e.toUpperCase()})).replace(/(\.\/|\.vue)/g,"").replace(/^\w/,(function(t){return t.toUpperCase()}));a["a"].component(n,e.default||e)}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{attrs:{id:"app"}},[n("header",[n("nav-header")],1),n("main",[n("router-view")],1),n("footer",[n("nav-footer")],1),t.modal?n("modal",[n("qrcode",{attrs:{value:t.modalData.token,options:{width:240,margin:0}}}),n("h4",[t._v("Cast your vote "+t._s(t.modalData.method)+".")]),n("p",[t._v("List your VOTE(BEP8) tokens to the address")]),n("address",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.modalData.token,expression:"modalData.token"}]},[t._v(t._s(t.modalData.token)+" "),n("small",[t._v("click to copy address")])])],1):t._e()],1)},s=[],i={data:function(){return{modal:!1,modalData:[]}},created:function(){var t=this;j.$on("setModal",(function(e){t.modal=!t.modal,t.modalData=e})),j.$on("close",(function(e){t.modal=!t.modal}))}},u=i,c=(n("6294"),n("2877")),l=Object(c["a"])(u,o,s,!1,null,null,null),d=l.exports,f=n("4ae6"),v=n.n(f),p=(n("466d"),n("a925")),m=n("deb3");a["a"].use(p["a"]);var h=function(){return m["a"].get("session_data").locale};function _(){var t=n("3c28"),e={};return t.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];e[r]=t(n)}})),e}var g=new p["a"]({locale:h()||"en",fallbackLocale:"en",messages:_()}),b=n("a18c"),w=n("2f62");a["a"].use(w["a"]);var x=n("d307"),y={};x.keys().forEach((function(t){var e=t.replace(/(\.\/|\.js)/g,"").replace(/^\w/,(function(t){return t.toUpperCase()}));y[e]=x(t).default||x(t)}));var C=new w["a"].Store({state:{status:""},getters:{responseStatus:function(t){return t.status?t.status:""}},mutations:{responseStatus:function(t,e){t.status=e,setTimeout((function(){t.status=""}),3e3)}},modules:y}),O=n("b2e5"),k=n.n(O),j=new a["a"];a["a"].use(v.a),a["a"].component(k.a.name,k.a),a["a"].config.productionTip=!1,new a["a"]({router:b["a"],store:C,i18n:g,render:function(t){return t(d)}}).$mount("#app")},5856:function(t,e,n){},"588f":function(t,e,n){"use strict";var a=n("3d72"),r=n.n(a);r.a},"58f7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vote-example"},[a("ul",{staticClass:"vote-example__items"},[a("li",{staticClass:"vote-example__items-item"},[t._v(' The mechanish of voting is quite simple. You have to choose the topic, that you are interested in, select your answer for it "yes" or "no" and finish voting with your Vote (Bep8). '),a("span",[t._v("1 vote = 1 Vote (BEP8)")])]),a("li",{staticClass:"vote-example__items-item"},[a("figure",[a("img",{attrs:{src:n("4057"),alt:""}})])])])])}],o={},s=o,i=(n("6c24"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"1cb26243",null);e["default"]=u.exports},6294:function(t,e,n){"use strict";var a=n("437c"),r=n.n(a);r.a},6898:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal__mask",on:{click:t.close}},[n("div",{staticClass:"modal__container"},[t._t("default")],2)])])},r=[],o=n("56d7"),s={methods:{close:function(){o["bus"].$emit("close",!0)}}},i=s,u=(n("db99"),n("2877")),c=Object(u["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"6a86":function(t,e,n){},"6c24":function(t,e,n){"use strict";var a=n("d011"),r=n.n(a);r.a},"726b":function(t,e,n){},"8a52":function(t,e,n){},"8c7f":function(t,e,n){"use strict";var a=n("6a86"),r=n.n(a);r.a},"9a55":function(t,e,n){t.exports=n.p+"img/votecard2.9452bec5.png"},"9e71":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"button",attrs:{tag:"button",to:"/"+t.url}},[n("span",{staticClass:"button__text"},[t._v(t._s(t.text))])])},r=[],o={props:{text:{type:String,default:"Button"},url:{type:String,default:null}}},s=o,i=(n("279f"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"02b98eed",null);e["default"]=u.exports},a01d:function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),r=(n("deb3"),n("30a4")),o={data:[],status:""},s={responseData:function(t){return t.data?t.data:null}},i={votes:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,r["a"].get("/tickets").then((function(t){n("responseData",t.data)})).catch((function(t){n("responseData",t.response.data)}));case 3:case"end":return e.stop()}}),e)})))()}},u={responseData:function(t,e){t.data=e}};e["default"]={namespaced:!0,state:o,getters:s,actions:i,mutations:u}},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f");a["a"].use(r["a"]);var o=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"51d9"))}},{path:"/current",name:"current",component:function(){return n.e("current").then(n.bind(null,"dc67"))}},{path:"/topic",name:"topic",component:function(){return n.e("topic").then(n.bind(null,"7db3"))}},{path:"/vote/:id",name:"vote",component:function(){return n.e("vote").then(n.bind(null,"1efd"))}},{path:"/completed",name:"completed",component:function(){return n.e("completed").then(n.bind(null,"ad72"))}}],s=new r["a"]({mode:"history",base:"/",routes:o,scrollBehavior:function(t,e,n){return{x:0,y:0}}});e["a"]=s},a2a4:function(t,e,n){"use strict";var a=n("5856"),r=n.n(a);r.a},a9d3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[n("rect",{attrs:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}}),n("path",{attrs:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}}),n("line",{attrs:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}})])]),n("a",{attrs:{href:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},[n("path",{attrs:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}})])]),n("a",{attrs:{href:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[n("line",{attrs:{x1:"22",y1:"2",x2:"11",y2:"13"}}),n("polygon",{attrs:{points:"22 2 15 22 11 13 2 9 22 2"}})])]),n("a",{attrs:{href:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},[n("path",{attrs:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}})])])])},r=[],o={},s=o,i=(n("3e99"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"d9777b36",null);e["default"]=u.exports},b64b:function(t,e,n){},b7bd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote-previous"},["completed"!=t.$route.name?n("h3",[t._v("Next vote")]):t._e(),t._m(0),"current"!=t.$route.name?n("a",{staticClass:"button",attrs:{href:""}},[t._v("View more")]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vote-previous__list"},[a("article",[a("figure",[a("img",{attrs:{src:n("eb00"),alt:""}})])]),a("article",[a("figure",[a("img",{attrs:{src:n("9a55"),alt:""}})])]),a("article",[a("figure",[a("img",{attrs:{src:n("e4e8"),alt:""}})])])])}],o={},s=o,i=(n("daf0"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"3b8f2498",null);e["default"]=u.exports},c169:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote"},[n("h3",[t._v(t._s(t.title))]),n("div",{staticClass:"vote__list"},t._l(t.data,(function(t){return n("vote-card",{key:t.id,attrs:{id:t.id,obj:t}})})),1),"current"!=t.$route.name&&"vote"!=t.$route.name?n("router-link",{staticClass:"button",attrs:{to:"/current"}},[t._v("View all open voting")]):t._e()],1)},r=[],o=(n("96cf"),n("1da1")),s=n("5530"),i=n("2f62"),u={props:{title:{type:String,default:"Title"}},computed:Object(s["a"])({},Object(i["c"])({data:"Data/responseData"})),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("Data",["votes"])),{},{reloadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.votes();case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.reloadData();case 2:case"end":return e.stop()}}),e)})))()}},c=u,l=(n("588f"),n("2877")),d=Object(l["a"])(c,a,r,!1,null,"f8a74082",null);e["default"]=d.exports},c63d:function(t,e,n){var a={"./gradient-button.vue":"9e71","./main-example.vue":"58f7","./main-hero.vue":"517a","./main-slogan.vue":"544d","./main-votelist.vue":"c169","./main-votenext.vue":"b7bd","./modal.vue":"6898","./nav-brand.vue":"5573","./nav-footer.vue":"236e","./nav-header.vue":"0158","./nav-social.vue":"a9d3","./timer.vue":"d5a7","./vote-card.vue":"00e1","./vote-diagram.vue":"0a50"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="c63d"},d011:function(t,e,n){},d307:function(t,e,n){var a={"./data.js":"a01d","./session.js":"3b35"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="d307"},d5a7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentTime?n("ul",{staticClass:"text-center"},[t.days?n("li",[t._v(t._s(t.days)),n("i",[t._v(":")]),n("span",[t._v("Days")])]):t._e(),t.hours?n("li",[t._v(t._s(t._f("formatTime")(t.hours))),n("i",[t._v(":")]),n("span",[t._v("Hours")])]):t._e(),n("li",[t._v(t._s(t._f("formatTime")(t.minutes))),n("i",[t._v(":")]),n("span",[t._v("Minutes")])]),n("li",[t._v(t._s(t._f("formatTime")(t.seconds))),n("span",[t._v("Seconds")])])]):t._e(),t.currentTime?t._e():n("div",{staticClass:"text-center"},[t._v(" Time's Up! ")])])},r=[],o=(n("a9e3"),{props:{deadline:{type:String,required:!0},speed:{type:Number,default:1e3}},data:function(){return{currentTime:Date.parse(this.deadline)-Date.parse(new Date)}},mounted:function(){setTimeout(this.countdown,1e3)},computed:{seconds:function(){return Math.floor(this.currentTime/1e3%60)},minutes:function(){return Math.floor(this.currentTime/1e3/60%60)},hours:function(){return Math.floor(this.currentTime/36e5%24)},days:function(){return Math.floor(this.currentTime/864e5)}},filters:{formatTime:function(t){return t<10?"0"+t:t}},methods:{countdown:function(){this.currentTime=Date.parse(this.deadline)-Date.parse(new Date),this.currentTime>0?setTimeout(this.countdown,this.speed):this.currentTime=null}}}),s=o,i=(n("8c7f"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"3b2ddf0a",null);e["default"]=u.exports},d7fb:function(t,e,n){},da2f:function(t,e,n){},da38:function(t,e,n){"use strict";var a=n("d7fb"),r=n.n(a);r.a},dae5:function(t,e,n){},daf0:function(t,e,n){"use strict";var a=n("07b4"),r=n.n(a);r.a},db99:function(t,e,n){"use strict";var a=n("4f8a"),r=n.n(a);r.a},deb3:function(t,e,n){"use strict";e["a"]={get:function(t){return!!localStorage.getItem(t)&&JSON.parse(localStorage.getItem(t))},set:function(t,e){return localStorage.getItem(t)?localStorage.setItem(t,JSON.stringify(Object.assign(JSON.parse(localStorage.getItem(t)),e))):localStorage.setItem(t,JSON.stringify(e))},remove:function(t){return localStorage.removeItem(t)}}},e086:function(t){t.exports=JSON.parse('{"data":""}')},e4e8:function(t,e,n){t.exports=n.p+"img/votecard3.c2217bd2.png"},eb00:function(t,e,n){t.exports=n.p+"img/votecard1.b8de9d15.png"},ee42:function(t,e,n){"use strict";var a=n("b64b"),r=n.n(a);r.a},fca4:function(t,e,n){"use strict";var a=n("726b"),r=n.n(a);r.a}});