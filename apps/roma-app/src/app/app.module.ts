import { NgModule } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { CoreModule } from '@simples-empresa/angular/core'
import { ThemeModule } from '@simples-empresa/madero'
import { RoutesModule } from './routes/routes.module'
import { SharedModule } from '@simples-empresa/angular/shared'
import { FormlyConfigModule } from './formly-config.module'
import { NgxPermissionsModule } from 'ngx-permissions'
import { ToastrModule } from 'ngx-toastr'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { environment } from '@envs'
import { BASE_URL } from '@simples-empresa/angular/core'
import { httpInterceptorProviders } from '@simples-empresa/angular/core'
import { appInitializerProviders } from '@simples-empresa/angular/core'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemDataService } from '@simples-empresa/angular/shared'

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
    SharedModule,
    FormlyConfigModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // Demo purposes only for GitHub Pages
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }, httpInterceptorProviders, appInitializerProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
