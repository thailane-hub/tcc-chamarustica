import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  produto = {id: null!, nome: null, imagem: null, descricao: null, preco: 0.0, ativo: true, categoria: null};
  
  produtos = [
    {id: null!, nome: null, imagem: null, descricao: null, preco: 0.0, ativo: true, categoria: null}
  ];

  
  constructor(  ) { }



}
