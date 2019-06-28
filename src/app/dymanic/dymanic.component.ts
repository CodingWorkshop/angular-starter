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
  checkComponent: any[] = [{ Name: '登入', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊', componentName: 'registerComponent', isSelect: false },
  { Name: '登入2', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊2', componentName: 'registerComponent', isSelect: false },
  { Name: '登入3', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊3', componentName: 'registerComponent', isSelect: false },
  { Name: '登入4', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊4', componentName: 'registerComponent', isSelect: false },
  { Name: '登入5', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊5', componentName: 'registerComponent', isSelect: false },
  { Name: '登入6', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊6', componentName: 'registerComponent', isSelect: false },
  { Name: '登入7', componentName: 'loginComponent', isSelect: false },
  { Name: '註冊7', componentName: 'registerComponent', isSelect: false },
  { Name: '登入8', componentName: 'loginComponent', isSelect: false },
  ];
  isCheckComponent: any;
  mapping = new Map<string, any>(
    [
      ['loginComponent', LoginComponent],
      ['registerComponent', RegisterComponent]
    ]
  );
  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {

  }

  selctAll() {
    this.checkComponent.forEach(x => {
      x.isSelect = true;
    })
  }

  createComponent() {
    this.isCheckComponent = this.checkComponent.filter(x => x.isSelect);
    let row = 0;
    let col = 0;
    this.isCheckComponent.forEach((z, i) => {
      if (i != 0 && i % 6 == 0) {
        col++;
        row = 0;
      }
      z.position = { x: 160 * (row), y: 200 * (col) }
      row++;
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

  onMoving(event, component, componentIndex) {
    let allComponent = this.isCheckComponent;
    let totalCount = allComponent.length - 1;
    let maxWidth = 160 * totalCount;
    let maxHeight = 200 * totalCount;
    if (event.x > maxWidth) {
      this.isCheckComponent.push(component);

      this.isCheckComponent.splice(componentIndex, 1);
      let row = 0;
      let col = 0;
      this.isCheckComponent.forEach((x, i) => {
        if (i != 0 && i % 6 == 0) {
          col++;
          row = 0;
        }
        x.position = { x: 160 * (row), y: 200 * (col) }
        row++;
      })
    }
    // else if ((event.x > component.position.x + 160 || event.x < component.position.x - 160) && (event.y > component.position.y + 200 || event.y < component.position.y - 200)) {
    //   console.log(event);
    //   let nowLocationx = Math.ceil(event.x / 160);
    //   let nowLocationy = Math.floor(event.y / 200);
    //   let arrayIndex = nowLocationx + 6 * nowLocationy;
    //   this.isCheckComponent.splice(arrayIndex, 0, component);
    //   if (event.y > component.position.y + 200)
    //     this.isCheckComponent.splice(componentIndex, 1);
    //   else
    //     this.isCheckComponent.splice(componentIndex + 1, 1);

    //   let row = 0;
    //   let col = 0;
    //   this.isCheckComponent.forEach((x, i) => {
    //     if (i != 0 && i % 6 == 0) {
    //       col++;
    //       row = 0;
    //     }
    //     x.position = { x: 160 * (row), y: 200 * (col) }
    //     row++;
    //   })

    // } 
    else if (event.y >= component.position.y + 200 || event.y <= component.position.y - 150) {

      let nowLocationx = Math.ceil(event.x / 160);
      if (event.x > 160) {
        nowLocationx = Math.ceil((Math.round(event.x / 100) * 100) / 160) + 1;
      }
      let nowLocationy = Math.floor(event.y / 200);
      if (event.y < 0)
        nowLocationy = 0;
      let arrayIndex = nowLocationx + 6 * nowLocationy;
      this.isCheckComponent.splice(arrayIndex, 0, component);
      if (componentIndex < arrayIndex)
        this.isCheckComponent.splice(componentIndex, 1);
      else
        this.isCheckComponent.splice(componentIndex + 1, 1);

      let row = 0;
      let col = 0;
      this.isCheckComponent.forEach((x, i) => {
        if (i != 0 && i % 6 == 0) {
          col++;
          row = 0;
        }
        x.position = { x: 160 * (row), y: 200 * (col) }
        row++;
      })
      console.log(this.isCheckComponent);
    }
    else {
      if (event.x > component.position.x + 160 || event.x < component.position.x - 160) {
        console.log(event);
        let nowLocationx = Math.ceil(event.x / 160);
        let nowLocationy = Math.floor(event.y / 200);
        if (event.y < 0)
          nowLocationy = 0;
        let arrayIndex = nowLocationx + 6 * nowLocationy;
        this.isCheckComponent.splice(arrayIndex, 0, component);
        if (componentIndex < arrayIndex)
          this.isCheckComponent.splice(componentIndex, 1);
        else
          this.isCheckComponent.splice(componentIndex + 1, 1);

        let row = 0;
        let col = 0;
        this.isCheckComponent.forEach((x, i) => {
          if (i != 0 && i % 6 == 0) {
            col++;
            row = 0;
          }
          x.position = { x: 160 * (row), y: 200 * (col) }
          row++;
        })
      }
    }
  }
}
