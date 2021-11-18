import { WebSocket } from "ws";
import { IGameState } from "./IGameState.interface";
import { IPlayer } from "./IPlayer.interface";

export interface IConnectedGame {
    id: string;
    socket: WebSocket;
    playerOne: IPlayer;
    playerTwo: IPlayer;
    gameState: IGameState;
}