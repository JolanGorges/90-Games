import { Monstre } from "./classe_monstre";
export class Boss extends Monstre {
  static linkToImg = "assets/img/";
  static variousColor = ["boss-1", "boss-2", "boss-3"];
  static luckWeapon = 5;
  static luckPotion = 3;

  addDom(container) {
    const img = document.createElement("img");
    const colorIndex = Math.floor(Math.random() * variousColor.length);
    img.src = linkToImg + Boss.variousColor[colorIndex];
    img.setAttribute("id", "boss" + (colorIndex + 1));
    container.appendChild(img);
    super.target = img;
  }

  removeDom(container) {
    super.target.remove();
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Boss.luckPotion) + 1;
    const weapon = Math.floor(Math.random() * Boss.luckWeapon) + 1;
    const items = [false, false];
    if (potion == 1) items[0] = true;
    if (weapon == 1) items[1] = true;
    return items;
  }
}
