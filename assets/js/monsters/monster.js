export default class Monster {
  static imagesPath = 'assets/img/';
  #attack;
  #defense;
  #health;
  #monsterEl;

  constructor(attack, defense, health) {
    this.#attack = attack;
    this.#defense = defense;
    this.#health = health;
  }

  set attack(value) {
    this.#attack = value;
  }

  get defense() {
    return this.#defense;
  }

  set defense(value) {
    this.#defense = value;
  }

  get health() {
    return this.#health;
  }

  set health(value) {
    if (value > 100) this.#health = 100;
    else if (value < 0) this.#health = 0;
    else this.#health = value;
  }

  get monsterEl() {
    return this.#monsterEl;
  }

  set monsterEl(value) {
    this.#monsterEl = value;
  }

  attackTarget(target) {
    target.health -= this.#attack - target.defense;
    return target.health === 0;
  }

  addDom() {
  }

  removeDom() {
    this.#monsterEl.remove();
  }

  dropItems() {
  }
}
