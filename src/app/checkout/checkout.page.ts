import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';
import { CheckoutService } from '../services/checkout.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {


  constructor(
    public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService,
    public checkoutService:CheckoutService,
    public crudService:CrudService
  ) { }

  ngOnInit() {}

  salvar() {
    if (this.checkoutService.endereco.id) {
      this.crudService.update(this.checkoutService.endereco.id, this.checkoutService.endereco, 'enderecos');
    }

    if (!this.checkoutService.endereco.id) {
      console.log(this.checkoutService.enderecos);
      this.crudService.insert(this.checkoutService.endereco, 'enderecos');
      // this.getProdutos();
    }
  }

}