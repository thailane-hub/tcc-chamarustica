import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {

  hamburgueres =[
    {
      imagem:'https://i.pinimg.com/564x/c4/21/0e/c4210e53b286c1cb426be29516be59a6.jpg',
      star:'https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png',
      nome:'Smash Rústico',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 2x 80g Angus, Queijo Cheddar, Aface Americana e Molho Especial.'
    },
    {
      imagem:'https://t4.ftcdn.net/jpg/02/84/65/61/240_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
      star:'https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png',
      nome:'Bebidas',
      preco:'R$: 00,00 ',
      descricao:''
    }, {
      imagem:'https://t4.ftcdn.net/jpg/02/84/65/61/240_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
      star:'https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png',
      nome:'Bebidas',
      preco:'R$: 00,00 ',
      descricao:''
    }, {
      imagem:'https://t4.ftcdn.net/jpg/02/84/65/61/240_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
      star:'https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png',
      nome:'Bebidas',
      preco:'R$: 00,00 ',
      descricao:''
    }, {
      imagem:'https://t4.ftcdn.net/jpg/02/84/65/61/240_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
      star:'https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png',
      nome:'Bebidas',
      preco:'R$: 00,00 ',
      descricao:''
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
