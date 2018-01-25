const socket = (window as any).io();

interface ChatMessage {
  message : string;
}

class Chat {
  static io : any;
  constructor(private cb : Function) {
    Chat
      .io
      .on('messageFromServer', this.cb);
  }
  emitMessage(message : string) {
    Chat
      .io
      .emit('message', message);
  }
}

Chat.io = socket;

function messageReceived(response : ChatMessage) {
  let parent = document.querySelector("#messages");
  let child = document.createElement("li");
  child.innerHTML = response.message;
  parent.appendChild(child);
}

let chat : Chat = new Chat(messageReceived);
document
  .querySelector("#form")
  .addEventListener('submit', (ev) => {
    ev.preventDefault();

    const message : string = (document.querySelector("#message")as HTMLInputElement).value;

    chat.emitMessage(message);

    return false;
  });
