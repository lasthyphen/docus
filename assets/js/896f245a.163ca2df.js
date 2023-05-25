"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[18403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={id:"lt",title:".lt()",slug:"/lt",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},s=void 0,o={unversionedId:"generated/lt",id:"version-v1/generated/lt",title:".lt()",description:"Finds all rows whose value on the stated column is less than the",source:"@site/_supabase_js_versioned_docs/version-v1/generated/lt.mdx",sourceDirName:"generated",slug:"/lt",permalink:"/docs/reference/javascript/v1/lt",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"v1",frontMatter:{id:"lt",title:".lt()",slug:"/lt",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"With <code>select()</code>",id:"with-select",level:3},{value:"With <code>update()</code>",id:"with-update",level:3},{value:"With <code>delete()</code>",id:"with-delete",level:3},{value:"With <code>rpc()</code>",id:"with-rpc",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Finds all rows whose value on the stated ",(0,n.kt)("inlineCode",{parentName:"p"},"column")," is less than the\nspecified ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .select('name, country_id')\n  .lt('country_id', 250)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",{className:"method-list-group"},(0,n.kt)("li",{className:"method-list-item"},(0,n.kt)("h4",{className:"method-list-item-label"},(0,n.kt)("span",{className:"method-list-item-label-name"},"column"),(0,n.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,n.kt)("span",{className:"method-list-item-validation"},(0,n.kt)("code",null,"object"))),(0,n.kt)("div",{class:"method-list-item-description"},(0,n.kt)("p",null,"The column to filter on."))),(0,n.kt)("li",{className:"method-list-item"},(0,n.kt)("h4",{className:"method-list-item-label"},(0,n.kt)("span",{className:"method-list-item-label-name"},"value"),(0,n.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,n.kt)("span",{className:"method-list-item-validation"},(0,n.kt)("code",null,"object"))),(0,n.kt)("div",{class:"method-list-item-description"},(0,n.kt)("p",null,"The value to filter with.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"with-select"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"select()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .select('name, country_id')\n  .lt('country_id', 250)\n")),(0,n.kt)("h3",{id:"with-update"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"update()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .update({ name: 'Mordor' })\n  .lt('country_id', 250)\n")),(0,n.kt)("h3",{id:"with-delete"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .delete()\n  .lt('country_id', 250)\n")),(0,n.kt)("h3",{id:"with-rpc"},"With ",(0,n.kt)("inlineCode",{parentName:"h3"},"rpc()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Only valid if the Postgres function returns a table type.\nconst { data, error } = await supabase\n  .rpc('echo_all_cities')\n  .lt('country_id', 250)\n")))}d.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:s,values:p,groupId:m,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,i.U)(),[w,N]=(0,n.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,a=_.indexOf(t),r=v[a].value;r!==w&&(O(t),N(r),null!=m&&g(m,String(r)))},E=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},v.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:E,onClick:j},s,{className:(0,l.Z)("tabs__item",d,s?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}}}]);