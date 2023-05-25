"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[94411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(65488),r(85162);const s={id:"auth-signout",title:"signOut()",slug:"/auth-signout",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},o=void 0,l={unversionedId:"generated/auth-signout",id:"generated/auth-signout",title:"signOut()",description:"Signs out the current user, if there is a logged in user.",source:"@site/_supabase_dart/generated/auth-signout.mdx",sourceDirName:"generated",slug:"/auth-signout",permalink:"/docs/reference/dart/auth-signout",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml",tags:[],version:"current",frontMatter:{id:"auth-signout",title:"signOut()",slug:"/auth-signout",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},sidebar:"sidebar",previous:{title:"signInWithOAuth()",permalink:"/docs/reference/dart/auth-signinwithoauth"},next:{title:"verifyOtp()",permalink:"/docs/reference/dart/auth-verifyotp"}},u={},i=[{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Sign out",id:"sign-out",level:3}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Signs out the current user, if there is a logged in user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"await supabase.auth.signOut();\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In order to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"signOut()")," method, the user needs to be signed in first.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"sign-out"},"Sign out"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"await supabase.auth.signOut();\n")))}p.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),s=r(86010),o=r(72389),l=r(67392),u=r(7094),i=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:o,values:d,groupId:m,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:O}=(0,u.U)(),[k,w]=(0,a.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=m){const e=y[m];null!=e&&e!==k&&g.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==k&&(N(t),w(n),null!=m&&O(m,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:_},o,{className:(0,s.Z)("tabs__item",p,o?.className,{"tabs__item--active":k===t})}),r??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);