class WebSocketApi {
  events: any = {};

  constructor() {
    this.events = {};
  }

  send(data: any) {
    const { event, payload } = data;
    this.events[event].forEach((cb: any) => cb(payload));
  }

  on(event: any, cb: any) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(cb);
  }
}

export default WebSocketApi;
