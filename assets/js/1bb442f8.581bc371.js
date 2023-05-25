"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[20782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var s=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,l=function(e,t){if(null==e)return{};var a,s,l={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=s.createContext({}),m=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=m(a),p=l,h=c["".concat(o,".").concat(p)]||c[p]||d[p]||n;return a?s.createElement(h,i(i({ref:t},u),{},{components:a})):s.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var m=2;m<n;m++)i[m]=a[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},13282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>m});var s=a(87462),l=(a(67294),a(3905));a(65488),a(85162);const n={id:"auth-admin-createuser",title:"createUser()",slug:"/auth-admin-createuser",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"},i=void 0,r={unversionedId:"generated/auth-admin-createuser",id:"generated/auth-admin-createuser",title:"createUser()",description:"Creates a new user.",source:"@site/_supabase_js/generated/auth-admin-createuser.mdx",sourceDirName:"generated",slug:"/auth-admin-createuser",permalink:"/docs/reference/javascript/auth-admin-createuser",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml",tags:[],version:"current",frontMatter:{id:"auth-admin-createuser",title:"createUser()",slug:"/auth-admin-createuser",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v2.yml"}},o={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Create a new user with custom user metadata",id:"create-a-new-user-with-custom-user-metadata",level:3},{value:"Auto-confirm the user&#39;s email",id:"auto-confirm-the-users-email",level:3},{value:"Auto-confirm the user&#39;s phone number",id:"auto-confirm-the-users-phone-number",level:3}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Creates a new user.\nThis function should only be called on a server. Never expose your ",(0,l.kt)("inlineCode",{parentName:"p"},"service_role")," key in the browser."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase.auth.admin.createUser({\n  email: 'user@email.com',\n  password: 'password',\n  user_metadata: { name: 'Yoda' }\n})\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("ul",{className:"method-list-group"},(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"AdminUserAttributes"),(0,l.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"No description provided. ")),(0,l.kt)("ul",{className:"method-list-group"},(0,l.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"app_metadata"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"A custom data object to store the user's application specific metadata. This maps to the ",(0,l.kt)("inlineCode",{parentName:"p"},"auth.users.app_metadata")," column."),(0,l.kt)("p",null,"Only a service role can modify."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"app_metadata")," should be a JSON object that includes app-specific info, such as identity providers, roles, and other\naccess control information."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"ban_duration"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"string"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"Determines how long a user is banned for."),(0,l.kt)("p",null,'The format for the ban duration follows a strict sequence of decimal numbers with a unit suffix.\nValid time units are "ns", "us" (or "\xb5s"), "ms", "s", "m", "h".'),(0,l.kt)("p",null,"For example, some possible durations include: '300ms', '2h45m'."),(0,l.kt)("p",null,"Setting the ban duration to 'none' lifts the ban on the user."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"data"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"A custom data object to store the user's metadata. This maps to the ",(0,l.kt)("inlineCode",{parentName:"p"},"auth.users.user_metadata")," column."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," should be a JSON object that includes user-specific info, such as their first and last name."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"email"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"string"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"The user's email."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"email_confirm"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"boolean"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"Confirms the user's email address if set to true."),(0,l.kt)("p",null,"Only a service role can modify."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"password"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"string"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"The user's password."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"phone"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"string"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"The user's phone."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"phone_confirm"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"boolean"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"Confirms the user's phone number if set to true."),(0,l.kt)("p",null,"Only a service role can modify."))),(0,l.kt)("li",{className:"method-list-item"},(0,l.kt)("h4",{className:"method-list-item-label"},(0,l.kt)("span",{className:"method-list-item-label-name"},"user_metadata"),(0,l.kt)("span",{className:"method-list-item-label-badge false"},"optional"),(0,l.kt)("span",{className:"method-list-item-validation"},(0,l.kt)("code",null,"object"))),(0,l.kt)("div",{class:"method-list-item-description"},(0,l.kt)("p",null,"A custom data object to store the user's metadata. This maps to the ",(0,l.kt)("inlineCode",{parentName:"p"},"auth.users.user_metadata")," column."),(0,l.kt)("p",null,"Only a service role can modify."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"user_metadata")," should be a JSON object that includes user-specific info, such as their first and last name."),(0,l.kt)("p",null,"Note: When using the GoTrueAdminApi and wanting to modify a user's metadata,\nthis attribute is used instead of UserAttributes data.")))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To confirm the user's email address or phone number, set ",(0,l.kt)("inlineCode",{parentName:"li"},"email_confirm")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"phone_confirm")," to true. Both arguments default to false.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"create-a-new-user-with-custom-user-metadata"},"Create a new user with custom user metadata"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase.auth.admin.createUser({\n  email: 'user@email.com',\n  password: 'password',\n  user_metadata: { name: 'Yoda' }\n})\n")),(0,l.kt)("h3",{id:"auto-confirm-the-users-email"},"Auto-confirm the user's email"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase.auth.admin.createUser({\n  email: 'user@email.com',\n  email_confirm: true\n})\n")),(0,l.kt)("h3",{id:"auto-confirm-the-users-phone-number"},"Auto-confirm the user's phone number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase.auth.admin.createUser({\n  phone: '1234567890',\n  phone_confirm: true\n})\n")))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(67294),l=a(86010);const n="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return s.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(87462),l=a(67294),n=a(86010),i=a(72389),r=a(67392),o=a(7094),m=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:p,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),f=(0,r.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,o.U)(),[y,w]=(0,l.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:j}=(0,m.o5)();if(null!=p){const e=N[p];null!=e&&e!==y&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),s=k[a].value;s!==y&&(j(t),w(s),null!=p&&g(p,String(s)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,s.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>_.push(e),onKeyDown:T,onClick:O},i,{className:(0,n.Z)("tabs__item",c,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,i.Z)();return l.createElement(d,(0,s.Z)({key:String(t)},e))}}}]);