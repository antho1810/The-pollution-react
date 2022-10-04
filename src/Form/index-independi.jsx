import React from "react";
import { useForm } from "react-hook-form";

// import { State } from "../components/State";

export const Formulary = () => {
  const { search, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>Pais</label> */}
        <input
          {...search("country")}
          name="country"
          placeholder="Country"
          type="text"
        />
        {/* <label>Estado</label> */}
        <input
          {...search("state")}
          name="state"
          placeholder="State"
          type="text"
        />
        {/* <label>Ciudad</label> */}
        <input {...search("city")} name="city" placeholder="City" type="text" />
        {/* <State /> */}
        <button type="submit" value="Buscar" />
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
