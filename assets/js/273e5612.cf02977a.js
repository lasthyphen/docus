"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[17595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={id:"connecting-to-postgres",title:"Database Connections",description:"There are various ways to connect to your Postgres database."},s=void 0,r={unversionedId:"guides/database/connecting-to-postgres",id:"guides/database/connecting-to-postgres",title:"Database Connections",description:"There are various ways to connect to your Postgres database.",source:"@site/docs/guides/database/connecting-to-postgres.mdx",sourceDirName:"guides/database",slug:"/guides/database/connecting-to-postgres",permalink:"/docs/guides/database/connecting-to-postgres",draft:!1,editUrl:"https://github.com/docs/guides/database/connecting-to-postgres.mdx",tags:[],version:"current",frontMatter:{id:"connecting-to-postgres",title:"Database Connections",description:"There are various ways to connect to your Postgres database."}},c={},l=[{value:"Types of Connection",id:"types-of-connection",level:2},{value:"API vs Direct vs Pooling",id:"api-vs-direct-vs-pooling",level:3},{value:"API",id:"api",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"API URL and Keys",id:"api-url-and-keys",level:3},{value:"Direct connections",id:"direct-connections",level:2},{value:"Finding your connection string",id:"finding-your-connection-string",level:3},{value:"Connection Pool",id:"connection-pool",level:2},{value:"How connection pooling works",id:"how-connection-pooling-works",level:3},{value:"Pool modes",id:"pool-modes",level:3},{value:"Session",id:"session",level:4},{value:"Transaction",id:"transaction",level:4},{value:"Statement",id:"statement",level:4},{value:"Finding the connection pool config",id:"finding-the-connection-pool-config",level:3},{value:"Connecting with SSL",id:"connecting-with-ssl",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supabase provides several options for programmatically connecting to your Postgres database:"),(0,a.kt)("h2",{id:"types-of-connection"},"Types of Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP connections using the API."),(0,a.kt)("li",{parentName:"ul"},"Direct connections using Postgres' standard connection system."),(0,a.kt)("li",{parentName:"ul"},"Connection pooling using PgBouncer.")),(0,a.kt)("h3",{id:"api-vs-direct-vs-pooling"},"API vs Direct vs Pooling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The API is an auto-generated REST interface. You should use this for all browser and application interactions."),(0,a.kt)("li",{parentName:"ul"},'A "direct connection" is when a connection is made to the database using Postgres\' native connection implementation. You should use this for tools which are always alive - usually installed on a long-running server.'),(0,a.kt)("li",{parentName:"ul"},'A "connection pool" is a system (external to Postgres) which keeps connections "open". You should use this for serverless functions and tools which disconnect from the database frequently.')),(0,a.kt)("p",null,"Why would you use a connection pool? Primarily because the way that Postgres handles connections isn't very scalable for a large number of ",(0,a.kt)("em",{parentName:"p"},"temporary")," connections.\nYou can use these simple questions to determine which connection method to use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Are you connecting to a database and ",(0,a.kt)("em",{parentName:"li"},"maintaining")," a connection? If yes, use a direct connection."),(0,a.kt)("li",{parentName:"ul"},"Are you connecting to your database and then ",(0,a.kt)("em",{parentName:"li"},"disconnecting")," immediately (e.g. a serverless environment)? If yes, use a connection pool.")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"Supabase provides an auto-updating ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/api"},"API"),". This is the easiest way to get started if you are managing data (fetching, inserting, updating)."),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"We provides several types of API to suit your preferences and use-case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/api#rest-api"},"REST"),": interact with your database through a REST interface."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/api#graphql-api"},"GraphQL"),": interact with your database through a GraphQL interface."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/api#realtime-api"},"Realtime"),": listen to database changes over websockets.")),(0,a.kt)("p",null,"You cannot manage the database schema via the API (for security reasons). To do that you can use the dashboard or connect directly to your database."),(0,a.kt)("h3",{id:"api-url-and-keys"},"API URL and Keys"),(0,a.kt)("p",null,"You can find the API URL and Keys in the ",(0,a.kt)("a",{parentName:"p",href:"https://app.supabase.com/project/_/settings/api"},"Dashboard"),"."),(0,a.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,a.kt)("source",{src:"/docs/videos/api/api-url-and-key.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,a.kt)("h2",{id:"direct-connections"},"Direct connections"),(0,a.kt)("p",null,"Every Supabase project provides a full Postgres database. You can connect to the database using any tool which supports Postgres."),(0,a.kt)("h3",{id:"finding-your-connection-string"},"Finding your connection string"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," section."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Database"),"."),(0,a.kt)("li",{parentName:"ol"},"Find your Connection Info and Connection String. Direct connections are on port ",(0,a.kt)("inlineCode",{parentName:"li"},"5432"),".")),(0,a.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,a.kt)("source",{src:"/docs/videos/postgres-connection.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,a.kt)("h2",{id:"connection-pool"},"Connection Pool"),(0,a.kt)("p",null,"Connection pools are useful for managing a large number of ",(0,a.kt)("em",{parentName:"p"},"temporary")," connections. For example, if you are using ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/integrations/prisma"},"Prisma")," deployed to a Serverless environment."),(0,a.kt)("h3",{id:"how-connection-pooling-works"},"How connection pooling works"),(0,a.kt)("p",null,'A "connection pool" is a system (external to Postgres) which manages connections, rather than PostgreSQL\'s native system. Supabase uses ',(0,a.kt)("a",{parentName:"p",href:"https://www.pgbouncer.org/"},"PgBouncer")," for connection pooling."),(0,a.kt)("p",null,'When a client makes a request, PgBouncer "allocates" an available connection to the client.\nWhen the client transaction or session is completed the connection is returned to the pool and is free to be used by another client.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connection pooling",src:n(1289).Z,width:"1019",height:"480"})),(0,a.kt)("h3",{id:"pool-modes"},"Pool modes"),(0,a.kt)("p",null,"Pool Mode determines how PgBouncer handles a connection."),(0,a.kt)("h4",{id:"session"},"Session"),(0,a.kt)("p",null,"When a new client connects, a connection is assigned to the client until it disconnects. Afterward, the connection is returned back to the pool."),(0,a.kt)("p",null,"All PostgreSQL features can be used with this option."),(0,a.kt)("h4",{id:"transaction"},"Transaction"),(0,a.kt)("p",null,"This is the suggested option for serverless functions. A connection is only assigned to the client for the duration of a transaction. Two consecutive transactions from the same client\ncould be executed over two different connections."),(0,a.kt)("p",null,"Some session-based PostgreSQL features such as prepared statements are not available with this option.\nA comprehensive list of incompatible features can be found ",(0,a.kt)("a",{parentName:"p",href:"https://www.pgbouncer.org/features.html"},"here"),"."),(0,a.kt)("h4",{id:"statement"},"Statement"),(0,a.kt)("p",null,"This is the most granular option. Connections are returned to the pool after every statement. Transactions with multiple statements are not allowed. This is best used when ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTOCOMMIT")," is in use."),(0,a.kt)("h3",{id:"finding-the-connection-pool-config"},"Finding the connection pool config"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," section."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Database"),"."),(0,a.kt)("li",{parentName:"ol"},"Find your Connection Info and Connection String. Connection pooling is on port ",(0,a.kt)("inlineCode",{parentName:"li"},"6543"),".")),(0,a.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,a.kt)("source",{src:"/docs/videos/connection-pool-config.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,a.kt)("h2",{id:"connecting-with-ssl"},"Connecting with SSL"),(0,a.kt)("p",null,"Use this when connecting to your database to prevent snooping and man-in-the-middle attacks."),(0,a.kt)("p",null,"Obtain your connection info and Server root certificate from your application\u2019s dashboard.\n",(0,a.kt)("img",{alt:"Connection Info and Certificate.",src:n(56292).Z,width:"1335",height:"737"})),(0,a.kt)("p",null,"Assuming you\u2019ve downloaded your certificate and it\u2019s located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/Downloads/prod-ca-2021.cer"),", and your Host address is ",(0,a.kt)("inlineCode",{parentName:"p"},"db.abcdefghijklm.supabase.co")," you can connect to the DB with\nSSL enabled as illustrated below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With ",(0,a.kt)("inlineCode",{parentName:"li"},"psql"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'psql "sslmode=verify-full sslrootcert=$HOME/Downloads/prod-ca-2021.cer host=db.abcdefghijklm.supabase.co dbname=postgres user=postgres"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With ",(0,a.kt)("inlineCode",{parentName:"p"},"pgAdmin"),(0,a.kt)("br",{parentName:"p"}),"\n","a. Register a new Postgres server\n",(0,a.kt)("img",{alt:"Register a new postgres server.",src:n(63370).Z,width:"1358",height:"580"})),(0,a.kt)("p",{parentName:"li"},"b. Name your server to your liking and add the connection info.\n",(0,a.kt)("img",{alt:"Name Postgres Server.",src:n(72943).Z,width:"1024",height:"1120"}),"\n",(0,a.kt)("img",{alt:"Add Connection Info.",src:n(79603).Z,width:"1018",height:"1116"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the SSL tab and change the SSL mode to Require. Next navigate to the Root certificate input, it will open up a\nfile-picker modal. Select the certificate you downloaded from your Supabase dashboard and save the server details. PgAdmin\nshould now be able to connect to your Postgres via SSL.\n",(0,a.kt)("img",{alt:"Add Connection Info.",src:n(58153).Z,width:"1026",height:"1122"})))))}p.isMDXComponent=!0},79603:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-pg-server-conn-info-902d6bb675af879d2a7f1e726089656d.png"},58153:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-ssl-config-fdf9505ef79ab2c9d0f4f73189296037.png"},56292:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connection-info-cert-702428ee97bbec705b901961e7197c1d.png"},1289:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connection-pool-fa56215bc42a337013023370a13115c8.png"},72943:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/name-pg-server-804ce08f04986f04228982eba095f60f.png"},63370:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/register-server-pgAdmin-de5d2e1ea0cc1eb82cf716604ed9a9b4.png"}}]);