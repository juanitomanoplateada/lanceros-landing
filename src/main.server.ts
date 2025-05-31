import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';

const bootstrap = () =>
  bootstrapApplication(App, {
    ...appConfig,
    providers: [...(appConfig.providers || []), provideServerRendering()],
  });

export default bootstrap;
