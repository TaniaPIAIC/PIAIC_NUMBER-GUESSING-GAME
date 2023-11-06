import inquirer from "inquirer";

type ansType = {
  userGuess:number  
}

const systemGeneratedNo=Math.floor(Math.random() * 10);

const answers : ansType = await inquirer.prompt([
{
    type:"number",
    name:"userGuess",
    message:"Write your guess b/w 1 to 10:"
}
])

const {userGuess} =answers;
if(userGuess === systemGeneratedNo){
    console.log(userGuess,"userGuess",systemGeneratedNo,"systemGeneratedNo")
    console.log("Yeaaa Your answer is correct \n You win!")
}else{
    console.log("Please try again Better luck next time!")
}
