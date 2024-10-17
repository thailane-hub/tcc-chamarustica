import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public produtos: any[] = [];

  constructor() {}

  addProduto(produto: any) {
    let produtoexiste = this.produtos.find(item => item.id === produto.id );

    console.log(this.produtos)

    if (!produtoexiste) 
      this.produtos.push(produto);
    
  }

  getcarrinhoItens() {
    return this.produtos;
  }

  
}
