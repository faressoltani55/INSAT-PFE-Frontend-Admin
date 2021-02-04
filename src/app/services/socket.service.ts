import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
  }

  startListing(): void {
    this.socket.on('notif', (data: any) => {
      console.log(data);
    });
    console.log(this.socket);
  }

  sendAcceptedNotif(msg: string): void {
    this.socket.emit('notif', {msg, accepted: true});
  }

  sendRefusedNotif(msg: string): void {
    this.socket.emit('notif', {msg, accepted: false});
  }
}
