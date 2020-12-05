function tipCalc(){
    var billAmount = document.getElementById("amount").value;
    var tipPer = document.getElementById("perc").value;

if (billAmount.value == "" || tipPer.value == 0) {
    alert("Please enter values");
    return;
}

 var total = (billAmount * tipPer);
 total = Math.round(total) / 100;
 total = total.toFixed(2);
 document.querySelector(".result").innerHTML = ` Tip Amount: ${total} `;
}

document.getElementById("btn").onclick = function() {
    tipCalc();
  };


