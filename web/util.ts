
console.log('hid');

console.log('abc');

// import { Component, Input, Injectable} from '@angular/core';
//
// @Injectable()
// export class LocalServ {
//     public title: string;
//
//     constructor() {
//       console.log('local-serv: ', this);
//     }
// }
//
//
// @Component({
//     selector: 'tlist',
//     template: `
//         <ul>
//           <li *ngFor="let item of items">{{serv.title}} : {{item.title}}</li>
//           <slist></slist>
//         </ul>
//     `,
//     providers: [LocalServ],
// })
// export class TListComponent {
//     private items: any[] = [
//         { title: 'Item 1' },
//     ];
//
//     @Input('title')
//     title: string;
//
//     update() {
//       this.serv.title = this.title;
//       console.log('tlist-comp: %o %s', this, this.serv.title);
//     }
//
//
//     constructor(private serv: LocalServ) {
//       this.update();
//     }
//
//
//     // ngOnChanges(changes: {[property: string]: SimpleChange }) {
//     //   // let change = changes["title"];
//     //   // if (change.currentValue != this.fieldValue) {
//     //   //   this.title = change.currentValue;
//     //   //   this.update();
//     //   //
//     //   // }
//     //   console.log(123, changes);
//     // }
//
// }
//
//
// @Component({
//     selector: 'slist',
//     template: `
//         <ul>
//           <li *ngFor="let item of items">{{serv.title}} : {{item.title}}</li>
//         </ul>
//     `,
// })
// export class SListComponent {
//     private items: any[] = [
//         { title: 'Item A' },
//     ];
//
//     constructor(private serv: LocalServ) {
//       console.log('slist-comp: %o, %s', this, serv.title);
//     }
// }
//
// //------------------------------------------------------------------------
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
//
// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   declarations: [
//       TListComponent, SListComponent
//   ],
//   exports: [
//     TListComponent, SListComponent
//   ],
//   providers: [LocalServ]
// })
// export class UtilModule {
// }
