// Get all buttons and images
const buttons = document.querySelectorAll('.btnpart button');
const images = document.querySelectorAll('.imgpart img');

// Prevent scrolling
// window.addEventListener('wheel', function(event) {
//     event.preventDefault();
// }, { passive: false });

// Function to handle button clicks
function handleButtonClick(event) {
  // Remove 'active' and 'slide-in' classes from all buttons and images
  buttons.forEach(button => button.classList.remove('active'));
  images.forEach(image => {
    image.classList.remove('active', 'slide-in');
  });

  // Get the clicked button's ID
  const buttonId = event.target.id;

  // Add 'active' class to the clicked button
  event.target.classList.add('active');

  // Show the corresponding image
  const imageId = buttonId.replace('btn', 'img');
  const activeImage = document.getElementById(imageId);
  activeImage.classList.add('active', 'slide-in'); // Add 'slide-in' class for the slide effect
}

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Ensure the first button and image are active by default
document.getElementById('btn1').classList.add('active');
document.getElementById('img1').classList.add('active', 'slide-in');

// Get all buttons
const buttonsSize = document.querySelectorAll('.sizepart button');

// Function to handle button clicks
function handleButtonClicked(event) {
  // Remove 'active' class from all buttons
  buttonsSize.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button
  event.target.classList.add('active');
}

// Add click event listeners to all buttons
buttonsSize.forEach(button => {
  button.addEventListener('click', handleButtonClicked);
});

// Ensure the first button is active by default
document.getElementById('button1').classList.add('active');

// Get all buttons
let logoName = document.querySelector(".logo-name p");
let backnameDiv = document.querySelector(".backname-div p");
let infoPartH3 = document.querySelector(".infoparth3");
let infoPartP = document.querySelector(".infopartp");

// Function to handle button clicks
function handleButtonClickedtwice(event) {
  // Remove 'active' class from all buttons
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button
  event.target.classList.add('active');

  // Change body background color based on the button ID
  const buttonId = event.target.id;
  switch (buttonId) {
    case 'btn1':
      document.body.style.backgroundColor = 'wheat'; // White
      logoName.style.color="black";
      backnameDiv.style.color="black";
      infoPartH3.style.color="black";
      infoPartP.style.color="black";
      break;
    case 'btn2':
      document.body.style.backgroundColor = '#ffa100'; // Gold
      logoName.style.color="black";
      backnameDiv.style.color="black"
      infoPartH3.style.color="black";
      infoPartP.style.color="black"; 
      break;
    case 'btn3':
      document.body.style.backgroundColor = '#32ad32'; // Green Glow
      logoName.style.color = '#ffffff'; 
      backnameDiv.style.color="#ffffaa"
      infoPartH3.style.color="#ffffff";
      infoPartP.style.color="#ffffff";
      break;
    case 'btn4':
      document.body.style.backgroundColor = '#fa0000'; // Red
      logoName.style.color = '#ffffff';
      backnameDiv.style.color="#ffffaa"
      infoPartH3.style.color="#ffffff";
      infoPartP.style.color="#ffffff"; 
      break;
    case 'btn5':
      document.body.style.backgroundColor = '#1A1A1D'; // Black
      logoName.style.color="#ffffff";
      backnameDiv.style.color="#ffffaa"
      infoPartH3.style.color="#ffffff";
      infoPartP.style.color="#ffffff";
      break;
    default:
      document.body.style.backgroundColor = '#ffffff'; // Default to white
  }
}

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClickedtwice);
});

// Ensure the first button is active by default
document.getElementById('btn1').classList.add('active');
document.body.style.backgroundColor = 'wheat'; // Set default background color to black
logoName.style.color = '#00000';
