import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeroComponent} from "./sections/hero/hero.component";
import {SkillSectionComponent} from "./sections/skill-section/skill-section.component";
import {ExperienceComponent} from "./sections/experience/experience.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroComponent,
    SkillSectionComponent,
    ExperienceComponent,
    CommonModule,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
