let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset_btn");
let new_game = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg_container");
let msg1= document.querySelector("#msg");




let turn0 = true;//playerX, playerO


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turn0){
            //player0
            box.innerText ="0";
            turn0 = false;

        }else{
            //playerX
            box.innerText ="X";
            turn0 = true;

        }
        box.Disabled =true;
        checkwinner();

    });
    

});

const resetGame =() =>{
    turn0 =true;
    enableBoxes();
    msgcontainer.classList.add("hide");


};

const DisableBoxes =()=>{
    for(let box of boxes){
        box.Disabled =true;

    }

};

const enableBoxes =()=>{
    for(let box of boxes){
        box.Disabled =false;
        box.innerText ="";


    }

};

const showWinner =(winner) =>{
    msg1.innerText ='Congratulation,winner is ${winner}';
    msgcontainer.classList.remove("hide");
    Disabled();




}

const checkwinner =() =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);


          let positonvalue1  =boxes[pattern[0]].innerText;
          let positonvalue2 =boxes[pattern[1]].innerText;
          let positonvalue3 =boxes[pattern[2]].innerText;

          if(positonvalue1 != "" && positonvalue2 != "" && positonvalue3){

            if(positonvalue1 === positonvalue2 && positonvalue2 === positonvalue3){

                console.log("Winner",positonvalue1);

                showWinner(positonvalue1);

                
            }
          }
    }

} ;



new_game.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);