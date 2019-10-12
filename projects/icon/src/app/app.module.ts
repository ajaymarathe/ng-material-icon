import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMaterialIconModule } from 'ng-material-icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
