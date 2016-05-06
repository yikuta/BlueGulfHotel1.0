/**
 * Created by m1308 on 2016/4/1.
 */
var mysql=require("../node_modules/mysql"); //加载mysql资源模块
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

exports.useCenter=function(req,resp){   //跳转到userCenter页面
    var u_userName=req.session.username;
    mydb();
    mydatabase.query("SELECT * FROM t_user WHERE u_username=?",[u_userName],function(err,data){
        console.log(data);
        if(data!=null&&data!=undefined){
            resp.render("userCenter",{
                u_topName:data[0].u_username,
                u_topId:data[0].u_id,
                u_topTel:data[0].u_tel,
                u_topEmail:data[0].u_email,
            });
        }
    });
    mydatabase.end();
};

exports.u_order=function(req,resp){     //响应点击订单操作的公开函数
    var u_userName=req.session.username;
    mydb();
    mydatabase.query("SELECT o_id,o_start,o_checkOut,r_name,r_src,o_money FROM ((t_order t1 JOIN t_user t2  ON t1.o_username=t2.u_username) JOIN t_roomtype t4 ON o_roomid=t4.r_id) WHERE u_username=? AND o_paystatu=1 order by o_id desc",[u_userName],function(err,data){
        console.log(data);
        resp.send(data);
    });
    mydatabase.end();
};

exports.oldPassword=function(req,resp){     //比对旧密码是否正确
    var u_userName=req.session.username;
    var u_oldPassword=req.body.u_oldPassword;
    mydb();
    mydatabase.query("SELECT u_password FROM t_user WHERE u_username=?",[u_userName],function(err,data){
        console.log(u_oldPassword);
        console.log(data[0].u_password);
        console.log(u_oldPassword==data[0].u_password);
        if(u_oldPassword==data[0].u_password){
            resp.send("yes");
        }else{
            resp.send("no");
        }
    });
    mydatabase.end();
}

exports.changePassword=function(req,resp){   //修改密码
    var u_userName=req.session.username;
    var u_newPassword=req.body.u_newPassword;
    mydb();
    mydatabase.query("UPDATE t_user SET u_password=? WHERE u_username=?",[u_newPassword,u_userName],function(err,data){
        console.log(data);
        if(data!=null&&data!=undefined){
            resp.redirect("/userCenter.html");
        }
    });
    mydatabase.end();
}

exports.u_changeTel=function(req,resp){     //更改绑定电话
    var u_userName=req.session.username;
    var u_newTel=req.body.u_newTel;
    mydb();
    mydatabase.query("UPDATE t_user SET u_tel=? WHERE u_username=?",[u_newTel,u_userName],function(err,data){
        console.log(data);
        if(data!=null&&data!=undefined){
            resp.redirect("/userCenter.html");
        }
    });
    mydatabase.end();
}

exports.u_changeEmail=function(req,resp){   //更改绑定邮箱
    var u_userName=req.session.username;
    var u_newEmail=req.body.u_newEmail;
    mydb();
    mydatabase.query("UPDATE t_user SET u_email=? WHERE u_username=?",[u_newEmail,u_userName],function(err,data){
        console.log(data);
        if(data!=null&&data!=undefined){
            resp.redirect("/userCenter.html");
        }
    });
    mydatabase.end();
}
