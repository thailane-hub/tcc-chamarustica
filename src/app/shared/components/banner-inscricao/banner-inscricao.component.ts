import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-inscricao',
  templateUrl: './banner-inscricao.component.html',
  styleUrls: ['./banner-inscricao.component.scss'],
})
export class BannerInscricaoComponent  implements OnInit {
  trabalho = {
    titulo:'Trabalhe',
    subtitulo:'Conosco!'
  }
  constructor() { }

  ngOnInit() {}

}
