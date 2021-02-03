import { Component, OnInit } from '@angular/core';
import {Professor} from '../../../utils/models/Professor';
import {ProfessorsService} from '../../../services/professors.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  constructor(private professorsService: ProfessorsService) { }

  professors: Professor[];
  loading = false;
  p: number = 1;

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.loading = true;
    this.professorsService.getAllProfessors().subscribe((data) => {
      console.log(data);
      this.professors = data;
      this.loading = false;
    });
  }
}
