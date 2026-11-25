/* ==========================================================================
   GobernanzA Inteligente — Base de Conocimiento y Datos Estructurados
   Fidelidad 100% a los entregables oficiales IPN - ESCOM (Grupo 7CV4)
   Alcance: Desde Portada / Identidad hasta Matriz de Riesgos e IC (NCh-ISO 27001:2013)
   ========================================================================== */

window.PROJECT_DATA = {
  meta: {
    institucion: "Instituto Politécnico Nacional",
    escuela: "Escuela Superior de Cómputo “ESCOM”",
    programa: "Ingeniería en Sistemas Computacionales (Plan 2020)",
    unidadAprendizaje: "IT Governance (Gobierno de TI)",
    grupo: "7CV4",
    profesora: "Dra. Rocío Palacios Solano",
    empresa: "GobernanzA Inteligente",
    servicio: "Consultoría de Ciberseguridad “GobernanzA Inteligente”",
    claveServicio: "ID",
    periodoEjecucion: "24 de Agosto de 2026 — 4 de Diciembre de 2026 (15 semanas)",
    normaBase: "NCh-ISO 27001:2013 • COBIT 2019 • ITIL V.4 • PMBOK • LFPDPPP",
    equipo: [
      {
        nombre: "López Reyes Luis Daniel",
        rol: "Líder de Gobierno de TI, Riesgos Metodológicos y Cumplimiento Legal",
        activosAsignados: ["GI_LEG_01", "GI_SW_05", "GI_PER_07", "GI_PER_10", "GI_INF_13"],
        especialidad: "COBIT 2019 • Contratación NDA • LFPDPPP • Cierre Ejecutivo"
      },
      {
        nombre: "Sánchez Velasco Diego",
        rol: "Arquitecto de Seguridad de la Información, Diagnóstico y Riesgos",
        activosAsignados: ["GI_INF_02", "GI_SW_03", "GI_INF_06", "GI_HW_14"],
        especialidad: "NCh-ISO 27001:2013 • Cloud Cifrado • Análisis de Brechas y Matrices de Riesgo"
      },
      {
        nombre: "Escalona Zúñiga Juan Carlos",
        rol: "Especialista en Gestión de Servicios ITSM/CMDB, Normatividad y Capacitación",
        activosAsignados: ["GI_HW_04", "GI_SW_08", "GI_INF_09", "GI_INF_11", "GI_SW_12"],
        especialidad: "ITIL V.4 • ISO/IEC 20000-1 • Plataforma CMDB • Concientización y CSAT"
      }
    ]
  },

  /* Índice Maestro de Módulos (Excluye BIA y Plan de Continuidad por alcance definido) */
  modulos: [
    {
      id: "inicio",
      num: "01",
      titulo: "Portada y Centro de Mando",
      subtitulo: "Resumen ejecutivo, avance curricular ESCOM y KPIs clave",
      badge: "100%",
      unidad: "Visión Global"
    },
    {
      id: "identidad",
      num: "02",
      titulo: "Identidad y Fundamentos",
      subtitulo: "Introducción ejecutiva, Objetivo, Descripción, Misión, Visión y Valores",
      badge: "U.T. I",
      unidad: "Unidad I • Gobierno Corporativo"
    },
    {
      id: "bsc",
      num: "03",
      titulo: "BSC y Metas COBIT 2019",
      subtitulo: "Metas Corporativas (EG) + Metas de TI (AG) en las 4 dimensiones",
      badge: "8 Metas",
      unidad: "Unidad I • COBIT 2019 & BSC"
    },
    {
      id: "cascada",
      num: "04",
      titulo: "Cascada de Metas",
      subtitulo: "Matriz de trazabilidad 20 Metas × 19 Objetivos COBIT (Relaciones P y S)",
      badge: "20×19",
      unidad: "Práctica 1 • Cascada COBIT"
    },
    {
      id: "mapa",
      num: "05",
      titulo: "Mapa Estratégico",
      subtitulo: "Arquitectura causa-efecto multicapa y vista dual Corporativa / TI",
      badge: "4 Capas",
      unidad: "Práctica 2 • Mapa Estratégico"
    },
    {
      id: "caso-negocio",
      num: "06",
      titulo: "Caso de Negocio",
      subtitulo: "Formato oficial IPN (Secciones 1 a 11): Alcance, Cronograma, Costos y ROI",
      badge: "11 Secc.",
      unidad: "Unidades I–II • Prácticas 3 y 4"
    },
    {
      id: "cedula-itil",
      num: "07",
      titulo: "Cédula de Servicio (ITIL V.4)",
      subtitulo: "Catálogo, Utilidad/Garantía, Acuerdos SLA/OLA/UC y Matriz de Escalamiento",
      badge: "ITIL v4",
      unidad: "Unidad III • Práctica 5"
    },
    {
      id: "activos",
      num: "08",
      titulo: "Inventario de Activos",
      subtitulo: "4 Procesos y 14 Activos sin colisión bajo NCh-ISO 27001:2013 (Cláusula A.8)",
      badge: "14 Activos",
      unidad: "Unidad IV • Práctica 7"
    },
    {
      id: "riesgos",
      num: "09",
      titulo: "Matriz de Riesgos e IC",
      subtitulo: "Valoración CID, Vulnerabilidades, Amenazas, Riesgo Residual y 9 IC (IV–V)",
      badge: "9 IC",
      unidad: "Unidad V • Práctica 8"
    }
  ],

  /* Trazabilidad del Programa de Estudios IT Governance (ESCOM IPN) hasta Gestión de Riesgos */
  avanceTemario: [
    {
      unidad: "Unidad Temática I",
      nombre: "Modelos de Gobierno Corporativo y de Tecnología",
      temas: "Gobierno corporativo, ISO 38500, COBIT 2019 (EDM/APO/BAI/DSS), Balanced Scorecard y Green IT",
      entregables: "Identidad Corporativa, BSC, Metas Corporativas y de TI, Cascada de Metas y Mapa Estratégico",
      horas: "18T / 9P",
      progreso: 100
    },
    {
      unidad: "Unidad Temática II",
      nombre: "Gestión Financiera de Proyectos de TI",
      temas: "Gobernabilidad PMBOK, PMO, Ciclo de vida (15 semanas), Estimación de costos y evaluación económica",
      entregables: "Caso de Negocio Institucional (Cronograma Alto Nivel, Personal, Estudio de Mercado y Costo-Beneficio)",
      horas: "9T / 4P",
      progreso: 100
    },
    {
      unidad: "Unidad Temática III",
      nombre: "Gestión de Tecnologías de Información (ITIL V.4)",
      temas: "Sistemas de información, Marco ITIL V.4, Cadena de Valor del Servicio y Diseño de Servicios de TI",
      entregables: "Cédula de Servicio de TI Completa (Catálogo, Paquetes, SLAs 99.9% / CSAT 92%, OLAs y Soporte)",
      horas: "9T / 5P",
      progreso: 100
    },
    {
      unidad: "Unidad Temática IV",
      nombre: "Seguridad de la Información (ISO 27000)",
      temas: "Legislación en México (LFPDPPP), Seguridad lógica, física y organizacional, Gestión de Activos A.8",
      entregables: "Inventario de 14 Activos de Información en 4 Procesos y Esquema de Etiquetado NCh-ISO 27001:2013",
      horas: "9T / 5P",
      progreso: 100
    },
    {
      unidad: "Unidad Temática V",
      nombre: "Gestión de Riesgos de Tecnología de Información",
      temas: "Identificación, administración, ponderación y tratamiento del riesgo tecnológico bajo normas ISO",
      entregables: "Matriz CID, Análisis de Vulnerabilidades y Amenazas, Riesgo Residual y Matriz de Infraestructuras Críticas",
      horas: "9T / 4P",
      progreso: 100
    }
  ],

  /* SECCIÓN 02: IDENTIDAD CORPORATIVA, INTRODUCCIÓN, OBJETIVOS Y DESCRIPCIÓN */
  identidad: {
    introduccion: [
      "En el ecosistema empresarial contemporáneo de la República Mexicana, la transformación digital ha convertido a las Tecnologías de la Información (TI) en la columna vertebral de la operación financiera, comercial y regulatoria de las organizaciones. Sin embargo, el crecimiento acelerado en la adopción de servicios en la nube, trabajo remoto y gestión de datos sensibles ha ocurrido, en una gran proporción de empresas públicas y privadas, sin el respaldo de una arquitectura formal de Gobierno de TI. Esta brecha entre la dependencia tecnológica y la madurez de control provoca que las áreas de sistemas operen bajo esquemas meramente reactivos, enfrentando sobrecostes operativos, interrupciones prolongadas del servicio, pérdida de trazabilidad sobre sus activos críticos y una exposición severa frente al cibercrimen y a sanciones derivadas de marcos legales como la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
      "Ante esta problemática estructural nace “GobernanzA Inteligente”, una firma especializada en servicios de consultoría estratégica en ciberseguridad, gestión de servicios y gobierno tecnológico. A diferencia de los proveedores tradicionales enfocados únicamente en la venta de hardware perimetral o soporte técnico aislado, GobernanzA Inteligente propone un modelo integral, auditable y cuantificable que articula armónicamente cuatro estándares internacionales de clase mundial: COBIT 2019 para asegurar la alineación entre los objetivos del negocio y las metas tecnológicas; ITIL V.4 e ISO/IEC 20000-1 para institucionalizar la entrega de servicios mediante acuerdos de nivel de servicio (SLA) rigurosos; PMBOK para garantizar la gobernabilidad, el control presupuestal y el cumplimiento del cronograma de cada intervención; y la Norma Chilena NCh-ISO 27001:2013 (homóloga de ISO/IEC 27001) para salvaguardar la confidencialidad, integridad y disponibilidad de los activos de información.",
      "El servicio base de consultoría se estructura en un ciclo de ejecución controlado de 15 semanas (del 24 de agosto al 4 de diciembre de 2026), dividido en cuatro procesos medulares e interconectados: Diagnóstico de Gobierno y Brechas de Seguridad (GI_DIAG_01), Gestión de Riesgos Tecnológicos (GI_RIES_02), Diseño de Servicios y Marco Normativo ITIL/LFPDPPP (GI_NORM_03), y Capacitación, Validación y Cierre del Servicio (GI_CAPA_04). Esta demarcación garantiza una entrega de valor transparente, delimitando con precisión las responsabilidades consultivas —evaluación de madurez, diseño normativo, análisis de riesgos y transferencia de conocimiento— y evitando conflictos de interés al excluir la comercialización directa de licencias o la operación delegada diaria.",
      "El presente portal tecnológico consolida de manera homogénea e interactiva la ingeniería documental y analítica desarrollada para GobernanzA Inteligente dentro de la unidad de aprendizaje IT Governance en la Escuela Superior de Cómputo (ESCOM - IPN). A través de tableros ejecutivos, matrices dinámicas de trazabilidad COBIT 2019, cédulas operativas ITIL V.4, un inventario normalizado de 14 activos libres de colisión y modelos matemáticos de ponderación de riesgo residual e infraestructuras críticas, se demuestra cómo la gobernanza inteligente convierte la ciberseguridad en un habilitador estratégico de confianza, rentabilidad y sostenibilidad corporativa."
    ],
    descripcionServicio: {
      resumen: "Consultoría integral en ciberseguridad y gobierno de TI orientada a diagnosticar brechas de madurez, estructurar controles normativos y de gestión de servicios, evaluar riesgos sobre activos críticos y capacitar al capital humano de organizaciones públicas y privadas en territorio mexicano.",
      incluye: [
        "Evaluación diagnóstica del nivel de madurez tecnológica y análisis de brechas (Gap Analysis) frente a COBIT 2019 e ISO/IEC 27001.",
        "Identificación, clasificación y etiquetado formal de activos de información críticos bajo la cláusula A.8 de NCh-ISO 27001:2013.",
        "Elaboración de matrices de valoración CID, análisis cuantitativo de vulnerabilidades, amenazas, riesgo residual y detección de infraestructuras críticas.",
        "Diseño del catálogo de servicios de TI, acuerdos SLA/OLA bajo ITIL V.4 y políticas integrales de seguridad y cumplimiento LFPDPPP.",
        "Talleres ejecutivos y operativos de concientización en ciberseguridad, evaluación CSAT (>= 92%) y cierre con certificado de borrado seguro (DoD 5220.22-M)."
      ],
      excluye: [
        "Adquisición, reventa o gestión directa de licenciamiento comercial de software para el cliente.",
        "Implementación física o configuración técnica directa de infraestructura (servidores, cableado, firewalls o switches).",
        "Remediación de vulnerabilidades a nivel de código fuente (desarrollo correctivo de software del cliente).",
        "Operación delegada cotidiana o mesa de ayuda (soporte técnico diario Nivel 1) sobre los sistemas productivos del cliente."
      ]
    },
    objetivoGeneral: "Brindar servicios integrales de consultoría en ciberseguridad que permitan a las organizaciones identificar, prevenir y mitigar riesgos asociados a la información y las tecnologías que la soportan, mediante la implementación de controles técnicos, normativos y de gestión alineados a estándares internacionales, con el fin de garantizar la confidencialidad, integridad y disponibilidad de sus activos digitales.",
    objetivosEspecificos: [
      "Diagnosticar el nivel de madurez en seguridad de la información de la organización mediante auditorías estructuradas y análisis de vulnerabilidades.",
      "Diseñar e implementar políticas, procesos y controles de seguridad alineados a marcos de referencia como ISO/IEC 27001 (NCh-ISO 27001:2013), NIST y COBIT 2019.",
      "Estandarizar la gestión de servicios tecnológicos mediante catálogos y acuerdos de nivel de servicio (SLA) fundamentados en ITIL V.4 e ISO/IEC 20000-1.",
      "Capacitar y concientizar al personal de las organizaciones cliente en buenas prácticas de ciberseguridad para reducir el riesgo asociado al factor humano.",
      "Asegurar el cumplimiento estricto de la normativa legal vigente en México en materia de protección de datos personales (LFPDPPP)."
    ],
    mision: "Transformar la postura de ciberseguridad y gobierno tecnológico de las organizaciones en México mediante consultoría estratégica de alta precisión, integrando marcos internacionales (COBIT 2019, ISO/IEC 27001 e ITIL V.4) que protejan sus activos de información críticos, optimicen el valor de sus inversiones en TI y fortalezcan la confianza digital de sus clientes y aliados.",
    vision: "Consolidarnos para el año 2028 como la firma consultora referente a nivel nacional en Gobernanza Inteligente y Seguridad de la Información, reconocida por su excelencia metodológica certificada en ISO/IEC 20000-1, su capital humano altamente especializado y su capacidad de convertir el cumplimiento normativo y la gestión de riesgos en ventajas competitivas medibles.",
    valores: [
      {
        titulo: "Confidencialidad Absoluta",
        icono: "shield",
        detalle: "Custodiamos la información diagnóstica y estratégica de cada cliente con cifrado de grado militar, controles de acceso estrictos y purga certificada al cierre."
      },
      {
        titulo: "Rigor Metodológico",
        icono: "check",
        detalle: "Sustentamos cada diagnóstico, métrica y recomendación en evidencia auditable y estándares reconocidos globalmente, eliminando la improvisación."
      },
      {
        titulo: "Integridad e Independencia",
        icono: "scale",
        detalle: "Emitimos dictámenes objetivos e imparciales, libres de ataduras comerciales con fabricantes de hardware o licenciamiento."
      },
      {
        titulo: "Innovación Inteligente",
        icono: "bolt",
        detalle: "Automatizamos la trazabilidad en CMDB, la analítica cuantitativa de riesgos y la gestión del conocimiento para acelerar la toma de decisiones ejecutivas."
      },
      {
        titulo: "Compromiso con el Valor",
        icono: "target",
        detalle: "Alineamos cada control técnico con indicadores financieros, cumplimiento de SLAs (CSAT >= 92%) y apego puntual al cronograma (SPI >= 0.95)."
      }
    ]
  },

  /* SECCIÓN 03: BALANCED SCORECARD — METAS CORPORATIVAS (EG) Y METAS DE TI / ALINEAMIENTO (AG COBIT 2019) */
  bsc: [
    {
      dimension: "Financiera",
      color: "#06b6d4",
      metaCorporativa: {
        id: "F1",
        cobitEG: "EG01 · Portafolio de productos y servicios competitivos / EDM02",
        enunciado: "Incrementar el margen de rentabilidad neta en un 15% mediante la optimización de costes operativos de servicios de TI para el 4.º trimestre de 2027.",
        kpi: "Margen de rentabilidad neta (%) vs. línea base 2026",
        metaValor: "+15% (4T 2027)"
      },
      metaTI: {
        id: "TI-F1",
        cobitAG: "AG04 · Calidad de la información financiera de TI / APO06 · BAI09",
        enunciado: "Reducir en un 18% el costo operativo por ticket, licenciamiento nube subutilizado y despliegue por proyecto mediante prácticas FinOps e ITAM para el 3.er trimestre de 2027.",
        kpi: "Costo operativo de TI por proyecto y % de optimización en licencias cloud",
        metaValor: "-18% coste TI / proyecto"
      },
      justificacion: "Para una firma de tecnología como GobernanzA Inteligente, el crecimiento de ventas por sí solo no garantiza estabilidad si los costes de despliegue, licencias e infraestructura son elevados. Enfocar la meta corporativa en el margen neto (+15%) y respaldarla con una meta de TI centrada en FinOps/APO06 asegura que el portafolio de consultoría genere un retorno de inversión sustentable, reduciendo el gasto superfluo y gestionando eficientemente el coste por proyecto."
    },
    {
      dimension: "Cliente / Usuario",
      color: "#10b981",
      metaCorporativa: {
        id: "C1",
        cobitEG: "EG05 · Cultura de servicio orientada al cliente / APO08",
        enunciado: "Alcanzar un índice de satisfacción del cliente (CSAT) del 92% en la entrega y disponibilidad de los servicios de TI para el 3.er trimestre de 2027.",
        kpi: "Índice CSAT trimestral en encuestas de cierre de servicio",
        metaValor: "CSAT >= 92% (3T 2027)"
      },
      metaTI: {
        id: "TI-C1",
        cobitAG: "AG07 · Seguridad de la información, infraestructura de procesamiento y aplicaciones / DSS05 · APO09",
        enunciado: "Garantizar un cumplimiento del 99.9% en los SLA de disponibilidad del repositorio colaborativo cifrado y mantener en 0 los incidentes de filtración de información que afecten a clientes durante todo el ejercicio 2027.",
        kpi: "% de disponibilidad SLA cloud y N.º de incidentes de seguridad con impacto al cliente",
        metaValor: "99.9% SLA • 0 Brechas"
      },
      justificacion: "En los servicios de TI corporativos y de ciberseguridad, la retención y renovación de contratos depende del estricto cumplimiento de los acuerdos de nivel de servicio (SLA) y de la confianza absoluta en el resguardo de evidencias. Una meta cuantitativa del 92% en CSAT combinada con 0 incidentes de seguridad exige alta disponibilidad, tiempos de respuesta ágiles y entregables alineados al negocio real del cliente."
    },
    {
      dimension: "Procesos Internos",
      color: "#f59e0b",
      metaCorporativa: {
        id: "P1",
        cobitEG: "EG08 · Optimización de la funcionalidad de procesos internos de negocio / APO09 · DSS01",
        enunciado: "Estandarizar y certificar el proceso principal de entrega de servicios de TI bajo la norma ISO/IEC 20000-1 para el 2.º trimestre de 2027.",
        kpi: "% de requisitos auditables de la norma ISO/IEC 20000-1 cumplidos",
        metaValor: "100% Certificación (2T 2027)"
      },
      metaTI: {
        id: "TI-P1",
        cobitAG: "AG09 · Entrega de programas a tiempo, dentro del presupuesto y cumpliendo requisitos de calidad / APO12 · APO13 · DSS02",
        enunciado: "Implementar el 100% de los controles aplicables del Anexo A de ISO/IEC 27001 en los 4 procesos de consultoría y automatizar al 85% el flujo de cambios e incidentes en ITSM para el 2.º trimestre de 2027.",
        kpi: "% de controles Anexo A implementados y % de flujos ITSM estandarizados",
        metaValor: "100% Controles A.8–A.18"
      },
      justificacion: "El núcleo de GobernanzA Inteligente debe ser la excelencia predicando con el ejemplo en sus propios procesos. La adopción de ISO/IEC 20000-1 junto con controles internos ISO/IEC 27001 institucionaliza la gestión de incidentes, cambios, riesgos y entregas, eliminando la variabilidad entre proyectos y respaldando la reputación técnica de la consultora ante auditorías y licitaciones."
    },
    {
      dimension: "Aprendizaje y Crecimiento",
      color: "#6366f1",
      metaCorporativa: {
        id: "A1",
        cobitEG: "EG13 · Personas con habilidades, motivadas y productivas / APO07",
        enunciado: "Certificar al 35% del personal técnico y de consultoría en marcos de gobernanza y seguridad (COBIT 2019 Foundation o ISO/IEC 27001) para el 4.º trimestre de 2027.",
        kpi: "% de plantilla consultora con certificación internacional vigente",
        metaValor: ">= 35% Certificados (4T 2027)"
      },
      metaTI: {
        id: "TI-A1",
        cobitAG: "AG13 · Conocimiento, experiencia e iniciativas para la innovación empresarial / BAI10 · BAI08",
        enunciado: "Operar al 100% la plataforma ITSM con Base de Configuración (CMDB) y documentar al menos el 90% de los casos de diagnóstico y remediación normativa en la Base de Conocimiento (KEDB) para el 2.º trimestre de 2027.",
        kpi: "% de activos trazados en CMDB y % de tickets/casos vinculados a artículos de conocimiento",
        metaValor: "100% CMDB • 90% KEDB"
      },
      justificacion: "Al ser una firma especializada en gobernanza y ciberseguridad, el activo primario reside en el conocimiento aplicado de sus consultores y en las herramientas metodológicas que los soportan. Certificar formalmente a más de un tercio del equipo y dotarlo de una CMDB y base de conocimiento integradas asegura consultorías consistentes, mitigando el riesgo de dependencia individual."
    }
  ],

  /* SECCIÓN 04: CASCADA DE METAS (20 Metas Estratégicas × 19 Objetivos COBIT 2019) */
  cobitColumns: [
    "EDM02", "EDM03", "APO06", "APO07", "APO08", "APO09", "APO12", "APO13",
    "BAI03", "BAI04", "BAI06", "BAI07", "BAI08", "BAI09", "BAI10",
    "DSS01", "DSS02", "DSS03", "DSS05"
  ],

  cobitNames: {
    EDM02: "Asegurar la entrega de beneficios",
    EDM03: "Asegurar la optimización del riesgo",
    APO06: "Gestionar el presupuesto y los costes",
    APO07: "Gestionar los recursos humanos",
    APO08: "Gestionar las relaciones",
    APO09: "Gestionar los acuerdos de servicio",
    APO12: "Gestionar el riesgo",
    APO13: "Gestionar la seguridad",
    BAI03: "Gestionar la identificación y construcción de soluciones",
    BAI04: "Gestionar la disponibilidad y la capacidad",
    BAI06: "Gestionar los cambios de TI",
    BAI07: "Gestionar la aceptación y transición de cambios de TI",
    BAI08: "Gestionar el conocimiento",
    BAI09: "Gestionar los activos",
    BAI10: "Gestionar la configuración",
    DSS01: "Gestionar las operaciones",
    DSS02: "Gestionar las peticiones y los incidentes del servicio",
    DSS03: "Gestionar los problemas",
    DSS05: "Gestionar los servicios de seguridad"
  },

  cascadaMetas: [
    { id: "F1", dim: "FINANCIERA", corp: true, meta: "F1 · Incrementar el margen de rentabilidad neta en 15% mediante la optimización de costes operativos de TI (4T 2027)", kpi: "Margen neto (%) vs. línea base 2026", rel: { EDM02: "P", APO06: "S", APO09: "S", BAI09: "S" } },
    { id: "F2", dim: "FINANCIERA", corp: false, meta: "F2 · Reducir el costo operativo por servicio de TI", kpi: "Costo por ticket y por proyecto", rel: { APO06: "P", DSS01: "S" } },
    { id: "F3", dim: "FINANCIERA", corp: false, meta: "F3 · Optimizar el gasto en licencias e infraestructura", kpi: "Gasto en licencias y nube por cliente", rel: { APO06: "P", BAI04: "S", BAI09: "P" } },
    { id: "F4", dim: "FINANCIERA", corp: false, meta: "F4 · Incrementar los ingresos recurrentes", kpi: "% de ingresos por contratos renovados", rel: { EDM02: "P", APO08: "P" } },
    { id: "F5", dim: "FINANCIERA", corp: false, meta: "F5 · Reducir pérdidas por penalizaciones de SLA y retrabajo", kpi: "Monto de penalizaciones por trimestre", rel: { APO09: "P", DSS02: "S", DSS03: "S" } },

    { id: "C1", dim: "CLIENTE / USUARIO", corp: true, meta: "C1 · Alcanzar un CSAT del 92% en la entrega de servicios (3T 2027)", kpi: "Índice CSAT trimestral", rel: { APO08: "P", APO09: "S", DSS01: "S", DSS02: "S" } },
    { id: "C2", dim: "CLIENTE / USUARIO", corp: false, meta: "C2 · Cumplir los SLA de disponibilidad", kpi: "% de disponibilidad vs. lo pactado", rel: { APO09: "P", DSS01: "P", DSS02: "S" } },
    { id: "C3", dim: "CLIENTE / USUARIO", corp: false, meta: "C3 · Reducir los tiempos de respuesta y resolución", kpi: "MTTR y % de tickets resueltos en tiempo", rel: { BAI08: "S", DSS02: "P", DSS03: "S" } },
    { id: "C4", dim: "CLIENTE / USUARIO", corp: false, meta: "C4 · Generar confianza en la seguridad de la información", kpi: "Incidentes de seguridad que afectan al cliente", rel: { EDM03: "P", APO12: "S", APO13: "S", DSS05: "P" } },
    { id: "C5", dim: "CLIENTE / USUARIO", corp: false, meta: "C5 · Aumentar la retención y renovación de clientes", kpi: "Tasa de renovación de contratos", rel: { APO08: "P" } },

    { id: "P1", dim: "PROCESOS INTERNOS", corp: true, meta: "P1 · Estandarizar y certificar la entrega de servicios en ISO/IEC 20000-1 (2T 2027)", kpi: "% de requisitos de la norma cumplidos", rel: { APO07: "S", APO09: "P", DSS01: "P" } },
    { id: "P2", dim: "PROCESOS INTERNOS", corp: false, meta: "P2 · Optimizar la gestión de incidentes y problemas", kpi: "Incidentes recurrentes por mes", rel: { BAI08: "S", DSS02: "P", DSS03: "P" } },
    { id: "P3", dim: "PROCESOS INTERNOS", corp: false, meta: "P3 · Automatizar el despliegue y la operación (DevOps)", kpi: "% de despliegues automatizados", rel: { APO07: "S", BAI03: "S", BAI06: "P", BAI07: "P" } },
    { id: "P4", dim: "PROCESOS INTERNOS", corp: false, meta: "P4 · Gestionar activos, licencias y capacidad (ITAM / FinOps)", kpi: "% de licencias subutilizadas", rel: { APO06: "S", BAI04: "P", BAI09: "P", BAI10: "S" } },
    { id: "P5", dim: "PROCESOS INTERNOS", corp: false, meta: "P5 · Gestionar riesgos y seguridad bajo ISO/IEC 27001", kpi: "% de controles del Anexo A implementados", rel: { EDM03: "S", APO12: "P", APO13: "P" } },

    { id: "A1", dim: "APRENDIZAJE Y CRECIMIENTO", corp: true, meta: "A1 · Certificar al 35% del personal en COBIT 2019 o ISO/IEC 27001 (4T 2027)", kpi: "% de personal certificado", rel: { APO07: "P" } },
    { id: "A2", dim: "APRENDIZAJE Y CRECIMIENTO", corp: false, meta: "A2 · Capacitar al personal en ITIL 4 y gestión de servicios", kpi: "Horas de capacitación por persona", rel: { APO07: "P" } },
    { id: "A3", dim: "APRENDIZAJE Y CRECIMIENTO", corp: false, meta: "A3 · Implementar una plataforma ITSM con CMDB", kpi: "% de activos registrados en la CMDB", rel: { BAI04: "S", BAI09: "S", BAI10: "P" } },
    { id: "A4", dim: "APRENDIZAJE Y CRECIMIENTO", corp: false, meta: "A4 · Crear una base de conocimiento de soluciones", kpi: "% de tickets resueltos con un artículo", rel: { BAI08: "P", DSS02: "S", DSS03: "S" } },
    { id: "A5", dim: "APRENDIZAJE Y CRECIMIENTO", corp: false, meta: "A5 · Desarrollar competencias en DevOps y automatización", kpi: "% de ingenieros con competencias DevOps", rel: { APO07: "P", BAI03: "P", BAI06: "S", BAI07: "S" } }
  ],

  /* SECCIÓN 05: ENLACES CAUSA-EFECTO DEL MAPA ESTRATÉGICO */
  mapaEnlaces: {
    A3: ["P4"],
    A1: ["P5", "P1"],
    A4: ["P2"],
    A2: ["P1", "P2"],
    A5: ["P3"],
    P4: ["F3"],
    P5: ["C4"],
    P2: ["C3"],
    P1: ["C2"],
    P3: ["F2"],
    C4: ["C5"],
    C3: ["C1"],
    C2: ["C1", "F5"],
    C5: ["F4", "C1"],
    C1: ["C5", "F4"],
    F3: ["F1"],
    F4: ["F1"],
    F5: ["F1"],
    F2: ["F1"],
    F1: []
  },

  /* Pares Seleccionados en el Mapa Estratégico (1 Meta Corporativa + 1 Meta de TI por Dimensión) */
  mapaSeleccionDual: {
    FINANCIERA: ["F1", "F3"],
    "CLIENTE / USUARIO": ["C1", "C4"],
    "PROCESOS INTERNOS": ["P1", "P5"],
    "APRENDIZAJE Y CRECIMIENTO": ["A1", "A3"]
  },

  /* SECCIÓN 06: CASO DE NEGOCIO DEL SERVICIO (Formato IPN Hojas 1 a 5 Completo) */
  casoNegocio: {
    fechaElaboracion: "06 / 10 / 2026",
    antecedentes: [
      "En la actualidad, las organizaciones operan en un entorno digital donde la dependencia tecnológica exige no solo eficiencia operativa, sino un control estricto sobre la seguridad de sus datos y la mitigación proactiva de riesgos. A pesar de esta necesidad imperante, un alto porcentaje de empresas carece de modelos formales de gobierno de Tecnologías de la Información (TI), lo que resulta en una exposición constante a delitos informáticos, fallas en la seguridad lógica y física, y una gestión deficiente de sus activos de información críticos.",
      "Para dar solución a esta brecha estratégica, surge la propuesta del servicio de Consultoría de Ciberseguridad “GobernanzA Inteligente”, cuyo proyecto base está estructurado para ejecutarse entre el 24 de agosto y el 4 de diciembre de 2026. Este servicio nace con la premisa de diseñar, evaluar e implementar modelos integrales de gobierno y seguridad de TI que aporten valor real al negocio, estandarizando las operaciones tecnológicas de los clientes bajo normativas internacionales.",
      "La intervención de la consultoría se circunscribe exclusivamente a la evaluación de brechas, planeación estratégica y entrega de la documentación normativa y de procesos. Quedan estrictamente excluidas de este servicio la adquisición o gestión de licenciamiento de software, la implementación o configuración técnica de infraestructura (hardware, firewalls, redes), la remediación de vulnerabilidades a nivel de código y la operación delegada (soporte técnico) de los sistemas diarios del cliente."
    ],
    pilaresTecnicos: [
      {
        dominio: "Arquitectura de Gobierno y Alineamiento Estratégico (COBIT 2019)",
        detalle: "Establece las estructuras organizativas y los procesos EDM, APO, BAI y DSS que aseguran el control de la información, la evaluación cuantitativa de riesgos y la entrega de valor verificable de las inversiones tecnológicas."
      },
      {
        dominio: "Gestión de Servicios de TI — ITSM (ITIL V.4 & ISO/IEC 20000-1)",
        detalle: "Fundamenta el diseño del catálogo de servicios y de la CMDB, garantizando que la provisión, el soporte consultivo y la gestión de cambios se ejecuten bajo acuerdos de nivel de servicio (SLA) orientados a la mejora continua."
      },
      {
        dominio: "Seguridad de la Información y Protección Legal (NCh-ISO 27001:2013 & LFPDPPP)",
        detalle: "Estructura controles rigurosos de seguridad física, lógica y organizacional sobre los activos digitales críticos, asegurando el cumplimiento normativo de datos personales en la República Mexicana."
      }
    ],
    riesgosClave: [
      { riesgo: "Robo, extravío o compromiso por malware en estaciones de trabajo portátiles (GI_HW_04) durante visitas en CDMX.", impacto: "Alto (CID 13)", probabilidad: "Media (2)", mitigacion: "Cifrado de disco completo BitLocker/LUKS, VPN corporativa obligatoria y equipo de respaldo (A.6.2.1, A.10.1.1)." },
      { riesgo: "Ataque de fuerza bruta, phishing o indisponibilidad sobre el Repositorio Documental Cifrado en la Nube (GI_SW_03).", impacto: "Alto (CID 14)", probabilidad: "Baja (1)", mitigacion: "Autenticación multifactor MFA obligatoria, RBAC estricto y respaldos aislados RPO 4h (A.9.4.2, A.17.2.1)." },
      { riesgo: "Exfiltración o exposición accidental de Expedientes de Evidencia y Matrices de Riesgo del cliente (GI_INF_02 / GI_INF_06).", impacto: "Alto (CID 14)", probabilidad: "Baja (1)", mitigacion: "Cifrado AES-256 en reposo, canales TLS 1.3, marcas de agua por cliente y clave por canal alterno (A.8.2.2, A.13.2.1)." },
      { riesgo: "Desalineación normativa en Catálogos, SLAs o Políticas frente a reformas de la LFPDPPP o ISO 27001 (GI_INF_09).", impacto: "Alto (CID 14)", probabilidad: "Baja (1)", mitigacion: "Doble revisión técnico-jurídica con Especialista Externo bajo NDA y lista de verificación normativa (A.5.1.1, A.18.1.4)." },
      { riesgo: "Ausencia simultánea o sobrecarga operativa en el equipo compacto de 3 consultores especializados (GI_PER_07).", impacto: "Alto (CID 13)", probabilidad: "Media (2)", mitigacion: "Capacitación cruzada trilateral, procedimientos estandarizados y redistribución ágil PMBOK (A.7.2.2, A.12.1.1)." }
    ],
    indicadores: [
      { nombre: "Índice de Satisfacción del Cliente (CSAT)", tipo: "Calidad / Cliente", formula: "(Suma de puntajes favorables 4 y 5 ÷ Total de clientes encuestados al cierre) × 100  [Meta >= 92%]" },
      { nombre: "Índice de Desempeño del Cronograma (SPI)", tipo: "Eficiencia / PMBOK", formula: "Valor Ganado (EV) ÷ Valor Planificado (PV) por hito de consultoría  [Meta >= 0.95]" },
      { nombre: "Margen de Rentabilidad Neta del Servicio", tipo: "Financiero", formula: "((Ingresos Totales por Consultoría − Costes Operativos y Legales) ÷ Ingresos Totales) × 100  [Meta +15%]" },
      { nombre: "Cumplimiento de Controles Anexo A (ISO 27001)", tipo: "Seguridad / Proceso", formula: "(Controles implementados y auditados ÷ Total de controles declarados en el SoA) × 100  [Meta = 100%]" },
      { nombre: "Cobertura de Trazabilidad en CMDB", tipo: "Gobierno / TI", formula: "(Activos registrados con propietario y relación en CMDB ÷ Total de activos inventariados) × 100  [Meta = 100%]" },
      { nombre: "Tasa de Certificación Especializada", tipo: "Capital Humano", formula: "(Consultores certificados en COBIT 2019 o ISO 27001 ÷ Total de plantilla técnica) × 100  [Meta >= 35%]" }
    ],
    beneficiosEsperados: [
      "Reducción cuantificable de hasta un 65% en la superficie de exposición a riesgos críticos de información del cliente tras el primer ciclo de 15 semanas.",
      "Transición inmediata de un esquema empírico/reactivo a un modelo de Gobierno de TI auditable bajo COBIT 2019, ITIL V.4 y NCh-ISO 27001:2013.",
      "Blindaje jurídico ante auditorías y sanciones del INAI / marco regulatorio mexicano por incumplimiento de la LFPDPPP.",
      "Optimización financiera al evitar compras innecesarias de hardware o licencias duplicadas mediante diagnóstico objetivo e independiente."
    ],
    cronograma15Semanas: [
      { fase: "Fase 1 · GI_DIAG_01", nombre: "Diagnóstico de Gobierno y Brechas de Seguridad", inicio: "24 Ago 2026", fin: "18 Sep 2026", semanas: "Sem. 1 – 4", startPct: 0, widthPct: 26.6, entregable: "NDA firmado, Expediente de Evidencias y Reporte Gap Analysis COBIT/ISO" },
      { fase: "Fase 2 · GI_RIES_02", nombre: "Evaluación de Activos, Vulnerabilidades y Matriz de Riesgos", inicio: "21 Sep 2026", fin: "16 Oct 2026", semanas: "Sem. 5 – 8", startPct: 26.6, widthPct: 26.6, entregable: "Inventario A.8 sin colisiones, Matriz CID, Riesgo Residual e IC Niveles IV–V" },
      { fase: "Fase 3 · GI_NORM_03", nombre: "Diseño de Servicios ITIL V.4, SLAs y Marco LFPDPPP", inicio: "19 Oct 2026", fin: "13 Nov 2026", semanas: "Sem. 9 – 12", startPct: 53.2, widthPct: 26.6, entregable: "Cédula y Catálogo de Servicios, Acuerdos SLA/OLA y Cuerpo Político ISO/LFPDPPP" },
      { fase: "Fase 4 · GI_CAPA_04", nombre: "Capacitación, Validación Ejecutiva y Cierre Certificado", inicio: "16 Nov 2026", fin: "04 Dic 2026", semanas: "Sem. 13 – 15", startPct: 79.8, widthPct: 20.2, entregable: "Talleres impartidos, Encuesta CSAT >= 92%, Acta Final y Borrado DoD 5220.22-M" }
    ],
    personalInvolucrado: [
      { perfil: "Consultor Líder en Gobierno de TI y Cumplimiento (COBIT 2019 / PMBOK)", numero: 1, contratacion: "Socio / Tiempo Completo por Proyecto (15 semanas)", titular: "López Reyes Luis Daniel" },
      { perfil: "Consultor Especialista en Seguridad de la Información y Riesgos (ISO 27001)", numero: 1, contratacion: "Socio / Tiempo Completo por Proyecto (15 semanas)", titular: "Sánchez Velasco Diego" },
      { perfil: "Consultor Especialista en Gestión de Servicios ITSM, CMDB y Capacitación (ITIL V.4)", numero: 1, contratacion: "Socio / Tiempo Completo por Proyecto (15 semanas)", titular: "Escalona Zúñiga Juan Carlos" },
      { perfil: "Especialista Jurídico Externo en Protección de Datos Personales (LFPDPPP)", numero: 1, contratacion: "Honorarios Profesionales por Hito Normativo (Externo con NDA)", titular: "Asesoría Legal Externa (GI_PER_10)" }
    ],
    economia: {
      estudioMercado: "En México, más del 72% de las PyMEs medianas y corporativos en expansión en la Zona Metropolitana del Valle de México carecen de un SGSI formal o de gobierno de servicios ITIL, mientras los incidentes de ransomware y filtración de datos crecen a doble dígito anual. Las grandes firmas internacionales (Big Four) ofrecen consultorías con tickets superiores a $1.8M MXN y tiempos mayores a 9 meses, dejando desatendido un segmento empresarial estratégico que requiere agilidad (15 semanas), rigor normativo internacional y precios competitivos.",
      inversionProyectoBase: "$485,000.00 MXN (Precio paquete consultoría integral 15 semanas por organización cliente)",
      costoDirectoPorProyecto: "$312,500.00 MXN (Honorarios de 3 especialistas, asesoría jurídica puntual LFPDPPP, licenciamiento Cloud Cifrado, ITSM/CMDB y movilidad segura)",
      utilidadBrutaEstimada: "$172,500.00 MXN por proyecto (Margen bruto 35.5% • Margen neto objetivo > 22%, superando la meta de incremento del +15%)",
      costosMantenimiento: "N/A para el cliente (entrega documental cerrada a 15 semanas; sin lock-in tecnológico).",
      costosOperacion: "N/A en infraestructura del cliente (la operación diaria queda expresamente excluida del alcance).",
      procedimientoAdquisicion: "N/A (no se adquiere hardware ni licencias comerciales a nombre del cliente; contratación directa mediante Convenio NDA y Contrato de Prestación de Servicios Profesionales)."
    },
    glosario: [
      { concepto: "COBIT 2019", descripcion: "Marco de referencia internacional de ISACA para el gobierno y la gestión empresarial de la información y la tecnología." },
      { concepto: "ITIL V.4", descripcion: "Biblioteca de Infraestructura de Tecnologías de Información orientada a la co-creación de valor mediante servicios habilitados por TI." },
      { concepto: "NCh-ISO 27001:2013", descripcion: "Norma Chilena oficial homóloga a ISO/IEC 27001 que especifica los requisitos para establecer, implementar, mantener y mejorar un SGSI." },
      { concepto: "LFPDPPP", descripcion: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente en los Estados Unidos Mexicanos." },
      { concepto: "CMDB", descripcion: "Base de Datos de Gestión de la Configuración que almacena los elementos de configuración (CI) y sus relaciones entre activos y procesos." },
      { concepto: "CID (C + I + D)", descripcion: "Tríada fundamental de valoración de seguridad de la información: Confidencialidad, Integridad y Disponibilidad (escala 1 a 5 por principio)." },
      { concepto: "Infraestructura Crítica (IC)", descripcion: "Activos cuyo grado de criticidad (Niveles IV y V en matriz Impacto vs. Interdependencia) compromete severamente la operación si fallan." },
      { concepto: "SLA / CSAT / SPI", descripcion: "Acuerdo de Nivel de Servicio (SLA), Índice de Satisfacción del Cliente (CSAT) e Índice de Desempeño del Cronograma (Schedule Performance Index)." }
    ]
  },

  /* SECCIÓN 07: CÉDULA DE SERVICIO DE TI COMPLETA (ITIL V.4) */
  cedulaITIL: {
    identificacion: {
      idServicio: "CAT-GI-CIBER-001",
      nombre: "Consultoría Integral en Gobierno y Ciberseguridad “GobernanzA Inteligente”",
      categoria: "Servicios Profesionales Estratégicos de Gobierno, Riesgo y Cumplimiento de TI (GRC)",
      tipoServicio: "Servicio de Negocio orientado a Clientes Corporativos (B2B / B2G en México)",
      estadoCicloVida: "En Operación / Catálogo Activo (Ciclo Base: 15 Semanas)",
      propietarioServicio: "López Reyes Luis Daniel (Service Owner)",
      gestorSeguridadRiesgo: "Sánchez Velasco Diego (Information Security Lead)",
      gestorNivelServicio: "Escalona Zúñiga Juan Carlos (Service Level & CMDB Manager)",
      usuariosObjetivo: "Direcciones Generales, CIOs, CISOs, Gerencias de TI, Áreas de Cumplimiento y Operaciones del cliente."
    },
    propuestaValor: {
      utilidad: "Qué recibe el cliente (Fit for Purpose): Diagnóstico objetivo de brechas COBIT 2019/ISO 27001, inventario y matrices cuantitativas de riesgos sin colisión de activos, diseño completo de catálogo ITIL V.4 y políticas alineadas a LFPDPPP, más capacitación certificada a su personal.",
      garantia: "Cómo se asegura el servicio (Fit for Use): Disponibilidad del 99.9% en repositorio documental en la nube con MFA, cifrado AES-256/TLS 1.3 extremo a extremo, RPO de 4 horas, puntualidad de cronograma SPI >= 0.95 y purga segura certificada DoD 5220.22-M al cierre."
    },
    paquetesServicio: [
      { codigo: "MOD-01 (GI_DIAG_01)", nombre: "Diagnóstico de Madurez y Brechas", duracion: "Semanas 1–4", entregables: "Convenio NDA firmado, Expediente cifrado de evidencias, Evaluación de madurez COBIT 2019 y Gap Analysis ISO 27001." },
      { codigo: "MOD-02 (GI_RIES_02)", nombre: "Ingeniería y Tratamiento de Riesgos", duracion: "Semanas 5–8", entregables: "Inventario normalizado Cláusula A.8, Matriz CID, Riesgo Residual, Detección de IC y Plan de Tratamiento de Controles." },
      { codigo: "MOD-03 (GI_NORM_03)", nombre: "Arquitectura de Servicios y Cumplimiento", duracion: "Semanas 9–12", entregables: "Catálogo de Servicios ITIL V.4, Matrices SLA/OLA, Políticas de Seguridad ISO 27001 y Avisos/Controles LFPDPPP validados." },
      { codigo: "MOD-04 (GI_CAPA_04)", nombre: "Transferencia de Conocimiento y Cierre", duracion: "Semanas 13–15", entregables: "Talleres ejecutivos y operativos, Guías didácticas, Reporte CSAT (>= 92%), Informe Ejecutivo y Certificado de Borrado Seguro." }
    ],
    slas: [
      { metrica: "Disponibilidad del Repositorio Documental Cifrado (GI_SW_03)", objetivo: ">= 99.9% mensual (24×7)", ventana: "Continua 24×7 con MFA", penalizacionBonificacion: "Crédito del 3% sobre hito mensual por cada 0.5% debajo del umbral." },
      { metrica: "Tiempo de Respuesta ante Consulta o Solicitud Crítica del Cliente", objetivo: "<= 2 horas hábiles (Prioridad 1) / <= 8 horas (Prioridad 2)", ventana: "Lun – Vie, 08:00 a 19:00 hrs (CDMX)", penalizacionBonificacion: "Escalamiento automático a Líder de Servicio al minuto 90." },
      { metrica: "Punto Objetivo de Recuperación Documental (RPO Cloud/Local)", objetivo: "RPO <= 4 horas (Respaldo cifrado automatizado)", ventana: "Sincronización cada 4h", penalizacionBonificacion: "Doble respaldo aislado (Nube + Unidad Hardware Cifrada GI_HW_14)." },
      { metrica: "Cumplimiento Puntual de Entregables del Cronograma (SPI)", objetivo: "SPI >= 0.95 en cada corte de fase", ventana: "Revisiones quincenales de PMO", penalizacionBonificacion: "Sesiones extraordinarias sin cargo en caso de desviación atribuible a la consultora." },
      { metrica: "Satisfacción Global del Servicio y Talleres (CSAT)", objetivo: "CSAT >= 92% de aprobación", ventana: "Al cierre de Fase 4 (Semana 15)", penalizacionBonificacion: "Taller de refuerzo ejecutivo incluido si CSAT resultase inferior al 92%." }
    ],
    olasUcs: [
      { tipo: "OLA-01 (Interno)", partes: "Área de Diagnóstico (Diego Sánchez) ↔ Área ITSM/CMDB (Juan Carlos Escalona)", compromiso: "Todo activo o evidencia recolectada en campo debe quedar registrada y etiquetada en la CMDB (GI_SW_08) en máximo 24 horas hábiles." },
      { tipo: "OLA-02 (Interno)", partes: "Área Metodológica (Luis Daniel López) ↔ Equipo Consultor Base", compromiso: "Validación cruzada de fórmulas y bloqueo de integridad en plantillas maestras (GI_SW_05) 48 horas antes de emitir cálculos al cliente." },
      { tipo: "UC-01 (Contrato Externo)", partes: "GobernanzA Inteligente ↔ Especialista Jurídico Externo LFPDPPP (GI_PER_10)", compromiso: "Dictamen técnico-jurídico sobre políticas y avisos de privacidad anonimizados en <= 5 días hábiles bajo NDA estricto." },
      { tipo: "UC-02 (Contrato Externo)", partes: "GobernanzA Inteligente ↔ Proveedor de Nube Empresarial Cifrada", compromiso: "Uptime de infraestructura >= 99.95%, cifrado AES-256 nativo, logs inmutables y residencia de datos controlada." }
    ],
    escalamiento: [
      { nivel: "Nivel 1 · Gestión Operativa y Mesa de Servicio ITSM", responsable: "Escalona Zúñiga Juan Carlos", tiempo: "0 – 2 horas", alcance: "Registro de tickets en plataforma ITSM, dudas sobre catálogo, logística de talleres y accesos a salas virtuales." },
      { nivel: "Nivel 2 · Arquitectura Técnica de Seguridad y Riesgos", responsable: "Sánchez Velasco Diego", tiempo: "2 – 6 horas", alcance: "Consultas profundas sobre hallazgos técnicos, matrices CID, controles NCh-ISO 27001 y bóveda documental cifrada." },
      { nivel: "Nivel 3 · Dirección del Servicio, Legal y Comité Ejecutivo", responsable: "López Reyes Luis Daniel (+ Asesor LFPDPPP)", tiempo: "6 – 24 horas", alcance: "Cambios de alcance contractual, incidentes mayores de confidencialidad, criterios jurídicos LFPDPPP y firma de actas." }
    ]
  },

  /* SECCIÓN 08: PROCESOS (4) E INVENTARIO DE ACTIVOS (14 Únicos sin colisión) + RIESGOS E IC */
  procesos: [
    {
      id: "GI_DIAG_01",
      num: "Proceso 1",
      nombre: "Diagnóstico de Gobierno y Brechas de Seguridad",
      descripcion: "Evaluación inicial del nivel de madurez tecnológica y ejecución del análisis de brechas (Gap Analysis) de la organización cliente frente a COBIT 2019 e ISO/IEC 27001.",
      actividadesCriticas: "Firma de convenio de confidencialidad (NDA), entrevistas con líderes de área, recolección de evidencias documentales y cálculo de madurez.",
      factoresExito: "Entrega oportuna de información por parte del cliente, resguardo cifrado de evidencias y precisión en la detección de brechas."
    },
    {
      id: "GI_RIES_02",
      num: "Proceso 2",
      nombre: "Gestión de Riesgos y Continuidad Operativa",
      descripcion: "Identificación de activos y amenazas del cliente, elaboración de la matriz de riesgos tecnológicos y estructuración de controles de resiliencia operativa.",
      actividadesCriticas: "Valoración cuantitativa de impacto, vulnerabilidades y probabilidad de amenazas, ponderación de infraestructuras críticas y diseño de controles.",
      factoresExito: "Participación activa de los dueños de proceso del cliente y viabilidad técnica y presupuestal de los controles propuestos."
    },
    {
      id: "GI_NORM_03",
      num: "Proceso 3",
      nombre: "Diseño de Servicios y Marco Normativo (ITIL / LFPDPPP)",
      descripcion: "Estructuración del catálogo de servicios de TI y Acuerdos de Nivel de Servicio (SLA) bajo ITIL V.4, junto con la redacción de políticas de seguridad y cumplimiento de la LFPDPPP.",
      actividadesCriticas: "Definición de métricas SLA/OLA, redacción de políticas de control de acceso y privacidad de datos personales, y validación jurídica.",
      factoresExito: "Alineación de los SLA con la capacidad operativa del cliente y cumplimiento estricto de la legislación mexicana de datos personales."
    },
    {
      id: "GI_CAPA_04",
      num: "Proceso 4",
      nombre: "Capacitación, Validación y Cierre del Servicio",
      descripcion: "Impartición de talleres de concientización en ciberseguridad, entrega de guías operativas, aplicación de evaluación de satisfacción (CSAT) y cierre formal del proyecto.",
      actividadesCriticas: "Ejecución de talleres ejecutivos y operativos, revisión técnica de entregables, firma de acta de aceptación y borrado seguro de datos del cliente.",
      factoresExito: "Aprobación de los talleres por el personal convocado, cumplimiento del cronograma (SPI >= 0.95) y satisfacción del cliente (CSAT >= 92%)."
    }
  ],

  esquemaEtiquetado: [
    {
      nivel: "Nivel 1: Confidencial (Activos Críticos)",
      color: "critical",
      activos: ["GI_LEG_01", "GI_INF_02", "GI_SW_03", "GI_INF_06", "GI_INF_09", "GI_INF_13"],
      regla: "Exige cifrado robusto en almacenamiento y transmisión (control A.10.1.1), acceso restringido exclusivamente al propietario y al equipo consultor asignado (control A.9.4.1), y destrucción o borrado seguro de copias de trabajo una vez firmada el acta de entrega final (control A.8.3.2)."
    },
    {
      nivel: "Nivel 2: Uso Interno",
      color: "info",
      activos: ["GI_HW_04", "GI_SW_05", "GI_PER_07", "GI_SW_08", "GI_PER_10", "GI_SW_12", "GI_HW_14"],
      regla: "Aplica a herramientas metodológicas internas, plataforma ITSM con CMDB, estaciones portátiles, medios de respaldo físicos y registros de personal interno/externo. Acceso limitado al personal autorizado de la consultora; su reproducción externa requiere aprobación expresa del Líder de Proyecto (control A.8.1.3)."
    },
    {
      nivel: "Nivel 3: Pública",
      color: "low",
      activos: ["GI_INF_11"],
      regla: "Aplica exclusivamente al material didáctico de concientización y guías generales una vez revisadas y autorizadas por la dirección de “GobernanzA Inteligente” para su difusión en talleres ejecutivos y operativos."
    }
  ],

  /* 14 ACTIVOS MAESTROS UNIFICADOS (Inventario A.8 + Matriz CID/Riesgo Residual + Matriz de Infraestructuras Críticas) */
  activos: [
    {
      id: "GI_LEG_01",
      proceso: "GI_DIAG_01",
      tipo: "Legal",
      nombre: "Convenios de Confidencialidad (NDA) y Contratos",
      descripcion: "Acuerdos legales firmados con los clientes que regulan el alcance, propiedad intelectual y no divulgación de información sensible.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_INF_02", "GI_PER_07"],
      propietario: "López Reyes Luis Daniel",
      cid: { c: 5, i: 5, d: 3, total: 13, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Almacenamiento sin cifrado o falta de control de versiones contractuales; acceso no restringido a cláusulas confidenciales.",
      vulnerabilidadCorta: "Almacenamiento sin control de versiones ni cifrado estricto",
      amenazaDetalle: "Divulgación no autorizada por colaborador, ciberataque al repositorio legal, extravío de documentos físicos.",
      amenazaCorta: "Ciberdelincuente / Interno no autorizado (Fuga de información)",
      eventoRiesgo: "Fuga de acuerdos legales, incumplimiento contractual y pérdida de confianza del cliente.",
      controlesISO: "A.13.2.4 Acuerdos de confidencialidad; A.9.4.1 Restricción de acceso; A.10.1.1 Cifrado de documentos legales; A.18.1.3 Protección de registros.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 2, mot: 2, valor4: 3 },
      riesgoCalc: { prob: 1, impacto: 13, total: 117, nivel: "Alto" },
      ic: { areaGeo: 2, periodo: 2, impactoIC: 3, cantIC: 2, campos: 2, interdep: 3, criticidad: "IV", esIC: true, controlesIC: "Firma digital avanzada, repositorio legal cifrado con acceso basado en roles (RBAC) y respaldo inmutable (NCh-ISO 27001 A.13.2.4, A.18.1.3)." }
    },
    {
      id: "GI_INF_02",
      proceso: "GI_DIAG_01",
      tipo: "Información",
      nombre: "Expedientes de Evidencia y Diagnóstico del Cliente",
      descripcion: "Diagramas de red, inventarios previos, políticas internas y minutas de entrevistas recopilados de las organizaciones auditadas.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_SW_03", "GI_HW_04"],
      propietario: "Sánchez Velasco Diego",
      cid: { c: 5, i: 5, d: 4, total: 14, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Información sensible de red y brechas del cliente concentrada en un solo expediente; envío por canales no seguros.",
      vulnerabilidadCorta: "Concentración de evidencias críticas sin segmentación",
      amenazaDetalle: "Intercepción en tránsito, ransomware, error humano en clasificación o borrado accidental.",
      amenazaCorta: "Atacante externo / Malware (Exfiltración)",
      eventoRiesgo: "Exposición de vulnerabilidades críticas del cliente y compromiso de confidencialidad.",
      controlesISO: "A.8.2.1 Clasificación de información; A.8.2.2 Etiquetado; A.13.2.1 Transferencia segura; A.12.3.1 Respaldos diarios cifrados.",
      pondVuln: { sev: 3, exp: 2, valor3: 4 },
      pondAmenaza: { cap: 3, mot: 2, valor4: 4 },
      riesgoCalc: { prob: 1, impacto: 14, total: 224, nivel: "Crítico" },
      ic: { areaGeo: 2, periodo: 3, impactoIC: 4, cantIC: 2, campos: 2, interdep: 3, criticidad: "IV", esIC: true, controlesIC: "Cifrado AES-256 en reposo, canales TLS 1.3 para recepción de evidencias, etiquetado Confidencial y respaldo diario aislado (A.8.2.2, A.12.3.1)." }
    },
    {
      id: "GI_SW_03",
      proceso: "GI_DIAG_01",
      tipo: "Software / Cloud",
      nombre: "Repositorio Documental Cifrado en la Nube",
      descripcion: "Entorno colaborativo en la nube con cifrado en tránsito y reposo, control de acceso por roles y autenticación multifactor para entregables.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_INF_02", "GI_HW_04"],
      propietario: "Sánchez Velasco Diego",
      cid: { c: 5, i: 4, d: 5, total: 14, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Configuración errónea de permisos compartidos; dependencia de conectividad a Internet del proveedor cloud.",
      vulnerabilidadCorta: "Dependencia de disponibilidad cloud y exposición de credenciales",
      amenazaDetalle: "Ataque de fuerza bruta/phishing a credenciales, caída del proveedor de nube, ransomware sincronizado.",
      amenazaCorta: "Ciberdelincuente / Falla de proveedor cloud (Indisponibilidad)",
      eventoRiesgo: "Interrupción total del trabajo colaborativo y exposición masiva de entregables de clientes.",
      controlesISO: "A.9.4.2 Inicio de sesión seguro (MFA); A.9.2.3 Gestión de accesos privilegiados; A.12.3.1 Copias de respaldo fuera de línea; A.17.2.1 Redundancia.",
      pondVuln: { sev: 3, exp: 3, valor3: 5 },
      pondAmenaza: { cap: 3, mot: 3, valor4: 5 },
      riesgoCalc: { prob: 1, impacto: 14, total: 350, nivel: "Crítico" },
      ic: { areaGeo: 3, periodo: 2, impactoIC: 4, cantIC: 3, campos: 3, interdep: 5, criticidad: "V", esIC: true, controlesIC: "Autenticación multifactor (MFA) obligatoria, revisión periódica de permisos, respaldo automático local cifrado (RPO 4h) y SLA cloud 99.9% (A.9.4.2, A.17.2.1)." }
    },
    {
      id: "GI_HW_04",
      proceso: "GI_DIAG_01",
      tipo: "Hardware",
      nombre: "Estaciones de Trabajo Portátiles (Laptops)",
      descripcion: "Equipos de cómputo de los consultores con cifrado de disco completo y protección antimalware para trabajo en sitio y remoto.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "Crítico (Uso Interno)",
      relacionados: ["GI_SW_03", "GI_PER_07"],
      propietario: "Escalona Zúñiga Juan Carlos",
      cid: { c: 4, i: 4, d: 5, total: 13, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Movilidad constante en visitas a clientes en CDMX; riesgo de robo, extravío o conexión a redes Wi-Fi públicas.",
      vulnerabilidadCorta: "Exposición física en traslados y redes externas",
      amenazaDetalle: "Robo o extravío de equipo en traslado, infección por malware/USB, falla de hardware.",
      amenazaCorta: "Delincuencia común / Malware (Robo o infección)",
      eventoRiesgo: "Pérdida de disponibilidad operativa del consultor y acceso físico a información almacenada localmente.",
      controlesISO: "A.6.2.1 Política de dispositivos móviles; A.11.2.6 Seguridad fuera de instalaciones; A.10.1.1 Cifrado de disco completo (BitLocker/LUKS); A.12.2.1 Antimalware.",
      pondVuln: { sev: 2, exp: 3, valor3: 4 },
      pondAmenaza: { cap: 2, mot: 3, valor4: 4 },
      riesgoCalc: { prob: 2, impacto: 13, total: 416, nivel: "Crítico" },
      ic: { areaGeo: 2, periodo: 2, impactoIC: 3, cantIC: 3, campos: 2, interdep: 4, criticidad: "IV", esIC: true, controlesIC: "Cifrado total de disco (LUKS/BitLocker), VPN corporativa obligatoria, bloqueo automático de pantalla y equipo de respaldo listo (A.6.2.1, A.11.2.6)." }
    },
    {
      id: "GI_SW_05",
      proceso: "GI_RIES_02",
      tipo: "Software",
      nombre: "Herramienta Metodológica de Madurez y Riesgos",
      descripcion: "Plantillas formuladas para evaluar madurez (COBIT 2019), calcular matrices de riesgo (Impacto vs. Probabilidad) y estimar indicadores técnicos.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "Crítico (Uso Interno)",
      relacionados: ["GI_INF_06", "GI_SW_03"],
      propietario: "López Reyes Luis Daniel",
      cid: { c: 3, i: 5, d: 4, total: 12, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Fórmulas de cálculo desprotegidas en hojas de cálculo; falta de control de cambios sobre plantillas maestras.",
      vulnerabilidadCorta: "Fórmulas editables sin bloqueo de integridad",
      amenazaDetalle: "Error humano en modificación de fórmulas, corrupción de archivo, copia no autorizada de propiedad intelectual.",
      amenazaCorta: "Error humano del consultor (Alteración)",
      eventoRiesgo: "Cálculos erróneos en nivel de madurez COBIT o ponderaciones críticas de riesgo del cliente.",
      controlesISO: "A.12.1.2 Gestión de cambios; A.14.2.4 Restricciones de modificación; A.18.1.2 Protección de propiedad intelectual; A.12.3.1 Respaldo de plantillas.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 1, impacto: 12, total: 36, nivel: "Medio" },
      ic: { areaGeo: 2, periodo: 2, impactoIC: 3, cantIC: 2, campos: 1, interdep: 2, criticidad: "III", esIC: false, controlesIC: "Protección de celdas con contraseña, control de versiones maestro en repositorio y validación cruzada por el Líder de Proyecto (A.12.1.2, A.18.1.2)." }
    },
    {
      id: "GI_INF_06",
      proceso: "GI_RIES_02",
      tipo: "Información",
      nombre: "Matrices de Riesgos y Estudios de Criticidad de Clientes",
      descripcion: "Documentos técnicos entregables que detallan vulnerabilidades, amenazas, impacto operativo y controles priorizados para cada cliente.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_SW_05", "GI_SW_03"],
      propietario: "Sánchez Velasco Diego",
      cid: { c: 5, i: 5, d: 4, total: 14, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Contienen el mapa completo de procesos críticos y vulnerabilidades detectadas de cada organización cliente.",
      vulnerabilidadCorta: "Alta sensibilidad estratégica del mapa de vulnerabilidades",
      amenazaDetalle: "Espionaje corporativo, divulgación accidental, pérdida por falla de almacenamiento.",
      amenazaCorta: "Atacante dirigido / Error humano (Divulgación)",
      eventoRiesgo: "Exposición de puntos únicos de falla del cliente ante terceros malintencionados.",
      controlesISO: "A.8.2.3 Manejo de activos confidenciales; A.10.1.1 Cifrado de entregables; A.9.4.1 Control de acceso estricto; A.17.1.1 Continuidad de seguridad.",
      pondVuln: { sev: 3, exp: 2, valor3: 4 },
      pondAmenaza: { cap: 2, mot: 2, valor4: 3 },
      riesgoCalc: { prob: 1, impacto: 14, total: 168, nivel: "Crítico" },
      ic: { areaGeo: 2, periodo: 3, impactoIC: 4, cantIC: 2, campos: 2, interdep: 3, criticidad: "IV", esIC: true, controlesIC: "Entrega cifrada con clave compartida por canal alterno, marca de agua por cliente y resguardo en bóveda digital (A.8.2.3, A.10.1.1)." }
    },
    {
      id: "GI_PER_07",
      proceso: "GI_RIES_02",
      tipo: "Personal",
      nombre: "Equipo Base de Consultores Especializados",
      descripcion: "Personal técnico capacitado en COBIT 2019, ISO/IEC 27001 e ITIL V.4 responsable del análisis y diseño de soluciones.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "Crítico (Uso Interno)",
      relacionados: ["GI_HW_04", "GI_LEG_01"],
      propietario: "López Reyes Luis Daniel",
      cid: { c: 4, i: 4, d: 5, total: 13, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Equipo compacto de 3 especialistas; sobrecarga operativa o ausencia simultánea por enfermedad/emergencia.",
      vulnerabilidadCorta: "Dependencia de especialistas clave en un equipo reducido",
      amenazaDetalle: "Enfermedad, accidente, rotación o indisponibilidad de un consultor clave durante hitos críticos.",
      amenazaCorta: "Contingencia médica / Sobrecarga laboral (Indisponibilidad)",
      eventoRiesgo: "Retraso en entregas (caída de SPI < 0.95) y pérdida temporal de capacidad técnica.",
      controlesISO: "A.7.2.2 Capacitación cruzada; A.12.1.1 Procedimientos documentados; A.6.1.2 Segregación de funciones; Esquema de respaldo trilateral.",
      pondVuln: { sev: 3, exp: 2, valor3: 4 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 2, impacto: 13, total: 104, nivel: "Alto" },
      ic: { areaGeo: 3, periodo: 3, impactoIC: 5, cantIC: 3, campos: 2, interdep: 4, criticidad: "V", esIC: true, controlesIC: "Documentación estandarizada de metodologías, capacitación cruzada entre los 3 consultores y redistribución de carga PMBOK (A.7.2.2, A.12.1.1)." }
    },
    {
      id: "GI_SW_08",
      proceso: "GI_NORM_03",
      tipo: "Software / ITSM",
      nombre: "Plataforma ITSM con Base de Configuración (CMDB)",
      descripcion: "Sistema interno de gestión de servicios (meta estratégica A3 y COBIT BAI10) para controlar tickets, activos, licencias y versiones.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "Crítico (Uso Interno)",
      relacionados: ["GI_HW_04", "GI_INF_09"],
      propietario: "Escalona Zúñiga Juan Carlos",
      cid: { c: 3, i: 5, d: 4, total: 12, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Desactualización manual de registros de configuración; falta de sincronización entre tickets y activos.",
      vulnerabilidadCorta: "Posible desfase de registros en la CMDB por carga manual",
      amenazaDetalle: "Error humano en registro de cambios, caída del servicio web ITSM, corrupción de base de datos.",
      amenazaCorta: "Error operativo / Falla de software (Inconsistencia)",
      eventoRiesgo: "Pérdida de trazabilidad de activos, licencias y solicitudes de cambio (incumplimiento meta A3).",
      controlesISO: "A.12.1.2 Control de cambios; A.12.4.1 Registro de eventos y logs; A.12.4.4 Sincronización de relojes (NTP); A.12.3.1 Respaldos automatizados.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 2, mot: 1, valor4: 2 },
      riesgoCalc: { prob: 1, impacto: 12, total: 72, nivel: "Medio" },
      ic: { areaGeo: 2, periodo: 2, impactoIC: 3, cantIC: 3, campos: 2, interdep: 4, criticidad: "IV", esIC: true, controlesIC: "Auditoría quincenal de la CMDB, flujos obligatorios de cambio (ITIL 4), bitácoras protegidas y respaldos diarios de BD (A.12.1.2, A.12.4.1)." }
    },
    {
      id: "GI_INF_09",
      proceso: "GI_NORM_03",
      tipo: "Información",
      nombre: "Catálogos de Servicios, SLAs y Políticas de Seguridad",
      descripcion: "Cuerpo documental maestro elaborado para los clientes con catálogo ITIL V.4, acuerdos SLA, políticas ISO 27001 y controles LFPDPPP.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_SW_08", "GI_PER_10"],
      propietario: "Escalona Zúñiga Juan Carlos",
      cid: { c: 5, i: 5, d: 4, total: 14, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Desalineación entre las políticas diseñadas y los requisitos vigentes de ISO 27001 o la LFPDPPP.",
      vulnerabilidadCorta: "Complejidad normativa y riesgo de desactualización legal",
      amenazaDetalle: "Modificación no autorizada de borradores, error normativo, filtración de políticas internas del cliente.",
      amenazaCorta: "Error de interpretación normativa / Fuga (Incumplimiento)",
      eventoRiesgo: "Entrega de marcos normativos incompletos y exposición del cliente a sanciones legales.",
      controlesISO: "A.5.1.1 Políticas de seguridad; A.18.1.1 Identificación de legislación vigente; A.18.1.4 Protección de datos personales; A.7.5 Control documental.",
      pondVuln: { sev: 3, exp: 2, valor3: 4 },
      pondAmenaza: { cap: 2, mot: 2, valor4: 3 },
      riesgoCalc: { prob: 1, impacto: 14, total: 168, nivel: "Crítico" },
      ic: { areaGeo: 2, periodo: 3, impactoIC: 4, cantIC: 2, campos: 3, interdep: 4, criticidad: "V", esIC: true, controlesIC: "Lista de verificación normativa ISO 27001/LFPDPPP, doble revisión técnica-jurídica y control estricto de versiones (A.5.1.1, A.18.1.4)." }
    },
    {
      id: "GI_PER_10",
      proceso: "GI_NORM_03",
      tipo: "Personal Externo",
      nombre: "Especialista Jurídico Externo (LFPDPPP)",
      descripcion: "Asesor legal contratado por servicios profesionales puntuales para validar el cumplimiento normativo en protección de datos personales.",
      criticoInventario: false,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "No Crítico (Uso Interno)",
      relacionados: ["GI_INF_09", "GI_LEG_01"],
      propietario: "López Reyes Luis Daniel",
      cid: { c: 4, i: 3, d: 2, total: 9, valor1: "Medio", valor2: 2 },
      vulnerabilidadDetalle: "Contratación por asesoría puntual externa; disponibilidad limitada y acceso temporal a políticas del cliente.",
      vulnerabilidadCorta: "Dependencia de agenda de proveedor externo puntual",
      amenazaDetalle: "Demora en tiempos de respuesta del asesor externo, conflicto de agenda o divulgación de información.",
      amenazaCorta: "Retraso de tercero / Incumplimiento NDA (Demora)",
      eventoRiesgo: "Retraso en la validación legal de avisos de privacidad y políticas de protección de datos.",
      controlesISO: "A.15.1.1 Seguridad en relaciones con proveedores; A.13.2.4 Acuerdo NDA firmado; A.9.2.6 Retiro de accesos al concluir asesoría.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 2, impacto: 9, total: 54, nivel: "Medio" },
      ic: { areaGeo: 1, periodo: 2, impactoIC: 2, cantIC: 2, campos: 1, interdep: 2, criticidad: "III", esIC: false, controlesIC: "Contrato de servicios con fechas compromiso, NDA específico y acceso limitado únicamente a borradores anonimizados (A.15.1.1, A.9.2.6)." }
    },
    {
      id: "GI_INF_11",
      proceso: "GI_CAPA_04",
      tipo: "Información",
      nombre: "Material Didáctico y Base de Conocimiento",
      descripcion: "Presentaciones ejecutivas, guías operativas y artículos de solución (meta estratégica A4 / COBIT BAI08) para talleres de concientización.",
      criticoInventario: false,
      etiquetaNivel: "Nivel 3: Pública",
      clasificacionTexto: "No Crítico (Uso Interno / Pública)",
      relacionados: ["GI_SW_12", "GI_PER_07"],
      propietario: "Escalona Zúñiga Juan Carlos",
      cid: { c: 2, i: 3, d: 3, total: 8, valor1: "Medio", valor2: 2 },
      vulnerabilidadDetalle: "Versiones desactualizadas de presentaciones o guías; uso no autorizado fuera de los talleres.",
      vulnerabilidadCorta: "Reutilización de material sin control de versión",
      amenazaDetalle: "Error de actualización de contenidos, plagio o distribución sin créditos de la consultora.",
      amenazaCorta: "Error humano / Uso no autorizado (Desactualización)",
      eventoRiesgo: "Capacitación deficiente al personal del cliente y baja tasa de aprobación en talleres.",
      controlesISO: "A.7.2.2 Concientización y formación; A.18.1.2 Derechos de propiedad intelectual; A.8.2.2 Etiquetado de uso.",
      pondVuln: { sev: 1, exp: 2, valor3: 2 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 1, impacto: 8, total: 16, nivel: "Bajo" },
      ic: { areaGeo: 1, periodo: 1, impactoIC: 1, cantIC: 2, campos: 1, interdep: 2, criticidad: "II", esIC: false, controlesIC: "Control de versiones en base de conocimiento (COBIT BAI08), revisión previa al taller y avisos de propiedad intelectual (A.7.2.2, A.18.1.2)." }
    },
    {
      id: "GI_SW_12",
      proceso: "GI_CAPA_04",
      tipo: "Software",
      nombre: "Plataforma de Videoconferencia y Encuestas CSAT",
      descripcion: "Herramientas digitales para impartir talleres remotos, evaluaciones de aprendizaje y encuestas de satisfacción del cliente (CSAT >= 92%).",
      criticoInventario: false,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "No Crítico (Uso Interno)",
      relacionados: ["GI_INF_11", "GI_INF_13"],
      propietario: "Escalona Zúñiga Juan Carlos",
      cid: { c: 2, i: 3, d: 4, total: 9, valor1: "Medio", valor2: 2 },
      vulnerabilidadDetalle: "Dependencia de ancho de banda y estabilidad de plataforma externa; enlaces de reunión sin sala de espera.",
      vulnerabilidadCorta: "Inestabilidad de enlace de red o accesos no filtrados a sala",
      amenazaDetalle: "Falla de red o plataforma durante talleres en vivo, intrusión en sala virtual (Zoombombing).",
      amenazaCorta: "Falla de telecomunicaciones / Intruso virtual (Interrupción)",
      eventoRiesgo: "Interrupción de talleres ejecutivos o pérdida de respuestas de satisfacción CSAT.",
      controlesISO: "A.13.1.2 Seguridad de servicios de red; A.13.2.3 Mensajería y comunicación segura; A.17.2.1 Canal alterno de respaldo.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 2, mot: 1, valor4: 2 },
      riesgoCalc: { prob: 1, impacto: 9, total: 54, nivel: "Medio" },
      ic: { areaGeo: 2, periodo: 1, impactoIC: 2, cantIC: 2, campos: 1, interdep: 2, criticidad: "III", esIC: false, controlesIC: "Salas con contraseña y sala de espera, enlace de Internet redundante y exportación inmediata de resultados CSAT (A.13.1.2, A.17.2.1)." }
    },
    {
      id: "GI_INF_13",
      proceso: "GI_CAPA_04",
      tipo: "Información",
      nombre: "Informes Ejecutivos Finales y Actas de Cierre",
      descripcion: "Reportes finales a dirección, métricas de desempeño (SPI >= 0.95) y actas de aceptación y purga segura de información del cliente.",
      criticoInventario: true,
      etiquetaNivel: "Nivel 1: Confidencial",
      clasificacionTexto: "Crítico (Confidencial)",
      relacionados: ["GI_LEG_01", "GI_SW_03"],
      propietario: "López Reyes Luis Daniel",
      cid: { c: 5, i: 5, d: 3, total: 13, valor1: "Alto", valor2: 3 },
      vulnerabilidadDetalle: "Consolidan todos los hallazgos, métricas y aceptación final; retención residual de datos tras el cierre.",
      vulnerabilidadCorta: "Riesgo de retención residual de datos tras cierre de proyecto",
      amenazaDetalle: "Alteración posterior a la firma, pérdida del acta de cierre, retención indebida de datos del cliente.",
      amenazaCorta: "Error administrativo / Acceso posterior (Incumplimiento)",
      eventoRiesgo: "Disputas de aceptación de proyecto o incumplimiento de purga segura de información.",
      controlesISO: "A.8.1.4 Devolución de activos; A.8.3.2 Eliminación segura de medios; A.18.1.3 Protección de registros; A.10.1.1 Firma digital.",
      pondVuln: { sev: 2, exp: 2, valor3: 3 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 1, impacto: 13, total: 39, nivel: "Medio" },
      ic: { areaGeo: 2, periodo: 2, impactoIC: 3, cantIC: 2, campos: 3, interdep: 4, criticidad: "IV", esIC: true, controlesIC: "Protocolo formal de cierre con certificado de borrado seguro (DoD 5220.22-M), firma digital y archivo histórico cifrado (A.8.1.4, A.8.3.2)." }
    },
    {
      id: "GI_HW_14",
      proceso: "GI_CAPA_04",
      tipo: "Hardware",
      nombre: "Mobiliario de Oficina y Medios de Respaldo Cifrados",
      descripcion: "Equipamiento físico de trabajo y unidades externas cifradas para respaldos temporales previos al cierre y borrado seguro.",
      criticoInventario: false,
      etiquetaNivel: "Nivel 2: Uso Interno",
      clasificacionTexto: "No Crítico (Uso Interno)",
      relacionados: ["GI_HW_04", "GI_INF_13"],
      propietario: "Sánchez Velasco Diego",
      cid: { c: 3, i: 3, d: 2, total: 8, valor1: "Medio", valor2: 2 },
      vulnerabilidadDetalle: "Medios extraíbles (USB/discos externos) susceptibles de extravío o deterioro físico.",
      vulnerabilidadCorta: "Portabilidad de unidades de respaldo extraíbles",
      amenazaDetalle: "Extravío de unidad externa, falla física del medio, sismo o daño eléctrico en oficina.",
      amenazaCorta: "Extravío / Sismo o falla física (Daño o pérdida)",
      eventoRiesgo: "Pérdida de respaldo temporal o exposición si el medio no estuviera cifrado.",
      controlesISO: "A.8.3.1 Gestión de medios removibles; A.8.3.2 Eliminación segura; A.8.3.3 Transferencia física; A.11.2.1 Protección física.",
      pondVuln: { sev: 2, exp: 1, valor3: 2 },
      pondAmenaza: { cap: 1, mot: 1, valor4: 1 },
      riesgoCalc: { prob: 1, impacto: 8, total: 16, nivel: "Bajo" },
      ic: { areaGeo: 1, periodo: 1, impactoIC: 1, cantIC: 2, campos: 1, interdep: 2, criticidad: "II", esIC: false, controlesIC: "Cifrado por hardware en unidades externas, custodia bajo llave (escritorio limpio A.11.2.9) y borrado certificado al cierre (A.8.3.1, A.8.3.2)." }
    }
  ]
};
