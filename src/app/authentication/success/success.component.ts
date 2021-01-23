import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SigninService} from '../signin/signin.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private signinService: SigninService,
    private router: Router,
  ) { }

  token;

  ngOnInit(): void {
    this.signinService.setExternalWindow(window);
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.signinService.saveToken(this.token);
      this.signinService.destroyWindow();
    });
  }

}
