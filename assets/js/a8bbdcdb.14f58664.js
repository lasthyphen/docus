"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[66771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));r(65488),r(85162);const s={id:"storage-listbuckets",title:"listBuckets()",slug:"/storage-listbuckets",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},l=void 0,o={unversionedId:"generated/storage-listbuckets",id:"version-v0/generated/storage-listbuckets",title:"listBuckets()",description:"Retrieves the details of all Storage buckets within an existing product.",source:"@site/_supabase_dart_versioned_docs/version-v0/generated/storage-listbuckets.mdx",sourceDirName:"generated",slug:"/storage-listbuckets",permalink:"/docs/reference/dart/v0/storage-listbuckets",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml",tags:[],version:"v0",frontMatter:{id:"storage-listbuckets",title:"listBuckets()",slug:"/storage-listbuckets",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},sidebar:"sidebar",previous:{title:"getBucket()",permalink:"/docs/reference/dart/v0/storage-getbucket"},next:{title:"updateBucket()",permalink:"/docs/reference/dart/v0/storage-updatebucket"}},i={},u=[{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"List buckets",id:"list-buckets",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Retrieves the details of all Storage buckets within an existing product."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final res = await supabase\n  .storage\n  .listBuckets()\n")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Policy permissions required:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buckets")," permissions: ",(0,n.kt)("inlineCode",{parentName:"li"},"select")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"objects")," permissions: none")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"list-buckets"},"List buckets"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final res = await supabase\n  .storage\n  .listBuckets()\n")))}p.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),s=r(86010),l=r(72389),o=r(67392),i=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,i.U)(),[w,O]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=m){const e=h[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,r=N.indexOf(t),a=v[r].value;a!==w&&(E(t),O(a),null!=m&&y(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},b)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:_},l,{className:(0,s.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);