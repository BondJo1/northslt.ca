$('.image-slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
});

$('#scrollto').click(function() {
    $('.sidebar').removeClass('is-active');
    $('.menu-icon-wrapper').removeClass('open');
})

function scroll(element) {
    var ele = document.getElementById(element);
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
}
