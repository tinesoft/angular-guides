"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[1472],{8025:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={},s="Common presentational component",p={unversionedId:"design-patterns/common-presentational-component",id:"design-patterns/common-presentational-component",title:"Common presentational component",description:"You want the same UI but for different pieces of the state?",source:"@site/docs/design-patterns/common-presentational-component.md",sourceDirName:"design-patterns",slug:"/design-patterns/common-presentational-component",permalink:"/angular-guides/docs/design-patterns/common-presentational-component",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/design-patterns/common-presentational-component.md",tags:[],version:"current",lastUpdatedBy:"Lars Gyrup Brink Nielsen",lastUpdatedAt:1653690344,formattedLastUpdatedAt:"5/27/2022",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Common container component",permalink:"/angular-guides/docs/design-patterns/common-container-component"},next:{title:"Container components",permalink:"/angular-guides/docs/design-patterns/container-components"}},u={},m=[],l={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-presentational-component"},"Common presentational component"),(0,a.kt)("p",null,"You want the same UI but for different pieces of the state?"),(0,a.kt)("p",null,"Use different container components to data bind to a common presentational\ncomponent."))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=o,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);