// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
        attack() {
            return this.strength;
        };
        receiveDamage(damage) {
            this.health -= damage;
        };
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;

    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0){
            return `${this.name} has died in act of combat`;
        };
    };
    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health>=1){
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0){
            return `A Saxon has died in combat`;
        };
    };
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let randomVikingAttacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randomSaxonVictim = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        
        let Damage1 = randomVikingAttacker.attack();
        let result1 = randomSaxonVictim.receiveDamage(Damage1);

        if(randomSaxonVictim.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxonVictim), 1);
        }

        return result1;
    }
    saxonAttack(){
        let randomSaxonAttacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomVikingVictim = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        
        let Damage2 = randomSaxonAttacker.attack();
        let result2 = randomVikingVictim.receiveDamage(Damage2);

        if(randomVikingVictim.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomVikingVictim), 1);
        }

        return result2;
    }
    showStatus(){
        if (this.saxonArmy.length === 0 ){
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    
}
