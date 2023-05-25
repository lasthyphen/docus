"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[88939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"firestore-data",title:"Firestore Data Migration",description:"Migrate your Firebase Firestore database to a Supabase Postgres database.",sidebar_label:"Firestore Data"},i=void 0,l={unversionedId:"guides/migrations/firestore-data",id:"guides/migrations/firestore-data",title:"Firestore Data Migration",description:"Migrate your Firebase Firestore database to a Supabase Postgres database.",source:"@site/docs/guides/migrations/firestore-data.mdx",sourceDirName:"guides/migrations",slug:"/guides/migrations/firestore-data",permalink:"/docs/guides/migrations/firestore-data",draft:!1,editUrl:"https://github.com/docs/guides/migrations/firestore-data.mdx",tags:[],version:"current",frontMatter:{id:"firestore-data",title:"Firestore Data Migration",description:"Migrate your Firebase Firestore database to a Supabase Postgres database.",sidebar_label:"Firestore Data"}},s={},p=[{value:"Set up the migration tool",id:"set-up-migration-tool",level:2},{value:"Generate a Firebase private key",id:"generate-firebase-private-key",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"List all Firestore collections",id:"list-all-firestore-collections",level:3},{value:"Dump Firestore collection to JSON file",id:"dump-firestore-collection-to-json-file",level:3},{value:"Customize the JSON file with hooks",id:"customize-the-json-file-with-hooks",level:4},{value:"Import JSON file to Supabase (PostgreSQL)",id:"import-to-supabase",level:3},{value:"Custom hooks",id:"custom-hooks",level:2},{value:"Write a custom hook",id:"write-a-custom-hook",level:3},{value:"Create a .js file for your collection",id:"create-a-js-file-for-your-collection",level:4},{value:"Construct your .js file",id:"construct-your-js-file",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Examples",id:"examples",level:3},{value:"Add a new (unique) numeric key to a collection",id:"add-a-new-unique-numeric-key-to-a-collection",level:4},{value:"Add a timestamp of when this record was dumped from Firestore",id:"add-a-timestamp-of-when-this-record-was-dumped-from-firestore",level:4},{value:"Flatten JSON into separate files",id:"flatten-json-into-separate-files",level:4},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Supabase provides several ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/firebase-to-supabase/tree/main/firestore"},"tools")," to convert data from a Firebase Firestore database to a Supabase PostgreSQL database. The process copies the entire contents of a single Firestore ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," to a single PostgreSQL ",(0,o.kt)("inlineCode",{parentName:"p"},"table"),"."),(0,o.kt)("p",null,"The Firestore ",(0,o.kt)("inlineCode",{parentName:"p"},"collection"),' is "flattened" and converted to a table with basic columns of one of the following types: ',(0,o.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"numeric"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonb"),". If your structure is more complex, you can write a program to split the newly-created ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," file into multiple, related tables before you import your ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," file(s) to Supabase."),(0,o.kt)("h2",{id:"set-up-migration-tool"},"Set up the migration tool"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/supabase-community/firebase-to-supabase"},"firebase-to-supabase")," repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/supabase-community/firebase-to-supabase.git\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"/firestore")," directory, create a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"supabase-service.json")," with the following contents:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "database.server.com",\n  "password": "secretpassword",\n  "user": "postgres",\n  "database": "postgres",\n  "port": 5432\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://app.supabase.com/project/_/settings/database"},"Database settings")," for your project in the Supabase Dashboard."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Connection Info"),", copy the Host string and replace the entry in your ",(0,o.kt)("inlineCode",{parentName:"li"},"supabase-service.json")," file."),(0,o.kt)("li",{parentName:"ol"},"Enter the password you used when you created your Supabase project in the ",(0,o.kt)("inlineCode",{parentName:"li"},"password")," entry in the ",(0,o.kt)("inlineCode",{parentName:"li"},"supabase-service.json")," file.")),(0,o.kt)("h2",{id:"generate-firebase-private-key"},"Generate a Firebase private key"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to your ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/project"},"Firebase Console")," and open your project."),(0,o.kt)("li",{parentName:"ol"},"Click the gear icon next to ",(0,o.kt)("strong",{parentName:"li"},"Project Overview")," in the sidebar and select ",(0,o.kt)("strong",{parentName:"li"},"Project Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Service Accounts")," and select ",(0,o.kt)("strong",{parentName:"li"},"Firebase Admin SDK"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Generate new private key"),"."),(0,o.kt)("li",{parentName:"ol"},"Rename the downloaded file to ",(0,o.kt)("inlineCode",{parentName:"li"},"firebase-service.json"),".")),(0,o.kt)("h2",{id:"command-line-options"},"Command line options"),(0,o.kt)("h3",{id:"list-all-firestore-collections"},"List all Firestore collections"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node collections.js")),(0,o.kt)("h3",{id:"dump-firestore-collection-to-json-file"},"Dump Firestore collection to JSON file"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node firestore2json.js <collectionName> [<batchSize>] [<limit>]")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batchSize")," (optional) defaults to 1000"),(0,o.kt)("li",{parentName:"ul"},"output filename is ",(0,o.kt)("inlineCode",{parentName:"li"},"<collectionName>.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"limit")," (optional) defaults to 0 (no limit)")),(0,o.kt)("h4",{id:"customize-the-json-file-with-hooks"},"Customize the JSON file with hooks"),(0,o.kt)("p",null,"You can customize the way your JSON file is written using a ",(0,o.kt)("a",{parentName:"p",href:"#custom-hooks"},"custom hook"),'. A common use for this is to "flatten" the JSON file, or to split nested data into separate, related database tables. For example, you could take a Firestore document that looks like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Firestore document"',title:'"Firestore','document"':!0},'[{ "user": "mark", "score": 100, "items": ["hammer", "nail", "glue"] }]\n')),(0,o.kt)("p",null,"And split it into two files (one table for users and one table for items):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Users table"',title:'"Users','table"':!0},'[{ "user": "mark", "score": 100 }]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Items table"',title:'"Items','table"':!0},'[\n  { "user": "mark", "item": "hammer" },\n  { "user": "mark", "item": "nail" },\n  { "user": "mark", "item": "glue" }\n]\n')),(0,o.kt)("h3",{id:"import-to-supabase"},"Import JSON file to Supabase (PostgreSQL)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node json2supabase.js <path_to_json_file> [<primary_key_strategy>] [<primary_key_name>]")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<path_to_json_file>")," The full path of the file you created in the previous step (",(0,o.kt)("inlineCode",{parentName:"li"},"Dump Firestore collection to JSON file "),"), such as ",(0,o.kt)("inlineCode",{parentName:"li"},"./my_collection.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[<primary_key_strategy>]")," (optional) Is one of:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none")," (default) No primary key is added to the table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"smallserial")," Creates a key using ",(0,o.kt)("inlineCode",{parentName:"li"},"(id SMALLSERIAL PRIMARY KEY)")," (autoincrementing 2-byte integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"serial")," Creates a key using ",(0,o.kt)("inlineCode",{parentName:"li"},"(id SERIAL PRIMARY KEY)")," (autoincrementing 4-byte integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bigserial")," Creates a key using ",(0,o.kt)("inlineCode",{parentName:"li"},"(id BIGSERIAL PRIMARY KEY)")," (autoincrementing 8-byte integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uuid")," Creates a key using ",(0,o.kt)("inlineCode",{parentName:"li"},"(id UUID PRIMARY KEY DEFAULT uuid_generate_v4())")," (randomly generated UUID)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firestore_id")," Creates a key using ",(0,o.kt)("inlineCode",{parentName:"li"},"(id TEXT PRIMARY KEY)")," (uses existing ",(0,o.kt)("inlineCode",{parentName:"li"},"firestore_id")," random text as key)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[<primary_key_name>]"),' (optional) Name of primary key. Defaults to "id".')),(0,o.kt)("h2",{id:"custom-hooks"},"Custom hooks"),(0,o.kt)("p",null,"Hooks are used to customize the process of exporting a collection of Firestore documents to JSON. They can be used for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Customizing or modifying keys"),(0,o.kt)("li",{parentName:"ul"},"Calculating data"),(0,o.kt)("li",{parentName:"ul"},"Flattening nested documents into related SQL tables")),(0,o.kt)("h3",{id:"write-a-custom-hook"},"Write a custom hook"),(0,o.kt)("h4",{id:"create-a-js-file-for-your-collection"},"Create a .js file for your collection"),(0,o.kt)("p",null,"If your Firestore collection is called ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),", create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"users.js")," in the current folder."),(0,o.kt)("h4",{id:"construct-your-js-file"},"Construct your .js file"),(0,o.kt)("p",null,"The basic format of a hook file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (collectionName, doc, recordCounters, writeRecord) => {\n  // modify the doc here\n  return doc\n}\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collectionName"),": The name of the collection you are processing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doc"),": The current document (JSON object) being processed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recordCounters"),": An internal object that keeps track of how many records have been processed in each collection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"writeRecord"),': This function automatically handles the process of writing data to other JSON files (useful for "flatting" your document into separate JSON files to be written to separate database tables). ',(0,o.kt)("inlineCode",{parentName:"li"},"writeRecord")," takes the following parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": Name of the JSON file to write to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doc"),": The document to write to the file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recordCounters"),": The same ",(0,o.kt)("inlineCode",{parentName:"li"},"recordCounters")," object that was passed to this hook (just passes it on).")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"add-a-new-unique-numeric-key-to-a-collection"},"Add a new (unique) numeric key to a collection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (collectionName, doc, recordCounters, writeRecord) => {\n  doc.unique_key = recordCounter[collectionName] + 1\n  return doc\n}\n")),(0,o.kt)("h4",{id:"add-a-timestamp-of-when-this-record-was-dumped-from-firestore"},"Add a timestamp of when this record was dumped from Firestore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (collectionName, doc, recordCounters, writeRecord) => {\n  doc.dump_time = new Date().toISOString()\n  return doc\n}\n")),(0,o.kt)("h4",{id:"flatten-json-into-separate-files"},"Flatten JSON into separate files"),(0,o.kt)("p",null,"Flatten the ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," collection into separate files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "uid": "abc123",\n    "name": "mark",\n    "score": 100,\n    "weapons": ["toothpick", "needle", "rock"]\n  },\n  {\n    "uid": "xyz789",\n    "name": "chuck",\n    "score": 9999999,\n    "weapons": ["hand", "foot", "head"]\n  }\n]\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"users.js")," hook file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (collectionName, doc, recordCounters, writeRecord) => {\n  for (let i = 0; i < doc.weapons.length; i++) {\n    const weapon = {\n      uid: doc.uid,\n      weapon: doc.weapons[i],\n    }\n    writeRecord('weapons', weapon, recordCounters)\n  }\n  delete doc.weapons // moved to separate file\n  return doc\n}\n")),(0,o.kt)("p",null,"The result is two separate JSON files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="users.json"',title:'"users.json"'},'[\n  { "uid": "abc123", "name": "mark", "score": 100 },\n  { "uid": "xyz789", "name": "chuck", "score": 9999999 }\n]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="weapons.json"',title:'"weapons.json"'},'[\n  { "uid": "abc123", "weapon": "toothpick" },\n  { "uid": "abc123", "weapon": "needle" },\n  { "uid": "abc123", "weapon": "rock" },\n  { "uid": "xyz789", "weapon": "hand" },\n  { "uid": "xyz789", "weapon": "foot" },\n  { "uid": "xyz789", "weapon": "head" }\n]\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://supabase.com/alternatives/supabase-vs-firebase"},"Supabase vs Firebase")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://supabase.com/docs/guides/migrations/firebase-storage"},"Firestore Storage Migration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://supabase.com/docs/guides/migrations/firebase-auth"},"Firebase Auth Migration"))))}c.isMDXComponent=!0}}]);