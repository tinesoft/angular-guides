"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[6331],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4375:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={},s="Providing dependencies in a standalone Angular feature",u={unversionedId:"standalone-apis/providing-dependencies-in-a-standalone-angular-feature",id:"standalone-apis/providing-dependencies-in-a-standalone-angular-feature",title:"Providing dependencies in a standalone Angular feature",description:"Using route providers",source:"@site/docs/standalone-apis/providing-dependencies-in-a-standalone-angular-feature.md",sourceDirName:"standalone-apis",slug:"/standalone-apis/providing-dependencies-in-a-standalone-angular-feature",permalink:"/angular-guides/docs/standalone-apis/providing-dependencies-in-a-standalone-angular-feature",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/standalone-apis/providing-dependencies-in-a-standalone-angular-feature.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Lazy loading a standalone component using the Angular Router",permalink:"/angular-guides/docs/standalone-apis/lazy-loading-a-standalone-component-using-the-angular-router"},next:{title:"Using the HttpClient in a standalone Angular application",permalink:"/angular-guides/docs/standalone-apis/using-the-httpclient-in-a-standalone-angular-application"}},l={},c=[{value:"Using route providers",id:"using-route-providers",level:2},{value:"Interoperability with NgModules",id:"interoperability-with-ngmodules",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"providing-dependencies-in-a-standalone-angular-feature"},"Providing dependencies in a standalone Angular feature"),(0,a.kt)("h2",{id:"using-route-providers"},"Using route providers"),(0,a.kt)("p",null,"If all routes in a feature ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes")," array are top-level routes, we can wrap them in a component-less route with an empty path by nesting them in an array assigned to its ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," property."),(0,a.kt)("p",null,"Next, we add the feature-specific dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," array of our feature routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Routes } from "@angular/router";\n\nimport { CategoryComponent } from "./category.component";\nimport { CategoryHttpClient } from "./category-http-client.service";\nimport { CategoryListComponent } from "./category-list.component";\nimport { CategoryState } from "./category-state.service";\n\nexport const routes: Routes = [\n  {\n    path: "",\n    children: [\n      {\n        path: "",\n        pathMatch: "full",\n        component: CategoryListComponent,\n      },\n      {\n        path: ":name",\n        component: CategoryComponent,\n      },\n    ],\n    providers: [CategoryHttpClient, CategoryState],\n  },\n];\n')),(0,a.kt)("h2",{id:"interoperability-with-ngmodules"},"Interoperability with NgModules"),(0,a.kt)("p",null,"Angular libraries using the forRoot-forFeature pattern expose an NgModule that provides dependencies that we must load with the Angular feature using it. To use it in a standalone Angular feature, we pass the NgModule to the ",(0,a.kt)("inlineCode",{parentName:"p"},"importProvidersFrom")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { importProvidersFrom } from "@angular/core";\nimport { Routes } from "@angular/router";\nimport { EffectsModule } from "@ngrx/effects";\nimport { StoreModule } from "@ngrx/store";\n\nimport { CategoryEffects } from "./+state/effects";\nimport { categoryFeature } from "./+state/reducers";\nimport { CategoryComponent } from "./category.component";\nimport { CategoryListComponent } from "./category-list.component";\n\nexport const routes: Routes = [\n  {\n    path: "",\n    children: [\n      {\n        path: "",\n        pathMatch: "full",\n        component: CategoryListComponent,\n      },\n      {\n        path: ":name",\n        component: CategoryComponent,\n      },\n    ],\n    providers: [\n      importProvidersFrom(EffectsModule.forFeature([CategoryEffects])),\n      importProvidersFrom(StoreModule.forFeature(categoryFeature)),\n    ],\n  },\n];\n')))}g.isMDXComponent=!0}}]);