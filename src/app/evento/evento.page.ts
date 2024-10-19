import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  alertButtons = ['OK'];

  banner ={
    imagem:'https://hojepr.com/wp-content/uploads/2023/09/coluna-ernani-2.jpg'
  }

  cards = [

   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    date:'Sábado/28',
    id: 1
   },
   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    date:'Sábado/28',
    id: 2
   },
   {
    image:'https://img.freepik.com/fotos-premium/uma-guitarra-senta-se-ao-lado-de-uma-parede-de-madeira_1001772-5993.jpg?w=360',
    date:'Sábado/28',
    id: 3
   }

  ]

  alerta = [
    {
      titulo: 'SAVE THE DATE',
      subtitulo: '11/12',
      mensagem: 'Nesta quarta-feira venha prestigiar o cantor Michael Jackson cantando POP!',
      id: 1
    },
    {
      titulo: 'SAVE THE DATE',
      subtitulo: '25/10',
      mensagem: 'Nesta sexta-feira venha prestigiar a cantora Lana Del Rey cantando POP INDIE!',
      id: 2
    },
    {
      titulo: 'SAVE THE DATE',
      subtitulo: '06/01',
      mensagem: 'Nesta segunda-feira venha prestigiar o cantor Baco Exu do Blues cantando BLUES!',
      id: 3
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
