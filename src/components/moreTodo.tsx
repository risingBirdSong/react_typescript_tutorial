import React from "react";
import { moreToItemsI } from "./moreTodoItems";

interface stateTodoItem {
  task: string;
  done: boolean;
}

class MoreTodoComponent extends React.Component<moreToItemsI, stateTodoItem> {
  constructor({ props }: { props: moreToItemsI }) {
    super(props);
    this.state = {
      done: false,
      task: ""
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h3>{this.props.task}</h3>
        <input type="checkbox" checked={this.props.done} />
        <hr />
      </div>
    );
  }
}

export { MoreTodoComponent };
