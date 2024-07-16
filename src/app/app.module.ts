import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {CdkMenu, CdkMenuBar, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";

@NgModule({
  declarations: [
    AppComponent,
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
