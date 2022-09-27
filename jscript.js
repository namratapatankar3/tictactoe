let turnmusic = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let music = new Audio("music.mp3")
let turn = "X"
let isGameOver = false
let changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
//function to check win
const checkWin = () => {
    let btext = document.getElementsByClassName('boxtext')

    let wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    wins.forEach(e => {
      
        if ((btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[1]].innerText === btext[e[2]].innerText) && (btext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = btext[e[0]].innerText + " Won the game"
            isGameOver = true
            document.querySelector('.imginfo').getElementsByTagName('img')[0].style.width = "200px"
            gameover.play()
        }
    })
}
//music.play()
//main logic
let boxes = document.getElementsByClassName('box')
let count = 0
Array.from(boxes).forEach((element) => {
    let boxtxt = element.querySelector('.boxtext')
    element.addEventListener("click", () => {
        if (boxtxt.innerText === '')
            boxtxt.innerText = turn
        turn = changeTurn()
        turnmusic.play()
        checkWin()
        if (!isGameOver) {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            count++;
            }
        if (!isGameOver && count == 9) {
            document.querySelector('.info').innerText = "its Draw !! play again !! good luck"
        }
    })
})
//function to reset
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    let texts = document.getElementsByClassName('boxtext')
    Array.from(texts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isGameOver = false
    count=0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.querySelector('.imginfo').getElementsByTagName('img')[0].style.width = "0"
})

