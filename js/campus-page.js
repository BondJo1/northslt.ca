$(function importBX() {
    $('.image-slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
    });
});

function scroll(element) {
    var ele = document.getElementById(element);
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
}

importBX();