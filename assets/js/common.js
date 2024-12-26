$(document).ready(function(){
    // INCLUDE 파일 공통요소 불러오는 스크립트
    $("header").load("html/include/header.html"); // 헤더 INCLUDE  
    $("footer").load("html/include/footer.html"); // 푸터 INCLUDE
    $(".quick-menu").load("html/include/quick_menu.html"); // 퀵메뉴 INCLUDE

    // 메인 KV 슬라이드
    var KVSlide = new Swiper("#KVSlide", {
        loop: true,
        effect:'fade',
        speed: 400,
        spaceBetween : 0,
        // slideActiveClass: 'on',
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
        },
    },KVSlide);

    

});