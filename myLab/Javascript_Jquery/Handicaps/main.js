$(document).ready(function(){
			var $button= $("#btn_zoom");
			var $buttonR = $("#btn_retour");
			var $buttonE = $("#btn_elegant");
			var i = 0;			
			$('#btn_retour').hide();
			function zoom(){

				if (i==0){
					$('#btn_retour').show();
					$("#poetry").addClass("Zoom");
				}else if (i==1){
					$("#poetry").removeClass("Zoom");
					$("#poetry").addClass("ZoomX2");	
				} else if (i==2){
					$("#poetry").removeClass("ZoomX2");
					$("#poetry").addClass("ZoomX3");
				} else {
					$("#poetry").removeClass("ZoomX3");
					$("#poetry").addClass("ZoomX4");					
				}
				i++;
			};

			function reset() {
					$("#poetry").removeClass("Zoom");
					$("#poetry").removeClass("ZoomX2");
					$("#poetry").removeClass("ZoomX3");
					$("#poetry").removeClass("ZoomX4");
					$('#btn_retour').hide();
					i = 0;
			};

			function elegant() {
					$("#poetry").toggleClass("elegant");
			}

		$button.click(zoom)	
		$buttonR.click(reset)
		$buttonE.click(elegant)
		});
