let check = document.querySelectorAll("input");
let buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", function () {
    if (check[0].value === "" || check[1].value === "" || check[2].value === "") {
        alert(`please enter your data`);
    } else if (check[1].value < 18) {
        alert(`you are under 18`); //bonus
    } else if (check[1].value >= 18) {
        console.log(`Name: ${check[0].value}  Age: ${check[1].value}  Job: ${check[2].value}`);
        alert(`Registration Completed`); //bonus
    }
});