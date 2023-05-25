"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[63079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"docker",title:"Self-hosting with Docker",description:"How to configure and deploy Supabase.",sidebar_label:"Docker"},i=void 0,l={unversionedId:"guides/hosting/docker",id:"guides/hosting/docker",title:"Self-hosting with Docker",description:"How to configure and deploy Supabase.",source:"@site/docs/guides/hosting/docker.mdx",sourceDirName:"guides/hosting",slug:"/guides/hosting/docker",permalink:"/docs/guides/hosting/docker",draft:!1,editUrl:"https://github.com/docs/guides/hosting/docker.mdx",tags:[],version:"current",frontMatter:{id:"docker",title:"Self-hosting with Docker",description:"How to configure and deploy Supabase.",sidebar_label:"Docker"}},s={},p=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Get the code",id:"get-the-code",level:3},{value:"Securing your setup",id:"securing-your-setup",level:2},{value:"Generate API Keys",id:"generate-api-keys",level:3},{value:"Update Secrets",id:"update-secrets",level:3},{value:"Securing the Dashboard",id:"securing-the-dashboard",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Using an external database",id:"using-an-external-database",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Docker is the easiest way to get started with self-hosted Supabase."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"You need the following installed in your system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git"))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"get-the-code"},"Get the code"),(0,r.kt)("p",null,"Checkout the docker directory in the Supabase repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Get the code\ngit clone --depth 1 https://github.com/supabase/supabase\n\n# Go to the docker folder\ncd supabase/docker\n\n# Copy the fake env vars\ncp .env.example .env\n\n# Start\ndocker-compose up\n")),(0,r.kt)("p",null,"Now visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to start using Supabase Studio."),(0,r.kt)("h2",{id:"securing-your-setup"},"Securing your setup"),(0,r.kt)("p",null,"While we provided you with some example secrets for getting started, you should NEVER deploy your Supabase setup using the defaults we have provided."),(0,r.kt)("p",null,"Please follow these steps to secure your Docker setup. We ",(0,r.kt)("a",{parentName:"p",href:"../../guides/hosting/overview#managing-your-secrets"},"strongly recommend")," using a secrets manager when deploying to production."),(0,r.kt)("h3",{id:"generate-api-keys"},"Generate API Keys"),(0,r.kt)("p",null,"Use your ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"anon")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," API keys using the ",(0,r.kt)("a",{parentName:"p",href:"../../guides/hosting/overview#api-keys"},"JWT generator"),"."),(0,r.kt)("p",null,"Replace the values in these files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ANON_KEY")," - replace with an ",(0,r.kt)("inlineCode",{parentName:"li"},"anon")," key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SERVICE_ROLE_KEY")," - replace with a ",(0,r.kt)("inlineCode",{parentName:"li"},"service")," key"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volumes/api/kong.yml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anon")," - replace with an ",(0,r.kt)("inlineCode",{parentName:"li"},"anon")," key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service_role")," - replace with a ",(0,r.kt)("inlineCode",{parentName:"li"},"service")," key")))),(0,r.kt)("h3",{id:"update-secrets"},"Update Secrets"),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file with your own secrets. In particular, these are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POSTGRES_PASSWORD"),": the password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres")," role."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JWT_SECRET"),": used by PostgREST and GoTrue, among others."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SITE_URL"),": the base URL of your site."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SMTP_*"),": mail server credentials. You can use any SMTP server.")),(0,r.kt)("h3",{id:"securing-the-dashboard"},"Securing the Dashboard"),(0,r.kt)("p",null,"The Docker setup doesn't include a management database for managing users and logins. If you plan to deploy the Studio to the web we suggest you put it behind a web proxy with Basic Auth or hide it behind a VPN."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Each system can be ",(0,r.kt)("a",{parentName:"p",href:"../../guides/hosting/overview#configuration"},"configured")," to suit your particular use-case."),(0,r.kt)("p",null,"To keep the setup simple, we made some choices that may not be optimal for production:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the database is in the same machine as the servers"),(0,r.kt)("li",{parentName:"ul"},"Storage uses the filesystem backend instead of S3"),(0,r.kt)("li",{parentName:"ul"},"Auth should be configured with a production-ready SMTP server")),(0,r.kt)("h3",{id:"using-an-external-database"},"Using an external database"),(0,r.kt)("p",null,"We strongly ",(0,r.kt)("a",{parentName:"p",href:"../../guides/hosting/overview#managing-your-database"},"recommend")," that you decouple your database from ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," before deploying.\nThe middleware will run with any PostgreSQL database that has logical replication enabled. The following environment variables should be updated\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to point to your external database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"POSTGRES_PASSWORD=your-super-secret-and-long-postgres-password\n\nPOSTGRES_HOST=db\nPOSTGRES_DB=postgres\nPOSTGRES_USER=postgres\nPOSTGRES_PORT=5432\n")),(0,r.kt)("p",null,"Once you have done this, you can safely comment out the ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file, and remove any instances where the services ",(0,r.kt)("inlineCode",{parentName:"p"},"depends_on")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," image."),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("p",null,"See the following guides to deploy Docker Compose setup using your preferred tool and platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/swarm/stack-deploy/"},"Docker Swarm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/containers/deploy-applications-on-amazon-ecs-using-docker-compose/"},"AWS Fargate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/"},"Using Kompose for Kubernetes"))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Got a question? ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase/discussions"},"Ask here"),"."),(0,r.kt)("li",{parentName:"ul"},"Sign in: ",(0,r.kt)("a",{parentName:"li",href:"https://app.supabase.com"},"app.supabase.com"))))}d.isMDXComponent=!0}}]);