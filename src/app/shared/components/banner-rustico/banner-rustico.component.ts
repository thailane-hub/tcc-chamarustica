import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-rustico',
  templateUrl: './banner-rustico.component.html',
  styleUrls: ['./banner-rustico.component.scss'],
})
export class BannerRusticoComponent  implements OnInit {
  texto = {
    titulo:'Favoritos'
  }

  constructor() { }

  ngOnInit() {}

}
