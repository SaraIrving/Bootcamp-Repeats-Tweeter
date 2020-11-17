//check it's loaded into the index.html
//console.log("It loaded!")


//$(document).ready runs a callback when the DOM is ready to be manipulated with jQuery.
$(document).ready(function() {
  // test this code is running after all html is loaded
  //console.log("DOM is all loaded up!");
  
  // track how many characters are being typed in the Textarea tag
  //remember not to use arrow functions as they do not bind the context of this

 $("#tweet-text").keyup(function() {
   
   const inputLength = $(this).val().length;

   const maxLength = 140;

   //find the counter but going up the DOM to it's parent and then searching what it holds
   const counter = $(this).parent().find(".counter");

  //  //if it's longer than 140, turn the counter red
  //  //if it's less than or equal to 140 keep it grey
   inputLength > maxLength ? $(counter).css("color", "red") : $(counter).css("color", "#545149");

 });

});