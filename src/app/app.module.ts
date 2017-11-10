import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule,ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }