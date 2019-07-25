import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GithubModule} from './github/github.module';
import { SharedModule } from '@shared/shared.module';
import {I18nModule} from '@i18n/i18n.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        I18nModule,
        CommonModule,
        GithubModule,
        SharedModule
    ],
    exports: [GithubModule]

})
export class RemoteRepositoryModule {
}
