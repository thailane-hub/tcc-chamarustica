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
    {foto:'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/373495105_267643599370187_5691014280986322977_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zaL7S7KfnxEQ7kNvgHkgmgF&_nc_ht=scontent-gru1-1.xx&_nc_gid=Ad0zedM80_D-_id1ph9xjvS&oh=00_AYBqs-jSThJmZqeRLx7_Rm9sdff0dq-Zq-jpjR2sgiO1eQ&oe=670A44CC'},
    {foto:'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/372919809_267643596036854_3140197447740638164_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lK0QFE_g96QQ7kNvgH1_FHL&_nc_ht=scontent-gru2-1.xx&_nc_gid=ABUQM7DDJ9AuYMuouV4h_yk&oh=00_AYBhSMkZzmcAjEhx-hcjimlAYnSer8buYjILIvTIWr62uQ&oe=670A592A'},
    {foto:'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/372989133_267643606036853_8544932045501375450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YSd3pLadqHUQ7kNvgE2x4ft&_nc_ht=scontent-gru1-2.xx&_nc_gid=AsZVdu-1sTmZh_nBmWL5705&oh=00_AYA6EjzkI7IeVfZ8QCg69sLBUwovYyt0PNJEzNCLEgg2xw&oe=670A5421'},
    
  ]

  constructor(){ }
}
