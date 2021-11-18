import { IPlayer } from "./IPlayer.interface";

export class Player implements IPlayer {
    private _id: string;
    private _color: string;
    private _name: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    constructor(id: string, color: string, name: string) {
        this._id = id;
        this._color = color;
        this._name = name;
    }
}