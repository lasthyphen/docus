"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[23347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=l,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||n;return a?r.createElement(v,s(s({ref:t},u),{},{components:a})):r.createElement(v,s({ref:t},u))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),l=(a(67294),a(3905));a(65488),a(85162);const n={id:"overlaps",title:".overlaps()",slug:"/overlaps",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},s=void 0,o={unversionedId:"generated/overlaps",id:"version-v1/generated/overlaps",title:".overlaps()",description:"Finds all rows whose array or range value on the stated column overlaps",source:"@site/_supabase_js_versioned_docs/version-v1/generated/overlaps.mdx",sourceDirName:"generated",slug:"/overlaps",permalink:"/docs/reference/javascript/v1/overlaps",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"v1",frontMatter:{id:"overlaps",title:".overlaps()",slug:"/overlaps",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"With <code>update()</code>",id:"with-update",level:3},{value:"With <code>delete()</code>",id:"with-delete",level:3},{value:"With <code>rpc()</code>",id:"with-rpc",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Finds all rows whose array or range value on the stated ",(0,l.kt)("inlineCode",{parentName:"p"},"column")," overlaps\n(has a value in common) with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .overlaps('main_exports', ['computers', 'minerals'])\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("ul",{className:"method-list-group"},(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"column"),(0,l.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"The column to filter on."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"value"),(0,l.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"string")," | ",(0,l.kt)("code",null,"array"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"The value to filter with.")),(0,l.kt)("ul",{className:"method-list-group"},(0,l.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},(0,l.kt)("code",null,"object")),(0,l.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"No description provided. "))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"string"),(0,l.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"No description provided. ")))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},".overlaps()")," can work on array columns or range columns."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},".overlaps('arraycol',[\"a\",\"b\"]) // You can use a javascript array for an array column\n.overlaps('arraycol','{\"a\",\"b\"}') // You can use a string with Postgres array {} for array column.\n.overlaps('rangecol','(1,2]') // Use Postgres range syntax for range column.\n.overlaps('rangecol',`(${arr}]`)  // You can insert an array into a string.\n")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"with-select"},"With ",(0,l.kt)("inlineCode",{parentName:"h3"},"select()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, main_exports')\n  .overlaps('main_exports', ['computers', 'minerals'])\n")),(0,l.kt)("h3",{id:"with-update"},"With ",(0,l.kt)("inlineCode",{parentName:"h3"},"update()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let countries = await supabase\n  .from('countries')\n  .update({ name: 'Mordor' })\n  .overlaps('main_exports', ['computers', 'minerals'])\n")),(0,l.kt)("h3",{id:"with-delete"},"With ",(0,l.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .delete()\n  .overlaps('main_exports', ['computers', 'minerals'])\n")),(0,l.kt)("h3",{id:"with-rpc"},"With ",(0,l.kt)("inlineCode",{parentName:"h3"},"rpc()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Only valid if the Postgres function returns a table type.\nconst { data, error } = await supabase\n  .rpc('echo_all_countries')\n  .overlaps('main_exports', ['computers', 'minerals'])\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),l=a(86010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),l=a(67294),n=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:s,values:m,groupId:d,className:v}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,i.U)(),[N,w]=(0,l.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:_}=(0,c.o5)();if(null!=d){const e=g[d];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),r=b[a].value;r!==N&&(_(t),w(r),null!=d&&y(d,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},v)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onClick:O},s,{className:(0,n.Z)("tabs__item",p,s?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return l.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);