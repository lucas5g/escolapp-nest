import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({path: '/chat'})
export class ChatGateway {

  @SubscribeMessage('chat')
  handleChat(@MessageBody() data:any, @ConnectedSocket() client: Socket){
    const message = `${client?.id} ${data}`

    client.emit('chat', message )
  }
}
