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
   Rendering
   ============================================================ */

const dottedItem = (name, price) =>
  `<li><span>${name}</span><span class="dots"></span><span class="item-price">${price}</span></li>`;

const renderMenu = () => {
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

  // TODO: confirm real hours with the owner before launch
  const hours = [
    ["Lunes", "17:00 – 01:00"],
    ["Martes", "17:00 – 01:00"],
    ["Miércoles", "17:00 – 01:00"],
    ["Jueves", "17:00 – 01:00"],
    ["Viernes", "17:00 – 02:00"],
    ["Sábado", "17:00 – 02:00"],
    ["Domingo", null],
  ];

  list.innerHTML = hours
    .map(([day, time]) =>
      time
        ? `<li><span>${day}</span><span>${time}</span></li>`
        : `<li class="closed"><span>${day}</span><span>Cerrado</span></li>`,
    )
    .join("");
};

const setYear = () => {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderHours();
  setYear();
});
