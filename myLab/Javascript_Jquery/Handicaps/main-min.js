//Display
//Julian Spiessens 2015
//Créated for the class of T.Num.Av.2
//self-coded
$(function(){var g=$("#btn_zoom");var a=$("#btn_retour");var d=$("#btn_elegant");var b=0;$("#btn_retour").hide();function f(){if(b==0){$("#btn_retour").show();$("#poetry").addClass("Zoom")}else{if(b==1){$("#poetry").removeClass("Zoom");$("#poetry").addClass("ZoomX2")}else{if(b==2){$("#poetry").removeClass("ZoomX2");$("#poetry").addClass("ZoomX3")}else{$("#poetry").removeClass("ZoomX3");$("#poetry").addClass("ZoomX4")}}}b++}function e(){$("#poetry").removeClass("Zoom");$("#poetry").removeClass("ZoomX2");$("#poetry").removeClass("ZoomX3");$("#poetry").removeClass("ZoomX4");$("#btn_retour").hide();b=0}function c(){$("#poetry").toggleClass("elegant")}g.click(f);a.click(e);d.click(c)});
