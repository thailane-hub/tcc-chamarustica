import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-adicionar',
  templateUrl: './btn-adicionar.component.html',
  styleUrls: ['./btn-adicionar.component.scss'],
})

export class BtnAdicionarComponent  implements OnInit {

  @Input() texto: any = 'Texto Exemplo';
  @Input() icone:any =  'cart-outline';

  constructor() { }

  ngOnInit() {}

}