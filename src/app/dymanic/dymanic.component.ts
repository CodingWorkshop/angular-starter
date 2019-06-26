import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { DynamicComponentDirective } from '../_directive/dynamic-component.directive';

import { DynamicComponentService } from '../_serviece/dynamic-component.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-dymanic',
  templateUrl: './dymanic.component.html',
  styleUrls: ['./dymanic.component.scss']
})
export class DymanicComponent implements OnInit {
  @ViewChild(DynamicComponentDirective)
  componentHost: DynamicComponentDirective;
  list: any[] = [];
  compnent: '';
  style: '';
  styleValue: '';
  checkComponent: any[] = [{ Name: '登入', componentName: 'loginComponent', isSelect: false }, { Name: '註冊', componentName: 'registerComponent', isSelect: false }, { Name: '登入2', componentName: 'loginComponent', isSelect: false }];
  isCheckComponent: any;
  mapping = new Map<string, any>(
    [
      ['loginComponent', LoginComponent],
      ['registerComponent', RegisterComponent]
    ]
  );
  positionA = { x: 0, y: 0 };
  positionB = { x: 160, y: 0 };
  isChange: boolean;
  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {

  }

  createComponent() {
    this.isCheckComponent = this.checkComponent.filter(x => x.isSelect);
    this.isCheckComponent.forEach((z, i) => {
      z.position = { x: 160 * (i), y: 15 }

    });

  }

  addComponent(name) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(name)
    );
    const viewContainerRef = this.componentHost.viewContainerRef;
    const component = viewContainerRef.createComponent(componentFactory);

    this.list.push(component);
    this.list[this.list.length - 1].location.nativeElement.style[this.style] = this.styleValue;
  }

  onMoving(event, component, index) {
    if (this.isChange) {
      return;
    }
    let allComponent = this.isCheckComponent;
    let totalCount = allComponent.length - 1;
    let maxWidth = 160 * totalCount;
    let maxHeight = 15 * totalCount;
    if (event.x > maxWidth) {
      this.isCheckComponent.push(component);

      this.isCheckComponent.splice(index, 1);
      this.isCheckComponent.forEach((x, i) => {
        x.position = { x: 160 * i, y: 15 }
      })
      this.isChange = true;
    } else {
      if (event.x > component.position.x + 160 || event.x < component.position.x - 160) {
        let nowWidth = Math.ceil(event.x / 160);
        this.isCheckComponent.splice(nowWidth, 0, component);
        this.isCheckComponent.splice(index, 1);
        this.isCheckComponent.forEach((x, i) => {
          x.position = { x: 160 * i, y: 15 }
        })
        this.isChange = true;
      }
    }
  }
}
