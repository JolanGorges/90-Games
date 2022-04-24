import Hero from './hero.js';
import Spider from './monsters/spider.js';
import Boss from './monsters/boss.js';
import Skeleton from './monsters/skeleton.js';

export default class Game {
  #floor = 1;
  #hero = new Hero();
  #monster = new Spider(1);
  #floorEl = document.querySelector('#floor');
  #containerEl = document.querySelector('#background');
  #heroEl = document.querySelector('#hero');
  #btnAttackEl = document.querySelector('#btn-attack');
  #btnUseEl = document.querySelector('#btn-use');
  #btnNextEl = document.querySelector('#btn-next');
  #inventoryEl = document.querySelector('#inventory');
  #weaponsEl = document.querySelector('#weapons');
  #potionsEl = document.querySelector('#potions');
  #heroHealthEl = document.querySelector('#hero-health > div');
  #monsterHealthEl = document.querySelector('#monster-health > div');
  #loseEl = document.querySelector('#lose');

  constructor() {
    this.#floorEl.innerText = 'Étage 1';
    this.#btnAttackEl.style.display = 'block';
    this.#monster.addDom(this.#containerEl);
    this.updateHealth();
  }

  get hero() {
    return this.#hero;
  }

  get monster() {
    return this.#monster;
  }

  get heroEl() {
    return this.#heroEl;
  }

  get btnAttackEl() {
    return this.#btnAttackEl;
  }

  get btnUseEl() {
    return this.#btnUseEl;
  }

  get btnNextEl() {
    return this.#btnNextEl;
  }

  get potionsEl() {
    return this.#potionsEl;
  }

  get loseEl() {
    return this.#loseEl;
  }

  updateHealth() {
    this.#heroHealthEl.style.height = `${this.#hero.health}%`;
    this.#monsterHealthEl.style.height = `${this.#monster.health}%`;
    if (this.#hero.potionCount > 0 && this.#hero.health < 100) {
      this.#btnUseEl.style.display = 'block';
    }
  }

  updateInventory() {
    this.#hero.collect(this.#monster.dropItems());
    if (this.#hero.potionCount > this.#potionsEl.querySelectorAll('img').length) {
      const img = document.createElement('img');
      img.src = 'assets/img/potion.png';
      this.#potionsEl.appendChild(img);
      this.#inventoryEl.style.display = 'block';
    }
    if (this.#hero.weaponCount > this.#weaponsEl.querySelectorAll('img').length) {
      const img = document.createElement('img');
      img.src = 'assets/img/weapon.png';
      this.#weaponsEl.appendChild(img);
      this.#inventoryEl.style.display = 'block';
    }
  }

  nextLevel() {
    this.#floor++;
    this.#floorEl.innerText = `Étage ${this.#floor}`;
    const coefficient = this.#floor / 10;
    if (this.#floor % 10 === 0) {
      this.#monster = new Boss(coefficient);
    } else if (this.#floor % 5 === 0) {
      this.#monster = new Skeleton(coefficient);
    } else {
      this.#monster = new Spider(coefficient);
    }
    this.#monster.addDom(this.#containerEl);
    this.#btnNextEl.style.display = 'none';
    this.#btnAttackEl.style.display = 'block';
    this.updateHealth();
  }
}
