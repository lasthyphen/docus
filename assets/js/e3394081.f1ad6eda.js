"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[45886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(a),p=s,h=c["".concat(o,".").concat(p)]||c[p]||u[p]||l;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,n=new Array(l);n[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:s,n[1]=i;for(var m=2;m<l;m++)n[m]=a[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),s=(a(67294),a(3905));a(65488),a(85162);const l={id:"storage-from-createsignedurls",title:"from.createSignedUrls()",slug:"/storage-from-createsignedurls",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},n=void 0,i={unversionedId:"generated/storage-from-createsignedurls",id:"generated/storage-from-createsignedurls",title:"from.createSignedUrls()",description:"Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.",source:"@site/_supabase_js/generated/storage-from-createsignedurls.mdx",sourceDirName:"generated",slug:"/storage-from-createsignedurls",permalink:"/docs/reference/javascript/storage-from-createsignedurls",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"storage-from-createsignedurls",title:"from.createSignedUrls()",slug:"/storage-from-createsignedurls",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},o={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Create Signed URLs",id:"create-signed-urls",level:3}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .storage\n  .from('avatars')\n  .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"paths"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"The file paths to be downloaded, including the current file names. For example ",(0,s.kt)("inlineCode",{parentName:"p"},"['folder/image.png', 'folder2/image2.png']"),"."))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"expiresIn"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"number"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"The number of seconds until the signed URLs expire. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"60")," for URLs which are valid for one minute."))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"options"),(0,s.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"download"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"string")," | ",(0,s.kt)("code",null,"boolean"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"string"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"boolean"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")))))))),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"RLS policy permissions required:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"buckets")," table permissions: none"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"objects")," table permissions: ",(0,s.kt)("inlineCode",{parentName:"li"},"select")))),(0,s.kt)("li",{parentName:"ul"},"Refer to the ",(0,s.kt)("a",{parentName:"li",href:"/docs/guides/storage#access-control"},"Storage guide")," on how access control works")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"create-signed-urls"},"Create Signed URLs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .storage\n  .from('avatars')\n  .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)\n")))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294),s=a(86010);const l="tabItem_Ymn6";function n(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,n),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),s=a(67294),l=a(86010),n=a(72389),i=a(67392),o=a(7094),m=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:n,values:u,groupId:p,className:h}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===n?n:n??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,o.U)(),[y,w]=(0,s.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=p){const e=v[p];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),r=b[a].value;r!==y&&(O(t),w(r),null!=p&&N(p,String(r)))},E=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:n}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>j.push(e),onKeyDown:E,onClick:x},n,{className:(0,l.Z)("tabs__item",c,n?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,n.Z)();return s.createElement(u,(0,r.Z)({key:String(t)},e))}}}]);