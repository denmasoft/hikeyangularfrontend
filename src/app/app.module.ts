import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import {CoreModule} from '@core/core.module';
import {MainModule} from '@main/main.module';
import {SharedModule} from '@shared/shared.module';
import {I18nModule} from '@i18n/i18n.module';
import { RemoteRepositoryModule } from 'app/remoteRepository/remote-repository.module';
import { GithubModule } from 'app/remoteRepository/github/github.module';
import { GithubRepoService } from 'app/remoteRepository/github/services/githubRepoService';
import { GithubRepoRepositoryImpl } from 'app/remoteRepository/github/repositories/githubRepoRepositoryImpl';
import { GithubRepoRepository } from 'app/remoteRepository/github/repositories/githubRepoRepository';
import { ResponseService } from '@core/services/responseService';
import { LocalStorageService } from '@core/services/localStorageService';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    I18nModule,
    CoreModule,
    RemoteRepositoryModule,
    GithubModule,
    MainModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GithubRepoService,
    ResponseService,
    LocalStorageService,
   {provide: GithubRepoRepository, useClass: GithubRepoRepositoryImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
