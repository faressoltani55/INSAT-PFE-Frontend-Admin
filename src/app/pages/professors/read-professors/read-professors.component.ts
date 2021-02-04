import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {ToastrService} from "ngx-toastr";
import { ProfessorsService } from 'src/app/services/professors.service';
import {Professor} from "../../../utils/models/Professor";

@Component({
  selector: 'app-read-professors',
  templateUrl: './read-professors.component.html',
  styleUrls: ['./read-professors.component.css']
})
export class ReadProfessorsComponent implements OnInit {
  arrayBuffer:any;
  professorsFile: File = null;
  professors = [];
  uploadedProfessors = []
  hidden = true;
  constructor(private professorService: ProfessorsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfessors()
  }

  getProfessors() {
    this.professorService.get().subscribe(
      result => this.professors = result
    )
  }

  handleFileInput(event) {
    this.professorsFile = event.target.files[0];
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
      let uploaded : any = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      for(let prof of uploaded) {
        let professor : Professor = {
          id : "",
          firstName: prof.firstName,
          lastName: prof.lastName,
          username: prof.username,
          email: prof.email,
          password: "12345678",
          CIN: prof.CIN,
          nationality: prof.nationality,
          phoneNumber: prof.phoneNumber,
          role: "PROFESSOR",
          professorId: prof.professorId,
          department: prof.department,
          title: prof.title
        };
        this.uploadedProfessors.push(professor);
      }
    }
    fileReader.readAsArrayBuffer(this.professorsFile);
  }

  upload() {
    this.professorService.addMany(this.uploadedProfessors).subscribe(
      result => {
        this.hidden = true;
        this.getProfessors();
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
