import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';

import { ClassicLayoutModule } from 'app/layout/layouts/vertical/classic/classic.module';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutModule } from './layouts/vertical/classy/classy.module';

const layoutModules = [

    // Vertical navigation
    ClassicLayoutModule,
    ClassyLayoutModule,

];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        SettingsModule,
        ...layoutModules
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule
{
}
