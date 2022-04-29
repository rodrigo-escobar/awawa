const input = document.querySelector('.user-input');
const finalResult = document.querySelector('.result');

const message = document.querySelector('.copy-notification');

const button = document.querySelector('.copy');
const removeMessage = document.querySelector('.delete');

removeMessage.addEventListener('click', hiddeMessage);
button.addEventListener('click', onCopy);

let removeMessageTimeout;

function onCopy() {
  const changedString = changeString(input.value);

  finalResult.value = changedString;
  copyText();

  input.value = '';

  showMessage();

  if (removeMessageTimeout) {
    clearTimeout(removeMessageTimeout);
    removeMessageTimeout = null;
  }

  removeMessageTimeout = setTimeout(() => {
    hiddeMessage();
  }, 5000);
}

function showMessage() {
  message.classList.add('animate__bounceIn');
  message.classList.remove('hidden');
}

function hiddeMessage() {
  message.classList.remove('animate__bounceIn');
  message.classList.add('hidden');
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
