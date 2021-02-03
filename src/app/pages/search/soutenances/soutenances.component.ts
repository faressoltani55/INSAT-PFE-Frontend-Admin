import { Component, OnInit } from '@angular/core';
import {SoutenancesService} from '../../../services/soutenances.service';
import {Soutenance} from '../../../utils/models/Soutenance';

@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css']
})
export class SoutenancesComponent implements OnInit {

  constructor(private soutenancesService: SoutenancesService) { }

  soutenances: Soutenance[];
  loading = false;

  ngOnInit(): void {
    this.getSoutenances();
  }

  getSoutenances(): void {
    this.loading = true;
    this.soutenancesService.getAllSoutenances().subscribe((data) => {
      this.soutenances = data;
      this.soutenances.forEach((item) => {
        item.dateString = new Date(item.dateTime).toLocaleDateString('en-US');
      });
      this.loading = false;
    });
  }
}
