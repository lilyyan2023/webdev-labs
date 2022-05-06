/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const isPressed = window.localStorage.getItem("dyslexia") === "true";
  if (isPressed) {
    // change to dyslexia-mode
    document.querySelector('body').className = 'dyslexia-mode';
  } else {
    // optional
    document.querySelector('body').className = '';
  }
}
const changetoDyslexia = () => {
  if (document.querySelector('body').className == 'dyslexia-mode') {
    document.querySelector('body').className = '';
    /* get a dictionary */
    window.localStorage.setItem("dyslexia", "false");
  } else {
    document.querySelector('body').className = 'dyslexia-mode';
    window.localStorage.setItem("dyslexia", "true");
  }
}

document.querySelector("#dyslexia-toggle").addEventListener("click", changetoDyslexia);
initPage();