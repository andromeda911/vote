(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({completed:"completed",current:"current",home:"home",topic:"topic",vote:"vote"}[t]||t)+"."+{completed:"e1df7f0f",current:"a4a0f38a",home:"0964fc8a",topic:"740993f3",vote:"a9d102f3"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={completed:1,current:1,home:1,topic:1,vote:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({completed:"completed",current:"current",home:"home",topic:"topic",vote:"vote"}[t]||t)+"."+{completed:"a000e70f",current:"a07f2ee9",home:"1f09e7f3",topic:"b4dba6f0",vote:"4e3f4cba"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return Date.parse(t.obj.date_end.slice(0,10))>=Date.parse(new Date)?n("article",[n("figure",[n("img",{attrs:{src:t.image,alt:""}})]),n("div",{staticClass:"vote-diagram"},[n("h4",[t._v(t._s(t.obj.vote_title))]),n("vote-diagram",{attrs:{up:Math.ceil(t.upBalance)||Math.ceil(t.obj.vote_up_bal),down:1e5}}),"home"!=t.$route.name&&"current"!=t.$route.name?n("div",{staticClass:"button-group"},[n("button",{staticClass:"button button__success",on:{click:function(e){return t.voteUp(t.obj.vote_up_addr)}}},[t._v(" "+t._s(t.$t("main[3][4]"))+" ")])]):t._e(),"vote"!=t.$route.name&&Date.parse(t.obj.date_end.slice(0,10))>=Date.parse(new Date)?n("gradient-button",{attrs:{text:t.$t("main[3][3]"),url:"current/"+t.obj.vote_id}}):t._e()],1)]):t._e()},r=[],o=(n("7db0"),n("a9e3"),n("56d7")),s={props:{id:{type:Number,default:null},obj:{type:Object,default:function(){return[]}}},data:function(){return{image:this.obj.image,balToggle:!1,upBal:{},downBal:{}}},computed:{upBalance:function(){return"undefined"!==typeof this.upBal.data?this.upBal.data.B.find((function(t){return"VOTE-692M"==t.a})).f:null},downBalance:function(){return"undefined"!==typeof this.downBal.data?this.downBal.data.B.find((function(t){return"VOTE-692M"==t.a})).f:null}},methods:{voteUp:function(t){o["bus"].$emit("setModal",{token:t,method:"voteUp"})},voteDown:function(t){o["bus"].$emit("setModal",{token:t,method:"voteDown"})}},created:function(){var t=this;try{var e=new WebSocket("wss://dex.binance.org/api/ws");e.onopen=function(){e.send(JSON.stringify({method:"subscribe",topic:"accounts",address:t.obj.vote_up_addr}))},e.onmessage=function(e){var n=e.data;t.upBal=JSON.parse(n)};var n=new WebSocket("wss://dex.binance.org/api/ws");n.onopen=function(){n.send(JSON.stringify({method:"subscribe",topic:"accounts",address:t.obj.vote_down_addr}))},n.onmessage=function(e){var n=e.data;t.downBal=JSON.parse(n)}}catch(a){console.log(a)}}},i=s,c=(n("09e7"),n("2877")),u=Object(c["a"])(i,a,r,!1,null,"6cf0002f",null);e["default"]=u.exports},"0158":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("nav-brand"),n("svg",{staticClass:"nav-menu",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"31",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","aria-pressed":t.toggle?"true":"false"},on:{click:function(e){t.toggle=!t.toggle}}},[n("line",{attrs:{x1:"3",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"21",y2:"18"}})]),n("ul",{staticClass:"nav-items",class:{active:t.toggle}},[n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/current"}},[t._v(t._s(t.$t("navbar[0][0]")))])],1),n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/completed"}},[t._v(t._s(t.$t("navbar[0][1]")))])],1),n("li",{staticClass:"nav-items__item"},[n("router-link",{staticClass:"nav-items__item-link",attrs:{"active-class":"active",to:"/topic"}},[t._v(t._s(t.$t("navbar[0][2]")))])],1),n("ul",{staticClass:"nav-items__item"},[n("li",{staticClass:"nav-items__item-locale"},[n("span",{staticClass:"nav-items__item-link",attrs:{"aria-pressed":t.active?"true":"false"},on:{click:function(e){t.active=!t.active}}},[t._v(t._s(t.$i18n.locale))])]),t.active?n("ul",{staticClass:"nav-items__item-sub"},t._l(t.locales,(function(e){return n("li",{key:e.id,staticClass:"nav-items__item-sub-link",domProps:{textContent:t._s(e)},on:{click:function(n){t.sessionLocale(e),t.$i18n.locale=e,t.active=!t.active}}})})),0):t._e()])])],1)},r=[],o=(n("4de4"),n("5530")),s=n("2f62"),i={data:function(){return{active:!1,toggle:!1}},computed:{locales:function(t){return t.$i18n.availableLocales.filter((function(e){return e!==t.$i18n.locale}))}},methods:Object(o["a"])({},Object(s["b"])("Session",["sessionLocale"]))},c=i,u=(n("11e4"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,"92c20a80",null);e["default"]=l.exports},"0656":function(t,e,n){},"0679":function(t){t.exports=JSON.parse('{"navbar":[["Current voting","Completed voting","Suggest topic"],["Follow Us","All rights reserved"]],"main":[["Participate in voting with","Help us to make the right decisions that will fit you.","Give your vote"],["TBCC is growing and developing and we want our users to take an active part in innovations. For this purpose, we have created a service for online voting. With it, you can cast your vote for or against new activity."],["The mechanish of voting is quite simple. You have to choose the topic, that you are interested in, select your answer for it `Yes` or `No` and finish voting with your Vote (Bep8).","1 vote = 1 Vote (BEP8)"],["Current vote","View all open voting","Votes","Vote now","Yes","No"],["Next vote","View more"],["We want to receive feedback from you. If you have ideas of voting — don`t hesitate to offer it.","Suggest a voting topic"],["Time\'s Up!","Days","Hours","Minutes","Seconds"],["Voting","You can vote as many times as you want until the time of current voting is finished. Don\'t waste your time — give your vote now!","View all open voting"],["Please vote by sending your VOTE (Bep8) tokens to the address:","click to copy address","the address on the clipboard!"]],"current":[["Give your vote now"]],"completed":[["Completed voting","You can find previous voting with its results below"]],"topic":[["Suggest topic","Coming soon.."]],"errors":[["404","Page not found."]]}')},"09e7":function(t,e,n){"use strict";var a=n("d29e"),r=n.n(a);r.a},"0a50":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("ul",{staticClass:"diagram"},[n("li",{staticClass:"diagram__up",style:t.gridStyle})]),n("ul",{staticClass:"diagram__items"},[n("li",{staticClass:"diagram__up-item"},[t._v(" "+t._s(t.up)+" VOTE(BEP8) ")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"diagram__header"},[n("li",[t._v("Votes")]),n("li",[t._v("20 000")]),n("li",[t._v("MAX")])])}],o=(n("a9e3"),n("b680"),{props:{up:Number,down:Number},computed:{gridStyle:function(){return{width:"".concat(this.percentage(this.up).toFixed(1)||1,"%")}}},methods:{percentage:function(t){return t/this.down*100||0}}}),s=o,i=(n("a560"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"24a3559e",null);e["default"]=c.exports},"0ade":function(t){t.exports=JSON.parse('{"navbar":[["Текущее голосование","Завершенное голосование","Предложить тему"],["Подписывайтесь на нас","Все права защищены"]],"main":[["Участвовать в голосовании","Помогите нам принять правильные решения, которые подходят именно вам..","Отдать свой голос"],["TBCC растет и развивается, и мы хотим, чтобы наши пользователи принимали активное участие в инновациях. Для этого мы создали сервис онлайн-голосования. С его помощью вы можете проголосовать за или против нового продукта.."],["Механизм голосования довольно прост. Вам нужно выбрать голосование, которое вас интересует и дать на нее свой ответ «Да» или «Нет» и завершить голосование своим Голосом (Bep8).","1 голос = 1 Vote (BEP8)"],["Текущий голос","Просмотреть все открытые глосования","Голоса","Голосуйте сейчас","Да","Нет"],["Следующее голосование","Посмотреть еще"],["Мы хотим получить обратную связь от вас. Если у вас есть идеи для голосования — не стесняйтесь предлагать их.","Предложите тему для голосования"],["Время вышло!","Дни","Часы","Минуты","Секунды"],["Голосование","Вы можете голосовать столько раз, сколько захотите, пока не закончится время текущего голосования. Не теряйте времени — отдайте свой голос прямо сейчас!","Просмотреть все открытые голосования"],["Проголосуйте, отправив ваши токены VOTE (Bep8) по адресу:","нажмите, чтобы скопировать адрес","адрес в буфере обмена!"]],"current":[["Отдайте свой голос прямо сейчас"]],"completed":[["Голосование завершено","Вы можете найти предыдущее голосование с его результатами ниже"]],"topic":[["Предложите тему","Скоро будет.."]],"errors":[["404","Страница не найдена."]]}')},"0eb7":function(t,e,n){},"0ed0":function(t,e,n){},"11e4":function(t,e,n){"use strict";var a=n("0ed0"),r=n.n(a);r.a},"236e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",{staticClass:"nav-items"},[n("span",[t._v(t._s(t.$t("navbar[1][0]")))]),n("nav-social",{staticClass:"nav-items__item"}),n("li",{staticClass:"nav-items__item-copyright"},[t._v("© 2018-2020 TBCC Inc. "+t._s(t.$t("navbar[1][1]")))])],1)])},r=[],o={},s=o,i=(n("705f"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"41770dc3",null);e["default"]=c.exports},2591:function(t,e,n){},"279f":function(t,e,n){"use strict";var a=n("8a52"),r=n.n(a);r.a},"2dfe":function(t,e,n){},"2fc2":function(t,e,n){"use strict";var a=n("0eb7"),r=n.n(a);r.a},"30a4":function(t,e,n){"use strict";var a=n("deb3"),r=n("bc3a"),o=n.n(r);o.a.defaults.baseURL="https://tbccvote.com/api",e["a"]={init:function(){var t=o.a.defaults.headers.common;t["Content-Type"]="application/json; charset=utf-8",t["Authorization"]="".concat(a["a"].get("session_data").user.token)},close:function(){return o.a.defaults.headers.common={},a["a"].remove("session_data")},get:function(t){return o.a.get(t)},post:function(t,e){return o.a.post(t,e)},put:function(t,e){return o.a.put(t,e)},delete:function(t,e){return o.a.delete(t,e)}}},"35e8":function(t,e,n){"use strict";var a=n("b56b"),r=n.n(a);r.a},"3ae0":function(t,e,n){},"3b35":function(t,e,n){"use strict";n.r(e);var a=n("deb3"),r=(n("30a4"),n("a18c"),{data:a["a"].get("session_data"),status:""}),o={responseData:function(t){return t.data?t.data:null},responseStatus:function(t){return!!t.status&&t.status}},s={sessionLocale:function(t,e){t.commit;a["a"].set("session_data",{locale:e})}},i={responseData:function(t,e){a["a"].set("session_data",{user:{status:e.status,message:e.message,token:e.Authorization}}),t.data=a["a"].get("session_data")},responseStatus:function(t,e){t.status=e,setTimeout((function(){t.status=""}),3e3)}};e["default"]={namespaced:!0,state:r,getters:o,actions:s,mutations:i}},"3c28":function(t,e,n){var a={"./en.json":"0679","./ru.json":"0ade","./zh.json":"e086"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="3c28"},4057:function(t,e,n){t.exports=n.p+"img/device_votes.50589efa.png"},"437c":function(t,e,n){},"4f8a":function(t,e,n){},"517a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("h1",{staticClass:"hero__title"},[t._v(" "+t._s(t.$t("main[0][0]"))),n("br"),t._v(" Vote (BEP8) ")]),n("p",{staticClass:"hero__body"},[t._v(" "+t._s(t.$t("main[0][1]"))+" ")]),n("gradient-button",{attrs:{text:t.$t("main[0][2]"),url:"current"}})],1)},r=[],o={},s=o,i=(n("f2a7"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"3848491d",null);e["default"]=c.exports},"544d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slogan"},[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("p",{staticClass:"slogan__body"},[t._v(" "+t._s(t.text)+" ")]),t.buttonText?n("gradient-button",{attrs:{text:t.buttonText,url:t.url}}):t._e()],1)},r=[],o={props:{title:{type:String},text:{type:String,default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam provident commodi repellendus deleniti nemo. Natus quam optio, accusamus est, voluptate impedit minus a iure repellendus debitis sed asperiores exercitationem?"},buttonText:{type:String,default:""},url:{type:String,default:null}}},s=o,i=(n("8554"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"318e51fb",null);e["default"]=c.exports},5573:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",[n("router-link",{attrs:{tag:"svg",to:"/",fill:"none",width:"70",viewBox:"0 0 36 30"}},[n("defs"),n("path",{attrs:{fill:"url(#paint0_linear)",d:"M18.0116 30L0 19.7332V0l9.27238 5.28201v9.16919l8.73922 4.9848 8.716-4.9619V5.30488L36 .0228659V19.7561L18.0116 30z"}}),n("path",{attrs:{fill:"url(#paint1_linear)",d:"M11.7296 5.92227v7.13413l6.2588 3.5671 6.282-3.5671V5.92227l-6.282-3.56708-6.2588 3.56708z"}}),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"35.9305",x2:".233165",y1:"-.00000202",y2:"20.0792",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#00C6FF"}}),n("stop",{attrs:{offset:"1","stop-color":"#0072FF"}})],1),n("linearGradient",{attrs:{id:"paint1_linear",x1:"35.9305",x2:".233165",y1:"-.00000202",y2:"20.0792",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#00C6FF"}}),n("stop",{attrs:{offset:"1","stop-color":"#0072FF"}})],1)],1)]),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figcaption",[t._v("TBCC Vote "),n("span",[t._v("VOTE (Bep8)")])])}],o=(n("2fc2"),n("2877")),s={},i=Object(o["a"])(s,a,r,!1,null,"00a63bd1",null);e["default"]=i.exports},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return $}));n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("da2f"),n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var a=n("2b0e"),r=n("c63d");r.keys().forEach((function(t){var e=r(t),n=t.replace(/-(.)/g,(function(t,e){return e.toUpperCase()})).replace(/(\.\/|\.vue)/g,"").replace(/^\w/,(function(t){return t.toUpperCase()}));a["a"].component(n,e.default||e)}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{attrs:{id:"app"}},[n("header",[n("nav-header")],1),n("main",[n("router-view")],1),n("footer",[n("nav-footer")],1),t.modal?n("modal",[n("i",{staticClass:"icon-x",on:{click:t.close}}),n("b",[t._v(t._s(t.$t("main[2][1]")))]),n("qrcode",{attrs:{value:t.modalData.token,options:{width:240,margin:0}}}),n("h4",[t._v(t._s(t.$t("main[8][0]")))]),n("address",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.modalData.token,expression:"modalData.token"}],attrs:{"aria-pressed":t.active?"true":"false"},on:{click:function(e){t.active=!t.active}}},[t._v(" "+t._s(t.modalData.token)+" "),t.active?n("small",[t._v(t._s(t.$t("main[8][2]")))]):n("small",[t._v(t._s(t.$t("main[8][1]")))])])],1):t._e()],1)},s=[],i={data:function(){return{modal:!1,modalData:[],active:!1}},methods:{close:function(){this.modal=!this.modal,this.active=!1}},created:function(){var t=this;$.$on("setModal",(function(e){t.modal=!t.modal,t.modalData=e}))}},c=i,u=(n("6294"),n("2877")),l=Object(u["a"])(c,o,s,!1,null,null,null),d=l.exports,f=n("4ae6"),v=n.n(f),p=(n("466d"),n("a925")),m=n("deb3");a["a"].use(p["a"]);var h=function(){return m["a"].get("session_data").locale};function _(){var t=n("3c28"),e={};return t.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];e[r]=t(n)}})),e}var g=new p["a"]({locale:h()||"zh",fallbackLocale:"zh",messages:_()}),b=n("a18c"),w=n("2f62");a["a"].use(w["a"]);var y=n("d307"),x={};y.keys().forEach((function(t){var e=t.replace(/(\.\/|\.js)/g,"").replace(/^\w/,(function(t){return t.toUpperCase()}));x[e]=y(t).default||y(t)}));var C=new w["a"].Store({state:{status:""},getters:{responseStatus:function(t){return t.status?t.status:""}},mutations:{responseStatus:function(t,e){t.status=e,setTimeout((function(){t.status=""}),3e3)}},modules:x}),O=n("b2e5"),k=n.n(O),$=new a["a"];a["a"].use(v.a),a["a"].component(k.a.name,k.a),a["a"].config.productionTip=!1,new a["a"]({router:b["a"],store:C,i18n:g,render:function(t){return t(d)}}).$mount("#app")},"58f7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote-example"},[n("ul",{staticClass:"vote-example__items"},[n("li",{staticClass:"vote-example__items-item"},[t._v(" "+t._s(t.$t("main[2][0]"))+" "),n("span",[t._v(t._s(t.$t("main[2][1]")))])]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"vote-example__items-item"},[a("figure",[a("img",{attrs:{src:n("4057"),alt:""}})])])}],o={},s=o,i=(n("d3e1"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"4f92a33a",null);e["default"]=c.exports},"5dc2":function(t,e,n){},6294:function(t,e,n){"use strict";var a=n("437c"),r=n.n(a);r.a},6898:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal__mask"},[n("div",{staticClass:"modal__container"},[t._t("default")],2)])])},r=[],o={},s=o,i=(n("db99"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,null,null);e["default"]=c.exports},"705f":function(t,e,n){"use strict";var a=n("7b83"),r=n.n(a);r.a},"7b83":function(t,e,n){},8554:function(t,e,n){"use strict";var a=n("3ae0"),r=n.n(a);r.a},"85e4":function(t,e,n){"use strict";var a=n("f8ab"),r=n.n(a);r.a},"871c":function(t,e,n){"use strict";var a=n("e9ba"),r=n.n(a);r.a},"8a52":function(t,e,n){},"94d8":function(t,e,n){"use strict";var a=n("2591"),r=n.n(a);r.a},"9a55":function(t,e,n){t.exports=n.p+"img/votecard2.9452bec5.png"},"9e71":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"button",attrs:{tag:"button",to:"/"+t.url}},[n("span",{staticClass:"button__text"},[t._v(t._s(t.text))])])},r=[],o={props:{text:{type:String,default:"Button"},url:{type:String,default:null}}},s=o,i=(n("279f"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"02b98eed",null);e["default"]=c.exports},a01d:function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),r=(n("deb3"),n("30a4")),o={data:[],status:""},s={responseData:function(t){return t.data?t.data:null}},i={votes:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,r["a"].get("/tickets").then((function(t){n("responseData",t.data)})).catch((function(t){n("responseData",t.response.data)}));case 3:case"end":return e.stop()}}),e)})))()}},c={responseData:function(t,e){t.data=e}};e["default"]={namespaced:!0,state:o,getters:s,actions:i,mutations:c}},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("main-slogan",{attrs:{title:t.$t("errors[0][0]"),text:t.$t("errors[0][1]")}})],1)},s=[],i={},c=i,u=(n("efb5"),n("2877")),l=Object(u["a"])(c,o,s,!1,null,"1a183479",null),d=l.exports;a["a"].use(r["a"]);var f=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"51d9"))}},{path:"/current",name:"current",component:function(){return n.e("current").then(n.bind(null,"dc67"))}},{path:"/topic",name:"topic",component:function(){return n.e("topic").then(n.bind(null,"7db3"))}},{path:"/current/:id",name:"vote",component:function(){return n.e("vote").then(n.bind(null,"1efd"))}},{path:"/completed",name:"completed",component:function(){return n.e("completed").then(n.bind(null,"ad72"))}},{path:"*",name:"_404",component:d}],v=new r["a"]({mode:"history",base:"/",routes:f,scrollBehavior:function(t,e,n){return{x:0,y:0}}});e["a"]=v},a560:function(t,e,n){"use strict";var a=n("5dc2"),r=n.n(a);r.a},a9d3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://www.instagram.com/TBCC_Wallet/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[n("rect",{attrs:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}}),n("path",{attrs:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}}),n("line",{attrs:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}})])]),n("a",{attrs:{href:"https://www.facebook.com/TbccWallet1/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},[n("path",{attrs:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}})])]),n("a",{attrs:{href:"https://t.me/tbcc_china"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[n("line",{attrs:{x1:"22",y1:"2",x2:"11",y2:"13"}}),n("polygon",{attrs:{points:"22 2 15 22 11 13 2 9 22 2"}})])]),n("a",{attrs:{href:"https://twitter.com/TbccW"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},[n("path",{attrs:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}})])])])},r=[],o={},s=o,i=(n("35e8"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"d7431900",null);e["default"]=c.exports},b56b:function(t,e,n){},b7bd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote-previous"},["completed"!=t.$route.name?n("h3",[t._v(t._s(t.$t("main[4][0]")))]):t._e(),t._m(0),"current"!=t.$route.name?n("a",{staticClass:"button",attrs:{href:""}},[t._v(t._s(t.$t("main[4][1]")))]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vote-previous__list"},[a("article",[a("figure",[a("img",{attrs:{src:n("eb00"),alt:""}})])]),a("article",[a("figure",[a("img",{attrs:{src:n("9a55"),alt:""}})])]),a("article",[a("figure",[a("img",{attrs:{src:n("e4e8"),alt:""}})])])])}],o={},s=o,i=(n("871c"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"8527afbc",null);e["default"]=c.exports},c169:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote"},[n("h3",[t._v(t._s(t.title))]),n("div",{staticClass:"vote__list"},t._l(t.data,(function(t){return n("vote-card",{key:t.id,attrs:{id:t.id,obj:t}})})),1),"current"!=t.$route.name&&"vote"!=t.$route.name?n("router-link",{staticClass:"button",attrs:{to:"/current"}},[t._v(t._s(t.$t("main[3][1]")))]):t._e()],1)},r=[],o=(n("96cf"),n("1da1")),s=n("5530"),i=n("2f62"),c={props:{title:{type:String,default:"Title"}},computed:Object(s["a"])({},Object(i["c"])({data:"Data/responseData"})),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("Data",["votes"])),{},{reloadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.votes();case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.reloadData();case 2:case"end":return e.stop()}}),e)})))()}},u=c,l=(n("94d8"),n("2877")),d=Object(l["a"])(u,a,r,!1,null,"58a1f882",null);e["default"]=d.exports},c63d:function(t,e,n){var a={"./gradient-button.vue":"9e71","./main-example.vue":"58f7","./main-hero.vue":"517a","./main-slogan.vue":"544d","./main-votelist.vue":"c169","./main-votenext.vue":"b7bd","./modal.vue":"6898","./nav-brand.vue":"5573","./nav-footer.vue":"236e","./nav-header.vue":"0158","./nav-social.vue":"a9d3","./timer.vue":"d5a7","./vote-card.vue":"00e1","./vote-diagram.vue":"0a50"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="c63d"},c84f:function(t,e,n){},d29e:function(t,e,n){},d307:function(t,e,n){var a={"./data.js":"a01d","./session.js":"3b35"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="d307"},d3e1:function(t,e,n){"use strict";var a=n("c84f"),r=n.n(a);r.a},d5a7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[Date.parse(this.deadline)>=Date.parse(new Date)?n("ul",{staticClass:"text-center"},[t.days?n("li",[t._v(" "+t._s(t.days)),n("i",[t._v(":")]),n("span",[t._v(t._s(t.$t("main[6][1]")))])]):t._e(),t.hours?n("li",[t._v(" "+t._s(t._f("formatTime")(t.hours))),n("i",[t._v(":")]),n("span",[t._v(t._s(t.$t("main[6][2]")))])]):t._e(),n("li",[t._v(" "+t._s(t._f("formatTime")(t.minutes))),n("i",[t._v(":")]),n("span",[t._v(t._s(t.$t("main[6][3]")))])]),n("li",[t._v(" "+t._s(t._f("formatTime")(t.seconds))),n("span",[t._v(t._s(t.$t("main[6][4]")))])])]):n("div",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("main[6][0]"))+" ")])])},r=[],o=(n("a9e3"),{props:{deadline:{type:String,required:!0},speed:{type:Number,default:1e3}},data:function(){return{currentTime:Date.parse(this.deadline)-Date.parse(new Date)}},mounted:function(){setTimeout(this.countdown,1e3)},computed:{seconds:function(){return Math.floor(this.currentTime/1e3%60)},minutes:function(){return Math.floor(this.currentTime/1e3/60%60)},hours:function(){return Math.floor(this.currentTime/36e5%24)},days:function(){return Math.floor(this.currentTime/864e5)}},filters:{formatTime:function(t){return t<10?"0"+t:t}},methods:{countdown:function(){this.currentTime=Date.parse(this.deadline)-Date.parse(new Date),this.currentTime>0?setTimeout(this.countdown,this.speed):this.currentTime=null}}}),s=o,i=(n("85e4"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"bbc8e4a2",null);e["default"]=c.exports},da2f:function(t,e,n){},db99:function(t,e,n){"use strict";var a=n("4f8a"),r=n.n(a);r.a},deb3:function(t,e,n){"use strict";e["a"]={get:function(t){return!!localStorage.getItem(t)&&JSON.parse(localStorage.getItem(t))},set:function(t,e){return localStorage.getItem(t)?localStorage.setItem(t,JSON.stringify(Object.assign(JSON.parse(localStorage.getItem(t)),e))):localStorage.setItem(t,JSON.stringify(e))},remove:function(t){return localStorage.removeItem(t)}}},e086:function(t){t.exports=JSON.parse('{"navbar":[["当前投票","完成投票","提出主题"],["订阅我们","保留所有权利"]],"main":[["参加投票","帮助我们做出适合您的正确决策..","投你的一票"],["TBCC在不断成长和发展，我们希望用户积极参与创新。 为此，我们创建了一个在线投票服务。 有了它，您可以投票赞成或反对一种新产品。.."],["投票机制非常简单。 您需要选择自己感兴趣的投票，选择“是”或“否”，然后完成您的投票（Bep8）。.","一个投票需要发送一个代币 VOTE"],["个人投票","查看所有公开投票","集体投票","立即投票","是","否"],["下一个投票","查看更多"],["我们希望收到您的来信。 如果您有投票的想法，请随时提出建议。.","建议一个投票主题。"],["时间到了！","天数","小时","分钟","秒"],["投票","在当前投票时间之内，您可以随时选择投票。 不要浪费时间-立即投票！","查看所有公开民意调查"],["请投票，按照地址发送您的VOTE（Bep8)代币:","单击以复制地址进行投票","复制地址!"]],"current":[["立即投票"]],"completed":[["投票结束","您可以在下面找到上一个投票及其结果"]],"topic":[["建议一个主题","即将推出.."]],"errors":[["404","找不到页面."]]}')},e4e8:function(t,e,n){t.exports=n.p+"img/votecard3.c2217bd2.png"},e9ba:function(t,e,n){},eb00:function(t,e,n){t.exports=n.p+"img/votecard1.b8de9d15.png"},efb5:function(t,e,n){"use strict";var a=n("0656"),r=n.n(a);r.a},f2a7:function(t,e,n){"use strict";var a=n("2dfe"),r=n.n(a);r.a},f8ab:function(t,e,n){}});