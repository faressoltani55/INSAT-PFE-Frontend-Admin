import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Address} from '../../utils/models/Adress';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  id =  localStorage.getItem('user');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe( data => {
      this.profile = data;
      console.log(this.profile);
      if (! this.profile.address){
        this.profile.address = new Address();
      }
      console.log(data);
    });
  }

}
