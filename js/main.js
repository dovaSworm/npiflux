var ww = $(window).width();
var wh = $(window).height();
var navbar = $(".navbar");
var date = new Date();
var year = date.getFullYear();
var hours = date.getHours();
var day = date.getDay();
document.getElementById('prava').innerHTML = "<small>Copyright &copy; RDdesign " + year + ". All Rights Reserved</small>";
var isMobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}
// toggler button
if (isMobile) {
    if (hero + 100 < window.scrollY) {
        navbar.addClass('show');
    }
}
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(window).on('scroll', () => {
    navbarAnima();
    dodajAnimu();
});
function navbarAnima() {
    var hero = document.getElementsByClassName("hero")[0].getBoundingClientRect().top;
    if (hero + 800 < window.scrollY) {
        navbar.addClass('show');
    } else {
        navbar.removeClass('show');
    }
}
////ANIMA
function dodajAnimu() {
    var unique = document.getElementsByClassName("unique")[0].getBoundingClientRect().top;
    var who = document.getElementsByClassName("who")[0].getBoundingClientRect().top;
    var why = document.getElementsByClassName("why")[0].getBoundingClientRect().top;
    var sup = document.getElementsByClassName("service-up")[0].getBoundingClientRect().top;
    var sdown = document.getElementsByClassName("service-down")[0].getBoundingClientRect().top;
    if (unique < wh / 2) {
        $('.way-h').addClass('anima-height');
    }
    if (who < wh / 2) {
        $('.who img').addClass('anima-down-up');
    }
    if (why < wh / 2) {
        $('.why img').addClass('anima-down-up');
    }
    if (sup < wh / 2) {
        $('.service-up .uper-h').addClass('anima-left');
        $('.service-up .down-h').addClass('anima-right');
    }
    if (sdown < wh / 2) {
        $('.service-down .uper-h').addClass('anima-left');
        $('.service-down .down-h').addClass('anima-right');
    }
}
