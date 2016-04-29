/**
 * Created by m1308 on 2016/3/30.
 */
//			var p_checkbox=document.getElementById("p_checkbox");
var  prompt=document.getElementsByClassName("p_prompt");
function kong(obj){
    var zhi= obj.value;
//				alert(zhi);
    if(zhi==""){
        obj.style.border="1px solid red";
        prompt[obj].style.visibility="visible";
//					obj.style.boxShadow="0px 0px 5px red;"
    }
    if(zhi!=""){
        obj.style.border="1px solid #ccc";
    }
}

/*sign part*/
var sign=document.getElementsByClassName("sign")[0];
var overlay=document.getElementsByClassName("overlay")[0];
var all=document.getElementsByClassName("all")[0];
var loginPart=document.getElementsByClassName("loginPart")[0];
var h_header=document.getElementsByClassName("header")[0];
var registerPart=document.getElementsByClassName("registerPart")[0];
function showSign() {
    if(h_header.style.position=="fixed"){
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

function p_checkin(){
//	alert(1);
    var form=document.getElementById("p_checkIn");
    var name=form.elements["checkInName"];
    var email=form.elements["checkInEmail"];
    var idnumber=form.elements["checkInIdNum"];
    var tel=form.elements["checkInTel"];
    var point=document.getElementById("point");
//	alert(name.value);
    if(name.value!=""&&email.value!=""&&idnumber.value!=""&&tel.value!=""){
        form.submit();
    }else{
        point.style.display="block";
    }
}