import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Year} from '../models/year.model';
import {YearService} from '../services/year.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Session} from '../models/session.model';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.css']
})
export class AddSoutenanceComponent implements OnInit {

  formGroup: FormGroup;
  sessionId: string;
  rooms = ['2B6-3', '2B6-4', '2B6-5'];

  constructor(private formBuilder: FormBuilder,
              private yearService: YearService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group(
      {
        dateTime: new FormControl(''),
        room: new FormControl(''),
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        if (params.session) {
          this.sessionId = params.session;
        }
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  submitAddSoutenance(): void {
    const soutenance = {
      session: this.sessionId,
      ...this.formGroup.value
    };
    this.yearService.postSoutenance(soutenance).subscribe(
      (response: any) => {
        window.history.back();
      }, (err: any) => {
        console.log(err);
      }
    );
  }
}
