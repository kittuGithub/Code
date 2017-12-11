import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { DnDFormsRoutingModule, routedComponents } from './dndForms-routing.module';

@NgModule({
  declarations: [
      ...routedComponents,
  ],
  imports: [
    ThemeModule,
    DnDFormsRoutingModule
  ],
})
export class DnDFormsModule { }