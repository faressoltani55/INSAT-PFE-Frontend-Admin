import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchType = 1;

  ngOnInit(): void {
  }

  setSearchType(num: number): void {
    this.searchType = num;
  }
}
