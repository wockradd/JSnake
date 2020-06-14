import {eaten} from "./snake.js"

let food = {x:(Math.floor(Math.random() * 21) + 1), y:(Math.floor(Math.random() * 21) + 1)}

export function getLocation(){
    return food
}





export function update(){
   if(eaten){
    food.x = Math.floor(Math.random() * 21) + 1
    food.y = Math.floor(Math.random() * 21) + 1
   }
}

export function draw(gameBoard) {
    const foodElement = document.createElement("div")
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}