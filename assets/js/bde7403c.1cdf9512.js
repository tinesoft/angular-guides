"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[2723],{6286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={},p="Build your own app shell component",l={unversionedId:"design-patterns/build-your-own-app-shell-component",id:"design-patterns/build-your-own-app-shell-component",title:"Build your own app shell component",description:"Suggested topics",source:"@site/docs/design-patterns/build-your-own-app-shell-component.md",sourceDirName:"design-patterns",slug:"/design-patterns/build-your-own-app-shell-component",permalink:"/angular-guides/docs/design-patterns/build-your-own-app-shell-component",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/design-patterns/build-your-own-app-shell-component.md",tags:[],version:"current",lastUpdatedBy:"Lars Gyrup Brink Nielsen",lastUpdatedAt:1653690344,formattedLastUpdatedAt:"5/27/2022",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Design patterns",permalink:"/angular-guides/docs/category/design-patterns"},next:{title:"Common container component",permalink:"/angular-guides/docs/design-patterns/common-container-component"}},s={},c=[{value:"Suggested topics",id:"suggested-topics",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-your-own-app-shell-component"},"Build your own app shell component"),(0,i.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pre-rendering the app shell using Angular CLI"),(0,i.kt)("li",{parentName:"ul"},"Configuring app shell features",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hiding/displaying app bar, navigation drawer, footer, etc. using routes"))),(0,i.kt)("li",{parentName:"ul"},"Using the router to open the side drawer"),(0,i.kt)("li",{parentName:"ul"},"Including component-specific content in the app bar with a custom structural directive"),(0,i.kt)("li",{parentName:"ul"},"How routes with children relates to nested ",(0,i.kt)("inlineCode",{parentName:"li"},"<router-outlet>"),"s")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);