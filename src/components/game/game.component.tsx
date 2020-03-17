import React, { useState, ReactElement } from 'react'

import Board from '../board/board.component'
import calculateWinner from '../../utils/calculateWinner'

const Game = (): ReactElement => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)
  const [maxTurn, setMaxTurn] = useState(0)

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1)
    const current = newHistory[newHistory.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'

    setHistory(
      newHistory.concat([
        {
          squares: squares
        }
      ])
    )
    setStepNumber(newHistory.length)
    setXIsNext(!xIsNext)
    setMaxTurn(newHistory.length)
  }

  const jumpTo = (step: number): void => {
    setStepNumber(step)
    setMaxTurn(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start'

    return (
      <li key={move}>
        <button
          className="history"
          onClick={(): void => jumpTo(move)}
          onMouseEnter={(): void => setStepNumber(move)}
          onMouseLeave={(): void => setStepNumber(maxTurn)}
        >
          {desc}
        </button>
      </li>
    )
  })

  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number): void => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
