function surveyModal() {
    if (Cookie.exists('userViews')) {
        if (Cookie.get('userViews') > 9) {
            if (Cookie.exists('surveyCompleted')) {
                logAlreadyDone();
            }
            else {
                setSurveyCookie();
                activateSurveyModal();
                logCompleted();
            }
        }
    }

    function logAlreadyDone() {
        console.log('You have already completed the survey, thanks!');
    }

    function logCompleted() {
        console.log('Survey has been shown, and surveyCompleted cookie has been set.');
    }

    function setSurveyCookie() {
        Cookie.set('surveyCompleted', true, {
            expires: 365
        });
    }

    function activateSurveyModal() {
        var modal = document.querySelector('#survey-modal');
        var html = document.querySelector('html');
        modal.classList.add('is-active');
        html.classList.add('is-clipped')
        modal.querySelector('#survey-modal-close').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    }
}

function hasVisited() {
    if (Cookie.exists('hasVisited')) {
        console.log("The hasVisited cookie is already created.")
    }
    else {
        setVisitedCookie();
        activateWelcomeModal();
        console.log("The hasVisited cookie has been created.")
    }

    function setVisitedCookie() {
        Cookie.set('hasVisited', 'true', {
            expires: 365
        });
    }

    function activateWelcomeModal() {
        var modal = document.querySelector('#firstvisit');
        var html = document.querySelector('html');
        modal.classList.add('is-active');
        html.classList.add('is-clipped')
        modal.querySelector('.modal-close').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    }
}

function userViews() {
    if (Cookie.exists('userViews')) {
        updateViews();
    }
    else {
        createViews();
    }

    function createViews() {
        Cookie.set('userViews', 1, {
            expires: 365
        });
        console.log('Thanks for visiting! We have set your userViews to 1.');
    }

    function updateViews() {
        var currentViews = Cookie.get('userViews');
        var addCurrentView = +currentViews + 1;;
        console.log(addCurrentView)
        Cookie.set('userViews', addCurrentView, {
            expires: 365
        });
        var updatedViews = Cookie.get('userViews');
        console.log('userViews value has now been updated, you have visited the website ' + updatedViews + ' times.');
    }
}

function contactUsModal() {
    var modal = document.querySelector('#contact-us-modal');
    var html = document.querySelector('html');
    var hero = document.querySelector('hero-body');
    modal.querySelector('#survey-modal-close').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
    modal.querySelector('.modal-background').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
    document.querySelector('a#open-modal').addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('is-active');
        html.classList.add('is-clipped');
    });
}

//Calls all scripts
userViews();
hasVisited();
surveyModal();
contactUsModal();