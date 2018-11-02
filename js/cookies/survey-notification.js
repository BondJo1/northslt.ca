if (Cookie.exists('userViews')) {
    if (Cookie.get('userViews') > 9) {
        activateSurveyModal();
    }
}

function activateSurveyModal() {
    var modal = document.querySelector('#survey-modal');
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
    Cookie.set('surveyCompleted', true, {
        expires: 365
    })
    console.log('Survey has been shown, and surveyCompleted cookie has been set.')
}