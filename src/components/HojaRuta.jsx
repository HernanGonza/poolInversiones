import React from 'react';

export default function HojaRuta() {
  const etapas = [["Etapa 1 · Diseño", "Definir figura jurídica, borrador de contrato, reglas de inversión y composición del Comité."], ["Etapa 2 · Consulta", "Talleres con productores en distintas zonas; ajustar la propuesta con lo que surja."], ["Etapa 3 · Constitución", "Firma del contrato, designación del fiduciario, auditor y Comité. Norma provincial de respaldo."], ["Etapa 4 · Adhesión", "Ventana de adhesión vinculada al próximo pago de la Cuenta 2."], ["Etapa 5 · Piloto", "Primeras inversiones en una o dos zonas; medición de resultados."], ["Etapa 6 · Escala", "Ampliar a toda la provincia; evaluar migración a fideicomiso financiero."]];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Próximos pasos"), /*#__PURE__*/React.createElement("h2", null, "Hoja de ruta"), /*#__PURE__*/React.createElement("div", {
    className: "timeline",
    style: {
      marginTop: 20
    }
  }, etapas.map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    className: "t",
    key: h
  }, /*#__PURE__*/React.createElement("b", null, h), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, b))))));
}
