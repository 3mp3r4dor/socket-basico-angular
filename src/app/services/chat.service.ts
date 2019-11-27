import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor( public webSocketService: WebsocketService ) { }

  sendMessage( message: string) {
    const payload = {
      de: this.webSocketService.usuario.nombre,
      cuerpo: message
    };

    this.webSocketService.emit( 'mensaje', payload );
  }

  getMessages() {
    return this.webSocketService.listen('mensaje-nuevo');
  }

  getMessagesPrivate() {
    return this.webSocketService.listen('mensaje-privado');
  }
}
