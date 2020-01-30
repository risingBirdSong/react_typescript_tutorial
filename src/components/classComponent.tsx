import React from "react";

class ClassTest extends React.Component {
  render() {
    return (
      <div>
        <p>this is a test</p>
      </div>
    );
  }
}

interface PracticePropsI {
  text: string;
}

class PracticeProps extends React.Component {
  public props: PracticePropsI;
  constructor({ props }: { props: PracticePropsI }) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

interface EmptyPropsI {}
interface StatePracticeI {
  answer: string;
}

class StatePractice extends React.Component<EmptyPropsI, StatePracticeI> {
  constructor() {
    super({});
    this.state = {
      answer: "yes"
    };
  }
  render() {
    return <p>is state important? a -> {this.state.answer}</p>;
  }
}

interface StateDebuggingI {
  name: string;
  age: number;
}

class StateDebugging extends React.Component<EmptyPropsI, StateDebuggingI> {
  constructor(public age: number, public name: string) {
    super({});
    this.state = {
      age: age,
      name: name
    };
  }
  render() {
    return (
      <div>
        <p>
          age -> {this.state.age} , name -> {this.state.name}
        </p>
      </div>
    );
  }
}

export { ClassTest, PracticeProps, StatePractice, StateDebugging };
