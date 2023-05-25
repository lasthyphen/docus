"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[38412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={id:"textsearch",title:".textSearch()",slug:"/textsearch",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},s=void 0,o={unversionedId:"generated/textsearch",id:"generated/textsearch",title:".textSearch()",description:"Finds all rows whose tsvector value on the stated column matches to_tsquery(query).",source:"@site/_supabase_dart/generated/textsearch.mdx",sourceDirName:"generated",slug:"/textsearch",permalink:"/docs/reference/dart/textsearch",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml",tags:[],version:"current",frontMatter:{id:"textsearch",title:".textSearch()",slug:"/textsearch",custom_edit_url:"https://github.com/supabase/supabase/edit/master/spec/supabase_dart_v1.yml"},sidebar:"sidebar",previous:{title:".overlaps()",permalink:"/docs/reference/dart/overlaps"},next:{title:".filter()",permalink:"/docs/reference/dart/filter"}},i={},c=[{value:"Examples",id:"examples",level:2},{value:"Text search",id:"text-search",level:3},{value:"Basic normalization",id:"basic-normalization",level:3},{value:"Full normalization",id:"full-normalization",level:3},{value:"Full normalization",id:"full-normalization-1",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Finds all rows whose tsvector value on the stated ",(0,n.kt)("inlineCode",{parentName:"p"},"column")," matches to_tsquery(query)."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"text-search"},"Text search"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('quotes')\n  .select('catchphrase')\n  .textSearch('catchphrase', \"'fat' & 'cat'\", \n    config: 'english' \n  );\n")),(0,n.kt)("h3",{id:"basic-normalization"},"Basic normalization"),(0,n.kt)("p",null,"Uses PostgreSQL's ",(0,n.kt)("inlineCode",{parentName:"p"},"plainto_tsquery")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('quotes')\n  .select('catchphrase')\n  .textSearch('catchphrase', \"'fat' & 'cat'\",  \n    type: TextSearchType.plain,\n    config: 'english' \n  );\n")),(0,n.kt)("h3",{id:"full-normalization"},"Full normalization"),(0,n.kt)("p",null,"Uses PostgreSQL's ",(0,n.kt)("inlineCode",{parentName:"p"},"phraseto_tsquery")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('quotes')\n  .select('catchphrase')\n  .textSearch('catchphrase', \"'fat' & 'cat'\",  \n    type: TextSearchType.phrase,\n    config: 'english' \n  );\n")),(0,n.kt)("h3",{id:"full-normalization-1"},"Full normalization"),(0,n.kt)("p",null,"Uses PostgreSQL's ",(0,n.kt)("inlineCode",{parentName:"p"},"websearch_to_tsquery")," function.\nThis function will never raise syntax errors, which makes it possible to use raw user-supplied input for search, and can be used\nwith advanced operators."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unquoted text"),": text not inside quote marks will be converted to terms separated by & operators, as if processed by plainto_tsquery."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"quoted text"'),": text inside quote marks will be converted to terms separated by <-> operators, as if processed by phraseto_tsquery."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OR"),": the word \u201cor\u201d will be converted to the | operator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-"),": a dash will be converted to the ! operator.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final data = await supabase\n  .from('quotes')\n  .select('catchphrase')\n  .textSearch('catchphrase', \"'fat or cat'\",  \n    type: TextSearchType.websearch,\n    config: 'english'\n  );\n")))}p.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:s,values:d,groupId:m,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[x,w]=(0,n.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,a=N.indexOf(t),r=b[a].value;r!==x&&(O(t),w(r),null!=m&&k(m,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:_},s,{className:(0,l.Z)("tabs__item",p,s?.className,{"tabs__item--active":x===t})}),a??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);