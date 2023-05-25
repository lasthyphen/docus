"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[11507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26966:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),i=r(39960);function a(e){let{children:t,icon:r,title:a,description:l,to:o,layout:s="vertical"}=e;return n.createElement(i.Z,{to:o,className:["button-card",`button-card--${s}`].join(" ")},t||n.createElement("div",{className:"button-card__inner"},r&&"string"==typeof r?n.createElement("img",{src:r,width:56}):r,n.createElement("h3",null,a),n.createElement("p",null,l)))}},5054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),i=(r(67294),r(3905)),a=r(44996),l=r(26966);const o={id:"index",title:"Auth Helpers",description:"A collection of framework-specific Auth utilities for working with Supabase.",sidebar_label:"Overview"},s=void 0,u={unversionedId:"guides/auth/auth-helpers/index",id:"guides/auth/auth-helpers/index",title:"Auth Helpers",description:"A collection of framework-specific Auth utilities for working with Supabase.",source:"@site/docs/guides/auth/auth-helpers/index.mdx",sourceDirName:"guides/auth/auth-helpers",slug:"/guides/auth/auth-helpers/",permalink:"/docs/guides/auth/auth-helpers/",draft:!1,editUrl:"https://github.com/docs/guides/auth/auth-helpers/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Auth Helpers",description:"A collection of framework-specific Auth utilities for working with Supabase.",sidebar_label:"Overview"}},c={},p=[{value:"Status",id:"status",level:2},{value:"Additional Links",id:"additional-links",level:2}],d={toc:p};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A collection of framework-specific Auth utilities for working with Supabase."),(0,i.kt)("div",{class:"container",style:{padding:0}},(0,i.kt)("div",{class:"row is-multiline"},(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(l.Z,{class:"card",to:(0,a.Z)("/guides/auth/auth-helpers/auth-ui"),title:"Auth UI",description:"A pre-built React component for authenticating users.",style:{height:"100%"},mdxType:"ButtonCard"})),(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(l.Z,{class:"card",to:(0,a.Z)("/guides/auth/auth-helpers/nextjs"),title:"Next.js",description:"Helpers for authenticating users in Next.js applications.",style:{height:"100%"},mdxType:"ButtonCard"})),(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(l.Z,{class:"card",to:(0,a.Z)("/guides/auth/auth-helpers/sveltekit"),title:"SvelteKit",description:"Helpers for authenticating users in SvelteKit applications.",style:{height:"100%"},mdxType:"ButtonCard"})))),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"The Auth Helpers are in ",(0,i.kt)("inlineCode",{parentName:"p"},"beta"),". They are usable in their current state, but it's likely that there will be breaking changes."),(0,i.kt)("h2",{id:"additional-links"},"Additional Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers"},"Source code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers/issues"},"Known bugs and issues"))))}h.isMDXComponent=!0}}]);