import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  fundo ='https://img.freepik.com/psd-gratuitas/modelo-de-capa-de-facebook-delicioso-menu-de-hamburguer-e-comida_106176-2198.jpg';
  texto = {
    subtitulo:'Apenas hoje',
    titulo:'Hambúrguer Simples',
    desconto:'Desconto de 20%'
  }

  // banner = {
  //   imagem:'https://aceno.com/wp-content/uploads/2018/04/dalas_burger_title_02.jpg',
  // }

  constructor() { }

  ngOnInit() {}

}
