import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.css']
})
export class StudentsListingComponent implements OnInit {
  students = [];
  p: number = 1;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.get().subscribe(
      result => this.students = result
    )
  }

}
