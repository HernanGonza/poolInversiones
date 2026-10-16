import React from 'react';
import { ROLES } from '../data.js';

export default function Gobernanza() {
  return /*#__PURE__*/React.createElement("section", {
    id: "gobernanza"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Quién es quién"), /*#__PURE__*/React.createElement("h2", null, "Quién forma parte, quién ejecuta y quién controla"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "La regla de oro: ", /*#__PURE__*/React.createElement("b", null, "quien decide no custodia el dinero, quien custodia no decide, y quien controla no participa de ninguno de los dos.")), /*#__PURE__*/React.createElement("div", {
    className: "legend",
    style: {
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--leaf)"
    }
  }), "Dueños"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--forest)"
    }
  }), "Custodia"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--gold)"
    }
  }), "Decisión y ejecución"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--earth)"
    }
  }), "Control")), /*#__PURE__*/React.createElement("div", {
    className: "grid g3"
  }, ROLES.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.h,
    className: "card role " + r.t
  }, /*#__PURE__*/React.createElement("h3", null, r.h), /*#__PURE__*/React.createElement("p", {
    className: "small muted",
    style: {
      margin: 0
    }
  }, r.b))))));
}
