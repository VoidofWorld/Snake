export default class Snake {
    constructor (score) {
       this.fieldBox = document.querySelector(".box");
       this.snake = [{x: 4, y: 4} , {x:5, y: 4}];
       this.direction = 'left';
       this.key = null;
       this.moveInterval = null;
       this.head = this.snake[0];
       this.score = score;
       this.drawSnake();
       this.moveSnake();
   
    }
   
    drawSnake () {
      this.fieldBox.querySelectorAll('.snake, .snakeHead').forEach(cell => {
         cell.classList.remove('snake', 'snakeHead');
     });
       this.snake.forEach((item, index) =>{
           document.querySelector(`.box.cell[data-x="${item.x}"][data-y="${item.y}"]`).classList.add('snake');
           if(index===0){
               document.querySelector(`.box.cell[data-x="${item.x}"][data-y="${item.y}"]`).classList.add('snakeHead');
           }
       })
    }
    moveSnake() {
      document.addEventListener('keydown', (e) => {
         const result = () => {
            if((this.direction === 'left' && e.key === 'ArrowRight') || (this.direction === 'right' && e.key === 'ArrowLeft') || (this.direction === 'top' && e.key === 'ArrowDown') || (this.direction === 'bottom' && e.key === 'ArrowUp')){
               return false;
            }
            return true;
         }
   
         if (result()) {
         if (e.key === 'ArrowLeft'){
            this.direction = 'left';
         }
         else if (e.key === 'ArrowRight') {
            this.direction = 'right';
         }
         else if (e.key === 'ArrowDown') {
            this.direction = 'bottom';
         }
         else if (e.key === 'ArrowUp') {
            this.direction = 'top';
         }
      }
         if (this.key !== e.key){
            this.key = e.key;
            
         let  death = () => {
               let deathSnake = document.querySelector(".contener-box");
               let messange = `<div class = "contener-box death"> DEATH</div>`;
               deathSnake.innerHTML = messange;
               clearInterval(this.moveInterval);
               this.score.checkScore();
               }
   
            clearInterval(this.moveInterval);
            this.moveInterval = setInterval(() => {
               let head = this.snake[0];
               let newHead={...head};
               if (this.direction === 'left') {newHead.x -= 1;
                  if (newHead.x === -1){
                     return death(); ;
                  }
               }
               else if (this.direction === 'right') {newHead.x += 1;
                  if (newHead.x === 10){
                     return death();
                  }}
               else if (this.direction === 'top') {newHead.y -= 1;
                  if (newHead.y === -1){
                     return death();
                  }
               }
               else if (this.direction === 'bottom') {newHead.y += 1;
                  if (newHead.y === 10){
                     return death();
                  }
               }
   
               if( this.snake.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)){
                  
                  return death();
               } 
   
               this.snake.unshift(newHead);
               let tail = this.snake.pop();
               
               document.querySelector(`.box.cell[data-x="${head.x}"][data-y="${head.y}"]`).classList.remove('snakeHead');
               document.querySelector(`.box.cell[data-x="${newHead.x}"][data-y="${newHead.y}"]`).classList.add('snakeHead', 'snake');
               document.querySelector(`.box.cell[data-x="${tail.x}"][data-y="${tail.y}"]`).classList.remove('snake');
   
              
            },500);
         }
      });
      }
    reset() {
      clearInterval(this.moveInterval);
      this.snake = [{ x: 4, y: 4 }, { x: 5, y: 4 }];
      this.direction = 'left';
      this.key = null;
      this.drawSnake();
      this.moveSnake();
   }
   }
   
   