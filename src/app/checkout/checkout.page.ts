import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  itens= [
    {
      img: 'https://estiloap.com.br/wp-content/uploads/2016/05/Cheeseburger-Madero.jpg',
      nome: 'Smash burger',
      preco: 91.18,
      qtd: 2,
      icon: '../../assets/img/deletar.png'
    },
    {
      img: 'https://estiloap.com.br/wp-content/uploads/2016/05/Cheeseburger-Madero.jpg',
      nome: 'Smash burger',
      preco: 91.18,
      qtd: 2,
      icon: '../../assets/img/deletar.png'
    },
    {
      img: 'https://estiloap.com.br/wp-content/uploads/2016/05/Cheeseburger-Madero.jpg',
      nome: 'Smash burger',
      preco: 91.18,
      qtd: 2,
      icon: '../../assets/img/deletar.png'
    },
    {
      img: 'https://estiloap.com.br/wp-content/uploads/2016/05/Cheeseburger-Madero.jpg',
      nome: 'Smash burger',
      preco: 91.18,
      qtd: 2,
      icon: '../../assets/img/deletar.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}