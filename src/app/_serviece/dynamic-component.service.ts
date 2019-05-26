import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
export class DynamicComponentService {
  private components = {
    loginComponent: LoginComponent,
    registerComponent: RegisterComponent
  };
  constructor() {}

  getComponent(componentName) {
    return this.components[componentName];
  }
}
