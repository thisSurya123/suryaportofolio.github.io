console.log('Js connected');
const img_platform = document.getElementById('img-platform');
const user_platform = document.getElementById('user-platform');

img_platform.addEventListener("mouseover", function(){
    user_platform.style.display = "inline-block";
});