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
        setTimeout(() => {
            renderEnd();
            document.getElementById("reset-btn").addEventListener("click", () => {
                enableBtns();
                dogsIndexArray = [ ...Array(dogData.length).keys() ];
                dogProfile = getNewProfile();
                render();
            });
            
        }, 1000);
    }    
}

function disableBtns() {
    likeBtn.disabled = true;
    likeBtn.style.filter = 'grayscale(1)';

    rejectBtn.disabled = true;
    rejectBtn.style.filter = 'grayscale(1)';

}

function enableBtns() {
    likeBtn.disabled = false;
    likeBtn.style.filter = 'grayscale(0)';

    rejectBtn.disabled = false;
    rejectBtn.style.filter = 'grayscale(0)';
}

function renderEnd() {
    document.getElementById("profile").innerHTML =  `
                <div class="end flex">
                    <img
                        class="end-gif"
                        src="https://i.gifer.com/1R8m.gif"
                        alt="Funny gif from Looney Tones"
                    />
                    <p class="end-message">
                        There's no one around you. Expand your discovery or go Global to
                        see more.
                    </p>
                    <button id="reset-btn" class="reset-btn">Go Global</button>
                </div>
            `;
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

