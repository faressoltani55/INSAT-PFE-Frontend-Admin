import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  func =["Lister les enseignants", "Modifier/ Ajouter un enseignant", "Uploader via un fichier XLS"]
  routes =["listing", "add", "read"]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(event) {
    let value = event.target.value
    if (value) {
      this.router.navigate(["professors/"+value]);
    }
    return false;
  }

}
