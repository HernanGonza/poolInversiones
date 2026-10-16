import React from 'react';
import { FAQ } from '../data.js';

export default function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("h2", null, "Lo que va a preguntar la gente"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, FAQ.map(([q, a]) => /*#__PURE__*/React.createElement("details", {
    key: q
  }, /*#__PURE__*/React.createElement("summary", null, q), /*#__PURE__*/React.createElement("p", null, a))))));
}
