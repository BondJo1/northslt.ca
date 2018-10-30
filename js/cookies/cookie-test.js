var testCookie = Cookies.get('test');
if ( testCookie != null ) {
    Cookies.set('test', 'testing cookiejs', { expires: 365 });
    console.log("Test cookie has been created, value is" + testCookie)
}
else {
    console.log(testCookie)
}