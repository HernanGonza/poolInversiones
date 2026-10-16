import React, { useState, useMemo } from 'react';
import { fmt } from '../data.js';

export default function Simulador() {
  const [aporte, setAporte] = useState(300);
  const [adh, setAdh] = useState(3000);
  const [tasa, setTasa] = useState(6);
  const [anios, setAnios] = useState(5);
  const [match, setMatch] = useState(30);
  const r = useMemo(() => {
    const total = aporte * adh;
    const apal = total * (match / 100);
    const capital = total + apal;
    const fvInd = aporte * Math.pow(1 + tasa / 100, anios);
    const fvPool = capital * Math.pow(1 + tasa / 100, anios);
    return {
      total,
      apal,
      capital,
      fvInd,
      fvPool
    };
  }, [aporte, adh, tasa, anios, match]);
  return /*#__PURE__*/React.createElement("section", {
    id: "simulador"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Simulador"), /*#__PURE__*/React.createElement("h2", null, "¿Cuánto suma el pool?"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Cargá el monto promedio por productor según el padrón y probá escenarios."), /*#__PURE__*/React.createElement("div", {
    className: "grid g2",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("label", null, "Aporte promedio por productor (USD)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: aporte,
    onChange: e => setAporte(+e.target.value || 0)
  }), /*#__PURE__*/React.createElement("label", null, "Productores adheridos: ", adh.toLocaleString("es-AR")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "100",
    max: "25000",
    step: "100",
    value: adh,
    onChange: e => setAdh(+e.target.value)
  }), /*#__PURE__*/React.createElement("label", null, "Rendimiento anual neto del pool: ", tasa, "%"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "15",
    step: "0.5",
    value: tasa,
    onChange: e => setTasa(+e.target.value)
  }), /*#__PURE__*/React.createElement("label", null, "Horizonte: ", anios, " años"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "10",
    value: anios,
    onChange: e => setAnios(+e.target.value)
  }), /*#__PURE__*/React.createElement("label", null, "Fondos complementarios de Cuenta 1 sobre el capital: ", match, "%"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: match,
    onChange: e => setMatch(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "Capital inicial de los productores"), /*#__PURE__*/React.createElement("div", {
    className: "out"
  }, fmt(r.total))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "+ Aportes no reembolsables (Cuenta 1)"), /*#__PURE__*/React.createElement("div", {
    className: "out"
  }, fmt(r.apal))), /*#__PURE__*/React.createElement("div", {
    className: "card rec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "Capital disponible para invertir en chacras"), /*#__PURE__*/React.createElement("div", {
    className: "out"
  }, fmt(r.capital))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "Valor estimado de la cuotaparte de un productor promedio a ", anios, " años"), /*#__PURE__*/React.createElement("div", {
    className: "out"
  }, fmt(r.fvInd)), /*#__PURE__*/React.createElement("div", {
    className: "small muted"
  }, "frente a ", fmt(aporte), " si cobra hoy, más el acceso a bienes y servicios del pool")), /*#__PURE__*/React.createElement("div", {
    className: "warn"
  }, "Valores ilustrativos. Reemplazar por los montos reales del padrón de la Cuenta 2. El rendimiento y el porcentaje de Cuenta 1 son hipótesis de trabajo, no compromisos.")))));
}
