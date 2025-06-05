const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard(){
    if (lockBoard) return;
    if (this === firstCard) return;
   this.classList.add('flip');

   if (!hasFlippedCard){
    //fist click
    hasFlippedCard = true;
    firstCard = this;

    return;
}
   
    hasFlippedCard = false;
    secondCard = this;

    checkFormatch();

}


function checkFormatch(){
    let isMatch = firstCard.dataset.framework ===
            secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
   
} 

function disableCards(){
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    resetBoard();

}

function unflipCards(){
    lockBoard = true;

      setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
            resetBoard();
          }, 1500);

}

(function resetBoard(){
  
   [ hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];

     
    
})();

function shuffle() {
    cards.forEach(cards => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
cards.forEach(card => card.addEventListener('click', flipcard));
