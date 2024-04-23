$(document).ready(function(){

    // 팝업 열기
    $(document).on("click", ".menu", function (e){
        $('.menu-popup').addClass("active");
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){
        var popup = $(".menu-popup");
        if(popup.has(e.target).length === 0){
            popup.removeClass("active");
        }
    });
    
    // ESC 키 누를시 팝업 닫기
    $(document).keydown(function(e){
        //keyCode 구 브라우저, which 현재 브라우저
        var code = e.keyCode || e.which;
    
        if (code == 27) { // 27은 ESC 키번호
            $('.menu-popup').removeClass('active')
        }
    });

})