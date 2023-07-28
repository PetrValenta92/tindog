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
          class="label"
          src="./images/badge-like.png"
          alt="Like label"
        />
      ` : hasBeenSwiped && !hasBeenLiked ? 
      `
        <img
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
            class="profile flex"
            style="background-image: url(./${avatar})"
          >
            ${label}
            <h2 class="profile-name">${name}, ${age}</h2>
            <p class="profile-bio">${bio}</p>
          </div>
        `
    }

    getEndingHtml() {
        return `
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
            <button class="end-btn">Go Global</button>
          </div>
        `
    }
}

export default Dog;