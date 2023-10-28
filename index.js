var randomNumber1, randomNumber2, randomImage1, randomImage2;
    var score1 = 0;
    var score2 = 0;
    var pass = 0;
    var drawTotal = 0;

    var player1Name = prompt("Enter player 1 Name: ");
    var player2Name = prompt("Enter player 2 Name: ");
    if(player1Name.length>0){
        document.querySelector("#player1").innerHTML = player1Name.slice(0, 1).toUpperCase() + player1Name.slice(1).toLowerCase();
    }
    if(player2Name.length>0){
        document.querySelector("#player2").innerHTML = player2Name.slice(0, 1).toUpperCase() + player2Name.slice(1).toLowerCase();
    }

    function updateScores() {
        randomNumber1 = Math.ceil(Math.random() * 6);
        randomNumber2 = Math.ceil(Math.random() * 6);
        randomImage1 = "img" + randomNumber1 + ".png";
        randomImage2 = "img" + randomNumber2 + ".png";

        document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
        document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

        var heading = document.querySelector(".heading");
        if (randomNumber1 > randomNumber2) {
            heading.innerHTML = "🚩 Player 1 Wins";
            score1 += 1;
            document.getElementById("score1").textContent = score1;
        } else if (randomNumber1 < randomNumber2) {
            heading.innerHTML = "Player 2 Wins 🚩";
            score2 += 1;
            document.getElementById("score2").textContent = score2;
        } else {
            drawTotal+=1;
            document.querySelector("#draw").textContent = drawTotal;
            heading.innerHTML = "Draw!";
        }
        pass+=1;
        document.getElementById("pass").innerHTML = pass;
    }
    document.querySelector(".button1").addEventListener("click", function () {
        updateScores();
    });
    document.querySelector(".button2").addEventListener("click", function () {
        location.reload();
    });
    
