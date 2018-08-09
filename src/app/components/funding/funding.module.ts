import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FundingRoutingModule } from './funding-routing.module';
import { FundingStep1Component } from './step1/funding-step1.component';
import { FundingStep2Component } from './step2/funding-step2.component';
import { FundingStep3Component } from './step3/funding-step3.component';
import { FundingTopComponent } from './shared/funding-top/funding-top.component';

@NgModule({
  imports: [
    CommonModule,
    FundingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FundingStep1Component,
    FundingStep2Component,
    FundingStep3Component,
    FundingTopComponent
  ]
})
export class FundingModule { }