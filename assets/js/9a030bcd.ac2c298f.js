"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[80296],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const i={id:"initializing",title:"Initializing",slug:"/initializing",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},l=void 0,s={unversionedId:"generated/initializing",id:"version-v0/generated/initializing",title:"Initializing",description:"Dart",source:"@site/_supabase_dart_versioned_docs/version-v0/generated/initializing.mdx",sourceDirName:"generated",slug:"/initializing",permalink:"/docs/reference/dart/v0/initializing",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml",tags:[],version:"v0",frontMatter:{id:"initializing",title:"Initializing",slug:"/initializing",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v0.yml"},sidebar:"sidebar",previous:{title:"Installing",permalink:"/docs/reference/dart/v0/installing"},next:{title:"auth.signUp()",permalink:"/docs/reference/dart/v0/auth-signup"}},o={},u=[{value:"Dart",id:"dart",level:2},{value:"Flutter",id:"flutter",level:2},{value:"Examples",id:"examples",level:2},{value:"Dart SupabaseClient()",id:"dart-supabaseclient",level:3},{value:"Flutter initialize()",id:"flutter-initialize",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dart"},"Dart"),(0,r.kt)("p",null,"You can initialize a new Supabase client using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SupabaseClient()")," method."),(0,r.kt)("p",null,"The Supabase client is your entrypoint to the rest of the Supabase functionality\nand is the easiest way to interact with everything we offer within the Supabase ecosystem."),(0,r.kt)("h2",{id:"flutter"},"Flutter"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"supabase_flutter"),", you will be using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize()")," method on ",(0,r.kt)("inlineCode",{parentName:"p"},"Supabase")," class."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"dart-supabaseclient"},"Dart SupabaseClient()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final supabase = SupabaseClient('https://xyzcompany.supabase.co', 'public-anon-key');\n")),(0,r.kt)("h3",{id:"flutter-initialize"},"Flutter initialize()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},"Future<void> main() async {\n  await Supabase.initialize(url: 'https://xyzcompany.supabase.co', anonKey: 'public-anon-key');\n  runApp(MyApp());\n}\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),s=a(67392),o=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:m,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,o.U)(),[w,O]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const z=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==w&&(_(t),O(n),null!=m&&k(m,String(n)))},N=e=>{let t=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]??E[E.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:N,onClick:z},l,{className:(0,i.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);