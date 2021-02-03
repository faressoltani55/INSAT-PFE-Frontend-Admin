import { Component, OnInit } from '@angular/core';
import {ProfessorService} from "../../../services/professor.service";

@Component({
  selector: 'app-professors-listing',
  templateUrl: './professors-listing.component.html',
  styleUrls: ['./professors-listing.component.css']
})
export class ProfessorsListingComponent implements OnInit {
  professors = [];
  p: number = 1;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors() {
    this.professorService.get().subscribe(
      result => this.professors = result
    )
  }

}
