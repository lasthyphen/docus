"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[26567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return t?a.createElement(c,l(l({ref:n},u),{},{components:t})):a.createElement(c,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},23773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={id:"about",title:"GoTrue Auth Server",description:"An SWT based API for managing users and issuing SWT tokens"},l=void 0,o={unversionedId:"gotrue/server/about",id:"gotrue/server/about",title:"GoTrue Auth Server",description:"An SWT based API for managing users and issuing SWT tokens",source:"@site/docs/gotrue/server/about.md",sourceDirName:"gotrue/server",slug:"/gotrue/server/about",permalink:"/docs/gotrue/server/about",draft:!1,editUrl:"https://github.com/docs/gotrue/server/about.md",tags:[],version:"current",frontMatter:{id:"about",title:"GoTrue Auth Server",description:"An SWT based API for managing users and issuing SWT tokens"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Top-Level",id:"top-level",level:3},{value:"API",id:"api",level:3},{value:"Database",id:"database",level:3},{value:"Logging",id:"logging",level:3},{value:"JSON Web Tokens (JWT)",id:"json-web-tokens-jwt",level:3},{value:"External Authentication Providers",id:"external-authentication-providers",level:3},{value:"E-Mail",id:"e-mail",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"<strong>GET /settings</strong>",id:"get-settings",level:3},{value:"<strong>POST /signup</strong>",id:"post-signup",level:3},{value:"<strong>POST /invite</strong>",id:"post-invite",level:3},{value:"<strong>POST /verify</strong>",id:"post-verify",level:3},{value:"<strong>GET /verify</strong>",id:"get-verify",level:3},{value:"<strong>POST /magiclink</strong>",id:"post-magiclink",level:3},{value:"<strong>POST /recover</strong>",id:"post-recover",level:3},{value:"<strong>POST /token</strong>",id:"post-token",level:3},{value:"<strong>GET /user</strong>",id:"get-user",level:3},{value:"<strong>PUT /user</strong>",id:"put-user",level:3},{value:"<strong>POST /admin/users</strong>",id:"post-adminusers",level:3},{value:"<strong>GET /admin/users/{user_id}</strong>",id:"get-adminusersuser_id",level:3},{value:"<strong>PUT /admin/users/{user_id}</strong>",id:"put-adminusersuser_id",level:3},{value:"<strong>POST /admin/generate_link</strong>",id:"post-admingenerate_link",level:3},{value:"<strong>DELETE /admin/users/{user_id}</strong>",id:"delete-adminusersuser_id",level:3},{value:"<strong>POST /logout</strong>",id:"post-logout",level:3},{value:"<strong>GET /authorize</strong>",id:"get-authorize",level:3},{value:"<strong>GET /callback</strong>",id:"get-callback",level:3},{value:"Pre-built",id:"pre-built",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GoTrue is a small open-source API written in golang, that can act as a self-standing\nAPI service for handling user registration and authentication for JAM projects."),(0,r.kt)("p",null,"It's based on OAuth2 and JWT and will handle user signup, authentication and custom\nuser data."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You may configure GoTrue using either a configuration file named ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),",\nenvironment variables, or a combination of both. Environment variables are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"GOTRUE_"),", and will always have precedence over values provided via file."),(0,r.kt)("h3",{id:"top-level"},"Top-Level"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOTRUE_SITE_URL=https://example.netlify.com/\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SITE_URL")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The base URL your site is located at. Currently used in combination with other settings to construct URLs used in emails."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OPERATOR_TOKEN")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("em",{parentName:"p"},"Multi-instance mode only")),(0,r.kt)("p",null,"The shared secret with an operator (usually Netlify) for this microservice. Used to verify requests have been proxied through the operator and\nthe payload values can be trusted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DISABLE_SIGNUP")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("p",null,"When signup is disabled the only way to create new users is through invites. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", all signups enabled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GOTRUE_RATE_LIMIT_HEADER")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Header on which to rate limit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/token")," endpoint."),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOTRUE_API_HOST=localhost\nPORT=9999\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"API_HOST")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Hostname to listen on."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," (no prefix) / ",(0,r.kt)("inlineCode",{parentName:"p"},"API_PORT")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Port number to listen on. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"API_ENDPOINT")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("em",{parentName:"p"},"Multi-instance mode only")),(0,r.kt)("p",null,"Controls what endpoint Netlify can access this API on."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"REQUEST_ID_HEADER")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"If you wish to inherit a request ID from the incoming request, specify the name in this value."),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOTRUE_DB_DRIVER=mysql\nDATABASE_URL=root@localhost/gotrue\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DB_DRIVER")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"Chooses what dialect of database you want. Must be ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," (no prefix) / ",(0,r.kt)("inlineCode",{parentName:"p"},"DB_DATABASE_URL")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"Connection string for the database."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DB_NAMESPACE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Adds a prefix to all table names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Migrations Note")),(0,r.kt)("p",null,"Migrations are not applied automatically, so you will need to run them after\nyou've built gotrue."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If built locally: ",(0,r.kt)("inlineCode",{parentName:"li"},"./gotrue migrate")),(0,r.kt)("li",{parentName:"ul"},"Using Docker: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker run --rm gotrue gotrue migrate"))),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LOG_LEVEL=debug # available without GOTRUE prefix (exception)\nGOTRUE_LOG_FILE=/var/log/go/gotrue.log\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Controls what log levels are output. Choose from ",(0,r.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LOG_FILE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"If you wish logs to be written to a file, set ",(0,r.kt)("inlineCode",{parentName:"p"},"log_file")," to a valid file path."),(0,r.kt)("h3",{id:"json-web-tokens-jwt"},"JSON Web Tokens (JWT)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOTRUE_JWT_SECRET=supersecretvalue\nGOTRUE_JWT_EXP=3600\nGOTRUE_JWT_AUD=netlify\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The secret used to sign JWT tokens with."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWT_EXP")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"How long tokens are valid for, in seconds. Defaults to 3600 (1 hour)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWT_AUD")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The default JWT audience. Use audiences to group users."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWT_ADMIN_GROUP_NAME")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The name of the admin group (if enabled). Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWT_DEFAULT_GROUP_NAME")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The default group to assign all new users to."),(0,r.kt)("h3",{id:"external-authentication-providers"},"External Authentication Providers"),(0,r.kt)("p",null,"We support ",(0,r.kt)("inlineCode",{parentName:"p"},"bitbucket"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"google")," for external authentication.\nUse the names as the keys underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," to configure each separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOTRUE_EXTERNAL_GITHUB_CLIENT_ID=myappclientid\nGOTRUE_EXTERNAL_GITHUB_SECRET=clientsecretvaluessssh\n")),(0,r.kt)("p",null,"No external providers are required, but you must provide the required values if you choose to enable any."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_X_ENABLED")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("p",null,"Whether this external provider is enabled or not"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_X_CLIENT_ID")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The OAuth2 Client ID registered with the external provider."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_X_SECRET")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The OAuth2 Client Secret provided by the external provider when you registered."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_X_REDIRECT_URI")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required for gitlab")),(0,r.kt)("p",null,"The URI a OAuth2 provider will redirect to with the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," values."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_X_URL")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The base URL used for constructing the URLs to request authorization and access tokens. Used by ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab")," only. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gitlab.com"),"."),(0,r.kt)("h3",{id:"e-mail"},"E-Mail"),(0,r.kt)("p",null,"Sending email is not required, but highly recommended for password recovery.\nIf enabled, you must provide the required values below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GOTRUE_SMTP_HOST=smtp.mandrillapp.com\nGOTRUE_SMTP_PORT=587\nGOTRUE_SMTP_USER=smtp-delivery@example.com\nGOTRUE_SMTP_PASS=correcthorsebatterystaple\nGOTRUE_SMTP_ADMIN_EMAIL=support@example.com\nGOTRUE_MAILER_SUBJECTS_CONFIRMATION="Please confirm"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_ADMIN_EMAIL")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"From")," email address for all emails sent."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_HOST")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The mail server hostname to send emails through."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_PORT")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("strong",{parentName:"p"},"required")),(0,r.kt)("p",null,"The port number to connect to the mail server on."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_USER")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"If the mail server requires authentication, the username to use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_PASS")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"If the mail server requires authentication, the password to use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SMTP_MAX_FREQUENCY")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Controls the minimum amount of time that must pass before sending another signup confirmation or password reset email. The value is the number of seconds. Defaults to 900 (15 minutes)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_AUTOCONFIRM")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("p",null,"If you do not require email confirmation, you may set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SECURE_EMAIL_CHANGE_ENABLED")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", send an email to both the user's current and new email with a confirmation link, otherwise send an email with confirmation link only to new email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_URLPATHS_INVITE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to use in the user invite email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_URLPATHS_CONFIRMATION")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to use in the signup confirmation email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_URLPATHS_RECOVERY")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to use in the password reset email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_URLPATHS_EMAIL_CHANGE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to use in the email change confirmation email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SUBJECTS_INVITE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Email subject to use for user invite. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"You have been invited"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SUBJECTS_CONFIRMATION")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Email subject to use for signup confirmation. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirm Your Signup"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SUBJECTS_RECOVERY")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Email subject to use for password reset. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"Reset Your Password"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SUBJECTS_MAGIC_LINK")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Email subject to use for magic link email. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"Your Magic Link"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_SUBJECTS_EMAIL_CHANGE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Email subject to use for email change confirmation. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirm Email Change"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_TEMPLATES_INVITE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to an email template to use when inviting a user.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SiteURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmationURL")," variables are available."),(0,r.kt)("p",null,"Default Content (if template is unavailable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h2>You have been invited</h2>\n\n<p>\n  You have been invited to create a user on {{ .SiteURL }}. Follow this link to\n  accept the invite:\n</p>\n<p><a href="{{ .ConfirmationURL }}">Accept the invite</a></p>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_TEMPLATES_CONFIRMATION")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to an email template to use when confirming a signup.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SiteURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmationURL")," variables are available."),(0,r.kt)("p",null,"Default Content (if template is unavailable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h2>Confirm your signup</h2>\n\n<p>Follow this link to confirm your user:</p>\n<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_TEMPLATES_RECOVERY")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to an email template to use when resetting a password.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SiteURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmationURL")," variables are available."),(0,r.kt)("p",null,"Default Content (if template is unavailable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h2>Reset Password</h2>\n\n<p>Follow this link to reset the password for your user:</p>\n<p><a href="{{ .ConfirmationURL }}">Reset Password</a></p>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_TEMPLATES_MAGIC_LINK")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to an email template to use when sending magic link.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SiteURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmationURL")," variables are available."),(0,r.kt)("p",null,"Default Content (if template is unavailable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h2>Magic Link</h2>\n\n<p>Follow this link to login:</p>\n<p><a href="{{ .ConfirmationURL }}">Log In</a></p>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAILER_TEMPLATES_EMAIL_CHANGE")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"URL path to an email template to use when confirming the change of an email address.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SiteURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NewEmail"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmationURL")," variables are available."),(0,r.kt)("p",null,"Default Content (if template is unavailable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h2>Confirm Change of Email</h2>\n\n<p>\n  Follow this link to confirm the update of your email from {{ .Email }} to {{\n  .NewEmail }}:\n</p>\n<p><a href="{{ .ConfirmationURL }}">Change Email</a></p>\n')),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"GoTrue exposes the following endpoints:"),(0,r.kt)("h3",{id:"get-settings"},(0,r.kt)("strong",{parentName:"h3"},"GET /settings")),(0,r.kt)("p",null,"Returns the publicly available settings for this gotrue instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "external": {\n    "bitbucket": true,\n    "github": true,\n    "gitlab": true,\n    "google": true\n  },\n  "disable_signup": false,\n  "autoconfirm": false\n}\n')),(0,r.kt)("h3",{id:"post-signup"},(0,r.kt)("strong",{parentName:"h3"},"POST /signup")),(0,r.kt)("p",null,"Register a new user with an email and password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "email@example.com",\n  "password": "secret"\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "email": "email@example.com",\n  "confirmation_sent_at": "2016-05-15T20:49:40.882805774-07:00",\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"post-invite"},(0,r.kt)("strong",{parentName:"h3"},"POST /invite")),(0,r.kt)("p",null,"Invites a new user with an email.\nThis endpoint requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"service_role")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"supabase_admin")," JWT set as an Auth Bearer header:"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'headers: {\n  "Authorization" : "Bearer eyJhbGciOiJI...M3A90LCkxxtX9oNP9KZO"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "email@example.com"\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "email": "email@example.com",\n  "confirmation_sent_at": "2016-05-15T20:49:40.882805774-07:00",\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00",\n  "invited_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"post-verify"},(0,r.kt)("strong",{parentName:"h3"},"POST /verify")),(0,r.kt)("p",null,"Verify a registration or a password recovery. Type can be ",(0,r.kt)("inlineCode",{parentName:"p"},"signup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"invite"),"\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," is a token returned from either ",(0,r.kt)("inlineCode",{parentName:"p"},"/signup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/recover"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "signup",\n  "token": "confirmation-code-delivered-in-email"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"password")," is required for signup verification if no existing password exists."),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jwt-token-representing-the-user",\n  "token_type": "bearer",\n  "expires_in": 3600,\n  "refresh_token": "a-refresh-token",\n  "type": "signup | recovery | invite"\n}\n')),(0,r.kt)("h3",{id:"get-verify"},(0,r.kt)("strong",{parentName:"h3"},"GET /verify")),(0,r.kt)("p",null,"Verify a registration or a password recovery. Type can be ",(0,r.kt)("inlineCode",{parentName:"p"},"signup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"magiclink")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"invite"),"\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," is a token returned from either ",(0,r.kt)("inlineCode",{parentName:"p"},"/signup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/recover")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/magiclink"),"."),(0,r.kt)("p",null,"query params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "signup",\n  "token": "confirmation-code-delivered-in-email"\n}\n')),(0,r.kt)("p",null,"User will be logged in and redirected to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"SITE_URL/#access_token=jwt-token-representing-the-user&token_type=bearer&expires_in=3600&refresh_token=a-refresh-token&type=invite\n")),(0,r.kt)("p",null,"Your app should detect the query params in the fragment and use them to set the session (supabase-js does this automatically)"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," param to redirect the user to a password set form in the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"invite")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery"),",\nor show an account confirmed/welcome message in the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"signup"),", or direct them to some additional onboarding flow"),(0,r.kt)("h3",{id:"post-magiclink"},(0,r.kt)("strong",{parentName:"h3"},"POST /magiclink")),(0,r.kt)("p",null,"Magic Link. Will deliver a link (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/verify?type=magiclink&token=fgtyuf68ddqdaDd"),") to the user based on\nemail address which they can use to redeem an access_token."),(0,r.kt)("p",null,"By default Magic Links can only be sent once every 60 seconds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "email@example.com"\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("p",null,"when clicked the magic link will redirect the user to ",(0,r.kt)("inlineCode",{parentName:"p"},"<SITE_URL>#access_token=x&refresh_token=y&expires_in=z&token_type=bearer&type=magiclink")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"/verify")," above)"),(0,r.kt)("h3",{id:"post-recover"},(0,r.kt)("strong",{parentName:"h3"},"POST /recover")),(0,r.kt)("p",null,"Password recovery. Will deliver a password recovery mail to the user based on\nemail address."),(0,r.kt)("p",null,"By default recovery links can only be sent once every 60 seconds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "email@example.com"\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("h3",{id:"post-token"},(0,r.kt)("strong",{parentName:"h3"},"POST /token")),(0,r.kt)("p",null,"This is an OAuth2 endpoint that currently implements\nthe password and refresh_token grant types"),(0,r.kt)("p",null,"query params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"?grant_type=password\n")),(0,r.kt)("p",null,"body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "name@domain.com",\n  "password": "somepassword"\n}\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,"query params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"grant_type=refresh_token\n")),(0,r.kt)("p",null,"body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "refresh_token": "a-refresh-token"\n}\n')),(0,r.kt)("p",null,"Once you have an access token, you can access the methods requiring authentication\nby settings the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer YOUR_ACCESS_TOKEN_HERE")," header."),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jwt-token-representing-the-user",\n  "token_type": "bearer",\n  "expires_in": 3600,\n  "refresh_token": "a-refresh-token"\n}\n')),(0,r.kt)("h3",{id:"get-user"},(0,r.kt)("strong",{parentName:"h3"},"GET /user")),(0,r.kt)("p",null,"Get the JSON object for the logged in user (requires authentication)"),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "email": "email@example.com",\n  "confirmation_sent_at": "2016-05-15T20:49:40.882805774-07:00",\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"put-user"},(0,r.kt)("strong",{parentName:"h3"},"PUT /user")),(0,r.kt)("p",null,"Update a user (Requires authentication). Apart from changing email/password, this\nmethod can be used to set custom user data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "new-email@example.com",\n  "password": "new-password",\n  "data": {\n    "key": "value",\n    "number": 10,\n    "admin": false\n  }\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "email": "email@example.com",\n  "confirmation_sent_at": "2016-05-15T20:49:40.882805774-07:00",\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"post-adminusers"},(0,r.kt)("strong",{parentName:"h3"},"POST /admin/users")),(0,r.kt)("p",null,"Creates a new user. Requires your ",(0,r.kt)("inlineCode",{parentName:"p"},"service_role")," API key and thus should only be\nused in secure server-side environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "new-email@example.com",\n  "password": "new-password",\n  "data": {\n    "key": "value",\n    "number": 10,\n    "admin": false\n  }\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "aud": "authenticated",\n  "role": "authenticated",\n  "email": "email@example.com",\n  "app_metadata": {\n    "provider": "email"\n  },\n  "user_metadata": null,\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"get-adminusersuser_id"},(0,r.kt)("strong",{parentName:"h3"},"GET /admin/users/{user_id}")),(0,r.kt)("p",null,"Gets a user. Requires your ",(0,r.kt)("inlineCode",{parentName:"p"},"service_role")," API key and thus should only be used\nin secure server-side environments."),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "aud": "authenticated",\n  "role": "authenticated",\n  "email": "email@example.com",\n  "app_metadata": {\n    "provider": "email"\n  },\n  "user_metadata": {},\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"put-adminusersuser_id"},(0,r.kt)("strong",{parentName:"h3"},"PUT /admin/users/{user_id}")),(0,r.kt)("p",null,"Updates a user. Requires your ",(0,r.kt)("inlineCode",{parentName:"p"},"service_role")," API key and thus should only be\nused in secure server-side environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "email@example.com",\n  "password": "updated-password",\n  "data": {\n    "key": "updated-value",\n    "number": 10,\n    "admin": false\n  }\n}\n')),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "11111111-2222-3333-4444-5555555555555",\n  "aud": "authenticated",\n  "role": "authenticated",\n  "email": "email@example.com",\n  "app_metadata": {\n    "provider": "email"\n  },\n  "user_metadata": {},\n  "created_at": "2016-05-15T19:53:12.368652374-07:00",\n  "updated_at": "2016-05-15T19:53:12.368652374-07:00"\n}\n')),(0,r.kt)("h3",{id:"post-admingenerate_link"},(0,r.kt)("strong",{parentName:"h3"},"POST /admin/generate_link")),(0,r.kt)("p",null,"Returns the corresponding email action link based on the type specified. The response also contains the query params of the action link as separate JSON fields for convenience (along with the email OTP from which the corresponding token is generated)."),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "action_link": "http://localhost:9999/verify?token=TOKEN&type=TYPE&redirect_to=REDIRECT_URL",\n  "email_otp": "EMAIL_OTP",\n  "hashed_token": "TOKEN",\n  "verification_type": "TYPE",\n  "redirect_to": "REDIRECT_URL",\n  ...\n}\n')),(0,r.kt)("h3",{id:"delete-adminusersuser_id"},(0,r.kt)("strong",{parentName:"h3"},"DELETE /admin/users/{user_id}")),(0,r.kt)("p",null,"Deletes a user. Requires your ",(0,r.kt)("inlineCode",{parentName:"p"},"service_role")," API key and thus should only be\nused in secure server-side environments."),(0,r.kt)("h3",{id:"post-logout"},(0,r.kt)("strong",{parentName:"h3"},"POST /logout")),(0,r.kt)("p",null,"Logout a user (Requires authentication)."),(0,r.kt)("p",null,"This will revoke all refresh tokens for the user. Remember that the JWT tokens\nwill still be valid for stateless auth until they expires."),(0,r.kt)("h3",{id:"get-authorize"},(0,r.kt)("strong",{parentName:"h3"},"GET /authorize")),(0,r.kt)("p",null,"Get access_token from external oauth provider"),(0,r.kt)("p",null,"query params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"provider=google | bitbucket | github | gitlab\n")),(0,r.kt)("p",null,"Redirects to provider and then to ",(0,r.kt)("inlineCode",{parentName:"p"},"/callback")),(0,r.kt)("h3",{id:"get-callback"},(0,r.kt)("strong",{parentName:"h3"},"GET /callback")),(0,r.kt)("p",null,"External provider should redirect to here"),(0,r.kt)("p",null,"Redirects to ",(0,r.kt)("inlineCode",{parentName:"p"},"<GOTRUE_SITE_URL>#access_token=<access_token>&refresh_token=<refresh_token>&expires_in=3600&provider=<provider_name>")),(0,r.kt)("h2",{id:"pre-built"},"Pre-built"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/repository/docker/supabase/gotrue"},"Docker"))))}d.isMDXComponent=!0}}]);