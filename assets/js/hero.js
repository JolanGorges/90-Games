export default class Hero {
  static #damage = 3;
  static #minStrength = 3;
  static #maxStrength = 11;
  static #minDefense = 1;
  static #maxDefense = 5;
  #defense;
  #attack;
  #health = 100;
  #potionCount = 0;
  #weaponCount = 0;

  constructor() {
    const strength = Math.floor((Math.random()) * (Hero.#maxStrength - Hero.#minStrength + 1)) + Hero.#minStrength;
    this.#defense = Math.floor((Math.random()) * (Hero.#maxDefense - Hero.#minDefense + 1)) + Hero.#minDefense;
    this.#attack = strength * Hero.#damage;
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    if (value > 100) this.#health = 100;
    else if (value < 0) this.#health = 0;
    else this.#health = value;
  }

  get potionCount() {
    return this.#potionCount;
  }

  get weaponCount() {
    return this.#weaponCount;
  }

  get defense() {
    return this.#defense;
  }

  set defense(value) {
    this.#defense = value;
  }

  attackTarget(target) {
    target.health -= this.#attack - target.defense;
    return target.health === 0;
  }

  collect(items) {
    if (items.hasPotion && this.#potionCount < 10) {
      this.#potionCount++;
    }
    if (items.hasWeapon && this.#weaponCount < 4) {
      this.#weaponCount++;
      this.#attack += 4;
    }
  }

  usePotion() {
    this.health += 10;
    this.#potionCount--;
  }
}
