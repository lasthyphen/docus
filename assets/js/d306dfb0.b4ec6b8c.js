"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[41982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(65488),n(85162);const l={id:"installing",title:"On-Chain Governance",slug:"installing",custom_edit_url:"https://github.com/supabase/supabase/edit/master/web/spec/supabase.yml"},o=void 0,i={unversionedId:"installing",id:"installing",title:"On-Chain Governance",description:"On-chain governance refers to the practise of voting in active Polls for the proposed DIPS.",source:"@site/_supabase_js/installing.mdx",sourceDirName:".",slug:"/installing",permalink:"/docs/reference/javascript/installing",draft:!1,editUrl:"https://github.com/supabase/supabase/edit/master/web/spec/supabase.yml",tags:[],version:"current",frontMatter:{id:"installing",title:"On-Chain Governance",slug:"installing",custom_edit_url:"https://github.com/supabase/supabase/edit/master/web/spec/supabase.yml"},sidebar:"sidebar",previous:{title:"DGC Voting Portal",permalink:"/docs/reference/javascript/"},next:{title:"Voting Wallet",permalink:"/docs/reference/javascript/voting-wallet"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On-chain governance refers to the practise of voting in active Polls for the proposed DIPS.\nThese polls are formalized governance proposals that require on-chain voting by each DGC Member.\nDGC Members with an acquired CAP and a minimum balanace of 1500 HAL tokens can participate in these votes using the decypher wallet."),(0,a.kt)("p",null,"Who can participate in on-chain governance?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DGC Members who have successfully acquired a CAP during the procurement window."),(0,a.kt)("li",{parentName:"ol"},"DGC Members with a minimum balance of 1500 HAL tokens."),(0,a.kt)("li",{parentName:"ol"},"DGC Members who have fulfilled the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/registration"},"Membership Requirements")," and signed the Council Manifesto.")))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[O,k]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==O&&h.some((t=>t.value===e))&&k(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==O&&(C(t),k(r),null!=d&&w(d,String(r)))},P=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:P,onClick:j},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":O===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);