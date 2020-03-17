import React from 'react'

type SquareProps = {
  value: 'O' | 'X' | null
  onClick: () => void
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  return (
    <button className="square" onClick={(): void => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square
