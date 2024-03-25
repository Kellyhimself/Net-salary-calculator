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
//function to get gross pay
function calculateGross() {
  const basicSalary = parseInt(localStorage.getItem("basicSalary"));
  const benefits = parseInt(localStorage.getItem("benefits"));
  const grossSalary = basicSalary + benefits;

  const grossValue = document.getElementById("grossValue");
  grossValue.innerText = `Your gross salary is ${grossSalary}`;
  return grossSalary;
}

//function for calculating payee
function calculatePaye() {
  const basicSalary = parseInt(localStorage.getItem("basicSalary"));
  const benefits = parseInt(localStorage.getItem("benefits"));
  const taxableIncome = basicSalary + benefits; //calculate the taxable income

  // { minimum: 0, maximum: 24000, rate: 0.1 },
  //{ minimum: 24001, maximum: 32333, rate: 0.25 },
  //{ minimum: 32334, maximum: 500000, rate: 0.3 },
  //{ minimum: 500001, maximum: 800000, rate: 0.325 },
  //{ minimum: 800001, maximum: Infinity, rate: 0.35 },

  //declare the totalTax variable and loop through the array incrementing amount of tax depending on the taxableIncome amaount

  let totalTax = 0;
  let amountToTax1 = 0;
  let amountToTax2 = 0;
  let amountToTax3 = 0;
  let amountToTax4 = 0;
  //if conditions are good to check in this sense;
  if (taxableIncome <= 24000) {
    totalTax = taxableIncome * 0.1;

    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
    return totalTax;
  } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
    amountToTax1 = taxableIncome - 24000;
    totalTax = 24000 * 0.1 + amountToTax1 * 0.25;

    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
    return totalTax;
  } else if (taxableIncome > 32333 && taxableIncome <= 500000) {
    amountToTax2 = taxableIncome - 32333;
    totalTax = 24000 * 0.1 + amountToTax1 * 0.25 + amountToTax2 * 0.3;

    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
    return totalTax;
  } else if (taxableIncome > 500000 && taxableIncome <= 800000) {
    amountToTax3 = taxableIncome - 500000;
    totalTax =
      24000 * 0.1 +
      amountToTax1 * 0.25 +
      amountToTax2 * 0.3 +
      amountToTax3 * 0.325;

    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
    return totalTax;
  } else if (taxableIncome > 800000) {
    amountToTax4 = taxableIncome - 800000;
    totalTax =
      24000 * 0.1 +
      amountToTax1 * 0.25 +
      amountToTax2 * 0.3 +
      amountToTax3 * 0.325 +
      amountToTax4 * 0.35;

    const payeValue = document.getElementById("payeValue");
    payeValue.innerText = `Your PAYE is ${totalTax}`;
    return totalTax;
  }
}

//onto NHIF now

function calculateNhif() {
  const gross = calculateGross();

  if (gross <= 5999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF deduction is 150`;
    return 150;
  } else if (gross >= 6000 && gross <= 7999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 300`;
    return 300;
  } else if (gross >= 8000 && gross <= 11999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 400`;
    return 400;
  } else if (gross >= 12000 && gross <= 14999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 500`;
    return 500;
  } else if (gross >= 15000 && gross <= 19999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 600`;
    return 600;
  } else if (gross >= 20000 && gross <= 24999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 750`;
    return 750;
  } else if (gross >= 25000 && gross <= 29999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 850`;
    return 850;
  } else if (gross >= 30000 && gross <= 34999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 900`;
    return 900;
  } else if (gross >= 35000 && gross <= 39999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 950`;
    return 950;
  } else if (gross >= 40000 && gross <= 44999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1000`;
    return 1000;
  } else if (gross >= 45000 && gross <= 49999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1100`;
    return 1100;
  } else if (gross >= 50000 && gross <= 59999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1200`;
    return 1200;
  } else if (gross >= 60000 && gross <= 69999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1300`;
    return 1300;
  } else if (gross >= 70000 && gross <= 79999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1400`;
    return 1400;
  } else if (gross >= 80000 && gross <= 89999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1500`;
    return 1500;
  } else if (gross >= 90000 && gross <= 99999) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1600`;
    return 1600;
  } else if (gross >= 100000) {
    const nhifValue = document.getElementById("nhifValue");
    nhifValue.innerText = `Your NHIF is 1700`;
    return 1700;
  }
}

//lets define a function to calculate NSSF

const calculateNssf = () => {
  const gross = calculateGross();
  //now the 6% of gross to be deducted
  const nssfDeduction = gross * 0.06;
  const nssfValue = document.getElementById("nssfValue");
  nssfValue.innerText = `Your NSSF deduction is ${nssfDeduction}`;
  return nssfDeduction;
};

//finally, our net pay calculator function;
const calculateNet = () => {
  const netPay =
    calculateGross() - calculateNhif() - calculatePaye() - calculateNssf();
  const netValue = document.getElementById("netValue");
  netValue.innerText = `Your net pay is ${netPay}`;
  return netPay;
};
