import { EVENT_TYPES } from "../consts/consts";

export interface ISocketMessage<T> {
    type: EVENT_TYPES;
    payload?: T
}