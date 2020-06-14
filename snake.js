import {getInputDirection} from "./input.js"
import {getLocation as getFoodLoction}  from "./food.js" 

export const SPEED = 5 //how many times it moves per second
export let eaten = false//used to let the food know its been eaten
const snakeBody = [{x:11,y:11}]


//check if youre on the food
function eat(){
    const foodLocation = getFoodLoction()
    eaten = false

    for(let i=0 ; i<snakeBody.length ; i++){
        if(snakeBody[i].x === foodLocation.x && snakeBody[i].y === foodLocation.y){
            eaten = true
            break
        }
    }
}



//just gotta figure out growing and out of bounds
export function update(){
    const inputDirection = getInputDirection()

    //movement is done by just shifting elements in the array
    for(let i = snakeBody.length - 2 ; i >=0 ; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }

    

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    eat()
}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}
