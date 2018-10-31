var hasVisited = Cookies.get('hasVisited');
//if (hasVisited != null) {
    //document.getElementById('firstvisit').classList.add('is-active');
    var modal = document.querySelector('.modal');
    modal.classList.add('is-active');
    Cookies.set('hasVisited', 'true', { expires: 365 });
    console.log("The hasVisited cookie has been set, value is " + hasVisited)
//}
//else {
    //document.getElementById("firstvisit").style.visibility = "hidden";
//    console.log("The hasVisited cookie is already created, value is " + hasVisited)
//}