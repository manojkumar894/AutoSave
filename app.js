// Select the textarea element
const textarea = document.getElementById('text-area');

// Function to save the text to localStorage
function saveText() {
  localStorage.setItem('autosave', textarea.value);
}

// Function to load the text from localStorage
function loadText() {
  const savedText = localStorage.getItem('autosave');
  if (savedText) {
    textarea.value = savedText;
  }
}

// Load the text when the page loads
window.onload = loadText;

// Save the text whenever the user types something
textarea.addEventListener('input', saveText);
