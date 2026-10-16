/* ===================== DATOS DE CONTEXTO (fuentes públicas, oct-2026) ===================== */

export const STATS = [{
  n: "+10,9 M",
  l: "créditos de carbono certificados por Verra (período 2017-2022)"
}, {
  n: "~1,6 M ha",
  l: "de bosque nativo alcanzadas por el programa"
}, {
  n: "ID 4648",
  l: "registro Verra · titular: Provincia de Misiones"
}, {
  n: "~25.000",
  l: "pequeños productores con lotes de bosque nativo"
}];

export const CUENTAS = [{
  k: "Cuenta 2",
  p: 45,
  c: "var(--forest)",
  d: "Propietarios de bosque nativo · aportes no reembolsables según tamaño, categoría y tipo de bosque"
}, {
  k: "Cuenta 1",
  p: 20,
  c: "var(--gold)",
  d: "Proyectos ambientales y sustentables: PyMEs, emprendedores, ONG, municipios, pueblos originarios, universidades (incluye tecnología aplicada a agricultura y silvicultura)"
}, {
  k: "Cuenta 3",
  p: 35,
  c: "var(--earth)",
  d: "Programas y políticas de conservación del Estado provincial"
}];

/* ===================== FIGURAS JURÍDICAS ===================== */

export const FIGURAS = [{
  id: "fadm",
  nombre: "Fideicomiso de administración (sub-fideicomiso)",
  rec: true,
  resumen: "Un fideicomiso nuevo, separado del fideicomiso REDD+, donde cada productor que adhiere cede su derecho de cobro de la Cuenta 2. Lo administra un banco fiduciario regulado por el BCRA. Es la figura que la Provincia ya usa, así que se apoya en algo conocido.",
  marco: "Código Civil y Comercial (arts. 1666 y ss.) · Decreto 2179/2024 y fideicomiso REDD+ existente",
  pros: ["Patrimonio separado: el dinero no es de la Provincia ni del banco, no puede embargarse por deudas de ninguno", "Rápido de constituir; se puede replicar el modelo del fideicomiso actual", "Contrato a medida: reglas de inversión, salida y herencia escritas desde el inicio", "Fiduciario bancario con supervisión del BCRA"],
  contras: ["No es oferta pública: menos estandarizado que un fideicomiso financiero", "La transparencia depende de lo que exija el contrato (hay que exigirla por escrito)"],
  cuando: "Etapa piloto y primeros años. Escala de cientos a pocos miles de adherentes."
}, {
  id: "ff",
  nombre: "Fideicomiso financiero con oferta pública",
  resumen: "El pool emite certificados de participación registrados en la CNV. Cada productor recibe certificados proporcionales a su aporte. Máximo nivel de control externo y de información pública.",
  marco: "CCyC arts. 1690 y ss. · Ley 26.831 de Mercado de Capitales · Normas CNV",
  pros: ["Control de la CNV, calificación de riesgo y prospecto público", "Certificados con valor objetivo y potencialmente negociables", "Puede sumar inversores externos (empresas, compradores de créditos) al mismo vehículo"],
  contras: ["Costos fijos altos (estructuración, calificadora, auditoría, mercado)", "Tiempos largos de armado; complejo de explicar a pequeños productores"],
  cuando: "Cuando el pool supere un volumen que justifique los costos o se quiera atraer capital privado."
}, {
  id: "coop",
  nombre: "Cooperativa o federación de cooperativas",
  resumen: "Los productores aportan su monto como capital cooperativo. La cooperativa compra maquinaria, insumos y tecnología en común y presta servicios a sus socios. Un voto por socio, sin importar cuánto aportó.",
  marco: "Ley 20.337 de Cooperativas · control de INAES y órgano local competente",
  pros: ["Fuerte identidad territorial; decisiones en asamblea", "Ideal para uso compartido de maquinaria, acopio y compras conjuntas", "Puede presentarse como entidad a la Cuenta 1 del programa"],
  contras: ["Riesgo de gestión si no hay administración profesional", "El capital cooperativo no rinde como inversión: se devuelve a valor nominal salvo excedentes", "Requiere cooperativas en funcionamiento o crear nuevas"],
  cuando: "Zonas donde ya existen cooperativas activas. Se puede combinar con el fideicomiso (la cooperativa como ejecutora)."
}, {
  id: "fci",
  nombre: "Fondo Común de Inversión cerrado",
  resumen: "Un FCI cerrado orientado a economías regionales, administrado por una sociedad gerente y con un banco depositario. Cada productor recibe cuotapartes.",
  marco: "Ley 24.083 de FCI · Normas CNV",
  pros: ["Estructura estandarizada y supervisada por la CNV", "Separación clara entre quien decide inversiones (gerente) y quien custodia (depositaria)"],
  contras: ["Pensado para invertir en activos financieros; menos flexible para comprar maquinaria o dar asistencia técnica", "Costos de gestión y comisiones"],
  cuando: "Como vehículo para colocar transitoriamente la liquidez del pool, no como estructura principal."
}, {
  id: "mixto",
  nombre: "Modelo mixto recomendado",
  resumen: "Fideicomiso de administración como \u201ccaja\u201d que custodia el dinero + cooperativas y entes técnicos como \u201cbrazos ejecutores\u201d en territorio. Si el volumen crece, migrar a fideicomiso financiero.",
  marco: "Combina CCyC (fideicomiso) + Ley 20.337 (cooperativas)",
  pros: ["El dinero queda en un patrimonio separado bajo banco regulado", "La ejecución queda cerca del productor", "Escalable sin rediseñar todo"],
  contras: ["Más actores: exige un contrato claro de roles y responsabilidades"],
  cuando: "Propuesta de base para discutir."
}];

/* ===================== GOBERNANZA ===================== */

export const ROLES = [{
  t: "ppl",
  h: "Fiduciantes / Beneficiarios",
  b: "Productores que eligen adherir. Aportan el monto que les corresponde de la Cuenta 2 y reciben cuotapartes proporcionales. Son los dueños económicos del pool."
}, {
  t: "",
  h: "Fiduciario",
  b: "Banco regulado por el BCRA (por ejemplo, el mismo fiduciario del fideicomiso REDD+ u otro elegido por concurso). Custodia el dinero, ejecuta pagos sólo con aprobación del Comité y lleva la contabilidad."
}, {
  t: "exec",
  h: "Comité de Inversión",
  b: "Órgano mixto que aprueba en qué se invierte. Mayoría de representantes electos por los productores adheridos + Ministerio de Ecología y RNR + Ministerio de Hacienda + un técnico independiente (INTA / UNaM). Actas públicas."
}, {
  t: "exec",
  h: "Unidad Ejecutora",
  b: "Equipo técnico que evalúa proyectos, hace compras conjuntas, acompaña al productor y reporta avances. Puede ser un ente provincial o cooperativas habilitadas por convenio."
}, {
  t: "ctrl",
  h: "Auditoría externa",
  b: "Estudio contable independiente, elegido por concurso, que audita estados contables con frecuencia trimestral o semestral. Informe publicado completo."
}, {
  t: "ctrl",
  h: "Control público",
  b: "Tribunal de Cuentas de la Provincia sobre los fondos de origen público y el BCRA sobre el fiduciario. Si se usa oferta pública, también la CNV."
}, {
  t: "ctrl",
  h: "Consejo de Veeduría",
  b: "Productores no integrantes del Comité, organizaciones de la sociedad civil y universidad. Acceso pleno a la información, puede pedir explicaciones y emite un informe anual propio."
}];

/* ===================== RIESGOS ===================== */

export const RIESGOS = [["Precio del carbono volátil", "Los montos dependen de la venta efectiva de créditos.", "El pool sólo se integra con dinero efectivamente cobrado; nada se promete sobre ventas futuras."], ["Demora en la venta", "El acceso a mercados regulados (CORSIA) depende de la autorización nacional.", "Calendario de adhesión por tramo de venta; cada tramo se integra al cobrarse."], ["Devaluación / inflación", "El capital puede perder valor si queda en pesos.", "Política de liquidez en moneda dura o instrumentos ajustables; inversión rápida en bienes."], ["Mala administración", "Decisiones de inversión pobres o costos altos.", "Reglas de inversión en el contrato, tope de gastos administrativos, auditoría externa."], ["Captura política", "Que el pool se use con fines ajenos a los productores.", "Mayoría de productores electos en el Comité, actas y pagos públicos, veeduría."], ["Incumplimiento de préstamos", "Si el pool presta a productores y no se devuelve.", "Garantías solidarias por grupo, montos escalonados, asistencia técnica."], ["Conflicto de intereses", "Proveedores vinculados a decisores.", "Declaración jurada de intereses, compras con 3 presupuestos mínimos, registro público de proveedores."]];

/* ===================== FAQ ===================== */

export const FAQ = [["¿Es obligatorio entrar al pool?", "No. Cada productor elige entre cobrar su parte directamente (como ya está previsto) o aportarla al pool. La opción por defecto es el cobro directo."], ["¿Pierdo mi plata si entro?", "Tu aporte se convierte en cuotapartes a tu nombre. El valor de esas cuotapartes puede subir o bajar según el desempeño del pool; por eso las reglas de inversión son prudentes y públicas."], ["¿Puedo salirme?", "Sí, después de un plazo mínimo de permanencia. La salida anticipada es posible con condiciones definidas en el contrato (por ejemplo, rescate en cuotas). En caso de fallecimiento, las cuotapartes pasan a los herederos."], ["¿Sigo teniendo que conservar el bosque?", "Sí. El pool no cambia las condiciones del programa REDD+: la conservación del bosque sigue siendo el requisito para recibir beneficios."], ["¿Cambia la propiedad de mi tierra?", "No. Ni el programa REDD+ ni el pool alteran la titularidad de la tierra ni del bosque."], ["¿Cómo sé en qué se usa el dinero?", "Habrá un tablero público con saldos, inversiones aprobadas, actas del Comité y auditorías. Cada productor podrá consultar sus cuotapartes con su CUIT."], ["¿Qué gana el productor chico frente al cobro directo?", "Acceso a bienes y tecnología que su monto individual no alcanza a pagar, compras con precio mayorista, y la posibilidad de que el pool, como entidad, presente proyectos a la Cuenta 1 del programa para sumar fondos no reembolsables."]];

/* ===================== UTILIDADES ===================== */

export const fmt = n => "USD " + Math.round(n).toLocaleString("es-AR");
