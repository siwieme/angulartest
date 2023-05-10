import {Component, Input, OnInit} from '@angular/core';

//+/ Heb je hieronder (bij @Component) rode lijntjes staan?
//+/ Voer de foutmelding "this syntax requires an imported helper but module tslib..."
//+/ aan Ecosia of Google of... en vind (bijvoorbeeld) op
//+/ https://stackoverflow.com/questions/52801814/this-syntax-requires-an-imported-helper-but-module-tslib-cannot-be-found-wit
//+/ een mogelijke oplossing.
//+/ Namelijk:
//+/ voeg de drie regels hieronder op de juiste plaats toe in het bestand tsconfig.json
//+/ (staat helemaal onderaan het lijstje van de bestanden in het projectoverzicht).
//+/
//+/ "paths": {
//+/  "tslib" : ["path/to/node_modules/tslib/tslib.d.ts"]
//+/ },

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  //+/ Deze instantievariabelen corresponderen met de zelf-gemaakte attributen
  //+/ die aan de <app-notification>-tag in overview.component.html werden toegevoegd:
  //+/
  //+/ <app-notification id="{{n.id}}"
  //+/                   icoon="{{n.icon}}"
  //+/                   boodschap="{{n.message}}">
  //+/ </app-notification>
  //+/
  //+/ De initiële waarden voor deze instantievariabelen worden bepaald door
  //+/ de waarden die deze attributen krijgen binnen de <app-notification>-tag
  //+/ (dus {{n.id}} etc.).

  @Input() ID: number | undefined;
  @Input() boodschap: string | undefined;
  @Input() icoon: string | undefined;

  tijdsaanduiding: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
