"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[81610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return a?l.createElement(b,n(n({ref:t},u),{},{components:a})):l.createElement(b,n({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,n[1]=i;for(var c=2;c<s;c++)n[c]=a[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var l=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const s={id:"storage-from-getpublicurl",title:"from.getPublicUrl()",slug:"/storage-from-getpublicurl",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},n=void 0,i={unversionedId:"generated/storage-from-getpublicurl",id:"generated/storage-from-getpublicurl",title:"from.getPublicUrl()",description:"Retrieves the URL for an asset in a public bucket.",source:"@site/_supabase_js/generated/storage-from-getpublicurl.mdx",sourceDirName:"generated",slug:"/storage-from-getpublicurl",permalink:"/docs/reference/javascript/storage-from-getpublicurl",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"storage-from-getpublicurl",title:"from.getPublicUrl()",slug:"/storage-from-getpublicurl",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Returns the URL for an asset in a public bucket",id:"returns-the-url-for-an-asset-in-a-public-bucket",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retrieves the URL for an asset in a public bucket.\nThis function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data } = supabase\n  .storage\n  .from('public-bucket')\n  .getPublicUrl('folder/avatar1.png')\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"path"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"string"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"The path and name of the file to generate the public URL for. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"folder/image.png"),"."))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"options"),(0,r.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. ")),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"download"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"string")," | ",(0,r.kt)("code",null,"boolean"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.")),(0,r.kt)("ul",{className:"method-list-group"},(0,r.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"string"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. "))),(0,r.kt)("li",{className:"method-list-item"},(0,r.kt)("h4",{className:"method-list-item-label"},(0,r.kt)("span",{className:"method-list-item-label-name"},"boolean"),(0,r.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,r.kt)("span",{className:"method-list-item-validation"},(0,r.kt)("code",null,"object"))),(0,r.kt)("div",{class:"method-list-item-description"},(0,r.kt)("p",null,"No description provided. ")))))))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The bucket needs to be set to public, either via ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/javascript/storage-updatebucket"},"updateBucket()")," or by going to Storage on ",(0,r.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"app.supabase.com"),', clicking the overflow menu on a bucket and choosing "Make public"'),(0,r.kt)("li",{parentName:"ul"},"RLS policy permissions required:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buckets")," table permissions: none"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objects")," table permissions: none"))),(0,r.kt)("li",{parentName:"ul"},"Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/storage#access-control"},"Storage guide")," on how access control works")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"returns-the-url-for-an-asset-in-a-public-bucket"},"Returns the URL for an asset in a public bucket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { data } = supabase\n  .storage\n  .from('public-bucket')\n  .getPublicUrl('folder/avatar1.png')\n")))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294),r=a(86010);const s="tabItem_Ymn6";function n(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,n),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(87462),r=a(67294),s=a(86010),n=a(72389),i=a(67392),o=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:n,values:p,groupId:d,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===n?n:n??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,o.U)(),[y,w]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&f.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),l=f[a].value;l!==y&&(O(t),w(l),null!=d&&N(d,String(l)))},P=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:n}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>j.push(e),onKeyDown:P,onClick:E},n,{className:(0,s.Z)("tabs__item",m,n?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,n.Z)();return r.createElement(p,(0,l.Z)({key:String(t)},e))}}}]);