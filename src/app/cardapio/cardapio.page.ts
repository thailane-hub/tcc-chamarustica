import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritoService } from '../services/favorito.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage {
 

  constructor(
    public favoritoService:FavoritoService,
    public carrinhoService:CarrinhoService,
  ) { }

  ngOnInit() {
  }

  favoritar(produto: any){
    console.log(produto)
    this.favoritoService.produtos.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
      }
    })

    console.log(this.favoritoService.produtos);

  }

  addProduto(produto: any) {
    this.carrinhoService.addProduto(produto);
  }

  add(produto:any){
    this.carrinhoService.produtos.forEach(el => {
      if(el.id == produto.id){
        el.quantidade++
        // subtotal=quantidade*preco
      }
    })
  }
  remove(produto:any){
    this.carrinhoService.produtos.forEach(el => {
      if(el.id == produto.id){
        el.quantidade--
      }
    })
  }

}
