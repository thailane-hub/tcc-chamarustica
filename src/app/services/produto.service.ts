import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  produtos ={
    hamburguer:[
    {
      id: 1,
      imagem: '/assets/produto/image11.png',
      nome: 'Smash Rústica',
      preco: 29.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 2x 80g angus, Queijo Cheddar, Aface americana e Molho especial',
      favorito: false
    },
    {
      id: 2,
      imagem: '/assets/produto/image12.png',
      nome: 'Smash Burguer (duplo)',
      preco: 22.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 80g Angus, Queijo Cheddar e Maionese da Casa',
      favorito: false
    },
    {
      id: 3,
      imagem: '/assets/produto/image13.png',
      nome: 'Smash Bacon ',
      preco: 20.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 80g Angus, Queijo Cheddar, Bacon, Maionede da casa',
      favorito: false
    },
    {
      id: 4,
      imagem: '/assets/produto/image14.png',
      nome: 'Angus Salada',
      preco: 32.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 180g Angus grelhado na parrilla, Queijo cheddar, Alface americana, Tomate, Cebola roxa e Maionese da casa',
      favorito: false
    },
    {
      id: 5,
      imagem: '/assets/produto/image15.png',
      nome: 'Angus Burguer',
      preco: 26.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 180g Angus grelhado na parrilla, Queijo cheddar e Maionese da casa',
      favorito: false
    },
    {
      id: 6,
      imagem: '/assets/produto/image16.png',
      nome: 'Angus Bacon',
      preco: 30.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Pão Brioche, 180g Angus grelhado na parrilla, Queijo cheddar, Bacon e Maionese da casa',
      favorito: false
    },
    {
      id: 7,
      imagem: '/assets/produto/anguskid.png',
      nome: 'Angus Kids',
      preco: 19.90,
      quantidade: 1,
      subtotal: 0,
      descricao: '2 Mini Burgers, Pão mini brioche, Smash angus 40 + Refri 200ml + Batata frita 150g ou Nuggets (06 unidades)',
      favorito: false
    }
  ],
  bebida:[
    {
      id: 8,
      imagem: 'https://media.istockphoto.com/id/487787108/pt/foto/lata-de-coca-cola-com-gelo.jpg?s=612x612&w=0&k=20&c=wtS_gNnZgtiObkcfletaXuFztzy6HXRBTpoa6X3UzzM=',
      nome: 'Coca-cola',
      preco: 6.50,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Refrigerante Coca em lata 500ml',
      favorito: false
    },
    {
      id: 9,
      imagem: 'https://cdn0.casamentos.com.br/vendor/3339/3_2/960/png/chopp-brahma-gelado_13_383339-168424283926307.jpeg',
      nome: 'Chopp Brahma',
      preco: 11.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Chopp Brahma ou Antárctica, caldereta 350ml',
      favorito: false
    }
  ],
  outro:[
    {
      id: 10,
      imagem: '/assets/produto/almofadinhaGouda.jpeg',
      nome: 'Almofadinha Gouda',
      preco: 34.00,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Almofadinhas fritas de queijo, acompanha dois molhos',
      favorito: false
    },
    {
      id: 11,
      imagem: '/assets/produto/salameItaliano.jpeg',
      nome: 'Salame Italiano',
      preco: 22.90,
      quantidade: 1,
      subtotal: 0,
      descricao: 'Travessa de salame italiano temperada com limão',
      favorito: false
    }
  ] 
}
  
  constructor() { }
  }