let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn0 = true; //playerX ,palyerO
let newGameBtn = document.querySelector("#newset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0; //To Track draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    true0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clicked");
        if (turn0) {  //turn O
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw. `;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                //  console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);