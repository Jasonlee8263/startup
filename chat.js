// const chatControls = document.querySelector('#chat-container');
// const myName = document.querySelector('#my-name');
// // myName.addEventListener('keyup', (e) => {
// //   chatControls.disabled = myName.value === '';
// // });
function nameActive() {
    document.getElementById('chat-container').disabled = false;
}

function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-log');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
const input = document.querySelector('#chat-input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
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