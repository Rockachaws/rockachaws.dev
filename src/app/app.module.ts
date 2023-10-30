import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalcPageComponent } from './calc/calc.component';
import { BoxPageComponent } from './box/box.component';
import { CreditsPageComponent} from './credits/credits.component';
import { SettingsPageComponent} from './settings/settings.component';
import { TrainersPageComponent} from './trainers/trainers.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CalcPageComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CalcPageComponent,
    CreditsPageComponent,
    SettingsPageComponent,
    TrainersPageComponent,
    BoxPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }