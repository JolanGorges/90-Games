import Game from './game.js';

const game = new Game();

game.btnAttackEl.addEventListener('click', () => {
  if (game.hero.attackTarget(game.monster)) {
    game.updateInventory();
    game.monster.removeDom();
    game.btnNextEl.style.display = 'block';
    game.btnAttackEl.style.display = 'none';
  } else if (game.monster.attackTarget(game.hero)) {
    game.heroEl.remove();
    game.btnNextEl.style.display = 'none';
    game.btnAttackEl.style.display = 'none';
    game.loseEl.style.display = 'flex';
  }
  game.updateHealth();
});

game.btnNextEl.addEventListener('click', () => {
  game.nextLevel();
});

game.btnUseEl.addEventListener('click', () => {
  game.hero.usePotion();
  game.updateHealth();
  game.potionsEl.querySelector('img').remove();
  if (game.hero.potionCount === 0 || game.hero.health === 100) {
    game.btnUseEl.style.display = 'none';
  }
});
