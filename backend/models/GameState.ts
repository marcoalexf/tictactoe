import { IGameState } from "./IGameState.interface";
import { IPlayer } from "./IPlayer.interface";

export class GameState implements IGameState {
    _gameTable: string[];
    _gameOver: boolean;
    _winner: IPlayer | undefined;
    
    public get gameTable(): string[] {
        return this._gameTable;
    }

    public set gameTable(value: string[]) {
        this._gameTable = value;
    }

    public get gameOver(): boolean {
        return this._gameOver;
    }

    public set gameOver(value: boolean) {
        this._gameOver = value;
    }

    public get winner(): IPlayer | undefined {
        return this._winner;
    }

    public set winner(value: IPlayer) {
        this._winner = value;
    }

    constructor(gameTable: string[], gameOver: boolean, winner: IPlayer | undefined) {
        this._gameTable = gameTable;
        this._gameOver = gameOver;
        this._winner = winner;
    }
}