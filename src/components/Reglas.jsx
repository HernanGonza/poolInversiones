import React from 'react';

export default function Reglas() {
  const reglas = [["Adhesión voluntaria", "Formulario firmado con información clara. Sin adhesión, cobro directo."], ["Aporte según el padrón", "Como máximo, el monto de la Cuenta 2. Sin aportes extra obligatorios. Posibilidad a discutir: aporte parcial, con un porcentaje elegido por el productor y el resto en cobro directo."], ["Cuotapartes nominativas", "A nombre del productor (CUIT), consultables online."], ["Permanencia mínima", "Plazo definido (p. ej. 3 años) para que las inversiones maduren."], ["Salida y herencia", "Rescate al vencimiento o anticipado con condiciones; transmisible a herederos."], ["Un productor, un voto", "Para elegir representantes al Comité, sin importar el tamaño del aporte."], ["Tope de gastos", "Costos administrativos con techo fijado en el contrato (p. ej. % anual del capital)."], ["Préstamos protegidos", "Montos escalonados, tope según el capital propio en el pool y nunca se ejecuta la tierra ni el bosque."], ["Conservación obligatoria", "Se mantienen las condiciones del programa REDD+ sobre el bosque."]];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Reglas para el productor"), /*#__PURE__*/React.createElement("h2", null, "Lo que queda escrito en el contrato"), /*#__PURE__*/React.createElement("div", {
    className: "grid g4",
    style: {
      marginTop: 18
    }
  }, reglas.map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    className: "card",
    key: h
  }, /*#__PURE__*/React.createElement("b", null, h), /*#__PURE__*/React.createElement("p", {
    className: "small muted",
    style: {
      margin: "6px 0 0"
    }
  }, b))))));
}
