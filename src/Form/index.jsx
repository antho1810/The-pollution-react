import React from "react";
import { useForm } from "react-hook-form";

export const Polution = () => {
  const {
    register,
    formState: { errors },
    // watch,
    handleSubmit,
  } = useForm({
    // defaultValues: {
    //   country: "Colombia",
    //   state: "Antioquia",
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const Api = "184fdfd5-2040-40c9-8df8-70575d4429dd";

  // const pais = document.querySelector('#country');
  // const departmento = document.querySelector('#state');
  // const ciudad = document.querySelector('#city');
  const formulario = document.querySelector("#formulario");
  const bottom = document.querySelector("#submit");

  const buscar = () => {
    const texto = formulario.value;
    // if(){};
  }
  bottom.addEventListener('click', buscar);

  return (
    <div>
      <p>
        {" "}
        Url: http://api.airvisual.com/v2/city?city=Los
        Angeles&state=California&country=USA&key={Api}
      </p>
      <form id="formulario" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="country">Pais</label>
        <input
          type="text"
          placeholder="Country"
          id="country"
        />
        {errors.country?.type === "required" && (
          <p>El campo pais es requerido</p>
        )}
        <label htmlFor="state">
          Departamento
        </label>
        <input type="text" placeholder="State" id="state" />
        <label htmlFor="city" >
          Ciudad
        </label>
        <input type="text" id="city" placeholder="City" {...register("city")} />

        <input type="submit" id="submit" value="Buscar" />
      </form>
    </div>
  );
};
