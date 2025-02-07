// choices to select
let choices = document.querySelectorAll(".icon");

//rock, paper, scissor
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");



// winner message and score
let msg = document.querySelector(".winner-msg");
let compC = document.querySelector(".comp-choice");
let user_score = document.querySelector(".user-score");
let comp_score = document.querySelector(".comp-score");

//values of score;
let us = 0;
let cs = 0;

//play button
play = document.querySelector(".play");

// genereate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let choice = Math.floor(Math.random() * 3);
    let compChoice = document.getElementById(options[choice]);
    if(compChoice){
        compChoice.style.boxShadow = "2px 2px 20px red";
    }
    compC.innerHTML = `Computer chose ${options[choice]}`;
    return options[choice];
};

// functions for scoring and msg printing
const drawMatch = () => {
    msg.innerHTML = "Game was draw.";
    msg.style.color = "rgb(255, 174, 0)";
};

const compWinner = () => {
    cs++;
    msg.innerHTML = "Computer won this match :)";
    comp_score.innerHTML = `Computer : ${cs}`;
    msg.style.color = "red";
};

const userWinner = () => {
    us++;
    msg.innerHTML = "Yayy!! You won this match.";
    user_score.innerHTML = `You : ${us}`;
    msg.style.color = "green";

};

const playGame = (userChoice)=> {
    let compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawMatch();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "scissor" ? true : false;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "stone" ? false : true;
        }
        else{
            userwin = compChoice === "paper" ? true : false;
        }
        if(userwin === true) userWinner();
        else compWinner();
    }

};

let userChoice;
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        choice.style.boxShadow = "2px 2px 20px yellow";
    });
});

play.addEventListener("click", () => {
    rock.style.boxShadow = "2px 2px 10px black";
    paper.style.boxShadow = "2px 2px 10px black";
    scissor.style.boxShadow = "2px 2px 10px black";
    if(userChoice)playGame(userChoice);
    else msg.innerHTML = "Please select first!!";
});