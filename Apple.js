export default class Apple {
    constructor(snake, score) {
        this.snake = snake;
        this.score = score;
        this.drawApple();
    }
 
    drawApple() {
 
       if (this.applePosition) {
          const oldAppleCell = document.querySelector(`.box.cell[data-x="${this.applePosition.x}"][data-y="${this.applePosition.y}"]`);
          if (oldAppleCell) {
              oldAppleCell.classList.remove('apple');
          }
      } 
 
       let appleX, appleY;
       do {
           appleX = Math.floor(Math.random() * 10);
           appleY = Math.floor(Math.random() * 10);
       } while (this.snake.snake.some(segment => segment.x === appleX && segment.y === appleY));
 
       document.querySelector(`.box.cell[data-x="${appleX}"][data-y="${appleY}"]`).classList.add('apple');
 
       this.applePosition = { x: appleX, y: appleY };
       this.eatApple();
   }
 
   eatApple () {
       this.eatInterval = setInterval(() => {
           let head = this.snake.snake[0];
           if (head.x === this.applePosition.x && head.y === this.applePosition.y) {
               document.querySelector(`.box.cell[data-x="${this.applePosition.x}"][data-y="${this.applePosition.y}"]`).classList.remove('apple');
               this.snake.snake.push({ ...this.snake.snake[this.snake.snake.length - 1] });
               this.score.noteScore();
               clearInterval(this.eatInterval); 
               this.drawApple();
           }
       }, 50);
   }
   reset() {
    clearInterval(this.eatInterval); 
    this.drawApple(); 
 }
 }
  