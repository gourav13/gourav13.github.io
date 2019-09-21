import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AlertModule} from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SchoolxprodersComponent } from './schoolxproders/schoolxproders.component';
import { NavmainComponent } from './navmain/navmain.component';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SchoolxprodersComponent,
    NavmainComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component:MainpageComponent},
      {path: 'card', component:CardComponent},
      { path: 'schoolxproders', component: SchoolxprodersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
