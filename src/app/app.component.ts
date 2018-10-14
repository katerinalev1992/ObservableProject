import { Component } from '@angular/core';
import {MessageService} from "./message-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'ObservableProject';

  constructor(private messageService: MessageService) {}

  sendMagazine1(): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.messageService.sendMagazine1('New your magazine');
  }


  sendMagazine2(): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.messageService.sendMagazine2('Hacker magazine');
  }

  clearMessage(): void {
    // очищаем сообщения
    this.messageService.clearMessage();
  }
}
