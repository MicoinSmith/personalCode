$(document).ready(function(){
  $("#login_button").click(function(){
    // var check = document.getElementById("checkbox").checked;
    // alert(check);
      var login_email = document.getElementById("login_email").value;
      var login_password = document.getElementById("login_password").value;
      var json = [
        {email : login_email},
        {password : login_password}
      ];
      // var flag = true;
      // alert(login_email);
      // alert(login_password);
      if ((login_email != "请输入您的邮箱") & (login_email !== "") & (login_password != "请输入密码") & (login_password !== "")) {
        $.ajax({
          type: 'post',
          url:'http://localhost:8081/account/login',
          contentType: "application/json",
          data: JSON.stringify(json),
          dataType:"json",
          success:function(data){

            alert("Fine,it's ok!");
          },
          error:function(request){

          }
        });
        alert("login success!");
      }else {
        alert("请核对信息!");
      }
  });
});
