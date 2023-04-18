// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
    appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
    const text = await event.data.text();
    const chat = JSON.parse(text);
    appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
    appendMsg('system', 'websocket', 'disconnected');
    document.querySelector('#name-controls').disabled = true;
    document.querySelector('#chat-container').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
    const msgEl = document.querySelector('#chat-input');
    const msg = msgEl.value;
    if (!!msg) {
        appendMsg('me', 'me', msg);
        const name = document.querySelector('#my-name').value;
        socket.send(`{"name":"${name}", "msg":"${msg}"}`);
        msgEl.value = '';
    }
}

function nameActive() {
    document.getElementById('chat-container').disabled = false;
}
const myName = document.querySelector('#my-name');
myName.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    nameActive();
    document.querySelector('#chat-input').focus();
  }
});

function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-log');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}

// Send message on enter keystroke
const input = document.querySelector('#chat-input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
