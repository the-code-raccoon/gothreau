function triggerAnimation (s, sa) {
    var element= document.getElementById(s);
    element.classList.remove(sa);
    void element.offsetHeight;
    element.classList.add(sa);
}

document.getElementById("landing__button").addEventListener('click', function() {
    triggerAnimation("landing__triangle--right", "landing__triangle--right--animate");
    triggerAnimation("landing__triangle--left", "landing__triangle--left--animate")
    triggerAnimation("landing__button", "landing__button--animate");
})