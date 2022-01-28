import { SliderOneComponent } from './../app/slider-one/slider-one.component';
import { AnimationMusicComponent } from './../app/animation-music/animation-music.component';
import { NotFoundComponent } from './../app/not-found/not-found.component';
import { MesProjetsComponent } from './../app/mes-projets/mes-projets.component';
import { ContactComponent } from './../app/contact/contact.component';
import { MesHobbiesComponent } from './../app/mes-hobbies/mes-hobbies.component';
import { MaFormationComponent } from './../app/ma-formation/ma-formation.component';
import { HomeComponent } from './../app/home/home.component';
import { Routes } from '@angular/router';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';



const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: MaFormationComponent },
  { path: 'sliderOne', component: SliderOneComponent },
  { path: 'hobby', component: MesHobbiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projet', component: MesProjetsComponent },
  { path: 'music', component: AnimationMusicComponent },
  { path: 'nav', component: NavBarComponent },
  { path: '**', component: NotFoundComponent }
];

export { ROUTES };
