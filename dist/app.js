"use strict";
class MediaCounter {
    constructor() {
        this.count = 0;
    }
    increment(container, maxCount) {
        container.innerHTML = `${this.count}`;
        this.count++;
        if (this.count > maxCount) {
            clearInterval(this.interval);
        }
    }
    intervalSet(container, maxCount) {
        this.interval = setInterval(() => {
            this.increment(container, maxCount);
        }, 0.000000001);
    }
    setSocialLogo(container, socialLogo, text, maxCount) {
        const logo = document.createElement('p');
        logo.classList.add('social-logo');
        logo.innerHTML = socialLogo;
        const textContainer = document.createElement('p');
        textContainer.innerHTML = text;
        textContainer.classList.add('social-text');
        const span = document.createElement('span');
        span.classList.add('social-count');
        this.intervalSet(span, maxCount);
        container.append(logo, span, textContainer);
    }
}
const counterFacebook = new MediaCounter();
const counterTwitter = new MediaCounter();
const counterInstagram = new MediaCounter();
const socialContainer1 = document.querySelector('.container1');
const socialContainer2 = document.querySelector('.container2');
const socialContainer3 = document.querySelector('.container3');
const facebook = '<i class="fab fa-facebook-square"></i>';
const twitter = '<i class="fab fa-twitter-square"></i>';
const instagram = '<i class="fab fa-instagram"></i>';
counterFacebook.setSocialLogo(socialContainer1, facebook, 'Likes', 1440);
counterTwitter.setSocialLogo(socialContainer2, twitter, 'Followers', 1650);
counterInstagram.setSocialLogo(socialContainer3, instagram, 'Connections', 1500);
