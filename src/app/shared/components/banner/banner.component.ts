import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  fundo ='/assets/img/banner.png';
  texto = {
    subtitulo:'Apenas hoje',
    titulo:'Hambúrguer Simples',
    desconto:'Desconto de 20%'
  }

  constructor() { }

  ngOnInit() {}

}
