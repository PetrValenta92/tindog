// Remember to import the data and Dog class!
import dogData from "./data.js";
import Dog from "./Dog.js";

let dogDataIndex = 0;

function getNewProfile() {
    const nextDogData = dogData[dogDataIndex];
    dogDataIndex ++;
    return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
    document.getElementById("profile").innerHTML = profile.getProfileHtml();
}

let profile = getNewProfile();

render();

