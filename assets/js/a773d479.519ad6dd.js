"use strict";(self.webpackChunkie_techdocs=self.webpackChunkie_techdocs||[]).push([[46],{1235:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(5893),r=i(1151);const s={sidebar_position:6,sidebar_label:"with Shibboleth"},a="SAML with Shibboleth",o={id:"single-sign-on/configuring-saml/shibboleth",title:"SAML with Shibboleth",description:"This supplements the Configuring your IdP server portion of the Configuring SAML 2.0 docs using Shibboleth as your identity provider (IdP). Please ensure you've already read and understand the concepts in the Configuring SAML 2.0 documentation before continuing.",source:"@site/docs/single-sign-on/configuring-saml/shibboleth.md",sourceDirName:"single-sign-on/configuring-saml",slug:"/single-sign-on/configuring-saml/shibboleth",permalink:"/single-sign-on/configuring-saml/shibboleth",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/single-sign-on/configuring-saml/shibboleth.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"with Shibboleth"},sidebar:"tutorialSidebar",previous:{title:"with PortalGuard",permalink:"/single-sign-on/configuring-saml/portalguard"},next:{title:"Configuring CAS (2.0 / 3.0)",permalink:"/single-sign-on/configuring-cas/cas"}},d={},l=[{value:"Configure the SAML IdP",id:"configure-the-saml-idp",level:2},{value:"IdP Metadata Provider Configuration",id:"idp-metadata-provider-configuration",level:3},{value:"Resolving User Attributes",id:"resolving-user-attributes",level:3},{value:"Setting up the Subject NameId",id:"setting-up-the-subject-nameid",level:3},{value:"Set the NameId and Assertion Signing for the SP",id:"set-the-nameid-and-assertion-signing-for-the-sp",level:4},{value:"Releasing User Attributes",id:"releasing-user-attributes",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"saml-with-shibboleth",children:"SAML with Shibboleth"}),"\n",(0,n.jsx)(t.admonition,{title:"This is a Supplementry Guide",type:"info",children:(0,n.jsxs)(t.p,{children:["This supplements the ",(0,n.jsx)(t.a,{href:"./saml2#configuring-the-idp",children:"Configuring your IdP server"})," portion of the ",(0,n.jsx)(t.a,{href:"./saml2",children:"Configuring SAML 2.0"})," docs using Shibboleth as your identity provider (IdP). Please ensure you've already read and understand the concepts in the ",(0,n.jsx)(t.a,{href:"./saml2",children:"Configuring SAML 2.0"})," documentation before continuing."]})}),"\n",(0,n.jsx)(t.p,{children:"Shibboleth IdP is an open source software (OSS) SAML 2 identity provider (IdP) commonly used in higher education. Integrating Shibboleth IdP with IE's applications requires configuration of Shibboleth IdP's xml files and also configuration of the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application."}),"\n",(0,n.jsx)(t.h2,{id:"configure-the-saml-idp",children:"Configure the SAML IdP"}),"\n",(0,n.jsx)(t.p,{children:"Shibboleth will be acting as the SAML identity provider (IdP). To configure a Shibboleth IdP, some information from the IE application is needed. This typically means the SP metadata which will be provided by IE."}),"\n",(0,n.jsx)(t.h3,{id:"idp-metadata-provider-configuration",children:"IdP Metadata Provider Configuration"}),"\n",(0,n.jsx)(t.p,{children:"The Shibboleth IdP needs to know about the service provider(s). To complete the IdP-side of the trust:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Copy the metadata file received from IE to ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/metadata/<somename>.xml"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If using an XLM file like this (instead of a live hosted URL), we recommend removing the validUntil property and value to avoid any potential issues that may arise from an IdP acting on the expiration date of the metadata file."})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to and edit ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/conf/metadata-providers.xml"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Using the filename from step #2, add a new element:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/metadata-providers.xml"',children:'<MetadataProvider id="IEApp" xsi:type="FilesystemMetadataProvider" metadataFile="%{idp.home}/metadata/<somename>.xml"/>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Save the file."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Shibboleth IdP now knows about the Innovative Educators application."}),"\n",(0,n.jsx)(t.h3,{id:"resolving-user-attributes",children:"Resolving User Attributes"}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(t.p,{children:["Please refer to the ",(0,n.jsx)(t.a,{href:"./saml2#configure-attributes",children:"SAML 2.0 documentation for requirements and recommendations regarding attributes and claims."})]})}),"\n",(0,n.jsx)(t.p,{children:"Attributes from the authentication source, usually an ldap-based directory, need to be mapped to an IdP attribute with a SAML attribute encoding. To do this, we need to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Confirm that the givenName, surname, and mail attributes are configured similar to the following in the ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/conf/attribute-resolver.xml"})," file:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/attribute-resolver.xml"',children:'<AttributeDefinition xsi:type="Simple" id="mail" sourceAttributeID="mail">\n    <Dependency ref="myLDAP" />\n    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:mail" encodeType="false" />\n    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:0.9.2342.19200300.100.1.3" friendlyName="mail" encodeType="false" />\n</AttributeDefinition>\n<AttributeDefinition xsi:type="Simple" id="surname" sourceAttributeID="sn">\n    <Dependency ref="myLDAP" />\n    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:sn" encodeType="false" />\n    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:2.5.4.4" friendlyName="sn" encodeType="false" />\n</AttributeDefinition>\n<AttributeDefinition xsi:type="Simple" id="givenName" sourceAttributeID="givenName">\n    <Dependency ref="myLDAP" />\n    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:givenName" encodeType="false" />\n    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:2.5.4.42" friendlyName="givenName" encodeType="false" />\n</AttributeDefinition>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["These attributes are provided in the default Shibboleth IdP install. They maybe different if previously customized. If the SAML2 ",(0,n.jsx)(t.code,{children:"AttributeEncoder"})," name values are different than above, then the attribute mappings below need to be adjusted accordingly."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'There is also a need to import an attribute for the user id. The following attribute definition is the first step in defining the "uid_nameid":'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/attribute-resolver.xml"',children:'<AttributeDefinition xsi:type="Simple" id="uid_nameid" sourceAttributeID="uid">\n  <resolver:Dependency ref="staticAttributes" />\n</AttributeDefinition>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Adjust the ",(0,n.jsx)(t.code,{children:"sourceAttributeID"})," value to whatever source attribute contains the user id that should be used by the service provider/application. Common examples are uid, sAMAccountName, employeeId, employeeNumber, etc."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If a ",(0,n.jsx)(t.code,{children:"licenseId"}),' value is provided by IE, a custom attribute named "licenseIds" needs to be configured:']}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/attribute-resolver.xml"',children:'<AttributeDefinition xsi:type="Simple" id="licenseIds" sourceAttributeID="licenseIds">\n  <resolver:Dependency ref="staticAttributes" />\n  <resolver:AttributeEncoder xsi:type="SAML2String" name="licenseIds" friendlyName="licenseIds" encodeType="false" />\n</AttributeDefinition>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsx)(t.li,{children:"The licenseIds attribute relies on a static value being defined in a static DataConnector. This data connector should be declared near the bottom of the file next to the other data connector(s)."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/attribute-resolver.xml"',children:'<DataConnector id="staticAttributes" xsi:type="Static">\n  <Attribute id="licenseIds">\n    <Value><licId></Value>\n  </Attribute>\n</DataConnector>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["Update the ",(0,n.jsx)(t.code,{children:"<licId>"})," to the value that was provided."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This connector may already exists. If so, just add the licenseIds ",(0,n.jsx)(t.strong,{children:"Attribute"})," element to the existing ",(0,n.jsx)(t.strong,{children:"staticAttributes"})," ",(0,n.jsx)(t.strong,{children:"DataConnector"})," element."]})}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsx)(t.li,{children:"Save the file."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setting-up-the-subject-nameid",children:"Setting up the Subject NameId"}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"./saml2#external-customer-id",children:"Please refer to the SAML 2.0 documentation for requirements and recommendations regarding the NameID"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:'In the attribute-resolver.xml file, we defined an attribute named, "uid_nameid". To finish defining the "user id", the Shibboleth IdP needs to be instructed on how to process that attribute and release the data as a subject nameId with a nameid format:'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to and edit ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/conf/saml-nameid.xml"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["Inside the section starting with ",(0,n.jsx)(t.code,{children:'<util:list id="shibboleth.SAML2NameIDGenerators">'}),", add the following bean definition:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/saml-nameid.xml"',children:'<bean parent="shibboleth.SAML2AttributeSourcedGenerator"\np:format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"\np:attributeSourceIds="#{ {\'uid_nameid\'} }" />\n'})}),"\n",(0,n.jsxs)(t.p,{children:['This will send the "uid_nameid" idp attribute to the SP as an ',(0,n.jsx)(t.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," name-id formatted value."]}),"\n",(0,n.jsx)(t.h4,{id:"set-the-nameid-and-assertion-signing-for-the-sp",children:"Set the NameId and Assertion Signing for the SP"}),"\n",(0,n.jsxs)(t.p,{children:["The Shibboleth IdP ignores the use of the ",(0,n.jsx)(t.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," name-id type unless explicitly instructed to use it:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to and edit ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/conf/relying-party.xml"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["Inside the section ",(0,n.jsx)(t.code,{children:'<util:list id="shibboleth.RelyingPartyOverrides">'})," add the following bean definition:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/relying-party.xml"',children:'<bean parent="RelyingPartyByName" c:relyingPartyIds="<spentityId>">\n  <property name="profileConfigurations">\n    <list>\n      <bean parent="SAML2.SSO"\n    p:signAssertions="true"\n    p:nameIDFormatPrecedence="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified" />\n    </list>\n  </property>\n</bean>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Replace the value ",(0,n.jsx)(t.code,{children:"<spentityId>"})," with the entity Id of the service provider. You can find the entity Id in the metadata file provided by IE."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"releasing-user-attributes",children:"Releasing User Attributes"}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(t.p,{children:["Please refer to the ",(0,n.jsx)(t.a,{href:"./saml2#configure-attributes",children:"SAML 2.0 documentation for requirements and recommendations regarding attributes and claims."})]})}),"\n",(0,n.jsx)(t.p,{children:"We need to instruct Shibboleth IdP to release attributes about the user:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to and edit ",(0,n.jsx)(t.code,{children:"<IDP_HOME>/conf/attribute-filter.xml"})," file."]}),"\n",(0,n.jsx)(t.li,{children:"Add the following bean definition to the body of the file:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="<IDP_HOME>/conf/attribute-filter.xml"',children:'<AttributeFilterPolicy id="example1">\n  <PolicyRequirementRule xsi:type="Requester" value="<spentityId>" />\n  <AttributeRule attributeID="uid_nameid">\n    <PermitValueRule xsi:type="ANY" />\n  </AttributeRule>\n  <AttributeRule attributeID="givenName">\n    <PermitValueRule xsi:type="ANY" />\n  </AttributeRule>\n  <AttributeRule attributeID="licenseIds">\n    <PermitValueRule xsi:type="ANY" />\n  </AttributeRule>\n  <AttributeRule attributeID="mail">\n    <PermitValueRule xsi:type="ANY" />\n  </AttributeRule>\n  <AttributeRule attributeID="surname">\n    <PermitValueRule xsi:type="ANY" />\n  </AttributeRule>\n</AttributeFilterPolicy>\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Replace the value ",(0,n.jsx)(t.code,{children:"<spentityId>"})," with the entity Id of the service provider. You can find the entity Id in the metadata file provided by IE."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Shibboleth IdP is now ready to authenticate users to the Innovative Educators application."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(7294);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);