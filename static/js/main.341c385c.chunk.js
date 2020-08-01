(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{107:function(e,t,a){e.exports=a(214)},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=(a(112),a(28)),l=a.n(s),i=a(37),u=a(17),m=(a(114),a(257)),f=a(254),d=a(247),v=a(251),p=a(255),h=a(97),b=a(252);a(115);var E=function(e){var t=e.caseType,a=e.cases,n=e.total,c=e.active,o=e.isRed,s=Object(h.a)(e,["caseType","cases","total","active","isRed"]);return t?r.a.createElement(d.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(v.a,null,r.a.createElement(b.a,{gutterBottom:!0,className:"infoBox--white"},t.title),r.a.createElement("h2",{className:"infoBox__total ".concat(!o&&"infoBox__total--green")},n," Total"),r.a.createElement(b.a,{className:"infoBox--white infoBox__cases"},"+ ",a," Today"))):null},y=a(91),g=a(14),j=a.n(g),O={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return j()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return j()(e).format("0a")}}}]}},w=function(e,t){var a,n=[];if(!e)return n;for(var r in e[t.value]){if(a){var c={x:r,y:e[t.value][r]-a};n.push(c)}a=e[t.value][r]}return n};var _=function(e){var t=e.casesType,a=e.countryCode,c=Object(n.useState)({}),o=Object(u.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(a===M.code?"all":a,"?lastdays=120")).then((function(e){return e.json()})).then((function(e){var n=w(a===M.code?e:e.timeline,t);m(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]),r.a.createElement("div",null,(null===s||void 0===s?void 0:s.length)>0&&r.a.createElement(y.a,{data:{datasets:[{backgroundColor:t.color.rgb,borderColor:t.color.half_op,data:s}]},options:O}))};a(211);var x=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,j()(e.cases).format("0,0"))))})))},N=a(96),k=a(256),C=a(260),R=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=a(259),B=a(258);a(212);var I=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(T.a,{center:n,zoom:c},r.a.createElement(B.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.New.value;return e.map((function(e){return r.a.createElement(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:t.color.hex,fillColor:t.color.hex,fillOpacity:.4,radius:Math.sqrt(e[t.value])*t.color.multiplier},r.a.createElement(C.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",j()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",j()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",j()(e.deaths).format("0,0")))))}))}(t,a)))},S=(a(213),{cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}}),D={New:{title:"Coronavirus Cases",value:"cases",color:S.cases},Recovered:{title:"Recovered",value:"recovered",color:S.recovered},Death:{title:"Deaths",value:"deaths",color:S.deaths}},M={name:"Worldwide",code:"worldwide"},z=function(){var e={lat:34.80746,lng:-40.4796},t=Object(n.useState)(M),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),h=Object(u.a)(s,2),b=h[0],y=h[1],g=Object(n.useState)([]),O=Object(u.a)(g,2),w=O[0],N=O[1],k=Object(n.useState)([]),C=Object(u.a)(k,2),T=C[0],B=C[1],S=Object(n.useState)([]),z=Object(u.a)(S,2),W=z[0],A=z[1],L=Object(n.useState)(D.New),J=Object(u.a)(L,2),Y=J[0],q=J[1],F=Object(n.useState)(e),V=Object(u.a)(F,2),$=V[0],G=V[1],H=Object(n.useState)(3),K=Object(u.a)(H,2),P=K[0],Q=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=R(e);N(t),B(e),A(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var t=Object(i.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n&&n.value?n.value:M,c=r===M?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(r),t.next=4,fetch(c).then((function(e){return e.json()})).then((function(t){y(t),r===M?(G(e),Q(3),o(M)):t.countryInfo&&(o({name:t.country,code:r}),G({lat:t.countryInfo.lat,lng:t.countryInfo.long}),Q(4))}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(p.a,{id:"sellect__country",options:w,classes:"app__dropdown__item",getOptionLabel:function(e){return e.name},style:{width:300},onChange:U,renderInput:function(e){return r.a.createElement(f.a,Object.assign({},e,{label:"Worldwide",variant:"outlined"}))}}))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(E,{onClick:function(e){return q(D.New)},caseType:D.New,isRed:!0,active:Y===D.New,cases:j()(b.todayCases).format("0,0"),total:j()(b.cases).format("0,0")}),r.a.createElement(E,{onClick:function(e){return q(D.Recovered)},caseType:D.Recovered,active:Y===D.Recovered,cases:j()(b.todayRecovered).format("0,0"),total:j()(b.recovered).format("0,0")}),r.a.createElement(E,{onClick:function(e){return q(D.Death)},caseType:D.Death,isRed:!0,active:Y===D.Death,cases:j()(b.todayDeaths).format("0,0"),total:j()(b.deaths).format("0,0")})),r.a.createElement(I,{countries:T,casesType:Y,center:$,zoom:P})),r.a.createElement(d.a,{className:"app__right"},r.a.createElement(v.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(x,{countries:W}),r.a.createElement("h3",null,c.name," new ",Y.value),r.a.createElement(_,{casesType:Y,countryCode:c.code})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.341c385c.chunk.js.map