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
import { randomUsers, RandomUserComponent } from "./components/random-users";
import products from "./data/itemsdata";
import { ProductComponent } from "./components/itemsComponent";
import { MoreTodoComponent } from "./components/moreTodo";
import { moreToItems } from "./components/moreTodoItems";
import {
  ClassTest,
  PracticeProps,
  StatePractice,
  StateDebugging
} from "./components/classComponent";
import { User } from "./components/user";

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

console.log(products[0]);
console.log("yea");

class App extends React.Component<{}, { todos: any[] }> {
  constructor() {
    super({});
    this.state = {
      todos: this.mappedTodos
    };
  }

  mappedUsers = randomUsers.map((user, idx) => {
    return <RandomUserComponent props={user} />;
  });

  mappedProducts = products.map((product, idx) => {
    return <ProductComponent props={product} />;
  });

  mappedTodos = moreToItems.map((todo, idx) => {
    return <MoreTodoComponent done={todo.done} task={todo.task} />;
  });

  render() {
    return (
      <div>
        <MyHeader props={passTheHeader} />
        {this.state.todos}
      </div>
    );
  }
}

export default App;
