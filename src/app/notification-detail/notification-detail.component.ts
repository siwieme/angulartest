import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  id : number | undefined;
  notification: {id:number,message:string,icon:string} | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private service: NotificationService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get("id");
    this.service.haalNotification(this.id).subscribe(notif => this.notification = notif);
  }

}
