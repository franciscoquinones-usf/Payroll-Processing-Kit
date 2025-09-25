// Step 2: Employee Array

const employees = [
  { name: "Alice", hourlyRate: 25, hoursWorked: 38 },
  { name: "Bob", hourlyRate: 20, hoursWorked: 45 },
  { name: "Joe", hourlyRate: 22, hoursWorked: 31 },
  { name: "Jane", hourlyRate: 23, hoursWorked: 44 }
];

// Step 3: Pay for up to 40 hours

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Step 4: Overtime 1.5x over 40 hours

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5);
    }
    return 0;
}

// Step 5: Tax Deduction of 15%

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

// Step 6: Process Payroll

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = grossPay - calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2),
    };
}

// Step 7: Loop and Log

employees.forEach(employee => {
    console.log(processPayroll(employee));
});
