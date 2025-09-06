const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const reset = document.querySelector('#reset')
const maxwinPoint = document.querySelector('#winpoint');
const warning = document.querySelector('#warning');

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score >= winPoint) {
      isGameOver = true;
    }
  }
  p1Display.textContent = p1Score;
})

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score >= winPoint) {
      isGameOver = true;
    }
  }
  p2Display.textContent = p2Score;
})

reset.addEventListener('click', function(){
  warning.innerText = '';
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p2Score;
  p2Display.textContent = p2Score;
})

maxwinPoint.addEventListener('change', function(){
  let maxwinPointVal = parseInt(this.value);

  if (winPoint > maxwinPointVal && isGameOver){
    warning.innerText = 'Reset terlebih dahulu!';
    // document.body.append(warning);
    return;
  }

  isGameOver = false;
  winPoint = maxwinPointVal;
})
