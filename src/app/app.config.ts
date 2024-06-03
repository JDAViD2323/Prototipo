import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptor/error-handler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimationsAsync(), provideAnimationsAsync(),BrowserModule,provideHttpClient(withFetch(),withInterceptors([errorHandlerInterceptor]),
  )
  ]
};


