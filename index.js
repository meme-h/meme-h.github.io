/* 
    주어진 과제 내용 중 javascript를 사용할 만한 일은 크게 없을 것 같지만,
    사용해야할 경우가 있을 경우 사용해주세요.
    javascript 라이브러리 사용은 지양하지만 jquery는 사용하셔도 무방합니다.
*/
$(document).ready(function(){
    // tab menu
    $('.tab-menu li').on('click', function() {
        const num = $('.tab-menu li').index($(this));
        
        $('.tab-menu li').removeClass('active');
        $('.tab-con > div').removeClass('on');

        $('.tab-menu li:eq(' + num + ')').addClass('active');
        $('.tab-con > div:eq(' + num + ')').addClass('on');
    });
})