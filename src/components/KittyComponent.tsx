import React from "react";

type urlLink = string;

interface KittenI {
  imgLink: urlLink;
  name: string;
  lives: number;
}

const Kitten = ({ props }: { props: KittenI }) => {
  return (
    <div className="album py-5 bg-light">
      <img
        className="card-img-top"
        style={{ height: "200px", width: "300px", display: "block" }}
        src={props.imgLink}
        alt="catImage"
      />
      <hr />
      <h3 className="h3"> {props.name}</h3>
      <p className="card-text">Lives : {props.lives}</p>
    </div>
  );
};

export { Kitten, KittenI };
