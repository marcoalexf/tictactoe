import { EnhancedStore } from '@reduxjs/toolkit';
import { ISocketMessage } from '../models/ISocketMessage.interface';

export class WSService {
    private static instance: WSService;
    private _socket: WebSocket
    private _isOpen = false;
    private store: EnhancedStore;

    public get socket(): WebSocket {
        return this._socket;
    }

    public get isOpen(): boolean {
        return this._isOpen;
    }

    public set isOpen(value: boolean) {
        this._isOpen = value;
    }

    private constructor(socket: WebSocket, store: EnhancedStore<any>) {
        this._socket = socket;
        this.store = store;
        this._socket.onopen = () => {
            this.isOpen = true;
        }

        this._socket.onopen = () => {
            this._socket.onmessage = (message) => {
                const payload = JSON.parse(message.data);
                store.dispatch({
                    type: 'ws-message',
                    payload 
                })
            }
        }
    }

    public static getInstance(socket?: WebSocket, store?: EnhancedStore): WSService {
        if (!WSService.instance && socket && store) {
            WSService.instance = new WSService(socket, store);
        }

        return WSService.instance;
    }

    public sendMessage = (message: ISocketMessage<any>) => {
        if (this.socket.OPEN) {
            const stringifiedPayload = JSON.stringify(message);
            this.socket.send(stringifiedPayload);
        }
    }
}