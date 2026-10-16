import React from 'react';
import { RIESGOS } from '../data.js';

export default function Transparencia() {
  return /*#__PURE__*/React.createElement("section", {
    id: "transparencia"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Para que no haya dudas"), /*#__PURE__*/React.createElement("h2", null, "Transparencia y control"), /*#__PURE__*/React.createElement("div", {
    className: "grid g2",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Qué se publica"), /*#__PURE__*/React.createElement("ul", {
    className: "clean"
  }, /*#__PURE__*/React.createElement("li", null, "Padrón de adherentes (con resguardo de datos personales) y monto total aportado"), /*#__PURE__*/React.createElement("li", null, "Saldo del pool y movimientos, actualizados mensualmente"), /*#__PURE__*/React.createElement("li", null, "Cada inversión aprobada: monto, destino, proveedor, beneficiarios"), /*#__PURE__*/React.createElement("li", null, "Actas del Comité de Inversión"), /*#__PURE__*/React.createElement("li", null, "Informes de auditoría externa completos"), /*#__PURE__*/React.createElement("li", null, "Informe anual del Consejo de Veeduría"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Mecanismos de control"), /*#__PURE__*/React.createElement("ul", {
    className: "clean"
  }, /*#__PURE__*/React.createElement("li", null, "Tablero público de datos abiertos"), /*#__PURE__*/React.createElement("li", null, "Consulta individual de cuotapartes con CUIT"), /*#__PURE__*/React.createElement("li", null, "Canal de reclamos con plazo de respuesta"), /*#__PURE__*/React.createElement("li", null, "Asamblea anual de adherentes en cada región"), /*#__PURE__*/React.createElement("li", null, "Declaración de intereses de decisores y registro de proveedores"), /*#__PURE__*/React.createElement("li", null, "Compras con al menos tres presupuestos")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 36
    }
  }, "Riesgos y cómo se mitigan"), /*#__PURE__*/React.createElement("div", {
    className: "tscroll"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Riesgo"), /*#__PURE__*/React.createElement("th", null, "Qué puede pasar"), /*#__PURE__*/React.createElement("th", null, "Mitigación"))), /*#__PURE__*/React.createElement("tbody", null, RIESGOS.map(([a, b, c]) => /*#__PURE__*/React.createElement("tr", {
    key: a
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, a)), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, b), /*#__PURE__*/React.createElement("td", null, c))))))));
}
