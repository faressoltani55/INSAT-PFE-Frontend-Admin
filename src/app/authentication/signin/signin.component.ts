import { Component, OnInit } from '@angular/core';
import {SigninService} from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showPortal = false;

  constructor(private signinService: SigninService) { }

  ngOnInit(): void {
  }

  openAuthWindow(): void {
    this.showPortal = true;

  }

}
