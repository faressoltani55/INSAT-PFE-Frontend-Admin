import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGrigPlugin from '@fullcalendar/timegrid'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGrigPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  exports: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CalendarModule { }
