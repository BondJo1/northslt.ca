if (Cookie.exists('userViews')) {
    updateViews();
}
else {
    createViews();
}

function createViews() {
    Cookie.set('userViews', 1 , {
        expires: 365
    });
    console.log('Thanks for visiting! We have set your userViews to 1.');
}

function updateViews() {
    var currentViews = Cookie.get('userViews');
    var addCurrentView = currentViews + 1;
    console.log(addCurrentView)
    Cookie.set('userViews', addCurrentView, {
        expires: 365
    });
    var updatedViews = Cookie.get('userViews');
    console.log('userViews value has now been updated, you have visited the website ' + updatedViews + ' times.');
}
