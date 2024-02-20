const menu = [
    {
      id: "1",
      title: "Pancakes",
      img: "images/pancakes.jpg",
      price: "8.99",
      category: "breakfast",
      desc: "Fluffy pancakes served with maple syrup and butter."
    },
    {
      id: "2",
      title: "Classic Burger",
      img: "images/pancakes.jpg",
      price: "12.99",
      category: "lunch",
      desc: "Juicy beef patty with lettuce, tomato, and special sauce."
    },
    {
      id: "3",
      title: "Avocado Toast",
      img: "images/pancakes.jpg",
      price: "10.99",
      category: "breakfast",
      desc: "Sliced avocado on toasted whole-grain bread with poached eggs."
    },
    {
      id: "4",
      title: "Caesar Salad",
      img: "images/pancakes.jpg",
      price: "9.99",
      category: "lunch",
      desc: "Fresh romaine lettuce, croutons, and parmesan cheese with Caesar dressing."
    },
    {
      id: "5",
      title: "Blueberry Pancakes",
      img: "images/pancakes.jpg",
      price: "9.99",
      category: "breakfast",
      desc: "Pancakes filled with blueberries, topped with powdered sugar."
    },
    {
      id: "6",
      title: "Chicken Wrap",
      img: "images/pancakes.jpg",
      price: "11.99",
      category: "lunch",
      desc: "Grilled chicken, lettuce, tomatoes, and ranch dressing in a tortilla wrap."
    },
    {
      id: "7",
      title: "Egg Benedict",
      img: "images/pancakes.jpg",
      price: "12.99",
      category: "breakfast",
      desc: "Poached eggs on English muffins with Canadian bacon and hollandaise sauce."
    },
    {
      id: "8",
      title: "Vegetarian Pizza",
      img: "images/pancakes.jpg",
      price: "14.99",
      category: "lunch",
      desc: "Pizza topped with a variety of fresh vegetables and melted cheese."
    },
    {
      id: "9",
      title: "Chocolate Shake",
      img: "images/pancakes.jpg",
      price: "6.99",
      category: "shakes",
      desc: "Rich and creamy chocolate shake with whipped cream and chocolate drizzle."
    },
    {
      id: "10",
      title: "Fruit Smoothie",
      img: "images/pancakes.jpg",
      price: "7.99",
      category: "shakes",
      desc: "Refreshing blend of assorted fruits with yogurt and ice."
    }
  ];

  
 // Selecting HTML elements for menu display and filter buttons
const menuContainer = document.querySelector(".section-center");
const filterContainer = document.querySelector(".filter-buttons");

// Event listener for when the DOM has fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Display the initial menu items and filter buttons
  displayMenuItems(menu);
  displayMenuButtons(menu);
});

// Function to display filter buttons
function displayMenuButtons(menuButton) {
  // Extracting unique categories from the menu items
  const displayFilters = menuButton.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"]);

  // Creating HTML for filter buttons based on categories
  const filterBtns = displayFilters.map((category) => {
    return `<button class="filter-btn" data-id=${category}> ${category} </button>`;
  }).join('');

  // Displaying filter buttons in the filter container
  filterContainer.innerHTML = filterBtns;

  // Adding click event listeners to each filter button
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const cat = e.target.dataset.id;

      // Filtering menu items based on the selected category
      const displayMenu = menu.filter(item => {
        if (item.category === cat) {
          return item;
        }
      });

      // Displaying all menu items or items based on the selected category
      if (cat === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(displayMenu);
      }
    })
  });
};

// Function to display all menu items
function displayMenuItems(menuItems) {
  // Creating HTML for each menu item
  let displayMenu = menuItems.map(function(item) {
    return `<div class="menu-item">
                <img src=${item.img} alt=${item.title}>
                <div class="item-info">
                    <div class="item-title">
                        <div class="name">${item.title}</div>
                        <div class="price">$${item.price}</div>
                    </div>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </div>`;
  }).join('');

  // Displaying menu items in the menu container
  menuContainer.innerHTML = displayMenu;
}