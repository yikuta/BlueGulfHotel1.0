/*登录注册*/
var sign=document.getElementsByClassName("sign")[0];
var overlay=document.getElementsByClassName("overlay")[0];
var all=document.getElementsByClassName("all")[0];
var loginPart=document.getElementsByClassName("loginPart")[0];
var h_header=document.getElementsByClassName("header")[0];
var registerPart=document.getElementsByClassName("registerPart")[0];


function showSign() {
    if(h_header.style.position=="fixed"||h_header.style.position==""){
        h_header.style.left="-450px";
    }
    all.style.left="-450px";
    sign.style.right="0";
    overlay.style.right="0";
    overlay.style.visibility="visible";
}
function closeSign() {
    h_header.style.left="0";
    all.style.left="0";
    sign.style.right="-450px";
    overlay.style.right="-100%";
    overlay.style.visibility="hidden";
}
function showSign_login() {
    showSign();
    switchToLogin();
}
function showSign_Reg() {
    showSign();
    switchToReg();
}
function switchToLogin() {
    loginPart.style.opacity="1";
    loginPart.style.zIndex="1";
    registerPart.style.opacity="0";
    registerPart.style.zIndex="0";
}
function switchToReg() {
    loginPart.style.opacity="0";
    loginPart.style.zIndex="0";
    registerPart.style.opacity="1";
    registerPart.style.zIndex="1";
}

//页面滚动加载动效

var c_t=document.getElementById("c_t");
var c_t1=document.getElementById("c_t1");
var c_t2=document.getElementById("c_t2");
var c_t3=document.getElementById("c_t3");
var c_t4=document.getElementById("c_t4");
var c_t5=document.getElementById("c_t5");



window.onload=function() {
    var top = document.body.scrollTop || document.documentElement.scrollTop;

    if (top >= 0) {
        c_t.style.marginLeft = "0px"
    }

    //ajax();
}

window.onscroll=function() {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    if(top>=250){
        c_t1.style.marginLeft="0px"
    }
    if(top>550){
        c_t2.style.marginLeft="0px"
    }
    if(top>850){
        c_t3.style.marginLeft="0px"
    }
    if(top>1150){
        c_t4.style.marginLeft="0px"
    }
    if(top>1500){
        c_t5.style.marginLeft="0px"
    }
}

