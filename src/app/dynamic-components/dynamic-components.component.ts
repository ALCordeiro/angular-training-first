import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {
  name = 'Angular';
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit()
  {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.name = this.name;
  }

}
