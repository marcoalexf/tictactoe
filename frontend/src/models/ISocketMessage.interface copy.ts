export interface ISocketMessage<T> {
    type: string;
    payload?: T;
}