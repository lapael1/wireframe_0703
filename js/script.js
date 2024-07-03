$(document).ready(function(){
            // tapmenu
            $(function(){
                $(".tabmenu > li> a").click(function(){
                    $(this).parent().addClass("active").siblings().removeClass("active")
                })
            })
})