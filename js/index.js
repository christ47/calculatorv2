console.log("Hi welcome to my calculator");

  var caltype = prompt ("Would you like a Hard (H) or Regular (R) calculator");
    if (caltype === "R") {
      console.log("you want Regular");
      var typeOfOp = prompt ("What operation would you like to use (add, sub, times or divide)");
      var firstnumber = parseInt (prompt("What is your first number "));

      var secondnumber = parseInt (prompt ("What is your secondnumber"));
        if (typeOfOp == "add") {
          console.log ("your answer is", firstnumber + secondnumber);
        }
        else if (typeOfOp == "sub") {
          console.log ("your answer is", firstnumber - secondnumber);
        }
        else if (typeOfOp == "times") {
          console.log ("your answer is", firstnumber * secondnumber);
        }
        else if (typeOfOp == "divide") {

          console.log ("your answer is", firstnumber / secondnumber);
        }
      }

      else if (caltype == "H"){

        var sqorrt = prompt ("Would you like to Square a number or Square root?");

        var ans = parseInt(prompt ("what number would you like to use"));

        if (sqorrt == "Square") {
          console.log("your answer is", ans*ans);
        }
        else if (sqorrt == "Square root"){

          console.log (Math.pow(ans, 0.5));
        }
        else {
          console.log("Try again");
        }
      }
