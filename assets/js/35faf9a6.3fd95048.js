"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[6295],{6670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],s={},p="Testing a standalone component using the Angular testbed",l={unversionedId:"standalone-apis/testing-a-standalone-component-using-the-angular-testbed",id:"standalone-apis/testing-a-standalone-component-using-the-angular-testbed",title:"Testing a standalone component using the Angular testbed",description:"Creating a component fixture for a standalone component",source:"@site/docs/standalone-apis/testing-a-standalone-component-using-the-angular-testbed.md",sourceDirName:"standalone-apis",slug:"/standalone-apis/testing-a-standalone-component-using-the-angular-testbed",permalink:"/angular-guides/docs/standalone-apis/testing-a-standalone-component-using-the-angular-testbed",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/standalone-apis/testing-a-standalone-component-using-the-angular-testbed.md",tags:[],version:"current",lastUpdatedBy:"Lars Gyrup Brink Nielsen",lastUpdatedAt:1653690344,formattedLastUpdatedAt:"5/27/2022",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Providing dependencies in a standalone Angular feature",permalink:"/angular-guides/docs/standalone-apis/providing-dependencies-in-a-standalone-angular-feature"},next:{title:"Using the HttpClient in a standalone Angular application",permalink:"/angular-guides/docs/standalone-apis/using-the-httpclient-in-a-standalone-angular-application"}},c={},m=[{value:"Creating a component fixture for a standalone component",id:"creating-a-component-fixture-for-a-standalone-component",level:2},{value:"Creating a test host component for a standalone component",id:"creating-a-test-host-component-for-a-standalone-component",level:2},{value:"Stubbing a child component in a standalone component test",id:"stubbing-a-child-component-in-a-standalone-component-test",level:2},{value:"Stubbing a component-level dependency in a standalone component test",id:"stubbing-a-component-level-dependency-in-a-standalone-component-test",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-a-standalone-component-using-the-angular-testbed"},"Testing a standalone component using the Angular testbed"),(0,r.kt)("h2",{id:"creating-a-component-fixture-for-a-standalone-component"},"Creating a component fixture for a standalone component"),(0,r.kt)("p",null,"To write a basic component test for a standalone component, pass the component class to ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.createComponent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { TestBed } from "@angular/core/testing";\nimport { By } from "@angular/platform-browser";\n\nimport { CategoryListComponent } from "./category-list.component";\n\ndescribe(CategoryListComponent.name, () => {\n  beforeEach(() => {\n    fixture = TestBed.createComponent(CategoryListComponent);\n    fixture.autoDetectChanges();\n  });\n\n  let fixture: ComponentFixture<CategoryListComponent>;\n\n  it("lists categories", () => {\n    const listItems = fixture.debugElement.queryAll(By.css("li"));\n    expect(listItems.length).toBeGreaterThan(0);\n  });\n});\n')),(0,r.kt)("p",null,"No need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.configureTestingModule")," before creating a component fixture for a standalone component."),(0,r.kt)("h2",{id:"creating-a-test-host-component-for-a-standalone-component"},"Creating a test host component for a standalone component"),(0,r.kt)("p",null,"To interact with a standalone component through its component API, we add it to the Angular testing module's ",(0,r.kt)("inlineCode",{parentName:"p"},"imports")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from "@angular/core";\nimport { TestBed } from "@angular/core/testing";\nimport { By } from "@angular/platform-browser";\n\nimport { DailyForecastComponent } from "./daily-forecast.component";\n\ndescribe(DailyForecastComponent.name, () => {\n  @Component({\n    standalone: true,\n    template: `<weather-daily-forecast [temperatureCelsius]="temperatureCelsius"></weather-daily-forecast>`,\n  })\n  class TestHostComponent {\n    @Input()\n    temperatureCelsius: number | null = null;\n  }\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      imports: [DailyForecastComponent],\n    });\n    hostFixture = TestBed.createComponent(TestHostComponent);\n    hostFixture.autoDetectChanges();\n  });\n\n  let hostFixture: ComponentFixture<DailyForecastComponent>;\n\n  it("displays the temperature in degrees Fahrenheit", () => {\n    hostFixture.componentInstance.temperatureCelsius = 20;\n    hostFixture.detectChanges();\n\n    const temperatureFahrenheit = fixture.debugElement.query(By.css("[data-testid=temperature-fahrenheit]"));\n    expect(temperatureFahrenheit.nativeElement.textContent).toBe("68 \xb0F");\n  });\n});\n')),(0,r.kt)("h2",{id:"stubbing-a-child-component-in-a-standalone-component-test"},"Stubbing a child component in a standalone component test"),(0,r.kt)("p",null,"To stub child components, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.overrideComponent")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from "@angular/core";\nimport { TestBed } from "@angular/core/testing";\nimport { By } from "@angular/platform-browser";\n\nimport { CategoryListComponent } from "./category-list.component";\nimport { CategoryListItemComponent } from "./category-list-item.component";\n\ndescribe(CategoryListComponent.name, () => {\n  @Component({\n    selector: "app-category-list-item",\n    standalone: true,\n    template: `<li><ng-content></ng-conent></li>`,\n  })\n  class TestCategoryListItemComponent {}\n\n  beforeEach(() => {\n    TestBed.overrideComponent(CategoryListComponent, {\n      add: {\n        imports: [TestCategoryListItemComponent],\n      },\n      remove: {\n        imports: [CategoryListItemComponent],\n      },\n    });\n    fixture = TestBed.createComponent(CategoryListComponent);\n    fixture.autoDetectChanges();\n  });\n\n  let fixture: ComponentFixture<CategoryListComponent>;\n\n  it("lists categories", () => {\n    const listItems = fixture.debugElement.queryAll(By.css("li"));\n    expect(listItems.length).toBeGreaterThan(0);\n  });\n});\n')),(0,r.kt)("p",null,"With this test setup, ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCategoryListItemComponent")," replaces ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryListItemComponent")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryListComponent")," is rendered. Make sure that the test child component uses the same selector as the component it replaces."),(0,r.kt)("p",null,"This technique is also used to replace directives and pipes used in a standalone component's template."),(0,r.kt)("h2",{id:"stubbing-a-component-level-dependency-in-a-standalone-component-test"},"Stubbing a component-level dependency in a standalone component test"),(0,r.kt)("p",null,"While not a technique that only applies to standalone components, the way to replace a component-level provider in a component test is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed.overrideComponent")," function, passing ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," instructions for ",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"viewProviders"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable } from "@angular/core";\nimport { TestBed } from "@angular/core/testing";\nimport { By } from "@angular/platform-browser";\n\nimport { Category } from "./category";\nimport { CategoryComponent } from "./category.component";\nimport { CategoryState } from "./category-state.service";\n\ndescribe(CategoryComponent.name, () => {\n  @Injectable()\n  class CategoryStateStub implements CategoryState {\n    category$ = of({\n      description: "A category used in tests",\n      name: "Test category",\n      slug: "test",\n    } as Category);\n  }\n\n  beforeEach(() => {\n    TestBed.overrideComponent(CategoryComponent, {\n      add: {\n        providers: [\n          {\n            provide: CategoryState,\n            useClass: CategoryStateStub,\n          },\n        ],\n      },\n      remove: {\n        providers: [CategoryState],\n      },\n    });\n    fixture = TestBed.createComponent(CategoryComponent);\n    fixture.autoDetectChanges();\n  });\n\n  let fixture: ComponentFixture<CategoryListComponent>;\n\n  it("displays the category title", () => {\n    const title = fixture.debugElement.query(By.css("h1"));\n    expect(title.nativeElement.textContent.trim()).toBe("Test category");\n  });\n});\n')),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryState")," service is replaced with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryStateStub")," service for the purpose of this test suite."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);