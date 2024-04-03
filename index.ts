import inquirer from "inquirer";
let myPin = 12345;
let myBalance = 25000;

let pinAnswer = await inquirer.prompt(
    {message:"Please enter your pincode",
    type:"number",
    name:"pincode",
    }
)
if (pinAnswer.pincode === myPin){

    console.log("your pincode is correct")
    let operatorAnswer = await inquirer.prompt(
        {message:"Select an operator.",
        type:"list",
        name:"operator",
        choices:["withdraw","fast cash","check bal"],
        }
    
    )
 
  if (operatorAnswer.operator === "check bal"){
    console.log(`Your current bal is ${myBalance}`)
  }
  else if (operatorAnswer.operator === "withdraw"){
    let amountAnswer = await inquirer.prompt(
        {message:"Enter your amount",
        type:"number",
        name:"amount",
        }
    ); console.log(`Your amount balance is ${myBalance-=amountAnswer.amount}`)
}else if (operatorAnswer.operator === "fast cash"){
    let fastcashAns = await inquirer.prompt(
        [
        {message:"Select your amount",
        type:"list",
        name:"fastcash",
        choices:[1000,2000,5000,10000]
        }
    ]
    );
    console.log(`Your remaining balance is ${myBalance-=fastcashAns.fastcash}`)
}
} else {
    console.log("Your pincode is incorrect")};