// jquery logic functionality 

$(document).ready(function(){

	var player = 'X';

     $('.sqr').on('click', function(event){

           var sqrSelected =$(this);

           if (sqrSelected.hasClass('fa fa-times') || sqrSelected.hasClass('fa fa-circle-o')) {

           }else{

           	    if (player == 'X') {

           	    	sqrSelected.addClass('fa fa-times');

           	    	if (playerWon('fa fa-times')) {
                         saveResult(player);
           	    		 alert('Player ' +player+ ' has won!');           	    		
           	    		 window.location.reload(true);

           	    	} else{

           	    		player='O';
           	    	}

           	    }else{

           	    	sqrSelected.addClass('fa fa-circle-o');

           	    	if (playerWon('fa fa-circle-o')) {
                         saveResult(player);
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
       }else if($('.div1').hasClass(symbol) && $('.div4').hasClass(symbol) && $('.div7').hasClass(symbol)){
       	  return true;
       }else{
       	return false;
       }
     }

     function saveResult(player){
       
     	$.ajax({
		method: 'POST',
		dataType:'json',
		url: 'http://localhost/tictactoe/store', 
		data: ({winner:player}),
		async:true,
		success: function(response){
		console.log(data);
		}
		});
     	 
     }

});