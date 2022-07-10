$(document).ready(function(){
    //$("지정한 대상의 선택자").load("가져올 외부파일", 콜백함수);
    //지정한 대상의 선택자에 가져올 외부파일을 넣고 그 이후에 콜백함수 내부의 실행문을 진행시켜라

    //외부파일을 가져왔을 때는 이벤트 걸기 위한 시점이 늦기때문에 콜백함수를 활용
    $("#header").load("./header.html", function(){
        var $hash = location.hash;
        console.log($hash);
        var $num_hash = $hash.replace("#","");
        console.log($num_hash);

        //var $href = location.href;
        //console.log($href);
    });
    

    
    $("#footer").load("./footer.html");



    $(window).scroll(function(){
        if($(document).scrollTop() > 0) {
        $("header").addClass("scroll");
        $("header .wrap nav > ul > li > a").addClass("scroll");
        $("header .wrap nav .logo img").addClass("scroll");
        $("header .wrap nav > ul > li").addClass("scroll");
        $("header .wrap .util > ul > li").addClass("scroll");
        $("header .wrap .util > ul > li > a").addClass("scroll");
        $("header .wrap .util > ul > li span").addClass("scroll");
        $("header .wrap .util > .search").addClass("scroll");
        $("header .wrap .util > .search button img").addClass("scroll");
        $(".user_btn").addClass("scroll");
        } else {
        $("header").removeClass("scroll");
        $("header .wrap nav > ul > li > a").removeClass("scroll");
        $("header .wrap nav .logo img").removeClass("scroll");
        $("header .wrap nav > ul > li").removeClass("scroll");
        $("header .wrap .util > ul > li").removeClass("scroll");
        $("header .wrap .util > ul > li > a").removeClass("scroll");
        $("header .wrap .util > ul > li span").removeClass("scroll");
        $("header .wrap .util > .search").removeClass("scroll");
        $("header .wrap .util > .search button img").removeClass("scroll");
        $(".user_btn").removeClass("scroll");
        }
    });

    
    $(document).on("click", ".origin", function(){
        console.log("클릭이벤트 발생");
        var $active = $(this).hasClass("active");
        if($active == false){
            $(this).addClass("active");
            $(".fs_box ul").slideDown();
        }else{
            $(this).removeClass("active");
            $(".fs_box ul").slideUp();
        } 
    });

    //반응형 유저 버튼 클릭이벤트
    $(document).on("click", ".user_btn", function(){
        var $active = $(this).hasClass("active");
        if($active == false){
            $(this).addClass("active");
            $(".util").addClass("active");
        }else{
            $(this).removeClass("active");
            $(".util").removeClass("active");
        } 
    });

    /*검색 클릭이벤트*/
    $(document).on("click", "input", function(){
        var $active = $(this).hasClass("active");
        if($active == false){
            $(this).addClass("active");
            $(".search_box").css("display","block");
        }else{
            $(this).removeClass("active");
            $(".search_box").css("display","none");
        } 
    });

    /*검색창 탭버튼 이벤트*/
    $(document).on("click", ".tab_btn li", function(){
        var $index = $(this).index();
        console.log($index);  //0 | 1 | 2

        $(".tab_box").removeClass("active");  
        $(".tab_box").eq($index).addClass("active");  


  
        $(".tab_btn li").removeClass("active"); 
        $(this).addClass("active"); 

 
        $(".tab_btn .blackLine").stop().animate({"left":$index * 50 + "%"},500)

        return false;
    });




});