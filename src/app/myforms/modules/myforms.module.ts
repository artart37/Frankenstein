import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyformsRoutingModule, formroute } from './myforms-routing.module';
//A directive for my custom reactive validation
import {CustomvalidationDirective} from '../../../app/shared/customvalidation.directive';
//Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule } from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@NgModule({
  //Adding the provider for Material date format
  //https://stackoverflow.com/questions/55721254/how-to-change-mat-datepicker-date-format-to-dd-mm-yyyy-in-simplest-way/55748743
  providers: [
    {
      provide: MAT_DATE_LOCALE,useValue: 'en-GB'
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    },
  ],
  declarations: [
    formroute,
    CustomvalidationDirective
  ],
  imports: [
    CommonModule,
    MyformsRoutingModule,
    ReactiveFormsModule,
    //Material
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class MyformsModule { }
