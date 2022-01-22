// sidebar in responsive mode
var btnSidebarClose = document.getElementById("btn-sidebar-close");
var btnSidebarOpen = document.getElementById("btn-sidebar-open");
var sidebar = document.getElementById("sidebar");

btnSidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close-menu");
});

btnSidebarOpen.addEventListener("click", () => {
  sidebar.classList.remove("close-menu");
});
