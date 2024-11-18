import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HeroSectionComponent } from './layouts/hero-section/hero-section.component';
import { UtilsSectionComponent } from './layouts/utils-section/utils-section.component';
import { FunctionsSectionComponent } from './layouts/functions-section/functions-section.component';
import { CommentsSectionComponent } from './layouts/comments-section/comments-section.component';
import { PlansSectionComponent } from './layouts/plans-section/plans-section.component';
import { FooterSectionComponent } from './layouts/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    HeroSectionComponent,
    UtilsSectionComponent,
    FunctionsSectionComponent,
    CommentsSectionComponent,
    PlansSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
