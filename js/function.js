/*start countdown*/
function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
        return;
    }

    /*calculate time every second*/
    timer = setInterval(calculate, 1000);

    /*function for calculating time*/
    function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            //   document.getElementById("days").innerHTML    = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) {
    }
}
/*end countdown*/

/*start window resize*/
$(window).bind("resize", function () {
    var window_width = window.screen.width;
    var hill_bg_width = window_width / 4;
    document.getElementById("first_section").style.paddingBottom =
        hill_bg_width + "px";
    var slider_height = (window_width * 22)/100;
    document.getElementById("slider").style.height =
        slider_height + "px";
});
$(window).bind("load", function () {
    var window_width = window.screen.width;
    var hill_bg_width = window_width / 4;
    document.getElementById("first_section").style.paddingBottom =
        hill_bg_width + "px";
    var slider_height = (window_width * 21.5)/100;
    document.getElementById("slider").style.height =
        slider_height + "px";
});
/*End window resize*/

/*start slider*/
function slider() {
    var currentItem = 0,
        i,
        sliderArea = document.querySelector('[data-js="js-slider"]'),
        carouselItems = sliderArea.querySelectorAll('.carousel-slider-item'),
        carouselItemWidth = Math.ceil(100 / carouselItems.length),
        totalWidth = carouselItems.length * 100;


    sliderArea.style.width = totalWidth + '%';

    for (i = 0; i <= carouselItems.length - 1; i++) {
        carouselItems[i].style.width = carouselItemWidth + '%';
    }

    function slideToRight(selectedItem) {
        var i = carouselItemWidth,
            time = 50;
        var sliding = setInterval(function () {
            if (i <= totalWidth) {
                carouselItems[selectedItem].style.marginLeft = "-" + i + "%";
                i--;
            } else {
                clearInterval(sliding);
            }
        }, time);
    }

    /*reset all image position*/
    function reset() {
        for (i = 0; i <= carouselItems.length - 1; i++) {
            slideToRight(i);
        }
        currentItem = 0;
    }

    function slideToLeft(selectedItem) {
        var i = 0,
            time = 50;

        var sliding = setInterval(function () {
            if (i <= carouselItemWidth) {
                carouselItems[selectedItem].style.marginLeft = "-" + i + "%";
                i++;
            } else {
                clearInterval(sliding);
            }
        }, time);
    }

    var slideInterval = setInterval(function () {
        if (currentItem <= carouselItems.length - 4) {
            slideToLeft(currentItem);
            currentItem++;

        } else {
            reset();
        }
    }, 2000);

    document.getElementById("slider").addEventListener("mouseover", function () {
        clearInterval(slideInterval);
    });
    document.getElementById("slider").addEventListener("mouseout", function () {
        slideInterval = setInterval(function () {
            if (currentItem <= carouselItems.length - 4) {
                slideToLeft(currentItem);
                currentItem++;

            } else {
                reset();
            }
        }, 4000);
    });
} // end
/*end slider*/