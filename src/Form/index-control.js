import React, { useEffect, useState } from "react";
// import { State } from "../components/State";

export const Formulary = () => {
  const [poluInfo, setPoluInfo] = useState({
    country: "",
    state: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPoluInfo({ ...poluInfo, [name]: value });
  };
  return (
    <div>
      <input name="Country" placeholder="Country" type="text" value={poluInfo.country} onChange={handleChange} />
      <input name="State" placeholder="State" type="text" value={poluInfo.state} onChange={handleChange}/>
      <input name="City" placeholder="City" type="text" value={poluInfo.city} onChange={handleChange}/>
      {/* <State /> */}
      <button type="submit">Buscar</button>
      <p id="btn"></p>
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
