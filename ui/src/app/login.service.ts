import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  private ws: WebSocket;

  constructor() {
    this.ws = new WebSocket("ws://localhost:8888");

    this.ws.onopen = () => {
      console.info("socket open");
    };
  }

  login(nickname: string) {
    this.ws.send(`/nick ${nickname}`);
  }
}
