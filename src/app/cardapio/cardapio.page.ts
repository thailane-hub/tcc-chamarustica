import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  cardapios =[
    {
      imagem:'https://i.pinimg.com/564x/c4/21/0e/c4210e53b286c1cb426be29516be59a6.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Smash Rústico',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 2x 80g Angus, Queijo Cheddar, Aface Americana e Molho Especial.'
    },
    {
      imagem:'https://i.pinimg.com/564x/f2/6d/c4/f26dc45e0e3a8be2dc0d35390c9cacb6.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Smash Burguer ',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 80g Angus, Queijo Cheddar e Maionese da Casa.'
    }, 

    {
      imagem:'https://i.pinimg.com/564x/16/f4/d1/16f4d1d65643db2638c515fc260749d2.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Smash Bacon ',
      preco:'R$: 00,00 ',
      descricao:'Pão Briche, 80g Angus, Queijo Cheddar, Bacon, Maionede da Casa.'
    }, 

    {
      imagem:'https://i.pinimg.com/564x/82/63/a4/8263a4d62dd0779529681dae171036e6.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Angus Salada',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 180g Angus Grelhado na Parrilla, Queijo Cheddar, Alface Americana, Tomate, Cebola Roxa e Maionese da Casa.'
    },

     {
      imagem:'https://i.pinimg.com/564x/b7/50/d1/b750d14c2314a3283290b236253147ac.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Angus Burguer',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 180g Angus Grelhado na Parrilla, Queijo Cheddar e Maionese da Casa.'
    },

    {
      imagem:'https://i.pinimg.com/736x/b6/45/ff/b645ffe9613407bb123ae82131a2db98.jpg',
      icon:'https://img.icons8.com/?size=48&id=19295&format=png',
      nome:'Angus Bacon r',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 180g Angus Grelhado na Parrilla, queijoCheddar, Bacon e Maionese da Casa.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
