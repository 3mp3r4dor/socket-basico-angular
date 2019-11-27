import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  constructor( public webSocketService: WebsocketService,
               public router: Router ) { }

  ngOnInit() {
  }

  ingresar() {
    // console.log(this.nombre);
    this.webSocketService.loginWS( this.nombre )
    .then( () => {
      this.router.navigate(['/mensajes']);
    });
  }

}
