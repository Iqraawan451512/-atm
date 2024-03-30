#!/usr/bin/env node
import inquiier from "inquirer"
let myBalance = 10000;
let myPin =1234;
let pinAnswer = await inquiier.prompt([
    {
        name: "pin",
        type : "number",
        message :"enter Your Pin Code Please",
    }
])
// if else statement 
if (pinAnswer.pin === myPin){
    console.log ("Correct Pin code !!!");

// if staement goes right then it will run below statement
let operationAns = await inquiier.prompt([
    {
       name: "operation",
       message :"please select operation",
       type :"list",
       choices :["withdraw"  , "blancecheck","fastcash" ]
 }

])
// now this statement is for withdraw ammount
// we write withdraw in a cotation because its a  given choice
if (operationAns.operation === "withdraw"){
let amountAns = await inquiier.prompt([
    {
      name :"amount",
      type :"number",
      message :" please enter your amount here ",
    }
])
// for unsufficient Balance
if ( amountAns.amount> myBalance){
console.log("sorry!!!! unsufficient Balance");
}

else{
myBalance -= amountAns.ammount;
console.log(`${amountAns.amount} Withdraw Successfully`);
}

}// balance check
 else if(operationAns.operation === "blancecheck")
console.log(`your blance is ${myBalance}`);
// fast cash
else if (operationAns.operation==="fastcash"){
    let digitalAmount=await inquiier.prompt([
        {
            name:"amountInDigit",
            type:"list",
            message:"howmuch amount you want to withdraw",
            choices:["2000","4000","6000","8000","10000"]

        },
    
    ]);
    //remaining balance
    myBalance -= digitalAmount.amountInDigit;
console.log("your remaining balance is " + myBalance);


}
}
else{
    console.log (" sorry !!!!Please enter your right pin nunmber");
}
    
    