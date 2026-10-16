import React from 'react';
import { FUENTES_ANTECEDENTES } from '../data.js';

export default function Fuentes() {
  const src = [["Verra certifica el programa jurisdiccional de Misiones (jun-2026)", "https://misionesonline.net/2026/06/02/misiones-verra-certifica-a-nivel-mundial/"], ["Nuevo reparto 45 / 20 / 35 (sep-2026)", "https://www.argentinaforestal.com/2026/09/05/misiones-aumenta-la-distribucion-del-programa-jnr-redd/"], ["Programa JNR: titularidad y fideicomiso (sep-2026)", "https://misionesonline.net/2026/09/03/el-programa-jnr-de-la-provincia/"], ["Presentación ante el Foro de Presupuesto: 10.914.085 créditos (jun-2026)", "https://www.argentinaforestal.com/2026/06/30/misiones-presento-su-proyecto-de-creditos-de-carbono/"], ["Decreto 2179/2024 – análisis Marval", "https://www.marval.com/Publicacion/misiones-implementa-un-programa-de-creditos-de-carbono-17018"], ["Mecanismo de Distribución de Beneficios (MDB)", "https://programajnr.misiones.gob.ar/webjnr/wp-content/uploads/2024/10/JNR-MDB.pdf"], ["Estrategia Provincial REDD+", "https://programajnr.misiones.gob.ar/webjnr/wp-content/uploads/2024/04/Estrategia-Provincial-REDD-Final-Resolucion_compressed.pdf"], ["Negociación con LATAM bajo CORSIA", "https://www.fastmarkets.com/insights/argentinas-misiones-advances-corsia-credits-deal-with-latam-airlines/"], ["Programa JNR REDD+ ECO2 – sitio oficial", "https://programajnr.misiones.gob.ar/es/home"]];
  const link = ([t, u]) => (
    <li key={u}>
      <a href={u} target="_blank" rel="noopener noreferrer">{t}</a>
    </li>
  );
  return (
    <section>
      <div className="wrap">
        <div className="eyebrow">Fuentes</div>
        <h2>Referencias</h2>
        <ul className="src">{src.map(link)}</ul>
        <h3 className="src-sub">Antecedentes internacionales</h3>
        <ul className="src">{FUENTES_ANTECEDENTES.map(link)}</ul>
      </div>
    </section>
  );
}
