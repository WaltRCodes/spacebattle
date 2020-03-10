/*
This is the constructor that creates ships and all there functions
*/
class ship {
    constructor(name,hull, firepower,accuracy) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    get getHull(){
        return this.hull;
    }
    statusCheck() {
        console.log(`%c ${this.hull} Hull remaining`, 'font-style: italic; background: azure; border: 1px solid grey;');
    }
    fire(){
        let chance = Math.round(Math.random()*100)/100;
        if(chance<=this.accuracy){
            return this.firepower;
        } else {
            console.log("%c You missed!", 'color:red;');
            return 0;
        }
    }
    takeDamage(damage){
        this.hull-=damage;
        if(this.hull<=0){
            alert(`${this.name} has been destroyed`);
            console.log(`%c ${this.name} has been destroyed`, 'color:red;');
        } else{
            alert(`${this.name} has has taken ${damage} damage`);
            console.log(`%c ${this.name} has has taken ${damage} damage`, 'color:red;');
        }
    }
  }
  /*
  This function handles the choice for the player to attack or retreat
  */
function playerChoice(){
    let choice = prompt("Do you attack or retreat?", "Please type attack or retreat");
    if(choice.toLowerCase()==='retreat'){
        return 'break';
    } else if(choice.toLowerCase()==='attack'){
        return 'continue';
    }
    else {
        alert('You did not choose attack or retreat');
        console.log('%c You did not choose attack or retreat', 'font-style: italic; background: azure; border: 1px solid grey;');
        playerChoice();
    }
}

/* 
This function generates a random number within the min and max range
*/
function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}
//this function starts the game
const startGame = () => {
    console.log('%c spacebattle', 'font-size: 40px');
    let  USSSchwarzenegger = new ship('USSSchwarzenegger',20,5,.7);
    alert("Alright lets begin the game!");
    console.log(`%c Alright lets begin the game!`, 'font-style: italic; background: azure; border: 1px solid grey;');
    for(let i=1;i<=6;i++){
        let alien = new ship(`Alien ship number ${i}`,getRandom(3, 6), getRandom(2, 4),getRandom(.6, .8));
        alert(`Here comes ship number ${i}`);
        console.log(`%c Here comes ship number ${i}`, 'font-style: italic; background: azure; border: 1px solid grey;');
        let answer = playerChoice();
        if(answer==='break'){
            break;
        }
        while(alien.getHull>0&&USSSchwarzenegger.getHull>0){
            alien.takeDamage(USSSchwarzenegger.fire());
            if(alien.getHull>0){
                USSSchwarzenegger.takeDamage(alien.fire());
            }
            
        }
        if(USSSchwarzenegger.getHull<=0){
            break;
        }
        if(i===6){
            alert("YOU WIN!");
            console.log(`%c YOU WIN!`, 'color:green;');
        }
    }
    let playagain = prompt("Do you want to play again?", "Please type yes or no");
    
    
    if(playagain.toLowerCase()==='yes'){
        startGame();
    } else{
        alert("GAME OVER");
        console.log(`%c GAME OVER`, 'color:red;');
    }
    
    
};
startGame();
  