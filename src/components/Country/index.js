import React, { useEffect, useState } from "react";

export const Country = () => {
  const apiKey = "2642e049-dfdf-4102-bda1-89612e9f1d51";
  const url = `http://api.airvisual.com/v2/countries?key=${apiKey}`;
//   const url = `http://api.airvisual.com/v2/countries?key=20cbdf42-87b8-4ede-8dec-a1cc0a4a1f45`;
  const [pais, setPais] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setPais(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      Country
      <ul className="form-select" aria-label="Default select example">
        <li value="#" select>Select an option</li>
        {!pais ? "Cargando..."
          : pais.map(todo => {
              return <li>{todo.country}</li>;
            })
        }
      </ul>
    </div>
  );
};
