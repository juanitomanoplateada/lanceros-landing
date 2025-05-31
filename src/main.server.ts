import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideServerRendering } from '@angular/platform-server';

const bootstrap = () =>
  bootstrapApplication(App, {
    ...config,
    providers: [
      ...(config.providers || []),
      provideServerRendering(),
      {
        provide: 'STREAM_URL',
        useValue: process.env['STREAM_URL'],
      },
    ],
  });

export default bootstrap;
