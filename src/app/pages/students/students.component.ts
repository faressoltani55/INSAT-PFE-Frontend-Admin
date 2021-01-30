import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  func =["List Students", "Edit Student"]
  i = 0
  constructor() { }

  ngOnInit(): void {
  }

  switch() {
    this.i = (this.i + 1) % 2
  }
}
