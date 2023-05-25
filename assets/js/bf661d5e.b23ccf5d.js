"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[71890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(65488),r(85162);const o={id:"using-modifiers",title:"Using Modifiers",slug:"/using-modifiers",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},s=void 0,i={unversionedId:"generated/using-modifiers",id:"version-v0/generated/using-modifiers",title:"Using Modifiers",description:"Modifiers can be used on select() queries.",source:"@site/_supabase_dart_versioned_docs/version-v0/generated/using-modifiers.mdx",sourceDirName:"generated",slug:"/using-modifiers",permalink:"/docs/reference/dart/v0/using-modifiers",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml",tags:[],version:"v0",frontMatter:{id:"using-modifiers",title:"Using Modifiers",slug:"/using-modifiers",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},sidebar:"sidebar",previous:{title:"from.getPublicUrl()",permalink:"/docs/reference/dart/v0/storage-from-getpublicurl"},next:{title:"limit()",permalink:"/docs/reference/dart/v0/limit"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modifiers can be used on ",(0,a.kt)("inlineCode",{parentName:"p"},"select()")," queries. "),(0,a.kt)("p",null,"If a Stored Procedure returns a table response, you can also apply modifiers to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc()")," function."))}p.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),s=r(72389),i=r(67392),l=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:s,values:d,groupId:m,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:O}=(0,l.U)(),[w,k]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=m){const e=h[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&k(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==w&&(_(t),k(n),null!=m&&O(m,String(n)))},j=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},v.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:j,onClick:T},s,{className:(0,o.Z)("tabs__item",p,s?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);