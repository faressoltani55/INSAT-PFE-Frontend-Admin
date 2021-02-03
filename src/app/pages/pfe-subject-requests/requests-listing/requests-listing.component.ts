import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SujetsService } from 'src/app/services/sujets.service';
import { SubjectStatus } from 'src/app/utils/enums/subject-status';
import { Subject } from 'src/app/utils/models/Subject';

@Component({
  selector: 'app-requests-listing',
  templateUrl: './requests-listing.component.html',
  styleUrls: ['./requests-listing.component.css']
})
export class RequestsListingComponent implements OnInit {

  pendingSubjects: Subject[];
  constructor(private sujetsService: SujetsService, private router: Router, private route: ActivatedRoute) { }
  loading = false;
  p: number = 1;

  ngOnInit(): void {
    this.getPendingSubjects();
  }

  getPendingSubjects(): void {
    this.loading = true;
    this.sujetsService.getSujetsByStatus(SubjectStatus.PENDING).subscribe((data) => {
      console.log(data);
      this.pendingSubjects = data;
      this.loading = false;
    });
  }

  pfeDetails(id): void {
    this.router.navigateByUrl('/propositions-pfe/' + id);
  }
}
