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

  incrementer(item:any){
    this.carrinhoService.incrementer(item)
  }

  decrementer(item:any){
    this.carrinhoService.decrementer(item)
  }

  deletar(item: any) {
    this.carrinhoService.deletar(item)
  }
}