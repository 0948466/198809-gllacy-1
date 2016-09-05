var linksearch = document.querySelector(".search");
var popupsearch = document.querySelector(".modal-content-search");
var formsearch = popupsearch.querySelector(".modal-search-form");
var search = popupsearch.querySelector(".modal-search");
    
linksearch.addEventListener("click", function (event) {
  event.preventDefault();      
  popupsearch.classList.add("show");
  search.focus();    
});

formsearch.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        if (!search.value) {
            console.log("Ошибка поиска");
        }
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popupsearch.classList.contains("show")) {
            popupsearch.classList.remove("show");
        }
    }
});

var linkentrance = document.querySelector(".entrance");
var popupentrance = document.querySelector(".modal-content-entrance");
var formlogin = popupentrance.querySelector(".login-form");
var loginemail = popupentrance.querySelector(".login-email");
var formpassword = popupentrance.querySelector(".password");
var storageloginemail = localStorage.getItem("loginemail");

linkentrance.addEventListener("click", function (event) {
  event.preventDefault();
  popupentrance.classList.add("show");   
    
  if (storageloginemail) {
      loginemail.value = storageloginemail;
      formpassword.focus();
  } else {
      loginemail.focus();
  }
});

formlogin.addEventListener("submit" ,function(event) {
  if (!loginemail.value || !formpassword.value) {
    event.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
      localStorage.setItem("loginemail", loginemail.value);
  }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popupentrance.classList.contains("show")) {
            popupentrance.classList.remove("show");
        }
    }
});

var linkshoppingcart = document.querySelector(".shopping-cart");
var popupshoppingcart = document.querySelector(".modal-content-shopping-cart");

linkshoppingcart.addEventListener("click", function (event) {
    event.preventDefault();
    popupshoppingcart.classList.add("show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popupshoppingcart.classList.contains("show")) {
            popupshoppingcart.classList.remove("show");
        }
    }
});

var linkfeedback = document.querySelector(".feedback-form");
var popupfeedback = document.querySelector(".modal-content-feedback");
var closefeedback = document.querySelector(".modal-feedback-close");
var overlay = document.querySelector(".modal-overlay");
var formfeedback = popupfeedback.querySelector(".modal-feedback-form");
var feedbackname = popupfeedback.querySelector(".feedback-name");
var feedbackemail = popupfeedback.querySelector(".feedback-email");
var feedbacktext = popupfeedback.querySelector(".feedback-text");

linkfeedback.addEventListener("click", function (event) {
  event.preventDefault();
  popupfeedback.classList.add("show");
  overlay.classList.add("show");
  feedbackname.focus();    
});

formfeedback.addEventListener("submit", function (event) {
    if (!feedbackname.value || !feedbackemail.value || !feedbacktext) {
        event.preventDefault();
        console.log("Нужно ввести данные во все поля");
    }
});

closefeedback.addEventListener("click", function (event) {
    event.preventDefault();
    popupfeedback.classList.remove("show");
    overlay.classList.remove("show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popupfeedback.classList.contains("show")) {
            popupfeedback.classList.remove("show");
            overlay.classList.remove("show");
        }
    }
});