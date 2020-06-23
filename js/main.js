const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

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
    function dodajAnimu() {
        var scrollPosition = $(window).scrollTop();
        console.log(scrollPosition);
        if ($(window).width() < 768) {
            if (scrollPosition >= 1700) {
                $(".who div.row").css("opacity", "1");
                $(".who div.col-sm-12:nth-of-type(1)").addClass("who-anima-left");
                $(".who div.col-sm-12:nth-of-type(2)").addClass("who-anima-right3");
            }
            if (scrollPosition >= 2270) {
                $(".why div.row").css("opacity", "1");
                $(".why div.col-sm-12:nth-of-type(1)").addClass("who-anima-right2");
                $(".why div.col-sm-12:nth-of-type(2)").addClass("who-anima-right");
            }
            if (scrollPosition >= 250) {
                $("#services h3").addClass("anima-down-up");
            }
        } else if ($(window).width() >= 768 && $(window).width() < 1024) {
            if (scrollPosition >= 870) {
                $("nav").addClass('navbg');
            }
            if (scrollPosition <= 870) {
                $("nav").removeClass('navbg');
            }
            if (scrollPosition >= 1200) {
                $(".who div.row").css("opacity", "1");
                $(".who div.col-sm-12:nth-of-type(1)").addClass("who-anima-left");
                $(".who div.col-sm-12:nth-of-type(2)").addClass("who-anima-right3");
            }
            if (scrollPosition >= 1700) {
                $(".why div.row").css("opacity", "1");
                $(".why div.col-sm-12:nth-of-type(1)").addClass("who-anima-right2");
                $(".why div.col-sm-12:nth-of-type(2)").addClass("who-anima-right");
            }
            if (scrollPosition >= 250) {
                $("#services h3").addClass("anima-down-up");
            }
        } else if ($(window).width() >= 1024 && $(window).width() < 1200) {
            if (scrollPosition >= 870) {
                $("nav").addClass('navbg');
            }
            if (scrollPosition <= 870) {
                $("nav").removeClass('navbg');
            }
            if (scrollPosition >= 1700) {
                $(".who div.row").css("opacity", "1");
                $(".who div.col-sm-12:nth-of-type(1)").addClass("who-anima-left");
                $(".who div.col-sm-12:nth-of-type(2)").addClass("who-anima-right3");
            }
            if (scrollPosition >= 2300) {
                $(".why div.row").css("opacity", "1");
                $(".why div.col-sm-12:nth-of-type(1)").addClass("who-anima-right2");
                $(".why div.col-sm-12:nth-of-type(2)").addClass("who-anima-right");
            }
            if (scrollPosition >= 250) {
                $("#services h3").addClass("anima-down-up");
            }
        } else {
            if (scrollPosition >= 2260) {
                $("nav").addClass('navbg');
                $(".who div.row").css("opacity", "1");
                $(".who div.col-sm-12:nth-of-type(1)").addClass("who-anima-left");
                $(".who div.col-sm-12:nth-of-type(2)").addClass("who-anima-right3");
            }
            if (scrollPosition >= 870) {
                $("nav").addClass('navbg');
            }
            if (scrollPosition <= 870) {
                $("nav").removeClass('navbg');
            }
            if (scrollPosition >= 2980) {
                $(".why div.row").css("opacity", "1");
                $(".why div.col-sm-12:nth-of-type(1)").addClass("who-anima-right2");
                $(".why div.col-sm-12:nth-of-type(2)").addClass("who-anima-right");
            }
            if (scrollPosition >= 500) {
                $("#services h3").addClass("anima-down-up");
            }
        }
    }
    $(window).on('scroll', () => {
        dodajAnimu();
    });
    $("#services div.col-md-6").mouseover(function() {
        $("div.port-card", $(this)).addClass("service-anima");
        $(".card-inner, h4", $(this)).addClass("card-anima");
    });

    $("#services div.col-md-6").mouseout(function() {
        $("div.port-card").removeClass("service-anima");
        $(".card-inner, h4", $(this)).removeClass("card-anima");
    });

    // setTimeout(() => {
    //     $("div.title div.d-flex").addClass("arrow-anima2");
    //     $("div.title div.d-flex").removeClass("arrow1-anima")
    // }, 1600);

});