"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[92641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const s={id:"auth-signup",title:"signUp()",slug:"/auth-signup",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},i=void 0,l={unversionedId:"generated/auth-signup",id:"generated/auth-signup",title:"signUp()",description:"Creates a new user.",source:"@site/_supabase_dart/generated/auth-signup.mdx",sourceDirName:"generated",slug:"/auth-signup",permalink:"/docs/reference/dart/auth-signup",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml",tags:[],version:"current",frontMatter:{id:"auth-signup",title:"signUp()",slug:"/auth-signup",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},sidebar:"sidebar",previous:{title:"Upgrade to supabase-flutter v1",permalink:"/docs/reference/dart/upgrade-guide"},next:{title:"signInWithPassword()",permalink:"/docs/reference/dart/auth-signinwithpassword"}},o={},u=[{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Sign up.",id:"sign-up",level:3},{value:"Sign up with third-party providers.",id:"sign-up-with-third-party-providers",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Creates a new user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final AuthResponse res = await supabase.auth.signUp(\n  email: 'example@email.com',\n  password: 'example-password',\n);\nfinal Session? session = res.session;\nfinal User? user = res.user;\n")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By default, the user needs to verify their email address before logging in. To turn this off, disable ",(0,n.kt)("strong",{parentName:"li"},"Confirm email")," in ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/auth/settings"},"your project"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confirm email")," determines if users need to confirm their email address after signing up.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("strong",{parentName:"li"},"Confirm email")," is enabled, a ",(0,n.kt)("inlineCode",{parentName:"li"},"user")," is returned but ",(0,n.kt)("inlineCode",{parentName:"li"},"session")," is null."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("strong",{parentName:"li"},"Confirm email")," is disabled, both a ",(0,n.kt)("inlineCode",{parentName:"li"},"user")," and a ",(0,n.kt)("inlineCode",{parentName:"li"},"session")," are returned."))),(0,n.kt)("li",{parentName:"ul"},"When the user confirms their email address, they are redirected to the ",(0,n.kt)("a",{parentName:"li",href:"https://supabase.com/docs/reference/auth/config#site_url"},(0,n.kt)("inlineCode",{parentName:"a"},"SITE_URL"))," by default. You can modify your ",(0,n.kt)("inlineCode",{parentName:"li"},"SITE_URL")," or add additional redirect URLs in ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/auth/settings"},"your project"),"."),(0,n.kt)("li",{parentName:"ul"},"If signUp() is called for an existing confirmed user:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("strong",{parentName:"li"},"Confirm email")," is enabled in ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/auth/settings"},"your project"),", an obfuscated/fake user object is returned."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("strong",{parentName:"li"},"Confirm email")," is disabled, the error message, ",(0,n.kt)("inlineCode",{parentName:"li"},"User already registered")," is returned.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"sign-up"},"Sign up."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final AuthResponse res = await supabase.auth.signUp(\n  email: 'example@email.com',\n  password: 'example-password',\n);\nfinal Session? session = res.session;\nfinal User? user = res.user;\n")),(0,n.kt)("h3",{id:"sign-up-with-third-party-providers"},"Sign up with third-party providers."),(0,n.kt)("p",null,"If you are using Flutter, you can sign up with OAuth providers using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/dart/auth-signinwithoauth"},(0,n.kt)("inlineCode",{parentName:"a"},"signInWithOAuth()"))," method available on ",(0,n.kt)("inlineCode",{parentName:"p"},"supabase_flutter"),"."))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),s=a(86010),i=a(72389),l=a(67392),o=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:m,className:f}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,o.U)(),[N,w]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),r=b[a].value;r!==N&&(C(t),w(r),null!=m&&k(m,String(r)))},_=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},f)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:_,onClick:E},i,{className:(0,s.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);