"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[66347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={id:"contains",title:".contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},o=void 0,i={unversionedId:"generated/contains",id:"generated/contains",title:".contains()",description:"Examples",source:"@site/_supabase_dart/generated/contains.mdx",sourceDirName:"generated",slug:"/contains",permalink:"/docs/reference/dart/contains",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml",tags:[],version:"current",frontMatter:{id:"contains",title:".contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},sidebar:"sidebar",previous:{title:".in_()",permalink:"/docs/reference/dart/in_"},next:{title:".containedBy()",permalink:"/docs/reference/dart/containedby"}},s={},c=[{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"With <code>update()</code>",id:"with-update",level:3},{value:"With <code>delete()</code>",id:"with-delete",level:3},{value:"With <code>rpc()</code>",id:"with-rpc",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .contains('main_exports', ['oil']);\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"with-select"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"select()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .contains('main_exports', ['oil']);\n")),(0,r.kt)("h3",{id:"with-update"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"update()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('countries')\n  .update({ 'name': 'Mordor' })\n  .contains('main_exports', ['oil']);\n")),(0,r.kt)("h3",{id:"with-delete"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('countries')\n  .delete()\n  .contains('main_exports', ['oil']);\n")),(0,r.kt)("h3",{id:"with-rpc"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"rpc()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Only valid if the Stored Procedure returns a table type.\nfinal data = await supabase\n  .rpc('echo_all_countries')\n  .contains('main_exports', ['oil']);\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:m,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[w,_]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&_(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==w&&(N(t),_(n),null!=m&&k(m,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:x},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);