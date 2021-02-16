$(document).ready(function () {
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
 });