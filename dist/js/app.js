// HAMBURGER MENU BTN
const burgerBtn = document.querySelector(".burger");
// MENU
const navigation = document.querySelector(".navigation");
// MENU LINKS
const navLinks = document.querySelectorAll(".navigation li a");

// TOGGLE ACTIVE CLASS FOR HAMBURGER BTN ANIMATION
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  navigation.classList.toggle("navOpen");
});

// ADD MENU ACTIVE LINK CLASS
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveLink();
    item.classList.add("activeLink");
  });
});

// REMOVE ACTIVE NAV LINK FUNCTION
const clearActiveLink = () => {
  navLinks.forEach((item) => {
    item.classList.remove("activeLink");
  });
};

// language config object
const language = {
  en: {
    home: "home",
  },

  fr: {
    home: "accueil",
  },
};

// DEFINE LANGUAGE BUTTONS
var dataReload = document.querySelectorAll("[data-reload]");

// DEFINE LANGUAGE VIA WINDOW HASH
if (window.location.hash) {
  //  SETTING FRENCH LANGUAGE
  if (window.location.hash === "#fr") {
    menuHome.textContent = language.fr.home;
  }

  // SETTING ENGLISH LANGUAGE
  if (window.location.hash === "en") {
    menuHome.textContent = language.en.home;
  }
}

// REFRESHING THE WEBSITE AFTER LANGUAGE CHANGE
dataReload.forEach((e) => {
  e.addEventListener("click", function () {
    setTimeout(function () {
      location.reload(true);
    }, 200);
  });
});
