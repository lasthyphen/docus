"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[46639],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=s,b=d["".concat(o,".").concat(c)]||d[c]||p[c]||l;return a?n.createElement(b,r(r({ref:t},m),{},{components:a})):n.createElement(b,r({ref:t},m))}));function b(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),l=a(65488),r=a(85162);const i={id:"upsert",title:"Upsert data: upsert()",slug:"/upsert",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},o=void 0,u={unversionedId:"generated/upsert",id:"generated/upsert",title:"Upsert data: upsert()",description:"Parameters",source:"@site/_supabase_js/generated/upsert.mdx",sourceDirName:"generated",slug:"/upsert",permalink:"/docs/reference/javascript/upsert",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"upsert",title:"Upsert data: upsert()",slug:"/upsert",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},m={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Upsert your data",id:"upsert-your-data",level:3},{value:"Bulk Upsert your data",id:"bulk-upsert-your-data",level:3},{value:"Upserting into tables with constraints",id:"upserting-into-tables-with-constraints",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('countries')\n  .upsert({ id: 1, name: 'Albania' })\n  .select()\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"values"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"Row")," | ",(0,s.kt)("code",null,"array"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},(0,s.kt)("code",null,"object")),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"Row"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"options"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"count"),(0,s.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"exact")," | ",(0,s.kt)("code",null,"planned")," | ",(0,s.kt)("code",null,"estimated"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ignoreDuplicates"),(0,s.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"boolean"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"onConflict"),(0,s.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"string"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")))))),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Primary keys must be included in ",(0,s.kt)("inlineCode",{parentName:"li"},"values")," to use upsert.")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"upsert-your-data"},"Upsert your data"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  countries (id int8 primary key, name text);\n\ninsert into\n  countries (id, name)\nvalues\n  (1, 'Afghanistan');\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('countries')\n  .upsert({ id: 1, name: 'Albania' })\n  .select()\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "name": "Albania"\n    }\n  ],\n  "status": 201,\n  "statusText": "Created"\n}\n')))),(0,s.kt)("h3",{id:"bulk-upsert-your-data"},"Bulk Upsert your data"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  countries (id int8 primary key, name text);\n\ninsert into\n  countries (id, name)\nvalues\n  (1, 'Afghanistan');\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('countries')\n  .upsert([\n    { id: 1, name: 'Albania' },\n    { id: 2, name: 'Algeria' },\n  ])\n  .select()\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "name": "Albania"\n    },\n    {\n      "id": 2,\n      "name": "Algeria"\n    }\n  ],\n  "status": 201,\n  "statusText": "Created"\n}\n')))),(0,s.kt)("h3",{id:"upserting-into-tables-with-constraints"},"Upserting into tables with constraints"),(0,s.kt)("p",null,"In the following query, ",(0,s.kt)("inlineCode",{parentName:"p"},"upsert()")," implicitly uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),"\n(primary key) column to determine conflicts. If there is no existing\nrow with the same ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"upsert()")," inserts a new row, which\nwill fail in this case as there is already a row with ",(0,s.kt)("inlineCode",{parentName:"p"},"handle")," ",(0,s.kt)("inlineCode",{parentName:"p"},'"saoirse"'),"."),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  users (\n    id int8 generated by default as identity primary key,\n    handle text not null unique,\n    display_name text\n  );\n\ninsert into\n  users (id, handle, display_name)\nvalues\n  (1, 'saoirse', null);\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('users')\n  .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })\n  .select()\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": {\n    "code": "23505",\n    "details": "Key (handle)=(saoirse) already exists.",\n    "hint": null,\n    "message": "duplicate key value violates unique constraint \\"users_handle_key\\""\n  },\n  "status": 409,\n  "statusText": "Conflict"\n}\n')))),(0,s.kt)("p",null,"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"onConflict")," option, you can instruct ",(0,s.kt)("inlineCode",{parentName:"p"},"upsert()")," to use\nanother column with a unique constraint to determine conflicts:"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"await supabase\n  .from('users')\n  .upsert(\n    { id: 42, handle: 'saoirse', display_name: 'Saoirse' },\n    { onConflict: 'handle' },\n  )\nconst { data, error } = await supabase\n  .from('users')\n  .select()\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 42,\n      "handle": "saoirse",\n      "display_name": "Saoirse"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),s=a(67294),l=a(86010),r=a(72389),i=a(67392),o=a(7094),u=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:r,values:p,groupId:c,className:b}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,o.U)(),[g,T]=(0,s.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=c){const e=f[c];null!=e&&e!==g&&h.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==g&&(x(t),T(n),null!=c&&N(c,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:j},r,{className:(0,l.Z)("tabs__item",d,r?.className,{"tabs__item--active":g===t})}),a??t)}))),t?(0,s.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,r.Z)();return s.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);