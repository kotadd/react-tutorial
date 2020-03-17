import React from 'react'
import Square from '../square/square.component'

type BoardProps = {
  squares: ('O' | 'X' | null)[]
  onClick: (i: number) => void
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const list = []

  for (let i = 0; i < 3; i++) {
    list.push(<div className="board-row" key={(i + 1) * 1000}></div>)
    for (let j = 0; j < 3; j++) {
      list.push(
        <Square
          key={i * 3 + j}
          value={props.squares[i * 3 + j]}
          onClick={(): void => props.onClick(i * 3 + j)}
        />
      )
    }
  }

  return <div>{list}</div>
}

export default Board
