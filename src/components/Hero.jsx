import React from 'react';

const PUNTOS = [
  ['Voluntario', 'Nadie está obligado a entrar al pool.'],
  ['Cobro directo por defecto', 'Quien no adhiere sigue cobrando su parte como ya está previsto.'],
  ['El bosque se sigue conservando', 'La conservación sigue siendo el requisito del programa REDD+.'],
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Programa Jurisdiccional REDD+ · Misiones</div>
          <h1>Pool de Inversión Productiva para pequeños propietarios de bosque nativo</h1>
          <p className="lead">
            Una opción voluntaria para que quienes conservan pocas hectáreas sumen lo que les corresponde por los
            créditos de carbono a un fondo común, y lo conviertan en tecnología, insumos y mejoras para sus chacras.
          </p>
          <a className="btn primary" href="#propuesta">Ver la propuesta</a>
          <a className="btn ghost" href="#simulador">Probar el simulador</a>
        </div>
        <div className="hero-side">
          {PUNTOS.map(([t, d]) => (
            <div className="card stat" key={t}>
              <div className="n hero-n">{t}</div>
              <div className="l">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
