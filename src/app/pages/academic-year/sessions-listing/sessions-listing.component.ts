import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Session} from '../models/session.model';
import {YearService} from '../services/year.service';
import {Year} from '../models/year.model';

@Component({
  selector: 'app-sessions-listing',
  templateUrl: './sessions-listing.component.html',
  styleUrls: ['./sessions-listing.component.css']
})
export class SessionsListingComponent implements OnInit {

  yearId: string;
  year: Year;
  sessionsList: any[];
  p: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private yearService: YearService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        if (params.year) {
          this.yearId = params.year;
          this.yearService.getYearById(this.yearId).subscribe(
            (response: any) => {
              this.year = response;
            }, (err: any) => {
              console.log(err);
            }
          );
          this.getSessions();
        }
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  getSessions(): void {
    this.yearService.getSessions().subscribe(
      (response: any[]) => {
        this.sessionsList = response.filter( (session: Session) => session.year[0] === this.yearId );
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
