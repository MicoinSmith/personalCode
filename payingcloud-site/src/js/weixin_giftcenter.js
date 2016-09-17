  function choose_page(){
    document.getElementById("shadow").style.display="block";
    document.getElementById("pay_box").style.top="30px";
    document.getElementById("pay_box").style.position="absolute";
    document.getElementById("pay_box").style.top="50%";
  }
  function shadow_back(){
    document.getElementById("shadow").style.display="none";
    document.getElementById("pay_box").style.position="relative";
  }

  // ===================================
  // var A = new int();
  // var B = new int();
  var A = 0;
  var B = 0;

  function click_reduce_a(){
    A = document.getElementById("change_a").value;
    if (A>0){
      A = Number(A)-1;
      // document.getElementById("total").value = 58*A;
    }
    document.getElementById("change_a").value = A;
    // alert(typeof(5));
    document.getElementById("total").value = "合计：¥ "+(A*58+B*88)+"   下一步";
    if (document.getElementById("total").value == ("合计：¥ NaN   下一步")) {
      add_b();
      reduce_b();
    }
  }
  function click_add_a(){
    A = document.getElementById("change_a").value;
    A = Number(A)+1;
    document.getElementById("change_a").value = A;
    document.getElementById("total").value = "合计：¥ "+(A*58+B*88)+"   下一步";
    if (document.getElementById("total").value == ("合计：¥ NaN   下一步")) {
      add_b();
      reduce_b();
    }
  }

  function click_reduce_b(){
    B = document.getElementById("change_b").value;
    if (B>0){
      B = Number(B)-1;
    }
    document.getElementById("change_b").value = B;
    document.getElementById("total").value = "合计：¥ "+(A*58+B*88)+"   下一步";
    if (document.getElementById("total").value == ("合计：¥ NaN   下一步")) {
      add_a();
      reduce_a();
    }
  }
  function click_add_b(){
    B = document.getElementById("change_b").value;
    B = Number(B)+1;
    document.getElementById("change_b").value = B;
    document.getElementById("total").value = "合计：¥ "+(A*58+B*88)+"   下一步";
    if (document.getElementById("total").value == ("合计：¥ NaN   下一步")) {
      add_a();
      reduce_a();
    }
  }
  function click_zhifubao(){
    document.getElementById("pay_baiduqianbao").style.border="1px solid #2B2C30";
    document.getElementById("pay_weixin").style.border="1px solid #2B2C30";
    document.getElementById("pay_jingdong").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhongguoyinlian").style.border="1px solid #2B2C30";
    document.getElementById("pay_point").value = 0;
    document.getElementById("pay_zhifubao").style.border="1px solid #6bb56f";
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_weixin(){
    document.getElementById("pay_baiduqianbao").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhifubao").style.border="1px solid #2B2C30";
    document.getElementById("pay_jingdong").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhongguoyinlian").style.border="1px solid #2B2C30";
    document.getElementById("pay_point").value = 1;
    document.getElementById("pay_weixin").style.border="1px solid #6bb56f";
    // document.getElementById("pay_weixin").style.marginTop="24px";

  }
  function click_baiduqianbao(){
    document.getElementById("pay_weixin").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhifubao").style.border="1px solid #2B2C30";
    document.getElementById("pay_jingdong").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhongguoyinlian").style.border="1px solid #2B2C30";
    document.getElementById("pay_point").value = 4;
    document.getElementById("pay_baiduqianbao").style.border="1px solid #6bb56f";
    // document.getElementById("pay_baiduqianbao").style.marginTop="6px";

  }
  function click_jingdong(){
    document.getElementById("pay_baiduqianbao").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhifubao").style.border="1px solid #2B2C30";
    document.getElementById("pay_weixin").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhongguoyinlian").style.border="1px solid #2B2C30";
    document.getElementById("pay_point").value = 2;
    document.getElementById("pay_jingdong").style.border="1px solid #6bb56f";
    // document.getElementById("pay_jingdong").style.marginTop="24px";
  }
  function click_zhongguoyinlian(){
    document.getElementById("pay_baiduqianbao").style.border="1px solid #2B2C30";
    document.getElementById("pay_zhifubao").style.border="1px solid #2B2C30";
    document.getElementById("pay_jingdong").style.border="1px solid #2B2C30";
    document.getElementById("pay_weixin").style.border="1px solid #2B2C30";
    document.getElementById("pay_point").value = 3;
    document.getElementById("pay_zhongguoyinlian").style.border="1px solid #6bb56f";
    // document.getElementById("pay_zhongguoyinlian").style.marginTop="9px";
  }

  // ==========================================================
$(document).ready(function(){
  $("#total").click(function(){
    // alert(size_point_a);
    // sum = Number(A)+Number(B);
    if ((A == 0) & (B == 0)) {
      alert("请选择商品");
    }else if ((A != 0) & (size_point_a == 0)) {
      alert("请选择尺寸");
    }else if ((B != 0) & (size_point_b == 0)) {
      alert("请选择尺寸");
    }else {
      $("#main_page").css("height","0");
      $("#next_page").css("height","100%");
      $("#title_center").css("display","none");
    }
  });
  $("#goback").click(function(){
    // alert("hello");
    $("#main_page").css("height","100%");
    $("#next_page").css("height","0");
    $("#title_center").css("display","inline-block");
  });


  $("#by_sure").click(function(){
    var name = document.getElementById("#customer_name").value;
    var tel = document.getElementById("#customer_tel").value;
    var addr = document.getElementById("#customer_addr").value;
    alert(name);
    // alert(name,tel,addr);
    if ((name!=请输入您的姓名)&(tel!==null)&(addr!=请输入您的收货地址)){

      $("#main_page").css("height","0");
      $("#next_page").css("height","0");
      $("#pay_div_hidden").css("display","inline");
    }else {
      alert("请补全信息");
    }
  });


  $("#back").click(function(){
    $("#main_page").css("height","0");
    $("#next_page").css("height","100%");
    $("#pay_div_hidden").css("height","0");
    $("#choose_p").css("display","none");
  });
  $.extend($.validator.messages, {
      required: "必选字段",
      remote: "请修正该字段",
      email: "请输入正确格式的电子邮件",
      url: "请输入合法的网址",
      date: "请输入合法的日期",
      dateISO: "请输入合法的日期 (ISO).",
      number: "请输入合法的数字",
      digits: "只能输入整数",
      creditcard: "请输入合法的信用卡号",
      equalTo: "请再次输入相同的值",
      accept: "请输入拥有合法后缀名的字符串",
      maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
      minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
      rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
      range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
      max: $.validator.format("请输入一个最大为 {0} 的值"),
      min: $.validator.format("请输入一个最小为 {0} 的值")
  });
});
// function by_sure(){
//   alert("hello");
//   if ((name!=请输入您的姓名)&(tel!==null)&(addr!=请输入您的收货地址)) {
//     var name = document.getElementById("#customer_name").value;
//     var tel = document.getElementById("#customer_tel").value;
//     var addr = document.getElementById("#customer_addr").value;
//     alert(name,tel,addr);
//         $("#main_page").css("height","0");
//         $("#next_page").css("height","0");
//         $("#pay_div_hidden").css("display","block");
//         return false;
//   }
//   return false;
// }

function saveMessage(){
  document.getElementById("pay_div_hidden").style.display="block";
  // if (document.getElementById("#pay_point").value !== 0) {
  //   return true;
  // }else {
  //   return false;
  // }
  // if (sum>0){
  //   // document.getElementById("sure_by_box").style.display="block";
  //   // document.getElementById("total").innerHTML = "合计：¥ "+sum;
  //   total();
  //   function total(){
  //     // alert(A);
  //     sum = (parseInt(A)+parseInt(B))/10;
  //     return sum;
  //   }
  //   document.getElementById("total").innerHTML = "合计：¥ "+sum;
  //   return false;
  // }else{
  //   alert("请选择需要购买的商品及数量！");
  //   document.getElementById("change_a").value = 0;
  //   document.getElementById("change_b").value = 0;
    return false;
  // }
}

// function saveMessage(){
// // jquery 表单提交
//   $("#customer_information").ajaxSubmit(function() {
//     // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
//     });
//
//   return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
// }

// $(document).ready(function () {
//    $("#customer_information").validate({
//      submitHandler: function(form) {
//         $(form).ajaxSubmit({
//           success: function (result) { //表单提交后更新页面显示的数据
//              $('#TreeTable').treegrid('reload');
//                var d = result.split(';');
//                ShowMsg(d[0], d[1], d[2]);
//              }
//         });
//      }
//    });
// });
  var size_point_a = 0;
  var size_point_b = 0;
  function click_size_s_a(){
    document.getElementById("size_s_a").style.border="1px solid #104c00";
    document.getElementById("size_m_a").style.border="1px solid #1c1e23";
    document.getElementById("size_l_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_a").style.border="1px solid #1c1e23";
    size_point_a = 1;
    alert(size_point_a);
    // AA = 1;
    alert(document.getElementById("size_point_a").innerText);
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_m_a(){
    document.getElementById("size_s_a").style.border="1px solid #1c1e23";
    document.getElementById("size_m_a").style.border="1px solid #104c00";
    document.getElementById("size_l_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_a").style.border="1px solid #1c1e23";
    size_point_a = 2;
    alert(size_point_a);
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_l_a(){
    document.getElementById("size_s_a").style.border="1px solid #1c1e23";
    document.getElementById("size_m_a").style.border="1px solid #1c1e23";
    document.getElementById("size_l_a").style.border="1px solid #104c00";
    document.getElementById("size_xl_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_a").style.border="1px solid #1c1e23";
    size_point_a = 3;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_xl_a(){
    document.getElementById("size_s_a").style.border="1px solid #1c1e23";
    document.getElementById("size_m_a").style.border="1px solid #1c1e23";
    document.getElementById("size_l_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_a").style.border="1px solid #104c00";
    document.getElementById("size_xxl_a").style.border="1px solid #1c1e23";
    size_point_a = 4;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_xxl_a(){
    document.getElementById("size_s_a").style.border="1px solid #1c1e23";
    document.getElementById("size_m_a").style.border="1px solid #1c1e23";
    document.getElementById("size_l_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_a").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_a").style.border="1px solid #104c00";
    size_point_a = 5;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_s_b(){
    document.getElementById("size_s_b").style.border="1px solid #104c00";
    document.getElementById("size_m_b").style.border="1px solid #1c1e23";
    document.getElementById("size_l_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_b").style.border="1px solid #1c1e23";
    size_point_b = 6;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_m_b(){
    document.getElementById("size_s_b").style.border="1px solid #1c1e23";
    document.getElementById("size_m_b").style.border="1px solid #104c00";
    document.getElementById("size_l_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_b").style.border="1px solid #1c1e23";
    size_point_b = 7;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_l_b(){
    document.getElementById("size_s_b").style.border="1px solid #1c1e23";
    document.getElementById("size_m_b").style.border="1px solid #1c1e23";
    document.getElementById("size_l_b").style.border="1px solid #104c00";
    document.getElementById("size_xl_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_b").style.border="1px solid #1c1e23";
    size_point_b = 8;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_xl_b(){
    document.getElementById("size_s_b").style.border="1px solid #1c1e23";
    document.getElementById("size_m_b").style.border="1px solid #1c1e23";
    document.getElementById("size_l_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_b").style.border="1px solid #104c00";
    document.getElementById("size_xxl_b").style.border="1px solid #1c1e23";
    size_point_b = 9;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
  function click_size_xxl_b(){
    document.getElementById("size_s_b").style.border="1px solid #1c1e23";
    document.getElementById("size_m_b").style.border="1px solid #1c1e23";
    document.getElementById("size_l_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xl_b").style.border="1px solid #1c1e23";
    document.getElementById("size_xxl_b").style.border="1px solid #104c00";
    size_point_b = 10;
    // document.getElementById("pay_zhifubao").style.marginTop="29px";
  }
