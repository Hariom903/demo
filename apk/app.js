let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let win =document.querySelector(".win");
let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let a=prompt("Enter fast player");
let b=prompt("Enter the second player");
 player1.innerText=a;
 player2.innerText=b;
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
        }
        else {

            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkwiner();
    });
});
const checkwiner = () => {
    for (let pattern of winPatterns) {

        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;



        if (pos1val != "" && pos2val != "" && pos3val != "")
             {
                if (pos1val === pos2val && pos2val === pos3val) {
                    if(pos1val=="X")
                    {
                        win.innerText=` winerr is : ${a}`;
                        // boxs.disabled;
                       setTimeout(()=>{
                        window.location.reload(boxs.disabled)
                       },3000)
                    }
                 else{
                    win.innerText=` winerr is :${b}`; 
                    boxs.disabled;
                 }
            
                  
                 }
            }
    }
} 
resetbtn.addEventListener("click",()=>{
    console.log("hello");
    window.location.reload;

    
})