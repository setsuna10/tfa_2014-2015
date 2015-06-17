$( document ).ready(function() {
	var heart = Snap.select('#iconcoeur');
    var heartStroke = heart.select('.heart_stroke');
    var list = Snap.select('#iconlist');
    var listStroke = list.selectAll('path');
    var search = Snap.select('#iconsearch');
    var searchStroke = search.selectAll('path');
    var home = Snap.select('#iconhome');
    var homeStroke = home.selectAll('path');
    var like = Snap.select('#iconlike');
    var likeStroke = like.select('path');
    var trash = Snap.select('#icontrash');
    var trashStroke = trash.select('path:nth-child(2)');
    $('#favoris li').each(function(){
        $(this).append('<div><button>Préparation</button> <button>Ajouter à la liste</button> <button>Supprimer</button> </div>');
    });
    $('#favoris li').click(function(){
        var recupselect= $(this).children('div');
        $(recupselect).slideToggle(400);
    });
    $( '#iconcoeur' ).click(function() {
        $("#favoris").toggleClass("open-from-top");
        if ($("#favoris").is('.open-from-top')) {     
            heartStroke.animate(
                { fill: '#fff' }, 300, mina.easein); 
        } else {
            heartStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein);
        };
    });
    $( '#iconlist' ).click(function() {
        $("#liste").toggleClass("open-from-top");
        if ($("#liste").is('.open-from-top')) {     
            listStroke.animate(
                { fill: '#fff' }, 300, mina.easein); 
        } else {
            listStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein);
        };
    });
    $( '#iconhome' ).click(function() {
    	$("#favoris, #liste, #recherche").removeClass("open-from-top");   	
    });
    $( '#iconcoeur' ).click(function() {
        $("#liste").removeClass("open-from-top");     
    });
    $( '#iconlist' ).click(function() {
        $("#favoris").removeClass("open-from-top");     
    });

    $( '#iconfiltre' ).click(function() {
        $("#filtres").addClass("open-from-right");     
    });
    $( '#goto' ).click(function() {
        $("#recette").addClass("scale-recipe");     
    });
    $( '#return' ).click(function() {
        $("#filtres").removeClass("open-from-right");     
    });
    $( '#return-recette' ).click(function() {
        $("#recette").removeClass("scale-recipe");     
    });
    $( '#iconlike' ).click(function() {
        $("#overview").toggleClass("liked");
        if (!$("#overview").is('.liked')) {     
            likeStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein); 
        } else {
            likeStroke.animate(
                { fill: '#FF739B' }, 300, mina.easein);
        };
    });
    $( '#icontrash' ).click(function() {  
        $("#overview").toggleClass("trashed");
        if (!$("#overview").is('.trashed')) {     
            trashStroke.animate(
                { transform: 't0 0'}, 600, mina.elastic); 
        } else {
            trashStroke.animate(
                { transform: 't0 -8'}, 600, mina.elastic);
        }   
    });
});