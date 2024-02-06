import { Injectable } from '@angular/core';
import { SocketService } from '@app/services/socket/socket.service';
import { GameSessionEvent } from '@common/game-session.events';
import { Message } from '@common/model/message';
@Injectable({
    providedIn: 'root',
})
export class MessageService {
    messages: Message[] = [];
    constructor(private socketService: SocketService) {
        this.initialize();
    }

    initialize() {
        this.socketService.on(GameSessionEvent.Message, (message: Message) => {
            this.receiveMessage(message);
        });
    }

    receiveMessage(message: Message) {
        this.messages.push(message);
    }

    sendMessage(message: Message) {
        this.socketService.send(GameSessionEvent.Message, message);
    }
}
