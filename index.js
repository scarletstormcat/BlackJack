let player = {
    name: "Per",
    chips: 0
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let loggedIn = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let gameContEl = document.getElementById("main-game")
let loginEl = document.getElementById("login")
let loginTextEl = document.getElementById("login-text-el")
let newCardBtnEl = document.getElementById("new-card-btn-el")

gameContEl.hidden = true

function login() {
    
    
    let inputValue = document.getElementById("login-text-el").value
    player.name = inputValue
    
    gameContEl.hidden = false
    newCardBtnEl.hidden = true
    loginEl.hidden = true
    playerEl.textContent = player.name + ": $" + player.chips
   
}

function updateScore(scoreChange) {
    player.chips += scoreChange
    playerEl.textContent = player.name + ": $" + player.chips
}


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        updateScore(50)
    } else {
        message = "You're out of the game!"
        isAlive = false
        newCardBtnEl.hidden = true

    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}