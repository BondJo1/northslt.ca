function blogfirstvisit() {
    if (localStorage.blogFirstvisit) {
        logAlreadyDone();
    }
    else {
        setBlogVisitVariable();
        activateBlogFirstVisitModal();
        logCompleted();
    }
}

function logAlreadyDone() {
    console.log('You have already visited the blog, the first visit notification will not be shown.');
}

function logCompleted() {
    console.log('Thanks for visiting the blog!');
}

function setBlogVisitVariable() {
    localStorage.blogFirstVisit = true;
}

function activateBlogFirstVisitModal() {
    var modal = document.querySelector("#blog-firstvisit");
    var html = document.querySelector("html");
    modal.classList.add("is-active");
    html.classList.add("is-clipped");
    modal
        .querySelector("#blog-firstvisit-close")
        .addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove("is-active");
            html.classList.remove("is-clipped");
        });
    modal
        .querySelector(".modal-background")
        .addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove("is-active");
            html.classList.remove("is-clipped");
        });
}
