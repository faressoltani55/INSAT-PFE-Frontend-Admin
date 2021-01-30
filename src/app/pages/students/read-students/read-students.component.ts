import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import * as XLSX from "xlsx";
import {StudentService} from "../../../services/student.service";

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
    this.hidden= false;
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
      this.uploadedStudents = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      console.log(this.uploadedStudents)
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
