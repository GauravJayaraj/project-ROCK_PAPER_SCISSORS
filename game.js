function playRound(playerSelection, computerSelection) {
    // your code here!

    if(playerSelection==computerSelection)
    {
        console.log('Draw');
        return 0;
    }

    if(playerSelection == 'scissor'){
        if(computerSelection == 'paper')
        {
            console.log('player wins')
            return 1;
        }    
        else   
        {
            console.log('computer wins')
            return 2;
        }    
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'rock')
        {
            console.log('player wins')
            return 1;
        }    
        else   
        {
            console.log('computer wins')
            return 2;
        }
    }
    else{
        if(computerSelection == 'rock')
        {
            console.log('player wins')
            return 1;
        }    
        else   
        {
            console.log('computer wins')
            return 2;
        }
    }
}


function computerPlay(){
    const choices= ['scissor', 'paper', 'rock'];

    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}


function game(){
    let wins;
    let pcount=0;
    let ccount=0;

    console.log("ROUND 1");
    let playerSelection = prompt("Enter your pick rock/paper/scissor").toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection)
    wins = playRound(playerSelection, computerSelection)
    if(wins==1)
        pcount+=1;
    else if(wins==2)
        ccount+=1;

    console.log("ROUND 2");
    playerSelection = prompt("Enter your pick rock/paper/scissor")
    computerSelection = computerPlay();
    console.log(computerSelection)
    wins = playRound(playerSelection, computerSelection);
    if(wins==1)
        pcount+=1;
    else if(wins==2)
        ccount+=1;



    console.log("ROUND 3");
    playerSelection = prompt("Enter your pick rock/paper/scissor")
    computerSelection = computerPlay();
    console.log(computerSelection)
    wins = playRound(playerSelection, computerSelection);
    if(wins==1)
        pcount+=1;
    else if(wins==2)
        ccount+=1;
    
    
    console.log("ROUND 4");
    playerSelection = prompt("Enter your pick rock/paper/scissor")
    computerSelection = computerPlay();
    console.log(computerSelection)
    wins = playRound(playerSelection, computerSelection);
    if(wins==1)
        pcount+=1;
    else if(wins==2)
        ccount+=1;


    console.log("ROUND 5");
    playerSelection = prompt("Enter your pick rock/paper/scissor")
    computerSelection = computerPlay();
    console.log(computerSelection);
    wins = playRound(playerSelection, computerSelection);
    if(wins==1)
        pcount+=1;
    else if(wins==2)
        ccount+=1;


    console.log("GAME OVER");

    console.log("SCORE: \nplayer:",+pcount+"\tcomputer:"+ccount);
    if(pcount>ccount)
        console.log('Player WINSSSS');
    else if(pcount==ccount)
        console.log('DRAAWWWWWWW');
    else
        console.log('COMPUTER WINSSSS');

}



