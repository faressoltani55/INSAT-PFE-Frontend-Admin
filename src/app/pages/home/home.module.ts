import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {CalendarModule} from '../calendar/calendar.module';
import {SpinnerModule} from '../../components/spinner/spinner.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule,
    SpinnerModule
  ]
})
export class HomeModule { }
