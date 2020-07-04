
const startGameBtn = document.getElementById('start-game-btn')

function greet() {
    console.log('hello there')    
}

greet();

const person ={
    name : 'shazia'
}
 console.log(person.name);

function createObject(){
    person : function greet(){
        console.log("inside create Object")
    }
}
startGameBtn.addEventListener('click',createObject)