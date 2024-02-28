document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the "Next" button
    const nextButton = document.getElementById('next');
  
    // Add an event listener to the "Next" button
    nextButton.addEventListener('click', function() {
      // Redirect to the rules.html page
      window.location.href = 'rules.html';
    });
  });
  