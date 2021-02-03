import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from 'src/app/services/professors.service';

@Component({
  selector: 'app-professors-listing',
  templateUrl: './professors-listing.component.html',
  styleUrls: ['./professors-listing.component.css']
})
export class ProfessorsListingComponent implements OnInit {
  professors = [];
  p: number = 1;

  constructor(private professorsService: ProfessorsService) { }

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors() {
    this.professorsService.get().subscribe(
      result => this.professors = result
    )
  }

}
