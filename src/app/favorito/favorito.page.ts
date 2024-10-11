import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../services/favorito.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {


  constructor(
    public favoritoService:FavoritoService
  ) {
    console.log(this.favoritoService.produtos);
  }

  ngOnInit() {
  }



}
