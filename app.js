// Retrieve the toggle button element
const toggleButton = document.getElementById("toggle-btn");

// Retrieve the sidebar element
const sidebar = document.getElementById("sidebar");

// Function to toggle the sidebar
function toggleSidebar() {
  // Toggle the "close" class on the sidebar element
  sidebar.classList.toggle("close");

  // Toggle the "rotate" class on the toggle button element
  toggleButton.classList.toggle("rotate");

  // Close all submenus when the sidebar is toggled
  closeAllSubMenus();

  const userSubmenu = document.getElementById("user__submenu");
  if (sidebar.classList.contains("close")) {
    userSubmenu.classList.remove("open-menu");
  }
}

// Function to toggle a submenu
function toggleSubMenu(button) {
  // Check if the submenu is not already open
  if (!button.nextElementSibling.classList.contains("show")) {
    // Close all submenus before opening a new one
    closeAllSubMenus();
  }

  // Toggle the "show" class on the submenu element
  button.nextElementSibling.classList.toggle("show");

  // Toggle the "rotate" class on the button element
  button.classList.toggle("rotate");

  // If the sidebar is currently closed, open it when a submenu is opened
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

// Function to close all submenus
function closeAllSubMenus() {
  // Get all submenu elements with the "show" class
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    // Remove the "show" class from each submenu element
    ul.classList.remove("show");

    // Remove the "rotate" class from the previous sibling element (the button)
    ul.previousElementSibling.classList.remove("rotate");
  });
}

/*=============== user menu ===============*/
function toggleMenu() {
  const submenu = document.getElementById("user__submenu");
  submenu.classList.toggle("open-menu");
}

/*=============== SEARCH ===============*/
const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

/* Search show */
searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

/* Search hidden */
searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});
