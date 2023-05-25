"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[77582],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=n,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||l;return t?r.createElement(m,s(s({ref:a},u),{},{components:t})):r.createElement(m,s({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),n=t(86010);const l="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(87462),n=t(67294),l=t(86010),s=t(72389),i=t(67392),o=t(7094),p=t(12466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:a,block:t,defaultValue:s,values:c,groupId:h,className:m}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),g=(0,i.l)(b,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,o.U)(),[N,w]=(0,n.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&b.some((a=>a.value===e))&&w(e)}const S=e=>{const a=e.currentTarget,t=A.indexOf(a),r=b[t].value;r!==N&&(P(a),w(r),null!=h&&f(h,String(r)))},I=e=>{let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;a=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=A[t]??A[A.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},b.map((e=>{let{value:a,label:t,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>A.push(e),onKeyDown:I,onClick:S},s,{className:(0,l.Z)("tabs__item",d,s?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function h(e){const a=(0,s.Z)();return n.createElement(c,(0,r.Z)({key:String(a)},e))}},83351:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=t(87462),n=(t(67294),t(3905)),l=t(65488),s=t(85162),i=t(44996);const o={id:"api",title:"APIs",description:"Auto-generating and Realtime APIs.",sidebar_label:"Overview"},p=void 0,u={unversionedId:"guides/api",id:"guides/api",title:"APIs",description:"Auto-generating and Realtime APIs.",source:"@site/docs/guides/api.mdx",sourceDirName:"guides",slug:"/guides/api",permalink:"/docs/guides/api",draft:!1,editUrl:"https://github.com/docs/guides/api.mdx",tags:[],version:"current",frontMatter:{id:"api",title:"APIs",description:"Auto-generating and Realtime APIs.",sidebar_label:"Overview"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"REST API",id:"rest-api-overview",level:3},{value:"GraphQL API",id:"graphql-api-overview",level:3},{value:"Realtime API",id:"realtime-api-overview",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Creating API Routes",id:"creating-api-routes",level:3},{value:"API URL and Keys",id:"api-url-and-keys",level:3},{value:"API Keys",id:"api-keys",level:4},{value:"Accessing the docs in the Dashboard",id:"accessing-the-docs-in-the-dashboard",level:3},{value:"REST API",id:"rest-api-dashboard-docs",level:4},{value:"GraphQL",id:"graphql",level:4},{value:"Using the API",id:"using-the-api",level:2},{value:"REST API",id:"rest-api",level:3},{value:"GraphQL API",id:"graphql-api",level:3},{value:"Realtime API",id:"realtime-api",level:3},{value:"API Security",id:"api-security",level:2},{value:"Securing your Routes",id:"securing-your-routes",level:3},{value:"The <code>service_role</code> key",id:"the-service_role-key",level:3},{value:"Safeguards towards accidental deletes and updates",id:"safeguards-towards-accidental-deletes-and-updates",level:3}],h={toc:c};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Supabase generates three types of API directly from your database schema."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"REST - interact with your database through a restful interface."),(0,n.kt)("li",{parentName:"ul"},"Realtime - listen to database changes."),(0,n.kt)("li",{parentName:"ul"},"GraphQL - ",(0,n.kt)("a",{parentName:"li",href:"https://supabase.com/blog/pg-graphql"},"in beta"),".")),(0,n.kt)("p",null,"The APIs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Instant and auto-generated.")," ",(0,n.kt)("br",null),"As you update your database the changes are immediately accessible through your API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Self documenting.")," ",(0,n.kt)("br",null),"Supabase generates documentation in the Dashboard which updates as you make database changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secure.")," ",(0,n.kt)("br",null),"The API is configured to work with PostgreSQL's Row Level Security, provisioned behind an API gateway with key-auth enabled."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Fast.")," ",(0,n.kt)("br",null),"Our benchmarks for basic reads are more than 300% faster than Firebase. The API is a very thin layer on top of Postgres, which does most of the heavy lifting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scalable.")," ",(0,n.kt)("br",null),"The API can serve thousands of simultaneous requests, and works well for Serverless workloads.")),(0,n.kt)("h3",{id:"rest-api-overview"},"REST API"),(0,n.kt)("p",null,"Supabase provides a RESTful API using ",(0,n.kt)("a",{parentName:"p",href:"https://postgrest.org/"},"PostgREST"),". This is a very thin API layer on top of Postgres.\nIt provides everything you need from a CRUD API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Basic CRUD operations"),(0,n.kt)("li",{parentName:"ul"},"Deeply nested joins, allowing you to fetch data from multiple tables in a single fetch"),(0,n.kt)("li",{parentName:"ul"},"Works with Postgres Views"),(0,n.kt)("li",{parentName:"ul"},"Works with Postgres Functions"),(0,n.kt)("li",{parentName:"ul"},"Works with the Postgres security model - including Row Level Security, Roles, and Grants.")),(0,n.kt)("div",{class:"video-container"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/rPAJJFdtPw0",frameBorder:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,n.kt)("h3",{id:"graphql-api-overview"},"GraphQL API"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"GraphQL is in Beta, and may have breaking changes. It is only available on self-hosted setups and Supabase projects created after 28th March 2022.")),(0,n.kt)("p",null,"GraphQL in Supabase works through ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/blog/pg-graphql"},"pg_graphql"),", an open source PostgreSQL extension for GraphQL."),(0,n.kt)("h3",{id:"realtime-api-overview"},"Realtime API"),(0,n.kt)("p",null,"Supabase provides a Realtime API using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/supabase/realtime"},"Realtime"),". You can use this to listen to database changes over websockets.\nRealtime leverages PostgreSQL's built-in logical replication. You can manage your Realtime API simply by managing Postgres publications."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"All APIs are auto-created from Database tables. After you have added tables or functions to your database, you can use the APIs provided."),(0,n.kt)("h3",{id:"creating-api-routes"},"Creating API Routes"),(0,n.kt)("p",null,"API routes are automatically created when you create Postgres Tables, Views, or Functions."),(0,n.kt)("p",null,"Let's create our first\nAPI route by creating a table called ",(0,n.kt)("inlineCode",{parentName:"p"},"todos")," to store tasks.\nThis creates a corresponding route ",(0,n.kt)("inlineCode",{parentName:"p"},"todos")," which can accept ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PATCH"),", & ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE")," requests."),(0,n.kt)(l.Z,{groupId:"dashboard-or-sql",defaultValue:"dashboard",values:[{label:"Dashboard",value:"dashboard"},{label:"SQL",value:"sql"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"dashboard",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/editor"},"Table editor")," page in the Dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Table")," and create a table with the name ",(0,n.kt)("inlineCode",{parentName:"li"},"todos"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Column")," and create a column with the name ",(0,n.kt)("inlineCode",{parentName:"li"},"task")," and type ",(0,n.kt)("inlineCode",{parentName:"li"},"text"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,n.kt)("source",{src:(0,i.Z)("/videos/api/api-create-table-sm.mp4"),type:"video/mp4",muted:!0,playsInline:!0}))),(0,n.kt)(s.Z,{value:"sql",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'-- Create a table called "todos" with a column to store tasks.\n\ncreate table todos (\n  id bigint generated by default as identity primary key,\n  task text check (char_length(task) > 3)\n);\n')))),(0,n.kt)("h3",{id:"api-url-and-keys"},"API URL and Keys"),(0,n.kt)("p",null,"Every Supabase project has a unique API URL. Your API is secured behind an API gateway which requires an API Key for every request."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/settings/general"},"Settings")," page in the Dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"API")," in the sidebar."),(0,n.kt)("li",{parentName:"ol"},"Find your API ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"anon"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"service_role")," keys on this page.")),(0,n.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,n.kt)("source",{src:(0,i.Z)("/videos/api/api-url-and-key.mp4"),type:"video/mp4",muted:!0,playsInline:!0})),(0,n.kt)("p",null,"The REST API and the GraphQL API are both accessible through this URL:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"REST: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<project_ref>.supabase.co/rest/v1")),(0,n.kt)("li",{parentName:"ul"},"GraphQL: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<project_ref>.supabase.co/graphql/v1"))),(0,n.kt)("p",null,"Both of these routes require the ",(0,n.kt)("inlineCode",{parentName:"p"},"anon")," key to be passed through an ",(0,n.kt)("inlineCode",{parentName:"p"},"apikey")," header."),(0,n.kt)("h4",{id:"api-keys"},"API Keys"),(0,n.kt)("p",null,"You are provided with two keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("inlineCode",{parentName:"li"},"anon")," key, which is safe to be used in a browser context."),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("inlineCode",{parentName:"li"},"service_role")," key, which should only be used on a server. This key can bypass Row Level Security. NEVER use this key in a browser.")),(0,n.kt)("h3",{id:"accessing-the-docs-in-the-dashboard"},"Accessing the docs in the Dashboard"),(0,n.kt)("h4",{id:"rest-api-dashboard-docs"},"REST API"),(0,n.kt)("p",null,"Supabase generates documentation in the ",(0,n.kt)("a",{parentName:"p",href:"https://app.supabase.com"},"Dashboard")," which updates as you make database changes.\nLet's view the documentation for a ",(0,n.kt)("inlineCode",{parentName:"p"},"countries")," table which we created in our database."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/api"},"API")," page in the Dashboard."),(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"countries")," table under ",(0,n.kt)("strong",{parentName:"li"},"Tables and Views")," in the sidebar."),(0,n.kt)("li",{parentName:"ol"},"Switch between the JavaScript and the cURL docs using the tabs.")),(0,n.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,n.kt)("source",{src:(0,i.Z)("/videos/api/api-docs.mp4"),type:"video/mp4",muted:!0,playsInline:!0})),(0,n.kt)("h4",{id:"graphql"},"GraphQL"),(0,n.kt)("p",null,"The GraphQL Endpoint that we provide (",(0,n.kt)("inlineCode",{parentName:"p"},"https://<project_ref>.supabase.co/graphql/v1"),") is compatible with any GraphiQL implementation that can pass an ",(0,n.kt)("inlineCode",{parentName:"p"},"apikey")," header.\nSome suggested applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paw.cloud"},"paw.cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://insomnia.rest"},"insomnia.rest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/graphql/"},"postman.com/graphql")),(0,n.kt)("li",{parentName:"ul"},"Self-hosted GraphiQL: GraphiQL can be served through a simple HTML file. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase/discussions/6144"},"this discussion")," for more details.")),(0,n.kt)("h2",{id:"using-the-api"},"Using the API"),(0,n.kt)("h3",{id:"rest-api"},"REST API"),(0,n.kt)("p",null,"You can interact with your API directly via HTTP requests, or you can use the client libraries which we provide."),(0,n.kt)("p",null,"Let's see how to make a request to the ",(0,n.kt)("inlineCode",{parentName:"p"},"todos")," table which we created in the first step,\nusing the API URL (",(0,n.kt)("inlineCode",{parentName:"p"},"SUPABASE_URL"),") and Key (",(0,n.kt)("inlineCode",{parentName:"p"},"SUPABASE_ANON_KEY"),") we provided:"),(0,n.kt)(l.Z,{groupId:"language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"cURL",value:"curl"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Initialize the JS client\nimport { createClient } from '@supabase/supabase-js'\nconst supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)\n\n// Make a request\nconst { data: todos, error } = await supabase.from('todos').select('*')\n"))),(0,n.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Append /rest/v1/ to your URL, and then use the table name as the route\ncurl \'<SUPABASE_URL>/rest/v1/todos\' \\\n-H "apikey: <SUPABASE_ANON_KEY>" \\\n-H "Authorization: Bearer <SUPABASE_ANON_KEY>"\n')))),(0,n.kt)("p",null,"JS Reference: ",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/select"},"select()"),",\n",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/insert"},"insert()"),",\n",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/update"},"update()"),",\n",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/upsert"},"upsert()"),",\n",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/delete"},"delete()"),",\n",(0,n.kt)("a",{parentName:"p",href:"../reference/javascript/rpc"},"rpc()")," (call Postgres functions)."),(0,n.kt)("h3",{id:"graphql-api"},"GraphQL API"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To rebuild your GraphQL schema from the SQL schema, call ",(0,n.kt)("inlineCode",{parentName:"p"},"select graphql.rebuild_schema();"),".\nBe sure to rebuild the GraphQL schema after altering the SQL schema.")),(0,n.kt)("p",null,"You can use any GraphQL client with the Supabase GraphQL API. For our GraphQL example we will use ",(0,n.kt)("a",{parentName:"p",href:"https://formidable.com/open-source/urql/docs/"},"urql"),"."),(0,n.kt)(l.Z,{groupId:"language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"cURL",value:"curl"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createClient, useQuery } from 'urql'\n\n// Prepare API key and Authorization header\nconst headers = {\n  apikey: <SUPABASE_ANON_KEY>,\n  authorization: `Bearer ${<SUPABASE_ANON_KEY}`>\n}\n\n// Create GraphQL client\n// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client\nconst client = createClient({\n  url: '<SUPABASE_URL>/graphql/v1',\n  fetchOptions: function createFetchOptions() {\n    return { headers }\n  },\n})\n\n// Prepare our GraphQL query\nconst TodosQuery = `\n  query {\n    todosCollection {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n`\n\n// Query for the data (React)\nconst [result, reexecuteQuery] = useQuery({\n  query: TodosQuery,\n})\n\n// Read the result\nconst { data, fetching, error } = result\n"))),(0,n.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Append /graphql/v1/ to your URL, and then use the table name as the route\ncurl --request POST '<SUPABASE_URL>/graphql/v1' \\\n-H 'apikey: <SUPABASE_ANON_KEY>' \\\n-H 'Authorization: Bearer <SUPABASE_ANON_KEY>' \\\n-d '{ \"query\":\"{ todos(first: 3) { edges { node { id } } } }\" }'\n")))),(0,n.kt)("h3",{id:"realtime-api"},"Realtime API"),(0,n.kt)("p",null,"By default Realtime is disabled on your database. Let's turn on Realtime for the ",(0,n.kt)("inlineCode",{parentName:"p"},"todos")," table."),(0,n.kt)(l.Z,{groupId:"dashboard-or-sql",defaultValue:"dashboard",values:[{label:"Dashboard",value:"dashboard"},{label:"SQL",value:"sql"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"dashboard",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/database/tables"},"Database")," page in the Dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Replication")," in the sidebar."),(0,n.kt)("li",{parentName:"ol"},"Control which database events are sent by toggling ",(0,n.kt)("strong",{parentName:"li"},"Insert"),", ",(0,n.kt)("strong",{parentName:"li"},"Update"),", and ",(0,n.kt)("strong",{parentName:"li"},"Delete"),"."),(0,n.kt)("li",{parentName:"ol"},"Control which tables broadcast changes by selecting ",(0,n.kt)("strong",{parentName:"li"},"Source")," and toggling each table.")),(0,n.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,n.kt)("source",{src:(0,i.Z)("/videos/api/api-realtime.mp4"),type:"video/mp4",muted:!0,playsInline:!0}))),(0,n.kt)(s.Z,{value:"sql",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter publication supabase_realtime add table todos;\n")))),(0,n.kt)("p",null,"From the client, we can listen to any new data that is inserted into the ",(0,n.kt)("inlineCode",{parentName:"p"},"todos")," table:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Initialize the JS client\nimport { createClient } from '@supabase/supabase-js'\nconst supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)\n\n// Create a function to handle inserts\nconst handleInserts = (payload) => {\n  console.log('Change received!', payload)\n}\n\n// Listen to inserts\nconst { data: todos, error } = await supabase\n  .from('todos')\n  .on('INSERT', handleInserts)\n  .subscribe()\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/javascript/subscribe"},"subscribe()")," to listen to database changes.\nThe Realtime API works through PostgreSQL's replication functionality. Postgres sends database changes to a ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/database/replication#publications"},"publication"),"\ncalled ",(0,n.kt)("inlineCode",{parentName:"p"},"supabase_realtime"),", and by managing this publication you can control which data is broadcast."),(0,n.kt)("h2",{id:"api-security"},"API Security"),(0,n.kt)("h3",{id:"securing-your-routes"},"Securing your Routes"),(0,n.kt)("p",null,"Your API is designed to work with Postgres Row Level Security (RLS). If you use Supabase ",(0,n.kt)("a",{parentName:"p",href:"/guides/auth"},"Auth"),", you can restrict data based on the logged-in user.\nTo control access to your data, you can use ",(0,n.kt)("a",{parentName:"p",href:"/guides/auth#policies"},"Policies"),".\nWhen you create a table in Postgres, Row Level Security is disabled by default. To enable RLS:"),(0,n.kt)(l.Z,{groupId:"dashboard-or-sql",defaultValue:"dashboard",values:[{label:"Dashboard",value:"dashboard"},{label:"SQL",value:"sql"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"dashboard",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/auth/users"},"Authentication")," page in the Dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Policies")," in the sidebar."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Enable RLS")," to enable Row Level Security."))),(0,n.kt)(s.Z,{value:"sql",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter table todos enable row level security;\n")))),(0,n.kt)("h3",{id:"the-service_role-key"},"The ",(0,n.kt)("inlineCode",{parentName:"h3"},"service_role")," key"),(0,n.kt)("p",null,"Never expose the ",(0,n.kt)("inlineCode",{parentName:"p"},"service_role")," key in a browser or anywhere where a user can see it. This Key is designed to bypass Row Level Security - so it should only be used on a private server."),(0,n.kt)("p",null,"We have ",(0,n.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2022-03-28-supabase-is-now-a-github-secret-scanning-partner/"},"partnered with GitHub")," to scan for Supabase ",(0,n.kt)("inlineCode",{parentName:"p"},"service_role")," keys pushed to public repositories.\nIf they detect any keys with service_role privileges being pushed to GitHub, they will forward the API key to us, so that we can automatically revoke the detected secrets and notify you, protecting your data against malicious actors."),(0,n.kt)("h3",{id:"safeguards-towards-accidental-deletes-and-updates"},"Safeguards towards accidental deletes and updates"),(0,n.kt)("p",null,"For all projects, by default, the Postgres extension ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eradman/pg-safeupdate"},"safeupdate")," is enabled for all queries coming from the API.\nThis ensures that any ",(0,n.kt)("inlineCode",{parentName:"p"},"delete()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"update()")," would fail if there are no accompanying filters provided.\nTo confirm that safeupdate is enabled for queries going through the API of your project, the following query could be run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select usename,useconfig from pg_shadow where usename = 'authenticator' ;\n")),(0,n.kt)("p",null,"The expected value for ",(0,n.kt)("inlineCode",{parentName:"p"},"useconfig")," should be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'["session_preload_libraries=supautils, safeupdate"]\n')))}m.isMDXComponent=!0}}]);