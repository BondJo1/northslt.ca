var hasVisited = Cookies.get('hasVisited');
if (hasVisited = "true") {
    var hasVisited = Cookies.get('hasVisited')
    console.log("The hasVisited cookie is already created, value is " + hasVisited)
}
else {
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped')
    Cookies.set('hasVisited', 'true', { expires: 365 });
    var hasVisited = Cookies.get('hasVisited')
    console.log("The hasVisited cookie has been set, value is " + hasVisited)
}