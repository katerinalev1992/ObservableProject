import {Injectable} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class MessageService {
  private magazine1 = new Subject<any>();
  private magazine2 = new Subject<any>();

  sendMagazine1(message: string): void {
    this.magazine1.next({ text: message });
  }

  sendMagazine2(message: string): void {
    this.magazine2.next({ text: message });
  }

  clearMessage(): void {
    this.magazine1.next();
  }

  getMagazine1(): Observable<any> {
    return this.magazine1.asObservable();
  }

  getMagazine2(): Observable<any> {
    return this.magazine2.asObservable();
  }
}
