// jquery logic functionality 

$(document).ready(function(){

	var player = 'X';

     $('.sqr').on('click', function(event){

           var sqrSelected =$(this);

           if (sqrSelected.hasClass('x') || sqrSelected.hasClass('o')) {

           }else{

           	    if (player == 'X') {

           	    	sqrSelected.addClass('x');

           	    	if (playerWon('x')) {
 
           	    		 alert('Player ' +player+ ' has won!');
           	    		 window.location.reload(true);

           	    	} else{

           	    		player='O';
           	    	}

           	    }else{

           	    	sqrSelected.addClass('o');

           	    	if (playerWon('o')) {
 
           	    		 alert('Player ' +player+ ' has won!');
           	    		 window.location.reload(true);

           	    	} else{

           	    		player='X';
           	    	}
           	    }

           }
         
     });

         function playerWon(symbol){

       if ($('.div1').hasClass(symbol) && $('.div2').hasClass(symbol) && $('.div3').hasClass(symbol)) {
                   return true;
       }else if($('.div4').hasClass(symbol) && $('.div5').hasClass(symbol) && $('.div6').hasClass(symbol)){
          return true;
       }else if($('.div7').hasClass(symbol) && $('.div8').hasClass(symbol) && $('.div9').hasClass(symbol)){
          return true;
       }else if($('.div2').hasClass(symbol) && $('.div5').hasClass(symbol) && $('.div8').hasClass(symbol)){
       	  return true;
       }else if($('.div3').hasClass(symbol) && $('.div6').hasClass(symbol) && $('.div9').hasClass(symbol)){
          return true;
       }else if($('.div1').hasClass(symbol) && $('.div5').hasClass(symbol) && $('.div9').hasClass(symbol)){
       	  return true;
       }else if($('.div3').hasClass(symbol) && $('.div5').hasClass(symbol) && $('.div7').hasClass(symbol)){
       	  return true;
       }else{
       	  return false;
       }
     }


});