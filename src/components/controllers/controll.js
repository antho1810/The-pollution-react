import { useState } from "react";

const messages = {
    req: "Este campo es obligatorio",
    country: "El formato introducido no es el correcto",
    state: "Debes de introducir una estado o departamento correcto",
    city: "Debes introducir una ciudad que exista"
}

const patterns = { name: /^[A-Za-z]+$/i };


