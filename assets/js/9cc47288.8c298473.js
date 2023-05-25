"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[41494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const s={id:"authsignal",title:"Authsignal",description:"Add an MFA step after sign-in. Use Supabase Auth to sign in with email and password and Authsignal to initiate an Authenticator App challenge."},o=void 0,r={unversionedId:"guides/integrations/authsignal",id:"guides/integrations/authsignal",title:"Authsignal",description:"Add an MFA step after sign-in. Use Supabase Auth to sign in with email and password and Authsignal to initiate an Authenticator App challenge.",source:"@site/docs/guides/integrations/authsignal.mdx",sourceDirName:"guides/integrations",slug:"/guides/integrations/authsignal",permalink:"/docs/guides/integrations/authsignal",draft:!1,editUrl:"https://github.com/docs/guides/integrations/authsignal.mdx",tags:[],version:"current",frontMatter:{id:"authsignal",title:"Authsignal",description:"Add an MFA step after sign-in. Use Supabase Auth to sign in with email and password and Authsignal to initiate an Authenticator App challenge."}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Step 1: Configuring an Authsignal tenant",id:"step-1-configuring-an-authsignal-tenant",level:2},{value:"Step 2: Creating a Supabase project",id:"step-2-creating-a-supabase-project",level:2},{value:"Step 3: Building a Next.js app",id:"step-3-building-a-nextjs-app",level:2},{value:"Step 4: Installing dependencies",id:"step-4-installing-dependencies",level:2},{value:"Step 5: Initializing the Authsignal client",id:"step-5-initializing-the-authsignal-client",level:2},{value:"Step 6: Managing session data in cookies",id:"step-6-managing-session-data-in-cookies",level:2},{value:"Step 7: Building the UI",id:"step-7-building-the-ui",level:2},{value:"Step 8: Adding the API routes",id:"step-8-adding-the-api-routes",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide shows how to integrate ",(0,i.kt)("a",{parentName:"p",href:"https://www.authsignal.com/"},"Authsignal")," with ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase")," in order to add an MFA step after sign-in."),(0,i.kt)("p",null,"The user flow is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user enters their email and password to sign in"),(0,i.kt)("li",{parentName:"ol"},"If the user has set up MFA, they're prompted to complete an MFA challenge (via Authenticator App) in order to complete sign-in"),(0,i.kt)("li",{parentName:"ol"},"If the user has not set up MFA, they're signed in immediately and will see a button to set up MFA")),(0,i.kt)("p",null,"The approach uses a temporary encrypted cookie to ensure that the Supabase auth cookies (",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),") are only set if the MFA challenge was successful. Session data is encrypted using ",(0,i.kt)("a",{parentName:"p",href:"https://hapi.dev/family/iron"},"@hapi/iron"),"."),(0,i.kt)("p",null,"The full code version of this example can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/authsignal/supabase-example"},"here"),"."),(0,i.kt)("p",null,"A live demo can be found ",(0,i.kt)("a",{parentName:"p",href:"https://authsignal-supabase-example.vercel.app"},"here"),"."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A sign-in form posts email and password to the Next.js API route ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/sign-in")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"signIn")," API route calls the Supabase client's ",(0,i.kt)("inlineCode",{parentName:"li"},"signInWithEmail")," method and gets back a session object"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"signIn")," API route then calls the Authsignal client's ",(0,i.kt)("inlineCode",{parentName:"li"},"track")," method to determine if an MFA challenge is required"),(0,i.kt)("li",{parentName:"ol"},"If a challenge is required, the ",(0,i.kt)("inlineCode",{parentName:"li"},"signIn")," API route saves the session object in a temporary encrypted cookie and redirects to Authsignal"),(0,i.kt)("li",{parentName:"ol"},"Once the challenge is completed, Authsignal redirects back to ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/callback")," which retrieves the session and sets the Supabase auth cookies"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"callback")," API route then redirects to the index page which is protected with Supabase's ",(0,i.kt)("inlineCode",{parentName:"li"},"withPageAuth")," wrapper around ",(0,i.kt)("inlineCode",{parentName:"li"},"getServerSideProps"))),(0,i.kt)("h2",{id:"step-1-configuring-an-authsignal-tenant"},"Step 1: Configuring an Authsignal tenant"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.authsignal.com"},"Authsignal Portal")," and create a new project and tenant."),(0,i.kt)("p",null,"You will also need to ",(0,i.kt)("a",{parentName:"p",href:"https://portal.authsignal.com/organisations/tenants/authenticators"},"enable at least one authenticator for your tenant")," - for example Authenticator Apps."),(0,i.kt)("p",null,"Finally, to configure the sign-in action to always challenge, go ",(0,i.kt)("a",{parentName:"p",href:"https://portal.authsignal.com/actions/signIn/rules"},"here")," and set the default action outcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"CHALLENGE")," and click save."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/authsignal/supabase-example/main/authsignal-settings.png",alt:"Authsignal settings"})),(0,i.kt)("h2",{id:"step-2-creating-a-supabase-project"},"Step 2: Creating a Supabase project"),(0,i.kt)("p",null,"From your ",(0,i.kt)("a",{parentName:"p",href:"https://app.supabase.com/"},"Supabase dashboard"),", click ",(0,i.kt)("inlineCode",{parentName:"p"},"New project"),"."),(0,i.kt)("p",null,"Enter a ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," for your Supabase project and enter or generate a secure ",(0,i.kt)("inlineCode",{parentName:"p"},"Database Password"),", then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create new project"),"."),(0,i.kt)("p",null,"Once your project is created go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication -> Settings -> Auth Providers")," and ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"Enable Email provider")," is checked and that ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm Email")," is unchecked."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/authsignal/supabase-example/main/supabase-settings.png",alt:"Supabase settings"})),(0,i.kt)("h2",{id:"step-3-building-a-nextjs-app"},"Step 3: Building a Next.js app"),(0,i.kt)("p",null,"Create a new Next.js project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app --typescript supabase-authsignal-example\ncd supabase-authsignal-example\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," file and enter the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_SUPABASE_URL=get-from-supabase-dashboard\nNEXT_PUBLIC_SUPABASE_ANON_KEY=get-from-supabase-dashboard\nAUTHSIGNAL_SECRET=get-from-authsignal-dashboard\nTEMP_TOKEN_SECRET=this-is-a-secret-value-with-at-least-32-characters\n")),(0,i.kt)("p",null,"Supabase values can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > API")," for your project."),(0,i.kt)("p",null,"Authsignal values can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > API Keys")," for your tenant."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TEMP_TOKEN_SECRET")," is used to encrypt the temporary cookie. Set it to a random 32 character length string."),(0,i.kt)("p",null,"Restart your Next.js development server to read in the new values from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,i.kt)("h2",{id:"step-4-installing-dependencies"},"Step 4: Installing dependencies"),(0,i.kt)("p",null,"Install the Supabase client and Auth helpers for Next.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @supabase/supabase-js @supabase/auth-helpers-nextjs\n")),(0,i.kt)("p",null,"Install the Authsignal Node.js client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @authsignal/node\n")),(0,i.kt)("p",null,"Finally install 2 packages to help encrypt and serialize session data in cookies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @hapi/iron cookie\nnpm install --save-dev @types/cookie\n")),(0,i.kt)("h2",{id:"step-5-initializing-the-authsignal-client"},"Step 5: Initializing the Authsignal client"),(0,i.kt)("p",null,"Add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/authsignal.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { Authsignal } from "@authsignal/node";\n\nconst secret = process.env.AUTHSIGNAL_SECRET;\n\nif (!secret) {\n  throw new Error("AUTHSIGNAL_SECRET is undefined");\n}\n\nconst redirectUrl = "http://localhost:3000/api/callback";\n\nexport const authsignal = new Authsignal({ secret, redirectUrl });\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectUrl")," here is a Next.js API route which Authsignal will redirect back to after an MFA challenge. We'll implement this below."),(0,i.kt)("h2",{id:"step-6-managing-session-data-in-cookies"},"Step 6: Managing session data in cookies"),(0,i.kt)("p",null,"Next we will add some helper functions for managing cookies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTempCookie")," encrypts and serializes the Supabase session data and sets it in a temporary cookie"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getSessionFromTempCookie")," decrypts and parses this session data back from the cookie"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAuthCookie")," sets the Supabase auth cookies (",(0,i.kt)("inlineCode",{parentName:"li"},"access_token")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh_token"),") and clears the temporary cookie")),(0,i.kt)("p",null,"Add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/cookies.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import Iron from "@hapi/iron";\nimport { Session } from "@supabase/supabase-js";\nimport { parse, serialize } from "cookie";\nimport { NextApiRequest, NextApiResponse } from "next";\n\nexport async function setTempCookie(session: Session, res: NextApiResponse) {\n  const token = await Iron.seal(session, TEMP_TOKEN_SECRET, Iron.defaults);\n\n  const cookie = serialize(TEMP_COOKIE, token, {\n    maxAge: session.expires_in,\n    httpOnly: true,\n    secure: process.env.NODE_ENV === "production",\n    path: "/",\n    sameSite: "lax",\n  });\n\n  res.setHeader("Set-Cookie", cookie);\n}\n\nexport async function getSessionFromTempCookie(\n  req: NextApiRequest\n): Promise<Session | undefined> {\n  const cookie = req.headers.cookie as string;\n\n  const cookies = parse(cookie ?? "");\n\n  const tempCookie = cookies[TEMP_COOKIE];\n\n  if (!tempCookie) {\n    return undefined;\n  }\n\n  const session = await Iron.unseal(\n    tempCookie,\n    TEMP_TOKEN_SECRET,\n    Iron.defaults\n  );\n\n  return session;\n}\n\nexport function setAuthCookie(session: Session, res: NextApiResponse) {\n  const { access_token, refresh_token, expires_in } = session;\n\n  const authCookies = [\n    { name: ACCESS_TOKEN_COOKIE, value: access_token },\n    refresh_token\n      ? { name: REFRESH_TOKEN_COOKIE, value: refresh_token }\n      : undefined,\n  ]\n    .filter(isDefined)\n    .map(({ name, value }) =>\n      serialize(name, value, {\n        maxAge: expires_in,\n        httpOnly: true,\n        secure: process.env.NODE_ENV === "production",\n        path: "/",\n        sameSite: "lax",\n      })\n    );\n\n  // Also clear the temp cookie\n  const updatedCookies = [\n    ...authCookies,\n    serialize(TEMP_COOKIE, "", { maxAge: -1, path: "/" }),\n  ];\n\n  res.setHeader("Set-Cookie", updatedCookies);\n}\n\nconst isDefined = <T>(value: T | undefined): value is T => !!value;\n\nconst TEMP_TOKEN_SECRET = process.env.TEMP_TOKEN_SECRET!;\nconst TEMP_COOKIE = "as-mfa-cookie";\nconst ACCESS_TOKEN_COOKIE = "sb-access-token";\nconst REFRESH_TOKEN_COOKIE = "sb-refresh-token";\n')),(0,i.kt)("h2",{id:"step-7-building-the-ui"},"Step 7: Building the UI"),(0,i.kt)("p",null,"We will add some form components for signing in and signing up as well as a basic home page."),(0,i.kt)("p",null,"Add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/sign-up.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import Link from "next/link";\nimport { useRouter } from "next/router";\n\nexport default function SignUpPage() {\n  const router = useRouter();\n\n  return (\n    <main>\n      <form\n        onSubmit={async (e) => {\n          e.preventDefault();\n\n          const target = e.target as typeof e.target & {\n            email: { value: string };\n            password: { value: string };\n          };\n\n          const email = target.email.value;\n          const password = target.password.value;\n\n          await fetch("/api/sign-up", {\n            method: "POST",\n            headers: { "Content-Type": "application/json" },\n            body: JSON.stringify({ email, password }),\n          }).then((res) => res.json());\n\n          router.push("/");\n        }}\n      >\n        <label htmlFor="email">Email</label>\n        <input id="email" type="email" name="email" required />\n        <label htmlFor="password">Password</label>\n        <input id="password" type="password" name="password" required />\n        <button type="submit">Sign up</button>\n      </form>\n      <div>\n        {"Already have an account? "}\n        <Link href="sign-in">\n          <a>Sign in</a>\n        </Link>\n      </div>\n    </main>\n  );\n}\n')),(0,i.kt)("p",null,"Then add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/sign-in.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import Link from "next/link";\nimport { useRouter } from "next/router";\n\nexport default function SignInPage() {\n  const router = useRouter();\n\n  return (\n    <main>\n      <form\n        onSubmit={async (e) => {\n          e.preventDefault();\n\n          const target = e.target as typeof e.target & {\n            email: { value: string };\n            password: { value: string };\n          };\n\n          const email = target.email.value;\n          const password = target.password.value;\n\n          const { state, mfaUrl } = await fetch("/api/sign-in", {\n            method: "POST",\n            headers: { "Content-Type": "application/json" },\n            body: JSON.stringify({ email, password }),\n          }).then((res) => res.json());\n\n          if (state === "CHALLENGE_REQUIRED") {\n            window.location.href = mfaUrl;\n          } else {\n            router.push("/");\n          }\n        }}\n      >\n        <label htmlFor="email">Email</label>\n        <input id="email" type="email" name="email" required />\n        <label htmlFor="password">Password</label>\n        <input id="password" type="password" name="password" required />\n        <button type="submit">Sign in</button>\n      </form>\n      <div>\n        {"Don\'t have an account? "}\n        <Link href="sign-up">\n          <a>Sign up</a>\n        </Link>\n      </div>\n    </main>\n  );\n}\n')),(0,i.kt)("p",null,"Now we will use Supabase's ",(0,i.kt)("inlineCode",{parentName:"p"},"withPageAuth")," wrapper around ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," to make the home page require authentication via SSR. Replace the existing code in ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/index.tsx")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { getUser, User, withPageAuth } from "@supabase/auth-helpers-nextjs";\nimport { GetServerSideProps } from "next";\nimport { useRouter } from "next/router";\nimport { authsignal } from "../lib/authsignal";\n\ninterface Props {\n  user: User;\n  isEnrolled: boolean;\n}\n\nexport const getServerSideProps: GetServerSideProps<Props> = withPageAuth({\n  redirectTo: "/sign-in",\n  async getServerSideProps(ctx) {\n    const { user } = await getUser(ctx);\n\n    const { isEnrolled } = await authsignal.getUser({userId: user.id});\n\n    return {\n      props: { user, isEnrolled },\n    };\n  },\n});\n\nexport default function HomePage({ user, isEnrolled }: Props) {\n  const router = useRouter();\n\n  return (\n    <main>\n      <section>\n        <div> Signed in as: {user?.email}</div>\n        <button\n          onClick={async (e) => {\n            e.preventDefault();\n\n            const { mfaUrl } = await fetch("/api/mfa", {\n              method: "POST",\n              headers: { "Content-Type": "application/json" },\n              body: JSON.stringify({ isEnrolled }),\n            }).then((res) => res.json());\n\n            window.location.href = mfaUrl;\n          }}\n        >\n          {isEnrolled ? "Manage MFA settings" : "Set up MFA"}\n        </button>\n        <button onClick={() => router.push("/api/sign-out")}>Sign out</button>\n      </section>\n    </main>\n  );\n}\n')),(0,i.kt)("p",null,"Optional: To make things look a bit nicer, you can add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"/styles/globals.css"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"main {\n  min-height: 100vh;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nsection,\nform {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\nbutton {\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: 6px;\n  border: none;\n  background-color: #24b47e;\n  color: #fff;\n  padding: 0 15px;\n  height: 40px;\n  margin: 10px 0;\n  transition: background-color 0.15s, color 0.15s;\n}\n\ninput {\n  outline: none;\n  font-family: inherit;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 6px;\n  color: #1d1d1d;\n  border: 1px solid #e8e8e8;\n  padding: 0 15px;\n  margin: 5px 0;\n  height: 40px;\n}\n\na {\n  color: #24b47e;\n  cursor: pointer;\n}\n")),(0,i.kt)("h2",{id:"step-8-adding-the-api-routes"},"Step 8: Adding the API routes"),(0,i.kt)("p",null,"Now we'll replace the existing api routes in ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/")," with 5 new routes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/sign-in.ts"),": handles signing in with Supabase and initiating the MFA challenge with Authsignal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/sign-up.ts"),": handles signing up with Supabase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/sign-out.ts"),": clears the Supabase auth cookies and signs the user out"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/mfa.ts"),": handles the user's attempt to set up MFA or to manage their existing MFA settings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/callback.ts"),": handles completing the MFA challenge with Authsignal")),(0,i.kt)("p",null,"Add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/sign-in.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { supabaseClient } from "@supabase/auth-helpers-nextjs";\nimport { NextApiRequest, NextApiResponse } from "next";\nimport { authsignal } from "../../lib/authsignal";\nimport { setAuthCookie, setTempCookie } from "../../lib/cookies";\n\nexport default async function signIn(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  const { email, password } = req.body;\n\n  const { data, error } = await supabaseClient.auth.api.signInWithEmail(\n    email,\n    password\n  );\n\n  if (error || !data?.user) {\n    return res.send({ error });\n  }\n\n  const { state, url: mfaUrl } = await authsignal.track({\n    action: "signIn",\n    userId: data.user.id,\n  });\n\n  if (state === "CHALLENGE_REQUIRED") {\n    await setTempCookie(data, res);\n  } else {\n    setAuthCookie(data, res);\n  }\n\n  res.send({ state, mfaUrl });\n}\n')),(0,i.kt)("p",null,"Then to handle new sign-ups add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/sign-up.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { supabaseClient } from "@supabase/auth-helpers-nextjs";\nimport { Session } from "@supabase/supabase-js";\nimport { NextApiRequest, NextApiResponse } from "next";\nimport { setAuthCookie } from "../../lib/cookies";\n\nexport default async function signUp(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  const { email, password } = req.body;\n\n  const { data, error } = await supabaseClient.auth.api.signUpWithEmail(\n    email,\n    password\n  );\n\n  if (error || !isSession(data)) {\n    res.send({ error });\n  } else {\n    setAuthCookie(data, res);\n    res.send({ data });\n  }\n}\n\nconst isSession = (data: any): data is Session => !!data?.access_token;\n')),(0,i.kt)("p",null,"To clear the auth cookies on sign-out add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/sign-out.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { supabaseClient } from "@supabase/auth-helpers-nextjs";\nimport { NextApiRequest, NextApiResponse } from "next";\n\nexport default async function signOut(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  supabaseClient.auth.api.deleteAuthCookie(req, res, { redirectTo: "/sign-in" });\n}\n')),(0,i.kt)("p",null,"To handle the user's actions to set up MFA or manage their existing MFA settings, add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/mfa.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { getUser, withApiAuth } from "@supabase/auth-helpers-nextjs";\nimport { NextApiRequest, NextApiResponse } from "next";\nimport { authsignal } from "../../lib/authsignal";\n\nexport default withApiAuth(async function mfa(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  if (req.method !== "POST") {\n    return res.status(405).send({ message: "Only POST requests allowed" });\n  }\n\n  const { user } = await getUser({ req, res });\n\n  const { isEnrolled } = req.body;\n\n  const { url: mfaUrl } = await authsignal.track({\n    action: isEnrolled ? "manageSettings" : "enroll",\n    userId: user.id,\n    redirectToSettings: isEnrolled,\n  });\n\n  res.send({ mfaUrl });\n});\n')),(0,i.kt)("p",null,"Because the user should be authenticated with Supabase to set up or manage MFA, we can use Supabase's ",(0,i.kt)("inlineCode",{parentName:"p"},"withApiAuth")," wrapper to protect this route."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectToSettings")," param specifies whether the user should be redirected to the MFA page settings panel after a challenge, rather than redirecting them immediately back to the application."),(0,i.kt)("p",null,"Finally we need a route to handle the redirect back from Authsignal after an MFA challenge. Add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/api/callback.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { NextApiRequest, NextApiResponse } from "next";\nimport { authsignal } from "../../lib/authsignal";\nimport { getSessionFromTempCookie, setAuthCookie } from "../../lib/cookies";\n\nexport default async function callback(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  const token = req.query.token as string;\n\n  const { success } = await authsignal.validateChallenge({ token });\n\n  if (success) {\n    const session = await getSessionFromTempCookie(req);\n\n    if (session) {\n      setAuthCookie(session, res);\n    }\n  }\n\n  res.redirect("/");\n}\n')),(0,i.kt)("p",null,"That's it! You should now be able to sign up a new user and set up MFA."),(0,i.kt)("p",null,"Then if you sign out, you'll be prompted to complete an MFA challenge when signing back in again."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To learn more about Authsignal take a look at the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.authsignal.com/"},"API Documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"You can customize the look and feel of the Authsignal Prebuilt MFA page ",(0,i.kt)("a",{parentName:"li",href:"https://portal.authsignal.com/organisations/tenants/customizations"},"here"),".")))}d.isMDXComponent=!0}}]);