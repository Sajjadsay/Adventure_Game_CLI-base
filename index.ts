import inquirer from "inquirer";

let score : number = 0;
let condition : boolean = true;
console.log('              -:( Welcome to "X PRESS" adventure game! ):-');
async function getstart(){
    do{
        let adventure : string[] = ["active","arriving sooner","tired"];
        let index : number = Math.floor(Math.random()*3);
        let myplayer = await inquirer.prompt(
            {
                type : "list",
                name : "choice",
                choices : ["Hidden","Active","Disabled"]
            }
        )
        if(adventure[index] === adventure[0]){
    
            if(myplayer.choice === "Hidden"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You can escape and get safeted.");
                score ++;
            }    
            else if(myplayer.choice === "Active"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("<<Game Lost>>\nYou are fired...");
                condition = false;
            }    
            else if(myplayer.choice === "Disabled"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You lost the game!");
                condition = false;
            }    
        }
        else if(adventure[index] === adventure[2]){
    
            if(myplayer.choice === "Hidden"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You can escape and get safeted.");
                score ++;
            }
            else if(myplayer.choice === "Active"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You can escape and get safeted.");
                score ++;
            } 
            else if(myplayer.choice === "Disabled"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You lost the game!");
                condition = false;
            }    
        }
        else{
            if(myplayer.choice === "Active"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You can escape and get safeted.");
                score ++;
            }    
            else if(myplayer.choice === "Hidden"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("<<Game Lost>>\nThe dragon arrived...");
                condition = false;
            }    
            else if(myplayer.choice === "Disabled"){
                console.log("The DRAGON is <<",adventure[index],">>");
                console.log("You lost the game!");
                condition = false;
            }
        }
    }
    while(condition);
    
    console.log("Please wait,your score is ready to display now...");
    setTimeout(() => {
        console.clear();
        console.log("Your getting score is :",score);
        console.log("Try again **BETTER**");
    }, 2000);
}
getstart();