import React from "react";
import { useForm } from "react-hook-form";

// import { State } from "../components/State";

export const Formulary = () => {
  const [search, handleSubmit] = useForm();
  const onSubmit = (poluInfo) => console.log(poluInfo);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Country">País</label>
        <input
          name="Country"
          placeholder="Country"
          type="text"
          {...search("country")}
        />
        <label htmlFor="State">Estado</label>
        <input
          name="State"
          placeholder="State"
          type="text"
          {...search("state")}
        />
        <label htmlFor="City">Ciudad</label>
        <input name="City" placeholder="City" type="text" {...search("city")} />
        {/* <State /> */}
        <button type="submit">Buscar</button>
        <p id="btn"></p>
      </form>
    </div>
  );
};
// onClick={buscarApi()}
// function buscarApi() {
//   const apiKey = "375e5d9d-7942-4750-9ae0-67388f61f5a0";
//   const url = `http://api.airvisual.com/v2/countries?key=${apiKey}`;
//   console.log(url);
// document.getElementById("btn").innerHTML = url
//   // const fetApi = async () => {
//   //   const response = await fetch(url);
//   //   console.log(response.statusText);
//     // const responseJSON = response.json();
//     // setStat(responseJSON);
//   // };
// }
