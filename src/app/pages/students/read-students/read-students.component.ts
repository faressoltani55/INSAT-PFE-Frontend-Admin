import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
import {ToastrService} from "ngx-toastr";
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../utils/models/Student";
import {Professor} from "../../../utils/models/Professor";

@Component({
  selector: 'app-read-students',
  templateUrl: './read-students.component.html',
  styleUrls: ['./read-students.component.css']
})
export class ReadStudentsComponent implements OnInit {
  arrayBuffer:any;
  studentsFile: File = null;
  students = [];
  uploadedStudents = []
  hidden = true;
  constructor(private studentService: StudentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.studentService.get().subscribe(
      result => this.students = result
    )
  }

  handleFileInput(event) {
    this.studentsFile = event.target.files[0];
    this.hidden = false;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      let data = new Uint8Array(this.arrayBuffer);
      let arr = [];
      for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join("");
      let workbook = XLSX.read(bstr, {type:"binary"});
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      let uploaded : any = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      for (let stu of uploaded) {
        let bdate =  stu.birthDate.toString().split("/")
        let student: Student = {
          id: "",
          firstName: stu.firstName,
          lastName: stu.lastName,
          username: stu.username,
          email: stu.email,
          password: "12345678",
          CIN: stu.CIN,
          nationality: stu.nationality,
          phoneNumber: stu.phoneNumber,
          role: "STUDENT",
          studentNumber: stu.studentNumber,
          major: stu.major,
          level: stu.level,
          diploma: stu.diploma,
          birthDate: new Date(bdate[2]+"-"+bdate[1]+"-"+bdate[0]),
          birthPlace: stu.birthPlace,
          photo: "",
          CV: "",
          active: true
        };
        this.uploadedStudents.push(student);
      }
    }
    fileReader.readAsArrayBuffer(this.studentsFile);
  }

  upload() {
    this.studentService.addMany(this.uploadedStudents).subscribe(
      result => {
        this.hidden = true;
        this.getStudents();
        this.showNotification("Professeurs ajoutés avec succés !")
      }
    )
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

}
