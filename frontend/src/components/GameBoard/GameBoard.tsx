import React from 'react'
import { FC } from '../../types/FC'
import 'GameBoard.css'

export interface GameBoardProps {
    gameBoard: string[]
}

export const GameBoard: FC<GameBoardProps> = ({
    gameBoard,
}) => {
    return (
        <div className="container">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
        </div>
    )
}
