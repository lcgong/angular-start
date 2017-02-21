

import 'util.ts';

function hi(x: string) {
  console.log('45xx');
  throw 'ddd';
}

hi(1233);

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
