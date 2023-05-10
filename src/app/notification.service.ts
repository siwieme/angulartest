import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs"; //+/ laat dit weg: /dist/types";
import {RestNotif} from "./rest-notif";
import {Notif} from "./notif";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  url: string = "https://6411ab56a7b02f6a0301535c.mockapi.io/notifications";

  constructor(private http: HttpClient) {
  }

  //+/ vergeet de accolades niet na =>
  haalNotifications(): Observable<Notif[]> {
    // @ts-ignore

    //+/ Deze code hoort bij de url http://www.mocky.io/v2/5be453402f00002c00d9f48f
    //+/ Voer de url in in een browser,
    //+/ en kijk heel goed naar het type van het object dat daar staat.
    //+/ In dit geval staat er een object met 1 attribuut, nl. 'notifications'
    //+/ (en dat attribuut is een lijst van objecten die aan de RestNotif-interface
    //+/ voldoen).
    //+/ Dus de template die met de functieoproep 'get' meegegeven wordt,
    //+/ is het type van dat object: {notifications:RestNotif[]}.
    return this.http.get<{notifications:RestNotif[]}>(this.url)
      .pipe(tap(_ => console.log("notifications opgehaald")),
        map((notifs) => {
          // @ts-ignore (mogelijks nodig voor strict mode)
		  
          // Notificatie wordt gemapt van type RestNotif (zie bestand rest-notif.ts)
          // naar Notif (zie bestand notif.ts)
          return notifs.map((notif) => {
            return new Notif(+notif.id, notif.message, notif.icon);
          })
        }));
  }


  haalNotification(id: number): Observable<Notif> {
    return this.http.get<{notifications:RestNotif}>(this.url+"/"+id)
      .pipe(tap(_ => console.log("notifications opgehaald")),
        map((notif) => {
          // @ts-ignore
          return new Notif(+notif.id, notif.message, notif.icon);
        }));
  }
}