(this["webpackJsonppricing-component-with-toggle-master-react"]=this["webpackJsonppricing-component-with-toggle-master-react"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(3),c=t.n(i),l=(t(13),t(4)),o=t(5),s=t(1),m=t(7),d=t(6);var h=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"bg-bottom"},r.a.createElement("img",{src:"./images/bg-bottom.svg",alt:"background lines at the bottom"})),r.a.createElement("div",{class:"bg-top"},r.a.createElement("img",{src:"./images/bg-top.svg",alt:"background lines at the top"})))},u=function(e){return r.a.createElement("div",{className:"pricing-header-container"},r.a.createElement("div",{className:"pricing-header-title"},"Our Pricing"),r.a.createElement("span",{className:"pricing-header-content"},"Annually",r.a.createElement("span",{className:"pricing-header-btn-bg"},r.a.createElement("button",{"aria-label":"Annually or Monthly toggleable button",onClick:e.handler,className:e.monthly?"pricing-header-btn":"pricing-header-btn pricing-header-btn-active"})),"Monthly"))},p=function(e){return r.a.createElement("div",{className:e.isMain?"card card-main":"card"},r.a.createElement("div",{className:e.isMain?"card-header-main":"card-header"},e.header),r.a.createElement("div",{className:"card-price"},r.a.createElement("span",{className:"card-price-dollar"},"$"),e.isMonthly?e.price.monthly:e.price.annually),r.a.createElement("div",{className:"card-info-container"},r.a.createElement("div",null,r.a.createElement("hr",{className:e.isMain?"card-info-seperator-main":"card-info-seperator"}),r.a.createElement("div",{className:"card-info"},e.row1),r.a.createElement("hr",{className:e.isMain?"card-info-seperator-main":"card-info-seperator"})),r.a.createElement("div",null,r.a.createElement("div",{className:"card-info"},e.row2)),r.a.createElement("div",null,r.a.createElement("hr",{className:e.isMain?"card-info-seperator-main":"card-info-seperator"}),r.a.createElement("div",{className:"card-info"},e.row3),r.a.createElement("hr",{className:e.isMain?"card-info-seperator-main":"card-info-seperator"}))),r.a.createElement("button",{className:e.isMain?"btn btn-main":"btn"},"LEARN MORE"))},g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={isMonthly:!1},n.handler=n.handler.bind(Object(s.a)(n)),n}return Object(o.a)(t,[{key:"handler",value:function(){this.setState((function(e){return{isMonthly:!e.isMonthly}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(u,{monthly:this.state.isMonthly,handler:this.handler}),this.state.count,r.a.createElement("div",{className:"content"},r.a.createElement(p,Object.assign({},{header:"Basic",price:{annually:"199.99",monthly:"19.99"},row1:"500 GB Storage",row2:"2 Users Allowed",row3:"Send up to 3 GB"},{isMonthly:this.state.isMonthly})),r.a.createElement(p,Object.assign({},{header:"Professional",price:{annually:"249.99",monthly:"24.99"},row1:"1 TB Storage",row2:"5 Users Allowed",row3:"Send up to 10 GB"},{isMain:!0,isMonthly:this.state.isMonthly})),r.a.createElement(p,Object.assign({},{header:"Master",price:{annually:"399.99",monthly:"39.99"},row1:"2 TB Storage",row2:"10 Users Allowed",row3:"Send up to 20 GB"},{isMonthly:this.state.isMonthly}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.70870a82.chunk.js.map