import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  endereco = {
    id: null!,
    nome: null,
    telefone: null,
    CEP: null,
    numero: null,
    complemento: null,
    delivery: false
  }

  enderecos = [
    {
      id:null!,
      nome: null,
      telefone: null,
      CEP: null,
      numero: null,
      comnplemento: null,
      delivery: false
    }
  ]
}
