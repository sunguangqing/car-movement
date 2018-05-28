$(function () {
    $(".btn-group span").mousemove(function () {
        var $index = $(this).index() - 1,
            translate =  $index * 115,
            rotate = $index * 720;
        $(this).addClass("active").siblings("span").removeClass("active");
        $(".car-box").css("transform", 'translateX(' + translate + 'px)').find("img").css("transform", 'rotate(' + rotate + 'deg)');
    });
});
