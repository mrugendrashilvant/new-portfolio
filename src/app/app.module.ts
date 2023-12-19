import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SkillComponent } from './skill/skill.component';
import { SkillDescriptionComponent } from './skill/skill-description/skill-description.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SkillComponent,
    SkillDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
