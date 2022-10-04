import React from "react";
import { useForm } from "react-hook-form";

export const Polution = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      country: "Colombia",
      state: "Antioquia",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const Api = "";

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
          {...register("country", { required: true })}
        />
        {errors.country?.type === "required" && (
          <p>El campo pais es requerido</p>
        )}
        <label htmlFor="state">Departamento</label>
        <input type="text" placeholder="State" {...register("state")} />
        <label htmlFor="city">Ciudad</label>
        <input type="text" placeholder="City" {...register("city")} />

        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};
