function myFunction(elmnt,fn) {
             elmnt.style.visibility = fn;
           }
		  
$(document).ready(function(){
           $("#shop").click(function(){
		   
           $(".contained").slideDown("slow");
		   $(".intro").slideUp("slow");
		  
          });
      });		  

	  
$(document).ready(function(){
        $("#but").click(function(){
		  var q1,q2,q3,q4;
		   q1=document.getElementById("qty1").value;
		   q2=document.getElementById("qty2").value;
		   q3=document.getElementById("qty4").value;
		   q4=document.getElementById("qty5").value;
		   if(q1 != 0 | q2 != 0 | q3 != 0 | q4 != 0)
		   {
            $(".info").slideDown("slow");
		    $(".contained").slideUp("slow");
		   }
		   else
		   {
			   alert("Fill in the Details");
		   }
		   
      });
     });	  
	  

	  
$(document).ready(function(){
           $("#but1").click(function(){
		   $(".info").slideUp();
		   $(".contained").slideDown("slow");
           
          });
      });
	  
$(document).ready(function(){
           $("#r1").click(function(){
           $(".info1").slideDown("slow");
          });
      });
	  
$(document).ready(function(){
           $("#r2").click(function(){
           $(".info1").slideUp("slow");
          });
      });
	 