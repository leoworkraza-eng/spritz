/* ============================================================
   SPRITZ BARCELONA — script
   Menu data transcribed from the bar's real letterboards (sep 2026).
   ============================================================ */

const BUSINESS = {
  name: "Spritz Barcelona",
  instagram: "spritzbarcelona",
};

// The ten spritzes — ordered dulce → amargo, like the Spritzómetro mirror
const SPRITZES = [
  "Limoncello",
  "Hugo",
  "Lisboa",
  "Cambogia",
  "Mirto",
  "Mixto",
  "Select",
  "Campari",
  "Cynar",
  "Aperol",
];
const SPRITZ_PRICE = "4,80 €";

// Classic cocktails — straight from the board
const COCKTAILS = [
  "Negroni",
  "Negroni Sbagliato",
  "Americano",
  "Garibaldi",
  "Mojito Clásico / Fresa",
  "Caipirinha",
  "Tequila Sunrise",
  "Amaretto Sour",
  "Aperol Sour",
  "Moskow Mule",
  "Bloody Mary",
  "Espresso Martini",
  "Pornstar Martini",
  "Paloma",
  "Fernet / Ron Cola",
  "Long Island Iced Tea",
  "Piña Colada",
  "Margarita",
  "Cuba Libre",
];
const COCKTAIL_PRICE = "6,80 €";

const TAPAS = [
  { name: "Mix Olivas", price: "2,80 €" },
  { name: "Bravas Spritz", price: "2,80 €" },
  { name: "Mix Aperitivo", price: "3,80 €" },
  { name: "Focaccia", price: "4,50 €" },
];

const COMBOS = [
  { name: "Combo Spritz + Focaccia", price: "8,00 €" },
  { name: "Focaccia + Caña o Refresco", price: "6,50 €" },
];

// Beers, wines & the rest of the board
const BEBIDAS = [
  { name: "Caña Clara", price: "2,50 €" },
  { name: "Cerveses ampolla — Estrella / Daura", price: "2,50 €" },
  { name: "IPA", price: "3,70 €" },
  { name: "Michelada", price: "6,80 €" },
  { name: "Vermut", price: "2,80 €" },
  { name: "Vins i Cava", price: "3,80 €" },
  { name: "Sangria", price: "3,80 €" },
  { name: "Xupitos", price: "2,50 €" },
  { name: "Licors i Amari", price: "3,80 €" },
  { name: "Destil·lats", price: "3,80 €" },
  { name: "Refrescs", price: "2,80 €" },
  { name: "Virgin Mary / Mojito", price: "6,80 €" },
  { name: "Llimonada Menta Ginger", price: "3,60 €" },
  { name: "Crodino (sin alcohol)", price: "—" },
];

/* ============================================================
   i18n — català / español / english
   ============================================================ */

const I18N = {
  ca: {
    nav_menu: "La carta",
    nav_bar: "El bar",
    nav_visit: "On som",
    nav_cta: "Com arribar",
    hero_eyebrow: "Darrere la Catedral · des de 2007",
    hero_title: 'Spritz a <span class="price-pop">4,80€</span> i zero posat.',
    hero_sub:
      "Un bar petit i acollidor on el vermut s'agafe a poc a poc i la paret taronja ja és un clàssic del barri. Bones copes, tapes simples, preus de barri.",
    hero_no_reservas: "Sense reserves. Només vine — et busquem lloc.",
    hero_cta_menu: "Veure la carta",
    hero_cta_visit: "On som ↗",
    hl1_title: "10 spritz, un preu",
    hl1_sub: "Aperol, Campari, Cynar, Hugo… tots a 4,80€",
    hl2_title: "Des de 2007",
    hl2_sub: "Gairebé 20 anys de vetllades darrere la Catedral",
    hl3_title: "Sense reserves",
    hl3_sub: "Entra, demana, gaudeix — com sempre s'ha fet",
    menu_title: "La carta",
    menu_sub:
      'Deu spritz de dolç a amarg — com al Spritzómetro del bar. Còctels clàssics sense adorns i tapes per picar. <strong>Spritz + focaccia: 8€</strong> — el combo que ho explica tot.',
    strip_sweet: "dolç",
    strip_bitter: "amarg",
    menu_spritz: "Spritz",
    menu_spritz_note: "tots a 4,80€",
    menu_cocktails: "Còctels",
    menu_cocktails_note: "6,80€",
    menu_tapas: "Per picar",
    menu_drinks: "I també…",
    menu_note: "IVA inclòs. També tenim opcions sense alcohol.",
    menu_photo_caption: "Les pissarres de sempre. Bon profit!",
    cinema_title: "L'ambient, en moviment",
    cinema_sub: "Un minut a la barra. Això no és publicitat — és un dimarts qualsevol.",
    cinema_cap1: "La barra, a les set",
    cinema_cap2: "Salut!",
    cinema_cap3: "I així fins la mitjanit",
    about_title: "Un bar de barri, de tota la vida",
    about_p1:
      "Vam obrir el 2007 en un carreró darrere la Catedral i des de llavors no hem canviat la fórmula: bona beguda, tapes senzilles, música i conversa fins que el cos demani llit.",
    about_p2:
      "Darrere la barra coneixem la gent pel seu nom (i pel seu spritz preferit). Vine sol, vine amb tres, vine amb dotze — sempre hi ha lloc per un més.",
    about_sig: "— l'equip de Spritz",
    visit_title: "Vine a veure'ns",
    visit_lede:
      "Som a dos carrers de la Catedral, al casc antic. Si arribes a l'antic mercat del Born, ja hi ets gairebé.",
    visit_on_ig: "a Instagram",
    visit_maps_btn: "Obrir a Google Maps ↗",
    hours_closed: "Tancat",
    days: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"],
    combo_combo: "Combo Spritz + Focaccia",
    combo_foc: "Focaccia + Canya o Refresc",
  },
  es: {
    nav_menu: "La carta",
    nav_bar: "El bar",
    nav_visit: "Dónde estamos",
    nav_cta: "Cómo llegar",
    hero_eyebrow: "Detrás de la Catedral · desde 2007",
    hero_title: 'Spritzes a <span class="price-pop">4,80€</span> y cero postureo.',
    hero_sub:
      "Un bar pequeño y acogedor donde el vermut se toma despacio y la pared naranja ya es un clásico del barrio. Buenas copas, tapas simples, precios de barrio.",
    hero_no_reservas: "Sin reservas. Solo ven — te buscamos sitio.",
    hero_cta_menu: "Ver la carta",
    hero_cta_visit: "Dónde estamos ↗",
    hl1_title: "10 spritzes, un precio",
    hl1_sub: "Aperol, Campari, Cynar, Hugo… todos a 4,80€",
    hl2_title: "Desde 2007",
    hl2_sub: "Casi 20 años de Thursday nights detrás de la Catedral",
    hl3_title: "Sin reservas",
    hl3_sub: "Entra, pide, disfruta — como siempre se ha hecho",
    menu_title: "La carta",
    menu_sub:
      'Diez spritzes de amargo a dulce — como en el Spritzómetro del bar. Cócteles clásicos sin adornos y tapas para picar. <strong>Spritz + focaccia: 8€</strong> — el combo que lo explica todo.',
    strip_sweet: "dulce",
    strip_bitter: "amargo",
    menu_spritz: "Spritz",
    menu_spritz_note: "todos a 4,80€",
    menu_cocktails: "Cócteles",
    menu_cocktails_note: "6,80€",
    menu_tapas: "Para picar",
    menu_drinks: "Y también…",
    menu_note: "IVA incluido. También tenemos opciones sin alcohol.",
    menu_photo_caption: "Las pizarras de siempre. Bon profit!",
    cinema_title: "El ambiente, en movimiento",
    cinema_sub: "Un minuto en la barra. Esto no es publicidad — es un martes cualquiera.",
    cinema_cap1: "La barra, a las siete",
    cinema_cap2: "Salud!",
    cinema_cap3: "Y así, hasta la medianoche",
    about_title: "Un bar de barrio, en toda regla",
    about_p1:
      "Abrimos en 2007 en un callejón detrás de la Catedral y desde entonces no hemos cambiado la fórmula: buena bebida, tapas sencillas, música y conversación hasta que el cuerpo pida cama.",
    about_p2:
      "Detrás de la barra conocemos a la gente por su nombre (y por su spritz favorito). Ven solo, ven con tres, ven con doce — siempre hay sitio para uno más.",
    about_sig: "— el equipo de Spritz",
    visit_title: "Ven a vernos",
    visit_lede:
      "Estamos a dos calles de la Catedral, en el casco antiguo. Si llegas al antiguo mercat del Born, ya casi estás.",
    visit_on_ig: "en Instagram",
    visit_maps_btn: "Abrir en Google Maps ↗",
    hours_closed: "Cerrado",
    days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    combo_combo: "Combo Spritz + Focaccia",
    combo_foc: "Focaccia + Caña o Refresco",
  },
  en: {
    nav_menu: "The menu",
    nav_bar: "The bar",
    nav_visit: "Find us",
    nav_cta: "How to get here",
    hero_eyebrow: "Behind the Cathedral · since 2007",
    hero_title: 'Spritzes at <span class="price-pop">€4.80</span> and zero pretension.',
    hero_sub:
      "A small, welcoming bar where vermouth is sipped slowly and the orange wall is already a neighborhood classic. Good drinks, simple tapas, local prices.",
    hero_no_reservas: "No reservations. Just walk in — we'll find you a spot.",
    hero_cta_menu: "See the menu",
    hero_cta_visit: "Find us ↗",
    hl1_title: "10 spritzes, one price",
    hl1_sub: "Aperol, Campari, Cynar, Hugo… all €4.80",
    hl2_title: "Since 2007",
    hl2_sub: "Nearly 20 years of Thursday nights behind the Cathedral",
    hl3_title: "No reservations",
    hl3_sub: "Walk in, order, enjoy — the way it's always been done",
    menu_title: "The menu",
    menu_sub:
      'Ten spritzes from sweet to bitter — like the bar\'s Spritzómetro. Classic cocktails, no frills, and tapas to share. <strong>Spritz + focaccia: €8</strong> — the combo that says it all.',
    strip_sweet: "sweet",
    strip_bitter: "bitter",
    menu_spritz: "Spritz",
    menu_spritz_note: "all €4.80",
    menu_cocktails: "Cocktails",
    menu_cocktails_note: "€6.80",
    menu_tapas: "To snack",
    menu_drinks: "And also…",
    menu_note: "Taxes included. Non-alcoholic options available.",
    menu_photo_caption: "The usual boards. Bon profit!",
    cinema_title: "The vibe, in motion",
    cinema_sub: "One minute at the bar. This isn't an ad — it's just any given Tuesday.",
    cinema_cap1: "The bar, at seven",
    cinema_cap2: "Cheers!",
    cinema_cap3: "And so on, until midnight",
    about_title: "A proper neighborhood bar",
    about_p1:
      "We opened in 2007 in an alley behind the Cathedral and haven't changed the formula since: good drinks, simple tapas, music and conversation until your body asks for bed.",
    about_p2:
      "Behind the bar we know people by name (and by their favorite spritz). Come alone, come with three, come with twelve — there's always room for one more.",
    about_sig: "— the Spritz team",
    visit_title: "Come see us",
    visit_lede:
      "Two streets from the Cathedral, in the old town. If you've reached the old Born market, you're almost here.",
    visit_on_ig: "on Instagram",
    visit_maps_btn: "Open in Google Maps ↗",
    hours_closed: "Closed",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    combo_combo: "Spritz + Focaccia combo",
    combo_foc: "Focaccia + Draught beer or soft drink",
  },
};

let currentLang = localStorage.getItem("spritz-lang") || "es";

const applyLang = (lang) => {
  currentLang = lang;
  localStorage.setItem("spritz-lang", lang);
  const dict = I18N[lang];
  document.documentElement.lang = lang === "ca" ? "ca" : lang === "en" ? "en" : "es";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  renderMenu();
  renderHours();
};

/* ============================================================
   Rendering
   ============================================================ */

const dottedItem = (name, price) =>
  `<li><span>${name}</span><span class="dots"></span><span class="item-price">${price}</span></li>`;

const renderMenu = () => {
  const dict = I18N[currentLang];
  const fill = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  fill(
    "spritzList",
    SPRITZES.map((s) => dottedItem(s, SPRITZ_PRICE)).join(""),
  );
  fill(
    "cocktailList",
    COCKTAILS.map((c) => dottedItem(c, COCKTAIL_PRICE)).join(""),
  );
  fill(
    "tapasList",
    TAPAS.map((t) => dottedItem(t.name, t.price)).join(""),
  );
  fill(
    "comboList",
    COMBOS.map(
      (c) =>
        `<div class="combo-title">${c.name}</div><span class="combo-price">${c.price}</span>`,
    ).join(""),
  );
  fill(
    "bebidasList",
    BEBIDAS.map((b) => dottedItem(b.name, b.price)).join(""),
  );
};

const renderHours = () => {
  const list = document.getElementById("hoursList");
  if (!list) return;
  const dict = I18N[currentLang];

  // TODO: confirm real hours with the owner before launch
  const hours = [
    ["17:00 – 01:00"],
    ["17:00 – 01:00"],
    ["17:00 – 01:00"],
    ["17:00 – 01:00"],
    ["17:00 – 02:00"],
    ["17:00 – 02:00"],
    [null],
  ];

  list.innerHTML = hours
    .map(([time], i) =>
      time
        ? `<li><span>${dict.days[i]}</span><span>${time}</span></li>`
        : `<li class="closed"><span>${dict.days[i]}</span><span>${dict.hours_closed}</span></li>`,
    )
    .join("");
};

const setYear = () => {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
};

// Pause videos that scroll out of view (battery + data friendly)
const initVideoObserver = () => {
  const videos = document.querySelectorAll("video[autoplay]");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      }),
    { threshold: 0.15 },
  );
  videos.forEach((v) => io.observe(v));
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => applyLang(btn.dataset.lang)),
  );
  applyLang(currentLang);
  setYear();
  initVideoObserver();
});
