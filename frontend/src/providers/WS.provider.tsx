import React, { useEffect } from 'react'
import { store } from '../app/store'
import { WSService } from '../services/WS.service'
import { FC } from '../types/FC'

interface WSProviderProps {
}

export const WSProvider: FC<WSProviderProps> = ({...props}) => {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080?id=game');
        const _ = WSService.getInstance(ws, store);
    }, [])
    return (
        <>{props.children}</>
    )
}
