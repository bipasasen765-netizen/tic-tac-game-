
let gameOver=false;

let startBtn =
    document.getElementById("start-game");

let startScreen =
    document.getElementById("start-screen");

let gameBoard =
    document.getElementById("gameboard");

startBtn.addEventListener("click", () => {

    let playerName =
        document.getElementById("player-name").value;

    if (playerName === "") {

        alert("Please enter your name");

        return;

    }

    startScreen.style.display = "none";

    gameBoard.style.display = "grid";

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

            showPopup(a);
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
    gameOver = true;
  }

}





let cells=document.querySelectorAll('.cell');

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{

        if(cell.textContent === "" && !gameOver){

            cell.textContent="X";

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
    });
    let popup=document.getElementById("popup");
    popup.style.display = "none";  
    gameOver=false;     
});
