const cardArray = [
    {
        name: "blanc",
        img: "./image/blanc.png"
    },
    {
        name: "bleu",
        img: "./image/bleu.png"
    },
    {
        name: "noir",
        img: "./image/noir.png"
    },
    {
        name: "rouge",
        img: "./image/rouge.png"
    },
    {
        name: "vert",
        img: "./image/vert.png"
    },
    {
        name: "bleu",
        img: "./image/bleu.png"
    },
    {
        name: "noir",
        img: "./image/noir.png"
    },
    {
        name: "rouge",
        img: "./image/rouge.png"
    },
    {
        name: "vert",
        img: "./image/vert.png"
    },
    {
        name: "blanc",
        img: "./image/blanc.png"
    }
    
]


cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray);

let gridDisplay = document.querySelector("#grid")
let result = document.querySelector("#result")
let cardChosen = []
let cardChosenId=[]
cardWon = []
function createBoard() {
    for(let i = 0; i < 10; i++){
       const card = document.createElement("img");
       card.setAttribute("src", "./image/magic.png")
       card.setAttribute("data-id", i)
       card.addEventListener('click', flipCard)
       console.log(card, i);
       gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    let cards = document.querySelectorAll('#grid img')
    // console.log("check");
    // console.log(cards);
    if(cardChosen[0] == cardChosen[1]){
        console.log("une paire");
        cards[cardChosenId[0]].setAttribute("src", "./image/logo.png")
        cards[cardChosenId[1]].setAttribute("src", "./image/logo.png")
        cards[cardChosenId[0]].removeEventListener("click", flipCard)
        cards[cardChosenId[1]].removeEventListener("click", flipCard)
        cardWon.push(cardChosen)
    }else{
        cards[cardChosenId[0]].setAttribute("src", "./image/magic.png")
        cards[cardChosenId[1]].setAttribute("src", "./image/magic.png")
        alert("raté")
    }
    cardChosen = []
    cardChosenId = []
    if(cardWon.length == cardArray.length/2){
        result.innerHTML = "felicitation"
    }
}

function flipCard() {
   let cardId = this.getAttribute("data-id")
   cardChosen.push(cardArray[cardId].name)
   cardChosenId.push(cardId);
//    console.log(cardChosenId);
//     console.log("clicked", cardId);
//     console.log(cardChosen);
    this.setAttribute("src", cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}