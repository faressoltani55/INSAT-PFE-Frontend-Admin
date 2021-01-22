import { Component, OnInit } from '@angular/core';
import {SigninService} from './signin.service';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import {Utils} from '../../utils/utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showPortal = false;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private signinService: SigninService
    ) { }

  username = '';
  password = '';
  loading = false;

  faMicrosoft = faMicrosoft;

  ngOnInit(): void {
  }

  openAuthWindow(): void {
    this.showPortal = true;

  }

  login(): void {
    this.loading = true;
    console.log('login');
    this.userService.login(this.username, this.password).subscribe(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('refresh', data.refresh);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }


  loginWithMicrosoft(): void {
    this.loading = true;
    this.userService.loginWithMicrosoft().subscribe((data) => {
      console.log(data);
    });
  }
}
