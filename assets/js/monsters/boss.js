import Monster from './monster.js';

export default class Boss extends Monster {
  static variations = ['boss-1', 'boss-2', 'boss-3'];
  static weaponDropRate = 5;
  static potionDropRate = 3;
  static defaultHealth = 20;
  static defaultAttack = 10;
  static defaultDefense = 9;

  constructor(coefficient) {
    super();
    super.health = Boss.defaultHealth * coefficient;
    super.attack = Boss.defaultAttack * coefficient;
    super.defense = Boss.defaultDefense;// * coefficient;
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Boss.potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Boss.weaponDropRate) + 1;
    return {
      hasPotion: potion === 1,
      hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const colorIndex = Math.floor(Math.random() * Boss.variations.length);
    img.src = `${Boss.imagesPath}${Boss.variations[colorIndex]}.png`;
    img.setAttribute('id', Boss.variations[colorIndex]);
    container.appendChild(img);
    super.monsterEl = img;
  }

  removeDom() {
    super.monsterEl.remove();
  }
}
