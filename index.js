// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

let currentProfileIndex = 0;

function likeProfile() {
    dogProfile.isLiked();
    dogProfile.isSwiped();

    render();
}

function rejectProfile() {
    dogProfile.isSwiped();

    render();
}

function render() {
    document.getElementById("profile").innerHTML = dogProfile.getProfileHtml();
}

document.getElementById("like-btn").addEventListener("click", likeProfile); 
document.getElementById("reject-btn").addEventListener("click", rejectProfile); 

// Create an array of dog profiles
const profiles = dogData.map(data => new Dog(data));
let dogProfile = profiles[currentProfileIndex];

render();


