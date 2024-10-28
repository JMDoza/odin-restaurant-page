import { createElement, appendChildren } from "./domUtils";

function homepage() {
  const content = document.getElementById("content");
  
  const title = createElement("h1", "", "Savor Every Moment at La Dolce Vita");
  const reserveButton = createElement("button", "", "Reserve Your Table Today");
  const welcomeParagraph = createElement(
    "p",
    "",
    `Welcome to La Dolce Vita, a cozy escape where flavor meets finesse.
        Nestled in the heart of the city, we serve timeless Italian dishes
        crafted with fresh, local ingredients and a touch of love. From
        handcrafted pasta to wood-fired pizzas, each dish is prepared to
        perfection, creating an experience as memorable as the taste. Whether
        you’re celebrating a special occasion or simply dining out, join us for
        an unforgettable meal in a warm, welcoming ambiance.`
  );

  appendChildren(content, title, reserveButton, welcomeParagraph);
}

export { homepage };
