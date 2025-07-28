import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private socket!: WebSocket;
  private messageSubject = new Subject<number>();
  private messageSubject_1 = new Subject<number>();
  private messageSubject_2 = new Subject<number>();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('wss://s.altnet.rippletest.net:51233');
    this.socket.onopen = () => {
      setInterval(() => {
        this.socket.send(JSON.stringify({ id: 1, command: 'random' }));
      }, 5000);
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.result?.random) {
        const base = data.result.random;
        const nums = [
          parseInt(base.slice(0, 8), 16) % 10,
          parseInt(base.slice(8, 16), 16) % 10,
          parseInt(base.slice(16, 24), 16) % 10,
        ];
        this.messageSubject.next(nums[0]);
        this.messageSubject_1.next(nums[1]);
        this.messageSubject_2.next(nums[2]);
      }
    };
  }

  getMessages(id: number): Observable<number> {
    switch (id) {
      case 1:
        return this.messageSubject_1.asObservable();
      case 2:
        return this.messageSubject_2.asObservable();
      default:
        return this.messageSubject.asObservable();
    }
  }
}
