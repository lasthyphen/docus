"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[93708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},76084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={id:"contains",title:".contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},s=void 0,i={unversionedId:"generated/contains",id:"version-v1/generated/contains",title:".contains()",description:"Finds all rows whose json, array, or range value on the stated column",source:"@site/_supabase_js_versioned_docs/version-v1/generated/contains.mdx",sourceDirName:"generated",slug:"/contains",permalink:"/docs/reference/javascript/v1/contains",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"v1",frontMatter:{id:"contains",title:".contains()",slug:"/contains",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"With <code>update()</code>",id:"with-update",level:3},{value:"With <code>delete()</code>",id:"with-delete",level:3},{value:"With <code>rpc()</code>",id:"with-rpc",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Finds all rows whose json, array, or range value on the stated ",(0,r.kt)("inlineCode",{parentName:"p"},"column"),"\ncontains the values specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .contains('main_exports', ['oil'])\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"column"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"The column to filter on."))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"value"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"string")," | ",(0,r.kt)("code",null,"array")," | ",(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"The value to filter with.")),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},(0,r.kt)("code",null,"object")),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. "))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"string"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. "))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"object"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. ")))))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},".contains()")," can work on array columns or range columns.\nIt is very useful for finding rows where a tag array contains all the values in the filter array."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},".contains('arraycol',[\"a\",\"b\"]) // You can use a javascript array for an array column\n.contains('arraycol','{\"a\",\"b\"}') // You can use a string with Postgres array {} for array column.\n.contains('rangecol','(1,2]') // Use Postgres range syntax for range column.\n.contains('rangecol',`(${arr}]`) // You can insert an array into a string.\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"with-select"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"select()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .contains('main_exports', ['oil'])\n")),(0,r.kt)("h3",{id:"with-update"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"update()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .update({ name: 'Mordor' })\n  .contains('main_exports', ['oil'])\n")),(0,r.kt)("h3",{id:"with-delete"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .delete()\n  .contains('main_exports', ['oil'])\n")),(0,r.kt)("h3",{id:"with-rpc"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"rpc()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Only valid if the Postgres function returns a table type.\nconst { data, error } = await supabase\n  .rpc('echo_all_countries')\n  .contains('main_exports', ['oil'])\n")))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),l=a(86010),s=a(72389),i=a(67392),o=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:s,values:d,groupId:p,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,o.U)(),[N,w]=(0,r.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:_}=(0,c.o5)();if(null!=p){const e=g[p];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==N&&(_(t),w(n),null!=p&&y(p,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},v.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onClick:O},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);