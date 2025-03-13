// Get DOM elements
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressLine = document.getElementById('progress-line');

let currentStep = 0; // The first circle is active initially

// Function to update progress
function updateProgress() {
  // Activate circles up to the current step
  circles.forEach((circle, index) => {
    if (index <= currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update the width of the progress line
  progressLine.style.width = `${(currentStep / (circles.length - 1)) * 100}%`;

  // Enable or disable buttons
  prevButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === circles.length - 1;
}

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
  if (currentStep < circles.length - 1) {
    currentStep++;
    updateProgress();
  }
});

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateProgress();
  }
});

// Initial progress update
updateProgress();
