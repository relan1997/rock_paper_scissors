let choice=["rock","paper","scissors"];
function getComputerChoice(){
    let n=Math.random();
    n=n*3;
    n=Math.floor(n);
    return choice[n];
}
// function getPlayerChoice(){
//     let choice=prompt("Please enter your option->");
//     choice=choice.toLowerCase();
//     if(choice==="rock"||choice==="paper"||choice==="scissors")
//     {
//         return choice;
//     }
//     else {
//         alert("Wrong option Play Again");
//         getPlayerChoice();
//     }
// }
// function playGame(player,computer)
// {
//     let rounds=prompt("Enter the number of rounds to be played->");
//     let i=1;
//     let user=0;
//     let comp=0;
//     while(i<=rounds)
//     {
//         alert("Let The New Round Begin");
//         let pChoice=player();
//         let cChoice=computer();
//         console.log(pChoice+" "+cChoice);
//         if(pChoice===cChoice)
//         {
//             console.log("Draw each get one point");
//             user++;
//             comp++;
//         }
//         else if((pChoice==="rock" && cChoice==="scissors") || (pChoice==="scissors" && cChoice==="paper") || (pChoice==="paper" && cChoice==="rock"))
//         {
//             console.log("Player Wins this Round");
//             user++;
//         }
//         else
//         {
//             console.log("Computer Wins this Round");
//             comp++;
//         }
//         i++;
//     }
//     console.log("Game is Over and The Result is->");
//     if(user==comp) console.log("Draw");
//     else{
//         let winner=(user>comp)?"Player Wins":"Computer Wins";
//         console.log(winner);
//     }
// }

// playGame(getPlayerChoice,getComputerChoice);
const emoji={
    "rock":'🪨',
    "paper":'📃',
    "scissors":'✂️'
};
let emo_user=document.getElementsByClassName("emoji")[0];
let emo_comp=document.getElementsByClassName("emoji")[1];
let p_txt=document.getElementsByClassName("playerChoice")[0];
let c_txt=document.getElementsByClassName("computerChoice")[0];
let user_pts=document.getElementsByClassName("user")[0];
let comp_pts=document.getElementsByClassName("comp")[0];
let btns=document.querySelectorAll("button");
let winner=document.getElementsByClassName("winner")[0];
let user=0;
let comp=0;

function playGame(pChoice,cChoice)
{
    if(pChoice===cChoice)
        {
            // console.log("Draw each get one point");
            user++;
            comp++;
        }
        else if((pChoice==="rock" && cChoice==="scissors") || (pChoice==="scissors" && cChoice==="paper") || (pChoice==="paper" && cChoice==="rock"))
        {
            // console.log("Player Wins this Round");
            user++;
        }
        else
        {
            // console.log("Computer Wins this Round");
            comp++;
        }
}

btns.forEach((button)=>{
    button.addEventListener("click",()=>{
    let playerChoice=button.value;
    let computerChoice=getComputerChoice();
    if(user==0 && comp==0){
        winner.innerHTML="";
        user_pts.innerHTML="";
        comp_pts.innerHTML="";
        p_txt.innerHTML="USER:";
        c_txt.innerHTML="COMP:";
        }
    p_txt.innerHTML+=`${emoji[playerChoice]} `;
    c_txt.innerHTML+=`${emoji[computerChoice]} `;
    emo_user.innerHTML=`${emoji[playerChoice]}`;
    emo_comp.innerHTML=`${emoji[computerChoice]}`;
    if(user!=5 && comp!=5){
    playGame(playerChoice,computerChoice);
    user_pts.innerHTML=`User Points->${user}`;
    comp_pts.innerHTML=`Computer Points->${comp}`;
    }
    if(user==5 && comp==5)
    {
        winner.innerHTML="It's A Draw";
        console.log(`h1->value->${winner.innerHTML}`);
        user=0;
        comp=0;
    }
    else if(user==5)
    {
        winner.innerHTML="Player Wins";
        console.log(`h1->value->${winner.innerHTML}`);
        user=0;
        comp=0;
    }
    else if(comp==5)
    {
        winner.innerHTML="Computer Wins";
        console.log(`h1->value->${winner.innerHTML}`);
        user=0;
        comp=0;
    }
}); 
});
