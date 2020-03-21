import io from 'socket.io-client';


class SocketIO {

    init() {
        this.socket = io(process.env.REACT_APP_BACKEND);

        this.socket.on('connect', () => {
            console.log('Connected to server');
        });
    }

    getClientID() {
        return this.socket.id;
    }

    subscribe(on, callback) {
        this.socket.on( on, callback );
    }

    unsubscribe(on, callback) {
        this.socket.off( on, callback );
    }

    sendChatMessage(message) {
        this.socket.emit('chat_message', message);
    }

    sendCommand(command) {
        this.socket.emit('chat_command', command);
    }

    isConnected() {
        return this.socket && this.socket.connected;
    }

    emit(action, data) {
        this.socket.emit(action, data);
    }

    unsubscribeAll(on) {
        this.socket.removeAllListeners( on );
    }

}

export default new SocketIO();
