import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent implements OnInit {

  constructor( public webSocketService: WebsocketService ) { }

  ngOnInit() {
  }

  salir() {
    console.log('saliendo');
    this.webSocketService.logOutWS();
  }

}
