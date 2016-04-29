/**
 * Created by LIN on 2016/3/29.
 */
//一。加载-资源
var myexpress=require("./server/node_modules/express");
var userDao=require("./server/Dao/userDao.js");
var dataDao=require("./server/Dao/datapageDao.js");
var roomsDao=require("./server/Dao/roomsDao.js");
var orderDao=require("./server/Dao/orderDao.js");
var payDao=require("./server/Dao/payDao.js");
var centerDao=require("./server/Dao/centerDao.js");
var mycookie=require("./server/node_modules/cookie-parser");
var mysession=require("./server/node_modules/express-session");
var ejs=require("./server/node_modules/ejs");
var app=myexpress();//执行express的全局函数,返回一个服务器对象;
//二。设置端口号
app.set("port",8080);
//三。配置服务器s
app.configure(function(){
    app.use(myexpress.logger("dev"));//开发者日志
    app.use(mycookie());//先执行cookie
    app.use(mysession({
        secret:"1234",//密码
        name:"mysession",//名字(cookie的名字)
        cookie:{maxAge:1800000},//经过30000毫秒cookie会和session失去联系
        resave:true,
        rolling:true,
        saveUninitialized:true//强制未初始化的会话保存;
    }));//执行session;但是需要传个参数(这个参数是对象)
    app.set("views",__dirname+"/client/pages");//配置模板资源路径；
    //app.set("view engine","ejs");//启动ejs视图引擎；这里的模板名字后缀为ejs
    app.engine(".html",ejs.__express);//将后缀为html的改成ejs
    app.set("view engine","html");//启动后缀为html的视图引擎
    app.use(myexpress.bodyParser());//获取post参数
    app.use(myexpress.methodOverride());//把非get请求转化为post请求
    app.use(app.router);/*添加路由*/
    app.use(myexpress.static(__dirname+"/client"));/*资源路径*/
    app.use(myexpress.favicon(__dirname+"/client/images/favicon.png"));/*网页logo*/
    app.use(myexpress.errorHandler());/*开发者模块，错误模块*/
});

app.get("/home.html",function (req,resp) {
    resp.render("home");
});
app.get("/about.html",function (req,resp) {
    resp.render("about");
});
app.get("/history.html",function (req,resp) {
    resp.render("history");
});
app.get("/map.html",function (req,resp) {
    resp.render("map");
});
app.post("/login.do",userDao.userLogin);/*登录*/
app.post("/register.do",userDao.userReg);/*注册*/
app.post("/checkUser.do",userDao.checkUser);/*注册表单用户名校检*/
app.post("/checkLogin.do",userDao.checkLogin);/*登录表单校检*/
app.post("/isLogin.do",userDao.isLogin);/*验证登录状态*/
app.get("/loginOut.do",userDao.loginOut);/*注销*/

app.get("/servers.html",function(req,resp){resp.render("servers");});//跳转到servers页面

app.get("/Classification.html",roomsDao.Classification);    //跳转到房间分类页面

app.get("/datapage.html",dataDao.datapage);     //跳转到datapage页面
app.get("/yanzheng.do",dataDao.d_yanzheng);    //验证登录之后才能跳转order页面

app.get("/order.html",function(req,resp){ resp.render("order");});  //跳转order页面
app.get("/o_order.do",orderDao.order);   //order页面的表单提交

app.get("/pay.html",payDao.pay);//order页面到pay页面
app.get("/p_checkin.do",payDao.p_checkin);     //拦截pay页面的表单提交

app.get("/userCenter.html",centerDao.useCenter);    //跳转到userCenter页面
app.get("/u_chang.do",centerDao.u_order);       //拦截点击订单操作
app.post("/oldPassword.do",centerDao.oldPassword);  //比对旧密码
app.post("/changePassword.do",centerDao.changePassword);  //修改密码
app.post("/u_changeTel.do",centerDao.u_changeTel);   //更改绑定电话
app.post("/u_changeEmail.do",centerDao.u_changeEmail);  //更改绑定邮箱

//监听端口号
app.listen(app.get("port"),function(){
    console.log("服务器启动");
});
