import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  itens: any;

  itens: [
    {
      img: '',
      nome: 'Smash burger',
      subpreco: 45.59,
      preco: 91.18,
      qtd: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
