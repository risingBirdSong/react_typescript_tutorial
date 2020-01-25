import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { MyDate } from "./components/date";
import { Looper } from "./components/looping";
import { MyList, MyNameAndVacations } from "./components/lists";
import { MyHeader, MyHeaderI } from "./components/Header";
import { Todo, TodoItem } from "./components/TodoList";

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

const App: React.FC = () => {
  return (
    <div>
      <MyHeader props={passTheHeader} />
      <Todo />
    </div>
  );
};

export default App;
