// import { NgModule } from '@angular/core';
//
// // console.log(333, module.id); // file url
//
// import {
//     Component,
//     ViewChild, ViewContainerRef, ComponentRef,
//     Compiler, ComponentFactory,
// } from '@angular/core';
//
// import { CommonModule } from '@angular/common';
//
// import { UtilModule } from './util';
//
// import { Injectable } from "@angular/core";
// @Injectable()
// export class TemplateComponentFactory {
//
//   constructor(private compiler: Compiler) {
//   }
//
//   public getFactory(template: string) : Promise<ComponentFactory<any>> {
//
//     @Component({
//         selector: 'dynamic-component',
//         template: template
//     })
//     class DynamicComp {
//       name: string = 'Denys'
//     };
//
//     @NgModule({
//       imports: [
//         CommonModule, UtilModule
//       ],
//       declarations: [
//         DynamicComp
//       ]
//     })
//     class DynamicCompModule {
//     }
//
//     return new Promise((resolve) => {
//       this.compiler.compileModuleAndAllComponentsAsync(DynamicCompModule).then((module) => {
//         for(let i = module.componentFactories.length - 1; i >=0; i--) {
//           let factory = module.componentFactories[i];
//           console.log(123, factory)
//           if (factory.componentType === DynamicComp) {
//              resolve(factory);
//              break;
//           }
//         }
//       }, (errmsg) => {
//         console.log('errors: ', errmsg);
//       });
//     });
//   }
// }
//
//
// @Component({
//     selector: 'runtime-content',
//     template: `
//         <div>
//             <textarea rows="5" [(ngModel)]="template"></textarea><br>
//             <button (click)="compileTemplate()">Compile</button>
//             <h3>Output: </h3>
//             <div #content></div>
//         </div>
//     `
// })
// export class RuntimeContentComponent {
//
//     template: string = '<div>\nHello, {{name}}\n</div>';
//
//     @ViewChild('content', { read: ViewContainerRef })
//     content: ViewContainerRef;
//
//     constructor(
//         private compiler: TemplateComponentFactory) {
//     }
//
//     compileTemplate() {
//
//       this.compiler.getFactory(this.template).then((factory) => {
//           this.content.clear();
//           this.content.createComponent(factory);
//
//       });
//     }
// }
//
//
// //------------------------------------------------------------------------
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
//
// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     UtilModule
//   ],
//   declarations: [
//       RuntimeContentComponent,
//   ],
//   providers: [
//     TemplateComponentFactory
//   ],
//   exports: [
//     RuntimeContentComponent,
//   ]
// })
// export class TemplateComponentModule {
//
// }
