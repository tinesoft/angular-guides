"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[8443],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=a.createContext({}),s=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=s(n.components);return a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(g,i(i({ref:e},p),{},{components:t})):a.createElement(g,i({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:o,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],u={},l="Lazy loading a standalone component using the Angular Router",s={unversionedId:"standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router",id:"standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router",title:"Lazy loading a standalone component using the Angular Router",description:"Add a loadComponent property to a Route object to lazy load a component. The value is a function that returns a dynamic import statement that points to an ES module (a .ts file), then resolves to the component class:",source:"@site/docs/standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router.md",sourceDirName:"standalone-apis",slug:"/standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router",permalink:"/angular-guides/docs/standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Lazy loading a feature using the Angular Router",permalink:"/angular-guides/docs/standalone-apis/lazy-loading-a-feature-using-the-angular-router"},next:{title:"Providing dependencies in a standalone Angular feature",permalink:"/angular-guides/docs/standalone-apis/providing-dependencies-in-a-standalone-angular-feature"}},p={},c=[],d={toc:c};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lazy-loading-a-standalone-component-using-the-angular-router"},"Lazy loading a standalone component using the Angular Router"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"loadComponent")," property to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," object to lazy load a component. The value is a function that returns a dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statement that points to an ES module (a ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," file), then resolves to the component class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Routes } from "@angular/router";\n\nimport { HomeComponent } from "./app/home.component";\n\nexport const routes: Routes = [\n  {\n    path: "",\n    pathMatch: "full",\n    redirectTo: "home",\n  },\n  {\n    path: "home",\n    component: HomeComponent,\n  },\n  {\n    path: "about",\n    loadComponent: () => import("./about.component").then((m) => m.AboutComponent),\n  },\n];\n')))}m.isMDXComponent=!0}}]);