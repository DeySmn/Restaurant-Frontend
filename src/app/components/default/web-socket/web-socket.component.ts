import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css'],
})
export class WebSocketComponent {
  title = 'angular8-springboot-websocket';

  webSocketAPI: WebsocketService;
  greeting: any;
  name: string;
  ngOnInit() {
    this.webSocketAPI = new WebsocketService(new WebSocketComponent());
  }

  connect() {
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage() {
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message) {
    this.greeting = message;
  }
}
