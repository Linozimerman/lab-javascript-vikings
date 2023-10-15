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
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
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
        return ("Odin Owns You All!")
    }

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health, strength)
        this.health = health;
        this.strength = strength;
    }
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
        
        let dealDamage1 = randomVikingAttacker.attack();
        let result1 = randomSaxonVictim.receiveDamage(dealDamage1);

        if(randomSaxonVictim.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxonVictim), 1);
        }

        return result1;
    }
    saxonAttack(){
        let randomSaxonAttacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomVikingVictim = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        
        let dealDamage2 = randomSaxonAttacker.attack();
        let result2 = randomVikingVictim.receiveDamage(dealDamage2);

        if(randomVikingVictim.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomVikingVictim), 1);
        }

        return result2;
    }
    
}
