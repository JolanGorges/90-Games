export class Monstre {
  #nom;
  #attaque;
  #defense;
  #pointDeVie;
  #images;
  #target;

  constructor(nom, attaque, defense, pointDeVie, images, target) {
  }
  get nom() {
    return this.#Nom;
  }
  set nom(value) {
    this.#Nom = value;
  }
  get attaque() {
    return this.#attaque;
  }
  set attaque(value) {
    this.#attaque = value;
  }
  get defense() {
    return this.#defense;
  }
  set defense(value) {
    this.#defense = value;
  }
get pointDeVie() {
    return this.#pointDeVie;
  }
set pointDeVie(value) {
    this.#pointDeVie = value;
  }
get images() {
    return this.#images;
  }
set images(value) {
    this.#images = value;}
  
get target(){
    return this.#target;
    } 
set target(){
    this.#target= value;

}
/* METHODE ATTAQUE */
attack(){

}
addDom(){

}
removeDom(){

}
dropItems(){

}
  /*
- Méthode d’attaque qui prend en paramètre la cible, qui mets à jour les points de vie de la cible
en diminuant l’attaque du monstre par la défense de la cible. Elle renvoie true si sa cible est
morte
  
- Méthode d’ajout dans le dom : qui est vide et sera construire dans les classes filles
- Méthode de suppression du dom : pareil qu’au-dessus
- Méthode permettant de lâcher une potion / arme : pareil qu’au-dessus */
}

