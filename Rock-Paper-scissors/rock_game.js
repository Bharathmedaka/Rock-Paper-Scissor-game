let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#move");
let userscorepara = document.querySelector("#userpara");
let compscorepara = document.querySelector("#comppara");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randindx = Math.floor(Math.random()*3);
    return options[randindx];
};

const playgame = (userchoice) => {
    console.log("userchoice is :",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice is :",compchoice);
    if (userchoice === compchoice){
        console.log("Game was Draw");
        msg.innerText = "Game was Draw";
        msg.style.backgroundColor = '#081b31';
        
    }
    else if (userchoice === "rock" && compchoice === "scissor"){
        console.log("You Win!");
        msg.innerText = "You Win!";
        userscore++;
        userscorepara.innerText = userscore;
        msg.style.backgroundColor = 'green';
        
    }
    else if (userchoice === "scissor" && compchoice === "paper"){
        console.log("You Win!");
        msg.innerText = "You Win!";
        userscore++;
        userscorepara.innerText = userscore;
        msg.style.backgroundColor = 'green';
        
    }
    else if (userchoice === "paper" && compchoice === "rock"){
        console.log("You Win!");
        msg.innerText = "You Win!";
        userscore++;
        userscorepara.innerText = userscore;
        msg.style.backgroundColor = 'green';
        
    }
    else{
        console.log("You Lose!");
        msg.innerText = "You Lose!";
        compscore++;
        compscorepara.innerText = compscore;
        msg.style.backgroundColor = 'red';
        
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
