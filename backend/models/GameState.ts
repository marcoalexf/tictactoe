import { IGameState } from "./IGameState.interface";
import { IPlayer } from "./IPlayer.interface";

export class GameState implements IGameState {
    _gameTable: string[][];
    _gameOver: boolean;
    _winner: IPlayer | undefined;
    _diagonalsScores: number[];
    _numbeOfMoves: number;
    
    public get gameTable(): string[][] {
        return this._gameTable;
    }

    public set gameTable(value: string[][]) {
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

    public set winner(value: IPlayer | undefined) {
        this._winner = value;
    }

    public get diagonalsScores(): number[] {
        return this._diagonalsScores;
    }

    public set diagonalsScores(value: number[]) {
        this._diagonalsScores = value;
    }

    public get numberOfMoves(): number {
        return this._numbeOfMoves;
    }

    public set numberOfMoves(value: number) {
        this._numbeOfMoves = value;
    }

    public getGameWinner = () => {
        return this.diagonalsScores.filter(score => score === -3 || score === 3)[0] > 0 ? 'X' : 'O';
    }

    constructor(gameTable: string[][], gameOver: boolean, winner: IPlayer | undefined) {
        this._gameTable = gameTable;
        this._gameOver = gameOver;
        this._winner = winner;
        this._diagonalsScores = [0, 0, 0, 0, 0, 0, 0, 0];
        this._numbeOfMoves = 0;
    }
}