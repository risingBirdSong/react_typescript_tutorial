import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { MyDate } from "./components/date";
import { Looper } from "./components/looping";
import { MyList, MyNameAndVacations } from "./components/lists";
import { MyHeader, MyHeaderI } from "./components/Header";
import { Todo, TodoItem } from "./components/TodoList";
import { Kitten, KittenI } from "./components/KittyComponent";
import { Joke } from "./components/jokes";

interface myNameAndVacationsI {
  myName: string;
  MyVacations: string[];
}

// type GreetingProps = {
//   text: string;
// };

let colors: string[] = ["violet", "orange", "navy"];

interface GreetingProps {
  text: string;
}

function Greeting(props: GreetingProps) {
  return <p>{props.text}</p>;
}

const list = ["hello", "greeting", "great to see you"];
const name = "Plutarch";
const vacations = ["France", "Germany", "South Korea"];

const passed: myNameAndVacationsI = {
  myName: name,
  MyVacations: vacations
};

const passTheHeader: MyHeaderI = {
  name: "testing person",
  title: "Test title",
  areaCode: 98123,
  links: ["home", "contact", "fan page", "fave teams of sport"]
};

let myTodos: any[] = [];

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card = ({ title, paragraph }: CardProps) => {
  return (
    <aside>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </aside>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <MyHeader props={passTheHeader} />
      <Joke
        inputs={{
          question: "Why do most married men die before their wives?",
          punchline: "because they want to"
        }}
      />
      <Joke
        inputs={{
          question: "Question: What do diapers and Politicians have in common?",
          punchline: "they both need changing regularly, for the same reason"
        }}
      />
      <Joke
        inputs={{
          question:
            "Question: What did the cowboy say went he went into the car showroom in Germany?",
          punchline: "Audi"
        }}
      />

      <Joke
        inputs={{
          punchline:
            "When I was a boy, I had a disease that required me to eat dirt three times a day in order to survive... It's a good thing my older brother told me about it."
        }}
      />
    </div>
  );
};

export default App;
