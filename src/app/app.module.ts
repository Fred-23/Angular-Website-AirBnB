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
import { MapsComponent } from './components/maps/maps.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BubbleMapsComponent } from './components/bubble-maps/bubble-maps.component';
import { DetailledpageComponent } from './components/detailledpage/detailledpage.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailledCardComponent } from './components/detailled-card/detailled-card.component'; 


//Dans ce fichier on ajoute tous les librairies qu'on utilise dans notre page web


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    ScrollbarComponent,
    CookiePopUpComponent,
    MapsComponent,
    BubbleMapsComponent,
    DetailledpageComponent,
    MainPageComponent,
    DetailledCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    LeafletModule,
    RouterModule.forRoot([ //Pour configurez vos routes
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent  },
  { path: 'detailledpage', component: DetailledpageComponent },
]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
