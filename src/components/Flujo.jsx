import React from 'react';

export default function Flujo() {
  const steps = [["Venta de créditos", "La Provincia vende los créditos certificados por Verra."], ["Fideicomiso REDD+", "El dinero ingresa al fideicomiso existente (fiduciario: Banco Macro) y se reparte 45 / 20 / 35."], ["Cuenta 2 · 45%", "Se calcula lo que corresponde a cada propietario según el padrón."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "flujo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Cómo se mueve el dinero"), /*#__PURE__*/React.createElement("h2", null, "Del crédito de carbono a la chacra"), /*#__PURE__*/React.createElement("div", {
    className: "flow",
    style: {
      marginTop: 22
    }
  }, steps.map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      flex: 1,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("b", null, h), /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("b", null, "El productor elige"))), /*#__PURE__*/React.createElement("div", {
    className: "fork"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "A"), /*#__PURE__*/React.createElement("b", null, "Transferencia a su cuenta"), /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "Cobro directo, fin del recorrido.")), /*#__PURE__*/React.createElement("div", {
    className: "card rec",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "B"), /*#__PURE__*/React.createElement("b", null, "Transferencia al Pool"), /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "Se emiten cuotapartes a su nombre."))), [["Comité de Inversión aprueba", "Proyectos y compras según reglas escritas y públicas. La liquidez ociosa se coloca en instrumentos de bajo riesgo."], ["Ejecución en territorio", "Compras conjuntas, maquinaria compartida, créditos rotatorios, asistencia técnica."], ["Retorno al pool", "Cánones de uso, devolución de créditos e intereses vuelven al fondo y aumentan el valor de las cuotapartes."], ["Apalancamiento con Cuenta 1", "El pool, como entidad, presenta proyectos a la Cuenta 1 (20%) para sumar aportes no reembolsables a sus inversiones."]].map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, i + 5), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      flex: 1,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("b", null, h), /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, b)))))));
}
