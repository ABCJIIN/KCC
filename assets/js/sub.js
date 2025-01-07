$(document).ready(function(){
    // INCLUDE 파일 공통요소 불러오는 스크립트
    $("header").load("../../html/include/header_sub.html"); // 헤더 INCLUDE  
    $("footer").load("../../html/include/footer.html"); // 푸터 INCLUDE
    $(".quick-menu").load("../../html/include/quick_menu.html"); // 퀵메뉴 INCLUDE

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

    // 탭 메뉴 클릭 이벤트
    $('.tab-menu').each(function() {
        let $tabMenu = $(this); // 현재 탭 메뉴 그룹
        
        $tabMenu.find('.tab-list > li').on('click', function() {
            let tabIndex = $tabMenu.find('.tab-list > li').index(this); // 클릭된 탭의 인덱스

            // 현재 탭 메뉴 그룹의 탭과 콘텐츠 클래스 관리
            $tabMenu.find('.tab-list > li, .tab-cont > div').removeClass('on');
            $(this).addClass('on');
            $tabMenu.find('.tab-cont > div').eq(tabIndex).addClass('on');
        });
    });

    // product 제품 탭 메뉴 설명 모바일 토글 버튼
    // 버튼 클릭 이벤트
    $('.info-wrap .top .toggle-btn').on('click', function() {
        const windowWidth = $(window).width();

        if (windowWidth > 768) {
            // PC 화면에서는 항상 슬라이드 다운
            $(this).closest('.top').next('.info').slideDown();
            $(this).removeClass('on');
        } else {
            // 모바일 화면에서는 슬라이드 토글
            $(this).closest('.top').next('.info').slideToggle();
            $(this).toggleClass('on');
        }
    });

    // 화면 크기 변경 시 이벤트
    $(window).on('resize', function() {
        const windowWidth = $(window).width();

        if (windowWidth > 768) {
            // PC 화면으로 변경될 때 슬라이드 다운
            $('.info-wrap .info').slideDown();
            $('.info-wrap .top .toggle-btn').removeClass('on');
        }
    });

    // AOS 플러그인
    AOS.init();

});