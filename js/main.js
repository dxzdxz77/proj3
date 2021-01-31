$(function(){
    //모바일 네비
        $('.nav_btn').click(function(){
            $('.nav_pop').css({right:0});
        })//click
        $('.close_btn').click(function(){
            $('.nav_pop').css({right:'-100%'})
        })//click
        $('#nav_mo .nav_tit').click(function(){
            $('#nav_mo .nav_tit .sub').slideUp();
            $(this).find('.sub').slideDown();
        })//click 만약 이상태가 싫으면 sta = 1/sta = 2 를 써야한다
        
    
        $(window).scroll(function(){
            if($(document).scrollTop() >= 300){
                $('#header_mo').css({'background-color':'#fff'});
                $('#header_mo .nav_btn span').css({'backgroundcolor':'#ddd'});
                $('#header_mo.sub_header').addClass('active');//#header.sub_header 붙여 쓴이유는 자기 자신이니까 html에 id와 class가 같이 들어있기때문에 붙여쓴거고 띄워서쓰는 것들은 아이디 밑에 클래스
                $('#header_mo.sub_header').css({'background-color':'#fff'});
            }//if
            else{
                $('#header_mo').css({'background-color':'transparent'});//transparent 투명한
                $('#header_mo .nav_btn span').css({'backgroundcolor':'#dedede'})
                $('#header_mo.sub_header').removeClass('active');
                $('#header_mo.sub_header').css({'background-color':'#fff'});
            }//else
        })//scroll
    
        $('#quick .center a').click(function(event){
            event.preventDefault();//a를 누르면 화면이 맨위로 올라가니까 a를 작동하지 않게 하는것 function(에) 이름을 주고 그 이름을 똑같이 쓴다
            $(this).find('span').toggleClass('active');//preventDefault = a,submit의 동작중단
        })//quick click

    //브라우저 네비
    $('#nav').mouseover(function(){
       $('#nav2_back').fadeIn();
       $('#nav2_box').addClass('on');
    })
    $('#nav2_box').mouseleave(function(){
        $('#nav2_box').removeClass('on');
        $('#nav2_back').fadeOut();
    })

    //탭시작
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