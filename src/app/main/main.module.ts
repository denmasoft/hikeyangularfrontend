import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nModule} from '@i18n/i18n.module';
import {SharedModule} from '@shared/shared.module';
import {RemoteRepositoryModule} from 'app/remoteRepository/remote-repository.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@main/components/dashboard/dashboard.component';
import {MainPageComponent} from '@main/components/main-page/main-page.component';
export const ROUTES: Routes = [
    {
        path: 'check-repo-stability', component: DashboardComponent,
        children: [
            {path: '', component: MainPageComponent},
        ]
    }
];
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        I18nModule,
        CommonModule,
        RouterModule,
        SharedModule,
        RemoteRepositoryModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        DashboardComponent,
        MainPageComponent
    ],
    exports: [
        DashboardComponent,
        MainPageComponent]
})
export class MainModule {
}
