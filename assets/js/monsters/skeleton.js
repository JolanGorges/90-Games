import Monster from './monster.js';

export default class Skeleton extends Monster {
  static variations = ['skeleton-green', 'skeleton-red', 'skeleton-white'];
  static weaponDropRate = 5;
  static potionDropRate = 3;
  static defaultHealth = 15;
  static defaultAttack = 10;
  static defaultDefense = 6;

  constructor(coefficient) {
    super();
    super.health = Skeleton.defaultHealth * coefficient;
    super.attack = Skeleton.defaultAttack * coefficient;
    super.defense = Skeleton.defaultDefense;// * coefficient;
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Skeleton.potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Skeleton.weaponDropRate) + 1;
    return {
      hasPotion: potion === 1,
      hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const colorIndex = Math.floor(Math.random() * Skeleton.variations.length);
    img.src = `${Skeleton.imagesPath}${Skeleton.variations[colorIndex]}.png`;
    img.setAttribute('id', 'skeleton');
    container.appendChild(img);
    super.monsterEl = img;
  }

  removeDom() {
    super.monsterEl.remove();
  }
}
