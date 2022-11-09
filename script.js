const content = document.getElementById('kontent');
const buttonPlay = document.getElementById('button-play');

function show() {
    visibility = 'visible'
    buttonPlay.style.visibility = "hidden";
    content.style.visibility = "visible";
}

const delay = (miliseconds = 700) => new Promise((resolve) => setTimeout(resolve, miliseconds)); 

const randColor = () => {
    return {
        cards: 
        [
            {
                color: 'red', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'blue', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'green', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'yellow', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'red', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'blue', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'green', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
            {
                color: 'yellow', 
                isFlipped: false,
                isCleared: false,
                animate: ''
            },
        ].sort(() => Math.random() - 0.5),

        get flippedCards (){ //hitung banyak kartu yang kebuka
            return this.cards.filter((card) => card.isFlipped) 
        },

        get remainingCards() { //hitung banyak kartu yang masih tertutup
            return this.cards.filter((card) => !card.isCleared)
        },
        async flipCard (card){
            if(this.flippedCards.length === 2) return;
            card.isFlipped = ! card.isFlipped; //buka / tutup kartu
        
            // jika 2 kartu dibuka warnanya sama, maka akan hilang
            if (this.flippedCards.length === 2) {
                if (this.flippedCards[0].color === this.flippedCards[1].color) {
                    this.flippedCards.forEach((card) => card.animate = 'animate__animated animate__heartBeat');
                    await delay();
                    this.flippedCards.forEach((card) => card.isCleared = true);

                    //cek apakah semua kartu hilang semua
                    if (this.remainingCards.length === 0) {
                        await delay(200)
                        alert('You WON!!!!');
                        location.reload();
                    }
                }

                this.flippedCards.forEach((card) => card.animate = 'animate__animated animate__wobble');
                // tutup lagi semua kartu, setelah pemeriksaan
                await delay()
                this.flippedCards.forEach((card) => card.isFlipped = false);

                // kosongkan class animate
                this.remainingCards.forEach((card) => card.animate = '');

            }
            
        }
    };
};