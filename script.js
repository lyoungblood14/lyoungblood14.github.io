//https://cartographymaster.eu/studentwork/mp-group7/
// this scroll thing not working. Want to have it so when you scroll, there is a shadow appearing. 
$(window).scroll(function(){
    if (document.body.scrollTop === 0)
         $(".header").css({"color":"#dc0d07"});
    else
          $(".header").css({"color":"#dc0d07"});
    });
    
    function showText(text){
        document.getElementById("text").innerHTML=text;
    }
    function hide(){
        document.getElementById("text").innerHTML="";
    }
    function showText2(text){
        document.getElementById("text2").innerHTML=text;
    }
    function hide2(){
        document.getElementById("text2").innerHTML="";
    }
    
    function showText3(text){
        document.getElementById("text3").innerHTML=text;
    }
    function hide3(){
        document.getElementById("text3").innerHTML="";
    }