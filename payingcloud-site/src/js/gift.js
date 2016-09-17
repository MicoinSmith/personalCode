// ===================================
function reduce_a(){
  A = document.getElementById("change_a").value;
  if (A>0){
    A = Number(A)-1;
  }
  document.getElementById("change_a").value = A;
}
function add_a(){
  A = document.getElementById("change_a").value;
  A = Number(A)+1;
  document.getElementById("change_a").value = A;
}

function reduce_b(){
  A = document.getElementById("change_b").value;
  if (A>0){
    A = Number(A)-1;
  }
  document.getElementById("change_b").value = A;
}
function add_b(){
  A = document.getElementById("change_b").value;
  A = Number(A)+1;
  document.getElementById("change_b").value = A;
}
function backclose(){
  document.getElementById("sure_by_box").style.display="none";
  document.getElementById("pay_div_hidden").style.display="block";
}
function sure_by(){
  A = document.getElementById("change_a").value;
  B = document.getElementById("change_b").value;
  // A=parseInt(form.document.getElementById("change_a").value,10);
  // B=parseInt(form.document.getElementById("change_b").value,10);
  var sum = A+B;
  if (sum>0){
    document.getElementById("sure_by_box").style.display="block";
    document.getElementById("pay_div_hidden").style.display="block";
    // document.getElementById("total").innerHTML = "合计：¥ "+sum;
    total();
    function total(){
      // alert(A);
      sum = (parseInt(A)+parseInt(B))/10;
      return sum;
    }
    document.getElementById("total").innerHTML = "合计：¥ "+sum;
    return false;
  }else{
    alert("请选择需要购买的商品及数量！");
    document.getElementById("change_a").value = 0;
    document.getElementById("change_b").value = 0;
    return false;
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
function sure_pay_it(){
  var theway = document.getElementById("pay_point").value;
  // alert("我们将于2-3个工作日内发货，请留意查收快递")
}















// function commodity_a() {
//   var checkbox = document.getElementById('checkbox_a');//
//   alert(checkbox.checked);//是否被选中
//   if(checkbox.checked){
//     //选中了
//     A = 1;
//   }else{
//      //没选中
//      A = 0;
//   }
// }
// function commodity_a() {
//   var checkbox = document.getElementById('checkbox_b');//
//   alert(checkbox.checked);//是否被选中
//   if(checkbox.checked){
//     //选中了
//     B = 1;
//   }else{
//      //没选中
//      B = 0;
//   }
// }

// function sure_by(){
//
//
//     var token= '';
//        $.ajax({
//            url:'',
//            data:{'email':'sadasd','token':token},
//            success:function(){
//               alert("success")
//            },
//            error:function(){
//               alert("error")
//            }
//            setTimeout(function () {
//
//            }, 5000),
//            compelte:function(){
//              alert('ok')
//            }
//        })
// }
