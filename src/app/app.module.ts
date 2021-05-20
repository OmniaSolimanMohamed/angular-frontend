import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeFooterComponent } from './Components/home-footer/home-footer.component';
import { HomeHeaderComponent } from './Components/home-header/home-header.component';
import { HomeBodyComponent } from './Components/home-body/home-body.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { AboutBodyComponent } from './Components/about-body/about-body.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    HomeComponent,
    AboutComponent,
    AboutBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
