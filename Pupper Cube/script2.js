var degree = 0;
//const fs = require('fs');
//var files = fs.readdirSync('https://github.com/Snowager/Snowager.github.io/tree/master/bacs200/test/photo/');
//var files = fs.readdirSync('/photo/');'
var photoList = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg', 'dog7.jpg', 'dog8.jpg', 'dog9.jpg', 'dog10.jpg', 'dog11.jpg']
var iterator = 1;
$(window).on('swipeleft', function(event) {
    var durationC = 200;
    iterator +=1;
    //(iterator >= 10) {
    //    iterator = 0;
    $('#imgSet').attr("src", photoList[iterator]);
    //} else {
    //     $('.face').attr("src", photoList[iterator]);
    //}
    $('.cube').animate({degree: '-=90'}, {
        duration: durationC,
        step: function(degree,fx) {
        $(this).css('-webkit-transform', 'rotateY('+degree+'deg)');
        },   
    },'swing');
});
$(window).on('swiperight', function(event) {
    var durationC = 200;
    iterator -=1;
    //if (iterator <= 0) {
    //    iterator = 9;
        $('.face').attr("src", photoList[iterator]);
    //} else {
    //    $('.face').attr("src", files[iterator]);
    //}
    $('.cube').animate({degree: '+=90'}, {
        duration: durationC,
        step: function(degree,fx) {
        $(this).css('-webkit-transform', 'rotateY('+degree+'deg)');
        },  
    },'swing');
});