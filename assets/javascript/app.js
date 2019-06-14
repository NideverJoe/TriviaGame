{/* <script type="text/javascript">
    $(document).ready(function(){
        $("input[type='button']").click(function(){
        	var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
                alert("Your are a - " + radioValue);
            }
        });
        
    });
</script>
</head> 
<body>
    <h4>Please select your gender.</h4>
    <p> 
        <label><input type="radio" name="gender" value="male">Male</label> 
        <label><input type="radio" name="gender" value="female">Female</label>
    </p>
    <p><input type="button" value="Get Value"></p>
</body>
</html>                             */}

var totalscore = 0;
var maxscore = 8;
var resultscore = 0;
var unanswered = 0;
var q1a = 0;
var q2a = 0;
var q3a = 0;
var q4a = 0;
var q5a = 0;
var q6a = 0;
var q7a = 0;
var q8a = 0;

function checkanswers() {
    q1a = $("input[name='q1a']:checked").val();
    console.log("Q1A = " + q1a);
    if (q1a == 2) {
        totalscore++;

    } else if (q1a == undefined) {
        unanswered++;
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q2a = $("input[name='q2a']:checked").val();
    console.log("Q2A = " + q2a);
    if (q2a == 1) {
        totalscore++
    } else if (q2a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q3a = $("input[name='q3a']:checked").val();
    console.log("Q3A = " + q3a);
    if (q3a == 2) {
        totalscore++
    } else if (q3a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q4a = $("input[name='q4a']:checked").val();
    console.log("Q4A = " + q4a);
    if (q4a == 1) {
        totalscore++
    } else if (q4a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q5a = $("input[name='q5a']:checked").val();
    console.log("Q5A = " + q5a);
    if (q5a == 2) {
        totalscore++
    } else if (q5a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q6a = $("input[name='q6a']:checked").val();
    console.log("Q6A = " + q6a);
    if (q6a == 2) {
        totalscore++
    } else if (q6a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q7a = $("input[name='q7a']:checked").val();
    console.log("Q7A = " + q7a);
    if (q7a == 3) {
        totalscore++
    } else if (q7a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

    q8a = $("input[name='q8a']:checked").val();
    console.log("Q8A = " + q8a);
    if (q8a == 2) {
        totalscore++
    } else if (q8a == undefined) {
        unanswered++
    } else { }

    console.log("Current Scores");
    console.log("Total Score = " + totalscore);
    console.log("Unanswered Total = " + unanswered);

}

function calculatescore() {
    resultscore = (totalscore / maxscore) * 100;
    //display result to appropriate DOM element
}

// .val.lenght 



function initaldivdisplay() {
    $('#initialscreen').show();
    $('#gamescreen').hide();
    $('#resultscreen').hide();
}

function gamestartdisplay() {
    //timer begins
    $("#timeremain").html(number);
    number=100;
    run();
    $('#initialscreen').hide();
    $('#gamescreen').show();
}

function resultsdisplay() {
    $('#gamescreen').hide();
    $('#resultscreen').show();
}

//button to start game
$("#startgamebtn").on("click", gamestartdisplay);

//button to restart game
$("#startagaingamebtn").on("click", resetgame);

function gameend() {
    checkanswers();
    calculatescore();
    $("#correcttotal").text(totalscore);
    $("#incorrecttotal").text(8 - totalscore);
    $("#unansweredtotal").text(unanswered);
    $("#percentage").text(resultscore);
    resultsdisplay();
}

function resetgame() {
    totalscore = 0;
    maxscore = 8;
    resultscore = 0;
    unanswered = 0;
    number = 100;
    q1a = 0;
    q2a = 0;
    q3a = 0;
    q4a = 0;
    q5a = 0;
    q6a = 0;
    q7a = 0;
    q8a = 0;
    initaldivdisplay();
}

//load page and start
initaldivdisplay();


//timer code
var number = 100;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    $("#timeremain").html(number);
    number--;
    if (number === 0) {
        gameend();
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
  }