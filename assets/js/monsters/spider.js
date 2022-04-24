import Monster from './monster.js';

export default class Spider extends Monster {
  static #variations = ['spider-black', 'spider-blue', 'spider-gold'];
  static #weaponDropRate = 5;
  static #potionDropRate = 3;
  static #defaultHealth = 10;
  static #defaultAttack = 5;
  static #defaultDefense = 3;

  constructor(coefficient) {
    super(Spider.#defaultAttack * coefficient, Spider.#defaultDefense, Spider.#defaultHealth * coefficient);
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Spider.#potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Spider.#weaponDropRate) + 1;
    return {
      hasPotion: potion === 1,
      hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const variationIndex = Math.floor(Math.random() * Spider.#variations.length);
    img.src = `${Monster.imagesPath}${Spider.#variations[variationIndex]}.png`;
    img.setAttribute('id', 'spider');
    container.appendChild(img);
    super.monsterEl = img;
  }
}
