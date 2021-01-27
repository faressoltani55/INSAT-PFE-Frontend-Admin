import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {YearService} from '../services/year.service';
import {Router} from '@angular/router';
import {Year} from '../models/year.model';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  formGroup: FormGroup;
  years: Year[];
  majors: any[];

  constructor(private formBuilder: FormBuilder,
              private yearService: YearService,
              private router: Router) {
    this.formGroup = this.formBuilder.group(
      {
        year: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        name: new FormControl(''),
        major: new FormControl(''),
      }
    );
    this.yearService.getYears().subscribe(
      (response: any) => {
        this.years = response;
      }, (err: any) => {
        console.log(err);
      }
    );
    this.yearService.getMajors().subscribe(
      (response: any) => {
        this.majors = response;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  submitAddSession(): void {
    const session = this.formGroup.value;
    console.log(session);
    this.yearService.postYear(session).subscribe(
      (response: any) => {
        this.router.navigate(['/academic-year']);
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
