var testCookie = Cookies.get('test');
if ( testCookie != null ) {
    Cookies.set('test', 'testing cookiejs', { expires: 365 });
    var testCookie = Cookies.get('test');
    console.log("Test cookie has been created, value is " + testCookie)
}
else {
    console.log("Cookie is already created, value is " + testCookie)
}