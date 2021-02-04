import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-pfe-subject-requests',
  templateUrl: './pfe-subject-requests.component.html',
  styleUrls: ['./pfe-subject-requests.component.css']
})
export class PfeSubjectRequestsComponent implements OnInit {

  constructor(public socketService: SocketService) { }

  ngOnInit(): void {
  }

}
