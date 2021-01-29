import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SujetsService } from 'src/app/services/sujets.service';
import { Subject } from 'src/app/utils/models/Subject';
import { SubjectStatus } from 'src/app/utils/enums/subject-status';

@Component({
  selector: 'app-subject-request-card',
  templateUrl: './subject-request-card.component.html',
  styleUrls: ['./subject-request-card.component.css']
})
export class SubjectRequestCardComponent implements OnInit {

  pendingSubject: Subject;
  refusalReason;
  loading = false;

  constructor(private route: ActivatedRoute, private sujetsService: SujetsService) { }

  ngOnInit(): void {
  this.sujetsService.getSujetById(this.route.snapshot.paramMap.get("id")).subscribe((data) => {
    this.pendingSubject = data;
    this.loading = false;
  });}

  acceptRequest(){
    this.sujetsService.updateSujetStatus(this.pendingSubject._id, SubjectStatus.ACCEPTED).subscribe((data) => {
    });
  }

  refuseRequest(){
    this.sujetsService.updateSujetStatus(this.pendingSubject._id, SubjectStatus.REFUSED).subscribe((data) => {
    });
    this.sujetsService.updateSujetAdministrationNotice(this.pendingSubject._id, this.refusalReason).subscribe((data) => {
    });
  }

  assignProfessor(){
  }
}
