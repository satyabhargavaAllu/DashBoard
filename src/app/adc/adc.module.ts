import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdcRoutingModule } from './adc-routing.module';
import {AdcComponent} from './adc.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RadAcordianComponent } from '../common/rad-acordian/rad-acordian.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdcRoutingModule,
    FormsModule    
  ],
  declarations: [AdcComponent,RadAcordianComponent]
})
export class AdcModule {
  
 }
