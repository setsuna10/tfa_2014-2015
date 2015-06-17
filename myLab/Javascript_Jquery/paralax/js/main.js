//refs : http://www.ascensionlatorre.com/home

//http: //www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// shim layer with setTimeout fallback
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
    };
})();

(function($) {
    //déclarer les variables
    var $sections, $parralaxes,
        section, parralax,
        currentScroll, sectionOffset, scroll,
        sectionCount, sectionHeight, backgroundHeight, diffHeight,
        i, $menu, currentSection, prevSection;

    //jquery elements 
    $scrolable = $(document);
    $sections = $(".section");
    $parralaxes = $(".parralax");

    $menu = $('#nav li a');

    currentSection = 0;

    //compte le nombre de sections
    sectionCount = $sections.length;
    //setter la hauteur
    sectionHeight = $sections.first().height(); //500 
    backgroundHeight = $sections.first().find(".parralax").height(); // 800

    diffHeight = backgroundHeight - sectionHeight; //800 - 500 = 300
    //console.log(sectionHeight, backgroundHeight, diffHeight);

    function scrollTo(item) {
        $('html, body').animate({
            scrollTop: $(item).offset().top
        }, 500);
    }


    //mettre a jour
    function update() {
        //prendre le scroll courant du document
        currentScroll = $scrolable.scrollTop();
        //console.log(currentScroll)

        //boucle dans les sections
        for (i = 0; i < sectionCount; i++) {
            //section courante
            section = $sections[i];
            //élément a animer
            parralax = $parralaxes[i];

            //prendre la distane de  l'élément par rapport à la fenetre du haut
            sectionOffset = $(section).offset().top;

            //console.log($(section).sectionOffset().top)
            //calculer la distance a scroller
            scroll = Math.round(((currentScroll - sectionOffset) / sectionHeight) * diffHeight); //sectionHeight;
            //get currentSection
            if (sectionOffset <= currentScroll + diffHeight) {
                currentSection = i;
            }
            //check if bottom
            if (currentScroll + $(window).height() == $(document).height()) {
                currentSection = sectionCount - 1;
            }

            //  ( ( 100 - 800 ) / 800 ) * 300

            /*if (i == 0) {
                //calculer combien on a scoller par rapport a cette section
                //console.log(currentScroll - sectionOffset)
                //on divise par la hauteur de la section
                //console.log((currentScroll - sectionOffset) / sectionHeight)
                //on multiplie par la hauteur de la différence avec le fond
                //console.log(((currentScroll - sectionOffset) / sectionHeight) * diffHeight)
                //console.log(currentScroll, sectionOffset, sectionHeight, diffHeight)
            }*/

            //console.log("sectionOffset : ", sectionOffset, scroll)
            //mettre à jour
            //$(parralax).css("background-position-y", scroll + "px");
            //$(parralax).css("currentScroll", scroll + "px");
            parralax.style.webkitTransform = "translate3d(0," + scroll + "px, 0)";
        };
        //on change
        if (currentSection != prevSection) {
            prevSection = currentSection;
            console.log(currentSection);

            $sections.removeClass("active");
            $($sections[currentSection]).addClass("active");

            var sectionId = $($sections[currentSection]).attr("id");

            $menu.removeClass("active");
            $("a[href='#" + sectionId + "']").addClass("active");

        }
    }

    (function loop() {
        requestAnimationFrame(loop);
        update();
    })();

    //scroller un élément
    //$scrolable.on("scroll", update);
    $(window).on("keydown", function(e) {
        //up
        if (e.keyCode == 38) {
            if (currentSection > 0) {
                currentSection--;
                $up = $($menu[currentSection]);
                $up.trigger("click");
            }
            return false;
        }
        //down
        if (e.keyCode == 40) {
            if (currentSection < $menu.length - 1) {
                currentSection++;
                $down = $($menu[currentSection]);
                $down.trigger("click");
            }
            return false;
        }

    })

    $menu.click(toggleMenuElement);

    function toggleMenuElement(event) {
        //event.preventDefault();
        //$menu.removeClass("active");
        //$(this).addClass("active");
        var item = $(this).attr('href');
        scrollTo(item);
        return false;
    }

})(jQuery);