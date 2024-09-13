let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score1=document.querySelector("#my-score");
const score2=document.querySelector("#comp-score");
const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    console.log('you win');
    msg.innerText=`You win😁 Your ${userChoice} beats ${compChoice}`;
    userScore++;
    score1.innerText=`${userScore}`;
}
else{
    console.log('computer win');
    msg.innerText=`You lose☹️ ${compChoice} beats your ${userChoice}`;
    compScore++;
    score2.innerText=`${compScore}`;
}
};

const drawGame=()=>{
    console.log("its a draw");
    msg.innerText="It's a draw😦";
};
const playGame=(userChoice)=>{
// generate computer choice
const compChoice=genCompChoice();
console.log("Computer has generated:",compChoice);
if(userChoice===compChoice){
   drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else {
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
console.log("choice clicked:",userChoice);
playGame(userChoice);
    });
});