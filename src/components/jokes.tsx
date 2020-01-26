import React from "react";

interface JokeI {
  question?: string;
  punchline: string;
}

const Joke = ({ inputs }: { inputs: JokeI }) => {
  const { question } = inputs;

  if (question) {
    return (
      <div>
        <p>Q -> {inputs.question}</p>
        <br />
        <p>A -> {inputs.punchline}</p>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <p>A -> {inputs.punchline}</p>
      <hr />
    </div>
  );
};

export { Joke };
