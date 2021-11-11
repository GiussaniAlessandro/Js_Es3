
// $("#btn1").click();
//     var calculator= function(segno){
//     var input = parseInt($("#num1").val());
//     var input2 = parseInt($("#num2").val());

//     var risultato=input+input2;
//     var string=
//         "<tr><td>"  +
//         input  +
//         "</td><td style='text-align:center'>" +
//         "+" +
//         "</td><td>" +
//         input2  +
//         "</td><td>" +
//         risultato   +
//         "</td></tr>";
//    $("#tab").append(string);
//    input.val("");
//    input2.val("");
// };

// $("#btn2").click(function(){
//     var input = parseInt($("#num1").val());
//     var input2 = parseInt($("#num2").val());
//     var risultato=input-input2;
//     var string=
//         "<tr><td>"  +
//         input  +
//         "</td><td style='text-align:center'>" +
//         "-" +
//         "</td><td>" +
//         input2  +
//         "</td><td>" +
//         risultato   +
//         "</td></tr>";
//    $("#tab").append(string);
//    input.val("");
//    input2.val("");
// });

// $("#btn3").click(function(){
//     var input = parseInt($("#num1").val());
//     var input2 = parseInt($("#num2").val());
//     var risultato=input*input2;
//     var string=
//         "<tr><td>"  +
//         input  +
//         "</td><td style='text-align:center'>" +
//         "*" +
//         "</td><td>" +
//         input2  +
//         "</td><td>" +
//         risultato   +
//         "</td></tr>";
//    $("#tab").append(string);
//    input.val("");
//    input2.val("");
// });

// $("#btn4").click(function(){
//     var input = parseInt($("#num1").val());
//     var input2 = parseInt($("#num2").val());
//     var risultato=input/input2;
//     var string=
//         "<tr><td>"  +
//         input  +
//         "</td><td style='text-align:center'>" +
//         "/" +
//         "</td><td>" +
//         input2  +
//         "</td><td>" +
//         risultato   +
//         "</td></tr>";
//    $("#tab").append(string);
//    input.val("");
//    input2.val("");
// });

$("#btn1").click(function (){
    calculation("+");
});
$("#btn2").click(function (){
    calculation("-");
});
$("#btn3").click(function (){
    calculation("*");
});
$("#btn4").click(function (){
    calculation("/");
});
    var calculation=function(segno){
    var input1 = $("#num1");
    var input2 = $("#num2");
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if (input1.val() && input2.val()) {
      var n1 = parseInt(input1.val());
      var n2 = parseInt(input2.val());
    //   var risultato = n1 + n2;
      switch (segno){

          case "+":
              var risultato=n1 + n2;
              break;

          case "-":
              var risultato=n1 - n2;
              break;

          case "*":
              var risultato=n1 * n2;
              break;

          case "/":
              var risultato=n1 / n2;
              break;
      };
      var string =
        "<tr><td>" +
        n1 +
        "</td><td style='text-align:center'>" +
        segno +
        "</td><td>" +
        n2 +
        "</td><td>" +
        risultato +
        "</td></tr>";
      $("#tab").append(string);
      input1.val("");
      input2.val("");
    };
  };