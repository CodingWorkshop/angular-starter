import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  inBounds:true;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert('登入成功');
    location.href = '../';
  }
}
