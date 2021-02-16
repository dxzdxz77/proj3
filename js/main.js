$(function(){
    //모바일 네비
        $('.nav_btn').click(function(){
            $('.nav_pop').css({right:0});
        })//click
        $('.close_btn').click(function(){
            if($(window).width() < 400){
                $('.nav_pop').css({right:'-400px'})
            }
            else{
                $('.nav_pop').css({right:'-100%'})
            }
        })//click
        /*$('.close_btn').click(function(){
            $('.nav_pop').css({right:'-100%'})
        })//click수정전*/
        $('#nav_mo .nav_tit').click(function(){
            $('#nav_mo .nav_tit .sub').hide();
            $(this).find('.sub').show();
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
    //오늘날짜 기본셋팅
    $("#startDate").attr('value',getToday());
    $("#endDate").attr('value',getToday());
     function getToday(){
         var now = new Date();
         var year = now.getFullYear();
         var month = now.getMonth() + 1;    //1월이 0으로 되기때문에 +1을 함.
         var date = now.getDate();
     
         month = month >=10 ? month : "0" + month;
         date  = date  >= 10 ? date : "0" + date;
          // ""을 빼면 year + month (숫자+숫자) 됨.. ex) 2018 + 12 = 2030이 리턴됨.
     
         //console.log(""+year + month + date);
         return today = ""+year+"."+ month + "." + date; 
     }
    //달력호출
    $("#kalendar_start").datepicker({
        dateFormat: 'yy/mm/dd',
        onSelect: function(){
              $("#startDate").attr('value',$("#kalendar_start").val());
 
             }
      });
     $("#kalendar_end").datepicker({
        dateFormat: 'yy/mm/dd',
        onSelect: function(){
              $("#endDate").attr('value',$("#kalendar_end").val());
 
             }
      });
    //카렌다박스 열기 
    $('.check').click(function(){$('.kalendar_box').show()})
 
 //카렌다박스 닫고 몇박 계산하기
 $('.kalendar_close').click(function(){
    var enddate = $('#endDate').attr('value').substr(0,4) + $('#endDate').attr('value').substr(5,2) + $('#endDate').attr('value').substr(8,2)
    var startdate = $('#startDate').attr('value').substr(0,4) + $('#startDate').attr('value').substr(5,2) + $('#startDate').attr('value').substr(8,2)
    var day = enddate - startdate
    $('.day input').attr('value',day+"박");
    $('.kalendar_box').hide();
 })//달력끝

})//js end