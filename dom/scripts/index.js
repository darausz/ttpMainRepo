//getElementById()
//set and display element
// const element = document.getElementById("myElement");
// console.log(element);

//change text
// element.textContent = "changed text";

//change html content
// const paragraph = document.getElementById("paragraph");
// paragraph.innerHTML = "<strong>New Content</strong>";

//change css
// let property = document.getElementById("property");
// property.style.backgroundColor = "blue";
// property.style.fontSize = "2rem";
// property.style.textAlign = "center";

//getElementsByClassName()
//get class length
// let elements = document.getElementsByClassName("myClass");
// console.log(elements)
// console.log(elements.length);
// elements[1].style.border = "2px solid red";

//add new class to element
// const myClass2 = document.getElementsByClassName("myClass2");
// console.log(myClass2);
// myClass2[0].textContent = "modified text";
// myClass2[0].classList.add("newClass");

//remove class
// const myClass3 = document.getElementsByClassName("myClass3");
// myClass3[0].classList.remove("myClass3");

//toggle class
// const buttons = document.getElementsByClassName("toggle-button");
// function toggleClass() {
//     for (let i =  0; i < buttons.length; i++) {
//         buttons[i].classList.toggle("active")
//     }
// }
// toggleClass();

//querySelector - selects first element it sees
//select div
const element = document.querySelector("div");
console.log(element);
element.textContent = "new text";

//change id background color
const element2 = document.querySelector("#myElement");
element2.style.backgroundColor = "pink";

//change class font size
const element3 = document.querySelector(".myClass");
element3.style.fontSize = "2rem";

//change img
const image = document.querySelector("img");
image.setAttribute("src", "../../project1/images/p5.jpg")

//run function on button click
function getValue() {
    const input = document.querySelector("#myInput");
    const value = input.value;
    console.log(value);
}

//querySelectorAll()
function highlightItems() {
    const listItems = document.querySelectorAll("#myList li");
    listItems.forEach(function(item) {
        item.style.backgroundColor = "yellow";
    });
}
highlightItems();

function printText() {
    console.log("clicking button");
}

//disable buttons
function disableButtons() {
    const buttons = document.querySelectorAll(".container button");
    buttons.forEach(function (b) {
        b.disabled = true;
    });
}

//number guessing game
let randomNum = Math.trunc(Math.random() * 6) + 1 //randomizes 1 to 6
function changeMsg(text) {
    document.querySelector(".par").textContent = text;
}

function check() {
    let inputFromUser = Number(document.querySelector(".numInput").value);
    if (!inputFromUser) {
        changeMsg("please enter a valid number");
    }
    if (inputFromUser === randomNum) {
        changeMsg("you win");
        document.querySelector("body").style.backgroundColor="green"
    }
    else {
        changeMsg("try again");
        document.querySelector("body").style.backgroundColor="white"
    }
}

//create element
let newElement = document.createElement("p");
console.log(newElement);
newElement.textContent = "I just created this";

//append element to body
document.body.appendChild(newElement);

//append element to id
const div = document.createElement("div");
div.classList.add("box");
document.getElementById("container1").appendChild(div);

//remove all children
function removeMultipleChildElements() {
    const container = document.getElementById("container2");
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        container.removeChild(paragraph);
    })
}
removeMultipleChildElements();

//event listener
//mouse click
const button1 = document.getElementById("click-me");
button1.addEventListener("click", function() {
    console.log("button clicked")
})

const buttonCount = document.getElementById("count-me");
let clickCount = 0;
buttonCount.addEventListener("click", () => {
    clickCount++;
    console.log(`this button has been clicked ${clickCount} times`);
})

//mouseover
const hover = document.getElementById("hover-me");
hover.addEventListener("mouseover", () => {
    console.log("the mouse moved over this element");
})

//mouseout
document.addEventListener("mouseout", () => {
    console.log("mouse moved away from this element");
})

//key down
document.addEventListener("keydown",(event) => {
    console.log(`I just pressed the ${event.key} key`);
})

//key up
document.addEventListener("keyup", (event) => {
    console.log(`I released the ${event.key} key`);
})

//getting input
let string = "";
document.addEventListener("keydown", (event) => {
    string += event.key;
    console.log(string);
})

const form = document.getElementById("form");
let submitCount = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

//parent and child
const container3 = document.getElementById("container3");
let children = container3.childNodes;
console.log(children);

let firstChild = container3.firstChild;
console.log(firstChild);

let lastChild = container3.lastChild;
console.log(lastChild);

//setTimeout and setInterval
function hello() {
    console.log("hello world")
}

setTimeout(hello, 1000);

setInterval(hello, 2000);

const textElement = document.getElementById("myText");
const textButton = document.getElementById("changeText");
textButton.addEventListener("click", () => {
    setTimeout(() => {
        textElement.textContent = "text changed";
    }, 2000);
})

const divElement = document.getElementById("myDiv");
let colors = ["red", "purple", "blue"];
let count = 0;

setInterval(() => {
    divElement.style.backgroundColor = colors[count % colors.legnth];
    count++
}, 2000);

