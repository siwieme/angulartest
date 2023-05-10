import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { OverviewComponent } from './overview/overview.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { EnergyComponent } from './energy/energy.component';
import { SecurityComponent } from './security/security.component';
import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';
import {FormsModule} from "@angular/forms";
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';
import {NotificationService} from "./notification.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    OverviewComponent,
    TemperatureComponent,
    EnergyComponent,
    SecurityComponent,
    TemperatureGaugeComponent,
    NotificationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //+/ toe te voegen voor paragraaf 7 (Service)
  ],
  providers: [NotificationService], //+/ toe te voegen voor paragraaf 7 (Service)
  bootstrap: [AppComponent]
})
export class AppModule { }
