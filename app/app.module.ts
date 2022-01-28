import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaFormationComponent } from './ma-formation/ma-formation.component';
import { MesProjetsComponent } from './mes-projets/mes-projets.component';
import { ContactComponent } from './contact/contact.component';
import { MesHobbiesComponent } from './mes-hobbies/mes-hobbies.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EffectDirective } from './directive/effect.directive';
import { SliderOneComponent } from './slider-one/slider-one.component';
import { AnimationMusicComponent } from './animation-music/animation-music.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from 'src/common/Routing';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
    EffectDirective,
    SliderOneComponent,
    AnimationMusicComponent,
    NavBarComponent,
    MesHobbiesComponent,
    ContactComponent,
    MesProjetsComponent,
    MaFormationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [
    NavBarComponent,
    SliderOneComponent,
    AnimationMusicComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
