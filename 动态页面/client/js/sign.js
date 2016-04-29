/**
 * Created by Lee on 2016-03-30.
 */
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

var userNameExp=/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
var passwordExp=/^[A-Za-z0-9_-]+$/;
var telExp=/0?(13|14|15|18)[0-9]{9}/;
var emailExp=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;

var registerForm=document.getElementById("register");
var register_username_statu=false;
var register_password_statu=false;
var register_tel_statu=false;
var register_email_statu=false;
var register_passwordRepeat_statu=false;
var registerPart_tip=document.getElementsByClassName("status")[1];
var loginForm=document.getElementById("login");
var loginPart_tip=document.getElementsByClassName("status")[0];
/*checkRegister*/
function register_check_username(){
    var username=registerForm.elements["username"].value;
    registerPart_tip.innerHTML="";
    if(userNameExp.test(username)==false){
        registerPart_tip.innerHTML="请按正确格式输入用户名";
    }else {
        myAJAX("post","checkUser.do",true,"username="+username,function(){
            var data=httpReq.responseText;
            if(httpReq.readyState==4&&httpReq.status==200){
                var dataObj=JSON.parse(data);
                console.log(dataObj);
                if(dataObj.length>=1){
                    registerPart_tip.innerHTML="用户名已存在";
                }else if(dataObj.length==0){
                    registerPart_tip.innerHTML="用户名可注册";
                    register_username_statu=true;
                }
            }
        });
    }
}
function register_check_password(){
    var password=registerForm.elements["password"].value;
    registerPart_tip.innerHTML="";
    if(passwordExp.test(password)==false){
        registerPart_tip.innerHTML="请按正确格式输入密码";
    }else{
        register_password_statu=true;
    }
}
function register_check_email() {
    var email=registerForm.elements["userEmail"].value;
    registerPart_tip.innerHTML="";
    if(emailExp.test(email)==false){
        registerPart_tip.innerHTML="请按正确格式输入邮箱";
    }else{
        register_email_statu=true;
    }
}
function register_check_tel() {
    var tel=registerForm.elements["userTel"].value;
    registerPart_tip.innerHTML="";
    if(telExp.test(tel)==false){
        registerPart_tip.innerHTML="请按正确格式输入手机号码";
    }else{
        register_tel_statu=true;
    }
}
function register_check_passwordRepeat() {
    var password=registerForm.elements["password"].value;
    var password_repeat=registerForm.elements["password_repeat"].value;
    registerPart_tip.innerHTML="";
    if(password!=password_repeat){
        registerPart_tip.innerHTML="两次输入的密码不一致";
    }else{
        register_passwordRepeat_statu=true;
    }
}
function checkRegister() {
    if(register_username_statu==false||register_password_statu==false||register_tel_statu==false||
  register_email_statu==false||register_passwordRepeat_statu==false){
        registerPart_tip.innerHTML="注册失败，请检查您的输入是否正确";
    }else {
        registerPart_tip.innerHTML="注册成功，3秒后返回首页";
        setTimeout(function() {
            registerForm.submit();
        },3000);
        console.log(checkRegister());
    }
}
function login_check_username(){
    var username=loginForm.elements["username"].value;
    loginPart_tip.innerHTML="";
    if(userNameExp.test(username)==false){
        loginPart_tip.innerHTML="请按正确格式输入用户名";
    }
}
function login_check_password(){
    var password=loginForm.elements["password"].value;
    loginPart_tip.innerHTML="";
    if(passwordExp.test(password)==false){
        loginPart_tip.innerHTML="请按正确格式输入密码";
    }
}

function checkLogin() {
    var username=loginForm.elements["username"].value;
    var password=loginForm.elements["password"].value;
    loginPart_tip.innerHTML="";
    myAJAX("post","/checkLogin.do",true,"username="+username+"&password="+password,function(){
        var data=httpReq.responseText;
        if(httpReq.readyState==4&&httpReq.status==200){
            var dataObj=JSON.parse(data);
            console.log(dataObj);
            if(dataObj.length==0){
                loginPart_tip.innerHTML="用户名或密码不正确，请重新输入";
            }else if(dataObj.length>=1){
                loginForm.submit();
            }
        }
    });
}
/*
var password=registerForm.elements["password"].value;
var email=registerForm.elements["userEmail"].value;
var tel=registerForm.elements["userTel"].value;
passwordExp.test(password);
telExp.test(tel);
emailExp.test(email);*/
