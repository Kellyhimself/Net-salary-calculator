// Event listener for the basicSalary input field.
document.getElementById("basicSalary").addEventListener("input", (event) => {
  // Get the basic salary value .
  const basicSalary = event.target.value;

  // Save the basic salary in a variable,locally for future use.
  localStorage.setItem("basicSalary", basicSalary);
});

// Event listener for the benefits input field.
document.getElementById("benefits").addEventListener("input", (event) => {
  // Get the value of the benefits input field.
  const benefits = event.target.value;

  // Store the benefits in a variable.
  localStorage.setItem("benefits", benefits);
});
function calculatePayee() {
  const basicSalary = parseInt(localStorage.getItem("basicSalary"));
  const benefits = parseInt(localStorage.getItem("benefits"));
  const taxableIncome = basicSalary + benefits; //calculate the taxable income
  //array of objects for tax brackets
  debugger;
  const taxBracketsArray = [
    { minimum: 0, maximum: 24000, rate: 0.1 },
    { minimum: 24001, maximum: 32333, rate: 0.25 },
    { minimum: 32334, maximum: 500000, rate: 0.3 },
    { minimum: 500001, maximum: 800000, rate: 0.325 },
    { minimum: 800001, maximum: Infinity, rate: 0.35 },
  ];
  //declare the totalTax variable and loop through the array incrementing amount of tax depending on the taxableIncome amaount

  let totalTax = 0;

  for (const taxBracket of taxBracketsArray) {
    const taxablePotion = Math.min(
      (taxableIncome, taxBracket.maximum) - taxBracket.minimum
    );
    const taxInThisBracket = taxablePotion * taxBracket.rate;
    totalTax += taxInThisBracket;
    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
  }
}

function calculateNhif() {
  const basicSalary = parseInt(localStorage.getItem("basicSalary"));
  const benefits = parseInt(localStorage.getItem("benefits"));
  const deductableIncome = basicSalary + benefits; //calculate the taxable income
  //array of objects for tax brackets
  debugger;
  const nhifBracketsArray = [
    { minimum: 0, maximum: 5999, rate: 150 },
    { minimum: 6000, maximum: 7999, rate: 300 },
    { minimum: 8000, maximum: 11999, rate: 400 },
    { minimum: 12000, maximum: 14999, rate: 500 },
    { minimum: 15000, maximum: 19999, rate: 600 },
    { minimum: 20000, maximum: 24999, rate: 750 },
    { minimum: 25000, maximum: 29999, rate: 850 },
    { minimum: 30000, maximum: 34999, rate: 900 },
    { minimum: 35000, maximum: 39999, rate: 950 },
    { minimum: 40000, maximum: 44999, rate: 1000 },
    { minimum: 45000, maximum: 49999, rate: 1100 },
    { minimum: 50000, maximum: 59999, rate: 1200 },
    { minimum: 60000, maximum: 69999, rate: 1300 },
    { minimum: 70000, maximum: 79999, rate: 1400 },
    { minimum: 80000, maximum: 89999, rate: 1500 },
    { minimum: 90000, maximum: 99999, rate: 1600 },
    { minimum: 100000, maximum: Infinity, rate: 1700 },
  ];
  //declare the totalTax variable and loop through the array incrementing amount of tax depending on the taxableIncome amaount

  let totalNhif = 0;

  for (const nhifBracket of nhifBracketsArray) {
    const nhifdeductablePotion =
      Math.min(deductableIncome, nhifBracket.maximum) - nhifBracket.minimum;
    let nhifInThisBracket = (nhifdeductablePotion / 100) * nhifBracket.rate;
    totalNhif += nhifInThisBracket;
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is ${totalNhif}`;
  }
}
