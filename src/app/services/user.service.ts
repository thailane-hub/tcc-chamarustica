import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any = {
     nome: null,
    email: null,
    uid: null
  }
 


  constructor(
    private router:Router
  ) { 
    if(localStorage.getItem("usuario")){
      this.usuario = JSON.parse(localStorage.getItem("usuario") || '{}')
    } else{
      this.router.navigate(["/login"])
    }

  }

  
}
