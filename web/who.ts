import { NgModule, Component } from "@angular/core";

@Component({
  selector: 'who',
  template: `
      <input [(ngModel)]="name">
      <br>
      Hello, {{name}}
  `,
})
export class WhoComp {
  name: string = '';

  constructor() {
    console.log('123');
    xyzsd;
    // throw 'xyz';
  }
};


//
// hi(1233);

// //============================================================================
//
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'my-app',
//   template: `
//       <tlist [title]="'a1'"></tlist>
//       <tlist [title]="'a2'"></tlist>
//       <H3>Dynamic content</H3>
//       <runtime-content></runtime-content>
//   `,
// })
// export class AppComponent { }
// // <tlist></tlist>
//
//
// //---------------------------------------------------------------------------
//
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
//
// import { UtilModule } from './util';
// import { TemplateComponentModule } from './template';
//
// @NgModule({
//     imports: [
//         BrowserModule,
//         FormsModule,
//         UtilModule,
//         TemplateComponentModule,
//     ],
//     declarations: [
//         AppComponent,
//     ],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }
//
//
// //----------------------------------------------------------------------
//
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic().bootstrapModule(AppModule);
