import React from 'react';
import { STATS, CUENTAS } from '../data.js';

export default function Contexto() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contexto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Dónde estamos"), /*#__PURE__*/React.createElement("h2", null, "El programa REDD+ ya está funcionando"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Misiones es el primer gobierno subnacional con un programa jurisdiccional de carbono forestal certificado por Verra (junio 2026). Los fondos de la venta de créditos ingresan a un fideicomiso de administración con Banco Macro como fiduciario y se reparten en tres cuentas."), /*#__PURE__*/React.createElement("div", {
    className: "grid g4",
    style: {
      marginTop: 24
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "card stat",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Reparto vigente de los ingresos (septiembre 2026)"), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, CUENTAS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.k,
    style: {
      width: c.p + "%",
      background: c.c
    }
  }, c.p, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "grid g3",
    style: {
      marginTop: 14
    }
  }, CUENTAS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.k
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: c.c
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, c.k, " · ", c.p, "%"))), /*#__PURE__*/React.createElement("p", {
    className: "small muted",
    style: {
      marginTop: 6
    }
  }, c.d)))), /*#__PURE__*/React.createElement("p", {
    className: "small muted",
    style: {
      marginBottom: 0
    }
  }, "El esquema anterior era 30 / 30 / 40. La Provincia elevó la Cuenta 2 al 45% para reforzar el incentivo a quienes conservan."))));
}
