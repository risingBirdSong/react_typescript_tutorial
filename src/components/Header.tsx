import React from "react";

interface MyHeaderI {
  title: string;
  name: string;
  links: string[];
  areaCode: number;
}

const MyHeader = ({ props }: { props: MyHeaderI }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand mg-2">{props.title}</h1>
      <h3 className="navbar-link mg-2">{props.name}</h3>
      <h3 className="navbar-link mg-2"> {props.areaCode} </h3>
      <ul className="navbar-nav">
        {props.links.map((link, idx) => {
          return (
            <li className="list-group-item text-align:right" key={idx}>
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MyHeader, MyHeaderI };
