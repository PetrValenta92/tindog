// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

let currentProfileIndex = 0;

document.getElementById("like-btn").addEventListener("click", () => {
    console.log("Like btn clicked!");
    document.getElementById("like-label").style.display = "block";
}); 

function render() {
    document.getElementById("profile").innerHTML = profiles[currentProfileIndex].getProfileHtml();
}

const profiles = [
    new Dog(dogData[0]),
    new Dog(dogData[1]),
    new Dog(dogData[2])
];

render();


