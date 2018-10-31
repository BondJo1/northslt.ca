if (Cookie.exists('hasVisited')) {
    console.log("The hasVisited cookie is already created, value is " + hasVisited)
}
else {
    var modal = document.querySelector('.modal');
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped')
    modal.querySelector('.modal-background').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
    modal.querySelector('.modal-close').addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
    Cookie.set('hasVisited', 'true', {
        expires: 365
    });
    var hasVisited = Cookie.get('hasVisited')
    console.log("The hasVisited cookie has been set, value is " + hasVisited)
}