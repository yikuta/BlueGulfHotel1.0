/**
 * Created by m1308 on 2016/4/1.
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

exports.pay=function (req,resp) {  //跳转pay页面公开函数
    //console.log(1);
    var p_roomid=req.session.roomid;
    mydb();
    mydatabase.query("SELECT * FROM t_order JOIN t_roomtype ON r_id=o_roomid ORDER BY o_id DESC LIMIT 1",[1],function (err,data){
        console.log(data);
        if(data!=null&&data!=undefined){
            resp.render("pay",{
                p_leftSrc:data[0].r_src,
                p_leftName:data[0].r_name,
                p_leftStart:data[0].o_start,
                p_leftCheckOut:data[0].o_checkOut,
                p_leftAdult:data[0].o_adult,
                p_leftKid:data[0].o_kid,
                p_leftMoney:data[0].o_money,
                p_leftorderid:data[0].o_id
            });
        }
    });
    mydatabase.end();
};

exports.p_checkin=function (req,resp) {  //pay页面入住人信息录入数据库以及修改order表支付状态公开函数
    //console.log(1);
    var checkInName=req.query.checkInName;
    var checkInEmail=req.query.checkInEmail;
    var checkInIdNum=req.query.checkInIdNum;
    var checkInTel=req.query.checkInTel;
    var checkInAddress=req.query.checkInAddress;
    var checkInMarks=req.query.checkInMarks;

    var p_leftorderid=req.query.p_leftorderid;  //获取进入pay页面得到的roomid值

    //console.log(p_leftorderid);
    mydb();
    mydatabase.query("insert into t_checkinpeople(c_name,c_email,c_idNumber,c_tel,c_address,c_marks) values(?,?,?,?,?,?)",
        [checkInName,checkInEmail,checkInIdNum,checkInTel,checkInAddress,checkInMarks],function (err,data){
            //console.log(data);
            if(data!=null&&data!=undefined){
                console.log(2);
            }
        });
    mydatabase.query("update t_order set o_paystatu=1 where o_id=?", [p_leftorderid],function (err,data){
        //console.log(data);
        if(data!=null&&data!=undefined){
            console.log(3);
            resp.redirect("/userCenter.html");
        }
    });
    mydatabase.end();
};
