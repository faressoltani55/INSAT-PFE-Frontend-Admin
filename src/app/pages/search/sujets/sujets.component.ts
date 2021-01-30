import { Component, OnInit } from '@angular/core';
import {SujetsService} from '../../../services/sujets.service';
import {Subject} from '../../../utils/models/Subject';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  constructor(private sujetsServices: SujetsService) { }

  sujets: Subject[];
  loading = false;

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.loading = true;
    this.sujetsServices.getAllSujets().subscribe((data) => {
      this.sujets = data;
      console.log(data);
      this.loading = false;
    });
  }

}
