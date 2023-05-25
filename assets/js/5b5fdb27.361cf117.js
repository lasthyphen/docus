"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[27941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=s,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),s=(a(67294),a(3905));a(65488),a(85162);const l={id:"select",title:"Fetch data: select()",slug:"/select",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"},r=void 0,i={unversionedId:"generated/select",id:"version-v1/generated/select",title:"Fetch data: select()",description:"Performs vertical filtering with SELECT.",source:"@site/_supabase_js_versioned_docs/version-v1/generated/select.mdx",sourceDirName:"generated",slug:"/select",permalink:"/docs/reference/javascript/v1/select",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml",tags:[],version:"v1",frontMatter:{id:"select",title:"Fetch data: select()",slug:"/select",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_js_v1.yml"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Getting your data",id:"getting-your-data",level:3},{value:"Selecting specific columns",id:"selecting-specific-columns",level:3},{value:"Query foreign tables",id:"query-foreign-tables",level:3},{value:"Query the same foreign table multiple times",id:"query-the-same-foreign-table-multiple-times",level:3},{value:"Filtering with inner joins",id:"filtering-with-inner-joins",level:3},{value:"Querying with count option",id:"querying-with-count-option",level:3},{value:"Querying JSON data",id:"querying-json-data",level:3},{value:"Return data as CSV",id:"return-data-as-csv",level:3},{value:"Aborting requests in-flight",id:"aborting-requests-in-flight",level:3}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Performs vertical filtering with SELECT."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .select()\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"columns"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"string"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"The columns to retrieve, separated by commas."))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"__namedParameters"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"head"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"boolean"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"When set to true, select will void data."))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"count"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"null")," | ",(0,s.kt)("code",null,"exact")," | ",(0,s.kt)("code",null,"planned")," | ",(0,s.kt)("code",null,"estimated"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"Count algorithm to use to count rows in a table.")),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("h5",{class:"method-list-title method-list-title-isChild expanded"},"Properties"),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},(0,s.kt)("code",null,"object")),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},(0,s.kt)("code",null,"object")),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},(0,s.kt)("code",null,"object")),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. "))),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"null"),(0,s.kt)("span",{className:"method-list-item-label-badge required"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"},(0,s.kt)("code",null,"object"))),(0,s.kt)("div",{class:"method-list-item-description"},(0,s.kt)("p",null,"No description provided. ")))))))),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use ",(0,s.kt)("inlineCode",{parentName:"li"},"range()")," queries to paginate through your data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"select()")," can be combined with ",(0,s.kt)("a",{parentName:"li",href:"/docs/reference/javascript/using-modifiers"},"Modifiers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"select()")," can be combined with ",(0,s.kt)("a",{parentName:"li",href:"/docs/reference/javascript/using-filters"},"Filters")),(0,s.kt)("li",{parentName:"ul"},"If using the Supabase hosted platform ",(0,s.kt)("inlineCode",{parentName:"li"},"apikey")," is technically a reserved keyword, since the API gateway will pluck it out for authentication. ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase/issues/5465"},"It should be avoided as a column name"),".")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"getting-your-data"},"Getting your data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .select()\n")),(0,s.kt)("h3",{id:"selecting-specific-columns"},"Selecting specific columns"),(0,s.kt)("p",null,"You can select specific fields from your tables."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('cities')\n  .select('name')\n")),(0,s.kt)("h3",{id:"query-foreign-tables"},"Query foreign tables"),(0,s.kt)("p",null,"If your database has foreign key relationships, you can query related tables too."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('countries')\n  .select(`\n    name,\n    cities (\n      name\n    )\n  `)\n")),(0,s.kt)("admonition",{title:"What about join tables",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"  If you're in a situation where your tables are ",(0,s.kt)("strong",{parentName:"p"},"NOT")," directly related, but instead are joined by a ",(0,s.kt)("em",{parentName:"p"},"join table"),",\nyou can still use the ",(0,s.kt)("inlineCode",{parentName:"p"},"select()")," method to query the related data. The PostgREST engine detects the relationship automatically.\nFor more details, ",(0,s.kt)("a",{parentName:"p",href:"https://postgrest.org/en/latest/api.html#embedding-through-join-tables"},"follow the link"),".")),(0,s.kt)("h3",{id:"query-the-same-foreign-table-multiple-times"},"Query the same foreign table multiple times"),(0,s.kt)("p",null,"Sometimes you will need to query the same foreign table twice.\nIn this case, you can use the name of the joined column to identify\nwhich join you intend to use. For convenience, you can also give an\nalias for each column. For example, if we had a shop of products,\nand we wanted to get the supplier and the purchaser at the same time\n(both in the users) table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('products')\n  .select(`\n    id,\n    supplier:supplier_id ( name ),\n    purchaser:purchaser_id ( name )\n  `)\n")),(0,s.kt)("h3",{id:"filtering-with-inner-joins"},"Filtering with inner joins"),(0,s.kt)("p",null,"If you want to filter a table based on a child table's values you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"!inner()")," function. For example, if you wanted\nto select all rows in a ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," table which belong to a user with the ",(0,s.kt)("inlineCode",{parentName:"p"},"username"),' "Jane":'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('messages')\n  .select('*, users!inner(*)')\n  .eq('users.username', 'Jane')\n")),(0,s.kt)("h3",{id:"querying-with-count-option"},"Querying with count option"),(0,s.kt)("p",null,"You can get the number of rows by using the count option.\nAllowed values for count option are ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,s.kt)("a",{parentName:"p",href:"https://postgrest.org/en/stable/api.html#exact-count"},"exact"),", ",(0,s.kt)("a",{parentName:"p",href:"https://postgrest.org/en/stable/api.html#planned-count"},"planned")," and ",(0,s.kt)("a",{parentName:"p",href:"https://postgrest.org/en/stable/api.html#estimated-count"},"estimated"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error, count } = await supabase\n  .from('cities')\n  .select('name', { count: 'exact' }) // if you don't want to return any rows, you can use { count: 'exact', head: true }\n")),(0,s.kt)("h3",{id:"querying-json-data"},"Querying JSON data"),(0,s.kt)("p",null,"If you have data inside of a JSONB column, you can apply select\nand query filters to the data values. Postgres offers a\n",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-json.html"},"number of operators"),"\nfor querying JSON data. Also see\n",(0,s.kt)("a",{parentName:"p",href:"http://postgrest.org/en/v7.0.0/api.html#json-columns"},"PostgREST docs")," for more details."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('users')\n  .select(`\n    id, name,\n    address->street\n  `)\n  .eq('address->postcode', 90210)\n")),(0,s.kt)("h3",{id:"return-data-as-csv"},"Return data as CSV"),(0,s.kt)("p",null,"By default the data is returned in JSON format, however you can also request for it to be returned as Comma Separated Values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { data, error } = await supabase\n  .from('users')\n  .select()\n  .csv()\n")),(0,s.kt)("h3",{id:"aborting-requests-in-flight"},"Aborting requests in-flight"),(0,s.kt)("p",null,"You can use an ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},(0,s.kt)("inlineCode",{parentName:"a"},"AbortController"))," to abort requests. Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"statusText")," doesn't mean anything for aborted requests, since the request wasn't actually fulfilled."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const ac = new AbortController()\nsupabase\n  .from('very_big_table')\n  .select()\n  .abortSignal(ac.signal)\n  .then(console.log)\nac.abort()\n// {\n//   error: {\n//     message: 'FetchError: The user aborted a request.',\n//     details: '',\n//     hint: '',\n//     code: ''\n//   },\n//   data: null,\n//   body: null,\n//   count: null,\n//   status: 400,\n//   statusText: 'Bad Request'\n// }\n")))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),s=a(67294),l=a(86010),r=a(72389),i=a(67392),o=a(7094),u=a(12466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:r,values:d,groupId:p,className:h}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,o.U)(),[y,w]=(0,s.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:q}=(0,u.o5)();if(null!=p){const e=v[p];null!=e&&e!==y&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),n=k[a].value;n!==y&&(q(t),w(n),null!=p&&N(p,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>j.push(e),onKeyDown:C,onClick:O},r,{className:(0,l.Z)("tabs__item",m,r?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,s.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,r.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);