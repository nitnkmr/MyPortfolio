let theme = document.getElementById("theme");
let  body = document.getElementsByTagName("body");
let styles = {background:"white",color:"black"}
console.log(body[0].innerHTML)
theme.addEventListener('click',()=> body[0].style.cssText = `color: red; color: red;`)
