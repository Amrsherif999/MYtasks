var PlayerOneChoice = "Rock";
var PlayerTwoChoice =  "Paper";

if(PlayerOneChoice=="Paper" && PlayerTwoChoice=="Rock"){
    console.log("Player One wins");
}else if(PlayerOneChoice=="Rock" && PlayerTwoChoice=="Paper"){
    console.log("Player Two wins");
}else if(PlayerOneChoice=="Rock" && PlayerTwoChoice=="Scissors"){
    console.log("Player One wins");
}else if(PlayerOneChoice=="Scissors" && PlayerTwoChoice=="Rock"){
    console.log("Player Two wins");
}else if(PlayerOneChoice=="Scissors" && PlayerTwoChoice=="Paper"){
    console.log("Player One wins");
}else if(PlayerOneChoice=="Paper" && PlayerTwoChoice=="Scissors"){
    console.log("Player Two wins");
}else{
    console.log("same thing. it is tie");
}
