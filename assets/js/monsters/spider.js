import { Monstre } from "./monster.js";
export class Spider extends Monstre {
  static linkToImg = "assets/img/";
  static variousColor = ["spider.black", "spider.blue", "spider.gold"];
  static luckWeapon = 5;
  static luckPotion = 3;

  addDom(container) {
    const img = document.createElement("img");
    const colorIndex = Math.floor(Math.random() * variousColor.length);
    img.src = linkToImg + Spider.variousColor[colorIndex];
    img.classList.add("spider");
    container.appendChild(img);
    super.target = img;
  }

  removeDom(container) {
    super.target.remove();
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Spider.luckPotion) + 1;
    const weapon = Math.floor(Math.random() * Spider.luckWeapon) + 1;
    const items = [false, false];
    if (potion == 1) items[0] = true;
    if (weapon == 1) items[1] = true;
    return items;
  }
}
