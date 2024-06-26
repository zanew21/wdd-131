
const dropdown = document.getElementById('dropdown');

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function populateDropdown() {
    // Clear existing options
    dropdown.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select a Product';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    // Add options for each product
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.text = product.name;
        dropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown initially
populateDropdown();

document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage supports and has a reviewCounter, initialize to 0 if not present
    if (!localStorage.getItem('reviewCounter')) {
        localStorage.setItem('reviewCounter', 0);
    }

    // Get the counter element
    const counterElement = document.getElementById('reviewCounter');

    // Increment the counter in localStorage
    localStorage.setItem('reviewCounter', parseInt(localStorage.getItem('reviewCounter')) + 1);

    // Display the updated counter value
    counterElement.textContent = localStorage.getItem('reviewCounter');
});
