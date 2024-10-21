import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagens = [
    { foto: '/assets/img/burger1.png' },
    { foto: '/assets/img/burger2.png' },
    { foto: '/assets/img/burger3.png' }
  ]

  constructor(){ }
}