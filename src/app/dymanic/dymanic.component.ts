import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { DynamicComponentDirective } from '../_directive/dynamic-component.directive';

import { DynamicComponentService } from '../_serviece/dynamic-component.service';
@Component({
  selector: 'app-dymanic',
  templateUrl: './dymanic.component.html',
  styleUrls: ['./dymanic.component.scss']
})
export class DymanicComponent implements OnInit {
  @ViewChild(DynamicComponentDirective)
  componentHost: DynamicComponentDirective;
  selectedComponentName: string;
  list: any[] = [];
  compnent: '';
  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {}

  addComponent(name) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(name)
    );
    const viewContainerRef = this.componentHost.viewContainerRef;
    const component = viewContainerRef.createComponent(componentFactory);
    this.list.push(component);
  }
}
