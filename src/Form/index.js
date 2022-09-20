import React from "react";
import { Country } from "../components/Country";
import { State } from "../components/State";
import { City } from "../components/City";

export const Formulary = () => {
  return (
    <div>
      <Country />
      <State />
      <City />
      <button>Buscar</button>
    </div>
  );
};
