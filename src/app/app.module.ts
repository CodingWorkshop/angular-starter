import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
/**
 * Layout
 */
import { HeaderComponent } from './Layout/header/header.component';
import { NavComponent } from './Layout/nav/nav.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DymanicComponent } from './dymanic/dymanic.component';
import { DynamicComponentDirective } from './_directive/dynamic-component.directive';
import { DynamicComponentService } from './_serviece/dynamic-component.service';
@NgModule({
  entryComponents: [LoginComponent, RegisterComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DymanicComponent,
    DynamicComponentDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
