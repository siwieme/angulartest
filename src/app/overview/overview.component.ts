import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../notification.service";
import {Notif} from "../notif";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  numberOfNotificationsVisible:number = 5;

  //+/ geef het juiste type aan voor de (lege) list die je klaarzet
  //+/ anders krijg je de foutmelding
  //+/        Type '{ id: number; message: string; icon: string; }[]'
  //+/        is not assignable to type 'never[]'.
  //+/  [TENZIJ JE NIET IN 'strict'-MODUS WERKT]
  //+/ Een eerste online aanknopingspunt
  //+/ (al staat hier een nog specifieker probleem):
  //+/   https://stackoverflow.com/questions/42091602/type-is-not-assignable-to-type-title-string-text-string
  notificationsVisible : Notif[]  = [];
  notifications: Notif[]  = [];

  //+/ nieuw voor paragraaf 7 (Service): service als parameter aan constructor meegeven
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.haalNotifications()
      .subscribe((lijst)=>{
        this.notifications = lijst;
        this.adjustVisibleNotifications();
      });


    //+/ Let op! Van zodra je met http-aanvragen gaat werken
    //+/ (zoals in de functie 'haalNotifications()' gebeurt),
    //+/ mag je geen code meer schrijven die opnieuw aan de kantlijn begint.
    //+/ In een vorige versie stond de aanroep van de hulpmethode
    //+/   this.adjustVisibleNotifications();
    //+/ allicht nog gewoon aan de hoofdkantlijn van de functie 'ngOnInit()'.
    //+/ Maar dat kan nu niet meer (er komen foutmeldingen over 'undefined').
    //+/ Verwerk de oproep van die hulpmethode dus IN de code die pas uitgevoerd
    //+/ wordt nadat de informatie van de Observable aangekomen is.
  }

  showMore(){
    this.numberOfNotificationsVisible = Math.min(this.numberOfNotificationsVisible+5, this.notifications.length);
    this.adjustVisibleNotifications();

    if(this.numberOfNotificationsVisible === this.notifications.length){
      let domElt = document.getElementById("id_load_more");
      // @ts-ignore
      domElt.style.display = "none";
    }
  }

  adjustVisibleNotifications(){
      this.notificationsVisible = this.notifications.slice(0,this.numberOfNotificationsVisible);
  }

}
