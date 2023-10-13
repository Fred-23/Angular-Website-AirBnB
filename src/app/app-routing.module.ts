import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailledpageComponent } from './components/detailledpage/detailledpage.component';
import { MainPageComponent } from './components/main-page/main-page.component';


//Ce composant gère la gestion des url et la redirection lors de l'appui sur une carte
const routes: Routes = [ { path: '', redirectTo: 'main', pathMatch: 'full' },
{ path: 'main', component: MainPageComponent },
{ path: 'detailledpage', component: DetailledpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
