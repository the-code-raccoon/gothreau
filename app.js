// var element = document.getElementById("landing__triangle--left");
// element.classList.remove("");
// void element.offsetWidth;
// element.classList.add("");

document.getElementById("landing__button").addEventListener('click', function() {
    var element1 = document.getElementById("landing__triangle--right");
    var element2 = document.getElementById("landing__triangle--left");
    void element1.offsetWidth;
    void element2.offsetWidth;
    element1.classList.add("landing__triangle--animate");
    element2.classList.add("landing__triangle--animate");
})