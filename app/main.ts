/// <reference path="../typings/index.d.ts" />

import "./polyfills";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './scripts/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

console.log('Running JIT compiled');

platformBrowserDynamic().bootstrapModule(AppModule);
