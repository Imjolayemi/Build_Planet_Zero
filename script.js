// This script handles the functionality of the toggle buttons and auto-changing containers
  document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container1');
    const toggles = document.getElementById('toggles');
    let current = 0;

    // Create toggle buttons dynamically
    containers.forEach((_, index) => {
      const btn = document.createElement('button');
      btn.addEventListener('click', () => showContainer(index));
      toggles.appendChild(btn);
    });

    const toggleButtons = toggles.querySelectorAll('button');

    function showContainer(index) {
      containers[current].classList.remove('active');
      toggleButtons[current].classList.remove('active');
      current = index;
      containers[current].classList.add('active');
      toggleButtons[current].classList.add('active');
    }

    function showNextContainer() {
      let next = (current + 1) % containers.length;
      showContainer(next);
    }

    // Initialize first button as active
    toggleButtons[current].classList.add('active');

    // Auto-change every 5 seconds
    setInterval(showNextContainer, 2000);
  });
