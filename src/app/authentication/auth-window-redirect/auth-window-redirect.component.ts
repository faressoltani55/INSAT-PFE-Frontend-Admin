import {Component, EventEmitter, OnInit} from '@angular/core';
import {SigninService} from '../signin/signin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth-window-redirect',
  templateUrl: './auth-window-redirect.component.html',
  styleUrls: ['./auth-window-redirect.component.css']
})
export class AuthWindowRedirectComponent implements OnInit {

  eventEmitter = new EventEmitter();

  constructor(private signinService: SigninService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          const token: string = params.token;
          // const trueToken = token.replace(/ /g, '+');
          console.log(token);
          localStorage.setItem('token', token);
          this.eventEmitter.emit('close window');
        }
      );
  }
}
