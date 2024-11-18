import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private _authenticate:AuthenticateService
  ) { }

 criarConta(dados: any){
  this._authenticate.register(dados.email,dados.password)

 }

//  inserirCadastrado(dados: any){
//   const cadastrado = {
//     usuario: dados.email,
//     telefone: dados.telefone
//   }
//  }

}