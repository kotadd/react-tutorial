import React from "react";

type SquareProps = {
  value: "O" | "X" | null;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
