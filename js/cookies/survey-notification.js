if (Cookie.exists('userViews')) {
    if (Cookie.get('userViews') > 9) {
        if (Cookie.exists('surveyCompleted')) {
            logAlreadyDone();
        }
        else {
            activateSurveyModal();
            setSurveyCookie();
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
    modal.classList.add('is-active');
    modal.querySelector('.modal-close').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
    });
    modal.querySelector('.modal-background').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
    });
}