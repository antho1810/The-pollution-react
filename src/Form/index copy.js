import React, { useEffect, useState } from "react";

export const Polution2 = () => {
  const [contami, setContami] = useState();
  const Api = "df620ddd-3a11-4d79-82fc-95c13cbd9c6d";
  const url = `http://api.airvisual.com/v2/city?city=Medellin&state=Antioquia&country=Colombia&key=${Api}`;
  const getData = async () => {
    const data = await fetch(url);
    const contami = await data.json();
    setContami(contami);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <h2>Contaminación / Pollution</h2>
      <ul>
        <li>Anthony</li>
        {console.log(contami)} 
        {contami.map((items) => {
          <li key={items.country}>
            {items.data.city}-{items.data.current.pollution.aqius}
          </li>;
        })}
      </ul>

    </>
  );
};

// {!contami
//     ? "Cargando..."
//     : contami.map((item) => {
//         return <li key={item.country}>{item.data.city}-{item.data.current.pollution.aqius}</li>;
//       })
//   } 