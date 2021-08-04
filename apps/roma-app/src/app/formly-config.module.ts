import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { SharedModule } from '@simples-empresa/angular/shared'

import { FormlyModule } from '@ngx-formly/core'
import { FormlyFieldComboboxComponent } from './formly-template'
import { FormlyWrapperPanelComponent } from './formly-wrapper'
import { FormlyValidation } from './formly-validation'

/**
 * Formly global configuration
 */
const formlyModuleProviders = FormlyModule.forRoot({
  types: [{ name: 'combobox', component: FormlyFieldComboboxComponent }],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [],
}).providers as Provider[]

@NgModule({
  imports: [SharedModule],
  declarations: [FormlyFieldComboboxComponent, FormlyWrapperPanelComponent],
  providers: [FormlyValidation],
})
export class FormlyConfigModule {
  constructor(formlyValidation: FormlyValidation) {
    formlyValidation.init()
  }

  static forRoot(): ModuleWithProviders<FormlyConfigModule> {
    return {
      ngModule: FormlyConfigModule,
      providers: [formlyModuleProviders],
    }
  }
}
