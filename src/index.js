import "./styles.css";
import { renderContent } from "./nav";

const menuData = [
  {
    name: "Antipasti",
    desc: "Start your meal with classics like Bruschetta al Pomodoro or the creamy Burrata served with ripe tomatoes and basil.",
  },
  {
    name: "Pasta",
    desc: "Our signature pasta dishes include Pappardelle Bolognese, Cacio e Pepe, and Truffle Mushroom Risotto, all made fresh daily.",
  },
  {
    name: "Pizze",
    desc: "Indulge in our Neapolitan-style pizzas, topped with ingredients like buffalo mozzarella, prosciutto, and arugula, straight from our wood-fired oven.",
  },
  {
    name: "Dolci",
    desc: "End your meal on a sweet note with our Tiramisu, Cannoli, or a scoop of house-made Gelato.",
  },
];

renderContent(menuData);
