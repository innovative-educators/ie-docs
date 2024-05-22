"use strict";(self.webpackChunkie_techdocs=self.webpackChunkie_techdocs||[]).push([[590],{249:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=n(5893),t=n(1151),r=n(4511);const d={sidebar_position:4,sidebar_label:"with ADFS"},l="SAML with ADFS",a={id:"single-sign-on/configuring-saml/adfs",title:"SAML with ADFS",description:"This guide supplements the Configuring your IdP server portion of the Configuring SAML 2.0 docs using ADFS as your identity provider (IdP). Please ensure you've already read and understand the concepts in the Configuring SAML 2.0 documentation before continuing.",source:"@site/docs/single-sign-on/configuring-saml/adfs.mdx",sourceDirName:"single-sign-on/configuring-saml",slug:"/single-sign-on/configuring-saml/adfs",permalink:"/single-sign-on/configuring-saml/adfs",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/single-sign-on/configuring-saml/adfs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"with ADFS"},sidebar:"tutorialSidebar",previous:{title:"with Azure",permalink:"/single-sign-on/configuring-saml/azure"},next:{title:"with PortalGuard",permalink:"/single-sign-on/configuring-saml/portalguard"}},o={},c=[{value:"Configure the SAML IdP",id:"configure-the-saml-idp",level:2},{value:"Create the Relying Party Trust",id:"create-the-relying-party-trust",level:3},{value:"Releasing user attributes",id:"releasing-user-attributes",level:3},{value:"Dialog Box Examples",id:"dialog-box-examples",level:4},{value:"Configure the NameId",id:"configure-the-nameid",level:3},{value:"Using <em>sAMAccountName for NameID (optional)</em>",id:"using-samaccountname-for-nameid-optional",level:4},{value:"Dialog Box Examples",id:"dialog-box-examples-1",level:4}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"saml-with-adfs",children:"SAML with ADFS"}),"\n",(0,s.jsx)(i.admonition,{title:"This is a Supplementry Guide",type:"info",children:(0,s.jsxs)(i.p,{children:["This guide supplements the ",(0,s.jsx)(i.a,{href:"./saml2#configuring-the-idp",children:"Configuring your IdP server"})," portion of the ",(0,s.jsx)(i.a,{href:"./saml2",children:"Configuring SAML 2.0"})," docs using ADFS as your identity provider (IdP). Please ensure you've already read and understand the concepts in the ",(0,s.jsx)(i.a,{href:"./saml2",children:"Configuring SAML 2.0"})," documentation before continuing."]})}),"\n",(0,s.jsx)(i.admonition,{title:"Do you already have an ADFS account?",type:"note",children:(0,s.jsx)(i.p,{children:"This guide assumes you have already configured your ADFS account and have access to it."})}),"\n",(0,s.jsx)(i.p,{children:"Microsoft Active Directory Federation Services (ADFS) has had support for SAML 2 integrations since ADFS v2.0. Integrating ADFS with IE's applications requires configuration in ADFS and also in the specific IE application that is being used. If more than one IE's application is being used, then the integration needs to be completed for each application."}),"\n",(0,s.jsx)(i.h2,{id:"configure-the-saml-idp",children:"Configure the SAML IdP"}),"\n",(0,s.jsx)(i.p,{children:"In this scenario, ADFS will be acting as the SAML identity provider (IdP). To configure an ADFS Relying Party Trust (ADFS's term for a service provider), you'll need the SP (service provider) metadata from IE."}),"\n",(0,s.jsx)(i.h3,{id:"create-the-relying-party-trust",children:"Create the Relying Party Trust"}),"\n",(0,s.jsx)(i.p,{children:"To complete the IdP configuration, in ADFS we need to make ADFS aware of the relying party:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Navigate to the Relying Party Trust node."}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Add Relying Party Trust..."})," in the ",(0,s.jsx)(i.code,{children:"Actions"})," pane."]}),"\n",(0,s.jsxs)(i.li,{children:['If you are prompted about the application is "Claims aware" or not, choose ',(0,s.jsx)(i.code,{children:"Claims aware"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the Select Data Source step, select the ",(0,s.jsx)(i.code,{children:"Import data about the relying party from a field"})," radio button, Browse... to the metadata file provided by IE, and click ",(0,s.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["On the next step, enter a desired name into ",(0,s.jsx)(i.code,{children:"Display Name"}),". This is a free form field, but it is recommended to enter the Innovative Educator's application name."]}),"\n",(0,s.jsxs)(i.li,{children:["If prompted about an access control policy, choose ",(0,s.jsx)(i.code,{children:"Permit everyone"}),", unless you have a reason to choose something else."]}),"\n",(0,s.jsx)(i.li,{children:"Finish up the wizard."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"ADFS now knows about IE's application."}),"\n",(0,s.jsx)(i.h3,{id:"releasing-user-attributes",children:"Releasing user attributes"}),"\n",(0,s.jsx)(i.admonition,{title:"important",type:"info",children:(0,s.jsxs)(i.p,{children:["Please refer to the ",(0,s.jsx)(i.a,{href:"./saml2#configure-attributes",children:"SAML 2.0 documentation"})," for requirements and recommendations regarding attributes and claims."]})}),"\n",(0,s.jsx)(i.p,{children:"We need to instruct ADFS to send some information about the user to the SP."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Select the newly create relying party trust, and select ",(0,s.jsx)(i.code,{children:"Edit Claims Issuance Policy..."})," from the ",(0,s.jsx)(i.code,{children:"Action"})," pane."]}),"\n",(0,s.jsxs)(i.li,{children:["From the ",(0,s.jsx)(i.code,{children:"Edit Claim Issuance"}),"... dialog, click ",(0,s.jsx)(i.code,{children:"Add Rule..."})]}),"\n",(0,s.jsxs)(i.li,{children:["Add ",(0,s.jsx)(i.code,{children:"AD Attributes"})," attribute definition:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["From the ",(0,s.jsx)(i.code,{children:"Add Transform Claim Rule Wizard"}),", select ",(0,s.jsx)(i.code,{children:"Send LDAP Attributes as Claims"}),", and click ",(0,s.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule name"}),' field, type "AD Attributes".']}),"\n",(0,s.jsxs)(i.li,{children:["In the Mapping of LDAP attributes to outgoing claim types, add the following entries:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Given-Name -> firstName"}),"\n",(0,s.jsx)(i.li,{children:"Surname -> lastName"}),"\n",(0,s.jsx)(i.li,{children:"E-Mail-Addresses -> email"}),"\n",(0,s.jsx)(i.li,{children:"Optional data to be associated with the user -> ref1"}),"\n",(0,s.jsx)(i.li,{children:"Optional data to be associated with the user -> ref2"}),"\n",(0,s.jsx)(i.li,{children:"Optional data to be associated with the user -> ref3"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Finish"})," to create the rule."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Add the ",(0,s.jsx)(i.code,{children:"LicenseIds"})," attribute definition:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["From the ",(0,s.jsx)(i.code,{children:"Add Transform Claim Rule Wizard"}),", select ",(0,s.jsx)(i.code,{children:"Send Claims Using a Custom Rule"}),", and click ",(0,s.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule name"}),' field, type "licenseIds".']}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule"})," field enter the following string:","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'=> issue(Type = "licenseIds", Value = "<licIds>");`\n'})}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:'Replace the string, "<licIds>" with the value provided by Innovative Educators.'}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Finish"})," to create the rule."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"dialog-box-examples",children:"Dialog Box Examples"}),"\n",(0,s.jsxs)(r.r,{children:[(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:["A populated ",(0,s.jsx)(i.em,{children:"Add Transform Claim Rule Wizard"})," dialog for AD user attributes.\n",(0,s.jsx)(i.img,{src:n(9381).Z+"",width:"1280",height:"910"})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:["A populated ",(0,s.jsx)(i.em,{children:"Add Transform Claim Rule Wizard"})," dialog for licenseIds.\n",(0,s.jsx)(i.img,{src:n(9483).Z+"",width:"1280",height:"905"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"configure-the-nameid",children:"Configure the NameId"}),"\n",(0,s.jsx)(i.p,{children:"The Name Identifier is the unique ID that will identify SAML users coming from the IdP (identity provider)."}),"\n",(0,s.jsx)(i.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"./saml2#external-customer-id",children:"Please refer to the SAML 2.0 documentation for requirements and recommendations regarding the NameID"}),"."]})}),"\n",(0,s.jsxs)(i.h4,{id:"using-samaccountname-for-nameid-optional",children:["Using ",(0,s.jsx)(i.em,{children:"sAMAccountName for NameID (optional)"})]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"The following example has you erroneously strip the domain from the NameID and needs updating. Leaving here for reference until the example can be updated."})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'Add "Get Stripped sAMAccountName" attribute definition:'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["From the ",(0,s.jsx)(i.code,{children:"Add Transform Claim Rule Wizard"}),", select ",(0,s.jsx)(i.code,{children:"Send Claims Using a Custom Rule"}),", and click ",(0,s.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule name"}),' field, type "Get Stripped sAMAccountName".']}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule"})," field enter the following string:","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'c:[Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname", Issuer == "AD AUTHORITY"] => issue(store = "Active Directory", types = ("urn:strippedaccountname"), query = ";sAMAccountName;{0}", param = c.Value);\n'})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Finish"})," to create the rule."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'Add the "Transform Stripped sAMAccountName to Name ID" attribute definition (ensure that this entry is ordered after the \'Get Stripped sAMAccountName" attribute definition):'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["From the ",(0,s.jsx)(i.code,{children:"Add Transform Claim Rule Wizard"}),", select ",(0,s.jsx)(i.code,{children:"Send Claims Using a Custom Rule"}),", and click ",(0,s.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule name"})," field, type ",(0,s.jsx)(i.code,{children:"Transform Stripped sAMAccountName to Name ID"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.code,{children:"Claim rule"})," field enter the following string:","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'c:[Type == "urn:strippedaccountname"] => issue(Type = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier", Issuer = c.Issuer, OriginalIssuer = c.OriginalIssuer, Value = c.Value, ValueType = c.ValueType, Properties["http://schemas.xmlsoap.org/ws/2005/05/identity/claimproperties/format"] = "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified");\n'})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.code,{children:"Finish"})," to create the rule."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.code,{children:"OK"})," to close the ",(0,s.jsx)(i.code,{children:"Edit Claim Issuance..."})," dialog."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"dialog-box-examples-1",children:"Dialog Box Examples"}),"\n",(0,s.jsxs)(r.r,{children:[(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:["A populated ",(0,s.jsx)(i.em,{children:"Add Transform Claim Rule Wizard"})," dialog that strips the domain from the username.\n",(0,s.jsx)(i.img,{src:n(4346).Z+"",width:"1086",height:"1180"})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:["A populated ",(0,s.jsx)(i.em,{children:"Add Transform Claim Rule Wizard"})," dialog that sends the stripped username to the application.\n",(0,s.jsx)(i.img,{src:n(6026).Z+"",width:"1090",height:"1182"})]})})]}),"\n",(0,s.jsx)(i.h1,{id:""})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4511:(e,i,n)=>{n.d(i,{r:()=>t});var s=n(5893);const t=e=>{let{children:i,gap:n="20px"}=e;return(0,s.jsx)("div",{style:{display:"flex","flex-wrap":"wrap",gap:n},children:i.map(((e,i)=>(0,s.jsx)("div",{style:{width:`calc(50% - ${n})`},children:e},i)))})}},9381:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/saml_adfs_1-3d581b7a99f13278f6b10dfdd736e9dd.png"},9483:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/saml_adfs_2-471d6983d0fee7d855e9a2794d1cf435.png"},4346:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/saml_adfs_3-c8db3a54b4b2ade4a5c615105ffdeff1.png"},6026:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/saml_adfs_4-36df0c31c6575584375b9e84ea3543c2.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>d});var s=n(7294);const t={},r=s.createContext(t);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);