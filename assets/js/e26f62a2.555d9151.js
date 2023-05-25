"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[51338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},56599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(65488),n(85162);const l={id:"subscribe",title:"on().subscribe()",slug:"/subscribe",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},s=void 0,i={unversionedId:"generated/subscribe",id:"generated/subscribe",title:"on().subscribe()",description:"Subscribe to realtime changes in your database.",source:"@site/_supabase_dart/generated/subscribe.mdx",sourceDirName:"generated",slug:"/subscribe",permalink:"/docs/reference/dart/subscribe",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml",tags:[],version:"current",frontMatter:{id:"subscribe",title:"on().subscribe()",slug:"/subscribe",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},sidebar:"sidebar",previous:{title:"stream()",permalink:"/docs/reference/dart/stream"},next:{title:"removeChannel()",permalink:"/docs/reference/dart/removechannel"}},o={},u=[{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Listen to all database changes",id:"listen-to-all-database-changes",level:3},{value:"Listening to a specific table",id:"listening-to-a-specific-table",level:3},{value:"Listening to inserts",id:"listening-to-inserts",level:3},{value:"Listening to updates",id:"listening-to-updates",level:3},{value:"Listening to deletes",id:"listening-to-deletes",level:3},{value:"Listening to multiple events",id:"listening-to-multiple-events",level:3},{value:"Listening to row level changes",id:"listening-to-row-level-changes",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to realtime changes in your database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('*').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: '*', schema: '*'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Realtime is disabled by default for new Projects for better database performance and security. You can turn it on by ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/api#managing-realtime"},"managing replication"),"."),(0,r.kt)("li",{parentName:"ul"},'If you want to receive the "previous" data for updates and deletes, you will need to set ',(0,r.kt)("inlineCode",{parentName:"li"},"REPLICA IDENTITY")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"FULL"),", like this: ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE your_table REPLICA IDENTITY FULL;"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"listen-to-all-database-changes"},"Listen to all database changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('*').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: '*', schema: '*'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-a-specific-table"},"Listening to a specific table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: '*', schema: 'public', table: 'countries'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-inserts"},"Listening to inserts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: 'INSERT', schema: 'public', table: 'countries'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-updates"},"Listening to updates"),(0,r.kt)("p",null,"By default, Supabase will send only the updated record. If you want to receive the previous values as well you can\nenable full replication for the table you are listening too: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'alter table "your_table" replica identity full;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: 'UPDATE', schema: 'public', table: 'countries'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-deletes"},"Listening to deletes"),(0,r.kt)("p",null,"By default, Supabase does not send deleted records. If you want to receive the deleted record you can\nenable full replication for the table you are listening too: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'alter table "your_table" replica identity full;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries').on(\n  RealtimeListenTypes.postgresChanges,\n  ChannelFilter(event: 'DELETE', schema: 'public', table: 'countries'),\n  (payload, [ref]) {\n    print('Change received: ${payload.toString()}');\n  },\n).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-multiple-events"},"Listening to multiple events"),(0,r.kt)("p",null,"You can chain listeners if you want to listen to multiple events for each table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries').on(RealtimeListenTypes.postgresChanges,\n    ChannelFilter(event: 'INSERT', schema: 'public', table: 'countries'),\n    (payload, [ref]) {\n  print('Change received: ${payload.toString()}');\n}).on(RealtimeListenTypes.postgresChanges,\n    ChannelFilter(event: 'DELETE', schema: 'public', table: 'countries'),\n    (payload, [ref]) {\n  print('Change received: ${payload.toString()}');\n}).subscribe();\n")),(0,r.kt)("h3",{id:"listening-to-row-level-changes"},"Listening to row level changes"),(0,r.kt)("p",null,"You can listen to individual rows using the format ",(0,r.kt)("inlineCode",{parentName:"p"},"{table}:{col}=eq.{val}")," - where ",(0,r.kt)("inlineCode",{parentName:"p"},"{col}")," is the column name, and ",(0,r.kt)("inlineCode",{parentName:"p"},"{val}")," is the value which you want to match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"supabase.channel('public:countries:id=eq.200').on(\n    RealtimeListenTypes.postgresChanges,\n    ChannelFilter(\n      event: 'UPDATE',\n      schema: 'public',\n      table: 'countries',\n      filter: 'id=eq.200',\n    ), (payload, [ref]) {\n  print('Change received: ${payload.toString()}');\n}).subscribe();\n")))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),l=n(86010),s=n(72389),i=n(67392),o=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:s,values:d,groupId:b,className:m}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,o.U)(),[N,C]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&h.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==N&&(E(t),C(a),null!=b&&k(b,String(a)))},L=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:L,onClick:T},s,{className:(0,l.Z)("tabs__item",p,s?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);