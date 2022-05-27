"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[8979],{7044:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={},p="Enabling animations in a standalone Angular application",s={unversionedId:"standalone-apis/enabling-animations-in-a-standalone-angular-application",id:"standalone-apis/enabling-animations-in-a-standalone-angular-application",title:"Enabling animations in a standalone Angular application",description:"Interoperability using the BrowserAnimationsModule",source:"@site/docs/standalone-apis/enabling-animations-in-a-standalone-angular-application.md",sourceDirName:"standalone-apis",slug:"/standalone-apis/enabling-animations-in-a-standalone-angular-application",permalink:"/angular-guides/docs/standalone-apis/enabling-animations-in-a-standalone-angular-application",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/standalone-apis/enabling-animations-in-a-standalone-angular-application.md",tags:[],version:"current",lastUpdatedBy:"Lars Gyrup Brink Nielsen",lastUpdatedAt:1653690344,formattedLastUpdatedAt:"5/27/2022",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Bootstrapping a standalone application",permalink:"/angular-guides/docs/standalone-apis/bootstrapping-a-standalone-application"},next:{title:"Exporting standalone components from Angular libraries",permalink:"/angular-guides/docs/standalone-apis/exporting-standalone-components-from-angular-libraries"}},u={},c=[{value:"Interoperability using the BrowserAnimationsModule",id:"interoperability-using-the-browseranimationsmodule",level:2},{value:"Future standalone API",id:"future-standalone-api",level:2}],m={toc:c};function d(n){var e=n.components,t=(0,r.Z)(n,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enabling-animations-in-a-standalone-angular-application"},"Enabling animations in a standalone Angular application"),(0,o.kt)("h2",{id:"interoperability-using-the-browseranimationsmodule"},"Interoperability using the BrowserAnimationsModule"),(0,o.kt)("p",null,"As of Angular version 14.0.0-rc.0, there is no dedicated standalone API for Angular browser animations so we pass ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserAnimationsModule")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"importProvidersFrom")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { enableProdMode, importProvidersFrom } from "@angular/core";\nimport { bootstrapApplication } from "@angular/platform-browser";\nimport { BrowserAnimationsModule } from "@angular/platform-browser/animations";\n\nimport { AppComponent } from "./app/app.component";\nimport { environment } from "./environments/environment";\n\nif (environment.production) {\n  enableProdMode();\n}\n\nbootstrapApplication(AppComponent, {\n  providers: [importProvidersFrom(BrowserAnimationsModule)],\n}).catch((err) => console.error(err));\n')),(0,o.kt)("h2",{id:"future-standalone-api"},"Future standalone API"),(0,o.kt)("p",null,"In a future Angular version, a function creating the necessary providers will be available. It might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { enableProdMode } from "@angular/core";\nimport { bootstrapApplication } from "@angular/platform-browser";\nimport { withAnimations } from "@angular/platform-browser/animations";\n\nimport { AppComponent } from "./app/app.component";\nimport { environment } from "./environments/environment";\n\nif (environment.production) {\n  enableProdMode();\n}\n\nbootstrapApplication(AppComponent, {\n  providers: [withAnimations()],\n}).catch((err) => console.error(err));\n')))}d.isMDXComponent=!0},3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),s=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,i(i({ref:e},u),{},{components:t})):a.createElement(f,i({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);