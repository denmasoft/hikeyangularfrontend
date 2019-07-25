import {NgModule} from '@angular/core';
import {I18nModule} from '../i18n/i18n.module';
import {CommonModule} from '@angular/common';
import {ShowLoadingComponent} from '@shared/components/show-loading/show-loading.component';
@NgModule({
    imports: [
        CommonModule,
        I18nModule
    ],
    declarations: [
        ShowLoadingComponent
    ],
    exports: [
        ShowLoadingComponent
    ]
})
export class SharedModule {
}
