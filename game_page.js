player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

p1score = 0;
 p2score = 0;

document.getElementById("p1").innerHTML = player1 + ":";
document.getElementById("p2").innerHTML = player2 + ":";
 
document.getElementById("p1score").innerHTML = p1score;
document.getElementById("p2score").innerHTML = p2score;

document.getElementById("qt").innerHTML = "Question turn: " + player1;
document.getElementById("at").innerHTML = "Answer turn: " + player2;

function send(){
    getword = document.getElementById("word").value ;
    word = getword.toLowerCase();
    p1 = word.charAt(1);
    len = Math.floor(word.length/2);
    p2 = word.charAt(len);
    min = word.length-1;
    p3 = word.charAt(min);

    r1 = word.replace(p1, "_");
    r2 = r1.replace(p2, "_");
    r3 = r2.replace(p3, "_");


    q1 = "<h4 id = 'word1'>Q."+r3+"</h4>";
    a1 = "<br> answer: <input id='a' type = 'text'>";
    b1 = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    ro = q1 + a1 + b1;
    document.getElementById("output").innerHTML = ro;
    document.getElementById("word").value = "";
}

qturn = "player1";
aturn = "player2";

function check(){
    get_ans = document.getElementById("a").value;
    ans = get_ans.toLowerCase();
    
    if(ans == word){
        if(aturn == "player1"){
        p1score = p1score + 1;
    document.getElementById("p1score").innerHTML = p1score;  
    
    } 
    else{
        p2score = p2score + 1;
        document.getElementById("p2score").innerHTML = p2score;
    }
        }

        if(qturn == "player1"){
            qturn = "player2";
            document.getElementById("qt").innerHTML = "Question turn: " + player2;
        }
        else{
            qturn = "player1";
            document.getElementById("qt").innerHTML = "Question turn: " + player1;
        }

        if(aturn == "player1"){
            aturn = "player2";
            document.getElementById("at").innerHTML = "Answer turn: " + player2;
        }
        else{
            aturn = "player1";
            document.getElementById("at").innerHTML = "Answer turn: " + player1;
        }
        document.getElementById("a").value = "";
    }
