let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener("click", function () {
    let navbar = document.querySelector('.nav-bar')
    navbar.classList.toggle('active')
})

// Add event listener for the mouseover event on each menu item
const menuItems = document.querySelectorAll(".nav-bar li");
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseover", () => {
        // Add the "hover" class to the menu item
        menuItem.classList.add("hover");
    });

    menuItem.addEventListener("mouseout", () => {
        // Remove the "hover" class from the menu item
        menuItem.classList.remove("hover");
    });
});

let navigation = document.querySelector('header')

window.addEventListener("scroll", () => {
    // Check if the window has been scrolled past the top of the document
    if (window.scrollY > 0) {
        // If so, add the "scrolled" class to the navigation menu
        navigation.classList.add("scrolled");
    } else {
        // Otherwise, remove the "scrolled" class from the navigation menu
        navigation.classList.remove("scrolled");
    }
});