$(function(){
    $('#nav').mouseover(function(){
       $('#nav2_back').fadeIn();
       $('#nav2_box').addClass('on');
    })
    $('#nav2_box').mouseleave(function(){
        $('#nav2_box').removeClass('on');
        $('#nav2_back').fadeOut();
    })
    
    $('.tabSet').each(function(){
        var anchor_all = $(this).find('.tabs a');//변수를 기억합니다
        var panels_all = $(this).find('.panel');//모든 .tabs a(anchor)와 모든 .panels(div)을 제거할때 쓸것
        var anchor_active = $(this).find('.tabs a.active');//a.active만 검색
        var panels_active = anchor_active.attr('href');//a.active의 href 값을 기억함 = 패널id

        $(panels_active) .show();

        anchor_all.each(function(){//.tabs a
            var panels_active = $(this).attr('href');

            $(this).mouseover(function(event){//마우스가 끝나는 지점에서 멈춤(mouseout넣으면 hover랑 같음)
                event.preventDefault();
                panels_all.hide();
                anchor_all.removeClass('active');
                $(this).addClass('active');
                $(panels_active).show();
            })
        })
    })//tab

    //달력시작
       /* $.datepicker.setDefaults($.datepicker.regional['ko']); 
        $( "#startDate" ).datepicker({
             changeMonth: true, 
             changeYear: true,
             nextText: '다음 달',
             prevText: '이전 달', 
             dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
             dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
             monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
             monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
             dateFormat: "yymmdd",
             maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
             onClose: function( selectedDate ) {    
                  //시작일(startDate) datepicker가 닫힐때
                  //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
                 $("#endDate").datepicker( "option", "minDate", selectedDate );
             }    
        });

        $( "#endDate" ).datepicker({
             changeMonth: true, 
             changeYear: true,
             nextText: '다음 달',
             prevText: '이전 달', 
             dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
             dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
             monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
             monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
             dateFormat: "yymmdd",
             maxDate: 10,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
             onClose: function( selectedDate ) {    
                 // 종료일(endDate) datepicker가 닫힐때
                 // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
                 $("#startDate").datepicker( "option", "maxDate", selectedDate );
             }    

        });    
});//달력끝*/

})//js end