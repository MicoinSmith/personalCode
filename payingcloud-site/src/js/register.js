$(document).ready(function(){
  $("#register_button").click(function(){
    var check = document.getElementById("checkbox").checked;
    // alert(check);
    var register_email = document.getElementById("register_email").value;
    var json = {
      email : register_email
    };
    // alert(register_email);
    // var flag = true;
    // alert(check);
    if ((check===true) & (register_email!="请输入您的邮箱")) {
      // alert("2333");
      $.ajax({
        type: 'post',
        url:'http://localhost:8081/account/create',
        contentType: "application/json",
        data: JSON.stringify(json),
        dataType:"json",
        success:function(data){
          alert("Fine,it's ok!");
        },
        error:function(request){
          //  alert("well,there have something wrong~!");
        }
      });
      alert("邮件已经发送，请注意查收！");
    }else{
      // alert("说好的邮箱呢？");
    }
    // alert(register_email)
  });
});
