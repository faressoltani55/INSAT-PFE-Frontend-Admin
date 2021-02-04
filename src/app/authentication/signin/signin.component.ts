import {Component, OnDestroy, OnInit} from '@angular/core';
import {SigninService} from './signin.service';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import {Utils} from '../../utils/utils';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  private onSubject = new Subject<{ key: string, value: any }>();

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private signinService: SigninService,
    private router: Router,

  ) { }

  username = '';
  password = '';
  loading = false;

  faMicrosoft = faMicrosoft;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stop();
  }


  login(): void {
    this.loading = true;
    console.log('login');
    this.userService.login(this.username, this.password).subscribe(data => {
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('refresh', data.refreshToken);
      localStorage.setItem('user', data.user._id);
      this.loading = false;
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }


  loginWithMicrosoft(): void {
    this.loading = true;
    const externalWindow = window.open('http://localhost:3000/auth/microsoft', 'auth', 'width=600,height=700,left=200,top=200', true);
    this.signinService.setExternalWindow(externalWindow);
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent): void {
    if (event.storageArea === localStorage) {
      try {
        this.router.navigateByUrl('/home');
      } catch (e) {
        console.log('hh');
      }
      this.onSubject.next({ key: event.key, value: event.newValue });
    }
  }

  private stop(): void {
    window.removeEventListener("storage", this.storageEventListener.bind(this));
    this.onSubject.complete();
  }
}
