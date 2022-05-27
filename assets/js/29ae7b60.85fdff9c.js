"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[8523],{8761:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={},p="I am looking for an Angular component design pattern",c={unversionedId:"decision-makers/i-am-looking-for-an-angular-component-design-pattern",id:"decision-makers/i-am-looking-for-an-angular-component-design-pattern",title:"I am looking for an Angular component design pattern",description:"Shared application state",source:"@site/docs/decision-makers/i-am-looking-for-an-angular-component-design-pattern.md",sourceDirName:"decision-makers",slug:"/decision-makers/i-am-looking-for-an-angular-component-design-pattern",permalink:"/angular-guides/docs/decision-makers/i-am-looking-for-an-angular-component-design-pattern",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/decision-makers/i-am-looking-for-an-angular-component-design-pattern.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Decision makers",permalink:"/angular-guides/docs/category/decision-makers"},next:{title:"I need a state management library",permalink:"/angular-guides/docs/decision-makers/i-need-a-state-management-library"}},l={},m=[{value:"Shared application state",id:"shared-application-state",level:2},{value:"Common presentation",id:"common-presentation",level:2},{value:"Cross-platform code sharing",id:"cross-platform-code-sharing",level:2},{value:"Separating state from presentation",id:"separating-state-from-presentation",level:2},{value:"Sharing common behavior and user interaction",id:"sharing-common-behavior-and-user-interaction",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i-am-looking-for-an-angular-component-design-pattern"},"I am looking for an Angular component design pattern"),(0,o.kt)("h2",{id:"shared-application-state"},"Shared application state"),(0,o.kt)("p",null,"You want to share the same pieces of application state between multiple\ncomponents?"),(0,o.kt)("p",null,"Use a ",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/common-container-component"},"common container component"),"\nfor data binding to multiple presentational components."),(0,o.kt)("h2",{id:"common-presentation"},"Common presentation"),(0,o.kt)("p",null,"You want the same UI but for different pieces of the state?"),(0,o.kt)("p",null,"Use different container components to data bind to a\n",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/common-presentational-component"},"common presentational component"),"."),(0,o.kt)("h2",{id:"cross-platform-code-sharing"},"Cross-platform code sharing"),(0,o.kt)("p",null,"You want cross-platform code-sharing?"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/the-bloc-pattern"},"the BLoC pattern")," or otherwise\n",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/extract-common-business-logic-into-class-based-services"},"extract common business logic into class-based services"),"\nthat can be shared between similar components for different platforms."),(0,o.kt)("h2",{id:"separating-state-from-presentation"},"Separating state from presentation"),(0,o.kt)("p",null,"You want to separate shared state from presentation?"),(0,o.kt)("p",null,"Split mixed components into ",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/container-components"},"container components"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"../design-patterns/presentational-components"},"presentational components"),"."),(0,o.kt)("h2",{id:"sharing-common-behavior-and-user-interaction"},"Sharing common behavior and user interaction"),(0,o.kt)("p",null,"You want to share common UI logic?"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"../fundamentals/component-features"},"component features")," or examine\n",(0,o.kt)("a",{parentName:"p",href:"../frameworks-and-libraries/angular-components-mixins"},"the class-based mixins used by Angular Components"),"."))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);