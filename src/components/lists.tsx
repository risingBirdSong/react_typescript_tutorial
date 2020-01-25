import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface GreetingI {
  greetings: string[];
}

interface myNameAndVacationsI {
  myName: string;
  MyVacations: string[];
}

const MyList = (props: GreetingI) => {
  return (
    <ul className="list-group">
      {props.greetings.map((item, idx) => {
        return (
          <li className="list-group-item" key={idx}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

const MyNameAndVacations = ({ props }: { props: myNameAndVacationsI }) => {
  const { MyVacations, myName } = props;
  return (
    <div>
      <h1 className="h1">hello my name is {myName}</h1>
      <ul>
        {MyVacations.map((vacation, idx) => {
          return <li key={idx}>{`i want to vacation -> ${vacation}`}</li>;
        })}
      </ul>
    </div>
  );
};

export { MyList, MyNameAndVacations};
