// Functionality for open and close sidebar in responsive mode
var btnSidebarClose = document.getElementById("btn-sidebar-close");
var btnSidebarOpen = document.getElementById("btn-sidebar-open");
var sidebar = document.getElementById("sidebar");

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
    } else if (messages.getAttribute("style") != null) {
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

// ********************************************************************************
// Functionality for Messages

// Messages varibale
var messageNotification = document.querySelector("#mesgges-notification");
var messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// search chat
const searchMessage = params => {
  const value = messageSearch.value.toLowerCase();

  message.forEach(user => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(value) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

//highlighte message card when message item is clikced
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  // setTimeout(() => {}, 2000);
});

// *****************************************************************
// Theme Coustomazition

// theme variable
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const FontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

// Fuctionality

//open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
  console.log("modal clicked");
};
theme.addEventListener("click", openThemeModal);

// close modal
const closthemeModal = e => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closthemeModal);

// FontSize

// remove active class from span or font size clicked
const reomveSizeSelector = () => {
  FontSizes.forEach(item => {
    item.classList.remove("active");
  });
};

// change fontSize
FontSizes.forEach(item => {
  item.addEventListener("click", () => {
    //
    let fontSize;
    reomveSizeSelector();
    item.classList.toggle("active");

    if (item.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----stick-top-right", "6.4rem");
      root.style.setProperty("----stick-top-left", "6.4");
    } else if (item.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----stick-top-right", "6.4rem");
      root.style.setProperty("----stick-top-left", "-7rem");
    } else if (item.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----stick-top-right", "-2rem");
      root.style.setProperty("----stick-top-left", "-17rem");
    } else if (item.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----stick-top-right", "-5rem");
      root.style.setProperty("----stick-top-left", "-25rem");
    } else if (item.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----stick-top-right", "-12rem");
      root.style.setProperty("----stick-top-left ", "-35rem");
    }
    //change the fontSize of root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});
