document.getElementById('check-btn').addEventListener('click', function() {
  const textInput = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('correct-gif').style.display = 'none';
    document.getElementById('incorrect-gif').style.display = 'none';
  });
  const correctGif = document.getElementById('correct-gif');
  const incorrectGif = document.getElementById('incorrect-gif');
  if (textInput === '') { alert('Please input a value');
    return;
  }
    // Remove non-alphanumeric characters and convert to lowercase
  const cleanedInput = textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
    resultElement.textContent = `${textInput} is a palindrome`;
    correctGif.style.display = 'block';
    incorrectGif.style.display = 'none';
  } 
  else {
    resultElement.textContent = `${textInput} is not a palindrome`;
    correctGif.style.display = 'none';
    incorrectGif.style.display = 'block';
  }
});