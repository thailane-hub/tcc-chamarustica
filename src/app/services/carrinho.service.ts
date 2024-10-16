import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private produto: any[] = [];

  constructor() {}

  adicionarcarrinho(produtos: any) {
    this.produto.push(produtos);
  }

  getcarrinhoItens() {
    return this.produto;
  }

  
}
