$(document).ready(function () {

    $.ajax({
        url: "topHeader.html", success: function (result) {
            $(".topHeader").html(result);
        }
    });

    $.ajax({
        url: "Home.html", success: function (result) {
            $(".content").html(result);
            name();
        }
    });




    $('li').on('click', function () {
        $('li').each(function () {
            $(this).removeClass('act');
        })
        $(this).addClass('act');

    })

    $(".menuIcon").click(function () {
        $(".navbar-nav").toggle();

    });
    $("#home").click(function () {
        $(".content").hide();
        hideNavbarOnclick();
        $.ajax({
            url: "Home.html", success: function (result) {
                $(".content").html(result);
                $(".content").fadeIn(1000);
                name();
            }
        });
    });

    $("#gallery").click(function () {
        $(".content").hide();
        hideNavbarOnclick();
        $.ajax({
            url: "Gallery.html", success: function (result) {
               
                $(".content").html(result);
                $(".content").fadeIn(1000);
            }
        });
    });
    function name() {
        $("#Atk").click(function(){
            $(".content").hide();
           
            hideNavbarOnclick();
            $.ajax({
                url: "Atkana.html", success: function (result) {
                    $(".content").html(result);
                    $(".content").fadeIn(1000);
                }
            });
            $('li').each(function () {
                $(this).removeClass('act');
            })
            $("#Atkana").addClass('act');
        });
        $("#Yeuz").click(function(){
            $(".content").hide();
           
            hideNavbarOnclick();
            $.ajax({
                url: "Tihnun.html", success: function (result) {
                    $(".content").html(result);
                    $(".content").fadeIn(1000);
                }
            });
            $('li').each(function () {
                $(this).removeClass('act');
            })
            $("#Tihnun").addClass('act');
        });
        $("#Mehira").click(function(){
            $(".content").hide();
           
            hideNavbarOnclick();
            $.ajax({
                url: "Aspaka.html", success: function (result) {
                    $(".content").html(result);
                    $(".content").fadeIn(1000);
                }
            });
            $('li').each(function () {
                $(this).removeClass('act');
            })
            $("#Aspaka").addClass('act');
        });
       
        
    }
   

    $("#Tihnun").click(function () {
        $(".content").hide();
        hideNavbarOnclick();
        $.ajax({
            url: "Tihnun.html", success: function (result) {
                $(".content").html(result);
                $(".content").fadeIn(1000);
            }
        });
        
    });

    $("#Aspaka").click(function () {
        $(".content").hide();
        hideNavbarOnclick();
        $.ajax({
            url: "Aspaka.html", success: function (result) {
                $(".content").html(result);
                $(".content").fadeIn(1000);
            }
        });
    });


    $("#Atkana").click(function () {
       
        $(".content").hide();
        hideNavbarOnclick();
        $.ajax({
            url: "Atkana.html", success: function (result) {
                $(".content").html(result);
                $(".content").fadeIn(1000);
            }
        });
    });


    $.ajax({
        url: "bottomBottom.html", success: function (result) {
            $(".bottomBottom").html(result);
        }
    });

function hideNavbarOnclick() {
    if($(window).width() <= 770){
        $(".navbar-nav").css("display","none");

    }
    else{
        $(".navbar-nav").css("display","block");
    }
    ;

}
$(window).resize(function(){
  hideNavbarOnclick();
});




});