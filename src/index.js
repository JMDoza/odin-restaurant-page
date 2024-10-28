import "./styles.css";
import { homepage } from "./home";
import { menuItem } from "./menuItem";
import { menuPage } from "./menu";

const menuData = [
  menuItem(
    "Antipasti",
    "Start your meal with classics like Bruschetta al Pomodoro or the creamy Burrata served with ripe tomatoes and basil."
  ),
  menuItem(
    "Pasta",
    "Our signature pasta dishes include Pappardelle Bolognese, Cacio e Pepe, and Truffle Mushroom Risotto, all made fresh daily."
  ),
  menuItem(
    "Pizze",
    "Indulge in our Neapolitan-style pizzas, topped with ingredients like buffalo mozzarella, prosciutto, and arugula, straight from our wood-fired oven."
  ),
  menuItem(
    "Dolci",
    "End your meal on a sweet note with our Tiramisu, Cannoli, or a scoop of house-made Gelato."
  ),
];

// homepage();

menuPage(menuData);
