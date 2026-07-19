var degree = window.prompt("enter your dgree: ");

if(degree<=100 && degree>=90){
    console.log("Excellent");
}else if(degree<90 && degree>=80){
    console.log("Good");
}else if(degree<80 && degree>=70){
    console.log("Average");
}else if(degree<70 && degree>=60){
    console.log("Pass");
}else if(degree<60 && degree>=0){
    console.log("Fail");
}else{
    console.log("wrong number");
}