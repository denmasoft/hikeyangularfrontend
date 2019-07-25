import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GithubRepoSearchFormComponent} from './components/repo-search-form/repo-search-form.component';
import { SharedModule } from '@shared/shared.module';
import {I18nModule} from '@i18n/i18n.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        I18nModule,
        CommonModule,
        SharedModule,
    ],
    declarations: [
        GithubRepoSearchFormComponent
    ],
    exports: [
        GithubRepoSearchFormComponent]
})
export class GithubModule {
}
