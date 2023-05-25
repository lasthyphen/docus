"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[82228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),b=i,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=b;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),i=a(67294),l=a(86010),o=a(72389),r=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:b,className:m}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,r.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,w]=(0,i.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==N&&(E(t),w(n),null!=b&&y(b,String(n)))},_=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:_,onClick:x},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,o.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},18904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(65488),a(85162);const l={id:"replication",title:"Replication",slug:"replication"},o=void 0,r={unversionedId:"guides/database/replication",id:"guides/database/replication",title:"Replication",description:"Replication is a technique for copying the data from one database to another. Supabase uses replication functionality to provide a real-time API. Replication is useful for:",source:"@site/docs/guides/database/replication.mdx",sourceDirName:"guides/database",slug:"/guides/database/replication",permalink:"/docs/guides/database/replication",draft:!1,editUrl:"https://github.com/docs/guides/database/replication.mdx",tags:[],version:"current",frontMatter:{id:"replication",title:"Replication",slug:"replication"}},s={},c=[{value:"Manage publications in the Dashboard",id:"manage-publications-in-the-dashboard",level:2},{value:"Create a publication",id:"create-a-publication",level:2},{value:"Create a publication to listen to individual tables",id:"create-a-publication-to-listen-to-individual-tables",level:2},{value:"Add tables to an existing publication",id:"add-tables-to-an-existing-publication",level:2},{value:"Listen to <code>insert</code>",id:"listen-to-insert",level:2},{value:"Listen to <code>update</code>",id:"listen-to-update",level:2},{value:"Listen to <code>delete</code>",id:"listen-to-delete",level:2},{value:"Remove a publication",id:"remove-a-publication",level:2},{value:"Recreate a publication",id:"recreate-a-publication",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Replication is a technique for copying the data from one database to another. Supabase uses replication functionality to provide a real-time API. Replication is useful for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Spreading out the "load." For example, if your database has a lot of reads, you might want to split it between two databases.'),(0,i.kt)("li",{parentName:"ul"},"Reducing latency. For example, you may want one database in London to serve your European customers, and one in New York to serve the US.")),(0,i.kt)("p",null,"Replication is done through ",(0,i.kt)("em",{parentName:"p"},"publications"),", a method of choosing which changes to send to other systems (usually another Postgres database). Publications can be managed in the ",(0,i.kt)("a",{parentName:"p",href:"https://app.supabase.com"},"Dashboard")," or with SQL."),(0,i.kt)("h2",{id:"manage-publications-in-the-dashboard"},"Manage publications in the Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/database/tables"},"Database")," page in the Dashboard."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Replication")," in the sidebar."),(0,i.kt)("li",{parentName:"ol"},"Control which database events are sent by toggling ",(0,i.kt)("strong",{parentName:"li"},"Insert"),", ",(0,i.kt)("strong",{parentName:"li"},"Update"),", and ",(0,i.kt)("strong",{parentName:"li"},"Delete"),"."),(0,i.kt)("li",{parentName:"ol"},"Control which tables broadcast changes by selecting ",(0,i.kt)("strong",{parentName:"li"},"Source")," and toggling each table.")),(0,i.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,i.kt)("source",{src:"/docs/videos/api/api-realtime.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,i.kt)("h2",{id:"create-a-publication"},"Create a publication"),(0,i.kt)("p",null,"This publication contains changes to all tables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create publication publication_name\nfor all tables;\n")),(0,i.kt)("h2",{id:"create-a-publication-to-listen-to-individual-tables"},"Create a publication to listen to individual tables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create publication publication_name\nfor table table_one, table_two;\n")),(0,i.kt)("h2",{id:"add-tables-to-an-existing-publication"},"Add tables to an existing publication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter publication publication_name\nadd table table_name;\n")),(0,i.kt)("h2",{id:"listen-to-insert"},"Listen to ",(0,i.kt)("inlineCode",{parentName:"h2"},"insert")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create publication publication_name\nfor all tables\nwith (publish = 'insert');\n")),(0,i.kt)("h2",{id:"listen-to-update"},"Listen to ",(0,i.kt)("inlineCode",{parentName:"h2"},"update")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create publication publication_name\nfor all tables\nwith (publish = 'update');\n")),(0,i.kt)("h2",{id:"listen-to-delete"},"Listen to ",(0,i.kt)("inlineCode",{parentName:"h2"},"delete")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create publication publication_name\nfor all tables\nwith (publish = 'delete');\n")),(0,i.kt)("h2",{id:"remove-a-publication"},"Remove a publication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"drop publication if exists publication_name;\n")),(0,i.kt)("h2",{id:"recreate-a-publication"},"Recreate a publication"),(0,i.kt)("p",null,"If you're recreating a publication, it's best to do it in a transaction to ensure the operation succeeds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"begin;\n  -- remove the realtime publication\n  drop publication if exists publication_name;\n\n  -- re-create the publication but don't enable it for any tables\n  create publication publication_name;\ncommit;\n")))}p.isMDXComponent=!0}}]);