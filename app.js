/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice = document.querySelector(".dice"),
    rollDiceBtn = document.querySelector(".btn-roll"),
    rollHoldBtn = document.querySelector(".btn-hold");
    newGameBtn = document.querySelector(".btn-new");

init();
function init() 
{
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    dice.style.display = "none";
}


var numOfDice ,
nameActive0 ,
nameActive1 ,
current0 ,
current1 ,
score0 ,
score1 ;

    rollDiceBtn.addEventListener("click" , x)
    function x()
    {
        numOfDice = Math.ceil(Math.random() * 6);
        nameActive0 = document.querySelector(".player-0-panel");
        nameActive1 = document.querySelector(".player-1-panel");
        current0 = Number(document.getElementById("current-0").textContent);
        current1 = Number(document.getElementById("current-1").textContent);
        score0 =  Number(document.getElementById("score-0").textContent) ;
        score1 =  Number(document.getElementById("score-1").textContent) ;
        dice.style.display = "inline";



        
        if(numOfDice == 1)
        {
            nameActive0.classList.toggle("active");
            nameActive1.classList.toggle("active");
            document.getElementById("current-0").textContent = 0;
            document.getElementById("current-1").textContent = 0;
            dice.style.display = "none";

        }
        else
        {
                if(nameActive0.classList.contains("active"))
                {
                    current0 += numOfDice ;
                    document.getElementById("current-0").textContent = current0;
                    // dice.style.display = "inline"
                    dice.src = "dice-"+numOfDice+".png"
                    // console.log(current0)

                }
                else
                {
                    current1 += numOfDice;
                    document.getElementById("current-1").textContent = current1;
                    dice.src = "dice-"+numOfDice+".png"
                    // console.log(current1)

                }
                
        }
    }


        rollHoldBtn.addEventListener("click" , function ()
        {

            if(nameActive0.classList.contains("active"))
                {

                        
                    
                    if(document.getElementById("current-0").textContent == 0)
                        {
                            current0 = 0;
                            score0 += current0;
                            document.getElementById("score-0").textContent = score0;
                            if(score0 >= 20)
                            {
                                isWinner();
                            }
                            else
                            {
                                nameActive0.classList.remove("active");
                                nameActive1.classList.add("active");
                                dice.style.display = "none"; 
                            }
                            
                        
                        }
                        else
                        {
                            document.getElementById("current-0").textContent = 0
                            score0 += current0;
                            document.getElementById("score-0").textContent = score0;
                            if(score0 >= 20)
                            {
                                isWinner();
                            }
                            else
                            {
                                nameActive0.classList.remove("active");
                                nameActive1.classList.add("active");
                                dice.style.display = "none"; 
                            }
                        
                        }
                }
                else
                {
                    if(document.getElementById("current-1").textContent == 0)
                        {
                            current1 = 0;
                            score1 += current1;
                            document.getElementById("score-1").textContent = score1;
                            if(score1 >= 20)
                            {
                                isWinner();
                            }
                            else
                            {
                                nameActive0.classList.add("active");
                                nameActive1.classList.remove("active");
                                dice.style.display = "none";
                            }
                        
                        }
                        else
                        {
                            document.getElementById("current-1").textContent = 0
                            score1 += current1;
                            document.getElementById("score-1").textContent = score1;
                            if(score1 >= 20)
                            {
                                isWinner();
                            }
                            else
                            {
                                nameActive0.classList.add("active");
                                nameActive1.classList.remove("active");
                                dice.style.display = "none";
                            }
                            
                        }
                    
                            
                        
                }



        })
        

    

function isWinner()
{

    if(nameActive0.classList.contains("active"))
    {
        document.getElementById("name-0").textContent = "WINNER";
        nameActive0.classList.add("winner");

    }
    else
    {
        document.getElementById("name-1").textContent = "WINNER";
        nameActive1.classList.add("winner");

    }
    dice.style.display = "none";
    if(nameActive0.classList.contains("winner") || nameActive1.classList.contains("winner"))
    {
        rollDiceBtn.removeEventListener("click" , x)
    }


}
newGameBtn.addEventListener("click" , function()
{

    init();
    rollDiceBtn.addEventListener("click" , x)

    if(nameActive0.classList.contains("active"))
    {

        document.getElementById("name-0").textContent = "Player 1";
        nameActive0.classList.remove("winner");

    }
    else
    {
        document.getElementById("name-1").textContent = "Player 2";
        nameActive1.classList.remove("winner");
        nameActive0.classList.add("active");
        nameActive1.classList.remove("active");

    }

})








