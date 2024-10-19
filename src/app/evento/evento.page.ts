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
    image:'../../assets/img/MJ-evento.png',
    date:'Sexta/13',
    id: 1
   },
   {
    image:'../../assets/img/lana-evento.png',
    date:'Sexta/25',
    id: 2
   },
   {
    image:'../../assets/img/baco-evento.png',
    date:'Sexta/15',
    id: 3
   }

  ]

  alerta = [
    {
      titulo: 'SAVE THE DATE',
      subtitulo: '13/01',
      mensagem: 'Nesta sexta-feira venha prestigiar o cantor Michael Jackson cantando POP!',
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
      subtitulo: '15/11',
      mensagem: 'Nesta sexta-feira venha prestigiar o cantor Baco Exu do Blues cantando BLUES!',
      id: 3
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
