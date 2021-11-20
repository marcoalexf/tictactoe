import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { serverGameUpdate } from "../features/gameScreen/gameSlice";
import { ISocketMessage } from "../models/ISocketMessage.interface";

export const WSMiddleware: Middleware = store => next => (action: PayloadAction<ISocketMessage<any>>) => {
    if (action.type === 'ws-message') {
        debugger;
        const { type, payload } = action.payload;
        console.log('local game table', store.getState().game.gameTable);
        console.log('server game table', payload.gameTable);
        next(serverGameUpdate(payload))
    } else {
        next(action);
    }
}