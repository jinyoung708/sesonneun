$(function(){
    var $gnb = $(".gnb").html();
    $(".m_gnb").html($gnb);

    $(".m_gnb_open").on("click", function(){
        $("body").css({"overflow": "hidden"});
        $("#header .gnb_box").addClass("show");
    });

    $(".m_gnb_close").on("click", function(){
        $("body").css({"overflow": "visible"});
        $("#header .gnb_box").removeClass("show");
    });

    $(".gnb_box .m_gnb > li > a").on("click", function(){
        if(!$(this).parent().hasClass("active")){
            $(this).parent().addClass("active").siblings().removeClass("active");
            $(this).next(".sub_gnb").stop().slideDown(300);
            $(this).parent().siblings().find(".sub_gnb").stop().slideUp(300);
            return false;
        }
    });

    const visualSwiper = new Swiper('.visual_box.swiper', {
        loop: true,
        pagination: {
            el: '.visual_box.swiper .swiper-pagination',
            clickable: true,
        },
    });


    // $(window).on("resize", function(){
    //     windowW = window.innerWidth;
        
    // });
    // $(window).resize();

    $(window).on("scroll", function(){
        pageY = window.pageYOffset;
        if(pageY>=$("#content").offset().top){
            $("#header").addClass("scrolled");
        }
        else{
            $("#header").removeClass("scrolled");
        }
        
    });
    $(window).scroll();

    $(".scroll_tab > li > a").on("click", function(){
        var num = $(this).attr("data-item-num");
        var move = $(".tab_con").find("." + num).offset().top - $("#header .gnb_header").height();
        $("html, body").animate({
            scrollTop: move
        }, 500);
        return false;
    });
});