// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

let currentProfileIndex = 0;



document.getElementById("like-btn").addEventListener("click", () => {
    currentProfileIndex++;

    document.getElementById("like-label").style.display = "block";

    profiles[currentProfileIndex].isSwiped();
    profiles[currentProfileIndex].isLiked();
}); 

document.getElementById("reject-btn").addEventListener("click", () => {
    currentProfileIndex++;

    document.getElementById("nope-label").style.display = "block";

    profiles[currentProfileIndex].isSwiped();
}); 

function render() {
    document.getElementById("profile").innerHTML = profiles[currentProfileIndex].getProfileHtml();
}

// document.getElementById("like-btn").addEventListener("click", likeProfile);
// document.getElementById("reject-btn").addEventListener("click", rejectProfile);

// Create an array of dog profiles
const profiles = dogData.map(data => new Dog(data));

render();


