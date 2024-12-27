$(document).ready(function(){
    // INCLUDE 파일 공통요소 불러오는 스크립트
    $("header").load("/html/include/header.html"); // 헤더 INCLUDE  
    $("footer").load("/html/include/footer.html"); // 푸터 INCLUDE
    $(".quick-menu").load("/html/include/quick_menu.html"); // 퀵메뉴 INCLUDE

    // 메인 KV 슬라이드
    var KVSlide = new Swiper("#KVSlide", {
        loop: true,
        effect:'fade',
        speed: 400,
        spaceBetween : 0,
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
        },
    },KVSlide);

    // 탭 메뉴
    $('.tab-list > li').on('click', function() {
        let tabList = $('.tab-list > li').index(this);

        $('.tab-list > li, .tab-cont > div').removeClass('on');
        
        $(this).addClass('on');
        $('.tab-cont > div:eq('+ tabList +')').addClass('on');
    });

});