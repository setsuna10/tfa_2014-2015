var home = document.getElementById('home');


var mc = new Hammer(home);



var i = 1;

mc.on("swiperight", function(ev) {
   		console.log('swipe');
	if (i == 1) {
        //efface le precendent attribution de classe
        document.getElementById('bloc1').classList.remove('visible')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('cache')
        document.getElementById('bloc4').classList.remove('cache')
        document.getElementById('bloc5').classList.remove('eject')
        //effectue le nouveau
    	document.getElementById('bloc1').classList.add('eject')
    	document.getElementById('bloc2').classList.add('visible')
    	document.getElementById('bloc3').classList.add('cache')
    	document.getElementById('bloc4').classList.add('cache')
    	document.getElementById('bloc5').classList.add('cache')
    	;
    	i = i +1;
    	console.log(i);

	} else if ( i == 2) {
        //efface le precendent attribution de classe
        document.getElementById('bloc1').classList.remove('eject')
        document.getElementById('bloc2').classList.remove('visible')
        document.getElementById('bloc3').classList.remove('cache')
        document.getElementById('bloc4').classList.remove('cache')
        document.getElementById('bloc5').classList.remove('cache')
        //effectue le nouveau
    	document.getElementById('bloc1').classList.add('cache')
    	document.getElementById('bloc2').classList.add('eject')
    	document.getElementById('bloc3').classList.add('visible')
    	document.getElementById('bloc4').classList.add('cache')
    	document.getElementById('bloc5').classList.add('cache')
    	;
    	i = i +1;
    	console.log(i);

	} else if ( i == 3) {
        //efface le precendent attribution de classe
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('eject')
        document.getElementById('bloc3').classList.remove('visible')
        document.getElementById('bloc4').classList.remove('cache')
        document.getElementById('bloc5').classList.remove('cache')        
        //effectue le nouveau
        document.getElementById('bloc1').classList.add('cache')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('eject')
        document.getElementById('bloc4').classList.add('visible')
        document.getElementById('bloc5').classList.add('cache')
        ;
        i = i +1;
        console.log(i);

    } else if ( i == 4) {
        //efface le precendent attribution de classe
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('eject')
        document.getElementById('bloc4').classList.remove('visible')
        document.getElementById('bloc5').classList.remove('cache')
        //effectue le nouveau
        document.getElementById('bloc1').classList.add('cache')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('cache')
        document.getElementById('bloc4').classList.add('eject')
        document.getElementById('bloc5').classList.add('visible')
        ;
        i = i +1;
        console.log(i);

    } else if ( i == 5) {
        //efface le precendent attribution de classe
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('cache')
        document.getElementById('bloc4').classList.remove('eject')
        document.getElementById('bloc5').classList.remove('visible')
        //effectue le nouveau
        document.getElementById('bloc1').classList.add('visible')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('cache')
        document.getElementById('bloc4').classList.add('cache')
        document.getElementById('bloc5').classList.add('eject')
        ;
        i = 1;
        console.log(i);

    };
});
	
mc.on("swipeleft", function(ev) {
   	    console.log('swipe2');
	if (i == 2) {
            //retire la class
    	document.getElementById('bloc1').classList.remove('eject')
    	document.getElementById('bloc2').classList.remove('visible')
    	document.getElementById('bloc3').classList.remove('cache')
    	document.getElementById('bloc4').classList.remove('cache')
    	document.getElementById('bloc5').classList.remove('cache')
        //effectue le nouveau
        document.getElementById('bloc1').classList.add('visible')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('cache')
        document.getElementById('bloc4').classList.add('cache')
        document.getElementById('bloc5').classList.add('eject')        
    	;
    	i = i -1;
    	console.log(i);

	} else if (i == 3 ){
                //retire la class
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('eject')
        document.getElementById('bloc3').classList.remove('visible')
        document.getElementById('bloc4').classList.remove('cache')
        document.getElementById('bloc5').classList.remove('cache')
                 //effectue le nouveau
        document.getElementById('bloc1').classList.add('eject')
        document.getElementById('bloc2').classList.add('visible')
        document.getElementById('bloc3').classList.add('cache')
        document.getElementById('bloc4').classList.add('cache')
        document.getElementById('bloc5').classList.add('cache')

        ;
        i = i -1;
        console.log(i);

    } else if (i == 4 ){
                //retire la class
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('eject')
        document.getElementById('bloc4').classList.remove('visible')
        document.getElementById('bloc5').classList.remove('cache')
                //effectue le nouveau
        document.getElementById('bloc1').classList.add('cache')
        document.getElementById('bloc2').classList.add('eject')
        document.getElementById('bloc3').classList.add('visible')
        document.getElementById('bloc4').classList.add('cache')
        document.getElementById('bloc5').classList.add('cache')

        ;
        i = i -1;
        console.log(i);

    } else if (i == 5 ){
        //retire la class
        document.getElementById('bloc1').classList.remove('cache')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('cache')
        document.getElementById('bloc4').classList.remove('eject')
        document.getElementById('bloc5').classList.remove('visible')
                //effectue le nouveau
        document.getElementById('bloc1').classList.add('cache')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('eject')
        document.getElementById('bloc4').classList.add('visible')
        document.getElementById('bloc5').classList.add('cache')
        ;
        i = i -1;
        console.log(i);

    } else if (i == 1 ){
        //retire la class
        document.getElementById('bloc1').classList.remove('visible')
        document.getElementById('bloc2').classList.remove('cache')
        document.getElementById('bloc3').classList.remove('cache')
        document.getElementById('bloc4').classList.remove('cache')
        document.getElementById('bloc5').classList.remove('eject')
                //effectue le nouveau
        document.getElementById('bloc1').classList.add('cache')
        document.getElementById('bloc2').classList.add('cache')
        document.getElementById('bloc3').classList.add('cache')
        document.getElementById('bloc4').classList.add('eject')
        document.getElementById('bloc5').classList.add('visible')

        ;
        i = 5;
        console.log(i);
    }

});

/*
$(function(){  
    var page = document.getElementById("page"),


    //Swipe
    Hammer(page).on("swipeleft", function() {
        $(this).find(".page").animate({left: "-=100"}, 500);
        $("#event").text("swipe left");
    });
    
    Hammer(page).on("swiperight", function() {
        $(this).find(".page").animate({left: "+=100"}, 500);
        $("#event").text("swipe right");
    });
    */

/*
var hammertime = new Hammer('page')
var page = document.getElementById('page');
	var hammer = new Hammer.Manager(page);
    recognizers: [
        [Hammer.Rotate],
        [Hammer.Pinch, { enable: false }, ['rotate']],
        [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
    ]



	hammer.on('swiperight', function(){
   console.log('swipe');
});
	/*
	hammer.on('swipeleft', function(){
   $(page).animate({left: "-=100"})  
});


/*	var	hammer = new Hammer('#page')
		hammer.on('panright panleft', function(event){

	console.log(event.deltaX);

	backgroundElement.style.transform = 'translateX(' + event.deltaX + 'px)';

});


	/*$(document).ready(function() {
	
	var $page= $('#page');

	//var swipe = new Hammer();

	$page.hammer(options).bind("pan",function(e){
		$page.animate({translateX: "550px"}, 500);
	

	})
	});
/*
	swipe.on('swipe', function(ev) {
		$page.animate({"transform":"translateX(50%)"})
		//console.log('swipe');
		})

	});

	/*$page.hammer()
		.on("swiperight",function(e){
		$page.animate({translateX: "550px"}, 500);
	})*/
