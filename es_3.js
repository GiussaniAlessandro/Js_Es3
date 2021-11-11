
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
var array = new Array();
var i = 0;
var n1 = 0;
var n2 = 0;
var risultato = 0;
var segno = "";
for (var index = 0; index < array.length; index++) {
    var string =
            "<tr><td>" +
            localStorage.getItem('n1') +
            "</td><td style='text-align:center'>" +
            localStorage.getItem('segno') +
            "</td><td>" +
            localStorage.getItem('n2') +
            "</td><td>" +
            localStorage.getItem('risultato') +
            "</td></tr>";
            $("#tab").append(string); 
}
// var string =
// "<tr><td>" +
// localStorage.getItem('n1') +
// "</td><td style='text-align:center'>" +
// localStorage.getItem('segno') +
// "</td><td>" +
// localStorage.getItem('n2') +
// "</td><td>" +
// localStorage.getItem('risultato') +
// "</td></tr>";
// $("#tab").append(string);

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
        n1 = parseInt(input1.val());
        n2 = parseInt(input2.val());
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
localStorage.setItem('n1', n1);
localStorage.setItem('n2', n2);
localStorage.setItem('segno', segno);
localStorage.setItem('risultato', risultato);
array[i] = string(n1+";"+segno,n2,risultato);
localStorage.setItem('lenght',array.length);
i = i+1;
};