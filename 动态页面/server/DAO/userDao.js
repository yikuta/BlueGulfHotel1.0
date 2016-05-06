/**
 * Created by Lee on 2016-03-29.
 */
var mysql=require("../node_modules/mysql");     //加载mysql资源模块
var mydatabase;
function mydb(){
    mydatabase=mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"project"
    });
    mydatabase.connect();
}
exports.userLogin=function (req,resp){      //登录
    var username=req.body.username;
    var password=req.body.password;
    mydb();
    mydatabase.query("select u_username from t_user where u_username=? and u_password=?",[username,password],function (err,data){
        console.log(data);/*data返回数组*/
        if(data.length>=1){
            req.session.username=data[0].u_username;
            resp.redirect("/home.html");
        }
    });
    mydatabase.end();
};
exports.userReg=function (req,resp) {       //注册
    var username=req.body.username;
    var password=req.body.password;
    var tel=req.body.userTel;
    var email=req.body.userEmail;
    mydb();
    mydatabase.query("insert into t_user(u_username,u_password,u_tel,u_email) values(?,?,?,?)",[username,password,tel,email],function (err,data){
        if(data!=null&&data!=undefined){
            resp.redirect("/home.html");
        }else {
            console.log(err);
        }
    });
    mydatabase.end();
};
exports.checkUser=function(req,resp){       //验证用户名
    var username=req.body.username;
    mydb();
    mydatabase.query("select * from t_user where u_username=?",[username],function(err,data){
        resp.send(data);
    });
    mydatabase.end();
};
exports.checkLogin=function (req,resp){     //验证注册用户名重复
    var username=req.body.username;
    var password=req.body.password;
    mydb();
    mydatabase.query("select u_username from t_user where u_username=? and u_password=?",[username,password],function (err,data){
        console.log(data);/*data返回数组*/
        resp.send(data);
    });
    mydatabase.end();
};
exports.isLogin=function (req,resp){        //获取session中存的用户名
    var one=req.body.one;
    if(one==1){
        console.log(req.session.username);
        if(req.session.username!=null&&req.session.username!=undefined){
            resp.send(req.session.username);
        }else{
            console.log(req.session.username);
        }
    }
};
exports.loginOut=function (req,resp){       //注销
    req.session.username=null;
    resp.redirect("/home.html");
}
