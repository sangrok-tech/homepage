mobiscroll.settings = {
    theme: 'material',
    themeVariant: 'light'
};
$(function(){
    common.headerEvt();
    common.etcEvt();
});

var sectionActive1 = true;
var sectionActive2 = true;
var sectionActive3 = true;
var sectionActive4 = true;

common = {
    headerEvt:function(){
        $(window).scroll(function(){
            var ck = $(this).scrollTop();
            if(ck > 0){
                $("header").addClass("on");
            }else{
                $("header").removeClass("on");
            }
        });
    },
    vidMute:function(o){
        var _vid = document.getElementById(o);
        _vid.muted = false;
    },
    etcEvt:function(){
        var _visual = $('#visual-wrap');
        var _shopping = $('#shopping-wrap');
        var _wiggler = $('#wiggler-wrap');
        var _download = $('#download-wrap');
        var vid1 = document.getElementById("video01");
        var vid2 = document.getElementById("video02");
        var vid3 = document.getElementById("video03");
        var sct = 0;
        $(window).on("scroll load resize", function() {
            if(window.innerWidth > 1155){
                sct = 450;
            }else{
                sct = 350;
            }
            var _sec1 = Math.ceil(_visual.offset().top-sct);
            var _sec2 = Math.ceil(_shopping.offset().top-sct);
            var _sec3 = Math.ceil(_wiggler.offset().top-sct);
            var _sec4 = Math.ceil(_download.offset().top-sct);

            if ($(this).scrollTop() <= _sec2) {
                if(sectionActive1){
                    sectionActive1 = false;
                    sectionActive2 = true;
                    sectionActive3 = true;
                    sectionActive4 = true;
                    $('.section').removeClass("on");
                    _visual.addClass("on");
                    console.log('_visual active');
                    vid1.pause();
                    vid2.pause();
                    vid3.pause();
                }
            }
            if ($(this).scrollTop() >= _sec2 && $(this).scrollTop() <= _sec3) {
                if(sectionActive2){
                    sectionActive2 = false;
                    sectionActive1 = true;
                    sectionActive3 = true;
                    sectionActive4 = true;
                    $('.section').removeClass("on");
                    _shopping.addClass("on");
                    console.log('_shopping active');
                    vid1.play();
                    vid2.pause();
                    vid3.pause();
                }

            }
            if ($(this).scrollTop() >= _sec3 && $(this).scrollTop() <= _sec4) {
                if(sectionActive3){
                    sectionActive3 = false;
                    sectionActive1 = true;
                    sectionActive2 = true;
                    sectionActive4 = true;
                    $('.section').removeClass("on");
                    _wiggler.addClass("on");
                    console.log('_wiggler active');
                    vid1.pause();
                    vid2.play();
                    vid3.pause();
                }
            }
            if ($(this).scrollTop() >= _sec4) {
                if(sectionActive4){
                    sectionActive4 = false;
                    sectionActive1 = true;
                    sectionActive2 = true;
                    sectionActive3 = true;
                    $('.section').removeClass("on");
                    _download.addClass("on");
                    console.log('_download active');
                    vid1.pause();
                    vid2.pause();
                    vid3.play();
                }
            }
        });

    }
}
