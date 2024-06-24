// Function to hide GIFs on DOMContentLoaded
function hideGifs() {
  document.getElementById('correct-gif').style.display = 'none';
  document.getElementById('incorrect-gif').style.display = 'none';
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', hideGifs);

// Function to handle the click event
function handleClick() {
  const textInput = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');
  const correctGif = document.getElementById('correct-gif');
  const incorrectGif = document.getElementById('incorrect-gif');

  if (textInput === '') {
    alert('Please input a value'); // This line shows the alert
    return;
  }

  const cleanedInput = textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
    resultElement.textContent = `${textInput} is a palindrome`;
    correctGif.style.display = 'block';
    incorrectGif.style.display = 'none';
  } else {
    resultElement.textContent = `${textInput} is not a palindrome`;
    correctGif.style.display = 'none';
    incorrectGif.style.display = 'block';
  }
}

// Event listener for click event
document.getElementById('check-btn').addEventListener('click', handleClick);
