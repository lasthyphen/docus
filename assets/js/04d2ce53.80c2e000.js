"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[34580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),l=n(86010),r=n(72389),o=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:r,values:c,groupId:m,className:k}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:b}=(0,p.U)(),[v,g]=(0,i.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=m){const e=C[m];null!=e&&e!==v&&N.some((t=>t.value===e))&&g(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==v&&(A(t),g(a),null!=m&&b(m,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:D,onClick:I},r,{className:(0,l.Z)("tabs__item",d,r?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},5828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(65488),n(85162);const l={id:"auth-apple",title:"Login with Apple",description:"Add Apple OAuth to your Supabase project"},r=void 0,o={unversionedId:"guides/auth/auth-apple",id:"guides/auth/auth-apple",title:"Login with Apple",description:"Add Apple OAuth to your Supabase project",source:"@site/docs/guides/auth/auth-apple.mdx",sourceDirName:"guides/auth",slug:"/guides/auth/auth-apple",permalink:"/docs/guides/auth/auth-apple",draft:!1,editUrl:"https://github.com/docs/guides/auth/auth-apple.mdx",tags:[],version:"current",frontMatter:{id:"auth-apple",title:"Login with Apple",description:"Add Apple OAuth to your Supabase project"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Access your Apple Developer account",id:"access-your-apple-developer-account",level:2},{value:"Obtain an App ID",id:"obtain-an-app-id",level:2},{value:"Obtain a Services ID",id:"obtain-a-services-id",level:2},{value:"Find your callback URL",id:"find-your-callback-url",level:2},{value:"Configure your Services ID",id:"configure-your-services-id",level:2},{value:"Download your secret key",id:"download-your-secret-key",level:2},{value:"Generate a <code>client_secret</code>",id:"generate-a-client_secret",level:2},{value:"Add your OAuth credentials to Supabase",id:"add-your-oauth-credentials-to-supabase",level:2},{value:"Add login code to your client app",id:"add-login-code-to-your-client-app",level:2},{value:"Resources",id:"resources",level:2}],s={toc:u};function d(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To enable Apple Auth for your project, you need to set up an Apple OAuth application and add the application credentials to your Supabase Dashboard."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Apple OAuth consists of six broad steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtaining an ",(0,i.kt)("inlineCode",{parentName:"li"},"App Id")," with \u201cSign In with Apple\u201d capabilities."),(0,i.kt)("li",{parentName:"ul"},"Obtaining a ",(0,i.kt)("inlineCode",{parentName:"li"},"Services Id")," - this will serve as the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),"."),(0,i.kt)("li",{parentName:"ul"},"Obtaining a ",(0,i.kt)("inlineCode",{parentName:"li"},"secret key")," that will be used to get our ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,i.kt)("li",{parentName:"ul"},"Generating the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"secret key"),"."),(0,i.kt)("li",{parentName:"ul"},"Add your ",(0,i.kt)("inlineCode",{parentName:"li"},"client id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client secret")," keys to your ",(0,i.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Project"),"."),(0,i.kt)("li",{parentName:"ul"},"Add the login code to your ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase-js"},"Supabase JS Client App"),".")),(0,i.kt)("h2",{id:"access-your-apple-developer-account"},"Access your Apple Developer account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com"},"developer.apple.com"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")," at the top right to log in.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apple Developer Portal.",src:n(13647).Z,width:"1349",height:"814"})),(0,i.kt)("h2",{id:"obtain-an-app-id"},"Obtain an App ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates, Identifiers & Profiles"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers")," at the left."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," sign in the upper left next to ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"App IDs")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,i.kt)("li",{parentName:"ul"},"Select type ",(0,i.kt)("inlineCode",{parentName:"li"},"App")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,i.kt)("li",{parentName:"ul"},"Fill out your app information:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"App description."),(0,i.kt)("li",{parentName:"ul"},'Bundle ID (Apple recommends reverse-domain name style, so if your domain is acme.com and your app is called roadrunner, use: "com.acme.roadrunner").'),(0,i.kt)("li",{parentName:"ul"},"Scroll down and check ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign In With Apple"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Register")," at the top right.")))),(0,i.kt)("h2",{id:"obtain-a-services-id"},"Obtain a Services ID"),(0,i.kt)("p",null,"This will serve as the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," when you make API calls to authenticate the user."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates, Identifiers & Profiles"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers")," at the left."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," sign in the upper left next to ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Services IDs")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,i.kt)("li",{parentName:"ul"},"Fill out your information:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"App description."),(0,i.kt)("li",{parentName:"ul"},'Bundle ID (you can\'t use the same Bundle ID from the previous step, but you can just add something to the beginning, such as "app." to make it app.com.acme.roadrunner").'),(0,i.kt)("li",{parentName:"ul"},"SAVE THIS ID -- this ID will become your ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," later."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Register")," at the top right.")))),(0,i.kt)("h2",{id:"find-your-callback-url"},"Find your callback URL"),(0,i.kt)("p",null,"The next step requires a callback URL, which looks like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://<project-ref>.supabase.co/auth/v1/callback")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your ",(0,i.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Project Dashboard"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," icon at the bottom of the left sidebar."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"API")," in the list."),(0,i.kt)("li",{parentName:"ul"},"Under Config / URL you'll find your API URL, you can click ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy")," to copy it to the clipboard."),(0,i.kt)("li",{parentName:"ul"},"Now just add ",(0,i.kt)("inlineCode",{parentName:"li"},"/auth/v1/callback")," to the end of that to get your full ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth Redirect URI"),".")),(0,i.kt)("video",{width:"99%",muted:!0,playsInline:!0,controls:"true"},(0,i.kt)("source",{src:"/docs/videos/api/api-url-and-key.mp4",type:"video/mp4",muted:!0,playsInline:!0})),(0,i.kt)("h2",{id:"configure-your-services-id"},"Configure your Services ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers"),", click on your newly-created Services ID."),(0,i.kt)("li",{parentName:"ul"},"Check the box next to ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign In With Apple")," to enable it."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure")," to the right."),(0,i.kt)("li",{parentName:"ul"},"Make sure your newly created Bundle ID is selected under ",(0,i.kt)("inlineCode",{parentName:"li"},"Primary App ID")),(0,i.kt)("li",{parentName:"ul"},"Add your domain to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Domains and Subdomains")," box (do not add ",(0,i.kt)("inlineCode",{parentName:"li"},"https://"),", just add the domain)."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Return URLs")," box, type the callback URL of your app which you found in the previous step and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Next")," at the bottom right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Done")," at the bottom."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," at the top right.")),(0,i.kt)("h2",{id:"download-your-secret-key"},"Download your secret key"),(0,i.kt)("p",null,"Now you'll need to download a ",(0,i.kt)("inlineCode",{parentName:"p"},"secret key")," file from Apple that will be used to generate your ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates, Identifiers & Profiles"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Keys")," at the left."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," sign in the upper left next to ",(0,i.kt)("inlineCode",{parentName:"li"},"Keys"),"."),(0,i.kt)("li",{parentName:"ul"},"Enter a ",(0,i.kt)("inlineCode",{parentName:"li"},"Key Name"),"."),(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign In with Apple"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure")," to the right."),(0,i.kt)("li",{parentName:"ul"},"Select your newly-created Services ID from the dropdown selector."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Continue")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Register")," at the top right."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Download")," at the top right."),(0,i.kt)("li",{parentName:"ul"},'Save the downloaded file -- this contains your "secret key" that will be used to generate your ',(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Done")," at the top right.")),(0,i.kt)("h2",{id:"generate-a-client_secret"},"Generate a ",(0,i.kt)("inlineCode",{parentName:"h2"},"client_secret")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"secret key")," you downloaded is used to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," string you'll need to authenticate your users."),(0,i.kt)("p",null,"According to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/signinwithapplerestapi/generate_and_validate_tokens"},"Apple Docs")," it needs to be a JWT\ntoken encrypted using the Elliptic Curve Digital Signature Algorithm (ECDSA) with the P-256 curve and the SHA-256 hash algorithm."),(0,i.kt)("p",null,"At this time, the easiest way to generate this JWT token is with ",(0,i.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/"},"Ruby"),".\nIf you don't have Ruby installed, you can ",(0,i.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/downloads"},"Download Ruby Here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Ruby (or check to make sure it's installed on your system)."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jwt/ruby-jwt"},"ruby-jwt"),"."),(0,i.kt)("li",{parentName:"ul"},"From the command line, run: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo gem install jwt"),".")),(0,i.kt)("p",null,"Create the script below using a text editor: ",(0,i.kt)("inlineCode",{parentName:"p"},"secret_gen.rb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'require "jwt"\n\nkey_file = "Path to the private key"\nteam_id = "Your Team ID"\nclient_id = "The Service ID of the service you created"\nkey_id = "The Key ID of the private key"\n\nvalidity_period = 180 # In days. Max 180 (6 months) according to Apple docs.\n\nprivate_key = OpenSSL::PKey::EC.new IO.read key_file\n\ntoken = JWT.encode(\n    {\n        iss: team_id,\n        iat: Time.now.to_i,\n        exp: Time.now.to_i + 86400 * validity_period,\n        aud: "https://appleid.apple.com",\n        sub: client_id\n    },\n    private_key,\n    "ES256",\n    header_fields=\n    {\n        kid: key_id\n    }\n)\nputs token\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"secret_gen.rb")," file:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_file"),' = "Path to the private key you downloaded from Apple". It should look like this: ',(0,i.kt)("inlineCode",{parentName:"li"},"AuthKey_XXXXXXXXXX.p8"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team_id"),' = "Your Team ID". This is found at the top right of the Apple Developer site (next to your name).'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),' = "The Service ID of the service you created". This is the ',(0,i.kt)("inlineCode",{parentName:"li"},"Services ID")," you created in the above step ",(0,i.kt)("inlineCode",{parentName:"li"},"Obtain a Services ID"),". If you've lost this ID, you can find it in the Apple Developer Site:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates, Identifiers & Profiles"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Identifiers")," at the left."),(0,i.kt)("li",{parentName:"ul"},"At the top right drop-down, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Services IDs"),"."),(0,i.kt)("li",{parentName:"ul"},"Find your Identifier in the list (i.e. app.com.acme.roadrunner)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_id"),' = "The Key ID of the private key". This can be found in the name of your downloaded secret file (For a file named ',(0,i.kt)("inlineCode",{parentName:"li"},"AuthKey_XXXXXXXXXX.p8")," your key_id is ",(0,i.kt)("inlineCode",{parentName:"li"},"XXXXXXXXXX"),"). If you've lost this ID, you can find it in the Apple Developer Site:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates, Identifiers & Profiles"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Keys")," at the left."),(0,i.kt)("li",{parentName:"ul"},"Click on your newly-created key in the list."),(0,i.kt)("li",{parentName:"ul"},"Look under ",(0,i.kt)("inlineCode",{parentName:"li"},"Key ID")," to find your key_id.")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"From the command line, run: ",(0,i.kt)("inlineCode",{parentName:"li"},"ruby secret_gen.rb > client_secret.txt"),"."),(0,i.kt)("li",{parentName:"ol"},"Your ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," is now stored in this ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret.txt")," file.")),(0,i.kt)("h2",{id:"add-your-oauth-credentials-to-supabase"},"Add your OAuth credentials to Supabase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your ",(0,i.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"Supabase Dashboard"),"."),(0,i.kt)("li",{parentName:"ul"},"In the left sidebar, click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authentication")," icon (near the top)."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," from the list to go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authentication Settings")," page."),(0,i.kt)("li",{parentName:"ul"},"Enter the final (hosted) URL of your app under ",(0,i.kt)("inlineCode",{parentName:"li"},"Site URL")," (this is important)."),(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"External OAuth Providers")," turn ",(0,i.kt)("inlineCode",{parentName:"li"},"Apple Enabled")," to ON."),(0,i.kt)("li",{parentName:"ul"},"Enter your ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," saved in the previous steps."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,i.kt)("h2",{id:"add-login-code-to-your-client-app"},"Add login code to your client app"),(0,i.kt)("p",null,"When your user signs in, call ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/javascript/auth-signinwithoauth"},"signInWithOAuth()")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"apple")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function signInWithApple() {\n  const { data, error } = await supabase.auth.signInWithOAuth({\n    provider: 'apple',\n  })\n}\n")),(0,i.kt)("p",null,"When your user signs out, call ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/javascript/auth-signout"},"signOut()")," to remove them from the browser session and any objects from localStorage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function signout() {\n  const { error } = await supabase.auth.signOut()\n}\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com"},"Apple Developer Account"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ruby-lang.org/en/"},"Ruby")," Docs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jwt/ruby-jwt"},"ruby-jwt")," library."),(0,i.kt)("li",{parentName:"ul"},"Thanks to ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@janakda"},"Janak Amarasena")," who did all the heavy lifting in ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/identity-beyond-borders/how-to-configure-sign-in-with-apple-77c61e336003"},"How to configure Sign In with Apple"),".")))}d.isMDXComponent=!0},13647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apple-developer-portal-e0636a1b788a7923dd080edca3c3d35f.png"}}]);