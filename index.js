// Functionality for open and close sidebar in responsive mode
var btnSidebarClose = document.getElementById("btn-sidebar-close");
var btnSidebarOpen = document.getElementById("btn-sidebar-open");
var sidebar = document.getElementById("sidebar");

var messageNotification = document.querySelector("#mesgges-notification");
var messages = document.querySelector("#messages");

btnSidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close-menu");
});

btnSidebarOpen.addEventListener("click", () => {
  sidebar.classList.remove("close-menu");
});

// Functionality for active each item in sidebar when clicked !
const menuItems = document.querySelectorAll(".menu-item");

// Remove active class in other Items
changeActiveClass = () => {
  menuItems.forEach(item => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else if (messages.getAttribute("style").includes("boxShadow") != null) {
      messages.style.boxShadow = "none";
    }
  });
};

// Add active class
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    changeActiveClass();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// Functionality for Messages

messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  // setTimeout(() => {}, 2000);
});
