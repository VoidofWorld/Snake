import Field from "./Field.js";
import Score from "./Score.js";
import Snake from "./Snake.js";
import Apple from "./Apple.js";

class Game{
 constructor(){
    this.field = new Field();
    this.score = new Score();
    this.snake = new Snake(this.score);
    this.apple = new Apple(this.snake, this.score);
    this.restartButton();

   } 

   restartButton() {   
      const restartBtn = document.querySelector(".btn");
        restartBtn.addEventListener('click', () => {  
         this.snake.reset();      
         this.apple.reset();
         this.score.reset()
         this.removeDeathMessage();
      }  )}
      removeDeathMessage() {
         const deathMessage = document.querySelector(".death");
         if (deathMessage) {
             deathMessage.remove();
         }
      }
}

const game = new Game();
export default Game;