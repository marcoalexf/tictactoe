import { IConnectedGame } from './IConnectedGame.interface';

export interface IConnectedClients {
    [id: string]: IConnectedGame
}