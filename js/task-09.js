function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  const btn = document.querySelector('.change-color');
  const colorHex = document.querySelector('.color');

const body = document.querySelector('body');

 btn.addEventListener('click', () => {
   const colorName = getRandomHexColor();
   colorHex.textContent = colorName;
   body.style.backgroundColor = colorName;
    
  }); 