import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SujetsService } from 'src/app/services/sujets.service';
import { Subject } from 'src/app/utils/models/Subject';
import { SubjectStatus } from 'src/app/utils/enums/subject-status';
import { Professor } from 'src/app/utils/models/Professor';
import { ProfessorsService } from 'src/app/services/professors.service';
import { MajorEnum } from 'src/app/utils/enums/Major';
import { DepartmentEnum } from 'src/app/utils/enums/Department';
import {SocketService} from '../../../services/socket.service';
import { ViewChild, ElementRef} from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-subject-request-card',
  templateUrl: './subject-request-card.component.html',
  styleUrls: ['./subject-request-card.component.css']
})

export class SubjectRequestCardComponent implements OnInit {
  
  @ViewChild('closeAcceptanceModal') closeAcceptanceModal: ElementRef;
  @ViewChild('closeRefusalModal') closeRefusalModal: ElementRef;

  pendingSubject: Subject;
  possibleProfessors: Professor[];
  selectedProfessor: Professor
  notice: string;

  constructor(private route: ActivatedRoute, private sujetsService: SujetsService, private professorsService: ProfessorsService, private router: Router,  private socketService: SocketService) { }

  ngOnInit(): void {
  
  this.sujetsService.getSujetById(this.route.snapshot.paramMap.get("id")).subscribe((data) => {
    
    this.pendingSubject = data;
    console.log(data)
    this.professorsService.getProfessorsByDepartment(this.getResponsibleDepartment()).subscribe((data) => {
      this.possibleProfessors = data
    });
  });
  }

  acceptRequest(){
    this.sujetsService.updateSujet(this.pendingSubject._id, { 'professor': this.selectedProfessor, 'status' : SubjectStatus.ACCEPTED, 'administrationNotice': this.notice}).subscribe((data) => {
    });
    this.socketService.sendAcceptedNotif(this.notice);
    this.closeAcceptanceModal.nativeElement.click();
    this.redirect();
  }

  refuseRequest() {
    this.sujetsService.updateSujet(this.pendingSubject._id, { 'status' : SubjectStatus.REFUSED, 'administrationNotice': this.notice}).subscribe((data) => {
    });
    this.socketService.sendRefusedNotif(this.notice);
    this.closeRefusalModal.nativeElement.click();
    this.redirect();
  }

  redirect(){
    this.router.navigate(['/propositions-pfe'])
  }

  public getResponsibleDepartment() {
    switch(this.pendingSubject.student.major) { 
      case MajorEnum.GL:
      case MajorEnum.RT:
        return DepartmentEnum.MI
        break;
      case MajorEnum.IIA:
      case MajorEnum.IMI:
        return DepartmentEnum.PI
        break;
      case MajorEnum.CH:
      case MajorEnum.BIO:
          return DepartmentEnum.CB
          break;
      default:
          return null
          break;
        } 
  }
}
