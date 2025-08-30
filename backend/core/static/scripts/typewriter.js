
  const text = `Uplifting women in EECS with hands on software and hardware projects, \nworkshops, and mentorship!`;

  const target = document.getElementById('typewriter');
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      const char = text.charAt(index);
      if (char === '\n') {
        target.innerHTML += '<br>';
      } else {
        
        target.innerHTML += char;
      }
      index++;
      setTimeout(typeChar, 30); // Typing speed in ms
    }
  }

  document.addEventListener("DOMContentLoaded", typeChar);
