"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[66058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),r=n(86010),i=n(72389),l=n(67392),o=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:h}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,o.U)(),[S,N]=(0,s.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=m){const e=f[m];null!=e&&e!==S&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==S&&(C(t),N(a),null!=m&&y(m,String(a)))},A=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>w.push(e),onKeyDown:A,onClick:T},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":S===t})}),n??t)}))),t?(0,s.cloneElement)(v.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,i.Z)();return s.createElement(d,(0,a.Z)({key:String(t)},e))}},10284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),s=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={id:"sveltekit",title:"Supabase Auth with SvelteKit",description:"Convenience helpers for implementing user authentication in SvelteKit.",sidebar_label:"SvelteKit"},o=void 0,p={unversionedId:"guides/auth/auth-helpers/sveltekit",id:"guides/auth/auth-helpers/sveltekit",title:"Supabase Auth with SvelteKit",description:"Convenience helpers for implementing user authentication in SvelteKit.",source:"@site/docs/guides/auth/auth-helpers/sveltekit.mdx",sourceDirName:"guides/auth/auth-helpers",slug:"/guides/auth/auth-helpers/sveltekit",permalink:"/docs/guides/auth/auth-helpers/sveltekit",draft:!1,editUrl:"https://github.com/docs/guides/auth/auth-helpers/sveltekit.mdx",tags:[],version:"current",frontMatter:{id:"sveltekit",title:"Supabase Auth with SvelteKit",description:"Convenience helpers for implementing user authentication in SvelteKit.",sidebar_label:"SvelteKit"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Set up the Supabase client",id:"set-up-the-supabase-client",level:3},{value:"Initialize the client",id:"initialize-the-client",level:3},{value:"Set up hooks",id:"set-up-hooks",level:3},{value:"Send session to client",id:"send-session-to-client",level:3},{value:"Typings",id:"typings",level:3},{value:"Signing out",id:"signing-out",level:3},{value:"Basic setup",id:"basic-setup",level:3},{value:"Client-side data fetching with RLS",id:"client-side-data-fetching-with-rls",level:2},{value:"Server-side data fetching with RLS",id:"server-side-data-fetching-with-rls",level:2},{value:"Protecting API routes",id:"protecting-api-routes",level:2},{value:"Protecting Actions",id:"protecting-actions",level:2},{value:"Saving and deleting the session",id:"saving-and-deleting-the-session",level:2},{value:"Custom session namespace",id:"custom-session-namespace",level:2},{value:"Migrate from 0.6.11 and below to 0.7.0",id:"migration",level:2},{value:"Environment variable prefix",id:"environment-variable-prefix",level:3},{value:"Set up the Supabase client",id:"migration-set-up-supabase-client",level:3},{value:"Initialize the client",id:"migration-initialize-client",level:3},{value:"Set up hooks",id:"migration-set-up-hooks",level:3},{value:"Typings",id:"migration-typings",level:3},{value:"Check the user on the client",id:"check-the-user-on-the-client",level:3},{value:"withPageAuth",id:"withpageauth",level:3},{value:"withApiAuth",id:"withapiauth",level:3},{value:"Additional Links",id:"additional-links",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This submodule provides convenience helpers for implementing user authentication in ",(0,s.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/"},"SvelteKit")," applications."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"This library supports Node.js ",(0,s.kt)("inlineCode",{parentName:"p"},"^16.15.0"),"."),(0,s.kt)(r.Z,{groupId:"install",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @supabase/auth-helpers-sveltekit\n"))),(0,s.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @supabase/auth-helpers-sveltekit\n")))),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Set up the fillowing env vars. For local development you can set them in a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file. See an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/.env.example"},"example"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Find these in your Supabase project settings > API\nPUBLIC_SUPABASE_URL=https://your-project.supabase.co\nPUBLIC_SUPABASE_ANON_KEY=your-anon-key\n")),(0,s.kt)("h3",{id:"set-up-the-supabase-client"},"Set up the Supabase client"),(0,s.kt)("p",null,"Start off by creating a ",(0,s.kt)("inlineCode",{parentName:"p"},"db.ts")," file inside of the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/lib")," directory and instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"supabaseClient"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/lib/db.ts"',title:'"src/lib/db.ts"'},"import { createClient } from '@supabase/supabase-js'\nimport { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'\nimport { dev } from '$app/environment'\nimport { env } from '$env/dynamic/public'\n// or use the static env\n// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';\n\nexport const supabaseClient = createClient(\n  env.PUBLIC_SUPABASE_URL,\n  env.PUBLIC_SUPABASE_ANON_KEY,\n  {\n    persistSession: false,\n    autoRefreshToken: false,\n  }\n)\n\nsetupSupabaseHelpers({\n  supabaseClient,\n  cookieOptions: {\n    secure: !dev,\n  },\n})\n")),(0,s.kt)("h3",{id:"initialize-the-client"},"Initialize the client"),(0,s.kt)("p",null,"Edit your ",(0,s.kt)("inlineCode",{parentName:"p"},"+layout.svelte")," file and set up the client-side."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/+layout.svelte"',title:'"src/routes/+layout.svelte"'},"<script lang=\"ts\">\n  // make sure the supabase instance is initialized on the client\n  import '$lib/db'\n  import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit'\n  import { page } from '$app/stores'\n  import { invalidateAll } from '$app/navigation'\n\n  // this sets up automatic token refreshing\n  startSupabaseSessionSync({\n    page,\n    handleRefresh: () => invalidateAll(),\n  })\n<\/script>\n\n<slot />\n")),(0,s.kt)("h3",{id:"set-up-hooks"},"Set up hooks"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hooks.server.ts")," file is where the heavy lifting of this library happens:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.server.ts"',title:'"src/hooks.server.ts"'},"// make sure the supabase instance is initialized on the server\nimport '$lib/db'\nimport { dev } from '$app/environment'\nimport { auth } from '@supabase/auth-helpers-sveltekit/server'\n\nexport const handle = auth()\n\n// use the sequence helper if you have additional Handle methods\nimport { sequence } from '@sveltejs/kit/hooks'\n\nexport const handle = sequence(auth(), yourHandler)\n")),(0,s.kt)("p",null,"There are three handle methods available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"callback()"),":\nThis creates a handler for ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/auth/callback"),". The ",(0,s.kt)("inlineCode",{parentName:"li"},"client")," forwards the session details here every time ",(0,s.kt)("inlineCode",{parentName:"li"},"onAuthStateChange")," fires on the client-side. This is needed to set up the cookies for your application so that SSR works seamlessly."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"session()"),":\nThis parses the session from the cookie and populate it in locals"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"auth()"),":\na shorthand for ",(0,s.kt)("inlineCode",{parentName:"li"},"sequence(callback(), session())")," that uses both handlers")),(0,s.kt)("h3",{id:"send-session-to-client"},"Send session to client"),(0,s.kt)("p",null,"In order to make the session available to the UI (e.g., pages and layouts), pass the session in the root layout load function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/+layout.server.ts"',title:'"src/routes/+layout.server.ts"'},"import type { LayoutServerLoad } from './$types'\n\nexport const load: LayoutServerLoad = async ({ locals }) => {\n  return {\n    session: locals.session,\n  }\n}\n")),(0,s.kt)("h3",{id:"typings"},"Typings"),(0,s.kt)("p",null,"In order to get the most out of TypeScript and IntelliSense, import the types into the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.d.ts")," type definition file that comes with your SvelteKit project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.d.ts"',title:'"src/app.d.ts"'},"/// <reference types=\"@sveltejs/kit\" />\n\n// See https://kit.svelte.dev/docs/types#app\n// for information about these interfaces\n// and what to do when importing types\ndeclare namespace App {\n  interface Locals {\n    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n  interface PageData {\n    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n  // interface Error {}\n  // interface Platform {}\n}\n")),(0,s.kt)("h3",{id:"signing-out"},"Signing out"),(0,s.kt)("p",null,"This library has provided a method to delete the session cookie."),(0,s.kt)("p",null,"Create a server only page with an action to delete the cookie"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/logout/+page.server.ts"',title:'"src/routes/logout/+page.server.ts"'},"import { deleteSession } from '@supabase/auth-helpers-sveltekit/server'\nimport { redirect } from '@sveltejs/kit'\nimport type { Actions } from './$types'\n\nexport const actions: Actions = {\n  async default({ cookies }) {\n    deleteSession(cookies)\n    throw redirect(303, '/')\n  },\n}\n")),(0,s.kt)("p",null,"Then make a ",(0,s.kt)("strong",{parentName:"p"},"POST")," request with a form to the server only page above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script lang="ts">\n  import { enhanceAndInvalidate } from \'@supabase/auth-helpers-sveltekit\'\n<\/script>\n\n<form action="/logout" method="post" use:enhanceAndInvalidate>\n  <button type="submit">Sign out</button>\n</form>\n')),(0,s.kt)("h3",{id:"basic-setup"},"Basic setup"),(0,s.kt)("p",null,"You can now determine if a user is authenticated on the client-side by checking that the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," object in ",(0,s.kt)("inlineCode",{parentName:"p"},"$page.data.session")," is defined."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/+page.svelte"',title:'"src/routes/+page.svelte"'},"<script>\n  import { page } from '$app/stores'\n<\/script>\n\n{#if !$page.data.session.user}\n<h1>I am not logged in</h1>\n{:else}\n<h1>Welcome {$page.data.session.user.email}</h1>\n<p>I am logged in!</p>\n{/if}\n")),(0,s.kt)("h2",{id:"client-side-data-fetching-with-rls"},"Client-side data fetching with RLS"),(0,s.kt)("p",null,"For ",(0,s.kt)("a",{parentName:"p",href:"https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security"},"row level security")," to work properly when fetching data client-side, you need to make sure to import the ",(0,s.kt)("inlineCode",{parentName:"p"},"{ supabaseClient }")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"$lib/db")," and only run your query once the user is defined client-side in ",(0,s.kt)("inlineCode",{parentName:"p"},"$page.data.session"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { supabaseClient } from '$lib/db'\n  import { page } from '$app/stores'\n\n  let loadedData = []\n  async function loadData() {\n    const { data } = await supabaseClient.from('test').select('*').limit(20)\n    loadedData = data\n  }\n\n  $: if ($page.data.session.user) {\n    loadData()\n  }\n<\/script>\n\n{#if $page.data.session.user}\n<p>client-side data fetching with RLS</p>\n<pre>{JSON.stringify(loadedData, null, 2)}</pre>\n{/if}\n")),(0,s.kt)("h2",{id:"server-side-data-fetching-with-rls"},"Server-side data fetching with RLS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/profile/+page.svelte"',title:'"src/routes/profile/+page.svelte"'},"<script>\n  /** @type {import('./$types').PageData} */\n  export let data\n  $: ({ user, tableData } = data)\n<\/script>\n\n<div>Protected content for {user.email}</div>\n<pre>{JSON.stringify(tableData, null, 2)}</pre>\n<pre>{JSON.stringify(user, null, 2)}</pre>\n")),(0,s.kt)("p",null,"For ",(0,s.kt)("a",{parentName:"p",href:"https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security"},"row level security")," to work in a server environment, you need to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"withAuth")," helper to check if the user is authenticated. The helper extends the event with ",(0,s.kt)("inlineCode",{parentName:"p"},"session")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"getSupabaseClient()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/profile/+page.ts"',title:'"src/routes/profile/+page.ts"'},"import type { PageLoad } from './$types';\nimport { withAuth } from '@supabase/auth-helpers-sveltekit';\nimport { redirect } from '@sveltejs/kit';\n\ninterface TestTable {\n  id: string;\n  created_at: string;\n}\n\nexport const load: PageLoad = withAuth(async ({ getSupabaseClient, session }) => {\n  if (!session.user) {\n    throw redirect(303, '/');\n  }\n  const { data: tableData } = await getSupabaseClient()\n    .from<TestTable>('test')\n    .select('*');\n\n  return {\n    user: session.user,\n    tableData\n  };\n);\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Caution:")),(0,s.kt)("p",null,"Always use the instance returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"getSupabaseClient()")," directly!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Bad\nconst supabaseClient = getSupabaseClient()\n\nawait supabaseClient.from('table1').select()\nawait supabaseClient.from('table2').select()\n\n// Good\nawait getSupabaseClient().from('table1').select()\nawait getSupabaseClient().from('table2').select()\n")),(0,s.kt)("h2",{id:"protecting-api-routes"},"Protecting API routes"),(0,s.kt)("p",null,"Wrap an API Route to check that the user has a valid session. If they're not logged in the session is ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/api/protected-route/+server.ts"',title:'"src/routes/api/protected-route/+server.ts"'},"import type { RequestHandler } from './$types';\nimport { withAuth } from '@supabase/auth-helpers-sveltekit';\nimport { json, redirect } from '@sveltejs/kit';\n\ninterface TestTable {\n  id: string;\n  created_at: string;\n}\n\nexport const GET: RequestHandler = withAuth(async ({ session, getSupabaseClient }) => {\n  if (!session.user) {\n    throw redirect(303, '/');\n  }\n  const { data } = await getSupabaseClient()\n    .from<TestTable>('test')\n    .select('*');\n\n  return json({ data });\n);\n")),(0,s.kt)("p",null,"If you visit ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/protected-route")," without a valid session cookie, you will get a 303 response."),(0,s.kt)("h2",{id:"protecting-actions"},"Protecting Actions"),(0,s.kt)("p",null,"Wrap an Action to check that the user has a valid session. If they're not logged in, the session is ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/posts/+page.server.ts"',title:'"src/routes/posts/+page.server.ts"'},"import type { Actions } from './$types'\nimport { withAuth } from '@supabase/auth-helpers-sveltekit'\nimport { error, invalid } from '@sveltejs/kit'\n\nexport const actions: Actions = {\n  createPost: withAuth(async ({ session, getSupabaseClient, request }) => {\n    if (!session.user) {\n      // the user is not signed in\n      throw error(403, { message: 'Unauthorized' })\n    }\n    // we are save, let the user create the post\n    const formData = await request.formData()\n    const content = formData.get('content')\n\n    const { error: createPostError, data: newPost } = await getSupabaseClient()\n      .from('posts')\n      .insert({ content })\n\n    if (createPostError) {\n      return invalid(500, {\n        supabaseErrorMessage: createPostError.message,\n      })\n    }\n    return {\n      newPost,\n    }\n  }),\n}\n")),(0,s.kt)("p",null,"If you try to submit a form with the action ",(0,s.kt)("inlineCode",{parentName:"p"},"?/createPost")," without a valid session cookie, you will get a 403 error response."),(0,s.kt)("h2",{id:"saving-and-deleting-the-session"},"Saving and deleting the session"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"saveSession")," to save the session cookies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Actions } from './$types'\nimport { supabaseClient } from '$lib/db'\nimport { invalid, redirect } from '@sveltejs/kit'\nimport { saveSession } from '@supabase/auth-helpers-sveltekit/server'\n\nexport const actions: Actions = {\n  async signin({ request, cookies, url }) {\n    const formData = await request.formData()\n\n    const email = formData.get('email') as string\n    const password = formData.get('password') as string\n\n    const { data, error } = await supabaseClient.auth.api.signInWithEmail(\n      email,\n      password,\n      {\n        redirectTo: `${url.origin}/logging-in`,\n      }\n    )\n\n    if (error || !data) {\n      if (error?.status === 400) {\n        return invalid(400, {\n          error: 'Invalid credentials',\n          values: {\n            email,\n          },\n        })\n      }\n      return invalid(500, {\n        error: 'Server error. Try again later.',\n        values: {\n          email,\n        },\n      })\n    }\n\n    saveSession(cookies, data)\n    throw redirect(303, '/dashboard')\n  },\n}\n")),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"deleteSession")," to delete the session cookies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Actions } from './$types'\nimport { deleteSession } from '@supabase/auth-helpers-sveltekit/server'\nimport { redirect } from '@sveltejs/kit'\n\nexport const actions: Actions = {\n  async logout({ cookies }) {\n    deleteSession(cookies)\n    throw redirect(303, '/')\n  },\n}\n")),(0,s.kt)("h2",{id:"custom-session-namespace"},"Custom session namespace"),(0,s.kt)("p",null,"If you want to use something other than ",(0,s.kt)("inlineCode",{parentName:"p"},"locals.session")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"$page.data.session"),", update the types and create three helper functions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.d.ts"',title:'"src/app.d.ts"'},"declare namespace App {\n  interface Locals {\n    mySupabaseSession: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n  interface PageData {\n    mySupabaseSession: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.server.ts"',title:'"src/hooks.server.ts"'},"setupSupabaseServer({\n  supabaseClient,\n  cookieOptions: {\n    secure: !dev,\n  },\n  // --- change location within locals ---\n  getSessionFromLocals: (locals) => locals.mySupabaseSession,\n  setSessionToLocals: (locals, session) => (locals.mySupabaseSession = session),\n})\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/lib/db.ts"',title:'"src/lib/db.ts"'},"setupSupabaseClient({\n  supabaseClient,\n  // --- change location within pageData ---\n  getSessionFromPageData: (data) => data.mySupabaseSession,\n})\n")),(0,s.kt)("h2",{id:"migration"},"Migrate from 0.6.11 and below to 0.7.0"),(0,s.kt)("p",null,"There are numerous breaking changes in the latest 0.7.0 version of this library."),(0,s.kt)("h3",{id:"environment-variable-prefix"},"Environment variable prefix"),(0,s.kt)("p",null,"The environment variable prefix is now ",(0,s.kt)("inlineCode",{parentName:"p"},"PUBLIC_")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"VITE_")," (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"VITE_SUPABASE_URL")," is now ",(0,s.kt)("inlineCode",{parentName:"p"},"PUBLIC_SUPABASE_URL"),")."),(0,s.kt)("h3",{id:"migration-set-up-supabase-client"},"Set up the Supabase client"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/lib/db.ts"',title:'"src/lib/db.ts"'},"import { createSupabaseClient } from '@supabase/auth-helpers-sveltekit';\n\nconst { supabaseClient } = createSupabaseClient(\n  import.meta.env.VITE_SUPABASE_URL as string,\n  import.meta.env.VITE_SUPABASE_ANON_KEY as string\n);\n\nexport { supabaseClient };\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/lib/db.ts"',title:'"src/lib/db.ts"'},"import { createClient } from '@supabase/supabase-js'\nimport { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'\nimport { dev } from '$app/environment'\nimport { env } from '$env/dynamic/public'\n// or use the static env\n\n// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';\n\nexport const supabaseClient = createClient(\n  env.PUBLIC_SUPABASE_URL,\n  env.PUBLIC_SUPABASE_ANON_KEY,\n  {\n    persistSession: false,\n    autoRefreshToken: false,\n  }\n)\n\nsetupSupabaseHelpers({\n  supabaseClient,\n  cookieOptions: {\n    secure: !dev,\n  },\n})\n")))),(0,s.kt)("h3",{id:"migration-initialize-client"},"Initialize the client"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/__layout.svelte"',title:'"src/routes/__layout.svelte"'},"<script>\n  import { session } from '$app/stores'\n  import { supabaseClient } from '$lib/db'\n  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte'\n<\/script>\n\n<SupaAuthHelper {supabaseClient} {session}>\n  <slot />\n</SupaAuthHelper>\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@supabase/auth-helpers-svelte")," library is no longer required as the ",(0,s.kt)("inlineCode",{parentName:"p"},"@supabase/auth-helpers-sveltekit")," library handles all the client-side code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/+layout.svelte"',title:'"src/routes/+layout.svelte"'},"<script lang=\"ts\">\n  // make sure the supabase instance is initialized on the client\n  import '$lib/db'\n  import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit'\n  import { page } from '$app/stores'\n  import { invalidateAll } from '$app/navigation'\n\n  // this sets up automatic token refreshing\n  startSupabaseSessionSync({\n    page,\n    handleRefresh: () => invalidateAll(),\n  })\n<\/script>\n\n<slot />\n")))),(0,s.kt)("h3",{id:"migration-set-up-hooks"},"Set up hooks"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.ts"',title:'"src/hooks.ts"'},"import { handleAuth } from '@supabase/auth-helpers-sveltekit'\nimport type { GetSession, Handle } from '@sveltejs/kit'\nimport { sequence } from '@sveltejs/kit/hooks'\n\nexport const handle: Handle = sequence(...handleAuth())\n\nexport const getSession: GetSession = async (event) => {\n  const { user, accessToken, error } = event.locals\n  return {\n    user,\n    accessToken,\n    error,\n  }\n}\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.server.ts"',title:'"src/hooks.server.ts"'},"// make sure the supabase instance is initialized on the server\nimport '$lib/db'\nimport { dev } from '$app/environment'\nimport { auth } from '@supabase/auth-helpers-sveltekit/server'\n\nexport const handle = auth()\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Optional")," ",(0,s.kt)("em",{parentName:"p"},"if using additional handle methods")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks.server.ts"',title:'"src/hooks.server.ts"'},"// make sure the supabase instance is initialized on the server\nimport '$lib/db'\nimport { dev } from '$app/environment'\nimport { auth } from '@supabase/auth-helpers-sveltekit/server'\nimport { sequence } from '@sveltejs/kit/hooks'\n\nexport const handle = sequence(auth(), yourHandler)\n")))),(0,s.kt)("h3",{id:"migration-typings"},"Typings"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.d.ts"',title:'"src/app.d.ts"'},"/// <reference types=\"@sveltejs/kit\" />\n// See https://kit.svelte.dev/docs/types#app\n// for information about these interfaces\ndeclare namespace App {\n  interface UserSession {\n    user: import('@supabase/supabase-js').User\n    accessToken?: string\n  }\n\n  interface Locals extends UserSession {\n    error: import('@supabase/supabase-js').ApiError\n  }\n\n  interface Session extends UserSession {}\n\n  // interface Platform {}\n  // interface Stuff {}\n}\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.d.ts"',title:'"src/app.d.ts"'},"/// <reference types=\"@sveltejs/kit\" />\n\n// See https://kit.svelte.dev/docs/types#app\n// for information about these interfaces\n// and what to do when importing types\ndeclare namespace App {\n  interface Locals {\n    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n\n  interface PageData {\n    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession\n  }\n\n  // interface Error {}\n  // interface Platform {}\n}\n")))),(0,s.kt)("h3",{id:"check-the-user-on-the-client"},"Check the user on the client"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/index.svelte"',title:'"src/routes/index.svelte"'},"<script>\n  import { session } from '$app/stores'\n<\/script>\n\n{#if !$session.user}\n<h1>I am not logged in</h1>\n{:else}\n<h1>Welcome {$session.user.email}</h1>\n<p>I am logged in!</p>\n{/if}\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/+page.svelte"',title:'"src/routes/+page.svelte"'},"<script>\n  import { page } from '$app/stores'\n<\/script>\n\n{#if !$page.data.session.user}\n<h1>I am not logged in</h1>\n{:else}\n<h1>Welcome {$page.data.session.user.email}</h1>\n<p>I am logged in!</p>\n{/if}\n")))),(0,s.kt)("h3",{id:"withpageauth"},"withPageAuth"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/protected-route.svelte"',title:'"src/routes/protected-route.svelte"'},"<script lang=\"ts\" context=\"module\">\n  import {\n    supabaseServerClient,\n    withPageAuth,\n  } from '@supabase/auth-helpers-sveltekit'\n  import type { Load } from './__types/protected-page'\n\n  export const load: Load = async ({ session }) =>\n    withPageAuth(\n      {\n        redirectTo: '/',\n        user: session.user,\n      },\n      async () => {\n        const { data } = await supabaseServerClient(session.accessToken)\n          .from('test')\n          .select('*')\n        return { props: { data, user: session.user } }\n      }\n    )\n<\/script>\n\n<script>\n  export let data\n  export let user\n<\/script>\n\n<div>Protected content for {user.email}</div>\n<p>server-side fetched data with RLS:</p>\n<pre>{JSON.stringify(data, null, 2)}</pre>\n<p>user:</p>\n<pre>{JSON.stringify(user, null, 2)}</pre>\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/routes/protected-route/+page.svelte"',title:'"src/routes/protected-route/+page.svelte"'},"<script lang=\"ts\">\n  import type { PageData } from './$types'\n\n  export let data: PageData\n  $: ({ tableData, user } = data)\n<\/script>\n\n<div>Protected content for {user.email}</div>\n<p>server-side fetched data with RLS:</p>\n<pre>{JSON.stringify(tableData, null, 2)}</pre>\n<p>user:</p>\n<pre>{JSON.stringify(user, null, 2)}</pre>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/protected-route/+page.ts"',title:'"src/routes/protected-route/+page.ts"'},"import { withAuth } from '@supabase/auth-helpers-sveltekit'\nimport { redirect } from '@sveltejs/kit'\nimport type { PageLoad } from './$types'\n\nexport const load: PageLoad = withAuth(\n  async ({ session, getSupabaseClient }) => {\n    if (!session.user) {\n      throw redirect(303, '/')\n    }\n\n    const { data: tableData } = await getSupabaseClient()\n      .from('test')\n      .select('*')\n    return { tableData, user: session.user }\n  }\n)\n")))),(0,s.kt)("h3",{id:"withapiauth"},"withApiAuth"),(0,s.kt)(r.Z,{groupId:"version",values:[{label:"0.6.11 and below",value:"older"},{label:"0.7.0",value:"latest"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"older",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/api/protected-route.ts"',title:'"src/routes/api/protected-route.ts"'},"import {\n  supabaseServerClient,\n  withApiAuth,\n} from '@supabase/auth-helpers-sveltekit'\nimport type { RequestHandler } from './__types/protected-route'\n\ninterface TestTable {\n  id: string\n  created_at: string\n}\n\ninterface GetOutput {\n  data: TestTable[]\n}\n\nexport const GET: RequestHandler<GetOutput> = async ({ locals, request }) =>\n  withApiAuth({ user: locals.user }, async () => {\n    // Run queries with RLS on the server\n    const { data } = await supabaseServerClient(request)\n      .from('test')\n      .select('*')\n\n    return {\n      status: 200,\n      body: { data },\n    }\n  })\n"))),(0,s.kt)(i.Z,{value:"latest",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/api/protected-route/+server.ts"',title:'"src/routes/api/protected-route/+server.ts"'},"import type { RequestHandler } from './$types';\nimport { withAuth } from '@supabase/auth-helpers-sveltekit';\nimport { json, redirect } from '@sveltejs/kit';\n\ninterface TestTable {\n  id: string;\n  created_at: string;\n}\n\nexport const GET: RequestHandler = withAuth(async ({ session, getSupabaseClient }) => {\n  if (!session.user) {\n    throw redirect(303, '/');\n  }\n\n  const { data } = await getSupabaseClient()\n    .from<TestTable>('test')\n    .select('*');\n\n  return json({ data });\n);\n")))),(0,s.kt)("h2",{id:"additional-links"},"Additional Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers"},"Auth Helpers Source code")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers/tree/main/examples/sveltekit"},"SvelteKit example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers/tree/main/examples/sveltekit-email-password"},"SvelteKit Email/Password example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/supabase/auth-helpers/tree/main/examples/sveltekit-magic-link"},"SvelteKit Magiclink example"))))}m.isMDXComponent=!0}}]);