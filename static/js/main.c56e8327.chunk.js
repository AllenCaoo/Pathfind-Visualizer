(this["webpackJsonppath-visualizer"]=this["webpackJsonppath-visualizer"]||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),c=t(4),a=t.n(c),l=(t(12),t(0)),u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"Path Visualizer"})})},i=t(6),s=function(e){var n=e.color,t=e.text,o=e.onClick;return Object(l.jsx)("button",{style:{backgroundColor:n},className:"btn",onClick:o,children:t})};s.defaultProps={color:"black",text:"Button",onClick:function(){return console.log("nothing happened")}};var d=s,h=function(e){var n=e.color,t=e.onChange;return Object(l.jsxs)("select",{className:"slct",id:"algorithms",style:{backgroundColor:n},onChange:function(e){return t(e.target.value)},children:[Object(l.jsx)("option",{value:"DI",children:"Dijkstra's"}),Object(l.jsx)("option",{value:"A*",children:"A*"}),Object(l.jsx)("option",{value:"DFS",children:"Depth First Search"}),Object(l.jsx)("option",{value:"BFS",children:"Breadth First Search"})]})};h.defaultProps={color:"black",onChange:console.log("nothing happened")};var f=h,b=t(7),g=!1,j=function(e){var n=e.row,t=e.col,o=e.color,r=function(){var e=document.getElementById("".concat(n,"-").concat(t)).style.backgroundColor;"white"===e?document.getElementById("".concat(n,"-").concat(t)).style.backgroundColor="black":"black"===e&&(document.getElementById("".concat(n,"-").concat(t)).style.backgroundColor="white")};return Object(l.jsx)("td",{className:"box",id:n+"-"+t,style:{backgroundColor:o},onMouseDown:function(e){return function(e){e.preventDefault(),g=!0,r()}(e)},onMouseUp:function(e){g=!1},onMouseEnter:function(e){g&&r(e)}})};j.defaultProps={color:"white"};var v=j;function p(){for(var e=[],n=0;n<17;n++){for(var t=[],o=0;o<51;o++)n===k[0]&&o===k[1]?t.push(Object(l.jsx)(v,{row:n,col:o,color:"green"})):n===O[0]&&o===O[1]?t.push(Object(l.jsx)(v,{row:n,col:o,color:"red"})):t.push(Object(l.jsx)(v,{row:n,col:o}));e.push(Object(l.jsx)("tr",{children:t}))}return e}var x=function(){return Object(l.jsx)("table",{className:"board",cellSpacing:"0",cellPadding:"0",children:Object(l.jsx)("tbody",{children:p()})})},k=[8,8],O=[8,42],y=(b.a,function(e){var n=e.nameToAlgs,t=Object(o.useState)("DI"),r=Object(i.a)(t,2),c=r[0],a=r[1];a=function(e){c=e,console.log("algorithm changed to: "+e)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{onChange:a}),"  ",Object(l.jsx)(d,{color:"blue",text:"Clear Display",onClick:function(){for(var e=0;e<=16;e++)for(var n=0;n<=50;n++){var t=document.getElementById("".concat(e,"-").concat(n));if(e===k[0]&&n===k[1])t.style.backgroundColor="green";else if(e===O[0]&&n===O[1])t.style.backgroundColor="red";else{if("black"===t.style.backgroundColor)continue;t.style.backgroundColor="white"}}}}),Object(l.jsx)(d,{color:"blue",text:"Clear All",onClick:function(){for(var e=0;e<=16;e++)for(var n=0;n<=50;n++){var t=document.getElementById("".concat(e,"-").concat(n));e===k[0]&&n===k[1]?t.style.backgroundColor="green":e===O[0]&&n===O[1]?t.style.backgroundColor="red":t.style.backgroundColor="white"}}}),Object(l.jsx)(d,{color:"red",text:"Stop (unavailable)"}),"  ",Object(l.jsx)(d,{color:"green",text:"Run",onClick:function(){n[c](k[0],k[1],O[0],O[1])}})]})}),C=t(3),m=t.n(C),w=t(5);function B(e,n,t){var o=[];return E(o,e-1,n,t,!1),E(o,e,n+1,t,!1),E(o,e+1,n,t,!1),E(o,e,n-1,t,!1),o}function D(e){for(var n=0,t="";"-"!=e.charAt(n);)t+=e.charAt(n),n++;return parseInt(t)}function I(e){var n=e.search("-");return parseInt(e.substring(n+1))}function S(e,n){return document.getElementById("".concat(e,"-").concat(n))}function F(e,n){var t=D(e.id),o=I(e.id),r=D(n.id),c=I(n.id);return 2*(Math.abs(c-o)+Math.abs(r-t))}function E(e,n,t,o,r){if(!(n<0||n>16)&&!(t<0||t>50)){var c=S(n,t);o.includes(c)||"black"==c.style.backgroundColor||(r?e.push([c]):e.push(c))}}function A(e){return new Promise((function(n){return setTimeout(n,e)}))}function P(e,n){return N.apply(this,arguments)}function N(){return(N=Object(w.a)(m.a.mark((function e(n,t){var o,r,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0,r=0;case 2:if(!(r<n.length)){e.next=9;break}return"white"===n[r].style.backgroundColor&&(n[r].style.backgroundColor="blue"),e.next=6,A(o);case 6:r++,e.next=2;break;case 9:c=20,a=0;case 11:if(!(a<t.length)){e.next=18;break}return t[a].style.backgroundColor="yellow",e.next=15,A(c);case 15:a++,e.next=11;break;case 18:console.log("Displayed");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){for(var e=[],n=0;n<=16;n++){for(var t=[],o=0;o<=50;o++)t.push(document.getElementById("".concat(n,"-").concat(o)));e.push(t)}return e}var R=function(e,n,t,o){var r=[],c=[],a=[],l=S(e,n);r.push([l]),c.push(l);for(var u=function(){var l=r[0];r.shift();var u=l[l.length-1];if(a.push(u),e=D(u.id),n=I(u.id),e===t&&n===o)return P(a,l),"break";B(e,n,c).forEach((function(e){var n=l.slice();n.push(e),r.push(n),c.push(e)}))};0!=r.length;){if("break"===u())break}P(a,[])},T=[];function z(e,n,t,o,r){var c=S(e,n);if(T.push(c),r.push(c),e===t&&n===o)return r;var a=B(e,n,T);if(!a.length)return null;for(var l=0;l<a.length;l++){var u=r.slice(),i=z(D(a[l].id),I(a[l].id),t,o,u);if(i)return i}}var J=function(e,n,t,o){var r=z(e,n,t,o,[]);P(T,r||[]),T=[]},L=[],U={},V=[];function q(e,n,t,o){var r=B(D(e.id),I(e.id),L);r.forEach((function(r){var c=n.slice(),a=1+U[e.id]+t(r,o);a<U[r.id]&&(U[r.id]=a),c.push(r),V.push(c)})),r&&V.sort((function(e,n){return U[e[e.length-1].id]-U[n[n.length-1].id]}))}function G(){L=[],U={},V=[]}var H=function(e,n,t,o){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:F,c=S(e,n),a=S(t,o),l=M(),u=0;u<l.length;u++)for(var i=0;i<l[0].length;i++)U[l[u][i].id]=1/0;for(V.push([c]),U[c.id]=0;V;){var s=V[0];V.shift();var d=s[s.length-1];if(!L.includes(d)){if(L.push(d),D(d.id)===t&&I(d.id)===o){P(L,s);break}q(d,s,r,a)}}P(L,[]),G()},K=function(e,n){return 0};var Q=function(e,n,t,o){H(e,n,t,o,K=K)};function W(e,n,t,o){!0,console.log("Running Dijkstras"),Q(e,n,t,o),!1}function X(e,n,t,o){!0,console.log("Running A*"),H(e,n,t,o),!1}function Y(e,n,t,o){!0,console.log("Running DFS"),J(e,n,t,o),!1}function Z(e,n,t,o){!0,console.log("Running BFS"),R(e,n,t,o),!1}var $=function(e){var n=e.text,t=e.color;return Object(l.jsx)("header",{className:"subheader",style:{color:t},children:Object(l.jsx)("h4",{children:n})})};$.defaultProps={color:"black",text:""};var _=$;var ee=function(){var e={DI:W,DFS:Y,BFS:Z,"A*":X};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(_,{text:"Page is currently under construction. Some features will be unavailable.",color:"purple"}),Object(l.jsx)(y,{nameToAlgs:e}),Object(l.jsx)(_,{text:"Click on boxes to create walls!",color:"black"}),Object(l.jsx)(x,{})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[15,1,2]]]);
//# sourceMappingURL=main.c56e8327.chunk.js.map