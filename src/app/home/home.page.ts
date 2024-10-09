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
    {foto:'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/373060002_267644076036806_7215274788536383064_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=7HMEjJz9F64Q7kNvgFGJtlA&_nc_ht=scontent-gru2-1.xx&_nc_gid=A6AB6IWyM7y54v5GzrXd0ab&oh=00_AYCKVhCmEyZWOnzWtyJJAqDw9DFh1YAIkRBrfIRsCieMkA&oe=6703B1F5'},
    {foto:'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/372925930_267644079370139_2942615199873167573_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=cfiVB15-olMQ7kNvgHtE_WP&_nc_ht=scontent-gru1-2.xx&_nc_gid=A6AB6IWyM7y54v5GzrXd0ab&oh=00_AYAuQ1wwdi_A9ScA1-RkEXC05Dj6-u318yu7hwsgKu9tXg&oe=6703C7F2'},
    {foto:'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/372989133_267643606036853_8544932045501375450_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Odw9vJoIKK4Q7kNvgHvVC9C&_nc_ht=scontent-gru1-2.xx&_nc_gid=A4WLRKa_Ei_4CQnFthhxnGh&oh=00_AYAtRtvNrhcm1hnXSoiKxollWtH1GK-LUK-mdb701icjMg&oe=6703BCA1'},
    
  ]

  constructor(){ }
}
