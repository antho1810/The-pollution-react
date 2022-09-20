import React, { useEffect, useState } from "react";

export const State = () => {
  const apiKey = "2642e049-dfdf-4102-bda1-89612e9f1d51";
  const url = `http://api.airvisual.com/v2/cities?state={{STATE_NAME}}&country={{COUNTRY_NAME}}&key=${apiKey}`;
  const [stat, setStat] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.statusText);
    const responseJSON = response.json();
    setStat(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      State
      <ul className="form-select" aria-label="Default select example">
        <li value="#" select>
          Select an option
        </li>
        {!stat
          ? "Cargando..."
          : stat.map((todo) => {
              return <li>{todo.state}</li>;
            })}
      </ul>
    </div>
  );
};
