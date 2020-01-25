import * as React from "react";

interface ColorsI {
  colors: string[];
}

function Looper(props: ColorsI) {
  return (
    <ul>
      {props.colors.map((clr, idx) => {
        return <li key={idx}>{`${clr}`}</li>;
      })}
    </ul>
  );
}

export { Looper };
