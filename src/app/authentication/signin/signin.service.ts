import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // save a reference to the window so we can close it
  externalWindow: Window | null = null;

  constructor() { }

  setExternalWindow(window: Window | null): void {
    // create an external window
    console.log(window);
    this.externalWindow = window;
  }

  destroyWindow(): void {
    // close the window
    console.log(this.externalWindow);
    if (this.externalWindow){
      this.externalWindow.close();
    }
  }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
  }
}
