"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[29600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=o(n),c=s,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:s,l[1]=i;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={id:"usage",slug:"/usage",title:"Usage",toc_max_heading_level:3},p=void 0,o={unversionedId:"usage",id:"usage",title:"Usage",description:"Organizations",source:"@site/_api/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/docs/reference/api/usage",draft:!1,editUrl:"https://github.com/_api/usage.mdx",tags:[],version:"current",frontMatter:{id:"usage",slug:"/usage",title:"Usage",toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Supabase API",permalink:"/docs/reference/api/"},next:{title:"Release Notes",permalink:"/docs/reference/api/release-notes"}},m={},d=[{value:"Organizations",id:"organizations",level:2},{value:"List all organizations",id:"list-all-organizations",level:3},{value:"Responses",id:"responses",level:4},{value:"Create an organization",id:"create-an-organization",level:3},{value:"Body Parameters",id:"body-parameters",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Projects",id:"projects",level:2},{value:"List all projects",id:"list-all-projects",level:3},{value:"Responses",id:"responses-2",level:4},{value:"Create a project",id:"create-a-project",level:3},{value:"Body Parameters",id:"body-parameters-1",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Create a function",id:"create-a-function",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Body Parameters",id:"body-parameters-2",level:4},{value:"Responses",id:"responses-4",level:4},{value:"List all functions",id:"list-all-functions",level:3},{value:"Path Parameters",id:"path-parameters-1",level:4},{value:"Responses",id:"responses-5",level:4},{value:"Retrieve a function",id:"retrieve-a-function",level:3},{value:"Path Parameters",id:"path-parameters-2",level:4},{value:"Responses",id:"responses-6",level:4},{value:"Update a function",id:"update-a-function",level:3},{value:"Path Parameters",id:"path-parameters-3",level:4},{value:"Body Parameters",id:"body-parameters-3",level:4},{value:"Responses",id:"responses-7",level:4},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Path Parameters",id:"path-parameters-4",level:4},{value:"Responses",id:"responses-8",level:4},{value:"List all secrets",id:"list-all-secrets",level:3},{value:"Path Parameters",id:"path-parameters-5",level:4},{value:"Responses",id:"responses-9",level:4},{value:"Bulk create secrets",id:"bulk-create-secrets",level:3},{value:"Path Parameters",id:"path-parameters-6",level:4},{value:"Body Parameters",id:"body-parameters-4",level:4},{value:"Responses",id:"responses-10",level:4},{value:"Bulk delete secrets",id:"bulk-delete-secrets",level:3},{value:"Path Parameters",id:"path-parameters-7",level:4},{value:"Body Parameters",id:"body-parameters-5",level:4},{value:"Responses",id:"responses-11",level:4},{value:"Generate TypeScript types",id:"generate-typescript-types",level:3},{value:"Path Parameters",id:"path-parameters-8",level:4},{value:"Responses",id:"responses-12",level:4}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"organizations"},"Organizations"),(0,s.kt)("p",null,"Organization endpoints"),(0,s.kt)("h3",{id:"list-all-organizations"},"List all organizations"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/organizations\n")),(0,s.kt)("h4",{id:"responses"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        }\n      },\n      "required": [\n        "id",\n        "name"\n      ]\n    }\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Unexpected error listing organizations"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"create-an-organization"},"Create an organization"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST https://api.supabase.com/v1/organizations\n")),(0,s.kt)("h4",{id:"body-parameters"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "name": {\n        "type": "string"\n      }\n    },\n    "required": [\n      "name"\n    ]\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-1"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"201",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "id": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      }\n    },\n    "required": [\n      "id",\n      "name"\n    ]\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Unexpected error creating an organization"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"projects"},"Projects"),(0,s.kt)("p",null,"Project endpoints"),(0,s.kt)("h3",{id:"list-all-projects"},"List all projects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/projects\n")),(0,s.kt)("h4",{id:"responses-2"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "organization_id": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        },\n        "region": {\n          "type": "string"\n        },\n        "created_at": {\n          "type": "string"\n        }\n      },\n      "required": [\n        "id",\n        "organization_id",\n        "name",\n        "region",\n        "created_at"\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"create-a-project"},"Create a project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST https://api.supabase.com/v1/projects\n")),(0,s.kt)("h4",{id:"body-parameters-1"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "db_pass": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      },\n      "organization_id": {\n        "type": "string"\n      },\n      "plan": {\n        "type": "string",\n        "enum": [\n          "free",\n          "pro"\n        ]\n      },\n      "region": {\n        "type": "string",\n        "enum": [\n          "us-east-1",\n          "us-west-1",\n          "ap-southeast-1",\n          "ap-northeast-1",\n          "ap-northeast-2",\n          "ap-southeast-2",\n          "eu-west-1",\n          "eu-west-2",\n          "eu-central-1",\n          "ca-central-1",\n          "ap-south-1",\n          "sa-east-1"\n        ]\n      },\n      "kps_enabled": {\n        "type": "boolean"\n      }\n    },\n    "required": [\n      "db_pass",\n      "name",\n      "organization_id",\n      "plan",\n      "region"\n    ]\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-3"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"201",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "id": {\n        "type": "string"\n      },\n      "organization_id": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      },\n      "region": {\n        "type": "string"\n      },\n      "created_at": {\n        "type": "string"\n      }\n    },\n    "required": [\n      "id",\n      "organization_id",\n      "name",\n      "region",\n      "created_at"\n    ]\n  }\n}\n')))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"create-a-function"},"Create a function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST https://api.supabase.com/v1/projects/{ref}/functions\n")),(0,s.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"body-parameters-2"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "slug": {\n        "type": "string",\n        "pattern": "/^[A-Za-z0-9_-]+$/"\n      },\n      "name": {\n        "type": "string"\n      },\n      "body": {\n        "type": "string"\n      },\n      "verify_jwt": {\n        "type": "boolean"\n      }\n    },\n    "required": [\n      "slug",\n      "name",\n      "body"\n    ]\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-4"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"201",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "id": {\n        "type": "string"\n      },\n      "slug": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      },\n      "status": {\n        "enum": [\n          "ACTIVE",\n          "REMOVED",\n          "THROTTLED"\n        ],\n        "type": "string"\n      },\n      "version": {\n        "type": "number"\n      },\n      "created_at": {\n        "type": "number"\n      },\n      "updated_at": {\n        "type": "number"\n      },\n      "verify_jwt": {\n        "type": "boolean"\n      }\n    },\n    "required": [\n      "id",\n      "slug",\n      "name",\n      "status",\n      "version",\n      "created_at",\n      "updated_at"\n    ]\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to create project's function"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/projects/{ref}/functions\n")),(0,s.kt)("h4",{id:"path-parameters-1"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"responses-5"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "string"\n        },\n        "slug": {\n          "type": "string"\n        },\n        "name": {\n          "type": "string"\n        },\n        "status": {\n          "enum": [\n            "ACTIVE",\n            "REMOVED",\n            "THROTTLED"\n          ],\n          "type": "string"\n        },\n        "version": {\n          "type": "number"\n        },\n        "created_at": {\n          "type": "number"\n        },\n        "updated_at": {\n          "type": "number"\n        },\n        "verify_jwt": {\n          "type": "boolean"\n        }\n      },\n      "required": [\n        "id",\n        "slug",\n        "name",\n        "status",\n        "version",\n        "created_at",\n        "updated_at"\n      ]\n    }\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to retrieve project's functions"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"retrieve-a-function"},"Retrieve a function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/projects/{ref}/functions/{function_slug}\n")),(0,s.kt)("h4",{id:"path-parameters-2"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref")),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"function_slug"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Function slug"))),(0,s.kt)("h4",{id:"responses-6"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "id": {\n        "type": "string"\n      },\n      "slug": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      },\n      "status": {\n        "enum": [\n          "ACTIVE",\n          "REMOVED",\n          "THROTTLED"\n        ],\n        "type": "string"\n      },\n      "version": {\n        "type": "number"\n      },\n      "created_at": {\n        "type": "number"\n      },\n      "updated_at": {\n        "type": "number"\n      },\n      "verify_jwt": {\n        "type": "boolean"\n      },\n      "body": {\n        "type": "string"\n      }\n    },\n    "required": [\n      "id",\n      "slug",\n      "name",\n      "status",\n      "version",\n      "created_at",\n      "updated_at"\n    ]\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to retrieve function with given slug"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"update-a-function"},"Update a function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"PATCH https://api.supabase.com/v1/projects/{ref}/functions/{function_slug}\n")),(0,s.kt)("h4",{id:"path-parameters-3"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref")),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"function_slug"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Function slug"))),(0,s.kt)("h4",{id:"body-parameters-3"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "name": {\n        "type": "string"\n      },\n      "body": {\n        "type": "string"\n      },\n      "verify_jwt": {\n        "type": "boolean"\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-7"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "id": {\n        "type": "string"\n      },\n      "slug": {\n        "type": "string"\n      },\n      "name": {\n        "type": "string"\n      },\n      "status": {\n        "enum": [\n          "ACTIVE",\n          "REMOVED",\n          "THROTTLED"\n        ],\n        "type": "string"\n      },\n      "version": {\n        "type": "number"\n      },\n      "created_at": {\n        "type": "number"\n      },\n      "updated_at": {\n        "type": "number"\n      },\n      "verify_jwt": {\n        "type": "boolean"\n      }\n    },\n    "required": [\n      "id",\n      "slug",\n      "name",\n      "status",\n      "version",\n      "created_at",\n      "updated_at"\n    ]\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to update function with given slug"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE https://api.supabase.com/v1/projects/{ref}/functions/{function_slug}\n")),(0,s.kt)("h4",{id:"path-parameters-4"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref")),(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"function_slug"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Function slug"))),(0,s.kt)("h4",{id:"responses-8"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to delete function with given slug"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"list-all-secrets"},"List all secrets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/projects/{ref}/secrets\n")),(0,s.kt)("h4",{id:"path-parameters-5"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"responses-9"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "object",\n      "properties": {\n        "name": {\n          "type": "string"\n        },\n        "value": {\n          "type": "string"\n        }\n      },\n      "required": [\n        "name",\n        "value"\n      ]\n    }\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to retrieve project's secrets"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"bulk-create-secrets"},"Bulk create secrets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST https://api.supabase.com/v1/projects/{ref}/secrets\n")),(0,s.kt)("h4",{id:"path-parameters-6"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"body-parameters-4"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "object",\n      "properties": {\n        "name": {\n          "type": "string"\n        },\n        "value": {\n          "type": "string",\n          "pattern": "/^(?!SUPABASE_).*/"\n        }\n      },\n      "required": [\n        "name",\n        "value"\n      ]\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-10"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"201",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to create project's secrets"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"bulk-delete-secrets"},"Bulk delete secrets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"DELETE https://api.supabase.com/v1/projects/{ref}/secrets\n")),(0,s.kt)("h4",{id:"path-parameters-7"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"body-parameters-5"},"Body Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "string"\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"responses-11"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object"\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to delete secrets with given names"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"generate-typescript-types"},"Generate TypeScript types"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET https://api.supabase.com/v1/projects/{ref}/types/typescript\n")),(0,s.kt)("h4",{id:"path-parameters-8"},"Path Parameters"),(0,s.kt)("ul",{className:"method-list-group"},(0,s.kt)("li",{className:"method-list-item"},(0,s.kt)("h4",{className:"method-list-item-label"},(0,s.kt)("span",{className:"method-list-item-label-name"},"ref"),(0,s.kt)("span",{className:"method-list-item-label-badge"},"required"),(0,s.kt)("span",{className:"method-list-item-validation"})),(0,s.kt)("div",{class:"method-list-item-description"},"Project ref"))),(0,s.kt)("h4",{id:"responses-12"},"Responses"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "types": {\n        "type": "string"\n      }\n    },\n    "required": [\n      "types"\n    ]\n  }\n}\n'))),(0,s.kt)(l.Z,{value:"403",mdxType:"TabItem"}),(0,s.kt)(l.Z,{value:"500",mdxType:"TabItem"},(0,s.kt)("p",null,"Failed to generate TypeScript types"))),(0,s.kt)("br",null))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),s=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),s=n(67294),r=n(86010),l=n(72389),i=n(67392),p=n(7094),o=n(12466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:c,className:k}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:f}=(0,p.U)(),[T,N]=(0,s.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=c){const e=g[c];null!=e&&e!==T&&b.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==T&&(P(t),N(a),null!=c&&f(c,String(a)))},_=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},k)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:_,onClick:x},l,{className:(0,r.Z)("tabs__item",d,l?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,l.Z)();return s.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);