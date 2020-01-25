import * as React from "react";

function MyDate() {
  let [theDate, setDate] = React.useState("");
  // let [theDate, hideDate] = React.useState();

  let getDate = () => {
    setDate(new Date().toString());
  };

  return (
    <div>
      {theDate}
      <button onClick={getDate} className="btn btn-primary ">
        Get the Date
      </button>
    </div>
  );
}

export { MyDate };
