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
  this.#force = Math.floor(Math.random()*(Heros.maxForce-Heros.minForce) )+1;;
}

get defense(){
  return this.#defense ;
}
set defense(tmp){
  this.#defense = Math.floor(Math.random()*(Heros.maxDef-Heros.minDef) )+1;
}


get degats(){
  return this.#degats ;
}
set degats(tmp){
  this.#degats = Heros.degats * this.force;
}



get pointDeVie(){
  return this.#pointDeVie ;
}
set pointDeVie(tmp){
  this.#pointDeVie = tmp;
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
attaque(cible){
  if (cible == 0) {
    return cible = true;
  } 
  else {
    return cible = this.#pointDeVie;
  }
}
//METHODE VERIFICATION EQUIPEMENT 
recupEquipement(NbPotion,NbArme ){
  if (NbPotion <= 9 && NbArme <=3) {
    this.#sacDarme +=1;
    this.#sacDePotions +=1;
    this.#degats+=4;
    console.log("Potion", this.#sacDePotions,"Arme",this.#sacDarme);
  } else{
     console.log("Inventaire plein");
  }
}
//METHODE UTILISATION DE LA POTION
utilisationPotion(){
  if (this.sacDePotions>0 && this.pointDeVie < 90) {
    this.pointDeVie+=10;
    this.sacDePotions -=1;
    console.log("Point de vie",this.pointDeVie, "Sac de potion", this.sacDePotions);

  } else if(this.sacDePotions>0 && this.pointDeVie >=90){
      this.sacDePotions -=1;
      this.pointDeVie = this.pointDeVie +(100-this.pointDeVie)
      console.log("Point de vie",this.pointDeVie, "Sac de potion", this.sacDePotions);
  } else{
    console.log ('Inventaire vide ou vie max atteint')
  }
}

affichageHeros(){
  console.log('#nom',this.#nom,'#prenom',this.#prenom ,'#force',this.#force ,'defense',this.#defense,'#degats',this.#degats ,'#pointDeVie',this.#pointDeVie,
    '#sacDePotions',this.#sacDePotions,'#sacDarme',this.#sacDarme);
}


}
let heros = new Heros("MOMO","SOUI",0,0,0,91,1,5 );
