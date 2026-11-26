/* ==========================================================================
   GobernanzA Inteligente v2 — Motor Inmersivo con Diseños Diversificados
   Cada módulo posee una arquitectura visual única • Barra lateral amigable
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.PROJECT_DATA;

  const state = {
    currentModule: "inicio",
    theme: localStorage.getItem("gi-theme") || "dark",
    sidebarCollapsed: localStorage.getItem("gi-sidebar-collapsed") === "1",
    activeValueIdx: 0,
    activeBscIdx: 0,
    showFullBscMatrix: false,
    cascadeDim: "ALL",
    cascadeMode: "ALL",
    selectedCobitCol: null,
    stratMapMode: "ALL",
    selectedMapNode: null,
    assetSearch: "",
    assetProceso: "ALL",
    assetEtiqueta: "ALL",
    assetOwner: "ALL",
    riskTab: "matriz-cid",
    riskFilterNivel: "ALL",
    sim: { c: 5, i: 4, d: 5, sev: 3, exp: 3, cap: 3, mot: 3, prob: 1 }
  };

  /* Metadatos amigables para la barra lateral (colores suaves y textos cercanos) */
  const FRIENDLY_NAV = {
    inicio:        { label: "Inicio",                hint: "Panorama y avance global",     tint: "tint--cyan" },
    identidad:     { label: "Nuestra Esencia",       hint: "Manifiesto, misión y alcance", tint: "tint--violet" },
    bsc:           { label: "Puente Estratégico",    hint: "Balanced Scorecard y TI",      tint: "tint--emerald" },
    cascada:       { label: "Cascada COBIT",         hint: "20 metas × 19 objetivos",      tint: "tint--sky" },
    mapa:          { label: "Mapa Causa-Efecto",     hint: "Flujos vivos de valor",        tint: "tint--indigo" },
    "caso-negocio":{ label: "Caso de Negocio",       hint: "Ruta 15 sem. y finanzas",      tint: "tint--amber" },
    "cedula-itil": { label: "Cédula ITIL V.4",       hint: "Catálogo, SLAs y soporte",     tint: "tint--emerald" },
    activos:       { label: "Constelación Activos",  hint: "14 activos NCh-ISO 27001",     tint: "tint--cyan" },
    riesgos:       { label: "Centro de Riesgos",     hint: "Matriz CID y 9 IC críticas",   tint: "tint--rose" }
  };

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function riskBadgeClass(nivel) {
    const n = (nivel || "").toLowerCase();
    if (n.includes("crítico") || n.includes("critico") || n === "v") return "badge--critical";
    if (n.includes("alto") || n === "iv") return "badge--high";
    if (n.includes("medio") || n === "iii") return "badge--medium";
    return "badge--low";
  }

  function riskBarColor(nivel) {
    const n = (nivel || "").toLowerCase();
    if (n.includes("crítico") || n.includes("critico")) return "var(--status-critical)";
    if (n.includes("alto")) return "var(--status-high)";
    if (n.includes("medio")) return "var(--status-medium)";
    return "var(--status-low)";
  }

  function iconSvg(name) {
    const icons = {
      inicio: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
      identidad: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      bsc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>',
      cascada: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
      mapa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.5 7.5L11 15M15.5 7.5L13 15"/></svg>',
      "caso-negocio": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
      "cedula-itil": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M9 15l2 2 4-4"/></svg>',
      activos: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/></svg>',
      riesgos: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>'
    };
    return icons[name] || icons.inicio;
  }

  /* ------------------------------------------------------------------------
     GESTIÓN DE TEMA Y BARRA LATERAL AMIGABLE
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gi-theme", theme);

    document.querySelectorAll("[data-set-theme]").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-set-theme") === theme);
    });

    const mobBtn = document.getElementById("mobileThemeBtn");
    if (mobBtn) {
      mobBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function applySidebarCollapsed(collapsed) {
    state.sidebarCollapsed = collapsed;
    localStorage.setItem("gi-sidebar-collapsed", collapsed ? "1" : "0");
    document.getElementById("appShell")?.classList.toggle("sidebar-is-collapsed", collapsed);
    if (state.currentModule === "mapa") {
      setTimeout(drawStratMapArrows, 340);
    }
    setTimeout(() => justifyLongTexts(), 340);
  }

  function renderSidebar() {
    const navEl = document.getElementById("sidebarNav");
    if (!navEl) return;

    const groups = [
      { caption: "Estrategia y Visión", ids: ["inicio", "identidad", "bsc", "cascada", "mapa"] },
      { caption: "Operación del Servicio", ids: ["caso-negocio", "cedula-itil"] },
      { caption: "Ciberseguridad ISO", ids: ["activos", "riesgos"] }
    ];

    navEl.innerHTML = groups.map(g => {
      const items = g.ids.map(id => {
        const meta = FRIENDLY_NAV[id];
        const isActive = state.currentModule === id;
        return `
          <button class="dock-item ${isActive ? 'active' : ''}" data-nav="${id}" title="${escapeHtml(meta.label + ' — ' + meta.hint)}">
            <span class="dock-icon-bubble ${meta.tint}">${iconSvg(id)}</span>
            <span class="dock-item-copy">
              <span class="dock-item-title">${escapeHtml(meta.label)}</span>
              <span class="dock-item-hint">${escapeHtml(meta.hint)}</span>
            </span>
            <span class="dock-active-dot"></span>
          </button>
        `;
      }).join("");
      return `<div class="dock-section-caption">${escapeHtml(g.caption)}</div>${items}`;
    }).join("");
  }

  function renderChapterPager() {
    const pager = document.getElementById("chapterPager");
    if (!pager) return;
    const idx = DATA.modulos.findIndex(m => m.id === state.currentModule);
    const prev = idx > 0 ? DATA.modulos[idx - 1] : null;
    const next = idx < DATA.modulos.length - 1 ? DATA.modulos[idx + 1] : null;

    pager.innerHTML = `
      ${prev ? `
        <button class="pager-link" data-goto="${prev.id}">
          <span style="font-size:0.72rem; color:var(--text-muted);">← Capítulo anterior</span>
          <strong style="font-size:0.92rem; color:var(--accent-primary);">${escapeHtml(FRIENDLY_NAV[prev.id].label)}</strong>
        </button>
      ` : `<div></div>`}
      ${next ? `
        <button class="pager-link pager-link--next" data-goto="${next.id}">
          <span style="font-size:0.72rem; color:var(--text-muted);">Siguiente capítulo →</span>
          <strong style="font-size:0.92rem; color:var(--accent-primary);">${escapeHtml(FRIENDLY_NAV[next.id].label)}</strong>
        </button>
      ` : `<div></div>`}
    `;
  }

  function navigateTo(moduleId, pushHash = true) {
    const exists = DATA.modulos.find(m => m.id === moduleId);
    if (!exists) moduleId = "inicio";
    state.currentModule = moduleId;

    if (pushHash) {
      history.replaceState(null, "", `#${moduleId}`);
    }

    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `view-${moduleId}`);
    });

    const bc = document.getElementById("breadcrumbCurrent");
    if (bc && exists) {
      bc.textContent = `${FRIENDLY_NAV[moduleId].label} — ${exists.unidad}`;
    }

    renderSidebar();
    renderChapterPager();
    closeMobileSidebar();

    if (moduleId === "mapa") {
      requestAnimationFrame(drawStratMapArrows);
    }
    requestAnimationFrame(() => justifyLongTexts());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function justifyLongTexts(root) {
    const scope = root || document.querySelector(".view-section.active");
    if (!scope) return;
    scope.querySelectorAll("p, .ledger-row span").forEach(el => {
      if (el.classList.contains("text-justify")) return;
      const rect = el.getBoundingClientRect();
      if (!rect.height || !rect.width) return;
      const style = window.getComputedStyle(el);
      let lineHeight = parseFloat(style.lineHeight);
      if (Number.isNaN(lineHeight)) {
        lineHeight = parseFloat(style.fontSize) * 1.6;
      }
      const lines = Math.round(rect.height / lineHeight);
      el.classList.toggle("auto-justify", lines > 3);
    });
  }

  function closeMobileSidebar() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebarOverlay")?.classList.remove("open");
  }

  /* ------------------------------------------------------------------------
     DISEÑO 01: PORTADA INMERSIVA (ORBITAL RADAR SVG + CINTA DE MÉTRICAS + BENTO)
     ------------------------------------------------------------------------ */
  function renderInicio() {
    const el = document.getElementById("view-inicio");
    const criticosCount = DATA.activos.filter(a => a.riesgoCalc.nivel === "Crítico").length;
    const icCount = DATA.activos.filter(a => a.ic.esIC).length;

    el.innerHTML = `
      <div class="hero-immersive">
        <div>
          <div class="eyebrow-tag">IPN • ESCOM • IT Governance (Grupo 7CV4)</div>
          <h1 class="display-heading">
            Ciberseguridad que gobierna el futuro con <span class="gradient-span">GobernanzA Inteligente</span>
          </h1>
          <p class="lead-paragraph" style="margin-bottom:28px;">
            Arquitectura consultiva de nueva generación diseñada para transformar la seguridad reactiva en
            gobierno tecnológico medible, integrando <strong>COBIT 2019</strong>, <strong>ITIL V.4</strong>,
            <strong>PMBOK</strong>, <strong>LFPDPPP</strong> y <strong>NCh-ISO 27001:2013</strong> a lo largo de 15 semanas.
          </p>

          <div style="display:flex; flex-wrap:wrap; gap:12px; margin-bottom:28px;">
            <button class="btn btn--primary" data-goto="riesgos">Entrar al Centro de Riesgos e IC →</button>
            <button class="btn" data-goto="mapa">Explorar Mapa Causa-Efecto</button>
            <button class="btn" data-goto="identidad">Leer Manifiesto del Servicio</button>
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:24px; font-size:0.82rem; color:var(--text-muted);">
            <div><strong style="color:var(--text-primary);">Profesora:</strong> Dra. Rocío Palacios Solano</div>
            <div><strong style="color:var(--text-primary);">Ejecución:</strong> 24 Ago – 04 Dic 2026</div>
            <div><strong style="color:var(--text-primary);">Cobertura:</strong> República Mexicana</div>
          </div>
        </div>

        <!-- Núcleo Orbital SVG Interactivo -->
        <div class="hero-orbit-box">
          <svg viewBox="0 0 400 400" style="width:100%; max-width:390px; height:auto;">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="var(--accent-primary)" stop-opacity="0.34" />
                <stop offset="100%" stop-color="var(--accent-primary)" stop-opacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="175" fill="url(#coreGlow)" />
            <g class="orbit-ring-anim">
              <circle cx="200" cy="200" r="152" fill="none" stroke="var(--border-strong)" stroke-width="1.2" stroke-dasharray="6 8" />
              <circle cx="200" cy="48" r="7" fill="var(--accent-primary)" />
              <circle cx="352" cy="200" r="7" fill="var(--accent-secondary)" />
              <circle cx="200" cy="352" r="7" fill="var(--accent-emerald)" />
              <circle cx="48" cy="200" r="7" fill="var(--accent-rose)" />
            </g>
            <g class="orbit-ring-reverse">
              <circle cx="200" cy="200" r="106" fill="none" stroke="var(--accent-primary)" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="28 14" />
            </g>
            <circle cx="200" cy="200" r="58" fill="var(--bg-surface-solid)" stroke="var(--accent-primary)" stroke-width="2.5" />
            <text x="200" y="196" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-display)" font-size="16" font-weight="700">GA • ID</text>
            <text x="200" y="214" text-anchor="middle" fill="var(--accent-primary)" font-family="var(--font-mono)" font-size="9.5" font-weight="700">100% FASE 1-4</text>

            <!-- Etiquetas Orbitales Clicables -->
            <g style="cursor:pointer;" data-goto="cascada">
              <rect x="148" y="16" width="104" height="26" rx="13" fill="var(--bg-surface-solid)" stroke="var(--border-strong)" />
              <text x="200" y="33" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="10" font-weight="700">COBIT 2019</text>
            </g>
            <g style="cursor:pointer;" data-goto="cedula-itil">
              <rect x="292" y="187" width="92" height="26" rx="13" fill="var(--bg-surface-solid)" stroke="var(--border-strong)" />
              <text x="338" y="204" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="10" font-weight="700">ITIL V.4</text>
            </g>
            <g style="cursor:pointer;" data-goto="activos">
              <rect x="136" y="358" width="128" height="26" rx="13" fill="var(--bg-surface-solid)" stroke="var(--border-strong)" />
              <text x="200" y="375" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="10" font-weight="700">NCh-ISO 27001</text>
            </g>
            <g style="cursor:pointer;" data-goto="caso-negocio">
              <rect x="14" y="187" width="96" height="26" rx="13" fill="var(--bg-surface-solid)" stroke="var(--border-strong)" />
              <text x="62" y="204" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="10" font-weight="700">PMBOK 15s</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- Cinta Arquitectónica Sin Tarjetas Monótonas -->
      <div class="metric-ribbon">
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">+15%</div>
          <div class="metric-ribbon__label">Rentabilidad Neta</div>
          <div class="metric-ribbon__sub">Meta Financiera 4T 2027</div>
        </div>
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">&ge; 92%</div>
          <div class="metric-ribbon__label">Índice CSAT</div>
          <div class="metric-ribbon__sub">Satisfacción y SLA 99.9%</div>
        </div>
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">20 × 19</div>
          <div class="metric-ribbon__label">Cascada COBIT</div>
          <div class="metric-ribbon__sub">Metas y Objetivos EDM-DSS</div>
        </div>
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">14</div>
          <div class="metric-ribbon__label">Activos Únicos</div>
          <div class="metric-ribbon__sub">Cero colisiones en 4 procesos</div>
        </div>
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">${icCount} IC</div>
          <div class="metric-ribbon__label">Infraest. Críticas</div>
          <div class="metric-ribbon__sub">3 Grado V • 6 Grado IV</div>
        </div>
        <div class="metric-ribbon__item">
          <div class="metric-ribbon__num">${criticosCount}</div>
          <div class="metric-ribbon__label">Riesgos Críticos</div>
          <div class="metric-ribbon__sub">Tope: GI_HW_04 (416 pts)</div>
        </div>
      </div>

      <!-- Mosaico Asimétrico Bento de Módulos -->
      <div style="margin-bottom:20px;">
        <div class="eyebrow-tag">Recorrido Interactivo</div>
        <h2 style="font-family:var(--font-display); font-size:1.75rem; font-weight:600;">Arquitectura del Proyecto por Módulos</h2>
      </div>

      <div class="bento-showcase">
        <div class="bento-tile bento-span-7" data-goto="riesgos">
          <div>
            <span class="badge badge--critical">NCh-ISO 27001:2013 • Unidad V</span>
            <h3 style="font-family:var(--font-display); font-size:1.45rem; margin:12px 0 6px;">Centro de Telemetría de Riesgos y 9 Infraestructuras Críticas</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); max-width:540px;">Explora la valoración CID, vulnerabilidades (Valor3), amenazas (Valor4), mapa de calor 5×5 y simulador dinámico en tiempo real.</p>
          </div>
          <div style="font-size:0.82rem; font-weight:700; color:var(--accent-primary); margin-top:16px;">Abrir telemetría y simulador →</div>
          <div class="bento-watermark">ISO</div>
        </div>

        <div class="bento-tile bento-span-5" data-goto="activos">
          <div>
            <span class="badge badge--info">Cláusula A.8 • Sin Colisiones</span>
            <h3 style="font-family:var(--font-display); font-size:1.3rem; margin:12px 0 6px;">Constelación de 14 Activos</h3>
            <p style="font-size:0.87rem; color:var(--text-secondary);">Red interactiva de dependencias, etiquetado en 3 niveles y propiedad nominal distribuida en 4 procesos.</p>
          </div>
          <div style="font-size:0.82rem; font-weight:700; color:var(--accent-primary); margin-top:16px;">Inspeccionar constelación →</div>
          <div class="bento-watermark">A.8</div>
        </div>

        <div class="bento-tile bento-span-4" data-goto="bsc">
          <div>
            <span class="badge badge--low">BSC + COBIT AG/EG</span>
            <h3 style="font-family:var(--font-display); font-size:1.2rem; margin:10px 0 6px;">Puente Corporativo ↔ TI</h3>
            <p style="font-size:0.84rem; color:var(--text-secondary);">1 Meta Corporativa y 1 Meta de TI articuladas por cada dimensión del Balanced Scorecard.</p>
          </div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--accent-primary);">Ver puente →</div>
        </div>

        <div class="bento-tile bento-span-4" data-goto="mapa">
          <div>
            <span class="badge badge--purple">20 Nodos Conectados</span>
            <h3 style="font-family:var(--font-display); font-size:1.2rem; margin:10px 0 6px;">Mapa Causa-Efecto Vivo</h3>
            <p style="font-size:0.84rem; color:var(--text-secondary);">Corrientes SVG animadas que revelan cómo el aprendizaje impulsa procesos, clientes y finanzas.</p>
          </div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--accent-primary);">Iluminar cadenas →</div>
        </div>

        <div class="bento-tile bento-span-4" data-goto="cedula-itil">
          <div>
            <span class="badge badge--info">ITIL V.4 & Caso IPN</span>
            <h3 style="font-family:var(--font-display); font-size:1.2rem; margin:10px 0 6px;">Cédula ITIL y Ruta 15 Sem.</h3>
            <p style="font-size:0.84rem; color:var(--text-secondary);">Pipeline de paquetes, diales SLA 99.9%, escalamiento escalonado y análisis financiero.</p>
          </div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--accent-primary);">Revisar servicio →</div>
        </div>
      </div>

      <!-- Franja Horizontal de Cobertura Curricular y Custodios -->
      <div style="margin-bottom:18px;">
        <div class="eyebrow-tag">Alineación Académica Oficial (Alcance hasta Riesgos)</div>
        <h2 style="font-family:var(--font-display); font-size:1.55rem;">Unidades Temáticas Cubiertas al 100%</h2>
      </div>
      <div class="syllabus-timeline" style="margin-bottom:44px;">
        ${DATA.avanceTemario.map((u, idx) => `
          <div class="syllabus-step">
            <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--accent-primary); font-weight:700;">0${idx + 1} • ${escapeHtml(u.horas)}</div>
            <div style="font-weight:800; font-size:0.92rem; margin:6px 0;">${escapeHtml(u.nombre)}</div>
            <p style="font-size:0.78rem; color:var(--text-secondary);">${escapeHtml(u.entregables)}</p>
          </div>
        `).join("")}
      </div>

      <!-- Firma del Equipo Consultor (Diseño Editorial Horizontal) -->
      <div style="padding:28px 32px; border-radius:var(--radius-xl); background:var(--bg-surface); border:1px solid var(--border-subtle); display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
        ${DATA.meta.equipo.map((m, i) => {
          const colors = ["avatar--cyan", "avatar--violet", "avatar--emerald"];
          const initials = m.nombre.split(" ").slice(0, 2).map(w => w[0]).join("");
          return `
            <div style="display:flex; gap:14px; align-items:flex-start;">
              <div class="avatar-chip ${colors[i]}" style="width:44px; height:44px; font-size:0.9rem; margin-left:0; flex-shrink:0;">${initials}</div>
              <div>
                <strong style="font-size:0.96rem; display:block;">${escapeHtml(m.nombre)}</strong>
                <span style="font-size:0.79rem; color:var(--text-secondary); display:block; margin:2px 0 8px;">${escapeHtml(m.rol)}</span>
                <div style="display:flex; flex-wrap:wrap; gap:5px;">
                  ${m.activosAsignados.map(aid => `<code class="mono-id" style="cursor:pointer;" data-open-asset="${aid}">${aid}</code>`).join("")}
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     DISEÑO 02: IDENTIDAD — FORMATO REVISTA EDITORIAL + BANNER + PILARES EXPANDIBLES
     ------------------------------------------------------------------------ */
  function renderIdentidad() {
    const el = document.getElementById("view-identidad");
    const idData = DATA.identidad;

    el.innerHTML = `
      <div class="eyebrow-tag">Capítulo Editorial • Fundamentos de la Consultora</div>
      <h1 class="display-heading">Manifiesto y Arquitectura de <span class="gradient-span">GobernanzA Inteligente</span></h1>
      <p class="lead-paragraph">Un análisis integral sobre por qué las organizaciones mexicanas necesitan transitar del soporte reactivo hacia un modelo auditable de ciberseguridad y gobierno de TI.</p>

      <!-- Maquetación Revista Editorial de 2 Columnas Asimétricas -->
      <div class="editorial-split">
        <div class="editorial-sticky">
          <span class="badge badge--info">Introducción Ejecutiva</span>
          <blockquote class="pull-quote">
            “Convertimos el cumplimiento normativo y la protección de activos críticos en confianza digital verificable y rentabilidad sostenible.”
          </blockquote>
          <div style="margin-top:24px; padding-top:18px; border-top:1px solid var(--border-subtle); font-size:0.82rem; color:var(--text-muted);">
            <div><strong style="color:var(--text-primary);">Ciclo de intervención:</strong> 15 semanas controladas</div>
            <div style="margin-top:4px;"><strong style="color:var(--text-primary);">Procesos integrados:</strong> GI_DIAG_01 • GI_RIES_02 • GI_NORM_03 • GI_CAPA_04</div>
          </div>
        </div>

        <div class="magazine-columns">
          ${idData.introduccion.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
        </div>
      </div>

      <!-- Banner Manifiesto de Ancho Completo (Misión | Visión) -->
      <div class="manifesto-banner">
        <div>
          <div class="eyebrow-tag">Nuestra Razón de Ser</div>
          <h2 style="font-family:var(--font-display); font-size:1.65rem; margin-bottom:12px;">Misión Corporativa</h2>
          <p style="font-size:0.96rem; color:var(--text-secondary); line-height:1.8;">${escapeHtml(idData.mision)}</p>
        </div>
        <div class="manifesto-divider"></div>
        <div>
          <div class="eyebrow-tag">Horizonte 2028</div>
          <h2 style="font-family:var(--font-display); font-size:1.65rem; margin-bottom:12px;">Visión Estratégica</h2>
          <p style="font-size:0.96rem; color:var(--text-secondary); line-height:1.8;">${escapeHtml(idData.vision)}</p>
        </div>
      </div>

      <!-- Pilares Horizontales Interactivos para los 5 Valores -->
      <div style="margin-bottom:16px;">
        <div class="eyebrow-tag">ADN Ético y Técnico</div>
        <h2 style="font-family:var(--font-display); font-size:1.65rem;">Cinco Valores que Rigen Cada Auditoría</h2>
      </div>
      <div class="values-pillars" id="valuesPillars">
        ${idData.valores.map((v, idx) => `
          <div class="value-pillar ${state.activeValueIdx === idx ? 'expanded' : ''}" data-val-idx="${idx}">
            <div style="font-family:var(--font-mono); font-size:0.76rem; color:var(--accent-primary); font-weight:700;">0${idx + 1}</div>
            <div>
              <h3 style="font-family:var(--font-display); font-size:1.12rem; margin:10px 0 8px;">${escapeHtml(v.titulo)}</h3>
              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${escapeHtml(v.detalle)}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Objetivo General y Específicos como Secuencia Numerada Limpia -->
      <div style="margin-bottom:44px;">
        <div class="eyebrow-tag">Propósito del Servicio de TI</div>
        <h2 style="font-family:var(--font-display); font-size:1.65rem; margin-bottom:14px;">Objetivo General y Objetivos Específicos</h2>
        <p class="text-justify" style="font-size:1.02rem; color:var(--text-primary); padding:20px 24px; border-left:4px solid var(--accent-primary); background:var(--bg-subtle); border-radius:0 var(--radius-md) var(--radius-md) 0; margin-bottom:22px;">
          ${escapeHtml(idData.objetivoGeneral)}
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:18px;">
          ${idData.objetivosEspecificos.map((obj, i) => `
            <div style="padding:14px 4px; border-top:1px solid var(--border-strong);">
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-primary); font-weight:700;">OBJETIVO ESPECÍFICO 0${i + 1}</span>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:6px;">${escapeHtml(obj)}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Libro Mayor Bipartito: Alcance Incluido vs Exclusiones Estrictas -->
      <div style="margin-bottom:16px;">
        <div class="eyebrow-tag">Frontera Contractual en la República Mexicana</div>
        <h2 style="font-family:var(--font-display); font-size:1.65rem;">Delimitación de Alcance y Exclusiones</h2>
      </div>
      <div class="scope-ledger">
        <div class="scope-ledger__col scope-ledger__col--in">
          <span class="badge badge--low" style="margin-bottom:12px;">✓ Dentro del Alcance Consultivo</span>
          <h3 style="font-family:var(--font-display); font-size:1.25rem; margin-bottom:14px;">Lo que GobernanzA Inteligente Entrega</h3>
          ${idData.descripcionServicio.incluye.map(item => `
            <div class="ledger-row">
              <strong style="color:var(--status-low);">✓</strong>
              <span>${escapeHtml(item)}</span>
            </div>
          `).join("")}
        </div>
        <div class="scope-ledger__col scope-ledger__col--out">
          <span class="badge badge--critical" style="margin-bottom:12px;">✕ Exclusiones Estrictas</span>
          <h3 style="font-family:var(--font-display); font-size:1.25rem; margin-bottom:14px;">Actividades Excluidas por Independencia</h3>
          ${idData.descripcionServicio.excluye.map(item => `
            <div class="ledger-row">
              <strong style="color:var(--status-critical);">✕</strong>
              <span>${escapeHtml(item)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    el.querySelectorAll("[data-val-idx]").forEach(pil => {
      pil.addEventListener("mouseenter", () => {
        state.activeValueIdx = Number(pil.getAttribute("data-val-idx"));
        el.querySelectorAll("[data-val-idx]").forEach((p, idx) => p.classList.toggle("expanded", idx === state.activeValueIdx));
      });
    });
  }

  /* ------------------------------------------------------------------------
     DISEÑO 03: PUENTE INTERACTIVO BSC ↔ COBIT 2019 (SPOTLIGHT STAGE)
     ------------------------------------------------------------------------ */
  function renderBSC() {
    const el = document.getElementById("view-bsc");
    const activeRow = DATA.bsc[state.activeBscIdx] || DATA.bsc[0];
    const gaugePcts = [85, 92, 100, 75];
    const pct = gaugePcts[state.activeBscIdx] || 85;
    const dashOffset = Math.round(251.2 * (1 - pct / 100));

    el.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:16px;">
        <div>
          <div class="eyebrow-tag">Balanced Scorecard & COBIT 2019</div>
          <h1 class="display-heading">Puente de Alineación <span class="gradient-span">Corporativa ↔ TI</span></h1>
          <p class="lead-paragraph">Selecciona cualquiera de las 4 perspectivas del Balanced Scorecard para explorar cómo su Meta Corporativa (EG) se traduce directamente en una Meta de Alineamiento de TI (AG).</p>
        </div>
        <button class="btn" id="toggleFullBscBtn">
          ${state.showFullBscMatrix ? "Ocultar tabla comparativa" : "Ver matriz consolidada de las 4 dimensiones"}
        </button>
      </div>

      <!-- Cinta Interactiva de las 4 Perspectivas -->
      <div class="bsc-selector-strip">
        ${DATA.bsc.map((r, i) => `
          <button class="bsc-dim-pill ${state.activeBscIdx === i ? 'active' : ''}" data-bsc-idx="${i}" style="${state.activeBscIdx === i ? `border-color:${r.color};` : ''}">
            <div style="font-family:var(--font-mono); font-size:0.7rem; color:${r.color}; font-weight:700;">PERSPECTIVA 0${i + 1}</div>
            <div style="font-family:var(--font-display); font-size:1.05rem; font-weight:600; margin-top:4px;">${escapeHtml(r.dimension)}</div>
            <div style="font-size:0.76rem; color:var(--text-muted); margin-top:4px;">${escapeHtml(r.metaCorporativa.metaValor)}</div>
          </button>
        `).join("")}
      </div>

      <!-- Escenario Spotlight: Ala Corporativa ↔ Puente COBIT ↔ Ala de TI -->
      <div class="bsc-bridge-stage">
        <div class="bsc-wing" style="border-top: 4px solid ${activeRow.color};">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:14px; margin-bottom:16px;">
            <div>
              <span class="badge badge--info">META CORPORATIVA (${escapeHtml(activeRow.metaCorporativa.id)})</span>
              <div style="font-size:0.76rem; color:var(--text-muted); margin-top:6px;">${escapeHtml(activeRow.metaCorporativa.cobitEG)}</div>
            </div>
            <svg width="78" height="78" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border-subtle)" stroke-width="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="${activeRow.color}" stroke-width="8" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="${dashOffset}" transform="rotate(-90 50 50)" />
              <text x="50" y="54" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="13" font-weight="700">${escapeHtml(activeRow.metaCorporativa.id)}</text>
            </svg>
          </div>
          <h2 style="font-family:var(--font-display); font-size:1.32rem; line-height:1.35; margin-bottom:16px;">
            ${escapeHtml(activeRow.metaCorporativa.enunciado)}
          </h2>
          <div style="padding-top:14px; border-top:1px solid var(--border-subtle); font-size:0.84rem;">
            <strong style="color:${activeRow.color};">KPI Corporativo:</strong> ${escapeHtml(activeRow.metaCorporativa.kpi)}
            <div style="margin-top:6px;"><span class="badge badge--low">Meta: ${escapeHtml(activeRow.metaCorporativa.metaValor)}</span></div>
          </div>
        </div>

        <div class="bsc-connector-hub">
          <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--accent-primary); font-weight:700;">CASCADA COBIT</div>
          <div style="width:54px; height:54px; border-radius:50%; background:var(--bg-banner); border:1px solid var(--border-accent); display:grid; place-items:center; font-weight:800;">⇄</div>
          <div style="font-size:0.74rem; color:var(--text-muted);">EG → AG → Objetivos</div>
        </div>

        <div class="bsc-wing" style="border-top: 4px solid var(--accent-secondary);">
          <div style="margin-bottom:16px;">
            <span class="badge badge--purple">META DE TI / ALINEAMIENTO (${escapeHtml(activeRow.metaTI.id)})</span>
            <div style="font-size:0.76rem; color:var(--text-muted); margin-top:6px;">${escapeHtml(activeRow.metaTI.cobitAG)}</div>
          </div>
          <h2 style="font-family:var(--font-display); font-size:1.26rem; line-height:1.38; margin-bottom:16px;">
            ${escapeHtml(activeRow.metaTI.enunciado)}
          </h2>
          <div style="padding-top:14px; border-top:1px solid var(--border-subtle); font-size:0.84rem;">
            <strong style="color:var(--accent-secondary);">KPI de TI Habilitador:</strong> ${escapeHtml(activeRow.metaTI.kpi)}
            <div style="margin-top:6px;"><span class="badge badge--purple">Umbral: ${escapeHtml(activeRow.metaTI.metaValor)}</span></div>
          </div>
        </div>
      </div>

      <!-- Justificación Ejecutiva de la Dimensión Seleccionada -->
      <div style="padding:24px 30px; border-radius:var(--radius-lg); background:var(--bg-surface); border-left:4px solid ${activeRow.color}; margin-bottom:28px;">
        <div style="font-family:var(--font-mono); font-size:0.73rem; color:${activeRow.color}; font-weight:700; margin-bottom:6px;">JUSTIFICACIÓN ESTRATÉGICA • DIMENSIÓN ${escapeHtml(activeRow.dimension.toUpperCase())}</div>
        <p class="text-justify" style="font-size:0.95rem; color:var(--text-secondary); line-height:1.75;">${escapeHtml(activeRow.justificacion)}</p>
      </div>

      ${state.showFullBscMatrix ? `
        <div class="table-wrap" style="margin-top:20px;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Dimensión BSC</th>
                <th>Meta Corporativa (EG)</th>
                <th>Meta de TI (AG)</th>
                <th>Umbrales</th>
              </tr>
            </thead>
            <tbody>
              ${DATA.bsc.map(row => `
                <tr>
                  <td><strong>${escapeHtml(row.dimension)}</strong></td>
                  <td><code class="mono-id">${row.metaCorporativa.id}</code> ${escapeHtml(row.metaCorporativa.enunciado)}</td>
                  <td><code class="mono-id">${row.metaTI.id}</code> ${escapeHtml(row.metaTI.enunciado)}</td>
                  <td><span class="badge badge--low">${escapeHtml(row.metaCorporativa.metaValor)}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      ` : ""}
    `;

    el.querySelectorAll("[data-bsc-idx]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeBscIdx = Number(btn.getAttribute("data-bsc-idx"));
        renderBSC();
      });
    });

    document.getElementById("toggleFullBscBtn")?.addEventListener("click", () => {
      state.showFullBscMatrix = !state.showFullBscMatrix;
      renderBSC();
    });
  }

  /* ------------------------------------------------------------------------
     DISEÑO 04: CASCADA DE METAS COBIT 2019 (ESTUDIO DE MATRIZ INTERACTIVA)
     ------------------------------------------------------------------------ */
  function renderCascada() {
    const el = document.getElementById("view-cascada");
    const filteredRows = DATA.cascadaMetas.filter(r => {
      if (state.cascadeDim !== "ALL" && r.dim !== state.cascadeDim) return false;
      if (state.cascadeMode === "CORP" && !r.corp) return false;
      if (state.selectedCobitCol && !r.rel[state.selectedCobitCol]) return false;
      return true;
    });

    el.innerHTML = `
      <div class="eyebrow-tag">Práctica 1 • Trazabilidad COBIT 2019</div>
      <h1 class="display-heading">Matriz de Cascada <span class="gradient-span">20 Metas × 19 Objetivos</span></h1>
      <p class="lead-paragraph" style="margin-bottom:24px;">Haz clic en cualquier código vertical COBIT (EDM, APO, BAI, DSS) para aislar al instante qué metas financieras, de cliente, procesos o aprendizaje soporta.</p>

      <div class="floating-toolbar">
        <select class="select-control" id="cascadeDimSelect">
          <option value="ALL" ${state.cascadeDim === "ALL" ? "selected" : ""}>Todas las Dimensiones (20)</option>
          <option value="FINANCIERA" ${state.cascadeDim === "FINANCIERA" ? "selected" : ""}>Financiera (F1–F5)</option>
          <option value="CLIENTE / USUARIO" ${state.cascadeDim === "CLIENTE / USUARIO" ? "selected" : ""}>Cliente / Usuario (C1–C5)</option>
          <option value="PROCESOS INTERNOS" ${state.cascadeDim === "PROCESOS INTERNOS" ? "selected" : ""}>Procesos Internos (P1–P5)</option>
          <option value="APRENDIZAJE Y CRECIMIENTO" ${state.cascadeDim === "APRENDIZAJE Y CRECIMIENTO" ? "selected" : ""}>Aprendizaje y Crecimiento (A1–A5)</option>
        </select>

        <select class="select-control" id="cascadeModeSelect">
          <option value="ALL" ${state.cascadeMode === "ALL" ? "selected" : ""}>Relaciones Primarias (P) y Secundarias (S)</option>
          <option value="P_ONLY" ${state.cascadeMode === "P_ONLY" ? "selected" : ""}>Destacar sólo Primarias (P)</option>
          <option value="CORP" ${state.cascadeMode === "CORP" ? "selected" : ""}>Sólo Metas Corporativas Ancla</option>
        </select>

        ${state.selectedCobitCol ? `
          <button class="btn" id="clearCobitColBtn">
            Objetivo activo: <strong>${state.selectedCobitCol}</strong> — ${escapeHtml(DATA.cobitNames[state.selectedCobitCol])} ✕
          </button>
        ` : `
          <div style="margin-left:auto; display:flex; gap:12px; font-size:0.78rem;">
            <span><span class="badge cascade-cell--P">P</span> Primaria</span>
            <span><span class="badge cascade-cell--S">S</span> Secundaria</span>
          </div>
        `}
      </div>

      <div class="table-wrap">
        <table class="data-table cascade-table">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th style="min-width:260px;">Meta Estratégica</th>
              <th style="min-width:170px;">KPI</th>
              ${DATA.cobitColumns.map(col => `
                <th class="cobit-col" title="${escapeHtml(col + ': ' + DATA.cobitNames[col])}" data-cobit-col="${col}" style="cursor:pointer; ${state.selectedCobitCol === col ? 'color:var(--accent-primary); background:var(--accent-primary-soft);' : ''}">
                  ${col}
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody>
            ${filteredRows.map(row => `
              <tr>
                <td><span class="badge badge--neutral" style="font-size:0.65rem;">${escapeHtml(row.dim)}</span></td>
                <td>
                  ${row.corp ? '<span class="badge badge--info" style="margin-right:5px;">CORP</span>' : ''}
                  <strong>${escapeHtml(row.meta)}</strong>
                </td>
                <td style="font-size:0.79rem; color:var(--text-secondary);">${escapeHtml(row.kpi)}</td>
                ${DATA.cobitColumns.map(col => {
                  const val = row.rel[col] || "";
                  if (!val) return `<td class="cascade-cell"></td>`;
                  if (state.cascadeMode === "P_ONLY" && val === "S") {
                    return `<td class="cascade-cell" style="opacity:0.2;">S</td>`;
                  }
                  return `<td class="cascade-cell cascade-cell--${val}" title="${row.id} → ${col}: ${DATA.cobitNames[col]}">${val}</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("cascadeDimSelect")?.addEventListener("change", e => {
      state.cascadeDim = e.target.value;
      renderCascada();
    });
    document.getElementById("cascadeModeSelect")?.addEventListener("change", e => {
      state.cascadeMode = e.target.value;
      renderCascada();
    });
    document.getElementById("clearCobitColBtn")?.addEventListener("click", () => {
      state.selectedCobitCol = null;
      renderCascada();
    });
    el.querySelectorAll("[data-cobit-col]").forEach(th => {
      th.addEventListener("click", () => {
        const col = th.getAttribute("data-cobit-col");
        state.selectedCobitCol = state.selectedCobitCol === col ? null : col;
        renderCascada();
      });
    });
  }

  /* ------------------------------------------------------------------------
     DISEÑO 05: MAPA ESTRATÉGICO CON CORRIENTES CAUSALES SVG ANIMADAS
     ------------------------------------------------------------------------ */
  function getConnectedNodes(nodeId) {
    const connected = new Set([nodeId]);
    (DATA.mapaEnlaces[nodeId] || []).forEach(t => connected.add(t));
    Object.entries(DATA.mapaEnlaces).forEach(([src, targets]) => {
      if (targets.includes(nodeId)) connected.add(src);
    });
    return connected;
  }

  function drawStratMapArrows() {
    const stage = document.getElementById("stratMapStage");
    const svg = document.getElementById("stratMapSvg");
    if (!stage || !svg || state.currentModule !== "mapa") return;

    const stageRect = stage.getBoundingClientRect();
    if (stageRect.width < 100) return;

    svg.setAttribute("viewBox", `0 0 ${Math.round(stageRect.width)} ${Math.round(stageRect.height)}`);

    const paths = [];
    Object.entries(DATA.mapaEnlaces).forEach(([srcId, targets]) => {
      const srcEl = stage.querySelector(`[data-map-node="${srcId}"]`);
      if (!srcEl) return;
      const r1 = srcEl.getBoundingClientRect();
      const x1 = r1.left - stageRect.left + r1.width / 2;
      const y1 = r1.top - stageRect.top;

      targets.forEach(tgtId => {
        const tgtEl = stage.querySelector(`[data-map-node="${tgtId}"]`);
        if (!tgtEl) return;
        const r2 = tgtEl.getBoundingClientRect();
        const x2 = r2.left - stageRect.left + r2.width / 2;
        const y2 = r2.top - stageRect.top + r2.height;

        const isActive = state.selectedMapNode && (state.selectedMapNode === srcId || state.selectedMapNode === tgtId);
        const opacity = state.selectedMapNode ? (isActive ? "0.95" : "0.06") : "0.26";
        const stroke = isActive ? "var(--accent-primary)" : "var(--text-muted)";
        const width = isActive ? "2.6" : "1.3";
        const cls = isActive ? "causal-stream-active" : "";
        const marker = isActive ? "url(#arrowActive)" : "url(#arrowMuted)";

        const midY = (y1 + y2) / 2;
        const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${x1.toFixed(1)} ${midY.toFixed(1)}, ${x2.toFixed(1)} ${midY.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
        paths.push(`<path class="${cls}" d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-opacity="${opacity}" marker-end="${marker}" />`);
      });
    });

    svg.innerHTML = `
      <defs>
        <marker id="arrowMuted" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="var(--text-muted)" opacity="0.5" />
        </marker>
        <marker id="arrowActive" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="var(--accent-primary)" />
        </marker>
      </defs>
      ${paths.join("")}
    `;
  }

  function renderMapa() {
    const el = document.getElementById("view-mapa");
    const lanes = [
      { key: "FINANCIERA", color: "#22d3ee", label: "Dimensión Financiera" },
      { key: "CLIENTE / USUARIO", color: "#34d399", label: "Dimensión del Cliente / Usuario" },
      { key: "PROCESOS INTERNOS", color: "#fbbf24", label: "Dimensión de Procesos Internos" },
      { key: "APRENDIZAJE Y CRECIMIENTO", color: "#818cf8", label: "Dimensión de Aprendizaje y Crecimiento" }
    ];

    const connectedSet = state.selectedMapNode ? getConnectedNodes(state.selectedMapNode) : null;
    const selectedObj = state.selectedMapNode ? DATA.cascadaMetas.find(m => m.id === state.selectedMapNode) : null;

    el.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:16px; margin-bottom:22px;">
        <div>
          <div class="eyebrow-tag">Práctica 2 • Lienzo Causa-Efecto Vivo</div>
          <h1 class="display-heading">Mapa Estratégico <span class="gradient-span">Multicapa</span></h1>
          <p class="lead-paragraph">Toca cualquier objetivo para encender el flujo animado de causa-efecto entre capas.</p>
        </div>

        <div class="tabs-pill-bar" style="margin-bottom:0;">
          <button class="tab-pill ${state.stratMapMode === 'ALL' ? 'active' : ''}" data-map-mode="ALL">20 Metas Completas</button>
          <button class="tab-pill ${state.stratMapMode === 'DUAL_COBIT' ? 'active' : ''}" data-map-mode="DUAL_COBIT">1 Corp. + 1 TI por Capa</button>
        </div>
      </div>

      ${selectedObj ? `
        <div class="floating-toolbar" style="justify-content:space-between; border-color:var(--accent-primary);">
          <div style="font-size:0.86rem;">
            <code class="mono-id">${selectedObj.id}</code> <strong>${escapeHtml(selectedObj.meta)}</strong>
            <span style="color:var(--text-secondary); margin-left:10px;">Impulsa a: <strong>${(DATA.mapaEnlaces[selectedObj.id] || []).join(", ") || "Cumbre Financiera F1"}</strong></span>
          </div>
          <button class="btn" id="resetMapNodeBtn" style="padding:6px 14px;">Restablecer vista ✕</button>
        </div>
      ` : ""}

      <div class="strat-map-stage" id="stratMapStage">
        <svg class="strat-map-svg-overlay" id="stratMapSvg" aria-hidden="true"></svg>
        ${lanes.map(lane => {
          let items = DATA.cascadaMetas.filter(m => m.dim === lane.key);
          if (state.stratMapMode === "DUAL_COBIT") {
            const allowed = DATA.mapaSeleccionDual[lane.key] || [];
            items = items.filter(m => allowed.includes(m.id));
          }
          return `
            <div class="strat-map-lane" style="border-left: 4px solid ${lane.color};">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <span style="font-family:var(--font-display); font-weight:600; font-size:0.9rem; color:${lane.color}; text-transform:uppercase; letter-spacing:0.06em;">${escapeHtml(lane.label)}</span>
                <span class="badge badge--neutral">${items.length} nodos</span>
              </div>
              <div class="strat-nodes-row">
                ${items.map(item => {
                  const primaryCobit = Object.entries(item.rel).filter(([,v]) => v === "P").map(([k]) => k).join(" · ");
                  const isSelected = state.selectedMapNode === item.id;
                  const isConnected = connectedSet ? connectedSet.has(item.id) : true;
                  const stateCls = isSelected ? "highlighted" : (!isConnected ? "dimmed" : "");
                  return `
                    <div class="strat-node ${item.corp ? 'strat-node--corp' : ''} ${stateCls}" data-map-node="${item.id}">
                      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="font-family:var(--font-mono); font-size:0.68rem; font-weight:700; color:${item.corp ? 'var(--accent-primary)' : 'var(--text-muted)'};">
                          ${item.corp ? "★ META CORPORATIVA" : "META TI / SOPORTE"}
                        </span>
                        <code class="mono-id">${item.id}</code>
                      </div>
                      <div style="font-weight:700; font-size:0.85rem; line-height:1.38; margin-bottom:10px;">${escapeHtml(item.meta)}</div>
                      <div style="font-size:0.74rem; color:var(--text-muted); border-top:1px dashed var(--border-subtle); padding-top:7px;">
                        <div>KPI: ${escapeHtml(item.kpi)}</div>
                        <div style="color:var(--accent-primary); font-family:var(--font-mono); margin-top:2px;">COBIT: ${escapeHtml(primaryCobit)}</div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    el.querySelectorAll("[data-map-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.stratMapMode = btn.getAttribute("data-map-mode");
        state.selectedMapNode = null;
        renderMapa();
      });
    });

    el.querySelectorAll("[data-map-node]").forEach(node => {
      node.addEventListener("click", () => {
        const id = node.getAttribute("data-map-node");
        state.selectedMapNode = state.selectedMapNode === id ? null : id;
        renderMapa();
      });
    });

    document.getElementById("resetMapNodeBtn")?.addEventListener("click", () => {
      state.selectedMapNode = null;
      renderMapa();
    });

    requestAnimationFrame(drawStratMapArrows);
  }

  /* ------------------------------------------------------------------------
     DISEÑO 06: CASO DE NEGOCIO — CABECERA OFICIAL, TIMELINE VERTICAL Y FINANZAS
     ------------------------------------------------------------------------ */
  function renderCasoNegocio() {
    const el = document.getElementById("view-caso-negocio");
    const cn = DATA.casoNegocio;

    el.innerHTML = `
      <div class="eyebrow-tag">Prácticas 3 y 4 • Formato Institucional IPN (Secciones 1 a 11)</div>
      <h1 class="display-heading">Caso de Negocio y <span class="gradient-span">Viabilidad Económica</span></h1>

      <!-- Cabecera Documento Ejecutivo -->
      <div class="doc-masthead">
        <div>
          <span class="badge badge--info">Elaboración: ${escapeHtml(cn.fechaElaboracion)}</span>
          <h2 style="font-family:var(--font-display); font-size:1.45rem; margin-top:8px;">${escapeHtml(DATA.meta.servicio)}</h2>
          <p style="font-size:0.86rem; color:var(--text-secondary);">Responsables: Sánchez Velasco Diego • López Reyes Luis Daniel • Escalona Zúñiga Juan Carlos</p>
        </div>
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
          <div>
            <div style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">CLAVE OFICIAL</div>
            <code class="mono-id" style="font-size:0.95rem;">${escapeHtml(DATA.meta.claveServicio)}</code>
          </div>
          <div>
            <div style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">DEPENDENCIA PROYECTOS</div>
            <span class="badge badge--low">NO (Independiente)</span>
          </div>
        </div>
      </div>

      <!-- Antecedentes y Pilares en Flujo Abierto -->
      <div class="editorial-split" style="margin-top:0;">
        <div>
          <div class="eyebrow-tag">Secciones 2 y 8</div>
          <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-bottom:14px;">Antecedentes y Beneficios Esperados</h3>
          ${cn.antecedentes.map(p => `<p class="text-justify" style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">${escapeHtml(p)}</p>`).join("")}
        </div>
        <div>
          <div class="eyebrow-tag">Sección 3 • Justificación Técnica</div>
          <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-bottom:14px;">Tres Dominios Normativos Integrados</h3>
          ${cn.pilaresTecnicos.map((pil, idx) => `
            <div style="padding:16px 0; border-bottom:1px solid var(--border-subtle);">
              <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--accent-primary); font-weight:700;">DOMINIO 0${idx + 1}</div>
              <strong style="font-size:0.98rem; display:block; margin:4px 0;">${escapeHtml(pil.dominio)}</strong>
              <p style="font-size:0.86rem; color:var(--text-secondary);">${escapeHtml(pil.detalle)}</p>
            </div>
          `).join("")}
          <div style="margin-top:18px; display:grid; gap:8px;">
            ${cn.beneficiosEsperados.map(b => `<div style="font-size:0.85rem; color:var(--status-low);">✦ <span style="color:var(--text-primary);">${escapeHtml(b)}</span></div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Línea de Tiempo Vertical de 15 Semanas (Sección 9) -->
      <div class="eyebrow-tag">Sección 9 • Planeación de Alto Nivel (PMBOK)</div>
      <h2 style="font-family:var(--font-display); font-size:1.65rem;">Ruta Crítica de 15 Semanas (24 Ago – 04 Dic 2026)</h2>
      <div class="vertical-roadmap">
        ${cn.cronograma15Semanas.map(g => `
          <div class="roadmap-milestone">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:6px;">
              <span style="font-family:var(--font-mono); font-size:0.78rem; color:var(--accent-primary); font-weight:700;">${escapeHtml(g.fase)} • ${escapeHtml(g.semanas)}</span>
              <span class="badge badge--neutral">${escapeHtml(g.inicio)} → ${escapeHtml(g.fin)}</span>
            </div>
            <h3 style="font-family:var(--font-display); font-size:1.15rem; margin-bottom:6px;">${escapeHtml(g.nombre)}</h3>
            <p style="font-size:0.86rem; color:var(--text-secondary);"><strong>Entregable auditable:</strong> ${escapeHtml(g.entregable)}</p>
          </div>
        `).join("")}
      </div>

      <!-- Visualización Financiera Proporcional (Sección 10) -->
      <div style="padding:34px; border-radius:var(--radius-xl); background:var(--bg-banner); border:1px solid var(--border-strong); margin-bottom:44px;">
        <div class="eyebrow-tag">Sección 10 • Evaluación Económica y Estudio de Mercado</div>
        <h2 style="font-family:var(--font-display); font-size:1.6rem; margin-bottom:10px;">Estructura Costo–Beneficio por Proyecto Base ($485,000 MXN)</h2>
        <p class="text-justify" style="font-size:0.9rem; color:var(--text-secondary); max-width:920px;">${escapeHtml(cn.economia.estudioMercado)}</p>

        <div class="finance-visual-bar">
          <div style="width:64.4%; background:var(--accent-secondary); color:#fff; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:0.76rem; font-weight:700;">
            Costos Directos: $312,500 MXN (64.4%)
          </div>
          <div style="width:35.6%; background:var(--accent-emerald); color:#042f2e; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:0.76rem; font-weight:800;">
            Utilidad Bruta: $172,500 MXN (35.5%)
          </div>
        </div>
        <div style="font-size:0.82rem; color:var(--text-secondary);">
          <strong>Mantenimiento / Operación / Adquisiciones del cliente (10.2–10.4):</strong> <code>N/A</code> — Intervención consultiva pura de 15 semanas sin dependencia de licenciamiento cautivo.
        </div>
      </div>

      <!-- Tablas Limpias: Riesgos Clave (6), Indicadores (7) y Personal (9.3) -->
      <div style="display:grid; gap:32px; margin-bottom:44px;">
        <div>
          <h3 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:12px;">6. Riesgos Clave y 7. Indicadores Maestros</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Indicador (KPI)</th><th>Dimensión</th><th>Fórmula de Medición y Meta</th></tr></thead>
              <tbody>
                ${cn.indicadores.map(ind => `
                  <tr>
                    <td><strong>${escapeHtml(ind.nombre)}</strong></td>
                    <td><span class="badge badge--info">${escapeHtml(ind.tipo)}</span></td>
                    <td><code class="mono-id" style="white-space:normal;">${escapeHtml(ind.formula)}</code></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:12px;">9.3 Plantilla de Personal Involucrado</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Perfil Especializado</th><th>Titular</th><th>Cant.</th><th>Esquema de Contratación</th></tr></thead>
              <tbody>
                ${cn.personalInvolucrado.map(p => `
                  <tr>
                    <td><strong>${escapeHtml(p.perfil)}</strong></td>
                    <td>${escapeHtml(p.titular)}</td>
                    <td><code class="mono-id">${p.numero}</code></td>
                    <td>${escapeHtml(p.contratacion)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Glosario Técnico en Formato Diccionario a Dos Columnas -->
      <div class="eyebrow-tag">Sección 11</div>
      <h3 style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:12px;">Glosario Técnico Oficial</h3>
      <div class="glossary-accordion">
        ${cn.glosario.map(g => `
          <div class="glossary-item">
            <code class="mono-id">${escapeHtml(g.concepto)}</code>
            <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:6px;">${escapeHtml(g.descripcion)}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     DISEÑO 07: CÉDULA ITIL V.4 — PIPELINE CHEVRON, DIALES SLA Y ESCALERA N1-N3
     ------------------------------------------------------------------------ */
  function renderCedulaITIL() {
    const el = document.getElementById("view-cedula-itil");
    const itil = DATA.cedulaITIL;
    const dialLabels = ["99.9%", "<=2h", "4 hrs", "0.95", "92%"];

    el.innerHTML = `
      <div class="eyebrow-tag">Unidad Temática III • Práctica 5 — Diseño de Servicio ITIL V.4</div>
      <h1 class="display-heading">Cédula Maestra del <span class="gradient-span">Servicio de TI</span></h1>
      <p class="lead-paragraph" style="margin-bottom:28px;">Co-creación de valor bajo ITIL V.4 e ISO/IEC 20000-1 para el servicio <code>${escapeHtml(itil.identificacion.idServicio)}</code>.</p>

      <!-- Pasaporte Dual de Valor: Utilidad + Garantía -->
      <div class="manifesto-banner" style="margin-bottom:38px;">
        <div>
          <span class="badge badge--info" style="margin-bottom:10px;">UTILIDAD • FIT FOR PURPOSE</span>
          <h2 style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:8px;">¿Qué recibe la organización cliente?</h2>
          <p style="font-size:0.92rem; color:var(--text-secondary);">${escapeHtml(itil.propuestaValor.utilidad)}</p>
        </div>
        <div class="manifesto-divider"></div>
        <div>
          <span class="badge badge--low" style="margin-bottom:10px;">GARANTÍA • FIT FOR USE</span>
          <h2 style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:8px;">¿Cómo se asegura la operación?</h2>
          <p style="font-size:0.92rem; color:var(--text-secondary);">${escapeHtml(itil.propuestaValor.garantia)}</p>
        </div>
      </div>

      <!-- Flujo Pipeline Chevron de los 4 Paquetes del Servicio -->
      <div class="eyebrow-tag">Arquitectura Modular de Entrega</div>
      <h2 style="font-family:var(--font-display); font-size:1.55rem;">Pipeline de los 4 Paquetes Consultivos</h2>
      <div class="pipeline-steps">
        ${itil.paquetesServicio.map(p => `
          <div class="pipeline-step">
            <code class="mono-id">${escapeHtml(p.codigo)}</code>
            <h3 style="font-family:var(--font-display); font-size:1.05rem; margin:10px 0 4px;">${escapeHtml(p.nombre)}</h3>
            <div style="font-size:0.75rem; font-weight:700; color:var(--accent-primary); margin-bottom:8px;">${escapeHtml(p.duracion)}</div>
            <p style="font-size:0.82rem; color:var(--text-secondary);">${escapeHtml(p.entregables)}</p>
          </div>
        `).join("")}
      </div>

      <!-- Diales Visuales de Acuerdos de Nivel de Servicio (SLA) -->
      <div class="eyebrow-tag">Compromisos Cuantitativos APO09 / ISO 20000-1</div>
      <h2 style="font-family:var(--font-display); font-size:1.55rem; margin-bottom:18px;">Tablero de Acuerdos de Nivel de Servicio (SLA)</h2>
      <div class="sla-rings-strip">
        ${itil.slas.map((s, idx) => `
          <div class="sla-dial">
            <div style="width:58px; height:58px; border-radius:50%; border:3px solid var(--accent-primary); display:grid; place-items:center; font-family:var(--font-mono); font-size:0.78rem; font-weight:800; color:var(--accent-primary); flex-shrink:0;">
              ${dialLabels[idx]}
            </div>
            <div>
              <strong style="font-size:0.86rem; display:block; line-height:1.3;">${escapeHtml(s.metrica)}</strong>
              <span style="font-size:0.76rem; color:var(--text-muted); display:block; margin-top:3px;">${escapeHtml(s.ventana)}</span>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Escalera Funcional de Soporte N1 → N2 → N3 + OLAs/UCs -->
      <div class="editorial-split" style="margin-bottom:0;">
        <div>
          <div class="eyebrow-tag">Gobierno Interno y Proveedores</div>
          <h3 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:14px;">Acuerdos Operativos (OLA) y Contratos (UC)</h3>
          <div style="display:grid; gap:14px;">
            ${itil.olasUcs.map(o => `
              <div style="padding-bottom:14px; border-bottom:1px solid var(--border-subtle);">
                <code class="mono-id">${escapeHtml(o.tipo)}</code>
                <div style="font-weight:700; font-size:0.88rem; margin:6px 0 3px;">${escapeHtml(o.partes)}</div>
                <p style="font-size:0.83rem; color:var(--text-secondary);">${escapeHtml(o.compromiso)}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div>
          <div class="eyebrow-tag">Respuesta ante Incidentes o Consultas</div>
          <h3 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:14px;">Escalera Funcional de Escalamiento</h3>
          <div class="escalation-staircase">
            ${itil.escalamiento.map((e, i) => `
              <div class="stair-level stair-level--${i + 1}">
                <div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <strong>${escapeHtml(e.nivel)}</strong>
                  <span class="badge badge--neutral">${escapeHtml(e.tiempo)}</span>
                </div>
                <div style="font-size:0.82rem; color:var(--accent-primary); font-weight:700; margin:4px 0;">Responsable: ${escapeHtml(e.responsable)}</div>
                <p style="font-size:0.82rem; color:var(--text-secondary);">${escapeHtml(e.alcance)}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     DISEÑO 08: CONSTELACIÓN INMERSIVA DE ACTIVOS (NCh-ISO 27001:2013 - A.8)
     ------------------------------------------------------------------------ */
  function buildAssetNetworkSvg() {
    const nodes = DATA.activos;
    const width = 1040;
    const height = 360;
    const cx = width / 2;
    const cy = height / 2;
    const rx = 430;
    const ry = 136;

    const coords = {};
    nodes.forEach((n, idx) => {
      const angle = (2 * Math.PI * idx) / nodes.length - Math.PI / 2;
      coords[n.id] = {
        x: Math.round(cx + rx * Math.cos(angle)),
        y: Math.round(cy + ry * Math.sin(angle))
      };
    });

    const lines = [];
    const seenPairs = new Set();
    nodes.forEach(n => {
      n.relacionados.forEach(targetId => {
        const key = [n.id, targetId].sort().join("--");
        if (!seenPairs.has(key) && coords[targetId]) {
          seenPairs.add(key);
          const p1 = coords[n.id];
          const p2 = coords[targetId];
          lines.push(`<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="var(--accent-primary)" stroke-opacity="0.28" stroke-width="1.5" stroke-dasharray="4 4" />`);
        }
      });
    });

    const circles = nodes.map(n => {
      const p = coords[n.id];
      const fill = n.etiquetaNivel.includes("Nivel 1")
        ? "var(--status-critical)"
        : n.etiquetaNivel.includes("Nivel 2")
          ? "var(--accent-primary)"
          : "var(--status-low)";
      return `
        <g data-open-asset="${n.id}" style="cursor:pointer;">
          <circle cx="${p.x}" cy="${p.y}" r="25" fill="var(--bg-surface-solid)" stroke="${fill}" stroke-width="2.6" />
          <text x="${p.x}" y="${p.y + 3}" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="9.5" font-weight="700">
            ${n.id.replace("GI_", "")}
          </text>
          <title>${escapeHtml(n.id + " — " + n.nombre + " (" + n.etiquetaNivel + ")")}</title>
        </g>
      `;
    }).join("");

    return `
      <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:auto; display:block;">
        <circle cx="${cx}" cy="${cy}" r="54" fill="var(--accent-primary-soft)" stroke="var(--border-accent)" />
        <text x="${cx}" y="${cy - 4}" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-display)" font-size="12" font-weight="700">CMDB A.8</text>
        <text x="${cx}" y="${cy + 13}" text-anchor="middle" fill="var(--accent-primary)" font-family="var(--font-mono)" font-size="9.5">14 ACTIVOS</text>
        ${lines.join("")}
        ${circles}
      </svg>
    `;
  }

  function renderActivos() {
    const el = document.getElementById("view-activos");
    const owners = [...new Set(DATA.activos.map(a => a.propietario))];

    const filtered = DATA.activos.filter(a => {
      if (state.assetProceso !== "ALL" && a.proceso !== state.assetProceso) return false;
      if (state.assetEtiqueta !== "ALL" && a.etiquetaNivel !== state.assetEtiqueta) return false;
      if (state.assetOwner !== "ALL" && a.propietario !== state.assetOwner) return false;
      if (state.assetSearch) {
        const q = state.assetSearch.toLowerCase();
        if (!`${a.id} ${a.nombre} ${a.descripcion} ${a.propietario} ${a.proceso}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    el.innerHTML = `
      <div class="eyebrow-tag">Unidad Temática IV • Práctica 7 — Norma Chilena NCh-ISO 27001:2013</div>
      <h1 class="display-heading">Constelación de <span class="gradient-span">14 Activos sin Colisión</span></h1>
      <p class="lead-paragraph" style="margin-bottom:26px;">Trazabilidad completa bajo el Dominio A.8: identificador único, custodia nominal, relaciones cruzadas y purga segura DoD 5220.22-M a las 15 semanas. Toca cualquier nodo de la constelación para abrir su ficha 360°.</p>

      <!-- Constelación Interactiva a Pantalla Ancha -->
      <div class="constellation-stage">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:10px; font-size:0.78rem;">
          <span style="font-family:var(--font-mono); color:var(--text-muted);">TOPOLOGÍA INTERACTIVA DE INTERDEPENDENCIA DE ACTIVOS</span>
          <div style="display:flex; gap:14px;">
            <span style="color:var(--status-critical);">● Nivel 1: Confidencial (6)</span>
            <span style="color:var(--accent-primary);">● Nivel 2: Uso Interno (7)</span>
            <span style="color:var(--status-low);">● Nivel 3: Pública (1)</span>
          </div>
        </div>
        ${buildAssetNetworkSvg()}
      </div>

      <!-- 3 Bandas de Clasificación y Etiquetado (NCh-ISO 27001:2013) -->
      <div class="clearance-bands">
        ${DATA.esquemaEtiquetado.map(e => {
          const borderCol = e.color === "critical" ? "var(--status-critical)" : e.color === "info" ? "var(--accent-primary)" : "var(--status-low)";
          return `
            <div class="clearance-band" style="border-top-color:${borderCol};">
              <span class="badge badge--${e.color}" style="margin-bottom:10px;">${escapeHtml(e.nivel)}</span>
              <p style="font-size:0.83rem; color:var(--text-secondary); margin-bottom:12px;">${escapeHtml(e.regla)}</p>
              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${e.activos.map(id => `<code class="mono-id" style="cursor:pointer;" data-open-asset="${id}">${id}</code>`).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Barra de Filtros + Directorio Limpio -->
      <div class="floating-toolbar">
        <input type="text" class="input-control" id="assetSearchInput" placeholder="Filtrar activo..." value="${escapeHtml(state.assetSearch)}" style="min-width:210px;" />
        <select class="select-control" id="assetProcSelect">
          <option value="ALL">4 Procesos Medulares</option>
          ${DATA.procesos.map(p => `<option value="${p.id}" ${state.assetProceso === p.id ? "selected" : ""}>${p.id} — ${escapeHtml(p.nombre)}</option>`).join("")}
        </select>
        <select class="select-control" id="assetEtiqSelect">
          <option value="ALL">Todos los Niveles A.8.2</option>
          <option value="Nivel 1: Confidencial" ${state.assetEtiqueta === "Nivel 1: Confidencial" ? "selected" : ""}>Nivel 1: Confidencial</option>
          <option value="Nivel 2: Uso Interno" ${state.assetEtiqueta === "Nivel 2: Uso Interno" ? "selected" : ""}>Nivel 2: Uso Interno</option>
          <option value="Nivel 3: Pública" ${state.assetEtiqueta === "Nivel 3: Pública" ? "selected" : ""}>Nivel 3: Pública</option>
        </select>
        <select class="select-control" id="assetOwnerSelect">
          <option value="ALL">Todos los Custodios</option>
          ${owners.map(o => `<option value="${escapeHtml(o)}" ${state.assetOwner === o ? "selected" : ""}>${escapeHtml(o)}</option>`).join("")}
        </select>
        ${(state.assetProceso !== "ALL" || state.assetEtiqueta !== "ALL" || state.assetOwner !== "ALL" || state.assetSearch)
          ? `<button class="btn" id="resetAssetFiltersBtn" style="padding:7px 14px;">Limpiar ✕</button>` : ""}
      </div>

      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Proceso</th>
              <th>ID Activo</th>
              <th>Activo de Información</th>
              <th>Descripción Operativa</th>
              <th>Clasificación</th>
              <th>Relación</th>
              <th>Propietario Nominal</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(a => `
              <tr class="clickable-row" data-open-asset="${a.id}">
                <td><span class="badge badge--neutral">${a.proceso}</span></td>
                <td><code class="mono-id">${a.id}</code></td>
                <td><strong>${escapeHtml(a.nombre)}</strong></td>
                <td style="font-size:0.81rem; color:var(--text-secondary); max-width:300px;">${escapeHtml(a.descripcion)}</td>
                <td><span class="badge ${a.criticoInventario ? 'badge--critical' : 'badge--info'}">${escapeHtml(a.clasificacionTexto)}</span></td>
                <td>${a.relacionados.map(r => `<code class="mono-id" style="margin-right:4px;">${r}</code>`).join("")}</td>
                <td style="font-weight:700; font-size:0.82rem;">${escapeHtml(a.propietario)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("assetSearchInput")?.addEventListener("input", e => {
      state.assetSearch = e.target.value;
      renderActivos();
      const input = document.getElementById("assetSearchInput");
      if (input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });
    document.getElementById("assetProcSelect")?.addEventListener("change", e => { state.assetProceso = e.target.value; renderActivos(); });
    document.getElementById("assetEtiqSelect")?.addEventListener("change", e => { state.assetEtiqueta = e.target.value; renderActivos(); });
    document.getElementById("assetOwnerSelect")?.addEventListener("change", e => { state.assetOwner = e.target.value; renderActivos(); });
    document.getElementById("resetAssetFiltersBtn")?.addEventListener("click", () => {
      state.assetSearch = ""; state.assetProceso = "ALL"; state.assetEtiqueta = "ALL"; state.assetOwner = "ALL";
      renderActivos();
    });
  }

  /* ------------------------------------------------------------------------
     DISEÑO 09: CENTRO DE TELEMETRÍA DE RIESGOS E INFRAESTRUCTURAS CRÍTICAS
     ------------------------------------------------------------------------ */
  function buildCriticalityHeatmapHtml() {
    const gradeMatrix = {
      "5-1": "IV", "5-2": "IV", "5-3": "V",  "5-4": "V",  "5-5": "V",
      "4-1": "III","4-2": "IV", "4-3": "IV", "4-4": "V",  "4-5": "V",
      "3-1": "III","3-2": "III","3-3": "IV", "3-4": "IV", "3-5": "V",
      "2-1": "II", "2-2": "III","2-3": "III","2-4": "IV", "2-5": "IV",
      "1-1": "I",  "1-2": "II", "1-3": "III","1-4": "III","1-5": "IV"
    };

    let html = `<div class="heatmap-5x5">`;
    html += `<div class="hm-cell hm-header">Imp \\ Int</div>`;
    for (let intVal = 1; intVal <= 5; intVal++) html += `<div class="hm-cell hm-header">Int ${intVal}</div>`;

    for (let imp = 5; imp >= 1; imp--) {
      html += `<div class="hm-cell hm-header">Impacto ${imp}</div>`;
      for (let intVal = 1; intVal <= 5; intVal++) {
        const grade = gradeMatrix[`${imp}-${intVal}`];
        const matching = DATA.activos.filter(a => a.ic.impactoIC === imp && a.ic.interdep === intVal);
        html += `
          <div class="hm-cell hm-grade-${grade}">
            <div>${grade}</div>
            <div class="hm-assets">
              ${matching.map(m => `<span class="hm-asset-chip" data-open-asset="${m.id}" title="${escapeHtml(m.nombre)}">${m.id.replace("GI_", "")}</span>`).join("")}
            </div>
          </div>
        `;
      }
    }
    html += `</div>`;
    return html;
  }

  function renderRiesgosTabContent() {
    const filteredAssets = DATA.activos.filter(a => {
      if (state.riskFilterNivel === "ALL") return true;
      return a.riesgoCalc.nivel === state.riskFilterNivel;
    });

    if (state.riskTab === "matriz-cid") {
      return `
        <div class="floating-toolbar">
          <select class="select-control" id="riskNivelFilter">
            <option value="ALL" ${state.riskFilterNivel === "ALL" ? "selected" : ""}>Todos los Niveles Residuales (14)</option>
            <option value="Crítico" ${state.riskFilterNivel === "Crítico" ? "selected" : ""}>Nivel Crítico (5 activos)</option>
            <option value="Alto" ${state.riskFilterNivel === "Alto" ? "selected" : ""}>Nivel Alto (2 activos)</option>
            <option value="Medio" ${state.riskFilterNivel === "Medio" ? "selected" : ""}>Nivel Medio (5 activos)</option>
            <option value="Bajo" ${state.riskFilterNivel === "Bajo" ? "selected" : ""}>Nivel Bajo (2 activos)</option>
          </select>
          <span style="font-size:0.8rem; color:var(--text-muted);">Toca cualquier fila para abrir el expediente matemático 360° del activo.</span>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Proceso</th>
                <th>ID</th>
                <th>Activo</th>
                <th>C</th>
                <th>I</th>
                <th>D</th>
                <th>Total</th>
                <th>Vulnerabilidades</th>
                <th>Amenazas</th>
                <th>Evento de Riesgo</th>
                <th>Controles NCh-ISO 27001:2013</th>
              </tr>
            </thead>
            <tbody>
              ${filteredAssets.map(a => `
                <tr class="clickable-row" data-open-asset="${a.id}">
                  <td><span class="badge badge--neutral">${a.proceso}</span></td>
                  <td><code class="mono-id">${a.id}</code></td>
                  <td><strong>${escapeHtml(a.nombre)}</strong></td>
                  <td>${a.cid.c}</td>
                  <td>${a.cid.i}</td>
                  <td>${a.cid.d}</td>
                  <td><span class="badge ${riskBadgeClass(a.cid.valor1)}">${a.cid.total} (${a.cid.valor1})</span></td>
                  <td style="font-size:0.79rem; min-width:185px;">${escapeHtml(a.vulnerabilidadDetalle)}</td>
                  <td style="font-size:0.79rem; min-width:175px;">${escapeHtml(a.amenazaDetalle)}</td>
                  <td style="font-size:0.79rem; min-width:175px;">${escapeHtml(a.eventoRiesgo)}</td>
                  <td style="font-size:0.78rem; color:var(--text-secondary); min-width:215px;">${escapeHtml(a.controlesISO)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    if (state.riskTab === "ponderacion") {
      const simTotalCID = state.sim.c + state.sim.i + state.sim.d;
      const simValor3 = state.sim.sev + state.sim.exp - 1;
      const simValor4 = state.sim.cap + state.sim.mot - 1;
      const simRiesgo = simValor4 * simValor3 * state.sim.prob * simTotalCID;
      const simNivel = simRiesgo >= 160 ? "Crítico" : simRiesgo >= 100 ? "Alto" : simRiesgo >= 35 ? "Medio" : "Bajo";

      return `
        <div class="telemetry-cockpit" style="margin-bottom:0;">
          <div class="telemetry-panel">
            <div class="eyebrow-tag">Laboratorio Interactivo</div>
            <h3 style="font-family:var(--font-display); font-size:1.3rem; margin-bottom:14px;">Simulador en Vivo de la Fórmula Oficial</h3>
            <div class="sim-control">
              <label><span>Principios C + I + D</span> <code>${state.sim.c}+${state.sim.i}+${state.sim.d} = ${simTotalCID}</code></label>
              <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
                <input type="range" min="1" max="5" value="${state.sim.c}" data-sim="c" />
                <input type="range" min="1" max="5" value="${state.sim.i}" data-sim="i" />
                <input type="range" min="1" max="5" value="${state.sim.d}" data-sim="d" />
              </div>
            </div>
            <div class="sim-control">
              <label><span>Vulnerabilidad: Sev (${state.sim.sev}) + Exp (${state.sim.exp}) - 1</span> <code>Valor3 = ${simValor3}</code></label>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <input type="range" min="1" max="3" value="${state.sim.sev}" data-sim="sev" />
                <input type="range" min="1" max="3" value="${state.sim.exp}" data-sim="exp" />
              </div>
            </div>
            <div class="sim-control">
              <label><span>Amenaza: Cap (${state.sim.cap}) + Mot (${state.sim.mot}) - 1</span> <code>Valor4 = ${simValor4}</code></label>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <input type="range" min="1" max="3" value="${state.sim.cap}" data-sim="cap" />
                <input type="range" min="1" max="3" value="${state.sim.mot}" data-sim="mot" />
              </div>
            </div>
            <div class="sim-control">
              <label><span>Probabilidad (1 a 3)</span> <code>Prob = ${state.sim.prob}</code></label>
              <input type="range" min="1" max="3" value="${state.sim.prob}" data-sim="prob" />
            </div>
            <div style="padding:20px; border-radius:var(--radius-lg); background:var(--bg-banner); text-align:center; margin-top:16px;">
              <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-secondary);">Riesgo = ${simValor4} × ${simValor3} × ${state.sim.prob} × ${simTotalCID}</div>
              <div style="font-family:var(--font-display); font-size:2.4rem; font-weight:700; margin:4px 0;">${simRiesgo} pts</div>
              <span class="badge ${riskBadgeClass(simNivel)}">Clasificación: ${simNivel}</span>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Activo</th>
                  <th>Valor3</th>
                  <th>Valor4</th>
                  <th>Prob.</th>
                  <th>CID</th>
                  <th>Riesgo Total</th>
                  <th>Nivel</th>
                </tr>
              </thead>
              <tbody>
                ${DATA.activos.map(a => `
                  <tr class="clickable-row" data-open-asset="${a.id}">
                    <td><code class="mono-id">${a.id}</code> <span style="font-size:0.78rem;">${escapeHtml(a.nombre)}</span></td>
                    <td style="font-family:var(--font-mono);">${a.pondVuln.sev}+${a.pondVuln.exp}-1 = <strong>${a.pondVuln.valor3}</strong></td>
                    <td style="font-family:var(--font-mono);">${a.pondAmenaza.cap}+${a.pondAmenaza.mot}-1 = <strong>${a.pondAmenaza.valor4}</strong></td>
                    <td style="font-family:var(--font-mono);">${a.riesgoCalc.prob}</td>
                    <td style="font-family:var(--font-mono);">${a.riesgoCalc.impacto}</td>
                    <td><code class="mono-id">${a.riesgoCalc.total}</code></td>
                    <td><span class="badge ${riskBadgeClass(a.riesgoCalc.nivel)}">${a.riesgoCalc.nivel}</span></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (state.riskTab === "infra-critica") {
      return `
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID Activo</th>
                <th>Activo</th>
                <th>Geo</th>
                <th>Per.</th>
                <th>IMPACTO</th>
                <th>IC</th>
                <th>Campos</th>
                <th>INTERDEP.</th>
                <th>GRADO</th>
                <th>¿Es IC?</th>
                <th>Controles Reforzados (ISO 27001 / ISO 22301)</th>
              </tr>
            </thead>
            <tbody>
              ${DATA.activos.map(a => `
                <tr class="clickable-row" data-open-asset="${a.id}">
                  <td><code class="mono-id">${a.id}</code></td>
                  <td><strong>${escapeHtml(a.nombre)}</strong></td>
                  <td>${a.ic.areaGeo}</td>
                  <td>${a.ic.periodo}</td>
                  <td><strong>${a.ic.impactoIC}</strong></td>
                  <td>${a.ic.cantIC}</td>
                  <td>${a.ic.campos}</td>
                  <td><strong>${a.ic.interdep}</strong></td>
                  <td><span class="badge ${riskBadgeClass(a.ic.criticidad)}">Grado ${a.ic.criticidad}</span></td>
                  <td>${a.ic.esIC ? `<strong style="color:var(--status-critical);">Sí (${a.ic.criticidad})</strong>` : `<span style="color:var(--text-muted);">No (${a.ic.criticidad})</span>`}</td>
                  <td style="font-size:0.79rem; color:var(--text-secondary); min-width:240px;">${escapeHtml(a.ic.controlesIC)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    return `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:24px; padding:12px 4px;">
        <div style="border-left:3px solid var(--accent-primary); padding-left:16px;">
          <h3 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:8px;">Vulnerabilidad (Valor3 = Sev + Exp - 1)</h3>
          <p style="font-size:0.84rem; color:var(--text-secondary);">Severidad (1: Nula, 2: Moderada, 3: Altamente severa) sumada a Exposición (1: Nula, 2: Moderada, 3: Altamente expuesta) menos 1.</p>
        </div>
        <div style="border-left:3px solid var(--accent-secondary); padding-left:16px;">
          <h3 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:8px;">Amenaza (Valor4 = Cap + Mot - 1)</h3>
          <p style="font-size:0.84rem; color:var(--text-secondary);">Capacidad técnica/recursos del agente (1 a 3) más Motivación de ataque (1 a 3) menos 1.</p>
        </div>
        <div style="border-left:3px solid var(--accent-emerald); padding-left:16px;">
          <h3 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:8px;">Probabilidad y Rango CID</h3>
          <p style="font-size:0.84rem; color:var(--text-secondary);">Probabilidad (1: Baja, 2: Media, 3: Alta). Suma CID: 3–5 Bajo (1), 6–10 Medio (2), 11–15 Alto (3).</p>
        </div>
        <div style="border-left:3px solid var(--accent-rose); padding-left:16px;">
          <h3 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:8px;">Infraestructura Crítica (Niveles IV y V)</h3>
          <p style="font-size:0.84rem; color:var(--text-secondary);">Cruce de Impacto (Amplitud Geográfica × Periodo de Afectación) contra Interdependencia (IC afectadas + Campos - 1).</p>
        </div>
      </div>
    `;
  }

  function renderRiesgos() {
    const el = document.getElementById("view-riesgos");
    const sortedByRisk = [...DATA.activos].sort((a, b) => b.riesgoCalc.total - a.riesgoCalc.total);

    el.innerHTML = `
      <div class="eyebrow-tag">Unidad Temática V • Práctica 8 — Telemetría Cuantitativa ISO</div>
      <h1 class="display-heading">Centro de Riesgos y <span class="gradient-span">9 Infraestructuras Críticas</span></h1>
      <p class="lead-paragraph" style="margin-bottom:28px;">Análisis integral de los 14 activos bajo NCh-ISO 27001:2013: 5 en Riesgo Crítico, 2 en Alto, 5 en Medio y 2 en Bajo; con 9 activos clasificados como Infraestructura Crítica (3 Grado V y 6 Grado IV).</p>

      <!-- Cabina de Telemetría: Barras de Intensidad + Mapa de Calor 5x5 -->
      <div class="telemetry-cockpit">
        <div class="telemetry-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h2 style="font-family:var(--font-display); font-size:1.22rem;">Espectro de Riesgo Residual</h2>
            <span class="badge badge--critical">Máx: 416 pts</span>
          </div>
          <div style="display:grid; gap:8px;">
            ${sortedByRisk.map(a => {
              const pct = Math.max(5, Math.round((a.riesgoCalc.total / 416) * 100));
              return `
                <div style="display:grid; grid-template-columns:88px 1fr 78px; gap:10px; align-items:center; cursor:pointer; padding:3px 0;" data-open-asset="${a.id}" title="${escapeHtml(a.nombre)}">
                  <code class="mono-id">${a.id}</code>
                  <div style="height:10px; border-radius:999px; background:var(--bg-subtle); overflow:hidden;">
                    <div style="height:100%; width:${pct}%; background:${riskBarColor(a.riesgoCalc.nivel)}; border-radius:999px;"></div>
                  </div>
                  <span style="text-align:right; font-family:var(--font-mono); font-size:0.74rem; font-weight:700;">${a.riesgoCalc.total}</span>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <div class="telemetry-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
            <h2 style="font-family:var(--font-display); font-size:1.22rem;">Matriz 5×5 de Criticidad (Impacto × Interdep.)</h2>
            <span class="badge badge--high">9 IC (Grados IV y V)</span>
          </div>
          ${buildCriticalityHeatmapHtml()}
        </div>
      </div>

      <!-- Selector Píldora para las 4 Vistas Oficiales -->
      <div class="tabs-pill-bar">
        <button class="tab-pill ${state.riskTab === 'matriz-cid' ? 'active' : ''}" data-risk-tab="matriz-cid">Matriz Principal CID y Controles</button>
        <button class="tab-pill ${state.riskTab === 'ponderacion' ? 'active' : ''}" data-risk-tab="ponderacion">Simulador + Valor3 / Valor4</button>
        <button class="tab-pill ${state.riskTab === 'infra-critica' ? 'active' : ''}" data-risk-tab="infra-critica">Infraestructuras Críticas (9 IC)</button>
        <button class="tab-pill ${state.riskTab === 'instructivo' ? 'active' : ''}" data-risk-tab="instructivo">Instructivo de Ponderación</button>
      </div>

      <div id="riskTabContainer">
        ${renderRiesgosTabContent()}
      </div>
    `;

    bindRiesgosEvents();
    requestAnimationFrame(() => justifyLongTexts(el));
  }

  function bindRiesgosEvents() {
    const el = document.getElementById("view-riesgos");
    if (!el) return;

    el.querySelectorAll("[data-risk-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.riskTab = btn.getAttribute("data-risk-tab");
        renderRiesgos();
      });
    });

    document.getElementById("riskNivelFilter")?.addEventListener("change", e => {
      state.riskFilterNivel = e.target.value;
      renderRiesgos();
    });

    el.querySelectorAll("[data-sim]").forEach(slider => {
      slider.addEventListener("input", e => {
        const key = slider.getAttribute("data-sim");
        state.sim[key] = Number(e.target.value);
        const container = document.getElementById("riskTabContainer");
        if (container) {
          container.innerHTML = renderRiesgosTabContent();
          bindRiesgosEvents();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     MODAL INSPECTOR 360° DE ACTIVO Y BUSCADOR GLOBAL
     ------------------------------------------------------------------------ */
  function openAssetModal(assetId) {
    const a = DATA.activos.find(x => x.id === assetId);
    if (!a) return;
    const modal = document.getElementById("assetModal");
    const body = document.getElementById("assetModalBody");
    const proc = DATA.procesos.find(p => p.id === a.proceso);

    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom:20px;">
        <div>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:8px;">
            <code class="mono-id" style="font-size:0.9rem;">${a.id}</code>
            <span class="badge ${riskBadgeClass(a.riesgoCalc.nivel)}">Riesgo Residual: ${a.riesgoCalc.nivel} (${a.riesgoCalc.total} pts)</span>
            <span class="badge ${a.ic.esIC ? 'badge--critical' : 'badge--neutral'}">
              ${a.ic.esIC ? `Infraestructura Crítica Grado ${a.ic.criticidad}` : `No Crítico (Grado ${a.ic.criticidad})`}
            </span>
          </div>
          <h2 style="font-family:var(--font-display); font-size:1.5rem;">${escapeHtml(a.nombre)}</h2>
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:4px;">${escapeHtml(a.descripcion)}</p>
        </div>
        <button class="modal-close" id="closeAssetModalBtn" aria-label="Cerrar">✕</button>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:14px; padding:16px; border-radius:var(--radius-md); background:var(--bg-subtle); margin-bottom:18px;">
        <div>
          <div style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">PROCESO</div>
          <strong style="font-size:0.86rem;">${a.proceso} — ${escapeHtml(proc ? proc.nombre : "")}</strong>
        </div>
        <div>
          <div style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">PROPIETARIO NOMINAL</div>
          <strong style="font-size:0.86rem;">${escapeHtml(a.propietario)}</strong>
        </div>
        <div>
          <div style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">ETIQUETADO Y RELACIONES</div>
          <strong style="font-size:0.86rem;">${escapeHtml(a.etiquetaNivel)} (${a.relacionados.join(", ")})</strong>
        </div>
      </div>

      <div style="padding:16px 20px; border-radius:var(--radius-md); background:var(--bg-banner); margin-bottom:18px; font-family:var(--font-mono); font-size:0.82rem;">
        <div><strong>Fórmula de Riesgo:</strong> Amenaza (${a.pondAmenaza.valor4}) × Vulnerabilidad (${a.pondVuln.valor3}) × Prob (${a.riesgoCalc.prob}) × CID (${a.cid.c}+${a.cid.i}+${a.cid.d}=${a.cid.total}) = <strong>${a.riesgoCalc.total} pts</strong></div>
        <div style="margin-top:6px;"><strong>Evaluación IC:</strong> Impacto ${a.ic.impactoIC} × Interdependencia ${a.ic.interdep} ⇒ <strong>Grado ${a.ic.criticidad}</strong></div>
      </div>

      <div style="display:grid; gap:14px; font-size:0.86rem; color:var(--text-secondary);">
        <div><strong style="color:var(--text-primary);">Vulnerabilidad:</strong> ${escapeHtml(a.vulnerabilidadDetalle)}</div>
        <div><strong style="color:var(--text-primary);">Amenaza y Evento:</strong> ${escapeHtml(a.amenazaDetalle)} — ${escapeHtml(a.eventoRiesgo)}</div>
        <div><strong style="color:var(--accent-primary);">Controles NCh-ISO 27001:2013:</strong> ${escapeHtml(a.controlesISO)}</div>
        <div><strong style="color:var(--accent-secondary);">Controles de Criticidad:</strong> ${escapeHtml(a.ic.controlesIC)}</div>
      </div>
    `;

    modal.classList.add("open");
    requestAnimationFrame(() => justifyLongTexts(body));
    document.getElementById("closeAssetModalBtn")?.addEventListener("click", () => modal.classList.remove("open"));
  }

  function openSearchModal() {
    const modal = document.getElementById("searchModal");
    const input = document.getElementById("globalSearchInput");
    modal.classList.add("open");
    input.value = "";
    renderSearchResults("");
    setTimeout(() => input.focus(), 40);
  }

  function renderSearchResults(query) {
    const list = document.getElementById("globalSearchResults");
    const q = (query || "").trim().toLowerCase();
    const results = [];

    DATA.modulos.forEach(m => {
      const f = FRIENDLY_NAV[m.id];
      if (!q || `${f.label} ${f.hint} ${m.titulo} ${m.subtitulo}`.toLowerCase().includes(q)) {
        results.push({ type: "Sección", code: m.num, title: f.label, sub: m.subtitulo, action: () => navigateTo(m.id) });
      }
    });

    DATA.activos.forEach(a => {
      if (q && `${a.id} ${a.nombre} ${a.propietario} ${a.controlesISO} ${a.riesgoCalc.nivel}`.toLowerCase().includes(q)) {
        results.push({
          type: "Activo A.8",
          code: a.id,
          title: a.nombre,
          sub: `${a.propietario} • Riesgo ${a.riesgoCalc.nivel} (${a.riesgoCalc.total}) • IC Grado ${a.ic.criticidad}`,
          action: () => openAssetModal(a.id)
        });
      }
    });

    DATA.cascadaMetas.forEach(g => {
      if (q && `${g.id} ${g.meta} ${g.kpi} ${Object.keys(g.rel).join(" ")}`.toLowerCase().includes(q)) {
        results.push({
          type: "Meta COBIT",
          code: g.id,
          title: g.meta,
          sub: `${g.dim} • KPI: ${g.kpi}`,
          action: () => { state.selectedMapNode = g.id; navigateTo("mapa"); }
        });
      }
    });

    list.innerHTML = results.length
      ? results.slice(0, 12).map((r, idx) => `
          <div class="search-result-item" data-search-idx="${idx}">
            <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
              <code class="mono-id">${escapeHtml(r.code)}</code>
              <span class="badge badge--neutral">${escapeHtml(r.type)}</span>
            </div>
            <strong style="font-size:0.88rem;">${escapeHtml(r.title)}</strong>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${escapeHtml(r.sub)}</div>
          </div>
        `).join("")
      : `<div style="padding:18px; text-align:center; color:var(--text-muted);">Sin coincidencias para "${escapeHtml(query)}".</div>`;

    list.querySelectorAll("[data-search-idx]").forEach(item => {
      item.addEventListener("click", () => {
        const idx = Number(item.getAttribute("data-search-idx"));
        document.getElementById("searchModal").classList.remove("open");
        results[idx]?.action();
      });
    });
  }

  /* ------------------------------------------------------------------------
     INICIALIZACIÓN
     ------------------------------------------------------------------------ */
  function init() {
    applyTheme(state.theme);
    applySidebarCollapsed(state.sidebarCollapsed);
    renderSidebar();
    renderInicio();
    renderIdentidad();
    renderBSC();
    renderCascada();
    renderMapa();
    renderCasoNegocio();
    renderCedulaITIL();
    renderActivos();
    renderRiesgos();

    const initialHash = (window.location.hash || "").replace("#", "");
    navigateTo(initialHash || "inicio", false);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => justifyLongTexts());
    }

    document.body.addEventListener("click", e => {
      const navBtn = e.target.closest("[data-nav]");
      if (navBtn) { navigateTo(navBtn.getAttribute("data-nav")); return; }

      const gotoBtn = e.target.closest("[data-goto]");
      if (gotoBtn) { navigateTo(gotoBtn.getAttribute("data-goto")); return; }

      const assetTrigger = e.target.closest("[data-open-asset]");
      if (assetTrigger) { openAssetModal(assetTrigger.getAttribute("data-open-asset")); return; }

      const themeBtn = e.target.closest("[data-set-theme]");
      if (themeBtn) { applyTheme(themeBtn.getAttribute("data-set-theme")); return; }
    });

    document.getElementById("collapseSidebarBtn")?.addEventListener("click", () => {
      applySidebarCollapsed(!state.sidebarCollapsed);
    });

    document.getElementById("mobileThemeBtn")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
      document.getElementById("sidebar")?.classList.toggle("open");
      document.getElementById("sidebarOverlay")?.classList.toggle("open");
    });
    document.getElementById("sidebarOverlay")?.addEventListener("click", closeMobileSidebar);

    document.getElementById("openSearchBtn")?.addEventListener("click", openSearchModal);
    document.getElementById("closeSearchModalBtn")?.addEventListener("click", () => {
      document.getElementById("searchModal").classList.remove("open");
    });
    document.getElementById("globalSearchInput")?.addEventListener("input", e => {
      renderSearchResults(e.target.value);
    });

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", e => {
        if (e.target === backdrop) backdrop.classList.remove("open");
      });
    });

    window.addEventListener("resize", () => {
      if (state.currentModule === "mapa") requestAnimationFrame(drawStratMapArrows);
      requestAnimationFrame(() => justifyLongTexts());
    });

    document.addEventListener("keydown", e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
