import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritoService } from '../services/favorito.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage {
 

  constructor(
    public favoritoService:FavoritoService
  ) { }

  ngOnInit() {
  }

  favoritar(cardapio: any){
    console.log(cardapio)
    this.favoritoService.produtos.forEach(item=>{
      if(cardapio.id == item.id){
        item.favorito = !item.favorito
      }
    })

    console.log(this.favoritoService.produtos);

  }

}
