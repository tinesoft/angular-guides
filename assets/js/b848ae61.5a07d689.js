"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[6439],{1803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={},u="Build dynamic and reusable components",p={unversionedId:"fundamentals/build-dynamic-and-reusable-components",id:"fundamentals/build-dynamic-and-reusable-components",title:"Build dynamic and reusable components",description:"Suggested topics",source:"@site/docs/fundamentals/build-dynamic-and-reusable-components.md",sourceDirName:"fundamentals",slug:"/fundamentals/build-dynamic-and-reusable-components",permalink:"/angular-guides/docs/fundamentals/build-dynamic-and-reusable-components",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/fundamentals/build-dynamic-and-reusable-components.md",tags:[],version:"current",lastUpdatedBy:"Lars Gyrup Brink Nielsen",lastUpdatedAt:1653690344,formattedLastUpdatedAt:"5/27/2022",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Build an Angular project that supports experimental Ivy APIs",permalink:"/angular-guides/docs/fundamentals/build-an-angular-project-that-supports-experimental-ivy-apis"},next:{title:"Class-based Angular services",permalink:"/angular-guides/docs/fundamentals/class-based-angular-services"}},s={},c=[{value:"Suggested topics",id:"suggested-topics",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-dynamic-and-reusable-components"},"Build dynamic and reusable components"),(0,i.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ng-content>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<ng content select="app-example-item">')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*ngComponentOutlet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*ngTemplateOutlet")),(0,i.kt)("li",{parentName:"ul"},"CDK Portal"),(0,i.kt)("li",{parentName:"ul"},"CDK Overlay"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/IndigoSoft/ngx-component-outlet"},"NgxComponentOutlet")),(0,i.kt)("li",{parentName:"ul"},"Child queries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContentChild")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContentChildren")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ViewChild")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ViewChildren")),(0,i.kt)("li",{parentName:"ul"},"Static vs. dynamic child query"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'ngProjectAs="app-example-item"')),(0,i.kt)("li",{parentName:"ul"},"View Engine",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ComponentFactoryResolver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ViewContainerRef")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TemplateRef")),(0,i.kt)("li",{parentName:"ul"},"Entry components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ComponentRef.hostView#detectChanges")))),(0,i.kt)("li",{parentName:"ul"},"Ivy Instruction Set",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"renderComponent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detectChanges"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"markDirty"))))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);