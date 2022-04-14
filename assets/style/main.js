// Creation de la class
class Heros {
//Caracteristique de la class
#nom;
#Prenom;
#Force;
#Defense;
#Degats;
#PointDeVie;
#SacDePotions;
#SacDarme;
// VARIABLE STATIC 
static Degats = 3;
static MinForce = 3
static MaxForce = 10
static MinDef = 1
static MaxDef = 5
// Constructeur
constructor(nom,Prenom,Force,Defense,Degats,PointDeVie,SacDePotions, SacDarme){
  this.nom = nom;
  this.Prenom = Prenom;
  this.Force = Force;
  this.Defense = Defense; 
  this.Degats = Degats;
  this.PointDeVie = PointDeVie;
  this.SacDePotions  = SacDePotions;
  this.SacDarme = SacDarme;
}
//ACCESSEUR ET MUTATEUR
get nom(){
  return this.#nom ;
}
set nom(tmp){
  this.#nom = tmp;
}

get Prenom(){
  return this.#Prenom ;
}
set Prenom(tmp){
  this.#Prenom = tmp;
}

get Force(){
  return this.#Force ;
}
set Force(tmp){
  this.#Force = Math.floor(Math.random()*(Heros.MaxForce-Heros.MinForce) )+1;;
}

get Defense(){
  return this.#Defense ;
}
set Defense(tmp){
  this.#Defense = Math.floor(Math.random()*(Heros.MaxDef-Heros.MinDef) )+1;
}


get Degats(){
  return this.#Degats ;
}
set Degats(tmp){
  this.#Degats = Heros.Degats * this.Force;
}



get PointDeVie(){
  return this.#PointDeVie ;
}
set PointDeVie(tmp){
  this.#PointDeVie = tmp;
}

get SacDePotions(){
  return this.#SacDePotions ;
}
set SacDePotions(tmp){
  this.#SacDePotions = tmp;
}

get SacDarme(){
  return this.#SacDarme ;
}
set SacDarme(tmp){
  this.#SacDarme = tmp;
}

// METHODE ATTAQUE 
attaque(cible){
  if (cible == 0) {
    return cible = true;
  } 
  else {
    return cible = this.#PointDeVie;
  }
}
//METHODE VERIFICATION EQUIPEMENT 
recupEquipement(NbPotion,NbArme ){
  if (NbPotion <= 9 && NbArme <=3) {
    this.#SacDarme +=1;
    this.#SacDePotions +=1;
    this.#Degats+=4;
    console.log("Potion", this.#SacDePotions,"Arme",this.#SacDarme);
  } else{
     console.log("Inventaire plein");
  }
}
//METHODE UTILISATION DE LA POTION
utilisationPotion(){
  if (this.SacDePotions>0 && this.PointDeVie < 90) {
    this.PointDeVie+=10;
    this.SacDePotions -=1;
    console.log("Point de vie",this.PointDeVie, "Sac de potion", this.SacDePotions);

  } else if(this.SacDePotions>0 && this.PointDeVie >=90){
      this.SacDePotions -=1;
      this.PointDeVie = this.PointDeVie +(100-this.PointDeVie)
      console.log("Point de vie",this.PointDeVie, "Sac de potion", this.SacDePotions);
  } else{
    console.log ('Inventaire vide ou vie max atteint')
  }
}

affichageHeros(){
  console.log('#nom',this.#nom,'#Prenom',this.#Prenom ,'#Force',this.#Force ,'Defense',this.#Defense,'#Degats',this.#Degats ,'#PointDeVie',this.#PointDeVie,
    '#SacDePotions',this.#SacDePotions,'#SacDarme',this.#SacDarme);
}
}
let heros = new Heros("MOMO","SOUI",0,0,0,91,1,5 );
 
