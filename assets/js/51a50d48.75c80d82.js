"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[70712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,g=l["".concat(p,".").concat(d)]||l[d]||y[d]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={id:"generating-types",title:"Generating Types",description:"How to generate types for your API and Supabase libraries."},i=void 0,o={unversionedId:"guides/api/generating-types",id:"guides/api/generating-types",title:"Generating Types",description:"How to generate types for your API and Supabase libraries.",source:"@site/docs/guides/api/generating-types.mdx",sourceDirName:"guides/api",slug:"/guides/api/generating-types",permalink:"/docs/guides/api/generating-types",draft:!1,editUrl:"https://github.com/docs/guides/api/generating-types.mdx",tags:[],version:"current",frontMatter:{id:"generating-types",title:"Generating Types",description:"How to generate types for your API and Supabase libraries."}},p={},u=[{value:"Generating types from OpenAPI specification",id:"generating-types-from-openapi-specification",level:3},{value:"Update types automatically with GitHub Actions",id:"update-types-automatically-with-github-actions",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supabase APIs are generated from your database, which means that we can use database introspection to generate type-safe API definitions."),(0,r.kt)("h3",{id:"generating-types-from-openapi-specification"},"Generating types from OpenAPI specification"),(0,r.kt)("p",null,"Supabase generates an OpenAPI specification file for your database which can be used to generate your data types for usage with TypeScript."),(0,r.kt)("p",null,"The OpenAPI specification for your Supabase project can be accessed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"https://your-project.supabase.co/rest/v1/?apikey=your-anon-key\n")),(0,r.kt)("p",null,"Using the open source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drwpow/openapi-typescript#%EF%B8%8F-reading-specs-from-remote-resource"},"openapi-typescript")," tool you can generate your types and store them locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx openapi-typescript https://your-project.supabase.co/rest/v1/?apikey=your-anon-key --output types/supabase.ts\n")),(0,r.kt)("p",null,"Important notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since the generator uses JSON API, there is no way to determine if a column is an Array. It will generate array types as ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", even though Supabase handles this automatically and returns arrays.\nYou can fix this manually in the files by changing the type, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"names: string")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"names: string[]")),(0,r.kt)("li",{parentName:"ul"},"The types won't automatically stay in sync with your database, so make sure to regenerate your types after you make changes to your database.")),(0,r.kt)("p",null,"After you have generated your types, you can use them in your TypeScript projects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextApiRequest, NextApiResponse } from 'next'\nimport { createClient } from '@supabase/supabase-js'\nimport { definitions } from '../../types/supabase'\n\nconst supabase = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL,\n  process.env.SUPABASE_SECRET_KEY\n)\n\nexport default async (req: NextApiRequest, res: NextApiResponse) => {\n  const allOnlineUsers = await supabase\n    .from<definitions['users']>('users')\n    .select('*')\n    .eq('status', 'ONLINE')\n  res.status(200).json(allOnlineUsers)\n}\n")),(0,r.kt)("p",null,"For more advance type-support, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mzalevski/postgrest-js-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"postgrest-js-tools")),"."),(0,r.kt)("h2",{id:"update-types-automatically-with-github-actions"},"Update types automatically with GitHub Actions"),(0,r.kt)("p",null,"One way to keep your type definitions in sync with your database is to set up a GitHub action that runs on a schedule."),(0,r.kt)("p",null,"The following script can be run in your terminal to produce the file ",(0,r.kt)("inlineCode",{parentName:"p"},"types/database/index.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx openapi-typescript https://your-project.supabase.co/rest/v1/?apikey=your-anon-key --output types/database/index.ts\n")),(0,r.kt)("p",null,"You can add this script to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run update-types"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"update-types": "npx openapi-typescript \\"${SUPABASE_URL}/rest/v1/?apikey=${SUPABASE_ANON_KEY}\\" --version=2 --output types/database/index.ts"\n')),(0,r.kt)("p",null,"You can use GitHub actions to generate this file automatically. This script will commit the change to your repo every night.\nCreate a file ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/update-types.yml")," and add the following snippet into this file to define the action along with the environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: Update database types\n\non:\n  schedule:\n    # sets the action to run daily. You can modify this to run the action more or less frequently\n    - cron: \'0 0 * * *\'\n\njobs:\n  update:\n    runs-on: ubuntu-latest\n    env:\n      SUPABASE_URL: ${{secrets.SUPABASE_URL}}\n      SUPABASE_ANON_KEY: ${{secrets.SUPABASE_ANON_KEY}}\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          persist-credentials: false\n          fetch-depth: 0\n      - uses: actions/setup-node@v2.1.5\n        with:\n          node-version: 14\n      - run: npm run update-types\n      - name: check for file changes\n        id: git_status\n        run: |\n          echo "::set-output name=status::$(git status -s)"\n      - name: Commit files\n        if: ${{contains(steps.git_status.outputs.status, \' \')}}\n        run: |\n          git add types/database/index.ts\n          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"\n          git config --local user.name "github-actions[bot]"\n          git commit -m "Update database types" -a\n      - name: Push changes\n        if: ${{contains(steps.git_status.outputs.status, \' \')}}\n        uses: ad-m/github-push-action@master\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          branch: ${{ github.ref }}\n')),(0,r.kt)("p",null,"Alternatively, you can use a community-supported GitHub action: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lyqht/generate-supabase-db-types-github-action"},"generate-supabase-db-types-github-action"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.esteetey.dev/how-to-create-and-test-a-github-action-that-generates-types-from-supabase-database"},"Generating Supabase types with GitHub Actions"))))}l.isMDXComponent=!0}}]);