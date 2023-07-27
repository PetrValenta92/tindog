// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    isSwiped() {
      return this.hasBeenSwiped = true;
    }

    isLiked() {
      return this.hasBeenLiked = true;
    }

    getLabelHtml() {
      const { hasBeenSwiped, hasBeenLiked } = this;

      return hasBeenSwiped && hasBeenLiked ? 
      `
        <img
          id="like-label"
          class="label"
          src="./images/badge-like.png"
          alt="Like label"
        />
      ` : hasBeenSwiped && !hasBeenLiked ? 
      `
        <img
          id="nope-label"
          class="label"
          src="./images/badge-nope.png"
          alt="Nope label"
        />
      ` : ``;
    }

    getProfileHtml() {
        const { name, avatar, age, bio } = this;
        const label = this.getLabelHtml();

        return `
          <div
            class="profile"
            style="background-image: url(./${avatar})"
          >
            ${label}
            <h2 class="profile-name">${name}, ${age}</h2>
            <p class="profile-bio">${bio}</p>
          </div>
        `
    }
}

export default Dog;