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