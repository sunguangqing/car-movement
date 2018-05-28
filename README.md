### 结合CSS3实现小车平滑移动

#### `在尽可能减少img图片使用的情况下, 利用CSS3背景色渐变实现鼠标移上效果`
```CSS
span.active{
    background: -webkit-radial-gradient(circle, #02adee 64%, #fff 68%); 
    background: -o-radial-gradien(circle, #02adee 64%, #fff 68%); 
    background: -moz-radial-gradient(circle, #02adee 64%, #fff 68%); 
    background: radial-gradient(circle, #02adee 64%, #fff 68%);
}
```

####  `根据鼠标移动的位置去计算小车平移的距离和轮胎旋转的度数`
```javascript
$(".btn-group span").mousemove(function () {
    var $index = $(this).index() - 1,
        translate =  $index * 115,
        rotate = $index * 720;
    $(this).addClass("active").siblings("span").removeClass("active");
    $(".car-box").css("transform", 'translateX(' + translate + 'px)').find("img").css("transform", 'rotate(' + rotate + 'deg)');
});
```
