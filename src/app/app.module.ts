import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SkillComponent } from './skill/skill.component';
import { SkillDescriptionComponent } from './skill/skill-description/skill-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {CdkMenu, CdkMenuBar, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SkillComponent,
    SkillDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    CdkMenuBar,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
