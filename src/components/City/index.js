import React, { useEffect, useState } from "react";

export const City = () => {
  const apiKey = "2642e049-dfdf-4102-bda1-89612e9f1d51";
  const url = `http://api.airvisual.com/v2/countries?key=${apiKey}`;
  const [city, setCity] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.statusText);
    const responseJSON = response.json();
    setCity(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      City
      <select className="form-select" aria-label="Default select example">
        <option value="#" select>
          Select an option
        </option>
        {!city
          ? "Cargando..."
          : city.map((todo) => {
              return <option>{todo.city}</option>;
            })}
      </select>
    </div>
  );
};
