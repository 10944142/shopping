var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'醫用口罩30入-櫻草淡黃',
            imgUrl:'assets/image/mask/S__12681247.jpg',
            price:'299',
            count:'2'
          },
          {
            id:'2',
            itemName:'口罩香氛磁扣-藍色',
            imgUrl:'assets/image/smell/smell-blue.png',
            price:'250',
            count:'1'
          },
          {
            id:'3',
            itemName:'口罩收納夾-卡其色',
            imgUrl:'assets/image/cover/cover-4.png',
            price:'150',
            count:'1'
          },
          {
            id:'4',
            itemName:'Oooh乾洗手-綠色',
            imgUrl:'assets/image/wash/wash-3.png',
            price:'120',
            count:'2'
          },
        ]
    }
})

var app2=new Vue({
    el:'#app2',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'醫用口罩30入-櫻草淡黃',
            imgUrl:'assets/image/mask/S__12681247.jpg',
            comment:'很讚',
            time:'2021/12/30'
          },
          {
            id:'2',
            itemName:'口罩香氛磁扣-藍色',
            imgUrl:'assets/image/smell/smell-blue.png',
            comment:'出貨速度快',
            time:'2021/12/15'
          }
        ]
    }
})

function openinformation(evt, informationName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(informationName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


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