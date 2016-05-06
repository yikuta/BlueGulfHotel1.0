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

exports.datapage=function(req,resp){        //跳转到datapage页面
    //console.log(1);
    //resp.render("datapage")
    var d_roomType=req.query.id;
    req.session.roomid=d_roomType;
    console.log(d_roomType);
    console.log(123);
    mydb();
    mydatabase.query("SELECT * FROM t_details JOIN t_roomtype ON d_roomid=r_id WHERE d_roomid=?",[d_roomType],function(err,data){
        //console.log(data);
        if(data!=null&&data!=undefined){
            //req.session.roomtype=data[0].d_roomid;
            req.session.roommoney=data[0].r_money;
            resp.render("datapage",{
                d_getName:data[0].r_name,
                d_getText:data[0].d_introduce,
                d_getBigSrc:data[0].d_srcBig,
                d_getSmall1:data[0].d_srcSmall1,
                d_getSmall2:data[0].d_srcSmall2,
                d_getSmall3:data[0].d_srcSmall3,
                d_getSmall4:data[0].d_srcSmall4,
                d_getSmall5:data[0].d_srcSmall5,
                d_getSmall6:data[0].d_srcSmall6,
                d_getRoomType:data[0].d_roomid
            });
        }
    });
    mydatabase.end();
};

exports.d_yanzheng=function(req,resp){      //验证session是否有用户名
    var one=req.query.one;
    if(one==1){
        if(req.session.username!=null&&req.session.username!=undefined){
            var a=req.session.username
            console.log(a);
            resp.send(a);
        }
    }
}
