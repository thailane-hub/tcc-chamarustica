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

  sec: any = 2;

  favoritar(produto: any){
    console.log(produto)
    this.produtoService.produtos.hamburguer.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
      }
    })
    this.produtoService.produtos.bebida.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
    }
    })
    this.produtoService.produtos.outro.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
    }
    })
  }

  addProduto(produto: any) {
    this.carrinhoService.addProduto(produto);
  }

  secao(n: any){    
    this.sec = null;
    this.sec = n;
  }

}