
  const text = `Uplifting women in EECS with hands on software and hardware projects, workshops, and mentorship!`;

  const target = document.getElementById('typewriter');
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeChar, 30); // Typing speed in ms
    }
  }

  document.addEventListener("DOMContentLoaded", typeChar);
