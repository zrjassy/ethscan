(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"53004253"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"13de343e"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0789":function(t,e,n){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},3:function(t,e){},4:function(t,e){},4430:function(t,e,n){"use strict";var a=n("99e5"),o=n.n(a),r=new o.a,s="http://127.0.0.1:8545";r.setProvider(new r.providers.HttpProvider(s));var i,c,u={web3:r},l=u,f=n("2877"),d=Object(f["a"])(l,i,c,!1,null,null,null);e["a"]=d.exports},"4ec3":function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return m}));n("d3b7"),n("25f0");var a=n("bc3a"),o=n.n(a),r=o.a.create({timeout:3e4});r.defaults.baseURL="http://127.0.0.1:8545",r.defaults.contentType="application/json",r.defaults.validateStatus=function(){return!0};function s(t){return new Promise((function(e,n){r(t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}console.log(Object({NODE_ENV:"production",BASE_URL:"/"}));var i={jsonrpc:"2.0",method:"",params:[],id:2};function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(i.params=t,e){case 0:i.method="eth_getTotalTransactionsCount";break;case 1:i.method="eth_getBlockByNumber";break;case 2:i.method="eth_getBlockByHash";break;case 3:i.method="eth_getTransactionByHash";break;case 4:i.method="eth_getTransactionReceipt";break;default:return i}return i}function u(t){var e=c(t,0);return s({method:"post",data:e})}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t="0x"+t;var n=[t,e],a=c(n,1);return s({method:"post",data:a})}function f(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[t,e],a=c(n,2);return s({method:"post",data:a})}function d(t){var e=[t],n=c(e,3);return s({method:"post",data:n})}function h(t){var e=[t],n=c(e,4);return s({method:"post",data:n})}function m(t,e){return e?d(e):t?(t=parseInt(t).toString(16),l(t)):void 0}},5:function(t,e){},5143:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"image",staticStyle:{width:"170px"},attrs:{src:n("fbd7")},on:{click:t.link}})]),a("router-view")],1)},r=[],s=n("a18c"),i={methods:{link:function(){s["a"].push({name:"Home"})}}},c=i,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,null,null),f=l.exports,d=n("5c96"),h=n.n(d),m=n("349e"),p=n.n(m);n("0fae");a["default"].use(h.a),a["default"].use(p.a),a["default"].config.productionTip=!1,new a["default"]({router:s["a"],render:function(t){return t(f)}}).$mount("#app")},"5ced":function(t,e,n){},6:function(t,e){},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,n){},9:function(t,e){},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),o=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"home-head"},[n("div",{staticClass:"home-head-data margin-right-10"},[n("ul",t._l(t.totalStatisticsList,(function(e){return n("li",{key:e.label,staticClass:"lg-width",class:e.class},[n("span",{staticClass:"home-head-data-label"},[t._v(t._s(e.label))]),n("span",{staticClass:"home-head-data-content"},[t._v(" "+t._s(e.value))])])})),0)])]),n("div",{staticClass:"home-foot"},[n("div",{staticClass:"home-foot-box margin-right-10"},[n("div",{staticClass:"home-foot-box-nav"},[t._m(0),n("div",{staticClass:"right"},[n("span",{staticClass:"table-link",staticStyle:{"padding-right":"30px"},on:{click:function(e){return t.goPage("block")}}},[t._v(" 更多 >")])])]),n("div",{staticClass:"home-foot-box-content"},[n("ul",t._l(t.blocks,(function(e){return n("li",{key:e.number,staticClass:"item"},[n("div",{staticClass:"left"},[n("div",{staticClass:"table-link",on:{click:function(n){return t.goPage("blockDetail","hash",e.hash)}}},[t._v("区块 "+t._s(e.number))]),n("div",[t._v(t._s(e.timestamp))])]),n("div",{staticClass:"right"},[n("div",[t._v("矿工 "),n("span",{staticClass:"block-number"},[t._v(t._s(e.miner))])])])])})),0)])]),n("div",{staticClass:"home-foot-box margin-left-10"},[n("div",{staticClass:"home-foot-box-nav"},[t._m(1),n("div",{staticClass:"right"},[n("span",{staticClass:"table-link",staticStyle:{"padding-right":"30px"},on:{click:function(e){return t.goPage("transaction")}}},[t._v("更多 >")])])]),n("div",{staticClass:"home-foot-box-content"},[n("ul",t._l(t.transactionsList,(function(e){return n("li",{key:e.timestamp,staticClass:"item"},[n("div",{staticClass:"left"},[n("div",{staticClass:"transaction",on:{click:function(n){return t.goPage("transactionDetail","pkHash",e.hash)}}},[t._v("交易 "),n("span",{staticClass:"table-link",attrs:{title:e.hash}},[t._v(t._s(e.hash))])])]),n("div",{staticClass:"right"},[n("div",[t._v(t._s(e.timestamp))])])])})),0)])])]),n("router-view")],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("span",{staticClass:"line"}),n("span",{staticClass:"text"},[t._v("区块")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("span",{staticClass:"line"}),n("span",{staticClass:"text"},[t._v("交易")])])}],i=(n("ac1f"),n("25f0"),n("3ca3"),n("5319"),n("ddb0"),n("53ca")),c=n("4430"),u=n("4ec3"),l=(n("0789"),n("5143"),{name:"Home",data:function(){return{blocks:[],maxBlocks:20,blockNumber:0,web3:c["a"].web3,totalStatisticsList:[{label:"当前块高",route:"block",class:"bg-8693f3 margin-right-15 margin-bottom-15",value:0},{label:"交易总量",route:"transaction",class:"bg-bc8dee margin-left-15 margin-bottom-15",value:0},{label:"正在处理的交易数",route:"",class:"bg-ffa897 margin-top-15 margin-right-15",value:0},{label:"PBFT 当前视图",route:"",class:"bg-89c3f8 margin-top-15  margin-left-15",value:0}],transactionsList:[]}},mounted:function(){this.$nextTick((function(){this.searchTbBlockInfo(),this.searchTbTransactionsInfo()}))},methods:{timeTransport:function(t){var e=parseInt(t.timestamp,10),n=new Date(e),a=function(t,e){var n=new Date(t),a=function(t){return(t<10?"0":"")+t};return e.replace(/yyyy|MM|dd|HH|mm|ss/g,(function(t){switch(t){case"yyyy":return a(n.getFullYear());case"MM":return a(n.getMonth()+1);case"mm":return a(n.getMinutes());case"dd":return a(n.getDate());case"HH":return a(n.getHours());case"ss":return a(n.getSeconds())}}))};t.timestamp=a(n,"yyyy-MM-dd HH:ss")},searchBlocksInfo:function(){for(var t=this,e=[],n=0;n<this.maxBlocks;n++)e.push(Object(u["b"])((this.blockNumber-n).toString(16)));Promise.all(e).then((function(e){for(var n=0;n<t.maxBlocks;n++)t.blocks.push(e[n].data.result),t.blocks[n].number=parseInt(t.blocks[n].number),t.timeTransport(t.blocks[n]),Array.prototype.push.apply(t.transactionsList,e[n].data.result.transactions),console.log(t.transactionsList,n)}))},searchTbBlockInfo:function(){var t=this;this.web3.eth.getBlockNumber().then((function(e){console.log(e),t.blockNumber=e,t.totalStatisticsList[0].value=e,t.maxBlocks>e&&(t.maxBlocks=e+1),t.searchBlocksInfo()}))},searchTbTransactionsInfo:function(){var t=this;Object(u["f"])().then((function(e){console.log(Object(i["a"])(parseInt(e.data.result.count))),t.totalStatisticsList[1].value=parseInt(e.data.result)}))},goPage:function(t,e,n){var a={};a.name=t||"",a.query={},e&&(a.query[e]=n),v.push(a)}}}),f=l,d=(n("cccb"),n("2877")),h=Object(d["a"])(f,r,s,!1,null,null,null),m=h.exports;a["default"].use(o["a"]);var p=[{path:"/",name:"Home",component:m},{path:"/block/blockDetail",name:"blockDetail",meta:{requireAuth:!0},component:function(){return n.e("about").then(n.bind(null,"d279"))}},{path:"/block",name:"block",meta:{requireAuth:!0},component:function(){return n.e("about").then(n.bind(null,"5eeb"))}},{path:"/transaction",name:"transaction",component:function(){return n.e("about").then(n.bind(null,"0d43"))}},{path:"/transaction/transactionDetail",name:"transactionDetail",component:function(){return n.e("about").then(n.bind(null,"7e34"))}}],b=new o["a"]({mode:"history",base:"/",routes:p}),v=e["a"]=b},cccb:function(t,e,n){"use strict";var a=n("5ced"),o=n.n(a);o.a},fbd7:function(t,e,n){t.exports=n.p+"img/fisco-bcos-logo.3a5e45cd.png"}});
//# sourceMappingURL=app.1ef0b83c.js.map