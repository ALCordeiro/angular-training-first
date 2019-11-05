import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { ComponentStylesEncapsulationComponent } from './component-styles-encapsulation/component-styles-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentStylesComponent,
    ComponentStylesEncapsulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
