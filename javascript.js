const output = document.querySelector("#totalDose");
const med = document.querySelector("#med");
const weight = document.querySelector("#weight");
const btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    var number = parseInt(document.getElementById("number").value);
    
    output.textContent = med.value * weight.value * number;
});