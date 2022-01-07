var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'醫用口罩30入-灰濛草綠',
            imgUrl:'assets/image/mask/S__12681249.jpg',
            price:'229',
            count:'2'
          },
          {
            id:'2',
            itemName:'口罩香氛磁扣-藍色',
            imgUrl:'assets/image/smell/smell-blue.png',
            price:'250',
            count:'3'
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
            itemName:'Oooh乾洗手-黑色',
            imgUrl:'assets/image/wash/wash-7.png',
            price:'120',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{
        totalPrice:function(){
          var totalPrice=0;
          for(let i=0;i<this.itemList.length;i++){
            totalPrice+=this.itemList[i].price*this.itemList[i].count;
          }
          return totalPrice;
        }
    }
})
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