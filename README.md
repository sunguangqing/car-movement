### 结合CSS3实现小车平滑移动

https://sunguangqing.github.io/car-movement/car-movement.html

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

### 动图显示标题

#### `利用animation动画实现动态显示标题效果`
```CSS
h2{
    overflow: hidden;
    width: 380px;
    height: 18px;
    border-right: 1px solid #888;
    -webkit-animation: width 4s steps(20), border 1s steps(1) infinite;
    -o-animation: width 4s steps(20), border 1s steps(1) infinite;
    animation: width 4s steps(20), border 1s steps(1) infinite;
    color: #888;
    white-space: nowrap;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    margin: 0 auto 30px;
}
@keyframes border {
    50% {border-color: transparent;}
}
@keyframes width {
    0% {width: 0;}
}
```

>注意：浏览器兼容问题
```CSS
@-webkit-keyframes animation-name { }
   @-moz-keyframes animation-name { }
    @-ms-keyframes animation-name { }
     @-o-keyframes animation-name { }
        @keyframes animation-name { }
```
