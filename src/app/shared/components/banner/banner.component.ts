import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  
  fundo ='/assets/img/frente-estabelecimento.png';
  texto = {
    subtitulo:'Sejam bem-vindos!',
    titulo:'CHAMA RÚSTICA',
    desconto:'uma nova etapa'
  }

  constructor() { }

  ngOnInit() {}

}