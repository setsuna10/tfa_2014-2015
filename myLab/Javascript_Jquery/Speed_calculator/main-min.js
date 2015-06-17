 //Speedtest
 //Julian Spiessens 2015
 //Made for the T.Num.Av.2 class at Haute école Albert Jacquart.
$(document).ready(function(){var e="http:www.setunarts.com/dessin/images/speed.jpg";var a=2979013;var f=0;var d=0;$("#button").click(c);function c(){f=new Date();f=f.getTime();var g=new Image();g.src=e+"?"+f;g.onload=b}function b(){var i=new Date();i=i.getTime();var g=i-f;var h=Math.round(a/g*100)/100;$("#result").html(h);console.log(h)}});