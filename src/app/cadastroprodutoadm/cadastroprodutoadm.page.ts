import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastroprodutoadm',
  templateUrl: './cadastroprodutoadm.page.html',
  styleUrls: ['./cadastroprodutoadm.page.scss'],
})
export class CadastroprodutoadmPage implements OnInit {

  produtos = this.produtoService.teste();

  novosprodutos:any = [];

  constructor( public crudService: CrudService,
              public produtoService: ProdutoService
  ) {
    this.getProdutos();
   }

  ngOnInit() {
  }
  
    salvar() {
      console.log(this.produtoService.produtos);
      this.crudService.insert(this.produtoService.teste(), 'produto');
      this.getProdutos();
    }

    remover(id: string) {
      this.crudService.remove( id ,'produto')
      .then(() => {
        this.getProdutos();
      })
  }

  getProdutos(){
    this.crudService.fetchAll('produto')
    .then(resp => {
      console.log(resp);
      this.novosprodutos= resp;
    })
  }

}

