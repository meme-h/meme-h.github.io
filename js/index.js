// 팝업 스크롤 막기
function scrollLock() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrolllock')
    
}

// 팝업 스크롤 막기 해제
function scrollLockOff() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrolllock')
}

$(document).ready(function(){
    // tab menu
    $('.tab-menu ul li').on('click', function() {
        const num = $('.tab-menu ul li').index($(this));
        
        $('.tab-menu ul li').removeClass('active');
        $('.tab-con .tab-con-div').removeClass('on');

        $('.tab-menu li:eq(' + num + ')').addClass('active');
        $('.tab-con > .tab-con-div:eq(' + num + ')').addClass('on');
        
        $('.tab-select').val(num).prop('selected', true)
    });

     // list chk all
    $('#list_chkAll').click(function() {
        if($('#list_chkAll').is(':checked')) $('input[name=list_chk]').prop('checked', true);
        else $('input[name=list_chk]').prop('checked', false);

        $('input[name=list_chk]').click(function() {
            var total = $('input[name=list_chk]').length;
            var checked = $('input[name=list_chk]:checked').length;

            if(total != checked) $('#list_chkAll').prop('checked', false);
            else $('#list_chkAll').prop('checked', true);
        })
    })

    // email direct
    $(function() {
        $('#selboxDirect').hide();
        
        $('#selbox_email').change(function() {
            if($('#selbox_email').val() == 'direct') {
                $('#selboxDirect').show();
            } else $('#selboxDirect').hide();
        })
    })

    // 파일 input
	$(function() {
        var fileTarget = $('.input-file');

        fileTarget.on('change', function() {
            if(window.FileReader) {
                var filename = $(this)[0].files[0].name;
            }
            else { // IE version
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }

            $(this).siblings('.file-name').val(filename);
        });
    });

    // 숫자만 입력
	$('input[name=number_input]').keyup(function(){
        $(this).val(Number($(this).val().replace(/[^0-9]/g,"")));
    })

})