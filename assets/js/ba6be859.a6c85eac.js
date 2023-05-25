"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[88745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||s;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74724:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),l=a(85162);const o={id:"rangeadjacent",title:"rangeAdjacent()",slug:"/rangeadjacent",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},i=void 0,c={unversionedId:"generated/rangeadjacent",id:"generated/rangeadjacent",title:"rangeAdjacent()",description:"Parameters",source:"@site/_supabase_js/generated/rangeadjacent.mdx",sourceDirName:"generated",slug:"/rangeadjacent",permalink:"/docs/reference/javascript/rangeadjacent",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"rangeadjacent",title:"rangeAdjacent()",slug:"/rangeadjacent",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},u={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('reservations')\n  .select()\n  .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"column"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"ColumnName"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. "))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"range"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"string"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. ")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"with-select"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"select()")),(0,r.kt)("p",null,"Postgres supports a number of ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/rangetypes.html"},"range\ntypes"),". You\ncan filter on range columns using the string representation of range\nvalues."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table\n  reservations (\n    id int8 primary key,\n    room_name text,\n    during tsrange\n  );\n\ninsert into\n  reservations (id, room_name, during)\nvalues\n  (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),\n  (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');\n"))),(0,r.kt)(l.Z,{default:!0,value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, error } = await supabase\n  .from('reservations')\n  .select()\n  .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')\n"))),(0,r.kt)(l.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "room_name": "Emerald",\n      "during": "[\\"2000-01-01 13:00:00\\",\\"2000-01-01 15:00:00\\")"\n    }\n  ],\n  "status": 200,\n  "statusText": "OK"\n}\n')))))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),s=a(86010),l=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:p,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,i.U)(),[j,N]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=p){const e=y[p];null!=e&&e!==j&&f.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==j&&(O(t),N(n),null!=p&&k(p,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:T},l,{className:(0,s.Z)("tabs__item",m,l?.className,{"tabs__item--active":j===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function p(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);