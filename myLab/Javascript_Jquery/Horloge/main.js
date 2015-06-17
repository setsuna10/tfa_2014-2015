//Horloge avec arc concentrique
// Julian Spiessens 2015
// Made for the T.Num.Av.2 class at Haute Ecole Albert Jacquart
$(document).ready(function(){ 
	everySec(); 
	setInterval("everySec()",1000); //calculate the angle of the arc every sec 
});
function NewDate () { //get hour minutes and seconcs
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	return {'h':h,'m':m,'s':s};
};
function everySec () { //calculate angle 
	var date = NewDate();
	var secFix = 6*date.s + 45; 
	var minFix = 6*date.m + 45;
	var hourFix = 30*date.h + 45; 
	if (date.h>12) { //12hour system
		date.h=date.h-12;
	};
	if (date.s > 30) {
		$('#sec1').css('-webkit-transform', 'rotate(225deg)'); // 225deg is the value when the half circle is full
		$('#sec1').css('-moz-transform', 'rotate(225deg)');
		$('#sec1').css('-o-transform', 'rotate(225deg)');
		$('#sec1').css('-ms-transform', 'rotate(225deg)');
		$('#sec1').css('transform', 'rotate(225deg)');
		$('#sec2').css('-webkit-transform', 'rotate(' + secFix + 'deg)'); //get angle
		$('#sec2').css('-moz-transform', 'rotate(' + secFix + 'deg)');
		$('#sec2').css('-o-transform', 'rotate(' + secFix + 'deg)');
		$('#sec2').css('-ms-transform', 'rotate(' + secFix + 'deg)');
		$('#sec2').css('transform', 'rotate(' + secFix + 'deg)');
	} else {
		$('#sec1').css('-webkit-transform', 'rotate(' + secFix + 'deg)');
		$('#sec1').css('-moz-transform', 'rotate(' + secFix + 'deg)');
		$('#sec1').css('-o-transform', 'rotate(' + secFix + 'deg)');
		$('#sec1').css('-ms-transform', 'rotate(' + secFix + 'deg)');
		$('#sec1').css('transform', 'rotate(' + secFix + 'deg)');
		$('#sec2').css('-webkit-transform', 'rotate(225deg)');
		$('#sec2').css('-moz-transform', 'rotate(225deg)');
		$('#sec2').css('-o-transform', 'rotate(225deg)');
		$('#sec2').css('-ms-transform', 'rotate(225deg)');
		$('#sec2').css('transform', 'rotate(225deg)');
	};
	if (date.m > 30) {
		$('#min1').css('-webkit-transform', 'rotate(225deg)');
		$('#min1').css('-moz-transform', 'rotate(225deg)');
		$('#min1').css('-o-transform', 'rotate(225deg)');
		$('#min1').css('-ms-transform', 'rotate(225deg)');
		$('#min1').css('transform', 'rotate(225deg)');
		$('#min2').css('-webkit-transform', 'rotate(' + minFix + 'deg)');
		$('#min2').css('-moz-transform', 'rotate(' + minFix + 'deg)');
		$('#min2').css('-o-transform', 'rotate(' + minFix + 'deg)');
		$('#min2').css('-ms-transform', 'rotate(' + minFix + 'deg)');
		$('#min2').css('transform', 'rotate(' + minFix + 'deg)');	
	} else {
		$('#min1').css('-webkit-transform', 'rotate(' + minFix + 'deg)');
		$('#min1').css('-moz-transform', 'rotate(' + minFix + 'deg)');
		$('#min1').css('-o-transform', 'rotate(' + minFix + 'deg)');
		$('#min1').css('-ms-transform', 'rotate(' + minFix + 'deg)');
		$('#min1').css('transform', 'rotate(' + minFix + 'deg)');
		$('#min2').css('-webkit-transform', 'rotate(225deg)');
		$('#min2').css('-moz-transform', 'rotate(225deg)');
		$('#min2').css('-o-transform', 'rotate(225deg)');
		$('#min2').css('-ms-transform', 'rotate(225deg)');
		$('#min2').css('transform', 'rotate(225deg)');
	
	};
	if (date.h > 6) {
		$('#hour1').css('-webkit-transform', 'rotate(225deg)');
		$('#hour1').css('-moz-transform', 'rotate(225deg)');
		$('#hour1').css('-o-transform', 'rotate(225deg)');
		$('#hour1').css('-ms-transform', 'rotate(225deg)');
		$('#hour1').css('transform', 'rotate(225deg)');
		$('#hour2').css('-webkit-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour2').css('-moz-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour2').css('-o-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour2').css('-ms-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour2').css('transform', 'rotate(' + hourFix + 'deg)');
	} else {
		$('#hour1').css('-webkit-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour1').css('-moz-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour1').css('-o-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour1').css('-ms-transform', 'rotate(' + hourFix + 'deg)');
		$('#hour1').css('transform', 'rotate(' + hourFix + 'deg)');
		$('#hour2').css('-webkit-transform', 'rotate(225deg)');
		$('#hour2').css('-moz-transform', 'rotate(225deg)');
		$('#hour2').css('-o-transform', 'rotate(225deg)');
		$('#hour2').css('-ms-transform', 'rotate(225deg)');
		$('#hour2').css('transform', 'rotate(225deg)');
	};
};