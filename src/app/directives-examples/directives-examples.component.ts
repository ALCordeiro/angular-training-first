import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-examples',
  templateUrl: './directives-examples.component.html',
  styleUrls: ['./directives-examples.component.scss']
})
export class DirectivesExamplesComponent implements OnInit {
  condition: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
