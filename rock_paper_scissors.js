let choice=["rock","paper","scissors"];
function getComputerChoice(){
    let n=Math.random();
    n=n*3;
    n=Math.floor(n);
    return choice[n];
}
function getPlayerChoice(){
    let choice=prompt("Please enter your option->");
    choice=choice.toLowerCase();
    if(choice==="rock"||choice==="paper"||choice==="scissors")
    {
        return choice;
    }
    else {
        alert("Wrong option Play Again");
        getPlayerChoice();
    }
}
function playGame(player,computer)
{
    let rounds=prompt("Enter the number of rounds to be played->");
    let i=1;
    let user=0;
    let comp=0;
    while(i<=rounds)
    {
        alert("Let The New Round Begin");
        let pChoice=player();
        let cChoice=computer();
        console.log(pChoice+" "+cChoice);
        if(pChoice===cChoice)
        {
            console.log("Draw each get one point");
            user++;
            comp++;
        }
        else if((pChoice==="rock" && cChoice==="scissors") || (pChoice==="scissors" && cChoice==="paper") || (pChoice==="paper" && cChoice==="rock"))
        {
            console.log("Player Wins this Round");
            user++;
        }
        else
        {
            console.log("Computer Wins this Round");
            comp++;
        }
        i++;
    }
    console.log("Game is Over and The Result is->");
    if(user==comp) console.log("Draw");
    else{
        let winner=(user>comp)?"Player Wins":"Computer Wins";
        console.log(winner);
    }
}

playGame(getPlayerChoice,getComputerChoice);