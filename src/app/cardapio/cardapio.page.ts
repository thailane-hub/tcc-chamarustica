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

}