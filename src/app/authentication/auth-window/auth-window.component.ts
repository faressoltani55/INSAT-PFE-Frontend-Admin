import {ApplicationRef, Component, ComponentFactoryResolver, HostListener, Injector, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SigninService} from '../signin/signin.service';

@Component({
  selector: 'app-auth-window',
  templateUrl: './auth-window.component.html',
  styleUrls: ['./auth-window.component.css']
})
export class AuthWindowComponent implements OnInit {

  constructor(private signinService: SigninService) { }

  ngOnInit(): void{
    // create an external window
    const externalWindow = window.open('http://localhost:3000/auth', 'auth', 'width=600,height=700,left=200,top=200', true);
    this.signinService.setExternalWindow(externalWindow);
  }

  @HostListener('close window')
  closeWindow(): void {
    console.log('close');
    this.signinService.destroyWindow();
  }
}
