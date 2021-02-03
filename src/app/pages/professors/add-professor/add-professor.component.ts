import { Component, OnInit } from '@angular/core';
import {Professor} from "../../../utils/models/Professor";
import {ToastrService} from "ngx-toastr";
import { ProfessorsService } from 'src/app/services/professors.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
  professors = [];
  prof  = {
    id : "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "0000",
    CIN: 0,
    nationality: "",
    phoneNumber: "",
    role: "PROFESSOR",
    professorId: "",
    department: "",
    title: ""
  }
  departmentNames = [
    "Génie Informatique et Mathématiques",
    "Département de Génie Physique et Instrumentation",
    "Département de Génie Biologique et de Chimie",
    "Département de Sciences Sociales, Langues et Formation Générale"
  ];
  hidden = true;
  hidden2 = true;
  toDelete : any;
  constructor(private professorsService: ProfessorsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfessors();
    this.resetProf();
  }

  resetProf() {
    this.prof = {
      id : "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      CIN: 0,
      nationality: "",
      phoneNumber: "",
      role: "PROFESSOR",
      professorId: "",
      department: "",
      title: ""
    }
  }

  getProfessors() {
    this.professorsService.get().subscribe(
      result => this.professors = result
    )
  }

  add() {
    if(this.prof.id === ""){
      this.prof.password = "azerty123"
      this.professorsService.add(this.prof).subscribe(
        result => {
          this.showNotification("Professeur Ajouté avec succées !")
          this.getProfessors()
          this.resetProf()
        }
      )
    }
    else
      this.professorsService.update(this.prof).subscribe(
        result => {
          this.showNotification("Professeur Modifié avec succées !")
          this.getProfessors()
          this.resetProf()
        }
      )
  }

  pick(prof) {
    this.prof = prof
  }

  showNotification(message) {
    this.toastr.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
      "",
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: "toast-top-center"
      }
    );
  }

  alertDelete(prof) {
    this.hidden2 = false
    this.toDelete = prof
  }

  delete() {
    this.professorsService.delete(this.toDelete._id).subscribe(
      result => {
        this.getProfessors()
        this.hidden2 = true
        this.showNotification("Professeur Supprimé")
      }
    )
  }

  cancel() {
    this.hidden2 = true
  }
}
