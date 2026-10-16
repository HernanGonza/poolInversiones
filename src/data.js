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

export const RIESGOS = [["Precio del carbono volátil", "Los montos dependen de la venta efectiva de créditos.", "El pool sólo se integra con dinero efectivamente cobrado; nada se promete sobre ventas futuras."], ["Demora en la venta", "El acceso a mercados regulados (CORSIA) depende de la autorización nacional.", "Calendario de adhesión por tramo de venta; cada tramo se integra al cobrarse."], ["Devaluación / inflación", "El capital puede perder valor si queda en pesos.", "Política de liquidez en moneda dura o instrumentos ajustables; inversión rápida en bienes."], ["Mala administración", "Decisiones de inversión pobres o costos altos.", "Reglas de inversión en el contrato, tope de gastos administrativos, auditoría externa."], ["Captura política", "Que el pool se use con fines ajenos a los productores.", "Mayoría de productores electos en el Comité, actas y pagos públicos, veeduría."], ["Incumplimiento de préstamos", "Si el pool presta a productores y no se devuelve, o si un préstamo termina pesando demasiado sobre un productor chico.", "Préstamos chicos y escalonados (se empieza con un monto bajo y se sube al devolver); tope según el capital que el productor tiene en el pool, que puede quedar como garantía; fondo de previsión con una parte de los intereses para cubrir incobrables; cuotas alineadas con la cosecha; refinanciación antes que ejecución; nunca se ejecuta la tierra ni el bosque; garantías solidarias de grupo sólo si el grupo las elige; asistencia técnica durante el crédito."], ["Conflicto de intereses", "Proveedores vinculados a decisores.", "Declaración jurada de intereses, compras con 3 presupuestos mínimos, registro público de proveedores."]];

/* ===================== FAQ ===================== */

export const FAQ = [["¿Es obligatorio entrar al pool?", "No. Cada productor elige entre cobrar su parte directamente (como ya está previsto) o aportarla al pool (a discutir: también una parte). La opción por defecto es el cobro directo."], ["¿Pierdo mi plata si entro?", "Tu aporte se convierte en cuotapartes a tu nombre. El valor de esas cuotapartes puede subir o bajar según el desempeño del pool; por eso las reglas de inversión son prudentes y públicas."], ["¿Puedo salirme?", "Sí, después de un plazo mínimo de permanencia. La salida anticipada es posible con condiciones definidas en el contrato (por ejemplo, rescate en cuotas). En caso de fallecimiento, las cuotapartes pasan a los herederos."], ["¿Sigo teniendo que conservar el bosque?", "Sí. El pool no cambia las condiciones del programa REDD+: la conservación del bosque sigue siendo el requisito para recibir beneficios."], ["¿Cambia la propiedad de mi tierra?", "No. Ni el programa REDD+ ni el pool alteran la titularidad de la tierra ni del bosque."], ["¿Cómo sé en qué se usa el dinero?", "Habrá un tablero público con saldos, inversiones aprobadas, actas del Comité y auditorías. Cada productor podrá consultar sus cuotapartes con su CUIT."], ["¿Qué gana el productor chico frente al cobro directo?", "Acceso a bienes y tecnología que su monto individual no alcanza a pagar, compras con precio mayorista, y la posibilidad de que el pool, como entidad, presente proyectos a la Cuenta 1 del programa para sumar fondos no reembolsables."]];

/* ===================== UTILIDADES ===================== */

export const fmt = n => "USD " + Math.round(n).toLocaleString("es-AR");

/* ===================== ANTECEDENTES INTERNACIONALES ===================== */

export const ANTECEDENTES = [{
  id: "bolsa-floresta",
  grupo: "pagos",
  nombre: "Bolsa Floresta",
  lugar: "Amazonas, Brasil · Fundação Amazônia Sustentável",
  que: ["Divide el beneficio en cuatro componentes:"],
  componentes: [
    ["Familiar", "R$ 50 por mes a las madres de familias que viven en unidades de conservación. Es un complemento, no un ingreso principal."],
    ["Renda", "Inversión colectiva en cadenas productivas sostenibles (pescado, aceites vegetales, frutas, miel, castañas) y certificación para mejorar el precio que reciben los productores."],
    ["Social", "Educación, salud, comunicación y transporte."],
    ["Associação", "Fortalecimiento de la organización comunitaria y del control social."]
  ],
  extra: "Las familias firman un compromiso voluntario de deforestación cero, después de un taller de capacitación.",
  similitud: "Es el antecedente más cercano: separa el pago en efectivo de la inversión productiva colectiva. La diferencia es que ahí la división la decide el programa; en nuestra propuesta la elige cada productor.",
  leccion: "El efectivo solo funciona como complemento. El cambio en la economía de la chacra viene del componente productivo.",
  fuente: ["Programa Bolsa Floresta – Confea", "https://www.confea.org.br/node/108567"]
}, {
  id: "sisa",
  grupo: "pagos",
  nombre: "SISA",
  lugar: "Acre, Brasil · Sistema de Incentivos por Servicios Ambientales",
  que: [
    "Es un programa jurisdiccional como el de Misiones. Fue financiado en parte por Alemania (KfW), que compró reducciones de emisiones por 25 millones de euros.",
    "Entrega los incentivos sobre todo como servicios gratuitos, insumos agrícolas y subsidios a productores de castaña, caucho y legumbres. No exige título formal de la tierra."
  ],
  componentes: [],
  extra: "Críticas: el Estado define qué prácticas califican, lo que deja a las comunidades expuestas a cambios de gobierno. Además, el efecto sobre la deforestación no es concluyente.",
  similitud: "Entrega beneficios en especie e inversión, no solo en efectivo.",
  leccion: "Las reglas tienen que quedar escritas y protegidas de los cambios de gestión. Por eso proponemos un fideicomiso con contrato, auditoría y veeduría.",
  fuente: ["Mongabay (2019): Amazon REDD+ scheme side-steps land rights", "https://news.mongabay.com/2019/07/amazon-redd-scheme-side-steps-land-rights-to-reward-small-forest-producers/"]
}, {
  id: "socio-bosque",
  grupo: "pagos",
  nombre: "Socio Bosque",
  lugar: "Ecuador",
  que: [
    "Paga por hectárea conservada con montos escalonados que favorecen a los pequeños: USD 60/ha de 1 a 20 ha, USD 30/ha de 20 a 50 ha, y menos en categorías mayores.",
    "El pago es anual, condicionado al cumplimiento y controlado con imágenes satelitales. Los participantes presentan un plan de manejo productivo que mantiene la cobertura forestal."
  ],
  componentes: [],
  lista: [
    "Escala: más de 1,5 millones de ha en 2.800 convenios.",
    "Resultado: la deforestación neta anual bajó de 77.000 a 44.000 ha."
  ],
  similitud: "Atiende el mismo problema de los propietarios chicos.",
  leccion: "El pago escalonado por tamaño es una alternativa o un complemento al pool. Vincular el pago a un plan productivo mejora el uso del dinero.",
  fuente: ["Socio Bosque – Initiative 20x20", "https://initiative20x20.org/node/238"]
}, {
  id: "petcacab",
  grupo: "pagos",
  nombre: "Ejido Petcacab",
  lugar: "Quintana Roo, México",
  que: [
    "La mitad de los ingresos por créditos de carbono se reinvierte en salud, proyectos productivos, infraestructura social y monitoreo ambiental. La otra mitad se destina a utilidades.",
    "Las asambleas se hacen en español y en maya."
  ],
  componentes: [],
  similitud: "Combina ingreso y reinversión colectiva decidida en asamblea.",
  leccion: "La reinversión colectiva y el ingreso pueden convivir. Por eso planteamos como posibilidad que cada productor elija qué porcentaje aporta.",
  fuente: ["Ejido Petcacab – IUCN Congress 2025", "https://iucncongress2025.org/files/2025-03/IUCN_Congress2025_CarbonOffetProject_Ejido_Petcacab.pdf"]
}, {
  id: "kasigau",
  grupo: "gobernanza",
  nombre: "Kasigau Corridor",
  lugar: "Kenia · proyecto REDD+ certificado por Verra",
  que: [
    "Seis Comités Locales de Carbono asignan los ingresos comunitarios del carbono. Primero los proyectos tienen que cumplir criterios escritos (procedimientos estándar acordados al inicio con la comunidad). Después se votan en asambleas públicas en cada aldea.",
    "Financian escuelas, salud y agricultura sostenible; en la sequía de 2022 pagaron almuerzos escolares para 23.000 chicos en 64 escuelas.",
    "Gobernanza: comités de 7 a 9 miembros electos, con representación de género, jóvenes y personas con discapacidad, renovación cada 2 años y máximo dos mandatos."
  ],
  componentes: [],
  leccion: "Es un buen modelo para el Comité de Inversión (criterios escritos + voto comunitario + rotación). Pero las fuentes públicas no detallan qué porcentaje llega a las comunidades ni cómo se audita. El pool tiene que publicar esa información.",
  fuente: ["Wildlife Works – gobernanza comunitaria en Kasigau", "https://www.wildlifeworks.com/post/steering-the-ship-of-sustainable-development-community-governance-at-the-kasigau-corridor-redd-pro"]
}, {
  id: "guatecarbon",
  grupo: "gobernanza",
  nombre: "GuateCarbon",
  lugar: "Reserva de la Biosfera Maya, Petén, Guatemala",
  que: [
    "Proyecto REDD+ liderado por comunidades con concesiones forestales, organizadas en ACOFOP, dentro del programa jurisdiccional nacional.",
    "Problema: la ley solo reconocía derechos de carbono a propietarios privados, poseedores legales o al Estado. Las comunidades esperaron casi 20 años para poder recibir pagos directos. El Decreto 20-2020 las reconoció como implementadoras. El primer pago a los concesionarios llegó en 2026."
  ],
  componentes: [],
  leccion: "Antes de lanzar el pool hay que asegurar el respaldo legal: que el Mecanismo de Distribución de Beneficios y una norma provincial permitan expresamente ceder el cobro de la Cuenta 2 al pool.",
  fuente: ["Rainforest Foundation – estudio de caso GuateCarbon", "https://rainforestfoundation.org/guatecarbon-redd-case-study/"]
}, {
  id: "costa-rica",
  grupo: "gobernanza",
  nombre: "Pago por Servicios Ambientales",
  lugar: "Costa Rica · FONAFIFO",
  que: [
    "Programa nacional de pagos directos a propietarios de bosque, creado por la Ley Forestal 7575 (1996) y financiado con un impuesto a los combustibles y aportes privados (por ejemplo, hidroeléctricas que pagan por proteger cuencas). ONG locales participaron en la implementación."
  ],
  componentes: [],
  leccion: "Un marco legal propio y fuentes de financiamiento estables sostienen el sistema en el tiempo. Administrar miles de propietarios exige capacidad institucional y voluntad política sostenida.",
  fuente: ["FAO – Pago por servicios ambientales en Costa Rica", "https://www.fao.org/docrep/pdf/005/y4744S/y4744S07.pdf"]
}, {
  id: "cifor",
  grupo: "gobernanza",
  nombre: "Forestería comunitaria",
  lugar: "Nepal e Indonesia · estudios de CIFOR",
  que: ["Qué encontraron:"],
  lista: [
    "Cuando los pagos individuales son chicos, rinde más el gasto colectivo en desarrollo, porque beneficia a todos y promueve cambios de conducta colectivos.",
    "Agrupar a los pequeños propietarios en unidades más grandes baja los costos de transacción.",
    "Los paquetes en especie y adelantados (insumos, infraestructura, plantines, fondos sociales) ayudaron a sostener el compromiso.",
    "En Nepal, los pagos en efectivo se cortaron cuando terminó el financiamiento de donantes."
  ],
  problemasTitulo: "Problemas detectados:",
  problemas: [
    "Los más pobres y marginados se beneficiaron menos de los fondos grupales.",
    "Los no miembros quedaron afuera.",
    "Los contratos no garantizaban la transmisión a herederos.",
    "Muchos productores no participaron en el diseño."
  ],
  componentes: [],
  similitud: "Con pagos individuales chicos, lo colectivo rinde más: es el mismo argumento del pool.",
  leccion: "Agrupar tiene sentido, pero hace falta incluir a los más vulnerables, garantizar la herencia de las cuotapartes y diseñar el pool con participación de los productores.",
  fuente: ["CIFOR – Infobrief sobre distribución de beneficios REDD+", "https://cifor-icraf.org/publications/pdf_files/infobrief/5506-infobrief.pdf"]
}];

export const GRUPOS_ANTECEDENTES = [
  ["pagos", "Pagos e inversión productiva"],
  ["gobernanza", "Gobernanza y marco legal"]
];


export const TOMAMOS = [
  "La adhesión es voluntaria y el cobro directo sigue disponible.",
  "El valor del pool está en la escala, las compras conjuntas, el fondo rotatorio y el apalancamiento con la Cuenta 1. No está en prometer rendimientos financieros.",
  "Las reglas quedan escritas en un fideicomiso con control externo, a prueba de cambios de gestión.",
  "Hay criterios de inclusión para los productores más vulnerables dentro del padrón de la Cuenta 2.",
  "Las cuotapartes son heredables.",
  "Los productores participan en el diseño y son mayoría en el Comité de Inversión.",
  "El Comité tiene criterios escritos, voto de los adherentes y rotación de miembros (Kasigau).",
  "Hay respaldo legal explícito antes de lanzar (GuateCarbon).",
  "Se ofrece una opción complementaria de pago escalonado que favorezca a los propietarios chicos (Socio Bosque)."
];

export const FUENTES_ANTECEDENTES = [
  ["Programa Bolsa Floresta – Confea", "https://www.confea.org.br/node/108567"],
  ["Fundação Amazônia Sustentável – informe de actividades 2012", "https://fas-amazonia.org/wp-content/uploads/2022/12/rel-atividades-2012_compressed.pdf"],
  ["Amazon REDD+ scheme side-steps land rights to reward small forest producers (Mongabay, 2019)", "https://news.mongabay.com/2019/07/amazon-redd-scheme-side-steps-land-rights-to-reward-small-forest-producers/"],
  ["How a remote Amazonian state is leading the way in climate change policy (CIFOR Forests News)", "https://www.forestsnews.org/17275/special-report-how-a-remote-amazonian-state-is-leading-the-way-in-climate-change-policy"],
  ["CIFOR – Infobrief sobre distribución de beneficios REDD+ en forestería comunitaria", "https://cifor-icraf.org/publications/pdf_files/infobrief/5506-infobrief.pdf"],
  ["Banco Mundial – Comparative Analysis of Benefit-Sharing Mechanisms in REDD+ Programs", "https://ppp.worldbank.org/node/7433"],
  ["IIED / ONU-REDD – Distribución de beneficios REDD+", "https://un-redd.org/sites/default/files/2021-10/16508IIED.pdf"],
  ["Pro-poor benefit distribution in REDD+: who gets what and why does it matter?", "https://indiaenvironmentportal.org.in/reports-and-documents/pro-poor-benefit-distribution-in-redd-who-gets-what-and-why-does-it-matter"],
  ["Socio Bosque – Initiative 20x20", "https://initiative20x20.org/node/238"],
  ["Kasigau Corridor – Wildlife Works, gobernanza comunitaria", "https://www.wildlifeworks.com/post/steering-the-ship-of-sustainable-development-community-governance-at-the-kasigau-corridor-redd-pro"],
  ["Verra – Kasigau Corridor", "https://verra.org/press/carbon-credit-plan-aims-save-kenyan-trees-and-elephants-and-help-villagers"],
  ["Ejido Petcacab – IUCN Congress 2025", "https://iucncongress2025.org/files/2025-03/IUCN_Congress2025_CarbonOffetProject_Ejido_Petcacab.pdf"],
  ["GuateCarbon – Rainforest Foundation, estudio de caso", "https://rainforestfoundation.org/guatecarbon-redd-case-study/"],
  ["GuateCarbon – CMNUCC", "https://unfccc.int/es/node/10196"],
  ["Costa Rica PSA – FAO", "https://www.fao.org/docrep/pdf/005/y4744S/y4744S07.pdf"]
];
