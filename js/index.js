$(document).ready(function(){
    //best part
    var $best_arr = [
        ["best1.png", "스타일리쉬 블랙 쇼퍼백","106,000"],
        ["best2.png", "더 리틀 포레스트 백팩","104,000"],
        ["best3.png", "뷰티 인 마이라이프 쇼퍼백","240,000원"],
        ["best4.png", "스타일리쉬 와인 백팩","106,000"]
    ];
    
    var $best_box = `
    <a class="img_bg" href="">
        <div class="dark">
            <h3>포 트레블 백팩 For Travel</h3>
            <p>106,000</p>
        </div>
    </a>
    `;
    for(i = 0; i < $best_arr.length; i++){
        $("#best .cont").append($best_box);
    }
    $("#best .img_bg").each(function(index){
        $(this).css("background-image",`url(./img/${$best_arr[index][0]})`);
        $(this).find("h3").text($best_arr[index][1]);
        $(this).find("p").text($best_arr[index][2]);
    });



    $("#best .img_bg").hover(function(){
        var $index = $(this).index();
        console.log($index);
        $(this).css("background-image",`url(./img/best${$index + 1}_hover.png)`);
    }, function(){
        var $index = $(this).index();
        $(this).css("background-image",`url(./img/best${$index + 1}.png)`);
    });



    //pick part
    $("#pick .right .left_btn").click(function(){
        var $last = $(".right > ul > li").last();
        $(".right > ul").stop().animate({"left":"388px"}, 1000, function(){
            $(".right > ul").prepend($last).css("left","194px");
        });

        var $main_last = $(".right .main_slider li").last();
        $(".right .main_slider").stop().animate({"margin-left":"0px"},1000, function(){
            $(".right .main_slider").prepend($main_last).css("margin-left","-100%");
        });
        
        return false;
    });

    $("#pick .right .right_btn").click(function(){
        var $first = $(".right > ul > li").first();
        $(".right > ul").append($first).css("left","388px");
        $(".right > ul").stop().animate({"left":"194px"}, 1000, function(){
            $(".right > ul").append($first).css("left","194px");
        });

        var $main_first = $(".right .main_slider li").first();
        $(".right .main_slider").stop().animate({"margin-left":"-200%"},1000, function(){
            $(".right .main_slider").append($main_first).css("margin-left","-100%");
        });
        return false;
    });

    $(".util input").click(function(){
        var $focus = $(".util input").is(":focus");
        if($focus == true){
            
        }else{
            $(".util .search_box").css("display", "block");
        }
    });

    

});
