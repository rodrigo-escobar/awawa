const input = document.querySelector('.user-input');
const finalResult = document.querySelector('.result');

const button = document.querySelector('.copy');

button.addEventListener('click', onCopy);

function onCopy() {
  const changedString = changeString(input.value);

  finalResult.value = changedString;
  copyText();

  input.value = '';
}

function copyText() {
  finalResult.select();
  finalResult.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(finalResult.value);
  document.execCommand('copy');
}

const noChangeCharacters = [' ', '!', '?'];

function changeString(str = '') {
  let isA = true;
  let myString = [];

  if (str.length <= 0) {
    return '';
  }

  for (let i = 0; i <= str.length; i++) {
    if (str[i] != ' ') {
      if (isA) {
        myString.push('a');
        isA = false;
      } else {
        myString.push('w');
        isA = true;
      }
    } else {
      if (isA) {
        myString.push('a');
      }
      myString.push(' ');
      isA = true;
    }
  }

  return myString.join('');
}
