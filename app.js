import * as snake from "./snake.js" 
import * as food from "./food.js" 

let lastRenderTime = 0
const gameBoard = document.getElementById("gameBoard")

//this starts the main game loop
window.requestAnimationFrame(main)

//boilerplate to get the browser to render when we want it too, ie when the snake moves
//waste of time rendering every millisecond
function main(currentTime){
    window.requestAnimationFrame(main) 

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secondsSinceLastRender < 1/snake.SPEED){
        return
    }
    lastRenderTime = currentTime;

    update()
    draw()
}


function update(){
    snake.update()
    food.update()
}


function draw(){
    gameBoard.innerHTML = "" //clear the board first
    snake.draw(gameBoard)
    food.draw(gameBoard)
}




