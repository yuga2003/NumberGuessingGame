

// console.log(a);

var abc = document.getElementById("Guess");
var rrr = Math.floor(Math.random() * 10);
console.log("Computer Guess:" + rrr);
var count=0;
var ac=document.getElementById("ved");

function yug() {
    if(count<5){
        var a = prompt("Guess any no. between 1 to 10");
        console.log("user Guess:" + a);
        abc.innerHTML = a;
        count++;
        console.log("count:"+count);
        result(a);
        ac.innerHTML=count;
    }else{
        alert("Your chances is over");
    }
    
}
function result(a) {
    var xyz = document.getElementById("Result");
    var sug = document.getElementById("sug");

    if (a == rrr) {
        xyz.innerHTML = "Win";
        console.log("Win");
        sug.innerHTML = "Congratulation"

    } else {
        xyz.innerHTML = "Loss";

        if (a > rrr) {
            sug.innerHTML = "Your Guess is High"
        } else {
            sug.innerHTML = "Your Guess is Low"
        }
        console.log("Loss");
    }


}