import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { ComponentStylesEncapsulationComponent } from './component-styles-encapsulation/component-styles-encapsulation.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { HelloComponent } from './dynamic-components/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentStylesComponent,
    ComponentStylesEncapsulationComponent,
    DynamicComponentsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HelloComponent]
})
export class AppModule { }
