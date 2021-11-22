"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2637],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,m=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3709:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={title:"Million connections with Centrifugo",tags:["centrifuge","go"],description:"Million WebSocket connections with Centrifugo",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/2020/02/10/million-connections-with-centrifugo",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2020-02-10-million-connections-with-centrifugo.md",source:"@site/blog/2020-02-10-million-connections-with-centrifugo.md",title:"Million connections with Centrifugo",description:"Million WebSocket connections with Centrifugo",date:"2020-02-10T00:00:00.000Z",formattedDate:"February 10, 2020",tags:[{label:"centrifuge",permalink:"/blog/tags/centrifuge"},{label:"go",permalink:"/blog/tags/go"}],readingTime:3.03,truncated:!0,prevItem:{title:"Experimenting with QUIC and WebTransport",permalink:"/blog/2020/10/16/experimenting-with-quic-transport"}},s=[],f={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to get an understanding about possible hardware requirements for reasonably massive Centrifugo setup we made a test stand inside Kubernetes."),(0,i.kt)("p",null,"Our goal was to run server based on Centrifuge library (the core of Centrifugo server) with one million WebSocket connections and send many messages to connected clients. While sending many messages we have been looking at delivery time latency. In fact we will see that about 30 million messages per minute (500k messages per second) will be delivered to connected clients and latency won't be larger than 200ms in 99 percentile."))}p.isMDXComponent=!0}}]);