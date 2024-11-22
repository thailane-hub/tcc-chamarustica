import { Component} from '@angular/core';
import { AuthenticateService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

 

  constructor(private _authenticate:AuthenticateService
  ) { }

  validarSenha() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
    } else {
      this.errorMessage = '';
    }
  }

 criarConta(dados: any){
  this._authenticate.register(dados.email,dados.password,)

 }

 onSubmit() {
  this.validarSenha();
  if (!this.errorMessage) {
    console.log('Senhas válidas!');
  } else {
    console.log('Erro ao validar as senhas.');
  }
}
 

//  inserirCadastrado(dados: any){
//   const cadastrado = {
//     usuario: dados.email,
//     telefone: dados.telefone
//   }
//  }

}