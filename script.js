$(document).ready(function(){
   var words = ["scripted", "apple", "chen", "noah", "3.14"];
   var hints = ["The organization for which this program was made for", "Round, red fruit that is sweet", "Pretty good teacher", "Technolojesus", "Pi to the nearest hundredth"];
   var moreHints = ['Starts with the word "Script"', "Starts with the letter A", "Sometimes is called Kylo", "UA-Jesus", "Ends at 4"];
   var rand = Math.floor(Math.random()*words.length);
   var word = words[rand];
   var hint = hints[rand];
   $("#hint").html("Hint: " + hint);
   $("#guess").click(function(){
       console.log($("input").val());
      if($("#input").val().toLowerCase() === word)
      {
          $("#won").html("You guessed it!");
      }
      else
      {
        if(word.includes($("#input").val()) || $("#input").val().includes(word))
        {
            $("#moreHint").html("More hint: " + moreHints[rand] + "<br> that one was very close!");
        }
        else
          $("#moreHint").html("More hint: " + moreHints[rand]);
      }
   });
});