 //會員登入
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function show_hide() {
var login = document.getElementById("container1");
var signup = document.getElementById("container2");

    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
    } 
    else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
    
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}
 //跑馬燈
 var slideIndex = 0;
 showSlides();

 function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}    
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 2000); // Change image every 2 seconds
 }