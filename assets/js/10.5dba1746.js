(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"domain-forwarder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-forwarder"}},[t._v("#")]),t._v(" Domain Forwarder")]),t._v(" "),a("p",[t._v("So OpEx made a redirect manager for domains and redirects that require HTTPS/TLS from the initial request, a type of redirect that is not currently supported by other redirect solutions on the platform.")]),t._v(" "),a("p",[t._v("This app uses CNAME/DNS SSL validation and can solve for a lot of different redirect scenarios. It might not be the best solution in all cases.")]),t._v(" "),a("p",[t._v('It\'s best use case is handling incoming requests from vanity domains already on HTTPS, also called "Secure to Secure" redirects.')]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("You need to be on the RealPage VPN.\nYou will need to provide your public IP address to DevOps or OpEx (the app maintainers) so that your connection can be whitelisted.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" ipconfig.me -L\n")])])]),a("p",[t._v("This will return your current public IP. We will whitelist a range of IP addresses around this.")]),t._v(" "),a("h2",{attrs:{id:"point-the-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-the-domain"}},[t._v("#")]),t._v(" Point the Domain")]),t._v(" "),a("p",[t._v("Domains entered into the "),a("code",[t._v("domains")]),t._v(" table should also have a CNAME or A Record added to their DNS entry with their registrar.")]),t._v(" "),a("p",[t._v("The subdomains should have a CNAME entry pointing the domain to "),a("code",[t._v("domain-forwarder.g5dns.com")]),t._v(". This includes entries like "),a("code",[t._v("www.")]),t._v(".")]),t._v(" "),a("p",[t._v("Domains usually don't accept a CNAME entry for their top-level record. Instead use an A record, pointed to the IP address "),a("code",[t._v("35.232.226.111")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"verify-domain-is-pointed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-domain-is-pointed"}},[t._v("#")]),t._v(" Verify Domain is Pointed")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("Dig")]),t._v(" to get DNS records from your current DNS Server.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dig")]),t._v(" www.your-domain.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ANSWER SECTION:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# www.your-domain.com TTL IN CNAME domain-forwarder.g5dns.com.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dig")]),t._v(" your-domain.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ANSWER SECTION:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your-domain.com TTL IN A 35.232.226.111")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-a-domain-to-the-domains-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-domain-to-the-domains-table"}},[t._v("#")]),t._v(" Add a Domain to the Domains Table")]),t._v(" "),a("ol",[a("li",[t._v("Search that the domain doesn't already exist. "),a("em",[t._v("This is easiest to do using a SQL Query")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domains\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.the-domain-i-want-to-add.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("No results means it doesn't exist. Please continue.")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Add the domain to the domains table. The "),a("code",[t._v("domain")]),t._v(", "),a("code",[t._v("createdAt")]),t._v(", and "),a("code",[t._v("updatedAt")]),t._v(" fields are "),a("strong",[t._v("required")]),t._v(". Set "),a("code",[t._v("createdAt")]),t._v(" and "),a("code",[t._v("updatedAt")]),t._v(" to today's date. Take note of the "),a("code",[t._v("id")]),t._v(" that is created; you'll use it in the next step.")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-new-domain.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-04-19'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-04-19'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-the-redirect-rules-to-the-redirect-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-the-redirect-rules-to-the-redirect-table"}},[t._v("#")]),t._v(" Add the Redirect Rules to the Redirect Table")]),t._v(" "),a("p",[t._v("You can add multiple redirects for a single domain.")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("domain_id")]),t._v(" should equal the "),a("code",[t._v("id")]),t._v(" from your added domain.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("path")]),t._v(" field is from root. a "),a("code",[t._v("/")]),t._v(" means the homepage.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("destination")]),t._v(" is where the domain + path should end up.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("secure_destination")]),t._v(" should be set to true. If you aren't doing this, you probably shouldn't be using this service for your redirect.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("wildcard")]),t._v(" should be set to true, but I don't know what it does currently.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Since you can add multiple redirects for the same domain, redirects may overlap or conflict. In general, your more specific redirects (like page-level) should come before more broad ones (site-wide).")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secure_destination"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wildcard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.new-domain.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-04-19'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-04-19'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("You don't have to do this via SQL, but including just an option so you know which fields are required.")]),t._v(" "),a("h3",{attrs:{id:"verify-that-redirects-are-working"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-redirects-are-working"}},[t._v("#")]),t._v(" Verify That Redirects are Working")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("domain_id")]),t._v(" value plus "),a("code",[t._v("path")]),t._v(" should arrive at the "),a("code",[t._v("destination")]),t._v(" and can be tested in the browser.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -vI https://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("incoming_domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("redirect_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" Location\n")])])]),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("Since you will be modifying the database directly, you can break the whole thing if you aren't careful. For instance, do not redirect domains to themselves.")]),t._v(" "),a("p",[t._v("View the tables with a join.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destination\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" redirects\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" domains\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" redirects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" domains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);