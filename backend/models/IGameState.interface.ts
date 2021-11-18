import { IPlayer } from "./IPlayer.interface";

export interface IGameState {
    gameTable: string[];
    gameOver: boolean;
    winner: IPlayer | undefined;
}