import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  fundo ='https://d1ih8jugeo2m5m.cloudfront.net/2024/01/como-fazer-hamburguer-para-vender-1200x685.jpg';
  texto = {
    subtitulo:'Apenas hoje',
    titulo:'Hambúrguer Simples',
    desconto:'Desconto de 20%'
  }

  constructor() { }

  ngOnInit() {}

}
