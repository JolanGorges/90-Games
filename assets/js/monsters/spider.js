import Monster from './monster.js';

export default class Spider extends Monster {
  static variations = ['spider-black', 'spider-blue', 'spider-gold'];
  static weaponDropRate = 5;
  static potionDropRate = 3;
  static defaultHealth = 10;
  static defaultAttack = 5;
  static defaultDefense = 3;

  constructor(coefficient) {
    super();
    super.health = Spider.defaultHealth * coefficient;
    super.attack = Spider.defaultAttack * coefficient;
    super.defense = Spider.defaultDefense;// * coefficient;
  }

  dropItems() {
    const potion = Math.floor(Math.random() * Spider.potionDropRate) + 1;
    const weapon = Math.floor(Math.random() * Spider.weaponDropRate) + 1;
    return {
      hasPotion: potion === 1,
      hasWeapon: weapon === 1,
    };
  }

  addDom(container) {
    const img = document.createElement('img');
    const colorIndex = Math.floor(Math.random() * Spider.variations.length);
    img.src = `${Spider.imagesPath}${Spider.variations[colorIndex]}.png`;
    img.setAttribute('id', 'spider');
    container.appendChild(img);
    super.monsterEl = img;
  }

  removeDom() {
    super.monsterEl.remove();
  }
}
