(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{477:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(6),c=n(216),i=n(446),s=n(447),l=n(3),o=n(5),u=n(15),d=n(0),j=n(4),v=n.n(j),p=n(40),b=n(59);function O(e){var t=e.className,n=e.direction,r=e.index,a=e.marginDirection,c=e.children,i=e.split,s=e.wrap,u=d.useContext(x),j=u.horizontalSize,v=u.verticalSize,p=u.latestIndex,b={};return u.supportFlexGap||("vertical"===n?r<p&&(b={marginBottom:j/(i?2:1)}):b=Object(l.a)(Object(l.a)({},r<p&&Object(o.a)({},a,j/(i?2:1))),s&&{paddingBottom:v})),null===c||void 0===c?null:d.createElement(d.Fragment,null,d.createElement("div",{className:t,style:b},c),r<p&&i&&d.createElement("span",{className:"".concat(t,"-split"),style:b},i))}var f=n(251),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=d.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),h={small:8,middle:16,large:24};var g=function(e){var t,n=d.useContext(b.b),r=n.getPrefixCls,a=n.space,c=n.direction,i=e.size,s=void 0===i?(null===a||void 0===a?void 0:a.size)||"small":i,j=e.align,g=e.className,y=e.children,E=e.direction,w=void 0===E?"horizontal":E,S=e.prefixCls,z=e.split,L=e.style,k=e.wrap,C=void 0!==k&&k,N=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),G=Object(f.a)(),P=d.useMemo((function(){return(Array.isArray(s)?s:[s,s]).map((function(e){return function(e){return"string"===typeof e?h[e]:e||0}(e)}))}),[s]),B=Object(u.a)(P,2),F=B[0],I=B[1],M=Object(p.a)(y,{keepEmpty:!0}),T=void 0===j&&"horizontal"===w?"center":j,A=r("space",S),D=v()(A,"".concat(A,"-").concat(w),(t={},Object(o.a)(t,"".concat(A,"-rtl"),"rtl"===c),Object(o.a)(t,"".concat(A,"-align-").concat(T),T),t),g),J="".concat(A,"-item"),R="rtl"===c?"marginLeft":"marginRight",W=0,Y=M.map((function(e,t){return null!==e&&void 0!==e&&(W=t),d.createElement(O,{className:J,key:"".concat(J,"-").concat(t),direction:w,index:t,marginDirection:R,split:z,wrap:C},e)})),H=d.useMemo((function(){return{horizontalSize:F,verticalSize:I,latestIndex:W,supportFlexGap:G}}),[F,I,W,G]);if(0===M.length)return null;var K={};return C&&(K.flexWrap="wrap",G||(K.marginBottom=-I)),G&&(K.columnGap=F,K.rowGap=I),d.createElement("div",Object(l.a)({className:D,style:Object(l.a)(Object(l.a)({},K),L)},N),d.createElement(x.Provider,{value:H},Y))},y=n(455),E=n(449),w=n(215),S=n(1),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},L=n(9),k=function(e,t){return d.createElement(L.a,Object(S.a)(Object(S.a)({},e),{},{ref:t,icon:z}))};k.displayName="SendOutlined";var C=d.forwardRef(k),N=n(36),G=n(218),P=n(2),B=c.a.TextArea,F=function(){var e=Object(d.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(d.useEffect)((function(){var e,t=function(){console.log("SOCKET CLOSED"),setTimeout(n,3e3)};function n(){var n;null===(n=e)||void 0===n||n.removeEventListener("close",t),(e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")).addEventListener("close",t),r(e)}return n(),function(){e.removeEventListener("close",t),e.close()}}),[]),Object(P.jsxs)(g,{direction:"vertical",style:{width:"100%"},children:[Object(P.jsx)(I,{socket:n}),Object(P.jsx)(T,{socket:n})]})},I=function(e){var t=e.socket,n=Object(d.useState)([]),c=Object(a.a)(n,2),i=c[0],s=c[1];return Object(d.useEffect)((function(){var e=function(e){var t=JSON.parse(e.data);s((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))}))};return null===t||void 0===t||t.addEventListener("message",e),function(){return null===t||void 0===t?void 0:t.removeEventListener("message",e)}}),[t]),Object(P.jsx)("div",{style:{height:"calc(100vh - 250px)",overflowY:"auto"},children:i.map((function(e,t){return Object(P.jsx)(M,{message:e},t)}))})},M=function(e){var t=e.message;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(g,{children:[Object(P.jsx)(y.a,{size:"large",src:t.photo}),Object(P.jsx)("b",{children:t.userName})]}),Object(P.jsx)("div",{children:Object(P.jsx)("p",{children:t.message})}),Object(P.jsx)(E.a,{})]})},T=function(e){var t=e.socket,n=Object(d.useState)(""),r=Object(a.a)(n,2),c=r[0],l=r[1],o=Object(d.useState)("pending"),u=Object(a.a)(o,2),j=u[0],v=u[1];Object(d.useEffect)((function(){var e=function(){return v("ready")};return null===t||void 0===t||t.addEventListener("open",e),function(){return null===t||void 0===t?void 0:t.removeEventListener("open",e)}}),[t]);return Object(P.jsxs)(i.a,{justify:"space-between",children:[Object(P.jsx)(s.a,{span:19,children:Object(P.jsx)(B,{onChange:function(e){return l(e.currentTarget.value)},value:c})}),Object(P.jsx)(s.a,{span:4,children:Object(P.jsxs)(w.a,{disabled:null===t||"ready"!==j,type:"primary",onClick:function(){c&&(null===t||void 0===t||t.send(c),l(""))},children:[Object(P.jsx)(C,{})," Send"]})})]})};t.default=Object(N.d)(G.a)((function(){return Object(P.jsx)(i.a,{justify:"center",style:{overflowY:"auto"},children:Object(P.jsx)(s.a,{span:12,children:Object(P.jsx)(F,{})})})}))}}]);
//# sourceMappingURL=5.e0f54db4.chunk.js.map