function surveyModal() {
  if ((localStorage.userViews) > 9) {
    logAlreadyDone();
  } else {
    setSurveyCookie();
    activateSurveyModal();
    logCompleted();
  }
}

function logAlreadyDone() {
  console.log("You have already completed the survey, thanks!");
}

function logCompleted() {
  console.log(
    "Survey has been shown, and surveyCompleted cookie has been set."
  );
}

function setSurveyCookie() {
  localStorage.surveyCompleted = true;
}

function activateSurveyModal() {
  var modal = document.querySelector("#survey-modal");
  var html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
  modal
    .querySelector("#survey-modal-close")
    .addEventListener("click", function(e) {
      e.preventDefault();
      modal.classList.remove("is-active");
      html.classList.remove("is-clipped");
    });
  modal
    .querySelector(".modal-background")
    .addEventListener("click", function(e) {
      e.preventDefault();
      modal.classList.remove("is-active");
      html.classList.remove("is-clipped");
    });
}

function hasVisited() {
  if (localStorage.hasVisited) {
    console.log("The hasVisited cookie is already created.");
  } else {
    setVisitedCookie();
    activateWelcomeModal();
    console.log("The hasVisited cookie has been created.");
  }

  function setVisitedCookie() {
    localStorage.hasVisited = true;
  }

  function activateWelcomeModal() {
    var modal = document.querySelector("#firstvisit");
    var html = document.querySelector("html");
    modal.classList.add("is-active");
    html.classList.add("is-clipped");
    modal.querySelector(".modal-close").addEventListener("click", function(e) {
      e.preventDefault();
      modal.classList.remove("is-active");
      html.classList.remove("is-clipped");
    });
    modal
      .querySelector(".modal-background")
      .addEventListener("click", function(e) {
        e.preventDefault();
        modal.classList.remove("is-active");
        html.classList.remove("is-clipped");
      });
  }
}

function userViews() {
  if (localStorage.userViews) {
    updateViews();
  } else {
    createViews();
  }

  function createViews() {
    localStorage.userViews = 1;
    console.log("Thanks for visiting! We have set your userViews to 1.");
  }

  function updateViews() {
    var currentViews = localStorage.userViews;
    var addCurrentView = +currentViews + 1;
    localStorage.userViews = addCurrentView;
    var updatedViews = localStorage.userViews;
    console.log(
      "userViews value has now been updated, you have visited the website " +
        updatedViews +
        " times."
    );
  }
}

function contactUsModal() {
  document
    .querySelector("a#open-modal")
    .addEventListener("click", function(event) {
      event.preventDefault();
      var modal = document.querySelector("#contact-us-modal"); // assuming you have only 1
      var html = document.querySelector("html");
      modal.classList.add("is-active");
      html.classList.add("is-clipped");

      modal
        .querySelector(".modal-background")
        .addEventListener("click", function(e) {
          e.preventDefault();
          modal.classList.remove("is-active");
          html.classList.remove("is-clipped");
        });
      modal
        .querySelector("#close-contact-modal")
        .addEventListener("click", function(e) {
          e.preventDefault();
          modal.classList.remove("is-active");
          html.classList.remove("is-clipped");
        });
      modal
        .querySelector("#contact-aria-close")
        .addEventListener("click", function(e) {
          e.preventDefault();
          modal.classList.remove("is-active");
          html.classList.remove("is-clipped");
        });
    });
}

//Calls all scripts
userViews();
hasVisited();
surveyModal();
contactUsModal();
