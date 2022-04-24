import Monster from './monster.js';

export default class Boss extends Monster {
  static #variations = ['boss-1', 'boss-2', 'boss-3'];
  static #weaponDropRate = 2;
  static #potionDropRate = 1;
  static #defaultHealth = 20;
  static #defaultAttack = 10;
  static #defaultDefense = 9;

  constructor(coefficient) {
    super(Boss.#defaultAttack * coefficient, Boss.#defaultDefense, Boss.#defaultHealth * coefficient);
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Boss.#potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Boss.#weaponDropRate) + 1;
    return {
      hasPotion: potion === 1,
      hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const variationIndex = Math.floor(Math.random() * Boss.#variations.length);
    img.src = `${Monster.imagesPath}${Boss.#variations[variationIndex]}.png`;
    img.setAttribute('id', Boss.#variations[variationIndex]);
    container.appendChild(img);
    super.monsterEl = img;
  }
}
