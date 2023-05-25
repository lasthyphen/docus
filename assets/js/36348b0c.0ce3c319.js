"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[80487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const s={id:"generating-types",title:"Generating Types",slug:"generating-types",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},o=void 0,i={unversionedId:"generating-types",id:"generating-types",title:"Generating Types",description:"Supabase will soon release native type generators that dump your database types for various languages. For now, we support TypeScript through third-party tools.",source:"@site/_supabase_js/generating-types.mdx",sourceDirName:".",slug:"/generating-types",permalink:"/docs/reference/javascript/generating-types",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"current",frontMatter:{id:"generating-types",title:"Generating Types",slug:"generating-types",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},l={},u=[{value:"Usage with TypeScript",id:"usage-with-typescript",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supabase will soon release native type generators that dump your database types for various languages. For now, we support TypeScript ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/api/generating-types"},"through third-party tools"),"."),(0,r.kt)("h2",{id:"usage-with-typescript"},"Usage with TypeScript"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"supabase-js")," ships with type definitions for usage with TypeScript and for convenient IntelliSense auto-complete and documentation in your editor."),(0,r.kt)("p",null,"When using TypeScript, you can pass the type of database row as a type parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," method to get better auto-completion support down the chain.\nIf you don't provide a type for the row you need to explicitly pass ",(0,r.kt)("inlineCode",{parentName:"p"},"from<any>('tableName')"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Message = {\n  id: number\n  inserted_at: string\n  message: string\n  user_id: string\n  channel_id: number\n  author: { username: string }\n}\n\nconst response = await supabase\n  .from<Message>('messages') // Message maps to the type of the row in your database.\n  .select('*, author:user_id(username)')\n  .match({ channel_id: 2 }) // Your IDE will be able to help with auto-completion.\nresponse.data // Response data will be of type Array<Message>.\n\n// If you don't provide a type for the row you need to explicitly pass `from<any>('tableName')`.\nconst response = await supabase\n  .from<any>('messages')\n  .select('*, author:user_id(username)')\n  .match({ channel_id: 2 })\nresponse.data // Response data will be of type Array<any>.\n")))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),o=a(72389),i=a(67392),l=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:m,className:y}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[k,O]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==k&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==k&&(_(t),O(n),null!=m&&w(m,String(n)))},j=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},y)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:j,onClick:E},o,{className:(0,s.Z)("tabs__item",c,o?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);