// 下面这三个包必须开始就加载
import "reflect-metadata";
import "shim";
import "zone.js";

//----------------------------------------------------------------------------
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from 'app/module';
platformBrowserDynamic().bootstrapModule(MainModule);
