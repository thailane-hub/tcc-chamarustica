
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';
import { CrudService } from '../services/crud.service';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})

export class CardapioPage {

  constructor(
    public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService,
    public crudService: CrudService,
    public categoriaservice:CategoriaService
  ) { 
    this.getProdutos();
  }

  ngOnInit() {
    
  }

  filterItemsByCategoria(categoria: string): void {
    this.getProdutos(categoria)
  }



  sec: any = 2;

  favoritar(produto: any){
    console.log(produto)
    this.produtoService.produtos.forEach(item=>{
      if(produto.id == item.id){
        item.favorito = !item.favorito
      }
    })
   
  }

  addProdutoCarrinho(produto: any) {
    this.carrinhoService.addProduto(produto);
  }

  secao(n: any){    
    this.sec = null;
    this.sec = n;
  }

  getProdutos(categoria?:any){

    if(categoria){
      this.crudService.fetchByOperatorParam('categoria', '==', categoria, 'produtos')
      .then(lista_produtos => {
        console.log(lista_produtos);
        this.produtoService.produtos = lista_produtos;
      })
    }

    if(!categoria){
      this.crudService.fetchAll('produtos')
    .then(lista_produtos => {
      console.log(lista_produtos);
      this.produtoService.produtos = lista_produtos;
    })
    }


  }

}
