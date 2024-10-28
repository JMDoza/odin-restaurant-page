import { createElement } from "./domUtils";

function menuPage(menuData) {
  const content = document.getElementById("content");

  const title = createElement("h1", "", "Indulge in Authentic Italian Cuisine");
  const introText = createElement(
    "p",
    "menu-intro",
    `Our menu is a curated selection of Italy's most beloved dishes, each
        crafted with passion and an eye for detail. From starters that tease the
        palate to desserts that leave a sweet mark on your heart, La Dolce Vita
        is a culinary journey that brings the authentic flavors of Italy to your
        table.`
  );
  const menuContainer = createElement("div", "menu-container");

  menuData.forEach((item) => {
    const menuItem = createElement("div", "menu-item");
    const img = createElement("div", "", "", item.getName().toLowerCase());
    const name = createElement("h2", "", item.getName());
    const desc = createElement("p", "", item.getDesc());

    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(desc);
    menuContainer.appendChild(menuItem);
  });

  content.appendChild(title);
  content.appendChild(introText);
  content.appendChild(menuContainer);
}

export { menuPage };

/*  
  antipasti: Photo by <a href="https://unsplash.com/@racha__debbech?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Racha Debbech</a> on <a href="https://unsplash.com/photos/a-white-plate-topped-with-pasta-covered-in-sauce-5A_SudNQbDE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  pasta:  Photo by <a href="https://unsplash.com/@myshegotripped?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mandy Bourke</a> on <a href="https://unsplash.com/photos/a-plate-of-spaghetti-with-tomato-sauce-and-parsley-Htb3Neu9Tmg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  pizze: Photo by <a href="https://unsplash.com/@kkalerry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Klara Kulikova</a> on <a href="https://unsplash.com/photos/person-holding-sliced-pizza-with-red-sauce-jvWZYnxBDlQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  dolci:  Photo by <a href="https://unsplash.com/@sweetlavender?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Faezeh Taheri</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-cupcake-on-a-plate-e0bnW_1UYKA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
*/
