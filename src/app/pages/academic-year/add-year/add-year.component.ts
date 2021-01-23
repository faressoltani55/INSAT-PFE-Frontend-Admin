import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {YearService} from '../services/year.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.css']
})
export class AddYearComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private yearService: YearService,
              private router: Router) {
    this.formGroup = this.formBuilder.group(
      {
        year: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        internshipsStartDate: new FormControl(''),
        internshipsEndDate: new FormControl(''),
      }
    );
  }

  ngOnInit(): void {
  }

  submitAddYear(): void {
    const year = this.formGroup.value;
    this.yearService.postYear(year).subscribe(
      (response: any) => {
        this.router.navigate(['/academic-year']);
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
