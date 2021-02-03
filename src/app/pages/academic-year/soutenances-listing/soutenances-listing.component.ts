import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YearService} from '../services/year.service';
import {Session} from '../models/session.model';
import {Soutenance} from '../models/soutenance.model';

@Component({
  selector: 'app-soutenances-listing',
  templateUrl: './soutenances-listing.component.html',
  styleUrls: ['./soutenances-listing.component.css']
})
export class SoutenancesListingComponent implements OnInit {

  sessionId: string;
  soutenancesList: any[];
  p: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private yearService: YearService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        if (params.session) {
          this.sessionId = params.session;
          this.getSoutenances();
        }
      }, (err: any) => {
        console.log(err);
      }
    );

  }

  getSoutenances(): void {
    this.yearService.getSoutenances().subscribe(
      (response: any[]) => {
        this.soutenancesList = response.filter( (soutenance: Soutenance) => soutenance.session === this.sessionId );
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
