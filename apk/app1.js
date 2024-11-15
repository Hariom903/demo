let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".btn");
let turn = true;
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

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkwiner();
    });
});

const checkwiner = () => {
    for (let pattern of winPatterns) { // Use 'let' here for proper scoping
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        // Check if all three positions have the same value and are not empty
        if (pos1val && pos1val === pos2val && pos1val === pos3val) {
            console.log(`Winner: ${pos1val}`);
            // Here you might want to add additional code to handle the win (like disabling further clicks)
            return; // Exit the function after finding a winner
        }
    }
};
