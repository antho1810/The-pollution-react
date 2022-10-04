import React, { useEffect, useState } from "react";

export const State = () => {
  // const apiKey = "375e5d9d-7942-4750-9ae0-67388f61f5a0";
  const url = `http://api.airvisual.com/v2/cities?state={{STATE_NAME}}&country={{COUNTRY_NAME}}&key=${apiKey}`;
  const [stat, setStat] = useState();
  const fetApi = async () => {
    const response = await fetch(url);
    // console.log(response.statusText);
    const responseJSON = response.json();
    setStat(responseJSON);
  };
  useEffect(() => {
    fetApi();
  }, []);

  return (
    <div>
      State
      <ul className="form-select" aria-label="Default select example">
        <li value="#" select>
          Select an option
        </li>
        {!stat ? "Cargando..."
          : stat.map((todo) => {
              return <li>{todo.state}</li>;
            })}
      </ul>
    </div>
  );
};
