import React from "react";
import { useForm } from "react-hook-form";

export const Polution = () => {
  const {
    register,
    formState: { errors },
    watch,
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

  return (
    <div>
      <p>
        {" "}
        Url: http://api.airvisual.com/v2/city?city={watch("city")}&state=
        {watch("state")}&country={watch("country")}&key={Api}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="country">Pais</label>
        <input
          type="text"
          placeholder="Country"
        />
        {errors.country?.type === "required" && (
          <p>El campo pais es requerido</p>
        )}
        <label htmlFor="state">Departamento</label>
        <input type="text" placeholder="State" />
        <label htmlFor="city">Ciudad</label>
        <input type="text" placeholder="City" />

        <input type="submit" value="Buscar" />
      </form>
    </div>


  );
};

if (resultado.data.data.current.pollution.aqius <= 0 && resultado.data.data.current.pollution.aqius >= 50) {
  console.log("Good");
  console.log('Enjoy your usual outdoor activities');
}

if (resultado.data.data.current.pollution.aqius <= 51 && resultado.data.data.current.pollution.aqius >= 100) {
  console.log("Moderate");
  console.log('Extremely sensitive children and adults should refrain from strenuous outdoor activities');
}

if (resultado.data.data.current.pollution.aqius <= 101 && resultado.data.data.current.pollution.aqius >= 150) {
  console.log("Unhealthy for Sensitive Groups");
  console.log('Sensitive children and adults should limit prolonged outdoor activity');
}

if (resultado.data.data.current.pollution.aqius <= 151 && resultado.data.data.current.pollution.aqius >= 200) {
  console.log("Unhealthy");
  console.log('Sensitive groups should avoid outdoor exposure and others should limit prolonged outdoor activity');
}

if (resultado.data.data.current.pollution.aqius <= 201 && resultado.data.data.current.pollution.aqius >= 300) {
  console.log("Very Unhealthy");
  console.log('Sensitive groups should stay indoors and others should avoid outdoor activity');
}

if (resultado.data.data.current.pollution.aqius <= 301 && resultado.data.data.current.pollution.aqius == 500) {
  console.log("Hazardous");
  console.log('Everyone should avoid all outdoor exertion');
}
