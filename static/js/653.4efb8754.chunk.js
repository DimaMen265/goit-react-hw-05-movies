"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{5653:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=r(5861),s=r(9439),n=r(7757),c=r.n(n),i=r(5805),o=r(2791),l=r(1087),h=r(7689),u=r(8174),m=r(5705),_=r(6727),d={searchForm:"Movies_searchForm__S-9T7",searchInput:"Movies_searchInput__+E-Mw",searchButton:"Movies_searchButton__VlmGO",searchList:"Movies_searchList__6eDvk",searchItem:"Movies_searchItem__aEEd+",linkContainer:"Movies_linkContainer__WlvGd"},p=r(184),v=(0,_.Ry)({searchString:(0,_.Z_)().required()}),f=function(){var e=(0,o.useState)(),t=(0,s.Z)(e,2),r=t[0],n=t[1],_=(0,l.lr)(),f=(0,s.Z)(_,2),x=f[0],k=f[1],j=(0,h.TH)(),S=function(e){k(""!==e?{search:e}:{})};return(0,o.useEffect)((function(){var e=new AbortController,t=x.get("search");if(t){var r=function(){var e=(0,a.Z)(c().mark((function e(t,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.V0)(t,r);case 3:a=e.sent,n(a.data.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),"canceled"!==e.t0.message&&u.Am.error(e.t0.message);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}();return r(t,e),function(){e.abort()}}n(null)}),[x]),(0,p.jsxs)("main",{children:[(0,p.jsx)(m.J9,{initialValues:{searchString:""},onSubmit:function(e){S(e.searchString.trim())},validationSchema:v,children:(0,p.jsxs)(m.l0,{className:d.searchForm,children:[(0,p.jsx)(m.gN,{type:"text",name:"searchString",placeholder:"Search movies",className:d.searchInput}),(0,p.jsx)("button",{type:"submit",className:d.searchButton,children:"Search"})]})}),(0,p.jsx)("ul",{className:d.searchList,children:r&&r.map((function(e){return(0,p.jsxs)("li",{className:d.searchItem,children:[(0,p.jsx)("img",{src:"".concat(i.aF).concat(i.Z8).concat(e.poster_path),alt:e.title}),(0,p.jsx)("div",{className:d.linkContainer,children:(0,p.jsx)(l.rU,{to:"/movies/".concat(e.id),state:{from:j},className:d.searchLink,children:e.title})})]},e.id)}))})]})}}}]);
//# sourceMappingURL=653.4efb8754.chunk.js.map