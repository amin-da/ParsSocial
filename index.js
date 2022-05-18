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

// **** Modal ****
// variable
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

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

// **** FontSize *****
// variable
const FontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

// remove active class from span when other span clicked
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

// **** Change primary color ****
// variable
const colorPalete = document.querySelectorAll(".choose-color span");
// remove active class from span when other span clicked
const reomveActiveClass = () => {
  colorPalete.forEach(item => {
    item.classList.remove("active");
  });
};
//Fuctioanility
colorPalete.forEach(item => {
  let primaryHue;
  item.addEventListener("click", () => {
    reomveActiveClass();
    if (item.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (item.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (item.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (item.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (item.classList.contains("color-5")) {
      primaryHue = 202;
    }
    item.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// **** theme ****

// variable
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Background value - name similar to CSS variable names
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Functionality

const changeBg = () => {
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  darkColorLightness = "17%";
  whiteColorLightness = "100%";
  lightColorLightness = "95%";
  // add active class
  Bg1.classList.add("active");
  //  remoe active class from others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // remove cistomized changed
  // window.location.reload();
  changeBg();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // add active class
  Bg2.classList.add("active");
  //  remoe active class from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBg();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active class
  Bg3.classList.add("active");
  //  remoe active class from others
  Bg2.classList.remove("active");
  Bg1.classList.remove("active");
  changeBg();
});
