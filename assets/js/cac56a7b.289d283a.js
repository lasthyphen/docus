"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[28871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:s,values:m,groupId:d,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[k,w]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==k&&b.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,a=O.indexOf(t),r=b[a].value;r!==k&&(_(t),w(r),null!=d&&N(d,String(r)))},j=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>O.push(e),onKeyDown:j,onClick:S},s,{className:(0,l.Z)("tabs__item",p,s?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,s.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},8840:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={id:"sql-to-api",title:"Converting SQL to JavaScript API",description:"Implementing common SQL patterns in the JavaScript API"},s=void 0,o={unversionedId:"guides/database/sql-to-api",id:"guides/database/sql-to-api",title:"Converting SQL to JavaScript API",description:"Implementing common SQL patterns in the JavaScript API",source:"@site/docs/guides/database/sql-to-api.mdx",sourceDirName:"guides/database",slug:"/guides/database/sql-to-api",permalink:"/docs/guides/database/sql-to-api",draft:!1,editUrl:"https://github.com/docs/guides/database/sql-to-api.mdx",tags:[],version:"current",frontMatter:{id:"sql-to-api",title:"Converting SQL to JavaScript API",description:"Implementing common SQL patterns in the JavaScript API"}},i={},c=[{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Select a set of columns from a single table with where, order by, and limit clauses."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name, last_name, team_id, age from players\nwhere age between 20 and 24 and team_id <> 'STL'\norder by last_name, first_name desc\nlimit 20\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('players')\n  .select('first_name,last_name,team_id,age')\n  .gte('age', 20)\n  .lte('age', 24)\n  .not('team_id', 'eq', 'STL')\n  .order('last_name', { ascending: true }) // or just .order('last_name')\n  .order('first_name', { ascending: false })\n  .limit(20)\n")),(0,n.kt)("p",null,"Select all columns from a single table with a complex where clause: OR AND OR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from players\nwhere ((team_id = 'CHN' or team_id is null) and (age > 35 or age is null))\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('players')\n  .select() // or .select('*')\n  .or('team_id.eq.CHN,team_id.is.null')\n  .or('age.gt.35,age.is.null') // additional filters imply \"AND\"\n  .not('team_id', 'eq', 'STL')\n")),(0,n.kt)("p",null,"Select all columns from a single table with a complex where clause: AND OR AND"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from players\nwhere ((team_id = 'CHN' and age > 35) or (team_id <> 'CHN' and age is not null))\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('players')\n  .select() // or .select('*')\n  .or('and(team_id.eq.CHN,age.gt.35),and(team_id.neq.CHN,.not.age.is.null)')\n")),(0,n.kt)("p",null,"Get a count of rows, but don't return any data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from players\nwhere team_id = 'NYM'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('players')\n  .select('*', { count: 'exact', head: true }) // exact, planned, or executed\n  .eq('team_id', 'NYM')\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://supabase.com"},"Supabase Account - Free Tier OK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postgrest.org/en/stable/api.html#operators"},"Postgrest Operators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/javascript/select"},"Supabase API: JavaScript select")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/javascript/using-modifiers"},"Supabase API: JavaScript modifiers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/javascript/using-filters"},"Supabase API: JavaScript filters"))))}p.isMDXComponent=!0}}]);