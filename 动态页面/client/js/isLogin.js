/**
 * Created by Lee on 2016-03-31.
 */
    window.addEventListener("load",checkIsLogin,false);
var httpReq;
function myAJAX(method,url,type,value,callback){
    if(window.XMLHttpRequest){
        httpReq=new XMLHttpRequest();
    }else {
        httpReq=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method=="get"){
        httpReq.open(method,url+"?"+value,type);
        httpReq.send(null);
    }else if(method="post"){
        httpReq.open(method,url,type);
        httpReq.setRequestHeader("content-type","application/x-www-form-urlencoded");
        httpReq.send(value);
    }
    httpReq.onreadystatechange=callback;
}
function checkIsLogin() {
    var userArea=document.getElementsByClassName("userArea")[0];
    myAJAX("post","/isLogin.do",true,"one="+1,function (){
        var data=httpReq.responseText;
        console.log(httpReq.readyState);
        console.log(httpReq.status);
        if(httpReq.readyState==4&&httpReq.status==200){
            console.log(data);
            if(data!=""&&data!=null&&data!=undefined){
                userArea.innerHTML="<i class='fa fa-user'></i><a href='/userCenter.html'>"+data+"</a>/<a href='/loginOut.do'>注销</a>"
            }else{
                userArea.innerHTML="<i class='fa fa-user'></i><span onclick='showSign_login()'>登录</span>/<span onclick='showSign_Reg()'>注册</span>";
            }
        }
    })
};