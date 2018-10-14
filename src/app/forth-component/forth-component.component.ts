import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "../message-service.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-forth-component',
  templateUrl: './forth-component.component.html',
  styleUrls: ['./forth-component.component.css']
})
export class ForthComponentComponent implements OnInit, OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // подписываемся на сообщения
    this.subscription = this.messageService.getMagazine1().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy(): void {
    // нужно отписаться чтобы не выгружать память
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }
}
