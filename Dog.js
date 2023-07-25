// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getProfileHtml() {
        const { name, avatar, age, bio } = this;

        return `
        <div
            class="profile"
            style="background-image: url(./images/dog-rex.jpg)"
          >
            <img
              id="like-label"
              class="label"
              src="./images/badge-like.png"
              alt="Like label"
            />
            <img
              id="nope-label"
              class="label"
              src="./images/badge-nope.png"
              alt="Nope label"
            />
            <h2 class="profile-name">Rex, 25</h2>
            <p class="profile-bio">Art. Literature. Natural wine. Yoga.</p>
          </div>
        `
    }
}

export default Dog;