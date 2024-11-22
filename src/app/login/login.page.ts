import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _authenticate:AuthenticateService,
  ) { }

  ngOnInit() {
  }

  realizarLogin(dados: any){
    this._authenticate.login(dados.email,dados.password);
  }

}

