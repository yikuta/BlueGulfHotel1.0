/**
 * Created by Administrator on 2016/3/30.
 */
////灏佽 鍒涘缓鏁版嵁搴撹繛鎺�
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

exports.Classification=function(req,resp){
    //console.log(1);
    mydb();
    mydatabase.query("select * from t_roomtype",[1],function(err,data){
        console.log(data);

      if(data!=null&&data!=undefined){
          //req.session.roommoney=data[0].r_money;
            resp.render("Classification",{
                //绗竴涓埧闂�
                r_roomtype1Name:data[0].r_name,
                r_roomtype1Introduce:data[0].r_introduce,
                r_roomtype1Src:data[0].r_src,
                r_roomtype1Money:data[0].r_money,
                //绗簩涓埧闂�
                r_roomtype2Name:data[1].r_name,
                r_roomtype2Introduce:data[1].r_introduce,
                r_roomtype2Src:data[1].r_src,
                r_roomtype2Money:data[1].r_money,
                //绗笁涓埧闂�
                r_roomtype3Name:data[2].r_name,
                r_roomtype3Introduce:data[2].r_introduce,
                r_roomtype3Src:data[2].r_src,
                r_roomtype3Money:data[2].r_money,
                //绗洓涓埧闂�
                r_roomtype4Name:data[3].r_name,
                r_roomtype4Introduce:data[3].r_introduce,
                r_roomtype4Src:data[3].r_src,
                r_roomtype4Money:data[3].r_money,
                //绗簲涓埧闂�
                r_roomtype5Name:data[4].r_name,
                r_roomtype5Introduce:data[4].r_introduce,
                r_roomtype5Src:data[4].r_src,
                r_roomtype5Money:data[4].r_money,
                //绗叚涓埧闂�
                r_roomtype6Name:data[5].r_name,
                r_roomtype6Introduce:data[5].r_introduce,
                r_roomtype6Src:data[5].r_src,
                r_roomtype6Money:data[5].r_money
            });
        }
    });
    mydatabase.end();
}

