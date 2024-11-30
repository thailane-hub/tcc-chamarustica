import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ProdutoService } from '../services/produto.service';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-cadastroprodutoadm',
  templateUrl: './cadastroprodutoadm.page.html',
  styleUrls: ['./cadastroprodutoadm.page.scss'],
})
export class CadastroprodutoadmPage implements OnInit {

  isModalOpen = false;

  

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor( public crudService: CrudService,
              public produtoService: ProdutoService,
              public categoriaService: CategoriaService
  ) {
    this.getProdutos();
    this.getCategorias();
   }

  ngOnInit() {
  }

  onWillDismiss(event: any) {
    this.isModalOpen = false;
  }

  salvarCategoria() {
    this.crudService.insert(this.categoriaService.categoria, 'categorias');
    this.getCategorias();
  }

  getCategorias(){
    this.crudService.fetchAll('categorias')
    .then(lista_categorias => {
      console.log(lista_categorias);
      this.categoriaService.categorias = lista_categorias;
    })
  }



  setCategoria(event: any) {
    this.produtoService.produto.categoria = event.detail.value;
  }
  
    salvar() {
      if (this.produtoService.produto.id) {
        this.crudService.update(this.produtoService.produto.id, this.produtoService.produto, 'produtos');
      }

      if (!this.produtoService.produto.id) {
        console.log(this.produtoService.produtos);
        this.crudService.insert(this.produtoService.produto, 'produtos');
        this.getProdutos();
      }
    }

    atualizar(produto: any) {
      this.produtoService.produto = produto;
    }

    remover(id: any) {
      this.crudService.remove( id ,'produtos')
      .then(() => {
        this.getProdutos();
      })
  }

  getProdutos(){
    this.crudService.fetchAll('produtos')
    .then(lista_produtos => {
      console.log(lista_produtos);
      this.produtoService.produtos = lista_produtos;
    })
  }

}

