(this.webpackJsonprequestum=this.webpackJsonprequestum||[]).push([[0],{47:function(e,t,r){},53:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(13),i=r.n(a),s=(r(47),r(5)),o=r(4),u=r(15),j=r(35),l=r(36),d="NEXT_PAGE",b="PREV_PAGE",O="SET_PAGE",h="SET_ERROR",v="START_LOADER",f="STOP_LOADER",g="SET_DATA",x="REMOVE_DATA",p="SET_BLOCKS_AMOUNT_ON_PAGE",y="SET_SEARCH_QUERY",m={loader:!1,data:[],currentPage:1,blocksAmountOnPage:8,searchQuery:"",error:""},_=Object(u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage+1});case b:return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage-1>1?e.currentPage-1:1});case g:return Object(o.a)(Object(o.a)({},e),{},{data:t.data});case O:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.page});case h:return Object(o.a)(Object(o.a)({},e),{},{error:t.error});case y:return Object(o.a)(Object(o.a)({},e),{},{searchQuery:t.query});case p:return Object(o.a)(Object(o.a)({},e),{},{blocksAmountOnPage:t.amount});case x:return Object(o.a)(Object(o.a)({},e),{},{data:[]});case v:return Object(o.a)(Object(o.a)({},e),{},{loader:!0});case f:return Object(o.a)(Object(o.a)({},e),{},{loader:!1});default:return e}}),Object(j.composeWithDevTools)(Object(u.applyMiddleware)(l.a)));window.store=_;var S=_,A=(r(53),r(2));function E(){return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"header__title",children:"requesrum"}),Object(A.jsx)("div",{className:"header__subtitle",children:"web development company"})]}),Object(A.jsx)("div",{children:"Github users search app"})]})}var N=r(30),P=r(40),T=(r(55),function(e){return{type:h,error:e}}),w=function(){return{type:v}},k=function(){return{type:f}},R=function(){return function(e,t){var r=t(),c=r.blocksAmountOnPage,n=r.currentPage,a=r.searchQuery;fetch("https://api.github.com/search/repositories?q=".concat(a,"&page=").concat(n,"&per_page=").concat(c)).then((function(t){return t.ok||(403===t.status?e(T("Too many requests. Try to reload page")):e(T(t.statusText))),t})).then((function(e){return e.json()})).then((function(t){return Object(s.b)((function(){e(function(e){return{type:g,data:e}}(t.items))}))})).finally((function(){return e(k())}))}};function C(){var e,t=Object(c.useState)(""),r=Object(P.a)(t,2),n=r[0],a=r[1],i=Object(s.d)((function(e){return e})),o=i.searchQuery,u=(i.blocksAmountOnPage,Object(s.c)()),j=Object(c.useCallback)(function(e,t){var r;return function(){clearTimeout(r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];r=setTimeout.apply(void 0,[e,t].concat(n))}}(a,2e3),[]);Object(c.useEffect)((function(){o&&(l(o),Object(s.b)((function(){u({type:O,page:1}),u(R())})))}),[n]);var l=function(e){var t=JSON.parse(localStorage.getItem("history"))||[];5===t.length?localStorage.setItem("history",JSON.stringify([e].concat(Object(N.a)(t.slice(0,4))))):localStorage.setItem("history",JSON.stringify([e].concat(Object(N.a)(t))))};return Object(A.jsxs)("div",{className:"search",children:[Object(A.jsx)("input",{className:"search__input",onChange:function(e){var t=e.target.value;u(t?w():k()),u({type:y,query:t}),j(t)},value:o,placeholder:"Start typing..."}),Object(A.jsxs)("div",{className:"search__history",children:["Search history:",null===(e=JSON.parse(localStorage.getItem("history")))||void 0===e?void 0:e.map((function(e,t){return Object(A.jsx)("div",{children:e},"".concat(t," ").concat(e))}))]})]})}r(56),r(57);function q(e){var t=e.name,r=e.organizationsUrl,c=e.description;return Object(A.jsxs)("div",{className:"block",children:[Object(A.jsx)("div",{children:t}),Object(A.jsx)("div",{children:c}),Object(A.jsx)("div",{children:r})]})}var J=r(37);function Q(){return Object(A.jsx)("div",{className:"loader",children:Object(A.jsxs)(J.a,{speed:1,width:375,height:125,viewBox:"0 0 400 125",backgroundColor:"gray",foregroundColor:"#ded9d9",children:[Object(A.jsx)("rect",{x:"4",y:"8",rx:"3",ry:"3",width:"88",height:"18"}),Object(A.jsx)("rect",{x:"4",y:"50",rx:"3",ry:"3",width:"410",height:"11"}),Object(A.jsx)("rect",{x:"4",y:"69",rx:"3",ry:"3",width:"399",height:"11"}),Object(A.jsx)("rect",{x:"4",y:"100",rx:"3",ry:"3",width:"178",height:"14"})]})})}function D(){var e,t,r=Object(s.d)((function(e){return e})),c=r.data,n=r.loader,a=r.blocksAmountOnPage;return Object(A.jsx)("div",{className:"blocks",children:n?null===(e=new Array(+a))||void 0===e||null===(t=e.fill(0))||void 0===t?void 0:t.map((function(e){return Object(A.jsx)(Q,{})})):null===c||void 0===c?void 0:c.map((function(e){return Object(A.jsx)(q,{name:e.name,description:e.description,organizationsUrl:e.owner.organizations_url},e.id)}))})}var G=r(38),I=r.n(G),M=r(39),U=r.n(M),z=r(76);r(58);function B(){var e=Object(s.d)((function(e){return e})),t=e.currentPage,r=e.searchQuery,c=e.error,n=Object(s.c)();return c?Object(A.jsx)("div",{className:"error",children:c}):r&&Object(A.jsxs)("div",{className:"pagination",children:[Object(A.jsx)(z.a,{variant:"contained",onClick:function(){n(w()),n({type:b}),n(R())},children:Object(A.jsx)(I.a,{})}),t,Object(A.jsx)(z.a,{variant:"contained",onClick:function(){n(w()),n({type:d}),n(R())},children:Object(A.jsx)(U.a,{})})]})}var L=function(){return Object(A.jsxs)(s.a,{store:S,children:[Object(A.jsx)(E,{}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"containter",children:[Object(A.jsx)(C,{}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)(D,{}),Object(A.jsx)(B,{})]})]})]})};i.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(L,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.677db86f.chunk.js.map