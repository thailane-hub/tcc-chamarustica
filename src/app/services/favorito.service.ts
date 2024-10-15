import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  produtos =[
    {
      id:1,
      imagem:'/assets/produto/image11.png',
      nome:'Smash Rústico',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 2x 80g Angus, Queijo Cheddar, Aface Americana e Molho Especial.',
      favorito:false
    },
    {
      id:2,
      imagem:'/assets/produto/image12.png',
      nome:'Smash Burguer',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 80g Angus, Queijo Cheddar e Maionese da Casa.',
      favorito:false
    },
    {
      id:3,
      imagem:'/assets/produto/image13.png',
      nome:'Smash Bacon ',
      preco:'R$: 00,00 ',
      descricao:'Pão Briche, 80g Angus, Queijo Cheddar, Bacon, Maionede da Casa.',
      favorito:false
    },
    {
      id:4,
      imagem:'/assets/produto/image14.png',
      nome:'Angus Salada',
      preco:' R$ 00,00',
      descricao:'Pão Brioche, 180g Angus Grelhado na Parrilla, Queijo Cheddar, Alface Americana, Tomate, Cebola Roxa e Maionese da Casa.',
      favorito:false
    },
    {
      id:5,
      imagem:'/assets/produto/image15.png',
      nome:'Angus Burguer',
      preco:'R$: 00,00 ',
      descricao:'Pão Brioche, 180g Angus Grelhado na Parrilla, Queijo Cheddar e Maionese da Casa.',
      favorito:false
    },
    
  ]
  
  constructor() { }
}
