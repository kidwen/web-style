import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

declare const require: any;

getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
);
// eslint-disable-next-line 
const context: any = require.context('./', true, /\.spec\.ts$/);
// eslint-disable-next-line
context.keys().map(context);
