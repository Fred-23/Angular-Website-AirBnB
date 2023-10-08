import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { CookiePopUpComponent } from './components/cookie-pop-up/cookie-pop-up.component';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component'; // Importez CommonModule
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; // Importez LeafletModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    ScrollbarComponent,
    CookiePopUpComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    LeafletModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
