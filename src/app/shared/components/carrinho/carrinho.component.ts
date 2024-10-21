import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent  {

  constructor( public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService,
  ) { }

  incrementer(produto:any){
    this.carrinhoService.incrementer(produto)
  }

  decrementer(produto:any){
    this.carrinhoService.decrementer(produto)
  }

  deletar(produto: any) {
    this.carrinhoService.deletar(produto)
  }
}