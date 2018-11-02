if (Cookie.exists('userViews')) {
    if (Cookie.get('userViews') > 9) {
        if (Cookie.exists('surveyCompleted')) {
            console.log('You have already completed the survey, thanks!')
        }
        else {
            activateSurveyModal();
        }
    }
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
    Cookie.set('surveyCompleted', true, {
        expires: 365
    })
    console.log('Survey has been shown, and surveyCompleted cookie has been set.')
}