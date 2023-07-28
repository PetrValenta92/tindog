// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

const likeBtn = document.getElementById("like-btn");
const rejectBtn = document.getElementById("reject-btn");

let dogsIndexArray = [ ...Array(dogData.length).keys() ];

function getNewProfile() {
    const nextDogData = dogData[dogsIndexArray.shift()];
    return nextDogData ? new Dog(nextDogData) : {};
}

function likeProfile() {
    disableBtns();
    dogProfile.isLiked();
    dogProfile.isSwiped();
    render();  
}

function rejectProfile() {
    disableBtns();
    dogProfile.isSwiped();
    render();
}

function showNextProfile() {
    if (dogsIndexArray.length > 0) {
        setTimeout(() => {
            dogProfile = getNewProfile();
            enableBtns();
            render();
        }, 1000);
    } else {
        endApp();
    }    
}

function disableBtns() {
    likeBtn.disabled = true;
    rejectBtn.disabled = true;
}

function enableBtns() {
    likeBtn.disabled = false;
    rejectBtn.disabled = false;
}

function endApp() {
    console.log("No more profiles!");
}

function render() {
    document.getElementById("profile").innerHTML = dogProfile.getProfileHtml();
}

likeBtn.addEventListener("click", () => {
    likeProfile();
    showNextProfile();
}); 

rejectBtn.addEventListener("click", () => {
    rejectProfile();
    showNextProfile();
}); 

let dogProfile = getNewProfile();

render();

