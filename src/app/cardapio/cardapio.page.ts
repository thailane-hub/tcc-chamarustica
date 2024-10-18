import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage {



  constructor(
    public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService,
  ) { }

  ngOnInit() {
  }

  favoritar(produto: any){
    console.log(produto)
    this.produtoService.produtos.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
      }
    })

    console.log(this.produtoService.produtos);

  }

  addProduto(produto: any) {
    this.carrinhoService.addProduto(produto);
  }

  add(produto:any){
    this.carrinhoService.produtos.forEach(el => {
      if(el.id === produto.id){
        el.quantidade++
        el.subtotal= (el.quantidade * el.preco)
      }
    })
    this.produtoService.calcular()
  }

  
  remove(produto:any){
    this.carrinhoService.produtos.forEach(el => {
      if(el.id === produto.id){
        if(el.quantidade > 1)
          el.quantidade--
        el.subtotal= (el.quantidade * el.preco)
      }
    })
    this.produtoService.calcular()
  }

  deletar(produto: any) {
    const index = this.carrinhoService.produtos.findIndex(el => el.id === produto.id);
    
    if (index !== -1) {
         this.carrinhoService.produtos.splice(index, 1);
         this.produtoService.calcular()
    } 
  }

}


