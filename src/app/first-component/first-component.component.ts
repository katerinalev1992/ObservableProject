import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {MessageService} from "../message-service.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
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
