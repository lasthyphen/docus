"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[35619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={id:"rangegt",title:".rangeGt()",slug:"/rangegt",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},s=void 0,o={unversionedId:"generated/rangegt",id:"version-v1/generated/rangegt",title:".rangeGt()",description:"Finds all rows whose range value on the stated column is strictly to",source:"@site/_supabase_js_versioned_docs/version-v1/generated/rangegt.mdx",sourceDirName:"generated",slug:"/rangegt",permalink:"/docs/reference/javascript/v1/rangegt",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"v1",frontMatter:{id:"rangegt",title:".rangeGt()",slug:"/rangegt",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"With <code>update()</code>",id:"with-update",level:3},{value:"With <code>delete()</code>",id:"with-delete",level:3},{value:"With <code>rpc()</code>",id:"with-rpc",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Finds all rows whose range value on the stated ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," is strictly to\nthe right of the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"range"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, population_range_millions')\n  .rangeGt('population_range_millions', '[150, 250]')\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"column"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"The column to filter on."))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"range"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"string"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"The range to filter with.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"with-select"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"select()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select('name, id, population_range_millions')\n  .rangeGt('population_range_millions', '[150, 250]')\n")),(0,r.kt)("h3",{id:"with-update"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"update()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .update({ name: 'Mordor' })\n  .rangeGt('population_range_millions', '[150, 250]')\n")),(0,r.kt)("h3",{id:"with-delete"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .delete()\n  .rangeGt('population_range_millions', '[150, 250]')\n")),(0,r.kt)("h3",{id:"with-rpc"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"rpc()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Only valid if the Postgres function returns a table type.\nconst { data, error } = await supabase\n  .rpc('echo_all_countries')\n  .rangeGt('population_range_millions', '[150, 250]')\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:s,values:d,groupId:m,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,i.U)(),[w,N]=(0,r.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,a=_.indexOf(t),n=b[a].value;n!==w&&(O(t),N(n),null!=m&&y(m,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:E,onClick:j},s,{className:(0,l.Z)("tabs__item",p,s?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);