import React from 'react';

export default function Nav() {
  const links = [["contexto", "Contexto"], ["propuesta", "Propuesta"], ["flujo", "Flujo"], ["figuras", "Figura jurídica"], ["gobernanza", "Gobernanza"], ["antecedentes", "Antecedentes"], ["simulador", "Simulador"], ["transparencia", "Transparencia"], ["faq", "Preguntas"]];
  return /*#__PURE__*/React.createElement("nav", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand"
  }, "Pool REDD+ Misiones"), links.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id
  }, t))));
}
