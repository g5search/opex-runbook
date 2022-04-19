(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{369:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"configuring-your-node-js-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-your-node-js-environment"}},[s._v("#")]),s._v(" Configuring your Node.js Environment")]),s._v(" "),t("p",[s._v("All of the Operational Excellence apps are built using Node.js, as is much of the G5 platform more broadly.")]),s._v(" "),t("p",[s._v("Here are some steps to get you up and running in a Node.js runtime with version control.")]),s._v(" "),t("h2",{attrs:{id:"install-node-version-manager-nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-node-version-manager-nvm"}},[s._v("#")]),s._v(" Install Node Version Manager (nvm)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node Version Manager Documentation"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("In your shell/terminal:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),t("p",[s._v("Add NVM to your shell path, usually a "),t("code",[s._v(".bashrc")]),s._v(", "),t("code",[s._v(".bash_profile")]),s._v(" or "),t("code",[s._v(".zshrc")]),s._v(" file in your home directory.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME-}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/.nvm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME}")]),s._v('/nvm"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v("\n")])])]),t("p",[t("strong",[s._v("If you already have a Homebrew install, you could also "),t("code",[s._v("brew install nvm")]),s._v(".")])]),s._v(" "),t("h2",{attrs:{id:"install-a-recent-version-of-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-a-recent-version-of-node"}},[s._v("#")]),s._v(" Install a recent version of Node.")]),s._v(" "),t("p",[s._v("Most of the OpEx apps are written to use version 12 or greater, so let's start there. NVM makes it easy to install multiple versions of Node and switch between them.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n")])])]),t("p",[s._v("Verify the install")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("node --version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v12.22.1 or current LTS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" --version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#7.13.0 or current LTS")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);