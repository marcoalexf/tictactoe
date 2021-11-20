import express from 'express';
import http from 'http';
import { WebSocket } from 'ws';
import cors from 'cors';
import { IConnectedClients } from './models/IConnectedClients.interface';
import { ISocketMessage } from './models/ISocketMessage.interface';
import { EVENT_TYPES } from './consts/consts';
import { IConnectedGame } from './models/IConnectedGame.interface';
import { Player } from './models/Player';
import { GameState } from './models/GameState';
import { IGameState } from './models/IGameState.interface';

const app = express();
const PORT = 8080;

// apply middlewares
app.use(cors());
app.use(express.json());


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const connectedClients: IConnectedClients = {};


app.post('/broadcast', (req, res) => {
    console.log('> > > < < < Forcing broadcast to all connected clients > > > < < <');
    broadcast(req.body, true);
    res.status(200).send();
});

wss.on('connection', (client, req) =>
{

    const connectionURL = new URL(req!.url!, `ws://localhost:8080`);
    const id = connectionURL.searchParams.get('id');

    if (id) {
        const connectedGame: IConnectedGame = {
            id,
            gameState: new GameState([['', '', ''], ['', '', ''], ['', '', '']], false, undefined),
            playerOne: new Player('1', 'red', 'Player 1'),
            playerTwo: new Player('2', 'blue', 'Player 2'),
            socket: client
        }
        connectedClients[id] = connectedGame;
        console.log(`client connected: ${id}`);
        // Initialize listeners
        registerListenersForClient(id);
    }
});

const broadcast = (message: any, forced = false) => {
    let broadcastMessage: ISocketMessage<any>;
    if (forced) {
        broadcastMessage = {
            type: EVENT_TYPES.BROADCAST,
            payload: message
        }
    } else {
        broadcastMessage = message;
    }

    const currentlyConnectedClients = Object.keys(connectedClients);
    currentlyConnectedClients.forEach(key =>
    {
        connectedClients[key].socket.send(JSON.stringify(broadcastMessage));
    });
}

const handleGameLogic = (gameId: string, payload: ISocketMessage<string[][]>) => {
    switch (payload.type) {
        case EVENT_TYPES.PLAYER_MOVED:
            console.log('new move!', payload.payload);
            const game = connectedClients[gameId];
            connectedClients[gameId].gameState = {
                ...game.gameState,
                gameTable: payload.payload!,
                numberOfMoves: game.gameState.numberOfMoves + 1,
            }
            const GAME_UPDATE_COMMAND: ISocketMessage<IGameState> = {
                type: 'GAME_UPDATE_COMMAND',
                payload: game.gameState
            }
            game.socket.send(JSON.stringify(GAME_UPDATE_COMMAND))
            break;
        default:
            console.log('invalid client command');
            break;
    }
}

const registerListenersForClient = (id: string) =>
{
    console.log(`registering listeners for client: ${id}`);
    const client = connectedClients[id].socket;
    client.on('message', (message) => {
        const parsedMessage: ISocketMessage<string[][]> = JSON.parse(message.toString());
        handleGameLogic(id, parsedMessage);
    });
}


server.listen(PORT, () =>
{
    console.log(`Started Inspector Configuration Server on port ${PORT}`);
});