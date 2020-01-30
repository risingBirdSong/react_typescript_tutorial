import React from "react";

export interface RandoUserI {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  jobTitle: string;
}

export const RandomUserComponent = ({ props }: { props: RandoUserI }) => {
  return (
    <div>
      <p> {props.id} </p>
      <hr />
      <p>
        {props.firstName} - {props.lastName}
      </p>
      <hr />
      <img src={props.photoUrl} alt="" />
      <hr />
      <p>{props.jobTitle}</p>
    </div>
  );
};

export const randomUsers: RandoUserI[] = [
  {
    id: "432694",
    firstName: "Felipe",
    lastName: "Simmons",
    photoUrl: "https://avatars.githubusercontent.com/u/432694",
    jobTitle: "Explosives Expert"
  },
  {
    id: "791955",
    firstName: "Cecile",
    lastName: "Cardenas",
    photoUrl: "https://avatars.githubusercontent.com/u/791955",
    jobTitle: "Geological Data Technician"
  },
  {
    id: "298089",
    firstName: "Liza",
    lastName: "Compton",
    photoUrl: "https://avatars.githubusercontent.com/u/298089",
    jobTitle: "Janitor"
  },
  {
    id: "981710",
    firstName: "Rusty",
    lastName: "Edison",
    photoUrl: "https://avatars.githubusercontent.com/u/981710",
    jobTitle: "Compliance Officers"
  },
  {
    id: "646520",
    firstName: "Darell",
    lastName: "Vaughn",
    photoUrl: "https://avatars.githubusercontent.com/u/646520",
    jobTitle: "Ceiling Tile Installer"
  },
  {
    id: "524176",
    firstName: "Barry",
    lastName: "Janie",
    photoUrl: "https://avatars.githubusercontent.com/u/524176",
    jobTitle: "Rail Yard Engineer"
  },
  {
    id: "889967",
    firstName: "Vasquez",
    lastName: "Nicolas",
    photoUrl: "https://avatars.githubusercontent.com/u/889967",
    jobTitle: "Self-Enrichment Education Teacher"
  },
  {
    id: "38595",
    firstName: "Ismael",
    lastName: "Jefferson",
    photoUrl: "https://avatars.githubusercontent.com/u/38595",
    jobTitle: "Recruiter"
  },
  {
    id: "854236",
    firstName: "Annie",
    lastName: "Lenard",
    photoUrl: "https://avatars.githubusercontent.com/u/854236",
    jobTitle: "Sales and Related Workers"
  },
  {
    id: "831480",
    firstName: "Andre",
    lastName: "Claudio",
    photoUrl: "https://avatars.githubusercontent.com/u/831480",
    jobTitle: "Chef"
  },
  {
    id: "524766",
    firstName: "Aguilar",
    lastName: "Louis",
    photoUrl: "https://avatars.githubusercontent.com/u/524766",
    jobTitle: "Pharmacy Aide"
  },
  {
    id: "436847",
    firstName: "Garrison",
    lastName: "Conner",
    photoUrl: "https://avatars.githubusercontent.com/u/436847",
    jobTitle: "Deburring Machine Operator"
  },
  {
    id: "989923",
    firstName: "Ronda",
    lastName: "Mccarty",
    photoUrl: "https://avatars.githubusercontent.com/u/989923",
    jobTitle: "Sales Person"
  },
  {
    id: "587090",
    firstName: "Deirdre",
    lastName: "Teddy",
    photoUrl: "https://avatars.githubusercontent.com/u/587090",
    jobTitle: "Bartender"
  },
  {
    id: "238184",
    firstName: "Conrad",
    lastName: "Adkins",
    photoUrl: "https://avatars.githubusercontent.com/u/238184",
    jobTitle: "Music Director"
  },
  {
    id: "639086",
    firstName: "Vincenzo",
    lastName: "Holloway",
    photoUrl: "https://avatars.githubusercontent.com/u/639086",
    jobTitle: "Bellhop"
  },
  {
    id: "147397",
    firstName: "Navarro",
    lastName: "Shepard",
    photoUrl: "https://avatars.githubusercontent.com/u/147397",
    jobTitle: "Marking Clerk"
  },
  {
    id: "705583",
    firstName: "Ryan",
    lastName: "Mahoney",
    photoUrl: "https://avatars.githubusercontent.com/u/705583",
    jobTitle: "Judge"
  },
  {
    id: "394596",
    firstName: "Vega",
    lastName: "Owens",
    photoUrl: "https://avatars.githubusercontent.com/u/394596",
    jobTitle: "Power Distributors OR Dispatcher"
  },
  {
    id: "607835",
    firstName: "Lina",
    lastName: "Desmond",
    photoUrl: "https://avatars.githubusercontent.com/u/607835",
    jobTitle: "Precision Devices Inspector"
  }
];
