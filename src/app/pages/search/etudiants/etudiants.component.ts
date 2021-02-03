import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {Student} from '../../../utils/models/Student';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students: Student[];
  loading = false;

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.loading = true;
    this.studentService.get().subscribe((data) => {
      console.log(data);
      this.students = data;
      this.loading = false;
    });
  }

}
