import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {


  constructor(
    public produtoService:ProdutoService,
    public carrinhoService:CarrinhoService,
  ) { }

  ngOnInit() {}

}