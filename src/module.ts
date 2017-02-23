import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WhoComp } from './who';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        WhoComp,
    ],
    bootstrap: [WhoComp]
})
export class AppModule {
  constructor() {
    console.log('app created');
  }
}
