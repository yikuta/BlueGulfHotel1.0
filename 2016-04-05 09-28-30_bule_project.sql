/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 5.7.11-log : Database - project
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`project` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `project`;

/*Table structure for table `t_checkinpeople` */

DROP TABLE IF EXISTS `t_checkinpeople`;

CREATE TABLE `t_checkinpeople` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(50) DEFAULT NULL,
  `c_email` varchar(50) DEFAULT NULL,
  `c_idNumber` varchar(50) DEFAULT NULL,
  `c_tel` varchar(20) DEFAULT NULL,
  `c_address` varchar(50) DEFAULT NULL,
  `c_marks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `t_checkinpeople` */

insert  into `t_checkinpeople`(`c_id`,`c_name`,`c_email`,`c_idNumber`,`c_tel`,`c_address`,`c_marks`) values (1,'123','123','123','123','',''),(2,'q\'we','r\'q\'w','132','41','',''),(3,'111','111111111','11111111111','111111111','',''),(4,'李颜余','937745271','513021199410160871','15708455549','',''),(5,'李颜余','937745271@qq.com','513021199410160871','15708455549','',''),(6,'李颜余','937745271@qq.com','513021199410160871','15708455549','',''),(7,'李颜余','937745271@qq.com','513021199410160871','15708455549','','');

/*Table structure for table `t_details` */

DROP TABLE IF EXISTS `t_details`;

CREATE TABLE `t_details` (
  `d_roomid` int(11) NOT NULL AUTO_INCREMENT,
  `d_introduce` varchar(800) DEFAULT NULL,
  `d_srcBig` varchar(100) DEFAULT NULL,
  `d_srcSmall1` varchar(100) DEFAULT NULL,
  `d_srcSmall2` varchar(100) DEFAULT NULL,
  `d_srcSmall3` varchar(100) DEFAULT NULL,
  `d_srcSmall4` varchar(100) DEFAULT NULL,
  `d_srcSmall5` varchar(100) DEFAULT NULL,
  `d_srcSmall6` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`d_roomid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `t_details` */

insert  into `t_details`(`d_roomid`,`d_introduce`,`d_srcBig`,`d_srcSmall1`,`d_srcSmall2`,`d_srcSmall3`,`d_srcSmall4`,`d_srcSmall5`,`d_srcSmall6`) values (1,'明亮的色彩,现代设计和优雅的室内自然光线补充,酒店提供了35-40平方米高级海景房，有一个私人的露台和海景的阳台','../images/d_1stbigphoto.jpg','../images/d_1stphoto1.jpg','../images/d_1stphoto2.jpg','../images/d_1stphoto3.jpg','../images/d_1stphoto4.jpg','../images/d_1stphoto5.jpg','../images/d_1stphoto6.jpg'),(2,'宽敞而又明亮的高级套房,早上一睁眼就可以见到碧绿的海绵，有一个私人的露台和海景的阳台，让你享受不一样的生活','../images/d_2ndbigphoto.jpg','../images/d_2ndphoto1.jpg','../images/d_2ndphoto2.jpg','../images/d_2ndphoto3.jpg','../images/d_2ndphoto4.jpg','../images/d_2ndphoto5.jpg','../images/d_2ndphoto6.jpg'),(3,'豪华套房提供了会客、餐桌以及两间大床房，让你的工作一样可以是家庭的生活，让你工作的同时感受到生活的享受，让工作变得很简单','../images/d_3rdbigphoto.jpg','../images/d_3rdphoto1.jpg','../images/d_3rdphoto2.jpg','../images/d_3rdphoto3.jpg','../images/d_3rdphoto4.jpg','../images/d_3rdphoto5.jpg','../images/d_3rdphoto6.jpg'),(4,'一线的海景，宽敞的观海阳台，酒店提供了私人的咖啡娱乐室，让体验生活的您感受到我们精致的服务，这就是我们的精致套房','../images/d_4thbigphoto.jpg','../images/d_4thphoto1.jpg','../images/d_4thphoto2.jpg','../images/d_4thphoto3.jpg','../images/d_4thphoto4.jpg','../images/d_4thphoto5.jpg','../images/d_4thphoto6.jpg'),(5,'尊贵套房是一个由两层组成的，一楼住宿，一楼是厨房、会客室、餐桌、咖啡室等，会客的同时欣赏广阔的海景，让您的工作事半功倍','../images/d_5thbigphoto.jpg','../images/d_5thphoto1.jpg','../images/d_5thphoto2.jpg','../images/d_5thphoto3.jpg','../images/d_5thphoto4.jpg','../images/d_5thphoto5.jpg','../images/d_5thphoto6.jpg'),(6,'由七至八间房组成的套间，走廊有小酒吧。两个卧室分开，男女卫生间分开，设有客厅、书房、会议室、随员室、警卫室、餐厅厨房设施，有的还有室内花园','../images/d_6thbigphoto.jpg','../images/d_6thphoto1.jpg','../images/d_6thphoto2.jpg','../images/d_6thphoto3.jpg','../images/d_6thphoto4.jpg','../images/d_6thphoto5.jpg','../images/d_6thphoto6.jpg');

/*Table structure for table `t_order` */

DROP TABLE IF EXISTS `t_order`;

CREATE TABLE `t_order` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `o_username` varchar(50) DEFAULT NULL,
  `o_roomid` int(11) DEFAULT NULL,
  `o_start` varchar(50) DEFAULT NULL,
  `o_checkOut` varchar(50) DEFAULT NULL,
  `o_adult` int(11) DEFAULT NULL,
  `o_kid` int(11) DEFAULT NULL,
  `o_money` varchar(50) DEFAULT NULL,
  `o_paystatu` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`o_id`)
) ENGINE=InnoDB AUTO_INCREMENT=837502019 DEFAULT CHARSET=utf8;

/*Data for the table `t_order` */

insert  into `t_order`(`o_id`,`o_username`,`o_roomid`,`o_start`,`o_checkOut`,`o_adult`,`o_kid`,`o_money`,`o_paystatu`) values (837502016,'lee',6,'2016-4-2','2016-4-3',2,0,'7000',1),(837502017,'lee',3,'2016-4-4','2016-4-5',3,0,'3400',1),(837502018,'lee',2,'2016/04/06','2016/04/08',2,0,'4600',1);

/*Table structure for table `t_roomtype` */

DROP TABLE IF EXISTS `t_roomtype`;

CREATE TABLE `t_roomtype` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_name` varchar(50) DEFAULT NULL,
  `r_src` varchar(50) DEFAULT NULL,
  `r_introduce` varchar(100) DEFAULT NULL,
  `r_money` int(11) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `t_roomtype` */

insert  into `t_roomtype`(`r_id`,`r_name`,`r_src`,`r_introduce`,`r_money`) values (1,'豪华客房','./../images/type_room1.jpg','内有卫生间和其他附属设备组成。房内设一张单人床。',1200),(2,'高级套房','./../images/type_room2.jpg','房内设两张单人床或一张双人床，房内可以上网，满足商务客人的需求。',2300),(3,'豪华套房','./../images/type_room3.jpg','一般是连通的两个房间。一间是会客室，一间是卧室。卧室内设两张单人床或一张双人床。这样的房间适合夫妻或旅游团住用。',3400),(4,'精致套房','./../images/type_room4.jpg','由三至五间或更多房间组成，有两个卧室各带卫生间还有会客室、餐厅、办公室及厨房等，卧室内设特大号双人床。',4500),(5,'尊贵套房','./../images/type_room5.jpg','由楼上、楼下两层组成，楼上为卧室，面积较小，设有两张单人床或一张双人床。楼下设有卫生间和会客室，室内有活动沙发，同时可以拉开当床。',5550),(6,'总统套房','./../images/type_room6.jpg','由七至八间房组成的套间，走廊有小酒吧。两个卧室分开，男女卫生间分开，设有客厅、书房、会议室、随员室、警卫室、餐厅厨房设施，有的还有室内花园。',7000);

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_username` varchar(50) DEFAULT NULL,
  `u_password` varchar(50) DEFAULT NULL,
  `u_tel` varchar(20) DEFAULT NULL,
  `u_email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=130458 DEFAULT CHARSET=utf8;

/*Data for the table `t_user` */

insert  into `t_user`(`u_id`,`u_username`,`u_password`,`u_tel`,`u_email`) values (130457,'lee','lee941016','15708455549','937745271');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
