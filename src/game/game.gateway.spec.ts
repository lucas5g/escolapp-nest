import { Test, TestingModule } from '@nestjs/testing';
import { GameGateway } from './game.gateway';
import { io } from 'socket.io-client'

describe('GameGateway', () => {
  let gateway: GameGateway;

  const socket = io('http://localhost:8000')

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameGateway],
    }).compile();

    gateway = module.get<GameGateway>(GameGateway);
  });

  it('should be defined', (done) => {

    
    socket.emit('msg_to_server')

    socket.on('msg_to_client',  async(data) => {
      expect(data).toEqual('recebaaa')
      // console.log(data)
      done()
    })

  });
});
