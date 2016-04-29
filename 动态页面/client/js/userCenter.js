/**
 * Created by Lee on 2016-04-02.
 */

/*账户订单切换*/
var tab_myCount=document.getElementsByClassName("u_infTab_myCount")[0];
tab_myCount.addEventListener("click",u_showMyCount,false);
var tab_myOrder=document.getElementsByClassName("u_infTab_myOrder")[0];
tab_myOrder.addEventListener("click",u_showMyOrder,false);
tab_myOrder.addEventListener("click",u_GetOrder,false);
function u_showMyCount(){
    var u_userInf=document.getElementsByClassName("u_userInf")[0];
    var u_orderInf=document.getElementsByClassName("u_orderInf")[0];
    if(u_userInf.style.display==""||u_userInf.style.display=="none"){
        u_userInf.style.display="inline-block";
        u_orderInf.style.display="none";
    }
}
function u_showMyOrder(){
    var u_userInf=document.getElementsByClassName("u_userInf")[0];
    var u_orderInf=document.getElementsByClassName("u_orderInf")[0];
    if(u_orderInf.style.display==""||u_orderInf.style.display=="none"){
        u_userInf.style.display="none";
        u_orderInf.style.display="inline-block";
    }
}

/*展开修改框*/
var passwordBox=document.getElementsByClassName("u_inf_userPasswordBox")[0];
var userTelBox=document.getElementsByClassName("u_inf_userTelBox")[0];
var userEmailBox=document.getElementsByClassName("u_inf_userEmailBox")[0];
function showChangePasswordBox() {
     if(passwordBox.style.height=="20px"||passwordBox.style.height==""){
         passwordBox.style.height="313px";
         userTelBox.style.height="20px";
         userEmailBox.style.height="20px";
     }else {
         passwordBox.style.height="20px";
     }
}
function showChangeTelBox() {
    if(userTelBox.style.height=="20px"||userTelBox.style.height==""){
        userTelBox.style.height="257px";
        passwordBox.style.height="20px";
        userEmailBox.style.height="20px";
    }else {
        userTelBox.style.height="20px";
    }
}
function showChangeEmailBox() {
    if(userEmailBox.style.height=="20px"||userEmailBox.style.height==""){
        userEmailBox.style.height="257px";
        passwordBox.style.height="20px";
        userTelBox.style.height="20px";
    }else {
        userEmailBox.style.height="20px";
    }
}
/*请求订单数据*/
function u_GetOrder() {
    var u_orderInf=document.getElementsByClassName("u_orderInf")[0];
    myAJAX("get","/u_chang.do",true,"one="+1,function (){
        var data=httpReq.responseText;
        console.log(httpReq.readyState);
        console.log(httpReq.status);
        data=JSON.parse(data);
        if(httpReq.readyState==4&&httpReq.status==200){
            console.log(data);
            console.log(1111);
            if(data!=""&&data!=null&&data!=undefined&&data.length>0){
                u_orderInf.innerHTML="";
                for(var i=0;i<data.length;i++){
                    u_orderInf.innerHTML+="<div class='u_orderInfContent'><div class='u_orderInf_idBox'><h3 class='u_orderInf_id'>订单号："+data[i].o_id+"</h3></div><div class='u_orderInf_items'><ul><li>房型</li><li>入住日期</li><li>退房日期</li><li>金额</li></ul></div><div class='u_orderInf_data'><ul><li><img src='"+data[i].r_src+"'></li><li>"+data[i].r_name+"</li><li>"+data[i].o_start+"</li><li>"+data[i].o_checkOut+"</li><li>CNY "+data[i].o_money+"</li></ul></div></div>"
                }
            }else{
                u_orderInf.innerHTML="<div class='u_order_null'><p>暂无订单</p></div>";
            }
        }
    })
};



//修改密码
var u_changePassword_oldPassword_statu=false;
var u_changePassword_newPassword_statu=false;
var u_changePassword=document.getElementById("u_changePassword");
function u_yanzhengoldPassword(){   //验证旧密码
    var u_oldPassword=u_changePassword.elements["u_oldPassword"].value;
    var u_newPassword=u_changePassword.elements["u_newPassword"].value;
    var u_newPassword_repeat=u_changePassword.elements["u_newPassword_repeat"].value;
    var u_status=u_changePassword.getElementsByClassName("u_status")[0];
    myAJAX("post","/oldPassword.do",true,"u_oldPassword="+u_oldPassword,function (){
        var data=httpReq.responseText;
        console.log(httpReq.readyState);
        console.log(httpReq.status);
        //console.log(data);
        if(httpReq.readyState==4&&httpReq.status==200){
            console.log(data);
            if(data=="yes"){
                u_changePassword_oldPassword_statu=true;
                u_status.innerHTML="";
            }else if(data=="no"){
                u_status.innerHTML="旧密码有误";
            }
        }
    })
}
function u_yanzhengnewPassword(){   //验证两次密码是否一致
    var u_newPassword=u_changePassword.elements["u_newPassword"].value;
    var u_status=u_changePassword.getElementsByClassName("u_status")[0];
    var u_newPassword_repeat=u_changePassword.elements["u_newPassword_repeat"].value;
    if(u_newPassword==u_newPassword_repeat){
        u_changePassword_newPassword_statu=true;
        u_status.innerHTML="";
    }else{
        u_status.innerHTML="两次密码输入不一致";
    }
}
function changPassword(){
    if(u_changePassword_oldPassword_statu==true&&u_changePassword_newPassword_statu==true){
        u_changePassword.submit();
    }
}

//修改绑定电话
var u_changeTel=document.getElementById("u_changeTel");
var telExp=/0?(13|14|15|18)[0-9]{9}/;
var u_changeTel_statu=false;
function checknewTel(){
    var u_newTel=u_changeTel.elements["u_newTel"].value;
    var u_status=u_changeTel.getElementsByClassName("u_status")[0];
    if(telExp.test(u_newTel)==true){
        u_changeTel_statu=true;
        u_status.innerHTML="";
    }else{
        u_status.innerHTML="请输入正确的电话";
    }
}
function changeTel(){
    var u_oldTel=u_changeTel.elements["u_oldTel"].value;
    if(u_changeTel_statu==true&&u_oldTel!=null&&u_oldTel!=undefined){
        u_changeTel.submit();
    }
}

//修改邮箱
var  u_changeEmail=document.getElementById("u_changeEmail");
var emailExp=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
var u_changeEmail_statu=false;
function checknewEmail(){
    var u_newEmail=u_changeEmail.elements["u_newEmail"].value;
    var u_status=u_changeEmail.getElementsByClassName("u_status")[0];
    if(emailExp.test(u_newEmail)==true){
        u_changeEmail_statu=true;
        u_status.innerHTML="";
    }else{
        u_status.innerHTML="请输入正确的邮箱";
    }
}
function changeEail(){
    var u_oldEmail=u_changeEmail.elements["u_oldEmail"].value;
    console.log(u_oldEmail);
    if(u_changeEmail_statu==true&&u_oldEmail!=null&&u_oldEmail!=undefined){
        u_changeEmail.submit();
    }
}