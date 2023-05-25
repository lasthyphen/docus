"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[39259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(a),k=n,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||r;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(67294),n=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(87462),n=a(67294),r=a(86010),l=a(72389),i=a(67392),p=a(7094),u=a(12466);const c="tabList__CuJ",s="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:k,className:m}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,p.U)(),[g,C]=(0,n.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==g&&b.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,a=A.indexOf(t),o=b[a].value;o!==g&&(w(t),C(o),null!=k&&N(k,String(o)))},S=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]??A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]??A[A.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>A.push(e),onKeyDown:S,onClick:O},l,{className:(0,r.Z)("tabs__item",s,l?.className,{"tabs__item--active":g===t})}),a??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function k(e){const t=(0,l.Z)();return n.createElement(d,(0,o.Z)({key:String(t)},e))}},80459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const r={id:"auth-facebook",title:"Login with Facebook",description:"Add Facebook OAuth to your Supabase project"},l=void 0,i={unversionedId:"guides/auth/auth-facebook",id:"guides/auth/auth-facebook",title:"Login with Facebook",description:"Add Facebook OAuth to your Supabase project",source:"@site/docs/guides/auth/auth-facebook.mdx",sourceDirName:"guides/auth",slug:"/guides/auth/auth-facebook",permalink:"/docs/guides/auth/auth-facebook",draft:!1,editUrl:"https://github.com/docs/guides/auth/auth-facebook.mdx",tags:[],version:"current",frontMatter:{id:"auth-facebook",title:"Login with Facebook",description:"Add Facebook OAuth to your Supabase project"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Access your Facebook Developer account",id:"access-your-facebook-developer-account",level:2},{value:"Create a Facebook App",id:"create-a-facebook-app",level:2},{value:"Find your callback URI",id:"find-your-callback-uri",level:2},{value:"Set up FaceBook Login for your Facebook App",id:"set-up-facebook-login-for-your-facebook-app",level:2},{value:"Copy your Facebook App ID and Secret",id:"copy-your-facebook-app-id-and-secret",level:2},{value:"Enter your Facebook App ID and Secret into your Supabase Project",id:"enter-your-facebook-app-id-and-secret-into-your-supabase-project",level:2},{value:"Add login code to your client app",id:"add-login-code-to-your-client-app",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To enable Facebook Auth for your project, you need to set up a Facebook OAuth application and add the application credentials to your Supabase Dashboard."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Setting up Facebook logins for your application consists of 3 parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create and configure a Facebook Application on the ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com"},"Facebook Developers Site")),(0,n.kt)("li",{parentName:"ul"},"Add your Facebook keys to your ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Project")),(0,n.kt)("li",{parentName:"ul"},"Add the login code to your ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase-js"},"Supabase JS Client App"))),(0,n.kt)("h2",{id:"access-your-facebook-developer-account"},"Access your Facebook Developer account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com"},"developers.facebook.com"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Log In")," at the top right to log in.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Facebook Developer Portal.",src:a(35235).Z,width:"1349",height:"814"})),(0,n.kt)("h2",{id:"create-a-facebook-app"},"Create a Facebook App"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"My Apps")," at the top right."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create App")," near the top right."),(0,n.kt)("li",{parentName:"ul"},"Select your app type and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill in your app information, then click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create App"),"."),(0,n.kt)("li",{parentName:"ul"},"This should bring you to the screen: ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Products to Your App"),". (Alternatively you can click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Product")," in the left sidebar to get to this screen.)")),(0,n.kt)("h2",{id:"find-your-callback-uri"},"Find your callback URI"),(0,n.kt)("p",null,"The next step requires a callback URI, which looks like this:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://<project-ref>.supabase.co/auth/v1/callback")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to your ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Project Dashboard"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," icon at the bottom of the left sidebar."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"API")," in the list."),(0,n.kt)("li",{parentName:"ul"},"Under Config / URL you'll find your API URL, you can click ",(0,n.kt)("inlineCode",{parentName:"li"},"Copy")," to copy it to the clipboard."),(0,n.kt)("li",{parentName:"ul"},"Now just add ",(0,n.kt)("inlineCode",{parentName:"li"},"/auth/v1/callback")," to the end of that to get your full ",(0,n.kt)("inlineCode",{parentName:"li"},"OAuth Redirect URI"),".")),(0,n.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,n.kt)("source",{src:"/docs/videos/api/api-url-and-key.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,n.kt)("h2",{id:"set-up-facebook-login-for-your-facebook-app"},"Set up FaceBook Login for your Facebook App"),(0,n.kt)("p",null,"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Products to your App")," screen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Setup")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook Login")),(0,n.kt)("li",{parentName:"ul"},"Skip the Quickstart screen, instead, in the left sidebar, click ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook Login")),(0,n.kt)("li",{parentName:"ul"},"Enter your callback URI under ",(0,n.kt)("inlineCode",{parentName:"li"},"Valid OAuth Redirect URIs")," on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook Login Settings")," page"),(0,n.kt)("li",{parentName:"ul"},"Enter this in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Valid OAuth Redirect URIs")," box"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Changes")," at the bottom right")),(0,n.kt)("p",null,"Be aware that you have to set the right access levels on your Facebook App to enable 3rd party applications to read the email address.\nFrom the ",(0,n.kt)("inlineCode",{parentName:"p"},"App Review -> Permissions and Features")," screen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the button ",(0,n.kt)("inlineCode",{parentName:"li"},"Request Advanced Access")," on the right side of ",(0,n.kt)("inlineCode",{parentName:"li"},"public_profile")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"email"))),(0,n.kt)("p",null,"You can read more about access levels ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/access-levels/"},"here")),(0,n.kt)("h2",{id:"copy-your-facebook-app-id-and-secret"},"Copy your Facebook App ID and Secret"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings / Basic")," in the left sidebar"),(0,n.kt)("li",{parentName:"ul"},"Copy your App ID from the top of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Basic Settings")," page"),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"App Secret")," click ",(0,n.kt)("inlineCode",{parentName:"li"},"Show")," then copy your secret"),(0,n.kt)("li",{parentName:"ul"},"Make sure all required fields are completed on this screen.")),(0,n.kt)("h2",{id:"enter-your-facebook-app-id-and-secret-into-your-supabase-project"},"Enter your Facebook App ID and Secret into your Supabase Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to your ",(0,n.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Project Dashboard")),(0,n.kt)("li",{parentName:"ul"},"In the left sidebar, click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Authentication")," icon (near the top)"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," from the list to go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Authentication Settings")," page"),(0,n.kt)("li",{parentName:"ul"},"Enter the final (hosted) URL of your app under ",(0,n.kt)("inlineCode",{parentName:"li"},"Site URL")," (this is important)"),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"External OAuth Providers")," turn ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook Enabled")," to ON"),(0,n.kt)("li",{parentName:"ul"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook client ID")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Facebook secret")," saved in the previous step"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"))),(0,n.kt)("h2",{id:"add-login-code-to-your-client-app"},"Add login code to your client app"),(0,n.kt)("p",null,"When your user signs in, call ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/javascript/auth-signinwithoauth"},"signInWithOAuth()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"facebook")," as the ",(0,n.kt)("inlineCode",{parentName:"p"},"provider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"async function signInWithFacebook() {\n  const { data, error } = await supabase.auth.signInWithOAuth({\n    provider: 'facebook',\n  })\n}\n")),(0,n.kt)("p",null,"When your user signs out, call ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/javascript/auth-signout"},"signOut()")," to remove them from the browser session and any objects from localStorage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"async function signout() {\n  const { error } = await supabase.auth.signOut()\n}\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://supabase.com"},"Supabase Account - Free Tier OK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase-js"},"Supabase JS Client")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/"},"Facebook Developers Dashboard"))))}s.isMDXComponent=!0},35235:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/facebook-portal-6a8bc8fe92e9b85971caa9b99f562f00.png"}}]);