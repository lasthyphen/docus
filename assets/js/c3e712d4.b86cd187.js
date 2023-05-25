"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[41548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(b,s(s({ref:t},u),{},{components:a})):r.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),s=a(85162);const o={id:"match",title:"match()",slug:"/match",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},i=void 0,c={unversionedId:"generated/match",id:"generated/match",title:"match()",description:"Parameters",source:"@site/_supabase_js/generated/match.mdx",sourceDirName:"generated",slug:"/match",permalink:"/docs/reference/javascript/match",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"match",title:"match()",slug:"/match",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},u={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name')\n  .match({ id: 2, name: 'Albania' })\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",{className:"method-list-group"},(0,n.kt)("li",{className:"method-list-item"},(0,n.kt)("h4",{className:"method-list-item-label"},(0,n.kt)("span",{className:"method-list-item-label-name"},"query"),(0,n.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,n.kt)("span",{className:"method-list-item-validation"},(0,n.kt)("code",null,"Record"))),(0,n.kt)("div",{class:"method-list-item-description"},(0,n.kt)("p",null,"No description provided. ")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"with-select"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"select()")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  countries (id int8 primary key, name text);\n\ninsert into\n  countries (id, name)\nvalues\n  (1, 'Afghanistan'),\n  (2, 'Albania'),\n  (3, 'Algeria');\n"))),(0,n.kt)(s.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name')\n  .match({ id: 2, name: 'Albania' })\n"))),(0,n.kt)(s.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "name": "Albania"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))))}d.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:s,values:p,groupId:d,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[w,N]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),r=f[a].value;r!==w&&(T(t),N(r),null!=d&&k(d,String(r)))},j=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onClick:E},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}}}]);