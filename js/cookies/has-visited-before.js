var hasVisited = Cookies.get('hasVisited');
if ( hasVisited != null ) {
    Cookies.set('hasVisited', 'true', { expires: 365 });
    console.log("The hasVisited cookie has been set, value is " + hasVisited)
}
else {
    //$('#firstvisit').css({'visibility':'hidden'});
    console.log("The hasVisited cookie is already created, value is " + hasVisited)
}