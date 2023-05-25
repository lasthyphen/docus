"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[50713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const s={id:"storage-getbucket",title:"getBucket()",slug:"/storage-getbucket",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},l=void 0,o={unversionedId:"generated/storage-getbucket",id:"generated/storage-getbucket",title:"getBucket()",description:"Retrieves the details of an existing Storage bucket.",source:"@site/_supabase_js/generated/storage-getbucket.mdx",sourceDirName:"generated",slug:"/storage-getbucket",permalink:"/docs/reference/javascript/storage-getbucket",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"storage-getbucket",title:"getBucket()",slug:"/storage-getbucket",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Get bucket",id:"get-bucket",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Retrieves the details of an existing Storage bucket."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .storage\n  .getBucket('avatars')\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",{className:"method-list-group"},(0,n.kt)("li",{className:"method-list-item"},(0,n.kt)("h4",{className:"method-list-item-label"},(0,n.kt)("span",{className:"method-list-item-label-name"},"id"),(0,n.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,n.kt)("span",{className:"method-list-item-validation"},(0,n.kt)("code",null,"string"))),(0,n.kt)("div",{class:"method-list-item-description"},(0,n.kt)("p",null,"The unique identifier of the bucket you would like to retrieve.")))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RLS policy permissions required:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buckets")," table permissions: ",(0,n.kt)("inlineCode",{parentName:"li"},"select")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"objects")," table permissions: none"))),(0,n.kt)("li",{parentName:"ul"},"Refer to the ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/storage#access-control"},"Storage guide")," on how access control works")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"get-bucket"},"Get bucket"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .storage\n  .getBucket('avatars')\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),s=a(86010),l=a(72389),o=a(67392),i=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:d,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,i.U)(),[N,w]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=d){const e=h[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,a=O.indexOf(t),r=f[a].value;r!==N&&(E(t),w(r),null!=d&&y(d,String(r)))},_=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:_,onClick:j},l,{className:(0,s.Z)("tabs__item",p,l?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);