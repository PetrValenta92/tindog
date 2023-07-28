// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

let dogsArray = [ ...Array(dogData.length).keys() ];

function getNewProfile() {
    const nextDogData = dogData[dogsArray.shift()];
    return nextDogData ? new Dog(nextDogData) : {};
}

function likeProfile() {
    dogProfile.isLiked();
    dogProfile.isSwiped();
    render();

    setTimeout(() => {
        dogProfile = getNewProfile();
        render();
    }, 1500);

    
}

function rejectProfile() {
    dogProfile.isSwiped();
    render();

    setTimeout(() => {
        dogProfile = getNewProfile();
        render();
    }, 1500);
}

function render() {
    document.getElementById("profile").innerHTML = dogProfile.getProfileHtml();
}

document.getElementById("like-btn").addEventListener("click", likeProfile); 
document.getElementById("reject-btn").addEventListener("click", rejectProfile); 

let dogProfile = getNewProfile();

render();

