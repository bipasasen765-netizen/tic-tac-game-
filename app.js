
let gameOver=false;
//score
let playerScore=0;
let machineScore=0; 
let drawScore=0;
let playerscoretext=document.getElementById("player-score");
let machinescoretext=document.getElementById("machine-score");
let drawscoretext=document.getElementById("draw-score");    

//test score ubdate for player
function checkscoreplayer(){
    playerScore++;
    playerscoretext.textContent="player: " +  playerScore;
}
// score ubdate for machine
function checkscoremachine(){
    machineScore++;
    machinescoretext.textContent="machine: " +  machineScore;
}
// score ubdate for draw
function checkscoredraw(){
    drawScore++;
    drawscoretext.textContent="draw: " +  drawScore;
}

let startBtn =
    document.getElementById("start-game");

let startScreen =
    document.getElementById("start-screen");

let gameBoard =
    document.getElementById("gameboard");
    let scoreboard=document.getElementsByClassName("scoreboard")[0];

startBtn.addEventListener("click", () => {

    let playerName =
        document.getElementById("player-name").value;

    if (playerName === "") {

        alert("Please enter your name");

        return;

    }
//start banner🤪🤪🤪
    startScreen.style.display = "none";

    gameBoard.style.display = "grid";
    scoreboard.style.display = "flex";

});

let winner=[
[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]
];
// <!-- checking --!>
function checkWinner() {
let winnerFound = false;
    for (let pattern of winner) {

        let a = cells[pattern[0]].textContent;

        let b = cells[pattern[1]].textContent;

        let c = cells[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {

            cells[pattern[0]].classList.add("win");
            cells[pattern[1]].classList.add("win");
            cells[pattern[2]].classList.add("win");

            showPopup(a);
             if (a === "X") {
        checkscoreplayer();
    }
    else if (a === "O") {
        checkscoremachine();
    }
            winnerFound = true;
            gameOver=true;
            return;
        }

    }
  //draw condition
  let isDraw = true;
  cells.forEach((cell) => {
    if (cell.textContent === "") {
      isDraw = false;
    }
  });
  if (isDraw && !winnerFound) {
    showPopup("Draw");
     checkscoredraw();
    gameOver = true;
  }

}





let cells=document.querySelectorAll('.cell');

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{

        if(cell.textContent === "" && !gameOver){

            cell.textContent="X";
            cell.classList.add("x");
            checkWinner();
     
            if(!gameOver){  

                machinmove();

                checkWinner();
}

}
})
})
//machin move
function machinmove(){
    let empty_cell=[];
    cells.forEach((cell)=>{
        if(cell.textContent===""){
            empty_cell.push(cell);
        }
    })
if(empty_cell.length>0){
  let rendom=  Math.floor(Math.random()*empty_cell.length);
empty_cell[rendom].textContent="O";
empty_cell[rendom].classList.add("o");
}


}

//show popup
function showPopup(winner){
    let popup=document.getElementById("popup");
    let text=document.getElementById("winner-message");
    let playerName=document.getElementById("player-name").value;
    if(winner==="X"){
        text.textContent=`${playerName} is the winner!🎉🎊`;
    } else if(winner==="O"){
        text.textContent=`Machine is the winner 🤖!`;
    }  
    else if(winner==="Draw"){
        text.textContent=`It's a draw!🤝`;
    } 
    popup.style.display = "flex";

}

let restartBtn=document.getElementById("restart");
restartBtn.addEventListener("click",()=>{
    cells.forEach((cell)=>{
        cell.textContent="";
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("win");
          
    });
    let popup=document.getElementById("popup");
    popup.style.display = "none";  
    gameOver=false;     
});
