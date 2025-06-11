function setActive(button) {
    // Remove the "active" class from all buttons
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    // Add the "active" class to the clicked button
    button.classList.add("active");
  }


// Get references to the buttons
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Add event listeners to the buttons
loginBtn.addEventListener('click', function() {
    alert('You are logged in!');
});

signupBtn.addEventListener('click', function() {
    alert('Thank you for signing up!');
});


document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.getElementById('testimonials');
  const leftSlider = document.getElementById('leftSlider');
  const rightSlider = document.getElementById('rightSlider');
  
  let currentPosition = 0;
  const slideWidth = 33.33; // Percentage of one slide

  function updateSliderButtons() {
    leftSlider.disabled = currentPosition === 0;
    rightSlider.disabled = currentPosition === -slideWidth;
  }

  rightSlider.addEventListener('click', function() {
    if (currentPosition > -slideWidth) {
      currentPosition -= slideWidth;
      testimonials.style.transform = `translateX(${currentPosition}%)`;
      updateSliderButtons();
    }
  });

  leftSlider.addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += slideWidth;
      testimonials.style.transform = `translateX(${currentPosition}%)`;
      updateSliderButtons();
    }
  });

  updateSliderButtons();
});