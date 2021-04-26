import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ColorsGridComponent } from './components/colors-grid/colors-grid.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { VoteResultComponent } from './components/vote-result/vote-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsGridComponent,
    NavMenuComponent,
    VoteResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
