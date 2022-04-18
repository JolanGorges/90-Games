// Creation de la class
class Heros {
//Caracteristique de la class
#nom;
#prenom;
#force;
#defense;
#degats;
#pointDeVie;
#sacDePotions;
#sacDarme;
// VARIABLE STATIC 
static degats = 3;
static minForce = 3
static maxForce = 10
static minDef = 1
static maxDef = 5
// Constructeur
constructor(nom,prenom,force,defense,degats,pointDeVie,sacDePotions, sacDarme){
  this.nom = nom;
  this.prenom = prenom;
  this.force = force;
  this.defense = defense; 
  this.degats = degats;
  this.pointDeVie = pointDeVie;
  this.sacDePotions  = sacDePotions;
  this.sacDarme = sacDarme;
}
//ACCESSEUR ET MUTATEUR
get nom(){
  return this.#nom ;
}
set nom(tmp){
  this.#nom = tmp;
}

get prenom(){
  return this.#prenom ;
}
set prenom(tmp){
  this.#prenom = tmp;
}

get force(){
  return this.#force ;
}
set force(tmp){
  this.#force = tmp;
}

get defense(){
  return this.#defense ;
}
set defense(tmp){
  this.#defense = tmp;
}


get degats(){
  return this.#degats ;
}
set degats(tmp){
  this.#degats = tmp;
}
get pointDeVie(){
  return this.#pointDeVie ;
}
set pointDeVie(tmp){
  if (this.pointDeVie > 100) {
      this.pointDeVie = 100;
  } if (this.pointDeVie < 0) {
    this.pointDeVie = 0;
  } 
  else {
    this.pointDeVie = this.pointDeVie;
  }
}

get sacDePotions(){
  return this.#sacDePotions ;
}
set sacDePotions(tmp){
  this.#sacDePotions = tmp;
}

get sacDarme(){
  return this.#sacDarme ;
}
set sacDarme(tmp){
  this.#sacDarme = tmp;
}

// METHODE ATTAQUE 
attaque(monstre){
  monstre.defense -= this.degats;
  if (monstre.defense <= 0) {
    monstre.pointDeVie =- this.degats;
    return monstre.pointDeVie
  } 
  else if(monstre.pointDeVie ===0){
    return true ;
  } else {
    return false ;
  }
}
//METHODE VERIFICATION EQUIPEMENT 
recupEquipement(nbPotion,nbArme ){
  if (NbPotion <= 9) {
    this.#sacDePotions +=1;

  } if (NbArme <=3){
    this.#sacDarme +=1;
    this.#degats+=4;

  } else{
     console.log("Inventaire plein");
  }
}
//METHODE UTILISATION DE LA POTION
utilisationPotion(){
  this.pointDeVie +=10;
  this.sacDePotions -=1;
}
//FORCE ET DEFENSE ALEATOIRE + DEGATS
fdAleatoire(){
  this.force = Math.floor(Math.random()*(Heros.maxForce-Heros.minForce) )+1;
  this.defense = Math.floor(Math.random()*(Heros.maxDef-Heros.minDef) )+1 ;
  this.degats = this.force*Heros.degats ; 
}

affichageHeros(){
  console.log('#nom',this.#nom,'#prenom',this.#prenom ,'#force',this.#force ,'defense',this.#defense,'#degats',this.#degats ,'#pointDeVie',this.#pointDeVie,
    '#sacDePotions',this.#sacDePotions,'#sacDarme',this.#sacDarme);
}


}

