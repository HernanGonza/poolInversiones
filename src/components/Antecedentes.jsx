import React from 'react';
import { ANTECEDENTES, GRUPOS_ANTECEDENTES, TOMAMOS } from '../data.js';

export default function Antecedentes() {
  return (
    <section id="antecedentes">
      <div className="wrap">
        <div className="eyebrow">Antecedentes internacionales</div>
        <h2>No es una idea aislada</h2>
        <p className="lead">
          Otros programas de conservación de bosques ya combinan pagos individuales con inversión productiva
          colectiva. Sus resultados y sus problemas ayudan a diseñar mejor el pool.
        </p>

        {GRUPOS_ANTECEDENTES.map(([grupo, titulo]) => (
          <div key={grupo}>
            <h3 className="ant-group">{titulo}</h3>
            <div className="grid g3 ant-grid">
          {ANTECEDENTES.filter((a) => a.grupo === grupo).map((a) => (
            <article className="card ant" key={a.id}>
              <h3>{a.nombre}</h3>
              <div className="small muted ant-lugar">{a.lugar}</div>

              {a.que.map((t) => <p key={t}>{t}</p>)}

              {a.componentes.length > 0 && (
                <ul className="clean">
                  {a.componentes.map(([k, v]) => (
                    <li key={k}><b>{k}:</b> {v}</li>
                  ))}
                </ul>
              )}

              {a.lista && (
                <ul className="clean">
                  {a.lista.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}

              {a.problemas && (
                <>
                  <p className="ant-sub">{a.problemasTitulo}</p>
                  <ul className="clean cons">
                    {a.problemas.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </>
              )}

              {a.extra && <p className="small muted ant-extra">{a.extra}</p>}

              {a.similitud && (
                <div className="ant-box">
                  <div className="ant-label">Similitud con nuestra propuesta</div>
                  <p className="small">{a.similitud}</p>
                </div>
              )}
              <div className="ant-box lesson">
                <div className="ant-label">Lección para el pool</div>
                <p className="small">{a.leccion}</p>
              </div>

              <a className="small ant-src" href={a.fuente[1]} target="_blank" rel="noopener noreferrer">
                Fuente: {a.fuente[0]}
              </a>
            </article>
          ))}
            </div>
          </div>
        ))}

        <div className="card rec ant-take">
          <h3>Qué tomamos de estas experiencias</h3>
          <ul className="clean">
            {TOMAMOS.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
