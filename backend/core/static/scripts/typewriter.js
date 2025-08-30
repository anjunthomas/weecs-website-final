const text = `Uplifting women in EECS with hands on software and hardware projects, \nworkshops, and mentorship!`;

const target = document.getElementById('typewriter');
const button = document.querySelector('.hero-button');
let index = 0;

function typeChar() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeChar, 27); // Typing speed in ms
  } else {
    // Start button animation after typewriter completes
    if (button) {
      button.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slow');
    }
  }
}

document.addEventListener("DOMContentLoaded", typeChar);