"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[64346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=s,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||l;return a?n.createElement(b,r(r({ref:t},m),{},{components:a})):n.createElement(b,r({ref:t},m))}));function b(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),s=(a(67294),a(3905)),l=a(65488),r=a(85162);const o={id:"contains",title:"contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},i=void 0,c={unversionedId:"generated/contains",id:"generated/contains",title:"contains()",description:"Parameters",source:"@site/_supabase_js/generated/contains.mdx",sourceDirName:"generated",slug:"/contains",permalink:"/docs/reference/javascript/contains",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"contains",title:"contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},m={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"On array columns",id:"on-array-columns",level:3},{value:"On range columns",id:"on-range-columns",level:3},{value:"On <code>jsonb</code> columns",id:"on-jsonb-columns",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('users')\n  .select()\n  .contains('name', ['is:online', 'faction:red'])\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"column"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"ColumnName"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"value"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"string")," | ",(0,s.kt)("code",null,"Record")," | ",(0,s.kt)("code",null,"array"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},(0,s.kt)("code",null,"object")),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"string"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"Record"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")))))),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"on-array-columns"},"On array columns"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  issues (\n    id int8 primary key,\n    title text,\n    tags text[]\n  );\n\ninsert into\n  issues (id, title, tags)\nvalues\n  (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),\n  (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('issues')\n  .select('title')\n  .contains('tags', ['is:open', 'severity:high'])\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "title": "Cache invalidation is not working"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))),(0,s.kt)("h3",{id:"on-range-columns"},"On range columns"),(0,s.kt)("p",null,"Postgres supports a number of ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/rangetypes.html"},"range\ntypes"),". You\ncan filter on range columns using the string representation of range\nvalues."),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  reservations (\n    id int8 primary key,\n    room_name text,\n    during tsrange\n  );\n\ninsert into\n  reservations (id, room_name, during)\nvalues\n  (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),\n  (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('reservations')\n  .select()\n  .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "room_name": "Emerald",\n      "during": "[\\"2000-01-01 13:00:00\\",\\"2000-01-01 15:00:00\\")"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))),(0,s.kt)("h3",{id:"on-jsonb-columns"},"On ",(0,s.kt)("inlineCode",{parentName:"h3"},"jsonb")," columns"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  users (\n    id int8 primary key,\n    name text,\n    address jsonb\n  );\n\ninsert into\n  users (id, name, address)\nvalues\n  (1, 'Michael', '{ \"postcode\": 90210, \"street\": \"Melrose Place\" }'),\n  (2, 'Jane', '{}');\n"))),(0,s.kt)(r.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('users')\n  .select('name')\n  .contains('address', { postcode: 90210 })\n"))),(0,s.kt)(r.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "name": "Michael"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),s=a(67294),l=a(86010),r=a(72389),o=a(67392),i=a(7094),c=a(12466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:r,values:d,groupId:p,className:b}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,i.U)(),[N,T]=(0,s.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=p){const e=f[p];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==N&&(O(t),T(n),null!=p&&y(p,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:w,onClick:j},r,{className:(0,l.Z)("tabs__item",u,r?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,r.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);