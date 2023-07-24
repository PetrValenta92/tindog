// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getProfileHtml() {
        const { name, avatar, age, bio } = this;

        return `
        <div class="profile" style="background-image: url(${avatar})"
      >
        <h2 class="profile-name">${name}, ${age}</h2>
        <p class="profile-bio">${bio}</p>
      </div>
        `
    }
}

export default Dog;