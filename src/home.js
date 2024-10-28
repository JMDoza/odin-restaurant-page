function homepage() {
  const content = document.getElementById("content");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  const p = document.createElement("p");

  h1.textContent = "Savor Every Moment at La Dolce Vita";
  button.textContent = "Reserve Your Table Today";
  p.textContent = `Welcome to La Dolce Vita, a cozy escape where flavor meets finesse.
        Nestled in the heart of the city, we serve timeless Italian dishes
        crafted with fresh, local ingredients and a touch of love. From
        handcrafted pasta to wood-fired pizzas, each dish is prepared to
        perfection, creating an experience as memorable as the taste. Whether
        you’re celebrating a special occasion or simply dining out, join us for
        an unforgettable meal in a warm, welcoming ambiance.`;

  content.appendChild(h1);
  content.appendChild(button);
  content.appendChild(p);
}

export { homepage };
