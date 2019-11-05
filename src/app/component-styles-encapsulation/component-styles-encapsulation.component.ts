import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-styles-encapsulation',
  templateUrl: './component-styles-encapsulation.component.html',
  styleUrls: ['./component-styles-encapsulation.component.scss'],
  // encapsulation: ViewEncapsulation.Native,
  // encapsulation: ViewEncapsulation.ShadowDom,
  // encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.None
})
export class ComponentStylesEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
