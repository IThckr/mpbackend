var shortID = require('shortid');
var vector2 = require('./Vector2');
module.exports= class Player{
    constructor() {
        this.username = '';
        this.id = shortID.generate();
        this.position = new vector2();
        this.rotation= new Number(0);
        this.health  = new Number(100);
        this.isDeath=false;
        this.respawnTicker=new Number(0);
        this.respawnTime=new Number(0);

    }

    respawnCounter(){
        this.respawnTicker=this.respawnTicker+1;
        if(this.respawnTicker >= 10){
            this.respawnTicker=new Number(0);
            this.respawnTime=this.respawnTime + 1;

            if(this.respawnTime>=3){
                console.log("Respawn id:"+this.id);
                this.isDeath=false;
                this.respawnTicker=new Number(0);
                this.respawnTime=new Number(0);
                this.health=new Number(100);
                this.position=new vector2(-2,3);
                return true;
            }
        }
        return false;
    }

    
    dealDamage(amount=Number){
        this.health=this.health-amount;

        if(this.health<=0){
        this.isDeath=true;
        this.respawnTicker=new Number(0);
        this.respawnTime=new Number(0);
        }

        return this.isDeath;
    }
}