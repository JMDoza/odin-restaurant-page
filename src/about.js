import { createElement, appendChildren } from "./domUtils";

function aboutPage() {
  const content = document.getElementById("content");

  const title = createElement(
    "h1",
    "",
    "Our Story: Tradition, Passion, and Taste"
  );

  const journeyParagraph = createElement(
    "p",
    "menu-intro",
    `La Dolce Vita was born out of a passion for Italian cuisine and a
        dedication to bringing authentic flavors to our community. Founded by
        [Founder's Name], who grew up in a family of chefs and restaurateurs,
        the dream was to create a place where people could gather, savor, and
        celebrate life. Every ingredient we use is carefully sourced, and each
        recipe has been refined over generations to bring you a taste that’s
        both comforting and exciting.`
  );

  const philosphyParagraph = createElement(
    "p",
    "menu-intro",
    `At La Dolce Vita, we believe in food that brings people together. Our
        mission is to deliver an exceptional dining experience through warmth,
        authenticity, and, of course, unforgettable flavors.`
  );

  appendChildren(content, title, journeyParagraph, philosphyParagraph);
}

export { aboutPage };
