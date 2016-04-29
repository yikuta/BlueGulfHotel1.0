/**
 * Created by Lee on 2016-03-28.
 */
function h_video_pageScrollDown(){
    window.scrollBy(0,10);
    scrolldelay=setTimeout("h_video_pageScrollDown()",1);
    window.onmousewheel=document.onmousewheel=function(){
        return false;
    };
    var h_Top=document.documentElement.scrollTop+document.body.scrollTop;
    if(h_Top>667){
        clearTimeout(scrolldelay);
        window.onmousewheel=document.onmousewheel=function(){
            return true;
        }
    }
}
function h_hotel_pageScrollDown(){
    window.scrollBy(0,10);
    scrolldelay=setTimeout("h_hotel_pageScrollDown()",1);
    window.onmousewheel=document.onmousewheel=function(){
        return false;
    };
    var h_Top=document.documentElement.scrollTop+document.body.scrollTop;
    if(h_Top>1447){
        clearTimeout(scrolldelay);
        window.onmousewheel=document.onmousewheel=function(){
            return true;
        }
    }
}
setInterval("h_nav()",1);
function h_nav(){
    var h_Top=document.documentElement.scrollTop+document.body.scrollTop;
    var h_header=document.getElementsByClassName("header")[0];
    if(h_Top>667){
        h_header.style.position="fixed";
    }else{
        h_header.style.position="relative"
    }
}




/*videoCoverText ani*/
window.onload=function() {
    var h_videobox=document.getElementsByClassName("h_videobox")[0];
    var h_videoboxText=h_videobox.getElementsByTagName("div");
    for (var i=0;i<h_videoboxText.length;i++){
        h_videoboxText[i].style.animation="h_videoCoverTextAni .9s ease";
    }
};

setInterval("h_scrollAni()",1);
function h_scrollAni() {
    var h_Top=document.documentElement.scrollTop+document.body.scrollTop;
    if(h_Top>=150){
        var h_inftext_title=document.getElementsByClassName("h_infText_title")[0];
        var h_infText_article=document.getElementsByClassName("h_infText_article")[0];
        h_inftext_title.style.animation="h_inftext .9s ease";
        h_infText_article.style.animation="h_inftext .9s ease";
    }
    if(h_Top>=670){
        var h_hotelShow_arrowDown=document.getElementsByClassName("h_arrowdown")[1];
        h_hotelShow_arrowDown.style.animation="h_arrowdown .9s ease"
    }
    if(h_Top>=927){
        var h_roomShow=document.getElementsByClassName("h_roomsShow")[0];
        var h_roomsDiv=h_roomShow.getElementsByTagName("div");
        h_roomsDiv[0].style.animation="h_roomShow_left .9s ease";
        h_roomsDiv[1].style.animation="h_roomShow_right .9s ease";
    }
    if(h_Top>=1277){
        h_roomsDiv[2].style.animation="h_roomShow_left .9s ease";
        h_roomsDiv[3].style.animation="h_roomShow_right .9s ease";
    }
    if(h_Top>=1627){
        var h_services_text=document.getElementsByClassName("h_services_text")[0];
        var h_services_text_title=h_services_text.getElementsByTagName("h3")[0];
        var h_services_text_article=h_services_text.getElementsByTagName("p")[0];
        h_services_text_title.style.animation="services_text .9s ease";
        h_services_text_article.style.animation="services_text .9s ease";
    }
    if (h_Top>=1927){
        var h_services_img_blocks=document.getElementsByClassName("h_services_img_block");
        var h_services_img_inf=document.getElementsByClassName("h_services_img_inf");
        for (var i=0;i<h_services_img_blocks.length;i++){
            h_services_img_blocks[i].style.animation="h_roomShow_left .9s ease";
            h_services_img_inf[i].style.animation="h_services_img_inf .9s ease .9s";
        }
    }
}

