let myName = document.getElementById("myName");


var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(myName.innerText)
var typed = new Typed('#myName', {
    strings: [ 'Nitin Kumar','Web Developer', 'Frontend Developer'],
    typeSpeed: 80,
    backSpeed : 50,
    loop:true,
});