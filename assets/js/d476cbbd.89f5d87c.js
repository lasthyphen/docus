"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[33044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));r(65488),r(85162);const o={id:"or",title:".or()",slug:"/or",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},l=void 0,s={unversionedId:"generated/or",id:"version-v0/generated/or",title:".or()",description:"Finds all rows satisfying at least one of the filters.",source:"@site/_supabase_dart_versioned_docs/version-v0/generated/or.mdx",sourceDirName:"generated",slug:"/or",permalink:"/docs/reference/dart/v0/or",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml",tags:[],version:"v0",frontMatter:{id:"or",title:".or()",slug:"/or",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},sidebar:"sidebar",previous:{title:"Using Filters",permalink:"/docs/reference/dart/v0/using-filters"},next:{title:".not()",permalink:"/docs/reference/dart/v0/not"}},i={},c=[{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"Use <code>or</code> with <code>and</code>",id:"use-or-with-and",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Finds all rows satisfying at least one of the filters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final res = await supabase\n  .from('cities')\n  .select('name, country_id')\n  .or('id.eq.20,id.eq.30')\n  .execute();\n")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},".or()")," expects you to use the raw ",(0,n.kt)("a",{parentName:"p",href:"https://postgrest.org/en/stable/api.html#horizontal-filtering-rows"},"PostgREST syntax")," for the filter names and values."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-dart"},".or('id.in.(6,7),arraycol.cs.{\"a\",\"b\"}')  // Use Postgres list () and 'in' for in_ filter. Array {} and 'cs' for contains.\n.or('id.in.(${mylist.join(',')}),arraycol.cs.{${mylistArray.join(',')}}')   // You can insert a Dart list for list or array column.\n.or('id.in.(${mylist.join(',')}),rangecol.cs.(${mylistRange.join(',')}]')   // You can insert a Dart list for list or range column.\n")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"with-select"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"select()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final res = await supabase\n  .from('cities')\n  .select('name, country_id')\n  .or('id.eq.20,id.eq.30')\n  .execute();\n")),(0,n.kt)("h3",{id:"use-or-with-and"},"Use ",(0,n.kt)("inlineCode",{parentName:"h3"},"or")," with ",(0,n.kt)("inlineCode",{parentName:"h3"},"and")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final res = await supabase\n  .from('cities')\n  .select('name, country_id')\n  .or('id.gt.20,and(name.eq.New Zealand,name.eq.France)')\n  .execute();\n")))}p.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),c=r(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[w,N]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,r=O.indexOf(t),a=v[r].value;a!==w&&(E(t),N(a),null!=m&&k(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:_},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);