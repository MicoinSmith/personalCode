window.onload=function(){
  // function(){
    var ibanner = document.getElementById("ibanner");
    var ibanner_list = ibanner.getElementsByTagName("div"),
        n = ibanner_list.length;
    // console.log(n);
    var i=0,
        interval=setInterval(interval_play,3000);
    // banner_change();
    // function banner_change(){}
    function interval_play(){
      i++;
      if(i>n-1){i=0}
      // console.log(i);
      for (var j = 0; j < n; j++) {
        ibanner_list[j].style.display="none";
      }
      ibanner_list[i].style.display="block";
    }
    // ibanner.onmouseover = function(){
    //   console.log(111111);
    //   clearInterval(interval);
    // };
    // ibanner.onmouseout = function(){
    //   clearInterval(interval);
    //   interval=setInterval(interval_play,1000);
    // };
  // }()
};
function gift_center() {
  document.getElementById("gift_center_qr_code").style.display="block";
}
function gift_center_qr_code_hidden() {
  document.getElementById("gift_center_qr_code").style.display="none";
}
