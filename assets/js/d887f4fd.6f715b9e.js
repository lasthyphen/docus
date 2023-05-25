"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[41946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(65488),n(85162);const i={id:"initializing",title:"Initializing",slug:"initializing"},l=void 0,o={unversionedId:"initializing",id:"initializing",title:"Initializing",description:"Flutter",source:"@site/_supabase_dart/initializing.mdx",sourceDirName:".",slug:"/initializing",permalink:"/docs/reference/dart/initializing",draft:!1,editUrl:"https://github.com/_supabase_dart/initializing.mdx",tags:[],version:"current",frontMatter:{id:"initializing",title:"Initializing",slug:"initializing"},sidebar:"sidebar",previous:{title:"Installing",permalink:"/docs/reference/dart/installing"},next:{title:"Upgrade to supabase-flutter v1",permalink:"/docs/reference/dart/upgrade-guide"}},s={},u=[{value:"Flutter",id:"flutter",level:2},{value:"Flutter <code>initialize()</code>",id:"flutter-initialize",level:3},{value:"Access <code>SupabaseClient</code> instance",id:"access-supabaseclient-instance",level:3},{value:"Other Dart Projects",id:"other-dart-projects",level:2},{value:"Dart <code>SupabaseClient()</code>",id:"dart-supabaseclient",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"flutter"},"Flutter"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"supabase-flutter"),", you will be using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize()")," method on ",(0,r.kt)("inlineCode",{parentName:"p"},"Supabase")," class."),(0,r.kt)("h3",{id:"flutter-initialize"},"Flutter ",(0,r.kt)("inlineCode",{parentName:"h3"},"initialize()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},"Future<void> main() async {\n  await Supabase.initialize(url: 'https://xyzcompany.supabase.co', anonKey: 'public-anon-key');\n  runApp(MyApp());\n}\n")),(0,r.kt)("h3",{id:"access-supabaseclient-instance"},"Access ",(0,r.kt)("inlineCode",{parentName:"h3"},"SupabaseClient")," instance"),(0,r.kt)("p",null,"Once you initialize Supabase in your ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method, you can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"SupabaseClient")," instance from anywhere in your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final supabase = Supabase.instance.client;\n")),(0,r.kt)("h2",{id:"other-dart-projects"},"Other Dart Projects"),(0,r.kt)("p",null,"You can initialize a new Supabase client using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SupabaseClient()")," method."),(0,r.kt)("p",null,"The Supabase client is your entrypoint to the rest of the Supabase functionality\nand is the easiest way to interact with everything we offer within the Supabase ecosystem."),(0,r.kt)("h3",{id:"dart-supabaseclient"},"Dart ",(0,r.kt)("inlineCode",{parentName:"h3"},"SupabaseClient()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final supabase = SupabaseClient('https://xyzcompany.supabase.co', 'public-anon-key');\n")))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),l=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const z=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==w&&(C(t),O(a),null!=m&&k(m,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:z},l,{className:(0,i.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);