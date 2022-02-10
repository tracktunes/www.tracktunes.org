import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

Amplify.configure(aws_exports);

// Supported log levels: ERROR, WARN, INFO, DEBUG, VERBOSE
// Amplify.Logger.LOG_LEVEL = 'DEBUG';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log('Error caught in main: ' + err));
