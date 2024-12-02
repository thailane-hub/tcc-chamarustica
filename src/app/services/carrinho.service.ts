import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  total: number =0;

  public carrinho: any[] = [];

  valores = [{quantidade:1, subtotal:0}]

  constructor() {
    this.atualizarSubtotal()
  }

  addProduto(produto: any) {
    let produtoexiste = this.carrinho.find(item => item.id === produto.id );
    if (!produtoexiste) {
      this.carrinho.push(produto);
      this.atualizarSubtotal();
    }
    
  }

  getcarrinhoItens() {
    return this.carrinho;
  }

  getTotal(){

    let total: number = 0;
    this.carrinho.forEach(item => {
      total += item.subtotal;
    }) 
    return total
  }

  atualizarSubtotal(){
    this.carrinho.forEach(item => {
        item.subtotal= (item.quantidade * item.preco)
    })
    this.total = this.getTotal();
  }

  incrementer(produto:any){
    this.carrinho.forEach(item => {
      if(item.id === produto.id){
        item.quantidade++
        this.atualizarSubtotal()
      }
    })
 
  }

  decrementer(produto:any){
    this.carrinho.forEach(item => {
      if(item.id === produto.id){
        if(item.quantidade > 1)
          item.quantidade--
        this.atualizarSubtotal()
      }
    })

  }

  deletar(produto: any) {
    const index = this.carrinho.findIndex(item => item.id === produto.id);
    
    if (index !== -1) {
         this.carrinho.splice(index, 1);
         this.atualizarSubtotal()
    } 
  }
}