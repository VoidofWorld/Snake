export default class Score{
    constructor(){
      this.scoreNow = 0;
      this.bestScore = parseInt(localStorage.getItem('bestScore')) || 0;
      this.writhScore();
    }
    
    noteScore (){
     this.scoreNow++;
     this.writhScore()
    }
   
      checkScore () {
      if (this.scoreNow > this.bestScore) {
          this.bestScore = this.scoreNow;
          localStorage.setItem('bestScore', this.bestScore);
          this.writhScore()
         }
      }
   
      writhScore(){
         document.querySelector('.score').textContent = `${this.scoreNow}`;
         document.querySelector('.best-score').textContent = `${this.bestScore}`;
      }
   
      reset() {
         this.scoreNow = 0;
         this.writhScore();
      }
   
   }

     