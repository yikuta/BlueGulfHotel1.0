/**
 * Created by m1308 on 2016/4/1.
 */
var mysql=require("../node_modules/mysql");
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

exports.order=function(req,resp){       //order页面表单提交
    var o_start1=req.query.o_start1;
    var o_checkout=req.query.o_checkout;
    var order_adult=req.query.order_adult;
    var order_kid=req.query.order_kid;

    var o_time=dataDiff(o_start1,o_checkout);
    //console.log(12);

    var o_room=req.session.roomid;
    var o_username=req.session.username;
    var o_roommoney=req.session.roommoney;
    var o_money=parseInt(o_roommoney)*parseInt(o_time);
    console.log(1111);
    console.log(o_username);
    console.log(o_room);
    console.log(o_start1);
    console.log(o_checkout);
    console.log(order_adult);
    console.log(order_kid);
    console.log(o_money);
    console.log(1111);

    mydb();
    mydatabase.query("INSERT INTO t_order (o_username,o_roomid,o_start,o_checkOut,o_adult,o_kid,o_money) values (?,?,?,?,?,?,?)",[o_username,o_room,o_start1,o_checkout,order_adult,order_kid,o_money],function(err,data){
        //console.log(1);
        resp.redirect("/pay.html");
    })
    mydatabase.end();
};

function dataDiff(sDate1,sDate2){       //天数计算方法
    var aDate,oDate1,oDate2,iDays;
    aDate=sDate1.split("/");
    oDate1=new Date(aDate[1]+"-"+aDate[2]+"-"+aDate[0]);
    aDate=sDate2.split("/");
    oDate2=new Date(aDate[1]+"-"+aDate[2]+"-"+aDate[0]);
    iDays=parseInt(Math.abs(oDate1-oDate2)/1000/60/60/24);
    return iDays;
}