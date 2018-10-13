import {Injectable} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string): void {
    this.subject.next({ text: message });
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
