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

  sendMessage(): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.messageService.sendMessage('Message from Root child to subscribed components!');
  }

  clearMessage(): void {
    // очищаем сообщения
    this.messageService.clearMessage();
  }
}
