
$("#btn1").click(function(){
    var input = parseInt($("#num1").val());
    var input2 = parseInt($("#num2").val());
    var risultato=input+input2;
    var string=
        "<tr><td>"  +
        input  +
        "</td><td style='text-align:center'>" +
        "+" +
        "</td><td>" +
        input2  +
        "</td><td>" +
        risultato   +
        "</td></tr>";
   $("#tab").append(string);
});

$("#btn2").click(function(){
    var input = parseInt($("#num1").val());
    var input2 = parseInt($("#num2").val());
    var risultato=input-input2;
    var string=
        "<tr><td>"  +
        input  +
        "</td><td style='text-align:center'>" +
        "-" +
        "</td><td>" +
        input2  +
        "</td><td>" +
        risultato   +
        "</td></tr>";
   $("#tab").append(string);
});

$("#btn3").click(function(){
    var input = parseInt($("#num1").val());
    var input2 = parseInt($("#num2").val());
    var risultato=input*input2;
    var string=
        "<tr><td>"  +
        input  +
        "</td><td style='text-align:center'>" +
        "*" +
        "</td><td>" +
        input2  +
        "</td><td>" +
        risultato   +
        "</td></tr>";
   $("#tab").append(string);
});

$("#btn4").click(function(){
    var input = parseInt($("#num1").val());
    var input2 = parseInt($("#num2").val());
    var risultato=input/input2;
    var string=
        "<tr><td>"  +
        input  +
        "</td><td style='text-align:center'>" +
        "/" +
        "</td><td>" +
        input2  +
        "</td><td>" +
        risultato   +
        "</td></tr>";
   $("#tab").append(string);
});