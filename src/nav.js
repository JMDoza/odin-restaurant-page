import { homepage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

function setActiveTab(tab) {
  const tabs = document.querySelectorAll("nav > button");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tab.classList.add("active");
}

function renderContent(menuData) {
  const content = document.getElementById("content");

  const pages = {
    1: homepage,
    2: () => menuPage(menuData),
    3: aboutPage,
  };

  const tabs = document.querySelectorAll("nav > button");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      setActiveTab(event.currentTarget);

      content.innerHTML = "";
      pages[tab.dataset.tab];
    });
  });
}

export { renderContent };
