 $(document).ready(function(){      

            var image = 'http://setunarts.com/TFA/myLab/Javascript_Jquery/Speed_calculator/speed.jpg';
            var size = 2979013;
            var time1 = 0;
            var time2 = 0;
            $('#button').click(start_test);

            function start_test()
            {
                time1 = new Date();
                time1 = time1.getTime();
                var img = new Image();
                img.src = image+'?'+time1;
                img.onload=end_test;
            }
            function end_test()
            {
                var time2 = new Date();
                time2 = time2.getTime();
                var ms = time2-time1;
                var vitesse = Math.round(size/ms*100)/100;
                $("#result").html(vitesse);
                console.log(vitesse); 
            }
 });