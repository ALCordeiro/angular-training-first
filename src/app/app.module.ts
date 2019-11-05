import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { ComponentStylesEncapsulationComponent } from './component-styles-encapsulation/component-styles-encapsulation.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { HelloComponent } from './dynamic-components/hello.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HighlightDirective } from './highlight.directive';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { HighlightAdvancedDirective } from './highlight-advanced.directive';
import { NgElseDirective } from './ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentStylesComponent,
    ComponentStylesEncapsulationComponent,
    DynamicComponentsComponent,
    HelloComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    DirectivesExamplesComponent,
    HighlightAdvancedDirective,
    NgElseDirective
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
