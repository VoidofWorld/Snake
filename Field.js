export default  class Field {
    constructor () {
       this.size = 10;
       this.fieldBox = document.querySelector(".box");
       this.drawField();
    }
    drawField () {
      this.fieldBox.innerHTML = '';
       for (let y = 0; y < this.size; y++ ){
           for(let x = 0; x < this.size; x++){
               let cell = `<div class="box cell" data-x ="${x}" data-y ="${y}"></div>`;
               this.fieldBox.innerHTML += cell;
           }
       }
    }
   }

   