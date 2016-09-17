// JavaScript Document
$(function() {
    var BodyH = $("body").height();

    $(".page1 .btn").bind("click",
    function() {
        $(".page1").hide();
        $(".page2").show();
    });

    $(".page2 .btn button").bind("click",
    function() {
        $(".popup").show();
        $(".payList").show();
        $(".payList").animate({
            "bottom": -$(document).scrollTop()
        });
    });
    $(".popup").bind("click",
    function() {
        $(".popup").hide();
        $(".payList").hide();
        $(".payList").animate({
            "bottom": -500
        });
    });

    $(".payList ul li").bind("click",
    function() {
        var channel = $(this).attr("data-val");
        var total_fee = parseInt($(".page2 .btn button").attr("data-fee"));
        //alert(channel+"|"+openid+"|"+window.wxInfo);
        addloading();
        if (channel == "WX_JSAPI") { //寰俊鏀粯鏂瑰紡
            $.ajax({
                type: "POST",
                url: "data/sponsor.wxpay.php",
                data: {
                    "openid": openid,
                    "userinfo": window.wxInfo,
                    "total_fee": total_fee
                },
                datatype: "json",
                success: function(data) {
                    removeloading();

                    data = JSON.parse(data);
                    //console.log(data.resultCode);
                    if (data.resultCode == 0) {
                        $(".popup").hide();
                        $(".payList").hide();
                        $(".payList").animate({
                            "bottom": -500
                        });
                        callpay(data.jsApiParam);
                    }
                },
                error: function() {
                    //璇锋眰鍑洪敊澶勭悊
                    removeloading();
                }
            });
        } else { //鍏朵粬鏀粯鏂瑰紡
            payWay("start.pay.php", channel, openid, window.wxInfo, total_fee);
        }
    });

    //
    $(".share_btn").bind("click",
    function() {
        $("body").append('<div class="Popup share_yd"><i></i></div>');
        $(".share_yd").click(function() {
            $(".share_yd").remove();
        });
    });
    //$(".about_us").bind("click",function(){
    //    location.replace("https://beecloud.cn");
    //});
    //璋冨井淇″師鐢熸敮浠�
    function jsApiCall(data) {
        //ui.loading.remove();
        WeixinJSBridge.invoke('getBrandWCPayRequest', data,
        function(res) {
            WeixinJSBridge.log(res.err_msg);
            //alert(res.err_code+res.err_desc+res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                //location.replace("http://wxactivity.beexcloud.com/tshirt/index.php?issuccess=true");
                $("section").hide();
                $(".page3").show();
            } // 浣跨敤浠ヤ笂鏂瑰紡鍒ゆ柇鍓嶇杩斿洖,寰俊鍥㈤槦閮戦噸鎻愮ず锛歳es.err_msg灏嗗湪鐢ㄦ埛鏀粯鎴愬姛鍚庤繑鍥�    ok锛屼絾骞朵笉淇濊瘉瀹冪粷瀵瑰彲闈犮€�
        });
    }
    function callpay(data) {

        //console.log(data);
        var closureCall = function() {
            jsApiCall(data);
        };
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', closureCall, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', closureCall);
                document.attachEvent('onWeixinJSBridgeReady', closureCall);
            }
        } else {
            closureCall();
        }
    }

    //鏀粯鏂瑰紡鍒楄〃
    function addPayWay() {
        var html = '<div class="payList"><ul>' + '<li data-val="WX_JSAPI"><i></i><span>寰俊鏀粯</span></li>' + '<li data-val="UN_WEB"><i></i><span>閾惰仈鏀粯</span></li>' + '<li data-val="JD_WAP"><i></i><span>浜笢鏀粯</span></li>' + '<li data-val="BD_WAP"><i></i><span>鐧惧害閽卞寘</span></li>' + '<li data-val="BD_WAP"><i></i><span>鏄撳疂鏀粯</span></li>' + '</ul></div>';
        $("body").append(html);
        $(".payList ul").css("-webkit-animation", "payListMove 0.3s ease-in-out 0s alternate");

        //var html = "<option value='0'>璇烽€夋嫨鏀粯鏂瑰紡</option>" +
        //    "<option value='WX_JSAPI'>寰俊鏀粯</option>" +
        //    "<option value='JD_WAP'>浜笢鏀粯</option>" +
        //    //"<option value='YEE_WAP'>鏄撳疂鏀粯</option>" +
        //    "<option value='UN_WEB'>閾惰仈鏀粯</option>" +
        //    "<option value='ALI_WAP'>鏀粯瀹濇敮浠�</option>";
        //$("#payWay").html(html);
    }

    function payWay(request_url, channel, openid, wxInfo, total_fee) {
        $("form").remove();
        var html = '<form id="pay" style="display:none" action="' + request_url + '" name="pay" method="post">' + '<input type="hidden" name="openid" value="' + openid + '"/>' + '<input type="hidden" name="userinfo" value="' + wxInfo + '"/>' + '<input type="hidden" name="channel" value="' + channel + '"/>' + '<input type="hidden" name="total_fee" value="' + total_fee + '"/>' + '<input type="hidden" name="action" value="pay" />' + '<input type="submit" value="Submit">' + '</form>';
        $("body").append(html);
        $("#pay").submit();
    }

    function addloading() {
        $("body").append("<div class='loading'></div>");
    }

    function removeloading() {
        $(".loading").remove();
    }
});
