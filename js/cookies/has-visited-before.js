var hasVisited = Cookies.get('hasVisited');
if (hasVisited != null) {
    firstvisit.classList.toggle('is-active')
    Cookies.set('hasVisited', 'true', { expires: 365 });
    console.log("The hasVisited cookie has been set, value is " + hasVisited)
}
else {
    //$('#firstvisit').css({'visibility':'hidden'});
    document.getElementById("firstvisit").style.visibility = "hidden";
    console.log("The hasVisited cookie is already created, value is " + hasVisited)
}