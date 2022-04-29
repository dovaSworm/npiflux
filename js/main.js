const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

var ww = $(window).width();
var wh = $(window).height();

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    lines.forEach(line => {
        line.classList.toggle("hamb-open");
    });
});
links.forEach(link => {
    link.addEventListener("click", () => {
        lines.forEach(line => {
            line.classList.remove("hamb-open");
        });
        navLinks.classList.remove("open");
        links.forEach(link => {
            link.classList.remove("fade");
        });
    });
});

$(() => {
    ////ANIMA
        let hero = document.getElementById('hero').getBoundingClientRect().bottom;
    function dodajAnimu() {
        let whoCon = document.getElementById('who-con').getBoundingClientRect().top;
        let whyCon = document.getElementById('why-con').getBoundingClientRect().top;
        let servH3 = document.getElementById('serv-h3').getBoundingClientRect().top;
        let scrollPosition = $(window).scrollTop();
// console.log(scrollPosition + "   " + hero)
        if (hero < scrollPosition) {
            $("nav").addClass('navbg');
        } else {
            $("nav").removeClass('navbg');
        }
        if (servH3 < scrollPosition + hero) {
            $("#services h3").addClass("anima-down-up");
        }
        if (whoCon < wh / 2) {
            $(".who div.row").css("opacity", "1");
            $(".who div.col-sm-12:nth-of-type(1)").addClass("who-anima-left");
            $(".who div.col-sm-12:nth-of-type(2)").addClass("who-anima-right3");
        }
        if (whyCon < wh / 2) {
            $(".why div.row").css("opacity", "1");
            $(".why div.col-sm-12:nth-of-type(1)").addClass("who-anima-right2");
            $(".why div.col-sm-12:nth-of-type(2)").addClass("who-anima-right");
        }
    }
    $(window).on('scroll', () => {
        dodajAnimu();
    });

    // setTimeout(() => {
    //     $("div.title div.d-flex").addClass("arrow-anima2");
    //     $("div.title div.d-flex").removeClass("arrow1-anima")
    // }, 1600);

});