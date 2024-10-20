import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {


  constructor(
    public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService
  ) {
    console.log(this.produtoService.produtos);
  }

  ngOnInit() {
  }

 remover(produto:any){
  this.produtoService.produtos.forEach(
    item=>{
      if(item.id==produto.id){
        item.favorito = false;
      }
    }
  )
 }
 addProduto(produto: any) {
  this.carrinhoService.addProduto(produto);
}

}
