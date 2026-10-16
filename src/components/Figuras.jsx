import React, { useState } from 'react';
import { FIGURAS } from '../data.js';

export default function Figuras() {
  const [sel, setSel] = useState("fadm");
  const f = FIGURAS.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    id: "figuras"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Cómo se forma el pool"), /*#__PURE__*/React.createElement("h2", null, "Opciones de figura jurídica"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Hay varias formas legales de armar el pool. Todas son posibles en Argentina; difieren en costo, velocidad y nivel de control externo."), /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, FIGURAS.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    className: "tab" + (sel === x.id ? " on" : ""),
    onClick: () => setSel(x.id)
  }, x.nombre))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (f.rec ? " rec" : "")
  }, /*#__PURE__*/React.createElement("h3", null, f.nombre, f.rec && /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Recomendada para arrancar")), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, f.resumen), /*#__PURE__*/React.createElement("p", {
    className: "small"
  }, /*#__PURE__*/React.createElement("b", null, "Marco legal:"), " ", f.marco), /*#__PURE__*/React.createElement("div", {
    className: "grid g2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "A favor"), /*#__PURE__*/React.createElement("ul", {
    className: "clean"
  }, f.pros.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "En contra"), /*#__PURE__*/React.createElement("ul", {
    className: "clean cons"
  }, f.contras.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, p))))), /*#__PURE__*/React.createElement("div", {
    className: "card soft",
    style: {
      marginTop: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("b", null, "Cuándo conviene:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, f.cuando))), /*#__PURE__*/React.createElement("div", {
    className: "tscroll",
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Figura"), /*#__PURE__*/React.createElement("th", null, "Control externo"), /*#__PURE__*/React.createElement("th", null, "Costo"), /*#__PURE__*/React.createElement("th", null, "Velocidad"), /*#__PURE__*/React.createElement("th", null, "Flexibilidad para invertir en chacras"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "Fideicomiso de administración")), /*#__PURE__*/React.createElement("td", null, "BCRA (fiduciario) + auditoría"), /*#__PURE__*/React.createElement("td", null, "Bajo"), /*#__PURE__*/React.createElement("td", null, "Alta"), /*#__PURE__*/React.createElement("td", null, "Alta")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "Fideicomiso financiero")), /*#__PURE__*/React.createElement("td", null, "CNV + calificadora + BCRA"), /*#__PURE__*/React.createElement("td", null, "Alto"), /*#__PURE__*/React.createElement("td", null, "Baja"), /*#__PURE__*/React.createElement("td", null, "Media")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "Cooperativa")), /*#__PURE__*/React.createElement("td", null, "INAES + asamblea"), /*#__PURE__*/React.createElement("td", null, "Bajo"), /*#__PURE__*/React.createElement("td", null, "Media"), /*#__PURE__*/React.createElement("td", null, "Alta")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "FCI cerrado")), /*#__PURE__*/React.createElement("td", null, "CNV"), /*#__PURE__*/React.createElement("td", null, "Medio"), /*#__PURE__*/React.createElement("td", null, "Baja"), /*#__PURE__*/React.createElement("td", null, "Baja")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "Mixto")), /*#__PURE__*/React.createElement("td", null, "BCRA + auditoría + INAES"), /*#__PURE__*/React.createElement("td", null, "Bajo-medio"), /*#__PURE__*/React.createElement("td", null, "Alta"), /*#__PURE__*/React.createElement("td", null, "Alta")))))));
}
