$(document).ready(function() {
    $("#phone").mask("+7 (999) 999-99-99");
  });

// =======================Slider

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
 
function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};

// =======================Счётких у цифр

const time1 = 2000;
const time2 = 2000;
const time3 = 2000;
const time4 = 2000;
const step1 = 1;
const step2 = 1;
const step3 = 1;
const step4 = 3;

function outNum1(num1 = 45) {
    let l = document.getElementById('out-1');
    n = 0;
    let t = Math.round(time1/(num1/step1));
    let interval = setInterval(() => {
        n = n + step1;
        if (n == num1) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    }, t);
}

outNum1();

function outNum2(num2 = 27) {
    let p = document.getElementById('out-2');
    w = 0;
    let q = Math.round(time2/(num2/step2));
    let interval = setInterval(() => {
        w = w + step2;
        if (w == num2) {
            clearInterval(interval);
        }
        p.innerHTML = w;
    }, q);
}

outNum2();

function outNum3(num3 = 0) {
    let k = document.getElementById('out-3');
    e = 500;
    let t = Math.round(time3/(num3/step3));
    let interval = setInterval(() => {
        e = e - step3;
        if (e == num3) {
            clearInterval(interval);
        }
        k.innerHTML = e;
    }, t);
}

outNum3();

function outNum4(num4 = 726) {
    let s = document.getElementById('out-4');
    f = 0;
    let y = Math.round(time4/(num4/step4));
    let interval = setInterval(() => {
        f = f + step4;
        if (f == num4) {
            clearInterval(interval);
        }
        s.innerHTML = f;
    }, y);
}

outNum4();