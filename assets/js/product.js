//商品照片
var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//數量增減
function Add() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    num++;
    document.getElementById('itemcount').innerText = num.toString();
    ProductNumberChange();
}

function Less() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    if (num > 1) {
        num--;
        document.getElementById('itemcount').innerText = num.toString();
        ProductNumberChange();
    } else {
        Delete()
    }
}
//評論區
var nameElement = document.getElementById("username-3");
var feedbackElement = document.getElementById("feedback");
var ratingElement=document.getElementById("rating");
function processFormData() {
    const name = nameElement.value;
    alert("謝謝" + name + "的回饋");
}
function addMsg() {
// 獲取table標籤元素
let table = document.getElementById("Feedback_table");
// 建立新行
let newRow = table.insertRow();
// 建立三個新單元格 向表格中插入元素
newRow.insertCell().innerHTML = new Date().toLocaleString();
newRow.insertCell().innerHTML = nameElement.value;
newRow.insertCell().innerHTML = feedbackElement.value;
newRow.insertCell().innerHTML= rating.value;
nameElement.value = '';
feedbackElement.value = '';
}

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