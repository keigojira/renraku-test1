// JavaScript

// WebSocketの接続
const socket = new WebSocket('ws://localhost:8080');

// WebSocketの接続成功時の処理
socket.onopen = function(event) {
    console.log('WebSocket接続成功');
};

// WebSocketからのメッセージ受信時の処理
socket.onmessage = function(event) {
    const message = event.data;
    console.log('受信メッセージ:', message);
    document.getElementById('messageOutput').value += message + '\n';
};

// メッセージ送信の処理
document.getElementById('sendMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message) {
        socket.send(message);
        messageInput.value = '';
    }
});

// WebSocketの接続失敗時の処理
socket.onerror = function(error) {
    console.error('WebSocketエラー:', error);
};
