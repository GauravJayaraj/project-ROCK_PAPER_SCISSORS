
let playerSelection,computerSelection;
let playerScore=0;
let computerScore=0;


const result = document.querySelector(".result");

const pscore = document.querySelector("#pscore");
const cscore = document.querySelector("#cscore");

const start = document.querySelector('.start');


function playRound(playerSelection, computerSelection){
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


const playerInputs = document.querySelectorAll('.choice');

// GAME START
playerInputs.forEach(
    (input)=>{
        input.addEventListener('click',(event)=>{
            playerSelection = input.id;

            computerSelection = computerPlay();

            const wins = playRound(playerSelection,computerSelection);

            if(wins==1){
                playerScore+=1;

                result.innerText = 'player won';

                let pstr = pscore.innerText;
                pstr = pstr.substr(0,7);
                pstr += playerScore;

                pscore.innerText = pstr;
            }
                
            else if(wins==2){
                computerScore+=1;

                result.innerText = 'computer won';

                let cstr = cscore.innerText;
                cstr = cstr.substr(0,9);
                cstr += computerScore;

                cscore.innerText = cstr;
            }
            else
                result.innerText='tie';


            if(playerScore==5)
                gameover(1);
            
            if(computerScore==5)
                gameover(0);

            event.stopPropagation();  // so click not accounted for parent
        })
    }
)


function gameover(winner){
    
    const select = document.querySelector('.select');

    

    if(winner){
        result.innerText = 'Player won';
    }
    else{
        result.innerText = 'Computer won';
    }



    const restart = document.createElement('button');
    restart.innerText = 'restart';
    
    restart.onclick = ()=>{
        location.reload();
    }

    start.appendChild(restart);
    
}
