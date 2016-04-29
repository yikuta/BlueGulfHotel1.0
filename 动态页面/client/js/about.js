/**
 * Created by Lee on 2016-03-28.
 */


preventScroll("a_history");
function preventScroll(name){
    var _this = document.getElementsByClassName(name)[0];
    if(navigator.userAgent.indexOf("Firefox")>0){
        _this.addEventListener('DOMMouseScroll',function(e){
            _this.scrollTop += e.detail > 0 ? 60 : -60;
            e.preventDefault();
        },false);
    }else{
        _this.onmousewheel = function(e){
            e = e || window.event;
            _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
            return false;
        };
    }
    return this;
}

setInterval('a_scrollAni()',1);
function a_scrollAni() {
    var a_Top=document.documentElement.scrollTop+document.body.scrollTop;
    if(a_Top>=0){
        var a_inf_intro=document.getElementsByClassName("a_inf_intro")[0];
        //var a_inf_concept=document.getElementsByClassName("a_inf_concept")[0];
        a_inf_intro.style.animation="a_inf_text .9s ease";
        //h_infText_article.style.animation="h_inftext .9s ease";
    }
    if(a_Top>=150){
        var a_inf_concept=document.getElementsByClassName("a_inf_concept")[0];
        a_inf_concept.style.animation="a_inf_text .9s ease";
    }
    if(a_Top>=550){
        var a_history=document.getElementsByClassName("a_history")[0];
        a_history.style.marginLeft=0;
        //a_history.style.display="block";
        a_history.style.transition="all ease .8s";
    }
    if(a_Top>=1050){
        var a_map_text=document.getElementsByClassName("a_map_text")[0];
        a_map_text.style.animation="a_inf_text .9s ease";
    }
}