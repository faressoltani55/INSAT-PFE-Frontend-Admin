// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid'; 
// import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Calendar } from '@fullcalendar/core';
import { Soutenance } from '../../utils/models/Soutenance';
import { CalendarService } from '../../services/calendar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  soutenances: Array<Soutenance>;
  events: [{title: string, date: Date}];
  calendarOptions: CalendarOptions;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  constructor(private calendarService: CalendarService,
    private http: HttpClient) { }

  ngOnInit(): void {

    forwardRef(() => Calendar);

    this.calendarService.getSoutenances().subscribe( data =>{
      this.soutenances.push(data);
    });

    if(this.soutenances.length){
      for (let i = 0; i < this.soutenances.length; i++) {
        let newEvent = {
          title: this.soutenances[i].subject.title,
          date: this.soutenances[i].dateTime
        };
        this.events.push(newEvent);
      }
    }


    this.calendarOptions = {
      // plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      dateClick: this.handleDateClick.bind(this),
      events: this.events,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
    };
  }

  

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
