//用于判断按纽变有效
var flag_1=false;
var flag_2=false;
var flag_3=false;
var flag_4=false;
var flag_5=false;
//上传图片
var formdata=new FormData();
$("#input_file").change(function(){
  //获取展示图片的区域
  var img = document.getElementById("head_img"); 
  //获取文件对象
  var file = document.getElementById("input_file").files[0];
  formdata.append("photo",file);
  //获取文件阅读器
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(){
      //给img的src设置图片url
      img.setAttribute("src", this.result);
  }
  flag_1=true;
  $("#head_tip").hide();
  check_btn();
})
  //注册
  $("#register_btn").click(function(){
    formdata.append("weChatId",$("#wx_input").val());
    formdata.append("phone",$("#phone_input").val());
    formdata.append("campus",$("#campus_input").val());
    formdata.append("name",$("#name_input").val());
    formdata.append("password",$("#pass_input").val());
      $.ajax({
        url:"http://pn.forseason.vip/user/register",
        type:"post",
	      dataType:"text",
        data:formdata,
        processData: false,
        contentType: false,
        xhrFields: {withCredentials: true},
        success:function(){
          alert("注册成功");
          window.location.href="login.html"; 
        },
        error:function(error){
          console.log(error.message);
          alert("注册失败")
        }
      })
  })
  //正则检验
  //微信号正则
  $("#wx_input").keyup(function(){
    if($("#wx_input").val()==""){
      $("#wx_img").attr("src","register/img/error_big.png");
      $("#wx_img").css("visibility","visible")
      $("#wx_tip span").html("微信号不能为空");
      $("#wx_tip").css("visibility","visible");
    }else{
      if(/^[a-zA-Z\d_]{5,}$/.test($("#wx_input").val())){
        $("#wx_tip").css("visibility","hidden");
        $("#wx_img").attr("src","register/img/true.png");
        $("#wx_img").css("visibility","visible");
        flag_2=true;
      }else{
        $("#wx_img").attr("src","register/img/error_big.png");
        $("#wx_img").css("visibility","visible");
        $("#wx_tip span").html("微信号只能是数字字母下划线");
        $("#wx_tip").css("visibility","visible");
      }
    }
    check_btn();
  })
  //手机号正则
  $("#phone_input").keyup(function(){
    if($("#phone_input").val()==""){
      $("#phone_img").attr("src","register/img/error_big.png");
      $("#phone_img").css("visibility","visible")
      $("#phone_tip span").html("手机号不能为空");
      $("#phone_tip").css("visibility","visible");
    }else{
      if(/^1[3456789]\d{9}$/.test($("#phone_input").val())){
        $("#phone_tip").css("visibility","hidden");
        $("#phone_img").attr("src","register/img/true.png");
        $("#phone_img").css("visibility","visible");
        flag_3=true;
      }else{
        $("#phone_img").attr("src","register/img/error_big.png");
        $("#phone_img").css("visibility","visible");
        $("#phone_tip span").html("请输入合法的手机号");
        $("#phone_tip").css("visibility","visible");
      }
    }
    check_btn();
  })
  //昵称正则
  $("#name_input").keyup(function(){
    if($("#name_input").val()==""){
      $("#name_img").attr("src","register/img/error_big.png");
      $("#name_img").css("visibility","visible")
      $("#name_tip span").html("昵称不能为空");
      $("#name_tip").css("visibility","visible");
    }else{
      if(/^(\w|[\u4e00-\u9fa5]){2,8}$/.test($("#name_input").val())){
        $("#name_tip").css("visibility","hidden");
        $("#name_img").attr("src","register/img/true.png");
        $("#name_img").css("visibility","visible");
        flag_4=true;
      }else{
        $("#name_img").attr("src","register/img/error_big.png");
        $("#name_img").css("visibility","visible");
        $("#name_tip span").html("请输入合法的昵称");
        $("#name_tip").css("visibility","visible");
      }
    }
    check_btn();
  })
  //密码正则
  $("#pass_input").keyup(function(){
    if($("#pass_input").val()==""){
      $("#pass_img").attr("src","register/img/error_big.png");
      $("#pass_img").css("visibility","visible")
      $("#pass_tip span").html("密码不能为空");
      $("#pass_tip").css("visibility","visible");
    }else{
      if(/^\w{6,16}$/.test($("#pass_input").val())){
        $("#pass_tip").css("visibility","hidden");
        $("#pass_img").attr("src","register/img/true.png");
        $("#pass_img").css("visibility","visible");
        flag_5=true;
      }else{
        $("#pass_img").attr("src","register/img/error_big.png");
        $("#pass_img").css("visibility","visible");
        $("#pass_tip span").html("请输入合法的密码");
        $("#pass_tip").css("visibility","visible");
      }
    }
    check_btn();
  })
  //跟据正则判断按纽是否可用
function check_btn(){
  if(flag_1==true&&flag_2==true&&flag_3==true&&flag_4==true&&flag_5==true){
    $("#register_btn").removeAttr("disabled");
  }
}
