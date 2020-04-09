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
// tslint:disable-next-line: no-unsafe-any
const context: any = require.context('./', true, /\.spec\.ts$/);
// tslint:disable-next-line: no-unsafe-any
context.keys().map(context);
