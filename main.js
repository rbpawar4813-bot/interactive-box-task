// Standard Vanilla JS - No CSS imports here
document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.bundle-option');
  const totalPriceElement = document.querySelector('.total-price');

  // Function to update the total price in the footer
  const updateTotalPrice = (price) => {
    totalPriceElement.textContent = `Total : $${price} USD`;
  };

  // Handle click on option
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      // Prevent triggering if clicking directly on select elements to avoid closing/re-opening issues
      if (e.target.tagName === 'SELECT') return;

      // Remove selected class from all
      options.forEach(opt => {
        opt.classList.remove('selected');
        // Hide selectors
        const selectors = opt.querySelector('.selectors-container');
        if (selectors) selectors.style.display = 'none';
        
        // Uncheck radio
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = false;
      });

      // Add selected class to clicked
      option.classList.add('selected');
      
      // Show selectors
      const selectors = option.querySelector('.selectors-container');
      if (selectors) selectors.style.display = 'block';

      // Check radio
      const radio = option.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      // Update Footer Price
      const price = option.getAttribute('data-price');
      updateTotalPrice(price);
    });
  });
});
