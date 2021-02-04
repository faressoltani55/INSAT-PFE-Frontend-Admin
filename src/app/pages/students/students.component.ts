import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  func =["Lister les étudiants", "Modifier/ Ajouter un étudiant", "Uploader via un fichier XLS"]
  routes =["listing", "add", "read"]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(value) {
    if (value) {
      this.router.navigate(["students/"+value]);
    }
  }
}
