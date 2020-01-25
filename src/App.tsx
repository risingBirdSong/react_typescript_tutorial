import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { MyDate } from "./components/date";
import { Looper } from "./components/looping";
import { MyList, MyNameAndVacations } from "./components/lists";
function MyHeader() {
  return (
    <div>
      <h1 className="text-primary">hello header</h1>
    </div>
  );
}

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

const App: React.FC = () => {
  return (
    <div>
      <MyNameAndVacations props={passed} />
    </div>
  );
};

export default App;
