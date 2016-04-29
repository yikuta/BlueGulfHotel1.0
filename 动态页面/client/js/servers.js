var s_mainPart1=document.getElementById("s_mainPart1");
var s_mainPart2=document.getElementById("s_mainPart2");
var s_mainPart3=document.getElementById("s_mainPart3");
setInterval("s_myscroll()",1);
function s_myscroll(){
	var myscrolltop=document.body.scrollTop+document.documentElement.scrollTop;
	if(myscrolltop>=0){
		s_mainPart1.style.marginLeft="0";
		s_mainPart1.style.transition="all .45s linear";
	}
	if(myscrolltop>=100){
		s_mainPart2.style.marginLeft="0";
		s_mainPart2.style.transition="all .78s linear";
	}
	if(myscrolltop>=716){
		s_mainPart3.style.marginLeft="0";
		s_mainPart3.style.transition="all .45s linear";
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