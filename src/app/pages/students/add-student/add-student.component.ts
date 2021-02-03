import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  students = [];
  stud  = {
    id : "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "0000",
    CIN: 0,
    nationality: "",
    phoneNumber: "",
    role: "STUDENT",
    studentNumber: "",
    major: "",
    level: 0,
    diploma: "",
    birthDate: new Date(),
    birthPlace: "",
    photo: "",
    CV: "",
    active: false
  }
  hidden = true;
  hidden2 = true;
  toDelete : any;
  constructor(private studentService: StudentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getStudents();
    this.resetProf();
  }

  resetProf() {
    this.stud = {
      id : "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "0000",
      CIN: 0,
      nationality: "",
      phoneNumber: "",
      role: "STUDENT",
      studentNumber: "",
      major: "",
      level: 0,
      diploma: "",
      birthDate: new Date(),
      birthPlace: "",
      photo: "",
      CV: "",
      active: false
    }
  }

  getStudents() {
    this.studentService.get().subscribe(
      result => this.students = result
    )
  }

  add() {
    if(this.stud.id === ""){
      this.stud.password = "azerty123"
      this.studentService.add(this.stud).subscribe(
        result => {
          this.showNotification("Etudiant Ajouté avec succées !")
          this.getStudents()
          this.resetProf()
        }
      )
    }
    else
      this.studentService.update(this.stud).subscribe(
        result => {
          this.showNotification("Etudiant Modifié avec succées !")
          this.getStudents()
          this.resetProf()
        }
      )
  }

  pick(stud) {
    this.stud = stud
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

  alertDelete(stud) {
    this.hidden2 = false
    this.toDelete = stud
  }

  delete() {
    this.studentService.delete(this.toDelete._id).subscribe(
      result => {
        this.getStudents()
        this.hidden2 = true
        this.showNotification("Etudiant Supprimé")
      }
    )
  }

  cancel() {
    this.hidden2 = true
  }

}
