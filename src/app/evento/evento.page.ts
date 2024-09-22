import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  banner ={
    imagem:'https://hojepr.com/wp-content/uploads/2023/09/coluna-ernani-2.jpg'
  }

  cards = [

   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    text:'Sábado/28'
   },
   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    text:'Sábado/28'
   },
   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    text:'Sábado/28'
   }



  ]

  constructor() { }

  ngOnInit() {
  }

}
