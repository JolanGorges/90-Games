import Monster from './monster.js';

export default class Skeleton extends Monster {
  static #variations = ['skeleton-green', 'skeleton-red', 'skeleton-white'];
  static #weaponDropRate = 3;
  static #potionDropRate = 2;
  static #defaultHealth = 15;
  static #defaultAttack = 10;
  static #defaultDefense = 6;

  constructor(coefficient) {
    super(Skeleton.#defaultAttack * coefficient, Skeleton.#defaultDefense, Skeleton.#defaultHealth * coefficient);
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Skeleton.#potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Skeleton.#weaponDropRate) + 1;
    return {
      hasPotion: potion === 1, hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const variationIndex = Math.floor(Math.random() * Skeleton.#variations.length);
    img.src = `${Monster.imagesPath}${Skeleton.#variations[variationIndex]}.png`;
    img.setAttribute('id', 'skeleton');
    container.appendChild(img);
    super.monsterEl = img;
  }
}
